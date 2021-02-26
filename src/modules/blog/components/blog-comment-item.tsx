import { defineComponent, PropType } from 'vue';
import { config } from '@src/utils/config';
import { timeFormat } from '@src/utils/filter';

import style from './blog-comment-item.modules.less';

const blogCommentList = defineComponent({
	name: 'blog-comment-item',
	props: {
		index: {
			type: Number,
			default: 0
		},
		item: {
			type: Object as PropType<Loader.ListItem>,
			default: () => {}
		},
		agreeit: {
			type: Function,
			default: () => {}
		}
	},
	computed: {
		headImgUrl(): string {
			return `${config.baseURL}${this.item.headimg}`;
		},
		isClicked(): boolean {
			return this.item.isClickComment;
		},
		time(): string | undefined {
			return timeFormat(Number(this.item.creatAt));
		}
	},
	render() {
		const { headImgUrl, item, time } = this;
		return (
			<li>
				<div class="commenter-detail">
					<img src={headImgUrl} />
					<div class="comment-content">
						<div class="commentname">{item.nickname}</div>
						<div class="commentmsg">
							<div class="time">{time}</div>
							<div
								class="click"
								onClick={this.agreeit}
							>
								点赞
							</div>
							<div class="agreenum">{item.clicknum}</div>
						</div>
					</div>
				</div>
				<div class="commenttxt">{item.msg}</div>
			</li>
		);
	},
	methods: {
		agreeit() {
            // const { item, index } = this;
			// this.$emit('agreeit', item.commentId, index);
			this.agreeit();
		}
	}
});

export default blogCommentList;
