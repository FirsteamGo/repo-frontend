<script lang="ts" setup>
import { ArrowDown, Guide,} from "@element-plus/icons-vue";
</script>
<template>
  <div class="flex flex-wrap items-center">
    <el-dropdown>
      <el-button class="btn">
        <Guide style="width: 1em; height: 1em; margin-right: 8px; margin-bottom: 1px;"  />咖啡杯<el-icon class="el-icon--right"><arrow-down /></el-icon>
      </el-button>
      <template #dropdown>
        <el-dropdown-menu class="my-dropdown-menu">
          <router-link
            class="el-dropdown-item"
            to="/pages/Yelu-pages/shop/SPA/tnf"
            >The North Face</router-link
          >
          <router-link
            class="el-dropdown-item"
            to="/pages/Yelu-pages/shop/SPA/snowpeak"
            >Snowpeak</router-link
          >
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
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
  align-items: center;
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
</style>
