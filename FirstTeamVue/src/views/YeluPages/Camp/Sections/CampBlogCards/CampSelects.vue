<script  setup>
import { ref, reactive, onMounted, computed } from 'vue'
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



//日期選擇
const date = ref('')
const value = ref('')
const option1 = [
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
 
]

// const option2 = [
//   {
//     value: '4',
//     label: '新北',
//   },
//   {
//     value: '5',
//     label: '桃園',
//   },
//   {
//     value: '6',
//     label: '新竹',
//   },
 
// ]

</script>




<template>
<div class="common-layout">
  <el-container>
  <el-header></el-header>
    <!-- 左側區塊 -->
    <el-container>
        <!-- 加上 row(列)  -->
      <el-aside width="400px" class="row justify-content-end">
        <!-- 卡片 -->
        <el-card class="box-card">
            <template #header>
            <div class="card-header">
                <span style="text-align: center; display:block;">營區選擇</span>
            </div>
            </template>
                <!-- 選擇器1 -->
                <span>露營區域</span>
            <el-select v-model="value" class="m-2" placeholder="請選擇" >
                <el-option v-for="item in option1" :key="item.value" :label="item.label" :value="item.value"/>
            </el-select>
            <p></p>
              <!-- 選擇器2 -->
              <span>露營縣市</span>
            <el-select v-model="value" class="m-2" placeholder="請選擇" >
                <el-option v-for="item in option1" :key="item.value" :label="item.label" :value="item.value"/>
            </el-select>
            <p></p>
              <!-- 選擇器3 -->
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
 
 