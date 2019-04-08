<template>
    <div class="bottom">
        <div class="check" @click="selectAll">
            <check-button class="checkBtn" :class="{checked:isSelectAll}"/>
            <span>全选</span>
        </div>
        <div class="price">总价为：{{totalPrice}}</div>
        <div class="goToSum" @click="goSum">去结算({{selectLength}})</div>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex';
    import CheckButton from "components/common/checkButton/CheckButton";

  export default {
    name: "CartBottomBar",
    components: {CheckButton},
    data(){
      return{
        isSelect:false
      }
    },
    computed:{
      ...mapGetters (['cartList','cartLength']),
      totalPrice(){
        return this.cartList.filter(item => item.checked).reduce((preValue,item)=>{
          return preValue + item.price*item.count;
        },0).toFixed(2);
      },
      selectLength(){
        return this.cartList.filter( item => item.checked).length
      },
      isSelectAll(){
        //是否全选
        //1.购物车中无商品时，false
       if(this.cartLength === 0) return false;
       //2.遍历有未选中的商品时，false
        for (let item of this.cartList) {
          if(! item.checked) return false;
        }
        //3.否则返回 true
        return true;
      }
    },
    methods:{
      selectAll(){
        if (this.isSelectAll) {
          //已经全选的时候，点击取消所有项目的选中
          this.cartList.forEach(item => {
            item.checked = false;
          })
        }else {
          //否则，点击的时候全部都选中
          this.cartList.forEach(item => {
            item.checked = true;
          })
        }
      },
      goSum(){
        const selectNone = this.cartList.filter(item => item.checked).length === 0;
        if (selectNone) this.$toast.show('请选择要购买的商品')
      }
    }
  }
</script>

<style scoped>
    .bottom {
        height: 40px;
        line-height: 40px;
        display: flex;
        background-color: #eee;
        font-size: 14px;
    }
    .check {
        width: 100px;
        display: flex;
        justify-content: flex-start;
    }
    .checkBtn {
        width: 20px;
        margin: 0 5px;
    }
    .price {
        flex: 1;
    }
    .goToSum {
        width: 120px;
        text-align: center;
        background-color: #f00;
        color: #fff;
    }

    

    
</style>