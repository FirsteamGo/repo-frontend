import SelfView from "@/views/YeluPages/Self/SelfView.vue";

//測試用頁面
import test from "@/views/YeluPages/Self/test.vue";
import test2 from "@/views/YeluPages/Self/test2.vue";
import stepall from "@/views/YeluPages/Self/stepall.vue";
import selfshoppingcart from "@/views/YeluPages/shoppingcart/selfshoppingcart.vue";

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
        //在stepall裡面塞selfshoppinglist.vue
        path: "/pages/Yelu-pages/Self/stepall",
        name: "stepall",
        component: stepall,
        // children: [
        //     {
        //         path: "selfshoppingcart",
        //         name: "selfshoppingcart",
        //         component: () => import("../views/YeluPages/shoppingcart/selfshoppingcart.vue"),
        //     },
        // ]
    },
    {

        path: "/pages/Yelu-pages/selfshoppingcart",
        name: "selfshoppingcart",
        component: selfshoppingcart,

    },


    {
        path: "/pages/Yelu-pages/self",
        name: "self",
        component: SelfView,
    },
]