<template>
    <div ref="swiper" class="scroll">
        <div>
            <slot></slot>
        </div>
    </div>
</template>

<script>
    import BScroll from 'better-scroll'
  export default {
    name: "BetterScroll",
    data() {
      return {
        _scroll:null
      }
    },

    props: {
      pullUpLoad: {
        type: Boolean,
        default:false
      },
      probeType:{
        type:Number,
        default: 0
      }
    },

    mounted(){
      //元素挂载后调用
      //1.创建bscroll对象
      this._scroll = new BScroll(this.$refs.swiper,{
        //上拉加载更多的配置
        pullUpLoad:this.pullUpLoad,
        probeType: this.probeType,
        click: true
      });
      //2.监听上拉加载事件
      this._scroll.on('pullingUp',()=>{
        this.$emit('pullingUp')
      });
      //3.监听滚动事件
      this._scroll.on('scroll',(position)=>{
        this.$emit('scroll',position)
      })
    },

    methods:{
      finishPullUp(){
        this._scroll && this._scroll.finishPullUp && this._scroll.finishPullUp()
      },
      scrollTo(x,y,time){
        this._scroll && this._scroll.scrollTo && this._scroll.scrollTo(x,y,time)
      },
      getCurrentY(){
        return this._scroll.y ? this._scroll.y :0
      },
      refresh(){
        this._scroll && this._scroll.refresh && this._scroll.refresh()
      }
    }
  }
</script>

<style scoped>
    .scroll {
        overflow: hidden;
    }
</style>