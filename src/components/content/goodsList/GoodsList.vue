<template>
    <div class="goods-list" v-if="lists.length !==0">
        <goods-item v-for="(item, index) in lists"
                    :key="index"
                    :goods="item"
                    class="goods-item"
        ></goods-item>
    </div>
</template>

<script>
    import GoodsItem from 'components/content/goodsList/GoodsItem'
    import GoodsList from 'components/content/goodsList/GoodsList'

  export default {
    name: "GoodsList",
    components:{
      GoodsItem,
      GoodsList
    },
    props:{
      lists:{
        type:Array,
        default(){
          return []
        }
      }
    },
    methods:{

    }
  }
</script>

<style scoped>
    .goods-list {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
    }
    .goods-item{
        width: 47%;
    }

</style>