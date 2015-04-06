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
        src: 'src/irequire.f.js',
        options: {
          vendor: 'bower_components/requirejs/require.js',
          specs: 'tests/*.js'
        }
      }
    },
    uglify: {
      options: {
        mangle: false
      },
      my_target: {
        files: {
          'dist/irequire.min.js': ['src/irequire.js']
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-jasmine');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('contact', ['concat']);
  grunt.registerTask('uglify', ['uglify']);
  grunt.registerTask('build', ['concat', 'uglify']);
  grunt.registerTask('test', ['jasmine']);
  grunt.registerTask('default', ['jasmine', 'contact', 'uglify'])

};