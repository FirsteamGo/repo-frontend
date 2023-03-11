<script>
import 熱門精選 from "./ActHot.vue";
import 北部 from "./ActNorth.vue";
import 中部 from "./ActWest.vue";
import 南部 from "./ActSouth.vue";
import 東部 from "./ActEast.vue";


export default {
    components: {
        熱門精選,
        北部,
        中部,
        南部,
        東部,
    },
    data() {
        return {
            currentTab: '熱門精選',
            tabs: ['熱門精選', '北部', '中部', '南部', '東部']
        }
    }
}
</script>

<template>
    <div class="demo">
        <el-button v-for=" tab in tabs" :key="tab" size="large" type="info" class="butonleft" @click="currentTab = tab">
            {{ tab }}
        </el-button>
        <component :is="currentTab" class=""></component>
    </div>
</template>

<style>
.demo {
    margin-bottom: 10px;
    overflow-x: auto;
}

.butonleft {
    margin-left: 700px;
    margin-bottom: 10px;
}

.bkc {
    text-align: center;
    color: gray;
}

/* .tab-button {
    padding: 6px 10px;
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
    border: 1px solid #ccc;
    cursor: pointer;
    background: #f0f0f0;
    margin-bottom: -1px;
    margin-right: -1px;
}

.tab-button:hover {
    background: #e0e0e0;
}

.tab-button.active {
    background: #e0e0e0;
}

.tab {
    border: 1px solid #ccc;
    padding: 10px;
} */
</style>