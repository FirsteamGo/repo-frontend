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
    <el-button type="primary" @click="LogInPost()">
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


//////////////////////////////////////
// 登入驗證用 step1
import axios from 'axios';
import {onMounted} from 'vue';
import {useRouter} from 'vue-router';

// 登入驗證用 step2 分別定義變數，其初始值為空字串
// const 會員帳號 = ref('')
// const 密碼 = ref('')
// const config = reactive({ autoInsertSpace: false, })
// const 姓名 = ref('')
// const 電子信箱 = ref('')
// const 手機號碼 = ref('')
// const radio = ref(2)
// const form = reactive({date1: '',})
// const router = useRouter();

// 登入驗證用 step3 將所有資料丟到 const 裡面。
const memberData = reactive<memberInterface[]>([])

interface memberInterface {
  // 去 API Model 裡面看要什麼欄位
        會員id?:number, // 在這裡不能用 int
        姓名?:string,
        性別?:boolean,
        出生日期?:string,
        會員帳號?:string,
        會員密碼?:string,
        照片?:string,
        聯絡信箱?:string,
        手機號碼?:string,

}

// 登入驗證用 利用 onMounted，Vue 掛載到 DOM 上之後被調用，載入存放在 const 裡面的所有資料。
onMounted(async () =>{
  await axios.get('https://localhost:7108/api/MemberInfoes')
  .then(response => {
    memberData.splice(0,response.data.length,...response.data)
    console.log(memberData);
  })
  .catch(error => {
    console.log(error);
  })

})

// 再建一個 customerData 來存放資料，給下面方法 LogInPost 使用
const customerData = reactive<memberInterface[]>([]);
const url = ref("https://localhost:7108/api/MemberInfoes")
const LogInPost = () => { 
  // console.log('aaa');
   
    axios
        .post(`${url.value}`, {
            "account": ruleForm.account,
            "password": ruleForm.password
        })
        .then(result => {        
          // console.log(result.data);
          
            if (result.data != "帳號或密碼錯誤") {
                // console.log(result.data);
                customerData.splice(0, result.data.length, result.data)
                console.log(customerData);
                
                // let dataString = JSON.stringify(result.data)
                // localStorage.setItem("customerData", dataString)
                //router.push('/CustomerAreaView')
                
                
                alert("登入成功")

            } else {
                alert("帳號密碼有誤")
            }

        })
        .catch(error => {
            console.log("錯誤");

        })
}

///////////////////////////////////////////////////////



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
