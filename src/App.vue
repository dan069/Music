<style lang="less"scoped>
  #app{
      width: 100%;height: 100%;overflow: hidden;
  }
  header{
      position: fixed;
      top:0px;
      left:0px;
      width: 100%;
      z-index: 9;
      color: #fff;
      .icon-caidan,.icon-zhuanjiguangpan{
          width: 50px;
          height: 50px;
          line-height: 50px;
          font-size: 26px;
          position: absolute;
          top: 0;
          left: 0;
          text-align: center;
      }
      .header{
          height: 50px;
          line-height: 50px;
          background: #C20C0C;
          ul{
              overflow: hidden;
              width: 68%;
              margin: 0 auto;
              li{
                  font-size: 26px;
                  width: 33.333%;
                  float: left;
                  text-align: center;
              }
              li.cur{
                  background: #9B0909;
              }
          }
      }
      .icon-zhuanjiguangpan{
          right: 0;
          left: auto;
      }
  }

</style>
<template>
  <div id="app">
    <header>
        <span class="iconfont icon-caidan"></span>
        <div class="header">
            <ul>
              <li class="iconfont" v-for="item in tabNav" :class="[item.fontClass , {cur: $route.name == item.fontClass}]" @click="routerGo(item.url)"></li>
            </ul>

        </div>
        <span class="iconfont icon-zhuanjiguangpan"></span>

    </header>
    <transition name="aha">
      <div class="router-view">
        <router-view/>
      </div>
    </transition>
    <transition name="aha">
        <album :player="player"></album>
    </transition>
    <transition name="aha">
        <audioplayer :audio="audio" v-show="audio.isShowAudio"></audioplayer>
    </transition>
  </div>
</template>
<script>
 import album from "./components/album.vue";
 import audioplayer from "./components/audioplayer.vue";
  export default {
     data(){
        return {
          tabNav:[
            {
              fontClass:"icon-music",
              url:"/indexmusic"
            },
            {
              fontClass:"icon-wangyiyunyinlezizhi-copy",
              url:"/faxianmusic"
            },
            {
              fontClass:"icon-diantai",
              url:"/radiomusic"
            }
          ]
        }
     },
     methods:{
        routerGo(url){
          // 此处更改的是单页面的路由，直接可以操作浏览器的url地址
          this.$router.push({path:url})
        }
     },
     computed:{
        player(){
            return this.$store.state.player
        },
        audio(){
            return this.$store.state.audio
        }
     },
     components:{
        album,
        audioplayer
     }
  }
</script>