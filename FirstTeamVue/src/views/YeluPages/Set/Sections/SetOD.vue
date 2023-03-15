<script  setup>
import { ref, reactive, onMounted } from 'vue'
import { Edit } from '@element-plus/icons-vue';
import axios from 'axios';

const webApi = ref("https://localhost:7108/api/SetOrderDetails");
const mvc = ref("https://localhost:7120/images/")

const dialogVisible = ref(false)
const SetOD = reactive([])
const SetODID = reactive([])
const 套裝行程id = ref('')
const 地區= ref('')
const 套裝方案= ref('')
const 套裝細項= ref('')
const 套裝行程價格= ref(0)
const 活動名稱= ref('')
const image= ref('')
const 營區名稱= ref('')
const 縣市= ref('')
const 項目內容 = ref('')



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
let detail=(套裝行程id)=>{
  var SetOD =[]
  
  for(let i =0;i<SetODID.length;i++){
    var item= SetODID[i]
    
    if(item.套裝行程id==套裝行程id){
      
      item.Edit=true;
      地區.value=item.地區;      
      套裝方案.value=item.套裝方案;
      套裝細項.value=item.套裝細項;
      套裝行程價格.value=item.套裝行程價格;
      活動名稱.value=item.活動名稱;
      image.value=item.活動圖片;
      營區名稱.value=item.營區名稱;
      縣市.value=item.縣市;
      項目內容.value=item.項目內容;
      
    }
    else{item.Edit=false;}
    
    SetOD.push(item);
  }
  SetODID.splice(0,SetOD.length,...SetOD)
  console.log(SetODID);
}



</script>
<template>
  套裝行程，可以幫你完成你的夢想！
  <el-row>
    <el-col v-for="item in SetODID" :key="item" :span="8">
      <el-card :body-style="{ padding: '0px' }" shadow="always">
        <img :src="`${mvc}${item.活動圖片}`" style="height: 300px;" />
        <div style="padding: 15px">
          <span>{{ item.套裝方案 }}</span>
          <div>

            <el-button type="primary" :icon="Edit" circle @click="{detail(item.套裝行程id);dialogVisible = true }" class="detail" />
            <el-button type="primary" @click=" detail(item.套裝行程id)">
              套裝行程訂購
            </el-button>
          </div>
        </div>
      </el-card>
    </el-col>
  </el-row>
        <div>
          <el-dialog v-model="dialogVisible" title="詳細資訊" width="50%" draggable>
            <div class="modal-header">

              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <span class="dialog-footer">
              <div>
                <img :src="`${mvc}${image}`" >
              </div>
              <div>
                <label class="form-lable">方案: {{套裝方案}}</label>                             
              </div>
              <div>
                <label class="form-lable">細項: {{ 套裝細項 }}</label>
              </div>
              <div>
                <label class="form-lable">價格: {{ 套裝行程價格 }} 元 / 人</label>
              </div>
              <div>
                <label class="form-lable">相關活動: {{ 活動名稱 }}</label>
              </div>
              <div>
                <label class="form-lable">營區名稱: {{ 營區名稱 }}</label>
              </div>
              <div>
                <label class="form-lable">營區地區: {{ 地區 }}</label>
              </div>
              <div>
                <label class="form-lable">營區縣市:{{ 縣市 }}</label>
              </div>

              <div>
                <label class="form-lable">露營方式: {{ 項目內容 }}</label>
              </div>


              <el-button @click="dialogVisible = false">取消</el-button>
              <el-button type="primary" @click="  dialogVisible = false ">
                儲存
              </el-button>
            </span>

          </el-dialog>
        </div>
 
    
</template>
  
<style>
.detail:hover:after {
  content: "詳細資訊";
  position: absolute;
  top: 100%;

  background: #bbb;
  padding: 5px;
  border: 1px solid #ccc;
}
</style>
