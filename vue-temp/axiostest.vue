<script setup lang="ts">
import { ref, reactive, onMounted, defineExpose } from 'vue'
import axios from 'axios'

const url = '[https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg](https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg)'
let commodity = reactive({});
let productTitle = ref(null);
let productSummary = ref(null);
let productPrice = ref(null);

onMounted(async () => {
    const response = await axios.get('[https://localhost:44393/api/Commodities/1](https://localhost:44393/api/Commodities/1)');
    commodity = response.data;
    productTitle.value = commodity.title;
    productSummary.value = commodity.summary;
    productPrice.value = commodity.price;
});
</script>

<template>
    <el-container>
        <el-main>
            ...
            <div class="Product-title">{{ productTitle }}</div>
            <div class="Product-summary">{{ productSummary }}</div>
            <div class="price">{{ productPrice }}</div>
            ...
        </el-main>
    </el-container>
</template>