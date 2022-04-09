<template>
  <div class="page-main">
    <div class="operate-box">
      <div class="operate-btns">
        <el-button type="primary" @click="handleAdd()">新增</el-button>
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
      <el-table-column prop="title" label="标题" align="center" />
      <el-table-column prop="status" label="状态" align="center">
        <template #default="scope">
          <el-tag
            v-if="scope.row.status === 'up_rack'"
          >{{ settingStore.parseByOption(scope.row.status, 'content_state') }}</el-tag>
          <el-tag
            v-else-if="scope.row.status === 'down_rack'"
            type="danger"
          >{{ settingStore.parseByOption(scope.row.status, 'content_state') }}</el-tag>
          <el-tag
            v-else
            type="warning"
          >{{ settingStore.parseByOption(scope.row.status, 'content_state') }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column prop="recom" label="推荐指数" align="center" />
      <el-table-column prop="scan" label="浏览量" align="center" />
      <el-table-column prop="categorys" label="分类" align="center">
        <template #default="scope">
          <el-tag v-for="item in scope.row.catelist" :key="item.id" type="danger">{{ item.name }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column prop="tags" label="标签" align="center">
        <template #default="scope">
          <el-tag v-for="item in scope.row.taglist" :key="item.id" type="warning">{{ item.name }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column prop="top" label="置顶" align="center">
        <template #default="scope">
          <el-tag
            effect="dark"
            :type="scope.row.top ? 'success' : 'danger'"
          >{{ scope.row.top ? '是' : '否' }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column prop="ctime" label="创建时间" align="center">
        <template #default="scope">{{ parseTime(scope.row.ctime) }}</template>
      </el-table-column>
      <el-table-column label="操作" align="center">
        <template #default="scope">
          <el-button @click="handleAdd(scope.row)">编辑</el-button>
          <el-button type="danger" @click="handleDelete([scope.row.id], 'blog/content')">删除</el-button>
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

    <content-dialog v-if="dialogData.visible" :dialog-data="dialogData" />
  </div>
</template>

<script lang='ts'>
import { requestPages } from '@/api/cms/content';
import { defineComponent, reactive, ref, onMounted } from 'vue';
import { openDialog, handleDelete } from '@/api/base';
import ContentDialog from './components/contentDialog.vue';
import { emitter } from '@/utils/mitt';
import { useTagViewStore } from '@/store/modules/tagView';
import { useSettingStore } from '@/store/modules/setting';
import { requestList as requestTags } from '@/api/cms/tag';
import { requestList as requestCates } from '@/api/cms/category';
import { parseTime } from '@/utils/index';

export default defineComponent({
  name: 'Content',
  components: {
    ContentDialog
  },
  setup() {
    let form = ref();
    const tagStore = useTagViewStore();
    const settingStore = useSettingStore();
    let tags = reactive<any[]>([]);
    let cates = reactive<any[]>([]);
    let dialogData = reactive<DialogData<Content.ContentRow | {}>>({
      visible: false,
      title: '',
      data: {}
    });
    let list = reactive<TableList<Content.ContentRow>>({
      data: [],
      load: false,
      query: {
        page: 1,
        limit: 15,
        total: 0,
        orderBy: ['+ctime', '+id'],
      }
    });

    const getList = async () => {
      try {
        list.load = true;
        const { code, result } = await requestPages(list.query);
        for (const row of result.rows) {
          if (row.categorys.length) {
            row.catelist = cates.filter(item => row.categorys.includes(item.id));
          }
          if (row.tags.length) {
            row.taglist = tags.filter(item => row.tags.includes(item.id));
          }
        }
        list.data = result.rows;
        list.query.total = result.total;
        list.load = false;
      } catch (error) {
        list.load = false;
      }
    };

    const handleAdd = (row?: Content.ContentRow) => {
      tagStore.handleOpen({
        title: '文章',
        path: '/blog/content/add',
        query: { id: row?.id },
        affix: true,
        active: true,
      });
    };

    emitter.on('list-reload', (module) => {
      if (module === 'blog/content') getList();
    });

    onMounted(async () => {
      const tagResult = await requestTags({ attrs: 'id,name' }, true);
      tags.push(...tagResult.result);
      const { result } = await requestCates({ attrs: 'id,name' }, true);
      cates.push(...result);
      await getList();
    });

    return {
      list,
      form,
      dialogData,
      tagStore,
      tags,
      cates,
      settingStore,
      handleAdd,
      getList,
      openDialog,
      handleDelete,
      parseTime
    };
  }
});
</script>

<style lang='less' scoped>
.el-tag {
  margin: 10px 10px 0 0;
}
</style>
