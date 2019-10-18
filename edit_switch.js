

$(document).ready(function(){
	$('#editbutton').on('click', function(){
		var value1;
		
		value1 = $('#description_mod').val();
		$('#description').html(value1);
		
		value1 = $('#position_mod').val();
		$('#position').html(value1);
		
		value1 = $('#edition_mod').val();
		$('#edition').html(value1);
		
		value1 = $('#audit_mod').val();
		$('#audit').html(value1);
		
		value1 = $('#ip_mod').val();
		$('#ip').html(value1);
		
		value1 = $('#mac_mod').val();
		$('#mac').html(value1);
		
		value1 = $('#hlvlan_mod').val();
		$('#hlvlan').html(value1);
		
		value1 = $('#lovlan_mod').val();
		$('#lovlan').html(value1);
		
		value1 = $('#adress_mod').val();
		$('#adress').html(value1);
	});
});