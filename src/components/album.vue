<style lang="less" scoped>
    .album{
        position: fixed;
        top:0px;
        left:0px;
        width: 100%;
        height: 100%;
        background: #fff;
        z-index:999;
        header {
            height: 280px;
            .title{
                position: relative;
                color: #fff;
                height: 50px;
                text-align: center;
                line-height: 50px;
                span.icon-houtui1 {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 50px;
                    height: 50px;
                    text-align: center;
                    font-size: 26px;
                    line-height: 50px;
                }
            }
            .content {
                padding: 5% 3.4%;
                overflow: hidden;
                .albumImg {
                    width: 36%;
                    float: left;
                    img {
                        width: 100%;
                    }
                }
                .albumDetail {
                    width: 60%;
                    padding-left: 3%;
                    float: left;
                    color: #fff;
                    p.albumTitle {
                        height: 30px;
                        line-height: 30px;
                        margin: 3px 0;
                    }
                    p.singer {
                        height: 30px;
                        img {
                            width: 30px;
                            border-radius: 50%;
                            float: left;
                            margin-right: 10px;
                        }
                        span {
                            float: left;
                            line-height: 30px;
                        }
                    }
                }
            }
            .setting {
                overflow: hidden;
                margin-top: 10px;
                li {
                    float: left;
                    height: 50px;
                    line-height: 50px;
                    width: 25%;
                    text-align: center;
                    font-size: 36px;
                    color: #fff;
                    overflow: hidden;
                }
            }
        }
        .albumlist {
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
    <div class="album" v-if="player.isShowAlbum">
        <header :style="{background:`url(${player.album.albumbg}) 0 0/100% 100% no-repeat`}">
            <div class="title">
                <span class="iconfont icon-houtui1" @click="hideAlbum"></span>
                {{player.album.albumTitle}}
            </div>
            <div class="content">
                <div>
                    <div class="albumImg">
                        <img :src="player.album.albumImg" alt="" />
                    </div>
                    <div class="albumDetail">
                        <p class="albumTitle">专辑：{{player.album.albumTitle}}</p>
                        <p class="singer">
                            <img :src="player.album.albumImg" alt="" />
                            <span>歌手：{{player.album.albumSinger}}</span>
                        </p>
                    </div>
                </div>
            </div>
            <ul class="setting">
                <li class="iconfont icon-addfile"></li>
                <li class="iconfont icon-BAI-pinglun"></li>
                <li class="iconfont icon-fenxiang1"></li>
                <li class="iconfont icon-icon--"></li>
            </ul>
        </header>
        <div class="albumlist">
            <ul>
                <li
                    v-for="(item,index) in player.album.albumList"
                    @click="playAudio(player.album.albumList,index)"
                    :class="{cur:index == $store.state.audio.index && albumIndex == $store.state.audio.albumIndex}"
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
    export default {
        props:["player"],
        methods:{
            hideAlbum(){
                this.$store.commit("HIDEALBUM")
            },
            playAudio(itemList,index){

               this.$store.commit("SHOWPLAYER",{
                    // 显示播放器页面，
                    isShowAudio:true,
                    // 专辑的下标，第几张专辑 对应的值：0,1,2,3
                    albumIndex:this.albumIndex,
                    //播放的列表
                    album:itemList,
                    // 播放曲目的下标
                    index,
                    //播放器的背景图
                    playerImg:this.player.album.playerbg,
                    // cd的上显示图片
                    cdImg:this.player.album.albumbg,

               })
            }
        },
        computed:{
            albumIndex(){
               return this.$store.state.player.index;
            }
        }
    }
</script>