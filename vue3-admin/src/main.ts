import { createApp } from 'vue';
import { setupStore } from "@/store";
import App from './App.vue';
import router from './router';

const app = createApp(App);
app.use(router);
setupStore(app);
app.mount('#app');
