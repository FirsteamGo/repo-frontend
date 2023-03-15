<script setup>
import { Search } from '@element-plus/icons-vue'
import { ref, computed, reactive, onMounted } from 'vue'


</script>

<script>
// import { ref, reactive, onMounted, computed, watch } from 'vue';
// import axios from 'axios';

export default {
    data() {
        const selectedRegion = ref(null);
        const selectedCity = ref(null);
        const regions = reactive(['North', 'West', 'South', 'East']);
        const ActType = reactive(['景點', '運動', '文化', '水上', '觀光', '活動'])
        const cities = {
            North: ['新北', '桃園', '新竹'],
            West: ['苗栗', '南投', '台中'],
            South: ['嘉義', '台南', '高雄'],
            East: ['宜蘭', '花蓮', '台東'],
        };
        const filteredCities = computed(() => {
            // return cities[regions[selectedRegion.value]];
            // return cities[regions[regions.indexOf(selectedRegion.value)]];
            return cities[selectedRegion.value];
        });

        function filterCities() {
            selectedCity.value = null;
        }

        return {
            selectedRegion,
            selectedCity,
            regions,
            cities,
            filteredCities,
            filterCities,
            ActType,
        };
    },
};
</script>

<template>
    <div class="common-layout">
        <el-container>
            <el-header>
                <span class="where">區域</span>
                <el-select v-model="selectedRegion" @change="filterCities" class="select m-2" placeholder="區域" size="large">
                    <el-option disabled value="">請選擇</el-option>
                    <div>
                        <el-option v-for="(region, index) in regions" :key="index" :value="region">

                            <router-link :to="`/pages/Yelu-pages/act/Sections/${region}`" class=" p-8">{{ region
                            }}</router-link>

                        </el-option>
                    </div>
                </el-select>

                <span>縣市</span>
                <el-select v-model="selectedCity" class="m-2" placeholder="縣市" size="large">
                    <el-option v-for="(city, index) in filteredCities" :key="index" :value="city">{{ city }}</el-option>
                </el-select>

                <span>活動種類</span>
                <el-select class="m-2" placeholder="活動種類" size="large">
                    <el-option v-for="ActTp in ActType" :key="ActTp" :value="ActTp" />{{ ActTp }}
                </el-select>

                <span class="Search">
                    關鍵字
                    <el-input v-model="input" size="large" class="w-10 m-2" placeholder="" />
                    <el-button type="success" :icon="Search">搜尋</el-button>
                </span>

            </el-header>
            <el-main>

            </el-main>
        </el-container>
    </div>
</template>
