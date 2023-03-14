import SelfView from "@/views/YeluPages/Self/SelfView.vue";

//測試用頁面
import test from "@/views/YeluPages/Self/test.vue";
import test2 from "@/views/YeluPages/Self/test2.vue";
import stepall from "@/views/YeluPages/Self/stepall.vue";
// import shoppingcart from "@/views/YeluPages/shoppingcart.vue";

export default [
    {
        //test
        path: "/pages/landing-pages/test",
        name: "test",
        component: test,
    },
    {
        //test完刪除
        path: "/pages/landing-pages/test2",
        name: "test2",
        component: test2,
    },
    {
        //test完刪除
        path: "/pages/Yelu-pages/Self/stepall",
        name: "stepall",
        component: stepall,
        children: [
            {
                path: "YeluPages/shoppingcart",
                name: "shoppingcart",
                component: () => import("../views/YeluPages/shoppingcart.vue"),
            },
        ]
    },
    // {

    //   path: "/pages/Yelu-pages/shoppingcart",
    //   name: "shoppingcart",
    //   component: shoppingcart,

    // },


    {
        path: "/pages/Yelu-pages/self",
        name: "self",
        component: SelfView,
    },
]