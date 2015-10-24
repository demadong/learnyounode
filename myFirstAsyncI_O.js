var fs = require("fs");

function countNewLines(error, data) {
	try {
		console.log(data.split("\n").length - 1);
	} catch(error) {
		console.error(error);
	}
};

fs.readFile(process.argv[2], "utf-8", countNewLines);