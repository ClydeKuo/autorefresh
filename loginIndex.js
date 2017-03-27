process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = '0'; // Ignore 'UNABLE_TO_VERIFY_LEAF_SIGNATURE' authorization error
var request = require('request');
var moment = require("moment");
var tz = require("moment-timezone")
var fs = require('fs');
var timeReg = /(AM)|(PM)/
var timel = moment().subtract(1, 'hours').tz('Europe/London').format('llll').replace(timeReg, "GMT")
var RequestVerificationToken = ''
// Issue the request
var heaIndex = {
    // 'origin':'https://www.otohits.net',
    'Host': 'www.otohits.net',
    'Connection': 'keep-alive',
    'Cache-Control': 'max-age=0',
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
    'Upgrade-Insecure-Requests': 1,
    // 'X-Requested-With':'XMLHttpRequest',
    'User-Agent': 'Mozilla/5.0 (Windows NT 6.3; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36',
    'referer': 'https://www.otohits.net/',
    'Accept-Encoding': 'gzip,deflate',
    'Accept-Language': 'zh-CN,zh;q=0.8',
    'Cookie': 'WW=lang=en; ASP.NET_SessionId=e5vfioamfzmlbb3ppukagrww; otohitsforgery=1sPSyyN4Dcbop52-0gGLdywUbOYcy_cncPkry-NxgDaqWoPt8p2gkswaV9wrVmdjrKLlHGnK2sA6SaBD5WIzDvX0gTkKtxeNJdUjNHEtbys1',
    'If-Modified-Since': timel
}

request({
    headers: heaIndex,
    method: "GET",
    gzip: true,
    url: "https://www.otohits.net/account/login",
    proxy: "http://127.0.0.1:8888" // Note the fully-qualified path to Fiddler proxy. No "https" is required, even for https connections to outside.
}, function (error, response, body) {
    var reg = /\<input name=\\\"__RequestVerificationToken\\\" type=\\\"hidden\\\" value=\\\"(.{108,108})\\\"/g
    RequestVerificationToken = JSON.stringify(body).match(reg)[0].split("\\")[5].substr(1)
    console.log(RequestVerificationToken)
    if (RequestVerificationToken) {
        var heaLogin = {
            'Host': 'www.otohits.net',
            'Connection': 'keep-alive',
            'Cache-Control': 'max-age=0',
            'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
            'Origin': 'https://www.otohits.net',
            'Upgrade-Insecure-Requests': 1,
            // 'X-Requested-With':'XMLHttpRequest',
            'User-Agent': 'Mozilla/5.0 (Windows NT 6.3; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36',
            'Content-Type': 'application/x-www-form-urlencoded',
            'Referer': 'https://www.otohits.net/account/login',
            'Accept-Encoding': 'gzip,deflate',
            'Accept-Language': 'zh-CN,zh;q=0.8', 
            'Cookie': 'WW=lang=en; ASP.NET_SessionId=e5vfioamfzmlbb3ppukagrww; otohitsforgery=1sPSyyN4Dcbop52-0gGLdywUbOYcy_cncPkry-NxgDaqWoPt8p2gkswaV9wrVmdjrKLlHGnK2sA6SaBD5WIzDvX0gTkKtxeNJdUjNHEtbys1',
        }
        request({
            headers: heaLogin,
            method: "POST",
            gzip: true,
            body:'__RequestVerificationToken='+RequestVerificationToken+'&ReturnUrl=&Email=test13669%40163.com&Password=asdqwe123',
            url: "https://www.otohits.net/account/login",
            proxy: "http://127.0.0.1:8888" // Note the fully-qualified path to Fiddler proxy. No "https" is required, even for https connections to outside.
        }, function (error, response, body) {
            if(response.statusCode==302){
console.log(response.statusCode)
            }
            
        });
    }
});