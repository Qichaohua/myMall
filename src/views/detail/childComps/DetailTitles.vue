<template>
    <div v-if="Object.keys(goods).length !==0">
        <div class="itemInfo">
            <div class="title">{{goods.title}}</div>
            <div class="des">
                <span class="newPrice">{{goods.newPrice}}</span>
                <span class="oldPrice">{{goods.oldPrice}}</span>
                <span class="discount"
                      :style="{backgroundColor:goods.discountbgc}"
                >{{goods.discount}}</span>
            </div>
        </div>
        <div class="topDesc">
            <span class="topDesc-item">{{goods.columns[0]}}</span>
            <span class="topDesc-item">{{goods.columns[1]}}</span>
            <span class="topDesc-item">{{goods.service[goods.service.length-1].name}}</span>
        </div>
        <div class="service">
            <span class="service-item" v-for="index in goods.service.length-1" :key="index">
                <img :src="goods.service[index-1].icon" alt="">
                <span>{{goods.service[index-1].name}}</span>
            </span>
        </div>
    </div>
</template>

<script>
    import Goods from 'network/detail'
  export default {
    name: "DetailTitles",
    props:{
      goods:{
        type:Object,
        default(){
          return {}
        }
      }
    }
  }
</script>

<style scoped>
    .itemInfo {
        padding: 10px 8px;
    }
    .title {
        font-size: 16px;
        line-height: 1.4em;
    }
    .des {
        padding: 10px 8px;
    }
    .des span{
        margin-right: 5px;
    }
    .des .newPrice {
        font-size: 24px;
        color: var(--color-high-text);
    }
    .des .oldPrice {
        font-size: 10px;
        text-decoration: line-through;
    }
    .des .discount {
        font-size: 13px;
        color: #fff;
        padding: 3px 5px;
        border-radius: 10px;
    }
    .topDesc {
        display: flex;
        padding: 10px 8px;
        font-size: 12px;
        border-bottom: 2px solid #eee;
        justify-content: space-between;
    }
    .topDesc-item {
        flex: 1;
    }
    .topDesc-item:nth-child(2) {
        text-align: center;
    }
    .topDesc-item:nth-child(3) {
        text-align: right;
    }
    .service {
        padding: 0 8px;
        display: flex;
        justify-content: space-between;

        height: 60px;
        line-height: 60px;
        font-size: 13px;

        border-bottom: 4px solid #e7e7e7;
    }
    .service-item img {
        height: 13px;
        vertical-align: middle;
        margin-right: 3px;
    }

</style>