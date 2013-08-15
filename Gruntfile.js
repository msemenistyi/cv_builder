module.exports = function (grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		javascripts: ['client/javascripts/**'],
		server_js: ['*.js'],
		styles: ['client/stylesheets/**'],
		jade: ['client/index.jade'],
		jshint: {
			client: ['<%= javascripts %>'],
			server_js: ['<%= server_js %>'],
			options: {
				sub: true,
				smarttabs: true
			}
		},
		jade: {
			compile: {
				options: {
					data: {
						debug: false
					}
				},
				files: {
					'public/index.html': 'client/index.jade'
				}
			}
		},
		stylus: {
			compile: {
				options: {
					'include css': true,
					'compress': true
				},
				files: {
					'public/stylesheets/style.css': ['client/stylesheets/*.styl']
				}
			}
		},
		requirejs: {
			compile: {
				options: {
					baseUrl: "client/javascripts",
					mainConfigFile: "main.js",
					out: "public/javascripts/app.js"
				}
			}
		},
		watch:{
			js: {
				files: ['<%= javascripts %>'],
				tasks: ['javascripts'] 
			},
			jade: {
				files: ['<%= jade %>'],
				tasks: ['jade'] 
			},
			stylus: {
				files: ['<%= stylesheets %>'],
				tasks: ['stylus'] 
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-jade');
	grunt.loadNpmTasks('grunt-contrib-requirejs');
	grunt.loadNpmTasks('grunt-contrib-stylus');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTasks('default', ['jade', 'stylus','requirejs']);
};