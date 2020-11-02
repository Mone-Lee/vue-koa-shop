<template>
    <div class="home-container">
        <div class="home-content">
            <div class="home-head">
                <div class="home-search-bar">
                    <i class="iconfont iconfangdajing icon-search"></i>
                    <p>{{ keyword }}</p>
                </div>
                <img src="@/assets/img/top_bar.png" class="top-bar">
            </div>
            
            <p class="txt-line">字体测试</p>
            <p class="txt-line">watch 测试</p>
            <p class="txt-line">热更新 测试</p>
            <p class="txt-line">自动打包构建html文件 测试</p>
            <img :src="starIcon" />
            <p @click="dynamicImport">动态import (click)</p>
            <Test v-if='showTest'></Test>
            <p class="txt-line">log 格式 测试</p>
            <el-radio v-model="radio" label="1">备选项</el-radio>
            <el-radio v-model="radio" label="2">备选项</el-radio>
            <img :src="bg" class="big-img" />
        </div>
        <div class=""></div>
    </div>
</template>

<script>
import starIcon from '../../assets/img/icon_star.png'
import bg from '../../assets/img/bg.jpg'
export default {
    data() {
        return {
            keyword: '限量发售|数字魔法师礼盒',
            starIcon: starIcon,
            bg: bg,
            showTest: false,
            radio: '1'
        }   
    },
    mounted() {
        // this.common();
    },

    methods: {
        dynamicImport() {
            this.showTest = !this.showTest;
        }
    }
}
</script>

<style scoped lang="less">
.home-search-bar {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 5/@baserem 10/@baserem;
    border-radius: 5/@baserem;
    background-color: #f8f8f8;

    .icon-search {
        color: #ff6500;
        margin-right: 20/@baserem;
    }

    p {
        color: #ff6500;
        font-size: 12/@baserem;
        letter-spacing: 1px;
    }

}
.top-bar {
    width: 100%;
    height: 100/@baserem;
}

.txt-line {
    font-size: 20px;
    color: red;
    display: flex;
    // font-family: 'SourceHanSerifSC-Heavy';
}

.big-img {
    width: 50vw;
}

.unused-css {
    color: #FFFFFF;
}
</style>