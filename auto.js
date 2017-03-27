// ��������
var request = require('request');
//fs2.js
var fs = require('fs'); 
// ��д����Ҫˢ�����µ�ַ
var urls=['http://ptp.skillerzforum.com/promote.php?id=22979']
//var urls = ['http://blog.csdn.net/ClydeKuo/article/details/53741755','http://blog.csdn.net/ClydeKuo/article/details/54137922',"http://blog.csdn.net/ClydeKuo/article/details/54631321","http://blog.csdn.net/ClydeKuo/article/details/54928110","http://blog.csdn.net/ClydeKuo/article/details/54929081","http://blog.csdn.net/ClydeKuo/article/details/54966667"]; 
var count = 0; // ˢ�˶��ٴ�
var len = urls.length; // ��Ҫˢ������ƪ��
var co = 0; // Ϊ��ѭ��ˢ��
// setInterval(function() {
//     count = count + 1;
//     request(urls[co], function (error, response, body) {
//       if (!error && response.statusCode == 200) {
//         // console.log('Article '+co+' has refreshed '+Math.ceil(count/len)+' times');
//         // ÿƪ����ˢ�Ĵ���=count/len
//         console.log(response)
//       }
//         })
//     co = co + 1;
//     if (co == len) {
//             co = 0;
//     }
// }, 5000); // ������5000  ������ 5*1000msִ��һ�� 
request(urls[co], function (error, response, body) {
      if (!error && response.statusCode == 200) {
        // console.log('Article '+co+' has refreshed '+Math.ceil(count/len)+' times');
        // ÿƪ����ˢ�Ĵ���=count/len
        // fs.open("test1.txt","a",0644,function(e,fd){
        //     if(e) throw e;
        //     fs.write(fd,response,function(e){
        //         if(e) throw e;
        //         fs.closeSync(fd);
        //     })
        // });
        console.log(body)
      }
        })