<script setup>
import Revise from "./Revise.vue";
import Drawer from "./Drawer.vue";
</script>


<template>
  <el-tabs type="border-card" class="demo-tabs" style="width: 50%">
    <el-tab-pane label="修改">
      <Revise/>
    </el-tab-pane>
    <el-tab-pane label="智能客服">
      <Drawer />
      
    </el-tab-pane>
    <!-- <el-tab-pane label="Role">Role</el-tab-pane> -->
    <!-- <el-tab-pane label="Task">Task</el-tab-pane> -->
  </el-tabs>
</template>

<!-- Tabs 标签页 -->