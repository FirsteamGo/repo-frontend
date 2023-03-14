<script  setup>
import { ref, reactive, onMounted, computed,watch  } from 'vue'
import axios from "axios";
const webApiBaseAddr = ref("https://localhost:7108/api/Camps");

let Camps = reactive([])
const filter = ref("") 
const 營區id = ref(null)
let 營區名稱 = ref(null)
let 地區 = ref(null)
let 縣市 = ref(null)
let 營區介紹 = ref(null)



const getEmployeeDTOes = onMounted(() => {
  //呼叫後端EmployeeController資料
  axios
    .get(webApiBaseAddr.value)
    .then(respose => {
      
      for (var i = 0; i < respose.data.length; i++) {
        var item = respose.data[i];
        item.Edit = false;
      }
      Camps.splice(0, respose.data.length, ...respose.data)
      console.log(Camps);
    })
    .catch((err) => {
      console.log(err);

    });
})
const filterEmployee = () => {
  let p = {
    自選訂單id: filter.value,
    營區細項id: filter.value,
    單價: filter.value
  }
  axios
    .post(`${webApiBaseAddr.value}/Filter`, p)
    .then(response => {
      // console.log(response.data);
      for (var i = 0; i < response.data.length; i++) {
        var item = response.data[i];
        item.Edit = false;
      }

      Camps.splice(0, Camps.length, ...response.data)
      // console.log(employeeDTOes);
    })
    .catch((err) => {
      console.log(err);
    });
}

</script>


<script>
// import { ref, reactive, onMounted, computed, watch } from 'vue';
// import axios from 'axios';

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
    };
  },
};
</script>





<template>
<div class="common-layout" >
  <el-container>
  <el-header></el-header>
    <!-- 左側區塊 -->
    <el-container>
        <!-- 加上 row(列)  -->
      <el-aside width="400px" class="row justify-content-end">
        <!-- 卡片 -->
        <el-card class="box-card">
            <template #header>
            <div class="card-header" id="app">
                <span style="text-align: center; display:block;">營區選擇</span>
            </div>
            </template>
             <div id="app">
                <span>露營區域</span>
                <el-select v-model="selectedRegion" @change="filterCities">
                  <el-option disabled value="">請選擇</el-option>
                  <el-option v-for="(region, index) in regions" :key="index" :value="region">{{ region }}</el-option>
                </el-select>
                <p></p>
                <span>露營縣市</span>
                <el-select v-model="selectedCity">
                  <el-option disabled value="">請選擇</el-option>
                  <el-option v-for="(city, index) in filteredCities" :key="index" :value="city">{{ city }}</el-option>
                </el-select>
              </div>

            <div class="demo-date-picker">
              <div class="block">
                <span class="demonstration">露營日期</span>
                <p></p>
                <el-date-picker
                  v-model="date"
                  type="daterange"
                  range-separator="To"
                  start-placeholder="開始日期"
                  end-placeholder="結束日期"
                  size="default"
                />
              </div>
      
    </div>



    <el-row class="mb-4 pt-4">
    
    <el-button type="warning" >立即搜尋</el-button>
      
    <router-link :to="{ name: 'camp' }" >
      <el-button type="info"  class="mx-4">點我看更多</el-button>
    </router-link>
    </el-row>


    </el-card>
          </el-aside>


<!-- 右側區塊放main裡面 -->
    <el-main >

    <!-- <el-row>
      <el-col
        v-for="(o, index) in 2"
        :key="o"
        :span="8"
        :offset="index > 0 ? 1 : 0"
      >
        <el-card :body-style="{ padding: '0px' }">
          <img src="@/assets/img/self/03.jpg" class="image"/>
          <div style="padding: 14px">
           
            <div v-for="item in Camps" :key="item.營區id" class="text-center">
            <template v-if="item.Edit == true">

              <p hidden>{{ item.營區id }}</p>
              <h4 >{{ item.營區名稱 }}</h4>
              <span >{{ item.地區 }}</span>
              <span >{{ item.縣市 }}</span>
              <p >{{ item.營區介紹 }}</p>


            </template>

            <template v-else>

              <p hidden>{{ item.營區id }}</p>
              <h4 >{{ item.營區名稱 }}</h4>
              <span >{{ item.地區 }}</span>
              <span >{{ item.縣市 }}</span>
              <p >{{ item.營區介紹 }}</p>
 
            </template>

          </div>
            <div class="bottom">
              <el-button text class="btn btn-dark">加入購物車</el-button>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row> -->

    <div class="row">
        <div class="col-lg-9 z-index-2 border-radius-xl mx-auto">
            <div class="row">
                <div class="col-md-4 position-relative book" v-for="item in Camps" :key="item.營區id">
                  <img src="@/assets/img/self/03.jpg" class="image border-radius-xl"/>

                    <p hidden>{{ item.營區id }}</p>
                    <h4>{{ item.營區名稱 }}</h4>
                    <span >{{ item.地區 }}</span>
                    <span >{{ item.縣市 }}</span>
                    <p >{{ item.營區介紹 }}</p>

                </div>
            </div>
        </div>
    </div>

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
 
 