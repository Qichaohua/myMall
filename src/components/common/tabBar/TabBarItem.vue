<template>
    <div class="tab-bar-item" @click="itemClick">
        <div v-if="!isActive"><slot name="icon"></slot></div>
        <div v-else><slot name="icon-active"></slot></div>
        <div class="title" :style="activeStyle"><slot name="title"></slot></div>
    </div>
</template>

<script>
    export default {
        name: "TabBarItem",
        props:{
            path:{
                type:String,
                default:''
            },
            activeColor:{
                type:String,
                default: '#000'
            }
        },
        computed:{
            isActive(){
                return this.$route.path.indexOf(this.path) !== -1
            },
            activeStyle(){
                return this.isActive?{color:this.activeColor}:{color:'#000'}
            }
        },
        methods:{
            itemClick(){
                this.$router.push(this.path)
            }
        }
    }
</script>


<style scoped>
    .tab-bar-item {
        flex: 1;
        text-align: center;
        font-size: 12px;
        font-weight: 700;
    }
    img {
        width: 24px;
        height: 24px;
        margin-top: 5px;
        vertical-align: middle;
    }
</style>