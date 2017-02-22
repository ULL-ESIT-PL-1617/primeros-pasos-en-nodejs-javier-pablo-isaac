var source = './txt'
var gh_pages = './gh-pages';

var exec = require('child_process').exec;
var child = exec("gitbook build" + " " + source + " " + gh_pages, function(error, stdout, stderr) {
  console.log('stdout: ' + stdout);
  console.log('stderr: ' + stderr);
  if (error !== null) {
    console.log('exec error: ' + error);
  }
});
