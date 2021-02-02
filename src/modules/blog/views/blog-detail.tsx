import { defineComponent } from 'vue';
// import GeneralHeader from '@src/components/header/general-header.vue';
// import BlogDetailComment from '../components/blog-detail-comment.vue';
// import BlogDetailFooter from '../components/blog-detail-footer.vue';

import { getQueryParams } from '@src/utils/publics';
import { config } from '@src/utils/config';
import { formatDateToStr } from '@src/utils/filter';
import {
	previewImage,
	prefetchData,
	isNativeFuncExist
} from '@src/utils/native-methods';

import { BlogDetail } from '../store/index';

import style from './blog-detail.module.less';

console.log(style, 'xxxxxxxxxxxxxxxxxxxxxxx');

const {
	blogLoading,
	loadingTitle,
	loadingAuthor,
	loadingHeadimg,
	loadingName,
	loadingtime,
    loadingcontent,
    detailContain,
    detailContent,
    contentTop,
    author,
    authorHeadimg,
    name,
    time,
    artic,
    blogTitle
} = style;

export default defineComponent({
	name: 'blog-detail',
	components: {
		// GeneralHeader,
		// BlogDetailComment,
		// BlogDetailFooter
	},
	computed: {
		id(): number {
			return Number(getQueryParams(this.$route.query.id));
        },
        blogDetail(): BlogDetail {
            return this.$store.blog.blogDetail;
        },
		detailData(): Detail.ArticDetail.Data | null {
			return this.blogDetail.data;
		},
		headImgUrl(): string {
			if (!this.detailData) return '';
			return `${config.baseURL}${this.detailData.headimg}`;
		}
    },
    beforeMount() {
        // 获取文章详情
        const { id = 0 } = this;
        this.blogDetail.$assignParams({
            id
        })
        this.blogDetail.loadData();
    },
	methods: {
		onOperate(e: any) {
			if (e.target.tagName.toLowerCase() !== 'img') return;
			previewImage([e.target.src]);
		}
	},
	render() {
		const { detailData, headImgUrl, id } = this;
		let content = (
			<div class={ blogLoading }>
				<div class={ loadingTitle }></div>
				<div class={ loadingAuthor }>
					<div class={ loadingHeadimg }></div>
					<div class={ loadingName }></div>
					<div class={ loadingtime }></div>
				</div>
				<div class={ loadingcontent }></div>
			</div>
		);
		if (detailData) {
			const { nickname, creatAt, msg, title } = detailData;
			content = (
				<div class={ detailContent }>
					<div class={ contentTop }>
						<h1 class={ blogTitle }>{title}</h1>
						<div class={ author }>
							<div class={ authorHeadimg }>
								<img src={headImgUrl} />
							</div>
							<div class={ name }>{nickname}</div>
							<div class={ time }>
								{formatDateToStr(
									Number(creatAt),
									'yyyy-MM-dd hh:mm'
								)}
							</div>
						</div>
						<div
							class={ artic}
							v-html={msg}
							onClick={this.onOperate}
						></div>
					</div>
					{/* <BlogDetailComment />
					<BlogDetailFooter /> */}
				</div>
			);
		}
		return (
			<div class={style.detail} v-rescroll={{ name: `detail${id}` }}>
				{/* <GeneralHeader
					header-title="微博正文"
					back-path-name="blog-home"
				/> */}
				<div class={ detailContain }>{content}</div>
			</div>
		);
	}
});
