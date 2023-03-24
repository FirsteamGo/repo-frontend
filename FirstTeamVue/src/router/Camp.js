import CampView from "@/views/YeluPages/Camp/CampView.vue";

export default [
  {
    path: "/pages/Yelu-pages/Camp",
    name: "camp",
    component: CampView,
    children: [
      {
        path: "CampAllCity",
        name: "CampAllCity",
        component: () => import("../views/YeluPages/Camp/Sections/CampAllCity.vue"),
      },
      {
        path: "CampAllCity/:whoCity",
        name: "CampAllCity-c",
        component: () => import("../views/YeluPages/Camp/Sections/CampAllCity.vue"),
      },
      {//營區首頁
        path: "CampIndex",
        name: "CampIndex",
        component: () => import("../views/YeluPages/Camp/Sections/CampIndex.vue"),
      },
      {
        path: "North",
        name: "CampNorth",
        component: () => import("../views/YeluPages/Camp/Sections/CampNorth.vue"),
      },
      {
        path: "West",
        name: "CampWest",
        component: () => import("../views/YeluPages/Camp/Sections/CampWest.vue"),
      },
      {
        path: "South",
        name: "CampSouth",
        component: () => import("../views/YeluPages/Camp/Sections/CampSouth.vue"),
      },
      {
        path: "East",
        name: "CampEast",
        component: () => import("../views/YeluPages/Camp/Sections/CampEast.vue"),
      },
    ]
  },
]