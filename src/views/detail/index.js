import '../../assets/styles/global.less';
import '../../assets/icon/iconfont.css';

import { createApp } from './app'
import axios from 'axios'

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

app.$mount('#root')