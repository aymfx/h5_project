var holeObj=function()
{
	this.x=[];//x轴位置
	this.y=[];//y轴位置
	this.alive=[];
	this.r=[];
}
holeObj.prototype.num=5;
holeObj.prototype.init=function()
{
	for(var i=0;i<this.num;i++)
	{
		this.alive[i]=false;
		this.x[i]=0;
		this.y[i]=0;
		this.r[i]=0;
	}
}
holeObj.prototype.draw=function()
{
	ctxt1.save();//保存当前状态
	ctxt1.lineWidth=2;
	ctxt1.shadowBlur=10;
	ctxt1.shadowColor="rgba(203,91,0,1)";
	for(var i=0;i<this.num;i++)
	{
		if(this.alive[i])
		{
			this.r[i]+=deltaTime*0.05;
			if(this.r[i]>100)
			{
			  this.alive[i]=false;
			  break;
			}
			var alpha=1-this.r[i]/100;//alpha 透明度，不在【0,1】时都为1
			ctxt1.beginPath();//起始一条路径
			ctxt1.arc(this.x[i],this.y[i],this.r[i],0,2*Math.PI);
			ctxt1.closePath();
			ctxt1.strokeStyle="rgba(203,91,0,"+alpha+")";
			ctxt1.stroke()
		}
	}
	ctxt1.restore();//返回保存过的状态
}
holeObj.prototype.born=function(x,y)
{
	for(var i=0;i<this.num;i++)
	{
		if(!this.alive[i])
		{
			//出生
			this.alive[i]=true;
			this.r[i]=10;
			this.x[i]=x;
			this.y[i]=y;
			return;
		}
	}
}