var left = document.querySelector(".left");
var right = document.querySelector(".right");
var show = document.querySelector(".show");
var dots = document.querySelectorAll(".dot")


console.log(dots.length);

var distance = -100;
var index = 1;
var num = 0;
var gate = true;
var speedgate = 5;

left.addEventListener("click",()=>{
	just(100,1,10);
	index--;
	btnActive();
});

right.addEventListener("click",()=>{
	just(-100,-1,10);
	index++;
	btnActive();
});

function just(offet,direct,speed){
	if(num>offet && direct<0 || num<offet && direct>0){
		num += direct*speed;
		distance += direct*speed;
		show.style.left=distance+"%";
		window.setTimeout(()=>{
			this.just(offet,direct,speed)
		},20);
	}else{
		num=0;
		if(distance<-500)distance=-100;
		if(distance>-100)distance=-500;
	}
};

function btnActive(){
	for(var i = 0;i < dots.length;i++){
		dots[i].className = "dot";
	}
	if(index<1)index=5;
	if(index>5)index=1;
	dots[index-1].className = "dot active"
};

for(var i=0;i<dots.length;i++){
	(function(i){
			dots[i].addEventListener("click",function(){
				console.log(index,i)
				var offet = (index-i-1)*100;
				var dire = 0;
				index = i+1;
				if(offet>=0)dire=1;
				if(offet<0)dire=-1;
				speedgate = Math.abs(offet)/10;
				just(offet,dire,speedgate);
				btnActive();
		});
		})(i);
};



