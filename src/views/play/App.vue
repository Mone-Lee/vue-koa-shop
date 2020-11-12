<template>
    <div id="root" class="download-container">
        <commonHeader></commonHeader>
        <p>播放页</p>
        <div>{{ data }}</div>
    </div>
</template>

<script>
import commonHeader from '../../components/commonHeader.vue';
export default {
    components: { commonHeader },
    data() {
        return {
        }   
    },
    mounted() {
    },

    methods: {
    },

    computed: {
        data() {
            return this.$store.state.column
        }
    }
}
</script>

<style scoped lang="less">

</style>