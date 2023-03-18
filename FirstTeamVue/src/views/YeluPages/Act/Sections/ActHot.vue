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

const dialogVisible = ref(false)
const ActD = reactive([])
const ActDID = reactive([])
const 活動id = ref('')
const 地區= ref('')
const 縣市= ref('')
const 活動種類= ref('')
const 活動名稱= ref('')
const 活動介紹= ref('')
const 門票價格= ref(0)
const 活動圖片= ref('')



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

let Actdetail=(活動id)=>{
    var ActD=[]

    for(let i = 0; i < ActDID.length; i++){

        var item = ActDID[i]
        //console.log(item);

        if(item.活動id == 活動id){

            item.Edit = true;
            地區.value = item.地區;
            縣市.value = item.縣市;
            活動種類.value = item.活動種類; 
            活動名稱.value = item.活動名稱;
            活動介紹.value = item.活動介紹;
            活動圖片.value = item.活動圖片;
            門票價格.value = item.門票價格;
        }
        else{item.Edit = false;}

        ActD.push(item);
    }
    ActDID.splice(0, ActD.length, ...ActD)
    console.log(ActDID);
}
console.log(ActDID);
</script>

<template>
    <div class="">
        <el-container>
            <el-header>
                <div class="row">
                    <div class="">
                        <h1 class="bkc">熱門活動</h1>
                    </div>
                </div>
            </el-header>
            <el-main>
                <section class="py-3">
                    <div class="row">
                        <div class="col-lg-2 col-md-12 col-12">
                            <ActBackgroundBlogCard :image="tp" title="熱門活動情報讚!!" description="" />
                        </div>
                        <div class="col-lg-2 col-sm-6 p-2" v-for="item in ActDID" :key="item">
                            <ActTransparentBlogCard :image="`${MVCimages}${item.活動圖片}`" :title=item.活動名稱 /> 
                                <el-button type="info" class="text-lg font-weight-bolder icon-move-right"  @click="{Actdetail(item.活動id);dialogVisible = true }"  >
                                    詳細資訊<i  class="fas fa-arrow-right text-xs ms-1"></i>
                                </el-button>                                
                        </div>                                                                    
                    </div>
                    <div>
                        <el-dialog v-model="dialogVisible" title="活動詳細資訊" width="50%" draggable>
                                <div class="modal-header">
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                            <span class="dialog-footer">
                                <div>
                                    <img :src="`${MVCimages}${活動圖片}`" >
                                </div>
                                <div>
                                    <label class="form-lable">地區: {{地區}}</label>                             
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

                                <el-button type="warning" @click="dialogVisible = false">返回</el-button>
                            </span>
                        </el-dialog>
                    </div>
                </section>               
            </el-main>
        </el-container>
    </div>
</template>