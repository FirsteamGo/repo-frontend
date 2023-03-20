<template>
  <body>
	<div id="myCart">
        <div style="text-align: center;" class="m-5" >
		<h1 >野麓購物車 </h1>
        <h5>YELU CAMP Shopping Cart</h5>
        </div>
        
		<header id="cartList">
			<table style="border-bottom:1px solid #ddd;">
				<tr class="itemHead">
                    <td style="width:200px;">商品名稱</td>
					<td style="width:280px;">商品內容</td>
					<td style="width:170px;">單價($)</td>
					<td style="width:70px;">數量</td>
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
    
     <div class="d-flex justify-content-end m-5">
        <router-link to="/">
         <el-button type="info" class="text-lg" style="margin: 5px;">重新購買
             <span class="material-icons">refresh</span></el-button> </router-link>
        <router-link to="/">
         <el-button type="warning" class="text-lg " style="margin: 5px;">結帳
             <span class="material-icons">credit_card</span></el-button> </router-link>
        <router-link to="/">
             <el-button type="info" plain class="text-lg " style="margin: 5px;">
             <span class="material-icons p-2">home</span></el-button></router-link>
     </div>

	</div>
</body>
</template>


<!-- 寫從localStorage取出資料 -->
<script>



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