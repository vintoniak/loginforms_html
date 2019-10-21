$(document).ready(function(){
var button;


$('#myModal').on('show.bs.modal', function (event) {

	button = $(event.relatedTarget) // Button that triggered the modal

	var recipient = button.data('whatever') // Extract info from data-* attributes

	// If necessary, you could initiate an AJAX request here (and then do the updating in a callback).

	// Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
	
	var modal = $(this)

	modal.find('.modal-title').text('New subscrider ' + recipient)

	modal.find('.modal-body input').val(recipient)

})

$('#editbutton').on('click', function(){

	button[0].parentNode.children[0].innerText = $("#name_mod")[0].value;

	button[0].parentNode.children[2].innerText = $("#address_mod")[0].value;

	button[0].parentNode.children[3].innerText = $("#mail_mod")[0].value;

})
	

});


