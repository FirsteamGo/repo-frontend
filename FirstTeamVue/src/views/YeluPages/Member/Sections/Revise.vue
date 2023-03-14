<script lang="ts" setup>
import { reactive } from 'vue'
import Memberphoto1 from "./Memberphoto1.vue";

// do not use same name with ref
const form = reactive({
  name: '',
  region: '',
  date1: '',
  date2: '',
  delivery: false,
  type: [],
  resource: '',
  desc: '',
})

const onSubmit = () => {
  console.log('submit!')
}
</script>


<template>
  
  <el-form :model="form" label-width="120px">
    
    <Memberphoto1/>

    <el-form-item label="姓名">
      <el-input v-model="form.name" />
    </el-form-item>

    <el-form-item label="電子信箱">
      <el-input v-model="form.name" />
    </el-form-item>

    <el-form-item label="密碼">
      <el-input v-model="form.name" />
    </el-form-item>

    <el-form-item label="手機號碼">
      <el-input v-model="form.name" />
    </el-form-item>
    
    <el-form-item label="備註">
      <el-input v-model="form.desc" type="textarea" />
    </el-form-item>

    <el-form-item>

      <el-button type="primary" @click="onSubmit">
        修改會員資料
      </el-button>
      
      <el-button @click="onSubmit">
        修改測試
      </el-button>



    </el-form-item>

  </el-form>
</template>

