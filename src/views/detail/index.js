import { createApp } from './app'

// 客户端特定引导逻辑……

const { app, store } = createApp()
if (window.__INITIAL_STATE__) {
    store.replaceState(window.__INITIAL_STATE__);
}
app.$mount('#root')