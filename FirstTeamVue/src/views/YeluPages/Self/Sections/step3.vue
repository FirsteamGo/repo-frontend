<script setup>
import { ref, reactive, onMounted, computed } from 'vue'
import axios from "axios";
let storage = localStorage;
if (storage['selfaddItemList'] == null) {
  storage['selfaddItemList'] = ''
} else {
  storage.setItem('selfaddItemList', '')

}

//從後台帶selffoods資料
const webApiBaseAddr = ref("https://localhost:7108/api/SelfFoods");
//從後台帶照片
const MVCimages = ref("https://localhost:7120/images/");

let SelfFoods = reactive([])
let quantity = reactive([])

const filter = ref("")
const 自選飲食id = ref(null)
let 商品名稱 = ref(null)
let 商品內容 = ref(null)

const total = reactive({
  自選飲食ID: 0,
  圖片: "",
  需求份數: 0,
  商品名稱: '',
  商品內容: '',
  單價: 0,

})


//api抓SelfFoods資料
onMounted(() => {
  axios
    .get(webApiBaseAddr.value)
    .then(respose => {
      SelfFoods.splice(0, respose.data.length, ...respose.data)
      console.log(SelfFoods);
      quantity.splice(0, SelfFoods.length, ...new Array(SelfFoods.length).fill(1));

    })
    .catch((err) => {
      console.log(err);

    });


})





//將資料存在localStorage
const add = (自選飲食id) => {

  for (let i = 0; i < SelfFoods.length; i++) {
    let item = SelfFoods[i]

    if (item.自選飲食id == 自選飲食id) {
      total.自選飲食ID = item.自選飲食id;
      total.需求份數 = quantity[i];
      total.單價 = item.單價;
      total.圖片 = item.圖片;
      total.商品名稱 = item.商品名稱;
      total.商品內容 = item.商品內容;
      console.log(total);


      let selfood = JSON.stringify(total)
      // localStorage.setItem('selffood', selfood)


      if (storage['selfaddItemList'] == null) storage['selfaddItemList'] = ''
      storage['selfaddItemList'] += `${自選飲食id}, `
      storage.setItem('self' + 自選飲食id, selfood)

      // alert('已加入購物清單!');
    }
  }
}
</script>



<template>
  <div id="app" class="container mt-5">

    <!-- 表格標題 -->
    <div class=" row form-group">
      <table class="table table-striped table-hover">
        <thead style="background-color: cadetblue">
          <tr class="text-center">
            <td>商品圖片</td>
            <td>商品名稱</td>
            <td>商品內容</td>
            <td>單價</td>
            <td>數量</td>
            <td></td>
          </tr>
        </thead>

        <!-- api抓SelfFoods進來 -->
        <tbody>
          <tr v-for="(item, index) in SelfFoods " :key="item.自選飲食id" class="text-center">
            <td hidden>{{ item.自選飲食id }}</td>
            <td><img :src="`${MVCimages}${item.圖片}`" style="width:120px; height:100px" /></td>
            <td>{{ item.商品名稱 }}</td>
            <td>{{ item.商品內容 }}</td>
            <td>{{ item.單價 }}</td>
            <!-- 數量按鈕 -->
            <td>
              <el-input-number v-model="quantity[index]" :min="1" :max="10" :step="1"></el-input-number>
            </td>
            <td>
              <!-- 選購按鈕 -->
              <button type="button" class="btn btn-outline-dark" size="medium"
                @click="add(item.自選飲食id, item, index)">選購</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>







  </div>
</template>


<style>
thead {
  background-color: rgb(191, 130, 90);
  color: cornsilk;
}
</style>