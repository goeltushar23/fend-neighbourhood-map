var dest = './dist',
    src = './src';

module.exports = {
    resources: {
        fonts: {
            src: [],
            dest: dest + '/fonts'
        },
        img: {
            src: [
                './src/img/*'
            ],
            dest: dest + '/img'
        }
    },
    app_css: {
        src: [
            "src/css/main.css"
        ],
        outputName: 'app.min.css',
        dest: dest + '/css',
        watch: "src/css/*"
    },
    lib_js: {
        src: [
            "bower_components/jquery/dist/jquery.js",
            "bower_components/knockout/dist/knockout.js"
        ],
        outputName: 'lib.min.js',
        dest: dest + '/js'
    },
    app_js: {
        src: [
            'src/js/common.js',
            'src/js/map.js',
            'src/js/app.js'
        ],
        outputName: 'app.min.js',
        dest: dest + '/js',
        watch: "src/js/*"
    },
    minify_html: {
        src: "src/index.html",
        outputName: 'index.html',
        dest: dest,
        watch: "src/index.html"
    },
    nodemon: {
        script: 'server.js',
        ext: 'js html',
        env: { 'NODE_ENV': 'dev' },
        watch: ['server.js', 'src/*'],
        ignore: [],
        delay: 2
    },
    lib_css: {
        src: [],
        outputName: 'lib.min.css',
        dest: dest + '/css'
    },
};
