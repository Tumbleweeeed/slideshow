var left = document.querySelector(".left");
var right = document.querySelector(".right");
var show = document.querySelector(".show");
var dots = document.querySelectorAll(".dot")


console.log(dots.length);

var distance = -100;
var index = 1;
var num = 0;

left.addEventListener("click",()=>{
	just(100,1);
	index--;
	btnActive();
});

right.addEventListener("click",()=>{
	just(-100,-1);
	index++;
	btnActive();
});

function animate(offet){
	if(distance<-500)distance=-100;
	if(distance>-100)distance=-500;
	distance += offet;
	show.style.left=distance+"%"
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
	dots[i].addEventListener("click",function(){
		alert(i)
	});
}

function just(offet,direct){
	if(num>offet && direct<0 || num<offet && direct>0){
		num += direct*10;
		distance += direct*10;
		show.style.left=distance+"%";
		console.log(distance,num);
		window.setTimeout(()=>{
			this.just(offet,direct)
		},20);
	}else{
		num=0;
		if(distance<-500)distance=-100;
		if(distance>-100)distance=-500;
	}
}

