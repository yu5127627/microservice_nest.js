<template>
  <div class="login-page">
    <div class="form-box">
      <h1 class="title">{{ settingStore.title }}</h1>
      <el-input v-model="formData.username" class="item-input" placeholder="账号">
        <template #prefix>
          <el-icon class="el-input__icon">
            <avatar-icon />
          </el-icon>
        </template>
      </el-input>

      <el-input
        v-model="formData.password"
        type="password"
        class="item-input"
        placeholder="密码"
        show-password
      >
        <template #prefix>
          <el-icon class="el-input__icon">
            <avatar-icon />
          </el-icon>
        </template>
      </el-input>

      <el-button
        type="primary"
        auto-insert-space
        style="width: 100%; margin-bottom: 30px;"
        @click="handleSubmit"
      >登陆</el-button>
    </div>
  </div>
</template>

<script lang='ts'>
import { defineComponent, reactive, ref } from 'vue';
import { Avatar as AvatarIcon } from '@element-plus/icons-vue';
import { useSettingStore } from '@/store/modules/setting';
import { useUserStore } from '@/store/modules/user';
import { toast } from '@/utils/message';
import { useRouter, useRoute } from 'vue-router';
import { login } from '@/api/manage';

export default defineComponent({
  name: 'Login',
  components: {
    avatarIcon: AvatarIcon,
  },
  setup() {
    const settingStore = useSettingStore();
    const userStore = useUserStore();
    const router = useRouter();
    const route = useRoute();
    const targetPath: any = route.query.to; // 退出登录时的地址
    let formData = reactive<Manage.LoginDto>({ username: 'admin', password: '123456' });

    const handleSubmit = async () => {
      try {
        const { code, result, message } = await login({ username: formData.username, password: formData.password });
        if (code === 200 && result) {
          toast(message);
          userStore.setToken(result);
          router.push({ path: targetPath || '/' });
        }
      } catch (error) {
        console.log(error);
      }
    };

    return { formData, settingStore, handleSubmit };
  }
});
</script>

<style lang='less' scoped>
.login-page {
  width: 100vw;
  height: 100vh;
  // transform: rotate(50%, 50%);
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url("@/assets/01.jpg");
  .form-box {
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 500px;
    height: 500px;
    .title {
      letter-spacing: 1px;
      color: #fff;
    }
    .item-input {
      width: 500px;
      margin: 20px 0;
      height: 50px;
      line-height: 50px;
    }
    ::v-deep {
      .el-input__inner {
        height: 50px;
      }
    }
  }
}
</style>
