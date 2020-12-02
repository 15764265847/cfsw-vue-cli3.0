<template>
	<div class="index" @click="add">index页面{{ count }}</div>
	<div @click="to">去列表</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
	name: 'index',
	computed: {
		count() {
			return this.$store.c.e.f;
		}
	},
	mounted() {
		console.log(this.$store);
	},
	methods: {
		add() {
			this.$store.addC();
		},
		to() {
			this.$router.push({ name: 'blog-home' });
		}
	}
});
</script>
<style lang="less" scoped>
.index {
	font-size: 20px;
}
</style>
