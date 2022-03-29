import router from "@/router";
import { defineStore } from "pinia";
import { reactive, ref, toRefs } from "vue";


export const useTagViewStore = defineStore('tagView', () => {
  // 固定的 tag
  const keepTags = reactive<Array<TagView.TagViewRow>>([{ title: '仪表盘', path: '/dashboard', affix: true, active: true }]);
  // 下拉菜单的操作
  const downMenu = reactive<Array<TagView.DownMenu>>([
    { label: '刷   新', value: 'reload' },
    { label: '关闭其他', value: 'close-other' },
    { label: '关闭所有', value: 'close-all' },
  ]);

  const handleClose = (tag: TagView.TagViewRow) => {
    const index = keepTags.findIndex(item => item.title === tag.title);
    if (index && keepTags[index].active) {
      keepTags.splice(index, 1);
      keepTags[index - 1].active = true;
      router.push({ path: keepTags[index - 1].path });
    }
  };

  const handleOpen = (tag: TagView.TagViewRow) => {
    let hasTag = false;
    for (const item of keepTags) {
      if (item.active) item.active = false;
      if (item.title === tag.title) {
        item.active = true;
        hasTag = true;
      }
    }
    if (!hasTag) {
      keepTags.push(tag);
    }
    router.push({ path: tag.path });
  };

  const handleReload = () => {
    console.log('handleReload');
  };

  const handleCloseAll = () => {
    console.log('handleCloseAll');
  };

  const handleCloseOther = () => {
    console.log('handleCloseOther');
  };

  return {
    keepTags,
    downMenu,
    handleClose,
    handleOpen,
    handleReload,
    handleCloseAll,
    handleCloseOther
  };
});
