function Ct() {}
var yr = (function () {
    let s = 0;
    return function () {
        return s++;
    };
})();
function P(s) {
    return s === null || typeof s > 'u';
}
function j(s) {
    if (Array.isArray && Array.isArray(s)) return !0;
    let t = Object.prototype.toString.call(s);
    return t.slice(0, 7) === '[object' && t.slice(-6) === 'Array]';
}
function A(s) {
    return s !== null && Object.prototype.toString.call(s) === '[object Object]';
}
var K = (s) => (typeof s == 'number' || s instanceof Number) && isFinite(+s);
function mt(s, t) {
    return K(s) ? s : t;
}
function D(s, t) {
    return typeof s > 'u' ? t : s;
}
var xr = (s, t) => (typeof s == 'string' && s.endsWith('%') ? parseFloat(s) / 100 : s / t),
    wn = (s, t) => (typeof s == 'string' && s.endsWith('%') ? (parseFloat(s) / 100) * t : +s);
function $(s, t, e) {
    if (s && typeof s.call == 'function') return s.apply(e, t);
}
function W(s, t, e, i) {
    let n, o, r;
    if (j(s))
        if (((o = s.length), i)) for (n = o - 1; n >= 0; n--) t.call(e, s[n], n);
        else for (n = 0; n < o; n++) t.call(e, s[n], n);
    else if (A(s))
        for (r = Object.keys(s), o = r.length, n = 0; n < o; n++) t.call(e, s[r[n]], r[n]);
}
function xs(s, t) {
    let e, i, n, o;
    if (!s || !t || s.length !== t.length) return !1;
    for (e = 0, i = s.length; e < i; ++e)
        if (((n = s[e]), (o = t[e]), n.datasetIndex !== o.datasetIndex || n.index !== o.index))
            return !1;
    return !0;
}
function yi(s) {
    if (j(s)) return s.map(yi);
    if (A(s)) {
        let t = Object.create(null),
            e = Object.keys(s),
            i = e.length,
            n = 0;
        for (; n < i; ++n) t[e[n]] = yi(s[e[n]]);
        return t;
    }
    return s;
}
function _r(s) {
    return ['__proto__', 'prototype', 'constructor'].indexOf(s) === -1;
}
function gc(s, t, e, i) {
    if (!_r(s)) return;
    let n = t[s],
        o = e[s];
    A(n) && A(o) ? Ce(n, o, i) : (t[s] = yi(o));
}
function Ce(s, t, e) {
    let i = j(t) ? t : [t],
        n = i.length;
    if (!A(s)) return s;
    e = e || {};
    let o = e.merger || gc;
    for (let r = 0; r < n; ++r) {
        if (((t = i[r]), !A(t))) continue;
        let a = Object.keys(t);
        for (let l = 0, c = a.length; l < c; ++l) o(a[l], s, t, e);
    }
    return s;
}
function Le(s, t) {
    return Ce(s, t, { merger: pc });
}
function pc(s, t, e) {
    if (!_r(s)) return;
    let i = t[s],
        n = e[s];
    A(i) && A(n) ? Le(i, n) : Object.prototype.hasOwnProperty.call(t, s) || (t[s] = yi(n));
}
var nr = { '': (s) => s, x: (s) => s.x, y: (s) => s.y };
function Ht(s, t) {
    return (nr[t] || (nr[t] = bc(t)))(s);
}
function bc(s) {
    let t = yc(s);
    return (e) => {
        for (let i of t) {
            if (i === '') break;
            e = e && e[i];
        }
        return e;
    };
}
function yc(s) {
    let t = s.split('.'),
        e = [],
        i = '';
    for (let n of t)
        (i += n), i.endsWith('\\') ? (i = i.slice(0, -1) + '.') : (e.push(i), (i = ''));
    return e;
}
function Si(s) {
    return s.charAt(0).toUpperCase() + s.slice(1);
}
var ft = (s) => typeof s < 'u',
    Wt = (s) => typeof s == 'function',
    Sn = (s, t) => {
        if (s.size !== t.size) return !1;
        for (let e of s) if (!t.has(e)) return !1;
        return !0;
    };
function wr(s) {
    return s.type === 'mouseup' || s.type === 'click' || s.type === 'contextmenu';
}
var Y = Math.PI,
    B = 2 * Y,
    xc = B + Y,
    xi = Number.POSITIVE_INFINITY,
    _c = Y / 180,
    Z = Y / 2,
    gs = Y / 4,
    or = (Y * 2) / 3,
    gt = Math.log10,
    Tt = Math.sign;
function Mn(s) {
    let t = Math.round(s);
    s = Pe(s, t, s / 1e3) ? t : s;
    let e = Math.pow(10, Math.floor(gt(s))),
        i = s / e;
    return (i <= 1 ? 1 : i <= 2 ? 2 : i <= 5 ? 5 : 10) * e;
}
function Sr(s) {
    let t = [],
        e = Math.sqrt(s),
        i;
    for (i = 1; i < e; i++) s % i === 0 && (t.push(i), t.push(s / i));
    return e === (e | 0) && t.push(e), t.sort((n, o) => n - o).pop(), t;
}
function ge(s) {
    return !isNaN(parseFloat(s)) && isFinite(s);
}
function Pe(s, t, e) {
    return Math.abs(s - t) < e;
}
function Mr(s, t) {
    let e = Math.round(s);
    return e - t <= s && e + t >= s;
}
function Tn(s, t, e) {
    let i, n, o;
    for (i = 0, n = s.length; i < n; i++)
        (o = s[i][e]), isNaN(o) || ((t.min = Math.min(t.min, o)), (t.max = Math.max(t.max, o)));
}
function _t(s) {
    return s * (Y / 180);
}
function Mi(s) {
    return s * (180 / Y);
}
function vn(s) {
    if (!K(s)) return;
    let t = 1,
        e = 0;
    for (; Math.round(s * t) / t !== s; ) (t *= 10), e++;
    return e;
}
function kn(s, t) {
    let e = t.x - s.x,
        i = t.y - s.y,
        n = Math.sqrt(e * e + i * i),
        o = Math.atan2(i, e);
    return o < -0.5 * Y && (o += B), { angle: o, distance: n };
}
function _i(s, t) {
    return Math.sqrt(Math.pow(t.x - s.x, 2) + Math.pow(t.y - s.y, 2));
}
function wc(s, t) {
    return ((s - t + xc) % B) - Y;
}
function ht(s) {
    return ((s % B) + B) % B;
}
function Re(s, t, e, i) {
    let n = ht(s),
        o = ht(t),
        r = ht(e),
        a = ht(o - n),
        l = ht(r - n),
        c = ht(n - o),
        h = ht(n - r);
    return n === o || n === r || (i && o === r) || (a > l && c < h);
}
function st(s, t, e) {
    return Math.max(t, Math.min(e, s));
}
function Tr(s) {
    return st(s, -32768, 32767);
}
function It(s, t, e, i = 1e-6) {
    return s >= Math.min(t, e) - i && s <= Math.max(t, e) + i;
}
function Ti(s, t, e) {
    e = e || ((r) => s[r] < t);
    let i = s.length - 1,
        n = 0,
        o;
    for (; i - n > 1; ) (o = (n + i) >> 1), e(o) ? (n = o) : (i = o);
    return { lo: n, hi: i };
}
var Dt = (s, t, e, i) => Ti(s, e, i ? (n) => s[n][t] <= e : (n) => s[n][t] < e),
    vr = (s, t, e) => Ti(s, e, (i) => s[i][t] >= e);
function kr(s, t, e) {
    let i = 0,
        n = s.length;
    for (; i < n && s[i] < t; ) i++;
    for (; n > i && s[n - 1] > e; ) n--;
    return i > 0 || n < s.length ? s.slice(i, n) : s;
}
var Or = ['push', 'pop', 'shift', 'splice', 'unshift'];
function Er(s, t) {
    if (s._chartjs) {
        s._chartjs.listeners.push(t);
        return;
    }
    Object.defineProperty(s, '_chartjs', {
        configurable: !0,
        enumerable: !1,
        value: { listeners: [t] },
    }),
        Or.forEach((e) => {
            let i = '_onData' + Si(e),
                n = s[e];
            Object.defineProperty(s, e, {
                configurable: !0,
                enumerable: !1,
                value(...o) {
                    let r = n.apply(this, o);
                    return (
                        s._chartjs.listeners.forEach((a) => {
                            typeof a[i] == 'function' && a[i](...o);
                        }),
                        r
                    );
                },
            });
        });
}
function On(s, t) {
    let e = s._chartjs;
    if (!e) return;
    let i = e.listeners,
        n = i.indexOf(t);
    n !== -1 && i.splice(n, 1),
        !(i.length > 0) &&
            (Or.forEach((o) => {
                delete s[o];
            }),
            delete s._chartjs);
}
function En(s) {
    let t = new Set(),
        e,
        i;
    for (e = 0, i = s.length; e < i; ++e) t.add(s[e]);
    return t.size === i ? s : Array.from(t);
}
var Dn = (function () {
    return typeof window > 'u'
        ? function (s) {
              return s();
          }
        : window.requestAnimationFrame;
})();
function Cn(s, t, e) {
    let i = e || ((r) => Array.prototype.slice.call(r)),
        n = !1,
        o = [];
    return function (...r) {
        (o = i(r)),
            n ||
                ((n = !0),
                Dn.call(window, () => {
                    (n = !1), s.apply(t, o);
                }));
    };
}
function Dr(s, t) {
    let e;
    return function (...i) {
        return t ? (clearTimeout(e), (e = setTimeout(s, t, i))) : s.apply(this, i), t;
    };
}
var vi = (s) => (s === 'start' ? 'left' : s === 'end' ? 'right' : 'center'),
    rt = (s, t, e) => (s === 'start' ? t : s === 'end' ? e : (t + e) / 2),
    Cr = (s, t, e, i) => (s === (i ? 'left' : 'right') ? e : s === 'center' ? (t + e) / 2 : t);
function In(s, t, e) {
    let i = t.length,
        n = 0,
        o = i;
    if (s._sorted) {
        let { iScale: r, _parsed: a } = s,
            l = r.axis,
            { min: c, max: h, minDefined: u, maxDefined: d } = r.getUserBounds();
        u &&
            (n = st(
                Math.min(Dt(a, r.axis, c).lo, e ? i : Dt(t, l, r.getPixelForValue(c)).lo),
                0,
                i - 1,
            )),
            d
                ? (o =
                      st(
                          Math.max(
                              Dt(a, r.axis, h, !0).hi + 1,
                              e ? 0 : Dt(t, l, r.getPixelForValue(h), !0).hi + 1,
                          ),
                          n,
                          i,
                      ) - n)
                : (o = i - n);
    }
    return { start: n, count: o };
}
function An(s) {
    let { xScale: t, yScale: e, _scaleRanges: i } = s,
        n = { xmin: t.min, xmax: t.max, ymin: e.min, ymax: e.max };
    if (!i) return (s._scaleRanges = n), !0;
    let o = i.xmin !== t.min || i.xmax !== t.max || i.ymin !== e.min || i.ymax !== e.max;
    return Object.assign(i, n), o;
}
var fi = (s) => s === 0 || s === 1,
    rr = (s, t, e) => -(Math.pow(2, 10 * (s -= 1)) * Math.sin(((s - t) * B) / e)),
    ar = (s, t, e) => Math.pow(2, -10 * s) * Math.sin(((s - t) * B) / e) + 1,
    De = {
        linear: (s) => s,
        easeInQuad: (s) => s * s,
        easeOutQuad: (s) => -s * (s - 2),
        easeInOutQuad: (s) => ((s /= 0.5) < 1 ? 0.5 * s * s : -0.5 * (--s * (s - 2) - 1)),
        easeInCubic: (s) => s * s * s,
        easeOutCubic: (s) => (s -= 1) * s * s + 1,
        easeInOutCubic: (s) => ((s /= 0.5) < 1 ? 0.5 * s * s * s : 0.5 * ((s -= 2) * s * s + 2)),
        easeInQuart: (s) => s * s * s * s,
        easeOutQuart: (s) => -((s -= 1) * s * s * s - 1),
        easeInOutQuart: (s) =>
            (s /= 0.5) < 1 ? 0.5 * s * s * s * s : -0.5 * ((s -= 2) * s * s * s - 2),
        easeInQuint: (s) => s * s * s * s * s,
        easeOutQuint: (s) => (s -= 1) * s * s * s * s + 1,
        easeInOutQuint: (s) =>
            (s /= 0.5) < 1 ? 0.5 * s * s * s * s * s : 0.5 * ((s -= 2) * s * s * s * s + 2),
        easeInSine: (s) => -Math.cos(s * Z) + 1,
        easeOutSine: (s) => Math.sin(s * Z),
        easeInOutSine: (s) => -0.5 * (Math.cos(Y * s) - 1),
        easeInExpo: (s) => (s === 0 ? 0 : Math.pow(2, 10 * (s - 1))),
        easeOutExpo: (s) => (s === 1 ? 1 : -Math.pow(2, -10 * s) + 1),
        easeInOutExpo: (s) =>
            fi(s)
                ? s
                : s < 0.5
                  ? 0.5 * Math.pow(2, 10 * (s * 2 - 1))
                  : 0.5 * (-Math.pow(2, -10 * (s * 2 - 1)) + 2),
        easeInCirc: (s) => (s >= 1 ? s : -(Math.sqrt(1 - s * s) - 1)),
        easeOutCirc: (s) => Math.sqrt(1 - (s -= 1) * s),
        easeInOutCirc: (s) =>
            (s /= 0.5) < 1
                ? -0.5 * (Math.sqrt(1 - s * s) - 1)
                : 0.5 * (Math.sqrt(1 - (s -= 2) * s) + 1),
        easeInElastic: (s) => (fi(s) ? s : rr(s, 0.075, 0.3)),
        easeOutElastic: (s) => (fi(s) ? s : ar(s, 0.075, 0.3)),
        easeInOutElastic(s) {
            return fi(s)
                ? s
                : s < 0.5
                  ? 0.5 * rr(s * 2, 0.1125, 0.45)
                  : 0.5 + 0.5 * ar(s * 2 - 1, 0.1125, 0.45);
        },
        easeInBack(s) {
            return s * s * ((1.70158 + 1) * s - 1.70158);
        },
        easeOutBack(s) {
            return (s -= 1) * s * ((1.70158 + 1) * s + 1.70158) + 1;
        },
        easeInOutBack(s) {
            let t = 1.70158;
            return (s /= 0.5) < 1
                ? 0.5 * (s * s * (((t *= 1.525) + 1) * s - t))
                : 0.5 * ((s -= 2) * s * (((t *= 1.525) + 1) * s + t) + 2);
        },
        easeInBounce: (s) => 1 - De.easeOutBounce(1 - s),
        easeOutBounce(s) {
            return s < 1 / 2.75
                ? 7.5625 * s * s
                : s < 2 / 2.75
                  ? 7.5625 * (s -= 1.5 / 2.75) * s + 0.75
                  : s < 2.5 / 2.75
                    ? 7.5625 * (s -= 2.25 / 2.75) * s + 0.9375
                    : 7.5625 * (s -= 2.625 / 2.75) * s + 0.984375;
        },
        easeInOutBounce: (s) =>
            s < 0.5 ? De.easeInBounce(s * 2) * 0.5 : De.easeOutBounce(s * 2 - 1) * 0.5 + 0.5,
    };
function _s(s) {
    return (s + 0.5) | 0;
}
var Kt = (s, t, e) => Math.max(Math.min(s, e), t);
function ps(s) {
    return Kt(_s(s * 2.55), 0, 255);
}
function Jt(s) {
    return Kt(_s(s * 255), 0, 255);
}
function Vt(s) {
    return Kt(_s(s / 2.55) / 100, 0, 1);
}
function lr(s) {
    return Kt(_s(s * 100), 0, 100);
}
var xt = {
        0: 0,
        1: 1,
        2: 2,
        3: 3,
        4: 4,
        5: 5,
        6: 6,
        7: 7,
        8: 8,
        9: 9,
        A: 10,
        B: 11,
        C: 12,
        D: 13,
        E: 14,
        F: 15,
        a: 10,
        b: 11,
        c: 12,
        d: 13,
        e: 14,
        f: 15,
    },
    xn = [...'0123456789ABCDEF'],
    Sc = (s) => xn[s & 15],
    Mc = (s) => xn[(s & 240) >> 4] + xn[s & 15],
    mi = (s) => (s & 240) >> 4 === (s & 15),
    Tc = (s) => mi(s.r) && mi(s.g) && mi(s.b) && mi(s.a);
function vc(s) {
    var t = s.length,
        e;
    return (
        s[0] === '#' &&
            (t === 4 || t === 5
                ? (e = {
                      r: 255 & (xt[s[1]] * 17),
                      g: 255 & (xt[s[2]] * 17),
                      b: 255 & (xt[s[3]] * 17),
                      a: t === 5 ? xt[s[4]] * 17 : 255,
                  })
                : (t === 7 || t === 9) &&
                  (e = {
                      r: (xt[s[1]] << 4) | xt[s[2]],
                      g: (xt[s[3]] << 4) | xt[s[4]],
                      b: (xt[s[5]] << 4) | xt[s[6]],
                      a: t === 9 ? (xt[s[7]] << 4) | xt[s[8]] : 255,
                  })),
        e
    );
}
var kc = (s, t) => (s < 255 ? t(s) : '');
function Oc(s) {
    var t = Tc(s) ? Sc : Mc;
    return s ? '#' + t(s.r) + t(s.g) + t(s.b) + kc(s.a, t) : void 0;
}
var Ec =
    /^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;
function Ir(s, t, e) {
    let i = t * Math.min(e, 1 - e),
        n = (o, r = (o + s / 30) % 12) => e - i * Math.max(Math.min(r - 3, 9 - r, 1), -1);
    return [n(0), n(8), n(4)];
}
function Dc(s, t, e) {
    let i = (n, o = (n + s / 60) % 6) => e - e * t * Math.max(Math.min(o, 4 - o, 1), 0);
    return [i(5), i(3), i(1)];
}
function Cc(s, t, e) {
    let i = Ir(s, 1, 0.5),
        n;
    for (t + e > 1 && ((n = 1 / (t + e)), (t *= n), (e *= n)), n = 0; n < 3; n++)
        (i[n] *= 1 - t - e), (i[n] += t);
    return i;
}
function Ic(s, t, e, i, n) {
    return s === n ? (t - e) / i + (t < e ? 6 : 0) : t === n ? (e - s) / i + 2 : (s - t) / i + 4;
}
function Fn(s) {
    let e = s.r / 255,
        i = s.g / 255,
        n = s.b / 255,
        o = Math.max(e, i, n),
        r = Math.min(e, i, n),
        a = (o + r) / 2,
        l,
        c,
        h;
    return (
        o !== r &&
            ((h = o - r),
            (c = a > 0.5 ? h / (2 - o - r) : h / (o + r)),
            (l = Ic(e, i, n, h, o)),
            (l = l * 60 + 0.5)),
        [l | 0, c || 0, a]
    );
}
function Ln(s, t, e, i) {
    return (Array.isArray(t) ? s(t[0], t[1], t[2]) : s(t, e, i)).map(Jt);
}
function Pn(s, t, e) {
    return Ln(Ir, s, t, e);
}
function Ac(s, t, e) {
    return Ln(Cc, s, t, e);
}
function Fc(s, t, e) {
    return Ln(Dc, s, t, e);
}
function Ar(s) {
    return ((s % 360) + 360) % 360;
}
function Lc(s) {
    let t = Ec.exec(s),
        e = 255,
        i;
    if (!t) return;
    t[5] !== i && (e = t[6] ? ps(+t[5]) : Jt(+t[5]));
    let n = Ar(+t[2]),
        o = +t[3] / 100,
        r = +t[4] / 100;
    return (
        t[1] === 'hwb' ? (i = Ac(n, o, r)) : t[1] === 'hsv' ? (i = Fc(n, o, r)) : (i = Pn(n, o, r)),
        { r: i[0], g: i[1], b: i[2], a: e }
    );
}
function Pc(s, t) {
    var e = Fn(s);
    (e[0] = Ar(e[0] + t)), (e = Pn(e)), (s.r = e[0]), (s.g = e[1]), (s.b = e[2]);
}
function Rc(s) {
    if (!s) return;
    let t = Fn(s),
        e = t[0],
        i = lr(t[1]),
        n = lr(t[2]);
    return s.a < 255 ? `hsla(${e}, ${i}%, ${n}%, ${Vt(s.a)})` : `hsl(${e}, ${i}%, ${n}%)`;
}
var cr = {
        x: 'dark',
        Z: 'light',
        Y: 're',
        X: 'blu',
        W: 'gr',
        V: 'medium',
        U: 'slate',
        A: 'ee',
        T: 'ol',
        S: 'or',
        B: 'ra',
        C: 'lateg',
        D: 'ights',
        R: 'in',
        Q: 'turquois',
        E: 'hi',
        P: 'ro',
        O: 'al',
        N: 'le',
        M: 'de',
        L: 'yello',
        F: 'en',
        K: 'ch',
        G: 'arks',
        H: 'ea',
        I: 'ightg',
        J: 'wh',
    },
    hr = {
        OiceXe: 'f0f8ff',
        antiquewEte: 'faebd7',
        aqua: 'ffff',
        aquamarRe: '7fffd4',
        azuY: 'f0ffff',
        beige: 'f5f5dc',
        bisque: 'ffe4c4',
        black: '0',
        blanKedOmond: 'ffebcd',
        Xe: 'ff',
        XeviTet: '8a2be2',
        bPwn: 'a52a2a',
        burlywood: 'deb887',
        caMtXe: '5f9ea0',
        KartYuse: '7fff00',
        KocTate: 'd2691e',
        cSO: 'ff7f50',
        cSnflowerXe: '6495ed',
        cSnsilk: 'fff8dc',
        crimson: 'dc143c',
        cyan: 'ffff',
        xXe: '8b',
        xcyan: '8b8b',
        xgTMnPd: 'b8860b',
        xWay: 'a9a9a9',
        xgYF: '6400',
        xgYy: 'a9a9a9',
        xkhaki: 'bdb76b',
        xmagFta: '8b008b',
        xTivegYF: '556b2f',
        xSange: 'ff8c00',
        xScEd: '9932cc',
        xYd: '8b0000',
        xsOmon: 'e9967a',
        xsHgYF: '8fbc8f',
        xUXe: '483d8b',
        xUWay: '2f4f4f',
        xUgYy: '2f4f4f',
        xQe: 'ced1',
        xviTet: '9400d3',
        dAppRk: 'ff1493',
        dApskyXe: 'bfff',
        dimWay: '696969',
        dimgYy: '696969',
        dodgerXe: '1e90ff',
        fiYbrick: 'b22222',
        flSOwEte: 'fffaf0',
        foYstWAn: '228b22',
        fuKsia: 'ff00ff',
        gaRsbSo: 'dcdcdc',
        ghostwEte: 'f8f8ff',
        gTd: 'ffd700',
        gTMnPd: 'daa520',
        Way: '808080',
        gYF: '8000',
        gYFLw: 'adff2f',
        gYy: '808080',
        honeyMw: 'f0fff0',
        hotpRk: 'ff69b4',
        RdianYd: 'cd5c5c',
        Rdigo: '4b0082',
        ivSy: 'fffff0',
        khaki: 'f0e68c',
        lavFMr: 'e6e6fa',
        lavFMrXsh: 'fff0f5',
        lawngYF: '7cfc00',
        NmoncEffon: 'fffacd',
        ZXe: 'add8e6',
        ZcSO: 'f08080',
        Zcyan: 'e0ffff',
        ZgTMnPdLw: 'fafad2',
        ZWay: 'd3d3d3',
        ZgYF: '90ee90',
        ZgYy: 'd3d3d3',
        ZpRk: 'ffb6c1',
        ZsOmon: 'ffa07a',
        ZsHgYF: '20b2aa',
        ZskyXe: '87cefa',
        ZUWay: '778899',
        ZUgYy: '778899',
        ZstAlXe: 'b0c4de',
        ZLw: 'ffffe0',
        lime: 'ff00',
        limegYF: '32cd32',
        lRF: 'faf0e6',
        magFta: 'ff00ff',
        maPon: '800000',
        VaquamarRe: '66cdaa',
        VXe: 'cd',
        VScEd: 'ba55d3',
        VpurpN: '9370db',
        VsHgYF: '3cb371',
        VUXe: '7b68ee',
        VsprRggYF: 'fa9a',
        VQe: '48d1cc',
        VviTetYd: 'c71585',
        midnightXe: '191970',
        mRtcYam: 'f5fffa',
        mistyPse: 'ffe4e1',
        moccasR: 'ffe4b5',
        navajowEte: 'ffdead',
        navy: '80',
        Tdlace: 'fdf5e6',
        Tive: '808000',
        TivedBb: '6b8e23',
        Sange: 'ffa500',
        SangeYd: 'ff4500',
        ScEd: 'da70d6',
        pOegTMnPd: 'eee8aa',
        pOegYF: '98fb98',
        pOeQe: 'afeeee',
        pOeviTetYd: 'db7093',
        papayawEp: 'ffefd5',
        pHKpuff: 'ffdab9',
        peru: 'cd853f',
        pRk: 'ffc0cb',
        plum: 'dda0dd',
        powMrXe: 'b0e0e6',
        purpN: '800080',
        YbeccapurpN: '663399',
        Yd: 'ff0000',
        Psybrown: 'bc8f8f',
        PyOXe: '4169e1',
        saddNbPwn: '8b4513',
        sOmon: 'fa8072',
        sandybPwn: 'f4a460',
        sHgYF: '2e8b57',
        sHshell: 'fff5ee',
        siFna: 'a0522d',
        silver: 'c0c0c0',
        skyXe: '87ceeb',
        UXe: '6a5acd',
        UWay: '708090',
        UgYy: '708090',
        snow: 'fffafa',
        sprRggYF: 'ff7f',
        stAlXe: '4682b4',
        tan: 'd2b48c',
        teO: '8080',
        tEstN: 'd8bfd8',
        tomato: 'ff6347',
        Qe: '40e0d0',
        viTet: 'ee82ee',
        JHt: 'f5deb3',
        wEte: 'ffffff',
        wEtesmoke: 'f5f5f5',
        Lw: 'ffff00',
        LwgYF: '9acd32',
    };
function Nc() {
    let s = {},
        t = Object.keys(hr),
        e = Object.keys(cr),
        i,
        n,
        o,
        r,
        a;
    for (i = 0; i < t.length; i++) {
        for (r = a = t[i], n = 0; n < e.length; n++) (o = e[n]), (a = a.replace(o, cr[o]));
        (o = parseInt(hr[r], 16)), (s[a] = [(o >> 16) & 255, (o >> 8) & 255, o & 255]);
    }
    return s;
}
var gi;
function zc(s) {
    gi || ((gi = Nc()), (gi.transparent = [0, 0, 0, 0]));
    let t = gi[s.toLowerCase()];
    return t && { r: t[0], g: t[1], b: t[2], a: t.length === 4 ? t[3] : 255 };
}
var Vc =
    /^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/;
function Wc(s) {
    let t = Vc.exec(s),
        e = 255,
        i,
        n,
        o;
    if (t) {
        if (t[7] !== i) {
            let r = +t[7];
            e = t[8] ? ps(r) : Kt(r * 255, 0, 255);
        }
        return (
            (i = +t[1]),
            (n = +t[3]),
            (o = +t[5]),
            (i = 255 & (t[2] ? ps(i) : Kt(i, 0, 255))),
            (n = 255 & (t[4] ? ps(n) : Kt(n, 0, 255))),
            (o = 255 & (t[6] ? ps(o) : Kt(o, 0, 255))),
            { r: i, g: n, b: o, a: e }
        );
    }
}
function Hc(s) {
    return (
        s &&
        (s.a < 255 ? `rgba(${s.r}, ${s.g}, ${s.b}, ${Vt(s.a)})` : `rgb(${s.r}, ${s.g}, ${s.b})`)
    );
}
var gn = (s) => (s <= 0.0031308 ? s * 12.92 : Math.pow(s, 1 / 2.4) * 1.055 - 0.055),
    Ee = (s) => (s <= 0.04045 ? s / 12.92 : Math.pow((s + 0.055) / 1.055, 2.4));
function Bc(s, t, e) {
    let i = Ee(Vt(s.r)),
        n = Ee(Vt(s.g)),
        o = Ee(Vt(s.b));
    return {
        r: Jt(gn(i + e * (Ee(Vt(t.r)) - i))),
        g: Jt(gn(n + e * (Ee(Vt(t.g)) - n))),
        b: Jt(gn(o + e * (Ee(Vt(t.b)) - o))),
        a: s.a + e * (t.a - s.a),
    };
}
function pi(s, t, e) {
    if (s) {
        let i = Fn(s);
        (i[t] = Math.max(0, Math.min(i[t] + i[t] * e, t === 0 ? 360 : 1))),
            (i = Pn(i)),
            (s.r = i[0]),
            (s.g = i[1]),
            (s.b = i[2]);
    }
}
function Fr(s, t) {
    return s && Object.assign(t || {}, s);
}
function ur(s) {
    var t = { r: 0, g: 0, b: 0, a: 255 };
    return (
        Array.isArray(s)
            ? s.length >= 3 &&
              ((t = { r: s[0], g: s[1], b: s[2], a: 255 }), s.length > 3 && (t.a = Jt(s[3])))
            : ((t = Fr(s, { r: 0, g: 0, b: 0, a: 1 })), (t.a = Jt(t.a))),
        t
    );
}
function jc(s) {
    return s.charAt(0) === 'r' ? Wc(s) : Lc(s);
}
var Ie = class {
    constructor(t) {
        if (t instanceof Ie) return t;
        let e = typeof t,
            i;
        e === 'object' ? (i = ur(t)) : e === 'string' && (i = vc(t) || zc(t) || jc(t)),
            (this._rgb = i),
            (this._valid = !!i);
    }
    get valid() {
        return this._valid;
    }
    get rgb() {
        var t = Fr(this._rgb);
        return t && (t.a = Vt(t.a)), t;
    }
    set rgb(t) {
        this._rgb = ur(t);
    }
    rgbString() {
        return this._valid ? Hc(this._rgb) : void 0;
    }
    hexString() {
        return this._valid ? Oc(this._rgb) : void 0;
    }
    hslString() {
        return this._valid ? Rc(this._rgb) : void 0;
    }
    mix(t, e) {
        if (t) {
            let i = this.rgb,
                n = t.rgb,
                o,
                r = e === o ? 0.5 : e,
                a = 2 * r - 1,
                l = i.a - n.a,
                c = ((a * l === -1 ? a : (a + l) / (1 + a * l)) + 1) / 2;
            (o = 1 - c),
                (i.r = 255 & (c * i.r + o * n.r + 0.5)),
                (i.g = 255 & (c * i.g + o * n.g + 0.5)),
                (i.b = 255 & (c * i.b + o * n.b + 0.5)),
                (i.a = r * i.a + (1 - r) * n.a),
                (this.rgb = i);
        }
        return this;
    }
    interpolate(t, e) {
        return t && (this._rgb = Bc(this._rgb, t._rgb, e)), this;
    }
    clone() {
        return new Ie(this.rgb);
    }
    alpha(t) {
        return (this._rgb.a = Jt(t)), this;
    }
    clearer(t) {
        let e = this._rgb;
        return (e.a *= 1 - t), this;
    }
    greyscale() {
        let t = this._rgb,
            e = _s(t.r * 0.3 + t.g * 0.59 + t.b * 0.11);
        return (t.r = t.g = t.b = e), this;
    }
    opaquer(t) {
        let e = this._rgb;
        return (e.a *= 1 + t), this;
    }
    negate() {
        let t = this._rgb;
        return (t.r = 255 - t.r), (t.g = 255 - t.g), (t.b = 255 - t.b), this;
    }
    lighten(t) {
        return pi(this._rgb, 2, t), this;
    }
    darken(t) {
        return pi(this._rgb, 2, -t), this;
    }
    saturate(t) {
        return pi(this._rgb, 1, t), this;
    }
    desaturate(t) {
        return pi(this._rgb, 1, -t), this;
    }
    rotate(t) {
        return Pc(this._rgb, t), this;
    }
};
function Lr(s) {
    return new Ie(s);
}
function Pr(s) {
    if (s && typeof s == 'object') {
        let t = s.toString();
        return t === '[object CanvasPattern]' || t === '[object CanvasGradient]';
    }
    return !1;
}
function Rn(s) {
    return Pr(s) ? s : Lr(s);
}
function pn(s) {
    return Pr(s) ? s : Lr(s).saturate(0.5).darken(0.1).hexString();
}
var Qt = Object.create(null),
    ki = Object.create(null);
function bs(s, t) {
    if (!t) return s;
    let e = t.split('.');
    for (let i = 0, n = e.length; i < n; ++i) {
        let o = e[i];
        s = s[o] || (s[o] = Object.create(null));
    }
    return s;
}
function bn(s, t, e) {
    return typeof t == 'string' ? Ce(bs(s, t), e) : Ce(bs(s, ''), t);
}
var _n = class {
        constructor(t) {
            (this.animation = void 0),
                (this.backgroundColor = 'rgba(0,0,0,0.1)'),
                (this.borderColor = 'rgba(0,0,0,0.1)'),
                (this.color = '#666'),
                (this.datasets = {}),
                (this.devicePixelRatio = (e) => e.chart.platform.getDevicePixelRatio()),
                (this.elements = {}),
                (this.events = ['mousemove', 'mouseout', 'click', 'touchstart', 'touchmove']),
                (this.font = {
                    family: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
                    size: 12,
                    style: 'normal',
                    lineHeight: 1.2,
                    weight: null,
                }),
                (this.hover = {}),
                (this.hoverBackgroundColor = (e, i) => pn(i.backgroundColor)),
                (this.hoverBorderColor = (e, i) => pn(i.borderColor)),
                (this.hoverColor = (e, i) => pn(i.color)),
                (this.indexAxis = 'x'),
                (this.interaction = {
                    mode: 'nearest',
                    intersect: !0,
                    includeInvisible: !1,
                }),
                (this.maintainAspectRatio = !0),
                (this.onHover = null),
                (this.onClick = null),
                (this.parsing = !0),
                (this.plugins = {}),
                (this.responsive = !0),
                (this.scale = void 0),
                (this.scales = {}),
                (this.showLine = !0),
                (this.drawActiveElementsOnTop = !0),
                this.describe(t);
        }
        set(t, e) {
            return bn(this, t, e);
        }
        get(t) {
            return bs(this, t);
        }
        describe(t, e) {
            return bn(ki, t, e);
        }
        override(t, e) {
            return bn(Qt, t, e);
        }
        route(t, e, i, n) {
            let o = bs(this, t),
                r = bs(this, i),
                a = '_' + e;
            Object.defineProperties(o, {
                [a]: { value: o[e], writable: !0 },
                [e]: {
                    enumerable: !0,
                    get() {
                        let l = this[a],
                            c = r[n];
                        return A(l) ? Object.assign({}, c, l) : D(l, c);
                    },
                    set(l) {
                        this[a] = l;
                    },
                },
            });
        }
    },
    F = new _n({
        _scriptable: (s) => !s.startsWith('on'),
        _indexable: (s) => s !== 'events',
        hover: { _fallback: 'interaction' },
        interaction: { _scriptable: !1, _indexable: !1 },
    });
function $c(s) {
    return !s || P(s.size) || P(s.family)
        ? null
        : (s.style ? s.style + ' ' : '') +
              (s.weight ? s.weight + ' ' : '') +
              s.size +
              'px ' +
              s.family;
}
function ys(s, t, e, i, n) {
    let o = t[n];
    return o || ((o = t[n] = s.measureText(n).width), e.push(n)), o > i && (i = o), i;
}
function Rr(s, t, e, i) {
    i = i || {};
    let n = (i.data = i.data || {}),
        o = (i.garbageCollect = i.garbageCollect || []);
    i.font !== t && ((n = i.data = {}), (o = i.garbageCollect = []), (i.font = t)),
        s.save(),
        (s.font = t);
    let r = 0,
        a = e.length,
        l,
        c,
        h,
        u,
        d;
    for (l = 0; l < a; l++)
        if (((u = e[l]), u != null && j(u) !== !0)) r = ys(s, n, o, r, u);
        else if (j(u))
            for (c = 0, h = u.length; c < h; c++)
                (d = u[c]), d != null && !j(d) && (r = ys(s, n, o, r, d));
    s.restore();
    let f = o.length / 2;
    if (f > e.length) {
        for (l = 0; l < f; l++) delete n[o[l]];
        o.splice(0, f);
    }
    return r;
}
function te(s, t, e) {
    let i = s.currentDevicePixelRatio,
        n = e !== 0 ? Math.max(e / 2, 0.5) : 0;
    return Math.round((t - n) * i) / i + n;
}
function Nn(s, t) {
    (t = t || s.getContext('2d')),
        t.save(),
        t.resetTransform(),
        t.clearRect(0, 0, s.width, s.height),
        t.restore();
}
function Oi(s, t, e, i) {
    zn(s, t, e, i, null);
}
function zn(s, t, e, i, n) {
    let o,
        r,
        a,
        l,
        c,
        h,
        u = t.pointStyle,
        d = t.rotation,
        f = t.radius,
        m = (d || 0) * _c;
    if (
        u &&
        typeof u == 'object' &&
        ((o = u.toString()),
        o === '[object HTMLImageElement]' || o === '[object HTMLCanvasElement]')
    ) {
        s.save(),
            s.translate(e, i),
            s.rotate(m),
            s.drawImage(u, -u.width / 2, -u.height / 2, u.width, u.height),
            s.restore();
        return;
    }
    if (!(isNaN(f) || f <= 0)) {
        switch ((s.beginPath(), u)) {
            default:
                n ? s.ellipse(e, i, n / 2, f, 0, 0, B) : s.arc(e, i, f, 0, B), s.closePath();
                break;
            case 'triangle':
                s.moveTo(e + Math.sin(m) * f, i - Math.cos(m) * f),
                    (m += or),
                    s.lineTo(e + Math.sin(m) * f, i - Math.cos(m) * f),
                    (m += or),
                    s.lineTo(e + Math.sin(m) * f, i - Math.cos(m) * f),
                    s.closePath();
                break;
            case 'rectRounded':
                (c = f * 0.516),
                    (l = f - c),
                    (r = Math.cos(m + gs) * l),
                    (a = Math.sin(m + gs) * l),
                    s.arc(e - r, i - a, c, m - Y, m - Z),
                    s.arc(e + a, i - r, c, m - Z, m),
                    s.arc(e + r, i + a, c, m, m + Z),
                    s.arc(e - a, i + r, c, m + Z, m + Y),
                    s.closePath();
                break;
            case 'rect':
                if (!d) {
                    (l = Math.SQRT1_2 * f), (h = n ? n / 2 : l), s.rect(e - h, i - l, 2 * h, 2 * l);
                    break;
                }
                m += gs;
            case 'rectRot':
                (r = Math.cos(m) * f),
                    (a = Math.sin(m) * f),
                    s.moveTo(e - r, i - a),
                    s.lineTo(e + a, i - r),
                    s.lineTo(e + r, i + a),
                    s.lineTo(e - a, i + r),
                    s.closePath();
                break;
            case 'crossRot':
                m += gs;
            case 'cross':
                (r = Math.cos(m) * f),
                    (a = Math.sin(m) * f),
                    s.moveTo(e - r, i - a),
                    s.lineTo(e + r, i + a),
                    s.moveTo(e + a, i - r),
                    s.lineTo(e - a, i + r);
                break;
            case 'star':
                (r = Math.cos(m) * f),
                    (a = Math.sin(m) * f),
                    s.moveTo(e - r, i - a),
                    s.lineTo(e + r, i + a),
                    s.moveTo(e + a, i - r),
                    s.lineTo(e - a, i + r),
                    (m += gs),
                    (r = Math.cos(m) * f),
                    (a = Math.sin(m) * f),
                    s.moveTo(e - r, i - a),
                    s.lineTo(e + r, i + a),
                    s.moveTo(e + a, i - r),
                    s.lineTo(e - a, i + r);
                break;
            case 'line':
                (r = n ? n / 2 : Math.cos(m) * f),
                    (a = Math.sin(m) * f),
                    s.moveTo(e - r, i - a),
                    s.lineTo(e + r, i + a);
                break;
            case 'dash':
                s.moveTo(e, i), s.lineTo(e + Math.cos(m) * f, i + Math.sin(m) * f);
                break;
        }
        s.fill(), t.borderWidth > 0 && s.stroke();
    }
}
function Ae(s, t, e) {
    return (
        (e = e || 0.5),
        !t || (s && s.x > t.left - e && s.x < t.right + e && s.y > t.top - e && s.y < t.bottom + e)
    );
}
function ws(s, t) {
    s.save(), s.beginPath(), s.rect(t.left, t.top, t.right - t.left, t.bottom - t.top), s.clip();
}
function Ss(s) {
    s.restore();
}
function Nr(s, t, e, i, n) {
    if (!t) return s.lineTo(e.x, e.y);
    if (n === 'middle') {
        let o = (t.x + e.x) / 2;
        s.lineTo(o, t.y), s.lineTo(o, e.y);
    } else (n === 'after') != !!i ? s.lineTo(t.x, e.y) : s.lineTo(e.x, t.y);
    s.lineTo(e.x, e.y);
}
function zr(s, t, e, i) {
    if (!t) return s.lineTo(e.x, e.y);
    s.bezierCurveTo(
        i ? t.cp1x : t.cp2x,
        i ? t.cp1y : t.cp2y,
        i ? e.cp2x : e.cp1x,
        i ? e.cp2y : e.cp1y,
        e.x,
        e.y,
    );
}
function ee(s, t, e, i, n, o = {}) {
    let r = j(t) ? t : [t],
        a = o.strokeWidth > 0 && o.strokeColor !== '',
        l,
        c;
    for (s.save(), s.font = n.string, Uc(s, o), l = 0; l < r.length; ++l)
        (c = r[l]),
            a &&
                (o.strokeColor && (s.strokeStyle = o.strokeColor),
                P(o.strokeWidth) || (s.lineWidth = o.strokeWidth),
                s.strokeText(c, e, i, o.maxWidth)),
            s.fillText(c, e, i, o.maxWidth),
            Yc(s, e, i, c, o),
            (i += n.lineHeight);
    s.restore();
}
function Uc(s, t) {
    t.translation && s.translate(t.translation[0], t.translation[1]),
        P(t.rotation) || s.rotate(t.rotation),
        t.color && (s.fillStyle = t.color),
        t.textAlign && (s.textAlign = t.textAlign),
        t.textBaseline && (s.textBaseline = t.textBaseline);
}
function Yc(s, t, e, i, n) {
    if (n.strikethrough || n.underline) {
        let o = s.measureText(i),
            r = t - o.actualBoundingBoxLeft,
            a = t + o.actualBoundingBoxRight,
            l = e - o.actualBoundingBoxAscent,
            c = e + o.actualBoundingBoxDescent,
            h = n.strikethrough ? (l + c) / 2 : c;
        (s.strokeStyle = s.fillStyle),
            s.beginPath(),
            (s.lineWidth = n.decorationWidth || 2),
            s.moveTo(r, h),
            s.lineTo(a, h),
            s.stroke();
    }
}
function Ne(s, t) {
    let { x: e, y: i, w: n, h: o, radius: r } = t;
    s.arc(e + r.topLeft, i + r.topLeft, r.topLeft, -Z, Y, !0),
        s.lineTo(e, i + o - r.bottomLeft),
        s.arc(e + r.bottomLeft, i + o - r.bottomLeft, r.bottomLeft, Y, Z, !0),
        s.lineTo(e + n - r.bottomRight, i + o),
        s.arc(e + n - r.bottomRight, i + o - r.bottomRight, r.bottomRight, Z, 0, !0),
        s.lineTo(e + n, i + r.topRight),
        s.arc(e + n - r.topRight, i + r.topRight, r.topRight, 0, -Z, !0),
        s.lineTo(e + r.topLeft, i);
}
var Zc = new RegExp(/^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/),
    qc = new RegExp(/^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/);
function Gc(s, t) {
    let e = ('' + s).match(Zc);
    if (!e || e[1] === 'normal') return t * 1.2;
    switch (((s = +e[2]), e[3])) {
        case 'px':
            return s;
        case '%':
            s /= 100;
            break;
    }
    return t * s;
}
var Xc = (s) => +s || 0;
function Ei(s, t) {
    let e = {},
        i = A(t),
        n = i ? Object.keys(t) : t,
        o = A(s) ? (i ? (r) => D(s[r], s[t[r]]) : (r) => s[r]) : () => s;
    for (let r of n) e[r] = Xc(o(r));
    return e;
}
function Vn(s) {
    return Ei(s, { top: 'y', right: 'x', bottom: 'y', left: 'x' });
}
function se(s) {
    return Ei(s, ['topLeft', 'topRight', 'bottomLeft', 'bottomRight']);
}
function at(s) {
    let t = Vn(s);
    return (t.width = t.left + t.right), (t.height = t.top + t.bottom), t;
}
function et(s, t) {
    (s = s || {}), (t = t || F.font);
    let e = D(s.size, t.size);
    typeof e == 'string' && (e = parseInt(e, 10));
    let i = D(s.style, t.style);
    i &&
        !('' + i).match(qc) &&
        (console.warn('Invalid font style specified: "' + i + '"'), (i = ''));
    let n = {
        family: D(s.family, t.family),
        lineHeight: Gc(D(s.lineHeight, t.lineHeight), e),
        size: e,
        style: i,
        weight: D(s.weight, t.weight),
        string: '',
    };
    return (n.string = $c(n)), n;
}
function ze(s, t, e, i) {
    let n = !0,
        o,
        r,
        a;
    for (o = 0, r = s.length; o < r; ++o)
        if (
            ((a = s[o]),
            a !== void 0 &&
                (t !== void 0 && typeof a == 'function' && ((a = a(t)), (n = !1)),
                e !== void 0 && j(a) && ((a = a[e % a.length]), (n = !1)),
                a !== void 0))
        )
            return i && !n && (i.cacheable = !1), a;
}
function Vr(s, t, e) {
    let { min: i, max: n } = s,
        o = wn(t, (n - i) / 2),
        r = (a, l) => (e && a === 0 ? 0 : a + l);
    return { min: r(i, -Math.abs(o)), max: r(n, o) };
}
function Bt(s, t) {
    return Object.assign(Object.create(s), t);
}
function Di(s, t = [''], e = s, i, n = () => s[0]) {
    ft(i) || (i = Br('_fallback', s));
    let o = {
        [Symbol.toStringTag]: 'Object',
        _cacheable: !0,
        _scopes: s,
        _rootScopes: e,
        _fallback: i,
        _getTarget: n,
        override: (r) => Di([r, ...s], t, e, i),
    };
    return new Proxy(o, {
        deleteProperty(r, a) {
            return delete r[a], delete r._keys, delete s[0][a], !0;
        },
        get(r, a) {
            return Wr(r, a, () => nh(a, t, s, r));
        },
        getOwnPropertyDescriptor(r, a) {
            return Reflect.getOwnPropertyDescriptor(r._scopes[0], a);
        },
        getPrototypeOf() {
            return Reflect.getPrototypeOf(s[0]);
        },
        has(r, a) {
            return fr(r).includes(a);
        },
        ownKeys(r) {
            return fr(r);
        },
        set(r, a, l) {
            let c = r._storage || (r._storage = n());
            return (r[a] = c[a] = l), delete r._keys, !0;
        },
    });
}
function me(s, t, e, i) {
    let n = {
        _cacheable: !1,
        _proxy: s,
        _context: t,
        _subProxy: e,
        _stack: new Set(),
        _descriptors: Wn(s, i),
        setContext: (o) => me(s, o, e, i),
        override: (o) => me(s.override(o), t, e, i),
    };
    return new Proxy(n, {
        deleteProperty(o, r) {
            return delete o[r], delete s[r], !0;
        },
        get(o, r, a) {
            return Wr(o, r, () => Jc(o, r, a));
        },
        getOwnPropertyDescriptor(o, r) {
            return o._descriptors.allKeys
                ? Reflect.has(s, r)
                    ? { enumerable: !0, configurable: !0 }
                    : void 0
                : Reflect.getOwnPropertyDescriptor(s, r);
        },
        getPrototypeOf() {
            return Reflect.getPrototypeOf(s);
        },
        has(o, r) {
            return Reflect.has(s, r);
        },
        ownKeys() {
            return Reflect.ownKeys(s);
        },
        set(o, r, a) {
            return (s[r] = a), delete o[r], !0;
        },
    });
}
function Wn(s, t = { scriptable: !0, indexable: !0 }) {
    let { _scriptable: e = t.scriptable, _indexable: i = t.indexable, _allKeys: n = t.allKeys } = s;
    return {
        allKeys: n,
        scriptable: e,
        indexable: i,
        isScriptable: Wt(e) ? e : () => e,
        isIndexable: Wt(i) ? i : () => i,
    };
}
var Kc = (s, t) => (s ? s + Si(t) : t),
    Hn = (s, t) =>
        A(t) && s !== 'adapters' && (Object.getPrototypeOf(t) === null || t.constructor === Object);
function Wr(s, t, e) {
    if (Object.prototype.hasOwnProperty.call(s, t)) return s[t];
    let i = e();
    return (s[t] = i), i;
}
function Jc(s, t, e) {
    let { _proxy: i, _context: n, _subProxy: o, _descriptors: r } = s,
        a = i[t];
    return (
        Wt(a) && r.isScriptable(t) && (a = Qc(t, a, s, e)),
        j(a) && a.length && (a = th(t, a, s, r.isIndexable)),
        Hn(t, a) && (a = me(a, n, o && o[t], r)),
        a
    );
}
function Qc(s, t, e, i) {
    let { _proxy: n, _context: o, _subProxy: r, _stack: a } = e;
    if (a.has(s)) throw new Error('Recursion detected: ' + Array.from(a).join('->') + '->' + s);
    return a.add(s), (t = t(o, r || i)), a.delete(s), Hn(s, t) && (t = Bn(n._scopes, n, s, t)), t;
}
function th(s, t, e, i) {
    let { _proxy: n, _context: o, _subProxy: r, _descriptors: a } = e;
    if (ft(o.index) && i(s)) t = t[o.index % t.length];
    else if (A(t[0])) {
        let l = t,
            c = n._scopes.filter((h) => h !== l);
        t = [];
        for (let h of l) {
            let u = Bn(c, n, s, h);
            t.push(me(u, o, r && r[s], a));
        }
    }
    return t;
}
function Hr(s, t, e) {
    return Wt(s) ? s(t, e) : s;
}
var eh = (s, t) => (s === !0 ? t : typeof s == 'string' ? Ht(t, s) : void 0);
function sh(s, t, e, i, n) {
    for (let o of t) {
        let r = eh(e, o);
        if (r) {
            s.add(r);
            let a = Hr(r._fallback, e, n);
            if (ft(a) && a !== e && a !== i) return a;
        } else if (r === !1 && ft(i) && e !== i) return null;
    }
    return !1;
}
function Bn(s, t, e, i) {
    let n = t._rootScopes,
        o = Hr(t._fallback, e, i),
        r = [...s, ...n],
        a = new Set();
    a.add(i);
    let l = dr(a, r, e, o || e, i);
    return l === null || (ft(o) && o !== e && ((l = dr(a, r, o, l, i)), l === null))
        ? !1
        : Di(Array.from(a), [''], n, o, () => ih(t, e, i));
}
function dr(s, t, e, i, n) {
    for (; e; ) e = sh(s, t, e, i, n);
    return e;
}
function ih(s, t, e) {
    let i = s._getTarget();
    t in i || (i[t] = {});
    let n = i[t];
    return j(n) && A(e) ? e : n;
}
function nh(s, t, e, i) {
    let n;
    for (let o of t) if (((n = Br(Kc(o, s), e)), ft(n))) return Hn(s, n) ? Bn(e, i, s, n) : n;
}
function Br(s, t) {
    for (let e of t) {
        if (!e) continue;
        let i = e[s];
        if (ft(i)) return i;
    }
}
function fr(s) {
    let t = s._keys;
    return t || (t = s._keys = oh(s._scopes)), t;
}
function oh(s) {
    let t = new Set();
    for (let e of s) for (let i of Object.keys(e).filter((n) => !n.startsWith('_'))) t.add(i);
    return Array.from(t);
}
function jn(s, t, e, i) {
    let { iScale: n } = s,
        { key: o = 'r' } = this._parsing,
        r = new Array(i),
        a,
        l,
        c,
        h;
    for (a = 0, l = i; a < l; ++a) (c = a + e), (h = t[c]), (r[a] = { r: n.parse(Ht(h, o), c) });
    return r;
}
var rh = Number.EPSILON || 1e-14,
    Fe = (s, t) => t < s.length && !s[t].skip && s[t],
    jr = (s) => (s === 'x' ? 'y' : 'x');
function ah(s, t, e, i) {
    let n = s.skip ? t : s,
        o = t,
        r = e.skip ? t : e,
        a = _i(o, n),
        l = _i(r, o),
        c = a / (a + l),
        h = l / (a + l);
    (c = isNaN(c) ? 0 : c), (h = isNaN(h) ? 0 : h);
    let u = i * c,
        d = i * h;
    return {
        previous: { x: o.x - u * (r.x - n.x), y: o.y - u * (r.y - n.y) },
        next: { x: o.x + d * (r.x - n.x), y: o.y + d * (r.y - n.y) },
    };
}
function lh(s, t, e) {
    let i = s.length,
        n,
        o,
        r,
        a,
        l,
        c = Fe(s, 0);
    for (let h = 0; h < i - 1; ++h)
        if (((l = c), (c = Fe(s, h + 1)), !(!l || !c))) {
            if (Pe(t[h], 0, rh)) {
                e[h] = e[h + 1] = 0;
                continue;
            }
            (n = e[h] / t[h]),
                (o = e[h + 1] / t[h]),
                (a = Math.pow(n, 2) + Math.pow(o, 2)),
                !(a <= 9) &&
                    ((r = 3 / Math.sqrt(a)), (e[h] = n * r * t[h]), (e[h + 1] = o * r * t[h]));
        }
}
function ch(s, t, e = 'x') {
    let i = jr(e),
        n = s.length,
        o,
        r,
        a,
        l = Fe(s, 0);
    for (let c = 0; c < n; ++c) {
        if (((r = a), (a = l), (l = Fe(s, c + 1)), !a)) continue;
        let h = a[e],
            u = a[i];
        r && ((o = (h - r[e]) / 3), (a[`cp1${e}`] = h - o), (a[`cp1${i}`] = u - o * t[c])),
            l && ((o = (l[e] - h) / 3), (a[`cp2${e}`] = h + o), (a[`cp2${i}`] = u + o * t[c]));
    }
}
function hh(s, t = 'x') {
    let e = jr(t),
        i = s.length,
        n = Array(i).fill(0),
        o = Array(i),
        r,
        a,
        l,
        c = Fe(s, 0);
    for (r = 0; r < i; ++r)
        if (((a = l), (l = c), (c = Fe(s, r + 1)), !!l)) {
            if (c) {
                let h = c[t] - l[t];
                n[r] = h !== 0 ? (c[e] - l[e]) / h : 0;
            }
            o[r] = a
                ? c
                    ? Tt(n[r - 1]) !== Tt(n[r])
                        ? 0
                        : (n[r - 1] + n[r]) / 2
                    : n[r - 1]
                : n[r];
        }
    lh(s, n, o), ch(s, o, t);
}
function bi(s, t, e) {
    return Math.max(Math.min(s, e), t);
}
function uh(s, t) {
    let e,
        i,
        n,
        o,
        r,
        a = Ae(s[0], t);
    for (e = 0, i = s.length; e < i; ++e)
        (r = o),
            (o = a),
            (a = e < i - 1 && Ae(s[e + 1], t)),
            o &&
                ((n = s[e]),
                r &&
                    ((n.cp1x = bi(n.cp1x, t.left, t.right)),
                    (n.cp1y = bi(n.cp1y, t.top, t.bottom))),
                a &&
                    ((n.cp2x = bi(n.cp2x, t.left, t.right)),
                    (n.cp2y = bi(n.cp2y, t.top, t.bottom))));
}
function $r(s, t, e, i, n) {
    let o, r, a, l;
    if ((t.spanGaps && (s = s.filter((c) => !c.skip)), t.cubicInterpolationMode === 'monotone'))
        hh(s, n);
    else {
        let c = i ? s[s.length - 1] : s[0];
        for (o = 0, r = s.length; o < r; ++o)
            (a = s[o]),
                (l = ah(c, a, s[Math.min(o + 1, r - (i ? 0 : 1)) % r], t.tension)),
                (a.cp1x = l.previous.x),
                (a.cp1y = l.previous.y),
                (a.cp2x = l.next.x),
                (a.cp2y = l.next.y),
                (c = a);
    }
    t.capBezierPoints && uh(s, e);
}
function $n() {
    return typeof window < 'u' && typeof document < 'u';
}
function Ci(s) {
    let t = s.parentNode;
    return t && t.toString() === '[object ShadowRoot]' && (t = t.host), t;
}
function wi(s, t, e) {
    let i;
    return (
        typeof s == 'string'
            ? ((i = parseInt(s, 10)), s.indexOf('%') !== -1 && (i = (i / 100) * t.parentNode[e]))
            : (i = s),
        i
    );
}
var Ii = (s) => window.getComputedStyle(s, null);
function dh(s, t) {
    return Ii(s).getPropertyValue(t);
}
var fh = ['top', 'right', 'bottom', 'left'];
function fe(s, t, e) {
    let i = {};
    e = e ? '-' + e : '';
    for (let n = 0; n < 4; n++) {
        let o = fh[n];
        i[o] = parseFloat(s[t + '-' + o + e]) || 0;
    }
    return (i.width = i.left + i.right), (i.height = i.top + i.bottom), i;
}
var mh = (s, t, e) => (s > 0 || t > 0) && (!e || !e.shadowRoot);
function gh(s, t) {
    let e = s.touches,
        i = e && e.length ? e[0] : s,
        { offsetX: n, offsetY: o } = i,
        r = !1,
        a,
        l;
    if (mh(n, o, s.target)) (a = n), (l = o);
    else {
        let c = t.getBoundingClientRect();
        (a = i.clientX - c.left), (l = i.clientY - c.top), (r = !0);
    }
    return { x: a, y: l, box: r };
}
function ie(s, t) {
    if ('native' in s) return s;
    let { canvas: e, currentDevicePixelRatio: i } = t,
        n = Ii(e),
        o = n.boxSizing === 'border-box',
        r = fe(n, 'padding'),
        a = fe(n, 'border', 'width'),
        { x: l, y: c, box: h } = gh(s, e),
        u = r.left + (h && a.left),
        d = r.top + (h && a.top),
        { width: f, height: m } = t;
    return (
        o && ((f -= r.width + a.width), (m -= r.height + a.height)),
        {
            x: Math.round((((l - u) / f) * e.width) / i),
            y: Math.round((((c - d) / m) * e.height) / i),
        }
    );
}
function ph(s, t, e) {
    let i, n;
    if (t === void 0 || e === void 0) {
        let o = Ci(s);
        if (!o) (t = s.clientWidth), (e = s.clientHeight);
        else {
            let r = o.getBoundingClientRect(),
                a = Ii(o),
                l = fe(a, 'border', 'width'),
                c = fe(a, 'padding');
            (t = r.width - c.width - l.width),
                (e = r.height - c.height - l.height),
                (i = wi(a.maxWidth, o, 'clientWidth')),
                (n = wi(a.maxHeight, o, 'clientHeight'));
        }
    }
    return { width: t, height: e, maxWidth: i || xi, maxHeight: n || xi };
}
var yn = (s) => Math.round(s * 10) / 10;
function Ur(s, t, e, i) {
    let n = Ii(s),
        o = fe(n, 'margin'),
        r = wi(n.maxWidth, s, 'clientWidth') || xi,
        a = wi(n.maxHeight, s, 'clientHeight') || xi,
        l = ph(s, t, e),
        { width: c, height: h } = l;
    if (n.boxSizing === 'content-box') {
        let u = fe(n, 'border', 'width'),
            d = fe(n, 'padding');
        (c -= d.width + u.width), (h -= d.height + u.height);
    }
    return (
        (c = Math.max(0, c - o.width)),
        (h = Math.max(0, i ? Math.floor(c / i) : h - o.height)),
        (c = yn(Math.min(c, r, l.maxWidth))),
        (h = yn(Math.min(h, a, l.maxHeight))),
        c && !h && (h = yn(c / 2)),
        { width: c, height: h }
    );
}
function Un(s, t, e) {
    let i = t || 1,
        n = Math.floor(s.height * i),
        o = Math.floor(s.width * i);
    (s.height = n / i), (s.width = o / i);
    let r = s.canvas;
    return (
        r.style &&
            (e || (!r.style.height && !r.style.width)) &&
            ((r.style.height = `${s.height}px`), (r.style.width = `${s.width}px`)),
        s.currentDevicePixelRatio !== i || r.height !== n || r.width !== o
            ? ((s.currentDevicePixelRatio = i),
              (r.height = n),
              (r.width = o),
              s.ctx.setTransform(i, 0, 0, i, 0, 0),
              !0)
            : !1
    );
}
var Yr = (function () {
    let s = !1;
    try {
        let t = {
            get passive() {
                return (s = !0), !1;
            },
        };
        window.addEventListener('test', null, t), window.removeEventListener('test', null, t);
    } catch {}
    return s;
})();
function Yn(s, t) {
    let e = dh(s, t),
        i = e && e.match(/^(\d+)(\.\d+)?px$/);
    return i ? +i[1] : void 0;
}
function Xt(s, t, e, i) {
    return { x: s.x + e * (t.x - s.x), y: s.y + e * (t.y - s.y) };
}
function Zr(s, t, e, i) {
    return {
        x: s.x + e * (t.x - s.x),
        y:
            i === 'middle'
                ? e < 0.5
                    ? s.y
                    : t.y
                : i === 'after'
                  ? e < 1
                      ? s.y
                      : t.y
                  : e > 0
                    ? t.y
                    : s.y,
    };
}
function qr(s, t, e, i) {
    let n = { x: s.cp2x, y: s.cp2y },
        o = { x: t.cp1x, y: t.cp1y },
        r = Xt(s, n, e),
        a = Xt(n, o, e),
        l = Xt(o, t, e),
        c = Xt(r, a, e),
        h = Xt(a, l, e);
    return Xt(c, h, e);
}
var mr = new Map();
function bh(s, t) {
    t = t || {};
    let e = s + JSON.stringify(t),
        i = mr.get(e);
    return i || ((i = new Intl.NumberFormat(s, t)), mr.set(e, i)), i;
}
function Ve(s, t, e) {
    return bh(t, e).format(s);
}
var yh = function (s, t) {
        return {
            x(e) {
                return s + s + t - e;
            },
            setWidth(e) {
                t = e;
            },
            textAlign(e) {
                return e === 'center' ? e : e === 'right' ? 'left' : 'right';
            },
            xPlus(e, i) {
                return e - i;
            },
            leftForLtr(e, i) {
                return e - i;
            },
        };
    },
    xh = function () {
        return {
            x(s) {
                return s;
            },
            setWidth(s) {},
            textAlign(s) {
                return s;
            },
            xPlus(s, t) {
                return s + t;
            },
            leftForLtr(s, t) {
                return s;
            },
        };
    };
function pe(s, t, e) {
    return s ? yh(t, e) : xh();
}
function Zn(s, t) {
    let e, i;
    (t === 'ltr' || t === 'rtl') &&
        ((e = s.canvas.style),
        (i = [e.getPropertyValue('direction'), e.getPropertyPriority('direction')]),
        e.setProperty('direction', t, 'important'),
        (s.prevTextDirection = i));
}
function qn(s, t) {
    t !== void 0 &&
        (delete s.prevTextDirection, s.canvas.style.setProperty('direction', t[0], t[1]));
}
function Gr(s) {
    return s === 'angle'
        ? { between: Re, compare: wc, normalize: ht }
        : { between: It, compare: (t, e) => t - e, normalize: (t) => t };
}
function gr({ start: s, end: t, count: e, loop: i, style: n }) {
    return {
        start: s % e,
        end: t % e,
        loop: i && (t - s + 1) % e === 0,
        style: n,
    };
}
function _h(s, t, e) {
    let { property: i, start: n, end: o } = e,
        { between: r, normalize: a } = Gr(i),
        l = t.length,
        { start: c, end: h, loop: u } = s,
        d,
        f;
    if (u) {
        for (c += l, h += l, d = 0, f = l; d < f && r(a(t[c % l][i]), n, o); ++d) c--, h--;
        (c %= l), (h %= l);
    }
    return h < c && (h += l), { start: c, end: h, loop: u, style: s.style };
}
function Gn(s, t, e) {
    if (!e) return [s];
    let { property: i, start: n, end: o } = e,
        r = t.length,
        { compare: a, between: l, normalize: c } = Gr(i),
        { start: h, end: u, loop: d, style: f } = _h(s, t, e),
        m = [],
        g = !1,
        p = null,
        b,
        y,
        _,
        w = () => l(n, _, b) && a(n, _) !== 0,
        x = () => a(o, b) === 0 || l(o, _, b),
        M = () => g || w(),
        S = () => !g || x();
    for (let v = h, k = h; v <= u; ++v)
        (y = t[v % r]),
            !y.skip &&
                ((b = c(y[i])),
                b !== _ &&
                    ((g = l(b, n, o)),
                    p === null && M() && (p = a(b, n) === 0 ? v : k),
                    p !== null &&
                        S() &&
                        (m.push(
                            gr({
                                start: p,
                                end: v,
                                loop: d,
                                count: r,
                                style: f,
                            }),
                        ),
                        (p = null)),
                    (k = v),
                    (_ = b)));
    return p !== null && m.push(gr({ start: p, end: u, loop: d, count: r, style: f })), m;
}
function Xn(s, t) {
    let e = [],
        i = s.segments;
    for (let n = 0; n < i.length; n++) {
        let o = Gn(i[n], s.points, t);
        o.length && e.push(...o);
    }
    return e;
}
function wh(s, t, e, i) {
    let n = 0,
        o = t - 1;
    if (e && !i) for (; n < t && !s[n].skip; ) n++;
    for (; n < t && s[n].skip; ) n++;
    for (n %= t, e && (o += n); o > n && s[o % t].skip; ) o--;
    return (o %= t), { start: n, end: o };
}
function Sh(s, t, e, i) {
    let n = s.length,
        o = [],
        r = t,
        a = s[t],
        l;
    for (l = t + 1; l <= e; ++l) {
        let c = s[l % n];
        c.skip || c.stop
            ? a.skip ||
              ((i = !1),
              o.push({ start: t % n, end: (l - 1) % n, loop: i }),
              (t = r = c.stop ? l : null))
            : ((r = l), a.skip && (t = l)),
            (a = c);
    }
    return r !== null && o.push({ start: t % n, end: r % n, loop: i }), o;
}
function Xr(s, t) {
    let e = s.points,
        i = s.options.spanGaps,
        n = e.length;
    if (!n) return [];
    let o = !!s._loop,
        { start: r, end: a } = wh(e, n, o, i);
    if (i === !0) return pr(s, [{ start: r, end: a, loop: o }], e, t);
    let l = a < r ? a + n : a,
        c = !!s._fullLoop && r === 0 && a === n - 1;
    return pr(s, Sh(e, r, l, c), e, t);
}
function pr(s, t, e, i) {
    return !i || !i.setContext || !e ? t : Mh(s, t, e, i);
}
function Mh(s, t, e, i) {
    let n = s._chart.getContext(),
        o = br(s.options),
        {
            _datasetIndex: r,
            options: { spanGaps: a },
        } = s,
        l = e.length,
        c = [],
        h = o,
        u = t[0].start,
        d = u;
    function f(m, g, p, b) {
        let y = a ? -1 : 1;
        if (m !== g) {
            for (m += l; e[m % l].skip; ) m -= y;
            for (; e[g % l].skip; ) g += y;
            m % l !== g % l &&
                (c.push({ start: m % l, end: g % l, loop: p, style: b }), (h = b), (u = g % l));
        }
    }
    for (let m of t) {
        u = a ? u : m.start;
        let g = e[u % l],
            p;
        for (d = u + 1; d <= m.end; d++) {
            let b = e[d % l];
            (p = br(
                i.setContext(
                    Bt(n, {
                        type: 'segment',
                        p0: g,
                        p1: b,
                        p0DataIndex: (d - 1) % l,
                        p1DataIndex: d % l,
                        datasetIndex: r,
                    }),
                ),
            )),
                Th(p, h) && f(u, d - 1, m.loop, h),
                (g = b),
                (h = p);
        }
        u < d - 1 && f(u, d - 1, m.loop, h);
    }
    return c;
}
function br(s) {
    return {
        backgroundColor: s.backgroundColor,
        borderCapStyle: s.borderCapStyle,
        borderDash: s.borderDash,
        borderDashOffset: s.borderDashOffset,
        borderJoinStyle: s.borderJoinStyle,
        borderWidth: s.borderWidth,
        borderColor: s.borderColor,
    };
}
function Th(s, t) {
    return t && JSON.stringify(s) !== JSON.stringify(t);
}
var ro = class {
        constructor() {
            (this._request = null),
                (this._charts = new Map()),
                (this._running = !1),
                (this._lastDate = void 0);
        }
        _notify(t, e, i, n) {
            let o = e.listeners[n],
                r = e.duration;
            o.forEach((a) =>
                a({
                    chart: t,
                    initial: e.initial,
                    numSteps: r,
                    currentStep: Math.min(i - e.start, r),
                }),
            );
        }
        _refresh() {
            this._request ||
                ((this._running = !0),
                (this._request = Dn.call(window, () => {
                    this._update(), (this._request = null), this._running && this._refresh();
                })));
        }
        _update(t = Date.now()) {
            let e = 0;
            this._charts.forEach((i, n) => {
                if (!i.running || !i.items.length) return;
                let o = i.items,
                    r = o.length - 1,
                    a = !1,
                    l;
                for (; r >= 0; --r)
                    (l = o[r]),
                        l._active
                            ? (l._total > i.duration && (i.duration = l._total),
                              l.tick(t),
                              (a = !0))
                            : ((o[r] = o[o.length - 1]), o.pop());
                a && (n.draw(), this._notify(n, i, t, 'progress')),
                    o.length ||
                        ((i.running = !1), this._notify(n, i, t, 'complete'), (i.initial = !1)),
                    (e += o.length);
            }),
                (this._lastDate = t),
                e === 0 && (this._running = !1);
        }
        _getAnims(t) {
            let e = this._charts,
                i = e.get(t);
            return (
                i ||
                    ((i = {
                        running: !1,
                        initial: !0,
                        items: [],
                        listeners: { complete: [], progress: [] },
                    }),
                    e.set(t, i)),
                i
            );
        }
        listen(t, e, i) {
            this._getAnims(t).listeners[e].push(i);
        }
        add(t, e) {
            !e || !e.length || this._getAnims(t).items.push(...e);
        }
        has(t) {
            return this._getAnims(t).items.length > 0;
        }
        start(t) {
            let e = this._charts.get(t);
            e &&
                ((e.running = !0),
                (e.start = Date.now()),
                (e.duration = e.items.reduce((i, n) => Math.max(i, n._duration), 0)),
                this._refresh());
        }
        running(t) {
            if (!this._running) return !1;
            let e = this._charts.get(t);
            return !(!e || !e.running || !e.items.length);
        }
        stop(t) {
            let e = this._charts.get(t);
            if (!e || !e.items.length) return;
            let i = e.items,
                n = i.length - 1;
            for (; n >= 0; --n) i[n].cancel();
            (e.items = []), this._notify(t, e, Date.now(), 'complete');
        }
        remove(t) {
            return this._charts.delete(t);
        }
    },
    jt = new ro(),
    Kr = 'transparent',
    vh = {
        boolean(s, t, e) {
            return e > 0.5 ? t : s;
        },
        color(s, t, e) {
            let i = Rn(s || Kr),
                n = i.valid && Rn(t || Kr);
            return n && n.valid ? n.mix(i, e).hexString() : t;
        },
        number(s, t, e) {
            return s + (t - s) * e;
        },
    },
    ao = class {
        constructor(t, e, i, n) {
            let o = e[i];
            n = ze([t.to, n, o, t.from]);
            let r = ze([t.from, o, n]);
            (this._active = !0),
                (this._fn = t.fn || vh[t.type || typeof r]),
                (this._easing = De[t.easing] || De.linear),
                (this._start = Math.floor(Date.now() + (t.delay || 0))),
                (this._duration = this._total = Math.floor(t.duration)),
                (this._loop = !!t.loop),
                (this._target = e),
                (this._prop = i),
                (this._from = r),
                (this._to = n),
                (this._promises = void 0);
        }
        active() {
            return this._active;
        }
        update(t, e, i) {
            if (this._active) {
                this._notify(!1);
                let n = this._target[this._prop],
                    o = i - this._start,
                    r = this._duration - o;
                (this._start = i),
                    (this._duration = Math.floor(Math.max(r, t.duration))),
                    (this._total += o),
                    (this._loop = !!t.loop),
                    (this._to = ze([t.to, e, n, t.from])),
                    (this._from = ze([t.from, n, e]));
            }
        }
        cancel() {
            this._active && (this.tick(Date.now()), (this._active = !1), this._notify(!1));
        }
        tick(t) {
            let e = t - this._start,
                i = this._duration,
                n = this._prop,
                o = this._from,
                r = this._loop,
                a = this._to,
                l;
            if (((this._active = o !== a && (r || e < i)), !this._active)) {
                (this._target[n] = a), this._notify(!0);
                return;
            }
            if (e < 0) {
                this._target[n] = o;
                return;
            }
            (l = (e / i) % 2),
                (l = r && l > 1 ? 2 - l : l),
                (l = this._easing(Math.min(1, Math.max(0, l)))),
                (this._target[n] = this._fn(o, a, l));
        }
        wait() {
            let t = this._promises || (this._promises = []);
            return new Promise((e, i) => {
                t.push({ res: e, rej: i });
            });
        }
        _notify(t) {
            let e = t ? 'res' : 'rej',
                i = this._promises || [];
            for (let n = 0; n < i.length; n++) i[n][e]();
        }
    },
    kh = ['x', 'y', 'borderWidth', 'radius', 'tension'],
    Oh = ['color', 'borderColor', 'backgroundColor'];
F.set('animation', {
    delay: void 0,
    duration: 1e3,
    easing: 'easeOutQuart',
    fn: void 0,
    from: void 0,
    loop: void 0,
    to: void 0,
    type: void 0,
});
var Eh = Object.keys(F.animation);
F.describe('animation', {
    _fallback: !1,
    _indexable: !1,
    _scriptable: (s) => s !== 'onProgress' && s !== 'onComplete' && s !== 'fn',
});
F.set('animations', {
    colors: { type: 'color', properties: Oh },
    numbers: { type: 'number', properties: kh },
});
F.describe('animations', { _fallback: 'animation' });
F.set('transitions', {
    active: { animation: { duration: 400 } },
    resize: { animation: { duration: 0 } },
    show: {
        animations: {
            colors: { from: 'transparent' },
            visible: { type: 'boolean', duration: 0 },
        },
    },
    hide: {
        animations: {
            colors: { to: 'transparent' },
            visible: { type: 'boolean', easing: 'linear', fn: (s) => s | 0 },
        },
    },
});
var Vi = class {
    constructor(t, e) {
        (this._chart = t), (this._properties = new Map()), this.configure(e);
    }
    configure(t) {
        if (!A(t)) return;
        let e = this._properties;
        Object.getOwnPropertyNames(t).forEach((i) => {
            let n = t[i];
            if (!A(n)) return;
            let o = {};
            for (let r of Eh) o[r] = n[r];
            ((j(n.properties) && n.properties) || [i]).forEach((r) => {
                (r === i || !e.has(r)) && e.set(r, o);
            });
        });
    }
    _animateOptions(t, e) {
        let i = e.options,
            n = Ch(t, i);
        if (!n) return [];
        let o = this._createAnimations(n, i);
        return (
            i.$shared &&
                Dh(t.options.$animations, i).then(
                    () => {
                        t.options = i;
                    },
                    () => {},
                ),
            o
        );
    }
    _createAnimations(t, e) {
        let i = this._properties,
            n = [],
            o = t.$animations || (t.$animations = {}),
            r = Object.keys(e),
            a = Date.now(),
            l;
        for (l = r.length - 1; l >= 0; --l) {
            let c = r[l];
            if (c.charAt(0) === '$') continue;
            if (c === 'options') {
                n.push(...this._animateOptions(t, e));
                continue;
            }
            let h = e[c],
                u = o[c],
                d = i.get(c);
            if (u)
                if (d && u.active()) {
                    u.update(d, h, a);
                    continue;
                } else u.cancel();
            if (!d || !d.duration) {
                t[c] = h;
                continue;
            }
            (o[c] = u = new ao(d, t, c, h)), n.push(u);
        }
        return n;
    }
    update(t, e) {
        if (this._properties.size === 0) {
            Object.assign(t, e);
            return;
        }
        let i = this._createAnimations(t, e);
        if (i.length) return jt.add(this._chart, i), !0;
    }
};
function Dh(s, t) {
    let e = [],
        i = Object.keys(t);
    for (let n = 0; n < i.length; n++) {
        let o = s[i[n]];
        o && o.active() && e.push(o.wait());
    }
    return Promise.all(e);
}
function Ch(s, t) {
    if (!t) return;
    let e = s.options;
    if (!e) {
        s.options = t;
        return;
    }
    return e.$shared && (s.options = e = Object.assign({}, e, { $shared: !1, $animations: {} })), e;
}
function Jr(s, t) {
    let e = (s && s.options) || {},
        i = e.reverse,
        n = e.min === void 0 ? t : 0,
        o = e.max === void 0 ? t : 0;
    return { start: i ? o : n, end: i ? n : o };
}
function Ih(s, t, e) {
    if (e === !1) return !1;
    let i = Jr(s, e),
        n = Jr(t, e);
    return { top: n.end, right: i.end, bottom: n.start, left: i.start };
}
function Ah(s) {
    let t, e, i, n;
    return (
        A(s) ? ((t = s.top), (e = s.right), (i = s.bottom), (n = s.left)) : (t = e = i = n = s),
        { top: t, right: e, bottom: i, left: n, disabled: s === !1 }
    );
}
function Ba(s, t) {
    let e = [],
        i = s._getSortedDatasetMetas(t),
        n,
        o;
    for (n = 0, o = i.length; n < o; ++n) e.push(i[n].index);
    return e;
}
function Qr(s, t, e, i = {}) {
    let n = s.keys,
        o = i.mode === 'single',
        r,
        a,
        l,
        c;
    if (t !== null) {
        for (r = 0, a = n.length; r < a; ++r) {
            if (((l = +n[r]), l === e)) {
                if (i.all) continue;
                break;
            }
            (c = s.values[l]), K(c) && (o || t === 0 || Tt(t) === Tt(c)) && (t += c);
        }
        return t;
    }
}
function Fh(s) {
    let t = Object.keys(s),
        e = new Array(t.length),
        i,
        n,
        o;
    for (i = 0, n = t.length; i < n; ++i) (o = t[i]), (e[i] = { x: o, y: s[o] });
    return e;
}
function ta(s, t) {
    let e = s && s.options.stacked;
    return e || (e === void 0 && t.stack !== void 0);
}
function Lh(s, t, e) {
    return `${s.id}.${t.id}.${e.stack || e.type}`;
}
function Ph(s) {
    let { min: t, max: e, minDefined: i, maxDefined: n } = s.getUserBounds();
    return {
        min: i ? t : Number.NEGATIVE_INFINITY,
        max: n ? e : Number.POSITIVE_INFINITY,
    };
}
function Rh(s, t, e) {
    let i = s[t] || (s[t] = {});
    return i[e] || (i[e] = {});
}
function ea(s, t, e, i) {
    for (let n of t.getMatchingVisibleMetas(i).reverse()) {
        let o = s[n.index];
        if ((e && o > 0) || (!e && o < 0)) return n.index;
    }
    return null;
}
function sa(s, t) {
    let { chart: e, _cachedMeta: i } = s,
        n = e._stacks || (e._stacks = {}),
        { iScale: o, vScale: r, index: a } = i,
        l = o.axis,
        c = r.axis,
        h = Lh(o, r, i),
        u = t.length,
        d;
    for (let f = 0; f < u; ++f) {
        let m = t[f],
            { [l]: g, [c]: p } = m,
            b = m._stacks || (m._stacks = {});
        (d = b[c] = Rh(n, h, g)),
            (d[a] = p),
            (d._top = ea(d, r, !0, i.type)),
            (d._bottom = ea(d, r, !1, i.type));
    }
}
function Kn(s, t) {
    let e = s.scales;
    return Object.keys(e)
        .filter((i) => e[i].axis === t)
        .shift();
}
function Nh(s, t) {
    return Bt(s, {
        active: !1,
        dataset: void 0,
        datasetIndex: t,
        index: t,
        mode: 'default',
        type: 'dataset',
    });
}
function zh(s, t, e) {
    return Bt(s, {
        active: !1,
        dataIndex: t,
        parsed: void 0,
        raw: void 0,
        element: e,
        index: t,
        mode: 'default',
        type: 'data',
    });
}
function Ms(s, t) {
    let e = s.controller.index,
        i = s.vScale && s.vScale.axis;
    if (i) {
        t = t || s._parsed;
        for (let n of t) {
            let o = n._stacks;
            if (!o || o[i] === void 0 || o[i][e] === void 0) return;
            delete o[i][e];
        }
    }
}
var Jn = (s) => s === 'reset' || s === 'none',
    ia = (s, t) => (t ? s : Object.assign({}, s)),
    Vh = (s, t, e) => s && !t.hidden && t._stacked && { keys: Ba(e, !0), values: null },
    pt = class {
        constructor(t, e) {
            (this.chart = t),
                (this._ctx = t.ctx),
                (this.index = e),
                (this._cachedDataOpts = {}),
                (this._cachedMeta = this.getMeta()),
                (this._type = this._cachedMeta.type),
                (this.options = void 0),
                (this._parsing = !1),
                (this._data = void 0),
                (this._objectData = void 0),
                (this._sharedOptions = void 0),
                (this._drawStart = void 0),
                (this._drawCount = void 0),
                (this.enableOptionSharing = !1),
                (this.supportsDecimation = !1),
                (this.$context = void 0),
                (this._syncList = []),
                this.initialize();
        }
        initialize() {
            let t = this._cachedMeta;
            this.configure(), this.linkScales(), (t._stacked = ta(t.vScale, t)), this.addElements();
        }
        updateIndex(t) {
            this.index !== t && Ms(this._cachedMeta), (this.index = t);
        }
        linkScales() {
            let t = this.chart,
                e = this._cachedMeta,
                i = this.getDataset(),
                n = (u, d, f, m) => (u === 'x' ? d : u === 'r' ? m : f),
                o = (e.xAxisID = D(i.xAxisID, Kn(t, 'x'))),
                r = (e.yAxisID = D(i.yAxisID, Kn(t, 'y'))),
                a = (e.rAxisID = D(i.rAxisID, Kn(t, 'r'))),
                l = e.indexAxis,
                c = (e.iAxisID = n(l, o, r, a)),
                h = (e.vAxisID = n(l, r, o, a));
            (e.xScale = this.getScaleForId(o)),
                (e.yScale = this.getScaleForId(r)),
                (e.rScale = this.getScaleForId(a)),
                (e.iScale = this.getScaleForId(c)),
                (e.vScale = this.getScaleForId(h));
        }
        getDataset() {
            return this.chart.data.datasets[this.index];
        }
        getMeta() {
            return this.chart.getDatasetMeta(this.index);
        }
        getScaleForId(t) {
            return this.chart.scales[t];
        }
        _getOtherScale(t) {
            let e = this._cachedMeta;
            return t === e.iScale ? e.vScale : e.iScale;
        }
        reset() {
            this._update('reset');
        }
        _destroy() {
            let t = this._cachedMeta;
            this._data && On(this._data, this), t._stacked && Ms(t);
        }
        _dataCheck() {
            let t = this.getDataset(),
                e = t.data || (t.data = []),
                i = this._data;
            if (A(e)) this._data = Fh(e);
            else if (i !== e) {
                if (i) {
                    On(i, this);
                    let n = this._cachedMeta;
                    Ms(n), (n._parsed = []);
                }
                e && Object.isExtensible(e) && Er(e, this), (this._syncList = []), (this._data = e);
            }
        }
        addElements() {
            let t = this._cachedMeta;
            this._dataCheck(),
                this.datasetElementType && (t.dataset = new this.datasetElementType());
        }
        buildOrUpdateElements(t) {
            let e = this._cachedMeta,
                i = this.getDataset(),
                n = !1;
            this._dataCheck();
            let o = e._stacked;
            (e._stacked = ta(e.vScale, e)),
                e.stack !== i.stack && ((n = !0), Ms(e), (e.stack = i.stack)),
                this._resyncElements(t),
                (n || o !== e._stacked) && sa(this, e._parsed);
        }
        configure() {
            let t = this.chart.config,
                e = t.datasetScopeKeys(this._type),
                i = t.getOptionScopes(this.getDataset(), e, !0);
            (this.options = t.createResolver(i, this.getContext())),
                (this._parsing = this.options.parsing),
                (this._cachedDataOpts = {});
        }
        parse(t, e) {
            let { _cachedMeta: i, _data: n } = this,
                { iScale: o, _stacked: r } = i,
                a = o.axis,
                l = t === 0 && e === n.length ? !0 : i._sorted,
                c = t > 0 && i._parsed[t - 1],
                h,
                u,
                d;
            if (this._parsing === !1) (i._parsed = n), (i._sorted = !0), (d = n);
            else {
                j(n[t])
                    ? (d = this.parseArrayData(i, n, t, e))
                    : A(n[t])
                      ? (d = this.parseObjectData(i, n, t, e))
                      : (d = this.parsePrimitiveData(i, n, t, e));
                let f = () => u[a] === null || (c && u[a] < c[a]);
                for (h = 0; h < e; ++h)
                    (i._parsed[h + t] = u = d[h]), l && (f() && (l = !1), (c = u));
                i._sorted = l;
            }
            r && sa(this, d);
        }
        parsePrimitiveData(t, e, i, n) {
            let { iScale: o, vScale: r } = t,
                a = o.axis,
                l = r.axis,
                c = o.getLabels(),
                h = o === r,
                u = new Array(n),
                d,
                f,
                m;
            for (d = 0, f = n; d < f; ++d)
                (m = d + i),
                    (u[d] = {
                        [a]: h || o.parse(c[m], m),
                        [l]: r.parse(e[m], m),
                    });
            return u;
        }
        parseArrayData(t, e, i, n) {
            let { xScale: o, yScale: r } = t,
                a = new Array(n),
                l,
                c,
                h,
                u;
            for (l = 0, c = n; l < c; ++l)
                (h = l + i), (u = e[h]), (a[l] = { x: o.parse(u[0], h), y: r.parse(u[1], h) });
            return a;
        }
        parseObjectData(t, e, i, n) {
            let { xScale: o, yScale: r } = t,
                { xAxisKey: a = 'x', yAxisKey: l = 'y' } = this._parsing,
                c = new Array(n),
                h,
                u,
                d,
                f;
            for (h = 0, u = n; h < u; ++h)
                (d = h + i),
                    (f = e[d]),
                    (c[h] = {
                        x: o.parse(Ht(f, a), d),
                        y: r.parse(Ht(f, l), d),
                    });
            return c;
        }
        getParsed(t) {
            return this._cachedMeta._parsed[t];
        }
        getDataElement(t) {
            return this._cachedMeta.data[t];
        }
        applyStack(t, e, i) {
            let n = this.chart,
                o = this._cachedMeta,
                r = e[t.axis],
                a = { keys: Ba(n, !0), values: e._stacks[t.axis] };
            return Qr(a, r, o.index, { mode: i });
        }
        updateRangeFromParsed(t, e, i, n) {
            let o = i[e.axis],
                r = o === null ? NaN : o,
                a = n && i._stacks[e.axis];
            n && a && ((n.values = a), (r = Qr(n, o, this._cachedMeta.index))),
                (t.min = Math.min(t.min, r)),
                (t.max = Math.max(t.max, r));
        }
        getMinMax(t, e) {
            let i = this._cachedMeta,
                n = i._parsed,
                o = i._sorted && t === i.iScale,
                r = n.length,
                a = this._getOtherScale(t),
                l = Vh(e, i, this.chart),
                c = {
                    min: Number.POSITIVE_INFINITY,
                    max: Number.NEGATIVE_INFINITY,
                },
                { min: h, max: u } = Ph(a),
                d,
                f;
            function m() {
                f = n[d];
                let g = f[a.axis];
                return !K(f[t.axis]) || h > g || u < g;
            }
            for (d = 0; d < r && !(!m() && (this.updateRangeFromParsed(c, t, f, l), o)); ++d);
            if (o) {
                for (d = r - 1; d >= 0; --d)
                    if (!m()) {
                        this.updateRangeFromParsed(c, t, f, l);
                        break;
                    }
            }
            return c;
        }
        getAllParsedValues(t) {
            let e = this._cachedMeta._parsed,
                i = [],
                n,
                o,
                r;
            for (n = 0, o = e.length; n < o; ++n) (r = e[n][t.axis]), K(r) && i.push(r);
            return i;
        }
        getMaxOverflow() {
            return !1;
        }
        getLabelAndValue(t) {
            let e = this._cachedMeta,
                i = e.iScale,
                n = e.vScale,
                o = this.getParsed(t);
            return {
                label: i ? '' + i.getLabelForValue(o[i.axis]) : '',
                value: n ? '' + n.getLabelForValue(o[n.axis]) : '',
            };
        }
        _update(t) {
            let e = this._cachedMeta;
            this.update(t || 'default'),
                (e._clip = Ah(D(this.options.clip, Ih(e.xScale, e.yScale, this.getMaxOverflow()))));
        }
        update(t) {}
        draw() {
            let t = this._ctx,
                e = this.chart,
                i = this._cachedMeta,
                n = i.data || [],
                o = e.chartArea,
                r = [],
                a = this._drawStart || 0,
                l = this._drawCount || n.length - a,
                c = this.options.drawActiveElementsOnTop,
                h;
            for (i.dataset && i.dataset.draw(t, o, a, l), h = a; h < a + l; ++h) {
                let u = n[h];
                u.hidden || (u.active && c ? r.push(u) : u.draw(t, o));
            }
            for (h = 0; h < r.length; ++h) r[h].draw(t, o);
        }
        getStyle(t, e) {
            let i = e ? 'active' : 'default';
            return t === void 0 && this._cachedMeta.dataset
                ? this.resolveDatasetElementOptions(i)
                : this.resolveDataElementOptions(t || 0, i);
        }
        getContext(t, e, i) {
            let n = this.getDataset(),
                o;
            if (t >= 0 && t < this._cachedMeta.data.length) {
                let r = this._cachedMeta.data[t];
                (o = r.$context || (r.$context = zh(this.getContext(), t, r))),
                    (o.parsed = this.getParsed(t)),
                    (o.raw = n.data[t]),
                    (o.index = o.dataIndex = t);
            } else
                (o = this.$context || (this.$context = Nh(this.chart.getContext(), this.index))),
                    (o.dataset = n),
                    (o.index = o.datasetIndex = this.index);
            return (o.active = !!e), (o.mode = i), o;
        }
        resolveDatasetElementOptions(t) {
            return this._resolveElementOptions(this.datasetElementType.id, t);
        }
        resolveDataElementOptions(t, e) {
            return this._resolveElementOptions(this.dataElementType.id, e, t);
        }
        _resolveElementOptions(t, e = 'default', i) {
            let n = e === 'active',
                o = this._cachedDataOpts,
                r = t + '-' + e,
                a = o[r],
                l = this.enableOptionSharing && ft(i);
            if (a) return ia(a, l);
            let c = this.chart.config,
                h = c.datasetElementScopeKeys(this._type, t),
                u = n ? [`${t}Hover`, 'hover', t, ''] : [t, ''],
                d = c.getOptionScopes(this.getDataset(), h),
                f = Object.keys(F.elements[t]),
                m = () => this.getContext(i, n),
                g = c.resolveNamedOptions(d, f, m, u);
            return g.$shared && ((g.$shared = l), (o[r] = Object.freeze(ia(g, l)))), g;
        }
        _resolveAnimations(t, e, i) {
            let n = this.chart,
                o = this._cachedDataOpts,
                r = `animation-${e}`,
                a = o[r];
            if (a) return a;
            let l;
            if (n.options.animation !== !1) {
                let h = this.chart.config,
                    u = h.datasetAnimationScopeKeys(this._type, e),
                    d = h.getOptionScopes(this.getDataset(), u);
                l = h.createResolver(d, this.getContext(t, i, e));
            }
            let c = new Vi(n, l && l.animations);
            return l && l._cacheable && (o[r] = Object.freeze(c)), c;
        }
        getSharedOptions(t) {
            if (t.$shared)
                return this._sharedOptions || (this._sharedOptions = Object.assign({}, t));
        }
        includeOptions(t, e) {
            return !e || Jn(t) || this.chart._animationsDisabled;
        }
        _getSharedOptions(t, e) {
            let i = this.resolveDataElementOptions(t, e),
                n = this._sharedOptions,
                o = this.getSharedOptions(i),
                r = this.includeOptions(e, o) || o !== n;
            return this.updateSharedOptions(o, e, i), { sharedOptions: o, includeOptions: r };
        }
        updateElement(t, e, i, n) {
            Jn(n) ? Object.assign(t, i) : this._resolveAnimations(e, n).update(t, i);
        }
        updateSharedOptions(t, e, i) {
            t && !Jn(e) && this._resolveAnimations(void 0, e).update(t, i);
        }
        _setStyle(t, e, i, n) {
            t.active = n;
            let o = this.getStyle(e, n);
            this._resolveAnimations(e, i, n).update(t, {
                options: (!n && this.getSharedOptions(o)) || o,
            });
        }
        removeHoverStyle(t, e, i) {
            this._setStyle(t, i, 'active', !1);
        }
        setHoverStyle(t, e, i) {
            this._setStyle(t, i, 'active', !0);
        }
        _removeDatasetHoverStyle() {
            let t = this._cachedMeta.dataset;
            t && this._setStyle(t, void 0, 'active', !1);
        }
        _setDatasetHoverStyle() {
            let t = this._cachedMeta.dataset;
            t && this._setStyle(t, void 0, 'active', !0);
        }
        _resyncElements(t) {
            let e = this._data,
                i = this._cachedMeta.data;
            for (let [a, l, c] of this._syncList) this[a](l, c);
            this._syncList = [];
            let n = i.length,
                o = e.length,
                r = Math.min(o, n);
            r && this.parse(0, r),
                o > n ? this._insertElements(n, o - n, t) : o < n && this._removeElements(o, n - o);
        }
        _insertElements(t, e, i = !0) {
            let n = this._cachedMeta,
                o = n.data,
                r = t + e,
                a,
                l = (c) => {
                    for (c.length += e, a = c.length - 1; a >= r; a--) c[a] = c[a - e];
                };
            for (l(o), a = t; a < r; ++a) o[a] = new this.dataElementType();
            this._parsing && l(n._parsed),
                this.parse(t, e),
                i && this.updateElements(o, t, e, 'reset');
        }
        updateElements(t, e, i, n) {}
        _removeElements(t, e) {
            let i = this._cachedMeta;
            if (this._parsing) {
                let n = i._parsed.splice(t, e);
                i._stacked && Ms(i, n);
            }
            i.data.splice(t, e);
        }
        _sync(t) {
            if (this._parsing) this._syncList.push(t);
            else {
                let [e, i, n] = t;
                this[e](i, n);
            }
            this.chart._dataChanges.push([this.index, ...t]);
        }
        _onDataPush() {
            let t = arguments.length;
            this._sync(['_insertElements', this.getDataset().data.length - t, t]);
        }
        _onDataPop() {
            this._sync(['_removeElements', this._cachedMeta.data.length - 1, 1]);
        }
        _onDataShift() {
            this._sync(['_removeElements', 0, 1]);
        }
        _onDataSplice(t, e) {
            e && this._sync(['_removeElements', t, e]);
            let i = arguments.length - 2;
            i && this._sync(['_insertElements', t, i]);
        }
        _onDataUnshift() {
            this._sync(['_insertElements', 0, arguments.length]);
        }
    };
pt.defaults = {};
pt.prototype.datasetElementType = null;
pt.prototype.dataElementType = null;
function Wh(s, t) {
    if (!s._cache.$bar) {
        let e = s.getMatchingVisibleMetas(t),
            i = [];
        for (let n = 0, o = e.length; n < o; n++)
            i = i.concat(e[n].controller.getAllParsedValues(s));
        s._cache.$bar = En(i.sort((n, o) => n - o));
    }
    return s._cache.$bar;
}
function Hh(s) {
    let t = s.iScale,
        e = Wh(t, s.type),
        i = t._length,
        n,
        o,
        r,
        a,
        l = () => {
            r === 32767 ||
                r === -32768 ||
                (ft(a) && (i = Math.min(i, Math.abs(r - a) || i)), (a = r));
        };
    for (n = 0, o = e.length; n < o; ++n) (r = t.getPixelForValue(e[n])), l();
    for (a = void 0, n = 0, o = t.ticks.length; n < o; ++n) (r = t.getPixelForTick(n)), l();
    return i;
}
function Bh(s, t, e, i) {
    let n = e.barThickness,
        o,
        r;
    return (
        P(n) ? ((o = t.min * e.categoryPercentage), (r = e.barPercentage)) : ((o = n * i), (r = 1)),
        { chunk: o / i, ratio: r, start: t.pixels[s] - o / 2 }
    );
}
function jh(s, t, e, i) {
    let n = t.pixels,
        o = n[s],
        r = s > 0 ? n[s - 1] : null,
        a = s < n.length - 1 ? n[s + 1] : null,
        l = e.categoryPercentage;
    r === null && (r = o - (a === null ? t.end - t.start : a - o)), a === null && (a = o + o - r);
    let c = o - ((o - Math.min(r, a)) / 2) * l;
    return {
        chunk: ((Math.abs(a - r) / 2) * l) / i,
        ratio: e.barPercentage,
        start: c,
    };
}
function $h(s, t, e, i) {
    let n = e.parse(s[0], i),
        o = e.parse(s[1], i),
        r = Math.min(n, o),
        a = Math.max(n, o),
        l = r,
        c = a;
    Math.abs(r) > Math.abs(a) && ((l = a), (c = r)),
        (t[e.axis] = c),
        (t._custom = {
            barStart: l,
            barEnd: c,
            start: n,
            end: o,
            min: r,
            max: a,
        });
}
function ja(s, t, e, i) {
    return j(s) ? $h(s, t, e, i) : (t[e.axis] = e.parse(s, i)), t;
}
function na(s, t, e, i) {
    let n = s.iScale,
        o = s.vScale,
        r = n.getLabels(),
        a = n === o,
        l = [],
        c,
        h,
        u,
        d;
    for (c = e, h = e + i; c < h; ++c)
        (d = t[c]), (u = {}), (u[n.axis] = a || n.parse(r[c], c)), l.push(ja(d, u, o, c));
    return l;
}
function Qn(s) {
    return s && s.barStart !== void 0 && s.barEnd !== void 0;
}
function Uh(s, t, e) {
    return s !== 0 ? Tt(s) : (t.isHorizontal() ? 1 : -1) * (t.min >= e ? 1 : -1);
}
function Yh(s) {
    let t, e, i, n, o;
    return (
        s.horizontal
            ? ((t = s.base > s.x), (e = 'left'), (i = 'right'))
            : ((t = s.base < s.y), (e = 'bottom'), (i = 'top')),
        t ? ((n = 'end'), (o = 'start')) : ((n = 'start'), (o = 'end')),
        { start: e, end: i, reverse: t, top: n, bottom: o }
    );
}
function Zh(s, t, e, i) {
    let n = t.borderSkipped,
        o = {};
    if (!n) {
        s.borderSkipped = o;
        return;
    }
    if (n === !0) {
        s.borderSkipped = { top: !0, right: !0, bottom: !0, left: !0 };
        return;
    }
    let { start: r, end: a, reverse: l, top: c, bottom: h } = Yh(s);
    n === 'middle' &&
        e &&
        ((s.enableBorderRadius = !0),
        (e._top || 0) === i
            ? (n = c)
            : (e._bottom || 0) === i
              ? (n = h)
              : ((o[oa(h, r, a, l)] = !0), (n = c))),
        (o[oa(n, r, a, l)] = !0),
        (s.borderSkipped = o);
}
function oa(s, t, e, i) {
    return i ? ((s = qh(s, t, e)), (s = ra(s, e, t))) : (s = ra(s, t, e)), s;
}
function qh(s, t, e) {
    return s === t ? e : s === e ? t : s;
}
function ra(s, t, e) {
    return s === 'start' ? t : s === 'end' ? e : s;
}
function Gh(s, { inflateAmount: t }, e) {
    s.inflateAmount = t === 'auto' ? (e === 1 ? 0.33 : 0) : t;
}
var Be = class extends pt {
    parsePrimitiveData(t, e, i, n) {
        return na(t, e, i, n);
    }
    parseArrayData(t, e, i, n) {
        return na(t, e, i, n);
    }
    parseObjectData(t, e, i, n) {
        let { iScale: o, vScale: r } = t,
            { xAxisKey: a = 'x', yAxisKey: l = 'y' } = this._parsing,
            c = o.axis === 'x' ? a : l,
            h = r.axis === 'x' ? a : l,
            u = [],
            d,
            f,
            m,
            g;
        for (d = i, f = i + n; d < f; ++d)
            (g = e[d]), (m = {}), (m[o.axis] = o.parse(Ht(g, c), d)), u.push(ja(Ht(g, h), m, r, d));
        return u;
    }
    updateRangeFromParsed(t, e, i, n) {
        super.updateRangeFromParsed(t, e, i, n);
        let o = i._custom;
        o &&
            e === this._cachedMeta.vScale &&
            ((t.min = Math.min(t.min, o.min)), (t.max = Math.max(t.max, o.max)));
    }
    getMaxOverflow() {
        return 0;
    }
    getLabelAndValue(t) {
        let e = this._cachedMeta,
            { iScale: i, vScale: n } = e,
            o = this.getParsed(t),
            r = o._custom,
            a = Qn(r) ? '[' + r.start + ', ' + r.end + ']' : '' + n.getLabelForValue(o[n.axis]);
        return { label: '' + i.getLabelForValue(o[i.axis]), value: a };
    }
    initialize() {
        (this.enableOptionSharing = !0), super.initialize();
        let t = this._cachedMeta;
        t.stack = this.getDataset().stack;
    }
    update(t) {
        let e = this._cachedMeta;
        this.updateElements(e.data, 0, e.data.length, t);
    }
    updateElements(t, e, i, n) {
        let o = n === 'reset',
            {
                index: r,
                _cachedMeta: { vScale: a },
            } = this,
            l = a.getBasePixel(),
            c = a.isHorizontal(),
            h = this._getRuler(),
            { sharedOptions: u, includeOptions: d } = this._getSharedOptions(e, n);
        for (let f = e; f < e + i; f++) {
            let m = this.getParsed(f),
                g = o || P(m[a.axis]) ? { base: l, head: l } : this._calculateBarValuePixels(f),
                p = this._calculateBarIndexPixels(f, h),
                b = (m._stacks || {})[a.axis],
                y = {
                    horizontal: c,
                    base: g.base,
                    enableBorderRadius: !b || Qn(m._custom) || r === b._top || r === b._bottom,
                    x: c ? g.head : p.center,
                    y: c ? p.center : g.head,
                    height: c ? p.size : Math.abs(g.size),
                    width: c ? Math.abs(g.size) : p.size,
                };
            d && (y.options = u || this.resolveDataElementOptions(f, t[f].active ? 'active' : n));
            let _ = y.options || t[f].options;
            Zh(y, _, b, r), Gh(y, _, h.ratio), this.updateElement(t[f], f, y, n);
        }
    }
    _getStacks(t, e) {
        let { iScale: i } = this._cachedMeta,
            n = i.getMatchingVisibleMetas(this._type).filter((l) => l.controller.options.grouped),
            o = i.options.stacked,
            r = [],
            a = (l) => {
                let c = l.controller.getParsed(e),
                    h = c && c[l.vScale.axis];
                if (P(h) || isNaN(h)) return !0;
            };
        for (let l of n)
            if (
                !(e !== void 0 && a(l)) &&
                ((o === !1 || r.indexOf(l.stack) === -1 || (o === void 0 && l.stack === void 0)) &&
                    r.push(l.stack),
                l.index === t)
            )
                break;
        return r.length || r.push(void 0), r;
    }
    _getStackCount(t) {
        return this._getStacks(void 0, t).length;
    }
    _getStackIndex(t, e, i) {
        let n = this._getStacks(t, i),
            o = e !== void 0 ? n.indexOf(e) : -1;
        return o === -1 ? n.length - 1 : o;
    }
    _getRuler() {
        let t = this.options,
            e = this._cachedMeta,
            i = e.iScale,
            n = [],
            o,
            r;
        for (o = 0, r = e.data.length; o < r; ++o)
            n.push(i.getPixelForValue(this.getParsed(o)[i.axis], o));
        let a = t.barThickness;
        return {
            min: a || Hh(e),
            pixels: n,
            start: i._startPixel,
            end: i._endPixel,
            stackCount: this._getStackCount(),
            scale: i,
            grouped: t.grouped,
            ratio: a ? 1 : t.categoryPercentage * t.barPercentage,
        };
    }
    _calculateBarValuePixels(t) {
        let {
                _cachedMeta: { vScale: e, _stacked: i },
                options: { base: n, minBarLength: o },
            } = this,
            r = n || 0,
            a = this.getParsed(t),
            l = a._custom,
            c = Qn(l),
            h = a[e.axis],
            u = 0,
            d = i ? this.applyStack(e, a, i) : h,
            f,
            m;
        d !== h && ((u = d - h), (d = h)),
            c &&
                ((h = l.barStart),
                (d = l.barEnd - l.barStart),
                h !== 0 && Tt(h) !== Tt(l.barEnd) && (u = 0),
                (u += h));
        let g = !P(n) && !c ? n : u,
            p = e.getPixelForValue(g);
        if (
            (this.chart.getDataVisibility(t) ? (f = e.getPixelForValue(u + d)) : (f = p),
            (m = f - p),
            Math.abs(m) < o)
        ) {
            (m = Uh(m, e, r) * o), h === r && (p -= m / 2);
            let b = e.getPixelForDecimal(0),
                y = e.getPixelForDecimal(1),
                _ = Math.min(b, y),
                w = Math.max(b, y);
            (p = Math.max(Math.min(p, w), _)), (f = p + m);
        }
        if (p === e.getPixelForValue(r)) {
            let b = (Tt(m) * e.getLineWidthForValue(r)) / 2;
            (p += b), (m -= b);
        }
        return { size: m, base: p, head: f, center: f + m / 2 };
    }
    _calculateBarIndexPixels(t, e) {
        let i = e.scale,
            n = this.options,
            o = n.skipNull,
            r = D(n.maxBarThickness, 1 / 0),
            a,
            l;
        if (e.grouped) {
            let c = o ? this._getStackCount(t) : e.stackCount,
                h = n.barThickness === 'flex' ? jh(t, e, n, c) : Bh(t, e, n, c),
                u = this._getStackIndex(this.index, this._cachedMeta.stack, o ? t : void 0);
            (a = h.start + h.chunk * u + h.chunk / 2), (l = Math.min(r, h.chunk * h.ratio));
        } else
            (a = i.getPixelForValue(this.getParsed(t)[i.axis], t)),
                (l = Math.min(r, e.min * e.ratio));
        return { base: a - l / 2, head: a + l / 2, center: a, size: l };
    }
    draw() {
        let t = this._cachedMeta,
            e = t.vScale,
            i = t.data,
            n = i.length,
            o = 0;
        for (; o < n; ++o) this.getParsed(o)[e.axis] !== null && i[o].draw(this._ctx);
    }
};
Be.id = 'bar';
Be.defaults = {
    datasetElementType: !1,
    dataElementType: 'bar',
    categoryPercentage: 0.8,
    barPercentage: 0.9,
    grouped: !0,
    animations: {
        numbers: {
            type: 'number',
            properties: ['x', 'y', 'base', 'width', 'height'],
        },
    },
};
Be.overrides = {
    scales: {
        _index_: { type: 'category', offset: !0, grid: { offset: !0 } },
        _value_: { type: 'linear', beginAtZero: !0 },
    },
};
var je = class extends pt {
    initialize() {
        (this.enableOptionSharing = !0), super.initialize();
    }
    parsePrimitiveData(t, e, i, n) {
        let o = super.parsePrimitiveData(t, e, i, n);
        for (let r = 0; r < o.length; r++)
            o[r]._custom = this.resolveDataElementOptions(r + i).radius;
        return o;
    }
    parseArrayData(t, e, i, n) {
        let o = super.parseArrayData(t, e, i, n);
        for (let r = 0; r < o.length; r++) {
            let a = e[i + r];
            o[r]._custom = D(a[2], this.resolveDataElementOptions(r + i).radius);
        }
        return o;
    }
    parseObjectData(t, e, i, n) {
        let o = super.parseObjectData(t, e, i, n);
        for (let r = 0; r < o.length; r++) {
            let a = e[i + r];
            o[r]._custom = D(a && a.r && +a.r, this.resolveDataElementOptions(r + i).radius);
        }
        return o;
    }
    getMaxOverflow() {
        let t = this._cachedMeta.data,
            e = 0;
        for (let i = t.length - 1; i >= 0; --i)
            e = Math.max(e, t[i].size(this.resolveDataElementOptions(i)) / 2);
        return e > 0 && e;
    }
    getLabelAndValue(t) {
        let e = this._cachedMeta,
            { xScale: i, yScale: n } = e,
            o = this.getParsed(t),
            r = i.getLabelForValue(o.x),
            a = n.getLabelForValue(o.y),
            l = o._custom;
        return {
            label: e.label,
            value: '(' + r + ', ' + a + (l ? ', ' + l : '') + ')',
        };
    }
    update(t) {
        let e = this._cachedMeta.data;
        this.updateElements(e, 0, e.length, t);
    }
    updateElements(t, e, i, n) {
        let o = n === 'reset',
            { iScale: r, vScale: a } = this._cachedMeta,
            { sharedOptions: l, includeOptions: c } = this._getSharedOptions(e, n),
            h = r.axis,
            u = a.axis;
        for (let d = e; d < e + i; d++) {
            let f = t[d],
                m = !o && this.getParsed(d),
                g = {},
                p = (g[h] = o ? r.getPixelForDecimal(0.5) : r.getPixelForValue(m[h])),
                b = (g[u] = o ? a.getBasePixel() : a.getPixelForValue(m[u]));
            (g.skip = isNaN(p) || isNaN(b)),
                c &&
                    ((g.options = l || this.resolveDataElementOptions(d, f.active ? 'active' : n)),
                    o && (g.options.radius = 0)),
                this.updateElement(f, d, g, n);
        }
    }
    resolveDataElementOptions(t, e) {
        let i = this.getParsed(t),
            n = super.resolveDataElementOptions(t, e);
        n.$shared && (n = Object.assign({}, n, { $shared: !1 }));
        let o = n.radius;
        return e !== 'active' && (n.radius = 0), (n.radius += D(i && i._custom, o)), n;
    }
};
je.id = 'bubble';
je.defaults = {
    datasetElementType: !1,
    dataElementType: 'point',
    animations: {
        numbers: {
            type: 'number',
            properties: ['x', 'y', 'borderWidth', 'radius'],
        },
    },
};
je.overrides = {
    scales: { x: { type: 'linear' }, y: { type: 'linear' } },
    plugins: {
        tooltip: {
            callbacks: {
                title() {
                    return '';
                },
            },
        },
    },
};
function Xh(s, t, e) {
    let i = 1,
        n = 1,
        o = 0,
        r = 0;
    if (t < B) {
        let a = s,
            l = a + t,
            c = Math.cos(a),
            h = Math.sin(a),
            u = Math.cos(l),
            d = Math.sin(l),
            f = (_, w, x) => (Re(_, a, l, !0) ? 1 : Math.max(w, w * e, x, x * e)),
            m = (_, w, x) => (Re(_, a, l, !0) ? -1 : Math.min(w, w * e, x, x * e)),
            g = f(0, c, u),
            p = f(Z, h, d),
            b = m(Y, c, u),
            y = m(Y + Z, h, d);
        (i = (g - b) / 2), (n = (p - y) / 2), (o = -(g + b) / 2), (r = -(p + y) / 2);
    }
    return { ratioX: i, ratioY: n, offsetX: o, offsetY: r };
}
var re = class extends pt {
    constructor(t, e) {
        super(t, e),
            (this.enableOptionSharing = !0),
            (this.innerRadius = void 0),
            (this.outerRadius = void 0),
            (this.offsetX = void 0),
            (this.offsetY = void 0);
    }
    linkScales() {}
    parse(t, e) {
        let i = this.getDataset().data,
            n = this._cachedMeta;
        if (this._parsing === !1) n._parsed = i;
        else {
            let o = (l) => +i[l];
            if (A(i[t])) {
                let { key: l = 'value' } = this._parsing;
                o = (c) => +Ht(i[c], l);
            }
            let r, a;
            for (r = t, a = t + e; r < a; ++r) n._parsed[r] = o(r);
        }
    }
    _getRotation() {
        return _t(this.options.rotation - 90);
    }
    _getCircumference() {
        return _t(this.options.circumference);
    }
    _getRotationExtents() {
        let t = B,
            e = -B;
        for (let i = 0; i < this.chart.data.datasets.length; ++i)
            if (this.chart.isDatasetVisible(i)) {
                let n = this.chart.getDatasetMeta(i).controller,
                    o = n._getRotation(),
                    r = n._getCircumference();
                (t = Math.min(t, o)), (e = Math.max(e, o + r));
            }
        return { rotation: t, circumference: e - t };
    }
    update(t) {
        let e = this.chart,
            { chartArea: i } = e,
            n = this._cachedMeta,
            o = n.data,
            r = this.getMaxBorderWidth() + this.getMaxOffset(o) + this.options.spacing,
            a = Math.max((Math.min(i.width, i.height) - r) / 2, 0),
            l = Math.min(xr(this.options.cutout, a), 1),
            c = this._getRingWeight(this.index),
            { circumference: h, rotation: u } = this._getRotationExtents(),
            { ratioX: d, ratioY: f, offsetX: m, offsetY: g } = Xh(u, h, l),
            p = (i.width - r) / d,
            b = (i.height - r) / f,
            y = Math.max(Math.min(p, b) / 2, 0),
            _ = wn(this.options.radius, y),
            w = Math.max(_ * l, 0),
            x = (_ - w) / this._getVisibleDatasetWeightTotal();
        (this.offsetX = m * _),
            (this.offsetY = g * _),
            (n.total = this.calculateTotal()),
            (this.outerRadius = _ - x * this._getRingWeightOffset(this.index)),
            (this.innerRadius = Math.max(this.outerRadius - x * c, 0)),
            this.updateElements(o, 0, o.length, t);
    }
    _circumference(t, e) {
        let i = this.options,
            n = this._cachedMeta,
            o = this._getCircumference();
        return (e && i.animation.animateRotate) ||
            !this.chart.getDataVisibility(t) ||
            n._parsed[t] === null ||
            n.data[t].hidden
            ? 0
            : this.calculateCircumference((n._parsed[t] * o) / B);
    }
    updateElements(t, e, i, n) {
        let o = n === 'reset',
            r = this.chart,
            a = r.chartArea,
            c = r.options.animation,
            h = (a.left + a.right) / 2,
            u = (a.top + a.bottom) / 2,
            d = o && c.animateScale,
            f = d ? 0 : this.innerRadius,
            m = d ? 0 : this.outerRadius,
            { sharedOptions: g, includeOptions: p } = this._getSharedOptions(e, n),
            b = this._getRotation(),
            y;
        for (y = 0; y < e; ++y) b += this._circumference(y, o);
        for (y = e; y < e + i; ++y) {
            let _ = this._circumference(y, o),
                w = t[y],
                x = {
                    x: h + this.offsetX,
                    y: u + this.offsetY,
                    startAngle: b,
                    endAngle: b + _,
                    circumference: _,
                    outerRadius: m,
                    innerRadius: f,
                };
            p && (x.options = g || this.resolveDataElementOptions(y, w.active ? 'active' : n)),
                (b += _),
                this.updateElement(w, y, x, n);
        }
    }
    calculateTotal() {
        let t = this._cachedMeta,
            e = t.data,
            i = 0,
            n;
        for (n = 0; n < e.length; n++) {
            let o = t._parsed[n];
            o !== null &&
                !isNaN(o) &&
                this.chart.getDataVisibility(n) &&
                !e[n].hidden &&
                (i += Math.abs(o));
        }
        return i;
    }
    calculateCircumference(t) {
        let e = this._cachedMeta.total;
        return e > 0 && !isNaN(t) ? B * (Math.abs(t) / e) : 0;
    }
    getLabelAndValue(t) {
        let e = this._cachedMeta,
            i = this.chart,
            n = i.data.labels || [],
            o = Ve(e._parsed[t], i.options.locale);
        return { label: n[t] || '', value: o };
    }
    getMaxBorderWidth(t) {
        let e = 0,
            i = this.chart,
            n,
            o,
            r,
            a,
            l;
        if (!t) {
            for (n = 0, o = i.data.datasets.length; n < o; ++n)
                if (i.isDatasetVisible(n)) {
                    (r = i.getDatasetMeta(n)), (t = r.data), (a = r.controller);
                    break;
                }
        }
        if (!t) return 0;
        for (n = 0, o = t.length; n < o; ++n)
            (l = a.resolveDataElementOptions(n)),
                l.borderAlign !== 'inner' &&
                    (e = Math.max(e, l.borderWidth || 0, l.hoverBorderWidth || 0));
        return e;
    }
    getMaxOffset(t) {
        let e = 0;
        for (let i = 0, n = t.length; i < n; ++i) {
            let o = this.resolveDataElementOptions(i);
            e = Math.max(e, o.offset || 0, o.hoverOffset || 0);
        }
        return e;
    }
    _getRingWeightOffset(t) {
        let e = 0;
        for (let i = 0; i < t; ++i) this.chart.isDatasetVisible(i) && (e += this._getRingWeight(i));
        return e;
    }
    _getRingWeight(t) {
        return Math.max(D(this.chart.data.datasets[t].weight, 1), 0);
    }
    _getVisibleDatasetWeightTotal() {
        return this._getRingWeightOffset(this.chart.data.datasets.length) || 1;
    }
};
re.id = 'doughnut';
re.defaults = {
    datasetElementType: !1,
    dataElementType: 'arc',
    animation: { animateRotate: !0, animateScale: !1 },
    animations: {
        numbers: {
            type: 'number',
            properties: [
                'circumference',
                'endAngle',
                'innerRadius',
                'outerRadius',
                'startAngle',
                'x',
                'y',
                'offset',
                'borderWidth',
                'spacing',
            ],
        },
    },
    cutout: '50%',
    rotation: 0,
    circumference: 360,
    radius: '100%',
    spacing: 0,
    indexAxis: 'r',
};
re.descriptors = {
    _scriptable: (s) => s !== 'spacing',
    _indexable: (s) => s !== 'spacing',
};
re.overrides = {
    aspectRatio: 1,
    plugins: {
        legend: {
            labels: {
                generateLabels(s) {
                    let t = s.data;
                    if (t.labels.length && t.datasets.length) {
                        let {
                            labels: { pointStyle: e },
                        } = s.legend.options;
                        return t.labels.map((i, n) => {
                            let r = s.getDatasetMeta(0).controller.getStyle(n);
                            return {
                                text: i,
                                fillStyle: r.backgroundColor,
                                strokeStyle: r.borderColor,
                                lineWidth: r.borderWidth,
                                pointStyle: e,
                                hidden: !s.getDataVisibility(n),
                                index: n,
                            };
                        });
                    }
                    return [];
                },
            },
            onClick(s, t, e) {
                e.chart.toggleDataVisibility(t.index), e.chart.update();
            },
        },
        tooltip: {
            callbacks: {
                title() {
                    return '';
                },
                label(s) {
                    let t = s.label,
                        e = ': ' + s.formattedValue;
                    return j(t) ? ((t = t.slice()), (t[0] += e)) : (t += e), t;
                },
            },
        },
    },
};
var $e = class extends pt {
    initialize() {
        (this.enableOptionSharing = !0), (this.supportsDecimation = !0), super.initialize();
    }
    update(t) {
        let e = this._cachedMeta,
            { dataset: i, data: n = [], _dataset: o } = e,
            r = this.chart._animationsDisabled,
            { start: a, count: l } = In(e, n, r);
        (this._drawStart = a),
            (this._drawCount = l),
            An(e) && ((a = 0), (l = n.length)),
            (i._chart = this.chart),
            (i._datasetIndex = this.index),
            (i._decimated = !!o._decimated),
            (i.points = n);
        let c = this.resolveDatasetElementOptions(t);
        this.options.showLine || (c.borderWidth = 0),
            (c.segment = this.options.segment),
            this.updateElement(i, void 0, { animated: !r, options: c }, t),
            this.updateElements(n, a, l, t);
    }
    updateElements(t, e, i, n) {
        let o = n === 'reset',
            { iScale: r, vScale: a, _stacked: l, _dataset: c } = this._cachedMeta,
            { sharedOptions: h, includeOptions: u } = this._getSharedOptions(e, n),
            d = r.axis,
            f = a.axis,
            { spanGaps: m, segment: g } = this.options,
            p = ge(m) ? m : Number.POSITIVE_INFINITY,
            b = this.chart._animationsDisabled || o || n === 'none',
            y = e > 0 && this.getParsed(e - 1);
        for (let _ = e; _ < e + i; ++_) {
            let w = t[_],
                x = this.getParsed(_),
                M = b ? w : {},
                S = P(x[f]),
                v = (M[d] = r.getPixelForValue(x[d], _)),
                k = (M[f] =
                    o || S
                        ? a.getBasePixel()
                        : a.getPixelForValue(l ? this.applyStack(a, x, l) : x[f], _));
            (M.skip = isNaN(v) || isNaN(k) || S),
                (M.stop = _ > 0 && Math.abs(x[d] - y[d]) > p),
                g && ((M.parsed = x), (M.raw = c.data[_])),
                u && (M.options = h || this.resolveDataElementOptions(_, w.active ? 'active' : n)),
                b || this.updateElement(w, _, M, n),
                (y = x);
        }
    }
    getMaxOverflow() {
        let t = this._cachedMeta,
            e = t.dataset,
            i = (e.options && e.options.borderWidth) || 0,
            n = t.data || [];
        if (!n.length) return i;
        let o = n[0].size(this.resolveDataElementOptions(0)),
            r = n[n.length - 1].size(this.resolveDataElementOptions(n.length - 1));
        return Math.max(i, o, r) / 2;
    }
    draw() {
        let t = this._cachedMeta;
        t.dataset.updateControlPoints(this.chart.chartArea, t.iScale.axis), super.draw();
    }
};
$e.id = 'line';
$e.defaults = {
    datasetElementType: 'line',
    dataElementType: 'point',
    showLine: !0,
    spanGaps: !1,
};
$e.overrides = {
    scales: { _index_: { type: 'category' }, _value_: { type: 'linear' } },
};
var Ue = class extends pt {
    constructor(t, e) {
        super(t, e), (this.innerRadius = void 0), (this.outerRadius = void 0);
    }
    getLabelAndValue(t) {
        let e = this._cachedMeta,
            i = this.chart,
            n = i.data.labels || [],
            o = Ve(e._parsed[t].r, i.options.locale);
        return { label: n[t] || '', value: o };
    }
    parseObjectData(t, e, i, n) {
        return jn.bind(this)(t, e, i, n);
    }
    update(t) {
        let e = this._cachedMeta.data;
        this._updateRadius(), this.updateElements(e, 0, e.length, t);
    }
    getMinMax() {
        let t = this._cachedMeta,
            e = {
                min: Number.POSITIVE_INFINITY,
                max: Number.NEGATIVE_INFINITY,
            };
        return (
            t.data.forEach((i, n) => {
                let o = this.getParsed(n).r;
                !isNaN(o) &&
                    this.chart.getDataVisibility(n) &&
                    (o < e.min && (e.min = o), o > e.max && (e.max = o));
            }),
            e
        );
    }
    _updateRadius() {
        let t = this.chart,
            e = t.chartArea,
            i = t.options,
            n = Math.min(e.right - e.left, e.bottom - e.top),
            o = Math.max(n / 2, 0),
            r = Math.max(i.cutoutPercentage ? (o / 100) * i.cutoutPercentage : 1, 0),
            a = (o - r) / t.getVisibleDatasetCount();
        (this.outerRadius = o - a * this.index), (this.innerRadius = this.outerRadius - a);
    }
    updateElements(t, e, i, n) {
        let o = n === 'reset',
            r = this.chart,
            l = r.options.animation,
            c = this._cachedMeta.rScale,
            h = c.xCenter,
            u = c.yCenter,
            d = c.getIndexAngle(0) - 0.5 * Y,
            f = d,
            m,
            g = 360 / this.countVisibleElements();
        for (m = 0; m < e; ++m) f += this._computeAngle(m, n, g);
        for (m = e; m < e + i; m++) {
            let p = t[m],
                b = f,
                y = f + this._computeAngle(m, n, g),
                _ = r.getDataVisibility(m)
                    ? c.getDistanceFromCenterForValue(this.getParsed(m).r)
                    : 0;
            (f = y), o && (l.animateScale && (_ = 0), l.animateRotate && (b = y = d));
            let w = {
                x: h,
                y: u,
                innerRadius: 0,
                outerRadius: _,
                startAngle: b,
                endAngle: y,
                options: this.resolveDataElementOptions(m, p.active ? 'active' : n),
            };
            this.updateElement(p, m, w, n);
        }
    }
    countVisibleElements() {
        let t = this._cachedMeta,
            e = 0;
        return (
            t.data.forEach((i, n) => {
                !isNaN(this.getParsed(n).r) && this.chart.getDataVisibility(n) && e++;
            }),
            e
        );
    }
    _computeAngle(t, e, i) {
        return this.chart.getDataVisibility(t)
            ? _t(this.resolveDataElementOptions(t, e).angle || i)
            : 0;
    }
};
Ue.id = 'polarArea';
Ue.defaults = {
    dataElementType: 'arc',
    animation: { animateRotate: !0, animateScale: !0 },
    animations: {
        numbers: {
            type: 'number',
            properties: ['x', 'y', 'startAngle', 'endAngle', 'innerRadius', 'outerRadius'],
        },
    },
    indexAxis: 'r',
    startAngle: 0,
};
Ue.overrides = {
    aspectRatio: 1,
    plugins: {
        legend: {
            labels: {
                generateLabels(s) {
                    let t = s.data;
                    if (t.labels.length && t.datasets.length) {
                        let {
                            labels: { pointStyle: e },
                        } = s.legend.options;
                        return t.labels.map((i, n) => {
                            let r = s.getDatasetMeta(0).controller.getStyle(n);
                            return {
                                text: i,
                                fillStyle: r.backgroundColor,
                                strokeStyle: r.borderColor,
                                lineWidth: r.borderWidth,
                                pointStyle: e,
                                hidden: !s.getDataVisibility(n),
                                index: n,
                            };
                        });
                    }
                    return [];
                },
            },
            onClick(s, t, e) {
                e.chart.toggleDataVisibility(t.index), e.chart.update();
            },
        },
        tooltip: {
            callbacks: {
                title() {
                    return '';
                },
                label(s) {
                    return s.chart.data.labels[s.dataIndex] + ': ' + s.formattedValue;
                },
            },
        },
    },
    scales: {
        r: {
            type: 'radialLinear',
            angleLines: { display: !1 },
            beginAtZero: !0,
            grid: { circular: !0 },
            pointLabels: { display: !1 },
            startAngle: 0,
        },
    },
};
var Cs = class extends re {};
Cs.id = 'pie';
Cs.defaults = { cutout: 0, rotation: 0, circumference: 360, radius: '100%' };
var Ye = class extends pt {
    getLabelAndValue(t) {
        let e = this._cachedMeta.vScale,
            i = this.getParsed(t);
        return {
            label: e.getLabels()[t],
            value: '' + e.getLabelForValue(i[e.axis]),
        };
    }
    parseObjectData(t, e, i, n) {
        return jn.bind(this)(t, e, i, n);
    }
    update(t) {
        let e = this._cachedMeta,
            i = e.dataset,
            n = e.data || [],
            o = e.iScale.getLabels();
        if (((i.points = n), t !== 'resize')) {
            let r = this.resolveDatasetElementOptions(t);
            this.options.showLine || (r.borderWidth = 0);
            let a = { _loop: !0, _fullLoop: o.length === n.length, options: r };
            this.updateElement(i, void 0, a, t);
        }
        this.updateElements(n, 0, n.length, t);
    }
    updateElements(t, e, i, n) {
        let o = this._cachedMeta.rScale,
            r = n === 'reset';
        for (let a = e; a < e + i; a++) {
            let l = t[a],
                c = this.resolveDataElementOptions(a, l.active ? 'active' : n),
                h = o.getPointPositionForValue(a, this.getParsed(a).r),
                u = r ? o.xCenter : h.x,
                d = r ? o.yCenter : h.y,
                f = {
                    x: u,
                    y: d,
                    angle: h.angle,
                    skip: isNaN(u) || isNaN(d),
                    options: c,
                };
            this.updateElement(l, a, f, n);
        }
    }
};
Ye.id = 'radar';
Ye.defaults = {
    datasetElementType: 'line',
    dataElementType: 'point',
    indexAxis: 'r',
    showLine: !0,
    elements: { line: { fill: 'start' } },
};
Ye.overrides = { aspectRatio: 1, scales: { r: { type: 'radialLinear' } } };
var bt = class {
    constructor() {
        (this.x = void 0),
            (this.y = void 0),
            (this.active = !1),
            (this.options = void 0),
            (this.$animations = void 0);
    }
    tooltipPosition(t) {
        let { x: e, y: i } = this.getProps(['x', 'y'], t);
        return { x: e, y: i };
    }
    hasValue() {
        return ge(this.x) && ge(this.y);
    }
    getProps(t, e) {
        let i = this.$animations;
        if (!e || !i) return this;
        let n = {};
        return (
            t.forEach((o) => {
                n[o] = i[o] && i[o].active() ? i[o]._to : this[o];
            }),
            n
        );
    }
};
bt.defaults = {};
bt.defaultRoutes = void 0;
var $a = {
    values(s) {
        return j(s) ? s : '' + s;
    },
    numeric(s, t, e) {
        if (s === 0) return '0';
        let i = this.chart.options.locale,
            n,
            o = s;
        if (e.length > 1) {
            let c = Math.max(Math.abs(e[0].value), Math.abs(e[e.length - 1].value));
            (c < 1e-4 || c > 1e15) && (n = 'scientific'), (o = Kh(s, e));
        }
        let r = gt(Math.abs(o)),
            a = Math.max(Math.min(-1 * Math.floor(r), 20), 0),
            l = {
                notation: n,
                minimumFractionDigits: a,
                maximumFractionDigits: a,
            };
        return Object.assign(l, this.options.ticks.format), Ve(s, i, l);
    },
    logarithmic(s, t, e) {
        if (s === 0) return '0';
        let i = s / Math.pow(10, Math.floor(gt(s)));
        return i === 1 || i === 2 || i === 5 ? $a.numeric.call(this, s, t, e) : '';
    },
};
function Kh(s, t) {
    let e = t.length > 3 ? t[2].value - t[1].value : t[1].value - t[0].value;
    return Math.abs(e) >= 1 && s !== Math.floor(s) && (e = s - Math.floor(s)), e;
}
var Ui = { formatters: $a };
F.set('scale', {
    display: !0,
    offset: !1,
    reverse: !1,
    beginAtZero: !1,
    bounds: 'ticks',
    grace: 0,
    grid: {
        display: !0,
        lineWidth: 1,
        drawBorder: !0,
        drawOnChartArea: !0,
        drawTicks: !0,
        tickLength: 8,
        tickWidth: (s, t) => t.lineWidth,
        tickColor: (s, t) => t.color,
        offset: !1,
        borderDash: [],
        borderDashOffset: 0,
        borderWidth: 1,
    },
    title: { display: !1, text: '', padding: { top: 4, bottom: 4 } },
    ticks: {
        minRotation: 0,
        maxRotation: 50,
        mirror: !1,
        textStrokeWidth: 0,
        textStrokeColor: '',
        padding: 3,
        display: !0,
        autoSkip: !0,
        autoSkipPadding: 3,
        labelOffset: 0,
        callback: Ui.formatters.values,
        minor: {},
        major: {},
        align: 'center',
        crossAlign: 'near',
        showLabelBackdrop: !1,
        backdropColor: 'rgba(255, 255, 255, 0.75)',
        backdropPadding: 2,
    },
});
F.route('scale.ticks', 'color', '', 'color');
F.route('scale.grid', 'color', '', 'borderColor');
F.route('scale.grid', 'borderColor', '', 'borderColor');
F.route('scale.title', 'color', '', 'color');
F.describe('scale', {
    _fallback: !1,
    _scriptable: (s) =>
        !s.startsWith('before') && !s.startsWith('after') && s !== 'callback' && s !== 'parser',
    _indexable: (s) => s !== 'borderDash' && s !== 'tickBorderDash',
});
F.describe('scales', { _fallback: 'scale' });
F.describe('scale.ticks', {
    _scriptable: (s) => s !== 'backdropPadding' && s !== 'callback',
    _indexable: (s) => s !== 'backdropPadding',
});
function Jh(s, t) {
    let e = s.options.ticks,
        i = e.maxTicksLimit || Qh(s),
        n = e.major.enabled ? eu(t) : [],
        o = n.length,
        r = n[0],
        a = n[o - 1],
        l = [];
    if (o > i) return su(t, l, n, o / i), l;
    let c = tu(n, t, i);
    if (o > 0) {
        let h,
            u,
            d = o > 1 ? Math.round((a - r) / (o - 1)) : null;
        for (Ai(t, l, c, P(d) ? 0 : r - d, r), h = 0, u = o - 1; h < u; h++)
            Ai(t, l, c, n[h], n[h + 1]);
        return Ai(t, l, c, a, P(d) ? t.length : a + d), l;
    }
    return Ai(t, l, c), l;
}
function Qh(s) {
    let t = s.options.offset,
        e = s._tickSize(),
        i = s._length / e + (t ? 0 : 1),
        n = s._maxLength / e;
    return Math.floor(Math.min(i, n));
}
function tu(s, t, e) {
    let i = iu(s),
        n = t.length / e;
    if (!i) return Math.max(n, 1);
    let o = Sr(i);
    for (let r = 0, a = o.length - 1; r < a; r++) {
        let l = o[r];
        if (l > n) return l;
    }
    return Math.max(n, 1);
}
function eu(s) {
    let t = [],
        e,
        i;
    for (e = 0, i = s.length; e < i; e++) s[e].major && t.push(e);
    return t;
}
function su(s, t, e, i) {
    let n = 0,
        o = e[0],
        r;
    for (i = Math.ceil(i), r = 0; r < s.length; r++) r === o && (t.push(s[r]), n++, (o = e[n * i]));
}
function Ai(s, t, e, i, n) {
    let o = D(i, 0),
        r = Math.min(D(n, s.length), s.length),
        a = 0,
        l,
        c,
        h;
    for (e = Math.ceil(e), n && ((l = n - i), (e = l / Math.floor(l / e))), h = o; h < 0; )
        a++, (h = Math.round(o + a * e));
    for (c = Math.max(o, 0); c < r; c++)
        c === h && (t.push(s[c]), a++, (h = Math.round(o + a * e)));
}
function iu(s) {
    let t = s.length,
        e,
        i;
    if (t < 2) return !1;
    for (i = s[0], e = 1; e < t; ++e) if (s[e] - s[e - 1] !== i) return !1;
    return i;
}
var nu = (s) => (s === 'left' ? 'right' : s === 'right' ? 'left' : s),
    aa = (s, t, e) => (t === 'top' || t === 'left' ? s[t] + e : s[t] - e);
function la(s, t) {
    let e = [],
        i = s.length / t,
        n = s.length,
        o = 0;
    for (; o < n; o += i) e.push(s[Math.floor(o)]);
    return e;
}
function ou(s, t, e) {
    let i = s.ticks.length,
        n = Math.min(t, i - 1),
        o = s._startPixel,
        r = s._endPixel,
        a = 1e-6,
        l = s.getPixelForTick(n),
        c;
    if (
        !(
            e &&
            (i === 1
                ? (c = Math.max(l - o, r - l))
                : t === 0
                  ? (c = (s.getPixelForTick(1) - l) / 2)
                  : (c = (l - s.getPixelForTick(n - 1)) / 2),
            (l += n < t ? c : -c),
            l < o - a || l > r + a)
        )
    )
        return l;
}
function ru(s, t) {
    W(s, (e) => {
        let i = e.gc,
            n = i.length / 2,
            o;
        if (n > t) {
            for (o = 0; o < n; ++o) delete e.data[i[o]];
            i.splice(0, n);
        }
    });
}
function Ts(s) {
    return s.drawTicks ? s.tickLength : 0;
}
function ca(s, t) {
    if (!s.display) return 0;
    let e = et(s.font, t),
        i = at(s.padding);
    return (j(s.text) ? s.text.length : 1) * e.lineHeight + i.height;
}
function au(s, t) {
    return Bt(s, { scale: t, type: 'scale' });
}
function lu(s, t, e) {
    return Bt(s, { tick: e, index: t, type: 'tick' });
}
function cu(s, t, e) {
    let i = vi(s);
    return ((e && t !== 'right') || (!e && t === 'right')) && (i = nu(i)), i;
}
function hu(s, t, e, i) {
    let { top: n, left: o, bottom: r, right: a, chart: l } = s,
        { chartArea: c, scales: h } = l,
        u = 0,
        d,
        f,
        m,
        g = r - n,
        p = a - o;
    if (s.isHorizontal()) {
        if (((f = rt(i, o, a)), A(e))) {
            let b = Object.keys(e)[0],
                y = e[b];
            m = h[b].getPixelForValue(y) + g - t;
        } else e === 'center' ? (m = (c.bottom + c.top) / 2 + g - t) : (m = aa(s, e, t));
        d = a - o;
    } else {
        if (A(e)) {
            let b = Object.keys(e)[0],
                y = e[b];
            f = h[b].getPixelForValue(y) - p + t;
        } else e === 'center' ? (f = (c.left + c.right) / 2 - p + t) : (f = aa(s, e, t));
        (m = rt(i, r, n)), (u = e === 'left' ? -Z : Z);
    }
    return { titleX: f, titleY: m, maxWidth: d, rotation: u };
}
var Ut = class extends bt {
        constructor(t) {
            super(),
                (this.id = t.id),
                (this.type = t.type),
                (this.options = void 0),
                (this.ctx = t.ctx),
                (this.chart = t.chart),
                (this.top = void 0),
                (this.bottom = void 0),
                (this.left = void 0),
                (this.right = void 0),
                (this.width = void 0),
                (this.height = void 0),
                (this._margins = { left: 0, right: 0, top: 0, bottom: 0 }),
                (this.maxWidth = void 0),
                (this.maxHeight = void 0),
                (this.paddingTop = void 0),
                (this.paddingBottom = void 0),
                (this.paddingLeft = void 0),
                (this.paddingRight = void 0),
                (this.axis = void 0),
                (this.labelRotation = void 0),
                (this.min = void 0),
                (this.max = void 0),
                (this._range = void 0),
                (this.ticks = []),
                (this._gridLineItems = null),
                (this._labelItems = null),
                (this._labelSizes = null),
                (this._length = 0),
                (this._maxLength = 0),
                (this._longestTextCache = {}),
                (this._startPixel = void 0),
                (this._endPixel = void 0),
                (this._reversePixels = !1),
                (this._userMax = void 0),
                (this._userMin = void 0),
                (this._suggestedMax = void 0),
                (this._suggestedMin = void 0),
                (this._ticksLength = 0),
                (this._borderValue = 0),
                (this._cache = {}),
                (this._dataLimitsCached = !1),
                (this.$context = void 0);
        }
        init(t) {
            (this.options = t.setContext(this.getContext())),
                (this.axis = t.axis),
                (this._userMin = this.parse(t.min)),
                (this._userMax = this.parse(t.max)),
                (this._suggestedMin = this.parse(t.suggestedMin)),
                (this._suggestedMax = this.parse(t.suggestedMax));
        }
        parse(t, e) {
            return t;
        }
        getUserBounds() {
            let { _userMin: t, _userMax: e, _suggestedMin: i, _suggestedMax: n } = this;
            return (
                (t = mt(t, Number.POSITIVE_INFINITY)),
                (e = mt(e, Number.NEGATIVE_INFINITY)),
                (i = mt(i, Number.POSITIVE_INFINITY)),
                (n = mt(n, Number.NEGATIVE_INFINITY)),
                {
                    min: mt(t, i),
                    max: mt(e, n),
                    minDefined: K(t),
                    maxDefined: K(e),
                }
            );
        }
        getMinMax(t) {
            let { min: e, max: i, minDefined: n, maxDefined: o } = this.getUserBounds(),
                r;
            if (n && o) return { min: e, max: i };
            let a = this.getMatchingVisibleMetas();
            for (let l = 0, c = a.length; l < c; ++l)
                (r = a[l].controller.getMinMax(this, t)),
                    n || (e = Math.min(e, r.min)),
                    o || (i = Math.max(i, r.max));
            return (
                (e = o && e > i ? i : e),
                (i = n && e > i ? e : i),
                { min: mt(e, mt(i, e)), max: mt(i, mt(e, i)) }
            );
        }
        getPadding() {
            return {
                left: this.paddingLeft || 0,
                top: this.paddingTop || 0,
                right: this.paddingRight || 0,
                bottom: this.paddingBottom || 0,
            };
        }
        getTicks() {
            return this.ticks;
        }
        getLabels() {
            let t = this.chart.data;
            return (
                this.options.labels ||
                (this.isHorizontal() ? t.xLabels : t.yLabels) ||
                t.labels ||
                []
            );
        }
        beforeLayout() {
            (this._cache = {}), (this._dataLimitsCached = !1);
        }
        beforeUpdate() {
            $(this.options.beforeUpdate, [this]);
        }
        update(t, e, i) {
            let { beginAtZero: n, grace: o, ticks: r } = this.options,
                a = r.sampleSize;
            this.beforeUpdate(),
                (this.maxWidth = t),
                (this.maxHeight = e),
                (this._margins = i = Object.assign({ left: 0, right: 0, top: 0, bottom: 0 }, i)),
                (this.ticks = null),
                (this._labelSizes = null),
                (this._gridLineItems = null),
                (this._labelItems = null),
                this.beforeSetDimensions(),
                this.setDimensions(),
                this.afterSetDimensions(),
                (this._maxLength = this.isHorizontal()
                    ? this.width + i.left + i.right
                    : this.height + i.top + i.bottom),
                this._dataLimitsCached ||
                    (this.beforeDataLimits(),
                    this.determineDataLimits(),
                    this.afterDataLimits(),
                    (this._range = Vr(this, o, n)),
                    (this._dataLimitsCached = !0)),
                this.beforeBuildTicks(),
                (this.ticks = this.buildTicks() || []),
                this.afterBuildTicks();
            let l = a < this.ticks.length;
            this._convertTicksToLabels(l ? la(this.ticks, a) : this.ticks),
                this.configure(),
                this.beforeCalculateLabelRotation(),
                this.calculateLabelRotation(),
                this.afterCalculateLabelRotation(),
                r.display &&
                    (r.autoSkip || r.source === 'auto') &&
                    ((this.ticks = Jh(this, this.ticks)),
                    (this._labelSizes = null),
                    this.afterAutoSkip()),
                l && this._convertTicksToLabels(this.ticks),
                this.beforeFit(),
                this.fit(),
                this.afterFit(),
                this.afterUpdate();
        }
        configure() {
            let t = this.options.reverse,
                e,
                i;
            this.isHorizontal()
                ? ((e = this.left), (i = this.right))
                : ((e = this.top), (i = this.bottom), (t = !t)),
                (this._startPixel = e),
                (this._endPixel = i),
                (this._reversePixels = t),
                (this._length = i - e),
                (this._alignToPixels = this.options.alignToPixels);
        }
        afterUpdate() {
            $(this.options.afterUpdate, [this]);
        }
        beforeSetDimensions() {
            $(this.options.beforeSetDimensions, [this]);
        }
        setDimensions() {
            this.isHorizontal()
                ? ((this.width = this.maxWidth), (this.left = 0), (this.right = this.width))
                : ((this.height = this.maxHeight), (this.top = 0), (this.bottom = this.height)),
                (this.paddingLeft = 0),
                (this.paddingTop = 0),
                (this.paddingRight = 0),
                (this.paddingBottom = 0);
        }
        afterSetDimensions() {
            $(this.options.afterSetDimensions, [this]);
        }
        _callHooks(t) {
            this.chart.notifyPlugins(t, this.getContext()), $(this.options[t], [this]);
        }
        beforeDataLimits() {
            this._callHooks('beforeDataLimits');
        }
        determineDataLimits() {}
        afterDataLimits() {
            this._callHooks('afterDataLimits');
        }
        beforeBuildTicks() {
            this._callHooks('beforeBuildTicks');
        }
        buildTicks() {
            return [];
        }
        afterBuildTicks() {
            this._callHooks('afterBuildTicks');
        }
        beforeTickToLabelConversion() {
            $(this.options.beforeTickToLabelConversion, [this]);
        }
        generateTickLabels(t) {
            let e = this.options.ticks,
                i,
                n,
                o;
            for (i = 0, n = t.length; i < n; i++)
                (o = t[i]), (o.label = $(e.callback, [o.value, i, t], this));
        }
        afterTickToLabelConversion() {
            $(this.options.afterTickToLabelConversion, [this]);
        }
        beforeCalculateLabelRotation() {
            $(this.options.beforeCalculateLabelRotation, [this]);
        }
        calculateLabelRotation() {
            let t = this.options,
                e = t.ticks,
                i = this.ticks.length,
                n = e.minRotation || 0,
                o = e.maxRotation,
                r = n,
                a,
                l,
                c;
            if (!this._isVisible() || !e.display || n >= o || i <= 1 || !this.isHorizontal()) {
                this.labelRotation = n;
                return;
            }
            let h = this._getLabelSizes(),
                u = h.widest.width,
                d = h.highest.height,
                f = st(this.chart.width - u, 0, this.maxWidth);
            (a = t.offset ? this.maxWidth / i : f / (i - 1)),
                u + 6 > a &&
                    ((a = f / (i - (t.offset ? 0.5 : 1))),
                    (l =
                        this.maxHeight -
                        Ts(t.grid) -
                        e.padding -
                        ca(t.title, this.chart.options.font)),
                    (c = Math.sqrt(u * u + d * d)),
                    (r = Mi(
                        Math.min(
                            Math.asin(st((h.highest.height + 6) / a, -1, 1)),
                            Math.asin(st(l / c, -1, 1)) - Math.asin(st(d / c, -1, 1)),
                        ),
                    )),
                    (r = Math.max(n, Math.min(o, r)))),
                (this.labelRotation = r);
        }
        afterCalculateLabelRotation() {
            $(this.options.afterCalculateLabelRotation, [this]);
        }
        afterAutoSkip() {}
        beforeFit() {
            $(this.options.beforeFit, [this]);
        }
        fit() {
            let t = { width: 0, height: 0 },
                {
                    chart: e,
                    options: { ticks: i, title: n, grid: o },
                } = this,
                r = this._isVisible(),
                a = this.isHorizontal();
            if (r) {
                let l = ca(n, e.options.font);
                if (
                    (a
                        ? ((t.width = this.maxWidth), (t.height = Ts(o) + l))
                        : ((t.height = this.maxHeight), (t.width = Ts(o) + l)),
                    i.display && this.ticks.length)
                ) {
                    let { first: c, last: h, widest: u, highest: d } = this._getLabelSizes(),
                        f = i.padding * 2,
                        m = _t(this.labelRotation),
                        g = Math.cos(m),
                        p = Math.sin(m);
                    if (a) {
                        let b = i.mirror ? 0 : p * u.width + g * d.height;
                        t.height = Math.min(this.maxHeight, t.height + b + f);
                    } else {
                        let b = i.mirror ? 0 : g * u.width + p * d.height;
                        t.width = Math.min(this.maxWidth, t.width + b + f);
                    }
                    this._calculatePadding(c, h, p, g);
                }
            }
            this._handleMargins(),
                a
                    ? ((this.width = this._length =
                          e.width - this._margins.left - this._margins.right),
                      (this.height = t.height))
                    : ((this.width = t.width),
                      (this.height = this._length =
                          e.height - this._margins.top - this._margins.bottom));
        }
        _calculatePadding(t, e, i, n) {
            let {
                    ticks: { align: o, padding: r },
                    position: a,
                } = this.options,
                l = this.labelRotation !== 0,
                c = a !== 'top' && this.axis === 'x';
            if (this.isHorizontal()) {
                let h = this.getPixelForTick(0) - this.left,
                    u = this.right - this.getPixelForTick(this.ticks.length - 1),
                    d = 0,
                    f = 0;
                l
                    ? c
                        ? ((d = n * t.width), (f = i * e.height))
                        : ((d = i * t.height), (f = n * e.width))
                    : o === 'start'
                      ? (f = e.width)
                      : o === 'end'
                        ? (d = t.width)
                        : o !== 'inner' && ((d = t.width / 2), (f = e.width / 2)),
                    (this.paddingLeft = Math.max(((d - h + r) * this.width) / (this.width - h), 0)),
                    (this.paddingRight = Math.max(
                        ((f - u + r) * this.width) / (this.width - u),
                        0,
                    ));
            } else {
                let h = e.height / 2,
                    u = t.height / 2;
                o === 'start'
                    ? ((h = 0), (u = t.height))
                    : o === 'end' && ((h = e.height), (u = 0)),
                    (this.paddingTop = h + r),
                    (this.paddingBottom = u + r);
            }
        }
        _handleMargins() {
            this._margins &&
                ((this._margins.left = Math.max(this.paddingLeft, this._margins.left)),
                (this._margins.top = Math.max(this.paddingTop, this._margins.top)),
                (this._margins.right = Math.max(this.paddingRight, this._margins.right)),
                (this._margins.bottom = Math.max(this.paddingBottom, this._margins.bottom)));
        }
        afterFit() {
            $(this.options.afterFit, [this]);
        }
        isHorizontal() {
            let { axis: t, position: e } = this.options;
            return e === 'top' || e === 'bottom' || t === 'x';
        }
        isFullSize() {
            return this.options.fullSize;
        }
        _convertTicksToLabels(t) {
            this.beforeTickToLabelConversion(), this.generateTickLabels(t);
            let e, i;
            for (e = 0, i = t.length; e < i; e++) P(t[e].label) && (t.splice(e, 1), i--, e--);
            this.afterTickToLabelConversion();
        }
        _getLabelSizes() {
            let t = this._labelSizes;
            if (!t) {
                let e = this.options.ticks.sampleSize,
                    i = this.ticks;
                e < i.length && (i = la(i, e)),
                    (this._labelSizes = t = this._computeLabelSizes(i, i.length));
            }
            return t;
        }
        _computeLabelSizes(t, e) {
            let { ctx: i, _longestTextCache: n } = this,
                o = [],
                r = [],
                a = 0,
                l = 0,
                c,
                h,
                u,
                d,
                f,
                m,
                g,
                p,
                b,
                y,
                _;
            for (c = 0; c < e; ++c) {
                if (
                    ((d = t[c].label),
                    (f = this._resolveTickFontOptions(c)),
                    (i.font = m = f.string),
                    (g = n[m] = n[m] || { data: {}, gc: [] }),
                    (p = f.lineHeight),
                    (b = y = 0),
                    !P(d) && !j(d))
                )
                    (b = ys(i, g.data, g.gc, b, d)), (y = p);
                else if (j(d))
                    for (h = 0, u = d.length; h < u; ++h)
                        (_ = d[h]), !P(_) && !j(_) && ((b = ys(i, g.data, g.gc, b, _)), (y += p));
                o.push(b), r.push(y), (a = Math.max(b, a)), (l = Math.max(y, l));
            }
            ru(n, e);
            let w = o.indexOf(a),
                x = r.indexOf(l),
                M = (S) => ({ width: o[S] || 0, height: r[S] || 0 });
            return {
                first: M(0),
                last: M(e - 1),
                widest: M(w),
                highest: M(x),
                widths: o,
                heights: r,
            };
        }
        getLabelForValue(t) {
            return t;
        }
        getPixelForValue(t, e) {
            return NaN;
        }
        getValueForPixel(t) {}
        getPixelForTick(t) {
            let e = this.ticks;
            return t < 0 || t > e.length - 1 ? null : this.getPixelForValue(e[t].value);
        }
        getPixelForDecimal(t) {
            this._reversePixels && (t = 1 - t);
            let e = this._startPixel + t * this._length;
            return Tr(this._alignToPixels ? te(this.chart, e, 0) : e);
        }
        getDecimalForPixel(t) {
            let e = (t - this._startPixel) / this._length;
            return this._reversePixels ? 1 - e : e;
        }
        getBasePixel() {
            return this.getPixelForValue(this.getBaseValue());
        }
        getBaseValue() {
            let { min: t, max: e } = this;
            return t < 0 && e < 0 ? e : t > 0 && e > 0 ? t : 0;
        }
        getContext(t) {
            let e = this.ticks || [];
            if (t >= 0 && t < e.length) {
                let i = e[t];
                return i.$context || (i.$context = lu(this.getContext(), t, i));
            }
            return this.$context || (this.$context = au(this.chart.getContext(), this));
        }
        _tickSize() {
            let t = this.options.ticks,
                e = _t(this.labelRotation),
                i = Math.abs(Math.cos(e)),
                n = Math.abs(Math.sin(e)),
                o = this._getLabelSizes(),
                r = t.autoSkipPadding || 0,
                a = o ? o.widest.width + r : 0,
                l = o ? o.highest.height + r : 0;
            return this.isHorizontal()
                ? l * i > a * n
                    ? a / i
                    : l / n
                : l * n < a * i
                  ? l / i
                  : a / n;
        }
        _isVisible() {
            let t = this.options.display;
            return t !== 'auto' ? !!t : this.getMatchingVisibleMetas().length > 0;
        }
        _computeGridLineItems(t) {
            let e = this.axis,
                i = this.chart,
                n = this.options,
                { grid: o, position: r } = n,
                a = o.offset,
                l = this.isHorizontal(),
                h = this.ticks.length + (a ? 1 : 0),
                u = Ts(o),
                d = [],
                f = o.setContext(this.getContext()),
                m = f.drawBorder ? f.borderWidth : 0,
                g = m / 2,
                p = function (E) {
                    return te(i, E, m);
                },
                b,
                y,
                _,
                w,
                x,
                M,
                S,
                v,
                k,
                R,
                z,
                L;
            if (r === 'top')
                (b = p(this.bottom)),
                    (M = this.bottom - u),
                    (v = b - g),
                    (R = p(t.top) + g),
                    (L = t.bottom);
            else if (r === 'bottom')
                (b = p(this.top)),
                    (R = t.top),
                    (L = p(t.bottom) - g),
                    (M = b + g),
                    (v = this.top + u);
            else if (r === 'left')
                (b = p(this.right)),
                    (x = this.right - u),
                    (S = b - g),
                    (k = p(t.left) + g),
                    (z = t.right);
            else if (r === 'right')
                (b = p(this.left)),
                    (k = t.left),
                    (z = p(t.right) - g),
                    (x = b + g),
                    (S = this.left + u);
            else if (e === 'x') {
                if (r === 'center') b = p((t.top + t.bottom) / 2 + 0.5);
                else if (A(r)) {
                    let E = Object.keys(r)[0],
                        tt = r[E];
                    b = p(this.chart.scales[E].getPixelForValue(tt));
                }
                (R = t.top), (L = t.bottom), (M = b + g), (v = M + u);
            } else if (e === 'y') {
                if (r === 'center') b = p((t.left + t.right) / 2);
                else if (A(r)) {
                    let E = Object.keys(r)[0],
                        tt = r[E];
                    b = p(this.chart.scales[E].getPixelForValue(tt));
                }
                (x = b - g), (S = x - u), (k = t.left), (z = t.right);
            }
            let Q = D(n.ticks.maxTicksLimit, h),
                ct = Math.max(1, Math.ceil(h / Q));
            for (y = 0; y < h; y += ct) {
                let E = o.setContext(this.getContext(y)),
                    tt = E.lineWidth,
                    J = E.color,
                    de = E.borderDash || [],
                    un = E.borderDashOffset,
                    ke = E.tickWidth,
                    di = E.tickColor,
                    Oe = E.tickBorderDash || [],
                    ms = E.tickBorderDashOffset;
                (_ = ou(this, y, a)),
                    _ !== void 0 &&
                        ((w = te(i, _, tt)),
                        l ? (x = S = k = z = w) : (M = v = R = L = w),
                        d.push({
                            tx1: x,
                            ty1: M,
                            tx2: S,
                            ty2: v,
                            x1: k,
                            y1: R,
                            x2: z,
                            y2: L,
                            width: tt,
                            color: J,
                            borderDash: de,
                            borderDashOffset: un,
                            tickWidth: ke,
                            tickColor: di,
                            tickBorderDash: Oe,
                            tickBorderDashOffset: ms,
                        }));
            }
            return (this._ticksLength = h), (this._borderValue = b), d;
        }
        _computeLabelItems(t) {
            let e = this.axis,
                i = this.options,
                { position: n, ticks: o } = i,
                r = this.isHorizontal(),
                a = this.ticks,
                { align: l, crossAlign: c, padding: h, mirror: u } = o,
                d = Ts(i.grid),
                f = d + h,
                m = u ? -h : f,
                g = -_t(this.labelRotation),
                p = [],
                b,
                y,
                _,
                w,
                x,
                M,
                S,
                v,
                k,
                R,
                z,
                L,
                Q = 'middle';
            if (n === 'top') (M = this.bottom - m), (S = this._getXAxisLabelAlignment());
            else if (n === 'bottom') (M = this.top + m), (S = this._getXAxisLabelAlignment());
            else if (n === 'left') {
                let E = this._getYAxisLabelAlignment(d);
                (S = E.textAlign), (x = E.x);
            } else if (n === 'right') {
                let E = this._getYAxisLabelAlignment(d);
                (S = E.textAlign), (x = E.x);
            } else if (e === 'x') {
                if (n === 'center') M = (t.top + t.bottom) / 2 + f;
                else if (A(n)) {
                    let E = Object.keys(n)[0],
                        tt = n[E];
                    M = this.chart.scales[E].getPixelForValue(tt) + f;
                }
                S = this._getXAxisLabelAlignment();
            } else if (e === 'y') {
                if (n === 'center') x = (t.left + t.right) / 2 - f;
                else if (A(n)) {
                    let E = Object.keys(n)[0],
                        tt = n[E];
                    x = this.chart.scales[E].getPixelForValue(tt);
                }
                S = this._getYAxisLabelAlignment(d).textAlign;
            }
            e === 'y' && (l === 'start' ? (Q = 'top') : l === 'end' && (Q = 'bottom'));
            let ct = this._getLabelSizes();
            for (b = 0, y = a.length; b < y; ++b) {
                (_ = a[b]), (w = _.label);
                let E = o.setContext(this.getContext(b));
                (v = this.getPixelForTick(b) + o.labelOffset),
                    (k = this._resolveTickFontOptions(b)),
                    (R = k.lineHeight),
                    (z = j(w) ? w.length : 1);
                let tt = z / 2,
                    J = E.color,
                    de = E.textStrokeColor,
                    un = E.textStrokeWidth,
                    ke = S;
                r
                    ? ((x = v),
                      S === 'inner' &&
                          (b === y - 1
                              ? (ke = this.options.reverse ? 'left' : 'right')
                              : b === 0
                                ? (ke = this.options.reverse ? 'right' : 'left')
                                : (ke = 'center')),
                      n === 'top'
                          ? c === 'near' || g !== 0
                              ? (L = -z * R + R / 2)
                              : c === 'center'
                                ? (L = -ct.highest.height / 2 - tt * R + R)
                                : (L = -ct.highest.height + R / 2)
                          : c === 'near' || g !== 0
                            ? (L = R / 2)
                            : c === 'center'
                              ? (L = ct.highest.height / 2 - tt * R)
                              : (L = ct.highest.height - z * R),
                      u && (L *= -1))
                    : ((M = v), (L = ((1 - z) * R) / 2));
                let di;
                if (E.showLabelBackdrop) {
                    let Oe = at(E.backdropPadding),
                        ms = ct.heights[b],
                        dn = ct.widths[b],
                        fn = M + L - Oe.top,
                        mn = x - Oe.left;
                    switch (Q) {
                        case 'middle':
                            fn -= ms / 2;
                            break;
                        case 'bottom':
                            fn -= ms;
                            break;
                    }
                    switch (S) {
                        case 'center':
                            mn -= dn / 2;
                            break;
                        case 'right':
                            mn -= dn;
                            break;
                    }
                    di = {
                        left: mn,
                        top: fn,
                        width: dn + Oe.width,
                        height: ms + Oe.height,
                        color: E.backdropColor,
                    };
                }
                p.push({
                    rotation: g,
                    label: w,
                    font: k,
                    color: J,
                    strokeColor: de,
                    strokeWidth: un,
                    textOffset: L,
                    textAlign: ke,
                    textBaseline: Q,
                    translation: [x, M],
                    backdrop: di,
                });
            }
            return p;
        }
        _getXAxisLabelAlignment() {
            let { position: t, ticks: e } = this.options;
            if (-_t(this.labelRotation)) return t === 'top' ? 'left' : 'right';
            let n = 'center';
            return (
                e.align === 'start'
                    ? (n = 'left')
                    : e.align === 'end'
                      ? (n = 'right')
                      : e.align === 'inner' && (n = 'inner'),
                n
            );
        }
        _getYAxisLabelAlignment(t) {
            let {
                    position: e,
                    ticks: { crossAlign: i, mirror: n, padding: o },
                } = this.options,
                r = this._getLabelSizes(),
                a = t + o,
                l = r.widest.width,
                c,
                h;
            return (
                e === 'left'
                    ? n
                        ? ((h = this.right + o),
                          i === 'near'
                              ? (c = 'left')
                              : i === 'center'
                                ? ((c = 'center'), (h += l / 2))
                                : ((c = 'right'), (h += l)))
                        : ((h = this.right - a),
                          i === 'near'
                              ? (c = 'right')
                              : i === 'center'
                                ? ((c = 'center'), (h -= l / 2))
                                : ((c = 'left'), (h = this.left)))
                    : e === 'right'
                      ? n
                          ? ((h = this.left + o),
                            i === 'near'
                                ? (c = 'right')
                                : i === 'center'
                                  ? ((c = 'center'), (h -= l / 2))
                                  : ((c = 'left'), (h -= l)))
                          : ((h = this.left + a),
                            i === 'near'
                                ? (c = 'left')
                                : i === 'center'
                                  ? ((c = 'center'), (h += l / 2))
                                  : ((c = 'right'), (h = this.right)))
                      : (c = 'right'),
                { textAlign: c, x: h }
            );
        }
        _computeLabelArea() {
            if (this.options.ticks.mirror) return;
            let t = this.chart,
                e = this.options.position;
            if (e === 'left' || e === 'right')
                return {
                    top: 0,
                    left: this.left,
                    bottom: t.height,
                    right: this.right,
                };
            if (e === 'top' || e === 'bottom')
                return {
                    top: this.top,
                    left: 0,
                    bottom: this.bottom,
                    right: t.width,
                };
        }
        drawBackground() {
            let {
                ctx: t,
                options: { backgroundColor: e },
                left: i,
                top: n,
                width: o,
                height: r,
            } = this;
            e && (t.save(), (t.fillStyle = e), t.fillRect(i, n, o, r), t.restore());
        }
        getLineWidthForValue(t) {
            let e = this.options.grid;
            if (!this._isVisible() || !e.display) return 0;
            let n = this.ticks.findIndex((o) => o.value === t);
            return n >= 0 ? e.setContext(this.getContext(n)).lineWidth : 0;
        }
        drawGrid(t) {
            let e = this.options.grid,
                i = this.ctx,
                n = this._gridLineItems || (this._gridLineItems = this._computeGridLineItems(t)),
                o,
                r,
                a = (l, c, h) => {
                    !h.width ||
                        !h.color ||
                        (i.save(),
                        (i.lineWidth = h.width),
                        (i.strokeStyle = h.color),
                        i.setLineDash(h.borderDash || []),
                        (i.lineDashOffset = h.borderDashOffset),
                        i.beginPath(),
                        i.moveTo(l.x, l.y),
                        i.lineTo(c.x, c.y),
                        i.stroke(),
                        i.restore());
                };
            if (e.display)
                for (o = 0, r = n.length; o < r; ++o) {
                    let l = n[o];
                    e.drawOnChartArea && a({ x: l.x1, y: l.y1 }, { x: l.x2, y: l.y2 }, l),
                        e.drawTicks &&
                            a(
                                { x: l.tx1, y: l.ty1 },
                                { x: l.tx2, y: l.ty2 },
                                {
                                    color: l.tickColor,
                                    width: l.tickWidth,
                                    borderDash: l.tickBorderDash,
                                    borderDashOffset: l.tickBorderDashOffset,
                                },
                            );
                }
        }
        drawBorder() {
            let {
                    chart: t,
                    ctx: e,
                    options: { grid: i },
                } = this,
                n = i.setContext(this.getContext()),
                o = i.drawBorder ? n.borderWidth : 0;
            if (!o) return;
            let r = i.setContext(this.getContext(0)).lineWidth,
                a = this._borderValue,
                l,
                c,
                h,
                u;
            this.isHorizontal()
                ? ((l = te(t, this.left, o) - o / 2),
                  (c = te(t, this.right, r) + r / 2),
                  (h = u = a))
                : ((h = te(t, this.top, o) - o / 2),
                  (u = te(t, this.bottom, r) + r / 2),
                  (l = c = a)),
                e.save(),
                (e.lineWidth = n.borderWidth),
                (e.strokeStyle = n.borderColor),
                e.beginPath(),
                e.moveTo(l, h),
                e.lineTo(c, u),
                e.stroke(),
                e.restore();
        }
        drawLabels(t) {
            if (!this.options.ticks.display) return;
            let i = this.ctx,
                n = this._computeLabelArea();
            n && ws(i, n);
            let o = this._labelItems || (this._labelItems = this._computeLabelItems(t)),
                r,
                a;
            for (r = 0, a = o.length; r < a; ++r) {
                let l = o[r],
                    c = l.font,
                    h = l.label;
                l.backdrop &&
                    ((i.fillStyle = l.backdrop.color),
                    i.fillRect(
                        l.backdrop.left,
                        l.backdrop.top,
                        l.backdrop.width,
                        l.backdrop.height,
                    ));
                let u = l.textOffset;
                ee(i, h, 0, u, c, l);
            }
            n && Ss(i);
        }
        drawTitle() {
            let {
                ctx: t,
                options: { position: e, title: i, reverse: n },
            } = this;
            if (!i.display) return;
            let o = et(i.font),
                r = at(i.padding),
                a = i.align,
                l = o.lineHeight / 2;
            e === 'bottom' || e === 'center' || A(e)
                ? ((l += r.bottom), j(i.text) && (l += o.lineHeight * (i.text.length - 1)))
                : (l += r.top);
            let { titleX: c, titleY: h, maxWidth: u, rotation: d } = hu(this, l, e, a);
            ee(t, i.text, 0, 0, o, {
                color: i.color,
                maxWidth: u,
                rotation: d,
                textAlign: cu(a, e, n),
                textBaseline: 'middle',
                translation: [c, h],
            });
        }
        draw(t) {
            this._isVisible() &&
                (this.drawBackground(),
                this.drawGrid(t),
                this.drawBorder(),
                this.drawTitle(),
                this.drawLabels(t));
        }
        _layers() {
            let t = this.options,
                e = (t.ticks && t.ticks.z) || 0,
                i = D(t.grid && t.grid.z, -1);
            return !this._isVisible() || this.draw !== Ut.prototype.draw
                ? [
                      {
                          z: e,
                          draw: (n) => {
                              this.draw(n);
                          },
                      },
                  ]
                : [
                      {
                          z: i,
                          draw: (n) => {
                              this.drawBackground(), this.drawGrid(n), this.drawTitle();
                          },
                      },
                      {
                          z: i + 1,
                          draw: () => {
                              this.drawBorder();
                          },
                      },
                      {
                          z: e,
                          draw: (n) => {
                              this.drawLabels(n);
                          },
                      },
                  ];
        }
        getMatchingVisibleMetas(t) {
            let e = this.chart.getSortedVisibleDatasetMetas(),
                i = this.axis + 'AxisID',
                n = [],
                o,
                r;
            for (o = 0, r = e.length; o < r; ++o) {
                let a = e[o];
                a[i] === this.id && (!t || a.type === t) && n.push(a);
            }
            return n;
        }
        _resolveTickFontOptions(t) {
            let e = this.options.ticks.setContext(this.getContext(t));
            return et(e.font);
        }
        _maxDigits() {
            let t = this._resolveTickFontOptions(0).lineHeight;
            return (this.isHorizontal() ? this.width : this.height) / t;
        }
    },
    He = class {
        constructor(t, e, i) {
            (this.type = t),
                (this.scope = e),
                (this.override = i),
                (this.items = Object.create(null));
        }
        isForType(t) {
            return Object.prototype.isPrototypeOf.call(this.type.prototype, t.prototype);
        }
        register(t) {
            let e = Object.getPrototypeOf(t),
                i;
            fu(e) && (i = this.register(e));
            let n = this.items,
                o = t.id,
                r = this.scope + '.' + o;
            if (!o) throw new Error('class does not have id: ' + t);
            return (
                o in n || ((n[o] = t), uu(t, r, i), this.override && F.override(t.id, t.overrides)),
                r
            );
        }
        get(t) {
            return this.items[t];
        }
        unregister(t) {
            let e = this.items,
                i = t.id,
                n = this.scope;
            i in e && delete e[i],
                n && i in F[n] && (delete F[n][i], this.override && delete Qt[i]);
        }
    };
function uu(s, t, e) {
    let i = Ce(Object.create(null), [e ? F.get(e) : {}, F.get(t), s.defaults]);
    F.set(t, i),
        s.defaultRoutes && du(t, s.defaultRoutes),
        s.descriptors && F.describe(t, s.descriptors);
}
function du(s, t) {
    Object.keys(t).forEach((e) => {
        let i = e.split('.'),
            n = i.pop(),
            o = [s].concat(i).join('.'),
            r = t[e].split('.'),
            a = r.pop(),
            l = r.join('.');
        F.route(o, n, l, a);
    });
}
function fu(s) {
    return 'id' in s && 'defaults' in s;
}
var lo = class {
        constructor() {
            (this.controllers = new He(pt, 'datasets', !0)),
                (this.elements = new He(bt, 'elements')),
                (this.plugins = new He(Object, 'plugins')),
                (this.scales = new He(Ut, 'scales')),
                (this._typedRegistries = [this.controllers, this.scales, this.elements]);
        }
        add(...t) {
            this._each('register', t);
        }
        remove(...t) {
            this._each('unregister', t);
        }
        addControllers(...t) {
            this._each('register', t, this.controllers);
        }
        addElements(...t) {
            this._each('register', t, this.elements);
        }
        addPlugins(...t) {
            this._each('register', t, this.plugins);
        }
        addScales(...t) {
            this._each('register', t, this.scales);
        }
        getController(t) {
            return this._get(t, this.controllers, 'controller');
        }
        getElement(t) {
            return this._get(t, this.elements, 'element');
        }
        getPlugin(t) {
            return this._get(t, this.plugins, 'plugin');
        }
        getScale(t) {
            return this._get(t, this.scales, 'scale');
        }
        removeControllers(...t) {
            this._each('unregister', t, this.controllers);
        }
        removeElements(...t) {
            this._each('unregister', t, this.elements);
        }
        removePlugins(...t) {
            this._each('unregister', t, this.plugins);
        }
        removeScales(...t) {
            this._each('unregister', t, this.scales);
        }
        _each(t, e, i) {
            [...e].forEach((n) => {
                let o = i || this._getRegistryForType(n);
                i || o.isForType(n) || (o === this.plugins && n.id)
                    ? this._exec(t, o, n)
                    : W(n, (r) => {
                          let a = i || this._getRegistryForType(r);
                          this._exec(t, a, r);
                      });
            });
        }
        _exec(t, e, i) {
            let n = Si(t);
            $(i['before' + n], [], i), e[t](i), $(i['after' + n], [], i);
        }
        _getRegistryForType(t) {
            for (let e = 0; e < this._typedRegistries.length; e++) {
                let i = this._typedRegistries[e];
                if (i.isForType(t)) return i;
            }
            return this.plugins;
        }
        _get(t, e, i) {
            let n = e.get(t);
            if (n === void 0) throw new Error('"' + t + '" is not a registered ' + i + '.');
            return n;
        }
    },
    Ft = new lo(),
    Ze = class extends pt {
        update(t) {
            let e = this._cachedMeta,
                { data: i = [] } = e,
                n = this.chart._animationsDisabled,
                { start: o, count: r } = In(e, i, n);
            if (
                ((this._drawStart = o),
                (this._drawCount = r),
                An(e) && ((o = 0), (r = i.length)),
                this.options.showLine)
            ) {
                let { dataset: a, _dataset: l } = e;
                (a._chart = this.chart),
                    (a._datasetIndex = this.index),
                    (a._decimated = !!l._decimated),
                    (a.points = i);
                let c = this.resolveDatasetElementOptions(t);
                (c.segment = this.options.segment),
                    this.updateElement(a, void 0, { animated: !n, options: c }, t);
            }
            this.updateElements(i, o, r, t);
        }
        addElements() {
            let { showLine: t } = this.options;
            !this.datasetElementType && t && (this.datasetElementType = Ft.getElement('line')),
                super.addElements();
        }
        updateElements(t, e, i, n) {
            let o = n === 'reset',
                { iScale: r, vScale: a, _stacked: l, _dataset: c } = this._cachedMeta,
                h = this.resolveDataElementOptions(e, n),
                u = this.getSharedOptions(h),
                d = this.includeOptions(n, u),
                f = r.axis,
                m = a.axis,
                { spanGaps: g, segment: p } = this.options,
                b = ge(g) ? g : Number.POSITIVE_INFINITY,
                y = this.chart._animationsDisabled || o || n === 'none',
                _ = e > 0 && this.getParsed(e - 1);
            for (let w = e; w < e + i; ++w) {
                let x = t[w],
                    M = this.getParsed(w),
                    S = y ? x : {},
                    v = P(M[m]),
                    k = (S[f] = r.getPixelForValue(M[f], w)),
                    R = (S[m] =
                        o || v
                            ? a.getBasePixel()
                            : a.getPixelForValue(l ? this.applyStack(a, M, l) : M[m], w));
                (S.skip = isNaN(k) || isNaN(R) || v),
                    (S.stop = w > 0 && Math.abs(M[f] - _[f]) > b),
                    p && ((S.parsed = M), (S.raw = c.data[w])),
                    d &&
                        (S.options =
                            u || this.resolveDataElementOptions(w, x.active ? 'active' : n)),
                    y || this.updateElement(x, w, S, n),
                    (_ = M);
            }
            this.updateSharedOptions(u, n, h);
        }
        getMaxOverflow() {
            let t = this._cachedMeta,
                e = t.data || [];
            if (!this.options.showLine) {
                let a = 0;
                for (let l = e.length - 1; l >= 0; --l)
                    a = Math.max(a, e[l].size(this.resolveDataElementOptions(l)) / 2);
                return a > 0 && a;
            }
            let i = t.dataset,
                n = (i.options && i.options.borderWidth) || 0;
            if (!e.length) return n;
            let o = e[0].size(this.resolveDataElementOptions(0)),
                r = e[e.length - 1].size(this.resolveDataElementOptions(e.length - 1));
            return Math.max(n, o, r) / 2;
        }
    };
Ze.id = 'scatter';
Ze.defaults = {
    datasetElementType: !1,
    dataElementType: 'point',
    showLine: !1,
    fill: !1,
};
Ze.overrides = {
    interaction: { mode: 'point' },
    plugins: {
        tooltip: {
            callbacks: {
                title() {
                    return '';
                },
                label(s) {
                    return '(' + s.label + ', ' + s.formattedValue + ')';
                },
            },
        },
    },
    scales: { x: { type: 'linear' }, y: { type: 'linear' } },
};
var mu = Object.freeze({
    __proto__: null,
    BarController: Be,
    BubbleController: je,
    DoughnutController: re,
    LineController: $e,
    PolarAreaController: Ue,
    PieController: Cs,
    RadarController: Ye,
    ScatterController: Ze,
});
function be() {
    throw new Error(
        'This method is not implemented: Check that a complete date adapter is provided.',
    );
}
var Is = class {
    constructor(t) {
        this.options = t || {};
    }
    init(t) {}
    formats() {
        return be();
    }
    parse(t, e) {
        return be();
    }
    format(t, e) {
        return be();
    }
    add(t, e, i) {
        return be();
    }
    diff(t, e, i) {
        return be();
    }
    startOf(t, e, i) {
        return be();
    }
    endOf(t, e) {
        return be();
    }
};
Is.override = function (s) {
    Object.assign(Is.prototype, s);
};
var _o = { _date: Is };
function gu(s, t, e, i) {
    let { controller: n, data: o, _sorted: r } = s,
        a = n._cachedMeta.iScale;
    if (a && t === a.axis && t !== 'r' && r && o.length) {
        let l = a._reversePixels ? vr : Dt;
        if (i) {
            if (n._sharedOptions) {
                let c = o[0],
                    h = typeof c.getRange == 'function' && c.getRange(t);
                if (h) {
                    let u = l(o, t, e - h),
                        d = l(o, t, e + h);
                    return { lo: u.lo, hi: d.hi };
                }
            }
        } else return l(o, t, e);
    }
    return { lo: 0, hi: o.length - 1 };
}
function zs(s, t, e, i, n) {
    let o = s.getSortedVisibleDatasetMetas(),
        r = e[t];
    for (let a = 0, l = o.length; a < l; ++a) {
        let { index: c, data: h } = o[a],
            { lo: u, hi: d } = gu(o[a], t, r, n);
        for (let f = u; f <= d; ++f) {
            let m = h[f];
            m.skip || i(m, c, f);
        }
    }
}
function pu(s) {
    let t = s.indexOf('x') !== -1,
        e = s.indexOf('y') !== -1;
    return function (i, n) {
        let o = t ? Math.abs(i.x - n.x) : 0,
            r = e ? Math.abs(i.y - n.y) : 0;
        return Math.sqrt(Math.pow(o, 2) + Math.pow(r, 2));
    };
}
function to(s, t, e, i, n) {
    let o = [];
    return (
        (!n && !s.isPointInArea(t)) ||
            zs(
                s,
                e,
                t,
                function (a, l, c) {
                    (!n && !Ae(a, s.chartArea, 0)) ||
                        (a.inRange(t.x, t.y, i) &&
                            o.push({ element: a, datasetIndex: l, index: c }));
                },
                !0,
            ),
        o
    );
}
function bu(s, t, e, i) {
    let n = [];
    function o(r, a, l) {
        let { startAngle: c, endAngle: h } = r.getProps(['startAngle', 'endAngle'], i),
            { angle: u } = kn(r, { x: t.x, y: t.y });
        Re(u, c, h) && n.push({ element: r, datasetIndex: a, index: l });
    }
    return zs(s, e, t, o), n;
}
function yu(s, t, e, i, n, o) {
    let r = [],
        a = pu(e),
        l = Number.POSITIVE_INFINITY;
    function c(h, u, d) {
        let f = h.inRange(t.x, t.y, n);
        if (i && !f) return;
        let m = h.getCenterPoint(n);
        if (!(!!o || s.isPointInArea(m)) && !f) return;
        let p = a(t, m);
        p < l
            ? ((r = [{ element: h, datasetIndex: u, index: d }]), (l = p))
            : p === l && r.push({ element: h, datasetIndex: u, index: d });
    }
    return zs(s, e, t, c), r;
}
function eo(s, t, e, i, n, o) {
    return !o && !s.isPointInArea(t) ? [] : e === 'r' && !i ? bu(s, t, e, n) : yu(s, t, e, i, n, o);
}
function ha(s, t, e, i, n) {
    let o = [],
        r = e === 'x' ? 'inXRange' : 'inYRange',
        a = !1;
    return (
        zs(s, e, t, (l, c, h) => {
            l[r](t[e], n) &&
                (o.push({ element: l, datasetIndex: c, index: h }),
                (a = a || l.inRange(t.x, t.y, n)));
        }),
        i && !a ? [] : o
    );
}
var xu = {
        evaluateInteractionItems: zs,
        modes: {
            index(s, t, e, i) {
                let n = ie(t, s),
                    o = e.axis || 'x',
                    r = e.includeInvisible || !1,
                    a = e.intersect ? to(s, n, o, i, r) : eo(s, n, o, !1, i, r),
                    l = [];
                return a.length
                    ? (s.getSortedVisibleDatasetMetas().forEach((c) => {
                          let h = a[0].index,
                              u = c.data[h];
                          u &&
                              !u.skip &&
                              l.push({
                                  element: u,
                                  datasetIndex: c.index,
                                  index: h,
                              });
                      }),
                      l)
                    : [];
            },
            dataset(s, t, e, i) {
                let n = ie(t, s),
                    o = e.axis || 'xy',
                    r = e.includeInvisible || !1,
                    a = e.intersect ? to(s, n, o, i, r) : eo(s, n, o, !1, i, r);
                if (a.length > 0) {
                    let l = a[0].datasetIndex,
                        c = s.getDatasetMeta(l).data;
                    a = [];
                    for (let h = 0; h < c.length; ++h)
                        a.push({ element: c[h], datasetIndex: l, index: h });
                }
                return a;
            },
            point(s, t, e, i) {
                let n = ie(t, s),
                    o = e.axis || 'xy',
                    r = e.includeInvisible || !1;
                return to(s, n, o, i, r);
            },
            nearest(s, t, e, i) {
                let n = ie(t, s),
                    o = e.axis || 'xy',
                    r = e.includeInvisible || !1;
                return eo(s, n, o, e.intersect, i, r);
            },
            x(s, t, e, i) {
                let n = ie(t, s);
                return ha(s, n, 'x', e.intersect, i);
            },
            y(s, t, e, i) {
                let n = ie(t, s);
                return ha(s, n, 'y', e.intersect, i);
            },
        },
    },
    Ua = ['left', 'top', 'right', 'bottom'];
function vs(s, t) {
    return s.filter((e) => e.pos === t);
}
function ua(s, t) {
    return s.filter((e) => Ua.indexOf(e.pos) === -1 && e.box.axis === t);
}
function ks(s, t) {
    return s.sort((e, i) => {
        let n = t ? i : e,
            o = t ? e : i;
        return n.weight === o.weight ? n.index - o.index : n.weight - o.weight;
    });
}
function _u(s) {
    let t = [],
        e,
        i,
        n,
        o,
        r,
        a;
    for (e = 0, i = (s || []).length; e < i; ++e)
        (n = s[e]),
            ({
                position: o,
                options: { stack: r, stackWeight: a = 1 },
            } = n),
            t.push({
                index: e,
                box: n,
                pos: o,
                horizontal: n.isHorizontal(),
                weight: n.weight,
                stack: r && o + r,
                stackWeight: a,
            });
    return t;
}
function wu(s) {
    let t = {};
    for (let e of s) {
        let { stack: i, pos: n, stackWeight: o } = e;
        if (!i || !Ua.includes(n)) continue;
        let r = t[i] || (t[i] = { count: 0, placed: 0, weight: 0, size: 0 });
        r.count++, (r.weight += o);
    }
    return t;
}
function Su(s, t) {
    let e = wu(s),
        { vBoxMaxWidth: i, hBoxMaxHeight: n } = t,
        o,
        r,
        a;
    for (o = 0, r = s.length; o < r; ++o) {
        a = s[o];
        let { fullSize: l } = a.box,
            c = e[a.stack],
            h = c && a.stackWeight / c.weight;
        a.horizontal
            ? ((a.width = h ? h * i : l && t.availableWidth), (a.height = n))
            : ((a.width = i), (a.height = h ? h * n : l && t.availableHeight));
    }
    return e;
}
function Mu(s) {
    let t = _u(s),
        e = ks(
            t.filter((c) => c.box.fullSize),
            !0,
        ),
        i = ks(vs(t, 'left'), !0),
        n = ks(vs(t, 'right')),
        o = ks(vs(t, 'top'), !0),
        r = ks(vs(t, 'bottom')),
        a = ua(t, 'x'),
        l = ua(t, 'y');
    return {
        fullSize: e,
        leftAndTop: i.concat(o),
        rightAndBottom: n.concat(l).concat(r).concat(a),
        chartArea: vs(t, 'chartArea'),
        vertical: i.concat(n).concat(l),
        horizontal: o.concat(r).concat(a),
    };
}
function da(s, t, e, i) {
    return Math.max(s[e], t[e]) + Math.max(s[i], t[i]);
}
function Ya(s, t) {
    (s.top = Math.max(s.top, t.top)),
        (s.left = Math.max(s.left, t.left)),
        (s.bottom = Math.max(s.bottom, t.bottom)),
        (s.right = Math.max(s.right, t.right));
}
function Tu(s, t, e, i) {
    let { pos: n, box: o } = e,
        r = s.maxPadding;
    if (!A(n)) {
        e.size && (s[n] -= e.size);
        let u = i[e.stack] || { size: 0, count: 1 };
        (u.size = Math.max(u.size, e.horizontal ? o.height : o.width)),
            (e.size = u.size / u.count),
            (s[n] += e.size);
    }
    o.getPadding && Ya(r, o.getPadding());
    let a = Math.max(0, t.outerWidth - da(r, s, 'left', 'right')),
        l = Math.max(0, t.outerHeight - da(r, s, 'top', 'bottom')),
        c = a !== s.w,
        h = l !== s.h;
    return (s.w = a), (s.h = l), e.horizontal ? { same: c, other: h } : { same: h, other: c };
}
function vu(s) {
    let t = s.maxPadding;
    function e(i) {
        let n = Math.max(t[i] - s[i], 0);
        return (s[i] += n), n;
    }
    (s.y += e('top')), (s.x += e('left')), e('right'), e('bottom');
}
function ku(s, t) {
    let e = t.maxPadding;
    function i(n) {
        let o = { left: 0, top: 0, right: 0, bottom: 0 };
        return (
            n.forEach((r) => {
                o[r] = Math.max(t[r], e[r]);
            }),
            o
        );
    }
    return i(s ? ['left', 'right'] : ['top', 'bottom']);
}
function Es(s, t, e, i) {
    let n = [],
        o,
        r,
        a,
        l,
        c,
        h;
    for (o = 0, r = s.length, c = 0; o < r; ++o) {
        (a = s[o]), (l = a.box), l.update(a.width || t.w, a.height || t.h, ku(a.horizontal, t));
        let { same: u, other: d } = Tu(t, e, a, i);
        (c |= u && n.length), (h = h || d), l.fullSize || n.push(a);
    }
    return (c && Es(n, t, e, i)) || h;
}
function Fi(s, t, e, i, n) {
    (s.top = e), (s.left = t), (s.right = t + i), (s.bottom = e + n), (s.width = i), (s.height = n);
}
function fa(s, t, e, i) {
    let n = e.padding,
        { x: o, y: r } = t;
    for (let a of s) {
        let l = a.box,
            c = i[a.stack] || { count: 1, placed: 0, weight: 1 },
            h = a.stackWeight / c.weight || 1;
        if (a.horizontal) {
            let u = t.w * h,
                d = c.size || l.height;
            ft(c.start) && (r = c.start),
                l.fullSize
                    ? Fi(l, n.left, r, e.outerWidth - n.right - n.left, d)
                    : Fi(l, t.left + c.placed, r, u, d),
                (c.start = r),
                (c.placed += u),
                (r = l.bottom);
        } else {
            let u = t.h * h,
                d = c.size || l.width;
            ft(c.start) && (o = c.start),
                l.fullSize
                    ? Fi(l, o, n.top, d, e.outerHeight - n.bottom - n.top)
                    : Fi(l, o, t.top + c.placed, d, u),
                (c.start = o),
                (c.placed += u),
                (o = l.right);
        }
    }
    (t.x = o), (t.y = r);
}
F.set('layout', {
    autoPadding: !0,
    padding: { top: 0, right: 0, bottom: 0, left: 0 },
});
var lt = {
        addBox(s, t) {
            s.boxes || (s.boxes = []),
                (t.fullSize = t.fullSize || !1),
                (t.position = t.position || 'top'),
                (t.weight = t.weight || 0),
                (t._layers =
                    t._layers ||
                    function () {
                        return [
                            {
                                z: 0,
                                draw(e) {
                                    t.draw(e);
                                },
                            },
                        ];
                    }),
                s.boxes.push(t);
        },
        removeBox(s, t) {
            let e = s.boxes ? s.boxes.indexOf(t) : -1;
            e !== -1 && s.boxes.splice(e, 1);
        },
        configure(s, t, e) {
            (t.fullSize = e.fullSize), (t.position = e.position), (t.weight = e.weight);
        },
        update(s, t, e, i) {
            if (!s) return;
            let n = at(s.options.layout.padding),
                o = Math.max(t - n.width, 0),
                r = Math.max(e - n.height, 0),
                a = Mu(s.boxes),
                l = a.vertical,
                c = a.horizontal;
            W(s.boxes, (g) => {
                typeof g.beforeLayout == 'function' && g.beforeLayout();
            });
            let h =
                    l.reduce(
                        (g, p) => (p.box.options && p.box.options.display === !1 ? g : g + 1),
                        0,
                    ) || 1,
                u = Object.freeze({
                    outerWidth: t,
                    outerHeight: e,
                    padding: n,
                    availableWidth: o,
                    availableHeight: r,
                    vBoxMaxWidth: o / 2 / h,
                    hBoxMaxHeight: r / 2,
                }),
                d = Object.assign({}, n);
            Ya(d, at(i));
            let f = Object.assign({ maxPadding: d, w: o, h: r, x: n.left, y: n.top }, n),
                m = Su(l.concat(c), u);
            Es(a.fullSize, f, u, m),
                Es(l, f, u, m),
                Es(c, f, u, m) && Es(l, f, u, m),
                vu(f),
                fa(a.leftAndTop, f, u, m),
                (f.x += f.w),
                (f.y += f.h),
                fa(a.rightAndBottom, f, u, m),
                (s.chartArea = {
                    left: f.left,
                    top: f.top,
                    right: f.left + f.w,
                    bottom: f.top + f.h,
                    height: f.h,
                    width: f.w,
                }),
                W(a.chartArea, (g) => {
                    let p = g.box;
                    Object.assign(p, s.chartArea),
                        p.update(f.w, f.h, {
                            left: 0,
                            top: 0,
                            right: 0,
                            bottom: 0,
                        });
                });
        },
    },
    Wi = class {
        acquireContext(t, e) {}
        releaseContext(t) {
            return !1;
        }
        addEventListener(t, e, i) {}
        removeEventListener(t, e, i) {}
        getDevicePixelRatio() {
            return 1;
        }
        getMaximumSize(t, e, i, n) {
            return (
                (e = Math.max(0, e || t.width)),
                (i = i || t.height),
                { width: e, height: Math.max(0, n ? Math.floor(e / n) : i) }
            );
        }
        isAttached(t) {
            return !0;
        }
        updateConfig(t) {}
    },
    co = class extends Wi {
        acquireContext(t) {
            return (t && t.getContext && t.getContext('2d')) || null;
        }
        updateConfig(t) {
            t.options.animation = !1;
        }
    },
    zi = '$chartjs',
    Ou = {
        touchstart: 'mousedown',
        touchmove: 'mousemove',
        touchend: 'mouseup',
        pointerenter: 'mouseenter',
        pointerdown: 'mousedown',
        pointermove: 'mousemove',
        pointerup: 'mouseup',
        pointerleave: 'mouseout',
        pointerout: 'mouseout',
    },
    ma = (s) => s === null || s === '';
function Eu(s, t) {
    let e = s.style,
        i = s.getAttribute('height'),
        n = s.getAttribute('width');
    if (
        ((s[zi] = {
            initial: {
                height: i,
                width: n,
                style: { display: e.display, height: e.height, width: e.width },
            },
        }),
        (e.display = e.display || 'block'),
        (e.boxSizing = e.boxSizing || 'border-box'),
        ma(n))
    ) {
        let o = Yn(s, 'width');
        o !== void 0 && (s.width = o);
    }
    if (ma(i))
        if (s.style.height === '') s.height = s.width / (t || 2);
        else {
            let o = Yn(s, 'height');
            o !== void 0 && (s.height = o);
        }
    return s;
}
var Za = Yr ? { passive: !0 } : !1;
function Du(s, t, e) {
    s.addEventListener(t, e, Za);
}
function Cu(s, t, e) {
    s.canvas.removeEventListener(t, e, Za);
}
function Iu(s, t) {
    let e = Ou[s.type] || s.type,
        { x: i, y: n } = ie(s, t);
    return {
        type: e,
        chart: t,
        native: s,
        x: i !== void 0 ? i : null,
        y: n !== void 0 ? n : null,
    };
}
function Hi(s, t) {
    for (let e of s) if (e === t || e.contains(t)) return !0;
}
function Au(s, t, e) {
    let i = s.canvas,
        n = new MutationObserver((o) => {
            let r = !1;
            for (let a of o) (r = r || Hi(a.addedNodes, i)), (r = r && !Hi(a.removedNodes, i));
            r && e();
        });
    return n.observe(document, { childList: !0, subtree: !0 }), n;
}
function Fu(s, t, e) {
    let i = s.canvas,
        n = new MutationObserver((o) => {
            let r = !1;
            for (let a of o) (r = r || Hi(a.removedNodes, i)), (r = r && !Hi(a.addedNodes, i));
            r && e();
        });
    return n.observe(document, { childList: !0, subtree: !0 }), n;
}
var As = new Map(),
    ga = 0;
function qa() {
    let s = window.devicePixelRatio;
    s !== ga &&
        ((ga = s),
        As.forEach((t, e) => {
            e.currentDevicePixelRatio !== s && t();
        }));
}
function Lu(s, t) {
    As.size || window.addEventListener('resize', qa), As.set(s, t);
}
function Pu(s) {
    As.delete(s), As.size || window.removeEventListener('resize', qa);
}
function Ru(s, t, e) {
    let i = s.canvas,
        n = i && Ci(i);
    if (!n) return;
    let o = Cn((a, l) => {
            let c = n.clientWidth;
            e(a, l), c < n.clientWidth && e();
        }, window),
        r = new ResizeObserver((a) => {
            let l = a[0],
                c = l.contentRect.width,
                h = l.contentRect.height;
            (c === 0 && h === 0) || o(c, h);
        });
    return r.observe(n), Lu(s, o), r;
}
function so(s, t, e) {
    e && e.disconnect(), t === 'resize' && Pu(s);
}
function Nu(s, t, e) {
    let i = s.canvas,
        n = Cn(
            (o) => {
                s.ctx !== null && e(Iu(o, s));
            },
            s,
            (o) => {
                let r = o[0];
                return [r, r.offsetX, r.offsetY];
            },
        );
    return Du(i, t, n), n;
}
var ho = class extends Wi {
    acquireContext(t, e) {
        let i = t && t.getContext && t.getContext('2d');
        return i && i.canvas === t ? (Eu(t, e), i) : null;
    }
    releaseContext(t) {
        let e = t.canvas;
        if (!e[zi]) return !1;
        let i = e[zi].initial;
        ['height', 'width'].forEach((o) => {
            let r = i[o];
            P(r) ? e.removeAttribute(o) : e.setAttribute(o, r);
        });
        let n = i.style || {};
        return (
            Object.keys(n).forEach((o) => {
                e.style[o] = n[o];
            }),
            (e.width = e.width),
            delete e[zi],
            !0
        );
    }
    addEventListener(t, e, i) {
        this.removeEventListener(t, e);
        let n = t.$proxies || (t.$proxies = {}),
            r = { attach: Au, detach: Fu, resize: Ru }[e] || Nu;
        n[e] = r(t, e, i);
    }
    removeEventListener(t, e) {
        let i = t.$proxies || (t.$proxies = {}),
            n = i[e];
        if (!n) return;
        (({ attach: so, detach: so, resize: so })[e] || Cu)(t, e, n), (i[e] = void 0);
    }
    getDevicePixelRatio() {
        return window.devicePixelRatio;
    }
    getMaximumSize(t, e, i, n) {
        return Ur(t, e, i, n);
    }
    isAttached(t) {
        let e = Ci(t);
        return !!(e && e.isConnected);
    }
};
function zu(s) {
    return !$n() || (typeof OffscreenCanvas < 'u' && s instanceof OffscreenCanvas) ? co : ho;
}
var uo = class {
    constructor() {
        this._init = [];
    }
    notify(t, e, i, n) {
        e === 'beforeInit' &&
            ((this._init = this._createDescriptors(t, !0)), this._notify(this._init, t, 'install'));
        let o = n ? this._descriptors(t).filter(n) : this._descriptors(t),
            r = this._notify(o, t, e, i);
        return (
            e === 'afterDestroy' &&
                (this._notify(o, t, 'stop'), this._notify(this._init, t, 'uninstall')),
            r
        );
    }
    _notify(t, e, i, n) {
        n = n || {};
        for (let o of t) {
            let r = o.plugin,
                a = r[i],
                l = [e, n, o.options];
            if ($(a, l, r) === !1 && n.cancelable) return !1;
        }
        return !0;
    }
    invalidate() {
        P(this._cache) || ((this._oldCache = this._cache), (this._cache = void 0));
    }
    _descriptors(t) {
        if (this._cache) return this._cache;
        let e = (this._cache = this._createDescriptors(t));
        return this._notifyStateChanges(t), e;
    }
    _createDescriptors(t, e) {
        let i = t && t.config,
            n = D(i.options && i.options.plugins, {}),
            o = Vu(i);
        return n === !1 && !e ? [] : Hu(t, o, n, e);
    }
    _notifyStateChanges(t) {
        let e = this._oldCache || [],
            i = this._cache,
            n = (o, r) => o.filter((a) => !r.some((l) => a.plugin.id === l.plugin.id));
        this._notify(n(e, i), t, 'stop'), this._notify(n(i, e), t, 'start');
    }
};
function Vu(s) {
    let t = {},
        e = [],
        i = Object.keys(Ft.plugins.items);
    for (let o = 0; o < i.length; o++) e.push(Ft.getPlugin(i[o]));
    let n = s.plugins || [];
    for (let o = 0; o < n.length; o++) {
        let r = n[o];
        e.indexOf(r) === -1 && (e.push(r), (t[r.id] = !0));
    }
    return { plugins: e, localIds: t };
}
function Wu(s, t) {
    return !t && s === !1 ? null : s === !0 ? {} : s;
}
function Hu(s, { plugins: t, localIds: e }, i, n) {
    let o = [],
        r = s.getContext();
    for (let a of t) {
        let l = a.id,
            c = Wu(i[l], n);
        c !== null &&
            o.push({
                plugin: a,
                options: Bu(s.config, { plugin: a, local: e[l] }, c, r),
            });
    }
    return o;
}
function Bu(s, { plugin: t, local: e }, i, n) {
    let o = s.pluginScopeKeys(t),
        r = s.getOptionScopes(i, o);
    return (
        e && t.defaults && r.push(t.defaults),
        s.createResolver(r, n, [''], {
            scriptable: !1,
            indexable: !1,
            allKeys: !0,
        })
    );
}
function fo(s, t) {
    let e = F.datasets[s] || {};
    return ((t.datasets || {})[s] || {}).indexAxis || t.indexAxis || e.indexAxis || 'x';
}
function ju(s, t) {
    let e = s;
    return s === '_index_' ? (e = t) : s === '_value_' && (e = t === 'x' ? 'y' : 'x'), e;
}
function $u(s, t) {
    return s === t ? '_index_' : '_value_';
}
function Uu(s) {
    if (s === 'top' || s === 'bottom') return 'x';
    if (s === 'left' || s === 'right') return 'y';
}
function mo(s, t) {
    return s === 'x' || s === 'y' ? s : t.axis || Uu(t.position) || s.charAt(0).toLowerCase();
}
function Yu(s, t) {
    let e = Qt[s.type] || { scales: {} },
        i = t.scales || {},
        n = fo(s.type, t),
        o = Object.create(null),
        r = Object.create(null);
    return (
        Object.keys(i).forEach((a) => {
            let l = i[a];
            if (!A(l)) return console.error(`Invalid scale configuration for scale: ${a}`);
            if (l._proxy)
                return console.warn(`Ignoring resolver passed as options for scale: ${a}`);
            let c = mo(a, l),
                h = $u(c, n),
                u = e.scales || {};
            (o[c] = o[c] || a), (r[a] = Le(Object.create(null), [{ axis: c }, l, u[c], u[h]]));
        }),
        s.data.datasets.forEach((a) => {
            let l = a.type || s.type,
                c = a.indexAxis || fo(l, t),
                u = (Qt[l] || {}).scales || {};
            Object.keys(u).forEach((d) => {
                let f = ju(d, c),
                    m = a[f + 'AxisID'] || o[f] || f;
                (r[m] = r[m] || Object.create(null)), Le(r[m], [{ axis: f }, i[m], u[d]]);
            });
        }),
        Object.keys(r).forEach((a) => {
            let l = r[a];
            Le(l, [F.scales[l.type], F.scale]);
        }),
        r
    );
}
function Ga(s) {
    let t = s.options || (s.options = {});
    (t.plugins = D(t.plugins, {})), (t.scales = Yu(s, t));
}
function Xa(s) {
    return (s = s || {}), (s.datasets = s.datasets || []), (s.labels = s.labels || []), s;
}
function Zu(s) {
    return (s = s || {}), (s.data = Xa(s.data)), Ga(s), s;
}
var pa = new Map(),
    Ka = new Set();
function Li(s, t) {
    let e = pa.get(s);
    return e || ((e = t()), pa.set(s, e), Ka.add(e)), e;
}
var Os = (s, t, e) => {
        let i = Ht(t, e);
        i !== void 0 && s.add(i);
    },
    go = class {
        constructor(t) {
            (this._config = Zu(t)),
                (this._scopeCache = new Map()),
                (this._resolverCache = new Map());
        }
        get platform() {
            return this._config.platform;
        }
        get type() {
            return this._config.type;
        }
        set type(t) {
            this._config.type = t;
        }
        get data() {
            return this._config.data;
        }
        set data(t) {
            this._config.data = Xa(t);
        }
        get options() {
            return this._config.options;
        }
        set options(t) {
            this._config.options = t;
        }
        get plugins() {
            return this._config.plugins;
        }
        update() {
            let t = this._config;
            this.clearCache(), Ga(t);
        }
        clearCache() {
            this._scopeCache.clear(), this._resolverCache.clear();
        }
        datasetScopeKeys(t) {
            return Li(t, () => [[`datasets.${t}`, '']]);
        }
        datasetAnimationScopeKeys(t, e) {
            return Li(`${t}.transition.${e}`, () => [
                [`datasets.${t}.transitions.${e}`, `transitions.${e}`],
                [`datasets.${t}`, ''],
            ]);
        }
        datasetElementScopeKeys(t, e) {
            return Li(`${t}-${e}`, () => [
                [`datasets.${t}.elements.${e}`, `datasets.${t}`, `elements.${e}`, ''],
            ]);
        }
        pluginScopeKeys(t) {
            let e = t.id,
                i = this.type;
            return Li(`${i}-plugin-${e}`, () => [
                [`plugins.${e}`, ...(t.additionalOptionScopes || [])],
            ]);
        }
        _cachedScopes(t, e) {
            let i = this._scopeCache,
                n = i.get(t);
            return (!n || e) && ((n = new Map()), i.set(t, n)), n;
        }
        getOptionScopes(t, e, i) {
            let { options: n, type: o } = this,
                r = this._cachedScopes(t, i),
                a = r.get(e);
            if (a) return a;
            let l = new Set();
            e.forEach((h) => {
                t && (l.add(t), h.forEach((u) => Os(l, t, u))),
                    h.forEach((u) => Os(l, n, u)),
                    h.forEach((u) => Os(l, Qt[o] || {}, u)),
                    h.forEach((u) => Os(l, F, u)),
                    h.forEach((u) => Os(l, ki, u));
            });
            let c = Array.from(l);
            return c.length === 0 && c.push(Object.create(null)), Ka.has(e) && r.set(e, c), c;
        }
        chartOptionScopes() {
            let { options: t, type: e } = this;
            return [t, Qt[e] || {}, F.datasets[e] || {}, { type: e }, F, ki];
        }
        resolveNamedOptions(t, e, i, n = ['']) {
            let o = { $shared: !0 },
                { resolver: r, subPrefixes: a } = ba(this._resolverCache, t, n),
                l = r;
            if (Gu(r, e)) {
                (o.$shared = !1), (i = Wt(i) ? i() : i);
                let c = this.createResolver(t, i, a);
                l = me(r, i, c);
            }
            for (let c of e) o[c] = l[c];
            return o;
        }
        createResolver(t, e, i = [''], n) {
            let { resolver: o } = ba(this._resolverCache, t, i);
            return A(e) ? me(o, e, void 0, n) : o;
        }
    };
function ba(s, t, e) {
    let i = s.get(t);
    i || ((i = new Map()), s.set(t, i));
    let n = e.join(),
        o = i.get(n);
    return (
        o ||
            ((o = {
                resolver: Di(t, e),
                subPrefixes: e.filter((a) => !a.toLowerCase().includes('hover')),
            }),
            i.set(n, o)),
        o
    );
}
var qu = (s) => A(s) && Object.getOwnPropertyNames(s).reduce((t, e) => t || Wt(s[e]), !1);
function Gu(s, t) {
    let { isScriptable: e, isIndexable: i } = Wn(s);
    for (let n of t) {
        let o = e(n),
            r = i(n),
            a = (r || o) && s[n];
        if ((o && (Wt(a) || qu(a))) || (r && j(a))) return !0;
    }
    return !1;
}
var Xu = '3.9.1',
    Ku = ['top', 'bottom', 'left', 'right', 'chartArea'];
function ya(s, t) {
    return s === 'top' || s === 'bottom' || (Ku.indexOf(s) === -1 && t === 'x');
}
function xa(s, t) {
    return function (e, i) {
        return e[s] === i[s] ? e[t] - i[t] : e[s] - i[s];
    };
}
function _a(s) {
    let t = s.chart,
        e = t.options.animation;
    t.notifyPlugins('afterRender'), $(e && e.onComplete, [s], t);
}
function Ju(s) {
    let t = s.chart,
        e = t.options.animation;
    $(e && e.onProgress, [s], t);
}
function Ja(s) {
    return (
        $n() && typeof s == 'string'
            ? (s = document.getElementById(s))
            : s && s.length && (s = s[0]),
        s && s.canvas && (s = s.canvas),
        s
    );
}
var Bi = {},
    Qa = (s) => {
        let t = Ja(s);
        return Object.values(Bi)
            .filter((e) => e.canvas === t)
            .pop();
    };
function Qu(s, t, e) {
    let i = Object.keys(s);
    for (let n of i) {
        let o = +n;
        if (o >= t) {
            let r = s[n];
            delete s[n], (e > 0 || o > t) && (s[o + e] = r);
        }
    }
}
function td(s, t, e, i) {
    return !e || s.type === 'mouseout' ? null : i ? t : s;
}
var ye = class {
        constructor(t, e) {
            let i = (this.config = new go(e)),
                n = Ja(t),
                o = Qa(n);
            if (o)
                throw new Error(
                    "Canvas is already in use. Chart with ID '" +
                        o.id +
                        "' must be destroyed before the canvas with ID '" +
                        o.canvas.id +
                        "' can be reused.",
                );
            let r = i.createResolver(i.chartOptionScopes(), this.getContext());
            (this.platform = new (i.platform || zu(n))()), this.platform.updateConfig(i);
            let a = this.platform.acquireContext(n, r.aspectRatio),
                l = a && a.canvas,
                c = l && l.height,
                h = l && l.width;
            if (
                ((this.id = yr()),
                (this.ctx = a),
                (this.canvas = l),
                (this.width = h),
                (this.height = c),
                (this._options = r),
                (this._aspectRatio = this.aspectRatio),
                (this._layers = []),
                (this._metasets = []),
                (this._stacks = void 0),
                (this.boxes = []),
                (this.currentDevicePixelRatio = void 0),
                (this.chartArea = void 0),
                (this._active = []),
                (this._lastEvent = void 0),
                (this._listeners = {}),
                (this._responsiveListeners = void 0),
                (this._sortedMetasets = []),
                (this.scales = {}),
                (this._plugins = new uo()),
                (this.$proxies = {}),
                (this._hiddenIndices = {}),
                (this.attached = !1),
                (this._animationsDisabled = void 0),
                (this.$context = void 0),
                (this._doResize = Dr((u) => this.update(u), r.resizeDelay || 0)),
                (this._dataChanges = []),
                (Bi[this.id] = this),
                !a || !l)
            ) {
                console.error("Failed to create chart: can't acquire context from the given item");
                return;
            }
            jt.listen(this, 'complete', _a),
                jt.listen(this, 'progress', Ju),
                this._initialize(),
                this.attached && this.update();
        }
        get aspectRatio() {
            let {
                options: { aspectRatio: t, maintainAspectRatio: e },
                width: i,
                height: n,
                _aspectRatio: o,
            } = this;
            return P(t) ? (e && o ? o : n ? i / n : null) : t;
        }
        get data() {
            return this.config.data;
        }
        set data(t) {
            this.config.data = t;
        }
        get options() {
            return this._options;
        }
        set options(t) {
            this.config.options = t;
        }
        _initialize() {
            return (
                this.notifyPlugins('beforeInit'),
                this.options.responsive ? this.resize() : Un(this, this.options.devicePixelRatio),
                this.bindEvents(),
                this.notifyPlugins('afterInit'),
                this
            );
        }
        clear() {
            return Nn(this.canvas, this.ctx), this;
        }
        stop() {
            return jt.stop(this), this;
        }
        resize(t, e) {
            jt.running(this)
                ? (this._resizeBeforeDraw = { width: t, height: e })
                : this._resize(t, e);
        }
        _resize(t, e) {
            let i = this.options,
                n = this.canvas,
                o = i.maintainAspectRatio && this.aspectRatio,
                r = this.platform.getMaximumSize(n, t, e, o),
                a = i.devicePixelRatio || this.platform.getDevicePixelRatio(),
                l = this.width ? 'resize' : 'attach';
            (this.width = r.width),
                (this.height = r.height),
                (this._aspectRatio = this.aspectRatio),
                Un(this, a, !0) &&
                    (this.notifyPlugins('resize', { size: r }),
                    $(i.onResize, [this, r], this),
                    this.attached && this._doResize(l) && this.render());
        }
        ensureScalesHaveIDs() {
            let e = this.options.scales || {};
            W(e, (i, n) => {
                i.id = n;
            });
        }
        buildOrUpdateScales() {
            let t = this.options,
                e = t.scales,
                i = this.scales,
                n = Object.keys(i).reduce((r, a) => ((r[a] = !1), r), {}),
                o = [];
            e &&
                (o = o.concat(
                    Object.keys(e).map((r) => {
                        let a = e[r],
                            l = mo(r, a),
                            c = l === 'r',
                            h = l === 'x';
                        return {
                            options: a,
                            dposition: c ? 'chartArea' : h ? 'bottom' : 'left',
                            dtype: c ? 'radialLinear' : h ? 'category' : 'linear',
                        };
                    }),
                )),
                W(o, (r) => {
                    let a = r.options,
                        l = a.id,
                        c = mo(l, a),
                        h = D(a.type, r.dtype);
                    (a.position === void 0 || ya(a.position, c) !== ya(r.dposition)) &&
                        (a.position = r.dposition),
                        (n[l] = !0);
                    let u = null;
                    if (l in i && i[l].type === h) u = i[l];
                    else {
                        let d = Ft.getScale(h);
                        (u = new d({
                            id: l,
                            type: h,
                            ctx: this.ctx,
                            chart: this,
                        })),
                            (i[u.id] = u);
                    }
                    u.init(a, t);
                }),
                W(n, (r, a) => {
                    r || delete i[a];
                }),
                W(i, (r) => {
                    lt.configure(this, r, r.options), lt.addBox(this, r);
                });
        }
        _updateMetasets() {
            let t = this._metasets,
                e = this.data.datasets.length,
                i = t.length;
            if ((t.sort((n, o) => n.index - o.index), i > e)) {
                for (let n = e; n < i; ++n) this._destroyDatasetMeta(n);
                t.splice(e, i - e);
            }
            this._sortedMetasets = t.slice(0).sort(xa('order', 'index'));
        }
        _removeUnreferencedMetasets() {
            let {
                _metasets: t,
                data: { datasets: e },
            } = this;
            t.length > e.length && delete this._stacks,
                t.forEach((i, n) => {
                    e.filter((o) => o === i._dataset).length === 0 && this._destroyDatasetMeta(n);
                });
        }
        buildOrUpdateControllers() {
            let t = [],
                e = this.data.datasets,
                i,
                n;
            for (this._removeUnreferencedMetasets(), i = 0, n = e.length; i < n; i++) {
                let o = e[i],
                    r = this.getDatasetMeta(i),
                    a = o.type || this.config.type;
                if (
                    (r.type &&
                        r.type !== a &&
                        (this._destroyDatasetMeta(i), (r = this.getDatasetMeta(i))),
                    (r.type = a),
                    (r.indexAxis = o.indexAxis || fo(a, this.options)),
                    (r.order = o.order || 0),
                    (r.index = i),
                    (r.label = '' + o.label),
                    (r.visible = this.isDatasetVisible(i)),
                    r.controller)
                )
                    r.controller.updateIndex(i), r.controller.linkScales();
                else {
                    let l = Ft.getController(a),
                        { datasetElementType: c, dataElementType: h } = F.datasets[a];
                    Object.assign(l.prototype, {
                        dataElementType: Ft.getElement(h),
                        datasetElementType: c && Ft.getElement(c),
                    }),
                        (r.controller = new l(this, i)),
                        t.push(r.controller);
                }
            }
            return this._updateMetasets(), t;
        }
        _resetElements() {
            W(
                this.data.datasets,
                (t, e) => {
                    this.getDatasetMeta(e).controller.reset();
                },
                this,
            );
        }
        reset() {
            this._resetElements(), this.notifyPlugins('reset');
        }
        update(t) {
            let e = this.config;
            e.update();
            let i = (this._options = e.createResolver(e.chartOptionScopes(), this.getContext())),
                n = (this._animationsDisabled = !i.animation);
            if (
                (this._updateScales(),
                this._checkEventBindings(),
                this._updateHiddenIndices(),
                this._plugins.invalidate(),
                this.notifyPlugins('beforeUpdate', {
                    mode: t,
                    cancelable: !0,
                }) === !1)
            )
                return;
            let o = this.buildOrUpdateControllers();
            this.notifyPlugins('beforeElementsUpdate');
            let r = 0;
            for (let c = 0, h = this.data.datasets.length; c < h; c++) {
                let { controller: u } = this.getDatasetMeta(c),
                    d = !n && o.indexOf(u) === -1;
                u.buildOrUpdateElements(d), (r = Math.max(+u.getMaxOverflow(), r));
            }
            (r = this._minPadding = i.layout.autoPadding ? r : 0),
                this._updateLayout(r),
                n ||
                    W(o, (c) => {
                        c.reset();
                    }),
                this._updateDatasets(t),
                this.notifyPlugins('afterUpdate', { mode: t }),
                this._layers.sort(xa('z', '_idx'));
            let { _active: a, _lastEvent: l } = this;
            l ? this._eventHandler(l, !0) : a.length && this._updateHoverStyles(a, a, !0),
                this.render();
        }
        _updateScales() {
            W(this.scales, (t) => {
                lt.removeBox(this, t);
            }),
                this.ensureScalesHaveIDs(),
                this.buildOrUpdateScales();
        }
        _checkEventBindings() {
            let t = this.options,
                e = new Set(Object.keys(this._listeners)),
                i = new Set(t.events);
            (!Sn(e, i) || !!this._responsiveListeners !== t.responsive) &&
                (this.unbindEvents(), this.bindEvents());
        }
        _updateHiddenIndices() {
            let { _hiddenIndices: t } = this,
                e = this._getUniformDataChanges() || [];
            for (let { method: i, start: n, count: o } of e) {
                let r = i === '_removeElements' ? -o : o;
                Qu(t, n, r);
            }
        }
        _getUniformDataChanges() {
            let t = this._dataChanges;
            if (!t || !t.length) return;
            this._dataChanges = [];
            let e = this.data.datasets.length,
                i = (o) =>
                    new Set(
                        t.filter((r) => r[0] === o).map((r, a) => a + ',' + r.splice(1).join(',')),
                    ),
                n = i(0);
            for (let o = 1; o < e; o++) if (!Sn(n, i(o))) return;
            return Array.from(n)
                .map((o) => o.split(','))
                .map((o) => ({ method: o[1], start: +o[2], count: +o[3] }));
        }
        _updateLayout(t) {
            if (this.notifyPlugins('beforeLayout', { cancelable: !0 }) === !1) return;
            lt.update(this, this.width, this.height, t);
            let e = this.chartArea,
                i = e.width <= 0 || e.height <= 0;
            (this._layers = []),
                W(
                    this.boxes,
                    (n) => {
                        (i && n.position === 'chartArea') ||
                            (n.configure && n.configure(), this._layers.push(...n._layers()));
                    },
                    this,
                ),
                this._layers.forEach((n, o) => {
                    n._idx = o;
                }),
                this.notifyPlugins('afterLayout');
        }
        _updateDatasets(t) {
            if (
                this.notifyPlugins('beforeDatasetsUpdate', {
                    mode: t,
                    cancelable: !0,
                }) !== !1
            ) {
                for (let e = 0, i = this.data.datasets.length; e < i; ++e)
                    this.getDatasetMeta(e).controller.configure();
                for (let e = 0, i = this.data.datasets.length; e < i; ++e)
                    this._updateDataset(e, Wt(t) ? t({ datasetIndex: e }) : t);
                this.notifyPlugins('afterDatasetsUpdate', { mode: t });
            }
        }
        _updateDataset(t, e) {
            let i = this.getDatasetMeta(t),
                n = { meta: i, index: t, mode: e, cancelable: !0 };
            this.notifyPlugins('beforeDatasetUpdate', n) !== !1 &&
                (i.controller._update(e),
                (n.cancelable = !1),
                this.notifyPlugins('afterDatasetUpdate', n));
        }
        render() {
            this.notifyPlugins('beforeRender', { cancelable: !0 }) !== !1 &&
                (jt.has(this)
                    ? this.attached && !jt.running(this) && jt.start(this)
                    : (this.draw(), _a({ chart: this })));
        }
        draw() {
            let t;
            if (this._resizeBeforeDraw) {
                let { width: i, height: n } = this._resizeBeforeDraw;
                this._resize(i, n), (this._resizeBeforeDraw = null);
            }
            if (
                (this.clear(),
                this.width <= 0 ||
                    this.height <= 0 ||
                    this.notifyPlugins('beforeDraw', { cancelable: !0 }) === !1)
            )
                return;
            let e = this._layers;
            for (t = 0; t < e.length && e[t].z <= 0; ++t) e[t].draw(this.chartArea);
            for (this._drawDatasets(); t < e.length; ++t) e[t].draw(this.chartArea);
            this.notifyPlugins('afterDraw');
        }
        _getSortedDatasetMetas(t) {
            let e = this._sortedMetasets,
                i = [],
                n,
                o;
            for (n = 0, o = e.length; n < o; ++n) {
                let r = e[n];
                (!t || r.visible) && i.push(r);
            }
            return i;
        }
        getSortedVisibleDatasetMetas() {
            return this._getSortedDatasetMetas(!0);
        }
        _drawDatasets() {
            if (this.notifyPlugins('beforeDatasetsDraw', { cancelable: !0 }) === !1) return;
            let t = this.getSortedVisibleDatasetMetas();
            for (let e = t.length - 1; e >= 0; --e) this._drawDataset(t[e]);
            this.notifyPlugins('afterDatasetsDraw');
        }
        _drawDataset(t) {
            let e = this.ctx,
                i = t._clip,
                n = !i.disabled,
                o = this.chartArea,
                r = { meta: t, index: t.index, cancelable: !0 };
            this.notifyPlugins('beforeDatasetDraw', r) !== !1 &&
                (n &&
                    ws(e, {
                        left: i.left === !1 ? 0 : o.left - i.left,
                        right: i.right === !1 ? this.width : o.right + i.right,
                        top: i.top === !1 ? 0 : o.top - i.top,
                        bottom: i.bottom === !1 ? this.height : o.bottom + i.bottom,
                    }),
                t.controller.draw(),
                n && Ss(e),
                (r.cancelable = !1),
                this.notifyPlugins('afterDatasetDraw', r));
        }
        isPointInArea(t) {
            return Ae(t, this.chartArea, this._minPadding);
        }
        getElementsAtEventForMode(t, e, i, n) {
            let o = xu.modes[e];
            return typeof o == 'function' ? o(this, t, i, n) : [];
        }
        getDatasetMeta(t) {
            let e = this.data.datasets[t],
                i = this._metasets,
                n = i.filter((o) => o && o._dataset === e).pop();
            return (
                n ||
                    ((n = {
                        type: null,
                        data: [],
                        dataset: null,
                        controller: null,
                        hidden: null,
                        xAxisID: null,
                        yAxisID: null,
                        order: (e && e.order) || 0,
                        index: t,
                        _dataset: e,
                        _parsed: [],
                        _sorted: !1,
                    }),
                    i.push(n)),
                n
            );
        }
        getContext() {
            return this.$context || (this.$context = Bt(null, { chart: this, type: 'chart' }));
        }
        getVisibleDatasetCount() {
            return this.getSortedVisibleDatasetMetas().length;
        }
        isDatasetVisible(t) {
            let e = this.data.datasets[t];
            if (!e) return !1;
            let i = this.getDatasetMeta(t);
            return typeof i.hidden == 'boolean' ? !i.hidden : !e.hidden;
        }
        setDatasetVisibility(t, e) {
            let i = this.getDatasetMeta(t);
            i.hidden = !e;
        }
        toggleDataVisibility(t) {
            this._hiddenIndices[t] = !this._hiddenIndices[t];
        }
        getDataVisibility(t) {
            return !this._hiddenIndices[t];
        }
        _updateVisibility(t, e, i) {
            let n = i ? 'show' : 'hide',
                o = this.getDatasetMeta(t),
                r = o.controller._resolveAnimations(void 0, n);
            ft(e)
                ? ((o.data[e].hidden = !i), this.update())
                : (this.setDatasetVisibility(t, i),
                  r.update(o, { visible: i }),
                  this.update((a) => (a.datasetIndex === t ? n : void 0)));
        }
        hide(t, e) {
            this._updateVisibility(t, e, !1);
        }
        show(t, e) {
            this._updateVisibility(t, e, !0);
        }
        _destroyDatasetMeta(t) {
            let e = this._metasets[t];
            e && e.controller && e.controller._destroy(), delete this._metasets[t];
        }
        _stop() {
            let t, e;
            for (this.stop(), jt.remove(this), t = 0, e = this.data.datasets.length; t < e; ++t)
                this._destroyDatasetMeta(t);
        }
        destroy() {
            this.notifyPlugins('beforeDestroy');
            let { canvas: t, ctx: e } = this;
            this._stop(),
                this.config.clearCache(),
                t &&
                    (this.unbindEvents(),
                    Nn(t, e),
                    this.platform.releaseContext(e),
                    (this.canvas = null),
                    (this.ctx = null)),
                this.notifyPlugins('destroy'),
                delete Bi[this.id],
                this.notifyPlugins('afterDestroy');
        }
        toBase64Image(...t) {
            return this.canvas.toDataURL(...t);
        }
        bindEvents() {
            this.bindUserEvents(),
                this.options.responsive ? this.bindResponsiveEvents() : (this.attached = !0);
        }
        bindUserEvents() {
            let t = this._listeners,
                e = this.platform,
                i = (o, r) => {
                    e.addEventListener(this, o, r), (t[o] = r);
                },
                n = (o, r, a) => {
                    (o.offsetX = r), (o.offsetY = a), this._eventHandler(o);
                };
            W(this.options.events, (o) => i(o, n));
        }
        bindResponsiveEvents() {
            this._responsiveListeners || (this._responsiveListeners = {});
            let t = this._responsiveListeners,
                e = this.platform,
                i = (l, c) => {
                    e.addEventListener(this, l, c), (t[l] = c);
                },
                n = (l, c) => {
                    t[l] && (e.removeEventListener(this, l, c), delete t[l]);
                },
                o = (l, c) => {
                    this.canvas && this.resize(l, c);
                },
                r,
                a = () => {
                    n('attach', a),
                        (this.attached = !0),
                        this.resize(),
                        i('resize', o),
                        i('detach', r);
                };
            (r = () => {
                (this.attached = !1),
                    n('resize', o),
                    this._stop(),
                    this._resize(0, 0),
                    i('attach', a);
            }),
                e.isAttached(this.canvas) ? a() : r();
        }
        unbindEvents() {
            W(this._listeners, (t, e) => {
                this.platform.removeEventListener(this, e, t);
            }),
                (this._listeners = {}),
                W(this._responsiveListeners, (t, e) => {
                    this.platform.removeEventListener(this, e, t);
                }),
                (this._responsiveListeners = void 0);
        }
        updateHoverStyle(t, e, i) {
            let n = i ? 'set' : 'remove',
                o,
                r,
                a,
                l;
            for (
                e === 'dataset' &&
                    ((o = this.getDatasetMeta(t[0].datasetIndex)),
                    o.controller['_' + n + 'DatasetHoverStyle']()),
                    a = 0,
                    l = t.length;
                a < l;
                ++a
            ) {
                r = t[a];
                let c = r && this.getDatasetMeta(r.datasetIndex).controller;
                c && c[n + 'HoverStyle'](r.element, r.datasetIndex, r.index);
            }
        }
        getActiveElements() {
            return this._active || [];
        }
        setActiveElements(t) {
            let e = this._active || [],
                i = t.map(({ datasetIndex: o, index: r }) => {
                    let a = this.getDatasetMeta(o);
                    if (!a) throw new Error('No dataset found at index ' + o);
                    return { datasetIndex: o, element: a.data[r], index: r };
                });
            !xs(i, e) &&
                ((this._active = i), (this._lastEvent = null), this._updateHoverStyles(i, e));
        }
        notifyPlugins(t, e, i) {
            return this._plugins.notify(this, t, e, i);
        }
        _updateHoverStyles(t, e, i) {
            let n = this.options.hover,
                o = (l, c) =>
                    l.filter(
                        (h) =>
                            !c.some(
                                (u) => h.datasetIndex === u.datasetIndex && h.index === u.index,
                            ),
                    ),
                r = o(e, t),
                a = i ? t : o(t, e);
            r.length && this.updateHoverStyle(r, n.mode, !1),
                a.length && n.mode && this.updateHoverStyle(a, n.mode, !0);
        }
        _eventHandler(t, e) {
            let i = {
                    event: t,
                    replay: e,
                    cancelable: !0,
                    inChartArea: this.isPointInArea(t),
                },
                n = (r) => (r.options.events || this.options.events).includes(t.native.type);
            if (this.notifyPlugins('beforeEvent', i, n) === !1) return;
            let o = this._handleEvent(t, e, i.inChartArea);
            return (
                (i.cancelable = !1),
                this.notifyPlugins('afterEvent', i, n),
                (o || i.changed) && this.render(),
                this
            );
        }
        _handleEvent(t, e, i) {
            let { _active: n = [], options: o } = this,
                r = e,
                a = this._getActiveElements(t, n, i, r),
                l = wr(t),
                c = td(t, this._lastEvent, i, l);
            i &&
                ((this._lastEvent = null),
                $(o.onHover, [t, a, this], this),
                l && $(o.onClick, [t, a, this], this));
            let h = !xs(a, n);
            return (
                (h || e) && ((this._active = a), this._updateHoverStyles(a, n, e)),
                (this._lastEvent = c),
                h
            );
        }
        _getActiveElements(t, e, i, n) {
            if (t.type === 'mouseout') return [];
            if (!i) return e;
            let o = this.options.hover;
            return this.getElementsAtEventForMode(t, o.mode, o, n);
        }
    },
    wa = () => W(ye.instances, (s) => s._plugins.invalidate()),
    ne = !0;
Object.defineProperties(ye, {
    defaults: { enumerable: ne, value: F },
    instances: { enumerable: ne, value: Bi },
    overrides: { enumerable: ne, value: Qt },
    registry: { enumerable: ne, value: Ft },
    version: { enumerable: ne, value: Xu },
    getChart: { enumerable: ne, value: Qa },
    register: {
        enumerable: ne,
        value: (...s) => {
            Ft.add(...s), wa();
        },
    },
    unregister: {
        enumerable: ne,
        value: (...s) => {
            Ft.remove(...s), wa();
        },
    },
});
function tl(s, t, e) {
    let { startAngle: i, pixelMargin: n, x: o, y: r, outerRadius: a, innerRadius: l } = t,
        c = n / a;
    s.beginPath(),
        s.arc(o, r, a, i - c, e + c),
        l > n ? ((c = n / l), s.arc(o, r, l, e + c, i - c, !0)) : s.arc(o, r, n, e + Z, i - Z),
        s.closePath(),
        s.clip();
}
function ed(s) {
    return Ei(s, ['outerStart', 'outerEnd', 'innerStart', 'innerEnd']);
}
function sd(s, t, e, i) {
    let n = ed(s.options.borderRadius),
        o = (e - t) / 2,
        r = Math.min(o, (i * t) / 2),
        a = (l) => {
            let c = ((e - Math.min(o, l)) * i) / 2;
            return st(l, 0, Math.min(o, c));
        };
    return {
        outerStart: a(n.outerStart),
        outerEnd: a(n.outerEnd),
        innerStart: st(n.innerStart, 0, r),
        innerEnd: st(n.innerEnd, 0, r),
    };
}
function We(s, t, e, i) {
    return { x: e + s * Math.cos(t), y: i + s * Math.sin(t) };
}
function po(s, t, e, i, n, o) {
    let { x: r, y: a, startAngle: l, pixelMargin: c, innerRadius: h } = t,
        u = Math.max(t.outerRadius + i + e - c, 0),
        d = h > 0 ? h + i + e + c : 0,
        f = 0,
        m = n - l;
    if (i) {
        let E = h > 0 ? h - i : 0,
            tt = u > 0 ? u - i : 0,
            J = (E + tt) / 2,
            de = J !== 0 ? (m * J) / (J + i) : m;
        f = (m - de) / 2;
    }
    let g = Math.max(0.001, m * u - e / Y) / u,
        p = (m - g) / 2,
        b = l + p + f,
        y = n - p - f,
        { outerStart: _, outerEnd: w, innerStart: x, innerEnd: M } = sd(t, d, u, y - b),
        S = u - _,
        v = u - w,
        k = b + _ / S,
        R = y - w / v,
        z = d + x,
        L = d + M,
        Q = b + x / z,
        ct = y - M / L;
    if ((s.beginPath(), o)) {
        if ((s.arc(r, a, u, k, R), w > 0)) {
            let J = We(v, R, r, a);
            s.arc(J.x, J.y, w, R, y + Z);
        }
        let E = We(L, y, r, a);
        if ((s.lineTo(E.x, E.y), M > 0)) {
            let J = We(L, ct, r, a);
            s.arc(J.x, J.y, M, y + Z, ct + Math.PI);
        }
        if ((s.arc(r, a, d, y - M / d, b + x / d, !0), x > 0)) {
            let J = We(z, Q, r, a);
            s.arc(J.x, J.y, x, Q + Math.PI, b - Z);
        }
        let tt = We(S, b, r, a);
        if ((s.lineTo(tt.x, tt.y), _ > 0)) {
            let J = We(S, k, r, a);
            s.arc(J.x, J.y, _, b - Z, k);
        }
    } else {
        s.moveTo(r, a);
        let E = Math.cos(k) * u + r,
            tt = Math.sin(k) * u + a;
        s.lineTo(E, tt);
        let J = Math.cos(R) * u + r,
            de = Math.sin(R) * u + a;
        s.lineTo(J, de);
    }
    s.closePath();
}
function id(s, t, e, i, n) {
    let { fullCircles: o, startAngle: r, circumference: a } = t,
        l = t.endAngle;
    if (o) {
        po(s, t, e, i, r + B, n);
        for (let c = 0; c < o; ++c) s.fill();
        isNaN(a) || ((l = r + (a % B)), a % B === 0 && (l += B));
    }
    return po(s, t, e, i, l, n), s.fill(), l;
}
function nd(s, t, e) {
    let { x: i, y: n, startAngle: o, pixelMargin: r, fullCircles: a } = t,
        l = Math.max(t.outerRadius - r, 0),
        c = t.innerRadius + r,
        h;
    for (e && tl(s, t, o + B), s.beginPath(), s.arc(i, n, c, o + B, o, !0), h = 0; h < a; ++h)
        s.stroke();
    for (s.beginPath(), s.arc(i, n, l, o, o + B), h = 0; h < a; ++h) s.stroke();
}
function od(s, t, e, i, n, o) {
    let { options: r } = t,
        { borderWidth: a, borderJoinStyle: l } = r,
        c = r.borderAlign === 'inner';
    a &&
        (c
            ? ((s.lineWidth = a * 2), (s.lineJoin = l || 'round'))
            : ((s.lineWidth = a), (s.lineJoin = l || 'bevel')),
        t.fullCircles && nd(s, t, c),
        c && tl(s, t, n),
        po(s, t, e, i, n, o),
        s.stroke());
}
var qe = class extends bt {
    constructor(t) {
        super(),
            (this.options = void 0),
            (this.circumference = void 0),
            (this.startAngle = void 0),
            (this.endAngle = void 0),
            (this.innerRadius = void 0),
            (this.outerRadius = void 0),
            (this.pixelMargin = 0),
            (this.fullCircles = 0),
            t && Object.assign(this, t);
    }
    inRange(t, e, i) {
        let n = this.getProps(['x', 'y'], i),
            { angle: o, distance: r } = kn(n, { x: t, y: e }),
            {
                startAngle: a,
                endAngle: l,
                innerRadius: c,
                outerRadius: h,
                circumference: u,
            } = this.getProps(
                ['startAngle', 'endAngle', 'innerRadius', 'outerRadius', 'circumference'],
                i,
            ),
            d = this.options.spacing / 2,
            m = D(u, l - a) >= B || Re(o, a, l),
            g = It(r, c + d, h + d);
        return m && g;
    }
    getCenterPoint(t) {
        let {
                x: e,
                y: i,
                startAngle: n,
                endAngle: o,
                innerRadius: r,
                outerRadius: a,
            } = this.getProps(
                ['x', 'y', 'startAngle', 'endAngle', 'innerRadius', 'outerRadius', 'circumference'],
                t,
            ),
            { offset: l, spacing: c } = this.options,
            h = (n + o) / 2,
            u = (r + a + c + l) / 2;
        return { x: e + Math.cos(h) * u, y: i + Math.sin(h) * u };
    }
    tooltipPosition(t) {
        return this.getCenterPoint(t);
    }
    draw(t) {
        let { options: e, circumference: i } = this,
            n = (e.offset || 0) / 2,
            o = (e.spacing || 0) / 2,
            r = e.circular;
        if (
            ((this.pixelMargin = e.borderAlign === 'inner' ? 0.33 : 0),
            (this.fullCircles = i > B ? Math.floor(i / B) : 0),
            i === 0 || this.innerRadius < 0 || this.outerRadius < 0)
        )
            return;
        t.save();
        let a = 0;
        if (n) {
            a = n / 2;
            let c = (this.startAngle + this.endAngle) / 2;
            t.translate(Math.cos(c) * a, Math.sin(c) * a), this.circumference >= Y && (a = n);
        }
        (t.fillStyle = e.backgroundColor), (t.strokeStyle = e.borderColor);
        let l = id(t, this, a, o, r);
        od(t, this, a, o, l, r), t.restore();
    }
};
qe.id = 'arc';
qe.defaults = {
    borderAlign: 'center',
    borderColor: '#fff',
    borderJoinStyle: void 0,
    borderRadius: 0,
    borderWidth: 2,
    offset: 0,
    spacing: 0,
    angle: void 0,
    circular: !0,
};
qe.defaultRoutes = { backgroundColor: 'backgroundColor' };
function el(s, t, e = t) {
    (s.lineCap = D(e.borderCapStyle, t.borderCapStyle)),
        s.setLineDash(D(e.borderDash, t.borderDash)),
        (s.lineDashOffset = D(e.borderDashOffset, t.borderDashOffset)),
        (s.lineJoin = D(e.borderJoinStyle, t.borderJoinStyle)),
        (s.lineWidth = D(e.borderWidth, t.borderWidth)),
        (s.strokeStyle = D(e.borderColor, t.borderColor));
}
function rd(s, t, e) {
    s.lineTo(e.x, e.y);
}
function ad(s) {
    return s.stepped ? Nr : s.tension || s.cubicInterpolationMode === 'monotone' ? zr : rd;
}
function sl(s, t, e = {}) {
    let i = s.length,
        { start: n = 0, end: o = i - 1 } = e,
        { start: r, end: a } = t,
        l = Math.max(n, r),
        c = Math.min(o, a),
        h = (n < r && o < r) || (n > a && o > a);
    return {
        count: i,
        start: l,
        loop: t.loop,
        ilen: c < l && !h ? i + c - l : c - l,
    };
}
function ld(s, t, e, i) {
    let { points: n, options: o } = t,
        { count: r, start: a, loop: l, ilen: c } = sl(n, e, i),
        h = ad(o),
        { move: u = !0, reverse: d } = i || {},
        f,
        m,
        g;
    for (f = 0; f <= c; ++f)
        (m = n[(a + (d ? c - f : f)) % r]),
            !m.skip && (u ? (s.moveTo(m.x, m.y), (u = !1)) : h(s, g, m, d, o.stepped), (g = m));
    return l && ((m = n[(a + (d ? c : 0)) % r]), h(s, g, m, d, o.stepped)), !!l;
}
function cd(s, t, e, i) {
    let n = t.points,
        { count: o, start: r, ilen: a } = sl(n, e, i),
        { move: l = !0, reverse: c } = i || {},
        h = 0,
        u = 0,
        d,
        f,
        m,
        g,
        p,
        b,
        y = (w) => (r + (c ? a - w : w)) % o,
        _ = () => {
            g !== p && (s.lineTo(h, p), s.lineTo(h, g), s.lineTo(h, b));
        };
    for (l && ((f = n[y(0)]), s.moveTo(f.x, f.y)), d = 0; d <= a; ++d) {
        if (((f = n[y(d)]), f.skip)) continue;
        let w = f.x,
            x = f.y,
            M = w | 0;
        M === m
            ? (x < g ? (g = x) : x > p && (p = x), (h = (u * h + w) / ++u))
            : (_(), s.lineTo(w, x), (m = M), (u = 0), (g = p = x)),
            (b = x);
    }
    _();
}
function bo(s) {
    let t = s.options,
        e = t.borderDash && t.borderDash.length;
    return !s._decimated &&
        !s._loop &&
        !t.tension &&
        t.cubicInterpolationMode !== 'monotone' &&
        !t.stepped &&
        !e
        ? cd
        : ld;
}
function hd(s) {
    return s.stepped ? Zr : s.tension || s.cubicInterpolationMode === 'monotone' ? qr : Xt;
}
function ud(s, t, e, i) {
    let n = t._path;
    n || ((n = t._path = new Path2D()), t.path(n, e, i) && n.closePath()),
        el(s, t.options),
        s.stroke(n);
}
function dd(s, t, e, i) {
    let { segments: n, options: o } = t,
        r = bo(t);
    for (let a of n)
        el(s, o, a.style),
            s.beginPath(),
            r(s, t, a, { start: e, end: e + i - 1 }) && s.closePath(),
            s.stroke();
}
var fd = typeof Path2D == 'function';
function md(s, t, e, i) {
    fd && !t.options.segment ? ud(s, t, e, i) : dd(s, t, e, i);
}
var Lt = class extends bt {
    constructor(t) {
        super(),
            (this.animated = !0),
            (this.options = void 0),
            (this._chart = void 0),
            (this._loop = void 0),
            (this._fullLoop = void 0),
            (this._path = void 0),
            (this._points = void 0),
            (this._segments = void 0),
            (this._decimated = !1),
            (this._pointsUpdated = !1),
            (this._datasetIndex = void 0),
            t && Object.assign(this, t);
    }
    updateControlPoints(t, e) {
        let i = this.options;
        if (
            (i.tension || i.cubicInterpolationMode === 'monotone') &&
            !i.stepped &&
            !this._pointsUpdated
        ) {
            let n = i.spanGaps ? this._loop : this._fullLoop;
            $r(this._points, i, t, n, e), (this._pointsUpdated = !0);
        }
    }
    set points(t) {
        (this._points = t), delete this._segments, delete this._path, (this._pointsUpdated = !1);
    }
    get points() {
        return this._points;
    }
    get segments() {
        return this._segments || (this._segments = Xr(this, this.options.segment));
    }
    first() {
        let t = this.segments,
            e = this.points;
        return t.length && e[t[0].start];
    }
    last() {
        let t = this.segments,
            e = this.points,
            i = t.length;
        return i && e[t[i - 1].end];
    }
    interpolate(t, e) {
        let i = this.options,
            n = t[e],
            o = this.points,
            r = Xn(this, { property: e, start: n, end: n });
        if (!r.length) return;
        let a = [],
            l = hd(i),
            c,
            h;
        for (c = 0, h = r.length; c < h; ++c) {
            let { start: u, end: d } = r[c],
                f = o[u],
                m = o[d];
            if (f === m) {
                a.push(f);
                continue;
            }
            let g = Math.abs((n - f[e]) / (m[e] - f[e])),
                p = l(f, m, g, i.stepped);
            (p[e] = t[e]), a.push(p);
        }
        return a.length === 1 ? a[0] : a;
    }
    pathSegment(t, e, i) {
        return bo(this)(t, this, e, i);
    }
    path(t, e, i) {
        let n = this.segments,
            o = bo(this),
            r = this._loop;
        (e = e || 0), (i = i || this.points.length - e);
        for (let a of n) r &= o(t, this, a, { start: e, end: e + i - 1 });
        return !!r;
    }
    draw(t, e, i, n) {
        let o = this.options || {};
        (this.points || []).length && o.borderWidth && (t.save(), md(t, this, i, n), t.restore()),
            this.animated && ((this._pointsUpdated = !1), (this._path = void 0));
    }
};
Lt.id = 'line';
Lt.defaults = {
    borderCapStyle: 'butt',
    borderDash: [],
    borderDashOffset: 0,
    borderJoinStyle: 'miter',
    borderWidth: 3,
    capBezierPoints: !0,
    cubicInterpolationMode: 'default',
    fill: !1,
    spanGaps: !1,
    stepped: !1,
    tension: 0,
};
Lt.defaultRoutes = {
    backgroundColor: 'backgroundColor',
    borderColor: 'borderColor',
};
Lt.descriptors = {
    _scriptable: !0,
    _indexable: (s) => s !== 'borderDash' && s !== 'fill',
};
function Sa(s, t, e, i) {
    let n = s.options,
        { [e]: o } = s.getProps([e], i);
    return Math.abs(t - o) < n.radius + n.hitRadius;
}
var Ge = class extends bt {
    constructor(t) {
        super(),
            (this.options = void 0),
            (this.parsed = void 0),
            (this.skip = void 0),
            (this.stop = void 0),
            t && Object.assign(this, t);
    }
    inRange(t, e, i) {
        let n = this.options,
            { x: o, y: r } = this.getProps(['x', 'y'], i);
        return Math.pow(t - o, 2) + Math.pow(e - r, 2) < Math.pow(n.hitRadius + n.radius, 2);
    }
    inXRange(t, e) {
        return Sa(this, t, 'x', e);
    }
    inYRange(t, e) {
        return Sa(this, t, 'y', e);
    }
    getCenterPoint(t) {
        let { x: e, y: i } = this.getProps(['x', 'y'], t);
        return { x: e, y: i };
    }
    size(t) {
        t = t || this.options || {};
        let e = t.radius || 0;
        e = Math.max(e, (e && t.hoverRadius) || 0);
        let i = (e && t.borderWidth) || 0;
        return (e + i) * 2;
    }
    draw(t, e) {
        let i = this.options;
        this.skip ||
            i.radius < 0.1 ||
            !Ae(this, e, this.size(i) / 2) ||
            ((t.strokeStyle = i.borderColor),
            (t.lineWidth = i.borderWidth),
            (t.fillStyle = i.backgroundColor),
            Oi(t, i, this.x, this.y));
    }
    getRange() {
        let t = this.options || {};
        return t.radius + t.hitRadius;
    }
};
Ge.id = 'point';
Ge.defaults = {
    borderWidth: 1,
    hitRadius: 1,
    hoverBorderWidth: 1,
    hoverRadius: 4,
    pointStyle: 'circle',
    radius: 3,
    rotation: 0,
};
Ge.defaultRoutes = {
    backgroundColor: 'backgroundColor',
    borderColor: 'borderColor',
};
function il(s, t) {
    let {
            x: e,
            y: i,
            base: n,
            width: o,
            height: r,
        } = s.getProps(['x', 'y', 'base', 'width', 'height'], t),
        a,
        l,
        c,
        h,
        u;
    return (
        s.horizontal
            ? ((u = r / 2), (a = Math.min(e, n)), (l = Math.max(e, n)), (c = i - u), (h = i + u))
            : ((u = o / 2), (a = e - u), (l = e + u), (c = Math.min(i, n)), (h = Math.max(i, n))),
        { left: a, top: c, right: l, bottom: h }
    );
}
function oe(s, t, e, i) {
    return s ? 0 : st(t, e, i);
}
function gd(s, t, e) {
    let i = s.options.borderWidth,
        n = s.borderSkipped,
        o = Vn(i);
    return {
        t: oe(n.top, o.top, 0, e),
        r: oe(n.right, o.right, 0, t),
        b: oe(n.bottom, o.bottom, 0, e),
        l: oe(n.left, o.left, 0, t),
    };
}
function pd(s, t, e) {
    let { enableBorderRadius: i } = s.getProps(['enableBorderRadius']),
        n = s.options.borderRadius,
        o = se(n),
        r = Math.min(t, e),
        a = s.borderSkipped,
        l = i || A(n);
    return {
        topLeft: oe(!l || a.top || a.left, o.topLeft, 0, r),
        topRight: oe(!l || a.top || a.right, o.topRight, 0, r),
        bottomLeft: oe(!l || a.bottom || a.left, o.bottomLeft, 0, r),
        bottomRight: oe(!l || a.bottom || a.right, o.bottomRight, 0, r),
    };
}
function bd(s) {
    let t = il(s),
        e = t.right - t.left,
        i = t.bottom - t.top,
        n = gd(s, e / 2, i / 2),
        o = pd(s, e / 2, i / 2);
    return {
        outer: { x: t.left, y: t.top, w: e, h: i, radius: o },
        inner: {
            x: t.left + n.l,
            y: t.top + n.t,
            w: e - n.l - n.r,
            h: i - n.t - n.b,
            radius: {
                topLeft: Math.max(0, o.topLeft - Math.max(n.t, n.l)),
                topRight: Math.max(0, o.topRight - Math.max(n.t, n.r)),
                bottomLeft: Math.max(0, o.bottomLeft - Math.max(n.b, n.l)),
                bottomRight: Math.max(0, o.bottomRight - Math.max(n.b, n.r)),
            },
        },
    };
}
function io(s, t, e, i) {
    let n = t === null,
        o = e === null,
        a = s && !(n && o) && il(s, i);
    return a && (n || It(t, a.left, a.right)) && (o || It(e, a.top, a.bottom));
}
function yd(s) {
    return s.topLeft || s.topRight || s.bottomLeft || s.bottomRight;
}
function xd(s, t) {
    s.rect(t.x, t.y, t.w, t.h);
}
function no(s, t, e = {}) {
    let i = s.x !== e.x ? -t : 0,
        n = s.y !== e.y ? -t : 0,
        o = (s.x + s.w !== e.x + e.w ? t : 0) - i,
        r = (s.y + s.h !== e.y + e.h ? t : 0) - n;
    return { x: s.x + i, y: s.y + n, w: s.w + o, h: s.h + r, radius: s.radius };
}
var Xe = class extends bt {
    constructor(t) {
        super(),
            (this.options = void 0),
            (this.horizontal = void 0),
            (this.base = void 0),
            (this.width = void 0),
            (this.height = void 0),
            (this.inflateAmount = void 0),
            t && Object.assign(this, t);
    }
    draw(t) {
        let {
                inflateAmount: e,
                options: { borderColor: i, backgroundColor: n },
            } = this,
            { inner: o, outer: r } = bd(this),
            a = yd(r.radius) ? Ne : xd;
        t.save(),
            (r.w !== o.w || r.h !== o.h) &&
                (t.beginPath(),
                a(t, no(r, e, o)),
                t.clip(),
                a(t, no(o, -e, r)),
                (t.fillStyle = i),
                t.fill('evenodd')),
            t.beginPath(),
            a(t, no(o, e)),
            (t.fillStyle = n),
            t.fill(),
            t.restore();
    }
    inRange(t, e, i) {
        return io(this, t, e, i);
    }
    inXRange(t, e) {
        return io(this, t, null, e);
    }
    inYRange(t, e) {
        return io(this, null, t, e);
    }
    getCenterPoint(t) {
        let {
            x: e,
            y: i,
            base: n,
            horizontal: o,
        } = this.getProps(['x', 'y', 'base', 'horizontal'], t);
        return { x: o ? (e + n) / 2 : e, y: o ? i : (i + n) / 2 };
    }
    getRange(t) {
        return t === 'x' ? this.width / 2 : this.height / 2;
    }
};
Xe.id = 'bar';
Xe.defaults = {
    borderSkipped: 'start',
    borderWidth: 0,
    borderRadius: 0,
    inflateAmount: 'auto',
    pointStyle: void 0,
};
Xe.defaultRoutes = {
    backgroundColor: 'backgroundColor',
    borderColor: 'borderColor',
};
var _d = Object.freeze({
    __proto__: null,
    ArcElement: qe,
    LineElement: Lt,
    PointElement: Ge,
    BarElement: Xe,
});
function wd(s, t, e, i, n) {
    let o = n.samples || i;
    if (o >= e) return s.slice(t, t + e);
    let r = [],
        a = (e - 2) / (o - 2),
        l = 0,
        c = t + e - 1,
        h = t,
        u,
        d,
        f,
        m,
        g;
    for (r[l++] = s[h], u = 0; u < o - 2; u++) {
        let p = 0,
            b = 0,
            y,
            _ = Math.floor((u + 1) * a) + 1 + t,
            w = Math.min(Math.floor((u + 2) * a) + 1, e) + t,
            x = w - _;
        for (y = _; y < w; y++) (p += s[y].x), (b += s[y].y);
        (p /= x), (b /= x);
        let M = Math.floor(u * a) + 1 + t,
            S = Math.min(Math.floor((u + 1) * a) + 1, e) + t,
            { x: v, y: k } = s[h];
        for (f = m = -1, y = M; y < S; y++)
            (m = 0.5 * Math.abs((v - p) * (s[y].y - k) - (v - s[y].x) * (b - k))),
                m > f && ((f = m), (d = s[y]), (g = y));
        (r[l++] = d), (h = g);
    }
    return (r[l++] = s[c]), r;
}
function Sd(s, t, e, i) {
    let n = 0,
        o = 0,
        r,
        a,
        l,
        c,
        h,
        u,
        d,
        f,
        m,
        g,
        p = [],
        b = t + e - 1,
        y = s[t].x,
        w = s[b].x - y;
    for (r = t; r < t + e; ++r) {
        (a = s[r]), (l = ((a.x - y) / w) * i), (c = a.y);
        let x = l | 0;
        if (x === h)
            c < m ? ((m = c), (u = r)) : c > g && ((g = c), (d = r)), (n = (o * n + a.x) / ++o);
        else {
            let M = r - 1;
            if (!P(u) && !P(d)) {
                let S = Math.min(u, d),
                    v = Math.max(u, d);
                S !== f && S !== M && p.push({ ...s[S], x: n }),
                    v !== f && v !== M && p.push({ ...s[v], x: n });
            }
            r > 0 && M !== f && p.push(s[M]),
                p.push(a),
                (h = x),
                (o = 0),
                (m = g = c),
                (u = d = f = r);
        }
    }
    return p;
}
function nl(s) {
    if (s._decimated) {
        let t = s._data;
        delete s._decimated, delete s._data, Object.defineProperty(s, 'data', { value: t });
    }
}
function Ma(s) {
    s.data.datasets.forEach((t) => {
        nl(t);
    });
}
function Md(s, t) {
    let e = t.length,
        i = 0,
        n,
        { iScale: o } = s,
        { min: r, max: a, minDefined: l, maxDefined: c } = o.getUserBounds();
    return (
        l && (i = st(Dt(t, o.axis, r).lo, 0, e - 1)),
        c ? (n = st(Dt(t, o.axis, a).hi + 1, i, e) - i) : (n = e - i),
        { start: i, count: n }
    );
}
var Td = {
    id: 'decimation',
    defaults: { algorithm: 'min-max', enabled: !1 },
    beforeElementsUpdate: (s, t, e) => {
        if (!e.enabled) {
            Ma(s);
            return;
        }
        let i = s.width;
        s.data.datasets.forEach((n, o) => {
            let { _data: r, indexAxis: a } = n,
                l = s.getDatasetMeta(o),
                c = r || n.data;
            if (ze([a, s.options.indexAxis]) === 'y' || !l.controller.supportsDecimation) return;
            let h = s.scales[l.xAxisID];
            if ((h.type !== 'linear' && h.type !== 'time') || s.options.parsing) return;
            let { start: u, count: d } = Md(l, c),
                f = e.threshold || 4 * i;
            if (d <= f) {
                nl(n);
                return;
            }
            P(r) &&
                ((n._data = c),
                delete n.data,
                Object.defineProperty(n, 'data', {
                    configurable: !0,
                    enumerable: !0,
                    get: function () {
                        return this._decimated;
                    },
                    set: function (g) {
                        this._data = g;
                    },
                }));
            let m;
            switch (e.algorithm) {
                case 'lttb':
                    m = wd(c, u, d, i, e);
                    break;
                case 'min-max':
                    m = Sd(c, u, d, i);
                    break;
                default:
                    throw new Error(`Unsupported decimation algorithm '${e.algorithm}'`);
            }
            n._decimated = m;
        });
    },
    destroy(s) {
        Ma(s);
    },
};
function vd(s, t, e) {
    let i = s.segments,
        n = s.points,
        o = t.points,
        r = [];
    for (let a of i) {
        let { start: l, end: c } = a;
        c = wo(l, c, n);
        let h = yo(e, n[l], n[c], a.loop);
        if (!t.segments) {
            r.push({ source: a, target: h, start: n[l], end: n[c] });
            continue;
        }
        let u = Xn(t, h);
        for (let d of u) {
            let f = yo(e, o[d.start], o[d.end], d.loop),
                m = Gn(a, n, f);
            for (let g of m)
                r.push({
                    source: g,
                    target: d,
                    start: { [e]: Ta(h, f, 'start', Math.max) },
                    end: { [e]: Ta(h, f, 'end', Math.min) },
                });
        }
    }
    return r;
}
function yo(s, t, e, i) {
    if (i) return;
    let n = t[s],
        o = e[s];
    return s === 'angle' && ((n = ht(n)), (o = ht(o))), { property: s, start: n, end: o };
}
function kd(s, t) {
    let { x: e = null, y: i = null } = s || {},
        n = t.points,
        o = [];
    return (
        t.segments.forEach(({ start: r, end: a }) => {
            a = wo(r, a, n);
            let l = n[r],
                c = n[a];
            i !== null
                ? (o.push({ x: l.x, y: i }), o.push({ x: c.x, y: i }))
                : e !== null && (o.push({ x: e, y: l.y }), o.push({ x: e, y: c.y }));
        }),
        o
    );
}
function wo(s, t, e) {
    for (; t > s; t--) {
        let i = e[t];
        if (!isNaN(i.x) && !isNaN(i.y)) break;
    }
    return t;
}
function Ta(s, t, e, i) {
    return s && t ? i(s[e], t[e]) : s ? s[e] : t ? t[e] : 0;
}
function ol(s, t) {
    let e = [],
        i = !1;
    return (
        j(s) ? ((i = !0), (e = s)) : (e = kd(s, t)),
        e.length
            ? new Lt({
                  points: e,
                  options: { tension: 0 },
                  _loop: i,
                  _fullLoop: i,
              })
            : null
    );
}
function va(s) {
    return s && s.fill !== !1;
}
function Od(s, t, e) {
    let n = s[t].fill,
        o = [t],
        r;
    if (!e) return n;
    for (; n !== !1 && o.indexOf(n) === -1; ) {
        if (!K(n)) return n;
        if (((r = s[n]), !r)) return !1;
        if (r.visible) return n;
        o.push(n), (n = r.fill);
    }
    return !1;
}
function Ed(s, t, e) {
    let i = Ad(s);
    if (A(i)) return isNaN(i.value) ? !1 : i;
    let n = parseFloat(i);
    return K(n) && Math.floor(n) === n
        ? Dd(i[0], t, n, e)
        : ['origin', 'start', 'end', 'stack', 'shape'].indexOf(i) >= 0 && i;
}
function Dd(s, t, e, i) {
    return (s === '-' || s === '+') && (e = t + e), e === t || e < 0 || e >= i ? !1 : e;
}
function Cd(s, t) {
    let e = null;
    return (
        s === 'start'
            ? (e = t.bottom)
            : s === 'end'
              ? (e = t.top)
              : A(s)
                ? (e = t.getPixelForValue(s.value))
                : t.getBasePixel && (e = t.getBasePixel()),
        e
    );
}
function Id(s, t, e) {
    let i;
    return (
        s === 'start'
            ? (i = e)
            : s === 'end'
              ? (i = t.options.reverse ? t.min : t.max)
              : A(s)
                ? (i = s.value)
                : (i = t.getBaseValue()),
        i
    );
}
function Ad(s) {
    let t = s.options,
        e = t.fill,
        i = D(e && e.target, e);
    return (
        i === void 0 && (i = !!t.backgroundColor),
        i === !1 || i === null ? !1 : i === !0 ? 'origin' : i
    );
}
function Fd(s) {
    let { scale: t, index: e, line: i } = s,
        n = [],
        o = i.segments,
        r = i.points,
        a = Ld(t, e);
    a.push(ol({ x: null, y: t.bottom }, i));
    for (let l = 0; l < o.length; l++) {
        let c = o[l];
        for (let h = c.start; h <= c.end; h++) Pd(n, r[h], a);
    }
    return new Lt({ points: n, options: {} });
}
function Ld(s, t) {
    let e = [],
        i = s.getMatchingVisibleMetas('line');
    for (let n = 0; n < i.length; n++) {
        let o = i[n];
        if (o.index === t) break;
        o.hidden || e.unshift(o.dataset);
    }
    return e;
}
function Pd(s, t, e) {
    let i = [];
    for (let n = 0; n < e.length; n++) {
        let o = e[n],
            { first: r, last: a, point: l } = Rd(o, t, 'x');
        if (!(!l || (r && a))) {
            if (r) i.unshift(l);
            else if ((s.push(l), !a)) break;
        }
    }
    s.push(...i);
}
function Rd(s, t, e) {
    let i = s.interpolate(t, e);
    if (!i) return {};
    let n = i[e],
        o = s.segments,
        r = s.points,
        a = !1,
        l = !1;
    for (let c = 0; c < o.length; c++) {
        let h = o[c],
            u = r[h.start][e],
            d = r[h.end][e];
        if (It(n, u, d)) {
            (a = n === u), (l = n === d);
            break;
        }
    }
    return { first: a, last: l, point: i };
}
var ji = class {
    constructor(t) {
        (this.x = t.x), (this.y = t.y), (this.radius = t.radius);
    }
    pathSegment(t, e, i) {
        let { x: n, y: o, radius: r } = this;
        return (e = e || { start: 0, end: B }), t.arc(n, o, r, e.end, e.start, !0), !i.bounds;
    }
    interpolate(t) {
        let { x: e, y: i, radius: n } = this,
            o = t.angle;
        return { x: e + Math.cos(o) * n, y: i + Math.sin(o) * n, angle: o };
    }
};
function Nd(s) {
    let { chart: t, fill: e, line: i } = s;
    if (K(e)) return zd(t, e);
    if (e === 'stack') return Fd(s);
    if (e === 'shape') return !0;
    let n = Vd(s);
    return n instanceof ji ? n : ol(n, i);
}
function zd(s, t) {
    let e = s.getDatasetMeta(t);
    return e && s.isDatasetVisible(t) ? e.dataset : null;
}
function Vd(s) {
    return (s.scale || {}).getPointPositionForValue ? Hd(s) : Wd(s);
}
function Wd(s) {
    let { scale: t = {}, fill: e } = s,
        i = Cd(e, t);
    if (K(i)) {
        let n = t.isHorizontal();
        return { x: n ? i : null, y: n ? null : i };
    }
    return null;
}
function Hd(s) {
    let { scale: t, fill: e } = s,
        i = t.options,
        n = t.getLabels().length,
        o = i.reverse ? t.max : t.min,
        r = Id(e, t, o),
        a = [];
    if (i.grid.circular) {
        let l = t.getPointPositionForValue(0, o);
        return new ji({
            x: l.x,
            y: l.y,
            radius: t.getDistanceFromCenterForValue(r),
        });
    }
    for (let l = 0; l < n; ++l) a.push(t.getPointPositionForValue(l, r));
    return a;
}
function oo(s, t, e) {
    let i = Nd(t),
        { line: n, scale: o, axis: r } = t,
        a = n.options,
        l = a.fill,
        c = a.backgroundColor,
        { above: h = c, below: u = c } = l || {};
    i &&
        n.points.length &&
        (ws(s, e),
        Bd(s, {
            line: n,
            target: i,
            above: h,
            below: u,
            area: e,
            scale: o,
            axis: r,
        }),
        Ss(s));
}
function Bd(s, t) {
    let { line: e, target: i, above: n, below: o, area: r, scale: a } = t,
        l = e._loop ? 'angle' : t.axis;
    s.save(),
        l === 'x' &&
            o !== n &&
            (ka(s, i, r.top),
            Oa(s, { line: e, target: i, color: n, scale: a, property: l }),
            s.restore(),
            s.save(),
            ka(s, i, r.bottom)),
        Oa(s, { line: e, target: i, color: o, scale: a, property: l }),
        s.restore();
}
function ka(s, t, e) {
    let { segments: i, points: n } = t,
        o = !0,
        r = !1;
    s.beginPath();
    for (let a of i) {
        let { start: l, end: c } = a,
            h = n[l],
            u = n[wo(l, c, n)];
        o ? (s.moveTo(h.x, h.y), (o = !1)) : (s.lineTo(h.x, e), s.lineTo(h.x, h.y)),
            (r = !!t.pathSegment(s, a, { move: r })),
            r ? s.closePath() : s.lineTo(u.x, e);
    }
    s.lineTo(t.first().x, e), s.closePath(), s.clip();
}
function Oa(s, t) {
    let { line: e, target: i, property: n, color: o, scale: r } = t,
        a = vd(e, i, n);
    for (let { source: l, target: c, start: h, end: u } of a) {
        let { style: { backgroundColor: d = o } = {} } = l,
            f = i !== !0;
        s.save(), (s.fillStyle = d), jd(s, r, f && yo(n, h, u)), s.beginPath();
        let m = !!e.pathSegment(s, l),
            g;
        if (f) {
            m ? s.closePath() : Ea(s, i, u, n);
            let p = !!i.pathSegment(s, c, { move: m, reverse: !0 });
            (g = m && p), g || Ea(s, i, h, n);
        }
        s.closePath(), s.fill(g ? 'evenodd' : 'nonzero'), s.restore();
    }
}
function jd(s, t, e) {
    let { top: i, bottom: n } = t.chart.chartArea,
        { property: o, start: r, end: a } = e || {};
    o === 'x' && (s.beginPath(), s.rect(r, i, a - r, n - i), s.clip());
}
function Ea(s, t, e, i) {
    let n = t.interpolate(e, i);
    n && s.lineTo(n.x, n.y);
}
var $d = {
        id: 'filler',
        afterDatasetsUpdate(s, t, e) {
            let i = (s.data.datasets || []).length,
                n = [],
                o,
                r,
                a,
                l;
            for (r = 0; r < i; ++r)
                (o = s.getDatasetMeta(r)),
                    (a = o.dataset),
                    (l = null),
                    a &&
                        a.options &&
                        a instanceof Lt &&
                        (l = {
                            visible: s.isDatasetVisible(r),
                            index: r,
                            fill: Ed(a, r, i),
                            chart: s,
                            axis: o.controller.options.indexAxis,
                            scale: o.vScale,
                            line: a,
                        }),
                    (o.$filler = l),
                    n.push(l);
            for (r = 0; r < i; ++r)
                (l = n[r]), !(!l || l.fill === !1) && (l.fill = Od(n, r, e.propagate));
        },
        beforeDraw(s, t, e) {
            let i = e.drawTime === 'beforeDraw',
                n = s.getSortedVisibleDatasetMetas(),
                o = s.chartArea;
            for (let r = n.length - 1; r >= 0; --r) {
                let a = n[r].$filler;
                a && (a.line.updateControlPoints(o, a.axis), i && a.fill && oo(s.ctx, a, o));
            }
        },
        beforeDatasetsDraw(s, t, e) {
            if (e.drawTime !== 'beforeDatasetsDraw') return;
            let i = s.getSortedVisibleDatasetMetas();
            for (let n = i.length - 1; n >= 0; --n) {
                let o = i[n].$filler;
                va(o) && oo(s.ctx, o, s.chartArea);
            }
        },
        beforeDatasetDraw(s, t, e) {
            let i = t.meta.$filler;
            !va(i) || e.drawTime !== 'beforeDatasetDraw' || oo(s.ctx, i, s.chartArea);
        },
        defaults: { propagate: !0, drawTime: 'beforeDatasetDraw' },
    },
    Da = (s, t) => {
        let { boxHeight: e = t, boxWidth: i = t } = s;
        return (
            s.usePointStyle && ((e = Math.min(e, t)), (i = s.pointStyleWidth || Math.min(i, t))),
            { boxWidth: i, boxHeight: e, itemHeight: Math.max(t, e) }
        );
    },
    Ud = (s, t) =>
        s !== null && t !== null && s.datasetIndex === t.datasetIndex && s.index === t.index,
    $i = class extends bt {
        constructor(t) {
            super(),
                (this._added = !1),
                (this.legendHitBoxes = []),
                (this._hoveredItem = null),
                (this.doughnutMode = !1),
                (this.chart = t.chart),
                (this.options = t.options),
                (this.ctx = t.ctx),
                (this.legendItems = void 0),
                (this.columnSizes = void 0),
                (this.lineWidths = void 0),
                (this.maxHeight = void 0),
                (this.maxWidth = void 0),
                (this.top = void 0),
                (this.bottom = void 0),
                (this.left = void 0),
                (this.right = void 0),
                (this.height = void 0),
                (this.width = void 0),
                (this._margins = void 0),
                (this.position = void 0),
                (this.weight = void 0),
                (this.fullSize = void 0);
        }
        update(t, e, i) {
            (this.maxWidth = t),
                (this.maxHeight = e),
                (this._margins = i),
                this.setDimensions(),
                this.buildLabels(),
                this.fit();
        }
        setDimensions() {
            this.isHorizontal()
                ? ((this.width = this.maxWidth),
                  (this.left = this._margins.left),
                  (this.right = this.width))
                : ((this.height = this.maxHeight),
                  (this.top = this._margins.top),
                  (this.bottom = this.height));
        }
        buildLabels() {
            let t = this.options.labels || {},
                e = $(t.generateLabels, [this.chart], this) || [];
            t.filter && (e = e.filter((i) => t.filter(i, this.chart.data))),
                t.sort && (e = e.sort((i, n) => t.sort(i, n, this.chart.data))),
                this.options.reverse && e.reverse(),
                (this.legendItems = e);
        }
        fit() {
            let { options: t, ctx: e } = this;
            if (!t.display) {
                this.width = this.height = 0;
                return;
            }
            let i = t.labels,
                n = et(i.font),
                o = n.size,
                r = this._computeTitleHeight(),
                { boxWidth: a, itemHeight: l } = Da(i, o),
                c,
                h;
            (e.font = n.string),
                this.isHorizontal()
                    ? ((c = this.maxWidth), (h = this._fitRows(r, o, a, l) + 10))
                    : ((h = this.maxHeight), (c = this._fitCols(r, o, a, l) + 10)),
                (this.width = Math.min(c, t.maxWidth || this.maxWidth)),
                (this.height = Math.min(h, t.maxHeight || this.maxHeight));
        }
        _fitRows(t, e, i, n) {
            let {
                    ctx: o,
                    maxWidth: r,
                    options: {
                        labels: { padding: a },
                    },
                } = this,
                l = (this.legendHitBoxes = []),
                c = (this.lineWidths = [0]),
                h = n + a,
                u = t;
            (o.textAlign = 'left'), (o.textBaseline = 'middle');
            let d = -1,
                f = -h;
            return (
                this.legendItems.forEach((m, g) => {
                    let p = i + e / 2 + o.measureText(m.text).width;
                    (g === 0 || c[c.length - 1] + p + 2 * a > r) &&
                        ((u += h), (c[c.length - (g > 0 ? 0 : 1)] = 0), (f += h), d++),
                        (l[g] = {
                            left: 0,
                            top: f,
                            row: d,
                            width: p,
                            height: n,
                        }),
                        (c[c.length - 1] += p + a);
                }),
                u
            );
        }
        _fitCols(t, e, i, n) {
            let {
                    ctx: o,
                    maxHeight: r,
                    options: {
                        labels: { padding: a },
                    },
                } = this,
                l = (this.legendHitBoxes = []),
                c = (this.columnSizes = []),
                h = r - t,
                u = a,
                d = 0,
                f = 0,
                m = 0,
                g = 0;
            return (
                this.legendItems.forEach((p, b) => {
                    let y = i + e / 2 + o.measureText(p.text).width;
                    b > 0 &&
                        f + n + 2 * a > h &&
                        ((u += d + a),
                        c.push({ width: d, height: f }),
                        (m += d + a),
                        g++,
                        (d = f = 0)),
                        (l[b] = {
                            left: m,
                            top: f,
                            col: g,
                            width: y,
                            height: n,
                        }),
                        (d = Math.max(d, y)),
                        (f += n + a);
                }),
                (u += d),
                c.push({ width: d, height: f }),
                u
            );
        }
        adjustHitBoxes() {
            if (!this.options.display) return;
            let t = this._computeTitleHeight(),
                {
                    legendHitBoxes: e,
                    options: {
                        align: i,
                        labels: { padding: n },
                        rtl: o,
                    },
                } = this,
                r = pe(o, this.left, this.width);
            if (this.isHorizontal()) {
                let a = 0,
                    l = rt(i, this.left + n, this.right - this.lineWidths[a]);
                for (let c of e)
                    a !== c.row &&
                        ((a = c.row), (l = rt(i, this.left + n, this.right - this.lineWidths[a]))),
                        (c.top += this.top + t + n),
                        (c.left = r.leftForLtr(r.x(l), c.width)),
                        (l += c.width + n);
            } else {
                let a = 0,
                    l = rt(i, this.top + t + n, this.bottom - this.columnSizes[a].height);
                for (let c of e)
                    c.col !== a &&
                        ((a = c.col),
                        (l = rt(i, this.top + t + n, this.bottom - this.columnSizes[a].height))),
                        (c.top = l),
                        (c.left += this.left + n),
                        (c.left = r.leftForLtr(r.x(c.left), c.width)),
                        (l += c.height + n);
            }
        }
        isHorizontal() {
            return this.options.position === 'top' || this.options.position === 'bottom';
        }
        draw() {
            if (this.options.display) {
                let t = this.ctx;
                ws(t, this), this._draw(), Ss(t);
            }
        }
        _draw() {
            let { options: t, columnSizes: e, lineWidths: i, ctx: n } = this,
                { align: o, labels: r } = t,
                a = F.color,
                l = pe(t.rtl, this.left, this.width),
                c = et(r.font),
                { color: h, padding: u } = r,
                d = c.size,
                f = d / 2,
                m;
            this.drawTitle(),
                (n.textAlign = l.textAlign('left')),
                (n.textBaseline = 'middle'),
                (n.lineWidth = 0.5),
                (n.font = c.string);
            let { boxWidth: g, boxHeight: p, itemHeight: b } = Da(r, d),
                y = function (S, v, k) {
                    if (isNaN(g) || g <= 0 || isNaN(p) || p < 0) return;
                    n.save();
                    let R = D(k.lineWidth, 1);
                    if (
                        ((n.fillStyle = D(k.fillStyle, a)),
                        (n.lineCap = D(k.lineCap, 'butt')),
                        (n.lineDashOffset = D(k.lineDashOffset, 0)),
                        (n.lineJoin = D(k.lineJoin, 'miter')),
                        (n.lineWidth = R),
                        (n.strokeStyle = D(k.strokeStyle, a)),
                        n.setLineDash(D(k.lineDash, [])),
                        r.usePointStyle)
                    ) {
                        let z = {
                                radius: (p * Math.SQRT2) / 2,
                                pointStyle: k.pointStyle,
                                rotation: k.rotation,
                                borderWidth: R,
                            },
                            L = l.xPlus(S, g / 2),
                            Q = v + f;
                        zn(n, z, L, Q, r.pointStyleWidth && g);
                    } else {
                        let z = v + Math.max((d - p) / 2, 0),
                            L = l.leftForLtr(S, g),
                            Q = se(k.borderRadius);
                        n.beginPath(),
                            Object.values(Q).some((ct) => ct !== 0)
                                ? Ne(n, { x: L, y: z, w: g, h: p, radius: Q })
                                : n.rect(L, z, g, p),
                            n.fill(),
                            R !== 0 && n.stroke();
                    }
                    n.restore();
                },
                _ = function (S, v, k) {
                    ee(n, k.text, S, v + b / 2, c, {
                        strikethrough: k.hidden,
                        textAlign: l.textAlign(k.textAlign),
                    });
                },
                w = this.isHorizontal(),
                x = this._computeTitleHeight();
            w
                ? (m = {
                      x: rt(o, this.left + u, this.right - i[0]),
                      y: this.top + u + x,
                      line: 0,
                  })
                : (m = {
                      x: this.left + u,
                      y: rt(o, this.top + x + u, this.bottom - e[0].height),
                      line: 0,
                  }),
                Zn(this.ctx, t.textDirection);
            let M = b + u;
            this.legendItems.forEach((S, v) => {
                (n.strokeStyle = S.fontColor || h), (n.fillStyle = S.fontColor || h);
                let k = n.measureText(S.text).width,
                    R = l.textAlign(S.textAlign || (S.textAlign = r.textAlign)),
                    z = g + f + k,
                    L = m.x,
                    Q = m.y;
                l.setWidth(this.width),
                    w
                        ? v > 0 &&
                          L + z + u > this.right &&
                          ((Q = m.y += M),
                          m.line++,
                          (L = m.x = rt(o, this.left + u, this.right - i[m.line])))
                        : v > 0 &&
                          Q + M > this.bottom &&
                          ((L = m.x = L + e[m.line].width + u),
                          m.line++,
                          (Q = m.y = rt(o, this.top + x + u, this.bottom - e[m.line].height)));
                let ct = l.x(L);
                y(ct, Q, S),
                    (L = Cr(R, L + g + f, w ? L + z : this.right, t.rtl)),
                    _(l.x(L), Q, S),
                    w ? (m.x += z + u) : (m.y += M);
            }),
                qn(this.ctx, t.textDirection);
        }
        drawTitle() {
            let t = this.options,
                e = t.title,
                i = et(e.font),
                n = at(e.padding);
            if (!e.display) return;
            let o = pe(t.rtl, this.left, this.width),
                r = this.ctx,
                a = e.position,
                l = i.size / 2,
                c = n.top + l,
                h,
                u = this.left,
                d = this.width;
            if (this.isHorizontal())
                (d = Math.max(...this.lineWidths)),
                    (h = this.top + c),
                    (u = rt(t.align, u, this.right - d));
            else {
                let m = this.columnSizes.reduce((g, p) => Math.max(g, p.height), 0);
                h =
                    c +
                    rt(
                        t.align,
                        this.top,
                        this.bottom - m - t.labels.padding - this._computeTitleHeight(),
                    );
            }
            let f = rt(a, u, u + d);
            (r.textAlign = o.textAlign(vi(a))),
                (r.textBaseline = 'middle'),
                (r.strokeStyle = e.color),
                (r.fillStyle = e.color),
                (r.font = i.string),
                ee(r, e.text, f, h, i);
        }
        _computeTitleHeight() {
            let t = this.options.title,
                e = et(t.font),
                i = at(t.padding);
            return t.display ? e.lineHeight + i.height : 0;
        }
        _getLegendItemAt(t, e) {
            let i, n, o;
            if (It(t, this.left, this.right) && It(e, this.top, this.bottom)) {
                for (o = this.legendHitBoxes, i = 0; i < o.length; ++i)
                    if (
                        ((n = o[i]),
                        It(t, n.left, n.left + n.width) && It(e, n.top, n.top + n.height))
                    )
                        return this.legendItems[i];
            }
            return null;
        }
        handleEvent(t) {
            let e = this.options;
            if (!Yd(t.type, e)) return;
            let i = this._getLegendItemAt(t.x, t.y);
            if (t.type === 'mousemove' || t.type === 'mouseout') {
                let n = this._hoveredItem,
                    o = Ud(n, i);
                n && !o && $(e.onLeave, [t, n, this], this),
                    (this._hoveredItem = i),
                    i && !o && $(e.onHover, [t, i, this], this);
            } else i && $(e.onClick, [t, i, this], this);
        }
    };
function Yd(s, t) {
    return !!(
        ((s === 'mousemove' || s === 'mouseout') && (t.onHover || t.onLeave)) ||
        (t.onClick && (s === 'click' || s === 'mouseup'))
    );
}
var Zd = {
        id: 'legend',
        _element: $i,
        start(s, t, e) {
            let i = (s.legend = new $i({ ctx: s.ctx, options: e, chart: s }));
            lt.configure(s, i, e), lt.addBox(s, i);
        },
        stop(s) {
            lt.removeBox(s, s.legend), delete s.legend;
        },
        beforeUpdate(s, t, e) {
            let i = s.legend;
            lt.configure(s, i, e), (i.options = e);
        },
        afterUpdate(s) {
            let t = s.legend;
            t.buildLabels(), t.adjustHitBoxes();
        },
        afterEvent(s, t) {
            t.replay || s.legend.handleEvent(t.event);
        },
        defaults: {
            display: !0,
            position: 'top',
            align: 'center',
            fullSize: !0,
            reverse: !1,
            weight: 1e3,
            onClick(s, t, e) {
                let i = t.datasetIndex,
                    n = e.chart;
                n.isDatasetVisible(i) ? (n.hide(i), (t.hidden = !0)) : (n.show(i), (t.hidden = !1));
            },
            onHover: null,
            onLeave: null,
            labels: {
                color: (s) => s.chart.options.color,
                boxWidth: 40,
                padding: 10,
                generateLabels(s) {
                    let t = s.data.datasets,
                        {
                            labels: { usePointStyle: e, pointStyle: i, textAlign: n, color: o },
                        } = s.legend.options;
                    return s._getSortedDatasetMetas().map((r) => {
                        let a = r.controller.getStyle(e ? 0 : void 0),
                            l = at(a.borderWidth);
                        return {
                            text: t[r.index].label,
                            fillStyle: a.backgroundColor,
                            fontColor: o,
                            hidden: !r.visible,
                            lineCap: a.borderCapStyle,
                            lineDash: a.borderDash,
                            lineDashOffset: a.borderDashOffset,
                            lineJoin: a.borderJoinStyle,
                            lineWidth: (l.width + l.height) / 4,
                            strokeStyle: a.borderColor,
                            pointStyle: i || a.pointStyle,
                            rotation: a.rotation,
                            textAlign: n || a.textAlign,
                            borderRadius: 0,
                            datasetIndex: r.index,
                        };
                    }, this);
                },
            },
            title: {
                color: (s) => s.chart.options.color,
                display: !1,
                position: 'center',
                text: '',
            },
        },
        descriptors: {
            _scriptable: (s) => !s.startsWith('on'),
            labels: {
                _scriptable: (s) => !['generateLabels', 'filter', 'sort'].includes(s),
            },
        },
    },
    Fs = class extends bt {
        constructor(t) {
            super(),
                (this.chart = t.chart),
                (this.options = t.options),
                (this.ctx = t.ctx),
                (this._padding = void 0),
                (this.top = void 0),
                (this.bottom = void 0),
                (this.left = void 0),
                (this.right = void 0),
                (this.width = void 0),
                (this.height = void 0),
                (this.position = void 0),
                (this.weight = void 0),
                (this.fullSize = void 0);
        }
        update(t, e) {
            let i = this.options;
            if (((this.left = 0), (this.top = 0), !i.display)) {
                this.width = this.height = this.right = this.bottom = 0;
                return;
            }
            (this.width = this.right = t), (this.height = this.bottom = e);
            let n = j(i.text) ? i.text.length : 1;
            this._padding = at(i.padding);
            let o = n * et(i.font).lineHeight + this._padding.height;
            this.isHorizontal() ? (this.height = o) : (this.width = o);
        }
        isHorizontal() {
            let t = this.options.position;
            return t === 'top' || t === 'bottom';
        }
        _drawArgs(t) {
            let { top: e, left: i, bottom: n, right: o, options: r } = this,
                a = r.align,
                l = 0,
                c,
                h,
                u;
            return (
                this.isHorizontal()
                    ? ((h = rt(a, i, o)), (u = e + t), (c = o - i))
                    : (r.position === 'left'
                          ? ((h = i + t), (u = rt(a, n, e)), (l = Y * -0.5))
                          : ((h = o - t), (u = rt(a, e, n)), (l = Y * 0.5)),
                      (c = n - e)),
                { titleX: h, titleY: u, maxWidth: c, rotation: l }
            );
        }
        draw() {
            let t = this.ctx,
                e = this.options;
            if (!e.display) return;
            let i = et(e.font),
                o = i.lineHeight / 2 + this._padding.top,
                { titleX: r, titleY: a, maxWidth: l, rotation: c } = this._drawArgs(o);
            ee(t, e.text, 0, 0, i, {
                color: e.color,
                maxWidth: l,
                rotation: c,
                textAlign: vi(e.align),
                textBaseline: 'middle',
                translation: [r, a],
            });
        }
    };
function qd(s, t) {
    let e = new Fs({ ctx: s.ctx, options: t, chart: s });
    lt.configure(s, e, t), lt.addBox(s, e), (s.titleBlock = e);
}
var Gd = {
        id: 'title',
        _element: Fs,
        start(s, t, e) {
            qd(s, e);
        },
        stop(s) {
            let t = s.titleBlock;
            lt.removeBox(s, t), delete s.titleBlock;
        },
        beforeUpdate(s, t, e) {
            let i = s.titleBlock;
            lt.configure(s, i, e), (i.options = e);
        },
        defaults: {
            align: 'center',
            display: !1,
            font: { weight: 'bold' },
            fullSize: !0,
            padding: 10,
            position: 'top',
            text: '',
            weight: 2e3,
        },
        defaultRoutes: { color: 'color' },
        descriptors: { _scriptable: !0, _indexable: !1 },
    },
    Pi = new WeakMap(),
    Xd = {
        id: 'subtitle',
        start(s, t, e) {
            let i = new Fs({ ctx: s.ctx, options: e, chart: s });
            lt.configure(s, i, e), lt.addBox(s, i), Pi.set(s, i);
        },
        stop(s) {
            lt.removeBox(s, Pi.get(s)), Pi.delete(s);
        },
        beforeUpdate(s, t, e) {
            let i = Pi.get(s);
            lt.configure(s, i, e), (i.options = e);
        },
        defaults: {
            align: 'center',
            display: !1,
            font: { weight: 'normal' },
            fullSize: !0,
            padding: 0,
            position: 'top',
            text: '',
            weight: 1500,
        },
        defaultRoutes: { color: 'color' },
        descriptors: { _scriptable: !0, _indexable: !1 },
    },
    Ds = {
        average(s) {
            if (!s.length) return !1;
            let t,
                e,
                i = 0,
                n = 0,
                o = 0;
            for (t = 0, e = s.length; t < e; ++t) {
                let r = s[t].element;
                if (r && r.hasValue()) {
                    let a = r.tooltipPosition();
                    (i += a.x), (n += a.y), ++o;
                }
            }
            return { x: i / o, y: n / o };
        },
        nearest(s, t) {
            if (!s.length) return !1;
            let e = t.x,
                i = t.y,
                n = Number.POSITIVE_INFINITY,
                o,
                r,
                a;
            for (o = 0, r = s.length; o < r; ++o) {
                let l = s[o].element;
                if (l && l.hasValue()) {
                    let c = l.getCenterPoint(),
                        h = _i(t, c);
                    h < n && ((n = h), (a = l));
                }
            }
            if (a) {
                let l = a.tooltipPosition();
                (e = l.x), (i = l.y);
            }
            return { x: e, y: i };
        },
    };
function At(s, t) {
    return t && (j(t) ? Array.prototype.push.apply(s, t) : s.push(t)), s;
}
function $t(s) {
    return (typeof s == 'string' || s instanceof String) &&
        s.indexOf(`
`) > -1
        ? s.split(`
`)
        : s;
}
function Kd(s, t) {
    let { element: e, datasetIndex: i, index: n } = t,
        o = s.getDatasetMeta(i).controller,
        { label: r, value: a } = o.getLabelAndValue(n);
    return {
        chart: s,
        label: r,
        parsed: o.getParsed(n),
        raw: s.data.datasets[i].data[n],
        formattedValue: a,
        dataset: o.getDataset(),
        dataIndex: n,
        datasetIndex: i,
        element: e,
    };
}
function Ca(s, t) {
    let e = s.chart.ctx,
        { body: i, footer: n, title: o } = s,
        { boxWidth: r, boxHeight: a } = t,
        l = et(t.bodyFont),
        c = et(t.titleFont),
        h = et(t.footerFont),
        u = o.length,
        d = n.length,
        f = i.length,
        m = at(t.padding),
        g = m.height,
        p = 0,
        b = i.reduce((w, x) => w + x.before.length + x.lines.length + x.after.length, 0);
    if (
        ((b += s.beforeBody.length + s.afterBody.length),
        u && (g += u * c.lineHeight + (u - 1) * t.titleSpacing + t.titleMarginBottom),
        b)
    ) {
        let w = t.displayColors ? Math.max(a, l.lineHeight) : l.lineHeight;
        g += f * w + (b - f) * l.lineHeight + (b - 1) * t.bodySpacing;
    }
    d && (g += t.footerMarginTop + d * h.lineHeight + (d - 1) * t.footerSpacing);
    let y = 0,
        _ = function (w) {
            p = Math.max(p, e.measureText(w).width + y);
        };
    return (
        e.save(),
        (e.font = c.string),
        W(s.title, _),
        (e.font = l.string),
        W(s.beforeBody.concat(s.afterBody), _),
        (y = t.displayColors ? r + 2 + t.boxPadding : 0),
        W(i, (w) => {
            W(w.before, _), W(w.lines, _), W(w.after, _);
        }),
        (y = 0),
        (e.font = h.string),
        W(s.footer, _),
        e.restore(),
        (p += m.width),
        { width: p, height: g }
    );
}
function Jd(s, t) {
    let { y: e, height: i } = t;
    return e < i / 2 ? 'top' : e > s.height - i / 2 ? 'bottom' : 'center';
}
function Qd(s, t, e, i) {
    let { x: n, width: o } = i,
        r = e.caretSize + e.caretPadding;
    if ((s === 'left' && n + o + r > t.width) || (s === 'right' && n - o - r < 0)) return !0;
}
function tf(s, t, e, i) {
    let { x: n, width: o } = e,
        {
            width: r,
            chartArea: { left: a, right: l },
        } = s,
        c = 'center';
    return (
        i === 'center'
            ? (c = n <= (a + l) / 2 ? 'left' : 'right')
            : n <= o / 2
              ? (c = 'left')
              : n >= r - o / 2 && (c = 'right'),
        Qd(c, s, t, e) && (c = 'center'),
        c
    );
}
function Ia(s, t, e) {
    let i = e.yAlign || t.yAlign || Jd(s, e);
    return { xAlign: e.xAlign || t.xAlign || tf(s, t, e, i), yAlign: i };
}
function ef(s, t) {
    let { x: e, width: i } = s;
    return t === 'right' ? (e -= i) : t === 'center' && (e -= i / 2), e;
}
function sf(s, t, e) {
    let { y: i, height: n } = s;
    return t === 'top' ? (i += e) : t === 'bottom' ? (i -= n + e) : (i -= n / 2), i;
}
function Aa(s, t, e, i) {
    let { caretSize: n, caretPadding: o, cornerRadius: r } = s,
        { xAlign: a, yAlign: l } = e,
        c = n + o,
        { topLeft: h, topRight: u, bottomLeft: d, bottomRight: f } = se(r),
        m = ef(t, a),
        g = sf(t, l, c);
    return (
        l === 'center'
            ? a === 'left'
                ? (m += c)
                : a === 'right' && (m -= c)
            : a === 'left'
              ? (m -= Math.max(h, d) + n)
              : a === 'right' && (m += Math.max(u, f) + n),
        { x: st(m, 0, i.width - t.width), y: st(g, 0, i.height - t.height) }
    );
}
function Ri(s, t, e) {
    let i = at(e.padding);
    return t === 'center'
        ? s.x + s.width / 2
        : t === 'right'
          ? s.x + s.width - i.right
          : s.x + i.left;
}
function Fa(s) {
    return At([], $t(s));
}
function nf(s, t, e) {
    return Bt(s, { tooltip: t, tooltipItems: e, type: 'tooltip' });
}
function La(s, t) {
    let e = t && t.dataset && t.dataset.tooltip && t.dataset.tooltip.callbacks;
    return e ? s.override(e) : s;
}
var Ls = class extends bt {
    constructor(t) {
        super(),
            (this.opacity = 0),
            (this._active = []),
            (this._eventPosition = void 0),
            (this._size = void 0),
            (this._cachedAnimations = void 0),
            (this._tooltipItems = []),
            (this.$animations = void 0),
            (this.$context = void 0),
            (this.chart = t.chart || t._chart),
            (this._chart = this.chart),
            (this.options = t.options),
            (this.dataPoints = void 0),
            (this.title = void 0),
            (this.beforeBody = void 0),
            (this.body = void 0),
            (this.afterBody = void 0),
            (this.footer = void 0),
            (this.xAlign = void 0),
            (this.yAlign = void 0),
            (this.x = void 0),
            (this.y = void 0),
            (this.height = void 0),
            (this.width = void 0),
            (this.caretX = void 0),
            (this.caretY = void 0),
            (this.labelColors = void 0),
            (this.labelPointStyles = void 0),
            (this.labelTextColors = void 0);
    }
    initialize(t) {
        (this.options = t), (this._cachedAnimations = void 0), (this.$context = void 0);
    }
    _resolveAnimations() {
        let t = this._cachedAnimations;
        if (t) return t;
        let e = this.chart,
            i = this.options.setContext(this.getContext()),
            n = i.enabled && e.options.animation && i.animations,
            o = new Vi(this.chart, n);
        return n._cacheable && (this._cachedAnimations = Object.freeze(o)), o;
    }
    getContext() {
        return (
            this.$context || (this.$context = nf(this.chart.getContext(), this, this._tooltipItems))
        );
    }
    getTitle(t, e) {
        let { callbacks: i } = e,
            n = i.beforeTitle.apply(this, [t]),
            o = i.title.apply(this, [t]),
            r = i.afterTitle.apply(this, [t]),
            a = [];
        return (a = At(a, $t(n))), (a = At(a, $t(o))), (a = At(a, $t(r))), a;
    }
    getBeforeBody(t, e) {
        return Fa(e.callbacks.beforeBody.apply(this, [t]));
    }
    getBody(t, e) {
        let { callbacks: i } = e,
            n = [];
        return (
            W(t, (o) => {
                let r = { before: [], lines: [], after: [] },
                    a = La(i, o);
                At(r.before, $t(a.beforeLabel.call(this, o))),
                    At(r.lines, a.label.call(this, o)),
                    At(r.after, $t(a.afterLabel.call(this, o))),
                    n.push(r);
            }),
            n
        );
    }
    getAfterBody(t, e) {
        return Fa(e.callbacks.afterBody.apply(this, [t]));
    }
    getFooter(t, e) {
        let { callbacks: i } = e,
            n = i.beforeFooter.apply(this, [t]),
            o = i.footer.apply(this, [t]),
            r = i.afterFooter.apply(this, [t]),
            a = [];
        return (a = At(a, $t(n))), (a = At(a, $t(o))), (a = At(a, $t(r))), a;
    }
    _createItems(t) {
        let e = this._active,
            i = this.chart.data,
            n = [],
            o = [],
            r = [],
            a = [],
            l,
            c;
        for (l = 0, c = e.length; l < c; ++l) a.push(Kd(this.chart, e[l]));
        return (
            t.filter && (a = a.filter((h, u, d) => t.filter(h, u, d, i))),
            t.itemSort && (a = a.sort((h, u) => t.itemSort(h, u, i))),
            W(a, (h) => {
                let u = La(t.callbacks, h);
                n.push(u.labelColor.call(this, h)),
                    o.push(u.labelPointStyle.call(this, h)),
                    r.push(u.labelTextColor.call(this, h));
            }),
            (this.labelColors = n),
            (this.labelPointStyles = o),
            (this.labelTextColors = r),
            (this.dataPoints = a),
            a
        );
    }
    update(t, e) {
        let i = this.options.setContext(this.getContext()),
            n = this._active,
            o,
            r = [];
        if (!n.length) this.opacity !== 0 && (o = { opacity: 0 });
        else {
            let a = Ds[i.position].call(this, n, this._eventPosition);
            (r = this._createItems(i)),
                (this.title = this.getTitle(r, i)),
                (this.beforeBody = this.getBeforeBody(r, i)),
                (this.body = this.getBody(r, i)),
                (this.afterBody = this.getAfterBody(r, i)),
                (this.footer = this.getFooter(r, i));
            let l = (this._size = Ca(this, i)),
                c = Object.assign({}, a, l),
                h = Ia(this.chart, i, c),
                u = Aa(i, c, h, this.chart);
            (this.xAlign = h.xAlign),
                (this.yAlign = h.yAlign),
                (o = {
                    opacity: 1,
                    x: u.x,
                    y: u.y,
                    width: l.width,
                    height: l.height,
                    caretX: a.x,
                    caretY: a.y,
                });
        }
        (this._tooltipItems = r),
            (this.$context = void 0),
            o && this._resolveAnimations().update(this, o),
            t &&
                i.external &&
                i.external.call(this, {
                    chart: this.chart,
                    tooltip: this,
                    replay: e,
                });
    }
    drawCaret(t, e, i, n) {
        let o = this.getCaretPosition(t, i, n);
        e.lineTo(o.x1, o.y1), e.lineTo(o.x2, o.y2), e.lineTo(o.x3, o.y3);
    }
    getCaretPosition(t, e, i) {
        let { xAlign: n, yAlign: o } = this,
            { caretSize: r, cornerRadius: a } = i,
            { topLeft: l, topRight: c, bottomLeft: h, bottomRight: u } = se(a),
            { x: d, y: f } = t,
            { width: m, height: g } = e,
            p,
            b,
            y,
            _,
            w,
            x;
        return (
            o === 'center'
                ? ((w = f + g / 2),
                  n === 'left'
                      ? ((p = d), (b = p - r), (_ = w + r), (x = w - r))
                      : ((p = d + m), (b = p + r), (_ = w - r), (x = w + r)),
                  (y = p))
                : (n === 'left'
                      ? (b = d + Math.max(l, h) + r)
                      : n === 'right'
                        ? (b = d + m - Math.max(c, u) - r)
                        : (b = this.caretX),
                  o === 'top'
                      ? ((_ = f), (w = _ - r), (p = b - r), (y = b + r))
                      : ((_ = f + g), (w = _ + r), (p = b + r), (y = b - r)),
                  (x = _)),
            { x1: p, x2: b, x3: y, y1: _, y2: w, y3: x }
        );
    }
    drawTitle(t, e, i) {
        let n = this.title,
            o = n.length,
            r,
            a,
            l;
        if (o) {
            let c = pe(i.rtl, this.x, this.width);
            for (
                t.x = Ri(this, i.titleAlign, i),
                    e.textAlign = c.textAlign(i.titleAlign),
                    e.textBaseline = 'middle',
                    r = et(i.titleFont),
                    a = i.titleSpacing,
                    e.fillStyle = i.titleColor,
                    e.font = r.string,
                    l = 0;
                l < o;
                ++l
            )
                e.fillText(n[l], c.x(t.x), t.y + r.lineHeight / 2),
                    (t.y += r.lineHeight + a),
                    l + 1 === o && (t.y += i.titleMarginBottom - a);
        }
    }
    _drawColorBox(t, e, i, n, o) {
        let r = this.labelColors[i],
            a = this.labelPointStyles[i],
            { boxHeight: l, boxWidth: c, boxPadding: h } = o,
            u = et(o.bodyFont),
            d = Ri(this, 'left', o),
            f = n.x(d),
            m = l < u.lineHeight ? (u.lineHeight - l) / 2 : 0,
            g = e.y + m;
        if (o.usePointStyle) {
            let p = {
                    radius: Math.min(c, l) / 2,
                    pointStyle: a.pointStyle,
                    rotation: a.rotation,
                    borderWidth: 1,
                },
                b = n.leftForLtr(f, c) + c / 2,
                y = g + l / 2;
            (t.strokeStyle = o.multiKeyBackground),
                (t.fillStyle = o.multiKeyBackground),
                Oi(t, p, b, y),
                (t.strokeStyle = r.borderColor),
                (t.fillStyle = r.backgroundColor),
                Oi(t, p, b, y);
        } else {
            (t.lineWidth = A(r.borderWidth)
                ? Math.max(...Object.values(r.borderWidth))
                : r.borderWidth || 1),
                (t.strokeStyle = r.borderColor),
                t.setLineDash(r.borderDash || []),
                (t.lineDashOffset = r.borderDashOffset || 0);
            let p = n.leftForLtr(f, c - h),
                b = n.leftForLtr(n.xPlus(f, 1), c - h - 2),
                y = se(r.borderRadius);
            Object.values(y).some((_) => _ !== 0)
                ? (t.beginPath(),
                  (t.fillStyle = o.multiKeyBackground),
                  Ne(t, { x: p, y: g, w: c, h: l, radius: y }),
                  t.fill(),
                  t.stroke(),
                  (t.fillStyle = r.backgroundColor),
                  t.beginPath(),
                  Ne(t, { x: b, y: g + 1, w: c - 2, h: l - 2, radius: y }),
                  t.fill())
                : ((t.fillStyle = o.multiKeyBackground),
                  t.fillRect(p, g, c, l),
                  t.strokeRect(p, g, c, l),
                  (t.fillStyle = r.backgroundColor),
                  t.fillRect(b, g + 1, c - 2, l - 2));
        }
        t.fillStyle = this.labelTextColors[i];
    }
    drawBody(t, e, i) {
        let { body: n } = this,
            {
                bodySpacing: o,
                bodyAlign: r,
                displayColors: a,
                boxHeight: l,
                boxWidth: c,
                boxPadding: h,
            } = i,
            u = et(i.bodyFont),
            d = u.lineHeight,
            f = 0,
            m = pe(i.rtl, this.x, this.width),
            g = function (v) {
                e.fillText(v, m.x(t.x + f), t.y + d / 2), (t.y += d + o);
            },
            p = m.textAlign(r),
            b,
            y,
            _,
            w,
            x,
            M,
            S;
        for (
            e.textAlign = r,
                e.textBaseline = 'middle',
                e.font = u.string,
                t.x = Ri(this, p, i),
                e.fillStyle = i.bodyColor,
                W(this.beforeBody, g),
                f = a && p !== 'right' ? (r === 'center' ? c / 2 + h : c + 2 + h) : 0,
                w = 0,
                M = n.length;
            w < M;
            ++w
        ) {
            for (
                b = n[w],
                    y = this.labelTextColors[w],
                    e.fillStyle = y,
                    W(b.before, g),
                    _ = b.lines,
                    a &&
                        _.length &&
                        (this._drawColorBox(e, t, w, m, i), (d = Math.max(u.lineHeight, l))),
                    x = 0,
                    S = _.length;
                x < S;
                ++x
            )
                g(_[x]), (d = u.lineHeight);
            W(b.after, g);
        }
        (f = 0), (d = u.lineHeight), W(this.afterBody, g), (t.y -= o);
    }
    drawFooter(t, e, i) {
        let n = this.footer,
            o = n.length,
            r,
            a;
        if (o) {
            let l = pe(i.rtl, this.x, this.width);
            for (
                t.x = Ri(this, i.footerAlign, i),
                    t.y += i.footerMarginTop,
                    e.textAlign = l.textAlign(i.footerAlign),
                    e.textBaseline = 'middle',
                    r = et(i.footerFont),
                    e.fillStyle = i.footerColor,
                    e.font = r.string,
                    a = 0;
                a < o;
                ++a
            )
                e.fillText(n[a], l.x(t.x), t.y + r.lineHeight / 2),
                    (t.y += r.lineHeight + i.footerSpacing);
        }
    }
    drawBackground(t, e, i, n) {
        let { xAlign: o, yAlign: r } = this,
            { x: a, y: l } = t,
            { width: c, height: h } = i,
            { topLeft: u, topRight: d, bottomLeft: f, bottomRight: m } = se(n.cornerRadius);
        (e.fillStyle = n.backgroundColor),
            (e.strokeStyle = n.borderColor),
            (e.lineWidth = n.borderWidth),
            e.beginPath(),
            e.moveTo(a + u, l),
            r === 'top' && this.drawCaret(t, e, i, n),
            e.lineTo(a + c - d, l),
            e.quadraticCurveTo(a + c, l, a + c, l + d),
            r === 'center' && o === 'right' && this.drawCaret(t, e, i, n),
            e.lineTo(a + c, l + h - m),
            e.quadraticCurveTo(a + c, l + h, a + c - m, l + h),
            r === 'bottom' && this.drawCaret(t, e, i, n),
            e.lineTo(a + f, l + h),
            e.quadraticCurveTo(a, l + h, a, l + h - f),
            r === 'center' && o === 'left' && this.drawCaret(t, e, i, n),
            e.lineTo(a, l + u),
            e.quadraticCurveTo(a, l, a + u, l),
            e.closePath(),
            e.fill(),
            n.borderWidth > 0 && e.stroke();
    }
    _updateAnimationTarget(t) {
        let e = this.chart,
            i = this.$animations,
            n = i && i.x,
            o = i && i.y;
        if (n || o) {
            let r = Ds[t.position].call(this, this._active, this._eventPosition);
            if (!r) return;
            let a = (this._size = Ca(this, t)),
                l = Object.assign({}, r, this._size),
                c = Ia(e, t, l),
                h = Aa(t, l, c, e);
            (n._to !== h.x || o._to !== h.y) &&
                ((this.xAlign = c.xAlign),
                (this.yAlign = c.yAlign),
                (this.width = a.width),
                (this.height = a.height),
                (this.caretX = r.x),
                (this.caretY = r.y),
                this._resolveAnimations().update(this, h));
        }
    }
    _willRender() {
        return !!this.opacity;
    }
    draw(t) {
        let e = this.options.setContext(this.getContext()),
            i = this.opacity;
        if (!i) return;
        this._updateAnimationTarget(e);
        let n = { width: this.width, height: this.height },
            o = { x: this.x, y: this.y };
        i = Math.abs(i) < 0.001 ? 0 : i;
        let r = at(e.padding),
            a =
                this.title.length ||
                this.beforeBody.length ||
                this.body.length ||
                this.afterBody.length ||
                this.footer.length;
        e.enabled &&
            a &&
            (t.save(),
            (t.globalAlpha = i),
            this.drawBackground(o, t, n, e),
            Zn(t, e.textDirection),
            (o.y += r.top),
            this.drawTitle(o, t, e),
            this.drawBody(o, t, e),
            this.drawFooter(o, t, e),
            qn(t, e.textDirection),
            t.restore());
    }
    getActiveElements() {
        return this._active || [];
    }
    setActiveElements(t, e) {
        let i = this._active,
            n = t.map(({ datasetIndex: a, index: l }) => {
                let c = this.chart.getDatasetMeta(a);
                if (!c) throw new Error('Cannot find a dataset at index ' + a);
                return { datasetIndex: a, element: c.data[l], index: l };
            }),
            o = !xs(i, n),
            r = this._positionChanged(n, e);
        (o || r) &&
            ((this._active = n),
            (this._eventPosition = e),
            (this._ignoreReplayEvents = !0),
            this.update(!0));
    }
    handleEvent(t, e, i = !0) {
        if (e && this._ignoreReplayEvents) return !1;
        this._ignoreReplayEvents = !1;
        let n = this.options,
            o = this._active || [],
            r = this._getActiveElements(t, o, e, i),
            a = this._positionChanged(r, t),
            l = e || !xs(r, o) || a;
        return (
            l &&
                ((this._active = r),
                (n.enabled || n.external) &&
                    ((this._eventPosition = { x: t.x, y: t.y }), this.update(!0, e))),
            l
        );
    }
    _getActiveElements(t, e, i, n) {
        let o = this.options;
        if (t.type === 'mouseout') return [];
        if (!n) return e;
        let r = this.chart.getElementsAtEventForMode(t, o.mode, o, i);
        return o.reverse && r.reverse(), r;
    }
    _positionChanged(t, e) {
        let { caretX: i, caretY: n, options: o } = this,
            r = Ds[o.position].call(this, t, e);
        return r !== !1 && (i !== r.x || n !== r.y);
    }
};
Ls.positioners = Ds;
var of = {
        id: 'tooltip',
        _element: Ls,
        positioners: Ds,
        afterInit(s, t, e) {
            e && (s.tooltip = new Ls({ chart: s, options: e }));
        },
        beforeUpdate(s, t, e) {
            s.tooltip && s.tooltip.initialize(e);
        },
        reset(s, t, e) {
            s.tooltip && s.tooltip.initialize(e);
        },
        afterDraw(s) {
            let t = s.tooltip;
            if (t && t._willRender()) {
                let e = { tooltip: t };
                if (s.notifyPlugins('beforeTooltipDraw', e) === !1) return;
                t.draw(s.ctx), s.notifyPlugins('afterTooltipDraw', e);
            }
        },
        afterEvent(s, t) {
            if (s.tooltip) {
                let e = t.replay;
                s.tooltip.handleEvent(t.event, e, t.inChartArea) && (t.changed = !0);
            }
        },
        defaults: {
            enabled: !0,
            external: null,
            position: 'average',
            backgroundColor: 'rgba(0,0,0,0.8)',
            titleColor: '#fff',
            titleFont: { weight: 'bold' },
            titleSpacing: 2,
            titleMarginBottom: 6,
            titleAlign: 'left',
            bodyColor: '#fff',
            bodySpacing: 2,
            bodyFont: {},
            bodyAlign: 'left',
            footerColor: '#fff',
            footerSpacing: 2,
            footerMarginTop: 6,
            footerFont: { weight: 'bold' },
            footerAlign: 'left',
            padding: 6,
            caretPadding: 2,
            caretSize: 5,
            cornerRadius: 6,
            boxHeight: (s, t) => t.bodyFont.size,
            boxWidth: (s, t) => t.bodyFont.size,
            multiKeyBackground: '#fff',
            displayColors: !0,
            boxPadding: 0,
            borderColor: 'rgba(0,0,0,0)',
            borderWidth: 0,
            animation: { duration: 400, easing: 'easeOutQuart' },
            animations: {
                numbers: {
                    type: 'number',
                    properties: ['x', 'y', 'width', 'height', 'caretX', 'caretY'],
                },
                opacity: { easing: 'linear', duration: 200 },
            },
            callbacks: {
                beforeTitle: Ct,
                title(s) {
                    if (s.length > 0) {
                        let t = s[0],
                            e = t.chart.data.labels,
                            i = e ? e.length : 0;
                        if (this && this.options && this.options.mode === 'dataset')
                            return t.dataset.label || '';
                        if (t.label) return t.label;
                        if (i > 0 && t.dataIndex < i) return e[t.dataIndex];
                    }
                    return '';
                },
                afterTitle: Ct,
                beforeBody: Ct,
                beforeLabel: Ct,
                label(s) {
                    if (this && this.options && this.options.mode === 'dataset')
                        return s.label + ': ' + s.formattedValue || s.formattedValue;
                    let t = s.dataset.label || '';
                    t && (t += ': ');
                    let e = s.formattedValue;
                    return P(e) || (t += e), t;
                },
                labelColor(s) {
                    let e = s.chart.getDatasetMeta(s.datasetIndex).controller.getStyle(s.dataIndex);
                    return {
                        borderColor: e.borderColor,
                        backgroundColor: e.backgroundColor,
                        borderWidth: e.borderWidth,
                        borderDash: e.borderDash,
                        borderDashOffset: e.borderDashOffset,
                        borderRadius: 0,
                    };
                },
                labelTextColor() {
                    return this.options.bodyColor;
                },
                labelPointStyle(s) {
                    let e = s.chart.getDatasetMeta(s.datasetIndex).controller.getStyle(s.dataIndex);
                    return { pointStyle: e.pointStyle, rotation: e.rotation };
                },
                afterLabel: Ct,
                afterBody: Ct,
                beforeFooter: Ct,
                footer: Ct,
                afterFooter: Ct,
            },
        },
        defaultRoutes: {
            bodyFont: 'font',
            footerFont: 'font',
            titleFont: 'font',
        },
        descriptors: {
            _scriptable: (s) => s !== 'filter' && s !== 'itemSort' && s !== 'external',
            _indexable: !1,
            callbacks: { _scriptable: !1, _indexable: !1 },
            animation: { _fallback: !1 },
            animations: { _fallback: 'animation' },
        },
        additionalOptionScopes: ['interaction'],
    },
    rf = Object.freeze({
        __proto__: null,
        Decimation: Td,
        Filler: $d,
        Legend: Zd,
        SubTitle: Xd,
        Title: Gd,
        Tooltip: of,
    }),
    af = (s, t, e, i) => (
        typeof t == 'string'
            ? ((e = s.push(t) - 1), i.unshift({ index: e, label: t }))
            : isNaN(t) && (e = null),
        e
    );
function lf(s, t, e, i) {
    let n = s.indexOf(t);
    if (n === -1) return af(s, t, e, i);
    let o = s.lastIndexOf(t);
    return n !== o ? e : n;
}
var cf = (s, t) => (s === null ? null : st(Math.round(s), 0, t)),
    Ke = class extends Ut {
        constructor(t) {
            super(t), (this._startValue = void 0), (this._valueRange = 0), (this._addedLabels = []);
        }
        init(t) {
            let e = this._addedLabels;
            if (e.length) {
                let i = this.getLabels();
                for (let { index: n, label: o } of e) i[n] === o && i.splice(n, 1);
                this._addedLabels = [];
            }
            super.init(t);
        }
        parse(t, e) {
            if (P(t)) return null;
            let i = this.getLabels();
            return (
                (e = isFinite(e) && i[e] === t ? e : lf(i, t, D(e, t), this._addedLabels)),
                cf(e, i.length - 1)
            );
        }
        determineDataLimits() {
            let { minDefined: t, maxDefined: e } = this.getUserBounds(),
                { min: i, max: n } = this.getMinMax(!0);
            this.options.bounds === 'ticks' &&
                (t || (i = 0), e || (n = this.getLabels().length - 1)),
                (this.min = i),
                (this.max = n);
        }
        buildTicks() {
            let t = this.min,
                e = this.max,
                i = this.options.offset,
                n = [],
                o = this.getLabels();
            (o = t === 0 && e === o.length - 1 ? o : o.slice(t, e + 1)),
                (this._valueRange = Math.max(o.length - (i ? 0 : 1), 1)),
                (this._startValue = this.min - (i ? 0.5 : 0));
            for (let r = t; r <= e; r++) n.push({ value: r });
            return n;
        }
        getLabelForValue(t) {
            let e = this.getLabels();
            return t >= 0 && t < e.length ? e[t] : t;
        }
        configure() {
            super.configure(), this.isHorizontal() || (this._reversePixels = !this._reversePixels);
        }
        getPixelForValue(t) {
            return (
                typeof t != 'number' && (t = this.parse(t)),
                t === null
                    ? NaN
                    : this.getPixelForDecimal((t - this._startValue) / this._valueRange)
            );
        }
        getPixelForTick(t) {
            let e = this.ticks;
            return t < 0 || t > e.length - 1 ? null : this.getPixelForValue(e[t].value);
        }
        getValueForPixel(t) {
            return Math.round(this._startValue + this.getDecimalForPixel(t) * this._valueRange);
        }
        getBasePixel() {
            return this.bottom;
        }
    };
Ke.id = 'category';
Ke.defaults = { ticks: { callback: Ke.prototype.getLabelForValue } };
function hf(s, t) {
    let e = [],
        {
            bounds: n,
            step: o,
            min: r,
            max: a,
            precision: l,
            count: c,
            maxTicks: h,
            maxDigits: u,
            includeBounds: d,
        } = s,
        f = o || 1,
        m = h - 1,
        { min: g, max: p } = t,
        b = !P(r),
        y = !P(a),
        _ = !P(c),
        w = (p - g) / (u + 1),
        x = Mn((p - g) / m / f) * f,
        M,
        S,
        v,
        k;
    if (x < 1e-14 && !b && !y) return [{ value: g }, { value: p }];
    (k = Math.ceil(p / x) - Math.floor(g / x)),
        k > m && (x = Mn((k * x) / m / f) * f),
        P(l) || ((M = Math.pow(10, l)), (x = Math.ceil(x * M) / M)),
        n === 'ticks'
            ? ((S = Math.floor(g / x) * x), (v = Math.ceil(p / x) * x))
            : ((S = g), (v = p)),
        b && y && o && Mr((a - r) / o, x / 1e3)
            ? ((k = Math.round(Math.min((a - r) / x, h))), (x = (a - r) / k), (S = r), (v = a))
            : _
              ? ((S = b ? r : S), (v = y ? a : v), (k = c - 1), (x = (v - S) / k))
              : ((k = (v - S) / x),
                Pe(k, Math.round(k), x / 1e3) ? (k = Math.round(k)) : (k = Math.ceil(k)));
    let R = Math.max(vn(x), vn(S));
    (M = Math.pow(10, P(l) ? R : l)), (S = Math.round(S * M) / M), (v = Math.round(v * M) / M);
    let z = 0;
    for (
        b &&
        (d && S !== r
            ? (e.push({ value: r }),
              S < r && z++,
              Pe(Math.round((S + z * x) * M) / M, r, Pa(r, w, s)) && z++)
            : S < r && z++);
        z < k;
        ++z
    )
        e.push({ value: Math.round((S + z * x) * M) / M });
    return (
        y && d && v !== a
            ? e.length && Pe(e[e.length - 1].value, a, Pa(a, w, s))
                ? (e[e.length - 1].value = a)
                : e.push({ value: a })
            : (!y || v === a) && e.push({ value: v }),
        e
    );
}
function Pa(s, t, { horizontal: e, minRotation: i }) {
    let n = _t(i),
        o = (e ? Math.sin(n) : Math.cos(n)) || 0.001,
        r = 0.75 * t * ('' + s).length;
    return Math.min(t / o, r);
}
var Je = class extends Ut {
        constructor(t) {
            super(t),
                (this.start = void 0),
                (this.end = void 0),
                (this._startValue = void 0),
                (this._endValue = void 0),
                (this._valueRange = 0);
        }
        parse(t, e) {
            return P(t) || ((typeof t == 'number' || t instanceof Number) && !isFinite(+t))
                ? null
                : +t;
        }
        handleTickRangeOptions() {
            let { beginAtZero: t } = this.options,
                { minDefined: e, maxDefined: i } = this.getUserBounds(),
                { min: n, max: o } = this,
                r = (l) => (n = e ? n : l),
                a = (l) => (o = i ? o : l);
            if (t) {
                let l = Tt(n),
                    c = Tt(o);
                l < 0 && c < 0 ? a(0) : l > 0 && c > 0 && r(0);
            }
            if (n === o) {
                let l = 1;
                (o >= Number.MAX_SAFE_INTEGER || n <= Number.MIN_SAFE_INTEGER) &&
                    (l = Math.abs(o * 0.05)),
                    a(o + l),
                    t || r(n - l);
            }
            (this.min = n), (this.max = o);
        }
        getTickLimit() {
            let t = this.options.ticks,
                { maxTicksLimit: e, stepSize: i } = t,
                n;
            return (
                i
                    ? ((n = Math.ceil(this.max / i) - Math.floor(this.min / i) + 1),
                      n > 1e3 &&
                          (console.warn(
                              `scales.${this.id}.ticks.stepSize: ${i} would result generating up to ${n} ticks. Limiting to 1000.`,
                          ),
                          (n = 1e3)))
                    : ((n = this.computeTickLimit()), (e = e || 11)),
                e && (n = Math.min(e, n)),
                n
            );
        }
        computeTickLimit() {
            return Number.POSITIVE_INFINITY;
        }
        buildTicks() {
            let t = this.options,
                e = t.ticks,
                i = this.getTickLimit();
            i = Math.max(2, i);
            let n = {
                    maxTicks: i,
                    bounds: t.bounds,
                    min: t.min,
                    max: t.max,
                    precision: e.precision,
                    step: e.stepSize,
                    count: e.count,
                    maxDigits: this._maxDigits(),
                    horizontal: this.isHorizontal(),
                    minRotation: e.minRotation || 0,
                    includeBounds: e.includeBounds !== !1,
                },
                o = this._range || this,
                r = hf(n, o);
            return (
                t.bounds === 'ticks' && Tn(r, this, 'value'),
                t.reverse
                    ? (r.reverse(), (this.start = this.max), (this.end = this.min))
                    : ((this.start = this.min), (this.end = this.max)),
                r
            );
        }
        configure() {
            let t = this.ticks,
                e = this.min,
                i = this.max;
            if ((super.configure(), this.options.offset && t.length)) {
                let n = (i - e) / Math.max(t.length - 1, 1) / 2;
                (e -= n), (i += n);
            }
            (this._startValue = e), (this._endValue = i), (this._valueRange = i - e);
        }
        getLabelForValue(t) {
            return Ve(t, this.chart.options.locale, this.options.ticks.format);
        }
    },
    Ps = class extends Je {
        determineDataLimits() {
            let { min: t, max: e } = this.getMinMax(!0);
            (this.min = K(t) ? t : 0), (this.max = K(e) ? e : 1), this.handleTickRangeOptions();
        }
        computeTickLimit() {
            let t = this.isHorizontal(),
                e = t ? this.width : this.height,
                i = _t(this.options.ticks.minRotation),
                n = (t ? Math.sin(i) : Math.cos(i)) || 0.001,
                o = this._resolveTickFontOptions(0);
            return Math.ceil(e / Math.min(40, o.lineHeight / n));
        }
        getPixelForValue(t) {
            return t === null
                ? NaN
                : this.getPixelForDecimal((t - this._startValue) / this._valueRange);
        }
        getValueForPixel(t) {
            return this._startValue + this.getDecimalForPixel(t) * this._valueRange;
        }
    };
Ps.id = 'linear';
Ps.defaults = { ticks: { callback: Ui.formatters.numeric } };
function Ra(s) {
    return s / Math.pow(10, Math.floor(gt(s))) === 1;
}
function uf(s, t) {
    let e = Math.floor(gt(t.max)),
        i = Math.ceil(t.max / Math.pow(10, e)),
        n = [],
        o = mt(s.min, Math.pow(10, Math.floor(gt(t.min)))),
        r = Math.floor(gt(o)),
        a = Math.floor(o / Math.pow(10, r)),
        l = r < 0 ? Math.pow(10, Math.abs(r)) : 1;
    do
        n.push({ value: o, major: Ra(o) }),
            ++a,
            a === 10 && ((a = 1), ++r, (l = r >= 0 ? 1 : l)),
            (o = Math.round(a * Math.pow(10, r) * l) / l);
    while (r < e || (r === e && a < i));
    let c = mt(s.max, o);
    return n.push({ value: c, major: Ra(o) }), n;
}
var Rs = class extends Ut {
    constructor(t) {
        super(t),
            (this.start = void 0),
            (this.end = void 0),
            (this._startValue = void 0),
            (this._valueRange = 0);
    }
    parse(t, e) {
        let i = Je.prototype.parse.apply(this, [t, e]);
        if (i === 0) {
            this._zero = !0;
            return;
        }
        return K(i) && i > 0 ? i : null;
    }
    determineDataLimits() {
        let { min: t, max: e } = this.getMinMax(!0);
        (this.min = K(t) ? Math.max(0, t) : null),
            (this.max = K(e) ? Math.max(0, e) : null),
            this.options.beginAtZero && (this._zero = !0),
            this.handleTickRangeOptions();
    }
    handleTickRangeOptions() {
        let { minDefined: t, maxDefined: e } = this.getUserBounds(),
            i = this.min,
            n = this.max,
            o = (l) => (i = t ? i : l),
            r = (l) => (n = e ? n : l),
            a = (l, c) => Math.pow(10, Math.floor(gt(l)) + c);
        i === n && (i <= 0 ? (o(1), r(10)) : (o(a(i, -1)), r(a(n, 1)))),
            i <= 0 && o(a(n, -1)),
            n <= 0 && r(a(i, 1)),
            this._zero && this.min !== this._suggestedMin && i === a(this.min, 0) && o(a(i, -1)),
            (this.min = i),
            (this.max = n);
    }
    buildTicks() {
        let t = this.options,
            e = { min: this._userMin, max: this._userMax },
            i = uf(e, this);
        return (
            t.bounds === 'ticks' && Tn(i, this, 'value'),
            t.reverse
                ? (i.reverse(), (this.start = this.max), (this.end = this.min))
                : ((this.start = this.min), (this.end = this.max)),
            i
        );
    }
    getLabelForValue(t) {
        return t === void 0 ? '0' : Ve(t, this.chart.options.locale, this.options.ticks.format);
    }
    configure() {
        let t = this.min;
        super.configure(), (this._startValue = gt(t)), (this._valueRange = gt(this.max) - gt(t));
    }
    getPixelForValue(t) {
        return (
            (t === void 0 || t === 0) && (t = this.min),
            t === null || isNaN(t)
                ? NaN
                : this.getPixelForDecimal(
                      t === this.min ? 0 : (gt(t) - this._startValue) / this._valueRange,
                  )
        );
    }
    getValueForPixel(t) {
        let e = this.getDecimalForPixel(t);
        return Math.pow(10, this._startValue + e * this._valueRange);
    }
};
Rs.id = 'logarithmic';
Rs.defaults = {
    ticks: { callback: Ui.formatters.logarithmic, major: { enabled: !0 } },
};
function xo(s) {
    let t = s.ticks;
    if (t.display && s.display) {
        let e = at(t.backdropPadding);
        return D(t.font && t.font.size, F.font.size) + e.height;
    }
    return 0;
}
function df(s, t, e) {
    return (e = j(e) ? e : [e]), { w: Rr(s, t.string, e), h: e.length * t.lineHeight };
}
function Na(s, t, e, i, n) {
    return s === i || s === n
        ? { start: t - e / 2, end: t + e / 2 }
        : s < i || s > n
          ? { start: t - e, end: t }
          : { start: t, end: t + e };
}
function ff(s) {
    let t = {
            l: s.left + s._padding.left,
            r: s.right - s._padding.right,
            t: s.top + s._padding.top,
            b: s.bottom - s._padding.bottom,
        },
        e = Object.assign({}, t),
        i = [],
        n = [],
        o = s._pointLabels.length,
        r = s.options.pointLabels,
        a = r.centerPointLabels ? Y / o : 0;
    for (let l = 0; l < o; l++) {
        let c = r.setContext(s.getPointLabelContext(l));
        n[l] = c.padding;
        let h = s.getPointPosition(l, s.drawingArea + n[l], a),
            u = et(c.font),
            d = df(s.ctx, u, s._pointLabels[l]);
        i[l] = d;
        let f = ht(s.getIndexAngle(l) + a),
            m = Math.round(Mi(f)),
            g = Na(m, h.x, d.w, 0, 180),
            p = Na(m, h.y, d.h, 90, 270);
        mf(e, t, f, g, p);
    }
    s.setCenterPoint(t.l - e.l, e.r - t.r, t.t - e.t, e.b - t.b),
        (s._pointLabelItems = gf(s, i, n));
}
function mf(s, t, e, i, n) {
    let o = Math.abs(Math.sin(e)),
        r = Math.abs(Math.cos(e)),
        a = 0,
        l = 0;
    i.start < t.l
        ? ((a = (t.l - i.start) / o), (s.l = Math.min(s.l, t.l - a)))
        : i.end > t.r && ((a = (i.end - t.r) / o), (s.r = Math.max(s.r, t.r + a))),
        n.start < t.t
            ? ((l = (t.t - n.start) / r), (s.t = Math.min(s.t, t.t - l)))
            : n.end > t.b && ((l = (n.end - t.b) / r), (s.b = Math.max(s.b, t.b + l)));
}
function gf(s, t, e) {
    let i = [],
        n = s._pointLabels.length,
        o = s.options,
        r = xo(o) / 2,
        a = s.drawingArea,
        l = o.pointLabels.centerPointLabels ? Y / n : 0;
    for (let c = 0; c < n; c++) {
        let h = s.getPointPosition(c, a + r + e[c], l),
            u = Math.round(Mi(ht(h.angle + Z))),
            d = t[c],
            f = yf(h.y, d.h, u),
            m = pf(u),
            g = bf(h.x, d.w, m);
        i.push({
            x: h.x,
            y: f,
            textAlign: m,
            left: g,
            top: f,
            right: g + d.w,
            bottom: f + d.h,
        });
    }
    return i;
}
function pf(s) {
    return s === 0 || s === 180 ? 'center' : s < 180 ? 'left' : 'right';
}
function bf(s, t, e) {
    return e === 'right' ? (s -= t) : e === 'center' && (s -= t / 2), s;
}
function yf(s, t, e) {
    return e === 90 || e === 270 ? (s -= t / 2) : (e > 270 || e < 90) && (s -= t), s;
}
function xf(s, t) {
    let {
        ctx: e,
        options: { pointLabels: i },
    } = s;
    for (let n = t - 1; n >= 0; n--) {
        let o = i.setContext(s.getPointLabelContext(n)),
            r = et(o.font),
            {
                x: a,
                y: l,
                textAlign: c,
                left: h,
                top: u,
                right: d,
                bottom: f,
            } = s._pointLabelItems[n],
            { backdropColor: m } = o;
        if (!P(m)) {
            let g = se(o.borderRadius),
                p = at(o.backdropPadding);
            e.fillStyle = m;
            let b = h - p.left,
                y = u - p.top,
                _ = d - h + p.width,
                w = f - u + p.height;
            Object.values(g).some((x) => x !== 0)
                ? (e.beginPath(), Ne(e, { x: b, y, w: _, h: w, radius: g }), e.fill())
                : e.fillRect(b, y, _, w);
        }
        ee(e, s._pointLabels[n], a, l + r.lineHeight / 2, r, {
            color: o.color,
            textAlign: c,
            textBaseline: 'middle',
        });
    }
}
function rl(s, t, e, i) {
    let { ctx: n } = s;
    if (e) n.arc(s.xCenter, s.yCenter, t, 0, B);
    else {
        let o = s.getPointPosition(0, t);
        n.moveTo(o.x, o.y);
        for (let r = 1; r < i; r++) (o = s.getPointPosition(r, t)), n.lineTo(o.x, o.y);
    }
}
function _f(s, t, e, i) {
    let n = s.ctx,
        o = t.circular,
        { color: r, lineWidth: a } = t;
    (!o && !i) ||
        !r ||
        !a ||
        e < 0 ||
        (n.save(),
        (n.strokeStyle = r),
        (n.lineWidth = a),
        n.setLineDash(t.borderDash),
        (n.lineDashOffset = t.borderDashOffset),
        n.beginPath(),
        rl(s, e, o, i),
        n.closePath(),
        n.stroke(),
        n.restore());
}
function wf(s, t, e) {
    return Bt(s, { label: e, index: t, type: 'pointLabel' });
}
var xe = class extends Je {
    constructor(t) {
        super(t),
            (this.xCenter = void 0),
            (this.yCenter = void 0),
            (this.drawingArea = void 0),
            (this._pointLabels = []),
            (this._pointLabelItems = []);
    }
    setDimensions() {
        let t = (this._padding = at(xo(this.options) / 2)),
            e = (this.width = this.maxWidth - t.width),
            i = (this.height = this.maxHeight - t.height);
        (this.xCenter = Math.floor(this.left + e / 2 + t.left)),
            (this.yCenter = Math.floor(this.top + i / 2 + t.top)),
            (this.drawingArea = Math.floor(Math.min(e, i) / 2));
    }
    determineDataLimits() {
        let { min: t, max: e } = this.getMinMax(!1);
        (this.min = K(t) && !isNaN(t) ? t : 0),
            (this.max = K(e) && !isNaN(e) ? e : 0),
            this.handleTickRangeOptions();
    }
    computeTickLimit() {
        return Math.ceil(this.drawingArea / xo(this.options));
    }
    generateTickLabels(t) {
        Je.prototype.generateTickLabels.call(this, t),
            (this._pointLabels = this.getLabels()
                .map((e, i) => {
                    let n = $(this.options.pointLabels.callback, [e, i], this);
                    return n || n === 0 ? n : '';
                })
                .filter((e, i) => this.chart.getDataVisibility(i)));
    }
    fit() {
        let t = this.options;
        t.display && t.pointLabels.display ? ff(this) : this.setCenterPoint(0, 0, 0, 0);
    }
    setCenterPoint(t, e, i, n) {
        (this.xCenter += Math.floor((t - e) / 2)),
            (this.yCenter += Math.floor((i - n) / 2)),
            (this.drawingArea -= Math.min(this.drawingArea / 2, Math.max(t, e, i, n)));
    }
    getIndexAngle(t) {
        let e = B / (this._pointLabels.length || 1),
            i = this.options.startAngle || 0;
        return ht(t * e + _t(i));
    }
    getDistanceFromCenterForValue(t) {
        if (P(t)) return NaN;
        let e = this.drawingArea / (this.max - this.min);
        return this.options.reverse ? (this.max - t) * e : (t - this.min) * e;
    }
    getValueForDistanceFromCenter(t) {
        if (P(t)) return NaN;
        let e = t / (this.drawingArea / (this.max - this.min));
        return this.options.reverse ? this.max - e : this.min + e;
    }
    getPointLabelContext(t) {
        let e = this._pointLabels || [];
        if (t >= 0 && t < e.length) {
            let i = e[t];
            return wf(this.getContext(), t, i);
        }
    }
    getPointPosition(t, e, i = 0) {
        let n = this.getIndexAngle(t) - Z + i;
        return {
            x: Math.cos(n) * e + this.xCenter,
            y: Math.sin(n) * e + this.yCenter,
            angle: n,
        };
    }
    getPointPositionForValue(t, e) {
        return this.getPointPosition(t, this.getDistanceFromCenterForValue(e));
    }
    getBasePosition(t) {
        return this.getPointPositionForValue(t || 0, this.getBaseValue());
    }
    getPointLabelPosition(t) {
        let { left: e, top: i, right: n, bottom: o } = this._pointLabelItems[t];
        return { left: e, top: i, right: n, bottom: o };
    }
    drawBackground() {
        let {
            backgroundColor: t,
            grid: { circular: e },
        } = this.options;
        if (t) {
            let i = this.ctx;
            i.save(),
                i.beginPath(),
                rl(
                    this,
                    this.getDistanceFromCenterForValue(this._endValue),
                    e,
                    this._pointLabels.length,
                ),
                i.closePath(),
                (i.fillStyle = t),
                i.fill(),
                i.restore();
        }
    }
    drawGrid() {
        let t = this.ctx,
            e = this.options,
            { angleLines: i, grid: n } = e,
            o = this._pointLabels.length,
            r,
            a,
            l;
        if (
            (e.pointLabels.display && xf(this, o),
            n.display &&
                this.ticks.forEach((c, h) => {
                    if (h !== 0) {
                        a = this.getDistanceFromCenterForValue(c.value);
                        let u = n.setContext(this.getContext(h - 1));
                        _f(this, u, a, o);
                    }
                }),
            i.display)
        ) {
            for (t.save(), r = o - 1; r >= 0; r--) {
                let c = i.setContext(this.getPointLabelContext(r)),
                    { color: h, lineWidth: u } = c;
                !u ||
                    !h ||
                    ((t.lineWidth = u),
                    (t.strokeStyle = h),
                    t.setLineDash(c.borderDash),
                    (t.lineDashOffset = c.borderDashOffset),
                    (a = this.getDistanceFromCenterForValue(e.ticks.reverse ? this.min : this.max)),
                    (l = this.getPointPosition(r, a)),
                    t.beginPath(),
                    t.moveTo(this.xCenter, this.yCenter),
                    t.lineTo(l.x, l.y),
                    t.stroke());
            }
            t.restore();
        }
    }
    drawBorder() {}
    drawLabels() {
        let t = this.ctx,
            e = this.options,
            i = e.ticks;
        if (!i.display) return;
        let n = this.getIndexAngle(0),
            o,
            r;
        t.save(),
            t.translate(this.xCenter, this.yCenter),
            t.rotate(n),
            (t.textAlign = 'center'),
            (t.textBaseline = 'middle'),
            this.ticks.forEach((a, l) => {
                if (l === 0 && !e.reverse) return;
                let c = i.setContext(this.getContext(l)),
                    h = et(c.font);
                if (
                    ((o = this.getDistanceFromCenterForValue(this.ticks[l].value)),
                    c.showLabelBackdrop)
                ) {
                    (t.font = h.string),
                        (r = t.measureText(a.label).width),
                        (t.fillStyle = c.backdropColor);
                    let u = at(c.backdropPadding);
                    t.fillRect(
                        -r / 2 - u.left,
                        -o - h.size / 2 - u.top,
                        r + u.width,
                        h.size + u.height,
                    );
                }
                ee(t, a.label, 0, -o, h, { color: c.color });
            }),
            t.restore();
    }
    drawTitle() {}
};
xe.id = 'radialLinear';
xe.defaults = {
    display: !0,
    animate: !0,
    position: 'chartArea',
    angleLines: {
        display: !0,
        lineWidth: 1,
        borderDash: [],
        borderDashOffset: 0,
    },
    grid: { circular: !1 },
    startAngle: 0,
    ticks: { showLabelBackdrop: !0, callback: Ui.formatters.numeric },
    pointLabels: {
        backdropColor: void 0,
        backdropPadding: 2,
        display: !0,
        font: { size: 10 },
        callback(s) {
            return s;
        },
        padding: 5,
        centerPointLabels: !1,
    },
};
xe.defaultRoutes = {
    'angleLines.color': 'borderColor',
    'pointLabels.color': 'color',
    'ticks.color': 'color',
};
xe.descriptors = { angleLines: { _fallback: 'grid' } };
var Yi = {
        millisecond: { common: !0, size: 1, steps: 1e3 },
        second: { common: !0, size: 1e3, steps: 60 },
        minute: { common: !0, size: 6e4, steps: 60 },
        hour: { common: !0, size: 36e5, steps: 24 },
        day: { common: !0, size: 864e5, steps: 30 },
        week: { common: !1, size: 6048e5, steps: 4 },
        month: { common: !0, size: 2628e6, steps: 12 },
        quarter: { common: !1, size: 7884e6, steps: 4 },
        year: { common: !0, size: 3154e7 },
    },
    ut = Object.keys(Yi);
function Sf(s, t) {
    return s - t;
}
function za(s, t) {
    if (P(t)) return null;
    let e = s._adapter,
        { parser: i, round: n, isoWeekday: o } = s._parseOpts,
        r = t;
    return (
        typeof i == 'function' && (r = i(r)),
        K(r) || (r = typeof i == 'string' ? e.parse(r, i) : e.parse(r)),
        r === null
            ? null
            : (n &&
                  (r =
                      n === 'week' && (ge(o) || o === !0)
                          ? e.startOf(r, 'isoWeek', o)
                          : e.startOf(r, n)),
              +r)
    );
}
function Va(s, t, e, i) {
    let n = ut.length;
    for (let o = ut.indexOf(s); o < n - 1; ++o) {
        let r = Yi[ut[o]],
            a = r.steps ? r.steps : Number.MAX_SAFE_INTEGER;
        if (r.common && Math.ceil((e - t) / (a * r.size)) <= i) return ut[o];
    }
    return ut[n - 1];
}
function Mf(s, t, e, i, n) {
    for (let o = ut.length - 1; o >= ut.indexOf(e); o--) {
        let r = ut[o];
        if (Yi[r].common && s._adapter.diff(n, i, r) >= t - 1) return r;
    }
    return ut[e ? ut.indexOf(e) : 0];
}
function Tf(s) {
    for (let t = ut.indexOf(s) + 1, e = ut.length; t < e; ++t) if (Yi[ut[t]].common) return ut[t];
}
function Wa(s, t, e) {
    if (!e) s[t] = !0;
    else if (e.length) {
        let { lo: i, hi: n } = Ti(e, t),
            o = e[i] >= t ? e[i] : e[n];
        s[o] = !0;
    }
}
function vf(s, t, e, i) {
    let n = s._adapter,
        o = +n.startOf(t[0].value, i),
        r = t[t.length - 1].value,
        a,
        l;
    for (a = o; a <= r; a = +n.add(a, 1, i)) (l = e[a]), l >= 0 && (t[l].major = !0);
    return t;
}
function Ha(s, t, e) {
    let i = [],
        n = {},
        o = t.length,
        r,
        a;
    for (r = 0; r < o; ++r) (a = t[r]), (n[a] = r), i.push({ value: a, major: !1 });
    return o === 0 || !e ? i : vf(s, i, n, e);
}
var _e = class extends Ut {
    constructor(t) {
        super(t),
            (this._cache = { data: [], labels: [], all: [] }),
            (this._unit = 'day'),
            (this._majorUnit = void 0),
            (this._offsets = {}),
            (this._normalized = !1),
            (this._parseOpts = void 0);
    }
    init(t, e) {
        let i = t.time || (t.time = {}),
            n = (this._adapter = new _o._date(t.adapters.date));
        n.init(e),
            Le(i.displayFormats, n.formats()),
            (this._parseOpts = {
                parser: i.parser,
                round: i.round,
                isoWeekday: i.isoWeekday,
            }),
            super.init(t),
            (this._normalized = e.normalized);
    }
    parse(t, e) {
        return t === void 0 ? null : za(this, t);
    }
    beforeLayout() {
        super.beforeLayout(), (this._cache = { data: [], labels: [], all: [] });
    }
    determineDataLimits() {
        let t = this.options,
            e = this._adapter,
            i = t.time.unit || 'day',
            { min: n, max: o, minDefined: r, maxDefined: a } = this.getUserBounds();
        function l(c) {
            !r && !isNaN(c.min) && (n = Math.min(n, c.min)),
                !a && !isNaN(c.max) && (o = Math.max(o, c.max));
        }
        (!r || !a) &&
            (l(this._getLabelBounds()),
            (t.bounds !== 'ticks' || t.ticks.source !== 'labels') && l(this.getMinMax(!1))),
            (n = K(n) && !isNaN(n) ? n : +e.startOf(Date.now(), i)),
            (o = K(o) && !isNaN(o) ? o : +e.endOf(Date.now(), i) + 1),
            (this.min = Math.min(n, o - 1)),
            (this.max = Math.max(n + 1, o));
    }
    _getLabelBounds() {
        let t = this.getLabelTimestamps(),
            e = Number.POSITIVE_INFINITY,
            i = Number.NEGATIVE_INFINITY;
        return t.length && ((e = t[0]), (i = t[t.length - 1])), { min: e, max: i };
    }
    buildTicks() {
        let t = this.options,
            e = t.time,
            i = t.ticks,
            n = i.source === 'labels' ? this.getLabelTimestamps() : this._generate();
        t.bounds === 'ticks' &&
            n.length &&
            ((this.min = this._userMin || n[0]), (this.max = this._userMax || n[n.length - 1]));
        let o = this.min,
            r = this.max,
            a = kr(n, o, r);
        return (
            (this._unit =
                e.unit ||
                (i.autoSkip
                    ? Va(e.minUnit, this.min, this.max, this._getLabelCapacity(o))
                    : Mf(this, a.length, e.minUnit, this.min, this.max))),
            (this._majorUnit = !i.major.enabled || this._unit === 'year' ? void 0 : Tf(this._unit)),
            this.initOffsets(n),
            t.reverse && a.reverse(),
            Ha(this, a, this._majorUnit)
        );
    }
    afterAutoSkip() {
        this.options.offsetAfterAutoskip && this.initOffsets(this.ticks.map((t) => +t.value));
    }
    initOffsets(t) {
        let e = 0,
            i = 0,
            n,
            o;
        this.options.offset &&
            t.length &&
            ((n = this.getDecimalForValue(t[0])),
            t.length === 1 ? (e = 1 - n) : (e = (this.getDecimalForValue(t[1]) - n) / 2),
            (o = this.getDecimalForValue(t[t.length - 1])),
            t.length === 1 ? (i = o) : (i = (o - this.getDecimalForValue(t[t.length - 2])) / 2));
        let r = t.length < 3 ? 0.5 : 0.25;
        (e = st(e, 0, r)),
            (i = st(i, 0, r)),
            (this._offsets = { start: e, end: i, factor: 1 / (e + 1 + i) });
    }
    _generate() {
        let t = this._adapter,
            e = this.min,
            i = this.max,
            n = this.options,
            o = n.time,
            r = o.unit || Va(o.minUnit, e, i, this._getLabelCapacity(e)),
            a = D(o.stepSize, 1),
            l = r === 'week' ? o.isoWeekday : !1,
            c = ge(l) || l === !0,
            h = {},
            u = e,
            d,
            f;
        if (
            (c && (u = +t.startOf(u, 'isoWeek', l)),
            (u = +t.startOf(u, c ? 'day' : r)),
            t.diff(i, e, r) > 1e5 * a)
        )
            throw new Error(e + ' and ' + i + ' are too far apart with stepSize of ' + a + ' ' + r);
        let m = n.ticks.source === 'data' && this.getDataTimestamps();
        for (d = u, f = 0; d < i; d = +t.add(d, a, r), f++) Wa(h, d, m);
        return (
            (d === i || n.bounds === 'ticks' || f === 1) && Wa(h, d, m),
            Object.keys(h)
                .sort((g, p) => g - p)
                .map((g) => +g)
        );
    }
    getLabelForValue(t) {
        let e = this._adapter,
            i = this.options.time;
        return i.tooltipFormat
            ? e.format(t, i.tooltipFormat)
            : e.format(t, i.displayFormats.datetime);
    }
    _tickFormatFunction(t, e, i, n) {
        let o = this.options,
            r = o.time.displayFormats,
            a = this._unit,
            l = this._majorUnit,
            c = a && r[a],
            h = l && r[l],
            u = i[e],
            d = l && h && u && u.major,
            f = this._adapter.format(t, n || (d ? h : c)),
            m = o.ticks.callback;
        return m ? $(m, [f, e, i], this) : f;
    }
    generateTickLabels(t) {
        let e, i, n;
        for (e = 0, i = t.length; e < i; ++e)
            (n = t[e]), (n.label = this._tickFormatFunction(n.value, e, t));
    }
    getDecimalForValue(t) {
        return t === null ? NaN : (t - this.min) / (this.max - this.min);
    }
    getPixelForValue(t) {
        let e = this._offsets,
            i = this.getDecimalForValue(t);
        return this.getPixelForDecimal((e.start + i) * e.factor);
    }
    getValueForPixel(t) {
        let e = this._offsets,
            i = this.getDecimalForPixel(t) / e.factor - e.end;
        return this.min + i * (this.max - this.min);
    }
    _getLabelSize(t) {
        let e = this.options.ticks,
            i = this.ctx.measureText(t).width,
            n = _t(this.isHorizontal() ? e.maxRotation : e.minRotation),
            o = Math.cos(n),
            r = Math.sin(n),
            a = this._resolveTickFontOptions(0).size;
        return { w: i * o + a * r, h: i * r + a * o };
    }
    _getLabelCapacity(t) {
        let e = this.options.time,
            i = e.displayFormats,
            n = i[e.unit] || i.millisecond,
            o = this._tickFormatFunction(t, 0, Ha(this, [t], this._majorUnit), n),
            r = this._getLabelSize(o),
            a = Math.floor(this.isHorizontal() ? this.width / r.w : this.height / r.h) - 1;
        return a > 0 ? a : 1;
    }
    getDataTimestamps() {
        let t = this._cache.data || [],
            e,
            i;
        if (t.length) return t;
        let n = this.getMatchingVisibleMetas();
        if (this._normalized && n.length)
            return (this._cache.data = n[0].controller.getAllParsedValues(this));
        for (e = 0, i = n.length; e < i; ++e)
            t = t.concat(n[e].controller.getAllParsedValues(this));
        return (this._cache.data = this.normalize(t));
    }
    getLabelTimestamps() {
        let t = this._cache.labels || [],
            e,
            i;
        if (t.length) return t;
        let n = this.getLabels();
        for (e = 0, i = n.length; e < i; ++e) t.push(za(this, n[e]));
        return (this._cache.labels = this._normalized ? t : this.normalize(t));
    }
    normalize(t) {
        return En(t.sort(Sf));
    }
};
_e.id = 'time';
_e.defaults = {
    bounds: 'data',
    adapters: {},
    time: {
        parser: !1,
        unit: !1,
        round: !1,
        isoWeekday: !1,
        minUnit: 'millisecond',
        displayFormats: {},
    },
    ticks: { source: 'auto', major: { enabled: !1 } },
};
function Ni(s, t, e) {
    let i = 0,
        n = s.length - 1,
        o,
        r,
        a,
        l;
    e
        ? (t >= s[i].pos && t <= s[n].pos && ({ lo: i, hi: n } = Dt(s, 'pos', t)),
          ({ pos: o, time: a } = s[i]),
          ({ pos: r, time: l } = s[n]))
        : (t >= s[i].time && t <= s[n].time && ({ lo: i, hi: n } = Dt(s, 'time', t)),
          ({ time: o, pos: a } = s[i]),
          ({ time: r, pos: l } = s[n]));
    let c = r - o;
    return c ? a + ((l - a) * (t - o)) / c : a;
}
var Ns = class extends _e {
    constructor(t) {
        super(t), (this._table = []), (this._minPos = void 0), (this._tableRange = void 0);
    }
    initOffsets() {
        let t = this._getTimestampsForTable(),
            e = (this._table = this.buildLookupTable(t));
        (this._minPos = Ni(e, this.min)),
            (this._tableRange = Ni(e, this.max) - this._minPos),
            super.initOffsets(t);
    }
    buildLookupTable(t) {
        let { min: e, max: i } = this,
            n = [],
            o = [],
            r,
            a,
            l,
            c,
            h;
        for (r = 0, a = t.length; r < a; ++r) (c = t[r]), c >= e && c <= i && n.push(c);
        if (n.length < 2)
            return [
                { time: e, pos: 0 },
                { time: i, pos: 1 },
            ];
        for (r = 0, a = n.length; r < a; ++r)
            (h = n[r + 1]),
                (l = n[r - 1]),
                (c = n[r]),
                Math.round((h + l) / 2) !== c && o.push({ time: c, pos: r / (a - 1) });
        return o;
    }
    _getTimestampsForTable() {
        let t = this._cache.all || [];
        if (t.length) return t;
        let e = this.getDataTimestamps(),
            i = this.getLabelTimestamps();
        return (
            e.length && i.length ? (t = this.normalize(e.concat(i))) : (t = e.length ? e : i),
            (t = this._cache.all = t),
            t
        );
    }
    getDecimalForValue(t) {
        return (Ni(this._table, t) - this._minPos) / this._tableRange;
    }
    getValueForPixel(t) {
        let e = this._offsets,
            i = this.getDecimalForPixel(t) / e.factor - e.end;
        return Ni(this._table, i * this._tableRange + this._minPos, !0);
    }
};
Ns.id = 'timeseries';
Ns.defaults = _e.defaults;
var kf = Object.freeze({
        __proto__: null,
        CategoryScale: Ke,
        LinearScale: Ps,
        LogarithmicScale: Rs,
        RadialLinearScale: xe,
        TimeScale: _e,
        TimeSeriesScale: Ns,
    }),
    al = [mu, _d, rf, kf];
ye.register(...al);
var Pt = ye;
var Yt = class extends Error {},
    Zi = class extends Yt {
        constructor(t) {
            super(`Invalid DateTime: ${t.toMessage()}`);
        }
    },
    qi = class extends Yt {
        constructor(t) {
            super(`Invalid Interval: ${t.toMessage()}`);
        }
    },
    Gi = class extends Yt {
        constructor(t) {
            super(`Invalid Duration: ${t.toMessage()}`);
        }
    },
    Zt = class extends Yt {},
    Qe = class extends Yt {
        constructor(t) {
            super(`Invalid unit ${t}`);
        }
    },
    nt = class extends Yt {},
    vt = class extends Yt {
        constructor() {
            super('Zone is an abstract class');
        }
    };
var T = 'numeric',
    kt = 'short',
    yt = 'long',
    ae = { year: T, month: T, day: T },
    Vs = { year: T, month: kt, day: T },
    So = { year: T, month: kt, day: T, weekday: kt },
    Ws = { year: T, month: yt, day: T },
    Hs = { year: T, month: yt, day: T, weekday: yt },
    Bs = { hour: T, minute: T },
    js = { hour: T, minute: T, second: T },
    $s = { hour: T, minute: T, second: T, timeZoneName: kt },
    Us = { hour: T, minute: T, second: T, timeZoneName: yt },
    Ys = { hour: T, minute: T, hourCycle: 'h23' },
    Zs = { hour: T, minute: T, second: T, hourCycle: 'h23' },
    qs = { hour: T, minute: T, second: T, hourCycle: 'h23', timeZoneName: kt },
    Gs = { hour: T, minute: T, second: T, hourCycle: 'h23', timeZoneName: yt },
    Xs = { year: T, month: T, day: T, hour: T, minute: T },
    Ks = { year: T, month: T, day: T, hour: T, minute: T, second: T },
    Js = { year: T, month: kt, day: T, hour: T, minute: T },
    Qs = { year: T, month: kt, day: T, hour: T, minute: T, second: T },
    Mo = { year: T, month: kt, day: T, weekday: kt, hour: T, minute: T },
    ti = { year: T, month: yt, day: T, hour: T, minute: T, timeZoneName: kt },
    ei = {
        year: T,
        month: yt,
        day: T,
        hour: T,
        minute: T,
        second: T,
        timeZoneName: kt,
    },
    si = {
        year: T,
        month: yt,
        day: T,
        weekday: yt,
        hour: T,
        minute: T,
        timeZoneName: yt,
    },
    ii = {
        year: T,
        month: yt,
        day: T,
        weekday: yt,
        hour: T,
        minute: T,
        second: T,
        timeZoneName: yt,
    };
var dt = class {
    get type() {
        throw new vt();
    }
    get name() {
        throw new vt();
    }
    get ianaName() {
        return this.name;
    }
    get isUniversal() {
        throw new vt();
    }
    offsetName(t, e) {
        throw new vt();
    }
    formatOffset(t, e) {
        throw new vt();
    }
    offset(t) {
        throw new vt();
    }
    equals(t) {
        throw new vt();
    }
    get isValid() {
        throw new vt();
    }
};
var To = null,
    Rt = class extends dt {
        static get instance() {
            return To === null && (To = new Rt()), To;
        }
        get type() {
            return 'system';
        }
        get name() {
            return new Intl.DateTimeFormat().resolvedOptions().timeZone;
        }
        get isUniversal() {
            return !1;
        }
        offsetName(t, { format: e, locale: i }) {
            return Ki(t, e, i);
        }
        formatOffset(t, e) {
            return le(this.offset(t), e);
        }
        offset(t) {
            return -new Date(t).getTimezoneOffset();
        }
        equals(t) {
            return t.type === 'system';
        }
        get isValid() {
            return !0;
        }
    };
var Qi = {};
function Of(s) {
    return (
        Qi[s] ||
            (Qi[s] = new Intl.DateTimeFormat('en-US', {
                hour12: !1,
                timeZone: s,
                year: 'numeric',
                month: '2-digit',
                day: '2-digit',
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit',
                era: 'short',
            })),
        Qi[s]
    );
}
var Ef = { year: 0, month: 1, day: 2, era: 3, hour: 4, minute: 5, second: 6 };
function Df(s, t) {
    let e = s.format(t).replace(/\u200E/g, ''),
        i = /(\d+)\/(\d+)\/(\d+) (AD|BC),? (\d+):(\d+):(\d+)/.exec(e),
        [, n, o, r, a, l, c, h] = i;
    return [r, n, o, a, l, c, h];
}
function Cf(s, t) {
    let e = s.formatToParts(t),
        i = [];
    for (let n = 0; n < e.length; n++) {
        let { type: o, value: r } = e[n],
            a = Ef[o];
        o === 'era' ? (i[a] = r) : C(a) || (i[a] = parseInt(r, 10));
    }
    return i;
}
var Ji = {},
    it = class extends dt {
        static create(t) {
            return Ji[t] || (Ji[t] = new it(t)), Ji[t];
        }
        static resetCache() {
            (Ji = {}), (Qi = {});
        }
        static isValidSpecifier(t) {
            return this.isValidZone(t);
        }
        static isValidZone(t) {
            if (!t) return !1;
            try {
                return new Intl.DateTimeFormat('en-US', { timeZone: t }).format(), !0;
            } catch {
                return !1;
            }
        }
        constructor(t) {
            super(), (this.zoneName = t), (this.valid = it.isValidZone(t));
        }
        get type() {
            return 'iana';
        }
        get name() {
            return this.zoneName;
        }
        get isUniversal() {
            return !1;
        }
        offsetName(t, { format: e, locale: i }) {
            return Ki(t, e, i, this.name);
        }
        formatOffset(t, e) {
            return le(this.offset(t), e);
        }
        offset(t) {
            let e = new Date(t);
            if (isNaN(e)) return NaN;
            let i = Of(this.name),
                [n, o, r, a, l, c, h] = i.formatToParts ? Cf(i, e) : Df(i, e);
            a === 'BC' && (n = -Math.abs(n) + 1);
            let d = ts({
                    year: n,
                    month: o,
                    day: r,
                    hour: l === 24 ? 0 : l,
                    minute: c,
                    second: h,
                    millisecond: 0,
                }),
                f = +e,
                m = f % 1e3;
            return (f -= m >= 0 ? m : 1e3 + m), (d - f) / (60 * 1e3);
        }
        equals(t) {
            return t.type === 'iana' && t.name === this.name;
        }
        get isValid() {
            return this.valid;
        }
    };
var ll = {};
function If(s, t = {}) {
    let e = JSON.stringify([s, t]),
        i = ll[e];
    return i || ((i = new Intl.ListFormat(s, t)), (ll[e] = i)), i;
}
var vo = {};
function ko(s, t = {}) {
    let e = JSON.stringify([s, t]),
        i = vo[e];
    return i || ((i = new Intl.DateTimeFormat(s, t)), (vo[e] = i)), i;
}
var Oo = {};
function Af(s, t = {}) {
    let e = JSON.stringify([s, t]),
        i = Oo[e];
    return i || ((i = new Intl.NumberFormat(s, t)), (Oo[e] = i)), i;
}
var Eo = {};
function Ff(s, t = {}) {
    let { base: e, ...i } = t,
        n = JSON.stringify([s, i]),
        o = Eo[n];
    return o || ((o = new Intl.RelativeTimeFormat(s, t)), (Eo[n] = o)), o;
}
var ni = null;
function Lf() {
    return ni || ((ni = new Intl.DateTimeFormat().resolvedOptions().locale), ni);
}
function Pf(s) {
    let t = s.indexOf('-x-');
    t !== -1 && (s = s.substring(0, t));
    let e = s.indexOf('-u-');
    if (e === -1) return [s];
    {
        let i, n;
        try {
            (i = ko(s).resolvedOptions()), (n = s);
        } catch {
            let l = s.substring(0, e);
            (i = ko(l).resolvedOptions()), (n = l);
        }
        let { numberingSystem: o, calendar: r } = i;
        return [n, o, r];
    }
}
function Rf(s, t, e) {
    return (
        (e || t) &&
            (s.includes('-u-') || (s += '-u'), e && (s += `-ca-${e}`), t && (s += `-nu-${t}`)),
        s
    );
}
function Nf(s) {
    let t = [];
    for (let e = 1; e <= 12; e++) {
        let i = O.utc(2009, e, 1);
        t.push(s(i));
    }
    return t;
}
function zf(s) {
    let t = [];
    for (let e = 1; e <= 7; e++) {
        let i = O.utc(2016, 11, 13 + e);
        t.push(s(i));
    }
    return t;
}
function tn(s, t, e, i) {
    let n = s.listingMode();
    return n === 'error' ? null : n === 'en' ? e(t) : i(t);
}
function Vf(s) {
    return s.numberingSystem && s.numberingSystem !== 'latn'
        ? !1
        : s.numberingSystem === 'latn' ||
              !s.locale ||
              s.locale.startsWith('en') ||
              new Intl.DateTimeFormat(s.intl).resolvedOptions().numberingSystem === 'latn';
}
var Do = class {
        constructor(t, e, i) {
            (this.padTo = i.padTo || 0), (this.floor = i.floor || !1);
            let { padTo: n, floor: o, ...r } = i;
            if (!e || Object.keys(r).length > 0) {
                let a = { useGrouping: !1, ...i };
                i.padTo > 0 && (a.minimumIntegerDigits = i.padTo), (this.inf = Af(t, a));
            }
        }
        format(t) {
            if (this.inf) {
                let e = this.floor ? Math.floor(t) : t;
                return this.inf.format(e);
            } else {
                let e = this.floor ? Math.floor(t) : es(t, 3);
                return q(e, this.padTo);
            }
        }
    },
    Co = class {
        constructor(t, e, i) {
            (this.opts = i), (this.originalZone = void 0);
            let n;
            if (this.opts.timeZone) this.dt = t;
            else if (t.zone.type === 'fixed') {
                let r = -1 * (t.offset / 60),
                    a = r >= 0 ? `Etc/GMT+${r}` : `Etc/GMT${r}`;
                t.offset !== 0 && it.create(a).valid
                    ? ((n = a), (this.dt = t))
                    : ((n = 'UTC'),
                      (this.dt = t.offset === 0 ? t : t.setZone('UTC').plus({ minutes: t.offset })),
                      (this.originalZone = t.zone));
            } else
                t.zone.type === 'system'
                    ? (this.dt = t)
                    : t.zone.type === 'iana'
                      ? ((this.dt = t), (n = t.zone.name))
                      : ((n = 'UTC'),
                        (this.dt = t.setZone('UTC').plus({ minutes: t.offset })),
                        (this.originalZone = t.zone));
            let o = { ...this.opts };
            (o.timeZone = o.timeZone || n), (this.dtf = ko(e, o));
        }
        format() {
            return this.originalZone
                ? this.formatToParts()
                      .map(({ value: t }) => t)
                      .join('')
                : this.dtf.format(this.dt.toJSDate());
        }
        formatToParts() {
            let t = this.dtf.formatToParts(this.dt.toJSDate());
            return this.originalZone
                ? t.map((e) => {
                      if (e.type === 'timeZoneName') {
                          let i = this.originalZone.offsetName(this.dt.ts, {
                              locale: this.dt.locale,
                              format: this.opts.timeZoneName,
                          });
                          return { ...e, value: i };
                      } else return e;
                  })
                : t;
        }
        resolvedOptions() {
            return this.dtf.resolvedOptions();
        }
    },
    Io = class {
        constructor(t, e, i) {
            (this.opts = { style: 'long', ...i }), !e && en() && (this.rtf = Ff(t, i));
        }
        format(t, e) {
            return this.rtf
                ? this.rtf.format(t, e)
                : cl(e, t, this.opts.numeric, this.opts.style !== 'long');
        }
        formatToParts(t, e) {
            return this.rtf ? this.rtf.formatToParts(t, e) : [];
        }
    },
    N = class {
        static fromOpts(t) {
            return N.create(t.locale, t.numberingSystem, t.outputCalendar, t.defaultToEN);
        }
        static create(t, e, i, n = !1) {
            let o = t || H.defaultLocale,
                r = o || (n ? 'en-US' : Lf()),
                a = e || H.defaultNumberingSystem,
                l = i || H.defaultOutputCalendar;
            return new N(r, a, l, o);
        }
        static resetCache() {
            (ni = null), (vo = {}), (Oo = {}), (Eo = {});
        }
        static fromObject({ locale: t, numberingSystem: e, outputCalendar: i } = {}) {
            return N.create(t, e, i);
        }
        constructor(t, e, i, n) {
            let [o, r, a] = Pf(t);
            (this.locale = o),
                (this.numberingSystem = e || r || null),
                (this.outputCalendar = i || a || null),
                (this.intl = Rf(this.locale, this.numberingSystem, this.outputCalendar)),
                (this.weekdaysCache = { format: {}, standalone: {} }),
                (this.monthsCache = { format: {}, standalone: {} }),
                (this.meridiemCache = null),
                (this.eraCache = {}),
                (this.specifiedLocale = n),
                (this.fastNumbersCached = null);
        }
        get fastNumbers() {
            return (
                this.fastNumbersCached == null && (this.fastNumbersCached = Vf(this)),
                this.fastNumbersCached
            );
        }
        listingMode() {
            let t = this.isEnglish(),
                e =
                    (this.numberingSystem === null || this.numberingSystem === 'latn') &&
                    (this.outputCalendar === null || this.outputCalendar === 'gregory');
            return t && e ? 'en' : 'intl';
        }
        clone(t) {
            return !t || Object.getOwnPropertyNames(t).length === 0
                ? this
                : N.create(
                      t.locale || this.specifiedLocale,
                      t.numberingSystem || this.numberingSystem,
                      t.outputCalendar || this.outputCalendar,
                      t.defaultToEN || !1,
                  );
        }
        redefaultToEN(t = {}) {
            return this.clone({ ...t, defaultToEN: !0 });
        }
        redefaultToSystem(t = {}) {
            return this.clone({ ...t, defaultToEN: !1 });
        }
        months(t, e = !1) {
            return tn(this, t, Ao, () => {
                let i = e ? { month: t, day: 'numeric' } : { month: t },
                    n = e ? 'format' : 'standalone';
                return (
                    this.monthsCache[n][t] ||
                        (this.monthsCache[n][t] = Nf((o) => this.extract(o, i, 'month'))),
                    this.monthsCache[n][t]
                );
            });
        }
        weekdays(t, e = !1) {
            return tn(this, t, Fo, () => {
                let i = e
                        ? {
                              weekday: t,
                              year: 'numeric',
                              month: 'long',
                              day: 'numeric',
                          }
                        : { weekday: t },
                    n = e ? 'format' : 'standalone';
                return (
                    this.weekdaysCache[n][t] ||
                        (this.weekdaysCache[n][t] = zf((o) => this.extract(o, i, 'weekday'))),
                    this.weekdaysCache[n][t]
                );
            });
        }
        meridiems() {
            return tn(
                this,
                void 0,
                () => Lo,
                () => {
                    if (!this.meridiemCache) {
                        let t = { hour: 'numeric', hourCycle: 'h12' };
                        this.meridiemCache = [O.utc(2016, 11, 13, 9), O.utc(2016, 11, 13, 19)].map(
                            (e) => this.extract(e, t, 'dayperiod'),
                        );
                    }
                    return this.meridiemCache;
                },
            );
        }
        eras(t) {
            return tn(this, t, Po, () => {
                let e = { era: t };
                return (
                    this.eraCache[t] ||
                        (this.eraCache[t] = [O.utc(-40, 1, 1), O.utc(2017, 1, 1)].map((i) =>
                            this.extract(i, e, 'era'),
                        )),
                    this.eraCache[t]
                );
            });
        }
        extract(t, e, i) {
            let n = this.dtFormatter(t, e),
                o = n.formatToParts(),
                r = o.find((a) => a.type.toLowerCase() === i);
            return r ? r.value : null;
        }
        numberFormatter(t = {}) {
            return new Do(this.intl, t.forceSimple || this.fastNumbers, t);
        }
        dtFormatter(t, e = {}) {
            return new Co(t, this.intl, e);
        }
        relFormatter(t = {}) {
            return new Io(this.intl, this.isEnglish(), t);
        }
        listFormatter(t = {}) {
            return If(this.intl, t);
        }
        isEnglish() {
            return (
                this.locale === 'en' ||
                this.locale.toLowerCase() === 'en-us' ||
                new Intl.DateTimeFormat(this.intl).resolvedOptions().locale.startsWith('en-us')
            );
        }
        equals(t) {
            return (
                this.locale === t.locale &&
                this.numberingSystem === t.numberingSystem &&
                this.outputCalendar === t.outputCalendar
            );
        }
    };
var No = null,
    G = class extends dt {
        static get utcInstance() {
            return No === null && (No = new G(0)), No;
        }
        static instance(t) {
            return t === 0 ? G.utcInstance : new G(t);
        }
        static parseSpecifier(t) {
            if (t) {
                let e = t.match(/^utc(?:([+-]\d{1,2})(?::(\d{2}))?)?$/i);
                if (e) return new G(we(e[1], e[2]));
            }
            return null;
        }
        constructor(t) {
            super(), (this.fixed = t);
        }
        get type() {
            return 'fixed';
        }
        get name() {
            return this.fixed === 0 ? 'UTC' : `UTC${le(this.fixed, 'narrow')}`;
        }
        get ianaName() {
            return this.fixed === 0 ? 'Etc/UTC' : `Etc/GMT${le(-this.fixed, 'narrow')}`;
        }
        offsetName() {
            return this.name;
        }
        formatOffset(t, e) {
            return le(this.fixed, e);
        }
        get isUniversal() {
            return !0;
        }
        offset() {
            return this.fixed;
        }
        equals(t) {
            return t.type === 'fixed' && t.fixed === this.fixed;
        }
        get isValid() {
            return !0;
        }
    };
var ss = class extends dt {
    constructor(t) {
        super(), (this.zoneName = t);
    }
    get type() {
        return 'invalid';
    }
    get name() {
        return this.zoneName;
    }
    get isUniversal() {
        return !1;
    }
    offsetName() {
        return null;
    }
    formatOffset() {
        return '';
    }
    offset() {
        return NaN;
    }
    equals() {
        return !1;
    }
    get isValid() {
        return !1;
    }
};
function Ot(s, t) {
    let e;
    if (C(s) || s === null) return t;
    if (s instanceof dt) return s;
    if (hl(s)) {
        let i = s.toLowerCase();
        return i === 'default'
            ? t
            : i === 'local' || i === 'system'
              ? Rt.instance
              : i === 'utc' || i === 'gmt'
                ? G.utcInstance
                : G.parseSpecifier(i) || it.create(s);
    } else
        return Nt(s)
            ? G.instance(s)
            : typeof s == 'object' && 'offset' in s && typeof s.offset == 'function'
              ? s
              : new ss(s);
}
var ul = () => Date.now(),
    dl = 'system',
    fl = null,
    ml = null,
    gl = null,
    pl = 60,
    bl,
    H = class {
        static get now() {
            return ul;
        }
        static set now(t) {
            ul = t;
        }
        static set defaultZone(t) {
            dl = t;
        }
        static get defaultZone() {
            return Ot(dl, Rt.instance);
        }
        static get defaultLocale() {
            return fl;
        }
        static set defaultLocale(t) {
            fl = t;
        }
        static get defaultNumberingSystem() {
            return ml;
        }
        static set defaultNumberingSystem(t) {
            ml = t;
        }
        static get defaultOutputCalendar() {
            return gl;
        }
        static set defaultOutputCalendar(t) {
            gl = t;
        }
        static get twoDigitCutoffYear() {
            return pl;
        }
        static set twoDigitCutoffYear(t) {
            pl = t % 100;
        }
        static get throwOnInvalid() {
            return bl;
        }
        static set throwOnInvalid(t) {
            bl = t;
        }
        static resetCaches() {
            N.resetCache(), it.resetCache();
        }
    };
function C(s) {
    return typeof s > 'u';
}
function Nt(s) {
    return typeof s == 'number';
}
function oi(s) {
    return typeof s == 'number' && s % 1 === 0;
}
function hl(s) {
    return typeof s == 'string';
}
function yl(s) {
    return Object.prototype.toString.call(s) === '[object Date]';
}
function en() {
    try {
        return typeof Intl < 'u' && !!Intl.RelativeTimeFormat;
    } catch {
        return !1;
    }
}
function xl(s) {
    return Array.isArray(s) ? s : [s];
}
function zo(s, t, e) {
    if (s.length !== 0)
        return s.reduce((i, n) => {
            let o = [t(n), n];
            return i && e(i[0], o[0]) === i[0] ? i : o;
        }, null)[1];
}
function _l(s, t) {
    return t.reduce((e, i) => ((e[i] = s[i]), e), {});
}
function ce(s, t) {
    return Object.prototype.hasOwnProperty.call(s, t);
}
function zt(s, t, e) {
    return oi(s) && s >= t && s <= e;
}
function Wf(s, t) {
    return s - t * Math.floor(s / t);
}
function q(s, t = 2) {
    let e = s < 0,
        i;
    return e ? (i = '-' + ('' + -s).padStart(t, '0')) : (i = ('' + s).padStart(t, '0')), i;
}
function qt(s) {
    if (!(C(s) || s === null || s === '')) return parseInt(s, 10);
}
function he(s) {
    if (!(C(s) || s === null || s === '')) return parseFloat(s);
}
function ri(s) {
    if (!(C(s) || s === null || s === '')) {
        let t = parseFloat('0.' + s) * 1e3;
        return Math.floor(t);
    }
}
function es(s, t, e = !1) {
    let i = 10 ** t;
    return (e ? Math.trunc : Math.round)(s * i) / i;
}
function Se(s) {
    return s % 4 === 0 && (s % 100 !== 0 || s % 400 === 0);
}
function Me(s) {
    return Se(s) ? 366 : 365;
}
function is(s, t) {
    let e = Wf(t - 1, 12) + 1,
        i = s + (t - e) / 12;
    return e === 2 ? (Se(i) ? 29 : 28) : [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][e - 1];
}
function ts(s) {
    let t = Date.UTC(s.year, s.month - 1, s.day, s.hour, s.minute, s.second, s.millisecond);
    return (
        s.year < 100 &&
            s.year >= 0 &&
            ((t = new Date(t)), t.setUTCFullYear(s.year, s.month - 1, s.day)),
        +t
    );
}
function ns(s) {
    let t = (s + Math.floor(s / 4) - Math.floor(s / 100) + Math.floor(s / 400)) % 7,
        e = s - 1,
        i = (e + Math.floor(e / 4) - Math.floor(e / 100) + Math.floor(e / 400)) % 7;
    return t === 4 || i === 3 ? 53 : 52;
}
function ai(s) {
    return s > 99 ? s : s > H.twoDigitCutoffYear ? 1900 + s : 2e3 + s;
}
function Ki(s, t, e, i = null) {
    let n = new Date(s),
        o = {
            hourCycle: 'h23',
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
        };
    i && (o.timeZone = i);
    let r = { timeZoneName: t, ...o },
        a = new Intl.DateTimeFormat(e, r)
            .formatToParts(n)
            .find((l) => l.type.toLowerCase() === 'timezonename');
    return a ? a.value : null;
}
function we(s, t) {
    let e = parseInt(s, 10);
    Number.isNaN(e) && (e = 0);
    let i = parseInt(t, 10) || 0,
        n = e < 0 || Object.is(e, -0) ? -i : i;
    return e * 60 + n;
}
function Vo(s) {
    let t = Number(s);
    if (typeof s == 'boolean' || s === '' || Number.isNaN(t))
        throw new nt(`Invalid unit value ${s}`);
    return t;
}
function os(s, t) {
    let e = {};
    for (let i in s)
        if (ce(s, i)) {
            let n = s[i];
            if (n == null) continue;
            e[t(i)] = Vo(n);
        }
    return e;
}
function le(s, t) {
    let e = Math.trunc(Math.abs(s / 60)),
        i = Math.trunc(Math.abs(s % 60)),
        n = s >= 0 ? '+' : '-';
    switch (t) {
        case 'short':
            return `${n}${q(e, 2)}:${q(i, 2)}`;
        case 'narrow':
            return `${n}${e}${i > 0 ? `:${i}` : ''}`;
        case 'techie':
            return `${n}${q(e, 2)}${q(i, 2)}`;
        default:
            throw new RangeError(`Value format ${t} is out of range for property format`);
    }
}
function li(s) {
    return _l(s, ['hour', 'minute', 'second', 'millisecond']);
}
var Hf = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
    ],
    Wo = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    Bf = ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'];
function Ao(s) {
    switch (s) {
        case 'narrow':
            return [...Bf];
        case 'short':
            return [...Wo];
        case 'long':
            return [...Hf];
        case 'numeric':
            return ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];
        case '2-digit':
            return ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
        default:
            return null;
    }
}
var Ho = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    Bo = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    jf = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];
function Fo(s) {
    switch (s) {
        case 'narrow':
            return [...jf];
        case 'short':
            return [...Bo];
        case 'long':
            return [...Ho];
        case 'numeric':
            return ['1', '2', '3', '4', '5', '6', '7'];
        default:
            return null;
    }
}
var Lo = ['AM', 'PM'],
    $f = ['Before Christ', 'Anno Domini'],
    Uf = ['BC', 'AD'],
    Yf = ['B', 'A'];
function Po(s) {
    switch (s) {
        case 'narrow':
            return [...Yf];
        case 'short':
            return [...Uf];
        case 'long':
            return [...$f];
        default:
            return null;
    }
}
function wl(s) {
    return Lo[s.hour < 12 ? 0 : 1];
}
function Sl(s, t) {
    return Fo(t)[s.weekday - 1];
}
function Ml(s, t) {
    return Ao(t)[s.month - 1];
}
function Tl(s, t) {
    return Po(t)[s.year < 0 ? 0 : 1];
}
function cl(s, t, e = 'always', i = !1) {
    let n = {
            years: ['year', 'yr.'],
            quarters: ['quarter', 'qtr.'],
            months: ['month', 'mo.'],
            weeks: ['week', 'wk.'],
            days: ['day', 'day', 'days'],
            hours: ['hour', 'hr.'],
            minutes: ['minute', 'min.'],
            seconds: ['second', 'sec.'],
        },
        o = ['hours', 'minutes', 'seconds'].indexOf(s) === -1;
    if (e === 'auto' && o) {
        let u = s === 'days';
        switch (t) {
            case 1:
                return u ? 'tomorrow' : `next ${n[s][0]}`;
            case -1:
                return u ? 'yesterday' : `last ${n[s][0]}`;
            case 0:
                return u ? 'today' : `this ${n[s][0]}`;
            default:
        }
    }
    let r = Object.is(t, -0) || t < 0,
        a = Math.abs(t),
        l = a === 1,
        c = n[s],
        h = i ? (l ? c[1] : c[2] || c[1]) : l ? n[s][0] : s;
    return r ? `${a} ${h} ago` : `in ${a} ${h}`;
}
function vl(s, t) {
    let e = '';
    for (let i of s) i.literal ? (e += i.val) : (e += t(i.val));
    return e;
}
var Zf = {
        D: ae,
        DD: Vs,
        DDD: Ws,
        DDDD: Hs,
        t: Bs,
        tt: js,
        ttt: $s,
        tttt: Us,
        T: Ys,
        TT: Zs,
        TTT: qs,
        TTTT: Gs,
        f: Xs,
        ff: Js,
        fff: ti,
        ffff: si,
        F: Ks,
        FF: Qs,
        FFF: ei,
        FFFF: ii,
    },
    X = class {
        static create(t, e = {}) {
            return new X(t, e);
        }
        static parseFormat(t) {
            let e = null,
                i = '',
                n = !1,
                o = [];
            for (let r = 0; r < t.length; r++) {
                let a = t.charAt(r);
                a === "'"
                    ? (i.length > 0 && o.push({ literal: n || /^\s+$/.test(i), val: i }),
                      (e = null),
                      (i = ''),
                      (n = !n))
                    : n || a === e
                      ? (i += a)
                      : (i.length > 0 && o.push({ literal: /^\s+$/.test(i), val: i }),
                        (i = a),
                        (e = a));
            }
            return i.length > 0 && o.push({ literal: n || /^\s+$/.test(i), val: i }), o;
        }
        static macroTokenToFormatOpts(t) {
            return Zf[t];
        }
        constructor(t, e) {
            (this.opts = e), (this.loc = t), (this.systemLoc = null);
        }
        formatWithSystemDefault(t, e) {
            return (
                this.systemLoc === null && (this.systemLoc = this.loc.redefaultToSystem()),
                this.systemLoc.dtFormatter(t, { ...this.opts, ...e }).format()
            );
        }
        dtFormatter(t, e = {}) {
            return this.loc.dtFormatter(t, { ...this.opts, ...e });
        }
        formatDateTime(t, e) {
            return this.dtFormatter(t, e).format();
        }
        formatDateTimeParts(t, e) {
            return this.dtFormatter(t, e).formatToParts();
        }
        formatInterval(t, e) {
            return this.dtFormatter(t.start, e).dtf.formatRange(
                t.start.toJSDate(),
                t.end.toJSDate(),
            );
        }
        resolvedOptions(t, e) {
            return this.dtFormatter(t, e).resolvedOptions();
        }
        num(t, e = 0) {
            if (this.opts.forceSimple) return q(t, e);
            let i = { ...this.opts };
            return e > 0 && (i.padTo = e), this.loc.numberFormatter(i).format(t);
        }
        formatDateTimeFromString(t, e) {
            let i = this.loc.listingMode() === 'en',
                n = this.loc.outputCalendar && this.loc.outputCalendar !== 'gregory',
                o = (f, m) => this.loc.extract(t, f, m),
                r = (f) =>
                    t.isOffsetFixed && t.offset === 0 && f.allowZ
                        ? 'Z'
                        : t.isValid
                          ? t.zone.formatOffset(t.ts, f.format)
                          : '',
                a = () => (i ? wl(t) : o({ hour: 'numeric', hourCycle: 'h12' }, 'dayperiod')),
                l = (f, m) =>
                    i ? Ml(t, f) : o(m ? { month: f } : { month: f, day: 'numeric' }, 'month'),
                c = (f, m) =>
                    i
                        ? Sl(t, f)
                        : o(
                              m
                                  ? { weekday: f }
                                  : {
                                        weekday: f,
                                        month: 'long',
                                        day: 'numeric',
                                    },
                              'weekday',
                          ),
                h = (f) => {
                    let m = X.macroTokenToFormatOpts(f);
                    return m ? this.formatWithSystemDefault(t, m) : f;
                },
                u = (f) => (i ? Tl(t, f) : o({ era: f }, 'era')),
                d = (f) => {
                    switch (f) {
                        case 'S':
                            return this.num(t.millisecond);
                        case 'u':
                        case 'SSS':
                            return this.num(t.millisecond, 3);
                        case 's':
                            return this.num(t.second);
                        case 'ss':
                            return this.num(t.second, 2);
                        case 'uu':
                            return this.num(Math.floor(t.millisecond / 10), 2);
                        case 'uuu':
                            return this.num(Math.floor(t.millisecond / 100));
                        case 'm':
                            return this.num(t.minute);
                        case 'mm':
                            return this.num(t.minute, 2);
                        case 'h':
                            return this.num(t.hour % 12 === 0 ? 12 : t.hour % 12);
                        case 'hh':
                            return this.num(t.hour % 12 === 0 ? 12 : t.hour % 12, 2);
                        case 'H':
                            return this.num(t.hour);
                        case 'HH':
                            return this.num(t.hour, 2);
                        case 'Z':
                            return r({
                                format: 'narrow',
                                allowZ: this.opts.allowZ,
                            });
                        case 'ZZ':
                            return r({
                                format: 'short',
                                allowZ: this.opts.allowZ,
                            });
                        case 'ZZZ':
                            return r({
                                format: 'techie',
                                allowZ: this.opts.allowZ,
                            });
                        case 'ZZZZ':
                            return t.zone.offsetName(t.ts, {
                                format: 'short',
                                locale: this.loc.locale,
                            });
                        case 'ZZZZZ':
                            return t.zone.offsetName(t.ts, {
                                format: 'long',
                                locale: this.loc.locale,
                            });
                        case 'z':
                            return t.zoneName;
                        case 'a':
                            return a();
                        case 'd':
                            return n ? o({ day: 'numeric' }, 'day') : this.num(t.day);
                        case 'dd':
                            return n ? o({ day: '2-digit' }, 'day') : this.num(t.day, 2);
                        case 'c':
                            return this.num(t.weekday);
                        case 'ccc':
                            return c('short', !0);
                        case 'cccc':
                            return c('long', !0);
                        case 'ccccc':
                            return c('narrow', !0);
                        case 'E':
                            return this.num(t.weekday);
                        case 'EEE':
                            return c('short', !1);
                        case 'EEEE':
                            return c('long', !1);
                        case 'EEEEE':
                            return c('narrow', !1);
                        case 'L':
                            return n
                                ? o({ month: 'numeric', day: 'numeric' }, 'month')
                                : this.num(t.month);
                        case 'LL':
                            return n
                                ? o({ month: '2-digit', day: 'numeric' }, 'month')
                                : this.num(t.month, 2);
                        case 'LLL':
                            return l('short', !0);
                        case 'LLLL':
                            return l('long', !0);
                        case 'LLLLL':
                            return l('narrow', !0);
                        case 'M':
                            return n ? o({ month: 'numeric' }, 'month') : this.num(t.month);
                        case 'MM':
                            return n ? o({ month: '2-digit' }, 'month') : this.num(t.month, 2);
                        case 'MMM':
                            return l('short', !1);
                        case 'MMMM':
                            return l('long', !1);
                        case 'MMMMM':
                            return l('narrow', !1);
                        case 'y':
                            return n ? o({ year: 'numeric' }, 'year') : this.num(t.year);
                        case 'yy':
                            return n
                                ? o({ year: '2-digit' }, 'year')
                                : this.num(t.year.toString().slice(-2), 2);
                        case 'yyyy':
                            return n ? o({ year: 'numeric' }, 'year') : this.num(t.year, 4);
                        case 'yyyyyy':
                            return n ? o({ year: 'numeric' }, 'year') : this.num(t.year, 6);
                        case 'G':
                            return u('short');
                        case 'GG':
                            return u('long');
                        case 'GGGGG':
                            return u('narrow');
                        case 'kk':
                            return this.num(t.weekYear.toString().slice(-2), 2);
                        case 'kkkk':
                            return this.num(t.weekYear, 4);
                        case 'W':
                            return this.num(t.weekNumber);
                        case 'WW':
                            return this.num(t.weekNumber, 2);
                        case 'o':
                            return this.num(t.ordinal);
                        case 'ooo':
                            return this.num(t.ordinal, 3);
                        case 'q':
                            return this.num(t.quarter);
                        case 'qq':
                            return this.num(t.quarter, 2);
                        case 'X':
                            return this.num(Math.floor(t.ts / 1e3));
                        case 'x':
                            return this.num(t.ts);
                        default:
                            return h(f);
                    }
                };
            return vl(X.parseFormat(e), d);
        }
        formatDurationFromString(t, e) {
            let i = (l) => {
                    switch (l[0]) {
                        case 'S':
                            return 'millisecond';
                        case 's':
                            return 'second';
                        case 'm':
                            return 'minute';
                        case 'h':
                            return 'hour';
                        case 'd':
                            return 'day';
                        case 'w':
                            return 'week';
                        case 'M':
                            return 'month';
                        case 'y':
                            return 'year';
                        default:
                            return null;
                    }
                },
                n = (l) => (c) => {
                    let h = i(c);
                    return h ? this.num(l.get(h), c.length) : c;
                },
                o = X.parseFormat(e),
                r = o.reduce((l, { literal: c, val: h }) => (c ? l : l.concat(h)), []),
                a = t.shiftTo(...r.map(i).filter((l) => l));
            return vl(o, n(a));
        }
    };
var ot = class {
    constructor(t, e) {
        (this.reason = t), (this.explanation = e);
    }
    toMessage() {
        return this.explanation ? `${this.reason}: ${this.explanation}` : this.reason;
    }
};
var Ol = /[A-Za-z_+-]{1,256}(?::?\/[A-Za-z0-9_+-]{1,256}(?:\/[A-Za-z0-9_+-]{1,256})?)?/;
function as(...s) {
    let t = s.reduce((e, i) => e + i.source, '');
    return RegExp(`^${t}$`);
}
function ls(...s) {
    return (t) =>
        s
            .reduce(
                ([e, i, n], o) => {
                    let [r, a, l] = o(t, n);
                    return [{ ...e, ...r }, a || i, l];
                },
                [{}, null, 1],
            )
            .slice(0, 2);
}
function cs(s, ...t) {
    if (s == null) return [null, null];
    for (let [e, i] of t) {
        let n = e.exec(s);
        if (n) return i(n);
    }
    return [null, null];
}
function El(...s) {
    return (t, e) => {
        let i = {},
            n;
        for (n = 0; n < s.length; n++) i[s[n]] = qt(t[e + n]);
        return [i, null, e + n];
    };
}
var Dl = /(?:(Z)|([+-]\d\d)(?::?(\d\d))?)/,
    qf = `(?:${Dl.source}?(?:\\[(${Ol.source})\\])?)?`,
    jo = /(\d\d)(?::?(\d\d)(?::?(\d\d)(?:[.,](\d{1,30}))?)?)?/,
    Cl = RegExp(`${jo.source}${qf}`),
    $o = RegExp(`(?:T${Cl.source})?`),
    Gf = /([+-]\d{6}|\d{4})(?:-?(\d\d)(?:-?(\d\d))?)?/,
    Xf = /(\d{4})-?W(\d\d)(?:-?(\d))?/,
    Kf = /(\d{4})-?(\d{3})/,
    Jf = El('weekYear', 'weekNumber', 'weekDay'),
    Qf = El('year', 'ordinal'),
    tm = /(\d{4})-(\d\d)-(\d\d)/,
    Il = RegExp(`${jo.source} ?(?:${Dl.source}|(${Ol.source}))?`),
    em = RegExp(`(?: ${Il.source})?`);
function rs(s, t, e) {
    let i = s[t];
    return C(i) ? e : qt(i);
}
function sm(s, t) {
    return [{ year: rs(s, t), month: rs(s, t + 1, 1), day: rs(s, t + 2, 1) }, null, t + 3];
}
function hs(s, t) {
    return [
        {
            hours: rs(s, t, 0),
            minutes: rs(s, t + 1, 0),
            seconds: rs(s, t + 2, 0),
            milliseconds: ri(s[t + 3]),
        },
        null,
        t + 4,
    ];
}
function ci(s, t) {
    let e = !s[t] && !s[t + 1],
        i = we(s[t + 1], s[t + 2]),
        n = e ? null : G.instance(i);
    return [{}, n, t + 3];
}
function hi(s, t) {
    let e = s[t] ? it.create(s[t]) : null;
    return [{}, e, t + 1];
}
var im = RegExp(`^T?${jo.source}$`),
    nm =
        /^-?P(?:(?:(-?\d{1,20}(?:\.\d{1,20})?)Y)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20}(?:\.\d{1,20})?)W)?(?:(-?\d{1,20}(?:\.\d{1,20})?)D)?(?:T(?:(-?\d{1,20}(?:\.\d{1,20})?)H)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20})(?:[.,](-?\d{1,20}))?S)?)?)$/;
function om(s) {
    let [t, e, i, n, o, r, a, l, c] = s,
        h = t[0] === '-',
        u = l && l[0] === '-',
        d = (f, m = !1) => (f !== void 0 && (m || (f && h)) ? -f : f);
    return [
        {
            years: d(he(e)),
            months: d(he(i)),
            weeks: d(he(n)),
            days: d(he(o)),
            hours: d(he(r)),
            minutes: d(he(a)),
            seconds: d(he(l), l === '-0'),
            milliseconds: d(ri(c), u),
        },
    ];
}
var rm = {
    GMT: 0,
    EDT: -4 * 60,
    EST: -5 * 60,
    CDT: -5 * 60,
    CST: -6 * 60,
    MDT: -6 * 60,
    MST: -7 * 60,
    PDT: -7 * 60,
    PST: -8 * 60,
};
function Uo(s, t, e, i, n, o, r) {
    let a = {
        year: t.length === 2 ? ai(qt(t)) : qt(t),
        month: Wo.indexOf(e) + 1,
        day: qt(i),
        hour: qt(n),
        minute: qt(o),
    };
    return (
        r && (a.second = qt(r)),
        s && (a.weekday = s.length > 3 ? Ho.indexOf(s) + 1 : Bo.indexOf(s) + 1),
        a
    );
}
var am =
    /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|(?:([+-]\d\d)(\d\d)))$/;
function lm(s) {
    let [, t, e, i, n, o, r, a, l, c, h, u] = s,
        d = Uo(t, n, i, e, o, r, a),
        f;
    return l ? (f = rm[l]) : c ? (f = 0) : (f = we(h, u)), [d, new G(f)];
}
function cm(s) {
    return s
        .replace(/\([^()]*\)|[\n\t]/g, ' ')
        .replace(/(\s\s+)/g, ' ')
        .trim();
}
var hm =
        /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun), (\d\d) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{4}) (\d\d):(\d\d):(\d\d) GMT$/,
    um =
        /^(Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday), (\d\d)-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-(\d\d) (\d\d):(\d\d):(\d\d) GMT$/,
    dm =
        /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ( \d|\d\d) (\d\d):(\d\d):(\d\d) (\d{4})$/;
function kl(s) {
    let [, t, e, i, n, o, r, a] = s;
    return [Uo(t, n, i, e, o, r, a), G.utcInstance];
}
function fm(s) {
    let [, t, e, i, n, o, r, a] = s;
    return [Uo(t, a, e, i, n, o, r), G.utcInstance];
}
var mm = as(Gf, $o),
    gm = as(Xf, $o),
    pm = as(Kf, $o),
    bm = as(Cl),
    Al = ls(sm, hs, ci, hi),
    ym = ls(Jf, hs, ci, hi),
    xm = ls(Qf, hs, ci, hi),
    _m = ls(hs, ci, hi);
function Fl(s) {
    return cs(s, [mm, Al], [gm, ym], [pm, xm], [bm, _m]);
}
function Ll(s) {
    return cs(cm(s), [am, lm]);
}
function Pl(s) {
    return cs(s, [hm, kl], [um, kl], [dm, fm]);
}
function Rl(s) {
    return cs(s, [nm, om]);
}
var wm = ls(hs);
function Nl(s) {
    return cs(s, [im, wm]);
}
var Sm = as(tm, em),
    Mm = as(Il),
    Tm = ls(hs, ci, hi);
function zl(s) {
    return cs(s, [Sm, Al], [Mm, Tm]);
}
var Vl = 'Invalid Duration',
    Hl = {
        weeks: {
            days: 7,
            hours: 7 * 24,
            minutes: 7 * 24 * 60,
            seconds: 7 * 24 * 60 * 60,
            milliseconds: 7 * 24 * 60 * 60 * 1e3,
        },
        days: {
            hours: 24,
            minutes: 24 * 60,
            seconds: 24 * 60 * 60,
            milliseconds: 24 * 60 * 60 * 1e3,
        },
        hours: { minutes: 60, seconds: 60 * 60, milliseconds: 60 * 60 * 1e3 },
        minutes: { seconds: 60, milliseconds: 60 * 1e3 },
        seconds: { milliseconds: 1e3 },
    },
    vm = {
        years: {
            quarters: 4,
            months: 12,
            weeks: 52,
            days: 365,
            hours: 365 * 24,
            minutes: 365 * 24 * 60,
            seconds: 365 * 24 * 60 * 60,
            milliseconds: 365 * 24 * 60 * 60 * 1e3,
        },
        quarters: {
            months: 3,
            weeks: 13,
            days: 91,
            hours: 91 * 24,
            minutes: 91 * 24 * 60,
            seconds: 91 * 24 * 60 * 60,
            milliseconds: 91 * 24 * 60 * 60 * 1e3,
        },
        months: {
            weeks: 4,
            days: 30,
            hours: 30 * 24,
            minutes: 30 * 24 * 60,
            seconds: 30 * 24 * 60 * 60,
            milliseconds: 30 * 24 * 60 * 60 * 1e3,
        },
        ...Hl,
    },
    wt = 146097 / 400,
    us = 146097 / 4800,
    km = {
        years: {
            quarters: 4,
            months: 12,
            weeks: wt / 7,
            days: wt,
            hours: wt * 24,
            minutes: wt * 24 * 60,
            seconds: wt * 24 * 60 * 60,
            milliseconds: wt * 24 * 60 * 60 * 1e3,
        },
        quarters: {
            months: 3,
            weeks: wt / 28,
            days: wt / 4,
            hours: (wt * 24) / 4,
            minutes: (wt * 24 * 60) / 4,
            seconds: (wt * 24 * 60 * 60) / 4,
            milliseconds: (wt * 24 * 60 * 60 * 1e3) / 4,
        },
        months: {
            weeks: us / 7,
            days: us,
            hours: us * 24,
            minutes: us * 24 * 60,
            seconds: us * 24 * 60 * 60,
            milliseconds: us * 24 * 60 * 60 * 1e3,
        },
        ...Hl,
    },
    Te = [
        'years',
        'quarters',
        'months',
        'weeks',
        'days',
        'hours',
        'minutes',
        'seconds',
        'milliseconds',
    ],
    Om = Te.slice(0).reverse();
function ue(s, t, e = !1) {
    let i = {
        values: e ? t.values : { ...s.values, ...(t.values || {}) },
        loc: s.loc.clone(t.loc),
        conversionAccuracy: t.conversionAccuracy || s.conversionAccuracy,
        matrix: t.matrix || s.matrix,
    };
    return new I(i);
}
function Bl(s, t) {
    let e = t.milliseconds ?? 0;
    for (let i of Om.slice(1)) t[i] && (e += t[i] * s[i].milliseconds);
    return e;
}
function Wl(s, t) {
    let e = Bl(s, t) < 0 ? -1 : 1;
    Te.reduceRight((i, n) => {
        if (C(t[n])) return i;
        if (i) {
            let o = t[i] * e,
                r = s[n][i],
                a = Math.floor(o / r);
            (t[n] += a * e), (t[i] -= a * r * e);
        }
        return n;
    }, null),
        Te.reduce((i, n) => {
            if (C(t[n])) return i;
            if (i) {
                let o = t[i] % 1;
                (t[i] -= o), (t[n] += o * s[i][n]);
            }
            return n;
        }, null);
}
function Em(s) {
    let t = {};
    for (let [e, i] of Object.entries(s)) i !== 0 && (t[e] = i);
    return t;
}
var I = class {
    constructor(t) {
        let e = t.conversionAccuracy === 'longterm' || !1,
            i = e ? km : vm;
        t.matrix && (i = t.matrix),
            (this.values = t.values),
            (this.loc = t.loc || N.create()),
            (this.conversionAccuracy = e ? 'longterm' : 'casual'),
            (this.invalid = t.invalid || null),
            (this.matrix = i),
            (this.isLuxonDuration = !0);
    }
    static fromMillis(t, e) {
        return I.fromObject({ milliseconds: t }, e);
    }
    static fromObject(t, e = {}) {
        if (t == null || typeof t != 'object')
            throw new nt(
                `Duration.fromObject: argument expected to be an object, got ${
                    t === null ? 'null' : typeof t
                }`,
            );
        return new I({
            values: os(t, I.normalizeUnit),
            loc: N.fromObject(e),
            conversionAccuracy: e.conversionAccuracy,
            matrix: e.matrix,
        });
    }
    static fromDurationLike(t) {
        if (Nt(t)) return I.fromMillis(t);
        if (I.isDuration(t)) return t;
        if (typeof t == 'object') return I.fromObject(t);
        throw new nt(`Unknown duration argument ${t} of type ${typeof t}`);
    }
    static fromISO(t, e) {
        let [i] = Rl(t);
        return i
            ? I.fromObject(i, e)
            : I.invalid('unparsable', `the input "${t}" can't be parsed as ISO 8601`);
    }
    static fromISOTime(t, e) {
        let [i] = Nl(t);
        return i
            ? I.fromObject(i, e)
            : I.invalid('unparsable', `the input "${t}" can't be parsed as ISO 8601`);
    }
    static invalid(t, e = null) {
        if (!t) throw new nt('need to specify a reason the Duration is invalid');
        let i = t instanceof ot ? t : new ot(t, e);
        if (H.throwOnInvalid) throw new Gi(i);
        return new I({ invalid: i });
    }
    static normalizeUnit(t) {
        let e = {
            year: 'years',
            years: 'years',
            quarter: 'quarters',
            quarters: 'quarters',
            month: 'months',
            months: 'months',
            week: 'weeks',
            weeks: 'weeks',
            day: 'days',
            days: 'days',
            hour: 'hours',
            hours: 'hours',
            minute: 'minutes',
            minutes: 'minutes',
            second: 'seconds',
            seconds: 'seconds',
            millisecond: 'milliseconds',
            milliseconds: 'milliseconds',
        }[t && t.toLowerCase()];
        if (!e) throw new Qe(t);
        return e;
    }
    static isDuration(t) {
        return (t && t.isLuxonDuration) || !1;
    }
    get locale() {
        return this.isValid ? this.loc.locale : null;
    }
    get numberingSystem() {
        return this.isValid ? this.loc.numberingSystem : null;
    }
    toFormat(t, e = {}) {
        let i = { ...e, floor: e.round !== !1 && e.floor !== !1 };
        return this.isValid ? X.create(this.loc, i).formatDurationFromString(this, t) : Vl;
    }
    toHuman(t = {}) {
        if (!this.isValid) return Vl;
        let e = Te.map((i) => {
            let n = this.values[i];
            return C(n)
                ? null
                : this.loc
                      .numberFormatter({
                          style: 'unit',
                          unitDisplay: 'long',
                          ...t,
                          unit: i.slice(0, -1),
                      })
                      .format(n);
        }).filter((i) => i);
        return this.loc
            .listFormatter({
                type: 'conjunction',
                style: t.listStyle || 'narrow',
                ...t,
            })
            .format(e);
    }
    toObject() {
        return this.isValid ? { ...this.values } : {};
    }
    toISO() {
        if (!this.isValid) return null;
        let t = 'P';
        return (
            this.years !== 0 && (t += this.years + 'Y'),
            (this.months !== 0 || this.quarters !== 0) &&
                (t += this.months + this.quarters * 3 + 'M'),
            this.weeks !== 0 && (t += this.weeks + 'W'),
            this.days !== 0 && (t += this.days + 'D'),
            (this.hours !== 0 ||
                this.minutes !== 0 ||
                this.seconds !== 0 ||
                this.milliseconds !== 0) &&
                (t += 'T'),
            this.hours !== 0 && (t += this.hours + 'H'),
            this.minutes !== 0 && (t += this.minutes + 'M'),
            (this.seconds !== 0 || this.milliseconds !== 0) &&
                (t += es(this.seconds + this.milliseconds / 1e3, 3) + 'S'),
            t === 'P' && (t += 'T0S'),
            t
        );
    }
    toISOTime(t = {}) {
        if (!this.isValid) return null;
        let e = this.toMillis();
        return e < 0 || e >= 864e5
            ? null
            : ((t = {
                  suppressMilliseconds: !1,
                  suppressSeconds: !1,
                  includePrefix: !1,
                  format: 'extended',
                  ...t,
                  includeOffset: !1,
              }),
              O.fromMillis(e, { zone: 'UTC' }).toISOTime(t));
    }
    toJSON() {
        return this.toISO();
    }
    toString() {
        return this.toISO();
    }
    toMillis() {
        return this.isValid ? Bl(this.matrix, this.values) : NaN;
    }
    valueOf() {
        return this.toMillis();
    }
    plus(t) {
        if (!this.isValid) return this;
        let e = I.fromDurationLike(t),
            i = {};
        for (let n of Te)
            (ce(e.values, n) || ce(this.values, n)) && (i[n] = e.get(n) + this.get(n));
        return ue(this, { values: i }, !0);
    }
    minus(t) {
        if (!this.isValid) return this;
        let e = I.fromDurationLike(t);
        return this.plus(e.negate());
    }
    mapUnits(t) {
        if (!this.isValid) return this;
        let e = {};
        for (let i of Object.keys(this.values)) e[i] = Vo(t(this.values[i], i));
        return ue(this, { values: e }, !0);
    }
    get(t) {
        return this[I.normalizeUnit(t)];
    }
    set(t) {
        if (!this.isValid) return this;
        let e = { ...this.values, ...os(t, I.normalizeUnit) };
        return ue(this, { values: e });
    }
    reconfigure({ locale: t, numberingSystem: e, conversionAccuracy: i, matrix: n } = {}) {
        let r = {
            loc: this.loc.clone({ locale: t, numberingSystem: e }),
            matrix: n,
            conversionAccuracy: i,
        };
        return ue(this, r);
    }
    as(t) {
        return this.isValid ? this.shiftTo(t).get(t) : NaN;
    }
    normalize() {
        if (!this.isValid) return this;
        let t = this.toObject();
        return Wl(this.matrix, t), ue(this, { values: t }, !0);
    }
    rescale() {
        if (!this.isValid) return this;
        let t = Em(this.normalize().shiftToAll().toObject());
        return ue(this, { values: t }, !0);
    }
    shiftTo(...t) {
        if (!this.isValid) return this;
        if (t.length === 0) return this;
        t = t.map((r) => I.normalizeUnit(r));
        let e = {},
            i = {},
            n = this.toObject(),
            o;
        for (let r of Te)
            if (t.indexOf(r) >= 0) {
                o = r;
                let a = 0;
                for (let c in i) (a += this.matrix[c][r] * i[c]), (i[c] = 0);
                Nt(n[r]) && (a += n[r]);
                let l = Math.trunc(a);
                (e[r] = l), (i[r] = (a * 1e3 - l * 1e3) / 1e3);
            } else Nt(n[r]) && (i[r] = n[r]);
        for (let r in i) i[r] !== 0 && (e[o] += r === o ? i[r] : i[r] / this.matrix[o][r]);
        return Wl(this.matrix, e), ue(this, { values: e }, !0);
    }
    shiftToAll() {
        return this.isValid
            ? this.shiftTo(
                  'years',
                  'months',
                  'weeks',
                  'days',
                  'hours',
                  'minutes',
                  'seconds',
                  'milliseconds',
              )
            : this;
    }
    negate() {
        if (!this.isValid) return this;
        let t = {};
        for (let e of Object.keys(this.values)) t[e] = this.values[e] === 0 ? 0 : -this.values[e];
        return ue(this, { values: t }, !0);
    }
    get years() {
        return this.isValid ? this.values.years || 0 : NaN;
    }
    get quarters() {
        return this.isValid ? this.values.quarters || 0 : NaN;
    }
    get months() {
        return this.isValid ? this.values.months || 0 : NaN;
    }
    get weeks() {
        return this.isValid ? this.values.weeks || 0 : NaN;
    }
    get days() {
        return this.isValid ? this.values.days || 0 : NaN;
    }
    get hours() {
        return this.isValid ? this.values.hours || 0 : NaN;
    }
    get minutes() {
        return this.isValid ? this.values.minutes || 0 : NaN;
    }
    get seconds() {
        return this.isValid ? this.values.seconds || 0 : NaN;
    }
    get milliseconds() {
        return this.isValid ? this.values.milliseconds || 0 : NaN;
    }
    get isValid() {
        return this.invalid === null;
    }
    get invalidReason() {
        return this.invalid ? this.invalid.reason : null;
    }
    get invalidExplanation() {
        return this.invalid ? this.invalid.explanation : null;
    }
    equals(t) {
        if (!this.isValid || !t.isValid || !this.loc.equals(t.loc)) return !1;
        function e(i, n) {
            return i === void 0 || i === 0 ? n === void 0 || n === 0 : i === n;
        }
        for (let i of Te) if (!e(this.values[i], t.values[i])) return !1;
        return !0;
    }
};
var ds = 'Invalid Interval';
function Dm(s, t) {
    return !s || !s.isValid
        ? U.invalid('missing or invalid start')
        : !t || !t.isValid
          ? U.invalid('missing or invalid end')
          : t < s
            ? U.invalid(
                  'end before start',
                  `The end of an interval must be after its start, but you had start=${s.toISO()} and end=${t.toISO()}`,
              )
            : null;
}
var U = class {
    constructor(t) {
        (this.s = t.start),
            (this.e = t.end),
            (this.invalid = t.invalid || null),
            (this.isLuxonInterval = !0);
    }
    static invalid(t, e = null) {
        if (!t) throw new nt('need to specify a reason the Interval is invalid');
        let i = t instanceof ot ? t : new ot(t, e);
        if (H.throwOnInvalid) throw new qi(i);
        return new U({ invalid: i });
    }
    static fromDateTimes(t, e) {
        let i = fs(t),
            n = fs(e),
            o = Dm(i, n);
        return o ?? new U({ start: i, end: n });
    }
    static after(t, e) {
        let i = I.fromDurationLike(e),
            n = fs(t);
        return U.fromDateTimes(n, n.plus(i));
    }
    static before(t, e) {
        let i = I.fromDurationLike(e),
            n = fs(t);
        return U.fromDateTimes(n.minus(i), n);
    }
    static fromISO(t, e) {
        let [i, n] = (t || '').split('/', 2);
        if (i && n) {
            let o, r;
            try {
                (o = O.fromISO(i, e)), (r = o.isValid);
            } catch {
                r = !1;
            }
            let a, l;
            try {
                (a = O.fromISO(n, e)), (l = a.isValid);
            } catch {
                l = !1;
            }
            if (r && l) return U.fromDateTimes(o, a);
            if (r) {
                let c = I.fromISO(n, e);
                if (c.isValid) return U.after(o, c);
            } else if (l) {
                let c = I.fromISO(i, e);
                if (c.isValid) return U.before(a, c);
            }
        }
        return U.invalid('unparsable', `the input "${t}" can't be parsed as ISO 8601`);
    }
    static isInterval(t) {
        return (t && t.isLuxonInterval) || !1;
    }
    get start() {
        return this.isValid ? this.s : null;
    }
    get end() {
        return this.isValid ? this.e : null;
    }
    get isValid() {
        return this.invalidReason === null;
    }
    get invalidReason() {
        return this.invalid ? this.invalid.reason : null;
    }
    get invalidExplanation() {
        return this.invalid ? this.invalid.explanation : null;
    }
    length(t = 'milliseconds') {
        return this.isValid ? this.toDuration(t).get(t) : NaN;
    }
    count(t = 'milliseconds') {
        if (!this.isValid) return NaN;
        let e = this.start.startOf(t),
            i = this.end.startOf(t);
        return Math.floor(i.diff(e, t).get(t)) + (i.valueOf() !== this.end.valueOf());
    }
    hasSame(t) {
        return this.isValid ? this.isEmpty() || this.e.minus(1).hasSame(this.s, t) : !1;
    }
    isEmpty() {
        return this.s.valueOf() === this.e.valueOf();
    }
    isAfter(t) {
        return this.isValid ? this.s > t : !1;
    }
    isBefore(t) {
        return this.isValid ? this.e <= t : !1;
    }
    contains(t) {
        return this.isValid ? this.s <= t && this.e > t : !1;
    }
    set({ start: t, end: e } = {}) {
        return this.isValid ? U.fromDateTimes(t || this.s, e || this.e) : this;
    }
    splitAt(...t) {
        if (!this.isValid) return [];
        let e = t
                .map(fs)
                .filter((r) => this.contains(r))
                .sort(),
            i = [],
            { s: n } = this,
            o = 0;
        for (; n < this.e; ) {
            let r = e[o] || this.e,
                a = +r > +this.e ? this.e : r;
            i.push(U.fromDateTimes(n, a)), (n = a), (o += 1);
        }
        return i;
    }
    splitBy(t) {
        let e = I.fromDurationLike(t);
        if (!this.isValid || !e.isValid || e.as('milliseconds') === 0) return [];
        let { s: i } = this,
            n = 1,
            o,
            r = [];
        for (; i < this.e; ) {
            let a = this.start.plus(e.mapUnits((l) => l * n));
            (o = +a > +this.e ? this.e : a), r.push(U.fromDateTimes(i, o)), (i = o), (n += 1);
        }
        return r;
    }
    divideEqually(t) {
        return this.isValid ? this.splitBy(this.length() / t).slice(0, t) : [];
    }
    overlaps(t) {
        return this.e > t.s && this.s < t.e;
    }
    abutsStart(t) {
        return this.isValid ? +this.e == +t.s : !1;
    }
    abutsEnd(t) {
        return this.isValid ? +t.e == +this.s : !1;
    }
    engulfs(t) {
        return this.isValid ? this.s <= t.s && this.e >= t.e : !1;
    }
    equals(t) {
        return !this.isValid || !t.isValid ? !1 : this.s.equals(t.s) && this.e.equals(t.e);
    }
    intersection(t) {
        if (!this.isValid) return this;
        let e = this.s > t.s ? this.s : t.s,
            i = this.e < t.e ? this.e : t.e;
        return e >= i ? null : U.fromDateTimes(e, i);
    }
    union(t) {
        if (!this.isValid) return this;
        let e = this.s < t.s ? this.s : t.s,
            i = this.e > t.e ? this.e : t.e;
        return U.fromDateTimes(e, i);
    }
    static merge(t) {
        let [e, i] = t
            .sort((n, o) => n.s - o.s)
            .reduce(
                ([n, o], r) =>
                    o
                        ? o.overlaps(r) || o.abutsStart(r)
                            ? [n, o.union(r)]
                            : [n.concat([o]), r]
                        : [n, r],
                [[], null],
            );
        return i && e.push(i), e;
    }
    static xor(t) {
        let e = null,
            i = 0,
            n = [],
            o = t.map((l) => [
                { time: l.s, type: 's' },
                { time: l.e, type: 'e' },
            ]),
            r = Array.prototype.concat(...o),
            a = r.sort((l, c) => l.time - c.time);
        for (let l of a)
            (i += l.type === 's' ? 1 : -1),
                i === 1
                    ? (e = l.time)
                    : (e && +e != +l.time && n.push(U.fromDateTimes(e, l.time)), (e = null));
        return U.merge(n);
    }
    difference(...t) {
        return U.xor([this].concat(t))
            .map((e) => this.intersection(e))
            .filter((e) => e && !e.isEmpty());
    }
    toString() {
        return this.isValid ? `[${this.s.toISO()} \u2013 ${this.e.toISO()})` : ds;
    }
    toLocaleString(t = ae, e = {}) {
        return this.isValid ? X.create(this.s.loc.clone(e), t).formatInterval(this) : ds;
    }
    toISO(t) {
        return this.isValid ? `${this.s.toISO(t)}/${this.e.toISO(t)}` : ds;
    }
    toISODate() {
        return this.isValid ? `${this.s.toISODate()}/${this.e.toISODate()}` : ds;
    }
    toISOTime(t) {
        return this.isValid ? `${this.s.toISOTime(t)}/${this.e.toISOTime(t)}` : ds;
    }
    toFormat(t, { separator: e = ' \u2013 ' } = {}) {
        return this.isValid ? `${this.s.toFormat(t)}${e}${this.e.toFormat(t)}` : ds;
    }
    toDuration(t, e) {
        return this.isValid ? this.e.diff(this.s, t, e) : I.invalid(this.invalidReason);
    }
    mapEndpoints(t) {
        return U.fromDateTimes(t(this.s), t(this.e));
    }
};
var Gt = class {
    static hasDST(t = H.defaultZone) {
        let e = O.now().setZone(t).set({ month: 12 });
        return !t.isUniversal && e.offset !== e.set({ month: 6 }).offset;
    }
    static isValidIANAZone(t) {
        return it.isValidZone(t);
    }
    static normalizeZone(t) {
        return Ot(t, H.defaultZone);
    }
    static months(
        t = 'long',
        {
            locale: e = null,
            numberingSystem: i = null,
            locObj: n = null,
            outputCalendar: o = 'gregory',
        } = {},
    ) {
        return (n || N.create(e, i, o)).months(t);
    }
    static monthsFormat(
        t = 'long',
        {
            locale: e = null,
            numberingSystem: i = null,
            locObj: n = null,
            outputCalendar: o = 'gregory',
        } = {},
    ) {
        return (n || N.create(e, i, o)).months(t, !0);
    }
    static weekdays(
        t = 'long',
        { locale: e = null, numberingSystem: i = null, locObj: n = null } = {},
    ) {
        return (n || N.create(e, i, null)).weekdays(t);
    }
    static weekdaysFormat(
        t = 'long',
        { locale: e = null, numberingSystem: i = null, locObj: n = null } = {},
    ) {
        return (n || N.create(e, i, null)).weekdays(t, !0);
    }
    static meridiems({ locale: t = null } = {}) {
        return N.create(t).meridiems();
    }
    static eras(t = 'short', { locale: e = null } = {}) {
        return N.create(e, null, 'gregory').eras(t);
    }
    static features() {
        return { relative: en() };
    }
};
function jl(s, t) {
    let e = (n) => n.toUTC(0, { keepLocalTime: !0 }).startOf('day').valueOf(),
        i = e(t) - e(s);
    return Math.floor(I.fromMillis(i).as('days'));
}
function Cm(s, t, e) {
    let i = [
            ['years', (l, c) => c.year - l.year],
            ['quarters', (l, c) => c.quarter - l.quarter + (c.year - l.year) * 4],
            ['months', (l, c) => c.month - l.month + (c.year - l.year) * 12],
            [
                'weeks',
                (l, c) => {
                    let h = jl(l, c);
                    return (h - (h % 7)) / 7;
                },
            ],
            ['days', jl],
        ],
        n = {},
        o = s,
        r,
        a;
    for (let [l, c] of i)
        e.indexOf(l) >= 0 &&
            ((r = l),
            (n[l] = c(s, t)),
            (a = o.plus(n)),
            a > t
                ? (n[l]--, (s = o.plus(n)), s > t && ((a = s), n[l]--, (s = o.plus(n))))
                : (s = a));
    return [s, n, a, r];
}
function $l(s, t, e, i) {
    let [n, o, r, a] = Cm(s, t, e),
        l = t - n,
        c = e.filter((u) => ['hours', 'minutes', 'seconds', 'milliseconds'].indexOf(u) >= 0);
    c.length === 0 &&
        (r < t && (r = n.plus({ [a]: 1 })), r !== n && (o[a] = (o[a] || 0) + l / (r - n)));
    let h = I.fromObject(o, i);
    return c.length > 0
        ? I.fromMillis(l, i)
              .shiftTo(...c)
              .plus(h)
        : h;
}
var Yo = {
        arab: '[\u0660-\u0669]',
        arabext: '[\u06F0-\u06F9]',
        bali: '[\u1B50-\u1B59]',
        beng: '[\u09E6-\u09EF]',
        deva: '[\u0966-\u096F]',
        fullwide: '[\uFF10-\uFF19]',
        gujr: '[\u0AE6-\u0AEF]',
        hanidec: '[\u3007|\u4E00|\u4E8C|\u4E09|\u56DB|\u4E94|\u516D|\u4E03|\u516B|\u4E5D]',
        khmr: '[\u17E0-\u17E9]',
        knda: '[\u0CE6-\u0CEF]',
        laoo: '[\u0ED0-\u0ED9]',
        limb: '[\u1946-\u194F]',
        mlym: '[\u0D66-\u0D6F]',
        mong: '[\u1810-\u1819]',
        mymr: '[\u1040-\u1049]',
        orya: '[\u0B66-\u0B6F]',
        tamldec: '[\u0BE6-\u0BEF]',
        telu: '[\u0C66-\u0C6F]',
        thai: '[\u0E50-\u0E59]',
        tibt: '[\u0F20-\u0F29]',
        latn: '\\d',
    },
    Ul = {
        arab: [1632, 1641],
        arabext: [1776, 1785],
        bali: [6992, 7001],
        beng: [2534, 2543],
        deva: [2406, 2415],
        fullwide: [65296, 65303],
        gujr: [2790, 2799],
        khmr: [6112, 6121],
        knda: [3302, 3311],
        laoo: [3792, 3801],
        limb: [6470, 6479],
        mlym: [3430, 3439],
        mong: [6160, 6169],
        mymr: [4160, 4169],
        orya: [2918, 2927],
        tamldec: [3046, 3055],
        telu: [3174, 3183],
        thai: [3664, 3673],
        tibt: [3872, 3881],
    },
    Im = Yo.hanidec.replace(/[\[|\]]/g, '').split('');
function Yl(s) {
    let t = parseInt(s, 10);
    if (isNaN(t)) {
        t = '';
        for (let e = 0; e < s.length; e++) {
            let i = s.charCodeAt(e);
            if (s[e].search(Yo.hanidec) !== -1) t += Im.indexOf(s[e]);
            else
                for (let n in Ul) {
                    let [o, r] = Ul[n];
                    i >= o && i <= r && (t += i - o);
                }
        }
        return parseInt(t, 10);
    } else return t;
}
function St({ numberingSystem: s }, t = '') {
    return new RegExp(`${Yo[s || 'latn']}${t}`);
}
var Am = 'missing Intl.DateTimeFormat.formatToParts support';
function V(s, t = (e) => e) {
    return { regex: s, deser: ([e]) => t(Yl(e)) };
}
var Fm = String.fromCharCode(160),
    Gl = `[ ${Fm}]`,
    Xl = new RegExp(Gl, 'g');
function Lm(s) {
    return s.replace(/\./g, '\\.?').replace(Xl, Gl);
}
function Zl(s) {
    return s.replace(/\./g, '').replace(Xl, ' ').toLowerCase();
}
function Et(s, t) {
    return s === null
        ? null
        : {
              regex: RegExp(s.map(Lm).join('|')),
              deser: ([e]) => s.findIndex((i) => Zl(e) === Zl(i)) + t,
          };
}
function ql(s, t) {
    return { regex: s, deser: ([, e, i]) => we(e, i), groups: t };
}
function sn(s) {
    return { regex: s, deser: ([t]) => t };
}
function Pm(s) {
    return s.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, '\\$&');
}
function Rm(s, t) {
    let e = St(t),
        i = St(t, '{2}'),
        n = St(t, '{3}'),
        o = St(t, '{4}'),
        r = St(t, '{6}'),
        a = St(t, '{1,2}'),
        l = St(t, '{1,3}'),
        c = St(t, '{1,6}'),
        h = St(t, '{1,9}'),
        u = St(t, '{2,4}'),
        d = St(t, '{4,6}'),
        f = (p) => ({
            regex: RegExp(Pm(p.val)),
            deser: ([b]) => b,
            literal: !0,
        }),
        g = ((p) => {
            if (s.literal) return f(p);
            switch (p.val) {
                case 'G':
                    return Et(t.eras('short'), 0);
                case 'GG':
                    return Et(t.eras('long'), 0);
                case 'y':
                    return V(c);
                case 'yy':
                    return V(u, ai);
                case 'yyyy':
                    return V(o);
                case 'yyyyy':
                    return V(d);
                case 'yyyyyy':
                    return V(r);
                case 'M':
                    return V(a);
                case 'MM':
                    return V(i);
                case 'MMM':
                    return Et(t.months('short', !0), 1);
                case 'MMMM':
                    return Et(t.months('long', !0), 1);
                case 'L':
                    return V(a);
                case 'LL':
                    return V(i);
                case 'LLL':
                    return Et(t.months('short', !1), 1);
                case 'LLLL':
                    return Et(t.months('long', !1), 1);
                case 'd':
                    return V(a);
                case 'dd':
                    return V(i);
                case 'o':
                    return V(l);
                case 'ooo':
                    return V(n);
                case 'HH':
                    return V(i);
                case 'H':
                    return V(a);
                case 'hh':
                    return V(i);
                case 'h':
                    return V(a);
                case 'mm':
                    return V(i);
                case 'm':
                    return V(a);
                case 'q':
                    return V(a);
                case 'qq':
                    return V(i);
                case 's':
                    return V(a);
                case 'ss':
                    return V(i);
                case 'S':
                    return V(l);
                case 'SSS':
                    return V(n);
                case 'u':
                    return sn(h);
                case 'uu':
                    return sn(a);
                case 'uuu':
                    return V(e);
                case 'a':
                    return Et(t.meridiems(), 0);
                case 'kkkk':
                    return V(o);
                case 'kk':
                    return V(u, ai);
                case 'W':
                    return V(a);
                case 'WW':
                    return V(i);
                case 'E':
                case 'c':
                    return V(e);
                case 'EEE':
                    return Et(t.weekdays('short', !1), 1);
                case 'EEEE':
                    return Et(t.weekdays('long', !1), 1);
                case 'ccc':
                    return Et(t.weekdays('short', !0), 1);
                case 'cccc':
                    return Et(t.weekdays('long', !0), 1);
                case 'Z':
                case 'ZZ':
                    return ql(new RegExp(`([+-]${a.source})(?::(${i.source}))?`), 2);
                case 'ZZZ':
                    return ql(new RegExp(`([+-]${a.source})(${i.source})?`), 2);
                case 'z':
                    return sn(/[a-z_+-/]{1,256}?/i);
                case ' ':
                    return sn(/[^\S\n\r]/);
                default:
                    return f(p);
            }
        })(s) || { invalidReason: Am };
    return (g.token = s), g;
}
var Nm = {
    year: { '2-digit': 'yy', numeric: 'yyyyy' },
    month: { numeric: 'M', '2-digit': 'MM', short: 'MMM', long: 'MMMM' },
    day: { numeric: 'd', '2-digit': 'dd' },
    weekday: { short: 'EEE', long: 'EEEE' },
    dayperiod: 'a',
    dayPeriod: 'a',
    hour12: { numeric: 'h', '2-digit': 'hh' },
    hour24: { numeric: 'H', '2-digit': 'HH' },
    minute: { numeric: 'm', '2-digit': 'mm' },
    second: { numeric: 's', '2-digit': 'ss' },
    timeZoneName: { long: 'ZZZZZ', short: 'ZZZ' },
};
function zm(s, t, e) {
    let { type: i, value: n } = s;
    if (i === 'literal') {
        let l = /^\s+$/.test(n);
        return { literal: !l, val: l ? ' ' : n };
    }
    let o = t[i],
        r = i;
    i === 'hour' &&
        (t.hour12 != null
            ? (r = t.hour12 ? 'hour12' : 'hour24')
            : t.hourCycle != null
              ? t.hourCycle === 'h11' || t.hourCycle === 'h12'
                  ? (r = 'hour12')
                  : (r = 'hour24')
              : (r = e.hour12 ? 'hour12' : 'hour24'));
    let a = Nm[r];
    if ((typeof a == 'object' && (a = a[o]), a)) return { literal: !1, val: a };
}
function Vm(s) {
    return [`^${s.map((e) => e.regex).reduce((e, i) => `${e}(${i.source})`, '')}$`, s];
}
function Wm(s, t, e) {
    let i = s.match(t);
    if (i) {
        let n = {},
            o = 1;
        for (let r in e)
            if (ce(e, r)) {
                let a = e[r],
                    l = a.groups ? a.groups + 1 : 1;
                !a.literal && a.token && (n[a.token.val[0]] = a.deser(i.slice(o, o + l))), (o += l);
            }
        return [i, n];
    } else return [i, {}];
}
function Hm(s) {
    let t = (o) => {
            switch (o) {
                case 'S':
                    return 'millisecond';
                case 's':
                    return 'second';
                case 'm':
                    return 'minute';
                case 'h':
                case 'H':
                    return 'hour';
                case 'd':
                    return 'day';
                case 'o':
                    return 'ordinal';
                case 'L':
                case 'M':
                    return 'month';
                case 'y':
                    return 'year';
                case 'E':
                case 'c':
                    return 'weekday';
                case 'W':
                    return 'weekNumber';
                case 'k':
                    return 'weekYear';
                case 'q':
                    return 'quarter';
                default:
                    return null;
            }
        },
        e = null,
        i;
    return (
        C(s.z) || (e = it.create(s.z)),
        C(s.Z) || (e || (e = new G(s.Z)), (i = s.Z)),
        C(s.q) || (s.M = (s.q - 1) * 3 + 1),
        C(s.h) || (s.h < 12 && s.a === 1 ? (s.h += 12) : s.h === 12 && s.a === 0 && (s.h = 0)),
        s.G === 0 && s.y && (s.y = -s.y),
        C(s.u) || (s.S = ri(s.u)),
        [
            Object.keys(s).reduce((o, r) => {
                let a = t(r);
                return a && (o[a] = s[r]), o;
            }, {}),
            e,
            i,
        ]
    );
}
var Zo = null;
function Bm() {
    return Zo || (Zo = O.fromMillis(1555555555555)), Zo;
}
function jm(s, t) {
    if (s.literal) return s;
    let e = X.macroTokenToFormatOpts(s.val),
        i = Xo(e, t);
    return i == null || i.includes(void 0) ? s : i;
}
function qo(s, t) {
    return Array.prototype.concat(...s.map((e) => jm(e, t)));
}
function Go(s, t, e) {
    let i = qo(X.parseFormat(e), s),
        n = i.map((r) => Rm(r, s)),
        o = n.find((r) => r.invalidReason);
    if (o) return { input: t, tokens: i, invalidReason: o.invalidReason };
    {
        let [r, a] = Vm(n),
            l = RegExp(r, 'i'),
            [c, h] = Wm(t, l, a),
            [u, d, f] = h ? Hm(h) : [null, null, void 0];
        if (ce(h, 'a') && ce(h, 'H'))
            throw new Zt("Can't include meridiem when specifying 24-hour format");
        return {
            input: t,
            tokens: i,
            regex: l,
            rawMatches: c,
            matches: h,
            result: u,
            zone: d,
            specificOffset: f,
        };
    }
}
function Kl(s, t, e) {
    let { result: i, zone: n, specificOffset: o, invalidReason: r } = Go(s, t, e);
    return [i, n, o, r];
}
function Xo(s, t) {
    if (!s) return null;
    let i = X.create(t, s).dtFormatter(Bm()),
        n = i.formatToParts(),
        o = i.resolvedOptions();
    return n.map((r) => zm(r, s, o));
}
var Jl = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334],
    Ql = [0, 31, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335];
function Mt(s, t) {
    return new ot(
        'unit out of range',
        `you specified ${t} (of type ${typeof t}) as a ${s}, which is invalid`,
    );
}
function tc(s, t, e) {
    let i = new Date(Date.UTC(s, t - 1, e));
    s < 100 && s >= 0 && i.setUTCFullYear(i.getUTCFullYear() - 1900);
    let n = i.getUTCDay();
    return n === 0 ? 7 : n;
}
function ec(s, t, e) {
    return e + (Se(s) ? Ql : Jl)[t - 1];
}
function sc(s, t) {
    let e = Se(s) ? Ql : Jl,
        i = e.findIndex((o) => o < t),
        n = t - e[i];
    return { month: i + 1, day: n };
}
function nn(s) {
    let { year: t, month: e, day: i } = s,
        n = ec(t, e, i),
        o = tc(t, e, i),
        r = Math.floor((n - o + 10) / 7),
        a;
    return (
        r < 1 ? ((a = t - 1), (r = ns(a))) : r > ns(t) ? ((a = t + 1), (r = 1)) : (a = t),
        { weekYear: a, weekNumber: r, weekday: o, ...li(s) }
    );
}
function Ko(s) {
    let { weekYear: t, weekNumber: e, weekday: i } = s,
        n = tc(t, 1, 4),
        o = Me(t),
        r = e * 7 + i - n - 3,
        a;
    r < 1 ? ((a = t - 1), (r += Me(a))) : r > o ? ((a = t + 1), (r -= Me(t))) : (a = t);
    let { month: l, day: c } = sc(a, r);
    return { year: a, month: l, day: c, ...li(s) };
}
function on(s) {
    let { year: t, month: e, day: i } = s,
        n = ec(t, e, i);
    return { year: t, ordinal: n, ...li(s) };
}
function Jo(s) {
    let { year: t, ordinal: e } = s,
        { month: i, day: n } = sc(t, e);
    return { year: t, month: i, day: n, ...li(s) };
}
function ic(s) {
    let t = oi(s.weekYear),
        e = zt(s.weekNumber, 1, ns(s.weekYear)),
        i = zt(s.weekday, 1, 7);
    return t
        ? e
            ? i
                ? !1
                : Mt('weekday', s.weekday)
            : Mt('week', s.week)
        : Mt('weekYear', s.weekYear);
}
function nc(s) {
    let t = oi(s.year),
        e = zt(s.ordinal, 1, Me(s.year));
    return t ? (e ? !1 : Mt('ordinal', s.ordinal)) : Mt('year', s.year);
}
function Qo(s) {
    let t = oi(s.year),
        e = zt(s.month, 1, 12),
        i = zt(s.day, 1, is(s.year, s.month));
    return t ? (e ? (i ? !1 : Mt('day', s.day)) : Mt('month', s.month)) : Mt('year', s.year);
}
function tr(s) {
    let { hour: t, minute: e, second: i, millisecond: n } = s,
        o = zt(t, 0, 23) || (t === 24 && e === 0 && i === 0 && n === 0),
        r = zt(e, 0, 59),
        a = zt(i, 0, 59),
        l = zt(n, 0, 999);
    return o
        ? r
            ? a
                ? l
                    ? !1
                    : Mt('millisecond', n)
                : Mt('second', i)
            : Mt('minute', e)
        : Mt('hour', t);
}
var er = 'Invalid DateTime',
    oc = 864e13;
function rn(s) {
    return new ot('unsupported zone', `the zone "${s.name}" is not supported`);
}
function sr(s) {
    return s.weekData === null && (s.weekData = nn(s.c)), s.weekData;
}
function ve(s, t) {
    let e = {
        ts: s.ts,
        zone: s.zone,
        c: s.c,
        o: s.o,
        loc: s.loc,
        invalid: s.invalid,
    };
    return new O({ ...e, ...t, old: e });
}
function dc(s, t, e) {
    let i = s - t * 60 * 1e3,
        n = e.offset(i);
    if (t === n) return [i, t];
    i -= (n - t) * 60 * 1e3;
    let o = e.offset(i);
    return n === o ? [i, n] : [s - Math.min(n, o) * 60 * 1e3, Math.max(n, o)];
}
function an(s, t) {
    s += t * 60 * 1e3;
    let e = new Date(s);
    return {
        year: e.getUTCFullYear(),
        month: e.getUTCMonth() + 1,
        day: e.getUTCDate(),
        hour: e.getUTCHours(),
        minute: e.getUTCMinutes(),
        second: e.getUTCSeconds(),
        millisecond: e.getUTCMilliseconds(),
    };
}
function cn(s, t, e) {
    return dc(ts(s), t, e);
}
function rc(s, t) {
    let e = s.o,
        i = s.c.year + Math.trunc(t.years),
        n = s.c.month + Math.trunc(t.months) + Math.trunc(t.quarters) * 3,
        o = {
            ...s.c,
            year: i,
            month: n,
            day: Math.min(s.c.day, is(i, n)) + Math.trunc(t.days) + Math.trunc(t.weeks) * 7,
        },
        r = I.fromObject({
            years: t.years - Math.trunc(t.years),
            quarters: t.quarters - Math.trunc(t.quarters),
            months: t.months - Math.trunc(t.months),
            weeks: t.weeks - Math.trunc(t.weeks),
            days: t.days - Math.trunc(t.days),
            hours: t.hours,
            minutes: t.minutes,
            seconds: t.seconds,
            milliseconds: t.milliseconds,
        }).as('milliseconds'),
        a = ts(o),
        [l, c] = dc(a, e, s.zone);
    return r !== 0 && ((l += r), (c = s.zone.offset(l))), { ts: l, o: c };
}
function ui(s, t, e, i, n, o) {
    let { setZone: r, zone: a } = e;
    if ((s && Object.keys(s).length !== 0) || t) {
        let l = t || a,
            c = O.fromObject(s, { ...e, zone: l, specificOffset: o });
        return r ? c : c.setZone(a);
    } else return O.invalid(new ot('unparsable', `the input "${n}" can't be parsed as ${i}`));
}
function ln(s, t, e = !0) {
    return s.isValid
        ? X.create(N.create('en-US'), {
              allowZ: e,
              forceSimple: !0,
          }).formatDateTimeFromString(s, t)
        : null;
}
function ir(s, t) {
    let e = s.c.year > 9999 || s.c.year < 0,
        i = '';
    return (
        e && s.c.year >= 0 && (i += '+'),
        (i += q(s.c.year, e ? 6 : 4)),
        t
            ? ((i += '-'), (i += q(s.c.month)), (i += '-'), (i += q(s.c.day)))
            : ((i += q(s.c.month)), (i += q(s.c.day))),
        i
    );
}
function ac(s, t, e, i, n, o) {
    let r = q(s.c.hour);
    return (
        t
            ? ((r += ':'),
              (r += q(s.c.minute)),
              (s.c.millisecond !== 0 || s.c.second !== 0 || !e) && (r += ':'))
            : (r += q(s.c.minute)),
        (s.c.millisecond !== 0 || s.c.second !== 0 || !e) &&
            ((r += q(s.c.second)),
            (s.c.millisecond !== 0 || !i) && ((r += '.'), (r += q(s.c.millisecond, 3)))),
        n &&
            (s.isOffsetFixed && s.offset === 0 && !o
                ? (r += 'Z')
                : s.o < 0
                  ? ((r += '-'),
                    (r += q(Math.trunc(-s.o / 60))),
                    (r += ':'),
                    (r += q(Math.trunc(-s.o % 60))))
                  : ((r += '+'),
                    (r += q(Math.trunc(s.o / 60))),
                    (r += ':'),
                    (r += q(Math.trunc(s.o % 60))))),
        o && (r += '[' + s.zone.ianaName + ']'),
        r
    );
}
var fc = { month: 1, day: 1, hour: 0, minute: 0, second: 0, millisecond: 0 },
    $m = {
        weekNumber: 1,
        weekday: 1,
        hour: 0,
        minute: 0,
        second: 0,
        millisecond: 0,
    },
    Um = { ordinal: 1, hour: 0, minute: 0, second: 0, millisecond: 0 },
    mc = ['year', 'month', 'day', 'hour', 'minute', 'second', 'millisecond'],
    Ym = ['weekYear', 'weekNumber', 'weekday', 'hour', 'minute', 'second', 'millisecond'],
    Zm = ['year', 'ordinal', 'hour', 'minute', 'second', 'millisecond'];
function lc(s) {
    let t = {
        year: 'year',
        years: 'year',
        month: 'month',
        months: 'month',
        day: 'day',
        days: 'day',
        hour: 'hour',
        hours: 'hour',
        minute: 'minute',
        minutes: 'minute',
        quarter: 'quarter',
        quarters: 'quarter',
        second: 'second',
        seconds: 'second',
        millisecond: 'millisecond',
        milliseconds: 'millisecond',
        weekday: 'weekday',
        weekdays: 'weekday',
        weeknumber: 'weekNumber',
        weeksnumber: 'weekNumber',
        weeknumbers: 'weekNumber',
        weekyear: 'weekYear',
        weekyears: 'weekYear',
        ordinal: 'ordinal',
    }[s.toLowerCase()];
    if (!t) throw new Qe(s);
    return t;
}
function cc(s, t) {
    let e = Ot(t.zone, H.defaultZone),
        i = N.fromObject(t),
        n = H.now(),
        o,
        r;
    if (C(s.year)) o = n;
    else {
        for (let c of mc) C(s[c]) && (s[c] = fc[c]);
        let a = Qo(s) || tr(s);
        if (a) return O.invalid(a);
        let l = e.offset(n);
        [o, r] = cn(s, l, e);
    }
    return new O({ ts: o, zone: e, loc: i, o: r });
}
function hc(s, t, e) {
    let i = C(e.round) ? !0 : e.round,
        n = (r, a) => (
            (r = es(r, i || e.calendary ? 0 : 2, !0)), t.loc.clone(e).relFormatter(e).format(r, a)
        ),
        o = (r) =>
            e.calendary
                ? t.hasSame(s, r)
                    ? 0
                    : t.startOf(r).diff(s.startOf(r), r).get(r)
                : t.diff(s, r).get(r);
    if (e.unit) return n(o(e.unit), e.unit);
    for (let r of e.units) {
        let a = o(r);
        if (Math.abs(a) >= 1) return n(a, r);
    }
    return n(s > t ? -0 : 0, e.units[e.units.length - 1]);
}
function uc(s) {
    let t = {},
        e;
    return (
        s.length > 0 && typeof s[s.length - 1] == 'object'
            ? ((t = s[s.length - 1]), (e = Array.from(s).slice(0, s.length - 1)))
            : (e = Array.from(s)),
        [t, e]
    );
}
var O = class {
    constructor(t) {
        let e = t.zone || H.defaultZone,
            i =
                t.invalid ||
                (Number.isNaN(t.ts) ? new ot('invalid input') : null) ||
                (e.isValid ? null : rn(e));
        this.ts = C(t.ts) ? H.now() : t.ts;
        let n = null,
            o = null;
        if (!i)
            if (t.old && t.old.ts === this.ts && t.old.zone.equals(e)) [n, o] = [t.old.c, t.old.o];
            else {
                let a = e.offset(this.ts);
                (n = an(this.ts, a)),
                    (i = Number.isNaN(n.year) ? new ot('invalid input') : null),
                    (n = i ? null : n),
                    (o = i ? null : a);
            }
        (this._zone = e),
            (this.loc = t.loc || N.create()),
            (this.invalid = i),
            (this.weekData = null),
            (this.c = n),
            (this.o = o),
            (this.isLuxonDateTime = !0);
    }
    static now() {
        return new O({});
    }
    static local() {
        let [t, e] = uc(arguments),
            [i, n, o, r, a, l, c] = e;
        return cc(
            {
                year: i,
                month: n,
                day: o,
                hour: r,
                minute: a,
                second: l,
                millisecond: c,
            },
            t,
        );
    }
    static utc() {
        let [t, e] = uc(arguments),
            [i, n, o, r, a, l, c] = e;
        return (
            (t.zone = G.utcInstance),
            cc(
                {
                    year: i,
                    month: n,
                    day: o,
                    hour: r,
                    minute: a,
                    second: l,
                    millisecond: c,
                },
                t,
            )
        );
    }
    static fromJSDate(t, e = {}) {
        let i = yl(t) ? t.valueOf() : NaN;
        if (Number.isNaN(i)) return O.invalid('invalid input');
        let n = Ot(e.zone, H.defaultZone);
        return n.isValid ? new O({ ts: i, zone: n, loc: N.fromObject(e) }) : O.invalid(rn(n));
    }
    static fromMillis(t, e = {}) {
        if (Nt(t))
            return t < -oc || t > oc
                ? O.invalid('Timestamp out of range')
                : new O({
                      ts: t,
                      zone: Ot(e.zone, H.defaultZone),
                      loc: N.fromObject(e),
                  });
        throw new nt(
            `fromMillis requires a numerical input, but received a ${typeof t} with value ${t}`,
        );
    }
    static fromSeconds(t, e = {}) {
        if (Nt(t))
            return new O({
                ts: t * 1e3,
                zone: Ot(e.zone, H.defaultZone),
                loc: N.fromObject(e),
            });
        throw new nt('fromSeconds requires a numerical input');
    }
    static fromObject(t, e = {}) {
        t = t || {};
        let i = Ot(e.zone, H.defaultZone);
        if (!i.isValid) return O.invalid(rn(i));
        let n = H.now(),
            o = C(e.specificOffset) ? i.offset(n) : e.specificOffset,
            r = os(t, lc),
            a = !C(r.ordinal),
            l = !C(r.year),
            c = !C(r.month) || !C(r.day),
            h = l || c,
            u = r.weekYear || r.weekNumber,
            d = N.fromObject(e);
        if ((h || a) && u)
            throw new Zt("Can't mix weekYear/weekNumber units with year/month/day or ordinals");
        if (c && a) throw new Zt("Can't mix ordinal dates with month/day");
        let f = u || (r.weekday && !h),
            m,
            g,
            p = an(n, o);
        f
            ? ((m = Ym), (g = $m), (p = nn(p)))
            : a
              ? ((m = Zm), (g = Um), (p = on(p)))
              : ((m = mc), (g = fc));
        let b = !1;
        for (let v of m) {
            let k = r[v];
            C(k) ? (b ? (r[v] = g[v]) : (r[v] = p[v])) : (b = !0);
        }
        let y = f ? ic(r) : a ? nc(r) : Qo(r),
            _ = y || tr(r);
        if (_) return O.invalid(_);
        let w = f ? Ko(r) : a ? Jo(r) : r,
            [x, M] = cn(w, o, i),
            S = new O({ ts: x, zone: i, o: M, loc: d });
        return r.weekday && h && t.weekday !== S.weekday
            ? O.invalid(
                  'mismatched weekday',
                  `you can't specify both a weekday of ${r.weekday} and a date of ${S.toISO()}`,
              )
            : S;
    }
    static fromISO(t, e = {}) {
        let [i, n] = Fl(t);
        return ui(i, n, e, 'ISO 8601', t);
    }
    static fromRFC2822(t, e = {}) {
        let [i, n] = Ll(t);
        return ui(i, n, e, 'RFC 2822', t);
    }
    static fromHTTP(t, e = {}) {
        let [i, n] = Pl(t);
        return ui(i, n, e, 'HTTP', e);
    }
    static fromFormat(t, e, i = {}) {
        if (C(t) || C(e)) throw new nt('fromFormat requires an input string and a format');
        let { locale: n = null, numberingSystem: o = null } = i,
            r = N.fromOpts({ locale: n, numberingSystem: o, defaultToEN: !0 }),
            [a, l, c, h] = Kl(r, t, e);
        return h ? O.invalid(h) : ui(a, l, i, `format ${e}`, t, c);
    }
    static fromString(t, e, i = {}) {
        return O.fromFormat(t, e, i);
    }
    static fromSQL(t, e = {}) {
        let [i, n] = zl(t);
        return ui(i, n, e, 'SQL', t);
    }
    static invalid(t, e = null) {
        if (!t) throw new nt('need to specify a reason the DateTime is invalid');
        let i = t instanceof ot ? t : new ot(t, e);
        if (H.throwOnInvalid) throw new Zi(i);
        return new O({ invalid: i });
    }
    static isDateTime(t) {
        return (t && t.isLuxonDateTime) || !1;
    }
    static parseFormatForOpts(t, e = {}) {
        let i = Xo(t, N.fromObject(e));
        return i ? i.map((n) => (n ? n.val : null)).join('') : null;
    }
    static expandFormat(t, e = {}) {
        return qo(X.parseFormat(t), N.fromObject(e))
            .map((n) => n.val)
            .join('');
    }
    get(t) {
        return this[t];
    }
    get isValid() {
        return this.invalid === null;
    }
    get invalidReason() {
        return this.invalid ? this.invalid.reason : null;
    }
    get invalidExplanation() {
        return this.invalid ? this.invalid.explanation : null;
    }
    get locale() {
        return this.isValid ? this.loc.locale : null;
    }
    get numberingSystem() {
        return this.isValid ? this.loc.numberingSystem : null;
    }
    get outputCalendar() {
        return this.isValid ? this.loc.outputCalendar : null;
    }
    get zone() {
        return this._zone;
    }
    get zoneName() {
        return this.isValid ? this.zone.name : null;
    }
    get year() {
        return this.isValid ? this.c.year : NaN;
    }
    get quarter() {
        return this.isValid ? Math.ceil(this.c.month / 3) : NaN;
    }
    get month() {
        return this.isValid ? this.c.month : NaN;
    }
    get day() {
        return this.isValid ? this.c.day : NaN;
    }
    get hour() {
        return this.isValid ? this.c.hour : NaN;
    }
    get minute() {
        return this.isValid ? this.c.minute : NaN;
    }
    get second() {
        return this.isValid ? this.c.second : NaN;
    }
    get millisecond() {
        return this.isValid ? this.c.millisecond : NaN;
    }
    get weekYear() {
        return this.isValid ? sr(this).weekYear : NaN;
    }
    get weekNumber() {
        return this.isValid ? sr(this).weekNumber : NaN;
    }
    get weekday() {
        return this.isValid ? sr(this).weekday : NaN;
    }
    get ordinal() {
        return this.isValid ? on(this.c).ordinal : NaN;
    }
    get monthShort() {
        return this.isValid ? Gt.months('short', { locObj: this.loc })[this.month - 1] : null;
    }
    get monthLong() {
        return this.isValid ? Gt.months('long', { locObj: this.loc })[this.month - 1] : null;
    }
    get weekdayShort() {
        return this.isValid ? Gt.weekdays('short', { locObj: this.loc })[this.weekday - 1] : null;
    }
    get weekdayLong() {
        return this.isValid ? Gt.weekdays('long', { locObj: this.loc })[this.weekday - 1] : null;
    }
    get offset() {
        return this.isValid ? +this.o : NaN;
    }
    get offsetNameShort() {
        return this.isValid
            ? this.zone.offsetName(this.ts, {
                  format: 'short',
                  locale: this.locale,
              })
            : null;
    }
    get offsetNameLong() {
        return this.isValid
            ? this.zone.offsetName(this.ts, {
                  format: 'long',
                  locale: this.locale,
              })
            : null;
    }
    get isOffsetFixed() {
        return this.isValid ? this.zone.isUniversal : null;
    }
    get isInDST() {
        return this.isOffsetFixed
            ? !1
            : this.offset > this.set({ month: 1, day: 1 }).offset ||
                  this.offset > this.set({ month: 5 }).offset;
    }
    getPossibleOffsets() {
        if (!this.isValid || this.isOffsetFixed) return [this];
        let t = 864e5,
            e = 6e4,
            i = ts(this.c),
            n = this.zone.offset(i - t),
            o = this.zone.offset(i + t),
            r = this.zone.offset(i - n * e),
            a = this.zone.offset(i - o * e);
        if (r === a) return [this];
        let l = i - r * e,
            c = i - a * e,
            h = an(l, r),
            u = an(c, a);
        return h.hour === u.hour &&
            h.minute === u.minute &&
            h.second === u.second &&
            h.millisecond === u.millisecond
            ? [ve(this, { ts: l }), ve(this, { ts: c })]
            : [this];
    }
    get isInLeapYear() {
        return Se(this.year);
    }
    get daysInMonth() {
        return is(this.year, this.month);
    }
    get daysInYear() {
        return this.isValid ? Me(this.year) : NaN;
    }
    get weeksInWeekYear() {
        return this.isValid ? ns(this.weekYear) : NaN;
    }
    resolvedLocaleOptions(t = {}) {
        let {
            locale: e,
            numberingSystem: i,
            calendar: n,
        } = X.create(this.loc.clone(t), t).resolvedOptions(this);
        return { locale: e, numberingSystem: i, outputCalendar: n };
    }
    toUTC(t = 0, e = {}) {
        return this.setZone(G.instance(t), e);
    }
    toLocal() {
        return this.setZone(H.defaultZone);
    }
    setZone(t, { keepLocalTime: e = !1, keepCalendarTime: i = !1 } = {}) {
        if (((t = Ot(t, H.defaultZone)), t.equals(this.zone))) return this;
        if (t.isValid) {
            let n = this.ts;
            if (e || i) {
                let o = t.offset(this.ts),
                    r = this.toObject();
                [n] = cn(r, o, t);
            }
            return ve(this, { ts: n, zone: t });
        } else return O.invalid(rn(t));
    }
    reconfigure({ locale: t, numberingSystem: e, outputCalendar: i } = {}) {
        let n = this.loc.clone({
            locale: t,
            numberingSystem: e,
            outputCalendar: i,
        });
        return ve(this, { loc: n });
    }
    setLocale(t) {
        return this.reconfigure({ locale: t });
    }
    set(t) {
        if (!this.isValid) return this;
        let e = os(t, lc),
            i = !C(e.weekYear) || !C(e.weekNumber) || !C(e.weekday),
            n = !C(e.ordinal),
            o = !C(e.year),
            r = !C(e.month) || !C(e.day),
            a = o || r,
            l = e.weekYear || e.weekNumber;
        if ((a || n) && l)
            throw new Zt("Can't mix weekYear/weekNumber units with year/month/day or ordinals");
        if (r && n) throw new Zt("Can't mix ordinal dates with month/day");
        let c;
        i
            ? (c = Ko({ ...nn(this.c), ...e }))
            : C(e.ordinal)
              ? ((c = { ...this.toObject(), ...e }),
                C(e.day) && (c.day = Math.min(is(c.year, c.month), c.day)))
              : (c = Jo({ ...on(this.c), ...e }));
        let [h, u] = cn(c, this.o, this.zone);
        return ve(this, { ts: h, o: u });
    }
    plus(t) {
        if (!this.isValid) return this;
        let e = I.fromDurationLike(t);
        return ve(this, rc(this, e));
    }
    minus(t) {
        if (!this.isValid) return this;
        let e = I.fromDurationLike(t).negate();
        return ve(this, rc(this, e));
    }
    startOf(t) {
        if (!this.isValid) return this;
        let e = {},
            i = I.normalizeUnit(t);
        switch (i) {
            case 'years':
                e.month = 1;
            case 'quarters':
            case 'months':
                e.day = 1;
            case 'weeks':
            case 'days':
                e.hour = 0;
            case 'hours':
                e.minute = 0;
            case 'minutes':
                e.second = 0;
            case 'seconds':
                e.millisecond = 0;
                break;
            case 'milliseconds':
                break;
        }
        if ((i === 'weeks' && (e.weekday = 1), i === 'quarters')) {
            let n = Math.ceil(this.month / 3);
            e.month = (n - 1) * 3 + 1;
        }
        return this.set(e);
    }
    endOf(t) {
        return this.isValid
            ? this.plus({ [t]: 1 })
                  .startOf(t)
                  .minus(1)
            : this;
    }
    toFormat(t, e = {}) {
        return this.isValid
            ? X.create(this.loc.redefaultToEN(e)).formatDateTimeFromString(this, t)
            : er;
    }
    toLocaleString(t = ae, e = {}) {
        return this.isValid ? X.create(this.loc.clone(e), t).formatDateTime(this) : er;
    }
    toLocaleParts(t = {}) {
        return this.isValid ? X.create(this.loc.clone(t), t).formatDateTimeParts(this) : [];
    }
    toISO({
        format: t = 'extended',
        suppressSeconds: e = !1,
        suppressMilliseconds: i = !1,
        includeOffset: n = !0,
        extendedZone: o = !1,
    } = {}) {
        if (!this.isValid) return null;
        let r = t === 'extended',
            a = ir(this, r);
        return (a += 'T'), (a += ac(this, r, e, i, n, o)), a;
    }
    toISODate({ format: t = 'extended' } = {}) {
        return this.isValid ? ir(this, t === 'extended') : null;
    }
    toISOWeekDate() {
        return ln(this, "kkkk-'W'WW-c");
    }
    toISOTime({
        suppressMilliseconds: t = !1,
        suppressSeconds: e = !1,
        includeOffset: i = !0,
        includePrefix: n = !1,
        extendedZone: o = !1,
        format: r = 'extended',
    } = {}) {
        return this.isValid ? (n ? 'T' : '') + ac(this, r === 'extended', e, t, i, o) : null;
    }
    toRFC2822() {
        return ln(this, 'EEE, dd LLL yyyy HH:mm:ss ZZZ', !1);
    }
    toHTTP() {
        return ln(this.toUTC(), "EEE, dd LLL yyyy HH:mm:ss 'GMT'");
    }
    toSQLDate() {
        return this.isValid ? ir(this, !0) : null;
    }
    toSQLTime({ includeOffset: t = !0, includeZone: e = !1, includeOffsetSpace: i = !0 } = {}) {
        let n = 'HH:mm:ss.SSS';
        return (e || t) && (i && (n += ' '), e ? (n += 'z') : t && (n += 'ZZ')), ln(this, n, !0);
    }
    toSQL(t = {}) {
        return this.isValid ? `${this.toSQLDate()} ${this.toSQLTime(t)}` : null;
    }
    toString() {
        return this.isValid ? this.toISO() : er;
    }
    valueOf() {
        return this.toMillis();
    }
    toMillis() {
        return this.isValid ? this.ts : NaN;
    }
    toSeconds() {
        return this.isValid ? this.ts / 1e3 : NaN;
    }
    toUnixInteger() {
        return this.isValid ? Math.floor(this.ts / 1e3) : NaN;
    }
    toJSON() {
        return this.toISO();
    }
    toBSON() {
        return this.toJSDate();
    }
    toObject(t = {}) {
        if (!this.isValid) return {};
        let e = { ...this.c };
        return (
            t.includeConfig &&
                ((e.outputCalendar = this.outputCalendar),
                (e.numberingSystem = this.loc.numberingSystem),
                (e.locale = this.loc.locale)),
            e
        );
    }
    toJSDate() {
        return new Date(this.isValid ? this.ts : NaN);
    }
    diff(t, e = 'milliseconds', i = {}) {
        if (!this.isValid || !t.isValid) return I.invalid('created by diffing an invalid DateTime');
        let n = {
                locale: this.locale,
                numberingSystem: this.numberingSystem,
                ...i,
            },
            o = xl(e).map(I.normalizeUnit),
            r = t.valueOf() > this.valueOf(),
            a = r ? this : t,
            l = r ? t : this,
            c = $l(a, l, o, n);
        return r ? c.negate() : c;
    }
    diffNow(t = 'milliseconds', e = {}) {
        return this.diff(O.now(), t, e);
    }
    until(t) {
        return this.isValid ? U.fromDateTimes(this, t) : this;
    }
    hasSame(t, e) {
        if (!this.isValid) return !1;
        let i = t.valueOf(),
            n = this.setZone(t.zone, { keepLocalTime: !0 });
        return n.startOf(e) <= i && i <= n.endOf(e);
    }
    equals(t) {
        return (
            this.isValid &&
            t.isValid &&
            this.valueOf() === t.valueOf() &&
            this.zone.equals(t.zone) &&
            this.loc.equals(t.loc)
        );
    }
    toRelative(t = {}) {
        if (!this.isValid) return null;
        let e = t.base || O.fromObject({}, { zone: this.zone }),
            i = t.padding ? (this < e ? -t.padding : t.padding) : 0,
            n = ['years', 'months', 'days', 'hours', 'minutes', 'seconds'],
            o = t.unit;
        return (
            Array.isArray(t.unit) && ((n = t.unit), (o = void 0)),
            hc(e, this.plus(i), { ...t, numeric: 'always', units: n, unit: o })
        );
    }
    toRelativeCalendar(t = {}) {
        return this.isValid
            ? hc(t.base || O.fromObject({}, { zone: this.zone }), this, {
                  ...t,
                  numeric: 'auto',
                  units: ['years', 'months', 'days'],
                  calendary: !0,
              })
            : null;
    }
    static min(...t) {
        if (!t.every(O.isDateTime)) throw new nt('min requires all arguments be DateTimes');
        return zo(t, (e) => e.valueOf(), Math.min);
    }
    static max(...t) {
        if (!t.every(O.isDateTime)) throw new nt('max requires all arguments be DateTimes');
        return zo(t, (e) => e.valueOf(), Math.max);
    }
    static fromFormatExplain(t, e, i = {}) {
        let { locale: n = null, numberingSystem: o = null } = i,
            r = N.fromOpts({ locale: n, numberingSystem: o, defaultToEN: !0 });
        return Go(r, t, e);
    }
    static fromStringExplain(t, e, i = {}) {
        return O.fromFormatExplain(t, e, i);
    }
    static get DATE_SHORT() {
        return ae;
    }
    static get DATE_MED() {
        return Vs;
    }
    static get DATE_MED_WITH_WEEKDAY() {
        return So;
    }
    static get DATE_FULL() {
        return Ws;
    }
    static get DATE_HUGE() {
        return Hs;
    }
    static get TIME_SIMPLE() {
        return Bs;
    }
    static get TIME_WITH_SECONDS() {
        return js;
    }
    static get TIME_WITH_SHORT_OFFSET() {
        return $s;
    }
    static get TIME_WITH_LONG_OFFSET() {
        return Us;
    }
    static get TIME_24_SIMPLE() {
        return Ys;
    }
    static get TIME_24_WITH_SECONDS() {
        return Zs;
    }
    static get TIME_24_WITH_SHORT_OFFSET() {
        return qs;
    }
    static get TIME_24_WITH_LONG_OFFSET() {
        return Gs;
    }
    static get DATETIME_SHORT() {
        return Xs;
    }
    static get DATETIME_SHORT_WITH_SECONDS() {
        return Ks;
    }
    static get DATETIME_MED() {
        return Js;
    }
    static get DATETIME_MED_WITH_SECONDS() {
        return Qs;
    }
    static get DATETIME_MED_WITH_WEEKDAY() {
        return Mo;
    }
    static get DATETIME_FULL() {
        return ti;
    }
    static get DATETIME_FULL_WITH_SECONDS() {
        return ei;
    }
    static get DATETIME_HUGE() {
        return si;
    }
    static get DATETIME_HUGE_WITH_SECONDS() {
        return ii;
    }
};
function fs(s) {
    if (O.isDateTime(s)) return s;
    if (s && s.valueOf && Nt(s.valueOf())) return O.fromJSDate(s);
    if (s && typeof s == 'object') return O.fromObject(s);
    throw new nt(`Unknown datetime argument: ${s}, of type ${typeof s}`);
}
var qm = {
    datetime: O.DATETIME_MED_WITH_SECONDS,
    millisecond: 'h:mm:ss.SSS a',
    second: O.TIME_WITH_SECONDS,
    minute: O.TIME_SIMPLE,
    hour: { hour: 'numeric' },
    day: { day: 'numeric', month: 'short' },
    week: 'DD',
    month: { month: 'short', year: 'numeric' },
    quarter: "'Q'q - yyyy",
    year: { year: 'numeric' },
};
_o._date.override({
    _id: 'luxon',
    _create: function (s) {
        return O.fromMillis(s, this.options);
    },
    init(s) {
        this.options.locale || (this.options.locale = s.locale);
    },
    formats: function () {
        return qm;
    },
    parse: function (s, t) {
        let e = this.options,
            i = typeof s;
        return s === null || i === 'undefined'
            ? null
            : (i === 'number'
                  ? (s = this._create(s))
                  : i === 'string'
                    ? typeof t == 'string'
                        ? (s = O.fromFormat(s, t, e))
                        : (s = O.fromISO(s, e))
                    : s instanceof Date
                      ? (s = O.fromJSDate(s, e))
                      : i === 'object' && !(s instanceof O) && (s = O.fromObject(s, e)),
              s.isValid ? s.valueOf() : null);
    },
    format: function (s, t) {
        let e = this._create(s);
        return typeof t == 'string' ? e.toFormat(t) : e.toLocaleString(t);
    },
    add: function (s, t, e) {
        let i = {};
        return (i[e] = t), this._create(s).plus(i).valueOf();
    },
    diff: function (s, t, e) {
        return this._create(s).diff(this._create(t)).as(e).valueOf();
    },
    startOf: function (s, t, e) {
        if (t === 'isoWeek') {
            e = Math.trunc(Math.min(Math.max(0, e), 6));
            let i = this._create(s);
            return i
                .minus({ days: (i.weekday - e + 7) % 7 })
                .startOf('day')
                .valueOf();
        }
        return t ? this._create(s).startOf(t).valueOf() : s;
    },
    endOf: function (s, t) {
        return this._create(s).endOf(t).valueOf();
    },
});
function hn({ cachedData: s, options: t, type: e }) {
    return {
        init: function () {
            this.initChart(),
                this.$wire.$on('updateChartData', ({ data: i }) => {
                    (hn = this.getChart()), (hn.data = i), hn.update('resize');
                }),
                Alpine.effect(() => {
                    Alpine.store('theme'),
                        this.$nextTick(() => {
                            this.getChart().destroy(), this.initChart();
                        });
                }),
                window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
                    Alpine.store('theme') === 'system' &&
                        this.$nextTick(() => {
                            this.getChart().destroy(), this.initChart();
                        });
                });
        },
        initChart: function (i = null) {
            var r, a, l, c, h, u, d;
            (Pt.defaults.animation.duration = 0),
                (Pt.defaults.backgroundColor = getComputedStyle(
                    this.$refs.backgroundColorElement,
                ).color);
            let n = getComputedStyle(this.$refs.borderColorElement).color;
            (Pt.defaults.borderColor = n),
                (Pt.defaults.color = getComputedStyle(this.$refs.textColorElement).color),
                (Pt.defaults.font.family = getComputedStyle(this.$el).fontFamily),
                (Pt.defaults.plugins.legend.labels.boxWidth = 12),
                (Pt.defaults.plugins.legend.position = 'bottom');
            let o = getComputedStyle(this.$refs.gridColorElement).color;
            return (
                t ?? (t = {}),
                t.borderWidth ?? (t.borderWidth = 2),
                t.pointBackgroundColor ?? (t.pointBackgroundColor = n),
                t.pointHitRadius ?? (t.pointHitRadius = 4),
                t.pointRadius ?? (t.pointRadius = 2),
                t.scales ?? (t.scales = {}),
                (r = t.scales).x ?? (r.x = {}),
                (a = t.scales.x).grid ?? (a.grid = {}),
                (t.scales.x.grid.color = o),
                (l = t.scales.x.grid).display ?? (l.display = !1),
                (c = t.scales.x.grid).drawBorder ?? (c.drawBorder = !1),
                (h = t.scales).y ?? (h.y = {}),
                (u = t.scales.y).grid ?? (u.grid = {}),
                (t.scales.y.grid.color = o),
                (d = t.scales.y.grid).drawBorder ?? (d.drawBorder = !1),
                new Pt(this.$refs.canvas, { type: e, data: i ?? s, options: t })
            );
        },
        getChart: function () {
            return Pt.getChart(this.$refs.canvas);
        },
    };
}
export { hn as default };
/*! Bundled license information:

chart.js/dist/chunks/helpers.segment.mjs:
  (*!
   * Chart.js v3.9.1
   * https://www.chartjs.org
   * (c) 2022 Chart.js Contributors
   * Released under the MIT License
   *)

chart.js/dist/chunks/helpers.segment.mjs:
  (*!
   * @kurkle/color v0.2.1
   * https://github.com/kurkle/color#readme
   * (c) 2022 Jukka Kurkela
   * Released under the MIT License
   *)

chart.js/dist/chart.mjs:
  (*!
   * Chart.js v3.9.1
   * https://www.chartjs.org
   * (c) 2022 Chart.js Contributors
   * Released under the MIT License
   *)

chartjs-adapter-luxon/dist/chartjs-adapter-luxon.esm.js:
  (*!
   * chartjs-adapter-luxon v1.3.1
   * https://www.chartjs.org
   * (c) 2023 chartjs-adapter-luxon Contributors
   * Released under the MIT license
   *)
*/
