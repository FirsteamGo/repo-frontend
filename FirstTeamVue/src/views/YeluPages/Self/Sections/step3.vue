<script setup>
import { ref, reactive, onMounted, computed } from "vue";
import axios from "axios";
import SelfTransparentBlogCard from "../Sections/selfcard/SelfTransparentBlogCard.vue";
// const storage = localStorage;
// if (storage["selfaddItemList"] == null) {
//   storage["selfaddItemList"] = "";
// } else {
//   storage.setItem("selfaddItemList", "");
// }

//從後台帶selffoods資料
const webApiBaseAddr = ref("https://localhost:7108/api/SelfFoods");
//從後台帶照片
const MVCimages = ref("https://localhost:7120/images/");

let SelfFoods = reactive([]);
let quantity = reactive([]);

const filter = ref("");
const 自選飲食id = ref(null);
const 商品名稱 = ref(null);
const 商品內容 = ref(null);

const total = reactive({
  自選飲食ID: 0,
  圖片: "",
  需求份數: 0,
  商品名稱: "",
  商品內容: "",
  單價: 0,
});

//api抓SelfFoods資料
onMounted(() => {
  axios
    .get(webApiBaseAddr.value)
    .then((respose) => {
      SelfFoods.splice(0, respose.data.length, ...respose.data);

      quantity.splice(
        0,
        SelfFoods.length,
        ...new Array(SelfFoods.length).fill(1)
      );
    })
    .catch((err) => {
      console.log(err);
    });
});

const emit = defineEmits(["getsf"]);
let sfitem = reactive([]);
const add = (自選飲食id) => {
  // const targetObject = SelfFoods.find((item) => item.自選飲食id === 自選飲食id);
  const index = SelfFoods.findIndex((item) => item.自選飲食id === 自選飲食id);
  // const copied = { ...total };
  const targetObject = Object.assign({}, total); //複製一份total

  targetObject.自選飲食ID = SelfFoods[index].自選飲食id;
  targetObject.需求份數 = quantity[index];
  targetObject.單價 = SelfFoods[index].單價;
  targetObject.圖片 = SelfFoods[index].圖片;
  targetObject.商品名稱 = SelfFoods[index].商品名稱;
  targetObject.商品內容 = SelfFoods[index].商品內容;

  emit("getsf", targetObject);

  //將資料存在localStorage
  // for (let i = 0; i < SelfFoods.length; i++) {
  //   let item = SelfFoods[i];

  //   if (item.自選飲食id == 自選飲食id) {
  //     total.自選飲食ID = item.自選飲食id;
  //     total.需求份數 = quantity[i];
  //     total.單價 = item.單價;
  //     total.圖片 = item.圖片;
  //     total.商品名稱 = item.商品名稱;
  //     total.商品內容 = item.商品內容;

  //     let selfood = JSON.stringify(total);
  //     // localStorage.setItem('selffood', selfood)

  //     if (storage["selfaddItemList"] == null) storage["selfaddItemList"] = "";
  //     storage["selfaddItemList"] += `${自選飲食id}, `;
  //     storage.setItem("self" + 自選飲食id, selfood);
  //   }
  // }
};
</script>



<template>
  <!--   
  <div id="app" class="container mt-5">
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
  
    
      <tbody>
        <tr v-for="(item, index) in SelfFoods " :key="item.自選飲食id" class="text-center">
          <td hidden>{{ item.自選飲食id }}</td>
          <td><img :src="`${MVCimages}${item.圖片}`" style="width:120px; height:100px" /></td>
          <td>{{ item.商品名稱 }}</td>
          <td>{{ item.商品內容 }}</td>
          <td>{{ item.單價 }}</td>
          
          <td>
            <el-input-number v-model="quantity[index]" :min="1" :max="10" :step="1"></el-input-number>   
          </td>
          <td>
            
            <button type="button" class="btn btn-outline-dark" size="medium"  @click="add(item.自選飲食id , item , index)" >選購</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div> -->

  <div class="">
    <el-container>
      <el-header></el-header>
      <el-main>
        <section class="py-3">
          <div class="row">
            <!-- 主頁卡片 -->
            <div
              class="card m-3 col-lg-2 col-sm-6"
              v-for="(item, index) in SelfFoods"
              :key="item.自選飲食id"
            >
              <SelfTransparentBlogCard
                :image="`${MVCimages}${item.圖片}`"
                :title="item.商品名稱"
              />
              <!-- <img :src="`${MVCimages}${item.圖片}`" alt=""> -->

              <div style="display: flex; justify-content: flex-start">
                <div class="d-flex mt-3">
                  <label class="form-lable" hidden>
                    {{ item.自選飲食id }}</label
                  >
                  <!-- <label class="form-lable"><span class="material-icons">pin_drop</span> {{ item.商品名稱 }}</label> -->

                  <label class="form-lable"
                    ><span class="material-icons">flatware</span>
                    {{ item.商品內容 }}</label
                  >
                </div>
              </div>

              <div>
                <label class="form-lable"
                  ><span class="material-icons">attach_money</span> TWD
                  <span class="text-primary">{{ item.單價 }} </span> / 組</label
                >
              </div>

              <div>
                <el-input-number
                  v-model="quantity[index]"
                  :min="1"
                  :max="10"
                  :step="1"
                ></el-input-number>
              </div>

              <div>
                <!-- <button type="button" class="btn btn-outline-dark" size="medium"  @click="add(item.自選飲食id , item , index)" >選購</button> -->
                <el-button
                  type="warning"
                  class="text-lg font-weight-bolder m-2"
                  @click="add(item.自選飲食id)"
                >
                  <span class="material-icons">add_shopping_cart</span>
                </el-button>
              </div>
            </div>
          </div>
        </section>
      </el-main>
    </el-container>
  </div>
</template>


<style>
thead {
  background-color: rgb(191, 130, 90);
  color: cornsilk;
}
.time {
  font-size: 12px;
  color: #999;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.button {
  padding: 0;
  min-height: auto;
}

.image {
  width: 100%;
  display: block;
}
</style>