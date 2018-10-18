$.ajax({
			url:"http://localhost/myProject/data/item.json",
			success:function(res){
				var str="";
				for(var i=0;i<res.length;i++){
					str+=`<li>
						<a href="list.html"><img src="${res[i].src}"></a>
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
						<a href="list.html"><img src="${res[i].src}"></a>
					</li>`;
				}
				$(".brand").children("ul").html(str);
			}
	});
	
$.ajax({
			url:"http://localhost/myProject/data/goods.json",
			success:function(res){
				var str="";
				for(var i=0;i<res.length;i++){
					str+=`<div class="box" data-id="${res[i].goodsId}">
						<img src="${res[i].src}">
						<p>${res[i].dir}</p>
						<span>${res[i].pri}</span>
						<a href="cars.html"><em>添加购物车</em></a>
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