<template>
  <!-- 头像 -->
  <div class="avatar-container">
    <el-dropdown trigger="click" size="small">
      <el-image
        src="http://egg.yls.red/upload/avatar.gif?imageView2/1/w/80/h/80"
        class="user-avatar"
      />
      <el-icon>
        <caret-bottom />
      </el-icon>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item>文档</el-dropdown-item>
          <el-dropdown-item>个人中心</el-dropdown-item>
          <el-dropdown-item @click="userStore.logout">退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { CaretBottom } from '@element-plus/icons-vue';
import { useUserStore } from "@/store/modules/user";

export default defineComponent({
  name: 'Avatar',
  components: {
    caretBottom: CaretBottom
  },
  setup() {
    const userStore = useUserStore();

    return {
      userStore
    };
  }
});
</script>
