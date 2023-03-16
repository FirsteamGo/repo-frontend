<script setup>
import { onMounted, onUnmounted, ref, reactive, computed } from "vue";
import axios from "axios";
// example components

import card2 from "../shopcards/card2.vue";

//Vue Material Kit 2 components


const webApiBaseAddr = ref("https://localhost:7108/api/ShopDetails");
const imagelist = ref("https://localhost:7120/images/");
const shopPro = reactive([]);
const visible=ref(false)
const image=ref('')
let shopItem=reactive([])
const 單價=ref('')
const 產品名稱=ref('')


onMounted(async()=>{
  await axios.get(webApiBaseAddr.value)
  .then(res=>{
    // for(let i=0;i<res.data.length;i++){
    //   let item=res.data[i];
    //   item.Edit=false;
    //   console.log(item);
    // }
    shopPro.splice(0,res.data.length,...res.data)
    console.log(shopPro);

  }).catch(err=>{
    console.log(err);
  })
}) 

let detail=(商品細項ID)=>{
  let shopItem=[]
  //alert(商品細項ID)
  for(let i=0;i<shopPro.length;i++){
    let item=shopPro[i]
    if(item.商品細項id==商品細項ID){
      單價.value=item.單價;
      //console.log(單價.value);
      產品名稱.value=item.產品名稱;
      //console.log(產品名稱.value);

    }
    else{item.Edit=false;}
    shopItem.push(item);
  }
  //shopPro.splice(0,shopItem.length,...shopItem)
}
</script>
<template>
  <div class="">
    <el-container>
      <el-main>
        <section class="py-3">
          <div class="row">
            <div class="col-lg-2 col-sm-6" v-for="item in shopPro" >
              <card2
                :image="`${imagelist}${item.產品圖片}`"
                :title="item.產品名稱"
                :description="item.單價"
                :content="item.產品說明"              
              />
              <el-button @click="{detail(item.商品細項id);visible=true}" class="detail" type="danger">123</el-button>
              <div>
              </div>
            </div>
            <el-dialog v-model="visible" title="這是個示範" width="50%" draggable>
                <div class="modal-header">
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <span class="dialog-footer">
                  <div>
                    <label class="form-label">價錢:{{ 單價 }}</label>
                  </div>
                  <div>
                    <label class="form-label">名稱:{{ 產品名稱 }}</label>
                  </div>
                  <div>
            <el-input-number v-model="quantity" :min="1" :max="10" :step="1"></el-input-number>
                  </div>
                  <el-button @click="visible = false">取消</el-button>
              <el-button type="primary" @click="  visible = false ">
                儲存
              </el-button>
                </span>
                </el-dialog>
          </div>
        </section>
      </el-main>
    </el-container>
  </div>
</template>
