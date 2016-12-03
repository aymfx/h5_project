var aneObj=function()
{
	this.rootx=[];//底部x轴位置
	this.headx=[];//头部x轴位置
	this.heady=[];//头部y轴位置
	this.alpha=0;//
	this.amp=[];//
}
aneObj.prototype.num=50;
aneObj.prototype.init=function()
{
	for(var i=0;i<this.num;i++)
	{
		this.rootx[i]=i*16+Math.random()*20;//[0~1)
		this.headx[i]=this.rootx[i];
		this.heady[i]=canHeight-250+Math.random()*50;
		this.amp[i]=Math.random()*50+30;
	}
}
//绘制海葵
aneObj.prototype.draw=function()
{
	this.alpha+=deltaTime*0.0008;
	var l=Math.sin(this.alpha);//[-1,1]
	ctxt2.save();//保存当前状态
	ctxt2.globalAlpha=0.6;//设置透明度或alpha通道
	ctxt2.lineWidth=20;//线宽
	ctxt2.lineCap="round" ;//设置线头样式为线帽
	ctxt2.strokeStyle="#3b154e";//绘制路径颜色
	for(var i=0;i<this.num;i++)
	{
		ctxt2.beginPath();//起始一条路径
		ctxt2.moveTo(this.rootx[i],canHeight);//移动路径到画布中的指定点，不创建线条
		this.headx[i]=this.rootx[i]+l*this.amp[i];
		ctxt2.quadraticCurveTo(this.rootx[i],canHeight-100,this.headx[i],this.heady[i]);
		ctxt2.stroke();//绘制路径
	}
	ctxt2.restore();//返回保存过的状态
}