import { createApp } from 'vue';
import { setupStore } from '@/store';
import App from './App.vue';
import router from './router';
import 'normalize.css/normalize.css';

const app = createApp(App);
setupStore(app);
app.use(router);

app.mount('#app');


import '@/router/route-auth';


