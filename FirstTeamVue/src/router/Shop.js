import ShopView from "@/views/YeluPages/Shop/ShopView.vue";
export default [
  {
    path: "/pages/Yelu-pages/shop",
    name: "商店首頁",
    component: ShopView,
    children: [
      {
        path: "",
        name: "shop",
        component: () => import("../views/YeluPages/Shop/SPA/ShopHomePage.vue"),
      },
      {
        path: "SPA/tnf",
        name: "tnf",
        component: () => import("../views/YeluPages/Shop/SPA/con1_1.vue"),
      },
      {
        path: "SPA/snowpeak",
        name: "snowpeak",
        component: () => import("../views/YeluPages/Shop/SPA/con1_2.vue"),
      },
      {
        path: "SPA/asdomain",
        name: "砝瑯杯",
        component: () => import("../views/YeluPages/Shop/SPA/con2_1.vue"),
      },
      {
        path: "SPA/titan",
        name: "酒杯",
        component: () => import("../views/YeluPages/Shop/SPA/con2_2.vue"),
      },
      {
        path: "SPA/chair",
        name: "小森椅",
        component: () => import("../views/YeluPages/Shop/SPA/con3_1.vue"),
      },
      {
        path: "SPA/forChair",
        name: "椅子",
        component: () => import("../views/YeluPages/Shop/SPA/con3_2.vue"),
      },
      {
        path: "SPA/woof",
        name: "羊毛睡袋",
        component: () => import("../views/YeluPages/Shop/SPA/con4_1.vue"),
      },
      {
        path: "SPA/naturehike",
        name: "科技棉睡袋",
        component: () => import("../views/YeluPages/Shop/SPA/con4_2.vue"),
      },
      {
        path: "SPA/cloudsea",
        name: "雲海",
        component: () => import("../views/YeluPages/Shop/SPA/con5_1.vue"),
      },
      {
        path: "SPA/adria",
        name: "阿迪雅",
        component: () => import("../views/YeluPages/Shop/SPA/con5_2.vue"),
      },
    ],
  },
  // {
  //   path: "/pages/Yelu-pages/cart",
  //   name: "cart",
  //   component: () =>
  //     import("../views/YeluPages/Shop/shopsections/ShopCart.vue"),
  // },
];
