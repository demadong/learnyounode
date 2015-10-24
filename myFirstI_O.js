var fs = require("fs");

var buff = fs.readFileSync(process.argv[2]);
var str = buff.toString();

var strArr = str.split("\n");

console.log(strArr.length - 1);