<template>
	<div class="content">
  		<div class="con1">
  			<dl>
  				<dd class="item" v-for="item in items">
  					<router-link :to="{ name: item.name, params: { storeId: item.storeId }}">
  					<div class="con1_img">
  						<img class="imgSize" :src="item.imgsrc"/>
  						<!--<img :src="item.count" />-->
  						<!--利用require来处理图片路径-->
  						<!--<img class="imgSize" src="../../assets/icon1_02.png" />-->
  						<!--直接写路径也可显示，网上有的案例不可显示-->
  					</div>
  					<div class="con1_category">{{item.title}}</div>
  					</router-link>
  				</dd>
  				
  			</dl>
  		</div>
  	</div>
</template>

<script>
	export default{
		data(){
			return {
				
				items:[
		      	{
			      	name:'storeList',
			      	imgsrc:require('../../assets/img/con1_great2.jpeg'),
			      	title:'美食',
			      	imgUrl:'../../static/img/con1_great2.jpeg',
			      	storeId:'001'
		      	},
		      	{
			      	name:'storeList',
			      	imgsrc:require('../../assets/img/con1_great1.jpeg'),
			      	title:'甜品饮品',
			      	imgUrl:'../../static/img/con1_great1.jpeg',
			      	storeId:'002'
		      	},
		      	{
			      	name:'storeList',
			      	imgsrc:require('../../assets/img/con1_great3.jpeg'),
			      	title:'商超便利',
			      	imgUrl:'../../static/img/con1_great3.jpeg',
			      	storeId:'003'
		      	},
		      	{
			      	name:'storeList',
			      	imgsrc:require('../../assets/img/con1_great4.jpeg'),
			      	title:'预定早餐',
			      	imgUrl:'../../static/img/con1_great4.jpeg',
			      	storeId:'004'
		      	},
		      	{
		      		name:'storeList',
			      	imgsrc:require('../../assets/img/con1_great5.jpeg'),
			      	title:'果蔬生鲜',
			      	imgUrl:'../../static/img/con1_great5.jpeg',
			      	storeId:'005'
		      	},
		      	{
		      		name:'storeList',
		      		imgsrc:require('../../assets/img/con1_great6.jpeg'),
			      	title:'新店特惠',
			      	imgUrl:'../../static/img/con1_great6.jpeg',
			      	storeId:'006'
		      	},
		      	{
		      		name:'storeList',
		      		imgsrc:require('../../assets/img/con1_great7.jpeg'),
			      	title:'准时达',
			      	imgUrl:'../../static/img/con1_great7.jpeg',
			      	storeId:'007'
		      	},
		      	{
		      		name:'storeList',
		      		imgsrc:require('../../assets/img/con1_great8.jpeg'),
			      	title:'夜宵',
			      	imgUrl:'../../static/img/con1_great8.jpeg',
			      	storeId:'008'
		      	}
		      ]
			}
		}
	}
</script>

<style scoped="scoped">
	/*@defaultColor: #fff;*/
	.content{
		width: 100%;
		overflow: hidden;
		height: 150px;
	}
	.con1,dl{
		width: 100%;
		background-color:@defaultColor;
		height: 150px;
		
	}
	.item{
		width: 25%;
		float: left;
		height: 75px;
		line-height: 45px;
		color:@defaultColor;
	}
	.con1_img{
		height: 40px;
		padding-top: 6px;
	}
	.con1_category{
		height: 28px;
		line-height: 28px;
		font-size: 14px;
		color: #666666;
	}
	.imgSize{
		width: 40px;
	}
</style>