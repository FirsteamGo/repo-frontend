<script setup>
import { Search } from '@element-plus/icons-vue'
import { ref, computed, reactive, onMounted } from 'vue'



</script>

<template>
    <div class="common-layout">
        <el-container>
            <el-header>
                <span class="where">區域</span>
                <el-select v-model="value"  class="select m-2" placeholder="區域" size="large">
                    <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
                </el-select>

                <span>縣市</span>
                <el-select v-model="value1" class="m-2" placeholder="縣市" size="large">
                    <el-option v-for="item in cityList" :key="item.value" :label="item.label" :value="item.value" />
                </el-select>

                <span>活動種類</span>
                <el-select class="m-2" placeholder="活動種類" size="large">
                    <el-option v-for="item in cityList" :key="item.value" :label="item.label" />
                </el-select>

                <span class="Search">
                    關鍵字
                    <el-input v-model="input" size="large" class="w-10 m-2" placeholder="" />
                    <el-button type="success" :icon="Search">搜尋</el-button>
                </span>


            </el-header>
            <el-main>

            </el-main>
        </el-container>
    </div>
</template>
