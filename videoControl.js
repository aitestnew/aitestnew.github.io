var myvideo = document.getElementsByTagName('video');
var controlStyle = document.createElement('style');
var myControl = document.createElement('div');
var myControlBtn = document.createElement('div');

//添加样式
controlStyle.innerHTML = "#myControlBtn{font-size:4vw !important;width:16vw;height:16vw;border-radius:100%;border:1px solid #000;position:fixed;bottom:20vh;left:42vw;line-height:16vw;text-align:center;background-color:#fff !important;color:#000 !important;z-index:99999999;box-shadow:0px 1px 5px rgba(0,0,0,0.8);}#myControlBtn:hover{background-color:#1e1e1e !important;color:yellow !important;}#myControl{display:none;font-size:3vw !important;width:80vw;height:40vh;position:fixed;bottom:0px;left:10vw;border:1px solid #000;border-top-left-radius:5vw;border-top-right-radius:5vw;overflow:hidden;z-index:100000000;background-color:#1E1E1E;}#myControl>ul{margin:0;padding:6vw 3vw;box-sizing:border-box;}.videoControlBtn{list-style:none;display:block;box-sizing:border-box;float:left;margin:0;padding:0;background:#eeeeee;color:#1e1e1e;}#closeControl,#mypush{width:10vw;height:8vw;line-height:8vw;text-align:center;border:1px solid #000;border-radius:2vw;background:red;color:#fff;}#mypush{width:18vw;margin-left:44vw;}#myspeed,#myrewind{width:15vw;height:15vw;text-align:center;border:1px solid #000;line-height:15vw;}#myrewind{border-top-left-radius:7.5vw;border-bottom-left-radius:7.5vw;margin-left:9vw;}#myspeed{border-top-right-radius:7.5vw;border-bottom-right-radius:7.5vw;}#myrecover{width:20vw;height:15vw;line-height:15vw;margin:0 3vw;border:1px solid #000;text-align:center;}#myrewind,#myspeed,#myrecover{box-sizing:border-box;margin-top:6vw;}#myvideoUrl,#myvideoBack,#myvideoForward{width:18vw;height:8vw;line-height:8vw;text-align:center;border:1px solid #000;border-radius:2vw;box-sizing:border-box;margin:6vw 0;}#myvideoBack{margin:6vw 3vw;}#myvideoUrl{margin-left:7vw;}.videoControlBtn:hover{background:#000 !important;color:yellow !important;}";
document.getElementsByTagName('head')[0].appendChild(controlStyle);

//呼出遥控器按钮
myControlBtn.id = "myControlBtn";
myControlBtn.innerHTML = "G";
myControlBtn.onclick = function () {
	var myControlDiv = document.getElementById('myControl');
	if(window.getComputedStyle(myControlDiv,null).display == 'none'){
		this.style.display = "none";
		myControlDiv.style.display = "block";
	}else{
		this.style.display = "block";
		myControlDiv.style.display = "none";
	}
}



var timer;
myControlBtn.ontouchstart = function () {//长按消失
	timer = setTimeout(function (e) {
		document.getElementById('myControlBtn').style.display = "none";
	},1200);
		e.preventDefault();
}

myControlBtn.ontouchmove = function () {//长按消失
	clearTimeout(timer);
}

myControlBtn.ontouchend = function () {//长按消失
	clearTimeout(timer);
}

//document.body.appendChild(myControlBtn);




//遥控器主体
myControl.id = "myControl";
myControl.innerHTML = "<ul><li class='videoControlBtn' id='closeControl' onclick='toClose()'>隐藏</li><li class='videoControlBtn' id='mypush' onclick='toPush()'>暂停/播放</li><li class='videoControlBtn' id='myrewind' onclick='toRewind()'>减速</li><li class='videoControlBtn' id='myrecover' onclick='toRecover()'>恢复常速</li><li class='videoControlBtn' id='myspeed' onclick='toSpeed()'>加速</li><li class='videoControlBtn' id='myvideoUrl' onclick='toFindUrl()'>视频地址</li><li class='videoControlBtn' id='myvideoBack' onclick='toBack()'>快退30s</li><li class='videoControlBtn' id='myvideoForward' onclick='toForward()'>快进30s</li></ul>";
document.body.appendChild(myControl);



//按钮事件
function toClose () {//隐藏
	document.getElementById('myControl').style.display="none";
	document.getElementById('myControlBtn').style.display="block";
}

	
function toPush () {//暂停 or 播放
	for ( var i = 0; i < myvideo.length; i++ ) {
		if (myvideo[i].paused) {
			myvideo[i].play();
		}else{
			myvideo[i].pause();
		}
	}
}

function toRewind () {//减速
	for ( var i = 0; i < myvideo.length; i++ ) {
		if (myvideo[i].playbackRate >= 1) {
			myvideo[i].playbackRate = 0.8
		}else{
			myvideo[i].playbackRate -= 0.2;
		}
	}
}

function toSpeed () {//加速
	for ( var i = 0; i < myvideo.length; i++ ) {
		if (myvideo[i].playbackRate < 1.4) {
			myvideo[i].playbackRate = 1.4
		}else{
			myvideo[i].playbackRate += 0.2;
		}
	}
}

function toRecover () {//恢复常速
	for ( var i = 0; i < myvideo.length; i++ ) {
		myvideo[i].playbackRate = 1;
	}
}

function toBack () {//快退30s
	for ( var i = 0; i < myvideo.length; i++ ) {
		myvideo[i].currentTime -= 30;
	}
}

function toForward () {//快进30s
	for ( var i = 0; i < myvideo.length; i++ ) {
		myvideo[i].currentTime += 30;
	}
}

function toFindUrl () {//弹出视频地址
	for ( var i = 0; i < myvideo.length; i++ ) {
		window.prompt('视频地址' + i + 1 + '：',myvideo[i].currentSrc);
	}
}


if(location.href.match(".iqiyi.com") || location.href.match(".youku.com") || location.href.match(".le.com") || location.href.match(".letv.com") || location.href.match("v.qq.com") || location.href.match(".tudou.com") || location.href.match(".mgtv.com") || location.href.match("film.sohu.com") || location.href.match("tv.sohu.com") || location.href.match(".acfun.cn") || location.href.match(".bilibili.com") || location.href.match(".pptv.com") || location.href.match("vip.1905.com") || location.href.match(".yinyuetai.com") || location.href.match(".fun.tv") || location.href.match(".56.com") || location.href.match(".wasu.cn")) {
	document.body.appendChild(myControlBtn);
}
