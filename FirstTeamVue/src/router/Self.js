import SelfView from "@/views/YeluPages/Self/SelfView.vue";

//測試用頁面
import test from "@/views/YeluPages/Self/test.vue";
import test2 from "@/views/YeluPages/Self/test2.vue";
import stepall from "@/views/YeluPages/Self/stepall.vue";
import totalcart from "@/views/YeluPages/shoppingcart/totalcart.vue";

export default [
    {
        //test
        path: "/pages/landing-pages/test",
        name: "test1",
        component: test,
    },
    {
        //test完刪除
        path: "/pages/landing-pages/test2",
        name: "test2",
        component: test2,
    },
    // {
    //     //在stepall裡面塞selfshoppinglist.vue
    //     path: "/pages/Yelu-pages/Self/stepall",
    //     name: "stepall",
    //     component: stepall,
    //     children: [
    //         {//自選第一步
    //             path: "step1",
    //             name: "step1",
    //             component: () => import("../views/YeluPages/Self/Sections/step1.vue"),
    //         },
    //         {//自選第二步
    //             path: "step2",
    //             name: "step2",
    //             component: () => import("../views/YeluPages/Self/Sections/step2.vue"),
    //         },
    //            {//自選第三步
    //             path: "step3",
    //             name: "step3",
    //             component: () => import("../views/YeluPages/Self/Sections/step3.vue"),
    //         },
    //     ]

    // },
    {

        path: "/pages/Yelu-pages/totalcart",
        name: "totalcart",
        component: totalcart,

    },


    {
        path: "/pages/Yelu-pages/self",
        name: "self",
        component: SelfView,
        children: [
            {
                //在stepall裡面塞selfshoppinglist.vue
                path: "stepall",
                name: "stepall",
                component: stepall,
                children: [
                    {//自選第一步
                        path: "step1",
                        name: "step1",
                        component: () => import("../views/YeluPages/Self/Sections/step1.vue"),
                    },
                    {//自選第二步
                        path: "step2",
                        name: "step2",
                        component: () => import("../views/YeluPages/Self/Sections/step2.vue"),
                        meta: {
                            method: 'step2Method'
                        },
                    },
                    {//自選第二步
                        path: "step2/:whoFunc",
                        name: "step2-p",
                        component: () => import("../views/YeluPages/Self/Sections/step2.vue"),
                    },
                    {//自選第三步
                        path: "step3",
                        name: "step3",
                        component: () => import("../views/YeluPages/Self/Sections/step3.vue"),
                    },
                    {//自選第三步
                        path: "step3/:whoFunc",
                        name: "step3-p",
                        component: () => import("../views/YeluPages/Self/Sections/step3.vue"),
                    },
                ]

            },
        ]
    },
]