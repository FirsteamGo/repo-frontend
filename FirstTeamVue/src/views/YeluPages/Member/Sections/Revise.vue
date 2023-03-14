<script lang="ts" setup>
import { reactive, ref, onMounted } from 'vue'
import Memberphoto1 from "./Memberphoto1.vue";
import axios from 'axios';

// 在 JavaScript 中，利用 const 來宣告一個常數變數 ruleFormRef，並將 ref() 賦予給他。

// ref() 是 Vue.js 中用來建立反應式參考的函式，它可以讓 Vue.js 模板直接存取並操作物件的屬性(網址列)，用以呼叫 api。記得要先從 vue 裡面導入 ref 功能才能用。
const ruleFormRef = ref()

// do not use same name with ref
// 創建一個 ruleForm 空間，其內容初始值為空，這裡可以先提供空間給前台輸入參數，用 V-model 連接，後續可以交給方法，帶回資料庫做比對等動作。
const ruleForm = reactive({
  姓名: '',
  連絡信箱: '',
  會員密碼: '',
  電話號碼: '',
})

const onSubmit = () => {
  console.log('submit!')
}

// 用 interface 定義一個介面(customerInterface)接口，用於描述組件的資料類型，內容包含一個顧客的屬性資料類型，描述了顧客的 ID、名稱、郵箱、密碼、電話、地區、地址、出生日期、性別、創建時間、更新時間和使用者名稱的資料類型。
interface customerInterface {
    姓名: string,
    連絡信箱: string,
    會員密碼: string,
    電話號碼: string,
    
}

// 用 reactive 函數來創建了一個響應式顧客組件，其類型是customerInterface[] 陣列，接著，我們就可以使customerData 來添加、刪除、更新顧客資料，而當 customerData 的數據發生變化時，頁面會自動重新渲染。
const customerData = reactive<customerInterface[]>([]);

// 目前是自動導入第一筆資料
const user = JSON.parse(localStorage.getItem("customerData"))
const url = ref("https://localhost:7108/api/MemberInfoes")
onMounted(() => {
    if (localStorage.getItem("customerData") != null) {
        console.log(user.CustomerName);
        ruleForm.姓名 = user.姓名
        ruleForm.連絡信箱 = user.連絡信箱
        ruleForm.會員密碼 = user.會員密碼
        ruleForm.電話號碼 = user.電話號碼
    }
})


// 按下按鈕後執行這個功能
const EditCustomer = () => {
    console.log(`${url.value}/${user.姓名}`);

    axios.put(`${url.value}/${user.姓名}`, {
        "姓名": ruleForm.姓名,
        "連絡信箱": ruleForm.連絡信箱,
        "會員密碼": ruleForm.會員密碼,
        "電話號碼": ruleForm.電話號碼,
       
    })
        .then(result => {
            console.log(result.data);
            if (result.data != "修改有誤") {
                localStorage.removeItem("customerData")
                user.姓名 = ruleForm.姓名
                user.連絡信箱 = ruleForm.連絡信箱
                user.會員密碼 = ruleForm.會員密碼
                user.電話號碼 = ruleForm.電話號碼
                localStorage.setItem("customerData", JSON.stringify(user))
                //console.log(ruleForm);

                alert("修改成功")
                // router.push("/");
            } else {
                alert("修改有誤")
            }

        })
        .catch(error => {
            // console.log(typeof (ruleForm.customerBirthDate));

            console.log(error);
            console.log("錯誤");

        })
}







</script>


<template>
  
  <el-form ref="ruleFormRef" :model="ruleForm" label-width="120px">
    
    <Memberphoto1/>

    <el-form-item label="姓名">
      <el-input v-model="ruleForm.姓名" />
    </el-form-item>

    <el-form-item label="連絡信箱">
      <el-input v-model="ruleForm.連絡信箱" />
    </el-form-item>

    <el-form-item label="會員密碼">
      <el-input v-model="ruleForm.會員密碼" />
    </el-form-item>

    <el-form-item label="電話號碼">
      <el-input v-model="ruleForm.電話號碼" />
    </el-form-item>
    
   

    <el-form-item>

      <el-button type="primary" @click="EditCustomer">
        修改會員資料
      </el-button>
      
      



    </el-form-item>

  </el-form>
</template>

