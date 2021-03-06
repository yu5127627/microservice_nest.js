import router from '@/router';
import { defineStore } from 'pinia';
import { reactive, ref } from 'vue';

export const useUserStore = defineStore('user', () => {
  const token = ref<string | null>(null);
  let userInfo = reactive<Manage.ManageRow>({
    avatar: '',
    ctime: '',
    id: null,
    nickname: '',
    roleId: null,
    username: '',
  });

  const setToken = (str: string) => {
    token.value = str;
    sessionStorage.setItem('token', str);
  };

  const setUserInfo = (user: Manage.ManageRow) => {
    const { avatar, ctime, id, nickname, roleId, username } = user;
    userInfo = { avatar, ctime, id, nickname, roleId, username };
  };

  const logout = () => {
    sessionStorage.removeItem('token');
    router.push({ path: '/login' });
  };

  return {
    userInfo,
    token,
    setToken,
    setUserInfo,
    logout
  };
});
