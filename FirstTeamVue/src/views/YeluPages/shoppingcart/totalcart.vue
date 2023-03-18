<template>
    <body>
      <div id="myCart">
          <h1>
              Shopping Cart
          </h1>
          <header id="cartList">
              <table style="border-bottom:1px solid #ddd;">
                  <tr class="itemHead">
                      <td style="width:200px;">商品名稱</td>
                      <td style="width:280px;">商品內容</td>
                      <td style="width:170px;">單價($)</td>
                      <td style="width:50px;">數量</td>
                  </tr>
              </table>
              <!-- 動態新增 -->
              <!-- 會重複做的視為功能，功能要寫成函數 -->
              <!-- <div>
                  <table>
                      <tr class="item">
                          <td style="width:200px;">
                              <img src="imgs/formosa.jpg" width="80px">
                          </td>
                          <td style="width:280px;">
                              <p>Formosa</p>
                              <button>Delete</button>
                          </td>
                          <td style="width:170px;">
                              <p>5000</p>
                          </td>
                          <td style="width:60px;">
                              <p>
                                  <input type="number" value="1" min="1">
                              </p>
                          </td>
                      </tr>
                  </table>
              </div> -->
          </header>
          <footer style="text-align:right;">
              Total : <span id="total">0</span>
          </footer>
          <button type="button" class="btn btn-danger"  @click="addcart">清除</button>
          <button type="button" class="btn btn-success"  @click="addcart">結帳</button>
      </div>
  </body>
  </template>
  
  
  <!-- 寫從localStorage取出資料 -->
  <script>
  
  let storage = localStorage;
  function doFirst() {
      let itemString = storage.getItem('addItemList')
      let items = itemString.substring(0, itemString.length - 2).split(', ')//字串切割成陣列
      // console.log(items);
  
      newDiv = document.createElement('div')
      newTable = document.createElement('table')
  
      //將table放進div，再將div放進carlist
      newDiv.appendChild(newTable)
      document.getElementById('cartList').appendChild(newDiv)
  
  
      //total金額
      total = 0
      for (let i = 0; i < items.length; i++) {
          let itemInfo = storage.getItem(items[i])
          total += parseInt(itemInfo.split('|')[2])
  
          createCartList(items[i], itemInfo)
      }
      document.getElementById('total').innerText = total
  }
  
  // 動態新增
  function createCartList(itemId, itemValue) {
      // alert($`${itemId}:${itemValue}`)
      let itemTitle = itemValue.split('|')[0]
      let itemImage = 'imgs/' + itemValue.split('|')[1]
      let itemPrice = parseInt(itemValue.split('|')[2])
  
      //建立每個品項清單區域--tr
      let trItemList = document.createElement('tr')
      trItemList.className = 'item'
  
      newTable.appendChild(trItemList)
  
  
      //建立商品圖片--第一個td
      let tdImage = document.createElement('td')
      tdImage.style.width = '200px'
  
      let image = document.createElement('img')
      image.src = itemImage
      image.width = 60
  
      tdImage.appendChild(image)
      trItemList.appendChild(tdImage)
  
  
  
      //建立商品名稱和刪除按鈕--第二個td
      let tdTitle = document.createElement('td')
      tdTitle.style.width = '280px'
      tdTitle.id = itemId
  
      let pTitle = document.createElement('p')
      pTitle.innerText = itemTitle
  
      let delButton = document.createElement('button')
      delButton.innerText = 'Delete'
      delButton.addEventListener('click', deleteItem)
  
  
      tdTitle.appendChild(pTitle)
      tdTitle.appendChild(delButton)
      trItemList.appendChild(tdTitle)
  
  
      //建立商品價格--第三個td
      let tdPrice = document.createElement('td')
      tdPrice.style.width = '170px'
  
      let pPrice = document.createElement('p')
      pPrice.innerText = itemPrice
  
      tdPrice.appendChild(pPrice)
      trItemList.appendChild(tdPrice)
  
  
      //建立商品數量--第四個td
      let tdItemCount = document.createElement('td')
      tdItemCount.style.width = '60px'
  
      let pItemCount = document.createElement('p')
  
      let inputItemCount = document.createElement('input')
      inputItemCount.type = 'number'
      inputItemCount.value = 1
      inputItemCount.min = 1
      inputItemCount.addEventListener('input', changeItemCount)
  
      pItemCount.appendChild(inputItemCount)
      tdItemCount.appendChild(pItemCount)
      trItemList.appendChild(tdItemCount)
  
  }
  
  //replace:取代字串的方法
  //'原字串'.replace('原字元','欲修改的字元')
  
  function deleteItem(e) {
      //先找到誰按的刪除按鈕?
      let itemId = e.target.parentNode.id
      // alert(itemId)
  
      // 扣除金額--若要完成作業也要修改此!
      let itemValue = storage.getItem(itemId)
      total -= parseInt(itemValue.split('|')[2])
      document.getElementById('total').innerText = total
  
      // 清除storage
      storage.removeItem(itemId)
  
      // let value=storage.getItem('addItemList')
      // value.replace(`${itemId}, `,``)
      // storage.setItem('addItemList',newValue)
  
      //善用物件的陣列表示法(如下)
      storage['addItemList'] = storage['addItemList'].replace(`${itemId}, `, ``)
  
      // 刪除該筆<tr>
      // e.target.parentNode.parentNode.parentNode.removeChild(e.target.parentNode.parentNode)
      newTable.removeChild(e.target.parentNode.parentNode)
  
  }
  
  function changeItemCount() {
      // alert('這是作業!')
  }
  
  window.addEventListener('load', doFirst);
  
  </script>
  
  
  
  
  
  <style>
  body{
      font:normal 18px Tahoma,Arial,Verdana;
  }
  #myCart{
      margin: 0 auto;
      width: 900px;
      border:1px solid #fff;
  }
  input{
      width: 60px;
  }
  tr{
      border-bottom: 1px dotted #aaa;
  }
  
  td{
      margin: 0px;
      padding: 1px 10px 4px 10px;
      border-bottom: 1px dotted #ccc;
      text-align: left;
      vertical-align: top;
  }
      
  #cartList{
      font-size: medium;
      font-weight: 800;
      border-bottom: 1px solid #aaa;
  }
  #subtotal{
      font-size: medium;
      font-weight: 600;
      color: Maroon;
  }
  
  </style>