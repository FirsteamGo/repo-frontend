<script setup>
import { onMounted, onUnmounted, ref, reactive, computed } from "vue";
import axios from "axios";


import CampTransparentBlogCard from "../Sections/CampBlogCards/CampTransparentBlogCard.vue";
import Breadcrumbs from "@/examples/Breadcrumbs.vue";
import CampBackgroundBlogCard from "../Sections/CampBlogCards/CampBackgroundBlogCard.vue";

import sun from "@/assets/img/ActImg/sun.jpg";

const webApiBaseAddr = ref("https://localhost:7108/api/CampDetails")
const MVCimages = ref("https://localhost:7120/images/")


//抓全部
// onMounted(() => {
//     axios.get(webApiBaseAddr.value).then(res => {

//         for (var i = 0; i < res.data.length; i++) {
//             var item = res.data[i];
//             item.Edit = false;

//         }

//         //console.log(res.data);
//         CampDID.splice(0, res.data.length, ...res.data)
//         //console.log(Camp);
//     }).catch(err => {
//         console.log(err);
//     })
// }),


//南區營地
onMounted(async () => {
    await axios.get(webApiBaseAddr.value).then(res => {
       
        for (let i = 0; i < res.data.length; i++) {
            const AllAct = res.data[i];
            const AllArea = AllAct.地區;
            
            if (SouthArea[AllArea]) {
                SouthArea[AllArea].push(AllAct);
               
            } else {
                console.log(`Unknown region: ${AllArea}`);
            }
        }
    
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
const SouthArea = reactive({
    // "北區": [],
    //"中區": [],
    "南區": [],
    //"東區": [],
});


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
//南區主頁要帶的資料
let Campdetail = (營區細項id) => {
    var CampD = []

    for (let i = 0; i < SouthArea.南區.length; i++) {

        // let item = CampDID[i] 抓全部這樣寫
        var item = SouthArea.南區[i]
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
    // CampDID.splice(0, CampD.length, ...CampD) 抓全部這樣寫
    SouthArea.南區.splice(0, CampD.length, ...CampD)
}

//選擇方案內要帶的資料
let SelfSet = (營區細項id) => {
    var CampD = []

    for (let i = 0; i < SouthArea.南區.length; i++) {

        // let item = CampDID[i]
        var item = SouthArea.南區[i]

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
    // CampDID.splice(0, CampD.length, ...CampD)
    SouthArea.南區.splice(0, CampD.length, ...CampD)

}


</script>

<template>
  



<div class="common-layout">
    <el-container>
        <el-header>
            <div class="row">
                <div class="">
                    <Breadcrumbs
                    :routes="[
                        { label: '首頁', route: '/' },
                        { label: '營區預訂' },
                        { label: '南部'},
                        
                    ]"
                    />
                    <!-- <el-button type="info" plain>#北部精選</el-button> -->
                </div>
            </div>
        </el-header>

        <el-main>
        <section class="py-3">
            <div class="row">
                    <!-- <div class="col-lg-2 col-md-12 col-12">
                        <CampBackgroundBlogCard :image="sun" title="北部營區" description="" />
                    </div> -->
    
                <div class="col-lg-4 col-sm-6" v-for="item in SouthArea.南區">
                    <div  style=" height:400px; display: flex; flex-direction: column; justify-content: space-between;">
                        <!-- 卡片 -->
                        <CampTransparentBlogCard :image="`${MVCimages}${item.圖片}`" :title=item.營區名稱
                            :description=item.營區介紹 /> 
                    </div>   
                    <div class="d-flex mt-5">
                        <label class="form-lable"><span class="material-icons">pin_drop</span> {{ item.縣市 }}</label>
                        <label class="form-lable"><span class="material-icons">attach_money</span> TWD<span class="text-primary">{{ item.單價 }}</span>up</label>
                    </div>
                    <div class="container d-flex justify-content-end">
                        <el-button type="info" class="text-lg font-weight-bolder icon-move-right  "
                            @click="{ Campdetail(item.營區細項id); dialogVisible = true; }">
                            選擇方案<span class="material-icons">touch_app</span>
                        </el-button>
                    </div>
                    <hr>
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
                                    <img :src="`${MVCimages}${圖片}`" style="width: 300px;height: 300;">
                                </div>
                                <div>
                                    <!-- <label class="form-lable">
                                    <h4>露營形式：<small class="text-muted"> {{ 項目內容 }}</small></h4></label> -->
                                    <label class="form-lable">
                                    <h4>露營形式：<small class="text-muted"> {{ 項目內容 }}</small></h4></label>

                                </div>
                                <div>
                                    <label class="form-lable">
                                    <h4>營區名稱：<small class="text-muted"> {{ 營區名稱 }}</small></h4></label>
                                   
                                </div>
                                <div>
                                    <label class="form-lable">
                                    <h4>營區介紹：<small class="text-muted"> {{ 營區介紹 }}</small></h4></label>
                                </div>
                                <div>
                                    <label class="form-lable"><span class="material-icons">pin_drop
                                    </span>地區  |  {{ 地區 }}</label>
                                </div>
                                <div>
                                    <label class="form-lable"><span class="material-icons">pin_drop
                                    </span>縣市  |   {{ 縣市 }}</label>
                                </div>
                                <div>
                                    <label class="form-lable"><span class="material-icons">near_me
                                    </span>營區地址  |   {{ 營區地址 }} </label>
                                </div>
                                <div>
                                    <label class="form-lable"><span class="material-icons">group
                                    </span>容納人數  |   {{ 容納人數 }}人</label>
                                </div>

                                <RouterLink :to="{ name: 'self' }" >    
                                <el-button type="warning" class=" text-lg font-weight-bolder m-2" @click="SelfSet(item.營區細項id)">
                                    自選行程<span class="material-icons p-2">
                                        add_shopping_cart
                                    </span>
                                </el-button> </RouterLink>
                              
                                <RouterLink :to="{ name: 'set' }"  > 
                                <el-button type="warning" class=" text-lg font-weight-bolder m-2" @click="SelfSet(item.營區細項id)">
                                    套裝行程<span class="material-icons p-2">
                                        add_shopping_cart
                                    </span>
                                </el-button></RouterLink>
                                <el-button type="info" plain @click="dialogVisible = false">返回</el-button>
                            </span>
                        </el-dialog>
                    </div>


                </section>
            </el-main>
        </el-container>
    </div>
</template>


<style>


</style>