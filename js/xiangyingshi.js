$(function() {
	var add = 0.05//(96-16)/(1920-320)
	var htmlWidth = $("html").width();
	var fontSize = (htmlWidth - 320) * add + 16;
	$("html").css({
		"font-size": fontSize
	})
	$(window).resize(function() {
		var add = 0.05 //(96-16)/(1920-320)
		var htmlWidth = $("html").width();
		var fontSize = (htmlWidth - 320) * add + 16;
		$("html").css({
			"font-size": fontSize
		})
	})
	//回到顶部
	//$(window).scroll(function(){0<$(window).scrollTop()?"4.5rem"!=$("#cbbfixed").css("bottom")&&$("#cbbfixed").css("bottom","4.5rem"):"-6rem"!=$("#cbbfixed").css("bottom")&&$("#cbbfixed").css("bottom","-6rem")});
	//$("#gotop").click(function(){$("html,body").stop().animate({scrollTop:0},400);$(this).blur();return false});
	//给文档添加手指点击，一动，抬起,取消事件
	document.addEventListener("touchstart",function(){},true);
	document.addEventListener("touchmove",function(){},true);
	document.addEventListener("touchend",function(){},true);
	document.addEventListener("touchcancel",function(){},true);
})

