<script lang="ts" setup>
import { ref, computed, reactive, onMounted } from 'vue'
onMounted(() => {
    changeList()
})


const cityNorth = [
    {
        label: '台北',
        value: '1'
    },
    {
        label: '桃園',
        value: '2',
    },
    {
        label: '新竹',
        value: '3',
    }]
const cityWest = [
    {
        label: '台中',
        value: '1'
    },
    {
        value: '2',
        label: '彰化',
    },
    {
        value: '3',
        label: '嘉義',
    }]

function changeList() {
    if (changeOP.value == 1) {
        cityList.splice(0, cityNorth.length, ...cityNorth)
        console.log(cityList);

    } else if (changeOP.value == 2) {
        cityList.splice(0, cityWest.length, ...cityWest)
        console.log(cityList);
    }

}

function changecity(value) {
    if (value == '1') {
        changeOP.value = 1
        console.log(changeOP.value);
        changeList()

    } else if (value == '2') {
        changeOP.value = 2
        changeList()
    }
    console.log('123');

}
const options = [
    {
        value: '1',
        label: '北部',
    },
    {
        value: '2',
        label: '中部',
    },
    {
        value: '3',
        label: '南部',
    },
    {
        value: '4',
        label: '東部',
    },
]

const options1 = [
    {
        value: '1',
        label: '台北',
    },
    {
        value: '2',
        label: '桃園',
    },
    {
        value: '3',
        label: '新竹',
    },
]

const options2 = [
    {
        value: '1',
        label: '台中',
    },
    {
        value: '2',
        label: '彰化',
    },
    {
        value: '3',
        label: '雲林',
    },
]
const cityList = reactive(cityNorth)
const value = ref('')
const value1 = ref('')
const changeOP = ref(1)

</script>

<template>
    <div class="common-layout">
        <el-container>
            <el-header>
                <span>地區</span>
                <el-select v-model="value" @change="changecity(value)" class="m-2" placeholder="Select" size="large">
                    <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
                </el-select>
                <span>縣市</span>
                <el-select v-model="value1" class="m-2" placeholder="Select" size="large">
                    <el-option v-for="item in cityList" :key="item.value" :label="item.label" :value="item.value" />
                </el-select>
            </el-header>
            <el-main>

            </el-main>
        </el-container>
    </div>
</template>
