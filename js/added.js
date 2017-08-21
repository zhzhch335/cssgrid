$(document).ready(function() {
    // 点击彩色标签有青色边框
    $(".ycell,.rcell,.gcell").click(function() {
        $(".ycell,.rcell,.gcell,.cell").css("margin", "4px 2px 2px 2px");
        $(".ycell,.rcell,.gcell,.cell").css("border-width", "0");
        $(this).css("border", "2px solid #0ff");
        $(this).css("margin", "2px 0 0 0");
    });
    // 下方标签点击后内容的切换
    $("#notes").click(function() {
        $(".tagselected").removeClass("tagselected");
        $(this).addClass("tagselected");
        $(".innerline").css("display","none");
        $("#innerline1").css("display","block");
    });
    $("#issues").click(function() {
        $(".tagselected").removeClass("tagselected");
        $(this).addClass("tagselected");
        $(".innerline").css("display","none");
        $("#innerline2").css("display","block");
    });
    $("#resources").click(function() {
        $(".tagselected").removeClass("tagselected");
        $(this).addClass("tagselected");
        $(".innerline").css("display","none");
        $("#innerline3").css("display","block");
    });
    $("#feedback").click(function() {
        $(".tagselected").removeClass("tagselected");
        $(this).addClass("tagselected");
        $(".innerline").css("display","none");
        $("#innerline4").css("display","block");
    });
    // 鼠标划过标签后下方文字的效果
    $(".numtag1").mouseenter(function() {
        $(".texttag1").addClass("texthighlight");
    }).mouseleave(function(){
    	$(".texttag1").removeClass("texthighlight");
    });
    $(".numtag2").mouseenter(function() {
        $(".texttag2").addClass("texthighlight");
    }).mouseleave(function(){
    	$(".texttag2").removeClass("texthighlight");
    });
    $(".numtag4").mouseenter(function() {
        $(".texttag4").addClass("texthighlight");
    }).mouseleave(function(){
    	$(".texttag4").removeClass("texthighlight");
    });
    // 鼠标划过下方文字后彩色标签的效果
    $(".texttag1").mouseenter(function() {
    	$(this).css("border-bottom","1px solid #c832f7");
    	$(".numtag1").css("border", "2px solid #c832f7");
    	$(".numtag1").css("margin", "0 0 0 0");
    }).mouseleave(function(){
    	$(this).css("border-bottom","0px solid #c832f7");
    	$(".ycell,.rcell,.gcell,.cell").css("margin", "4px 2px 2px 2px");
        $(".ycell,.rcell,.gcell,.cell").css("border-width", "0");
    });
    $(".texttag2").mouseenter(function() {
    	$(this).css("border-bottom","1px solid #c832f7");
    	$(".numtag2").css("border", "2px solid #c832f7");
    	$(".numtag2").css("margin", "-1px 0 0 0");
    }).mouseleave(function(){
    	$(this).css("border-bottom","0px solid #c832f7");
    	$(".ycell,.rcell,.gcell,.cell").css("margin", "4px 2px 2px 2px");
        $(".ycell,.rcell,.gcell,.cell").css("border-width", "0");
    });
    $(".texttag4").mouseenter(function() {
    	$(this).css("border-bottom","1px solid #c832f7");
    	$(".numtag4").css("border", "2px solid #c832f7");
    	$(".numtag4").css("margin", "-2px 0 0 0");
    }).mouseleave(function(){
    	$(this).css("border-bottom","0px solid #c832f7");
    	$(".ycell,.rcell,.gcell,.cell").css("margin", "4px 2px 2px 2px");
        $(".ycell,.rcell,.gcell,.cell").css("border-width", "0");
    });
    // var arr = [1,2,4];
    // for (var i in arr) {
    //     $(".numtag" + arr[i]).mouseenter(function() {
    //     	console.log(i);
    //         $(".texttag" + arr[i]).addClass("texthighlight");
    //         console.log(i);
    //     })
    // }
});