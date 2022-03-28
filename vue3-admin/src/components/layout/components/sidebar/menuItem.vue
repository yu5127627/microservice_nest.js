<template>
  <template v-if="!item.hidden">
    <el-sub-menu v-if="item.alwaysShow && item.children?.length" :index="item.path">
      <template #title>
        <el-icon v-if="item.meta?.icon">
          <i :class="'iconfont ' + item.meta?.icon" />
        </el-icon>
        <span>{{ item.meta.title }}</span>
      </template>
      <!--  -->
      <template v-if="item.children.length">
        <menu-item v-for="subMenu in item.children" :key="subMenu.path" :item="subMenu" />
      </template>
    </el-sub-menu>

    <el-menu-item
      v-else-if="!item.alwaysShow && item.children"
      :index="item.children[0].path"
      @click="handleMenuItem(item.children[0])"
    >
      <template #title>
        <el-icon v-if="item.children[0].meta?.icon">
          <i :class="'iconfont ' + item.children[0].meta?.icon" />
        </el-icon>
        <span>{{ item.children[0].meta?.title }}</span>
      </template>
    </el-menu-item>

    <el-menu-item v-else :index="item.path" @click="handleMenuItem(item)">
      <template #title>
        <el-icon v-if="item.meta?.icon">
          <i :class="'iconfont ' + item.meta?.icon" />
        </el-icon>
        <span>{{ item.meta?.title }}</span>
      </template>
    </el-menu-item>
  </template>
</template>

<script lang='ts'>
import { useMenuStore } from '@/store/modules/menu';
import { useTagViewStore } from '@/store/modules/tagView';
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'MenuItem',
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    const menuStore = useMenuStore();
    const tagViewStore = useTagViewStore();
    const menu: Array<Menu> = menuStore.allMenu;

    const handleMenuItem = (item: any) => {
      // 外链
      if (item.meta?.type === 2) {
        window.open(item.path);
      } else {
        tagViewStore.handleOpen({ path: item.path, title: item.meta.title, affix: item.meta.affix, active: true });
      }
    };

    return {
      menu,
      handleMenuItem
    };
  }
});
</script>

<style lang='less' scoped>
</style>
