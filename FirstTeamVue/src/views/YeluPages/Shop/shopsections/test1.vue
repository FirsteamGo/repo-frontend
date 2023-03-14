<template>
    <el-button text @click="formContent = true" class=" text-lg font-weight-bolder icon-move-right">
      更多資訊<i class="fas fa-arrow-right text-xs ms-1"></i>
    </el-button>
  
    <el-dialog
      v-model="formContent"
      title="這是彈跳視窗!!!"
      width="30%"
      :before-close="handleClose"
    >
      <span>卡片內主要內??
      </span>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="formContent = false">我叫你關掉</el-button>
          <el-button type="primary" @click="formContent = false">
           確定要儲存
          </el-button>
        </span>
      </template>
    </el-dialog>
  </template>
  
  <script lang="ts" setup>
  import { ref } from 'vue'
  import { ElMessageBox } from 'element-plus'
  
  const formContent = ref(false)
  
  const handleClose = (done: () => void) => {
    ElMessageBox.confirm('確定要關閉該頁面?')
      .then(() => {
        done()
      })
      .catch(() => {
        // catch error
      })
  }
  </script>
  <style scoped>
  .dialog-footer button:first-child {
    margin-right: 10px;
  }
  </style>
  