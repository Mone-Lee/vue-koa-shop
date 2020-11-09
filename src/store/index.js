import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

import { getData } from '../assets/utils/getData'     //一个别名，不指向具体的js，需要在webpack配置中alias指定，目的是让浏览器端和nodejs端引入不同的文件，实现不同的获取方式

export function createStore () {
    return new Vuex.Store({
        //state就是数据
        state: {
            msg: 'default'
        },
        //通过事件触发action的函数，而不是直接调用
        actions: {
            //vue文件中调用getData时，传入id。commit是vuex内部方法
            getData ({ commit }, id) {
                return getData(id).then(data => {
                    commit('setMsg', data.msg)      //调用mutations的方法
                }).catch(err => {
                    commit('setMsg', err.msg)
                })
            },
            setData ({ commit }, msg) {
                commit('setMsg', msg)      //调用mutations的方法
            },
        },
        //mutations做所有数据的修改
        mutations: {
            setMsg (state, msg) {
                state.msg = msg;
            }
        }
    })
}