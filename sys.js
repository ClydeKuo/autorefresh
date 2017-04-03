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
// nohup node /usr/workstation/autorefresh/loginIndex.js >/dev/null 2>&1 &
ps.on('close', function(code){
  if (code !== 0) {
    // console.log('ps 进程退出码：'+code);
  }
  grep.stdin.end();
});

grep.stdout.on('data', function(data){
    var temp=data.toString().match(/autorefresh\/loginIndex/)
  console.log(temp);
  if(!temp){

  }
});

// grep.stderr.on('data', function(data){
//   console.log('grep stderr: '+data);
// });

grep.on('close', function(code){
  if (code !== 0) {
    // console.log('grep 进程退出码：'+code);
  }
});
