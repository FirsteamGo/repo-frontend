<style>
thead {
  background-color: rgb(93, 115, 128);
  color: cornsilk;
}

td {

  text-align: center;
  vertical-align: middle;
}
</style>

<template>
  <h3>套裝訂單購物車</h3>

  <div class="container">

    <div class="form-group">
      <table class="table table-striped table-hover">
        <thead>
          <tr>
            <!-- <td>會員資訊</td> -->
            <td><span class="material-icons mt-1">person</span></td>
            <!-- <td>套裝行程</td> -->
            <td><span class="material-icons mt-1">luggage</span></td>
            <!-- <td>套裝行程規劃</td>  -->
            <td><span class="material-icons mt-1">edit_calendar</span></td>
            <td></td>
          </tr>
        </thead>

        <tbody>
          <tr>

            <td>
              <h5 class="mt-3">會員資訊</h5>

              <span class="dialog-footer">
                <div>
                  <img :src="`${mvc}${meda.照片}`">
                </div>
                <div>
                  <label class="form-lable">會員姓名: {{ meda.姓名 }}</label>
                </div>
                <div>
                  <label class="form-lable">連絡信箱: {{ meda.連絡信箱 }}</label>
                </div>
                <div>
                  <label class="form-lable">電話號碼: {{ meda.電話號碼 }}</label>
                </div>
              </span>
            </td>

            <td>
              <h5 class="mt-3">套裝行程</h5>

              <span class="dialog-footer">
                <div>
                  <img :src="`${mvc}${setod.活動圖片}`" style="width: 300px; height: 300px;">
                </div>
                <div>
                  <label class="form-lable">營區地區: {{ setod.地區 }}</label>
                </div>
                <div>
                  <label class="form-lable">營區縣市:{{ setod.縣市 }}</label>
                </div>
                <div>
                  <label class="form-lable">營區名稱: {{ setod.營區名稱 }}</label>
                </div>
                <div>
                  <label class="form-lable">露營方式: {{ setod.項目內容 }}</label>
                </div>
                <div>
                  <label class="form-lable">相關活動: {{ setod.活動名稱 }}</label>
                </div>
                <div>
                  <label class="form-lable">方案: {{ setod.套裝方案 }}</label>
                </div>
                <div>
                  <label class="form-lable">細項: {{ setod.套裝細項 }}</label>
                </div>
                <div>
                  <label class="form-lable">單價: {{ setod.套裝行程價格 }} 元 / 人</label>
                </div>

              </span>

            </td>

            <td>
              <h5 class="mt-3">套裝行程規劃</h5>

              <span class="dialog-footer">

                <div>
                  <label class="form-lable">預計參加人數: {{ seto.numberOfPeople }}</label>
                </div>
                <div>
                  <label class="form-lable">入住時間:{{ formatDate(seto.data[0]) }}</label>
                </div>
                <div>
                  <label class="form-lable">退住時間:{{ formatDate(seto.data[1]) }}</label>
                </div>
                <div>
                  <label class="form-lable">合計總價: {{ seto.合計總價 }}</label>
                </div>
                <div>
                  <label class="form-lable">期望值: {{ seto.評分 }}</label>
                </div>
                <div>
                  <label class="form-lable">備註: {{ seto.評論 }}</label>
                </div>
              </span>
            </td>

            <td>
              <button class="btn btn-primary" @click="Del()"><span class="material-icons">delete</span></button>
              <button class="btn btn-warning" @click="insert()">確認送出訂單</button>
              <div>
                <label style="font-weight: bolder; font-size: large; color: rgb(100,0,0);">若想修改請刪除後重新填寫訂單</label>
              </div>

            </td>

          </tr>
        </tbody>
      </table>
    </div>

    <!-- Modal -->


  </div>
</template>

<script setup>
import axios from 'axios';
import { ref, reactive, onMounted } from 'vue';
import { RouterLink } from 'vue-router';
const mvc = ref("https://localhost:7120/images/");
const webApi = ref("https://localhost:7108/api/SetOrders");

const seto = JSON.parse(localStorage.getItem('setorder'))
const setod = JSON.parse(localStorage.getItem('setorderdetail'))
const meda = JSON.parse(localStorage.getItem('customerData'))
// console.log(seto.訂單編號);
let 套裝行程ID = ref(setod.套裝行程id)
let 會員ID = ref(meda.會員id)
let 套裝訂單編號 = ref(seto.訂單編號)
let 入住時間 = ref(seto.data[0])
let 退住時間 = ref(seto.data[1])
let 預定人數 = ref(seto.numberOfPeople)
let 合計總價 = ref(seto.合計總價)
let 評論 = ref(seto.評論)
let 評分 = ref(seto.評分)

const formatDate = (dateString) => {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const day = date.getDate().toString().padStart(2, "0");
  return `${year}-${month}-${day}`;
}

// console.log(入住時間);

const insert = () => {
  var p = reactive({
    套裝訂單id: 0,
    套裝行程id: 套裝行程ID.value,
    會員id: 會員ID.value,
    套裝訂單編號: 套裝訂單編號.value,
    入住時間: 入住時間.value,
    退住時間: 退住時間.value,
    預計人數: 預定人數.value,
    合計總價: 合計總價.value,
    評論: 評論.value,
    評分: 評分.value,


  });
  // console.log(p);
  axios
    .post(`${webApi.value}`, p)
    .then(res => { alert(res.data); })
    .catch((err) => {
      console.log(err);
    });

}
const Del = () => {
  alert("已刪除套裝行程購物車")
  localStorage.removeItem('setorderdetail');
  localStorage.removeItem('setorder');
  window.location.reload();
}

</script>