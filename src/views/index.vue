<style scoped lang='less'>
.indexmusic {
    overflow-y: scroll;
    h3 {
        font-weight: normal;
        font-size: 18px;
        height: 40px;
        line-height: 40px;
    }
    h3:before {
        content: '|';
        color: #C20C0C;
        background: #C20C0C;
        font-size: 15px;
        margin: 0 6px;
    }
    .album {
        ul {
            overflow: hidden;
            li {
                float: left;
                width: 33.333%;
                text-align: center;
                img {
                    width: 99%;
                    display: block;
                    padding: 1%
                }
            }
        }
    }
    .recommend {
        ul {
            li {
                overflow: hidden;
                padding-top: 5px;
                .index {
                    width: 50px;
                    height: 50px;
                    line-height: 50px;
                    text-align: center;
                    float: left;
                }
                div {
                    float: left;
                    p {
                        height: 25px;
                        line-height: 25px;
                    }
                    p:nth-child(1) {
                        font-size: 16px;
                        color: #4b4c4d;
                    }
                    p:nth-child(2) {
                        font-size: 14px;
                        color: #888;
                    }
                }
                .icon-laba {
                    height: 50px;
                    width: 50px;
                    line-height: 50px;
                    text-align: center;
                    float: right;
                    font-size: 26px;
                }
            }
            li.cur {
                color: #c20c0c;
                div {
                    p {
                        color: #c20c0c;
                    }
                }
            }
        }
    }
}

</style>
<template>
    <div class="indexmusic">
        <vueSwiperX :swiperArr="swiperArr"></vueSwiperX>
        <div class="album">
            <h3>推荐专辑</h3>
            <ul>
                <!-- 播放专辑歌曲决定的因素：谁的专辑、专辑中所有的歌曲列表、专辑的第几首歌 -->
                <li v-for="(item,index) in album" @click="showAlbum(item,index)">
                    <img :src="item.albumImg" />
                    <p>{{item.albumTitle}}</p>
                </li>
            </ul>
        </div>
        <div class="recommend">
            <h3>热歌列表</h3>
            <ul>
                <li v-for="(item,index) in recommend"
                    @click="playRecommend(recommend,index)"
                    :class="{cur:index == $store.state.audio.index &&  $store.state.audio.albumIndex == null}"
                >
                    <span class="index">{{index+1}}</span>
                    <div>
                        <p>{{item.musicName}}</p>
                        <p>{{item.musicSinger}}</p>
                    </div>
                    <span class="iconfont icon-laba"></span>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
    import vueSwiperX from "../components/swiper.vue"
    export default{
        data(){
            return {
                // 轮播图的数组
                swiperArr:[
                    {
                        imageSrc:"http://p1.music.126.net/Vr0onBxIp9Ixd-kl0dlSDg==/109951163427397147.jpg",
                        imageUrl:"http://music.163.com/m/at/direnjie"
                    },
                    {
                        imageSrc:"http://p1.music.126.net/0Eo5p_eNWtY3wFFM1dIpsw==/109951163427147420.jpg",
                        imageUrl:"https://music.163.com/song?id=1296410418"
                    },
                    {
                        imageSrc:"http://p1.music.126.net/ktdhSmVeDewWaO00CAswLw==/109951163427600530.jpg",
                        imageUrl:"https://music.163.com/song?id=1294899541"
                    },
                    {
                        imageSrc:"http://p1.music.126.net/sjL6mrtjoVioG0V1G_RP8w==/109951163427151169.jpg",
                        imageUrl:"https://music.163.com/song?id=1294924388"
                    }
                ]
            }
        },
        created(){
            this.$store.dispatch("GETALL")
        },
        components:{
            vueSwiperX
        },
        computed:{
            album(){
                // 得到专辑的列表
                return this.$store.state.mapList.album;
            },
            recommend(){
                // 得到推荐的列表
                return this.$store.state.mapList.recommend;
            }
        },
        methods:{
            showAlbum(item,index){
                this.$store.commit("SHOWALBUMLIST",{
                    // 未来控制显示 推荐列表的页面
                    isShowAlbum:true,
                    // 列表信息
                    album:item,
                    // 第几个专辑
                    index
                })
            },
            playRecommend(recommend,index){
                this.$store.commit("SHOWPLAYER",{
                    isShowAudio:true,
                    // 将推荐的专辑的下标设置为null，表示此歌曲不是出自专辑。
                    albumIndex:null,
                    album:recommend,
                    index,
                    // 播放器的背景图
                    playerImg:recommend[index].playerbg,
                    // cd上显示的图片
                    cdImg:recommend[index].singerImg

                })
            }
        }
    }
</script>

