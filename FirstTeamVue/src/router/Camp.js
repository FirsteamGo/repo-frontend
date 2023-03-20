import CampView from "@/views/YeluPages/Camp/CampView.vue";

export default [
  {
    path: "/pages/Yelu-pages/Camp",
    name: "camp",
    component: CampView,
    children: [
      {
        path: "Sections/CampHot",
        name: "CampHot",
        component: () => import("../views/YeluPages/Camp/Sections/CampHot.vue"),
      },
      {//營區首頁
        path: "CampIndex",
        name: "CampIndex",
        component: () => import("../views/YeluPages/Camp/Sections/CampIndex.vue"),
      },
      {
        path: "北部",
        name: "CampNorth",
        component: () => import("../views/YeluPages/Camp/Sections/CampNorth.vue"),
      },
      {
        path: "中部",
        name: "CampWest",
        component: () => import("../views/YeluPages/Camp/Sections/CampWest.vue"),
      },
      {
        path: "南部",
        name: "CampSouth",
        component: () => import("../views/YeluPages/Camp/Sections/CampSouth.vue"),
      },
      {
        path: "東部",
        name: "CampEast",
        component: () => import("../views/YeluPages/Camp/Sections/CampEast.vue"),
      },
    ]
  },
]