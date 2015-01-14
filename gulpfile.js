var gulp = require('gulp');
var runSequence = require('run-sequence');
var del = require('del');
var vinylPaths = require('vinyl-paths');
var to5 = require('gulp-6to5');
var jshint = require('gulp-jshint');
var stylish = require('jshint-stylish');
var yuidoc = require("gulp-yuidoc");
var changelog = require('conventional-changelog');
var assign = Object.assign || require('object.assign');
var fs = require('fs');
var bump = require('gulp-bump');
var browserSync = require('browser-sync');
var changed = require('gulp-changed');
var plumber = require('gulp-plumber');
var tools = require('aurelia-tools');
var exec = require('child_process').exec;

var path = {
  source: 'src/**/*.js',
  html: 'src/**/*.html',
  style: 'styles/**/*.css',
  output: 'dist/',
  doc: './doc'
};

var compilerOptions = {
  filename: '',
  filenameRelative: '',
  blacklist: [],
  whitelist: [],
  modules: '',
  sourceMap: true,
  sourceMapName: '',
  sourceFileName: '',
  sourceRoot: '',
  moduleRoot: '',
  moduleIds: false,
  runtime: false,
  experimental: false,
  format: {
    comments: false,
    compact: false,
    indent: {
      parentheses: true,
      adjustMultilineComment: true,
      style: "  ",
      base: 0
    }
  }
};

var jshintConfig = {
  esnext: true
};

gulp.task('clean', function() {
  return gulp.src([path.output])
    .pipe(vinylPaths(del));
});

gulp.task('build-system', function() {
  return gulp.src(path.source)
    .pipe(plumber())
    .pipe(changed(path.output, {
      extension: '.js'
    }))
    .pipe(to5(assign({}, compilerOptions, {
      modules: 'system'
    })))
    .pipe(gulp.dest(path.output))
    .pipe(browserSync.reload({
      stream: true
    }));
});

gulp.task('build-html', function() {
  return gulp.src(path.html)
    .pipe(changed(path.output, {
      extension: '.html'
    }))
    .pipe(gulp.dest(path.output))
    .pipe(browserSync.reload({
      stream: true
    }));
});

gulp.task('lint', function() {
  return gulp.src(path.source)
    .pipe(jshint(jshintConfig))
    .pipe(jshint.reporter(stylish));
});

gulp.task('doc-generate', function() {
  return gulp.src(path.source)
    .pipe(yuidoc.parser(null, 'api.json'))
    .pipe(gulp.dest(path.doc));
});

gulp.task('doc', ['doc-generate'], function() {
  tools.transformAPIModel(path.doc);
});

gulp.task('bump-version', function() {
  return gulp.src(['./package.json'])
    .pipe(bump({
      type: 'patch'
    })) //major|minor|patch|prerelease
    .pipe(gulp.dest('./'));
});

gulp.task('changelog', function(callback) {
  var pkg = JSON.parse(fs.readFileSync('./package.json', 'utf-8'));

  return changelog({
    repository: pkg.repository.url,
    version: pkg.version,
    file: path.doc + '/CHANGELOG.md'
  }, function(err, log) {
    fs.writeFileSync(path.doc + '/CHANGELOG.md', log);
  });
});

gulp.task('build', function(callback) {
  return runSequence(
    'clean', ['build-system', 'build-html'],
    callback
  );
});

gulp.task('update-own-deps', function() {
  tools.updateOwnDependenciesFromLocalRepositories();
});

gulp.task('serve', ['build'], function(done) {
  browserSync({
    open: false,
    port: 9000,
    server: {
      baseDir: ['.'],
      middleware: function(req, res, next) {
        res.setHeader('Access-Control-Allow-Origin', '*');
        next();
      }
    }
  }, done);
});

gulp.task('build-src-index', function() {
  var fs = require('fs');
  var glob = require('glob');
  var path = require('path');
  var opt = {};

  glob('dist/*.js', opt, function(er, files) {

    var imports = files.map(function(f) {
      var fileName = path.basename(f);
      var ext = new RegExp(path.extname(fileName), 'g');
      var moduleName = fileName.replace(ext, '');
      return "import './" + moduleName + "';";
    });

    fs.writeFileSync(
      './dist/build-index.js',
      imports.join('\n')
    );
  });

});

gulp.task('bundle', ['build-src-index'], function(cb) {
  exec('jspm bundle dist/build-index + aurelia-bootstrapper build.js --inject', function(err, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);
    cb(err);
  });
});

gulp.task('watch', ['serve'], function() {
  var watcher = gulp.watch([path.source, path.html, path.style], ['build']);
  watcher.on('change', function(event) {
    console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
  });
});

gulp.task('prepare-release', function(callback) {
  return runSequence(
    'build',
    'lint',
    'bump-version',
    'doc',
    'changelog',
    callback
  );
});
