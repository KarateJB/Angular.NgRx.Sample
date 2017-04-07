/*
This file in the main entry point for defining Gulp tasks and using Gulp plugins.
Click here to learn more. http://go.microsoft.com/fwlink/?LinkId=518007
*/
"use strict";
var gulp = require('gulp');
var util = require('gulp-util');
var rename = require('gulp-rename');

var config = {
  production: !!util.env.production

};

var rootPath = {
  app: "./src/app/",
  packageLib: "./src/assets/lib-npm/", //library destination
  nmSrc: "./node_modules/" //library source
};

var restUri = {
  path_prod : rootPath.app + "/services/resturi.service.prod.ts",
  path_dev : rootPath.app + "/services/resturi.service.dev.ts"
}

//Restful service uri
//Command: > gulp build --production
gulp.task('build-resturi-service', function () {

  console.log(util.env.production);

  if (config.production==true) {
    return gulp.src(restUri.path_prod)
    .pipe(rename("resturi.service.ts"))
    .pipe(gulp.dest(rootPath.app + '/services/'));
  }
  else {
    return  gulp.src(restUri.path_dev)
    .pipe(rename("resturi.service.ts"))
    .pipe(gulp.dest(rootPath.app + '/services/'));
  }

})


//bootstrap
gulp.task('copy-bootstrap', function () {
  return gulp.src(rootPath.nmSrc + "/bootstrap/dist/**/bootstrap.min.*", {
    base: rootPath.nmSrc + '/bootstrap/dist/'
  }).pipe(gulp.dest(rootPath.packageLib + '/bootstrap/'));
});


//jquery
gulp.task('copy-jquery', function () {
  return gulp.src(rootPath.nmSrc + "/jquery/dist/jquery.min.js", {
    base: rootPath.nmSrc + '/jquery/dist/'
  }).pipe(gulp.dest(rootPath.packageLib + '/jquery/'));
});

//angularfire2
gulp.task('copy-angularfire2', function () {
    return gulp.src(rootPath.nmSrc + "/angularfire2/bundles/angularfire2.umd.js", {
        base: rootPath.nmSrc + '/angularfire2/bundles/'
    }).pipe(gulp.dest(rootPath.packageLib + '/angularfire2/'));
});
//firebase
gulp.task('copy-firebase', function () {
    return gulp.src(rootPath.nmSrc + "/firebase/*.js", {
        base: rootPath.nmSrc + '/firebase/'
    }).pipe(gulp.dest(rootPath.packageLib + '/firebase/'));
});

//sweetalert2
gulp.task('copy-sweetalert2', function () {
  return gulp.src(rootPath.nmSrc + "/sweetalert2/dist/sweetalert2*", {
    base: rootPath.nmSrc + '/sweetalert2/dist/'
  }).pipe(gulp.dest(rootPath.packageLib + '/sweetalert2/'));
});

//font-awesome
gulp.task('copy-fa-css', function () {
    return gulp.src(rootPath.nmSrc + "/font-awesome/fonts/*", {
        base: rootPath.nmSrc + '/font-awesome/fonts/'
    }).pipe(gulp.dest(rootPath.packageLib + '/font-awesome/fonts/'));
});

gulp.task('copy-fa-fonts', function () {
    return gulp.src(rootPath.nmSrc + "/font-awesome/css/font-awesome.min.css", {
        base: rootPath.nmSrc + '/font-awesome/css/'
    }).pipe(gulp.dest(rootPath.packageLib + '/font-awesome/css/'));
});

//ng2-toastr
gulp.task('copy-ng2-toastr', function () {
    return gulp.src([
      rootPath.nmSrc + "/ng2-toastr/bundles/ng2-toastr.min.css",
      rootPath.nmSrc + "/ng2-toastr/bundles/ng2-toastr.min.js",
    ], {
        base: rootPath.nmSrc + '/ng2-toastr/bundles/'
    }).pipe(gulp.dest(rootPath.packageLib + '/ng2-toastr/'));
});

//ngrx
gulp.task('copy-ngrx-core', function () {
    return gulp.src(rootPath.nmSrc + "/@ngrx/core/bundles/core.min.umd.js")
        .pipe(gulp.dest(rootPath.packageLib + '/ngrx/core/'));
});
gulp.task('copy-ngrx-store', function () {
    return gulp.src(rootPath.nmSrc + "/@ngrx/store/bundles/store.min.umd.js")
        .pipe(gulp.dest(rootPath.packageLib + '/ngrx/store/'));
});
gulp.task('copy-ngrx-effects', function () {
    return gulp.src(rootPath.nmSrc + "/@ngrx/effects/bundles/effects.min.umd.js")
        .pipe(gulp.dest(rootPath.packageLib + '/ngrx/effects/'));
});



//Watch
gulp.task('watch', function() {
    gulp.watch(restUri.path_dev, ['build-resturi-service']);
    // gulp.watch(restUri.path_prod, ['build-resturi-service']);
 });

gulp.task("default", [
  "watch"
])

gulp.task("copy-all", [
  "copy-jquery",
  "copy-bootstrap",
  "copy-angularfire2",
  "copy-firebase",
  "copy-sweetalert2",
  "copy-fa-css",
  "copy-fa-fonts",
  "copy-ng2-toastr",
  "copy-ngrx-core",
  "copy-ngrx-store",
  "copy-ngrx-effects"
])

gulp.task("build", [
  "build-resturi-service"
])
