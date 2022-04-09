<template>
  <div class="page-main">
    <div class="filter-box">
      <el-form ref="form" class="filter-form" :model="list.query" label-width="80px" inline>
        <el-form-item label="名称" prop="username">
          <el-input v-model="list.query.username" />
        </el-form-item>
        <el-form-item label="级别" prop="address">
          <el-input v-model="list.query.address" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="getList">搜索</el-button>
          <el-button type="primary" @click="() => { form.resetFields(); }">重置</el-button>
        </el-form-item>
      </el-form>
    </div>

    <el-table v-loading="list.load" :data="list.data" border size="small">
      <el-table-column prop="id" label="ID" width="80" align="center" />
      <el-table-column prop="username" label="用户名" align="center" />
      <el-table-column prop="manageId" label="管理员" align="center" />
      <el-table-column prop="ip" label="IP" align="center" />
      <el-table-column prop="address" label="地址" align="center" />
      <el-table-column prop="ua" label="UA" align="center" width="360" />
      <el-table-column prop="login_time" label="登陆时间" align="center" />
      <!-- <el-table-column label="操作" align="center">
        <template #default="scope">
          <el-button @click="openDialog(dialogData, '编辑角色', scope.row)">编辑</el-button>
          <el-button type="danger" @click="handleDelete([scope.row.id], 'role')">删除</el-button>
        </template>
      </el-table-column>-->
    </el-table>

    <div class="pagination">
      <el-pagination
        v-model:currentPage="list.query.page"
        v-model:page-size="list.query.limit"
        :page-sizes="[20, 50, 100]"
        small
        layout="total, sizes, prev, pager, next, jumper"
        :total="list.query.total"
        @size-change="getList"
        @current-change="getList"
      />
    </div>
  </div>
</template>

<script lang='ts'>
import { requestLogLoginPages } from '@/api/log';
import { defineComponent, reactive, ref } from 'vue';
import { openDialog, handleDelete } from '@/api/base';

export default defineComponent({
  name: 'LoginLog',
  setup() {
    let form = ref();
    let dialogData = reactive<DialogData<Log.LoginRow | {}>>({
      visible: false,
      title: '',
      data: {}
    });
    let list = reactive<TableList<Log.LoginRow>>({
      data: [],
      load: false,
      query: {
        page: 1,
        limit: 20,
        total: 0,
        username: '',
        address: ''
      }
    });

    const getList = async () => {
      try {
        list.load = true;
        const { code, result } = await requestLogLoginPages(list.query);
        list.data = result.rows;
        list.query.total = result.total;
        list.load = false;
      } catch (error) {
        list.load = false;
      }
    };
    getList();

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
