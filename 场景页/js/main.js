var nowpage=0;
$(document).ready(function(){
//	console.log(1)
	var width=window.innerWidth;
	var height=window.innerHeight;
	$(".content").width(width);
	$(".content").height(4*height);
	//page
	$(".page").width(width);
	$(".page").height(height);
	
	//滑动事件
	$(".content").swipe({
		swipe:function(event,direction,distance,fingerCount){
			//判断滑动的方向
			if (direction=="up") {
				nowpage++;
			}else if (direction=="down") {
				nowpage--;
			}
			if (nowpage>3) {
				nowpage=3;
			}
			if(nowpage<0){
				nowpage=0;
			}
			$(".content").animate({top:nowpage*-100+"%"},{duration:500,complete:animation()})
		}
	})
	
	$(".page1_buiding").fadeIn(2000,function(){
		$(".flight").animate({left:'25%',top:'30%'},2000)
	})
})

function animation(){
	//page2
	if (nowpage==1) {
		$(".farm").animate({left:'-100%'},{duration:2000,complete:function(){
			$(".it").animate({right:'10%'},{duration:2000,complete:function(){
				$(".farm").animate({left:'5%'},2000)
			}})
		}})
	}
	
	//page3
	if (nowpage==2) {
		$(".early").fadeIn(1000,function(){
			$(".last").fadeIn(1000,function(){
				$(".bus").animate({left:'-100%'},2000,function(){
					$(".avatar").animate({left:'40%'},2000,function(){
						$(".station").fadeOut(500);
						$(".early").fadeOut(500);
						$(".last").fadeOut(500);
						$(".avatar").fadeOut(500);
						$(".bus").fadeOut(500,function(){
							$(".teamBg").fadeIn(500,function(){
								$(".teamWall").fadeIn(1000);
								$(".teamAv").fadeIn(1000,function(){
									$(".teamSpace").fadeIn(1000)
								});
							})
						});
					})
				})
			})
		})
	}
}

//点击事件
function light(img){
	//灯变亮，改变路径
	img.src="img/lightOn.png";
	$(".lightBg").fadeOut("slow");
	$(".guide").fadeOut("slow");
	$(".lightOff").fadeOut("slow",function(){
		//加载第二场景
		$(".lightOnBg").fadeIn("slow");
	})
}

//点击翻页
function next(){
	nowpage++;
	if (nowpage>3) {
		nowpage=3;
	}
	$(".content").animate({top:nowpage*-100+"%"},{duration:500,complete:animation()})
}

//music
function music(img){
	var playing=document.getElementById("music");
	if(playing.paused){
		playing.play();
		img.src="img/musicBtn.png";
	}else{
		playing.pause();
		img.src="img/musicBtnOff.png";
	}
}
