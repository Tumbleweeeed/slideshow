<template>
	<div class="wrapper">
		<div class="arrow">
			<div class="left" @click="move(1,100)"></div>
			<div class="right" @click="move(-1,100)"></div>
		</div>
		<div class="contain">
			<div class="show" :style="containStyle">
				<li>
					<img src="../../static/img/5.jpg" alt="">
				</li>
				<li v-for="(item,index) in img" :key="index">
					<img :src="item" alt="">
				</li>
				<li>
					<img src="../../static/img/1.jpg" alt="">
				</li>
			</div>
		</div>
		<div class="dots">
			<span 
				v-for="(dots,i) in img"
				:key="i"
				:class="{dotted: i === (currentIndex-1)}"
				class="dot"
				@click="jump(i+1)"
			>
			</span>
		</div>
	</div>
</template>

<script>
export default {
	name:"Home",
	data(){
		return{
			img:["./static/img/1.jpg","./static/img/2.jpg","./static/img/3.jpg","./static/img/4.jpg","./static/img/5.jpg"],
			distance:-100,
			currentIndex:1,
			doorKey:true
		}
	},
	computed:{
		containStyle(){
			return{
				left:`${this.distance}%`
			}
		}
	},
	methods:{
		move(direct,distance){
			if(!this.doorKey)return
			this.doorKey=false
			direct == -1 ? this.currentIndex+=distance/100 : this.currentIndex-=distance/100
			if(this.currentIndex>5)this.currentIndex=1
			if(this.currentIndex<1)this.currentIndex=5
			const initdes = this.distance+direct*distance
			this.animate(initdes,direct)
		},
		animate(des,direct){
			if(direct == -1 && des < this.distance || direct == 1 && des > this.distance){
				this.distance += 2*direct
				window.setTimeout(()=>{
					this.animate(des,direct)
				},4)
			}else{
				this.doorKey=true
				this.distance = des
				if(this.distance<-500)this.distance=-100
				if(this.distance>-100)this.distance=-500
			}
		},
		jump(index){
			const direct = index-this.currentIndex>=0 ? -1 : 1
			const offset = Math.abs(index-this.currentIndex)*100
			this.move(direct,offset)
		}
	}
}
</script>

<style lang="stylus" scoped>
.wrapper
	position relative
	width 700px
	height 300px
	top 20px
	margin 80px auto
	background rgba(0,0,1,.1)
	&:hover .arrow
		opacity 1
	.contain
		position absolute
		top 0
		left 0
		right 0
		bottom 40px
		overflow hidden
		.show
			position relative
			width 4900px
			height 260px
			left -100%
			li
				margin 0
				float left
				width 700px
				height 260px
				list-style none
				img
					margin 0
					width 700px
					height 260px
	.dots
		position absolute
		bottom 5px
		margin-top:-10px;
		width:200px;
		height:20px;
		left:50%;
		margin-left:-100px;
		display:flex;
		justify-content:space-around;
		.dot
			width:10px;
			height:10px;
			background:black;
			border-radius:10px;
			cursor:pointer;
			&:hover
				background rgba(0,0,0,.5)
	.arrow
		opacity 0
		.left
			position absolute
			width 30px
			height 70px
			top 50%
			left 0
			margin-top -35px
			background rgba(0,0,0,.6)
			z-index 9
			cursor pointer
			&:hover
				opacity .5
		.right
			position absolute
			width 30px
			height 70px
			top 50%
			right 0
			margin-top -35px
			background rgba(0,0,0,.6)
			z-index 9
			cursor pointer
			&:hover
				opacity .5
.dotted
	background gray !important



</style> 