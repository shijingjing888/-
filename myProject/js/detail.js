class Detail{
	constructor(){
		this.url = "http://localhost/myProject/data/goods.json";
		this.load()
	}
	load(){
		var that = this;
		$.ajax({
			type:"get",
			url:this.url,
			success:function(res){
				that.res = res;
				that.getCookie();
			},
			dataType:"json"
		});
	}
	getCookie(){
		this.goods = JSON.parse($.cookie("goods"));
		this.display();
	}
	display(){
		var str1 = "";
		var str2 = "";
		for(var i=0;i<this.res.length;i++){
			for(var j=0;j<this.goods.length;j++){
				if(this.res[i].goodsId == this.goods[j].id){
					str1 =`<img src="${this.res[i].src}"/>
							<span></span>` ;
							
					str2 =`<ul>
								<li><img src="${this.res[i].detail1}"/></li>
								<li><img src="${this.res[i].detail2}"/></li>
								<li><img src="${this.res[i].detail3}"/></li>
								<li><img src="${this.res[i].detail4}"/></li>
							</ul>`;
					console.log(str1,str2);
//					str4 = `<img src="${this.res[i].detail1}"/>
//							<img src="${this.res[i].detail2}"/>
//							<img src="${this.res[i].detail3}"/>
//							<img src="${this.res[i].detail4}"/>`
//					
//					str5 = `<img src="${this.res[i].src}"/>`
//					str6 = `<span>${this.res[i].name}</span>`
//					str7 = `<p data-id="${this.res[i].goodsId}" class="keys">${this.res[i].name}</p>`
				}
			}
		}
		$(".imgbox").html(str1);
		console.log($(".imgbox").html(str1));
//		$(".bigbox").html(str5);
//		$(".price-det").html(str2);
		$(".imglist").html(str2);
		console.log($(".imglist").html(str2));
//		$(".good-sug").html(str4);
//		$(".tell").html(str6);
//		$(".tell-tit").html(str7);
		this.init();
		this.keepCookie();
	}
	init(){
		$(".imglist").on("click","li",function(){
			var newsrc = $(this).find("img").attr("src")
			$(".imgbox").find("img").attr("src",newsrc)
			$(".bigbox").find("img").attr("src",newsrc)
		})
		this.blow()
	}
	blow(){
		$(".imgbox").hover(function(){
			$(".imgbox span").css({display:"block"});
			$(".bigbox").css({display:"block"})
		},function(){
			$(".imgbox span").css({display:"none"});
			$(".bigbox").css({display:"none"})
		});
		$(".imgbox").on("mousemove",function(event){
			var l = event.pageX - $(this).offset().left - $(".imgbox span").width()/2
			var t = event.pageY - $(this).offset().top - $(".imgbox span").height()/2
			if(l<0) l=0;
			if(t<0) t=0;
			if(l > $(".imgbox").width()-$(".imgbox span").width()){
				l = $(".imgbox").width()-$(".imgbox span").width()
			}
			if(t > $(".imgbox").height()-$(".imgbox span").height()){
				t = $(".imgbox").height()-$(".imgbox span").height()
			}
			$(".imgbox span").css({
				left:l,
				top:t
			})
			var x = l/($(".imgbox").width()-$(".imgbox span").width())
			var y = t/($(".imgbox").height()-$(".imgbox span").height())
			$(".bigbox img").css({
				left:-($(".bigbox img").width()-$(".bigbox").width()) * x,
				top:-($(".bigbox img").height()-$(".bigbox").height()) * y
			})
		})
	}
	keepCookie(){
		var that =this;
		this.cars = []
		$(".addcar").on("click",function(){
			var carsid = $(this).parent().parent().find(".keys").attr("data-id");
			if(!$.cookie("cars")){
//				第一次存
				that.cars.push({
					id:carsid,
					num:1
				})
				$.cookie("cars",JSON.stringify(that.cars));
			}else{
//				不是第一次存
				that.cars = JSON.parse($.cookie("cars"));
				var onOff = false;
				for(var i=0;i<that.cars.length;i++){
					if(that.cars[i].id == carsid){
						that.cars[i].num++
						onOff = true;
					}
				}
				if(!onOff){
					that.cars.push({
						id:carsid,
						num:1
					})
				}
				$.cookie("cars",JSON.stringify(that.cars));
			}
//			console.log($.cookie("cars"))
			location.href = "car.html"
		})
		
	}
}
new Detail();
