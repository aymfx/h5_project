var dataObj=function()
{
	this.fruitNum=0;
	this.double=1;
	this.score=0;
	this.gameOver=false;
	this.alpha=0;
}
dataObj.prototype.draw=function()
{
	var w=can1.width;
	var h=can1.height;
	
	ctxt1.save();//保存当前状态
	ctxt1.shadowBlur=10;
	ctxt1.shadowColor="white";
	ctxt1.fillStyle="white";
	ctxt1.fillText("SCORE:"+this.score,w*0.5,h-20);
	if(this.gameOver)
	{
		this.alpha+=deltaTime*0.0005;
		ctxt1.fillStyle="rgba(255,255,255,"+this.alpha+")";
		ctxt1.fillText("GAME OVER ",w*0.5,h*0.5);
	}
	ctxt1.restore();//返回保存过的状态
}
dataObj.prototype.addScore=function()
{
	this.score+=this.fruitNum*100*this.double;
	this.fruitNum=0;
	this.double=1;
}