module.exports = {
    fonts: {
        expand: true,
        flatten: true,
        src: [
            'node_modules/font-awesome/fonts/fontawesome-webfont.ttf',
            'node_modules/font-awesome/fonts/fontawesome-webfont.wof*'
        ],
        dest: '<%= pkg.dist_dir %>/../fonts/',
        filter: 'isFile'
    }
};
