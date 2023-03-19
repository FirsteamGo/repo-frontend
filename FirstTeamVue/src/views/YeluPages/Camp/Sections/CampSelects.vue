<script  setup>
import { ref, reactive, onMounted, computed } from 'vue'
import axios from "axios";


</script>


<script>
import { ref, reactive, onMounted, computed, watch } from 'vue';

export default {
  data() {
    const selectedRegion = ref(null);
    const selectedCity = ref(null);
    const campstyles = ref(null);

    const regions = ['北部', '中部', '南部', '東部'];
    const cities = {
      北部: ['新北', '桃園', '新竹'],
      中部: ['苗栗', '南投', '台中'],
      南部: ['嘉義', '台南', '高雄'],
      東部: ['宜蘭', '花蓮', '台東'],
    };
    const styles = ['露營車', '懶人露營(有床)', '懶人露營(無床)', '自搭露營'];

    const filteredCities = computed(() => {
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
      styles,
      filteredCities,
      filterCities,
    };
  },
};
</script>





<template>
<div class="common-layout">
  <el-container>
  <el-header></el-header>
    <!-- 左側區塊 -->
    <el-container>
        <!-- 加上 row(列)  -->
      <el-aside width="350px" class="row justify-content-end">
        <!-- 卡片 -->
        <el-card class="box-card" >
            <template #header>
            <div class="card-header" >
                <label style="text-align: center; display:block;">
                  <h4>營區選擇</h4></label>
            </div>
            </template>


        <div class="m-3">
            <span class="demonstration m-2">露營區域</span> 
            <el-select v-model="selectedRegion"  @change="filterCities" style="width: 100px;" placeholder="請選擇">
              <el-option v-for="(region, index) in regions" :key="index" :value="region">{{ region }}</el-option>
            </el-select>
        </div>
        <div class="m-3">
            <span class="demonstration m-2">露營縣市</span>
            <el-select v-model="selectedCity" style="width: 100px;" placeholder="請選擇">
              <el-option v-for="(city, index) in filteredCities" :key="index" :value="city">{{ city }}</el-option>
            </el-select>
        </div>

            <div class="demo-date-picker m-3">
              <div class="block">
                <span class="demonstration m-2">露營日期</span>
                <p></p>
                <el-date-picker
                  v-model="date"
                  type="daterange"
                  range-separator="To"
                  start-placeholder="開始日期"
                  end-placeholder="結束日期"
                  size="default"
                  style="width: 280px;"
                />
              </div>
            </div>

         <div class="m-4">
            <span class="demonstration m-2">露營形式</span>
            <el-select v-model="campstyles" style="width: 150px;" placeholder="請選擇">
              <el-option v-for="(styles, index) in styles" :key="index" :value="styles">{{ styles }}</el-option>
            </el-select>
         </div>
         <div class="d-flex justify-content-center align-items-center">
            <el-row class="mb-4 pt-4 ">   
            <el-button type="success" >立即搜尋</el-button>
            </el-row>
          </div>
         



    </el-card>
          </el-aside>


<!-- 右側區塊放main裡面 -->
    <el-main >
    </el-main>
        </el-container>
      </el-container>
    </div>
    
  </template>
  
  <style>
  .book {
      border: 1px solid #ccc;
      border-radius: 10px;
      width: 200px;
      height: 350px;
      margin: 10px;
      padding: 10px;
      background-color: rgb(167, 167, 167);
      color: white;
  }


  </style>
 
 