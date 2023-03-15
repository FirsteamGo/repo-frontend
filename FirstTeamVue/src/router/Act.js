import ActView from "@/views/YeluPages/Act/ActView.vue";

export default [
    {
        path: "/pages/Yelu-pages/act",
        name: "act",
        component: ActView,
        children: [
            {
                path: "Sections/ActHot",
                name: "ActHot",
                component: () => import("../views/YeluPages/Act/Sections/ActHot.vue"),
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
                component: () => import("../views/YeluPages/Act/Sections/ActNorth.vue"),

            },
            {
                path: "Sections/West",
                name: "ActWest",
                component: () => import("../views/YeluPages/Act/Sections/ActWest.vue"),
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
                component: () => import("../views/YeluPages/Act/Sections/ActSouth.vue"),
            },
            {
                path: "Sections/East",
                name: "ActEast",
                component: () => import("../views/YeluPages/Act/Sections/ActEast.vue"),
            },
        ]
    },
]