<script lang="ts" setup>
import { reactive, ref } from 'vue';
import type { FormInstance, FormRules } from 'element-plus';

// 登入驗證
//////////////////////////////////////
// 在 js 裡面，導入外部庫或模組
import axios from 'axios';
import { onMounted } from 'vue';
import { useRouter } from 'vue-router'; // 轉跳到其他頁面使用。
import { emitKeypressEvents } from 'readline';
import { emit } from 'process';

// 分別 => 定義變數，其初始值為空字串
// const 會員帳號 = ref('')
// const 密碼 = ref('')
// const config = reactive({ autoInsertSpace: false, })
// const 姓名 = ref('')
// const 電子信箱 = ref('')
// const 手機號碼 = ref('')
// const radio = ref(2)
// const form = reactive({date1: '',})
// const router = useRouter();

// 利用 interface 語法，建立一個名為 memberInterface 的介面，在裡面可以定義欄位的屬性及型別。
// 去 API Model 裡面看要什麼欄位
interface memberInterface {
  會員id?: number, // 在這裡不能用 int
  姓名?: string,
  性別?: boolean,
  出生日期?: string,
  會員帳號?: string,
  會員密碼?: string,
  照片?: string,
  聯絡信箱?: string,
  手機號碼?: string,
}

// 利用 const 建立一個名為 memberData 的陣列 []，將所有資料丟到裡面。
const memberData = reactive<memberInterface[]>([])



// const xxx = defineEmits(['abc']) //3-14助教寫的



// onMounted 語法，當 Vue 掛載到 DOM 上後，會被自動執行。
// DOM (Document Object Model) 是一種用於描述網頁文檔結構的樹狀模型。
// 使用 async，表示此函式是一個非同步的函式。
// 使用 await 關鍵字，可以等待請求結果，當成功時 axios.get()方法，會返回一個 Promise 對象，裡面的資料可透過.data 屬性獲取，資料在這會被傳遞給.then() 方法中的 response 參數。
// splice() 語法: splice(0,response.data.length,...response.data)，由 0 開始插入第一個元素，到 response.data.length 所有元素，...response.data 是將所有元素拿出來，用逗號分隔成一個參數列，再傳回給 memberData。
// 有用 axios get/post 記得要去 MVC 做 controller 和 DTO。

onMounted(async () => {
  await axios.get('https://localhost:7108/api/MemberInfoes')
    .then(response => {
      memberData.splice(0, response.data.length, ...response.data)
      console.log(memberData);
    })
    .catch(error => {
      console.log(error);
    })

})


// 再利用 const 建一個 customerData 來存放資料，給下面方法 LogInPost 使用。
// 利用 axios.post()，向後端 API 發送一個帶有帳號和密碼的 POST 請求，當服務器成功處理了這個請求時，Axios 庫會把服務器返回的結果，封裝丟回 ruleForm 裡面。
// splice() 語法: splice(0,response.data.length, result.data)，由 0 開始插入第一個元素，到 response.data.length 所有元素，result.data 表示要插入的元素，用逗號分隔成一個參數列，再傳回給 customerData。
const ruleForm = reactive({
  account: '',
  password: '',
  count: '',
})
const router = useRouter()
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

        let dataString = JSON.stringify(result.data)
        localStorage.setItem("customerData", dataString)
        

        alert("登入成功")
        router.push('/pages/Yelu-pages/member2') //可用於轉跳到其他頁面(搭配上面 useRouter()語法)


        // 使用了 JSON.stringify() 方法和 localStorage.setItem() 方法，用於將從後端 API 獲取的數據序列化成 JSON 字符串，並且保存到瀏覽器檢查 > Appliction > Local Storage 中。
        // 再使用 router.push() 方法將頁面路由跳轉到 '/'，


        // localStorage.setItem("customerLoginData", JSON.stringify(customerData))
        // console.log("parent call refreshEdit");
        // xxx('abc', 'data') 
        // 3-14助教寫。

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
const rules = reactive<FormRules>({
  account: [
    { required: true, message: '請輸入會員帳號', trigger: 'blur' },
  ],
  password: [
    { required: true, message: '請輸入密碼', trigger: 'blur', },
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


// 要補功能
// const buttons = [
//   { type: 'primary', text: '忘記密碼' },
// ] as const

////////////////////////////////////////////測試


// const rememberMe = reactive({
//   checked: localStorage.getItem("rememberMe") === "true",
// });

// const handleSubmit = () => {
//   if (rememberMe.checked) {
//     localStorage.setItem("account", ruleForm.account);
//     localStorage.setItem("password", ruleForm.password);
//   } else {
//     localStorage.removeItem("account");
//     localStorage.removeItem("password");
//   }

// };





</script>





<template>
  





  <div class="form-container">
    <el-form ref="ruleFormRef" :model="ruleForm" :rules="rules" label-width="120px" class="demo-ruleForm" :size="formSize"
      status-icon>

      <el-form-item label="會員帳號" prop="account">
        <el-input v-model="ruleForm.account" />
      </el-form-item>

      <el-form-item label="密碼" prop="password" >
        <el-input v-model="ruleForm.password" type="password"/>
      </el-form-item>



      <!-- 要補功能 -->
      <!-- <div>
        <el-form-item>
          <el-checkbox v-model="rememberMe.checked">記住帳號和密碼</el-checkbox>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="handleSubmit">記住帳密登入</el-button>
        </el-form-item>
      </div> -->

      <!-- 勾選 checkbox 後，把會員帳號密碼，由 ruleForm 撈出，放在 localStorage 裡面。 -->




      <!-- <el-button type="primary" @click="submitForm(ruleFormRef)">
        登入
      </el-button> -->
      <el-button type="primary" @click="LogInPost()">
        登入
      </el-button>

      <div class="flex justify-space-between mb-4 flex-wrap gap-4">
        <el-button v-for="button in buttons" :key="button.text" :type="button.type" text>{{ button.text }}
        </el-button>
      </div>

    </el-form>



  </div>
</template>





<style>
.form-container {
  width: 50%;
  /* 將表單寬度設置為原來的一半 */
  /* margin: 0 auto; 將表單水平居中 */
}
</style>
