<script setup>
import tp from "@/assets/img/ActImg/Taipei.jpg";
import tc from "@/assets/img/ActImg/Taichung.jpg";
import tn from "@/assets/img/ActImg/Tainan.jpg";
import tt from "@/assets/img/ActImg/Taitung.jpg";
import sukra from "@/assets/img/ActImg/sukra.jpg";
import sun from "@/assets/img/ActImg/sun.jpg";
import flower from "@/assets/img/ActImg/flower.jpg";
import a from "@/assets/img/ActImg/a.jpg";
import b from "@/assets/img/ActImg/b.jpg";
import c from "@/assets/img/ActImg/c.jpg";
import d from "@/assets/img/ActImg/d.jpg";
import e from "@/assets/img/ActImg/e.jpg";


import { ref, reactive } from 'vue';
import { template } from "lodash";


const images = reactive([
    { abc: a },
    { abc: b },
    { abc: c },
    { abc: d },
    { abc: e },
]);

</script>


<template>
    <el-carousel :interval="1500" type="card">
        <el-carousel-item v-for="item in images" :key="item">
            <img :src=item.abc alt="carousel image" class="carousel_image_type">
        </el-carousel-item>
    </el-carousel>
</template>

<style scoped>
img {
    width: 100%;
    height: 100%;
    /* object-fit: cover; */
}

.el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
    background-color: #d3dce6;
}
</style>
