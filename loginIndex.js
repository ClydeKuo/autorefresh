process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = '0'; // Ignore 'UNABLE_TO_VERIFY_LEAF_SIGNATURE' authorization error
var request = require('request');
var moment = require("moment");
var tz = require("moment-timezone")
var fs = require('fs');
var utils = require('utility');
// var timel = ''
var RequestVerificationToken = ''
var SessionId = 'e5vfioamfzmlbb3ppukagrww'
var otohitsforgery = '1sPSyyN4Dcbop52-0gGLdywUbOYcy_cncPkry-NxgDaqWoPt8p2gkswaV9wrVmdjrKLlHGnK2sA6SaBD5WIzDvX0gTkKtxeNJdUjNHEtbys1';
var interval=''
//获取所需时间格式
function timel() {
    var timeReg = /(AM)|(PM)/
    var timee = moment().subtract(1, 'hours').tz('Europe/London').format('llll')
    if (timee.match(/AM/)) {
        return timee.replace(/AM/, "GMT")
    } else if (timee.match(/PM/)) {
        var temp = Number(timee.match(/(\d{1,2}):/)[1]) + 12
        return timee.replace(/(\d{1,2}):/, temp + ":").replace(/PM/, "GMT")
    }
}
//获取验证页面的输出参数
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
var heaForgery = {
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
    'Accept-Encoding': 'gzip,deflate',
    'Accept-Language': 'zh-CN,zh;q=0.8',
    // 'Cache-Control': 'max-age=0',
    'Connection': 'keep-alive',
    'Cookie': 'WW=lang=en; ASP.NET_SessionId=' + SessionId,
    'Host': 'www.otohits.net',
    // 'origin':'https://www.otohits.net',
    'If-Modified-Since': timel(),
    'referer': 'https://www.otohits.net/?cl=en',
    'Upgrade-Insecure-Requests': 1,
    'User-Agent': 'Mozilla/5.0 (Windows NT 6.3; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36',
    // 'X-Requested-With':'XMLHttpRequest',
}
var heaIndex = {
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
    'Accept-Encoding': 'gzip,deflate',
    'Accept-Language': 'zh-CN,zh;q=0.8',
    'Cache-Control': 'max-age=0',
    'Connection': 'keep-alive',
    'Cookie': 'WW=lang=en; ASP.NET_SessionId=' + SessionId + '; otohitsforgery=' + otohitsforgery,
    'Host': 'www.otohits.net',
    // 'origin':'https://www.otohits.net',
    'If-Modified-Since': timel(),
    'referer': 'https://www.otohits.net/',
    'Upgrade-Insecure-Requests': 1,
    'User-Agent': 'Mozilla/5.0 (Windows NT 6.3; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36',
    // 'X-Requested-With':'XMLHttpRequest',
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
var heaOto = {
    'Connection': 'keep-alive',
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
    'Upgrade-Insecure-Requests': 1,
    // 'Content-Length': 60,
    // 'Cache-Control': 'max-age=0',
    // 'Origin': 'https://www.otohits.net',
    'User-Agent': 'Mozilla/5.0 (Windows NT 6.3; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36',
    // 'Content-Type': 'application/x-www-form-urlencoded',
    // 'X-Requested-With': 'XMLHttpRequest',
    // 'Accept': '*/*',
    'Referer': 'https://www.otohits.net/account/autosurfsecurity',
    'Accept-Encoding': 'gzip,deflate',
    'Accept-Language': 'zh-CN,zh;q=0.8',
    'Cookie': 'WW=lang=en; ASP.NET_SessionId=' + SessionId + '; otohitsforgery=' + otohitsforgery,
    'Host': 'www.otohits.net',
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
        proxy: "http://127.0.0.1:8888",
        followRedirect: false
    }, function(error, response, body) {
        if (error) {
            console.log(error)
        } else {
            console.log('response.statusCode:' + response.statusCode)
            console.log('requestID completed')
            // console.log('...')
            // fs.open("test1.vue","a",0644,function(e,fd){
            //     if(e) throw e;
            //     fs.write(fd,JSON.stringify(body),function(e){
            //         if(e) throw e;
            //         fs.closeSync(fd);
            //     })
            // });
            if (body.match(/autosurfsecurity/)) {
                console.log("got securitycheck")
                console.log('body.length:' + body.length + '  validatesecuritying')
                requestOto()
            } else {
                console.log('no securitycheck')
                console.log('autosurfing .... body.length:' + body.length)
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
    }, function(error, response, body) {
        // console.log(response.statusCode)
        if (error) {
            console.log(error)
        } else {
            console.log('got surf url:' + JSON.parse(body).LS)
            requestID()
        }
    })
}
function requestOto() {
    request({
        headers: heaOto,
        method: "GET",
        gzip: true,
        // body: params,
        url: "https://www.otohits.net/account/autosurfsecurity",
        proxy: "http://127.0.0.1:8888"
    }, function(error, response, body) {
        if (error) {
            console.log(error)
        } else if (response.statusCode == 200) {
            // console.log('autosurfsecurity:'+body)
            var arr = JSON.parse('[' + body.match(/oto\.otoc\.s\(.*\)/)[0].slice(11, -1) + ']')
            console.log('body.match(/oto\.otoc\.s\(.*\)/):' + arr)
            setTimeout(function() {
                requestVali(getParams(arr))
            }, 5000);
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
    }, function(error, response, body) {
        if (error) {
            console.log(error)
        } else if (response.statusCode == 200) {
            console.log('autosurfsecurity:' + body)
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
        proxy: "http://127.0.0.1:8888",
        followRedirect: false
    }, function(error, response, body) {
        if (error) {
            console.log(error)
        } else if (response.statusCode == 200) {
            console.log('too many times:' + (body == 'Too many attempt of logins. Throttling started. You will be able to login in 15min...'))
            setTimeout(function() {
                requestIndex()
            }, 900000);
        } else if (response.statusCode == 302) {
            console.log("already login")
            requestauto()
            interval=setInterval(function() {
                requestauto()
            }, 20000)
        }
    });
}
function requestdashboard() {
    request({
        headers: heaLogin,
        method: "GET",
        gzip: true,
        url: "https://www.otohits.net/account/dashboard",
        proxy: "http://127.0.0.1:8888"
    }, function(error, response, body) {
        if (error) {
            console.log(error)
        } else {
            console.log("got dashboard")
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
    }, function(error, response, body) {
        if (error) {
            console.log(error)
        } else {
            var reg = /\<input name=\\\"__RequestVerificationToken\\\" type=\\\"hidden\\\" value=\\\"(.{108,108})\\\"/g
            RequestVerificationToken = JSON.stringify(body).match(reg)[0].split("\\")[5].substr(1)
            console.log("got RequestVerificationToken:" + RequestVerificationToken)
            requestLogin()
        }
    });
}
function setSessionId() {
    request({
        // headers: heaIndex,
        method: "GET",
        gzip: true,
        url: "https://www.otohits.net/",
        proxy: "http://127.0.0.1:8888" // Note the fully-qualified path to Fiddler proxy. No "https" is required, even for https connections to outside.
    }, function(error, response, body) {
        if (error) {
            console.log(error)
        } else {
            // console.log(JSON.parse(response.headers))
            SessionId = response.headers["set-cookie"][0].split(";")[0].split("=")[1]
            console.log("got SessionId:" + SessionId)
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
    }, function(error, response, body) {
        if (error) {
            console.log(error)
        } else {
            otohitsforgery = response.headers["set-cookie"][0].split(";")[0].split("=")[1]
            console.log("got otohitsforgery:" + otohitsforgery)
            requestIndex()
        }
    });
}
setSessionId()
