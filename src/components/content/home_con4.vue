<template>
	
  	<div class="con4">
  		<div class="con4_title">
  			<span class="title4">—&nbsp;品质优选&nbsp;—</span>
  			<span class="more">
  				<a href="#">更多&gt;</a>
  			</span>
  		</div>
  		<div class="con4_recommend">
  			<ul class="rec_wrap">
  				<li class="list4" v-for="item in items">
  					<dl class="recommend">
  						<dt class="company_img"><img :src="item.imgSrc" /></dt>
  						<dd class="dlist1">{{item.company}}</dd>
  						<dd class="dlist2">
  							<div :class="[{label_bd:true,col_active1:item.col_active,col_active2:!item.col_active} ]">{{item.label}}</div>
  						</dd>
  					</dl>
  				</li>
  			</ul>
  		</div>
  	</div>
  		
</template>

<script>
	export default{
		data(){
			return {
				items:[
					{imgSrc:"../../../static/img/con4_company1.png",company:"果腿儿鲜",label:"热销好店",col_active:0},
					{imgSrc:"../../../static/img/con4_company2.png",company:"北京麦当劳昌平区回龙观店",label:"大盘精选",col_active:1},
					{imgSrc:"../../../static/img/con4_company3.png",company:"果腿儿鲜",label:"大盘精选",col_active:1},
					{imgSrc:"../../../static/img/con4_company4.png",company:"果腿儿鲜",label:"大盘精选",col_active:1},
					{imgSrc:"../../../static/img/con4_company5.png",company:"果腿儿鲜",label:"热销好店",col_active:0},
					{imgSrc:"../../../static/img/con4_company6.png",company:"果腿儿鲜",label:"大盘精选",col_active:1},
					{imgSrc:"../../../static/img/con4_company7.png",company:"果腿儿鲜",label:"大盘精选",col_active:1},
					{imgSrc:"../../../static/img/con4_company8.png",company:"果腿儿鲜",label:"大盘精选",col_active:1}
				]
			}
		}
	}
</script>

<style scoped="scoped">
	.con4{
		width: 100%;
		overflow: hidden;
		background-color: #fff;
		margin-top: 10px;
		height: 383px;
	}
	.con4_title{
		position: relative;
		width: 100%;
		padding: 10px 0;
		overflow: hidden;
	}
	.con4_title .title4{
		font-size: 18px;
		font-weight: bold;
	}
	.more{
		position: absolute;
		right: 20px;
	}
	.more a{
		color: #666;
		font-size: 14px;
	}
	
	
	.con4_recommend,.rec_wrap,.recommend{
		width: 100%;
		padding-bottom: 15px;
		overflow: hidden;
	}
	
	.rec_wrap .list4{
		width: 25%;
		float: left;
		overflow: hidden;
	}
	.recommend .company_img img{
		width: 70px;
	}
	.recommend .dlist1{
		width: 100%;
		font-size: 18px;
		font-weight: bold;
		margin-top: 8px;
		white-space: nowrap;
		overflow: hidden;
		text-overflow:ellipsis;
		
	}
	.recommend .dlist2{
		width: 100%;
		font-size: 14px;
		margin-top: 5px;
	}
	.recommend .dlist2 .label_bd{
		width: 80%;
		margin: 0 auto;
		border-radius: 5px;
		/*color: #f49898;*/
	}
	.col_active1{
		color:#f49898;
		border: 1px solid #f49898;
	}
	.col_active2{
		color:#00abff;
		border: 1px solid #00abff;
		
	}
	
</style>