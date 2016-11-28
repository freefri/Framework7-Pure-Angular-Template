module.exports = {
    dev: {
        options: {
        },
        files: {
            'www/dist/f7.material.css': 'src/styles/f7.material.less',
            'www/dist/f7.ios.css': 'src/styles/f7.ios.less'
        }
    },
    prd: {
        options: {
        },
        files: {
            'www/dist/f7.css': 'src/styles/f7.less'
        }
    }
};