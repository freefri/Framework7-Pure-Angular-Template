module.exports = function(grunt) {
    var path = require('path');

    require('load-grunt-config')(grunt, {
        configPath: [
            path.join(process.cwd(), 'grunt')
        ],
        data: {
            aws: grunt.file.readJSON('config/amazon.json'),
            pkg: grunt.file.readJSON('package.json')
        }
    });
};