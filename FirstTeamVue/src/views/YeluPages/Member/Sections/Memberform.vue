
<template>
    <el-form :model="form" label-width="120px">
      
      <el-form-item label="姓名">
        <el-input v-model="form.name" />
      </el-form-item>

      <el-form-item label="性別">
        <el-radio-group v-model="form.resource">
          <el-radio label="男" />
          <el-radio label="女" />
        </el-radio-group>
      </el-form-item>

      <el-form-item label="出生日期">
        <el-col :span="11">
          <el-date-picker
            v-model="form.date1"
            type="date"
            placeholder="Pick a date"
            style="width: 100%"
          />
        </el-col>
      </el-form-item>

      <el-form-item label="電話">
        <el-input v-model="form.phone" />
      </el-form-item>

      <el-form-item label="聯絡信箱">
        <el-input v-model="form.email" />
      </el-form-item>

      <el-form-item label="會員帳號">
        <el-input v-model="form.account" />
      </el-form-item>

      <el-form-item label="會員密碼">
        <el-input v-model="form.password" />
      </el-form-item>


      <el-form-item>
        <el-button type="primary" @click="onSubmit">Create</el-button>
        <el-button>Cancel</el-button>
      </el-form-item>

      
    </el-form>
  </template>
  
  <script lang="ts" setup>
  import { reactive } from 'vue'
  import axios from 'axios';
  // do not use same name with ref
  const form = reactive({
    name: '',
    resource: '',
    date1: '',
    phone: '',
    email: '',
    account: '',
    password: '',
  })
  
  const onSubmit = () => {
    console.log('submit!')
    axios.post('url',form)
  }
  </script>
  
  
  