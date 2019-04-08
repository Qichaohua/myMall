<template>
    <div class="list">
        <better-scroll class="scroll">
            <div v-for="(item,index) in cartList">
                <cart-product :product-info="item" :key="index"/>
            </div>
        </better-scroll>

    </div>
</template>

<script>
    import { mapGetters } from 'vuex'
    import CartProduct from "./CartProduct";
    import BetterScroll from "components/common/betterScroll/BetterScroll";

  export default {
    name: "CartList",
    components: {
      BetterScroll,
      CartProduct
    },
    computed:{
      ...mapGetters(['cartList'])
    }
  }
</script>

<style scoped>
    .list {
        /*position: relative;*/
        width: 100%;
        height: calc(100% - 44px - 49px);
        padding: 44px 0 0;
    }
    .scroll {
        height: 100%;
        overflow: hidden;
    }

</style>