import { defineStore } from 'pinia';
import { ref } from 'vue';

export interface UseSettingStore {
  isCollapse: boolean;
}

export const useSettingStore = defineStore('setting', () => {
  const isCollapse = ref<boolean>(false);

  return {
    isCollapse
  };
});

// store.$patch({
//   counter: store.counter + 1,
//   name: 'Abalam',
// })
