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
              <img src="/src/assets/img/icon/c01.png" style="width:100px; height:100px;" alt="main_logo" >
              <div>
                <h3>露營車</h3>
               <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. </p>
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
               <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. </p>
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
               <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. </p>
              </div>
             
              <DefaultCounterCard 
               divider="vertical"
             />

            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
