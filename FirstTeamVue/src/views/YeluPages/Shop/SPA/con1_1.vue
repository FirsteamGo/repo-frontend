<script setup>
import { onMounted, onUnmounted, ref, reactive, computed } from "vue";
import axios from "axios";
// example components

import card2 from "../shopcards/card2.vue";

//Vue Material Kit 2 components


const webApiBaseAddr = ref("https://localhost:7108/api/ShopDetails");
const imagelist = ref("https://localhost:7120/images/");
let shopPro = reactive([]);
const visible=ref(false)
const image=ref('')
const 單價=ref('')
const shopItem=reactive([])

const getEmployeeDTOes = onMounted(() => {
  axios
    .get(webApiBaseAddr.value)
    .then((res) => {
      //console.log(res.data);
      shopPro.splice(0, res.data.length, ...res.data);
      console.log(shopPro);
    })
    .catch((err) => {
      console.log(err);
    });
});
let datail=(商品細項ID)=>{
  var shopItem=[]
  for(let i=0;i<shopPro.length;i++){
    var item=shopPro[i]
    if(item.商品細項ID=商品細項ID){
      單價.value=item.單價;
      產品名稱.value=item.產品名稱;
      image.value=item.產品圖片;
    }
  }
  shopPro.splice(0,showItem.length,...shopItem)
}
</script>
<template>
  <div class="">
    <el-container>
      <el-main>
        <section class="py-3">
          <div class="row">
            <div class="col-lg-2 col-sm-6" v-for="item in shopPro">
              <card2
                :image="`${imagelist}${item.產品圖片}`"
                :title="item.產品名稱"
                :description="item.單價"
                :content="item.產品說明"              
              />
              <el-button @click="{datail(item.商品細項ID);visible=true}" class="datail" type="danger">123</el-button>
              <div>
                <el-dialog v-model="visible" title="這是個示範" width="50%" draggable>
                <div class="modal-header">
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <span class="dialog-footer">
                  <div>
                    <img :src="`${imagelist}${image}`" alt="empty">
                  </div>
                  <div>
                      <label class="form-table">單價:{{ 單價 }}元</label>
                  </div>
                  <el-button @click="visible = false">取消</el-button>
              <el-button type="primary" @click="  visible = false ">
                儲存
              </el-button>
                </span>
                </el-dialog>
              </div>
            </div>
          </div>
        </section>
      </el-main>
    </el-container>
  </div>
</template>
