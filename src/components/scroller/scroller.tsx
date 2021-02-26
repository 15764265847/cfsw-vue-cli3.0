import { defineComponent } from 'vue';
import SeeLoading from './see-loading';

import style from './scroller.module.less';

const { my_scroll } = style;

const scroller = defineComponent({
	name: 'scroller',
	components: {
		SeeLoading
	},
	props: {
		pullUpstatus: {
			type: String,
			default: 'unrequest'
		},
		pullDownStatus: {
			type: String,
			default: 'unrequest'
		},
		list: {
			type: Array,
			default: () => []
		},
		pullUp: {
			type: Function,
			default: () => {
				return;
			}
		}
	},
	render() {
		const slots = {
			empty: () => <slot name="empty"></slot>
		};
		return (
			<div class={ my_scroll }>
				<slot />
				<see-loading
					pullUp={this.pullUp}
					pullUpstatus={this.pullUpstatus}
					v-slots={ slots }
				/>
			</div>
		);
	}
});

export default scroller;
