$(".listLeft").children("li").hover(function(){
	$(".listLeft").find("ul").eq(($(this).index()-1)).css({display:"block"})
},function(){
	$(".listLeft").find("ul").eq(($(this).index()-1)).css({display:"none"})
})