<script setup>
import { onMounted, onUnmounted, ref, reactive, computed } from "vue";
import axios from "axios";
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
            label: "詳細資訊",
        }),
    },
});

</script>



<template>
    <div class="card card-plain">
        <div class="card-header p-0 position-relative">
            
                <img :src="image" :alt="title" class="img-fluid shadow border-radius-lg" loading="lazy"  style="width: 400px; height: 150px;" />
           
        </div>
        <div class="card-body px-0">
            <h5>
                <a class="text-dark font-weight-bold">{{title}}</a>
            </h5>
            <p>
                {{ description }}

            </p>
            <h6>
                {{ price }}
            </h6>

            <!-- <el-button @click="{ Actdetail(); dialogVisible = true }" class="text-lg font-weight-bolder icon-move-right"
                        :class="`text-${action.color}`">{{
                            action.label }}
                        <i class="fas fa-arrow-right text-xs ms-1"></i>
                    </el-button> -->

            <!-- <el-button type="danger" class=" m-0 p-3 text-lg cartbtn font-weight-bolder">購買</el-button> -->
        </div>
       
    </div>
</template>

