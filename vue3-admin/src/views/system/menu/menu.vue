<template>
  <div class="page-main">
    <div class="operate-box">
      <div class="operate-btns">
        <el-button type="primary" @click="openDialog(dialogData, '新增菜单')">新增</el-button>
      </div>
      <el-button type="primary" icon="Refresh" @click="() => { form.resetFields(); getList() }" />
    </div>

    <div class="filter-box">
      <el-form ref="form" class="filter-form" :model="list.query" label-width="80px" inline>
        <el-form-item label="名称" prop="title">
          <el-input v-model="list.query.title" />
        </el-form-item>
        <el-form-item label="权限" prop="level">
          <el-input v-model="list.query.action" />
        </el-form-item>
        <el-form-item label="类型" prop="type">
          <el-input v-model="list.query.type" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="getList">搜索</el-button>
          <el-button type="primary" @click="() => { form.resetFields(); }">重置</el-button>
        </el-form-item>
      </el-form>
    </div>

    <el-table
      v-loading="list.load"
      :data="list.data"
      border
      size="small"
      row-key="id"
      :default-expand-all="true"
      lazy
      style="width: 100%"
      :tree-props="{ children: 'children', hasChildren: 'hasChildren' }"
      @selection-change="(selection) => { selectList = selection.map((item: Menu.MenuRow) => item.id) }"
    >
      <el-table-column type="selection" />
      <el-table-column prop="title" label="名称" align="center" />
      <el-table-column prop="icon" label="图标" align="center">
        <template #default="scope">
          <i :class="'iconfont ' + scope.row.icon" />
        </template>
      </el-table-column>
      <el-table-column prop="sort" label="排序" align="center" width="60" />
      <el-table-column prop="action" label="权限规则" align="center" />
      <el-table-column prop="path" label="组件路径" align="center" />
      <el-table-column prop="cache" label="缓存" align="center">
        <template #default="scope">{{ scope.row.cache == true ? '是' : '否' }}</template>
      </el-table-column>
      <el-table-column prop="hide" label="菜单显示" align="center">
        <template #default="scope">{{ scope.row.hide ? '否' : '是' }}</template>
      </el-table-column>
      <el-table-column prop="type" label="类型" align="center">
        <template #default="scope">
          <el-tag v-if="scope.row.type === 0" type="success" effect="plain">目录</el-tag>
          <el-tag v-if="scope.row.type === 1" effect="plain">菜单</el-tag>
          <el-tag v-if="scope.row.type === 2" effect="plain">外链</el-tag>
          <el-tag v-if="scope.row.type === 3" type="info" effect="plain">规则</el-tag>
        </template>
      </el-table-column>
      <el-table-column fixed="right" label="操作" align="center">
        <template #default="scope">
          <el-button @click="openDialog(dialogData, '编辑菜单', scope.row)">编辑</el-button>
          <el-button type="danger" @click="handleDelete([scope.row.id], 'menu')">删除</el-button>
        </template>
      </el-table-column>
    </el-table>

    <menu-dialog v-if="dialogData.visible" :dialog-data="dialogData" />
  </div>
</template>

<script lang='ts'>
import { getMenu } from '@/api/menu';
import { defineComponent, reactive, ref } from 'vue';
import { openDialog, handleDelete } from '@/api/base';
import { emitter } from '@/utils/mitt';
import { useMenuStore } from '@/store/modules/menu';
import MenuDialog from './components/menuDialog.vue';

export default defineComponent({
  name: "Menu",
  components: { MenuDialog },
  setup() {
    const menuStore = useMenuStore();
    let form = ref();
    let dialogData = reactive<DialogData<Role.RoleRow | {}>>({
      visible: false,
      title: "",
      data: {
        type: 0,
        icon: '',
        cache: false,
        show: true,
        title: '',
        action: '',
        url: '',
        sort: 99,
        name: '',
        path: '',
        pid: 0, // 默认选中的节点
      }
    });
    let list = reactive<TableList<any>>({
      data: [],
      load: false,
      query: {
        limit: 20,
        page: 1,
        total: 0,
        title: "",
        action: "",
        type: ""
      }
    });
    let selectList = reactive<Array<number>>([]);

    const getList = async () => {
      try {
        list.load = true;
        let { code, result } = await getMenu();
        result.sort((a: Menu.MenuRow, b: Menu.MenuRow) => a.sort - b.sort);
        let topMenus = result.filter((item: Menu.MenuRow) => item.pid === 0);
        for (const item of topMenus) menuStore.deepMergeMenu(item, result);
        list.data = topMenus;
        list.load = false;
      } catch (error) {
        list.load = false;
      }
    };
    getList();

    emitter.on("list-reload", (module) => {
      if (module === "menu")
        getList();
    });
    return {
      selectList,
      list,
      form,
      dialogData,
      getList,
      openDialog,
      handleDelete
    };
  }
});
</script>

<style lang='less' scoped>
</style>
