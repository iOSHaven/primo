var Co = Object.defineProperty;
var zo = (e, t) => {
    for (var i in t) Co(e, i, { get: t[i], enumerable: !0 });
};
var Qi = {};
zo(Qi, {
    FileOrigin: () => Lt,
    FileStatus: () => ut,
    OptionTypes: () => Pi,
    Status: () => Xn,
    create: () => ot,
    destroy: () => lt,
    find: () => Ci,
    getOptions: () => zi,
    parse: () => Fi,
    registerPlugin: () => Ee,
    setOptions: () => vt,
    supported: () => Di,
});
var No = (e) => e instanceof HTMLElement,
    Bo = (e, t = [], i = []) => {
        let a = { ...e },
            n = [],
            r = [],
            o = () => ({ ...a }),
            l = () => {
                let p = [...n];
                return (n.length = 0), p;
            },
            s = () => {
                let p = [...r];
                (r.length = 0),
                    p.forEach(({ type: m, data: g }) => {
                        u(m, g);
                    });
            },
            u = (p, m, g) => {
                if (g && !document.hidden) {
                    r.push({ type: p, data: m });
                    return;
                }
                f[p] && f[p](m), n.push({ type: p, data: m });
            },
            c = (p, ...m) => (h[p] ? h[p](...m) : null),
            d = {
                getState: o,
                processActionQueue: l,
                processDispatchQueue: s,
                dispatch: u,
                query: c,
            },
            h = {};
        t.forEach((p) => {
            h = { ...p(a), ...h };
        });
        let f = {};
        return (
            i.forEach((p) => {
                f = { ...p(u, c, a), ...f };
            }),
            d
        );
    },
    Go = (e, t, i) => {
        if (typeof i == 'function') {
            e[t] = i;
            return;
        }
        Object.defineProperty(e, t, { ...i });
    },
    Z = (e, t) => {
        for (let i in e) e.hasOwnProperty(i) && t(i, e[i]);
    },
    ze = (e) => {
        let t = {};
        return (
            Z(e, (i) => {
                Go(t, i, e[i]);
            }),
            t
        );
    },
    ee = (e, t, i = null) => {
        if (i === null) return e.getAttribute(t) || e.hasAttribute(t);
        e.setAttribute(t, i);
    },
    Vo = 'http://www.w3.org/2000/svg',
    Uo = ['svg', 'path'],
    _a = (e) => Uo.includes(e),
    jt = (e, t, i = {}) => {
        typeof t == 'object' && ((i = t), (t = null));
        let a = _a(e) ? document.createElementNS(Vo, e) : document.createElement(e);
        return (
            t && (_a(e) ? ee(a, 'class', t) : (a.className = t)),
            Z(i, (n, r) => {
                ee(a, n, r);
            }),
            a
        );
    },
    ko = (e) => (t, i) => {
        typeof i < 'u' && e.children[i] ? e.insertBefore(t, e.children[i]) : e.appendChild(t);
    },
    Ho = (e, t) => (i, a) => (typeof a < 'u' ? t.splice(a, 0, i) : t.push(i), i),
    Wo = (e, t) => (i) => (
        t.splice(t.indexOf(i), 1), i.element.parentNode && e.removeChild(i.element), i
    ),
    Yo = (() => typeof window < 'u' && typeof window.document < 'u')(),
    ln = () => Yo,
    $o = ln() ? jt('svg') : {},
    qo = 'children' in $o ? (e) => e.children.length : (e) => e.childNodes.length,
    sn = (e, t, i, a) => {
        let n = i[0] || e.left,
            r = i[1] || e.top,
            o = n + e.width,
            l = r + e.height * (a[1] || 1),
            s = {
                element: { ...e },
                inner: {
                    left: e.left,
                    top: e.top,
                    right: e.right,
                    bottom: e.bottom,
                },
                outer: { left: n, top: r, right: o, bottom: l },
            };
        return (
            t
                .filter((u) => !u.isRectIgnored())
                .map((u) => u.rect)
                .forEach((u) => {
                    Ra(s.inner, { ...u.inner }), Ra(s.outer, { ...u.outer });
                }),
            ya(s.inner),
            (s.outer.bottom += s.element.marginBottom),
            (s.outer.right += s.element.marginRight),
            ya(s.outer),
            s
        );
    },
    Ra = (e, t) => {
        (t.top += e.top),
            (t.right += e.left),
            (t.bottom += e.top),
            (t.left += e.left),
            t.bottom > e.bottom && (e.bottom = t.bottom),
            t.right > e.right && (e.right = t.right);
    },
    ya = (e) => {
        (e.width = e.right - e.left), (e.height = e.bottom - e.top);
    },
    ke = (e) => typeof e == 'number',
    Xo = (e, t, i, a = 0.001) => Math.abs(e - t) < a && Math.abs(i) < a,
    jo = ({ stiffness: e = 0.5, damping: t = 0.75, mass: i = 10 } = {}) => {
        let a = null,
            n = null,
            r = 0,
            o = !1,
            u = ze({
                interpolate: (c, d) => {
                    if (o) return;
                    if (!(ke(a) && ke(n))) {
                        (o = !0), (r = 0);
                        return;
                    }
                    let h = -(n - a) * e;
                    (r += h / i),
                        (n += r),
                        (r *= t),
                        Xo(n, a, r) || d
                            ? ((n = a), (r = 0), (o = !0), u.onupdate(n), u.oncomplete(n))
                            : u.onupdate(n);
                },
                target: {
                    set: (c) => {
                        if (
                            (ke(c) && !ke(n) && (n = c),
                            a === null && ((a = c), (n = c)),
                            (a = c),
                            n === a || typeof a > 'u')
                        ) {
                            (o = !0), (r = 0), u.onupdate(n), u.oncomplete(n);
                            return;
                        }
                        o = !1;
                    },
                    get: () => a,
                },
                resting: { get: () => o },
                onupdate: (c) => {},
                oncomplete: (c) => {},
            });
        return u;
    };
var Qo = (e) => (e < 0.5 ? 2 * e * e : -1 + (4 - 2 * e) * e),
    Zo = ({ duration: e = 500, easing: t = Qo, delay: i = 0 } = {}) => {
        let a = null,
            n,
            r,
            o = !0,
            l = !1,
            s = null,
            c = ze({
                interpolate: (d, h) => {
                    o ||
                        s === null ||
                        (a === null && (a = d),
                        !(d - a < i) &&
                            ((n = d - a - i),
                            n >= e || h
                                ? ((n = 1),
                                  (r = l ? 0 : 1),
                                  c.onupdate(r * s),
                                  c.oncomplete(r * s),
                                  (o = !0))
                                : ((r = n / e), c.onupdate((n >= 0 ? t(l ? 1 - r : r) : 0) * s))));
                },
                target: {
                    get: () => (l ? 0 : s),
                    set: (d) => {
                        if (s === null) {
                            (s = d), c.onupdate(d), c.oncomplete(d);
                            return;
                        }
                        d < s ? ((s = 1), (l = !0)) : ((l = !1), (s = d)), (o = !1), (a = null);
                    },
                },
                resting: { get: () => o },
                onupdate: (d) => {},
                oncomplete: (d) => {},
            });
        return c;
    },
    Sa = { spring: jo, tween: Zo },
    Ko = (e, t, i) => {
        let a = e[t] && typeof e[t][i] == 'object' ? e[t][i] : e[t] || e,
            n = typeof a == 'string' ? a : a.type,
            r = typeof a == 'object' ? { ...a } : {};
        return Sa[n] ? Sa[n](r) : null;
    },
    Ni = (e, t, i, a = !1) => {
        (t = Array.isArray(t) ? t : [t]),
            t.forEach((n) => {
                e.forEach((r) => {
                    let o = r,
                        l = () => i[r],
                        s = (u) => (i[r] = u);
                    typeof r == 'object' && ((o = r.key), (l = r.getter || l), (s = r.setter || s)),
                        !(n[o] && !a) && (n[o] = { get: l, set: s });
                });
            });
    },
    Jo = ({ mixinConfig: e, viewProps: t, viewInternalAPI: i, viewExternalAPI: a }) => {
        let n = { ...t },
            r = [];
        return (
            Z(e, (o, l) => {
                let s = Ko(l);
                if (!s) return;
                (s.onupdate = (c) => {
                    t[o] = c;
                }),
                    (s.target = n[o]),
                    Ni(
                        [
                            {
                                key: o,
                                setter: (c) => {
                                    s.target !== c && (s.target = c);
                                },
                                getter: () => t[o],
                            },
                        ],
                        [i, a],
                        t,
                        !0,
                    ),
                    r.push(s);
            }),
            {
                write: (o) => {
                    let l = document.hidden,
                        s = !0;
                    return (
                        r.forEach((u) => {
                            u.resting || (s = !1), u.interpolate(o, l);
                        }),
                        s
                    );
                },
                destroy: () => {},
            }
        );
    },
    el = (e) => (t, i) => {
        e.addEventListener(t, i);
    },
    tl = (e) => (t, i) => {
        e.removeEventListener(t, i);
    },
    il = ({
        mixinConfig: e,
        viewProps: t,
        viewInternalAPI: i,
        viewExternalAPI: a,
        viewState: n,
        view: r,
    }) => {
        let o = [],
            l = el(r.element),
            s = tl(r.element);
        return (
            (a.on = (u, c) => {
                o.push({ type: u, fn: c }), l(u, c);
            }),
            (a.off = (u, c) => {
                o.splice(
                    o.findIndex((d) => d.type === u && d.fn === c),
                    1,
                ),
                    s(u, c);
            }),
            {
                write: () => !0,
                destroy: () => {
                    o.forEach((u) => {
                        s(u.type, u.fn);
                    });
                },
            }
        );
    },
    al = ({ mixinConfig: e, viewProps: t, viewExternalAPI: i }) => {
        Ni(e, i, t);
    },
    ce = (e) => e != null,
    nl = {
        opacity: 1,
        scaleX: 1,
        scaleY: 1,
        translateX: 0,
        translateY: 0,
        rotateX: 0,
        rotateY: 0,
        rotateZ: 0,
        originX: 0,
        originY: 0,
    },
    rl = ({ mixinConfig: e, viewProps: t, viewInternalAPI: i, viewExternalAPI: a, view: n }) => {
        let r = { ...t },
            o = {};
        Ni(e, [i, a], t);
        let l = () => [t.translateX || 0, t.translateY || 0],
            s = () => [t.scaleX || 0, t.scaleY || 0],
            u = () => (n.rect ? sn(n.rect, n.childViews, l(), s()) : null);
        return (
            (i.rect = { get: u }),
            (a.rect = { get: u }),
            e.forEach((c) => {
                t[c] = typeof r[c] > 'u' ? nl[c] : r[c];
            }),
            {
                write: () => {
                    if (ol(o, t)) return ll(n.element, t), Object.assign(o, { ...t }), !0;
                },
                destroy: () => {},
            }
        );
    },
    ol = (e, t) => {
        if (Object.keys(e).length !== Object.keys(t).length) return !0;
        for (let i in t) if (t[i] !== e[i]) return !0;
        return !1;
    },
    ll = (
        e,
        {
            opacity: t,
            perspective: i,
            translateX: a,
            translateY: n,
            scaleX: r,
            scaleY: o,
            rotateX: l,
            rotateY: s,
            rotateZ: u,
            originX: c,
            originY: d,
            width: h,
            height: f,
        },
    ) => {
        let p = '',
            m = '';
        (ce(c) || ce(d)) && (m += `transform-origin: ${c || 0}px ${d || 0}px;`),
            ce(i) && (p += `perspective(${i}px) `),
            (ce(a) || ce(n)) && (p += `translate3d(${a || 0}px, ${n || 0}px, 0) `),
            (ce(r) || ce(o)) && (p += `scale3d(${ce(r) ? r : 1}, ${ce(o) ? o : 1}, 1) `),
            ce(u) && (p += `rotateZ(${u}rad) `),
            ce(l) && (p += `rotateX(${l}rad) `),
            ce(s) && (p += `rotateY(${s}rad) `),
            p.length && (m += `transform:${p};`),
            ce(t) &&
                ((m += `opacity:${t};`),
                t === 0 && (m += 'visibility:hidden;'),
                t < 1 && (m += 'pointer-events:none;')),
            ce(f) && (m += `height:${f}px;`),
            ce(h) && (m += `width:${h}px;`);
        let g = e.elementCurrentStyle || '';
        (m.length !== g.length || m !== g) && ((e.style.cssText = m), (e.elementCurrentStyle = m));
    },
    sl = { styles: rl, listeners: il, animations: Jo, apis: al },
    wa = (e = {}, t = {}, i = {}) => (
        t.layoutCalculated ||
            ((e.paddingTop = parseInt(i.paddingTop, 10) || 0),
            (e.marginTop = parseInt(i.marginTop, 10) || 0),
            (e.marginRight = parseInt(i.marginRight, 10) || 0),
            (e.marginBottom = parseInt(i.marginBottom, 10) || 0),
            (e.marginLeft = parseInt(i.marginLeft, 10) || 0),
            (t.layoutCalculated = !0)),
        (e.left = t.offsetLeft || 0),
        (e.top = t.offsetTop || 0),
        (e.width = t.offsetWidth || 0),
        (e.height = t.offsetHeight || 0),
        (e.right = e.left + e.width),
        (e.bottom = e.top + e.height),
        (e.scrollTop = t.scrollTop),
        (e.hidden = t.offsetParent === null),
        e
    ),
    te =
        ({
            tag: e = 'div',
            name: t = null,
            attributes: i = {},
            read: a = () => {},
            write: n = () => {},
            create: r = () => {},
            destroy: o = () => {},
            filterFrameActionsForChild: l = (f, p) => p,
            didCreateView: s = () => {},
            didWriteView: u = () => {},
            ignoreRect: c = !1,
            ignoreRectUpdate: d = !1,
            mixins: h = [],
        } = {}) =>
        (f, p = {}) => {
            let m = jt(e, `filepond--${t}`, i),
                g = window.getComputedStyle(m, null),
                b = wa(),
                E = null,
                T = !1,
                _ = [],
                y = [],
                I = {},
                v = {},
                R = [n],
                S = [a],
                P = [o],
                x = () => m,
                O = () => _.concat(),
                B = () => I,
                A = (U) => (z, D) => z(U, D),
                C = () => E || ((E = sn(b, _, [0, 0], [1, 1])), E),
                w = () => g,
                L = () => {
                    (E = null),
                        _.forEach((D) => D._read()),
                        !(d && b.width && b.height) && wa(b, m, g);
                    let z = { root: X, props: p, rect: b };
                    S.forEach((D) => D(z));
                },
                N = (U, z, D) => {
                    let k = z.length === 0;
                    return (
                        R.forEach((W) => {
                            W({
                                props: p,
                                root: X,
                                actions: z,
                                timestamp: U,
                                shouldOptimize: D,
                            }) === !1 && (k = !1);
                        }),
                        y.forEach((W) => {
                            W.write(U) === !1 && (k = !1);
                        }),
                        _.filter((W) => !!W.element.parentNode).forEach((W) => {
                            W._write(U, l(W, z), D) || (k = !1);
                        }),
                        _.forEach((W, ne) => {
                            W.element.parentNode ||
                                (X.appendChild(W.element, ne),
                                W._read(),
                                W._write(U, l(W, z), D),
                                (k = !1));
                        }),
                        (T = k),
                        u({ props: p, root: X, actions: z, timestamp: U }),
                        k
                    );
                },
                F = () => {
                    y.forEach((U) => U.destroy()),
                        P.forEach((U) => {
                            U({ root: X, props: p });
                        }),
                        _.forEach((U) => U._destroy());
                },
                V = {
                    element: { get: x },
                    style: { get: w },
                    childViews: { get: O },
                },
                G = {
                    ...V,
                    rect: { get: C },
                    ref: { get: B },
                    is: (U) => t === U,
                    appendChild: ko(m),
                    createChildView: A(f),
                    linkView: (U) => (_.push(U), U),
                    unlinkView: (U) => {
                        _.splice(_.indexOf(U), 1);
                    },
                    appendChildView: Ho(m, _),
                    removeChildView: Wo(m, _),
                    registerWriter: (U) => R.push(U),
                    registerReader: (U) => S.push(U),
                    registerDestroyer: (U) => P.push(U),
                    invalidateLayout: () => (m.layoutCalculated = !1),
                    dispatch: f.dispatch,
                    query: f.query,
                },
                $ = {
                    element: { get: x },
                    childViews: { get: O },
                    rect: { get: C },
                    resting: { get: () => T },
                    isRectIgnored: () => c,
                    _read: L,
                    _write: N,
                    _destroy: F,
                },
                q = { ...V, rect: { get: () => b } };
            Object.keys(h)
                .sort((U, z) => (U === 'styles' ? 1 : z === 'styles' ? -1 : 0))
                .forEach((U) => {
                    let z = sl[U]({
                        mixinConfig: h[U],
                        viewProps: p,
                        viewState: v,
                        viewInternalAPI: G,
                        viewExternalAPI: $,
                        view: ze(q),
                    });
                    z && y.push(z);
                });
            let X = ze(G);
            r({ root: X, props: p });
            let le = qo(m);
            return (
                _.forEach((U, z) => {
                    X.appendChild(U.element, le + z);
                }),
                s(X),
                ze($)
            );
        },
    cl = (e, t, i = 60) => {
        let a = '__framePainter';
        if (window[a]) {
            window[a].readers.push(e), window[a].writers.push(t);
            return;
        }
        window[a] = { readers: [e], writers: [t] };
        let n = window[a],
            r = 1e3 / i,
            o = null,
            l = null,
            s = null,
            u = null,
            c = () => {
                document.hidden
                    ? ((s = () => window.setTimeout(() => d(performance.now()), r)),
                      (u = () => window.clearTimeout(l)))
                    : ((s = () => window.requestAnimationFrame(d)),
                      (u = () => window.cancelAnimationFrame(l)));
            };
        document.addEventListener('visibilitychange', () => {
            u && u(), c(), d(performance.now());
        });
        let d = (h) => {
            (l = s(d)), o || (o = h);
            let f = h - o;
            f <= r ||
                ((o = h - (f % r)), n.readers.forEach((p) => p()), n.writers.forEach((p) => p(h)));
        };
        return (
            c(),
            d(performance.now()),
            {
                pause: () => {
                    u(l);
                },
            }
        );
    },
    ue =
        (e, t) =>
        ({ root: i, props: a, actions: n = [], timestamp: r, shouldOptimize: o }) => {
            n
                .filter((l) => e[l.type])
                .forEach((l) =>
                    e[l.type]({
                        root: i,
                        props: a,
                        action: l.data,
                        timestamp: r,
                        shouldOptimize: o,
                    }),
                ),
                t &&
                    t({
                        root: i,
                        props: a,
                        actions: n,
                        timestamp: r,
                        shouldOptimize: o,
                    });
        },
    va = (e, t) => t.parentNode.insertBefore(e, t),
    Aa = (e, t) => t.parentNode.insertBefore(e, t.nextSibling),
    Jt = (e) => Array.isArray(e),
    Pe = (e) => e == null,
    dl = (e) => e.trim(),
    ei = (e) => '' + e,
    ul = (e, t = ',') =>
        Pe(e)
            ? []
            : Jt(e)
              ? e
              : ei(e)
                    .split(t)
                    .map(dl)
                    .filter((i) => i.length),
    cn = (e) => typeof e == 'boolean',
    dn = (e) => (cn(e) ? e : e === 'true'),
    de = (e) => typeof e == 'string',
    un = (e) => (ke(e) ? e : de(e) ? ei(e).replace(/[a-z]+/gi, '') : 0),
    Xt = (e) => parseInt(un(e), 10),
    La = (e) => parseFloat(un(e)),
    dt = (e) => ke(e) && isFinite(e) && Math.floor(e) === e,
    Ma = (e, t = 1e3) => {
        if (dt(e)) return e;
        let i = ei(e).trim();
        return /MB$/i.test(i)
            ? ((i = i.replace(/MB$i/, '').trim()), Xt(i) * t * t)
            : /KB/i.test(i)
              ? ((i = i.replace(/KB$i/, '').trim()), Xt(i) * t)
              : Xt(i);
    },
    He = (e) => typeof e == 'function',
    hl = (e) => {
        let t = self,
            i = e.split('.'),
            a = null;
        for (; (a = i.shift()); ) if (((t = t[a]), !t)) return null;
        return t;
    },
    Oa = {
        process: 'POST',
        patch: 'PATCH',
        revert: 'DELETE',
        fetch: 'GET',
        restore: 'GET',
        load: 'GET',
    },
    fl = (e) => {
        let t = {};
        return (
            (t.url = de(e) ? e : e.url || ''),
            (t.timeout = e.timeout ? parseInt(e.timeout, 10) : 0),
            (t.headers = e.headers ? e.headers : {}),
            Z(Oa, (i) => {
                t[i] = pl(i, e[i], Oa[i], t.timeout, t.headers);
            }),
            (t.process = e.process || de(e) || e.url ? t.process : null),
            (t.remove = e.remove || null),
            delete t.headers,
            t
        );
    },
    pl = (e, t, i, a, n) => {
        if (t === null) return null;
        if (typeof t == 'function') return t;
        let r = {
            url: i === 'GET' || i === 'PATCH' ? `?${e}=` : '',
            method: i,
            headers: n,
            withCredentials: !1,
            timeout: a,
            onload: null,
            ondata: null,
            onerror: null,
        };
        if (de(t)) return (r.url = t), r;
        if ((Object.assign(r, t), de(r.headers))) {
            let o = r.headers.split(/:(.+)/);
            r.headers = { header: o[0], value: o[1] };
        }
        return (r.withCredentials = dn(r.withCredentials)), r;
    },
    ml = (e) => fl(e),
    gl = (e) => e === null,
    re = (e) => typeof e == 'object' && e !== null,
    El = (e) => re(e) && de(e.url) && re(e.process) && re(e.revert) && re(e.restore) && re(e.fetch),
    Si = (e) =>
        Jt(e)
            ? 'array'
            : gl(e)
              ? 'null'
              : dt(e)
                ? 'int'
                : /^[0-9]+ ?(?:GB|MB|KB)$/gi.test(e)
                  ? 'bytes'
                  : El(e)
                    ? 'api'
                    : typeof e,
    Tl = (e) =>
        e
            .replace(/{\s*'/g, '{"')
            .replace(/'\s*}/g, '"}')
            .replace(/'\s*:/g, '":')
            .replace(/:\s*'/g, ':"')
            .replace(/,\s*'/g, ',"')
            .replace(/'\s*,/g, '",'),
    Il = {
        array: ul,
        boolean: dn,
        int: (e) => (Si(e) === 'bytes' ? Ma(e) : Xt(e)),
        number: La,
        float: La,
        bytes: Ma,
        string: (e) => (He(e) ? e : ei(e)),
        function: (e) => hl(e),
        serverapi: ml,
        object: (e) => {
            try {
                return JSON.parse(Tl(e));
            } catch {
                return null;
            }
        },
    },
    bl = (e, t) => Il[t](e),
    hn = (e, t, i) => {
        if (e === t) return e;
        let a = Si(e);
        if (a !== i) {
            let n = bl(e, i);
            if (((a = Si(n)), n === null))
                throw `Trying to assign value with incorrect type to "${option}", allowed type: "${i}"`;
            e = n;
        }
        return e;
    },
    _l = (e, t) => {
        let i = e;
        return {
            enumerable: !0,
            get: () => i,
            set: (a) => {
                i = hn(a, e, t);
            },
        };
    },
    Rl = (e) => {
        let t = {};
        return (
            Z(e, (i) => {
                let a = e[i];
                t[i] = _l(a[0], a[1]);
            }),
            ze(t)
        );
    },
    yl = (e) => ({
        items: [],
        listUpdateTimeout: null,
        itemUpdateTimeout: null,
        processingQueue: [],
        options: Rl(e),
    }),
    ti = (e, t = '-') =>
        e
            .split(/(?=[A-Z])/)
            .map((i) => i.toLowerCase())
            .join(t),
    Sl = (e, t) => {
        let i = {};
        return (
            Z(t, (a) => {
                i[a] = {
                    get: () => e.getState().options[a],
                    set: (n) => {
                        e.dispatch(`SET_${ti(a, '_').toUpperCase()}`, {
                            value: n,
                        });
                    },
                };
            }),
            i
        );
    },
    wl = (e) => (t, i, a) => {
        let n = {};
        return (
            Z(e, (r) => {
                let o = ti(r, '_').toUpperCase();
                n[`SET_${o}`] = (l) => {
                    try {
                        a.options[r] = l.value;
                    } catch {}
                    t(`DID_SET_${o}`, { value: a.options[r] });
                };
            }),
            n
        );
    },
    vl = (e) => (t) => {
        let i = {};
        return (
            Z(e, (a) => {
                i[`GET_${ti(a, '_').toUpperCase()}`] = (n) => t.options[a];
            }),
            i
        );
    },
    be = { API: 1, DROP: 2, BROWSE: 3, PASTE: 4, NONE: 5 },
    Bi = () => Math.random().toString(36).substring(2, 11),
    Gi = (e, t) => e.splice(t, 1),
    Al = (e, t) => {
        t ? e() : document.hidden ? Promise.resolve(1).then(e) : setTimeout(e, 0);
    },
    ii = () => {
        let e = [],
            t = (a, n) => {
                Gi(
                    e,
                    e.findIndex((r) => r.event === a && (r.cb === n || !n)),
                );
            },
            i = (a, n, r) => {
                e.filter((o) => o.event === a)
                    .map((o) => o.cb)
                    .forEach((o) => Al(() => o(...n), r));
            };
        return {
            fireSync: (a, ...n) => {
                i(a, n, !0);
            },
            fire: (a, ...n) => {
                i(a, n, !1);
            },
            on: (a, n) => {
                e.push({ event: a, cb: n });
            },
            onOnce: (a, n) => {
                e.push({
                    event: a,
                    cb: (...r) => {
                        t(a, n), n(...r);
                    },
                });
            },
            off: t,
        };
    },
    fn = (e, t, i) => {
        Object.getOwnPropertyNames(e)
            .filter((a) => !i.includes(a))
            .forEach((a) => Object.defineProperty(t, a, Object.getOwnPropertyDescriptor(e, a)));
    },
    Ll = [
        'fire',
        'process',
        'revert',
        'load',
        'on',
        'off',
        'onOnce',
        'retryLoad',
        'extend',
        'archive',
        'archived',
        'release',
        'released',
        'requestProcessing',
        'freeze',
    ],
    he = (e) => {
        let t = {};
        return fn(e, t, Ll), t;
    },
    Ml = (e) => {
        e.forEach((t, i) => {
            t.released && Gi(e, i);
        });
    },
    H = {
        INIT: 1,
        IDLE: 2,
        PROCESSING_QUEUED: 9,
        PROCESSING: 3,
        PROCESSING_COMPLETE: 5,
        PROCESSING_ERROR: 6,
        PROCESSING_REVERT_ERROR: 10,
        LOADING: 7,
        LOAD_ERROR: 8,
    },
    ae = { INPUT: 1, LIMBO: 2, LOCAL: 3 },
    pn = (e) => /[^0-9]+/.exec(e),
    mn = () => pn((1.1).toLocaleString())[0],
    Ol = () => {
        let e = mn(),
            t = (1e3).toLocaleString(),
            i = (1e3).toString();
        return t !== i ? pn(t)[0] : e === '.' ? ',' : '.';
    },
    M = {
        BOOLEAN: 'boolean',
        INT: 'int',
        NUMBER: 'number',
        STRING: 'string',
        ARRAY: 'array',
        OBJECT: 'object',
        FUNCTION: 'function',
        ACTION: 'action',
        SERVER_API: 'serverapi',
        REGEX: 'regex',
    },
    Vi = [],
    Se = (e, t, i) =>
        new Promise((a, n) => {
            let r = Vi.filter((l) => l.key === e).map((l) => l.cb);
            if (r.length === 0) {
                a(t);
                return;
            }
            let o = r.shift();
            r.reduce((l, s) => l.then((u) => s(u, i)), o(t, i))
                .then((l) => a(l))
                .catch((l) => n(l));
        }),
    Xe = (e, t, i) => Vi.filter((a) => a.key === e).map((a) => a.cb(t, i)),
    xl = (e, t) => Vi.push({ key: e, cb: t }),
    Dl = (e) => Object.assign(at, e),
    Qt = () => ({ ...at }),
    Pl = (e) => {
        Z(e, (t, i) => {
            at[t] && (at[t][0] = hn(i, at[t][0], at[t][1]));
        });
    },
    at = {
        id: [null, M.STRING],
        name: ['filepond', M.STRING],
        disabled: [!1, M.BOOLEAN],
        className: [null, M.STRING],
        required: [!1, M.BOOLEAN],
        captureMethod: [null, M.STRING],
        allowSyncAcceptAttribute: [!0, M.BOOLEAN],
        allowDrop: [!0, M.BOOLEAN],
        allowBrowse: [!0, M.BOOLEAN],
        allowPaste: [!0, M.BOOLEAN],
        allowMultiple: [!1, M.BOOLEAN],
        allowReplace: [!0, M.BOOLEAN],
        allowRevert: [!0, M.BOOLEAN],
        allowRemove: [!0, M.BOOLEAN],
        allowProcess: [!0, M.BOOLEAN],
        allowReorder: [!1, M.BOOLEAN],
        allowDirectoriesOnly: [!1, M.BOOLEAN],
        storeAsFile: [!1, M.BOOLEAN],
        forceRevert: [!1, M.BOOLEAN],
        maxFiles: [null, M.INT],
        checkValidity: [!1, M.BOOLEAN],
        itemInsertLocationFreedom: [!0, M.BOOLEAN],
        itemInsertLocation: ['before', M.STRING],
        itemInsertInterval: [75, M.INT],
        dropOnPage: [!1, M.BOOLEAN],
        dropOnElement: [!0, M.BOOLEAN],
        dropValidation: [!1, M.BOOLEAN],
        ignoredFiles: [['.ds_store', 'thumbs.db', 'desktop.ini'], M.ARRAY],
        instantUpload: [!0, M.BOOLEAN],
        maxParallelUploads: [2, M.INT],
        allowMinimumUploadDuration: [!0, M.BOOLEAN],
        chunkUploads: [!1, M.BOOLEAN],
        chunkForce: [!1, M.BOOLEAN],
        chunkSize: [5e6, M.INT],
        chunkRetryDelays: [[500, 1e3, 3e3], M.ARRAY],
        server: [null, M.SERVER_API],
        fileSizeBase: [1e3, M.INT],
        labelFileSizeBytes: ['bytes', M.STRING],
        labelFileSizeKilobytes: ['KB', M.STRING],
        labelFileSizeMegabytes: ['MB', M.STRING],
        labelFileSizeGigabytes: ['GB', M.STRING],
        labelDecimalSeparator: [mn(), M.STRING],
        labelThousandsSeparator: [Ol(), M.STRING],
        labelIdle: [
            'Drag & Drop your files or <span class="filepond--label-action">Browse</span>',
            M.STRING,
        ],
        labelInvalidField: ['Field contains invalid files', M.STRING],
        labelFileWaitingForSize: ['Waiting for size', M.STRING],
        labelFileSizeNotAvailable: ['Size not available', M.STRING],
        labelFileCountSingular: ['file in list', M.STRING],
        labelFileCountPlural: ['files in list', M.STRING],
        labelFileLoading: ['Loading', M.STRING],
        labelFileAdded: ['Added', M.STRING],
        labelFileLoadError: ['Error during load', M.STRING],
        labelFileRemoved: ['Removed', M.STRING],
        labelFileRemoveError: ['Error during remove', M.STRING],
        labelFileProcessing: ['Uploading', M.STRING],
        labelFileProcessingComplete: ['Upload complete', M.STRING],
        labelFileProcessingAborted: ['Upload cancelled', M.STRING],
        labelFileProcessingError: ['Error during upload', M.STRING],
        labelFileProcessingRevertError: ['Error during revert', M.STRING],
        labelTapToCancel: ['tap to cancel', M.STRING],
        labelTapToRetry: ['tap to retry', M.STRING],
        labelTapToUndo: ['tap to undo', M.STRING],
        labelButtonRemoveItem: ['Remove', M.STRING],
        labelButtonAbortItemLoad: ['Abort', M.STRING],
        labelButtonRetryItemLoad: ['Retry', M.STRING],
        labelButtonAbortItemProcessing: ['Cancel', M.STRING],
        labelButtonUndoItemProcessing: ['Undo', M.STRING],
        labelButtonRetryItemProcessing: ['Retry', M.STRING],
        labelButtonProcessItem: ['Upload', M.STRING],
        iconRemove: [
            '<svg width="26" height="26" viewBox="0 0 26 26" xmlns="http://www.w3.org/2000/svg"><path d="M11.586 13l-2.293 2.293a1 1 0 0 0 1.414 1.414L13 14.414l2.293 2.293a1 1 0 0 0 1.414-1.414L14.414 13l2.293-2.293a1 1 0 0 0-1.414-1.414L13 11.586l-2.293-2.293a1 1 0 0 0-1.414 1.414L11.586 13z" fill="currentColor" fill-rule="nonzero"/></svg>',
            M.STRING,
        ],
        iconProcess: [
            '<svg width="26" height="26" viewBox="0 0 26 26" xmlns="http://www.w3.org/2000/svg"><path d="M14 10.414v3.585a1 1 0 0 1-2 0v-3.585l-1.293 1.293a1 1 0 0 1-1.414-1.415l3-3a1 1 0 0 1 1.414 0l3 3a1 1 0 0 1-1.414 1.415L14 10.414zM9 18a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2H9z" fill="currentColor" fill-rule="evenodd"/></svg>',
            M.STRING,
        ],
        iconRetry: [
            '<svg width="26" height="26" viewBox="0 0 26 26" xmlns="http://www.w3.org/2000/svg"><path d="M10.81 9.185l-.038.02A4.997 4.997 0 0 0 8 13.683a5 5 0 0 0 5 5 5 5 0 0 0 5-5 1 1 0 0 1 2 0A7 7 0 1 1 9.722 7.496l-.842-.21a.999.999 0 1 1 .484-1.94l3.23.806c.535.133.86.675.73 1.21l-.804 3.233a.997.997 0 0 1-1.21.73.997.997 0 0 1-.73-1.21l.23-.928v-.002z" fill="currentColor" fill-rule="nonzero"/></svg>',
            M.STRING,
        ],
        iconUndo: [
            '<svg width="26" height="26" viewBox="0 0 26 26" xmlns="http://www.w3.org/2000/svg"><path d="M9.185 10.81l.02-.038A4.997 4.997 0 0 1 13.683 8a5 5 0 0 1 5 5 5 5 0 0 1-5 5 1 1 0 0 0 0 2A7 7 0 1 0 7.496 9.722l-.21-.842a.999.999 0 1 0-1.94.484l.806 3.23c.133.535.675.86 1.21.73l3.233-.803a.997.997 0 0 0 .73-1.21.997.997 0 0 0-1.21-.73l-.928.23-.002-.001z" fill="currentColor" fill-rule="nonzero"/></svg>',
            M.STRING,
        ],
        iconDone: [
            '<svg width="26" height="26" viewBox="0 0 26 26" xmlns="http://www.w3.org/2000/svg"><path d="M18.293 9.293a1 1 0 0 1 1.414 1.414l-7.002 7a1 1 0 0 1-1.414 0l-3.998-4a1 1 0 1 1 1.414-1.414L12 15.586l6.294-6.293z" fill="currentColor" fill-rule="nonzero"/></svg>',
            M.STRING,
        ],
        oninit: [null, M.FUNCTION],
        onwarning: [null, M.FUNCTION],
        onerror: [null, M.FUNCTION],
        onactivatefile: [null, M.FUNCTION],
        oninitfile: [null, M.FUNCTION],
        onaddfilestart: [null, M.FUNCTION],
        onaddfileprogress: [null, M.FUNCTION],
        onaddfile: [null, M.FUNCTION],
        onprocessfilestart: [null, M.FUNCTION],
        onprocessfileprogress: [null, M.FUNCTION],
        onprocessfileabort: [null, M.FUNCTION],
        onprocessfilerevert: [null, M.FUNCTION],
        onprocessfile: [null, M.FUNCTION],
        onprocessfiles: [null, M.FUNCTION],
        onremovefile: [null, M.FUNCTION],
        onpreparefile: [null, M.FUNCTION],
        onupdatefiles: [null, M.FUNCTION],
        onreorderfiles: [null, M.FUNCTION],
        beforeDropFile: [null, M.FUNCTION],
        beforeAddFile: [null, M.FUNCTION],
        beforeRemoveFile: [null, M.FUNCTION],
        beforePrepareFile: [null, M.FUNCTION],
        stylePanelLayout: [null, M.STRING],
        stylePanelAspectRatio: [null, M.STRING],
        styleItemPanelAspectRatio: [null, M.STRING],
        styleButtonRemoveItemPosition: ['left', M.STRING],
        styleButtonProcessItemPosition: ['right', M.STRING],
        styleLoadIndicatorPosition: ['right', M.STRING],
        styleProgressIndicatorPosition: ['right', M.STRING],
        styleButtonRemoveItemAlign: [!1, M.BOOLEAN],
        files: [[], M.ARRAY],
        credits: [['https://pqina.nl/', 'Powered by PQINA'], M.ARRAY],
    },
    We = (e, t) =>
        Pe(t)
            ? e[0] || null
            : dt(t)
              ? e[t] || null
              : (typeof t == 'object' && (t = t.id), e.find((i) => i.id === t) || null),
    gn = (e) => {
        if (Pe(e)) return e;
        if (/:/.test(e)) {
            let t = e.split(':');
            return t[1] / t[0];
        }
        return parseFloat(e);
    },
    we = (e) => e.filter((t) => !t.archived),
    En = { EMPTY: 0, IDLE: 1, ERROR: 2, BUSY: 3, READY: 4 },
    kt = null,
    Fl = () => {
        if (kt === null)
            try {
                let e = new DataTransfer();
                e.items.add(new File(['hello world'], 'This_Works.txt'));
                let t = document.createElement('input');
                t.setAttribute('type', 'file'), (t.files = e.files), (kt = t.files.length === 1);
            } catch {
                kt = !1;
            }
        return kt;
    },
    Cl = [H.LOAD_ERROR, H.PROCESSING_ERROR, H.PROCESSING_REVERT_ERROR],
    zl = [H.LOADING, H.PROCESSING, H.PROCESSING_QUEUED, H.INIT],
    Nl = [H.PROCESSING_COMPLETE],
    Bl = (e) => Cl.includes(e.status),
    Gl = (e) => zl.includes(e.status),
    Vl = (e) => Nl.includes(e.status),
    xa = (e) =>
        re(e.options.server) && (re(e.options.server.process) || He(e.options.server.process)),
    Ul = (e) => ({
        GET_STATUS: () => {
            let t = we(e.items),
                { EMPTY: i, ERROR: a, BUSY: n, IDLE: r, READY: o } = En;
            return t.length === 0 ? i : t.some(Bl) ? a : t.some(Gl) ? n : t.some(Vl) ? o : r;
        },
        GET_ITEM: (t) => We(e.items, t),
        GET_ACTIVE_ITEM: (t) => We(we(e.items), t),
        GET_ACTIVE_ITEMS: () => we(e.items),
        GET_ITEMS: () => e.items,
        GET_ITEM_NAME: (t) => {
            let i = We(e.items, t);
            return i ? i.filename : null;
        },
        GET_ITEM_SIZE: (t) => {
            let i = We(e.items, t);
            return i ? i.fileSize : null;
        },
        GET_STYLES: () =>
            Object.keys(e.options)
                .filter((t) => /^style/.test(t))
                .map((t) => ({ name: t, value: e.options[t] })),
        GET_PANEL_ASPECT_RATIO: () =>
            /circle/.test(e.options.stylePanelLayout) ? 1 : gn(e.options.stylePanelAspectRatio),
        GET_ITEM_PANEL_ASPECT_RATIO: () => e.options.styleItemPanelAspectRatio,
        GET_ITEMS_BY_STATUS: (t) => we(e.items).filter((i) => i.status === t),
        GET_TOTAL_ITEMS: () => we(e.items).length,
        SHOULD_UPDATE_FILE_INPUT: () => e.options.storeAsFile && Fl() && !xa(e),
        IS_ASYNC: () => xa(e),
        GET_FILE_SIZE_LABELS: (t) => ({
            labelBytes: t('GET_LABEL_FILE_SIZE_BYTES') || void 0,
            labelKilobytes: t('GET_LABEL_FILE_SIZE_KILOBYTES') || void 0,
            labelMegabytes: t('GET_LABEL_FILE_SIZE_MEGABYTES') || void 0,
            labelGigabytes: t('GET_LABEL_FILE_SIZE_GIGABYTES') || void 0,
        }),
    }),
    kl = (e) => {
        let t = we(e.items).length;
        if (!e.options.allowMultiple) return t === 0;
        let i = e.options.maxFiles;
        return i === null || t < i;
    },
    Tn = (e, t, i) => Math.max(Math.min(i, e), t),
    Hl = (e, t, i) => e.splice(t, 0, i),
    Wl = (e, t, i) =>
        Pe(t) ? null : typeof i > 'u' ? (e.push(t), t) : ((i = Tn(i, 0, e.length)), Hl(e, i, t), t),
    wi = (e) =>
        /^\s*data:([a-z]+\/[a-z0-9-+.]+(;[a-z-]+=[a-z0-9-]+)?)?(;base64)?,([a-z0-9!$&',()*+;=\-._~:@\/?%\s]*)\s*$/i.test(
            e,
        ),
    At = (e) => e.split('/').pop().split('?').shift(),
    ai = (e) => e.split('.').pop(),
    Yl = (e) => {
        if (typeof e != 'string') return '';
        let t = e.split('/').pop();
        return /svg/.test(t)
            ? 'svg'
            : /zip|compressed/.test(t)
              ? 'zip'
              : /plain/.test(t)
                ? 'txt'
                : /msword/.test(t)
                  ? 'doc'
                  : /[a-z]+/.test(t)
                    ? t === 'jpeg'
                        ? 'jpg'
                        : t
                    : '';
    },
    Rt = (e, t = '') => (t + e).slice(-t.length),
    In = (e = new Date()) =>
        `${e.getFullYear()}-${Rt(e.getMonth() + 1, '00')}-${Rt(e.getDate(), '00')}_${Rt(
            e.getHours(),
            '00',
        )}-${Rt(e.getMinutes(), '00')}-${Rt(e.getSeconds(), '00')}`,
    st = (e, t, i = null, a = null) => {
        let n = typeof i == 'string' ? e.slice(0, e.size, i) : e.slice(0, e.size, e.type);
        return (
            (n.lastModifiedDate = new Date()),
            e._relativePath && (n._relativePath = e._relativePath),
            de(t) || (t = In()),
            t && a === null && ai(t)
                ? (n.name = t)
                : ((a = a || Yl(n.type)), (n.name = t + (a ? '.' + a : ''))),
            n
        );
    },
    $l = () =>
        (window.BlobBuilder =
            window.BlobBuilder ||
            window.WebKitBlobBuilder ||
            window.MozBlobBuilder ||
            window.MSBlobBuilder),
    bn = (e, t) => {
        let i = $l();
        if (i) {
            let a = new i();
            return a.append(e), a.getBlob(t);
        }
        return new Blob([e], { type: t });
    },
    ql = (e, t) => {
        let i = new ArrayBuffer(e.length),
            a = new Uint8Array(i);
        for (let n = 0; n < e.length; n++) a[n] = e.charCodeAt(n);
        return bn(i, t);
    },
    _n = (e) => (/^data:(.+);/.exec(e) || [])[1] || null,
    Xl = (e) => e.split(',')[1].replace(/\s/g, ''),
    jl = (e) => atob(Xl(e)),
    Ql = (e) => {
        let t = _n(e),
            i = jl(e);
        return ql(i, t);
    },
    Zl = (e, t, i) => st(Ql(e), t, null, i),
    Kl = (e) => {
        if (!/^content-disposition:/i.test(e)) return null;
        let t = e
            .split(/filename=|filename\*=.+''/)
            .splice(1)
            .map((i) => i.trim().replace(/^["']|[;"']{0,2}$/g, ''))
            .filter((i) => i.length);
        return t.length ? decodeURI(t[t.length - 1]) : null;
    },
    Jl = (e) => {
        if (/content-length:/i.test(e)) {
            let t = e.match(/[0-9]+/)[0];
            return t ? parseInt(t, 10) : null;
        }
        return null;
    },
    es = (e) => (/x-content-transfer-id:/i.test(e) && (e.split(':')[1] || '').trim()) || null,
    Ui = (e) => {
        let t = { source: null, name: null, size: null },
            i = e.split(`
`);
        for (let a of i) {
            let n = Kl(a);
            if (n) {
                t.name = n;
                continue;
            }
            let r = Jl(a);
            if (r) {
                t.size = r;
                continue;
            }
            let o = es(a);
            if (o) {
                t.source = o;
                continue;
            }
        }
        return t;
    },
    ts = (e) => {
        let t = {
                source: null,
                complete: !1,
                progress: 0,
                size: null,
                timestamp: null,
                duration: 0,
                request: null,
            },
            i = () => t.progress,
            a = () => {
                t.request && t.request.abort && t.request.abort();
            },
            n = () => {
                let l = t.source;
                o.fire('init', l),
                    l instanceof File
                        ? o.fire('load', l)
                        : l instanceof Blob
                          ? o.fire('load', st(l, l.name))
                          : wi(l)
                            ? o.fire('load', Zl(l))
                            : r(l);
            },
            r = (l) => {
                if (!e) {
                    o.fire('error', {
                        type: 'error',
                        body: "Can't load URL",
                        code: 400,
                    });
                    return;
                }
                (t.timestamp = Date.now()),
                    (t.request = e(
                        l,
                        (s) => {
                            (t.duration = Date.now() - t.timestamp),
                                (t.complete = !0),
                                s instanceof Blob && (s = st(s, s.name || At(l))),
                                o.fire('load', s instanceof Blob ? s : s ? s.body : null);
                        },
                        (s) => {
                            o.fire(
                                'error',
                                typeof s == 'string' ? { type: 'error', code: 0, body: s } : s,
                            );
                        },
                        (s, u, c) => {
                            if ((c && (t.size = c), (t.duration = Date.now() - t.timestamp), !s)) {
                                t.progress = null;
                                return;
                            }
                            (t.progress = u / c), o.fire('progress', t.progress);
                        },
                        () => {
                            o.fire('abort');
                        },
                        (s) => {
                            let u = Ui(typeof s == 'string' ? s : s.headers);
                            o.fire('meta', {
                                size: t.size || u.size,
                                filename: u.name,
                                source: u.source,
                            });
                        },
                    ));
            },
            o = {
                ...ii(),
                setSource: (l) => (t.source = l),
                getProgress: i,
                abort: a,
                load: n,
            };
        return o;
    },
    Da = (e) => /GET|HEAD/.test(e),
    Ye = (e, t, i) => {
        let a = {
                onheaders: () => {},
                onprogress: () => {},
                onload: () => {},
                ontimeout: () => {},
                onerror: () => {},
                onabort: () => {},
                abort: () => {
                    (n = !0), o.abort();
                },
            },
            n = !1,
            r = !1;
        (i = { method: 'POST', headers: {}, withCredentials: !1, ...i }),
            (t = encodeURI(t)),
            Da(i.method) &&
                e &&
                (t = `${t}${encodeURIComponent(typeof e == 'string' ? e : JSON.stringify(e))}`);
        let o = new XMLHttpRequest(),
            l = Da(i.method) ? o : o.upload;
        return (
            (l.onprogress = (s) => {
                n || a.onprogress(s.lengthComputable, s.loaded, s.total);
            }),
            (o.onreadystatechange = () => {
                o.readyState < 2 ||
                    (o.readyState === 4 && o.status === 0) ||
                    r ||
                    ((r = !0), a.onheaders(o));
            }),
            (o.onload = () => {
                o.status >= 200 && o.status < 300 ? a.onload(o) : a.onerror(o);
            }),
            (o.onerror = () => a.onerror(o)),
            (o.onabort = () => {
                (n = !0), a.onabort();
            }),
            (o.ontimeout = () => a.ontimeout(o)),
            o.open(i.method, t, !0),
            dt(i.timeout) && (o.timeout = i.timeout),
            Object.keys(i.headers).forEach((s) => {
                let u = unescape(encodeURIComponent(i.headers[s]));
                o.setRequestHeader(s, u);
            }),
            i.responseType && (o.responseType = i.responseType),
            i.withCredentials && (o.withCredentials = !0),
            o.send(e),
            a
        );
    },
    K = (e, t, i, a) => ({ type: e, code: t, body: i, headers: a }),
    $e = (e) => (t) => {
        e(K('error', 0, 'Timeout', t.getAllResponseHeaders()));
    },
    Pa = (e) => /\?/.test(e),
    wt = (...e) => {
        let t = '';
        return (
            e.forEach((i) => {
                t += Pa(t) && Pa(i) ? i.replace(/\?/, '&') : i;
            }),
            t
        );
    },
    Ti = (e = '', t) => {
        if (typeof t == 'function') return t;
        if (!t || !de(t.url)) return null;
        let i = t.onload || ((n) => n),
            a = t.onerror || ((n) => null);
        return (n, r, o, l, s, u) => {
            let c = Ye(n, wt(e, t.url), { ...t, responseType: 'blob' });
            return (
                (c.onload = (d) => {
                    let h = d.getAllResponseHeaders(),
                        f = Ui(h).name || At(n);
                    r(K('load', d.status, t.method === 'HEAD' ? null : st(i(d.response), f), h));
                }),
                (c.onerror = (d) => {
                    o(
                        K(
                            'error',
                            d.status,
                            a(d.response) || d.statusText,
                            d.getAllResponseHeaders(),
                        ),
                    );
                }),
                (c.onheaders = (d) => {
                    u(K('headers', d.status, null, d.getAllResponseHeaders()));
                }),
                (c.ontimeout = $e(o)),
                (c.onprogress = l),
                (c.onabort = s),
                c
            );
        };
    },
    Te = { QUEUED: 0, COMPLETE: 1, PROCESSING: 2, ERROR: 3, WAITING: 4 },
    is = (e, t, i, a, n, r, o, l, s, u, c) => {
        let d = [],
            { chunkTransferId: h, chunkServer: f, chunkSize: p, chunkRetryDelays: m } = c,
            g = { serverId: h, aborted: !1 },
            b = t.ondata || ((A) => A),
            E =
                t.onload ||
                ((A, C) => (C === 'HEAD' ? A.getResponseHeader('Upload-Offset') : A.response)),
            T = t.onerror || ((A) => null),
            _ = (A) => {
                let C = new FormData();
                re(n) && C.append(i, JSON.stringify(n));
                let w =
                        typeof t.headers == 'function'
                            ? t.headers(a, n)
                            : { ...t.headers, 'Upload-Length': a.size },
                    L = { ...t, headers: w },
                    N = Ye(b(C), wt(e, t.url), L);
                (N.onload = (F) => A(E(F, L.method))),
                    (N.onerror = (F) =>
                        o(
                            K(
                                'error',
                                F.status,
                                T(F.response) || F.statusText,
                                F.getAllResponseHeaders(),
                            ),
                        )),
                    (N.ontimeout = $e(o));
            },
            y = (A) => {
                let C = wt(e, f.url, g.serverId),
                    L = {
                        headers:
                            typeof t.headers == 'function'
                                ? t.headers(g.serverId)
                                : { ...t.headers },
                        method: 'HEAD',
                    },
                    N = Ye(null, C, L);
                (N.onload = (F) => A(E(F, L.method))),
                    (N.onerror = (F) =>
                        o(
                            K(
                                'error',
                                F.status,
                                T(F.response) || F.statusText,
                                F.getAllResponseHeaders(),
                            ),
                        )),
                    (N.ontimeout = $e(o));
            },
            I = Math.floor(a.size / p);
        for (let A = 0; A <= I; A++) {
            let C = A * p,
                w = a.slice(C, C + p, 'application/offset+octet-stream');
            d[A] = {
                index: A,
                size: w.size,
                offset: C,
                data: w,
                file: a,
                progress: 0,
                retries: [...m],
                status: Te.QUEUED,
                error: null,
                request: null,
                timeout: null,
            };
        }
        let v = () => r(g.serverId),
            R = (A) => A.status === Te.QUEUED || A.status === Te.ERROR,
            S = (A) => {
                if (g.aborted) return;
                if (((A = A || d.find(R)), !A)) {
                    d.every((V) => V.status === Te.COMPLETE) && v();
                    return;
                }
                (A.status = Te.PROCESSING), (A.progress = null);
                let C = f.ondata || ((V) => V),
                    w = f.onerror || ((V) => null),
                    L = wt(e, f.url, g.serverId),
                    N =
                        typeof f.headers == 'function'
                            ? f.headers(A)
                            : {
                                  ...f.headers,
                                  'Content-Type': 'application/offset+octet-stream',
                                  'Upload-Offset': A.offset,
                                  'Upload-Length': a.size,
                                  'Upload-Name': a.name,
                              },
                    F = (A.request = Ye(C(A.data), L, { ...f, headers: N }));
                (F.onload = () => {
                    (A.status = Te.COMPLETE), (A.request = null), O();
                }),
                    (F.onprogress = (V, G, $) => {
                        (A.progress = V ? G : null), x();
                    }),
                    (F.onerror = (V) => {
                        (A.status = Te.ERROR),
                            (A.request = null),
                            (A.error = w(V.response) || V.statusText),
                            P(A) ||
                                o(
                                    K(
                                        'error',
                                        V.status,
                                        w(V.response) || V.statusText,
                                        V.getAllResponseHeaders(),
                                    ),
                                );
                    }),
                    (F.ontimeout = (V) => {
                        (A.status = Te.ERROR), (A.request = null), P(A) || $e(o)(V);
                    }),
                    (F.onabort = () => {
                        (A.status = Te.QUEUED), (A.request = null), s();
                    });
            },
            P = (A) =>
                A.retries.length === 0
                    ? !1
                    : ((A.status = Te.WAITING),
                      clearTimeout(A.timeout),
                      (A.timeout = setTimeout(() => {
                          S(A);
                      }, A.retries.shift())),
                      !0),
            x = () => {
                let A = d.reduce(
                    (w, L) => (w === null || L.progress === null ? null : w + L.progress),
                    0,
                );
                if (A === null) return l(!1, 0, 0);
                let C = d.reduce((w, L) => w + L.size, 0);
                l(!0, A, C);
            },
            O = () => {
                d.filter((C) => C.status === Te.PROCESSING).length >= 1 || S();
            },
            B = () => {
                d.forEach((A) => {
                    clearTimeout(A.timeout), A.request && A.request.abort();
                });
            };
        return (
            g.serverId
                ? y((A) => {
                      g.aborted ||
                          (d
                              .filter((C) => C.offset < A)
                              .forEach((C) => {
                                  (C.status = Te.COMPLETE), (C.progress = C.size);
                              }),
                          O());
                  })
                : _((A) => {
                      g.aborted || (u(A), (g.serverId = A), O());
                  }),
            {
                abort: () => {
                    (g.aborted = !0), B();
                },
            }
        );
    },
    as = (e, t, i, a) => (n, r, o, l, s, u, c) => {
        if (!n) return;
        let d = a.chunkUploads,
            h = d && n.size > a.chunkSize,
            f = d && (h || a.chunkForce);
        if (n instanceof Blob && f) return is(e, t, i, n, r, o, l, s, u, c, a);
        let p = t.ondata || ((y) => y),
            m = t.onload || ((y) => y),
            g = t.onerror || ((y) => null),
            b = typeof t.headers == 'function' ? t.headers(n, r) || {} : { ...t.headers },
            E = { ...t, headers: b };
        var T = new FormData();
        re(r) && T.append(i, JSON.stringify(r)),
            (n instanceof Blob ? [{ name: null, file: n }] : n).forEach((y) => {
                T.append(i, y.file, y.name === null ? y.file.name : `${y.name}${y.file.name}`);
            });
        let _ = Ye(p(T), wt(e, t.url), E);
        return (
            (_.onload = (y) => {
                o(K('load', y.status, m(y.response), y.getAllResponseHeaders()));
            }),
            (_.onerror = (y) => {
                l(K('error', y.status, g(y.response) || y.statusText, y.getAllResponseHeaders()));
            }),
            (_.ontimeout = $e(l)),
            (_.onprogress = s),
            (_.onabort = u),
            _
        );
    },
    ns = (e = '', t, i, a) =>
        typeof t == 'function' ? (...n) => t(i, ...n, a) : !t || !de(t.url) ? null : as(e, t, i, a),
    yt = (e = '', t) => {
        if (typeof t == 'function') return t;
        if (!t || !de(t.url)) return (n, r) => r();
        let i = t.onload || ((n) => n),
            a = t.onerror || ((n) => null);
        return (n, r, o) => {
            let l = Ye(n, e + t.url, t);
            return (
                (l.onload = (s) => {
                    r(K('load', s.status, i(s.response), s.getAllResponseHeaders()));
                }),
                (l.onerror = (s) => {
                    o(
                        K(
                            'error',
                            s.status,
                            a(s.response) || s.statusText,
                            s.getAllResponseHeaders(),
                        ),
                    );
                }),
                (l.ontimeout = $e(o)),
                l
            );
        };
    },
    Rn = (e = 0, t = 1) => e + Math.random() * (t - e),
    rs = (e, t = 1e3, i = 0, a = 25, n = 250) => {
        let r = null,
            o = Date.now(),
            l = () => {
                let s = Date.now() - o,
                    u = Rn(a, n);
                s + u > t && (u = s + u - t);
                let c = s / t;
                if (c >= 1 || document.hidden) {
                    e(1);
                    return;
                }
                e(c), (r = setTimeout(l, u));
            };
        return (
            t > 0 && l(),
            {
                clear: () => {
                    clearTimeout(r);
                },
            }
        );
    },
    os = (e, t) => {
        let i = {
                complete: !1,
                perceivedProgress: 0,
                perceivedPerformanceUpdater: null,
                progress: null,
                timestamp: null,
                perceivedDuration: 0,
                duration: 0,
                request: null,
                response: null,
            },
            { allowMinimumUploadDuration: a } = t,
            n = (c, d) => {
                let h = () => {
                        i.duration === 0 ||
                            i.progress === null ||
                            u.fire('progress', u.getProgress());
                    },
                    f = () => {
                        (i.complete = !0), u.fire('load-perceived', i.response.body);
                    };
                u.fire('start'),
                    (i.timestamp = Date.now()),
                    (i.perceivedPerformanceUpdater = rs(
                        (p) => {
                            (i.perceivedProgress = p),
                                (i.perceivedDuration = Date.now() - i.timestamp),
                                h(),
                                i.response && i.perceivedProgress === 1 && !i.complete && f();
                        },
                        a ? Rn(750, 1500) : 0,
                    )),
                    (i.request = e(
                        c,
                        d,
                        (p) => {
                            (i.response = re(p)
                                ? p
                                : {
                                      type: 'load',
                                      code: 200,
                                      body: `${p}`,
                                      headers: {},
                                  }),
                                (i.duration = Date.now() - i.timestamp),
                                (i.progress = 1),
                                u.fire('load', i.response.body),
                                (!a || (a && i.perceivedProgress === 1)) && f();
                        },
                        (p) => {
                            i.perceivedPerformanceUpdater.clear(),
                                u.fire(
                                    'error',
                                    re(p)
                                        ? p
                                        : {
                                              type: 'error',
                                              code: 0,
                                              body: `${p}`,
                                          },
                                );
                        },
                        (p, m, g) => {
                            (i.duration = Date.now() - i.timestamp),
                                (i.progress = p ? m / g : null),
                                h();
                        },
                        () => {
                            i.perceivedPerformanceUpdater.clear(),
                                u.fire('abort', i.response ? i.response.body : null);
                        },
                        (p) => {
                            u.fire('transfer', p);
                        },
                    ));
            },
            r = () => {
                i.request &&
                    (i.perceivedPerformanceUpdater.clear(),
                    i.request.abort && i.request.abort(),
                    (i.complete = !0));
            },
            o = () => {
                r(),
                    (i.complete = !1),
                    (i.perceivedProgress = 0),
                    (i.progress = 0),
                    (i.timestamp = null),
                    (i.perceivedDuration = 0),
                    (i.duration = 0),
                    (i.request = null),
                    (i.response = null);
            },
            l = a
                ? () => (i.progress ? Math.min(i.progress, i.perceivedProgress) : null)
                : () => i.progress || null,
            s = a ? () => Math.min(i.duration, i.perceivedDuration) : () => i.duration,
            u = {
                ...ii(),
                process: n,
                abort: r,
                getProgress: l,
                getDuration: s,
                reset: o,
            };
        return u;
    },
    yn = (e) => e.substring(0, e.lastIndexOf('.')) || e,
    ls = (e) => {
        let t = [e.name, e.size, e.type];
        return (
            e instanceof Blob || wi(e)
                ? (t[0] = e.name || In())
                : wi(e)
                  ? ((t[1] = e.length), (t[2] = _n(e)))
                  : de(e) && ((t[0] = At(e)), (t[1] = 0), (t[2] = 'application/octet-stream')),
            { name: t[0], size: t[1], type: t[2] }
        );
    },
    ct = (e) => !!(e instanceof File || (e instanceof Blob && e.name)),
    Sn = (e) => {
        if (!re(e)) return e;
        let t = Jt(e) ? [] : {};
        for (let i in e) {
            if (!e.hasOwnProperty(i)) continue;
            let a = e[i];
            t[i] = a && re(a) ? Sn(a) : a;
        }
        return t;
    },
    ss = (e = null, t = null, i = null) => {
        let a = Bi(),
            n = {
                archived: !1,
                frozen: !1,
                released: !1,
                source: null,
                file: i,
                serverFileReference: t,
                transferId: null,
                processingAborted: !1,
                status: t ? H.PROCESSING_COMPLETE : H.INIT,
                activeLoader: null,
                activeProcessor: null,
            },
            r = null,
            o = {},
            l = (R) => (n.status = R),
            s = (R, ...S) => {
                n.released || n.frozen || I.fire(R, ...S);
            },
            u = () => ai(n.file.name),
            c = () => n.file.type,
            d = () => n.file.size,
            h = () => n.file,
            f = (R, S, P) => {
                if (((n.source = R), I.fireSync('init'), n.file)) {
                    I.fireSync('load-skip');
                    return;
                }
                (n.file = ls(R)),
                    S.on('init', () => {
                        s('load-init');
                    }),
                    S.on('meta', (x) => {
                        (n.file.size = x.size),
                            (n.file.filename = x.filename),
                            x.source &&
                                ((e = ae.LIMBO),
                                (n.serverFileReference = x.source),
                                (n.status = H.PROCESSING_COMPLETE)),
                            s('load-meta');
                    }),
                    S.on('progress', (x) => {
                        l(H.LOADING), s('load-progress', x);
                    }),
                    S.on('error', (x) => {
                        l(H.LOAD_ERROR), s('load-request-error', x);
                    }),
                    S.on('abort', () => {
                        l(H.INIT), s('load-abort');
                    }),
                    S.on('load', (x) => {
                        n.activeLoader = null;
                        let O = (A) => {
                                (n.file = ct(A) ? A : n.file),
                                    e === ae.LIMBO && n.serverFileReference
                                        ? l(H.PROCESSING_COMPLETE)
                                        : l(H.IDLE),
                                    s('load');
                            },
                            B = (A) => {
                                (n.file = x),
                                    s('load-meta'),
                                    l(H.LOAD_ERROR),
                                    s('load-file-error', A);
                            };
                        if (n.serverFileReference) {
                            O(x);
                            return;
                        }
                        P(x, O, B);
                    }),
                    S.setSource(R),
                    (n.activeLoader = S),
                    S.load();
            },
            p = () => {
                n.activeLoader && n.activeLoader.load();
            },
            m = () => {
                if (n.activeLoader) {
                    n.activeLoader.abort();
                    return;
                }
                l(H.INIT), s('load-abort');
            },
            g = (R, S) => {
                if (n.processingAborted) {
                    n.processingAborted = !1;
                    return;
                }
                if ((l(H.PROCESSING), (r = null), !(n.file instanceof Blob))) {
                    I.on('load', () => {
                        g(R, S);
                    });
                    return;
                }
                R.on('load', (O) => {
                    (n.transferId = null), (n.serverFileReference = O);
                }),
                    R.on('transfer', (O) => {
                        n.transferId = O;
                    }),
                    R.on('load-perceived', (O) => {
                        (n.activeProcessor = null),
                            (n.transferId = null),
                            (n.serverFileReference = O),
                            l(H.PROCESSING_COMPLETE),
                            s('process-complete', O);
                    }),
                    R.on('start', () => {
                        s('process-start');
                    }),
                    R.on('error', (O) => {
                        (n.activeProcessor = null), l(H.PROCESSING_ERROR), s('process-error', O);
                    }),
                    R.on('abort', (O) => {
                        (n.activeProcessor = null),
                            (n.serverFileReference = O),
                            l(H.IDLE),
                            s('process-abort'),
                            r && r();
                    }),
                    R.on('progress', (O) => {
                        s('process-progress', O);
                    });
                let P = (O) => {
                        n.archived || R.process(O, { ...o });
                    },
                    x = console.error;
                S(n.file, P, x), (n.activeProcessor = R);
            },
            b = () => {
                (n.processingAborted = !1), l(H.PROCESSING_QUEUED);
            },
            E = () =>
                new Promise((R) => {
                    if (!n.activeProcessor) {
                        (n.processingAborted = !0), l(H.IDLE), s('process-abort'), R();
                        return;
                    }
                    (r = () => {
                        R();
                    }),
                        n.activeProcessor.abort();
                }),
            T = (R, S) =>
                new Promise((P, x) => {
                    let O = n.serverFileReference !== null ? n.serverFileReference : n.transferId;
                    if (O === null) {
                        P();
                        return;
                    }
                    R(
                        O,
                        () => {
                            (n.serverFileReference = null), (n.transferId = null), P();
                        },
                        (B) => {
                            if (!S) {
                                P();
                                return;
                            }
                            l(H.PROCESSING_REVERT_ERROR), s('process-revert-error'), x(B);
                        },
                    ),
                        l(H.IDLE),
                        s('process-revert');
                }),
            _ = (R, S, P) => {
                let x = R.split('.'),
                    O = x[0],
                    B = x.pop(),
                    A = o;
                x.forEach((C) => (A = A[C])),
                    JSON.stringify(A[B]) !== JSON.stringify(S) &&
                        ((A[B] = S),
                        s('metadata-update', {
                            key: O,
                            value: o[O],
                            silent: P,
                        }));
            },
            I = {
                id: { get: () => a },
                origin: { get: () => e, set: (R) => (e = R) },
                serverId: { get: () => n.serverFileReference },
                transferId: { get: () => n.transferId },
                status: { get: () => n.status },
                filename: { get: () => n.file.name },
                filenameWithoutExtension: { get: () => yn(n.file.name) },
                fileExtension: { get: u },
                fileType: { get: c },
                fileSize: { get: d },
                file: { get: h },
                relativePath: { get: () => n.file._relativePath },
                source: { get: () => n.source },
                getMetadata: (R) => Sn(R ? o[R] : o),
                setMetadata: (R, S, P) => {
                    if (re(R)) {
                        let x = R;
                        return (
                            Object.keys(x).forEach((O) => {
                                _(O, x[O], S);
                            }),
                            R
                        );
                    }
                    return _(R, S, P), S;
                },
                extend: (R, S) => (v[R] = S),
                abortLoad: m,
                retryLoad: p,
                requestProcessing: b,
                abortProcessing: E,
                load: f,
                process: g,
                revert: T,
                ...ii(),
                freeze: () => (n.frozen = !0),
                release: () => (n.released = !0),
                released: { get: () => n.released },
                archive: () => (n.archived = !0),
                archived: { get: () => n.archived },
            },
            v = ze(I);
        return v;
    },
    cs = (e, t) => (Pe(t) ? 0 : de(t) ? e.findIndex((i) => i.id === t) : -1),
    Fa = (e, t) => {
        let i = cs(e, t);
        if (!(i < 0)) return e[i] || null;
    },
    Ca = (e, t, i, a, n, r) => {
        let o = Ye(null, e, { method: 'GET', responseType: 'blob' });
        return (
            (o.onload = (l) => {
                let s = l.getAllResponseHeaders(),
                    u = Ui(s).name || At(e);
                t(K('load', l.status, st(l.response, u), s));
            }),
            (o.onerror = (l) => {
                i(K('error', l.status, l.statusText, l.getAllResponseHeaders()));
            }),
            (o.onheaders = (l) => {
                r(K('headers', l.status, null, l.getAllResponseHeaders()));
            }),
            (o.ontimeout = $e(i)),
            (o.onprogress = a),
            (o.onabort = n),
            o
        );
    },
    za = (e) => (
        e.indexOf('//') === 0 && (e = location.protocol + e),
        e
            .toLowerCase()
            .replace('blob:', '')
            .replace(/([a-z])?:\/\//, '$1')
            .split('/')[0]
    ),
    ds = (e) => (e.indexOf(':') > -1 || e.indexOf('//') > -1) && za(location.href) !== za(e),
    Ht =
        (e) =>
        (...t) =>
            He(e) ? e(...t) : e,
    us = (e) => !ct(e.file),
    Ii = (e, t) => {
        clearTimeout(t.listUpdateTimeout),
            (t.listUpdateTimeout = setTimeout(() => {
                e('DID_UPDATE_ITEMS', { items: we(t.items) });
            }, 0));
    },
    Na = (e, ...t) =>
        new Promise((i) => {
            if (!e) return i(!0);
            let a = e(...t);
            if (a == null) return i(!0);
            if (typeof a == 'boolean') return i(a);
            typeof a.then == 'function' && a.then(i);
        }),
    bi = (e, t) => {
        e.items.sort((i, a) => t(he(i), he(a)));
    },
    Ie =
        (e, t) =>
        ({ query: i, success: a = () => {}, failure: n = () => {}, ...r } = {}) => {
            let o = We(e.items, i);
            if (!o) {
                n({ error: K('error', 0, 'Item not found'), file: null });
                return;
            }
            t(o, a, n, r || {});
        },
    hs = (e, t, i) => ({
        ABORT_ALL: () => {
            we(i.items).forEach((a) => {
                a.freeze(), a.abortLoad(), a.abortProcessing();
            });
        },
        DID_SET_FILES: ({ value: a = [] }) => {
            let n = a.map((o) => ({
                    source: o.source ? o.source : o,
                    options: o.options,
                })),
                r = we(i.items);
            r.forEach((o) => {
                n.find((l) => l.source === o.source || l.source === o.file) ||
                    e('REMOVE_ITEM', { query: o, remove: !1 });
            }),
                (r = we(i.items)),
                n.forEach((o, l) => {
                    r.find((s) => s.source === o.source || s.file === o.source) ||
                        e('ADD_ITEM', {
                            ...o,
                            interactionMethod: be.NONE,
                            index: l,
                        });
                });
        },
        DID_UPDATE_ITEM_METADATA: ({ id: a, action: n, change: r }) => {
            r.silent ||
                (clearTimeout(i.itemUpdateTimeout),
                (i.itemUpdateTimeout = setTimeout(() => {
                    let o = Fa(i.items, a);
                    if (!t('IS_ASYNC')) {
                        Se('SHOULD_PREPARE_OUTPUT', !1, {
                            item: o,
                            query: t,
                            action: n,
                            change: r,
                        }).then((c) => {
                            let d = t('GET_BEFORE_PREPARE_FILE');
                            d && (c = d(o, c)),
                                c &&
                                    e(
                                        'REQUEST_PREPARE_OUTPUT',
                                        {
                                            query: a,
                                            item: o,
                                            success: (h) => {
                                                e('DID_PREPARE_OUTPUT', {
                                                    id: a,
                                                    file: h,
                                                });
                                            },
                                        },
                                        !0,
                                    );
                        });
                        return;
                    }
                    o.origin === ae.LOCAL &&
                        e('DID_LOAD_ITEM', {
                            id: o.id,
                            error: null,
                            serverFileReference: o.source,
                        });
                    let l = () => {
                            setTimeout(() => {
                                e('REQUEST_ITEM_PROCESSING', { query: a });
                            }, 32);
                        },
                        s = (c) => {
                            o.revert(
                                yt(i.options.server.url, i.options.server.revert),
                                t('GET_FORCE_REVERT'),
                            )
                                .then(c ? l : () => {})
                                .catch(() => {});
                        },
                        u = (c) => {
                            o.abortProcessing().then(c ? l : () => {});
                        };
                    if (o.status === H.PROCESSING_COMPLETE) return s(i.options.instantUpload);
                    if (o.status === H.PROCESSING) return u(i.options.instantUpload);
                    i.options.instantUpload && l();
                }, 0)));
        },
        MOVE_ITEM: ({ query: a, index: n }) => {
            let r = We(i.items, a);
            if (!r) return;
            let o = i.items.indexOf(r);
            (n = Tn(n, 0, i.items.length - 1)),
                o !== n && i.items.splice(n, 0, i.items.splice(o, 1)[0]);
        },
        SORT: ({ compare: a }) => {
            bi(i, a), e('DID_SORT_ITEMS', { items: t('GET_ACTIVE_ITEMS') });
        },
        ADD_ITEMS: ({
            items: a,
            index: n,
            interactionMethod: r,
            success: o = () => {},
            failure: l = () => {},
        }) => {
            let s = n;
            if (n === -1 || typeof n > 'u') {
                let f = t('GET_ITEM_INSERT_LOCATION'),
                    p = t('GET_TOTAL_ITEMS');
                s = f === 'before' ? 0 : p;
            }
            let u = t('GET_IGNORED_FILES'),
                c = (f) => (ct(f) ? !u.includes(f.name.toLowerCase()) : !Pe(f)),
                h = a.filter(c).map(
                    (f) =>
                        new Promise((p, m) => {
                            e('ADD_ITEM', {
                                interactionMethod: r,
                                source: f.source || f,
                                success: p,
                                failure: m,
                                index: s++,
                                options: f.options || {},
                            });
                        }),
                );
            Promise.all(h).then(o).catch(l);
        },
        ADD_ITEM: ({
            source: a,
            index: n = -1,
            interactionMethod: r,
            success: o = () => {},
            failure: l = () => {},
            options: s = {},
        }) => {
            if (Pe(a)) {
                l({ error: K('error', 0, 'No source'), file: null });
                return;
            }
            if (ct(a) && i.options.ignoredFiles.includes(a.name.toLowerCase())) return;
            if (!kl(i)) {
                if (
                    i.options.allowMultiple ||
                    (!i.options.allowMultiple && !i.options.allowReplace)
                ) {
                    let E = K('warning', 0, 'Max files');
                    e('DID_THROW_MAX_FILES', { source: a, error: E }), l({ error: E, file: null });
                    return;
                }
                let b = we(i.items)[0];
                if (b.status === H.PROCESSING_COMPLETE || b.status === H.PROCESSING_REVERT_ERROR) {
                    let E = t('GET_FORCE_REVERT');
                    if (
                        (b
                            .revert(yt(i.options.server.url, i.options.server.revert), E)
                            .then(() => {
                                E &&
                                    e('ADD_ITEM', {
                                        source: a,
                                        index: n,
                                        interactionMethod: r,
                                        success: o,
                                        failure: l,
                                        options: s,
                                    });
                            })
                            .catch(() => {}),
                        E)
                    )
                        return;
                }
                e('REMOVE_ITEM', { query: b.id });
            }
            let u = s.type === 'local' ? ae.LOCAL : s.type === 'limbo' ? ae.LIMBO : ae.INPUT,
                c = ss(u, u === ae.INPUT ? null : a, s.file);
            Object.keys(s.metadata || {}).forEach((b) => {
                c.setMetadata(b, s.metadata[b]);
            }),
                Xe('DID_CREATE_ITEM', c, { query: t, dispatch: e });
            let d = t('GET_ITEM_INSERT_LOCATION');
            i.options.itemInsertLocationFreedom || (n = d === 'before' ? -1 : i.items.length),
                Wl(i.items, c, n),
                He(d) && a && bi(i, d);
            let h = c.id;
            c.on('init', () => {
                e('DID_INIT_ITEM', { id: h });
            }),
                c.on('load-init', () => {
                    e('DID_START_ITEM_LOAD', { id: h });
                }),
                c.on('load-meta', () => {
                    e('DID_UPDATE_ITEM_META', { id: h });
                }),
                c.on('load-progress', (b) => {
                    e('DID_UPDATE_ITEM_LOAD_PROGRESS', { id: h, progress: b });
                }),
                c.on('load-request-error', (b) => {
                    let E = Ht(i.options.labelFileLoadError)(b);
                    if (b.code >= 400 && b.code < 500) {
                        e('DID_THROW_ITEM_INVALID', {
                            id: h,
                            error: b,
                            status: { main: E, sub: `${b.code} (${b.body})` },
                        }),
                            l({ error: b, file: he(c) });
                        return;
                    }
                    e('DID_THROW_ITEM_LOAD_ERROR', {
                        id: h,
                        error: b,
                        status: { main: E, sub: i.options.labelTapToRetry },
                    });
                }),
                c.on('load-file-error', (b) => {
                    e('DID_THROW_ITEM_INVALID', {
                        id: h,
                        error: b.status,
                        status: b.status,
                    }),
                        l({ error: b.status, file: he(c) });
                }),
                c.on('load-abort', () => {
                    e('REMOVE_ITEM', { query: h });
                }),
                c.on('load-skip', () => {
                    e('COMPLETE_LOAD_ITEM', {
                        query: h,
                        item: c,
                        data: { source: a, success: o },
                    });
                }),
                c.on('load', () => {
                    let b = (E) => {
                        if (!E) {
                            e('REMOVE_ITEM', { query: h });
                            return;
                        }
                        c.on('metadata-update', (T) => {
                            e('DID_UPDATE_ITEM_METADATA', { id: h, change: T });
                        }),
                            Se('SHOULD_PREPARE_OUTPUT', !1, {
                                item: c,
                                query: t,
                            }).then((T) => {
                                let _ = t('GET_BEFORE_PREPARE_FILE');
                                _ && (T = _(c, T));
                                let y = () => {
                                    e('COMPLETE_LOAD_ITEM', {
                                        query: h,
                                        item: c,
                                        data: { source: a, success: o },
                                    }),
                                        Ii(e, i);
                                };
                                if (T) {
                                    e(
                                        'REQUEST_PREPARE_OUTPUT',
                                        {
                                            query: h,
                                            item: c,
                                            success: (I) => {
                                                e('DID_PREPARE_OUTPUT', {
                                                    id: h,
                                                    file: I,
                                                }),
                                                    y();
                                            },
                                        },
                                        !0,
                                    );
                                    return;
                                }
                                y();
                            });
                    };
                    Se('DID_LOAD_ITEM', c, { query: t, dispatch: e })
                        .then(() => {
                            Na(t('GET_BEFORE_ADD_FILE'), he(c)).then(b);
                        })
                        .catch((E) => {
                            if (!E || !E.error || !E.status) return b(!1);
                            e('DID_THROW_ITEM_INVALID', {
                                id: h,
                                error: E.error,
                                status: E.status,
                            });
                        });
                }),
                c.on('process-start', () => {
                    e('DID_START_ITEM_PROCESSING', { id: h });
                }),
                c.on('process-progress', (b) => {
                    e('DID_UPDATE_ITEM_PROCESS_PROGRESS', {
                        id: h,
                        progress: b,
                    });
                }),
                c.on('process-error', (b) => {
                    e('DID_THROW_ITEM_PROCESSING_ERROR', {
                        id: h,
                        error: b,
                        status: {
                            main: Ht(i.options.labelFileProcessingError)(b),
                            sub: i.options.labelTapToRetry,
                        },
                    });
                }),
                c.on('process-revert-error', (b) => {
                    e('DID_THROW_ITEM_PROCESSING_REVERT_ERROR', {
                        id: h,
                        error: b,
                        status: {
                            main: Ht(i.options.labelFileProcessingRevertError)(b),
                            sub: i.options.labelTapToRetry,
                        },
                    });
                }),
                c.on('process-complete', (b) => {
                    e('DID_COMPLETE_ITEM_PROCESSING', {
                        id: h,
                        error: null,
                        serverFileReference: b,
                    }),
                        e('DID_DEFINE_VALUE', { id: h, value: b });
                }),
                c.on('process-abort', () => {
                    e('DID_ABORT_ITEM_PROCESSING', { id: h });
                }),
                c.on('process-revert', () => {
                    e('DID_REVERT_ITEM_PROCESSING', { id: h }),
                        e('DID_DEFINE_VALUE', { id: h, value: null });
                }),
                e('DID_ADD_ITEM', { id: h, index: n, interactionMethod: r }),
                Ii(e, i);
            let { url: f, load: p, restore: m, fetch: g } = i.options.server || {};
            c.load(
                a,
                ts(
                    u === ae.INPUT
                        ? de(a) && ds(a) && g
                            ? Ti(f, g)
                            : Ca
                        : u === ae.LIMBO
                          ? Ti(f, m)
                          : Ti(f, p),
                ),
                (b, E, T) => {
                    Se('LOAD_FILE', b, { query: t }).then(E).catch(T);
                },
            );
        },
        REQUEST_PREPARE_OUTPUT: ({ item: a, success: n, failure: r = () => {} }) => {
            let o = { error: K('error', 0, 'Item not found'), file: null };
            if (a.archived) return r(o);
            Se('PREPARE_OUTPUT', a.file, { query: t, item: a }).then((l) => {
                Se('COMPLETE_PREPARE_OUTPUT', l, { query: t, item: a }).then((s) => {
                    if (a.archived) return r(o);
                    n(s);
                });
            });
        },
        COMPLETE_LOAD_ITEM: ({ item: a, data: n }) => {
            let { success: r, source: o } = n,
                l = t('GET_ITEM_INSERT_LOCATION');
            if (
                (He(l) && o && bi(i, l),
                e('DID_LOAD_ITEM', {
                    id: a.id,
                    error: null,
                    serverFileReference: a.origin === ae.INPUT ? null : o,
                }),
                r(he(a)),
                a.origin === ae.LOCAL)
            ) {
                e('DID_LOAD_LOCAL_ITEM', { id: a.id });
                return;
            }
            if (a.origin === ae.LIMBO) {
                e('DID_COMPLETE_ITEM_PROCESSING', {
                    id: a.id,
                    error: null,
                    serverFileReference: o,
                }),
                    e('DID_DEFINE_VALUE', { id: a.id, value: a.serverId || o });
                return;
            }
            t('IS_ASYNC') &&
                i.options.instantUpload &&
                e('REQUEST_ITEM_PROCESSING', { query: a.id });
        },
        RETRY_ITEM_LOAD: Ie(i, (a) => {
            a.retryLoad();
        }),
        REQUEST_ITEM_PREPARE: Ie(i, (a, n, r) => {
            e(
                'REQUEST_PREPARE_OUTPUT',
                {
                    query: a.id,
                    item: a,
                    success: (o) => {
                        e('DID_PREPARE_OUTPUT', { id: a.id, file: o }), n({ file: a, output: o });
                    },
                    failure: r,
                },
                !0,
            );
        }),
        REQUEST_ITEM_PROCESSING: Ie(i, (a, n, r) => {
            if (!(a.status === H.IDLE || a.status === H.PROCESSING_ERROR)) {
                let l = () =>
                        e('REQUEST_ITEM_PROCESSING', {
                            query: a,
                            success: n,
                            failure: r,
                        }),
                    s = () => (document.hidden ? l() : setTimeout(l, 32));
                a.status === H.PROCESSING_COMPLETE || a.status === H.PROCESSING_REVERT_ERROR
                    ? a
                          .revert(
                              yt(i.options.server.url, i.options.server.revert),
                              t('GET_FORCE_REVERT'),
                          )
                          .then(s)
                          .catch(() => {})
                    : a.status === H.PROCESSING && a.abortProcessing().then(s);
                return;
            }
            a.status !== H.PROCESSING_QUEUED &&
                (a.requestProcessing(),
                e('DID_REQUEST_ITEM_PROCESSING', { id: a.id }),
                e('PROCESS_ITEM', { query: a, success: n, failure: r }, !0));
        }),
        PROCESS_ITEM: Ie(i, (a, n, r) => {
            let o = t('GET_MAX_PARALLEL_UPLOADS');
            if (t('GET_ITEMS_BY_STATUS', H.PROCESSING).length === o) {
                i.processingQueue.push({ id: a.id, success: n, failure: r });
                return;
            }
            if (a.status === H.PROCESSING) return;
            let s = () => {
                let c = i.processingQueue.shift();
                if (!c) return;
                let { id: d, success: h, failure: f } = c,
                    p = We(i.items, d);
                if (!p || p.archived) {
                    s();
                    return;
                }
                e('PROCESS_ITEM', { query: d, success: h, failure: f }, !0);
            };
            a.onOnce('process-complete', () => {
                n(he(a)), s();
                let c = i.options.server;
                if (i.options.instantUpload && a.origin === ae.LOCAL && He(c.remove)) {
                    let f = () => {};
                    (a.origin = ae.LIMBO), i.options.server.remove(a.source, f, f);
                }
                t('GET_ITEMS_BY_STATUS', H.PROCESSING_COMPLETE).length === i.items.length &&
                    e('DID_COMPLETE_ITEM_PROCESSING_ALL');
            }),
                a.onOnce('process-error', (c) => {
                    r({ error: c, file: he(a) }), s();
                });
            let u = i.options;
            a.process(
                os(
                    ns(u.server.url, u.server.process, u.name, {
                        chunkTransferId: a.transferId,
                        chunkServer: u.server.patch,
                        chunkUploads: u.chunkUploads,
                        chunkForce: u.chunkForce,
                        chunkSize: u.chunkSize,
                        chunkRetryDelays: u.chunkRetryDelays,
                    }),
                    {
                        allowMinimumUploadDuration: t('GET_ALLOW_MINIMUM_UPLOAD_DURATION'),
                    },
                ),
                (c, d, h) => {
                    Se('PREPARE_OUTPUT', c, { query: t, item: a })
                        .then((f) => {
                            e('DID_PREPARE_OUTPUT', { id: a.id, file: f }), d(f);
                        })
                        .catch(h);
                },
            );
        }),
        RETRY_ITEM_PROCESSING: Ie(i, (a) => {
            e('REQUEST_ITEM_PROCESSING', { query: a });
        }),
        REQUEST_REMOVE_ITEM: Ie(i, (a) => {
            Na(t('GET_BEFORE_REMOVE_FILE'), he(a)).then((n) => {
                n && e('REMOVE_ITEM', { query: a });
            });
        }),
        RELEASE_ITEM: Ie(i, (a) => {
            a.release();
        }),
        REMOVE_ITEM: Ie(i, (a, n, r, o) => {
            let l = () => {
                    let u = a.id;
                    Fa(i.items, u).archive(),
                        e('DID_REMOVE_ITEM', { error: null, id: u, item: a }),
                        Ii(e, i),
                        n(he(a));
                },
                s = i.options.server;
            a.origin === ae.LOCAL && s && He(s.remove) && o.remove !== !1
                ? (e('DID_START_ITEM_REMOVE', { id: a.id }),
                  s.remove(
                      a.source,
                      () => l(),
                      (u) => {
                          e('DID_THROW_ITEM_REMOVE_ERROR', {
                              id: a.id,
                              error: K('error', 0, u, null),
                              status: {
                                  main: Ht(i.options.labelFileRemoveError)(u),
                                  sub: i.options.labelTapToRetry,
                              },
                          });
                      },
                  ))
                : (((o.revert && a.origin !== ae.LOCAL && a.serverId !== null) ||
                      (i.options.chunkUploads && a.file.size > i.options.chunkSize) ||
                      (i.options.chunkUploads && i.options.chunkForce)) &&
                      a.revert(
                          yt(i.options.server.url, i.options.server.revert),
                          t('GET_FORCE_REVERT'),
                      ),
                  l());
        }),
        ABORT_ITEM_LOAD: Ie(i, (a) => {
            a.abortLoad();
        }),
        ABORT_ITEM_PROCESSING: Ie(i, (a) => {
            if (a.serverId) {
                e('REVERT_ITEM_PROCESSING', { id: a.id });
                return;
            }
            a.abortProcessing().then(() => {
                i.options.instantUpload && e('REMOVE_ITEM', { query: a.id });
            });
        }),
        REQUEST_REVERT_ITEM_PROCESSING: Ie(i, (a) => {
            if (!i.options.instantUpload) {
                e('REVERT_ITEM_PROCESSING', { query: a });
                return;
            }
            let n = (l) => {
                    l && e('REVERT_ITEM_PROCESSING', { query: a });
                },
                r = t('GET_BEFORE_REMOVE_FILE');
            if (!r) return n(!0);
            let o = r(he(a));
            if (o == null) return n(!0);
            if (typeof o == 'boolean') return n(o);
            typeof o.then == 'function' && o.then(n);
        }),
        REVERT_ITEM_PROCESSING: Ie(i, (a) => {
            a.revert(yt(i.options.server.url, i.options.server.revert), t('GET_FORCE_REVERT'))
                .then(() => {
                    (i.options.instantUpload || us(a)) && e('REMOVE_ITEM', { query: a.id });
                })
                .catch(() => {});
        }),
        SET_OPTIONS: ({ options: a }) => {
            let n = Object.keys(a),
                r = fs.filter((l) => n.includes(l));
            [...r, ...Object.keys(a).filter((l) => !r.includes(l))].forEach((l) => {
                e(`SET_${ti(l, '_').toUpperCase()}`, { value: a[l] });
            });
        },
    }),
    fs = ['server'],
    ki = (e) => e,
    Fe = (e) => document.createElement(e),
    J = (e, t) => {
        let i = e.childNodes[0];
        i
            ? t !== i.nodeValue && (i.nodeValue = t)
            : ((i = document.createTextNode(t)), e.appendChild(i));
    },
    Ba = (e, t, i, a) => {
        let n = (((a % 360) - 90) * Math.PI) / 180;
        return { x: e + i * Math.cos(n), y: t + i * Math.sin(n) };
    },
    ps = (e, t, i, a, n, r) => {
        let o = Ba(e, t, i, n),
            l = Ba(e, t, i, a);
        return ['M', o.x, o.y, 'A', i, i, 0, r, 0, l.x, l.y].join(' ');
    },
    ms = (e, t, i, a, n) => {
        let r = 1;
        return (
            n > a && n - a <= 0.5 && (r = 0),
            a > n && a - n >= 0.5 && (r = 0),
            ps(e, t, i, Math.min(0.9999, a) * 360, Math.min(0.9999, n) * 360, r)
        );
    },
    gs = ({ root: e, props: t }) => {
        (t.spin = !1), (t.progress = 0), (t.opacity = 0);
        let i = jt('svg');
        (e.ref.path = jt('path', {
            'stroke-width': 2,
            'stroke-linecap': 'round',
        })),
            i.appendChild(e.ref.path),
            (e.ref.svg = i),
            e.appendChild(i);
    },
    Es = ({ root: e, props: t }) => {
        if (t.opacity === 0) return;
        t.align && (e.element.dataset.align = t.align);
        let i = parseInt(ee(e.ref.path, 'stroke-width'), 10),
            a = e.rect.element.width * 0.5,
            n = 0,
            r = 0;
        t.spin ? ((n = 0), (r = 0.5)) : ((n = 0), (r = t.progress));
        let o = ms(a, a, a - i, n, r);
        ee(e.ref.path, 'd', o), ee(e.ref.path, 'stroke-opacity', t.spin || t.progress > 0 ? 1 : 0);
    },
    Ga = te({
        tag: 'div',
        name: 'progress-indicator',
        ignoreRectUpdate: !0,
        ignoreRect: !0,
        create: gs,
        write: Es,
        mixins: {
            apis: ['progress', 'spin', 'align'],
            styles: ['opacity'],
            animations: {
                opacity: { type: 'tween', duration: 500 },
                progress: {
                    type: 'spring',
                    stiffness: 0.95,
                    damping: 0.65,
                    mass: 10,
                },
            },
        },
    }),
    Ts = ({ root: e, props: t }) => {
        (e.element.innerHTML = (t.icon || '') + `<span>${t.label}</span>`), (t.isDisabled = !1);
    },
    Is = ({ root: e, props: t }) => {
        let { isDisabled: i } = t,
            a = e.query('GET_DISABLED') || t.opacity === 0;
        a && !i
            ? ((t.isDisabled = !0), ee(e.element, 'disabled', 'disabled'))
            : !a && i && ((t.isDisabled = !1), e.element.removeAttribute('disabled'));
    },
    wn = te({
        tag: 'button',
        attributes: { type: 'button' },
        ignoreRect: !0,
        ignoreRectUpdate: !0,
        name: 'file-action-button',
        mixins: {
            apis: ['label'],
            styles: ['translateX', 'translateY', 'scaleX', 'scaleY', 'opacity'],
            animations: {
                scaleX: 'spring',
                scaleY: 'spring',
                translateX: 'spring',
                translateY: 'spring',
                opacity: { type: 'tween', duration: 250 },
            },
            listeners: !0,
        },
        create: Ts,
        write: Is,
    }),
    vn = (e, t = '.', i = 1e3, a = {}) => {
        let {
            labelBytes: n = 'bytes',
            labelKilobytes: r = 'KB',
            labelMegabytes: o = 'MB',
            labelGigabytes: l = 'GB',
        } = a;
        e = Math.round(Math.abs(e));
        let s = i,
            u = i * i,
            c = i * i * i;
        return e < s
            ? `${e} ${n}`
            : e < u
              ? `${Math.floor(e / s)} ${r}`
              : e < c
                ? `${Va(e / u, 1, t)} ${o}`
                : `${Va(e / c, 2, t)} ${l}`;
    },
    Va = (e, t, i) =>
        e
            .toFixed(t)
            .split('.')
            .filter((a) => a !== '0')
            .join(i),
    bs = ({ root: e, props: t }) => {
        let i = Fe('span');
        (i.className = 'filepond--file-info-main'),
            ee(i, 'aria-hidden', 'true'),
            e.appendChild(i),
            (e.ref.fileName = i);
        let a = Fe('span');
        (a.className = 'filepond--file-info-sub'),
            e.appendChild(a),
            (e.ref.fileSize = a),
            J(a, e.query('GET_LABEL_FILE_WAITING_FOR_SIZE')),
            J(i, ki(e.query('GET_ITEM_NAME', t.id)));
    },
    vi = ({ root: e, props: t }) => {
        J(
            e.ref.fileSize,
            vn(
                e.query('GET_ITEM_SIZE', t.id),
                '.',
                e.query('GET_FILE_SIZE_BASE'),
                e.query('GET_FILE_SIZE_LABELS', e.query),
            ),
        ),
            J(e.ref.fileName, ki(e.query('GET_ITEM_NAME', t.id)));
    },
    Ua = ({ root: e, props: t }) => {
        if (dt(e.query('GET_ITEM_SIZE', t.id))) {
            vi({ root: e, props: t });
            return;
        }
        J(e.ref.fileSize, e.query('GET_LABEL_FILE_SIZE_NOT_AVAILABLE'));
    },
    _s = te({
        name: 'file-info',
        ignoreRect: !0,
        ignoreRectUpdate: !0,
        write: ue({
            DID_LOAD_ITEM: vi,
            DID_UPDATE_ITEM_META: vi,
            DID_THROW_ITEM_LOAD_ERROR: Ua,
            DID_THROW_ITEM_INVALID: Ua,
        }),
        didCreateView: (e) => {
            Xe('CREATE_VIEW', { ...e, view: e });
        },
        create: bs,
        mixins: {
            styles: ['translateX', 'translateY'],
            animations: { translateX: 'spring', translateY: 'spring' },
        },
    }),
    An = (e) => Math.round(e * 100),
    Rs = ({ root: e }) => {
        let t = Fe('span');
        (t.className = 'filepond--file-status-main'), e.appendChild(t), (e.ref.main = t);
        let i = Fe('span');
        (i.className = 'filepond--file-status-sub'),
            e.appendChild(i),
            (e.ref.sub = i),
            Ln({ root: e, action: { progress: null } });
    },
    Ln = ({ root: e, action: t }) => {
        let i =
            t.progress === null
                ? e.query('GET_LABEL_FILE_LOADING')
                : `${e.query('GET_LABEL_FILE_LOADING')} ${An(t.progress)}%`;
        J(e.ref.main, i), J(e.ref.sub, e.query('GET_LABEL_TAP_TO_CANCEL'));
    },
    ys = ({ root: e, action: t }) => {
        let i =
            t.progress === null
                ? e.query('GET_LABEL_FILE_PROCESSING')
                : `${e.query('GET_LABEL_FILE_PROCESSING')} ${An(t.progress)}%`;
        J(e.ref.main, i), J(e.ref.sub, e.query('GET_LABEL_TAP_TO_CANCEL'));
    },
    Ss = ({ root: e }) => {
        J(e.ref.main, e.query('GET_LABEL_FILE_PROCESSING')),
            J(e.ref.sub, e.query('GET_LABEL_TAP_TO_CANCEL'));
    },
    ws = ({ root: e }) => {
        J(e.ref.main, e.query('GET_LABEL_FILE_PROCESSING_ABORTED')),
            J(e.ref.sub, e.query('GET_LABEL_TAP_TO_RETRY'));
    },
    vs = ({ root: e }) => {
        J(e.ref.main, e.query('GET_LABEL_FILE_PROCESSING_COMPLETE')),
            J(e.ref.sub, e.query('GET_LABEL_TAP_TO_UNDO'));
    },
    ka = ({ root: e }) => {
        J(e.ref.main, ''), J(e.ref.sub, '');
    },
    St = ({ root: e, action: t }) => {
        J(e.ref.main, t.status.main), J(e.ref.sub, t.status.sub);
    },
    As = te({
        name: 'file-status',
        ignoreRect: !0,
        ignoreRectUpdate: !0,
        write: ue({
            DID_LOAD_ITEM: ka,
            DID_REVERT_ITEM_PROCESSING: ka,
            DID_REQUEST_ITEM_PROCESSING: Ss,
            DID_ABORT_ITEM_PROCESSING: ws,
            DID_COMPLETE_ITEM_PROCESSING: vs,
            DID_UPDATE_ITEM_PROCESS_PROGRESS: ys,
            DID_UPDATE_ITEM_LOAD_PROGRESS: Ln,
            DID_THROW_ITEM_LOAD_ERROR: St,
            DID_THROW_ITEM_INVALID: St,
            DID_THROW_ITEM_PROCESSING_ERROR: St,
            DID_THROW_ITEM_PROCESSING_REVERT_ERROR: St,
            DID_THROW_ITEM_REMOVE_ERROR: St,
        }),
        didCreateView: (e) => {
            Xe('CREATE_VIEW', { ...e, view: e });
        },
        create: Rs,
        mixins: {
            styles: ['translateX', 'translateY', 'opacity'],
            animations: {
                opacity: { type: 'tween', duration: 250 },
                translateX: 'spring',
                translateY: 'spring',
            },
        },
    }),
    Ai = {
        AbortItemLoad: {
            label: 'GET_LABEL_BUTTON_ABORT_ITEM_LOAD',
            action: 'ABORT_ITEM_LOAD',
            className: 'filepond--action-abort-item-load',
            align: 'LOAD_INDICATOR_POSITION',
        },
        RetryItemLoad: {
            label: 'GET_LABEL_BUTTON_RETRY_ITEM_LOAD',
            action: 'RETRY_ITEM_LOAD',
            icon: 'GET_ICON_RETRY',
            className: 'filepond--action-retry-item-load',
            align: 'BUTTON_PROCESS_ITEM_POSITION',
        },
        RemoveItem: {
            label: 'GET_LABEL_BUTTON_REMOVE_ITEM',
            action: 'REQUEST_REMOVE_ITEM',
            icon: 'GET_ICON_REMOVE',
            className: 'filepond--action-remove-item',
            align: 'BUTTON_REMOVE_ITEM_POSITION',
        },
        ProcessItem: {
            label: 'GET_LABEL_BUTTON_PROCESS_ITEM',
            action: 'REQUEST_ITEM_PROCESSING',
            icon: 'GET_ICON_PROCESS',
            className: 'filepond--action-process-item',
            align: 'BUTTON_PROCESS_ITEM_POSITION',
        },
        AbortItemProcessing: {
            label: 'GET_LABEL_BUTTON_ABORT_ITEM_PROCESSING',
            action: 'ABORT_ITEM_PROCESSING',
            className: 'filepond--action-abort-item-processing',
            align: 'BUTTON_PROCESS_ITEM_POSITION',
        },
        RetryItemProcessing: {
            label: 'GET_LABEL_BUTTON_RETRY_ITEM_PROCESSING',
            action: 'RETRY_ITEM_PROCESSING',
            icon: 'GET_ICON_RETRY',
            className: 'filepond--action-retry-item-processing',
            align: 'BUTTON_PROCESS_ITEM_POSITION',
        },
        RevertItemProcessing: {
            label: 'GET_LABEL_BUTTON_UNDO_ITEM_PROCESSING',
            action: 'REQUEST_REVERT_ITEM_PROCESSING',
            icon: 'GET_ICON_UNDO',
            className: 'filepond--action-revert-item-processing',
            align: 'BUTTON_PROCESS_ITEM_POSITION',
        },
    },
    Li = [];
Z(Ai, (e) => {
    Li.push(e);
});
var ge = (e) => {
        if (Mi(e) === 'right') return 0;
        let t = e.ref.buttonRemoveItem.rect.element;
        return t.hidden ? null : t.width + t.left;
    },
    Ls = (e) => e.ref.buttonAbortItemLoad.rect.element.width,
    Wt = (e) => Math.floor(e.ref.buttonRemoveItem.rect.element.height / 4),
    Ms = (e) => Math.floor(e.ref.buttonRemoveItem.rect.element.left / 2),
    Os = (e) => e.query('GET_STYLE_LOAD_INDICATOR_POSITION'),
    xs = (e) => e.query('GET_STYLE_PROGRESS_INDICATOR_POSITION'),
    Mi = (e) => e.query('GET_STYLE_BUTTON_REMOVE_ITEM_POSITION'),
    Ds = {
        buttonAbortItemLoad: { opacity: 0 },
        buttonRetryItemLoad: { opacity: 0 },
        buttonRemoveItem: { opacity: 0 },
        buttonProcessItem: { opacity: 0 },
        buttonAbortItemProcessing: { opacity: 0 },
        buttonRetryItemProcessing: { opacity: 0 },
        buttonRevertItemProcessing: { opacity: 0 },
        loadProgressIndicator: { opacity: 0, align: Os },
        processProgressIndicator: { opacity: 0, align: xs },
        processingCompleteIndicator: { opacity: 0, scaleX: 0.75, scaleY: 0.75 },
        info: { translateX: 0, translateY: 0, opacity: 0 },
        status: { translateX: 0, translateY: 0, opacity: 0 },
    },
    Ha = {
        buttonRemoveItem: { opacity: 1 },
        buttonProcessItem: { opacity: 1 },
        info: { translateX: ge },
        status: { translateX: ge },
    },
    _i = {
        buttonAbortItemProcessing: { opacity: 1 },
        processProgressIndicator: { opacity: 1 },
        status: { opacity: 1 },
    },
    nt = {
        DID_THROW_ITEM_INVALID: {
            buttonRemoveItem: { opacity: 1 },
            info: { translateX: ge },
            status: { translateX: ge, opacity: 1 },
        },
        DID_START_ITEM_LOAD: {
            buttonAbortItemLoad: { opacity: 1 },
            loadProgressIndicator: { opacity: 1 },
            status: { opacity: 1 },
        },
        DID_THROW_ITEM_LOAD_ERROR: {
            buttonRetryItemLoad: { opacity: 1 },
            buttonRemoveItem: { opacity: 1 },
            info: { translateX: ge },
            status: { opacity: 1 },
        },
        DID_START_ITEM_REMOVE: {
            processProgressIndicator: { opacity: 1, align: Mi },
            info: { translateX: ge },
            status: { opacity: 0 },
        },
        DID_THROW_ITEM_REMOVE_ERROR: {
            processProgressIndicator: { opacity: 0, align: Mi },
            buttonRemoveItem: { opacity: 1 },
            info: { translateX: ge },
            status: { opacity: 1, translateX: ge },
        },
        DID_LOAD_ITEM: Ha,
        DID_LOAD_LOCAL_ITEM: {
            buttonRemoveItem: { opacity: 1 },
            info: { translateX: ge },
            status: { translateX: ge },
        },
        DID_START_ITEM_PROCESSING: _i,
        DID_REQUEST_ITEM_PROCESSING: _i,
        DID_UPDATE_ITEM_PROCESS_PROGRESS: _i,
        DID_COMPLETE_ITEM_PROCESSING: {
            buttonRevertItemProcessing: { opacity: 1 },
            info: { opacity: 1 },
            status: { opacity: 1 },
        },
        DID_THROW_ITEM_PROCESSING_ERROR: {
            buttonRemoveItem: { opacity: 1 },
            buttonRetryItemProcessing: { opacity: 1 },
            status: { opacity: 1 },
            info: { translateX: ge },
        },
        DID_THROW_ITEM_PROCESSING_REVERT_ERROR: {
            buttonRevertItemProcessing: { opacity: 1 },
            status: { opacity: 1 },
            info: { opacity: 1 },
        },
        DID_ABORT_ITEM_PROCESSING: {
            buttonRemoveItem: { opacity: 1 },
            buttonProcessItem: { opacity: 1 },
            info: { translateX: ge },
            status: { opacity: 1 },
        },
        DID_REVERT_ITEM_PROCESSING: Ha,
    },
    Ps = te({
        create: ({ root: e }) => {
            e.element.innerHTML = e.query('GET_ICON_DONE');
        },
        name: 'processing-complete-indicator',
        ignoreRect: !0,
        mixins: {
            styles: ['scaleX', 'scaleY', 'opacity'],
            animations: {
                scaleX: 'spring',
                scaleY: 'spring',
                opacity: { type: 'tween', duration: 250 },
            },
        },
    }),
    Fs = ({ root: e, props: t }) => {
        let i = Object.keys(Ai).reduce((p, m) => ((p[m] = { ...Ai[m] }), p), {}),
            { id: a } = t,
            n = e.query('GET_ALLOW_REVERT'),
            r = e.query('GET_ALLOW_REMOVE'),
            o = e.query('GET_ALLOW_PROCESS'),
            l = e.query('GET_INSTANT_UPLOAD'),
            s = e.query('IS_ASYNC'),
            u = e.query('GET_STYLE_BUTTON_REMOVE_ITEM_ALIGN'),
            c;
        s
            ? o && !n
                ? (c = (p) => !/RevertItemProcessing/.test(p))
                : !o && n
                  ? (c = (p) => !/ProcessItem|RetryItemProcessing|AbortItemProcessing/.test(p))
                  : !o && !n && (c = (p) => !/Process/.test(p))
            : (c = (p) => !/Process/.test(p));
        let d = c ? Li.filter(c) : Li.concat();
        if (
            (l &&
                n &&
                ((i.RevertItemProcessing.label = 'GET_LABEL_BUTTON_REMOVE_ITEM'),
                (i.RevertItemProcessing.icon = 'GET_ICON_REMOVE')),
            s && !n)
        ) {
            let p = nt.DID_COMPLETE_ITEM_PROCESSING;
            (p.info.translateX = Ms),
                (p.info.translateY = Wt),
                (p.status.translateY = Wt),
                (p.processingCompleteIndicator = {
                    opacity: 1,
                    scaleX: 1,
                    scaleY: 1,
                });
        }
        if (
            (s &&
                !o &&
                ([
                    'DID_START_ITEM_PROCESSING',
                    'DID_REQUEST_ITEM_PROCESSING',
                    'DID_UPDATE_ITEM_PROCESS_PROGRESS',
                    'DID_THROW_ITEM_PROCESSING_ERROR',
                ].forEach((p) => {
                    nt[p].status.translateY = Wt;
                }),
                (nt.DID_THROW_ITEM_PROCESSING_ERROR.status.translateX = Ls)),
            u && n)
        ) {
            i.RevertItemProcessing.align = 'BUTTON_REMOVE_ITEM_POSITION';
            let p = nt.DID_COMPLETE_ITEM_PROCESSING;
            (p.info.translateX = ge),
                (p.status.translateY = Wt),
                (p.processingCompleteIndicator = {
                    opacity: 1,
                    scaleX: 1,
                    scaleY: 1,
                });
        }
        r || (i.RemoveItem.disabled = !0),
            Z(i, (p, m) => {
                let g = e.createChildView(wn, {
                    label: e.query(m.label),
                    icon: e.query(m.icon),
                    opacity: 0,
                });
                d.includes(p) && e.appendChildView(g),
                    m.disabled &&
                        (g.element.setAttribute('disabled', 'disabled'),
                        g.element.setAttribute('hidden', 'hidden')),
                    (g.element.dataset.align = e.query(`GET_STYLE_${m.align}`)),
                    g.element.classList.add(m.className),
                    g.on('click', (b) => {
                        b.stopPropagation(), !m.disabled && e.dispatch(m.action, { query: a });
                    }),
                    (e.ref[`button${p}`] = g);
            }),
            (e.ref.processingCompleteIndicator = e.appendChildView(e.createChildView(Ps))),
            (e.ref.processingCompleteIndicator.element.dataset.align = e.query(
                'GET_STYLE_BUTTON_PROCESS_ITEM_POSITION',
            )),
            (e.ref.info = e.appendChildView(e.createChildView(_s, { id: a }))),
            (e.ref.status = e.appendChildView(e.createChildView(As, { id: a })));
        let h = e.appendChildView(
            e.createChildView(Ga, {
                opacity: 0,
                align: e.query('GET_STYLE_LOAD_INDICATOR_POSITION'),
            }),
        );
        h.element.classList.add('filepond--load-indicator'), (e.ref.loadProgressIndicator = h);
        let f = e.appendChildView(
            e.createChildView(Ga, {
                opacity: 0,
                align: e.query('GET_STYLE_PROGRESS_INDICATOR_POSITION'),
            }),
        );
        f.element.classList.add('filepond--process-indicator'),
            (e.ref.processProgressIndicator = f),
            (e.ref.activeStyles = []);
    },
    Cs = ({ root: e, actions: t, props: i }) => {
        zs({ root: e, actions: t, props: i });
        let a = t
            .concat()
            .filter((n) => /^DID_/.test(n.type))
            .reverse()
            .find((n) => nt[n.type]);
        if (a) {
            e.ref.activeStyles = [];
            let n = nt[a.type];
            Z(Ds, (r, o) => {
                let l = e.ref[r];
                Z(o, (s, u) => {
                    let c = n[r] && typeof n[r][s] < 'u' ? n[r][s] : u;
                    e.ref.activeStyles.push({ control: l, key: s, value: c });
                });
            });
        }
        e.ref.activeStyles.forEach(({ control: n, key: r, value: o }) => {
            n[r] = typeof o == 'function' ? o(e) : o;
        });
    },
    zs = ue({
        DID_SET_LABEL_BUTTON_ABORT_ITEM_PROCESSING: ({ root: e, action: t }) => {
            e.ref.buttonAbortItemProcessing.label = t.value;
        },
        DID_SET_LABEL_BUTTON_ABORT_ITEM_LOAD: ({ root: e, action: t }) => {
            e.ref.buttonAbortItemLoad.label = t.value;
        },
        DID_SET_LABEL_BUTTON_ABORT_ITEM_REMOVAL: ({ root: e, action: t }) => {
            e.ref.buttonAbortItemRemoval.label = t.value;
        },
        DID_REQUEST_ITEM_PROCESSING: ({ root: e }) => {
            (e.ref.processProgressIndicator.spin = !0),
                (e.ref.processProgressIndicator.progress = 0);
        },
        DID_START_ITEM_LOAD: ({ root: e }) => {
            (e.ref.loadProgressIndicator.spin = !0), (e.ref.loadProgressIndicator.progress = 0);
        },
        DID_START_ITEM_REMOVE: ({ root: e }) => {
            (e.ref.processProgressIndicator.spin = !0),
                (e.ref.processProgressIndicator.progress = 0);
        },
        DID_UPDATE_ITEM_LOAD_PROGRESS: ({ root: e, action: t }) => {
            (e.ref.loadProgressIndicator.spin = !1),
                (e.ref.loadProgressIndicator.progress = t.progress);
        },
        DID_UPDATE_ITEM_PROCESS_PROGRESS: ({ root: e, action: t }) => {
            (e.ref.processProgressIndicator.spin = !1),
                (e.ref.processProgressIndicator.progress = t.progress);
        },
    }),
    Ns = te({
        create: Fs,
        write: Cs,
        didCreateView: (e) => {
            Xe('CREATE_VIEW', { ...e, view: e });
        },
        name: 'file',
    }),
    Bs = ({ root: e, props: t }) => {
        (e.ref.fileName = Fe('legend')),
            e.appendChild(e.ref.fileName),
            (e.ref.file = e.appendChildView(e.createChildView(Ns, { id: t.id }))),
            (e.ref.data = !1);
    },
    Gs = ({ root: e, props: t }) => {
        J(e.ref.fileName, ki(e.query('GET_ITEM_NAME', t.id)));
    },
    Vs = te({
        create: Bs,
        ignoreRect: !0,
        write: ue({ DID_LOAD_ITEM: Gs }),
        didCreateView: (e) => {
            Xe('CREATE_VIEW', { ...e, view: e });
        },
        tag: 'fieldset',
        name: 'file-wrapper',
    }),
    Wa = { type: 'spring', damping: 0.6, mass: 7 },
    Us = ({ root: e, props: t }) => {
        [
            { name: 'top' },
            {
                name: 'center',
                props: { translateY: null, scaleY: null },
                mixins: {
                    animations: { scaleY: Wa },
                    styles: ['translateY', 'scaleY'],
                },
            },
            {
                name: 'bottom',
                props: { translateY: null },
                mixins: {
                    animations: { translateY: Wa },
                    styles: ['translateY'],
                },
            },
        ].forEach((i) => {
            ks(e, i, t.name);
        }),
            e.element.classList.add(`filepond--${t.name}`),
            (e.ref.scalable = null);
    },
    ks = (e, t, i) => {
        let a = te({
                name: `panel-${t.name} filepond--${i}`,
                mixins: t.mixins,
                ignoreRectUpdate: !0,
            }),
            n = e.createChildView(a, t.props);
        e.ref[t.name] = e.appendChildView(n);
    },
    Hs = ({ root: e, props: t }) => {
        if (
            ((e.ref.scalable === null || t.scalable !== e.ref.scalable) &&
                ((e.ref.scalable = cn(t.scalable) ? t.scalable : !0),
                (e.element.dataset.scalable = e.ref.scalable)),
            !t.height)
        )
            return;
        let i = e.ref.top.rect.element,
            a = e.ref.bottom.rect.element,
            n = Math.max(i.height + a.height, t.height);
        (e.ref.center.translateY = i.height),
            (e.ref.center.scaleY = (n - i.height - a.height) / 100),
            (e.ref.bottom.translateY = n - a.height);
    },
    Mn = te({
        name: 'panel',
        read: ({ root: e, props: t }) => (t.heightCurrent = e.ref.bottom.translateY),
        write: Hs,
        create: Us,
        ignoreRect: !0,
        mixins: { apis: ['height', 'heightCurrent', 'scalable'] },
    }),
    Ws = (e) => {
        let t = e.map((a) => a.id),
            i;
        return {
            setIndex: (a) => {
                i = a;
            },
            getIndex: () => i,
            getItemIndex: (a) => t.indexOf(a.id),
        };
    },
    Ya = { type: 'spring', stiffness: 0.75, damping: 0.45, mass: 10 },
    $a = 'spring',
    qa = {
        DID_START_ITEM_LOAD: 'busy',
        DID_UPDATE_ITEM_LOAD_PROGRESS: 'loading',
        DID_THROW_ITEM_INVALID: 'load-invalid',
        DID_THROW_ITEM_LOAD_ERROR: 'load-error',
        DID_LOAD_ITEM: 'idle',
        DID_THROW_ITEM_REMOVE_ERROR: 'remove-error',
        DID_START_ITEM_REMOVE: 'busy',
        DID_START_ITEM_PROCESSING: 'busy processing',
        DID_REQUEST_ITEM_PROCESSING: 'busy processing',
        DID_UPDATE_ITEM_PROCESS_PROGRESS: 'processing',
        DID_COMPLETE_ITEM_PROCESSING: 'processing-complete',
        DID_THROW_ITEM_PROCESSING_ERROR: 'processing-error',
        DID_THROW_ITEM_PROCESSING_REVERT_ERROR: 'processing-revert-error',
        DID_ABORT_ITEM_PROCESSING: 'cancelled',
        DID_REVERT_ITEM_PROCESSING: 'idle',
    },
    Ys = ({ root: e, props: t }) => {
        if (
            ((e.ref.handleClick = (a) => e.dispatch('DID_ACTIVATE_ITEM', { id: t.id })),
            (e.element.id = `filepond--item-${t.id}`),
            e.element.addEventListener('click', e.ref.handleClick),
            (e.ref.container = e.appendChildView(e.createChildView(Vs, { id: t.id }))),
            (e.ref.panel = e.appendChildView(e.createChildView(Mn, { name: 'item-panel' }))),
            (e.ref.panel.height = null),
            (t.markedForRemoval = !1),
            !e.query('GET_ALLOW_REORDER'))
        )
            return;
        e.element.dataset.dragState = 'idle';
        let i = (a) => {
            if (!a.isPrimary) return;
            let n = !1,
                r = { x: a.pageX, y: a.pageY };
            (t.dragOrigin = { x: e.translateX, y: e.translateY }),
                (t.dragCenter = { x: a.offsetX, y: a.offsetY });
            let o = Ws(e.query('GET_ACTIVE_ITEMS'));
            e.dispatch('DID_GRAB_ITEM', { id: t.id, dragState: o });
            let l = (u) => {
                    if (!u.isPrimary) return;
                    u.stopPropagation(),
                        u.preventDefault(),
                        (t.dragOffset = { x: u.pageX - r.x, y: u.pageY - r.y }),
                        t.dragOffset.x * t.dragOffset.x + t.dragOffset.y * t.dragOffset.y > 16 &&
                            !n &&
                            ((n = !0), e.element.removeEventListener('click', e.ref.handleClick)),
                        e.dispatch('DID_DRAG_ITEM', { id: t.id, dragState: o });
                },
                s = (u) => {
                    u.isPrimary &&
                        (document.removeEventListener('pointermove', l),
                        document.removeEventListener('pointerup', s),
                        (t.dragOffset = { x: u.pageX - r.x, y: u.pageY - r.y }),
                        e.dispatch('DID_DROP_ITEM', { id: t.id, dragState: o }),
                        n &&
                            setTimeout(
                                () => e.element.addEventListener('click', e.ref.handleClick),
                                0,
                            ));
                };
            document.addEventListener('pointermove', l), document.addEventListener('pointerup', s);
        };
        e.element.addEventListener('pointerdown', i);
    },
    $s = ue({
        DID_UPDATE_PANEL_HEIGHT: ({ root: e, action: t }) => {
            e.height = t.height;
        },
    }),
    qs = ue(
        {
            DID_GRAB_ITEM: ({ root: e, props: t }) => {
                t.dragOrigin = { x: e.translateX, y: e.translateY };
            },
            DID_DRAG_ITEM: ({ root: e }) => {
                e.element.dataset.dragState = 'drag';
            },
            DID_DROP_ITEM: ({ root: e, props: t }) => {
                (t.dragOffset = null),
                    (t.dragOrigin = null),
                    (e.element.dataset.dragState = 'drop');
            },
        },
        ({ root: e, actions: t, props: i, shouldOptimize: a }) => {
            e.element.dataset.dragState === 'drop' &&
                e.scaleX <= 1 &&
                (e.element.dataset.dragState = 'idle');
            let n = t
                .concat()
                .filter((o) => /^DID_/.test(o.type))
                .reverse()
                .find((o) => qa[o.type]);
            n &&
                n.type !== i.currentState &&
                ((i.currentState = n.type),
                (e.element.dataset.filepondItemState = qa[i.currentState] || ''));
            let r = e.query('GET_ITEM_PANEL_ASPECT_RATIO') || e.query('GET_PANEL_ASPECT_RATIO');
            r
                ? a || (e.height = e.rect.element.width * r)
                : ($s({ root: e, actions: t, props: i }),
                  !e.height &&
                      e.ref.container.rect.element.height > 0 &&
                      (e.height = e.ref.container.rect.element.height)),
                a && (e.ref.panel.height = null),
                (e.ref.panel.height = e.height);
        },
    ),
    Xs = te({
        create: Ys,
        write: qs,
        destroy: ({ root: e, props: t }) => {
            e.element.removeEventListener('click', e.ref.handleClick),
                e.dispatch('RELEASE_ITEM', { query: t.id });
        },
        tag: 'li',
        name: 'item',
        mixins: {
            apis: [
                'id',
                'interactionMethod',
                'markedForRemoval',
                'spawnDate',
                'dragCenter',
                'dragOrigin',
                'dragOffset',
            ],
            styles: ['translateX', 'translateY', 'scaleX', 'scaleY', 'opacity', 'height'],
            animations: {
                scaleX: $a,
                scaleY: $a,
                translateX: Ya,
                translateY: Ya,
                opacity: { type: 'tween', duration: 150 },
            },
        },
    }),
    Hi = (e, t) => Math.max(1, Math.floor((e + 1) / t)),
    Wi = (e, t, i) => {
        if (!i) return;
        let a = e.rect.element.width,
            n = t.length,
            r = null;
        if (n === 0 || i.top < t[0].rect.element.top) return -1;
        let l = t[0].rect.element,
            s = l.marginLeft + l.marginRight,
            u = l.width + s,
            c = Hi(a, u);
        if (c === 1) {
            for (let f = 0; f < n; f++) {
                let p = t[f],
                    m = p.rect.outer.top + p.rect.element.height * 0.5;
                if (i.top < m) return f;
            }
            return n;
        }
        let d = l.marginTop + l.marginBottom,
            h = l.height + d;
        for (let f = 0; f < n; f++) {
            let p = f % c,
                m = Math.floor(f / c),
                g = p * u,
                b = m * h,
                E = b - l.marginTop,
                T = g + u,
                _ = b + h + l.marginBottom;
            if (i.top < _ && i.top > E) {
                if (i.left < T) return f;
                f !== n - 1 ? (r = f) : (r = null);
            }
        }
        return r !== null ? r : n;
    },
    Yt = {
        height: 0,
        width: 0,
        get getHeight() {
            return this.height;
        },
        set setHeight(e) {
            (this.height === 0 || e === 0) && (this.height = e);
        },
        get getWidth() {
            return this.width;
        },
        set setWidth(e) {
            (this.width === 0 || e === 0) && (this.width = e);
        },
        setDimensions: function (e, t) {
            (this.height === 0 || e === 0) && (this.height = e),
                (this.width === 0 || t === 0) && (this.width = t);
        },
    },
    js = ({ root: e }) => {
        ee(e.element, 'role', 'list'), (e.ref.lastItemSpanwDate = Date.now());
    },
    Qs = ({ root: e, action: t }) => {
        let { id: i, index: a, interactionMethod: n } = t;
        e.ref.addIndex = a;
        let r = Date.now(),
            o = r,
            l = 1;
        if (n !== be.NONE) {
            l = 0;
            let s = e.query('GET_ITEM_INSERT_INTERVAL'),
                u = r - e.ref.lastItemSpanwDate;
            o = u < s ? r + (s - u) : r;
        }
        (e.ref.lastItemSpanwDate = o),
            e.appendChildView(
                e.createChildView(Xs, {
                    spawnDate: o,
                    id: i,
                    opacity: l,
                    interactionMethod: n,
                }),
                a,
            );
    },
    Xa = (e, t, i, a = 0, n = 1) => {
        e.dragOffset
            ? ((e.translateX = null),
              (e.translateY = null),
              (e.translateX = e.dragOrigin.x + e.dragOffset.x),
              (e.translateY = e.dragOrigin.y + e.dragOffset.y),
              (e.scaleX = 1.025),
              (e.scaleY = 1.025))
            : ((e.translateX = t),
              (e.translateY = i),
              Date.now() > e.spawnDate &&
                  (e.opacity === 0 && Zs(e, t, i, a, n),
                  (e.scaleX = 1),
                  (e.scaleY = 1),
                  (e.opacity = 1)));
    },
    Zs = (e, t, i, a, n) => {
        e.interactionMethod === be.NONE
            ? ((e.translateX = null), (e.translateX = t), (e.translateY = null), (e.translateY = i))
            : e.interactionMethod === be.DROP
              ? ((e.translateX = null),
                (e.translateX = t - a * 20),
                (e.translateY = null),
                (e.translateY = i - n * 10),
                (e.scaleX = 0.8),
                (e.scaleY = 0.8))
              : e.interactionMethod === be.BROWSE
                ? ((e.translateY = null), (e.translateY = i - 30))
                : e.interactionMethod === be.API &&
                  ((e.translateX = null), (e.translateX = t - 30), (e.translateY = null));
    },
    Ks = ({ root: e, action: t }) => {
        let { id: i } = t,
            a = e.childViews.find((n) => n.id === i);
        a && ((a.scaleX = 0.9), (a.scaleY = 0.9), (a.opacity = 0), (a.markedForRemoval = !0));
    },
    Ri = (e) =>
        e.rect.element.height + e.rect.element.marginBottom * 0.5 + e.rect.element.marginTop * 0.5,
    Js = (e) =>
        e.rect.element.width + e.rect.element.marginLeft * 0.5 + e.rect.element.marginRight * 0.5,
    ec = ({ root: e, action: t }) => {
        let { id: i, dragState: a } = t,
            n = e.query('GET_ITEM', { id: i }),
            r = e.childViews.find((g) => g.id === i),
            o = e.childViews.length,
            l = a.getItemIndex(n);
        if (!r) return;
        let s = {
                x: r.dragOrigin.x + r.dragOffset.x + r.dragCenter.x,
                y: r.dragOrigin.y + r.dragOffset.y + r.dragCenter.y,
            },
            u = Ri(r),
            c = Js(r),
            d = Math.floor(e.rect.outer.width / c);
        d > o && (d = o);
        let h = Math.floor(o / d + 1);
        (Yt.setHeight = u * h), (Yt.setWidth = c * d);
        var f = {
            y: Math.floor(s.y / u),
            x: Math.floor(s.x / c),
            getGridIndex: function () {
                return s.y > Yt.getHeight || s.y < 0 || s.x > Yt.getWidth || s.x < 0
                    ? l
                    : this.y * d + this.x;
            },
            getColIndex: function () {
                let b = e.query('GET_ACTIVE_ITEMS'),
                    E = e.childViews.filter((x) => x.rect.element.height),
                    T = b.map((x) => E.find((O) => O.id === x.id)),
                    _ = T.findIndex((x) => x === r),
                    y = Ri(r),
                    I = T.length,
                    v = I,
                    R = 0,
                    S = 0,
                    P = 0;
                for (let x = 0; x < I; x++)
                    if (((R = Ri(T[x])), (P = S), (S = P + R), s.y < S)) {
                        if (_ > x) {
                            if (s.y < P + y) {
                                v = x;
                                break;
                            }
                            continue;
                        }
                        v = x;
                        break;
                    }
                return v;
            },
        };
        let p = d > 1 ? f.getGridIndex() : f.getColIndex();
        e.dispatch('MOVE_ITEM', { query: r, index: p });
        let m = a.getIndex();
        if (m === void 0 || m !== p) {
            if ((a.setIndex(p), m === void 0)) return;
            e.dispatch('DID_REORDER_ITEMS', {
                items: e.query('GET_ACTIVE_ITEMS'),
                origin: l,
                target: p,
            });
        }
    },
    tc = ue({ DID_ADD_ITEM: Qs, DID_REMOVE_ITEM: Ks, DID_DRAG_ITEM: ec }),
    ic = ({ root: e, props: t, actions: i, shouldOptimize: a }) => {
        tc({ root: e, props: t, actions: i });
        let { dragCoordinates: n } = t,
            r = e.rect.element.width,
            o = e.childViews.filter((T) => T.rect.element.height),
            l = e
                .query('GET_ACTIVE_ITEMS')
                .map((T) => o.find((_) => _.id === T.id))
                .filter((T) => T),
            s = n ? Wi(e, l, n) : null,
            u = e.ref.addIndex || null;
        e.ref.addIndex = null;
        let c = 0,
            d = 0,
            h = 0;
        if (l.length === 0) return;
        let f = l[0].rect.element,
            p = f.marginTop + f.marginBottom,
            m = f.marginLeft + f.marginRight,
            g = f.width + m,
            b = f.height + p,
            E = Hi(r, g);
        if (E === 1) {
            let T = 0,
                _ = 0;
            l.forEach((y, I) => {
                if (s) {
                    let S = I - s;
                    S === -2
                        ? (_ = -p * 0.25)
                        : S === -1
                          ? (_ = -p * 0.75)
                          : S === 0
                            ? (_ = p * 0.75)
                            : S === 1
                              ? (_ = p * 0.25)
                              : (_ = 0);
                }
                a && ((y.translateX = null), (y.translateY = null)),
                    y.markedForRemoval || Xa(y, 0, T + _);
                let R = (y.rect.element.height + p) * (y.markedForRemoval ? y.opacity : 1);
                T += R;
            });
        } else {
            let T = 0,
                _ = 0;
            l.forEach((y, I) => {
                I === s && (c = 1),
                    I === u && (h += 1),
                    y.markedForRemoval && y.opacity < 0.5 && (d -= 1);
                let v = I + h + c + d,
                    R = v % E,
                    S = Math.floor(v / E),
                    P = R * g,
                    x = S * b,
                    O = Math.sign(P - T),
                    B = Math.sign(x - _);
                (T = P),
                    (_ = x),
                    !y.markedForRemoval &&
                        (a && ((y.translateX = null), (y.translateY = null)), Xa(y, P, x, O, B));
            });
        }
    },
    ac = (e, t) => t.filter((i) => (i.data && i.data.id ? e.id === i.data.id : !0)),
    nc = te({
        create: js,
        write: ic,
        tag: 'ul',
        name: 'list',
        didWriteView: ({ root: e }) => {
            e.childViews
                .filter((t) => t.markedForRemoval && t.opacity === 0 && t.resting)
                .forEach((t) => {
                    t._destroy(), e.removeChildView(t);
                });
        },
        filterFrameActionsForChild: ac,
        mixins: { apis: ['dragCoordinates'] },
    }),
    rc = ({ root: e, props: t }) => {
        (e.ref.list = e.appendChildView(e.createChildView(nc))),
            (t.dragCoordinates = null),
            (t.overflowing = !1);
    },
    oc = ({ root: e, props: t, action: i }) => {
        e.query('GET_ITEM_INSERT_LOCATION_FREEDOM') &&
            (t.dragCoordinates = {
                left: i.position.scopeLeft - e.ref.list.rect.element.left,
                top:
                    i.position.scopeTop -
                    (e.rect.outer.top + e.rect.element.marginTop + e.rect.element.scrollTop),
            });
    },
    lc = ({ props: e }) => {
        e.dragCoordinates = null;
    },
    sc = ue({ DID_DRAG: oc, DID_END_DRAG: lc }),
    cc = ({ root: e, props: t, actions: i }) => {
        if (
            (sc({ root: e, props: t, actions: i }),
            (e.ref.list.dragCoordinates = t.dragCoordinates),
            t.overflowing &&
                !t.overflow &&
                ((t.overflowing = !1), (e.element.dataset.state = ''), (e.height = null)),
            t.overflow)
        ) {
            let a = Math.round(t.overflow);
            a !== e.height &&
                ((t.overflowing = !0), (e.element.dataset.state = 'overflow'), (e.height = a));
        }
    },
    dc = te({
        create: rc,
        write: cc,
        name: 'list-scroller',
        mixins: {
            apis: ['overflow', 'dragCoordinates'],
            styles: ['height', 'translateY'],
            animations: { translateY: 'spring' },
        },
    }),
    ve = (e, t, i, a = '') => {
        i ? ee(e, t, a) : e.removeAttribute(t);
    },
    uc = (e) => {
        if (!(!e || e.value === '')) {
            try {
                e.value = '';
            } catch {}
            if (e.value) {
                let t = Fe('form'),
                    i = e.parentNode,
                    a = e.nextSibling;
                t.appendChild(e), t.reset(), a ? i.insertBefore(e, a) : i.appendChild(e);
            }
        }
    },
    hc = ({ root: e, props: t }) => {
        (e.element.id = `filepond--browser-${t.id}`),
            ee(e.element, 'name', e.query('GET_NAME')),
            ee(e.element, 'aria-controls', `filepond--assistant-${t.id}`),
            ee(e.element, 'aria-labelledby', `filepond--drop-label-${t.id}`),
            On({
                root: e,
                action: { value: e.query('GET_ACCEPTED_FILE_TYPES') },
            }),
            xn({ root: e, action: { value: e.query('GET_ALLOW_MULTIPLE') } }),
            Dn({
                root: e,
                action: { value: e.query('GET_ALLOW_DIRECTORIES_ONLY') },
            }),
            Oi({ root: e }),
            Pn({ root: e, action: { value: e.query('GET_REQUIRED') } }),
            Fn({ root: e, action: { value: e.query('GET_CAPTURE_METHOD') } }),
            (e.ref.handleChange = (i) => {
                if (!e.element.value) return;
                let a = Array.from(e.element.files).map(
                    (n) => ((n._relativePath = n.webkitRelativePath), n),
                );
                setTimeout(() => {
                    t.onload(a), uc(e.element);
                }, 250);
            }),
            e.element.addEventListener('change', e.ref.handleChange);
    },
    On = ({ root: e, action: t }) => {
        e.query('GET_ALLOW_SYNC_ACCEPT_ATTRIBUTE') &&
            ve(e.element, 'accept', !!t.value, t.value ? t.value.join(',') : '');
    },
    xn = ({ root: e, action: t }) => {
        ve(e.element, 'multiple', t.value);
    },
    Dn = ({ root: e, action: t }) => {
        ve(e.element, 'webkitdirectory', t.value);
    },
    Oi = ({ root: e }) => {
        let t = e.query('GET_DISABLED'),
            i = e.query('GET_ALLOW_BROWSE'),
            a = t || !i;
        ve(e.element, 'disabled', a);
    },
    Pn = ({ root: e, action: t }) => {
        t.value
            ? e.query('GET_TOTAL_ITEMS') === 0 && ve(e.element, 'required', !0)
            : ve(e.element, 'required', !1);
    },
    Fn = ({ root: e, action: t }) => {
        ve(e.element, 'capture', !!t.value, t.value === !0 ? '' : t.value);
    },
    ja = ({ root: e }) => {
        let { element: t } = e;
        e.query('GET_TOTAL_ITEMS') > 0
            ? (ve(t, 'required', !1), ve(t, 'name', !1))
            : (ve(t, 'name', !0, e.query('GET_NAME')),
              e.query('GET_CHECK_VALIDITY') && t.setCustomValidity(''),
              e.query('GET_REQUIRED') && ve(t, 'required', !0));
    },
    fc = ({ root: e }) => {
        e.query('GET_CHECK_VALIDITY') &&
            e.element.setCustomValidity(e.query('GET_LABEL_INVALID_FIELD'));
    },
    pc = te({
        tag: 'input',
        name: 'browser',
        ignoreRect: !0,
        ignoreRectUpdate: !0,
        attributes: { type: 'file' },
        create: hc,
        destroy: ({ root: e }) => {
            e.element.removeEventListener('change', e.ref.handleChange);
        },
        write: ue({
            DID_LOAD_ITEM: ja,
            DID_REMOVE_ITEM: ja,
            DID_THROW_ITEM_INVALID: fc,
            DID_SET_DISABLED: Oi,
            DID_SET_ALLOW_BROWSE: Oi,
            DID_SET_ALLOW_DIRECTORIES_ONLY: Dn,
            DID_SET_ALLOW_MULTIPLE: xn,
            DID_SET_ACCEPTED_FILE_TYPES: On,
            DID_SET_CAPTURE_METHOD: Fn,
            DID_SET_REQUIRED: Pn,
        }),
    }),
    Qa = { ENTER: 13, SPACE: 32 },
    mc = ({ root: e, props: t }) => {
        let i = Fe('label');
        ee(i, 'for', `filepond--browser-${t.id}`),
            ee(i, 'id', `filepond--drop-label-${t.id}`),
            ee(i, 'aria-hidden', 'true'),
            (e.ref.handleKeyDown = (a) => {
                (a.keyCode === Qa.ENTER || a.keyCode === Qa.SPACE) &&
                    (a.preventDefault(), e.ref.label.click());
            }),
            (e.ref.handleClick = (a) => {
                a.target === i || i.contains(a.target) || e.ref.label.click();
            }),
            i.addEventListener('keydown', e.ref.handleKeyDown),
            e.element.addEventListener('click', e.ref.handleClick),
            Cn(i, t.caption),
            e.appendChild(i),
            (e.ref.label = i);
    },
    Cn = (e, t) => {
        e.innerHTML = t;
        let i = e.querySelector('.filepond--label-action');
        return i && ee(i, 'tabindex', '0'), t;
    },
    gc = te({
        name: 'drop-label',
        ignoreRect: !0,
        create: mc,
        destroy: ({ root: e }) => {
            e.ref.label.addEventListener('keydown', e.ref.handleKeyDown),
                e.element.removeEventListener('click', e.ref.handleClick);
        },
        write: ue({
            DID_SET_LABEL_IDLE: ({ root: e, action: t }) => {
                Cn(e.ref.label, t.value);
            },
        }),
        mixins: {
            styles: ['opacity', 'translateX', 'translateY'],
            animations: {
                opacity: { type: 'tween', duration: 150 },
                translateX: 'spring',
                translateY: 'spring',
            },
        },
    }),
    Ec = te({
        name: 'drip-blob',
        ignoreRect: !0,
        mixins: {
            styles: ['translateX', 'translateY', 'scaleX', 'scaleY', 'opacity'],
            animations: {
                scaleX: 'spring',
                scaleY: 'spring',
                translateX: 'spring',
                translateY: 'spring',
                opacity: { type: 'tween', duration: 250 },
            },
        },
    }),
    Tc = ({ root: e }) => {
        let t = e.rect.element.width * 0.5,
            i = e.rect.element.height * 0.5;
        e.ref.blob = e.appendChildView(
            e.createChildView(Ec, {
                opacity: 0,
                scaleX: 2.5,
                scaleY: 2.5,
                translateX: t,
                translateY: i,
            }),
        );
    },
    Ic = ({ root: e, action: t }) => {
        if (!e.ref.blob) {
            Tc({ root: e });
            return;
        }
        (e.ref.blob.translateX = t.position.scopeLeft),
            (e.ref.blob.translateY = t.position.scopeTop),
            (e.ref.blob.scaleX = 1),
            (e.ref.blob.scaleY = 1),
            (e.ref.blob.opacity = 1);
    },
    bc = ({ root: e }) => {
        e.ref.blob && (e.ref.blob.opacity = 0);
    },
    _c = ({ root: e }) => {
        e.ref.blob &&
            ((e.ref.blob.scaleX = 2.5), (e.ref.blob.scaleY = 2.5), (e.ref.blob.opacity = 0));
    },
    Rc = ({ root: e, props: t, actions: i }) => {
        yc({ root: e, props: t, actions: i });
        let { blob: a } = e.ref;
        i.length === 0 && a && a.opacity === 0 && (e.removeChildView(a), (e.ref.blob = null));
    },
    yc = ue({ DID_DRAG: Ic, DID_DROP: _c, DID_END_DRAG: bc }),
    Sc = te({ ignoreRect: !0, ignoreRectUpdate: !0, name: 'drip', write: Rc }),
    zn = (e, t) => {
        try {
            let i = new DataTransfer();
            t.forEach((a) => {
                a instanceof File
                    ? i.items.add(a)
                    : i.items.add(new File([a], a.name, { type: a.type }));
            }),
                (e.files = i.files);
        } catch {
            return !1;
        }
        return !0;
    },
    wc = ({ root: e }) => (e.ref.fields = {}),
    ni = (e, t) => e.ref.fields[t],
    Yi = (e) => {
        e.query('GET_ACTIVE_ITEMS').forEach((t) => {
            e.ref.fields[t.id] && e.element.appendChild(e.ref.fields[t.id]);
        });
    },
    Za = ({ root: e }) => Yi(e),
    vc = ({ root: e, action: t }) => {
        let n =
                !(e.query('GET_ITEM', t.id).origin === ae.LOCAL) &&
                e.query('SHOULD_UPDATE_FILE_INPUT'),
            r = Fe('input');
        (r.type = n ? 'file' : 'hidden'),
            (r.name = e.query('GET_NAME')),
            (r.disabled = e.query('GET_DISABLED')),
            (e.ref.fields[t.id] = r),
            Yi(e);
    },
    Ac = ({ root: e, action: t }) => {
        let i = ni(e, t.id);
        if (
            !i ||
            (t.serverFileReference !== null && (i.value = t.serverFileReference),
            !e.query('SHOULD_UPDATE_FILE_INPUT'))
        )
            return;
        let a = e.query('GET_ITEM', t.id);
        zn(i, [a.file]);
    },
    Lc = ({ root: e, action: t }) => {
        e.query('SHOULD_UPDATE_FILE_INPUT') &&
            setTimeout(() => {
                let i = ni(e, t.id);
                i && zn(i, [t.file]);
            }, 0);
    },
    Mc = ({ root: e }) => {
        e.element.disabled = e.query('GET_DISABLED');
    },
    Oc = ({ root: e, action: t }) => {
        let i = ni(e, t.id);
        i && (i.parentNode && i.parentNode.removeChild(i), delete e.ref.fields[t.id]);
    },
    xc = ({ root: e, action: t }) => {
        let i = ni(e, t.id);
        i && (t.value === null ? i.removeAttribute('value') : (i.value = t.value), Yi(e));
    },
    Dc = ue({
        DID_SET_DISABLED: Mc,
        DID_ADD_ITEM: vc,
        DID_LOAD_ITEM: Ac,
        DID_REMOVE_ITEM: Oc,
        DID_DEFINE_VALUE: xc,
        DID_PREPARE_OUTPUT: Lc,
        DID_REORDER_ITEMS: Za,
        DID_SORT_ITEMS: Za,
    }),
    Pc = te({
        tag: 'fieldset',
        name: 'data',
        create: wc,
        write: Dc,
        ignoreRect: !0,
    }),
    Fc = (e) => ('getRootNode' in e ? e.getRootNode() : document),
    Cc = ['jpg', 'jpeg', 'png', 'gif', 'bmp', 'webp', 'svg', 'tiff'],
    zc = ['css', 'csv', 'html', 'txt'],
    Nc = { zip: 'zip|compressed', epub: 'application/epub+zip' },
    Nn = (e = '') => (
        (e = e.toLowerCase()),
        Cc.includes(e)
            ? 'image/' + (e === 'jpg' ? 'jpeg' : e === 'svg' ? 'svg+xml' : e)
            : zc.includes(e)
              ? 'text/' + e
              : Nc[e] || ''
    ),
    $i = (e) =>
        new Promise((t, i) => {
            let a = Yc(e);
            if (a.length && !Bc(e)) return t(a);
            Gc(e).then(t);
        }),
    Bc = (e) => (e.files ? e.files.length > 0 : !1),
    Gc = (e) =>
        new Promise((t, i) => {
            let a = (e.items ? Array.from(e.items) : []).filter((n) => Vc(n)).map((n) => Uc(n));
            if (!a.length) {
                t(e.files ? Array.from(e.files) : []);
                return;
            }
            Promise.all(a)
                .then((n) => {
                    let r = [];
                    n.forEach((o) => {
                        r.push.apply(r, o);
                    }),
                        t(
                            r
                                .filter((o) => o)
                                .map(
                                    (o) => (
                                        o._relativePath || (o._relativePath = o.webkitRelativePath),
                                        o
                                    ),
                                ),
                        );
                })
                .catch(console.error);
        }),
    Vc = (e) => {
        if (Bn(e)) {
            let t = qi(e);
            if (t) return t.isFile || t.isDirectory;
        }
        return e.kind === 'file';
    },
    Uc = (e) =>
        new Promise((t, i) => {
            if (Wc(e)) {
                kc(qi(e)).then(t).catch(i);
                return;
            }
            t([e.getAsFile()]);
        }),
    kc = (e) =>
        new Promise((t, i) => {
            let a = [],
                n = 0,
                r = 0,
                o = () => {
                    r === 0 && n === 0 && t(a);
                },
                l = (s) => {
                    n++;
                    let u = s.createReader(),
                        c = () => {
                            u.readEntries((d) => {
                                if (d.length === 0) {
                                    n--, o();
                                    return;
                                }
                                d.forEach((h) => {
                                    h.isDirectory
                                        ? l(h)
                                        : (r++,
                                          h.file((f) => {
                                              let p = Hc(f);
                                              h.fullPath && (p._relativePath = h.fullPath),
                                                  a.push(p),
                                                  r--,
                                                  o();
                                          }));
                                }),
                                    c();
                            }, i);
                        };
                    c();
                };
            l(e);
        }),
    Hc = (e) => {
        if (e.type.length) return e;
        let t = e.lastModifiedDate,
            i = e.name,
            a = Nn(ai(e.name));
        return a.length && ((e = e.slice(0, e.size, a)), (e.name = i), (e.lastModifiedDate = t)), e;
    },
    Wc = (e) => Bn(e) && (qi(e) || {}).isDirectory,
    Bn = (e) => 'webkitGetAsEntry' in e,
    qi = (e) => e.webkitGetAsEntry(),
    Yc = (e) => {
        let t = [];
        try {
            if (((t = qc(e)), t.length)) return t;
            t = $c(e);
        } catch {}
        return t;
    },
    $c = (e) => {
        let t = e.getData('url');
        return typeof t == 'string' && t.length ? [t] : [];
    },
    qc = (e) => {
        let t = e.getData('text/html');
        if (typeof t == 'string' && t.length) {
            let i = t.match(/src\s*=\s*"(.+?)"/);
            if (i) return [i[1]];
        }
        return [];
    },
    Zt = [],
    qe = (e) => ({
        pageLeft: e.pageX,
        pageTop: e.pageY,
        scopeLeft: e.offsetX || e.layerX,
        scopeTop: e.offsetY || e.layerY,
    }),
    Xc = (e, t, i) => {
        let a = jc(t),
            n = {
                element: e,
                filterElement: i,
                state: null,
                ondrop: () => {},
                onenter: () => {},
                ondrag: () => {},
                onexit: () => {},
                onload: () => {},
                allowdrop: () => {},
            };
        return (n.destroy = a.addListener(n)), n;
    },
    jc = (e) => {
        let t = Zt.find((a) => a.element === e);
        if (t) return t;
        let i = Qc(e);
        return Zt.push(i), i;
    },
    Qc = (e) => {
        let t = [],
            i = { dragenter: Kc, dragover: Jc, dragleave: td, drop: ed },
            a = {};
        Z(i, (r, o) => {
            (a[r] = o(e, t)), e.addEventListener(r, a[r], !1);
        });
        let n = {
            element: e,
            addListener: (r) => (
                t.push(r),
                () => {
                    t.splice(t.indexOf(r), 1),
                        t.length === 0 &&
                            (Zt.splice(Zt.indexOf(n), 1),
                            Z(i, (o) => {
                                e.removeEventListener(o, a[o], !1);
                            }));
                }
            ),
        };
        return n;
    },
    Zc = (e, t) => ('elementFromPoint' in e || (e = document), e.elementFromPoint(t.x, t.y)),
    Xi = (e, t) => {
        let i = Fc(t),
            a = Zc(i, {
                x: e.pageX - window.pageXOffset,
                y: e.pageY - window.pageYOffset,
            });
        return a === t || t.contains(a);
    },
    Gn = null,
    $t = (e, t) => {
        try {
            e.dropEffect = t;
        } catch {}
    },
    Kc = (e, t) => (i) => {
        i.preventDefault(),
            (Gn = i.target),
            t.forEach((a) => {
                let { element: n, onenter: r } = a;
                Xi(i, n) && ((a.state = 'enter'), r(qe(i)));
            });
    },
    Jc = (e, t) => (i) => {
        i.preventDefault();
        let a = i.dataTransfer;
        $i(a).then((n) => {
            let r = !1;
            t.some((o) => {
                let {
                    filterElement: l,
                    element: s,
                    onenter: u,
                    onexit: c,
                    ondrag: d,
                    allowdrop: h,
                } = o;
                $t(a, 'copy');
                let f = h(n);
                if (!f) {
                    $t(a, 'none');
                    return;
                }
                if (Xi(i, s)) {
                    if (((r = !0), o.state === null)) {
                        (o.state = 'enter'), u(qe(i));
                        return;
                    }
                    if (((o.state = 'over'), l && !f)) {
                        $t(a, 'none');
                        return;
                    }
                    d(qe(i));
                } else l && !r && $t(a, 'none'), o.state && ((o.state = null), c(qe(i)));
            });
        });
    },
    ed = (e, t) => (i) => {
        i.preventDefault();
        let a = i.dataTransfer;
        $i(a).then((n) => {
            t.forEach((r) => {
                let { filterElement: o, element: l, ondrop: s, onexit: u, allowdrop: c } = r;
                if (((r.state = null), !(o && !Xi(i, l)))) {
                    if (!c(n)) return u(qe(i));
                    s(qe(i), n);
                }
            });
        });
    },
    td = (e, t) => (i) => {
        Gn === i.target &&
            t.forEach((a) => {
                let { onexit: n } = a;
                (a.state = null), n(qe(i));
            });
    },
    id = (e, t, i) => {
        e.classList.add('filepond--hopper');
        let { catchesDropsOnPage: a, requiresDropOnElement: n, filterItems: r = (c) => c } = i,
            o = Xc(e, a ? document.documentElement : e, n),
            l = '',
            s = '';
        (o.allowdrop = (c) => t(r(c))),
            (o.ondrop = (c, d) => {
                let h = r(d);
                if (!t(h)) {
                    u.ondragend(c);
                    return;
                }
                (s = 'drag-drop'), u.onload(h, c);
            }),
            (o.ondrag = (c) => {
                u.ondrag(c);
            }),
            (o.onenter = (c) => {
                (s = 'drag-over'), u.ondragstart(c);
            }),
            (o.onexit = (c) => {
                (s = 'drag-exit'), u.ondragend(c);
            });
        let u = {
            updateHopperState: () => {
                l !== s && ((e.dataset.hopperState = s), (l = s));
            },
            onload: () => {},
            ondragstart: () => {},
            ondrag: () => {},
            ondragend: () => {},
            destroy: () => {
                o.destroy();
            },
        };
        return u;
    },
    xi = !1,
    rt = [],
    Vn = (e) => {
        let t = document.activeElement;
        if (t && /textarea|input/i.test(t.nodeName)) {
            let i = !1,
                a = t;
            for (; a !== document.body; ) {
                if (a.classList.contains('filepond--root')) {
                    i = !0;
                    break;
                }
                a = a.parentNode;
            }
            if (!i) return;
        }
        $i(e.clipboardData).then((i) => {
            i.length && rt.forEach((a) => a(i));
        });
    },
    ad = (e) => {
        rt.includes(e) || (rt.push(e), !xi && ((xi = !0), document.addEventListener('paste', Vn)));
    },
    nd = (e) => {
        Gi(rt, rt.indexOf(e)),
            rt.length === 0 && (document.removeEventListener('paste', Vn), (xi = !1));
    },
    rd = () => {
        let e = (i) => {
                t.onload(i);
            },
            t = {
                destroy: () => {
                    nd(e);
                },
                onload: () => {},
            };
        return ad(e), t;
    },
    od = ({ root: e, props: t }) => {
        (e.element.id = `filepond--assistant-${t.id}`),
            ee(e.element, 'role', 'status'),
            ee(e.element, 'aria-live', 'polite'),
            ee(e.element, 'aria-relevant', 'additions');
    },
    Ka = null,
    Ja = null,
    yi = [],
    ri = (e, t) => {
        e.element.textContent = t;
    },
    ld = (e) => {
        e.element.textContent = '';
    },
    Un = (e, t, i) => {
        let a = e.query('GET_TOTAL_ITEMS');
        ri(
            e,
            `${i} ${t}, ${a} ${
                a === 1
                    ? e.query('GET_LABEL_FILE_COUNT_SINGULAR')
                    : e.query('GET_LABEL_FILE_COUNT_PLURAL')
            }`,
        ),
            clearTimeout(Ja),
            (Ja = setTimeout(() => {
                ld(e);
            }, 1500));
    },
    kn = (e) => e.element.parentNode.contains(document.activeElement),
    sd = ({ root: e, action: t }) => {
        if (!kn(e)) return;
        e.element.textContent = '';
        let i = e.query('GET_ITEM', t.id);
        yi.push(i.filename),
            clearTimeout(Ka),
            (Ka = setTimeout(() => {
                Un(e, yi.join(', '), e.query('GET_LABEL_FILE_ADDED')), (yi.length = 0);
            }, 750));
    },
    cd = ({ root: e, action: t }) => {
        if (!kn(e)) return;
        let i = t.item;
        Un(e, i.filename, e.query('GET_LABEL_FILE_REMOVED'));
    },
    dd = ({ root: e, action: t }) => {
        let a = e.query('GET_ITEM', t.id).filename,
            n = e.query('GET_LABEL_FILE_PROCESSING_COMPLETE');
        ri(e, `${a} ${n}`);
    },
    en = ({ root: e, action: t }) => {
        let a = e.query('GET_ITEM', t.id).filename,
            n = e.query('GET_LABEL_FILE_PROCESSING_ABORTED');
        ri(e, `${a} ${n}`);
    },
    qt = ({ root: e, action: t }) => {
        let a = e.query('GET_ITEM', t.id).filename;
        ri(e, `${t.status.main} ${a} ${t.status.sub}`);
    },
    ud = te({
        create: od,
        ignoreRect: !0,
        ignoreRectUpdate: !0,
        write: ue({
            DID_LOAD_ITEM: sd,
            DID_REMOVE_ITEM: cd,
            DID_COMPLETE_ITEM_PROCESSING: dd,
            DID_ABORT_ITEM_PROCESSING: en,
            DID_REVERT_ITEM_PROCESSING: en,
            DID_THROW_ITEM_REMOVE_ERROR: qt,
            DID_THROW_ITEM_LOAD_ERROR: qt,
            DID_THROW_ITEM_INVALID: qt,
            DID_THROW_ITEM_PROCESSING_ERROR: qt,
        }),
        tag: 'span',
        name: 'assistant',
    }),
    Hn = (e, t = '-') => e.replace(new RegExp(`${t}.`, 'g'), (i) => i.charAt(1).toUpperCase()),
    Wn = (e, t = 16, i = !0) => {
        let a = Date.now(),
            n = null;
        return (...r) => {
            clearTimeout(n);
            let o = Date.now() - a,
                l = () => {
                    (a = Date.now()), e(...r);
                };
            o < t ? i || (n = setTimeout(l, t - o)) : l();
        };
    },
    hd = 1e6,
    Kt = (e) => e.preventDefault(),
    fd = ({ root: e, props: t }) => {
        let i = e.query('GET_ID');
        i && (e.element.id = i);
        let a = e.query('GET_CLASS_NAME');
        a &&
            a
                .split(' ')
                .filter((s) => s.length)
                .forEach((s) => {
                    e.element.classList.add(s);
                }),
            (e.ref.label = e.appendChildView(
                e.createChildView(gc, {
                    ...t,
                    translateY: null,
                    caption: e.query('GET_LABEL_IDLE'),
                }),
            )),
            (e.ref.list = e.appendChildView(e.createChildView(dc, { translateY: null }))),
            (e.ref.panel = e.appendChildView(e.createChildView(Mn, { name: 'panel-root' }))),
            (e.ref.assistant = e.appendChildView(e.createChildView(ud, { ...t }))),
            (e.ref.data = e.appendChildView(e.createChildView(Pc, { ...t }))),
            (e.ref.measure = Fe('div')),
            (e.ref.measure.style.height = '100%'),
            e.element.appendChild(e.ref.measure),
            (e.ref.bounds = null),
            e
                .query('GET_STYLES')
                .filter((s) => !Pe(s.value))
                .map(({ name: s, value: u }) => {
                    e.element.dataset[s] = u;
                }),
            (e.ref.widthPrevious = null),
            (e.ref.widthUpdated = Wn(() => {
                (e.ref.updateHistory = []), e.dispatch('DID_RESIZE_ROOT');
            }, 250)),
            (e.ref.previousAspectRatio = null),
            (e.ref.updateHistory = []);
        let n = window.matchMedia('(pointer: fine) and (hover: hover)').matches,
            r = 'PointerEvent' in window;
        e.query('GET_ALLOW_REORDER') &&
            r &&
            !n &&
            (e.element.addEventListener('touchmove', Kt, { passive: !1 }),
            e.element.addEventListener('gesturestart', Kt));
        let o = e.query('GET_CREDITS');
        if (o.length === 2) {
            let s = document.createElement('a');
            (s.className = 'filepond--credits'),
                s.setAttribute('aria-hidden', 'true'),
                (s.href = o[0]),
                (s.tabindex = -1),
                (s.target = '_blank'),
                (s.rel = 'noopener noreferrer'),
                (s.textContent = o[1]),
                e.element.appendChild(s),
                (e.ref.credits = s);
        }
    },
    pd = ({ root: e, props: t, actions: i }) => {
        if (
            (Id({ root: e, props: t, actions: i }),
            i
                .filter((I) => /^DID_SET_STYLE_/.test(I.type))
                .filter((I) => !Pe(I.data.value))
                .map(({ type: I, data: v }) => {
                    let R = Hn(I.substring(8).toLowerCase(), '_');
                    (e.element.dataset[R] = v.value), e.invalidateLayout();
                }),
            e.rect.element.hidden)
        )
            return;
        e.rect.element.width !== e.ref.widthPrevious &&
            ((e.ref.widthPrevious = e.rect.element.width), e.ref.widthUpdated());
        let a = e.ref.bounds;
        a ||
            ((a = e.ref.bounds = Ed(e)),
            e.element.removeChild(e.ref.measure),
            (e.ref.measure = null));
        let { hopper: n, label: r, list: o, panel: l } = e.ref;
        n && n.updateHopperState();
        let s = e.query('GET_PANEL_ASPECT_RATIO'),
            u = e.query('GET_ALLOW_MULTIPLE'),
            c = e.query('GET_TOTAL_ITEMS'),
            d = u ? e.query('GET_MAX_FILES') || hd : 1,
            h = c === d,
            f = i.find((I) => I.type === 'DID_ADD_ITEM');
        if (h && f) {
            let I = f.data.interactionMethod;
            (r.opacity = 0),
                u
                    ? (r.translateY = -40)
                    : I === be.API
                      ? (r.translateX = 40)
                      : I === be.BROWSE
                        ? (r.translateY = 40)
                        : (r.translateY = 30);
        } else h || ((r.opacity = 1), (r.translateX = 0), (r.translateY = 0));
        let p = md(e),
            m = gd(e),
            g = r.rect.element.height,
            b = !u || h ? 0 : g,
            E = h ? o.rect.element.marginTop : 0,
            T = c === 0 ? 0 : o.rect.element.marginBottom,
            _ = b + E + m.visual + T,
            y = b + E + m.bounds + T;
        if (((o.translateY = Math.max(0, b - o.rect.element.marginTop) - p.top), s)) {
            let I = e.rect.element.width,
                v = I * s;
            s !== e.ref.previousAspectRatio &&
                ((e.ref.previousAspectRatio = s), (e.ref.updateHistory = []));
            let R = e.ref.updateHistory;
            R.push(I);
            let S = 2;
            if (R.length > S * 2) {
                let x = R.length,
                    O = x - 10,
                    B = 0;
                for (let A = x; A >= O; A--) if ((R[A] === R[A - 2] && B++, B >= S)) return;
            }
            (l.scalable = !1), (l.height = v);
            let P = v - b - (T - p.bottom) - (h ? E : 0);
            m.visual > P ? (o.overflow = P) : (o.overflow = null), (e.height = v);
        } else if (a.fixedHeight) {
            l.scalable = !1;
            let I = a.fixedHeight - b - (T - p.bottom) - (h ? E : 0);
            m.visual > I ? (o.overflow = I) : (o.overflow = null);
        } else if (a.cappedHeight) {
            let I = _ >= a.cappedHeight,
                v = Math.min(a.cappedHeight, _);
            (l.scalable = !0), (l.height = I ? v : v - p.top - p.bottom);
            let R = v - b - (T - p.bottom) - (h ? E : 0);
            _ > a.cappedHeight && m.visual > R ? (o.overflow = R) : (o.overflow = null),
                (e.height = Math.min(a.cappedHeight, y - p.top - p.bottom));
        } else {
            let I = c > 0 ? p.top + p.bottom : 0;
            (l.scalable = !0), (l.height = Math.max(g, _ - I)), (e.height = Math.max(g, y - I));
        }
        e.ref.credits &&
            l.heightCurrent &&
            (e.ref.credits.style.transform = `translateY(${l.heightCurrent}px)`);
    },
    md = (e) => {
        let t = e.ref.list.childViews[0].childViews[0];
        return t
            ? {
                  top: t.rect.element.marginTop,
                  bottom: t.rect.element.marginBottom,
              }
            : { top: 0, bottom: 0 };
    },
    gd = (e) => {
        let t = 0,
            i = 0,
            a = e.ref.list,
            n = a.childViews[0],
            r = n.childViews.filter((E) => E.rect.element.height),
            o = e
                .query('GET_ACTIVE_ITEMS')
                .map((E) => r.find((T) => T.id === E.id))
                .filter((E) => E);
        if (o.length === 0) return { visual: t, bounds: i };
        let l = n.rect.element.width,
            s = Wi(n, o, a.dragCoordinates),
            u = o[0].rect.element,
            c = u.marginTop + u.marginBottom,
            d = u.marginLeft + u.marginRight,
            h = u.width + d,
            f = u.height + c,
            p = typeof s < 'u' && s >= 0 ? 1 : 0,
            m = o.find((E) => E.markedForRemoval && E.opacity < 0.45) ? -1 : 0,
            g = o.length + p + m,
            b = Hi(l, h);
        return (
            b === 1
                ? o.forEach((E) => {
                      let T = E.rect.element.height + c;
                      (i += T), (t += T * E.opacity);
                  })
                : ((i = Math.ceil(g / b) * f), (t = i)),
            { visual: t, bounds: i }
        );
    },
    Ed = (e) => {
        let t = e.ref.measureHeight || null;
        return {
            cappedHeight: parseInt(e.style.maxHeight, 10) || null,
            fixedHeight: t === 0 ? null : t,
        };
    },
    ji = (e, t) => {
        let i = e.query('GET_ALLOW_REPLACE'),
            a = e.query('GET_ALLOW_MULTIPLE'),
            n = e.query('GET_TOTAL_ITEMS'),
            r = e.query('GET_MAX_FILES'),
            o = t.length;
        return !a && o > 1
            ? (e.dispatch('DID_THROW_MAX_FILES', {
                  source: t,
                  error: K('warning', 0, 'Max files'),
              }),
              !0)
            : ((r = a ? r : 1),
              !a && i
                  ? !1
                  : dt(r) && n + o > r
                    ? (e.dispatch('DID_THROW_MAX_FILES', {
                          source: t,
                          error: K('warning', 0, 'Max files'),
                      }),
                      !0)
                    : !1);
    },
    Td = (e, t, i) => {
        let a = e.childViews[0];
        return Wi(a, t, {
            left: i.scopeLeft - a.rect.element.left,
            top:
                i.scopeTop -
                (e.rect.outer.top + e.rect.element.marginTop + e.rect.element.scrollTop),
        });
    },
    tn = (e) => {
        let t = e.query('GET_ALLOW_DROP'),
            i = e.query('GET_DISABLED'),
            a = t && !i;
        if (a && !e.ref.hopper) {
            let n = id(
                e.element,
                (r) => {
                    let o = e.query('GET_BEFORE_DROP_FILE') || (() => !0);
                    return e.query('GET_DROP_VALIDATION')
                        ? r.every(
                              (s) =>
                                  Xe('ALLOW_HOPPER_ITEM', s, {
                                      query: e.query,
                                  }).every((u) => u === !0) && o(s),
                          )
                        : !0;
                },
                {
                    filterItems: (r) => {
                        let o = e.query('GET_IGNORED_FILES');
                        return r.filter((l) => (ct(l) ? !o.includes(l.name.toLowerCase()) : !0));
                    },
                    catchesDropsOnPage: e.query('GET_DROP_ON_PAGE'),
                    requiresDropOnElement: e.query('GET_DROP_ON_ELEMENT'),
                },
            );
            (n.onload = (r, o) => {
                let s = e.ref.list.childViews[0].childViews.filter((c) => c.rect.element.height),
                    u = e
                        .query('GET_ACTIVE_ITEMS')
                        .map((c) => s.find((d) => d.id === c.id))
                        .filter((c) => c);
                Se('ADD_ITEMS', r, { dispatch: e.dispatch }).then((c) => {
                    if (ji(e, c)) return !1;
                    e.dispatch('ADD_ITEMS', {
                        items: c,
                        index: Td(e.ref.list, u, o),
                        interactionMethod: be.DROP,
                    });
                }),
                    e.dispatch('DID_DROP', { position: o }),
                    e.dispatch('DID_END_DRAG', { position: o });
            }),
                (n.ondragstart = (r) => {
                    e.dispatch('DID_START_DRAG', { position: r });
                }),
                (n.ondrag = Wn((r) => {
                    e.dispatch('DID_DRAG', { position: r });
                })),
                (n.ondragend = (r) => {
                    e.dispatch('DID_END_DRAG', { position: r });
                }),
                (e.ref.hopper = n),
                (e.ref.drip = e.appendChildView(e.createChildView(Sc)));
        } else
            !a &&
                e.ref.hopper &&
                (e.ref.hopper.destroy(), (e.ref.hopper = null), e.removeChildView(e.ref.drip));
    },
    an = (e, t) => {
        let i = e.query('GET_ALLOW_BROWSE'),
            a = e.query('GET_DISABLED'),
            n = i && !a;
        n && !e.ref.browser
            ? (e.ref.browser = e.appendChildView(
                  e.createChildView(pc, {
                      ...t,
                      onload: (r) => {
                          Se('ADD_ITEMS', r, { dispatch: e.dispatch }).then((o) => {
                              if (ji(e, o)) return !1;
                              e.dispatch('ADD_ITEMS', {
                                  items: o,
                                  index: -1,
                                  interactionMethod: be.BROWSE,
                              });
                          });
                      },
                  }),
                  0,
              ))
            : !n && e.ref.browser && (e.removeChildView(e.ref.browser), (e.ref.browser = null));
    },
    nn = (e) => {
        let t = e.query('GET_ALLOW_PASTE'),
            i = e.query('GET_DISABLED'),
            a = t && !i;
        a && !e.ref.paster
            ? ((e.ref.paster = rd()),
              (e.ref.paster.onload = (n) => {
                  Se('ADD_ITEMS', n, { dispatch: e.dispatch }).then((r) => {
                      if (ji(e, r)) return !1;
                      e.dispatch('ADD_ITEMS', {
                          items: r,
                          index: -1,
                          interactionMethod: be.PASTE,
                      });
                  });
              }))
            : !a && e.ref.paster && (e.ref.paster.destroy(), (e.ref.paster = null));
    },
    Id = ue({
        DID_SET_ALLOW_BROWSE: ({ root: e, props: t }) => {
            an(e, t);
        },
        DID_SET_ALLOW_DROP: ({ root: e }) => {
            tn(e);
        },
        DID_SET_ALLOW_PASTE: ({ root: e }) => {
            nn(e);
        },
        DID_SET_DISABLED: ({ root: e, props: t }) => {
            tn(e),
                nn(e),
                an(e, t),
                e.query('GET_DISABLED')
                    ? (e.element.dataset.disabled = 'disabled')
                    : e.element.removeAttribute('data-disabled');
        },
    }),
    bd = te({
        name: 'root',
        read: ({ root: e }) => {
            e.ref.measure && (e.ref.measureHeight = e.ref.measure.offsetHeight);
        },
        create: fd,
        write: pd,
        destroy: ({ root: e }) => {
            e.ref.paster && e.ref.paster.destroy(),
                e.ref.hopper && e.ref.hopper.destroy(),
                e.element.removeEventListener('touchmove', Kt),
                e.element.removeEventListener('gesturestart', Kt);
        },
        mixins: { styles: ['height'] },
    }),
    _d = (e = {}) => {
        let t = null,
            i = Qt(),
            a = Bo(yl(i), [Ul, vl(i)], [hs, wl(i)]);
        a.dispatch('SET_OPTIONS', { options: e });
        let n = () => {
            document.hidden || a.dispatch('KICK');
        };
        document.addEventListener('visibilitychange', n);
        let r = null,
            o = !1,
            l = !1,
            s = null,
            u = null,
            c = () => {
                o || (o = !0),
                    clearTimeout(r),
                    (r = setTimeout(() => {
                        (o = !1),
                            (s = null),
                            (u = null),
                            l && ((l = !1), a.dispatch('DID_STOP_RESIZE'));
                    }, 500));
            };
        window.addEventListener('resize', c);
        let d = bd(a, { id: Bi() }),
            h = !1,
            f = !1,
            p = {
                _read: () => {
                    o &&
                        ((u = window.innerWidth),
                        s || (s = u),
                        !l && u !== s && (a.dispatch('DID_START_RESIZE'), (l = !0))),
                        f && h && (h = d.element.offsetParent === null),
                        !h && (d._read(), (f = d.rect.element.hidden));
                },
                _write: (w) => {
                    let L = a.processActionQueue().filter((N) => !/^SET_/.test(N.type));
                    (h && !L.length) ||
                        (E(L),
                        (h = d._write(w, L, l)),
                        Ml(a.query('GET_ITEMS')),
                        h && a.processDispatchQueue());
                },
            },
            m = (w) => (L) => {
                let N = { type: w };
                if (!L) return N;
                if (
                    (L.hasOwnProperty('error') && (N.error = L.error ? { ...L.error } : null),
                    L.status && (N.status = { ...L.status }),
                    L.file && (N.output = L.file),
                    L.source)
                )
                    N.file = L.source;
                else if (L.item || L.id) {
                    let F = L.item ? L.item : a.query('GET_ITEM', L.id);
                    N.file = F ? he(F) : null;
                }
                return (
                    L.items && (N.items = L.items.map(he)),
                    /progress/.test(w) && (N.progress = L.progress),
                    L.hasOwnProperty('origin') &&
                        L.hasOwnProperty('target') &&
                        ((N.origin = L.origin), (N.target = L.target)),
                    N
                );
            },
            g = {
                DID_DESTROY: m('destroy'),
                DID_INIT: m('init'),
                DID_THROW_MAX_FILES: m('warning'),
                DID_INIT_ITEM: m('initfile'),
                DID_START_ITEM_LOAD: m('addfilestart'),
                DID_UPDATE_ITEM_LOAD_PROGRESS: m('addfileprogress'),
                DID_LOAD_ITEM: m('addfile'),
                DID_THROW_ITEM_INVALID: [m('error'), m('addfile')],
                DID_THROW_ITEM_LOAD_ERROR: [m('error'), m('addfile')],
                DID_THROW_ITEM_REMOVE_ERROR: [m('error'), m('removefile')],
                DID_PREPARE_OUTPUT: m('preparefile'),
                DID_START_ITEM_PROCESSING: m('processfilestart'),
                DID_UPDATE_ITEM_PROCESS_PROGRESS: m('processfileprogress'),
                DID_ABORT_ITEM_PROCESSING: m('processfileabort'),
                DID_COMPLETE_ITEM_PROCESSING: m('processfile'),
                DID_COMPLETE_ITEM_PROCESSING_ALL: m('processfiles'),
                DID_REVERT_ITEM_PROCESSING: m('processfilerevert'),
                DID_THROW_ITEM_PROCESSING_ERROR: [m('error'), m('processfile')],
                DID_REMOVE_ITEM: m('removefile'),
                DID_UPDATE_ITEMS: m('updatefiles'),
                DID_ACTIVATE_ITEM: m('activatefile'),
                DID_REORDER_ITEMS: m('reorderfiles'),
            },
            b = (w) => {
                let L = { pond: C, ...w };
                delete L.type,
                    d.element.dispatchEvent(
                        new CustomEvent(`FilePond:${w.type}`, {
                            detail: L,
                            bubbles: !0,
                            cancelable: !0,
                            composed: !0,
                        }),
                    );
                let N = [];
                w.hasOwnProperty('error') && N.push(w.error),
                    w.hasOwnProperty('file') && N.push(w.file);
                let F = ['type', 'error', 'file'];
                Object.keys(w)
                    .filter((G) => !F.includes(G))
                    .forEach((G) => N.push(w[G])),
                    C.fire(w.type, ...N);
                let V = a.query(`GET_ON${w.type.toUpperCase()}`);
                V && V(...N);
            },
            E = (w) => {
                w.length &&
                    w
                        .filter((L) => g[L.type])
                        .forEach((L) => {
                            let N = g[L.type];
                            (Array.isArray(N) ? N : [N]).forEach((F) => {
                                L.type === 'DID_INIT_ITEM'
                                    ? b(F(L.data))
                                    : setTimeout(() => {
                                          b(F(L.data));
                                      }, 0);
                            });
                        });
            },
            T = (w) => a.dispatch('SET_OPTIONS', { options: w }),
            _ = (w) => a.query('GET_ACTIVE_ITEM', w),
            y = (w) =>
                new Promise((L, N) => {
                    a.dispatch('REQUEST_ITEM_PREPARE', {
                        query: w,
                        success: (F) => {
                            L(F);
                        },
                        failure: (F) => {
                            N(F);
                        },
                    });
                }),
            I = (w, L = {}) =>
                new Promise((N, F) => {
                    S([{ source: w, options: L }], { index: L.index })
                        .then((V) => N(V && V[0]))
                        .catch(F);
                }),
            v = (w) => w.file && w.id,
            R = (w, L) => (
                typeof w == 'object' && !v(w) && !L && ((L = w), (w = void 0)),
                a.dispatch('REMOVE_ITEM', { ...L, query: w }),
                a.query('GET_ACTIVE_ITEM', w) === null
            ),
            S = (...w) =>
                new Promise((L, N) => {
                    let F = [],
                        V = {};
                    if (Jt(w[0])) F.push.apply(F, w[0]), Object.assign(V, w[1] || {});
                    else {
                        let G = w[w.length - 1];
                        typeof G == 'object' && !(G instanceof Blob) && Object.assign(V, w.pop()),
                            F.push(...w);
                    }
                    a.dispatch('ADD_ITEMS', {
                        items: F,
                        index: V.index,
                        interactionMethod: be.API,
                        success: L,
                        failure: N,
                    });
                }),
            P = () => a.query('GET_ACTIVE_ITEMS'),
            x = (w) =>
                new Promise((L, N) => {
                    a.dispatch('REQUEST_ITEM_PROCESSING', {
                        query: w,
                        success: (F) => {
                            L(F);
                        },
                        failure: (F) => {
                            N(F);
                        },
                    });
                }),
            O = (...w) => {
                let L = Array.isArray(w[0]) ? w[0] : w,
                    N = L.length ? L : P();
                return Promise.all(N.map(y));
            },
            B = (...w) => {
                let L = Array.isArray(w[0]) ? w[0] : w;
                if (!L.length) {
                    let N = P().filter(
                        (F) =>
                            !(F.status === H.IDLE && F.origin === ae.LOCAL) &&
                            F.status !== H.PROCESSING &&
                            F.status !== H.PROCESSING_COMPLETE &&
                            F.status !== H.PROCESSING_REVERT_ERROR,
                    );
                    return Promise.all(N.map(x));
                }
                return Promise.all(L.map(x));
            },
            A = (...w) => {
                let L = Array.isArray(w[0]) ? w[0] : w,
                    N;
                typeof L[L.length - 1] == 'object'
                    ? (N = L.pop())
                    : Array.isArray(w[0]) && (N = w[1]);
                let F = P();
                return L.length
                    ? L.map((G) => (ke(G) ? (F[G] ? F[G].id : null) : G))
                          .filter((G) => G)
                          .map((G) => R(G, N))
                    : Promise.all(F.map((G) => R(G, N)));
            },
            C = {
                ...ii(),
                ...p,
                ...Sl(a, i),
                setOptions: T,
                addFile: I,
                addFiles: S,
                getFile: _,
                processFile: x,
                prepareFile: y,
                removeFile: R,
                moveFile: (w, L) => a.dispatch('MOVE_ITEM', { query: w, index: L }),
                getFiles: P,
                processFiles: B,
                removeFiles: A,
                prepareFiles: O,
                sort: (w) => a.dispatch('SORT', { compare: w }),
                browse: () => {
                    var w = d.element.querySelector('input[type=file]');
                    w && w.click();
                },
                destroy: () => {
                    C.fire('destroy', d.element),
                        a.dispatch('ABORT_ALL'),
                        d._destroy(),
                        window.removeEventListener('resize', c),
                        document.removeEventListener('visibilitychange', n),
                        a.dispatch('DID_DESTROY');
                },
                insertBefore: (w) => va(d.element, w),
                insertAfter: (w) => Aa(d.element, w),
                appendTo: (w) => w.appendChild(d.element),
                replaceElement: (w) => {
                    va(d.element, w), w.parentNode.removeChild(w), (t = w);
                },
                restoreElement: () => {
                    t &&
                        (Aa(t, d.element), d.element.parentNode.removeChild(d.element), (t = null));
                },
                isAttachedTo: (w) => d.element === w || t === w,
                element: { get: () => d.element },
                status: { get: () => a.query('GET_STATUS') },
            };
        return a.dispatch('DID_INIT'), ze(C);
    },
    Yn = (e = {}) => {
        let t = {};
        return (
            Z(Qt(), (a, n) => {
                t[a] = n[0];
            }),
            _d({ ...t, ...e })
        );
    },
    Rd = (e) => e.charAt(0).toLowerCase() + e.slice(1),
    yd = (e) => Hn(e.replace(/^data-/, '')),
    $n = (e, t) => {
        Z(t, (i, a) => {
            Z(e, (n, r) => {
                let o = new RegExp(i);
                if (!o.test(n) || (delete e[n], a === !1)) return;
                if (de(a)) {
                    e[a] = r;
                    return;
                }
                let s = a.group;
                re(a) && !e[s] && (e[s] = {}), (e[s][Rd(n.replace(o, ''))] = r);
            }),
                a.mapping && $n(e[a.group], a.mapping);
        });
    },
    Sd = (e, t = {}) => {
        let i = [];
        Z(e.attributes, (n) => {
            i.push(e.attributes[n]);
        });
        let a = i
            .filter((n) => n.name)
            .reduce((n, r) => {
                let o = ee(e, r.name);
                return (n[yd(r.name)] = o === r.name ? !0 : o), n;
            }, {});
        return $n(a, t), a;
    },
    wd = (e, t = {}) => {
        let i = {
            '^class$': 'className',
            '^multiple$': 'allowMultiple',
            '^capture$': 'captureMethod',
            '^webkitdirectory$': 'allowDirectoriesOnly',
            '^server': {
                group: 'server',
                mapping: {
                    '^process': { group: 'process' },
                    '^revert': { group: 'revert' },
                    '^fetch': { group: 'fetch' },
                    '^restore': { group: 'restore' },
                    '^load': { group: 'load' },
                },
            },
            '^type$': !1,
            '^files$': !1,
        };
        Xe('SET_ATTRIBUTE_TO_OPTION_MAP', i);
        let a = { ...t },
            n = Sd(e.nodeName === 'FIELDSET' ? e.querySelector('input[type=file]') : e, i);
        Object.keys(n).forEach((o) => {
            re(n[o]) ? (re(a[o]) || (a[o] = {}), Object.assign(a[o], n[o])) : (a[o] = n[o]);
        }),
            (a.files = (t.files || []).concat(
                Array.from(e.querySelectorAll('input:not([type=file])')).map((o) => ({
                    source: o.value,
                    options: { type: o.dataset.type },
                })),
            ));
        let r = Yn(a);
        return (
            e.files &&
                Array.from(e.files).forEach((o) => {
                    r.addFile(o);
                }),
            r.replaceElement(e),
            r
        );
    },
    vd = (...e) => (No(e[0]) ? wd(...e) : Yn(...e)),
    Ad = ['fire', '_read', '_write'],
    rn = (e) => {
        let t = {};
        return fn(e, t, Ad), t;
    },
    Ld = (e, t) => e.replace(/(?:{([a-zA-Z]+)})/g, (i, a) => t[a]),
    Md = (e) => {
        let t = new Blob(['(', e.toString(), ')()'], {
                type: 'application/javascript',
            }),
            i = URL.createObjectURL(t),
            a = new Worker(i);
        return {
            transfer: (n, r) => {},
            post: (n, r, o) => {
                let l = Bi();
                (a.onmessage = (s) => {
                    s.data.id === l && r(s.data.message);
                }),
                    a.postMessage({ id: l, message: n }, o);
            },
            terminate: () => {
                a.terminate(), URL.revokeObjectURL(i);
            },
        };
    },
    Od = (e) =>
        new Promise((t, i) => {
            let a = new Image();
            (a.onload = () => {
                t(a);
            }),
                (a.onerror = (n) => {
                    i(n);
                }),
                (a.src = e);
        }),
    qn = (e, t) => {
        let i = e.slice(0, e.size, e.type);
        return (i.lastModifiedDate = e.lastModifiedDate), (i.name = t), i;
    },
    xd = (e) => qn(e, e.name),
    on = [],
    Dd = (e) => {
        if (on.includes(e)) return;
        on.push(e);
        let t = e({
            addFilter: xl,
            utils: {
                Type: M,
                forin: Z,
                isString: de,
                isFile: ct,
                toNaturalFileSize: vn,
                replaceInString: Ld,
                getExtensionFromFilename: ai,
                getFilenameWithoutExtension: yn,
                guesstimateMimeType: Nn,
                getFileFromBlob: st,
                getFilenameFromURL: At,
                createRoute: ue,
                createWorker: Md,
                createView: te,
                createItemAPI: he,
                loadImage: Od,
                copyFile: xd,
                renameFile: qn,
                createBlob: bn,
                applyFilterChain: Se,
                text: J,
                getNumericAspectRatioFromString: gn,
            },
            views: { fileActionButton: wn },
        });
        Dl(t.options);
    },
    Pd = () => Object.prototype.toString.call(window.operamini) === '[object OperaMini]',
    Fd = () => 'Promise' in window,
    Cd = () => 'slice' in Blob.prototype,
    zd = () => 'URL' in window && 'createObjectURL' in window.URL,
    Nd = () => 'visibilityState' in document,
    Bd = () => 'performance' in window,
    Gd = () => 'supports' in (window.CSS || {}),
    Vd = () => /MSIE|Trident/.test(window.navigator.userAgent),
    Di = (() => {
        let e = ln() && !Pd() && Nd() && Fd() && Cd() && zd() && Bd() && (Gd() || Vd());
        return () => e;
    })(),
    Ce = { apps: [] },
    Ud = 'filepond',
    je = () => {},
    Xn = {},
    ut = {},
    Lt = {},
    Pi = {},
    ot = je,
    lt = je,
    Fi = je,
    Ci = je,
    Ee = je,
    zi = je,
    vt = je;
if (Di()) {
    cl(
        () => {
            Ce.apps.forEach((i) => i._read());
        },
        (i) => {
            Ce.apps.forEach((a) => a._write(i));
        },
    );
    let e = () => {
        document.dispatchEvent(
            new CustomEvent('FilePond:loaded', {
                detail: {
                    supported: Di,
                    create: ot,
                    destroy: lt,
                    parse: Fi,
                    find: Ci,
                    registerPlugin: Ee,
                    setOptions: vt,
                },
            }),
        ),
            document.removeEventListener('DOMContentLoaded', e);
    };
    document.readyState !== 'loading'
        ? setTimeout(() => e(), 0)
        : document.addEventListener('DOMContentLoaded', e);
    let t = () =>
        Z(Qt(), (i, a) => {
            Pi[i] = a[1];
        });
    (Xn = { ...En }),
        (Lt = { ...ae }),
        (ut = { ...H }),
        (Pi = {}),
        t(),
        (ot = (...i) => {
            let a = vd(...i);
            return a.on('destroy', lt), Ce.apps.push(a), rn(a);
        }),
        (lt = (i) => {
            let a = Ce.apps.findIndex((n) => n.isAttachedTo(i));
            return a >= 0 ? (Ce.apps.splice(a, 1)[0].restoreElement(), !0) : !1;
        }),
        (Fi = (i) =>
            Array.from(i.querySelectorAll(`.${Ud}`))
                .filter((r) => !Ce.apps.find((o) => o.isAttachedTo(r)))
                .map((r) => ot(r))),
        (Ci = (i) => {
            let a = Ce.apps.find((n) => n.isAttachedTo(i));
            return a ? rn(a) : null;
        }),
        (Ee = (...i) => {
            i.forEach(Dd), t();
        }),
        (zi = () => {
            let i = {};
            return (
                Z(Qt(), (a, n) => {
                    i[a] = n[0];
                }),
                i
            );
        }),
        (vt = (i) => (
            re(i) &&
                (Ce.apps.forEach((a) => {
                    a.setOptions(i);
                }),
                Pl(i)),
            zi()
        ));
}
function jn(e, t) {
    var i = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        t &&
            (a = a.filter(function (n) {
                return Object.getOwnPropertyDescriptor(e, n).enumerable;
            })),
            i.push.apply(i, a);
    }
    return i;
}
function ur(e) {
    for (var t = 1; t < arguments.length; t++) {
        var i = arguments[t] != null ? arguments[t] : {};
        t % 2
            ? jn(Object(i), !0).forEach(function (a) {
                  Wd(e, a, i[a]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i))
              : jn(Object(i)).forEach(function (a) {
                    Object.defineProperty(e, a, Object.getOwnPropertyDescriptor(i, a));
                });
    }
    return e;
}
function Ji(e) {
    '@babel/helpers - typeof';
    return (
        (Ji =
            typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
                ? function (t) {
                      return typeof t;
                  }
                : function (t) {
                      return t &&
                          typeof Symbol == 'function' &&
                          t.constructor === Symbol &&
                          t !== Symbol.prototype
                          ? 'symbol'
                          : typeof t;
                  }),
        Ji(e)
    );
}
function kd(e, t) {
    if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
}
function Qn(e, t) {
    for (var i = 0; i < t.length; i++) {
        var a = t[i];
        (a.enumerable = a.enumerable || !1),
            (a.configurable = !0),
            'value' in a && (a.writable = !0),
            Object.defineProperty(e, fr(a.key), a);
    }
}
function Hd(e, t, i) {
    return (
        t && Qn(e.prototype, t),
        i && Qn(e, i),
        Object.defineProperty(e, 'prototype', { writable: !1 }),
        e
    );
}
function Wd(e, t, i) {
    return (
        (t = fr(t)),
        t in e
            ? Object.defineProperty(e, t, {
                  value: i,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = i),
        e
    );
}
function hr(e) {
    return Yd(e) || $d(e) || qd(e) || Xd();
}
function Yd(e) {
    if (Array.isArray(e)) return ea(e);
}
function $d(e) {
    if ((typeof Symbol < 'u' && e[Symbol.iterator] != null) || e['@@iterator'] != null)
        return Array.from(e);
}
function qd(e, t) {
    if (e) {
        if (typeof e == 'string') return ea(e, t);
        var i = Object.prototype.toString.call(e).slice(8, -1);
        if (
            (i === 'Object' && e.constructor && (i = e.constructor.name),
            i === 'Map' || i === 'Set')
        )
            return Array.from(e);
        if (i === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))
            return ea(e, t);
    }
}
function ea(e, t) {
    (t == null || t > e.length) && (t = e.length);
    for (var i = 0, a = new Array(t); i < t; i++) a[i] = e[i];
    return a;
}
function Xd() {
    throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function jd(e, t) {
    if (typeof e != 'object' || e === null) return e;
    var i = e[Symbol.toPrimitive];
    if (i !== void 0) {
        var a = i.call(e, t || 'default');
        if (typeof a != 'object') return a;
        throw new TypeError('@@toPrimitive must return a primitive value.');
    }
    return (t === 'string' ? String : Number)(e);
}
function fr(e) {
    var t = jd(e, 'string');
    return typeof t == 'symbol' ? t : String(t);
}
var ci = typeof window < 'u' && typeof window.document < 'u',
    Me = ci ? window : {},
    ca = ci && Me.document.documentElement ? 'ontouchstart' in Me.document.documentElement : !1,
    da = ci ? 'PointerEvent' in Me : !1,
    j = 'cropper',
    ua = 'all',
    pr = 'crop',
    mr = 'move',
    gr = 'zoom',
    Qe = 'e',
    Ze = 'w',
    ht = 's',
    Ne = 'n',
    Mt = 'ne',
    Ot = 'nw',
    xt = 'se',
    Dt = 'sw',
    ta = ''.concat(j, '-crop'),
    Zn = ''.concat(j, '-disabled'),
    pe = ''.concat(j, '-hidden'),
    Kn = ''.concat(j, '-hide'),
    Qd = ''.concat(j, '-invisible'),
    si = ''.concat(j, '-modal'),
    ia = ''.concat(j, '-move'),
    Ft = ''.concat(j, 'Action'),
    oi = ''.concat(j, 'Preview'),
    ha = 'crop',
    Er = 'move',
    Tr = 'none',
    aa = 'crop',
    na = 'cropend',
    ra = 'cropmove',
    oa = 'cropstart',
    Jn = 'dblclick',
    Zd = ca ? 'touchstart' : 'mousedown',
    Kd = ca ? 'touchmove' : 'mousemove',
    Jd = ca ? 'touchend touchcancel' : 'mouseup',
    er = da ? 'pointerdown' : Zd,
    tr = da ? 'pointermove' : Kd,
    ir = da ? 'pointerup pointercancel' : Jd,
    ar = 'ready',
    nr = 'resize',
    rr = 'wheel',
    la = 'zoom',
    or = 'image/jpeg',
    eu = /^e|w|s|n|se|sw|ne|nw|all|crop|move|zoom$/,
    tu = /^data:/,
    iu = /^data:image\/jpeg;base64,/,
    au = /^img|canvas$/i,
    Ir = 200,
    br = 100,
    lr = {
        viewMode: 0,
        dragMode: ha,
        initialAspectRatio: NaN,
        aspectRatio: NaN,
        data: null,
        preview: '',
        responsive: !0,
        restore: !0,
        checkCrossOrigin: !0,
        checkOrientation: !0,
        modal: !0,
        guides: !0,
        center: !0,
        highlight: !0,
        background: !0,
        autoCrop: !0,
        autoCropArea: 0.8,
        movable: !0,
        rotatable: !0,
        scalable: !0,
        zoomable: !0,
        zoomOnTouch: !0,
        zoomOnWheel: !0,
        wheelZoomRatio: 0.1,
        cropBoxMovable: !0,
        cropBoxResizable: !0,
        toggleDragModeOnDblclick: !0,
        minCanvasWidth: 0,
        minCanvasHeight: 0,
        minCropBoxWidth: 0,
        minCropBoxHeight: 0,
        minContainerWidth: Ir,
        minContainerHeight: br,
        ready: null,
        cropstart: null,
        cropmove: null,
        cropend: null,
        crop: null,
        zoom: null,
    },
    nu =
        '<div class="cropper-container" touch-action="none"><div class="cropper-wrap-box"><div class="cropper-canvas"></div></div><div class="cropper-drag-box"></div><div class="cropper-crop-box"><span class="cropper-view-box"></span><span class="cropper-dashed dashed-h"></span><span class="cropper-dashed dashed-v"></span><span class="cropper-center"></span><span class="cropper-face"></span><span class="cropper-line line-e" data-cropper-action="e"></span><span class="cropper-line line-n" data-cropper-action="n"></span><span class="cropper-line line-w" data-cropper-action="w"></span><span class="cropper-line line-s" data-cropper-action="s"></span><span class="cropper-point point-e" data-cropper-action="e"></span><span class="cropper-point point-n" data-cropper-action="n"></span><span class="cropper-point point-w" data-cropper-action="w"></span><span class="cropper-point point-s" data-cropper-action="s"></span><span class="cropper-point point-ne" data-cropper-action="ne"></span><span class="cropper-point point-nw" data-cropper-action="nw"></span><span class="cropper-point point-sw" data-cropper-action="sw"></span><span class="cropper-point point-se" data-cropper-action="se"></span></div></div>',
    ru = Number.isNaN || Me.isNaN;
function Y(e) {
    return typeof e == 'number' && !ru(e);
}
var sr = function (t) {
    return t > 0 && t < 1 / 0;
};
function Zi(e) {
    return typeof e > 'u';
}
function Ke(e) {
    return Ji(e) === 'object' && e !== null;
}
var ou = Object.prototype.hasOwnProperty;
function ft(e) {
    if (!Ke(e)) return !1;
    try {
        var t = e.constructor,
            i = t.prototype;
        return t && i && ou.call(i, 'isPrototypeOf');
    } catch {
        return !1;
    }
}
function fe(e) {
    return typeof e == 'function';
}
var lu = Array.prototype.slice;
function _r(e) {
    return Array.from ? Array.from(e) : lu.call(e);
}
function ie(e, t) {
    return (
        e &&
            fe(t) &&
            (Array.isArray(e) || Y(e.length)
                ? _r(e).forEach(function (i, a) {
                      t.call(e, i, a, e);
                  })
                : Ke(e) &&
                  Object.keys(e).forEach(function (i) {
                      t.call(e, e[i], i, e);
                  })),
        e
    );
}
var Q =
        Object.assign ||
        function (t) {
            for (var i = arguments.length, a = new Array(i > 1 ? i - 1 : 0), n = 1; n < i; n++)
                a[n - 1] = arguments[n];
            return (
                Ke(t) &&
                    a.length > 0 &&
                    a.forEach(function (r) {
                        Ke(r) &&
                            Object.keys(r).forEach(function (o) {
                                t[o] = r[o];
                            });
                    }),
                t
            );
        },
    su = /\.\d*(?:0|9){12}\d*$/;
function mt(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1e11;
    return su.test(e) ? Math.round(e * t) / t : e;
}
var cu = /^width|height|left|top|marginLeft|marginTop$/;
function Be(e, t) {
    var i = e.style;
    ie(t, function (a, n) {
        cu.test(n) && Y(a) && (a = ''.concat(a, 'px')), (i[n] = a);
    });
}
function du(e, t) {
    return e.classList ? e.classList.contains(t) : e.className.indexOf(t) > -1;
}
function oe(e, t) {
    if (t) {
        if (Y(e.length)) {
            ie(e, function (a) {
                oe(a, t);
            });
            return;
        }
        if (e.classList) {
            e.classList.add(t);
            return;
        }
        var i = e.className.trim();
        i ? i.indexOf(t) < 0 && (e.className = ''.concat(i, ' ').concat(t)) : (e.className = t);
    }
}
function Le(e, t) {
    if (t) {
        if (Y(e.length)) {
            ie(e, function (i) {
                Le(i, t);
            });
            return;
        }
        if (e.classList) {
            e.classList.remove(t);
            return;
        }
        e.className.indexOf(t) >= 0 && (e.className = e.className.replace(t, ''));
    }
}
function pt(e, t, i) {
    if (t) {
        if (Y(e.length)) {
            ie(e, function (a) {
                pt(a, t, i);
            });
            return;
        }
        i ? oe(e, t) : Le(e, t);
    }
}
var uu = /([a-z\d])([A-Z])/g;
function fa(e) {
    return e.replace(uu, '$1-$2').toLowerCase();
}
function sa(e, t) {
    return Ke(e[t]) ? e[t] : e.dataset ? e.dataset[t] : e.getAttribute('data-'.concat(fa(t)));
}
function Ct(e, t, i) {
    Ke(i) ? (e[t] = i) : e.dataset ? (e.dataset[t] = i) : e.setAttribute('data-'.concat(fa(t)), i);
}
function hu(e, t) {
    if (Ke(e[t]))
        try {
            delete e[t];
        } catch {
            e[t] = void 0;
        }
    else if (e.dataset)
        try {
            delete e.dataset[t];
        } catch {
            e.dataset[t] = void 0;
        }
    else e.removeAttribute('data-'.concat(fa(t)));
}
var Rr = /\s\s*/,
    yr = (function () {
        var e = !1;
        if (ci) {
            var t = !1,
                i = function () {},
                a = Object.defineProperty({}, 'once', {
                    get: function () {
                        return (e = !0), t;
                    },
                    set: function (r) {
                        t = r;
                    },
                });
            Me.addEventListener('test', i, a), Me.removeEventListener('test', i, a);
        }
        return e;
    })();
function Ae(e, t, i) {
    var a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {},
        n = i;
    t.trim()
        .split(Rr)
        .forEach(function (r) {
            if (!yr) {
                var o = e.listeners;
                o &&
                    o[r] &&
                    o[r][i] &&
                    ((n = o[r][i]),
                    delete o[r][i],
                    Object.keys(o[r]).length === 0 && delete o[r],
                    Object.keys(o).length === 0 && delete e.listeners);
            }
            e.removeEventListener(r, n, a);
        });
}
function _e(e, t, i) {
    var a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {},
        n = i;
    t.trim()
        .split(Rr)
        .forEach(function (r) {
            if (a.once && !yr) {
                var o = e.listeners,
                    l = o === void 0 ? {} : o;
                (n = function () {
                    delete l[r][i], e.removeEventListener(r, n, a);
                    for (var u = arguments.length, c = new Array(u), d = 0; d < u; d++)
                        c[d] = arguments[d];
                    i.apply(e, c);
                }),
                    l[r] || (l[r] = {}),
                    l[r][i] && e.removeEventListener(r, l[r][i], a),
                    (l[r][i] = n),
                    (e.listeners = l);
            }
            e.addEventListener(r, n, a);
        });
}
function gt(e, t, i) {
    var a;
    return (
        fe(Event) && fe(CustomEvent)
            ? (a = new CustomEvent(t, {
                  detail: i,
                  bubbles: !0,
                  cancelable: !0,
              }))
            : ((a = document.createEvent('CustomEvent')), a.initCustomEvent(t, !0, !0, i)),
        e.dispatchEvent(a)
    );
}
function Sr(e) {
    var t = e.getBoundingClientRect();
    return {
        left: t.left + (window.pageXOffset - document.documentElement.clientLeft),
        top: t.top + (window.pageYOffset - document.documentElement.clientTop),
    };
}
var Ki = Me.location,
    fu = /^(\w+:)\/\/([^:/?#]*):?(\d*)/i;
function cr(e) {
    var t = e.match(fu);
    return t !== null && (t[1] !== Ki.protocol || t[2] !== Ki.hostname || t[3] !== Ki.port);
}
function dr(e) {
    var t = 'timestamp='.concat(new Date().getTime());
    return e + (e.indexOf('?') === -1 ? '?' : '&') + t;
}
function Pt(e) {
    var t = e.rotate,
        i = e.scaleX,
        a = e.scaleY,
        n = e.translateX,
        r = e.translateY,
        o = [];
    Y(n) && n !== 0 && o.push('translateX('.concat(n, 'px)')),
        Y(r) && r !== 0 && o.push('translateY('.concat(r, 'px)')),
        Y(t) && t !== 0 && o.push('rotate('.concat(t, 'deg)')),
        Y(i) && i !== 1 && o.push('scaleX('.concat(i, ')')),
        Y(a) && a !== 1 && o.push('scaleY('.concat(a, ')'));
    var l = o.length ? o.join(' ') : 'none';
    return { WebkitTransform: l, msTransform: l, transform: l };
}
function pu(e) {
    var t = ur({}, e),
        i = 0;
    return (
        ie(e, function (a, n) {
            delete t[n],
                ie(t, function (r) {
                    var o = Math.abs(a.startX - r.startX),
                        l = Math.abs(a.startY - r.startY),
                        s = Math.abs(a.endX - r.endX),
                        u = Math.abs(a.endY - r.endY),
                        c = Math.sqrt(o * o + l * l),
                        d = Math.sqrt(s * s + u * u),
                        h = (d - c) / c;
                    Math.abs(h) > Math.abs(i) && (i = h);
                });
        }),
        i
    );
}
function li(e, t) {
    var i = e.pageX,
        a = e.pageY,
        n = { endX: i, endY: a };
    return t ? n : ur({ startX: i, startY: a }, n);
}
function mu(e) {
    var t = 0,
        i = 0,
        a = 0;
    return (
        ie(e, function (n) {
            var r = n.startX,
                o = n.startY;
            (t += r), (i += o), (a += 1);
        }),
        (t /= a),
        (i /= a),
        { pageX: t, pageY: i }
    );
}
function Ge(e) {
    var t = e.aspectRatio,
        i = e.height,
        a = e.width,
        n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 'contain',
        r = sr(a),
        o = sr(i);
    if (r && o) {
        var l = i * t;
        (n === 'contain' && l > a) || (n === 'cover' && l < a) ? (i = a / t) : (a = i * t);
    } else r ? (i = a / t) : o && (a = i * t);
    return { width: a, height: i };
}
function gu(e) {
    var t = e.width,
        i = e.height,
        a = e.degree;
    if (((a = Math.abs(a) % 180), a === 90)) return { width: i, height: t };
    var n = ((a % 90) * Math.PI) / 180,
        r = Math.sin(n),
        o = Math.cos(n),
        l = t * o + i * r,
        s = t * r + i * o;
    return a > 90 ? { width: s, height: l } : { width: l, height: s };
}
function Eu(e, t, i, a) {
    var n = t.aspectRatio,
        r = t.naturalWidth,
        o = t.naturalHeight,
        l = t.rotate,
        s = l === void 0 ? 0 : l,
        u = t.scaleX,
        c = u === void 0 ? 1 : u,
        d = t.scaleY,
        h = d === void 0 ? 1 : d,
        f = i.aspectRatio,
        p = i.naturalWidth,
        m = i.naturalHeight,
        g = a.fillColor,
        b = g === void 0 ? 'transparent' : g,
        E = a.imageSmoothingEnabled,
        T = E === void 0 ? !0 : E,
        _ = a.imageSmoothingQuality,
        y = _ === void 0 ? 'low' : _,
        I = a.maxWidth,
        v = I === void 0 ? 1 / 0 : I,
        R = a.maxHeight,
        S = R === void 0 ? 1 / 0 : R,
        P = a.minWidth,
        x = P === void 0 ? 0 : P,
        O = a.minHeight,
        B = O === void 0 ? 0 : O,
        A = document.createElement('canvas'),
        C = A.getContext('2d'),
        w = Ge({ aspectRatio: f, width: v, height: S }),
        L = Ge({ aspectRatio: f, width: x, height: B }, 'cover'),
        N = Math.min(w.width, Math.max(L.width, p)),
        F = Math.min(w.height, Math.max(L.height, m)),
        V = Ge({ aspectRatio: n, width: v, height: S }),
        G = Ge({ aspectRatio: n, width: x, height: B }, 'cover'),
        $ = Math.min(V.width, Math.max(G.width, r)),
        q = Math.min(V.height, Math.max(G.height, o)),
        X = [-$ / 2, -q / 2, $, q];
    return (
        (A.width = mt(N)),
        (A.height = mt(F)),
        (C.fillStyle = b),
        C.fillRect(0, 0, N, F),
        C.save(),
        C.translate(N / 2, F / 2),
        C.rotate((s * Math.PI) / 180),
        C.scale(c, h),
        (C.imageSmoothingEnabled = T),
        (C.imageSmoothingQuality = y),
        C.drawImage.apply(
            C,
            [e].concat(
                hr(
                    X.map(function (le) {
                        return Math.floor(mt(le));
                    }),
                ),
            ),
        ),
        C.restore(),
        A
    );
}
var wr = String.fromCharCode;
function Tu(e, t, i) {
    var a = '';
    i += t;
    for (var n = t; n < i; n += 1) a += wr(e.getUint8(n));
    return a;
}
var Iu = /^data:.*,/;
function bu(e) {
    var t = e.replace(Iu, ''),
        i = atob(t),
        a = new ArrayBuffer(i.length),
        n = new Uint8Array(a);
    return (
        ie(n, function (r, o) {
            n[o] = i.charCodeAt(o);
        }),
        a
    );
}
function _u(e, t) {
    for (var i = [], a = 8192, n = new Uint8Array(e); n.length > 0; )
        i.push(wr.apply(null, _r(n.subarray(0, a)))), (n = n.subarray(a));
    return 'data:'.concat(t, ';base64,').concat(btoa(i.join('')));
}
function Ru(e) {
    var t = new DataView(e),
        i;
    try {
        var a, n, r;
        if (t.getUint8(0) === 255 && t.getUint8(1) === 216)
            for (var o = t.byteLength, l = 2; l + 1 < o; ) {
                if (t.getUint8(l) === 255 && t.getUint8(l + 1) === 225) {
                    n = l;
                    break;
                }
                l += 1;
            }
        if (n) {
            var s = n + 4,
                u = n + 10;
            if (Tu(t, s, 4) === 'Exif') {
                var c = t.getUint16(u);
                if (((a = c === 18761), (a || c === 19789) && t.getUint16(u + 2, a) === 42)) {
                    var d = t.getUint32(u + 4, a);
                    d >= 8 && (r = u + d);
                }
            }
        }
        if (r) {
            var h = t.getUint16(r, a),
                f,
                p;
            for (p = 0; p < h; p += 1)
                if (((f = r + p * 12 + 2), t.getUint16(f, a) === 274)) {
                    (f += 8), (i = t.getUint16(f, a)), t.setUint16(f, 1, a);
                    break;
                }
        }
    } catch {
        i = 1;
    }
    return i;
}
function yu(e) {
    var t = 0,
        i = 1,
        a = 1;
    switch (e) {
        case 2:
            i = -1;
            break;
        case 3:
            t = -180;
            break;
        case 4:
            a = -1;
            break;
        case 5:
            (t = 90), (a = -1);
            break;
        case 6:
            t = 90;
            break;
        case 7:
            (t = 90), (i = -1);
            break;
        case 8:
            t = -90;
            break;
    }
    return { rotate: t, scaleX: i, scaleY: a };
}
var Su = {
        render: function () {
            this.initContainer(),
                this.initCanvas(),
                this.initCropBox(),
                this.renderCanvas(),
                this.cropped && this.renderCropBox();
        },
        initContainer: function () {
            var t = this.element,
                i = this.options,
                a = this.container,
                n = this.cropper,
                r = Number(i.minContainerWidth),
                o = Number(i.minContainerHeight);
            oe(n, pe), Le(t, pe);
            var l = {
                width: Math.max(a.offsetWidth, r >= 0 ? r : Ir),
                height: Math.max(a.offsetHeight, o >= 0 ? o : br),
            };
            (this.containerData = l),
                Be(n, { width: l.width, height: l.height }),
                oe(t, pe),
                Le(n, pe);
        },
        initCanvas: function () {
            var t = this.containerData,
                i = this.imageData,
                a = this.options.viewMode,
                n = Math.abs(i.rotate) % 180 === 90,
                r = n ? i.naturalHeight : i.naturalWidth,
                o = n ? i.naturalWidth : i.naturalHeight,
                l = r / o,
                s = t.width,
                u = t.height;
            t.height * l > t.width
                ? a === 3
                    ? (s = t.height * l)
                    : (u = t.width / l)
                : a === 3
                  ? (u = t.width / l)
                  : (s = t.height * l);
            var c = {
                aspectRatio: l,
                naturalWidth: r,
                naturalHeight: o,
                width: s,
                height: u,
            };
            (this.canvasData = c),
                (this.limited = a === 1 || a === 2),
                this.limitCanvas(!0, !0),
                (c.width = Math.min(Math.max(c.width, c.minWidth), c.maxWidth)),
                (c.height = Math.min(Math.max(c.height, c.minHeight), c.maxHeight)),
                (c.left = (t.width - c.width) / 2),
                (c.top = (t.height - c.height) / 2),
                (c.oldLeft = c.left),
                (c.oldTop = c.top),
                (this.initialCanvasData = Q({}, c));
        },
        limitCanvas: function (t, i) {
            var a = this.options,
                n = this.containerData,
                r = this.canvasData,
                o = this.cropBoxData,
                l = a.viewMode,
                s = r.aspectRatio,
                u = this.cropped && o;
            if (t) {
                var c = Number(a.minCanvasWidth) || 0,
                    d = Number(a.minCanvasHeight) || 0;
                l > 1
                    ? ((c = Math.max(c, n.width)),
                      (d = Math.max(d, n.height)),
                      l === 3 && (d * s > c ? (c = d * s) : (d = c / s)))
                    : l > 0 &&
                      (c
                          ? (c = Math.max(c, u ? o.width : 0))
                          : d
                            ? (d = Math.max(d, u ? o.height : 0))
                            : u &&
                              ((c = o.width),
                              (d = o.height),
                              d * s > c ? (c = d * s) : (d = c / s)));
                var h = Ge({ aspectRatio: s, width: c, height: d });
                (c = h.width),
                    (d = h.height),
                    (r.minWidth = c),
                    (r.minHeight = d),
                    (r.maxWidth = 1 / 0),
                    (r.maxHeight = 1 / 0);
            }
            if (i)
                if (l > (u ? 0 : 1)) {
                    var f = n.width - r.width,
                        p = n.height - r.height;
                    (r.minLeft = Math.min(0, f)),
                        (r.minTop = Math.min(0, p)),
                        (r.maxLeft = Math.max(0, f)),
                        (r.maxTop = Math.max(0, p)),
                        u &&
                            this.limited &&
                            ((r.minLeft = Math.min(o.left, o.left + (o.width - r.width))),
                            (r.minTop = Math.min(o.top, o.top + (o.height - r.height))),
                            (r.maxLeft = o.left),
                            (r.maxTop = o.top),
                            l === 2 &&
                                (r.width >= n.width &&
                                    ((r.minLeft = Math.min(0, f)), (r.maxLeft = Math.max(0, f))),
                                r.height >= n.height &&
                                    ((r.minTop = Math.min(0, p)), (r.maxTop = Math.max(0, p)))));
                } else
                    (r.minLeft = -r.width),
                        (r.minTop = -r.height),
                        (r.maxLeft = n.width),
                        (r.maxTop = n.height);
        },
        renderCanvas: function (t, i) {
            var a = this.canvasData,
                n = this.imageData;
            if (i) {
                var r = gu({
                        width: n.naturalWidth * Math.abs(n.scaleX || 1),
                        height: n.naturalHeight * Math.abs(n.scaleY || 1),
                        degree: n.rotate || 0,
                    }),
                    o = r.width,
                    l = r.height,
                    s = a.width * (o / a.naturalWidth),
                    u = a.height * (l / a.naturalHeight);
                (a.left -= (s - a.width) / 2),
                    (a.top -= (u - a.height) / 2),
                    (a.width = s),
                    (a.height = u),
                    (a.aspectRatio = o / l),
                    (a.naturalWidth = o),
                    (a.naturalHeight = l),
                    this.limitCanvas(!0, !1);
            }
            (a.width > a.maxWidth || a.width < a.minWidth) && (a.left = a.oldLeft),
                (a.height > a.maxHeight || a.height < a.minHeight) && (a.top = a.oldTop),
                (a.width = Math.min(Math.max(a.width, a.minWidth), a.maxWidth)),
                (a.height = Math.min(Math.max(a.height, a.minHeight), a.maxHeight)),
                this.limitCanvas(!1, !0),
                (a.left = Math.min(Math.max(a.left, a.minLeft), a.maxLeft)),
                (a.top = Math.min(Math.max(a.top, a.minTop), a.maxTop)),
                (a.oldLeft = a.left),
                (a.oldTop = a.top),
                Be(
                    this.canvas,
                    Q(
                        { width: a.width, height: a.height },
                        Pt({ translateX: a.left, translateY: a.top }),
                    ),
                ),
                this.renderImage(t),
                this.cropped && this.limited && this.limitCropBox(!0, !0);
        },
        renderImage: function (t) {
            var i = this.canvasData,
                a = this.imageData,
                n = a.naturalWidth * (i.width / i.naturalWidth),
                r = a.naturalHeight * (i.height / i.naturalHeight);
            Q(a, {
                width: n,
                height: r,
                left: (i.width - n) / 2,
                top: (i.height - r) / 2,
            }),
                Be(
                    this.image,
                    Q(
                        { width: a.width, height: a.height },
                        Pt(Q({ translateX: a.left, translateY: a.top }, a)),
                    ),
                ),
                t && this.output();
        },
        initCropBox: function () {
            var t = this.options,
                i = this.canvasData,
                a = t.aspectRatio || t.initialAspectRatio,
                n = Number(t.autoCropArea) || 0.8,
                r = { width: i.width, height: i.height };
            a && (i.height * a > i.width ? (r.height = r.width / a) : (r.width = r.height * a)),
                (this.cropBoxData = r),
                this.limitCropBox(!0, !0),
                (r.width = Math.min(Math.max(r.width, r.minWidth), r.maxWidth)),
                (r.height = Math.min(Math.max(r.height, r.minHeight), r.maxHeight)),
                (r.width = Math.max(r.minWidth, r.width * n)),
                (r.height = Math.max(r.minHeight, r.height * n)),
                (r.left = i.left + (i.width - r.width) / 2),
                (r.top = i.top + (i.height - r.height) / 2),
                (r.oldLeft = r.left),
                (r.oldTop = r.top),
                (this.initialCropBoxData = Q({}, r));
        },
        limitCropBox: function (t, i) {
            var a = this.options,
                n = this.containerData,
                r = this.canvasData,
                o = this.cropBoxData,
                l = this.limited,
                s = a.aspectRatio;
            if (t) {
                var u = Number(a.minCropBoxWidth) || 0,
                    c = Number(a.minCropBoxHeight) || 0,
                    d = l
                        ? Math.min(n.width, r.width, r.width + r.left, n.width - r.left)
                        : n.width,
                    h = l
                        ? Math.min(n.height, r.height, r.height + r.top, n.height - r.top)
                        : n.height;
                (u = Math.min(u, n.width)),
                    (c = Math.min(c, n.height)),
                    s &&
                        (u && c
                            ? c * s > u
                                ? (c = u / s)
                                : (u = c * s)
                            : u
                              ? (c = u / s)
                              : c && (u = c * s),
                        h * s > d ? (h = d / s) : (d = h * s)),
                    (o.minWidth = Math.min(u, d)),
                    (o.minHeight = Math.min(c, h)),
                    (o.maxWidth = d),
                    (o.maxHeight = h);
            }
            i &&
                (l
                    ? ((o.minLeft = Math.max(0, r.left)),
                      (o.minTop = Math.max(0, r.top)),
                      (o.maxLeft = Math.min(n.width, r.left + r.width) - o.width),
                      (o.maxTop = Math.min(n.height, r.top + r.height) - o.height))
                    : ((o.minLeft = 0),
                      (o.minTop = 0),
                      (o.maxLeft = n.width - o.width),
                      (o.maxTop = n.height - o.height)));
        },
        renderCropBox: function () {
            var t = this.options,
                i = this.containerData,
                a = this.cropBoxData;
            (a.width > a.maxWidth || a.width < a.minWidth) && (a.left = a.oldLeft),
                (a.height > a.maxHeight || a.height < a.minHeight) && (a.top = a.oldTop),
                (a.width = Math.min(Math.max(a.width, a.minWidth), a.maxWidth)),
                (a.height = Math.min(Math.max(a.height, a.minHeight), a.maxHeight)),
                this.limitCropBox(!1, !0),
                (a.left = Math.min(Math.max(a.left, a.minLeft), a.maxLeft)),
                (a.top = Math.min(Math.max(a.top, a.minTop), a.maxTop)),
                (a.oldLeft = a.left),
                (a.oldTop = a.top),
                t.movable &&
                    t.cropBoxMovable &&
                    Ct(this.face, Ft, a.width >= i.width && a.height >= i.height ? mr : ua),
                Be(
                    this.cropBox,
                    Q(
                        { width: a.width, height: a.height },
                        Pt({ translateX: a.left, translateY: a.top }),
                    ),
                ),
                this.cropped && this.limited && this.limitCanvas(!0, !0),
                this.disabled || this.output();
        },
        output: function () {
            this.preview(), gt(this.element, aa, this.getData());
        },
    },
    wu = {
        initPreview: function () {
            var t = this.element,
                i = this.crossOrigin,
                a = this.options.preview,
                n = i ? this.crossOriginUrl : this.url,
                r = t.alt || 'The image to preview',
                o = document.createElement('img');
            if (
                (i && (o.crossOrigin = i),
                (o.src = n),
                (o.alt = r),
                this.viewBox.appendChild(o),
                (this.viewBoxImage = o),
                !!a)
            ) {
                var l = a;
                typeof a == 'string'
                    ? (l = t.ownerDocument.querySelectorAll(a))
                    : a.querySelector && (l = [a]),
                    (this.previews = l),
                    ie(l, function (s) {
                        var u = document.createElement('img');
                        Ct(s, oi, {
                            width: s.offsetWidth,
                            height: s.offsetHeight,
                            html: s.innerHTML,
                        }),
                            i && (u.crossOrigin = i),
                            (u.src = n),
                            (u.alt = r),
                            (u.style.cssText =
                                'display:block;width:100%;height:auto;min-width:0!important;min-height:0!important;max-width:none!important;max-height:none!important;image-orientation:0deg!important;"'),
                            (s.innerHTML = ''),
                            s.appendChild(u);
                    });
            }
        },
        resetPreview: function () {
            ie(this.previews, function (t) {
                var i = sa(t, oi);
                Be(t, { width: i.width, height: i.height }), (t.innerHTML = i.html), hu(t, oi);
            });
        },
        preview: function () {
            var t = this.imageData,
                i = this.canvasData,
                a = this.cropBoxData,
                n = a.width,
                r = a.height,
                o = t.width,
                l = t.height,
                s = a.left - i.left - t.left,
                u = a.top - i.top - t.top;
            !this.cropped ||
                this.disabled ||
                (Be(
                    this.viewBoxImage,
                    Q({ width: o, height: l }, Pt(Q({ translateX: -s, translateY: -u }, t))),
                ),
                ie(this.previews, function (c) {
                    var d = sa(c, oi),
                        h = d.width,
                        f = d.height,
                        p = h,
                        m = f,
                        g = 1;
                    n && ((g = h / n), (m = r * g)),
                        r && m > f && ((g = f / r), (p = n * g), (m = f)),
                        Be(c, { width: p, height: m }),
                        Be(
                            c.getElementsByTagName('img')[0],
                            Q(
                                { width: o * g, height: l * g },
                                Pt(
                                    Q(
                                        {
                                            translateX: -s * g,
                                            translateY: -u * g,
                                        },
                                        t,
                                    ),
                                ),
                            ),
                        );
                }));
        },
    },
    vu = {
        bind: function () {
            var t = this.element,
                i = this.options,
                a = this.cropper;
            fe(i.cropstart) && _e(t, oa, i.cropstart),
                fe(i.cropmove) && _e(t, ra, i.cropmove),
                fe(i.cropend) && _e(t, na, i.cropend),
                fe(i.crop) && _e(t, aa, i.crop),
                fe(i.zoom) && _e(t, la, i.zoom),
                _e(a, er, (this.onCropStart = this.cropStart.bind(this))),
                i.zoomable &&
                    i.zoomOnWheel &&
                    _e(a, rr, (this.onWheel = this.wheel.bind(this)), {
                        passive: !1,
                        capture: !0,
                    }),
                i.toggleDragModeOnDblclick &&
                    _e(a, Jn, (this.onDblclick = this.dblclick.bind(this))),
                _e(t.ownerDocument, tr, (this.onCropMove = this.cropMove.bind(this))),
                _e(t.ownerDocument, ir, (this.onCropEnd = this.cropEnd.bind(this))),
                i.responsive && _e(window, nr, (this.onResize = this.resize.bind(this)));
        },
        unbind: function () {
            var t = this.element,
                i = this.options,
                a = this.cropper;
            fe(i.cropstart) && Ae(t, oa, i.cropstart),
                fe(i.cropmove) && Ae(t, ra, i.cropmove),
                fe(i.cropend) && Ae(t, na, i.cropend),
                fe(i.crop) && Ae(t, aa, i.crop),
                fe(i.zoom) && Ae(t, la, i.zoom),
                Ae(a, er, this.onCropStart),
                i.zoomable &&
                    i.zoomOnWheel &&
                    Ae(a, rr, this.onWheel, { passive: !1, capture: !0 }),
                i.toggleDragModeOnDblclick && Ae(a, Jn, this.onDblclick),
                Ae(t.ownerDocument, tr, this.onCropMove),
                Ae(t.ownerDocument, ir, this.onCropEnd),
                i.responsive && Ae(window, nr, this.onResize);
        },
    },
    Au = {
        resize: function () {
            if (!this.disabled) {
                var t = this.options,
                    i = this.container,
                    a = this.containerData,
                    n = i.offsetWidth / a.width,
                    r = i.offsetHeight / a.height,
                    o = Math.abs(n - 1) > Math.abs(r - 1) ? n : r;
                if (o !== 1) {
                    var l, s;
                    t.restore && ((l = this.getCanvasData()), (s = this.getCropBoxData())),
                        this.render(),
                        t.restore &&
                            (this.setCanvasData(
                                ie(l, function (u, c) {
                                    l[c] = u * o;
                                }),
                            ),
                            this.setCropBoxData(
                                ie(s, function (u, c) {
                                    s[c] = u * o;
                                }),
                            ));
                }
            }
        },
        dblclick: function () {
            this.disabled ||
                this.options.dragMode === Tr ||
                this.setDragMode(du(this.dragBox, ta) ? Er : ha);
        },
        wheel: function (t) {
            var i = this,
                a = Number(this.options.wheelZoomRatio) || 0.1,
                n = 1;
            this.disabled ||
                (t.preventDefault(),
                !this.wheeling &&
                    ((this.wheeling = !0),
                    setTimeout(function () {
                        i.wheeling = !1;
                    }, 50),
                    t.deltaY
                        ? (n = t.deltaY > 0 ? 1 : -1)
                        : t.wheelDelta
                          ? (n = -t.wheelDelta / 120)
                          : t.detail && (n = t.detail > 0 ? 1 : -1),
                    this.zoom(-n * a, t)));
        },
        cropStart: function (t) {
            var i = t.buttons,
                a = t.button;
            if (
                !(
                    this.disabled ||
                    ((t.type === 'mousedown' ||
                        (t.type === 'pointerdown' && t.pointerType === 'mouse')) &&
                        ((Y(i) && i !== 1) || (Y(a) && a !== 0) || t.ctrlKey))
                )
            ) {
                var n = this.options,
                    r = this.pointers,
                    o;
                t.changedTouches
                    ? ie(t.changedTouches, function (l) {
                          r[l.identifier] = li(l);
                      })
                    : (r[t.pointerId || 0] = li(t)),
                    Object.keys(r).length > 1 && n.zoomable && n.zoomOnTouch
                        ? (o = gr)
                        : (o = sa(t.target, Ft)),
                    eu.test(o) &&
                        gt(this.element, oa, {
                            originalEvent: t,
                            action: o,
                        }) !== !1 &&
                        (t.preventDefault(),
                        (this.action = o),
                        (this.cropping = !1),
                        o === pr && ((this.cropping = !0), oe(this.dragBox, si)));
            }
        },
        cropMove: function (t) {
            var i = this.action;
            if (!(this.disabled || !i)) {
                var a = this.pointers;
                t.preventDefault(),
                    gt(this.element, ra, { originalEvent: t, action: i }) !== !1 &&
                        (t.changedTouches
                            ? ie(t.changedTouches, function (n) {
                                  Q(a[n.identifier] || {}, li(n, !0));
                              })
                            : Q(a[t.pointerId || 0] || {}, li(t, !0)),
                        this.change(t));
            }
        },
        cropEnd: function (t) {
            if (!this.disabled) {
                var i = this.action,
                    a = this.pointers;
                t.changedTouches
                    ? ie(t.changedTouches, function (n) {
                          delete a[n.identifier];
                      })
                    : delete a[t.pointerId || 0],
                    i &&
                        (t.preventDefault(),
                        Object.keys(a).length || (this.action = ''),
                        this.cropping &&
                            ((this.cropping = !1),
                            pt(this.dragBox, si, this.cropped && this.options.modal)),
                        gt(this.element, na, { originalEvent: t, action: i }));
            }
        },
    },
    Lu = {
        change: function (t) {
            var i = this.options,
                a = this.canvasData,
                n = this.containerData,
                r = this.cropBoxData,
                o = this.pointers,
                l = this.action,
                s = i.aspectRatio,
                u = r.left,
                c = r.top,
                d = r.width,
                h = r.height,
                f = u + d,
                p = c + h,
                m = 0,
                g = 0,
                b = n.width,
                E = n.height,
                T = !0,
                _;
            !s && t.shiftKey && (s = d && h ? d / h : 1),
                this.limited &&
                    ((m = r.minLeft),
                    (g = r.minTop),
                    (b = m + Math.min(n.width, a.width, a.left + a.width)),
                    (E = g + Math.min(n.height, a.height, a.top + a.height)));
            var y = o[Object.keys(o)[0]],
                I = { x: y.endX - y.startX, y: y.endY - y.startY },
                v = function (S) {
                    switch (S) {
                        case Qe:
                            f + I.x > b && (I.x = b - f);
                            break;
                        case Ze:
                            u + I.x < m && (I.x = m - u);
                            break;
                        case Ne:
                            c + I.y < g && (I.y = g - c);
                            break;
                        case ht:
                            p + I.y > E && (I.y = E - p);
                            break;
                    }
                };
            switch (l) {
                case ua:
                    (u += I.x), (c += I.y);
                    break;
                case Qe:
                    if (I.x >= 0 && (f >= b || (s && (c <= g || p >= E)))) {
                        T = !1;
                        break;
                    }
                    v(Qe),
                        (d += I.x),
                        d < 0 && ((l = Ze), (d = -d), (u -= d)),
                        s && ((h = d / s), (c += (r.height - h) / 2));
                    break;
                case Ne:
                    if (I.y <= 0 && (c <= g || (s && (u <= m || f >= b)))) {
                        T = !1;
                        break;
                    }
                    v(Ne),
                        (h -= I.y),
                        (c += I.y),
                        h < 0 && ((l = ht), (h = -h), (c -= h)),
                        s && ((d = h * s), (u += (r.width - d) / 2));
                    break;
                case Ze:
                    if (I.x <= 0 && (u <= m || (s && (c <= g || p >= E)))) {
                        T = !1;
                        break;
                    }
                    v(Ze),
                        (d -= I.x),
                        (u += I.x),
                        d < 0 && ((l = Qe), (d = -d), (u -= d)),
                        s && ((h = d / s), (c += (r.height - h) / 2));
                    break;
                case ht:
                    if (I.y >= 0 && (p >= E || (s && (u <= m || f >= b)))) {
                        T = !1;
                        break;
                    }
                    v(ht),
                        (h += I.y),
                        h < 0 && ((l = Ne), (h = -h), (c -= h)),
                        s && ((d = h * s), (u += (r.width - d) / 2));
                    break;
                case Mt:
                    if (s) {
                        if (I.y <= 0 && (c <= g || f >= b)) {
                            T = !1;
                            break;
                        }
                        v(Ne), (h -= I.y), (c += I.y), (d = h * s);
                    } else
                        v(Ne),
                            v(Qe),
                            I.x >= 0
                                ? f < b
                                    ? (d += I.x)
                                    : I.y <= 0 && c <= g && (T = !1)
                                : (d += I.x),
                            I.y <= 0 ? c > g && ((h -= I.y), (c += I.y)) : ((h -= I.y), (c += I.y));
                    d < 0 && h < 0
                        ? ((l = Dt), (h = -h), (d = -d), (c -= h), (u -= d))
                        : d < 0
                          ? ((l = Ot), (d = -d), (u -= d))
                          : h < 0 && ((l = xt), (h = -h), (c -= h));
                    break;
                case Ot:
                    if (s) {
                        if (I.y <= 0 && (c <= g || u <= m)) {
                            T = !1;
                            break;
                        }
                        v(Ne), (h -= I.y), (c += I.y), (d = h * s), (u += r.width - d);
                    } else
                        v(Ne),
                            v(Ze),
                            I.x <= 0
                                ? u > m
                                    ? ((d -= I.x), (u += I.x))
                                    : I.y <= 0 && c <= g && (T = !1)
                                : ((d -= I.x), (u += I.x)),
                            I.y <= 0 ? c > g && ((h -= I.y), (c += I.y)) : ((h -= I.y), (c += I.y));
                    d < 0 && h < 0
                        ? ((l = xt), (h = -h), (d = -d), (c -= h), (u -= d))
                        : d < 0
                          ? ((l = Mt), (d = -d), (u -= d))
                          : h < 0 && ((l = Dt), (h = -h), (c -= h));
                    break;
                case Dt:
                    if (s) {
                        if (I.x <= 0 && (u <= m || p >= E)) {
                            T = !1;
                            break;
                        }
                        v(Ze), (d -= I.x), (u += I.x), (h = d / s);
                    } else
                        v(ht),
                            v(Ze),
                            I.x <= 0
                                ? u > m
                                    ? ((d -= I.x), (u += I.x))
                                    : I.y >= 0 && p >= E && (T = !1)
                                : ((d -= I.x), (u += I.x)),
                            I.y >= 0 ? p < E && (h += I.y) : (h += I.y);
                    d < 0 && h < 0
                        ? ((l = Mt), (h = -h), (d = -d), (c -= h), (u -= d))
                        : d < 0
                          ? ((l = xt), (d = -d), (u -= d))
                          : h < 0 && ((l = Ot), (h = -h), (c -= h));
                    break;
                case xt:
                    if (s) {
                        if (I.x >= 0 && (f >= b || p >= E)) {
                            T = !1;
                            break;
                        }
                        v(Qe), (d += I.x), (h = d / s);
                    } else
                        v(ht),
                            v(Qe),
                            I.x >= 0
                                ? f < b
                                    ? (d += I.x)
                                    : I.y >= 0 && p >= E && (T = !1)
                                : (d += I.x),
                            I.y >= 0 ? p < E && (h += I.y) : (h += I.y);
                    d < 0 && h < 0
                        ? ((l = Ot), (h = -h), (d = -d), (c -= h), (u -= d))
                        : d < 0
                          ? ((l = Dt), (d = -d), (u -= d))
                          : h < 0 && ((l = Mt), (h = -h), (c -= h));
                    break;
                case mr:
                    this.move(I.x, I.y), (T = !1);
                    break;
                case gr:
                    this.zoom(pu(o), t), (T = !1);
                    break;
                case pr:
                    if (!I.x || !I.y) {
                        T = !1;
                        break;
                    }
                    (_ = Sr(this.cropper)),
                        (u = y.startX - _.left),
                        (c = y.startY - _.top),
                        (d = r.minWidth),
                        (h = r.minHeight),
                        I.x > 0
                            ? (l = I.y > 0 ? xt : Mt)
                            : I.x < 0 && ((u -= d), (l = I.y > 0 ? Dt : Ot)),
                        I.y < 0 && (c -= h),
                        this.cropped ||
                            (Le(this.cropBox, pe),
                            (this.cropped = !0),
                            this.limited && this.limitCropBox(!0, !0));
                    break;
            }
            T &&
                ((r.width = d),
                (r.height = h),
                (r.left = u),
                (r.top = c),
                (this.action = l),
                this.renderCropBox()),
                ie(o, function (R) {
                    (R.startX = R.endX), (R.startY = R.endY);
                });
        },
    },
    Mu = {
        crop: function () {
            return (
                this.ready &&
                    !this.cropped &&
                    !this.disabled &&
                    ((this.cropped = !0),
                    this.limitCropBox(!0, !0),
                    this.options.modal && oe(this.dragBox, si),
                    Le(this.cropBox, pe),
                    this.setCropBoxData(this.initialCropBoxData)),
                this
            );
        },
        reset: function () {
            return (
                this.ready &&
                    !this.disabled &&
                    ((this.imageData = Q({}, this.initialImageData)),
                    (this.canvasData = Q({}, this.initialCanvasData)),
                    (this.cropBoxData = Q({}, this.initialCropBoxData)),
                    this.renderCanvas(),
                    this.cropped && this.renderCropBox()),
                this
            );
        },
        clear: function () {
            return (
                this.cropped &&
                    !this.disabled &&
                    (Q(this.cropBoxData, {
                        left: 0,
                        top: 0,
                        width: 0,
                        height: 0,
                    }),
                    (this.cropped = !1),
                    this.renderCropBox(),
                    this.limitCanvas(!0, !0),
                    this.renderCanvas(),
                    Le(this.dragBox, si),
                    oe(this.cropBox, pe)),
                this
            );
        },
        replace: function (t) {
            var i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
            return (
                !this.disabled &&
                    t &&
                    (this.isImg && (this.element.src = t),
                    i
                        ? ((this.url = t),
                          (this.image.src = t),
                          this.ready &&
                              ((this.viewBoxImage.src = t),
                              ie(this.previews, function (a) {
                                  a.getElementsByTagName('img')[0].src = t;
                              })))
                        : (this.isImg && (this.replaced = !0),
                          (this.options.data = null),
                          this.uncreate(),
                          this.load(t))),
                this
            );
        },
        enable: function () {
            return (
                this.ready && this.disabled && ((this.disabled = !1), Le(this.cropper, Zn)), this
            );
        },
        disable: function () {
            return (
                this.ready && !this.disabled && ((this.disabled = !0), oe(this.cropper, Zn)), this
            );
        },
        destroy: function () {
            var t = this.element;
            return t[j]
                ? ((t[j] = void 0),
                  this.isImg && this.replaced && (t.src = this.originalUrl),
                  this.uncreate(),
                  this)
                : this;
        },
        move: function (t) {
            var i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : t,
                a = this.canvasData,
                n = a.left,
                r = a.top;
            return this.moveTo(Zi(t) ? t : n + Number(t), Zi(i) ? i : r + Number(i));
        },
        moveTo: function (t) {
            var i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : t,
                a = this.canvasData,
                n = !1;
            return (
                (t = Number(t)),
                (i = Number(i)),
                this.ready &&
                    !this.disabled &&
                    this.options.movable &&
                    (Y(t) && ((a.left = t), (n = !0)),
                    Y(i) && ((a.top = i), (n = !0)),
                    n && this.renderCanvas(!0)),
                this
            );
        },
        zoom: function (t, i) {
            var a = this.canvasData;
            return (
                (t = Number(t)),
                t < 0 ? (t = 1 / (1 - t)) : (t = 1 + t),
                this.zoomTo((a.width * t) / a.naturalWidth, null, i)
            );
        },
        zoomTo: function (t, i, a) {
            var n = this.options,
                r = this.canvasData,
                o = r.width,
                l = r.height,
                s = r.naturalWidth,
                u = r.naturalHeight;
            if (((t = Number(t)), t >= 0 && this.ready && !this.disabled && n.zoomable)) {
                var c = s * t,
                    d = u * t;
                if (
                    gt(this.element, la, {
                        ratio: t,
                        oldRatio: o / s,
                        originalEvent: a,
                    }) === !1
                )
                    return this;
                if (a) {
                    var h = this.pointers,
                        f = Sr(this.cropper),
                        p = h && Object.keys(h).length ? mu(h) : { pageX: a.pageX, pageY: a.pageY };
                    (r.left -= (c - o) * ((p.pageX - f.left - r.left) / o)),
                        (r.top -= (d - l) * ((p.pageY - f.top - r.top) / l));
                } else
                    ft(i) && Y(i.x) && Y(i.y)
                        ? ((r.left -= (c - o) * ((i.x - r.left) / o)),
                          (r.top -= (d - l) * ((i.y - r.top) / l)))
                        : ((r.left -= (c - o) / 2), (r.top -= (d - l) / 2));
                (r.width = c), (r.height = d), this.renderCanvas(!0);
            }
            return this;
        },
        rotate: function (t) {
            return this.rotateTo((this.imageData.rotate || 0) + Number(t));
        },
        rotateTo: function (t) {
            return (
                (t = Number(t)),
                Y(t) &&
                    this.ready &&
                    !this.disabled &&
                    this.options.rotatable &&
                    ((this.imageData.rotate = t % 360), this.renderCanvas(!0, !0)),
                this
            );
        },
        scaleX: function (t) {
            var i = this.imageData.scaleY;
            return this.scale(t, Y(i) ? i : 1);
        },
        scaleY: function (t) {
            var i = this.imageData.scaleX;
            return this.scale(Y(i) ? i : 1, t);
        },
        scale: function (t) {
            var i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : t,
                a = this.imageData,
                n = !1;
            return (
                (t = Number(t)),
                (i = Number(i)),
                this.ready &&
                    !this.disabled &&
                    this.options.scalable &&
                    (Y(t) && ((a.scaleX = t), (n = !0)),
                    Y(i) && ((a.scaleY = i), (n = !0)),
                    n && this.renderCanvas(!0, !0)),
                this
            );
        },
        getData: function () {
            var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1,
                i = this.options,
                a = this.imageData,
                n = this.canvasData,
                r = this.cropBoxData,
                o;
            if (this.ready && this.cropped) {
                o = {
                    x: r.left - n.left,
                    y: r.top - n.top,
                    width: r.width,
                    height: r.height,
                };
                var l = a.width / a.naturalWidth;
                if (
                    (ie(o, function (c, d) {
                        o[d] = c / l;
                    }),
                    t)
                ) {
                    var s = Math.round(o.y + o.height),
                        u = Math.round(o.x + o.width);
                    (o.x = Math.round(o.x)),
                        (o.y = Math.round(o.y)),
                        (o.width = u - o.x),
                        (o.height = s - o.y);
                }
            } else o = { x: 0, y: 0, width: 0, height: 0 };
            return (
                i.rotatable && (o.rotate = a.rotate || 0),
                i.scalable && ((o.scaleX = a.scaleX || 1), (o.scaleY = a.scaleY || 1)),
                o
            );
        },
        setData: function (t) {
            var i = this.options,
                a = this.imageData,
                n = this.canvasData,
                r = {};
            if (this.ready && !this.disabled && ft(t)) {
                var o = !1;
                i.rotatable &&
                    Y(t.rotate) &&
                    t.rotate !== a.rotate &&
                    ((a.rotate = t.rotate), (o = !0)),
                    i.scalable &&
                        (Y(t.scaleX) && t.scaleX !== a.scaleX && ((a.scaleX = t.scaleX), (o = !0)),
                        Y(t.scaleY) && t.scaleY !== a.scaleY && ((a.scaleY = t.scaleY), (o = !0))),
                    o && this.renderCanvas(!0, !0);
                var l = a.width / a.naturalWidth;
                Y(t.x) && (r.left = t.x * l + n.left),
                    Y(t.y) && (r.top = t.y * l + n.top),
                    Y(t.width) && (r.width = t.width * l),
                    Y(t.height) && (r.height = t.height * l),
                    this.setCropBoxData(r);
            }
            return this;
        },
        getContainerData: function () {
            return this.ready ? Q({}, this.containerData) : {};
        },
        getImageData: function () {
            return this.sized ? Q({}, this.imageData) : {};
        },
        getCanvasData: function () {
            var t = this.canvasData,
                i = {};
            return (
                this.ready &&
                    ie(
                        ['left', 'top', 'width', 'height', 'naturalWidth', 'naturalHeight'],
                        function (a) {
                            i[a] = t[a];
                        },
                    ),
                i
            );
        },
        setCanvasData: function (t) {
            var i = this.canvasData,
                a = i.aspectRatio;
            return (
                this.ready &&
                    !this.disabled &&
                    ft(t) &&
                    (Y(t.left) && (i.left = t.left),
                    Y(t.top) && (i.top = t.top),
                    Y(t.width)
                        ? ((i.width = t.width), (i.height = t.width / a))
                        : Y(t.height) && ((i.height = t.height), (i.width = t.height * a)),
                    this.renderCanvas(!0)),
                this
            );
        },
        getCropBoxData: function () {
            var t = this.cropBoxData,
                i;
            return (
                this.ready &&
                    this.cropped &&
                    (i = {
                        left: t.left,
                        top: t.top,
                        width: t.width,
                        height: t.height,
                    }),
                i || {}
            );
        },
        setCropBoxData: function (t) {
            var i = this.cropBoxData,
                a = this.options.aspectRatio,
                n,
                r;
            return (
                this.ready &&
                    this.cropped &&
                    !this.disabled &&
                    ft(t) &&
                    (Y(t.left) && (i.left = t.left),
                    Y(t.top) && (i.top = t.top),
                    Y(t.width) && t.width !== i.width && ((n = !0), (i.width = t.width)),
                    Y(t.height) && t.height !== i.height && ((r = !0), (i.height = t.height)),
                    a && (n ? (i.height = i.width / a) : r && (i.width = i.height * a)),
                    this.renderCropBox()),
                this
            );
        },
        getCroppedCanvas: function () {
            var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
            if (!this.ready || !window.HTMLCanvasElement) return null;
            var i = this.canvasData,
                a = Eu(this.image, this.imageData, i, t);
            if (!this.cropped) return a;
            var n = this.getData(t.rounded),
                r = n.x,
                o = n.y,
                l = n.width,
                s = n.height,
                u = a.width / Math.floor(i.naturalWidth);
            u !== 1 && ((r *= u), (o *= u), (l *= u), (s *= u));
            var c = l / s,
                d = Ge({
                    aspectRatio: c,
                    width: t.maxWidth || 1 / 0,
                    height: t.maxHeight || 1 / 0,
                }),
                h = Ge(
                    {
                        aspectRatio: c,
                        width: t.minWidth || 0,
                        height: t.minHeight || 0,
                    },
                    'cover',
                ),
                f = Ge({
                    aspectRatio: c,
                    width: t.width || (u !== 1 ? a.width : l),
                    height: t.height || (u !== 1 ? a.height : s),
                }),
                p = f.width,
                m = f.height;
            (p = Math.min(d.width, Math.max(h.width, p))),
                (m = Math.min(d.height, Math.max(h.height, m)));
            var g = document.createElement('canvas'),
                b = g.getContext('2d');
            (g.width = mt(p)),
                (g.height = mt(m)),
                (b.fillStyle = t.fillColor || 'transparent'),
                b.fillRect(0, 0, p, m);
            var E = t.imageSmoothingEnabled,
                T = E === void 0 ? !0 : E,
                _ = t.imageSmoothingQuality;
            (b.imageSmoothingEnabled = T), _ && (b.imageSmoothingQuality = _);
            var y = a.width,
                I = a.height,
                v = r,
                R = o,
                S,
                P,
                x,
                O,
                B,
                A;
            v <= -l || v > y
                ? ((v = 0), (S = 0), (x = 0), (B = 0))
                : v <= 0
                  ? ((x = -v), (v = 0), (S = Math.min(y, l + v)), (B = S))
                  : v <= y && ((x = 0), (S = Math.min(l, y - v)), (B = S)),
                S <= 0 || R <= -s || R > I
                    ? ((R = 0), (P = 0), (O = 0), (A = 0))
                    : R <= 0
                      ? ((O = -R), (R = 0), (P = Math.min(I, s + R)), (A = P))
                      : R <= I && ((O = 0), (P = Math.min(s, I - R)), (A = P));
            var C = [v, R, S, P];
            if (B > 0 && A > 0) {
                var w = p / l;
                C.push(x * w, O * w, B * w, A * w);
            }
            return (
                b.drawImage.apply(
                    b,
                    [a].concat(
                        hr(
                            C.map(function (L) {
                                return Math.floor(mt(L));
                            }),
                        ),
                    ),
                ),
                g
            );
        },
        setAspectRatio: function (t) {
            var i = this.options;
            return (
                !this.disabled &&
                    !Zi(t) &&
                    ((i.aspectRatio = Math.max(0, t) || NaN),
                    this.ready && (this.initCropBox(), this.cropped && this.renderCropBox())),
                this
            );
        },
        setDragMode: function (t) {
            var i = this.options,
                a = this.dragBox,
                n = this.face;
            if (this.ready && !this.disabled) {
                var r = t === ha,
                    o = i.movable && t === Er;
                (t = r || o ? t : Tr),
                    (i.dragMode = t),
                    Ct(a, Ft, t),
                    pt(a, ta, r),
                    pt(a, ia, o),
                    i.cropBoxMovable || (Ct(n, Ft, t), pt(n, ta, r), pt(n, ia, o));
            }
            return this;
        },
    },
    Ou = Me.Cropper,
    pa = (function () {
        function e(t) {
            var i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
            if ((kd(this, e), !t || !au.test(t.tagName)))
                throw new Error(
                    'The first argument is required and must be an <img> or <canvas> element.',
                );
            (this.element = t),
                (this.options = Q({}, lr, ft(i) && i)),
                (this.cropped = !1),
                (this.disabled = !1),
                (this.pointers = {}),
                (this.ready = !1),
                (this.reloading = !1),
                (this.replaced = !1),
                (this.sized = !1),
                (this.sizing = !1),
                this.init();
        }
        return (
            Hd(
                e,
                [
                    {
                        key: 'init',
                        value: function () {
                            var i = this.element,
                                a = i.tagName.toLowerCase(),
                                n;
                            if (!i[j]) {
                                if (((i[j] = this), a === 'img')) {
                                    if (
                                        ((this.isImg = !0),
                                        (n = i.getAttribute('src') || ''),
                                        (this.originalUrl = n),
                                        !n)
                                    )
                                        return;
                                    n = i.src;
                                } else
                                    a === 'canvas' &&
                                        window.HTMLCanvasElement &&
                                        (n = i.toDataURL());
                                this.load(n);
                            }
                        },
                    },
                    {
                        key: 'load',
                        value: function (i) {
                            var a = this;
                            if (i) {
                                (this.url = i), (this.imageData = {});
                                var n = this.element,
                                    r = this.options;
                                if (
                                    (!r.rotatable && !r.scalable && (r.checkOrientation = !1),
                                    !r.checkOrientation || !window.ArrayBuffer)
                                ) {
                                    this.clone();
                                    return;
                                }
                                if (tu.test(i)) {
                                    iu.test(i) ? this.read(bu(i)) : this.clone();
                                    return;
                                }
                                var o = new XMLHttpRequest(),
                                    l = this.clone.bind(this);
                                (this.reloading = !0),
                                    (this.xhr = o),
                                    (o.onabort = l),
                                    (o.onerror = l),
                                    (o.ontimeout = l),
                                    (o.onprogress = function () {
                                        o.getResponseHeader('content-type') !== or && o.abort();
                                    }),
                                    (o.onload = function () {
                                        a.read(o.response);
                                    }),
                                    (o.onloadend = function () {
                                        (a.reloading = !1), (a.xhr = null);
                                    }),
                                    r.checkCrossOrigin && cr(i) && n.crossOrigin && (i = dr(i)),
                                    o.open('GET', i, !0),
                                    (o.responseType = 'arraybuffer'),
                                    (o.withCredentials = n.crossOrigin === 'use-credentials'),
                                    o.send();
                            }
                        },
                    },
                    {
                        key: 'read',
                        value: function (i) {
                            var a = this.options,
                                n = this.imageData,
                                r = Ru(i),
                                o = 0,
                                l = 1,
                                s = 1;
                            if (r > 1) {
                                this.url = _u(i, or);
                                var u = yu(r);
                                (o = u.rotate), (l = u.scaleX), (s = u.scaleY);
                            }
                            a.rotatable && (n.rotate = o),
                                a.scalable && ((n.scaleX = l), (n.scaleY = s)),
                                this.clone();
                        },
                    },
                    {
                        key: 'clone',
                        value: function () {
                            var i = this.element,
                                a = this.url,
                                n = i.crossOrigin,
                                r = a;
                            this.options.checkCrossOrigin &&
                                cr(a) &&
                                (n || (n = 'anonymous'), (r = dr(a))),
                                (this.crossOrigin = n),
                                (this.crossOriginUrl = r);
                            var o = document.createElement('img');
                            n && (o.crossOrigin = n),
                                (o.src = r || a),
                                (o.alt = i.alt || 'The image to crop'),
                                (this.image = o),
                                (o.onload = this.start.bind(this)),
                                (o.onerror = this.stop.bind(this)),
                                oe(o, Kn),
                                i.parentNode.insertBefore(o, i.nextSibling);
                        },
                    },
                    {
                        key: 'start',
                        value: function () {
                            var i = this,
                                a = this.image;
                            (a.onload = null), (a.onerror = null), (this.sizing = !0);
                            var n =
                                    Me.navigator &&
                                    /(?:iPad|iPhone|iPod).*?AppleWebKit/i.test(
                                        Me.navigator.userAgent,
                                    ),
                                r = function (u, c) {
                                    Q(i.imageData, {
                                        naturalWidth: u,
                                        naturalHeight: c,
                                        aspectRatio: u / c,
                                    }),
                                        (i.initialImageData = Q({}, i.imageData)),
                                        (i.sizing = !1),
                                        (i.sized = !0),
                                        i.build();
                                };
                            if (a.naturalWidth && !n) {
                                r(a.naturalWidth, a.naturalHeight);
                                return;
                            }
                            var o = document.createElement('img'),
                                l = document.body || document.documentElement;
                            (this.sizingImage = o),
                                (o.onload = function () {
                                    r(o.width, o.height), n || l.removeChild(o);
                                }),
                                (o.src = a.src),
                                n ||
                                    ((o.style.cssText =
                                        'left:0;max-height:none!important;max-width:none!important;min-height:0!important;min-width:0!important;opacity:0;position:absolute;top:0;z-index:-1;'),
                                    l.appendChild(o));
                        },
                    },
                    {
                        key: 'stop',
                        value: function () {
                            var i = this.image;
                            (i.onload = null),
                                (i.onerror = null),
                                i.parentNode.removeChild(i),
                                (this.image = null);
                        },
                    },
                    {
                        key: 'build',
                        value: function () {
                            if (!(!this.sized || this.ready)) {
                                var i = this.element,
                                    a = this.options,
                                    n = this.image,
                                    r = i.parentNode,
                                    o = document.createElement('div');
                                o.innerHTML = nu;
                                var l = o.querySelector('.'.concat(j, '-container')),
                                    s = l.querySelector('.'.concat(j, '-canvas')),
                                    u = l.querySelector('.'.concat(j, '-drag-box')),
                                    c = l.querySelector('.'.concat(j, '-crop-box')),
                                    d = c.querySelector('.'.concat(j, '-face'));
                                (this.container = r),
                                    (this.cropper = l),
                                    (this.canvas = s),
                                    (this.dragBox = u),
                                    (this.cropBox = c),
                                    (this.viewBox = l.querySelector('.'.concat(j, '-view-box'))),
                                    (this.face = d),
                                    s.appendChild(n),
                                    oe(i, pe),
                                    r.insertBefore(l, i.nextSibling),
                                    Le(n, Kn),
                                    this.initPreview(),
                                    this.bind(),
                                    (a.initialAspectRatio =
                                        Math.max(0, a.initialAspectRatio) || NaN),
                                    (a.aspectRatio = Math.max(0, a.aspectRatio) || NaN),
                                    (a.viewMode =
                                        Math.max(0, Math.min(3, Math.round(a.viewMode))) || 0),
                                    oe(c, pe),
                                    a.guides ||
                                        oe(c.getElementsByClassName(''.concat(j, '-dashed')), pe),
                                    a.center ||
                                        oe(c.getElementsByClassName(''.concat(j, '-center')), pe),
                                    a.background && oe(l, ''.concat(j, '-bg')),
                                    a.highlight || oe(d, Qd),
                                    a.cropBoxMovable && (oe(d, ia), Ct(d, Ft, ua)),
                                    a.cropBoxResizable ||
                                        (oe(c.getElementsByClassName(''.concat(j, '-line')), pe),
                                        oe(c.getElementsByClassName(''.concat(j, '-point')), pe)),
                                    this.render(),
                                    (this.ready = !0),
                                    this.setDragMode(a.dragMode),
                                    a.autoCrop && this.crop(),
                                    this.setData(a.data),
                                    fe(a.ready) && _e(i, ar, a.ready, { once: !0 }),
                                    gt(i, ar);
                            }
                        },
                    },
                    {
                        key: 'unbuild',
                        value: function () {
                            if (this.ready) {
                                (this.ready = !1), this.unbind(), this.resetPreview();
                                var i = this.cropper.parentNode;
                                i && i.removeChild(this.cropper), Le(this.element, pe);
                            }
                        },
                    },
                    {
                        key: 'uncreate',
                        value: function () {
                            this.ready
                                ? (this.unbuild(), (this.ready = !1), (this.cropped = !1))
                                : this.sizing
                                  ? ((this.sizingImage.onload = null),
                                    (this.sizing = !1),
                                    (this.sized = !1))
                                  : this.reloading
                                    ? ((this.xhr.onabort = null), this.xhr.abort())
                                    : this.image && this.stop();
                        },
                    },
                ],
                [
                    {
                        key: 'noConflict',
                        value: function () {
                            return (window.Cropper = Ou), e;
                        },
                    },
                    {
                        key: 'setDefaults',
                        value: function (i) {
                            Q(lr, ft(i) && i);
                        },
                    },
                ],
            ),
            e
        );
    })();
Q(pa.prototype, Su, wu, vu, Au, Lu, Mu);
var vr = ({ addFilter: e, utils: t }) => {
        let { Type: i, replaceInString: a, toNaturalFileSize: n } = t;
        return (
            e('ALLOW_HOPPER_ITEM', (r, { query: o }) => {
                if (!o('GET_ALLOW_FILE_SIZE_VALIDATION')) return !0;
                let l = o('GET_MAX_FILE_SIZE');
                if (l !== null && r.size > l) return !1;
                let s = o('GET_MIN_FILE_SIZE');
                return !(s !== null && r.size < s);
            }),
            e(
                'LOAD_FILE',
                (r, { query: o }) =>
                    new Promise((l, s) => {
                        if (!o('GET_ALLOW_FILE_SIZE_VALIDATION')) return l(r);
                        let u = o('GET_FILE_VALIDATE_SIZE_FILTER');
                        if (u && !u(r)) return l(r);
                        let c = o('GET_MAX_FILE_SIZE');
                        if (c !== null && r.size > c) {
                            s({
                                status: {
                                    main: o('GET_LABEL_MAX_FILE_SIZE_EXCEEDED'),
                                    sub: a(o('GET_LABEL_MAX_FILE_SIZE'), {
                                        filesize: n(
                                            c,
                                            '.',
                                            o('GET_FILE_SIZE_BASE'),
                                            o('GET_FILE_SIZE_LABELS', o),
                                        ),
                                    }),
                                },
                            });
                            return;
                        }
                        let d = o('GET_MIN_FILE_SIZE');
                        if (d !== null && r.size < d) {
                            s({
                                status: {
                                    main: o('GET_LABEL_MIN_FILE_SIZE_EXCEEDED'),
                                    sub: a(o('GET_LABEL_MIN_FILE_SIZE'), {
                                        filesize: n(
                                            d,
                                            '.',
                                            o('GET_FILE_SIZE_BASE'),
                                            o('GET_FILE_SIZE_LABELS', o),
                                        ),
                                    }),
                                },
                            });
                            return;
                        }
                        let h = o('GET_MAX_TOTAL_FILE_SIZE');
                        if (
                            h !== null &&
                            o('GET_ACTIVE_ITEMS').reduce((p, m) => p + m.fileSize, 0) > h
                        ) {
                            s({
                                status: {
                                    main: o('GET_LABEL_MAX_TOTAL_FILE_SIZE_EXCEEDED'),
                                    sub: a(o('GET_LABEL_MAX_TOTAL_FILE_SIZE'), {
                                        filesize: n(
                                            h,
                                            '.',
                                            o('GET_FILE_SIZE_BASE'),
                                            o('GET_FILE_SIZE_LABELS', o),
                                        ),
                                    }),
                                },
                            });
                            return;
                        }
                        l(r);
                    }),
            ),
            {
                options: {
                    allowFileSizeValidation: [!0, i.BOOLEAN],
                    maxFileSize: [null, i.INT],
                    minFileSize: [null, i.INT],
                    maxTotalFileSize: [null, i.INT],
                    fileValidateSizeFilter: [null, i.FUNCTION],
                    labelMinFileSizeExceeded: ['File is too small', i.STRING],
                    labelMinFileSize: ['Minimum file size is {filesize}', i.STRING],
                    labelMaxFileSizeExceeded: ['File is too large', i.STRING],
                    labelMaxFileSize: ['Maximum file size is {filesize}', i.STRING],
                    labelMaxTotalFileSizeExceeded: ['Maximum total size exceeded', i.STRING],
                    labelMaxTotalFileSize: ['Maximum total file size is {filesize}', i.STRING],
                },
            }
        );
    },
    xu = typeof window < 'u' && typeof window.document < 'u';
xu && document.dispatchEvent(new CustomEvent('FilePond:pluginloaded', { detail: vr }));
var Ar = vr;
var Lr = ({ addFilter: e, utils: t }) => {
        let {
                Type: i,
                isString: a,
                replaceInString: n,
                guesstimateMimeType: r,
                getExtensionFromFilename: o,
                getFilenameFromURL: l,
            } = t,
            s = (f, p) => {
                let m = (/^[^/]+/.exec(f) || []).pop(),
                    g = p.slice(0, -2);
                return m === g;
            },
            u = (f, p) => f.some((m) => (/\*$/.test(m) ? s(p, m) : m === p)),
            c = (f) => {
                let p = '';
                if (a(f)) {
                    let m = l(f),
                        g = o(m);
                    g && (p = r(g));
                } else p = f.type;
                return p;
            },
            d = (f, p, m) => {
                if (p.length === 0) return !0;
                let g = c(f);
                return m
                    ? new Promise((b, E) => {
                          m(f, g)
                              .then((T) => {
                                  u(p, T) ? b() : E();
                              })
                              .catch(E);
                      })
                    : u(p, g);
            },
            h = (f) => (p) => (f[p] === null ? !1 : f[p] || p);
        return (
            e('SET_ATTRIBUTE_TO_OPTION_MAP', (f) =>
                Object.assign(f, { accept: 'acceptedFileTypes' }),
            ),
            e('ALLOW_HOPPER_ITEM', (f, { query: p }) =>
                p('GET_ALLOW_FILE_TYPE_VALIDATION') ? d(f, p('GET_ACCEPTED_FILE_TYPES')) : !0,
            ),
            e(
                'LOAD_FILE',
                (f, { query: p }) =>
                    new Promise((m, g) => {
                        if (!p('GET_ALLOW_FILE_TYPE_VALIDATION')) {
                            m(f);
                            return;
                        }
                        let b = p('GET_ACCEPTED_FILE_TYPES'),
                            E = p('GET_FILE_VALIDATE_TYPE_DETECT_TYPE'),
                            T = d(f, b, E),
                            _ = () => {
                                let y = b
                                        .map(
                                            h(p('GET_FILE_VALIDATE_TYPE_LABEL_EXPECTED_TYPES_MAP')),
                                        )
                                        .filter((v) => v !== !1),
                                    I = y.filter(function (v, R) {
                                        return y.indexOf(v) === R;
                                    });
                                g({
                                    status: {
                                        main: p('GET_LABEL_FILE_TYPE_NOT_ALLOWED'),
                                        sub: n(p('GET_FILE_VALIDATE_TYPE_LABEL_EXPECTED_TYPES'), {
                                            allTypes: I.join(', '),
                                            allButLastType: I.slice(0, -1).join(', '),
                                            lastType: I[y.length - 1],
                                        }),
                                    },
                                });
                            };
                        if (typeof T == 'boolean') return T ? m(f) : _();
                        T.then(() => {
                            m(f);
                        }).catch(_);
                    }),
            ),
            {
                options: {
                    allowFileTypeValidation: [!0, i.BOOLEAN],
                    acceptedFileTypes: [[], i.ARRAY],
                    labelFileTypeNotAllowed: ['File is of invalid type', i.STRING],
                    fileValidateTypeLabelExpectedTypes: [
                        'Expects {allButLastType} or {lastType}',
                        i.STRING,
                    ],
                    fileValidateTypeLabelExpectedTypesMap: [{}, i.OBJECT],
                    fileValidateTypeDetectType: [null, i.FUNCTION],
                },
            }
        );
    },
    Du = typeof window < 'u' && typeof window.document < 'u';
Du && document.dispatchEvent(new CustomEvent('FilePond:pluginloaded', { detail: Lr }));
var Mr = Lr;
var Or = (e) => /^image/.test(e.type),
    xr = ({ addFilter: e, utils: t }) => {
        let { Type: i, isFile: a, getNumericAspectRatioFromString: n } = t,
            r = (u, c) => !(!Or(u.file) || !c('GET_ALLOW_IMAGE_CROP')),
            o = (u) => typeof u == 'object',
            l = (u) => typeof u == 'number',
            s = (u, c) => u.setMetadata('crop', Object.assign({}, u.getMetadata('crop'), c));
        return (
            e('DID_CREATE_ITEM', (u, { query: c }) => {
                u.extend('setImageCrop', (d) => {
                    if (!(!r(u, c) || !o(center))) return u.setMetadata('crop', d), d;
                }),
                    u.extend('setImageCropCenter', (d) => {
                        if (!(!r(u, c) || !o(d))) return s(u, { center: d });
                    }),
                    u.extend('setImageCropZoom', (d) => {
                        if (!(!r(u, c) || !l(d))) return s(u, { zoom: Math.max(1, d) });
                    }),
                    u.extend('setImageCropRotation', (d) => {
                        if (!(!r(u, c) || !l(d))) return s(u, { rotation: d });
                    }),
                    u.extend('setImageCropFlip', (d) => {
                        if (!(!r(u, c) || !o(d))) return s(u, { flip: d });
                    }),
                    u.extend('setImageCropAspectRatio', (d) => {
                        if (!r(u, c) || typeof d > 'u') return;
                        let h = u.getMetadata('crop'),
                            f = n(d),
                            p = {
                                center: { x: 0.5, y: 0.5 },
                                flip: h
                                    ? Object.assign({}, h.flip)
                                    : { horizontal: !1, vertical: !1 },
                                rotation: 0,
                                zoom: 1,
                                aspectRatio: f,
                            };
                        return u.setMetadata('crop', p), p;
                    });
            }),
            e(
                'DID_LOAD_ITEM',
                (u, { query: c }) =>
                    new Promise((d, h) => {
                        let f = u.file;
                        if (!a(f) || !Or(f) || !c('GET_ALLOW_IMAGE_CROP') || u.getMetadata('crop'))
                            return d(u);
                        let m = c('GET_IMAGE_CROP_ASPECT_RATIO');
                        u.setMetadata('crop', {
                            center: { x: 0.5, y: 0.5 },
                            flip: { horizontal: !1, vertical: !1 },
                            rotation: 0,
                            zoom: 1,
                            aspectRatio: m ? n(m) : null,
                        }),
                            d(u);
                    }),
            ),
            {
                options: {
                    allowImageCrop: [!0, i.BOOLEAN],
                    imageCropAspectRatio: [null, i.STRING],
                },
            }
        );
    },
    Pu = typeof window < 'u' && typeof window.document < 'u';
Pu && document.dispatchEvent(new CustomEvent('FilePond:pluginloaded', { detail: xr }));
var Dr = xr;
var ma = (e) => /^image/.test(e.type),
    Pr = (e) => {
        let { addFilter: t, utils: i, views: a } = e,
            { Type: n, createRoute: r, createItemAPI: o = (c) => c } = i,
            { fileActionButton: l } = a;
        t(
            'SHOULD_REMOVE_ON_REVERT',
            (c, { item: d, query: h }) =>
                new Promise((f) => {
                    let { file: p } = d,
                        m = h('GET_ALLOW_IMAGE_EDIT') && h('GET_IMAGE_EDIT_ALLOW_EDIT') && ma(p);
                    f(!m);
                }),
        ),
            t(
                'DID_LOAD_ITEM',
                (c, { query: d, dispatch: h }) =>
                    new Promise((f, p) => {
                        if (c.origin > 1) {
                            f(c);
                            return;
                        }
                        let { file: m } = c;
                        if (!d('GET_ALLOW_IMAGE_EDIT') || !d('GET_IMAGE_EDIT_INSTANT_EDIT')) {
                            f(c);
                            return;
                        }
                        if (!ma(m)) {
                            f(c);
                            return;
                        }
                        let g = (E, T, _) => (y) => {
                                s.shift(), y ? T(E) : _(E), h('KICK'), b();
                            },
                            b = () => {
                                if (!s.length) return;
                                let { item: E, resolve: T, reject: _ } = s[0];
                                h('EDIT_ITEM', {
                                    id: E.id,
                                    handleEditorResponse: g(E, T, _),
                                });
                            };
                        u({ item: c, resolve: f, reject: p }), s.length === 1 && b();
                    }),
            ),
            t('DID_CREATE_ITEM', (c, { query: d, dispatch: h }) => {
                c.extend('edit', () => {
                    h('EDIT_ITEM', { id: c.id });
                });
            });
        let s = [],
            u = (c) => (s.push(c), c);
        return (
            t('CREATE_VIEW', (c) => {
                let { is: d, view: h, query: f } = c;
                if (!f('GET_ALLOW_IMAGE_EDIT')) return;
                let p = f('GET_ALLOW_IMAGE_PREVIEW');
                if (!((d('file-info') && !p) || (d('file') && p))) return;
                let g = f('GET_IMAGE_EDIT_EDITOR');
                if (!g) return;
                g.filepondCallbackBridge ||
                    ((g.outputData = !0),
                    (g.outputFile = !1),
                    (g.filepondCallbackBridge = {
                        onconfirm: g.onconfirm || (() => {}),
                        oncancel: g.oncancel || (() => {}),
                    }));
                let b = ({ root: _, props: y, action: I }) => {
                        let { id: v } = y,
                            { handleEditorResponse: R } = I;
                        (g.cropAspectRatio =
                            _.query('GET_IMAGE_CROP_ASPECT_RATIO') || g.cropAspectRatio),
                            (g.outputCanvasBackgroundColor =
                                _.query('GET_IMAGE_TRANSFORM_CANVAS_BACKGROUND_COLOR') ||
                                g.outputCanvasBackgroundColor);
                        let S = _.query('GET_ITEM', v);
                        if (!S) return;
                        let P = S.file,
                            x = S.getMetadata('crop'),
                            O = {
                                center: { x: 0.5, y: 0.5 },
                                flip: { horizontal: !1, vertical: !1 },
                                zoom: 1,
                                rotation: 0,
                                aspectRatio: null,
                            },
                            B = S.getMetadata('resize'),
                            A = S.getMetadata('filter') || null,
                            C = S.getMetadata('filters') || null,
                            w = S.getMetadata('colors') || null,
                            L = S.getMetadata('markup') || null,
                            N = {
                                crop: x || O,
                                size: B
                                    ? {
                                          upscale: B.upscale,
                                          mode: B.mode,
                                          width: B.size.width,
                                          height: B.size.height,
                                      }
                                    : null,
                                filter: C
                                    ? C.id || C.matrix
                                    : _.query('GET_ALLOW_IMAGE_FILTER') &&
                                        _.query('GET_IMAGE_FILTER_COLOR_MATRIX') &&
                                        !w
                                      ? A
                                      : null,
                                color: w,
                                markup: L,
                            };
                        (g.onconfirm = ({ data: F }) => {
                            let {
                                    crop: V,
                                    size: G,
                                    filter: $,
                                    color: q,
                                    colorMatrix: X,
                                    markup: le,
                                } = F,
                                U = {};
                            if ((V && (U.crop = V), G)) {
                                let z = (S.getMetadata('resize') || {}).size,
                                    D = { width: G.width, height: G.height };
                                !(D.width && D.height) &&
                                    z &&
                                    ((D.width = z.width), (D.height = z.height)),
                                    (D.width || D.height) &&
                                        (U.resize = {
                                            upscale: G.upscale,
                                            mode: G.mode,
                                            size: D,
                                        });
                            }
                            le && (U.markup = le),
                                (U.colors = q),
                                (U.filters = $),
                                (U.filter = X),
                                S.setMetadata(U),
                                g.filepondCallbackBridge.onconfirm(F, o(S)),
                                R &&
                                    (g.onclose = () => {
                                        R(!0), (g.onclose = null);
                                    });
                        }),
                            (g.oncancel = () => {
                                g.filepondCallbackBridge.oncancel(o(S)),
                                    R &&
                                        (g.onclose = () => {
                                            R(!1), (g.onclose = null);
                                        });
                            }),
                            g.open(P, N);
                    },
                    E = ({ root: _, props: y }) => {
                        if (!f('GET_IMAGE_EDIT_ALLOW_EDIT')) return;
                        let { id: I } = y,
                            v = f('GET_ITEM', I);
                        if (!v) return;
                        let R = v.file;
                        if (ma(R))
                            if (
                                ((_.ref.handleEdit = (S) => {
                                    S.stopPropagation(), _.dispatch('EDIT_ITEM', { id: I });
                                }),
                                p)
                            ) {
                                let S = h.createChildView(l, {
                                    label: 'edit',
                                    icon: f('GET_IMAGE_EDIT_ICON_EDIT'),
                                    opacity: 0,
                                });
                                S.element.classList.add('filepond--action-edit-item'),
                                    (S.element.dataset.align = f(
                                        'GET_STYLE_IMAGE_EDIT_BUTTON_EDIT_ITEM_POSITION',
                                    )),
                                    S.on('click', _.ref.handleEdit),
                                    (_.ref.buttonEditItem = h.appendChildView(S));
                            } else {
                                let S = h.element.querySelector('.filepond--file-info-main'),
                                    P = document.createElement('button');
                                (P.className = 'filepond--action-edit-item-alt'),
                                    (P.innerHTML =
                                        f('GET_IMAGE_EDIT_ICON_EDIT') + '<span>edit</span>'),
                                    P.addEventListener('click', _.ref.handleEdit),
                                    S.appendChild(P),
                                    (_.ref.editButton = P);
                            }
                    };
                h.registerDestroyer(({ root: _ }) => {
                    _.ref.buttonEditItem && _.ref.buttonEditItem.off('click', _.ref.handleEdit),
                        _.ref.editButton &&
                            _.ref.editButton.removeEventListener('click', _.ref.handleEdit);
                });
                let T = { EDIT_ITEM: b, DID_LOAD_ITEM: E };
                if (p) {
                    let _ = ({ root: y }) => {
                        y.ref.buttonEditItem && (y.ref.buttonEditItem.opacity = 1);
                    };
                    T.DID_IMAGE_PREVIEW_SHOW = _;
                }
                h.registerWriter(r(T));
            }),
            {
                options: {
                    allowImageEdit: [!0, n.BOOLEAN],
                    styleImageEditButtonEditItemPosition: ['bottom center', n.STRING],
                    imageEditInstantEdit: [!1, n.BOOLEAN],
                    imageEditAllowEdit: [!0, n.BOOLEAN],
                    imageEditIconEdit: [
                        '<svg width="26" height="26" viewBox="0 0 26 26" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false"><path d="M8.5 17h1.586l7-7L15.5 8.414l-7 7V17zm-1.707-2.707l8-8a1 1 0 0 1 1.414 0l3 3a1 1 0 0 1 0 1.414l-8 8A1 1 0 0 1 10.5 19h-3a1 1 0 0 1-1-1v-3a1 1 0 0 1 .293-.707z" fill="currentColor" fill-rule="nonzero"/></svg>',
                        n.STRING,
                    ],
                    imageEditEditor: [null, n.OBJECT],
                },
            }
        );
    },
    Fu = typeof window < 'u' && typeof window.document < 'u';
Fu && document.dispatchEvent(new CustomEvent('FilePond:pluginloaded', { detail: Pr }));
var Fr = Pr;
var Cu = (e) => /^image\/jpeg/.test(e.type),
    Je = {
        JPEG: 65496,
        APP1: 65505,
        EXIF: 1165519206,
        TIFF: 18761,
        Orientation: 274,
        Unknown: 65280,
    },
    et = (e, t, i = !1) => e.getUint16(t, i),
    Cr = (e, t, i = !1) => e.getUint32(t, i),
    zu = (e) =>
        new Promise((t, i) => {
            let a = new FileReader();
            (a.onload = function (n) {
                let r = new DataView(n.target.result);
                if (et(r, 0) !== Je.JPEG) {
                    t(-1);
                    return;
                }
                let o = r.byteLength,
                    l = 2;
                for (; l < o; ) {
                    let s = et(r, l);
                    if (((l += 2), s === Je.APP1)) {
                        if (Cr(r, (l += 2)) !== Je.EXIF) break;
                        let u = et(r, (l += 6)) === Je.TIFF;
                        l += Cr(r, l + 4, u);
                        let c = et(r, l, u);
                        l += 2;
                        for (let d = 0; d < c; d++)
                            if (et(r, l + d * 12, u) === Je.Orientation) {
                                t(et(r, l + d * 12 + 8, u));
                                return;
                            }
                    } else {
                        if ((s & Je.Unknown) !== Je.Unknown) break;
                        l += et(r, l);
                    }
                }
                t(-1);
            }),
                a.readAsArrayBuffer(e.slice(0, 64 * 1024));
        }),
    Nu = (() => typeof window < 'u' && typeof window.document < 'u')(),
    Bu = () => Nu,
    Gu =
        'data:image/jpg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/4QA6RXhpZgAATU0AKgAAAAgAAwESAAMAAAABAAYAAAEoAAMAAAABAAIAAAITAAMAAAABAAEAAAAAAAD/2wBDAP//////////////////////////////////////////////////////////////////////////////////////wAALCAABAAIBASIA/8QAJgABAAAAAAAAAAAAAAAAAAAAAxABAAAAAAAAAAAAAAAAAAAAAP/aAAgBAQAAPwBH/9k=',
    zr,
    di = Bu() ? new Image() : {};
di.onload = () => (zr = di.naturalWidth > di.naturalHeight);
di.src = Gu;
var Vu = () => zr,
    Nr = ({ addFilter: e, utils: t }) => {
        let { Type: i, isFile: a } = t;
        return (
            e(
                'DID_LOAD_ITEM',
                (n, { query: r }) =>
                    new Promise((o, l) => {
                        let s = n.file;
                        if (!a(s) || !Cu(s) || !r('GET_ALLOW_IMAGE_EXIF_ORIENTATION') || !Vu())
                            return o(n);
                        zu(s).then((u) => {
                            n.setMetadata('exif', { orientation: u }), o(n);
                        });
                    }),
            ),
            { options: { allowImageExifOrientation: [!0, i.BOOLEAN] } }
        );
    },
    Uu = typeof window < 'u' && typeof window.document < 'u';
Uu && document.dispatchEvent(new CustomEvent('FilePond:pluginloaded', { detail: Nr }));
var Br = Nr;
var ku = (e) => /^image/.test(e.type),
    Gr = (e, t) => Nt(e.x * t, e.y * t),
    Vr = (e, t) => Nt(e.x + t.x, e.y + t.y),
    Hu = (e) => {
        let t = Math.sqrt(e.x * e.x + e.y * e.y);
        return t === 0 ? { x: 0, y: 0 } : Nt(e.x / t, e.y / t);
    },
    ui = (e, t, i) => {
        let a = Math.cos(t),
            n = Math.sin(t),
            r = Nt(e.x - i.x, e.y - i.y);
        return Nt(i.x + a * r.x - n * r.y, i.y + n * r.x + a * r.y);
    },
    Nt = (e = 0, t = 0) => ({ x: e, y: t }),
    me = (e, t, i = 1, a) => {
        if (typeof e == 'string') return parseFloat(e) * i;
        if (typeof e == 'number') return e * (a ? t[a] : Math.min(t.width, t.height));
    },
    Wu = (e, t, i) => {
        let a = e.borderStyle || e.lineStyle || 'solid',
            n = e.backgroundColor || e.fontColor || 'transparent',
            r = e.borderColor || e.lineColor || 'transparent',
            o = me(e.borderWidth || e.lineWidth, t, i),
            l = e.lineCap || 'round',
            s = e.lineJoin || 'round',
            u = typeof a == 'string' ? '' : a.map((d) => me(d, t, i)).join(','),
            c = e.opacity || 1;
        return {
            'stroke-linecap': l,
            'stroke-linejoin': s,
            'stroke-width': o || 0,
            'stroke-dasharray': u,
            stroke: r,
            fill: n,
            opacity: c,
        };
    },
    Re = (e) => e != null,
    Yu = (e, t, i = 1) => {
        let a = me(e.x, t, i, 'width') || me(e.left, t, i, 'width'),
            n = me(e.y, t, i, 'height') || me(e.top, t, i, 'height'),
            r = me(e.width, t, i, 'width'),
            o = me(e.height, t, i, 'height'),
            l = me(e.right, t, i, 'width'),
            s = me(e.bottom, t, i, 'height');
        return (
            Re(n) || (Re(o) && Re(s) ? (n = t.height - o - s) : (n = s)),
            Re(a) || (Re(r) && Re(l) ? (a = t.width - r - l) : (a = l)),
            Re(r) || (Re(a) && Re(l) ? (r = t.width - a - l) : (r = 0)),
            Re(o) || (Re(n) && Re(s) ? (o = t.height - n - s) : (o = 0)),
            { x: a || 0, y: n || 0, width: r || 0, height: o || 0 }
        );
    },
    $u = (e) => e.map((t, i) => `${i === 0 ? 'M' : 'L'} ${t.x} ${t.y}`).join(' '),
    xe = (e, t) => Object.keys(t).forEach((i) => e.setAttribute(i, t[i])),
    qu = 'http://www.w3.org/2000/svg',
    Et = (e, t) => {
        let i = document.createElementNS(qu, e);
        return t && xe(i, t), i;
    },
    Xu = (e) => xe(e, { ...e.rect, ...e.styles }),
    ju = (e) => {
        let t = e.rect.x + e.rect.width * 0.5,
            i = e.rect.y + e.rect.height * 0.5,
            a = e.rect.width * 0.5,
            n = e.rect.height * 0.5;
        return xe(e, { cx: t, cy: i, rx: a, ry: n, ...e.styles });
    },
    Qu = { contain: 'xMidYMid meet', cover: 'xMidYMid slice' },
    Zu = (e, t) => {
        xe(e, {
            ...e.rect,
            ...e.styles,
            preserveAspectRatio: Qu[t.fit] || 'none',
        });
    },
    Ku = { left: 'start', center: 'middle', right: 'end' },
    Ju = (e, t, i, a) => {
        let n = me(t.fontSize, i, a),
            r = t.fontFamily || 'sans-serif',
            o = t.fontWeight || 'normal',
            l = Ku[t.textAlign] || 'start';
        xe(e, {
            ...e.rect,
            ...e.styles,
            'stroke-width': 0,
            'font-weight': o,
            'font-size': n,
            'font-family': r,
            'text-anchor': l,
        }),
            e.text !== t.text &&
                ((e.text = t.text), (e.textContent = t.text.length ? t.text : ' '));
    },
    eh = (e, t, i, a) => {
        xe(e, { ...e.rect, ...e.styles, fill: 'none' });
        let n = e.childNodes[0],
            r = e.childNodes[1],
            o = e.childNodes[2],
            l = e.rect,
            s = { x: e.rect.x + e.rect.width, y: e.rect.y + e.rect.height };
        if ((xe(n, { x1: l.x, y1: l.y, x2: s.x, y2: s.y }), !t.lineDecoration)) return;
        (r.style.display = 'none'), (o.style.display = 'none');
        let u = Hu({ x: s.x - l.x, y: s.y - l.y }),
            c = me(0.05, i, a);
        if (t.lineDecoration.indexOf('arrow-begin') !== -1) {
            let d = Gr(u, c),
                h = Vr(l, d),
                f = ui(l, 2, h),
                p = ui(l, -2, h);
            xe(r, {
                style: 'display:block;',
                d: `M${f.x},${f.y} L${l.x},${l.y} L${p.x},${p.y}`,
            });
        }
        if (t.lineDecoration.indexOf('arrow-end') !== -1) {
            let d = Gr(u, -c),
                h = Vr(s, d),
                f = ui(s, 2, h),
                p = ui(s, -2, h);
            xe(o, {
                style: 'display:block;',
                d: `M${f.x},${f.y} L${s.x},${s.y} L${p.x},${p.y}`,
            });
        }
    },
    th = (e, t, i, a) => {
        xe(e, {
            ...e.styles,
            fill: 'none',
            d: $u(
                t.points.map((n) => ({
                    x: me(n.x, i, a, 'width'),
                    y: me(n.y, i, a, 'height'),
                })),
            ),
        });
    },
    hi = (e) => (t) => Et(e, { id: t.id }),
    ih = (e) => {
        let t = Et('image', {
            id: e.id,
            'stroke-linecap': 'round',
            'stroke-linejoin': 'round',
            opacity: '0',
        });
        return (
            (t.onload = () => {
                t.setAttribute('opacity', e.opacity || 1);
            }),
            t.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', e.src),
            t
        );
    },
    ah = (e) => {
        let t = Et('g', {
                id: e.id,
                'stroke-linecap': 'round',
                'stroke-linejoin': 'round',
            }),
            i = Et('line');
        t.appendChild(i);
        let a = Et('path');
        t.appendChild(a);
        let n = Et('path');
        return t.appendChild(n), t;
    },
    nh = {
        image: ih,
        rect: hi('rect'),
        ellipse: hi('ellipse'),
        text: hi('text'),
        path: hi('path'),
        line: ah,
    },
    rh = { rect: Xu, ellipse: ju, image: Zu, text: Ju, path: th, line: eh },
    oh = (e, t) => nh[e](t),
    lh = (e, t, i, a, n) => {
        t !== 'path' && (e.rect = Yu(i, a, n)), (e.styles = Wu(i, a, n)), rh[t](e, i, a, n);
    },
    sh = ['x', 'y', 'left', 'top', 'right', 'bottom', 'width', 'height'],
    ch = (e) => (typeof e == 'string' && /%/.test(e) ? parseFloat(e) / 100 : e),
    dh = (e) => {
        let [t, i] = e,
            a = i.points ? {} : sh.reduce((n, r) => ((n[r] = ch(i[r])), n), {});
        return [t, { zIndex: 0, ...i, ...a }];
    },
    uh = (e, t) => (e[1].zIndex > t[1].zIndex ? 1 : e[1].zIndex < t[1].zIndex ? -1 : 0),
    hh = (e) =>
        e.utils.createView({
            name: 'image-preview-markup',
            tag: 'svg',
            ignoreRect: !0,
            mixins: {
                apis: ['width', 'height', 'crop', 'markup', 'resize', 'dirty'],
            },
            write: ({ root: t, props: i }) => {
                if (!i.dirty) return;
                let { crop: a, resize: n, markup: r } = i,
                    o = i.width,
                    l = i.height,
                    s = a.width,
                    u = a.height;
                if (n) {
                    let { size: f } = n,
                        p = f && f.width,
                        m = f && f.height,
                        g = n.mode,
                        b = n.upscale;
                    p && !m && (m = p), m && !p && (p = m);
                    let E = s < p && u < m;
                    if (!E || (E && b)) {
                        let T = p / s,
                            _ = m / u;
                        if (g === 'force') (s = p), (u = m);
                        else {
                            let y;
                            g === 'cover'
                                ? (y = Math.max(T, _))
                                : g === 'contain' && (y = Math.min(T, _)),
                                (s = s * y),
                                (u = u * y);
                        }
                    }
                }
                let c = { width: o, height: l };
                t.element.setAttribute('width', c.width),
                    t.element.setAttribute('height', c.height);
                let d = Math.min(o / s, l / u);
                t.element.innerHTML = '';
                let h = t.query('GET_IMAGE_PREVIEW_MARKUP_FILTER');
                r.filter(h)
                    .map(dh)
                    .sort(uh)
                    .forEach((f) => {
                        let [p, m] = f,
                            g = oh(p, m);
                        lh(g, p, m, c, d), t.element.appendChild(g);
                    });
            },
        }),
    zt = (e, t) => ({ x: e, y: t }),
    fh = (e, t) => e.x * t.x + e.y * t.y,
    Ur = (e, t) => zt(e.x - t.x, e.y - t.y),
    ph = (e, t) => fh(Ur(e, t), Ur(e, t)),
    kr = (e, t) => Math.sqrt(ph(e, t)),
    Hr = (e, t) => {
        let i = e,
            a = 1.5707963267948966,
            n = t,
            r = 1.5707963267948966 - t,
            o = Math.sin(a),
            l = Math.sin(n),
            s = Math.sin(r),
            u = Math.cos(r),
            c = i / o,
            d = c * l,
            h = c * s;
        return zt(u * d, u * h);
    },
    mh = (e, t) => {
        let i = e.width,
            a = e.height,
            n = Hr(i, t),
            r = Hr(a, t),
            o = zt(e.x + Math.abs(n.x), e.y - Math.abs(n.y)),
            l = zt(e.x + e.width + Math.abs(r.y), e.y + Math.abs(r.x)),
            s = zt(e.x - Math.abs(r.y), e.y + e.height - Math.abs(r.x));
        return { width: kr(o, l), height: kr(o, s) };
    },
    gh = (e, t, i = 1) => {
        let a = e.height / e.width,
            n = 1,
            r = t,
            o = 1,
            l = a;
        l > r && ((l = r), (o = l / a));
        let s = Math.max(n / o, r / l),
            u = e.width / (i * s * o),
            c = u * t;
        return { width: u, height: c };
    },
    Yr = (e, t, i, a) => {
        let n = a.x > 0.5 ? 1 - a.x : a.x,
            r = a.y > 0.5 ? 1 - a.y : a.y,
            o = n * 2 * e.width,
            l = r * 2 * e.height,
            s = mh(t, i);
        return Math.max(s.width / o, s.height / l);
    },
    $r = (e, t) => {
        let i = e.width,
            a = i * t;
        a > e.height && ((a = e.height), (i = a / t));
        let n = (e.width - i) * 0.5,
            r = (e.height - a) * 0.5;
        return { x: n, y: r, width: i, height: a };
    },
    Eh = (e, t = {}) => {
        let { zoom: i, rotation: a, center: n, aspectRatio: r } = t;
        r || (r = e.height / e.width);
        let o = gh(e, r, i),
            l = { x: o.width * 0.5, y: o.height * 0.5 },
            s = { x: 0, y: 0, width: o.width, height: o.height, center: l },
            u = typeof t.scaleToFit > 'u' || t.scaleToFit,
            c = Yr(e, $r(s, r), a, u ? n : { x: 0.5, y: 0.5 }),
            d = i * c;
        return {
            widthFloat: o.width / d,
            heightFloat: o.height / d,
            width: Math.round(o.width / d),
            height: Math.round(o.height / d),
        };
    },
    Oe = { type: 'spring', stiffness: 0.5, damping: 0.45, mass: 10 },
    Th = (e) =>
        e.utils.createView({
            name: 'image-bitmap',
            ignoreRect: !0,
            mixins: { styles: ['scaleX', 'scaleY'] },
            create: ({ root: t, props: i }) => {
                t.appendChild(i.image);
            },
        }),
    Ih = (e) =>
        e.utils.createView({
            name: 'image-canvas-wrapper',
            tag: 'div',
            ignoreRect: !0,
            mixins: {
                apis: ['crop', 'width', 'height'],
                styles: [
                    'originX',
                    'originY',
                    'translateX',
                    'translateY',
                    'scaleX',
                    'scaleY',
                    'rotateZ',
                ],
                animations: {
                    originX: Oe,
                    originY: Oe,
                    scaleX: Oe,
                    scaleY: Oe,
                    translateX: Oe,
                    translateY: Oe,
                    rotateZ: Oe,
                },
            },
            create: ({ root: t, props: i }) => {
                (i.width = i.image.width),
                    (i.height = i.image.height),
                    (t.ref.bitmap = t.appendChildView(
                        t.createChildView(Th(e), { image: i.image }),
                    ));
            },
            write: ({ root: t, props: i }) => {
                let { flip: a } = i.crop,
                    { bitmap: n } = t.ref;
                (n.scaleX = a.horizontal ? -1 : 1), (n.scaleY = a.vertical ? -1 : 1);
            },
        }),
    bh = (e) =>
        e.utils.createView({
            name: 'image-clip',
            tag: 'div',
            ignoreRect: !0,
            mixins: {
                apis: ['crop', 'markup', 'resize', 'width', 'height', 'dirty', 'background'],
                styles: ['width', 'height', 'opacity'],
                animations: { opacity: { type: 'tween', duration: 250 } },
            },
            didWriteView: function ({ root: t, props: i }) {
                i.background && (t.element.style.backgroundColor = i.background);
            },
            create: ({ root: t, props: i }) => {
                (t.ref.image = t.appendChildView(t.createChildView(Ih(e), Object.assign({}, i)))),
                    (t.ref.createMarkup = () => {
                        t.ref.markup ||
                            (t.ref.markup = t.appendChildView(
                                t.createChildView(hh(e), Object.assign({}, i)),
                            ));
                    }),
                    (t.ref.destroyMarkup = () => {
                        t.ref.markup && (t.removeChildView(t.ref.markup), (t.ref.markup = null));
                    });
                let a = t.query('GET_IMAGE_PREVIEW_TRANSPARENCY_INDICATOR');
                a !== null &&
                    (a === 'grid'
                        ? (t.element.dataset.transparencyIndicator = a)
                        : (t.element.dataset.transparencyIndicator = 'color'));
            },
            write: ({ root: t, props: i, shouldOptimize: a }) => {
                let { crop: n, markup: r, resize: o, dirty: l, width: s, height: u } = i;
                t.ref.image.crop = n;
                let c = {
                        x: 0,
                        y: 0,
                        width: s,
                        height: u,
                        center: { x: s * 0.5, y: u * 0.5 },
                    },
                    d = {
                        width: t.ref.image.width,
                        height: t.ref.image.height,
                    },
                    h = { x: n.center.x * d.width, y: n.center.y * d.height },
                    f = {
                        x: c.center.x - d.width * n.center.x,
                        y: c.center.y - d.height * n.center.y,
                    },
                    p = Math.PI * 2 + (n.rotation % (Math.PI * 2)),
                    m = n.aspectRatio || d.height / d.width,
                    g = typeof n.scaleToFit > 'u' || n.scaleToFit,
                    b = Yr(d, $r(c, m), p, g ? n.center : { x: 0.5, y: 0.5 }),
                    E = n.zoom * b;
                r && r.length
                    ? (t.ref.createMarkup(),
                      (t.ref.markup.width = s),
                      (t.ref.markup.height = u),
                      (t.ref.markup.resize = o),
                      (t.ref.markup.dirty = l),
                      (t.ref.markup.markup = r),
                      (t.ref.markup.crop = Eh(d, n)))
                    : t.ref.markup && t.ref.destroyMarkup();
                let T = t.ref.image;
                if (a) {
                    (T.originX = null),
                        (T.originY = null),
                        (T.translateX = null),
                        (T.translateY = null),
                        (T.rotateZ = null),
                        (T.scaleX = null),
                        (T.scaleY = null);
                    return;
                }
                (T.originX = h.x),
                    (T.originY = h.y),
                    (T.translateX = f.x),
                    (T.translateY = f.y),
                    (T.rotateZ = p),
                    (T.scaleX = E),
                    (T.scaleY = E);
            },
        }),
    _h = (e) =>
        e.utils.createView({
            name: 'image-preview',
            tag: 'div',
            ignoreRect: !0,
            mixins: {
                apis: ['image', 'crop', 'markup', 'resize', 'dirty', 'background'],
                styles: ['translateY', 'scaleX', 'scaleY', 'opacity'],
                animations: {
                    scaleX: Oe,
                    scaleY: Oe,
                    translateY: Oe,
                    opacity: { type: 'tween', duration: 400 },
                },
            },
            create: ({ root: t, props: i }) => {
                t.ref.clip = t.appendChildView(
                    t.createChildView(bh(e), {
                        id: i.id,
                        image: i.image,
                        crop: i.crop,
                        markup: i.markup,
                        resize: i.resize,
                        dirty: i.dirty,
                        background: i.background,
                    }),
                );
            },
            write: ({ root: t, props: i, shouldOptimize: a }) => {
                let { clip: n } = t.ref,
                    { image: r, crop: o, markup: l, resize: s, dirty: u } = i;
                if (
                    ((n.crop = o),
                    (n.markup = l),
                    (n.resize = s),
                    (n.dirty = u),
                    (n.opacity = a ? 0 : 1),
                    a || t.rect.element.hidden)
                )
                    return;
                let c = r.height / r.width,
                    d = o.aspectRatio || c,
                    h = t.rect.inner.width,
                    f = t.rect.inner.height,
                    p = t.query('GET_IMAGE_PREVIEW_HEIGHT'),
                    m = t.query('GET_IMAGE_PREVIEW_MIN_HEIGHT'),
                    g = t.query('GET_IMAGE_PREVIEW_MAX_HEIGHT'),
                    b = t.query('GET_PANEL_ASPECT_RATIO'),
                    E = t.query('GET_ALLOW_MULTIPLE');
                b && !E && ((p = h * b), (d = b));
                let T = p !== null ? p : Math.max(m, Math.min(h * d, g)),
                    _ = T / d;
                _ > h && ((_ = h), (T = _ * d)),
                    T > f && ((T = f), (_ = f / d)),
                    (n.width = _),
                    (n.height = T);
            },
        }),
    Rh = `<svg width="500" height="200" viewBox="0 0 500 200" preserveAspectRatio="none">
    <defs>
        <radialGradient id="gradient-__UID__" cx=".5" cy="1.25" r="1.15">
            <stop offset='50%' stop-color='#000000'/>
            <stop offset='56%' stop-color='#0a0a0a'/>
            <stop offset='63%' stop-color='#262626'/>
            <stop offset='69%' stop-color='#4f4f4f'/>
            <stop offset='75%' stop-color='#808080'/>
            <stop offset='81%' stop-color='#b1b1b1'/>
            <stop offset='88%' stop-color='#dadada'/>
            <stop offset='94%' stop-color='#f6f6f6'/>
            <stop offset='100%' stop-color='#ffffff'/>
        </radialGradient>
        <mask id="mask-__UID__">
            <rect x="0" y="0" width="500" height="200" fill="url(#gradient-__UID__)"></rect>
        </mask>
    </defs>
    <rect x="0" width="500" height="200" fill="currentColor" mask="url(#mask-__UID__)"></rect>
</svg>`,
    Wr = 0,
    yh = (e) =>
        e.utils.createView({
            name: 'image-preview-overlay',
            tag: 'div',
            ignoreRect: !0,
            create: ({ root: t, props: i }) => {
                let a = Rh;
                if (document.querySelector('base')) {
                    let n = new URL(window.location.href.replace(window.location.hash, '')).href;
                    a = a.replace(/url\(\#/g, 'url(' + n + '#');
                }
                Wr++,
                    t.element.classList.add(`filepond--image-preview-overlay-${i.status}`),
                    (t.element.innerHTML = a.replace(/__UID__/g, Wr));
            },
            mixins: {
                styles: ['opacity'],
                animations: { opacity: { type: 'spring', mass: 25 } },
            },
        }),
    Sh = function () {
        self.onmessage = (e) => {
            createImageBitmap(e.data.message.file).then((t) => {
                self.postMessage({ id: e.data.id, message: t }, [t]);
            });
        };
    },
    wh = function () {
        self.onmessage = (e) => {
            let t = e.data.message.imageData,
                i = e.data.message.colorMatrix,
                a = t.data,
                n = a.length,
                r = i[0],
                o = i[1],
                l = i[2],
                s = i[3],
                u = i[4],
                c = i[5],
                d = i[6],
                h = i[7],
                f = i[8],
                p = i[9],
                m = i[10],
                g = i[11],
                b = i[12],
                E = i[13],
                T = i[14],
                _ = i[15],
                y = i[16],
                I = i[17],
                v = i[18],
                R = i[19],
                S = 0,
                P = 0,
                x = 0,
                O = 0,
                B = 0;
            for (; S < n; S += 4)
                (P = a[S] / 255),
                    (x = a[S + 1] / 255),
                    (O = a[S + 2] / 255),
                    (B = a[S + 3] / 255),
                    (a[S] = Math.max(0, Math.min((P * r + x * o + O * l + B * s + u) * 255, 255))),
                    (a[S + 1] = Math.max(
                        0,
                        Math.min((P * c + x * d + O * h + B * f + p) * 255, 255),
                    )),
                    (a[S + 2] = Math.max(
                        0,
                        Math.min((P * m + x * g + O * b + B * E + T) * 255, 255),
                    )),
                    (a[S + 3] = Math.max(
                        0,
                        Math.min((P * _ + x * y + O * I + B * v + R) * 255, 255),
                    ));
            self.postMessage({ id: e.data.id, message: t }, [t.data.buffer]);
        };
    },
    vh = (e, t) => {
        let i = new Image();
        (i.onload = () => {
            let a = i.naturalWidth,
                n = i.naturalHeight;
            (i = null), t(a, n);
        }),
            (i.src = e);
    },
    Ah = {
        1: () => [1, 0, 0, 1, 0, 0],
        2: (e) => [-1, 0, 0, 1, e, 0],
        3: (e, t) => [-1, 0, 0, -1, e, t],
        4: (e, t) => [1, 0, 0, -1, 0, t],
        5: () => [0, 1, 1, 0, 0, 0],
        6: (e, t) => [0, 1, -1, 0, t, 0],
        7: (e, t) => [0, -1, -1, 0, t, e],
        8: (e) => [0, -1, 1, 0, 0, e],
    },
    Lh = (e, t, i, a) => {
        a !== -1 && e.transform.apply(e, Ah[a](t, i));
    },
    Mh = (e, t, i, a) => {
        (t = Math.round(t)), (i = Math.round(i));
        let n = document.createElement('canvas');
        (n.width = t), (n.height = i);
        let r = n.getContext('2d');
        return a >= 5 && a <= 8 && ([t, i] = [i, t]), Lh(r, t, i, a), r.drawImage(e, 0, 0, t, i), n;
    },
    qr = (e) => /^image/.test(e.type) && !/svg/.test(e.type),
    Oh = 10,
    xh = 10,
    Dh = (e) => {
        let t = Math.min(Oh / e.width, xh / e.height),
            i = document.createElement('canvas'),
            a = i.getContext('2d'),
            n = (i.width = Math.ceil(e.width * t)),
            r = (i.height = Math.ceil(e.height * t));
        a.drawImage(e, 0, 0, n, r);
        let o = null;
        try {
            o = a.getImageData(0, 0, n, r).data;
        } catch {
            return null;
        }
        let l = o.length,
            s = 0,
            u = 0,
            c = 0,
            d = 0;
        for (; d < l; d += 4)
            (s += o[d] * o[d]), (u += o[d + 1] * o[d + 1]), (c += o[d + 2] * o[d + 2]);
        return (s = ga(s, l)), (u = ga(u, l)), (c = ga(c, l)), { r: s, g: u, b: c };
    },
    ga = (e, t) => Math.floor(Math.sqrt(e / (t / 4))),
    Ph = (e, t) => (
        (t = t || document.createElement('canvas')),
        (t.width = e.width),
        (t.height = e.height),
        t.getContext('2d').drawImage(e, 0, 0),
        t
    ),
    Fh = (e) => {
        let t;
        try {
            t = new ImageData(e.width, e.height);
        } catch {
            t = document
                .createElement('canvas')
                .getContext('2d')
                .createImageData(e.width, e.height);
        }
        return t.data.set(new Uint8ClampedArray(e.data)), t;
    },
    Ch = (e) =>
        new Promise((t, i) => {
            let a = new Image();
            (a.crossOrigin = 'Anonymous'),
                (a.onload = () => {
                    t(a);
                }),
                (a.onerror = (n) => {
                    i(n);
                }),
                (a.src = e);
        }),
    zh = (e) => {
        let t = yh(e),
            i = _h(e),
            { createWorker: a } = e.utils,
            n = (E, T, _) =>
                new Promise((y) => {
                    E.ref.imageData ||
                        (E.ref.imageData = _.getContext('2d').getImageData(
                            0,
                            0,
                            _.width,
                            _.height,
                        ));
                    let I = Fh(E.ref.imageData);
                    if (!T || T.length !== 20) return _.getContext('2d').putImageData(I, 0, 0), y();
                    let v = a(wh);
                    v.post(
                        { imageData: I, colorMatrix: T },
                        (R) => {
                            _.getContext('2d').putImageData(R, 0, 0), v.terminate(), y();
                        },
                        [I.data.buffer],
                    );
                }),
            r = (E, T) => {
                E.removeChildView(T), (T.image.width = 1), (T.image.height = 1), T._destroy();
            },
            o = ({ root: E }) => {
                let T = E.ref.images.shift();
                return (T.opacity = 0), (T.translateY = -15), E.ref.imageViewBin.push(T), T;
            },
            l = ({ root: E, props: T, image: _ }) => {
                let y = T.id,
                    I = E.query('GET_ITEM', { id: y });
                if (!I) return;
                let v = I.getMetadata('crop') || {
                        center: { x: 0.5, y: 0.5 },
                        flip: { horizontal: !1, vertical: !1 },
                        zoom: 1,
                        rotation: 0,
                        aspectRatio: null,
                    },
                    R = E.query('GET_IMAGE_TRANSFORM_CANVAS_BACKGROUND_COLOR'),
                    S,
                    P,
                    x = !1;
                E.query('GET_IMAGE_PREVIEW_MARKUP_SHOW') &&
                    ((S = I.getMetadata('markup') || []), (P = I.getMetadata('resize')), (x = !0));
                let O = E.appendChildView(
                    E.createChildView(i, {
                        id: y,
                        image: _,
                        crop: v,
                        resize: P,
                        markup: S,
                        dirty: x,
                        background: R,
                        opacity: 0,
                        scaleX: 1.15,
                        scaleY: 1.15,
                        translateY: 15,
                    }),
                    E.childViews.length,
                );
                E.ref.images.push(O),
                    (O.opacity = 1),
                    (O.scaleX = 1),
                    (O.scaleY = 1),
                    (O.translateY = 0),
                    setTimeout(() => {
                        E.dispatch('DID_IMAGE_PREVIEW_SHOW', { id: y });
                    }, 250);
            },
            s = ({ root: E, props: T }) => {
                let _ = E.query('GET_ITEM', { id: T.id });
                if (!_) return;
                let y = E.ref.images[E.ref.images.length - 1];
                (y.crop = _.getMetadata('crop')),
                    (y.background = E.query('GET_IMAGE_TRANSFORM_CANVAS_BACKGROUND_COLOR')),
                    E.query('GET_IMAGE_PREVIEW_MARKUP_SHOW') &&
                        ((y.dirty = !0),
                        (y.resize = _.getMetadata('resize')),
                        (y.markup = _.getMetadata('markup')));
            },
            u = ({ root: E, props: T, action: _ }) => {
                if (!/crop|filter|markup|resize/.test(_.change.key) || !E.ref.images.length) return;
                let y = E.query('GET_ITEM', { id: T.id });
                if (y) {
                    if (/filter/.test(_.change.key)) {
                        let I = E.ref.images[E.ref.images.length - 1];
                        n(E, _.change.value, I.image);
                        return;
                    }
                    if (/crop|markup|resize/.test(_.change.key)) {
                        let I = y.getMetadata('crop'),
                            v = E.ref.images[E.ref.images.length - 1];
                        if (
                            I &&
                            I.aspectRatio &&
                            v.crop &&
                            v.crop.aspectRatio &&
                            Math.abs(I.aspectRatio - v.crop.aspectRatio) > 1e-5
                        ) {
                            let R = o({ root: E });
                            l({ root: E, props: T, image: Ph(R.image) });
                        } else s({ root: E, props: T });
                    }
                }
            },
            c = (E) => {
                let _ = window.navigator.userAgent.match(/Firefox\/([0-9]+)\./);
                return (_ ? parseInt(_[1]) : null) <= 58
                    ? !1
                    : 'createImageBitmap' in window && qr(E);
            },
            d = ({ root: E, props: T }) => {
                let { id: _ } = T,
                    y = E.query('GET_ITEM', _);
                if (!y) return;
                let I = URL.createObjectURL(y.file);
                vh(I, (v, R) => {
                    E.dispatch('DID_IMAGE_PREVIEW_CALCULATE_SIZE', {
                        id: _,
                        width: v,
                        height: R,
                    });
                });
            },
            h = ({ root: E, props: T }) => {
                let { id: _ } = T,
                    y = E.query('GET_ITEM', _);
                if (!y) return;
                let I = URL.createObjectURL(y.file),
                    v = () => {
                        Ch(I).then(R);
                    },
                    R = (S) => {
                        URL.revokeObjectURL(I);
                        let x = (y.getMetadata('exif') || {}).orientation || -1,
                            { width: O, height: B } = S;
                        if (!O || !B) return;
                        x >= 5 && x <= 8 && ([O, B] = [B, O]);
                        let A = Math.max(1, window.devicePixelRatio * 0.75),
                            w = E.query('GET_IMAGE_PREVIEW_ZOOM_FACTOR') * A,
                            L = B / O,
                            N = E.rect.element.width,
                            F = E.rect.element.height,
                            V = N,
                            G = V * L;
                        L > 1
                            ? ((V = Math.min(O, N * w)), (G = V * L))
                            : ((G = Math.min(B, F * w)), (V = G / L));
                        let $ = Mh(S, V, G, x),
                            q = () => {
                                let le = E.query('GET_IMAGE_PREVIEW_CALCULATE_AVERAGE_IMAGE_COLOR')
                                    ? Dh(data)
                                    : null;
                                y.setMetadata('color', le, !0),
                                    'close' in S && S.close(),
                                    (E.ref.overlayShadow.opacity = 1),
                                    l({ root: E, props: T, image: $ });
                            },
                            X = y.getMetadata('filter');
                        X ? n(E, X, $).then(q) : q();
                    };
                if (c(y.file)) {
                    let S = a(Sh);
                    S.post({ file: y.file }, (P) => {
                        if ((S.terminate(), !P)) {
                            v();
                            return;
                        }
                        R(P);
                    });
                } else v();
            },
            f = ({ root: E }) => {
                let T = E.ref.images[E.ref.images.length - 1];
                (T.translateY = 0), (T.scaleX = 1), (T.scaleY = 1), (T.opacity = 1);
            },
            p = ({ root: E }) => {
                (E.ref.overlayShadow.opacity = 1),
                    (E.ref.overlayError.opacity = 0),
                    (E.ref.overlaySuccess.opacity = 0);
            },
            m = ({ root: E }) => {
                (E.ref.overlayShadow.opacity = 0.25), (E.ref.overlayError.opacity = 1);
            },
            g = ({ root: E }) => {
                (E.ref.overlayShadow.opacity = 0.25), (E.ref.overlaySuccess.opacity = 1);
            },
            b = ({ root: E }) => {
                (E.ref.images = []),
                    (E.ref.imageData = null),
                    (E.ref.imageViewBin = []),
                    (E.ref.overlayShadow = E.appendChildView(
                        E.createChildView(t, { opacity: 0, status: 'idle' }),
                    )),
                    (E.ref.overlaySuccess = E.appendChildView(
                        E.createChildView(t, { opacity: 0, status: 'success' }),
                    )),
                    (E.ref.overlayError = E.appendChildView(
                        E.createChildView(t, { opacity: 0, status: 'failure' }),
                    ));
            };
        return e.utils.createView({
            name: 'image-preview-wrapper',
            create: b,
            styles: ['height'],
            apis: ['height'],
            destroy: ({ root: E }) => {
                E.ref.images.forEach((T) => {
                    (T.image.width = 1), (T.image.height = 1);
                });
            },
            didWriteView: ({ root: E }) => {
                E.ref.images.forEach((T) => {
                    T.dirty = !1;
                });
            },
            write: e.utils.createRoute(
                {
                    DID_IMAGE_PREVIEW_DRAW: f,
                    DID_IMAGE_PREVIEW_CONTAINER_CREATE: d,
                    DID_FINISH_CALCULATE_PREVIEWSIZE: h,
                    DID_UPDATE_ITEM_METADATA: u,
                    DID_THROW_ITEM_LOAD_ERROR: m,
                    DID_THROW_ITEM_PROCESSING_ERROR: m,
                    DID_THROW_ITEM_INVALID: m,
                    DID_COMPLETE_ITEM_PROCESSING: g,
                    DID_START_ITEM_PROCESSING: p,
                    DID_REVERT_ITEM_PROCESSING: p,
                },
                ({ root: E }) => {
                    let T = E.ref.imageViewBin.filter((_) => _.opacity === 0);
                    (E.ref.imageViewBin = E.ref.imageViewBin.filter((_) => _.opacity > 0)),
                        T.forEach((_) => r(E, _)),
                        (T.length = 0);
                },
            ),
        });
    },
    Xr = (e) => {
        let { addFilter: t, utils: i } = e,
            { Type: a, createRoute: n, isFile: r } = i,
            o = zh(e);
        return (
            t('CREATE_VIEW', (l) => {
                let { is: s, view: u, query: c } = l;
                if (!s('file') || !c('GET_ALLOW_IMAGE_PREVIEW')) return;
                let d = ({ root: g, props: b }) => {
                        let { id: E } = b,
                            T = c('GET_ITEM', E);
                        if (!T || !r(T.file) || T.archived) return;
                        let _ = T.file;
                        if (!ku(_) || !c('GET_IMAGE_PREVIEW_FILTER_ITEM')(T)) return;
                        let y = 'createImageBitmap' in (window || {}),
                            I = c('GET_IMAGE_PREVIEW_MAX_FILE_SIZE');
                        if (!y && I && _.size > I) return;
                        g.ref.imagePreview = u.appendChildView(u.createChildView(o, { id: E }));
                        let v = g.query('GET_IMAGE_PREVIEW_HEIGHT');
                        v &&
                            g.dispatch('DID_UPDATE_PANEL_HEIGHT', {
                                id: T.id,
                                height: v,
                            });
                        let R = !y && _.size > c('GET_IMAGE_PREVIEW_MAX_INSTANT_PREVIEW_FILE_SIZE');
                        g.dispatch('DID_IMAGE_PREVIEW_CONTAINER_CREATE', { id: E }, R);
                    },
                    h = (g, b) => {
                        if (!g.ref.imagePreview) return;
                        let { id: E } = b,
                            T = g.query('GET_ITEM', { id: E });
                        if (!T) return;
                        let _ = g.query('GET_PANEL_ASPECT_RATIO'),
                            y = g.query('GET_ITEM_PANEL_ASPECT_RATIO'),
                            I = g.query('GET_IMAGE_PREVIEW_HEIGHT');
                        if (_ || y || I) return;
                        let { imageWidth: v, imageHeight: R } = g.ref;
                        if (!v || !R) return;
                        let S = g.query('GET_IMAGE_PREVIEW_MIN_HEIGHT'),
                            P = g.query('GET_IMAGE_PREVIEW_MAX_HEIGHT'),
                            O = (T.getMetadata('exif') || {}).orientation || -1;
                        if (
                            (O >= 5 && O <= 8 && ([v, R] = [R, v]),
                            !qr(T.file) || g.query('GET_IMAGE_PREVIEW_UPSCALE'))
                        ) {
                            let N = 2048 / v;
                            (v *= N), (R *= N);
                        }
                        let B = R / v,
                            A = (T.getMetadata('crop') || {}).aspectRatio || B,
                            C = Math.max(S, Math.min(R, P)),
                            w = g.rect.element.width,
                            L = Math.min(w * A, C);
                        g.dispatch('DID_UPDATE_PANEL_HEIGHT', {
                            id: T.id,
                            height: L,
                        });
                    },
                    f = ({ root: g }) => {
                        g.ref.shouldRescale = !0;
                    },
                    p = ({ root: g, action: b }) => {
                        b.change.key === 'crop' && (g.ref.shouldRescale = !0);
                    },
                    m = ({ root: g, action: b }) => {
                        (g.ref.imageWidth = b.width),
                            (g.ref.imageHeight = b.height),
                            (g.ref.shouldRescale = !0),
                            (g.ref.shouldDrawPreview = !0),
                            g.dispatch('KICK');
                    };
                u.registerWriter(
                    n(
                        {
                            DID_RESIZE_ROOT: f,
                            DID_STOP_RESIZE: f,
                            DID_LOAD_ITEM: d,
                            DID_IMAGE_PREVIEW_CALCULATE_SIZE: m,
                            DID_UPDATE_ITEM_METADATA: p,
                        },
                        ({ root: g, props: b }) => {
                            g.ref.imagePreview &&
                                (g.rect.element.hidden ||
                                    (g.ref.shouldRescale && (h(g, b), (g.ref.shouldRescale = !1)),
                                    g.ref.shouldDrawPreview &&
                                        (requestAnimationFrame(() => {
                                            requestAnimationFrame(() => {
                                                g.dispatch('DID_FINISH_CALCULATE_PREVIEWSIZE', {
                                                    id: b.id,
                                                });
                                            });
                                        }),
                                        (g.ref.shouldDrawPreview = !1))));
                        },
                    ),
                );
            }),
            {
                options: {
                    allowImagePreview: [!0, a.BOOLEAN],
                    imagePreviewFilterItem: [() => !0, a.FUNCTION],
                    imagePreviewHeight: [null, a.INT],
                    imagePreviewMinHeight: [44, a.INT],
                    imagePreviewMaxHeight: [256, a.INT],
                    imagePreviewMaxFileSize: [null, a.INT],
                    imagePreviewZoomFactor: [2, a.INT],
                    imagePreviewUpscale: [!1, a.BOOLEAN],
                    imagePreviewMaxInstantPreviewFileSize: [1e6, a.INT],
                    imagePreviewTransparencyIndicator: [null, a.STRING],
                    imagePreviewCalculateAverageImageColor: [!1, a.BOOLEAN],
                    imagePreviewMarkupShow: [!0, a.BOOLEAN],
                    imagePreviewMarkupFilter: [() => !0, a.FUNCTION],
                },
            }
        );
    },
    Nh = typeof window < 'u' && typeof window.document < 'u';
Nh && document.dispatchEvent(new CustomEvent('FilePond:pluginloaded', { detail: Xr }));
var jr = Xr;
var Bh = (e) => /^image/.test(e.type),
    Gh = (e, t) => {
        let i = new Image();
        (i.onload = () => {
            let a = i.naturalWidth,
                n = i.naturalHeight;
            (i = null), t({ width: a, height: n });
        }),
            (i.onerror = () => t(null)),
            (i.src = e);
    },
    Qr = ({ addFilter: e, utils: t }) => {
        let { Type: i } = t;
        return (
            e(
                'DID_LOAD_ITEM',
                (a, { query: n }) =>
                    new Promise((r, o) => {
                        let l = a.file;
                        if (!Bh(l) || !n('GET_ALLOW_IMAGE_RESIZE')) return r(a);
                        let s = n('GET_IMAGE_RESIZE_MODE'),
                            u = n('GET_IMAGE_RESIZE_TARGET_WIDTH'),
                            c = n('GET_IMAGE_RESIZE_TARGET_HEIGHT'),
                            d = n('GET_IMAGE_RESIZE_UPSCALE');
                        if (u === null && c === null) return r(a);
                        let h = u === null ? c : u,
                            f = c === null ? h : c,
                            p = URL.createObjectURL(l);
                        Gh(p, (m) => {
                            if ((URL.revokeObjectURL(p), !m)) return r(a);
                            let { width: g, height: b } = m,
                                E = (a.getMetadata('exif') || {}).orientation || -1;
                            if ((E >= 5 && E <= 8 && ([g, b] = [b, g]), g === h && b === f))
                                return r(a);
                            if (!d) {
                                if (s === 'cover') {
                                    if (g <= h || b <= f) return r(a);
                                } else if (g <= h && b <= h) return r(a);
                            }
                            a.setMetadata('resize', {
                                mode: s,
                                upscale: d,
                                size: { width: h, height: f },
                            }),
                                r(a);
                        });
                    }),
            ),
            {
                options: {
                    allowImageResize: [!0, i.BOOLEAN],
                    imageResizeMode: ['cover', i.STRING],
                    imageResizeUpscale: [!0, i.BOOLEAN],
                    imageResizeTargetWidth: [null, i.INT],
                    imageResizeTargetHeight: [null, i.INT],
                },
            }
        );
    },
    Vh = typeof window < 'u' && typeof window.document < 'u';
Vh && document.dispatchEvent(new CustomEvent('FilePond:pluginloaded', { detail: Qr }));
var Zr = Qr;
var Uh = (e) => /^image/.test(e.type),
    kh = (e) => e.substr(0, e.lastIndexOf('.')) || e,
    Hh = { jpeg: 'jpg', 'svg+xml': 'svg' },
    Wh = (e, t) => {
        let i = kh(e),
            a = t.split('/')[1],
            n = Hh[a] || a;
        return `${i}.${n}`;
    },
    Yh = (e) => (/jpeg|png|svg\+xml/.test(e) ? e : 'image/jpeg'),
    $h = (e) => /^image/.test(e.type),
    qh = {
        1: () => [1, 0, 0, 1, 0, 0],
        2: (e) => [-1, 0, 0, 1, e, 0],
        3: (e, t) => [-1, 0, 0, -1, e, t],
        4: (e, t) => [1, 0, 0, -1, 0, t],
        5: () => [0, 1, 1, 0, 0, 0],
        6: (e, t) => [0, 1, -1, 0, t, 0],
        7: (e, t) => [0, -1, -1, 0, t, e],
        8: (e) => [0, -1, 1, 0, 0, e],
    },
    Xh = (e, t, i) => (i === -1 && (i = 1), qh[i](e, t)),
    Bt = (e, t) => ({ x: e, y: t }),
    jh = (e, t) => e.x * t.x + e.y * t.y,
    Kr = (e, t) => Bt(e.x - t.x, e.y - t.y),
    Qh = (e, t) => jh(Kr(e, t), Kr(e, t)),
    Jr = (e, t) => Math.sqrt(Qh(e, t)),
    eo = (e, t) => {
        let i = e,
            a = 1.5707963267948966,
            n = t,
            r = 1.5707963267948966 - t,
            o = Math.sin(a),
            l = Math.sin(n),
            s = Math.sin(r),
            u = Math.cos(r),
            c = i / o,
            d = c * l,
            h = c * s;
        return Bt(u * d, u * h);
    },
    Zh = (e, t) => {
        let i = e.width,
            a = e.height,
            n = eo(i, t),
            r = eo(a, t),
            o = Bt(e.x + Math.abs(n.x), e.y - Math.abs(n.y)),
            l = Bt(e.x + e.width + Math.abs(r.y), e.y + Math.abs(r.x)),
            s = Bt(e.x - Math.abs(r.y), e.y + e.height - Math.abs(r.x));
        return { width: Jr(o, l), height: Jr(o, s) };
    },
    ao = (e, t, i = 0, a = { x: 0.5, y: 0.5 }) => {
        let n = a.x > 0.5 ? 1 - a.x : a.x,
            r = a.y > 0.5 ? 1 - a.y : a.y,
            o = n * 2 * e.width,
            l = r * 2 * e.height,
            s = Zh(t, i);
        return Math.max(s.width / o, s.height / l);
    },
    no = (e, t) => {
        let i = e.width,
            a = i * t;
        a > e.height && ((a = e.height), (i = a / t));
        let n = (e.width - i) * 0.5,
            r = (e.height - a) * 0.5;
        return { x: n, y: r, width: i, height: a };
    },
    to = (e, t, i = 1) => {
        let a = e.height / e.width,
            n = 1,
            r = t,
            o = 1,
            l = a;
        l > r && ((l = r), (o = l / a));
        let s = Math.max(n / o, r / l),
            u = e.width / (i * s * o),
            c = u * t;
        return { width: u, height: c };
    },
    ro = (e) => {
        (e.width = 1), (e.height = 1), e.getContext('2d').clearRect(0, 0, 1, 1);
    },
    io = (e) => e && (e.horizontal || e.vertical),
    Kh = (e, t, i) => {
        if (t <= 1 && !io(i)) return (e.width = e.naturalWidth), (e.height = e.naturalHeight), e;
        let a = document.createElement('canvas'),
            n = e.naturalWidth,
            r = e.naturalHeight,
            o = t >= 5 && t <= 8;
        o ? ((a.width = r), (a.height = n)) : ((a.width = n), (a.height = r));
        let l = a.getContext('2d');
        if ((t && l.transform.apply(l, Xh(n, r, t)), io(i))) {
            let s = [1, 0, 0, 1, 0, 0];
            ((!o && i.horizontal) || o & i.vertical) && ((s[0] = -1), (s[4] = n)),
                ((!o && i.vertical) || (o && i.horizontal)) && ((s[3] = -1), (s[5] = r)),
                l.transform(...s);
        }
        return l.drawImage(e, 0, 0, n, r), a;
    },
    Jh = (e, t, i = {}, a = {}) => {
        let { canvasMemoryLimit: n, background: r = null } = a,
            o = i.zoom || 1,
            l = Kh(e, t, i.flip),
            s = { width: l.width, height: l.height },
            u = i.aspectRatio || s.height / s.width,
            c = to(s, u, o);
        if (n) {
            let T = c.width * c.height;
            if (T > n) {
                let _ = Math.sqrt(n) / Math.sqrt(T);
                (s.width = Math.floor(s.width * _)),
                    (s.height = Math.floor(s.height * _)),
                    (c = to(s, u, o));
            }
        }
        let d = document.createElement('canvas'),
            h = { x: c.width * 0.5, y: c.height * 0.5 },
            f = { x: 0, y: 0, width: c.width, height: c.height, center: h },
            p = typeof i.scaleToFit > 'u' || i.scaleToFit,
            m = o * ao(s, no(f, u), i.rotation, p ? i.center : { x: 0.5, y: 0.5 });
        (d.width = Math.round(c.width / m)),
            (d.height = Math.round(c.height / m)),
            (h.x /= m),
            (h.y /= m);
        let g = {
                x: h.x - s.width * (i.center ? i.center.x : 0.5),
                y: h.y - s.height * (i.center ? i.center.y : 0.5),
            },
            b = d.getContext('2d');
        r && ((b.fillStyle = r), b.fillRect(0, 0, d.width, d.height)),
            b.translate(h.x, h.y),
            b.rotate(i.rotation || 0),
            b.drawImage(l, g.x - h.x, g.y - h.y, s.width, s.height);
        let E = b.getImageData(0, 0, d.width, d.height);
        return ro(d), E;
    },
    ef = (() => typeof window < 'u' && typeof window.document < 'u')();
ef &&
    (HTMLCanvasElement.prototype.toBlob ||
        Object.defineProperty(HTMLCanvasElement.prototype, 'toBlob', {
            value: function (e, t, i) {
                var a = this.toDataURL(t, i).split(',')[1];
                setTimeout(function () {
                    for (var n = atob(a), r = n.length, o = new Uint8Array(r), l = 0; l < r; l++)
                        o[l] = n.charCodeAt(l);
                    e(new Blob([o], { type: t || 'image/png' }));
                });
            },
        }));
var tf = (e, t, i = null) =>
        new Promise((a) => {
            let n = i ? i(e) : e;
            Promise.resolve(n).then((r) => {
                r.toBlob(a, t.type, t.quality);
            });
        }),
    pi = (e, t) => Gt(e.x * t, e.y * t),
    mi = (e, t) => Gt(e.x + t.x, e.y + t.y),
    oo = (e) => {
        let t = Math.sqrt(e.x * e.x + e.y * e.y);
        return t === 0 ? { x: 0, y: 0 } : Gt(e.x / t, e.y / t);
    },
    Ve = (e, t, i) => {
        let a = Math.cos(t),
            n = Math.sin(t),
            r = Gt(e.x - i.x, e.y - i.y);
        return Gt(i.x + a * r.x - n * r.y, i.y + n * r.x + a * r.y);
    },
    Gt = (e = 0, t = 0) => ({ x: e, y: t }),
    se = (e, t, i = 1, a) => {
        if (typeof e == 'string') return parseFloat(e) * i;
        if (typeof e == 'number') return e * (a ? t[a] : Math.min(t.width, t.height));
    },
    tt = (e, t, i) => {
        let a = e.borderStyle || e.lineStyle || 'solid',
            n = e.backgroundColor || e.fontColor || 'transparent',
            r = e.borderColor || e.lineColor || 'transparent',
            o = se(e.borderWidth || e.lineWidth, t, i),
            l = e.lineCap || 'round',
            s = e.lineJoin || 'round',
            u = typeof a == 'string' ? '' : a.map((d) => se(d, t, i)).join(','),
            c = e.opacity || 1;
        return {
            'stroke-linecap': l,
            'stroke-linejoin': s,
            'stroke-width': o || 0,
            'stroke-dasharray': u,
            stroke: r,
            fill: n,
            opacity: c,
        };
    },
    ye = (e) => e != null,
    It = (e, t, i = 1) => {
        let a = se(e.x, t, i, 'width') || se(e.left, t, i, 'width'),
            n = se(e.y, t, i, 'height') || se(e.top, t, i, 'height'),
            r = se(e.width, t, i, 'width'),
            o = se(e.height, t, i, 'height'),
            l = se(e.right, t, i, 'width'),
            s = se(e.bottom, t, i, 'height');
        return (
            ye(n) || (ye(o) && ye(s) ? (n = t.height - o - s) : (n = s)),
            ye(a) || (ye(r) && ye(l) ? (a = t.width - r - l) : (a = l)),
            ye(r) || (ye(a) && ye(l) ? (r = t.width - a - l) : (r = 0)),
            ye(o) || (ye(n) && ye(s) ? (o = t.height - n - s) : (o = 0)),
            { x: a || 0, y: n || 0, width: r || 0, height: o || 0 }
        );
    },
    af = (e) => e.map((t, i) => `${i === 0 ? 'M' : 'L'} ${t.x} ${t.y}`).join(' '),
    De = (e, t) => Object.keys(t).forEach((i) => e.setAttribute(i, t[i])),
    nf = 'http://www.w3.org/2000/svg',
    Tt = (e, t) => {
        let i = document.createElementNS(nf, e);
        return t && De(i, t), i;
    },
    rf = (e) => De(e, { ...e.rect, ...e.styles }),
    of = (e) => {
        let t = e.rect.x + e.rect.width * 0.5,
            i = e.rect.y + e.rect.height * 0.5,
            a = e.rect.width * 0.5,
            n = e.rect.height * 0.5;
        return De(e, { cx: t, cy: i, rx: a, ry: n, ...e.styles });
    },
    lf = { contain: 'xMidYMid meet', cover: 'xMidYMid slice' },
    sf = (e, t) => {
        De(e, {
            ...e.rect,
            ...e.styles,
            preserveAspectRatio: lf[t.fit] || 'none',
        });
    },
    cf = { left: 'start', center: 'middle', right: 'end' },
    df = (e, t, i, a) => {
        let n = se(t.fontSize, i, a),
            r = t.fontFamily || 'sans-serif',
            o = t.fontWeight || 'normal',
            l = cf[t.textAlign] || 'start';
        De(e, {
            ...e.rect,
            ...e.styles,
            'stroke-width': 0,
            'font-weight': o,
            'font-size': n,
            'font-family': r,
            'text-anchor': l,
        }),
            e.text !== t.text &&
                ((e.text = t.text), (e.textContent = t.text.length ? t.text : ' '));
    },
    uf = (e, t, i, a) => {
        De(e, { ...e.rect, ...e.styles, fill: 'none' });
        let n = e.childNodes[0],
            r = e.childNodes[1],
            o = e.childNodes[2],
            l = e.rect,
            s = { x: e.rect.x + e.rect.width, y: e.rect.y + e.rect.height };
        if ((De(n, { x1: l.x, y1: l.y, x2: s.x, y2: s.y }), !t.lineDecoration)) return;
        (r.style.display = 'none'), (o.style.display = 'none');
        let u = oo({ x: s.x - l.x, y: s.y - l.y }),
            c = se(0.05, i, a);
        if (t.lineDecoration.indexOf('arrow-begin') !== -1) {
            let d = pi(u, c),
                h = mi(l, d),
                f = Ve(l, 2, h),
                p = Ve(l, -2, h);
            De(r, {
                style: 'display:block;',
                d: `M${f.x},${f.y} L${l.x},${l.y} L${p.x},${p.y}`,
            });
        }
        if (t.lineDecoration.indexOf('arrow-end') !== -1) {
            let d = pi(u, -c),
                h = mi(s, d),
                f = Ve(s, 2, h),
                p = Ve(s, -2, h);
            De(o, {
                style: 'display:block;',
                d: `M${f.x},${f.y} L${s.x},${s.y} L${p.x},${p.y}`,
            });
        }
    },
    hf = (e, t, i, a) => {
        De(e, {
            ...e.styles,
            fill: 'none',
            d: af(
                t.points.map((n) => ({
                    x: se(n.x, i, a, 'width'),
                    y: se(n.y, i, a, 'height'),
                })),
            ),
        });
    },
    fi = (e) => (t) => Tt(e, { id: t.id }),
    ff = (e) => {
        let t = Tt('image', {
            id: e.id,
            'stroke-linecap': 'round',
            'stroke-linejoin': 'round',
            opacity: '0',
        });
        return (
            (t.onload = () => {
                t.setAttribute('opacity', e.opacity || 1);
            }),
            t.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', e.src),
            t
        );
    },
    pf = (e) => {
        let t = Tt('g', {
                id: e.id,
                'stroke-linecap': 'round',
                'stroke-linejoin': 'round',
            }),
            i = Tt('line');
        t.appendChild(i);
        let a = Tt('path');
        t.appendChild(a);
        let n = Tt('path');
        return t.appendChild(n), t;
    },
    mf = {
        image: ff,
        rect: fi('rect'),
        ellipse: fi('ellipse'),
        text: fi('text'),
        path: fi('path'),
        line: pf,
    },
    gf = { rect: rf, ellipse: of, image: sf, text: df, path: hf, line: uf },
    Ef = (e, t) => mf[e](t),
    Tf = (e, t, i, a, n) => {
        t !== 'path' && (e.rect = It(i, a, n)), (e.styles = tt(i, a, n)), gf[t](e, i, a, n);
    },
    lo = (e, t) => (e[1].zIndex > t[1].zIndex ? 1 : e[1].zIndex < t[1].zIndex ? -1 : 0),
    If = (e, t = {}, i, a) =>
        new Promise((n) => {
            let { background: r = null } = a,
                o = new FileReader();
            (o.onloadend = () => {
                let l = o.result,
                    s = document.createElement('div');
                (s.style.cssText =
                    'position:absolute;pointer-events:none;width:0;height:0;visibility:hidden;'),
                    (s.innerHTML = l);
                let u = s.querySelector('svg');
                document.body.appendChild(s);
                let c = u.getBBox();
                s.parentNode.removeChild(s);
                let d = s.querySelector('title'),
                    h = u.getAttribute('viewBox') || '',
                    f = u.getAttribute('width') || '',
                    p = u.getAttribute('height') || '',
                    m = parseFloat(f) || null,
                    g = parseFloat(p) || null,
                    b = (f.match(/[a-z]+/) || [])[0] || '',
                    E = (p.match(/[a-z]+/) || [])[0] || '',
                    T = h.split(' ').map(parseFloat),
                    _ = T.length ? { x: T[0], y: T[1], width: T[2], height: T[3] } : c,
                    y = m ?? _.width,
                    I = g ?? _.height;
                (u.style.overflow = 'visible'),
                    u.setAttribute('width', y),
                    u.setAttribute('height', I);
                let v = '';
                if (i && i.length) {
                    let X = { width: y, height: I };
                    (v = i.sort(lo).reduce((le, U) => {
                        let z = Ef(U[0], U[1]);
                        return (
                            Tf(z, U[0], U[1], X),
                            z.removeAttribute('id'),
                            z.getAttribute('opacity') === 1 && z.removeAttribute('opacity'),
                            le +
                                `
` +
                                z.outerHTML +
                                `
`
                        );
                    }, '')),
                        (v = `

<g>${v.replace(/&nbsp;/g, ' ')}</g>

`);
                }
                let R = t.aspectRatio || I / y,
                    S = y,
                    P = S * R,
                    x = typeof t.scaleToFit > 'u' || t.scaleToFit,
                    O = t.center ? t.center.x : 0.5,
                    B = t.center ? t.center.y : 0.5,
                    A = ao(
                        { width: y, height: I },
                        no({ width: S, height: P }, R),
                        t.rotation,
                        x ? { x: O, y: B } : { x: 0.5, y: 0.5 },
                    ),
                    C = t.zoom * A,
                    w = t.rotation * (180 / Math.PI),
                    L = { x: S * 0.5, y: P * 0.5 },
                    N = { x: L.x - y * O, y: L.y - I * B },
                    F = [
                        `rotate(${w} ${L.x} ${L.y})`,
                        `translate(${L.x} ${L.y})`,
                        `scale(${C})`,
                        `translate(${-L.x} ${-L.y})`,
                        `translate(${N.x} ${N.y})`,
                    ],
                    V = t.flip && t.flip.horizontal,
                    G = t.flip && t.flip.vertical,
                    $ = [
                        `scale(${V ? -1 : 1} ${G ? -1 : 1})`,
                        `translate(${V ? -y : 0} ${G ? -I : 0})`,
                    ],
                    q = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${S}${b}" height="${P}${E}" 
viewBox="0 0 ${S} ${P}" ${r ? 'style="background:' + r + '" ' : ''}
preserveAspectRatio="xMinYMin"
xmlns:xlink="http://www.w3.org/1999/xlink"
xmlns="http://www.w3.org/2000/svg">
<!-- Generated by PQINA - https://pqina.nl/ -->
<title>${d ? d.textContent : ''}</title>
<g transform="${F.join(' ')}">
<g transform="${$.join(' ')}">
${u.outerHTML}${v}
</g>
</g>
</svg>`;
                n(q);
            }),
                o.readAsText(e);
        }),
    bf = (e) => {
        let t;
        try {
            t = new ImageData(e.width, e.height);
        } catch {
            t = document
                .createElement('canvas')
                .getContext('2d')
                .createImageData(e.width, e.height);
        }
        return t.data.set(e.data), t;
    },
    _f = () => {
        let e = { resize: c, filter: u },
            t = (d, h) => (
                d.forEach((f) => {
                    h = e[f.type](h, f.data);
                }),
                h
            ),
            i = (d, h) => {
                let f = d.transforms,
                    p = null;
                if (
                    (f.forEach((m) => {
                        m.type === 'filter' && (p = m);
                    }),
                    p)
                ) {
                    let m = null;
                    f.forEach((g) => {
                        g.type === 'resize' && (m = g);
                    }),
                        m && ((m.data.matrix = p.data), (f = f.filter((g) => g.type !== 'filter')));
                }
                h(t(f, d.imageData));
            };
        self.onmessage = (d) => {
            i(d.data.message, (h) => {
                self.postMessage({ id: d.data.id, message: h }, [h.data.buffer]);
            });
        };
        let a = 1,
            n = 1,
            r = 1;
        function o(d, h, f) {
            let p = h[d] / 255,
                m = h[d + 1] / 255,
                g = h[d + 2] / 255,
                b = h[d + 3] / 255,
                E = p * f[0] + m * f[1] + g * f[2] + b * f[3] + f[4],
                T = p * f[5] + m * f[6] + g * f[7] + b * f[8] + f[9],
                _ = p * f[10] + m * f[11] + g * f[12] + b * f[13] + f[14],
                y = p * f[15] + m * f[16] + g * f[17] + b * f[18] + f[19],
                I = Math.max(0, E * y) + a * (1 - y),
                v = Math.max(0, T * y) + n * (1 - y),
                R = Math.max(0, _ * y) + r * (1 - y);
            (h[d] = Math.max(0, Math.min(1, I)) * 255),
                (h[d + 1] = Math.max(0, Math.min(1, v)) * 255),
                (h[d + 2] = Math.max(0, Math.min(1, R)) * 255);
        }
        let l = self.JSON.stringify([1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0]);
        function s(d) {
            return self.JSON.stringify(d || []) === l;
        }
        function u(d, h) {
            if (!h || s(h)) return d;
            let f = d.data,
                p = f.length,
                m = h[0],
                g = h[1],
                b = h[2],
                E = h[3],
                T = h[4],
                _ = h[5],
                y = h[6],
                I = h[7],
                v = h[8],
                R = h[9],
                S = h[10],
                P = h[11],
                x = h[12],
                O = h[13],
                B = h[14],
                A = h[15],
                C = h[16],
                w = h[17],
                L = h[18],
                N = h[19],
                F = 0,
                V = 0,
                G = 0,
                $ = 0,
                q = 0,
                X = 0,
                le = 0,
                U = 0,
                z = 0,
                D = 0,
                k = 0,
                W = 0;
            for (; F < p; F += 4)
                (V = f[F] / 255),
                    (G = f[F + 1] / 255),
                    ($ = f[F + 2] / 255),
                    (q = f[F + 3] / 255),
                    (X = V * m + G * g + $ * b + q * E + T),
                    (le = V * _ + G * y + $ * I + q * v + R),
                    (U = V * S + G * P + $ * x + q * O + B),
                    (z = V * A + G * C + $ * w + q * L + N),
                    (D = Math.max(0, X * z) + a * (1 - z)),
                    (k = Math.max(0, le * z) + n * (1 - z)),
                    (W = Math.max(0, U * z) + r * (1 - z)),
                    (f[F] = Math.max(0, Math.min(1, D)) * 255),
                    (f[F + 1] = Math.max(0, Math.min(1, k)) * 255),
                    (f[F + 2] = Math.max(0, Math.min(1, W)) * 255);
            return d;
        }
        function c(d, h) {
            let { mode: f = 'contain', upscale: p = !1, width: m, height: g, matrix: b } = h;
            if (((b = !b || s(b) ? null : b), !m && !g)) return u(d, b);
            if ((m === null ? (m = g) : g === null && (g = m), f !== 'force')) {
                let O = m / d.width,
                    B = g / d.height,
                    A = 1;
                if (
                    (f === 'cover' ? (A = Math.max(O, B)) : f === 'contain' && (A = Math.min(O, B)),
                    A > 1 && p === !1)
                )
                    return u(d, b);
                (m = d.width * A), (g = d.height * A);
            }
            let E = d.width,
                T = d.height,
                _ = Math.round(m),
                y = Math.round(g),
                I = d.data,
                v = new Uint8ClampedArray(_ * y * 4),
                R = E / _,
                S = T / y,
                P = Math.ceil(R * 0.5),
                x = Math.ceil(S * 0.5);
            for (let O = 0; O < y; O++)
                for (let B = 0; B < _; B++) {
                    let A = (B + O * _) * 4,
                        C = 0,
                        w = 0,
                        L = 0,
                        N = 0,
                        F = 0,
                        V = 0,
                        G = 0,
                        $ = (O + 0.5) * S;
                    for (let q = Math.floor(O * S); q < (O + 1) * S; q++) {
                        let X = Math.abs($ - (q + 0.5)) / x,
                            le = (B + 0.5) * R,
                            U = X * X;
                        for (let z = Math.floor(B * R); z < (B + 1) * R; z++) {
                            let D = Math.abs(le - (z + 0.5)) / P,
                                k = Math.sqrt(U + D * D);
                            if (k >= -1 && k <= 1 && ((C = 2 * k * k * k - 3 * k * k + 1), C > 0)) {
                                D = 4 * (z + q * E);
                                let W = I[D + 3];
                                (G += C * W),
                                    (L += C),
                                    W < 255 && (C = (C * W) / 250),
                                    (N += C * I[D]),
                                    (F += C * I[D + 1]),
                                    (V += C * I[D + 2]),
                                    (w += C);
                            }
                        }
                    }
                    (v[A] = N / w),
                        (v[A + 1] = F / w),
                        (v[A + 2] = V / w),
                        (v[A + 3] = G / L),
                        b && o(A, v, b);
                }
            return { data: v, width: _, height: y };
        }
    },
    Rf = (e, t) => {
        if (e.getUint32(t + 4, !1) !== 1165519206) return;
        t += 4;
        let i = e.getUint16((t += 6), !1) === 18761;
        t += e.getUint32(t + 4, i);
        let a = e.getUint16(t, i);
        t += 2;
        for (let n = 0; n < a; n++)
            if (e.getUint16(t + n * 12, i) === 274) return e.setUint16(t + n * 12 + 8, 1, i), !0;
        return !1;
    },
    yf = (e) => {
        let t = new DataView(e);
        if (t.getUint16(0) !== 65496) return null;
        let i = 2,
            a,
            n,
            r = !1;
        for (
            ;
            i < t.byteLength &&
            ((a = t.getUint16(i, !1)),
            (n = t.getUint16(i + 2, !1) + 2),
            !(
                !((a >= 65504 && a <= 65519) || a === 65534) ||
                (r || (r = Rf(t, i, n)), i + n > t.byteLength)
            ));

        )
            i += n;
        return e.slice(0, i);
    },
    Sf = (e) =>
        new Promise((t) => {
            let i = new FileReader();
            (i.onload = () => t(yf(i.result) || null)), i.readAsArrayBuffer(e.slice(0, 256 * 1024));
        }),
    wf = () =>
        (window.BlobBuilder =
            window.BlobBuilder ||
            window.WebKitBlobBuilder ||
            window.MozBlobBuilder ||
            window.MSBlobBuilder),
    vf = (e, t) => {
        let i = wf();
        if (i) {
            let a = new i();
            return a.append(e), a.getBlob(t);
        }
        return new Blob([e], { type: t });
    },
    Af = () => Math.random().toString(36).substr(2, 9),
    Lf = (e) => {
        let t = new Blob(['(', e.toString(), ')()'], {
                type: 'application/javascript',
            }),
            i = URL.createObjectURL(t),
            a = new Worker(i),
            n = [];
        return {
            transfer: () => {},
            post: (r, o, l) => {
                let s = Af();
                (n[s] = o),
                    (a.onmessage = (u) => {
                        let c = n[u.data.id];
                        c && (c(u.data.message), delete n[u.data.id]);
                    }),
                    a.postMessage({ id: s, message: r }, l);
            },
            terminate: () => {
                a.terminate(), URL.revokeObjectURL(i);
            },
        };
    },
    Mf = (e) =>
        new Promise((t, i) => {
            let a = new Image();
            (a.onload = () => {
                t(a);
            }),
                (a.onerror = (n) => {
                    i(n);
                }),
                (a.src = e);
        }),
    Of = (e) =>
        e.reduce(
            (t, i) => t.then((a) => i().then(Array.prototype.concat.bind(a))),
            Promise.resolve([]),
        ),
    xf = (e, t) =>
        new Promise((i) => {
            let a = { width: e.width, height: e.height },
                n = e.getContext('2d'),
                r = t.sort(lo).map(
                    (o) => () =>
                        new Promise((l) => {
                            Bf[o[0]](n, a, o[1], l) && l();
                        }),
                );
            Of(r).then(() => i(e));
        }),
    bt = (e, t) => {
        e.beginPath(),
            (e.lineCap = t['stroke-linecap']),
            (e.lineJoin = t['stroke-linejoin']),
            (e.lineWidth = t['stroke-width']),
            t['stroke-dasharray'].length && e.setLineDash(t['stroke-dasharray'].split(',')),
            (e.fillStyle = t.fill),
            (e.strokeStyle = t.stroke),
            (e.globalAlpha = t.opacity || 1);
    },
    _t = (e) => {
        e.fill(), e.stroke(), (e.globalAlpha = 1);
    },
    Df = (e, t, i) => {
        let a = It(i, t),
            n = tt(i, t);
        return bt(e, n), e.rect(a.x, a.y, a.width, a.height), _t(e, n), !0;
    },
    Pf = (e, t, i) => {
        let a = It(i, t),
            n = tt(i, t);
        bt(e, n);
        let r = a.x,
            o = a.y,
            l = a.width,
            s = a.height,
            u = 0.5522848,
            c = (l / 2) * u,
            d = (s / 2) * u,
            h = r + l,
            f = o + s,
            p = r + l / 2,
            m = o + s / 2;
        return (
            e.moveTo(r, m),
            e.bezierCurveTo(r, m - d, p - c, o, p, o),
            e.bezierCurveTo(p + c, o, h, m - d, h, m),
            e.bezierCurveTo(h, m + d, p + c, f, p, f),
            e.bezierCurveTo(p - c, f, r, m + d, r, m),
            _t(e, n),
            !0
        );
    },
    Ff = (e, t, i, a) => {
        let n = It(i, t),
            r = tt(i, t);
        bt(e, r);
        let o = new Image();
        new URL(i.src, window.location.href).origin !== window.location.origin &&
            (o.crossOrigin = ''),
            (o.onload = () => {
                if (i.fit === 'cover') {
                    let s = n.width / n.height,
                        u = s > 1 ? o.width : o.height * s,
                        c = s > 1 ? o.width / s : o.height,
                        d = o.width * 0.5 - u * 0.5,
                        h = o.height * 0.5 - c * 0.5;
                    e.drawImage(o, d, h, u, c, n.x, n.y, n.width, n.height);
                } else if (i.fit === 'contain') {
                    let s = Math.min(n.width / o.width, n.height / o.height),
                        u = s * o.width,
                        c = s * o.height,
                        d = n.x + n.width * 0.5 - u * 0.5,
                        h = n.y + n.height * 0.5 - c * 0.5;
                    e.drawImage(o, 0, 0, o.width, o.height, d, h, u, c);
                } else e.drawImage(o, 0, 0, o.width, o.height, n.x, n.y, n.width, n.height);
                _t(e, r), a();
            }),
            (o.src = i.src);
    },
    Cf = (e, t, i) => {
        let a = It(i, t),
            n = tt(i, t);
        bt(e, n);
        let r = se(i.fontSize, t),
            o = i.fontFamily || 'sans-serif',
            l = i.fontWeight || 'normal',
            s = i.textAlign || 'left';
        return (
            (e.font = `${l} ${r}px ${o}`),
            (e.textAlign = s),
            e.fillText(i.text, a.x, a.y),
            _t(e, n),
            !0
        );
    },
    zf = (e, t, i) => {
        let a = tt(i, t);
        bt(e, a), e.beginPath();
        let n = i.points.map((o) => ({
            x: se(o.x, t, 1, 'width'),
            y: se(o.y, t, 1, 'height'),
        }));
        e.moveTo(n[0].x, n[0].y);
        let r = n.length;
        for (let o = 1; o < r; o++) e.lineTo(n[o].x, n[o].y);
        return _t(e, a), !0;
    },
    Nf = (e, t, i) => {
        let a = It(i, t),
            n = tt(i, t);
        bt(e, n), e.beginPath();
        let r = { x: a.x, y: a.y },
            o = { x: a.x + a.width, y: a.y + a.height };
        e.moveTo(r.x, r.y), e.lineTo(o.x, o.y);
        let l = oo({ x: o.x - r.x, y: o.y - r.y }),
            s = 0.04 * Math.min(t.width, t.height);
        if (i.lineDecoration.indexOf('arrow-begin') !== -1) {
            let u = pi(l, s),
                c = mi(r, u),
                d = Ve(r, 2, c),
                h = Ve(r, -2, c);
            e.moveTo(d.x, d.y), e.lineTo(r.x, r.y), e.lineTo(h.x, h.y);
        }
        if (i.lineDecoration.indexOf('arrow-end') !== -1) {
            let u = pi(l, -s),
                c = mi(o, u),
                d = Ve(o, 2, c),
                h = Ve(o, -2, c);
            e.moveTo(d.x, d.y), e.lineTo(o.x, o.y), e.lineTo(h.x, h.y);
        }
        return _t(e, n), !0;
    },
    Bf = { rect: Df, ellipse: Pf, image: Ff, text: Cf, line: Nf, path: zf },
    Gf = (e) => {
        let t = document.createElement('canvas');
        return (
            (t.width = e.width), (t.height = e.height), t.getContext('2d').putImageData(e, 0, 0), t
        );
    },
    Vf = (e, t, i = {}) =>
        new Promise((a, n) => {
            if (!e || !$h(e)) return n({ status: 'not an image file', file: e });
            let {
                    stripImageHead: r,
                    beforeCreateBlob: o,
                    afterCreateBlob: l,
                    canvasMemoryLimit: s,
                } = i,
                { crop: u, size: c, filter: d, markup: h, output: f } = t,
                p =
                    t.image && t.image.orientation
                        ? Math.max(1, Math.min(8, t.image.orientation))
                        : null,
                m = f && f.quality,
                g = m === null ? null : m / 100,
                b = (f && f.type) || null,
                E = (f && f.background) || null,
                T = [];
            c &&
                (typeof c.width == 'number' || typeof c.height == 'number') &&
                T.push({ type: 'resize', data: c }),
                d && d.length === 20 && T.push({ type: 'filter', data: d });
            let _ = (v) => {
                    let R = l ? l(v) : v;
                    Promise.resolve(R).then(a);
                },
                y = (v, R) => {
                    let S = Gf(v),
                        P = h.length ? xf(S, h) : S;
                    Promise.resolve(P).then((x) => {
                        tf(x, R, o)
                            .then((O) => {
                                if ((ro(x), r)) return _(O);
                                Sf(e).then((B) => {
                                    B !== null &&
                                        (O = new Blob([B, O.slice(20)], {
                                            type: O.type,
                                        })),
                                        _(O);
                                });
                            })
                            .catch(n);
                    });
                };
            if (/svg/.test(e.type) && b === null)
                return If(e, u, h, { background: E }).then((v) => {
                    a(vf(v, 'image/svg+xml'));
                });
            let I = URL.createObjectURL(e);
            Mf(I)
                .then((v) => {
                    URL.revokeObjectURL(I);
                    let R = Jh(v, p, u, {
                            canvasMemoryLimit: s,
                            background: E,
                        }),
                        S = { quality: g, type: b || e.type };
                    if (!T.length) return y(R, S);
                    let P = Lf(_f);
                    P.post(
                        { transforms: T, imageData: R },
                        (x) => {
                            y(bf(x), S), P.terminate();
                        },
                        [R.data.buffer],
                    );
                })
                .catch(n);
        }),
    Uf = ['x', 'y', 'left', 'top', 'right', 'bottom', 'width', 'height'],
    kf = (e) => (typeof e == 'string' && /%/.test(e) ? parseFloat(e) / 100 : e),
    Hf = (e) => {
        let [t, i] = e,
            a = i.points ? {} : Uf.reduce((n, r) => ((n[r] = kf(i[r])), n), {});
        return [t, { zIndex: 0, ...i, ...a }];
    },
    Wf = (e) =>
        new Promise((t, i) => {
            let a = new Image();
            a.src = URL.createObjectURL(e);
            let n = () => {
                let o = a.naturalWidth,
                    l = a.naturalHeight;
                o &&
                    l &&
                    (URL.revokeObjectURL(a.src), clearInterval(r), t({ width: o, height: l }));
            };
            a.onerror = (o) => {
                URL.revokeObjectURL(a.src), clearInterval(r), i(o);
            };
            let r = setInterval(n, 1);
            n();
        });
typeof window < 'u' &&
    typeof window.document < 'u' &&
    (HTMLCanvasElement.prototype.toBlob ||
        Object.defineProperty(HTMLCanvasElement.prototype, 'toBlob', {
            value: function (e, t, i) {
                let a = this;
                setTimeout(() => {
                    let n = a.toDataURL(t, i).split(',')[1],
                        r = atob(n),
                        o = r.length,
                        l = new Uint8Array(o);
                    for (; o--; ) l[o] = r.charCodeAt(o);
                    e(new Blob([l], { type: t || 'image/png' }));
                });
            },
        }));
var Ea = typeof window < 'u' && typeof window.document < 'u',
    Yf = Ea && /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream,
    so = ({ addFilter: e, utils: t }) => {
        let { Type: i, forin: a, getFileFromBlob: n, isFile: r } = t,
            o = ['crop', 'resize', 'filter', 'markup', 'output'],
            l = (c) => (d, h, f) => d(h, c ? c(f) : f),
            s = (c) =>
                c.aspectRatio === null &&
                c.rotation === 0 &&
                c.zoom === 1 &&
                c.center &&
                c.center.x === 0.5 &&
                c.center.y === 0.5 &&
                c.flip &&
                c.flip.horizontal === !1 &&
                c.flip.vertical === !1;
        e(
            'SHOULD_PREPARE_OUTPUT',
            (c, { query: d }) =>
                new Promise((h) => {
                    h(!d('IS_ASYNC'));
                }),
        );
        let u = (c, d, h) =>
            new Promise((f) => {
                if (!c('GET_ALLOW_IMAGE_TRANSFORM') || h.archived || !r(d) || !Uh(d)) return f(!1);
                Wf(d)
                    .then(() => {
                        let p = c('GET_IMAGE_TRANSFORM_IMAGE_FILTER');
                        if (p) {
                            let m = p(d);
                            if (m == null) return handleRevert(!0);
                            if (typeof m == 'boolean') return f(m);
                            if (typeof m.then == 'function') return m.then(f);
                        }
                        f(!0);
                    })
                    .catch((p) => {
                        f(!1);
                    });
            });
        return (
            e('DID_CREATE_ITEM', (c, { query: d, dispatch: h }) => {
                d('GET_ALLOW_IMAGE_TRANSFORM') &&
                    c.extend(
                        'requestPrepare',
                        () =>
                            new Promise((f, p) => {
                                h(
                                    'REQUEST_PREPARE_OUTPUT',
                                    {
                                        query: c.id,
                                        item: c,
                                        success: f,
                                        failure: p,
                                    },
                                    !0,
                                );
                            }),
                    );
            }),
            e(
                'PREPARE_OUTPUT',
                (c, { query: d, item: h }) =>
                    new Promise((f) => {
                        u(d, c, h).then((p) => {
                            if (!p) return f(c);
                            let m = [];
                            d('GET_IMAGE_TRANSFORM_VARIANTS_INCLUDE_ORIGINAL') &&
                                m.push(
                                    () =>
                                        new Promise((R) => {
                                            R({
                                                name: d(
                                                    'GET_IMAGE_TRANSFORM_VARIANTS_ORIGINAL_NAME',
                                                ),
                                                file: c,
                                            });
                                        }),
                                ),
                                d('GET_IMAGE_TRANSFORM_VARIANTS_INCLUDE_DEFAULT') &&
                                    m.push(
                                        (R, S, P) =>
                                            new Promise((x) => {
                                                R(S, P).then((O) =>
                                                    x({
                                                        name: d(
                                                            'GET_IMAGE_TRANSFORM_VARIANTS_DEFAULT_NAME',
                                                        ),
                                                        file: O,
                                                    }),
                                                );
                                            }),
                                    );
                            let g = d('GET_IMAGE_TRANSFORM_VARIANTS') || {};
                            a(g, (R, S) => {
                                let P = l(S);
                                m.push(
                                    (x, O, B) =>
                                        new Promise((A) => {
                                            P(x, O, B).then((C) => A({ name: R, file: C }));
                                        }),
                                );
                            });
                            let b = d('GET_IMAGE_TRANSFORM_OUTPUT_QUALITY'),
                                E = d('GET_IMAGE_TRANSFORM_OUTPUT_QUALITY_MODE'),
                                T = b === null ? null : b / 100,
                                _ = d('GET_IMAGE_TRANSFORM_OUTPUT_MIME_TYPE'),
                                y = d('GET_IMAGE_TRANSFORM_CLIENT_TRANSFORMS') || o;
                            h.setMetadata('output', { type: _, quality: T, client: y }, !0);
                            let I = (R, S) =>
                                    new Promise((P, x) => {
                                        let O = { ...S };
                                        Object.keys(O)
                                            .filter((G) => G !== 'exif')
                                            .forEach((G) => {
                                                y.indexOf(G) === -1 && delete O[G];
                                            });
                                        let {
                                                resize: B,
                                                exif: A,
                                                output: C,
                                                crop: w,
                                                filter: L,
                                                markup: N,
                                            } = O,
                                            F = {
                                                image: {
                                                    orientation: A ? A.orientation : null,
                                                },
                                                output:
                                                    C &&
                                                    (C.type ||
                                                        typeof C.quality == 'number' ||
                                                        C.background)
                                                        ? {
                                                              type: C.type,
                                                              quality:
                                                                  typeof C.quality == 'number'
                                                                      ? C.quality * 100
                                                                      : null,
                                                              background:
                                                                  C.background ||
                                                                  d(
                                                                      'GET_IMAGE_TRANSFORM_CANVAS_BACKGROUND_COLOR',
                                                                  ) ||
                                                                  null,
                                                          }
                                                        : void 0,
                                                size:
                                                    B && (B.size.width || B.size.height)
                                                        ? {
                                                              mode: B.mode,
                                                              upscale: B.upscale,
                                                              ...B.size,
                                                          }
                                                        : void 0,
                                                crop: w && !s(w) ? { ...w } : void 0,
                                                markup: N && N.length ? N.map(Hf) : [],
                                                filter: L,
                                            };
                                        if (F.output) {
                                            let G = C.type ? C.type !== R.type : !1,
                                                $ = /\/jpe?g$/.test(R.type),
                                                q = C.quality !== null ? $ && E === 'always' : !1;
                                            if (!!!(F.size || F.crop || F.filter || G || q))
                                                return P(R);
                                        }
                                        let V = {
                                            beforeCreateBlob: d(
                                                'GET_IMAGE_TRANSFORM_BEFORE_CREATE_BLOB',
                                            ),
                                            afterCreateBlob: d(
                                                'GET_IMAGE_TRANSFORM_AFTER_CREATE_BLOB',
                                            ),
                                            canvasMemoryLimit: d(
                                                'GET_IMAGE_TRANSFORM_CANVAS_MEMORY_LIMIT',
                                            ),
                                            stripImageHead: d(
                                                'GET_IMAGE_TRANSFORM_OUTPUT_STRIP_IMAGE_HEAD',
                                            ),
                                        };
                                        Vf(R, F, V)
                                            .then((G) => {
                                                let $ = n(G, Wh(R.name, Yh(G.type)));
                                                P($);
                                            })
                                            .catch(x);
                                    }),
                                v = m.map((R) => R(I, c, h.getMetadata()));
                            Promise.all(v).then((R) => {
                                f(R.length === 1 && R[0].name === null ? R[0].file : R);
                            });
                        });
                    }),
            ),
            {
                options: {
                    allowImageTransform: [!0, i.BOOLEAN],
                    imageTransformImageFilter: [null, i.FUNCTION],
                    imageTransformOutputMimeType: [null, i.STRING],
                    imageTransformOutputQuality: [null, i.INT],
                    imageTransformOutputStripImageHead: [!0, i.BOOLEAN],
                    imageTransformClientTransforms: [null, i.ARRAY],
                    imageTransformOutputQualityMode: ['always', i.STRING],
                    imageTransformVariants: [null, i.OBJECT],
                    imageTransformVariantsIncludeDefault: [!0, i.BOOLEAN],
                    imageTransformVariantsDefaultName: [null, i.STRING],
                    imageTransformVariantsIncludeOriginal: [!1, i.BOOLEAN],
                    imageTransformVariantsOriginalName: ['original_', i.STRING],
                    imageTransformBeforeCreateBlob: [null, i.FUNCTION],
                    imageTransformAfterCreateBlob: [null, i.FUNCTION],
                    imageTransformCanvasMemoryLimit: [Ea && Yf ? 4096 * 4096 : null, i.INT],
                    imageTransformCanvasBackgroundColor: [null, i.STRING],
                },
            }
        );
    };
Ea && document.dispatchEvent(new CustomEvent('FilePond:pluginloaded', { detail: so }));
var co = so;
var Ta = (e) => /^video/.test(e.type),
    Vt = (e) => /^audio/.test(e.type),
    Ia = class {
        constructor(t, i) {
            (this.mediaEl = t),
                (this.audioElems = i),
                (this.onplayhead = !1),
                (this.duration = 0),
                (this.timelineWidth =
                    this.audioElems.timeline.offsetWidth - this.audioElems.playhead.offsetWidth),
                (this.moveplayheadFn = this.moveplayhead.bind(this)),
                this.registerListeners();
        }
        registerListeners() {
            this.mediaEl.addEventListener('timeupdate', this.timeUpdate.bind(this), !1),
                this.mediaEl.addEventListener(
                    'canplaythrough',
                    () => (this.duration = this.mediaEl.duration),
                    !1,
                ),
                this.audioElems.timeline.addEventListener(
                    'click',
                    this.timelineClicked.bind(this),
                    !1,
                ),
                this.audioElems.button.addEventListener('click', this.play.bind(this)),
                this.audioElems.playhead.addEventListener(
                    'mousedown',
                    this.mouseDown.bind(this),
                    !1,
                ),
                window.addEventListener('mouseup', this.mouseUp.bind(this), !1);
        }
        play() {
            this.mediaEl.paused ? this.mediaEl.play() : this.mediaEl.pause(),
                this.audioElems.button.classList.toggle('play'),
                this.audioElems.button.classList.toggle('pause');
        }
        timeUpdate() {
            let t = (this.mediaEl.currentTime / this.duration) * 100;
            (this.audioElems.playhead.style.marginLeft = t + '%'),
                this.mediaEl.currentTime === this.duration &&
                    (this.audioElems.button.classList.toggle('play'),
                    this.audioElems.button.classList.toggle('pause'));
        }
        moveplayhead(t) {
            let i = t.clientX - this.getPosition(this.audioElems.timeline);
            i >= 0 &&
                i <= this.timelineWidth &&
                (this.audioElems.playhead.style.marginLeft = i + 'px'),
                i < 0 && (this.audioElems.playhead.style.marginLeft = '0px'),
                i > this.timelineWidth &&
                    (this.audioElems.playhead.style.marginLeft = this.timelineWidth - 4 + 'px');
        }
        timelineClicked(t) {
            this.moveplayhead(t), (this.mediaEl.currentTime = this.duration * this.clickPercent(t));
        }
        mouseDown() {
            (this.onplayhead = !0),
                window.addEventListener('mousemove', this.moveplayheadFn, !0),
                this.mediaEl.removeEventListener('timeupdate', this.timeUpdate.bind(this), !1);
        }
        mouseUp(t) {
            window.removeEventListener('mousemove', this.moveplayheadFn, !0),
                this.onplayhead == !0 &&
                    (this.moveplayhead(t),
                    (this.mediaEl.currentTime = this.duration * this.clickPercent(t)),
                    this.mediaEl.addEventListener('timeupdate', this.timeUpdate.bind(this), !1)),
                (this.onplayhead = !1);
        }
        clickPercent(t) {
            return (t.clientX - this.getPosition(this.audioElems.timeline)) / this.timelineWidth;
        }
        getPosition(t) {
            return t.getBoundingClientRect().left;
        }
    },
    $f = (e) =>
        e.utils.createView({
            name: 'media-preview',
            tag: 'div',
            ignoreRect: !0,
            create: ({ root: t, props: i }) => {
                let { id: a } = i,
                    n = t.query('GET_ITEM', { id: i.id }),
                    r = Vt(n.file) ? 'audio' : 'video';
                if (
                    ((t.ref.media = document.createElement(r)),
                    t.ref.media.setAttribute('controls', !0),
                    t.element.appendChild(t.ref.media),
                    Vt(n.file))
                ) {
                    let o = document.createDocumentFragment();
                    (t.ref.audio = []),
                        (t.ref.audio.container = document.createElement('div')),
                        (t.ref.audio.button = document.createElement('span')),
                        (t.ref.audio.timeline = document.createElement('div')),
                        (t.ref.audio.playhead = document.createElement('div')),
                        (t.ref.audio.container.className = 'audioplayer'),
                        (t.ref.audio.button.className = 'playpausebtn play'),
                        (t.ref.audio.timeline.className = 'timeline'),
                        (t.ref.audio.playhead.className = 'playhead'),
                        t.ref.audio.timeline.appendChild(t.ref.audio.playhead),
                        t.ref.audio.container.appendChild(t.ref.audio.button),
                        t.ref.audio.container.appendChild(t.ref.audio.timeline),
                        o.appendChild(t.ref.audio.container),
                        t.element.appendChild(o);
                }
            },
            write: e.utils.createRoute({
                DID_MEDIA_PREVIEW_LOAD: ({ root: t, props: i }) => {
                    let { id: a } = i,
                        n = t.query('GET_ITEM', { id: i.id });
                    if (!n) return;
                    let r = window.URL || window.webkitURL,
                        o = new Blob([n.file], { type: n.file.type });
                    (t.ref.media.type = n.file.type),
                        (t.ref.media.src = (n.file.mock && n.file.url) || r.createObjectURL(o)),
                        Vt(n.file) && new Ia(t.ref.media, t.ref.audio),
                        t.ref.media.addEventListener(
                            'loadeddata',
                            () => {
                                let l = 75;
                                if (Ta(n.file)) {
                                    let s = t.ref.media.offsetWidth,
                                        u = t.ref.media.videoWidth / s;
                                    l = t.ref.media.videoHeight / u;
                                }
                                t.dispatch('DID_UPDATE_PANEL_HEIGHT', {
                                    id: i.id,
                                    height: l,
                                });
                            },
                            !1,
                        );
                },
            }),
        }),
    qf = (e) => {
        let t = ({ root: a, props: n }) => {
                let { id: r } = n;
                a.query('GET_ITEM', r) && a.dispatch('DID_MEDIA_PREVIEW_LOAD', { id: r });
            },
            i = ({ root: a, props: n }) => {
                let r = $f(e);
                a.ref.media = a.appendChildView(a.createChildView(r, { id: n.id }));
            };
        return e.utils.createView({
            name: 'media-preview-wrapper',
            create: i,
            write: e.utils.createRoute({
                DID_MEDIA_PREVIEW_CONTAINER_CREATE: t,
            }),
        });
    },
    ba = (e) => {
        let { addFilter: t, utils: i } = e,
            { Type: a, createRoute: n } = i,
            r = qf(e);
        return (
            t('CREATE_VIEW', (o) => {
                let { is: l, view: s, query: u } = o;
                if (!l('file')) return;
                let c = ({ root: d, props: h }) => {
                    let { id: f } = h,
                        p = u('GET_ITEM', f),
                        m = u('GET_ALLOW_VIDEO_PREVIEW'),
                        g = u('GET_ALLOW_AUDIO_PREVIEW');
                    !p ||
                        p.archived ||
                        ((!Ta(p.file) || !m) && (!Vt(p.file) || !g)) ||
                        ((d.ref.mediaPreview = s.appendChildView(s.createChildView(r, { id: f }))),
                        d.dispatch('DID_MEDIA_PREVIEW_CONTAINER_CREATE', {
                            id: f,
                        }));
                };
                s.registerWriter(
                    n({ DID_LOAD_ITEM: c }, ({ root: d, props: h }) => {
                        let { id: f } = h,
                            p = u('GET_ITEM', f),
                            m = d.query('GET_ALLOW_VIDEO_PREVIEW'),
                            g = d.query('GET_ALLOW_AUDIO_PREVIEW');
                        !p || ((!Ta(p.file) || !m) && (!Vt(p.file) || !g)) || d.rect.element.hidden;
                    }),
                );
            }),
            {
                options: {
                    allowVideoPreview: [!0, a.BOOLEAN],
                    allowAudioPreview: [!0, a.BOOLEAN],
                },
            }
        );
    },
    Xf = typeof window < 'u' && typeof window.document < 'u';
Xf && document.dispatchEvent(new CustomEvent('FilePond:pluginloaded', { detail: ba }));
var uo = {
    labelIdle:
        '\u0627\u0633\u062D\u0628 \u0648 \u0627\u062F\u0631\u062C \u0645\u0644\u0641\u0627\u062A\u0643 \u0623\u0648 <span class="filepond--label-action"> \u062A\u0635\u0641\u062D </span>',
    labelInvalidField:
        '\u0627\u0644\u062D\u0642\u0644 \u064A\u062D\u062A\u0648\u064A \u0639\u0644\u0649 \u0645\u0644\u0641\u0627\u062A \u063A\u064A\u0631 \u0635\u0627\u0644\u062D\u0629',
    labelFileWaitingForSize:
        '\u0628\u0627\u0646\u062A\u0638\u0627\u0631 \u0627\u0644\u062D\u062C\u0645',
    labelFileSizeNotAvailable:
        '\u0627\u0644\u062D\u062C\u0645 \u063A\u064A\u0631 \u0645\u062A\u0627\u062D',
    labelFileLoading: '\u0628\u0627\u0644\u0625\u0646\u062A\u0638\u0627\u0631',
    labelFileLoadError:
        '\u062D\u062F\u062B \u062E\u0637\u0623 \u0623\u062B\u0646\u0627\u0621 \u0627\u0644\u062A\u062D\u0645\u064A\u0644',
    labelFileProcessing: '\u064A\u062A\u0645 \u0627\u0644\u0631\u0641\u0639',
    labelFileProcessingComplete: '\u062A\u0645 \u0627\u0644\u0631\u0641\u0639',
    labelFileProcessingAborted:
        '\u062A\u0645 \u0625\u0644\u063A\u0627\u0621 \u0627\u0644\u0631\u0641\u0639',
    labelFileProcessingError:
        '\u062D\u062F\u062B \u062E\u0637\u0623 \u0623\u062B\u0646\u0627\u0621 \u0627\u0644\u0631\u0641\u0639',
    labelFileProcessingRevertError:
        '\u062D\u062F\u062B \u062E\u0637\u0623 \u0623\u062B\u0646\u0627\u0621 \u0627\u0644\u062A\u0631\u0627\u062C\u0639',
    labelFileRemoveError:
        '\u062D\u062F\u062B \u062E\u0637\u0623 \u0623\u062B\u0646\u0627\u0621 \u0627\u0644\u062D\u0630\u0641',
    labelTapToCancel: '\u0627\u0646\u0642\u0631 \u0644\u0644\u0625\u0644\u063A\u0627\u0621',
    labelTapToRetry:
        '\u0627\u0646\u0642\u0631 \u0644\u0625\u0639\u0627\u062F\u0629 \u0627\u0644\u0645\u062D\u0627\u0648\u0644\u0629',
    labelTapToUndo: '\u0627\u0646\u0642\u0631 \u0644\u0644\u062A\u0631\u0627\u062C\u0639',
    labelButtonRemoveItem: '\u0645\u0633\u062D',
    labelButtonAbortItemLoad: '\u0625\u0644\u063A\u0627\u0621',
    labelButtonRetryItemLoad: '\u0625\u0639\u0627\u062F\u0629',
    labelButtonAbortItemProcessing: '\u0625\u0644\u063A\u0627\u0621',
    labelButtonUndoItemProcessing: '\u062A\u0631\u0627\u062C\u0639',
    labelButtonRetryItemProcessing: '\u0625\u0639\u0627\u062F\u0629',
    labelButtonProcessItem: '\u0631\u0641\u0639',
    labelMaxFileSizeExceeded:
        '\u0627\u0644\u0645\u0644\u0641 \u0643\u0628\u064A\u0631 \u062C\u062F\u0627',
    labelMaxFileSize:
        '\u062D\u062C\u0645 \u0627\u0644\u0645\u0644\u0641 \u0627\u0644\u0623\u0642\u0635\u0649: {filesize}',
    labelMaxTotalFileSizeExceeded:
        '\u062A\u0645 \u062A\u062C\u0627\u0648\u0632 \u0627\u0644\u062D\u062F \u0627\u0644\u0623\u0642\u0635\u0649 \u0644\u0644\u062D\u062C\u0645 \u0627\u0644\u0625\u062C\u0645\u0627\u0644\u064A',
    labelMaxTotalFileSize:
        '\u0627\u0644\u062D\u062F \u0627\u0644\u0623\u0642\u0635\u0649 \u0644\u062D\u062C\u0645 \u0627\u0644\u0645\u0644\u0641: {filesize}',
    labelFileTypeNotAllowed:
        '\u0645\u0644\u0641 \u0645\u0646 \u0646\u0648\u0639 \u063A\u064A\u0631 \u0635\u0627\u0644\u062D',
    fileValidateTypeLabelExpectedTypes:
        '\u062A\u062A\u0648\u0642\u0639 {allButLastType} \u0645\u0646 {lastType}',
    imageValidateSizeLabelFormatError:
        '\u0646\u0648\u0639 \u0627\u0644\u0635\u0648\u0631\u0629 \u063A\u064A\u0631 \u0645\u062F\u0639\u0648\u0645',
    imageValidateSizeLabelImageSizeTooSmall:
        '\u0627\u0644\u0635\u0648\u0631\u0629 \u0635\u063A\u064A\u0631 \u062C\u062F\u0627',
    imageValidateSizeLabelImageSizeTooBig:
        '\u0627\u0644\u0635\u0648\u0631\u0629 \u0643\u0628\u064A\u0631\u0629 \u062C\u062F\u0627',
    imageValidateSizeLabelExpectedMinSize:
        '\u0627\u0644\u062D\u062F \u0627\u0644\u0623\u062F\u0646\u0649 \u0644\u0644\u0623\u0628\u0639\u0627\u062F \u0647\u0648: {minWidth} \xD7 {minHeight}',
    imageValidateSizeLabelExpectedMaxSize:
        '\u0627\u0644\u062D\u062F \u0627\u0644\u0623\u0642\u0635\u0649 \u0644\u0644\u0623\u0628\u0639\u0627\u062F \u0647\u0648: {maxWidth} \xD7 {maxHeight}',
    imageValidateSizeLabelImageResolutionTooLow:
        '\u0627\u0644\u062F\u0642\u0629 \u0636\u0639\u064A\u0641\u0629 \u062C\u062F\u0627',
    imageValidateSizeLabelImageResolutionTooHigh:
        '\u0627\u0644\u062F\u0642\u0629 \u0645\u0631\u062A\u0641\u0639\u0629 \u062C\u062F\u0627',
    imageValidateSizeLabelExpectedMinResolution:
        '\u0623\u0642\u0644 \u062F\u0642\u0629: {minResolution}',
    imageValidateSizeLabelExpectedMaxResolution:
        '\u0623\u0642\u0635\u0649 \u062F\u0642\u0629: {maxResolution}',
};
var ho = {
    labelIdle:
        'P\u0159et\xE1hn\u011Bte soubor sem (drag&drop) nebo <span class="filepond--label-action"> Vyhledat </span>',
    labelInvalidField: 'Pole obsahuje chybn\xE9 soubory',
    labelFileWaitingForSize: 'Zji\u0161\u0165uje se velikost',
    labelFileSizeNotAvailable: 'Velikost nen\xED zn\xE1m\xE1',
    labelFileLoading: 'P\u0159en\xE1\u0161\xED se',
    labelFileLoadError: 'Chyba p\u0159i p\u0159enosu',
    labelFileProcessing: 'Prob\xEDh\xE1 upload',
    labelFileProcessingComplete: 'Upload dokon\u010Den',
    labelFileProcessingAborted: 'Upload stornov\xE1n',
    labelFileProcessingError: 'Chyba p\u0159i uploadu',
    labelFileProcessingRevertError: 'Chyba p\u0159i obnov\u011B',
    labelFileRemoveError: 'Chyba p\u0159i odstran\u011Bn\xED',
    labelTapToCancel: 'klepn\u011Bte pro storno',
    labelTapToRetry: 'klepn\u011Bte pro opakov\xE1n\xED',
    labelTapToUndo: 'klepn\u011Bte pro vr\xE1cen\xED',
    labelButtonRemoveItem: 'Odstranit',
    labelButtonAbortItemLoad: 'Storno',
    labelButtonRetryItemLoad: 'Opakovat',
    labelButtonAbortItemProcessing: 'Zp\u011Bt',
    labelButtonUndoItemProcessing: 'Vr\xE1tit',
    labelButtonRetryItemProcessing: 'Opakovat',
    labelButtonProcessItem: 'Upload',
    labelMaxFileSizeExceeded: 'Soubor je p\u0159\xEDli\u0161 velk\xFD',
    labelMaxFileSize: 'Nejv\u011Bt\u0161\xED velikost souboru je {filesize}',
    labelMaxTotalFileSizeExceeded:
        'P\u0159ekro\u010Dena maxim\xE1ln\xED celkov\xE1 velikost souboru',
    labelMaxTotalFileSize: 'Maxim\xE1ln\xED celkov\xE1 velikost souboru je {filesize}',
    labelFileTypeNotAllowed: 'Soubor je nespr\xE1vn\xE9ho typu',
    fileValidateTypeLabelExpectedTypes: 'O\u010Dek\xE1v\xE1 se {allButLastType} nebo {lastType}',
    imageValidateSizeLabelFormatError: 'Obr\xE1zek tohoto typu nen\xED podporov\xE1n',
    imageValidateSizeLabelImageSizeTooSmall: 'Obr\xE1zek je p\u0159\xEDli\u0161 mal\xFD',
    imageValidateSizeLabelImageSizeTooBig: 'Obr\xE1zek je p\u0159\xEDli\u0161 velk\xFD',
    imageValidateSizeLabelExpectedMinSize:
        'Minim\xE1ln\xED rozm\u011Br je {minWidth} \xD7 {minHeight}',
    imageValidateSizeLabelExpectedMaxSize:
        'Maxim\xE1ln\xED rozm\u011Br je {maxWidth} \xD7 {maxHeight}',
    imageValidateSizeLabelImageResolutionTooLow: 'Rozli\u0161en\xED je p\u0159\xEDli\u0161 mal\xE9',
    imageValidateSizeLabelImageResolutionTooHigh:
        'Rozli\u0161en\xED je p\u0159\xEDli\u0161 velk\xE9',
    imageValidateSizeLabelExpectedMinResolution:
        'Minim\xE1ln\xED rozli\u0161en\xED je {minResolution}',
    imageValidateSizeLabelExpectedMaxResolution:
        'Maxim\xE1ln\xED rozli\u0161en\xED je {maxResolution}',
};
var fo = {
    labelIdle:
        'Tr\xE6k & slip filer eller <span class = "filepond - label-action"> Gennemse </span>',
    labelInvalidField: 'Felt indeholder ugyldige filer',
    labelFileWaitingForSize: 'Venter p\xE5 st\xF8rrelse',
    labelFileSizeNotAvailable: 'St\xF8rrelse ikke tilg\xE6ngelig',
    labelFileLoading: 'Loader',
    labelFileLoadError: 'Load fejlede',
    labelFileProcessing: 'Uploader',
    labelFileProcessingComplete: 'Upload f\xE6rdig',
    labelFileProcessingAborted: 'Upload annulleret',
    labelFileProcessingError: 'Upload fejlede',
    labelFileProcessingRevertError: 'Fortryd fejlede',
    labelFileRemoveError: 'Fjern fejlede',
    labelTapToCancel: 'tryk for at annullere',
    labelTapToRetry: 'tryk for at pr\xF8ve igen',
    labelTapToUndo: 'tryk for at fortryde',
    labelButtonRemoveItem: 'Fjern',
    labelButtonAbortItemLoad: 'Annuller',
    labelButtonRetryItemLoad: 'Fors\xF8g igen',
    labelButtonAbortItemProcessing: 'Annuller',
    labelButtonUndoItemProcessing: 'Fortryd',
    labelButtonRetryItemProcessing: 'Pr\xF8v igen',
    labelButtonProcessItem: 'Upload',
    labelMaxFileSizeExceeded: 'Filen er for stor',
    labelMaxFileSize: 'Maksimal filst\xF8rrelse er {filesize}',
    labelMaxTotalFileSizeExceeded: 'Maksimal totalst\xF8rrelse overskredet',
    labelMaxTotalFileSize: 'Maksimal total filst\xF8rrelse er {filesize}',
    labelFileTypeNotAllowed: 'Ugyldig filtype',
    fileValidateTypeLabelExpectedTypes: 'Forventer {allButLastType} eller {lastType}',
    imageValidateSizeLabelFormatError: 'Ugyldigt format',
    imageValidateSizeLabelImageSizeTooSmall: 'Billedet er for lille',
    imageValidateSizeLabelImageSizeTooBig: 'Billedet er for stort',
    imageValidateSizeLabelExpectedMinSize: 'Minimum st\xF8rrelse er {minBredde} \xD7 {minH\xF8jde}',
    imageValidateSizeLabelExpectedMaxSize: 'Maksimal st\xF8rrelse er {maxWidth} \xD7 {maxHeight}',
    imageValidateSizeLabelImageResolutionTooLow: 'For lav opl\xF8sning',
    imageValidateSizeLabelImageResolutionTooHigh: 'For h\xF8j opl\xF8sning',
    imageValidateSizeLabelExpectedMinResolution: 'Minimum opl\xF8sning er {minResolution}',
    imageValidateSizeLabelExpectedMaxResolution: 'Maksimal opl\xF8sning er {maxResolution}',
};
var po = {
    labelIdle: 'Dateien ablegen oder <span class="filepond--label-action"> ausw\xE4hlen </span>',
    labelInvalidField: 'Feld beinhaltet ung\xFCltige Dateien',
    labelFileWaitingForSize: 'Dateigr\xF6\xDFe berechnen',
    labelFileSizeNotAvailable: 'Dateigr\xF6\xDFe nicht verf\xFCgbar',
    labelFileLoading: 'Laden',
    labelFileLoadError: 'Fehler beim Laden',
    labelFileProcessing: 'Upload l\xE4uft',
    labelFileProcessingComplete: 'Upload abgeschlossen',
    labelFileProcessingAborted: 'Upload abgebrochen',
    labelFileProcessingError: 'Fehler beim Upload',
    labelFileProcessingRevertError: 'Fehler beim Wiederherstellen',
    labelFileRemoveError: 'Fehler beim L\xF6schen',
    labelTapToCancel: 'abbrechen',
    labelTapToRetry: 'erneut versuchen',
    labelTapToUndo: 'r\xFCckg\xE4ngig',
    labelButtonRemoveItem: 'Entfernen',
    labelButtonAbortItemLoad: 'Verwerfen',
    labelButtonRetryItemLoad: 'Erneut versuchen',
    labelButtonAbortItemProcessing: 'Abbrechen',
    labelButtonUndoItemProcessing: 'R\xFCckg\xE4ngig',
    labelButtonRetryItemProcessing: 'Erneut versuchen',
    labelButtonProcessItem: 'Upload',
    labelMaxFileSizeExceeded: 'Datei ist zu gro\xDF',
    labelMaxFileSize: 'Maximale Dateigr\xF6\xDFe: {filesize}',
    labelMaxTotalFileSizeExceeded: 'Maximale gesamte Dateigr\xF6\xDFe \xFCberschritten',
    labelMaxTotalFileSize: 'Maximale gesamte Dateigr\xF6\xDFe: {filesize}',
    labelFileTypeNotAllowed: 'Dateityp ung\xFCltig',
    fileValidateTypeLabelExpectedTypes: 'Erwartet {allButLastType} oder {lastType}',
    imageValidateSizeLabelFormatError: 'Bildtyp nicht unterst\xFCtzt',
    imageValidateSizeLabelImageSizeTooSmall: 'Bild ist zu klein',
    imageValidateSizeLabelImageSizeTooBig: 'Bild ist zu gro\xDF',
    imageValidateSizeLabelExpectedMinSize: 'Mindestgr\xF6\xDFe: {minWidth} \xD7 {minHeight}',
    imageValidateSizeLabelExpectedMaxSize: 'Maximale Gr\xF6\xDFe: {maxWidth} \xD7 {maxHeight}',
    imageValidateSizeLabelImageResolutionTooLow: 'Aufl\xF6sung ist zu niedrig',
    imageValidateSizeLabelImageResolutionTooHigh: 'Aufl\xF6sung ist zu hoch',
    imageValidateSizeLabelExpectedMinResolution: 'Mindestaufl\xF6sung: {minResolution}',
    imageValidateSizeLabelExpectedMaxResolution: 'Maximale Aufl\xF6sung: {maxResolution}',
};
var mo = {
    labelIdle: 'Drag & Drop your files or <span class="filepond--label-action"> Browse </span>',
    labelInvalidField: 'Field contains invalid files',
    labelFileWaitingForSize: 'Waiting for size',
    labelFileSizeNotAvailable: 'Size not available',
    labelFileLoading: 'Loading',
    labelFileLoadError: 'Error during load',
    labelFileProcessing: 'Uploading',
    labelFileProcessingComplete: 'Upload complete',
    labelFileProcessingAborted: 'Upload cancelled',
    labelFileProcessingError: 'Error during upload',
    labelFileProcessingRevertError: 'Error during revert',
    labelFileRemoveError: 'Error during remove',
    labelTapToCancel: 'tap to cancel',
    labelTapToRetry: 'tap to retry',
    labelTapToUndo: 'tap to undo',
    labelButtonRemoveItem: 'Remove',
    labelButtonAbortItemLoad: 'Abort',
    labelButtonRetryItemLoad: 'Retry',
    labelButtonAbortItemProcessing: 'Cancel',
    labelButtonUndoItemProcessing: 'Undo',
    labelButtonRetryItemProcessing: 'Retry',
    labelButtonProcessItem: 'Upload',
    labelMaxFileSizeExceeded: 'File is too large',
    labelMaxFileSize: 'Maximum file size is {filesize}',
    labelMaxTotalFileSizeExceeded: 'Maximum total size exceeded',
    labelMaxTotalFileSize: 'Maximum total file size is {filesize}',
    labelFileTypeNotAllowed: 'File of invalid type',
    fileValidateTypeLabelExpectedTypes: 'Expects {allButLastType} or {lastType}',
    imageValidateSizeLabelFormatError: 'Image type not supported',
    imageValidateSizeLabelImageSizeTooSmall: 'Image is too small',
    imageValidateSizeLabelImageSizeTooBig: 'Image is too big',
    imageValidateSizeLabelExpectedMinSize: 'Minimum size is {minWidth} \xD7 {minHeight}',
    imageValidateSizeLabelExpectedMaxSize: 'Maximum size is {maxWidth} \xD7 {maxHeight}',
    imageValidateSizeLabelImageResolutionTooLow: 'Resolution is too low',
    imageValidateSizeLabelImageResolutionTooHigh: 'Resolution is too high',
    imageValidateSizeLabelExpectedMinResolution: 'Minimum resolution is {minResolution}',
    imageValidateSizeLabelExpectedMaxResolution: 'Maximum resolution is {maxResolution}',
};
var go = {
    labelIdle:
        'Arrastra y suelta tus archivos o <span class = "filepond--label-action"> Examinar <span>',
    labelInvalidField: 'El campo contiene archivos inv\xE1lidos',
    labelFileWaitingForSize: 'Esperando tama\xF1o',
    labelFileSizeNotAvailable: 'Tama\xF1o no disponible',
    labelFileLoading: 'Cargando',
    labelFileLoadError: 'Error durante la carga',
    labelFileProcessing: 'Cargando',
    labelFileProcessingComplete: 'Carga completa',
    labelFileProcessingAborted: 'Carga cancelada',
    labelFileProcessingError: 'Error durante la carga',
    labelFileProcessingRevertError: 'Error durante la reversi\xF3n',
    labelFileRemoveError: 'Error durante la eliminaci\xF3n',
    labelTapToCancel: 'toca para cancelar',
    labelTapToRetry: 'tocar para volver a intentar',
    labelTapToUndo: 'tocar para deshacer',
    labelButtonRemoveItem: 'Eliminar',
    labelButtonAbortItemLoad: 'Abortar',
    labelButtonRetryItemLoad: 'Reintentar',
    labelButtonAbortItemProcessing: 'Cancelar',
    labelButtonUndoItemProcessing: 'Deshacer',
    labelButtonRetryItemProcessing: 'Reintentar',
    labelButtonProcessItem: 'Cargar',
    labelMaxFileSizeExceeded: 'El archivo es demasiado grande',
    labelMaxFileSize: 'El tama\xF1o m\xE1ximo del archivo es {filesize}',
    labelMaxTotalFileSizeExceeded: 'Tama\xF1o total m\xE1ximo excedido',
    labelMaxTotalFileSize: 'El tama\xF1o total m\xE1ximo del archivo es {filesize}',
    labelFileTypeNotAllowed: 'Archivo de tipo no v\xE1lido',
    fileValidateTypeLabelExpectedTypes: 'Espera {allButLastType} o {lastType}',
    imageValidateSizeLabelFormatError: 'Tipo de imagen no compatible',
    imageValidateSizeLabelImageSizeTooSmall: 'La imagen es demasiado peque\xF1a',
    imageValidateSizeLabelImageSizeTooBig: 'La imagen es demasiado grande',
    imageValidateSizeLabelExpectedMinSize: 'El tama\xF1o m\xEDnimo es {minWidth} \xD7 {minHeight}',
    imageValidateSizeLabelExpectedMaxSize: 'El tama\xF1o m\xE1ximo es {maxWidth} \xD7 {maxHeight}',
    imageValidateSizeLabelImageResolutionTooLow: 'La resoluci\xF3n es demasiado baja',
    imageValidateSizeLabelImageResolutionTooHigh: 'La resoluci\xF3n es demasiado alta',
    imageValidateSizeLabelExpectedMinResolution: 'La resoluci\xF3n m\xEDnima es {minResolution}',
    imageValidateSizeLabelExpectedMaxResolution: 'La resoluci\xF3n m\xE1xima es {maxResolution}',
};
var Eo = {
    labelIdle:
        '\u0641\u0627\u06CC\u0644 \u0631\u0627 \u0627\u06CC\u0646\u062C\u0627 \u0628\u06A9\u0634\u06CC\u062F \u0648 \u0631\u0647\u0627 \u06A9\u0646\u06CC\u062F\u060C \u06CC\u0627 <span class="filepond--label-action"> \u062C\u0633\u062A\u062C\u0648 \u06A9\u0646\u06CC\u062F </span>',
    labelInvalidField:
        '\u0641\u06CC\u0644\u062F \u062F\u0627\u0631\u0627\u06CC \u0641\u0627\u06CC\u0644 \u0647\u0627\u06CC \u0646\u0627\u0645\u0639\u062A\u0628\u0631 \u0627\u0633\u062A',
    labelFileWaitingForSize: 'Waiting for size',
    labelFileSizeNotAvailable:
        '\u062D\u062C\u0645 \u0641\u0627\u06CC\u0644 \u0645\u062C\u0627\u0632 \u0646\u06CC\u0633\u062A',
    labelFileLoading:
        '\u062F\u0631\u062D\u0627\u0644 \u0628\u0627\u0631\u06AF\u0630\u0627\u0631\u06CC',
    labelFileLoadError:
        '\u062E\u0637\u0627 \u062F\u0631 \u0632\u0645\u0627\u0646 \u0627\u062C\u0631\u0627',
    labelFileProcessing:
        '\u062F\u0631\u062D\u0627\u0644 \u0628\u0627\u0631\u06AF\u0630\u0627\u0631\u06CC',
    labelFileProcessingComplete:
        '\u0628\u0627\u0631\u06AF\u0630\u0627\u0631\u06CC \u06A9\u0627\u0645\u0644 \u0634\u062F',
    labelFileProcessingAborted:
        '\u0628\u0627\u0631\u06AF\u0630\u0627\u0631\u06CC \u0644\u063A\u0648 \u0634\u062F',
    labelFileProcessingError:
        '\u062E\u0637\u0627 \u062F\u0631 \u0632\u0645\u0627\u0646 \u0628\u0627\u0631\u06AF\u0630\u0627\u0631\u06CC',
    labelFileProcessingRevertError:
        '\u062E\u0637\u0627 \u062F\u0631 \u0632\u0645\u0627\u0646 \u062D\u0630\u0641',
    labelFileRemoveError:
        '\u062E\u0637\u0627 \u062F\u0631 \u0632\u0645\u0627\u0646 \u062D\u0630\u0641',
    labelTapToCancel:
        '\u0628\u0631\u0627\u06CC \u0644\u063A\u0648 \u0636\u0631\u0628\u0647 \u0628\u0632\u0646\u06CC\u062F',
    labelTapToRetry:
        '\u0628\u0631\u0627\u06CC \u062A\u06A9\u0631\u0627\u0631 \u06A9\u0644\u06CC\u06A9 \u06A9\u0646\u06CC\u062F',
    labelTapToUndo:
        '\u0628\u0631\u0627\u06CC \u0628\u0631\u06AF\u0634\u062A \u06A9\u0644\u06CC\u06A9 \u06A9\u0646\u06CC\u062F',
    labelButtonRemoveItem: '\u062D\u0630\u0641',
    labelButtonAbortItemLoad: '\u0644\u063A\u0648',
    labelButtonRetryItemLoad: '\u062A\u06A9\u0631\u0627\u0631',
    labelButtonAbortItemProcessing: '\u0644\u063A\u0648',
    labelButtonUndoItemProcessing: '\u0628\u0631\u06AF\u0634\u062A',
    labelButtonRetryItemProcessing: '\u062A\u06A9\u0631\u0627\u0631',
    labelButtonProcessItem: '\u0628\u0627\u0631\u06AF\u0630\u0627\u0631\u06CC',
    labelMaxFileSizeExceeded:
        '\u0641\u0627\u06CC\u0644 \u0628\u0633\u06CC\u0627\u0631 \u062D\u062C\u06CC\u0645 \u0627\u0633\u062A',
    labelMaxFileSize:
        '\u062D\u062F\u0627\u06A9\u062B\u0631 \u0645\u062C\u0627\u0632 \u0641\u0627\u06CC\u0644 {filesize} \u0627\u0633\u062A',
    labelMaxTotalFileSizeExceeded:
        '\u0627\u0632 \u062D\u062F\u0627\u06A9\u062B\u0631 \u062D\u062C\u0645 \u0641\u0627\u06CC\u0644 \u0628\u06CC\u0634\u062A\u0631 \u0634\u062F',
    labelMaxTotalFileSize:
        '\u062D\u062F\u0627\u06A9\u062B\u0631 \u062D\u062C\u0645 \u0641\u0627\u06CC\u0644 {filesize} \u0627\u0633\u062A',
    labelFileTypeNotAllowed:
        '\u0646\u0648\u0639 \u0641\u0627\u06CC\u0644 \u0646\u0627\u0645\u0639\u062A\u0628\u0631 \u0627\u0633\u062A',
    fileValidateTypeLabelExpectedTypes:
        '\u062F\u0631 \u0627\u0646\u062A\u0638\u0627\u0631 {allButLastType} \u06CC\u0627 {lastType}',
    imageValidateSizeLabelFormatError:
        '\u0641\u0631\u0645\u062A \u062A\u0635\u0648\u06CC\u0631 \u067E\u0634\u062A\u06CC\u0628\u0627\u0646\u06CC \u0646\u0645\u06CC \u0634\u0648\u062F',
    imageValidateSizeLabelImageSizeTooSmall:
        '\u062A\u0635\u0648\u06CC\u0631 \u0628\u0633\u06CC\u0627\u0631 \u06A9\u0648\u0686\u06A9 \u0627\u0633\u062A',
    imageValidateSizeLabelImageSizeTooBig:
        '\u062A\u0635\u0648\u06CC\u0631 \u0628\u0633\u06CC\u0627\u0631 \u0628\u0632\u0631\u06AF \u0627\u0633\u062A',
    imageValidateSizeLabelExpectedMinSize:
        '\u062D\u062F\u0627\u0642\u0644 \u0627\u0646\u062F\u0627\u0632\u0647 {minWidth} \xD7 {minHeight} \u0627\u0633\u062A',
    imageValidateSizeLabelExpectedMaxSize:
        '\u062D\u062F\u0627\u06A9\u062B\u0631 \u0627\u0646\u062F\u0627\u0632\u0647 {maxWidth} \xD7 {maxHeight} \u0627\u0633\u062A',
    imageValidateSizeLabelImageResolutionTooLow:
        '\u0648\u0636\u0648\u062D \u062A\u0635\u0648\u06CC\u0631 \u0628\u0633\u06CC\u0627\u0631 \u06A9\u0645 \u0627\u0633\u062A',
    imageValidateSizeLabelImageResolutionTooHigh:
        '\u0648\u0636\u0648\u0639 \u062A\u0635\u0648\u06CC\u0631 \u0628\u0633\u06CC\u0627\u0631 \u0632\u06CC\u0627\u062F \u0627\u0633\u062A',
    imageValidateSizeLabelExpectedMinResolution:
        '\u062D\u062F\u0627\u0642\u0644 \u0648\u0636\u0648\u062D \u062A\u0635\u0648\u06CC\u0631 {minResolution} \u0627\u0633\u062A',
    imageValidateSizeLabelExpectedMaxResolution:
        '\u062D\u062F\u0627\u06A9\u062B\u0631 \u0648\u0636\u0648\u062D \u062A\u0635\u0648\u06CC\u0631 {maxResolution} \u0627\u0633\u062A',
};
var To = {
    labelIdle:
        'Ved\xE4 ja pudota tiedostoja tai <span class="filepond--label-action"> Selaa </span>',
    labelInvalidField: 'Kent\xE4ss\xE4 on virheellisi\xE4 tiedostoja',
    labelFileWaitingForSize: 'Odotetaan kokoa',
    labelFileSizeNotAvailable: 'Kokoa ei saatavilla',
    labelFileLoading: 'Ladataan',
    labelFileLoadError: 'Virhe latauksessa',
    labelFileProcessing: 'L\xE4hetet\xE4\xE4n',
    labelFileProcessingComplete: 'L\xE4hetys valmis',
    labelFileProcessingAborted: 'L\xE4hetys peruttu',
    labelFileProcessingError: 'Virhe l\xE4hetyksess\xE4',
    labelFileProcessingRevertError: 'Virhe palautuksessa',
    labelFileRemoveError: 'Virhe poistamisessa',
    labelTapToCancel: 'peruuta napauttamalla',
    labelTapToRetry: 'yrit\xE4 uudelleen napauttamalla',
    labelTapToUndo: 'kumoa napauttamalla',
    labelButtonRemoveItem: 'Poista',
    labelButtonAbortItemLoad: 'Keskeyt\xE4',
    labelButtonRetryItemLoad: 'Yrit\xE4 uudelleen',
    labelButtonAbortItemProcessing: 'Peruuta',
    labelButtonUndoItemProcessing: 'Kumoa',
    labelButtonRetryItemProcessing: 'Yrit\xE4 uudelleen',
    labelButtonProcessItem: 'L\xE4het\xE4',
    labelMaxFileSizeExceeded: 'Tiedoston koko on liian suuri',
    labelMaxFileSize: 'Tiedoston maksimikoko on {filesize}',
    labelMaxTotalFileSizeExceeded: 'Tiedostojen yhdistetty maksimikoko ylitetty',
    labelMaxTotalFileSize: 'Tiedostojen yhdistetty maksimikoko on {filesize}',
    labelFileTypeNotAllowed: 'Tiedostotyyppi\xE4 ei sallita',
    fileValidateTypeLabelExpectedTypes: 'Sallitaan {allButLastType} tai {lastType}',
    imageValidateSizeLabelFormatError: 'Kuvatyyppi\xE4 ei tueta',
    imageValidateSizeLabelImageSizeTooSmall: 'Kuva on liian pieni',
    imageValidateSizeLabelImageSizeTooBig: 'Kuva on liian suuri',
    imageValidateSizeLabelExpectedMinSize: 'Minimikoko on {minWidth} \xD7 {minHeight}',
    imageValidateSizeLabelExpectedMaxSize: 'Maksimikoko on {maxWidth} \xD7 {maxHeight}',
    imageValidateSizeLabelImageResolutionTooLow: 'Resoluutio on liian pieni',
    imageValidateSizeLabelImageResolutionTooHigh: 'Resoluutio on liian suuri',
    imageValidateSizeLabelExpectedMinResolution: 'Minimiresoluutio on {minResolution}',
    imageValidateSizeLabelExpectedMaxResolution: 'Maksimiresoluutio on {maxResolution}',
};
var Io = {
    labelIdle:
        'Faites glisser vos fichiers ou <span class = "filepond--label-action"> Parcourir <span>',
    labelInvalidField: 'Le champ contient des fichiers invalides',
    labelFileWaitingForSize: 'En attente de taille',
    labelFileSizeNotAvailable: 'Taille non disponible',
    labelFileLoading: 'Chargement',
    labelFileLoadError: 'Erreur durant le chargement',
    labelFileProcessing: 'Traitement',
    labelFileProcessingComplete: 'Traitement effectu\xE9',
    labelFileProcessingAborted: 'Traitement interrompu',
    labelFileProcessingError: 'Erreur durant le traitement',
    labelFileProcessingRevertError: 'Erreur durant la restauration',
    labelFileRemoveError: 'Erreur durant la suppression',
    labelTapToCancel: 'appuyer pour annuler',
    labelTapToRetry: 'appuyer pour r\xE9essayer',
    labelTapToUndo: 'appuyer pour revenir en arri\xE8re',
    labelButtonRemoveItem: 'Retirer',
    labelButtonAbortItemLoad: 'Annuler',
    labelButtonRetryItemLoad: 'Recommencer',
    labelButtonAbortItemProcessing: 'Annuler',
    labelButtonUndoItemProcessing: 'Revenir en arri\xE8re',
    labelButtonRetryItemProcessing: 'Recommencer',
    labelButtonProcessItem: 'Transf\xE9rer',
    labelMaxFileSizeExceeded: 'Le fichier est trop volumineux',
    labelMaxFileSize: 'La taille maximale de fichier est {filesize}',
    labelMaxTotalFileSizeExceeded: 'Taille totale maximale d\xE9pass\xE9e',
    labelMaxTotalFileSize: 'La taille totale maximale des fichiers est {filesize}',
    labelFileTypeNotAllowed: 'Fichier non valide',
    fileValidateTypeLabelExpectedTypes: 'Attendu {allButLastType} ou {lastType}',
    imageValidateSizeLabelFormatError: "Type d'image non pris en charge",
    imageValidateSizeLabelImageSizeTooSmall: "L'image est trop petite",
    imageValidateSizeLabelImageSizeTooBig: "L'image est trop grande",
    imageValidateSizeLabelExpectedMinSize: 'La taille minimale est {minWidth} \xD7 {minHeight}',
    imageValidateSizeLabelExpectedMaxSize: 'La taille maximale est {maxWidth} \xD7 {maxHeight}',
    imageValidateSizeLabelImageResolutionTooLow: 'La r\xE9solution est trop faible',
    imageValidateSizeLabelImageResolutionTooHigh: 'La r\xE9solution est trop \xE9lev\xE9e',
    imageValidateSizeLabelExpectedMinResolution: 'La r\xE9solution minimale est {minResolution}',
    imageValidateSizeLabelExpectedMaxResolution: 'La r\xE9solution maximale est {maxResolution}',
};
var bo = {
    labelIdle:
        'Mozgasd ide a f\xE1jlt a felt\xF6lt\xE9shez, vagy <span class="filepond--label-action"> tall\xF3z\xE1s </span>',
    labelInvalidField: 'A mez\u0151 \xE9rv\xE9nytelen f\xE1jlokat tartalmaz',
    labelFileWaitingForSize: 'F\xE1ljm\xE9ret kisz\xE1mol\xE1sa',
    labelFileSizeNotAvailable: 'A f\xE1jlm\xE9ret nem el\xE9rhet\u0151',
    labelFileLoading: 'T\xF6lt\xE9s',
    labelFileLoadError: 'Hiba a bet\xF6lt\xE9s sor\xE1n',
    labelFileProcessing: 'Felt\xF6lt\xE9s',
    labelFileProcessingComplete: 'Sikeres felt\xF6lt\xE9s',
    labelFileProcessingAborted: 'A felt\xF6lt\xE9s megszak\xEDtva',
    labelFileProcessingError: 'Hiba t\xF6rt\xE9nt a felt\xF6lt\xE9s sor\xE1n',
    labelFileProcessingRevertError: 'Hiba a vissza\xE1ll\xEDt\xE1s sor\xE1n',
    labelFileRemoveError: 'Hiba t\xF6rt\xE9nt az elt\xE1vol\xEDt\xE1s sor\xE1n',
    labelTapToCancel: 'koppints a t\xF6rl\xE9shez',
    labelTapToRetry: 'koppints az \xFAjrakezd\xE9shez',
    labelTapToUndo: 'koppints a visszavon\xE1shoz',
    labelButtonRemoveItem: 'Elt\xE1vol\xEDt\xE1s',
    labelButtonAbortItemLoad: 'Megszak\xEDt\xE1s',
    labelButtonRetryItemLoad: '\xDAjrapr\xF3b\xE1lkoz\xE1s',
    labelButtonAbortItemProcessing: 'Megszak\xEDt\xE1s',
    labelButtonUndoItemProcessing: 'Visszavon\xE1s',
    labelButtonRetryItemProcessing: '\xDAjrapr\xF3b\xE1lkoz\xE1s',
    labelButtonProcessItem: 'Felt\xF6lt\xE9s',
    labelMaxFileSizeExceeded: 'A f\xE1jl t\xFAll\xE9pte a maxim\xE1lis m\xE9retet',
    labelMaxFileSize: 'Maxim\xE1lis f\xE1jlm\xE9ret: {filesize}',
    labelMaxTotalFileSizeExceeded: 'T\xFAll\xE9pte a maxim\xE1lis teljes m\xE9retet',
    labelMaxTotalFileSize: 'A maxim\xE1is teljes f\xE1jlm\xE9ret: {filesize}',
    labelFileTypeNotAllowed: '\xC9rv\xE9nytelen t\xEDpus\xFA f\xE1jl',
    fileValidateTypeLabelExpectedTypes:
        'Enged\xE9lyezett t\xEDpusok {allButLastType} vagy {lastType}',
    imageValidateSizeLabelFormatError: 'A k\xE9pt\xEDpus nem t\xE1mogatott',
    imageValidateSizeLabelImageSizeTooSmall: 'A k\xE9p t\xFAl kicsi',
    imageValidateSizeLabelImageSizeTooBig: 'A k\xE9p t\xFAl nagy',
    imageValidateSizeLabelExpectedMinSize: 'Minimum m\xE9ret: {minWidth} \xD7 {minHeight}',
    imageValidateSizeLabelExpectedMaxSize: 'Maximum m\xE9ret: {maxWidth} \xD7 {maxHeight}',
    imageValidateSizeLabelImageResolutionTooLow: 'A felbont\xE1s t\xFAl alacsony',
    imageValidateSizeLabelImageResolutionTooHigh: 'A felbont\xE1s t\xFAl magas',
    imageValidateSizeLabelExpectedMinResolution: 'Minim\xE1is felbont\xE1s: {minResolution}',
    imageValidateSizeLabelExpectedMaxResolution: 'Maxim\xE1lis felbont\xE1s: {maxResolution}',
};
var _o = {
    labelIdle:
        'Seret dan Jatuhkan file Anda atau <span class="filepond--label-action">Jelajahi</span>',
    labelInvalidField: 'Field berisi file tidak valid',
    labelFileWaitingForSize: 'Menunggu ukuran',
    labelFileSizeNotAvailable: 'Ukuran tidak tersedia',
    labelFileLoading: 'Memuat',
    labelFileLoadError: 'Kesalahan saat memuat',
    labelFileProcessing: 'Mengunggah',
    labelFileProcessingComplete: 'Unggahan selesai',
    labelFileProcessingAborted: 'Unggahan dibatalkan',
    labelFileProcessingError: 'Kesalahan saat mengunggah',
    labelFileProcessingRevertError: 'Kesalahan saat pengembalian',
    labelFileRemoveError: 'Kesalahan saat menghapus',
    labelTapToCancel: 'ketuk untuk membatalkan',
    labelTapToRetry: 'ketuk untuk mencoba lagi',
    labelTapToUndo: 'ketuk untuk mengurungkan',
    labelButtonRemoveItem: 'Hapus',
    labelButtonAbortItemLoad: 'Batal',
    labelButtonRetryItemLoad: 'Coba Kembali',
    labelButtonAbortItemProcessing: 'Batal',
    labelButtonUndoItemProcessing: 'Batal',
    labelButtonRetryItemProcessing: 'Coba Kembali',
    labelButtonProcessItem: 'Unggah',
    labelMaxFileSizeExceeded: 'File terlalu besar',
    labelMaxFileSize: 'Ukuran file maksimum adalah {filesize}',
    labelMaxTotalFileSizeExceeded: 'Jumlah file maksimum terlampaui',
    labelMaxTotalFileSize: 'Jumlah file maksimum adalah {filesize}',
    labelFileTypeNotAllowed: 'Jenis file tidak valid',
    fileValidateTypeLabelExpectedTypes: 'Mengharapkan {allButLastType} atau {lastType}',
    imageValidateSizeLabelFormatError: 'Jenis gambar tidak didukung',
    imageValidateSizeLabelImageSizeTooSmall: 'Gambar terlalu kecil',
    imageValidateSizeLabelImageSizeTooBig: 'Gambar terlalu besar',
    imageValidateSizeLabelExpectedMinSize: 'Ukuran minimum adalah {minWidth} \xD7 {minHeight}',
    imageValidateSizeLabelExpectedMaxSize: 'Ukuran maksimum adalah {minWidth} \xD7 {minHeight}',
    imageValidateSizeLabelImageResolutionTooLow: 'Resolusi terlalu rendah',
    imageValidateSizeLabelImageResolutionTooHigh: 'Resolusi terlalu tinggi',
    imageValidateSizeLabelExpectedMinResolution: 'Resolusi minimum adalah {minResolution}',
    imageValidateSizeLabelExpectedMaxResolution: 'Resolusi maksimum adalah {maxResolution}',
};
var Ro = {
    labelIdle:
        'Trascina e rilascia i tuoi file oppure <span class = "filepond--label-action"> Carica <span>',
    labelInvalidField: 'Il campo contiene dei file non validi',
    labelFileWaitingForSize: 'Aspettando le dimensioni',
    labelFileSizeNotAvailable: 'Dimensioni non disponibili',
    labelFileLoading: 'Caricamento',
    labelFileLoadError: 'Errore durante il caricamento',
    labelFileProcessing: 'Caricamento',
    labelFileProcessingComplete: 'Caricamento completato',
    labelFileProcessingAborted: 'Caricamento cancellato',
    labelFileProcessingError: 'Errore durante il caricamento',
    labelFileProcessingRevertError: 'Errore durante il ripristino',
    labelFileRemoveError: "Errore durante l'eliminazione",
    labelTapToCancel: 'tocca per cancellare',
    labelTapToRetry: 'tocca per riprovare',
    labelTapToUndo: 'tocca per ripristinare',
    labelButtonRemoveItem: 'Elimina',
    labelButtonAbortItemLoad: 'Cancella',
    labelButtonRetryItemLoad: 'Ritenta',
    labelButtonAbortItemProcessing: 'Camcella',
    labelButtonUndoItemProcessing: 'Indietro',
    labelButtonRetryItemProcessing: 'Ritenta',
    labelButtonProcessItem: 'Carica',
    labelMaxFileSizeExceeded: 'Il peso del file \xE8 eccessivo',
    labelMaxFileSize: 'Il peso massimo del file \xE8 {filesize}',
    labelMaxTotalFileSizeExceeded: 'Dimensione totale massima superata',
    labelMaxTotalFileSize: 'La dimensione massima totale del file \xE8 {filesize}',
    labelFileTypeNotAllowed: 'File non supportato',
    fileValidateTypeLabelExpectedTypes: 'Aspetta {allButLastType} o {lastType}',
    imageValidateSizeLabelFormatError: 'Tipo di immagine non compatibile',
    imageValidateSizeLabelImageSizeTooSmall: "L'immagine \xE8 troppo piccola",
    imageValidateSizeLabelImageSizeTooBig: "L'immagine \xE8 troppo grande",
    imageValidateSizeLabelExpectedMinSize: 'La dimensione minima \xE8 {minWidth} \xD7 {minHeight}',
    imageValidateSizeLabelExpectedMaxSize: 'La dimensione massima \xE8 {maxWidth} \xD7 {maxHeight}',
    imageValidateSizeLabelImageResolutionTooLow: 'La risoluzione \xE8 troppo bassa',
    imageValidateSizeLabelImageResolutionTooHigh: 'La risoluzione \xE8 troppo alta',
    imageValidateSizeLabelExpectedMinResolution: 'La risoluzione minima \xE8 {minResolution}',
    imageValidateSizeLabelExpectedMaxResolution: 'La risoluzione massima \xE8 {maxResolution}',
};
var yo = {
    labelIdle: 'Drag & Drop je bestanden of <span class="filepond--label-action"> Bladeren </span>',
    labelInvalidField: 'Veld bevat ongeldige bestanden',
    labelFileWaitingForSize: 'Wachten op grootte',
    labelFileSizeNotAvailable: 'Grootte niet beschikbaar',
    labelFileLoading: 'Laden',
    labelFileLoadError: 'Fout tijdens laden',
    labelFileProcessing: 'Uploaden',
    labelFileProcessingComplete: 'Upload afgerond',
    labelFileProcessingAborted: 'Upload geannuleerd',
    labelFileProcessingError: 'Fout tijdens upload',
    labelFileProcessingRevertError: 'Fout bij herstellen',
    labelFileRemoveError: 'Fout bij verwijderen',
    labelTapToCancel: 'tik om te annuleren',
    labelTapToRetry: 'tik om opnieuw te proberen',
    labelTapToUndo: 'tik om ongedaan te maken',
    labelButtonRemoveItem: 'Verwijderen',
    labelButtonAbortItemLoad: 'Afbreken',
    labelButtonRetryItemLoad: 'Opnieuw proberen',
    labelButtonAbortItemProcessing: 'Annuleren',
    labelButtonUndoItemProcessing: 'Ongedaan maken',
    labelButtonRetryItemProcessing: 'Opnieuw proberen',
    labelButtonProcessItem: 'Upload',
    labelMaxFileSizeExceeded: 'Bestand is te groot',
    labelMaxFileSize: 'Maximale bestandsgrootte is {filesize}',
    labelMaxTotalFileSizeExceeded: 'Maximale totale grootte overschreden',
    labelMaxTotalFileSize: 'Maximale totale bestandsgrootte is {filesize}',
    labelFileTypeNotAllowed: 'Ongeldig bestandstype',
    fileValidateTypeLabelExpectedTypes: 'Verwacht {allButLastType} of {lastType}',
    imageValidateSizeLabelFormatError: 'Afbeeldingstype niet ondersteund',
    imageValidateSizeLabelImageSizeTooSmall: 'Afbeelding is te klein',
    imageValidateSizeLabelImageSizeTooBig: 'Afbeelding is te groot',
    imageValidateSizeLabelExpectedMinSize: 'Minimale afmeting is {minWidth} \xD7 {minHeight}',
    imageValidateSizeLabelExpectedMaxSize: 'Maximale afmeting is {maxWidth} \xD7 {maxHeight}',
    imageValidateSizeLabelImageResolutionTooLow: 'Resolutie is te laag',
    imageValidateSizeLabelImageResolutionTooHigh: 'Resolution is too high',
    imageValidateSizeLabelExpectedMinResolution: 'Minimale resolutie is {minResolution}',
    imageValidateSizeLabelExpectedMaxResolution: 'Maximale resolutie is {maxResolution}',
};
var So = {
    labelIdle:
        'Dra og slipp filene dine, eller <span class="filepond--label-action"> Bla gjennom... </span>',
    labelInvalidField: 'Feltet inneholder ugyldige filer',
    labelFileWaitingForSize: 'Venter p\xE5 st\xF8rrelse',
    labelFileSizeNotAvailable: 'St\xF8rrelse ikke tilgjengelig',
    labelFileLoading: 'Laster',
    labelFileLoadError: 'Feil under lasting',
    labelFileProcessing: 'Laster opp',
    labelFileProcessingComplete: 'Opplasting ferdig',
    labelFileProcessingAborted: 'Opplasting avbrutt',
    labelFileProcessingError: 'Feil under opplasting',
    labelFileProcessingRevertError: 'Feil under reversering',
    labelFileRemoveError: 'Feil under flytting',
    labelTapToCancel: 'klikk for \xE5 avbryte',
    labelTapToRetry: 'klikk for \xE5 pr\xF8ve p\xE5 nytt',
    labelTapToUndo: 'klikk for \xE5 angre',
    labelButtonRemoveItem: 'Fjern',
    labelButtonAbortItemLoad: 'Avbryt',
    labelButtonRetryItemLoad: 'Pr\xF8v p\xE5 nytt',
    labelButtonAbortItemProcessing: 'Avbryt',
    labelButtonUndoItemProcessing: 'Angre',
    labelButtonRetryItemProcessing: 'Pr\xF8v p\xE5 nytt',
    labelButtonProcessItem: 'Last opp',
    labelMaxFileSizeExceeded: 'Filen er for stor',
    labelMaxFileSize: 'Maksimal filst\xF8rrelse er {filesize}',
    labelMaxTotalFileSizeExceeded: 'Maksimal total st\xF8rrelse oversteget',
    labelMaxTotalFileSize: 'Maksimal total st\xF8rrelse er {filesize}',
    labelFileTypeNotAllowed: 'Ugyldig filtype',
    fileValidateTypeLabelExpectedTypes: 'Forventer {allButLastType} eller {lastType}',
    imageValidateSizeLabelFormatError: 'Bildeformat ikke st\xF8ttet',
    imageValidateSizeLabelImageSizeTooSmall: 'Bildet er for lite',
    imageValidateSizeLabelImageSizeTooBig: 'Bildet er for stort',
    imageValidateSizeLabelExpectedMinSize: 'Minimumsst\xF8rrelse er {minWidth} \xD7 {minHeight}',
    imageValidateSizeLabelExpectedMaxSize: 'Maksimumsst\xF8rrelse er {maxWidth} \xD7 {maxHeight}',
    imageValidateSizeLabelImageResolutionTooLow: 'Oppl\xF8sningen er for lav',
    imageValidateSizeLabelImageResolutionTooHigh: 'Oppl\xF8sningen er for h\xF8y',
    imageValidateSizeLabelExpectedMinResolution: 'Minimum oppl\xF8sning er {minResolution}',
    imageValidateSizeLabelExpectedMaxResolution: 'Maksimal oppl\xF8sning er {maxResolution}',
};
var wo = {
    labelIdle:
        'Przeci\u0105gnij i upu\u015B\u0107 lub <span class="filepond--label-action">wybierz</span> pliki',
    labelInvalidField: 'Nieprawid\u0142owe pliki',
    labelFileWaitingForSize: 'Pobieranie rozmiaru',
    labelFileSizeNotAvailable: 'Nieznany rozmiar',
    labelFileLoading: 'Wczytywanie',
    labelFileLoadError: 'B\u0142\u0105d wczytywania',
    labelFileProcessing: 'Przesy\u0142anie',
    labelFileProcessingComplete: 'Przes\u0142ano',
    labelFileProcessingAborted: 'Przerwano',
    labelFileProcessingError: 'Przesy\u0142anie nie powiod\u0142o si\u0119',
    labelFileProcessingRevertError: 'Co\u015B posz\u0142o nie tak',
    labelFileRemoveError: 'Nieudane usuni\u0119cie',
    labelTapToCancel: 'Anuluj',
    labelTapToRetry: 'Pon\xF3w',
    labelTapToUndo: 'Cofnij',
    labelButtonRemoveItem: 'Usu\u0144',
    labelButtonAbortItemLoad: 'Przerwij',
    labelButtonRetryItemLoad: 'Pon\xF3w',
    labelButtonAbortItemProcessing: 'Anuluj',
    labelButtonUndoItemProcessing: 'Cofnij',
    labelButtonRetryItemProcessing: 'Pon\xF3w',
    labelButtonProcessItem: 'Prze\u015Blij',
    labelMaxFileSizeExceeded: 'Plik jest zbyt du\u017Cy',
    labelMaxFileSize: 'Dopuszczalna wielko\u015B\u0107 pliku to {filesize}',
    labelMaxTotalFileSizeExceeded: 'Przekroczono \u0142\u0105czny rozmiar plik\xF3w',
    labelMaxTotalFileSize:
        '\u0141\u0105czny rozmiar plik\xF3w nie mo\u017Ce przekroczy\u0107 {filesize}',
    labelFileTypeNotAllowed: 'Niedozwolony rodzaj pliku',
    fileValidateTypeLabelExpectedTypes: 'Oczekiwano {allButLastType} lub {lastType}',
    imageValidateSizeLabelFormatError: 'Nieobs\u0142ugiwany format obrazu',
    imageValidateSizeLabelImageSizeTooSmall: 'Obraz jest zbyt ma\u0142y',
    imageValidateSizeLabelImageSizeTooBig: 'Obraz jest zbyt du\u017Cy',
    imageValidateSizeLabelExpectedMinSize: 'Minimalne wymiary obrazu to {minWidth}\xD7{minHeight}',
    imageValidateSizeLabelExpectedMaxSize: 'Maksymalna wymiary obrazu to {maxWidth}\xD7{maxHeight}',
    imageValidateSizeLabelImageResolutionTooLow: 'Rozdzielczo\u015B\u0107 jest zbyt niska',
    imageValidateSizeLabelImageResolutionTooHigh: 'Rozdzielczo\u015B\u0107 jest zbyt wysoka',
    imageValidateSizeLabelExpectedMinResolution:
        'Minimalna rozdzielczo\u015B\u0107 to {minResolution}',
    imageValidateSizeLabelExpectedMaxResolution:
        'Maksymalna rozdzielczo\u015B\u0107 to {maxResolution}',
};
var gi = {
    labelIdle:
        'Arraste e solte os arquivos ou <span class="filepond--label-action"> Clique aqui </span>',
    labelInvalidField: 'Arquivos inv\xE1lidos',
    labelFileWaitingForSize: 'Calculando o tamanho do arquivo',
    labelFileSizeNotAvailable: 'Tamanho do arquivo indispon\xEDvel',
    labelFileLoading: 'Carregando',
    labelFileLoadError: 'Erro durante o carregamento',
    labelFileProcessing: 'Enviando',
    labelFileProcessingComplete: 'Envio finalizado',
    labelFileProcessingAborted: 'Envio cancelado',
    labelFileProcessingError: 'Erro durante o envio',
    labelFileProcessingRevertError: 'Erro ao reverter o envio',
    labelFileRemoveError: 'Erro ao remover o arquivo',
    labelTapToCancel: 'clique para cancelar',
    labelTapToRetry: 'clique para reenviar',
    labelTapToUndo: 'clique para desfazer',
    labelButtonRemoveItem: 'Remover',
    labelButtonAbortItemLoad: 'Abortar',
    labelButtonRetryItemLoad: 'Reenviar',
    labelButtonAbortItemProcessing: 'Cancelar',
    labelButtonUndoItemProcessing: 'Desfazer',
    labelButtonRetryItemProcessing: 'Reenviar',
    labelButtonProcessItem: 'Enviar',
    labelMaxFileSizeExceeded: 'Arquivo \xE9 muito grande',
    labelMaxFileSize: 'O tamanho m\xE1ximo permitido: {filesize}',
    labelMaxTotalFileSizeExceeded: 'Tamanho total dos arquivos excedido',
    labelMaxTotalFileSize: 'Tamanho total permitido: {filesize}',
    labelFileTypeNotAllowed: 'Tipo de arquivo inv\xE1lido',
    fileValidateTypeLabelExpectedTypes:
        'Tipos de arquivo suportados s\xE3o {allButLastType} ou {lastType}',
    imageValidateSizeLabelFormatError: 'Tipo de imagem inv\xE1lida',
    imageValidateSizeLabelImageSizeTooSmall: 'Imagem muito pequena',
    imageValidateSizeLabelImageSizeTooBig: 'Imagem muito grande',
    imageValidateSizeLabelExpectedMinSize:
        'Tamanho m\xEDnimo permitida: {minWidth} \xD7 {minHeight}',
    imageValidateSizeLabelExpectedMaxSize:
        'Tamanho m\xE1ximo permitido: {maxWidth} \xD7 {maxHeight}',
    imageValidateSizeLabelImageResolutionTooLow: 'Resolu\xE7\xE3o muito baixa',
    imageValidateSizeLabelImageResolutionTooHigh: 'Resolu\xE7\xE3o muito alta',
    imageValidateSizeLabelExpectedMinResolution:
        'Resolu\xE7\xE3o m\xEDnima permitida: {minResolution}',
    imageValidateSizeLabelExpectedMaxResolution:
        'Resolu\xE7\xE3o m\xE1xima permitida: {maxResolution}',
};
var vo = {
    labelIdle:
        'Trage \u0219i plaseaz\u0103 fi\u0219iere sau <span class="filepond--label-action"> Caut\u0103-le </span>',
    labelInvalidField: 'C\xE2mpul con\u021Bine fi\u0219iere care nu sunt valide',
    labelFileWaitingForSize: '\xCEn a\u0219teptarea dimensiunii',
    labelFileSizeNotAvailable: 'Dimensiunea nu este diponibil\u0103',
    labelFileLoading: 'Se \xEEncarc\u0103',
    labelFileLoadError: 'Eroare la \xEEnc\u0103rcare',
    labelFileProcessing: 'Se \xEEncarc\u0103',
    labelFileProcessingComplete: '\xCEnc\u0103rcare finalizat\u0103',
    labelFileProcessingAborted: '\xCEnc\u0103rcare anulat\u0103',
    labelFileProcessingError: 'Eroare la \xEEnc\u0103rcare',
    labelFileProcessingRevertError: 'Eroare la anulare',
    labelFileRemoveError: 'Eroare la \u015Ftergere',
    labelTapToCancel: 'apas\u0103 pentru a anula',
    labelTapToRetry: 'apas\u0103 pentru a re\xEEncerca',
    labelTapToUndo: 'apas\u0103 pentru a anula',
    labelButtonRemoveItem: '\u015Eterge',
    labelButtonAbortItemLoad: 'Anuleaz\u0103',
    labelButtonRetryItemLoad: 'Re\xEEncearc\u0103',
    labelButtonAbortItemProcessing: 'Anuleaz\u0103',
    labelButtonUndoItemProcessing: 'Anuleaz\u0103',
    labelButtonRetryItemProcessing: 'Re\xEEncearc\u0103',
    labelButtonProcessItem: '\xCEncarc\u0103',
    labelMaxFileSizeExceeded: 'Fi\u0219ierul este prea mare',
    labelMaxFileSize: 'Dimensiunea maxim\u0103 a unui fi\u0219ier este de {filesize}',
    labelMaxTotalFileSizeExceeded:
        'Dimensiunea total\u0103 maxim\u0103 a fost dep\u0103\u0219it\u0103',
    labelMaxTotalFileSize:
        'Dimensiunea total\u0103 maxim\u0103 a fi\u0219ierelor este de {filesize}',
    labelFileTypeNotAllowed: 'Tipul fi\u0219ierului nu este valid',
    fileValidateTypeLabelExpectedTypes: 'Se a\u0219teapt\u0103 {allButLastType} sau {lastType}',
    imageValidateSizeLabelFormatError: 'Formatul imaginii nu este acceptat',
    imageValidateSizeLabelImageSizeTooSmall: 'Imaginea este prea mic\u0103',
    imageValidateSizeLabelImageSizeTooBig: 'Imaginea este prea mare',
    imageValidateSizeLabelExpectedMinSize:
        'M\u0103rimea minim\u0103 este de {maxWidth} x {maxHeight}',
    imageValidateSizeLabelExpectedMaxSize:
        'M\u0103rimea maxim\u0103 este de {maxWidth} x {maxHeight}',
    imageValidateSizeLabelImageResolutionTooLow: 'Rezolu\u021Bia este prea mic\u0103',
    imageValidateSizeLabelImageResolutionTooHigh: 'Rezolu\u021Bia este prea mare',
    imageValidateSizeLabelExpectedMinResolution:
        'Rezolu\u021Bia minim\u0103 este de {minResolution}',
    imageValidateSizeLabelExpectedMaxResolution:
        'Rezolu\u021Bia maxim\u0103 este de {maxResolution}',
};
var Ao = {
    labelIdle:
        '\u041F\u0435\u0440\u0435\u0442\u0430\u0449\u0438\u0442\u0435 \u0444\u0430\u0439\u043B\u044B \u0438\u043B\u0438 <span class="filepond--label-action"> \u0432\u044B\u0431\u0435\u0440\u0438\u0442\u0435 </span>',
    labelInvalidField:
        '\u041F\u043E\u043B\u0435 \u0441\u043E\u0434\u0435\u0440\u0436\u0438\u0442 \u043D\u0435\u0434\u043E\u043F\u0443\u0441\u0442\u0438\u043C\u044B\u0435 \u0444\u0430\u0439\u043B\u044B',
    labelFileWaitingForSize:
        '\u0423\u043A\u0430\u0436\u0438\u0442\u0435 \u0440\u0430\u0437\u043C\u0435\u0440',
    labelFileSizeNotAvailable:
        '\u0420\u0430\u0437\u043C\u0435\u0440 \u043D\u0435 \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442\u0441\u044F',
    labelFileLoading: '\u041E\u0436\u0438\u0434\u0430\u043D\u0438\u0435',
    labelFileLoadError:
        '\u041E\u0448\u0438\u0431\u043A\u0430 \u043F\u0440\u0438 \u043E\u0436\u0438\u0434\u0430\u043D\u0438\u0438',
    labelFileProcessing: '\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430',
    labelFileProcessingComplete:
        '\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430 \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043D\u0430',
    labelFileProcessingAborted:
        '\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430 \u043E\u0442\u043C\u0435\u043D\u0435\u043D\u0430',
    labelFileProcessingError:
        '\u041E\u0448\u0438\u0431\u043A\u0430 \u043F\u0440\u0438 \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0435',
    labelFileProcessingRevertError:
        '\u041E\u0448\u0438\u0431\u043A\u0430 \u043F\u0440\u0438 \u0432\u043E\u0437\u0432\u0440\u0430\u0442\u0435',
    labelFileRemoveError:
        '\u041E\u0448\u0438\u0431\u043A\u0430 \u043F\u0440\u0438 \u0443\u0434\u0430\u043B\u0435\u043D\u0438\u0438',
    labelTapToCancel:
        '\u043D\u0430\u0436\u043C\u0438\u0442\u0435 \u0434\u043B\u044F \u043E\u0442\u043C\u0435\u043D\u044B',
    labelTapToRetry:
        '\u043D\u0430\u0436\u043C\u0438\u0442\u0435, \u0447\u0442\u043E\u0431\u044B \u043F\u043E\u0432\u0442\u043E\u0440\u0438\u0442\u044C \u043F\u043E\u043F\u044B\u0442\u043A\u0443',
    labelTapToUndo:
        '\u043D\u0430\u0436\u043C\u0438\u0442\u0435 \u0434\u043B\u044F \u043E\u0442\u043C\u0435\u043D\u044B \u043F\u043E\u0441\u043B\u0435\u0434\u043D\u0435\u0433\u043E \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044F',
    labelButtonRemoveItem: '\u0423\u0434\u0430\u043B\u0438\u0442\u044C',
    labelButtonAbortItemLoad: '\u041F\u0440\u0435\u043A\u0440\u0430\u0449\u0435\u043D\u043E',
    labelButtonRetryItemLoad:
        '\u041F\u043E\u0432\u0442\u043E\u0440\u0438\u0442\u0435 \u043F\u043E\u043F\u044B\u0442\u043A\u0443',
    labelButtonAbortItemProcessing: '\u041E\u0442\u043C\u0435\u043D\u0430',
    labelButtonUndoItemProcessing:
        '\u041E\u0442\u043C\u0435\u043D\u0430 \u043F\u043E\u0441\u043B\u0435\u0434\u043D\u0435\u0433\u043E \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044F',
    labelButtonRetryItemProcessing:
        '\u041F\u043E\u0432\u0442\u043E\u0440\u0438\u0442\u0435 \u043F\u043E\u043F\u044B\u0442\u043A\u0443',
    labelButtonProcessItem: '\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430',
    labelMaxFileSizeExceeded:
        '\u0424\u0430\u0439\u043B \u0441\u043B\u0438\u0448\u043A\u043E\u043C \u0431\u043E\u043B\u044C\u0448\u043E\u0439',
    labelMaxFileSize:
        '\u041C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u044B\u0439 \u0440\u0430\u0437\u043C\u0435\u0440 \u0444\u0430\u0439\u043B\u0430: {filesize}',
    labelMaxTotalFileSizeExceeded:
        '\u041F\u0440\u0435\u0432\u044B\u0448\u0435\u043D \u043C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u044B\u0439 \u0440\u0430\u0437\u043C\u0435\u0440',
    labelMaxTotalFileSize:
        '\u041C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u044B\u0439 \u0440\u0430\u0437\u043C\u0435\u0440 \u0444\u0430\u0439\u043B\u0430: {filesize}',
    labelFileTypeNotAllowed:
        '\u0424\u0430\u0439\u043B \u043D\u0435\u0432\u0435\u0440\u043D\u043E\u0433\u043E \u0442\u0438\u043F\u0430',
    fileValidateTypeLabelExpectedTypes:
        '\u041E\u0436\u0438\u0434\u0430\u0435\u0442\u0441\u044F {allButLastType} \u0438\u043B\u0438 {lastType}',
    imageValidateSizeLabelFormatError:
        '\u0422\u0438\u043F \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F \u043D\u0435 \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442\u0441\u044F',
    imageValidateSizeLabelImageSizeTooSmall:
        '\u0418\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435 \u0441\u043B\u0438\u0448\u043A\u043E\u043C \u043C\u0430\u043B\u0435\u043D\u044C\u043A\u043E\u0435',
    imageValidateSizeLabelImageSizeTooBig:
        '\u0418\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435 \u0441\u043B\u0438\u0448\u043A\u043E\u043C \u0431\u043E\u043B\u044C\u0448\u043E\u0435',
    imageValidateSizeLabelExpectedMinSize:
        '\u041C\u0438\u043D\u0438\u043C\u0430\u043B\u044C\u043D\u044B\u0439 \u0440\u0430\u0437\u043C\u0435\u0440: {minWidth} \xD7 {minHeight}',
    imageValidateSizeLabelExpectedMaxSize:
        '\u041C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u044B\u0439 \u0440\u0430\u0437\u043C\u0435\u0440: {maxWidth} \xD7 {maxHeight}',
    imageValidateSizeLabelImageResolutionTooLow:
        '\u0420\u0430\u0437\u0440\u0435\u0448\u0435\u043D\u0438\u0435 \u0441\u043B\u0438\u0448\u043A\u043E\u043C \u043D\u0438\u0437\u043A\u043E\u0435',
    imageValidateSizeLabelImageResolutionTooHigh:
        '\u0420\u0430\u0437\u0440\u0435\u0448\u0435\u043D\u0438\u0435 \u0441\u043B\u0438\u0448\u043A\u043E\u043C \u0432\u044B\u0441\u043E\u043A\u043E\u0435',
    imageValidateSizeLabelExpectedMinResolution:
        '\u041C\u0438\u043D\u0438\u043C\u0430\u043B\u044C\u043D\u043E\u0435 \u0440\u0430\u0437\u0440\u0435\u0448\u0435\u043D\u0438\u0435: {minResolution}',
    imageValidateSizeLabelExpectedMaxResolution:
        '\u041C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u043E\u0435 \u0440\u0430\u0437\u0440\u0435\u0448\u0435\u043D\u0438\u0435: {maxResolution}',
};
var Lo = {
    labelIdle:
        'Drag och sl\xE4pp dina filer eller <span class="filepond--label-action"> Bl\xE4ddra </span>',
    labelInvalidField: 'F\xE4ltet inneh\xE5ller felaktiga filer',
    labelFileWaitingForSize: 'V\xE4ntar p\xE5 storlek',
    labelFileSizeNotAvailable: 'Storleken finns inte tillg\xE4nglig',
    labelFileLoading: 'Laddar',
    labelFileLoadError: 'Fel under laddning',
    labelFileProcessing: 'Laddar upp',
    labelFileProcessingComplete: 'Uppladdning klar',
    labelFileProcessingAborted: 'Uppladdning avbruten',
    labelFileProcessingError: 'Fel under uppladdning',
    labelFileProcessingRevertError: 'Fel under \xE5terst\xE4llning',
    labelFileRemoveError: 'Fel under borttagning',
    labelTapToCancel: 'tryck f\xF6r att avbryta',
    labelTapToRetry: 'tryck f\xF6r att f\xF6rs\xF6ka igen',
    labelTapToUndo: 'tryck f\xF6r att \xE5ngra',
    labelButtonRemoveItem: 'Tabort',
    labelButtonAbortItemLoad: 'Avbryt',
    labelButtonRetryItemLoad: 'F\xF6rs\xF6k igen',
    labelButtonAbortItemProcessing: 'Avbryt',
    labelButtonUndoItemProcessing: '\xC5ngra',
    labelButtonRetryItemProcessing: 'F\xF6rs\xF6k igen',
    labelButtonProcessItem: 'Ladda upp',
    labelMaxFileSizeExceeded: 'Filen \xE4r f\xF6r stor',
    labelMaxFileSize: 'St\xF6rsta till\xE5tna filstorlek \xE4r {filesize}',
    labelMaxTotalFileSizeExceeded: 'Maximal uppladdningsstorlek uppn\xE5d',
    labelMaxTotalFileSize: 'Maximal uppladdningsstorlek \xE4r {filesize}',
    labelFileTypeNotAllowed: 'Felaktig filtyp',
    fileValidateTypeLabelExpectedTypes: 'Godk\xE4nda filtyper {allButLastType} eller {lastType}',
    imageValidateSizeLabelFormatError: 'Bildtypen saknar st\xF6d',
    imageValidateSizeLabelImageSizeTooSmall: 'Bilden \xE4r f\xF6r liten',
    imageValidateSizeLabelImageSizeTooBig: 'Bilden \xE4r f\xF6r stor',
    imageValidateSizeLabelExpectedMinSize: 'Minimal storlek \xE4r {minWidth} \xD7 {minHeight}',
    imageValidateSizeLabelExpectedMaxSize: 'Maximal storlek \xE4r {maxWidth} \xD7 {maxHeight}',
    imageValidateSizeLabelImageResolutionTooLow: 'Uppl\xF6sningen \xE4r f\xF6r l\xE5g',
    imageValidateSizeLabelImageResolutionTooHigh: 'Uppl\xF6sningen \xE4r f\xF6r h\xF6g',
    imageValidateSizeLabelExpectedMinResolution:
        'Minsta till\xE5tna uppl\xF6sning \xE4r {minResolution}',
    imageValidateSizeLabelExpectedMaxResolution:
        'H\xF6gsta till\xE5tna uppl\xF6sning \xE4r {maxResolution}',
};
var Mo = {
    labelIdle:
        'Dosyan\u0131z\u0131 S\xFCr\xFCkleyin & B\u0131rak\u0131n ya da <span class="filepond--label-action"> Se\xE7in </span>',
    labelInvalidField: 'Alan ge\xE7ersiz dosyalar i\xE7eriyor',
    labelFileWaitingForSize: 'Boyut hesaplan\u0131yor',
    labelFileSizeNotAvailable: 'Boyut mevcut de\u011Fil',
    labelFileLoading: 'Y\xFCkleniyor',
    labelFileLoadError: 'Y\xFCkleme s\u0131ras\u0131nda hata olu\u015Ftu',
    labelFileProcessing: 'Y\xFCkleniyor',
    labelFileProcessingComplete: 'Y\xFCkleme tamamland\u0131',
    labelFileProcessingAborted: 'Y\xFCkleme iptal edildi',
    labelFileProcessingError: 'Y\xFCklerken hata olu\u015Ftu',
    labelFileProcessingRevertError: 'Geri \xE7ekerken hata olu\u015Ftu',
    labelFileRemoveError: 'Kald\u0131r\u0131rken hata olu\u015Ftu',
    labelTapToCancel: '\u0130ptal etmek i\xE7in t\u0131klay\u0131n',
    labelTapToRetry: 'Tekrar denemek i\xE7in t\u0131klay\u0131n',
    labelTapToUndo: 'Geri almak i\xE7in t\u0131klay\u0131n',
    labelButtonRemoveItem: 'Kald\u0131r',
    labelButtonAbortItemLoad: '\u0130ptal Et',
    labelButtonRetryItemLoad: 'Tekrar dene',
    labelButtonAbortItemProcessing: '\u0130ptal et',
    labelButtonUndoItemProcessing: 'Geri Al',
    labelButtonRetryItemProcessing: 'Tekrar dene',
    labelButtonProcessItem: 'Y\xFCkle',
    labelMaxFileSizeExceeded: 'Dosya \xE7ok b\xFCy\xFCk',
    labelMaxFileSize: 'En fazla dosya boyutu: {filesize}',
    labelMaxTotalFileSizeExceeded: 'Maximum boyut a\u015F\u0131ld\u0131',
    labelMaxTotalFileSize: 'Maximum dosya boyutu :{filesize}',
    labelFileTypeNotAllowed: 'Ge\xE7ersiz dosya tipi',
    fileValidateTypeLabelExpectedTypes:
        '\u015Eu {allButLastType} ya da \u015Fu dosya olmas\u0131 gerekir: {lastType}',
    imageValidateSizeLabelFormatError: 'Resim tipi desteklenmiyor',
    imageValidateSizeLabelImageSizeTooSmall: 'Resim \xE7ok k\xFC\xE7\xFCk',
    imageValidateSizeLabelImageSizeTooBig: 'Resim \xE7ok b\xFCy\xFCk',
    imageValidateSizeLabelExpectedMinSize: 'Minimum boyut {minWidth} \xD7 {minHeight}',
    imageValidateSizeLabelExpectedMaxSize: 'Maximum boyut {maxWidth} \xD7 {maxHeight}',
    imageValidateSizeLabelImageResolutionTooLow:
        '\xC7\xF6z\xFCn\xFCrl\xFCk \xE7ok d\xFC\u015F\xFCk',
    imageValidateSizeLabelImageResolutionTooHigh: '\xC7\xF6z\xFCn\xFCrl\xFCk \xE7ok y\xFCksek',
    imageValidateSizeLabelExpectedMinResolution:
        'Minimum \xE7\xF6z\xFCn\xFCrl\xFCk {minResolution}',
    imageValidateSizeLabelExpectedMaxResolution:
        'Maximum \xE7\xF6z\xFCn\xFCrl\xFCk {maxResolution}',
};
var Oo = {
    labelIdle:
        '\u041F\u0435\u0440\u0435\u0442\u044F\u0433\u043D\u0456\u0442\u044C \u0444\u0430\u0439\u043B\u0438 \u0430\u0431\u043E <span class="filepond--label-action"> \u0432\u0438\u0431\u0435\u0440\u0456\u0442\u044C </span>',
    labelInvalidField:
        '\u041F\u043E\u043B\u0435 \u043C\u0456\u0441\u0442\u0438\u0442\u044C \u043D\u0435\u0434\u043E\u043F\u0443\u0441\u0442\u0438\u043C\u0456 \u0444\u0430\u0439\u043B\u0438',
    labelFileWaitingForSize:
        '\u0412\u043A\u0430\u0436\u0456\u0442\u044C \u0440\u043E\u0437\u043C\u0456\u0440',
    labelFileSizeNotAvailable:
        '\u0420\u043E\u0437\u043C\u0456\u0440 \u043D\u0435 \u0434\u043E\u0441\u0442\u0443\u043F\u043D\u0438\u0439',
    labelFileLoading: '\u041E\u0447\u0456\u043A\u0443\u0432\u0430\u043D\u043D\u044F',
    labelFileLoadError:
        '\u041F\u043E\u043C\u0438\u043B\u043A\u0430 \u043F\u0440\u0438 \u043E\u0447\u0456\u043A\u0443\u0432\u0430\u043D\u043D\u0456',
    labelFileProcessing: '\u0417\u0430\u0432\u0430\u043D\u0442\u0430\u0436\u0435\u043D\u043D\u044F',
    labelFileProcessingComplete:
        '\u0417\u0430\u0432\u0430\u043D\u0442\u0430\u0436\u0435\u043D\u043D\u044F \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043D\u043E',
    labelFileProcessingAborted:
        '\u0417\u0430\u0432\u0430\u043D\u0442\u0430\u0436\u0435\u043D\u043D\u044F \u0441\u043A\u0430\u0441\u043E\u0432\u0430\u043D\u043E',
    labelFileProcessingError:
        '\u041F\u043E\u043C\u0438\u043B\u043A\u0430 \u043F\u0440\u0438 \u0437\u0430\u0432\u0430\u043D\u0442\u0430\u0436\u0435\u043D\u043D\u0456',
    labelFileProcessingRevertError:
        '\u041F\u043E\u043C\u0438\u043B\u043A\u0430 \u043F\u0440\u0438 \u0432\u0456\u0434\u043D\u043E\u0432\u043B\u0435\u043D\u043D\u0456',
    labelFileRemoveError:
        '\u041F\u043E\u043C\u0438\u043B\u043A\u0430 \u043F\u0440\u0438 \u0432\u0438\u0434\u0430\u043B\u0435\u043D\u043D\u0456',
    labelTapToCancel: '\u0412\u0456\u0434\u043C\u0456\u043D\u0438\u0442\u0438',
    labelTapToRetry:
        '\u041D\u0430\u0442\u0438\u0441\u043D\u0456\u0442\u044C, \u0449\u043E\u0431 \u043F\u043E\u0432\u0442\u043E\u0440\u0438\u0442\u0438 \u0441\u043F\u0440\u043E\u0431\u0443',
    labelTapToUndo:
        '\u041D\u0430\u0442\u0438\u0441\u043D\u0456\u0442\u044C, \u0449\u043E\u0431 \u0432\u0456\u0434\u043C\u0456\u043D\u0438\u0442\u0438 \u043E\u0441\u0442\u0430\u043D\u043D\u044E \u0434\u0456\u044E',
    labelButtonRemoveItem: '\u0412\u0438\u0434\u0430\u043B\u0438\u0442\u0438',
    labelButtonAbortItemLoad: '\u0412\u0456\u0434\u043C\u0456\u043D\u0438\u0442\u0438',
    labelButtonRetryItemLoad:
        '\u041F\u043E\u0432\u0442\u043E\u0440\u0438\u0442\u0438 \u0441\u043F\u0440\u043E\u0431\u0443',
    labelButtonAbortItemProcessing: '\u0412\u0456\u0434\u043C\u0456\u043D\u0438\u0442\u0438',
    labelButtonUndoItemProcessing:
        '\u0412\u0456\u0434\u043C\u0456\u043D\u0438\u0442\u0438 \u043E\u0441\u0442\u0430\u043D\u043D\u044E \u0434\u0456\u044E',
    labelButtonRetryItemProcessing:
        '\u041F\u043E\u0432\u0442\u043E\u0440\u0438\u0442\u0438 \u0441\u043F\u0440\u043E\u0431\u0443',
    labelButtonProcessItem:
        '\u0417\u0430\u0432\u0430\u043D\u0442\u0430\u0436\u0435\u043D\u043D\u044F',
    labelMaxFileSizeExceeded:
        '\u0424\u0430\u0439\u043B \u0437\u0430\u043D\u0430\u0434\u0442\u043E \u0432\u0435\u043B\u0438\u043A\u0438\u0439',
    labelMaxFileSize:
        '\u041C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u0438\u0439 \u0440\u043E\u0437\u043C\u0456\u0440 \u0444\u0430\u0439\u043B\u0443: {filesize}',
    labelMaxTotalFileSizeExceeded:
        '\u041F\u0435\u0440\u0435\u0432\u0438\u0449\u0435\u043D\u043E \u043C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u0438\u0439 \u0437\u0430\u0433\u0430\u043B\u044C\u043D\u0438\u0439 \u0440\u043E\u0437\u043C\u0456\u0440',
    labelMaxTotalFileSize:
        '\u041C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u0438\u0439 \u0437\u0430\u0433\u0430\u043B\u044C\u043D\u0438\u0439 \u0440\u043E\u0437\u043C\u0456\u0440: {filesize}',
    labelFileTypeNotAllowed:
        '\u0424\u043E\u0440\u043C\u0430\u0442 \u0444\u0430\u0439\u043B\u0443 \u043D\u0435 \u043F\u0456\u0434\u0442\u0440\u0438\u043C\u0443\u0454\u0442\u044C\u0441\u044F',
    fileValidateTypeLabelExpectedTypes:
        '\u041E\u0447\u0456\u043A\u0443\u0454\u0442\u044C\u0441\u044F {allButLastType} \u0430\u0431\u043E {lastType}',
    imageValidateSizeLabelFormatError:
        '\u0424\u043E\u0440\u043C\u0430\u0442 \u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u043D\u044F \u043D\u0435 \u043F\u0456\u0434\u0442\u0440\u0438\u043C\u0443\u0454\u0442\u044C\u0441\u044F',
    imageValidateSizeLabelImageSizeTooSmall:
        '\u0417\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u043D\u044F \u0437\u0430\u043D\u0430\u0434\u0442\u043E \u043C\u0430\u043B\u0435\u043D\u044C\u043A\u0435',
    imageValidateSizeLabelImageSizeTooBig:
        '\u0417\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u043D\u044F \u0437\u0430\u043D\u0430\u0434\u0442\u043E \u0432\u0435\u043B\u0438\u043A\u0435',
    imageValidateSizeLabelExpectedMinSize:
        '\u041C\u0456\u043D\u0456\u043C\u0430\u043B\u044C\u043D\u0438\u0439 \u0440\u043E\u0437\u043C\u0456\u0440: {minWidth} \xD7 {minHeight}',
    imageValidateSizeLabelExpectedMaxSize:
        '\u041C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u0438\u0439 \u0440\u043E\u0437\u043C\u0456\u0440: {maxWidth} \xD7 {maxHeight}',
    imageValidateSizeLabelImageResolutionTooLow:
        '\u0420\u043E\u0437\u043C\u0456\u0440\u0438 \u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u043D\u044F \u0437\u0430\u043D\u0430\u0434\u0442\u043E \u043C\u0430\u043B\u0435\u043D\u044C\u043A\u0456',
    imageValidateSizeLabelImageResolutionTooHigh:
        '\u0420\u043E\u0437\u043C\u0456\u0440\u0438 \u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u043D\u044F \u0437\u0430\u043D\u0430\u0434\u0442\u043E \u0432\u0435\u043B\u0438\u043A\u0456',
    imageValidateSizeLabelExpectedMinResolution:
        '\u041C\u0456\u043D\u0456\u043C\u0430\u043B\u044C\u043D\u0456 \u0440\u043E\u0437\u043C\u0456\u0440\u0438: {minResolution}',
    imageValidateSizeLabelExpectedMaxResolution:
        '\u041C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u0456 \u0440\u043E\u0437\u043C\u0456\u0440\u0438: {maxResolution}',
};
var xo = {
    labelIdle:
        'K\xE9o th\u1EA3 t\u1EC7p c\u1EE7a b\u1EA1n ho\u1EB7c <span class="filepond--label-action"> T\xECm ki\u1EBFm </span>',
    labelInvalidField: 'Tr\u01B0\u1EDDng ch\u1EE9a c\xE1c t\u1EC7p kh\xF4ng h\u1EE3p l\u1EC7',
    labelFileWaitingForSize: '\u0110ang ch\u1EDD k\xEDch th\u01B0\u1EDBc',
    labelFileSizeNotAvailable: 'K\xEDch th\u01B0\u1EDBc kh\xF4ng c\xF3 s\u1EB5n',
    labelFileLoading: '\u0110ang t\u1EA3i',
    labelFileLoadError: 'L\u1ED7i khi t\u1EA3i',
    labelFileProcessing: '\u0110ang t\u1EA3i l\xEAn',
    labelFileProcessingComplete: 'T\u1EA3i l\xEAn th\xE0nh c\xF4ng',
    labelFileProcessingAborted: '\u0110\xE3 hu\u1EF7 t\u1EA3i l\xEAn',
    labelFileProcessingError: 'L\u1ED7i khi t\u1EA3i l\xEAn',
    labelFileProcessingRevertError: 'L\u1ED7i khi ho\xE0n nguy\xEAn',
    labelFileRemoveError: 'L\u1ED7i khi x\xF3a',
    labelTapToCancel: 'nh\u1EA5n \u0111\u1EC3 h\u1EE7y',
    labelTapToRetry: 'nh\u1EA5n \u0111\u1EC3 th\u1EED l\u1EA1i',
    labelTapToUndo: 'nh\u1EA5n \u0111\u1EC3 ho\xE0n t\xE1c',
    labelButtonRemoveItem: 'Xo\xE1',
    labelButtonAbortItemLoad: 'Hu\u1EF7 b\u1ECF',
    labelButtonRetryItemLoad: 'Th\u1EED l\u1EA1i',
    labelButtonAbortItemProcessing: 'H\u1EE7y b\u1ECF',
    labelButtonUndoItemProcessing: 'Ho\xE0n t\xE1c',
    labelButtonRetryItemProcessing: 'Th\u1EED l\u1EA1i',
    labelButtonProcessItem: 'T\u1EA3i l\xEAn',
    labelMaxFileSizeExceeded: 'T\u1EADp tin qu\xE1 l\u1EDBn',
    labelMaxFileSize: 'K\xEDch th\u01B0\u1EDBc t\u1EC7p t\u1ED1i \u0111a l\xE0 {filesize}',
    labelMaxTotalFileSizeExceeded:
        '\u0110\xE3 v\u01B0\u1EE3t qu\xE1 t\u1ED5ng k\xEDch th\u01B0\u1EDBc t\u1ED1i \u0111a',
    labelMaxTotalFileSize:
        'T\u1ED5ng k\xEDch th\u01B0\u1EDBc t\u1EC7p t\u1ED1i \u0111a l\xE0 {filesize}',
    labelFileTypeNotAllowed: 'T\u1EC7p thu\u1ED9c lo\u1EA1i kh\xF4ng h\u1EE3p l\u1EC7',
    fileValidateTypeLabelExpectedTypes:
        'Ki\u1EC3u t\u1EC7p h\u1EE3p l\u1EC7 l\xE0 {allButLastType} ho\u1EB7c {lastType}',
    imageValidateSizeLabelFormatError:
        'Lo\u1EA1i h\xECnh \u1EA3nh kh\xF4ng \u0111\u01B0\u1EE3c h\u1ED7 tr\u1EE3',
    imageValidateSizeLabelImageSizeTooSmall: 'H\xECnh \u1EA3nh qu\xE1 nh\u1ECF',
    imageValidateSizeLabelImageSizeTooBig: 'H\xECnh \u1EA3nh qu\xE1 l\u1EDBn',
    imageValidateSizeLabelExpectedMinSize:
        'K\xEDch th\u01B0\u1EDBc t\u1ED1i thi\u1EC3u l\xE0 {minWidth} \xD7 {minHeight}',
    imageValidateSizeLabelExpectedMaxSize:
        'K\xEDch th\u01B0\u1EDBc t\u1ED1i \u0111a l\xE0 {maxWidth} \xD7 {maxHeight}',
    imageValidateSizeLabelImageResolutionTooLow: '\u0110\u1ED9 ph\xE2n gi\u1EA3i qu\xE1 th\u1EA5p',
    imageValidateSizeLabelImageResolutionTooHigh: '\u0110\u1ED9 ph\xE2n gi\u1EA3i qu\xE1 cao',
    imageValidateSizeLabelExpectedMinResolution:
        '\u0110\u1ED9 ph\xE2n gi\u1EA3i t\u1ED1i thi\u1EC3u l\xE0 {minResolution}',
    imageValidateSizeLabelExpectedMaxResolution:
        '\u0110\u1ED9 ph\xE2n gi\u1EA3i t\u1ED1i \u0111a l\xE0 {maxResolution}',
};
var Do = {
    labelIdle:
        '\u62D6\u653E\u6587\u4EF6\uFF0C\u6216\u8005 <span class="filepond--label-action"> \u6D4F\u89C8 </span>',
    labelInvalidField: '\u5B57\u6BB5\u5305\u542B\u65E0\u6548\u6587\u4EF6',
    labelFileWaitingForSize: '\u8BA1\u7B97\u6587\u4EF6\u5927\u5C0F',
    labelFileSizeNotAvailable: '\u6587\u4EF6\u5927\u5C0F\u4E0D\u53EF\u7528',
    labelFileLoading: '\u52A0\u8F7D',
    labelFileLoadError: '\u52A0\u8F7D\u9519\u8BEF',
    labelFileProcessing: '\u4E0A\u4F20',
    labelFileProcessingComplete: '\u5DF2\u4E0A\u4F20',
    labelFileProcessingAborted: '\u4E0A\u4F20\u5DF2\u53D6\u6D88',
    labelFileProcessingError: '\u4E0A\u4F20\u51FA\u9519',
    labelFileProcessingRevertError: '\u8FD8\u539F\u51FA\u9519',
    labelFileRemoveError: '\u5220\u9664\u51FA\u9519',
    labelTapToCancel: '\u70B9\u51FB\u53D6\u6D88',
    labelTapToRetry: '\u70B9\u51FB\u91CD\u8BD5',
    labelTapToUndo: '\u70B9\u51FB\u64A4\u6D88',
    labelButtonRemoveItem: '\u5220\u9664',
    labelButtonAbortItemLoad: '\u4E2D\u6B62',
    labelButtonRetryItemLoad: '\u91CD\u8BD5',
    labelButtonAbortItemProcessing: '\u53D6\u6D88',
    labelButtonUndoItemProcessing: '\u64A4\u6D88',
    labelButtonRetryItemProcessing: '\u91CD\u8BD5',
    labelButtonProcessItem: '\u4E0A\u4F20',
    labelMaxFileSizeExceeded: '\u6587\u4EF6\u592A\u5927',
    labelMaxFileSize: '\u6700\u5927\u503C: {filesize}',
    labelMaxTotalFileSizeExceeded: '\u8D85\u8FC7\u6700\u5927\u6587\u4EF6\u5927\u5C0F',
    labelMaxTotalFileSize: '\u6700\u5927\u6587\u4EF6\u5927\u5C0F\uFF1A{filesize}',
    labelFileTypeNotAllowed: '\u6587\u4EF6\u7C7B\u578B\u65E0\u6548',
    fileValidateTypeLabelExpectedTypes: '\u5E94\u4E3A {allButLastType} \u6216 {lastType}',
    imageValidateSizeLabelFormatError: '\u4E0D\u652F\u6301\u56FE\u50CF\u7C7B\u578B',
    imageValidateSizeLabelImageSizeTooSmall: '\u56FE\u50CF\u592A\u5C0F',
    imageValidateSizeLabelImageSizeTooBig: '\u56FE\u50CF\u592A\u5927',
    imageValidateSizeLabelExpectedMinSize: '\u6700\u5C0F\u503C: {minWidth} \xD7 {minHeight}',
    imageValidateSizeLabelExpectedMaxSize: '\u6700\u5927\u503C: {maxWidth} \xD7 {maxHeight}',
    imageValidateSizeLabelImageResolutionTooLow: '\u5206\u8FA8\u7387\u592A\u4F4E',
    imageValidateSizeLabelImageResolutionTooHigh: '\u5206\u8FA8\u7387\u592A\u9AD8',
    imageValidateSizeLabelExpectedMinResolution:
        '\u6700\u5C0F\u5206\u8FA8\u7387\uFF1A{minResolution}',
    imageValidateSizeLabelExpectedMaxResolution:
        '\u6700\u5927\u5206\u8FA8\u7387\uFF1A{maxResolution}',
};
var Po = {
    labelIdle:
        '\u62D6\u653E\u6A94\u6848\uFF0C\u6216\u8005 <span class="filepond--label-action"> \u700F\u89BD </span>',
    labelInvalidField: '\u4E0D\u652F\u63F4\u6B64\u6A94\u6848',
    labelFileWaitingForSize: '\u6B63\u5728\u8A08\u7B97\u6A94\u6848\u5927\u5C0F',
    labelFileSizeNotAvailable: '\u6A94\u6848\u5927\u5C0F\u4E0D\u7B26',
    labelFileLoading: '\u8B80\u53D6\u4E2D',
    labelFileLoadError: '\u8B80\u53D6\u932F\u8AA4',
    labelFileProcessing: '\u4E0A\u50B3',
    labelFileProcessingComplete: '\u5DF2\u4E0A\u50B3',
    labelFileProcessingAborted: '\u4E0A\u50B3\u5DF2\u53D6\u6D88',
    labelFileProcessingError: '\u4E0A\u50B3\u767C\u751F\u932F\u8AA4',
    labelFileProcessingRevertError: '\u9084\u539F\u932F\u8AA4',
    labelFileRemoveError: '\u522A\u9664\u932F\u8AA4',
    labelTapToCancel: '\u9EDE\u64CA\u53D6\u6D88',
    labelTapToRetry: '\u9EDE\u64CA\u91CD\u8A66',
    labelTapToUndo: '\u9EDE\u64CA\u9084\u539F',
    labelButtonRemoveItem: '\u522A\u9664',
    labelButtonAbortItemLoad: '\u505C\u6B62',
    labelButtonRetryItemLoad: '\u91CD\u8A66',
    labelButtonAbortItemProcessing: '\u53D6\u6D88',
    labelButtonUndoItemProcessing: '\u53D6\u6D88',
    labelButtonRetryItemProcessing: '\u91CD\u8A66',
    labelButtonProcessItem: '\u4E0A\u50B3',
    labelMaxFileSizeExceeded: '\u6A94\u6848\u904E\u5927',
    labelMaxFileSize: '\u6700\u5927\u503C\uFF1A{filesize}',
    labelMaxTotalFileSizeExceeded: '\u8D85\u904E\u6700\u5927\u53EF\u4E0A\u50B3\u5927\u5C0F',
    labelMaxTotalFileSize: '\u6700\u5927\u53EF\u4E0A\u50B3\u5927\u5C0F\uFF1A{filesize}',
    labelFileTypeNotAllowed: '\u4E0D\u652F\u63F4\u6B64\u985E\u578B\u6A94\u6848',
    fileValidateTypeLabelExpectedTypes: '\u61C9\u70BA {allButLastType} \u6216 {lastType}',
    imageValidateSizeLabelFormatError: '\u4E0D\u652F\u6301\u6B64\u985E\u5716\u7247\u985E\u578B',
    imageValidateSizeLabelImageSizeTooSmall: '\u5716\u7247\u904E\u5C0F',
    imageValidateSizeLabelImageSizeTooBig: '\u5716\u7247\u904E\u5927',
    imageValidateSizeLabelExpectedMinSize:
        '\u6700\u5C0F\u5C3A\u5BF8\uFF1A{minWidth} \xD7 {minHeight}',
    imageValidateSizeLabelExpectedMaxSize:
        '\u6700\u5927\u5C3A\u5BF8\uFF1A{maxWidth} \xD7 {maxHeight}',
    imageValidateSizeLabelImageResolutionTooLow: '\u89E3\u6790\u5EA6\u904E\u4F4E',
    imageValidateSizeLabelImageResolutionTooHigh: '\u89E3\u6790\u5EA6\u904E\u9AD8',
    imageValidateSizeLabelExpectedMinResolution:
        '\u6700\u4F4E\u89E3\u6790\u5EA6\uFF1A{minResolution}',
    imageValidateSizeLabelExpectedMaxResolution:
        '\u6700\u9AD8\u89E3\u6790\u5EA6\uFF1A{maxResolution}',
};
Ee(Ar);
Ee(Mr);
Ee(Dr);
Ee(Fr);
Ee(Br);
Ee(jr);
Ee(Zr);
Ee(co);
Ee(ba);
window.FilePond = Qi;
function jf({
    acceptedFileTypes: e,
    imageEditorEmptyFillColor: t,
    imageEditorMode: i,
    imageEditorViewportHeight: a,
    imageEditorViewportWidth: n,
    deleteUploadedFileUsing: r,
    isDeletable: o,
    isDisabled: l,
    getUploadedFilesUsing: s,
    imageCropAspectRatio: u,
    imagePreviewHeight: c,
    imageResizeMode: d,
    imageResizeTargetHeight: h,
    imageResizeTargetWidth: f,
    imageResizeUpscale: p,
    isAvatar: m,
    hasImageEditor: g,
    canEditSvgs: b,
    isSvgEditingConfirmed: E,
    confirmSvgEditingMessage: T,
    disabledSvgEditingMessage: _,
    isDownloadable: y,
    isMultiple: I,
    isOpenable: v,
    isPreviewable: R,
    isReorderable: S,
    loadingIndicatorPosition: P,
    locale: x,
    maxSize: O,
    minSize: B,
    panelAspectRatio: A,
    panelLayout: C,
    placeholder: w,
    removeUploadedFileButtonPosition: L,
    removeUploadedFileUsing: N,
    reorderUploadedFilesUsing: F,
    shouldAppendFiles: V,
    shouldOrientImageFromExif: G,
    shouldTransformImage: $,
    state: q,
    uploadButtonPosition: X,
    uploadProgressIndicatorPosition: le,
    uploadUsing: U,
}) {
    return {
        fileKeyIndex: {},
        pond: null,
        shouldUpdateState: !0,
        state: q,
        lastState: null,
        uploadedFileIndex: {},
        isEditorOpen: !1,
        editingFile: {},
        currentRatio: '',
        editor: {},
        init: async function () {
            vt(Fo[x] ?? Fo.en),
                (this.pond = ot(this.$refs.input, {
                    acceptedFileTypes: e,
                    allowImageExifOrientation: G,
                    allowPaste: !1,
                    allowRemove: o,
                    allowReorder: S,
                    allowImagePreview: R,
                    allowVideoPreview: R,
                    allowAudioPreview: R,
                    allowImageTransform: $,
                    credits: !1,
                    files: await this.getFiles(),
                    imageCropAspectRatio: u,
                    imagePreviewHeight: c,
                    imageResizeTargetHeight: h,
                    imageResizeTargetWidth: f,
                    imageResizeMode: d,
                    imageResizeUpscale: p,
                    itemInsertLocation: V ? 'after' : 'before',
                    ...(w && { labelIdle: w }),
                    maxFileSize: O,
                    minFileSize: B,
                    styleButtonProcessItemPosition: X,
                    styleButtonRemoveItemPosition: L,
                    styleLoadIndicatorPosition: P,
                    stylePanelAspectRatio: A,
                    stylePanelLayout: C,
                    styleProgressIndicatorPosition: le,
                    server: {
                        load: async (D, k) => {
                            let ne = await (await fetch(D, { cache: 'no-store' })).blob();
                            k(ne);
                        },
                        process: (D, k, W, ne, it, Ue) => {
                            this.shouldUpdateState = !1;
                            let Ei = ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (Ut) =>
                                (
                                    Ut ^
                                    (crypto.getRandomValues(new Uint8Array(1))[0] &
                                        (15 >> (Ut / 4)))
                                ).toString(16),
                            );
                            U(
                                Ei,
                                k,
                                (Ut) => {
                                    (this.shouldUpdateState = !0), ne(Ut);
                                },
                                it,
                                Ue,
                            );
                        },
                        remove: async (D, k) => {
                            let W = this.uploadedFileIndex[D] ?? null;
                            W && (await r(W), k());
                        },
                        revert: async (D, k) => {
                            await N(D), k();
                        },
                    },
                    allowImageEdit: g,
                    imageEditEditor: {
                        open: (D) => this.loadEditor(D),
                        onconfirm: () => {},
                        oncancel: () => this.closeEditor(),
                        onclose: () => this.closeEditor(),
                    },
                })),
                this.$watch('state', async () => {
                    if (this.pond && this.shouldUpdateState) {
                        if (
                            this.state !== null &&
                            Object.values(this.state).filter((D) => D.startsWith('livewire-file:'))
                                .length
                        ) {
                            this.lastState = null;
                            return;
                        }
                        JSON.stringify(this.state) !== this.lastState &&
                            ((this.lastState = JSON.stringify(this.state)),
                            (this.pond.files = await this.getFiles()));
                    }
                }),
                this.pond.on('reorderfiles', async (D) => {
                    let k = D.map((W) =>
                        W.source instanceof File
                            ? W.serverId
                            : this.uploadedFileIndex[W.source] ?? null,
                    ).filter((W) => W);
                    await F(V ? k : k.reverse());
                }),
                this.pond.on('initfile', async (D) => {
                    y && (m || this.insertDownloadLink(D));
                }),
                this.pond.on('initfile', async (D) => {
                    v && (m || this.insertOpenLink(D));
                }),
                this.pond.on('addfilestart', async (D) => {
                    D.status === ut.PROCESSING_QUEUED &&
                        this.dispatchFormEvent('file-upload-started');
                });
            let z = async () => {
                this.pond
                    .getFiles()
                    .filter((D) => D.status === ut.PROCESSING || D.status === ut.PROCESSING_QUEUED)
                    .length || this.dispatchFormEvent('file-upload-finished');
            };
            this.pond.on('processfile', z),
                this.pond.on('processfileabort', z),
                this.pond.on('processfilerevert', z);
        },
        destroy: function () {
            this.destroyEditor(), lt(this.$refs.input), (this.pond = null);
        },
        dispatchFormEvent: function (z) {
            this.$el
                .closest('form')
                ?.dispatchEvent(new CustomEvent(z, { composed: !0, cancelable: !0 }));
        },
        getUploadedFiles: async function () {
            let z = await s();
            (this.fileKeyIndex = z ?? {}),
                (this.uploadedFileIndex = Object.entries(this.fileKeyIndex)
                    .filter(([D, k]) => k?.url)
                    .reduce((D, [k, W]) => ((D[W.url] = k), D), {}));
        },
        getFiles: async function () {
            await this.getUploadedFiles();
            let z = [];
            for (let D of Object.values(this.fileKeyIndex))
                D &&
                    z.push({
                        source: D.url,
                        options: {
                            type: 'local',
                            ...(/^image/.test(D.type)
                                ? {}
                                : {
                                      file: {
                                          name: D.name,
                                          size: D.size,
                                          type: D.type,
                                      },
                                  }),
                        },
                    });
            return V ? z : z.reverse();
        },
        insertDownloadLink: function (z) {
            if (z.origin !== Lt.LOCAL) return;
            let D = this.getDownloadLink(z);
            D &&
                document
                    .getElementById(`filepond--item-${z.id}`)
                    .querySelector('.filepond--file-info-main')
                    .prepend(D);
        },
        insertOpenLink: function (z) {
            if (z.origin !== Lt.LOCAL) return;
            let D = this.getOpenLink(z);
            D &&
                document
                    .getElementById(`filepond--item-${z.id}`)
                    .querySelector('.filepond--file-info-main')
                    .prepend(D);
        },
        getDownloadLink: function (z) {
            let D = z.source;
            if (!D) return;
            let k = document.createElement('a');
            return (
                (k.className = 'filepond--download-icon'),
                (k.href = D),
                (k.download = z.file.name),
                k
            );
        },
        getOpenLink: function (z) {
            let D = z.source;
            if (!D) return;
            let k = document.createElement('a');
            return (k.className = 'filepond--open-icon'), (k.href = D), (k.target = '_blank'), k;
        },
        initEditor: function () {
            l ||
                (g &&
                    (this.editor = new pa(this.$refs.editor, {
                        aspectRatio: n / a,
                        autoCropArea: 1,
                        center: !0,
                        crop: (z) => {
                            (this.$refs.xPositionInput.value = Math.round(z.detail.x)),
                                (this.$refs.yPositionInput.value = Math.round(z.detail.y)),
                                (this.$refs.heightInput.value = Math.round(z.detail.height)),
                                (this.$refs.widthInput.value = Math.round(z.detail.width)),
                                (this.$refs.rotationInput.value = z.detail.rotate);
                        },
                        cropBoxResizable: !0,
                        guides: !0,
                        highlight: !0,
                        responsive: !0,
                        toggleDragModeOnDblclick: !0,
                        viewMode: i,
                        wheelZoomRatio: 0.02,
                    })));
        },
        closeEditor: function () {
            (this.editingFile = {}), (this.isEditorOpen = !1), this.destroyEditor();
        },
        fixImageDimensions: function (z, D) {
            if (z.type !== 'image/svg+xml') return D(z);
            let k = new FileReader();
            (k.onload = (W) => {
                let ne = new DOMParser()
                    .parseFromString(W.target.result, 'image/svg+xml')
                    ?.querySelector('svg');
                if (!ne) return D(z);
                let it = ['viewBox', 'ViewBox', 'viewbox'].find((Ei) => ne.hasAttribute(Ei));
                if (!it) return D(z);
                let Ue = ne.getAttribute(it).split(' ');
                return !Ue || Ue.length !== 4
                    ? D(z)
                    : (ne.setAttribute('width', parseFloat(Ue[2]) + 'pt'),
                      ne.setAttribute('height', parseFloat(Ue[3]) + 'pt'),
                      D(
                          new File(
                              [
                                  new Blob([new XMLSerializer().serializeToString(ne)], {
                                      type: 'image/svg+xml',
                                  }),
                              ],
                              z.name,
                              { type: 'image/svg+xml', _relativePath: '' },
                          ),
                      ));
            }),
                k.readAsText(z);
        },
        loadEditor: function (z) {
            if (l || !g || !z) return;
            let D = z.type === 'image/svg+xml';
            if (!b && D) {
                alert(_);
                return;
            }
            (E && D && !confirm(T)) ||
                this.fixImageDimensions(z, (k) => {
                    (this.editingFile = k), this.initEditor();
                    let W = new FileReader();
                    (W.onload = (ne) => {
                        (this.isEditorOpen = !0),
                            setTimeout(() => this.editor.replace(ne.target.result), 200);
                    }),
                        W.readAsDataURL(z);
                });
        },
        saveEditor: function () {
            l ||
                (g &&
                    this.editor
                        .getCroppedCanvas({
                            fillColor: t ?? 'transparent',
                            height: h,
                            imageSmoothingEnabled: !0,
                            imageSmoothingQuality: 'high',
                            width: f,
                        })
                        .toBlob((z) => {
                            I &&
                                this.pond.removeFile(
                                    this.pond
                                        .getFiles()
                                        .find((D) => D.filename === this.editingFile.name)?.id,
                                    { revert: !0 },
                                ),
                                this.$nextTick(() => {
                                    this.shouldUpdateState = !1;
                                    let D = this.editingFile.name.slice(
                                            0,
                                            this.editingFile.name.lastIndexOf('.'),
                                        ),
                                        k = this.editingFile.name.split('.').pop();
                                    k === 'svg' && (k = 'png');
                                    let W = /-v(\d+)/;
                                    W.test(D)
                                        ? (D = D.replace(W, (ne, it) => `-v${Number(it) + 1}`))
                                        : (D += '-v1'),
                                        this.pond
                                            .addFile(
                                                new File([z], `${D}.${k}`, {
                                                    type:
                                                        this.editingFile.type === 'image/svg+xml'
                                                            ? 'image/png'
                                                            : this.editingFile.type,
                                                    lastModified: new Date().getTime(),
                                                }),
                                            )
                                            .then(() => {
                                                this.closeEditor();
                                            })
                                            .catch(() => {
                                                this.closeEditor();
                                            });
                                });
                        }, this.editingFile.type));
        },
        destroyEditor: function () {
            this.editor && typeof this.editor.destroy == 'function' && this.editor.destroy(),
                (this.editor = null);
        },
    };
}
var Fo = {
    ar: uo,
    cs: ho,
    da: fo,
    de: po,
    en: mo,
    es: go,
    fa: Eo,
    fi: To,
    fr: Io,
    hu: bo,
    id: _o,
    it: Ro,
    nl: yo,
    no: So,
    pl: wo,
    pt_BR: gi,
    pt_PT: gi,
    ro: vo,
    ru: Ao,
    sv: Lo,
    tr: Mo,
    uk: Oo,
    vi: xo,
    zh_CN: Do,
    zh_TW: Po,
};
export { jf as default };
/*! Bundled license information:

filepond/dist/filepond.esm.js:
  (*!
   * FilePond 4.30.4
   * Licensed under MIT, https://opensource.org/licenses/MIT/
   * Please visit https://pqina.nl/filepond/ for details.
   *)

cropperjs/dist/cropper.esm.js:
  (*!
   * Cropper.js v1.6.1
   * https://fengyuanchen.github.io/cropperjs
   *
   * Copyright 2015-present Chen Fengyuan
   * Released under the MIT license
   *
   * Date: 2023-09-17T03:44:19.860Z
   *)

filepond-plugin-file-validate-size/dist/filepond-plugin-file-validate-size.esm.js:
  (*!
   * FilePondPluginFileValidateSize 2.2.8
   * Licensed under MIT, https://opensource.org/licenses/MIT/
   * Please visit https://pqina.nl/filepond/ for details.
   *)

filepond-plugin-file-validate-type/dist/filepond-plugin-file-validate-type.esm.js:
  (*!
   * FilePondPluginFileValidateType 1.2.8
   * Licensed under MIT, https://opensource.org/licenses/MIT/
   * Please visit https://pqina.nl/filepond/ for details.
   *)

filepond-plugin-image-crop/dist/filepond-plugin-image-crop.esm.js:
  (*!
   * FilePondPluginImageCrop 2.0.6
   * Licensed under MIT, https://opensource.org/licenses/MIT/
   * Please visit https://pqina.nl/filepond/ for details.
   *)

filepond-plugin-image-edit/dist/filepond-plugin-image-edit.esm.js:
  (*!
   * FilePondPluginImageEdit 1.6.3
   * Licensed under MIT, https://opensource.org/licenses/MIT/
   * Please visit https://pqina.nl/filepond/ for details.
   *)

filepond-plugin-image-exif-orientation/dist/filepond-plugin-image-exif-orientation.esm.js:
  (*!
   * FilePondPluginImageExifOrientation 1.0.11
   * Licensed under MIT, https://opensource.org/licenses/MIT/
   * Please visit https://pqina.nl/filepond/ for details.
   *)

filepond-plugin-image-preview/dist/filepond-plugin-image-preview.esm.js:
  (*!
   * FilePondPluginImagePreview 4.6.11
   * Licensed under MIT, https://opensource.org/licenses/MIT/
   * Please visit https://pqina.nl/filepond/ for details.
   *)

filepond-plugin-image-resize/dist/filepond-plugin-image-resize.esm.js:
  (*!
   * FilePondPluginImageResize 2.0.10
   * Licensed under MIT, https://opensource.org/licenses/MIT/
   * Please visit https://pqina.nl/filepond/ for details.
   *)

filepond-plugin-image-transform/dist/filepond-plugin-image-transform.esm.js:
  (*!
   * FilePondPluginImageTransform 3.8.7
   * Licensed under MIT, https://opensource.org/licenses/MIT/
   * Please visit https://pqina.nl/filepond/ for details.
   *)

filepond-plugin-media-preview/dist/filepond-plugin-media-preview.esm.js:
  (*!
   * FilePondPluginMediaPreview 1.0.11
   * Licensed under MIT, https://opensource.org/licenses/MIT/
   * Please visit undefined for details.
   *)
*/
