import '../../assets/styles/global.less';
import '../../assets/icon/iconfont.css';
import axios from 'axios'

import { createApp } from './app'

// 客户端特定引导逻辑……

const { app, store } = createApp()

let key = window.cachekey;
if (key) {
    axios.get(`/route-cache/${key}`).then( result => {
        if(result) {
            store.replaceState(result.data.state);
        }
    }, (err) => {
    })
}

// 这里假定 App.vue 模板中根元素具有 `id="app"`
app.$mount('#root')