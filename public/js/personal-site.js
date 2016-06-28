$(document).ready(function() {
	$('.simon').click(function() {
		window.location = 'simon-iframe.html';
	});

	$('.calculator').click(function() {
		window.location = 'calculator-iframe.html';
	});

	$('.weather-map').click(function() {
		window.location = 'weather-map-iframe.html';
	});

	$('#contact').click(function() {
		window.location = 'contact.html';
		console.log("hi");
	});

	$('#resume').click(function() {
		window.location = '#';
	});
});