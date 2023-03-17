<template>
  <div id="app">
    <label>露營區域</label>
    <select v-model="selectedRegion"  @change="filterCities">
      <option disabled value="">請選擇</option>
      <option v-for="(region, index) in regions" :key="index" :value="index">{{ region }}</option>
    </select>
    <p></p>

    <label>露營縣市</label>
    <select v-model="selectedCity">
      <option disabled value="">請選擇</option>
      <option v-for="(city, index) in filteredCities" :key="index" :value="city">{{ city }}</option>
    </select>
    <step1/>
  </div>
</template>


<script setup>
import step1 from '@/views/YeluPages/Self/Sections/step1.vue';

</script>

<script>
import { ref, reactive, onMounted, computed, watch } from 'vue';
import axios from 'axios';


export default {
  data() {
    const selectedRegion = ref(null);
    const selectedCity = ref(null);
    const regions = ['北部', '中部', '南部', '東部'];
    const cities = {
      北部: ['新北', '桃園', '新竹'],
      中部: ['苗栗', '南投', '台中'],
      南部: ['嘉義', '台南', '高雄'],
      東部: ['宜蘭', '花蓮', '台東'],
    };
    const filteredCities = computed(() => {
      return cities[regions[selectedRegion.value]];
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
    };
  },
};
</script>


