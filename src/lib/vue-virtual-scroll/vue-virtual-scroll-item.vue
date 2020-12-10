<template>
    <li class="vue-virtual-list-item" :style="{ transform: `translateY(${item.scrollY}px)` }">
        <div>{{ item.index }}</div>
        <slot :item1="item.contain"></slot>
    </li>
</template>
<script lang="ts">
import { defineComponent, h } from 'vue';

export default defineComponent({
    props: {
        item: {
            type: Object,
            default: () => {}
        }
    },
    async mounted() {
        const { index, height } = this.item;
        await this.$nextTick();
        // if (height) return;
        this.$emit('updateHeight', this.$el.offsetHeight, index);
    }
});
</script>
<style lang="less" scoped>
.vue-virtual-list-item {
    // height: 200px;
    position: absolute;
    left: 0;
    top: 0;
}
</style>