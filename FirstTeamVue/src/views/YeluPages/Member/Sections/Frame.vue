<script setup>
import Login from "./Login.vue";
import Signup from "./Signup.vue";
const refreshEdit = () => {
  console.log('refreshEdit refreshEdit refreshEdit')
  emits('refreshEdit_Frame', 'data')
}
const emits = defineEmits(['refreshEdit_Frame'])
</script>


<template>
  <el-tabs type="border-card" class="demo-tabs" style="width: 50%">
    <el-tab-pane label="登入">
      <Login @abc="refreshEdit"/>
    </el-tab-pane>
    <el-tab-pane label="註冊">
      <Signup/>
    </el-tab-pane>
    <!-- <el-tab-pane label="Role">Role</el-tab-pane> -->
    <!-- <el-tab-pane label="Task">Task</el-tab-pane> -->
  </el-tabs>
</template>

<!-- Tabs 标签页 -->