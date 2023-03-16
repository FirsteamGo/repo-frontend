<script setup>
import { onMounted, onUnmounted, ref, reactive, computed } from "vue";
import axios from "axios";
defineProps({
    image: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    action: {
        type: Object,
        route: String,
        color: String,
        label: String,
        default: () => ({
            route: "",
            color: "success",
            label: "詳細資訊",
        }),
    },
});

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
        var item = ActDID[i]
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
    console.log(ActDID);
}
</script>
<template>
    <div class="card card-plain">
        <div class="card-header p-0 position-relative">
            <a class="d-block blur-shadow-image">
                <img :src="image" :alt="title" class="img-fluid shadow border-radius-lg" loading="lazy" />
            </a>
        </div>
        <div class="card-body px-0">
            <h4>
                <a class="text-dark font-weight-bold">{{
                    title
                }}</a>
            </h4>
            <p>
                {{ description }}

            </p>
            <h6>
                {{ price }}
            </h6>

            <!-- <el-button @click="{ Actdetail(); dialogVisible = true }" class="text-lg font-weight-bolder icon-move-right"
                        :class="`text-${action.color}`">{{
                            action.label }}
                        <i class="fas fa-arrow-right text-xs ms-1"></i>
                    </el-button> -->

            <!-- <el-button type="danger" class=" m-0 p-3 text-lg cartbtn font-weight-bolder">購買</el-button> -->
        </div>
        <div v-for="item in ActDID" :key="item">
            <el-dialog v-model="dialogVisible" title="活動詳細資訊" width="50%" draggable>
                <div class="modal-header">
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <span class="dialog-footer">
                    <div>
                        <img :src="`${MVCimages}${活動圖片}`">
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

                    <el-button @click="dialogVisible = false">取消</el-button>
                    <el-button type="primary" @click="dialogVisible = false">儲存</el-button>
                </span>
            </el-dialog>
        </div>
    </div>
</template>

