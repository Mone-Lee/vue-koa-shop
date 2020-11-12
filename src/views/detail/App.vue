<template>
    <div id="root" class="detail-container">
        <commonHeader></commonHeader>
        <template v-if="detailData && detailData.detailInfo">
            <div class="detail-base-wrap">
                <div class="detail-content-wrap detail-base-content-wrap">
                    <section class="course-base-info">
                        <div class="course-cover-img">
                            <img :src="detailData.detailInfo.column_cover">
                        </div>
                        <div class="course-base-intro">
                            <div class="course-intro-title">{{ detailData.detailInfo.column_title }}</div>
                            <div class="course-intro-subtitle">{{ detailData.detailInfo.column_subtitle }}</div>
                            <div class="course-intro-author">{{ detailData.detailInfo.author_name }}</div>
                            <div class="course-intro-authorIntro"> {{ detailData.detailInfo.author_intro }}</div>
                            <div class="course-intro-ctrl-wrap">
                                <div class="course-intro-ctrl-content">
                                    <button class="course-intro-ctrl-btn"> 订阅 ¥{{ detailData.detailInfo.column_price / 100 }}</button>
                                    <div class="course-intro-activity" v-if="detailData.detailInfo.column_price_market < detailData.detailInfo.column_price">
                                        <div>限时优惠 ¥{{ detailData.detailInfo.column_price_market / 100 }}</div>
                                        <s>原价 ¥{{ detailData.detailInfo.column_price / 100 }}</s>
                                    </div>
                                </div>
                                <div class="course-intro-ctrl-info">
                                    {{ detailData.detailInfo.sub_count }} 人已学习
                                    <span>· {{ detailData.detailInfo.update_frequency }}</span>
                                </div>
                            </div>
                        </div>
                        <!---->
                    </section>
                    <div class="code-wrap">
                        <h3>移动设备学习</h3>
                        <div class="j4HnGIK5_0">
                            <div class="Oa6Lqpnp_0"><a class="_2FeHrWPK_0"><i class="iconfont"></i>
                                <p>App Store 下载</p>
                            </a> <a class="_2FeHrWPK_0 _2ZgKlrv6_0"><i class="iconfont"></i>
                                <p>Android 下载</p>
                            </a> <span href="javascript:;" class="_35ob5jQd_0">扫描二维码下载客户端<img
                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAAQCAYAAAD0xERiAAABlUlEQVQ4T7WUv0sbcRjGn+fuGtJBgtDZwcGpY/FHmkEXbRc3IQ3egRrr0P9AxGoduombRO60TQiUZiiKkMGxkCgGHHRzLDgInSI2er08csWWtl7scn3Hl4cP3+d93vfLumuvdl21Fh+/qlzgnqq5zloiSM4/mdu47CRjzbOPAVoWzdH+6a0vnYR11z4V0WrDH8vMfDiL0rHu2gsgVwB8bRvB86dT5cMoYd21V0AuCDqH+CydLx79rWPYqHmTDmW4oCRhMp0vVSKBnj0rYB2gbxDZweni9u+6H7Cw9j070xZ2SHZLepvOl+ajgPueMyLpE8gUgOWhmeLST90vWNg43Mz1+jL3CPZK2k4ED3NRAz/YcPoCQ3skeyRVrkzTGZl61/oDFgI/l3PdVsvcAZgRdNJp4I3Ci0e+Ze0CHJBwZCSD4TuwENgovHxwbX1zCTqU3gzmS6+jLJ98nEg0m8n3ALOQxv8vrFGYSPlWMnz+vTZvx1HtaDMM4HvbqoLo+2cApqq3Qd0NILbViG1pYz2nuA89ti/oBt+wE+SqS1akAAAAAElFTkSuQmCC"
                                alt="" class="_32Ica7Z6_0"></span></div>
                            <div class="_2wnMjaGX_0"><img
                                src="@/assets/img/download/code.f041ed7.png"
                                alt=""></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="_3822azc__0 _1y8VaRsC_0">
                <div class="_2IYyBY-w_0">
                    <div class="_1C2HTZHn_0">
                        <a id="introduction_btn" href="javascript:;" class="_3UpDxHgY_0" :class="{'_1VkkSc6v_0': activeIndex === 0}" @click="activeIndex=0">课程介绍</a>
                        <a id="lesson_list_btn" href="javascript:;" class="_3UpDxHgY_0" :class="{'_1VkkSc6v_0': activeIndex === 1}" @click="activeIndex=1">课程目录<span class="_27k0us_4_0">试看</span></a>
                    </div>
                    <div class="hTxdFIfR_0">
                        <div class="_2IEmPavX_0" v-show="activeIndex===0">
                            <div id="article-content" class="richcontent _3Vt7GjyJ_0" v-html="detailData.detailInfo.column_intro">
                                <div class="text" >
                                </div>
                            </div>
                        </div>
                        <section id="lesson_list" v-show="activeIndex===1">
                            <div class="_1X9Hwflu_0 _1Tl0-Sx9_0" style="height: 320px;">
                                <div class="_3Nnx8nPI_0">
                                    <p>第一章：课程简介&nbsp;({{ detailData.detailInfo.articles.length }}讲)</p>
                                </div>
                                <div class="_3c2pu66u_0 _2ErUWiOJ_0" v-for="article in detailData.detailInfo.articles" :key="article.article_title">
                                    <a data-seo="" :href="diffEnvUrl('play', { columnid: detailData.detailInfo.id})"
                                    :title="article.article_title">{{ article.article_title }}</a>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
                <div class="VpgaLBIY_0">
                    <h3 class="_3MZnDYIJ_0">看过的人还看了</h3>
                    <section class="_3neSIM1B_0" v-for="recommentColumn in detailData.recommendInfo" :key="recommentColumn.id">
                        <div class="_14fgEuQ7_0"><img :src="recommentColumn.column_cover" alt=""></div>
                        <div class="_1DOtZoG8_0"><a href="javascript:;" :title="recommentColumn.column_title" class="jU9tYlcG_0">{{ recommentColumn.column_title }}</a>
                            <div class="_1UmnOqjj_0">
                            <p :title="recommentColumn.author_name+'  '+recommentColumn.author_intro">
                                {{ recommentColumn.author_name }}&nbsp;&nbsp;{{ recommentColumn.author_intro }}
                            </p>
                            <p class="_1Hq1Oraj_0">
                                84讲&nbsp;|&nbsp;{{ recommentColumn.sub_count }} 人已学习
                            </p>
                            </div>
                            <div class="_3-RXWUsc_0">
                            <!----> <span class="_1SIcQIUT_0">¥{{ recommentColumn.column_price / 100 }}</span>
                            <!---->
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </template>
        <div v-else>
            <p>找不到该课程数据</p>
        </div>
    </div>
</template>

<script>
import commonHeader from '../../components/commonHeader.vue';
export default {
    components: { commonHeader },
    data() {
        return {
            activeIndex: 0
        }   
    },
    mounted() {
        // 本地开发使用，因为没有配置ssr的热更新，正常开发时是使用开发环境的
        if (process.env.NODE_ENV === "development") {
            let id = Number(this.getQueryString('columnid'));
            this.$store.dispatch('getDetailData', id);
        }
    },

    computed: {
        detailData() {
            let tempDetailData = this.$store.state.detailData;
            if(tempDetailData.detailInfo && tempDetailData.detailInfo.column_intro) {
                tempDetailData.detailInfo.column_intro = tempDetailData.detailInfo.column_intro.replace(/↵/g, '');
            }
            return tempDetailData
        },
    }
}
</script>

<style scoped lang="less">
.detail-container {
    padding-top: 65/@baserem;
}

.detail-base-wrap {
    padding: 54/@baserem 0 60/@baserem;
}

.detail-content-wrap {
    width: 100%;
    max-width: 1080/@baserem;
    margin: 0 auto;
}

.detail-base-content-wrap {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;

    .course-base-info {
        display: flex;
        flex: 1;
        align-items: center;

        .course-cover-img {
            margin-right: 25/@baserem;
            font-size: 0;

            img {
                width: 148/@baserem;
                height: 195/@baserem;
                border-radius: 5/@baserem;
                background: #eee;
            }
        }

        .course-base-intro {
            flex: 1;
            height: 195/@baserem;

            .course-intro-title {
                font-size: 24/@baserem;
                line-height: 25/@baserem;
                color: #404040;
                font-weight: 500;
            }

            .course-intro-subtitle {
                margin-top: 10/@baserem;
                font-size: 18/@baserem;
                line-height: 20/@baserem;
                color: #404040;
                font-weight: 400;
            }

            .course-intro-author {
                color: #404040;
                font-weight: 400;
                font-size: 16/@baserem;
                margin-top: 20/@baserem;
                line-height: 16/@baserem;
            }

            .course-intro-authorIntro {
                margin-top: 7/@baserem;
                font-size: 14/@baserem;
                color: #404040;
                line-height: 20/@baserem;
                font-weight: 400;
                overflow: hidden;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
                height: 40/@baserem;
            }

            .course-intro-ctrl-wrap {
                margin-top: 18/@baserem;
                justify-content: space-between;
                align-items: flex-end;
                display: flex;

                .course-intro-ctrl-content {
                    display: flex;
                    align-items: center;

                    .course-intro-ctrl-btn {
                        display: inline-block;
                        cursor: pointer;
                        border: none;
                        outline: none;
                        width: 110/@baserem;
                        height: 34/@baserem;
                        border-radius: 5/@baserem;
                        line-height: 34/@baserem;
                        background: #fa8919;
                        color: #fff;
                        font-weight: 400;
                        font-size: 14/@baserem;

                        &:hover {
                            background: #ff7800;
                        }
                    }
                    
                    .course-intro-activity {
                        display: flex;
                        flex-direction: column;
                        margin-left: 20/@baserem;

                        div {
                            font-size: 12/@baserem;
                            font-weight: 400;
                            color: #fa8919;
                        }

                        s {
                            color: #888;
                            font-size: 12/@baserem;
                            font-weight: 400;
                            margin-left: 10/@baserem;
                            margin-top: 4/@baserem;
                        }
                    }
                }

                .course-intro-ctrl-info {
                    color: #888;
                    font-size: 13/@baserem;
                    font-weight: 300;
                    line-height: 1;
                }
            }
        }
    }

    .code-wrap {
        margin-left: 63/@baserem;
        background: #fafafa;
        width: 305/@baserem;
        height: 196/@baserem;
        border-radius: 5/@baserem;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        padding: 25/@baserem 20/@baserem 31/@baserem 24/@baserem;
        border: 1px solid #fcfdfc;

        h3 {
            font-size: 16/@baserem;
            font-weight: 500;
            color: #404040;
            margin-bottom: 18/@baserem;
        }

        .j4HnGIK5_0 {
            justify-content: space-between;
            align-items: flex-start;
        }

        .j4HnGIK5_0,
        .j4HnGIK5_0 .Oa6Lqpnp_0 ._2FeHrWPK_0 {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex
        }

        .j4HnGIK5_0 .Oa6Lqpnp_0 ._2FeHrWPK_0 {
        cursor: pointer;
        font-size: 12px;
        color: #fff;
        width: 134px;
        height: 35px;
        line-height: 35px;
        border-radius: 6px;
        background: #404040;
        margin-bottom: 10px;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        padding-left: 12px;
        font-weight: 400
        }

        .j4HnGIK5_0 .Oa6Lqpnp_0 ._2FeHrWPK_0._2ZgKlrv6_0 {
        background: #6ab344;
        margin-bottom: 0
        }

        .j4HnGIK5_0 .Oa6Lqpnp_0 ._2FeHrWPK_0._2ZgKlrv6_0 i {
        font-size: 19.5px;
        margin-right: 8px
        }

        .j4HnGIK5_0 .Oa6Lqpnp_0 ._2FeHrWPK_0 i {
        font-size: 16px;
        margin-right: 10px
        }

        .j4HnGIK5_0 ._35ob5jQd_0 {
        margin-top: 15px;
        display: block;
        padding-left: 2px;
        color: #c79d5e;
        font-size: 12px;
        font-weight: 300;
        line-height: 1em
        }

        .j4HnGIK5_0 ._35ob5jQd_0 ._32Ica7Z6_0 {
        height: 9px;
        margin-left: 3px
        }

        .j4HnGIK5_0 ._2wnMjaGX_0 {
        position: relative;
        top: -1px;
        padding: 9px;
        border-radius: 6px;
        background: #fff;
        font-size: 0;
        border: 1px solid #ddd
        }

        .j4HnGIK5_0 ._2wnMjaGX_0 img {
        width: 88px;
        height: 88px
        }
    }
}

._3822azc__0 {
    width: 100%;
    max-width: 1080px;
    margin: 0 auto;
}

._1y8VaRsC_0 {
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    margin-top: 10px;
    padding-bottom: 50px;
    padding-top: 20px;
    min-height: 700px;

    ._2IYyBY-w_0 {
        width: 712px;
    }
}

._1y8VaRsC_0 ._2IYyBY-w_0 ._1C2HTZHn_0 {
    border-bottom: 1px solid #e9e9e9;
    height: 50px
}

._1y8VaRsC_0 ._2IYyBY-w_0 ._1C2HTZHn_0,
._1y8VaRsC_0 ._2IYyBY-w_0 ._3UpDxHgY_0 {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center
}

._1y8VaRsC_0 ._2IYyBY-w_0 ._3UpDxHgY_0 {
    margin-right: 65px;
    height: 100%;
    font-size: 20px;
    font-weight: 500;
    color: #404040;
    border-bottom: 2px solid transparent
}

._1y8VaRsC_0 ._2IYyBY-w_0 ._3UpDxHgY_0._1VkkSc6v_0 {
    border-bottom-color: #fa8919;
    color: #fa8919
}

._1y8VaRsC_0 ._2IYyBY-w_0 ._3UpDxHgY_0 ._27k0us_4_0 {
    display: block;
    width: 38px;
    height: 17px;
    border: 1px solid #fa8919;
    border-radius: 3px;
    text-align: center;
    line-height: 17px;
    margin-left: 8px;
    font-size: 12px;
    color: #fa8919;
    font-weight: 400
}

._1y8VaRsC_0 .hTxdFIfR_0 {
    padding-top: 40px
}

// 课程介绍， 富文本样式, 注意 /deep/，渲染富文本
/deep/ .richcontent {
    padding: 22px 0 100px 21px;
    min-height: 738px;
    box-sizing: border-box;

    p {
        margin-top: 0;
        margin-bottom: 20px;
        font-size: 15px;
        font-weight: 400;
        color: #353535;
        white-space: normal;
        word-break: break-word;
        line-height: 28px;
        overflow: hidden;
    }

    h1, h2, h2 {
        position: relative;
        margin-top: 10px;
        margin-bottom: 13px;
        font-size: 16px;
        font-weight: 600;
        color: #404040;
    }

    video {
        max-width: 100%;
        outline: none;
        background: #000;
    }

    img {
        max-width: 100%;
        background-color: #eee;
        border: 0;
    }

    .orange {
        color: #fa8919;
    }

    ol {
        display: block;
        list-style: decimal;
        margin-left: 23px;
    }

    li {
        line-height: 28px;
        font-size: 15px;
        font-weight: 400;
        color: #353535;
        word-break: break-word;
        white-space: normal;
    }

    ul {
        list-style: none;

        li {
            position: relative;
            margin-left: 14px;

            &:after {
                content: "";
                position: absolute;
                top: 10px;
                left: -11px;
                width: 2px;
                height: 2px;
                border-radius: 50%;
                background: #888;
            }
        }
    }

    p, ul, ol {
        &:not(:first-child) {
            margin-top: 10px;
        }
    }

    ol, ul {
        &:not(:first-child) {
            li {
                &:not(:last-child) {
                    margin-bottom: 10px;
                }
            }
        }
    }

    a {
        color: #fa8919;
        // word-wrap: break-word;
        text-decoration: none;
        border-bottom: 1px solid #fa8919;
    }
}







._1NA4oJIG_0 {
  position: relative;
  margin: 12px 20px 6px 0;
  padding: 13px 8px;
  background: #f6f7fb;
  border-radius: 8px;
}
._1NA4oJIG_0 ._37qBN659_0 {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}
._1NA4oJIG_0 img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  -ms-flex-negative: 0;
      flex-shrink: 0;
}
._1NA4oJIG_0 ._2v-eHuf6_0 {
  padding-left: 8px;
  padding-right: 12px;
}
._1NA4oJIG_0 ._3rMGtjcf_0 {
  font-size: 17px;
  font-weight: 600;
  color: #353535;
}
._1NA4oJIG_0 ._3qYDQ8wS_0 {
  margin-top: 7px;
  line-height: 18px;
  font-size: 13px;
  font-weight: 400;
  color: #888;
}
._1NA4oJIG_0 ._1OZOD50w_0 {
  position: absolute;
  top: 11px;
  right: 10px;
  font-size: 12px;
  color: #999;
}
._2p3Arjga_0 {
  position: absolute;
  left: 0;
  right: 0;
  bottom: -1px;
  height: 67px;
  font-size: 14px;
  font-weight: 500;
  color: #888;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  -webkit-box-align: end;
      -ms-flex-align: end;
          align-items: flex-end;
  background: -webkit-gradient(linear, left bottom, left top, from(#fff), color-stop(rgba(255,255,255,0.9)), to(rgba(255,255,255,0)));
  background: linear-gradient(0deg, #fff, rgba(255,255,255,0.9), rgba(255,255,255,0));
}
._2p3Arjga_0 ._3c8AULUO_0 {
  margin-bottom: -28px;
}
._2p3Arjga_0 ._3NDdjNCy_0 {
  margin-left: 4px;
  font-size: 14px;
}
._3ooJE-Ce_0 {
  margin-top: -4px;
  margin-bottom: 33px;
  position: relative;
  height: 1px;
  display: block;
}
._3ooJE-Ce_0::after {
  content: "";
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  border-bottom: #e8e8e8 solid 1px;
  -webkit-transform: scaleY(0.5);
          transform: scaleY(0.5);
}
._1XA1KNEo_0 {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: flex;
      -ms-flex-align: flex;
          align-items: flex;
  -ms-flex-wrap: wrap;
      flex-wrap: wrap;
  margin-bottom: -18px;
}
._1XA1KNEo_0 ._3wMvYOhP_0 {
  -webkit-box-flex: 0;
      -ms-flex: 0 0 33.3%;
          flex: 0 0 33.3%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  margin-bottom: 12px;
}
._1XA1KNEo_0 ._3wMvYOhP_0:nth-child(3n-2) {
  -webkit-box-pack: start;
      -ms-flex-pack: start;
          justify-content: flex-start;
}
._1XA1KNEo_0 ._3wMvYOhP_0:nth-child(3n) {
  -webkit-box-pack: end;
      -ms-flex-pack: end;
          justify-content: flex-end;
}
._1XA1KNEo_0 ._3wMvYOhP_0 ._20AQMtey_0 {
  width: 22px;
  min-width: 22px;
  height: 22px;
  margin-right: 6px;
  -webkit-transform: scale(0.8);
          transform: scale(0.8);
}
._1XA1KNEo_0 ._3wMvYOhP_0 ._1tqXUtKa_0 {
  font-size: 14px;
  font-weight: 400;
  color: #404040;
}

// 课程目录
._1X9Hwflu_0 {
    height: 50px;
    box-sizing: border-box;
    overflow: hidden;
    width: 100%;
    transition: height .3s ease;

    &._1Tl0-Sx9_0 {
        ._3OQb1d55_0 {
            transform: rotate(180deg)
        }
    }

    ._3Nnx8nPI_0 {
        font-size: 18px;
        font-weight: 500;
        height: 50px;
        color: #4c4c4c;
        display: flex;
        align-items: center;
        justify-content: space-between;
        cursor: pointer;

        p {
            &:hover {
                text-decoration: underline;
            }
        }

        ._3OQb1d55_0 {
            transform: rotate(0deg);
            transition: transform .3s ease;
            display: block;
            width: 38px;
            text-align: center;
            font-size: 24px;
            color: #b2b2b2;
        }

        ._3OQb1d55_0 i {
            font-size: 12px
        }
    }
    ._3c2pu66u_0 {
        font-size: 15px;
        color: #4c4c4c;
        font-weight: 400;
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 50px;

        &._1LdS9ume_0 {
            color: #b2b2b2;
        }

        &._2ErUWiOJ_0 {
            padding-left: 31px;
        }

        a {
            color: #4c4c4c;
            white-space: nowrap;
            max-width: 85%;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        .JFRrVE-U_0 {
            display: block;
            width: 38px;
            height: 16px;
            background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAA2CAYAAAC8yXv8AAAEoElEQVRoQ+2aXYgbVRTH/2cy2boWra1FdulmMzfZGF1xlboI6osUHwSt1G19UCtaoYhPvih+oq2gXfog+iBCBT/QB4WqVbAFEXwpVPxARaqs2cyd2V3TRVexYulukrlX7pro7O1MksmnDzlPYXI+fjk5c+fcc4fQoszPz2/yPG+HEGKbYRhXSSkZgPXKLRH9JaW0AXwD4DMAHzLG/mglJDVr7LruFUKIJwDcASDeoJ8igHeIaNqyrB8btFmjFhl4cXFx/fLy8rSU8kEAsWaCAvCklC/F4/GnEonE2Sg+IgHn8/lLDcP4CEA2SpAauicNw7gtmUyqsmlIGgZ2XfcaIcQnADbV8fw7gFOqhAEMA9hYR/8XIcRN6XT6+0aIGwKenZ0dM03zhJRyc4jTL6WUr3qedyyTySz4dXK53IhpmrcC2Atga4j9KSnldalUyq0HXRc4l8utM03zCwATAc4KqpZTqZQqk7pi2/YuInoZwCW6MhF9tbS0dP3k5GSplqO6wJzz/QCeDnDyebFY3J7NZpfqkvoUOOdDAD4OyjYRPWlZ1vNNAzuOM1xZR8/TnHwrhLgxnU6fjgJb1c3n8xsMwzgB4HLN/kyxWLRqJaFmhm3bfo6I1Frrl7OxWOzK0dHRfDOwVRvbtrNE9B2AdZqffYwx9a8GSiiwlJIcx5kHsEWz3M8Y29cKbNU2pNw4YywVGdi27YlKBvy2RdM0hxOJhFq6WpaZmZnNAwMDPwMY8DsjovGwJ2Fohm3b3ktEhzSqo4yxW1omXXsTHgNws+ZzD2PsjaA4ocCO4xyUUj6iGT3DGHu2zcBqBdJrdpox9ngkYM75awD2aEb3M8ZebzPwfQB0n4cYYw9EBVZ/yb1abe20LOv9NgPvAPCB5vNNxpj6IedIaElwzs8BBnA7Y+xIH7if4f9qoF8SnPPmb7rKjmJnZUexDUBCu8FUm6ma83aKavKv1RyqluBTADOxWOywv29ZXSVUzxuLxV4gIrVPq9tytpO2AV8eEb1SKpUezmQyK1Rpcg4DmGrAuJcqRyzLmiLbtncT0Vu9JIkQ+y4FfJyIbohg1DNVIjpOnPNlvYkmot1SypM9I/sn8NUBPcaKApYa2GnG2EU9hl0Nzzn/E8AFa/qZ/zmwmsNt6AP7M5DL5S6Mx+O71DXP895rdmddKYnOZrhQKJy/srLyNYDLKj/ip8HBwa1DQ0NnmrknOOedBQ7qC4hoyrIsvUFviL8bwEHbndANZT3qPrCeIc55P8MdXYf7Ge7Cstav4X4N+5c2x3HullK+7b8mpbwnlUqtuVbvgVH9vuMPjrm5ubTneeqEs3oyWvI8b3xsbGy2UUi/XseBKx2WmvU+qj4T0UHLstT8tynpCnBTZCFGfeB2ZjPIV1iGhTbtKcXj8eGRkZHfOg1Uy//CwsLF5XJ5UUpp+vSE2jWrk3T1UoZffgVQ6CUwEW0JONvmCvgAgMd6CRch9gFyXXejEEKdSOqTygh+uqKqJpoTq5NK13XHhRBHASS7Ejp6ENswjO3JZPKHf0erlQPrhwDcCSDTwusx0XGCLTw1HwbwbrlcfjGTyagpEP4GG9SM8nedrMQAAAAASUVORK5CYII=) no-repeat 50%;
            background-size: auto 100%;
        }

        &:hover {
            cursor: pointer;
            background: #fff8f1;

            a {
                cursor: pointer;
                color: #fa8919;
                text-decoration: none;
            }
        }
    }
}

// 推荐课程
.VpgaLBIY_0 {
    background: #fff;
    width: 305px;

    ._3MZnDYIJ_0 {
        color: #404040;
        font-weight: 500;
        font-size: 16px;
        height: 50px;
        display: flex;
        align-items: center;
        border-bottom: 1px solid #e9e9e9;
    }

    ._3neSIM1B_0 {
        display: flex;
        justify-content: space-between;
        margin-top: 40px;
    }

    ._14fgEuQ7_0 {
        width: 88px;
        height: 111px;
        border-radius: 5px;
        overflow: hidden;
        background: #eee;

        img {
            width: 100%;
            height: 100%;
        }
    }

    ._1DOtZoG8_0 {
        width: 203px;
        margin-left: 14px;

        .jU9tYlcG_0 {
            display: block;
            cursor: pointer;
            width: 100%;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            font-weight: 500;
            font-size: 16px;
            color: #404040;
            line-height: 20px;

            &:hover {
                text-decoration: underline;
            }
        }

        ._1UmnOqjj_0 {
            margin-top: 8px;
            color: #888;
        }

        ._1UmnOqjj_0 p {
            font-weight: 400;
            line-height: 20px;
            white-space: nowrap;
            width: 100%;
            overflow: hidden;
            text-overflow: ellipsis;
            font-size: 14px;

            ._1Hq1Oraj_0 {
                font-size: 12px;
                line-height: 20px;
                margin-top: 2px;
            }
        }

        ._3-RXWUsc_0 {
            display: flex;
            align-items: center;
            margin-top: 17px;

            ._3gfq7JxW_0 {
                height: auto;
                padding: 3px 5px;
                color: #fff;
                font-size: 12px;
                font-weight: 400;
                line-height: 1.2em;
                white-space: nowrap;
                border-radius: 2px;
                margin-right: 8px;
            }

            ._2WklZJNF_0 {
                background: #fa8919;
            }

            ._1wXQpxSl_0 {
                background: #f9c300;
            }

            ._1SIcQIUT_0 {
                font-size: 16px;
                color: #fa8919;
                font-weight: 400;
                margin-right: 8px;
                white-space: nowrap;
            }

            ._1Wwr9Nlr_0 {
                white-space: nowrap;
                font-size: 13px;
                color: #888;
                font-weight: 400;
            }

            ._2u0HbJZU_0 {
                font-size: 13px;
                color: #888;
                font-weight: 400;
            }
        }
    }
}
</style>