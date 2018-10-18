$.ajax({
			url:"http://localhost/myProject/data/item.json",
			success:function(res){
				var str="";
				for(var i=0;i<res.length;i++){
					str+=`<li>
						<a href="product.html"><img src="${res[i].src}"></a>
					</li>`;
				}
				$(".item").children("ul").html(str);
			}
		});

$.ajax({
			url:"http://localhost/myProject/data/brand.json",
			success:function(res){
				var str="";
				for(var i=0;i<res.length;i++){
					str+=`<li>
						<a href="product.html"><img src="${res[i].src}"></a>
					</li>`;
				}
				$(".brand").children("ul").html(str);
			}
	});
	
$.ajax({
			url:"http://localhost/myProject/data/goods.json",
			success:function(res){
				var str="";
				for(var i=1;i<res.length;i++){
					str+=`<div class="box" data-id="${this.res[i].goodsId}">
						<img src="${this.res[i].src}">
						<p>${this.res[i].dir}</p>
						<span>${this.res[i].pri}</span>
						<em>添加购物车</em>
					</div>`;
				}
				$(".dire").html(str);
			}
	});
	
$.ajax({
			url:"http://localhost/myProject/data/goods-cont.json",
			success:function(res){
				var str="";
				for(var i=0;i<res.length;i++){
					str+=`<li>
						<img src="${res[i].src}">
						<p>${res[i].dir}</p>
						<span>${res[i].pri}</span>
					</li>`;
				}
				$(".cont").html(str);
			}
	});
	
//$.ajax({
//			url:"http://localhost/myProject/data/goods.json",
//			success:function(res){
//				var str="";
//				for(var i=0;i<res.length;i++){
//					str+=`<li>
//						<img src="${res[i].src}">
//						<p>${res[i].dir}</p>
//						<span>${res[i].pri}</span>
//					</li>`;
//				}
//				$(".detail-left").html(str);
//			}
//	});