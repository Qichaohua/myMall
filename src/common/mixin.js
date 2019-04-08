
import {debounce} from "./utils";
import BackToTop from 'components/content/backToTop/BackToTop'
import {POSITION_SHOW_TOP,POP, NEW, SELL} from "common/const";


export const itemListenerMixin = {
  data() {
    return {
      itemImgListener: null,
      newRefresh:null
    }
  },
  mounted() {
    this.newRefresh = debounce(this.$refs.scroll.refresh, 100);
    this.itemImgListener = () => {
      this.newRefresh()
    };
    this.$bus.$on('itemImgLoad', this.itemImgListener)
    // console.log('我是混入中的内容');
  }
}



export const backTopMixin = {
  components:{
    BackToTop
  },
  data(){
    return {
      isShowTop:false
    }
  },
  methods: {
    clickToTop(){
      //点击了之后，返回顶部
      this.$refs.scroll.scrollTo(0,0,500)
    },
    listenShowBack(position){
      //判断是否显示返回顶部
      this.isShowTop = -position.y > POSITION_SHOW_TOP;
    }
  }
};

export const tabControlMixin = {
  data: function () {
    return {
      currentType: POP
    }
  },
  methods: {
    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = POP
          break
        case 1:
          this.currentType = NEW
          break
        case 2:
          this.currentType = SELL
          break
      }
      console.log(this.currentType);
    }
  }
}
