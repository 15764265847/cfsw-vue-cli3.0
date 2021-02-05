import { defineComponent } from 'vue';
import SeeLoading from './see-loading';

import style from './scroller.module.less';

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
		}
	},
	render() {
		return (
			<div class={ style.my_scroll }>
				<slot></slot>
				<see-loading
					pullUp={this.pullUp}
					pullUpstatus={this.pullUpstatus}
				>
					<div v-slot="empty">
						<slot name="empty"></slot>
					</div>
				</see-loading>
			</div>
		);
	},
	methods: {
		pullUp(): void {
			this.pullUp();
		}
	}
});
