<script setup>
import { onMounted, onUnmounted, ref, reactive, computed } from "vue";
import axios from "axios";
//import axios from "axios";
// example components
import CampTransparentBlogCard from "../Sections/CampBlogCards/CampTransparentBlogCard.vue";
import CampBackgroundBlogCard from "../Sections/CampBlogCards/CampBackgroundBlogCard.vue";

import sun from "@/assets/img/ActImg/sun.jpg";

const webApiBaseAddr = ref("https://localhost:7108/api/CampDetails")
const MVCimages = ref("https://localhost:7120/images/")



const getEmployeeDTOes = onMounted(() => {
    axios.get(webApiBaseAddr.value).then(res => {

        for (var i = 0; i < res.data.length; i++) {
            var item = res.data[i];
            item.Edit = false;

        }

        //console.log(res.data);
        CampDID.splice(0, res.data.length, ...res.data)
        //console.log(Camp);
    }).catch(err => {
        console.log(err);
    })
})



const dialogVisible = ref(false)
const CampD = reactive([])
const CampDID = reactive([])
const 詳細內容 = ref('')
const 圖片 = ref('')
const 單價 = ref(0)
const 營區名稱 = ref('')
const 營區地址 = ref('')
const 地區 = ref('')
const 縣市 = ref('')
const 營區介紹 = ref('')
const 項目內容 = ref('')
const 容納人數 = ref(0)



const AddCampData = reactive({
    營區細項id: 0,
    詳細內容: "",
    圖片: "",
    營區名稱: "",
    營區地址: "",
    地區: "",
    縣市: "",
    單價: 0,
    營區介紹: "",
    項目內容: "",
    容納人數: 0,


})

let Campdetail = (營區細項id) => {
    var CampD = []

    for (let i = 0; i < CampDID.length; i++) {

        let item = CampDID[i]
        //console.log(item);

        if (item.營區細項id == 營區細項id) {

            item.Edit = true;
            詳細內容.value = item.詳細內容;
            圖片.value = item.圖片;
            營區名稱.value = item.營區名稱;
            營區地址.value = item.營區地址;
            地區.value = item.地區;
            縣市.value = item.縣市;
            單價.value = item.單價;
            營區介紹.value = item.營區介紹;
            項目內容.value = item.項目內容;
            容納人數.value = item.容納人數;

        }
        else { item.Edit = false; }

        CampD.push(item);
    }
    CampDID.splice(0, CampD.length, ...CampD)
}

let SelfSet = (營區細項id) => {
    var CampD = []

    for (let i = 0; i < CampDID.length; i++) {

        let item = CampDID[i]
        //console.log(item);

        if (item.營區細項id == 營區細項id) {

            item.Edit = true;
            詳細內容.value = item.詳細內容;
            圖片.value = item.圖片;
            營區名稱.value = item.營區名稱;
            營區地址.value = item.營區地址;
            地區.value = item.地區;
            縣市.value = item.縣市;
            單價.value = item.單價;
            營區介紹.value = item.營區介紹;
            項目內容.value = item.項目內容;
            容納人數.value = item.容納人數;

        }
        else { item.Edit = false; }

        CampD.push(item);
    }
    CampDID.splice(0, CampD.length, ...CampD)
}







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
                        <div class="col-lg-2 col-sm-6" v-for="item in CampDID">
                            <CampTransparentBlogCard :image="`${MVCimages}${item.圖片}`" :title=item.營區名稱
                                :description=item.營區介紹 />
                            <el-button type="info" class="text-lg font-weight-bolder icon-move-right"
                                @click="{ Campdetail(item.營區細項id); dialogVisible = true; }">
                                選擇方案<i class="fas fa-arrow-right text-xs ms-1"></i>
                            </el-button>
                            <!-- <el-button type="danger" class=" text-lg font-weight-bolder " @click="SelfSet(item.營區細項id)">
                                                                        預訂<span class="material-icons p-2">
                                                                            add_shopping_cart
                                                                        </span>
                                                                    </el-button> -->
                        </div>
                    </div>
                    <!-- 彈跳視窗 -->
                    <div>
                        <el-dialog v-model="dialogVisible" title="營區詳細資訊" width="50%" draggable>
                            <div class="modal-header">
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <span class="dialog-footer">
                                <div>
                                    <img :src="`${MVCimages}${圖片}`">
                                </div>
                                <div>
                                    <label class="form-lable">露營形式: {{ 項目內容 }}</label>
                                </div>
                                <div>
                                    <label class="form-lable">地區: {{ 地區 }}</label>
                                </div>
                                <div>
                                    <label class="form-lable">縣市: {{ 縣市 }}</label>
                                </div>
                                <div>
                                    <label class="form-lable">營區地址: {{ 營區地址 }} </label>
                                </div>
                                <div>
                                    <label class="form-lable">營區名稱: {{ 營區名稱 }}</label>
                                </div>
                                <div>
                                    <label class="form-lable">營區介紹: {{ 營區介紹 }}</label>
                                </div>
                                <div>
                                    <label class="form-lable">容納人數: {{ 容納人數 }}人</label>
                                </div>

                                <el-button type="danger" class=" text-lg font-weight-bolder " @click="SelfSet(item.營區細項id)">
                                    自選行程<span class="material-icons p-2">
                                        add_shopping_cart
                                    </span>
                                </el-button>
                                <el-button type="danger" class=" text-lg font-weight-bolder " @click="SelfSet(item.營區細項id)">
                                    套裝行程<span class="material-icons p-2">
                                        add_shopping_cart
                                    </span>
                                </el-button>
                                <el-button type="warning" @click="dialogVisible = false">返回</el-button>
                            </span>
                        </el-dialog>
                    </div>


                </section>
            </el-main>
        </el-container>
    </div>
</template>