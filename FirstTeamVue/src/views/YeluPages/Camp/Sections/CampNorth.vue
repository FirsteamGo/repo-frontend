<script setup>
import { onMounted, onUnmounted, ref, reactive, computed } from "vue";
import axios from "axios";
//import axios from "axios";
// example components
import CampTransparentBlogCard from "../Sections/CampBlogCards/CampTransparentBlogCard.vue";
import CampBackgroundBlogCard from "../Sections/CampBlogCards/CampBackgroundBlogCard.vue";

import sun from "@/assets/img/ActImg/sun.jpg";

// const webApiBaseAddr = ref("https://localhost:7108/api/CampDetails")
// const MVCimages = ref("https://localhost:7120/images/")

// let Camp = reactive([])


// const getEmployeeDTOes = onMounted(() => {
//     axios.get(webApiBaseAddr.value).then(res => {
//         //console.log(res.data);
//         Camp.splice(0, res.data.length, ...res.data)
//         console.log(Camp);
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
                        <h1 class="bkc">北部營區</h1>
                    </div>
                </div>
            </el-header>
            <el-main>
                <section class="py-3">
                    <div class="row">
                        <div class="col-lg-2 col-md-12 col-12">
                            <CampBackgroundBlogCard :image="sun" title="北部營區" description="" />
                        </div>
                        <!-- <div class="col-lg-2 col-sm-6" v-for="item in Camp">
                                            <CampTransparentBlogCard :image="`${MVCimages}${item.圖片}`" :title=item.營區名稱
                                                :description=item.營區介紹 :price=item.單價 />
                                        </div> -->

                    </div>
                </section>
            </el-main>
        </el-container>
    </div>
</template>