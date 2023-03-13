<script setup>
import { onMounted, onUnmounted, ref, reactive, computed } from "vue";
import axios from "axios";
// example components
import ActTransparentBlogCard from "../Sections/ActBlogCards/ActTransparentBlogCard.vue";
import ActBackgroundBlogCard from "../Sections/ActBlogCards/ActBackgroundBlogCard.vue";

import sun from "@/assets/img/ActImg/sun.jpg";

const webApiBaseAddr = ref("https://localhost:7108/api/ActDetails")
const MVCimages = ref("https://localhost:7120/images/")

let Act = reactive([])
let north = reactive([])

const getEmployeeDTOes = onMounted(() => {
    axios.get(webApiBaseAddr.value).then(res => {
        //console.log(res.data);
        Act.splice(0, res.data.length, ...res.data)
        console.log(Act);
    }).catch(err => {
        console.log(err);
    })
})

// const getEmployeeDTOes = onMounted(() => {
//     axios.get(webApiBaseAddr.value).then(res => {
//         //console.log(res.data);
//         for (let i = 0; i < res.data.length; i++) {
//             if (res.data[i].地區 == "北區") {
//                 north = res.data[i]
//             }
//         }
//         Act.splice(0, north.length, ...north.data)
//         console.log(Act);
//     }).catch(err => {
//         console.log(err);
//     })
// })
</script>

<template>
    <div class="">
        <el-container>
            <el-header>
                <div class="row">
                    <div class="">
                        <h1 class="bkc">熱門精選</h1>
                    </div>
                </div>
            </el-header>
            <el-main>
                <section class="py-3">
                    <div class="row">
                        <div class="col-lg-2 col-md-12 col-12">
                            <ActBackgroundBlogCard :image="sun" title="熱門精選" description="" />
                        </div>
                        <div class="col-lg-2 col-sm-6" v-for="item in Act">
                            <ActTransparentBlogCard :image="`${MVCimages}${item.活動圖片}`" :title=item.活動名稱
                                :description=item.活動種類 :price=item.門票價格 />
                        </div>
                    </div>
                </section>
            </el-main>
        </el-container>
    </div>
</template>