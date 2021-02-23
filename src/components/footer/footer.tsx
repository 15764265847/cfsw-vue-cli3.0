import { defineComponent } from 'vue';
import style from './footer.module.less';

interface RouterList {
	name: string;
	toPathName: string;
}

export default defineComponent({
	setup() {
		const list: Array<RouterList> = [
			{
				name: 'home',
				toPathName: 'blog-home'
			},
			{
				name: 'publish',
				toPathName: 'blog-home'
			},
			{
				name: 'center',
				toPathName: 'blog-home'
			}
		];
		return { list };
	},
	computed: {
		nowRouter() {
			return this.$route.name;
		}
	},
	render() {
		const { list, nowRouter } = this;
		return (
			<footer class={ style['footer-contain'] }>
				<div class={style.footer}>
					{list.map((item) => {
						const { name, toPathName } = item;
						return (
							<router-link
								key={name}
								to={{ name: toPathName }}
								class={
									nowRouter !== toPathName ? style.leave : ''
								}
							>
								{item.name}
							</router-link>
						);
					})}
				</div>
			</footer>
		);
	}
});
