$(document).ready(function(){

	$('.sign-up-form').validate({
		rules: {
			name: {
				required :true
			},
			email: {
				required: true,
				email: true
			},
			password: {
				minlenght: 6,
				required: true
			},
			confirmation: {
				minlenght: 6,
				equalTo: "#password"
			},
			success: function(element) {
				element
				.text('OK!').addClass('valid')
		}
	});
});



