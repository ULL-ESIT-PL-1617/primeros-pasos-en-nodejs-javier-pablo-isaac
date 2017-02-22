var gulp = require('gulp');
var path = require('path');
var exec = require('child_process').exec;

gulp.task('build', function() {
	var child = exec('node ./scripts/generate-gitbook.js', function(error, stdout, stederr) {
	
		console.log('publicado en gh-pages');
		
		});

});


gulp.task('serve', function() {
        var exec = require('child_process').exec;
        var child = exec('node ./scripts/server.js', function(error, stdout, stederr) {

                console.log('publicado en gh-pages');

                });

});

gulp.task('deploy', function() {
        var exec = require('child_process').exec;
        var child = exec('node ./scripts/deploy-gitbook.js', function(error, stdout, stederr) {
                        
                console.log('publicado en gh-pages');

                });

});



