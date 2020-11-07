<template>
    <div class="search-container">
        <p class="txt-line">搜索页面</p>
        <p @click="msg='click'" id="clickEle">change</p>
        <p>{{ msg }}</p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            msg: ''
        }   
    },
    mounted() {
        console.log('mounted search')
        console.log(document.getElementById('clickEle'))
    },

    methods: {
        change() {
            console.log('change')
        }
    }
}
</script>

<style scoped>
.txt-line {
    font-size: 20px;
    color: red;
    display: flex;
    /* font-family: 'SourceHanSerifSC-Heavy'; */
}
</style>