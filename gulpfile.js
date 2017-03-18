var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var includeSource = require('gulp-include-source');
var sequence = require('gulp-sequence')
var removeCode = require('gulp-remove-code');
var clean = require('gulp-clean');
var rjs = require('requirejs');
var rjsconfig = require('./build/rjsconfig');

// Static server
var gulp        = require('gulp');
var browserSync = require('browser-sync').create();

/*
 * @desc  css,js引入资源自动嵌入（需要是真实存在的文件资源）
 * @deps  none
 * @src   devPath/*.html
 * @dest  destPath
 * @eg    <!--include:js(js/app/media.js)--> / <!-- include:css(css/allmin.css) -->
 */
gulp.task("include", function () {
  return gulp.src('./dev/*.html')
    .pipe(includeSource())
    .pipe(gulp.dest('./dist'));
});

/*
 * @desc 将所有资源项目中的block删除
 * @src  devPath
 * @deps none
 * @dest destPath
 * @demo<!--removeIf(production)--><!--endRemoveIf(production)-->
 */
gulp.task('template', ["include"], function () {
  return gulp.src('./dist/*.html')
    .pipe(removeCode({production: true}))
    .pipe(gulp.dest('./dist'))
});

/*
 * @desc 清空构建目录
 * @src  destPath
 * @deps none
 * @dest destPath
 */
gulp.task("cleanTarget", function () {
  return gulp.src('./dist', {read: true})
    .pipe(clean());
});

/*
 * @desc 启动Browsersync并根目录，监听静态资源变化
 * @src  devPath
 * @deps none
 * @dest destPath
 */
gulp.task('serve', function () {
  // Serve files from the root of this project
  browserSync.init({
    server: {
      baseDir: "./dev"
    },
    port: 3000
  });

  // add browserSync.reload to the tasks array to make
  // all browsers reload after tasks are complete.
  gulp.watch([
    "./dev/js/**/*.js",
    "./dev/css/*css",
    "./dev/*html",
  ], ['reource-watch']);
});

/*
 * @desc 启动生成目录
 * @src  devPath
 * @deps none
 * @dest destPath
 */
gulp.task('preview', function () {
  // Serve files from the root of this project
  browserSync.init({
    server: {
      baseDir: "./dist"
    },
    port: 3003
  });
});


/*
 * @desc 监听到静态资源改变后自动刷新页面
 * @src  devPath
 * @deps none
 * @dest destPath
 */
gulp.task('reource-watch', function (done) {
  browserSync.reload();
  done();
});

/*
 * @desc 构建amd资源
 * @src  devPath
 * @deps none
 * @dest destPath
 */
gulp.task('optimize', function (cb) {
  rjs.optimize(rjsconfig, function (buildResponse) {
    console.log('build response', buildResponse);
    cb();
  }, cb);
});

gulp.task('dev', ['serve'])
gulp.task('build', function (cb) {
  sequence('cleanTarget', ['optimize', 'template'], cb)
})
