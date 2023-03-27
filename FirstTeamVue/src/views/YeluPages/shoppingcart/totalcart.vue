<template>
  <body>
    <div id="myCart">
      <div style="text-align: center" class="m-5">
        <h1>野麓購物車</h1>
        <h5>YELU CAMP Shopping Cart</h5>
      </div>

      <header id="cartList">
        <!-- <div>
				<h3>露營商店</h3>
			<table style="border-bottom:1px solid #ddd;">
				<tr class="itemHead">
					<td style="width:200px;" hidden>商品細項id</td>
					<td style="width:200px;">商品圖片</td>
					<td style="width:280px;">商品名稱</td>
					<td style="width:70px;">數量</td>
					<td style="width:170px;">單價($)</td>
				</tr>
			</table>
			</div> -->
        <h3>露營商店</h3>
        <el-header height="500px">
          <!-- <table style="border-bottom:1px solid #ddd;"> -->
          <div class="container w-100 px-2">
            <div class="row">
              <div class="col-sm-6">
                <div class="card">
                  <div class="card-body">
                    <h5 class="card-title">
                      <span class="badge bg-success"
                        ><span class="material-icons mx-2">task_alt</span
                        >已選商品</span
                      >
                    </h5>
                    <img
                      :src="`${mvc}${Shopdata.產品圖片}`"
                      style="height: 200px; display: block; margin: 0 auto"
                    />
                    <div>
                      <p class="m-3 myword">
                        商品名稱 | {{ Shopdata.產品名稱 }}
                      </p>
                      <p class="m-3 myword">商品數量 | {{ Shopdata.數量 }}</p>
                      <p class="m-3 myword">
                        <span class="material-icons">attach_money</span>
                        TWD<span class="text-primary">{{ Shopdata.總價 }}</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </el-header>

        <h3>自選行程</h3>
        <el-header :height="sfcardpx">
          <!-- <table style="border-bottom:1px solid #ddd;"> -->
          <div class="container w-100 px-2">
            <div class="row">
              <div class="col-sm-6">
                <div class="card">
                  <div class="card-body">
                    <h5 class="card-title">
                      <span class="badge bg-success"
                        ><span class="material-icons mx-2">task_alt</span
                        >已選營地</span
                      >
                    </h5>
                    <img
                      :src="`${SelfData.MVCimages}${SelfData.CampDialogAll.圖片}`"
                      style="
                        height: 200px;
                        width: 280px;
                        display: block;
                        margin: 0 auto;
                      "
                    />
                    <p class="m-3 myword">
                      營區名稱 | {{ SelfData.CampDialogAll.營區名稱 }}
                    </p>
                    <p class="m-3 myword">
                      營區地址 | {{ SelfData.CampDialogAll.營區地址 }}
                    </p>
                    <p class="m-3 myword">
                      入住日期 | {{ formatDate(SelfData.form.data[0]) }}
                    </p>
                    <p class="m-3 myword">
                      退住日期 | {{ formatDate(SelfData.form.data[1]) }}
                    </p>
                    <p class="m-3 myword">
                      露營人數 | {{ SelfData.form.預計人數 }}
                    </p>
                    <p class="m-3 myword">
                      <span class="material-icons">attach_money</span> TWD<span
                        class="text-primary"
                        >{{ SelfData.CampDialogAll.單價 }}</span
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
                        ><span class="material-icons mx-2">task_alt</span
                        >已選活動</span
                      >
                    </h5>
                    <img
                      :src="`${SelfData.MVCimages}${SelfData.CampDialogAll.活動圖片}`"
                      style="
                        height: 200px;
                        width: 280px;
                        display: block;
                        margin: 0 auto;
                      "
                    />
                    <p class="m-3 myword">
                      活動名稱 | {{ SelfData.CampDialogAll.活動名稱 }}
                    </p>
                    <p class="m-3 myword">
                      活動種類 | {{ SelfData.CampDialogAll.活動種類 }}
                    </p>
                    <p class="m-3 myword">
                      <span class="material-icons">attach_money</span> TWD<span
                        class="text-primary"
                        >{{ SelfData.CampDialogAll.門票價格 }}</span
                      >
                    </p>
                  </div>
                </div>
              </div>

              <div class="card m-3">
                <div class="card-body">
                  <header id="cartList">
                    <h5 class="card-title">
                      <span class="badge bg-success"
                        ><span class="material-icons mx-2">task_alt</span
                        >已選飲食</span
                      >
                    </h5>
                    <table style="border-bottom: 1px solid #ddd">
                      <tr class="itemHead">
                        <td style="width: 200px">商品圖片</td>
                        <td style="width: 200px">商品名稱</td>
                        <td style="width: 300px">商品內容</td>
                        <td style="width: 170px">單價($)</td>
                        <td style="width: 60px">數量</td>
                        <!-- <td style="width: 60px"></td> -->
                      </tr>
                    </table>

                    <div>
                      <table>
                        <tr
                          v-for="(item, index) in SelfData.sfitem"
                          :key="item.自選飲食id"
                          :value="index"
                          class="item"
                        >
                          <td style="width: 200px">
                            <img
                              :src="`${mvc}${item.圖片}`"
                              style="width: 100px; height: 100px"
                            />
                          </td>
                          <td style="width: 200px">
                            <p>{{ item.商品名稱 }}</p>
                          </td>
                          <td style="width: 300px">
                            <p>{{ item.商品內容 }}</p>
                          </td>
                          <td style="width: 150px">
                            <p>{{ item.單價 }}</p>
                          </td>
                          <td style="width: 60px">
                            <p>{{ item.需求份數 }}</p>
                          </td>
                        </tr>
                      </table>
                    </div>
                  </header>
                  <p class="m-3 myword" style="text-align: right">
                    <span class="material-icons">attach_money</span>飲食總計 :
                    TWD
                    <span id="total" class="text-primary"
                      >{{ SelfData.ListTotal }}
                    </span>
                  </p>
                </div>
              </div>

              <!-- <div class="col-sm-4">
                <div class="card">
                  <div class="card-body">
                    <h5 class="card-title">
                      <span class="badge bg-success"
                        ><span class="material-icons mx-2">task_alt</span
                        >已選飲食</span
                      >
                    </h5>
                    <img
              :src="`${whoFuncImg.MVCimages}${whoFunc.活動圖片}`"
              style="height: 200px; display: block; margin: 0 auto"/>
                    <p class="m-3 myword">商品名稱 | {{ }}</p>
                    <p class="m-3 myword">商品數量 | {{ }}</p>
                    <p class="m-3 myword">
                      <span class="material-icons">attach_money</span> TWD<span
                        class="text-primary"
                        >{{
                      }}</span>
                    </p>
                  </div>
                </div>
              </div> -->
            </div>
          </div>
          <!-- </table> -->
        </el-header>

        <h3>套裝行程</h3>
        <el-header height="700px">
          <!-- <table style="border-bottom:1px solid #ddd;"> -->
          <div class="container w-100 px-2">
            <div class="row">
              <div class="col-sm-12">
                <div class="card">
                  <div class="card-body">
                    <h5 class="card-title">
                      <span class="badge bg-success"
                        ><span class="material-icons mx-2">task_alt</span
                        >已選套裝行程</span
                      >
                    </h5>
                    <el-container>
                      <el-main width="60%">
                        <img
                          :src="`${mvc}${setod.活動圖片}`"
                          style="
                            display: block;
                            height: 300px;
                            width: 350px;
                            margin-top: 30px;
                          "
                        />
                      </el-main>
                      <el-main style="margin-top: 0; height: 550px">
                        <p class="m-3 myword">營區名稱 | {{ 營區名稱 }}</p>
                        <p class="m-3 myword">營區縣市 | {{ 縣市 }}</p>
                        <p class="m-3 myword">
                          露營入住時間 | {{ formatDate(入住時間) }}
                        </p>
                        <p class="m-3 myword">
                          露營退住時間 | {{ formatDate(退住時間) }}
                        </p>
                        <p class="m-3 myword">露營人數 | {{ 預定人數 }}</p>
                        <p class="m-3 myword">露營方式 | {{ 項目內容 }}</p>
                        <p class="m-3 myword">方案 | {{ 套裝方案 }}</p>
                        <p class="m-3 myword">套裝活動 | {{ 活動名稱 }}</p>
                        <p class="m-3 myword">
                          <span class="material-icons">attach_money</span>
                          TWD<span class="text-primary">{{ 合計總價 }}</span>
                        </p>
                        <button class="btn btn-primary" @click="Del()">
                          <span class="material-icons">delete</span>
                        </button>
                        <button class="btn btn-warning" @click="insert()">
                          確認送出訂單
                        </button>
                        <p
                          style="
                            font-weight: bolder;
                            font-size: large;
                            color: rgb(100, 0, 0);
                          "
                        >
                          若想修改請刪除後重新填寫訂單
                        </p>
                      </el-main>
                    </el-container>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- </table> -->
        </el-header>
      </header>
      <!-- 合計 -->
      <footer style="text-align: right">
        Total : <span id="total">0</span>
      </footer>
      <!-- 按鈕 -->
      <div class="d-flex justify-content-end m-5">
        <router-link to="/">
          <el-button type="info" class="text-lg" style="margin: 5px"
            >重新購買 <span class="material-icons">refresh</span></el-button
          >
        </router-link>
        <router-link to="/">
          <el-button type="warning" class="text-lg" style="margin: 5px"
            >結帳 <span class="material-icons">credit_card</span></el-button
          >
        </router-link>
        <router-link to="/">
          <el-button type="info" plain class="text-lg" style="margin: 5px">
            <span class="material-icons p-2">home</span></el-button
          ></router-link
        >
      </div>
    </div>
  </body>
</template>


<!-- 寫從localStorage取出資料 -->
<script setup>
import axios from "axios";
import { reactive, onMounted, ref } from "vue";
import { useCampShop } from "../../../stores/CampShop.js";
import { useSelfDataAtore } from "../../../stores/SelfData.js";
const SelfData = useSelfDataAtore();

const StoreCarts = useCampShop();
let Shopdata = reactive({
  產品名稱: "",
  產品圖片: "",
  數量: 0,
  單價: 0,
  總價: 0,
});

const sfcardpx = ref(850 + SelfData.sfitem.length * 100 + "px"); //10 + SelfData.sfitem.length * 20

onMounted(() => {
  const shopdetail = StoreCarts.storesss();
  for (let i = 0; i < shopdetail.length; i++) {
    Shopdata.產品名稱 = shopdetail[i].產品名稱;
    Shopdata.數量 = parseInt(shopdetail[i].數量);
    Shopdata.單價 = parseInt(shopdetail[i].單價);
    Shopdata.總價 = Shopdata.數量 * Shopdata.單價;
    Shopdata.產品圖片 = shopdetail[i].產品圖片;
  }
});

const mvc = ref("https://localhost:7120/images/");
const webApi = ref("https://localhost:7108/api/SetOrders");
const seto = JSON.parse(localStorage.getItem("setorder"));
const setod = JSON.parse(localStorage.getItem("setorderdetail"));
const meda = JSON.parse(localStorage.getItem("customerData"));
let 套裝行程ID = ref(setod.套裝行程id);
let 會員ID = ref(meda.會員id);
let 套裝訂單編號 = ref(seto.訂單編號);
const 入住時間 = reactive(seto.data[0]);
const 退住時間 = reactive(seto.data[1]);
const 預定人數 = reactive(seto.numberOfPeople);
const 合計總價 = reactive(seto.合計總價);
const 營區名稱 = reactive(setod.營區名稱);
const 縣市 = reactive(setod.縣市);
const 項目內容 = reactive(setod.項目內容);
const 套裝方案 = reactive(setod.套裝方案);
const 活動名稱 = reactive(setod.活動名稱);
let 評論 = ref(seto.評論);
let 評分 = ref(seto.評分);
console.log(入住時間);

const formatDate = (dateString) => {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const day = date.getDate().toString().padStart(2, "0");
  return `${year}-${month}-${day}`;
};
const insert = () => {
  var p = reactive({
    套裝訂單id: 0,
    套裝行程id: 套裝行程ID.value,
    會員id: 會員ID.value,
    套裝訂單編號: 套裝訂單編號.value,
    入住時間: 入住時間,
    退住時間: 退住時間,
    預計人數: 預定人數,
    合計總價: 合計總價,
    評論: 評論.value,
    評分: 評分.value,
  });
  // console.log(p);
  axios
    .post(`${webApi.value}`, p)
    .then((res) => {
      alert(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
};
const Del = () => {
  alert("已刪除套裝行程購物車");
  localStorage.removeItem("setorderdetail");
  localStorage.removeItem("setorder");
  window.location.reload();
};
</script>





<style>
body {
  font: normal 18px Tahoma, Arial, Verdana;
}

#myCart {
  margin: 0 auto;
  width: 900px;
  border: 1px solid #fff;
}

input {
  width: 60px;
}

tr {
  border-bottom: 1px dotted #aaa;
}

td {
  margin: 0px;
  padding: 1px 10px 4px 10px;
  border-bottom: 1px dotted #ccc;
  text-align: left;
  vertical-align: top;
}

#cartList {
  font-size: medium;
  font-weight: 800;
  border-bottom: 1px solid #aaa;
}

#subtotal {
  font-size: medium;
  font-weight: 600;
  color: Maroon;
}
</style>