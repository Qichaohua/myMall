<template>
    <div>
        <nav-bar class="navbar"><div slot="center">商品分类</div></nav-bar>
        <div class="content">
            <left-tab :type-list="categoryTitles"
                      class="left"
                      @titleClick="clickTitle"
            />
            <better-scroll class="container" ref="scroll">
                <category-item :sub-titles="getCategorySubInfo"/>
                <tab-control :titles="['综合','新品','销量']"
                             @tabclick="tabClick"
                />
                <category-detail :detail-list="getCateDetails"/>
            </better-scroll>

        </div>
    </div>
</template>

<script>
    import NavBar from 'components/common/navBar/NavBar'
    import BetterScroll from 'components/common/betterScroll/BetterScroll'
    import TabControl from 'components/content/tabControl/TabControl'

    import LeftTab from './childComps/LeftTab'
    import CategoryItem from './childComps/CategoryItem'
    import CategoryDetail from "./childComps/CategoryDetail";

    import { getCategory, getSubcategory, getCategoryDetail } from "network/category";
    import {tabControlMixin} from 'common/mixin'
    import {POP, NEW, SELL} from "common/const";

    export default {
      name: "Category",
      components: {
        CategoryDetail,
        CategoryItem,
        NavBar,
        BetterScroll,
        LeftTab,
        TabControl
      },
      mixins:[tabControlMixin],
      data(){
        return{
          categoryTitles:[],
          categoryData:{},
          currentIndex:0,
        }
      },
      created() {
        //请求数据
        this._getCategory();

        //监听图片加载
        this.$bus.$on('imgLoad', () => {
          this.$refs.scroll.refresh()
        })
      },
      computed:{
        getCategorySubInfo(){
          if (this.currentIndex === -1) return {};
          return this.categoryData[this.currentIndex].categorySubInfo;
        },
        getCateDetails(){
          if (this.currentIndex === -1) return [];
          return this.categoryData[this.currentIndex].categoryDetail[this.currentType]
        }
      },
      methods:{
        _getCategory(){
          getCategory().then( res => {
            // console.log(res.data);
            this.categoryTitles = res.data.category.list;
            for (let i = 0; i < this.categoryTitles.length; i++) {
              this.categoryData[i] = {
                categorySubInfo:{},
                categoryDetail:{
                  'pop':[],
                  'new':[],
                  'sell':[]
                }
              }
            }
            this._getSubcategory(0);
          });

        },
        _getSubcategory(index){
          this.currentIndex = index;
          const mkey = this.categoryTitles[index].maitKey;
          getSubcategory(mkey).then(res=>{
            // console.log(res);
            this.categoryData[index].categorySubInfo = res.data;
            this.categoryData = {...this.categoryData};
            this._getCategoryDetail(POP);
            this._getCategoryDetail(SELL);
            this._getCategoryDetail(NEW);
          })
        },
        _getCategoryDetail(type){
            const miniKey = this.categoryTitles[this.currentIndex].miniWallkey;
            getCategoryDetail(miniKey,type).then(res=>{
              // console.log(res);
              this.categoryData[this.currentIndex].categoryDetail[type] = res;
              this.categoryData = {...this.categoryData};
            })
        },
        clickTitle(index){
          this._getSubcategory(index)
        }

      }

  }
</script>

<style scoped>
    .navbar {
        color: #fff;
        background-color: var(--color-tint);
    }
    .content {
        height: 100vh;
        padding-top: 44px;
        display: flex;
    }
    .left{
        width: 85px;
    }
    .container {
        height: calc(100% - 49px);
        width: 100%;
    }

</style>