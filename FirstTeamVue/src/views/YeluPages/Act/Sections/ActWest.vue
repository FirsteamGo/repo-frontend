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
</script>

<template>
    <div class="">
        <el-container>
            <el-header>
                <div class="row">
                    <div class="">
                        <h1 class="bkc">中部</h1>
                    </div>
                </div>
            </el-header>
            <el-main>
                <section class="py-3">
                    <div class="row">
                        <div class="col-lg-2 col-md-12 col-12 ">
                            <BackgroundBlogCard :image="tc" title="彰化 台中 南投" description="" />
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
</template>