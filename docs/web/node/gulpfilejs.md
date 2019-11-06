---
description: gulpfilejs
---

# gulpfilejs


### 项目运行需要的配置文件

- 根据每个人不同的需求自己添加删除

```javascript
var gulp = require('gulp');
var browserSync = require('browser-sync');
var reload = browserSync.reload;
var plumber = require('gulp-plumber');
var sass = require('gulp-sass');
var path = require('path');
var fs = require('fs');
var data = require('gulp-data');
var jade = require('gulp-jade');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var uglifycss = require('gulp-uglifycss');
var rename = require("gulp-rename");
var gulpCopy = require('gulp-file-copy');
```

### 把jade编译成html，编译过程会寻找对应名字的json文件

```javascript
gulp.task('templates', function() {
    return gulp.src('srcs/jade/*.jade')
        .pipe(plumber())
        .pipe(data(function(file) {
            var json = JSON.parse(fs.readFileSync('srcs/json/' + path.basename(file.path, '.jade') + '.json'));
            return json;
        }))
        .pipe(jade({
            pretty: '    '
        }))
        .pipe(gulp.dest('builds'));
});
```

### 监听jade的任务需要跟编译的分开

> 命令语句：`gulp jade-watch` 只运行这个命令是执行 jade 编译

```javascript
gulp.task('jade-watch', ['templates'], reload);
gulp.task('scss-watch', ['compass'], reload);
```


### 把scss编译成css

```javascript
gulp.task('sass', function() {
    return gulp.src("srcs/scss/*.scss")
        .pipe(plumber({
            errorHandler: function(error) {
                console.log(error.message);
                this.emit('end');
            }
        }))
        .pipe(sass())
        .on('error', function(err) {})
        .pipe(gulp.dest("builds/css"))
        .pipe(reload({
            stream: true
        }));
});
```

### 压缩js和css

```javascript
gulp.task('jimin', function() {
    return gulp.src('builds/js/*/*.js')
        //.pipe(concat('main.js')) 把所有的js合并压缩到main.js里面
        .pipe(uglify({
            mangle: {except: ["require"]}  //压塑时过虑掉不想被压塑的关键词
        }))
        .pipe(rename(function(path) {
            path.basename
        }))
        .pipe(gulp.dest('builds/compressed/js'));
});

gulp.task('cssmin', function() {
    gulp.src('builds/css/*.css')
        .pipe(uglifycss())
        .pipe(rename(function(path) {
            path.basename += '.min'
        }))
        .pipe(gulp.dest('builds/compressed/css'));
});
gulp.task('compress', ['jsmin', 'cssmin']);
```

**单独运行命令：**
- `gulp jimin`      只执行js压塑
- `gulp cssmin`     只执行css压塑
- `gulp compress`   js和css压塑都执行

> 注：在不运行gulp时，开户config.rb文件内的 output_style = :compressed 运行compass watch 同样时时压塑css

### 启动服务器，进行监听

> 运行命令：`gulp`  默认启动nodejs项目服务器，时时更新`sass`和`jade`编译

```javascript
gulp.task('default', ['sass', 'templates','jimin','cssmin'], function() {

    browserSync({
        server: 'builds'
    });

    gulp.watch('srcs/scss/*.scss', ['sass']);
    gulp.watch('srcs/jade/**/*.jade', ['jade-watch']);
    gulp.watch('srcs/json/*.json', ['jade-watch']);
});
```
