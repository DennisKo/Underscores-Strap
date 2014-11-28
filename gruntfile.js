var mountFolder = function(connect, dir) {
  return connect.static(require('path').resolve(dir));
};

module.exports = function(grunt) {

  // Time how long tasks take. Can help when optimizing build times
  require('time-grunt')(grunt);

  // Load grunt tasks automatically
  // require('load-grunt-tasks')(grunt);
  require('jit-grunt')(grunt);

  var jsFileList = [
    'js/bootstrap/transition.js',
    'js/bootstrap/alert.js',
    'js/bootstrap/button.js',
    'js/bootstrap/carousel.js',
    'js/bootstrap/collapse.js',
    'js/bootstrap/dropdown.js',
    'js/bootstrap/modal.js',
    'js/bootstrap/tooltip.js',
    'js/bootstrap/popover.js',
    'js/bootstrap/scrollspy.js',
    'js/bootstrap/tab.js',
    'js/bootstrap/affix.js',
    'js/_*.js'
  ];

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

      concat: {
        options: {
          separator: ';',
        },
        dist: {
          src: [jsFileList],
          dest: 'js/scripts.min.js',
        },
      },

      uglify: {
        dist: {
          files: {
            'js/scripts.min.js': [jsFileList]
          }
        }
      },

      sass: {
        dist: {
          options: {
            trace: true,
            style: 'compressed'
          },
            files: {
              'style.css': 'styles/style.scss'
          }
        }
      },

      autoprefixer: {
        options: {
          browsers:['last 2 versions', 'ie 8', 'ie 7']
        },
        target: {
          src: 'style.css',
          dest: 'style.css'
        }
      },

      watch: {
        sass: {
          files: [
            'styles/*.scss',
            'styles/**/*.scss'
          ],
          tasks: ['sass', 'autoprefixer']
        },
        js: {
          files: [
            jsFileList
          ],
          tasks: ['concat','uglify']
        },
        livereload: {
          // Browser live reloading
          // https://github.com/gruntjs/grunt-contrib-watch#live-reloading
          options: {
            livereload: true
          },
          files: [
            'style.css',
            'js/scripts.min.js',
            'inc/*.php',
            '*.php'
          ]
        }
      }







  });


  // default task(s)
  grunt.registerTask('default', function() {
    grunt.task.run([
      'concat',
      'uglify',
      'sass',
      'watch'
    ]);
  });
};
