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
        <router-link to="./pages/Yelu-pages/shop/shopsections/ex1"
          >111</router-link
        >
        <router-link to="./pages/Yelu-pages/shop/shopsections/ex2"
          >222</router-link
        >
        <router-link to="./pages/Yelu-pages/shop/shopsections/ex3"
          >333</router-link
        >

        <!--option5-->
      </el-menu>
    </el-col>
  </el-row>
</template>

<script lang="ts" setup>
import { RouterLink } from "vue-router";
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
