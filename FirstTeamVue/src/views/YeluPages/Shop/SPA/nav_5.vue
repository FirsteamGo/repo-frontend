<script lang="ts" setup>
import { ArrowDown } from "@element-plus/icons-vue";
import { ShoppingCartFull } from "@element-plus/icons-vue";
</script>
<template>
  <div class="flex flex-wrap items-center">
    <el-dropdown>
      <el-button class="btn">
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
  <!--購物車連結-->
  <router-link to="/pages/Yelu-pages/cart"
    ><el-button :icon="ShoppingCartFull" class="cartIcon" circle
  /></router-link>
  <router-view></router-view>
</template>

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
.el-dropdown-item:hover {
  background-color: #b35e29;
  color: white;
  opacity: 0.8;
}

.btn {
  display: flex;
  padding: 10px 20px;

  background-color: #585963;

  color: white;
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
