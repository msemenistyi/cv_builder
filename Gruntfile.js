module.exports = function (grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		javascripts: ['client/javascripts/components/**'],
		server_js: ['*.js'],
		styles: ['client/stylesheets/**'],
		jades: ['client/index.jade'],
		jsx: ['client/jsx/**/*'],

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
					name: 'main',
					baseUrl: 'client/javascripts',
					mainConfigFile: 'client/javascripts/main.js',
					out: 'public/javascripts/app.js'
				}
			}
		},
		react: {
			app: {
				options: {
					extension:    'jsx',
					ignoreMTime:  false 
				},
				files: {
				'client/javascripts/components': 'client/jsx'
				}
			},
		},
		watch:{
			options:{
				livereload: true
			},
			js: {
				files: ['<%= javascripts %>'],
				tasks: ['javascripts'] 
			},
			jade: {
				files: ['<%= jades %>'],
				tasks: ['jade'] 
			},
			stylus: {
				files: ['<%= styles %>'],
				tasks: ['stylus'] 
			},
			jsx: {
				files: ['<%= jsx %>'],
				tasks: ['react']
			}
		},
		copy: {
			main: {
				files: [
					{
						expand: true, cwd: 'client/javascripts/bower/requirejs/', 
						src: ['require.js'], dest: 'public/javascripts/', filter: 'isFile'}
				]}
		},
		clean:{
			pub: ['public/']
		}
	});

	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-jade');
	grunt.loadNpmTasks('grunt-contrib-requirejs');
	grunt.loadNpmTasks('grunt-contrib-stylus');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-react');

	grunt.registerTask('default', ['clean', 'jade','stylus', 'react', 'requirejs', 'copy']);
	grunt.registerTask('javascripts', ['jshint']);
};