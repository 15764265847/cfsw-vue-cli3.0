import { defineComponent, PropType } from 'vue';
import inview from './inview';
import loadingIcon from './loading.gif';

import style from './see-loading.module.less';

const { seeLoading, done, error, loading, empty, loadImg } = style;

export default defineComponent({
	name: 'see-loading',
	props: {
		pullUpstatus: {
			type: String as PropType<Loader.RequestStatus>,
			default: 'unrequest'
		},
		pullUp: {
			type: Function,
			default: () => {
				return;
			}
		}
	},
	data() {
		return {
			timer: 0
		};
	},
	render() {
		const { pullUpstatus, $slots } = this;
		const status: Exclude<Loader.RequestStatus, 'unrequest' | 'success'> = [
			'unrequest',
			'success'
		].includes(pullUpstatus)
			? 'requesting'
			: (pullUpstatus as any);
		const content = {
			requesting: (
				<div class={loading}>
					<img class={loadImg} src={ loadingIcon } alt="加载中..." />
				</div>
			),
			done: <div class={done}>无更多数据</div>,
			error: (
				<div class={error} onClick={this.reload}>
					加载失败，请点击重新加载
				</div>
			),
			empty: (
				<div>
					{$slots.empty ? (
						<slot name="empty" />
					) : (
						<div class={empty}>暂无数据</div>
					)}
				</div>
			)
		};
		return <div class={seeLoading}>{content[status]}</div>;
	},
	async mounted() {
		await this.onSee();
		this.timer = setInterval(this.onSee, 500);
	},
	methods: {
		async reload() {
			await this.pullUp();
			this.timer = setInterval(this.onSee, 500);
		},
		onSee() {
			const isSee = inview(this.$el, {});
			if (
				isSee &&
				this.pullUpstatus !== 'requesting' &&
				this.pullUpstatus !== 'done' &&
				this.pullUpstatus !== 'error' &&
				this.pullUpstatus !== 'empty'
			) {
				this.pullUp();
			}
			if (this.pullUpstatus === 'error') {
				clearInterval(this.timer);
			}
		}
	},
	beforeUnmount() {
		clearInterval(this.timer);
	}
});
