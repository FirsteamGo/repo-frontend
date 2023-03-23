<template>
  <!-- 所選營地/活動 -->
  <div class="container w-75 px-2">
    <div class="row">

      <div class="col-sm-6">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title"><span class="badge bg-secondary"><span
                  class="material-icons mx-2 ">task_alt</span>已選營地</span></h5>
            <img :src="`${ActData.MVCimages}${ActData.ActDialogAll.圖片}`"
              style=" height: 200px; display: block; margin: 0 auto;" />
            <!-- <p>營區名稱</p> -->
            <label class="m-3">營區名稱 : {{ ActData.ActDialogAll.營區名稱 }}</label>
          </div>
        </div>
      </div>

      <div class="col-sm-6">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title"><span class="badge bg-secondary"><span
                  class="material-icons mx-2 ">task_alt</span>已選活動</span></h5>
            <img :src="`${ActData.MVCimages}${ActData.ActDialogAll.活動圖片}`"
              style=" height: 200px; display: block; margin: 0 auto;" />
            <label class="m-3">活動名稱 : {{ ActData.ActDialogAll.活動名稱 }}</label>
          </div>
        </div>
      </div>
    </div>
  </div>



  <!-- 詳細資訊填寫 -->
  <div class="container card w-75 mt-5 mb-5 px-5 justify-content-center">
    <div class="card-body">

      <div>
        <el-form :model="form" label-width="120px">
          <el-form-item label="訂單編號" hidden>{{ selforder }}</el-form-item>

          <el-form-item label="露營日期" class="demonstration">
            <el-date-picker v-model="form.data" type="daterange" range-separator="To" start-placeholder="開始日期"
              end-placeholder="結束日期" size="default" /></el-form-item>

          <el-form-item label="預計人數 :">
            <el-input type="text" v-model="form.預計人數" placeholder="請填入參加人數" />
          </el-form-item>

          <el-form-item label="評論 :" style="width: 100%;">
            <el-input v-model="form.評論" type="textarea" />
          </el-form-item>

          <el-form-item label="評分 :">
            <el-select v-model="form.評分" placeholder="請評分謝謝">
              <el-option label="1" value="1" />
              <el-option label="2" value="2" />
              <el-option label="3" value="3" />
              <el-option label="4" value="4" />
              <el-option label="5" value="5" />
            </el-select>
          </el-form-item>

          <el-form-item>
            <el-button type="warning" @click="onSubmit">確認</el-button>
          </el-form-item>

        </el-form>
      </div>

    </div>
  </div>
</template>

  
<script setup>
import axios from 'axios';
import { reactive, ref, computed, onMounted } from 'vue';
import { useActDataAtore } from "../../../../stores/ActData.js";
const ActData = useActDataAtore();
const webApi = ref("https://localhost:7108/api/SelfOrders");
const now = new Date();
const form = reactive({
  訂單編號: '',
  data: [],
  預計人數: 0,
  評論: '',
  評分: 0,
  露營天數: 0,
})
const selfordernu = `Self${now.getFullYear()}${(now.getMonth() + 1).toString().padStart(2, "0")}${now.getDate().toString().padStart(2, "0")}${now.getHours().toString().padStart(2, "0")}${now.getMinutes().toString().padStart(2, "0")}${now.getSeconds().toString().padStart(2, "0")}`;
const onSubmit = () => {

  form.訂單編號 = selfordernu;
  if (form.data.length === 2) { // 当开始日期和结束日期都已选择时
    const start = form.data[0] // 转换开始日期为 Date 对象
    const end = form.data[1] // 转换结束日期为 Date 对象
    const diff = end.getTime() - start.getTime() // 计算毫秒差值
    form.露營天數 = Math.floor(diff / (1000 * 60 * 60 * 24)) + 1 // 将毫秒差值转换为天数并存储
  } else {
    form.露營天數 = 0 // 如果用户还没有选择日期，则将露营天数重置为 0
  }
  console.log(form);
  let Selfo = JSON.stringify(form)

  localStorage.setItem('selforder', Selfo)
  alert("請按下一步進入購物車")
}


</script>





  
  
<style>
.el-carousel__item h3 {
  display: flex;
  color: #475669;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>
  