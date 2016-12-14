module.exports = {
    dev: {
        options: {
        },
        files: {
            '<%= pkg.dist_dir %>/f7.material.css': '<%= pkg.src_dir %>/styles/f7.material.less',
            '<%= pkg.dist_dir %>/f7.ios.css': '<%= pkg.src_dir %>/styles/f7.ios.less'
        }
    },
    prd: {
        options: {
        },
        files: {
            '<%= pkg.dist_dir %>/f7.css': '<%= pkg.src_dir %>/styles/f7.less'
        }
    }
};