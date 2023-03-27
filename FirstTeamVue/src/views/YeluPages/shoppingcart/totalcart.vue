<template>
  <body>
    <div id="myCart">
      <div style="text-align: center;" class="m-5">
        <h1>野麓購物車 </h1>
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
        <el-header height="300px">
          <!-- <table style="border-bottom:1px solid #ddd;"> -->
          <div class="container w-100 px-2">
            <div class="row">
              <div class="col-sm-6">
                <div class="card">
                  <div class="card-body">
                    <h5 class="card-title">
                      <span class="badge bg-success"><span class="material-icons mx-2">task_alt</span>已選商品</span>
                    </h5>
                    <!-- <img
              :src="`${whoFuncImg.MVCimages}${whoFunc.圖片}`"
              style="height: 200px; display: block; margin: 0 auto"
            /> -->
            <div>
            <p class="m-3 myword">商品名稱 | {{ Shopdata.產品名稱 }}</p>
            <p class="m-3 myword">商品數量 | {{ Shopdata.數量 }}</p>
            <p class="m-3 myword">
              <span class="material-icons">attach_money</span> TWD<span
                class="text-primary">{{ Shopdata.總價 }}</span>
            </p>
          </div>
          </div>
          </div>
          </div>
        </div>
      </div>
    </el-header>


        <h3>自選行程</h3>
        <el-header height="400px">
          <!-- <table style="border-bottom:1px solid #ddd;"> -->
          <div class="container w-100 px-2">
            <div class="row">
              <div class="col-sm-4">
                <div class="card">
                  <div class="card-body">
                    <h5 class="card-title">
                      <span class="badge bg-success"><span class="material-icons mx-2">task_alt</span>已選營地</span>
                    </h5>
                    <!-- <img
              :src="`${whoFuncImg.MVCimages}${whoFunc.圖片}`"
              style="height: 200px; display: block; margin: 0 auto"
            /> -->
                    <p class="m-3 myword">營區名稱 | {{ }}</p>
                    <p class="m-3 myword">營區地址 | {{ }}</p>
                    <p class="m-3 myword">露營時間 | {{ }}</p>
                    <p class="m-3 myword">露營人數 | {{ }}</p>
                    <p class="m-3 myword">
                      <span class="material-icons">attach_money</span> TWD<span class="text-primary">{{ }}</span>
                    </p>
                  </div>
                </div>
              </div>

              <div class="col-sm-4">
                <div class="card">
                  <div class="card-body">
                    <h5 class="card-title">
                      <span class="badge bg-success"><span class="material-icons mx-2">task_alt</span>已選活動</span>
                    </h5>
                    <!-- <img
              :src="`${whoFuncImg.MVCimages}${whoFunc.活動圖片}`"
              style="height: 200px; display: block; margin: 0 auto"/> -->
                    <p class="m-3 myword">活動名稱 | {{ }}</p>
                    <p class="m-3 myword">活動種類 | {{ }}</p>
                    <p class="m-3 myword">
                      <span class="material-icons">attach_money</span> TWD<span class="text-primary">{{ }}</span>
                    </p>
                  </div>
                </div>
              </div>

              <div class="col-sm-4">
                <div class="card">
                  <div class="card-body">
                    <h5 class="card-title">
                      <span class="badge bg-success"><span class="material-icons mx-2">task_alt</span>已選飲食</span>
                    </h5>
                    <!-- <img
              :src="`${whoFuncImg.MVCimages}${whoFunc.活動圖片}`"
              style="height: 200px; display: block; margin: 0 auto"/> -->
                    <p class="m-3 myword">商品名稱 | {{ }}</p>
                    <p class="m-3 myword">商品數量 | {{ }}</p>
                    <p class="m-3 myword">
                      <span class="material-icons">attach_money</span> TWD<span class="text-primary">{{ }}</span>
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
          <!-- </table> -->
        </el-header>



        <h3>套裝行程</h3>
        <el-header height="600px">
          <!-- <table style="border-bottom:1px solid #ddd;"> -->
          <div class="container w-100 px-2">
            <div class="row">
              <div class="col-sm-12">
                <div class="card">
                  <div class="card-body">
                    <h5 class="card-title">
                      <span class="badge bg-success"><span class="material-icons mx-2">task_alt</span>已選套裝行程</span>
                    </h5>
                    <el-container>
                    <el-main width="60%"  >
                    <img :src="`${mvc}${setod.活動圖片}`" style=" display: block; height: 300px;width: 350px; margin-top:30px ;" />
                    </el-main>
                    <el-main style="margin-top: 0;">
                    <p class="m-3 myword">營區名稱 | {{ 營區名稱 }}</p>
                    <p class="m-3 myword">營區縣市 | {{ 縣市 }}</p>
                    <p class="m-3 myword">露營入住時間 | {{ formatDate(入住時間) }}</p>
                    <p class="m-3 myword">露營退住時間 | {{ formatDate(退住時間) }}</p>
                    <p class="m-3 myword">露營人數 | {{ 預定人數 }}</p>
                    <p class="m-3 myword">露營方式 | {{ 項目內容 }}</p>
                    <p class="m-3 myword">方案 | {{ 套裝方案 }}</p>
                    <p class="m-3 myword">套裝活動 | {{ 活動名稱 }}</p>
                    <p class="m-3 myword">
                      <span class="material-icons">attach_money</span> TWD<span class="text-primary">{{ 合計總價
                      }}</span>
                      
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
      <footer style="text-align:right;">
        Total : <span id="total">0</span>
      </footer>
      <!-- 按鈕 -->
      <div class="d-flex justify-content-end m-5">
        <router-link to="/">
          <el-button type="info" class="text-lg" style="margin: 5px;">重新購買
            <span class="material-icons">refresh</span></el-button> </router-link>
        <router-link to="/">
          <el-button type="warning" class="text-lg " style="margin: 5px;">結帳
            <span class="material-icons">credit_card</span></el-button> </router-link>
        <router-link to="/">
          <el-button type="info" plain class="text-lg " style="margin: 5px;">
            <span class="material-icons p-2">home</span></el-button></router-link>
      </div>

    </div>
  </body>
</template>


<!-- 寫從localStorage取出資料 -->
<script setup>
import axios from 'axios';
import { reactive, onMounted,ref } from 'vue';
import { useCampShop } from '../../../stores/CampShop.js';

const StoreCarts=useCampShop();
let Shopdata=reactive({
  產品名稱:"",
  數量:"",
  單價:'',
  總價:0,
});


onMounted(()=>{
  const shopdetail=StoreCarts.storesss();
  for(let i=0;i<shopdetail.length;i++){
    Shopdata.產品名稱=shopdetail[i].產品名稱;
    Shopdata.數量=parseInt(shopdetail[i].count);
    Shopdata.單價=parseInt(shopdetail[i].單價);
    Shopdata.總價=Shopdata.數量*Shopdata.單價;
    
  }
  
});


const mvc = ref("https://localhost:7120/images/");
const seto = JSON.parse(localStorage.getItem('setorder'))
const setod = JSON.parse(localStorage.getItem('setorderdetail'))
const meda = JSON.parse(localStorage.getItem('customerData'))

const 入住時間 = reactive(seto.data[0])
const 退住時間 = reactive(seto.data[1])
const 預定人數 = reactive(seto.numberOfPeople)
const 合計總價 = reactive(seto.合計總價)
const 營區名稱 = reactive(setod.營區名稱)
const 縣市 = reactive(setod.縣市)
const 項目內容 = reactive(setod.項目內容)
const 套裝方案 = reactive(setod.套裝方案)
const 活動名稱 = reactive(setod.活動名稱)
console.log(預定人數.value);
const formatDate = (dateString) => {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const day = date.getDate().toString().padStart(2, "0");
  return `${year}-${month}-${day}`;
}

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