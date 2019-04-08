<template>
    <better-scroll v-if="typeList.length !==0"
                   class="scroll"
    >
        <ul>
            <li v-for="(item,index) in typeList"
                :class="{active:currentIndex === index}"
                @click="titleClick(index)"
            >{{item.title}}</li>
        </ul>
    </better-scroll>
</template>

<script>
  import BetterScroll from 'components/common/betterScroll/BetterScroll'
  export default {
    name: "LeftTab",
    components:{
      BetterScroll
    },
    data(){
      return {
        currentIndex:0
      }
    },
    props:{
      typeList:{
        type:Array,
        default(){
          return []
        }
      }
    },
    methods:{
      titleClick(index){
        this.currentIndex = index;
        this.$emit('titleClick',index)
      }
    }
  }
</script>

<style scoped>
    .scroll {
        height: calc(100% - 49px);
    }
    ul{
        background-color: #eee;
    }
    li{
        line-height: 40px;
        height: 40px;
        text-align: center;
        font-size: 14px;
    }
    li.active{
        background-color: #fff;
        border-left: 3px solid var(--color-tint);
        color: var(--color-high-text);
        font-weight: 700;
    }

</style>