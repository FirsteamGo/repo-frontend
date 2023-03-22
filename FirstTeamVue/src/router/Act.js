import ActView from "@/views/YeluPages/Act/ActView.vue";

export default [
    {
        path: "/pages/Yelu-pages/act",
        name: "act",
        component: ActView,
        children: [
            {//熱門精選
                path: "ActHot",
                name: "ActHot",
                component: () => import("../views/YeluPages/Act/Sections/ActHot.vue"),
            },
            {
                path: "North",
                name: "ActNorth",
                component: () => import("../views/YeluPages/Act/Sections/ActNoUse/ActNorth.vue"),

            },
            {
                path: "West",
                name: "ActWest",
                component: () => import("../views/YeluPages/Act/Sections/ActNoUse/ActWest.vue"),
            },
            {
                path: "South",
                name: "ActSouth",
                component: () => import("../views/YeluPages/Act/Sections/ActNoUse/ActSouth.vue"),
            },
            {
                path: "East",
                name: "ActEast",
                component: () => import("../views/YeluPages/Act/Sections/ActNoUse/ActEast.vue"),
            },
            {//活動首頁
                path: "ActIndex",
                name: "ActIndex",
                component: () => import("../views/YeluPages/Act/Sections/ActIndex.vue"),
            },
            {//活動方式:活動
                path: "Event",
                name: "ActEvent",
                component: () => import("../views/YeluPages/Act/Sections/Event.vue"),
            },
            {//活動方式:景點
                path: "ViewPoint",
                name: "ActViewPoint",
                component: () => import("../views/YeluPages/Act/Sections/ViewPoint.vue"),
            },
            {//活動方式:運動
                path: "Sport",
                name: "ActSport",
                component: () => import("../views/YeluPages/Act/Sections/Sport.vue"),
            },
            {//活動方式:文化
                path: "Culture",
                name: "ActCulture",
                component: () => import("../views/YeluPages/Act/Sections/Culture.vue"),
            },
            {//活動方式:水上
                path: "WaterAct",
                name: "WaterAct",
                component: () => import("../views/YeluPages/Act/Sections/WaterAct.vue"),
            },
            {//活動方式:觀光
                path: "Tour",
                name: "ActTour",
                component: () => import("../views/YeluPages/Act/Sections/Tour.vue"),
            },
        ]
    },
]