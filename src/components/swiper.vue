<!-- The ref attr used to find the swiper instance -->
<style lang='less' scoped>
  img{
    width: 100%;
    height: auto;
  }
</style>
<template>
  <swiper :options="swiperOption" ref="mySwiper">
    <!-- slides -->
    <swiper-slide v-for="(item,index) in swiperArr" :key="index">
      <a :href="item.imageUrl">
        <img :src="item.imageSrc" alt="" />
      </a>
    </swiper-slide>
    <!-- Optional controls -->
    <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>
</template>

<script>
  export default {
    props:["swiperArr"],
    data() {
      return {
        swiperOption: {
            pagination: {
                el: '.swiper-pagination'
            }
        }
      }
    }
  }
</script>