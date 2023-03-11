<script setup>
import RotatingCard from "../../../examples/cards/rotatingCards/RotatingCard.vue";
import RotatingCardFront from "../../../examples/cards/rotatingCards/RotatingCardFront.vue";
import RotatingCardBack from "../../../examples/cards/rotatingCards/RotatingCardBack.vue";
import DefaultInfoCard from "../../../examples/cards/infoCards/DefaultInfoCard.vue";
</script>
<template>
  <section class=" py-5 mt-7">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-4 ms-auto me-auto p-lg-4 mt-lg-0 mt-5">
          <!-- 卡片一帶四 -->
          <RotatingCard>
            <RotatingCardFront
              image="https://images.unsplash.com/photo-1569683795645-b62e50fbf103?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
              icon="touch_app"
              title="精選活動 <br /> Popular Activity"
              description="Personal memories will be blurred because of time, and common memories will be more precious because of time."
            />

            <RotatingCardBack
              image="https://images.unsplash.com/photo-1498889444388-e67ea62c464b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1365&q=80"
              title="點我看更多"
              description="See more."
              :action="[
                {
                  route: './/sections/page-sections/hero-sections.html',
                  label: 'CLICK ME NOW !',
                },
              ]"
            />
          </RotatingCard>
        </div>

        <div class="col-lg-6 ms-auto">
          <div class="row justify-content-start">
            <!-- 左上 -->
            <DefaultInfoCard
              icon="location_on"
              title="北部 "
              description="新北 桃園 新竹"
             
            />
            <!-- 右上 -->
            <DefaultInfoCard
              icon="location_on"
              title="中部"
              description="苗栗 南投 台中"
            />
          </div>

          <div class="row justify-content-start mt-5">
            <!-- 左下 -->
            <DefaultInfoCard
              class="mt-3"
              icon="location_on"
              title="南部"
              description="嘉義 台南 高雄"
            />
            <!-- 右下 -->
            <DefaultInfoCard
              class="mt-3"
              icon="location_on"
              title="東部"
              description="宜蘭 花蓮 台東"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
