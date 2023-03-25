<script setup>
import { onMounted, onUnmounted, ref, reactive, computed } from "vue";
import { useActDataAtore } from "../../../../stores/ActData.js";
import { useRoute } from "vue-router";

import ActTransparentBlogCard from "./ActBlogCards/ActTransparentBlogCard.vue";
import ActBackgroundBlogCard from "./ActBlogCards/ActBackgroundBlogCard.vue";

import tp from "@/assets/img/ActImg/Taipei.jpg";
import Breadcrumbs from "@/examples/Breadcrumbs.vue";

const route = useRoute();
const AeraAll = useActDataAtore();
onMounted(AeraAll.AllAreaActGet)

let NewAera = computed(() => {
    let NewAr = reactive();
    if (route.name == "ActAllAera-a") {
        //alert(route.params.whoCity)
        if (route.params.whoAera == "North") {
            NewAr = AeraAll.North.北部;
        } else if (route.params.whoAera == "West") {
            NewAr = AeraAll.West.中部;
        } else if (route.params.whoAera == "South") {
            NewAr = AeraAll.South.南部;
        } else if (route.params.whoAera == "East") {
            NewAr = AeraAll.East.東部;
        }
        return NewAr;
    }
})

let LableAera = computed(() => {
    let lableAera = ref('');
    if (route.name == "ActAllAera-a") {
        //alert(route.params.whoCity)
        if (route.params.whoAera == "North") {
            lableAera.value = '北部活動';
        } else if (route.params.whoAera == "West") {
            lableAera.value = '中部活動';
        } else if (route.params.whoAera == "South") {
            lableAera.value = '南部活動';
        } else if (route.params.whoAera == "East") {
            lableAera.value = '東部活動';
        }
        return lableAera;
    }
})

let AreaDialog = computed(() => {
    let areaDialog = reactive();
    if (route.name == "ActAllAera-a") {
        if (route.params.whoAera == "North") {
            areaDialog = AeraAll.NorthDialog;
        } else if (route.params.whoAera == "West") {
            areaDialog = AeraAll.WestDialog;
        } else if (route.params.whoAera == "South") {
            areaDialog = AeraAll.SouthDialog;
        } else if (route.params.whoAera == "East") {
            areaDialog = AeraAll.EastDialog;
        }
        return areaDialog;
    }
})

</script>

<template>
    <!-- 熱門精選內容 -->
    <div class="">
        <el-container>
            <el-header>
                <Breadcrumbs :routes="[
                    { label: '首頁', route: '/' },
                    { label: '當地活動', route: '/pages/Yelu-pages/act/ActIndex' },
                    { label: LableAera.value },]" />
            </el-header>
            <el-main>
                <section class="py-3">
                    <div class="row">
                        <div class="col-lg-2 col-md-12 col-12">
                            <ActBackgroundBlogCard :image="tp" :title="`${LableAera.value}`" description="" />
                        </div>
                        <!-- 主頁卡片 -->
                        <div class="card m-3 col-lg-2 col-sm-6" v-for="item in NewAera">
                            <ActTransparentBlogCard :image="`${AeraAll.MVCimages}${item.活動圖片}`" :title=item.活動名稱 />

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

                            <div class="m-3">
                                <el-button type="info" class="text-lg font-weight-bolder icon-move-right"
                                    @click="{ AreaDialog(item.活動id); AeraAll.dialogVisibleArr[7] = true }">
                                    詳細資訊<i class="fas fa-arrow-right text-xs ms-1"></i>
                                </el-button>
                            </div>
                        </div>
                    </div>

                    <!-- 彈跳視窗 -->
                    <div>
                        <el-dialog v-model="AeraAll.dialogVisibleArr[7]" title="活動詳細資訊" width="50%" draggable>
                            <div class="modal-header">
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <span class="dialog-footer">
                                <div>
                                    <img :src="`${AeraAll.MVCimages}${AeraAll.ActDialogAll.活動圖片}`"
                                        style="width: 400px; height: 300px;">
                                </div>
                                <div>
                                    <label class="form-lable">
                                        <h4>活動名稱：<small class="text-muted"> {{ AeraAll.ActDialogAll.活動名稱 }}</small></h4>
                                    </label>

                                </div>
                                <div>
                                    <label class="form-lable">
                                        <h4>活動介紹：<small class="text-muted"> {{ AeraAll.ActDialogAll.活動介紹 }}</small></h4>
                                    </label>

                                </div>
                                <div>
                                    <label class="form-lable"><span class="material-icons">festival
                                        </span>營區名稱 | {{ AeraAll.ActDialogAll.營區名稱 }}</label>
                                </div>
                                <div>
                                    <label class="form-lable"><span class="material-icons">pin_drop
                                        </span>地區 | {{ AeraAll.ActDialogAll.地區 }}</label>
                                </div>
                                <div>
                                    <label class="form-lable"><span class="material-icons">pin_drop
                                        </span>縣市 | {{ AeraAll.ActDialogAll.縣市 }}</label>
                                </div>
                                <div>
                                    <label class="form-lable">活動方式 | {{ AeraAll.ActDialogAll.活動方式 }} </label>
                                </div>
                                <div>
                                    <label class="form-lable">活動種類 | {{ AeraAll.ActDialogAll.活動種類 }} </label>
                                </div>
                                <div>
                                    <label class="form-lable"><span class="material-icons">attach_money</span> TWD <span
                                            class="text-primary">{{ AeraAll.ActDialogAll.門票價格 }}</span> /次</label>
                                </div>
                                <!-- 重要!!!這邊要導到自選行程第二步!!!!!!! -->
                                <RouterLink to="/pages/Yelu-pages/Self/stepall/step2/Act">
                                    <el-button type="warning" class="text-lg font-weight-bolder m-2"
                                        @click="AeraAll.HotDialog(item.活動id)">
                                        自選行程<span class="material-icons">add_shopping_cart</span>
                                    </el-button>
                                </RouterLink>
                            </span>
                        </el-dialog>
                    </div>
                </section>
            </el-main>
        </el-container>
    </div>
</template>