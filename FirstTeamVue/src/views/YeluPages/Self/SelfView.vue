<script setup>
import { onMounted, onUnmounted } from "vue";

//example components
import DefaultNavbar from "../../../examples/navbars/NavbarDefault.vue";
import yelufooter from "../../../examples/footers/yelufooter.vue";

//image
import bg03 from "@/assets/img/bg/bg03.jpg";

//dep
import Typed from "typed.js";

//sections 放置要引入的頁面
import stepall from "./stepall.vue";
import Breadcrumb from "./Sections/Breadcrumb.vue";


// import options from "./Sections/select.vue";



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
  <!-- <header class="bg-gradient-dark"> -->
    <header >
    <!-- <div
      class="page-header min-vh-50"
      :style="{ backgroundImage: `url(${bg03})` }"
    > -->
    <div
      class="page-header min-vh-75"
      :style="`background-image: url(${bg03})`"
      loading="lazy"
    >
      <span class="mask bg-gradient-dark opacity-6"></span>
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-8 text-center mx-auto my-auto">
            <h1 class="text-white">
              自選行程
            </h1>
           
            <p class="lead mb-4 text-white opacity-8">
              We’re constantly trying to express ourselves and actualize our
              dreams. If you have the opportunity to play this game
            </p>
            
           
          </div>
        </div>
      </div>
    </div>
  </header>
  
   <Breadcrumb />
  <div class="card card-body shadow-xl mx-3 mx-md-4 mt-n6">

    <!-- 記得這裡設定引入標籤 -->
    <stepall />

    <!-- <options /> -->
 

  </div>
  <yelufooter />
</template>
