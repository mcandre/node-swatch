'use strict';

module.exports = function(grunt) {
  grunt.initConfig({
    exec: {
      test: 'npm test',
      cucumber: 'bundle exec cucumber',

      jshint: 'node node_modules/jshint/bin/jshint .',
      jslint: 'find . -type d -name node_modules -prune -o -type d -name bower_components -prune -o -type f -name "*[-.]min.js" -prune -o -type f -name "*.bat" -prune -o -type f \\( -wholename "*/bin/*" -or -name "*.js" \\) -exec node_modules/.bin/jslint {} \\;',
      eslint: 'node node_modules/eslint/bin/eslint .',
      aspelllint: 'bundle exec aspelllint',
      lili: 'bundle exec lili .',
      editorconfig: 'flcl . | xargs -n 100 editorconfig-cli check'
    }
  });

  grunt.loadNpmTasks('grunt-exec');

  grunt.registerTask('default', ['exec:test']);
  grunt.registerTask('test', ['exec:test']);
  grunt.registerTask('cucumber', ['exec:cucumber']);

  grunt.registerTask('lint', [
    'exec:jshint',
    // Go to bed, Crockford
    // 'exec:jslint',
    'exec:eslint',
    'exec:lili',
    'exec:editorconfig'
  ]);

  grunt.registerTask('jshint', ['exec:jshint']);
  grunt.registerTask('jslint', ['exec:jslint']);
  grunt.registerTask('eslint', ['exec:eslint']);
  grunt.registerTask('aspelllint', ['exec:aspelllint']);
  grunt.registerTask('lili', ['exec:lili']);
  grunt.registerTask('editorconfig', ['exec:editorconfig']);
};
