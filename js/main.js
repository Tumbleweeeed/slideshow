var left = document.querySelector(".left");
var right = document.querySelector(".right");
var show = document.querySelector(".show");
var dots = document.querySelectorAll(".dot")


console.log(dots.length);

var distance = -1000;
var index = 1;

left.addEventListener("click",()=>{
	animate(1000);
	index--;
	btnActive();
});

right.addEventListener("click",()=>{
	animate(-1000);
	index++;
	btnActive();
});

function animate(offet){
	if(distance<-5000)distance=-1000;
	if(distance>-1000)distance=-5000;
	distance += offet;
	show.style.transform="translate("+distance+"px,0)"
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

