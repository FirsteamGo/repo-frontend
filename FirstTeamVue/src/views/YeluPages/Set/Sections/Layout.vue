<template>
  <div class="common-layout">
    <el-container>
      <el-aside width="200px">
        <Date />
      </el-aside>
      <el-main>
        <testtable />
      </el-main>

    </el-container>
  </div>

  <div class="common-layout">
    <el-container>
      <el-aside width="200px">
        <Setps />
      </el-aside>
      <el-main>
        <Setps />
      </el-main>

    </el-container>
  </div>
</template>

<script setup>
import Date from './Date.vue';
import testtable from './testtable.vue';
import Setps from './Setps.vue';

</script>

<style></style>