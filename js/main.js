$( document ).ready(function() {

	$('.navbar [href^=#]').click(function (e) {
	  e.preventDefault();
	  var div = $(this).attr('href');
	  $("html, body").animate({
	    scrollTop: $(div).position().top
	  }, "slow");
	});

	$('#welcome [href^=#]').click(function (e) {
	  e.preventDefault();
	  var div = $(this).attr('href');
	  $("html, body").animate({
	    scrollTop: $(div).position().top
	  }, "slow");
	});


	// Set carousel options
	$('.carousel').carousel({
	  interval: 6500 // 6.5 seconds vs. default 5
	});

});

