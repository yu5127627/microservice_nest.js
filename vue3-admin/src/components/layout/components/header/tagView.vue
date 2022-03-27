<template>
  <div class="tag-view">
    <el-tag
      v-for="(tag, index) in tags"
      :key="tag.name"
      closable
      type="success"
      @close="handleClose(index)"
    >{{ tag.name }}</el-tag>
  </div>
</template>

<script lang='ts'>
import { defineComponent, ref } from 'vue';
import { useMenuStore } from '@/store/modules/menu';

export default defineComponent({
  name: 'TagView',
  setup() {
    const menuStore = useMenuStore();
    const tags = ref([
      { name: 'Tag 1', type: '' },
      { name: 'Tag 2', type: 'success' },
      { name: 'Tag 3', type: 'info' },
      { name: 'Tag 4', type: 'warning' },
      { name: 'Tag 5', type: 'danger' },
    ]);

    const handleClose = (index: number) => {
      tags.value.splice(index, 1);
    };

    return { tags, handleClose, };
  }
});
</script>

<style lang='less' scoped>
.tag-view {
  padding: 4px 20px;
  box-shadow: 0 1px 4px rgb(0 21 41 / 8%);
  .el-tag {
    border-radius: 0;
    margin-right: 4px;
    cursor: pointer;
  }
}
</style>
