var request = require('request');
var heaSession = {
    'Host': 'www.otohits.net',
    'Connection': 'keep-alive',
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
    'Upgrade-Insecure-Requests': 1,
    'User-Agent': 'Mozilla/5.0 (Windows NT 6.3; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36',
    'Accept-Encoding': 'gzip,deflate',
    'Accept-Language': 'zh-CN,zh;q=0.8',
}
setInterval(function(){
  var req=request.get({
      headers: heaSession,
      gzip: true,
      url: "https://www.otohits.net/",
      followRedirect: false,
      // proxy: "http://127.0.0.1:8888"
  }, function(error, response, body) {
      if (error) {
          console.error(error)
      } else {
        // console.log(body)
      }
  });
// req.end()
},2)
