// JavaScript Document
var can1;
var can2;
var ctxt1;
var ctxt2;

var canWidth;
var canHeight;

var lastTime;
var deltaTime;

var bgPic=new Image();
var ane;
var fruit;
var mom;
var baby;
var data;
var wave;
var hole;
var dust;
var dustPic=[];

var babyTail=[];
var babyEye=[];
var babyBody=[];

var momTail=[];
var momEye=[];
var momBodyOra=[];
var momBodyBlue=[];

var mx;
var my;

document.body.onload=game;
function game()
{
	init();
	lastTime=Date.now();
	deltaTime=0;
	gameloop();
}

function init()
{
	//获得canvas context
	can1=document.getElementById("canvas1");//鱼，漂浮物，分数
	ctxt1=can1.getContext("2d");
	can2=document.getElementById("canvas2");//背景，海葵,果实
	ctxt2=can2.getContext("2d");
	can1.addEventListener("mousemove",onMouseMove,false);
	
	bgPic.src="./image/background.jpg";
	canWidth=can1.width;
	canHeight=can1.height;
	ane=new aneObj();
	ane.init();
	fruit=new fruitObj();
	fruit.init();
	
	mom=new momObj();
	mom.init();
	baby=new babyObj();
	baby.init();
	
	mx=canWidth*0.5;
	my=canHeight*0.5;
	
	//小鱼图片加载
	for(var i=0;i<8;i++)
	{
		babyTail[i]=new Image();
		babyTail[i].src="./image/babyTail"+i+".png";
	}
	for(var i=0;i<2;i++)
	{
		babyEye[i]=new Image();
		babyEye[i].src="./image/babyEye"+i+".png";
	}
	for(var i=0;i<20;i++)
	{
		babyBody[i]=new Image();
		babyBody[i].src="./image/babyFade"+i+".png";
	}
	//大鱼图片加载
	for(var i=0;i<8;i++)
	{
		momTail[i]=new Image();
		momTail[i].src="./image/bigTail"+i+".png";
	}
	for(var i=0;i<2;i++)
	{
		momEye[i]=new Image();
		momEye[i].src="./image/bigEye"+i+".png";
	}
	for(var i=0;i<8;i++)
	{
		momBodyOra[i]=new Image();
		momBodyOra[i].src="./image/bigSwim"+i+".png";
		momBodyBlue[i]=new Image();
		momBodyBlue[i].src="./image/bigSwimBlue"+i+".png";
	}
	data=new dataObj();
	ctxt1.font="30px Verdana";
	ctxt1.textAlign="center";//居中,左对齐,右对齐
	wave=new waveObj();
	wave.init();
	hole=new holeObj();
	hole.init();
	for(var i=0;i<7;i++)
	{
		dustPic[i]=new Image();
		dustPic[i].src="./image/dust"+i+".png";
	}
	dust=new dustObj();
	dust.init();
}

function gameloop()
{
	window.requestAnimFrame(gameloop);//每一帧刷新一下
	var now=Date.now();
	deltaTime=now-lastTime;
	lastTime=now;
	if(deltaTime>40) deltaTime=40;
	
	drawBackground();
	ane.draw();
	fruitMonitor();
	fruit.draw();
	
	ctxt1.clearRect(0,0,canWidth,canHeight);
	mom.draw();//绘制大鱼
	baby.draw();//绘制小鱼
	momFruitCollision();
	momBabyCollision();
	
	data.draw();
	wave.draw();
	hole.draw();
	dust.draw();
}
function onMouseMove(e)
{
	
	if(!data.gameOver)
	{
		if(e.offSetX||e.layerX)
		{
			mx=e.offSetX==undefined?e.layerX:e.offSetX;
			my=e.offSetY==undefined?e.layerY:e.offSetY;
		}
	}
}