import { defineComponent, PropType } from 'vue';
import imagePreview from './image-preview';

import { image_contain } from './image-contain.module.less';

const imageContain = defineComponent({
    name: 'image-contain',
    props: {
		style: {
			type: Object as PropType<CSSRule>,
			default: () => {
				return {};
			}
		},
		src: {
			type: String,
			required: true
		}
	},
	computed: {
		realStyle(): any {
			return { ...this.style, backgroundImage: `url(${this.src})` };
		}
	},
    render() {
        return <div class={ image_contain } style={ this.realStyle } onClick={ this.preview }></div>
    },
	methods: {
		preview(e: any) {
            e.stopPropagation();
			console.log('预览', e, e.target.offsetWidth);
			imagePreview(this.src);
		}
	}
})

export default imageContain;
