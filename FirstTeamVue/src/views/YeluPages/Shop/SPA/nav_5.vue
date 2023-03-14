<template>
  <div class="flex flex-wrap items-center">
    <el-dropdown>
      <el-button type="primary">
        我還沒上車呀<el-icon class="el-icon--right"><arrow-down /></el-icon>
      </el-button>
      <template #dropdown>
        <el-dropdown-menu class="my-dropdown-menu">
          <router-link
            class="el-dropdown-item"
            to="/pages/Yelu-pages/shop/SPA/cloudsea"
            >IVECO</router-link
          >
          <router-link
            class="el-dropdown-item"
            to="/pages/Yelu-pages/shop/SPA/adria"
            >Adria</router-link
          >
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script lang="ts" setup>
import { ArrowDown } from "@element-plus/icons-vue";
</script>
<style scoped>
/* .example-showcase .el-dropdown + .el-dropdown {
      margin-left: 15px;
    }
    .example-showcase .el-dropdown-link {
      cursor: pointer;
      color: var(--el-color-primary);
      display: flex;
      align-items: center;
    } */
.el-dropdown-item {
  display: flex;
  flex-direction: column;
  font-size: large;
  margin: 0.5rem;
}
</style>
