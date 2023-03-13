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
            route: "https://element-plus.org/zh-CN/component/icon.html#%E5%9B%BE%E6%A0%87%E9%9B%86%E5%90%88",
            color: "success",
            label: "詳細資訊",
        }),
    },
});
</script>
<template>
    <div class="card card-plain">
        <div class="card-header p-0 position-relative">
            <a class="d-block blur-shadow-image">
                <img :src="image" :alt="title" class="img-fluid shadow border-radius-lg" loading="lazy" />
            </a>
        </div>
        <div class="card-body px-0">
            <h5>
                <a :href="action.route" class="text-dark font-weight-bold">{{
                    title
                }}</a>
            </h5>
            <p>
                {{ description }}

            </p>
            <h6>
                ${{ price }}元
            </h6>

            <a :href="action.route" class=" text-lg font-weight-bolder icon-move-right" :class="`text-${action.color}`">{{
                action.label }}
                <i class="fas fa-arrow-right text-xs ms-1"></i>
            </a>
            
            <el-button type="danger" class="cartbtn font-weight-bolder">購買</el-button>
        </div>
    </div>
</template>

