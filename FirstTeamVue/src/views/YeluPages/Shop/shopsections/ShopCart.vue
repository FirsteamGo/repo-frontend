<script  setup>
import { onMounted, onUnmounted, ref, reactive,  watch } from "vue";

const data =JSON.parse(localStorage.getItem('shoplist'))
console.log(data);


</script>
<template>
  <div>
    <h2>商店購物車列表</h2>    
        <el-table :data="data" style="width: 100%">
            <el-table-column prop="商品細項id" label="商品細項id" width="180" />
            <el-table-column prop="產品名稱" label="產品名稱" width="180" />
            <el-table-column prop="商品數量" label="商品數量" />
            <el-table-column prop="合計總價" label="合計總價" />
          </el-table>
  </div>
</template>
<style></style>
