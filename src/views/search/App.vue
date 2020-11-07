<template>
    <div class="search-container">
        <p class="txt-line">搜索页面</p>
        <p @click="change" id="clickEle">change</p>
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