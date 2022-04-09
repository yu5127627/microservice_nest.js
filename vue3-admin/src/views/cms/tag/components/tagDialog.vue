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
      <el-form-item label="图像">
        <el-input v-model="formData.data.simg" autocomplete="off" />
      </el-form-item>
      <el-form-item label="分组">
        <el-input
          v-model="formData.data.group"
          autocomplete="off"
          :disabled="Boolean($props.group?.length)"
        />
      </el-form-item>
      <el-form-item label="描述">
        <el-input
          v-model="formData.data.description"
          autocomplete="off"
          placeholder="为空则不修改"
          type="textarea"
        />
      </el-form-item>
      <el-form-item label="排序">
        <el-input-number v-model="formData.data.sort" autocomplete="off" placeholder="为空则不修改" />
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="formData.visible = false">取消</el-button>
        <el-button type="primary" @click="handleSubmit(formData, MODULE)">提交</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script lang='ts'>
import { defineComponent, reactive, ref } from 'vue';
import { handleSubmit } from '@/api/base';
import { cloneDeep } from 'lodash';
const defaultData = {
  name: '',
  group: '',
  simg: '',
  sort: 50,
  description: ''
};

export default defineComponent({
  name: 'TagDialog',
  props: {
    group: {
      type: String,
      default: () => {
        return '';
      }
    },
    module: {
      type: String,
      default: () => {
        return '';
      }
    },
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
    const MODULE = ref(props.module);
    let formData = reactive(props.dialogData);
    if (props.dialogData.type === 'create') formData.data = cloneDeep({ ...defaultData, group: props.group });

    return {
      MODULE,
      formData,
      handleSubmit,
    };
  }
});
</script>

<style lang='less' scoped>
</style>
