<template>
	<div class="image-preview">1111</div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
	props: {
		src: {
			type: String,
			require: true
		}
	}
});
</script>
<style lang="less" scoped>
.image-preview {
	position: fixed;
	top: 100%;
	left: 100%;
	right: 100%;
	bottom: 100%;
	z-index: 9999;
	background-color: red;
}
</style>
