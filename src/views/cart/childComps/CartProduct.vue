<template>
    <div v-if="Object.keys(productInfo).length !== 0" class="item">
        <check-button @click.native="clickCheck"
                      class="checkBtn"
                      :is-checked="productInfo.checked"
        />

        <div class="left">
            <img :src="productInfo.img" alt="">
        </div>
        <div class="right">
            <div class="title">{{productInfo.title}}</div>
            <div class="desc">{{productInfo.desc}}</div>
            <div class="priceInfo">
                <span class="price">¥{{productInfo.price}}</span>
                <span>x{{productInfo.count}}</span>
            </div>
        </div>

    </div>
</template>

<script>

  import CheckButton from "components/common/checkButton/CheckButton";
  export default {
    name: "CartProduct",
    components: {
      CheckButton
    },
    props:{
      productInfo:{
        type:Object,
        default(){
          return {}
        }
      }
    },
    methods:{
      clickCheck(){
        this.productInfo.checked = !this.productInfo.checked;
      }
    }
  }
</script>

<style scoped>
    .item {
        width: 100%;
        display: flex;
        height: 130px;
        padding: 10px;
        border-bottom: 1px solid #ccc;
    }

    .left {
        height: 110px;
        width: 90px;
        margin: 0 5px;
    }
    .left img{
        height: 110px;
        width: 90px;
        border-radius: 5px;
    }
    .right{
        font-size: 17px;
        color: #333;
        padding: 5px;
        position: relative;
        overflow: hidden;
    }
    .right .title,.right .desc {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    .right .desc {
        font-size: 14px;
        color: #666;
        margin-top: 15px;
    }
    .priceInfo{
        /*margin-top: 10px;*/
        position: absolute;
        bottom: 0;
        left: 10px;
        right: 10px;
        display: flex;
        justify-content: space-between;
    }

    .price {
        color: var(--color-high-text);
    }

</style>