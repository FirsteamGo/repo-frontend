<script setup>
import { RouterLink } from "vue-router";
import { ref, watch } from "vue";
import { useWindowsWidth } from "../../assets/js/useWindowsWidth";

// images
import ArrDark from "@/assets/img/down-arrow-dark.svg";
import downArrow from "@/assets/img/down-arrow.svg";
import DownArrWhite from "@/assets/img/down-arrow-white.svg";

const props = defineProps({
  action: {
    type: Object,
    route: String,
    color: String,
    label: String,
    default: () => ({
      route: "https://www.creative-tim.com/product/vue-material-kit",
      color: "bg-gradient-success",
      label: "Free Download",
    }),
  },
  transparent: {
    type: Boolean,
    default: false,
  },
  light: {
    type: Boolean,
    default: false,
  },
  dark: {
    type: Boolean,
    default: false,
  },
  sticky: {
    type: Boolean,
    default: false,
  },
  darkText: {
    type: Boolean,
    default: false,
  },
});

// set arrow  color
function getArrowColor() {
  if (props.transparent && textDark.value) {
    return ArrDark;
  } else if (props.transparent) {
    return DownArrWhite;
  } else {
    return ArrDark;
  }
}

// set text color
const getTextColor = () => {
  let color;
  if (props.transparent && textDark.value) {
    color = "text-dark";
  } else if (props.transparent) {
    color = "text-white";
  } else {
    color = "text-dark";
  }

  return color;
};

// set nav color on mobile && desktop

let textDark = ref(props.darkText);
const { type } = useWindowsWidth();

if (type.value === "mobile") {
  textDark.value = true;
} else if (type.value === "desktop" && textDark.value == false) {
  textDark.value = false;
}

watch(
  () => type.value,
  (newValue) => {
    if (newValue === "mobile") {
      textDark.value = true;
    } else {
      textDark.value = false;
    }
  }
);
</script>
<template>
  <nav
    class="navbar navbar-expand-lg top-0"
    :class="{
      'z-index-3 w-100 shadow-none navbar-transparent position-absolute my-3':
        props.transparent,
      'my-3 blur border-radius-lg z-index-3 py-2 shadow py-2 start-0 end-0 mx-4 position-absolute mt-4':
        props.sticky,
      'navbar-light bg-white py-3': props.light,
      ' navbar-dark bg-gradient-dark z-index-3 py-3': props.dark,
    }"
  >
    <div
      :class="
        props.transparent || props.light || props.dark
          ? 'container'
          : 'container-fluid px-0'
      "
    >
      <RouterLink
        class="navbar-brand d-none d-md-block"
        :class="[
          (props.transparent && textDark.value) || !props.transparent
            ? 'text-dark font-weight-bolder ms-sm-3'
            : 'text-white font-weight-bolder ms-sm-3',
        ]"
        :to="{ name: 'presentation' }"
        rel="tooltip"
        title="Designed By YELU"
        data-placement="bottom"
      >
        <img
          src="../../assets/img/yelu.png"
          style="width: 50px; height: 50px"
          alt="YELU"
        />
      </RouterLink>
      <!-- 左上LOGO文字 -->
      <a
        role="button"
        class="nav-link ps-2 d-flex cursor-pointer align-items-center"
        :class="getTextColor()"
        aria-expanded="false"
      >
        <!-- <span>野 麓YELU</span> -->
        <strong>野 麓YELU</strong>
      </a>
      <!-- 以下是RWD時顯示 -->
      <RouterLink
        class="navbar-brand d-block d-md-none"
        :class="
          props.transparent || props.dark
            ? 'text-white'
            : 'font-weight-bolder ms-sm-3'
        "
        to="/"
        rel="tooltip"
        title="Designed and Coded by Creative Tim"
        data-placement="bottom"
        ><img
          src="../../assets/img/yelu.png"
          style="width: 50px; height: 50px"
          alt="YELU"
        />
      </RouterLink>

      <button
        class="navbar-toggler shadow-none ms-2"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navigation"
        aria-controls="navigation"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon mt-2">
          <span class="navbar-toggler-bar bar1"></span>
          <span class="navbar-toggler-bar bar2"></span>
          <span class="navbar-toggler-bar bar3"></span>
        </span>
      </button>

      <!-- RWD: 	
                  lg:生效範圍992px以上 ; md:生效範圍768px以上 ; sm:生效範圍576px以上
                  .d-block: Visible on all 
                  .d-none: Hidden on all不顯示於網頁上但存於DOM
                  例如:d-none d-lg-block:lg寬度時顯示,其餘尺寸none(代表小於992px即隱藏) ;  -->

      <div
        class="collapse navbar-collapse w-100 pt-3 pb-2 py-lg-0"
        id="navigation"
      >
        <ul class="navbar-nav navbar-nav-hover ms-auto">
          <!-- 導覽列第一個按鈕 -->
          <div>
            <li class="nav-item mx-2">
              <a
                role="button"
                class="nav-link ps-2 d-flex cursor-pointer align-items-center"
                :class="getTextColor()"
                aria-expanded="false"
              >
                <RouterLink
                  to="/pages/Yelu-pages/Camp/CampIndex"
                  class="dropdown-item border-radius-md"
                >
                  <i
                    class="material-icons opacity-6 me-2 text-md"
                    :class="getTextColor()"
                    >home</i
                  >
                  營區預訂
                </RouterLink>
              </a>
            </li>
          </div>

          <!-- <li class="nav-item dropdown dropdown-hover mx-2">
            <a role="button" class="nav-link ps-2 d-flex cursor-pointer align-items-center" :class="getTextColor()"
              id="dropdownMenuBlocks" data-bs-toggle="dropdown" aria-expanded="false">
              <i class="material-icons opacity-6 me-2 text-md" :class="getTextColor()"><span
                  class="material-symbols-outlined">home</span></i>
              營區預訂
              <img :src="getArrowColor()" alt="down-arrow" class="arrow ms-2 d-lg-block d-none" />
              <img :src="getArrowColor()" alt="down-arrow" class="arrow ms-1 d-lg-none d-block ms-auto" />
            </a>
            <div
              class="dropdown-menu dropdown-menu-end dropdown-menu-animation dropdown-md dropdown-md-responsive p-3 border-radius-lg mt-0 mt-lg-3"
                  aria-labelledby="dropdownMenuBlocks">
                  <div class="d-none d-lg-block">
                    <ul class="list-group">
                      <li class="nav-item dropdown dropdown-hover dropdown-subitem list-group-item border-0 p-0">
                        <a class="dropdown-item py-2 ps-3 border-radius-md" href="javascript:;">
                          <router-link to="/pages/Yelu-pages/camp/Sections/CampNorth">
                          <div class="d-flex">
                            <div class="w-100 d-flex align-items-center justify-content-between">
                              <div>
                                  <span class="dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0">
                                    北部</span>
                                <span class="text-sm">North District</span>
                              </div>
                         
                            </div>
                          </div></router-link>
                        </a>

                      </li>
                      <li class="nav-item dropdown dropdown-hover dropdown-subitem list-group-item border-0 p-0">
                        <a class="dropdown-item py-2 ps-3 border-radius-md" href="javascript:;">
                          <router-link to="/pages/Yelu-pages/camp/Sections/CampWest">
                          <div class="d-flex">
                            <div class="w-100 d-flex align-items-center justify-content-between">
                              <div>
                                  <span
                                    class="dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0">
                                    中部</span>
                                <span class="text-sm">Central District</span>
                              </div>
                        
                            </div>
                          </div></router-link>
                        </a>

                      </li>
                      <li class="nav-item dropdown dropdown-hover dropdown-subitem list-group-item border-0 p-0">
                        <a class="dropdown-item py-2 ps-3 border-radius-md" href="javascript:;">
                          <router-link to="/pages/Yelu-pages/camp/Sections/CampSouth">
                          <div class="d-flex">
                            <div class="w-100 d-flex align-items-center justify-content-between">
                              <div>
                                  <span
                                    class="dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0">
                                    南部</span>
                                <span class="text-sm">South District</span>
                              </div>
                          
                            </div>
                          </div></router-link>
                        </a>

                      </li>
                      <li class="nav-item dropdown dropdown-hover dropdown-subitem list-group-item border-0 p-0">
                        <a class="dropdown-item py-2 ps-3 border-radius-md" href="javascript:;">
                          <router-link to="/pages/Yelu-pages/camp/Sections/CampEast">
                          <div class="d-flex">
                            <div class="w-100 d-flex align-items-center justify-content-between">
                              <div>
                                  <span
                                    class="dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0">
                                    東部</span>
                                <span class="text-sm">East District</span>
                              </div>
                         
                            </div>
                          </div></router-link>
                        </a>

                  </li>
                </ul>
              </div>
              以下是為了設定RWD 
              <div class="row d-lg-none">
                <div class="col-md-12">
                  <RouterLink class="dropdown-item ps-3 border-radius-md mb-1" :to="{ name: 'camp' }">
                    北部
                  </RouterLink>
                  <RouterLink class="dropdown-item ps-3 border-radius-md mb-1" :to="{ name: 'camp' }">
                    中部
                  </RouterLink>
                  <RouterLink class="dropdown-item ps-3 border-radius-md mb-1" :to="{ name: 'camp' }">
                    南部
                  </RouterLink>
                  <RouterLink class="dropdown-item ps-3 border-radius-md mb-1" :to="{ name: 'camp' }">
                    東部
                  </RouterLink>
                </div>
              </div>
            </div>
          </li> -->

          <!-- 導覽列第二個按鈕 -->
          <li class="nav-item dropdown dropdown-hover mx-2">
            <a
              role="button"
              class="nav-link ps-2 d-flex cursor-pointer align-items-center"
              :class="getTextColor()"
              id="dropdownMenuBlocks"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <i
                class="material-icons opacity-6 me-2 text-md"
                :class="getTextColor()"
                ><span class="material-symbols-outlined">map</span></i
              >
              行程選擇
              <img
                :src="getArrowColor()"
                alt="down-arrow"
                class="arrow ms-2 d-lg-block d-none"
              />
              <img
                :src="getArrowColor()"
                alt="down-arrow"
                class="arrow ms-1 d-lg-none d-block ms-auto"
              />
            </a>
            <div
              class="dropdown-menu dropdown-menu-end dropdown-menu-animation dropdown-md dropdown-md-responsive p-3 border-radius-lg mt-0 mt-lg-3"
              aria-labelledby="dropdownMenuBlocks"
            >
              <div class="d-none d-lg-block">
                <ul class="list-group">
                  <li
                    class="nav-item dropdown dropdown-hover dropdown-subitem list-group-item border-0 p-0"
                  >
                    <a
                      class="dropdown-item py-2 ps-3 border-radius-md"
                      href="javascript:;"
                    >
                      <router-link
                        to="/pages/Yelu-pages/Self/stepall/step1"
                        class="dropdown-item border-radius-md"
                      >
                        <div class="d-flex">
                          <div
                            class="w-100 d-flex align-items-center justify-content-between"
                          >
                            <div>
                              <span
                                class="dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0"
                              >
                                自選行程</span
                              >

                              <span class="text-sm">Self-guided Camp</span>
                            </div>
                            <!-- <img :src="downArrow" alt="down-arrow" class="arrow" /> -->
                          </div>
                        </div>
                      </router-link>
                    </a>
                  </li>
                  <li
                    class="nav-item dropdown dropdown-hover dropdown-subitem list-group-item border-0 p-0"
                  >
                    <a
                      class="dropdown-item py-2 ps-3 border-radius-md"
                      href="javascript:;"
                    >
                      <RouterLink
                        :to="{ name: 'set' }"
                        class="dropdown-item border-radius-md"
                      >
                        <div class="d-flex">
                          <div
                            class="w-100 d-flex align-items-center justify-content-between"
                          >
                            <div>
                              <span
                                class="dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0"
                              >
                                套裝行程</span
                              >

                              <span class="text-sm">Package Camp</span>
                            </div>
                            <!-- <img :src="downArrow" alt="down-arrow" class="arrow" /> -->
                          </div>
                        </div>
                      </RouterLink>
                    </a>
                  </li>
                </ul>
              </div>
              <!-- 以下是為了設定RWD -->
              <div class="row d-lg-none">
                <div class="col-md-12">
                  <RouterLink
                    class="dropdown-item ps-3 border-radius-md mb-1"
                    :to="{ name: 'self' }"
                  >
                    自選行程
                  </RouterLink>
                  <RouterLink
                    class="dropdown-item ps-3 border-radius-md mb-1"
                    :to="{ name: 'set' }"
                  >
                    套裝行程
                  </RouterLink>
                </div>
              </div>
            </div>
          </li>

          <!-- 導覽列第三個按鈕 -->
          <div>
            <li class="nav-item mx-2">
              <a
                role="button"
                class="nav-link ps-2 d-flex cursor-pointer align-items-center"
                :class="getTextColor()"
                aria-expanded="false"
              >
                <RouterLink
                  to="/pages/Yelu-pages/act/ActIndex"
                  class="dropdown-item border-radius-md"
                >
                  <i
                    class="material-icons opacity-6 me-2 text-md"
                    :class="getTextColor()"
                    >hiking</i
                  >
                  當地活動
                </RouterLink>
              </a>
            </li>
          </div>

          <!-- 導覽列第四個按鈕 -->
          <div>
            <li class="nav-item mx-2">
              <a
                role="button"
                class="nav-link ps-2 d-flex cursor-pointer align-items-center"
                :class="getTextColor()"
                aria-expanded="false"
              >
                <RouterLink
                  :to="{ name: 'shop' }"
                  class="dropdown-item border-radius-md"
                >
                  <i
                    class="material-icons opacity-6 me-2 text-md"
                    :class="getTextColor()"
                    >local_mall</i
                  >
                  露營商店
                </RouterLink>
              </a>
            </li>
          </div>

          <!-- 導覽列第五個按鈕 -->
          <div>
            <li class="nav-item mx-2">
              <a
                role="button"
                class="nav-link ps-2 d-flex cursor-pointer align-items-center"
                :class="getTextColor()"
                aria-expanded="false"
              >
                <RouterLink
                  :to="{ name: 'member' }"
                  class="dropdown-item border-radius-md"
                >
                  <i
                    class="material-icons opacity-6 me-2 text-md"
                    :class="getTextColor()"
                    >account_circle</i
                  >
                  會員中心
                </RouterLink>
              </a>
            </li>
          </div>

          <div>
            <li class="nav-item mx-2">
              <a
                role="button"
                class="nav-link ps-2 d-flex cursor-pointer align-items-center"
                :class="getTextColor()"
                aria-expanded="false"
              >
                <RouterLink
                  :to="{ name: 'totalcart' }"
                  class="dropdown-item border-radius-md"
                >
                  <i
                    class="material-icons opacity-6 me-2 text-md"
                    :class="getTextColor()"
                    title="購物車"
                    >local_mall</i
                  >
                </RouterLink>
              </a>
            </li>
          </div>

          <div>
            <li class="nav-item mx-2">
              <a
                role="button"
                class="nav-link ps-2 d-flex cursor-pointer align-items-center"
                :class="getTextColor()"
                aria-expanded="false"
              >
                <a
                  href="https://localhost:7120/"
                  class="dropdown-item border-radius-md"
                >
                  <i
                    class="material-icons opacity-6 me-2 text-md"
                    :class="getTextColor()"
                    >settings</i
                  >
                </a>
              </a>
            </li>
          </div>
        </ul>
      </div>
    </div>
  </nav>
  <!-- End Navbar -->
</template>
