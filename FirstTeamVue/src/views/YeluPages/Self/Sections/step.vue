<template>
    <el-steps :active="active" finish-status="success" >
      <el-step title="Step 1" />
      <el-step title="Step 2" />
      <el-step title="Step 3" />
    </el-steps>
  
    <el-button style="margin-top: 12px" @click="next" v-model="step_data">Next step {{step_data.show_name}}</el-button>
  </template>
  
  <script lang="ts" setup>
  import { ref } from 'vue'
  
  const active = ref(0)
  const step_data = ref({
    show_name: ""
  })
  
  const next = () => {
    active.value++;
    if (active.value > 2) active.value = 0
    if (active.value > 1) {
      step_data.value.show_name = "data1"
    }else{
      step_data.value.show_name = "data2"
    }

    
  }
  </script>
  