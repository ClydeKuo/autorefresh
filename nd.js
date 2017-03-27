var hea= {
  // 'referer': 'https://www.otohits.net/account/wfautosurf',
// 'origin':'https://www.otohits.net',
'set-cookie':['WW=lang=en','ASP.NET_SessionId=mpglw3cwnargka1qkawb5ni3','otohitsforgery=YMQ90SEfQlX_ea8082EQWeDJt3o9El6X93TsqILFDTmaT5Jzhg78XWpiJ45NzEE9ottQHsD0RuoZqWqEPqBlZN0a569J2MpJ3oydImzIROU1'],
'X-Requested-With':'XMLHttpRequest',
'accept-encoding':'gzip,deflate,br',
'accept-language':['zh-CN','zh','q=0.8'],
'connection':'keep-alive',
'user-agent':'Mozilla/5.0 (Windows NT 6.3; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36'}
var time=new Date().getTime()
const https = require('https');
var request = require('request');
request.followAllRedirects =true
request({
  method: 'GET',
  host:'www.otohits.net',
  port:443,
  proxy: "http://127.0.0.1:8888",
  // HTTPS_PROXY:true,
  // path:'/account/wrautosurfcheck?d='+time,
  url: 'https://www.otohits.net//account/dashboard',
  headers: hea,
  }, function (error, response, body) {
  console.log('Status:', response.statusCode);
  console.log('Headers:', response.request.headers);
  // console.log('Headers:', JSON.stringify(response.request.headers));
  console.log('Response:', body);
});
// var options={
//    method: 'POST',
//   host:'www.otohits.net',
//   port:443,
//   path:'/account/wrautosurfcheck?d='+time,
//   headers: hea,
// }
// options.agent = new https.Agent(options);
// var req = https.request(options, (res) => {
//   console.log('状态码：', res.statusCode);
//   console.log('请求头：', res.headers);

//   res.on('data', (d) => {
//     process.stdout.write(d);
//   });
// });

// req.on('error', (e) => {
//   console.error(e);
// });
// req.end();