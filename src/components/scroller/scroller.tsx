import { defineComponent } from 'vue';
// import SeeLoading from './see-loading';

import style from './scroller.module.less';

const { my_scroll } = style;

export default defineComponent({
	name: 'scroller',
	// components: {
	// 	SeeLoading
	// },
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
				return {}
			}
		}
	},
	render() {
		const slots = {
			empty: <slot name="empty"></slot>
		};
		return (
			<div class={ my_scroll }>
				{ this.slots.list() }
				{/* <see-loading
					pullUp={this.pullUp}
					pullUpstatus={this.pullUpstatus}
				>
					<div v-slots={ slots }></div>
				</see-loading> */}
			</div>
		);
	}
});
