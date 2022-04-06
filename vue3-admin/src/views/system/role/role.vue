<template>
  <div class="page-main">
    <div class="operate-box">
      <div class="operate-btns">
        <el-button type="primary" @click="openDialog(dialogData, '新增角色')">新增</el-button>
      </div>
      <el-button type="primary" icon="Refresh" @click="() => { form.resetFields(); getList() }" />
    </div>

    <div class="filter-box">
      <el-form ref="form" class="filter-form" :model="list.query" label-width="80px" inline>
        <el-form-item label="名称" prop="name">
          <el-input v-model="list.query.name" />
        </el-form-item>
        <el-form-item label="级别" prop="level">
          <el-input v-model="list.query.level" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="getList">搜索</el-button>
          <el-button type="primary" @click="() => { form.resetFields(); }">重置</el-button>
        </el-form-item>
      </el-form>
    </div>

    <el-table v-loading="list.load" :data="list.data" border size="small">
      <el-table-column prop="id" label="ID" width="60" align="center" />
      <el-table-column prop="name" label="名称" align="center" />
      <el-table-column prop="description" label="描述" align="center" />
      <el-table-column prop="level" label="级别" align="center" />
      <el-table-column label="操作" align="center">
        <template #default="scope">
          <el-button type="primary" @click="openDialog(authData, '权限管理', scope.row)">权限管理</el-button>
          <el-button @click="openDialog(dialogData, '编辑角色', scope.row)">编辑</el-button>
          <el-button type="danger" @click="handleDelete([scope.row.id], 'role')">删除</el-button>
        </template>
      </el-table-column>
    </el-table>

    <div class="pagination">
      <el-pagination
        v-model:currentPage="list.query.page"
        v-model:page-size="list.query.limit"
        :page-sizes="[15, 20, 50, 100]"
        small
        layout="total, sizes, prev, pager, next, jumper"
        :total="list.query.total"
        @size-change="getList"
        @current-change="getList"
      />
    </div>

    <role-dialog :dialog-data="dialogData" />
    <auth-dialog v-if="authData.visible" :dialog-data="authData" />
  </div>
</template>

<script lang='ts'>
import { requestPages } from '@/api/role';
import { defineComponent, reactive, ref } from 'vue';
import { openDialog, handleDelete } from '@/api/base';
import RoleDialog from './components/roleDialog.vue';
import AuthDialog from './components/authDialog.vue';
import { emitter } from '@/utils/mitt';

export default defineComponent({
  name: 'Role',
  components: {
    RoleDialog,
    AuthDialog
  },
  setup() {
    let form = ref();
    let dialogData = reactive<DialogData<Role.RoleRow | {}>>({
      visible: false,
      title: '',
      data: {}
    });
    let authData = reactive<DialogData<any>>({
      visible: false,
      title: '',
      data: {}
    });
    let list = reactive<TableList<Role.RoleRow>>({
      data: [],
      load: false,
      query: {
        page: 1,
        limit: 15,
        total: 0,
        name: '',
        level: ''
      }
    });

    const getList = async () => {
      try {
        list.load = true;
        const { code, result } = await requestPages(list.query);
        list.data = result.rows;
        list.query.total = result.total;
        list.load = false;
      } catch (error) {
        list.load = false;
      }
    };
    getList();

    emitter.on('list-reload', (module) => {
      if (module === 'role') getList();
    });

    return {
      list,
      form,
      dialogData,
      authData,
      getList,
      openDialog,
      handleDelete
    };
  }
});
</script>

<style lang='less' scoped>
</style>
