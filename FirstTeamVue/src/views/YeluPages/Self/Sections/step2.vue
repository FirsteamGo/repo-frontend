<template>
  
<!-- 輪播 -->
<div class="common-layout">
<el-container>
  <!-- <el-aside width="60%">
    <el-carousel indicator-position="outside">
      <el-carousel-item v-for="item in SelfODID" :key="item">
        <img :src="`${mvc}${item.活動圖片}`" style=" height: 300px; display: block; margin: 0 auto;" />
      </el-carousel-item>
    </el-carousel>
  </el-aside> -->

<el-main>
  <el-form :model="form" label-width="120px">
    <el-form-item label="訂單編號"  hidden>{{selforder}}</el-form-item>

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
    
    <!-- <el-form-item label="合計總價 :" >{{ totalPrice }} 元</el-form-item> -->
    

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
  

</template>

  
<script setup>
  import axios from 'axios';
  import { reactive,ref,computed,onMounted } from 'vue';
  const webApi = ref("https://localhost:7108/api/SelfOrders");

 

  </script>





  
  
  <style>
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
  