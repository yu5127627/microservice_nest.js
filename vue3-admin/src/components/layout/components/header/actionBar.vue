<template>
  <div class="action-bar">
    <el-icon :size="25">
      <full-screen />
    </el-icon>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { FullScreen } from '@element-plus/icons-vue';
export default defineComponent({
  name: "ActionBar",
  components: {
    fullScreen: FullScreen
  }
});
</script>

<style lang="less" scoped>
.action-bar {
  padding: 0 10px;
  display: flex;
  align-items: center;
  .el-icon {
    margin: 0 10px;
    cursor: pointer;
  }
}
</style>
