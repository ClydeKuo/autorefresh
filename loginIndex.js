process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = '0'; // Ignore 'UNABLE_TO_VERIFY_LEAF_SIGNATURE' authorization error
var request = require('request');
var moment = require("moment");
var tz = require("moment-timezone")
var fs = require('fs');
const utils = require('utility');
// require('jquery')
// require('./sss.js')
var timeReg = /(AM)|(PM)/
var timee = moment().subtract(1, 'hours').tz('Europe/London').format('llll')
var timel = ''
if (timee.match(/AM/)) {
    timel = timee.replace(/AM/, "GMT")
} else if (timee.match(/PM/)) {
    // console.log(timee)
    var temp = Number(timee.match(/(\d{1,2}):/)[1]) + 12
    timel = timee.replace(/(\d{1,2}):/, temp + ":").replace(/PM/, "GMT")
    // console.log(timel)

}
function getParams(params) {
    var q = new Date().getTime() - params[0]
    var L = 0
    for (var i = 0, len = params[1].length; i < len; i++) {
        L += params[1][i] * params[1][i]
    }
    var ll = L.toString() + '_' + params[0].toString() + '_' + q.toString() + '_' + params[2].toString()
    var l = utils.md5(ll)
    var v = 256 * params[2]
    return "k=" + ll + '&v=' + q + "&p=" + v
}

function sleep(numberMillis) {
    var now = new Date();
    var exitTime = now.getTime() + numberMillis;
    while (true) {
        now = new Date();
        if (now.getTime() > exitTime)
            return;
    }
}
// var timel = moment().subtract(1, 'hours').tz('Europe/London').format('llll').replace(timeReg, "GMT")
var RequestVerificationToken = ''
var SessionId = 'e5vfioamfzmlbb3ppukagrww'
var otohitsforgery = '1sPSyyN4Dcbop52-0gGLdywUbOYcy_cncPkry-NxgDaqWoPt8p2gkswaV9wrVmdjrKLlHGnK2sA6SaBD5WIzDvX0gTkKtxeNJdUjNHEtbys1'
// Issue the request
var heaForgery = {
    // 'origin':'https://www.otohits.net',
    'Host': 'www.otohits.net',
    'Connection': 'keep-alive',
    // 'Cache-Control': 'max-age=0',
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
    'Upgrade-Insecure-Requests': 1,
    // 'X-Requested-With':'XMLHttpRequest',
    'User-Agent': 'Mozilla/5.0 (Windows NT 6.3; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36',
    'referer': 'https://www.otohits.net/?cl=en',
    'Accept-Encoding': 'gzip,deflate',
    'Accept-Language': 'zh-CN,zh;q=0.8',
    'Cookie': 'WW=lang=en; ASP.NET_SessionId=' + SessionId,
    'If-Modified-Since': timel
}
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
    'Cookie': 'WW=lang=en; ASP.NET_SessionId=' + SessionId + '; otohitsforgery=' + otohitsforgery,
    'If-Modified-Since': timel
}
var heaSession = {
    // 'origin':'https://www.otohits.net',
    'Host': 'www.otohits.net',
    'Connection': 'keep-alive',
    // 'Cache-Control': 'max-age=0',
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
    'Upgrade-Insecure-Requests': 1,
    // 'X-Requested-With':'XMLHttpRequest',
    'User-Agent': 'Mozilla/5.0 (Windows NT 6.3; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36',
    // 'referer': 'https://www.otohits.net/',
    'Accept-Encoding': 'gzip,deflate',
    'Accept-Language': 'zh-CN,zh;q=0.8',
    // 'Cookie': 'WW=lang=en; ASP.NET_SessionId=' + SessionId + '; otohitsforgery=' + otohitsforgery,
    // 'If-Modified-Since': timel
}
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
    'Cookie': 'WW=lang=en; ASP.NET_SessionId=' + SessionId + '; otohitsforgery=' + otohitsforgery,
}
var heaauto = {
    'Host': 'www.otohits.net',
    'Connection': 'keep-alive',
    'Content-Length': 0,
    // 'Cache-Control': 'max-age=0',
    'Accept': '*/*',
    'Origin': 'https://www.otohits.net',
    // 'Upgrade-Insecure-Requests': 1,
    'X-Requested-With': 'XMLHttpRequest',
    'User-Agent': 'Mozilla/5.0 (Windows NT 6.3; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36',
    // 'Content-Type': 'application/x-www-form-urlencoded',
    'Referer': 'https://www.otohits.net/account/wfautosurf',
    'Accept-Encoding': 'gzip,deflate',
    'Accept-Language': 'zh-CN,zh;q=0.8',
    'Cookie': 'WW=lang=en; ASP.NET_SessionId=' + SessionId + '; otohitsforgery=' + otohitsforgery,
}
var heaID = {
    'Host': 'www.otohits.net',
    'Connection': 'keep-alive',
    // 'Content-Length': 0,
    // 'Cache-Control': 'max-age=0',
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
    // 'Origin': 'https://www.otohits.net',
    'Upgrade-Insecure-Requests': 1,
    // 'X-Requested-With': 'XMLHttpRequest',
    'User-Agent': 'Mozilla/5.0 (Windows NT 6.3; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36',
    // 'Content-Type': 'application/x-www-form-urlencoded',
    'Referer': 'https://www.otohits.net/account/wfautosurf',
    'Accept-Encoding': 'gzip,deflate',
    'Accept-Language': 'zh-CN,zh;q=0.8',
    'Cookie': 'WW=lang=en; ASP.NET_SessionId=' + SessionId + '; otohitsforgery=' + otohitsforgery,
}
var heaVali = {
    'Host': 'www.otohits.net',
    'Connection': 'keep-alive',
    'Content-Length': 60,
    // 'Cache-Control': 'max-age=0',
    'Origin': 'https://www.otohits.net',
    'User-Agent': 'Mozilla/5.0 (Windows NT 6.3; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36',
    'Content-Type': 'application/x-www-form-urlencoded',
    // 'Upgrade-Insecure-Requests': 1,
    // 'X-Requested-With': 'XMLHttpRequest',
    'Accept': '*/*',
    'Referer': 'https://www.otohits.net/account/autosurfsecurity',
    'Accept-Encoding': 'gzip,deflate',
    'Accept-Language': 'zh-CN,zh;q=0.8',
    'Cookie': 'WW=lang=en; ASP.NET_SessionId=' + SessionId + '; otohitsforgery=' + otohitsforgery,
}
function requestID() {
    request({
        headers: heaID,
        method: "GET",
        gzip: true,
        url: "https://www.otohits.net/account/wrautosurfrender?d=" + new Date().getTime(),
        proxy: "http://127.0.0.1:8888"

    }, function (error, response, body) {
        if (error) {
            console.log(error)
        } else {
            console.log('requestID completed')
            console.log('response.statusCode:'+response.statusCode)
            console.log(body.match(/validatesecurity/))
            console.log('...')
            if (body.match(/validatesecurity/)) {
                console.log("body.match(/validatesecurity/):"+body.match(/validatesecurity/))
                console.log('body.length:'+body.length+'  validatesecuritying')
                console.log('body.match(/oto\.otoc\.s\(.*\)/):'+body.match(/oto\.otoc\.s\(.*\)/))
                var arr = JSON.parse('[' + body.match(/oto\.otoc\.s\(.*\)/)[0].slice(11, -1) + ']')
                requestVali(getParams(arr))
            }else{
                console.log('body.length:'+body.length)
                
            }
            
        }
    })
}

function requestauto() {
    request({
        headers: heaauto,
        method: "POST",
        url: "https://www.otohits.net/account/wrautosurfcheck",
        proxy: "http://127.0.0.1:8888"
    }, function (error, response, body) {
        // console.log(response.statusCode)
        if (error) {
            console.log(error)
        } else {
            console.log('got surf url:'+JSON.parse(body).LS)
            requestID()
        }
    })
}

function requestdashboard() {
    request({
        headers: heaLogin,
        method: "GET",
        gzip: true,
        url: "https://www.otohits.net/account/dashboard",
        proxy: "http://127.0.0.1:8888"
    }, function (error, response, body) {
        if (error) {
            console.log(error)
        } else {
            console.log("got dashboard")
        }
    });

}

function requestLogin() {
    request({
        headers: heaLogin,
        method: "POST",
        gzip: true,
        body: '__RequestVerificationToken=' + RequestVerificationToken + '&ReturnUrl=&Email=test13670%40163.com&Password=asdqwe123',
        url: "https://www.otohits.net/account/login",
        proxy: "http://127.0.0.1:8888"
    }, function (error, response, body) {
        if (error) {
            console.log(error)
        } else if (response.statusCode == 200) {
            console.log('too many times:' + (body == 'Too many attempt of logins. Throttling started. You will be able to login in 15min...'))
            setTimeout(function () {
                requestIndex()
            }, 900000);
        } else if (response.statusCode == 302) {
            console.log("already login")
            // console.log(body.match(/dashboard2/))
            // requestdashboard()

            // fs.open("test1.txt","a",0644,function(e,fd){
            //     if(e) throw e;
            //     fs.write(fd,JSON.stringify(response),function(e){
            //         if(e) throw e;
            //         fs.closeSync(fd);
            //     })
            // });
            requestauto()
            setInterval(function () {
                requestauto()
            }, 20000)
        }
    });
}

function requestIndex() {
    request({
        headers: heaIndex,
        method: "GET",
        gzip: true,
        url: "https://www.otohits.net/account/login",
        proxy: "http://127.0.0.1:8888" // Note the fully-qualified path to Fiddler proxy. No "https" is required, even for https connections to outside.
    }, function (error, response, body) {
        if (error) {
            console.log(error)
        } else {
            var reg = /\<input name=\\\"__RequestVerificationToken\\\" type=\\\"hidden\\\" value=\\\"(.{108,108})\\\"/g
            RequestVerificationToken = JSON.stringify(body).match(reg)[0].split("\\")[5].substr(1)
            console.log("got RequestVerificationToken:"+RequestVerificationToken)
            requestLogin()
        }

    });
}
// requestauto()
// requestIndex()
function setSessionId() {
    request({
        // headers: heaIndex,
        method: "GET",
        gzip: true,
        url: "https://www.otohits.net/",
        proxy: "http://127.0.0.1:8888" // Note the fully-qualified path to Fiddler proxy. No "https" is required, even for https connections to outside.
    }, function (error, response, body) {
        if (error) {
            console.log(error)
        } else {
            // console.log(JSON.parse(response.headers))
            SessionId = response.headers["set-cookie"][0].split(";")[0].split("=")[1]
            console.log("got SessionId:"+SessionId)
            setForgery()
        }

    });
}

function setForgery() {
    request({
        headers: heaForgery,
        method: "GET",
        gzip: true,
        url: "https://www.otohits.net/account/login",
        proxy: "http://127.0.0.1:8888" // Note the fully-qualified path to Fiddler proxy. No "https" is required, even for https connections to outside.
    }, function (error, response, body) {
        if (error) {
            console.log(error)
        } else {
            // console.log(response.headers["set-cookie"][0].split(";")[0].split("=")[1])
            otohitsforgery = response.headers["set-cookie"][0].split(";")[0].split("=")[1]
            console.log("got otohitsforgery:"+otohitsforgery)
            requestIndex()
        }

    });
}
function requestVali(params) {
    request({
        headers: heaVali,
        method: "POST",
        gzip: true,
        body: params,
        url: "https://www.otohits.net/account/validatesecurity",
        proxy: "http://127.0.0.1:8888"
    }, function (error, response, body) {
        if (error) {
            console.log(error)
        } else if (response.statusCode == 200) {
            console.log('autosurfsecurity:'+body)
            
        } 
    });
}
setSessionId()