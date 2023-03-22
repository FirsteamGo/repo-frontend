<script setup>

defineProps({
  image: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: Number,
    required: true,
  },
  price:{
    type:Number,
    required:true,
  },
  content:{
    type:String,
    required:true,
  },
});
</script>
<template>
  <div class="card card-plain">
    <div class="card-header p-0 position-relative">
      <a class="d-block blur-shadow-image">
        <img :src="image" :alt="title" class="img-fluid shadow border-radius-lg" loading="lazy" style="width: 255px;height: 150px;" />
      </a>
    </div>
    <div class="card-body px-0">
      <h5>
        <a :href="action.route" class="text-dark font-weight-bold" style="cursor: default;">{{
          title
        }}</a>
      </h5>
      <span>
      TW {{ description }}元
      </span>
      <p class="word">{{ content }}</p>
      <!-- <a :href="action.route" class=" text-lg font-weight-bolder icon-move-right" :class="`text-${action.color}`">{{
        action.label }}
        <i class="fas fa-arrow-right text-xs ms-1"></i>
      </a> -->
     

      <!--購物車應該在小視窗內-->
      <!-- <el-button type="danger" :icon="Search" class="cartbtn font-weight-bolder">加入購物車</el-button> -->
    </div>
  </div>
</template>
<style>
.cartbtn {
  margin-left: 80px;
}
.word{
  color: rgba(0, 0, 0,0.6);
  font-weight: bold;
}
</style>