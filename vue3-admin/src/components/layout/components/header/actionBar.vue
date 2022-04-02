<template>
  <div class="action-bar">
    <div class="action-list">
      <i class="iconfont icon-quanjushezhi_o" @click="openSetting" />
      <i class="iconfont icon-quanping_o" />
    </div>

    <el-drawer v-model="drawerFlag" title="系统配置项" size="20%">
      <span>侧边标题:</span>
      <el-switch v-model="settingStore.sidebarLog" size="large" />
    </el-drawer>
  </div>
</template>

<script lang="ts">
import { useSettingStore } from "@/store/modules/setting";
import { defineComponent, ref } from "vue";
export default defineComponent({
  name: "ActionBar",
  setup() {
    const settingStore = useSettingStore();
    let drawerFlag = ref<boolean>(false);

    const openSetting = () => {
      drawerFlag.value = true;
    };

    return {
      settingStore,
      openSetting,
      drawerFlag
    };
  }
});
</script>

<style lang="less" scoped>
.action-bar {
  .action-list {
    padding: 0 15px;
    display: flex;
    align-items: center;
    .iconfont {
      font-size: 28px;
      cursor: pointer;
      margin: 0 6px;
    }
    .iconfont:hover {
      background-color: rgb(240, 240, 240);
    }
  }
}
</style>
