<template>
	<div class="chatroom">
		<LogoHeader />
		<!-- <div class="wrapper" ref="blogHome" v-if="blogList">
			<scroller
				@pullUp="pullUp"
				:pullUpstatus="pullUpStatus"
				:pullDownStatus="pullDownStatus"
				v-rescroll="{ name: 'chatroom' }"
			>
				<ul>
					<BlogHomeList
						v-for="(item, key) in list"
						:key="key"
						:item="item"
					/>
				</ul>
			</scroller>
		</div> -->
		<vueVirtualScroll
			:list="[
				...list,
				...list,
				...list,
				...list,
				...list,
				...list,
				...list,
				...list,
				...list,
				...list,
				...list,
				...list,
				...list,
				...list,
				...list,
				...list
			]"
		>
			<template v-slot:default="slotProps">
				<BlogHomeList :item="slotProps.item" />
			</template>
		</vueVirtualScroll>
		<FooterContent />
	</div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import Scroller from '@src/components/scroller/scroller.vue';
import BlogHomeList from '../components/blog-home-list.vue';
import FooterContent from '@src/components/footer/footer.vue';
import LogoHeader from '@src/components/header/logo-header.vue';
import vueVirtualScroll from '@src/lib/vue-virtual-scroll/vue-virtual-scroll.vue';

export default defineComponent({
	components: {
		LogoHeader,
		// Scroller,
		BlogHomeList,
		FooterContent,
		vueVirtualScroll
	},
	computed: {
		blogList() {
			return this.$store.blog.blogList;
		},
		pullDownStatus() {
			return this.$store.blog.blogList.pullDownStatus;
		},
		pullUpStatus() {
			return this.$store.blog.blogList.pullUpStatus;
		},
		list() {
			return this.$store.blog.blogList.list;
		}
	},
	mounted() {
		if (this.list.length) return;
		this.pullUp();
	},
	methods: {
		async pullUp() {
			return this.blogList.pullUp();
		}
	}
	// public get articList() {
	// 	return this.$store.blog.blogList;
	// }
	// public get pullDownStatus() {
	// 	return this.articList.pullDownStatus;
	// }
	// public get pullUpStatus() {
	// 	return this.articList.pullUpStatus;
	// }
	// public get list() {
	// 	return this.articList.list;
	// }
	// public async pullUp() {
	// 	return this.articList.pullUp();
	// }
	// public async dropDown(): Promise<this> {
	// 	await this.articList.pullDown();
	// 	if (this.pullDownStatus !== 'error') {
	// 		(this as any).$toast('刷新成功!');
	// 	}
	// 	return this;
	// }
	// public async todetail(id: string) {
	// 	return this.$router.push({
	// 		name: 'blog-detail',
	// 		query: { id }
	// 	});
	// 	return (window.location.href = `detail?id=${id}`);
	// }
	// public beforeDestroy() {
	// 	if (this.$route.name === 'publish') {
	// 		this.articList.$clearData();
	// 	}
	// }
	// public async test() {
	// 	// const r = await this.$pupop.confirm({
	// 	// 	message: '确定删除此信息'
	// 	// });
	// 	// html2canvas(this.$refs.blogHome, {}).then((canvas) => {
	// 	// 	let imageUrl = canvas.toDataURL('image/png'); // 将canvas转成base64图片格式
	// 	// 	console.log(imageUrl, 'iiiiiiiiiiiiiiiiii');
	// 	// 	// this.canvasImageUrl = imageUrl;
	// 	// 	// this.isDom = false;
	// 	// });
	// 	// const r = await this.$pupop.alert({
	// 	// 	message: '点赞成功',
	// 	// 	btnText: '知道了',
	// 	// 	callback: () => {
	// 	// 		return this.$store.blog.blogList.getListBaseAjaxMethod();
	// 	// 	}
	// 	// });
	// 	// const r = await this.$pupop.loading({
	// 	// 	message: '加载中...',
	// 	// 	duration: 2000
	// 	// 	// callback: () => {
	// 	// 	// 	return this.$store.blog.blogList.getListBaseAjaxMethod();
	// 	// 	// }
	// 	// });
	// 	// this.$pupop.toast({
	// 	// 	message: '请求成功',
	// 	// 	icon: 'success',
	// 	// 	duration: 10000
	// 	// });
	// 	// this.$pupop.toast('请求成功', 2000);
	// }
});
</script>

<style lang="less" scoped>
.chatroom {
	height: 100%;

	.wrapper {
		position: relative;
		min-width: 60%;
		height: 86%;
		overflow-y: hidden;
		background-color: #f7f7f7;
	}
}
</style>
