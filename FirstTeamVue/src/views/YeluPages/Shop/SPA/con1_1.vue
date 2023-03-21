<script setup>
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
const box = reactive([])
const shopcart = reactive({
  商品細項id:0,  
  產品名稱:'',
  單價:0,
  商品數量:0,
  合計總價:0,
})
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
  
  shopcart.商品細項id=selectedItem.商品細項id;
  
  shopcart.產品名稱=selectedItem.產品名稱;
  shopcart.單價=selectedItem.單價;
  shopcart.商品數量=dialogData.數量;
  
  shopcart.合計總價=totalPrice.value;
  console.log(shopcart);

  //三元運算
  const existingDataString = localStorage.getItem('shoplist');
  const existingData = existingDataString ? JSON.parse(existingDataString) : [];
  // 新增資料
  existingData.push(shopcart);
  // 將資料儲存到 localStorage 中
  localStorage.setItem('shoplist', JSON.stringify(existingData));
  box.splice(0);
};
//清空暫存欄位
const clear =()=>{
  box.splice(0);
}



</script>
<template>
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
                type="danger"
                >123</el-button
              >
              <div></div>
            </div>
            <el-dialog
              v-model="visible"
              title="這是個示範"
              width="50%"
              draggable
            >
              <div class="modal-header">
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <span class="dialog-footer">
                <div>
                  <label class="form-label">價錢:{{ dialogData.單價 }}</label>
                </div>
                <div>
                  <label class="form-label"
                    >名稱:{{ dialogData.產品名稱 }}</label
                  >
                </div>
                <div>
                  <el-input-number
                    v-model="dialogData.數量"
                    :min="1"
                    :max="10"
                    :step="1"
                  ></el-input-number>
                </div>
                <div>
                  <label class="form-label">總價:{{ totalPrice }}</label>
                </div>
                <!-- <div>
                      <label class="form-table">單價:{{ 單價 }}元</label>
                  </div> -->
                <el-button @click="{clear();visible = false}">取消</el-button>
                <el-button type="primary" @click="{addCart();  visible = false} ">
                  加入購物車
                </el-button>
              </span>
            </el-dialog>
          </div>
        </section>
      </el-main>
    </el-container>
  </div>
</template>
