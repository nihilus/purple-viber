! function e(t, n, r) {
    function i(a, s) {
        if (!n[a]) {
            if (!t[a]) {
                var u = "function" == typeof require && require;
                if (!s && u) return u(a, !0);
                if (o) return o(a, !0);
                var c = new Error("Cannot find module '" + a + "'");
                throw c.code = "MODULE_NOT_FOUND", c
            }
            var l = n[a] = {
                exports: {}
            };
            t[a][0].call(l.exports, function(e) {
                var n = t[a][1][e];
                return i(n ? n : e)
            }, l, l.exports, e, t, n, r)
        }
        return n[a].exports
    }
    for (var o = "function" == typeof require && require, a = 0; a < r.length; a++) i(r[a]);
    return i
}({
    1: [function(e, t, n) {
        ! function(e, n) {
            "object" == typeof t && "object" == typeof t.exports ? t.exports = e.document ? n(e, !0) : function(e) {
                if (!e.document) throw new Error("jQuery requires a window with a document");
                return n(e)
            } : n(e)
        }("undefined" != typeof window ? window : this, function(e, t) {
            function n(e) {
                var t = "length" in e && e.length,
                    n = Z.type(e);
                return "function" === n || Z.isWindow(e) ? !1 : 1 === e.nodeType && t ? !0 : "array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e
            }

            function r(e, t, n) {
                if (Z.isFunction(t)) return Z.grep(e, function(e, r) {
                    return !!t.call(e, r, e) !== n
                });
                if (t.nodeType) return Z.grep(e, function(e) {
                    return e === t !== n
                });
                if ("string" == typeof t) {
                    if (se.test(t)) return Z.filter(t, e, n);
                    t = Z.filter(t, e)
                }
                return Z.grep(e, function(e) {
                    return X.call(t, e) >= 0 !== n
                })
            }

            function i(e, t) {
                for (;
                    (e = e[t]) && 1 !== e.nodeType;);
                return e
            }

            function o(e) {
                var t = he[e] = {};
                return Z.each(e.match(de) || [], function(e, n) {
                    t[n] = !0
                }), t
            }

            function a() {
                G.removeEventListener("DOMContentLoaded", a, !1), e.removeEventListener("load", a, !1), Z.ready()
            }

            function s() {
                Object.defineProperty(this.cache = {}, 0, {
                    get: function() {
                        return {}
                    }
                }), this.expando = Z.expando + s.uid++
            }

            function u(e, t, n) {
                var r;
                if (void 0 === n && 1 === e.nodeType)
                    if (r = "data-" + t.replace(be, "-$1").toLowerCase(), n = e.getAttribute(r), "string" == typeof n) {
                        try {
                            n = "true" === n ? !0 : "false" === n ? !1 : "null" === n ? null : +n + "" === n ? +n : xe.test(n) ? Z.parseJSON(n) : n
                        } catch (i) {}
                        ye.set(e, t, n)
                    } else n = void 0;
                return n
            }

            function c() {
                return !0
            }

            function l() {
                return !1
            }

            function f() {
                try {
                    return G.activeElement
                } catch (e) {}
            }

            function p(e, t) {
                return Z.nodeName(e, "table") && Z.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
            }

            function d(e) {
                return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
            }

            function h(e) {
                var t = _e.exec(e.type);
                return t ? e.type = t[1] : e.removeAttribute("type"), e
            }

            function g(e, t) {
                for (var n = 0, r = e.length; r > n; n++) me.set(e[n], "globalEval", !t || me.get(t[n], "globalEval"))
            }

            function v(e, t) {
                var n, r, i, o, a, s, u, c;
                if (1 === t.nodeType) {
                    if (me.hasData(e) && (o = me.access(e), a = me.set(t, o), c = o.events)) {
                        delete a.handle, a.events = {};
                        for (i in c)
                            for (n = 0, r = c[i].length; r > n; n++) Z.event.add(t, i, c[i][n])
                    }
                    ye.hasData(e) && (s = ye.access(e), u = Z.extend({}, s), ye.set(t, u))
                }
            }

            function m(e, t) {
                var n = e.getElementsByTagName ? e.getElementsByTagName(t || "*") : e.querySelectorAll ? e.querySelectorAll(t || "*") : [];
                return void 0 === t || t && Z.nodeName(e, t) ? Z.merge([e], n) : n
            }

            function y(e, t) {
                var n = t.nodeName.toLowerCase();
                "input" === n && ke.test(e.type) ? t.checked = e.checked : ("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue)
            }

            function x(t, n) {
                var r, i = Z(n.createElement(t)).appendTo(n.body),
                    o = e.getDefaultComputedStyle && (r = e.getDefaultComputedStyle(i[0])) ? r.display : Z.css(i[0], "display");
                return i.detach(), o
            }

            function b(e) {
                var t = G,
                    n = Pe[e];
                return n || (n = x(e, t), "none" !== n && n || (Ie = (Ie || Z("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement), t = Ie[0].contentDocument, t.write(), t.close(), n = x(e, t), Ie.detach()), Pe[e] = n), n
            }

            function w(e, t, n) {
                var r, i, o, a, s = e.style;
                return n = n || $e(e), n && (a = n.getPropertyValue(t) || n[t]), n && ("" !== a || Z.contains(e.ownerDocument, e) || (a = Z.style(e, t)), Be.test(a) && We.test(t) && (r = s.width, i = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = r, s.minWidth = i, s.maxWidth = o)), void 0 !== a ? a + "" : a
            }

            function T(e, t) {
                return {
                    get: function() {
                        return e() ? void delete this.get : (this.get = t).apply(this, arguments)
                    }
                }
            }

            function C(e, t) {
                if (t in e) return t;
                for (var n = t[0].toUpperCase() + t.slice(1), r = t, i = Ye.length; i--;)
                    if (t = Ye[i] + n, t in e) return t;
                return r
            }

            function k(e, t, n) {
                var r = ze.exec(t);
                return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t
            }

            function j(e, t, n, r, i) {
                for (var o = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0, a = 0; 4 > o; o += 2) "margin" === n && (a += Z.css(e, n + Te[o], !0, i)), r ? ("content" === n && (a -= Z.css(e, "padding" + Te[o], !0, i)), "margin" !== n && (a -= Z.css(e, "border" + Te[o] + "Width", !0, i))) : (a += Z.css(e, "padding" + Te[o], !0, i), "padding" !== n && (a += Z.css(e, "border" + Te[o] + "Width", !0, i)));
                return a
            }

            function E(e, t, n) {
                var r = !0,
                    i = "width" === t ? e.offsetWidth : e.offsetHeight,
                    o = $e(e),
                    a = "border-box" === Z.css(e, "boxSizing", !1, o);
                if (0 >= i || null == i) {
                    if (i = w(e, t, o), (0 > i || null == i) && (i = e.style[t]), Be.test(i)) return i;
                    r = a && (J.boxSizingReliable() || i === e.style[t]), i = parseFloat(i) || 0
                }
                return i + j(e, t, n || (a ? "border" : "content"), r, o) + "px"
            }

            function N(e, t) {
                for (var n, r, i, o = [], a = 0, s = e.length; s > a; a++) r = e[a], r.style && (o[a] = me.get(r, "olddisplay"), n = r.style.display, t ? (o[a] || "none" !== n || (r.style.display = ""), "" === r.style.display && Ce(r) && (o[a] = me.access(r, "olddisplay", b(r.nodeName)))) : (i = Ce(r), "none" === n && i || me.set(r, "olddisplay", i ? n : Z.css(r, "display"))));
                for (a = 0; s > a; a++) r = e[a], r.style && (t && "none" !== r.style.display && "" !== r.style.display || (r.style.display = t ? o[a] || "" : "none"));
                return e
            }

            function A(e, t, n, r, i) {
                return new A.prototype.init(e, t, n, r, i)
            }

            function S() {
                return setTimeout(function() {
                    Je = void 0
                }), Je = Z.now()
            }

            function D(e, t) {
                var n, r = 0,
                    i = {
                        height: e
                    };
                for (t = t ? 1 : 0; 4 > r; r += 2 - t) n = Te[r], i["margin" + n] = i["padding" + n] = e;
                return t && (i.opacity = i.width = e), i
            }

            function L(e, t, n) {
                for (var r, i = (nt[t] || []).concat(nt["*"]), o = 0, a = i.length; a > o; o++)
                    if (r = i[o].call(n, t, e)) return r
            }

            function q(e, t, n) {
                var r, i, o, a, s, u, c, l, f = this,
                    p = {},
                    d = e.style,
                    h = e.nodeType && Ce(e),
                    g = me.get(e, "fxshow");
                n.queue || (s = Z._queueHooks(e, "fx"), null == s.unqueued && (s.unqueued = 0, u = s.empty.fire, s.empty.fire = function() {
                    s.unqueued || u()
                }), s.unqueued++, f.always(function() {
                    f.always(function() {
                        s.unqueued--, Z.queue(e, "fx").length || s.empty.fire()
                    })
                })), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [d.overflow, d.overflowX, d.overflowY], c = Z.css(e, "display"), l = "none" === c ? me.get(e, "olddisplay") || b(e.nodeName) : c, "inline" === l && "none" === Z.css(e, "float") && (d.display = "inline-block")), n.overflow && (d.overflow = "hidden", f.always(function() {
                    d.overflow = n.overflow[0], d.overflowX = n.overflow[1], d.overflowY = n.overflow[2]
                }));
                for (r in t)
                    if (i = t[r], Qe.exec(i)) {
                        if (delete t[r], o = o || "toggle" === i, i === (h ? "hide" : "show")) {
                            if ("show" !== i || !g || void 0 === g[r]) continue;
                            h = !0
                        }
                        p[r] = g && g[r] || Z.style(e, r)
                    } else c = void 0;
                if (Z.isEmptyObject(p)) "inline" === ("none" === c ? b(e.nodeName) : c) && (d.display = c);
                else {
                    g ? "hidden" in g && (h = g.hidden) : g = me.access(e, "fxshow", {}), o && (g.hidden = !h), h ? Z(e).show() : f.done(function() {
                        Z(e).hide()
                    }), f.done(function() {
                        var t;
                        me.remove(e, "fxshow");
                        for (t in p) Z.style(e, t, p[t])
                    });
                    for (r in p) a = L(h ? g[r] : 0, r, f), r in g || (g[r] = a.start, h && (a.end = a.start, a.start = "width" === r || "height" === r ? 1 : 0))
                }
            }

            function O(e, t) {
                var n, r, i, o, a;
                for (n in e)
                    if (r = Z.camelCase(n), i = t[r], o = e[n], Z.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), a = Z.cssHooks[r], a && "expand" in a) {
                        o = a.expand(o), delete e[r];
                        for (n in o) n in e || (e[n] = o[n], t[n] = i)
                    } else t[r] = i
            }

            function M(e, t, n) {
                var r, i, o = 0,
                    a = tt.length,
                    s = Z.Deferred().always(function() {
                        delete u.elem
                    }),
                    u = function() {
                        if (i) return !1;
                        for (var t = Je || S(), n = Math.max(0, c.startTime + c.duration - t), r = n / c.duration || 0, o = 1 - r, a = 0, u = c.tweens.length; u > a; a++) c.tweens[a].run(o);
                        return s.notifyWith(e, [c, o, n]), 1 > o && u ? n : (s.resolveWith(e, [c]), !1)
                    },
                    c = s.promise({
                        elem: e,
                        props: Z.extend({}, t),
                        opts: Z.extend(!0, {
                            specialEasing: {}
                        }, n),
                        originalProperties: t,
                        originalOptions: n,
                        startTime: Je || S(),
                        duration: n.duration,
                        tweens: [],
                        createTween: function(t, n) {
                            var r = Z.Tween(e, c.opts, t, n, c.opts.specialEasing[t] || c.opts.easing);
                            return c.tweens.push(r), r
                        },
                        stop: function(t) {
                            var n = 0,
                                r = t ? c.tweens.length : 0;
                            if (i) return this;
                            for (i = !0; r > n; n++) c.tweens[n].run(1);
                            return t ? s.resolveWith(e, [c, t]) : s.rejectWith(e, [c, t]), this
                        }
                    }),
                    l = c.props;
                for (O(l, c.opts.specialEasing); a > o; o++)
                    if (r = tt[o].call(c, e, l, c.opts)) return r;
                return Z.map(l, L, c), Z.isFunction(c.opts.start) && c.opts.start.call(e, c), Z.fx.timer(Z.extend(u, {
                    elem: e,
                    anim: c,
                    queue: c.opts.queue
                })), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always)
            }

            function F(e) {
                return function(t, n) {
                    "string" != typeof t && (n = t, t = "*");
                    var r, i = 0,
                        o = t.toLowerCase().match(de) || [];
                    if (Z.isFunction(n))
                        for (; r = o[i++];) "+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
                }
            }

            function _(e, t, n, r) {
                function i(s) {
                    var u;
                    return o[s] = !0, Z.each(e[s] || [], function(e, s) {
                        var c = s(t, n, r);
                        return "string" != typeof c || a || o[c] ? a ? !(u = c) : void 0 : (t.dataTypes.unshift(c), i(c), !1)
                    }), u
                }
                var o = {},
                    a = e === xt;
                return i(t.dataTypes[0]) || !o["*"] && i("*")
            }

            function H(e, t) {
                var n, r, i = Z.ajaxSettings.flatOptions || {};
                for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
                return r && Z.extend(!0, e, r), e
            }

            function R(e, t, n) {
                for (var r, i, o, a, s = e.contents, u = e.dataTypes;
                    "*" === u[0];) u.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
                if (r)
                    for (i in s)
                        if (s[i] && s[i].test(r)) {
                            u.unshift(i);
                            break
                        } if (u[0] in n) o = u[0];
                else {
                    for (i in n) {
                        if (!u[0] || e.converters[i + " " + u[0]]) {
                            o = i;
                            break
                        }
                        a || (a = i)
                    }
                    o = o || a
                }
                return o ? (o !== u[0] && u.unshift(o), n[o]) : void 0
            }

            function I(e, t, n, r) {
                var i, o, a, s, u, c = {},
                    l = e.dataTypes.slice();
                if (l[1])
                    for (a in e.converters) c[a.toLowerCase()] = e.converters[a];
                for (o = l.shift(); o;)
                    if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = l.shift())
                        if ("*" === o) o = u;
                        else if ("*" !== u && u !== o) {
                    if (a = c[u + " " + o] || c["* " + o], !a)
                        for (i in c)
                            if (s = i.split(" "), s[1] === o && (a = c[u + " " + s[0]] || c["* " + s[0]])) {
                                a === !0 ? a = c[i] : c[i] !== !0 && (o = s[0], l.unshift(s[1]));
                                break
                            } if (a !== !0)
                        if (a && e["throws"]) t = a(t);
                        else try {
                            t = a(t)
                        } catch (f) {
                            return {
                                state: "parsererror",
                                error: a ? f : "No conversion from " + u + " to " + o
                            }
                        }
                }
                return {
                    state: "success",
                    data: t
                }
            }

            function P(e, t, n, r) {
                var i;
                if (Z.isArray(t)) Z.each(t, function(t, i) {
                    n || kt.test(e) ? r(e, i) : P(e + "[" + ("object" == typeof i ? t : "") + "]", i, n, r)
                });
                else if (n || "object" !== Z.type(t)) r(e, t);
                else
                    for (i in t) P(e + "[" + i + "]", t[i], n, r)
            }

            function W(e) {
                return Z.isWindow(e) ? e : 9 === e.nodeType && e.defaultView
            }
            var B = [],
                $ = B.slice,
                U = B.concat,
                z = B.push,
                X = B.indexOf,
                V = {},
                K = V.toString,
                Y = V.hasOwnProperty,
                J = {},
                G = e.document,
                Q = "2.1.4",
                Z = function(e, t) {
                    return new Z.fn.init(e, t)
                },
                ee = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
                te = /^-ms-/,
                ne = /-([\da-z])/gi,
                re = function(e, t) {
                    return t.toUpperCase()
                };
            Z.fn = Z.prototype = {
                jquery: Q,
                constructor: Z,
                selector: "",
                length: 0,
                toArray: function() {
                    return $.call(this)
                },
                get: function(e) {
                    return null != e ? 0 > e ? this[e + this.length] : this[e] : $.call(this)
                },
                pushStack: function(e) {
                    var t = Z.merge(this.constructor(), e);
                    return t.prevObject = this, t.context = this.context, t
                },
                each: function(e, t) {
                    return Z.each(this, e, t)
                },
                map: function(e) {
                    return this.pushStack(Z.map(this, function(t, n) {
                        return e.call(t, n, t)
                    }))
                },
                slice: function() {
                    return this.pushStack($.apply(this, arguments))
                },
                first: function() {
                    return this.eq(0)
                },
                last: function() {
                    return this.eq(-1)
                },
                eq: function(e) {
                    var t = this.length,
                        n = +e + (0 > e ? t : 0);
                    return this.pushStack(n >= 0 && t > n ? [this[n]] : [])
                },
                end: function() {
                    return this.prevObject || this.constructor(null)
                },
                push: z,
                sort: B.sort,
                splice: B.splice
            }, Z.extend = Z.fn.extend = function() {
                var e, t, n, r, i, o, a = arguments[0] || {},
                    s = 1,
                    u = arguments.length,
                    c = !1;
                for ("boolean" == typeof a && (c = a, a = arguments[s] || {}, s++), "object" == typeof a || Z.isFunction(a) || (a = {}), s === u && (a = this, s--); u > s; s++)
                    if (null != (e = arguments[s]))
                        for (t in e) n = a[t], r = e[t], a !== r && (c && r && (Z.isPlainObject(r) || (i = Z.isArray(r))) ? (i ? (i = !1, o = n && Z.isArray(n) ? n : []) : o = n && Z.isPlainObject(n) ? n : {}, a[t] = Z.extend(c, o, r)) : void 0 !== r && (a[t] = r));
                return a
            }, Z.extend({
                expando: "jQuery" + (Q + Math.random()).replace(/\D/g, ""),
                isReady: !0,
                error: function(e) {
                    throw new Error(e)
                },
                noop: function() {},
                isFunction: function(e) {
                    return "function" === Z.type(e)
                },
                isArray: Array.isArray,
                isWindow: function(e) {
                    return null != e && e === e.window
                },
                isNumeric: function(e) {
                    return !Z.isArray(e) && e - parseFloat(e) + 1 >= 0
                },
                isPlainObject: function(e) {
                    return "object" !== Z.type(e) || e.nodeType || Z.isWindow(e) ? !1 : e.constructor && !Y.call(e.constructor.prototype, "isPrototypeOf") ? !1 : !0
                },
                isEmptyObject: function(e) {
                    var t;
                    for (t in e) return !1;
                    return !0
                },
                type: function(e) {
                    return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? V[K.call(e)] || "object" : typeof e
                },
                globalEval: function(e) {
                    var t, n = eval;
                    e = Z.trim(e), e && (1 === e.indexOf("use strict") ? (t = G.createElement("script"), t.text = e, G.head.appendChild(t).parentNode.removeChild(t)) : n(e))
                },
                camelCase: function(e) {
                    return e.replace(te, "ms-").replace(ne, re)
                },
                nodeName: function(e, t) {
                    return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
                },
                each: function(e, t, r) {
                    var i, o = 0,
                        a = e.length,
                        s = n(e);
                    if (r) {
                        if (s)
                            for (; a > o && (i = t.apply(e[o], r), i !== !1); o++);
                        else
                            for (o in e)
                                if (i = t.apply(e[o], r), i === !1) break
                    } else if (s)
                        for (; a > o && (i = t.call(e[o], o, e[o]), i !== !1); o++);
                    else
                        for (o in e)
                            if (i = t.call(e[o], o, e[o]), i === !1) break;
                    return e
                },
                trim: function(e) {
                    return null == e ? "" : (e + "").replace(ee, "")
                },
                makeArray: function(e, t) {
                    var r = t || [];
                    return null != e && (n(Object(e)) ? Z.merge(r, "string" == typeof e ? [e] : e) : z.call(r, e)), r
                },
                inArray: function(e, t, n) {
                    return null == t ? -1 : X.call(t, e, n)
                },
                merge: function(e, t) {
                    for (var n = +t.length, r = 0, i = e.length; n > r; r++) e[i++] = t[r];
                    return e.length = i, e
                },
                grep: function(e, t, n) {
                    for (var r, i = [], o = 0, a = e.length, s = !n; a > o; o++) r = !t(e[o], o), r !== s && i.push(e[o]);
                    return i
                },
                map: function(e, t, r) {
                    var i, o = 0,
                        a = e.length,
                        s = n(e),
                        u = [];
                    if (s)
                        for (; a > o; o++) i = t(e[o], o, r), null != i && u.push(i);
                    else
                        for (o in e) i = t(e[o], o, r), null != i && u.push(i);
                    return U.apply([], u)
                },
                guid: 1,
                proxy: function(e, t) {
                    var n, r, i;
                    return "string" == typeof t && (n = e[t], t = e, e = n), Z.isFunction(e) ? (r = $.call(arguments, 2), i = function() {
                        return e.apply(t || this, r.concat($.call(arguments)))
                    }, i.guid = e.guid = e.guid || Z.guid++, i) : void 0
                },
                now: Date.now,
                support: J
            }), Z.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(e, t) {
                V["[object " + t + "]"] = t.toLowerCase()
            });
            var ie = function(e) {
                function t(e, t, n, r) {
                    var i, o, a, s, u, c, f, d, h, g;
                    if ((t ? t.ownerDocument || t : P) !== q && L(t), t = t || q, n = n || [], s = t.nodeType, "string" != typeof e || !e || 1 !== s && 9 !== s && 11 !== s) return n;
                    if (!r && M) {
                        if (11 !== s && (i = ye.exec(e)))
                            if (a = i[1]) {
                                if (9 === s) {
                                    if (o = t.getElementById(a), !o || !o.parentNode) return n;
                                    if (o.id === a) return n.push(o), n
                                } else if (t.ownerDocument && (o = t.ownerDocument.getElementById(a)) && R(t, o) && o.id === a) return n.push(o), n
                            } else {
                                if (i[2]) return Q.apply(n, t.getElementsByTagName(e)), n;
                                if ((a = i[3]) && w.getElementsByClassName) return Q.apply(n, t.getElementsByClassName(a)), n
                            } if (w.qsa && (!F || !F.test(e))) {
                            if (d = f = I, h = t, g = 1 !== s && e, 1 === s && "object" !== t.nodeName.toLowerCase()) {
                                for (c = j(e), (f = t.getAttribute("id")) ? d = f.replace(be, "\\$&") : t.setAttribute("id", d), d = "[id='" + d + "'] ", u = c.length; u--;) c[u] = d + p(c[u]);
                                h = xe.test(e) && l(t.parentNode) || t, g = c.join(",")
                            }
                            if (g) try {
                                return Q.apply(n, h.querySelectorAll(g)), n
                            } catch (v) {} finally {
                                f || t.removeAttribute("id")
                            }
                        }
                    }
                    return N(e.replace(ue, "$1"), t, n, r)
                }

                function n() {
                    function e(n, r) {
                        return t.push(n + " ") > T.cacheLength && delete e[t.shift()], e[n + " "] = r
                    }
                    var t = [];
                    return e
                }

                function r(e) {
                    return e[I] = !0, e
                }

                function i(e) {
                    var t = q.createElement("div");
                    try {
                        return !!e(t)
                    } catch (n) {
                        return !1
                    } finally {
                        t.parentNode && t.parentNode.removeChild(t), t = null
                    }
                }

                function o(e, t) {
                    for (var n = e.split("|"), r = e.length; r--;) T.attrHandle[n[r]] = t
                }

                function a(e, t) {
                    var n = t && e,
                        r = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || V) - (~e.sourceIndex || V);
                    if (r) return r;
                    if (n)
                        for (; n = n.nextSibling;)
                            if (n === t) return -1;
                    return e ? 1 : -1
                }

                function s(e) {
                    return function(t) {
                        var n = t.nodeName.toLowerCase();
                        return "input" === n && t.type === e
                    }
                }

                function u(e) {
                    return function(t) {
                        var n = t.nodeName.toLowerCase();
                        return ("input" === n || "button" === n) && t.type === e
                    }
                }

                function c(e) {
                    return r(function(t) {
                        return t = +t, r(function(n, r) {
                            for (var i, o = e([], n.length, t), a = o.length; a--;) n[i = o[a]] && (n[i] = !(r[i] = n[i]))
                        })
                    })
                }

                function l(e) {
                    return e && "undefined" != typeof e.getElementsByTagName && e
                }

                function f() {}

                function p(e) {
                    for (var t = 0, n = e.length, r = ""; n > t; t++) r += e[t].value;
                    return r
                }

                function d(e, t, n) {
                    var r = t.dir,
                        i = n && "parentNode" === r,
                        o = B++;
                    return t.first ? function(t, n, o) {
                        for (; t = t[r];)
                            if (1 === t.nodeType || i) return e(t, n, o)
                    } : function(t, n, a) {
                        var s, u, c = [W, o];
                        if (a) {
                            for (; t = t[r];)
                                if ((1 === t.nodeType || i) && e(t, n, a)) return !0
                        } else
                            for (; t = t[r];)
                                if (1 === t.nodeType || i) {
                                    if (u = t[I] || (t[I] = {}), (s = u[r]) && s[0] === W && s[1] === o) return c[2] = s[2];
                                    if (u[r] = c, c[2] = e(t, n, a)) return !0
                                }
                    }
                }

                function h(e) {
                    return e.length > 1 ? function(t, n, r) {
                        for (var i = e.length; i--;)
                            if (!e[i](t, n, r)) return !1;
                        return !0
                    } : e[0]
                }

                function g(e, n, r) {
                    for (var i = 0, o = n.length; o > i; i++) t(e, n[i], r);
                    return r
                }

                function v(e, t, n, r, i) {
                    for (var o, a = [], s = 0, u = e.length, c = null != t; u > s; s++)(o = e[s]) && (!n || n(o, r, i)) && (a.push(o), c && t.push(s));
                    return a
                }

                function m(e, t, n, i, o, a) {
                    return i && !i[I] && (i = m(i)), o && !o[I] && (o = m(o, a)), r(function(r, a, s, u) {
                        var c, l, f, p = [],
                            d = [],
                            h = a.length,
                            m = r || g(t || "*", s.nodeType ? [s] : s, []),
                            y = !e || !r && t ? m : v(m, p, e, s, u),
                            x = n ? o || (r ? e : h || i) ? [] : a : y;
                        if (n && n(y, x, s, u), i)
                            for (c = v(x, d), i(c, [], s, u), l = c.length; l--;)(f = c[l]) && (x[d[l]] = !(y[d[l]] = f));
                        if (r) {
                            if (o || e) {
                                if (o) {
                                    for (c = [], l = x.length; l--;)(f = x[l]) && c.push(y[l] = f);
                                    o(null, x = [], c, u)
                                }
                                for (l = x.length; l--;)(f = x[l]) && (c = o ? ee(r, f) : p[l]) > -1 && (r[c] = !(a[c] = f))
                            }
                        } else x = v(x === a ? x.splice(h, x.length) : x), o ? o(null, a, x, u) : Q.apply(a, x)
                    })
                }

                function y(e) {
                    for (var t, n, r, i = e.length, o = T.relative[e[0].type], a = o || T.relative[" "], s = o ? 1 : 0, u = d(function(e) {
                            return e === t
                        }, a, !0), c = d(function(e) {
                            return ee(t, e) > -1
                        }, a, !0), l = [function(e, n, r) {
                            var i = !o && (r || n !== A) || ((t = n).nodeType ? u(e, n, r) : c(e, n, r));
                            return t = null, i
                        }]; i > s; s++)
                        if (n = T.relative[e[s].type]) l = [d(h(l), n)];
                        else {
                            if (n = T.filter[e[s].type].apply(null, e[s].matches), n[I]) {
                                for (r = ++s; i > r && !T.relative[e[r].type]; r++);
                                return m(s > 1 && h(l), s > 1 && p(e.slice(0, s - 1).concat({
                                    value: " " === e[s - 2].type ? "*" : ""
                                })).replace(ue, "$1"), n, r > s && y(e.slice(s, r)), i > r && y(e = e.slice(r)), i > r && p(e))
                            }
                            l.push(n)
                        } return h(l)
                }

                function x(e, n) {
                    var i = n.length > 0,
                        o = e.length > 0,
                        a = function(r, a, s, u, c) {
                            var l, f, p, d = 0,
                                h = "0",
                                g = r && [],
                                m = [],
                                y = A,
                                x = r || o && T.find.TAG("*", c),
                                b = W += null == y ? 1 : Math.random() || .1,
                                w = x.length;
                            for (c && (A = a !== q && a); h !== w && null != (l = x[h]); h++) {
                                if (o && l) {
                                    for (f = 0; p = e[f++];)
                                        if (p(l, a, s)) {
                                            u.push(l);
                                            break
                                        } c && (W = b)
                                }
                                i && ((l = !p && l) && d--, r && g.push(l))
                            }
                            if (d += h, i && h !== d) {
                                for (f = 0; p = n[f++];) p(g, m, a, s);
                                if (r) {
                                    if (d > 0)
                                        for (; h--;) g[h] || m[h] || (m[h] = J.call(u));
                                    m = v(m)
                                }
                                Q.apply(u, m), c && !r && m.length > 0 && d + n.length > 1 && t.uniqueSort(u)
                            }
                            return c && (W = b, A = y), g
                        };
                    return i ? r(a) : a
                }
                var b, w, T, C, k, j, E, N, A, S, D, L, q, O, M, F, _, H, R, I = "sizzle" + 1 * new Date,
                    P = e.document,
                    W = 0,
                    B = 0,
                    $ = n(),
                    U = n(),
                    z = n(),
                    X = function(e, t) {
                        return e === t && (D = !0), 0
                    },
                    V = 1 << 31,
                    K = {}.hasOwnProperty,
                    Y = [],
                    J = Y.pop,
                    G = Y.push,
                    Q = Y.push,
                    Z = Y.slice,
                    ee = function(e, t) {
                        for (var n = 0, r = e.length; r > n; n++)
                            if (e[n] === t) return n;
                        return -1
                    },
                    te = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                    ne = "[\\x20\\t\\r\\n\\f]",
                    re = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
                    ie = re.replace("w", "w#"),
                    oe = "\\[" + ne + "*(" + re + ")(?:" + ne + "*([*^$|!~]?=)" + ne + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + ie + "))|)" + ne + "*\\]",
                    ae = ":(" + re + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + oe + ")*)|.*)\\)|)",
                    se = new RegExp(ne + "+", "g"),
                    ue = new RegExp("^" + ne + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ne + "+$", "g"),
                    ce = new RegExp("^" + ne + "*," + ne + "*"),
                    le = new RegExp("^" + ne + "*([>+~]|" + ne + ")" + ne + "*"),
                    fe = new RegExp("=" + ne + "*([^\\]'\"]*?)" + ne + "*\\]", "g"),
                    pe = new RegExp(ae),
                    de = new RegExp("^" + ie + "$"),
                    he = {
                        ID: new RegExp("^#(" + re + ")"),
                        CLASS: new RegExp("^\\.(" + re + ")"),
                        TAG: new RegExp("^(" + re.replace("w", "w*") + ")"),
                        ATTR: new RegExp("^" + oe),
                        PSEUDO: new RegExp("^" + ae),
                        CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ne + "*(even|odd|(([+-]|)(\\d*)n|)" + ne + "*(?:([+-]|)" + ne + "*(\\d+)|))" + ne + "*\\)|)", "i"),
                        bool: new RegExp("^(?:" + te + ")$", "i"),
                        needsContext: new RegExp("^" + ne + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ne + "*((?:-\\d)?\\d*)" + ne + "*\\)|)(?=[^-]|$)", "i")
                    },
                    ge = /^(?:input|select|textarea|button)$/i,
                    ve = /^h\d$/i,
                    me = /^[^{]+\{\s*\[native \w/,
                    ye = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                    xe = /[+~]/,
                    be = /'|\\/g,
                    we = new RegExp("\\\\([\\da-f]{1,6}" + ne + "?|(" + ne + ")|.)", "ig"),
                    Te = function(e, t, n) {
                        var r = "0x" + t - 65536;
                        return r !== r || n ? t : 0 > r ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
                    },
                    Ce = function() {
                        L()
                    };
                try {
                    Q.apply(Y = Z.call(P.childNodes), P.childNodes), Y[P.childNodes.length].nodeType
                } catch (ke) {
                    Q = {
                        apply: Y.length ? function(e, t) {
                            G.apply(e, Z.call(t))
                        } : function(e, t) {
                            for (var n = e.length, r = 0; e[n++] = t[r++];);
                            e.length = n - 1
                        }
                    }
                }
                w = t.support = {}, k = t.isXML = function(e) {
                    var t = e && (e.ownerDocument || e).documentElement;
                    return t ? "HTML" !== t.nodeName : !1
                }, L = t.setDocument = function(e) {
                    var t, n, r = e ? e.ownerDocument || e : P;
                    return r !== q && 9 === r.nodeType && r.documentElement ? (q = r, O = r.documentElement, n = r.defaultView, n && n !== n.top && (n.addEventListener ? n.addEventListener("unload", Ce, !1) : n.attachEvent && n.attachEvent("onunload", Ce)), M = !k(r), w.attributes = i(function(e) {
                        return e.className = "i", !e.getAttribute("className")
                    }), w.getElementsByTagName = i(function(e) {
                        return e.appendChild(r.createComment("")), !e.getElementsByTagName("*").length
                    }), w.getElementsByClassName = me.test(r.getElementsByClassName), w.getById = i(function(e) {
                        return O.appendChild(e).id = I, !r.getElementsByName || !r.getElementsByName(I).length
                    }), w.getById ? (T.find.ID = function(e, t) {
                        if ("undefined" != typeof t.getElementById && M) {
                            var n = t.getElementById(e);
                            return n && n.parentNode ? [n] : []
                        }
                    }, T.filter.ID = function(e) {
                        var t = e.replace(we, Te);
                        return function(e) {
                            return e.getAttribute("id") === t
                        }
                    }) : (delete T.find.ID, T.filter.ID = function(e) {
                        var t = e.replace(we, Te);
                        return function(e) {
                            var n = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
                            return n && n.value === t
                        }
                    }), T.find.TAG = w.getElementsByTagName ? function(e, t) {
                        return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : w.qsa ? t.querySelectorAll(e) : void 0
                    } : function(e, t) {
                        var n, r = [],
                            i = 0,
                            o = t.getElementsByTagName(e);
                        if ("*" === e) {
                            for (; n = o[i++];) 1 === n.nodeType && r.push(n);
                            return r
                        }
                        return o
                    }, T.find.CLASS = w.getElementsByClassName && function(e, t) {
                        return M ? t.getElementsByClassName(e) : void 0
                    }, _ = [], F = [], (w.qsa = me.test(r.querySelectorAll)) && (i(function(e) {
                        O.appendChild(e).innerHTML = "<a id='" + I + "'></a><select id='" + I + "-\f]' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && F.push("[*^$]=" + ne + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || F.push("\\[" + ne + "*(?:value|" + te + ")"), e.querySelectorAll("[id~=" + I + "-]").length || F.push("~="), e.querySelectorAll(":checked").length || F.push(":checked"), e.querySelectorAll("a#" + I + "+*").length || F.push(".#.+[+~]")
                    }), i(function(e) {
                        var t = r.createElement("input");
                        t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && F.push("name" + ne + "*[*^$|!~]?="), e.querySelectorAll(":enabled").length || F.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), F.push(",.*:")
                    })), (w.matchesSelector = me.test(H = O.matches || O.webkitMatchesSelector || O.mozMatchesSelector || O.oMatchesSelector || O.msMatchesSelector)) && i(function(e) {
                        w.disconnectedMatch = H.call(e, "div"), H.call(e, "[s!='']:x"), _.push("!=", ae)
                    }), F = F.length && new RegExp(F.join("|")), _ = _.length && new RegExp(_.join("|")), t = me.test(O.compareDocumentPosition), R = t || me.test(O.contains) ? function(e, t) {
                        var n = 9 === e.nodeType ? e.documentElement : e,
                            r = t && t.parentNode;
                        return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
                    } : function(e, t) {
                        if (t)
                            for (; t = t.parentNode;)
                                if (t === e) return !0;
                        return !1
                    }, X = t ? function(e, t) {
                        if (e === t) return D = !0, 0;
                        var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                        return n ? n : (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 1 & n || !w.sortDetached && t.compareDocumentPosition(e) === n ? e === r || e.ownerDocument === P && R(P, e) ? -1 : t === r || t.ownerDocument === P && R(P, t) ? 1 : S ? ee(S, e) - ee(S, t) : 0 : 4 & n ? -1 : 1)
                    } : function(e, t) {
                        if (e === t) return D = !0, 0;
                        var n, i = 0,
                            o = e.parentNode,
                            s = t.parentNode,
                            u = [e],
                            c = [t];
                        if (!o || !s) return e === r ? -1 : t === r ? 1 : o ? -1 : s ? 1 : S ? ee(S, e) - ee(S, t) : 0;
                        if (o === s) return a(e, t);
                        for (n = e; n = n.parentNode;) u.unshift(n);
                        for (n = t; n = n.parentNode;) c.unshift(n);
                        for (; u[i] === c[i];) i++;
                        return i ? a(u[i], c[i]) : u[i] === P ? -1 : c[i] === P ? 1 : 0
                    }, r) : q
                }, t.matches = function(e, n) {
                    return t(e, null, null, n)
                }, t.matchesSelector = function(e, n) {
                    if ((e.ownerDocument || e) !== q && L(e), n = n.replace(fe, "='$1']"), !(!w.matchesSelector || !M || _ && _.test(n) || F && F.test(n))) try {
                        var r = H.call(e, n);
                        if (r || w.disconnectedMatch || e.document && 11 !== e.document.nodeType) return r
                    } catch (i) {}
                    return t(n, q, null, [e]).length > 0
                }, t.contains = function(e, t) {
                    return (e.ownerDocument || e) !== q && L(e), R(e, t)
                }, t.attr = function(e, t) {
                    (e.ownerDocument || e) !== q && L(e);
                    var n = T.attrHandle[t.toLowerCase()],
                        r = n && K.call(T.attrHandle, t.toLowerCase()) ? n(e, t, !M) : void 0;
                    return void 0 !== r ? r : w.attributes || !M ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
                }, t.error = function(e) {
                    throw new Error("Syntax error, unrecognized expression: " + e)
                }, t.uniqueSort = function(e) {
                    var t, n = [],
                        r = 0,
                        i = 0;
                    if (D = !w.detectDuplicates, S = !w.sortStable && e.slice(0), e.sort(X), D) {
                        for (; t = e[i++];) t === e[i] && (r = n.push(i));
                        for (; r--;) e.splice(n[r], 1)
                    }
                    return S = null, e
                }, C = t.getText = function(e) {
                    var t, n = "",
                        r = 0,
                        i = e.nodeType;
                    if (i) {
                        if (1 === i || 9 === i || 11 === i) {
                            if ("string" == typeof e.textContent) return e.textContent;
                            for (e = e.firstChild; e; e = e.nextSibling) n += C(e)
                        } else if (3 === i || 4 === i) return e.nodeValue
                    } else
                        for (; t = e[r++];) n += C(t);
                    return n
                }, T = t.selectors = {
                    cacheLength: 50,
                    createPseudo: r,
                    match: he,
                    attrHandle: {},
                    find: {},
                    relative: {
                        ">": {
                            dir: "parentNode",
                            first: !0
                        },
                        " ": {
                            dir: "parentNode"
                        },
                        "+": {
                            dir: "previousSibling",
                            first: !0
                        },
                        "~": {
                            dir: "previousSibling"
                        }
                    },
                    preFilter: {
                        ATTR: function(e) {
                            return e[1] = e[1].replace(we, Te), e[3] = (e[3] || e[4] || e[5] || "").replace(we, Te), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                        },
                        CHILD: function(e) {
                            return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]), e
                        },
                        PSEUDO: function(e) {
                            var t, n = !e[6] && e[2];
                            return he.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && pe.test(n) && (t = j(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                        }
                    },
                    filter: {
                        TAG: function(e) {
                            var t = e.replace(we, Te).toLowerCase();
                            return "*" === e ? function() {
                                return !0
                            } : function(e) {
                                return e.nodeName && e.nodeName.toLowerCase() === t
                            }
                        },
                        CLASS: function(e) {
                            var t = $[e + " "];
                            return t || (t = new RegExp("(^|" + ne + ")" + e + "(" + ne + "|$)")) && $(e, function(e) {
                                return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
                            })
                        },
                        ATTR: function(e, n, r) {
                            return function(i) {
                                var o = t.attr(i, e);
                                return null == o ? "!=" === n : n ? (o += "", "=" === n ? o === r : "!=" === n ? o !== r : "^=" === n ? r && 0 === o.indexOf(r) : "*=" === n ? r && o.indexOf(r) > -1 : "$=" === n ? r && o.slice(-r.length) === r : "~=" === n ? (" " + o.replace(se, " ") + " ").indexOf(r) > -1 : "|=" === n ? o === r || o.slice(0, r.length + 1) === r + "-" : !1) : !0
                            }
                        },
                        CHILD: function(e, t, n, r, i) {
                            var o = "nth" !== e.slice(0, 3),
                                a = "last" !== e.slice(-4),
                                s = "of-type" === t;
                            return 1 === r && 0 === i ? function(e) {
                                return !!e.parentNode
                            } : function(t, n, u) {
                                var c, l, f, p, d, h, g = o !== a ? "nextSibling" : "previousSibling",
                                    v = t.parentNode,
                                    m = s && t.nodeName.toLowerCase(),
                                    y = !u && !s;
                                if (v) {
                                    if (o) {
                                        for (; g;) {
                                            for (f = t; f = f[g];)
                                                if (s ? f.nodeName.toLowerCase() === m : 1 === f.nodeType) return !1;
                                            h = g = "only" === e && !h && "nextSibling"
                                        }
                                        return !0
                                    }
                                    if (h = [a ? v.firstChild : v.lastChild], a && y) {
                                        for (l = v[I] || (v[I] = {}), c = l[e] || [], d = c[0] === W && c[1], p = c[0] === W && c[2], f = d && v.childNodes[d]; f = ++d && f && f[g] || (p = d = 0) || h.pop();)
                                            if (1 === f.nodeType && ++p && f === t) {
                                                l[e] = [W, d, p];
                                                break
                                            }
                                    } else if (y && (c = (t[I] || (t[I] = {}))[e]) && c[0] === W) p = c[1];
                                    else
                                        for (;
                                            (f = ++d && f && f[g] || (p = d = 0) || h.pop()) && ((s ? f.nodeName.toLowerCase() !== m : 1 !== f.nodeType) || !++p || (y && ((f[I] || (f[I] = {}))[e] = [W, p]), f !== t)););
                                    return p -= i, p === r || p % r === 0 && p / r >= 0
                                }
                            }
                        },
                        PSEUDO: function(e, n) {
                            var i, o = T.pseudos[e] || T.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
                            return o[I] ? o(n) : o.length > 1 ? (i = [e, e, "", n], T.setFilters.hasOwnProperty(e.toLowerCase()) ? r(function(e, t) {
                                for (var r, i = o(e, n), a = i.length; a--;) r = ee(e, i[a]), e[r] = !(t[r] = i[a])
                            }) : function(e) {
                                return o(e, 0, i)
                            }) : o
                        }
                    },
                    pseudos: {
                        not: r(function(e) {
                            var t = [],
                                n = [],
                                i = E(e.replace(ue, "$1"));
                            return i[I] ? r(function(e, t, n, r) {
                                for (var o, a = i(e, null, r, []), s = e.length; s--;)(o = a[s]) && (e[s] = !(t[s] = o))
                            }) : function(e, r, o) {
                                return t[0] = e, i(t, null, o, n), t[0] = null, !n.pop()
                            }
                        }),
                        has: r(function(e) {
                            return function(n) {
                                return t(e, n).length > 0
                            }
                        }),
                        contains: r(function(e) {
                            return e = e.replace(we, Te),
                                function(t) {
                                    return (t.textContent || t.innerText || C(t)).indexOf(e) > -1
                                }
                        }),
                        lang: r(function(e) {
                            return de.test(e || "") || t.error("unsupported lang: " + e), e = e.replace(we, Te).toLowerCase(),
                                function(t) {
                                    var n;
                                    do
                                        if (n = M ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return n = n.toLowerCase(), n === e || 0 === n.indexOf(e + "-"); while ((t = t.parentNode) && 1 === t.nodeType);
                                    return !1
                                }
                        }),
                        target: function(t) {
                            var n = e.location && e.location.hash;
                            return n && n.slice(1) === t.id
                        },
                        root: function(e) {
                            return e === O
                        },
                        focus: function(e) {
                            return e === q.activeElement && (!q.hasFocus || q.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                        },
                        enabled: function(e) {
                            return e.disabled === !1
                        },
                        disabled: function(e) {
                            return e.disabled === !0
                        },
                        checked: function(e) {
                            var t = e.nodeName.toLowerCase();
                            return "input" === t && !!e.checked || "option" === t && !!e.selected
                        },
                        selected: function(e) {
                            return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
                        },
                        empty: function(e) {
                            for (e = e.firstChild; e; e = e.nextSibling)
                                if (e.nodeType < 6) return !1;
                            return !0
                        },
                        parent: function(e) {
                            return !T.pseudos.empty(e)
                        },
                        header: function(e) {
                            return ve.test(e.nodeName)
                        },
                        input: function(e) {
                            return ge.test(e.nodeName)
                        },
                        button: function(e) {
                            var t = e.nodeName.toLowerCase();
                            return "input" === t && "button" === e.type || "button" === t
                        },
                        text: function(e) {
                            var t;
                            return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                        },
                        first: c(function() {
                            return [0]
                        }),
                        last: c(function(e, t) {
                            return [t - 1]
                        }),
                        eq: c(function(e, t, n) {
                            return [0 > n ? n + t : n]
                        }),
                        even: c(function(e, t) {
                            for (var n = 0; t > n; n += 2) e.push(n);
                            return e
                        }),
                        odd: c(function(e, t) {
                            for (var n = 1; t > n; n += 2) e.push(n);
                            return e
                        }),
                        lt: c(function(e, t, n) {
                            for (var r = 0 > n ? n + t : n; --r >= 0;) e.push(r);
                            return e
                        }),
                        gt: c(function(e, t, n) {
                            for (var r = 0 > n ? n + t : n; ++r < t;) e.push(r);
                            return e
                        })
                    }
                }, T.pseudos.nth = T.pseudos.eq;
                for (b in {
                        radio: !0,
                        checkbox: !0,
                        file: !0,
                        password: !0,
                        image: !0
                    }) T.pseudos[b] = s(b);
                for (b in {
                        submit: !0,
                        reset: !0
                    }) T.pseudos[b] = u(b);
                return f.prototype = T.filters = T.pseudos, T.setFilters = new f, j = t.tokenize = function(e, n) {
                    var r, i, o, a, s, u, c, l = U[e + " "];
                    if (l) return n ? 0 : l.slice(0);
                    for (s = e, u = [], c = T.preFilter; s;) {
                        (!r || (i = ce.exec(s))) && (i && (s = s.slice(i[0].length) || s), u.push(o = [])), r = !1, (i = le.exec(s)) && (r = i.shift(), o.push({
                            value: r,
                            type: i[0].replace(ue, " ")
                        }), s = s.slice(r.length));
                        for (a in T.filter) !(i = he[a].exec(s)) || c[a] && !(i = c[a](i)) || (r = i.shift(), o.push({
                            value: r,
                            type: a,
                            matches: i
                        }), s = s.slice(r.length));
                        if (!r) break
                    }
                    return n ? s.length : s ? t.error(e) : U(e, u).slice(0)
                }, E = t.compile = function(e, t) {
                    var n, r = [],
                        i = [],
                        o = z[e + " "];
                    if (!o) {
                        for (t || (t = j(e)), n = t.length; n--;) o = y(t[n]), o[I] ? r.push(o) : i.push(o);
                        o = z(e, x(i, r)), o.selector = e
                    }
                    return o
                }, N = t.select = function(e, t, n, r) {
                    var i, o, a, s, u, c = "function" == typeof e && e,
                        f = !r && j(e = c.selector || e);
                    if (n = n || [], 1 === f.length) {
                        if (o = f[0] = f[0].slice(0), o.length > 2 && "ID" === (a = o[0]).type && w.getById && 9 === t.nodeType && M && T.relative[o[1].type]) {
                            if (t = (T.find.ID(a.matches[0].replace(we, Te), t) || [])[0], !t) return n;
                            c && (t = t.parentNode), e = e.slice(o.shift().value.length)
                        }
                        for (i = he.needsContext.test(e) ? 0 : o.length; i-- && (a = o[i], !T.relative[s = a.type]);)
                            if ((u = T.find[s]) && (r = u(a.matches[0].replace(we, Te), xe.test(o[0].type) && l(t.parentNode) || t))) {
                                if (o.splice(i, 1), e = r.length && p(o), !e) return Q.apply(n, r), n;
                                break
                            }
                    }
                    return (c || E(e, f))(r, t, !M, n, xe.test(e) && l(t.parentNode) || t), n
                }, w.sortStable = I.split("").sort(X).join("") === I, w.detectDuplicates = !!D, L(), w.sortDetached = i(function(e) {
                    return 1 & e.compareDocumentPosition(q.createElement("div"))
                }), i(function(e) {
                    return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
                }) || o("type|href|height|width", function(e, t, n) {
                    return n ? void 0 : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
                }), w.attributes && i(function(e) {
                    return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
                }) || o("value", function(e, t, n) {
                    return n || "input" !== e.nodeName.toLowerCase() ? void 0 : e.defaultValue
                }), i(function(e) {
                    return null == e.getAttribute("disabled")
                }) || o(te, function(e, t, n) {
                    var r;
                    return n ? void 0 : e[t] === !0 ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
                }), t
            }(e);
            Z.find = ie, Z.expr = ie.selectors, Z.expr[":"] = Z.expr.pseudos,
                Z.unique = ie.uniqueSort, Z.text = ie.getText, Z.isXMLDoc = ie.isXML, Z.contains = ie.contains;
            var oe = Z.expr.match.needsContext,
                ae = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
                se = /^.[^:#\[\.,]*$/;
            Z.filter = function(e, t, n) {
                var r = t[0];
                return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? Z.find.matchesSelector(r, e) ? [r] : [] : Z.find.matches(e, Z.grep(t, function(e) {
                    return 1 === e.nodeType
                }))
            }, Z.fn.extend({
                find: function(e) {
                    var t, n = this.length,
                        r = [],
                        i = this;
                    if ("string" != typeof e) return this.pushStack(Z(e).filter(function() {
                        for (t = 0; n > t; t++)
                            if (Z.contains(i[t], this)) return !0
                    }));
                    for (t = 0; n > t; t++) Z.find(e, i[t], r);
                    return r = this.pushStack(n > 1 ? Z.unique(r) : r), r.selector = this.selector ? this.selector + " " + e : e, r
                },
                filter: function(e) {
                    return this.pushStack(r(this, e || [], !1))
                },
                not: function(e) {
                    return this.pushStack(r(this, e || [], !0))
                },
                is: function(e) {
                    return !!r(this, "string" == typeof e && oe.test(e) ? Z(e) : e || [], !1).length
                }
            });
            var ue, ce = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
                le = Z.fn.init = function(e, t) {
                    var n, r;
                    if (!e) return this;
                    if ("string" == typeof e) {
                        if (n = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : ce.exec(e), !n || !n[1] && t) return !t || t.jquery ? (t || ue).find(e) : this.constructor(t).find(e);
                        if (n[1]) {
                            if (t = t instanceof Z ? t[0] : t, Z.merge(this, Z.parseHTML(n[1], t && t.nodeType ? t.ownerDocument || t : G, !0)), ae.test(n[1]) && Z.isPlainObject(t))
                                for (n in t) Z.isFunction(this[n]) ? this[n](t[n]) : this.attr(n, t[n]);
                            return this
                        }
                        return r = G.getElementById(n[2]), r && r.parentNode && (this.length = 1, this[0] = r), this.context = G, this.selector = e, this
                    }
                    return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : Z.isFunction(e) ? "undefined" != typeof ue.ready ? ue.ready(e) : e(Z) : (void 0 !== e.selector && (this.selector = e.selector, this.context = e.context), Z.makeArray(e, this))
                };
            le.prototype = Z.fn, ue = Z(G);
            var fe = /^(?:parents|prev(?:Until|All))/,
                pe = {
                    children: !0,
                    contents: !0,
                    next: !0,
                    prev: !0
                };
            Z.extend({
                dir: function(e, t, n) {
                    for (var r = [], i = void 0 !== n;
                        (e = e[t]) && 9 !== e.nodeType;)
                        if (1 === e.nodeType) {
                            if (i && Z(e).is(n)) break;
                            r.push(e)
                        } return r
                },
                sibling: function(e, t) {
                    for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
                    return n
                }
            }), Z.fn.extend({
                has: function(e) {
                    var t = Z(e, this),
                        n = t.length;
                    return this.filter(function() {
                        for (var e = 0; n > e; e++)
                            if (Z.contains(this, t[e])) return !0
                    })
                },
                closest: function(e, t) {
                    for (var n, r = 0, i = this.length, o = [], a = oe.test(e) || "string" != typeof e ? Z(e, t || this.context) : 0; i > r; r++)
                        for (n = this[r]; n && n !== t; n = n.parentNode)
                            if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && Z.find.matchesSelector(n, e))) {
                                o.push(n);
                                break
                            } return this.pushStack(o.length > 1 ? Z.unique(o) : o)
                },
                index: function(e) {
                    return e ? "string" == typeof e ? X.call(Z(e), this[0]) : X.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
                },
                add: function(e, t) {
                    return this.pushStack(Z.unique(Z.merge(this.get(), Z(e, t))))
                },
                addBack: function(e) {
                    return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
                }
            }), Z.each({
                parent: function(e) {
                    var t = e.parentNode;
                    return t && 11 !== t.nodeType ? t : null
                },
                parents: function(e) {
                    return Z.dir(e, "parentNode")
                },
                parentsUntil: function(e, t, n) {
                    return Z.dir(e, "parentNode", n)
                },
                next: function(e) {
                    return i(e, "nextSibling")
                },
                prev: function(e) {
                    return i(e, "previousSibling")
                },
                nextAll: function(e) {
                    return Z.dir(e, "nextSibling")
                },
                prevAll: function(e) {
                    return Z.dir(e, "previousSibling")
                },
                nextUntil: function(e, t, n) {
                    return Z.dir(e, "nextSibling", n)
                },
                prevUntil: function(e, t, n) {
                    return Z.dir(e, "previousSibling", n)
                },
                siblings: function(e) {
                    return Z.sibling((e.parentNode || {}).firstChild, e)
                },
                children: function(e) {
                    return Z.sibling(e.firstChild)
                },
                contents: function(e) {
                    return e.contentDocument || Z.merge([], e.childNodes)
                }
            }, function(e, t) {
                Z.fn[e] = function(n, r) {
                    var i = Z.map(this, t, n);
                    return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (i = Z.filter(r, i)), this.length > 1 && (pe[e] || Z.unique(i), fe.test(e) && i.reverse()), this.pushStack(i)
                }
            });
            var de = /\S+/g,
                he = {};
            Z.Callbacks = function(e) {
                e = "string" == typeof e ? he[e] || o(e) : Z.extend({}, e);
                var t, n, r, i, a, s, u = [],
                    c = !e.once && [],
                    l = function(o) {
                        for (t = e.memory && o, n = !0, s = i || 0, i = 0, a = u.length, r = !0; u && a > s; s++)
                            if (u[s].apply(o[0], o[1]) === !1 && e.stopOnFalse) {
                                t = !1;
                                break
                            } r = !1, u && (c ? c.length && l(c.shift()) : t ? u = [] : f.disable())
                    },
                    f = {
                        add: function() {
                            if (u) {
                                var n = u.length;
                                ! function o(t) {
                                    Z.each(t, function(t, n) {
                                        var r = Z.type(n);
                                        "function" === r ? e.unique && f.has(n) || u.push(n) : n && n.length && "string" !== r && o(n)
                                    })
                                }(arguments), r ? a = u.length : t && (i = n, l(t))
                            }
                            return this
                        },
                        remove: function() {
                            return u && Z.each(arguments, function(e, t) {
                                for (var n;
                                    (n = Z.inArray(t, u, n)) > -1;) u.splice(n, 1), r && (a >= n && a--, s >= n && s--)
                            }), this
                        },
                        has: function(e) {
                            return e ? Z.inArray(e, u) > -1 : !(!u || !u.length)
                        },
                        empty: function() {
                            return u = [], a = 0, this
                        },
                        disable: function() {
                            return u = c = t = void 0, this
                        },
                        disabled: function() {
                            return !u
                        },
                        lock: function() {
                            return c = void 0, t || f.disable(), this
                        },
                        locked: function() {
                            return !c
                        },
                        fireWith: function(e, t) {
                            return !u || n && !c || (t = t || [], t = [e, t.slice ? t.slice() : t], r ? c.push(t) : l(t)), this
                        },
                        fire: function() {
                            return f.fireWith(this, arguments), this
                        },
                        fired: function() {
                            return !!n
                        }
                    };
                return f
            }, Z.extend({
                Deferred: function(e) {
                    var t = [
                            ["resolve", "done", Z.Callbacks("once memory"), "resolved"],
                            ["reject", "fail", Z.Callbacks("once memory"), "rejected"],
                            ["notify", "progress", Z.Callbacks("memory")]
                        ],
                        n = "pending",
                        r = {
                            state: function() {
                                return n
                            },
                            always: function() {
                                return i.done(arguments).fail(arguments), this
                            },
                            then: function() {
                                var e = arguments;
                                return Z.Deferred(function(n) {
                                    Z.each(t, function(t, o) {
                                        var a = Z.isFunction(e[t]) && e[t];
                                        i[o[1]](function() {
                                            var e = a && a.apply(this, arguments);
                                            e && Z.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[o[0] + "With"](this === r ? n.promise() : this, a ? [e] : arguments)
                                        })
                                    }), e = null
                                }).promise()
                            },
                            promise: function(e) {
                                return null != e ? Z.extend(e, r) : r
                            }
                        },
                        i = {};
                    return r.pipe = r.then, Z.each(t, function(e, o) {
                        var a = o[2],
                            s = o[3];
                        r[o[1]] = a.add, s && a.add(function() {
                            n = s
                        }, t[1 ^ e][2].disable, t[2][2].lock), i[o[0]] = function() {
                            return i[o[0] + "With"](this === i ? r : this, arguments), this
                        }, i[o[0] + "With"] = a.fireWith
                    }), r.promise(i), e && e.call(i, i), i
                },
                when: function(e) {
                    var t, n, r, i = 0,
                        o = $.call(arguments),
                        a = o.length,
                        s = 1 !== a || e && Z.isFunction(e.promise) ? a : 0,
                        u = 1 === s ? e : Z.Deferred(),
                        c = function(e, n, r) {
                            return function(i) {
                                n[e] = this, r[e] = arguments.length > 1 ? $.call(arguments) : i, r === t ? u.notifyWith(n, r) : --s || u.resolveWith(n, r)
                            }
                        };
                    if (a > 1)
                        for (t = new Array(a), n = new Array(a), r = new Array(a); a > i; i++) o[i] && Z.isFunction(o[i].promise) ? o[i].promise().done(c(i, r, o)).fail(u.reject).progress(c(i, n, t)) : --s;
                    return s || u.resolveWith(r, o), u.promise()
                }
            });
            var ge;
            Z.fn.ready = function(e) {
                return Z.ready.promise().done(e), this
            }, Z.extend({
                isReady: !1,
                readyWait: 1,
                holdReady: function(e) {
                    e ? Z.readyWait++ : Z.ready(!0)
                },
                ready: function(e) {
                    (e === !0 ? --Z.readyWait : Z.isReady) || (Z.isReady = !0, e !== !0 && --Z.readyWait > 0 || (ge.resolveWith(G, [Z]), Z.fn.triggerHandler && (Z(G).triggerHandler("ready"), Z(G).off("ready"))))
                }
            }), Z.ready.promise = function(t) {
                return ge || (ge = Z.Deferred(), "complete" === G.readyState ? setTimeout(Z.ready) : (G.addEventListener("DOMContentLoaded", a, !1), e.addEventListener("load", a, !1))), ge.promise(t)
            }, Z.ready.promise();
            var ve = Z.access = function(e, t, n, r, i, o, a) {
                var s = 0,
                    u = e.length,
                    c = null == n;
                if ("object" === Z.type(n)) {
                    i = !0;
                    for (s in n) Z.access(e, t, s, n[s], !0, o, a)
                } else if (void 0 !== r && (i = !0, Z.isFunction(r) || (a = !0), c && (a ? (t.call(e, r), t = null) : (c = t, t = function(e, t, n) {
                        return c.call(Z(e), n)
                    })), t))
                    for (; u > s; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
                return i ? e : c ? t.call(e) : u ? t(e[0], n) : o
            };
            Z.acceptData = function(e) {
                return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
            }, s.uid = 1, s.accepts = Z.acceptData, s.prototype = {
                key: function(e) {
                    if (!s.accepts(e)) return 0;
                    var t = {},
                        n = e[this.expando];
                    if (!n) {
                        n = s.uid++;
                        try {
                            t[this.expando] = {
                                value: n
                            }, Object.defineProperties(e, t)
                        } catch (r) {
                            t[this.expando] = n, Z.extend(e, t)
                        }
                    }
                    return this.cache[n] || (this.cache[n] = {}), n
                },
                set: function(e, t, n) {
                    var r, i = this.key(e),
                        o = this.cache[i];
                    if ("string" == typeof t) o[t] = n;
                    else if (Z.isEmptyObject(o)) Z.extend(this.cache[i], t);
                    else
                        for (r in t) o[r] = t[r];
                    return o
                },
                get: function(e, t) {
                    var n = this.cache[this.key(e)];
                    return void 0 === t ? n : n[t]
                },
                access: function(e, t, n) {
                    var r;
                    return void 0 === t || t && "string" == typeof t && void 0 === n ? (r = this.get(e, t), void 0 !== r ? r : this.get(e, Z.camelCase(t))) : (this.set(e, t, n), void 0 !== n ? n : t)
                },
                remove: function(e, t) {
                    var n, r, i, o = this.key(e),
                        a = this.cache[o];
                    if (void 0 === t) this.cache[o] = {};
                    else {
                        Z.isArray(t) ? r = t.concat(t.map(Z.camelCase)) : (i = Z.camelCase(t), t in a ? r = [t, i] : (r = i, r = r in a ? [r] : r.match(de) || [])), n = r.length;
                        for (; n--;) delete a[r[n]]
                    }
                },
                hasData: function(e) {
                    return !Z.isEmptyObject(this.cache[e[this.expando]] || {})
                },
                discard: function(e) {
                    e[this.expando] && delete this.cache[e[this.expando]]
                }
            };
            var me = new s,
                ye = new s,
                xe = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
                be = /([A-Z])/g;
            Z.extend({
                hasData: function(e) {
                    return ye.hasData(e) || me.hasData(e)
                },
                data: function(e, t, n) {
                    return ye.access(e, t, n)
                },
                removeData: function(e, t) {
                    ye.remove(e, t)
                },
                _data: function(e, t, n) {
                    return me.access(e, t, n)
                },
                _removeData: function(e, t) {
                    me.remove(e, t)
                }
            }), Z.fn.extend({
                data: function(e, t) {
                    var n, r, i, o = this[0],
                        a = o && o.attributes;
                    if (void 0 === e) {
                        if (this.length && (i = ye.get(o), 1 === o.nodeType && !me.get(o, "hasDataAttrs"))) {
                            for (n = a.length; n--;) a[n] && (r = a[n].name, 0 === r.indexOf("data-") && (r = Z.camelCase(r.slice(5)), u(o, r, i[r])));
                            me.set(o, "hasDataAttrs", !0)
                        }
                        return i
                    }
                    return "object" == typeof e ? this.each(function() {
                        ye.set(this, e)
                    }) : ve(this, function(t) {
                        var n, r = Z.camelCase(e);
                        if (o && void 0 === t) {
                            if (n = ye.get(o, e), void 0 !== n) return n;
                            if (n = ye.get(o, r), void 0 !== n) return n;
                            if (n = u(o, r, void 0), void 0 !== n) return n
                        } else this.each(function() {
                            var n = ye.get(this, r);
                            ye.set(this, r, t), -1 !== e.indexOf("-") && void 0 !== n && ye.set(this, e, t)
                        })
                    }, null, t, arguments.length > 1, null, !0)
                },
                removeData: function(e) {
                    return this.each(function() {
                        ye.remove(this, e)
                    })
                }
            }), Z.extend({
                queue: function(e, t, n) {
                    var r;
                    return e ? (t = (t || "fx") + "queue", r = me.get(e, t), n && (!r || Z.isArray(n) ? r = me.access(e, t, Z.makeArray(n)) : r.push(n)), r || []) : void 0
                },
                dequeue: function(e, t) {
                    t = t || "fx";
                    var n = Z.queue(e, t),
                        r = n.length,
                        i = n.shift(),
                        o = Z._queueHooks(e, t),
                        a = function() {
                            Z.dequeue(e, t)
                        };
                    "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, a, o)), !r && o && o.empty.fire()
                },
                _queueHooks: function(e, t) {
                    var n = t + "queueHooks";
                    return me.get(e, n) || me.access(e, n, {
                        empty: Z.Callbacks("once memory").add(function() {
                            me.remove(e, [t + "queue", n])
                        })
                    })
                }
            }), Z.fn.extend({
                queue: function(e, t) {
                    var n = 2;
                    return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? Z.queue(this[0], e) : void 0 === t ? this : this.each(function() {
                        var n = Z.queue(this, e, t);
                        Z._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && Z.dequeue(this, e)
                    })
                },
                dequeue: function(e) {
                    return this.each(function() {
                        Z.dequeue(this, e)
                    })
                },
                clearQueue: function(e) {
                    return this.queue(e || "fx", [])
                },
                promise: function(e, t) {
                    var n, r = 1,
                        i = Z.Deferred(),
                        o = this,
                        a = this.length,
                        s = function() {
                            --r || i.resolveWith(o, [o])
                        };
                    for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; a--;) n = me.get(o[a], e + "queueHooks"), n && n.empty && (r++, n.empty.add(s));
                    return s(), i.promise(t)
                }
            });
            var we = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
                Te = ["Top", "Right", "Bottom", "Left"],
                Ce = function(e, t) {
                    return e = t || e, "none" === Z.css(e, "display") || !Z.contains(e.ownerDocument, e)
                },
                ke = /^(?:checkbox|radio)$/i;
            ! function() {
                var e = G.createDocumentFragment(),
                    t = e.appendChild(G.createElement("div")),
                    n = G.createElement("input");
                n.setAttribute("type", "radio"), n.setAttribute("checked", "checked"), n.setAttribute("name", "t"), t.appendChild(n), J.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, t.innerHTML = "<textarea>x</textarea>", J.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue
            }();
            var je = "undefined";
            J.focusinBubbles = "onfocusin" in e;
            var Ee = /^key/,
                Ne = /^(?:mouse|pointer|contextmenu)|click/,
                Ae = /^(?:focusinfocus|focusoutblur)$/,
                Se = /^([^.]*)(?:\.(.+)|)$/;
            Z.event = {
                global: {},
                add: function(e, t, n, r, i) {
                    var o, a, s, u, c, l, f, p, d, h, g, v = me.get(e);
                    if (v)
                        for (n.handler && (o = n, n = o.handler, i = o.selector), n.guid || (n.guid = Z.guid++), (u = v.events) || (u = v.events = {}), (a = v.handle) || (a = v.handle = function(t) {
                                return typeof Z !== je && Z.event.triggered !== t.type ? Z.event.dispatch.apply(e, arguments) : void 0
                            }), t = (t || "").match(de) || [""], c = t.length; c--;) s = Se.exec(t[c]) || [], d = g = s[1], h = (s[2] || "").split(".").sort(), d && (f = Z.event.special[d] || {}, d = (i ? f.delegateType : f.bindType) || d, f = Z.event.special[d] || {}, l = Z.extend({
                            type: d,
                            origType: g,
                            data: r,
                            handler: n,
                            guid: n.guid,
                            selector: i,
                            needsContext: i && Z.expr.match.needsContext.test(i),
                            namespace: h.join(".")
                        }, o), (p = u[d]) || (p = u[d] = [], p.delegateCount = 0, f.setup && f.setup.call(e, r, h, a) !== !1 || e.addEventListener && e.addEventListener(d, a, !1)), f.add && (f.add.call(e, l), l.handler.guid || (l.handler.guid = n.guid)), i ? p.splice(p.delegateCount++, 0, l) : p.push(l), Z.event.global[d] = !0)
                },
                remove: function(e, t, n, r, i) {
                    var o, a, s, u, c, l, f, p, d, h, g, v = me.hasData(e) && me.get(e);
                    if (v && (u = v.events)) {
                        for (t = (t || "").match(de) || [""], c = t.length; c--;)
                            if (s = Se.exec(t[c]) || [], d = g = s[1], h = (s[2] || "").split(".").sort(), d) {
                                for (f = Z.event.special[d] || {}, d = (r ? f.delegateType : f.bindType) || d, p = u[d] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = p.length; o--;) l = p[o], !i && g !== l.origType || n && n.guid !== l.guid || s && !s.test(l.namespace) || r && r !== l.selector && ("**" !== r || !l.selector) || (p.splice(o, 1), l.selector && p.delegateCount--, f.remove && f.remove.call(e, l));
                                a && !p.length && (f.teardown && f.teardown.call(e, h, v.handle) !== !1 || Z.removeEvent(e, d, v.handle), delete u[d])
                            } else
                                for (d in u) Z.event.remove(e, d + t[c], n, r, !0);
                        Z.isEmptyObject(u) && (delete v.handle, me.remove(e, "events"))
                    }
                },
                trigger: function(t, n, r, i) {
                    var o, a, s, u, c, l, f, p = [r || G],
                        d = Y.call(t, "type") ? t.type : t,
                        h = Y.call(t, "namespace") ? t.namespace.split(".") : [];
                    if (a = s = r = r || G, 3 !== r.nodeType && 8 !== r.nodeType && !Ae.test(d + Z.event.triggered) && (d.indexOf(".") >= 0 && (h = d.split("."), d = h.shift(), h.sort()), c = d.indexOf(":") < 0 && "on" + d, t = t[Z.expando] ? t : new Z.Event(d, "object" == typeof t && t), t.isTrigger = i ? 2 : 3, t.namespace = h.join("."), t.namespace_re = t.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = r), n = null == n ? [t] : Z.makeArray(n, [t]), f = Z.event.special[d] || {}, i || !f.trigger || f.trigger.apply(r, n) !== !1)) {
                        if (!i && !f.noBubble && !Z.isWindow(r)) {
                            for (u = f.delegateType || d, Ae.test(u + d) || (a = a.parentNode); a; a = a.parentNode) p.push(a), s = a;
                            s === (r.ownerDocument || G) && p.push(s.defaultView || s.parentWindow || e)
                        }
                        for (o = 0;
                            (a = p[o++]) && !t.isPropagationStopped();) t.type = o > 1 ? u : f.bindType || d, l = (me.get(a, "events") || {})[t.type] && me.get(a, "handle"), l && l.apply(a, n), l = c && a[c], l && l.apply && Z.acceptData(a) && (t.result = l.apply(a, n), t.result === !1 && t.preventDefault());
                        return t.type = d, i || t.isDefaultPrevented() || f._default && f._default.apply(p.pop(), n) !== !1 || !Z.acceptData(r) || c && Z.isFunction(r[d]) && !Z.isWindow(r) && (s = r[c], s && (r[c] = null), Z.event.triggered = d, r[d](), Z.event.triggered = void 0, s && (r[c] = s)), t.result
                    }
                },
                dispatch: function(e) {
                    e = Z.event.fix(e);
                    var t, n, r, i, o, a = [],
                        s = $.call(arguments),
                        u = (me.get(this, "events") || {})[e.type] || [],
                        c = Z.event.special[e.type] || {};
                    if (s[0] = e, e.delegateTarget = this, !c.preDispatch || c.preDispatch.call(this, e) !== !1) {
                        for (a = Z.event.handlers.call(this, e, u), t = 0;
                            (i = a[t++]) && !e.isPropagationStopped();)
                            for (e.currentTarget = i.elem, n = 0;
                                (o = i.handlers[n++]) && !e.isImmediatePropagationStopped();)(!e.namespace_re || e.namespace_re.test(o.namespace)) && (e.handleObj = o, e.data = o.data, r = ((Z.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, s), void 0 !== r && (e.result = r) === !1 && (e.preventDefault(), e.stopPropagation()));
                        return c.postDispatch && c.postDispatch.call(this, e), e.result
                    }
                },
                handlers: function(e, t) {
                    var n, r, i, o, a = [],
                        s = t.delegateCount,
                        u = e.target;
                    if (s && u.nodeType && (!e.button || "click" !== e.type))
                        for (; u !== this; u = u.parentNode || this)
                            if (u.disabled !== !0 || "click" !== e.type) {
                                for (r = [], n = 0; s > n; n++) o = t[n], i = o.selector + " ", void 0 === r[i] && (r[i] = o.needsContext ? Z(i, this).index(u) >= 0 : Z.find(i, this, null, [u]).length), r[i] && r.push(o);
                                r.length && a.push({
                                    elem: u,
                                    handlers: r
                                })
                            } return s < t.length && a.push({
                        elem: this,
                        handlers: t.slice(s)
                    }), a
                },
                props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
                fixHooks: {},
                keyHooks: {
                    props: "char charCode key keyCode".split(" "),
                    filter: function(e, t) {
                        return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
                    }
                },
                mouseHooks: {
                    props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
                    filter: function(e, t) {
                        var n, r, i, o = t.button;
                        return null == e.pageX && null != t.clientX && (n = e.target.ownerDocument || G, r = n.documentElement, i = n.body, e.pageX = t.clientX + (r && r.scrollLeft || i && i.scrollLeft || 0) - (r && r.clientLeft || i && i.clientLeft || 0), e.pageY = t.clientY + (r && r.scrollTop || i && i.scrollTop || 0) - (r && r.clientTop || i && i.clientTop || 0)), e.which || void 0 === o || (e.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0), e
                    }
                },
                fix: function(e) {
                    if (e[Z.expando]) return e;
                    var t, n, r, i = e.type,
                        o = e,
                        a = this.fixHooks[i];
                    for (a || (this.fixHooks[i] = a = Ne.test(i) ? this.mouseHooks : Ee.test(i) ? this.keyHooks : {}), r = a.props ? this.props.concat(a.props) : this.props, e = new Z.Event(o), t = r.length; t--;) n = r[t], e[n] = o[n];
                    return e.target || (e.target = G), 3 === e.target.nodeType && (e.target = e.target.parentNode), a.filter ? a.filter(e, o) : e
                },
                special: {
                    load: {
                        noBubble: !0
                    },
                    focus: {
                        trigger: function() {
                            return this !== f() && this.focus ? (this.focus(), !1) : void 0
                        },
                        delegateType: "focusin"
                    },
                    blur: {
                        trigger: function() {
                            return this === f() && this.blur ? (this.blur(), !1) : void 0
                        },
                        delegateType: "focusout"
                    },
                    click: {
                        trigger: function() {
                            return "checkbox" === this.type && this.click && Z.nodeName(this, "input") ? (this.click(), !1) : void 0
                        },
                        _default: function(e) {
                            return Z.nodeName(e.target, "a")
                        }
                    },
                    beforeunload: {
                        postDispatch: function(e) {
                            void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                        }
                    }
                },
                simulate: function(e, t, n, r) {
                    var i = Z.extend(new Z.Event, n, {
                        type: e,
                        isSimulated: !0,
                        originalEvent: {}
                    });
                    r ? Z.event.trigger(i, null, t) : Z.event.dispatch.call(t, i), i.isDefaultPrevented() && n.preventDefault()
                }
            }, Z.removeEvent = function(e, t, n) {
                e.removeEventListener && e.removeEventListener(t, n, !1)
            }, Z.Event = function(e, t) {
                return this instanceof Z.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && e.returnValue === !1 ? c : l) : this.type = e, t && Z.extend(this, t), this.timeStamp = e && e.timeStamp || Z.now(), void(this[Z.expando] = !0)) : new Z.Event(e, t)
            }, Z.Event.prototype = {
                isDefaultPrevented: l,
                isPropagationStopped: l,
                isImmediatePropagationStopped: l,
                preventDefault: function() {
                    var e = this.originalEvent;
                    this.isDefaultPrevented = c, e && e.preventDefault && e.preventDefault()
                },
                stopPropagation: function() {
                    var e = this.originalEvent;
                    this.isPropagationStopped = c, e && e.stopPropagation && e.stopPropagation()
                },
                stopImmediatePropagation: function() {
                    var e = this.originalEvent;
                    this.isImmediatePropagationStopped = c, e && e.stopImmediatePropagation && e.stopImmediatePropagation(), this.stopPropagation()
                }
            }, Z.each({
                mouseenter: "mouseover",
                mouseleave: "mouseout",
                pointerenter: "pointerover",
                pointerleave: "pointerout"
            }, function(e, t) {
                Z.event.special[e] = {
                    delegateType: t,
                    bindType: t,
                    handle: function(e) {
                        var n, r = this,
                            i = e.relatedTarget,
                            o = e.handleObj;
                        return (!i || i !== r && !Z.contains(r, i)) && (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n
                    }
                }
            }), J.focusinBubbles || Z.each({
                focus: "focusin",
                blur: "focusout"
            }, function(e, t) {
                var n = function(e) {
                    Z.event.simulate(t, e.target, Z.event.fix(e), !0)
                };
                Z.event.special[t] = {
                    setup: function() {
                        var r = this.ownerDocument || this,
                            i = me.access(r, t);
                        i || r.addEventListener(e, n, !0), me.access(r, t, (i || 0) + 1)
                    },
                    teardown: function() {
                        var r = this.ownerDocument || this,
                            i = me.access(r, t) - 1;
                        i ? me.access(r, t, i) : (r.removeEventListener(e, n, !0), me.remove(r, t))
                    }
                }
            }), Z.fn.extend({
                on: function(e, t, n, r, i) {
                    var o, a;
                    if ("object" == typeof e) {
                        "string" != typeof t && (n = n || t, t = void 0);
                        for (a in e) this.on(a, t, n, e[a], i);
                        return this
                    }
                    if (null == n && null == r ? (r = t, n = t = void 0) : null == r && ("string" == typeof t ? (r = n, n = void 0) : (r = n, n = t, t = void 0)), r === !1) r = l;
                    else if (!r) return this;
                    return 1 === i && (o = r, r = function(e) {
                        return Z().off(e), o.apply(this, arguments)
                    }, r.guid = o.guid || (o.guid = Z.guid++)), this.each(function() {
                        Z.event.add(this, e, r, n, t)
                    })
                },
                one: function(e, t, n, r) {
                    return this.on(e, t, n, r, 1)
                },
                off: function(e, t, n) {
                    var r, i;
                    if (e && e.preventDefault && e.handleObj) return r = e.handleObj, Z(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
                    if ("object" == typeof e) {
                        for (i in e) this.off(i, t, e[i]);
                        return this
                    }
                    return (t === !1 || "function" == typeof t) && (n = t, t = void 0), n === !1 && (n = l), this.each(function() {
                        Z.event.remove(this, e, n, t)
                    })
                },
                trigger: function(e, t) {
                    return this.each(function() {
                        Z.event.trigger(e, t, this)
                    })
                },
                triggerHandler: function(e, t) {
                    var n = this[0];
                    return n ? Z.event.trigger(e, t, n, !0) : void 0
                }
            });
            var De = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
                Le = /<([\w:]+)/,
                qe = /<|&#?\w+;/,
                Oe = /<(?:script|style|link)/i,
                Me = /checked\s*(?:[^=]|=\s*.checked.)/i,
                Fe = /^$|\/(?:java|ecma)script/i,
                _e = /^true\/(.*)/,
                He = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
                Re = {
                    option: [1, "<select multiple='multiple'>", "</select>"],
                    thead: [1, "<table>", "</table>"],
                    col: [2, "<table><colgroup>", "</colgroup></table>"],
                    tr: [2, "<table><tbody>", "</tbody></table>"],
                    td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                    _default: [0, "", ""]
                };
            Re.optgroup = Re.option, Re.tbody = Re.tfoot = Re.colgroup = Re.caption = Re.thead, Re.th = Re.td, Z.extend({
                clone: function(e, t, n) {
                    var r, i, o, a, s = e.cloneNode(!0),
                        u = Z.contains(e.ownerDocument, e);
                    if (!(J.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || Z.isXMLDoc(e)))
                        for (a = m(s), o = m(e), r = 0, i = o.length; i > r; r++) y(o[r], a[r]);
                    if (t)
                        if (n)
                            for (o = o || m(e), a = a || m(s), r = 0, i = o.length; i > r; r++) v(o[r], a[r]);
                        else v(e, s);
                    return a = m(s, "script"), a.length > 0 && g(a, !u && m(e, "script")), s
                },
                buildFragment: function(e, t, n, r) {
                    for (var i, o, a, s, u, c, l = t.createDocumentFragment(), f = [], p = 0, d = e.length; d > p; p++)
                        if (i = e[p], i || 0 === i)
                            if ("object" === Z.type(i)) Z.merge(f, i.nodeType ? [i] : i);
                            else if (qe.test(i)) {
                        for (o = o || l.appendChild(t.createElement("div")), a = (Le.exec(i) || ["", ""])[1].toLowerCase(), s = Re[a] || Re._default, o.innerHTML = s[1] + i.replace(De, "<$1></$2>") + s[2], c = s[0]; c--;) o = o.lastChild;
                        Z.merge(f, o.childNodes), o = l.firstChild, o.textContent = ""
                    } else f.push(t.createTextNode(i));
                    for (l.textContent = "", p = 0; i = f[p++];)
                        if ((!r || -1 === Z.inArray(i, r)) && (u = Z.contains(i.ownerDocument, i), o = m(l.appendChild(i), "script"), u && g(o), n))
                            for (c = 0; i = o[c++];) Fe.test(i.type || "") && n.push(i);
                    return l
                },
                cleanData: function(e) {
                    for (var t, n, r, i, o = Z.event.special, a = 0; void 0 !== (n = e[a]); a++) {
                        if (Z.acceptData(n) && (i = n[me.expando], i && (t = me.cache[i]))) {
                            if (t.events)
                                for (r in t.events) o[r] ? Z.event.remove(n, r) : Z.removeEvent(n, r, t.handle);
                            me.cache[i] && delete me.cache[i]
                        }
                        delete ye.cache[n[ye.expando]]
                    }
                }
            }), Z.fn.extend({
                text: function(e) {
                    return ve(this, function(e) {
                        return void 0 === e ? Z.text(this) : this.empty().each(function() {
                            (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && (this.textContent = e)
                        })
                    }, null, e, arguments.length)
                },
                append: function() {
                    return this.domManip(arguments, function(e) {
                        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                            var t = p(this, e);
                            t.appendChild(e)
                        }
                    })
                },
                prepend: function() {
                    return this.domManip(arguments, function(e) {
                        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                            var t = p(this, e);
                            t.insertBefore(e, t.firstChild)
                        }
                    })
                },
                before: function() {
                    return this.domManip(arguments, function(e) {
                        this.parentNode && this.parentNode.insertBefore(e, this)
                    })
                },
                after: function() {
                    return this.domManip(arguments, function(e) {
                        this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
                    })
                },
                remove: function(e, t) {
                    for (var n, r = e ? Z.filter(e, this) : this, i = 0; null != (n = r[i]); i++) t || 1 !== n.nodeType || Z.cleanData(m(n)), n.parentNode && (t && Z.contains(n.ownerDocument, n) && g(m(n, "script")), n.parentNode.removeChild(n));
                    return this
                },
                empty: function() {
                    for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (Z.cleanData(m(e, !1)), e.textContent = "");
                    return this
                },
                clone: function(e, t) {
                    return e = null == e ? !1 : e, t = null == t ? e : t, this.map(function() {
                        return Z.clone(this, e, t)
                    })
                },
                html: function(e) {
                    return ve(this, function(e) {
                        var t = this[0] || {},
                            n = 0,
                            r = this.length;
                        if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                        if ("string" == typeof e && !Oe.test(e) && !Re[(Le.exec(e) || ["", ""])[1].toLowerCase()]) {
                            e = e.replace(De, "<$1></$2>");
                            try {
                                for (; r > n; n++) t = this[n] || {}, 1 === t.nodeType && (Z.cleanData(m(t, !1)), t.innerHTML = e);
                                t = 0
                            } catch (i) {}
                        }
                        t && this.empty().append(e)
                    }, null, e, arguments.length)
                },
                replaceWith: function() {
                    var e = arguments[0];
                    return this.domManip(arguments, function(t) {
                        e = this.parentNode, Z.cleanData(m(this)), e && e.replaceChild(t, this)
                    }), e && (e.length || e.nodeType) ? this : this.remove()
                },
                detach: function(e) {
                    return this.remove(e, !0)
                },
                domManip: function(e, t) {
                    e = U.apply([], e);
                    var n, r, i, o, a, s, u = 0,
                        c = this.length,
                        l = this,
                        f = c - 1,
                        p = e[0],
                        g = Z.isFunction(p);
                    if (g || c > 1 && "string" == typeof p && !J.checkClone && Me.test(p)) return this.each(function(n) {
                        var r = l.eq(n);
                        g && (e[0] = p.call(this, n, r.html())), r.domManip(e, t)
                    });
                    if (c && (n = Z.buildFragment(e, this[0].ownerDocument, !1, this), r = n.firstChild, 1 === n.childNodes.length && (n = r), r)) {
                        for (i = Z.map(m(n, "script"), d), o = i.length; c > u; u++) a = n, u !== f && (a = Z.clone(a, !0, !0), o && Z.merge(i, m(a, "script"))), t.call(this[u], a, u);
                        if (o)
                            for (s = i[i.length - 1].ownerDocument, Z.map(i, h), u = 0; o > u; u++) a = i[u], Fe.test(a.type || "") && !me.access(a, "globalEval") && Z.contains(s, a) && (a.src ? Z._evalUrl && Z._evalUrl(a.src) : Z.globalEval(a.textContent.replace(He, "")))
                    }
                    return this
                }
            }), Z.each({
                appendTo: "append",
                prependTo: "prepend",
                insertBefore: "before",
                insertAfter: "after",
                replaceAll: "replaceWith"
            }, function(e, t) {
                Z.fn[e] = function(e) {
                    for (var n, r = [], i = Z(e), o = i.length - 1, a = 0; o >= a; a++) n = a === o ? this : this.clone(!0), Z(i[a])[t](n), z.apply(r, n.get());
                    return this.pushStack(r)
                }
            });
            var Ie, Pe = {},
                We = /^margin/,
                Be = new RegExp("^(" + we + ")(?!px)[a-z%]+$", "i"),
                $e = function(t) {
                    return t.ownerDocument.defaultView.opener ? t.ownerDocument.defaultView.getComputedStyle(t, null) : e.getComputedStyle(t, null)
                };
            ! function() {
                function t() {
                    a.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", a.innerHTML = "", i.appendChild(o);
                    var t = e.getComputedStyle(a, null);
                    n = "1%" !== t.top, r = "4px" === t.width, i.removeChild(o)
                }
                var n, r, i = G.documentElement,
                    o = G.createElement("div"),
                    a = G.createElement("div");
                a.style && (a.style.backgroundClip = "content-box", a.cloneNode(!0).style.backgroundClip = "", J.clearCloneStyle = "content-box" === a.style.backgroundClip, o.style.cssText = "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute", o.appendChild(a), e.getComputedStyle && Z.extend(J, {
                    pixelPosition: function() {
                        return t(), n
                    },
                    boxSizingReliable: function() {
                        return null == r && t(), r
                    },
                    reliableMarginRight: function() {
                        var t, n = a.appendChild(G.createElement("div"));
                        return n.style.cssText = a.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", n.style.marginRight = n.style.width = "0", a.style.width = "1px", i.appendChild(o), t = !parseFloat(e.getComputedStyle(n, null).marginRight), i.removeChild(o), a.removeChild(n), t
                    }
                }))
            }(), Z.swap = function(e, t, n, r) {
                var i, o, a = {};
                for (o in t) a[o] = e.style[o], e.style[o] = t[o];
                i = n.apply(e, r || []);
                for (o in t) e.style[o] = a[o];
                return i
            };
            var Ue = /^(none|table(?!-c[ea]).+)/,
                ze = new RegExp("^(" + we + ")(.*)$", "i"),
                Xe = new RegExp("^([+-])=(" + we + ")", "i"),
                Ve = {
                    position: "absolute",
                    visibility: "hidden",
                    display: "block"
                },
                Ke = {
                    letterSpacing: "0",
                    fontWeight: "400"
                },
                Ye = ["Webkit", "O", "Moz", "ms"];
            Z.extend({
                cssHooks: {
                    opacity: {
                        get: function(e, t) {
                            if (t) {
                                var n = w(e, "opacity");
                                return "" === n ? "1" : n
                            }
                        }
                    }
                },
                cssNumber: {
                    columnCount: !0,
                    fillOpacity: !0,
                    flexGrow: !0,
                    flexShrink: !0,
                    fontWeight: !0,
                    lineHeight: !0,
                    opacity: !0,
                    order: !0,
                    orphans: !0,
                    widows: !0,
                    zIndex: !0,
                    zoom: !0
                },
                cssProps: {
                    "float": "cssFloat"
                },
                style: function(e, t, n, r) {
                    if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                        var i, o, a, s = Z.camelCase(t),
                            u = e.style;
                        return t = Z.cssProps[s] || (Z.cssProps[s] = C(u, s)), a = Z.cssHooks[t] || Z.cssHooks[s], void 0 === n ? a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : u[t] : (o = typeof n, "string" === o && (i = Xe.exec(n)) && (n = (i[1] + 1) * i[2] + parseFloat(Z.css(e, t)), o = "number"), null != n && n === n && ("number" !== o || Z.cssNumber[s] || (n += "px"), J.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (u[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, r)) || (u[t] = n)), void 0)
                    }
                },
                css: function(e, t, n, r) {
                    var i, o, a, s = Z.camelCase(t);
                    return t = Z.cssProps[s] || (Z.cssProps[s] = C(e.style, s)), a = Z.cssHooks[t] || Z.cssHooks[s], a && "get" in a && (i = a.get(e, !0, n)), void 0 === i && (i = w(e, t, r)), "normal" === i && t in Ke && (i = Ke[t]), "" === n || n ? (o = parseFloat(i), n === !0 || Z.isNumeric(o) ? o || 0 : i) : i
                }
            }), Z.each(["height", "width"], function(e, t) {
                Z.cssHooks[t] = {
                    get: function(e, n, r) {
                        return n ? Ue.test(Z.css(e, "display")) && 0 === e.offsetWidth ? Z.swap(e, Ve, function() {
                            return E(e, t, r)
                        }) : E(e, t, r) : void 0
                    },
                    set: function(e, n, r) {
                        var i = r && $e(e);
                        return k(e, n, r ? j(e, t, r, "border-box" === Z.css(e, "boxSizing", !1, i), i) : 0)
                    }
                }
            }), Z.cssHooks.marginRight = T(J.reliableMarginRight, function(e, t) {
                return t ? Z.swap(e, {
                    display: "inline-block"
                }, w, [e, "marginRight"]) : void 0
            }), Z.each({
                margin: "",
                padding: "",
                border: "Width"
            }, function(e, t) {
                Z.cssHooks[e + t] = {
                    expand: function(n) {
                        for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n]; 4 > r; r++) i[e + Te[r] + t] = o[r] || o[r - 2] || o[0];
                        return i
                    }
                }, We.test(e) || (Z.cssHooks[e + t].set = k)
            }), Z.fn.extend({
                css: function(e, t) {
                    return ve(this, function(e, t, n) {
                        var r, i, o = {},
                            a = 0;
                        if (Z.isArray(t)) {
                            for (r = $e(e), i = t.length; i > a; a++) o[t[a]] = Z.css(e, t[a], !1, r);
                            return o
                        }
                        return void 0 !== n ? Z.style(e, t, n) : Z.css(e, t)
                    }, e, t, arguments.length > 1)
                },
                show: function() {
                    return N(this, !0)
                },
                hide: function() {
                    return N(this)
                },
                toggle: function(e) {
                    return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                        Ce(this) ? Z(this).show() : Z(this).hide()
                    })
                }
            }), Z.Tween = A, A.prototype = {
                constructor: A,
                init: function(e, t, n, r, i, o) {
                    this.elem = e, this.prop = n, this.easing = i || "swing", this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (Z.cssNumber[n] ? "" : "px")
                },
                cur: function() {
                    var e = A.propHooks[this.prop];
                    return e && e.get ? e.get(this) : A.propHooks._default.get(this)
                },
                run: function(e) {
                    var t, n = A.propHooks[this.prop];
                    return this.pos = t = this.options.duration ? Z.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : A.propHooks._default.set(this), this
                }
            }, A.prototype.init.prototype = A.prototype, A.propHooks = {
                _default: {
                    get: function(e) {
                        var t;
                        return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = Z.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0) : e.elem[e.prop]
                    },
                    set: function(e) {
                        Z.fx.step[e.prop] ? Z.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[Z.cssProps[e.prop]] || Z.cssHooks[e.prop]) ? Z.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
                    }
                }
            }, A.propHooks.scrollTop = A.propHooks.scrollLeft = {
                set: function(e) {
                    e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
                }
            }, Z.easing = {
                linear: function(e) {
                    return e
                },
                swing: function(e) {
                    return .5 - Math.cos(e * Math.PI) / 2
                }
            }, Z.fx = A.prototype.init, Z.fx.step = {};
            var Je, Ge, Qe = /^(?:toggle|show|hide)$/,
                Ze = new RegExp("^(?:([+-])=|)(" + we + ")([a-z%]*)$", "i"),
                et = /queueHooks$/,
                tt = [q],
                nt = {
                    "*": [function(e, t) {
                        var n = this.createTween(e, t),
                            r = n.cur(),
                            i = Ze.exec(t),
                            o = i && i[3] || (Z.cssNumber[e] ? "" : "px"),
                            a = (Z.cssNumber[e] || "px" !== o && +r) && Ze.exec(Z.css(n.elem, e)),
                            s = 1,
                            u = 20;
                        if (a && a[3] !== o) {
                            o = o || a[3], i = i || [], a = +r || 1;
                            do s = s || ".5", a /= s, Z.style(n.elem, e, a + o); while (s !== (s = n.cur() / r) && 1 !== s && --u)
                        }
                        return i && (a = n.start = +a || +r || 0, n.unit = o, n.end = i[1] ? a + (i[1] + 1) * i[2] : +i[2]), n
                    }]
                };
            Z.Animation = Z.extend(M, {
                    tweener: function(e, t) {
                        Z.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
                        for (var n, r = 0, i = e.length; i > r; r++) n = e[r], nt[n] = nt[n] || [], nt[n].unshift(t)
                    },
                    prefilter: function(e, t) {
                        t ? tt.unshift(e) : tt.push(e)
                    }
                }), Z.speed = function(e, t, n) {
                    var r = e && "object" == typeof e ? Z.extend({}, e) : {
                        complete: n || !n && t || Z.isFunction(e) && e,
                        duration: e,
                        easing: n && t || t && !Z.isFunction(t) && t
                    };
                    return r.duration = Z.fx.off ? 0 : "number" == typeof r.duration ? r.duration : r.duration in Z.fx.speeds ? Z.fx.speeds[r.duration] : Z.fx.speeds._default, (null == r.queue || r.queue === !0) && (r.queue = "fx"), r.old = r.complete, r.complete = function() {
                        Z.isFunction(r.old) && r.old.call(this), r.queue && Z.dequeue(this, r.queue)
                    }, r
                }, Z.fn.extend({
                    fadeTo: function(e, t, n, r) {
                        return this.filter(Ce).css("opacity", 0).show().end().animate({
                            opacity: t
                        }, e, n, r)
                    },
                    animate: function(e, t, n, r) {
                        var i = Z.isEmptyObject(e),
                            o = Z.speed(t, n, r),
                            a = function() {
                                var t = M(this, Z.extend({}, e), o);
                                (i || me.get(this, "finish")) && t.stop(!0)
                            };
                        return a.finish = a, i || o.queue === !1 ? this.each(a) : this.queue(o.queue, a)
                    },
                    stop: function(e, t, n) {
                        var r = function(e) {
                            var t = e.stop;
                            delete e.stop, t(n)
                        };
                        return "string" != typeof e && (n = t, t = e, e = void 0), t && e !== !1 && this.queue(e || "fx", []), this.each(function() {
                            var t = !0,
                                i = null != e && e + "queueHooks",
                                o = Z.timers,
                                a = me.get(this);

                            if (i) a[i] && a[i].stop && r(a[i]);
                            else
                                for (i in a) a[i] && a[i].stop && et.test(i) && r(a[i]);
                            for (i = o.length; i--;) o[i].elem !== this || null != e && o[i].queue !== e || (o[i].anim.stop(n), t = !1, o.splice(i, 1));
                            (t || !n) && Z.dequeue(this, e)
                        })
                    },
                    finish: function(e) {
                        return e !== !1 && (e = e || "fx"), this.each(function() {
                            var t, n = me.get(this),
                                r = n[e + "queue"],
                                i = n[e + "queueHooks"],
                                o = Z.timers,
                                a = r ? r.length : 0;
                            for (n.finish = !0, Z.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
                            for (t = 0; a > t; t++) r[t] && r[t].finish && r[t].finish.call(this);
                            delete n.finish
                        })
                    }
                }), Z.each(["toggle", "show", "hide"], function(e, t) {
                    var n = Z.fn[t];
                    Z.fn[t] = function(e, r, i) {
                        return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(D(t, !0), e, r, i)
                    }
                }), Z.each({
                    slideDown: D("show"),
                    slideUp: D("hide"),
                    slideToggle: D("toggle"),
                    fadeIn: {
                        opacity: "show"
                    },
                    fadeOut: {
                        opacity: "hide"
                    },
                    fadeToggle: {
                        opacity: "toggle"
                    }
                }, function(e, t) {
                    Z.fn[e] = function(e, n, r) {
                        return this.animate(t, e, n, r)
                    }
                }), Z.timers = [], Z.fx.tick = function() {
                    var e, t = 0,
                        n = Z.timers;
                    for (Je = Z.now(); t < n.length; t++) e = n[t], e() || n[t] !== e || n.splice(t--, 1);
                    n.length || Z.fx.stop(), Je = void 0
                }, Z.fx.timer = function(e) {
                    Z.timers.push(e), e() ? Z.fx.start() : Z.timers.pop()
                }, Z.fx.interval = 13, Z.fx.start = function() {
                    Ge || (Ge = setInterval(Z.fx.tick, Z.fx.interval))
                }, Z.fx.stop = function() {
                    clearInterval(Ge), Ge = null
                }, Z.fx.speeds = {
                    slow: 600,
                    fast: 200,
                    _default: 400
                }, Z.fn.delay = function(e, t) {
                    return e = Z.fx ? Z.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function(t, n) {
                        var r = setTimeout(t, e);
                        n.stop = function() {
                            clearTimeout(r)
                        }
                    })
                },
                function() {
                    var e = G.createElement("input"),
                        t = G.createElement("select"),
                        n = t.appendChild(G.createElement("option"));
                    e.type = "checkbox", J.checkOn = "" !== e.value, J.optSelected = n.selected, t.disabled = !0, J.optDisabled = !n.disabled, e = G.createElement("input"), e.value = "t", e.type = "radio", J.radioValue = "t" === e.value
                }();
            var rt, it, ot = Z.expr.attrHandle;
            Z.fn.extend({
                attr: function(e, t) {
                    return ve(this, Z.attr, e, t, arguments.length > 1)
                },
                removeAttr: function(e) {
                    return this.each(function() {
                        Z.removeAttr(this, e)
                    })
                }
            }), Z.extend({
                attr: function(e, t, n) {
                    var r, i, o = e.nodeType;
                    if (e && 3 !== o && 8 !== o && 2 !== o) return typeof e.getAttribute === je ? Z.prop(e, t, n) : (1 === o && Z.isXMLDoc(e) || (t = t.toLowerCase(), r = Z.attrHooks[t] || (Z.expr.match.bool.test(t) ? it : rt)), void 0 === n ? r && "get" in r && null !== (i = r.get(e, t)) ? i : (i = Z.find.attr(e, t), null == i ? void 0 : i) : null !== n ? r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : (e.setAttribute(t, n + ""), n) : void Z.removeAttr(e, t))
                },
                removeAttr: function(e, t) {
                    var n, r, i = 0,
                        o = t && t.match(de);
                    if (o && 1 === e.nodeType)
                        for (; n = o[i++];) r = Z.propFix[n] || n, Z.expr.match.bool.test(n) && (e[r] = !1), e.removeAttribute(n)
                },
                attrHooks: {
                    type: {
                        set: function(e, t) {
                            if (!J.radioValue && "radio" === t && Z.nodeName(e, "input")) {
                                var n = e.value;
                                return e.setAttribute("type", t), n && (e.value = n), t
                            }
                        }
                    }
                }
            }), it = {
                set: function(e, t, n) {
                    return t === !1 ? Z.removeAttr(e, n) : e.setAttribute(n, n), n
                }
            }, Z.each(Z.expr.match.bool.source.match(/\w+/g), function(e, t) {
                var n = ot[t] || Z.find.attr;
                ot[t] = function(e, t, r) {
                    var i, o;
                    return r || (o = ot[t], ot[t] = i, i = null != n(e, t, r) ? t.toLowerCase() : null, ot[t] = o), i
                }
            });
            var at = /^(?:input|select|textarea|button)$/i;
            Z.fn.extend({
                prop: function(e, t) {
                    return ve(this, Z.prop, e, t, arguments.length > 1)
                },
                removeProp: function(e) {
                    return this.each(function() {
                        delete this[Z.propFix[e] || e]
                    })
                }
            }), Z.extend({
                propFix: {
                    "for": "htmlFor",
                    "class": "className"
                },
                prop: function(e, t, n) {
                    var r, i, o, a = e.nodeType;
                    if (e && 3 !== a && 8 !== a && 2 !== a) return o = 1 !== a || !Z.isXMLDoc(e), o && (t = Z.propFix[t] || t, i = Z.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t]
                },
                propHooks: {
                    tabIndex: {
                        get: function(e) {
                            return e.hasAttribute("tabindex") || at.test(e.nodeName) || e.href ? e.tabIndex : -1
                        }
                    }
                }
            }), J.optSelected || (Z.propHooks.selected = {
                get: function(e) {
                    var t = e.parentNode;
                    return t && t.parentNode && t.parentNode.selectedIndex, null
                }
            }), Z.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
                Z.propFix[this.toLowerCase()] = this
            });
            var st = /[\t\r\n\f]/g;
            Z.fn.extend({
                addClass: function(e) {
                    var t, n, r, i, o, a, s = "string" == typeof e && e,
                        u = 0,
                        c = this.length;
                    if (Z.isFunction(e)) return this.each(function(t) {
                        Z(this).addClass(e.call(this, t, this.className))
                    });
                    if (s)
                        for (t = (e || "").match(de) || []; c > u; u++)
                            if (n = this[u], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(st, " ") : " ")) {
                                for (o = 0; i = t[o++];) r.indexOf(" " + i + " ") < 0 && (r += i + " ");
                                a = Z.trim(r), n.className !== a && (n.className = a)
                            } return this
                },
                removeClass: function(e) {
                    var t, n, r, i, o, a, s = 0 === arguments.length || "string" == typeof e && e,
                        u = 0,
                        c = this.length;
                    if (Z.isFunction(e)) return this.each(function(t) {
                        Z(this).removeClass(e.call(this, t, this.className))
                    });
                    if (s)
                        for (t = (e || "").match(de) || []; c > u; u++)
                            if (n = this[u], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(st, " ") : "")) {
                                for (o = 0; i = t[o++];)
                                    for (; r.indexOf(" " + i + " ") >= 0;) r = r.replace(" " + i + " ", " ");
                                a = e ? Z.trim(r) : "", n.className !== a && (n.className = a)
                            } return this
                },
                toggleClass: function(e, t) {
                    var n = typeof e;
                    return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : this.each(Z.isFunction(e) ? function(n) {
                        Z(this).toggleClass(e.call(this, n, this.className, t), t)
                    } : function() {
                        if ("string" === n)
                            for (var t, r = 0, i = Z(this), o = e.match(de) || []; t = o[r++];) i.hasClass(t) ? i.removeClass(t) : i.addClass(t);
                        else(n === je || "boolean" === n) && (this.className && me.set(this, "__className__", this.className), this.className = this.className || e === !1 ? "" : me.get(this, "__className__") || "")
                    })
                },
                hasClass: function(e) {
                    for (var t = " " + e + " ", n = 0, r = this.length; r > n; n++)
                        if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(st, " ").indexOf(t) >= 0) return !0;
                    return !1
                }
            });
            var ut = /\r/g;
            Z.fn.extend({
                val: function(e) {
                    var t, n, r, i = this[0]; {
                        if (arguments.length) return r = Z.isFunction(e), this.each(function(n) {
                            var i;
                            1 === this.nodeType && (i = r ? e.call(this, n, Z(this).val()) : e, null == i ? i = "" : "number" == typeof i ? i += "" : Z.isArray(i) && (i = Z.map(i, function(e) {
                                return null == e ? "" : e + ""
                            })), t = Z.valHooks[this.type] || Z.valHooks[this.nodeName.toLowerCase()], t && "set" in t && void 0 !== t.set(this, i, "value") || (this.value = i))
                        });
                        if (i) return t = Z.valHooks[i.type] || Z.valHooks[i.nodeName.toLowerCase()], t && "get" in t && void 0 !== (n = t.get(i, "value")) ? n : (n = i.value, "string" == typeof n ? n.replace(ut, "") : null == n ? "" : n)
                    }
                }
            }), Z.extend({
                valHooks: {
                    option: {
                        get: function(e) {
                            var t = Z.find.attr(e, "value");
                            return null != t ? t : Z.trim(Z.text(e))
                        }
                    },
                    select: {
                        get: function(e) {
                            for (var t, n, r = e.options, i = e.selectedIndex, o = "select-one" === e.type || 0 > i, a = o ? null : [], s = o ? i + 1 : r.length, u = 0 > i ? s : o ? i : 0; s > u; u++)
                                if (n = r[u], !(!n.selected && u !== i || (J.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) || n.parentNode.disabled && Z.nodeName(n.parentNode, "optgroup"))) {
                                    if (t = Z(n).val(), o) return t;
                                    a.push(t)
                                } return a
                        },
                        set: function(e, t) {
                            for (var n, r, i = e.options, o = Z.makeArray(t), a = i.length; a--;) r = i[a], (r.selected = Z.inArray(r.value, o) >= 0) && (n = !0);
                            return n || (e.selectedIndex = -1), o
                        }
                    }
                }
            }), Z.each(["radio", "checkbox"], function() {
                Z.valHooks[this] = {
                    set: function(e, t) {
                        return Z.isArray(t) ? e.checked = Z.inArray(Z(e).val(), t) >= 0 : void 0
                    }
                }, J.checkOn || (Z.valHooks[this].get = function(e) {
                    return null === e.getAttribute("value") ? "on" : e.value
                })
            }), Z.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
                Z.fn[t] = function(e, n) {
                    return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
                }
            }), Z.fn.extend({
                hover: function(e, t) {
                    return this.mouseenter(e).mouseleave(t || e)
                },
                bind: function(e, t, n) {
                    return this.on(e, null, t, n)
                },
                unbind: function(e, t) {
                    return this.off(e, null, t)
                },
                delegate: function(e, t, n, r) {
                    return this.on(t, e, n, r)
                },
                undelegate: function(e, t, n) {
                    return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
                }
            });
            var ct = Z.now(),
                lt = /\?/;
            Z.parseJSON = function(e) {
                return JSON.parse(e + "")
            }, Z.parseXML = function(e) {
                var t, n;
                if (!e || "string" != typeof e) return null;
                try {
                    n = new DOMParser, t = n.parseFromString(e, "text/xml")
                } catch (r) {
                    t = void 0
                }
                return (!t || t.getElementsByTagName("parsererror").length) && Z.error("Invalid XML: " + e), t
            };
            var ft = /#.*$/,
                pt = /([?&])_=[^&]*/,
                dt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
                ht = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
                gt = /^(?:GET|HEAD)$/,
                vt = /^\/\//,
                mt = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
                yt = {},
                xt = {},
                bt = "*/".concat("*"),
                wt = e.location.href,
                Tt = mt.exec(wt.toLowerCase()) || [];
            Z.extend({
                active: 0,
                lastModified: {},
                etag: {},
                ajaxSettings: {
                    url: wt,
                    type: "GET",
                    isLocal: ht.test(Tt[1]),
                    global: !0,
                    processData: !0,
                    async: !0,
                    contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                    accepts: {
                        "*": bt,
                        text: "text/plain",
                        html: "text/html",
                        xml: "application/xml, text/xml",
                        json: "application/json, text/javascript"
                    },
                    contents: {
                        xml: /xml/,
                        html: /html/,
                        json: /json/
                    },
                    responseFields: {
                        xml: "responseXML",
                        text: "responseText",
                        json: "responseJSON"
                    },
                    converters: {
                        "* text": String,
                        "text html": !0,
                        "text json": Z.parseJSON,
                        "text xml": Z.parseXML
                    },
                    flatOptions: {
                        url: !0,
                        context: !0
                    }
                },
                ajaxSetup: function(e, t) {
                    return t ? H(H(e, Z.ajaxSettings), t) : H(Z.ajaxSettings, e)
                },
                ajaxPrefilter: F(yt),
                ajaxTransport: F(xt),
                ajax: function(e, t) {
                    function n(e, t, n, a) {
                        var u, l, m, y, b, T = t;
                        2 !== x && (x = 2, s && clearTimeout(s), r = void 0, o = a || "", w.readyState = e > 0 ? 4 : 0, u = e >= 200 && 300 > e || 304 === e, n && (y = R(f, w, n)), y = I(f, y, w, u), u ? (f.ifModified && (b = w.getResponseHeader("Last-Modified"), b && (Z.lastModified[i] = b), b = w.getResponseHeader("etag"), b && (Z.etag[i] = b)), 204 === e || "HEAD" === f.type ? T = "nocontent" : 304 === e ? T = "notmodified" : (T = y.state, l = y.data, m = y.error, u = !m)) : (m = T, (e || !T) && (T = "error", 0 > e && (e = 0))), w.status = e, w.statusText = (t || T) + "", u ? h.resolveWith(p, [l, T, w]) : h.rejectWith(p, [w, T, m]), w.statusCode(v), v = void 0, c && d.trigger(u ? "ajaxSuccess" : "ajaxError", [w, f, u ? l : m]), g.fireWith(p, [w, T]), c && (d.trigger("ajaxComplete", [w, f]), --Z.active || Z.event.trigger("ajaxStop")))
                    }
                    "object" == typeof e && (t = e, e = void 0), t = t || {};
                    var r, i, o, a, s, u, c, l, f = Z.ajaxSetup({}, t),
                        p = f.context || f,
                        d = f.context && (p.nodeType || p.jquery) ? Z(p) : Z.event,
                        h = Z.Deferred(),
                        g = Z.Callbacks("once memory"),
                        v = f.statusCode || {},
                        m = {},
                        y = {},
                        x = 0,
                        b = "canceled",
                        w = {
                            readyState: 0,
                            getResponseHeader: function(e) {
                                var t;
                                if (2 === x) {
                                    if (!a)
                                        for (a = {}; t = dt.exec(o);) a[t[1].toLowerCase()] = t[2];
                                    t = a[e.toLowerCase()]
                                }
                                return null == t ? null : t
                            },
                            getAllResponseHeaders: function() {
                                return 2 === x ? o : null
                            },
                            setRequestHeader: function(e, t) {
                                var n = e.toLowerCase();
                                return x || (e = y[n] = y[n] || e, m[e] = t), this
                            },
                            overrideMimeType: function(e) {
                                return x || (f.mimeType = e), this
                            },
                            statusCode: function(e) {
                                var t;
                                if (e)
                                    if (2 > x)
                                        for (t in e) v[t] = [v[t], e[t]];
                                    else w.always(e[w.status]);
                                return this
                            },
                            abort: function(e) {
                                var t = e || b;
                                return r && r.abort(t), n(0, t), this
                            }
                        };
                    if (h.promise(w).complete = g.add, w.success = w.done, w.error = w.fail, f.url = ((e || f.url || wt) + "").replace(ft, "").replace(vt, Tt[1] + "//"), f.type = t.method || t.type || f.method || f.type, f.dataTypes = Z.trim(f.dataType || "*").toLowerCase().match(de) || [""], null == f.crossDomain && (u = mt.exec(f.url.toLowerCase()), f.crossDomain = !(!u || u[1] === Tt[1] && u[2] === Tt[2] && (u[3] || ("http:" === u[1] ? "80" : "443")) === (Tt[3] || ("http:" === Tt[1] ? "80" : "443")))), f.data && f.processData && "string" != typeof f.data && (f.data = Z.param(f.data, f.traditional)), _(yt, f, t, w), 2 === x) return w;
                    c = Z.event && f.global, c && 0 === Z.active++ && Z.event.trigger("ajaxStart"), f.type = f.type.toUpperCase(), f.hasContent = !gt.test(f.type), i = f.url, f.hasContent || (f.data && (i = f.url += (lt.test(i) ? "&" : "?") + f.data, delete f.data), f.cache === !1 && (f.url = pt.test(i) ? i.replace(pt, "$1_=" + ct++) : i + (lt.test(i) ? "&" : "?") + "_=" + ct++)), f.ifModified && (Z.lastModified[i] && w.setRequestHeader("If-Modified-Since", Z.lastModified[i]), Z.etag[i] && w.setRequestHeader("If-None-Match", Z.etag[i])), (f.data && f.hasContent && f.contentType !== !1 || t.contentType) && w.setRequestHeader("Content-Type", f.contentType), w.setRequestHeader("Accept", f.dataTypes[0] && f.accepts[f.dataTypes[0]] ? f.accepts[f.dataTypes[0]] + ("*" !== f.dataTypes[0] ? ", " + bt + "; q=0.01" : "") : f.accepts["*"]);
                    for (l in f.headers) w.setRequestHeader(l, f.headers[l]);
                    if (f.beforeSend && (f.beforeSend.call(p, w, f) === !1 || 2 === x)) return w.abort();
                    b = "abort";
                    for (l in {
                            success: 1,
                            error: 1,
                            complete: 1
                        }) w[l](f[l]);
                    if (r = _(xt, f, t, w)) {
                        w.readyState = 1, c && d.trigger("ajaxSend", [w, f]), f.async && f.timeout > 0 && (s = setTimeout(function() {
                            w.abort("timeout")
                        }, f.timeout));
                        try {
                            x = 1, r.send(m, n)
                        } catch (T) {
                            if (!(2 > x)) throw T;
                            n(-1, T)
                        }
                    } else n(-1, "No Transport");
                    return w
                },
                getJSON: function(e, t, n) {
                    return Z.get(e, t, n, "json")
                },
                getScript: function(e, t) {
                    return Z.get(e, void 0, t, "script")
                }
            }), Z.each(["get", "post"], function(e, t) {
                Z[t] = function(e, n, r, i) {
                    return Z.isFunction(n) && (i = i || r, r = n, n = void 0), Z.ajax({
                        url: e,
                        type: t,
                        dataType: i,
                        data: n,
                        success: r
                    })
                }
            }), Z._evalUrl = function(e) {
                return Z.ajax({
                    url: e,
                    type: "GET",
                    dataType: "script",
                    async: !1,
                    global: !1,
                    "throws": !0
                })
            }, Z.fn.extend({
                wrapAll: function(e) {
                    var t;
                    return Z.isFunction(e) ? this.each(function(t) {
                        Z(this).wrapAll(e.call(this, t))
                    }) : (this[0] && (t = Z(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                        for (var e = this; e.firstElementChild;) e = e.firstElementChild;
                        return e
                    }).append(this)), this)
                },
                wrapInner: function(e) {
                    return this.each(Z.isFunction(e) ? function(t) {
                        Z(this).wrapInner(e.call(this, t))
                    } : function() {
                        var t = Z(this),
                            n = t.contents();
                        n.length ? n.wrapAll(e) : t.append(e)
                    })
                },
                wrap: function(e) {
                    var t = Z.isFunction(e);
                    return this.each(function(n) {
                        Z(this).wrapAll(t ? e.call(this, n) : e)
                    })
                },
                unwrap: function() {
                    return this.parent().each(function() {
                        Z.nodeName(this, "body") || Z(this).replaceWith(this.childNodes)
                    }).end()
                }
            }), Z.expr.filters.hidden = function(e) {
                return e.offsetWidth <= 0 && e.offsetHeight <= 0
            }, Z.expr.filters.visible = function(e) {
                return !Z.expr.filters.hidden(e)
            };
            var Ct = /%20/g,
                kt = /\[\]$/,
                jt = /\r?\n/g,
                Et = /^(?:submit|button|image|reset|file)$/i,
                Nt = /^(?:input|select|textarea|keygen)/i;
            Z.param = function(e, t) {
                var n, r = [],
                    i = function(e, t) {
                        t = Z.isFunction(t) ? t() : null == t ? "" : t, r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
                    };
                if (void 0 === t && (t = Z.ajaxSettings && Z.ajaxSettings.traditional), Z.isArray(e) || e.jquery && !Z.isPlainObject(e)) Z.each(e, function() {
                    i(this.name, this.value)
                });
                else
                    for (n in e) P(n, e[n], t, i);
                return r.join("&").replace(Ct, "+")
            }, Z.fn.extend({
                serialize: function() {
                    return Z.param(this.serializeArray())
                },
                serializeArray: function() {
                    return this.map(function() {
                        var e = Z.prop(this, "elements");
                        return e ? Z.makeArray(e) : this
                    }).filter(function() {
                        var e = this.type;
                        return this.name && !Z(this).is(":disabled") && Nt.test(this.nodeName) && !Et.test(e) && (this.checked || !ke.test(e))
                    }).map(function(e, t) {
                        var n = Z(this).val();
                        return null == n ? null : Z.isArray(n) ? Z.map(n, function(e) {
                            return {
                                name: t.name,
                                value: e.replace(jt, "\r\n")
                            }
                        }) : {
                            name: t.name,
                            value: n.replace(jt, "\r\n")
                        }
                    }).get()
                }
            }), Z.ajaxSettings.xhr = function() {
                try {
                    return new XMLHttpRequest
                } catch (e) {}
            };
            var At = 0,
                St = {},
                Dt = {
                    0: 200,
                    1223: 204
                },
                Lt = Z.ajaxSettings.xhr();
            e.attachEvent && e.attachEvent("onunload", function() {
                for (var e in St) St[e]()
            }), J.cors = !!Lt && "withCredentials" in Lt, J.ajax = Lt = !!Lt, Z.ajaxTransport(function(e) {
                var t;
                return J.cors || Lt && !e.crossDomain ? {
                    send: function(n, r) {
                        var i, o = e.xhr(),
                            a = ++At;
                        if (o.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)
                            for (i in e.xhrFields) o[i] = e.xhrFields[i];
                        e.mimeType && o.overrideMimeType && o.overrideMimeType(e.mimeType), e.crossDomain || n["X-Requested-With"] || (n["X-Requested-With"] = "XMLHttpRequest");
                        for (i in n) o.setRequestHeader(i, n[i]);
                        t = function(e) {
                            return function() {
                                t && (delete St[a], t = o.onload = o.onerror = null, "abort" === e ? o.abort() : "error" === e ? r(o.status, o.statusText) : r(Dt[o.status] || o.status, o.statusText, "string" == typeof o.responseText ? {
                                    text: o.responseText
                                } : void 0, o.getAllResponseHeaders()))
                            }
                        }, o.onload = t(), o.onerror = t("error"), t = St[a] = t("abort");
                        try {
                            o.send(e.hasContent && e.data || null)
                        } catch (s) {
                            if (t) throw s
                        }
                    },
                    abort: function() {
                        t && t()
                    }
                } : void 0
            }), Z.ajaxSetup({
                accepts: {
                    script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
                },
                contents: {
                    script: /(?:java|ecma)script/
                },
                converters: {
                    "text script": function(e) {
                        return Z.globalEval(e), e
                    }
                }
            }), Z.ajaxPrefilter("script", function(e) {
                void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
            }), Z.ajaxTransport("script", function(e) {
                if (e.crossDomain) {
                    var t, n;
                    return {
                        send: function(r, i) {
                            t = Z("<script>").prop({
                                async: !0,
                                charset: e.scriptCharset,
                                src: e.url
                            }).on("load error", n = function(e) {
                                t.remove(), n = null, e && i("error" === e.type ? 404 : 200, e.type)
                            }), G.head.appendChild(t[0])
                        },
                        abort: function() {
                            n && n()
                        }
                    }
                }
            });
            var qt = [],
                Ot = /(=)\?(?=&|$)|\?\?/;
            Z.ajaxSetup({
                jsonp: "callback",
                jsonpCallback: function() {
                    var e = qt.pop() || Z.expando + "_" + ct++;
                    return this[e] = !0, e
                }
            }), Z.ajaxPrefilter("json jsonp", function(t, n, r) {
                var i, o, a, s = t.jsonp !== !1 && (Ot.test(t.url) ? "url" : "string" == typeof t.data && !(t.contentType || "").indexOf("application/x-www-form-urlencoded") && Ot.test(t.data) && "data");
                return s || "jsonp" === t.dataTypes[0] ? (i = t.jsonpCallback = Z.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, s ? t[s] = t[s].replace(Ot, "$1" + i) : t.jsonp !== !1 && (t.url += (lt.test(t.url) ? "&" : "?") + t.jsonp + "=" + i), t.converters["script json"] = function() {
                    return a || Z.error(i + " was not called"), a[0]
                }, t.dataTypes[0] = "json", o = e[i], e[i] = function() {
                    a = arguments
                }, r.always(function() {
                    e[i] = o, t[i] && (t.jsonpCallback = n.jsonpCallback, qt.push(i)), a && Z.isFunction(o) && o(a[0]), a = o = void 0
                }), "script") : void 0
            }), Z.parseHTML = function(e, t, n) {
                if (!e || "string" != typeof e) return null;
                "boolean" == typeof t && (n = t, t = !1), t = t || G;
                var r = ae.exec(e),
                    i = !n && [];
                return r ? [t.createElement(r[1])] : (r = Z.buildFragment([e], t, i), i && i.length && Z(i).remove(), Z.merge([], r.childNodes))
            };
            var Mt = Z.fn.load;
            Z.fn.load = function(e, t, n) {
                if ("string" != typeof e && Mt) return Mt.apply(this, arguments);
                var r, i, o, a = this,
                    s = e.indexOf(" ");
                return s >= 0 && (r = Z.trim(e.slice(s)), e = e.slice(0, s)), Z.isFunction(t) ? (n = t, t = void 0) : t && "object" == typeof t && (i = "POST"), a.length > 0 && Z.ajax({
                    url: e,
                    type: i,
                    dataType: "html",
                    data: t
                }).done(function(e) {
                    o = arguments, a.html(r ? Z("<div>").append(Z.parseHTML(e)).find(r) : e)
                }).complete(n && function(e, t) {
                    a.each(n, o || [e.responseText, t, e])
                }), this
            }, Z.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
                Z.fn[t] = function(e) {
                    return this.on(t, e)
                }
            }), Z.expr.filters.animated = function(e) {
                return Z.grep(Z.timers, function(t) {
                    return e === t.elem
                }).length
            };
            var Ft = e.document.documentElement;
            Z.offset = {
                setOffset: function(e, t, n) {
                    var r, i, o, a, s, u, c, l = Z.css(e, "position"),
                        f = Z(e),
                        p = {};
                    "static" === l && (e.style.position = "relative"), s = f.offset(), o = Z.css(e, "top"), u = Z.css(e, "left"), c = ("absolute" === l || "fixed" === l) && (o + u).indexOf("auto") > -1, c ? (r = f.position(), a = r.top, i = r.left) : (a = parseFloat(o) || 0, i = parseFloat(u) || 0), Z.isFunction(t) && (t = t.call(e, n, s)), null != t.top && (p.top = t.top - s.top + a), null != t.left && (p.left = t.left - s.left + i), "using" in t ? t.using.call(e, p) : f.css(p)
                }
            }, Z.fn.extend({
                offset: function(e) {
                    if (arguments.length) return void 0 === e ? this : this.each(function(t) {
                        Z.offset.setOffset(this, e, t)
                    });
                    var t, n, r = this[0],
                        i = {
                            top: 0,
                            left: 0
                        },
                        o = r && r.ownerDocument;
                    if (o) return t = o.documentElement, Z.contains(t, r) ? (typeof r.getBoundingClientRect !== je && (i = r.getBoundingClientRect()), n = W(o), {
                        top: i.top + n.pageYOffset - t.clientTop,
                        left: i.left + n.pageXOffset - t.clientLeft
                    }) : i
                },
                position: function() {
                    if (this[0]) {
                        var e, t, n = this[0],
                            r = {
                                top: 0,
                                left: 0
                            };
                        return "fixed" === Z.css(n, "position") ? t = n.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), Z.nodeName(e[0], "html") || (r = e.offset()), r.top += Z.css(e[0], "borderTopWidth", !0), r.left += Z.css(e[0], "borderLeftWidth", !0)), {
                            top: t.top - r.top - Z.css(n, "marginTop", !0),
                            left: t.left - r.left - Z.css(n, "marginLeft", !0)
                        }
                    }
                },
                offsetParent: function() {
                    return this.map(function() {
                        for (var e = this.offsetParent || Ft; e && !Z.nodeName(e, "html") && "static" === Z.css(e, "position");) e = e.offsetParent;
                        return e || Ft
                    })
                }
            }), Z.each({
                scrollLeft: "pageXOffset",
                scrollTop: "pageYOffset"
            }, function(t, n) {
                var r = "pageYOffset" === n;
                Z.fn[t] = function(i) {
                    return ve(this, function(t, i, o) {
                        var a = W(t);
                        return void 0 === o ? a ? a[n] : t[i] : void(a ? a.scrollTo(r ? e.pageXOffset : o, r ? o : e.pageYOffset) : t[i] = o)
                    }, t, i, arguments.length, null)
                }
            }), Z.each(["top", "left"], function(e, t) {
                Z.cssHooks[t] = T(J.pixelPosition, function(e, n) {
                    return n ? (n = w(e, t), Be.test(n) ? Z(e).position()[t] + "px" : n) : void 0
                })
            }), Z.each({
                Height: "height",
                Width: "width"
            }, function(e, t) {
                Z.each({
                    padding: "inner" + e,
                    content: t,
                    "": "outer" + e
                }, function(n, r) {
                    Z.fn[r] = function(r, i) {
                        var o = arguments.length && (n || "boolean" != typeof r),
                            a = n || (r === !0 || i === !0 ? "margin" : "border");
                        return ve(this, function(t, n, r) {
                            var i;
                            return Z.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (i = t.documentElement, Math.max(t.body["scroll" + e], i["scroll" + e], t.body["offset" + e], i["offset" + e], i["client" + e])) : void 0 === r ? Z.css(t, n, a) : Z.style(t, n, r, a)
                        }, t, o ? r : void 0, o, null)
                    }
                })
            }), Z.fn.size = function() {
                return this.length
            }, Z.fn.andSelf = Z.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
                return Z
            });
            var _t = e.jQuery,
                Ht = e.$;
            return Z.noConflict = function(t) {
                return e.$ === Z && (e.$ = Ht), t && e.jQuery === Z && (e.jQuery = _t), Z
            }, typeof t === je && (e.jQuery = e.$ = Z), Z
        })
    }, {}],
    2: [function(e, t, n) {
        (function() {
            function e(e) {
                function t(t, n, r, i, o, a) {
                    for (; o >= 0 && a > o; o += e) {
                        var s = i ? i[o] : o;
                        r = n(r, t[s], s, t)
                    }
                    return r
                }
                return function(n, r, i, o) {
                    r = w(r, o, 4);
                    var a = !A(n) && b.keys(n),
                        s = (a || n).length,
                        u = e > 0 ? 0 : s - 1;
                    return arguments.length < 3 && (i = n[a ? a[u] : u], u += e), t(n, r, i, a, u, s)
                }
            }

            function r(e) {
                return function(t, n, r) {
                    n = T(n, r);
                    for (var i = N(t), o = e > 0 ? 0 : i - 1; o >= 0 && i > o; o += e)
                        if (n(t[o], o, t)) return o;
                    return -1
                }
            }

            function i(e, t, n) {
                return function(r, i, o) {
                    var a = 0,
                        s = N(r);
                    if ("number" == typeof o) e > 0 ? a = o >= 0 ? o : Math.max(o + s, a) : s = o >= 0 ? Math.min(o + 1, s) : o + s + 1;
                    else if (n && o && s) return o = n(r, i), r[o] === i ? o : -1;
                    if (i !== i) return o = t(p.call(r, a, s), b.isNaN), o >= 0 ? o + a : -1;
                    for (o = e > 0 ? a : s - 1; o >= 0 && s > o; o += e)
                        if (r[o] === i) return o;
                    return -1
                }
            }

            function o(e, t) {
                var n = O.length,
                    r = e.constructor,
                    i = b.isFunction(r) && r.prototype || c,
                    o = "constructor";
                for (b.has(e, o) && !b.contains(t, o) && t.push(o); n--;) o = O[n], o in e && e[o] !== i[o] && !b.contains(t, o) && t.push(o)
            }
            var a = this,
                s = a._,
                u = Array.prototype,
                c = Object.prototype,
                l = Function.prototype,
                f = u.push,
                p = u.slice,
                d = c.toString,
                h = c.hasOwnProperty,
                g = Array.isArray,
                v = Object.keys,
                m = l.bind,
                y = Object.create,
                x = function() {},
                b = function(e) {
                    return e instanceof b ? e : this instanceof b ? void(this._wrapped = e) : new b(e)
                };
            "undefined" != typeof n ? ("undefined" != typeof t && t.exports && (n = t.exports = b), n._ = b) : a._ = b, b.VERSION = "1.8.3";
            var w = function(e, t, n) {
                    if (void 0 === t) return e;
                    switch (null == n ? 3 : n) {
                        case 1:
                            return function(n) {
                                return e.call(t, n)
                            };
                        case 2:
                            return function(n, r) {
                                return e.call(t, n, r)
                            };
                        case 3:
                            return function(n, r, i) {
                                return e.call(t, n, r, i)
                            };
                        case 4:
                            return function(n, r, i, o) {
                                return e.call(t, n, r, i, o)
                            }
                    }
                    return function() {
                        return e.apply(t, arguments)
                    }
                },
                T = function(e, t, n) {
                    return null == e ? b.identity : b.isFunction(e) ? w(e, t, n) : b.isObject(e) ? b.matcher(e) : b.property(e)
                };
            b.iteratee = function(e, t) {
                return T(e, t, 1 / 0)
            };
            var C = function(e, t) {
                    return function(n) {
                        var r = arguments.length;
                        if (2 > r || null == n) return n;
                        for (var i = 1; r > i; i++)
                            for (var o = arguments[i], a = e(o), s = a.length, u = 0; s > u; u++) {
                                var c = a[u];
                                t && void 0 !== n[c] || (n[c] = o[c])
                            }
                        return n
                    }
                },
                k = function(e) {
                    if (!b.isObject(e)) return {};
                    if (y) return y(e);
                    x.prototype = e;
                    var t = new x;
                    return x.prototype = null, t
                },
                j = function(e) {
                    return function(t) {
                        return null == t ? void 0 : t[e]
                    }
                },
                E = Math.pow(2, 53) - 1,
                N = j("length"),
                A = function(e) {
                    var t = N(e);
                    return "number" == typeof t && t >= 0 && E >= t
                };
            b.each = b.forEach = function(e, t, n) {
                t = w(t, n);
                var r, i;
                if (A(e))
                    for (r = 0, i = e.length; i > r; r++) t(e[r], r, e);
                else {
                    var o = b.keys(e);
                    for (r = 0, i = o.length; i > r; r++) t(e[o[r]], o[r], e)
                }
                return e
            }, b.map = b.collect = function(e, t, n) {
                t = T(t, n);
                for (var r = !A(e) && b.keys(e), i = (r || e).length, o = Array(i), a = 0; i > a; a++) {
                    var s = r ? r[a] : a;
                    o[a] = t(e[s], s, e)
                }
                return o
            }, b.reduce = b.foldl = b.inject = e(1), b.reduceRight = b.foldr = e(-1), b.find = b.detect = function(e, t, n) {
                var r;
                return r = A(e) ? b.findIndex(e, t, n) : b.findKey(e, t, n), void 0 !== r && -1 !== r ? e[r] : void 0
            }, b.filter = b.select = function(e, t, n) {
                var r = [];
                return t = T(t, n), b.each(e, function(e, n, i) {
                    t(e, n, i) && r.push(e)
                }), r
            }, b.reject = function(e, t, n) {
                return b.filter(e, b.negate(T(t)), n)
            }, b.every = b.all = function(e, t, n) {
                t = T(t, n);
                for (var r = !A(e) && b.keys(e), i = (r || e).length, o = 0; i > o; o++) {
                    var a = r ? r[o] : o;
                    if (!t(e[a], a, e)) return !1
                }
                return !0
            }, b.some = b.any = function(e, t, n) {
                t = T(t, n);
                for (var r = !A(e) && b.keys(e), i = (r || e).length, o = 0; i > o; o++) {
                    var a = r ? r[o] : o;
                    if (t(e[a], a, e)) return !0
                }
                return !1
            }, b.contains = b.includes = b.include = function(e, t, n, r) {
                return A(e) || (e = b.values(e)), ("number" != typeof n || r) && (n = 0), b.indexOf(e, t, n) >= 0
            }, b.invoke = function(e, t) {
                var n = p.call(arguments, 2),
                    r = b.isFunction(t);
                return b.map(e, function(e) {
                    var i = r ? t : e[t];
                    return null == i ? i : i.apply(e, n)
                })
            }, b.pluck = function(e, t) {
                return b.map(e, b.property(t))
            }, b.where = function(e, t) {
                return b.filter(e, b.matcher(t))
            }, b.findWhere = function(e, t) {
                return b.find(e, b.matcher(t))
            }, b.max = function(e, t, n) {
                var r, i, o = -(1 / 0),
                    a = -(1 / 0);
                if (null == t && null != e) {
                    e = A(e) ? e : b.values(e);
                    for (var s = 0, u = e.length; u > s; s++) r = e[s], r > o && (o = r)
                } else t = T(t, n), b.each(e, function(e, n, r) {
                    i = t(e, n, r), (i > a || i === -(1 / 0) && o === -(1 / 0)) && (o = e, a = i)
                });
                return o
            }, b.min = function(e, t, n) {
                var r, i, o = 1 / 0,
                    a = 1 / 0;
                if (null == t && null != e) {
                    e = A(e) ? e : b.values(e);
                    for (var s = 0, u = e.length; u > s; s++) r = e[s], o > r && (o = r)
                } else t = T(t, n), b.each(e, function(e, n, r) {
                    i = t(e, n, r), (a > i || i === 1 / 0 && o === 1 / 0) && (o = e, a = i)
                });
                return o
            }, b.shuffle = function(e) {
                for (var t, n = A(e) ? e : b.values(e), r = n.length, i = Array(r), o = 0; r > o; o++) t = b.random(0, o), t !== o && (i[o] = i[t]), i[t] = n[o];
                return i
            }, b.sample = function(e, t, n) {
                return null == t || n ? (A(e) || (e = b.values(e)), e[b.random(e.length - 1)]) : b.shuffle(e).slice(0, Math.max(0, t))
            }, b.sortBy = function(e, t, n) {
                return t = T(t, n), b.pluck(b.map(e, function(e, n, r) {
                    return {
                        value: e,
                        index: n,
                        criteria: t(e, n, r)
                    }
                }).sort(function(e, t) {
                    var n = e.criteria,
                        r = t.criteria;
                    if (n !== r) {
                        if (n > r || void 0 === n) return 1;
                        if (r > n || void 0 === r) return -1
                    }
                    return e.index - t.index
                }), "value")
            };
            var S = function(e) {
                return function(t, n, r) {
                    var i = {};
                    return n = T(n, r), b.each(t, function(r, o) {
                        var a = n(r, o, t);
                        e(i, r, a)
                    }), i
                }
            };
            b.groupBy = S(function(e, t, n) {
                b.has(e, n) ? e[n].push(t) : e[n] = [t]
            }), b.indexBy = S(function(e, t, n) {
                e[n] = t
            }), b.countBy = S(function(e, t, n) {
                b.has(e, n) ? e[n]++ : e[n] = 1
            }), b.toArray = function(e) {
                return e ? b.isArray(e) ? p.call(e) : A(e) ? b.map(e, b.identity) : b.values(e) : []
            }, b.size = function(e) {
                return null == e ? 0 : A(e) ? e.length : b.keys(e).length
            }, b.partition = function(e, t, n) {
                t = T(t, n);
                var r = [],
                    i = [];
                return b.each(e, function(e, n, o) {
                    (t(e, n, o) ? r : i).push(e)
                }), [r, i]
            }, b.first = b.head = b.take = function(e, t, n) {
                return null == e ? void 0 : null == t || n ? e[0] : b.initial(e, e.length - t)
            }, b.initial = function(e, t, n) {
                return p.call(e, 0, Math.max(0, e.length - (null == t || n ? 1 : t)))
            }, b.last = function(e, t, n) {
                return null == e ? void 0 : null == t || n ? e[e.length - 1] : b.rest(e, Math.max(0, e.length - t))
            }, b.rest = b.tail = b.drop = function(e, t, n) {
                return p.call(e, null == t || n ? 1 : t)
            }, b.compact = function(e) {
                return b.filter(e, b.identity)
            };
            var D = function(e, t, n, r) {
                for (var i = [], o = 0, a = r || 0, s = N(e); s > a; a++) {
                    var u = e[a];
                    if (A(u) && (b.isArray(u) || b.isArguments(u))) {
                        t || (u = D(u, t, n));
                        var c = 0,
                            l = u.length;
                        for (i.length += l; l > c;) i[o++] = u[c++]
                    } else n || (i[o++] = u)
                }
                return i
            };
            b.flatten = function(e, t) {
                return D(e, t, !1)
            }, b.without = function(e) {
                return b.difference(e, p.call(arguments, 1))
            }, b.uniq = b.unique = function(e, t, n, r) {
                b.isBoolean(t) || (r = n, n = t, t = !1), null != n && (n = T(n, r));
                for (var i = [], o = [], a = 0, s = N(e); s > a; a++) {
                    var u = e[a],
                        c = n ? n(u, a, e) : u;
                    t ? (a && o === c || i.push(u), o = c) : n ? b.contains(o, c) || (o.push(c), i.push(u)) : b.contains(i, u) || i.push(u)
                }
                return i
            }, b.union = function() {
                return b.uniq(D(arguments, !0, !0))
            }, b.intersection = function(e) {
                for (var t = [], n = arguments.length, r = 0, i = N(e); i > r; r++) {
                    var o = e[r];
                    if (!b.contains(t, o)) {
                        for (var a = 1; n > a && b.contains(arguments[a], o); a++);
                        a === n && t.push(o)
                    }
                }
                return t
            }, b.difference = function(e) {
                var t = D(arguments, !0, !0, 1);
                return b.filter(e, function(e) {
                    return !b.contains(t, e)
                })
            }, b.zip = function() {
                return b.unzip(arguments)
            }, b.unzip = function(e) {
                for (var t = e && b.max(e, N).length || 0, n = Array(t), r = 0; t > r; r++) n[r] = b.pluck(e, r);
                return n
            }, b.object = function(e, t) {
                for (var n = {}, r = 0, i = N(e); i > r; r++) t ? n[e[r]] = t[r] : n[e[r][0]] = e[r][1];
                return n
            }, b.findIndex = r(1), b.findLastIndex = r(-1), b.sortedIndex = function(e, t, n, r) {
                n = T(n, r, 1);
                for (var i = n(t), o = 0, a = N(e); a > o;) {
                    var s = Math.floor((o + a) / 2);
                    n(e[s]) < i ? o = s + 1 : a = s
                }
                return o
            }, b.indexOf = i(1, b.findIndex, b.sortedIndex), b.lastIndexOf = i(-1, b.findLastIndex), b.range = function(e, t, n) {
                null == t && (t = e || 0, e = 0), n = n || 1;
                for (var r = Math.max(Math.ceil((t - e) / n), 0), i = Array(r), o = 0; r > o; o++, e += n) i[o] = e;
                return i
            };
            var L = function(e, t, n, r, i) {
                if (!(r instanceof t)) return e.apply(n, i);
                var o = k(e.prototype),
                    a = e.apply(o, i);
                return b.isObject(a) ? a : o
            };
            b.bind = function(e, t) {
                if (m && e.bind === m) return m.apply(e, p.call(arguments, 1));
                if (!b.isFunction(e)) throw new TypeError("Bind must be called on a function");
                var n = p.call(arguments, 2),
                    r = function() {
                        return L(e, r, t, this, n.concat(p.call(arguments)))
                    };
                return r
            }, b.partial = function(e) {
                var t = p.call(arguments, 1),
                    n = function() {
                        for (var r = 0, i = t.length, o = Array(i), a = 0; i > a; a++) o[a] = t[a] === b ? arguments[r++] : t[a];
                        for (; r < arguments.length;) o.push(arguments[r++]);
                        return L(e, n, this, this, o)
                    };
                return n
            }, b.bindAll = function(e) {
                var t, n, r = arguments.length;
                if (1 >= r) throw new Error("bindAll must be passed function names");
                for (t = 1; r > t; t++) n = arguments[t], e[n] = b.bind(e[n], e);
                return e
            }, b.memoize = function(e, t) {
                var n = function(r) {
                    var i = n.cache,
                        o = "" + (t ? t.apply(this, arguments) : r);
                    return b.has(i, o) || (i[o] = e.apply(this, arguments)), i[o]
                };
                return n.cache = {}, n
            }, b.delay = function(e, t) {
                var n = p.call(arguments, 2);
                return setTimeout(function() {
                    return e.apply(null, n)
                }, t)
            }, b.defer = b.partial(b.delay, b, 1), b.throttle = function(e, t, n) {
                var r, i, o, a = null,
                    s = 0;
                n || (n = {});
                var u = function() {
                    s = n.leading === !1 ? 0 : b.now(), a = null, o = e.apply(r, i), a || (r = i = null)
                };
                return function() {
                    var c = b.now();
                    s || n.leading !== !1 || (s = c);
                    var l = t - (c - s);
                    return r = this, i = arguments, 0 >= l || l > t ? (a && (clearTimeout(a), a = null), s = c, o = e.apply(r, i), a || (r = i = null)) : a || n.trailing === !1 || (a = setTimeout(u, l)), o
                }
            }, b.debounce = function(e, t, n) {
                var r, i, o, a, s, u = function() {
                    var c = b.now() - a;
                    t > c && c >= 0 ? r = setTimeout(u, t - c) : (r = null, n || (s = e.apply(o, i), r || (o = i = null)))
                };
                return function() {
                    o = this, i = arguments, a = b.now();
                    var c = n && !r;
                    return r || (r = setTimeout(u, t)), c && (s = e.apply(o, i), o = i = null), s
                }
            }, b.wrap = function(e, t) {
                return b.partial(t, e)
            }, b.negate = function(e) {
                return function() {
                    return !e.apply(this, arguments)
                }
            }, b.compose = function() {
                var e = arguments,
                    t = e.length - 1;
                return function() {
                    for (var n = t, r = e[t].apply(this, arguments); n--;) r = e[n].call(this, r);
                    return r
                }
            }, b.after = function(e, t) {
                return function() {
                    return --e < 1 ? t.apply(this, arguments) : void 0
                }
            }, b.before = function(e, t) {
                var n;
                return function() {
                    return --e > 0 && (n = t.apply(this, arguments)), 1 >= e && (t = null), n
                }
            }, b.once = b.partial(b.before, 2);
            var q = !{
                    toString: null
                }.propertyIsEnumerable("toString"),
                O = ["valueOf", "isPrototypeOf", "toString", "propertyIsEnumerable", "hasOwnProperty", "toLocaleString"];
            b.keys = function(e) {
                if (!b.isObject(e)) return [];
                if (v) return v(e);
                var t = [];
                for (var n in e) b.has(e, n) && t.push(n);
                return q && o(e, t), t
            }, b.allKeys = function(e) {
                if (!b.isObject(e)) return [];
                var t = [];
                for (var n in e) t.push(n);
                return q && o(e, t), t
            }, b.values = function(e) {
                for (var t = b.keys(e), n = t.length, r = Array(n), i = 0; n > i; i++) r[i] = e[t[i]];
                return r
            }, b.mapObject = function(e, t, n) {
                t = T(t, n);
                for (var r, i = b.keys(e), o = i.length, a = {}, s = 0; o > s; s++) r = i[s], a[r] = t(e[r], r, e);
                return a
            }, b.pairs = function(e) {
                for (var t = b.keys(e), n = t.length, r = Array(n), i = 0; n > i; i++) r[i] = [t[i], e[t[i]]];
                return r
            }, b.invert = function(e) {
                for (var t = {}, n = b.keys(e), r = 0, i = n.length; i > r; r++) t[e[n[r]]] = n[r];
                return t
            }, b.functions = b.methods = function(e) {
                var t = [];
                for (var n in e) b.isFunction(e[n]) && t.push(n);
                return t.sort()
            }, b.extend = C(b.allKeys), b.extendOwn = b.assign = C(b.keys), b.findKey = function(e, t, n) {
                t = T(t, n);
                for (var r, i = b.keys(e), o = 0, a = i.length; a > o; o++)
                    if (r = i[o], t(e[r], r, e)) return r
            }, b.pick = function(e, t, n) {
                var r, i, o = {},
                    a = e;
                if (null == a) return o;
                b.isFunction(t) ? (i = b.allKeys(a), r = w(t, n)) : (i = D(arguments, !1, !1, 1), r = function(e, t, n) {
                    return t in n
                }, a = Object(a));
                for (var s = 0, u = i.length; u > s; s++) {
                    var c = i[s],
                        l = a[c];
                    r(l, c, a) && (o[c] = l)
                }
                return o
            }, b.omit = function(e, t, n) {
                if (b.isFunction(t)) t = b.negate(t);
                else {
                    var r = b.map(D(arguments, !1, !1, 1), String);
                    t = function(e, t) {
                        return !b.contains(r, t)
                    }
                }
                return b.pick(e, t, n)
            }, b.defaults = C(b.allKeys, !0), b.create = function(e, t) {
                var n = k(e);
                return t && b.extendOwn(n, t), n
            }, b.clone = function(e) {
                return b.isObject(e) ? b.isArray(e) ? e.slice() : b.extend({}, e) : e
            }, b.tap = function(e, t) {
                return t(e), e
            }, b.isMatch = function(e, t) {
                var n = b.keys(t),
                    r = n.length;
                if (null == e) return !r;
                for (var i = Object(e), o = 0; r > o; o++) {
                    var a = n[o];
                    if (t[a] !== i[a] || !(a in i)) return !1
                }
                return !0
            };
            var M = function(e, t, n, r) {
                if (e === t) return 0 !== e || 1 / e === 1 / t;
                if (null == e || null == t) return e === t;
                e instanceof b && (e = e._wrapped), t instanceof b && (t = t._wrapped);
                var i = d.call(e);

                if (i !== d.call(t)) return !1;
                switch (i) {
                    case "[object RegExp]":
                    case "[object String]":
                        return "" + e == "" + t;
                    case "[object Number]":
                        return +e !== +e ? +t !== +t : 0 === +e ? 1 / +e === 1 / t : +e === +t;
                    case "[object Date]":
                    case "[object Boolean]":
                        return +e === +t
                }
                var o = "[object Array]" === i;
                if (!o) {
                    if ("object" != typeof e || "object" != typeof t) return !1;
                    var a = e.constructor,
                        s = t.constructor;
                    if (a !== s && !(b.isFunction(a) && a instanceof a && b.isFunction(s) && s instanceof s) && "constructor" in e && "constructor" in t) return !1
                }
                n = n || [], r = r || [];
                for (var u = n.length; u--;)
                    if (n[u] === e) return r[u] === t;
                if (n.push(e), r.push(t), o) {
                    if (u = e.length, u !== t.length) return !1;
                    for (; u--;)
                        if (!M(e[u], t[u], n, r)) return !1
                } else {
                    var c, l = b.keys(e);
                    if (u = l.length, b.keys(t).length !== u) return !1;
                    for (; u--;)
                        if (c = l[u], !b.has(t, c) || !M(e[c], t[c], n, r)) return !1
                }
                return n.pop(), r.pop(), !0
            };
            b.isEqual = function(e, t) {
                return M(e, t)
            }, b.isEmpty = function(e) {
                return null == e ? !0 : A(e) && (b.isArray(e) || b.isString(e) || b.isArguments(e)) ? 0 === e.length : 0 === b.keys(e).length
            }, b.isElement = function(e) {
                return !(!e || 1 !== e.nodeType)
            }, b.isArray = g || function(e) {
                return "[object Array]" === d.call(e)
            }, b.isObject = function(e) {
                var t = typeof e;
                return "function" === t || "object" === t && !!e
            }, b.each(["Arguments", "Function", "String", "Number", "Date", "RegExp", "Error"], function(e) {
                b["is" + e] = function(t) {
                    return d.call(t) === "[object " + e + "]"
                }
            }), b.isArguments(arguments) || (b.isArguments = function(e) {
                return b.has(e, "callee")
            }), "function" != typeof /./ && "object" != typeof Int8Array && (b.isFunction = function(e) {
                return "function" == typeof e || !1
            }), b.isFinite = function(e) {
                return isFinite(e) && !isNaN(parseFloat(e))
            }, b.isNaN = function(e) {
                return b.isNumber(e) && e !== +e
            }, b.isBoolean = function(e) {
                return e === !0 || e === !1 || "[object Boolean]" === d.call(e)
            }, b.isNull = function(e) {
                return null === e
            }, b.isUndefined = function(e) {
                return void 0 === e
            }, b.has = function(e, t) {
                return null != e && h.call(e, t)
            }, b.noConflict = function() {
                return a._ = s, this
            }, b.identity = function(e) {
                return e
            }, b.constant = function(e) {
                return function() {
                    return e
                }
            }, b.noop = function() {}, b.property = j, b.propertyOf = function(e) {
                return null == e ? function() {} : function(t) {
                    return e[t]
                }
            }, b.matcher = b.matches = function(e) {
                return e = b.extendOwn({}, e),
                    function(t) {
                        return b.isMatch(t, e)
                    }
            }, b.times = function(e, t, n) {
                var r = Array(Math.max(0, e));
                t = w(t, n, 1);
                for (var i = 0; e > i; i++) r[i] = t(i);
                return r
            }, b.random = function(e, t) {
                return null == t && (t = e, e = 0), e + Math.floor(Math.random() * (t - e + 1))
            }, b.now = Date.now || function() {
                return (new Date).getTime()
            };
            var F = {
                    "&": "&amp;",
                    "<": "&lt;",
                    ">": "&gt;",
                    '"': "&quot;",
                    "'": "&#x27;",
                    "`": "&#x60;"
                },
                _ = b.invert(F),
                H = function(e) {
                    var t = function(t) {
                            return e[t]
                        },
                        n = "(?:" + b.keys(e).join("|") + ")",
                        r = RegExp(n),
                        i = RegExp(n, "g");
                    return function(e) {
                        return e = null == e ? "" : "" + e, r.test(e) ? e.replace(i, t) : e
                    }
                };
            b.escape = H(F), b.unescape = H(_), b.result = function(e, t, n) {
                var r = null == e ? void 0 : e[t];
                return void 0 === r && (r = n), b.isFunction(r) ? r.call(e) : r
            };
            var R = 0;
            b.uniqueId = function(e) {
                var t = ++R + "";
                return e ? e + t : t
            }, b.templateSettings = {
                evaluate: /<%([\s\S]+?)%>/g,
                interpolate: /<%=([\s\S]+?)%>/g,
                escape: /<%-([\s\S]+?)%>/g
            };
            var I = /(.)^/,
                P = {
                    "'": "'",
                    "\\": "\\",
                    "\r": "r",
                    "\n": "n",
                    "
                    ": "
                    u2028 ",
                    "
                    ": "
                    u2029 "
                },
                W = /\\|'|\r|\n|\u2028|\u2029/g,
                B = function(e) {
                    return "\\" + P[e]
                };
            b.template = function(e, t, n) {
                !t && n && (t = n), t = b.defaults({}, t, b.templateSettings);
                var r = RegExp([(t.escape || I).source, (t.interpolate || I).source, (t.evaluate || I).source].join("|") + "|$", "g"),
                    i = 0,
                    o = "__p+='";
                e.replace(r, function(t, n, r, a, s) {
                    return o += e.slice(i, s).replace(W, B), i = s + t.length, n ? o += "'+\n((__t=(" + n + "))==null?'':_.escape(__t))+\n'" : r ? o += "'+\n((__t=(" + r + "))==null?'':__t)+\n'" : a && (o += "';\n" + a + "\n__p+='"), t
                }), o += "';\n", t.variable || (o = "with(obj||{}){\n" + o + "}\n"), o = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + o + "return __p;\n";
                try {
                    var a = new Function(t.variable || "obj", "_", o)
                } catch (s) {
                    throw s.source = o, s
                }
                var u = function(e) {
                        return a.call(this, e, b)
                    },
                    c = t.variable || "obj";
                return u.source = "function(" + c + "){\n" + o + "}", u
            }, b.chain = function(e) {
                var t = b(e);
                return t._chain = !0, t
            };
            var $ = function(e, t) {
                return e._chain ? b(t).chain() : t
            };
            b.mixin = function(e) {
                b.each(b.functions(e), function(t) {
                    var n = b[t] = e[t];
                    b.prototype[t] = function() {
                        var e = [this._wrapped];
                        return f.apply(e, arguments), $(this, n.apply(b, e))
                    }
                })
            }, b.mixin(b), b.each(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function(e) {
                var t = u[e];
                b.prototype[e] = function() {
                    var n = this._wrapped;
                    return t.apply(n, arguments), "shift" !== e && "splice" !== e || 0 !== n.length || delete n[0], $(this, n)
                }
            }), b.each(["concat", "join", "slice"], function(e) {
                var t = u[e];
                b.prototype[e] = function() {
                    return $(this, t.apply(this._wrapped, arguments))
                }
            }), b.prototype.value = function() {
                return this._wrapped
            }, b.prototype.valueOf = b.prototype.toJSON = b.prototype.value, b.prototype.toString = function() {
                return "" + this._wrapped
            }, "function" == typeof define && define.amd && define("underscore", [], function() {
                return b
            })
        }).call(this)
    }, {}],
    3: [function(e, t, n) {
        "use strict";
        var r = e("underscore"),
            i = e("./modules/client_bridge.js"),
            o = e("./modules/vent.js"),
            a = e("./modules/analytics.js");
        chrome.runtime.onMessage.addListener(function(e, t, n) {
            return "popup-button-clicked" === e.event ? chrome.tabs.query({
                active: !0,
                lastFocusedWindow: !0
            }, function(t) {
                chrome.tabs.sendMessage(t[0].id, {
                    event: e.event
                })
            }) : "send-data" === e.action ? i.sendData(e.pageInfo) : "send-URL" === e.action ? i.sendURL(e.pageInfo) : "send-image" === e.action ? i.sendImage(e.url, e.title) : "send-video" === e.action ? i.sendVideo(e.pageInfo) : "get-apps" === e.action && chrome.management.getAll(function(e) {
                n(e)
            }), !0
        }), chrome.browserAction.onClicked.addListener(function(e) {
            -1 === e.url.indexOf(chrome.extension.getURL("welcome.html")) ? chrome.tabs.sendMessage(e.id, {
                event: "action-clicked"
            }) : i.sendURL({
                url: "https://chrome.google.com/webstore/detail/viber/dafalpmmoljglecaoelijmbkhpdoobmm",
                title: "Viber Chrome Extension"
            }), a.trackEvent({
                action: "toolbar icon clicked"
            })
        }), chrome.contextMenus.create({
            title: chrome.i18n.getMessage("share_context"),
            contexts: ["page", "selection", "image", "link"],
            id: "viber-context"
        }), chrome.contextMenus.onClicked.addListener(function(e, t) {
            chrome.tabs.sendMessage(t.id, {
                event: "context-clicked",
                data: e
            })
        }), o.addEventListener("client-bridge:timeout", function() {
            chrome.tabs.query({
                active: !0,
                lastFocusedWindow: !0
            }, function(e) {
                chrome.tabs.sendMessage(e[0].id, {
                    event: "client-timeout"
                })
            })
        }), chrome.runtime.onInstalled.addListener(function(e) {
            if ("install" === e.reason) {
                var t = localStorage.firstRun;
                if (r.isUndefined(t)) {
                    var n = chrome.extension.getURL("welcome.html");
                    chrome.tabs.create({
                        url: n
                    }), localStorage.firstRun = !0
                }
            }
        })
    }, {
        "./modules/analytics.js": 5,
        "./modules/client_bridge.js": 7,
        "./modules/vent.js": 10,
        underscore: 2
    }],
    4: [function(e, t, n) {
        t.exports = {
            MIXPANEL_SAMPLE_RATE: 10,
            MIXPANEL_ACCOUNT_TOKEN: "20625b657c285d3d41d21bd3d4b50f1c",
            DISALLOWED_URLS: ["mail.google.com", "mail.yahoo.com"]
        }
    }, {}],
    5: [function(e, t, n) {
        "use strict";
        var r, i = e("jquery"),
            o = e("underscore"),
            a = e("./../config/config.production.js"),
            s = a.MIXPANEL_SAMPLE_RATE,
            u = a.MIXPANEL_ACCOUNT_TOKEN,
            c = function() {
                var e;
                return e = o.random(0, 1e4), e >= 0 && 100 * s > e ? !0 : !1
            },
            l = function(e) {
                if (o.isUndefined(r) && (r = c()), r === !0) {
                    var t = "chrome ex",
                        n = {
                            event: t,
                            properties: o.extend(e, {
                                token: u,
                                "Browser Version": /Chrome\/([0-9.]+)/.exec(navigator.userAgent)[1]
                            })
                        },
                        a = window.btoa(JSON.stringify(n));
                    i.get("https://api.mixpanel.com/track?data=" + a)
                }
            },
            f = function(e, t) {
                o.isUndefined(r) && (r = c()), r === !0 && e.click(function(e) {
                    e.preventDefault(), l(t);
                    var n = i(this).attr("href");
                    setTimeout(function() {
                        window.location = n
                    }, 300)
                })
            };
        t.exports = {
            trackEvent: l,
            trackLink: f
        }
    }, {
        "./../config/config.production.js": 4,
        jquery: 1,
        underscore: 2
    }],
    6: [function(e, t, n) {
        "use strict";
        var r = e("jquery"),
            i = function(e) {
                chrome.runtime.sendMessage({
                    action: "send-data",
                    pageInfo: e
                })
            },
            o = function(e, t) {
                chrome.runtime.sendMessage({
                    action: "send-image",
                    url: e,
                    title: t
                })
            },
            a = function(e) {
                chrome.runtime.sendMessage({
                    action: "send-URL",
                    pageInfo: e
                })
            },
            s = function(e) {
                chrome.runtime.sendMessage({
                    action: "send-URL",
                    pageInfo: e
                })
            },
            u = function() {
                var e = r.Deferred();
                return chrome.runtime.sendMessage({
                    action: "get-apps"
                }, function(t) {
                    e.resolve(t)
                }), e
            };
        t.exports = {
            sendData: i,
            sendVideo: s,
            sendImage: o,
            sendURL: a,
            getInstalledApps: u
        }
    }, {
        jquery: 1
    }],
    7: [function(e, t, n) {
        "use strict";
        var r = e("underscore"),
            i = e("jquery"),
            o = e("./socket_client.js"),
            a = e("./utils.js"),
            s = e("./vent.js"),
            u = "1.0",
            c = 3,
            l = function() {
                var e = i.Deferred();
                return o.connect().then(function() {
                    var t = f();
                    t.then(function() {
                        e.resolve()
                    })
                }, function() {
                    e.reject()
                }), e
            },
            f = function() {
                var e = i.Deferred();
                return o.addEventListener("client_info", function(t) {
                    u = t.data.API_version, e.resolve()
                }), p("get_client_info"), e
            },
            p = function(e, t) {
                if (!e) throw new Error("Client Bridge: message is not valid");
                t || (t = {});
                var n = {
                    message: e,
                    vesion: u,
                    data: t,
                    request_id: r.uniqueId()
                };
                o.sendData(n)
            },
            d = function(e) {
                var t = i.Deferred(),
                    n = function() {
                        o.addEventListener("shared", function(e) {
                            switch (e.data.result) {
                                case 1:
                                    t.resolve();
                                    break;
                                case 2:
                                case 3:
                                    t.reject()
                            }
                            o.reset()
                        }), p("share", e)
                    };
                return l().then(n, function() {
                    h().then(n, function() {
                        t.reject(), s.dispatch("client-bridge:timeout"), o.reset()
                    })
                }), t
            },
            h = function() {
                var e = i.Deferred();
                chrome.tabs.query({
                    active: !0,
                    lastFocusedWindow: !0
                }, function(e) {
                    chrome.tabs.sendMessage(e[0].id, {
                        action: "open-client"
                    })
                });
                var t, n = 1,
                    r = function() {
                        o.reset(), l().then(function() {
                            e.resolve()
                        }, function() {
                            c > n ? (n++, t = setTimeout(r, 1e3)) : e.reject()
                        })
                    };
                return r(), e
            },
            g = function(e) {
                var t;
                return t = "video" === e.type ? y(e) : m(e)
            },
            v = function(e, t) {
                var n = i.Deferred(),
                    r = e,
                    o = document.createElement("img");
                o.src = r, r = o.src, o = null;
                var s = a.encodeImageBase64(r);
                return s.done(function(e) {
                    var i = {};
                    i.type = "image", i.image = e, i.title = t || "", i.url = r, d(i).then(function() {
                        n.resolve()
                    }, function() {
                        n.reject()
                    })
                }), n
            },
            m = function(e) {
                var t = {};
                return t.type = "url", t.url = e.url, t.title = e.title, t.description = e.description || "", d(t)
            },
            y = function(e) {
                var t = i.Deferred(),
                    n = a.encodeImageBase64(e.thumbURL);
                return i.when(n).done(function(n) {
                    var r = {};
                    r.type = "video", r.url = e.url, r.title = e.title, r.description = e.description, r.thumb = n, d(r).then(function() {
                        t.resolve()
                    }, function() {
                        t.reject()
                    })
                }), t
            };
        t.exports = {
            sendData: g,
            sendVideo: y,
            sendImage: v,
            sendURL: m
        }
    }, {
        "./socket_client.js": 8,
        "./utils.js": 9,
        "./vent.js": 10,
        jquery: 1,
        underscore: 2
    }],
    8: [function(e, t, n) {
        "use strict";
        var r, i = e("jquery"),
            o = e("underscore"),
            a = [45112, 38567, 25613],
            s = a.slice(),
            u = "ws://localhost:$PORT$/viber",
            c = !1,
            l = [];
        l = [];
        var f = i.Deferred(),
            p = function() {
                if (s.length > 0) {
                    var e = s.shift(),
                        t = u.replace("$PORT$", e);
                    r = new WebSocket(t), r.onopen = g, r.onclose = v, r.onmessage = m
                } else f.reject()
            },
            d = function() {
                r && (r.close(), r = null), l = [], s = a.slice(), c = !1, f = i.Deferred()
            },
            h = function(e) {
                return c ? (e = JSON.stringify(e), void r.send(e)) : !1
            },
            g = function() {
                c = !0, f.resolve()
            },
            v = function(e) {
                1006 === e.code ? (r = null, p()) : 1e3 !== e.code && f.reject()
            },
            m = function(e) {
                var t = JSON.parse(e.data),
                    n = t.message;
                o.each(l[n], function(e) {
                    e(t)
                })
            },
            y = function(e, t) {
                l[e] || (l[e] = []), l[e].push(t)
            };
        t.exports = {
            connect: function() {
                return p(), f
            },
            sendData: h,
            addEventListener: y,
            reset: d,
            isConnected: function() {
                return c
            }
        }
    }, {
        jquery: 1,
        underscore: 2
    }],
    9: [function(e, t, n) {
        "use strict";
        var r = e("jquery"),
            i = e("underscore"),
            o = e("./background_bridge.js"),
            a = function(e, t) {
                t = t || "image/png";
                var n = r.Deferred(),
                    i = document.createElement("img");
                return i.addEventListener("load", function() {
                    var e = document.createElement("CANVAS"),
                        r = e.getContext("2d");
                    e.height = this.height, e.width = this.width, r.drawImage(this, 0, 0);
                    var i = e.toDataURL(t);
                    n.resolve(i), e = null, this.remove()
                }), i.setAttribute("src", e), document.body.appendChild(i), n
            },
            s = function(e) {
                var t = r.Deferred();
                return o.getInstalledApps().done(function(n) {
                    var r = i.find(n, function(t) {
                        return t.id === e
                    });
                    t.resolve(!i.isUndefined(r))
                }), t
            },
            u = function(e) {
                return 0 === e.attr("src").indexOf("data:") ? !1 : !0
            };
        t.exports = {
            encodeImageBase64: a,
            isAppInstalled: s,
            isApplicableImage: u
        }
    }, {
        "./background_bridge.js": 6,
        jquery: 1,
        underscore: 2
    }],
    10: [function(e, t, n) {
        "use strict";
        var r = {};
        r = function() {
            this.listeners = {}
        }, r.prototype = {
            addEventListener: function(e, t, n) {
                for (var r = [], i = arguments.length, o = 0; i > o; o++) r.push(arguments[o]);
                r = r.length > 3 ? r.splice(3, r.length - 1) : [], "undefined" != typeof this.listeners[e] ? this.listeners[e].push({
                    scope: n,
                    callback: t,
                    args: r
                }) : this.listeners[e] = [{
                    scope: n,
                    callback: t,
                    args: r
                }]
            },
            removeEventListener: function(e, t, n) {
                if ("undefined" != typeof this.listeners[e]) {
                    for (var r = this.listeners[e].length, i = [], o = 0; r > o; o++) {
                        var a = this.listeners[e][o];
                        a.scope === n && a.callback === t || i.push(a)
                    }
                    this.listeners[e] = i
                }
            },
            hasEventListener: function(e, t, n) {
                if ("undefined" != typeof this.listeners[e]) {
                    var r = this.listeners[e].length;
                    if (void 0 === t && void 0 === n) return r > 0;
                    for (var i = 0; r > i; i++) {
                        var o = this.listeners[e][i];
                        if ((n ? o.scope === n : !0) && o.callback === t) return !0
                    }
                }
                return !1
            },
            dispatch: function(e, t) {
                for (var n = 0, r = {
                        type: e,
                        target: t
                    }, i = [], o = arguments.length, a = 0; o > a; a++) i.push(arguments[a]);
                if (i = i.length > 2 ? i.splice(2, i.length - 1) : [], i = [r].concat(i), "undefined" != typeof this.listeners[e]) {
                    var s = this.listeners[e].length;
                    for (a = 0; s > a; a++) {
                        var u = this.listeners[e][a];
                        if (u && u.callback) {
                            var c = i.concat(u.args);
                            u.callback.apply(u.scope, c), n += 1
                        }
                    }
                }
            },
            getEvents: function() {
                var e = "";
                for (var t in this.listeners)
                    for (var n = this.listeners[t].length, r = 0; n > r; r++) {
                        var i = this.listeners[t][r];
                        e += i.scope && i.scope.className ? i.scope.className : "anonymous", e += " listen for '" + t + "'\n"
                    }
                return e
            }
        }, t.exports = new r
    }, {}]
}, {}, [3]);
