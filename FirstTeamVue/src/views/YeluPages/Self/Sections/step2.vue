<template>
  <!-- 詳細資訊填寫 -->
  <div class="container card w-75 mt-5 mb-5 px-5 justify-content-center">
    <div class="card-body">
      <div>
        <el-form :model="form" label-width="120px">
          <el-form-item label="訂單編號" hidden>{{ selforder }}</el-form-item>

          <div class="container d-flex justify-content-start">
            <el-form-item label="露營日期" class="demonstration">
              <el-date-picker
                v-model="form.data"
                type="daterange"
                range-separator="To"
                start-placeholder="開始日期"
                end-placeholder="結束日期"
                size="default"
            /></el-form-item>
          </div>

          <div class="container d-flex justify-content-start">
            <el-form-item label="預計人數 :">
              <el-input
                type="text"
                v-model="form.預計人數"
                placeholder="請填入參加人數"
              />
            </el-form-item>
          </div>

          <div class="container d-flex justify-content-start">
            <el-form-item label="備註 :" style="width: 75%">
              <el-input
                v-model="form.評論"
                type="textarea"
                placeholder="任何特殊需求請填寫在這裡"
              />
            </el-form-item>
          </div>

          <div class="container d-flex justify-content-end">
            <el-form-item>
              <el-button type="info" plain @click="onSubmit">送出</el-button>
            </el-form-item>
          </div>
        </el-form>
      </div>
    </div>
  </div>
  <!-- 所選營地/活動 -->
  <div class="container w-75 px-2">
    <div class="row">
      <div class="col-sm-6">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">
              <span class="badge bg-success"
                ><span class="material-icons mx-2">task_alt</span>已選營地</span
              >
            </h5>
            <img
              :src="`${whoFuncImg.MVCimages}${whoFunc.圖片}`"
              style="height: 200px; display: block; margin: 0 auto"
            />
            <p class="m-3 myword">營區名稱 | {{ whoFunc.營區名稱 }}</p>
            <p class="m-3 myword">營區地址 | {{ whoFunc.營區地址 }}</p>
            <p class="m-3 myword">
              <span class="material-icons">attach_money</span> TWD<span
                class="text-primary"
                >{{ whoFunc.單價 }}</span
              >
            </p>
          </div>
        </div>
      </div>

      <div class="col-sm-6">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">
              <span class="badge bg-success"
                ><span class="material-icons mx-2">task_alt</span>已選活動</span
              >
            </h5>
            <img
              :src="`${whoFuncImg.MVCimages}${whoFunc.活動圖片}`"
              style="height: 200px; display: block; margin: 0 auto"
            />
            <p class="m-3 myword">活動名稱 | {{ whoFunc.活動名稱 }}</p>
            <p class="m-3 myword">活動種類 | {{ whoFunc.活動種類 }}</p>
            <p class="m-3 myword">
              <span class="material-icons">attach_money</span> TWD<span
                class="text-primary"
                >{{ whoFunc.門票價格 }}</span
              >
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

  
<script setup>
import axios from "axios";
import { reactive, ref, computed, onMounted } from "vue";
import { useActDataAtore } from "../../../../stores/ActData.js";
import { useCampDataAtore } from "../../../../stores/CampData.js";
import { useSelfDataAtore } from "../../../../stores/SelfData.js";
import { useRoute } from "vue-router";
const route = useRoute();

const ActData = useActDataAtore();
const CampData = useCampDataAtore();
const SelfData = useSelfDataAtore();

const webApi = ref("https://localhost:7108/api/SelfOrders");
const now = new Date();
const form = reactive({
  訂單編號: "",
  data: [],
  預計人數: 0,
  評論: "",
  評分: 0,
  露營天數: 0,
});
const selfordernu = `Self${now.getFullYear()}${(now.getMonth() + 1)
  .toString()
  .padStart(2, "0")}${now.getDate().toString().padStart(2, "0")}${now
  .getHours()
  .toString()
  .padStart(2, "0")}${now.getMinutes().toString().padStart(2, "0")}${now
  .getSeconds()
  .toString()
  .padStart(2, "0")}`;
const onSubmit = () => {
  form.訂單編號 = selfordernu;
  if (form.data.length === 2) {
    // 当开始日期和结束日期都已选择时
    const start = form.data[0]; // 转换开始日期为 Date 对象
    const end = form.data[1]; // 转换结束日期为 Date 对象
    const diff = end.getTime() - start.getTime(); // 计算毫秒差值
    form.露營天數 = Math.floor(diff / (1000 * 60 * 60 * 24)) + 1; // 将毫秒差值转换为天数并存储
  } else {
    form.露營天數 = 0; // 如果用户还没有选择日期，则将露营天数重置为 0
  }
  console.log(form);
  let Selfo = JSON.stringify(form);

  SelfData.form = form;

  // localStorage.setItem("selforder", Selfo);
  alert("請按下一步進入購物車");
};

const whoFunc = ref("");
const whoFuncImg = ref("");
onMounted(() => {
  if (route.name == "step2-p") {
    // alert(route.params.whoFunc)
    if (route.params.whoFunc == "Camp") {
      whoFunc.value = CampData.CampDialogAll;
      whoFuncImg.value = CampData;
    } else if (route.params.whoFunc == "Act") {
      whoFunc.value = ActData.ActDialogAll;
      whoFuncImg.value = ActData;
    }
  }
});
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

.myword {
  color: black;
  font-weight: bold;
}
</style>
  