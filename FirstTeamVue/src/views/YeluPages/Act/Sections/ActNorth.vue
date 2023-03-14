<script setup>
import { onMounted, onUnmounted, ref, reactive, computed } from "vue";
import axios from "axios";
// example components
import ActTransparentBlogCard from "../Sections/ActBlogCards/ActTransparentBlogCard.vue";
import ActBackgroundBlogCard from "../Sections/ActBlogCards/ActBackgroundBlogCard.vue";

//Vue Material Kit 2 components
import tp from "@/assets/img/ActImg/Taipei.jpg";


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
</script>

<template>
    <div class="">
        <el-container>
            <el-header>
                <div class="row">
                    <div class="">
                        <h1 class="bkc">北部</h1>
                    </div>
                </div>
            </el-header>
            <el-main>
                <section class="py-3">
                    <div class="row">
                        <div class="col-lg-2 col-md-12 col-12">
                            <ActBackgroundBlogCard :image="tp" title="新北 桃園 新竹" description="所有你能想像的繁華都在這裡" />
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