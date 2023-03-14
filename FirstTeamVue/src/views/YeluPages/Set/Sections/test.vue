<template>
    <el-form :model="form" label-width="120px">
      <el-form-item label="Activity name">
        <el-input v-model="form.name" />
      </el-form-item>
      <el-form-item label="訂單編號" v-model="form.訂單編號">{{setordernu}}</el-form-item>

      <el-form-item label="露營日期" class="demonstration">
           <el-date-picker
              v-model="form.data"
              type="daterange"
              range-separator="To"
              start-placeholder="開始日期"
              end-placeholder="結束日期"
              size="default"
              /></el-form-item> 
              <div>入住時間: {{ formatDate(form.data[0]) }}</div>
              <div>退住時間: {{ formatDate(form.data[1]) }}</div>
      <el-form-item label="預計人數 :">
        <el-input type="text" v-model="form.numberOfPeople" placeholder="請填入參加人數"  />
      </el-form-item>        
       <el-form-item label="合計總價 :" >{{ form.合計總價}}</el-form-item>


      <el-form-item label="評論 :" style="width: 30%;">
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

      
      
      <el-form-item label="Activity type">
        <el-checkbox-group v-model="form.type">
          <el-checkbox label="Online activities" name="type" />
          <el-checkbox label="Promotion activities" name="type" />
          <el-checkbox label="Offline activities" name="type" />
          <el-checkbox label="Simple brand exposure" name="type" />
        </el-checkbox-group>
      </el-form-item>
      <el-form-item label="Resources">
        <el-radio-group v-model="form.resource">
          <el-radio label="Sponsor" />
          <el-radio label="Venue" />
        </el-radio-group>
      </el-form-item>
      
      <el-form-item>
        <el-button type="primary" @click="onSubmit">Create</el-button>
        <el-button>Cancel</el-button>
      </el-form-item>
    </el-form>
  </template>
  
  <script lang="ts" setup>
  import { values } from 'lodash';
import { reactive,ref,computed } from 'vue'
  const now = new Date();
  const pricePerPerson=ref('1000')
  
  // do not use same name with ref
  const form = reactive({
    name: '',
    訂單編號: '',
    評分: '',
    data: [],  
    numberOfPeople: '',
    合計總價:0,
    type: [],
    resource: '',
    評論: '',
  })
  
  const onSubmit = () => {
    console.log('submit!')
    const setordernu = `Set${now.getFullYear()}${(now.getMonth() + 1).toString().padStart(2, "0")}${now.getDate().toString().padStart(2, "0")}${now.getHours().toString().padStart(2, "0")}${now.getMinutes().toString().padStart(2, "0")}${now.getSeconds().toString().padStart(2, "0")}`;
    form.訂單編號=setordernu;
    
    // const totalPrice = computed(() => {
    // const people = parseInt(form.numberOfPeople);
    // const price = parseInt(pricePerPerson.value);
    // return isNaN(people) || isNaN(price) ? 0 : people * price;
    // });
    // form.合計總價=totalPrice

    console.log(form);
    
  }

  const setordernu = `Set${now.getFullYear()}${(now.getMonth() + 1).toString().padStart(2, "0")}${now.getDate().toString().padStart(2, "0")}${now.getHours().toString().padStart(2, "0")}${now.getMinutes().toString().padStart(2, "0")}${now.getSeconds().toString().padStart(2, "0")}`;


  const formatDate = (dateString)=> {
      const date = new Date(dateString);
      const year = date.getFullYear();
      const month = (date.getMonth() + 1).toString().padStart(2, "0");
      const day = date.getDate().toString().padStart(2, "0");
      return `${year}-${month}-${day}`;
    }

     form.合計總價 = computed(() => {
    const people = parseInt(form.numberOfPeople);
    const price = parseInt(pricePerPerson.value);
    return isNaN(people) || isNaN(price) ? 0 : people * price;
    });

  </script>
  