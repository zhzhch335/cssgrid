$(document).ready(function(){
  $(".ycell").click(function(){  	
  	if($(this).css("border-top-width")=="0px"){
  		$(this).css("border","2px solid #0ff");
  		console.log($(this).css("border-top-width"));
  	}
  	else{
  		$(this).css("border","0px solid #0ff");
  		console.log($(this).css("border-top-width"));
  	}
  });
});