$(document).ready(function() {
	$('#bottomPanel').click(function() {
		$("html, body").animate({ scrollTop: $(document).height() }, 1000);
	});
	$('#expandAll').click(function() {
		$('.panel-collapse').each(function() {
			if ($(this).hasClass('collapse')) {
				$(this).collapse('toggle');
			}
		});
	});
	$('#collapseAll').click(function() {
		$('.panel-collapse').each(function() {
			if ($(this).hasClass('in')) {
				$(this).collapse('toggle');
			}
		});
	});	
});