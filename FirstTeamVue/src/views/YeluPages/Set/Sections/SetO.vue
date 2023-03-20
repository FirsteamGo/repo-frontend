<template>
  <el-button type="primary" round style="width: 10%;margin:20px;"  @click="Setdetail=true">套裝行程詳細資訊</el-button>

  <div class="common-layout">
    <el-container style="height: 500px;">
      <el-aside width="60%" style="display: flex;justify-content: center;align-items: center;">
        <weather/>
      </el-aside>
      <el-main>
        <el-form :model="form" label-width="120px">
      
      <el-form-item label="訂單編號"  hidden>{{setordernu}}</el-form-item>

      <el-form-item label="露營日期" class="demonstration">
           <el-date-picker
              v-model="form.data"
              type="daterange"
              range-separator="To"
              start-placeholder="開始日期"
              end-placeholder="結束日期"
              size="default"
              /></el-form-item>         
      <el-form-item label="預計人數 :">
        <el-input type="text" v-model="form.numberOfPeople" placeholder="請填入參加人數"  />
      </el-form-item>        
       <el-form-item label="合計總價 :" >{{ totalPrice }} 元</el-form-item>


      <el-form-item label="評論 :" style="width: 100%;">
        <el-input v-model="form.評論" type="textarea" />
      </el-form-item>
      <el-form-item label="評分 :">
        <el-select v-model="form.評分" placeholder="請評分謝謝">
          <el-option label="1" value="1" />
          <el-option label="2" value="2" />
          <el-option label="3" value="3" />
          <el-option label="4" value="4" />
          <el-option label="5" value="5" />
        </el-select>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="onSubmit">確認</el-button>        
      </el-form-item>
    </el-form>
      </el-main>
    </el-container>

  </div>
    

    <div>
          <el-dialog v-model="Setdetail" title="套裝方案詳細資訊" width="50%" draggable>
            <div class="modal-header">

              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <span class="dialog-footer">
              <div>
                <img :src="`${mvc}${setod.活動圖片}`" >
              </div>
              <div>
                <label class="form-lable">營區地區: {{ setod.地區 }}</label>
              </div>
              <div>
                <label class="form-lable">營區縣市:{{ setod.縣市 }}</label>
              </div>
              <div>
                <label class="form-lable">營區名稱: {{ setod.營區名稱 }}</label>
              </div>
              <div>
                <label class="form-lable">露營方式: {{ setod.項目內容 }}</label>
              </div>
              <div>
                <label class="form-lable">相關活動: {{ setod.活動名稱 }}</label>
              </div>
              <div>
                <label class="form-lable">方案: {{ setod.套裝方案}}</label>                             
              </div>
              <div>
                <label class="form-lable">細項: {{ setod.套裝細項 }}</label>
              </div>
              <div>
                <label class="form-lable">單價: {{ setod.套裝行程價格 }} 元 / 人</label>
              </div>
              
            </span>

          </el-dialog>
        </div>
  </template>
  
  <script  setup>
  import { values } from 'lodash';
  import axios from 'axios';
  import { reactive,ref,computed,onMounted } from 'vue';
  import weather from './weather.vue';
  const webApi = ref("https://localhost:7108/api/SetOrderDetails");
  const mvc = ref("https://localhost:7120/images/");
  const now = new Date();
  const Setdetail = ref(false)
  const SetODID = reactive([])
  
  const setod= JSON.parse(localStorage.getItem('setorderdetail'))  
  const meda= JSON.parse(localStorage.getItem('customerData'))
 
  const pricePerPerson=ref(setod.套裝行程價格)
  const Seto = reactive([])
  const 套裝行程id=ref(0)
  const 會員id=ref(0)
  
  // do not use same name with ref
  const form = reactive({        
    訂單編號: '',
    評論: '',
    評分: '',
    data: [],  
    預計人數: 0,
    合計總價:0,  
  })
  const gitpricePerPerson = onMounted(()=>{
     axios.get(webApi.value)
    .then(res => {    
          
      SetODID.splice(0, res.data.length, ...res.data);
    })
    .catch((err) => {
      console.error(err);
    })
  })
  

  const onSubmit = () => {

    console.log('submit!')
    const setordernu = `Set${now.getFullYear()}${(now.getMonth() + 1).toString().padStart(2, "0")}${now.getDate().toString().padStart(2, "0")}${now.getHours().toString().padStart(2, "0")}${now.getMinutes().toString().padStart(2, "0")}${now.getSeconds().toString().padStart(2, "0")}`;
    form.訂單編號=setordernu;
    form.預計人數 = form.numberOfPeople;
    form.合計總價 = totalPrice.value; 
    console.log(form);
    let Seto = JSON.stringify(form)

    localStorage.setItem('setorder', Seto)
    alert("請按下一步進入購物車")


  }

  const setordernu = `Set${now.getFullYear()}${(now.getMonth() + 1).toString().padStart(2, "0")}${now.getDate().toString().padStart(2, "0")}${now.getHours().toString().padStart(2, "0")}${now.getMinutes().toString().padStart(2, "0")}${now.getSeconds().toString().padStart(2, "0")}`;


  const formatDate = (dateString)=> {
      const date = new Date(dateString);
      const year = date.getFullYear();
      const month = (date.getMonth() + 1).toString().padStart(2, "0");
      const day = date.getDate().toString().padStart(2, "0");
      return `${year}-${month}-${day}`;
    }

   
    const totalPrice = computed(() => {
    const people = parseInt(form.numberOfPeople);
    const price = parseInt(pricePerPerson.value);
    return isNaN(people) || isNaN(price) ? 0 : people * price;
    });

    
  </script>
  <style scoped>
  .el-carousel__item h3 {
    display: flex;
    color: #475669;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n + 1) {
    background-color: #d3dce6;
  }
  </style>
  