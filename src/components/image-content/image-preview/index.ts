import {
	createApp,
	defineComponent,
	ConcreteComponent,
	createVNode,
	createRenderer,
    h,
    createCommentVNode
} from 'vue';
import ImagePreview from './image-preview.vue';

export default () => {
	// const dom = document.createElement('div');
	// if (document.contains(dom)) return;
	// document.body.append(dom);
	// // createApp(ImagePreview).mount(dom);
	console.log(createCommentVNode(ImagePreview));
};
