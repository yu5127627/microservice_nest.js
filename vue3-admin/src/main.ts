import { createApp } from 'vue';
import { setupStore } from '@/store';
import App from './App.vue';
import router from './router';
import '@/style/base.less'; // 全局公共css

const app = createApp(App);
setupStore(app);
app.use(router);

app.mount('#app');


import '@/router/route-auth';


