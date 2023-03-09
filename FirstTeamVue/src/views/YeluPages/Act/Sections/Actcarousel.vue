
<script setup>

import tp from "@/assets/img/ActImg/Taipei.jpg";
import tc from "@/assets/img/ActImg/Taichung.jpg";
import tn from "@/assets/img/ActImg/Tainan.jpg";
import tt from "@/assets/img/ActImg/Taitung.jpg";
import abc from "@/assets/img/ActImg/123.jpeg";
import sukra from "@/assets/img/ActImg/sukra.jpg";
import sun from "@/assets/img/ActImg/sun.jpg";
import flower from "@/assets/img/ActImg/flower.jpg";

import { reactive } from 'vue';
import { template } from "lodash";



const images = reactive([
    { src: tp },
    { src: tc },
    { src: tn },
    { src: tt },
    { src: sukra },
    { src: sun },
]);


</script>

<template>
    <el-carousel :interval="3000" type="card">
        <el-carousel-item v-for="item in images" :key="item">
            <router-link to="camp">
                <img :src="item.src" alt="carousel image" class="carousel_image_type">
            </router-link>

        </el-carousel-item>
    </el-carousel>
</template>

<style scoped>
/* .el-carousel__item img {
  color: #475669;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
  text-align: center;
}  */

/* .el-carousel__item{
    justify-content: center;
    align-items: center;
} */

img {
    width: 100%;
    height: 100%;
    /* object-fit: cover; */
}

/* .carousel_image_type{
    width: 100%;
    height: 100%;
    object-fit:fill;
} */

.el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
    background-color: #d3dce6;
}
</style>
