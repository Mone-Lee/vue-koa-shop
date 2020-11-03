// import Vue from 'vue';
// import App from './home.vue';
import '../../assets/styles/global.less';
import '../../assets/styles/variables.less';
import '../../assets/icon/iconfont.css';

// const root = document.getElementById('root');

// new Vue({
//     render: h => h(App)
// }).$mount(root);

import { createApp } from './app'

// 客户端特定引导逻辑……

const { app } = createApp()

// 这里假定 App.vue 模板中根元素具有 `id="app"`
app.$mount('#root')