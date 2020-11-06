import '../../assets/styles/global.less';
import '../../assets/icon/iconfont.css';

import { createApp } from './app'

// 客户端特定引导逻辑……

const { app } = createApp()

// 这里假定 App.vue 模板中根元素具有 `id="app"`
app.$mount('#root')