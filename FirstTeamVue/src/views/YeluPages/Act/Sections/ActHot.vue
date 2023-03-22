<script setup>
import { onMounted, onUnmounted, ref, reactive, computed } from "vue";
import axios from "axios";
import { useFilterData } from "../../../../stores/ActData.js"
// example components
import ActTransparentBlogCard from "../Sections/ActBlogCards/ActTransparentBlogCard.vue";
import ActBackgroundBlogCard from "../Sections/ActBlogCards/ActBackgroundBlogCard.vue";

//Vue Material Kit 2 components
import tp from "@/assets/img/ActImg/Taipei.jpg";
import Breadcrumbs from "@/examples/Breadcrumbs.vue";


//const webApiBaseAddr = ref("https://localhost:7108/api/ActDetails")
//const MVCimages = ref("https://localhost:7120/images/")

const ActAll = useFilterData();
//const dialogVisible = ref(false)
// const ActD = reactive([])
// const ActAll = reactive([])
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

// const AddActData = reactive({
//     活動id: 0,
//     地區: "",
//     縣市: "",
//     活動種類: "",
//     活動名稱: "",
//     活動介紹: "",
//     門票價格: 0,
//     活動圖片: "",
// })

// onMounted(async () => {
//     await axios.get(webApiBaseAddr.value)
//         .then(res => {

//             for (var i = 0; i < res.data.length; i++) {
//                 var item = res.data[i];
//                 item.Edit = false;

//             }
//             ActAll.splice(0, res.data.length, ...res.data)
//         }).catch(err => {
//             console.log(err);
//         })
// })

// let Actdetail = (活動id) => {
//     var ActD = []

//     for (let i = 0; i < ActAll.ActAllData.length; i++) {

//         let item = ActAll.ActAllData[i]

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
//     ActAll.ActAllData.splice(0, ActD.length, ...ActD)
// }

// let ActAddStorage = (活動id) => {

//     for (let i = 0; i < ActAll.length; i++) {

//         let item = ActAll[i]

//         if (item.活動id == 活動id) {

//             活動id = item.活動id
//             地區 = item.地區;
//             縣市 = item.縣市;
//             活動種類 = item.活動種類;
//             活動名稱 = item.活動名稱;
//             活動介紹 = item.活動介紹;
//             活動圖片 = item.活動圖片;
//             門票價格 = item.門票價格;

//             let ActData = JSON.stringify(AddActData)

//             localStorage.setItem('ActData', ActData)
//         }
//     }
// }

</script>

<template>
    <!-- 熱門精選內容 -->
    <div class="">
        <el-container>
            <el-header>
                <Breadcrumbs :routes="[
                    { label: '首頁', route: '/' },
                    { label: '當地活動', route: '/pages/Yelu-pages/act/ActIndex' },
                    { label: '熱門精選' },]" />
            </el-header>
            <el-main>
                <section class="py-3">
                    <div class="row">
                        <div class="col-lg-2 col-md-12 col-12">
                            <ActBackgroundBlogCard :image="tp" title="精選活動" description="" />
                        </div>
                        <!-- 主頁卡片 -->
                        <div class="card m-3 col-lg-2 col-sm-6" v-for="item in ActAll.ActAllData">
                            <ActTransparentBlogCard :image="`${ActAll.MVCimages}${item.活動圖片}`" :title=item.活動名稱 />

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
                                    @click="{ ActAll.Actdetail(item.活動id); ActAll.dialogVisible = true }">
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
                        <el-dialog v-model="ActAll.dialogVisible" title="活動詳細資訊" width="50%" draggable>
                            <div class="modal-header">
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <span class="dialog-footer">
                                <div>
                                    <img :src="`${ActAll.MVCimages}${ActAll.ActHot.活動圖片}`"
                                        style="width: 400px; height: 300px;">
                                </div>
                                <div>
                                    <label class="form-lable">
                                        <h4>活動名稱：<small class="text-muted"> {{ ActAll.ActHot.活動名稱 }}</small></h4>
                                    </label>

                                </div>
                                <div>
                                    <label class="form-lable">
                                        <h4>活動介紹：<small class="text-muted"> {{ ActAll.ActHot.活動介紹 }}</small></h4>
                                    </label>

                                </div>
                                <div>
                                    <label class="form-lable"><span class="material-icons">festival
                                        </span>營區名稱 | {{ ActAll.ActHot.營區名稱 }}</label>
                                </div>
                                <div>
                                    <label class="form-lable"><span class="material-icons">pin_drop
                                        </span>地區 | {{ ActAll.ActHot.地區 }}</label>
                                </div>
                                <div>
                                    <label class="form-lable"><span class="material-icons">pin_drop
                                        </span>縣市 | {{ ActAll.ActHot.縣市 }}</label>
                                </div>
                                <div>
                                    <label class="form-lable">活動方式 | {{ ActAll.ActHot.活動方式 }} </label>
                                </div>
                                <div>
                                    <label class="form-lable">活動種類 | {{ ActAll.ActHot.活動種類 }} </label>
                                </div>
                                <div>
                                    <label class="form-lable"><span class="material-icons">attach_money</span> TWD <span
                                            class="text-primary">{{ ActAll.ActHot.門票價格 }}</span> /次</label>
                                </div>
                            </span>
                        </el-dialog>
                    </div>
                </section>
            </el-main>
        </el-container>
    </div>
</template>