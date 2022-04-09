<template>
  <div class="page-main">
    <div class="operate-box">
      <div class="operate-btns">
        <el-button type="primary" @click="group = ''; openDialog(dialogData, '新增标签')">新增</el-button>
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
          <template v-if="data.group">
            <el-button
              type="primary"
              :icon="Edit"
              size="small"
              @click="openDialog(dialogData, '编辑标签', data)"
            />
            <el-button
              type="danger"
              :icon="Delete"
              size="small"
              @click="handleDelete([data.id], MODULE)"
            />
          </template>
          <template v-else>
            <el-button
              type="primary"
              :icon="Plus"
              size="small"
              @click="() => { group = node.label; openDialog(dialogData, '新增标签'); }"
            />
          </template>
        </span>
      </template>
    </el-tree>

    <tag-dialog
      v-if="dialogData.visible"
      :dialog-data="dialogData"
      :module="MODULE"
      :group="group"
    />
  </div>
</template>

<script lang='ts'>
import { requestList } from '@/api/cms/tag';
import { defineComponent, reactive, ref } from 'vue';
import { Edit, Delete, Plus } from '@element-plus/icons-vue';
import TagDialog from './components/tagDialog.vue';
import { openDialog, handleDelete } from '@/api/base';
import { emitter } from '@/utils/mitt';

interface ListData {
  name: string;
  children: Array<Tag.TagRow>
}
const MODULE = 'blog/tag';
export default defineComponent({
  name: "Tag",
  components: { TagDialog },
  setup() {
    let group = ref<string>('');
    let dialogData = reactive<DialogData<Tag.TagRow | {}>>({
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
    const mergeTags = (tags: Array<Tag.TagRow>) => {
      let arr: Array<ListData> = [];
      for (const tag of tags) {
        let item = arr.find(item => item.name === tag.group);
        if (item) {
          item.children ? item.children.push(tag) : item.children = [tag];
        }
        else {
          arr.push({ name: tag.group, children: [tag] });
        }
      }
      return arr;
    };
    const getList = async () => {
      try {
        list.load = true;
        const { code, result } = await requestList(list.query);
        list.data = mergeTags(result);
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
