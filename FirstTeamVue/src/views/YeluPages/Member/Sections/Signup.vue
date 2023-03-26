

<script lang="ts" setup>
import { reactive, ref } from 'vue'
// import Memberphoto1 from "./Memberphoto1.vue";
import axios from 'axios';
import type { FormInstance } from 'element-plus'
import Memberphoto1 from './Memberphoto1.vue';
import emailjs from 'emailjs-com';


const ruleFormRef = ref()

// do not use same name with ref
// 創建一個 ruleform 紀錄要存放的資料
const ruleForm = reactive({
  // picture:'',
  CustomerPhoto: '',
  CustomerGender: '',
  customerName: '',
  customerEmail: '',
  customerAccount: '',
  customerPassword: '',
  customerPhone: '',
  customerBirthDate: '',

})

// 確認欄位有沒有填資料
const rules = reactive({

    customerName: [
        { required: true, message: '請輸入姓名', trigger: 'blur' },
        { min: 2, max: 20, message: '姓名長度至少大於2個字', trigger: 'blur' },
    ],
    customerEmail: [
        { required: true, type: 'email', message: '請輸入電子郵件', trigger: 'blur' },
    ],
     customerAccount: [
        { required: true, message: '請輸入會員帳號', trigger: 'blur' },
    ],
    customerPassword: [
        { required: true, message: '請輸入密碼', trigger: 'blur' },
        { min: 6, max: 10, message: '請輸入6~10個字元', trigger: 'blur' },
        { pattern: '(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[^a-zA-Z0-9]).{6,10}', message: '必須包含英數字、特殊字元', trigger: 'blur' },
    ],
    customerPhone: [
        { required: true, message: '請輸入電話號碼', trigger: 'blur' },
        // { length: 12, message: '請輸入正確電話號碼', trigger: 'blur' },
        // { pattern: /\d{4}-\d{3}-\d{3}/, message: '請輸入正確電話號碼', trigger: 'blur' },
    ],
    customerBirthDate: [
        {
            type: 'date',
            required: true,
            message: '請選擇生日',
            trigger: 'blur',
        },
    ],
    
})





// 註冊鈕驗證功能
// 當按下註冊鈕執行此功能(submitForm)，裡面有 SignUpPost 功能
const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  await formEl.validate((valid, fields) => {
    if (valid) {
      SignUpPost()
      console.log('submit!')
    } else {
      console.log('error submit!', fields)
    }
  })
}

// 叫用 api 裡面的控制器(看是要用 post 還是 get 功能，要去 controller 裡面新建一個 post api 來用，還要新建一個 DTO)
const url = ref("https://localhost:7108/api/MemberInfoes/SignUp") // 要改網址列

const SignUpPost = () => {
  axios.post(`${url.value}`, {
    // "picture": ruleForm.picture,
    "照片": ruleForm.CustomerPhoto,
    "性別": ruleForm.CustomerGender,
    "姓名": ruleForm.customerName,
    "連絡信箱": ruleForm.customerEmail,
    "會員帳號": ruleForm.customerAccount,
    "會員密碼": ruleForm.customerPassword,
    "電話號碼": ruleForm.customerPhone,
    "出生日期": ruleForm.customerBirthDate,
  }).then(result => {
    console.log(result.data);
    alert("註冊成功")
  }).catch(error => {
    console.log(error);
    console.log("錯誤");
  })
}
// 註冊測試功能，按下按鈕後將資料帶入欄位。
const SignUpGet = () => {
  axios
    .get("https://localhost:7108/api/MemberInfoes/1")
    .then(result => {
      console.log(result.data);
      // ruleForm.picture = result.data.picture
      ruleForm.CustomerPhoto = result.data.照片
      ruleForm.CustomerGender = result.data.性別
      ruleForm.customerName = result.data.姓名
      ruleForm.customerEmail = result.data.連絡信箱
      ruleForm.customerAccount = result.data.會員帳號
      ruleForm.customerPhone = result.data.電話號碼
      ruleForm.customerBirthDate = result.data.出生日期
      ruleForm.customerPassword = result.data.會員密碼
    })
    .catch(error => {
      console.log(error);
    })
}

const sendEmail = () => {
  emailjs.init('fX63Yjh2AO1BY_O5U');
  const template_params = {
    from_name: "skunk00605@yahoo.com.tw",
    to: ruleForm.customerEmail,

  };
  emailjs
    .send('service_svzw01k', 'template_ofnap0e', template_params)
    .then(response => {
      console.log('SUCCESS!', response.status, response.text);
      alert('寄信成功，請去收信');
    })
    .catch(error => {
      console.log('FAILED...', error);
    });
};

</script>

<template>
  <el-form ref="ruleFormRef" :model="ruleForm" :rules="rules" label-width="120px" class="demo-ruleForm">

    <div style="display: flex; justify-content: center;">
      <Memberphoto1 style="width: 400px; margin-bottom: 20px;" />
    </div>


    <!-- <el-form-item label="性別" prop="性別">
        <el-radio-group v-model="ruleForm.性別">
          <el-radio label="男" value="1" /> 
          <el-radio label="女" value="0" />
        </el-radio-group>
      </el-form-item> -->
    <!--v-if="ruleForm.性別"-->


    <el-form-item label="姓名" prop="customerName" required>
      <el-input v-model="ruleForm.customerName" style="width: 200px;" />
    </el-form-item>

    <el-form-item label="連絡信箱" prop="customerEmail" required>
      <el-input v-model="ruleForm.customerEmail" style="width: 200px;" />
      <el-button @click="$event => sendEmail()">
        發送驗證信
      </el-button>
    </el-form-item>

    <el-form-item label="會員帳號" prop="customerAccount" required>
      <el-input v-model="ruleForm.customerAccount" style="width: 200px;" />
    </el-form-item>

    <el-form-item label="會員密碼" prop="customerPassword" required>
      <el-input v-model="ruleForm.customerPassword" style="width: 200px;" />
    </el-form-item>

    <el-form-item label="電話號碼" prop="customerPhone" required>
      <el-input v-model="ruleForm.customerPhone" style="width: 200px;" />
    </el-form-item>


    <el-form-item label="出生日期" prop="customerBirthDate">
      <el-col :span="12">
        <el-date-picker v-model="ruleForm.customerBirthDate" type="date" placeholder="您的出生日期" style="width: 200px; height: 32px;" />
      </el-col>

    </el-form-item>



    <el-form-item>

      <el-button type="primary" @click="$event => submitForm(ruleFormRef)">
        註冊會員
      </el-button>

      <el-button @click="$event => SignUpGet()">
        註冊測試
      </el-button>



    </el-form-item>

  </el-form>
</template>


