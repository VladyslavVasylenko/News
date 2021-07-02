'use strict';

$(function() {
	let tab = $('#tabs .tabs-items > div'); 
	tab.hide().filter(':first').show(); 
	
	$('#tabs .link').click(function(){
		tab.hide(); 
		tab.filter(this.hash).show(); 
		$('#tabs .link').removeClass('active');
		$(this).addClass('active');
		return false;
	}).filter(':first').click();

	$('.tabs-target').click(function(){
		$('#tabs .link[href=' + $(this).data('id')+ ']').click();
	});
});