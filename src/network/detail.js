import request from './index'

export function getDetail(iid) {
  return request({
    url:'/detail',
    params:{
      iid
    }
  })
}

export function getRecommend() {
  return request({
    url:'/recommend'
  })
}
export class Goods{
  constructor(itemInfo,columns,services){
    this.title = itemInfo.title;
    this.newPrice = itemInfo.price;
    this.oldPrice = itemInfo.oldPrice;
    this.columns = columns;
    this.service = services;
    this.discount = itemInfo.discountDesc;
    this.discountbgc = itemInfo.discountBgColor;
    this.lowPrice = itemInfo.lowNowPrice;
    this.topImages = itemInfo.topImages;
    this.desc = itemInfo.desc;
  }
}