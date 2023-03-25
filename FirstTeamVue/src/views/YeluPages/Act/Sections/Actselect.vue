<script setup>
import { Search } from "@element-plus/icons-vue";
import { ref, computed, reactive, onMounted } from "vue";
</script>

<script>
export default {
  data() {
    const selectedRegion = ref(null);
    const selectedCity = ref(null);
    const regions = reactive(["North", "West", "South", "East"]);
    const Areas = reactive(["北部", "中部", "南部", "東部"]);
    const cities = {
      North: ["NewTp", "Taoyuan", "Hsinchu"],
      West: ["Miaoli", "Nantou", "Taichung"],
      South: ["Chiayi", "Tainan", "Kaohsiung"],
      East: ["Yilan", "Hualien", "Taitung"],
    };
    const cities_CH = {
      North: ["新北市", "桃園市", "新竹縣"],
      West: ["苗栗縣", "南投縣", "台中市"],
      South: ["嘉義縣", "台南市", "高雄市"],
      East: ["宜蘭縣", "花蓮縣", "台東縣"],
    };

    const filteredCities = computed(() => {
      // return cities[regions[selectedRegion.value]];
      // return cities[regions[regions.indexOf(selectedRegion.value)]];
      const index = Areas.findIndex((item) => item === selectedRegion.value)
      return cities_CH[regions[index]];
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
      Areas,
    };
  },
};
</script>

<template>
  <div style="display: flex; justify-content: flex-end">
    <div>
      <span>區域</span>
      <el-select v-model="selectedRegion" @change="filterCities" class="select m-2" placeholder="區域" size="large">
        <el-option disabled value="">請選擇</el-option>
        <div>
          <el-option v-for="(region, index) in regions" :key="index" :value="Areas[index]">
            <router-link :to="`/pages/Yelu-pages/act/ActAllAera/${region}`" class=" p-8">{{ Areas[index]
            }}</router-link>
          </el-option>
        </div>
      </el-select>
    </div>

    <div>
      <span>縣市</span>
      <el-select v-model="selectedCity" class="m-2" placeholder="縣市" size="large">
        <el-option v-for="(city, index) in filteredCities" :key="index" :value="city">
          <router-link :to="`/pages/Yelu-pages/act/ActAllCity/${city}`" class=" p-8">{{ city
          }}</router-link>
        </el-option>
      </el-select>
    </div>

    <div>
      <span class="Search">關鍵字</span>
      <el-input v-model="input" size="large" class="w-40 m-2" s placeholder="" />
      <el-button type="success" :icon="Search">搜尋</el-button>
    </div>
  </div>
</template>
