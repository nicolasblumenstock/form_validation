$(document).ready(function(){
	$('.sign-up-form').submit(function(event){
		event.preventDefault();
		console.log('submitted');
		$('input').each(function(){
			var currentInputTagId = $(this).attr('id');
			// console.log(currentInputTagId);
			// target the corresponding error div for this input tag
			var errorDivClassName = '.' + currentInputTagId + "-error";
			// console.log(errorDivClassName)
			if($(this).val() == ''){
				$(errorDivClassName).html('field cannot be empty');
			}
		});

		var password = $('#password').val();
		var password2 = $('#password2').val();
		if(password !== password2){
			$('.password-error').html('Your passwords do not match!');
		}
		//force user to use a number in the password
		//keep track of number found
		var numFound = false;
		for(let i = 0; i < password.length; i++){
			if(isNaN(Number(password[i]))){

			}else{
				numFound = true;
			};
		};
		if(!numFound){
			$('.password-error').html('Your password must contain ONE number.')
		}
	});
});


