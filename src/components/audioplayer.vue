<style lang="less" scoped>
    .audioplayer{
        position: fixed;
        top:0px;
        left:0px;
        width: 100%;
        height: 100%;
        background: #fff;
        z-index:999;
        header {
            width: 100%;
            height: 50px;
            position: relative;
            text-align: center;
            line-height: 50px;
            color: #fff;
            span {
                position: absolute;
                top: 0;
                left: 0;
                width: 50px;
                height: 50px;
                text-align: center;
                line-height: 50px;
                font-size: 26px;
            }
        }
        .content {
            padding: 60px 0;
            position: relative;
            overflow: hidden;
            .cd {
                width: 80%;
                margin: 0 auto;
                position: relative;
                img {
                    width: 100%;
                }
                .singerbg {
                    border-radius: 999px;
                    overflow: hidden;
                    width: 60%;
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    animation:donghua 1s linear infinite paused;
                    img {
                        display: block;
                    }
                }
                .singerbg.cur {
                    animation-play-state: running;
                }
                @keyframes donghua {
                    from {
                        transform: translate(-50%, -50%) rotate(0deg);
                    }
                    to {
                        transform: translate(-50%, -50%) rotate(360deg);
                    }
                }
            }
            .switch {
                width: 110px;
                height: 165px;
                position: absolute;
                top: -21px;
                left: 59%;
                transform: translateX(-50%) rotate(-23deg);
                // transform-origin 是控制旋转中心的
                transform-origin: 15px 15px;
                transition: all 1s ease 0s;
                img {
                    width: 100%;
                    display: block;
                }
            }
            .switch.cur {
                transform: translateX(-50%) rotate(0deg);
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
        .progressBar {
            overflow: hidden;
            padding: 12px 3.2%;
            font-size: 14px;
            color: rgba(255, 255, 255, 0.6);
            p {
                float: left;
            }
            p.start {
                width: 11%;
                height: 40px;
                line-height: 40px;
                text-align: right;
            }
            p.range {
                width: 78%;
                padding: 0 3%;
                box-sizing: border-box;
                margin: 19px auto;
                span.duration {
                    width: 100%;
                    height: 2px;
                    background: rgba(255, 255, 255, 0.4);
                    display: block;
                    position: relative;
                    span.currentTime {
                        width: 10%;
                        height: 2px;
                        background: #c20c0c;
                        display: block;
                        position: absolute;
                        top: 0;
                        left: 0;
                    }
                }
            }
            p.end {
                width: 11%;
                height: 40px;
                line-height: 40px;
                text-align: left;
            }
        }
        .controller {
            position: relative;
            top: 10px;
            text-align: center;
            line-height: 50px;
            height: 50px;
            color: rgba(255, 255, 255, 0.5);
            p {
                position: absolute;
                top: 0;
            }
            p.playmodebtn {
                color: #fff;
                font-size: 30px;
                left: 3.2%;
            }
            p.playlistbtn {
                font-size: 38px;
                right: 3.2%;
            }
            ul {
                overflow: hidden;
                width: 68%;
                margin: 0 auto;
                li {
                    width: 33.33%;
                    float: left;
                    font-size: 40px;
                }
                li.icon-bofang,
                li.icon-pause-20 {
                    font-size: 52px;
                }
            }
        }

        // 遮罩层，列表的弹出层
        .playlist.cur {
            bottom: 0px;
            z-index: 9999;
        }
        .popwindow {
            z-index: -1;
            opacity: 0;
            width: 100%;
            height: 100%;
            position: fixed;
            top: 0;
            left: 0;
            background: rgba(0, 0, 0, 0.6);
        }
        .popwindow.cur {
            opacity: 1;
            transition: all 0.8s ease 0s;
            z-index: 999;
        }
        .playlist {
            position: absolute;
            width: 100%;
            height: 300px;
            background: #fff;
            bottom: -300px;
            transition: all 0.8s ease 0s;
            ul {
                overflow-y: scroll;
                height: 250px;
                li {
                    overflow: hidden;
                    text-align: center;
                    font-size: 20px;
                    clear:both;
                    width: 100%;
                    span.laba {
                        width: 50px;
                        text-align: center;
                        font-size: 28px;
                    }
                    span {
                        float: left;
                        line-height: 50px;
                        height: 50px;
                    }
                }
                li.cur {
                    color: #c20c0c;
                }
            }
            footer {
                position: absolute;
                bottom: 0px;
                height: 50px;
                width: 100%;
                text-align: center;
                span {
                    display: block;
                    height: 50px;
                    line-height: 50px;
                    font-size: 28px;
                    color:#ccc;
                }
            }
        }
        // 歌词的样式
        .lyric {
        z-index: 3;
        overflow: hidden;
        height: 440px;
        ul {
            position: relative;
            transition: all 0.3s ease 0s;
            li {
                text-align: center;
                height: 26px;
                line-height: 26px;
                span.animationLyric_origin {
                    position: relative;
                    color: #fff;
                    height: 26px;
                    line-height: 26px;
                    display: inline-block;
                    span.animationLyric_current {
                        position: absolute;
                        display: inline-block;
                        overflow: hidden;
                        top: 0;
                        left: 0;
                        white-space: nowrap;
                        height: 26px;
                        line-height: 26px;
                        width: 0%;
                        animation-play-state: paused;
                    }
                }
            }
            li.cur {
                span.animationLyric_current{
                    animation-name: lyricdonghua;
                    animation-timing-function: linear;
                    color: red;
                    @keyframes lyricdonghua {
                        from {
                            width: 0%;
                        }
                        to {
                            width: 100%;
                        }
                    }
                }
            }
        }
    }
    }


</style>
<template>
    <div class="audioplayer" :style="{background:`url(${audio.playerImg}) 0 0/100% 100% no-repeat`}">
        <header>
            <span class="iconfont icon-houtui1" @click="hideAudio"></span>
            <!-- 需要通过 audio.index 来判断是否有歌曲的名字-->
            {{typeof audio.index == 'number' ? audio.album[audio.index].musicName : '播放器' }}
        </header>
        <div class="popwindow"  :class="{'cur': isShowPlayList}"></div>
        <div class="content" v-if="!showLyric" @click="showLyricHandle">
            <div class="cd">
                <img src="../../static/img/cd.png" />
                <div class="singerbg">
                    <img :src="audio.cdImg"/>
                </div>
            </div>
            <div class="switch">
                <img src="../../static/img/swith.png">
            </div>
        </div>
        <div class="lyric" v-if="showLyric" @click="hideLyricHandle">
            <ul>
                <!-- 当前播放的时间 >= 当前歌词的时间 加类-->
                <!--  当前播放的时间 + 本句歌词的持续时间 （下一行 减去 本行的时间就是唱了 多少秒， 但是下一行 不能超过 歌词的总行数
                【 (index + 1 > lyric.length-1 ? lyric.length-1  : index + 1)】）-->

          <!--       {
                    "cur":
                    currentTime > lyric[index][0]

                    &&

                    currentTime +  ( lyric[index][0] - lyric[index+1 > lyric.length - 1 ? lyric.length - 1 : index+1][0])

                    <

                    lyric[index][0]
                }
 -->
                <li v-for="(item,index) in lyric" :class="{'cur':
                    currentTime > lyric[index][0]&&currentTime +  ( lyric[index][0] - lyric[index+1 > lyric.length - 1 ? lyric.length - 1 : index+1][0])<lyric[index][0]}">
                    <span class="animationLyric_origin">
                      {{item[1]}}
                        <span class="animationLyric_current" :style="[{'animation-duration':parseFloat(lyric[index+1 > lyric.length - 1 ? lyric.length - 1 : index+1][0]) - parseFloat(lyric[index][0]) + 's'},{'animation-play-state':isPlay? 'running' : 'paused'}]" >   {{item[1]}}
                        </span>
                    </span>
                </li>
            </ul>
        </div>
        <span v-if="typeof audio.index == 'number'">
            <audio :src="audio.album[audio.index].musicUrl" autoplay @timeupdate="play"></audio>
        </span>
        <ul class="setting">
            <li class="iconfont icon-addfile"></li>
            <li class="iconfont icon-BAI-pinglun"></li>
            <li class="iconfont icon-fenxiang1"></li>
            <li class="iconfont icon-icon--"></li>
        </ul>
        <div class="progressBar">
            <p class="start">{{currentTime|zhuanhuan}}</p>
            <p class="range">
                <span class="duration" @click="gotoTime($event)">
                    <span class="currentTime" :style="{width:currentTime/duraion*100+'%'}"></span>
                </span>
            </p>
            <p class="end">{{duraion|zhuanhuan}}</p>
        </div>
        <div class="controller">
            <p class="playmodebtn iconfont" :class="[{'icon-xunhuan':playState == 'all'},{'icon-bofangye-caozuolan-suijibofang':playState == 'random'},{'icon-singlecycle':playState == 'once'}]" @click="changeplayState"></p>
            <ul>
                <li class="iconfont icon-previous" @click="goprev"></li>
                <li class="iconfont" @click="pauseOrplay" :class="[isPlay == true ?  'icon-pause-20' : 'icon-bofang']"></li>
                <li class="iconfont icon-next" @click="gonext"></li>
            </ul>
            <p class="iconfont icon-zhankaicaidan playlistbtn" @click="showList"></p>
        </div>
        <div class="playlist" :class="{cur: isShowPlayList}" >
            <ul>
                <li v-for="(item,index) in audio.album" :class="{cur: index == audio.index}" @click="playList(index)">
                    <span class="iconfont laba" :class="{'icon-laba': index == audio.index}" :style = "{fontSize:index != audio.index ? '14px' : '28px'}" >{{index != audio.index ? index + 1 : ''}}</span>
                    <span>{{item.musicName}}</span>
                </li>
            </ul>
            <footer>
                <span class="iconfont icon-guanbi" @click="showList"></span>
            </footer>
        </div>
    </div>
</template>
<script>
    import $ from "jquery";
    import jQueryui from "jqueryui";
    export default{
        props:["audio"],
        data(){
            return {
                lyric:[],
                showLyric:false,
                // 总时长
                duraion:0,
                // 当前的播放时间
                currentTime:0,
                // 播放状态
                isPlay:true,
                // 播放的模式
                playState:"all" ,// random 、 once
                // 显示歌曲列表的抽屉
                isShowPlayList:false
            }
        },
        filters:{
            zhuanhuan(s){
                var t;
                if(s > -1){

                    var min = Math.floor(s/60) % 60;
                    var sec = s % 60;

                    if(min < 10){t += "0";}
                    t = min + ":";
                    if(sec < 10){t += "0";}
                    t += sec.toFixed(2);
                }
                return t;
            }
        },
        computed:{
            // 此方法已经被watch监听了。
            playerIndex(){
                return this.audio.index;
            }
        },
        watch:{
            // 当computed 中的playerIndex函数返回值改变的时候，对应的函数执行。
            playerIndex:function(){
                this.isPlay = true;
                var self = this;
                this.$http.get(this.audio.album[this.playerIndex].musicLyric).then(res=>{
                    self.lyric = self.changeLyric(res.data);
                });
            },
            '$store.state,audio.albumIndex'(){
                var self = this;
                this.$http.get(this.audio.album[this.playerIndex].musicLyric).then(res=>{
                    self.lyric = self.changeLyric(res.data);
                });
            }
        },
        mounted(){
           $(".currentTime").draggable();
        },
        methods:{
            showLyricHandle(){
                this.showLyric = true;
                var self = this;
                this.$http.get(this.audio.album[this.playerIndex].musicLyric).then(res=>{
                    self.lyric = self.changeLyric(res.data);
                });
            },
            changeLyric(lrc){
                var arr = [];
                //把lrc格式的歌词换成一行显示
                var lines = lrc.split(/\n/);

                // 得到时间
                var getlrcTime = /\[\d{2}:\d{2}.\d{2}\]/g;
                // 得到有时间的歌词
                while( !getlrcTime.test(lines[0])){
                    lines = lines.splice(1)
                }
                // 去掉最后的空行
                if( lines[lines.length - 1].length == 0){
                    lines.pop();
                }
                // 将遍历歌词时间数组和歌词的分界点
                lines.forEach(item=>{
                    var index = item.indexOf("]");
                    // 得到时间
                    var time = item.substr(1,index-1);
                    // 把02:53.16 变成[02,53.16] 格式，便于和歌的时间比较
                    var timeArr = time.split(":");

                    // 得到歌词
                    var geci = item.substr(index+1);

                    arr.push([timeArr[0]*60+parseFloat(timeArr[1]),geci]);

                });
                return arr;
            },
            hideLyricHandle(){
                this.showLyric = false;
            },
            hideAudio(){
                this.$store.commit("HIDEAUDIO")
            },
            showList(){
               this.isShowPlayList = !this.isShowPlayList;
            },
            play(){
                // API 的参考网址：http://www.runoob.com/jsref/dom-obj-video.html
                // 获取当前的播放时间
                this.currentTime = document.querySelector("audio").currentTime;
                // 获取歌曲的总时间
                this.duraion = document.querySelector("audio").duration;

                if( document.querySelector("audio").ended){

                    // 如果本歌曲结束了，会返回true，此时由播放模式决定下一曲
                    if( this.playState == 'all'){
                        if( this.playerIndex >= this.audio.album.length - 1){
                             this.changeMusic(0)
                        }else{
                            this.changeMusic(this.playerIndex+1)
                        }
                    }else if(this.playState == 'once'){
                        this.changeMusic(this.playerIndex);
                        document.querySelector("audio").load();
                    }else if(this.playState == 'random'){
                        let index = ~~(Math.random() * this.audio.album.length);
                        this.changeMusic(index);
                    }
                }
                //控制歌词向上跟着歌移动
                if( this.showLyric ){
                    var lyricHeight = parseInt( getComputedStyle(document.querySelector(".lyric")).height);

                    for (var i = 0; i < this.lyric.length; i++) {

                            if( this.currentTime > this.lyric[i][0]){
                                // 让当前的正在唱的歌的歌词居中。
                                document.querySelector(".lyric ul").style.top = lyricHeight / 2 - 26 * i + "px";
                            }
                    };
                }

            },
            gotoTime(event){
                // 点击获取鼠标的坐标，跳转进度
                var durationWidth = parseInt( getComputedStyle(document.querySelector(".duration")).width);
                document.querySelector("audio").currentTime = (  event.offsetX / durationWidth ) * this.duraion;

            },
            changeplayState(){
                if( this.playState == "all"){
                    this.playState = "once"
                }else if( this.playState == "once"){
                    this.playState = "random"
                }else if( this.playState == "random"){
                    this.playState = "all"
                }
            },
            goprev(){
                if(this.playerIndex <= 0){
                    return;
                }else{
                    this.changeMusic(this.playerIndex - 1)
                }
            },
            gonext(){
                // 切换下一曲
                if( this.playState == 'random'){

                    let index = ~~(Math.random() * this.audio.album.length);

                    this.changeMusic(index)
                }else{
                    if( this.playerIndex >= this.audio.album.length - 1){
                         this.changeMusic(0)
                    }else{
                        this.changeMusic(this.playerIndex+1)
                    }
                }
            },
            changeMusic(index){
                this.isPlay = true;
                if( this.audio.albumIndex == null){
                    // 此处切换的是非专辑
                    this.$store.commit("CHANGEMUISC",{
                        index,
                        playerImg:this.audio.album[index].playerbg,
                        cdImg:this.audio.album[index].singerImg
                    })
                }else if( typeof this.audio.albumIndex == 'number'){
                    this.$store.commit("CHANGEMUISC",{
                        index,
                        playerImg:this.audio.playerImg,
                        cdImg:this.audio.cdImg
                    })
                }
            },
            pauseOrplay(){

                this.isPlay = !this.isPlay;

                if( this.isPlay != true){
                    document.querySelector("audio").pause();
                }else{
                    document.querySelector("audio").play();
                }
            },
            playList(index){
                this.changeMusic(index);
            }
        }
    }
</script>
