<script lang="ts" setup>
import { reactive, ref } from 'vue'
// import Memberphoto1 from "./Memberphoto1.vue";
import axios from 'axios';
import type { FormInstance } from 'element-plus'

const ruleFormRef = ref()

// do not use same name with ref
// 創建一個 ruleform 紀錄要存放的資料
const ruleForm = reactive({
  // picture:'',
  性別:'',
  姓名: '',
  連絡信箱:'',
  會員帳號:'',
  會員密碼:'',
  電話號碼:'',
  出生日期:'',
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
        "性別": ruleForm.性別,
        "姓名": ruleForm.姓名,
        "連絡信箱": ruleForm.連絡信箱,
        "會員帳號": ruleForm.會員帳號,
        "會員密碼": ruleForm.會員密碼,
        "電話號碼": ruleForm.電話號碼,
        "出生日期": ruleForm.出生日期,
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
            ruleForm.性別 = result.data.性別
            ruleForm.姓名 = result.data.姓名
            ruleForm.連絡信箱 = result.data.連絡信箱
            ruleForm.會員帳號 = result.data.會員帳號
            ruleForm.電話號碼 = result.data.電話號碼
            ruleForm.出生日期 = result.data.出生日期
            ruleForm.會員密碼 = result.data.會員密碼
        })
        .catch(error => {
            console.log(error);
        })
}


</script>

<template>
  
  <el-form ref="ruleFormRef" :model="ruleForm" label-width="120px">
    
    <!-- <Memberphoto1/> -->

    <el-form-item label="性別" prop="性別">
      <el-radio-group v-model="ruleForm.性別">
        <el-radio label="男" value="1" /> <!--v-if="ruleForm.性別"-->
        <el-radio label="女" value="0" />
      </el-radio-group>
    </el-form-item>


    <el-form-item label="姓名" prop="姓名">
      <el-input v-model="ruleForm.姓名" />
    </el-form-item>

    <el-form-item label="連絡信箱" prop="連絡信箱">
      <el-input v-model="ruleForm.連絡信箱" />
    </el-form-item>

    <el-form-item label="會員帳號" prop="會員帳號">
      <el-input v-model="ruleForm.會員帳號" />
    </el-form-item>

    <el-form-item label="會員密碼" prop="會員密碼">
      <el-input v-model="ruleForm.會員密碼" />
    </el-form-item>

    <el-form-item label="電話號碼" prop="電話號碼">
      <el-input v-model="ruleForm.電話號碼" />
    </el-form-item>

  
    <el-form-item label="出生日期" prop="出生日期">
      <el-col :span="24">
        <el-date-picker
          v-model="ruleForm.出生日期"
          type="date"
          placeholder="您的出生日期"
          style="width: 100%"
        />
      </el-col>
      
    </el-form-item>
    


    <el-form-item>

      <el-button type="primary" @click="$event =>submitForm(ruleFormRef)">
        註冊會員
      </el-button>
      
      <el-button @click="$event => SignUpGet ()">
        註冊測試
      </el-button>



    </el-form-item>

  </el-form>
</template>


