$(document).foundation();
$('.borderText').on('click',function(){
   $('.borderText').removeClass('active');
    $(this).addClass('active');
});
$("#blueText1").on('click', function(){
	
	$("#list1").removeClass('noDisplay');
	$("#blueText1").hide();
});
$("#blueText2").on('click', function(){
	
	$("#list1").addClass('noDisplay');
	$("#blueText2").hide();
	$("#blueText1").show();
});