<template>
    <li class="vue-virtual-list-item" :style="{ transform: `translateY(${scrollNum}px)` }">
        <!-- <div >{{ item.index }}</div> -->
        <slot :item1="item.contain"></slot>
    </li>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    props: {
        item: {
            type: Object,
            default: () => {}
        },
        scrollNum: {
            type: Number,
            default: 0
        }
    },
    async mounted() {
        const { index, height } = this.item;
        await this.$nextTick();
        this.$emit('updateHeight', this.$el.offsetHeight, index);
    }
});
</script>
<style lang="less" scoped>
.vue-virtual-list-item {
    position: absolute;
    left: 0;
    top: 0;
}
</style>