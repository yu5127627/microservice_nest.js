<template>
  <div>
    <div class="operate-box">
      <div class="operate-btns">
        <el-button type="primary">新增</el-button>
      </div>
      <el-button type="primary" icon="Refresh" />
    </div>
    <div class="filter-box">
      <el-form class="filter-form" :model="listQuery" label-width="80px" inline>
        <el-form-item label="昵称">
          <el-input v-model="listQuery.nickname" />
        </el-form-item>
        <el-form-item label="用户名">
          <el-input v-model="listQuery.username" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">搜索</el-button>
        </el-form-item>
      </el-form>
    </div>
    <el-table :data="list" border size="small">
      <el-table-column prop="id" label="ID" width="60" align="center" />
      <el-table-column prop="avatar" label="头像" align="center">
        <template #default="scope">
          <el-image :src="scope.row.avatar" style="width: 40px;" />
        </template>
      </el-table-column>
      <el-table-column prop="nickname" label="昵称" align="center" />
      <el-table-column prop="username" label="用户名" align="center" />
      <el-table-column prop="roleId" label="角色" align="center" />
      <el-table-column prop="ctime" label="创建时间" align="center" />
      <el-table-column label="操作" align="center">
        <template #default="scope">
          <el-button size="small" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button size="small" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="el-pages">
      <el-pagination
        v-model:currentPage="listQuery.page"
        v-model:page-size="listQuery.limit"
        :page-sizes="[20, 50, 100]"
        small="size"
        layout="total, sizes, prev, pager, next, jumper"
        :total="listQuery.total"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      />
    </div>
  </div>
</template>

<script lang='ts'>
import { getManageList } from '@/api/manage';
import { defineComponent, reactive, ref } from 'vue';

export default defineComponent({
  name: 'Manage',
  setup() {
    let list = reactive<Array<any>>([]);
    let listQuery = reactive({
      page: 1,
      limit: 20,
      total: 0,
      nickname: '',
      username: ''
    });

    const requestManage = async () => {
      const { code, result } = await getManageList(listQuery);
      console.log(result);
      list.push(...result.rows);
      listQuery.total = result.total;
    };
    requestManage();

    return {
      list,
      listQuery
    };
  }
});
</script>

<style lang='less' scoped>
.operate-box {
  padding-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.el-pages {
  padding: 10px 0;
}
.filter-box {
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-bottom: none;
  .filter-form {
    padding-top: 15px;
  }
}
</style>
