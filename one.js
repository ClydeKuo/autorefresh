var request = require("request");
process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = '0';
request({
    // headers: heaLogin,
    // "rejectUnauthorized": false,
    method: "GET",
    url: "http://www.discoveryland.tk/",
    proxy: "http://200.45.32.150:3129"
}, function(error, response, body) {
    if (error) {
        console.log(error)
    } else {
        console.log("got dashboard")
    }
});
