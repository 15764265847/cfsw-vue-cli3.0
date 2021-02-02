<template>
	<div class="chatroom">
		<LogoHeader />
		<vue-virtual-scroller :list="list" reScrollKey="blogHome">
			<template v-slot:default="slotProps">
				<BlogHomeListItem :item="slotProps.item" />
			</template>
			<template v-slot:footer>
				<SeeLoading
					@pullUp="pullUp"
					:pullUpstatus="pullUpStatus"
					:pullDownStatus="pullDownStatus"
				/>
			</template>
		</vue-virtual-scroller>
		<FooterContent />
	</div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import SeeLoading from '@src/components/scroller/see-loading.vue';
import BlogHomeListItem from '../components/blog-home-list-item.vue';
import FooterContent from '@src/components/footer/footer';
import LogoHeader from '@src/components/header/logo-header.vue';
import { VueVirtualScroller } from '@wefly/vue-virtual-scroller';
import '@wefly/vue-virtual-scroller/dist/vue-virtual-scroller.css';

import { BlogList } from '@src/modules/blog/store';

export default defineComponent({
	components: {
		LogoHeader,
		BlogHomeListItem,
		FooterContent,
		SeeLoading,
		'vue-virtual-scroller': VueVirtualScroller
	},
	computed: {
		blogList(): BlogList {
			return this.$store.blog.blogList;
		},
		pullDownStatus(): BlogList['pullDownStatus'] {
			return this.$store.blog.blogList.pullDownStatus;
		},
		pullUpStatus(): BlogList['pullUpStatus'] {
			return this.$store.blog.blogList.pullUpStatus;
		},
		list(): BlogList['list'] {
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
		},
		toDetail() {
			this.$router.push({ name: 'index' });
		}
	}
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
