process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = '0'; // Ignore 'UNABLE_TO_VERIFY_LEAF_SIGNATURE' authorization error
var request = require('request');
var moment = require("moment");
var tz = require("moment-timezone")
var fs = require('fs');
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
            console.log(response.statusCode)
            // console.log(body)
            if(body.length>930){
                console.log(body.length+"waiting")
                sleep(30000)
            }
            console.log(body.length)
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
            console.log('got surf url')
            // console.log(body)
            // console.log(JSON.parse(body).LS)
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
        if(error){
            console.log(error)
        }else{
            console.log("got dashboard")
        }
    });

}

function requestLogin() {
    request({
        headers: heaLogin,
        method: "POST",
        gzip: true,
        body: '__RequestVerificationToken=' + RequestVerificationToken + '&ReturnUrl=&Email=test13669%40163.com&Password=asdqwe123',
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
            requestdashboard()
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
            console.log("got RequestVerificationToken")
                requestLogin()
            }

    });
}
// requestauto()
// requestIndex()
function setSessionId(){
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
            SessionId=response.headers["set-cookie"][0].split(";")[0].split("=")[1]
            console.log("got SessionId")
            setForgery()
        }

    });
}
function setForgery(){
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
            otohitsforgery=response.headers["set-cookie"][0].split(";")[0].split("=")[1]
            console.log("got otohitsforgery")
            requestIndex()
        }

    });
}
setSessionId()