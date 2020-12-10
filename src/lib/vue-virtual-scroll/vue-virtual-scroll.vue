<template>
    <div class="virtual-scroll" ref="virtualScroll" @scroll="onScroll">
        <ul class="list" :style="{ height: `${scrollHeight}px` }">
            <!-- <li ref="topObserve" data-type="topObserve" class="observe top-observe" :style="{ transform: `translateY(${topObserveY}px)`}"></li> -->
            <li ref="virtualTop"></li>
            <VueVirtualScrollItem
                v-for="item in realList"
                :key="item.key"
                :item="item"
                @updateHeight="updateHeight"
            >
                <template v-slot:default="slotProps">
                    <slot :item="slotProps.item1"></slot>
                </template>
            </VueVirtualScrollItem>
	    </ul>
        <!-- <div ref="bottomObserve" data-type="bottomObserve" class="observe"></div> -->
    </div>
</template>
<script lang="ts">
import { defineComponent, watch, reactive, onMounted } from 'vue';
import VueVirtualScrollItem from './vue-virtual-scroll-item.vue';

interface PoolItem {
    height: number; // 高度
    id: number; // 创建编号
}

interface LocalListItem {
    index: number; // 索引
    key: string | number; // 唯一key值
    height: number; // item高度
    active: boolean; // 
    scrollY: number; // 离顶部距离
    contain: any;
}

interface Data {
    localList: LocalListItem[];
    intersectionObserver: any;
    startIndex: number;
    virtualTop: number;
    isDown: boolean;
    timer: number;
}

export default defineComponent({
    components: {
        VueVirtualScrollItem
    },
    props: {
        // 列表
        list: {
            type: Array,
            default: () => []
        },
        // key值
        ownKey: {
            type: String,
            default: ''
        },
        // 长度
        activeLen: {
            type: Number,
            default: 20
        }
    },
    computed: {
        len(): number {
            return this.list.length;
        },
        scrollHeight(): number {
            if (!this.endIndex || !this.len || !this.localList.length) return 0;
            const end = this.localList[this.endIndex];
            // console.log(this.endIndex, this.localList, end, 'tttttttttttttttttttttttttt');
            return end.scrollY + end.height;
        },
        realList(): LocalListItem[] {
            return this.localList.filter((i) => i.active);
        },
        endIndex(): number {
            return this.startIndex + this.activeLen;
        },
        topObserveY(): number {
            if (!this.endIndex || !this.len || !this.localList.length || !this.localList[this.startIndex]) return 0;
            return this.localList[this.startIndex].scrollY - 1;
        }
    },
    watch: {
        len(val) {
            this.updateList();
        },
        startIndex() {
            this.updateList();
        },
        virtualTop(val, oldval) {
            if (val - oldval > 0) {
                this.isDown = true;
            } else {
                this.isDown = false;
            }
        }
    },
    data(): Data {
        return {
            localList: [],
            intersectionObserver: null,
            startIndex: 0,
            virtualTop: 0,
            isDown: true,
            timer: 0
        }
    },
    async mounted() {
        await this.$nextTick();
        // this.intersectionObserver = new IntersectionObserver(
		// 	(entries: IntersectionObserverEntry[]) => {
        //         entries.forEach(entrie => {
        //         //    this.updateList();
        //             this.visible(entrie);
        //         })
		// 	},
		// 	{
        //         root: (this as any).$refs.virtualScroll,
        //         rootMargin: '400px 0px',
        //         threshold: 0
        //     }
		// );
        // this.intersectionObserver.observe(this.$refs.bottomObserve);
        // this.intersectionObserver.observe(this.$refs.topObserve);
        this.updateList();
    },
    methods: {
        updateHeight(h: number, i: number) {
            this.localList[i].height = h;
            this.localList[i].scrollY = !i ? 0 : this.localList[i-1].height + this.localList[i - 1].scrollY;
        },
        visible(entrie: IntersectionObserverEntry) {
            if (!this.virtualTop) return;
            const { type } = (entrie as any).target.dataset;
            const { isIntersecting } = entrie;
            // 尾部触发
            if (type === 'bottomObserve') {
                if (isIntersecting && this.startIndex < 155) {
                    this.startIndex ++;
                }
            } 
            if (type === 'topObserve') {
                if (isIntersecting) {
                    this.startIndex --;
                }
            }
        },
        updateList() {
            this.localList = this.list.map((item: any, i) => {
                return {
                    index: i,
                    key: this.ownKey ? String(item[this.ownKey]) : String(i),
                    height: this.localList[i] ? this.localList[i].height : 0,
                    active: i >= this.startIndex && i <= this.endIndex ? true : false,
                    scrollY: this.localList[i] ? this.localList[i].scrollY : 0,
                    contain: item
                }
            });
        },
        onScroll(e: any) {
                const { scrollTop, offsetHeight, scrollHeight } = e.target;
                this.virtualTop = scrollTop;
                if (this.isDown) {
                    if (scrollTop + offsetHeight > scrollHeight - 1000 && this.startIndex < 155) {
                        this.startIndex ++;
                    }
                } else {
                    if (!this.startIndex) return;
                    const y = this.localList[this.startIndex].scrollY
                    if (scrollTop - y < 1500) {
                        this.startIndex --;
                        console.log(this.startIndex);
                    }
                }             
        }
    },
    beforeUnmount() {
        // this.intersectionObserver.unobserve(this.$refs.bottomObserve);
        // this.intersectionObserver.unobserve(this.$refs.topObserve);
    }
});
</script>

<style lang="less" scoped>
.wrap {
    height: 100%;
    overflow: hidden;
}
.virtual-scroll {
    height: 100%;
    overflow: auto;
    transform: translateZ(0);

    .top-observe {
       position: absolute;
       left: 0;
    }

    .observe {
        width: 100%;
        height: 2px;
    }

    .list {
        position: relative;
    }
}
</style>
