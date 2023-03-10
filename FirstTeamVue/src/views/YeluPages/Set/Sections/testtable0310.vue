<template>
  <div>
    <!-- 用 v-for 迴圈將 employeeDTOes 資料列出來 -->
    <div v-for="(item, index) in employeeDTOes" :key="index">
      <!-- 當 item.employeeId 與傳進來的 employeeId 相同時，顯示編輯區塊 -->
      <div v-if="item.employeeId === employeeId">
        <input type="text" v-model="item.firstName" />
        <input type="text" v-model="item.lastName" />
        <input type="text" v-model="item.title" />
        <button @click="save(item)">儲存</button>
        <button @click="cancel(item)">取消</button>
      </div>
      <!-- 當 item.employeeId 與傳進來的 employeeId 不同時，顯示詳細資料 -->
      <div v-else>
        <span>{{ item.firstName }}</span>
        <span>{{ item.lastName }}</span>
        <span>{{ item.title }}</span>
        <button @click="edit(item.employeeId)">編輯</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      employeeId: '', // 儲存目前正在編輯的 employeeId
      employeeDTOes: [], // 儲存員工資料
      firstNameOld: '', // 儲存原始的名字
      lastNameOld: '', // 儲存原始的姓氏
      titleOld: '', // 儲存原始的職稱
    };
  },
  methods: {
    edit(employeeId) {
      // 設定目前正在編輯的 employeeId
      this.employeeId = employeeId;

      // 將 employeeDTOes 中所有項目的 Edit 設為 false，並將目前正在編輯的項目的 Edit 設為 true
      this.employeeDTOes = this.employeeDTOes.map(item => {
        if (item.employeeId === employeeId) {
          item.Edit = true;
          // 儲存原始的名字、姓氏、職稱
          this.firstNameOld = item.firstName;
          this.lastNameOld = item.lastName;
          this.titleOld = item.title;
        } else {
          item.Edit = false;
        }
        return item;
      });
    },
    save(item) {
      // 儲存變更
      // TODO: 儲存到後端 API 或本地端資料庫

      // 將目前正在編輯的項目的 Edit 設為 false
      this.employeeDTOes = this.employeeDTOes.map(i => {
        if (i.employeeId === item.employeeId) {
          i.Edit = false;
        }
        return i;
      });
    },
    cancel(item) {
      // 取消編輯，還原原始的名字、姓氏、職稱
      item.firstName = this.firstNameOld;
      item.lastName = this.lastNameOld;
      item.title = this.titleOld;

      // 將目
