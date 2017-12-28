var gulp = require('gulp');
var fs = require('fs');
var path= require('path');
var concat = require('gulp-concat');
var minify = require('gulp-minify-css');
var webserver = require('gulp-webserver');

gulp.task('min',function(){
	gulp.src('./css/style.css')
		.pipe(concat('min.css'))
		.pipe(minify())
		.pipe(gulp.dest('css'))
})

gulp.task('hello',function(){
	gulp.src('.')
		.pipe(webserver({
			host:'localhost',
			port:8080,
			livereload:true,
			middleware:function(req,res,next){
				if(req.url.indexOf ==='/favicon.ico'){
					return
				}
				if(req.url==='/index'){
					res.writeHead(200,{
						'content-type':'text-json;charset=utf-8',
						'Access-Control-Allow-Origin':'*'
					})
					res.end(fs.readFile(path.join(__dirname)))
				}
				next();
			}
		}))
})
