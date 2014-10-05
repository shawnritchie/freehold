(function() {
    function t(t, e) {
        var i;
        t || (t = {});
        for (i in e) t[i] = e[i];
        return t;
    }
    function e() {
        var t, e = arguments, i, s = {}, n = function(t, e) {
            var i, s;
            typeof t !== "object" && (t = {});
            for (s in e) e.hasOwnProperty(s) && (i = e[s], t[s] = i && typeof i === "object" && Object.prototype.toString.call(i) !== "[object Array]" && s !== "renderTo" && typeof i.nodeType !== "number" ? n(t[s] || {}, i) : e[s]);
            return t;
        };
        e[0] === !0 && (s = e[1], e = Array.prototype.slice.call(e, 2));
        i = e.length;
        for (t = 0; t < i; t++) s = n(s, e[t]);
        return s;
    }
    function i(t, e) {
        return parseInt(t, e || 10);
    }
    function s(t) {
        return typeof t === "string";
    }
    function n(t) {
        return t && typeof t === "object";
    }
    function o(t) {
        return Object.prototype.toString.call(t) === "[object Array]";
    }
    function r(t) {
        return typeof t === "number";
    }
    function a(t) {
        return G.log(t) / G.LN10;
    }
    function h(t) {
        return G.pow(10, t);
    }
    function l(t, e) {
        for (var i = t.length; i--; ) if (t[i] === e) {
            t.splice(i, 1);
            break;
        }
    }
    function c(t) {
        return t !== H && t !== null;
    }
    function d(t, e, i) {
        var o, r;
        if (s(e)) c(i) ? t.setAttribute(e, i) : t && t.getAttribute && (r = t.getAttribute(e)); else if (c(e) && n(e)) for (o in e) t.setAttribute(o, e[o]);
        return r;
    }
    function p(t) {
        return o(t) ? t : [ t ];
    }
    function u() {
        var t = arguments, e, i, s = t.length;
        for (e = 0; e < s; e++) if (i = t[e], i !== H && i !== null) return i;
    }
    function f(e, i) {
        if (J && !ne && i && i.opacity !== H) i.filter = "alpha(opacity=" + i.opacity * 100 + ")";
        t(e.style, i);
    }
    function g(e, i, s, n, o) {
        e = X.createElement(e);
        i && t(e, i);
        o && f(e, {
            padding: 0,
            border: we,
            margin: 0
        });
        s && f(e, s);
        n && n.appendChild(e);
        return e;
    }
    function m(e, i) {
        var s = function() {
            return H;
        };
        s.prototype = new e();
        t(s.prototype, i);
        return s;
    }
    function y(t, e, s, n) {
        var o = We.numberFormat, r = pe.lang, a = +t || 0, h = e === -1 ? (a.toString().split(".")[1] || "").length : isNaN(e = V(e)) ? 2 : e, l = s === void 0 ? r.decimalPoint : s, r = n === void 0 ? r.thousandsSep : n, c = a < 0 ? "-" : "", d = String(i(a = V(a).toFixed(h))), p = d.length > 3 ? d.length % 3 : 0;
        return o !== y ? o(t, e, s, n) : c + (p ? d.substr(0, p) + r : "") + d.substr(p).replace(/(\d{3})(?=\d)/g, "$1" + r) + (h ? l + V(a - d).toFixed(h).slice(2) : "");
    }
    function v(t, e) {
        return Array((e || 2) + 1 - String(t).length).join(0) + t;
    }
    function x(t, e, i) {
        var s = t[e];
        t[e] = function() {
            var t = Array.prototype.slice.call(arguments);
            t.unshift(s);
            return i.apply(this, t);
        };
    }
    function b(t, e) {
        for (var i = "{", s = !1, n, o, r, a, h, l = []; (i = t.indexOf(i)) !== -1; ) {
            n = t.slice(0, i);
            if (s) {
                o = n.split(":");
                r = o.shift().split(".");
                h = r.length;
                n = e;
                for (a = 0; a < h; a++) n = n[r[a]];
                if (o.length) o = o.join(":"), r = /\.([0-9])/, a = pe.lang, h = void 0, /f$/.test(o) ? (h = (h = o.match(r)) ? h[1] : -1, 
                n !== null && (n = y(n, h, a.decimalPoint, o.indexOf(",") > -1 ? a.thousandsSep : ""))) : n = ue(o, n);
            }
            l.push(n);
            t = t.slice(i + 1);
            i = (s = !s) ? "}" : "{";
        }
        l.push(t);
        return l.join("");
    }
    function k(t) {
        return G.pow(10, Y(G.log(t) / G.LN10));
    }
    function w(t, e, i, s) {
        var n, i = u(i, 1);
        n = t / i;
        e || (e = [ 1, 2, 2.5, 5, 10 ], s === !1 && (i === 1 ? e = [ 1, 2, 5, 10 ] : i <= .1 && (e = [ 1 / i ])));
        for (s = 0; s < e.length; s++) if (t = e[s], n <= (e[s] + (e[s + 1] || e[s])) / 2) break;
        t *= i;
        return t;
    }
    function S(t, e) {
        var i = t.length, s, n;
        for (n = 0; n < i; n++) t[n].ss_i = n;
        t.sort(function(t, i) {
            s = e(t, i);
            return s === 0 ? t.ss_i - i.ss_i : s;
        });
        for (n = 0; n < i; n++) delete t[n].ss_i;
    }
    function T(t) {
        for (var e = t.length, i = t[0]; e--; ) t[e] < i && (i = t[e]);
        return i;
    }
    function P(t) {
        for (var e = t.length, i = t[0]; e--; ) t[e] > i && (i = t[e]);
        return i;
    }
    function A(t, e) {
        for (var i in t) t[i] && t[i] !== e && t[i].destroy && t[i].destroy(), delete t[i];
    }
    function L(t) {
        de || (de = g(ke));
        t && de.appendChild(t);
        de.innerHTML = "";
    }
    function C(t) {
        return parseFloat(t.toPrecision(14));
    }
    function M(t, e) {
        fe = u(t, e.animation);
    }
    function I() {
        var t = pe.global.useUTC, e = t ? "getUTC" : "get", i = t ? "setUTC" : "set";
        Pe = pe.global.Date || window.Date;
        Le = (t && pe.global.timezoneOffset || 0) * 6e4;
        Ae = t ? Pe.UTC : function(t, e, i, s, n, o) {
            return new Pe(t, e, u(i, 1), u(s, 0), u(n, 0), u(o, 0)).getTime();
        };
        Ce = e + "Minutes";
        Me = e + "Hours";
        Ie = e + "Day";
        De = e + "Date";
        Be = e + "Month";
        Oe = e + "FullYear";
        ze = i + "Minutes";
        Re = i + "Hours";
        He = i + "Date";
        Xe = i + "Month";
        Ee = i + "FullYear";
    }
    function D() {}
    function B(t, e, i, s) {
        this.axis = t;
        this.pos = e;
        this.type = i || "";
        this.isNew = !0;
        !i && !s && this.addLabel();
    }
    function O() {
        this.init.apply(this, arguments);
    }
    function z() {
        this.init.apply(this, arguments);
    }
    function R(t, e, i, s, n) {
        var o = t.chart.inverted;
        this.axis = t;
        this.isNegative = i;
        this.options = e;
        this.x = s;
        this.total = null;
        this.points = {};
        this.stack = n;
        this.alignOptions = {
            align: e.align || (o ? i ? "left" : "right" : "center"),
            verticalAlign: e.verticalAlign || (o ? "middle" : i ? "bottom" : "top"),
            y: u(e.y, o ? 4 : i ? 14 : -6),
            x: u(e.x, o ? i ? -6 : 6 : 0)
        };
        this.textAlign = e.textAlign || (o ? i ? "right" : "left" : "center");
    }
    var H, X = document, E = window, G = Math, W = G.round, Y = G.floor, N = G.ceil, F = G.max, j = G.min, V = G.abs, _ = G.cos, U = G.sin, Z = G.PI, K = Z * 2 / 360, $ = navigator.userAgent, q = E.opera, J = /msie/i.test($) && !q, Q = X.documentMode === 8, te = /AppleWebKit/.test($), ee = /Firefox/.test($), ie = /(Mobile|Android|Windows Phone)/.test($), se = "http://www.w3.org/2000/svg", ne = !!X.createElementNS && !!X.createElementNS(se, "svg").createSVGRect, oe = ee && parseInt($.split("Firefox/")[1], 10) < 4, re = !ne && !J && !!X.createElement("canvas").getContext, ae, he, le = {}, ce = 0, de, pe, ue, fe, ge, me, ye, ve = function() {
        return H;
    }, xe = [], be = 0, ke = "div", we = "none", Se = /^[0-9]+$/, Te = "stroke-width", Pe, Ae, Le, Ce, Me, Ie, De, Be, Oe, ze, Re, He, Xe, Ee, Ge = {}, We;
    E.Highcharts ? ye(16, !0) : We = E.Highcharts = {};
    ue = function(e, i, s) {
        if (!c(i) || isNaN(i)) return "Invalid date";
        var e = u(e, "%Y-%m-%d %H:%M:%S"), n = new Pe(i - Le), o, r = n[Me](), a = n[Ie](), h = n[De](), l = n[Be](), d = n[Oe](), p = pe.lang, f = p.weekdays, n = t({
            a: f[a].substr(0, 3),
            A: f[a],
            d: v(h),
            e: h,
            b: p.shortMonths[l],
            B: p.months[l],
            m: v(l + 1),
            y: d.toString().substr(2, 2),
            Y: d,
            H: v(r),
            I: v(r % 12 || 12),
            l: r % 12 || 12,
            M: v(n[Ce]()),
            p: r < 12 ? "AM" : "PM",
            P: r < 12 ? "am" : "pm",
            S: v(n.getSeconds()),
            L: v(W(i % 1e3), 3)
        }, We.dateFormats);
        for (o in n) for (;e.indexOf("%" + o) !== -1; ) e = e.replace("%" + o, typeof n[o] === "function" ? n[o](i) : n[o]);
        return s ? e.substr(0, 1).toUpperCase() + e.substr(1) : e;
    };
    ye = function(t, e) {
        var i = "Highcharts error #" + t + ": www.highcharts.com/errors/" + t;
        if (e) throw i;
        E.console && console.log(i);
    };
    me = {
        millisecond: 1,
        second: 1e3,
        minute: 6e4,
        hour: 36e5,
        day: 864e5,
        week: 6048e5,
        month: 26784e5,
        year: 31556952e3
    };
    ge = {
        init: function(t, e, i) {
            var e = e || "", s = t.shift, n = e.indexOf("C") > -1, o = n ? 7 : 3, r, e = e.split(" "), i = [].concat(i), a, h, l = function(t) {
                for (r = t.length; r--; ) t[r] === "M" && t.splice(r + 1, 0, t[r + 1], t[r + 2], t[r + 1], t[r + 2]);
            };
            n && (l(e), l(i));
            t.isArea && (a = e.splice(e.length - 6, 6), h = i.splice(i.length - 6, 6));
            if (s <= i.length / o && e.length === i.length) for (;s--; ) i = [].concat(i).splice(0, o).concat(i);
            t.shift = 0;
            if (e.length) for (t = i.length; e.length < t; ) s = [].concat(e).splice(e.length - o, o), 
            n && (s[o - 6] = s[o - 2], s[o - 5] = s[o - 1]), e = e.concat(s);
            a && (e = e.concat(a), i = i.concat(h));
            return [ e, i ];
        },
        step: function(t, e, i, s) {
            var n = [], o = t.length;
            if (i === 1) n = s; else if (o === e.length && i < 1) for (;o--; ) s = parseFloat(t[o]), 
            n[o] = isNaN(s) ? t[o] : i * parseFloat(e[o] - s) + s; else n = e;
            return n;
        }
    };
    (function(e) {
        E.HighchartsAdapter = E.HighchartsAdapter || e && {
            init: function(t) {
                var i = e.fx;
                e.extend(e.easing, {
                    easeOutQuad: function(t, e, i, s, n) {
                        return -s * (e /= n) * (e - 2) + i;
                    }
                });
                e.each([ "cur", "_default", "width", "height", "opacity" ], function(t, s) {
                    var n = i.step, o;
                    s === "cur" ? n = i.prototype : s === "_default" && e.Tween && (n = e.Tween.propHooks[s], 
                    s = "set");
                    (o = n[s]) && (n[s] = function(e) {
                        var i, e = t ? e : this;
                        if (e.prop !== "align") return i = e.elem, i.attr ? i.attr(e.prop, s === "cur" ? H : e.now) : o.apply(this, arguments);
                    });
                });
                x(e.cssHooks.opacity, "get", function(t, e, i) {
                    return e.attr ? e.opacity || 0 : t.call(this, e, i);
                });
                this.addAnimSetter("d", function(e) {
                    var i = e.elem, s;
                    if (!e.started) s = t.init(i, i.d, i.toD), e.start = s[0], e.end = s[1], e.started = !0;
                    i.attr("d", t.step(e.start, e.end, e.pos, i.toD));
                });
                this.each = Array.prototype.forEach ? function(t, e) {
                    return Array.prototype.forEach.call(t, e);
                } : function(t, e) {
                    var i, s = t.length;
                    for (i = 0; i < s; i++) if (e.call(t[i], t[i], i, t) === !1) return i;
                };
                e.fn.highcharts = function() {
                    var t = "Chart", e = arguments, i, n;
                    if (this[0]) {
                        s(e[0]) && (t = e[0], e = Array.prototype.slice.call(e, 1));
                        i = e[0];
                        if (i !== H) i.chart = i.chart || {}, i.chart.renderTo = this[0], new We[t](i, e[1]), 
                        n = this;
                        i === H && (n = xe[d(this[0], "data-highcharts-chart")]);
                    }
                    return n;
                };
            },
            addAnimSetter: function(t, i) {
                e.Tween ? e.Tween.propHooks[t] = {
                    set: i
                } : e.fx.step[t] = i;
            },
            getScript: e.getScript,
            inArray: e.inArray,
            adapterRun: function(t, i) {
                return e(t)[i]();
            },
            grep: e.grep,
            map: function(t, e) {
                for (var i = [], s = 0, n = t.length; s < n; s++) i[s] = e.call(t[s], t[s], s, t);
                return i;
            },
            offset: function(t) {
                return e(t).offset();
            },
            addEvent: function(t, i, s) {
                e(t).bind(i, s);
            },
            removeEvent: function(t, i, s) {
                var n = X.removeEventListener ? "removeEventListener" : "detachEvent";
                X[n] && t && !t[n] && (t[n] = function() {});
                e(t).unbind(i, s);
            },
            fireEvent: function(i, s, n, o) {
                var r = e.Event(s), a = "detached" + s, h;
                !J && n && (delete n.layerX, delete n.layerY, delete n.returnValue);
                t(r, n);
                i[s] && (i[a] = i[s], i[s] = null);
                e.each([ "preventDefault", "stopPropagation" ], function(t, e) {
                    var i = r[e];
                    r[e] = function() {
                        try {
                            i.call(r);
                        } catch (t) {
                            e === "preventDefault" && (h = !0);
                        }
                    };
                });
                e(i).trigger(r);
                i[a] && (i[s] = i[a], i[a] = null);
                o && !r.isDefaultPrevented() && !h && o(r);
            },
            washMouseEvent: function(t) {
                var e = t.originalEvent || t;
                if (e.pageX === H) e.pageX = t.pageX, e.pageY = t.pageY;
                return e;
            },
            animate: function(t, i, s) {
                var n = e(t);
                if (!t.style) t.style = {};
                if (i.d) t.toD = i.d, i.d = 1;
                n.stop();
                i.opacity !== H && t.attr && (i.opacity += "px");
                t.hasAnim = 1;
                n.animate(i, s);
            },
            stop: function(t) {
                t.hasAnim && e(t).stop();
            }
        };
    })(E.jQuery);
    var Ye = E.HighchartsAdapter, Ne = Ye || {};
    Ye && Ye.init.call(Ye, ge);
    var Fe = Ne.adapterRun, je = Ne.getScript, Ve = Ne.inArray, _e = Ne.each, Ue = Ne.grep, Ze = Ne.offset, Ke = Ne.map, $e = Ne.addEvent, qe = Ne.removeEvent, Je = Ne.fireEvent, Qe = Ne.washMouseEvent, ti = Ne.animate, ei = Ne.stop, Ne = {
        enabled: !0,
        x: 0,
        y: 15,
        style: {
            color: "#606060",
            cursor: "default",
            fontSize: "11px"
        }
    };
    pe = {
        colors: "#7cb5ec,#434348,#90ed7d,#f7a35c,#8085e9,#f15c80,#e4d354,#8085e8,#8d4653,#91e8e1".split(","),
        symbols: [ "circle", "diamond", "square", "triangle", "triangle-down" ],
        lang: {
            loading: "Loading...",
            months: "January,February,March,April,May,June,July,August,September,October,November,December".split(","),
            shortMonths: "Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec".split(","),
            weekdays: "Sunday,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday".split(","),
            decimalPoint: ".",
            numericSymbols: "k,M,G,T,P,E".split(","),
            resetZoom: "Reset zoom",
            resetZoomTitle: "Reset zoom level 1:1",
            thousandsSep: ","
        },
        global: {
            useUTC: !0,
            canvasToolsURL: "http://code.highcharts.com/4.0.4/modules/canvas-tools.js",
            VMLRadialGradientURL: "http://code.highcharts.com/4.0.4/gfx/vml-radial-gradient.png"
        },
        chart: {
            borderColor: "#4572A7",
            borderRadius: 0,
            defaultSeriesType: "line",
            ignoreHiddenSeries: !0,
            spacing: [ 10, 10, 15, 10 ],
            backgroundColor: "#FFFFFF",
            plotBorderColor: "#C0C0C0",
            resetZoomButton: {
                theme: {
                    zIndex: 20
                },
                position: {
                    align: "right",
                    x: -10,
                    y: 10
                }
            }
        },
        title: {
            text: "Chart title",
            align: "center",
            margin: 15,
            style: {
                color: "#333333",
                fontSize: "18px"
            }
        },
        subtitle: {
            text: "",
            align: "center",
            style: {
                color: "#555555"
            }
        },
        plotOptions: {
            line: {
                allowPointSelect: !1,
                showCheckbox: !1,
                animation: {
                    duration: 1e3
                },
                events: {},
                lineWidth: 2,
                marker: {
                    lineWidth: 0,
                    radius: 4,
                    lineColor: "#FFFFFF",
                    states: {
                        hover: {
                            enabled: !0,
                            lineWidthPlus: 1,
                            radiusPlus: 2
                        },
                        select: {
                            fillColor: "#FFFFFF",
                            lineColor: "#000000",
                            lineWidth: 2
                        }
                    }
                },
                point: {
                    events: {}
                },
                dataLabels: e(Ne, {
                    align: "center",
                    enabled: !1,
                    formatter: function() {
                        return this.y === null ? "" : y(this.y, -1);
                    },
                    verticalAlign: "bottom",
                    y: 0
                }),
                cropThreshold: 300,
                pointRange: 0,
                states: {
                    hover: {
                        lineWidthPlus: 1,
                        marker: {},
                        halo: {
                            size: 10,
                            opacity: .25
                        }
                    },
                    select: {
                        marker: {}
                    }
                },
                stickyTracking: !0,
                turboThreshold: 1e3
            }
        },
        labels: {
            style: {
                position: "absolute",
                color: "#3E576F"
            }
        },
        legend: {
            enabled: !0,
            align: "center",
            layout: "horizontal",
            labelFormatter: function() {
                return this.name;
            },
            borderColor: "#909090",
            borderRadius: 0,
            navigation: {
                activeColor: "#274b6d",
                inactiveColor: "#CCC"
            },
            shadow: !1,
            itemStyle: {
                color: "#333333",
                fontSize: "12px",
                fontWeight: "bold"
            },
            itemHoverStyle: {
                color: "#000"
            },
            itemHiddenStyle: {
                color: "#CCC"
            },
            itemCheckboxStyle: {
                position: "absolute",
                width: "13px",
                height: "13px"
            },
            symbolPadding: 5,
            verticalAlign: "bottom",
            x: 0,
            y: 0,
            title: {
                style: {
                    fontWeight: "bold"
                }
            }
        },
        loading: {
            labelStyle: {
                fontWeight: "bold",
                position: "relative",
                top: "45%"
            },
            style: {
                position: "absolute",
                backgroundColor: "white",
                opacity: .5,
                textAlign: "center"
            }
        },
        tooltip: {
            enabled: !0,
            animation: ne,
            backgroundColor: "rgba(249, 249, 249, .85)",
            borderWidth: 1,
            borderRadius: 3,
            dateTimeLabelFormats: {
                millisecond: "%A, %b %e, %H:%M:%S.%L",
                second: "%A, %b %e, %H:%M:%S",
                minute: "%A, %b %e, %H:%M",
                hour: "%A, %b %e, %H:%M",
                day: "%A, %b %e, %Y",
                week: "Week from %A, %b %e, %Y",
                month: "%B %Y",
                year: "%Y"
            },
            headerFormat: '<span style="font-size: 10px">{point.key}</span><br/>',
            pointFormat: '<span style="color:{series.color}">â—</span> {series.name}: <b>{point.y}</b><br/>',
            shadow: !0,
            snap: ie ? 25 : 10,
            style: {
                color: "#333333",
                cursor: "default",
                fontSize: "12px",
                padding: "8px",
                whiteSpace: "nowrap"
            }
        },
        credits: {
            enabled: !0,
            text: "Highcharts.com",
            href: "http://www.highcharts.com",
            position: {
                align: "right",
                x: -10,
                verticalAlign: "bottom",
                y: -5
            },
            style: {
                cursor: "pointer",
                color: "#909090",
                fontSize: "9px"
            }
        }
    };
    var ii = pe.plotOptions, Ye = ii.line;
    I();
    var si = /rgba\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]?(?:\.[0-9]+)?)\s*\)/, ni = /#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/, oi = /rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/, ri = function(t) {
        var s = [], n, o;
        (function(t) {
            t && t.stops ? o = Ke(t.stops, function(t) {
                return ri(t[1]);
            }) : (n = si.exec(t)) ? s = [ i(n[1]), i(n[2]), i(n[3]), parseFloat(n[4], 10) ] : (n = ni.exec(t)) ? s = [ i(n[1], 16), i(n[2], 16), i(n[3], 16), 1 ] : (n = oi.exec(t)) && (s = [ i(n[1]), i(n[2]), i(n[3]), 1 ]);
        })(t);
        return {
            get: function(i) {
                var n;
                o ? (n = e(t), n.stops = [].concat(n.stops), _e(o, function(t, e) {
                    n.stops[e] = [ n.stops[e][0], t.get(i) ];
                })) : n = s && !isNaN(s[0]) ? i === "rgb" ? "rgb(" + s[0] + "," + s[1] + "," + s[2] + ")" : i === "a" ? s[3] : "rgba(" + s.join(",") + ")" : t;
                return n;
            },
            brighten: function(t) {
                if (o) _e(o, function(e) {
                    e.brighten(t);
                }); else if (r(t) && t !== 0) {
                    var e;
                    for (e = 0; e < 3; e++) s[e] += i(t * 255), s[e] < 0 && (s[e] = 0), s[e] > 255 && (s[e] = 255);
                }
                return this;
            },
            rgba: s,
            setOpacity: function(t) {
                s[3] = t;
                return this;
            }
        };
    };
    D.prototype = {
        opacity: 1,
        textProps: "fontSize,fontWeight,fontFamily,color,lineHeight,width,textDecoration,textShadow,HcTextStroke".split(","),
        init: function(t, e) {
            this.element = e === "span" ? g(e) : X.createElementNS(se, e);
            this.renderer = t;
        },
        animate: function(t, i, s) {
            i = u(i, fe, !0);
            ei(this);
            if (i) {
                i = e(i, {});
                if (s) i.complete = s;
                ti(this, t, i);
            } else this.attr(t), s && s();
            return this;
        },
        colorGradient: function(t, i, s) {
            var n = this.renderer, r, a, h, l, d, p, u, f, g, m, y = [];
            t.linearGradient ? a = "linearGradient" : t.radialGradient && (a = "radialGradient");
            if (a) {
                h = t[a];
                l = n.gradients;
                p = t.stops;
                g = s.radialReference;
                o(h) && (t[a] = h = {
                    x1: h[0],
                    y1: h[1],
                    x2: h[2],
                    y2: h[3],
                    gradientUnits: "userSpaceOnUse"
                });
                a === "radialGradient" && g && !c(h.gradientUnits) && (h = e(h, {
                    cx: g[0] - g[2] / 2 + h.cx * g[2],
                    cy: g[1] - g[2] / 2 + h.cy * g[2],
                    r: h.r * g[2],
                    gradientUnits: "userSpaceOnUse"
                }));
                for (m in h) m !== "id" && y.push(m, h[m]);
                for (m in p) y.push(p[m]);
                y = y.join(",");
                l[y] ? t = l[y].attr("id") : (h.id = t = "highcharts-" + ce++, l[y] = d = n.createElement(a).attr(h).add(n.defs), 
                d.stops = [], _e(p, function(t) {
                    t[1].indexOf("rgba") === 0 ? (r = ri(t[1]), u = r.get("rgb"), f = r.get("a")) : (u = t[1], 
                    f = 1);
                    t = n.createElement("stop").attr({
                        offset: t[0],
                        "stop-color": u,
                        "stop-opacity": f
                    }).add(d);
                    d.stops.push(t);
                }));
                s.setAttribute(i, "url(" + n.url + "#" + t + ")");
            }
        },
        attr: function(t, e) {
            var i, s, n = this.element, o, r = this, a;
            typeof t === "string" && e !== H && (i = t, t = {}, t[i] = e);
            if (typeof t === "string") r = (this[t + "Getter"] || this._defaultGetter).call(this, t, n); else {
                for (i in t) {
                    s = t[i];
                    a = !1;
                    this.symbolName && /^(x|y|width|height|r|start|end|innerR|anchorX|anchorY)/.test(i) && (o || (this.symbolAttr(t), 
                    o = !0), a = !0);
                    if (this.rotation && (i === "x" || i === "y")) this.doTransform = !0;
                    a || (this[i + "Setter"] || this._defaultSetter).call(this, s, i, n);
                    this.shadows && /^(width|height|visibility|x|y|d|transform|cx|cy|r)$/.test(i) && this.updateShadows(i, s);
                }
                if (this.doTransform) this.updateTransform(), this.doTransform = !1;
            }
            return r;
        },
        updateShadows: function(t, e) {
            for (var i = this.shadows, s = i.length; s--; ) i[s].setAttribute(t, t === "height" ? F(e - (i[s].cutHeight || 0), 0) : t === "d" ? this.d : e);
        },
        addClass: function(t) {
            var e = this.element, i = d(e, "class") || "";
            i.indexOf(t) === -1 && d(e, "class", i + " " + t);
            return this;
        },
        symbolAttr: function(t) {
            var e = this;
            _e("x,y,r,start,end,width,height,innerR,anchorX,anchorY".split(","), function(i) {
                e[i] = u(t[i], e[i]);
            });
            e.attr({
                d: e.renderer.symbols[e.symbolName](e.x, e.y, e.width, e.height, e)
            });
        },
        clip: function(t) {
            return this.attr("clip-path", t ? "url(" + this.renderer.url + "#" + t.id + ")" : we);
        },
        crisp: function(t) {
            var e, i = {}, s, n = t.strokeWidth || this.strokeWidth || 0;
            s = W(n) % 2 / 2;
            t.x = Y(t.x || this.x || 0) + s;
            t.y = Y(t.y || this.y || 0) + s;
            t.width = Y((t.width || this.width || 0) - 2 * s);
            t.height = Y((t.height || this.height || 0) - 2 * s);
            t.strokeWidth = n;
            for (e in t) this[e] !== t[e] && (this[e] = i[e] = t[e]);
            return i;
        },
        css: function(e) {
            var s = this.styles, n = {}, o = this.element, r, a, h = "";
            r = !s;
            if (e && e.color) e.fill = e.color;
            if (s) for (a in e) e[a] !== s[a] && (n[a] = e[a], r = !0);
            if (r) {
                r = this.textWidth = e && e.width && o.nodeName.toLowerCase() === "text" && i(e.width);
                s && (e = t(s, n));
                this.styles = e;
                r && (re || !ne && this.renderer.forExport) && delete e.width;
                if (J && !ne) f(this.element, e); else {
                    s = function(t, e) {
                        return "-" + e.toLowerCase();
                    };
                    for (a in e) h += a.replace(/([A-Z])/g, s) + ":" + e[a] + ";";
                    d(o, "style", h);
                }
                r && this.added && this.renderer.buildText(this);
            }
            return this;
        },
        on: function(t, e) {
            var i = this, s = i.element;
            he && t === "click" ? (s.ontouchstart = function(t) {
                i.touchEventFired = Pe.now();
                t.preventDefault();
                e.call(s, t);
            }, s.onclick = function(t) {
                ($.indexOf("Android") === -1 || Pe.now() - (i.touchEventFired || 0) > 1100) && e.call(s, t);
            }) : s["on" + t] = e;
            return this;
        },
        setRadialReference: function(t) {
            this.element.radialReference = t;
            return this;
        },
        translate: function(t, e) {
            return this.attr({
                translateX: t,
                translateY: e
            });
        },
        invert: function() {
            this.inverted = !0;
            this.updateTransform();
            return this;
        },
        updateTransform: function() {
            var t = this.translateX || 0, e = this.translateY || 0, i = this.scaleX, s = this.scaleY, n = this.inverted, o = this.rotation, r = this.element;
            n && (t += this.attr("width"), e += this.attr("height"));
            t = [ "translate(" + t + "," + e + ")" ];
            n ? t.push("rotate(90) scale(-1,1)") : o && t.push("rotate(" + o + " " + (r.getAttribute("x") || 0) + " " + (r.getAttribute("y") || 0) + ")");
            (c(i) || c(s)) && t.push("scale(" + u(i, 1) + " " + u(s, 1) + ")");
            t.length && r.setAttribute("transform", t.join(" "));
        },
        toFront: function() {
            var t = this.element;
            t.parentNode.appendChild(t);
            return this;
        },
        align: function(t, e, i) {
            var n, o, r, a, h = {};
            o = this.renderer;
            r = o.alignedObjects;
            if (t) {
                if (this.alignOptions = t, this.alignByTranslate = e, !i || s(i)) this.alignTo = n = i || "renderer", 
                l(r, this), r.push(this), i = null;
            } else t = this.alignOptions, e = this.alignByTranslate, n = this.alignTo;
            i = u(i, o[n], o);
            n = t.align;
            o = t.verticalAlign;
            r = (i.x || 0) + (t.x || 0);
            a = (i.y || 0) + (t.y || 0);
            if (n === "right" || n === "center") r += (i.width - (t.width || 0)) / {
                right: 1,
                center: 2
            }[n];
            h[e ? "translateX" : "x"] = W(r);
            if (o === "bottom" || o === "middle") a += (i.height - (t.height || 0)) / ({
                bottom: 1,
                middle: 2
            }[o] || 1);
            h[e ? "translateY" : "y"] = W(a);
            this[this.placed ? "animate" : "attr"](h);
            this.placed = !0;
            this.alignAttr = h;
            return this;
        },
        getBBox: function() {
            var e = this.bBox, i = this.renderer, s, n, o = this.rotation;
            s = this.element;
            var r = this.styles, a = o * K;
            n = this.textStr;
            var h;
            if (n === "" || Se.test(n)) h = "num." + n.toString().length + (r ? "|" + r.fontSize + "|" + r.fontFamily : "");
            h && (e = i.cache[h]);
            if (!e) {
                if (s.namespaceURI === se || i.forExport) {
                    try {
                        e = s.getBBox ? t({}, s.getBBox()) : {
                            width: s.offsetWidth,
                            height: s.offsetHeight
                        };
                    } catch (l) {}
                    if (!e || e.width < 0) e = {
                        width: 0,
                        height: 0
                    };
                } else e = this.htmlGetBBox();
                if (i.isSVG) {
                    s = e.width;
                    n = e.height;
                    if (J && r && r.fontSize === "11px" && n.toPrecision(3) === "16.9") e.height = n = 14;
                    if (o) e.width = V(n * U(a)) + V(s * _(a)), e.height = V(n * _(a)) + V(s * U(a));
                }
                this.bBox = e;
                h && (i.cache[h] = e);
            }
            return e;
        },
        show: function(t) {
            t && this.element.namespaceURI === se ? this.element.removeAttribute("visibility") : this.attr({
                visibility: t ? "inherit" : "visible"
            });
            return this;
        },
        hide: function() {
            return this.attr({
                visibility: "hidden"
            });
        },
        fadeOut: function(t) {
            var e = this;
            e.animate({
                opacity: 0
            }, {
                duration: t || 150,
                complete: function() {
                    e.attr({
                        y: -9999
                    });
                }
            });
        },
        add: function(t) {
            var e = this.renderer, s = t || e, n = s.element || e.box, o = this.element, r = this.zIndex, a, h;
            if (t) this.parentGroup = t;
            this.parentInverted = t && t.inverted;
            this.textStr !== void 0 && e.buildText(this);
            if (r) s.handleZ = !0, r = i(r);
            if (s.handleZ) {
                t = n.childNodes;
                for (a = 0; a < t.length; a++) if (e = t[a], s = d(e, "zIndex"), e !== o && (i(s) > r || !c(r) && c(s))) {
                    n.insertBefore(o, e);
                    h = !0;
                    break;
                }
            }
            h || n.appendChild(o);
            this.added = !0;
            if (this.onAdd) this.onAdd();
            return this;
        },
        safeRemoveChild: function(t) {
            var e = t.parentNode;
            e && e.removeChild(t);
        },
        destroy: function() {
            var t = this, e = t.element || {}, i = t.shadows, s = t.renderer.isSVG && e.nodeName === "SPAN" && t.parentGroup, n, o;
            e.onclick = e.onmouseout = e.onmouseover = e.onmousemove = e.point = null;
            ei(t);
            if (t.clipPath) t.clipPath = t.clipPath.destroy();
            if (t.stops) {
                for (o = 0; o < t.stops.length; o++) t.stops[o] = t.stops[o].destroy();
                t.stops = null;
            }
            t.safeRemoveChild(e);
            for (i && _e(i, function(e) {
                t.safeRemoveChild(e);
            }); s && s.div && s.div.childNodes.length === 0; ) e = s.parentGroup, t.safeRemoveChild(s.div), 
            delete s.div, s = e;
            t.alignTo && l(t.renderer.alignedObjects, t);
            for (n in t) delete t[n];
            return null;
        },
        shadow: function(t, e, i) {
            var s = [], n, o, r = this.element, a, h, l, c;
            if (t) {
                h = u(t.width, 3);
                l = (t.opacity || .15) / h;
                c = this.parentInverted ? "(-1,-1)" : "(" + u(t.offsetX, 1) + ", " + u(t.offsetY, 1) + ")";
                for (n = 1; n <= h; n++) {
                    o = r.cloneNode(0);
                    a = h * 2 + 1 - 2 * n;
                    d(o, {
                        isShadow: "true",
                        stroke: t.color || "black",
                        "stroke-opacity": l * n,
                        "stroke-width": a,
                        transform: "translate" + c,
                        fill: we
                    });
                    if (i) d(o, "height", F(d(o, "height") - a, 0)), o.cutHeight = a;
                    e ? e.element.appendChild(o) : r.parentNode.insertBefore(o, r);
                    s.push(o);
                }
                this.shadows = s;
            }
            return this;
        },
        xGetter: function(t) {
            this.element.nodeName === "circle" && (t = {
                x: "cx",
                y: "cy"
            }[t] || t);
            return this._defaultGetter(t);
        },
        _defaultGetter: function(t) {
            t = u(this[t], this.element ? this.element.getAttribute(t) : null, 0);
            /^[\-0-9\.]+$/.test(t) && (t = parseFloat(t));
            return t;
        },
        dSetter: function(t, e, i) {
            t && t.join && (t = t.join(" "));
            /(NaN| {2}|^$)/.test(t) && (t = "M 0 0");
            i.setAttribute(e, t);
            this[e] = t;
        },
        dashstyleSetter: function(t) {
            var e;
            if (t = t && t.toLowerCase()) {
                t = t.replace("shortdashdotdot", "3,1,1,1,1,1,").replace("shortdashdot", "3,1,1,1").replace("shortdot", "1,1,").replace("shortdash", "3,1,").replace("longdash", "8,3,").replace(/dot/g, "1,3,").replace("dash", "4,3,").replace(/,$/, "").split(",");
                for (e = t.length; e--; ) t[e] = i(t[e]) * this["stroke-width"];
                t = t.join(",").replace("NaN", "none");
                this.element.setAttribute("stroke-dasharray", t);
            }
        },
        alignSetter: function(t) {
            this.element.setAttribute("text-anchor", {
                left: "start",
                center: "middle",
                right: "end"
            }[t]);
        },
        opacitySetter: function(t, e, i) {
            this[e] = t;
            i.setAttribute(e, t);
        },
        titleSetter: function(t) {
            var e = this.element.getElementsByTagName("title")[0];
            e || (e = X.createElementNS(se, "title"), this.element.appendChild(e));
            e.textContent = u(t, "").replace(/<[^>]*>/g, "");
        },
        textSetter: function(t) {
            if (t !== this.textStr) delete this.bBox, this.textStr = t, this.added && this.renderer.buildText(this);
        },
        fillSetter: function(t, e, i) {
            typeof t === "string" ? i.setAttribute(e, t) : t && this.colorGradient(t, e, i);
        },
        zIndexSetter: function(t, e, i) {
            i.setAttribute(e, t);
            this[e] = t;
        },
        _defaultSetter: function(t, e, i) {
            i.setAttribute(e, t);
        }
    };
    D.prototype.yGetter = D.prototype.xGetter;
    D.prototype.translateXSetter = D.prototype.translateYSetter = D.prototype.rotationSetter = D.prototype.verticalAlignSetter = D.prototype.scaleXSetter = D.prototype.scaleYSetter = function(t, e) {
        this[e] = t;
        this.doTransform = !0;
    };
    D.prototype["stroke-widthSetter"] = D.prototype.strokeSetter = function(t, e, i) {
        this[e] = t;
        if (this.stroke && this["stroke-width"]) this.strokeWidth = this["stroke-width"], 
        D.prototype.fillSetter.call(this, this.stroke, "stroke", i), i.setAttribute("stroke-width", this["stroke-width"]), 
        this.hasStroke = !0; else if (e === "stroke-width" && t === 0 && this.hasStroke) i.removeAttribute("stroke"), 
        this.hasStroke = !1;
    };
    var ai = function() {
        this.init.apply(this, arguments);
    };
    ai.prototype = {
        Element: D,
        init: function(t, e, i, s, n) {
            var o = location, r, s = this.createElement("svg").attr({
                version: "1.1"
            }).css(this.getStyle(s));
            r = s.element;
            t.appendChild(r);
            t.innerHTML.indexOf("xmlns") === -1 && d(r, "xmlns", se);
            this.isSVG = !0;
            this.box = r;
            this.boxWrapper = s;
            this.alignedObjects = [];
            this.url = (ee || te) && X.getElementsByTagName("base").length ? o.href.replace(/#.*?$/, "").replace(/([\('\)])/g, "\\$1").replace(/ /g, "%20") : "";
            this.createElement("desc").add().element.appendChild(X.createTextNode("Created with Highcharts 4.0.4"));
            this.defs = this.createElement("defs").add();
            this.forExport = n;
            this.gradients = {};
            this.cache = {};
            this.setSize(e, i, !1);
            var a;
            if (ee && t.getBoundingClientRect) this.subPixelFix = e = function() {
                f(t, {
                    left: 0,
                    top: 0
                });
                a = t.getBoundingClientRect();
                f(t, {
                    left: N(a.left) - a.left + "px",
                    top: N(a.top) - a.top + "px"
                });
            }, e(), $e(E, "resize", e);
        },
        getStyle: function(e) {
            return this.style = t({
                fontFamily: '"Lucida Grande", "Lucida Sans Unicode", Arial, Helvetica, sans-serif',
                fontSize: "12px"
            }, e);
        },
        isHidden: function() {
            return !this.boxWrapper.getBBox().width;
        },
        destroy: function() {
            var t = this.defs;
            this.box = null;
            this.boxWrapper = this.boxWrapper.destroy();
            A(this.gradients || {});
            this.gradients = null;
            if (t) this.defs = t.destroy();
            this.subPixelFix && qe(E, "resize", this.subPixelFix);
            return this.alignedObjects = null;
        },
        createElement: function(t) {
            var e = new this.Element();
            e.init(this, t);
            return e;
        },
        draw: function() {},
        buildText: function(t) {
            for (var e = t.element, s = this, n = s.forExport, o = u(t.textStr, "").toString(), r = o.indexOf("<") !== -1, a = e.childNodes, h, l, c = d(e, "x"), p = t.styles, g = t.textWidth, m = p && p.lineHeight, y = p && p.HcTextStroke, v = a.length, x = function(t) {
                return m ? i(m) : s.fontMetrics(/(px|em)$/.test(t && t.style.fontSize) ? t.style.fontSize : p && p.fontSize || s.style.fontSize || 12, t).h;
            }; v--; ) e.removeChild(a[v]);
            !r && !y && o.indexOf(" ") === -1 ? e.appendChild(X.createTextNode(o)) : (h = /<.*style="([^"]+)".*>/, 
            l = /<.*href="(http[^"]+)".*>/, g && !t.added && this.box.appendChild(e), o = r ? o.replace(/<(b|strong)>/g, '<span style="font-weight:bold">').replace(/<(i|em)>/g, '<span style="font-style:italic">').replace(/<a/g, "<span").replace(/<\/(b|strong|i|em|a)>/g, "</span>").split(/<br.*?>/g) : [ o ], 
            o[o.length - 1] === "" && o.pop(), _e(o, function(i, o) {
                var r, a = 0, i = i.replace(/<span/g, "|||<span").replace(/<\/span>/g, "</span>|||");
                r = i.split("|||");
                _e(r, function(i) {
                    if (i !== "" || r.length === 1) {
                        var u = {}, m = X.createElementNS(se, "tspan"), y;
                        h.test(i) && (y = i.match(h)[1].replace(/(;| |^)color([ :])/, "$1fill$2"), d(m, "style", y));
                        l.test(i) && !n && (d(m, "onclick", 'location.href="' + i.match(l)[1] + '"'), f(m, {
                            cursor: "pointer"
                        }));
                        i = (i.replace(/<(.|\n)*?>/g, "") || " ").replace(/&lt;/g, "<").replace(/&gt;/g, ">");
                        if (i !== " ") {
                            m.appendChild(X.createTextNode(i));
                            if (a) u.dx = 0; else if (o && c !== null) u.x = c;
                            d(m, u);
                            e.appendChild(m);
                            !a && o && (!ne && n && f(m, {
                                display: "block"
                            }), d(m, "dy", x(m)));
                            if (g) for (var i = i.replace(/([^\^])-/g, "$1- ").split(" "), u = r.length > 1 || i.length > 1 && p.whiteSpace !== "nowrap", v, b, k = p.HcHeight, w = [], S = x(m), T = 1; u && (i.length || w.length); ) delete t.bBox, 
                            v = t.getBBox(), b = v.width, !ne && s.forExport && (b = s.measureSpanWidth(m.firstChild.data, t.styles)), 
                            v = b > g, !v || i.length === 1 ? (i = w, w = [], i.length && (T++, k && T * S > k ? (i = [ "..." ], 
                            t.attr("title", t.textStr)) : (m = X.createElementNS(se, "tspan"), d(m, {
                                dy: S,
                                x: c
                            }), y && d(m, "style", y), e.appendChild(m))), b > g && (g = b)) : (m.removeChild(m.firstChild), 
                            w.unshift(i.pop())), i.length && m.appendChild(X.createTextNode(i.join(" ").replace(/- /g, "-")));
                            a++;
                        }
                    }
                });
            }));
        },
        button: function(i, s, n, o, r, a, h, l, c) {
            var d = this.label(i, s, n, c, null, null, null, null, "button"), p = 0, u, f, g, m, y, v, i = {
                x1: 0,
                y1: 0,
                x2: 0,
                y2: 1
            }, r = e({
                "stroke-width": 1,
                stroke: "#CCCCCC",
                fill: {
                    linearGradient: i,
                    stops: [ [ 0, "#FEFEFE" ], [ 1, "#F6F6F6" ] ]
                },
                r: 2,
                padding: 5,
                style: {
                    color: "black"
                }
            }, r);
            g = r.style;
            delete r.style;
            a = e(r, {
                stroke: "#68A",
                fill: {
                    linearGradient: i,
                    stops: [ [ 0, "#FFF" ], [ 1, "#ACF" ] ]
                }
            }, a);
            m = a.style;
            delete a.style;
            h = e(r, {
                stroke: "#68A",
                fill: {
                    linearGradient: i,
                    stops: [ [ 0, "#9BD" ], [ 1, "#CDF" ] ]
                }
            }, h);
            y = h.style;
            delete h.style;
            l = e(r, {
                style: {
                    color: "#CCC"
                }
            }, l);
            v = l.style;
            delete l.style;
            $e(d.element, J ? "mouseover" : "mouseenter", function() {
                p !== 3 && d.attr(a).css(m);
            });
            $e(d.element, J ? "mouseout" : "mouseleave", function() {
                p !== 3 && (u = [ r, a, h ][p], f = [ g, m, y ][p], d.attr(u).css(f));
            });
            d.setState = function(t) {
                (d.state = p = t) ? t === 2 ? d.attr(h).css(y) : t === 3 && d.attr(l).css(v) : d.attr(r).css(g);
            };
            return d.on("click", function() {
                p !== 3 && o.call(d);
            }).attr(r).css(t({
                cursor: "default"
            }, g));
        },
        crispLine: function(t, e) {
            t[1] === t[4] && (t[1] = t[4] = W(t[1]) - e % 2 / 2);
            t[2] === t[5] && (t[2] = t[5] = W(t[2]) + e % 2 / 2);
            return t;
        },
        path: function(e) {
            var i = {
                fill: we
            };
            o(e) ? i.d = e : n(e) && t(i, e);
            return this.createElement("path").attr(i);
        },
        circle: function(t, e, i) {
            t = n(t) ? t : {
                x: t,
                y: e,
                r: i
            };
            e = this.createElement("circle");
            e.xSetter = function(t) {
                this.element.setAttribute("cx", t);
            };
            e.ySetter = function(t) {
                this.element.setAttribute("cy", t);
            };
            return e.attr(t);
        },
        arc: function(t, e, i, s, o, r) {
            if (n(t)) e = t.y, i = t.r, s = t.innerR, o = t.start, r = t.end, t = t.x;
            t = this.symbol("arc", t || 0, e || 0, i || 0, i || 0, {
                innerR: s || 0,
                start: o || 0,
                end: r || 0
            });
            t.r = i;
            return t;
        },
        rect: function(t, e, i, s, o, r) {
            var o = n(t) ? t.r : o, a = this.createElement("rect"), t = n(t) ? t : t === H ? {} : {
                x: t,
                y: e,
                width: F(i, 0),
                height: F(s, 0)
            };
            if (r !== H) t.strokeWidth = r, t = a.crisp(t);
            if (o) t.r = o;
            a.rSetter = function(t) {
                d(this.element, {
                    rx: t,
                    ry: t
                });
            };
            return a.attr(t);
        },
        setSize: function(t, e, i) {
            var s = this.alignedObjects, n = s.length;
            this.width = t;
            this.height = e;
            for (this.boxWrapper[u(i, !0) ? "animate" : "attr"]({
                width: t,
                height: e
            }); n--; ) s[n].align();
        },
        g: function(t) {
            var e = this.createElement("g");
            return c(t) ? e.attr({
                "class": "highcharts-" + t
            }) : e;
        },
        image: function(e, i, s, n, o) {
            var r = {
                preserveAspectRatio: we
            };
            arguments.length > 1 && t(r, {
                x: i,
                y: s,
                width: n,
                height: o
            });
            r = this.createElement("image").attr(r);
            r.element.setAttributeNS ? r.element.setAttributeNS("http://www.w3.org/1999/xlink", "href", e) : r.element.setAttribute("hc-svg-href", e);
            return r;
        },
        symbol: function(e, i, s, n, o, r) {
            var a, h = this.symbols[e], h = h && h(W(i), W(s), n, o, r), l = /^url\((.*?)\)$/, c, d;
            if (h) a = this.path(h), t(a, {
                symbolName: e,
                x: i,
                y: s,
                width: n,
                height: o
            }), r && t(a, r); else if (l.test(e)) d = function(t, e) {
                t.element && (t.attr({
                    width: e[0],
                    height: e[1]
                }), t.alignByTranslate || t.translate(W((n - e[0]) / 2), W((o - e[1]) / 2)));
            }, c = e.match(l)[1], e = le[c] || r && r.width && r.height && [ r.width, r.height ], 
            a = this.image(c).attr({
                x: i,
                y: s
            }), a.isImg = !0, e ? d(a, e) : (a.attr({
                width: 0,
                height: 0
            }), g("img", {
                onload: function() {
                    d(a, le[c] = [ this.width, this.height ]);
                },
                src: c
            }));
            return a;
        },
        symbols: {
            circle: function(t, e, i, s) {
                var n = .166 * i;
                return [ "M", t + i / 2, e, "C", t + i + n, e, t + i + n, e + s, t + i / 2, e + s, "C", t - n, e + s, t - n, e, t + i / 2, e, "Z" ];
            },
            square: function(t, e, i, s) {
                return [ "M", t, e, "L", t + i, e, t + i, e + s, t, e + s, "Z" ];
            },
            triangle: function(t, e, i, s) {
                return [ "M", t + i / 2, e, "L", t + i, e + s, t, e + s, "Z" ];
            },
            "triangle-down": function(t, e, i, s) {
                return [ "M", t, e, "L", t + i, e, t + i / 2, e + s, "Z" ];
            },
            diamond: function(t, e, i, s) {
                return [ "M", t + i / 2, e, "L", t + i, e + s / 2, t + i / 2, e + s, t, e + s / 2, "Z" ];
            },
            arc: function(t, e, i, s, n) {
                var o = n.start, i = n.r || i || s, r = n.end - .001, s = n.innerR, a = n.open, h = _(o), l = U(o), c = _(r), r = U(r), n = n.end - o < Z ? 0 : 1;
                return [ "M", t + i * h, e + i * l, "A", i, i, 0, n, 1, t + i * c, e + i * r, a ? "M" : "L", t + s * c, e + s * r, "A", s, s, 0, n, 0, t + s * h, e + s * l, a ? "" : "Z" ];
            },
            callout: function(t, e, i, s, n) {
                var o = j(n && n.r || 0, i, s), r = o + 6, a = n && n.anchorX, h = n && n.anchorY, n = W(n.strokeWidth || 0) % 2 / 2;
                t += n;
                e += n;
                n = [ "M", t + o, e, "L", t + i - o, e, "C", t + i, e, t + i, e, t + i, e + o, "L", t + i, e + s - o, "C", t + i, e + s, t + i, e + s, t + i - o, e + s, "L", t + o, e + s, "C", t, e + s, t, e + s, t, e + s - o, "L", t, e + o, "C", t, e, t, e, t + o, e ];
                a && a > i && h > e + r && h < e + s - r ? n.splice(13, 3, "L", t + i, h - 6, t + i + 6, h, t + i, h + 6, t + i, e + s - o) : a && a < 0 && h > e + r && h < e + s - r ? n.splice(33, 3, "L", t, h + 6, t - 6, h, t, h - 6, t, e + o) : h && h > s && a > t + r && a < t + i - r ? n.splice(23, 3, "L", a + 6, e + s, a, e + s + 6, a - 6, e + s, t + o, e + s) : h && h < 0 && a > t + r && a < t + i - r && n.splice(3, 3, "L", a - 6, e, a, e - 6, a + 6, e, i - o, e);
                return n;
            }
        },
        clipRect: function(t, e, i, s) {
            var n = "highcharts-" + ce++, o = this.createElement("clipPath").attr({
                id: n
            }).add(this.defs), t = this.rect(t, e, i, s, 0).add(o);
            t.id = n;
            t.clipPath = o;
            return t;
        },
        text: function(t, e, i, s) {
            var n = re || !ne && this.forExport, o = {};
            if (s && !this.forExport) return this.html(t, e, i);
            o.x = Math.round(e || 0);
            if (i) o.y = Math.round(i);
            if (t || t === 0) o.text = t;
            t = this.createElement("text").attr(o);
            n && t.css({
                position: "absolute"
            });
            if (!s) t.xSetter = function(t, e, i) {
                var s = i.getElementsByTagName("tspan"), n, o = i.getAttribute(e), r;
                for (r = 0; r < s.length; r++) n = s[r], n.getAttribute(e) === o && n.setAttribute(e, t);
                i.setAttribute(e, t);
            };
            return t;
        },
        fontMetrics: function(t, e) {
            t = t || this.style.fontSize;
            if (e && E.getComputedStyle) e = e.element || e, t = E.getComputedStyle(e, "").fontSize;
            var t = /px/.test(t) ? i(t) : /em/.test(t) ? parseFloat(t) * 12 : 12, s = t < 24 ? t + 4 : W(t * 1.2), n = W(s * .8);
            return {
                h: s,
                b: n,
                f: t
            };
        },
        label: function(i, s, n, o, r, a, h, l, d) {
            function p() {
                var e, i;
                e = y.element.style;
                x = (S === void 0 || T === void 0 || m.styles.textAlign) && y.textStr && y.getBBox();
                m.width = (S || x.width || 0) + 2 * k + w;
                m.height = (T || x.height || 0) + 2 * k;
                M = k + g.fontMetrics(e && e.fontSize, y).b;
                if (I) {
                    if (!v) e = W(-b * k), i = l ? -M : 0, m.box = v = o ? g.symbol(o, e, i, m.width, m.height, C) : g.rect(e, i, m.width, m.height, 0, C[Te]), 
                    v.attr("fill", we).add(m);
                    v.isImg || v.attr(t({
                        width: W(m.width),
                        height: W(m.height)
                    }, C));
                    C = null;
                }
            }
            function u() {
                var t = m.styles, t = t && t.textAlign, e = w + k * (1 - b), i;
                i = l ? 0 : M;
                if (c(S) && x && (t === "center" || t === "right")) e += {
                    center: .5,
                    right: 1
                }[t] * (S - x.width);
                if (e !== y.x || i !== y.y) y.attr("x", e), i !== H && y.attr("y", i);
                y.x = e;
                y.y = i;
            }
            function f(t, e) {
                v ? v.attr(t, e) : C[t] = e;
            }
            var g = this, m = g.g(d), y = g.text("", 0, 0, h).attr({
                zIndex: 1
            }), v, x, b = 0, k = 3, w = 0, S, T, P, A, L = 0, C = {}, M, I;
            m.onAdd = function() {
                y.add(m);
                m.attr({
                    text: i || i === 0 ? i : "",
                    x: s,
                    y: n
                });
                v && c(r) && m.attr({
                    anchorX: r,
                    anchorY: a
                });
            };
            m.widthSetter = function(t) {
                S = t;
            };
            m.heightSetter = function(t) {
                T = t;
            };
            m.paddingSetter = function(t) {
                c(t) && t !== k && (k = t, u());
            };
            m.paddingLeftSetter = function(t) {
                c(t) && t !== w && (w = t, u());
            };
            m.alignSetter = function(t) {
                b = {
                    left: 0,
                    center: .5,
                    right: 1
                }[t];
            };
            m.textSetter = function(t) {
                t !== H && y.textSetter(t);
                p();
                u();
            };
            m["stroke-widthSetter"] = function(t, e) {
                t && (I = !0);
                L = t % 2 / 2;
                f(e, t);
            };
            m.strokeSetter = m.fillSetter = m.rSetter = function(t, e) {
                e === "fill" && t && (I = !0);
                f(e, t);
            };
            m.anchorXSetter = function(t, e) {
                r = t;
                f(e, t + L - P);
            };
            m.anchorYSetter = function(t, e) {
                a = t;
                f(e, t - A);
            };
            m.xSetter = function(t) {
                m.x = t;
                b && (t -= b * ((S || x.width) + k));
                P = W(t);
                m.attr("translateX", P);
            };
            m.ySetter = function(t) {
                A = m.y = W(t);
                m.attr("translateY", A);
            };
            var B = m.css;
            return t(m, {
                css: function(t) {
                    if (t) {
                        var i = {}, t = e(t);
                        _e(m.textProps, function(e) {
                            t[e] !== H && (i[e] = t[e], delete t[e]);
                        });
                        y.css(i);
                    }
                    return B.call(m, t);
                },
                getBBox: function() {
                    return {
                        width: x.width + 2 * k,
                        height: x.height + 2 * k,
                        x: x.x - k,
                        y: x.y - k
                    };
                },
                shadow: function(t) {
                    v && v.shadow(t);
                    return m;
                },
                destroy: function() {
                    qe(m.element, "mouseenter");
                    qe(m.element, "mouseleave");
                    y && (y = y.destroy());
                    v && (v = v.destroy());
                    D.prototype.destroy.call(m);
                    m = g = p = u = f = null;
                }
            });
        }
    };
    ae = ai;
    t(D.prototype, {
        htmlCss: function(e) {
            var i = this.element;
            if (i = e && i.tagName === "SPAN" && e.width) delete e.width, this.textWidth = i, 
            this.updateTransform();
            this.styles = t(this.styles, e);
            f(this.element, e);
            return this;
        },
        htmlGetBBox: function() {
            var t = this.element, e = this.bBox;
            if (!e) {
                if (t.nodeName === "text") t.style.position = "absolute";
                e = this.bBox = {
                    x: t.offsetLeft,
                    y: t.offsetTop,
                    width: t.offsetWidth,
                    height: t.offsetHeight
                };
            }
            return e;
        },
        htmlUpdateTransform: function() {
            if (this.added) {
                var t = this.renderer, e = this.element, s = this.translateX || 0, n = this.translateY || 0, o = this.x || 0, r = this.y || 0, a = this.textAlign || "left", h = {
                    left: 0,
                    center: .5,
                    right: 1
                }[a], l = this.shadows;
                f(e, {
                    marginLeft: s,
                    marginTop: n
                });
                l && _e(l, function(t) {
                    f(t, {
                        marginLeft: s + 1,
                        marginTop: n + 1
                    });
                });
                this.inverted && _e(e.childNodes, function(i) {
                    t.invertChild(i, e);
                });
                if (e.tagName === "SPAN") {
                    var d = this.rotation, p, g = i(this.textWidth), m = [ d, a, e.innerHTML, this.textWidth ].join(",");
                    if (m !== this.cTT) {
                        p = t.fontMetrics(e.style.fontSize).b;
                        c(d) && this.setSpanRotation(d, h, p);
                        l = u(this.elemWidth, e.offsetWidth);
                        if (l > g && /[ \-]/.test(e.textContent || e.innerText)) f(e, {
                            width: g + "px",
                            display: "block",
                            whiteSpace: "normal"
                        }), l = g;
                        this.getSpanCorrection(l, p, h, d, a);
                    }
                    f(e, {
                        left: o + (this.xCorr || 0) + "px",
                        top: r + (this.yCorr || 0) + "px"
                    });
                    if (te) p = e.offsetHeight;
                    this.cTT = m;
                }
            } else this.alignOnAdd = !0;
        },
        setSpanRotation: function(t, e, i) {
            var s = {}, n = J ? "-ms-transform" : te ? "-webkit-transform" : ee ? "MozTransform" : q ? "-o-transform" : "";
            s[n] = s.transform = "rotate(" + t + "deg)";
            s[n + (ee ? "Origin" : "-origin")] = s.transformOrigin = e * 100 + "% " + i + "px";
            f(this.element, s);
        },
        getSpanCorrection: function(t, e, i) {
            this.xCorr = -t * i;
            this.yCorr = -e;
        }
    });
    t(ai.prototype, {
        html: function(e, i, s) {
            var n = this.createElement("span"), o = n.element, r = n.renderer;
            n.textSetter = function(t) {
                t !== o.innerHTML && delete this.bBox;
                o.innerHTML = this.textStr = t;
            };
            n.xSetter = n.ySetter = n.alignSetter = n.rotationSetter = function(t, e) {
                e === "align" && (e = "textAlign");
                n[e] = t;
                n.htmlUpdateTransform();
            };
            n.attr({
                text: e,
                x: W(i),
                y: W(s)
            }).css({
                position: "absolute",
                whiteSpace: "nowrap",
                fontFamily: this.style.fontFamily,
                fontSize: this.style.fontSize
            });
            n.css = n.htmlCss;
            if (r.isSVG) n.add = function(e) {
                var i, s = r.box.parentNode, a = [];
                if (this.parentGroup = e) {
                    if (i = e.div, !i) {
                        for (;e; ) a.push(e), e = e.parentGroup;
                        _e(a.reverse(), function(e) {
                            var n;
                            i = e.div = e.div || g(ke, {
                                className: d(e.element, "class")
                            }, {
                                position: "absolute",
                                left: (e.translateX || 0) + "px",
                                top: (e.translateY || 0) + "px"
                            }, i || s);
                            n = i.style;
                            t(e, {
                                translateXSetter: function(t, i) {
                                    n.left = t + "px";
                                    e[i] = t;
                                    e.doTransform = !0;
                                },
                                translateYSetter: function(t, i) {
                                    n.top = t + "px";
                                    e[i] = t;
                                    e.doTransform = !0;
                                },
                                visibilitySetter: function(t, e) {
                                    n[e] = t;
                                }
                            });
                        });
                    }
                } else i = s;
                i.appendChild(o);
                n.added = !0;
                n.alignOnAdd && n.htmlUpdateTransform();
                return n;
            };
            return n;
        }
    });
    var hi;
    if (!ne && !re) {
        hi = {
            init: function(t, e) {
                var i = [ "<", e, ' filled="f" stroked="f"' ], s = [ "position: ", "absolute", ";" ], n = e === ke;
                (e === "shape" || n) && s.push("left:0;top:0;width:1px;height:1px;");
                s.push("visibility: ", n ? "hidden" : "visible");
                i.push(' style="', s.join(""), '"/>');
                if (e) i = n || e === "span" || e === "img" ? i.join("") : t.prepVML(i), this.element = g(i);
                this.renderer = t;
            },
            add: function(t) {
                var e = this.renderer, i = this.element, s = e.box, s = t ? t.element || t : s;
                t && t.inverted && e.invertChild(i, s);
                s.appendChild(i);
                this.added = !0;
                this.alignOnAdd && !this.deferUpdateTransform && this.updateTransform();
                if (this.onAdd) this.onAdd();
                return this;
            },
            updateTransform: D.prototype.htmlUpdateTransform,
            setSpanRotation: function() {
                var t = this.rotation, e = _(t * K), i = U(t * K);
                f(this.element, {
                    filter: t ? [ "progid:DXImageTransform.Microsoft.Matrix(M11=", e, ", M12=", -i, ", M21=", i, ", M22=", e, ", sizingMethod='auto expand')" ].join("") : we
                });
            },
            getSpanCorrection: function(t, e, i, s, n) {
                var o = s ? _(s * K) : 1, r = s ? U(s * K) : 0, a = u(this.elemHeight, this.element.offsetHeight), h;
                this.xCorr = o < 0 && -t;
                this.yCorr = r < 0 && -a;
                h = o * r < 0;
                this.xCorr += r * e * (h ? 1 - i : i);
                this.yCorr -= o * e * (s ? h ? i : 1 - i : 1);
                n && n !== "left" && (this.xCorr -= t * i * (o < 0 ? -1 : 1), s && (this.yCorr -= a * i * (r < 0 ? -1 : 1)), 
                f(this.element, {
                    textAlign: n
                }));
            },
            pathToVML: function(t) {
                for (var e = t.length, i = []; e--; ) if (r(t[e])) i[e] = W(t[e] * 10) - 5; else if (t[e] === "Z") i[e] = "x"; else if (i[e] = t[e], 
                t.isArc && (t[e] === "wa" || t[e] === "at")) i[e + 5] === i[e + 7] && (i[e + 7] += t[e + 7] > t[e + 5] ? 1 : -1), 
                i[e + 6] === i[e + 8] && (i[e + 8] += t[e + 8] > t[e + 6] ? 1 : -1);
                return i.join(" ") || "x";
            },
            clip: function(t) {
                var e = this, i;
                t ? (i = t.members, l(i, e), i.push(e), e.destroyClip = function() {
                    l(i, e);
                }, t = t.getCSS(e)) : (e.destroyClip && e.destroyClip(), t = {
                    clip: Q ? "inherit" : "rect(auto)"
                });
                return e.css(t);
            },
            css: D.prototype.htmlCss,
            safeRemoveChild: function(t) {
                t.parentNode && L(t);
            },
            destroy: function() {
                this.destroyClip && this.destroyClip();
                return D.prototype.destroy.apply(this);
            },
            on: function(t, e) {
                this.element["on" + t] = function() {
                    var t = E.event;
                    t.target = t.srcElement;
                    e(t);
                };
                return this;
            },
            cutOffPath: function(t, e) {
                var s, t = t.split(/[ ,]/);
                s = t.length;
                if (s === 9 || s === 11) t[s - 4] = t[s - 2] = i(t[s - 2]) - 10 * e;
                return t.join(" ");
            },
            shadow: function(t, e, s) {
                var n = [], o, r = this.element, a = this.renderer, h, l = r.style, c, d = r.path, p, f, m, y;
                d && typeof d.value !== "string" && (d = "x");
                f = d;
                if (t) {
                    m = u(t.width, 3);
                    y = (t.opacity || .15) / m;
                    for (o = 1; o <= 3; o++) {
                        p = m * 2 + 1 - 2 * o;
                        s && (f = this.cutOffPath(d.value, p + .5));
                        c = [ '<shape isShadow="true" strokeweight="', p, '" filled="false" path="', f, '" coordsize="10 10" style="', r.style.cssText, '" />' ];
                        h = g(a.prepVML(c), null, {
                            left: i(l.left) + u(t.offsetX, 1),
                            top: i(l.top) + u(t.offsetY, 1)
                        });
                        if (s) h.cutOff = p + 1;
                        c = [ '<stroke color="', t.color || "black", '" opacity="', y * o, '"/>' ];
                        g(a.prepVML(c), null, null, h);
                        e ? e.element.appendChild(h) : r.parentNode.insertBefore(h, r);
                        n.push(h);
                    }
                    this.shadows = n;
                }
                return this;
            },
            updateShadows: ve,
            setAttr: function(t, e) {
                Q ? this.element[t] = e : this.element.setAttribute(t, e);
            },
            classSetter: function(t) {
                this.element.className = t;
            },
            dashstyleSetter: function(t, e, i) {
                (i.getElementsByTagName("stroke")[0] || g(this.renderer.prepVML([ "<stroke/>" ]), null, null, i))[e] = t || "solid";
                this[e] = t;
            },
            dSetter: function(t, e, i) {
                var s = this.shadows, t = t || [];
                this.d = t.join && t.join(" ");
                i.path = t = this.pathToVML(t);
                if (s) for (i = s.length; i--; ) s[i].path = s[i].cutOff ? this.cutOffPath(t, s[i].cutOff) : t;
                this.setAttr(e, t);
            },
            fillSetter: function(t, e, i) {
                var s = i.nodeName;
                if (s === "SPAN") i.style.color = t; else if (s !== "IMG") i.filled = t !== we, 
                this.setAttr("fillcolor", this.renderer.color(t, i, e, this));
            },
            opacitySetter: ve,
            rotationSetter: function(t, e, i) {
                i = i.style;
                this[e] = i[e] = t;
                i.left = -W(U(t * K) + 1) + "px";
                i.top = W(_(t * K)) + "px";
            },
            strokeSetter: function(t, e, i) {
                this.setAttr("strokecolor", this.renderer.color(t, i, e));
            },
            "stroke-widthSetter": function(t, e, i) {
                i.stroked = !!t;
                this[e] = t;
                r(t) && (t += "px");
                this.setAttr("strokeweight", t);
            },
            titleSetter: function(t, e) {
                this.setAttr(e, t);
            },
            visibilitySetter: function(t, e, i) {
                t === "inherit" && (t = "visible");
                this.shadows && _e(this.shadows, function(i) {
                    i.style[e] = t;
                });
                i.nodeName === "DIV" && (t = t === "hidden" ? "-999em" : 0, Q || (i.style[e] = t ? "visible" : "hidden"), 
                e = "top");
                i.style[e] = t;
            },
            xSetter: function(t, e, i) {
                this[e] = t;
                e === "x" ? e = "left" : e === "y" && (e = "top");
                this.updateClipping ? (this[e] = t, this.updateClipping()) : i.style[e] = t;
            },
            zIndexSetter: function(t, e, i) {
                i.style[e] = t;
            }
        };
        We.VMLElement = hi = m(D, hi);
        hi.prototype.ySetter = hi.prototype.widthSetter = hi.prototype.heightSetter = hi.prototype.xSetter;
        var li = {
            Element: hi,
            isIE8: $.indexOf("MSIE 8.0") > -1,
            init: function(e, i, s, n) {
                var o;
                this.alignedObjects = [];
                n = this.createElement(ke).css(t(this.getStyle(n), {
                    position: "relative"
                }));
                o = n.element;
                e.appendChild(n.element);
                this.isVML = !0;
                this.box = o;
                this.boxWrapper = n;
                this.cache = {};
                this.setSize(i, s, !1);
                if (!X.namespaces.hcv) {
                    X.namespaces.add("hcv", "urn:schemas-microsoft-com:vml");
                    try {
                        X.createStyleSheet().cssText = "hcv\\:fill, hcv\\:path, hcv\\:shape, hcv\\:stroke{ behavior:url(#default#VML); display: inline-block; } ";
                    } catch (r) {
                        X.styleSheets[0].cssText += "hcv\\:fill, hcv\\:path, hcv\\:shape, hcv\\:stroke{ behavior:url(#default#VML); display: inline-block; } ";
                    }
                }
            },
            isHidden: function() {
                return !this.box.offsetWidth;
            },
            clipRect: function(e, i, s, o) {
                var r = this.createElement(), a = n(e);
                return t(r, {
                    members: [],
                    left: (a ? e.x : e) + 1,
                    top: (a ? e.y : i) + 1,
                    width: (a ? e.width : s) - 1,
                    height: (a ? e.height : o) - 1,
                    getCSS: function(e) {
                        var i = e.element, s = i.nodeName, e = e.inverted, n = this.top - (s === "shape" ? i.offsetTop : 0), o = this.left, i = o + this.width, r = n + this.height, n = {
                            clip: "rect(" + W(e ? o : n) + "px," + W(e ? r : i) + "px," + W(e ? i : r) + "px," + W(e ? n : o) + "px)"
                        };
                        !e && Q && s === "DIV" && t(n, {
                            width: i + "px",
                            height: r + "px"
                        });
                        return n;
                    },
                    updateClipping: function() {
                        _e(r.members, function(t) {
                            t.element && t.css(r.getCSS(t));
                        });
                    }
                });
            },
            color: function(t, e, i, s) {
                var n = this, o, r = /^rgba/, a, h, l = we;
                t && t.linearGradient ? h = "gradient" : t && t.radialGradient && (h = "pattern");
                if (h) {
                    var c, d, p = t.linearGradient || t.radialGradient, u, f, m, y, v, x = "", t = t.stops, b, k = [], w = function() {
                        a = [ '<fill colors="' + k.join(",") + '" opacity="', m, '" o:opacity2="', f, '" type="', h, '" ', x, 'focus="100%" method="any" />' ];
                        g(n.prepVML(a), null, null, e);
                    };
                    u = t[0];
                    b = t[t.length - 1];
                    u[0] > 0 && t.unshift([ 0, u[1] ]);
                    b[0] < 1 && t.push([ 1, b[1] ]);
                    _e(t, function(t, e) {
                        r.test(t[1]) ? (o = ri(t[1]), c = o.get("rgb"), d = o.get("a")) : (c = t[1], d = 1);
                        k.push(t[0] * 100 + "% " + c);
                        e ? (m = d, y = c) : (f = d, v = c);
                    });
                    if (i === "fill") if (h === "gradient") i = p.x1 || p[0] || 0, t = p.y1 || p[1] || 0, 
                    u = p.x2 || p[2] || 0, p = p.y2 || p[3] || 0, x = 'angle="' + (90 - G.atan((p - t) / (u - i)) * 180 / Z) + '"', 
                    w(); else {
                        var l = p.r, S = l * 2, T = l * 2, P = p.cx, A = p.cy, L = e.radialReference, C, l = function() {
                            L && (C = s.getBBox(), P += (L[0] - C.x) / C.width - .5, A += (L[1] - C.y) / C.height - .5, 
                            S *= L[2] / C.width, T *= L[2] / C.height);
                            x = 'src="' + pe.global.VMLRadialGradientURL + '" size="' + S + "," + T + '" origin="0.5,0.5" position="' + P + "," + A + '" color2="' + v + '" ';
                            w();
                        };
                        s.added ? l() : s.onAdd = l;
                        l = y;
                    } else l = c;
                } else if (r.test(t) && e.tagName !== "IMG") o = ri(t), a = [ "<", i, ' opacity="', o.get("a"), '"/>' ], 
                g(this.prepVML(a), null, null, e), l = o.get("rgb"); else {
                    l = e.getElementsByTagName(i);
                    if (l.length) l[0].opacity = 1, l[0].type = "solid";
                    l = t;
                }
                return l;
            },
            prepVML: function(t) {
                var e = this.isIE8, t = t.join("");
                e ? (t = t.replace("/>", ' xmlns="urn:schemas-microsoft-com:vml" />'), t = t.indexOf('style="') === -1 ? t.replace("/>", ' style="display:inline-block;behavior:url(#default#VML);" />') : t.replace('style="', 'style="display:inline-block;behavior:url(#default#VML);')) : t = t.replace("<", "<hcv:");
                return t;
            },
            text: ai.prototype.html,
            path: function(e) {
                var i = {
                    coordsize: "10 10"
                };
                o(e) ? i.d = e : n(e) && t(i, e);
                return this.createElement("shape").attr(i);
            },
            circle: function(t, e, i) {
                var s = this.symbol("circle");
                if (n(t)) i = t.r, e = t.y, t = t.x;
                s.isCircle = !0;
                s.r = i;
                return s.attr({
                    x: t,
                    y: e
                });
            },
            g: function(t) {
                var e;
                t && (e = {
                    className: "highcharts-" + t,
                    "class": "highcharts-" + t
                });
                return this.createElement(ke).attr(e);
            },
            image: function(t, e, i, s, n) {
                var o = this.createElement("img").attr({
                    src: t
                });
                arguments.length > 1 && o.attr({
                    x: e,
                    y: i,
                    width: s,
                    height: n
                });
                return o;
            },
            createElement: function(t) {
                return t === "rect" ? this.symbol(t) : ai.prototype.createElement.call(this, t);
            },
            invertChild: function(t, e) {
                var s = this, n = e.style, o = t.tagName === "IMG" && t.style;
                f(t, {
                    flip: "x",
                    left: i(n.width) - (o ? i(o.top) : 1),
                    top: i(n.height) - (o ? i(o.left) : 1),
                    rotation: -90
                });
                _e(t.childNodes, function(e) {
                    s.invertChild(e, t);
                });
            },
            symbols: {
                arc: function(t, e, i, s, n) {
                    var o = n.start, r = n.end, a = n.r || i || s, i = n.innerR, s = _(o), h = U(o), l = _(r), c = U(r);
                    if (r - o === 0) return [ "x" ];
                    o = [ "wa", t - a, e - a, t + a, e + a, t + a * s, e + a * h, t + a * l, e + a * c ];
                    n.open && !i && o.push("e", "M", t, e);
                    o.push("at", t - i, e - i, t + i, e + i, t + i * l, e + i * c, t + i * s, e + i * h, "x", "e");
                    o.isArc = !0;
                    return o;
                },
                circle: function(t, e, i, s, n) {
                    n && (i = s = 2 * n.r);
                    n && n.isCircle && (t -= i / 2, e -= s / 2);
                    return [ "wa", t, e, t + i, e + s, t + i, e + s / 2, t + i, e + s / 2, "e" ];
                },
                rect: function(t, e, i, s, n) {
                    return ai.prototype.symbols[!c(n) || !n.r ? "square" : "callout"].call(0, t, e, i, s, n);
                }
            }
        };
        We.VMLRenderer = hi = function() {
            this.init.apply(this, arguments);
        };
        hi.prototype = e(ai.prototype, li);
        ae = hi;
    }
    ai.prototype.measureSpanWidth = function(t, e) {
        var i = X.createElement("span"), s;
        s = X.createTextNode(t);
        i.appendChild(s);
        f(i, e);
        this.box.appendChild(i);
        s = i.offsetWidth;
        L(i);
        return s;
    };
    var ci;
    if (re) We.CanVGRenderer = hi = function() {
        se = "http://www.w3.org/1999/xhtml";
    }, hi.prototype.symbols = {}, ci = function() {
        function t() {
            var t = e.length, i;
            for (i = 0; i < t; i++) e[i]();
            e = [];
        }
        var e = [];
        return {
            push: function(i, s) {
                e.length === 0 && je(s, t);
                e.push(i);
            }
        };
    }(), ae = hi;
    B.prototype = {
        addLabel: function() {
            var e = this.axis, i = e.options, s = e.chart, n = e.horiz, o = e.categories, a = e.names, l = this.pos, d = i.labels, p = d.rotation, f = e.tickPositions, n = n && o && !d.step && !d.staggerLines && !d.rotation && s.plotWidth / f.length || !n && (s.margin[3] || s.chartWidth * .33), g = l === f[0], m = l === f[f.length - 1], y, a = o ? u(o[l], a[l], l) : l, o = this.label, v = f.info;
            e.isDatetimeAxis && v && (y = i.dateTimeLabelFormats[v.higherRanks[l] || v.unitName]);
            this.isFirst = g;
            this.isLast = m;
            i = e.labelFormatter.call({
                axis: e,
                chart: s,
                isFirst: g,
                isLast: m,
                dateTimeLabelFormat: y,
                value: e.isLog ? C(h(a)) : a
            });
            l = n && {
                width: F(1, W(n - 2 * (d.padding || 10))) + "px"
            };
            if (c(o)) o && o.attr({
                text: i
            }).css(l); else {
                y = {
                    align: e.labelAlign
                };
                if (r(p)) y.rotation = p;
                if (n && d.ellipsis) l.HcHeight = e.len / f.length;
                this.label = o = c(i) && d.enabled ? s.renderer.text(i, 0, 0, d.useHTML).attr(y).css(t(l, d.style)).add(e.labelGroup) : null;
                e.tickBaseline = s.renderer.fontMetrics(d.style.fontSize, o).b;
                p && e.side === 2 && (e.tickBaseline *= _(p * K));
            }
            this.yOffset = o ? u(d.y, e.tickBaseline + (e.side === 2 ? 8 : -(o.getBBox().height / 2))) : 0;
        },
        getLabelSize: function() {
            var t = this.label, e = this.axis;
            return t ? t.getBBox()[e.horiz ? "height" : "width"] : 0;
        },
        getLabelSides: function() {
            var t = this.label.getBBox(), e = this.axis, i = e.horiz, s = e.options.labels, t = i ? t.width : t.height, e = i ? s.x - t * {
                left: 0,
                center: .5,
                right: 1
            }[e.labelAlign] : 0;
            return [ e, i ? t + e : t ];
        },
        handleOverflow: function(t, e) {
            var i = !0, s = this.axis, n = this.isFirst, o = this.isLast, r = s.horiz ? e.x : e.y, a = s.reversed, h = s.tickPositions, l = this.getLabelSides(), c = l[0], l = l[1], d, p, u, f = this.label.line;
            d = f || 0;
            p = s.labelEdge;
            u = s.justifyLabels && (n || o);
            p[d] === H || r + c > p[d] ? p[d] = r + l : u || (i = !1);
            if (u) {
                d = (p = s.justifyToPlot) ? s.pos : 0;
                p = p ? d + s.len : s.chart.chartWidth;
                do t += n ? 1 : -1, u = s.ticks[h[t]]; while (h[t] && (!u || !u.label || u.label.line !== f));
                s = u && u.label.xy && u.label.xy.x + u.getLabelSides()[n ? 0 : 1];
                n && !a || o && a ? r + c < d && (r = d - c, u && r + l > s && (i = !1)) : r + l > p && (r = p - l, 
                u && r + c < s && (i = !1));
                e.x = r;
            }
            return i;
        },
        getPosition: function(t, e, i, s) {
            var n = this.axis, o = n.chart, r = s && o.oldChartHeight || o.chartHeight;
            return {
                x: t ? n.translate(e + i, null, null, s) + n.transB : n.left + n.offset + (n.opposite ? (s && o.oldChartWidth || o.chartWidth) - n.right - n.left : 0),
                y: t ? r - n.bottom + n.offset - (n.opposite ? n.height : 0) : r - n.translate(e + i, null, null, s) - n.transB
            };
        },
        getLabelPosition: function(t, e, i, s, n, o, r, a) {
            var h = this.axis, l = h.transA, c = h.reversed, d = h.staggerLines, t = t + n.x - (o && s ? o * l * (c ? -1 : 1) : 0), e = e + this.yOffset - (o && !s ? o * l * (c ? 1 : -1) : 0);
            if (d) i.line = r / (a || 1) % d, e += i.line * (h.labelOffset / d);
            return {
                x: t,
                y: e
            };
        },
        getMarkPath: function(t, e, i, s, n, o) {
            return o.crispLine([ "M", t, e, "L", t + (n ? 0 : -i), e + (n ? i : 0) ], s);
        },
        render: function(t, e, i) {
            var s = this.axis, n = s.options, o = s.chart.renderer, r = s.horiz, a = this.type, h = this.label, l = this.pos, c = n.labels, d = this.gridLine, p = a ? a + "Grid" : "grid", f = a ? a + "Tick" : "tick", g = n[p + "LineWidth"], m = n[p + "LineColor"], y = n[p + "LineDashStyle"], v = n[f + "Length"], p = n[f + "Width"] || 0, x = n[f + "Color"], b = n[f + "Position"], f = this.mark, k = c.step, w = !0, S = s.tickmarkOffset, T = this.getPosition(r, l, S, e), P = T.x, T = T.y, A = r && P === s.pos + s.len || !r && T === s.pos ? -1 : 1, i = u(i, 1);
            this.isActive = !0;
            if (g) {
                l = s.getPlotLinePath(l + S, g * A, e, !0);
                if (d === H) {
                    d = {
                        stroke: m,
                        "stroke-width": g
                    };
                    if (y) d.dashstyle = y;
                    if (!a) d.zIndex = 1;
                    if (e) d.opacity = 0;
                    this.gridLine = d = g ? o.path(l).attr(d).add(s.gridGroup) : null;
                }
                if (!e && d && l) d[this.isNew ? "attr" : "animate"]({
                    d: l,
                    opacity: i
                });
            }
            if (p && v) b === "inside" && (v = -v), s.opposite && (v = -v), a = this.getMarkPath(P, T, v, p * A, r, o), 
            f ? f.animate({
                d: a,
                opacity: i
            }) : this.mark = o.path(a).attr({
                stroke: x,
                "stroke-width": p,
                opacity: i
            }).add(s.axisGroup);
            if (h && !isNaN(P)) h.xy = T = this.getLabelPosition(P, T, h, r, c, S, t, k), this.isFirst && !this.isLast && !u(n.showFirstLabel, 1) || this.isLast && !this.isFirst && !u(n.showLastLabel, 1) ? w = !1 : !s.isRadial && !c.step && !c.rotation && !e && i !== 0 && (w = this.handleOverflow(t, T)), 
            k && t % k && (w = !1), w && !isNaN(T.y) ? (T.opacity = i, h[this.isNew ? "attr" : "animate"](T), 
            this.isNew = !1) : h.attr("y", -9999);
        },
        destroy: function() {
            A(this, this.axis);
        }
    };
    We.PlotLineOrBand = function(t, e) {
        this.axis = t;
        if (e) this.options = e, this.id = e.id;
    };
    We.PlotLineOrBand.prototype = {
        render: function() {
            var t = this, i = t.axis, s = i.horiz, n = (i.pointRange || 0) / 2, o = t.options, r = o.label, h = t.label, l = o.width, d = o.to, p = o.from, u = c(p) && c(d), f = o.value, g = o.dashStyle, m = t.svgElem, y = [], v, x = o.color, b = o.zIndex, k = o.events, w = {}, S = i.chart.renderer;
            i.isLog && (p = a(p), d = a(d), f = a(f));
            if (l) {
                if (y = i.getPlotLinePath(f, l), w = {
                    stroke: x,
                    "stroke-width": l
                }, g) w.dashstyle = g;
            } else if (u) {
                p = F(p, i.min - n);
                d = j(d, i.max + n);
                y = i.getPlotBandPath(p, d, o);
                if (x) w.fill = x;
                if (o.borderWidth) w.stroke = o.borderColor, w["stroke-width"] = o.borderWidth;
            } else return;
            if (c(b)) w.zIndex = b;
            if (m) if (y) m.animate({
                d: y
            }, null, m.onGetPath); else {
                if (m.hide(), m.onGetPath = function() {
                    m.show();
                }, h) t.label = h = h.destroy();
            } else if (y && y.length && (t.svgElem = m = S.path(y).attr(w).add(), k)) for (v in n = function(e) {
                m.on(e, function(i) {
                    k[e].apply(t, [ i ]);
                });
            }, k) n(v);
            if (r && c(r.text) && y && y.length && i.width > 0 && i.height > 0) {
                r = e({
                    align: s && u && "center",
                    x: s ? !u && 4 : 10,
                    verticalAlign: !s && u && "middle",
                    y: s ? u ? 16 : 10 : u ? 6 : -4,
                    rotation: s && !u && 90
                }, r);
                if (!h) {
                    w = {
                        align: r.textAlign || r.align,
                        rotation: r.rotation
                    };
                    if (c(b)) w.zIndex = b;
                    t.label = h = S.text(r.text, 0, 0, r.useHTML).attr(w).css(r.style).add();
                }
                i = [ y[1], y[4], u ? y[6] : y[1] ];
                u = [ y[2], y[5], u ? y[7] : y[2] ];
                y = T(i);
                s = T(u);
                h.align(r, !1, {
                    x: y,
                    y: s,
                    width: P(i) - y,
                    height: P(u) - s
                });
                h.show();
            } else h && h.hide();
            return t;
        },
        destroy: function() {
            l(this.axis.plotLinesAndBands, this);
            delete this.axis;
            A(this);
        }
    };
    O.prototype = {
        defaultOptions: {
            dateTimeLabelFormats: {
                millisecond: "%H:%M:%S.%L",
                second: "%H:%M:%S",
                minute: "%H:%M",
                hour: "%H:%M",
                day: "%e. %b",
                week: "%e. %b",
                month: "%b '%y",
                year: "%Y"
            },
            endOnTick: !1,
            gridLineColor: "#C0C0C0",
            labels: Ne,
            lineColor: "#C0D0E0",
            lineWidth: 1,
            minPadding: .01,
            maxPadding: .01,
            minorGridLineColor: "#E0E0E0",
            minorGridLineWidth: 1,
            minorTickColor: "#A0A0A0",
            minorTickLength: 2,
            minorTickPosition: "outside",
            startOfWeek: 1,
            startOnTick: !1,
            tickColor: "#C0D0E0",
            tickLength: 10,
            tickmarkPlacement: "between",
            tickPixelInterval: 100,
            tickPosition: "outside",
            tickWidth: 1,
            title: {
                align: "middle",
                style: {
                    color: "#707070"
                }
            },
            type: "linear"
        },
        defaultYAxisOptions: {
            endOnTick: !0,
            gridLineWidth: 1,
            tickPixelInterval: 72,
            showLastLabel: !0,
            labels: {
                x: -8,
                y: 3
            },
            lineWidth: 0,
            maxPadding: .05,
            minPadding: .05,
            startOnTick: !0,
            tickWidth: 0,
            title: {
                rotation: 270,
                text: "Values"
            },
            stackLabels: {
                enabled: !1,
                formatter: function() {
                    return y(this.total, -1);
                },
                style: Ne.style
            }
        },
        defaultLeftAxisOptions: {
            labels: {
                x: -15,
                y: null
            },
            title: {
                rotation: 270
            }
        },
        defaultRightAxisOptions: {
            labels: {
                x: 15,
                y: null
            },
            title: {
                rotation: 90
            }
        },
        defaultBottomAxisOptions: {
            labels: {
                x: 0,
                y: null
            },
            title: {
                rotation: 0
            }
        },
        defaultTopAxisOptions: {
            labels: {
                x: 0,
                y: -15
            },
            title: {
                rotation: 0
            }
        },
        init: function(t, e) {
            var i = e.isX;
            this.horiz = t.inverted ? !i : i;
            this.coll = (this.isXAxis = i) ? "xAxis" : "yAxis";
            this.opposite = e.opposite;
            this.side = e.side || (this.horiz ? this.opposite ? 0 : 2 : this.opposite ? 1 : 3);
            this.setOptions(e);
            var s = this.options, n = s.type;
            this.labelFormatter = s.labels.formatter || this.defaultLabelFormatter;
            this.userOptions = e;
            this.minPixelPadding = 0;
            this.chart = t;
            this.reversed = s.reversed;
            this.zoomEnabled = s.zoomEnabled !== !1;
            this.categories = s.categories || n === "category";
            this.names = [];
            this.isLog = n === "logarithmic";
            this.isDatetimeAxis = n === "datetime";
            this.isLinked = c(s.linkedTo);
            this.tickmarkOffset = this.categories && s.tickmarkPlacement === "between" && u(s.tickInterval, 1) === 1 ? .5 : 0;
            this.ticks = {};
            this.labelEdge = [];
            this.minorTicks = {};
            this.plotLinesAndBands = [];
            this.alternateBands = {};
            this.len = 0;
            this.minRange = this.userMinRange = s.minRange || s.maxZoom;
            this.range = s.range;
            this.offset = s.offset || 0;
            this.stacks = {};
            this.oldStacks = {};
            this.min = this.max = null;
            this.crosshair = u(s.crosshair, p(t.options.tooltip.crosshairs)[i ? 0 : 1], !1);
            var o, s = this.options.events;
            Ve(this, t.axes) === -1 && (i && !this.isColorAxis ? t.axes.splice(t.xAxis.length, 0, this) : t.axes.push(this), 
            t[this.coll].push(this));
            this.series = this.series || [];
            if (t.inverted && i && this.reversed === H) this.reversed = !0;
            this.removePlotLine = this.removePlotBand = this.removePlotBandOrLine;
            for (o in s) $e(this, o, s[o]);
            if (this.isLog) this.val2lin = a, this.lin2val = h;
        },
        setOptions: function(t) {
            this.options = e(this.defaultOptions, this.isXAxis ? {} : this.defaultYAxisOptions, [ this.defaultTopAxisOptions, this.defaultRightAxisOptions, this.defaultBottomAxisOptions, this.defaultLeftAxisOptions ][this.side], e(pe[this.coll], t));
        },
        defaultLabelFormatter: function() {
            var t = this.axis, e = this.value, i = t.categories, s = this.dateTimeLabelFormat, n = pe.lang.numericSymbols, o = n && n.length, r, a = t.options.labels.format, t = t.isLog ? e : t.tickInterval;
            if (a) r = b(a, this); else if (i) r = e; else if (s) r = ue(s, e); else if (o && t >= 1e3) for (;o-- && r === H; ) i = Math.pow(1e3, o + 1), 
            t >= i && n[o] !== null && (r = y(e / i, -1) + n[o]);
            r === H && (r = V(e) >= 1e4 ? y(e, 0) : y(e, -1, H, ""));
            return r;
        },
        getSeriesExtremes: function() {
            var t = this, e = t.chart;
            t.hasVisibleSeries = !1;
            t.dataMin = t.dataMax = t.ignoreMinPadding = t.ignoreMaxPadding = null;
            t.buildStacks && t.buildStacks();
            _e(t.series, function(i) {
                if (i.visible || !e.options.chart.ignoreHiddenSeries) {
                    var s;
                    s = i.options.threshold;
                    var n;
                    t.hasVisibleSeries = !0;
                    t.isLog && s <= 0 && (s = null);
                    if (t.isXAxis) {
                        if (s = i.xData, s.length) t.dataMin = j(u(t.dataMin, s[0]), T(s)), t.dataMax = F(u(t.dataMax, s[0]), P(s));
                    } else {
                        i.getExtremes();
                        n = i.dataMax;
                        i = i.dataMin;
                        if (c(i) && c(n)) t.dataMin = j(u(t.dataMin, i), i), t.dataMax = F(u(t.dataMax, n), n);
                        if (c(s)) if (t.dataMin >= s) t.dataMin = s, t.ignoreMinPadding = !0; else if (t.dataMax < s) t.dataMax = s, 
                        t.ignoreMaxPadding = !0;
                    }
                }
            });
        },
        translate: function(t, e, i, s, n, o) {
            var a = 1, h = 0, l = s ? this.oldTransA : this.transA, s = s ? this.oldMin : this.min, c = this.minPixelPadding, n = (this.options.ordinal || this.isLog && n) && this.lin2val;
            if (!l) l = this.transA;
            if (i) a *= -1, h = this.len;
            this.reversed && (a *= -1, h -= a * (this.sector || this.len));
            e ? (t = t * a + h, t -= c, t = t / l + s, n && (t = this.lin2val(t))) : (n && (t = this.val2lin(t)), 
            o === "between" && (o = .5), t = a * (t - s) * l + h + a * c + (r(o) ? l * o * this.pointRange : 0));
            return t;
        },
        toPixels: function(t, e) {
            return this.translate(t, !1, !this.horiz, null, !0) + (e ? 0 : this.pos);
        },
        toValue: function(t, e) {
            return this.translate(t - (e ? 0 : this.pos), !0, !this.horiz, null, !0);
        },
        getPlotLinePath: function(t, e, i, s, n) {
            var o = this.chart, r = this.left, a = this.top, h, l, c = i && o.oldChartHeight || o.chartHeight, d = i && o.oldChartWidth || o.chartWidth, p;
            h = this.transB;
            n = u(n, this.translate(t, null, null, i));
            t = i = W(n + h);
            h = l = W(c - n - h);
            if (isNaN(n)) p = !0; else if (this.horiz) {
                if (h = a, l = c - this.bottom, t < r || t > r + this.width) p = !0;
            } else if (t = r, i = d - this.right, h < a || h > a + this.height) p = !0;
            return p && !s ? null : o.renderer.crispLine([ "M", t, h, "L", i, l ], e || 1);
        },
        getLinearTickPositions: function(t, e, i) {
            var s, n = C(Y(e / t) * t), o = C(N(i / t) * t), a = [];
            if (e === i && r(e)) return [ e ];
            for (e = n; e <= o; ) {
                a.push(e);
                e = C(e + t);
                if (e === s) break;
                s = e;
            }
            return a;
        },
        getMinorTickPositions: function() {
            var t = this.options, e = this.tickPositions, i = this.minorTickInterval, s = [], n;
            if (this.isLog) {
                n = e.length;
                for (t = 1; t < n; t++) s = s.concat(this.getLogTickPositions(i, e[t - 1], e[t], !0));
            } else if (this.isDatetimeAxis && t.minorTickInterval === "auto") s = s.concat(this.getTimeTicks(this.normalizeTimeTickInterval(i), this.min, this.max, t.startOfWeek)), 
            s[0] < this.min && s.shift(); else for (e = this.min + (e[0] - this.min) % i; e <= this.max; e += i) s.push(e);
            return s;
        },
        adjustForMinRange: function() {
            var t = this.options, e = this.min, i = this.max, s, n = this.dataMax - this.dataMin >= this.minRange, o, r, a, h, l;
            if (this.isXAxis && this.minRange === H && !this.isLog) c(t.min) || c(t.max) ? this.minRange = null : (_e(this.series, function(t) {
                h = t.xData;
                for (r = l = t.xIncrement ? 1 : h.length - 1; r > 0; r--) if (a = h[r] - h[r - 1], 
                o === H || a < o) o = a;
            }), this.minRange = j(o * 5, this.dataMax - this.dataMin));
            if (i - e < this.minRange) {
                var d = this.minRange;
                s = (d - i + e) / 2;
                s = [ e - s, u(t.min, e - s) ];
                if (n) s[2] = this.dataMin;
                e = P(s);
                i = [ e + d, u(t.max, e + d) ];
                if (n) i[2] = this.dataMax;
                i = T(i);
                i - e < d && (s[0] = i - d, s[1] = u(t.min, i - d), e = P(s));
            }
            this.min = e;
            this.max = i;
        },
        setAxisTranslation: function(t) {
            var e = this, i = e.max - e.min, n = e.axisPointRange || 0, o, r = 0, a = 0, h = e.linkedParent, l = !!e.categories, d = e.transA;
            if (e.isXAxis || l || n) h ? (r = h.minPointOffset, a = h.pointRangePadding) : _e(e.series, function(t) {
                var h = l ? 1 : e.isXAxis ? t.pointRange : e.axisPointRange || 0, d = t.options.pointPlacement, p = t.closestPointRange;
                h > i && (h = 0);
                n = F(n, h);
                r = F(r, s(d) ? 0 : h / 2);
                a = F(a, d === "on" ? 0 : h);
                !t.noSharedTooltip && c(p) && (o = c(o) ? j(o, p) : p);
            }), h = e.ordinalSlope && o ? e.ordinalSlope / o : 1, e.minPointOffset = r *= h, 
            e.pointRangePadding = a *= h, e.pointRange = j(n, i), e.closestPointRange = o;
            if (t) e.oldTransA = d;
            e.translationSlope = e.transA = d = e.len / (i + a || 1);
            e.transB = e.horiz ? e.left : e.bottom;
            e.minPixelPadding = d * r;
        },
        setTickPositions: function(t) {
            var e = this, i = e.chart, s = e.options, n = s.startOnTick, o = s.endOnTick, h = e.isLog, l = e.isDatetimeAxis, d = e.isXAxis, p = e.isLinked, f = e.options.tickPositioner, g = s.maxPadding, m = s.minPadding, y = s.tickInterval, v = s.minTickInterval, x = s.tickPixelInterval, b, S = e.categories;
            p ? (e.linkedParent = i[e.coll][s.linkedTo], i = e.linkedParent.getExtremes(), e.min = u(i.min, i.dataMin), 
            e.max = u(i.max, i.dataMax), s.type !== e.linkedParent.options.type && ye(11, 1)) : (e.min = u(e.userMin, s.min, e.dataMin), 
            e.max = u(e.userMax, s.max, e.dataMax));
            if (h) !t && j(e.min, u(e.dataMin, e.min)) <= 0 && ye(10, 1), e.min = C(a(e.min)), 
            e.max = C(a(e.max));
            if (e.range && c(e.max)) e.userMin = e.min = F(e.min, e.max - e.range), e.userMax = e.max, 
            e.range = null;
            e.beforePadding && e.beforePadding();
            e.adjustForMinRange();
            if (!S && !e.axisPointRange && !e.usePercentage && !p && c(e.min) && c(e.max) && (i = e.max - e.min)) {
                if (!c(s.min) && !c(e.userMin) && m && (e.dataMin < 0 || !e.ignoreMinPadding)) e.min -= i * m;
                if (!c(s.max) && !c(e.userMax) && g && (e.dataMax > 0 || !e.ignoreMaxPadding)) e.max += i * g;
            }
            if (r(s.floor)) e.min = F(e.min, s.floor);
            if (r(s.ceiling)) e.max = j(e.max, s.ceiling);
            e.min === e.max || e.min === void 0 || e.max === void 0 ? e.tickInterval = 1 : p && !y && x === e.linkedParent.options.tickPixelInterval ? e.tickInterval = e.linkedParent.tickInterval : (e.tickInterval = u(y, S ? 1 : (e.max - e.min) * x / F(e.len, x)), 
            !c(y) && e.len < x && !this.isRadial && !this.isLog && !S && n && o && (b = !0, 
            e.tickInterval /= 4));
            d && !t && _e(e.series, function(t) {
                t.processData(e.min !== e.oldMin || e.max !== e.oldMax);
            });
            e.setAxisTranslation(!0);
            e.beforeSetTickPositions && e.beforeSetTickPositions();
            if (e.postProcessTickInterval) e.tickInterval = e.postProcessTickInterval(e.tickInterval);
            if (e.pointRange) e.tickInterval = F(e.pointRange, e.tickInterval);
            if (!y && e.tickInterval < v) e.tickInterval = v;
            if (!l && !h && !y) e.tickInterval = w(e.tickInterval, null, k(e.tickInterval), u(s.allowDecimals, !(e.tickInterval > 1 && e.tickInterval < 5 && e.max > 1e3 && e.max < 9999)));
            e.minorTickInterval = s.minorTickInterval === "auto" && e.tickInterval ? e.tickInterval / 5 : s.minorTickInterval;
            e.tickPositions = t = s.tickPositions ? [].concat(s.tickPositions) : f && f.apply(e, [ e.min, e.max ]);
            if (!t) !e.ordinalPositions && (e.max - e.min) / e.tickInterval > F(2 * e.len, 200) && ye(19, !0), 
            t = l ? e.getTimeTicks(e.normalizeTimeTickInterval(e.tickInterval, s.units), e.min, e.max, s.startOfWeek, e.ordinalPositions, e.closestPointRange, !0) : h ? e.getLogTickPositions(e.tickInterval, e.min, e.max) : e.getLinearTickPositions(e.tickInterval, e.min, e.max), 
            b && t.splice(1, t.length - 2), e.tickPositions = t;
            if (!p) s = t[0], h = t[t.length - 1], l = e.minPointOffset || 0, n ? e.min = s : e.min - l > s && t.shift(), 
            o ? e.max = h : e.max + l < h && t.pop(), t.length === 0 && c(s) && t.push((h + s) / 2), 
            t.length === 1 && (n = V(e.max) > 1e13 ? 1 : .001, e.min -= n, e.max += n);
        },
        setMaxTicks: function() {
            var t = this.chart, e = t.maxTicks || {}, i = this.tickPositions, s = this._maxTicksKey = [ this.coll, this.pos, this.len ].join("-");
            if (!this.isLinked && !this.isDatetimeAxis && i && i.length > (e[s] || 0) && this.options.alignTicks !== !1) e[s] = i.length;
            t.maxTicks = e;
        },
        adjustTickAmount: function() {
            var t = this._maxTicksKey, e = this.tickPositions, i = this.chart.maxTicks;
            if (i && i[t] && !this.isDatetimeAxis && !this.categories && !this.isLinked && this.options.alignTicks !== !1 && this.min !== H) {
                var s = this.tickAmount, n = e.length;
                this.tickAmount = t = i[t];
                if (n < t) {
                    for (;e.length < t; ) e.push(C(e[e.length - 1] + this.tickInterval));
                    this.transA *= (n - 1) / (t - 1);
                    this.max = e[e.length - 1];
                }
                if (c(s) && t !== s) this.isDirty = !0;
            }
        },
        setScale: function() {
            var t = this.stacks, e, i, s, n;
            this.oldMin = this.min;
            this.oldMax = this.max;
            this.oldAxisLength = this.len;
            this.setAxisSize();
            n = this.len !== this.oldAxisLength;
            _e(this.series, function(t) {
                if (t.isDirtyData || t.isDirty || t.xAxis.isDirty) s = !0;
            });
            if (n || s || this.isLinked || this.forceRedraw || this.userMin !== this.oldUserMin || this.userMax !== this.oldUserMax) {
                if (!this.isXAxis) for (e in t) for (i in t[e]) t[e][i].total = null, t[e][i].cum = 0;
                this.forceRedraw = !1;
                this.getSeriesExtremes();
                this.setTickPositions();
                this.oldUserMin = this.userMin;
                this.oldUserMax = this.userMax;
                if (!this.isDirty) this.isDirty = n || this.min !== this.oldMin || this.max !== this.oldMax;
            } else if (!this.isXAxis) {
                if (this.oldStacks) t = this.stacks = this.oldStacks;
                for (e in t) for (i in t[e]) t[e][i].cum = t[e][i].total;
            }
            this.setMaxTicks();
        },
        setExtremes: function(e, i, s, n, o) {
            var r = this, a = r.chart, s = u(s, !0), o = t(o, {
                min: e,
                max: i
            });
            Je(r, "setExtremes", o, function() {
                r.userMin = e;
                r.userMax = i;
                r.eventArgs = o;
                r.isDirtyExtremes = !0;
                s && a.redraw(n);
            });
        },
        zoom: function(t, e) {
            var i = this.dataMin, s = this.dataMax, n = this.options;
            this.allowZoomOutside || (c(i) && t <= j(i, u(n.min, i)) && (t = H), c(s) && e >= F(s, u(n.max, s)) && (e = H));
            this.displayBtn = t !== H || e !== H;
            this.setExtremes(t, e, !1, H, {
                trigger: "zoom"
            });
            return !0;
        },
        setAxisSize: function() {
            var t = this.chart, e = this.options, i = e.offsetLeft || 0, s = this.horiz, n = u(e.width, t.plotWidth - i + (e.offsetRight || 0)), o = u(e.height, t.plotHeight), r = u(e.top, t.plotTop), e = u(e.left, t.plotLeft + i), i = /%$/;
            i.test(o) && (o = parseInt(o, 10) / 100 * t.plotHeight);
            i.test(r) && (r = parseInt(r, 10) / 100 * t.plotHeight + t.plotTop);
            this.left = e;
            this.top = r;
            this.width = n;
            this.height = o;
            this.bottom = t.chartHeight - o - r;
            this.right = t.chartWidth - n - e;
            this.len = F(s ? n : o, 0);
            this.pos = s ? e : r;
        },
        getExtremes: function() {
            var t = this.isLog;
            return {
                min: t ? C(h(this.min)) : this.min,
                max: t ? C(h(this.max)) : this.max,
                dataMin: this.dataMin,
                dataMax: this.dataMax,
                userMin: this.userMin,
                userMax: this.userMax
            };
        },
        getThreshold: function(t) {
            var e = this.isLog, i = e ? h(this.min) : this.min, e = e ? h(this.max) : this.max;
            i > t || t === null ? t = i : e < t && (t = e);
            return this.translate(t, 0, 1, 0, 1);
        },
        autoLabelAlign: function(t) {
            t = (u(t, 0) - this.side * 90 + 720) % 360;
            return t > 15 && t < 165 ? "right" : t > 195 && t < 345 ? "left" : "center";
        },
        getOffset: function() {
            var t = this, e = t.chart, i = e.renderer, s = t.options, n = t.tickPositions, o = t.ticks, r = t.horiz, a = t.side, h = e.inverted ? [ 1, 0, 3, 2 ][a] : a, l, d, p = 0, f, g = 0, m = s.title, y = s.labels, v = 0, x = e.axisOffset, e = e.clipOffset, b = [ -1, 1, 1, -1 ][a], k, w = 1, S = u(y.maxStaggerLines, 5), T, P, A, L, C;
            t.hasData = l = t.hasVisibleSeries || c(t.min) && c(t.max) && !!n;
            t.showAxis = d = l || u(s.showEmpty, !0);
            t.staggerLines = t.horiz && y.staggerLines;
            if (!t.axisGroup) t.gridGroup = i.g("grid").attr({
                zIndex: s.gridZIndex || 1
            }).add(), t.axisGroup = i.g("axis").attr({
                zIndex: s.zIndex || 2
            }).add(), t.labelGroup = i.g("axis-labels").attr({
                zIndex: y.zIndex || 7
            }).addClass("highcharts-" + t.coll.toLowerCase() + "-labels").add();
            if (l || t.isLinked) {
                t.labelAlign = u(y.align || t.autoLabelAlign(y.rotation));
                _e(n, function(e) {
                    o[e] ? o[e].addLabel() : o[e] = new B(t, e);
                });
                if (t.horiz && !t.staggerLines && S && !y.rotation) {
                    for (l = t.reversed ? [].concat(n).reverse() : n; w < S; ) {
                        T = [];
                        P = !1;
                        for (k = 0; k < l.length; k++) A = l[k], L = (L = o[A].label && o[A].label.getBBox()) ? L.width : 0, 
                        C = k % w, L && (A = t.translate(A), T[C] !== H && A < T[C] && (P = !0), T[C] = A + L);
                        if (P) w++; else break;
                    }
                    if (w > 1) t.staggerLines = w;
                }
                _e(n, function(e) {
                    if (a === 0 || a === 2 || {
                        1: "left",
                        3: "right"
                    }[a] === t.labelAlign) v = F(o[e].getLabelSize(), v);
                });
                if (t.staggerLines) v *= t.staggerLines, t.labelOffset = v;
            } else for (k in o) o[k].destroy(), delete o[k];
            if (m && m.text && m.enabled !== !1) {
                if (!t.axisTitle) t.axisTitle = i.text(m.text, 0, 0, m.useHTML).attr({
                    zIndex: 7,
                    rotation: m.rotation || 0,
                    align: m.textAlign || {
                        low: "left",
                        middle: "center",
                        high: "right"
                    }[m.align]
                }).addClass("highcharts-" + this.coll.toLowerCase() + "-title").css(m.style).add(t.axisGroup), 
                t.axisTitle.isNew = !0;
                if (d) p = t.axisTitle.getBBox()[r ? "height" : "width"], f = m.offset, g = c(f) ? 0 : u(m.margin, r ? 5 : 10);
                t.axisTitle[d ? "show" : "hide"]();
            }
            t.offset = b * u(s.offset, x[a]);
            i = a === 2 ? t.tickBaseline : 0;
            r = v + g + (v && b * (r ? u(y.y, t.tickBaseline + 8) : y.x) - i);
            t.axisTitleMargin = u(f, r);
            x[a] = F(x[a], t.axisTitleMargin + p + b * t.offset, r);
            e[h] = F(e[h], Y(s.lineWidth / 2) * 2);
        },
        getLinePath: function(t) {
            var e = this.chart, i = this.opposite, s = this.offset, n = this.horiz, o = this.left + (i ? this.width : 0) + s, s = e.chartHeight - this.bottom - (i ? this.height : 0) + s;
            i && (t *= -1);
            return e.renderer.crispLine([ "M", n ? this.left : o, n ? s : this.top, "L", n ? e.chartWidth - this.right : o, n ? s : e.chartHeight - this.bottom ], t);
        },
        getTitlePosition: function() {
            var t = this.horiz, e = this.left, s = this.top, n = this.len, o = this.options.title, r = t ? e : s, a = this.opposite, h = this.offset, l = i(o.style.fontSize || 12), n = {
                low: r + (t ? 0 : n),
                middle: r + n / 2,
                high: r + (t ? n : 0)
            }[o.align], e = (t ? s + this.height : e) + (t ? 1 : -1) * (a ? -1 : 1) * this.axisTitleMargin + (this.side === 2 ? l : 0);
            return {
                x: t ? n : e + (a ? this.width : 0) + h + (o.x || 0),
                y: t ? e - (a ? this.height : 0) + h : n + (o.y || 0)
            };
        },
        render: function() {
            var t = this, e = t.horiz, i = t.reversed, s = t.chart, n = s.renderer, o = t.options, r = t.isLog, a = t.isLinked, l = t.tickPositions, d, p = t.axisTitle, u = t.ticks, f = t.minorTicks, g = t.alternateBands, m = o.stackLabels, y = o.alternateGridColor, v = t.tickmarkOffset, x = o.lineWidth, b = s.hasRendered && c(t.oldMin) && !isNaN(t.oldMin), k = t.hasData, w = t.showAxis, S, T = o.labels.overflow, P = t.justifyLabels = e && T !== !1, A;
            t.labelEdge.length = 0;
            t.justifyToPlot = T === "justify";
            _e([ u, f, g ], function(t) {
                for (var e in t) t[e].isActive = !1;
            });
            if (k || a) if (t.minorTickInterval && !t.categories && _e(t.getMinorTickPositions(), function(e) {
                f[e] || (f[e] = new B(t, e, "minor"));
                b && f[e].isNew && f[e].render(null, !0);
                f[e].render(null, !1, 1);
            }), l.length && (d = l.slice(), (e && i || !e && !i) && d.reverse(), P && (d = d.slice(1).concat([ d[0] ])), 
            _e(d, function(e, i) {
                P && (i = i === d.length - 1 ? 0 : i + 1);
                if (!a || e >= t.min && e <= t.max) u[e] || (u[e] = new B(t, e)), b && u[e].isNew && u[e].render(i, !0, .1), 
                u[e].render(i);
            }), v && t.min === 0 && (u[-1] || (u[-1] = new B(t, -1, null, !0)), u[-1].render(-1))), 
            y && _e(l, function(e, i) {
                if (i % 2 === 0 && e < t.max) g[e] || (g[e] = new We.PlotLineOrBand(t)), S = e + v, 
                A = l[i + 1] !== H ? l[i + 1] + v : t.max, g[e].options = {
                    from: r ? h(S) : S,
                    to: r ? h(A) : A,
                    color: y
                }, g[e].render(), g[e].isActive = !0;
            }), !t._addedPlotLB) _e((o.plotLines || []).concat(o.plotBands || []), function(e) {
                t.addPlotBandOrLine(e);
            }), t._addedPlotLB = !0;
            _e([ u, f, g ], function(t) {
                var e, i, n = [], o = fe ? fe.duration || 500 : 0, r = function() {
                    for (i = n.length; i--; ) t[n[i]] && !t[n[i]].isActive && (t[n[i]].destroy(), delete t[n[i]]);
                };
                for (e in t) if (!t[e].isActive) t[e].render(e, !1, 0), t[e].isActive = !1, n.push(e);
                t === g || !s.hasRendered || !o ? r() : o && setTimeout(r, o);
            });
            if (x) e = t.getLinePath(x), t.axisLine ? t.axisLine.animate({
                d: e
            }) : t.axisLine = n.path(e).attr({
                stroke: o.lineColor,
                "stroke-width": x,
                zIndex: 7
            }).add(t.axisGroup), t.axisLine[w ? "show" : "hide"]();
            if (p && w) p[p.isNew ? "attr" : "animate"](t.getTitlePosition()), p.isNew = !1;
            m && m.enabled && t.renderStackTotals();
            t.isDirty = !1;
        },
        redraw: function() {
            this.render();
            _e(this.plotLinesAndBands, function(t) {
                t.render();
            });
            _e(this.series, function(t) {
                t.isDirty = !0;
            });
        },
        destroy: function(t) {
            var e = this, i = e.stacks, s, n = e.plotLinesAndBands;
            t || qe(e);
            for (s in i) A(i[s]), i[s] = null;
            _e([ e.ticks, e.minorTicks, e.alternateBands ], function(t) {
                A(t);
            });
            for (t = n.length; t--; ) n[t].destroy();
            _e("stackTotalGroup,axisLine,axisTitle,axisGroup,cross,gridGroup,labelGroup".split(","), function(t) {
                e[t] && (e[t] = e[t].destroy());
            });
            this.cross && this.cross.destroy();
        },
        drawCrosshair: function(t, e) {
            if (this.crosshair) if ((c(e) || !u(this.crosshair.snap, !0)) === !1) this.hideCrosshair(); else {
                var i, s = this.crosshair, n = s.animation;
                u(s.snap, !0) ? c(e) && (i = this.chart.inverted != this.horiz ? e.plotX : this.len - e.plotY) : i = this.horiz ? t.chartX - this.pos : this.len - t.chartY + this.pos;
                i = this.isRadial ? this.getPlotLinePath(this.isXAxis ? e.x : u(e.stackY, e.y)) : this.getPlotLinePath(null, null, null, null, i);
                if (i === null) this.hideCrosshair(); else if (this.cross) this.cross.attr({
                    visibility: "visible"
                })[n ? "animate" : "attr"]({
                    d: i
                }, n); else {
                    n = {
                        "stroke-width": s.width || 1,
                        stroke: s.color || "#C0C0C0",
                        zIndex: s.zIndex || 2
                    };
                    if (s.dashStyle) n.dashstyle = s.dashStyle;
                    this.cross = this.chart.renderer.path(i).attr(n).add();
                }
            }
        },
        hideCrosshair: function() {
            this.cross && this.cross.hide();
        }
    };
    t(O.prototype, {
        getPlotBandPath: function(t, e) {
            var i = this.getPlotLinePath(e), s = this.getPlotLinePath(t);
            s && i ? s.push(i[4], i[5], i[1], i[2]) : s = null;
            return s;
        },
        addPlotBand: function(t) {
            return this.addPlotBandOrLine(t, "plotBands");
        },
        addPlotLine: function(t) {
            return this.addPlotBandOrLine(t, "plotLines");
        },
        addPlotBandOrLine: function(t, e) {
            var i = new We.PlotLineOrBand(this, t).render(), s = this.userOptions;
            i && (e && (s[e] = s[e] || [], s[e].push(t)), this.plotLinesAndBands.push(i));
            return i;
        },
        removePlotBandOrLine: function(t) {
            for (var e = this.plotLinesAndBands, i = this.options, s = this.userOptions, n = e.length; n--; ) e[n].id === t && e[n].destroy();
            _e([ i.plotLines || [], s.plotLines || [], i.plotBands || [], s.plotBands || [] ], function(e) {
                for (n = e.length; n--; ) e[n].id === t && l(e, e[n]);
            });
        }
    });
    O.prototype.getTimeTicks = function(e, i, s, n) {
        var o = [], r = {}, a = pe.global.useUTC, h, l = new Pe(i - Le), d = e.unitRange, p = e.count;
        if (c(i)) {
            d >= me.second && (l.setMilliseconds(0), l.setSeconds(d >= me.minute ? 0 : p * Y(l.getSeconds() / p)));
            if (d >= me.minute) l[ze](d >= me.hour ? 0 : p * Y(l[Ce]() / p));
            if (d >= me.hour) l[Re](d >= me.day ? 0 : p * Y(l[Me]() / p));
            if (d >= me.day) l[He](d >= me.month ? 1 : p * Y(l[De]() / p));
            d >= me.month && (l[Xe](d >= me.year ? 0 : p * Y(l[Be]() / p)), h = l[Oe]());
            d >= me.year && (h -= h % p, l[Ee](h));
            if (d === me.week) l[He](l[De]() - l[Ie]() + u(n, 1));
            i = 1;
            Le && (l = new Pe(l.getTime() + Le));
            h = l[Oe]();
            for (var n = l.getTime(), f = l[Be](), g = l[De](), m = (me.day + (a ? Le : l.getTimezoneOffset() * 6e4)) % me.day; n < s; ) o.push(n), 
            d === me.year ? n = Ae(h + i * p, 0) : d === me.month ? n = Ae(h, f + i * p) : !a && (d === me.day || d === me.week) ? n = Ae(h, f, g + i * p * (d === me.day ? 1 : 7)) : n += d * p, 
            i++;
            o.push(n);
            _e(Ue(o, function(t) {
                return d <= me.hour && t % me.day === m;
            }), function(t) {
                r[t] = "day";
            });
        }
        o.info = t(e, {
            higherRanks: r,
            totalRange: d * p
        });
        return o;
    };
    O.prototype.normalizeTimeTickInterval = function(t, e) {
        var i = e || [ [ "millisecond", [ 1, 2, 5, 10, 20, 25, 50, 100, 200, 500 ] ], [ "second", [ 1, 2, 5, 10, 15, 30 ] ], [ "minute", [ 1, 2, 5, 10, 15, 30 ] ], [ "hour", [ 1, 2, 3, 4, 6, 8, 12 ] ], [ "day", [ 1, 2 ] ], [ "week", [ 1, 2 ] ], [ "month", [ 1, 2, 3, 4, 6 ] ], [ "year", null ] ], s = i[i.length - 1], n = me[s[0]], o = s[1], r;
        for (r = 0; r < i.length; r++) if (s = i[r], n = me[s[0]], o = s[1], i[r + 1] && t <= (n * o[o.length - 1] + me[i[r + 1][0]]) / 2) break;
        n === me.year && t < 5 * n && (o = [ 1, 2, 5 ]);
        i = w(t / n, o, s[0] === "year" ? F(k(t / n), 1) : 1);
        return {
            unitRange: n,
            count: i,
            unitName: s[0]
        };
    };
    O.prototype.getLogTickPositions = function(t, e, i, s) {
        var n = this.options, o = this.len, r = [];
        if (!s) this._minorAutoInterval = null;
        if (t >= .5) t = W(t), r = this.getLinearTickPositions(t, e, i); else if (t >= .08) for (var o = Y(e), l, c, d, p, f, n = t > .3 ? [ 1, 2, 4 ] : t > .15 ? [ 1, 2, 4, 6, 8 ] : [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]; o < i + 1 && !f; o++) {
            c = n.length;
            for (l = 0; l < c && !f; l++) d = a(h(o) * n[l]), d > e && (!s || p <= i) && p !== H && r.push(p), 
            p > i && (f = !0), p = d;
        } else if (e = h(e), i = h(i), t = n[s ? "minorTickInterval" : "tickInterval"], 
        t = u(t === "auto" ? null : t, this._minorAutoInterval, (i - e) * (n.tickPixelInterval / (s ? 5 : 1)) / ((s ? o / this.tickPositions.length : o) || 1)), 
        t = w(t, null, k(t)), r = Ke(this.getLinearTickPositions(t, e, i), a), !s) this._minorAutoInterval = t / 5;
        if (!s) this.tickInterval = t;
        return r;
    };
    var di = We.Tooltip = function() {
        this.init.apply(this, arguments);
    };
    di.prototype = {
        init: function(t, e) {
            var s = e.borderWidth, n = e.style, o = i(n.padding);
            this.chart = t;
            this.options = e;
            this.crosshairs = [];
            this.now = {
                x: 0,
                y: 0
            };
            this.isHidden = !0;
            this.label = t.renderer.label("", 0, 0, e.shape || "callout", null, null, e.useHTML, null, "tooltip").attr({
                padding: o,
                fill: e.backgroundColor,
                "stroke-width": s,
                r: e.borderRadius,
                zIndex: 8
            }).css(n).css({
                padding: 0
            }).add().attr({
                y: -9999
            });
            re || this.label.shadow(e.shadow);
            this.shared = e.shared;
        },
        destroy: function() {
            if (this.label) this.label = this.label.destroy();
            clearTimeout(this.hideTimer);
            clearTimeout(this.tooltipTimeout);
        },
        move: function(e, i, s, n) {
            var o = this, r = o.now, a = o.options.animation !== !1 && !o.isHidden && (V(e - r.x) > 1 || V(i - r.y) > 1), h = o.followPointer || o.len > 1;
            t(r, {
                x: a ? (2 * r.x + e) / 3 : e,
                y: a ? (r.y + i) / 2 : i,
                anchorX: h ? H : a ? (2 * r.anchorX + s) / 3 : s,
                anchorY: h ? H : a ? (r.anchorY + n) / 2 : n
            });
            o.label.attr(r);
            if (a) clearTimeout(this.tooltipTimeout), this.tooltipTimeout = setTimeout(function() {
                o && o.move(e, i, s, n);
            }, 32);
        },
        hide: function(t) {
            var e = this, i;
            clearTimeout(this.hideTimer);
            if (!this.isHidden) i = this.chart.hoverPoints, this.hideTimer = setTimeout(function() {
                e.label.fadeOut();
                e.isHidden = !0;
            }, u(t, this.options.hideDelay, 500)), i && _e(i, function(t) {
                t.setState();
            }), this.chart.hoverPoints = null;
        },
        getAnchor: function(t, e) {
            var i, s = this.chart, n = s.inverted, o = s.plotTop, r = 0, a = 0, h, t = p(t);
            i = t[0].tooltipPos;
            this.followPointer && e && (e.chartX === H && (e = s.pointer.normalize(e)), i = [ e.chartX - s.plotLeft, e.chartY - o ]);
            i || (_e(t, function(t) {
                h = t.series.yAxis;
                r += t.plotX;
                a += (t.plotLow ? (t.plotLow + t.plotHigh) / 2 : t.plotY) + (!n && h ? h.top - o : 0);
            }), r /= t.length, a /= t.length, i = [ n ? s.plotWidth - a : r, this.shared && !n && t.length > 1 && e ? e.chartY - o : n ? s.plotHeight - r : a ]);
            return Ke(i, W);
        },
        getPosition: function(t, e, i) {
            var s = this.chart, n = this.distance, o = {}, r, a = [ "y", s.chartHeight, e, i.plotY + s.plotTop ], h = [ "x", s.chartWidth, t, i.plotX + s.plotLeft ], l = i.ttBelow || s.inverted && !i.negative || !s.inverted && i.negative, c = function(t, e, i, s) {
                var r = i < s - n, e = s + n + i < e, i = s - n - i;
                s += n;
                if (l && e) o[t] = s; else if (!l && r) o[t] = i; else if (r) o[t] = i; else if (e) o[t] = s; else return !1;
            }, d = function(t, e, i, s) {
                if (s < n || s > e - n) return !1; else o[t] = s < i / 2 ? 1 : s > e - i / 2 ? e - i - 2 : s - i / 2;
            }, p = function(t) {
                var e = a;
                a = h;
                h = e;
                r = t;
            }, u = function() {
                c.apply(0, a) !== !1 ? d.apply(0, h) === !1 && !r && (p(!0), u()) : r ? o.x = o.y = 0 : (p(!0), 
                u());
            };
            (s.inverted || this.len > 1) && p();
            u();
            return o;
        },
        defaultFormatter: function(t) {
            var e = this.points || p(this), i = e[0].series, s;
            s = [ t.tooltipHeaderFormatter(e[0]) ];
            _e(e, function(t) {
                i = t.series;
                s.push(i.tooltipFormatter && i.tooltipFormatter(t) || t.point.tooltipFormatter(i.tooltipOptions.pointFormat));
            });
            s.push(t.options.footerFormat || "");
            return s.join("");
        },
        refresh: function(t, e) {
            var i = this.chart, s = this.label, n = this.options, o, r, a = {}, h, l = [];
            h = n.formatter || this.defaultFormatter;
            var a = i.hoverPoints, c, d = this.shared;
            clearTimeout(this.hideTimer);
            this.followPointer = p(t)[0].series.tooltipOptions.followPointer;
            r = this.getAnchor(t, e);
            o = r[0];
            r = r[1];
            d && (!t.series || !t.series.noSharedTooltip) ? (i.hoverPoints = t, a && _e(a, function(t) {
                t.setState();
            }), _e(t, function(t) {
                t.setState("hover");
                l.push(t.getLabelConfig());
            }), a = {
                x: t[0].category,
                y: t[0].y
            }, a.points = l, this.len = l.length, t = t[0]) : a = t.getLabelConfig();
            h = h.call(a, this);
            a = t.series;
            this.distance = u(a.tooltipOptions.distance, 16);
            h === !1 ? this.hide() : (this.isHidden && (ei(s), s.attr("opacity", 1).show()), 
            s.attr({
                text: h
            }), c = n.borderColor || t.color || a.color || "#606060", s.attr({
                stroke: c
            }), this.updatePosition({
                plotX: o,
                plotY: r,
                negative: t.negative,
                ttBelow: t.ttBelow
            }), this.isHidden = !1);
            Je(i, "tooltipRefresh", {
                text: h,
                x: o + i.plotLeft,
                y: r + i.plotTop,
                borderColor: c
            });
        },
        updatePosition: function(t) {
            var e = this.chart, i = this.label, i = (this.options.positioner || this.getPosition).call(this, i.width, i.height, t);
            this.move(W(i.x), W(i.y), t.plotX + e.plotLeft, t.plotY + e.plotTop);
        },
        tooltipHeaderFormatter: function(t) {
            var e = t.series, i = e.tooltipOptions, s = i.dateTimeLabelFormats, n = i.xDateFormat, o = e.xAxis, a = o && o.options.type === "datetime" && r(t.key), i = i.headerFormat, o = o && o.closestPointRange, h;
            if (a && !n) {
                if (o) for (h in me) {
                    if (me[h] >= o || me[h] <= me.day && t.key % me[h] > 0) {
                        n = s[h];
                        break;
                    }
                } else n = s.day;
                n = n || s.year;
            }
            a && n && (i = i.replace("{point.key}", "{point.key:" + n + "}"));
            return b(i, {
                point: t,
                series: e
            });
        }
    };
    var pi;
    he = X.documentElement.ontouchstart !== H;
    var ui = We.Pointer = function(t, e) {
        this.init(t, e);
    };
    ui.prototype = {
        init: function(t, e) {
            var i = e.chart, s = i.events, n = re ? "" : i.zoomType, i = t.inverted, o;
            this.options = e;
            this.chart = t;
            this.zoomX = o = /x/.test(n);
            this.zoomY = n = /y/.test(n);
            this.zoomHor = o && !i || n && i;
            this.zoomVert = n && !i || o && i;
            this.hasZoom = o || n;
            this.runChartClick = s && !!s.click;
            this.pinchDown = [];
            this.lastValidTouch = {};
            if (We.Tooltip && e.tooltip.enabled) t.tooltip = new di(t, e.tooltip), this.followTouchMove = e.tooltip.followTouchMove;
            this.setDOMEvents();
        },
        normalize: function(e, i) {
            var s, n, e = e || window.event, e = Qe(e);
            if (!e.target) e.target = e.srcElement;
            n = e.touches ? e.touches.length ? e.touches.item(0) : e.changedTouches[0] : e;
            if (!i) this.chartPosition = i = Ze(this.chart.container);
            n.pageX === H ? (s = F(e.x, e.clientX - i.left), n = e.y) : (s = n.pageX - i.left, 
            n = n.pageY - i.top);
            return t(e, {
                chartX: W(s),
                chartY: W(n)
            });
        },
        getCoordinates: function(t) {
            var e = {
                xAxis: [],
                yAxis: []
            };
            _e(this.chart.axes, function(i) {
                e[i.isXAxis ? "xAxis" : "yAxis"].push({
                    axis: i,
                    value: i.toValue(t[i.horiz ? "chartX" : "chartY"])
                });
            });
            return e;
        },
        getIndex: function(t) {
            var e = this.chart;
            return e.inverted ? e.plotHeight + e.plotTop - t.chartY : t.chartX - e.plotLeft;
        },
        runPointActions: function(t) {
            var e = this.chart, i = e.series, s = e.tooltip, n, o, r = e.hoverPoint, a = e.hoverSeries, h, l, c = e.chartWidth, d = this.getIndex(t);
            if (s && this.options.tooltip.shared && (!a || !a.noSharedTooltip)) {
                o = [];
                h = i.length;
                for (l = 0; l < h; l++) if (i[l].visible && i[l].options.enableMouseTracking !== !1 && !i[l].noSharedTooltip && i[l].singularTooltips !== !0 && i[l].tooltipPoints.length && (n = i[l].tooltipPoints[d]) && n.series) n._dist = V(d - n.clientX), 
                c = j(c, n._dist), o.push(n);
                for (h = o.length; h--; ) o[h]._dist > c && o.splice(h, 1);
                if (o.length && o[0].clientX !== this.hoverX) s.refresh(o, t), this.hoverX = o[0].clientX;
            }
            i = a && a.tooltipOptions.followPointer;
            if (a && a.tracker && !i) {
                if ((n = a.tooltipPoints[d]) && n !== r) n.onMouseOver(t);
            } else s && i && !s.isHidden && (a = s.getAnchor([ {} ], t), s.updatePosition({
                plotX: a[0],
                plotY: a[1]
            }));
            if (s && !this._onDocumentMouseMove) this._onDocumentMouseMove = function(t) {
                if (xe[pi]) xe[pi].pointer.onDocumentMouseMove(t);
            }, $e(X, "mousemove", this._onDocumentMouseMove);
            _e(e.axes, function(e) {
                e.drawCrosshair(t, u(n, r));
            });
        },
        reset: function(t, e) {
            var i = this.chart, s = i.hoverSeries, n = i.hoverPoint, o = i.tooltip, r = o && o.shared ? i.hoverPoints : n;
            (t = t && o && r) && p(r)[0].plotX === H && (t = !1);
            if (t) o.refresh(r), n && n.setState(n.state, !0); else {
                if (n) n.onMouseOut();
                if (s) s.onMouseOut();
                o && o.hide(e);
                if (this._onDocumentMouseMove) qe(X, "mousemove", this._onDocumentMouseMove), this._onDocumentMouseMove = null;
                _e(i.axes, function(t) {
                    t.hideCrosshair();
                });
                this.hoverX = null;
            }
        },
        scaleGroups: function(t, e) {
            var i = this.chart, s;
            _e(i.series, function(n) {
                s = t || n.getPlotBox();
                n.xAxis && n.xAxis.zoomEnabled && (n.group.attr(s), n.markerGroup && (n.markerGroup.attr(s), 
                n.markerGroup.clip(e ? i.clipRect : null)), n.dataLabelsGroup && n.dataLabelsGroup.attr(s));
            });
            i.clipRect.attr(e || i.clipBox);
        },
        dragStart: function(t) {
            var e = this.chart;
            e.mouseIsDown = t.type;
            e.cancelClick = !1;
            e.mouseDownX = this.mouseDownX = t.chartX;
            e.mouseDownY = this.mouseDownY = t.chartY;
        },
        drag: function(t) {
            var e = this.chart, i = e.options.chart, s = t.chartX, n = t.chartY, o = this.zoomHor, r = this.zoomVert, a = e.plotLeft, h = e.plotTop, l = e.plotWidth, c = e.plotHeight, d, p = this.mouseDownX, u = this.mouseDownY, f = i.panKey && t[i.panKey + "Key"];
            s < a ? s = a : s > a + l && (s = a + l);
            n < h ? n = h : n > h + c && (n = h + c);
            this.hasDragged = Math.sqrt(Math.pow(p - s, 2) + Math.pow(u - n, 2));
            if (this.hasDragged > 10) {
                d = e.isInsidePlot(p - a, u - h);
                if (e.hasCartesianSeries && (this.zoomX || this.zoomY) && d && !f && !this.selectionMarker) this.selectionMarker = e.renderer.rect(a, h, o ? 1 : l, r ? 1 : c, 0).attr({
                    fill: i.selectionMarkerFill || "rgba(69,114,167,0.25)",
                    zIndex: 7
                }).add();
                this.selectionMarker && o && (s -= p, this.selectionMarker.attr({
                    width: V(s),
                    x: (s > 0 ? 0 : s) + p
                }));
                this.selectionMarker && r && (s = n - u, this.selectionMarker.attr({
                    height: V(s),
                    y: (s > 0 ? 0 : s) + u
                }));
                d && !this.selectionMarker && i.panning && e.pan(t, i.panning);
            }
        },
        drop: function(e) {
            var i = this.chart, s = this.hasPinched;
            if (this.selectionMarker) {
                var n = {
                    xAxis: [],
                    yAxis: [],
                    originalEvent: e.originalEvent || e
                }, o = this.selectionMarker, r = o.attr ? o.attr("x") : o.x, a = o.attr ? o.attr("y") : o.y, h = o.attr ? o.attr("width") : o.width, l = o.attr ? o.attr("height") : o.height, c;
                if (this.hasDragged || s) _e(i.axes, function(t) {
                    if (t.zoomEnabled) {
                        var i = t.horiz, s = e.type === "touchend" ? t.minPixelPadding : 0, o = t.toValue((i ? r : a) + s), i = t.toValue((i ? r + h : a + l) - s);
                        !isNaN(o) && !isNaN(i) && (n[t.coll].push({
                            axis: t,
                            min: j(o, i),
                            max: F(o, i)
                        }), c = !0);
                    }
                }), c && Je(i, "selection", n, function(e) {
                    i.zoom(t(e, s ? {
                        animation: !1
                    } : null));
                });
                this.selectionMarker = this.selectionMarker.destroy();
                s && this.scaleGroups();
            }
            if (i) f(i.container, {
                cursor: i._cursor
            }), i.cancelClick = this.hasDragged > 10, i.mouseIsDown = this.hasDragged = this.hasPinched = !1, 
            this.pinchDown = [];
        },
        onContainerMouseDown: function(t) {
            t = this.normalize(t);
            t.preventDefault && t.preventDefault();
            this.dragStart(t);
        },
        onDocumentMouseUp: function(t) {
            xe[pi] && xe[pi].pointer.drop(t);
        },
        onDocumentMouseMove: function(t) {
            var e = this.chart, i = this.chartPosition, s = e.hoverSeries, t = this.normalize(t, i);
            i && s && !this.inClass(t.target, "highcharts-tracker") && !e.isInsidePlot(t.chartX - e.plotLeft, t.chartY - e.plotTop) && this.reset();
        },
        onContainerMouseLeave: function() {
            var t = xe[pi];
            if (t) t.pointer.reset(), t.pointer.chartPosition = null;
        },
        onContainerMouseMove: function(t) {
            var e = this.chart;
            pi = e.index;
            t = this.normalize(t);
            t.returnValue = !1;
            e.mouseIsDown === "mousedown" && this.drag(t);
            (this.inClass(t.target, "highcharts-tracker") || e.isInsidePlot(t.chartX - e.plotLeft, t.chartY - e.plotTop)) && !e.openMenu && this.runPointActions(t);
        },
        inClass: function(t, e) {
            for (var i; t; ) {
                if (i = d(t, "class")) if (i.indexOf(e) !== -1) return !0; else if (i.indexOf("highcharts-container") !== -1) return !1;
                t = t.parentNode;
            }
        },
        onTrackerMouseOut: function(t) {
            var e = this.chart.hoverSeries, i = (t = t.relatedTarget || t.toElement) && t.point && t.point.series;
            if (e && !e.options.stickyTracking && !this.inClass(t, "highcharts-tooltip") && i !== e) e.onMouseOut();
        },
        onContainerClick: function(e) {
            var i = this.chart, s = i.hoverPoint, n = i.plotLeft, o = i.plotTop, e = this.normalize(e);
            e.cancelBubble = !0;
            i.cancelClick || (s && this.inClass(e.target, "highcharts-tracker") ? (Je(s.series, "click", t(e, {
                point: s
            })), i.hoverPoint && s.firePointEvent("click", e)) : (t(e, this.getCoordinates(e)), 
            i.isInsidePlot(e.chartX - n, e.chartY - o) && Je(i, "click", e)));
        },
        setDOMEvents: function() {
            var t = this, e = t.chart.container;
            e.onmousedown = function(e) {
                t.onContainerMouseDown(e);
            };
            e.onmousemove = function(e) {
                t.onContainerMouseMove(e);
            };
            e.onclick = function(e) {
                t.onContainerClick(e);
            };
            $e(e, "mouseleave", t.onContainerMouseLeave);
            be === 1 && $e(X, "mouseup", t.onDocumentMouseUp);
            if (he) e.ontouchstart = function(e) {
                t.onContainerTouchStart(e);
            }, e.ontouchmove = function(e) {
                t.onContainerTouchMove(e);
            }, be === 1 && $e(X, "touchend", t.onDocumentTouchEnd);
        },
        destroy: function() {
            var t;
            qe(this.chart.container, "mouseleave", this.onContainerMouseLeave);
            be || (qe(X, "mouseup", this.onDocumentMouseUp), qe(X, "touchend", this.onDocumentTouchEnd));
            clearInterval(this.tooltipTimeout);
            for (t in this) this[t] = null;
        }
    };
    t(We.Pointer.prototype, {
        pinchTranslate: function(t, e, i, s, n, o) {
            (this.zoomHor || this.pinchHor) && this.pinchTranslateDirection(!0, t, e, i, s, n, o);
            (this.zoomVert || this.pinchVert) && this.pinchTranslateDirection(!1, t, e, i, s, n, o);
        },
        pinchTranslateDirection: function(t, e, i, s, n, o, r, a) {
            var h = this.chart, l = t ? "x" : "y", c = t ? "X" : "Y", d = "chart" + c, p = t ? "width" : "height", u = h["plot" + (t ? "Left" : "Top")], f, g, m = a || 1, y = h.inverted, v = h.bounds[t ? "h" : "v"], x = e.length === 1, b = e[0][d], k = i[0][d], w = !x && e[1][d], S = !x && i[1][d], T, i = function() {
                !x && V(b - w) > 20 && (m = a || V(k - S) / V(b - w));
                g = (u - k) / m + b;
                f = h["plot" + (t ? "Width" : "Height")] / m;
            };
            i();
            e = g;
            e < v.min ? (e = v.min, T = !0) : e + f > v.max && (e = v.max - f, T = !0);
            T ? (k -= .8 * (k - r[l][0]), x || (S -= .8 * (S - r[l][1])), i()) : r[l] = [ k, S ];
            y || (o[l] = g - u, o[p] = f);
            o = y ? 1 / m : m;
            n[p] = f;
            n[l] = e;
            s[y ? t ? "scaleY" : "scaleX" : "scale" + c] = m;
            s["translate" + c] = o * u + (k - o * b);
        },
        pinch: function(e) {
            var i = this, s = i.chart, n = i.pinchDown, o = i.followTouchMove, r = e.touches, a = r.length, h = i.lastValidTouch, l = i.hasZoom, c = i.selectionMarker, d = {}, p = a === 1 && (i.inClass(e.target, "highcharts-tracker") && s.runTrackerClick || i.runChartClick), f = {};
            (l || o) && !p && e.preventDefault();
            Ke(r, function(t) {
                return i.normalize(t);
            });
            if (e.type === "touchstart") _e(r, function(t, e) {
                n[e] = {
                    chartX: t.chartX,
                    chartY: t.chartY
                };
            }), h.x = [ n[0].chartX, n[1] && n[1].chartX ], h.y = [ n[0].chartY, n[1] && n[1].chartY ], 
            _e(s.axes, function(t) {
                if (t.zoomEnabled) {
                    var e = s.bounds[t.horiz ? "h" : "v"], i = t.minPixelPadding, n = t.toPixels(u(t.options.min, t.dataMin)), o = t.toPixels(u(t.options.max, t.dataMax)), r = j(n, o), n = F(n, o);
                    e.min = j(t.pos, r - i);
                    e.max = F(t.pos + t.len, n + i);
                }
            }), i.res = !0; else if (n.length) {
                if (!c) i.selectionMarker = c = t({
                    destroy: ve
                }, s.plotBox);
                i.pinchTranslate(n, r, d, c, f, h);
                i.hasPinched = l;
                i.scaleGroups(d, f);
                if (!l && o && a === 1) this.runPointActions(i.normalize(e)); else if (i.res) i.res = !1, 
                this.reset(!1, 0);
            }
        },
        onContainerTouchStart: function(t) {
            var e = this.chart;
            pi = e.index;
            t.touches.length === 1 ? (t = this.normalize(t), e.isInsidePlot(t.chartX - e.plotLeft, t.chartY - e.plotTop) ? (this.runPointActions(t), 
            this.pinch(t)) : this.reset()) : t.touches.length === 2 && this.pinch(t);
        },
        onContainerTouchMove: function(t) {
            (t.touches.length === 1 || t.touches.length === 2) && this.pinch(t);
        },
        onDocumentTouchEnd: function(t) {
            xe[pi] && xe[pi].pointer.drop(t);
        }
    });
    if (E.PointerEvent || E.MSPointerEvent) {
        var fi = {}, gi = !!E.PointerEvent, mi = function() {
            var t, e = [];
            e.item = function(t) {
                return this[t];
            };
            for (t in fi) fi.hasOwnProperty(t) && e.push({
                pageX: fi[t].pageX,
                pageY: fi[t].pageY,
                target: fi[t].target
            });
            return e;
        }, yi = function(t, e, i, s) {
            t = t.originalEvent || t;
            if ((t.pointerType === "touch" || t.pointerType === t.MSPOINTER_TYPE_TOUCH) && xe[pi]) s(t), 
            s = xe[pi].pointer, s[e]({
                type: i,
                target: t.currentTarget,
                preventDefault: ve,
                touches: mi()
            });
        };
        t(ui.prototype, {
            onContainerPointerDown: function(t) {
                yi(t, "onContainerTouchStart", "touchstart", function(t) {
                    fi[t.pointerId] = {
                        pageX: t.pageX,
                        pageY: t.pageY,
                        target: t.currentTarget
                    };
                });
            },
            onContainerPointerMove: function(t) {
                yi(t, "onContainerTouchMove", "touchmove", function(t) {
                    fi[t.pointerId] = {
                        pageX: t.pageX,
                        pageY: t.pageY
                    };
                    if (!fi[t.pointerId].target) fi[t.pointerId].target = t.currentTarget;
                });
            },
            onDocumentPointerUp: function(t) {
                yi(t, "onContainerTouchEnd", "touchend", function(t) {
                    delete fi[t.pointerId];
                });
            },
            batchMSEvents: function(t) {
                t(this.chart.container, gi ? "pointerdown" : "MSPointerDown", this.onContainerPointerDown);
                t(this.chart.container, gi ? "pointermove" : "MSPointerMove", this.onContainerPointerMove);
                t(X, gi ? "pointerup" : "MSPointerUp", this.onDocumentPointerUp);
            }
        });
        x(ui.prototype, "init", function(t, e, i) {
            t.call(this, e, i);
            (this.hasZoom || this.followTouchMove) && f(e.container, {
                "-ms-touch-action": we,
                "touch-action": we
            });
        });
        x(ui.prototype, "setDOMEvents", function(t) {
            t.apply(this);
            (this.hasZoom || this.followTouchMove) && this.batchMSEvents($e);
        });
        x(ui.prototype, "destroy", function(t) {
            this.batchMSEvents(qe);
            t.call(this);
        });
    }
    var vi = We.Legend = function(t, e) {
        this.init(t, e);
    };
    vi.prototype = {
        init: function(t, i) {
            var s = this, n = i.itemStyle, o = u(i.padding, 8), r = i.itemMarginTop || 0;
            this.options = i;
            if (i.enabled) s.itemStyle = n, s.itemHiddenStyle = e(n, i.itemHiddenStyle), s.itemMarginTop = r, 
            s.padding = o, s.initialItemX = o, s.initialItemY = o - 5, s.maxItemWidth = 0, s.chart = t, 
            s.itemHeight = 0, s.lastLineHeight = 0, s.symbolWidth = u(i.symbolWidth, 16), s.pages = [], 
            s.render(), $e(s.chart, "endResize", function() {
                s.positionCheckboxes();
            });
        },
        colorizeItem: function(t, e) {
            var i = this.options, s = t.legendItem, n = t.legendLine, o = t.legendSymbol, r = this.itemHiddenStyle.color, i = e ? i.itemStyle.color : r, a = e ? t.legendColor || t.color || "#CCC" : r, r = t.options && t.options.marker, h = {
                fill: a
            }, l;
            s && s.css({
                fill: i,
                color: i
            });
            n && n.attr({
                stroke: a
            });
            if (o) {
                if (r && o.isMarker) for (l in h.stroke = a, r = t.convertAttribs(r), r) s = r[l], 
                s !== H && (h[l] = s);
                o.attr(h);
            }
        },
        positionItem: function(t) {
            var e = this.options, i = e.symbolPadding, e = !e.rtl, s = t._legendItemPos, n = s[0], s = s[1], o = t.checkbox;
            t.legendGroup && t.legendGroup.translate(e ? n : this.legendWidth - n - 2 * i - 4, s);
            if (o) o.x = n, o.y = s;
        },
        destroyItem: function(t) {
            var e = t.checkbox;
            _e([ "legendItem", "legendLine", "legendSymbol", "legendGroup" ], function(e) {
                t[e] && (t[e] = t[e].destroy());
            });
            e && L(t.checkbox);
        },
        destroy: function() {
            var t = this.group, e = this.box;
            if (e) this.box = e.destroy();
            if (t) this.group = t.destroy();
        },
        positionCheckboxes: function(t) {
            var e = this.group.alignAttr, i, s = this.clipHeight || this.legendHeight;
            if (e) i = e.translateY, _e(this.allItems, function(n) {
                var o = n.checkbox, r;
                o && (r = i + o.y + (t || 0) + 3, f(o, {
                    left: e.translateX + n.checkboxOffset + o.x - 20 + "px",
                    top: r + "px",
                    display: r > i - 6 && r < i + s - 6 ? "" : we
                }));
            });
        },
        renderTitle: function() {
            var t = this.padding, e = this.options.title, i = 0;
            if (e.text) {
                if (!this.title) this.title = this.chart.renderer.label(e.text, t - 3, t - 4, null, null, null, null, null, "legend-title").attr({
                    zIndex: 1
                }).css(e.style).add(this.group);
                t = this.title.getBBox();
                i = t.height;
                this.offsetWidth = t.width;
                this.contentGroup.attr({
                    translateY: i
                });
            }
            this.titleHeight = i;
        },
        renderItem: function(t) {
            var i = this.chart, s = i.renderer, n = this.options, o = n.layout === "horizontal", r = this.symbolWidth, a = n.symbolPadding, h = this.itemStyle, l = this.itemHiddenStyle, c = this.padding, d = o ? u(n.itemDistance, 20) : 0, p = !n.rtl, f = n.width, g = n.itemMarginBottom || 0, m = this.itemMarginTop, y = this.initialItemX, v = t.legendItem, x = t.series && t.series.drawLegendSymbol ? t.series : t, k = x.options, k = this.createCheckboxForItem && k && k.showCheckbox, w = n.useHTML;
            if (!v) {
                t.legendGroup = s.g("legend-item").attr({
                    zIndex: 1
                }).add(this.scrollGroup);
                t.legendItem = v = s.text(n.labelFormat ? b(n.labelFormat, t) : n.labelFormatter.call(t), p ? r + a : -a, this.baseline || 0, w).css(e(t.visible ? h : l)).attr({
                    align: p ? "left" : "right",
                    zIndex: 2
                }).add(t.legendGroup);
                if (!this.baseline) this.baseline = s.fontMetrics(h.fontSize, v).f + 3 + m, v.attr("y", this.baseline);
                x.drawLegendSymbol(this, t);
                this.setItemEvents && this.setItemEvents(t, v, w, h, l);
                this.colorizeItem(t, t.visible);
                k && this.createCheckboxForItem(t);
            }
            s = v.getBBox();
            r = t.checkboxOffset = n.itemWidth || t.legendItemWidth || r + a + s.width + d + (k ? 20 : 0);
            this.itemHeight = a = W(t.legendItemHeight || s.height);
            if (o && this.itemX - y + r > (f || i.chartWidth - 2 * c - y - n.x)) this.itemX = y, 
            this.itemY += m + this.lastLineHeight + g, this.lastLineHeight = 0;
            this.maxItemWidth = F(this.maxItemWidth, r);
            this.lastItemY = m + this.itemY + g;
            this.lastLineHeight = F(a, this.lastLineHeight);
            t._legendItemPos = [ this.itemX, this.itemY ];
            o ? this.itemX += r : (this.itemY += m + a + g, this.lastLineHeight = a);
            this.offsetWidth = f || F((o ? this.itemX - y - d : r) + c, this.offsetWidth);
        },
        getAllItems: function() {
            var t = [];
            _e(this.chart.series, function(e) {
                var i = e.options;
                if (u(i.showInLegend, !c(i.linkedTo) ? H : !1, !0)) t = t.concat(e.legendItems || (i.legendType === "point" ? e.data : e));
            });
            return t;
        },
        render: function() {
            var e = this, i = e.chart, s = i.renderer, n = e.group, o, r, a, h, l = e.box, c = e.options, d = e.padding, p = c.borderWidth, u = c.backgroundColor;
            e.itemX = e.initialItemX;
            e.itemY = e.initialItemY;
            e.offsetWidth = 0;
            e.lastItemY = 0;
            if (!n) e.group = n = s.g("legend").attr({
                zIndex: 7
            }).add(), e.contentGroup = s.g().attr({
                zIndex: 1
            }).add(n), e.scrollGroup = s.g().add(e.contentGroup);
            e.renderTitle();
            o = e.getAllItems();
            S(o, function(t, e) {
                return (t.options && t.options.legendIndex || 0) - (e.options && e.options.legendIndex || 0);
            });
            c.reversed && o.reverse();
            e.allItems = o;
            e.display = r = !!o.length;
            _e(o, function(t) {
                e.renderItem(t);
            });
            a = c.width || e.offsetWidth;
            h = e.lastItemY + e.lastLineHeight + e.titleHeight;
            h = e.handleOverflow(h);
            if (p || u) {
                a += d;
                h += d;
                if (l) {
                    if (a > 0 && h > 0) l[l.isNew ? "attr" : "animate"](l.crisp({
                        width: a,
                        height: h
                    })), l.isNew = !1;
                } else e.box = l = s.rect(0, 0, a, h, c.borderRadius, p || 0).attr({
                    stroke: c.borderColor,
                    "stroke-width": p || 0,
                    fill: u || we
                }).add(n).shadow(c.shadow), l.isNew = !0;
                l[r ? "show" : "hide"]();
            }
            e.legendWidth = a;
            e.legendHeight = h;
            _e(o, function(t) {
                e.positionItem(t);
            });
            r && n.align(t({
                width: a,
                height: h
            }, c), !0, "spacingBox");
            i.isResizing || this.positionCheckboxes();
        },
        handleOverflow: function(t) {
            var e = this, i = this.chart, s = i.renderer, n = this.options, o = n.y, o = i.spacingBox.height + (n.verticalAlign === "top" ? -o : o) - this.padding, r = n.maxHeight, a, h = this.clipRect, l = n.navigation, c = u(l.animation, !0), d = l.arrowSize || 12, p = this.nav, f = this.pages, g, m = this.allItems;
            n.layout === "horizontal" && (o /= 2);
            r && (o = j(o, r));
            f.length = 0;
            if (t > o && !n.useHTML) {
                this.clipHeight = a = F(o - 20 - this.titleHeight - this.padding, 0);
                this.currentPage = u(this.currentPage, 1);
                this.fullHeight = t;
                _e(m, function(t, e) {
                    var i = t._legendItemPos[1], s = W(t.legendItem.getBBox().height), n = f.length;
                    if (!n || i - f[n - 1] > a && (g || i) !== f[n - 1]) f.push(g || i), n++;
                    e === m.length - 1 && i + s - f[n - 1] > a && f.push(i);
                    i !== g && (g = i);
                });
                if (!h) h = e.clipRect = s.clipRect(0, this.padding, 9999, 0), e.contentGroup.clip(h);
                h.attr({
                    height: a
                });
                if (!p) this.nav = p = s.g().attr({
                    zIndex: 1
                }).add(this.group), this.up = s.symbol("triangle", 0, 0, d, d).on("click", function() {
                    e.scroll(-1, c);
                }).add(p), this.pager = s.text("", 15, 10).css(l.style).add(p), this.down = s.symbol("triangle-down", 0, 0, d, d).on("click", function() {
                    e.scroll(1, c);
                }).add(p);
                e.scroll(0);
                t = o;
            } else if (p) h.attr({
                height: i.chartHeight
            }), p.hide(), this.scrollGroup.attr({
                translateY: 1
            }), this.clipHeight = 0;
            return t;
        },
        scroll: function(t, e) {
            var i = this.pages, s = i.length, n = this.currentPage + t, o = this.clipHeight, r = this.options.navigation, a = r.activeColor, r = r.inactiveColor, h = this.pager, l = this.padding;
            n > s && (n = s);
            if (n > 0) e !== H && M(e, this.chart), this.nav.attr({
                translateX: l,
                translateY: o + this.padding + 7 + this.titleHeight,
                visibility: "visible"
            }), this.up.attr({
                fill: n === 1 ? r : a
            }).css({
                cursor: n === 1 ? "default" : "pointer"
            }), h.attr({
                text: n + "/" + s
            }), this.down.attr({
                x: 18 + this.pager.getBBox().width,
                fill: n === s ? r : a
            }).css({
                cursor: n === s ? "default" : "pointer"
            }), i = -i[n - 1] + this.initialItemY, this.scrollGroup.animate({
                translateY: i
            }), this.currentPage = n, this.positionCheckboxes(i);
        }
    };
    Ne = We.LegendSymbolMixin = {
        drawRectangle: function(t, e) {
            var i = t.options.symbolHeight || 12;
            e.legendSymbol = this.chart.renderer.rect(0, t.baseline - 5 - i / 2, t.symbolWidth, i, t.options.symbolRadius || 0).attr({
                zIndex: 3
            }).add(e.legendGroup);
        },
        drawLineMarker: function(t) {
            var e = this.options, i = e.marker, s;
            s = t.symbolWidth;
            var n = this.chart.renderer, o = this.legendGroup, t = t.baseline - W(n.fontMetrics(t.options.itemStyle.fontSize, this.legendItem).b * .3), r;
            if (e.lineWidth) {
                r = {
                    "stroke-width": e.lineWidth
                };
                if (e.dashStyle) r.dashstyle = e.dashStyle;
                this.legendLine = n.path([ "M", 0, t, "L", s, t ]).attr(r).add(o);
            }
            if (i && i.enabled !== !1) e = i.radius, this.legendSymbol = s = n.symbol(this.symbol, s / 2 - e, t - e, 2 * e, 2 * e).add(o), 
            s.isMarker = !0;
        }
    };
    (/Trident\/7\.0/.test($) || ee) && x(vi.prototype, "positionItem", function(t, e) {
        var i = this, s = function() {
            e._legendItemPos && t.call(i, e);
        };
        s();
        setTimeout(s);
    });
    z.prototype = {
        init: function(t, i) {
            var s, n = t.series;
            t.series = null;
            s = e(pe, t);
            s.series = t.series = n;
            this.userOptions = t;
            n = s.chart;
            this.margin = this.splashArray("margin", n);
            this.spacing = this.splashArray("spacing", n);
            var o = n.events;
            this.bounds = {
                h: {},
                v: {}
            };
            this.callback = i;
            this.isResizing = 0;
            this.options = s;
            this.axes = [];
            this.series = [];
            this.hasCartesianSeries = n.showAxes;
            var r = this, a;
            r.index = xe.length;
            xe.push(r);
            be++;
            n.reflow !== !1 && $e(r, "load", function() {
                r.initReflow();
            });
            if (o) for (a in o) $e(r, a, o[a]);
            r.xAxis = [];
            r.yAxis = [];
            r.animation = re ? !1 : u(n.animation, !0);
            r.pointCount = r.colorCounter = r.symbolCounter = 0;
            r.firstRender();
        },
        initSeries: function(t) {
            var e = this.options.chart;
            (e = Ge[t.type || e.type || e.defaultSeriesType]) || ye(17, !0);
            e = new e();
            e.init(this, t);
            return e;
        },
        isInsidePlot: function(t, e, i) {
            var s = i ? e : t, t = i ? t : e;
            return s >= 0 && s <= this.plotWidth && t >= 0 && t <= this.plotHeight;
        },
        adjustTickAmounts: function() {
            this.options.chart.alignTicks !== !1 && _e(this.axes, function(t) {
                t.adjustTickAmount();
            });
            this.maxTicks = null;
        },
        redraw: function(e) {
            var i = this.axes, s = this.series, n = this.pointer, o = this.legend, r = this.isDirtyLegend, a, h, l = this.hasCartesianSeries, c = this.isDirtyBox, d = s.length, p = d, u = this.renderer, f = u.isHidden(), g = [];
            M(e, this);
            f && this.cloneRenderTo();
            for (this.layOutTitles(); p--; ) if (e = s[p], e.options.stacking && (a = !0, e.isDirty)) {
                h = !0;
                break;
            }
            if (h) for (p = d; p--; ) if (e = s[p], e.options.stacking) e.isDirty = !0;
            _e(s, function(t) {
                t.isDirty && t.options.legendType === "point" && (r = !0);
            });
            if (r && o.options.enabled) o.render(), this.isDirtyLegend = !1;
            a && this.getStacks();
            if (l) {
                if (!this.isResizing) this.maxTicks = null, _e(i, function(t) {
                    t.setScale();
                });
                this.adjustTickAmounts();
            }
            this.getMargins();
            l && (_e(i, function(t) {
                t.isDirty && (c = !0);
            }), _e(i, function(e) {
                if (e.isDirtyExtremes) e.isDirtyExtremes = !1, g.push(function() {
                    Je(e, "afterSetExtremes", t(e.eventArgs, e.getExtremes()));
                    delete e.eventArgs;
                });
                (c || a) && e.redraw();
            }));
            c && this.drawChartBox();
            _e(s, function(t) {
                t.isDirty && t.visible && (!t.isCartesian || t.xAxis) && t.redraw();
            });
            n && n.reset(!0);
            u.draw();
            Je(this, "redraw");
            f && this.cloneRenderTo(!0);
            _e(g, function(t) {
                t.call();
            });
        },
        get: function(t) {
            var e = this.axes, i = this.series, s, n;
            for (s = 0; s < e.length; s++) if (e[s].options.id === t) return e[s];
            for (s = 0; s < i.length; s++) if (i[s].options.id === t) return i[s];
            for (s = 0; s < i.length; s++) {
                n = i[s].points || [];
                for (e = 0; e < n.length; e++) if (n[e].id === t) return n[e];
            }
            return null;
        },
        getAxes: function() {
            var t = this, e = this.options, i = e.xAxis = p(e.xAxis || {}), e = e.yAxis = p(e.yAxis || {});
            _e(i, function(t, e) {
                t.index = e;
                t.isX = !0;
            });
            _e(e, function(t, e) {
                t.index = e;
            });
            i = i.concat(e);
            _e(i, function(e) {
                new O(t, e);
            });
            t.adjustTickAmounts();
        },
        getSelectedPoints: function() {
            var t = [];
            _e(this.series, function(e) {
                t = t.concat(Ue(e.points || [], function(t) {
                    return t.selected;
                }));
            });
            return t;
        },
        getSelectedSeries: function() {
            return Ue(this.series, function(t) {
                return t.selected;
            });
        },
        getStacks: function() {
            var t = this;
            _e(t.yAxis, function(t) {
                if (t.stacks && t.hasVisibleSeries) t.oldStacks = t.stacks;
            });
            _e(t.series, function(e) {
                if (e.options.stacking && (e.visible === !0 || t.options.chart.ignoreHiddenSeries === !1)) e.stackKey = e.type + u(e.options.stack, "");
            });
        },
        setTitle: function(t, i, s) {
            var n;
            var o = this, r = o.options, a;
            a = r.title = e(r.title, t);
            n = r.subtitle = e(r.subtitle, i), r = n;
            _e([ [ "title", t, a ], [ "subtitle", i, r ] ], function(t) {
                var e = t[0], i = o[e], s = t[1], t = t[2];
                i && s && (o[e] = i = i.destroy());
                t && t.text && !i && (o[e] = o.renderer.text(t.text, 0, 0, t.useHTML).attr({
                    align: t.align,
                    "class": "highcharts-" + e,
                    zIndex: t.zIndex || 4
                }).css(t.style).add());
            });
            o.layOutTitles(s);
        },
        layOutTitles: function(e) {
            var i = 0, s = this.title, n = this.subtitle, o = this.options, r = o.title, o = o.subtitle, a = this.renderer, h = this.spacingBox.width - 44;
            if (s && (s.css({
                width: (r.width || h) + "px"
            }).align(t({
                y: a.fontMetrics(r.style.fontSize, s).b - 3
            }, r), !1, "spacingBox"), !r.floating && !r.verticalAlign)) i = s.getBBox().height;
            n && (n.css({
                width: (o.width || h) + "px"
            }).align(t({
                y: i + (r.margin - 13) + a.fontMetrics(r.style.fontSize, n).b
            }, o), !1, "spacingBox"), !o.floating && !o.verticalAlign && (i = N(i + n.getBBox().height)));
            s = this.titleOffset !== i;
            this.titleOffset = i;
            if (!this.isDirtyBox && s) this.isDirtyBox = s, this.hasRendered && u(e, !0) && this.isDirtyBox && this.redraw();
        },
        getChartSize: function() {
            var t = this.options.chart, e = t.width, t = t.height, i = this.renderToClone || this.renderTo;
            if (!c(e)) this.containerWidth = Fe(i, "width");
            if (!c(t)) this.containerHeight = Fe(i, "height");
            this.chartWidth = F(0, e || this.containerWidth || 600);
            this.chartHeight = F(0, u(t, this.containerHeight > 19 ? this.containerHeight : 400));
        },
        cloneRenderTo: function(t) {
            var e = this.renderToClone, i = this.container;
            t ? e && (this.renderTo.appendChild(i), L(e), delete this.renderToClone) : (i && i.parentNode === this.renderTo && this.renderTo.removeChild(i), 
            this.renderToClone = e = this.renderTo.cloneNode(0), f(e, {
                position: "absolute",
                top: "-9999px",
                display: "block"
            }), e.style.setProperty && e.style.setProperty("display", "block", "important"), 
            X.body.appendChild(e), i && e.appendChild(i));
        },
        getContainer: function() {
            var e, n = this.options.chart, o, r, a;
            this.renderTo = e = n.renderTo;
            a = "highcharts-" + ce++;
            if (s(e)) this.renderTo = e = X.getElementById(e);
            e || ye(13, !0);
            o = i(d(e, "data-highcharts-chart"));
            !isNaN(o) && xe[o] && xe[o].hasRendered && xe[o].destroy();
            d(e, "data-highcharts-chart", this.index);
            e.innerHTML = "";
            !n.skipClone && !e.offsetWidth && this.cloneRenderTo();
            this.getChartSize();
            o = this.chartWidth;
            r = this.chartHeight;
            this.container = e = g(ke, {
                className: "highcharts-container" + (n.className ? " " + n.className : ""),
                id: a
            }, t({
                position: "relative",
                overflow: "hidden",
                width: o + "px",
                height: r + "px",
                textAlign: "left",
                lineHeight: "normal",
                zIndex: 0,
                "-webkit-tap-highlight-color": "rgba(0,0,0,0)"
            }, n.style), this.renderToClone || e);
            this._cursor = e.style.cursor;
            this.renderer = n.forExport ? new ai(e, o, r, n.style, !0) : new ae(e, o, r, n.style);
            re && this.renderer.create(this, e, o, r);
        },
        getMargins: function() {
            var t = this.spacing, e, i = this.legend, s = this.margin, n = this.options.legend, o = u(n.margin, 20), r = n.x, a = n.y, h = n.align, l = n.verticalAlign, d = this.titleOffset;
            this.resetMargins();
            e = this.axisOffset;
            if (d && !c(s[0])) this.plotTop = F(this.plotTop, d + this.options.title.margin + t[0]);
            if (i.display && !n.floating) if (h === "right") {
                if (!c(s[1])) this.marginRight = F(this.marginRight, i.legendWidth - r + o + t[1]);
            } else if (h === "left") {
                if (!c(s[3])) this.plotLeft = F(this.plotLeft, i.legendWidth + r + o + t[3]);
            } else if (l === "top") {
                if (!c(s[0])) this.plotTop = F(this.plotTop, i.legendHeight + a + o + t[0]);
            } else if (l === "bottom" && !c(s[2])) this.marginBottom = F(this.marginBottom, i.legendHeight - a + o + t[2]);
            this.extraBottomMargin && (this.marginBottom += this.extraBottomMargin);
            this.extraTopMargin && (this.plotTop += this.extraTopMargin);
            this.hasCartesianSeries && _e(this.axes, function(t) {
                t.getOffset();
            });
            c(s[3]) || (this.plotLeft += e[3]);
            c(s[0]) || (this.plotTop += e[0]);
            c(s[2]) || (this.marginBottom += e[2]);
            c(s[1]) || (this.marginRight += e[1]);
            this.setChartSize();
        },
        reflow: function(t) {
            var e = this, i = e.options.chart, s = e.renderTo, n = i.width || Fe(s, "width"), o = i.height || Fe(s, "height"), i = t ? t.target : E, s = function() {
                if (e.container) e.setSize(n, o, !1), e.hasUserSize = null;
            };
            if (!e.hasUserSize && n && o && (i === E || i === X)) {
                if (n !== e.containerWidth || o !== e.containerHeight) clearTimeout(e.reflowTimeout), 
                t ? e.reflowTimeout = setTimeout(s, 100) : s();
                e.containerWidth = n;
                e.containerHeight = o;
            }
        },
        initReflow: function() {
            var t = this, e = function(e) {
                t.reflow(e);
            };
            $e(E, "resize", e);
            $e(t, "destroy", function() {
                qe(E, "resize", e);
            });
        },
        setSize: function(t, e, i) {
            var s = this, n, o, r;
            s.isResizing += 1;
            r = function() {
                s && Je(s, "endResize", null, function() {
                    s.isResizing -= 1;
                });
            };
            M(i, s);
            s.oldChartHeight = s.chartHeight;
            s.oldChartWidth = s.chartWidth;
            if (c(t)) s.chartWidth = n = F(0, W(t)), s.hasUserSize = !!n;
            if (c(e)) s.chartHeight = o = F(0, W(e));
            (fe ? ti : f)(s.container, {
                width: n + "px",
                height: o + "px"
            }, fe);
            s.setChartSize(!0);
            s.renderer.setSize(n, o, i);
            s.maxTicks = null;
            _e(s.axes, function(t) {
                t.isDirty = !0;
                t.setScale();
            });
            _e(s.series, function(t) {
                t.isDirty = !0;
            });
            s.isDirtyLegend = !0;
            s.isDirtyBox = !0;
            s.layOutTitles();
            s.getMargins();
            s.redraw(i);
            s.oldChartHeight = null;
            Je(s, "resize");
            fe === !1 ? r() : setTimeout(r, fe && fe.duration || 500);
        },
        setChartSize: function(t) {
            var e = this.inverted, i = this.renderer, s = this.chartWidth, n = this.chartHeight, o = this.options.chart, r = this.spacing, a = this.clipOffset, h, l, c, d;
            this.plotLeft = h = W(this.plotLeft);
            this.plotTop = l = W(this.plotTop);
            this.plotWidth = c = F(0, W(s - h - this.marginRight));
            this.plotHeight = d = F(0, W(n - l - this.marginBottom));
            this.plotSizeX = e ? d : c;
            this.plotSizeY = e ? c : d;
            this.plotBorderWidth = o.plotBorderWidth || 0;
            this.spacingBox = i.spacingBox = {
                x: r[3],
                y: r[0],
                width: s - r[3] - r[1],
                height: n - r[0] - r[2]
            };
            this.plotBox = i.plotBox = {
                x: h,
                y: l,
                width: c,
                height: d
            };
            s = 2 * Y(this.plotBorderWidth / 2);
            e = N(F(s, a[3]) / 2);
            i = N(F(s, a[0]) / 2);
            this.clipBox = {
                x: e,
                y: i,
                width: Y(this.plotSizeX - F(s, a[1]) / 2 - e),
                height: F(0, Y(this.plotSizeY - F(s, a[2]) / 2 - i))
            };
            t || _e(this.axes, function(t) {
                t.setAxisSize();
                t.setAxisTranslation();
            });
        },
        resetMargins: function() {
            var t = this.spacing, e = this.margin;
            this.plotTop = u(e[0], t[0]);
            this.marginRight = u(e[1], t[1]);
            this.marginBottom = u(e[2], t[2]);
            this.plotLeft = u(e[3], t[3]);
            this.axisOffset = [ 0, 0, 0, 0 ];
            this.clipOffset = [ 0, 0, 0, 0 ];
        },
        drawChartBox: function() {
            var t = this.options.chart, e = this.renderer, i = this.chartWidth, s = this.chartHeight, n = this.chartBackground, o = this.plotBackground, r = this.plotBorder, a = this.plotBGImage, h = t.borderWidth || 0, l = t.backgroundColor, c = t.plotBackgroundColor, d = t.plotBackgroundImage, p = t.plotBorderWidth || 0, u, f = this.plotLeft, g = this.plotTop, m = this.plotWidth, y = this.plotHeight, v = this.plotBox, x = this.clipRect, b = this.clipBox;
            u = h + (t.shadow ? 8 : 0);
            if (h || l) if (n) n.animate(n.crisp({
                width: i - u,
                height: s - u
            })); else {
                n = {
                    fill: l || we
                };
                if (h) n.stroke = t.borderColor, n["stroke-width"] = h;
                this.chartBackground = e.rect(u / 2, u / 2, i - u, s - u, t.borderRadius, h).attr(n).addClass("highcharts-background").add().shadow(t.shadow);
            }
            if (c) o ? o.animate(v) : this.plotBackground = e.rect(f, g, m, y, 0).attr({
                fill: c
            }).add().shadow(t.plotShadow);
            if (d) a ? a.animate(v) : this.plotBGImage = e.image(d, f, g, m, y).add();
            x ? x.animate({
                width: b.width,
                height: b.height
            }) : this.clipRect = e.clipRect(b);
            if (p) r ? r.animate(r.crisp({
                x: f,
                y: g,
                width: m,
                height: y,
                strokeWidth: -p
            })) : this.plotBorder = e.rect(f, g, m, y, 0, -p).attr({
                stroke: t.plotBorderColor,
                "stroke-width": p,
                fill: we,
                zIndex: 1
            }).add();
            this.isDirtyBox = !1;
        },
        propFromSeries: function() {
            var t = this, e = t.options.chart, i, s = t.options.series, n, o;
            _e([ "inverted", "angular", "polar" ], function(r) {
                i = Ge[e.type || e.defaultSeriesType];
                o = t[r] || e[r] || i && i.prototype[r];
                for (n = s && s.length; !o && n--; ) (i = Ge[s[n].type]) && i.prototype[r] && (o = !0);
                t[r] = o;
            });
        },
        linkSeries: function() {
            var t = this, e = t.series;
            _e(e, function(t) {
                t.linkedSeries.length = 0;
            });
            _e(e, function(e) {
                var i = e.options.linkedTo;
                if (s(i) && (i = i === ":previous" ? t.series[e.index - 1] : t.get(i))) i.linkedSeries.push(e), 
                e.linkedParent = i;
            });
        },
        renderSeries: function() {
            _e(this.series, function(t) {
                t.translate();
                t.setTooltipPoints && t.setTooltipPoints();
                t.render();
            });
        },
        renderLabels: function() {
            var e = this, s = e.options.labels;
            s.items && _e(s.items, function(n) {
                var o = t(s.style, n.style), r = i(o.left) + e.plotLeft, a = i(o.top) + e.plotTop + 12;
                delete o.left;
                delete o.top;
                e.renderer.text(n.html, r, a).attr({
                    zIndex: 2
                }).css(o).add();
            });
        },
        render: function() {
            var t = this.axes, e = this.renderer, i = this.options;
            this.setTitle();
            this.legend = new vi(this, i.legend);
            this.getStacks();
            _e(t, function(t) {
                t.setScale();
            });
            this.getMargins();
            this.maxTicks = null;
            _e(t, function(t) {
                t.setTickPositions(!0);
                t.setMaxTicks();
            });
            this.adjustTickAmounts();
            this.getMargins();
            this.drawChartBox();
            this.hasCartesianSeries && _e(t, function(t) {
                t.render();
            });
            if (!this.seriesGroup) this.seriesGroup = e.g("series-group").attr({
                zIndex: 3
            }).add();
            this.renderSeries();
            this.renderLabels();
            this.showCredits(i.credits);
            this.hasRendered = !0;
        },
        showCredits: function(t) {
            if (t.enabled && !this.credits) this.credits = this.renderer.text(t.text, 0, 0).on("click", function() {
                if (t.href) location.href = t.href;
            }).attr({
                align: t.position.align,
                zIndex: 8
            }).css(t.style).add().align(t.position);
        },
        destroy: function() {
            var t = this, e = t.axes, i = t.series, s = t.container, n, o = s && s.parentNode;
            Je(t, "destroy");
            xe[t.index] = H;
            be--;
            t.renderTo.removeAttribute("data-highcharts-chart");
            qe(t);
            for (n = e.length; n--; ) e[n] = e[n].destroy();
            for (n = i.length; n--; ) i[n] = i[n].destroy();
            _e("title,subtitle,chartBackground,plotBackground,plotBGImage,plotBorder,seriesGroup,clipRect,credits,pointer,scroller,rangeSelector,legend,resetZoomButton,tooltip,renderer".split(","), function(e) {
                var i = t[e];
                i && i.destroy && (t[e] = i.destroy());
            });
            if (s) s.innerHTML = "", qe(s), o && L(s);
            for (n in t) delete t[n];
        },
        isReadyToRender: function() {
            var t = this;
            return !ne && E == E.top && X.readyState !== "complete" || re && !E.canvg ? (re ? ci.push(function() {
                t.firstRender();
            }, t.options.global.canvasToolsURL) : X.attachEvent("onreadystatechange", function() {
                X.detachEvent("onreadystatechange", t.firstRender);
                X.readyState === "complete" && t.firstRender();
            }), !1) : !0;
        },
        firstRender: function() {
            var t = this, e = t.options, i = t.callback;
            if (t.isReadyToRender()) {
                t.getContainer();
                Je(t, "init");
                t.resetMargins();
                t.setChartSize();
                t.propFromSeries();
                t.getAxes();
                _e(e.series || [], function(e) {
                    t.initSeries(e);
                });
                t.linkSeries();
                Je(t, "beforeRender");
                if (We.Pointer) t.pointer = new ui(t, e);
                t.render();
                t.renderer.draw();
                i && i.apply(t, [ t ]);
                _e(t.callbacks, function(e) {
                    e.apply(t, [ t ]);
                });
                t.cloneRenderTo(!0);
                Je(t, "load");
            }
        },
        splashArray: function(t, e) {
            var i = e[t], i = n(i) ? i : [ i, i, i, i ];
            return [ u(e[t + "Top"], i[0]), u(e[t + "Right"], i[1]), u(e[t + "Bottom"], i[2]), u(e[t + "Left"], i[3]) ];
        }
    };
    z.prototype.callbacks = [];
    hi = We.CenteredSeriesMixin = {
        getCenter: function() {
            var t = this.options, e = this.chart, s = 2 * (t.slicedOffset || 0), n, o = e.plotWidth - 2 * s, r = e.plotHeight - 2 * s, e = t.center, t = [ u(e[0], "50%"), u(e[1], "50%"), t.size || "100%", t.innerSize || 0 ], a = j(o, r), h;
            return Ke(t, function(t, e) {
                h = /%$/.test(t);
                n = e < 2 || e === 2 && h;
                return (h ? [ o, r, a, a ][e] * i(t) / 100 : t) + (n ? s : 0);
            });
        }
    };
    var xi = function() {};
    xi.prototype = {
        init: function(t, e, i) {
            this.series = t;
            this.applyOptions(e, i);
            this.pointAttr = {};
            if (t.options.colorByPoint && (e = t.options.colors || t.chart.options.colors, this.color = this.color || e[t.colorCounter++], 
            t.colorCounter === e.length)) t.colorCounter = 0;
            t.chart.pointCount++;
            return this;
        },
        applyOptions: function(e, i) {
            var s = this.series, n = s.options.pointValKey || s.pointValKey, e = xi.prototype.optionsToObject.call(this, e);
            t(this, e);
            this.options = this.options ? t(this.options, e) : e;
            if (n) this.y = this[n];
            if (this.x === H && s) this.x = i === H ? s.autoIncrement() : i;
            return this;
        },
        optionsToObject: function(t) {
            var e = {}, i = this.series, s = i.pointArrayMap || [ "y" ], n = s.length, r = 0, a = 0;
            if (typeof t === "number" || t === null) e[s[0]] = t; else if (o(t)) {
                if (t.length > n) {
                    i = typeof t[0];
                    if (i === "string") e.name = t[0]; else if (i === "number") e.x = t[0];
                    r++;
                }
                for (;a < n; ) e[s[a++]] = t[r++];
            } else if (typeof t === "object") {
                e = t;
                if (t.dataLabels) i._hasPointLabels = !0;
                if (t.marker) i._hasPointMarkers = !0;
            }
            return e;
        },
        destroy: function() {
            var t = this.series.chart, e = t.hoverPoints, i;
            t.pointCount--;
            if (e && (this.setState(), l(e, this), !e.length)) t.hoverPoints = null;
            if (this === t.hoverPoint) this.onMouseOut();
            if (this.graphic || this.dataLabel) qe(this), this.destroyElements();
            this.legendItem && t.legend.destroyItem(this);
            for (i in this) this[i] = null;
        },
        destroyElements: function() {
            for (var t = "graphic,dataLabel,dataLabelUpper,group,connector,shadowGroup".split(","), e, i = 6; i--; ) e = t[i], 
            this[e] && (this[e] = this[e].destroy());
        },
        getLabelConfig: function() {
            return {
                x: this.category,
                y: this.y,
                key: this.name || this.category,
                series: this.series,
                point: this,
                percentage: this.percentage,
                total: this.total || this.stackTotal
            };
        },
        tooltipFormatter: function(t) {
            var e = this.series, i = e.tooltipOptions, s = u(i.valueDecimals, ""), n = i.valuePrefix || "", o = i.valueSuffix || "";
            _e(e.pointArrayMap || [ "y" ], function(e) {
                e = "{point." + e;
                if (n || o) t = t.replace(e + "}", n + e + "}" + o);
                t = t.replace(e + "}", e + ":,." + s + "f}");
            });
            return b(t, {
                point: this,
                series: this.series
            });
        },
        firePointEvent: function(t, e, i) {
            var s = this, n = this.series.options;
            (n.point.events[t] || s.options && s.options.events && s.options.events[t]) && this.importEvents();
            t === "click" && n.allowPointSelect && (i = function(t) {
                s.select(null, t.ctrlKey || t.metaKey || t.shiftKey);
            });
            Je(this, t, e, i);
        }
    };
    var bi = function() {};
    bi.prototype = {
        isCartesian: !0,
        type: "line",
        pointClass: xi,
        sorted: !0,
        requireSorting: !0,
        pointAttrToOptions: {
            stroke: "lineColor",
            "stroke-width": "lineWidth",
            fill: "fillColor",
            r: "radius"
        },
        axisTypes: [ "xAxis", "yAxis" ],
        colorCounter: 0,
        parallelArrays: [ "x", "y" ],
        init: function(e, i) {
            var s = this, n, o, r = e.series, a = function(t, e) {
                return u(t.options.index, t._i) - u(e.options.index, e._i);
            };
            s.chart = e;
            s.options = i = s.setOptions(i);
            s.linkedSeries = [];
            s.bindAxes();
            t(s, {
                name: i.name,
                state: "",
                pointAttr: {},
                visible: i.visible !== !1,
                selected: i.selected === !0
            });
            if (re) i.animation = !1;
            o = i.events;
            for (n in o) $e(s, n, o[n]);
            if (o && o.click || i.point && i.point.events && i.point.events.click || i.allowPointSelect) e.runTrackerClick = !0;
            s.getColor();
            s.getSymbol();
            _e(s.parallelArrays, function(t) {
                s[t + "Data"] = [];
            });
            s.setData(i.data, !1);
            if (s.isCartesian) e.hasCartesianSeries = !0;
            r.push(s);
            s._i = r.length - 1;
            S(r, a);
            this.yAxis && S(this.yAxis.series, a);
            _e(r, function(t, e) {
                t.index = e;
                t.name = t.name || "Series " + (e + 1);
            });
        },
        bindAxes: function() {
            var t = this, e = t.options, i = t.chart, s;
            _e(t.axisTypes || [], function(n) {
                _e(i[n], function(i) {
                    s = i.options;
                    if (e[n] === s.index || e[n] !== H && e[n] === s.id || e[n] === H && s.index === 0) i.series.push(t), 
                    t[n] = i, i.isDirty = !0;
                });
                !t[n] && t.optionalAxis !== n && ye(18, !0);
            });
        },
        updateParallelArrays: function(t, e) {
            var i = t.series, s = arguments;
            _e(i.parallelArrays, typeof e === "number" ? function(s) {
                var n = s === "y" && i.toYData ? i.toYData(t) : t[s];
                i[s + "Data"][e] = n;
            } : function(t) {
                Array.prototype[e].apply(i[t + "Data"], Array.prototype.slice.call(s, 2));
            });
        },
        autoIncrement: function() {
            var t = this.options, e = this.xIncrement, e = u(e, t.pointStart, 0);
            this.pointInterval = u(this.pointInterval, t.pointInterval, 1);
            this.xIncrement = e + this.pointInterval;
            return e;
        },
        getSegments: function() {
            var t = -1, e = [], i, s = this.points, n = s.length;
            if (n) if (this.options.connectNulls) {
                for (i = n; i--; ) s[i].y === null && s.splice(i, 1);
                s.length && (e = [ s ]);
            } else _e(s, function(i, o) {
                i.y === null ? (o > t + 1 && e.push(s.slice(t + 1, o)), t = o) : o === n - 1 && e.push(s.slice(t + 1, o + 1));
            });
            this.segments = e;
        },
        setOptions: function(t) {
            var i = this.chart, s = i.options.plotOptions, i = i.userOptions || {}, n = i.plotOptions || {}, o = s[this.type];
            this.userOptions = t;
            s = e(o, s.series, t);
            this.tooltipOptions = e(pe.tooltip, pe.plotOptions[this.type].tooltip, i.tooltip, n.series && n.series.tooltip, n[this.type] && n[this.type].tooltip, t.tooltip);
            o.marker === null && delete s.marker;
            return s;
        },
        getCyclic: function(t, e, i) {
            var s = this.userOptions, n = "_" + t + "Index", o = t + "Counter";
            e || (c(s[n]) ? e = s[n] : (s[n] = e = this.chart[o] % i.length, this.chart[o] += 1), 
            e = i[e]);
            this[t] = e;
        },
        getColor: function() {
            this.options.colorByPoint || this.getCyclic("color", this.options.color || ii[this.type].color, this.chart.options.colors);
        },
        getSymbol: function() {
            var t = this.options.marker;
            this.getCyclic("symbol", t.symbol, this.chart.options.symbols);
            if (/^url/.test(this.symbol)) t.radius = 0;
        },
        drawLegendSymbol: Ne.drawLineMarker,
        setData: function(t, e, i, n) {
            var a = this, h = a.points, l = h && h.length || 0, c, d = a.options, p = a.chart, f = null, g = a.xAxis, m = g && !!g.categories, y = a.tooltipPoints, v = d.turboThreshold, x = this.xData, b = this.yData, k = (c = a.pointArrayMap) && c.length, t = t || [];
            c = t.length;
            e = u(e, !0);
            if (n !== !1 && c && l === c && !a.cropped && !a.hasGroupedData) _e(t, function(t, e) {
                h[e].update(t, !1, null, !1);
            }); else {
                a.xIncrement = null;
                a.pointRange = m ? 1 : d.pointRange;
                a.colorCounter = 0;
                _e(this.parallelArrays, function(t) {
                    a[t + "Data"].length = 0;
                });
                if (v && c > v) {
                    for (i = 0; f === null && i < c; ) f = t[i], i++;
                    if (r(f)) {
                        m = u(d.pointStart, 0);
                        d = u(d.pointInterval, 1);
                        for (i = 0; i < c; i++) x[i] = m, b[i] = t[i], m += d;
                        a.xIncrement = m;
                    } else if (o(f)) if (k) for (i = 0; i < c; i++) d = t[i], x[i] = d[0], b[i] = d.slice(1, k + 1); else for (i = 0; i < c; i++) d = t[i], 
                    x[i] = d[0], b[i] = d[1]; else ye(12);
                } else for (i = 0; i < c; i++) if (t[i] !== H && (d = {
                    series: a
                }, a.pointClass.prototype.applyOptions.apply(d, [ t[i] ]), a.updateParallelArrays(d, i), 
                m && d.name)) g.names[d.x] = d.name;
                s(b[0]) && ye(14, !0);
                a.data = [];
                a.options.data = t;
                for (i = l; i--; ) h[i] && h[i].destroy && h[i].destroy();
                if (y) y.length = 0;
                if (g) g.minRange = g.userMinRange;
                a.isDirty = a.isDirtyData = p.isDirtyBox = !0;
                i = !1;
            }
            e && p.redraw(i);
        },
        processData: function(t) {
            var e = this.xData, i = this.yData, s = e.length, n;
            n = 0;
            var o, r, a = this.xAxis, h, l = this.options;
            h = l.cropThreshold;
            var c = 0, d = this.isCartesian, p, u;
            if (d && !this.isDirty && !a.isDirty && !this.yAxis.isDirty && !t) return !1;
            if (a) p = a.getExtremes(), u = p.min, p = p.max;
            if (d && this.sorted && (!h || s > h || this.forceCrop)) if (e[s - 1] < u || e[0] > p) e = [], 
            i = []; else if (e[0] < u || e[s - 1] > p) n = this.cropData(this.xData, this.yData, u, p), 
            e = n.xData, i = n.yData, n = n.start, o = !0, c = e.length;
            for (h = e.length - 1; h >= 0; h--) s = e[h] - e[h - 1], !o && e[h] > u && e[h] < p && c++, 
            s > 0 && (r === H || s < r) ? r = s : s < 0 && this.requireSorting && ye(15);
            this.cropped = o;
            this.cropStart = n;
            this.processedXData = e;
            this.processedYData = i;
            this.activePointCount = c;
            if (l.pointRange === null) this.pointRange = r || 1;
            this.closestPointRange = r;
        },
        cropData: function(t, e, i, s) {
            var n = t.length, o = 0, r = n, a = u(this.cropShoulder, 1), h;
            for (h = 0; h < n; h++) if (t[h] >= i) {
                o = F(0, h - a);
                break;
            }
            for (;h < n; h++) if (t[h] > s) {
                r = h + a;
                break;
            }
            return {
                xData: t.slice(o, r),
                yData: e.slice(o, r),
                start: o,
                end: r
            };
        },
        generatePoints: function() {
            var t = this.options.data, e = this.data, i, s = this.processedXData, n = this.processedYData, o = this.pointClass, r = s.length, a = this.cropStart || 0, h, l = this.hasGroupedData, c, d = [], u;
            if (!e && !l) e = [], e.length = t.length, e = this.data = e;
            for (u = 0; u < r; u++) h = a + u, l ? d[u] = new o().init(this, [ s[u] ].concat(p(n[u]))) : (e[h] ? c = e[h] : t[h] !== H && (e[h] = c = new o().init(this, t[h], s[u])), 
            d[u] = c), d[u].index = h;
            if (e && (r !== (i = e.length) || l)) for (u = 0; u < i; u++) if (u === a && !l && (u += r), 
            e[u]) e[u].destroyElements(), e[u].plotX = H;
            this.data = e;
            this.points = d;
        },
        getExtremes: function(t) {
            var e = this.yAxis, i = this.processedXData, s, n = [], o = 0;
            s = this.xAxis.getExtremes();
            var r = s.min, a = s.max, h, l, c, d, t = t || this.stackedYData || this.processedYData;
            s = t.length;
            for (d = 0; d < s; d++) if (l = i[d], c = t[d], h = c !== null && c !== H && (!e.isLog || c.length || c > 0), 
            l = this.getExtremesFromAll || this.cropped || (i[d + 1] || l) >= r && (i[d - 1] || l) <= a, 
            h && l) if (h = c.length) for (;h--; ) c[h] !== null && (n[o++] = c[h]); else n[o++] = c;
            this.dataMin = u(void 0, T(n));
            this.dataMax = u(void 0, P(n));
        },
        translate: function() {
            this.processedXData || this.processData();
            this.generatePoints();
            for (var t = this.options, e = t.stacking, i = this.xAxis, s = i.categories, n = this.yAxis, o = this.points, a = o.length, h = !!this.modifyValue, l = t.pointPlacement, d = l === "between" || r(l), p = t.threshold, t = 0; t < a; t++) {
                var f = o[t], g = f.x, m = f.y, y = f.low, v = e && n.stacks[(this.negStacks && m < p ? "-" : "") + this.stackKey];
                if (n.isLog && m <= 0) f.y = m = null, ye(10);
                f.plotX = i.translate(g, 0, 0, 0, 1, l, this.type === "flags");
                if (e && this.visible && v && v[g]) v = v[g], m = v.points[this.index + "," + t], 
                y = m[0], m = m[1], y === 0 && (y = u(p, n.min)), n.isLog && y <= 0 && (y = null), 
                f.total = f.stackTotal = v.total, f.percentage = v.total && f.y / v.total * 100, 
                f.stackY = m, v.setOffset(this.pointXOffset || 0, this.barW || 0);
                f.yBottom = c(y) ? n.translate(y, 0, 1, 0, 1) : null;
                h && (m = this.modifyValue(m, f));
                f.plotY = typeof m === "number" && m !== Infinity ? n.translate(m, 0, 1, 0, 1) : H;
                f.clientX = d ? i.translate(g, 0, 0, 0, 1) : f.plotX;
                f.negative = f.y < (p || 0);
                f.category = s && s[f.x] !== H ? s[f.x] : f.x;
            }
            this.getSegments();
        },
        animate: function(e) {
            var i = this.chart, s = i.renderer, o;
            o = this.options.animation;
            var r = this.clipBox || i.clipBox, a = i.inverted, h;
            if (o && !n(o)) o = ii[this.type].animation;
            h = [ "_sharedClip", o.duration, o.easing, r.height ].join(",");
            e ? (e = i[h], o = i[h + "m"], e || (i[h] = e = s.clipRect(t(r, {
                width: 0
            })), i[h + "m"] = o = s.clipRect(-99, a ? -i.plotLeft : -i.plotTop, 99, a ? i.chartWidth : i.chartHeight)), 
            this.group.clip(e), this.markerGroup.clip(o), this.sharedClipKey = h) : ((e = i[h]) && e.animate({
                width: i.plotSizeX
            }, o), i[h + "m"] && i[h + "m"].animate({
                width: i.plotSizeX + 99
            }, o), this.animate = null);
        },
        afterAnimate: function() {
            var t = this.chart, e = this.sharedClipKey, i = this.group, s = this.clipBox;
            if (i && this.options.clip !== !1) {
                if (!e || !s) i.clip(s ? t.renderer.clipRect(s) : t.clipRect);
                this.markerGroup.clip();
            }
            Je(this, "afterAnimate");
            setTimeout(function() {
                e && t[e] && (s || (t[e] = t[e].destroy()), t[e + "m"] && (t[e + "m"] = t[e + "m"].destroy()));
            }, 100);
        },
        drawPoints: function() {
            var e, i = this.points, s = this.chart, n, o, r, a, h, l, c, d, p = this.options.marker, f = this.pointAttr[""], g, m, y, v = this.markerGroup, x = u(p.enabled, !this.requireSorting || this.activePointCount < .5 * this.xAxis.len / p.radius);
            if (p.enabled !== !1 || this._hasPointMarkers) for (r = i.length; r--; ) if (a = i[r], 
            n = Y(a.plotX), o = a.plotY, d = a.graphic, g = a.marker || {}, m = !!a.marker, 
            e = x && g.enabled === H || g.enabled, y = s.isInsidePlot(W(n), o, s.inverted), 
            e && o !== H && !isNaN(o) && a.y !== null) if (e = a.pointAttr[a.selected ? "select" : ""] || f, 
            h = e.r, l = u(g.symbol, this.symbol), c = l.indexOf("url") === 0, d) d[y ? "show" : "hide"](!0).animate(t({
                x: n - h,
                y: o - h
            }, d.symbolName ? {
                width: 2 * h,
                height: 2 * h
            } : {})); else {
                if (y && (h > 0 || c)) a.graphic = s.renderer.symbol(l, n - h, o - h, 2 * h, 2 * h, m ? g : p).attr(e).add(v);
            } else if (d) a.graphic = d.destroy();
        },
        convertAttribs: function(t, e, i, s) {
            var n = this.pointAttrToOptions, o, r, a = {}, t = t || {}, e = e || {}, i = i || {}, s = s || {};
            for (o in n) r = n[o], a[o] = u(t[r], e[o], i[o], s[o]);
            return a;
        },
        getAttribs: function() {
            var e = this, i = e.options, s = ii[e.type].marker ? i.marker : i, n = s.states, o = n.hover, r, a = e.color;
            r = {
                stroke: a,
                fill: a
            };
            var h = e.points || [], l, d = [], p, u = e.pointAttrToOptions;
            p = e.hasPointSpecificOptions;
            var f = i.negativeColor, g = s.lineColor, m = s.fillColor;
            l = i.turboThreshold;
            var y;
            i.marker ? (o.radius = o.radius || s.radius + o.radiusPlus, o.lineWidth = o.lineWidth || s.lineWidth + o.lineWidthPlus) : o.color = o.color || ri(o.color || a).brighten(o.brightness).get();
            d[""] = e.convertAttribs(s, r);
            _e([ "hover", "select" ], function(t) {
                d[t] = e.convertAttribs(n[t], d[""]);
            });
            e.pointAttr = d;
            a = h.length;
            if (!l || a < l || p) for (;a--; ) {
                l = h[a];
                if ((s = l.options && l.options.marker || l.options) && s.enabled === !1) s.radius = 0;
                if (l.negative && f) l.color = l.fillColor = f;
                p = i.colorByPoint || l.color;
                if (l.options) for (y in u) c(s[u[y]]) && (p = !0);
                if (p) {
                    s = s || {};
                    p = [];
                    n = s.states || {};
                    r = n.hover = n.hover || {};
                    if (!i.marker) r.color = r.color || !l.options.color && o.color || ri(l.color).brighten(r.brightness || o.brightness).get();
                    r = {
                        color: l.color
                    };
                    if (!m) r.fillColor = l.color;
                    if (!g) r.lineColor = l.color;
                    p[""] = e.convertAttribs(t(r, s), d[""]);
                    p.hover = e.convertAttribs(n.hover, d.hover, p[""]);
                    p.select = e.convertAttribs(n.select, d.select, p[""]);
                } else p = d;
                l.pointAttr = p;
            }
        },
        destroy: function() {
            var t = this, e = t.chart, i = /AppleWebKit\/533/.test($), s, n, o = t.data || [], r, a, h;
            Je(t, "destroy");
            qe(t);
            _e(t.axisTypes || [], function(e) {
                if (h = t[e]) l(h.series, t), h.isDirty = h.forceRedraw = !0;
            });
            t.legendItem && t.chart.legend.destroyItem(t);
            for (n = o.length; n--; ) (r = o[n]) && r.destroy && r.destroy();
            t.points = null;
            clearTimeout(t.animationTimeout);
            _e("area,graph,dataLabelsGroup,group,markerGroup,tracker,graphNeg,areaNeg,posClip,negClip".split(","), function(e) {
                t[e] && (s = i && e === "group" ? "hide" : "destroy", t[e][s]());
            });
            if (e.hoverSeries === t) e.hoverSeries = null;
            l(e.series, t);
            for (a in t) delete t[a];
        },
        getSegmentPath: function(t) {
            var e = this, i = [], s = e.options.step;
            _e(t, function(n, o) {
                var r = n.plotX, a = n.plotY, h;
                e.getPointSpline ? i.push.apply(i, e.getPointSpline(t, n, o)) : (i.push(o ? "L" : "M"), 
                s && o && (h = t[o - 1], s === "right" ? i.push(h.plotX, a) : s === "center" ? i.push((h.plotX + r) / 2, h.plotY, (h.plotX + r) / 2, a) : i.push(r, h.plotY)), 
                i.push(n.plotX, n.plotY));
            });
            return i;
        },
        getGraphPath: function() {
            var t = this, e = [], i, s = [];
            _e(t.segments, function(n) {
                i = t.getSegmentPath(n);
                n.length > 1 ? e = e.concat(i) : s.push(n[0]);
            });
            t.singlePoints = s;
            return t.graphPath = e;
        },
        drawGraph: function() {
            var t = this, e = this.options, i = [ [ "graph", e.lineColor || this.color ] ], s = e.lineWidth, n = e.dashStyle, o = e.linecap !== "square", r = this.getGraphPath(), a = e.negativeColor;
            a && i.push([ "graphNeg", a ]);
            _e(i, function(i, a) {
                var h = i[0], l = t[h];
                if (l) ei(l), l.animate({
                    d: r
                }); else if (s && r.length) l = {
                    stroke: i[1],
                    "stroke-width": s,
                    fill: we,
                    zIndex: 1
                }, n ? l.dashstyle = n : o && (l["stroke-linecap"] = l["stroke-linejoin"] = "round"), 
                t[h] = t.chart.renderer.path(r).attr(l).add(t.group).shadow(!a && e.shadow);
            });
        },
        clipNeg: function() {
            var t = this.options, e = this.chart, i = e.renderer, s = t.negativeColor || t.negativeFillColor, n, o = this.graph, r = this.area, a = this.posClip, h = this.negClip;
            n = e.chartWidth;
            var l = e.chartHeight, c = F(n, l), d = this.yAxis;
            if (s && (o || r)) {
                s = W(d.toPixels(t.threshold || 0, !0));
                s < 0 && (c -= s);
                t = {
                    x: 0,
                    y: 0,
                    width: c,
                    height: s
                };
                c = {
                    x: 0,
                    y: s,
                    width: c,
                    height: c
                };
                if (e.inverted) t.height = c.y = e.plotWidth - s, i.isVML && (t = {
                    x: e.plotWidth - s - e.plotLeft,
                    y: 0,
                    width: n,
                    height: l
                }, c = {
                    x: s + e.plotLeft - n,
                    y: 0,
                    width: e.plotLeft + s,
                    height: n
                });
                d.reversed ? (e = c, n = t) : (e = t, n = c);
                a ? (a.animate(e), h.animate(n)) : (this.posClip = a = i.clipRect(e), this.negClip = h = i.clipRect(n), 
                o && this.graphNeg && (o.clip(a), this.graphNeg.clip(h)), r && (r.clip(a), this.areaNeg.clip(h)));
            }
        },
        invertGroups: function() {
            function t() {
                var t = {
                    width: e.yAxis.len,
                    height: e.xAxis.len
                };
                _e([ "group", "markerGroup" ], function(i) {
                    e[i] && e[i].attr(t).invert();
                });
            }
            var e = this, i = e.chart;
            if (e.xAxis) $e(i, "resize", t), $e(e, "destroy", function() {
                qe(i, "resize", t);
            }), t(), e.invertGroups = t;
        },
        plotGroup: function(t, e, i, s, n) {
            var o = this[t], r = !o;
            r && (this[t] = o = this.chart.renderer.g(e).attr({
                visibility: i,
                zIndex: s || .1
            }).add(n));
            o[r ? "attr" : "animate"](this.getPlotBox());
            return o;
        },
        getPlotBox: function() {
            var t = this.chart, e = this.xAxis, i = this.yAxis;
            if (t.inverted) e = i, i = this.xAxis;
            return {
                translateX: e ? e.left : t.plotLeft,
                translateY: i ? i.top : t.plotTop,
                scaleX: 1,
                scaleY: 1
            };
        },
        render: function() {
            var t = this, e = t.chart, i, s = t.options, n = (i = s.animation) && !!t.animate && e.renderer.isSVG && u(i.duration, 500) || 0, o = t.visible ? "visible" : "hidden", r = s.zIndex, a = t.hasRendered, h = e.seriesGroup;
            i = t.plotGroup("group", "series", o, r, h);
            t.markerGroup = t.plotGroup("markerGroup", "markers", o, r, h);
            n && t.animate(!0);
            t.getAttribs();
            i.inverted = t.isCartesian ? e.inverted : !1;
            t.drawGraph && (t.drawGraph(), t.clipNeg());
            _e(t.points, function(t) {
                t.redraw && t.redraw();
            });
            t.drawDataLabels && t.drawDataLabels();
            t.visible && t.drawPoints();
            t.drawTracker && t.options.enableMouseTracking !== !1 && t.drawTracker();
            e.inverted && t.invertGroups();
            s.clip !== !1 && !t.sharedClipKey && !a && i.clip(e.clipRect);
            n && t.animate();
            if (!a) n ? t.animationTimeout = setTimeout(function() {
                t.afterAnimate();
            }, n) : t.afterAnimate();
            t.isDirty = t.isDirtyData = !1;
            t.hasRendered = !0;
        },
        redraw: function() {
            var t = this.chart, e = this.isDirtyData, i = this.group, s = this.xAxis, n = this.yAxis;
            i && (t.inverted && i.attr({
                width: t.plotWidth,
                height: t.plotHeight
            }), i.animate({
                translateX: u(s && s.left, t.plotLeft),
                translateY: u(n && n.top, t.plotTop)
            }));
            this.translate();
            this.setTooltipPoints && this.setTooltipPoints(!0);
            this.render();
            e && Je(this, "updatedData");
        }
    };
    R.prototype = {
        destroy: function() {
            A(this, this.axis);
        },
        render: function(t) {
            var e = this.options, i = e.format, i = i ? b(i, this) : e.formatter.call(this);
            this.label ? this.label.attr({
                text: i,
                visibility: "hidden"
            }) : this.label = this.axis.chart.renderer.text(i, null, null, e.useHTML).css(e.style).attr({
                align: this.textAlign,
                rotation: e.rotation,
                visibility: "hidden"
            }).add(t);
        },
        setOffset: function(t, e) {
            var i = this.axis, s = i.chart, n = s.inverted, o = this.isNegative, r = i.translate(i.usePercentage ? 100 : this.total, 0, 0, 0, 1), i = i.translate(0), i = V(r - i), a = s.xAxis[0].translate(this.x) + t, h = s.plotHeight, o = {
                x: n ? o ? r : r - i : a,
                y: n ? h - a - e : o ? h - r - i : h - r,
                width: n ? i : e,
                height: n ? e : i
            };
            if (n = this.label) n.align(this.alignOptions, null, o), o = n.alignAttr, n[this.options.crop === !1 || s.isInsidePlot(o.x, o.y) ? "show" : "hide"](!0);
        }
    };
    O.prototype.buildStacks = function() {
        var t = this.series, e = u(this.options.reversedStacks, !0), i = t.length;
        if (!this.isXAxis) {
            for (this.usePercentage = !1; i--; ) t[e ? i : t.length - i - 1].setStackedPoints();
            if (this.usePercentage) for (i = 0; i < t.length; i++) t[i].setPercentStacks();
        }
    };
    O.prototype.renderStackTotals = function() {
        var t = this.chart, e = t.renderer, i = this.stacks, s, n, o = this.stackTotalGroup;
        if (!o) this.stackTotalGroup = o = e.g("stack-labels").attr({
            visibility: "visible",
            zIndex: 6
        }).add();
        o.translate(t.plotLeft, t.plotTop);
        for (s in i) for (n in t = i[s], t) t[n].render(o);
    };
    bi.prototype.setStackedPoints = function() {
        if (this.options.stacking && !(this.visible !== !0 && this.chart.options.chart.ignoreHiddenSeries !== !1)) {
            var t = this.processedXData, e = this.processedYData, i = [], s = e.length, n = this.options, o = n.threshold, r = n.stack, n = n.stacking, a = this.stackKey, h = "-" + a, l = this.negStacks, c = this.yAxis, d = c.stacks, p = c.oldStacks, u, f, g, m, y, v;
            for (m = 0; m < s; m++) {
                y = t[m];
                v = e[m];
                g = this.index + "," + m;
                f = (u = l && v < o) ? h : a;
                d[f] || (d[f] = {});
                if (!d[f][y]) p[f] && p[f][y] ? (d[f][y] = p[f][y], d[f][y].total = null) : d[f][y] = new R(c, c.options.stackLabels, u, y, r);
                f = d[f][y];
                f.points[g] = [ f.cum || 0 ];
                n === "percent" ? (u = u ? a : h, l && d[u] && d[u][y] ? (u = d[u][y], f.total = u.total = F(u.total, f.total) + V(v) || 0) : f.total = C(f.total + (V(v) || 0))) : f.total = C(f.total + (v || 0));
                f.cum = (f.cum || 0) + (v || 0);
                f.points[g].push(f.cum);
                i[m] = f.cum;
            }
            if (n === "percent") c.usePercentage = !0;
            this.stackedYData = i;
            c.oldStacks = {};
        }
    };
    bi.prototype.setPercentStacks = function() {
        var t = this, e = t.stackKey, i = t.yAxis.stacks, s = t.processedXData;
        _e([ e, "-" + e ], function(e) {
            var n;
            for (var o = s.length, r, a; o--; ) if (r = s[o], n = (a = i[e] && i[e][r]) && a.points[t.index + "," + o], 
            r = n) a = a.total ? 100 / a.total : 0, r[0] = C(r[0] * a), r[1] = C(r[1] * a), 
            t.stackedYData[o] = r[1];
        });
    };
    t(z.prototype, {
        addSeries: function(t, e, i) {
            var s, n = this;
            t && (e = u(e, !0), Je(n, "addSeries", {
                options: t
            }, function() {
                s = n.initSeries(t);
                n.isDirtyLegend = !0;
                n.linkSeries();
                e && n.redraw(i);
            }));
            return s;
        },
        addAxis: function(t, i, s, n) {
            var o = i ? "xAxis" : "yAxis", r = this.options;
            new O(this, e(t, {
                index: this[o].length,
                isX: i
            }));
            r[o] = p(r[o] || {});
            r[o].push(t);
            u(s, !0) && this.redraw(n);
        },
        showLoading: function(e) {
            var i = this, s = i.options, n = i.loadingDiv, o = s.loading, r = function() {
                n && f(n, {
                    left: i.plotLeft + "px",
                    top: i.plotTop + "px",
                    width: i.plotWidth + "px",
                    height: i.plotHeight + "px"
                });
            };
            if (!n) i.loadingDiv = n = g(ke, {
                className: "highcharts-loading"
            }, t(o.style, {
                zIndex: 10,
                display: we
            }), i.container), i.loadingSpan = g("span", null, o.labelStyle, n), $e(i, "redraw", r);
            i.loadingSpan.innerHTML = e || s.lang.loading;
            if (!i.loadingShown) f(n, {
                opacity: 0,
                display: ""
            }), ti(n, {
                opacity: o.style.opacity
            }, {
                duration: o.showDuration || 0
            }), i.loadingShown = !0;
            r();
        },
        hideLoading: function() {
            var t = this.options, e = this.loadingDiv;
            e && ti(e, {
                opacity: 0
            }, {
                duration: t.loading.hideDuration || 100,
                complete: function() {
                    f(e, {
                        display: we
                    });
                }
            });
            this.loadingShown = !1;
        }
    });
    t(xi.prototype, {
        update: function(t, e, i, s) {
            function r() {
                a.applyOptions(t);
                if (n(t) && !o(t)) a.redraw = function() {
                    if (l) t && t.marker && t.marker.symbol ? a.graphic = l.destroy() : l.attr(a.pointAttr[a.state || ""]);
                    if (t && t.dataLabels && a.dataLabel) a.dataLabel = a.dataLabel.destroy();
                    a.redraw = null;
                };
                c = a.index;
                h.updateParallelArrays(a, c);
                p.data[c] = a.options;
                h.isDirty = h.isDirtyData = !0;
                if (!h.fixedBox && h.hasCartesianSeries) d.isDirtyBox = !0;
                p.legendType === "point" && d.legend.destroyItem(a);
                e && d.redraw(i);
            }
            var a = this, h = a.series, l = a.graphic, c, d = h.chart, p = h.options, e = u(e, !0);
            s === !1 ? r() : a.firePointEvent("update", {
                options: t
            }, r);
        },
        remove: function(t, e) {
            var i = this, s = i.series, n = s.points, o = s.chart, r, a = s.data;
            M(e, o);
            t = u(t, !0);
            i.firePointEvent("remove", null, function() {
                r = Ve(i, a);
                a.length === n.length && n.splice(r, 1);
                a.splice(r, 1);
                s.options.data.splice(r, 1);
                s.updateParallelArrays(i, "splice", r, 1);
                i.destroy();
                s.isDirty = !0;
                s.isDirtyData = !0;
                t && o.redraw();
            });
        }
    });
    t(bi.prototype, {
        addPoint: function(t, e, i, s) {
            var n = this.options, o = this.data, r = this.graph, a = this.area, h = this.chart, l = this.xAxis && this.xAxis.names, c = r && r.shift || 0, d = n.data, p, f = this.xData;
            M(s, h);
            i && _e([ r, a, this.graphNeg, this.areaNeg ], function(t) {
                if (t) t.shift = c + 1;
            });
            if (a) a.isArea = !0;
            e = u(e, !0);
            s = {
                series: this
            };
            this.pointClass.prototype.applyOptions.apply(s, [ t ]);
            r = s.x;
            a = f.length;
            if (this.requireSorting && r < f[a - 1]) for (p = !0; a && f[a - 1] > r; ) a--;
            this.updateParallelArrays(s, "splice", a, 0, 0);
            this.updateParallelArrays(s, a);
            if (l && s.name) l[r] = s.name;
            d.splice(a, 0, t);
            p && (this.data.splice(a, 0, null), this.processData());
            n.legendType === "point" && this.generatePoints();
            i && (o[0] && o[0].remove ? o[0].remove(!1) : (o.shift(), this.updateParallelArrays(s, "shift"), 
            d.shift()));
            this.isDirtyData = this.isDirty = !0;
            e && (this.getAttribs(), h.redraw());
        },
        remove: function(t, e) {
            var i = this, s = i.chart, t = u(t, !0);
            if (!i.isRemoving) i.isRemoving = !0, Je(i, "remove", null, function() {
                i.destroy();
                s.isDirtyLegend = s.isDirtyBox = !0;
                s.linkSeries();
                t && s.redraw(e);
            });
            i.isRemoving = !1;
        },
        update: function(i, s) {
            var n = this, o = this.chart, r = this.userOptions, a = this.type, h = Ge[a].prototype, l = [ "group", "markerGroup", "dataLabelsGroup" ], c;
            _e(l, function(t) {
                l[t] = n[t];
                delete n[t];
            });
            i = e(r, {
                animation: !1,
                index: this.index,
                pointStart: this.xData[0]
            }, {
                data: this.options.data
            }, i);
            this.remove(!1);
            for (c in h) h.hasOwnProperty(c) && (this[c] = H);
            t(this, Ge[i.type || a].prototype);
            _e(l, function(t) {
                n[t] = l[t];
            });
            this.init(o, i);
            o.linkSeries();
            u(s, !0) && o.redraw(!1);
        }
    });
    t(O.prototype, {
        update: function(i, s) {
            var n = this.chart, i = n.options[this.coll][this.options.index] = e(this.userOptions, i);
            this.destroy(!0);
            this._addedPlotLB = H;
            this.init(n, t(i, {
                events: H
            }));
            n.isDirtyBox = !0;
            u(s, !0) && n.redraw();
        },
        remove: function(t) {
            for (var e = this.chart, i = this.coll, s = this.series, n = s.length; n--; ) s[n] && s[n].remove(!1);
            l(e.axes, this);
            l(e[i], this);
            e.options[i].splice(this.options.index, 1);
            _e(e[i], function(t, e) {
                t.options.index = e;
            });
            this.destroy();
            e.isDirtyBox = !0;
            u(t, !0) && e.redraw();
        },
        setTitle: function(t, e) {
            this.update({
                title: t
            }, e);
        },
        setCategories: function(t, e) {
            this.update({
                categories: t
            }, e);
        }
    });
    li = m(bi);
    Ge.line = li;
    ii.area = e(Ye, {
        threshold: 0
    });
    var ki = m(bi, {
        type: "area",
        getSegments: function() {
            var t = this, e = [], i = [], s = [], n = this.xAxis, o = this.yAxis, r = o.stacks[this.stackKey], a = {}, h, l, c = this.points, d = this.options.connectNulls, p, u;
            if (this.options.stacking && !this.cropped) {
                for (p = 0; p < c.length; p++) a[c[p].x] = c[p];
                for (u in r) r[u].total !== null && s.push(+u);
                s.sort(function(t, e) {
                    return t - e;
                });
                _e(s, function(e) {
                    var s = 0, c;
                    if (!d || a[e] && a[e].y !== null) if (a[e]) i.push(a[e]); else {
                        for (p = t.index; p <= o.series.length; p++) if (c = r[e].points[p + "," + e]) {
                            s = c[1];
                            break;
                        }
                        h = n.translate(e);
                        l = o.toPixels(s, !0);
                        i.push({
                            y: null,
                            plotX: h,
                            clientX: h,
                            plotY: l,
                            yBottom: l,
                            onMouseOver: ve
                        });
                    }
                });
                i.length && e.push(i);
            } else bi.prototype.getSegments.call(this), e = this.segments;
            this.segments = e;
        },
        getSegmentPath: function(t) {
            var e = bi.prototype.getSegmentPath.call(this, t), i = [].concat(e), s, n = this.options;
            s = e.length;
            var o = this.yAxis.getThreshold(n.threshold), r;
            s === 3 && i.push("L", e[1], e[2]);
            if (n.stacking && !this.closedStacks) for (s = t.length - 1; s >= 0; s--) r = u(t[s].yBottom, o), 
            s < t.length - 1 && n.step && i.push(t[s + 1].plotX, r), i.push(t[s].plotX, r); else this.closeSegment(i, t, o);
            this.areaPath = this.areaPath.concat(i);
            return e;
        },
        closeSegment: function(t, e, i) {
            t.push("L", e[e.length - 1].plotX, i, "L", e[0].plotX, i);
        },
        drawGraph: function() {
            this.areaPath = [];
            bi.prototype.drawGraph.apply(this);
            var t = this, e = this.areaPath, i = this.options, s = i.negativeColor, n = i.negativeFillColor, o = [ [ "area", this.color, i.fillColor ] ];
            (s || n) && o.push([ "areaNeg", s, n ]);
            _e(o, function(s) {
                var n = s[0], o = t[n];
                o ? o.animate({
                    d: e
                }) : t[n] = t.chart.renderer.path(e).attr({
                    fill: u(s[2], ri(s[1]).setOpacity(u(i.fillOpacity, .75)).get()),
                    zIndex: 0
                }).add(t.group);
            });
        },
        drawLegendSymbol: Ne.drawRectangle
    });
    Ge.area = ki;
    ii.spline = e(Ye);
    li = m(bi, {
        type: "spline",
        getPointSpline: function(t, e, i) {
            var s = e.plotX, n = e.plotY, o = t[i - 1], r = t[i + 1], a, h, l, c;
            if (o && r) {
                t = o.plotY;
                l = r.plotX;
                var r = r.plotY, d;
                a = (1.5 * s + o.plotX) / 2.5;
                h = (1.5 * n + t) / 2.5;
                l = (1.5 * s + l) / 2.5;
                c = (1.5 * n + r) / 2.5;
                d = (c - h) * (l - s) / (l - a) + n - c;
                h += d;
                c += d;
                h > t && h > n ? (h = F(t, n), c = 2 * n - h) : h < t && h < n && (h = j(t, n), 
                c = 2 * n - h);
                c > r && c > n ? (c = F(r, n), h = 2 * n - c) : c < r && c < n && (c = j(r, n), 
                h = 2 * n - c);
                e.rightContX = l;
                e.rightContY = c;
            }
            i ? (e = [ "C", o.rightContX || o.plotX, o.rightContY || o.plotY, a || s, h || n, s, n ], 
            o.rightContX = o.rightContY = null) : e = [ "M", s, n ];
            return e;
        }
    });
    Ge.spline = li;
    ii.areaspline = e(ii.area);
    ki = ki.prototype;
    li = m(li, {
        type: "areaspline",
        closedStacks: !0,
        getSegmentPath: ki.getSegmentPath,
        closeSegment: ki.closeSegment,
        drawGraph: ki.drawGraph,
        drawLegendSymbol: Ne.drawRectangle
    });
    Ge.areaspline = li;
    ii.column = e(Ye, {
        borderColor: "#FFFFFF",
        borderRadius: 0,
        groupPadding: .2,
        marker: null,
        pointPadding: .1,
        minPointLength: 0,
        cropThreshold: 50,
        pointRange: null,
        states: {
            hover: {
                brightness: .1,
                shadow: !1,
                halo: !1
            },
            select: {
                color: "#C0C0C0",
                borderColor: "#000000",
                shadow: !1
            }
        },
        dataLabels: {
            align: null,
            verticalAlign: null,
            y: null
        },
        stickyTracking: !1,
        tooltip: {
            distance: 6
        },
        threshold: 0
    });
    li = m(bi, {
        type: "column",
        pointAttrToOptions: {
            stroke: "borderColor",
            fill: "color",
            r: "borderRadius"
        },
        cropShoulder: 0,
        trackerGroups: [ "group", "dataLabelsGroup" ],
        negStacks: !0,
        init: function() {
            bi.prototype.init.apply(this, arguments);
            var t = this, e = t.chart;
            e.hasRendered && _e(e.series, function(e) {
                if (e.type === t.type) e.isDirty = !0;
            });
        },
        getColumnMetrics: function() {
            var t = this, e = t.options, i = t.xAxis, s = t.yAxis, n = i.reversed, o, r = {}, a, h = 0;
            e.grouping === !1 ? h = 1 : _e(t.chart.series, function(e) {
                var i = e.options, n = e.yAxis;
                if (e.type === t.type && e.visible && s.len === n.len && s.pos === n.pos) i.stacking ? (o = e.stackKey, 
                r[o] === H && (r[o] = h++), a = r[o]) : i.grouping !== !1 && (a = h++), e.columnIndex = a;
            });
            var i = j(V(i.transA) * (i.ordinalSlope || e.pointRange || i.closestPointRange || i.tickInterval || 1), i.len), l = i * e.groupPadding, d = (i - 2 * l) / h, p = e.pointWidth, e = c(p) ? (d - p) / 2 : d * e.pointPadding, p = u(p, d - 2 * e);
            return t.columnMetrics = {
                width: p,
                offset: e + (l + ((n ? h - (t.columnIndex || 0) : t.columnIndex) || 0) * d - i / 2) * (n ? -1 : 1)
            };
        },
        translate: function() {
            var t = this, e = t.chart, i = t.options, s = t.borderWidth = u(i.borderWidth, t.activePointCount > .5 * t.xAxis.len ? 0 : 1), n = t.yAxis, o = t.translatedThreshold = n.getThreshold(i.threshold), r = u(i.minPointLength, 5), a = t.getColumnMetrics(), h = a.width, l = t.barW = F(h, 1 + 2 * s), c = t.pointXOffset = a.offset, d = -(s % 2 ? .5 : 0), p = s % 2 ? .5 : 1;
            e.renderer.isVML && e.inverted && (p += 1);
            i.pointPadding && (l = N(l));
            bi.prototype.translate.apply(t);
            _e(t.points, function(i) {
                var s = u(i.yBottom, o), a = j(F(-999 - s, i.plotY), n.len + 999 + s), f = i.plotX + c, g = l, m = j(a, s), y;
                y = F(a, s) - m;
                V(y) < r && r && (y = r, m = W(V(m - o) > r ? s - r : o - (n.translate(i.y, 0, 1, 0, 1) <= o ? r : 0)));
                i.barX = f;
                i.pointWidth = h;
                i.tooltipPos = e.inverted ? [ n.len - a, t.xAxis.len - f - g / 2 ] : [ f + g / 2, a + n.pos - e.plotTop ];
                g = W(f + g) + d;
                f = W(f) + d;
                g -= f;
                s = V(m) < .5;
                y = W(m + y) + p;
                m = W(m) + p;
                y -= m;
                s && (m -= 1, y += 1);
                i.shapeType = "rect";
                i.shapeArgs = {
                    x: f,
                    y: m,
                    width: g,
                    height: y
                };
            });
        },
        getSymbol: ve,
        drawLegendSymbol: Ne.drawRectangle,
        drawGraph: ve,
        drawPoints: function() {
            var t = this, i = this.chart, s = t.options, n = i.renderer, o = s.animationLimit || 250, r, a;
            _e(t.points, function(h) {
                var l = h.plotY, d = h.graphic;
                if (l !== H && !isNaN(l) && h.y !== null) r = h.shapeArgs, l = c(t.borderWidth) ? {
                    "stroke-width": t.borderWidth
                } : {}, a = h.pointAttr[h.selected ? "select" : ""] || t.pointAttr[""], d ? (ei(d), 
                d.attr(l)[i.pointCount < o ? "animate" : "attr"](e(r))) : h.graphic = n[h.shapeType](r).attr(a).attr(l).add(t.group).shadow(s.shadow, null, s.stacking && !s.borderRadius); else if (d) h.graphic = d.destroy();
            });
        },
        animate: function(t) {
            var e = this.yAxis, i = this.options, s = this.chart.inverted, n = {};
            if (ne) t ? (n.scaleY = .001, t = j(e.pos + e.len, F(e.pos, e.toPixels(i.threshold))), 
            s ? n.translateX = t - e.len : n.translateY = t, this.group.attr(n)) : (n.scaleY = 1, 
            n[s ? "translateX" : "translateY"] = e.pos, this.group.animate(n, this.options.animation), 
            this.animate = null);
        },
        remove: function() {
            var t = this, e = t.chart;
            e.hasRendered && _e(e.series, function(e) {
                if (e.type === t.type) e.isDirty = !0;
            });
            bi.prototype.remove.apply(t, arguments);
        }
    });
    Ge.column = li;
    ii.bar = e(ii.column);
    ki = m(li, {
        type: "bar",
        inverted: !0
    });
    Ge.bar = ki;
    ii.scatter = e(Ye, {
        lineWidth: 0,
        tooltip: {
            headerFormat: '<span style="color:{series.color}">â—</span> <span style="font-size: 10px;"> {series.name}</span><br/>',
            pointFormat: "x: <b>{point.x}</b><br/>y: <b>{point.y}</b><br/>"
        },
        stickyTracking: !1
    });
    ki = m(bi, {
        type: "scatter",
        sorted: !1,
        requireSorting: !1,
        noSharedTooltip: !0,
        trackerGroups: [ "markerGroup", "dataLabelsGroup" ],
        takeOrdinalPosition: !1,
        singularTooltips: !0,
        drawGraph: function() {
            this.options.lineWidth && bi.prototype.drawGraph.call(this);
        }
    });
    Ge.scatter = ki;
    ii.pie = e(Ye, {
        borderColor: "#FFFFFF",
        borderWidth: 1,
        center: [ null, null ],
        clip: !1,
        colorByPoint: !0,
        dataLabels: {
            distance: 30,
            enabled: !0,
            formatter: function() {
                return this.point.name;
            }
        },
        ignoreHiddenPoint: !0,
        legendType: "point",
        marker: null,
        size: null,
        showInLegend: !1,
        slicedOffset: 10,
        states: {
            hover: {
                brightness: .1,
                shadow: !1
            }
        },
        stickyTracking: !1,
        tooltip: {
            followPointer: !0
        }
    });
    Ye = {
        type: "pie",
        isCartesian: !1,
        pointClass: m(xi, {
            init: function() {
                xi.prototype.init.apply(this, arguments);
                var e = this, i;
                if (e.y < 0) e.y = null;
                t(e, {
                    visible: e.visible !== !1,
                    name: u(e.name, "Slice")
                });
                i = function(t) {
                    e.slice(t.type === "select");
                };
                $e(e, "select", i);
                $e(e, "unselect", i);
                return e;
            },
            setVisible: function(t) {
                var e = this, i = e.series, s = i.chart;
                e.visible = e.options.visible = t = t === H ? !e.visible : t;
                i.options.data[Ve(e, i.data)] = e.options;
                _e([ "graphic", "dataLabel", "connector", "shadowGroup" ], function(i) {
                    if (e[i]) e[i][t ? "show" : "hide"](!0);
                });
                e.legendItem && s.legend.colorizeItem(e, t);
                if (!i.isDirty && i.options.ignoreHiddenPoint) i.isDirty = !0, s.redraw();
            },
            slice: function(t, e, i) {
                var s = this.series;
                M(i, s.chart);
                u(e, !0);
                this.sliced = this.options.sliced = t = c(t) ? t : !this.sliced;
                s.options.data[Ve(this, s.data)] = this.options;
                t = t ? this.slicedTranslation : {
                    translateX: 0,
                    translateY: 0
                };
                this.graphic.animate(t);
                this.shadowGroup && this.shadowGroup.animate(t);
            },
            haloPath: function(t) {
                var e = this.shapeArgs, i = this.series.chart;
                return this.sliced || !this.visible ? [] : this.series.chart.renderer.symbols.arc(i.plotLeft + e.x, i.plotTop + e.y, e.r + t, e.r + t, {
                    innerR: this.shapeArgs.r,
                    start: e.start,
                    end: e.end
                });
            }
        }),
        requireSorting: !1,
        noSharedTooltip: !0,
        trackerGroups: [ "group", "dataLabelsGroup" ],
        axisTypes: [],
        pointAttrToOptions: {
            stroke: "borderColor",
            "stroke-width": "borderWidth",
            fill: "color"
        },
        singularTooltips: !0,
        getColor: ve,
        animate: function(t) {
            var e = this, i = e.points, s = e.startAngleRad;
            if (!t) _e(i, function(t) {
                var i = t.graphic, t = t.shapeArgs;
                i && (i.attr({
                    r: e.center[3] / 2,
                    start: s,
                    end: s
                }), i.animate({
                    r: t.r,
                    start: t.start,
                    end: t.end
                }, e.options.animation));
            }), e.animate = null;
        },
        setData: function(t, e, i, s) {
            bi.prototype.setData.call(this, t, !1, i, s);
            this.processData();
            this.generatePoints();
            u(e, !0) && this.chart.redraw(i);
        },
        generatePoints: function() {
            var t, e = 0, i, s, n, o = this.options.ignoreHiddenPoint;
            bi.prototype.generatePoints.call(this);
            i = this.points;
            s = i.length;
            for (t = 0; t < s; t++) n = i[t], e += o && !n.visible ? 0 : n.y;
            this.total = e;
            for (t = 0; t < s; t++) n = i[t], n.percentage = e > 0 ? n.y / e * 100 : 0, n.total = e;
        },
        translate: function(t) {
            this.generatePoints();
            var e = 0, i = this.options, s = i.slicedOffset, n = s + i.borderWidth, o, r, a, h = i.startAngle || 0, l = this.startAngleRad = Z / 180 * (h - 90), h = (this.endAngleRad = Z / 180 * (u(i.endAngle, h + 360) - 90)) - l, c = this.points, d = i.dataLabels.distance, i = i.ignoreHiddenPoint, p, f = c.length, g;
            if (!t) this.center = t = this.getCenter();
            this.getX = function(e, i) {
                a = G.asin(j((e - t[1]) / (t[2] / 2 + d), 1));
                return t[0] + (i ? -1 : 1) * _(a) * (t[2] / 2 + d);
            };
            for (p = 0; p < f; p++) {
                g = c[p];
                o = l + e * h;
                if (!i || g.visible) e += g.percentage / 100;
                r = l + e * h;
                g.shapeType = "arc";
                g.shapeArgs = {
                    x: t[0],
                    y: t[1],
                    r: t[2] / 2,
                    innerR: t[3] / 2,
                    start: W(o * 1e3) / 1e3,
                    end: W(r * 1e3) / 1e3
                };
                a = (r + o) / 2;
                a > 1.5 * Z ? a -= 2 * Z : a < -Z / 2 && (a += 2 * Z);
                g.slicedTranslation = {
                    translateX: W(_(a) * s),
                    translateY: W(U(a) * s)
                };
                o = _(a) * t[2] / 2;
                r = U(a) * t[2] / 2;
                g.tooltipPos = [ t[0] + o * .7, t[1] + r * .7 ];
                g.half = a < -Z / 2 || a > Z / 2 ? 1 : 0;
                g.angle = a;
                n = j(n, d / 2);
                g.labelPos = [ t[0] + o + _(a) * d, t[1] + r + U(a) * d, t[0] + o + _(a) * n, t[1] + r + U(a) * n, t[0] + o, t[1] + r, d < 0 ? "center" : g.half ? "right" : "left", a ];
            }
        },
        drawGraph: null,
        drawPoints: function() {
            var e = this, i = e.chart.renderer, s, n, o = e.options.shadow, r, a;
            if (o && !e.shadowGroup) e.shadowGroup = i.g("shadow").add(e.group);
            _e(e.points, function(h) {
                n = h.graphic;
                a = h.shapeArgs;
                r = h.shadowGroup;
                if (o && !r) r = h.shadowGroup = i.g("shadow").add(e.shadowGroup);
                s = h.sliced ? h.slicedTranslation : {
                    translateX: 0,
                    translateY: 0
                };
                r && r.attr(s);
                n ? n.animate(t(a, s)) : h.graphic = n = i[h.shapeType](a).setRadialReference(e.center).attr(h.pointAttr[h.selected ? "select" : ""]).attr({
                    "stroke-linejoin": "round"
                }).attr(s).add(e.group).shadow(o, r);
                h.visible !== void 0 && h.setVisible(h.visible);
            });
        },
        sortByAngle: function(t, e) {
            t.sort(function(t, i) {
                return t.angle !== void 0 && (i.angle - t.angle) * e;
            });
        },
        drawLegendSymbol: Ne.drawRectangle,
        getCenter: hi.getCenter,
        getSymbol: ve
    };
    Ye = m(bi, Ye);
    Ge.pie = Ye;
    bi.prototype.drawDataLabels = function() {
        var i = this, s = i.options, n = s.cursor, o = s.dataLabels, r = i.points, a, h, l = i.hasRendered || 0, d, p;
        if (o.enabled || i._hasPointLabels) i.dlProcessOptions && i.dlProcessOptions(o), 
        p = i.plotGroup("dataLabelsGroup", "data-labels", o.defer ? "hidden" : "visible", o.zIndex || 6), 
        u(o.defer, !0) && (p.attr({
            opacity: +l
        }), l || $e(i, "afterAnimate", function() {
            i.visible && p.show();
            p[s.animation ? "animate" : "attr"]({
                opacity: 1
            }, {
                duration: 200
            });
        })), h = o, _e(r, function(s) {
            var r, l = s.dataLabel, f, g, m = s.connector, y = !0;
            a = s.options && s.options.dataLabels;
            r = u(a && a.enabled, h.enabled);
            if (l && !r) s.dataLabel = l.destroy(); else if (r) {
                o = e(h, a);
                r = o.rotation;
                f = s.getLabelConfig();
                d = o.format ? b(o.format, f) : o.formatter.call(f, o);
                o.style.color = u(o.color, o.style.color, i.color, "black");
                if (l) if (c(d)) l.attr({
                    text: d
                }), y = !1; else {
                    if (s.dataLabel = l = l.destroy(), m) s.connector = m.destroy();
                } else if (c(d)) {
                    l = {
                        fill: o.backgroundColor,
                        stroke: o.borderColor,
                        "stroke-width": o.borderWidth,
                        r: o.borderRadius || 0,
                        rotation: r,
                        padding: o.padding,
                        zIndex: 1
                    };
                    for (g in l) l[g] === H && delete l[g];
                    l = s.dataLabel = i.chart.renderer[r ? "text" : "label"](d, 0, -999, null, null, null, o.useHTML).attr(l).css(t(o.style, n && {
                        cursor: n
                    })).add(p).shadow(o.shadow);
                }
                l && i.alignDataLabel(s, l, o, null, y);
            }
        });
    };
    bi.prototype.alignDataLabel = function(e, i, s, n, o) {
        var r = this.chart, a = r.inverted, h = u(e.plotX, -999), l = u(e.plotY, -999), c = i.getBBox();
        if (e = this.visible && (e.series.forceDL || r.isInsidePlot(h, W(l), a) || n && r.isInsidePlot(h, a ? n.x + 1 : n.y + n.height - 1, a))) n = t({
            x: a ? r.plotWidth - l : h,
            y: W(a ? r.plotHeight - h : l),
            width: 0,
            height: 0
        }, n), t(s, {
            width: c.width,
            height: c.height
        }), s.rotation ? i[o ? "attr" : "animate"]({
            x: n.x + s.x + n.width / 2,
            y: n.y + s.y + n.height / 2
        }).attr({
            align: s.align
        }) : (i.align(s, null, n), a = i.alignAttr, u(s.overflow, "justify") === "justify" ? this.justifyDataLabel(i, s, a, c, n, o) : u(s.crop, !0) && (e = r.isInsidePlot(a.x, a.y) && r.isInsidePlot(a.x + c.width, a.y + c.height)));
        if (!e) i.attr({
            y: -999
        }), i.placed = !1;
    };
    bi.prototype.justifyDataLabel = function(t, e, i, s, n, o) {
        var r = this.chart, a = e.align, h = e.verticalAlign, l, c;
        l = i.x;
        if (l < 0) a === "right" ? e.align = "left" : e.x = -l, c = !0;
        l = i.x + s.width;
        if (l > r.plotWidth) a === "left" ? e.align = "right" : e.x = r.plotWidth - l, c = !0;
        l = i.y;
        if (l < 0) h === "bottom" ? e.verticalAlign = "top" : e.y = -l, c = !0;
        l = i.y + s.height;
        if (l > r.plotHeight) h === "top" ? e.verticalAlign = "bottom" : e.y = r.plotHeight - l, 
        c = !0;
        if (c) t.placed = !o, t.align(e, null, n);
    };
    if (Ge.pie) Ge.pie.prototype.drawDataLabels = function() {
        var t = this, e = t.data, i, s = t.chart, n = t.options.dataLabels, o = u(n.connectorPadding, 10), r = u(n.connectorWidth, 1), a = s.plotWidth, h = s.plotHeight, l, c, d = u(n.softConnector, !0), p = n.distance, f = t.center, g = f[2] / 2, m = f[1], y = p > 0, v, x, b, k = [ [], [] ], w, S, T, A, L, C = [ 0, 0, 0, 0 ], M = function(t, e) {
            return e.y - t.y;
        };
        if (t.visible && (n.enabled || t._hasPointLabels)) {
            bi.prototype.drawDataLabels.apply(t);
            _e(e, function(t) {
                t.dataLabel && t.visible && k[t.half].push(t);
            });
            for (A = 2; A--; ) {
                var I = [], D = [], B = k[A], O = B.length, z;
                if (O) {
                    t.sortByAngle(B, A - .5);
                    for (L = e = 0; !e && B[L]; ) e = B[L] && B[L].dataLabel && (B[L].dataLabel.getBBox().height || 21), 
                    L++;
                    if (p > 0) {
                        x = j(m + g + p, s.plotHeight);
                        for (L = F(0, m - g - p); L <= x; L += e) I.push(L);
                        x = I.length;
                        if (O > x) {
                            i = [].concat(B);
                            i.sort(M);
                            for (L = O; L--; ) i[L].rank = L;
                            for (L = O; L--; ) B[L].rank >= x && B.splice(L, 1);
                            O = B.length;
                        }
                        for (L = 0; L < O; L++) {
                            i = B[L];
                            b = i.labelPos;
                            i = 9999;
                            var R, H;
                            for (H = 0; H < x; H++) R = V(I[H] - b[1]), R < i && (i = R, z = H);
                            if (z < L && I[L] !== null) z = L; else for (x < O - L + z && I[L] !== null && (z = x - O + L); I[z] === null; ) z++;
                            D.push({
                                i: z,
                                y: I[z]
                            });
                            I[z] = null;
                        }
                        D.sort(M);
                    }
                    for (L = 0; L < O; L++) {
                        i = B[L];
                        b = i.labelPos;
                        v = i.dataLabel;
                        T = i.visible === !1 ? "hidden" : "visible";
                        i = b[1];
                        if (p > 0) {
                            if (x = D.pop(), z = x.i, S = x.y, i > S && I[z + 1] !== null || i < S && I[z - 1] !== null) S = j(F(0, i), s.plotHeight);
                        } else S = i;
                        w = n.justify ? f[0] + (A ? -1 : 1) * (g + p) : t.getX(S === m - g - p || S === m + g + p ? i : S, A);
                        v._attr = {
                            visibility: T,
                            align: b[6]
                        };
                        v._pos = {
                            x: w + n.x + ({
                                left: o,
                                right: -o
                            }[b[6]] || 0),
                            y: S + n.y - 10
                        };
                        v.connX = w;
                        v.connY = S;
                        if (this.options.size === null) x = v.width, w - x < o ? C[3] = F(W(x - w + o), C[3]) : w + x > a - o && (C[1] = F(W(w + x - a + o), C[1])), 
                        S - e / 2 < 0 ? C[0] = F(W(-S + e / 2), C[0]) : S + e / 2 > h && (C[2] = F(W(S + e / 2 - h), C[2]));
                    }
                }
            }
            if (P(C) === 0 || this.verifyDataLabelOverflow(C)) this.placeDataLabels(), y && r && _e(this.points, function(e) {
                l = e.connector;
                b = e.labelPos;
                if ((v = e.dataLabel) && v._pos) T = v._attr.visibility, w = v.connX, S = v.connY, 
                c = d ? [ "M", w + (b[6] === "left" ? 5 : -5), S, "C", w, S, 2 * b[2] - b[4], 2 * b[3] - b[5], b[2], b[3], "L", b[4], b[5] ] : [ "M", w + (b[6] === "left" ? 5 : -5), S, "L", b[2], b[3], "L", b[4], b[5] ], 
                l ? (l.animate({
                    d: c
                }), l.attr("visibility", T)) : e.connector = l = t.chart.renderer.path(c).attr({
                    "stroke-width": r,
                    stroke: n.connectorColor || e.color || "#606060",
                    visibility: T
                }).add(t.dataLabelsGroup); else if (l) e.connector = l.destroy();
            });
        }
    }, Ge.pie.prototype.placeDataLabels = function() {
        _e(this.points, function(t) {
            var t = t.dataLabel, e;
            if (t) (e = t._pos) ? (t.attr(t._attr), t[t.moved ? "animate" : "attr"](e), t.moved = !0) : t && t.attr({
                y: -999
            });
        });
    }, Ge.pie.prototype.alignDataLabel = ve, Ge.pie.prototype.verifyDataLabelOverflow = function(t) {
        var e = this.center, i = this.options, s = i.center, n = i = i.minSize || 80, o;
        s[0] !== null ? n = F(e[2] - F(t[1], t[3]), i) : (n = F(e[2] - t[1] - t[3], i), 
        e[0] += (t[3] - t[1]) / 2);
        s[1] !== null ? n = F(j(n, e[2] - F(t[0], t[2])), i) : (n = F(j(n, e[2] - t[0] - t[2]), i), 
        e[1] += (t[0] - t[2]) / 2);
        n < e[2] ? (e[2] = n, this.translate(e), _e(this.points, function(t) {
            if (t.dataLabel) t.dataLabel._pos = null;
        }), this.drawDataLabels && this.drawDataLabels()) : o = !0;
        return o;
    };
    if (Ge.column) Ge.column.prototype.alignDataLabel = function(t, i, s, n, o) {
        var r = this.chart, a = r.inverted, h = t.dlBox || t.shapeArgs, l = t.below || t.plotY > u(this.translatedThreshold, r.plotSizeY), c = u(s.inside, !!this.options.stacking);
        if (h && (n = e(h), a && (n = {
            x: r.plotWidth - n.y - n.height,
            y: r.plotHeight - n.x - n.width,
            width: n.height,
            height: n.width
        }), !c)) a ? (n.x += l ? 0 : n.width, n.width = 0) : (n.y += l ? n.height : 0, n.height = 0);
        s.align = u(s.align, !a || c ? "center" : l ? "right" : "left");
        s.verticalAlign = u(s.verticalAlign, a || c ? "middle" : l ? "top" : "bottom");
        bi.prototype.alignDataLabel.call(this, t, i, s, n, o);
    };
    Ye = We.TrackerMixin = {
        drawTrackerPoint: function() {
            var t = this, e = t.chart, i = e.pointer, s = t.options.cursor, n = s && {
                cursor: s
            }, o = function(i) {
                var s = i.target, n;
                if (e.hoverSeries !== t) t.onMouseOver();
                for (;s && !n; ) n = s.point, s = s.parentNode;
                if (n !== H && n !== e.hoverPoint) n.onMouseOver(i);
            };
            _e(t.points, function(t) {
                if (t.graphic) t.graphic.element.point = t;
                if (t.dataLabel) t.dataLabel.element.point = t;
            });
            if (!t._hasTracking) _e(t.trackerGroups, function(e) {
                if (t[e] && (t[e].addClass("highcharts-tracker").on("mouseover", o).on("mouseout", function(t) {
                    i.onTrackerMouseOut(t);
                }).css(n), he)) t[e].on("touchstart", o);
            }), t._hasTracking = !0;
        },
        drawTrackerGraph: function() {
            var t = this, e = t.options, i = e.trackByArea, s = [].concat(i ? t.areaPath : t.graphPath), n = s.length, o = t.chart, r = o.pointer, a = o.renderer, h = o.options.tooltip.snap, l = t.tracker, c = e.cursor, d = c && {
                cursor: c
            }, c = t.singlePoints, p, u = function() {
                if (o.hoverSeries !== t) t.onMouseOver();
            }, f = "rgba(192,192,192," + (ne ? 1e-4 : .002) + ")";
            if (n && !i) for (p = n + 1; p--; ) s[p] === "M" && s.splice(p + 1, 0, s[p + 1] - h, s[p + 2], "L"), 
            (p && s[p] === "M" || p === n) && s.splice(p, 0, "L", s[p - 2] + h, s[p - 1]);
            for (p = 0; p < c.length; p++) n = c[p], s.push("M", n.plotX - h, n.plotY, "L", n.plotX + h, n.plotY);
            l ? l.attr({
                d: s
            }) : (t.tracker = a.path(s).attr({
                "stroke-linejoin": "round",
                visibility: t.visible ? "visible" : "hidden",
                stroke: f,
                fill: i ? f : we,
                "stroke-width": e.lineWidth + (i ? 0 : 2 * h),
                zIndex: 2
            }).add(t.group), _e([ t.tracker, t.markerGroup ], function(t) {
                t.addClass("highcharts-tracker").on("mouseover", u).on("mouseout", function(t) {
                    r.onTrackerMouseOut(t);
                }).css(d);
                if (he) t.on("touchstart", u);
            }));
        }
    };
    if (Ge.column) li.prototype.drawTracker = Ye.drawTrackerPoint;
    if (Ge.pie) Ge.pie.prototype.drawTracker = Ye.drawTrackerPoint;
    if (Ge.scatter) ki.prototype.drawTracker = Ye.drawTrackerPoint;
    t(vi.prototype, {
        setItemEvents: function(t, e, i, s, n) {
            var o = this;
            (i ? e : t.legendGroup).on("mouseover", function() {
                t.setState("hover");
                e.css(o.options.itemHoverStyle);
            }).on("mouseout", function() {
                e.css(t.visible ? s : n);
                t.setState();
            }).on("click", function(e) {
                var i = function() {
                    t.setVisible();
                }, e = {
                    browserEvent: e
                };
                t.firePointEvent ? t.firePointEvent("legendItemClick", e, i) : Je(t, "legendItemClick", e, i);
            });
        },
        createCheckboxForItem: function(t) {
            t.checkbox = g("input", {
                type: "checkbox",
                checked: t.selected,
                defaultChecked: t.selected
            }, this.options.itemCheckboxStyle, this.chart.container);
            $e(t.checkbox, "click", function(e) {
                Je(t, "checkboxClick", {
                    checked: e.target.checked
                }, function() {
                    t.select();
                });
            });
        }
    });
    pe.legend.itemStyle.cursor = "pointer";
    t(z.prototype, {
        showResetZoom: function() {
            var t = this, e = pe.lang, i = t.options.chart.resetZoomButton, s = i.theme, n = s.states, o = i.relativeTo === "chart" ? null : "plotBox";
            this.resetZoomButton = t.renderer.button(e.resetZoom, null, null, function() {
                t.zoomOut();
            }, s, n && n.hover).attr({
                align: i.position.align,
                title: e.resetZoomTitle
            }).add().align(i.position, !1, o);
        },
        zoomOut: function() {
            var t = this;
            Je(t, "selection", {
                resetSelection: !0
            }, function() {
                t.zoom();
            });
        },
        zoom: function(t) {
            var e, i = this.pointer, s = !1, o;
            !t || t.resetSelection ? _e(this.axes, function(t) {
                e = t.zoom();
            }) : _e(t.xAxis.concat(t.yAxis), function(t) {
                var n = t.axis, o = n.isXAxis;
                if (i[o ? "zoomX" : "zoomY"] || i[o ? "pinchX" : "pinchY"]) e = n.zoom(t.min, t.max), 
                n.displayBtn && (s = !0);
            });
            o = this.resetZoomButton;
            if (s && !o) this.showResetZoom(); else if (!s && n(o)) this.resetZoomButton = o.destroy();
            e && this.redraw(u(this.options.chart.animation, t && t.animation, this.pointCount < 100));
        },
        pan: function(t, e) {
            var i = this, s = i.hoverPoints, n;
            s && _e(s, function(t) {
                t.setState();
            });
            _e(e === "xy" ? [ 1, 0 ] : [ 1 ], function(e) {
                var s = t[e ? "chartX" : "chartY"], o = i[e ? "xAxis" : "yAxis"][0], r = i[e ? "mouseDownX" : "mouseDownY"], a = (o.pointRange || 0) / 2, h = o.getExtremes(), l = o.toValue(r - s, !0) + a, r = o.toValue(r + i[e ? "plotWidth" : "plotHeight"] - s, !0) - a;
                o.series.length && l > j(h.dataMin, h.min) && r < F(h.dataMax, h.max) && (o.setExtremes(l, r, !1, !1, {
                    trigger: "pan"
                }), n = !0);
                i[e ? "mouseDownX" : "mouseDownY"] = s;
            });
            n && i.redraw(!1);
            f(i.container, {
                cursor: "move"
            });
        }
    });
    t(xi.prototype, {
        select: function(t, e) {
            var i = this, s = i.series, n = s.chart, t = u(t, !i.selected);
            i.firePointEvent(t ? "select" : "unselect", {
                accumulate: e
            }, function() {
                i.selected = i.options.selected = t;
                s.options.data[Ve(i, s.data)] = i.options;
                i.setState(t && "select");
                e || _e(n.getSelectedPoints(), function(t) {
                    if (t.selected && t !== i) t.selected = t.options.selected = !1, s.options.data[Ve(t, s.data)] = t.options, 
                    t.setState(""), t.firePointEvent("unselect");
                });
            });
        },
        onMouseOver: function(t) {
            var e = this.series, i = e.chart, s = i.tooltip, n = i.hoverPoint;
            if (n && n !== this) n.onMouseOut();
            this.firePointEvent("mouseOver");
            s && (!s.shared || e.noSharedTooltip) && s.refresh(this, t);
            this.setState("hover");
            i.hoverPoint = this;
        },
        onMouseOut: function() {
            var t = this.series.chart, e = t.hoverPoints;
            this.firePointEvent("mouseOut");
            if (!e || Ve(this, e) === -1) this.setState(), t.hoverPoint = null;
        },
        importEvents: function() {
            if (!this.hasImportedEvents) {
                var t = e(this.series.options.point, this.options).events, i;
                this.events = t;
                for (i in t) $e(this, i, t[i]);
                this.hasImportedEvents = !0;
            }
        },
        setState: function(i, s) {
            var n = this.plotX, o = this.plotY, r = this.series, a = r.options.states, h = ii[r.type].marker && r.options.marker, l = h && !h.enabled, c = h && h.states[i], d = c && c.enabled === !1, p = r.stateMarkerGraphic, u = this.marker || {}, f = r.chart, g = r.halo, m, i = i || "";
            m = this.pointAttr[i] || r.pointAttr[i];
            if (!(i === this.state && !s || this.selected && i !== "select" || a[i] && a[i].enabled === !1 || i && (d || l && c.enabled === !1) || i && u.states && u.states[i] && u.states[i].enabled === !1)) {
                if (this.graphic) h = h && this.graphic.symbolName && m.r, this.graphic.attr(e(m, h ? {
                    x: n - h,
                    y: o - h,
                    width: 2 * h,
                    height: 2 * h
                } : {})), p && p.hide(); else {
                    if (i && c) if (h = c.radius, u = u.symbol || r.symbol, p && p.currentSymbol !== u && (p = p.destroy()), 
                    p) p[s ? "animate" : "attr"]({
                        x: n - h,
                        y: o - h
                    }); else if (u) r.stateMarkerGraphic = p = f.renderer.symbol(u, n - h, o - h, 2 * h, 2 * h).attr(m).add(r.markerGroup), 
                    p.currentSymbol = u;
                    if (p) p[i && f.isInsidePlot(n, o, f.inverted) ? "show" : "hide"]();
                }
                if ((n = a[i] && a[i].halo) && n.size) {
                    if (!g) r.halo = g = f.renderer.path().add(r.seriesGroup);
                    g.attr(t({
                        fill: ri(this.color || r.color).setOpacity(n.opacity).get()
                    }, n.attributes))[s ? "animate" : "attr"]({
                        d: this.haloPath(n.size)
                    });
                } else g && g.attr({
                    d: []
                });
                this.state = i;
            }
        },
        haloPath: function(t) {
            var e = this.series, i = e.chart, s = e.getPlotBox(), n = i.inverted;
            return i.renderer.symbols.circle(s.translateX + (n ? e.yAxis.len - this.plotY : this.plotX) - t, s.translateY + (n ? e.xAxis.len - this.plotX : this.plotY) - t, t * 2, t * 2);
        }
    });
    t(bi.prototype, {
        onMouseOver: function() {
            var t = this.chart, e = t.hoverSeries;
            if (e && e !== this) e.onMouseOut();
            this.options.events.mouseOver && Je(this, "mouseOver");
            this.setState("hover");
            t.hoverSeries = this;
        },
        onMouseOut: function() {
            var t = this.options, e = this.chart, i = e.tooltip, s = e.hoverPoint;
            if (s) s.onMouseOut();
            this && t.events.mouseOut && Je(this, "mouseOut");
            i && !t.stickyTracking && (!i.shared || this.noSharedTooltip) && i.hide();
            this.setState();
            e.hoverSeries = null;
        },
        setState: function(t) {
            var e = this.options, i = this.graph, s = this.graphNeg, n = e.states, e = e.lineWidth, t = t || "";
            if (this.state !== t) this.state = t, n[t] && n[t].enabled === !1 || (t && (e = n[t].lineWidth || e + (n[t].lineWidthPlus || 0)), 
            i && !i.dashstyle && (t = {
                "stroke-width": e
            }, i.attr(t), s && s.attr(t)));
        },
        setVisible: function(t, e) {
            var i = this, s = i.chart, n = i.legendItem, o, r = s.options.chart.ignoreHiddenSeries, a = i.visible;
            o = (i.visible = t = i.userOptions.visible = t === H ? !a : t) ? "show" : "hide";
            _e([ "group", "dataLabelsGroup", "markerGroup", "tracker" ], function(t) {
                if (i[t]) i[t][o]();
            });
            if (s.hoverSeries === i) i.onMouseOut();
            n && s.legend.colorizeItem(i, t);
            i.isDirty = !0;
            i.options.stacking && _e(s.series, function(t) {
                if (t.options.stacking && t.visible) t.isDirty = !0;
            });
            _e(i.linkedSeries, function(e) {
                e.setVisible(t, !1);
            });
            if (r) s.isDirtyBox = !0;
            e !== !1 && s.redraw();
            Je(i, o);
        },
        setTooltipPoints: function(t) {
            var e = [], i, s, n = this.xAxis, o = n && n.getExtremes(), r = n ? n.tooltipLen || n.len : this.chart.plotSizeX, a, h, l = [];
            if (!(this.options.enableMouseTracking === !1 || this.singularTooltips)) {
                if (t) this.tooltipPoints = null;
                _e(this.segments || this.points, function(t) {
                    e = e.concat(t);
                });
                n && n.reversed && (e = e.reverse());
                this.orderTooltipPoints && this.orderTooltipPoints(e);
                t = e.length;
                for (h = 0; h < t; h++) if (n = e[h], i = n.x, i >= o.min && i <= o.max) {
                    a = e[h + 1];
                    i = s === H ? 0 : s + 1;
                    for (s = e[h + 1] ? j(F(0, Y((n.clientX + (a ? a.wrappedClientX || a.clientX : r)) / 2)), r) : r; i >= 0 && i <= s; ) l[i++] = n;
                }
                this.tooltipPoints = l;
            }
        },
        show: function() {
            this.setVisible(!0);
        },
        hide: function() {
            this.setVisible(!1);
        },
        select: function(t) {
            this.selected = t = t === H ? !this.selected : t;
            if (this.checkbox) this.checkbox.checked = t;
            Je(this, t ? "select" : "unselect");
        },
        drawTracker: Ye.drawTrackerGraph
    });
    t(We, {
        Axis: O,
        Chart: z,
        Color: ri,
        Point: xi,
        Tick: B,
        Renderer: ae,
        Series: bi,
        SVGElement: D,
        SVGRenderer: ai,
        arrayMin: T,
        arrayMax: P,
        charts: xe,
        dateFormat: ue,
        format: b,
        pathAnim: ge,
        getOptions: function() {
            return pe;
        },
        hasBidiBug: oe,
        isTouchDevice: ie,
        numberFormat: y,
        seriesTypes: Ge,
        setOptions: function(t) {
            pe = e(!0, pe, t);
            I();
            return pe;
        },
        addEvent: $e,
        removeEvent: qe,
        createElement: g,
        discardElement: L,
        css: f,
        each: _e,
        extend: t,
        map: Ke,
        merge: e,
        pick: u,
        splat: p,
        extendClass: m,
        pInt: i,
        wrap: x,
        svg: ne,
        canvas: re,
        vml: !ne && !re,
        product: "Highcharts",
        version: "4.0.4"
    });
})();