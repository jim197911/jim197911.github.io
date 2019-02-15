jQuery(document).ready(function($){
var h=document;
var l = h.body;
var p = h.documentElement;
//var b = ga();
var my_link =location.href;
my_ja_function = function(a) {
	a = a.getElementsByTagName("script");
	for ( var b = a.length - 1; b >= 0; b--) {
		var c = a[b];
		c.parentNode.removeChild(c)
	}
}
my_M_function = function(a, b) {
	for ( var c in a)
		if (a.hasOwnProperty(c))
			b[c] = a[c]
}
my_w_function = function(a, b, c) {
				a = h.createElement(a);
				my_M_function(b, a);
				my_M_function(c, a.style);
				return a
			}

jQuery.fn.save_data=function(content){
	var url=wp_copy.url+'/wp-copy-ajax.php?my_task=add';
	var nonce=wp_copy.nonce;
	var data='nonce='+nonce;
	data+='&link='+my_link;
	if(wp_copy.save_content)data+='&content='+content;
	
		$.ajax({
		url:url,
		async:true,
		data:data,
		type:"POST",
		success:function(html){
	}
	});
}
	var k=1;
	var mouse_down=1;
	var ajax_send=0;
	
	if(wp_copy.ex==0){
	$("body").bind("copy",function(event){
		//if(event.target.type)alert('Type'+event.target.type);
		if(event.target.type&&(event.target.type=='text'||event.target.type=='textarea')){
			//alert('Type '+event.target.type);
	return ;
	}
		//alert(this.id+" "+this.name);	
		if(mouse_down){
			var f,e;
			f = my_w_function("div", {}, {
				overflow : "hidden",
				color : "#000000",
				backgroundColor : "transparent",
				textAlign : "left",
				textDecoration : "none",
				border : "none"
			});
			C=false;
			if (!h.selection || !h.selection.createRange) {
				a = getSelection();
				if(!ajax_send){
				ajax_send=1;
				$.fn.save_data(a.toString());
				}
				if (a.toString())
					if (typeof a.setBaseAndExtent != "undefined") {
						//alert('Second if');
						var g = a.getRangeAt(0);
						b = my_w_function("span", {
							innerHTML : ""
						});
						
						b.innerHTML += "<br/><br/>"+wp_copy.tag+" <a href=\""+my_link+"\">"+my_link+"</a>";
						f.appendChild(g.cloneContents())
						f.appendChild(b);
						
						f.style.width = 0.1;
						f.style.height = 0.1;
						f.style.position = "absolute";
						f.style.top = "-1000px";
						f.style.left = "-1001px";
						f.appendChild(h.createElement("br"));
						b = f.innerText.length;
						l.insertBefore(f, l.firstChild);
						if (f.innerText.length != b)
							f.style.overflow = "";
						a.selectAllChildren(f);
						setTimeout(function() {
							f.parentNode.removeChild(f);
							getSelection().setBaseAndExtent(
									g.startContainer, g.startOffset,
									g.endContainer, g.endOffset);
							C = false
						}, 0);
					}else {
						//alert("second if else");
						e = my_w_function("div", {}, {
							height : 0,
							position : "absolute",
							top : "-1000px"
						});
						e.innerHTML = "<br>";
						//if (i.t) {
							//l.insertBefore(e, l.firstChild);
							l.appendChild(e);
							f.innerHTML = "<br><br>"+wp_copy.tag+" <a href=\""+my_link+"\">"+my_link+"</a>";
							e.appendChild(f);
							b = h.createRange();
							b.selectNode(f);
							a.addRange(b);
							window.setTimeout(function() {
								e.parentNode.removeChild(e);
								C = false
							}, 0)
					}
			}else {
				//alert("Fisrt if else");
				var k = p.scrollLeft || l.scrollLeft, o = p.scrollTop
				|| l.scrollTop;
		e = my_w_function("div", {}, {
			overflow : "hidden",
			position : "absolute",
			left : k + 20 + "px",
			top : o + 20 + "px",
			width : "1px",
			height : "1px"
		});
		l.insertBefore(e, l.firstChild);
		var j = h.selection.createRange();
		f.innerHTML =j.htmlText+"<br><br>"+wp_copy.tag+" <a href=\""+my_link+"\">"+my_link+"</a>";
		if(!ajax_send){
			ajax_send=1;
			$.fn.save_data(j.htmlText);
			}
		//alert(f.innerHTML);
		my_ja_function(f);
		//alert(f.innerHTML);
		e.appendChild(h.createElement("br"));
		e.appendChild(f);
		b = l.createTextRange();
		b.moveToElementText(f);
		b.select();
		setTimeout(function() {
			l.removeChild(e);
			if (j.text != "") {
				j.select();
				p.scrollLeft = k;
				l.scrollLeft = k;
				p.scrollTop = o;
				l.scrollTop = o
			}
			C = false
		}, 0);
	}
	if(ajax_send)ajax_send=0;		
	//return true	
			}
		
		//mouse_down=0;
	});
	/*
	$("*").mousedown(function(event){
		if(event.which==1)
		mouse_down=1;
	      //$(this).append('');
	    });
	*/
}	}
);
