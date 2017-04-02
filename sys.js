var execFile = require('child_process').execFile;
var spawn = require('child_process').spawn;
var ps = spawn('ps', ['ax']);

var child = execFile('node', ['--version'],function(error, stdout, stderr){
  if (error) {
    throw error;
  }
  console.log(stdout);
});

var grep = spawn('grep', ['node']);
ps.stdout.on('data', (data) => {
  grep.stdin.write(data);
});

ps.stderr.on('data', (data) => {
  console.log(`ps stderr: ${data}`);
});

ps.on('close', (code) => {
  if (code !== 0) {
    console.log(`ps 进程退出码：${code}`);
  }
  grep.stdin.end();
});

grep.stdout.on('data', (data) => {
  console.log(data.toString());
});

grep.stderr.on('data', (data) => {
  console.log(`grep stderr: ${data}`);
});

grep.on('close', (code) => {
  if (code !== 0) {
    console.log(`grep 进程退出码：${code}`);
  }
});
