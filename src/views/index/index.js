import Vue from 'vue';
import App from './home.vue';
import '../../assets/styles/variables.less'

const root = document.getElementById('root');

new Vue({
    render: h => h(App)
}).$mount(root);