
// the following dependencies, all declared in package.json, are used as either
// processing or build utilities

// include gulp
var gulp = require('gulp-help')(require('gulp'));

// TODO: comment
var path = require('path');

// TODO: comment
var cleanCSS = require('gulp-clean-css');

// strip code comments from js/json/css
var stripComments = require('gulp-strip-css-comments');

// process .css files, adding UA vendor prefixes down to optionised browser support
var autoprefixer = require('gulp-autoprefixer');

// TODO: comment
var es = require('event-stream');

// utility for parsing glob string formats into matched full strings, eg; finding
// variable directory structures with the use of wildcards
var globule = require('globule');

// allows us to run tasks synchronously which is important when performing a
// whole build step, rather than running individual tasks, as each task may
// cause issues if they depend on another task having been performed first, as
// is the case with autoprefixing after compiling .scss to .css
var runSequence = require('run-sequence');

gulp.task('bundle-themes', 'Bundles each theme directory CSS into a single, optimised file.', function () {

    return gulp.src('theme.css', {cwd: 'in'})
            .pipe(stripComments())
//            .pipe(stripComments({ignore: /url\([\w\s:\/=\-\+;,]*\)/g}))
//        .pipe(concat(outputFileName))
//            .pipe(concat.header('// file: <%= file.path %>\n'))
//            .pipe(cleanCSS())
            .pipe(gulp.dest('out', {cwd: '.'})
    );

});
/*

// complete build step to compile CSS from SCSS, add support for vendor prefixes
// TODO: update with RTL flipping (sequential) and JS tasks (parallel)
gulp.task('build-sequenced', 'Sequentially organised build process.', function() {

    // Array params' indices will be run in parallel, single String params will
    // be run synchronously
    runSequence('css-compile', 'css-support', 'bundle-components', 'bundle-themes',
        function () {
            console.log(color('Build sequence complete ("css-compile", "css-support", "bundle").', 'GREEN'));
        }
    );
});
*/

// Gulp allows a default task for brevity, so running 'gulp' in CLI without
// additional task args will run the following tasks by default
gulp.task('default', ['bundle-themes']);
