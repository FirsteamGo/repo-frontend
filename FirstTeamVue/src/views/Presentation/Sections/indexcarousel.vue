<script setup>
import MaterialBadge from "../../../components/MaterialBadge.vue";

import a from "@/assets/img/ActImg/a.jpg";
import b from "@/assets/img/ActImg/b.jpg";
import c from "@/assets/img/ActImg/c.jpg";
import d from "@/assets/img/ActImg/d.jpg";
import e from "@/assets/img/ActImg/e.jpg";
import { reactive } from 'vue';

const images = reactive([
    { abc: a },
    { abc: b },
    { abc: c },
    { abc: d },
    { abc: e },
]);

</script>


<template>
 
    <dev class="container">
        <dev class="row">
        <div class="col-lg-6 mx-auto text-center mt-8">
          <MaterialBadge  class="mb-3" color="warning"># Popular Activities</MaterialBadge>
          <h2 class="mb-0 ">當地活動
          </h2>
          <!-- <h2 class="text-gradient text-warning  mb-3">
           Enjoy Your Camp
          </h2> -->
          <p class="lead">
            Funny Explore.
          </p>
        </div>

        
        <div>
            <el-carousel :interval="2000" arrow="always" height="350px" class=" mb-3">
                <el-carousel-item v-for="item in images" :key="item">
                  <router-link to="/pages/Yelu-pages/act/Sections/ActHot">
                    <img :src=item.abc alt="carousel image" class="carousel_image_type">
   
                  </router-link>
                </el-carousel-item>
            </el-carousel>
        </div>


    
    </dev>
</dev>

  </template>
  
  <style scoped>
  /* .el-carousel__item h3 {
    color: #475669;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
    text-align: center;
  } */
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n + 1) {
    background-color: #d3dce6;
  }

  img {
    width: 100%;
    height: 100%;
    /* object-fit: cover; */
}

.myword{
  color: white;
  background-color: #fb8c00;
}
  </style>
  