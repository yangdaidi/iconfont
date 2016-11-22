// var gulp = require('gulp');
// var iconfont = require('gulp-iconfont');
// var runTimestamp = Math.round(Date.now()/1000);
 
// gulp.task('Iconfont', function(){
//   return gulp.src(['assets/icons/*.svg'])
//     .pipe(iconfont({
//       fontName: 'myfont', // required 
//       prependUnicode: true, // recommended option 
//       formats: ['ttf', 'eot', 'woff'], // default, 'woff2' and 'svg' are available 
//       timestamp: runTimestamp, // recommended to get consistent builds when watching files 
//     }))
//       .on('glyphs', function(glyphs, options) {
//         // CSS templating, e.g. 
//         console.log(glyphs, options);
//       })
//     .pipe(gulp.dest('www/fonts/'));
// });


// var async = require('async');
// var gulp = require('gulp');
// var iconfont = require('gulp-iconfont');
// var consolidate = require('gulp-consolidate');
 
// gulp.task('Iconfont', function(done){
//   var iconStream = gulp.src(['assets/icons/*.svg'])
//     .pipe(iconfont({ fontName: 'myfont' }));
 
//   async.parallel([
//     function handleGlyphs (cb) {
//       iconStream.on('glyphs', function(glyphs, options) {
//         gulp.src('templates/myfont.css')
//           .pipe(consolidate('lodash', {
//             glyphs: glyphs,
//             fontName: 'myfont',
//             fontPath: '../fonts/',
//             className: 's'
//           }))
//           .pipe(gulp.dest('www/css/'))
//           .on('finish', cb);
//       });
//     },
//     function handleFonts (cb) {
//       iconStream
//         .pipe(gulp.dest('www/fonts/'))
//         .on('finish', cb);
//     }
//   ], done);
// });


var gulp = require('gulp');
var iconfont = require('gulp-iconfont');
var iconfontCss = require('gulp-iconfont-css');
var clean = require("gulp-clean");
var taskListing = require("gulp-task-listing");
var template = require("gulp-template");

var fs = require("fs");

var icons = fs.readdirSync("src/icons");

icons = icons.map(function(icon){
   return icon.replace(/\.\w+$/, '');
});

var fontName = 'iconfont';

gulp.task('iconfont', ['clean'], function(){
  gulp.src('src/icons/*.svg')
    .pipe(iconfontCss({
      fontName: fontName,
      path: 'src/templates/_icons.css',
      targetPath: '../../build/css/_icons.css',
      fontPath: '../fonts/'
    }))
    .pipe(iconfont({
      fontName: fontName,
      formats: ['svg', 'ttf', 'eot', 'woff', 'woff2'],
      normalize: true
     }))
    .pipe(gulp.dest('build/fonts/'));
});

gulp.task('example', function(){
  gulp.src('src/example/index.html')
     .pipe(template({icons: icons}))
     .pipe(gulp.dest("./build/example"));
});

gulp.task('clean', function(){
   gulp.src("./build", {read: false}).pipe(clean());
});

gulp.task('help', taskListing);

gulp.task('default',['help']);