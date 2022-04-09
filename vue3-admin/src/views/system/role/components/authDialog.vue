<template>
  <el-dialog
    v-model="formData.visible"
    :title="formData.title"
    width="600px"
    destroy-on-close
    :close-on-click-modal="false"
    top="0"
  >
    <el-tree
      v-if="list.length"
      node-key="id"
      show-checkbox
      :data="list"
      highlight-current
      :default-expanded-keys="roleMenu"
      :default-checked-keys="roleMenu"
      :props="{
        children: 'children',
        label: 'title',
      }"
      @check="eventCheck"
    />
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="formData.visible = false">取消</el-button>
        <el-button type="primary" @click="handleSubmit">提交</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script lang='ts'>
import { defineComponent, onMounted, reactive, ref } from 'vue';
import { getMenu, getRoleMenu, setRoleMenu } from '@/api/menu';
import { useMenuStore } from '@/store/modules/menu';
import { toast } from '@/utils/message';

export default defineComponent({
  name: 'AuthDialog',
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
    const menuStore = useMenuStore();
    let list = reactive<Array<Menu.MenuRow>>([]);
    let roleMenu = reactive<Array<number>>([]);
    let formData = reactive(props.dialogData);

    // 请求角色菜单
    const getList = async () => {
      const { result } = await getRoleMenu(props.dialogData.data.id);
      roleMenu.push(...result);
    };

    // 请求菜单列表
    const getMenuList = async () => {
      const { result } = await getMenu({ attrs: 'id,title,pid,sort' }, true);
      result.sort((a: Menu.MenuRow, b: Menu.MenuRow) => a.sort - b.sort);
      let topMenus: Menu.MenuRow[] = result.filter((item: Menu.MenuRow) => item.pid === 0);
      for (const item of topMenus) menuStore.deepMergeMenu(item, result);
      list.push(...topMenus);
    };

    // 监听选中的节点
    const eventCheck = (node: any, obj: any) => {
      roleMenu.length = 0;
      roleMenu.push(...obj.checkedKeys);
    };

    // 修改角色菜单
    const handleSubmit = async () => {
      try {
        const { code, message, result } = await setRoleMenu(props.dialogData.data.id, roleMenu);
        toast(message);
        formData.visible = false;
      } catch (error: any) {
        toast(error.message, 'error');
      }
    };

    onMounted(async () => {
      await getList();
      await getMenuList();
    });

    return {
      roleMenu,
      list,
      formData,
      eventCheck,
      handleSubmit
    };
  }
});
</script>

<style lang='less' scoped>
</style>
