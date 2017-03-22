var hea= {'referer': 'https://www.otohits.net/account/wfautosurf',
'origin':'https://www.otohits.net',
'ASP.NET_SessionId':'5ksjj2kmsnv40srvfh1hanl5',
'WW':'lang=en',
'otohitsforgery':'38pRxqlNH8uBoqFPPmZz7a7cu3akhZ9EEoz-XYeRErx3NUAJD1UqUTeEMcx9x0ySGQGglXeL7KUiOwI1CKACDplPAlLxpE-U8P9ktPBrkQw1',
'X-Requested-With':'XMLHttpRequest'}
var request = require('request');
request({
  method: 'GET',
  host:'www.otohits.net',
  url: 'https://www.otohits.net/api/userpoints',
  headers: hea
  }, function (error, response, body) {
  console.log('Status:', response.statusCode);
  console.log('Headers:', JSON.stringify(response.headers));
  console.log('Response:', body);
});
