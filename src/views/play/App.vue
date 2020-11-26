<template>
    <div id="root" class="download-container">
        <commonHeader></commonHeader>
        <div class="_25cqyH-D_0">
            <div class="_56KiEMXd_0" style="height: 421.875px;">
                <div class="_3mrRWLH0_0">
                    <div class="_1w_GoaOr_0">
                        <div class="_3yFxFBvw_0 prism-player" style="width: 100%; height: 100%;" preload="auto"
                        poster="https://media001.geekbang.org/a5767e4a78b04ed68aa3aab969a7b307/snapshots/8b8c123fe7514299b73253723d0e385e-00005.jpg"
                        playsinline="" webkit-playsinline="" id="aliyunPlayerCon1570434236962"><video
                            id="aliyunPlayerCon1570434236962" webkit-playsinline="" playsinline=""
                            poster="https://media001.geekbang.org/a5767e4a78b04ed68aa3aab969a7b307/snapshots/8b8c123fe7514299b73253723d0e385e-00005.jpg"
                            preload="preload" class="_3yFxFBvw_0" style="width: 100%; height: 100%;" autoplay="autoplay"
                            src="blob:https://time.geekbang.org/29e417df-5293-4a34-b100-93b30596e210">
                            Sorry, your browser doesn't support embedded videos.
                        </video>
                        <div class="prism-cover" id="aliyunPlayerCon1570434236962_component_B8A000C5-7B19-461B-BAA3-3871F4DA6CCE"
                            style="display: none; float: left; margin-left: 0px; margin-top: 0px; background-image: url(&quot;https://media001.geekbang.org/a5767e4a78b04ed68aa3aab969a7b307/snapshots/8b8c123fe7514299b73253723d0e385e-00005.jpg&quot;);">
                        </div>
                        <div class="prism-animation"
                            id="aliyunPlayerCon1570434236962_component_F52395B5-8896-47CE-A6D4-DA0E0494E76C"
                            style="float: left; margin-left: 0px; margin-top: 0px;"></div>
                        <div class="prism-auto-stream-selector"
                            id="aliyunPlayerCon1570434236962_component_72C9C148-694E-45E0-89AC-EC377C706D7C"
                            style="float: left; margin-left: 0px; margin-top: 0px; display: none;">
                            <div>
                            <p class="tip-text"></p>
                            </div>
                            <div class="operators"><a class="prism-button prism-button-ok" type="button">OK</a><a
                                class="prism-button prism-button-cancel" target="_blank">Cancel</a></div>
                        </div>
                        <div class="prism-marker-text"
                            id="aliyunPlayerCon1570434236962_component_50D1052F-4731-4A9E-8D93-CB376D9F6D89"
                            style="float: left; margin-left: 0px; margin-top: 0px;">
                            <p></p>
                        </div>
                        </div>
                    </div>
                    <div class="_21V1fOXx_0" v-if="column && column.articles && column.articles.length > 0">当前播放: {{ column.articles[0].article_title }}</div>
                    <!---->
                    <div class="_3651b8Ab_0">
                    </div>
                    <div class="_3-SEoKQH_0"></div>
                    <div class="lyo54DMN_0">
                        <div class="_2GcYKPe6_0">
                        <div class="_1XMByMIq_0"><svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 16 32">
                            <path
                                d="M15.552 15.168q0.448 0.32 0.448 0.832 0 0.448-0.448 0.768l-13.696 8.512q-0.768 0.512-1.312 0.192t-0.544-1.28v-16.448q0-0.96 0.544-1.28t1.312 0.192z">
                            </path>
                            </svg></div>
                        <div class="_3zimHzo2_0">00:07<span class="_3NwV9QSM_0"> / 03:45</span></div>
                        </div>
                        <div class="-ix31iaB_0">
                            <div class="_1f7EcNwG_0"><span class="_2F_LuXO2_0">高清</span>
                                <ul class="pdtwuPiY_0">
                                <li class="_295QmQUA_0 _1L7TtGxP_0">
                                    高清
                                </li>
                                <li class="_295QmQUA_0">
                                    标清
                                </li>
                                <li class="_295QmQUA_0">
                                    普清
                                </li>
                                </ul>
                            </div>
                            <div class="_3dtuJ_V9_0"><span class="_2F_LuXO2_0">1.0x</span>
                                <ul class="_33dmmUz7_0">
                                <li class="_295QmQUA_0">
                                    2.0x
                                </li>
                                <li class="_295QmQUA_0">
                                    1.5x
                                </li>
                                <li class="_295QmQUA_0">
                                    1.25x
                                </li>
                                <li class="_295QmQUA_0 _1L7TtGxP_0">
                                    1.0x
                                </li>
                                <li class="_295QmQUA_0">
                                    0.5x
                                </li>
                                </ul>
                            </div>
                            <div class="iconfont DNOEuosC_0"><span></span></div>
                        </div>
                        <div class="JySdDvvj_0">
                            <div class="_3zimHzo2_0">00:00</div>
                            <div class="_1xmZNiow_0">
                                <div class="_2EyQjEUZ_0" style="width: 17.7418%;"></div>
                                <div class="Njxj9pM6_0" style="width: 3.14172%;"><span class="cgiBDpNu_0"></span></div>
                            </div>
                        </div>
                    </div>
                    <!---->
                </div>
                <div class="_3veKltQy_0">付费课程，可试看</div>
                <!---->
            </div>
            <div class="_2rRcbVfc_0">
                <div class="_38zlilu2_0">
                    <div class="_2i2klQV__0">
                        <h2 class="_1PSgy0gU_0">{{ column.column_title }}</h2>
                        <div class="iconfont _1ifqWM06_0"></div>
                    </div>
                    <div class="_1fAY5-KW_0">
                        <div v-if="column && column.articles">共{{ column.column_unit }} · {{ column.articles.length }}课时，{{ column.update_frequency }}</div>
                        <div class="I-xpAFyI_0"><span class="iconfont iconrenqun _1nSwuFAm_0"></span> <span class="_27yP89wS_0">{{ column.sub_count }}</span>
                        </div>
                    </div>
                </div>
                <div class="_1uHEoL3H_0">
                    <div class="_3JVQc9Vz_0">
                        <div class="nmGf6AAh_0" :class="{'nqNVTStp_0': currentArticleId === article.id}" v-for="article in column.articles" :key="'article' + article.id" @click="currentArticleId = article.id">
                            <div class="_1vfH0ukZ_0" v-if="article.is_video_preview">免费</div>
                            <div :title="article.article_title" class="_23TI7HyN_0">{{ article.article_title }}</div>
                        </div>
                    </div>
                </div>
                <div class="_3QHt8QF-_0">
                    <div class="_23TI7HyN_0">本节摘要</div>
                        <div class="_2fnXHfPT_0">
                            <div>
                            <div class="_29HP61GA_0" style="">
                                <h1>课件下载地址</h1>
                                <p><a
                                    href="https://github.com/geektime-geekbang/geektime-nginx/blob/master/Nginx%E6%A0%B8%E5%BF%83%E7%9F%A5%E8%AF%86100%E8%AE%B2-%E7%AC%AC%E4%B8%80%E9%83%A8%E5%88%86%E8%AF%BE%E4%BB%B6.pdf">https://github.com/geektime-geekbang/geektime-nginx/blob/master/Nginx
                                    核心知识 100 讲 - 第一部分课件.pdf</a></p><!-- [[[read_end]]] -->
                            </div>
                        </div>
                    </div>
                </div>
                <div class="_3kN_d1Ee_0">
                    <div class="iconfont _3A6Fx3uv_0"><i class="iconfont iconicon-pencil"></i>写留言</div>
                    <h2><span>精选留言</span><span class="_2fW1rM7W_0" id="comment_list_num">(47)</span></h2>
                    <ul id="comment_list">
                        <li class="reJj6Thl_0" v-for="comment in commentList" :key="'comment'+comment.id">
                            <img :src="comment.avatar" class="_2273kGdT_0">
                            <div class="_2CG0SquK_0">
                            <div class="_304R4gla_0">
                                <div>
                                <div class="_18Dng5rT_0"><span>{{ comment.name }}</span> <span class="_1bkbsnjg_0" v-if="comment.isTop">置顶</span></div>
                                <div class="_1H1Z49Dr_0">{{ comment.publishDate }}</div>
                                </div>
                                <!---->
                            </div>
                            <div>
                                <div class="_3M6kV3zb_0 _3D2NkqD6_0">{{ comment.content }}</div>
                                <div class="_1w8H0ktn_0 _2A421P4G_0">
                                <div class="_2jsFl-X0_0"><i class="iconfont iconliuyan"></i> <span>{{ comment.commentNum }}</span></div>
                                <div class="_2P4B1Hdm_0 _praise" :data-id="comment.id"><i class="iconfont icondianzan"></i> <span class="">{{ comment.praiseNum }}</span></div>
                                <!---->
                                </div>
                            </div>
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="_1EKDPMty_0">
                    <div class="_2QPCJtXs_0">
                        <span class="_2fW1rM7W_0">
                            <span class="_1ZL0mUU-_0">订阅</span>
                            <span class="_2Nt_Nmcb_0">¥{{ column.column_price / 100 }}</span>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import commonHeader from '../../components/commonHeader.vue';
import http from '@/assets/utils/http'
export default {
    components: { commonHeader },
    data() {
        return {
            // column: {},
            // commentList: [],
            currentArticleId: 0,
        }   
    },
    mounted() {
        // 本地开发使用，因为没有配置ssr的热更新，正常开发时是使用开发环境的
        if (process.env.NODE_ENV === "development") {
            let id = Number(this.getQueryString('columnid'));
            this.getListData(id);
        }
    },

    methods: {
        getListData(id) {
            http.get('/play/get', { columnid: id }).then(data => {
                this.$store.commit('setPlayCourse',data.column);
	            this.$store.commit('setPlayCommentList', data.commentList);
            }).catch(err => {
                console.log(err)
            })
        }
    },

    computed: {
        column() {
            return this.$store.state.column || {}
        },

        commentList() {
            return this.$store.state.commentList || []
        }
    }
}
</script>

<style scoped lang="less">
._25cqyH-D_0 {
    max-width: 750px;
    margin: 65px auto 0;
}

._56KiEMXd_0 {
    position: relative;
    width: 100%;
    background: #000;
    overflow: hidden;
}

._56KiEMXd_0 ._3veKltQy_0 {
    position: absolute;
    z-index: 10;
    left: 0;
    bottom: 50px;
    padding: 2px 20px;
    font-size: 12px;
    font-weight: 400;
    color: #fff;
    background: rgba(0, 0, 0, .6);
    border-radius: 0 12px 12px 0;
    transform: translate3d(-100%, 0, 0);
    transition: transform .3s ease;
}

._56KiEMXd_0 ._3veKltQy_0.q1dg-qEU_0 {
    transform: translateZ(0);
}

._56KiEMXd_0 ._3p864erw_0 {
    position: absolute;
    z-index: 10;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #000;
}

._56KiEMXd_0 ._3p864erw_0 ._3nxLoHx6_0 {
    color: #fa8919;
    cursor: pointer;
}

._56KiEMXd_0 ._3p864erw_0 ._3n-RzMEh_0 {
    margin-top: 20px;
    font-size: 14px;
    font-weight: 400;
    color: #fff;
    background: #fa8919;
    padding: .3rem 1.5rem;
    border-radius: 5px;
    cursor: pointer;
}

._56KiEMXd_0 ._3p864erw_0 ._1xS8aIl4_0 {
    font-size: 40px;
    cursor: pointer;
}

._56KiEMXd_0 ._1aZk_lcQ_0 ._1ZL0mUU-_0 {
    width: 160px;
    line-height: 20px;
    text-align: center;
}

._56KiEMXd_0 ._1aZk_lcQ_0 ._3t37Oshr_0 {
    margin-top: 10px;
    display: flex;
    justify-content: space-around;
    width: 200px;
}

._56KiEMXd_0 ._1aZk_lcQ_0 ._3t37Oshr_0 ._1LvSwIJB_0,
._56KiEMXd_0 ._1aZk_lcQ_0 ._3t37Oshr_0 ._29tTsYd7_0 {
    font-size: 14px;
    font-weight: 400;
    padding: 2px 10px;
    background: #fa8919;
    cursor: pointer;
}

._3mrRWLH0_0 {
    position: relative;
    overflow: hidden;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    height: 100%;
    cursor: pointer
}

._3mrRWLH0_0 ._1w_GoaOr_0 {
    width: 100%;
    height: 100%
}

._3mrRWLH0_0 ._21V1fOXx_0 {
    position: absolute;
    padding-top: 1rem;
    padding-left: 1rem;
    padding-right: 1rem;
    top: 0;
    left: 0;
    right: 0;
    height: 68px;
    line-height: 1.4;
    color: #fff;
    opacity: 1;
    visibility: visible;
    font-weight: 400;
    font-size: .875rem;
    background: -webkit-gradient(linear, left top, left bottom, from(rgba(0, 0, 0, .5)), to(transparent));
    background: linear-gradient(180deg, rgba(0, 0, 0, .5), transparent)
}

._3mrRWLH0_0._29mnQiGc_0 {
    cursor: none
}

._3mrRWLH0_0._29mnQiGc_0 ._3-SEoKQH_0,
._3mrRWLH0_0._29mnQiGc_0 ._21V1fOXx_0,
._3mrRWLH0_0._29mnQiGc_0 .lyo54DMN_0 {
    opacity: 0;
    visibility: hidden
}

._3651b8Ab_0 {
    position: absolute;
    z-index: 11;
    top: 50%;
    left: 50%;
    transform: translate3d(-50%, -50%, 0);
    width: 45px;
    height: 45px;
    background: url(data:image/png;base64,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) center center no-repeat;
    background-size: contain;
    cursor: pointer;
}

._3-SEoKQH_0 {
    background: rgba(0, 0, 0, .5);
    height: 98px;
    width: 100%;
    position: absolute;
    bottom: 0;
    z-index: -1;
    opacity: 1;
    visibility: visible;
    transition: all .3s ease
}

._3-SEoKQH_0:hover {
    opacity: 1
}

.lyo54DMN_0 {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 40px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    -webkit-transition: all .3s ease;
    transition: all .3s ease;
    z-index: 11;
    opacity: 1;
    visibility: visible;
    background: rgba(0, 0, 0, .5)
}

.lyo54DMN_0._29mnQiGc_0 {
    visibility: hidden;
    opacity: 0
}

.lyo54DMN_0 ._2GcYKPe6_0 {
    height: 38px;
    position: absolute;
    width: 160px;
    left: 4px;
    bottom: 0;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center
}

.lyo54DMN_0 ._2GcYKPe6_0 ._1XMByMIq_0 {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 auto;
    flex: 0 0 auto;
    width: 40px;
    height: 38px;
    padding: 7px;
    background-color: transparent;
    cursor: pointer;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    -webkit-transition: all .2s ease-in-out;
    transition: all .2s ease-in-out;
    opacity: .8
}

.lyo54DMN_0 ._2GcYKPe6_0 ._1XMByMIq_0 svg {
    width: 100%;
    height: 100%;
    fill: #fff;
    -webkit-box-sizing: content-box;
    box-sizing: content-box
}

.lyo54DMN_0 ._2GcYKPe6_0 ._3zimHzo2_0 {
    -webkit-box-flex: 1;
    -ms-flex: 1 1 auto;
    flex: 1 1 auto;
    color: #eee;
    line-height: 24px;
    text-shadow: 0 0 2px rgba(0, 0, 0, .5);
    font-size: 13px;
    cursor: default
}

.lyo54DMN_0 ._2GcYKPe6_0 ._3zimHzo2_0 ._3NwV9QSM_0 {
    color: #a4aab3
}

.lyo54DMN_0 .JySdDvvj_0 {
    padding: 5px 0;
    position: absolute;
    bottom: 33px;
    left: 0;
    right: 0;
    height: 3px
}

.lyo54DMN_0 .JySdDvvj_0 ._1xmZNiow_0 {
    position: relative;
    height: 3px;
    width: 100%;
    background: hsla(0, 0%, 100%, .2);
    cursor: pointer
}

.lyo54DMN_0 .JySdDvvj_0 ._3zimHzo2_0 {
    position: absolute;
    left: 0;
    top: -32px;
    border-radius: 4px;
    padding: 5px 7px;
    background-color: rgba(0, 0, 0, .62);
    color: #fff;
    font-size: 12px;
    text-align: center;
    opacity: 0;
    transition: opacity .1s ease-in-out;
    word-wrap: normal;
    word-break: normal;
    z-index: 2;
    pointer-events: none
}

.lyo54DMN_0 .JySdDvvj_0 ._2EyQjEUZ_0 {
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    background: hsla(0, 0%, 100%, .4);
    height: 3px;
    transition: all .5s ease;
    will-change: width
}

.lyo54DMN_0 .JySdDvvj_0 .Njxj9pM6_0 {
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    height: 3px;
    will-change: width;
    background: #fa8919
}

.lyo54DMN_0 .JySdDvvj_0 .cgiBDpNu_0 {
    position: absolute;
    top: 0;
    right: 5px;
    margin-top: -4px;
    margin-right: -10px;
    height: 11px;
    width: 11px;
    border-radius: 50%;
    cursor: pointer;
    transition: all .3s ease-in-out;
    transform: scale(0);
    background: #fa8919
}

.lyo54DMN_0 .JySdDvvj_0:hover .cgiBDpNu_0 {
    transform: scale(1);
}

.-ix31iaB_0 {
    position: absolute;
    right: 0;
    bottom: 0;
    width: 150px;
    height: 38px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    font-size: 14px;
    color: #fff
}

.-ix31iaB_0 ._1f7EcNwG_0,
.-ix31iaB_0 ._3dtuJ_V9_0 {
    position: relative;
    height: 40px;
    line-height: 40px
}

.-ix31iaB_0 ._33dmmUz7_0,
.-ix31iaB_0 .pdtwuPiY_0 {
    padding: 0;
    margin: 0;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 46px;
    width: 70px;
    -webkit-transform: scale(0);
    transform: scale(0);
    -webkit-transition: all .3s ease-in-out;
    transition: all .3s ease-in-out
}

.-ix31iaB_0 ._33dmmUz7_0._28e3zVeX_0,
.-ix31iaB_0 .pdtwuPiY_0._28e3zVeX_0 {
    -webkit-transform: scale(1);
    transform: scale(1)
}

.-ix31iaB_0 ._33dmmUz7_0 ._295QmQUA_0,
.-ix31iaB_0 .pdtwuPiY_0 ._295QmQUA_0 {
    text-align: center;
    width: 70px;
    line-height: 30px;
    border-top: 1px solid rgba(78, 78, 78, .3);
    background-color: rgba(0, 0, 0, .6);
    cursor: pointer
}

.-ix31iaB_0 ._33dmmUz7_0 ._1-BRNVtp_0,
.-ix31iaB_0 .pdtwuPiY_0 ._1-BRNVtp_0 {
    border-top: none
}

.-ix31iaB_0 ._33dmmUz7_0 ._295QmQUA_0._1L7TtGxP_0,
.-ix31iaB_0 .pdtwuPiY_0 ._295QmQUA_0._1L7TtGxP_0 {
    color: #00c1de
}

.-ix31iaB_0 ._2F_LuXO2_0 {
    display: block
}

.-ix31iaB_0 ._2F_LuXO2_0,
.-ix31iaB_0 .DNOEuosC_0 {
    width: 50px;
    text-align: center;
    cursor: pointer
}

._2rRcbVfc_0 {
    position: relative;
    height: auto;
}

._38zlilu2_0 {
    background: #fff
}

._38zlilu2_0 ._2i2klQV__0 {
    position: relative;
    padding: 16px 0 6px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center
}

._38zlilu2_0 ._2i2klQV__0 ._1PSgy0gU_0 {
    max-width: 300px;
    font-size: 20px;
    color: #404040
}

._38zlilu2_0 ._2i2klQV__0 ._1ifqWM06_0 {
    position: absolute;
    top: 20px;
    right: 20px;
    font-size: 12px;
    color: #b2b2b2;
    transform: rotate(90deg);
    transition: transform .3s;
    cursor: pointer
}

._38zlilu2_0 ._2i2klQV__0 ._1ifqWM06_0._3ZGa1-7U_0 {
    transform: rotate(270deg)
}

._38zlilu2_0 ._2NLeRnRT_0 {
    padding-left: 20px;
    line-height: 25px;
    font-size: 15px;
    font-weight: 400;
    color: #4c4c4c
}

._38zlilu2_0 ._1fAY5-KW_0 {
    display: flex;
    align-items: center;
    padding-left: 20px;
    color: #888;
    font-size: 12px;
    font-weight: 400
}

._38zlilu2_0 ._1fAY5-KW_0 .I-xpAFyI_0 {
    margin-left: 20px
}

._38zlilu2_0 ._1fAY5-KW_0 ._1nSwuFAm_0 {
    font-size: 14px
}

._38zlilu2_0 ._1fAY5-KW_0 ._27yP89wS_0 {
    margin-left: 3px
}

._1uHEoL3H_0 {
    position: relative;
    width: 100%;
    margin-top: 10px;
    margin-bottom: 20px
}

._1uHEoL3H_0 ._1gtPcnO0_0,
._1uHEoL3H_0 ._6OVXawio_0 {
    position: absolute;
    z-index: 2;
    top: -8px;
    cursor: pointer
}

._1uHEoL3H_0 ._1gtPcnO0_0 img,
._1uHEoL3H_0 ._6OVXawio_0 img {
    width: 98px;
    height: 50px
}

._1uHEoL3H_0 ._6OVXawio_0 {
    left: 0
}

._1uHEoL3H_0 ._1gtPcnO0_0 {
    right: 0
}

._3JVQc9Vz_0 {
    flex-direction: row;
    padding-top: 20px;
    padding-bottom: 10px;
    overflow: auto;
    -webkit-overflow-scrolling: touch
}

._3JVQc9Vz_0,
._3JVQc9Vz_0 .nmGf6AAh_0 {
    display: flex
}

._3JVQc9Vz_0 .nmGf6AAh_0 {
    position: relative;
    justify-content: center;
    align-items: center;
    margin-left: 12px;
    width: 160px;
    padding: 0 15px;
    height: 70px;
    text-align: center;
    font-size: 12px;
    color: #4c4c4c;
    background: #f6f7fb;
    border-radius: 3px;
    overflow: hidden;
    -ms-flex-negative: 0;
    flex-shrink: 0;
    line-height: 16px;
    box-sizing: border-box;
    transition: border .5s ease;
    cursor: pointer
}

._3JVQc9Vz_0 .nmGf6AAh_0.nqNVTStp_0 {
    color: #fa8919
}

._3JVQc9Vz_0 .nmGf6AAh_0 ._1vfH0ukZ_0 {
    position: absolute;
    top: 3px;
    right: 3px;
    padding: 0 4px;
    font-size: 10px;
    font-weight: 400;
    transform: scale(.9);
    color: #fff;
    background: #fa8919;
    border-radius: 2px
}

._3JVQc9Vz_0 .nmGf6AAh_0 ._23TI7HyN_0 {
    font-size: 13px;
    font-weight: 500
}

._3QHt8QF-_0 {
    position: relative;
    padding: 20px 20px 40px;
    border-top: .5px solid #e8e8e8
}

._3QHt8QF-_0 ._23TI7HyN_0 {
    font-size: 18px;
    font-weight: 600;
    color: #494949
}

._3QHt8QF-_0 ._2fnXHfPT_0 {
    height: 87px;
    color: #4c4c4c;
    font-size: 16px;
    font-weight: 400;
    white-space: normal;
    word-break: normal;
    line-height: 1.6;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical
}

._3QHt8QF-_0 ._2fnXHfPT_0._38dXpfpA_0 {
    height: 100%;
    overflow: auto;
    -webkit-line-clamp: unset
}

._29HP61GA_0 {
    font-size: 12px;
    font-weight: 400;

    a {
        color: #fa8919;
        border-bottom: 1px solid #fa8919;
    }
}

._3kN_d1Ee_0 {
    padding: 32px 22px 100px;
    border-top: 10px solid #f6f7fb;
    -webkit-transition: border-top .3s ease;
    transition: border-top .3s ease;
    position: relative
}

._3kN_d1Ee_0 h2 {
    color: #353535;
    position: relative;
    z-index: 1;
    margin-bottom: 1rem;
    font-weight: 700;
    font-size: 19px
}

._3kN_d1Ee_0 ._2fW1rM7W_0 {
    font-size: 16px;
    margin-left: 5px
}

._3kN_d1Ee_0 ._3A6Fx3uv_0 {
    position: absolute;
    z-index: 2;
    background: #fa8919;
    font-size: 13px;
    color: #fff;
    text-align: center;
    height: 28px;
    width: 80px;
    line-height: 28px;
    -webkit-box-shadow: 4px 5px 20px 1px rgba(250, 137, 25, .24);
    box-shadow: 4px 5px 20px 1px rgba(250, 137, 25, .24);
    border-radius: 28px;
    right: 22px;
    top: 32px;
    cursor: pointer;

    i {
        font-size: 12px;
        margin-right: 6px;
    }
}

._3kN_d1Ee_0 ._1WDvq981_0 {
    font-size: 15px;
    color: #888;
    line-height: 24px;
    border-left: 3px solid #e8e8e8;
    padding-left: 15px
}

.reJj6Thl_0 {
    list-style-position: inside;
    width: 100%;
    display: flex;
    flex-direction: row;
    margin-top: 20px
}

.reJj6Thl_0 a {
    border-bottom: none
}

.reJj6Thl_0 ._2273kGdT_0 {
    width: 35px;
    height: 35px;
    -ms-flex-negative: 0;
    flex-shrink: 0;
    border-radius: 50%
}

.reJj6Thl_0:last-child ._2CG0SquK_0 {
    border-bottom: none
}

.reJj6Thl_0 ._2CG0SquK_0 {
    margin-left: .5rem;
    flex-grow: 1;
    padding-bottom: 8px;
    border-bottom: .5px solid #e8e8e8;
    transition: border-bottom .3s ease;
    overflow: hidden
}

.reJj6Thl_0 ._2CG0SquK_0 ._304R4gla_0 {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-bottom: 10px
}

.reJj6Thl_0 ._2CG0SquK_0 ._3M6kV3zb_0 {
    color: #4c4c4c;
    font-size: 16px;
    font-weight: 400;
    white-space: normal;
    word-break: break-all;
    line-height: 1.6;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 5;
    -webkit-box-orient: vertical
}

.reJj6Thl_0 ._2CG0SquK_0 ._3D2NkqD6_0 {
    overflow: auto;
    -webkit-line-clamp: unset
}

.reJj6Thl_0 ._2CG0SquK_0 ._1H1Z49Dr_0 {
    color: #888;
    font-size: 11px;
    line-height: 1;
    margin-top: 4px
}

.reJj6Thl_0 ._2CG0SquK_0 ._18Dng5rT_0 {
    color: #353535;
    font-size: 14px;
    font-weight: 700;
    height: 20px;
    line-height: 20px
}

.reJj6Thl_0 ._2CG0SquK_0 ._1w8H0ktn_0 {
    margin-top: 8px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 12px;
    color: #888;
    padding-left: 20px;
    padding-right: 20px
}

.reJj6Thl_0 ._2CG0SquK_0 ._1w8H0ktn_0._2A421P4G_0 {
    -webkit-box-pack: end;
    -ms-flex-pack: end;
    justify-content: flex-end;
    padding-left: 10px;
    padding-right: 10px
}

.reJj6Thl_0 ._2CG0SquK_0 ._1w8H0ktn_0._2A421P4G_0 ._2P4B1Hdm_0 {
    margin-left: 50px
}

.reJj6Thl_0 ._1bkbsnjg_0 {
    height: 15px;
    line-height: 15px;
    width: 30px;
    overflow: hidden;
    font-size: 10px;
    color: #fff;
    background: #cbcbcb;
    text-align: center;
    display: inline-block;
    border-radius: 3px;
    vertical-align: top;
    margin-top: 2px
}

.reJj6Thl_0 ._1YQBH3WC_0 {
    color: #999;
    font-size: 13px;
    width: 20px;
    text-align: right
}

.reJj6Thl_0 ._13n1j2Zp_0 {
    width: 20px;
    height: 26px;
    color: #999;
    font-size: 11px;
    text-align: right
}

.reJj6Thl_0 ._2jsFl-X0_0,
.reJj6Thl_0 ._2P4B1Hdm_0 {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 15.25px;
    text-decoration: none
}

.reJj6Thl_0 ._2jsFl-X0_0 i,
.reJj6Thl_0 ._2P4B1Hdm_0 i {
    color: #999;
    display: inline-block;
    font-size: 15px;
    margin-right: 4px;
}

.reJj6Thl_0 ._2jsFl-X0_0 i._2A421P4G_0,
.reJj6Thl_0 ._2P4B1Hdm_0 i._2A421P4G_0 {
    background: url(data:image/png;base64,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) no-repeat 50%;
    background-size: 15px
}

.reJj6Thl_0 ._2jsFl-X0_0 span,
.reJj6Thl_0 ._2P4B1Hdm_0 span {
    color: #888;
    font-size: 12px;
    font-weight: 400
}

.reJj6Thl_0 ._2jsFl-X0_0 span._2A421P4G_0,
.reJj6Thl_0 ._2P4B1Hdm_0 span._2A421P4G_0 {
    color: #fa8919
}

.reJj6Thl_0 ._2P4B1Hdm_0 i {
    margin-top: -2px
}

.reJj6Thl_0 ._2r3UB1GX_0 {
    font-size: 13px;
    color: #b2b2b2;
    height: 16px;
    padding-top: 8px
}

.reJj6Thl_0 ._2r3UB1GX_0 span {
    font-weight: 500
}

.reJj6Thl_0 ._2r3UB1GX_0 i,
.reJj6Thl_0 ._2r3UB1GX_0 span {
    height: 16px;
    line-height: 16px;
    display: inline-block;
    vertical-align: top
}

.reJj6Thl_0 ._2xNIY4NG_0 {
    margin-top: 10px
}

.reJj6Thl_0 ._2xNIY4NG_0 ._33BLbmw4_0 {
    color: #888;
    font-size: 14px;
    font-weight: 400;
    white-space: normal;
    word-break: break-all;
    background: #f6f7fb;
    transition: background .3s ease;
    border-radius: 10px;
    padding: 18px;
    overflow-x: scroll
}

.reJj6Thl_0 ._2xNIY4NG_0 ._1H1Z49Dr_0 {
    color: #888;
    font-size: 9px
}

._1EKDPMty_0 {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    height: 50px;
    z-index: 20;
    cursor: pointer
}

._1EKDPMty_0._3RWrS3Nc_0 {
    left: 50%;
    max-width: 750px;
    transform: translate3d(-50%, 0, 0)
}

._1EKDPMty_0 ._2QPCJtXs_0 {
    flex: 1 1 auto;
    height: 50px;
    justify-content: center;
    background: #fa8919;
    color: #fff;
    font-weight: 500;
    font-size: 15px
}

._1EKDPMty_0 ._2QPCJtXs_0,
._1EKDPMty_0 ._2QPCJtXs_0 ._2fW1rM7W_0 {
    display: flex;
    align-items: center
}

._1EKDPMty_0 ._2QPCJtXs_0 ._2fW1rM7W_0 {
    font-size: 18px;
    margin-left: 5px
}

._1EKDPMty_0 ._2QPCJtXs_0 ._2fW1rM7W_0 ._1ZL0mUU-_0 {
    margin-right: 6px
}

._1EKDPMty_0 ._2QPCJtXs_0 ._2fW1rM7W_0 ._2Nt_Nmcb_0 {
    font-size: 18px
}

._1EKDPMty_0 ._2QPCJtXs_0 ._2E0_nrNa_0 {
    text-decoration: line-through;
    font-size: 14px;
    font-weight: 300;
    margin-left: 6px;
    margin-top: 2px
}

._1EKDPMty_0 ._3Dp3Mt34_0 {
    flex: 1 1 auto;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #fff;
    color: #888;
    font-size: 15px;
    font-weight: 500
}

._1EKDPMty_0 ._3Dp3Mt34_0 ._2fW1rM7W_0 {
    font-size: 18px;
    color: #fa8919;
    margin-left: 5px
}

._1EKDPMty_0 ._7cRsMoH-_0 {
    height: 50px;
    align-items: center;
    justify-content: center;
    background: #b2b2b2;
    color: #fff;
    font-size: 15px;
    font-weight: 400
}

._1EKDPMty_0 ._1JkB29jV_0,
._1EKDPMty_0 ._3t37Oshr_0,
._1EKDPMty_0 ._7cRsMoH-_0 {
    display: flex
}

._1EKDPMty_0 ._1JkB29jV_0 {
    background: #f2f2f2;
    justify-content: center;
    height: 23px;
    align-items: center;
    position: absolute;
    top: -23px;
    left: 0;
    right: 0;
    font-size: 12px;
    color: #888
}

._1EKDPMty_0 ._1JkB29jV_0 .gP89RkJ8_0 {
    color: #fa8919
}

._1EKDPMty_0 ._1JkB29jV_0 ._1ifqWM06_0 {
    margin-top: -2px;
    font-size: 12px;
    transform: scale(.7)
}
</style>