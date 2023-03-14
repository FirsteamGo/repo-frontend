<script setup>
import a from "@/assets/img/ActImg/a.jpg";
import b from "@/assets/img/ActImg/b.jpg";
import c from "@/assets/img/ActImg/c.jpg";
import d from "@/assets/img/ActImg/d.jpg";
import e from "@/assets/img/ActImg/e.jpg";

import { reactive } from 'vue';
const images = reactive([
    { value: a },
    { value: b },
    { value: c },
    { value: d },
    { value: e },
])
</script>
<template>
    <el-carousel :interval="3000" arrow="always">
        <el-carousel-item v-for="item in images" :key="item">
            <img :src=item.value alt="carousel image" class="carousel_image_type">
        </el-carousel-item>
    </el-carousel>
</template>
  
<style scoped>
img {
    width: 100%;
    height: 100%;
    /* object-fit: cover; */
}

.el-carousel__item h3 {
    color: #475669;
    opacity: 0.75;
    line-height: 300px;
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