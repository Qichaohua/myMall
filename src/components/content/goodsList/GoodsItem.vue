<template>
    <div class="item" @click="itemClick">
        <!--<img :src="imgUrl" alt="" @load="imgLoad">-->
        <img v-lazy="imgUrl" @load="imgLoad">
        <div class="title one-line">{{goods.title}}</div>
        <div class="desc">
            <span class="price">{{goods.price}}</span>
            <span class="num">{{goods.cfav}}</span>
        </div>
    </div>
</template>

<script>
  export default {
    name: "GoodsItem",
    props:{
      goods:{
        type:Object,
        default(){
          return {}
        }
      }
    },
    computed:{
      imgUrl(){
        return this.goods.image || this.goods.img || this.goods.show.img
      }
    },
    methods:{
      imgLoad(){
        this.$bus.$emit('itemImgLoad')
      },
      itemClick(){
        this.$router.push({
          path:'/detail',
          query:{
            iid:this.goods.iid
          }
        })
      }
    }
  }
</script>

<style scoped>
    .item {
        padding-bottom: 8px;
    }
    img{
        width: 100%;
        border-radius: 5px;
    }
    .title {
        height: 13px;
        font-size: 13px;
        margin: 3px 0;
    }
    .desc{
        font-size: 12px;
        height: 20px;
        text-align: center;
        padding: 5px;
    }
    .desc span{
        margin: 0 10px;
        position: relative;

    }
    .desc .price {
        color:var(--color-high-text);
        margin-right: 20px;
    }
    .desc .num::before {
        content: '';
        position: absolute;
        top: -1px;
        left: -15px;
        width: 14px;
        height: 14px;
        background: url("~assets/img/common/collect.svg") no-repeat 0 0 /14px 14px;
    }



</style>