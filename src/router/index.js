import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/indexmusic',
      name:"icon-music",
      component(){
        return System.import("../views/index.vue")
      }
    },
    {
      path: '/faxianmusic',
      name:"icon-wangyiyunyinlezizhi-copy",
      component(){
        return System.import("../views/faxianmusic.vue")
      }
    },
    {
      path: '/radiomusic',
      name:"icon-diantai",
      component(){
        return System.import("../views/radiomusic.vue")
      }
    },
    {
      path: '*',
      // 重定向
      redirect:"/indexmusic"
    }
  ]
})
