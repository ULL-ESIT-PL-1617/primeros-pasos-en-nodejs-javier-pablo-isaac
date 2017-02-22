var CMDDESC = "Deploy GitBook on Github"

var repositorio = require('../package.json').repository.url;
var ghp = require('gh-pages');
ghp.publish('./gh-pages', { repo: repositorio, logger: function(m) { 
	console.error(m); } });
