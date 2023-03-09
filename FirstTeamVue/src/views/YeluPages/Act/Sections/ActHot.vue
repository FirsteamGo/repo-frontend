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
    <div class="tab">
        <el-container>
            <el-header>
                <div class="row">
                    <div class="col-lg-6">
                        <h2 class="bkc">熱門精選</h2>
                    </div>
                </div>
            </el-header>
            <el-main>
                <section class="">
                    <div class="row">
                        <div class="col-lg-2">
                            <BackgroundBlogCard :image="abc" title="熱門精選" description="" />
                        </div>
                        <div class="col-lg-2 col-sm-6">
                            <TransparentBlogCard :image="sukra" title="2023 福壽山農場千櫻園＆武陵農場賞花一日遊"
                                description="走訪如仙境般的太平山國家森林" />
                        </div>
                        <div class="col-lg-2 col-sm-6">
                            <TransparentBlogCard :image="flower" title="2023 九份老街＆野柳＆平溪十分一日遊"
                                description="熱血攀岩的同時，也能享受東北角海岸美景，登頂後，龍洞浩瀚的海岸線就在腳下" />
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
</template>
<style>
.bkc {
    margin-top: 10px;

}
</style>