<template>
    <div class="home-container">
        <commonHeader></commonHeader>
        <div class="_2lx4a-CP_0">
            <div class="_3KjZQbwk_0">
                <div class="kcMABq6U_0">
                    <span>课程：</span>
                    <a class="_2TWCBjxa_0" :class="{'_2CeglKlV_0': filterType === 0}" @click="selectFilterType(0)">全部</a>
                    <a class="_2TWCBjxa_0" :class="{'_2CeglKlV_0': filterType === 1}" @click="selectFilterType(1)">专栏</a>
                    <a class="_2TWCBjxa_0" :class="{'_2CeglKlV_0': filterType === 2}" @click="selectFilterType(2)">视频课程</a>
                    <a class="_2TWCBjxa_0" :class="{'_2CeglKlV_0': filterType === 3}" @click="selectFilterType(3)">微课</a>
                </div>
            </div>
            <div class="_3hVBef3W_0">
                <div class="_3S9KmBtG_0">
                    <div class="_1o6EOwiF_0">
                        <div class="_3HUryTHs_0">
                            <a class="_1kRLIDSR_0" :class="{'_2CeglKlV_0': sortType === 1}" @click="selectSortType(1)">上新</a>
                            <a class="_1kRLIDSR_0" :class="{'_2CeglKlV_0': sortType === 2}" @click="selectSortType(2)">订阅数</a>
                            <a class="_1kRLIDSR_0" :class="{'_2CeglKlV_0': sortType === 3 || sortType === 4}" @click="selectSortType(3)">价格
                                <span class="_1Yk9PA11_0">
                                    <i class="iconfont icontriangle-top _2jewjGCJ_0" :class="{'_2CeglKlV_0': sortType === 3}"></i> <i class="iconfont icontriangle-top _38FM8KCt_0" :class="{'_2CeglKlV_0': sortType === 4}"></i>
                                </span>
                            </a>
                        </div>
                        <span class="JfgzzksA_0">{{ columns.length }}个课程</span>
                    </div>
                    <courseItem v-for="column in columns" :key="column.id" :column="column"></courseItem>
                    <div class="OjL5wNoM_0"><span>— 没有更多了 —</span></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import commonHeader from '../../components/commonHeader.vue';
import courseItem from '../../components/courseItem.vue';
import http from '@/assets/utils/http'
export default {
    components: { commonHeader, courseItem },
    data() {
        return {
            filterType: 0,
            sortType: 0,
            columns: [],
        }   
    },
    mounted() {
        // 本地开发使用，因为没有配置ssr的热更新，正常开发时是使用开发环境的
        if (process.env.NODE_ENV === "development") {
            this.getListData();
        }
    },

    methods: {
        selectFilterType(type) {
            this.filterType = type;
            this.getListData();
        },

        selectSortType(type) {
            if(this.sortType === 3 && type === 3) {
                this.sortType = 4;
            } else {
                this.sortType = type;
            }
            this.getListData();
        },

        getListData() {
            console.log('getData ==')
            http.get('/list/get', {'sortType': this.sortType, 'filterType': this.filterType}).then(data => {
                this.columns = data.list;
            }).catch(err => {
                console.log(err)
            })
        }
    }
}
</script>

<style scoped lang="less">
    ._2lx4a-CP_0 {
        width: 1080px;
        justify-content: space-between;
        width: 1080px;
        margin: 0 auto 60px;
        padding-top: 50px;
    }

    ._3KjZQbwk_0 {
      margin-top: 50px;
      height: 50px;
      -webkit-box-pack: justify;
      -ms-flex-pack: justify;
      justify-content: space-between;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center
    }

    ._3KjZQbwk_0,
    ._3KjZQbwk_0 .kcMABq6U_0 {
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex
    }

    ._3KjZQbwk_0 .kcMABq6U_0 {
      -webkit-box-flex: 1;
      -ms-flex: 1;
      flex: 1
    }

    ._3KjZQbwk_0 .kcMABq6U_0 span {
      font-size: 15px;
      font-weight: 400;
      margin-right: 18px
    }

    ._3KjZQbwk_0 .kcMABq6U_0 ._2TWCBjxa_0 {
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-pack: center;
      -ms-flex-pack: center;
      justify-content: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      padding: 0 20px;
      height: 28px;
      font-size: 17px;
      font-weight: 400;
      border-radius: 14px;
      color: #404040;
      line-height: 1em;
      margin-right: 20px
    }

    ._3KjZQbwk_0 .kcMABq6U_0 ._2TWCBjxa_0:hover {
      background: #f6f7fb;
      cursor: pointer;
    }

    ._3KjZQbwk_0 .kcMABq6U_0 ._2TWCBjxa_0._2CeglKlV_0 {
      color: #fa8919;
      background: #fbf5ee
    }

    ._3KjZQbwk_0 .kkd89V2i_0 {
      -webkit-box-flex: 0;
      -ms-flex: 0 0 110px;
      flex: 0 0 110px;
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-pack: end;
      -ms-flex-pack: end;
      justify-content: flex-end
    }

    ._3KjZQbwk_0 ._2_KiDaj7_0 {
      outline: none;
      background: #fff;
      cursor: pointer;
      display: block;
      line-height: 31px;
      width: 105px;
      height: 31px;
      border: 1px solid #fa8919;
      color: #fa8919;
      font-size: 14px;
      font-weight: 400;
      text-align: center;
      border-radius: 5px
    }

    ._3KjZQbwk_0 ._2_KiDaj7_0:hover {
      border-color: #ff6000;
      color: #ff6000
    }

    ._3hVBef3W_0 {
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-pack: justify;
      -ms-flex-pack: justify;
      justify-content: space-between
    }

    ._3hVBef3W_0 ._3S9KmBtG_0 {
      width: 711px
    }

    ._3hVBef3W_0 ._3S9KmBtG_0 ._1o6EOwiF_0 {
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-pack: justify;
      -ms-flex-pack: justify;
      justify-content: space-between;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      height: 50px;
      border-bottom: 1px solid hsla(0, 0%, 91%, .6)
    }

    ._3hVBef3W_0 ._3S9KmBtG_0 ._1o6EOwiF_0 .JfgzzksA_0 {
      font-size: 12px;
      color: #888;
      font-weight: 400
    }

    ._3hVBef3W_0 ._3S9KmBtG_0 ._1o6EOwiF_0 ._3HUryTHs_0 {
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex
    }

    ._3hVBef3W_0 ._3S9KmBtG_0 ._1o6EOwiF_0 ._3HUryTHs_0 ._1kRLIDSR_0 {
      color: #888;
      padding-right: 20px;
      font-size: 13px;
      font-weight: 400;
      margin-right: 20px;
      position: relative
    }

    ._3hVBef3W_0 ._3S9KmBtG_0 ._1o6EOwiF_0 ._3HUryTHs_0 ._1kRLIDSR_0 ._1Yk9PA11_0 {
      position: absolute;
      top: -1px;
      right: 10px;
      width: 10px;
      height: 16px;
      color: #b2b2b2;
      transform: scale(.8);
    }

    ._3hVBef3W_0 ._3S9KmBtG_0 ._1o6EOwiF_0 ._3HUryTHs_0 ._1kRLIDSR_0 ._1Yk9PA11_0 i {
      position: absolute;
      left: 0;
      top: 0;
      transform: scale(.8);
      font-size: 12px;
      transition: transform .3s ease;
    }

    ._3hVBef3W_0 ._3S9KmBtG_0 ._1o6EOwiF_0 ._3HUryTHs_0 ._1kRLIDSR_0 ._1Yk9PA11_0 i._2jewjGCJ_0 {
        top: -2px;
        transform: scale(.8);
    }

    ._3hVBef3W_0 ._3S9KmBtG_0 ._1o6EOwiF_0 ._3HUryTHs_0 ._1kRLIDSR_0 ._1Yk9PA11_0 i._38FM8KCt_0 {
      top: 7px;
      transform: scale(.8) rotate(180deg);
    }

    ._3hVBef3W_0 ._3S9KmBtG_0 ._1o6EOwiF_0 ._3HUryTHs_0 ._1kRLIDSR_0._2CeglKlV_0,
    ._3hVBef3W_0 ._3S9KmBtG_0 ._1o6EOwiF_0 ._3HUryTHs_0 ._1kRLIDSR_0:hover {
      font-weight: 500;
      color: #666565;
      cursor: pointer;
    }

    ._3hVBef3W_0 ._3S9KmBtG_0 ._1o6EOwiF_0 ._3HUryTHs_0 ._1kRLIDSR_0._2CeglKlV_0 ._1Yk9PA11_0 {
      display: block
    }

    ._3hVBef3W_0 ._3S9KmBtG_0 ._1o6EOwiF_0 ._3HUryTHs_0 ._1kRLIDSR_0._2CeglKlV_0 ._1Yk9PA11_0 ._2CeglKlV_0._2jewjGCJ_0,
    ._3hVBef3W_0 ._3S9KmBtG_0 ._1o6EOwiF_0 ._3HUryTHs_0 ._1kRLIDSR_0._2CeglKlV_0 ._1Yk9PA11_0 ._2CeglKlV_0._38FM8KCt_0 {
      color: #fa8919
    }

    ._3hVBef3W_0 .AaWD07ZH_0 {
      width: 305px;
      padding-bottom: 50px
    }

    .OjL5wNoM_0 {
      margin: 35px 0
    }

    .OjL5wNoM_0 .vUoikev7_0 {
      cursor: pointer;
      background: #fff;
      outline: none;
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-pack: center;
      -ms-flex-pack: center;
      justify-content: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      height: 32px;
      border-radius: 5px;
      border: 1px solid #b2b2b2
    }

    .OjL5wNoM_0 .vUoikev7_0,
    .OjL5wNoM_0 span {
      margin: 0 auto;
      width: 172px;
      color: #b2b2b2;
      font-size: 14px
    }

    .OjL5wNoM_0 span {
      display: block;
      height: 34px;
      line-height: 34px;
      text-align: center
    }

    ._2JajPmV9_0 {
      position: fixed;
      z-index: 10;
      left: 0;
      bottom: 77px;
      width: 146px;
      height: 60px;
      cursor: pointer;
      opacity: 0;
      -webkit-transform: translate3d(-100%, 0, 0);
      transform: translate3d(-100%, 0, 0);
      -webkit-transition: all .3s ease;
      transition: all .3s ease
    }

    ._2JajPmV9_0._3pcP2VEJ_0 {
      opacity: 1;
      -webkit-transform: translateZ(0);
      transform: translateZ(0)
    }

    ._251HGJzT_0 {
      position: fixed;
      z-index: 10;
      bottom: 0;
      width: 100%;
      height: 85px;
      cursor: pointer;
      -webkit-transform: translate3d(0, 100%, 0);
      transform: translate3d(0, 100%, 0);
      -webkit-transition: all .3s ease;
      transition: all .3s ease
    }

    ._251HGJzT_0._3pcP2VEJ_0 {
      -webkit-transform: translateZ(0);
      transform: translateZ(0)
    }

    ._251HGJzT_0 ._2bE2YgkU_0 {
      position: absolute;
      z-index: 10;
      top: 0;
      left: 50%;
      width: 1440px;
      height: 100%;
      margin-left: -720px;
      background-image: url(https://static001.geekbang.org/static/time/img/newcomer-coupon.ac1885c.png);
      background-size: cover;
      background-position: 50%;
      background-repeat: no-repeat
    }

    ._251HGJzT_0 ._8oicOq_I_0 {
      position: absolute;
      top: 22px;
      left: 0;
      width: 100%;
      height: 100%;
      background: hsla(37, 66%, 84%, .95)
    }

    ._251HGJzT_0 ._3ajZYO2R_0 {
      position: absolute;
      z-index: 20;
      top: 50%;
      right: 25px;
      margin-top: -12px;
      width: 32px;
      height: 32px;
      line-height: 32px;
      text-align: center;
      font-size: 12px;
      color: #c7803e;
    }
</style>