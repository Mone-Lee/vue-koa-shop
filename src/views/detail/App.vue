<template>
    <div id="root" class="detail-container">
        <p class="txt-line">搜索页面</p>
        <p @click="change">change</p>
        <p>{{ msg }}</p>
    </div>
</template>

<script>
import { getQueryString } from '../../assets/utils/utils';
export default {
    data() {
        return {
        }   
    },
    mounted() {
        let id = '';
        if (process.env.NODE_ENV === "development") {
            id = Number(getQueryString('column_id'));
        } else {
            id = Number(location.pathname.split('/')[1])
        }
        if (id) {
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