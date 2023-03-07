<template>
    <div class="common-layout">
      <el-container>
        <el-header></el-header>
        <el-container>
            <!-- 加上 row(列)  -->
          <el-aside width="400px" class="row justify-content-end">
            <!-- 卡片 -->
            <el-card class="box-card">
                <template #header>
                <div class="card-header">
                    <span style="text-align: center; display:block;">營區選擇</span>
                </div>
                </template>
                <!-- 要研究下行寫法 -->
                <!-- <div  v-for="o in 3" :key="o" class="text item">{{ '露營縣市 ' + o }} -->
                <div  v-for="o in 3" :key="o" class="text item">{{ '露營縣市 ' + o }}

            <!-- 選擇器 -->
        <el-select v-model="value" class="m-2" placeholder="Select" >
           
            <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
            />
        </el-select>

    </div>
    <el-row class="mb-4 pt-4">
    <el-button type="warning">立即搜尋</el-button>
    <el-button type="info">點我看更多</el-button>
</el-row>
    </el-card>
          </el-aside>

          <el-main >放依照左側條件選擇後的頁面</el-main>
        </el-container>
      </el-container>
    </div>
  </template>
  

 
  <script lang="ts" setup>
  import { ref } from 'vue'
  
  const value = ref('')
  
  const options = [
    {
      value: 'Option1',
      label: 'Option1',
    },
    {
      value: 'Option2',
      label: 'Option2',
    },
    {
      value: 'Option3',
      label: 'Option3',
    },
   
  ]



 
  </script>
  

  