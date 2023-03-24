<script setup>
import { onMounted, onUnmounted } from "vue";

//example components
import DefaultNavbar from "../../../examples/navbars/NavbarDefault.vue";
import yelufooter from "../../../examples/footers/yelufooter.vue";
import CampCarousel from "./Sections/CampCarousel.vue";
import CampSelects from "./Sections/CampSelects.vue";
import CampNorth from "./Sections/CampNorth.vue";
//image
import bg from "@/assets/img/bg/bg06.jpg";

//dep
import Typed from "typed.js";

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
    <div class="page-header min-vh-50" :style="{ backgroundImage: `url(${bg})` }">
      <span class="mask bg-gradient-dark opacity-6"></span>
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-8 text-center mx-auto my-auto">
            <h1 class="text-white">營區預訂</h1>

            <p class="lead mb-4 text-white opacity-8">
              給你最棒的露營體驗 #YELU CAMP
            </p>
          </div>
        </div>
      </div>
    </div>
  </header>

  <!-- 記得這裡設定引入標籤 -->
  <!-- <Information /> -->
  <!-- <CampCarousel /> -->
  <!-- <CampSelects /> -->

  <div class="common-layout card card-body shadow-xl mx-5 mx-md-4 mt-n6 ">
    <el-container>
      <el-aside width="300px">
        <div class="accordion ms-4" id="accordionExample">
          <!-- 手風琴 -->
          <div class="accordion-item">
            <router-link to="/pages/Yelu-pages/camp/North">
              <h2 class="accordion-header" id="headingOne">
                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne"
                  aria-expanded="true" aria-controls="collapseOne">
                  <i class="material-icons ">home</i>北部營區 #NORTH CAMP
                </button>
              </h2>
            </router-link>
            <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne"
              data-bs-parent="#accordionExample">
              <div class="word-body">
                <div>
                  <router-link></router-link>
                  <h6>新北 New Taipei</h6>
                  <h6>桃園 Taoyuan</h6>
                  <h6>新竹 Hsinchu</h6>
                </div>

              </div>
            </div>
          </div>
          <div class="accordion-item">
            <router-link to="/pages/Yelu-pages/camp/West">
              <h2 class="accordion-header" id="headingTwo">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                  <i class="material-icons">home</i>中部營區 #WEST CAMP
                </button>
              </h2>
            </router-link>
            <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo"
              data-bs-parent="#accordionExample">
              <div class="word-body">
                <div>
                  <h6>苗栗 Miaoli</h6>
                  <h6>南投 Nantou</h6>
                  <h6>台中 Taichung</h6>
                </div>
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <router-link to="/pages/Yelu-pages/camp/South">
              <h2 class="accordion-header" id="headingThree">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                  data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                  <i class="material-icons">home</i>南部營區 #SOUTH CAMP
                </button>
              </h2>
            </router-link>
            <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree"
              data-bs-parent="#accordionExample">
              <div class="word-body">
                <div>
                  <h6>嘉義 Chiayi</h6>
                  <h6>台南 Tainan</h6>
                  <h6>高雄 Kaohsiung</h6>
                </div>
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <router-link to="/pages/Yelu-pages/camp/East">
              <h2 class="accordion-header" id="headingFour">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                  data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                  <i class="material-icons">home</i>東部營區#EAST CAMP
                </button>
              </h2>
            </router-link>
            <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour"
              data-bs-parent="#accordionExample">
              <div class="word-body">
                <div>
                  <h6>宜蘭 Yilan</h6>
                  <h6>花蓮 Hualien</h6>
                  <h6>台東 Taitung</h6>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- 地圖 -->
        <div class="mt-5">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3634.7429887997278!2d120.77220251537011!3d24.355443871308932!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3469057690ed35a9%3A0xd5d012046ae76b77!2z5pa35qmL6YOo6JC977yO6LyV5aWi6Zyy54ef!5e0!3m2!1szh-TW!2stw!4v1679535747344!5m2!1szh-TW!2stw"
            width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>


        <!-- 手風琴end -->
      </el-aside>
      <el-main> <router-view></router-view></el-main>
    </el-container>
  </div>



  <yelufooter />
</template>

<style>
.word-body {
  display: flex;
  /* justify-content: center;
align-content: center; */
  margin-left: 30px;
}
</style>
