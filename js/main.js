(function($) {
	

	var contentWayPoint = function() {
		var i = 0;
		$('.element-animate').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('element-animated') ) {
				
				i++;

				$(this.element).addClass('item-animate');
				setTimeout(function(){

					$('body .element-animate.item-animate').each(function(k){
						var el = $(this);
						setTimeout( function () {
							var effect = el.data('animate-effect');
							if ( effect === 'fadeIn') {
								el.addClass('fadeIn element-animated');
							} else if ( effect === 'fadeInLeft') {
								el.addClass('fadeInLeft element-animated');
							} else if ( effect === 'fadeInRight') {
								el.addClass('fadeInRight element-animated');
							} else {
								el.addClass('fadeInUp element-animated');
							}
							el.removeClass('item-animate');
						},  k * 100);
					});
					
				}, 100);
				
			}

		} , { offset: '95%' } );
	};
	contentWayPoint();
	
	$('.search-switch').on('click', function() {
		$('.search-model').fadeIn(400);
	});

	$('.search-close-switch').on('click', function() {
		$('.search-model').fadeOut(400,function(){
			$('#search-input').val('');
		});
	});

	$('#search_btn').on('click', function(e){
		e.preventDefault();
		
		let search_value = document.getElementById('search_field_elem').value;

		if (search_value === 'c++'){
			window.location.href = 'C++ Turtorial Page.html';
		} else if (search_value === 'java'){
			window.location.href = 'Java Turtorial Page.html';
		} else if (search_value === 'python'){
			window.location.href = 'Python Turtorial Page.html';
		} else if (search_value === 'javascript'){
			window.location.href = 'JavaScript Turtorial Page.html';
		} else if (search_value === 'php'){
			window.location.href = 'Php Turtorial.html';
		} else if (search_value === 'sql'){
			window.location.href = 'Sql Turtorial.html';
		} else {
			window.location.href = '404 error.html';
		}
	});

})(jQuery);