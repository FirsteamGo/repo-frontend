<style>
thead {
  background-color: blue;
  color: cornsilk;
}
</style>

<template>
    <h3>套裝訂單購物車</h3>
    
  <div  class="container">
   
    <div class="form-group">
      <table class="table table-striped table-hover">
        <thead>
          <tr>
            <td>會員資訊</td>            
            <td>套裝行程</td>
            <td>套裝行程規劃</td>            
            <td>確認</td>
          </tr>
        </thead>

        <tbody>
          <tr >          

                <td>
                    會員資訊<button class="btn btn-primary" @click="mem=true">詳細資訊</button>
                </td>
                <td>
                    套裝行程<button class="btn btn-primary" @click="Setdetail=true">詳細資訊</button>
                </td>
                <td>
                    套裝行程規劃<button class="btn btn-primary" @click="Setorderdetail=true">詳細資訊</button>
                </td>
                
                <td>
                    <button class="btn btn-primary" @click="Del()">刪除</button>
                    <button class="btn btn-warning" @click="insert()">確認</button>                    
                </td>         

          </tr>
        </tbody>
      </table>
    </div>

    <!-- Modal -->

    <div>
          <el-dialog v-model="mem" title="會員詳細資訊" width="50%" draggable>
            <div class="modal-header">

              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <span class="dialog-footer">
              <div>
                <img :src="`${mvc}${meda.照片}`" >
              </div>
              <div>
                <label class="form-lable">會員姓名: {{meda.姓名}}</label>                             
              </div>
              <div>
                <label class="form-lable">連絡信箱: {{ meda.連絡信箱 }}</label>
              </div>
              <div>
                <label class="form-lable">電話號碼: {{ meda.電話號碼 }}</label>
              </div>
              

            </span>

          </el-dialog>
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
        <div>
          <el-dialog v-model="Setorderdetail" title="套裝行程規劃詳細資訊" width="50%" draggable>
            <div class="modal-header">

              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <span class="dialog-footer">
              
              <div>
                <label class="form-lable">預計參加人數: {{ seto.numberOfPeople }}</label>
              </div>
              <div>
                <label class="form-lable">入住時間:{{ formatDate(seto.data[0]) }}</label>
              </div>
              <div>
                <label class="form-lable">退住時間:{{ formatDate(seto.data[1]) }}</label>
              </div>
              <div>
                <label class="form-lable">合計總價: {{ seto.合計總價 }}</label>
              </div>
              <div>
                <label class="form-lable">評分: {{ seto.評分 }}</label>
              </div>
              <div>
                <label class="form-lable">評論: {{ seto.評論 }}</label>
              </div>
            </span>

          </el-dialog>
        </div>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue';
const mvc = ref("https://localhost:7120/images/");


const mem = ref(false)
const Setdetail = ref(false)
const Setorderdetail =ref(false)

    const seto = JSON.parse(localStorage.getItem('setorder'))
    // console.log(seto);
    const setod= JSON.parse(localStorage.getItem('setorderdetail'))  
    const meda= JSON.parse(localStorage.getItem('customerData'))

const formatDate = (dateString)=> {
      const date = new Date(dateString);
      const year = date.getFullYear();
      const month = (date.getMonth() + 1).toString().padStart(2, "0");
      const day = date.getDate().toString().padStart(2, "0");
      return `${year}-${month}-${day}`;
    }



</script>