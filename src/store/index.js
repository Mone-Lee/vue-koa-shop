import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

import http from '../assets/utils/http'     //一个别名，不指向具体的js，需要在webpack配置中alias指定，目的是让浏览器端和nodejs端引入不同的文件，实现不同的获取方式

export function createStore () {
    return new Vuex.Store({
        //state就是数据
        state: {
            detailData: {},
            listData: {}
        },
        //通过事件触发action的函数，而不是直接调用
        actions: {
            getListData ({ commit }, params) {
                return http.get('/list/get', params).then(data => {
                    commit('setListData', data)      //调用mutations的方法
                }).catch(err => {
                    commit('setListData', {})
                })
            },

            //vue文件中调用getData时，传入id。commit是vuex内部方法
            getDetailData ({ commit }, id) {
                return http.get('/detail/get', {'columnid': id}).then(data => {
                    commit('setDetailData', data)      //调用mutations的方法
                }).catch(err => {
                    commit('setDetailData', {})
                })
            }
        },
        //mutations做所有数据的修改
        mutations: {
            setListData (state, data) {
                state.listData = data;
            },

            setDetailData (state, data) {
                state.detailData = data;
            }
        }
    })
}