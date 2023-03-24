import MemberView from "@/views/YeluPages/Member/MemberView.vue";
import MemberView2 from "@/views/YeluPages/Member/MemberView2.vue";

export default [
    {
        path: "/pages/Yelu-pages/member",
        name: "member",
        component: MemberView,
    },
    {
        path: "/pages/Yelu-pages/member2",
        name: "member2",
        component: MemberView2,
    },
]