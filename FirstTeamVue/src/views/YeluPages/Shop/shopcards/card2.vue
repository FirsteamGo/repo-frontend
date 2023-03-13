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
  action: {
    type: Object,
    route: String,
    color: String,
    label: String,
    default: () => ({
      route: "javascript:;",
      color: "success",
      label: "More Information",
    }),
  },
});
</script>
<template>
  <div class="card card-plain">
    <div class="card-header p-0 position-relative">
      <a class="d-block blur-shadow-image">
        <img :src="image" :alt="title" class="img-fluid shadow border-radius-lg" loading="lazy" style="object-fit: cover;" />
      </a>
    </div>
    <div class="card-body px-0">
      <h5>
        <a :href="action.route" class="text-dark font-weight-bold">{{
          title
        }}</a>
      </h5>
      <p>
      TW {{ description }}元
      </p>
      <a :href="action.route" class=" text-lg font-weight-bolder icon-move-right" :class="`text-${action.color}`">{{
        action.label }}
        <i class="fas fa-arrow-right text-xs ms-1"></i>
      </a>
      <!-- <el-button type="warning" :icon="Search" round>詳細資訊</el-button> -->

      <el-button type="danger" :icon="Search" class="cartbtn font-weight-bolder">加入購物車</el-button>
    </div>
  </div>
</template>
<style>
.cartbtn {
  margin-left: 80px;

}
</style>