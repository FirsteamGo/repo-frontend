
<script lang="ts" setup>
import { ref } from 'vue'
import { ElMessageBox } from 'element-plus'
import chatbot from "./chatbot.vue";

const drawer = ref(false)
const innerDrawer = ref(false)

const handleClose = (done: () => void) => {
  ElMessageBox.confirm('You still have unsaved data, proceed?')
    .then(() => {
      done()
    })
    .catch(() => {
      // catch error
    })
}
</script>



<template>
  <el-button type="primary" style="margin-left: 16px" @click="drawer = true">
    open
  </el-button>

  <el-drawer v-model="drawer" title="我是機器人，請輸入hi繼續" size="50%">
    <!-- <chatbot/> -->
    <chatbot/>
    <!-- <div>
      <el-button @click="innerDrawer = true">Click me!</el-button>
      <el-drawer
        v-model="innerDrawer"
        title="I'm inner Drawer"
        :append-to-body="true"
        :before-close="handleClose"
      >
        <p>_(:зゝ∠)_</p>
      </el-drawer>
    </div> -->
  </el-drawer>
</template>


