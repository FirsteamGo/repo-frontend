<script lang="ts" setup>
import { ArrowDown, Van } from "@element-plus/icons-vue";
</script>
<template>
  <div class="flex flex-wrap items-center">
    <el-dropdown>
      <el-button class="btn">
        <Van
          style="width: 1em; height: 1em; margin-right: 8px; margin-bottom: 1px"
        />我還沒上車呀<el-icon class="el-icon--right"><arrow-down /></el-icon>
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

<style scoped>
.el-dropdown-item {
  display: flex;
  flex-direction: column;
  font-size: large;
  margin: 0.5rem;
}
.el-dropdown-item:hover {
  background-color: #b35e29;
  color: white;
  opacity: 0.8;
}

.btn {
  display: flex;
  padding: 10px 20px;
  color: black;
  font-size: 16px;
  font-weight: bolder;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}
.btn:hover {
  background-color: #b35e29;
  opacity: 0.8;
  color: aliceblue;
}
.cartIcon {
  color: white;
  background-color: #585963;
  width: 50px;
  height: 50px;
  font-size: 28px;
  margin-top: -16px;
}
.cartIcon:hover {
  background-color: #b35e29;
  opacity: 0.8;
  color: aliceblue;
}
.cartIcon:active {
  background-color: black;
  transform: scale(0.9);
}
</style>
