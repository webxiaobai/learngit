<<<<<<< HEAD
<template>
	<div class="header_wrap">
	<!--<div class="header" v-bind:title = "messageTitle">{{messageTitle}}</div>-->
	  	<div class="header">
	  		<div class="location">
	  			<span class="iconfont icon-jijianfasong-xianxing"></span>
	  			<span>{{locationName}}</span>
	  		</div>
	  		<div class="weather">
	  			天气
	  		</div>
	  	</div>
	  	<div class="search">
	  		<span class="iconfont icon-sousuo img_search" :class="{img_search_move:isMove}"></span>
	  		<input class="search_input" :class="{search_input_move:isMove}" type="text" v-on:click="clickChild()" placeholder="请输入商品" />
	  	</div>
	  	<div class="alertInfo">
	  		<ul class="alertInfo_ul">
	  			<li class="list1" v-for="info in alertInfos ">
	  				{{info.name}}
	  			</li>
	  		</ul>
	  	</div>
	</div>
	
</template>

<script>
	export default{
		data(){
			return {
				locationName:"育新花园",
				isMove:false,
				alertInfos:[
					{name:"安记港式烧腊鸡腿肉"},
					{name:"炸鸡"},
					{name:"焖面"},
					{name:"粽子8折"},
					{name:"我的菜"},
					{name:"锅贴"}
				
				]
			}
		},
		props:['messageTitle'],
		methods:{
		  clickChild:function(){
		  	this.isMove = true;
		  }
		}
		
	}
</script>

<style scoped>
	.header_wrap{
		width: 100%;
		position: absolute;
		overflow: hidden;
		z-index: 99;
	}
	.header{
	height: 40px;
	line-height: 40px;
	height: 40px;
	background: #0096ff;
	color: #fff;
	}
	.header .location{
		float: left;
		padding-left: 20px;
		font-size: 18px;
		font-weight: bold;
	}
	.header .weather{
		float: right;
		padding-right: 20px;
	}
	.search{
		width: 100%;
		height: 44px;
		background: #0096ff;
		border: 0;
		position: relative;
		
	}
	.img_search{
		width: 25px;
		display: inline-block;
		position: absolute;
		top: 12px;
		left: 35%;
		animation-duration: 600ms;
		animation-timing-function: ease-in-out;
		animation-fill-mode: both;
	}
	.search_input{
		box-sizing: border-box;
		width: 92%;
		height: 30px;
		margin-top: 7px;
		border: 0;
		outline: 0;
		border-radius: 20px;
		display: inline-block;
		padding-left: 38%;
		animation-duration: 600ms;
		animation-timing-function: ease-in-out;
		animation-fill-mode: both;
	}
	@keyframes sousuo{
		0%{
			padding-left: 38%;
		}
		100%{
			padding-left: 35px;
		}
	}
	@keyframes sousuo_img{
		0%{
			left: 35%;
		}
		100%{
			left: 25px;
		}
	}
	.img_search_move{
		
		animation-name: sousuo_img;
	}
	.search_input_move{
		animation-name: sousuo;
		
	}
	.alertInfo{
		width: 100%;
		height: 24px;
		padding-top: 4px;
		background-color:#0096ff ;
	}.alertInfo_ul{
		width: 92%;
		margin: 0 auto;
		overflow: hidden;
	}
	.alertInfo .list1{
		float: left;
		width: 15%;
		text-align: center;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		padding-left: 1.1%;
		color: #fff;
	}
	
=======
<template>
	<div class="header_wrap">
	<!--<div class="header" v-bind:title = "messageTitle">{{messageTitle}}</div>-->
	  	<div class="header">
	  		<div class="location">
	  			<span class="iconfont icon-jijianfasong-xianxing"></span>
	  			<span>{{locationName}}</span>
	  		</div>
	  		<div class="weather">
	  			天气
	  		</div>
	  	</div>
	  	<div class="search">
	  		<span class="iconfont icon-sousuo img_search" :class="{img_search_move:isMove}"></span>
	  		<input class="search_input" :class="{search_input_move:isMove}" type="text" v-on:click="clickChild()" placeholder="请输入商品" />
	  	</div>
	  	<div class="alertInfo">
	  		<ul class="alertInfo_ul">
	  			<li class="list1" v-for="info in alertInfos ">
	  				{{info.name}}
	  			</li>
	  		</ul>
	  	</div>
	</div>
	
</template>

<script>
	export default{
		data(){
			return {
				locationName:"育新花园",
				isMove:false,
				alertInfos:[
					{name:"安记港式烧腊鸡腿肉"},
					{name:"炸鸡"},
					{name:"焖面"},
					{name:"粽子8折"},
					{name:"我的菜"},
					{name:"锅贴"}
				
				]
			}
		},
		props:['messageTitle'],
		methods:{
		  clickChild:function(){
		  	this.isMove = true;
		  }
		}
		
	}
</script>

<style scoped>
	.header_wrap{
		width: 100%;
		position: absolute;
		overflow: hidden;
		z-index: 99;
	}
	.header{
	height: 40px;
	line-height: 40px;
	height: 40px;
	background: #0096ff;
	color: #fff;
	}
	.header .location{
		float: left;
		padding-left: 20px;
		font-size: 18px;
		font-weight: bold;
	}
	.header .weather{
		float: right;
		padding-right: 20px;
	}
	.search{
		width: 100%;
		height: 44px;
		background: #0096ff;
		border: 0;
		position: relative;
		
	}
	.img_search{
		width: 25px;
		display: inline-block;
		position: absolute;
		top: 12px;
		left: 35%;
		animation-duration: 600ms;
		animation-timing-function: ease-in-out;
		animation-fill-mode: both;
	}
	.search_input{
		box-sizing: border-box;
		width: 92%;
		height: 30px;
		margin-top: 7px;
		border: 0;
		outline: 0;
		border-radius: 20px;
		display: inline-block;
		padding-left: 38%;
		animation-duration: 600ms;
		animation-timing-function: ease-in-out;
		animation-fill-mode: both;
	}
	@keyframes sousuo{
		0%{
			padding-left: 38%;
		}
		100%{
			padding-left: 35px;
		}
	}
	@keyframes sousuo_img{
		0%{
			left: 35%;
		}
		100%{
			left: 25px;
		}
	}
	.img_search_move{
		
		animation-name: sousuo_img;
	}
	.search_input_move{
		animation-name: sousuo;
		
	}
	.alertInfo{
		width: 100%;
		height: 24px;
		padding-top: 4px;
		background-color:#0096ff ;
	}.alertInfo_ul{
		width: 92%;
		margin: 0 auto;
		overflow: hidden;
	}
	.alertInfo .list1{
		float: left;
		width: 15%;
		text-align: center;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		padding-left: 1.1%;
		color: #fff;
	}
	
>>>>>>> cffcdfa21565dd716edd0716132c3838991bccf4
</style>