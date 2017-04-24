module.exports = function(grunt) {

	// Project configuration.
	grunt.initConfig({
		uglify: {
			vendor: {
				options: {
					preserveComments: false
				},
				files: {
					'dist/vendor.min.js' : [
						'bower_components/jquery/dist/jquery.min.js',
						'bower_components/bootstrap/dist/js/bootstrap.min.js',
						'bower_components/jQuery-Parallax/scripts/jquery.localscroll-1.2.7.min.js',
						'bower_components/jQuery-Parallax/scripts/jquery.scrollTo-1.4.2.min.js',
						'bower_components/jQuery-Parallax/scripts/jquery.parallax-1.1.3.min.js',
						'bower_components/wow/dist/wow.min.js',
						'bower_components/jquery.easy-pie-chart/dist/jquery.easypiechart.min.js',
						'bower_components/waypoints/lib/jquery.waypoints.min.js'
					]
				}
			},
			app: {
				options: {
					preserveComments: false
				},
				files: {
					'dist/app.min.js' : [
						'assets/js/init.js'
					]
				}
			}
		},
		cssmin: {
			vendor: {
				options: {
					shorthandCompacting: false,
					roundingPrecision: -1,
					keepSpecialComments: 0,
					noAdvanced: true,
					rebase: true
				},
				files: {
					'dist/vendor.min.css': [
						'bower_components/bootstrap/dist/css/bootstrap.css', 
						'bower_components/animate.css/animate.css',
						'bower_components/hover/css/hover.css',
						'bower_components/jQuery-Parallax/style.css'
					]
				}
			},
			app: {
				options: {
					shorthandCompacting: false,
					roundingPrecision: -1,
					keepSpecialComments: 0,
					noAdvanced: true,
					rebase: true
				},
				files: {
					'dist/app.min.css': [
						'assets/css/main.css'
					]
				}
			}
		},
		sass: {
			options: {
				sourceMap: true
			},
			dist: {
				files: {
					'assets/css/main.css': 'assets/css/main.scss'
				}
			}
		},
		watch: {
			js: {
                files: [
					"assets/**/*.js"
                ],
                tasks: ["uglify:app"],
                options: {
                    event: ["all"]
                }
            },
			sass: {
				files: [
                    "assets/**/*.scss"
                ],
                tasks: ["sass", "cssmin"],
                options: {
                    event: ["all"]
                }
			}
		},
	});

	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-sass');

	grunt.registerTask('default', ['uglify', 'sass', 'cssmin']);
};