var execFile = require('child_process').execFile;
var spawn = require('child_process').spawn;
var ps = spawn('ps', ['ef']);

var child = execFile('node', ['--version'],function(error, stdout, stderr){
  if (error) {
    throw error;
  }
  console.log(stdout);
});

var grep = spawn('grep', ['node']);
ps.stdout.on('data', function(data){
  grep.stdin.write(data);
});

// ps.stderr.on('data', function(data){
//   console.log('ps stderr: '+data);
// });

ps.on('close', function(code){
  if (code !== 0) {
    console.log('ps 进程退出码：'+code);
  }
  grep.stdin.end();
});

grep.stdout.on('data', function(data){
  console.log(data.toString().match(/autorefresh/));
});

// grep.stderr.on('data', function(data){
//   console.log('grep stderr: '+data);
// });

grep.on('close', function(code){
  if (code !== 0) {
    console.log('grep 进程退出码：'+code);
  }
});
