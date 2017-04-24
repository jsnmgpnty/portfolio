(function() {
	"use strict";

	$(function() {
		initAnimation();
		initCharts();
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
})();