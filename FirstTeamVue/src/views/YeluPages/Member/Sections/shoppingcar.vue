<template>
  <div>
    <h2>購物車</h2>
    <ul>
      <li v-for="(item, index) in cart" :key="index">
        {{ item.name }} - {{ item.price }}元
        <button @click="removeFromCart(index)">移除</button>
      </li>
    </ul>
    <hr>
    <h2>商品列表</h2>
    <ul>
      <li v-for="(item, index) in products" :key="index">
        {{ item.name }} - {{ item.price }}元
        <button @click="addToCart(item)">加入購物車</button>
      </li>
    </ul>
  </div>
</template>
  
<script >
import { ref, watch } from 'vue'

export default {
  name: 'ShoppingCart',

  setup() {
    // 商品列表
    const products = ref([
      { name: '商品1', price: 100 },
      { name: '商品2', price: 200 },
      { name: '商品3', price: 300 },
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
      cart.value.push(item)
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
  