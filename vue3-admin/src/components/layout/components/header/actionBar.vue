<template>
  <div class="action-bar">
    <div class="action-list">
      <i class="iconfont icon-quanjushezhi_o" @click="openSetting" />
      <i class="iconfont icon-quanping_o" />
    </div>

    <el-drawer v-model="drawerFlag" title="I am the title" size="24%">
      <span>Hi, there!</span>
    </el-drawer>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
export default defineComponent({
  name: "ActionBar",
  setup() {
    let drawerFlag = ref<boolean>(false);

    const openSetting = () => {
      drawerFlag.value = true;
    };

    return {
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
