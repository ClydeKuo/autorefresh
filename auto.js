// �������
var request = require('request'); 
var urls = ['http://blog.csdn.net/ClydeKuo/article/details/53741755','http://blog.csdn.net/ClydeKuo/article/details/54137922',"http://blog.csdn.net/ClydeKuo/article/details/54631321","http://blog.csdn.net/ClydeKuo/article/details/54928110","http://blog.csdn.net/ClydeKuo/article/details/54929081","http://blog.csdn.net/ClydeKuo/article/details/54966667"]; // ��д����Ҫˢ�����µ�ַ
var count = 0; // ˢ�˶��ٴ�
var len = urls.length; // ��Ҫˢ������ƪ��
var co = 0; // Ϊ��ѭ��ˢ��
setInterval(function() {
    count = count + 1;
    request(urls[co], function (error, response, body) {
      if (!error && response.statusCode == 200) {
        console.log('�ɹ�' + count);
        // ÿƪ����ˢ�Ĵ���=count/len
      }
        })
    co = co + 1;
    if (co == len) {
            co = 0;
    }
}, 5000); // �����5000  ����� 5*1000msִ��һ�� 