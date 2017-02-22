var gulp = require('gulp');
var path = require('path');
var exec = require('child_process').exec;

gulp.task('build', function() {
	var child = exec('sudo node ./scripts/generate-gitbook.js', function(error, stdout, stderr) {

		if (error) {
 		   console.error(`exec error: ${error}`);
    		   return;
 		}
  		console.log(`stdout: ${stdout}`);
  		console.log(`stderr: ${stderr}`);	
	});		
});


gulp.task('serve', function() {
        var exec = require('child_process').exec;
        var child = exec('sudo node ./scripts/server.js', function(error, stdout, stderr) {


              if (error) {
                   console.error(`exec error: ${error}`);
                   return;
                }
                console.log(`stdout: ${stdout}`);
                console.log(`stderr: ${stderr}`);
        });

});

gulp.task('deploy', function() {
        var exec = require('child_process').exec;
        var child = exec('sudo node ./scripts/deploy-gitbook.js', function(error, stdout, stderr) {
                
                if (error) {
                   console.error(`exec error: ${error}`);
                   return;
                }
                console.log(`stdout: ${stdout}`);
                console.log(`stderr: ${stderr}`);

        
                });

});



