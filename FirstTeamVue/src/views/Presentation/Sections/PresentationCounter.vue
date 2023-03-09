<script setup>
import DefaultCounterCard from "../../../examples/cards/counterCards/DefaultCounterCard.vue";
</script>

<template>
  <section class="pt-3 pb-4" id="count-stats">
    <div class="container">
      <div class="row" >
        <div class="col-lg-9 z-index-2 border-radius-xl mx-auto py-3" >
          <div class="row" >
          <!-- 第一個icon -->
            <div class="col-md-4 position-relative" style="text-align: center;">
              <img src="/src/assets/img/icon/c01.png" style="width:110px; height:105px;" alt="main_logo" >
              <div>
                <h3>露營車</h3>
                <h4>Recreational vehicles</h4>
               <p> 直接上車就是你家</p>
               <p>盡情享受這趟旅行</p>
              </div>

              <DefaultCounterCard
                divider="vertical"
              />

            </div>
            <!-- 第二個icon -->
              <div class="col-md-4 position-relative" style="text-align: center;">
              <img src="/src/assets/img/icon/c02.png" style="width:100px; height:100px;" alt="main_logo" >
              <div>
                <h3>懶人露營</h3>
                <h4>Glamping</h4>
               <p>Glamorous奢華+Camping露營</p>
               <p>什麼都不想帶 懶人專屬</p>
               
              </div>

              <DefaultCounterCard
               divider="vertical"
             />

            </div>
            <!-- 第三個icon -->
            <div class="col-md-4 position-relative" style="text-align: center;">
              <img src="/src/assets/img/icon/c03.png" style="width:100px; height:100px;" alt="main_logo" >
              <div>
                <h3>自搭露營</h3>
                <h4>Camping</h4>
               <p>DIY高級玩家推薦</p>
               <p> 探索其中樂趣</p>
              </div>
             
              <DefaultCounterCard />

            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
