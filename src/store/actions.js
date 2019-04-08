import {ADD_COUNTER, ADD_PRODUCT} from "./mutation-types";

export default {
    addCart(context,payload){

      return new Promise((resolve,reject)=>{
      //01.查找当前产品是否在购物车中
      let oldProduct = context.state.cartList.find( item => item.iid === payload.iid)
      //如果在购物车中，商品数量+1
      if(oldProduct){
        context.commit(ADD_COUNTER,oldProduct);
        resolve('商品数量+1')
      }else {
        //初始化商品数量
        payload.count = 1 ;
        context.commit(ADD_PRODUCT,payload);
        resolve('商品成功加入购物车')
      }
      })
    }

}