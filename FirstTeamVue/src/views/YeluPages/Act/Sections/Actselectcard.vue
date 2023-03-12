<script>
// import 熱門精選 from "./ActHot.vue";
// import 北部 from "./ActNorth.vue";
// import 中部 from "./ActWest.vue";
// import 南部 from "./ActSouth.vue";
// import 東部 from "./ActEast.vue";


// export default {
//     components: {
//         熱門精選,
//         北部,
//         中部,
//         南部,
//         東部,
//     },
//     data() {
//         return {
//             currentTab: '熱門精選',
//             tabs: ['熱門精選', '北部', '中部', '南部', '東部']
//         }
//     }
// }
</script>

<template>
    <!-- <div class="demo">
        <el-button v-for=" tab in tabs" :key="tab" size="large" type="info" class="butonleft text-lg font-weight-bolder"
            @click="currentTab = tab">
            {{ tab }}
        </el-button>
        <component :is="currentTab" class=""></component>
    </div> -->
    <div class="">
            <el-button type="info" text-lg font-weight-bolder >
            <router-link to="/pages/Yelu-pages/act/Sections/ActHot">熱門精選</router-link>           
            </el-button>
            <el-button  type="info" text-lg font-weight-bolder>
            <router-link to="/pages/Yelu-pages/act/Sections/ActNorth">北部</router-link>           
            </el-button>
            <el-button  type="info" text-lg font-weight-bolder>
            <router-link to="/pages/Yelu-pages/act/Sections/ActWest">中部</router-link>           
            </el-button>
            <el-button  type="info" text-lg font-weight-bolder>
            <router-link to="/pages/Yelu-pages/act/Sections/ActSouth">南部</router-link>           
            </el-button>
            <el-button  type="info" text-lg font-weight-bolder>
            <router-link to="/pages/Yelu-pages/act/Sections/ActEast">東部</router-link>           
            </el-button>  
        </div>           
</template>