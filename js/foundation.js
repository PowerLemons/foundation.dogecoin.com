$(document).ready(function() {
	$('#bottomPanel').click(function() {
		$("html, body").animate({ scrollTop: $(document).height() }, 1000);
	});
	$('.expandAll').click(function() {
		$('.panel-collapse').each(function() {
			if ($(this).hasClass('collapse')) {
				$(this).collapse('toggle');
			}
		});
	});
	$('.collapseAll').click(function() {
		$('.panel-collapse').each(function() {
			if ($(this).hasClass('in')) {
				$(this).collapse('toggle');
			}
		});
	});
	
	$('#missionLink').click(function() {
		$('html, body').animate({
			scrollTop: $('#missionStatement').offset().top - 75
		}, 500);
	});

	$('#listLink').click(function() {
		$('html, body').animate({
			scrollTop: $('#criteria').offset().top - 75
		}, 500);
	});
	
	$('#faqLink').click(function() {
		$('html, body').animate({
			scrollTop: $('#faq').offset().top - 75
		}, 500);
	});
	
	$('.toTop').click(function() {
		$('html, body').animate({scrollTop: 0}, 500);
	});
	
	
	$.ajaxSetup({
		async: false
	});
	
	$(".lookup").each(function() {
		address = $(this).data("address");
		lookup = $(this);
		$.getJSON("http://query.yahooapis.com/v1/public/yql?q=select%20p%20from%20html%20where%20url%20%3D%20'http%3A%2F%2Fdogechain.info%2Fchain%2FDogecoin%2Fq%2Faddressbalance%2F" + address + "'&format=json", function(data) {
			$(lookup).text(Math.round(data.query.results.body.p).toLocaleString());
		});
	});
	
	
	
	$('#addressTableDiv').click(function() {
		$("#addressTable").tablesorter();
	});
	
    $.tablesorter.addParser({ 
        id: 'dogeBalance', 
        is: function(s) { 
            return false; 
        }, 
        format: function(s) { 
            return s.replace(/,/g,"").replace(/ DOGE/,"").replace(/\*/,"");
        }, 
        type: 'numeric' 
    }); 
     
    $(function() { 
        $("#addressTable").tablesorter({ 
            headers: { 
                3: { 
                    sorter:'dogeBalance' 
                } 
            } 
        }); 
    }); 
});