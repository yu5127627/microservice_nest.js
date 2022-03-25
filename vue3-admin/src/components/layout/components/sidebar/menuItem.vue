<template>
  <template v-if="!item.hidden">
    <el-sub-menu v-if="item.children || item.type === 0" :index="item.path">
      <template #title>
        <el-icon>
          <location />
        </el-icon>
        <span>{{ item.title }}</span>
      </template>
      <!--  -->
      <template v-if="item.children.length">
        <menu-item v-for="subMenu in item.children" :key="subMenu.path" :item="subMenu" />
      </template>
    </el-sub-menu>

    <el-menu-item v-else :index="item.path" @click="handleMenuItem(item)">
      <template #title>
        <el-icon>
          <location />
        </el-icon>
        <span>{{ item.title }}</span>
      </template>
    </el-menu-item>
  </template>
</template>

<script lang='ts'>
import { useMenuStore } from '@/store/modules/menu';
import { defineComponent, ref } from 'vue';
import { useRouter } from 'vue-router';
import { icons } from './icons';
import { Location } from '@element-plus/icons-vue';

export default defineComponent({
  name: 'MenuItem',
  components: {
    location: Location,
    ...icons
  },
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    const menuStore = useMenuStore();
    const menu: Array<any> = menuStore.allMenu;
    const router = useRouter();

    const handleMenuItem = (item: any) => {
      // 外链
      if (item.type === 2) {
        // @ts-check
        window.open(item.path);
      } else {
        router.push({ path: item.path });
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
