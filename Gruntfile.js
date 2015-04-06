module.exports = function(grunt) {

  grunt.initConfig({
    concat: {
      options: {
        separator: ';'
      },
      dist: {
        src: ['bower_components/requirejs/require.js', 'src/irequire.js'],
        dest: 'dist/irequire.js'
      },
    },
    jasmine: {
      pivotal: {
        src: 'src/irequire.js',
        options: {
          vendor: 'bower_components/requirejs/require.js',
          specs: 'tests/*.js'
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-jasmine');

  grunt.registerTask('contact', ['concat']);
  grunt.registerTask('uglify', ['uglify']);
  grunt.registerTask('test', ['jasmine']);
  grunt.registerTask('default', ['jasmine', 'contact'])

};