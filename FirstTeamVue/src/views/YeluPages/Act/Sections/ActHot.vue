<script setup>
import { onMounted, onUnmounted, ref, reactive, computed } from "vue";
import axios from "axios";
// example components
import ActTransparentBlogCard from "../Sections/ActBlogCards/ActTransparentBlogCard.vue";
import ActBackgroundBlogCard from "../Sections/ActBlogCards/ActBackgroundBlogCard.vue";

//Vue Material Kit 2 components
import tp from "@/assets/img/ActImg/Taipei.jpg";

import Event from "../Sections/Event.vue";


const webApiBaseAddr = ref("https://localhost:7108/api/ActDetails")
const MVCimages = ref("https://localhost:7120/images/")

const dialogVisible = ref(false)
const ActD = reactive([])
const ActDID = reactive([])
const 活動id = ref('')
const 地區 = ref('')
const 縣市 = ref('')
const 活動種類 = ref('')
const 活動名稱 = ref('')
const 活動介紹 = ref('')
const 門票價格 = ref(0)
const 活動圖片 = ref('')

const AddActData = reactive({
    活動id: 0,
    地區: "",
    縣市: "",
    活動種類: "",
    活動名稱: "",
    活動介紹: "",
    門票價格: 0,
    活動圖片: "",
})

const getEmployeeDTOes = onMounted(async () => {
    await axios.get(webApiBaseAddr.value)
        .then(res => {

            for (var i = 0; i < res.data.length; i++) {
                var item = res.data[i];
                item.Edit = false;

            }
            //console.log(res.data);
            ActDID.splice(0, res.data.length, ...res.data)
            //console.log(ActDID);
        }).catch(err => {
            console.log(err);
        })
})

let Actdetail = (活動id) => {
    var ActD = []

    for (let i = 0; i < ActDID.length; i++) {

        let item = ActDID[i]
        //console.log(item);

        if (item.活動id == 活動id) {

            item.Edit = true;
            地區.value = item.地區;
            縣市.value = item.縣市;
            活動種類.value = item.活動種類;
            活動名稱.value = item.活動名稱;
            活動介紹.value = item.活動介紹;
            活動圖片.value = item.活動圖片;
            門票價格.value = item.門票價格;
        }
        else { item.Edit = false; }

        ActD.push(item);
    }
    ActDID.splice(0, ActD.length, ...ActD)
}

let ActAddStorage = (活動id) => {

    for (let i = 0; i < ActDID.length; i++) {

        let item = ActDID[i]

        if (item.活動id == 活動id) {

            AddActData.活動id = item.活動id
            AddActData.地區 = item.地區;
            AddActData.縣市 = item.縣市;
            AddActData.活動種類 = item.活動種類;
            AddActData.活動名稱 = item.活動名稱;
            AddActData.活動介紹 = item.活動介紹;
            AddActData.活動圖片 = item.活動圖片;
            AddActData.門票價格 = item.門票價格;

            let ActData = JSON.stringify(AddActData)

            localStorage.setItem('ActData', ActData)
        }
    }
}

</script>

<template>
<!-- 熱門精選內容 -->
<div class="">
    <el-container>
        <el-header></el-header>
        <el-main>
            <section class="py-3">
                <div class="row">
                    <div class="col-lg-2 col-md-12 col-12">
                        <ActBackgroundBlogCard :image="tp" title="精選活動" description="" />
                    </div>
                    <div class="col-lg-2 col-sm-6 p-2" v-for="item in ActDID" :key="item">
                        <ActTransparentBlogCard :image="`${MVCimages}${item.活動圖片}`" :title=item.活動名稱 />
                        <div style="display: flex; justify-content: flex-start;">  
                    <div class="d-flex mt-3">
                        <label class="form-lable"><span class="material-icons">pin_drop</span> {{ item.縣市 }}</label>
                        <label class="form-lable"><span class="material-icons">festival</span> {{ item.營區名稱 }}</label>
                    </div>
                </div>
                    
                <div>
                    <label class="form-lable"><span class="material-icons">attach_money</span> TWD  <span class="text-primary">{{ item.門票價格 }}</span> /次</label>
                </div>

                <div>  
                    <el-button type="info" class="text-lg font-weight-bolder icon-move-right"  @click="{Actdetail(item.活動id);dialogVisible = true }"  >
                        詳細資訊<i  class="fas fa-arrow-right text-xs ms-1"></i> 
                    </el-button>
    
                    <!-- 重要!!!這邊要導到自選行程第二步!!!!!!! --> 
                    <RouterLink to="/pages/Yelu-pages/Self/Sections/step2"  >    
                    <el-button type="warning" class=" text-lg font-weight-bolder m-2"  @click="SelfSet(item.營區細項id)">
                        <span class="material-icons ">add_shopping_cart</span>
                    </el-button> </RouterLink>
                </div>     
                </div>
            </div>

                <div>
                    <el-dialog v-model="dialogVisible" title="活動詳細資訊" width="50%" draggable>
                        <div class="modal-header">
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <span class="dialog-footer">
                            <div>
                                <img :src="`${MVCimages}${活動圖片}`" style="width: 400px; height: 300px;">
                            </div>
                            <div>
                                <label class="form-lable">地區: {{ 地區 }}</label>
                            </div>
                            <div>
                                <label class="form-lable">縣市: {{ 縣市 }}</label>
                            </div>
                            <div>
                                <label class="form-lable">活動種類: {{ 活動種類 }} </label>
                            </div>
                            <div>
                                <label class="form-lable">活動名稱: {{ 活動名稱 }}</label>
                            </div>
                            <div>
                                <label class="form-lable">活動介紹: {{ 活動介紹 }}</label>
                            </div>
                            <div>
                                <label class="form-lable">門票價格: {{ 門票價格 }}元 / 人</label>
                            </div>

                        </span>
                    </el-dialog>
                </div>
            </section>
        </el-main>
    </el-container>
</div>
</template>