<script setup>
import ExampleCard from "../Components/ExampleCard.vue";
import MaterialBadge from "../../../components/MaterialBadge.vue";

// images
import imgSigninCover from "@/assets/img/signin-cover.png";
</script>
<template>
  <section class="py-5 ">
    <div class="container ">
      <div class="row">
        <div class="row text-center my-sm-5 mt-3">
          <div class="col-lg-6 mx-auto ">
            <MaterialBadge color="warning" class="mb-3">#Popular Camp</MaterialBadge>
            <h2 class="">熱門營區</h2>
            <p class="lead">Camp Introduction.</p>
          </div>
        </div>
      </div>
    </div>
    <div class="container mt-1 " style="background-color: #f8f9fa;">
      <div class="row d-flex justify-content-center">
        <div class="col-md-8 ">
          <div class="row mt-4 d-flex ">
            <div class="col-md-6 mt-md-0 mt-5 my-4 ">  
              <ExampleCard
                class="shadow-lg "
                title="北部"
                image="https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                route="camp"
              />
              <p> 新北 桃園 新竹</p>
            </div>
            <div class="col-md-6 mt-md-0 mt-15">
              <ExampleCard
                class="shadow-lg"
                title="中部"
                image="https://images.unsplash.com/photo-1424135980090-9f15ad7a8efd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                route="camp"
              />
              <p>苗栗 南投 台中</p>
            </div>
          </div>
          <div class="row mt-4">
            <div class="col-md-6 mt-md-0 mt-5">
              <ExampleCard
                classes="mt-5"
                title="南部"
                image="https://images.unsplash.com/photo-1599758376048-8c340c1489cb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                route="camp"
              />
              <p> 嘉義 台南 高雄</p>

            </div>
            <div class="col-md-6 mt-md-0 mt-5">
              <ExampleCard
                classes="shadow-lg"
                title="東部"
                image="https://images.unsplash.com/photo-1525811902-f2342640856e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
                route="camp"
              />
              <p> 宜蘭 花蓮 台東</p>

            </div>
          </div>
        </div>
        <!-- <div class="col-md-3 mx-auto mt-md-0 mt-3">
          <div class="position-sticky" style="top: 100px !important">
            <h3>
              Presentation Pages for Company, Landing Pages, Blogs and Support
            </h3>
            <h6 class="text-secondary font-weight-normal">
              These is just a small selection of the multiple possibitilies you
              have. Focus on the business, not on the design.
            </h6>
          </div>
        </div> -->
      </div>
    </div>
  </section>
</template>
