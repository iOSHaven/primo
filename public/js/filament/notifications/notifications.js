(() => {
    var J = Object.create;
    var $ = Object.defineProperty;
    var K = Object.getOwnPropertyDescriptor;
    var X = Object.getOwnPropertyNames;
    var Z = Object.getPrototypeOf,
        tt = Object.prototype.hasOwnProperty;
    var d = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports);
    var et = (e, t, i, n) => {
        if ((t && typeof t == 'object') || typeof t == 'function')
            for (let s of X(t))
                !tt.call(e, s) &&
                    s !== i &&
                    $(e, s, { get: () => t[s], enumerable: !(n = K(t, s)) || n.enumerable });
        return e;
    };
    var it = (e, t, i) => (
        (i = e != null ? J(Z(e)) : {}),
        et(t || !e || !e.__esModule ? $(i, 'default', { value: e, enumerable: !0 }) : i, e)
    );
    var S = d((St, U) => {
        var x,
            A = typeof global < 'u' && (global.crypto || global.msCrypto);
        A &&
            A.getRandomValues &&
            ((E = new Uint8Array(16)),
            (x = function () {
                return A.getRandomValues(E), E;
            }));
        var E;
        x ||
            ((T = new Array(16)),
            (x = function () {
                for (var e = 0, t; e < 16; e++)
                    e & 3 || (t = Math.random() * 4294967296),
                        (T[e] = (t >>> ((e & 3) << 3)) & 255);
                return T;
            }));
        var T;
        U.exports = x;
    });
    var N = d((Nt, V) => {
        var F = [];
        for (p = 0; p < 256; ++p) F[p] = (p + 256).toString(16).substr(1);
        var p;
        function dt(e, t) {
            var i = t || 0,
                n = F;
            return (
                n[e[i++]] +
                n[e[i++]] +
                n[e[i++]] +
                n[e[i++]] +
                '-' +
                n[e[i++]] +
                n[e[i++]] +
                '-' +
                n[e[i++]] +
                n[e[i++]] +
                '-' +
                n[e[i++]] +
                n[e[i++]] +
                '-' +
                n[e[i++]] +
                n[e[i++]] +
                n[e[i++]] +
                n[e[i++]] +
                n[e[i++]] +
                n[e[i++]]
            );
        }
        V.exports = dt;
    });
    var I = d((Dt, G) => {
        var ft = S(),
            pt = N(),
            l = ft(),
            vt = [l[0] | 1, l[1], l[2], l[3], l[4], l[5]],
            L = ((l[6] << 8) | l[7]) & 16383,
            D = 0,
            k = 0;
        function xt(e, t, i) {
            var n = (t && i) || 0,
                s = t || [];
            e = e || {};
            var r = e.clockseq !== void 0 ? e.clockseq : L,
                o = e.msecs !== void 0 ? e.msecs : new Date().getTime(),
                a = e.nsecs !== void 0 ? e.nsecs : k + 1,
                h = o - D + (a - k) / 1e4;
            if (
                (h < 0 && e.clockseq === void 0 && (r = (r + 1) & 16383),
                (h < 0 || o > D) && e.nsecs === void 0 && (a = 0),
                a >= 1e4)
            )
                throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
            (D = o), (k = a), (L = r), (o += 122192928e5);
            var u = ((o & 268435455) * 1e4 + a) % 4294967296;
            (s[n++] = (u >>> 24) & 255),
                (s[n++] = (u >>> 16) & 255),
                (s[n++] = (u >>> 8) & 255),
                (s[n++] = u & 255);
            var c = ((o / 4294967296) * 1e4) & 268435455;
            (s[n++] = (c >>> 8) & 255),
                (s[n++] = c & 255),
                (s[n++] = ((c >>> 24) & 15) | 16),
                (s[n++] = (c >>> 16) & 255),
                (s[n++] = (r >>> 8) | 128),
                (s[n++] = r & 255);
            for (var W = e.node || vt, v = 0; v < 6; ++v) s[n + v] = W[v];
            return t || pt(s);
        }
        G.exports = xt;
    });
    var z = d((kt, Q) => {
        var mt = S(),
            gt = N();
        function wt(e, t, i) {
            var n = (t && i) || 0;
            typeof e == 'string' && ((t = e == 'binary' ? new Array(16) : null), (e = null)),
                (e = e || {});
            var s = e.random || (e.rng || mt)();
            if (((s[6] = (s[6] & 15) | 64), (s[8] = (s[8] & 63) | 128), t))
                for (var r = 0; r < 16; ++r) t[n + r] = s[r];
            return t || gt(s);
        }
        Q.exports = wt;
    });
    var j = d((Mt, Y) => {
        var _t = I(),
            B = z(),
            M = B;
        M.v1 = _t;
        M.v4 = B;
        Y.exports = M;
    });
    var nt = [],
        rt = [],
        st = [];
    function ot(e, t) {
        e._x_attributeCleanups &&
            Object.entries(e._x_attributeCleanups).forEach(([i, n]) => {
                (t === void 0 || t.includes(i)) &&
                    (n.forEach((s) => s()), delete e._x_attributeCleanups[i]);
            });
    }
    var y = new MutationObserver(R),
        b = !1;
    function at() {
        y.observe(document, { subtree: !0, childList: !0, attributes: !0, attributeOldValue: !0 }),
            (b = !0);
    }
    function ut() {
        ct(), y.disconnect(), (b = !1);
    }
    var f = [],
        _ = !1;
    function ct() {
        (f = f.concat(y.takeRecords())),
            f.length &&
                !_ &&
                ((_ = !0),
                queueMicrotask(() => {
                    ht(), (_ = !1);
                }));
    }
    function ht() {
        R(f), (f.length = 0);
    }
    function C(e) {
        if (!b) return e();
        ut();
        let t = e();
        return at(), t;
    }
    var lt = !1,
        q = [];
    function R(e) {
        if (lt) {
            q = q.concat(e);
            return;
        }
        let t = [],
            i = [],
            n = new Map(),
            s = new Map();
        for (let r = 0; r < e.length; r++)
            if (
                !e[r].target._x_ignoreMutationObserver &&
                (e[r].type === 'childList' &&
                    (e[r].addedNodes.forEach((o) => o.nodeType === 1 && t.push(o)),
                    e[r].removedNodes.forEach((o) => o.nodeType === 1 && i.push(o))),
                e[r].type === 'attributes')
            ) {
                let o = e[r].target,
                    a = e[r].attributeName,
                    h = e[r].oldValue,
                    u = () => {
                        n.has(o) || n.set(o, []),
                            n.get(o).push({ name: a, value: o.getAttribute(a) });
                    },
                    c = () => {
                        s.has(o) || s.set(o, []), s.get(o).push(a);
                    };
                o.hasAttribute(a) && h === null ? u() : o.hasAttribute(a) ? (c(), u()) : c();
            }
        s.forEach((r, o) => {
            ot(o, r);
        }),
            n.forEach((r, o) => {
                nt.forEach((a) => a(o, r));
            });
        for (let r of i)
            if (!t.includes(r) && (rt.forEach((o) => o(r)), r._x_cleanups))
                for (; r._x_cleanups.length; ) r._x_cleanups.pop()();
        t.forEach((r) => {
            (r._x_ignoreSelf = !0), (r._x_ignore = !0);
        });
        for (let r of t)
            i.includes(r) ||
                (r.isConnected &&
                    (delete r._x_ignoreSelf,
                    delete r._x_ignore,
                    st.forEach((o) => o(r)),
                    (r._x_ignore = !0),
                    (r._x_ignoreSelf = !0)));
        t.forEach((r) => {
            delete r._x_ignoreSelf, delete r._x_ignore;
        }),
            (t = null),
            (i = null),
            (n = null),
            (s = null);
    }
    function O(e, t = () => {}) {
        let i = !1;
        return function () {
            i ? t.apply(this, arguments) : ((i = !0), e.apply(this, arguments));
        };
    }
    var P = (e) => {
        e.data('notificationComponent', ({ notification: t }) => ({
            isShown: !1,
            computedStyle: null,
            init: function () {
                (this.computedStyle = window.getComputedStyle(this.$el)),
                    this.configureTransitions(),
                    this.configureAnimations(),
                    t.duration &&
                        t.duration !== 'persistent' &&
                        setTimeout(() => this.close(), t.duration),
                    (this.isShown = !0);
            },
            configureTransitions: function () {
                let i = this.computedStyle.display,
                    n = () => {
                        C(() => {
                            this.$el.style.setProperty('display', i),
                                this.$el.style.setProperty('visibility', 'visible');
                        }),
                            (this.$el._x_isShown = !0);
                    },
                    s = () => {
                        C(() => {
                            this.$el._x_isShown
                                ? this.$el.style.setProperty('visibility', 'hidden')
                                : this.$el.style.setProperty('display', 'none');
                        });
                    },
                    r = O(
                        (o) => (o ? n() : s()),
                        (o) => {
                            this.$el._x_toggleAndCascadeWithTransitions(this.$el, o, n, s);
                        },
                    );
                e.effect(() => r(this.isShown));
            },
            configureAnimations: function () {
                let i;
                Livewire.hook(
                    'commit',
                    ({ component: n, commit: s, succeed: r, fail: o, respond: a }) => {
                        a(() => {
                            if (!n.snapshot.data.isFilamentNotificationsComponent) return;
                            let h = () => this.$el.getBoundingClientRect().top,
                                u = h();
                            (i = () => {
                                this.$el.animate(
                                    [
                                        { transform: `translateY(${u - h()}px)` },
                                        { transform: 'translateY(0px)' },
                                    ],
                                    {
                                        duration: this.getTransitionDuration(),
                                        easing: this.computedStyle.transitionTimingFunction,
                                    },
                                );
                            }),
                                this.$el.getAnimations().forEach((c) => c.finish());
                        }),
                            r(({ snapshot: h, effect: u }) => {
                                n.snapshot.data.isFilamentNotificationsComponent &&
                                    this.isShown &&
                                    i();
                            });
                    },
                );
            },
            close: function () {
                (this.isShown = !1),
                    setTimeout(
                        () =>
                            window.dispatchEvent(
                                new CustomEvent('notificationClosed', { detail: { id: t.id } }),
                            ),
                        this.getTransitionDuration(),
                    );
            },
            markAsRead: function () {
                window.dispatchEvent(
                    new CustomEvent('markedNotificationAsRead', { detail: { id: t.id } }),
                );
            },
            markAsUnread: function () {
                window.dispatchEvent(
                    new CustomEvent('markedNotificationAsUnread', { detail: { id: t.id } }),
                );
            },
            getTransitionDuration: function () {
                return parseFloat(this.computedStyle.transitionDuration) * 1e3;
            },
        }));
    };
    var H = it(j(), 1),
        m = class {
            constructor() {
                return this.id((0, H.v4)()), this;
            }
            id(t) {
                return (this.id = t), this;
            }
            title(t) {
                return (this.title = t), this;
            }
            body(t) {
                return (this.body = t), this;
            }
            actions(t) {
                return (this.actions = t), this;
            }
            status(t) {
                switch (t) {
                    case 'danger':
                        this.danger();
                        break;
                    case 'info':
                        this.info();
                        break;
                    case 'success':
                        this.success();
                        break;
                    case 'warning':
                        this.warning();
                        break;
                }
                return this;
            }
            color(t) {
                return (this.color = t), this;
            }
            icon(t) {
                return (this.icon = t), this;
            }
            iconColor(t) {
                return (this.iconColor = t), this;
            }
            duration(t) {
                return (this.duration = t), this;
            }
            seconds(t) {
                return this.duration(t * 1e3), this;
            }
            persistent() {
                return this.duration('persistent'), this;
            }
            danger() {
                return this.icon('heroicon-o-x-circle'), this.iconColor('danger'), this;
            }
            info() {
                return this.icon('heroicon-o-information-circle'), this.iconColor('info'), this;
            }
            success() {
                return this.icon('heroicon-o-check-circle'), this.iconColor('success'), this;
            }
            warning() {
                return this.icon('heroicon-o-exclamation-circle'), this.iconColor('warning'), this;
            }
            view(t) {
                return (this.view = t), this;
            }
            viewData(t) {
                return (this.viewData = t), this;
            }
            send() {
                return (
                    window.dispatchEvent(
                        new CustomEvent('notificationSent', { detail: { notification: this } }),
                    ),
                    this
                );
            }
        },
        g = class {
            constructor(t) {
                return this.name(t), this;
            }
            name(t) {
                return (this.name = t), this;
            }
            color(t) {
                return (this.color = t), this;
            }
            dispatch(t, i) {
                return this.event(t), this.eventData(i), this;
            }
            dispatchSelf(t, i) {
                return this.dispatch(t, i), (this.dispatchDirection = 'self'), this;
            }
            dispatchTo(t, i, n) {
                return (
                    this.dispatch(i, n),
                    (this.dispatchDirection = 'to'),
                    (this.dispatchToComponent = t),
                    this
                );
            }
            emit(t, i) {
                return this.dispatch(t, i), this;
            }
            emitSelf(t, i) {
                return this.dispatchSelf(t, i), this;
            }
            emitTo(t, i, n) {
                return this.dispatchTo(t, i, n), this;
            }
            dispatchDirection(t) {
                return (this.dispatchDirection = t), this;
            }
            dispatchToComponent(t) {
                return (this.dispatchToComponent = t), this;
            }
            event(t) {
                return (this.event = t), this;
            }
            eventData(t) {
                return (this.eventData = t), this;
            }
            extraAttributes(t) {
                return (this.extraAttributes = t), this;
            }
            icon(t) {
                return (this.icon = t), this;
            }
            iconPosition(t) {
                return (this.iconPosition = t), this;
            }
            outlined(t = !0) {
                return (this.isOutlined = t), this;
            }
            disabled(t = !0) {
                return (this.isDisabled = t), this;
            }
            label(t) {
                return (this.label = t), this;
            }
            close(t = !0) {
                return (this.shouldClose = t), this;
            }
            openUrlInNewTab(t = !0) {
                return (this.shouldOpenUrlInNewTab = t), this;
            }
            size(t) {
                return (this.size = t), this;
            }
            url(t) {
                return (this.url = t), this;
            }
            view(t) {
                return (this.view = t), this;
            }
            button() {
                return this.view('filament-notifications::actions.button-action'), this;
            }
            grouped() {
                return this.view('filament-notifications::actions.grouped-action'), this;
            }
            link() {
                return this.view('filament-notifications::actions.link-action'), this;
            }
        },
        w = class {
            constructor(t) {
                return this.actions(t), this;
            }
            actions(t) {
                return (this.actions = t.map((i) => i.grouped())), this;
            }
            color(t) {
                return (this.color = t), this;
            }
            icon(t) {
                return (this.icon = t), this;
            }
            iconPosition(t) {
                return (this.iconPosition = t), this;
            }
            label(t) {
                return (this.label = t), this;
            }
            tooltip(t) {
                return (this.tooltip = t), this;
            }
        };
    window.FilamentNotificationAction = g;
    window.FilamentNotificationActionGroup = w;
    window.FilamentNotification = m;
    document.addEventListener('alpine:init', () => {
        window.Alpine.plugin(P);
    });
})();
