var babyObj=function()
{
	this.x;//x轴位置
	this.y;//y轴位置
	this.angle;//定义角度
	
	this.babyTailTimer=0;
	this.babyTailCount=0;
	
	this.babyEyeTimer=0;
	this.babyEyeCount=0;
	this.babyEyeInterval=1000;
	
	this.babyBodyTimer=0;
	this.babyBodyCount=0;
}

//初始化
babyObj.prototype.init=function()
{
	this.x=canWidth*0.5-50;
	this.y=canHeight*0.5+50;
	this.angle=0;
}

//绘制小鱼
babyObj.prototype.draw=function()
{
	//将坐标跟随向鼠标坐标移动
	this.x=lerpDistance(mom.x, this.x, 0.98);
	this.y=lerpDistance(mom.y, this.y, 0.98);
	//每一帧的角度
	var deltaX=mom.x-this.x;
	var deltaY=mom.y-this.y;
	var beta=Math.atan2(deltaY,deltaX)+Math.PI;//atan(y,x)返回从 X 轴正向逆时针旋转到点 (x,y) 时经过的角度
	this.angle=lerpAngle(beta, this.angle, 0.6);
	//小鱼尾巴动画
	this.babyTailTimer+=deltaTime;
	if(this.babyTailTimer>50)
	{
		this.babyTailCount=(this.babyTailCount+1)%8;
		this.babyTailTimer%=50;
	}
	//小鱼眼睛动画
	this.babyEyeTimer+=deltaTime;
	if(this.babyEyeTimer>this.babyEyeInterval)
	{
		this.babyEyeCount=(this.babyEyeCount+1)%2;
		this.babyEyeTimer%=this.babyEyeInterval;
		if(this.babyEyeCount==0)
		{
			this.babyEyeInterval=Math.random()*1500+2000;
		}
		else
		{
			this.babyEyeInterval=150;
		}
	}
	//小鱼身体变色
	this.babyBodyTimer+=deltaTime;
	if(this.babyBodyTimer>300)
	{
		this.babyBodyCount=this.babyBodyCount+1;
		this.babyBodyTimer%=300;
		if(this.babyBodyCount>19)
		{
			this.babyBodyCount=19;
			//游戏结束
			data.gameOver=true;
		}
	}
	
	ctxt1.save();//保存当前状态
	ctxt1.translate(this.x,this.y);//将元素移动到当前位置(x,y);
	ctxt1.rotate(this.angle);
	ctxt1.drawImage(babyTail[this.babyTailCount],-babyTail[this.babyTailCount].width*0.5+25,-babyTail[this.babyTailCount].height*0.5);
	ctxt1.drawImage(babyBody[this.babyBodyCount],-babyBody[this.babyBodyCount].width*0.5,-babyBody[this.babyBodyCount].height*0.5);
	ctxt1.drawImage(babyEye[this.babyEyeCount],-babyEye[this.babyEyeCount].width*0.5,-babyEye[this.babyEyeCount].height*0.5);
	ctxt1.restore();//返回保存过的状态
}