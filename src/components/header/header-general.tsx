import { defineComponent } from 'vue';
import { webviewBack, isNativeFuncExist } from '@src/utils/native-methods';

import style from './header-general.module.less';

const { empty, header, right } = style;

const headerGeneral = defineComponent({
	name: 'header-general',
	props: {
		headerTitle: {
			type: String,
			default: ''
		},
		backPathName: {
			type: String,
			default: ''
		}
    },
    computed: {
        hasBtn(): boolean {
            return !!this.$slots.btn;
        }
    },
	render() {
		return (
			<div>
				<header class={header}>
					<router-link to={'/'} event={[]} onClick={this.back}>
						返回
					</router-link>
					<span class="title">{this.headerTitle}</span>
                    {
                        !this.hasBtn ? <span class={right}></span> : <slot name="btn" /> 
                    }
				</header>
				<div class={empty}></div>
			</div>
		);
	},
	methods: {
		back() {
			if (isNativeFuncExist()) return webviewBack();
			if (!this.backPathName) return this.$router.go(-1);
			return this.$router.push({ name: this.backPathName });
		}
	}
});

export default headerGeneral;
