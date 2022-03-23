<template>
  <div>
    <div @click="counter.increment()">
      ADD
    </div>
    <h1>hello  vue3!!!</h1>
    <h5>{{ counter.count }}</h5>
    <h3>------------------------------------------------------</h3>
    <h5>{{ state.config.sitename }}</h5>

    <el-row class="mb-4">
      <el-button>Default</el-button>
      <el-button type="primary">
        Primary
      </el-button>
      <el-button type="success">
        Success
      </el-button>
      <el-button type="info">
        Info
      </el-button>
      <el-button type="warning">
        Warning
      </el-button>
      <el-button type="danger">
        Danger
      </el-button>
      <el-button>中文</el-button>
    </el-row>

    <el-row class="mb-4">
      <el-button plain> Plain </el-button>
      <el-button type="primary" plain>
        Primary
      </el-button>


      <el-button type="success" plain>
        Success
      </el-button>
      <el-button type="info" plain>
        Info
      </el-button>
      <el-button type="warning" plain>
        Warning
      </el-button>
      <el-button type="danger" plain>
        Danger
      </el-button>
    </el-row>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive } from 'vue';
import { useCounterStore } from '@/store/counters';
import { getSetting } from '@/api/user';
export default defineComponent({
  setup() {
    const state:any = reactive({
      config: []
    });
    const counter = useCounterStore();

    onMounted(async() => {
      const { code, data } = await getSetting({ dev: 1, name:'bbw' });
      state.config = data;
    });


    return { counter, state };
  },
});
</script>
