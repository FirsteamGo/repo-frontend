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
 
 