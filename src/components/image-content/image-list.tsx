import { defineComponent, PropType } from 'vue';
import ImageContain from './image-contain';

import { image_list } from './image-list.module.less';

export default defineComponent({
	name: 'image-list',
	components: {
		ImageContain
	},
	props: {
		style: {
			type: Object as PropType<CSSRule>,
			default: () => {
				return {};
			}
		},
		list: {
			type: Array as PropType<string[]>,
			default: () => [],
			require: true
		}
	},
	render() {
		return (
			<div class={ image_list }>
				{this.list.map((item) => {
					return (
						<ImageContain
							key={item}
							style={this.style}
							src={item}
						/>
					);
				})}
			</div>
		);
	}
});
