import { defineComponent } from 'vue';
import BlogHomeListItem from '../components/blog-home-list-item.vue';
import FooterContent from '@src/components/footer/footer';
import LogoHeader from '@src/components/header/logo-header.vue';
import Scroller from '@src/components/scroller/scroller';
import style from './blog-home.module.css';

import { BlogList } from '../store';

const { chatroom } = style;

export default defineComponent({
	name: 'blog-home',
	components: {
		LogoHeader,
		BlogHomeListItem,
		FooterContent,
		Scroller
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
			list: () => {
				return this.list.map(item => <BlogHomeListItem item={ item } />)
			}
		};
		return (
			<div class={chatroom}>
				<LogoHeader />
				<Scroller pullUpstatus={ this.pullUpStatus } pullUp={ this.pullUp } slots={ slots } />
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
