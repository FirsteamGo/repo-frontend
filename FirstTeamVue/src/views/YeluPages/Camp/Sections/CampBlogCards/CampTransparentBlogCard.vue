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
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    action: {
        type: Object,
        route: String,
        color: String,
        label: String,
        default: () => ({
            route: "",
            color: "success",
            label: "營區資訊",
        }),
    },
});
</script>
<template>
    <div class="card card-plain">
        <div class="card-header p-0 position-relative">
            <a class="d-block blur-shadow-image">
                <img :src="image" :alt="title" class="img-fluid shadow border-radius-lg"  loading="lazy" style="width: 400px; height: 250px;"/>
            </a>
        </div>
        <div class="card-body px-3">
      

            <h4 style="color: sienna;" >
                {{ title }}
            </h4>
            <p>
                {{ description }}

            </p>
            <p>
                {{ price }}
            </p>

            <!-- <a :href="action.route" class=" text-lg font-weight-bolder icon-move-right" :class="`text-${action.color}`">{{
                                    action.label }}
                                    <i class="fas fa-arrow-right text-xs ms-1"></i>
                                </a> -->
            <!-- <el-text class="mx-3"><router-link v-if="condition" to="/pages/Yelu-pages/act/Sections/ActWest/ActBlogCards/ActBlogCardValue"
                                                            style="font-weight:bolder; font-size:x-large;">test</router-link></el-text> -->

            <!-- <el-button type="danger" class="cartbtn font-weight-bolder">預定</el-button> -->

        </div>

    </div>
</template>

