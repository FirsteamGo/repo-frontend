<script setup>
import { onMounted, onUnmounted } from "vue";

//example components
import DefaultNavbar from "../../../examples/navbars/NavbarDefault.vue";
import yelufooter from "../../../examples/footers/yelufooter.vue";

//image
import bg05 from "@/assets/img/bg/bg05.jpg";

//dep
import Typed from "typed.js";
import Layout from "./Sections/Layout.vue";
import Breadcrumb from "./Sections/Breadcrumb.vue";
import Actimage from "./Sections/Actimage.vue"
import weather from './Sections/weather.vue'
import testimage from "./Sections/GB/testimage.vue";
import Marquee from "./Sections/Marquee.vue";
//sections 放置要引入的頁面
// import Information from "./Sections/AboutInformation.vue";


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
  <DefaultNavbar :action="{
    route: 'javascript:;',
    label: 'Buy Now',
    color: 'btn-white',
  }" transparent />
  <header class="bg-gradient-dark">
    <div class="page-header min-vh-50
                              " :style="{ backgroundImage: `url(${bg05})` }">
      <span class="mask bg-gradient-dark opacity-6"></span>
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-8 text-center mx-auto my-auto">
            <h1 class="text-white">
              套裝行程
            </h1>

            <p class="lead mb-4 text-white opacity-8">
              不用規劃直接拎包入住! #YELU CAMP
              <!--走進大自然，享受真正的自由！ <br>
                                          離開城市，找到屬於自己的寧靜空間！ <br> 
                                          可以幫你完成你的夢想！ <br>-->
            </p>


          </div>
        </div>
      </div>
    </div>
  </header>


  <Breadcrumb />

  <div class="card card-body shadow-xl mx-3 mx-md-4 mt-n6">

    <Marquee />
    <Actimage />
    <Layout />


    <!-- <div>
                                <li class="nav-item mx-2">
                                  <a role="button" class="nav-link ps-2 d-flex cursor-pointer align-items-center" :class="getTextColor()"
                                    aria-expanded="false">
                                    <a href="https://localhost:7120/" class="dropdown-item border-radius-md">
                                      <i class="material-icons opacity-6 me-2  text-md" :class="getTextColor()">settings</i>
                                    </a>
                                  </a>
                                </li>
                              </div> -->
    <!-- <weather/> -->

  </div>
  <yelufooter />
</template>
