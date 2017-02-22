	var fs = require('fs');
	var readline = require('readline');
	var path = require('path');
	const executable = require('executable');


	const PROGNAME = path.basename(__filename);
	const PROGPATH = __dirname;
	const PROGDESC="Lord of the shell scripts (one script to rull them all)";
	const PROGVERS="0.0.1";
	const TAB="    ";


function leer_fichero(file) {
		if (file != undefined){
			var text = fs.readFileSync(path.join(file), "utf8");
			console.log(TAB,PROGNAME, " ", file);
			text.split(/\r?\n/).forEach(function (line) {
        		if(line.startsWith("CMDUSAGE=")) {
        			line = line.replace("CMDUSAGE=", " ");
        			console.log("                        ", line);
        			return;
        		}
			
        		if(line.startsWith("CMDDESC=")) {
        			line = line.replace("CMDDESC=", " ");
        			console.log("                        ", line);
        			return;
        		}
    	});

		}

			//var lineReader = readline.createInterface(string, null, null);

			//lineReader.on('line', function (line) {
 			//	 console.log('Line from file:', line);
			//});
	}


	function losh_usage(number, commands) {

		console.log("NAME:");
		console.log(TAB, PROGNAME, " - ", PROGDESC + "\n");
		console.log("VERSION:");
		console.log(TAB, PROGVERS + "\n");
		console.log("USAGE:");
		console.log(TAB, PROGNAME, "[command] [arg...]\n");
		console.log("COMMANDS: ");
		commands.forEach(function(file){
			leer_fichero(file);
			});
		}