<script>
import ActHot from "./ActHot.vue";
import ActNorth from "./ActNorth.vue";
import ActWest from "./ActWest.vue";
import ActSouth from "./ActSouth.vue";
import ActEast from "./ActEast.vue";
import Actcarousel from "./Actcarousel.vue";

export default {
    components: {
        Actcarousel,
        ActHot,
        ActNorth,
        ActWest,
        ActSouth,
        ActEast,
    },
    data() {
        return {
            currentTab: 'ActHot',
            tabs: ['Actcarousel', 'ActHot', 'ActNorth', 'ActWest', 'ActSouth', 'ActEast']
        }
    }
}
</script>

<template>
    <div class="demo">
        <el-button v-for=" tab in tabs" :key="tab" type="primary" class="butonleft" @click="currentTab = tab">
            {{ tab }}
        </el-button>
        <component :is="currentTab" class="tab"></component>
    </div>
</template>

<style>
.demo {
    font-family: sans-serif;

    margin-bottom: 10px;
    overflow-x: auto;
}

.butonleft {
    margin-left: 20px;
    margin-bottom: 10px;
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