<script setup>
import { onMounted, onUnmounted } from "vue";
import { RouterLink, RouterView } from "vue-router";

//example components
import DefaultNavbar from "../../../examples/navbars/NavbarDefault.vue";
import yelufooter from "../../../examples/footers/yelufooter.vue";

//image
import bg0 from "@/assets/img/bg9.jpg";

//dep
import Typed from "typed.js";

//sections 放置要引入的頁面
import carousel from "../Shop/shopsections/carousel.vue";
import product from "../Shop/shopsections/product.vue";
import shopnav from "../Shop/shopsections/shopnav.vue";
import inputContent from "../Shop/shopsections/inputcontent.vue";

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
              In YELU, you can find any camping equipment you need here!
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
      <el-header class="inputlocation"><inputContent /></el-header>
      <el-header class="navBar"><shopnav /></el-header>
      <nav>
        <router-link to="/pages/Yelu-pages/Shop/SPA/aaa">aaa</router-link>
        <router-link to="/pages/Yelu-pages/Shop/SPA/bbb">bbb</router-link>
        <router-link to="/pages/Yelu-pages/Shop/SPA/ccc">ccc</router-link>
        <router-view />
      </nav>
    </div>
  </div>

  <yelufooter />
</template>
<style scoped>
.head {
  margin-bottom: 100px;
}
/* .item1 {
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
} */
.inputlocation {
  display: flex;
  align-items: center;
  justify-content: center;
}
.navBar {
  justify-content: center;
  background-color: blue;
}
nav {
  width: 100%;
  text-align: center;
  margin-top: 2rem;
}
nav > a {
  margin: 0 30px;
}
</style>
