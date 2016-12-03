var timer,timer1;
var backTimer;
var time=10;

$(document).ready(function(){
//	console.log(1);
	backTimer=setInterval(function(){
		document.getElementById("time").innerHTML="剩余时间："+time--;
		if (time==0) {
			clearInterval(timer);
			clearInterval(timer1);
			clearInterval(backTimer);
			document.getElementById("time").innerHTML="剩余时间："+time--;
			document.getElementById("gameBox").remove();
		}
	},1000)
	
	var gameBox=document.getElementById("gameBox");
	timer=setInterval(function(){
		var temp=Math.random()*8;
		var x=Math.round(temp);//四舍五入
		var img=gameBox.children[x];
		img.src="img/2.png";
	},500)
	
	timer1=setInterval(function(){
		var temp=Math.random()*8;
		var x=Math.round(temp);//四舍五入
		var img=gameBox.children[x];
		img.src="img/5.jpg";
	},500)
	
	
})

//点击事件 加分
var score=0;
function beat(img){
	//保存路径
	var beatImg=img.src;
	//判断是否是地鼠，是 加分
	if (time>0) {
		if (beatImg.charAt(beatImg.length-5)=="2") {
			score++;
			document.getElementById("score").innerHTML="得分:"+score;
			img.src="img/5.jpg";
		} 
	}
	
}
