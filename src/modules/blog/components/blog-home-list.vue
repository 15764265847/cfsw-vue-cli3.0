<template>
	<div class="list-item" @click="toDetail">
		<div class="list-content">
			<div class="artic-content">
				<div class="user-img">
					<img :src="headImgUrl" />
				</div>
				<div class="author">
					<div class="title">{{ item.title }}</div>
					<div class="detail">
						<span class="author-name">{{
							item.nickname || '大飞哥'
						}}</span>
						<span class="publish-time">{{
							time(item.creatAt)
						}}</span>
					</div>
				</div>
			</div>
			<div class="artic-msg-content" v-html="articInfo"></div>
			<div class="oparate-num">
				<div>
					<!-- <svg-icon name="view" /> -->
					<span class="num">{{ item.viewnum }}</span>
				</div>
				<div>
					<!-- <svg-icon name="comment" /> -->
					<span class="num">{{ item.commentnum }}</span>
				</div>
				<div>
					<!-- <svg-icon name="click" /> -->
					<span class="num">{{ item.clicknum }}</span>
				</div>
			</div>
		</div>
	</div>
</template>
<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { timeFormat } from '@src/utils/filter';

export default defineComponent({
	props: {
		item: {
			type: Object as PropType<Loader.ListItem>,
			default: () => {
				return;
			}
		}
	},
	computed: {
		baseApi() {
			return '';
		},
		headImgUrl(): string {
			return `${this.item.headimg}`;
		},
		articInfo(): string {
			const { msg } = this.item;
			if (msg.length > 80) return `${msg.slice(0, 79)}...`;
			return msg.slice(0, 80);
		}
	},
	methods: {
		time(creatAt: string) {
			return timeFormat(Number(creatAt));
		},
		toDetail() {
			this.$router.push({ name: 'index' });
		}
	}
});
</script>
<style lang="less" scoped>
.list-item {
	width: 100%;
	padding-top: 15px;
	.list-content {
		width: 100%;
		background-color: #fff;
		.artic-content {
			width: 93%;
			margin: 0 10px 0 15px;
			display: flex;
			justify-content: center;
			align-items: center;
			text-align: left;
			padding: 5px 0 10px 0;
			.user-img {
				flex-grow: 0;
				padding-top: 10px;
				img {
					width: 50px;
					height: 50px;
					border-radius: 50px;
				}
			}
			.author {
				flex-grow: 1;
				font-size: 14px;
				padding-top: 10px;
				margin: 0 10px;
				.title {
					margin-bottom: 5px;
					font-size: 16px;
					font-weight: 500;
					max-width: 100%;
					word-break: break-word;
				}
				.detail {
					color: #adadad;
					display: flex;
					justify-content: flex-start;
					align-items: flex-end;
					.author-name {
						width: auto;
						font-size: 12px;
						overflow: hidden;
						text-overflow: ellipsis;
						white-space: nowrap;
					}
					.publish-time {
						width: auto;
						margin-left: 10px;
						font-size: 10px;
						white-space: nowrap;
					}
				}
			}
		}
		.artic-msg-content {
			word-break: break-word;
			margin: 0 15px;
			font-size: 14px;
			line-height: 20px !important;
		}
		.oparate-num {
			display: flex;
			justify-content: center;
			align-items: center;
			width: 100%;
			margin-top: 8px;
			padding-bottom: 4px;
			font-size: 12px;
			color: #adadad;

			div {
				flex-grow: 1;
				text-align: center;

				.icon-symbol {
					height: 0.4rem;
					width: 0.4rem;
					margin-right: 2px;
					fill: #adadad;
				}
				.num {
					position: relative;
					top: -2px;
				}
			}
		}
	}
}
</style>
