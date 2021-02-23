import { defineComponent } from 'vue';
import SeeLoading from './see-loading';

import { my_scroll } from './scroller.module.less';

export default defineComponent({
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
		},
		slots: {
			type: Object,
			default: () => {
				return {};
			}
		}
	},
	render() {
		// const slots = {
		// 	empty: <slot name="empty"></slot>
		// };
		return (
			<div class={ my_scroll }>
				{ this.slots.default() }
				<see-loading
					pullUp={this.pullUp}
					pullUpstatus={this.pullUpstatus}
				>
					{/* <div v-slots={ slots }></div> */}
				</see-loading>
				<slot name="footer" />
			</div>
		);
	}
});
