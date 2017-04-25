(function() {
	"use strict";

	$(function() {
		initAnimation();
		initCharts();
		initWaypoints();
		initNavbar();
	});

	function initAnimation() {
		new WOW().init();
	}

	function initCharts() {
		var waypoint = new Waypoint({
			element: $('.skills-section'),
			handler: function() {
				var options = {
				  	useEasing : true,
					separator : ''
				};
				
				$('.chart').easyPieChart({
					size: '150',
					lineWidth: 2,
					lineCap: 'square',
					trackColor: '',
					barColor: '#f8f8f8',
					scaleColor: false,
					easing: 'easeOutBack',
					animate: {
						duration: 1600,
						enabled: true 
					}
				});

				this.destroy();
			},
			offset: '80%',
		});
	}

	function initWaypoints() {
		$('#site-nav').localScroll({
			target:'body'
		});
	}

	function initNavbar() {
		function applyTransparency() {
			if ($(document).scrollTop() > 50) {
				$('#site-nav').removeClass('nav-transparent');
				$('#site-nav .navbar-brand img').attr('src', '/assets/images/logo.svg');
			} else {
				$('#site-nav').addClass('nav-transparent');
				$('#site-nav .navbar-brand img').attr('src', '/assets/images/logo-white.png');
			}
		}

		$(window).scroll(function() {
			applyTransparency();
		});

		applyTransparency();
	}
})();