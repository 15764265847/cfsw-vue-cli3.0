<template>
    <li><slot></slot></li>
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
        await this.$nextTick();
        const { key, height } = this.item;
        console.log(height);
        if (height) return;
        this.$emit('updateHeight', this.$el.offsetHeight, key);
    }
});
</script>