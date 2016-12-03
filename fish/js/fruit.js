var fruitObj=function()//定义果实
{
	this.alive=[];//bool型 果实是否活着
	this.x=[];
	this.y=[];
	this.aneID=[];
	this.l=[];
	this.spd=[];
	this.fruitType=[];//定义果实类型
	this.blue=new Image();//定义蓝果实
	this.orange=new Image();//定义黄果实
}
fruitObj.prototype.num=30;

//初始化
fruitObj.prototype.init=function()
{
	for(var i=0;i<this.num;i++)
	{
		this.alive[i]=false;
		this.x[i]=0;
		this.y[i]=0;
		this.aneID[i]=0;
		this.spd[i]=Math.random()*0.01+0.005;//[0.005~0.015)
	}
	this.fruitType[i]="";//黄果实，蓝果实
	this.blue.src="./image/blue.png";
	this.orange.src="./image/fruit.png";
}
//绘制果实
fruitObj.prototype.draw=function()
{
	for(var i=0;i<this.num;i++)
	{
		if(this.alive[i])
		{
			var pic;
			if(this.fruitType[i]=="blue")
			{
				pic=this.blue;
			}
			else
			{
				pic=this.orange;
			}
			if(this.l[i]<15)
			{
				var no=this.aneID[i];
				this.l[i]+=this.spd[i]*deltaTime;
				this.x[i]=ane.headx[no];
				this.y[i]=ane.heady[no];
			}
			else
			{
				this.y[i]-=this.spd[i]*5*deltaTime;
			}
			ctxt2.drawImage(pic,this.x[i]-this.l[i]*0.5,this.y[i]-this.l[i]*0.5,this.l[i],this.l[i]);
			if(this.y[i]<10)
			{
				this.alive[i]=false;
			}
		}
	}
}

//果实出生
fruitObj.prototype.born=function(i)
{
	this.aneID[i]=Math.floor(Math.random()*ane.num);	
	this.l[i]=0;
	this.alive[i]=true;
	var ran=Math.random();
	if(ran<0.3)
	{
		this.fruitType[i]="blue";
	}
	else
	{
		this.fruitType[i]="orange";
	}
}

//果实被吃
fruitObj.prototype.dead=function(i)
{
	this.alive[i]=false;
}

//检查果实数量	
function fruitMonitor()
{
	var num=0;
	for(var i=0;i<fruit.num;i++)
	{
		if(fruit.alive[i]) num++;
	}
	if(num<15)
	{
		sendFruit();
		return ;
	}
}

//检查果实是否存活
function sendFruit()
{
	for(var i=0;i<fruit.num;i++)
	{
		if(!fruit.alive[i]) 
		{
			fruit.born(i);
			return ;
		}
	}
}