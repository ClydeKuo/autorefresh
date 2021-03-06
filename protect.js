var cluster = require('cluster');
if (cluster.isMaster) {
  //Fork a worker to run the main program
  for (var i = 0; i < 2; i++) var worker = cluster.fork();
} else {
  //Run main program
  require('./loginIndex.js');
  console.log('worker is running');
}

cluster.on('death', function(worker) {
  //If the worker died, fork a new worker
  console.log('worker ' + worker.pid + ' died. restart...');
  cluster.fork();
});
