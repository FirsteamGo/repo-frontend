<template>
  <div>
    <h2>購物車</h2>
    <ul>
      <li v-for="(item, index) in cart" :key="index">
        <img :src="item.image" :alt="item.name" width="100">
        {{ item.name }} - {{ item.price }}元
        <button @click="removeFromCart(index)">移除</button>
      </li>

    </ul>
    <hr>
    <h2>商品列表</h2>
    <ul>
      <li v-for="(item, index) in products" :key="index">
        <img :src="item.image" :alt="item.name" width="100">
        {{ item.name }} - {{ item.price }}元
        <button @click="addToCart(item)">加入購物車</button>
      </li>
    </ul>
  </div>
</template>

<script>
import { ref, watch } from 'vue'

export default {
  name: 'ShoppingCart',

  setup() {
    // 商品列表
    const products = ref([
      { name: '商品1', price: 100, image: 'https://localhost:7120/images/040389fc-5093-44e4-b718-c051e2706741.jpg' },
      { name: '商品2', price: 200, image: 'https://localhost:7120/images/048e63c5-951b-4e29-b740-bb59fde6b35f.jpg' },
      { name: '商品3', price: 300, image: 'https://localhost:7120/images/2108e28d-2ca6-4481-8695-0ff815a05b25.jpg' },
    ])

    
    // 購物車
    const cart = ref([])

    // 從 Local Storage 讀取購物車資料
    const cartFromLocalStorage = localStorage.getItem('cart')
    if (cartFromLocalStorage !== null) {
      cart.value = JSON.parse(cartFromLocalStorage)
    }



    // 加入購物車
    const addToCart = (item) => {
      const itemWithImage = { ...item, image: item.image }
      cart.value.push(itemWithImage)
      localStorage.setItem('cart', JSON.stringify(cart.value))
    }


    // 從購物車移除
    const removeFromCart = (index) => {
      cart.value.splice(index, 1)
      localStorage.setItem('cart', JSON.stringify(cart.value))
    }

    // 監聽購物車變化，並將購物車資料存入 Local Storage
    watch(cart, (newVal) => {
      localStorage.setItem('cart', JSON.stringify(newVal))
    })

    return {
      products,
      cart,
      addToCart,
      removeFromCart,
    }
  },
}
</script>
