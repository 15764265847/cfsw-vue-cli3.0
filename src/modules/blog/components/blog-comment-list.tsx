import { defineComponent } from 'vue';
import BlogCommentItem from './blog-comment-item';
import Scroller from '@src/components/scroller';

import { GetUserComment } from '../store';
import { getQueryParams } from '@src/services/publics';

import style from './blog-comment-list.module.less';

const { comment, commentTitle, noMessage, tips, moreComment, ulBottom } = style;

export default defineComponent({
	name: 'blog-comment-list',
	components: {
		BlogCommentItem,
		Scroller
	},
	computed: {
		id(): string | null {
			const { id = '' } = this.$route.query;
			return getQueryParams(id);
		},
		getUserComment(): GetUserComment {
			return this.$store.blog.getUserComment;
		},
		list(): Loader.ListItem[] {
			return this.getUserComment.list;
		},
		pullDownStatus(): Loader.RequestStatus {
			return this.getUserComment.pullDownStatus;
		},
		pullUpStatus(): Loader.RequestStatus {
			return this.getUserComment.pullUpStatus;
		},
		moreComment() {
			return false;
		}
	},
	render() {
		return (
			<div class={comment}>
				<div class={commentTitle}>评论区</div>
				<scroller pullUp={this.pullUp} pullUpstatus={this.pullUpStatus}>
					<ul>
						{this.list.map((item, index) => {
							return (
								<BlogCommentItem
									key={item.commentId}
									index={index}
									item={item}
									agreeit={this.agreeit.bind(this)}
								/>
							);
						})}
					</ul>
					{/* <div slot="empty" class={noMessage}>
						<img src="../images/no-data.svg" />
						<div class="tips">客官，快来评论吧!</div>
					</div> */}
				</scroller>
				{this.moreComment ? (
					<div class={moreComment} onClick={this.toComment}>
						查看更多评论
					</div>
				) : (
					''
				)}
				<div class={ulBottom} />
			</div>
		);
	},
	mounted() {
		this.getUserComment.$assignParams({ id: this.id });
	},
	methods: {
		agreeit() {
            console.log(this, 'xxxxxxxxxxxxxxxx');
        },
		toComment() {
			this.$router.push({
				name: 'comment',
				query: {
					id: this.id
				}
			});
		},
		pullUp() {
			return this.getUserComment.pullUp();
		}
	}
});
