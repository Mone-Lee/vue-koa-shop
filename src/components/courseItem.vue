<template>
    <div class="_20Cq3Rn7_0">
        <div class="_2sej44xY_0">
            <a data-seo="" :href="diffEnvUrl('detail', { column_id: column.id})">
                <img :src="column.column_cover" alt="" class="_1miPDP4s_0" />
                <span class="_1wLiyUbR_0"></span>
            </a>
        </div>
        <div class="_3M3E-ESU_0">
            <div class="_3gQBs_6X_0">
                <div class="_3G50nw0p_0">
                    <h2>{{ column.column_title }}</h2> <p>{{ column.column_unit }} <em>|</em> {{ column.sub_count }}人已学习</p>
                </div>
                <div class="_33lENDr7_0">{{ column.author_name }} {{ column.author_intro }}</div>
            </div>
            <div class="_14n6BJoa_0">
                <ul>
                    <li v-for="(article, index) in column.articles" :key="article.id">
                        <a href="" :class="{'_10vvBdC9_0': article.is_video_preview }">
                            <span class="_ffA7FdL_0" v-if="article.is_video_preview">免费</span> 
                            {{ '0' + index + ' | ' + article.article_title }}
                        </a>
                    </li>
                </ul>
            </div>
            <div class="_2zRFFX7P_0">
                <p class="_14cxbu2p_0"><span class="_1BSc9YvC_0">限时 ¥{{ column.column_price / 100 }}</span><s class="_1EwQIhcU_0" v-if="column.column_price_market">原价 ¥{{ column.column_price_market / 100 }}</s></p>
                <div class="_1NLR_mQs_0"><button class="_272_Yrle_0">立即订阅</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['column'],
    mounted() {
    }
}
</script>

<style scoped lang="less">
    ._20Cq3Rn7_0 {
      display: flex;
      justify-content: space-between;
      align-items: center
    }

    ._20Cq3Rn7_0 ._2sej44xY_0 {
      flex: 0 0 127px;
      width: 127px;
      height: 168px
    }

    ._20Cq3Rn7_0 ._2sej44xY_0 a {
      position: relative;
      display: block;
      background: #eee
    }

    ._20Cq3Rn7_0 ._2sej44xY_0 a,
    ._20Cq3Rn7_0 ._2sej44xY_0 a ._1miPDP4s_0 {
      width: 100%;
      height: 100%;
      border-radius: 5px
    }

    ._20Cq3Rn7_0 ._2sej44xY_0 a ._1wLiyUbR_0 {
      position: absolute;
      right: 0;
      bottom: 0;
      width: 27px;
      height: 19px;
      background: url(data:image/png;base64,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) 50% no-repeat;
      background-size: 100%
    }

    ._20Cq3Rn7_0 ._3M3E-ESU_0 {
      width: calc(100% - 147px);
      padding: 40px 0;
      margin-left: 20px;
      border-bottom: 1px solid hsla(0, 0%, 91%, .6)
    }

    ._20Cq3Rn7_0 ._3M3E-ESU_0._17ezjs3L_0 {
      border-bottom: none
    }

    ._20Cq3Rn7_0 ._3M3E-ESU_0 ._3gQBs_6X_0 {
      cursor: pointer
    }

    ._20Cq3Rn7_0 ._3M3E-ESU_0 ._3gQBs_6X_0 ._3G50nw0p_0 {
      padding-top: 3px;
      display: flex;
      justify-content: space-between;
      align-items: center
    }

    ._20Cq3Rn7_0 ._3M3E-ESU_0 ._3gQBs_6X_0 ._3G50nw0p_0 em {
      font-weight: 300
    }

    ._20Cq3Rn7_0 ._3M3E-ESU_0 ._3gQBs_6X_0 ._3G50nw0p_0 h2 {
      font-size: 20px;
      color: #404040;
      font-weight: 500;
      line-height: 24px;
      margin-right: 10px
    }

    ._20Cq3Rn7_0 ._3M3E-ESU_0 ._3gQBs_6X_0 ._3G50nw0p_0 p {
      font-weight: 400;
      font-size: 14px;
      color: #888;
      font-weight: 300;
      line-height: 24px;
      white-space: nowrap;
      letter-spacing: 1px
    }

    ._20Cq3Rn7_0 ._3M3E-ESU_0 ._3gQBs_6X_0 ._33lENDr7_0 {
      margin-top: 5px;
      max-width: 100%;
      color: #404040;
      font-size: 14px;
      font-weight: 400;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden
    }

    ._20Cq3Rn7_0 ._3M3E-ESU_0 ._14n6BJoa_0 {
      height: 80px;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      padding: 5px 0 16px
    }

    ._20Cq3Rn7_0 ._3M3E-ESU_0 ._14n6BJoa_0 ul {
      display: flex;
      flex-wrap: wrap
    }

    ._20Cq3Rn7_0 ._3M3E-ESU_0 ._14n6BJoa_0 ul li {
      width: 50%;
      box-sizing: border-box;
      align-items: center;
      display: flex;
      margin-top: 10px
    }

    ._20Cq3Rn7_0 ._3M3E-ESU_0 ._14n6BJoa_0 ul li:nth-child(2n-1) {
      padding-right: 20px;
      overflow: hidden
    }

    ._20Cq3Rn7_0 ._3M3E-ESU_0 ._14n6BJoa_0 ul li a {
      flex: 1;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      height: 20px;
      line-height: 20px;
      color: #404040;
      font-size: 13px;
      font-weight: 400
    }

    ._20Cq3Rn7_0 ._3M3E-ESU_0 ._14n6BJoa_0 ul li a:hover {
      text-decoration: underline
    }

    ._20Cq3Rn7_0 ._3M3E-ESU_0 ._14n6BJoa_0 ul li a._10vvBdC9_0 {
      position: relative;
      padding-left: 30px
    }

    ._20Cq3Rn7_0 ._3M3E-ESU_0 ._14n6BJoa_0 ul li a ._ffA7FdL_0 {
      display: block;
      position: absolute;
      top: 3px;
      left: 0;
      width: 48px;
      height: 26px;
      text-align: center;
      line-height: 26px;
      font-size: 18px;
      font-weight: 400;
      color: #fa8919;
      transform: scale(.5);
      transform-origin: top left;
      border: 1px solid #fa8919;
      border-radius: 6px
    }

    ._20Cq3Rn7_0 ._3M3E-ESU_0 ._2zRFFX7P_0 {
      height: 35px;
      justify-content: space-between
    }

    ._20Cq3Rn7_0 ._3M3E-ESU_0 ._2zRFFX7P_0,
    ._20Cq3Rn7_0 ._3M3E-ESU_0 ._2zRFFX7P_0 ._14cxbu2p_0 {
      display: flex;
      align-items: center
    }

    ._20Cq3Rn7_0 ._3M3E-ESU_0 ._2zRFFX7P_0 ._14cxbu2p_0 ._2CZKTcPl_0 {
      color: #888;
      font-size: 13px;
      font-weight: 400;
      letter-spacing: 1px
    }

    ._20Cq3Rn7_0 ._3M3E-ESU_0 ._2zRFFX7P_0 ._14cxbu2p_0 ._1BSc9YvC_0 {
      color: #fa8919;
      font-size: 18px;
      font-weight: 400
    }

    ._20Cq3Rn7_0 ._3M3E-ESU_0 ._2zRFFX7P_0 ._14cxbu2p_0 ._1EwQIhcU_0 {
      font-weight: 400;
      margin-left: 10px;
      font-size: 13px;
      letter-spacing: 1px;
      color: #888
    }

    ._20Cq3Rn7_0 ._3M3E-ESU_0 ._2zRFFX7P_0 ._1NLR_mQs_0 ._272_Yrle_0 {
      border: none;
      outline: none;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 92px;
      height: 33px;
      color: #fff;
      background: #fa8919;
      border-radius: 5px;
      font-size: 14px;
      cursor: pointer;
      font-weight: 400
    }

    ._20Cq3Rn7_0 ._3M3E-ESU_0 ._2zRFFX7P_0 ._1NLR_mQs_0 ._272_Yrle_0:hover {
      background: #ff7800
    }

    ._20Cq3Rn7_0 ._3M3E-ESU_0 ._2zRFFX7P_0 ._1NLR_mQs_0 ._272_Yrle_0._2Ea07iHw_0 {
      color: #fa8919;
      background: #fbf5ee
    }

    ._20Cq3Rn7_0 ._3M3E-ESU_0 ._2zRFFX7P_0 ._1NLR_mQs_0 ._272_Yrle_0._2Ea07iHw_0:hover {
      background: #fff1e0
    }
  </style>