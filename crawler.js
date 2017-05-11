var request = require("request");
process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = '0';
request({
  method:"GET",
  url:'',
  proxy: "http://134.213.208.187:4444/"
},function(error, response, body){
  if(error){
    console.log("error"+error)
  }else if(response){
    console.log("response"+response)
  }else if (response) {
    console.log("response"+response)
  }
})
