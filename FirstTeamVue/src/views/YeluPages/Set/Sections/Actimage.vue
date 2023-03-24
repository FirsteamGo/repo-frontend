<template>
  <div class="containe mt-5 px-5">

    <el-carousel :interval="2000" type="card" height="400px">
      <el-carousel-item v-for=" item in SetODID" :key="item">
        <img :src="`${mvc}${item.活動圖片}`" style=" width: 100%; height: 100%;" alt="carousel image" />
      </el-carousel-item>
    </el-carousel>

  </div>
</template>


<script setup>

import { values } from 'lodash';
import axios from 'axios';
import { reactive, ref, computed, onMounted } from 'vue';
const webApi = ref("https://localhost:7108/api/SetOrderDetails");
const mvc = ref("https://localhost:7120/images/");
const SetODID = reactive([])
const gitpricePerPerson = onMounted(() => {
  axios.get(webApi.value)
    .then(res => {

      SetODID.splice(0, res.data.length, ...res.data);
    })
    .catch((err) => {
      console.error(err);
    })
})


</script>
<style scoped>
.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>