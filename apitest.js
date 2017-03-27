var request = require('request');
require('./CryptoJS v3.1.2/hmac-sha256.js')
 require('./CryptoJS v3.1.2/enc-base64-min.js')


var apikey='deead44b-8fa1-4e8b-be6c-494d7577f608'
var apipass='A0pjbO+6VZ8W5y4+j5YH7Lf7Ei8='
var plus=":"
var method="GET"
var query_path="/links?with=countries"
var time=new Date().getTime()
var msg=apikey+plus+method+plus+query_path+plus+time
var hash = CryptoJS.HmacSHA256("msg", "apipass");
var token = CryptoJS.enc.Base64.stringify(hash);
var msgg=otoapi+" "+msg+plus+hashInBase64
console.log(msgg)
// request({
//   method: 'GET',
//   url: 'https://private-46058-otohitsapi.apiary-mock.com/links?with=',
//   headers: {
//     'Content-Type': 'application/json',
//     'Authorization': msgg,
//   }}, function (error, response, body) {
//   console.log('Status:', response.statusCode);
//   console.log('Headers:', JSON.stringify(response.headers));
//   console.log('Response:', body);
// });