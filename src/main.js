import {createApp} from 'vue';
import App from './App.vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css';

import BootstrapVue3 from 'bootstrap-vue-3';

const app = createApp(App)
app.config.globalProperties.$capitalize = function (str) {
    if (!str) return '';
    return str[0].toUpperCase() + str.slice(1);
};

app
    .use(BootstrapVue3)
    .mount('#app');

