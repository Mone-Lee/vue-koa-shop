<template>
    <div class="wrapper" ref="wrapper" :style="{height: height + 'px'}" @scroll="handleScroll">
        <div ref="content">
            <div :style="{height: fillTopHeight + 'px'}"></div>
            <div class="item"
                v-for="item in showList" 
                :key="item.index" 
                :style="{height: itemHeight + 'px', color: item.color}">{{ item.index }}</div>
            <div :style="{height: fillBottomHeight + 'px'}"></div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            height: 500,
            fillTopHeight: 0,
            fillBottomHeight: 0,
            data: Array.from({ length: 6000 }).map((_, index) => ({
                index,
                color: `#${Math.random()
                .toString(16)
                .substr(2, 6)}`,
            })),
            showList: [],
            itemHeight: 50,
        }   
    },
    mounted() {
        this.update(0)
        this.$nextTick(() => {
            this.maxHeight = this.$refs.content.offsetHeight;
            console.log(this.maxHeight)
        })
    },

    methods: {
        update(scrollTop) {
            let visibleTop = scrollTop;
            let visibleBottom = scrollTop + this.height;
            this.showList = this.getShowList(visibleTop, visibleBottom, this.data);
        },

        getShowList(start, end, list) {
            if(start < end) {
                let startIndex = Math.floor(start / this.itemHeight);
                let endIndex = Math.ceil(end / this.itemHeight) <= this.data.length ? Math.ceil(end / this.itemHeight) : this.data.length
                this.fillTopHeight = startIndex * this.itemHeight || 0;
                this.fillBottomHeight = (this.data.length - endIndex) * this.itemHeight || 0;
                return this.data.slice(startIndex, endIndex)
            }
        },

        handleScroll() {
            if(this.$refs.wrapper.scrollTop > 0 && this.$refs.wrapper.scrollTop + this.height <= this.maxHeight) {
                window.requestAnimationFrame(() => {
                    this.update(this.$refs.wrapper.scrollTop)
                })
                
            }
        }
    }
}
</script>

<style lang="less" scoped>
.wrapper {
    border: 1px solid #ccc;
    height: 100%;
    overflow: auto;
}

.item {
  height: 50px;
  padding-left: 50px;
}
</style>