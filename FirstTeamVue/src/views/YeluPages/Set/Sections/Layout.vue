<template>
    <el-steps :active="1">
      <el-step title="Step 1" :icon="Edit" />
      <el-step title="Step 2" :icon="Upload" />
      <el-step title="Step 3" :icon="Picture" />
    </el-steps>
    <el-button style="margin-top: 12px" @click="next">Next step</el-button>
  </template>
  
  <script lang="ts" setup>
  import { ref } from 'vue'
//import { Edit, Picture, Upload } from '@element-plus/icons-vue'
import Edit from "./Date.vue"
import Upload from "./testtable.vue"
import Picture from "./Date.vue"
const active = ref(0)

const next = () => {
  if (active.value++ > 2) active.value = 0
}
  
  </script>