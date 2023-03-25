<script setup>
import { onMounted, onUnmounted, ref, reactive, computed } from "vue";
import { useCampDataAtore } from "../../../../stores/CampData.js";
import { useRoute } from "vue-router";

import CampTransparentBlogCard from "./CampBlogCards/CampTransparentBlogCard.vue";
import Breadcrumbs from "@/examples/Breadcrumbs.vue";

const route = useRoute();
const CityAll = useCampDataAtore();
onMounted(CityAll.AllCityCampGet);

let NewCity = computed(() => {
    let NewCt = reactive();
    if (route.name == "CampAllCity-c") {
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
    if (route.name == "CampAllCity-c") {
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

let AreaLable = computed(() => {
    let Arealable = ref('');
    if (route.name == "CampAllCity-c") {
        //alert(route.params.whoCity)
        if (route.params.whoCity == "NewTp" || route.params.whoCity == "Taoyuan" || route.params.whoCity == "Hsinchu") {
            Arealable.value = '北部';
        } else if (route.params.whoCity == "Miaoli" || route.params.whoCity == "Nantou" || route.params.whoCity == "Taichung") {
            Arealable.value = '中部'
        } else if (route.params.whoCity == "Chiayi" || route.params.whoCity == "Tainan" || route.params.whoCity == "Kaohsiung") {
            Arealable.value = '南部'
        } else if (route.params.whoCity == "Yilan" || route.params.whoCity == "Hualien" || route.params.whoCity == "Taitung") {
            Arealable.value = '東部'
        }
        return Arealable;
    }
})
</script>

<template>
    <div class="common-layout">
        <el-container>
            <el-header>
                <div class="row">
                    <div class="">
                        <!-- 麵包屑 -->
                        <Breadcrumbs :routes="[
                            { label: '首頁', route: '/' },
                            { label: '營區預訂' },
                            { label: AreaLable.value },

                        ]" />
                    </div>
                </div>
            </el-header>

            <el-main>
                <section class="py-3">
                    <div class="row">
                        <!-- <div class="col-lg-2 col-md-12 col-12">
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        <CampBackgroundBlogCard :image="sun" title="北部營區" description="" />
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    </div> -->

                        <div class="card m-3 col-lg-4 col-sm-6" v-for="item in NewCity">
                            <div
                                style=" height:400px; display: flex; flex-direction: column; justify-content: space-between;">
                                <!-- 卡片 -->
                                <CampTransparentBlogCard :image="`${CityAll.MVCimages}${item.圖片}`" :title=item.營區名稱
                                    :description=item.營區介紹 />
                            </div>
                            <div class="d-flex mt-5">
                                <label class="form-lable"><span class="material-icons">pin_drop</span> {{ item.縣市 }}</label>
                                <label class="form-lable"><span class="material-icons">attach_money</span> TWD<span
                                        class="text-primary">{{ item.單價 }}</span>up</label>
                            </div>
                            <div class="container d-flex justify-content-end">
                                <el-button type="info" class="text-lg font-weight-bolder icon-move-right  "
                                    @click="{ NewCityDialog(item.營區細項id); CityAll.dialogVisibleArr[4] = true; }">
                                    選擇方案<span class="material-icons">touch_app</span>
                                </el-button>
                            </div>
                            <hr>
                        </div>
                    </div>
                    <!-- 彈跳視窗 -->
                    <div>
                        <el-dialog v-model="CityAll.dialogVisibleArr[4]" title="營區詳細資訊" width="50%" draggable>
                            <div class="modal-header">
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <span class="dialog-footer">
                                <div>
                                    <img :src="`${CityAll.MVCimages}${CityAll.CampDialogAll.圖片}`"
                                        style="width: 300px;height: 300;">
                                </div>
                                <div>
                                    <!-- <label class="form-lable">
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    <h4>露營形式：<small class="text-muted"> {{ 項目內容 }}</small></h4></label> -->
                                    <label class="form-lable">
                                        <h4>露營形式：<small class="text-muted"> {{ CityAll.CampDialogAll.項目內容 }}</small></h4>
                                    </label>

                                </div>
                                <div>
                                    <label class="form-lable">
                                        <h4>營區名稱：<small class="text-muted"> {{ CityAll.CampDialogAll.營區名稱 }}</small></h4>
                                    </label>

                                </div>
                                <div>
                                    <label class="form-lable">
                                        <h4>營區介紹：<small class="text-muted"> {{ CityAll.CampDialogAll.營區介紹 }}</small></h4>
                                    </label>
                                </div>
                                <div>
                                    <label class="form-lable"><span class="material-icons">pin_drop
                                        </span>地區 | {{ CityAll.CampDialogAll.地區 }}</label>
                                </div>
                                <div>
                                    <label class="form-lable"><span class="material-icons">pin_drop
                                        </span>縣市 | {{ CityAll.CampDialogAll.縣市 }}</label>
                                </div>
                                <div>
                                    <label class="form-lable"><span class="material-icons">near_me
                                        </span>營區地址 | {{ CityAll.CampDialogAll.營區地址 }} </label>
                                </div>
                                <div>
                                    <label class="form-lable"><span class="material-icons">group
                                        </span>容納人數 | {{ CityAll.CampDialogAll.容納人數 }}人</label>
                                </div>

                                <RouterLink to="/pages/Yelu-pages/Self/stepall/step2/Camp">
                                    <el-button type="warning" class=" text-lg font-weight-bolder m-2"
                                        @click="CityAll.NorthDialog(item.營區細項id)">
                                        自選行程<span class="material-icons p-2">
                                            add_shopping_cart
                                        </span>
                                    </el-button>
                                </RouterLink>


                                <RouterLink :to="{ name: 'set' }">
                                    <el-button type="warning" class=" text-lg font-weight-bolder m-2"
                                        @click="SelfSet(item.營區細項id)">
                                        套裝行程<span class="material-icons p-2">
                                            add_shopping_cart
                                        </span>
                                    </el-button>
                                </RouterLink>

                                <el-button type="info" plain="false">
                                    <span class="material-icons p-2">home</span></el-button>
                            </span>
                        </el-dialog>
                    </div>


                </section>
            </el-main>
        </el-container>
    </div>
</template>


<style></style>