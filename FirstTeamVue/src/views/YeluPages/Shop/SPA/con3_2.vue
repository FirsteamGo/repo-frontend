<script setup>
import { onMounted, onUnmounted, ref, reactive, computed } from "vue";
import axios from "axios";
// example components

import card2 from "../shopcards/card2.vue";

//Vue Material Kit 2 components
const webApiBaseAddr = ref("https://localhost:7108/api/ShopDetails");
const imagelist = ref("https://localhost:7120/images/");
let shopPro = reactive([]);

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
                style="object-fit: cover"
              />
            </div>
          </div>
        </section>
      </el-main>
    </el-container>
  </div>
</template>
