<script setup lang="ts">
import { reactive, ref, onMounted } from 'vue'
import axios from 'axios';
import type { FormInstance, FormRules } from 'element-plus'
import { useRouter } from 'vue-router';
const router = useRouter()
const formSize = ref('default')
const ruleFormRef = ref()

// 創建一個 ruleForm 空間，其內容初始值為空，這裡可以先提供空間給前台輸入參數，用 V-model 連接，後續可以交給方法，帶回資料庫做比對等動作。
const ruleForm = reactive({
    customerId: '',
    customerName: '',
    customerEmail: '',
    customerPassword: '',
    customerPhone: '',
    customerRegion: '',
    customerAddress: '',
    customerBirthDate: '',
    customerGender: '',
})

const rules = reactive({

    customerName: [
        { required: true, message: '請輸入姓名', trigger: 'blur' },
        { min: 2, max: 20, message: '姓名長度至少大於2個字', trigger: 'blur' },
    ],
    customerEmail: [
        { required: true, type: 'email', message: '請輸入正確電子郵件', trigger: 'blur' },
    ],
    customerPassword: [
        { required: true, message: '請輸入密碼', trigger: 'blur' },
        { min: 6, max: 10, message: '請輸入6~10個字元', trigger: 'blur' },
        { pattern: '(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[^a-zA-Z0-9]).{6,10}', message: '必須包含英數字、特殊字元', trigger: 'blur' },
    ],
    customerPhone: [
        { required: true, message: '請輸入手機號碼', trigger: 'blur' },
        { length: 12, message: '請輸入正確手機號碼', trigger: 'blur' },
        { pattern: /\d{4}-\d{3}-\d{3}/, message: '請輸入正確手機號碼', trigger: 'blur' },
    ],
    customerRegion: [
        {
            required: true,
            message: '請選擇居住區域',
            trigger: 'blur',
        },
    ],
    customerAddress: [
        {
            required: true,
            message: '請輸入地址',
            trigger: 'blur',
        },
    ],
    customerBirthDate: [
        {
            type: 'date',
            required: true,
            message: '請選擇生日',
            trigger: 'blur',
        },
    ],
    customerGender: [
        {
            required: true,
            message: '請選擇性別',
            trigger: 'blur',
        },
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

const options = Array.from({ length: 10000 }).map((_, idx) => ({
    value: `${idx + 1}`,
    label: `${idx + 1}`,
}))

// 用 interface 定義一個介面(customerInterface)，用於描述組件的資料類型，內容包含一個顧客的屬性資料類型，描述了顧客的 ID、名稱、郵箱、密碼、電話、地區、地址、出生日期、性別、創建時間、更新時間和使用者名稱的資料類型。
interface customerInterface {
    customerId: number,
    customerName: string,
    customerEmail: string,
    customerPassword: string,
    customerPhone: string,
    customerRegion: string,
    customerAddress: string,
    customerBirthDate: string,
    customerGender: string,
}

// 用 reactive 函數來創建了一個響應式顧客組件，其類型是customerInterface[] 陣列，接著，我們就可以使customerData 來添加、刪除、更新顧客資料，而當 customerData 的數據發生變化時，頁面會自動重新渲染。
const customerData = reactive<customerInterface[]>([]);

const user = JSON.parse(localStorage.getItem("customerData"))
const url = ref("https://localhost:44393/api/Customers")
onMounted(() => {
    if (localStorage.getItem("customerData") != null) {
        console.log(user.CustomerName);
        ruleForm.customerId = user.CustomerId
        ruleForm.customerName = user.CustomerName
        ruleForm.customerEmail = user.CustomerEmail
        ruleForm.customerPassword = user.CustomerPassword
        ruleForm.customerPhone = user.CustomerPhone
        ruleForm.customerRegion = user.CustomerRegion
        ruleForm.customerAddress = user.CustomerAddress
    }
})


// 按下按鈕後執行這個功能
const EditCustomer = () => {
    console.log(`${url.value}/${user.CustomerId}`);

    axios.put(`${url.value}/${user.CustomerId}`, {
        "customerName": ruleForm.customerName,
        "customerEmail": ruleForm.customerEmail,
        "customerPassword": ruleForm.customerPassword,
        "customerPhone": ruleForm.customerPhone,
        "customerRegion": ruleForm.customerRegion,
        "customerAddress": ruleForm.customerAddress,
    })
        .then(result => {
            console.log(result.data);
            if (result.data != "修改有誤") {
                localStorage.removeItem("customerData")
                user.CustomerName = ruleForm.customerName
                user.CustomerEmail = ruleForm.customerEmail
                user.CustomerPassword = ruleForm.customerPassword
                user.CustomerPhone = ruleForm.customerPhone
                user.CustomerRegion = ruleForm.customerRegion
                user.CustomerAddress = ruleForm.customerAddress
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
    <el-main>
        <!-- Main content -->
        <div class="block">
            <h2 style="padding-left:120px;">修改會員資料</h2>
            <el-form ref="ruleFormRef" :model="ruleForm" :rules="rules" label-width="120px" class="demo-ruleForm"
                :size="formSize" status-icon>
                <el-form-item label="" prop="customerId">
                    <el-input placeholder="" v-model="ruleForm.customerId" type="hidden" />
                </el-form-item>
                <el-form-item label="" prop="customerName" required>
                    <el-input placeholder="姓名" v-model="ruleForm.customerName" type="text" />
                </el-form-item>
                <el-form-item label="" prop="customerEmail" required>
                    <el-input placeholder="電子郵件" v-model="ruleForm.customerEmail" type="email" />
                </el-form-item>
                <el-form-item label="" prop="customerPassword" required>
                    <el-input placeholder="密碼" v-model="ruleForm.customerPassword" />
                    <span id="pwdcheck"></span><br />
                    <p style="color:gray;font-size: 8px;">(6~10個字且必須包含英數字、特殊字元)</p>
                </el-form-item>
                <el-form-item label="" prop="customerPhone" required>
                    <el-input placeholder="手機號碼 09XX-XXX-XXX" v-model="ruleForm.customerPhone" />
                </el-form-item>
                <el-form-item label="" prop="customerRegion" required>
                    <el-select v-model="ruleForm.customerRegion" placeholder="請選擇居住區域">
                        <el-option label="基隆市" value="基隆市" />
                        <el-option label="台北市" value="台北市" />
                        <el-option label="新北市" value="新北市" />
                        <el-option label="桃園市" value="桃園市" />
                        <el-option label="新竹市" value="新竹市" />
                        <el-option label="新竹縣" value="新竹縣" />
                        <el-option label="苗栗縣" value="苗栗縣" />
                        <el-option label="彰化縣" value="彰化縣" />
                        <el-option label="南投縣" value="南投縣" />
                        <el-option label="雲林縣" value="雲林縣" />
                        <el-option label="嘉義市" value="嘉義市" />
                        <el-option label="嘉義縣" value="嘉義縣" />
                        <el-option label="台南市" value="台南市" />
                        <el-option label="高雄市" value="高雄市" />
                        <el-option label="屏東縣" value="屏東縣" />
                        <el-option label="台東縣" value="台東縣" />
                        <el-option label="花蓮縣" value="花蓮縣" />
                        <el-option label="宜蘭縣" value="宜蘭縣" />
                        <el-option label="澎湖縣" value="澎湖縣" />
                        <el-option label="金門縣" value="金門縣" />
                        <el-option label="連江縣" value="連江縣" />
                        <el-option label="其他" value="其他" />
                    </el-select>
                </el-form-item>
                <el-form-item label="" prop="customerAddress" required>
                    <el-input placeholder="詳細地址" v-model="ruleForm.customerAddress" type="text" />
                </el-form-item>
                <el-form-item label="" required>
                    <el-col :span="11">
                        <el-form-item prop="customerBirthDate">
                            <el-date-picker v-model="ruleForm.customerBirthDate" type="date" label="生日" placeholder="請選擇生日"
                                disabled style="width: 100%" />
                        </el-form-item>
                    </el-col>
                </el-form-item>
                <el-form-item label="" prop="customerGender" required>
                    <el-select v-model="ruleForm.customerGender" placeholder="請選生理性別" disabled>
                        <el-option label="男" value="男" />
                        <el-option label="女" value="女" />
                    </el-select>
                </el-form-item>

                <el-form-item>
                    <el-button type="primary" @click="EditCustomer(ruleFormRef)">
                        確認修改
                    </el-button>
                </el-form-item>
            </el-form>
        </div>
    </el-main>
</template>