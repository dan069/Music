import Vue from 'vue'
import Vuex from "vuex";
import App from './App';
import VueAwesomeSwiper from 'vue-awesome-swiper';
import 'swiper/dist/css/swiper.css';
Vue.use(Vuex);
// 轮播图
Vue.use(VueAwesomeSwiper)
// axios 功能异步
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios);
import router from './router';

Vue.config.productionTip = false;

const store = new Vuex.Store({

    state:{
      // 所有的歌曲信息
      mapList:{},
      // 它决定推荐专辑的信息
      player:{
        // 未来控制显示 推荐列表的页面
        isShowAlbum:false,
        // 列表信息
        album:[],
        // 第几个专辑
        index:null
      },
      // 播放器的参数通过audio来设置
      audio:{
        isShowAudio:false,
        // 专辑的下标
        albumIndex:null,
        // 专辑类表
        album:[],
        // 第几首歌
        index:null,
        // 播放器的背景图
        playerImg:null,
        // cd的图片
        cdImg:null
      }

    },
    mutations:{
      GETALL(state,payload){
        state.mapList = payload.mapList;
      },
      SHOWALBUMLIST(state,payload){
        // 控制显示
        state.player.isShowAlbum = payload.isShowAlbum;
        // 专辑页面传入的信息
        state.player.album = payload.album;
        // 专辑的索引值
        state.player.index = payload.index;
      },
      HIDEALBUM(state){
        // 控制隐藏
        state.player.isShowAlbum = false;
      },
      SHOWPLAYER(state,payload){
          // 显示播放器页面，
          this.state.audio.isShowAudio=payload.isShowAudio;
          // 专辑的下标，第几张专辑 对应的值：0,1,2,3
          this.state.audio.albumIndex=payload.albumIndex;
          //播放的列表
          this.state.audio.album=payload.album;
          // 播放曲目的下标
          this.state.audio.index=payload.index;
          //播放器的背景图
          this.state.audio.playerImg=payload.playerImg;
          // cd的上显示图片
          this.state.audio.cdImg=payload.cdImg;
      },
      HIDEAUDIO(state){
        // 显示播放器页面，
        this.state.audio.isShowAudio= false;
      },
      CHANGEMUISC(state,payload){

          this.state.audio.index = payload.index;
          this.state.audio.playerImg = payload.playerImg;
          this.state.audio.cdImg = payload.cdImg;
      }
    },
    actions:{
      GETALL({commit}){

          Vue.axios.get("../static/data.json").then(res=>{

              commit("GETALL",res.data)
          })
      }
    }
});
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
