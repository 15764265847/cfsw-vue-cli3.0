<template>
    <div class="virtual-scroll" ref="virtualScroll" @scroll="onScroll">
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
    lastOver: number;
    cacheHeight: number;
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
            lastOver: 0,
            cacheHeight: 0
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
        if (!this.$root || !this.$root.$virtualScroll) return;
        const { virtualTop } = this.$root.$virtualScroll;
        await this.$nextTick();
        this.$el.scrollTop = virtualTop;
    },
    methods: {
        updateHeight(h: number, i: number) {
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
            return total;
        },
        onScroll(e: any) {
            const { scrollTop, offsetHeight, scrollHeight } = e.target;
            const isDown = this.virtualTop < scrollTop;
            this.virtualTop = scrollTop;
            const overIndex = this.getOver(scrollTop);
            if (overIndex == this.lastOver) return;
            this.lastOver = overIndex;

            if (isDown) {
                if (this.endIndex - overIndex > this.buffer) return;
                this.startIndex = this.startIndex + this.buffer;
            } else {
                if (!this.startIndex) return;
                if (overIndex - this.startIndex > this.buffer) return;
                this.startIndex = this.startIndex - this.buffer;
            }             
        },
        // 计算触发的边界值
        getOver(scrollTop: number) {
            let index = 0;
            for (let i = this.startIndex; i <= this.endIndex; i++) {
                const r = this.itemMap.get(i);
                const scrollNum = this.getItemScrollNum(i);
                if (!r) break;
                if (scrollTop > scrollNum && scrollTop < scrollNum + r) {
                    index = i;
                    break;
                }
            }
            return index;
        },
    },
    beforeUnmount() {
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
