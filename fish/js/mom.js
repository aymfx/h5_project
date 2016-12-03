var momObj=function()
{
	this.x;//x轴位置
	this.y;//y轴位置
	this.angle;//定义角度
	//定义大鱼尾巴
	this.momTailTimer=0;
	this.momTailCount=0;
	//定义大鱼眼睛
	this.momEyeTimer=0;
	this.momEyeCount=0;
	this.momEyeInterval=1000;
	
	this.momBodyCount=0;//定义大鱼身体
}

//初始化
momObj.prototype.init=function()
{
	this.x=canWidth*0.5;
	this.y=canHeight*0.5;
	this.angle=0;
}

//绘制大鱼
momObj.prototype.draw=function()
{
	//将坐标跟随向鼠标坐标移动
	this.x=lerpDistance(mx, this.x, 0.99);
	this.y=lerpDistance(my, this.y, 0.99);
	//每一帧的角度
	var deltaX=mx-this.x;
	var deltaY=my-this.y;
	var beta=Math.atan2(deltaY,deltaX)+Math.PI;//atan(y,x)返回从 X 轴正向逆时针旋转到点 (x,y) 时经过的角度
	this.angle=lerpAngle(beta, this.angle, 0.6);
	
	//大鱼尾巴动画
	this.momTailTimer+=deltaTime;
	if(this.momTailTimer>50)
	{
		this.momTailCount=(this.momTailCount+1)%8;
		this.momTailTimer%=50;
	}
	//大鱼眼睛动画
	this.momEyeTimer+=deltaTime;
	if(this.momEyeTimer>this.momEyeInterval)
	{
		this.momEyeCount=(this.momEyeCount+1)%2;
		this.momEyeTimer%=this.momEyeInterval;
		if(this.momEyeCount==0)
		{
			this.momEyeInterval=Math.random()*1500+2000;
		}
		else
		{
			this.momEyeInterval=150;
		}
	}
	
	ctxt1.save();//保存当前状态
	ctxt1.translate(this.x,this.y);//将元素移动到当前位置(x,y);
	ctxt1.rotate(this.angle);
	ctxt1.drawImage(momTail[this.momTailCount],-momTail[this.momTailCount].width*0.5+30,-momTail[this.momTailCount].height*0.5);
	if(data.double==1)
	{
		ctxt1.drawImage(momBodyOra[this.momBodyCount],-momBodyOra[this.momBodyCount].width*0.5,-momBodyOra[this.momBodyCount].height*0.5);
	}
	else
	{
		ctxt1.drawImage(momBodyBlue[this.momBodyCount],-momBodyBlue[this.momBodyCount].width*0.5,-momBodyBlue[this.momBodyCount].height*0.5);
	}
	ctxt1.drawImage(momEye[this.momEyeCount],-momEye[this.momEyeCount].width*0.5,-momEye[this.momEyeCount].height*0.5);
	ctxt1.restore();//返回保存过的状态
}