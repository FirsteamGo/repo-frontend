<template>
  <div class="form-container">
    <el-form
    ref="ruleFormRef"
    :model="ruleForm"
    :rules="rules"
    label-width="120px"
    class="demo-ruleForm"
    :size="formSize"
    status-icon
  >
  
    <el-form-item label="會員帳號" prop="account">
      <el-input v-model="ruleForm.account" />
    </el-form-item>
    
    <el-form-item label="密碼" prop="password">
      <el-input v-model="ruleForm.password" />
    </el-form-item>

    <el-form-item>
        <el-checkbox label="記住帳號，密碼"/>
    </el-form-item>

    <el-button type="primary" @click="submitForm(ruleFormRef)">
        登入
    </el-button>
    <el-button type="primary" @click="getForm(ruleFormRef)">
        登入測試 Get
    </el-button>
    
    <div class="flex justify-space-between mb-4 flex-wrap gap-4">
      <el-button
      v-for="button in buttons"
      :key="button.text"
      :type="button.type"
      text
      >{{ button.text }}
      </el-button>
    </div>
  
    </el-form>

    
      
  </div>
  
  
      
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue';
import type { FormInstance, FormRules } from 'element-plus';
const formSize = ref('default')
const ruleFormRef = ref<FormInstance>()
const ruleForm = reactive({
  account: '',
  password: '',
  count: '',
})

const rules = reactive<FormRules>({
  account: [
    { required: true, message: '請輸入會員帳號', trigger: 'blur' },
  ],
  password: [
    {required: true, message: '請輸入密碼', trigger: 'blur',},
  ],
  
})

const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  await formEl.validate((valid, fields) => {
    if (valid) {
      console.log('submit!')
    } else {
      console.log('error submit!', fields)
    }
  })
}


// get 要改內容
const getForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.resetFields()
}

const options = Array.from({ length: 10000 }).map((_, idx) => ({
  value: `${idx + 1}`,
  label: `${idx + 1}`,
}))

const buttons = [
  { type: 'primary', text: '忘記密碼' },
] as const


</script>

<style>
  .form-container {
    width: 50%; /* 將表單寬度設置為原來的一半 */
    /* margin: 0 auto; 將表單水平居中 */
  }
  

</style>
