<template>
  <div class="tag-view">
    <el-tag
      v-for="(tag) in tags"
      :key="tag.title"
      :closable="!tag.affix"
      :class="tag.active ? 'el-tag-active' : ''"
      @close.stop="tagStore.handleClose(tag)"
      @click.left="tagStore.handleOpen(tag)"
      @click.prevent.right="openDownMenu(tag, $event)"
    >{{ tag.title }}</el-tag>

    <div v-show="downFlag" class="down-box" :style="position">
      <div
        v-for="item in downMenu"
        :key="item.label"
        class="down-item"
        @click="eventClick(item.value)"
      >{{ item.label }}</div>
    </div>
  </div>
</template>

<script lang='ts'>
import { defineComponent, onMounted, reactive, ref, watch } from 'vue';
import { useTagViewStore } from '@/store/modules/tagView';
import { useRoute } from 'vue-router';

export default defineComponent({
  name: 'TagView',
  setup() {
    const route = useRoute();
    let downFlag = ref<boolean>(false);
    let position = reactive({ top: '0px', left: '0px' });
    const tagStore = useTagViewStore();
    const tags: TagView.TagViewRow[] = tagStore.keepTags;
    const downMenu = tagStore.downMenu;

    // 页面刷新填充
    // @ts-ignore
    tagStore.handleOpen({ path: route.path, title: route.meta.title, affix: false, active: true });


    watch(downFlag, () => {
      downFlag.value ? document.querySelector('#app')?.addEventListener('click', closeDownMenu) : document.querySelector('#app')?.removeEventListener('click', closeDownMenu);
    });

    const openDownMenu = (tag: TagView.TagViewRow, event: any) => {
      position.left = event.layerX + 'px';
      position.top = event.layerY + 'px';
      downFlag.value = true;
    };

    const closeDownMenu = () => { downFlag.value = false; };

    const eventClick = (action: string) => {
      switch (action) {
        case 'reload':
          tagStore.handleReload();
          break;
        case 'close-other':
          tagStore.handleCloseOther();
          break;
        case 'close-all':
          tagStore.handleCloseAll();
          break;
      }
    };

    return { tags, tagStore, openDownMenu, downFlag, position, downMenu, eventClick };
  }
});
</script>

<style lang='less' scoped>
.tag-view {
  padding: 4px 20px;
  box-shadow: 0 1px 4px rgb(0 21 41 / 8%);
  position: relative;
  .el-tag {
    border-radius: 0;
    margin-right: 4px;
    cursor: pointer;
    user-select: none;
    background-color: #fff;
  }
  .el-tag-active {
    background-color: var(--el-color-primary-light-8);
    color: var(--el-color-primary);
  }
  .down-box {
    position: absolute;
    width: 80px;
    box-shadow: var(--el-box-shadow-light);
    padding: 10px 0;
    background-color: #fff;
    border-radius: 5px;

    .down-item {
      width: 100%;
      text-align: center;
      height: 30px;
      line-height: 30px;
      font-size: 12px;
      cursor: pointer;
    }
    .down-item:hover {
      background-color: rgb(240, 240, 240);
    }
  }
}
</style>
