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
      <el-form-item label="昵称">
        <el-input v-model="formData.data.nickname" autocomplete="off" />
      </el-form-item>
      <el-form-item label="头像">
        <el-input v-model="formData.data.avatar" autocomplete="off" />
      </el-form-item>
      <el-form-item label="用户名">
        <el-input v-model="formData.data.username" autocomplete="off" />
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="formData.data.password" autocomplete="off" placeholder="为空则不修改" />
      </el-form-item>
      <el-form-item label="角色">
        <el-select v-model="formData.data.roleId" placeholder="勾选一个角色">
          <el-option label="测试角1" value="1" />
          <el-option label="测试角2" value="2" />
        </el-select>
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="formData.visible = false">取消</el-button>
        <el-button type="primary" @click="handleSubmit(formData, 'manage')">提交</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script lang='ts'>
import { defineComponent, reactive, ref } from 'vue';
import { handleSubmit } from '@/api/base';

export default defineComponent({
  name: 'ManageDialog',
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
