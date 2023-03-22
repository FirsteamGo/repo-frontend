<script setup>
import { onMounted, onUnmounted, ref, reactive, computed } from "vue";
import axios from "axios";
import { useActDataAtore } from "../../../../stores/ActData.js"

import ActTransparentBlogCard from "../Sections/ActBlogCards/ActTransparentBlogCard.vue";
import ActBackgroundBlogCard from "../Sections/ActBlogCards/ActBackgroundBlogCard.vue";

import sun from "@/assets/img/ActImg/sun.jpg";
import Breadcrumbs from "@/examples/Breadcrumbs.vue";

const SportAll = useActDataAtore();
onMounted(SportAll.SportActGet)

// const webApiBaseAddr = ref("https://localhost:7108/api/ActDetails")
// const MVCimages = ref("https://localhost:7120/images/")
// const dialogVisible = ref(false)
// const ActD = reactive([])
// //const ActDID = reactive([])
// const 活動id = ref(0)
// const 營區id = ref(0)
// const 營區名稱 = ref('')
// const 地區 = ref('')
// const 縣市 = ref('')
// const 活動方式 = ref('')
// const 活動種類 = ref('')
// const 活動名稱 = ref('')
// const 活動介紹 = ref('')
// const 活動圖片 = ref('')
// const 門票價格 = ref(0)
// const Sport = reactive({ "運動": [], });

//api抓資料
// onMounted(async () => {
//     await axios.get(webApiBaseAddr.value).then(res => {
//         //console.log(res.data);
//         for (let i = 0; i < res.data.length; i++) {
//             const AllAct = res.data[i];
//             const AllArea = AllAct.活動方式;

//             if (Sport[AllArea]) {
//                 Sport[AllArea].push(AllAct);

//             } else {
//                 console.log(`Unknown region: ${AllArea}`);
//             }
//         }
//     }).catch(err => {
//         console.log(err);
//     })
// })


//彈跳視窗使用
// let Actdetail = (活動id) => {
//     var ActD = []

//     for (let i = 0; i < Sport.運動.length; i++) {

//         var item = Sport.運動[i]
//         //console.log(item);

//         if (item.活動id == 活動id) {

//             item.Edit = true;
//             營區id.value = item.營區id;
//             營區名稱.value = item.營區名稱;
//             地區.value = item.地區;
//             縣市.value = item.縣市;
//             活動方式.value = item.活動方式;
//             活動種類.value = item.活動種類;
//             活動名稱.value = item.活動名稱;
//             活動介紹.value = item.活動介紹;
//             活動圖片.value = item.活動圖片;
//             門票價格.value = item.門票價格;
//         }
//         else { item.Edit = false; }

//         ActD.push(item);
//     }
//     Sport.運動.splice(0, ActD.length, ...ActD)
// }

</script>

<template>
    <div class="">
        <el-container>
            <el-header>
                <Breadcrumbs :routes="[
                    { label: '首頁', route: '/' },
                    { label: '當地活動', route: '/pages/Yelu-pages/act/ActIndex' },
                    { label: '運動' },]" />

            </el-header>
            <el-main>
                <section class="py-3">
                    <div class="row">
                        <!-- 左邊導覽卡片 -->
                        <div class="col-lg-2 col-md-12 col-12">
                            <ActBackgroundBlogCard :image="sun" title="最棒的戶外挑戰" description="" />
                        </div>
                        <!-- 主頁卡片 -->
                        <div class="card m-3 col-lg-2 col-sm-6" v-for="item in SportAll.Sport.運動">
                            <ActTransparentBlogCard :image="`${SportAll.MVCimages}${item.活動圖片}`" :title=item.活動名稱 />
                            <div style="display: flex; justify-content: flex-start;">
                                <div class="d-flex mt-3">
                                    <label class="form-lable"><span class="material-icons">pin_drop</span> {{ item.縣市
                                    }}</label>
                                    <label class="form-lable"><span class="material-icons">festival</span> {{ item.營區名稱
                                    }}</label>
                                </div>
                            </div>

                            <div>
                                <label class="form-lable"><span class="material-icons">attach_money</span> TWD <span
                                        class="text-primary">{{ item.門票價格 }}</span> /次</label>
                            </div>

                            <div>
                                <el-button type="info" class="text-lg font-weight-bolder icon-move-right"
                                    @click="{ SportAll.SportDialog(item.活動id); SportAll.dialogVisible = true }">
                                    詳細資訊<i class="fas fa-arrow-right text-xs ms-1"></i>
                                </el-button>

                                <!-- 重要!!!這邊要導到自選行程第二步!!!!!!! -->
                                <RouterLink to="/pages/Yelu-pages/Self/Sections/step2">
                                    <el-button type="warning" class=" text-lg font-weight-bolder m-2"
                                        @click="SelfSet(item.營區細項id)">
                                        <span class="material-icons ">add_shopping_cart</span>
                                    </el-button>
                                </RouterLink>
                            </div>
                        </div>
                    </div>





                    <!-- 彈跳視窗 -->
                    <div>
                        <el-dialog v-model="SportAll.dialogVisible" title="活動詳細資訊" width="50%" draggable>
                            <div class="modal-header">
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <span class="dialog-footer">
                                <div>
                                    <img :src="`${SportAll.MVCimages}${SportAll.ActSport.活動圖片}`"
                                        style="width: 400px; height: 300px;">
                                </div>
                                <div>
                                    <label class="form-lable">
                                        <h4>活動名稱：<small class="text-muted"> {{ SportAll.ActSport.活動名稱 }}</small></h4>
                                    </label>

                                </div>
                                <div>
                                    <label class="form-lable">
                                        <h4>活動介紹：<small class="text-muted"> {{ SportAll.ActSport.活動介紹 }}</small></h4>
                                    </label>

                                </div>
                                <div>
                                    <label class="form-lable"><span class="material-icons">festival
                                        </span>營區名稱 | {{ SportAll.ActSport.營區名稱 }}</label>
                                </div>
                                <div>
                                    <label class="form-lable"><span class="material-icons">pin_drop
                                        </span>地區 | {{ SportAll.ActSport.地區 }}</label>
                                </div>
                                <div>
                                    <label class="form-lable"><span class="material-icons">pin_drop
                                        </span>縣市 | {{ SportAll.ActSport.縣市 }}</label>
                                </div>
                                <div>
                                    <label class="form-lable">活動方式 | {{ SportAll.ActSport.活動方式 }} </label>
                                </div>
                                <div>
                                    <label class="form-lable">活動種類 | {{ SportAll.ActSport.活動種類 }} </label>
                                </div>
                                <div>
                                    <label class="form-lable"> TWD <span class="text-primary">{{ SportAll.ActSport.門票價格
                                    }}</span> /次</label>
                                </div>

                            </span>
                        </el-dialog>
                    </div>
                </section>
            </el-main>
        </el-container>
    </div>
</template>