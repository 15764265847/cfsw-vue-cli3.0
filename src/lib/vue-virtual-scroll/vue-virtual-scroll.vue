<template>
    <div class="virtual-scroll">
        {{ scrollHeight }}
        <ul class="list" :style="{ height: `${scrollHeight}px` }">
            <VueVirtualScrollItem
                v-for="item in localList"
                :key="item.key"
                :item="item"
                @updateHeight="updateHeight"
            >
                <template v-slot>
                    <slot></slot>
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
    key: string | number; // 唯一key值
    height: number; // item高度
    contain: any;
}

interface Data {
    pools: PoolItem[];
    localList: LocalListItem[];
}

export default defineComponent({
    components: {
        VueVirtualScrollItem
    },
    props: {
        list: {
            type: Array,
            default: () => []
        },
        ownKey: {
            type: String,
            default: ''
        }
    },
    setup(props) {
        let localList: LocalListItem[] = reactive<LocalListItem[]>([]);
        watch(props.list, (val) => {
            console.log(val, 'nnnnnnnnnnnnnnnnnnnnnnnnn');
            localList = val.map((item: any, i) => {
                return {
                    key: props.ownKey ? String(item[props.ownKey]) : String(i),
                    height: 0,
                    contain: item
                }
            }); 
        });
        onMounted(() => {
            console.log(localList, 'jjjjjjjjjjjjjjjjjjjjj');
        })
        return { localList }
    },
    computed: {
        len(): number {
            return this.localList.length;
        },
        scrollHeight(): number {
            return this.localList.reduce((t, c: any) => t + c.height, 0);
        }
    },
    data() {
        return {
            pools: [], // 连接池
            localList: []
        }
    },
    mounted() {
        console.log(this.list, this.localList, this.ownKey);
    },
    methods: {
        updateHeight(h: number, key: string) {
            // for (let i = 0; i < this.len; i++) {
            //     if (this.localList[i].key == key) {
            //         this.localList[i].height = h;
            //         break;
            //     }
            // }
        }
    }
});
</script>

<style lang="less" scoped>
.virtual-scroll {
    height: 100%;
    overflow: auto;
}
</style>
