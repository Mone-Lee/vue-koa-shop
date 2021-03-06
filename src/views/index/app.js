import Vue from 'vue'
import App from './App.vue'
import { createStore } from '../../store/index.js'
import utils from '../../assets/utils/utils'
Vue.prototype.diffEnvUrl = utils.diffEnvUrl

// 导出一个工厂函数，用于创建新的
// 应用程序、router 和 store 实例
export function createApp () {
    const store = createStore();
    const app = new Vue({
        store,
        // 根实例简单的渲染应用程序组件。
        render: h => h(App)
    })
    return { app, store }
}