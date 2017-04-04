var execFile = require('child_process').execFile;
var spawn = require('child_process').spawn;
function checkauto(){
    var ps = spawn('ps', ['-ef']);
    var grep = spawn('grep', ['node']);
    ps.stdout.on('data', function(data){
      grep.stdin.write(data);
    });
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
          auto()
      }
    });
    grep.on('close', function(code){
      if (code !== 0) {
        // console.log('grep 进程退出码：'+code);
      }
    });
}

function auto(){
    var nohup=spawn('nohup',['>/dev/null 2>&1','&'])
    var nodetype=spawn('node',['/usr/workstation/autorefresh/loginIndex.js'])
    nohup.stdout.on('data', function(data){
      nodetype.stdin.write(data);
    });
    nohup.on('close', function(code){
      if (code !== 0) {
        // console.log('ps 进程退出码：'+code);
      }
             grep.stdin.end();
    });
    nodetype.stdout.on('data', function(data){

    });
    nodetype.on('close', function(code){
      if (code !== 0) {
        // console.log('grep 进程退出码：'+code);
      }
    });
}
setInterval(checkauto,1000)
