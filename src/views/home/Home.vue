<template>
   <div class="home">
       <nav-bar class="nav">
           <div slot="center">购物街</div>
       </nav-bar>
       <tab-control ref="topTab"
                    v-show="isShowControl"
                    class="top-tab-control"
                    :titles="['流行','新款','精选']"
                    @tabclick="tabClick"/>

       <better-scroll ref="scroll"
                      class="home-content"
                      @pullingUp="loadMore"
                      :pull-up-load="true"
                      :probe-type="3"
                      @scroll="contentScroll"
       >
           <home-swiper :banners="banners" @imgLoad="swiperImgLoad"/>
           <home-recommend :recommends="recommends"/>
           <home-feature/>
           <tab-control ref="tabControl"
                        class="tab-control"
                        :titles="['流行','新款','精选']"
                        @tabclick="tabClick"/>
           <goods-list :lists="showGoods"/>
       </better-scroll>

       <back-to-top @click.native="clickToTop" v-show="isShowTop"/>


   </div>
</template>

<script>
  import NavBar from 'components/common/navBar/NavBar'
  import TabControl from 'components/content/tabControl/TabControl'
  import GoodsList from 'components/content/goodsList/GoodsList'
  import BetterScroll from 'components/common/betterScroll/BetterScroll'



  import HomeSwiper from './childComps/HomeSwiper'
  import HomeRecommend from './childComps/HomeRecommend'
  import HomeFeature from './childComps/HomeFeature'


  import{getData,getMultiData} from 'network/home'
  import {POSITION_SHOW_TOP} from "common/const";
  import {itemListenerMixin, backTopMixin} from 'common/mixin'

  export default {
    name: "Home",
    components:{
      NavBar,
      TabControl,
      GoodsList,
      BetterScroll,

      HomeSwiper,
      HomeRecommend,
      HomeFeature,
    },
    mixins:[itemListenerMixin, backTopMixin],
    data(){
      return {
        banners:[],
        recommends:[],
        goods: {
          'pop': { page: 0, list: [] },
          'new': { page: 0, list: [] },
          'sell': { page: 0, list: [] },
        },
        currentType:'pop',
        showGoods:[],
        isShowControl:false,
        tabOffsetTop:0,
        leaveY:0
      }
    },
    created(){
      //1.获取顶部多个数据
      getMultiData().then(res => {
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      });
      //2.获取产品数据
      this._getProduct('pop');
      this._getProduct('sell');
      this._getProduct('new');

      //3.手动调用第一次点击
      this.tabClick(0);
    },
    activated(){
     //进入时设置位置
      this.$refs.scroll.scrollTo(0,this.leaveY,5);
      //刷新界面
      this.$refs.scroll.refresh()

    },
    deactivated(){
      //离开时保存位置
      this.leaveY = this.$refs.scroll.getCurrentY();

      //取消图片全局监听事件
      this.$bus.$off('itemImgLoad',this.itemImgListener)

    },
    methods:{
      tabClick(index){
        //获取对象的key数组
        let keys = Object.keys(this.goods);
        //通过key切换来更改type
        this.currentType = keys[index];
        this.showGoods = this.goods[this.currentType].list;

        //同步index
        // this.$refs.tabControl.currentIndex = index;
        // this.$refs.topTabControl.currentIndex = index;

        if(this.$refs.topTab){
          this.$refs.topTab.currentIndex = index;
          this.$refs.tabControl.currentIndex = index;
        }
      },
      _getProduct(type){
        //获取当前页码
        const page = this.goods[this.currentType].page +1;
        //获取对应页码的数据
        getData(type,page).then(res=>{
          //获取的数据更新到goods中,list更新，page更新
          //...语法：数组解析式
          this.goods[type].list.push(...res.data.list);
          this.goods[type].page +=1;
          //告知scroll加载已完成
          this.$refs.scroll.finishPullUp();
        })
      },
      loadMore(){
        //上拉加载数据
        this._getProduct(this.currentType);
      },
      contentScroll(position){
        //内容滚动监听
        //是否显示返回顶部按钮
        this.listenShowBack(position);
        //是否让tabcontrol固定显示
        this.isShowControl =  -position.y > this.tabOffsetTop
      },

      //轮播图图片的加载，获取tabcontrol的距离
      swiperImgLoad(){
        //赋值给tabOffsetTop
        this.tabOffsetTop = this.$refs.tabControl.$el.offsetTop;
        // console.log(this.tabOffsetTop);
      }
    }
  }
</script>

<style scoped>
    .home {
        height: 100vh;
        /*方式一*/
        padding: 44px 0 49px;
        /*方式二*/
        /*position: relative;*/
    }
    .nav {
        background-color: var(--color-tint);
        color: #fff;
    }
    .home-content {
        height: 100%;
        overflow: hidden;
        /*方式二*/
        /*position: absolute;*/
        /*top: 44px;*/
        /*bottom: 49px;*/
        /*left: 0;*/
        /*right: 0;*/
    }
    .top-tab-control {
        width: 100%;
        background-color: #fff;
        position: fixed;
        top: 43px;
        z-index: 9;
    }

</style>