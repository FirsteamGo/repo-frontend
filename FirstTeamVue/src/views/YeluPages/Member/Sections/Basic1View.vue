<script  setup>
import Revise from "./Revise.vue";
import Drawer from "./Drawer.vue";
const refreshEdit = () => {
  console.log('refreshEdit refreshEdit refreshEdit')
  emits('refreshEdit_Frame', 'data')
}
const emits = defineEmits(['refreshEdit_Frame'])


</script>

<template>
  <Header>
    <div class="page-header align-items-start min-vh-100" loading="lazy">
      <!-- <span class="mask bg-gradient-dark opacity-6"></span> -->
      <div class="container my-auto">
        <div class="row">
          <div class="col-lg-4 col-md-8 col-12 mx-auto">
            <div class="card z-index-0 fadeIn3 fadeInBottom " style="width: 600px; height: 700px; margin-top: 100px;">
              <div class="card-header p-0 position-relative mt-n4 mx-3 z-index-2 ">
                <div class="bg-gradient-success shadow-success border-radius-lg py-3 pe-1">
                  <h4 class="text-white font-weight-bolder text-center mt-2 mb-0">
                    會員中心
                  </h4>
                 
                </div>
              </div>


              <div class="card-body" style="height: 500px; width: 1150px; margin: 0 auto;">
                <el-tabs type="border-card" class="demo-tabs" style="width: 50%">
                  <el-tab-pane label="修改">
                    <Revise />
                  </el-tab-pane>
                  <el-tab-pane label="智能客服">
                    <Drawer />

                  </el-tab-pane>
                  <!-- <el-tab-pane label="Role">Role</el-tab-pane> -->
                  <!-- <el-tab-pane label="Task">Task</el-tab-pane> -->
                </el-tabs>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </Header>
</template>

<style>
.demo-tabs .el-tabs__nav-wrap {
  justify-content: flex-end;
}

.align-right {
  text-align: right;
}
</style>


