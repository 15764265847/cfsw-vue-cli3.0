import { render, createVNode, VNode, defineComponent } from 'vue';
import { image_preview } from './image-preivew.module.less';

const ImagePreview = defineComponent({
	name: 'image-preview',
	props: {
		src: {
			type: String,
			required: true
		}
	},
	render() {
        return (
			<div class={ image_preview } onClick={ this.close }>
				<img onClick={ (e) => e.stopPropagation() } src={ this.src } />
			</div>
		)
	},
	methods: {
		close() {
			this.$emit('close');
		}
	}
})

export default (src: string) => {
	const vn: VNode = createVNode(ImagePreview, {
		src,
		onClose: function() {
			const el = vn.el as Node;
			if (!document.body.contains(el)) return;
			document.body.removeChild(el);
		}
	});
	render(vn, document.body);

	document.body.appendChild((vn as any).el);
};
