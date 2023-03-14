import CampView from "@/views/YeluPages/Camp/CampView.vue";

export default [
  {
    path: "/pages/Yelu-pages/camp",
    name: "camp",
    component: CampView,
    children: [
      {
        path: "Sections/CampHot",
        name: "CampHot",
        component: () => import("../views/YeluPages/Camp/Sections/CampHot.vue"),
      },
      {
        path: "Sections/CampNorth",
        name: "CampNorth",
        component: () => import("../views/YeluPages/Camp/Sections/CampNorth.vue"),
      },
      {
        path: "Sections/CampWest",
        name: "CampWest",
        component: () => import("../views/YeluPages/Camp/Sections/CampWest.vue"),
      },
      {
        path: "Sections/CampSouth",
        name: "CampSouth",
        component: () => import("../views/YeluPages/Camp/Sections/CampSouth.vue"),
      },
      {
        path: "Sections/CampEast",
        name: "CampEast",
        component: () => import("../views/YeluPages/Camp/Sections/CampEast.vue"),
      },
    ]
  },
]