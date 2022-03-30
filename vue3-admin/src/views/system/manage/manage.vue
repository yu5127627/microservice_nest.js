<template>
  <div class="page-main">
    <div class="operate-box">
      <div class="operate-btns">
        <el-button type="primary" @click="openDialog(dialogData, '新增管理员')">新增</el-button>
      </div>
      <el-button type="primary" icon="Refresh" @click="() => { form.resetFields(); getList() }" />
    </div>

    <div class="filter-box">
      <el-form ref="form" class="filter-form" :model="list.query" label-width="80px" inline>
        <el-form-item label="昵称" prop="nickname">
          <el-input v-model="list.query.nickname" />
        </el-form-item>
        <el-form-item label="用户名" prop="username">
          <el-input v-model="list.query.username" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="getList">搜索</el-button>
          <el-button type="primary" @click="() => { form.resetFields(); }">重置</el-button>
        </el-form-item>
      </el-form>
    </div>

    <el-table v-loading="list.load" :data="list.data" border size="small">
      <el-table-column prop="id" label="ID" width="60" align="center" />
      <el-table-column prop="username" label="用户名" align="center" />
      <el-table-column prop="nickname" label="昵称" align="center" />
      <el-table-column prop="avatar" label="头像" align="center">
        <template #default="scope">
          <el-image :src="scope.row.avatar" style="width: 40px;" />
        </template>
      </el-table-column>
      <el-table-column prop="roleId" label="角色" align="center" />
      <el-table-column prop="ctime" label="创建时间" align="center" />
      <el-table-column label="操作" align="center">
        <template #default="scope">
          <el-button @click="openDialog(dialogData, '编辑管理员', scope.row)">编辑</el-button>
          <el-button type="danger" @click="handleDelete([scope.row.id], 'manage')">删除</el-button>
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

    <manage-dialog :dialog-data="dialogData" />
  </div>
</template>

<script lang='ts'>
import { requestPages } from '@/api/manage';
import { defineComponent, reactive, ref } from 'vue';
import { openDialog, handleDelete } from '@/api/base';
import ManageDialog from './components/manageDialog.vue';
import { emitter } from '@/utils/mitt';

export default defineComponent({
  name: 'Manage',
  components: {
    manageDialog: ManageDialog
  },
  setup() {
    let form = ref();
    let dialogData = reactive<DialogData<Manage.ManageRow | {}>>({
      visible: false,
      title: '',
      data: {}
    });
    let list = reactive<TableList<Manage.ManageRow>>({
      data: [],
      load: false,
      query: {
        page: 1,
        limit: 15,
        total: 0,
        nickname: '',
        username: ''
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
      getList,
      openDialog,
      handleDelete
    };
  }
});
</script>

<style lang='less' scoped>
</style>
