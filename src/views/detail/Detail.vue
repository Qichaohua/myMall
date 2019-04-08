<template>
    <div class="detail">
        <detail-nav-bar @itemClick="titleClick" ref="nav"/>
        <better-scroll class="scroll"
                       ref="scroll"
                       :probe-type="3"
                       @scroll="contentScroll">
            <detail-swiper :top-images="topImg"/>
            <detail-titles :goods="goodsInfo"/>
            <detail-shop-info :shop="shopInfo"/>
            <detail-img-info :detail-info="detailInfo"
                             @detailImgLoad="detailImgLoad"/>
            <detail-param-info :param-info="paramsInfo"
                               ref="param"
            />
            <detail-comments :comment-info="commentInfo"
                             ref="comment"
            />
            <goods-list :lists="recommend"
                        ref="recommend"
            />
        </better-scroll>
        <detail-bottom-bar @addCart="addToCart"/>
        <back-to-top @click.native="clickToTop" v-show="isShowTop"/>
    </div>
</template>

<script>
    import DetailNavBar from './childComps/DetailNavBar'
    import DetailSwiper from './childComps/DetailSwiper'
    import DetailTitles from './childComps/DetailTitles'
    import DetailShopInfo from './childComps/DetailShopInfo'
    import DetailImgInfo from './childComps/DetailImgInfo'
    import DetailParamInfo from './childComps/DetailParamInfo'
    import DetailComments from './childComps/DetailComments'
    import DetailBottomBar from "./childComps/DetailBottomBar";

    import  BetterScroll from 'components/common/betterScroll/BetterScroll'
    import GoodsList from 'components/content/goodsList/GoodsList'

    import {getDetail, Goods, getRecommend} from "network/detail";
    import {itemListenerMixin,backTopMixin} from 'common/mixin'
    import {debounce} from "common/utils";
    import { mapActions } from 'vuex'


  export default {
    name: "Detail",
    components:{
      DetailBottomBar,
      DetailSwiper,
      DetailNavBar,
      DetailTitles,
      DetailShopInfo,
      DetailImgInfo,
      DetailParamInfo,
      DetailComments,
      BetterScroll,
      GoodsList,
    },
    mixins:[itemListenerMixin, backTopMixin],
      data() {
        return {
          iid: null,
          topImg: [],
          goodsInfo: {},
          shopInfo: {},
          detailInfo: {},
          paramsInfo: {},
          commentInfo: {},
          recommend: [],
          themeTopY: [],
          getThemeTopY: null,
          currentIndex: 0
        }
      },
      methods: {
        //内容滚动事件
        contentScroll(position) {
          //1.是否显示回到顶部按钮
          this.listenShowBack(position);

          //2.获取滚动的Y值
          const topY = -position.y;
          //3.将y值与组件中的offsetTop(设置好高度数组)做比较
          let Length = this.themeTopY.length;
          for (let i = 0; i < Length - 1; i++) {
            if (this.currentIndex !== i && (topY >= this.themeTopY[i] && topY < this.themeTopY[i + 1])) {
              this.currentIndex = i;
              //设置currentIndex为当前区间的index
              this.$refs.nav.currentIndex = this.currentIndex;
              // console.log(this.currentIndex);
            }
          }
        },
        titleClick(index) {
          this.$refs.scroll.scrollTo(0, -this.themeTopY[index], 300)
        },
        detailImgLoad() {
          //监听图片加载完成，刷新页面
          this.newRefresh();

          //调用设置高度数组的函数
          this.getThemeTopY()
        },
        ...mapActions(['addCart']),
        addToCart(){
          //01.获取添加的商品的信息
          const product = {};
          product.iid = this.iid;
          product.title = this.goodsInfo.title;
          product.img = this.topImg[0];
          product.price = this.goodsInfo.lowPrice;
          product.desc = this.goodsInfo.desc;

          //02.派发添加购物车事件
          // this.$store.dispatch('addCart', product).then(res =>{
          //   //03.显示toast 提示
          //   this.$toast.show(res)
          // })
          this.addCart(product).then(res=>{
            this.$toast.show(res)
          })
        }
      },
      created() {
        //1.设置IID
        this.iid = this.$route.query.iid;

        //2.发送网络请求
        getDetail(this.iid).then(res => {

          const data = res.result;
          // console.log(data);

          //01.设置顶部图片
          this.topImg = data.itemInfo.topImages;

          //02.获取商品信息
          this.goodsInfo = new Goods(data.itemInfo, data.columns, data.shopInfo.services)

          //03.获取店铺信息
          this.shopInfo = data.shopInfo;

          //04.获取详情图片信息
          this.detailInfo = data.detailInfo;

          //05.获取参数信息
          this.paramsInfo = data.itemParams;

          //06.获取评论数据 先判断是否有评论，再取值
          this.commentInfo = data.rate.list && data.rate.list[0];

          //07.获取推荐数据
          getRecommend().then(res => {
            this.recommend = res.data.list
          });

        })
      },
      mounted() {
        //设置组件距离顶部的高度数组
        this.getThemeTopY = debounce(() => {
          this.themeTopY = [];
          this.themeTopY.push(0);
          this.themeTopY.push(this.$refs.param.$el.offsetTop);
          this.themeTopY.push(this.$refs.comment.$el.offsetTop);
          this.themeTopY.push(this.$refs.recommend.$el.offsetTop);
          this.themeTopY.push(Number.MAX_VALUE);
          // console.log(this.themeTopY);
        }, 100)
      },
      destroyed() {
        //取消全局事件监听
        this.$bus.$off('itemImgLoad', this.itemImgListener)
      }
  }
</script>

<style scoped>
    .detail {
        height: 100vh;
        background-color: #fff;
        position: relative;
        z-index: 1;
        padding-top: 44px;
    }
    .scroll {
        height: calc(100% - 44px);
        background-color: #fff;
        /*height: 100%;*/
    }

</style>