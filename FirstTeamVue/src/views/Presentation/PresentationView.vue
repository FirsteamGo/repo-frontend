<script setup>
import { onMounted, onUnmounted } from "vue";

//example components
import NavbarDefault from "../..//examples/navbars/NavbarDefault.vue";
// import DefaultFooter from "../../examples/footers/FooterDefault.vue";
import Header from "../../examples/Header.vue";
import FilledInfoCard from "../../examples/cards/infoCards/FilledInfoCard.vue";
import yelufooter from "../../examples/footers/yelufooter.vue";

//dep
import Typed from "typed.js";

//Vue Material Kit 2 components
import MaterialSocialButton from "@/components/MaterialSocialButton.vue";

// sections
import PresentationCounter from "./Sections/PresentationCounter.vue";
import PresentationPages from "./Sections/PresentationPages.vue";
import PresentationTestimonials from "./Sections/PresentationTestimonials.vue";
// import PresentationInformation from "./Sections/PresentationInformation.vue";
import indexcarousel from "./Sections/indexcarousel.vue";


//images
// import vueMkHeader from "@/assets/img/vue-mk-header.jpg";
import bg02 from "@/assets/img/bg/bg02.jpg";
import wavesWhite from "@/assets/img/waves-white.svg";
import logoBootstrap from "@/assets/img/logos/bootstrap5.jpg";
import logoTailwind from "@/assets/img/logos/icon-tailwind.jpg";
import logoVue from "@/assets/img/logos/vue.jpg";
import logoAngular from "@/assets/img/logos/angular.jpg";
import logoReact from "@/assets/img/logos/react.jpg";
import logoSketch from "@/assets/img/logos/sketch.jpg";

//hooks
const body = document.getElementsByTagName("body")[0];
onMounted(() => {
  body.classList.add("presentation-page");
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
  body.classList.remove("presentation-page");
  body.classList.remove("bg-gray-200");
});
</script>

<template>
  <div class="container position-sticky z-index-sticky top-0">
    <div class="row">
      <div class="col-12">
        <NavbarDefault :sticky="true" />
      </div>
    </div>
  </div>
  <Header>
    <!-- ????????????/?????????????????? -->
    <div
      class="page-header min-vh-75"
      :style="`background-image: url(${bg02})`"
      loading="lazy"
    >
      <div class="container">
        <div class="row">
          <div class="col-lg-7 text-center mx-auto position-relative">
            <!-- <h1
              class="text-white pt-3 mt-n5 me-2"
              :style="{ display: 'inline-block ' }"
            >
            YELU CAMP??????GO!
            </h1> -->
            <h1 class="text-white">
              YELU CAMP?????? in <span class="text-white" id="typed"></span>
            </h1>
            <div id="typed-strings">
              <h1>Miaoli</h1>
              <h1>Hsinchu</h1>
              <h1>Nantou</h1>
              <h1>Tainan</h1>
              <h1>Yilan</h1>

            </div>



            <p class="lead text-white px-5 mt-3" :style="{ fontWeight: '500' }">
            #Camping #Glamping #Recreational vehicles #????????????</p>
            <p class="lead text-white px-5 mt-3" :style="{ fontWeight: '500' }">
              ??????????????????????????????????????????????????????????????????????????????</p>
            
          </div>
        </div>
      </div>
    </div>
  </Header>

  <div class="card card-body blur shadow-blur mx-3 mx-md-4 mt-n6">
    <!-- import????????????????????? ??????????????????????????? -->
    <!-- ???????????? -->
    <PresentationCounter />
    <!-- ?????? -->
    <PresentationPages />
    
    <!-- ???????????? -->
    <div class="container">
      <div class="col-lg-6 mx-auto text-center mt-6">
          <h2 class="mb-0">????????????</h2>
          <!-- <h2 class="text-gradient text-warning  mb-3">
           Enjoy Your Camp
          </h2> -->
          <p class="lead">
            Prefect Schedule.
          </p>
        </div>
      <div class="row mt-6"> 
        <div class="col-lg-4">
          <FilledInfoCard
            class="p-4"
            :color="{ text: 'white', background: 'bg-gradient-warning ' }"
            :icon="{ component: 'flag', color: 'white' }"
            title="Getting Started"
            description="Check the possible ways of working with our product and the necessary files for building your own project."
            :action="{
              route:
                'https://www.creative-tim.com/learning-lab/vue/overview/material-kit/',
              label: { text: 'Let\'s start', color: 'white' }
            }"
          />
        </div>
        <div class="col-lg-4">
          <FilledInfoCard
            class="p-4"
            :color="{ text: 'white', background: 'bg-gradient-warning ' }"
            :icon="{ component: 'flag', color: 'white' }"
            title="Getting Started"
            description="Check the possible ways of working with our product and the necessary files for building your own project."
            :action="{
              route:
                'https://www.creative-tim.com/learning-lab/vue/overview/material-kit/',
              label: { text: 'Let\'s start', color: 'white' }
            }"
          />
        </div>
        <div class="col-lg-4">
          <FilledInfoCard
            class="p-4"
            :color="{ text: 'white', background: 'bg-gradient-warning ' }"
            :icon="{ component: 'flag', color: 'white' }"
            title="Getting Started"
            description="Check the possible ways of working with our product and the necessary files for building your own project."
            :action="{
              route:
                'https://www.creative-tim.com/learning-lab/vue/overview/material-kit/',
              label: { text: 'Let\'s start', color: 'white' }
            }"
          />
        </div>
      </div>
    </div>

  <!-- ?????? -->
    <!-- <PresentationInformation /> -->
    <indexcarousel/>
  <!-- ?????? -->
     <PresentationTestimonials />
  
    <!-- <div
      class="container-fluid mt-sm-5 border-radius-xl">
      <div
        class="page-header py-6 py-md-5 my-sm-3 mb-3 border-radius-xl"
        :style="{
          backgroundImage: `url(${wavesWhite})`
        }"
        loading="lazy"
      >
        <span class="mask bg-warning "></span>
        <div class="container">
          <div class="row">
            <div class="d-flex justify-content-center p-5">
              
            </div>
          </div>
        </div>
      </div>
    </div> -->

   
  </div>
  <!-- <DefaultFooter /> -->
  <yelufooter/>
</template>
