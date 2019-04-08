<template>
    <div class="tab-control">
        <div v-for="(item,index) in titles" class="item"
             :class ="{active:currentIndex === index}"
             @click="itemClick(index)"
        >
            <span>{{item}}</span>
        </div>
    </div>
</template>

<script>
  export default {
    name: "TabControl",
    data(){
      return {
        currentIndex:0
      }
    },
    props:{
      titles:{
        type:Array,
        default(){
          return []
        }
      }
    },
    methods:{
      itemClick(index) {
        this.currentIndex = index;
        this.$emit('tabclick', index)
      }
    }
  }
</script>

<style scoped>
    .tab-control{
        display: flex;
        height: 44px;
        line-height: 44px;
    }
    .item {
        flex: 1;
        text-align: center;
    }
    .item span {
        padding: 8px 8px;
    }
    .active{

    }
    .active span{
        color: var(--color-high-text);
        border-bottom: 2px solid var(--color-high-text);
    }
</style>