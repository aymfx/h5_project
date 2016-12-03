//判断大鱼和果实的距离
function momFruitCollision()
{
	if(!data.gameOver)
	{
		for(var i=0;i<fruit.num;i++)
		{
			if(fruit.alive[i])
			{
				//计算距离平方值
				var l=calLength2(mom.x, mom.y, fruit.x[i], fruit.y[i]);
				if(l<900)
				{
					fruit.dead(i);//果实被吃 消失
					data.fruitNum++;
					//大鱼身体变色
					mom.momBodyCount++;
					if(mom.momBodyCount>7)
					{
						mom.momBodyCount=7;
					}
					if(fruit.fruitType[i]=="blue")
					{
						data.double=2;
					}
					wave.born(fruit.x[i],fruit.y[i]);
				}
			}
		}
	}
}
//判断大鱼和小鱼的距离
function momBabyCollision()
{
	if(!data.gameOver&&data.fruitNum>0)
	{
		//计算距离平方值
		var l=calLength2(mom.x, mom.y, baby.x, baby.y);
		if(l<900)
		{
			baby.babyBodyCount=0;
			mom.momBodyCount=0;
			data.addScore();
			hole.born(baby.x, baby.y);
		}
	}
}