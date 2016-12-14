module.exports = {
    dev: {
        options: {
        },
        files: {
            '<%= pkg.dist_dir %>/f7.material.css': '<%= pkg.style_dir %>/f7.material.less',
            '<%= pkg.dist_dir %>/f7.ios.css': '<%= pkg.style_dir %>/f7.ios.less'
        }
    },
    prd: {
        options: {
        },
        files: {
            '<%= pkg.dist_dir %>/f7.css': '<%= pkg.style_dir %>/f7.less'
        }
    }
};