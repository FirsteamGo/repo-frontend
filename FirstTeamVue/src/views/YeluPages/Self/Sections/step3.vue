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


const dialogVisible = ref(false)

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
        <tr v-for="item in SelfFoods" :key="item.自選飲食id" class="text-center">
          <td hidden>{{ item.自選飲食id }}</td>
          <td><img :src="`${MVCimages}${item.圖片}`" style="width:100px; height:100px" /></td>
          <td>{{ item.商品名稱 }}</td>
          <td>{{ item.商品內容 }}</td>
          <td>{{ item.單價 }}</td>
          <td>
            <el-input-number v-model="quantity" :min="1" :max="10" :step="1"></el-input-number>
          </td>
          <td>
            <!-- 勾選 -->
            <!-- <el-checkbox label="加入購物車" size="medium" /> -->
            <!-- 按鈕 -->
            <button type="button" class="btn btn-outline-dark" size="medium">加入購物車</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Modal -->
    <!-- 新增 -->
    <!-- <div>
    <el-dialog v-model="dialogVisible" title="新增資料" width="30%" draggable>
      <div class="modal-header">

        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <template #footer>
        <span class="dialog-footer">
          <div>
            <label class="form-lable">商品名稱</label>
            <input type="text" v-model="商品名稱" />
          </div>

          <div>
            <label class="form-lable">商品內容</label>
            <input type="text" v-model="商品內容" />
          </div>

          <div>
            <label class="form-lable">單價</label>
            <input type="text" v-model="單價" />
          </div>

          <el-button @click="dialogVisible = false">取消</el-button>
          <el-button type="primary" @click="{ insert(); dialogVisible = false }">
            儲存
          </el-button>
        </span>
      </template>
    </el-dialog>
  </div> -->

  </div>
</template>


<style>
thead {
  background-color: rgb(191, 130, 90);
  color: cornsilk;
}
</style>