$(".left").hover(function(){
	$(".left").find("ul").stop().slideDown();
},function(){
	$(".left").find("ul").stop().slideUp();
})

$(".left").find("li").hover(function(){
	$(".left").find("li").eq($(this).index()).animate({},100).html("集团官网");
},function(){
	$(".left").find("li").eq($(this).index()).animate({},100).html("YO!HOOD");
});

$(".right").children().eq(5).hover(function(){
	$(".right").find("li").eq(5).show().css({
		background:"#ccc",
		height:"32px",
		overflow:"visible",
		paddingLeft:"10px"
	});
},function(){
	$(".right").find("li").css({
		background:"#f4f4f4"
	}).eq(5).find("p").slideUp();
})

$("#fushi").hover(function(){
	$(".yifu").slideDown(1000).stop().animate({},1000).find(".yifu-border").css({
		borderBottom:"1px solid #000"
	}).end().find(".yifu-color").css({
		color:"red"
	});
},function(){
	$(".yifu").slideUp().animate({},1000);
})
$("#xie").hover(function(){
	$(".xie").slideDown(1000).stop().animate({},1000).find(".xiezi-border").css({
		borderBottom:"1px solid #000"
	}).end().find(".xiezi-color").css({
		color:"red"
	});
},function(){
	$(".xie").slideUp().animate({},1000);
})
$("#bag").hover(function(){
	$(".bag").slideDown(1000).stop().animate({},1000).find(".bag-border").css({
		borderBottom:"1px solid #000"
	}).end().find(".bag-color").css({
		color:"red"
	});
},function(){
	$(".bag").slideUp().animate({},1000);
})
$("#peishi").hover(function(){
	$(".peishi").slideDown(1000).stop().animate({},1000).find(".peishi-border").css({
		borderBottom:"1px solid #000"
	}).end().find(".peishi-color").css({
		color:"red"
	});
},function(){
	$(".peishi").slideUp().animate({},1000);
})

$(".dire").on("mouseenter","li",function(){
	$(".dire").find("li").eq($(this).index()).find("img").eq(0).css({display:"none"})
	$(".dire").find("li").eq($(this).index()).find("img").eq(1).css({display:"block"})
})
$(".dire").on("mouseleave","li",function(){
	$(".dire").find("li").eq($(this).index()).find("img").eq(0).css({display:"block"})
	$(".dire").find("li").eq($(this).index()).find("img").eq(1).css({display:"none"})
})