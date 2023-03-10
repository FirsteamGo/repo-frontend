<script setup>
  import Memberform from "./Memberform.vue";
  import Memberphoto from "./Memberphoto.vue";
  
</script>


<template>
  <breadcrumbs />
  
  <div class="common-layout">
    
      <el-container >
        
        <el-aside width="200px">
        
          
          <Memberphoto />
          
          

        </el-aside>
        <el-main>
          
          <Memberform />
          


        </el-main>

      </el-container>
    
  </div>
</template>



