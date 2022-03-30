<template>
  <el-dialog
    v-model="formData.visible"
    :title="formData.title"
    width="600px"
    draggable
    destroy-on-close
    :close-on-click-modal="false"
  >
    <el-form :model="formData.dialogData" label-width="80px">
      <el-form-item label="名称">
        <el-input v-model="formData.data.name" autocomplete="off" />
      </el-form-item>
      <el-form-item label="级别">
        <el-input v-model="formData.data.level" autocomplete="off" />
      </el-form-item>
      <el-form-item label="描述">
        <el-input v-model="formData.data.description" autocomplete="off" type="textarea" />
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="formData.visible = false">取消</el-button>
        <el-button type="primary" @click="handleSubmit(formData, 'role')">提交</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script lang='ts'>
import { defineComponent, reactive, ref } from 'vue';
import { handleSubmit } from '@/api/base';

export default defineComponent({
  name: 'RoleDialog',
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

    return {
      formData,
      handleSubmit
    };
  }
});
</script>

<style lang='less' scoped>
</style>
