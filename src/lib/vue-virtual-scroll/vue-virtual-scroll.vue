<template>
    <div class="virtual-scroll" ref="virtualScroll">
        <slot name="header" />
        <ul class="list" :style="{ height: `${scrollHeight || cacheHeight}px` }">
            <VueVirtualScrollItem
                v-for="item in realList"
                :key="item.key"
                :item="item"
                :scrollNum="getItemScrollNum(item.index)"
                @updateHeight="updateHeight"
            >
                <template v-slot:default="slotProps">
                    <slot :item="slotProps.item1"></slot>
                </template>
            </VueVirtualScrollItem>
	    </ul>
        <slot name="footer" />
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import VueVirtualScrollItem from './vue-virtual-scroll-item.vue';


interface ScrollInfo {
    startIndex: number;
    virtualTop: number;
    cacheHeight: number;
    itemMap: Map<number, number>;
}

declare module '@vue/runtime-core' {
	export interface ComponentCustomProperties {
		$virtualScroll: {
            [key: string]: ScrollInfo;
        };
	}
}

interface PoolItem {
    height: number; // 高度
    id: number; // 创建编号
}

interface LocalListItem {
    index: number; // 索引
    key: string | number; // 唯一key值
    contain: any;
}

interface Data {
    startIndex: number;
    virtualTop: number;
    itemMap: Map<number, number>;
    scrollMap: Map<number, number>;
    lastOver: number;
    cacheHeight: number;
    timerId: number;
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
        // 缓冲
        buffer: {
            type: Number,
            default: 10
        },
        // 长度
        activeLen: {
            type: Number,
            default: 30
        },
        // 需要保存滚动状态的key
        reScrollKey: {
            type: String,
            default: ''
        }
    },
    computed: {
        len(): number {
            return this.list.length;
        },
        localList():LocalListItem[] {
            const { ownKey } = this;
            return this.list.map((v: any, i) => {
                return {
                    index: i,
                    key: ownKey ? v[ownKey] : i,
                    contain: v
                }
            });
        },
        endIndex(): number {
            return this.startIndex + this.activeLen;
        },
        scrollHeight(): number {
            let total = 0;
            this.itemMap.forEach(i => {
                total = total + i;
            })
            return total;
        },
        realList(): LocalListItem[] {
            return this.localList.slice(this.startIndex, this.endIndex);
        },
    },
    data(): Data {
        return {
            startIndex: 0,
            virtualTop: 0,
            itemMap: new Map(),
            scrollMap: new Map(),
            lastOver: 0,
            cacheHeight: 0,
            timerId: 0
        }
    },
    created() {
        if (!this.$root || !this.$root.$virtualScroll || this.reScrollKey) return;
        const { startIndex, cacheHeight, itemMap } = this.$root.$virtualScroll[this.reScrollKey];
        this.cacheHeight = cacheHeight;
        this.startIndex = startIndex;
        this.itemMap = itemMap;
    },
    async mounted() {
        await this.$nextTick();
        this.listen();
        if (!this.$root || !this.$root.$virtualScroll) return;
        const { virtualTop } = this.$root.$virtualScroll;
        this.$el.scrollTop = virtualTop;
    },
    methods: {
        updateHeight(h: number, i: number) {
            const r = this.getItemMap(i);
            if (r === h) return;
            this.itemMap.set(i, h);
        },
        getItemMap(i: number) {
            return this.itemMap.get(i) || 0;
        },
        getItemScrollNum(idx: number) {
            let total = 0;
            if (!idx) return total;
            for (let i = 0; i < idx; i++) {
                const h = this.itemMap.get(i);
                if (!h) break;
                total = total + h;
            }
            this.scrollMap.set(idx, total);
            return total;
        },
        listen() {
            const { scrollTop, offsetHeight, scrollHeight } = this.$el;
            const isDown = this.virtualTop < scrollTop;
            this.virtualTop = scrollTop;
            const overIndex = this.getOver(scrollTop);
            if (overIndex !== this.lastOver && overIndex) {
                // 计算滚动的条目
                const n = Math.ceil(Math.abs((overIndex - this.lastOver) / this.buffer));
                this.lastOver = overIndex;

                // 向下滚，保存其信息
                if (isDown) {
                    if (this.endIndex - overIndex <= this.buffer) {
                        this.startIndex = this.startIndex + this.buffer * n;
                    };
                    
                } else {
                    if (this.startIndex && overIndex - this.startIndex <= this.buffer) {
                        this.startIndex = this.startIndex - this.buffer * n;
                    }
                }
            }
            this.timerId = requestAnimationFrame(this.listen.bind(this));
        },
        // 计算触发的边界值
        getOver(scrollTop: number) {
            let i = this.startIndex;
            let scrollNum = this.scrollMap.get(i) || this.getItemScrollNum(i);

            while(i <= this.endIndex) {
                const r = this.itemMap.get(i);
                if (typeof r === 'undefined' || typeof scrollNum === 'undefined') break;
                if (scrollTop > scrollNum && scrollTop < scrollNum + r) {
                    break;
                }
                i ++;
                scrollNum = scrollNum + r;
            }
            // for (let i = this.startIndex; i <= this.endIndex; i++) {
            //     const r = this.itemMap.get(i);
            //     const scrollNum = this.scrollMap.get(i) || this.getItemScrollNum(i);
            //     if (typeof r === 'undefined' || typeof scrollNum === 'undefined') break;
            //     if (scrollTop > scrollNum && scrollTop < scrollNum + r) {
            //         index = i;
            //         break;
            //     }
            // }
            return i;
        },
    },
    beforeUnmount() {
        window.cancelAnimationFrame(this.timerId);
        if (!this.$root || !this.reScrollKey) return;
        if (!this.$root.$virtualScroll) {
            this.$root.$virtualScroll = {} as any;
        }
        this.$root.$virtualScroll[this.reScrollKey] = {
            startIndex: this.startIndex,
            virtualTop: this.virtualTop,
            cacheHeight: this.scrollHeight,
            itemMap: this.itemMap
        }
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
