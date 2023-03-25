<script setup>
import { onMounted, onUnmounted, ref, reactive, computed } from "vue";
import { useActDataAtore } from "../../../../stores/ActData.js";
import { useRoute } from "vue-router"

import ActTransparentBlogCard from "../Sections/ActBlogCards/ActTransparentBlogCard.vue";
import ActBackgroundBlogCard from "../Sections/ActBlogCards/ActBackgroundBlogCard.vue";

import sun from "@/assets/img/ActImg/sun.jpg";
import Breadcrumbs from "@/examples/Breadcrumbs.vue";

const route = useRoute();
const CityAll = useActDataAtore();
onMounted(CityAll.AllCityCampGet);

let NewCity = computed(() => {
    let NewCt = reactive();
    if (route.name == "ActAllCity-a") {
        //alert(route.params.whoCity)
        if (route.params.whoCity == "NewTp") {
            NewCt = CityAll.NewTp.新北市;
        } else if (route.params.whoCity == "Taoyuan") {
            NewCt = CityAll.Taoyuan.桃園市;
        } else if (route.params.whoCity == "Hsinchu") {
            NewCt = CityAll.Hsinchu.新竹縣;
        } else if (route.params.whoCity == "Miaoli") {
            NewCt = CityAll.Miaoli.苗栗縣;
        } else if (route.params.whoCity == "Nantou") {
            NewCt = CityAll.Nantou.南投縣;
        } else if (route.params.whoCity == "Taichung") {
            NewCt = CityAll.Taichung.台中市;
        } else if (route.params.whoCity == "Chiayi") {
            NewCt = CityAll.Chiayi.嘉義縣;
        } else if (route.params.whoCity == "Tainan") {
            NewCt = CityAll.Tainan.台南市;
        } else if (route.params.whoCity == "Kaohsiung") {
            NewCt = CityAll.Kaohsiung.高雄市;
        } else if (route.params.whoCity == "Yilan") {
            NewCt = CityAll.Yilan.宜蘭縣;
        } else if (route.params.whoCity == "Hualien") {
            NewCt = CityAll.Hualien.花蓮縣;
        } else if (route.params.whoCity == "Taitung") {
            NewCt = CityAll.Taitung.台東縣;
        }
        return NewCt;
    }
})

let NewCityDialog = computed(() => {
    let CityDialog = reactive();
    if (route.name == "ActAllCity-a") {
        //alert(route.params.whoCity)
        if (route.params.whoCity == "NewTp") {
            CityDialog = CityAll.NewTpDialog;
        } else if (route.params.whoCity == "Taoyuan") {
            CityDialog = CityAll.TaoyuanDialog;
        } else if (route.params.whoCity == "Hsinchu") {
            CityDialog = CityAll.HsinchuDialog;
        } else if (route.params.whoCity == "Miaoli") {
            CityDialog = CityAll.MiaoliDialog;
        } else if (route.params.whoCity == "Nantou") {
            CityDialog = CityAll.NantouDialog;
        } else if (route.params.whoCity == "Taichung") {
            CityDialog = CityAll.TaichungDialog;
        } else if (route.params.whoCity == "Chiayi") {
            CityDialog = CityAll.ChiayiDialog;
        } else if (route.params.whoCity == "Tainan") {
            CityDialog = CityAll.TainanDialog;
        } else if (route.params.whoCity == "Kaohsiung") {
            CityDialog = CityAll.KaohsiungDialog;
        } else if (route.params.whoCity == "Yilan") {
            CityDialog = CityAll.YilanDialog;
        } else if (route.params.whoCity == "Hualien") {
            CityDialog = CityAll.HualienDialog;
        } else if (route.params.whoCity == "Taitung") {
            CityDialog = CityAll.TaitungDialog;
        }
        return CityDialog;
    }
})
</script>

<template>
    <div class="">
        <el-container>
            <el-header>
                <Breadcrumbs :routes="[
                    { label: '首頁', route: '/' },
                    { label: '當地活動', route: '/pages/Yelu-pages/act/ActIndex' },
                    { label: '活動' },
                ]" />
            </el-header>
            <el-main>
                <section class="py-3">
                    <div class="row">
                        <!-- 左邊導覽卡片 -->
                        <div class="col-lg-2 col-md-12 col-12">
                            <ActBackgroundBlogCard :image="sun" title="探索展演、行程等" description="" />
                        </div>
                        <!-- 主頁卡片 -->
                        <div class="card m-3 col-lg-2 col-sm-6" v-for="item in NewCity">

                            <div class="mb-9 mt-2 ">
                                <ActTransparentBlogCard :image="`${CityAll.MVCimages}${item.活動圖片}`" :title="item.活動名稱" />
                            </div>

                            <div class="d-flex row align-items-center mb-5 bottom-button-wrapper">

                                <label class="form-lable"><span class="material-icons">pin_drop</span>
                                    {{ item.縣市 }}</label>

                                <label class="form-lable"><span class="material-icons">festival</span>
                                    {{ item.營區名稱 }}</label>

                                <label class="form-lable"><span class="material-icons">attach_money</span> TWD
                                    <span class="text-primary">{{ item.門票價格 }}</span>
                                    /次</label>
                            </div>


                            <div class="d-flex col mb-3 bottom-button-wrapper">
                                <el-button type="info" class="text-lg font-weight-bolder icon-move-right" @click="
                                    {
                                        NewCityDialog(item.活動id);
                                        CityAll.dialogVisibleArr[8] = true;
                                    }
                                ">
                                    詳細資訊<i class="fas fa-arrow-right text-xs ms-1"></i>
                                </el-button>

                                <!-- 重要!!!這邊要導到自選行程第二步!!!!!!! -->
                                <!-- <RouterLink to="/pages/Yelu-pages/Self/stepall/step2">
                                                                                        <el-button type="warning" class="text-lg font-weight-bolder m-2"
                                                                                            @click="EventAll.EventDialog(item.活動id)">
                                                                                            <span class="material-icons">add_shopping_cart</span>
                                                                                        </el-button>
                                                                                    </RouterLink> -->
                            </div>


                        </div>
                    </div>

                    <!-- 彈跳視窗 -->
                    <div>
                        <el-dialog v-model="CityAll.dialogVisibleArr[8]" title="活動詳細資訊" width="50%" draggable>
                            <div class="modal-header">
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <span class="dialog-footer">
                                <div>
                                    <img :src="`${CityAll.MVCimages}${CityAll.ActDialogAll.活動圖片}`"
                                        style="width: 400px; height: 300px" />
                                </div>
                                <div>
                                    <label class="form-lable">
                                        <h4>
                                            活動名稱：<small class="text-muted">
                                                {{ CityAll.ActDialogAll.活動名稱 }}</small>
                                        </h4>
                                    </label>
                                </div>
                                <div>
                                    <label class="form-lable">
                                        <h4>
                                            活動介紹：<small class="text-muted">
                                                {{ CityAll.ActDialogAll.活動介紹 }}</small>
                                        </h4>
                                    </label>
                                </div>
                                <div>
                                    <label class="form-lable"><span class="material-icons">festival </span>營區名稱 |
                                        {{ CityAll.ActDialogAll.營區名稱 }}</label>
                                </div>
                                <div>
                                    <label class="form-lable"><span class="material-icons">pin_drop </span>地區 |
                                        {{ CityAll.ActDialogAll.地區 }}</label>
                                </div>
                                <div>
                                    <label class="form-lable"><span class="material-icons">pin_drop </span>縣市 |
                                        {{ CityAll.ActDialogAll.縣市 }}</label>
                                </div>
                                <div>
                                    <label class="form-lable">活動方式 | {{ CityAll.ActDialogAll.活動方式 }}
                                    </label>
                                </div>
                                <div>
                                    <label class="form-lable">活動種類 | {{ CityAll.ActDialogAll.活動種類 }}
                                    </label>
                                </div>
                                <div>
                                    <label class="form-lable"><span class="material-icons">attach_money</span> TWD
                                        <span class="text-primary">{{
                                            CityAll.ActDialogAll.門票價格
                                        }}</span>
                                        /次</label>
                                </div>
                                <!-- 重要!!!這邊要導到自選行程第二步!!!!!!! -->
                                <RouterLink to="/pages/Yelu-pages/Self/stepall/step2/Act">
                                    <el-button type="warning" class="text-lg font-weight-bolder m-2"
                                        @click="CityAll.EventDialog(item.活動id)">
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

<style>
.bottom-button-wrapper {
    position: absolute;
    bottom: 0;

}
</style>