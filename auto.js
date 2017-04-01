// ��������
function clone(myObj) {
    if (typeof(myObj) != 'object') return myObj;
    if (myObj == null) return myObj;
    var myNewObj = new Object();
    for (var i in myObj)
        myNewObj[i] = clone(myObj[i]);
    return myNewObj;
}
// var gg={"l":1213,ss:{"de":212312,"wqrew":4532,qeqw:{"dfwe":32431}}}
// var gge=new clone(gg)
// console.log(gge)
// require('request').debug = true
var request = require('request');
// var urls = ['http://blog.csdn.net/ClydeKuo/article/details/53741755','http://blog.csdn.net/ClydeKuo/article/details/54137922',"http://blog.csdn.net/ClydeKuo/article/details/54631321","http://blog.csdn.net/ClydeKuo/article/details/54928110","http://blog.csdn.net/ClydeKuo/article/details/54929081","http://blog.csdn.net/ClydeKuo/article/details/54966667"]; // ��д����Ҫˢ�����µ�ַ
var urls = ['http://adpays.net/v.php?user=4297']
var count = 0; // ˢ�˶��ٴ�
var len = urls.length; // ��Ҫˢ������ƪ��
var co = 0; // Ϊ��ѭ��ˢ��
setInterval(function() {
count = count + 1;
var heaLogin = {
    'Host': 'www.otohits.net',
    'Connection': 'close',
    'Cache-Control': 'max-age=0',
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
    'Origin': 'https://www.otohits.net',
    'Upgrade-Insecure-Requests': 1,
    // 'X-Requested-With':'XMLHttpRequest',
    'User-Agent': 'Mozilla/5.0 (Windows NT 6.3; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36',
    'Content-Type': 'application/x-www-form-urlencoded',
    'Accept-Encoding': 'gzip,deflate',
    'Accept-Language': 'zh-CN,zh;q=0.8',
}
var kk = request({
    headers: heaLogin,
    url: urls[co],
    timeout:1000
}, function(error, response, body) {
    if (!error && response.statusCode == 200) {
        console.log('Article ' + co + ' has refreshed ' + Math.ceil(count / len) + ' times');
        // ÿƪ����ˢ�Ĵ���=count/len
        // kk.destroy()
    }
    // console.log(kk)
    // var ii=new clone()
    // console.log(kk==this)
    // kk=null
    // console.log(kk==this)
    // console.log('======================================================================')
    // console.log(kk)
    // console.log('.......................................................................')
})
// kk=null
co = co + 1;
if (co == len) {
    co = 0;
}
}, 2); // ������5000  ������ 5*1000msִ��һ��
