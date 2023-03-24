<script setup>
import { onMounted, onUnmounted, ref, reactive, computed } from "vue";
const depot = reactive([]);

// function showData() {
//   depot.Name = localStorage.getItem("name");
//   depot.Sex = localStorage.getItem("sex");
//   depot.Age = localStorage.getItem("age");
//   depot.Dog = localStorage.getItem("dog");
//   depot.Car = localStorage.getItem("car");
// }
// onMounted(() => {
//   showData();
// });
</script>
<template>
  <table
    id="shopCart"
    class="table table-dark table-striped table-hover table-bordered"
  >
    <thead>
      <tr>
        <th scope="col">商品名稱</th>
        <th scope="col">數量</th>
        <th scope="col">總價</th>
        <th scope="col">訂單成立時間</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <!-- <th scope="row">1</th> -->
        <td>{{ depot.Name }}</td>
        <td>{{ depot.Sex }}</td>
        <td>{{ depot.Age }}</td>
        <td>{{ depot.Dog }}</td>
      </tr>
      <tr>
        <!-- <th scope="row">1</th> -->
        <td>Cup</td>
        <td>2</td>
        <td>60</td>
        <td>2023/03/19</td>
      </tr>
    </tbody>
  </table>
</template>
<style></style>
