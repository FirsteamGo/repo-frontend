<template >
  <el-tabs type="border-card" class="demo-tabs" style="width: 50%">
    <el-tab-pane>
      <template #label>
        <span class="custom-tabs-label">
          <span>登入</span>
        </span>
      </template>

      登入內容
      <el-input v-model="會員帳號" placeholder="會員帳號" />

      <el-input v-model="密碼" type="password" placeholder="密碼" show-password />

      <div m="b-2">
        <el-checkbox v-model="config.autoInsertSpace">記住帳號，密碼</el-checkbox>
      </div>

      <el-button type="primary">登入</el-button>
      <el-button type="primary">登入測試Get</el-button>

      <div class="flex justify-space-between mb-4 flex-wrap gap-4">
        <el-button v-for="button in buttons" :key="button.text" :type="button.type" link>{{ button.text }}</el-button>
      </div>




    </el-tab-pane>
    <el-tab-pane label="註冊">

      註冊內容
      <Memberphoto1 />

      <el-radio-group v-model="radio">
        <el-radio :label="3">男</el-radio>
        <el-radio :label="6">女</el-radio>
      </el-radio-group>

      <el-input v-model="姓名" placeholder="姓名" />

      <el-input v-model="電子信箱" placeholder="電子信箱" />
      <el-input v-model="會員帳號" placeholder="會員帳號" />
      <el-input v-model="密碼" type="password" placeholder="密碼" show-password />
      <el-input v-model="手機號碼" placeholder="手機號碼" />

      <el-form-item style=" padding-top: 10px">
        <el-col :span="24">
          <el-date-picker v-model="form.date1" type="date" placeholder="您的出生日期是" style="width: 100%" />
        </el-col>
      </el-form-item>





      <el-button type="primary">註冊會員</el-button>
      <el-button>重新填寫</el-button>
      <el-button>註冊測試</el-button>




    </el-tab-pane>


    <el-tab-pane label="修改">

      修改內容
      <Memberphoto1 />
      <el-input v-model="姓名" placeholder="姓名" />

      <el-input v-model="電子信箱" placeholder="電子信箱" />
      <el-input v-model="密碼" type="password" placeholder="密碼" show-password />
      <el-input v-model="手機號碼" placeholder="手機號碼" />

      <el-form-item style=" padding-top: 10px">
        <el-col :span="24">
          <el-date-picker v-model="form.date1" type="date" placeholder="您的出生日期是" style="width: 100%" />
        </el-col>
      </el-form-item>





      <el-button type="primary">會員資料修改</el-button>
      <el-button>重新填寫</el-button>
      <el-button>獲取資料庫資料</el-button>





    </el-tab-pane>











    <el-tab-pane label="客服機器人">


      <!-- 請輸入 hi 開始 -->
      <Chatbot />
      <Chatbot1 />



    </el-tab-pane>








  </el-tabs>
</template>

<script lang="ts" setup>
import { Calendar } from '@element-plus/icons-vue'

import { ref } from 'vue'
import { reactive } from 'vue'
import Memberphoto1 from "./Memberphoto1.vue";
import Chatbot from "./Chatbot.vue";
//import Chatbot1 from "./Chatbot1.vue";





const 會員帳號 = ref('')

const 密碼 = ref('')
const config = reactive({ autoInsertSpace: false, })
const buttons = [{ type: 'primary', text: '忘記密碼' },] as const

const 姓名 = ref('')
const 電子信箱 = ref('')
const 手機號碼 = ref('')
const radio = ref(2)


const form = reactive({ date1: '', })






</script>
<style>
.demo-tabs>.el-tabs__content {
  padding: 32px;
  color: #6b778c;
  font-size: 32px;
  font-weight: 600;
}

.demo-tabs .custom-tabs-label .el-icon {
  vertical-align: middle;
}

.demo-tabs .custom-tabs-label span {
  vertical-align: middle;
  margin-left: 4px;
}
</style>
