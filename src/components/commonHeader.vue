<template>
    <div class="common-header-container">
        <div class="common-header white fixed">
            <div class="common-header-wrapper">
                <a href="https://time.geekbang.org/" class="common-logo"></a>
                <div class="info">
                    <div class="menu" :class="{'hide': showSearchWrap}">
                        <a target="_blank" href="https://time.geekbang.org/" class="menu-item">讲堂</a>
                        <a target="_blank" href="https://time.geekbang.org/college/algorithm/100034301?utm_source=time_web&amp;utm_medium=menu&amp;utm_term=timewebmenu" class="menu-item">
                            算法训练营 <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAYCAYAAACIhL/AAAADYGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNS40LjAiPgogPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgeG1sbnM6dGlmZj0iaHR0cDovL25zLmFkb2JlLmNvbS90aWZmLzEuMC8iCiAgICB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIKICAgIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIgogICAgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIgogICB0aWZmOk9yaWVudGF0aW9uPSI4IgogICB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjI3QjM4OTU3MkMzMTExRTlCNzY0REIyQzU3QTQxRURCIgogICB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjI3QjM4OTU2MkMzMTExRTlCNzY0REIyQzU3QTQxRURCIgogICB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAoTWFjaW50b3NoKSI+CiAgIDx4bXBNTTpEZXJpdmVkRnJvbQogICAgc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDoyN0IzODk1NDJDMzExMUU5Qjc2NERCMkM1N0E0MUVEQiIKICAgIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MjdCMzg5NTUyQzMxMTFFOUI3NjREQjJDNTdBNDFFREIiLz4KICA8L3JkZjpEZXNjcmlwdGlvbj4KIDwvcmRmOlJERj4KPC94OnhtcG1ldGE+Cjw/eHBhY2tldCBlbmQ9InIiPz5yai+2AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAsFJREFUeNrMV01IVFEU/hzGQOzXIKEMMqKNOBEuzCHImqggc1FKUa0ialr0SxTRolZFRVFBMQ7UKpPo17EiibHaWFIgEoVUoKQJGVlmJdjCvsO9j5k3770pLjIzH3xzmXffu/d7551z7jl545vz4YE8MkSuJ6vIeeR0TAy+k73kc/IOGSfHXUV4CFxOniUXIzPoJA+SbakTvpT/ojaib8yUOOi94nrvfC+Bk8jb5E5kD7L3Xa3FIfA8uQ7Zx1ryQqrAVeQu5A7C5GpLoETrGeQeTos2P3+qyYBtatpCvkMUeNVK1z3pfHRPC/Cm3T5XewqoWAkUFAKjv4Dul8DDc8Dwu8QzBVO85YyOABdtHiaalonADY6bSxZxOgh87HZfLLAU+D2SeJmjMWDOfODDa6D/PTBzNlCzDQjW0A5bgb6n6pqIFxRMBopmAUODFPZTC3QVX+fXSdgcB5q4WTFwYgutejNxfS4/zKFrirtLgGMVdmtv3A88bgRih9OtXuXTJ4QZyuqBBeX81Dfs4gRitXuXlKVCR0x3KBWBRcYCAyE1iq+5wfLRsqDpDjP8aafFj4ReKJyqRisQ3CB+li44/gEROORpxQ5Gce9b53Xxn/+FFRhm+ObXVYW7wC+f3J24docaB/vUWMm82hFx3icRLgK/DpgK7PHpQ9oMz66onFe9yX2+/rgaW6OmO8RFYLOxQPG9WFTlTEnEEtVWitl+nUVbHfDklopoMzTLJ+aRAGZYlBstYbmAfPZKOT4bE3P3rwJNYVNxoqndKlhl5UeOHNff5R6hYqEfA8458cXiUuBzD4+6tvTRLeun5k471ohzJFfUl3OooolYWpLrwX1kSw6Ie0DudStYx3Th0JBFcQ26SRvz6kn+6GJxhW5kMoVO3UGGk8Wl6+qS206x6hI5uCX1TpCgYUnC5AvdB3m2nX8FGADx9bC5TrF3fAAAAABJRU5ErkJggg==" alt="hot">
                        </a>
                        <a target="_blank" href="https://service.geekbang.org/?utm_source=geektimeWeb&amp;utm_medium=menu&amp;utm_campaign=qiyezhanghao"
                            class="menu-item">企业服务
                        </a>
                        <a target="_blank" href="https://www.infoq.cn/hotlist?tag=day&amp;utm_source=geektime&amp;utm_medium=menu" class="menu-item">热点资讯
                        </a>
                        <a target="_blank" href="https://h5.youzan.com/v2/feature/TJe4bYhxyP?dc_ps=2293231415741009926.200001" class="menu-item">极客商城
                        </a>
                        <a target="_blank" :href="diffEnvUrl('download')" class="menu-item on">客户端下载
                        </a>
                        <a target="_blank" href="https://time.geekbang.org/service/exchange" class="menu-item">兑换中心
                        </a>
                    </div>
                    <div class="search">
                        <div class="iconfont iconbaseline-close-px close" v-show="showSearchWrap" @click="toggleSearchWrap"></div>
                        <div class="inputWrap" :class="{'open': showSearchWrap}">
                            <input type="text" autocomplete="off" maxlength="100" placeholder="搜索课程、课程内容等" class="input">
                        </div>
                        <div class="search-btn" @click="toggleSearchWrap">
                            <i class="iconfont iconfangdajing search-icon"></i>
                        </div>
                    </div>
                </div>
                <div class="userinfo">
                    <span class="control">
                        <a class="pc">登录</a>
                        <a class="pc">注册</a>
                    </span>
                </div>
            </div>
        </div>
        
    </div>
</template>

<script>
export default {
    data() {
        return  {
            showSearchWrap: false,
        }
    },

    methods: {
        toggleSearchWrap() {
            this.showSearchWrap = !this.showSearchWrap;
        }
    }
}
</script>

<style scoped lang="less">
.common-header {
    height: 65/@baserem;
    background: #fff;
    font-family: Avenir, Helvetica, Arial, sans-serif !important;
    border-bottom: 1px solid #eaeaea;

    &.fixed {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 10000;
    }
}

.common-header-wrapper {
    max-width: 1080px;
    width: 94vw;
    height: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;

    .common-logo {
        width: 120/@baserem;
        height: 65/@baserem;
        background-image: url(https://static001.geekbang.org/static/time/img/geek_elements/logo-wap.png);
        background-repeat: no-repeat;
        background-position: center;
        background-size: contain;
    }

    .info {
        position: relative;
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;

        .menu {
            opacity: 1;
            transition: opacity .3s ease-out;

            &.hide {
                opacity: 0;
            }

            a {
                position: relative;
                padding: 8/@baserem 12/@baserem;
                font-weight: 400;
                transition: color .2s ease;
                white-space: nowrap;
                font-size: 16/@baserem;

                &:link, &:visited {
                    color: #353535;
                }

                &.on, &:hover {
                    color: #fa8919;
                }

                img {
                    position: absolute;
                    width: 20/@baserem;
                    height: 12/@baserem;
                    left: calc(100% - 18/@baserem);
                    top: 0;
                }
            }
        }

        .search {
            position: absolute;
            right: 15/@baserem;
            bottom: -5px;
            display: flex;
            align-items: center;
            margin-right: 4/@baserem;

            .close {
                margin-right: 10/@baserem;
                font-size: 20/@baserem;
                font-weight: 500;
                color: #e2e2e2;
                cursor: pointer
            }

            .inputWrap {
                width: 0;
                border-bottom: 1px solid #d8d8d8;
                overflow: hidden;
                transition: width .3s;

                &.open {
                    width: 300/@baserem;
                }
            }

            .input {
                width: 100%;
                font-size: 12px;
                font-weight: 400;
                color: #353535;
                outline: none;
                border: none;
                background: transparent;

                &::-webkit-input-placeholder {
                    color: #b2b2b2;
                }
            }

            .search-btn {
                position: relative;
                width: 32/@baserem;
                height: 32/@baserem;
                line-height: 32/@baserem;
                color: #404040;
                text-align: center;
                cursor: pointer;
                user-select: none;
                
                .search-icon {
                    font-size: 18/@baserem;
                }
            }
        }
    }

    .userinfo {
        height: 65/@baserem;
        line-height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;

        .control {
            display: flex;
            justify-content: center;
            align-items: center;
            margin-top: 2px;

            a {
                font-size: 16/@baserem;
                color: #888;
                display: block;
                height: 65/@baserem;
                line-height: 65/@baserem;
                font-weight: 400;
                cursor: pointer;

                &:first-child:after {
                    content: "|";
                    margin-left: 8/@baserem;
                    margin-right: 8/@baserem;
                }
            }
        }
    }
}
</style>