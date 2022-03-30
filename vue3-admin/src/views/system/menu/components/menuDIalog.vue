<template>
  <el-dialog
    v-model="formData.visible"
    :title="formData.title"
    width="600px"
    draggable
    destroy-on-close
    :close-on-click-modal="false"
  >
    <el-form :model="formData.dialogData" label-width="80px" inline>
      <el-form-item label="菜单类型" prop="type">
        <el-radio-group v-model="formData.data.type">
          <el-radio-button :label="0">目录</el-radio-button>
          <el-radio-button :label="1">菜单</el-radio-button>
          <el-radio-button :label="2">外链</el-radio-button>
          <el-radio-button :label="3">规则</el-radio-button>
        </el-radio-group>
      </el-form-item>
      <el-form-item v-if="formData.data.type != 2" label="菜单图标" prop="icon">
        <el-input v-model="formData.data.icon" />
        <!-- <el-popover
          placement="bottom-start"
          width="450"
          trigger="click"
          @show="$refs['iconSelect'].reset()"
        >
          <icon-select ref="iconSelect" @selected="selected" />
          <el-input
            slot="reference"
            v-model="formData.data.icon"
            placeholder="点击选择图标"
            style="width:450px;"
          >
            <svg-icon
              v-if="formData.data.icon"
              slot="prefix"
              :icon-class="formData.data.icon"
              class="el-input__icon"
              style="height: 32px;width: 16px;"
            />
            <i v-else slot="prefix" class="el-icon-search el-input__icon" />
          </el-input>
        </el-popover>-->
      </el-form-item>
      <el-form-item v-if="formData.data.type != 2 && formData.data.type == 1" label="缓存菜单">
        <el-radio-group v-model="formData.data.cache">
          <el-radio-button label="true">是</el-radio-button>
          <el-radio-button label="false">否</el-radio-button>
        </el-radio-group>
      </el-form-item>
      <el-form-item v-if="formData.data.type != 2" label="菜单可见">
        <el-radio-group v-model="formData.data.show">
          <el-radio-button label="true">是</el-radio-button>
          <el-radio-button label="false">否</el-radio-button>
        </el-radio-group>
      </el-form-item>
      <el-form-item :label="formData.data.type == 2 ? '规则名称' : '菜单名称'" prop="title">
        <el-input v-model="formData.data.title" />
      </el-form-item>
      <el-form-item label="权限规则" prop="action">
        <el-input v-model="formData.data.action" />
      </el-form-item>
      <el-form-item v-if="formData.data.type != 2" label="路由地址" prop="url">
        <el-input v-model="formData.data.url" />
      </el-form-item>
      <el-form-item label="菜单排序">
        <el-input-number v-model="formData.data.sort" :min="1" label="描述文字" />
      </el-form-item>
      <el-form-item v-if="formData.data.type == 1" label="组件名称" prop="name">
        <el-input v-model="formData.data.name" placeholder="组件内的name" />
      </el-form-item>
      <el-form-item v-if="formData.data.type == 1" label="组件路径" prop="path">
        <el-input v-model="formData.data.path" placeholder="组件的文件路径" />
      </el-form-item>
      <el-form-item v-if="list.length" label="所属目录">
        <el-tree
          node-key="id"
          :current-node-key="formData.data.pid"
          :data="list"
          highlight-current
          :props="{
            children: 'children',
            label: 'title',
          }"
          accordion
          @node-click="handleNodeClick"
        />
        <!-- <treeselect
          v-model="formData.data.pid"
          :options="list"
          :multiple="true"
          style="width: 450px;"
          placeholder="所属目录"
        />-->
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="formData.visible = false">取消</el-button>
        <el-button type="primary" @click="handleSubmit(formData, 'menu')">提交</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script lang='ts'>
import { defineComponent, reactive, ref } from 'vue';
import { handleSubmit } from '@/api/base';
import { getMenu } from '@/api/menu';
import { useMenuStore } from '@/store/modules/menu';
// import IconSelect from "./IconSelect/index.vue";

export default defineComponent({
  name: 'MenuDialog',
  components: {
    // IconSelect
  },
  props: {
    dialogData: {
      type: Object,
      default: () => {
        return {
          visible: false,
          title: '',
          data: {}
        };
      }
    }
  },
  setup(props) {
    let catalog = '';
    let formData = reactive(props.dialogData);
    const menuStore = useMenuStore();
    let list = reactive<Array<any>>([]);

    const getList = async () => {
      try {
        let { code, result } = await getMenu({ attrs: 'id,pid,title,type' });
        result.sort((a: Menu.MenuRow, b: Menu.MenuRow) => a.sort - b.sort);
        let topMenus: Menu.MenuRow[] = result.filter((item: Menu.MenuRow) => item.pid === 0 && item.type < 2);
        let dirAndMenu = result.filter((item: Menu.MenuRow) => item.type < 2);
        for (const item of topMenus) menuStore.deepMergeMenu(item, dirAndMenu);
        const rootMenu = {
          id: 0,
          pid: -1,
          title: '根节点',
          type: 0,
          children: topMenus
        };
        list.push(rootMenu);
      } catch (error) {
      }
    };
    getList();

    const handleNodeClick = (data: any) => {
      console.log(data);
    };

    return {
      handleNodeClick,
      list,
      formData,
      catalog,
      handleSubmit
    };
  }
});
</script>

<style lang='less' scoped>
</style>
