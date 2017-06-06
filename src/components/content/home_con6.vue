<template>
	
  	<div class="con6">
  		<div class="merchant">推荐商家</div>
  		<ul class="ul_con6">
  			<li class="list" v-for="list in lists">
	  			<div class="left_logo">
	  				<img class="imgSize" :src="list.imgsrc" />
	  			</div>
	  			<div class="right_info">
	  				<ul class="info_wrap">
	  					<li class="item first_item">
	  						<span class="item_brand">品牌</span>
	  						<span class="item_com">北京麦当劳文化路餐厅</span>
	  						<span class="item_mark">票</span>
	  					</li>
	  					<li class="item">
	  						<span class="item_star">
	  							<svg class="star1" xmlns="http://www.w3.org/2000/svg" version="1.1" width="18px" height="18px">  
								  <polygon points="10,0 16,18 1,6 19,6 4,18" style="fill:#ffaa0c;stroke:black;stroke-width:0;fill-rule:nonzero"/>  
								</svg>
								<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="18px" height="18px">  
								  <polygon points="10,0 16,18 1,6 19,6 4,18" style="fill:#ffaa0c;stroke:black;stroke-width:0;fill-rule:nonzero"/>  
								</svg>
								<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="18px" height="18px">  
								  <polygon points="10,0 16,18 1,6 19,6 4,18" style="fill:#ffaa0c;stroke:black;stroke-width:0;fill-rule:nonzero"/>  
								</svg>
								<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="18px" height="18px">  
								  <polygon points="10,0 16,18 1,6 19,6 4,18" style="fill:#ffaa0c;stroke:black;stroke-width:0;fill-rule:nonzero"/>  
								</svg>
								<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="18px" height="18px">  
								  <polygon points="10,0 16,18 1,6 19,6 4,18" style="fill:#ffaa0c;stroke:black;stroke-width:0;fill-rule:nonzero"/>  
								</svg>
	  						</span>
	  						<span class="item_grade">4.6</span>
	  						<span class="item_sales">月售1249单</span>
	  					</li>
	  					<li class="item">
	  						<span class="item_condition1">
	  							<b>￥0元起送</b>|
	  							<b>配送费￥7</b>|
	  							<b>￥29/人</b>
	  						</span>
	  						<span class="item_condition2">
	  							<b>1.52km</b>|
	  							<b>57分钟</b>
	  						</span>
	  						
	  					</li>
	  				</ul>
	  				<div class="privilege">
	  					<div class="p1">
	  						<span class="p1_logo">减</span>
	  						<span>满45减5,满85减12</span>
	  					</div>
	  					<div class="p2">
	  						<span class="p2_logo">新</span>
	  						<span>新用户下单立减17元</span>
	  					</div>
	  				</div>
	  			</div>
  			</li>
  		</ul>
  	</div>
  		
  
</template>

<script>
	export default{
		data(){
			return {
				lists:[
					{imgsrc:"../../../static/img/con6_logo1.png",mainTitle:"推荐有奖",subtitle:"5元现金拿不停"},
					{imgsrc:"../../../static/img/con6_logo2.png",mainTitle:"领券中心",subtitle:"代金券免费领"},
					{imgsrc:"../../../static/img/con6_logo3.jpeg",mainTitle:"领券中心",subtitle:"代金券免费领"},
					{imgsrc:"../../../static/img/con6_logo4.png",mainTitle:"领券中心",subtitle:"代金券免费领"},
					{imgsrc:"../../../static/img/con6_logo5.png",mainTitle:"领券中心",subtitle:"代金券免费领"}
				]
			}
		}
	}
</script>

<style scoped="scoped">
	.con6{
		width: 100%;
		overflow: hidden;
		background-color: #fff;
		margin-top: 10px;
		/*height: 346px;*/
	}
	.merchant{
		width: 100%;
		text-align: left;
		padding-left:15px ;
	}
	.ul_con6{
		width:100%;
		position: relative;
		overflow: hidden;
	}
	.ul_con6 .list{
		width: 100%;
		overflow: hidden;
		text-align: left;
		/*box-sizing: border-box;*/
		height: 186px;
		padding:0 15px;
		padding-top: 10px;
		border-bottom: 1px solid #dfdfdf;
	}
	/*.list:after{
		content: '';
		position: absolute;
		width: 200%;
		height: 1px;
		bottom: 0;
		border-bottom: 1px solid #d6e4ed;
		-webkit-transform-origin: 0 0;
		transform-origin: 0 0;
		-webkit-transform: scale(.5,.5);
		transform: scale(.5,.5);
		-webkit-box-sizing: border-box;
		box-sizing: border-box
	}*/
	.left_logo{
		width: 20%;
		float: left;
	}
	.left_logo .imgSize{
		width: 100%;
	}
	.right_info{
		padding-left: 2%;
		width: 78%;
		float: left;
	}
	.info_wrap{
		width: 100%;
		overflow: hidden;
		padding-bottom: 10px;
		border-bottom: 1px dashed #ccc;
	}
	.info_wrap .item{
		line-height: 30px;
		font-size: 12px;
	}	
	.info_wrap .first_item{
		padding-bottom: 10px;
	}	
.info_wrap .item .item_com{
		font-size: 16px;
		font-weight: bold;
	}
	.info_wrap .item .item_brand{
		background-color: #ffdb31;
		padding:3px 5px;
		color: #52250a;
		text-align: center;	
	}
	.info_wrap .item .item_mark{
		position: absolute;
		padding: 3px;
		right: 10px;
		line-height: 16px;
	}
	.info_wrap .item .item_mark:before{
		content: '';
		-webkit-transform:scale(0.5);
		transform:scale(0.5);
		border:1px solid #ccc;
		position:absolute;
		top:-50%;
	    right:-50%;
	    bottom:-50%;
	    left:-50%;
	    border-radius: 5px;
	   
	}
	.item_star{
		
	}
	.item_star .star1{
		margin-top: 2px;
	}
	.item_grade{
		color: #ff6000;
		position: relative;
		top: -3px;
	}
	.item_sales{
		position: relative;
		top: -3px;
		left: 5px;
	}

	.item .item_condition1 b{
		color: #666;
		font-weight: normal!important;
		letter-spacing: 0px;
		
	}
	.item .item_condition2 b{
		color: #666;
		font-weight: normal!important;
		letter-spacing: 0px;
	}
	.privilege,.p1,.p2{
		width:100%;
		overflow: hidden;
	}
	.privilege{
		padding-top: 10px;
	}
	.p1,.p2{
		height: 28px;
	}
	.privilege .p1 .p1_logo{
		background-color: #f07373;
		display: inline-block;
		padding: 0px 3px;
		border-radius: 5px;
		color: #fff;
		
	}.privilege .p2 .p2_logo{
		background-color: #70bc46;
		display: inline-block;
		padding: 0px 3px;
		border-radius: 5px;
		color: #fff;
		
	}
</style>