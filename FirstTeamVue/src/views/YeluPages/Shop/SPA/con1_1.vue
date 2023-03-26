<!-- <script setup>
import { onMounted, onUnmounted, ref, reactive, computed } from "vue";
import axios from "axios";
// example components

import card2 from "../shopcards/card2.vue";

//Vue Material Kit 2 components

//資料庫連線語法
const webApiBaseAddr = ref("https://localhost:7108/api/ShopDetails");
const imagelist = ref("https://localhost:7120/images/");
const shopPro = reactive([]);
const visible = ref(false);
const image = ref("");
const shopItem = reactive([]);
const 單價 = ref(0);
const box = reactive([]);

const shopcart = reactive({
  商品細項id: 0,
  產品名稱: "",
  單價: 0,
  商品數量: 0,
  合計總價: 0,
});
//const 產品名稱=ref('')
//const quantity=reactive([])
onMounted(async () => {
  await axios
    .get(webApiBaseAddr.value)
    .then((res) => {
      shopPro.splice(0, res.data.length, ...res.data);
      console.log(shopPro);
    })
    .catch((err) => {
      console.log(err);
    });
});

const dialogData = reactive({
  數量: 1,
  產品名稱: "",
  單價: 0,
  圖片: "",
});

//連動彈跳視窗
let detail = (商品細項ID) => {
  shopItem.splice(0);
  for (let i = 0; i < shopPro.length; i++) {
    let item = shopPro[i];
    if (item.商品細項id == 商品細項ID) {
      dialogData.單價 = item.單價;
      //console.log(單價.value);
      dialogData.產品名稱 = item.產品名稱;
      //console.log(產品名稱.value);
      dialogData.數量 = 1;
      dialogData.圖片 = item.產品圖片;
      //取得從源頭帶過來的資料
      box.push(item);

      console.log(box);
    }

    shopItem.push(item);
  }
};
//計算總價
// const totalPrice = computed(() => {
//     const people = parseInt(form.numberOfPeople);
//     const price = parseInt(pricePerPerson.value);
//     return isNaN(people) || isNaN(price) ? 0 : people * price;
//     });

const totalPrice = computed(() => {
  if (單價.value == null) {
    return " ";
  }
  return dialogData.數量 * dialogData.單價;
});
//加入購物車按鈕
const addCart = () => {
  // const shopordernu = `Shop${now.getFullYear()}${(now.getMonth() + 1).toString().padStart(2, "0")}${now.getDate().toString().padStart(2, "0")}${now.getHours().toString().padStart(2, "0")}${now.getMinutes().toString().padStart(2, "0")}${now.getSeconds().toString().padStart(2, "0")}`;

  const selectedItem = box[0];

  shopcart.商品細項id = selectedItem.商品細項id;

  shopcart.產品名稱 = selectedItem.產品名稱;
  shopcart.單價 = selectedItem.單價;
  shopcart.商品數量 = dialogData.數量;

  shopcart.合計總價 = totalPrice.value;
  console.log(shopcart);

  //三元運算
  const existingDataString = localStorage.getItem("shoplist");
  const existingData = existingDataString ? JSON.parse(existingDataString) : [];
  // 新增資料
  existingData.push(shopcart);
  // 將資料儲存到 localStorage 中
  localStorage.setItem("shoplist", JSON.stringify(existingData));
  box.splice(0);
};
//清空暫存欄位
const clear = () => {
  box.splice(0);
};
</script> -->

<!-- <template>
  <div class="">
    <el-container>
      <el-main>
        <section class="py-3">
          <div class="row">
            <div
              class="col-lg-2 col-sm-6"
              v-for="(item, index) in shopPro"
              :key="item.商品細項id"
            >
              <card2
                class="cards"
                :image="`${imagelist}${item.產品圖片}`"
                :title="item.產品名稱"
                :description="item.單價"
                :content="item.產品說明"
              />
              <el-button
                @click="
                  {
                    detail(item.商品細項id, item, index);
                    visible = true;
                  }
                "
                class="detail"
                >更多資訊!<i class="fas fa-arrow-right text-xs ms-1"></i>
              </el-button>
            </div>

            <el-dialog
              v-model="visible"
              class="dialog"
              title="商品列表"
              width="30%"
              draggable
            >
              <div class="common-layout">
                <el-container>
                  <el-aside width="50%">
                    <div>
                      <h6 style="color: black; font-weight: bolder">
                        名稱:{{ dialogData.產品名稱 }}
                      </h6>
                    </div>
                    <div>
                      <label class="form-label"
                        >價錢:{{ dialogData.單價 }}</label
                      >
                    </div>

                    <div>
                      <label class="form-label">總價:{{ totalPrice }}</label>
                    </div>
                    <div>
                      <el-input-number
                        v-model="dialogData.數量"
                        :min="1"
                        :max="10"
                        :step="1"
                        class="inPut"
                      ></el-input-number>
                    </div>
                    <div style="margin-top: 20px">
                      <el-button
                        class="btn-2"
                        @click="
                          {
                            clear();
                            visible = false;
                          }
                        "
                        >取消</el-button
                      >
                      <el-button
                        class="btn-1"
                        @click="
                          {
                            addCart();
                            visible = false;
                          }
                        "
                      >
                        加入購物車
                      </el-button>
                    </div>
                  </el-aside>
                  <el-main>
                    <div>
                      <img
                        :src="`${imagelist}${dialogData.圖片}`"
                        alt="商品圖片"
                        style="height: 150px; width: 150px; margin-bottom: 20px"
                      />
                    </div>
                  </el-main>
                </el-container>
              </div>

              <div></div>
            </el-dialog>
          </div>
        </section>
      </el-main>
    </el-container>
  </div>
</template> -->
<script setup>
import { onMounted} from "vue";
import {useCampShop} from "../../../../stores/CampShop.js";
import card2 from "../shopcards/card2.vue";
const tnfAll=useCampShop();
onMounted(tnfAll.tnfProduct);
console.log(tnfAll.ShopCart.單價);
//console.log(JSON.parse(localStorage.getItem("shopList"))[0].單價._rawValue._rawValue);
</script>
<template>
  <div class="">
    <el-container>
      <el-main>
        <section class="py-3">
          <div class="row">
            <div
              class="col-lg-2 col-sm-6"
              v-for="item in tnfAll.tnf.TheNorthFace"
              :key="item.商品細項id"
            >
              <card2
                class="cards"
                :image="`${tnfAll.Images}${item.產品圖片}`"
                :title="item.產品名稱"
                :description="item.單價"
                :content="item.產品說明"
              />
              <el-button
                @click="
                  {
                    tnfAll.tnfDialog(item.商品細項id);
                    tnfAll.dialogvision[1]=true;
                  }
                "
                class="detail"
                >更多資訊!<i class="fas fa-arrow-right text-xs ms-1"></i>
              </el-button>
            </div>

            <el-dialog
              v-model="tnfAll.dialogvision[1]"
              class="dialog"
              title="商品列表"
              width="30%"
              draggable
            >
              <div class="common-layout">
                <el-container>
                  <el-aside width="50%">
                    <div>
                      <h6 style="color: black; font-weight: bolder">
                        名稱:{{ tnfAll.ShopproductsInfo.產品名稱 }}
                      </h6>
                    </div>
                    <div>
                      <label class="form-label"
                        >價錢:{{ tnfAll.ShopproductsInfo.單價 }}</label
                      >
                    </div>
                    <div>
                      <label class="form-label">總價:{{ tnfAll.ShopproductsInfo.單價* tnfAll.ShopproductsInfo.數量}}</label>
                    </div>
                    <div>
                      <el-input-number
                        v-model="tnfAll.ShopproductsInfo.數量"
                        :min="1"
                        :max="10"
                        :step="1"
                        class="inPut"
                      ></el-input-number>
                    </div>
                    <div style="margin-top: 20px">
                      <el-button
                        class="btn-2"
                        @click="
                          {
                            tnfAll.dialogvision[1]=false;
                          }
                        "
                        >取消</el-button
                      >
                      <el-button
                        class="btn-1"
                        @click="
                          {
                          tnfAll.shopCart();
                          tnfAll.dialogvision[1]=false;
                          }
                        "
                      >
                        加入購物車
                      </el-button>
                    </div>
                  </el-aside>
                  <el-main>
                    <div>
                      <img
                        :src="`${tnfAll.Images}${tnfAll.ShopproductsInfo.產品圖片}`"
                        alt="商品圖片"
                        style="height: 150px; width: 150px; margin-bottom: 20px"
                      />
                    </div>
                  </el-main>
                </el-container>
              </div>

              <div></div>
            </el-dialog>
          </div>
        </section>
      </el-main>
    </el-container>
  </div>
</template>
<style>
/* 彈跳視窗css設計 */
.dialog {
  display: flex;
  flex-direction: row;
  flex-flow: wrap;
  border: 2.5px outset #c17767;
  border-radius: 12px;
  background-color: #e28413;
  font-weight: bolder;
}

.dialog-body {
  flex: 1;
  padding-right: 10px;
}
.dialog-footer {
  flex: 0 0 auto;
  width: 250px;
}
.form-label {
  color: black;
  font-weight: bolder;
}
/* 彈跳輸入框設定 */
.detail {
  background-color: white;
  color: #d4404a;
  font-weight: bolder;
  font-size: large;
  border: none;
  margin-left: -16px;
  margin-top: -16px;
}
.detail:hover {
  color: #d4404a;
  background-color: white;
}
.detail:active {
  transform: scale(0.9);
}
/* 輸入css設計 */
.inPut {
  border: 2px dashed black;
}
/* 按鈕css */
.btn-1 {
  color: black;
  background-color: #3c908e;
  font-weight: bolder;
}
.btn-1:hover {
  background-color: rgba(60, 144, 142, 0.85);
  color: black;
}
.btn-2 {
  background-color: #d53439;
  color: black;
  font-weight: bolder;
}
.btn-2:hover {
  background-color: rgba(213, 52, 57, 0.7);
  color: black;
}
.images {
  display: flex;
  justify-content: flex-end;
  margin-left: auto;
}
</style>
