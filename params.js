var utils = require('utility');
function getParams(params) {
    var q = 1489382859367
    var L = 0
    for (var i = 0, len = params[1].length; i < len; i++) {
        L += params[1][i] * params[1][i]
    }
    var v = 256 * params[2]
    var ll = L.toString() + '_' + params[0].toString() + '_' + q.toString() + '_' + v.toString()
    var l = utils.md5(ll)

    console.log(ll)
    console.log("k=" + l + '&v=' + q + "&p=" + v)
}
getParams([1490873740, [256,64,10,1], 56905])
