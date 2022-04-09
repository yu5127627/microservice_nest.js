<template>
  <div class="page-main">
    <div class="operate-box">
      <div class="operate-btns">
        <el-button
          type="primary"
          @click="group = ''; parentCate = {}; openDialog(dialogData, '新增分类')"
        >新增</el-button>
      </div>
      <el-button type="primary" icon="Refresh" @click="() => { getList() }" />
    </div>

    <el-tree
      v-loading="list.load"
      :data="list.data"
      node-key="id"
      :props="{
        children: 'children',
        label: 'name',
      }"
      default-expand-all
      :expand-on-click-node="false"
    >
      <template #default="{ node, data }">
        <span class="custom-tree-node">
          <template v-if="data.id">{{ data.id }}_</template>
          {{ node.label }}
          <template v-if="data.sort">({{ data.sort }})</template>
          <el-button
            type="primary"
            :icon="Plus"
            size="small"
            @click="() => { group = data.group || node.label; data.id ? parentCate = data : null; openDialog(dialogData, '新增分类'); }"
          />
          <template v-if="data.group">
            <el-button
              type="primary"
              :icon="Edit"
              size="small"
              @click="openDialog(dialogData, '编辑分类', data)"
            />
            <el-button
              type="danger"
              :icon="Delete"
              size="small"
              @click="handleDelete([data.id], MODULE)"
            />
          </template>
        </span>
      </template>
    </el-tree>

    <category-dialog
      v-if="dialogData.visible"
      :dialog-data="dialogData"
      :module="MODULE"
      :group="group"
      :parent-cate="parentCate"
    />
  </div>
</template>

<script lang='ts'>
import { requestList } from '@/api/cms/category';
import { defineComponent, reactive, ref } from 'vue';
import { Edit, Delete, Plus } from '@element-plus/icons-vue';
import CategoryDialog from './components/categoryDialog.vue';
import { openDialog, handleDelete } from '@/api/base';
import { emitter } from '@/utils/mitt';

interface ListData {
  name: string;
  children: Array<Category.CategoryRow>
}
const MODULE = 'blog/category';
export default defineComponent({
  name: "Category",
  components: { CategoryDialog },
  setup() {
    let parentCate = reactive({});
    let group = ref<string>('');
    let dialogData = reactive<DialogData<Category.CategoryRow | {}>>({
      visible: false,
      title: "",
      data: {}
    });
    let list = reactive<TableList<ListData>>({
      data: [],
      load: false,
      query: {
        limit: 20,
        page: 1,
        total: 0,
        attrs: "all"
      }
    });

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

    const getList = async () => {
      try {
        list.load = true;
        const { code, result } = await requestList(list.query);
        // 排序
        result.sort((a: Category.CategoryRow, b: Category.CategoryRow) => a.sort - b.sort);
        // 筛选出所有分组，重组复合条件的数据结构
        const groups: Array<ListData> = [...new Set(result.map((item: Category.CategoryRow) => item.group))].map((item: string) => { return { name: item, children: [] }; });
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
        list.data = groups;
        list.load = false;
      }
      catch (error) {
        list.load = false;
      }
    };
    getList();

    emitter.on('list-reload', (key) => {
      if (key === MODULE) getList();
    });

    return {
      parentCate,
      group,
      MODULE,
      list,
      dialogData,
      Edit,
      Delete,
      Plus,
      openDialog, handleDelete, getList
    };
  }
});
</script>

<style lang='less' scoped>
:deep {
  .el-tree-node__content {
    margin: 1px 0;
  }
}
.custom-tree-node {
  height: 30px;
  line-height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  .el-button:first-child {
    margin-left: 20px;
  }
}
</style>
