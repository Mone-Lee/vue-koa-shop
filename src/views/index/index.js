import Vue from 'vue';
import App from './home.vue';
import '../../assets/styles/global.less';
import '../../assets/styles/variables.less';
import '../../assets/icon/iconfont.css';

const root = document.getElementById('root');

new Vue({
    render: h => h(App)
}).$mount(root);