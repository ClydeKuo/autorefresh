// 添加依赖
var request = require('request'); 
var urls = ['http://blog.csdn.net/ClydeKuo/article/details/53741755','http://blog.csdn.net/ClydeKuo/article/details/54137922',"http://blog.csdn.net/ClydeKuo/article/details/54631321","http://blog.csdn.net/ClydeKuo/article/details/54928110","http://blog.csdn.net/ClydeKuo/article/details/54929081","http://blog.csdn.net/ClydeKuo/article/details/54966667"]; // 填写你需要刷的文章地址
var count = 0; // 刷了多少次
var len = urls.length; // 需要刷的文章篇数
var co = 0; // 为了循环刷新
setInterval(function() {
    count = count + 1;
    request(urls[co], function (error, response, body) {
      if (!error && response.statusCode == 200) {
        console.log('成功' + count);
        // 每篇文章刷的次数=count/len
      }
        })
    co = co + 1;
    if (co == len) {
            co = 0;
    }
}, 5000); // 这里的5000  代表的 5*1000ms执行一次 