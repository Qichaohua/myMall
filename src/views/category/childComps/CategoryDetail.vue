<template>
    <goods-list :lists="detailList">
        <goods-item v-for="(item, index) in detailList" :key="index" :goods="item"></goods-item>
    </goods-list>
</template>

<script>
  import GoodsList from 'components/content/goodsList/GoodsList'
  import GoodsItem from 'components/content/goodsList/GoodsItem'
  export default {
    name: "CategoryDetail",
    components:{
      GoodsList,
      GoodsItem
    },
    props:{
      detailList:{
        type:Array,
        default(){
          return []
        }
      }
    }
  }
</script>

<style scoped>

</style>