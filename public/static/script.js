
	$( '[data-fancybox="images"]' ).fancybox({
		caption : function( instance, item ) {
			return $(this).find('figcaption').html(); 

		}
	});

	