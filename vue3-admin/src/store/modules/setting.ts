import { defineStore } from "pinia";
import { ref } from "vue";

export interface UseSettingStore {
  isCollapse: boolean,
  handleSidebarChange: Function
}

export const useSettingStore = defineStore('setting', () => {
  // @es-ignore
  const isCollapse = ref<boolean>(true);
  const isCollapse1 = ref<boolean>(false);

  const state = {
    isCollapse: true
  };
  const action = {

  };

  function handleSidebarChange() {
    console.log(11);

    state.isCollapse = !state.isCollapse;
  }

  return {
    state,
    isCollapse1,
    isCollapse,
    handleSidebarChange
  };
});
