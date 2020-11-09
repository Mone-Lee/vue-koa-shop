<template>
    <!-- 注意：一定要添加id，以及id值与index.js中挂载的id相同，否则事件无法正确绑定！！！ -->
    <div id="root" class="search-container">
        <p class="txt-line">搜索页面</p>
        <p @click="change">change</p>
        <p>{{ msg }}</p>
    </div>
</template>

<script>
export default {
    data() {
        return {
        }   
    },
    mounted() {
        this.$store.dispatch('getData', 232)
    },

    methods: {
        change() {
            console.log('change')
            this.$store.dispatch('getData', 278)
        }
    },

    computed: {
        msg() {
            return this.$store.state.msg
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