! function (y) {
    function r(g, a) {
        var b = (65535 & g) + (65535 & a);
        return (g >> 16) + (a >> 16) + (b >> 16) << 16 | 65535 & b
    }

    function h(a, k, b, h, l, m) {
        a = r(r(k, a), r(h, m));
        return r(a << l | a >>> 32 - l, b)
    }

    function a(a, k, b, l, m, t, n) {
        return h(k & b | ~k & l, a, k, m, t, n)
    }

    function l(a, k, b, l, m, t, n) {
        return h(k & l | b & ~l, a, k, m, t, n)
    }

    function m(a, k, b, l, m, t, n) {
        return h(b ^ (k | ~l), a, k, m, t, n)
    }

    function E(g, k) {
        g[k >> 5] |= 128 << k % 32;
        g[(k + 64 >>> 9 << 4) + 14] = k;
        var b, C, D, t, n, d = 1732584193,
            e = -271733879,
            f = -1732584194,
            c = 271733878;
        for (b = 0; b < g.length; b += 16) C = d, D = e, t = f, n = c, d = a(d,
                e, f, c, g[b], 7, -680876936), c = a(c, d, e, f, g[b + 1], 12, -389564586), f = a(f, c, d, e, g[b + 2], 17, 606105819), e = a(e, f, c, d, g[b + 3], 22, -1044525330), d = a(d, e, f, c, g[b + 4], 7, -176418897), c = a(c, d, e, f, g[b + 5], 12, 1200080426), f = a(f, c, d, e, g[b + 6], 17, -1473231341), e = a(e, f, c, d, g[b + 7], 22, -45705983), d = a(d, e, f, c, g[b + 8], 7, 1770035416), c = a(c, d, e, f, g[b + 9], 12, -1958414417), f = a(f, c, d, e, g[b + 10], 17, -42063), e = a(e, f, c, d, g[b + 11], 22, -1990404162), d = a(d, e, f, c, g[b + 12], 7, 1804603682), c = a(c, d, e, f, g[b + 13], 12, -40341101), f = a(f, c, d, e, g[b + 14], 17, -1502002290),
            e = a(e, f, c, d, g[b + 15], 22, 1236535329), d = l(d, e, f, c, g[b + 1], 5, -165796510), c = l(c, d, e, f, g[b + 6], 9, -1069501632), f = l(f, c, d, e, g[b + 11], 14, 643717713), e = l(e, f, c, d, g[b], 20, -373897302), d = l(d, e, f, c, g[b + 5], 5, -701558691), c = l(c, d, e, f, g[b + 10], 9, 38016083), f = l(f, c, d, e, g[b + 15], 14, -660478335), e = l(e, f, c, d, g[b + 4], 20, -405537848), d = l(d, e, f, c, g[b + 9], 5, 568446438), c = l(c, d, e, f, g[b + 14], 9, -1019803690), f = l(f, c, d, e, g[b + 3], 14, -187363961), e = l(e, f, c, d, g[b + 8], 20, 1163531501), d = l(d, e, f, c, g[b + 13], 5, -1444681467), c = l(c, d, e, f, g[b + 2], 9, -51403784),
            f = l(f, c, d, e, g[b + 7], 14, 1735328473), e = l(e, f, c, d, g[b + 12], 20, -1926607734), d = h(e ^ f ^ c, d, e, g[b + 5], 4, -378558), c = h(d ^ e ^ f, c, d, g[b + 8], 11, -2022574463), f = h(c ^ d ^ e, f, c, g[b + 11], 16, 1839030562), e = h(f ^ c ^ d, e, f, g[b + 14], 23, -35309556), d = h(e ^ f ^ c, d, e, g[b + 1], 4, -1530992060), c = h(d ^ e ^ f, c, d, g[b + 4], 11, 1272893353), f = h(c ^ d ^ e, f, c, g[b + 7], 16, -155497632), e = h(f ^ c ^ d, e, f, g[b + 10], 23, -1094730640), d = h(e ^ f ^ c, d, e, g[b + 13], 4, 681279174), c = h(d ^ e ^ f, c, d, g[b], 11, -358537222), f = h(c ^ d ^ e, f, c, g[b + 3], 16, -722521979), e = h(f ^ c ^ d, e, f, g[b + 6], 23, 76029189), d = h(e ^
                f ^ c, d, e, g[b + 9], 4, -640364487), c = h(d ^ e ^ f, c, d, g[b + 12], 11, -421815835), f = h(c ^ d ^ e, f, c, g[b + 15], 16, 530742520), e = h(f ^ c ^ d, e, f, g[b + 2], 23, -995338651), d = m(d, e, f, c, g[b], 6, -198630844), c = m(c, d, e, f, g[b + 7], 10, 1126891415), f = m(f, c, d, e, g[b + 14], 15, -1416354905), e = m(e, f, c, d, g[b + 5], 21, -57434055), d = m(d, e, f, c, g[b + 12], 6, 1700485571), c = m(c, d, e, f, g[b + 3], 10, -1894986606), f = m(f, c, d, e, g[b + 10], 15, -1051523), e = m(e, f, c, d, g[b + 1], 21, -2054922799), d = m(d, e, f, c, g[b + 8], 6, 1873313359), c = m(c, d, e, f, g[b + 15], 10, -30611744), f = m(f, c, d, e, g[b + 6], 15, -1560198380),
            e = m(e, f, c, d, g[b + 13], 21, 1309151649), d = m(d, e, f, c, g[b + 4], 6, -145523070), c = m(c, d, e, f, g[b + 11], 10, -1120210379), f = m(f, c, d, e, g[b + 2], 15, 718787259), e = m(e, f, c, d, g[b + 9], 21, -343485551), d = r(d, C), e = r(e, D), f = r(f, t), c = r(c, n);
        return [d, e, f, c]
    }

    function F(a) {
        var k, b = "";
        for (k = 0; k < 32 * a.length; k += 8) b += String.fromCharCode(a[k >> 5] >>> k % 32 & 255);
        return b
    }

    function z(a) {
        var k, b = [];
        b[(a.length >> 2) - 1] = void 0;
        for (k = 0; k < b.length; k += 1) b[k] = 0;
        for (k = 0; k < 8 * a.length; k += 8) b[k >> 5] |= (255 & a.charCodeAt(k / 8)) << k % 32;
        return b
    }

    function u(a) {
        return F(E(z(a),
            8 * a.length))
    }

    function G(a, k) {
        var b, h, l = z(a),
            m = [],
            n = [];
        m[15] = n[15] = void 0;
        16 < l.length && (l = E(l, 8 * a.length));
        for (b = 0; 16 > b; b += 1) m[b] = 909522486 ^ l[b], n[b] = 1549556828 ^ l[b];
        return h = E(m.concat(z(k)), 512 + 8 * k.length), F(E(n.concat(h), 640))
    }

    function H(a) {
        var k, b, h = "";
        for (b = 0; b < a.length; b += 1) k = a.charCodeAt(b), h += "0123456789abcdef".charAt(k >>> 4 & 15) + "0123456789abcdef".charAt(15 & k);
        return h
    }

    function x(a, h, b) {
        h ? b ? a = G(unescape(encodeURIComponent(h)), unescape(encodeURIComponent(a))) : (a = G(unescape(encodeURIComponent(h)),
            unescape(encodeURIComponent(a))), a = H(a)) : a = b ? u(unescape(encodeURIComponent(a))) : H(u(unescape(encodeURIComponent(a))));
        return a
    }
    console.log(this)
    "function" == typeof define && define.amd ? define(function () {
        return x
    }) : "object" == typeof module && module.exports ? module.exports = x : y.md5 = x
}(this);
var oto;

(function (y) {
    var r = function () {
        function h() {
            console.log("22")
        }

        function a(a) {
            for (var b = "", d = a.length, c = 0; c < d; c++) char = a[c], b += String.fromCharCode(char);
            return b
        }

        function l(a) {
            console.log(a)
            return eval(a)
        }

        function m(q) {
            K += 1;
            console.log("22")
            var l = q.width;
            L += l * q.height;
            l == A[0] && (R[a(e)](q, 0, 0), q = parseInt(v / A[0]), l = v % A[0], q = R[a(f)](l, q, 1, 1), v = q == A[0] ? q[a(c)][0] + q[a(c)][1] + q[a(c)][2] : A[0] * v);
            if (K == I[a(n)] && (h.v(a(S)), h.r(), q = (new T)[a(d)]() - M, l = L[a(g)]() + a(k) + M[a(g)]() + a(k) + q[a(g)]() + a(k) + v[a(g)](), l = md5(l), p && 2 <= p[a(n)] && p[1] == a(w))) {
                var m;
                m = new W;
                m[a(b)] = function () {};
                m[a(y)](a(X), a(Y), !0);
                m[a(C)](a(Z), a(aa));
                m[a(D)](a(ba) + l + a(ca) + q + a(da) + v)
            }
        }
        var r = [103, 101, 116, 69, 108, 101, 109, 101, 110, 116, 66, 121, 73, 100],
            F = [99, 114, 101, 97, 116, 101, 69, 108, 101, 109, 101, 110, 116],
            z = [115, 101, 116, 65, 116, 116, 114, 105, 98, 117, 116, 101],
            u = [105, 110, 110, 101, 114, 72, 84, 77, 76],
            G = [97, 112, 112, 101, 110, 100, 67, 104, 105, 108, 100],
            H = [115, 104, 105, 102, 116],
            x = [112, 117, 115, 104],
            g = [116, 111, 83, 116, 114, 105, 110, 103],
            k = [95],
            b = [111, 110, 114, 101, 97, 100, 121, 115, 116, 97, 116, 101, 99, 104, 97, 110, 103, 101],
            C = [115, 101, 116, 82, 101, 113, 117, 101, 115, 116, 72, 101, 97, 100, 101, 114],
            D = [115, 101, 110, 100],
            t = [109, 97, 116, 99, 104],
            n = [108, 101, 110, 103, 116, 104],
            d = [103, 101, 116, 84, 105, 109, 101],
            e = [100, 114, 97, 119, 73, 109, 97, 103, 101],
            f = [103, 101, 116, 73, 109, 97, 103, 101, 68, 97, 116, 97],
            c = [100, 97, 116, 97],
            y = [111, 112, 101, 110],
            w = [119, 119, 119, 46, 111, 116, 111, 104, 105, 116, 115, 46, 110, 101, 116],
            Y = [47, 97, 99, 99, 111, 117, 110, 116, 47, 118, 97, 108, 105, 100, 97, 116, 101, 115, 101, 99, 117, 114, 105, 116, 121],
            aa = [97, 112, 112, 108, 105, 99, 97, 116, 105, 111, 110, 47, 120, 45,
                119, 119, 119, 45, 102, 111, 114, 109, 45, 117, 114, 108, 101, 110, 99, 111, 100, 101, 100
            ],
            Z = [67, 111, 110, 116, 101, 110, 116, 45, 116, 121, 112, 101],
            U = [106, 115],
            ea = [84, 101, 115, 116, 105, 110, 103, 32, 106, 97, 118, 97, 115, 99, 114, 105, 112, 116, 46, 46, 46],
            N = [99, 115, 115],
            fa = [84, 101, 115, 116, 105, 110, 103, 32, 99, 115, 115, 46, 46, 46],
            ga = [35, 114, 101, 110, 100, 101, 114],
            ha = [116, 101, 120, 116, 45, 97, 108, 105, 103, 110],
            ia = [99, 101, 110, 116, 101, 114],
            S = [105, 109, 103],
            ja = [84, 101, 115, 116, 105, 110, 103, 32, 105, 109, 97, 103, 101, 115, 46, 46, 46],
            ka = [60, 105, 109, 103, 47, 62],
            la = [115, 114, 99],
            ma = [47, 99, 111, 110, 116, 101, 110, 116, 47, 115, 101, 99, 47],
            na = [46, 112, 110, 103],
            X = [80, 79, 83, 84],
            ba = [107, 61],
            ca = [38, 118, 61],
            da = [38, 112, 61],
            V = [115, 116, 101, 112, 115],
            oa = [112],
            pa = [105, 100],
            O = [115, 95],
            qa = [32, 79, 75, 33],
            ra = [32, 70, 65, 73, 76, 33],
            T = l(a([68, 97, 116, 101])),
            sa = l(a([119, 105, 110, 100, 111, 119])),
            P = l(a([100, 111, 99, 117, 109, 101, 110, 116])),
            W = l(a([88, 77, 76, 72, 116, 116, 112, 82, 101, 113, 117, 101, 115, 116])),
            Q = [],
            I = [],
            K = 0,
            M = 0,
            L = 0,
            v = 0,
            A = [256],
            p = sa[a([108, 111, 99, 97, 116, 105, 111, 110])][a([104, 114, 101, 102])][a(t)](/:\/\/(.[^/]+)/);
        P[a([114, 101, 102, 101, 114, 114, 101, 114])][a(t)](/:\/\/(.[^/]+)/);
        var B = function (b) {
                return P[a(r)](b)
            },
            J = [];
        J[a(x)](function () {
            h.p(a(U), a(ea));
            h.v(a(U));
            h.r()
        });
        J[a(x)](function () {
            p && 2 <= p[a(n)] && p[1] == a(w) && (h.p(a(N), a(fa)), $(a(ga)).css(a(ha)) == a(ia) ? (h.v(a(N)), h.r()) : h.f(a(N)))
        });
        J[a(x)](function () {
            h.p(a(S), a(ja));
            for (var b = 0; b < I.length; b++) $(a(ka)).attr(a(la), a(ma) + I[b] + a(na)).load(function () {
                m(this)
            })
        });
        var R = B(a([114, 101, 110, 100, 101, 114]))[a([103, 101, 116, 67, 111, 110, 116, 101, 120, 116])](a([50, 100]));
        h.l = function () {
            Q.push(new T)
        };
        h.i = function (a) {
            I = a
        };
        h.wt = function (a) {
            M = a
        };
        h.p = function (b, c) {
            if (p && 2 <= p[a(n)] && p[1] == a(w)) {
                B(a(V));
                var d = P[a(F)](a(oa));
                d[a(z)](a(pa), a(O) + b);
                d[a(u)] = c;
                B(a(V))[a(G)](d)
            }
        };
        h.v = function (b) {
            p && 2 <= p[a(n)] && p[1] == a(w) && (b = B(a(O) + b), b[a(u)] = b[a(u)] + a(qa))
        };
        h.f = function (b) {
            p && 2 <= p[a(n)] && p[1] == a(w) && (b = B(a(O) + b), b[a(u)] = b[a(u)] + a(ra))
        };
        h.r = function () {
            setTimeout(function () {
                if (p && 2 <= p[a(n)] && p[1] == a(w)) {
                    var b = J[a(H)]();
                    b && b()
                }
            }, 1E3)
        };
        h.s = function (b, c, e) {
            p ? 2 <= p[a(n)] && p[1] == a(w) &&
                (h.l(), Q[0][a(d)](), h.wt(b), h.i(c), v = e, h.r()) : (a(n), p[1] == a(w) && (h.l(), Q[0][a(d)](), h.wt(b), h.i(c), v = e))
        };
        return h
    }();
    y.otoc = r
    
})(oto || (oto = {}));