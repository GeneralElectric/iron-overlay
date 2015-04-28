'use strict';

module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({

        clean: {
            bower: ['bower_components']
        },

        jshint: {
            all: [
                'Gruntfile.js',
                'js/**/*.js'
            ],
            options: {
                jshintrc: '.jshintrc'
            }
        },

        depserve: {
            options: {
                open: '<%= depserveOpenUrl %>'
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-dep-serve');

    // Default task.
    grunt.registerTask('default', 'Basic build', [

    ]);

    // First run task.
    grunt.registerTask('firstrun', 'Basic first run', function() {
        grunt.config.set('depserveOpenUrl', '/index.html');
        grunt.task.run('default');
        grunt.task.run('depserve');
    });

    // Default task.
    grunt.registerTask('test', 'Test', [
        'jshint'
    ]);

};
