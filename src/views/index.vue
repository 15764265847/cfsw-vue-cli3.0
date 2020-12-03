<template>
	<div class="index">index页面</div>
	<div @click="to">去列表</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
	name: 'index',
	methods: {
		to() {
			this.$router.push({ name: 'blog-home' });
		}
	}
});
</script>
<style lang="less" scoped>
.index {
	font-size: 37.5px;
}
</style>
