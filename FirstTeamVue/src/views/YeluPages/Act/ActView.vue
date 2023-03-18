<script setup>
import { onMounted, onUnmounted, ref, reactive, computed } from "vue";
import axios from "axios";
//example components
import DefaultNavbar from "../../../examples/navbars/NavbarDefault.vue";

//image
import bg0 from "@/assets/img/bg/bg01.jpg";

//dep
import Typed from "typed.js";

//sections 放置要引入的頁面
import yelufooter from "../../../examples/footers/yelufooter.vue";
import Actcarousel from "../Act/Sections/Actcarousel.vue";
import Actselect from "./Sections/Actselect.vue";
import ActNavbar from "./Sections/ActNavbar.vue";

import ActSelectBtn from "./Sections/ActSelectBtn.vue";

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


// 串接 GET API
const webApiBaseAddr = ref("https://localhost:7108/api/ActDetails")

let Act = reactive([])

const getEmployeeDTOes = onMounted(() => {
  axios.get(webApiBaseAddr.value).then(res => {
    //console.log(res.data);
    Act.splice(0, res.data.length, ...res.data)

  }).catch(err => {
    console.log(err);
  })
})
</script>

<template>
  <DefaultNavbar :action="{
    route: 'javascript:;',
    label: 'Buy Now',
    color: 'btn-white',
  }" transparent />
  <header class="bg-gradient-dark">
    <div class="page-header min-vh-50" :style="{ backgroundImage: `url(${bg0})` }">
      <span class="mask bg-gradient-dark opacity-6"></span>
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-8 text-center mx-auto my-auto">
            <h1 class="text-white">
              在地體驗
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
  <div class="card card-body shadow-xl mx-3 mx-md-4 mt-n6">

    <!-- 記得這裡設定引入標籤 -->
    <Actselect />
    <ActNavbar />
    <!-- <ActSelectBtn /> -->
    <Actcarousel />
    <router-view></router-view>


    <!-- <Information /> -->


  </div>

  <yelufooter />
</template>
<style>
.search {
  display: flex;
  align-items: center;
  justify-content: center;
}

.bkc {
  text-align: center;
  color: gray;
}

.demo {
  margin-bottom: 10px;
  overflow-x: auto;
}

.butonleft {

  margin-bottom: 10px;
}

.Search {
  margin-left: 100px;
}

.where {
  margin-left: 400px;
}
</style>