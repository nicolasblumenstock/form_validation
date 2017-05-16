$(document).ready(function(){
	$('.application').submit(function(event){
		event.preventDefault();
		$('input').each(function(){
			var currentInput = $(this).attr('data-set');
			var errorClass = '.' + currentInput + '-error';
			if ($(this).val() == ''){
				$(errorClass).html('mandatory field');
			}
		})
	})
})