import { createApp } from 'vue';
import { setupStore } from '@/store';
import App from './App.vue';
import router from './router';
import 'normalize.css/normalize.css';
import icon from '@/components/ReIcon';

const app = createApp(App);
setupStore(app);
app.use(router);

app.component("Icon", icon);

app.mount('#app');


import '@/router/route-auth';


