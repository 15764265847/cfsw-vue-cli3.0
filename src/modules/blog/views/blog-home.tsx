import { defineComponent } from 'vue';
import BlogHomeListItem from '../components/blog-home-list-item.vue';
import FooterContent from '@src/components/footer/footer';
import LogoHeader from '@src/components/header/logo-header.vue';
import SeeLoading from '@src/components/scroller/see-loading';
import style from './blog-home.module.css';
import { VueVirtualScroller } from '@wefly/vue-virtual-scroller';
import '@wefly/vue-virtual-scroller/dist/style.css';

import { BlogList } from '../store';

const { chatroom } = style;

const blogHome = defineComponent({
	name: 'blog-home',
	components: {
		LogoHeader,
		BlogHomeListItem,
		FooterContent,
		VueVirtualScroller,
		SeeLoading
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
	render() {
		const slots = {
			default: (slotProps: { item: Loader.ListItem }) => (
				<BlogHomeListItem item={slotProps.item} />
			),
			footer: () => (
				<SeeLoading
					pullUp={this.pullUp}
					pullUpstatus={this.pullUpStatus}
				/>
			)
		};
		return (
			<div class={chatroom}>
				<LogoHeader />
				<vue-virtual-scroller
					list={this.list}
					reScrollKey="blogHome"
					v-slots={slots}
				/>
				<FooterContent />
			</div>
		);
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

export default blogHome;
