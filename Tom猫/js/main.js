$(document).ready(function(){
	//console.log(1);
	$(".drink").click(function(){
		move("drink",80);
		var src="raw/p_drink_milk.wav";
		$("#music").attr("src",src);
	})
	$(".eat").click(function(){
		move("eat",39);
		var src="raw/p_eat.wav";
		$("#music").attr("src",src);
	})
	$(".cymbal").click(function(){
		move("cymbal",12);
		var src="raw/cymbal.wav";
		$("#music").attr("src",src);
	})
	$(".fart").click(function(){
		move("fart",27);
	})
	$(".pie").click(function(){
		move("pie",23);
	})
	$(".scratch").click(function(){
		move("scratch",55);
	})
	$(".footLeft").click(function(){
		move("footLeft",29);
	})
})

var timer;
var index=0;
//行为
function move(action,mun){
	clearInterval(timer);
	timer=setInterval(function(){
		if(index<mun){
			index++;
			var src="Animations/"+action+"/"+action+"_"+srcImgIndex(index)+".jpg";
			$("#cat").attr("src",src);
		}
		else{
			clearInterval(timer);
			index=0;
		}
	},70)
	
}


//拼接00-99数字
function srcImgIndex(imgIndex){
	if (imgIndex<10) {
		return "0"+imgIndex;
	}
	else{
		return imgIndex;
	}
}
