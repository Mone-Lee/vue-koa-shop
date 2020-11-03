import '../../assets/styles/global.less';
import '../../assets/styles/variables.less';
import '../../assets/icon/iconfont.css';

import { createApp } from './app'

// 客户端特定引导逻辑……

const { app } = createApp()
app.$mount('#root')