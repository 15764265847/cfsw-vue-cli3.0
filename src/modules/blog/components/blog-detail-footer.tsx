import { defineComponent } from 'vue';
import { getQueryParams } from '@src/services/publics';
import { GetUserComment, BlogDetail } from '../store';
import {
	toLogin,
	toShare,
	comment,
	updateNativeClickStatus
} from '@src/utils/native-methods';

import style from './blog-detail-footer.module.less';

const { footer, operate, inputContain, operateArtic, oprateClick, oprated, agreeauNum, operateComment } = style;

export default defineComponent({
	name: 'blog-detail-footer',
	props: {
		hidshow: {
			type: Boolean,
			default: false
		},
		commentmsg: {
			type: String,
			default: ''
		}
	},
	computed: {
		getUserComment(): GetUserComment {
			return this.$store.blog.getUserComment;
		},
		id(): string | null {
			return getQueryParams(this.$route.query.id);
		},
		articDetail(): BlogDetail {
			return this.$store.blog.blogDetail;
		},
		detailData(): Detail.ArticDetail.Data | null {
			return this.articDetail.data;
		}
	},
	render() {
		const { detailData } = this;
		if (!detailData) return '';
		return (
			<div class={ footer }>
				<div class={ operate }>
					<div class={ inputContain } onClick={this.commentIt}>
						说点什么...
					</div>
					<div
						class={[ operateArtic, oprateClick ]}
						onClick={this.agreeAuthors}
					>
						<span class={ agreeauNum }>{detailData.clicknum}</span>
					</div>
					<div class={ operateArtic } onClick={this.toButtom}>
						<span class={ agreeauNum }>{detailData.commentnum}</span>
					</div>
					<img
						class={ operateComment }
						src="../images/share.svg"
						onClick={this.toShare}
					/>
				</div>
			</div>
		);
	},
	methods: {
		toButtom() {
			const detailDom = (this as any).$refs.detail;
			detailDom.scrollTop = detailDom.scrollHeight;
		},
		async commentIt() {
			if (!this.id) return this;
			const r = await comment();
			if (Number(r.code) !== 0 || !r.data) return;
			let params = {
				articId: this.id,
				msg: r.data
			};
			const r1 = await this.getUserComment.api.userComment(params);
			if (r1.code !== 0) return;
			this.$store.blog.getUserComment.pullDown();
			// this.getUserComment.$updateCommentList({
			// 	clicknum: 0,
			// 	commentId: this.getUserComment.commitId + 1,
			// 	creatAt: Date.now(),
			// 	isClickComment: false,
			// 	msg: r.data,
			// 	uid: 3
			// });
		},
		async agreeAuthors(): Promise<void> {
			const { id } = this;
			if (!id) return;
			const r = await this.articDetail.api.agreeAuthor({
				id
			});
			if (r.code !== 0) return;
			this.articDetail.$updateClickStatus();
			// 通知原生更新点赞状态
			updateNativeClickStatus({
				id: +id
			});
			return;
		},
		toShare() {
			toShare();
		}
	}
});
