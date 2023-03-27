<script setup>
import { reactive } from "vue";

import e1 from "@/assets/img/shop/e1.jpg";
import e2 from "@/assets/img/shop/e2.jpg";
import e3 from "@/assets/img/shop/e3.jpg";
import e4 from "@/assets/img/shop/e4.jpg";

const Images = reactive([
  { items: e1 },
  { items: e2 },
  { items: e3 },
  { items: e4 },
]);
</script>
<template>
  <div class="block text-center" m="t-4">
    <el-carousel trigger="click" height="150px">
      <el-carousel-item v-for="item in Images" :key="item">
        <img :src="item.items" alt="carousel image" class="carousel" />
      </el-carousel-item>
    </el-carousel>
  </div>
</template>
<style scoped>
img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.demonstration {
  color: var(--el-text-color-secondary);
}

.el-carousel__item h3 {
  color: #475669;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
  text-align: center;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>
