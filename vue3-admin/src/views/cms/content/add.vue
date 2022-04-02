<template>
  <el-row>
    <el-col :span="11">
      <el-form id="form" :model="formData" label-width="80px">
        <el-form-item label="标题">
          <el-input v-model="formData.title" autocomplete="off" />
        </el-form-item>
        <el-form-item label="置顶">
          <el-radio-group v-model="formData.top">
            <el-radio :label="true">是</el-radio>
            <el-radio :label="false">否</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="推荐指数">
          <el-input-number v-model="formData.recom" autocomplete="off" />
        </el-form-item>
        <el-form-item label="状态">
          <el-input v-model="formData.status" autocomplete="off" placeholder="为空则不修改" />
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
import { defineComponent, onBeforeUnmount, onMounted, reactive, ref } from 'vue';
import { handleSubmit } from '@/api/base';
import { requestRow } from '@/api/cms/content';
import { useTagViewStore } from '@/store/modules/tagView';
import { useRoute } from 'vue-router';
import Editor from 'md-editor-v3';
import 'md-editor-v3/lib/style.css';
// https://imzbf.github.io/md-editor-v3/docs/index#%F0%9F%93%9E%20onChange
export default defineComponent({
  name: 'Add',
  components: {
    Editor
  },
  setup(props) {
    const tagViewStore = useTagViewStore();
    const route = useRoute();
    let formData = reactive({
      title: '',
      top: false,
      recom: 0,
      status: 'top_rack',
      content: ``
    });
    let strHtml = ref<string>('');
    const editor = ref();

    onMounted(async () => {
      if (route.query.id) {
        const { result } = await requestRow(route.query.id as any);
        Object.assign(formData, result);
      }
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
      formData,
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
