<script setup>
import DefaultReviewCard from "@/examples/cards/reviewCards/DefaultReviewCard.vue";
</script>
<template>
  <section class="py-7">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 mx-auto text-center">
          <h2 class="mb-0">商店精選</h2>
          <!-- <h2 class="text-gradient text-warning  mb-">
            Camping Store
          </h2> -->
          <p class="lead">
            Many Fortune 500 companies, startups.
          </p>
        </div>
      </div>
      <div class="row mt-6">
        <DefaultReviewCard
          name="Nick Willever"
          date="1 day ago"
          review='"This is an excellent product, the documentation is excellent and
          helped me get things done more efficiently."'
          :rating="5.0"
        />
        <DefaultReviewCard
          class="ms-md-auto"
          color="bg-gradient-warning "
          name="Shailesh Kushwaha"
          date="1 week ago"
          review='"I found solution to all my design needs from Creative Tim. I
                  use them as a freelancer in my hobby projects for fun! And its
                  really affordable, very humble guys !!!"'
          :rating="5.0"
        />

        <DefaultReviewCard
          name="Samuel Kamuli"
          date="3 weeks ago"
          review='"Great product. Helped me cut the time to set up a site. I
                  used the components within instead of starting from scratch. I
                  highly recommend for developers who want to spend more time on
                  the backend!."'
          :rating="4.0"
        />
      </div>
      <hr class="horizontal dark my-5" />
      
    </div>
  </section>
</template>
