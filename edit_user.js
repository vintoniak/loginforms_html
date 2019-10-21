

$(document).ready(function(){
	
	$('#editbutton').on('click', function(){
		
		var value1, value2, value3;
		
		value1 = $('#name_mod').val();
		$('#name1').html(value1);
		
		value2 = $('#address_mod').val();
		$('#address1').html(value2);
		
		value3 = $('#mail_mod').val();
		$('#mail1').html(value3);
	});
});


