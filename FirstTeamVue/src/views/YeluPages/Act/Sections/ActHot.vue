<script setup>
import Actcarousel from "./Actcarousel.vue";
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
    <Actcarousel />
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
                        <BackgroundBlogCard :image="abc" title="熱門精選" description="" />
                    </div>
                    <div class="col-lg-2 col-sm-6" v-for="item in Act">
                        <TransparentBlogCard :image="flower" :title=item.活動id :description=item.地區 />
                    </div>
                    <!-- <div class="col-lg-2 col-sm-6">
                            <TransparentBlogCard :image="flower" title="2023 九份老街＆野柳＆平溪十分一日遊"
                                description="走訪如仙境般的太平山國家森林" />
                        </div>
                        <div class="col-lg-2 col-sm-6">
                            <TransparentBlogCard :image="sun" title="2023 台灣桃園｜東眼山國家森林遊樂區" description="" />
                                                                    </div>
                                                                        <div class="col-lg-2 col-sm-6">
                                                                            <TransparentBlogCard :image="sun" title="2023 台灣桃園｜東眼山國家森林遊樂區" description="" />
                                                                        </div>
                                                                        <div class="col-lg-2 col-sm-6">
                                                                            <TransparentBlogCard :image="sun" title="2023 台灣桃園｜東眼山國家森林遊樂區" description="" />
                                                                        </div>
                                                                        <div class="col-lg-2 col-sm-6">
                                                                            <TransparentBlogCard :image="sun" title="2023 台灣桃園｜東眼山國家森林遊樂區" description="" />
                                                                        </div>
                                                                        <div class="col-lg-2 col-sm-6">
                                                                            <TransparentBlogCard :image="sun" title="2023 台灣桃園｜東眼山國家森林遊樂區" description="" />
                                                                        </div>
                                                                        <div class="col-lg-2 col-sm-6">
                                                                            <TransparentBlogCard :image="sun" title="2023 台灣桃園｜東眼山國家森林遊樂區" description="" />
                                                                        </div>
                                                                        <div class="col-lg-2 col-sm-6">
                                                                            <TransparentBlogCard :image="sun" title="2023 台灣桃園｜東眼山國家森林遊樂區" description="" />
                                                                        </div>
                                                                        <div class="col-lg-2 col-sm-6">
                                                                            <TransparentBlogCard :image="sun" title="2023 台灣桃園｜東眼山國家森林遊樂區" description="" />
                                                                        </div>
                                                                        <div class="col-lg-2 col-sm-6">
                                                                            <TransparentBlogCard :image="sun" title="2023 台灣桃園｜東眼山國家森林遊樂區" description="" />
                                                                        </div>
                                                                        <div class="col-lg-2 col-sm-6">
                                                                            <TransparentBlogCard :image="sun" title="2023 台灣桃園｜東眼山國家森林遊樂區" description="" />
                                                                        </div>
                                                                        <div class="col-lg-2 col-sm-6">
                                                                            <TransparentBlogCard :image="sun" title="2023 台灣桃園｜東眼山國家森林遊樂區" description="" />
                                                                        </div>
                                                                        <div class="col-lg-2 col-sm-6">
                                                                            <TransparentBlogCard :image="sun" title="2023 台灣桃園｜東眼山國家森林遊樂區" description="" />
                                                                        </div> -->
                    </div>
                </section>
            </el-main>
        </el-container>
    </div>
</template>
<style></style>