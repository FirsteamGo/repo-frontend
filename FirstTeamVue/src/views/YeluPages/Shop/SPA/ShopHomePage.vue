<!-- pinia test in store page -->
<script setup>
import { ref, reactive, computed, onMounted } from "vue";
import {useCampShop} from "../../../../stores/CampShop.js";
import card2 from "../shopcards/card2.vue";
const ShopAll=useCampShop();
onMounted(ShopAll.Topgoods);
</script>

<template>
   <div class="">
    <el-container>
      <el-main>
        <section class="py-3">
          <div class="row">
            <div
              class="col-lg-2 col-sm-6"
              v-for="item in ShopAll.CampShopInfo"
              :key="item.商品細項id"
            >
              <card2
                class="cards"
                :image="`${ShopAll.Images}${item.產品圖片}`"
                :title="item.產品名稱"
                :description="item.單價"
                :content="item.產品說明"
              />
              <el-button
                @click="
                  {
                    ShopAll.goodsDialog(item.商品細項id);
                    ShopAll.dialogvision[0]=true;
                  }
                "
                class="detail"
                >更多資訊!<i class="fas fa-arrow-right text-xs ms-1"></i>
              </el-button>
            </div>
            
            <el-dialog
              v-model="ShopAll.dialogvision[0]"
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
                        名稱:{{ ShopAll.ShopproductsInfo.產品名稱 }}
                      </h6>
                    </div>
                    <div>
                      <label class="form-label"
                        >價錢:{{ShopAll.ShopproductsInfo.單價 }}</label
                      >
                    </div>

                    <div>
                      <label class="form-label">總價:{{ ShopAll.ShopproductsInfo.單價 * ShopAll.count}}</label>
                    </div>
                    <div>
                      <el-input-number
                        v-model="ShopAll.count"
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
                            ShopAll.dialogvision[0] = false;
                          }
                        "
                        >取消</el-button
                      >
                      <el-button
                        class="btn-1"
                        @click="
                          {
                            ShopAll.shopCart();
                            ShopAll.dialogvision[0] = false;
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
                        :src="`${ShopAll.Images}${ShopAll.ShopproductsInfo.產品圖片}`"
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
