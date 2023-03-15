<script setup>
import { onMounted, onUnmounted } from "vue";

//example components
import DefaultNavbar from "../../../examples/navbars/NavbarDefault.vue";
import yelufooter from "../../../examples/footers/yelufooter.vue";

//image
import bg0 from "@/assets/img/bg9.jpg";

//dep
import Typed from "typed.js";

//sections 放置要引入的頁面
// import Information from "./Sections/AboutInformation.vue";
// import LinkDatabase from "./Sections/LinkDatabase.vue";
// import Container from "./Sections/Container.vue";
// import Container1 from "./Sections/Container1.vue";
// import Container2 from "./Sections/Container2.vue";
// import Breadcrumbs from "./Sections/Breadcrumbs.vue";
// import Container3 from "./Sections/Container3.vue";
 //import Signup from "./Sections/Signup.vue";
 //import Login from "./Sections/Login.vue";
 import frame from "./Sections/Frame.vue";
 import frame1 from "./Sections/Frame1.vue";


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

const refreshEdit_Frame = () => {
  console.log('refreshEdit_Frame refreshEdit_Frame refreshEdit_Frame')
}
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
      class="page-header min-vh-50
"
      :style="{ backgroundImage: `url(${bg0})` }"
    >
      <span class="mask bg-gradient-dark opacity-6"></span>
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-8 text-center mx-auto my-auto">
            <h1 class="text-white">
              Title 
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

   <Breadcrumbs/>
  <div class="card card-body shadow-xl mx-3 mx-md-4 mt-n6">

    <!-- 記得這裡設定引入標籤 -->
    <!-- <Information /> -->
   
    

    <Container />
    <Container1 />
    <Container2 />
    <Container3 />
    <Signup />
    <br>
    <br>
    <Login />
    <frame @refreshEdit_Frame="refreshEdit_Frame"/>
    <br>
    <br>
    <frame1 />

  </div>
  <yelufooter />
</template>
