<template>
	
  	<div class="con5">
  		<ul class="ul_con3">
  			<li class="list" v-for="list in lists">
	  			<div class="left_title">
	  				<span class="span1">{{list.mainTitle}}</span>
	  				<span class="span2">{{list.subtitle}}</span>
	  			</div>
	  			<div class="right_img">
	  				<img class="con3ImgSize" :src="list.imgsrc" />
	  			</div>
  			</li>
  		</ul>
  	</div>
  		
  
</template>

<script>
	export default{
		data(){
			return {
				bannerSrc:'../../../static/img/con2_banner1.png',
				lists:[
					{mainTitle:"推荐有奖",subtitle:"5元现金拿不停",imgsrc:"../../../static/img/con5_award1.png"},
					{mainTitle:"领券中心",subtitle:"代金券免费领",imgsrc:"../../../static/img/con3_img1.png"}
				]
			}
		}
	}
</script>

<style scoped="scoped">
	.con5{
		width: 100%;
		overflow: hidden;
		background-color: #fff;
		margin-top: 10px;
		height: 94px;
	}
	.ul_con3{
		width:100%;
		overflow: hidden;
	}
	.ul_con3 .list{
		width: 50%;
		overflow: hidden;
		float: left;
		text-align: left;
		box-sizing: border-box;
	}
	.ul_con3 .list:nth-of-type(odd){
		border-right: 1px solid #f9f9f9;
	}
	.left_title{
		float: left;
		padding: 20px 0px 0 10px;
		width: 49%;
	}
	.left_title span{
		display: block;
		width: 100%;
		height: 24px;
		line-height: 24px;
	}
	.left_title .span1{
		font-size: 18px;
		font-weight: bold;
	}
	.left_title .span2{
		font-size: 14px;
		color: #999;
	}
	.right_img{
		float: left;
		padding-top: 10px;
	}
	.con3ImgSize{
		width: 70px;
	}
	
	
</style>