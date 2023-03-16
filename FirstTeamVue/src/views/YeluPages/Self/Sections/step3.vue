<script setup>
import { ref, reactive, onMounted, computed } from 'vue'
import axios from "axios";

//從後台帶selffoods資料
const webApiBaseAddr = ref("https://localhost:7108/api/SelfFoods");
//從後台帶照片
const MVCimages = ref("https://localhost:7120/images/");

let SelfFoods = reactive([])

const filter = ref("")
const 自選飲食id = ref(null)
let 商品名稱 = ref(null)
let 商品內容 = ref(null)

const total = reactive({
  自選飲食ID:0,
  圖片:"",
  需求份數:0,
  quantity:[],
  商品名稱:'',
  商品內容:'',
  單價:0,

})



const getEmployeeDTOes = onMounted(() => {
  //呼叫後端EmployeeController資料
  axios
    .get(webApiBaseAddr.value)
    .then(respose => {
      SelfFoods.splice(0, respose.data.length, ...respose.data)
      console.log(SelfFoods);
    })
    .catch((err) => {
      console.log(err);

    });
})
const add =(自選飲食id)=>{
  
  for(let i=0;i<SelfFoods.length;i++){
    let item = SelfFoods[i]
    
    if(item.自選飲食id==自選飲食id)
    {
      total.自選飲食ID=item.自選飲食id;
      total.需求份數=total.quantity[i];
      total.單價=item.單價;
      total.圖片=item.圖片;
      total.商品名稱=item.商品名稱;
      total.商品內容=item.商品內容;
      console.log(total);
      let selfood = JSON.stringify(total)

      localStorage.setItem('selffood', selfood)

    }
  }
}
</script>



<template>
  <div id="app" class="container mt-5">

  <!-- 表頭 -->
  <div class=" row form-group">
    <table class="table table-striped table-hover">
      <thead>
        <tr class="text-center">
          <td>商品圖片</td>
          <td>商品名稱</td>
          <td>商品內容</td>
          <td>單價</td>
          <td>數量</td>
          <td></td>
        </tr>
      </thead>

  
      <tbody>
        <tr v-for="(item, index) in SelfFoods " :key="item.自選飲食id" class="text-center">
          <td hidden>{{ item.自選飲食id }}</td>
          <td><img :src="`${MVCimages}${item.圖片}`" style="width:100px; height:100px" /></td>
          <td>{{ item.商品名稱 }}</td>
          <td>{{ item.商品內容 }}</td>
          <td>{{ item.單價 }}</td>
          <td>
            <el-input-number v-model="total.quantity[index]" :min="1" :max="10" :step="1"></el-input-number>   
          </td>
          <td>
            <!-- 勾選 -->
            <!-- <el-checkbox label="加入購物車" size="medium" /> -->
            <!-- 按鈕 -->
            <button type="button" class="btn btn-outline-dark" size="medium"  @click="add(item.自選飲食id , item , index)" >加入購物車</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Modal彈跳視窗裡面要顯示的東西 -->
    <!-- 新增 -->
  <div>
  <el-dialog v-model="dialogVisible" title="確認購買清單" width="70%" draggable>
    <div class="modal-header">
      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
    </div>
    <template #footer>
      <span class="dialog-footer">
        <table>
          <tbody>
            <tr v-for="item in SelfFoods" :key="item.自選飲食id" class="text-center">
              <td>
                <label class="form-lable">商品名稱</label>
                <!-- <input type="text" v-model="商品名稱" /> -->
                <span>{{ item.商品名稱 }}</span>
              </td>
              <td>
                <label class="form-lable">商品內容</label>
                <!-- <input type="text" v-model="商品內容" /> -->
                <span>{{ item.商品內容 }}</span>
              </td>
              <td>
                <label class="form-lable">單價</label>
                <!-- <input type="text" v-model="單價" /> -->
                <span>{{ item.單價 }}</span>
              </td>
              <!-- <td>
                <el-button @click="dialogVisible = true">加入購物車</el-button>
              </td>
              -->
              <!-- <td>
                <el-button type="primary" @click="insert(); dialogVisible = false">儲存</el-button>
              </td> -->
            </tr>
            <el-button @click="dialogVisible = true">加入購物車</el-button>

          </tbody>
        </table>
      </span>
    </template>
  </el-dialog>
</div>


  



  </div>
</template>


<style>
thead {
  background-color: rgb(191, 130, 90);
  color: cornsilk;
}
</style>