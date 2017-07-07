$(document).ready(function() {
	console.log ("we're ready!");
});

$('table').click(function(event){
	console.log(event);
});


var count = 0;

$('.box').click(function(){
	count++;
	if(count % 2 !== 0){
		$(this).text("X").css("background-color", "lightblue");
	}else{
		$(this).text("O").css("background-color", "lightgreen");
	}
	$("h2").toggle();
	$(this).css("pointer-events", "none");
})

/*-------------vvvv-----constructors--------vvvv-----------------*/
/**/
/*gameboard = {
	bgcolor: 
	Xmarker:
	Omarker:
}*/




/*var $arr = ["X","O","X","O","X","O","X","O","X"];
$('.box').click(function(){
	for(var i = 0; i < $arr.length; i++){
		$(this).text($arr[i]);
	}
})*/
/*$('.box').click(function(){
	$(this).html($(this).html() == 'X' ? 'O' : 'X');
	if ($(this).text()==="X"){
		$(this).css("background-color", "red");
	}else {
		$(this).css("background-color", "green");
	}
});*/

$('#reset').click(function(){
	$('.box').text('').css("background-color", "lightgrey");
	count = 0;
	$('h2').css("display", "block");
	$(".startHide").css("display","none");
});