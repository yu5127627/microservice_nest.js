<template>
  <el-row>
    <el-col :span="11">
      <el-form id="form" :model="formData" label-width="80px">
        <el-form-item label="标题">
          <el-input v-model="formData.title" autocomplete="off" />
        </el-form-item>
        <el-form-item label="置顶">
          <el-radio-group v-model="formData.top">
            <el-radio :label="true" border>是</el-radio>
            <el-radio :label="false" border>否</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="推荐指数">
          <el-input-number v-model="formData.recom" autocomplete="off" />
        </el-form-item>
        <el-form-item label="状态">
          <el-select v-model="formData.status">
            <el-option
              v-for="item in options.content_state"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </el-form-item>
        <el-form-item label="分类">
          <el-cascader
            v-model="formData.cateIds"
            :options="cates"
            :props="{ multiple: true, value: 'id', label: 'name', emitPath: false }"
          />
        </el-form-item>
        <el-form-item label="标签">
          <el-checkbox-group v-model="formData.tagIds">
            <el-checkbox-button
              v-for="tag in tags"
              :key="tag.name"
              :label="tag.id"
              :value="tag.id"
            >{{ tag.name }}</el-checkbox-button>
          </el-checkbox-group>
        </el-form-item>
        <el-form-item label="内容">
          <editor
            v-model="formData.content"
            height="600px"
            :preview="false"
            :on-html-changed="editorHtmlChange"
          />
        </el-form-item>
        <el-form-item>
          <el-button>取消</el-button>
          <el-button type="primary" @click="createContent">提交</el-button>
        </el-form-item>
      </el-form>
    </el-col>
    <el-col :span="1" />
    <el-col
      :span="12"
      style="height: 882px;box-shadow: 0 0 0 1px var(--el-input-border-color,var(--el-border-color)) inset;border-radius: var(--el-input-border-radius,var(--el-border-radius-base));"
    >
      <div id="str_html" :innerHTML="strHtml" />
    </el-col>
  </el-row>
</template>

<script lang='ts'>
import { useSettingStore } from '@/store/modules/setting';
import { defineComponent, onMounted, reactive, ref } from 'vue';
import { handleSubmit } from '@/api/base';
import { requestRow } from '@/api/cms/content';
import { useTagViewStore } from '@/store/modules/tagView';
import { requestList as requestTags } from '@/api/cms/tag';
import { requestList as requestCates } from '@/api/cms/category';
import { useRoute } from 'vue-router';
import Editor from 'md-editor-v3';
import 'md-editor-v3/lib/style.css';
// https://imzbf.github.io/md-editor-v3/docs/index#%F0%9F%93%9E%20onChange

interface ListData {
  name: string;
  children: Array<Category.CategoryRow>
}

export default defineComponent({
  name: 'Add',
  components: {
    Editor
  },
  setup(props) {
    const tagViewStore = useTagViewStore();
    const settingStore = useSettingStore();
    const route = useRoute();
    let formData = reactive({
      title: '',
      top: false,
      recom: 0,
      status: 'up_rack',
      content: ``,
      tagIds: [],
      cateIds: []
    });
    let strHtml = ref<string>('');
    let tags = reactive<any[]>([]);
    let cates = reactive<any[]>([]);
    const editor = ref();

    // 递归合并分类
    const deepMergeCate = (cate: any, cates: any) => {
      let arr = [];
      for (const item of cates) {
        if (item.pid === cate.id) {
          let children = deepMergeCate(item, cates);
          if (children.length) item.children = children;
          arr.push(item);
        }
      }
      if (arr.length) cate.children = arr;
      return arr;
    };

    onMounted(async () => {
      if (route.query.id) {
        const { result } = await requestRow(route.query.id as any);
        result.tagIds = result.tags;
        result.cateIds = result.categorys;
        Object.assign(formData, result);
      }
      try {
        const tagResult = await requestTags({ attrs: 'id,name' }, true);
        tags.push(...tagResult.result);
        const { result } = await requestCates({ attrs: 'id,name,pid,group' }, true);
        // 排序
        result.sort((a: Category.CategoryRow, b: Category.CategoryRow) => a.sort - b.sort);
        // 筛选出所有分组，重组复合条件的数据结构
        const groups: Array<ListData> = [...new Set(result.map((item: Category.CategoryRow) => item.group))].map((item: string, index: number) => { return { id: index, name: item, children: [] }; });
        for (const col of groups) {
          // 当前分组下所有分类
          let currentCates = [];
          // 当前分组下的一级分类
          let currentTopCate = [];
          for (const item of result) {
            // 筛选出当前分组下分类
            if (item.group === col.name) {
              currentCates.push(item);
              // 筛选出当前分组下的一级分类
              if (item.pid === 0) currentTopCate.push(item);
            }
          }
          // 根据顶级分类递归做合并
          for (const topCate of currentTopCate) topCate.children = deepMergeCate(topCate, currentCates);
          // 保存到当前分组下
          col.children.push(...currentTopCate);
        }
        cates.push(...groups);
      } catch (error) { }
    });

    // 监听 html 变化
    const editorHtmlChange = (str: string) => strHtml.value = str;

    const createContent = async () => {
      try {
        await handleSubmit(formData, 'blog/content');
        tagViewStore.handleOpen({ path: '/blog/content', title: '内容列表', affix: true });
      } catch (error) {
        console.log(error);
      }
    };

    return {
      editorHtmlChange,
      strHtml,
      editor,
      tags,
      cates,
      formData,
      options: settingStore.defaultConfig.option,
      createContent
    };
  }
});
</script>

<style lang='less' scoped>
#str_html {
  padding: 20px;
  height: calc(100% - 40px);
  overflow-y: auto;
}
</style>
