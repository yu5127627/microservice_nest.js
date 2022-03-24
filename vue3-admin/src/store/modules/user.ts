import { defineStore } from 'pinia';
import { reactive, ref } from 'vue';

export const useUserStore = defineStore('user', () => {
  const token = ref<string | null>(null);
  let userInfo = reactive<UserInfo>({
    avatar: '',
    ctime: '',
    id: null,
    nickname: '',
    roleId: null,
    username: '',
  });

  const setToken = (str:string) => {
    token.value = str;
    sessionStorage.setItem('token', str);
  };

  const setUserInfo = (user:UserInfo) => {
    const { avatar, ctime, id, nickname, roleId, username } = user;
    userInfo = { avatar, ctime, id, nickname, roleId, username };
  };

  return {
    userInfo,
    token,
    setToken,
    setUserInfo
  };
});
