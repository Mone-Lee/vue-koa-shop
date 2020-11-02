import Vue from 'vue';
import App from './home.vue';
// import ElementUI from 'element-ui';

// Vue.use(ElementUI);

const root = document.getElementById('root');

new Vue({
    render: h => h(App)
}).$mount(root);