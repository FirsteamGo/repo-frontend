<template>
  <div class="demo-input-size">
    <el-input
      v-model="inputContent"
      class="w-100 m-2"
      placeholder="請填入想要搜尋的項目"
      :prefix-icon="Search"
      clearable
    />
  </div>
  <el-row class="mb-4" justify="center" style="margin-top: 25px">
    <el-col :span="8">
      <el-button color="#fec36d" round>Search</el-button>
    </el-col>
  </el-row>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { Search } from "@element-plus/icons-vue";

const inputContent = ref("");
</script>
<style></style>
