import ActView from "@/views/YeluPages/Act/ActView.vue";

export default [
    {
        path: "/pages/Yelu-pages/act",
        name: "act",
        component: ActView,
        children: [
            {//熱門精選
                path: "Sections/ActHot",
                name: "ActHot",
                component: () => import("../views/YeluPages/Act/Sections/ActNoUse/ActHot.vue"),
                children: [
                    {
                        path: "ActBlogCards/ActBlogCardValue",
                        name: "ActBlogCardValue",
                        component: () => import("../views/YeluPages/Act/Sections/ActBlogCards/ActBlogCardValue.vue")
                    },
                ]
            },
            {
                path: "Sections/North",
                name: "ActNorth",
                component: () => import("../views/YeluPages/Act/Sections/ActNoUse/ActNorth.vue"),

            },
            {
                path: "Sections/West",
                name: "ActWest",
                component: () => import("../views/YeluPages/Act/Sections/ActNoUse/ActWest.vue"),
                children: [
                    {
                        path: "ActBlogCards/ActBlogCardValue",
                        name: "ActBlogCardValue",
                        component: () => import("../views/YeluPages/Act/Sections/ActBlogCards/ActBlogCardValue.vue")
                    },
                ]
            },
            {
                path: "Sections/South",
                name: "ActSouth",
                component: () => import("../views/YeluPages/Act/Sections/ActNoUse/ActSouth.vue"),
            },
            {
                path: "Sections/East",
                name: "ActEast",
                component: () => import("../views/YeluPages/Act/Sections/ActNoUse/ActEast.vue"),
            },
            {//活動首頁
                path: "Sections/ActIndex",
                name: "ActIndex",
                component: () => import("../views/YeluPages/Act/Sections/ActIndex.vue"),
            },
            {//活動方式:活動
                path: "Sections/Event",
                name: "ActEvent",
                component: () => import("../views/YeluPages/Act/Sections/Event.vue"),
            },
            {//活動方式:景點
                path: "Sections/ViewPoint",
                name: "ActViewPoint",
                component: () => import("../views/YeluPages/Act/Sections/ViewPoint.vue"),
            },
            {//活動方式:運動
                path: "Sections/Sport",
                name: "ActSport",
                component: () => import("../views/YeluPages/Act/Sections/Sport.vue"),
            },
            {//活動方式:文化
                path: "Sections/Culture",
                name: "ActCulture",
                component: () => import("../views/YeluPages/Act/Sections/Culture.vue"),
            },
            {//活動方式:水上
                path: "Sections/WaterAct",
                name: "WaterAct",
                component: () => import("../views/YeluPages/Act/Sections/WaterAct.vue"),
            },
            {//活動方式:觀光
                path: "Sections/Tour",
                name: "ActTour",
                component: () => import("../views/YeluPages/Act/Sections/Tour.vue"),
            },
        ]
    },
]