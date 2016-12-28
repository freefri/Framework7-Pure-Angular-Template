module.exports = {
    dev: {
        options: {
        },
        files: {
            '<%= pkg.dist_dir %>/f7.material.css': 'src/styles/f7.material.less',
            '<%= pkg.dist_dir %>/f7.ios.css': 'src/styles/f7.ios.less'
        }
    },
    prd: {
        options: {
            compress: true
        },
        files: {
            '<%= pkg.dist_dir %>/f7.min.css': 'src/styles/f7.less'
        }
    }
};