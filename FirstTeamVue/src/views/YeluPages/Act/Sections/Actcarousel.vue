<script setup>
import a from "@/assets/img/ActImg/a.jpg";
import b from "@/assets/img/ActImg/b.jpg";
import c from "@/assets/img/ActImg/c.jpg";
import d from "@/assets/img/ActImg/d.jpg";
import e from "@/assets/img/ActImg/e.jpg";


import { ref, reactive } from 'vue';
import { template } from "lodash";


const images = reactive([
    { abc: b },
    { abc: c },
    { abc: d },
    { abc: e },
]);

</script>

<template>
    <div>
        <el-carousel :interval="2000" arrow="always" height="350px" class=" mb-3">
            <el-carousel-item v-for="item in images" :key="item">
                <img :src=item.abc alt="carousel image" class="carousel_image_type">
            </el-carousel-item>
        </el-carousel>
    </div>
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
