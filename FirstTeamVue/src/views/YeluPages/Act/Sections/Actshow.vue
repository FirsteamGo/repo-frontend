<script setup>
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

import { reactive } from 'vue';

const images = reactive([
    { src: tp },
    { src: tc },
    { src: tn },
    { src: tt },
    { src: sukra },
    { src: sun },
]);


</script>


<template>
    <div class="common-layout">
        <el-container>
            <el-header>
                <div class="row">
                    <div class="col-lg-6">
                        <h2 class="mb-5">熱門精選</h2>
                    </div>
                </div>
            </el-header>
            <el-main>
                <section class="py-3">
                    <div class="row">
                        <div class="col-lg-2 col-md-12 col-12 ">
                            <BackgroundBlogCard :image="abc" title="熱門精選" description="" />
                        </div>
                        <div class="col-lg-2 col-sm-6">
                            <TransparentBlogCard :image="sukra" title="2023 福壽山農場千櫻園＆武陵農場賞花一日遊" description="" />
                        </div>
                        <div class="col-lg-2 col-sm-6">
                            <TransparentBlogCard :image="flower" title="2023 九份老街＆野柳＆平溪十分一日遊" description="" />
                        </div>
                        <div class="col-lg-2 col-sm-6">
                            <TransparentBlogCard :image="sun" title="2023 台灣桃園｜東眼山國家森林遊樂區" description="" />
                        </div>
                        <div class="col-lg-2 col-sm-6">
                            <TransparentBlogCard :image="sun" title="2023 台灣桃園｜東眼山國家森林遊樂區" description="" />
                        </div>
                    </div>
                </section>
            </el-main>
        </el-container>
    </div>
    <div class="common-layout">
        <el-container>
            <el-header>
                <div class="row">
                    <div class="col-lg-6">
                        <h1 class="mb-5">北部</h1>
                    </div>
                </div>
            </el-header>
            <el-main>
                <section class="py-3">
                    <div class="row">
                        <div class="col-lg-2 col-md-12 col-12 ">
                            <BackgroundBlogCard :image="tp" title="新北 桃園 新竹" description="所有你能想像的繁華都在這裡" />
                        </div>
                        <div class="col-lg-2 col-sm-6">
                            <TransparentBlogCard :image="sukra" title="2023 福壽山農場千櫻園＆武陵農場賞花一日遊" description="" />
                        </div>
                        <div class="col-lg-2 col-sm-6">
                            <TransparentBlogCard :image="flower" title="2023 九份老街＆野柳＆平溪十分一日遊" description="" />
                        </div>
                        <div class="col-lg-2 col-sm-6">
                            <TransparentBlogCard :image="sun" title="2023 台灣桃園｜東眼山國家森林遊樂區" description="" />
                        </div>
                    </div>
                </section>
            </el-main>
        </el-container>
    </div>
    <div class="common-layout">
        <el-container>
            <el-header>
                <div class="row">
                    <div class="col-lg-6">
                        <h2 class="mb-5">中部</h2>
                    </div>
                </div>
            </el-header>
            <el-main>
                <section class="py-3">
                    <div class="row">
                        <div class="col-lg-2 col-md-12 col-12 ">
                            <BackgroundBlogCard :image="tc" title="政佑的家在這裡" description="" />
                        </div>
                        <div class="col-lg-2 col-sm-6">
                            <TransparentBlogCard :image="sukra" title="2023 福壽山農場千櫻園＆武陵農場賞花一日遊" description="" />
                        </div>
                        <div class="col-lg-2 col-sm-6">
                            <TransparentBlogCard :image="flower" title="2023 九份老街＆野柳＆平溪十分一日遊" description="" />
                        </div>
                        <div class="col-lg-2 col-sm-6">
                            <TransparentBlogCard :image="sun" title="2023 台灣桃園｜東眼山國家森林遊樂區" description="" />
                        </div>
                    </div>
                </section>
            </el-main>
        </el-container>
    </div>
    <div class="common-layout">
        <el-container>
            <el-header>
                <div class="row">
                    <div class="col-lg-6">
                        <h1 class="mb-5">南部</h1>
                    </div>
                </div>
            </el-header>
            <el-main>
                <section class="py-3">
                    <div class="row">
                        <div class="col-lg-2 col-md-12 col-12 ">
                            <BackgroundBlogCard :image="tn" title="古色古香美食天地" description="" />
                        </div>
                        <div class="col-lg-2 col-sm-6">
                            <TransparentBlogCard :image="sukra" title="2023 福壽山農場千櫻園＆武陵農場賞花一日遊" description="" />
                        </div>
                        <div class="col-lg-2 col-sm-6">
                            <TransparentBlogCard :image="flower" title="2023 九份老街＆野柳＆平溪十分一日遊" description="" />
                        </div>
                        <div class="col-lg-2 col-sm-6">
                            <TransparentBlogCard :image="sun" title="2023 台灣桃園｜東眼山國家森林遊樂區" description="" />
                        </div>
                    </div>
                </section>
            </el-main>
        </el-container>
    </div>
    <div class="common-layout">
        <el-container>
        <el-header>
            <div class="row">
                <div class="col-lg-6">
                    <h1 class="mb-5">東部</h1>
                </div>
            </div>
        </el-header>
        <el-main>
                <section class="py-3">
                    <div class="row">
                        <div class="col-lg-2 col-md-12 col-12 ">
                            <BackgroundBlogCard :image="tt" title="望著美麗的深深太平洋" description="" />
                        </div>
                        <div class="col-lg-2 col-sm-6">
                            <TransparentBlogCard :image="sukra" title="2023 福壽山農場千櫻園＆武陵農場賞花一日遊" description="" />
                        </div>
                        <div class="col-lg-2 col-sm-6">
                            <TransparentBlogCard :image="flower" title="2023 九份老街＆野柳＆平溪十分一日遊" description="" />
                        </div>
                        <div class="col-lg-2 col-sm-6">
                            <TransparentBlogCard :image="sun" title="2023 台灣桃園｜東眼山國家森林遊樂區" description="" />
                        </div>
                    </div>
                </section>
            </el-main>
        </el-container>
    </div>

    <div>
        <!-- <button @click="content = 'name'">Name</button>
                            <button @click="content = 'date'">Date</button>
                            <button @click="content = 'lessons'">Lessons</button>
                            <button @click="content = 'apply'">Apply</button>
                            <hr>

                            <keep-alive>
                                <component :is="content"></component>
                            </keep-alive> -->
    </div>
</template>
<style scoped></style>
