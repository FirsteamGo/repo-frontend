import { defineStore } from "pinia";
import {ref,reactive}from "vue";
import axios from "axios";

export const useCampShop=defineStore('CampShop',()=>{
//下拉選單會用到的建構子
class CampProducts{
    constructor(商品細項id, 品牌名稱, 產品名稱, 產品說明, 產品圖片, 單價, 數量, 總價){
        this.商品細項id=商品細項id;
        this.品牌名稱=品牌名稱;
        this.產品名稱=產品名稱;
        this.產品說明=產品說明;
        this.產品圖片=產品圖片;
        this.單價=單價;
        this.數量=數量;
        this.總價=總價;
    }
}
//視窗詳細資訊
class ProductsInfo{
    windowvisible=ref(false);
    商品細項id=ref(0);
    品牌名稱=ref('');
    產品名稱=ref('');
    產品說明=ref('');
    產品圖片=ref('');
    單價=ref(0);
    數量=ref(1);
    總價=ref(0);
}
class shopcart{
    商品細項id=ref(0);
    產品名稱=ref('');
    單價=ref(0);
    數量=ref(1);
    總價=ref(0);
    產品圖片=ref('');
}



//個別選單獨立Info?
const Images=ref("https://localhost:7120/images/");
//彈跳視窗詳細資訊
const ShopproductsInfo=new ProductsInfo;
//購物車
const ShopCart=new shopcart;
//商店總覽
const CampShopInfo=reactive([]);
const tnf=reactive({"TheNorthFace":[],});
const snowpeak=reactive({"Snowpeak":[],});
const sadomain=reactive({"SADOMAIN":[],});
const titan =reactive({"TyumenTitan":[],});
const forest=reactive({"ForestOutdoor":[],});
const lifecode=reactive({"LifeCode":[],});
const polarstar=reactive({"PolarStar":[],});
const naturehike=reactive({"Naturehike":[],});
const iveco =reactive({"IVECO":[],});
const adria =reactive({"ADRIA":[],});
let dialogvision=reactive(new Array(10).fill(false));


let count = ref(1);
//購物車方法
const shopCart=()=>{
    ShopCart.商品細項id=ShopproductsInfo.商品細項id;
    ShopCart.產品名稱=ShopproductsInfo.產品名稱;
    ShopCart.單價=ShopproductsInfo.單價.value;
    ShopCart.數量=count.value;
    ShopCart.總價=ShopproductsInfo.單價*count.value;
    ShopCart.產品圖片=ShopproductsInfo.產品圖片;

    const addPro=localStorage.getItem("shopList");
    const add=addPro ? JSON.parse(addPro):[];
    add.push(ShopCart);
    localStorage.setItem("shopList",JSON.stringify(add));
};

//取出購物車裡的東西
const storesss=()=>{
    const aaa=localStorage.getItem("shopList");
    if (aaa) {
        return JSON.parse(aaa)
      }
      return []
};


//精選商品
const Topgoods=async()=>{
    try{
        const res=await axios.get("https://localhost:7108/api/ShopDetails");
        res.data.forEach((ShopDetails) => {
            const detail=new CampProducts(ShopDetails.商品細項id, ShopDetails.品牌名稱, ShopDetails.產品名稱, ShopDetails.產品說明, ShopDetails.產品圖片, ShopDetails.單價, ShopDetails.數量, ShopDetails.總價);
            CampShopInfo.push(detail);
        });
    }catch(error){
        console.error(error);
    }
};
 
//tnf
const tnfProduct = async () => {
    try{
        const res=await axios.get("https://localhost:7108/api/ShopDetails");
        res.data.forEach(tnfDetails=>{
            const TNFdata=new CampProducts(tnfDetails.商品細項id, tnfDetails.品牌名稱, tnfDetails.產品名稱, tnfDetails.產品說明, tnfDetails.產品圖片, tnfDetails.單價, tnfDetails.數量, tnfDetails.總價);
            const Alltnf=TNFdata.品牌名稱;
            if(tnf[Alltnf]){
                tnf[Alltnf].push(TNFdata)
            }else{
                console.log(`unknown item:${Alltnf}`);
            }
        })
    }catch(error){
        console.error(error);
    }
};

//snowpeak
const snowpeakProduct=async()=>{
    try{
        const res=await axios.get("https://localhost:7108/api/ShopDetails");
        res.data.forEach(snowdetail=>{
            const Snowdata=new CampProducts(snowdetail.商品細項id, snowdetail.品牌名稱, snowdetail.產品名稱, snowdetail.產品說明, snowdetail.產品圖片, snowdetail.單價, snowdetail.數量, snowdetail.總價);
            const Allsnow=Snowdata.品牌名稱;
            if(snowpeak[Allsnow]){
                snowpeak[Allsnow].push(Snowdata)
            }else{
                console.log(`unknown item:${Allsnow}`);
            }
        })
    }catch(error){
        console.error(error);
    }
};

//sadomain
const sadomainProduct=async()=>{
    try{
        const res=await axios.get("https://localhost:7108/api/ShopDetails");
        res.data.forEach(sadodetail=>{
            const sadodata=new CampProducts(sadodetail.商品細項id, sadodetail.品牌名稱, sadodetail.產品名稱, sadodetail.產品說明, sadodetail.產品圖片, sadodetail.單價, sadodetail.數量, sadodetail.總價);
            const Allsado=sadodata.品牌名稱;
            if(sadomain[Allsado]){
                sadomain[Allsado].push(sadodata)
            }else{
                console.log(`unknown item:${Allsado}`);
            }
        })
    }catch(error){
        console.error(error);
    }
};

//titan
const titanProduct=async()=>{
    try{
        const res=await axios.get("https://localhost:7108/api/ShopDetails");
        res.data.forEach(titandetail=>{
            const titandata=new CampProducts(titandetail.商品細項id, titandetail.品牌名稱, titandetail.產品名稱, titandetail.產品說明, titandetail.產品圖片, titandetail.單價, titandetail.數量, titandetail.總價);
            const Alltitan=titandetail.品牌名稱;
            if(titan[Alltitan]){
                titan[Alltitan].push(titandata)
            }else{
                console.log(`unknown item:${Alltitan}`);
            }
        })
    }catch(error){
        console.error(error);
    }
};

//forest
const forestProduct=async()=>{
    try{
        const res=await axios.get("https://localhost:7108/api/ShopDetails");
        res.data.forEach(forestdetail=>{
            const forestdata=new CampProducts(forestdetail.商品細項id, forestdetail.品牌名稱, forestdetail.產品名稱, forestdetail.產品說明,forestdetail.產品圖片, forestdetail.單價, forestdetail.數量, forestDialog.總價);
            const Allforest=forestdetail.品牌名稱;
            if(forest[Allforest]){
                forest[Allforest].push(forestdata)
            }else{
                console.log(`unknown item:${Allforest}`);
            }
        })
    }catch(error){
        console.error(error);
    }
};

//lifecode
const lifecodeProduct=async()=>{
    try{
        const res=await axios.get("https://localhost:7108/api/ShopDetails");
        res.data.forEach(lifecodedetail=>{
        const lifecodedata=new CampProducts(lifecodedetail.商品細項id, lifecodedetail.品牌名稱, lifecodedetail.產品名稱, lifecodedetail.產品說明, lifecodedetail.產品圖片, lifecodedetail.單價, lifecodedetail.數量, lifecodedetail.總價);
        const Alllifecode=lifecodedetail.品牌名稱;
        if(lifecode[Alllifecode]){
            lifecode[Alllifecode].push(lifecodedata)
        }else{
            console.log(`unknown item:${Alllifecode}`);
        }
    })
    }catch(error){
        console.error(error);
    }
};

//polarstar
const polarstarProduct=async()=>{
    try{
        const res=await axios.get("https://localhost:7108/api/ShopDetails");
        res.data.forEach(polarstardetail=>{
            const polarstardata=new CampProducts(polarstardetail.商品細項id, polarstardetail.品牌名稱, polarstardetail.產品名稱, polarstardetail.產品說明, polarstardetail.產品圖片, polarstardetail.單價, polarstardetail.數量, polarstardetail.總價);
            const Allpolarstar=polarstardetail.品牌名稱;
            if(polarstar[Allpolarstar]){
                polarstar[Allpolarstar].push(polarstardata);
            }else{
            console.log(`unknown item:${Allpolarstar}`);

            }
        })
    }catch(error){
        console.error(error);
    }
};

//naturehike
const naturehikeProduct=async()=>{
    try{
        const res=await axios.get("https://localhost:7108/api/ShopDetails");
    res.data.forEach(naturehikedetail=>{
        const naturehikedata=new CampProducts(naturehikedetail.商品細項id, naturehikedetail.品牌名稱, naturehikedetail.產品名稱, naturehikedetail.產品說明, naturehikedetail.產品圖片, naturehikedetail.單價, naturehikedetail.數量, naturehikedetail.總價);
        const Allnaturehike=naturehikedetail.品牌名稱;
        if(naturehike[Allnaturehike]){
            naturehike[Allnaturehike].push(naturehikedata);
        }else{
            console.log(`unknown item:${Allnaturehike}`);
        }
    })
    }catch (error){
        console.error(error);
    }
};

//iveco
const ivecoProduct=async()=>{
    try{
        const res=await axios.get("https://localhost:7108/api/ShopDetails");
    res.data.forEach(ivecodetail=>{
      const ivecodata=new CampProducts(ivecodetail.商品細項id, ivecodetail.品牌名稱, ivecodetail.產品名稱, ivecodetail.產品說明, ivecodetail.產品圖片, ivecodetail.單價, ivecodetail.數量, ivecodetail.總價);
      const Alliveco=ivecodetail.品牌名稱;
      if(iveco[Alliveco]){
        iveco[Alliveco].push(ivecodata);
      }else{
        console.log(`unknown item:${Alliveco}`);
      }
    })
    }catch (error){
        console.error(error);
    }
};

//adria
const adriaProduct=async()=>{
    try{
        const res=await axios.get("https://localhost:7108/api/ShopDetails");
    res.data.forEach(adriadetail=>{
        const adriadata=new CampProducts(adriadetail.商品細項id, adriadetail.品牌名稱, adriadetail.產品名稱, adriadetail.產品說明, adriadetail.產品圖片, adriadetail.單價, adriadetail.數量, adriadetail.總價);
        const Alladria=adriadetail.品牌名稱;
        if(adria[Alladria]){
            adria[Alladria].push(adriadata);
        }else{
            console.log(`unknown item:${Alladria}`);
        }  
    })
    }catch (error){
        console.error(error);
    }
};
//--------------------------------------------------------------
//goodsDialog
let goodsDialog=(商品細項id)=>{
    let shopArr=[];
    for(let i=0;CampShopInfo.length>i;i++){
        let item=CampShopInfo[i];
        if(item.商品細項id==商品細項id){
            item.Edit=true;
            ShopproductsInfo.商品細項id=item.商品細項id;
            ShopproductsInfo.品牌名稱=item.品牌名稱;
            ShopproductsInfo.產品名稱=item.產品名稱;
            ShopproductsInfo.產品說明=item.產品說明;
            ShopproductsInfo.產品圖片=item.產品圖片;
            ShopproductsInfo.單價.value=item.單價;
            ShopproductsInfo.數量.value=item.數量;
            ShopproductsInfo.總價.value=item.總價;

        }
        else{item.Edit=false;}

        shopArr.push(item);
}
CampShopInfo.splice(0,shopArr.length,...shopArr);
};

//tnfDialog
let tnfDialog=(商品細項id)=>{
    let tnfArr=[];
    for(let i=0;tnf.TheNorthFace.length>i;i++){
        let item=tnf.TheNorthFace[i];
        if(item.商品細項id==商品細項id){
            item.Edit=true;

            ShopproductsInfo.商品細項id=item.商品細項id;
            ShopproductsInfo.品牌名稱=item.品牌名稱;
            ShopproductsInfo.產品名稱=item.產品名稱;
            ShopproductsInfo.產品說明=item.產品說明;
            ShopproductsInfo.產品圖片=item.產品圖片;
            ShopproductsInfo.單價.value=item.單價;
            ShopproductsInfo.數量.value=item.數量;
            ShopproductsInfo.總價=item.總價;
        }
        else{item.Edit=false;}
        tnfArr.push(item);
    }
    tnf.TheNorthFace.splice(0,tnfArr.length,...tnfArr);
};

//snowpeakDialog
let snowpeakDialog=(商品細項id)=>{
    let snowpeakArr=[];

    for(let i=0;snowpeak.Snowpeak.length>i;i++){
        let item=snowpeak.Snowpeak[i];
        if(item.商品細項id==商品細項id){
            item.Edit=true;

            ShopproductsInfo.商品細項id=item.商品細項id;
            ShopproductsInfo.品牌名稱=item.品牌名稱;
            ShopproductsInfo.產品名稱=item.產品名稱;
            ShopproductsInfo.產品說明=item.產品說明;
            ShopproductsInfo.產品圖片=item.產品圖片;
            ShopproductsInfo.單價.value=item.單價;
            ShopproductsInfo.數量.value=item.數量;
            ShopproductsInfo.總價=item.總價;
        }
        else{item.Edit=false;}
        snowpeakArr.push(item);
    }
    snowpeak.Snowpeak.splice(0,snowpeakArr.length,...snowpeakArr);
};

//sadomainDialog
let sadomainDialog=(商品細項id)=>{
    let sadomainArr=[];
    
    for(let i=0;sadomain.SADOMAIN.length>i;i++){
        let item=sadomain.SADOMAIN[i];
        if(item.商品細項id==商品細項id){
            item.Edit=true;
            
            ShopproductsInfo.商品細項id=item.商品細項id;
            ShopproductsInfo.品牌名稱=item.品牌名稱;
            ShopproductsInfo.產品名稱=item.產品名稱;
            ShopproductsInfo.產品說明=item.產品說明;
            ShopproductsInfo.產品圖片=item.產品圖片;
            ShopproductsInfo.單價.value=item.單價;
            ShopproductsInfo.數量.value=item.數量;
            ShopproductsInfo.總價=item.總價;
        }
        else{item.Edit=false;}
        sadomainArr.push(item);
}
sadomain.SADOMAIN.splice(0,sadomainArr.length,...sadomainArr);
};

//titanDialog
let titanDialog=(商品細項id)=>{
    let titanArr=[];
    for(let i=0;titan.TyumenTitan.length>i;i++){
        let item=titan.TyumenTitan[i];
        if(item.商品細項id==商品細項id){
            item.Edit=true;

            ShopproductsInfo.商品細項id=item.商品細項id;
            ShopproductsInfo.品牌名稱=item.品牌名稱;
            ShopproductsInfo.產品名稱=item.產品名稱;
            ShopproductsInfo.產品說明=item.產品說明;
            ShopproductsInfo.產品圖片=item.產品圖片;
            ShopproductsInfo.單價.value=item.單價;
            ShopproductsInfo.數量.value=item.數量;
            ShopproductsInfo.總價=item.總價;
        }
        else{item.Edit=false;}
        titanArr.push(item);
    }
    titan.TyumenTitan.splice(0,titanArr.length,...titanArr);
};

//forestDialog
let forestDialog=(商品細項id)=>{
    let forestArr=[];
    for(let i =0;forest.ForestOutdoor.length>i;i++){
        let item=forest.ForestOutdoor[i];
        if(item.商品細項id==商品細項id){
            item.Edit=true;

            ShopproductsInfo.商品細項id=item.商品細項id;
            ShopproductsInfo.品牌名稱=item.品牌名稱;
            ShopproductsInfo.產品名稱=item.產品名稱;
            ShopproductsInfo.產品說明=item.產品說明;
            ShopproductsInfo.產品圖片=item.產品圖片;
            ShopproductsInfo.單價.value=item.單價;
            ShopproductsInfo.數量.value=item.數量;
            ShopproductsInfo.總價=item.總價;
        }
        else{item.Edit=false;}
        forestArr.push(item);
    }
    forest.ForestOutdoor.splice(0,forestArr.length,...forestArr);
};

//lifecodeDialog
let lifecodeDialog=(商品細項id)=>{
    let lifeArr=[];
    for(let i = 0;lifecode.LifeCode.length>i;i++){
        let item=lifecode.LifeCode[i];
        if(item.商品細項id==商品細項id){
            item.Edit=true;

            ShopproductsInfo.商品細項id=item.商品細項id;
            ShopproductsInfo.品牌名稱=item.品牌名稱;
            ShopproductsInfo.產品名稱=item.產品名稱;
            ShopproductsInfo.產品說明=item.產品說明;
            ShopproductsInfo.產品圖片=item.產品圖片;
            ShopproductsInfo.單價.value=item.單價;
            ShopproductsInfo.數量.value=item.數量;
            ShopproductsInfo.總價=item.總價;
        }
        else{item.Edit=false;}
        lifeArr.push(item);
}
lifecode.LifeCode.splice(0,lifeArr.length,...lifeArr);
};

//polarstarDialog
let polarstarDialog=(商品細項id)=>{
    let polarArr=[];
    for(let i=0;polarstar.PolarStar.length>i;i++){
        let item=polarstar.PolarStar[i];
        if(item.商品細項id==商品細項id){
            item.Edit=true;

            ShopproductsInfo.商品細項id=item.商品細項id;
            ShopproductsInfo.品牌名稱=item.品牌名稱;
            ShopproductsInfo.產品名稱=item.產品名稱;
            ShopproductsInfo.產品說明=item.產品說明;
            ShopproductsInfo.產品圖片=item.產品圖片;
            ShopproductsInfo.單價.value=item.單價;
            ShopproductsInfo.數量.value=item.數量;
            ShopproductsInfo.總價=item.總價;
        }
        else{item.Edit=false;}
        polarArr.push(item);
}
polarstar.PolarStar.splice(0,polarArr.length,...polarArr);
};

//naturehikeDialog
let natureDialog=(商品細項id)=>{
    let natureArr=[];
    for(let i=0;naturehike.Naturehike.length>i;i++){
        let item=naturehike.Naturehike[i];
        if(item.商品細項id==商品細項id){
            item.Edit=true;

            ShopproductsInfo.商品細項id=item.商品細項id;
            ShopproductsInfo.品牌名稱=item.品牌名稱;
            ShopproductsInfo.產品名稱=item.產品名稱;
            ShopproductsInfo.產品說明=item.產品說明;
            ShopproductsInfo.產品圖片=item.產品圖片;
            ShopproductsInfo.單價.value=item.單價;
            ShopproductsInfo.數量.value=item.數量;
            ShopproductsInfo.總價=item.總價;
        }
        else{item.Edit=false;}
        natureArr.push(item);
    }
    naturehike.Naturehike.splice(0,natureArr.length,...natureArr);
};

//ivecoDialog
let ivecoDialog=(商品細項id)=>{
    let ivecoArr=[];
    for(let i=0;iveco.IVECO.length>i;i++){
        let item=iveco.IVECO[i];
        if(item.商品細項id==商品細項id){
            item.Edit=true;

            ShopproductsInfo.商品細項id=item.商品細項id;
            ShopproductsInfo.品牌名稱=item.品牌名稱;
            ShopproductsInfo.產品名稱=item.產品名稱;
            ShopproductsInfo.產品說明=item.產品說明;
            ShopproductsInfo.產品圖片=item.產品圖片;
            ShopproductsInfo.單價.value=item.單價;
            ShopproductsInfo.數量.value=item.數量;
            ShopproductsInfo.總價=item.總價;
        }
        else{item.Edit=false;}
        ivecoArr.push(item);
    }
    iveco.IVECO.splice(0,ivecoArr.length,...ivecoArr);
};

//adriaDialog
let adriaDialog=(商品細項id)=>{
    let adriaArr=[];
    for(let i=0;adria.ADRIA.length>i;i++){
        let item=adria.ADRIA[i];
        if(item.商品細項id==商品細項id){
            item.Edit=true;

            ShopproductsInfo.商品細項id=item.商品細項id;
            ShopproductsInfo.品牌名稱=item.品牌名稱;
            ShopproductsInfo.產品名稱=item.產品名稱;
            ShopproductsInfo.產品說明=item.產品說明;
            ShopproductsInfo.產品圖片=item.產品圖片;
            ShopproductsInfo.單價.value=item.單價;
            ShopproductsInfo.數量.value=item.數量;
            ShopproductsInfo.總價=item.總價;
        }
        else{item.Edit=false;}
        adriaArr.push(item);
    }
    adria.ADRIA.splice(0,adriaArr.length,...adriaArr);
};


return{
    tnf, snowpeak, sadomain, titan, forest, lifecode, polarstar, naturehike, iveco, adria, Topgoods, tnfProduct, snowpeakProduct, sadomainProduct, titanProduct, forestProduct, lifecodeProduct, polarstarProduct, 
    naturehikeProduct, ivecoProduct, adriaProduct, Images, ShopproductsInfo, CampShopInfo, dialogvision, goodsDialog, tnfDialog, snowpeakDialog, sadomainDialog, titanDialog, forestDialog, lifecodeDialog, polarstarDialog,
    natureDialog, ivecoDialog, adriaDialog, shopCart, ShopCart, storesss, count,
};
})