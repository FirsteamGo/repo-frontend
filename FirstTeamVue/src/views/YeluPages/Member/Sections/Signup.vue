<template>
  
  <el-form :model="form" label-width="120px">
    
    <Memberphoto1/>

    <el-form-item label="性別">
      <el-radio-group v-model="form.resource">
        <el-radio label="男" />
        <el-radio label="女" />
      </el-radio-group>
    </el-form-item>


    <el-form-item label="姓名">
      <el-input v-model="form.name" />
    </el-form-item>

    <el-form-item label="電子信箱">
      <el-input v-model="form.name" />
    </el-form-item>

    <el-form-item label="會員帳號">
      <el-input v-model="form.name" />
    </el-form-item>

    <el-form-item label="密碼">
      <el-input v-model="form.name" />
    </el-form-item>

    <el-form-item label="手機號碼">
      <el-input v-model="form.name" />
    </el-form-item>

  
    <el-form-item label="出生年月日">
      <el-col :span="24">
        <el-date-picker
          v-model="form.date1"
          type="date"
          placeholder="您的出生日期"
          style="width: 100%"
        />
      </el-col>
      
    </el-form-item>
    
    <el-form-item label="備註">
      <el-input v-model="form.desc" type="textarea" />
    </el-form-item>

    <el-form-item>

      <el-button type="primary" @click="onSubmit">
        註冊會員
      </el-button>
      <el-button @click="onSubmit">
        重新填寫
      </el-button>
      <el-button @click="onSubmit">
        註冊測試
      </el-button>



    </el-form-item>

  </el-form>
</template>

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
