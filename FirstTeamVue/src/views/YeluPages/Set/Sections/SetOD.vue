<template>
  <h4 style="text-align:center;">套裝行程，可以幫你完成你的夢想！</h4>

  <el-row>
    <el-col v-for="item in SetODID" :key="item" :span="8">
      <el-card :body-style="{ padding: '0px' }" shadow="always">
        <img :src="`${mvc}${item.活動圖片}`" style="height: 300px;" />
        <div style="padding: 15px">
          <p>套裝行程：{{ item.套裝方案 }}</p>
          <p>營地：{{ item.營區名稱 }}</p>
          <p><span class="material-icons">pin_drop
            </span>縣市：{{ item.縣市 }}</p>
          <div style="margin-top: 5px;">

            <el-button type="primary" :icon="Edit" circle @click="{ detail(item.套裝行程id); dialogVisible = true }"
              class="detail" />
            <el-button type="primary" @click="shopadd(item.套裝行程id)">
              套裝行程訂購
            </el-button>
            <el-button type="danger" @click="Del"> <span class="material-icons">
                delete
              </span></el-button>

          </div>
        </div>
      </el-card>
    </el-col>
  </el-row>
  <div>
    <el-dialog v-model="dialogVisible" title="套裝詳細資訊" width="50%" draggable>
      <div class="modal-header">
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>

      <el-container>
        <el-aside width="60%">
          <img :src="`${mvc}${image}`" style="width: 400px; height: 300px;">
        </el-aside>
        <el-main>
          <div>
            <label class="form-lable">方案: {{ 套裝方案 }}</label>
          </div>
          <div>
            <label class="form-lable"><span class="material-icons">pin_drop
              </span>地區 | {{ 地區 }}</label>
          </div>
          <div>
            <label class="form-lable"><span class="material-icons">pin_drop
              </span>縣市 | {{ 縣市 }}</label>
          </div>
          <div>
            <label class="form-lable">露營方式: {{ 項目內容 }}</label>
          </div>
          <div>
            <label class="form-lable">細項: {{ 套裝細項 }}</label>
          </div>
          <div>
            <label class="form-lable">相關活動: {{ 活動名稱 }}</label>
          </div>
          <div>
            <label class="form-lable">營區名稱: {{ 營區名稱 }}</label>
          </div>
          <label class="form-lable"><span class="material-icons">attach_money</span> TWD
            <span class="text-primary">{{ 套裝行程價格 }} </span> / 人</label>
        </el-main>
      </el-container>

    </el-dialog>
  </div>
</template>
  
<script  setup>
// import { useRouter } from 'vue-router';
import { ref, reactive, onMounted } from 'vue'
import { Edit } from '@element-plus/icons-vue';
import axios from 'axios';

//呼叫 pinia
import { useSetPinia } from "../../../../stores/setpiana";
const EventAll = useSetPinia();


// onMounted(EventAll.EventActGet);

const webApi = ref("https://localhost:7108/api/SetOrderDetails");
const mvc = ref("https://localhost:7120/images/")

const dialogVisible = ref(false)
const SetOD = reactive([])
const SetODID = reactive([])
const 套裝行程id = ref('')
const 地區 = ref('')
const 套裝方案 = ref('')
const 套裝細項 = ref('')
const 套裝行程價格 = ref(0)
const 活動名稱 = ref('')
const image = ref('')
const 營區名稱 = ref('')
const 縣市 = ref('')
const 項目內容 = ref('')
const setdd = reactive([])
// const quantity=ref(0)

// const router = useRouter()


const getSetODDTOes = onMounted(async () => {
  await axios.get(webApi.value)
    .then(res => {

      for (var i = 0; i < res.data.length; i++) {
        var item = res.data[i];
        item.Edit = false;


      }
      SetODID.splice(0, res.data.length, ...res.data);
    })
    .catch((err) => {
      console.error(err);
    })

})
let detail = (套裝行程id) => {
  var SetOD = []

  for (let i = 0; i < SetODID.length; i++) {
    var item = SetODID[i]

    if (item.套裝行程id == 套裝行程id) {

      item.Edit = true;
      地區.value = item.地區;
      套裝方案.value = item.套裝方案;
      套裝細項.value = item.套裝細項;
      套裝行程價格.value = item.套裝行程價格;
      活動名稱.value = item.活動名稱;
      image.value = item.活動圖片;
      營區名稱.value = item.營區名稱;
      縣市.value = item.縣市;
      項目內容.value = item.項目內容;

    }
    else { item.Edit = false; }

    SetOD.push(item);
  }
  SetODID.splice(0, SetOD.length, ...SetOD)
  // console.log(SetODID);
}
const shopadd = (套裝行程id) => {
  var SetOD = []

  for (let i = 0; i < SetODID.length; i++) {
    var item = SetODID[i]

    if (item.套裝行程id == 套裝行程id) {


      let setdd = JSON.stringify(item)

      localStorage.setItem('setorderdetail', setdd)
      // router.push('Sections/setO')
    }
    else { item.Edit = false; }

    SetOD.push(item);
  }
  SetODID.splice(0, SetOD.length, ...SetOD)
  // console.log(SetODID);
  alert('感謝訂購套裝行程')

}
const Del = () => {
  alert("已刪除套裝行程")
  localStorage.removeItem('setorderdetail');


}

</script>

<style>
.detail:hover:after {
  content: "詳細資訊";
  padding: 5px;
}

.form-lable {
  margin-bottom: 10px;
}
</style>
