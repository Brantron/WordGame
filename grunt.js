/**
 * Created by lloyd on 1/10/2015.
 */
module.exports = function(grunt) {

    // 1. All configuration goes here
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        watch: {
            options: {
                livereload: 12345
            },
            scripts: {
                files: ['js/*.js'],
                options: {
                    spawn: false,
                    livereload: true
                }
            },
            html: {
                files: ['words.html/*.html'],
                options: {
                    livereload: true
                }
            }
        }

    });

    // 3. Where we tell Grunt we plan to use this plug-in.
    grunt.loadNpmTasks('grunt-contrib-watch');

    // 4. Where we tell Grunt what to do when we type "grunt" into the terminal.
    grunt.registerTask('default', ['watch']);

};