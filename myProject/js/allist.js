class Page{
	constructor(){
		this.num = 20;
		this.url = "http://localhost/myproject/data/goods.json";
		this.index = 0;
		this.load();
		this.init();
	}
	load(){
		var that = this;
		$.ajax({
			type:"get",
			url:this.url,
			success:function(res){
				that.res = res;
				that.display();
				that.createPage();
			},
			dataType:"json"
		});
	}
	display(){
		var str = ""
		for(var i=this.num*this.index;i<this.num*this.index+this.num;i++){
			if(i<this.res.length){
				str += `<li class="goodsbox" data-id="${this.res[i].goodsId}">
						<a href="javascript:;">
							<img src="${this.res[i].src}"/>
						</a>
						<h4>${this.res[i].price}</h4>
						<a href="javascript:;">${this.res[i].name}</a>
						<em class="look">查看商品</em>
					</li>`
			}
		}
		$(".detail-img").html(str);
		this.storeCookie()
		
	}
	storeCookie(){
		var that = this;
		this.goods = []
		$(".alllist").on("click","em",function(){
			var goodsId = $(this).parent().attr("data-id");
			that.goods.push({
				id:goodsId
			})
			$.cookie("goods",JSON.stringify(that.goods));
			console.log($.cookie("goods"));
			location.href = "detail.html"
		})
	}
	createPage(){
		this.maxNum = Math.ceil(this.res.length/this.num);
		var str = ""
		for(var i=0;i<this.maxNum;i++){
			str += `<li>${i+1}</li>`
		}
		$(".pagelist").html(str)
		this.changeActive();
	}
	changeActive(){
		var ali = $(".pagelist").children("li");
		for(var i=0;i<ali.length;i++){
			ali[i].className = "";
		}
		ali[this.index].className = "self-active"
	}
	init(){
		var that = this;
		$(".btnR").on("click",function(){
			if(that.index == that.maxNum - 1){
				that.index = 0
			}else{
				that.index++
			}
			that.changeActive();
			that.display();
		});
		$(".btnL").on("click",function(){
			if(that.index == 0){
				that.index == that.maxNum - 1;
			}else{
				that.index--
			}
			that.changeActive();
			that.display();
		})
		$(".pagelist").on("click","li",function(){
			that.index = $(this).index()
			that.display();
			that.changeActive()
			
		})
	}
}
new Page();
