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

                    <!-- 選擇器1 -->
                    <span>露營區域</span>
                <el-select v-model="value" class="m-2" placeholder="請選擇" >
                    <el-option v-for="item in option1" :key="item.value" :label="item.label" :value="item.value"/>
                </el-select>
                <p></p>
                  <!-- 選擇器2 -->
                  <span>露營縣市</span>
                <el-select v-model="value" class="m-2" placeholder="請選擇" >
                    <el-option v-for="item in option1" :key="item.value" :label="item.label" :value="item.value"/>
                </el-select>
                <p></p>
                  <!-- 選擇器3 -->
                <div class="demo-date-picker">
                  <div class="block">
                    <span class="demonstration">露營日期</span>
                    <p></p>
                    <el-date-picker
                      v-model="date"
                      type="daterange"
                      range-separator="To"
                      start-placeholder="開始日期"
                      end-placeholder="結束日期"
                      size="default"
                    />
                  </div>
      
    </div>



        <el-row class="mb-4 pt-4">
        

          <el-button type="warning" >立即搜尋</el-button>
          
          <router-link :to="{ name: 'camp' }" >
            <el-button type="info"  class="mx-4">點我看更多</el-button>
          </router-link>
        </el-row>


    



    </el-card>
          </el-aside>


<!-- 右側區塊 -->

          <el-main >

      
          </el-main>
        </el-container>
      </el-container>
    </div>
    
  </template>
  

 
  <script lang="ts" setup>
  import { ref,} from 'vue'
  

  //日期選擇
  const date = ref('')
  const value = ref('')
  const option1 = [
    {
      value: '1',
      label: '北部',
    },
    {
      value: '2',
      label: '中部',
    },
    {
      value: '3',
      label: '南部',
    },
   
  ]

  // const option2 = [
  //   {
  //     value: '4',
  //     label: '新北',
  //   },
  //   {
  //     value: '5',
  //     label: '桃園',
  //   },
  //   {
  //     value: '6',
  //     label: '新竹',
  //   },
   
  // ]



  

  </script>
  
