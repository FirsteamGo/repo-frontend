<script setup>
// example components
import TransparentBlogCard from "../../../../examples/cards/blogCards/TransparentBlogCard.vue";
import BackgroundBlogCard from "../../../../examples/cards/blogCards/BackgroundBlogCard.vue";
import CenteredBlogCard from "../../../../examples/cards/blogCards/CenteredBlogCard.vue";

//Vue Material Kit 2 components
import tp from "@/assets/img/ActImg/Taipei.jpg";
import tc from "@/assets/img/ActImg/Taichung.jpg";
import tn from "@/assets/img/ActImg/Tainan.jpg";
import tt from "@/assets/img/ActImg/Taitung.jpg";
import abc from "@/assets/img/ActImg/123.jpeg";
import sukra from "@/assets/img/ActImg/sukra.jpg";
import gf from "@/assets/img/ActImg/9F.jpg";
import sun from "@/assets/img/ActImg/sun.jpg";
import flower from "@/assets/img/ActImg/flower.jpg";
</script>


<template>
    <el-carousel :interval="4000" type="card" height="200px">
        <el-carousel-item v-for="item in 6" :key="item">
            <h3 text="2xl" justify="center">{{ item }}</h3>
        </el-carousel-item>
    </el-carousel>



    <div class="common-layout">
        <el-container>
            <el-header>
                <div class="row">
                    <div class="col-lg-6">
                        <h1 class="mb-5">熱門精選</h1>
                    </div>
                </div>
            </el-header>
            <el-main>
                <section class="py-3">
                    <div class="row">
                        <div class="col-lg-3 col-md-12 col-12 ">
                            <BackgroundBlogCard :image="abc" title="熱門精選" description="" />
                        </div>
                        <div class="col-lg-3 col-sm-6">
                            <TransparentBlogCard :image="sukra" title="2023 福壽山農場千櫻園＆武陵農場賞花一日遊" description="" />
                        </div>
                        <div class="col-lg-3 col-sm-6">
                            <TransparentBlogCard :image="flower" title="2023 九份老街＆野柳＆平溪十分一日遊" description="" />
                        </div>
                        <div class="col-lg-3 col-sm-6">
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
                        <div class="col-lg-3 col-md-12 col-12 ">
                            <BackgroundBlogCard :image="tp" title="所有你能想像的繁華都在這裡" description="" />
                        </div>
                        <div class="col-lg-3 col-sm-6">
                            <TransparentBlogCard :image="sukra" title="2023 福壽山農場千櫻園＆武陵農場賞花一日遊" description="" />
                        </div>
                        <div class="col-lg-3 col-sm-6">
                            <TransparentBlogCard :image="flower" title="2023 九份老街＆野柳＆平溪十分一日遊" description="" />
                        </div>
                        <div class="col-lg-3 col-sm-6">
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
                        <h1 class="mb-5">中部</h1>
                    </div>
                </div>
            </el-header>
            <el-main>
                <section class="py-3">
                    <div class="row">
                        <div class="col-lg-3 col-md-12 col-12 ">
                            <BackgroundBlogCard :image="tc" title="政佑的家在這裡" description="" />
                        </div>
                        <div class="col-lg-3 col-sm-6">
                            <TransparentBlogCard :image="sukra" title="2023 福壽山農場千櫻園＆武陵農場賞花一日遊" description="" />
                        </div>
                        <div class="col-lg-3 col-sm-6">
                            <TransparentBlogCard :image="flower" title="2023 九份老街＆野柳＆平溪十分一日遊" description="" />
                        </div>
                        <div class="col-lg-3 col-sm-6">
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
                        <div class="col-lg-3 col-md-12 col-12 ">
                            <BackgroundBlogCard :image="tn" title="古色古香美食天地" description="" />
                        </div>
                        <div class="col-lg-3 col-sm-6">
                            <TransparentBlogCard :image="sukra" title="2023 福壽山農場千櫻園＆武陵農場賞花一日遊" description="" />
                        </div>
                        <div class="col-lg-3 col-sm-6">
                            <TransparentBlogCard :image="flower" title="2023 九份老街＆野柳＆平溪十分一日遊" description="" />
                        </div>
                        <div class="col-lg-3 col-sm-6">
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
                        <div class="col-lg-3 col-md-12 col-12 ">
                            <BackgroundBlogCard :image="tt" title="望著美麗的深深太平洋" description="" />
                        </div>
                        <div class="col-lg-3 col-sm-6">
                            <TransparentBlogCard :image="sukra" title="2023 福壽山農場千櫻園＆武陵農場賞花一日遊" description="" />
                        </div>
                        <div class="col-lg-3 col-sm-6">
                            <TransparentBlogCard :image="flower" title="2023 九份老街＆野柳＆平溪十分一日遊" description="" />
                        </div>
                        <div class="col-lg-3 col-sm-6">
                            <TransparentBlogCard :image="sun" title="2023 台灣桃園｜東眼山國家森林遊樂區" description="" />
                        </div>
                    </div>
                </section>
            </el-main>
        </el-container>
    </div>
</template>
<style scoped>
.el-carousel__item h3 {
    color: #475669;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
    text-align: center;
}

.el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
    background-color: #d3dce6;
}
</style>
