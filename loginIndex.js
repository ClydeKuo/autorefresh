process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = '0'; // Ignore 'UNABLE_TO_VERIFY_LEAF_SIGNATURE' authorization error
var request = require('request');
var moment = require("moment");
var tz = require("moment-timezone")
var fs = require('fs');
var colors = require('colors');
var utils = require('utility');
var proxy = "http://127.0.0.1:8888"

var RequestVerificationToken = []
var SessionId = []
var otohitsforgery = []
var securityTimes = []
var color = ['yellow', 'cyan', 'magenta', 'green', 'blue', 'rainbow', 'zebra', 'red']
// var color =[]
var userName = ['test13669', 'test13670', 'test13671', 'test13672', 'test13673', 'test13674', 'test13675' ,'test13676']
 // userName = ['test13669']

if (process.platform == 'linux') {
    console.log('This platform is linux:' + (process.platform == 'linux'));
    proxy = ""
}

function delay(i){
        setTimeout(function(){
            setSessionId(i)
        },i*1000)
}

for (var i = 0, len = userName.length; i < len; i++) {
    securityTimes[i] = 0
    color.push('yellow')
    delay(i)
}

function apiget(i,func,header, url, callback) {
    var req=request.get({
        headers: header,
        // method: "GET",
        gzip: true,
        url: url,
        followRedirect: false,
        proxy: proxy
    }, function(error, response, body) {
        if (error) {
            // console.log(userName[i][color[i]]+(' '+func+' got error: \n'+error).red)
            // console.log(userName[i])
            setTimeout(function() {
                console.log(userName[i][color[i]]+'connect again')
                apiget(i,func,header, url, callback)
            }, 10000)
        } else {
            try{
                callback(response, body)
            }catch(e){
                console.error(userName[i][color[i]]+(' '+func+' got error: \n'+e).red)
                setTimeout(function() {
                    console.log(userName[i][color[i]]+'connect again')
                    apiget(i,func,header, url, callback)
                }, 10000)
            }

        }
    });
    req.end()
}

function apipost(i,func,header, url, body1, callback) {
    var req2=request.post({
        headers: header,
        // method: "POST",
        gzip: true,
        url: url,
        body: body1,
        // proxy: proxy,
        followRedirect: false,
    }, function(error, response, body) {
        if (error) {
            console.error(userName[i][color[i]]+(' '+func+' got error: \n'+error).red)
            setTimeout(function() {
                console.log(userName[i][color[i]]+'connect again')
                apipost(i,func,header, url, body, callback)
            }, 10000)
        } else {
            try{
                callback(response, body)
            }catch(e){
                console.error(userName[i][color[i]]+(' '+func+' got error: \n'+e).red)
                setTimeout(function() {
                    console.log(userName[i][color[i]]+'connect again')
                    apipost(i,func,header, url, callback)
                }, 10000)
            }
        }
    });
    // req2.end()
}


function requestLogin(i) {
    var nextUrl = "https://www.otohits.net/account/login"
    var body = '__RequestVerificationToken=' + RequestVerificationToken[i] + '&ReturnUrl=&Email=' + userName[i] + '%40163.com&Password=asdqwe123'
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
        'Cookie': 'WW=lang=en; ASP.NET_SessionId=' + SessionId[i] + '; otohitsforgery=' + otohitsforgery[i],
    }
    apipost(i,'requestLogin',heaLogin, nextUrl, body, function(response, body) {
        if (response.statusCode == 200) {
            console.log(userName[i][color[i]] + ' : too many times:' + (body == 'Too many attempt of logins. Throttling started. You will be able to login in 15min...'))
            setTimeout(function() {
                requestIndex(i)
            }, 900000);
        } else if (response.statusCode == 302) {
            console.log(userName[i][color[i]] + " : already login")
            requestauto(i)
        }
    })
}

function requestVali(i, params) {
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
        'Cookie': 'WW=lang=en; ASP.NET_SessionId=' + SessionId[i] + '; otohitsforgery=' + otohitsforgery[i],
    }
    var nextUrl = "https://www.otohits.net/account/validatesecurity"
    apipost(i,'requestVali',heaVali, nextUrl, params, function(response, body) {
        if (response.statusCode == 200) {
            securityTimes[i]++
                console.log(userName[i][color[i]] + ' : autosurfsecurity:' + body)
            requestauto(i)
        }
    })
}

function requestauto(i) {
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
        'Cookie': 'WW=lang=en; ASP.NET_SessionId=' + SessionId[i] + '; otohitsforgery=' + otohitsforgery[i],
    }
    var nextUrl = "https://www.otohits.net/account/wrautosurfcheck"
    apipost(i,'requestauto',heaauto, nextUrl, '', function(response, body) {
        console.log(userName[i][color[i]] + ' : got surf url:' + JSON.parse(body).LS)
        if (body.match(/autosurfsecurity/)) {
            console.log(userName[i][color[i]] + " : got securitycheck")
            console.log(userName[i][color[i]] + ' : body.length:' + body.length + '  validatesecuritying')
            requestOto(i)
            // getjs()
        } else {
            console.log(userName[i][color[i]] + ' : no securitycheck')
            console.log(userName[i][color[i]] + ' : autosurfing .... body.length:' + body.length)
            requestID(i)
        }
    })
}

function requestOto(i) {
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
        'Referer': 'https://www.otohits.net/account/wfautosurf',
        'Accept-Encoding': 'gzip,deflate',
        'Accept-Language': 'zh-CN,zh;q=0.8',
        'Cookie': 'WW=lang=en; ASP.NET_SessionId=' + SessionId[i] + '; otohitsforgery=' + otohitsforgery[i],
        'Host': 'www.otohits.net',
    }
    var nextUrl = "https://www.otohits.net/account/autosurfsecurity"
    apiget(i,'requestOto',heaOto, nextUrl, function(response, body) {
        if (response.statusCode == 200) {
            // console.log('autosurfsecurity:'+body)
            var arr = JSON.parse('[' + body.match(/oto\.otoc\.s\(.*\)/)[0].slice(11, -1) + ']')
            console.log(userName[i][color[i]] + ' : has to security')
            setTimeout(function() {
                requestVali(i, getParams(arr))
            }, 10000);
        }
    })
}

function requestID(i) {
    var nextUrl = "https://www.otohits.net/account/wrautosurfrender?d=" + new Date().getTime()
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
        'Cookie': 'WW=lang=en; ASP.NET_SessionId=' + SessionId[i] + '; otohitsforgery=' + otohitsforgery[i],
    }
    apiget(i,'requestID',heaID, nextUrl, function(response, body) {
        console.log(userName[i][color[i]] + ' : response.statusCode:' + response.statusCode)
        console.log(userName[i][color[i]] + ' : security check times:' + securityTimes[i])
        console.log(userName[i][color[i]] + ' : surf completed')
        setTimeout(function() {
            requestauto(i)
        }, 10000)

    })
}

function getjs(i) {
    var nextUrl = "https://www.otohits.net/scripts/as2.min.js"
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
        'Cookie': 'WW=lang=en; ASP.NET_SessionId=' + SessionId[i] + '; otohitsforgery=' + otohitsforgery[i],
    }
    apiget(i,'getjs',heaID[i], nextUrl, function(response, body) {
        console.log("got as2.js, body length:" + body.length)
    })
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

function requestIndex(i) {
    var nextUrl = "https://www.otohits.net/account/login"
    var heaIndex = {
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
        'Accept-Encoding': 'gzip,deflate',
        'Accept-Language': 'zh-CN,zh;q=0.8',
        'Cache-Control': 'max-age=0',
        'Connection': 'keep-alive',
        'Cookie': 'WW=lang=en; ASP.NET_SessionId=' + SessionId[i] + '; otohitsforgery=' + otohitsforgery[i],
        'Host': 'www.otohits.net',
        // 'origin':'https://www.otohits.net',
        'If-Modified-Since': timel(),
        'referer': 'https://www.otohits.net/',
        'Upgrade-Insecure-Requests': 1,
        'User-Agent': 'Mozilla/5.0 (Windows NT 6.3; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36',
        // 'X-Requested-With':'XMLHttpRequest',
    }
    apiget(i,'requestIndex',heaIndex, nextUrl, function(response, body) {
        var reg = /\<input name=\\\"__RequestVerificationToken\\\" type=\\\"hidden\\\" value=\\\"(.{108,108})\\\"/g
        RequestVerificationToken[i] = JSON.stringify(body).match(reg)[0].split("\\")[5].substr(1)
        console.log(userName[i][color[i]] + " : got RequestVerificationToken:" + RequestVerificationToken[i])
        requestLogin(i)
    })
}

function setSessionId(i) {
    var nextUrl = "https://www.otohits.net/"
    var heaSession = {
        'Host': 'www.otohits.net',
        'Connection': 'keep-alive',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
        'Upgrade-Insecure-Requests': 1,
        'User-Agent': 'Mozilla/5.0 (Windows NT 6.3; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36',
        'Accept-Encoding': 'gzip,deflate',
        'Accept-Language': 'zh-CN,zh;q=0.8',
    }
    apiget(i,'setSessionId',heaSession, nextUrl, function(response, body) {
        SessionId[i] = response.headers["set-cookie"][0].split(";")[0].split("=")[1]
        console.log(userName[i][color[i]] + " : got SessionId:" + SessionId[i])
        setForgery(i)
    })
}

function setForgery(i) {
    var nextUrl = "https://www.otohits.net/account/login"
    var heaForgery = {
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
        'Accept-Encoding': 'gzip,deflate',
        'Accept-Language': 'zh-CN,zh;q=0.8',
        // 'Cache-Control': 'max-age=0',
        'Connection': 'keep-alive',
        'Cookie': 'WW=lang=en; ASP.NET_SessionId=' + SessionId[i],
        'Host': 'www.otohits.net',
        // 'origin':'https://www.otohits.net',
        'If-Modified-Since': timel(),
        'referer': 'https://www.otohits.net/?cl=en',
        'Upgrade-Insecure-Requests': 1,
        'User-Agent': 'Mozilla/5.0 (Windows NT 6.3; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36',
        // 'X-Requested-With':'XMLHttpRequest',
    }
    apiget(i,'setForgery',heaForgery, nextUrl, function(response, body) {
        otohitsforgery[i] = response.headers["set-cookie"][0].split(";")[0].split("=")[1]
        console.log(userName[i][color[i]] + " : got otohitsforgery:" + otohitsforgery[i])
        requestIndex(i)
    })
}
var text = new Date() + " running\n"
// fs.open("test1.vue", "a", 0644, function(e, fd) {
//     if (e) throw e;
//     fs.write(fd, text, function(e) {
//         if (e) throw e;
//         fs.closeSync(fd);
//     })
// });

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
    var v = 256 * params[2]
    var ll = L.toString() + '_' + params[0].toString() + '_' + q.toString() + '_' + v.toString()
    var l = utils.md5(ll)
    return "k=" + l + '&v=' + q + "&p=" + v
}
