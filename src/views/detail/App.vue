<template>
    <div id="root" class="detail-container">
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
        if(this.$route && this.$route.params && this.$route.params.column_id) {
            let id = Number(this.$route.params.column_id);
            this.$store.dispatch('getData', id);
        }
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