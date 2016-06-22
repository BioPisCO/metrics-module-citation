//process.argv[i], [0]: is command node, [1]: is file JS to execute, [2]: is first param, ... [n]: is n param
// process.argv.forEach(function(val, index, array) {
//   console.log(index + ': ' + val);
// });

var fs = require('fs');
var Citation = require('../citation');
var parseString = require('xml2js').parseString;
var keyword = process.argv[2];//'swissprot,swiss prot,swiss-prot,UniProtKB,uniprot';

var citation = new Citation();
var file_output = 'citation.txt'

console.log('Citation Test: Running.');

citation.get('esearch',keyword, function (err, reply) {
    if(err) return handleError(err);  
    //console.log(reply);
    var xml = reply;
	parseString(xml, function (err, result) {
    	writefile(result);
	});     
});

function handleError(err) {
  console.error('response status:', err.statusCode);
  console.error('data:', err.data);
}

// write data translate to JSON format.
function writefile(result){
	var records = result.eSearchResult.Count[0],
		encoding = 'utf8'
	var finaltext = records + ' citations for '+ keyword;
	console.log(finaltext);
	fs.writeFile(file_output , finaltext, encoding , function (err) {
		if (err) return console.log(err);
		else console.log('data save into > ' + file_output);
	});	
}
