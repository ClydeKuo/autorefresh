var execFile = require('child_process').execFile;
var child = execFile('node', ['--version'],function(error, stdout, stderr){
  if (error) {
    throw error;
  }
  console.log(stdout);
});
var child = execFile('ps', ['-ef|grep node'],function(error, stdout, stderr){
  if (error) {
    throw error;
  }
  console.log(stdout);
});