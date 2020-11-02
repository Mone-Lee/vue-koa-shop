<template>
    <div class="home-container">
        <div class="home-content">
            <img src="@/assets/img/top_bar.png">
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
import '../../../common'
import starIcon from '../../assets/img/icon_star.png'
import bg from '../../assets/img/bg.jpg'
export default {
    data() {
        return {
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
// @font-face {
//     font-family: 'SourceHanSerifSC-Heavy';
//     src: url('../assets/font/SourceHanSerifSC-Heavy.otf') format('truetype');
// }
.top-bar {
    width: 750/@baserem;
    height: 100/@baserem;
    img {
        width: 750/@baserem;
        height: 100/@baserem;
    }
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