module.exports = function(grunt) {
    var path = require('path');

    require('load-grunt-config')(grunt, {
        configPath: [
            path.join(process.cwd(), 'grunt')
        ],
        data: {
            pkg: grunt.file.readJSON('package.json')
        }
    });
};