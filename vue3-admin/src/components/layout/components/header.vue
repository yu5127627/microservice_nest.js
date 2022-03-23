<template>
  <el-header>
    <div class="icon-box">
      <el-icon :size="30" color="#999" @click="handleCollapseChange">
        <expand v-if="settingStore.isCollapse" />
        <fold v-else />
      </el-icon>
    </div>
  </el-header>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Expand, Fold } from '@element-plus/icons-vue';
import { useSettingStore } from '@/store/modules/setting';

export default defineComponent({
  name: 'Header',
  components: {
    expand: Expand,
    fold: Fold
  },
  setup() {
    const settingStore = useSettingStore();
    const handleCollapseChange = () => {
      settingStore.isCollapse = !settingStore.isCollapse;
    };

    return {
      settingStore,
      handleCollapseChange
    };
  }
});
</script>

<style lang="less">
.icon-box {
  display: inline-block;
  padding-top: 15px;
}
</style>
