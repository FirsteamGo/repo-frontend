import ActView from "@/views/YeluPages/Act/ActView.vue";

export default [
    {
        path: "/pages/Yelu-pages/act",
        name: "act",
        component: ActView,
        children: [
            {//四地區
                path: "ActAllAera",
                name: "ActAllAera",
                component: () => import("../views/YeluPages/Act/Sections/ActAllAera.vue"),
            },
            {//四地區參數
                path: "ActAllAera/:whoAera",
                name: "ActAllAera-a",
                component: () => import("../views/YeluPages/Act/Sections/ActAllAera.vue"),
            },
            {//12縣市
                path: "ActAllCity",
                name: "ActAllCity",
                component: () => import("../views/YeluPages/Act/Sections/ActAllCity.vue"),
            },
            {//12縣市參數
                path: "ActAllCity/:whoCity",
                name: "ActAllCity-a",
                component: () => import("../views/YeluPages/Act/Sections/ActAllCity.vue"),
            },
            {//熱門精選
                path: "ActHot",
                name: "ActHot",
                component: () => import("../views/YeluPages/Act/Sections/ActHot.vue"),
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