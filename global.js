var https = require('https');
var heaSession = {
    'Host': 'www.otohits.net',
    'Connection': 'keep-alive',
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
    'Upgrade-Insecure-Requests': 1,
    'User-Agent': 'Mozilla/5.0 (Windows NT 6.3; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36',
    'Accept-Encoding': 'gzip,deflate',
    'Accept-Language': 'zh-CN,zh;q=0.8',
}
var options = {
    hostname: 'www.otohits.net',
    port: 443,
    path: '/',
    method: 'GET',
    headers: heaSession,
    gzip: true,
    // proxy:"http://127.0.0.1:8888",
};
setInterval(function(dd) {
    console.log(dd)
    var req = https.request(options, function(res) {
        // console.log('状态码：', res.statusCode);
        // console.log('请求头：', res.headers);
        console.log('请求头：', res.statusCode);
        res.on('data', (d) => {
            // process.stdout.write(d);
            console.log(d)
        });


    });
    req.on('error', (e) => {
        console.error(e);
    });
    req.end();
}, 10000, 'hahah')
// req.end();
