<script setup>
import DefaultReviewCard from "@/examples/cards/reviewCards/DefaultReviewCard.vue";
</script>
<template>
  <section class="py-7">
    <div class="container ">
      <div class="row">
        <div class="col-lg-6 mx-auto text-center mt-3" >
          <h2 class="mb-0 testimonial-section2 myword">商店精選</h2>
          <!-- <h2 class="text-gradient text-warning  mb-">
            Camping Store
          </h2> -->
          <p class="lead">
           Camping Store.
          </p>
        </div>
      </div>
      <div class="untree_co-section " style="background-color: #f8f9fa;">
    <div class="container">
      <div class="row">
        <div class="col-lg-7">
          <div class="owl-single dots-absolute owl-carousel">
            <router-link to="/pages/Yelu-pages/shop">
           
            <img src="@/assets/img/shop/shop03.jpg" alt="Free HTML Template by Untree.co" class="img-fluid rounded-20">
          </router-link>
            
          </div>
        </div>
        <div class="col-lg-5 pl-lg-5 ml-auto">
          
          <p>提供獨一無二的質感露營選品，實踐親近自然的生活價值，對戶外運動的熱愛和極致的探索精神，給予戶外愛好者，盡情的最佳選購!</p>
          <p>Provide unique quality camping products, practice the life value of being close to nature, love outdoor sports and the ultimate spirit of exploration, give outdoor lovers the best choice!</p>
          <!-- <ul class=" list-unstyled two-col clearfix " > 
            
              <li><span class="material-icons">sell</span>The North Face</li>
            <li><span class="material-icons">sell</span>Snowpeak</li>
            <li><span class="material-icons">sell</span>SADOMAIN</li>
            <li><span class="material-icons">sell</span>Tyumen Titan</li>
       
            <li><span class="material-icons">sell</span>Life Code</li>
            <li><span class="material-icons">sell</span>PolarStar</li>
			      <li><span class="material-icons">sell</span>Naturehike</li>
            <li><span class="material-icons">sell</span>IVECO</li>
            <li><span class="material-icons">sell</span>Adria</li>
      

          </ul> -->
 
          <ul class="list-unstyled two-col clearfix brands-list">
            <li><span class="material-icons">sell</span>The North Face</li>
            <li><span class="material-icons">sell</span>Snowpeak</li>
            <li><span class="material-icons">sell</span>SADOMAIN</li>
            <li><span class="material-icons">sell</span>Life Code</li>  

          </ul>
        </div>
          
        </div>
      </div>
    </div>
  </div>





      <hr class="horizontal dark my-5" />
      
  
  </section>
</template>


<style>
.untree_co-section {
  padding: 60px 0;

}

.myword{
  color: white;
}

.testimonial-section2 {
  background: #db8402	;
  text-decoration-color: azure;
  /* margin: 70px 0px 0px 0px; */

}

.rounded-20 {
  border-radius: 20px;
}

.brands-list {
display: flex;
flex-wrap: wrap;
}

.brands-list li {
flex-basis: calc(50% - 10px);
margin-right: 20px;
margin-bottom: 20px;
}

@media only screen and (max-width: 768px) {
.brands-list li {
flex-basis: calc(100% - 10px);
margin-right: 0;
}
}
</style>