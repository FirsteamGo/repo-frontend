<script setup>
// example component
import Breadcrumbs from "@/examples/Breadcrumbs.vue";
</script>
<template>
<div class="container py-6 mt-2">
<div class="row px-8 ">
  
  <Breadcrumbs
    :routes="[
      { label: 'Home', route: '/' },
      { label: 'LandingPages', route: '/src/views/LandingPages/test' },
      { label: 'test', route: '/src/views/LandingPages/test/test.vue' },
    ]"
  />
</div>
</div>
</template>