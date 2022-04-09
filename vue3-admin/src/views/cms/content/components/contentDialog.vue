<template>
  <el-dialog
    v-model="formData.visible"
    :title="formData.title"
    width="600px"
    draggable
    destroy-on-close
    :close-on-click-modal="false"
  >
    <el-form :model="formData.data" label-width="80px">
      <el-form-item label="标题">
        <el-input v-model="formData.data.title" autocomplete="off" />
      </el-form-item>
      <el-form-item label="置顶">
        <el-radio-group v-model="formData.data.top">
          <el-radio :label="true">是</el-radio>
          <el-radio :label="false">否</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="推荐指数">
        <el-input-number v-model="formData.data.recom" autocomplete="off" />
      </el-form-item>
      <el-form-item label="状态">
        <el-input v-model="formData.data.status" autocomplete="off" placeholder="为空则不修改" />
      </el-form-item>
      <el-form-item label="内容">
        <el-input v-model="formData.data.content" autocomplete="off" placeholder="为空则不修改" />
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="formData.visible = false">取消</el-button>
        <el-button type="primary" @click="handleSubmit(formData, 'blog/content')">提交</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script lang='ts'>
import { defineComponent, reactive, ref } from 'vue';
import { handleSubmit } from '@/api/base';
import { cloneDeep } from 'lodash';
const defaultData = {
  title: '',
  top: false,
  recom: 0,
  status: 'top_rack',
  content: ''
};
export default defineComponent({
  name: 'ContentDialog',
  props: {
    dialogData: {
      type: Object,
      default: () => {
        return {
          visible: false,
          title: '',
          data: {}
        };
      }
    }
  },
  setup(props) {
    let formData = reactive(props.dialogData);
    console.log(props.dialogData);

    if (props.dialogData.type === 'create') formData.data = cloneDeep(defaultData);


    return {
      formData,
      handleSubmit
    };
  }
});
</script>

<style lang='less' scoped>
</style>
