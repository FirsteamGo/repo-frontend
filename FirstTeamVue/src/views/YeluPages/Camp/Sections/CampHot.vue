<script setup>
import { onMounted, onUnmounted, ref, reactive, computed } from "vue";
//import axios from "axios";
// example components
import CampTransparentBlogCard from "../Sections/CampBlogCards/CampTransparentBlogCard.vue";
import CampBackgroundBlogCard from "../Sections/CampBlogCards/CampBackgroundBlogCard.vue";

import sun from "@/assets/img/ActImg/sun.jpg";





</script>

<template>
    <div class="">
        <el-container>
            <el-header>
                <div class="row">
                    <div class="">
                    <h1 class="bkc">熱門營區</h1>
                </div>
            </div>
            </el-header>
            <el-main>
                <section class="py-3">
                    <div class="row">
                        <div class="col-lg-2 col-md-12 col-12">
                            <CampBackgroundBlogCard :image="sun" title="熱門營區" description="" />
                        </div>
                        <!-- <div class="col-lg-2 col-sm-6" v-for="item in NorthArea.北區">
                                                                <CampTransparentBlogCard :image="`${MVCimages}${item.活動圖片}`" :title=item.活動名稱
                                                                    :description=item.活動種類 :price=item.門票價格 />
                                                            </div> -->
                        <div class="col-lg-2 col-sm-6">
                            <CampTransparentBlogCard :image="sun" title="2023 九份老街＆野柳＆平溪十分一日遊" description="" />
                        </div>
                        <div class="col-lg-2 col-sm-6">
                            <CampTransparentBlogCard :image="sun" title="2023 台灣桃園｜東眼山國家森林遊樂區" description="" />
                        </div>
                        <div class="col-lg-2 col-sm-6">
                            <CampTransparentBlogCard :image="sun" title="2023 九份老街＆野柳＆平溪十分一日遊" description="" />
                        </div>
                        <div class="col-lg-2 col-sm-6">
                            <CampTransparentBlogCard :image="sun" title="2023 台灣桃園｜東眼山國家森林遊樂區" description="" />
                        </div>
                        <div class="col-lg-2 col-sm-6">
                            <CampTransparentBlogCard :image="sun" title="2023 九份老街＆野柳＆平溪十分一日遊" description="" />
                        </div>
                        <div class="col-lg-2 col-sm-6">
                            <CampTransparentBlogCard :image="sun" title="2023 台灣桃園｜東眼山國家森林遊樂區" description="" />
                        </div>
                        <div class="col-lg-2 col-sm-6">
                            <CampTransparentBlogCard :image="sun" title="2023 九份老街＆野柳＆平溪十分一日遊" description="" />
                        </div>
                        <div class="col-lg-2 col-sm-6">
                            <CampTransparentBlogCard :image="sun" title="2023 台灣桃園｜東眼山國家森林遊樂區" description="" />
                        </div>
                        <div class="col-lg-2 col-sm-6">
                            <CampTransparentBlogCard :image="sun" title="2023 九份老街＆野柳＆平溪十分一日遊" description="" />
                        </div>
                        <div class="col-lg-2 col-sm-6">
                            <CampTransparentBlogCard :image="sun" title="2023 台灣桃園｜東眼山國家森林遊樂區" description="" />
                        </div>
                        <div class="col-lg-2 col-sm-6">
                            <CampTransparentBlogCard :image="sun" title="2023 台灣桃園｜東眼山國家森林遊樂區" description="" />
                        </div>
                    </div>
                </section>
            </el-main>
        </el-container>
    </div>
</template>