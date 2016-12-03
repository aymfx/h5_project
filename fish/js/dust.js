var dustObj=function()
{
	this.x=[];//x轴位置
	this.y=[];//y轴位置
	this.NO=[];
	this.alpha=0;//角度
	this.amp=[];//振幅
}
dustObj.prototype.num=25;
dustObj.prototype.init=function()
{
	for(var i=0;i<this.num;i++)
	{
		this.x[i]=Math.random()*canWidth;//[0~1)
		this.y[i]=canHeight*Math.random();
		this.amp[i]=Math.random()*15+20;
		this.NO[i]=Math.floor(Math.random()*7);
	}
}
//绘制漂浮物
dustObj.prototype.draw=function()
{
	this.alpha+=deltaTime*0.0008;
	var l=Math.sin(this.alpha);//[-1,1]
	for(var i=0;i<this.num;i++)
	{
		var no=this.NO[i];
		ctxt1.drawImage(dustPic[no],this.x[i]+this.amp[i]*l,this.y[i]);
	}
}