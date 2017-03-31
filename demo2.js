process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = '0'; // Ignore 'UNABLE_TO_VERIFY_LEAF_SIGNATURE' authorization error
var request = require('request');
var fs = require('fs');
// Issue the request
var hea= {

// 'origin':'https://www.otohits.net',
'Host': 'www.otohits.net',
'Connection':'keep-alive',
'Accept': 'text/plain, */*; q=0.01',
'X-Requested-With':'XMLHttpRequest',
'User-Agent':'Mozilla/5.0 (Windows NT 6.3; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36',
'referer': 'https://www.otohits.net/account/wfautosurf',
'Accept-Encoding':'gzip,deflate,br',
'Accept-Language':'zh-CN,zh;q=0.8',
'Cookie':'WW=lang=en; ASP.NET_SessionId=c2ugidfdnitbkgoch4pisocv; otohitsforgery=9MQdNoNYzD3AfYH5O40mP1hETbUtUgM43UztT5pBzJX6oydfrl_YHZbRF2QhIOSVPEs3c8FJwxNT9k1SjhekziUYBvGNWoKPdqHjV0YE2Tk1'
}

request({
    headers: hea,
    method: "GET",
    gzip:true,
    url: "https://www.otohits.net/api/userpoints",
    proxy: "http://127.0.0.1:8888" // Note the fully-qualified path to Fiddler proxy. No "https" is required, even for https connections to outside.
},function (error, response, body) {
//   console.log('Status:', response.statusCode);
  console.log('Headers:', response.request);
  // console.log('Headers:', JSON.stringify(response.request.headers));
//   console.log('Response:', response.body);
  fs.open("test1.vue","a",0644,function(e,fd){
            if(e) throw e;
            fs.write(fd,JSON.stringify(response),function(e){
                if(e) throw e;
                fs.closeSync(fd);
            })
        });
});
