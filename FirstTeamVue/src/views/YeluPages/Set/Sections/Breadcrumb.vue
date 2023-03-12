<script setup>
// example component
import Breadcrumbs from "@/examples/Breadcrumbs.vue";
</script>

<template>
<div class="container py-6 mt-2">
<div class="row px-8 ">
  
  <Breadcrumbs
    :routes="[
      { label: '首頁', route: '/' },
      { label: '套裝行程', route: '/src/views/Set/SetView.vue' },
      
    ]"
  />
</div>
</div>
</template>