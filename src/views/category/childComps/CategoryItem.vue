<template>
    <div class="list" v-if="Object.keys(subTitles)!==0">
        <div v-for="(item,index) in subTitles.list" class='item'>
            <a :href="item.link">
                <img :src="item.image" alt="" @load="cateImgLoad">
                <p class="title">{{item.title}}</p>
            </a>
        </div>
    </div>
</template>

<script>
    import BetterScroll from 'components/common/betterScroll/BetterScroll'

    import TabControl from 'components/content/tabControl/TabControl'
    import CategoryDetail from './CategoryDetail'

    import {itemListenerMixin} from 'common/mixin'
  export default {
    name: "CategoryItem",
    components:{
      BetterScroll,
      TabControl,
      CategoryDetail
    },
    mixins:[itemListenerMixin],
    props:{
      subTitles:{
        type:Object,
        default(){
          return {}
        }
      }
    },
    methods:{
      cateImgLoad(){
        this.$emit('imgLoad')
      }
    }
  }
</script>

<style scoped>
    .container {
        height: calc(100% - 49px);
        /*height: calc(100% - 49px);*/
        /*padding-top: 44px;*/
        width: 100%;
    }
    .list{
        display: flex;
        /*justify-content: space-around;*/
        /*align-items: flex-start;*/
        flex-wrap: wrap;
    }
    .item {
        width: 33%;
        padding: 5px;
        text-align: center;
    }
    .item img{
        width: 80%;
        height: 80%;
    }
    .item .title {
        font-size: 13px;
    }

</style>