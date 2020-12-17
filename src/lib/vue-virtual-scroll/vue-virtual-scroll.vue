<template>
    <div class="virtual-scroll" ref="virtualScroll" @scroll="onScroll">
        <ul class="list" :style="{ height: `${scrollHeight}px` }">
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
    contain: any;
}

interface Data {
    startIndex: number;
    virtualTop: number;
    itemMap: Map<number, number>;
    lastOver: number;
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
        }
    },
    computed: {
        len(): number {
            return this.list.length;
        },
        localList():LocalListItem[] {
            return this.list.map((v, i) => {
                return {
                    index: i,
                    key: i,
                    contain: v
                }
            });
        },
        endIndex(): number {
            return this.startIndex + this.activeLen;
        },
        // 先初始高度，再矫正
        scrollHeight(): number {
            let total = 0;
            if (this.startIndex === this.len) {
                this.itemMap.forEach(i => {
                    total = total + i;
                })
            }
            const r = this.itemMap.get(0) || 0;
            const rt = r * this.len;
            if (total < rt) {
                total = rt;
            }
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
            lastOver: 0
        }
    },
    async mounted() {
        await this.$nextTick();
        // this.updateList();
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
