<script setup>
import { onMounted, onUnmounted, ref, reactive, computed } from "vue";
import axios from "axios";
// example components
import TransparentBlogCard from "../../../../examples/cards/blogCards/TransparentBlogCard.vue";
import BackgroundBlogCard from "../../../../examples/cards/blogCards/BackgroundBlogCard.vue";

//Vue Material Kit 2 components

import tp from "@/assets/img/ActImg/Taipei.jpg";
import tc from "@/assets/img/ActImg/Taichung.jpg";
import tn from "@/assets/img/ActImg/Tainan.jpg";
import tt from "@/assets/img/ActImg/Taitung.jpg";
import abc from "@/assets/img/ActImg/123.jpeg";
import sukra from "@/assets/img/ActImg/sukra.jpg";
import sun from "@/assets/img/ActImg/sun.jpg";
import flower from "@/assets/img/ActImg/flower.jpg";


const webApiBaseAddr = ref("https://localhost:7219/api/ActDetails")

let Act = reactive([])

const getEmployeeDTOes = onMounted(() => {
    axios.get(webApiBaseAddr.value).then(res => {
        //console.log(res.data);
        Act.splice(0, res.data.length, ...res.data)
        console.log(Act);
        

    }).catch(err => {
        console.log(err);
    })
})
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
                        <BackgroundBlogCard :image="sun" title="熱門精選" description="" />
                    </div>
                    <div class="col-lg-2 col-sm-6" v-for="item in Act"  >
                        <TransparentBlogCard :image=flower :title=item.活動名稱 :description=item.活動介紹 />
                    </div>                  
                </div>
                </section>
            </el-main>
        </el-container>
    </div>
</template>