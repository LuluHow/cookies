module.exports = function(grunt) {
  "use strict";

  grunt.initConfig({
    nodemon: {
      dev: {
        script: './bin/www',
        tasks: ["ts", "tslint"]
      }
    },
    ts: {
      app: {
        files: [{
          src: ["src/**/*.ts", "!src/.baseDir.ts", "!src/_all.d.ts"],
          dest: "."
        }],
        options: {
          module: "commonjs",
          noLib: true,
          target: "es6",
          sourceMap: false
        }
      }
    },
    tslint: {
      options: {
        configuration: "tslint.json"
      },
      files: {
        src: ["src/**/*.ts"]
      }
    },
    watch: {
      scripts: {
        files: ["js/src/**/*.ts", "src/**/*.ts"],
        tasks: ["ts", "tslint"]
      }
    },
    concurrent: {
      dev: {
        tasks: ['ts', 'tslint', 'nodemon', 'watch'],
        options: {
          logConcurrentOutput: true
        }
      }
    }
  });

  grunt.loadNpmTasks("grunt-concurrent");
  grunt.loadNpmTasks("grunt-contrib-watch");
  grunt.loadNpmTasks("grunt-ts");
  grunt.loadNpmTasks("grunt-tslint");
  grunt.loadNpmTasks("grunt-nodemon");

  grunt.registerTask('start', '', function() {
    grunt.option("force",true);
    var taskList = [
        'concurrent',
        'ts',
        'tslint',
        'nodemon',
        'watch'
    ];
    grunt.task.run(taskList);
});

};