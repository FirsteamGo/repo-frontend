<script  setup>
import Login from "./Login.vue";
import Signup from "./Signup.vue";

import Shortnews from "./Shortnews.vue"


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
                    登入
                  </h4>
                  <div class="row mt-3">
                    <div class="col-2 text-center ms-auto">
                      <a class="btn btn-link px-3" href="https://www.facebook.com/ispanTaipei/">
                        <i class="fa fa-facebook text-white text-lg"></i>
                      </a>
                    </div>
                    <div class="col-2 text-center px-1">
                      <a class="btn btn-link px-3" href="javascript:;">
                        <i class="fa fa-github text-white text-lg"></i>
                      </a>
                    </div>
                    <div class="col-2 text-center me-auto">
                      <a class="btn btn-link px-3" href="javascript:;">
                        <i class="fa fa-google text-white text-lg"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>


              <div class="card-body" style="height: 500px; width: 550px; margin: 0 auto;">
                <el-tabs type="border-card" class="demo-tabs align-end" style="width: 500px; margin: 0 auto;" >
                  <el-tab-pane label="登入" class="align-right" >
                    <Login @abc="refreshEdit" />
                  </el-tab-pane>
                  <el-tab-pane label="註冊" class="align-right" >
                    <Signup style="overflow: auto; height: 400px;"/>
                  </el-tab-pane>
                  <!-- <el-tab-pane label="Role">Role</el-tab-pane> -->
                  <!-- <el-tab-pane label="Task">Task</el-tab-pane> -->
                  
                  <Shortnews/>
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


