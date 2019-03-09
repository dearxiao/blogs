   function btn(allpage,curr){
	 	list(allpage,curr)
	 	$(".pbtn").on("click",function(){
	 		plist($(this).attr("datapage"));
	 	});
	 	$(".pages_num a").on("click",function(){
	 		plist($(this).attr("datapage"));
	 	});
	}; 	
 	function list(allpage,curr){
 	 var showpage = 9;
 	 var html = "";
 	 var halfpage = parseInt(showpage/2);
 	 html += '<li  class="pages_one">第<span>'+curr+'</span>页/共<span>'+allpage +'</span>页</li>';
 	 if(parseInt(curr) == 1){
 	 	html += '<li class="firstpag" datapage="1">首页</li><li class="prevp">上一页</li>'
 	 }else{
 	 	html += '<li class="firstpag pbtn" datapage="1">首页</li><li class="prevp pbtn" datapage="'+ (parseInt(curr)-1) +'">上一页</li>'
 	 };
 	 html += '<li class="pages_num">';
 	 if(allpage <= showpage){
 	 	for(var i=0;i<allpage;i++){
 	 		if ((i+1)  == curr){
 	 			 html+='<a class="active_p noclick" datapage="'+ (i+1) +'">'+ (i+1)  +'</a>'
 	 		}else{
 	 		 html+='<a datapage='+ (i+1)  +'>'+ (i+1)  +'</a>'
 	 		} 	 		
 	 	} 	 	
 	 }else{
 	 	if (curr <= halfpage){
           	for(var i=0;i<showpage;i++){
           		if((i+1)==curr){
           			html +='<a class="active_p noclick" datapage="'+ (i+1) + '">' + (i+1) +'</a>'
           		}else{
           			html +='<a datapage="'+ (i+1) + '">' + (i+1) +'</a>'
           		}
           	}           	
        }else{
        	if(parseInt(curr) + halfpage < allpage){
        		var first = parseInt(curr) - halfpage;
        		var last  = parseInt(curr) + halfpage;
        		for(var i=first;i<=last;i++){
        			if(parseInt(curr) == i){
        				html +='<a class="active_p noclick" datapage="'+ i + '">' + i +'</a>'
        			}else{
           			    html +='<a datapage="'+ i + '">' + i +'</a>'
           		    }
        		}        		
        	}else{
        		var first = allpage - showpage + 1;
        		var last  = parseInt(allpage) + 1;
        		for(var i=first;i<last;i++){
        			if(parseInt(curr) == i){
        				html +='<a class="active_p noclick" datapage="'+ i + '">' + i +'</a>'
        			}else{
           			    html +='<a datapage="'+ i + '">' + i +'</a>'
           		    }
        		}
        	}
 	 		
 	 	}
 	 	
 	 }; 	 
 	 if(curr == allpage){
 	 	html+='</li><li class="nextp noclick">下一页</li><li class="lastpag noclick" datapage="'+ allpage +'">尾页</li>';
 	 }else{
 	 	html+='</li><li class="nextp pbtn" datapage="'+ (parseInt(curr)+1) +'">下一页</li><li class="lastpag pbtn" datapage='+ allpage +'>尾页</li>';
 	 }
 	 $(".pages_box").html(html);
  }
 
