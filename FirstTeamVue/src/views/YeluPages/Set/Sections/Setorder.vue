<template>

  
  <el-form-item label="訂單編號">{{訂單編號}}</el-form-item>
  
    <div class="demo-date-picker m-1">
      <div class="block">
        
          <el-form-item label="露營日期" class="demonstration">
           <el-date-picker
              v-model="data"
              type="daterange"
              range-separator="To"
              start-placeholder="開始日期"
              end-placeholder="結束日期"
              size="default"
              /></el-form-item> 
          <div>選擇的開始日期: {{ data[0] }}</div>
          <div>選擇的結束日期: {{ data[1] }}</div>
          <div>入住時間: {{ formatDate(data[0]) }}</div>
          <div>退住時間: {{ formatDate(data[1]) }}</div>
                   
       </div>

      </div>
    
      <el-form-item label="預計人數 :">
        <el-input type="text" v-model="numberOfPeople" placeholder="請填入參加人數" class="a" />
      </el-form-item>        
       <el-form-item label="合計總價 :">{{ totalPrice }}</el-form-item>
      
    <el-form-item label="評論 :" class="width: 30%;">
      <el-input v-model="form.desc" type="textarea" />
    </el-form-item>

    <el-form-item label="評分 :">      
      <el-input-number v-model="num" :min="1" :max="5" @change="handleChange" />
    </el-form-item>
      
    
  </template>
  
  <script lang="ts" setup>
  import { ref, reactive, onMounted,computed } from 'vue'
  const data= ref('')
  const numberOfPeople=ref('')
  const pricePerPerson=ref('1000')
  const form = reactive({desc:''})
  const now = new Date();
  
  const 訂單編號 = `Set${now.getFullYear()}${(now.getMonth() + 1).toString().padStart(2, "0")}
  ${now.getDate().toString().padStart(2, "0")}${now.getHours().toString().padStart(2, "0")}
  ${now.getMinutes().toString().padStart(2, "0")}${now.getSeconds().toString().padStart(2, "0")}`;

  console.log(訂單編號);
  
  const formatDate = (dateString)=> {
      const date = new Date(dateString);
      const year = date.getFullYear();
      const month = (date.getMonth() + 1).toString().padStart(2, "0");
      const day = date.getDate().toString().padStart(2, "0");
      return `${year}-${month}-${day}`;
    }
    const totalPrice = computed(() => {
    const people = parseInt(numberOfPeople.value);
    const price = parseInt(pricePerPerson.value);
    return isNaN(people) || isNaN(price) ? 0 : people * price;
    });
    const num = ref(1)
    const handleChange = (value: number) => {
     console.log(value)
    }
  
 
  </script>
  <style>
  .a{
    width: auto;
  }
</style>

