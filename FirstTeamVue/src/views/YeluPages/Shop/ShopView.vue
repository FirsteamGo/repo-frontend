<script setup>
import { onMounted, onUnmounted, reactive } from "vue";
import { RouterLink, RouterView } from "vue-router";

//example components
import DefaultNavbar from "../../../examples/navbars/NavbarDefault.vue";
import yelufooter from "../../../examples/footers/yelufooter.vue";

//image
import bg0 from "@/assets/img/shop/bgImg.jpg";

//dep
import Typed from "typed.js";

//sections 放置要引入的頁面
import carousel from "../Shop/shopsections/carousel.vue";
import nav1 from "../Shop/SPA/nav_1.vue";
import nav2 from "../Shop/SPA/nav_2.vue";
import nav3 from "../Shop/SPA/nav_3.vue";
import nav4 from "../Shop/SPA/nav_4.vue";
import nav5 from "../Shop/SPA/nav_5.vue";
import navTotal from "./SPA/nav_total.vue";

const body = document.getElementsByTagName("body")[0];
//hooks
onMounted(() => {
  body.classList.add("about-us");
  body.classList.add("bg-gray-200");

  if (document.getElementById("typed")) {
    // eslint-disable-next-line no-unused-vars
    var typed = new Typed("#typed", {
      stringsElement: "#typed-strings",
      typeSpeed: 90,
      backSpeed: 90,
      backDelay: 200,
      startDelay: 500,
      loop: true,
    });
  }
});

onUnmounted(() => {
  body.classList.remove("about-us");
  body.classList.remove("bg-gray-200");
});
</script>
<template>
  <DefaultNavbar
    :action="{
      route: 'javascript:;',
      label: 'Buy Now',
      color: 'btn-white',
    }"
    transparent
  />

  <header class="bg-gradient-dark">
    <div
      class="page-header min-vh-50"
      :style="{ backgroundImage: `url(${bg0})` }"
    >
      <span class="mask bg-gradient-dark opacity-6"></span>
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-8 text-center mx-auto my-auto">
            <h1 class="text-white">YELU Shop</h1>

            <p class="lead mb-4 text-white opacity-10">
              在野麓，你能找到所有想要的裝備與工具!
            </p>
          </div>
        </div>
      </div>
    </div>
  </header>

  <div class="card card-body shadow-xl mx-3 mx-md-4 mt-n6">
    <!-- 記得這裡設定引入標籤 -->
    <!-- <Information /> -->
    <div class="common-layout">
      <!--輪播牆-->
      <el-header class="head"><carousel /></el-header>
      <el-container class="navBar">
        <navTotal/>
        <nav1 />
        <nav2 />
        <nav3 />
        <nav4 />
        <nav5 />
      </el-container>
      <el-main>
        <router-view />
      </el-main>
    </div>
  </div>
  <yelufooter />
</template>
<style scoped>
.head {
  margin-bottom: 100px;
}
.item {
  background-color: aqua;
}
.inputlocation {
  display: flex;
  align-items: center;
  justify-content: center;
}
/* 導覽列css修正 */
.navBar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 22px 16px 10px 20px;
  border: 2px;
  background-color: #f7f4f3;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.5);
  position: sticky;
  top: 0;
  z-index: 1;
}
</style>
