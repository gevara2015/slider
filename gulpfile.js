var gulp = require('gulp'),
    connect = require('gulp-connect');


var path = {
    "indexHmtl" : "index1.html",
    "js"        : "scripts/main-2.js"
};

/**
 * gulp server
 * */
gulp.task('connect', function () {
    connect.server({
        root: '',
        port: 8000,
        livereload: true
    });
});

/**
 * gulp livereaload*/
gulp.task('indexHtml', function(){
    gulp.src(path.indexHmtl)
        .pipe(connect.reload())
});

gulp.task('js', function(){
    gulp.src(path.js)
        .pipe(connect.reload())
});
/**
 * watch components*/
gulp.task('componentWatch', function(){
    gulp.src(componentVendor + "../*.js")
        .pipe(connect.reload());
});

gulp.task('watch', function(){
    gulp.watch(path.indexHmtl, ['indexHtml'])
    gulp.watch(path.js, ['js'])
});

gulp.task('default',["connect","watch"]);