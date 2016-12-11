module.exports = {
    dev: {
        options: {
        },
        files: {
            'www/dist/f7.material.css': '<%= pkg.src_dir %>/styles/f7.material.less',
            'www/dist/f7.ios.css': '<%= pkg.src_dir %>/styles/f7.ios.less'
        }
    },
    prd: {
        options: {
        },
        files: {
            'www/dist/f7.css': '<%= pkg.src_dir %>/styles/f7.less'
        }
    }
};