<style>
.aaa:hover {
  background-color: white;
}
</style>
<template>
  <el-row class="tac">
    <el-col :span="12">
      <el-menu
        active-text-color="#ffd04b"
        background-color="#545c64"
        class="el-menu-vertical-demo"
        default-active="2"
        text-color="#fff"
        @open="handleOpen"
        @close="handleClose"
      >
        <!--option1-->
        <el-sub-menu index="1">
          <template #title>
            <el-icon><location /></el-icon>
            <span>露營車</span>
          </template>
          <el-menu-item index="1-1">item one</el-menu-item>
          <el-menu-item index="1-2">item two</el-menu-item>
          <el-menu-item index="1-3">item three</el-menu-item>
          <el-menu-item index="1-4">item four</el-menu-item>
        </el-sub-menu>

        <!--option2-->
        <el-sub-menu index="2">
          <template #title>
            <el-icon><location /></el-icon>
            <span>登山杖</span>
          </template>
          <el-menu-item index="2-1">item one</el-menu-item>
          <el-menu-item index="2-2">item two</el-menu-item>
          <el-menu-item index="2-3">item three</el-menu-item>
          <el-menu-item index="2-4">item four</el-menu-item>
        </el-sub-menu>

        <!--option3-->
        <el-sub-menu index="3">
          <template #title>
            <el-icon><location /></el-icon>
            <span>帳篷</span>
          </template>
          <el-menu-item index="3-1">item one</el-menu-item>
          <el-menu-item index="3-2">item two</el-menu-item>
          <el-menu-item index="3-3">item three</el-menu-item>
          <el-menu-item index="3-4">item four</el-menu-item>
        </el-sub-menu>

        <!--option4-->
        <el-sub-menu index="4">
          <template #title>
            <el-icon><location /></el-icon>
            <span>水壺</span>
          </template>
          <el-menu-item index="4-1">item one</el-menu-item>
          <el-menu-item index="4-2">item two</el-menu-item>
          <el-menu-item index="4-3">item three</el-menu-item>
        </el-sub-menu>

        <!--option5-->
        <el-sub-menu index="5">
          <template #title>
            <el-icon><location /></el-icon>
            <span>鍋碗瓢盆</span>
          </template>
          <el-menu-item index="5-1">item one</el-menu-item>
          <el-menu-item index="5-2">item two</el-menu-item>
          <el-menu-item index="5-3">item three</el-menu-item>
          <el-menu-item index="5-4">item four</el-menu-item>
        </el-sub-menu>
      </el-menu>
    </el-col>
  </el-row>
</template>

<script lang="ts" setup>
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from "@element-plus/icons-vue";
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
</script>
