(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [345],
  {
    2699: (t, e, i) => {
      'use strict';
      i.d(e, { Z: () => s });
      let s = (0, i(8030).Z)('Moon', [
        ['path', { d: 'M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z', key: 'a7tn18' }],
      ]);
    },
    8296: (t, e, i) => {
      'use strict';
      i.d(e, { Z: () => s });
      let s = (0, i(8030).Z)('Sun', [
        ['circle', { cx: '12', cy: '12', r: '4', key: '4exip2' }],
        ['path', { d: 'M12 2v2', key: 'tus03m' }],
        ['path', { d: 'M12 20v2', key: '1lh1kg' }],
        ['path', { d: 'm4.93 4.93 1.41 1.41', key: '149t6j' }],
        ['path', { d: 'm17.66 17.66 1.41 1.41', key: 'ptbguv' }],
        ['path', { d: 'M2 12h2', key: '1t8f8n' }],
        ['path', { d: 'M20 12h2', key: '1q8mjw' }],
        ['path', { d: 'm6.34 17.66-1.41 1.41', key: '1m8zz5' }],
        ['path', { d: 'm19.07 4.93-1.41 1.41', key: '1shlcs' }],
      ]);
    },
    8385: t => {
      t.exports = {
        style: { fontFamily: "'Inter', 'Inter Fallback'", fontStyle: 'normal' },
        className: '__className_d65c78',
      };
    },
    9591: (t, e, i) => {
      'use strict';
      let s;
      function n(t) {
        return null !== t && 'object' == typeof t && 'function' == typeof t.start;
      }
      i.d(e, { E: () => rn });
      let r = t => Array.isArray(t);
      function o(t, e) {
        if (!Array.isArray(e)) return !1;
        let i = e.length;
        if (i !== t.length) return !1;
        for (let s = 0; s < i; s++) if (e[s] !== t[s]) return !1;
        return !0;
      }
      function a(t) {
        return 'string' == typeof t || Array.isArray(t);
      }
      function l(t, e, i, s) {
        if (
          'function' == typeof e ||
          ('string' == typeof e && (e = t.variants && t.variants[e]), 'function' == typeof e)
        ) {
          let [n, r] = (function (t) {
            let e = [{}, {}];
            return (
              null == t ||
                t.values.forEach((t, i) => {
                  (e[0][i] = t.get()), (e[1][i] = t.getVelocity());
                }),
              e
            );
          })(s);
          e = e(void 0 !== i ? i : t.custom, n, r);
        }
        return e;
      }
      function h(t, e, i) {
        let s = t.getProps();
        return l(s, e, void 0 !== i ? i : s.custom, t);
      }
      let u = [
          'animate',
          'whileInView',
          'whileFocus',
          'whileHover',
          'whileTap',
          'whileDrag',
          'exit',
        ],
        d = ['initial', ...u],
        c = [
          'transformPerspective',
          'x',
          'y',
          'z',
          'translateX',
          'translateY',
          'translateZ',
          'scale',
          'scaleX',
          'scaleY',
          'rotate',
          'rotateX',
          'rotateY',
          'rotateZ',
          'skew',
          'skewX',
          'skewY',
        ],
        p = new Set(c),
        m = t => 1e3 * t,
        f = t => t / 1e3,
        v = { type: 'spring', stiffness: 500, damping: 25, restSpeed: 10 },
        g = t => ({
          type: 'spring',
          stiffness: 550,
          damping: 0 === t ? 2 * Math.sqrt(550) : 30,
          restSpeed: 10,
        }),
        y = { type: 'keyframes', duration: 0.8 },
        x = { type: 'keyframes', ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
        P = (t, { keyframes: e }) =>
          e.length > 2 ? y : p.has(t) ? (t.startsWith('scale') ? g(e[1]) : v) : x;
      function w(t, e) {
        return t ? t[e] || t.default || t : void 0;
      }
      let T = { skipAnimations: !1, useManualTiming: !1 },
        b = { current: !1 },
        S = t => null !== t;
      function A(t, { repeat: e, repeatType: i = 'loop' }, s) {
        let n = t.filter(S),
          r = e && 'loop' !== i && e % 2 == 1 ? 0 : n.length - 1;
        return r && void 0 !== s ? s : n[r];
      }
      let V = t => t,
        M = ['read', 'resolveKeyframes', 'update', 'preRender', 'render', 'postRender'];
      function E(t, e) {
        let i = !1,
          s = !0,
          n = { delta: 0, timestamp: 0, isProcessing: !1 },
          r = () => (i = !0),
          o = M.reduce(
            (t, e) => (
              (t[e] = (function (t) {
                let e = new Set(),
                  i = new Set(),
                  s = !1,
                  n = !1,
                  r = new WeakSet(),
                  o = { delta: 0, timestamp: 0, isProcessing: !1 };
                function a(e) {
                  r.has(e) && (l.schedule(e), t()), e(o);
                }
                let l = {
                  schedule: (t, n = !1, o = !1) => {
                    let a = o && s ? e : i;
                    return n && r.add(t), a.has(t) || a.add(t), t;
                  },
                  cancel: t => {
                    i.delete(t), r.delete(t);
                  },
                  process: t => {
                    if (((o = t), s)) {
                      n = !0;
                      return;
                    }
                    (s = !0),
                      ([e, i] = [i, e]),
                      i.clear(),
                      e.forEach(a),
                      (s = !1),
                      n && ((n = !1), l.process(t));
                  },
                };
                return l;
              })(r)),
              t
            ),
            {}
          ),
          { read: a, resolveKeyframes: l, update: h, preRender: u, render: d, postRender: c } = o,
          p = () => {
            let r = T.useManualTiming ? n.timestamp : performance.now();
            (i = !1),
              (n.delta = s ? 1e3 / 60 : Math.max(Math.min(r - n.timestamp, 40), 1)),
              (n.timestamp = r),
              (n.isProcessing = !0),
              a.process(n),
              l.process(n),
              h.process(n),
              u.process(n),
              d.process(n),
              c.process(n),
              (n.isProcessing = !1),
              i && e && ((s = !1), t(p));
          },
          m = () => {
            (i = !0), (s = !0), n.isProcessing || t(p);
          };
        return {
          schedule: M.reduce((t, e) => {
            let s = o[e];
            return (t[e] = (t, e = !1, n = !1) => (i || m(), s.schedule(t, e, n))), t;
          }, {}),
          cancel: t => {
            for (let e = 0; e < M.length; e++) o[M[e]].cancel(t);
          },
          state: n,
          steps: o,
        };
      }
      let {
          schedule: C,
          cancel: k,
          state: R,
          steps: D,
        } = E('undefined' != typeof requestAnimationFrame ? requestAnimationFrame : V, !0),
        L = (t, e, i) => (((1 - 3 * i + 3 * e) * t + (3 * i - 6 * e)) * t + 3 * e) * t;
      function j(t, e, i, s) {
        if (t === e && i === s) return V;
        let n = e =>
          (function (t, e, i, s, n) {
            let r, o;
            let a = 0;
            do (r = L((o = e + (i - e) / 2), s, n) - t) > 0 ? (i = o) : (e = o);
            while (Math.abs(r) > 1e-7 && ++a < 12);
            return o;
          })(e, 0, 1, t, i);
        return t => (0 === t || 1 === t ? t : L(n(t), e, s));
      }
      let F = t => e => (e <= 0.5 ? t(2 * e) / 2 : (2 - t(2 * (1 - e))) / 2),
        B = t => e => 1 - t(1 - e),
        O = j(0.33, 1.53, 0.69, 0.99),
        I = B(O),
        U = F(I),
        $ = t => ((t *= 2) < 1 ? 0.5 * I(t) : 0.5 * (2 - Math.pow(2, -10 * (t - 1)))),
        N = t => 1 - Math.sin(Math.acos(t)),
        W = B(N),
        z = F(N),
        H = t => /^0[^.\s]+$/u.test(t),
        Y = t => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t),
        K = t => e => 'string' == typeof e && e.startsWith(t),
        X = K('--'),
        G = K('var(--'),
        q = t => !!G(t) && _.test(t.split('/*')[0].trim()),
        _ = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,
        Z = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u,
        J = (t, e, i) => (i > e ? e : i < t ? t : i),
        Q = { test: t => 'number' == typeof t, parse: parseFloat, transform: t => t },
        tt = { ...Q, transform: t => J(0, 1, t) },
        te = { ...Q, default: 1 },
        ti = t => ({
          test: e => 'string' == typeof e && e.endsWith(t) && 1 === e.split(' ').length,
          parse: parseFloat,
          transform: e => `${e}${t}`,
        }),
        ts = ti('deg'),
        tn = ti('%'),
        tr = ti('px'),
        to = ti('vh'),
        ta = ti('vw'),
        tl = { ...tn, parse: t => tn.parse(t) / 100, transform: t => tn.transform(100 * t) },
        th = new Set([
          'width',
          'height',
          'top',
          'left',
          'right',
          'bottom',
          'x',
          'y',
          'translateX',
          'translateY',
        ]),
        tu = t => t === Q || t === tr,
        td = (t, e) => parseFloat(t.split(', ')[e]),
        tc =
          (t, e) =>
          (i, { transform: s }) => {
            if ('none' === s || !s) return 0;
            let n = s.match(/^matrix3d\((.+)\)$/u);
            if (n) return td(n[1], e);
            {
              let e = s.match(/^matrix\((.+)\)$/u);
              return e ? td(e[1], t) : 0;
            }
          },
        tp = new Set(['x', 'y', 'z']),
        tm = c.filter(t => !tp.has(t)),
        tf = {
          width: ({ x: t }, { paddingLeft: e = '0', paddingRight: i = '0' }) =>
            t.max - t.min - parseFloat(e) - parseFloat(i),
          height: ({ y: t }, { paddingTop: e = '0', paddingBottom: i = '0' }) =>
            t.max - t.min - parseFloat(e) - parseFloat(i),
          top: (t, { top: e }) => parseFloat(e),
          left: (t, { left: e }) => parseFloat(e),
          bottom: ({ y: t }, { top: e }) => parseFloat(e) + (t.max - t.min),
          right: ({ x: t }, { left: e }) => parseFloat(e) + (t.max - t.min),
          x: tc(4, 13),
          y: tc(5, 14),
        };
      (tf.translateX = tf.x), (tf.translateY = tf.y);
      let tv = t => e => e.test(t),
        tg = [Q, tr, tn, ts, ta, to, { test: t => 'auto' === t, parse: t => t }],
        ty = t => tg.find(tv(t)),
        tx = new Set(),
        tP = !1,
        tw = !1;
      function tT() {
        if (tw) {
          let t = Array.from(tx).filter(t => t.needsMeasurement),
            e = new Set(t.map(t => t.element)),
            i = new Map();
          e.forEach(t => {
            let e = (function (t) {
              let e = [];
              return (
                tm.forEach(i => {
                  let s = t.getValue(i);
                  void 0 !== s && (e.push([i, s.get()]), s.set(i.startsWith('scale') ? 1 : 0));
                }),
                e
              );
            })(t);
            e.length && (i.set(t, e), t.render());
          }),
            t.forEach(t => t.measureInitialState()),
            e.forEach(t => {
              t.render();
              let e = i.get(t);
              e &&
                e.forEach(([e, i]) => {
                  var s;
                  null === (s = t.getValue(e)) || void 0 === s || s.set(i);
                });
            }),
            t.forEach(t => t.measureEndState()),
            t.forEach(t => {
              void 0 !== t.suspendedScrollY && window.scrollTo(0, t.suspendedScrollY);
            });
        }
        (tw = !1), (tP = !1), tx.forEach(t => t.complete()), tx.clear();
      }
      function tb() {
        tx.forEach(t => {
          t.readKeyframes(), t.needsMeasurement && (tw = !0);
        });
      }
      class tS {
        constructor(t, e, i, s, n, r = !1) {
          (this.isComplete = !1),
            (this.isAsync = !1),
            (this.needsMeasurement = !1),
            (this.isScheduled = !1),
            (this.unresolvedKeyframes = [...t]),
            (this.onComplete = e),
            (this.name = i),
            (this.motionValue = s),
            (this.element = n),
            (this.isAsync = r);
        }
        scheduleResolve() {
          (this.isScheduled = !0),
            this.isAsync
              ? (tx.add(this), tP || ((tP = !0), C.read(tb), C.resolveKeyframes(tT)))
              : (this.readKeyframes(), this.complete());
        }
        readKeyframes() {
          let { unresolvedKeyframes: t, name: e, element: i, motionValue: s } = this;
          for (let n = 0; n < t.length; n++)
            if (null === t[n]) {
              if (0 === n) {
                let n = null == s ? void 0 : s.get(),
                  r = t[t.length - 1];
                if (void 0 !== n) t[0] = n;
                else if (i && e) {
                  let s = i.readValue(e, r);
                  null != s && (t[0] = s);
                }
                void 0 === t[0] && (t[0] = r), s && void 0 === n && s.set(t[0]);
              } else t[n] = t[n - 1];
            }
        }
        setFinalKeyframe() {}
        measureInitialState() {}
        renderEndStyles() {}
        measureEndState() {}
        complete() {
          (this.isComplete = !0),
            this.onComplete(this.unresolvedKeyframes, this.finalKeyframe),
            tx.delete(this);
        }
        cancel() {
          this.isComplete || ((this.isScheduled = !1), tx.delete(this));
        }
        resume() {
          this.isComplete || this.scheduleResolve();
        }
      }
      let tA = t => Math.round(1e5 * t) / 1e5,
        tV = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu,
        tM =
          /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,
        tE = (t, e) => i =>
          !!(
            ('string' == typeof i && tM.test(i) && i.startsWith(t)) ||
            (e && null != i && Object.prototype.hasOwnProperty.call(i, e))
          ),
        tC = (t, e, i) => s => {
          if ('string' != typeof s) return s;
          let [n, r, o, a] = s.match(tV);
          return {
            [t]: parseFloat(n),
            [e]: parseFloat(r),
            [i]: parseFloat(o),
            alpha: void 0 !== a ? parseFloat(a) : 1,
          };
        },
        tk = t => J(0, 255, t),
        tR = { ...Q, transform: t => Math.round(tk(t)) },
        tD = {
          test: tE('rgb', 'red'),
          parse: tC('red', 'green', 'blue'),
          transform: ({ red: t, green: e, blue: i, alpha: s = 1 }) =>
            'rgba(' +
            tR.transform(t) +
            ', ' +
            tR.transform(e) +
            ', ' +
            tR.transform(i) +
            ', ' +
            tA(tt.transform(s)) +
            ')',
        },
        tL = {
          test: tE('#'),
          parse: function (t) {
            let e = '',
              i = '',
              s = '',
              n = '';
            return (
              t.length > 5
                ? ((e = t.substring(1, 3)),
                  (i = t.substring(3, 5)),
                  (s = t.substring(5, 7)),
                  (n = t.substring(7, 9)))
                : ((e = t.substring(1, 2)),
                  (i = t.substring(2, 3)),
                  (s = t.substring(3, 4)),
                  (n = t.substring(4, 5)),
                  (e += e),
                  (i += i),
                  (s += s),
                  (n += n)),
              {
                red: parseInt(e, 16),
                green: parseInt(i, 16),
                blue: parseInt(s, 16),
                alpha: n ? parseInt(n, 16) / 255 : 1,
              }
            );
          },
          transform: tD.transform,
        },
        tj = {
          test: tE('hsl', 'hue'),
          parse: tC('hue', 'saturation', 'lightness'),
          transform: ({ hue: t, saturation: e, lightness: i, alpha: s = 1 }) =>
            'hsla(' +
            Math.round(t) +
            ', ' +
            tn.transform(tA(e)) +
            ', ' +
            tn.transform(tA(i)) +
            ', ' +
            tA(tt.transform(s)) +
            ')',
        },
        tF = {
          test: t => tD.test(t) || tL.test(t) || tj.test(t),
          parse: t => (tD.test(t) ? tD.parse(t) : tj.test(t) ? tj.parse(t) : tL.parse(t)),
          transform: t =>
            'string' == typeof t ? t : t.hasOwnProperty('red') ? tD.transform(t) : tj.transform(t),
        },
        tB =
          /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu,
        tO = 'number',
        tI = 'color',
        tU =
          /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
      function t$(t) {
        let e = t.toString(),
          i = [],
          s = { color: [], number: [], var: [] },
          n = [],
          r = 0,
          o = e
            .replace(
              tU,
              t => (
                tF.test(t)
                  ? (s.color.push(r), n.push(tI), i.push(tF.parse(t)))
                  : t.startsWith('var(')
                    ? (s.var.push(r), n.push('var'), i.push(t))
                    : (s.number.push(r), n.push(tO), i.push(parseFloat(t))),
                ++r,
                '${}'
              )
            )
            .split('${}');
        return { values: i, split: o, indexes: s, types: n };
      }
      function tN(t) {
        return t$(t).values;
      }
      function tW(t) {
        let { split: e, types: i } = t$(t),
          s = e.length;
        return t => {
          let n = '';
          for (let r = 0; r < s; r++)
            if (((n += e[r]), void 0 !== t[r])) {
              let e = i[r];
              e === tO ? (n += tA(t[r])) : e === tI ? (n += tF.transform(t[r])) : (n += t[r]);
            }
          return n;
        };
      }
      let tz = t => ('number' == typeof t ? 0 : t),
        tH = {
          test: function (t) {
            var e, i;
            return (
              isNaN(t) &&
              'string' == typeof t &&
              ((null === (e = t.match(tV)) || void 0 === e ? void 0 : e.length) || 0) +
                ((null === (i = t.match(tB)) || void 0 === i ? void 0 : i.length) || 0) >
                0
            );
          },
          parse: tN,
          createTransformer: tW,
          getAnimatableNone: function (t) {
            let e = tN(t);
            return tW(t)(e.map(tz));
          },
        },
        tY = new Set(['brightness', 'contrast', 'saturate', 'opacity']);
      function tK(t) {
        let [e, i] = t.slice(0, -1).split('(');
        if ('drop-shadow' === e) return t;
        let [s] = i.match(tV) || [];
        if (!s) return t;
        let n = i.replace(s, ''),
          r = tY.has(e) ? 1 : 0;
        return s !== i && (r *= 100), e + '(' + r + n + ')';
      }
      let tX = /\b([a-z-]*)\(.*?\)/gu,
        tG = {
          ...tH,
          getAnimatableNone: t => {
            let e = t.match(tX);
            return e ? e.map(tK).join(' ') : t;
          },
        },
        tq = { ...Q, transform: Math.round },
        t_ = {
          borderWidth: tr,
          borderTopWidth: tr,
          borderRightWidth: tr,
          borderBottomWidth: tr,
          borderLeftWidth: tr,
          borderRadius: tr,
          radius: tr,
          borderTopLeftRadius: tr,
          borderTopRightRadius: tr,
          borderBottomRightRadius: tr,
          borderBottomLeftRadius: tr,
          width: tr,
          maxWidth: tr,
          height: tr,
          maxHeight: tr,
          top: tr,
          right: tr,
          bottom: tr,
          left: tr,
          padding: tr,
          paddingTop: tr,
          paddingRight: tr,
          paddingBottom: tr,
          paddingLeft: tr,
          margin: tr,
          marginTop: tr,
          marginRight: tr,
          marginBottom: tr,
          marginLeft: tr,
          backgroundPositionX: tr,
          backgroundPositionY: tr,
          rotate: ts,
          rotateX: ts,
          rotateY: ts,
          rotateZ: ts,
          scale: te,
          scaleX: te,
          scaleY: te,
          scaleZ: te,
          skew: ts,
          skewX: ts,
          skewY: ts,
          distance: tr,
          translateX: tr,
          translateY: tr,
          translateZ: tr,
          x: tr,
          y: tr,
          z: tr,
          perspective: tr,
          transformPerspective: tr,
          opacity: tt,
          originX: tl,
          originY: tl,
          originZ: tr,
          zIndex: tq,
          size: tr,
          fillOpacity: tt,
          strokeOpacity: tt,
          numOctaves: tq,
        },
        tZ = {
          ...t_,
          color: tF,
          backgroundColor: tF,
          outlineColor: tF,
          fill: tF,
          stroke: tF,
          borderColor: tF,
          borderTopColor: tF,
          borderRightColor: tF,
          borderBottomColor: tF,
          borderLeftColor: tF,
          filter: tG,
          WebkitFilter: tG,
        },
        tJ = t => tZ[t];
      function tQ(t, e) {
        let i = tJ(t);
        return i !== tG && (i = tH), i.getAnimatableNone ? i.getAnimatableNone(e) : void 0;
      }
      let t0 = new Set(['auto', 'none', '0']);
      class t1 extends tS {
        constructor(t, e, i, s, n) {
          super(t, e, i, s, n, !0);
        }
        readKeyframes() {
          let { unresolvedKeyframes: t, element: e, name: i } = this;
          if (!e || !e.current) return;
          super.readKeyframes();
          for (let i = 0; i < t.length; i++) {
            let s = t[i];
            if ('string' == typeof s && q((s = s.trim()))) {
              let n = (function t(e, i, s = 1) {
                V(
                  s <= 4,
                  `Max CSS variable fallback depth detected in property "${e}". This may indicate a circular fallback dependency.`
                );
                let [n, r] = (function (t) {
                  let e = Z.exec(t);
                  if (!e) return [,];
                  let [, i, s, n] = e;
                  return [`--${null != i ? i : s}`, n];
                })(e);
                if (!n) return;
                let o = window.getComputedStyle(i).getPropertyValue(n);
                if (o) {
                  let t = o.trim();
                  return Y(t) ? parseFloat(t) : t;
                }
                return q(r) ? t(r, i, s + 1) : r;
              })(s, e.current);
              void 0 !== n && (t[i] = n), i === t.length - 1 && (this.finalKeyframe = s);
            }
          }
          if ((this.resolveNoneKeyframes(), !th.has(i) || 2 !== t.length)) return;
          let [s, n] = t,
            r = ty(s),
            o = ty(n);
          if (r !== o) {
            if (tu(r) && tu(o))
              for (let e = 0; e < t.length; e++) {
                let i = t[e];
                'string' == typeof i && (t[e] = parseFloat(i));
              }
            else this.needsMeasurement = !0;
          }
        }
        resolveNoneKeyframes() {
          let { unresolvedKeyframes: t, name: e } = this,
            i = [];
          for (let e = 0; e < t.length; e++) {
            var s;
            ('number' == typeof (s = t[e])
              ? 0 === s
              : null === s || 'none' === s || '0' === s || H(s)) && i.push(e);
          }
          i.length &&
            (function (t, e, i) {
              let s,
                n = 0;
              for (; n < t.length && !s; ) {
                let e = t[n];
                'string' == typeof e && !t0.has(e) && t$(e).values.length && (s = t[n]), n++;
              }
              if (s && i) for (let n of e) t[n] = tQ(i, s);
            })(t, i, e);
        }
        measureInitialState() {
          let { element: t, unresolvedKeyframes: e, name: i } = this;
          if (!t || !t.current) return;
          'height' === i && (this.suspendedScrollY = window.pageYOffset),
            (this.measuredOrigin = tf[i](
              t.measureViewportBox(),
              window.getComputedStyle(t.current)
            )),
            (e[0] = this.measuredOrigin);
          let s = e[e.length - 1];
          void 0 !== s && t.getValue(i, s).jump(s, !1);
        }
        measureEndState() {
          var t;
          let { element: e, name: i, unresolvedKeyframes: s } = this;
          if (!e || !e.current) return;
          let n = e.getValue(i);
          n && n.jump(this.measuredOrigin, !1);
          let r = s.length - 1,
            o = s[r];
          (s[r] = tf[i](e.measureViewportBox(), window.getComputedStyle(e.current))),
            null !== o && void 0 === this.finalKeyframe && (this.finalKeyframe = o),
            (null === (t = this.removedTransforms) || void 0 === t ? void 0 : t.length) &&
              this.removedTransforms.forEach(([t, i]) => {
                e.getValue(t).set(i);
              }),
            this.resolveNoneKeyframes();
        }
      }
      function t2(t) {
        return 'function' == typeof t;
      }
      function t5() {
        s = void 0;
      }
      let t3 = {
          now: () => (
            void 0 === s &&
              t3.set(R.isProcessing || T.useManualTiming ? R.timestamp : performance.now()),
            s
          ),
          set: t => {
            (s = t), queueMicrotask(t5);
          },
        },
        t9 = (t, e) =>
          'zIndex' !== e &&
          !!(
            'number' == typeof t ||
            Array.isArray(t) ||
            ('string' == typeof t && (tH.test(t) || '0' === t) && !t.startsWith('url('))
          );
      class t4 {
        constructor({
          autoplay: t = !0,
          delay: e = 0,
          type: i = 'keyframes',
          repeat: s = 0,
          repeatDelay: n = 0,
          repeatType: r = 'loop',
          ...o
        }) {
          (this.isStopped = !1),
            (this.hasAttemptedResolve = !1),
            (this.createdAt = t3.now()),
            (this.options = {
              autoplay: t,
              delay: e,
              type: i,
              repeat: s,
              repeatDelay: n,
              repeatType: r,
              ...o,
            }),
            this.updateFinishedPromise();
        }
        calcStartTime() {
          return this.resolvedAt && this.resolvedAt - this.createdAt > 40
            ? this.resolvedAt
            : this.createdAt;
        }
        get resolved() {
          return this._resolved || this.hasAttemptedResolve || (tb(), tT()), this._resolved;
        }
        onKeyframesResolved(t, e) {
          (this.resolvedAt = t3.now()), (this.hasAttemptedResolve = !0);
          let {
            name: i,
            type: s,
            velocity: n,
            delay: r,
            onComplete: o,
            onUpdate: a,
            isGenerator: l,
          } = this.options;
          if (
            !l &&
            !(function (t, e, i, s) {
              let n = t[0];
              if (null === n) return !1;
              if ('display' === e || 'visibility' === e) return !0;
              let r = t[t.length - 1],
                o = t9(n, e),
                a = t9(r, e);
              return (
                V(
                  o === a,
                  `You are trying to animate ${e} from "${n}" to "${r}". ${n} is not an animatable value - to enable this animation set ${n} to a value animatable to ${r} via the \`style\` property.`
                ),
                !!o &&
                  !!a &&
                  ((function (t) {
                    let e = t[0];
                    if (1 === t.length) return !0;
                    for (let i = 0; i < t.length; i++) if (t[i] !== e) return !0;
                  })(t) ||
                    (('spring' === i || t2(i)) && s))
              );
            })(t, i, s, n)
          ) {
            if (b.current || !r) {
              null == a || a(A(t, this.options, e)),
                null == o || o(),
                this.resolveFinishedPromise();
              return;
            }
            this.options.duration = 0;
          }
          let h = this.initPlayback(t, e);
          !1 !== h &&
            ((this._resolved = { keyframes: t, finalKeyframe: e, ...h }), this.onPostResolved());
        }
        onPostResolved() {}
        then(t, e) {
          return this.currentFinishedPromise.then(t, e);
        }
        updateFinishedPromise() {
          this.currentFinishedPromise = new Promise(t => {
            this.resolveFinishedPromise = t;
          });
        }
      }
      function t6(t, e, i) {
        var s, n;
        let r = Math.max(e - 5, 0);
        return (s = i - t(r)), (n = e - r) ? (1e3 / n) * s : 0;
      }
      function t8(t, e) {
        return t * Math.sqrt(1 - e * e);
      }
      let t7 = ['duration', 'bounce'],
        et = ['stiffness', 'damping', 'mass'];
      function ee(t, e) {
        return e.some(e => void 0 !== t[e]);
      }
      function ei({ keyframes: t, restDelta: e, restSpeed: i, ...s }) {
        let n;
        let r = t[0],
          o = t[t.length - 1],
          a = { done: !1, value: r },
          {
            stiffness: l,
            damping: h,
            mass: u,
            duration: d,
            velocity: c,
            isResolvedFromDuration: p,
          } = (function (t) {
            let e = {
              velocity: 0,
              stiffness: 100,
              damping: 10,
              mass: 1,
              isResolvedFromDuration: !1,
              ...t,
            };
            if (!ee(t, et) && ee(t, t7)) {
              let i = (function ({
                duration: t = 800,
                bounce: e = 0.25,
                velocity: i = 0,
                mass: s = 1,
              }) {
                let n, r;
                V(t <= m(10), 'Spring duration must be 10 seconds or less');
                let o = 1 - e;
                (o = J(0.05, 1, o)),
                  (t = J(0.01, 10, f(t))),
                  o < 1
                    ? ((n = e => {
                        let s = e * o,
                          n = s * t;
                        return 0.001 - ((s - i) / t8(e, o)) * Math.exp(-n);
                      }),
                      (r = e => {
                        let s = e * o * t,
                          r = Math.pow(o, 2) * Math.pow(e, 2) * t,
                          a = Math.exp(-s),
                          l = t8(Math.pow(e, 2), o);
                        return ((s * i + i - r) * a * (-n(e) + 0.001 > 0 ? -1 : 1)) / l;
                      }))
                    : ((n = e => -0.001 + Math.exp(-e * t) * ((e - i) * t + 1)),
                      (r = e => t * t * (i - e) * Math.exp(-e * t)));
                let a = (function (t, e, i) {
                  let s = i;
                  for (let i = 1; i < 12; i++) s -= t(s) / e(s);
                  return s;
                })(n, r, 5 / t);
                if (((t = m(t)), isNaN(a))) return { stiffness: 100, damping: 10, duration: t };
                {
                  let e = Math.pow(a, 2) * s;
                  return { stiffness: e, damping: 2 * o * Math.sqrt(s * e), duration: t };
                }
              })(t);
              (e = { ...e, ...i, mass: 1 }).isResolvedFromDuration = !0;
            }
            return e;
          })({ ...s, velocity: -f(s.velocity || 0) }),
          v = c || 0,
          g = h / (2 * Math.sqrt(l * u)),
          y = o - r,
          x = f(Math.sqrt(l / u)),
          P = 5 > Math.abs(y);
        if ((i || (i = P ? 0.01 : 2), e || (e = P ? 0.005 : 0.5), g < 1)) {
          let t = t8(x, g);
          n = e =>
            o -
            Math.exp(-g * x * e) * (((v + g * x * y) / t) * Math.sin(t * e) + y * Math.cos(t * e));
        } else if (1 === g) n = t => o - Math.exp(-x * t) * (y + (v + x * y) * t);
        else {
          let t = x * Math.sqrt(g * g - 1);
          n = e => {
            let i = Math.exp(-g * x * e),
              s = Math.min(t * e, 300);
            return o - (i * ((v + g * x * y) * Math.sinh(s) + t * y * Math.cosh(s))) / t;
          };
        }
        return {
          calculatedDuration: (p && d) || null,
          next: t => {
            let s = n(t);
            if (p) a.done = t >= d;
            else {
              let r = 0;
              g < 1 && (r = 0 === t ? m(v) : t6(n, t, s));
              let l = Math.abs(r) <= i,
                h = Math.abs(o - s) <= e;
              a.done = l && h;
            }
            return (a.value = a.done ? o : s), a;
          },
        };
      }
      function es({
        keyframes: t,
        velocity: e = 0,
        power: i = 0.8,
        timeConstant: s = 325,
        bounceDamping: n = 10,
        bounceStiffness: r = 500,
        modifyTarget: o,
        min: a,
        max: l,
        restDelta: h = 0.5,
        restSpeed: u,
      }) {
        let d, c;
        let p = t[0],
          m = { done: !1, value: p },
          f = t => (void 0 !== a && t < a) || (void 0 !== l && t > l),
          v = t =>
            void 0 === a ? l : void 0 === l ? a : Math.abs(a - t) < Math.abs(l - t) ? a : l,
          g = i * e,
          y = p + g,
          x = void 0 === o ? y : o(y);
        x !== y && (g = x - p);
        let P = t => -g * Math.exp(-t / s),
          w = t => x + P(t),
          T = t => {
            let e = P(t),
              i = w(t);
            (m.done = Math.abs(e) <= h), (m.value = m.done ? x : i);
          },
          b = t => {
            f(m.value) &&
              ((d = t),
              (c = ei({
                keyframes: [m.value, v(m.value)],
                velocity: t6(w, t, m.value),
                damping: n,
                stiffness: r,
                restDelta: h,
                restSpeed: u,
              })));
          };
        return (
          b(0),
          {
            calculatedDuration: null,
            next: t => {
              let e = !1;
              return (c || void 0 !== d || ((e = !0), T(t), b(t)), void 0 !== d && t >= d)
                ? c.next(t - d)
                : (e || T(t), m);
            },
          }
        );
      }
      let en = j(0.42, 0, 1, 1),
        er = j(0, 0, 0.58, 1),
        eo = j(0.42, 0, 0.58, 1),
        ea = t => Array.isArray(t) && 'number' != typeof t[0],
        el = t => Array.isArray(t) && 'number' == typeof t[0],
        eh = {
          linear: V,
          easeIn: en,
          easeInOut: eo,
          easeOut: er,
          circIn: N,
          circInOut: z,
          circOut: W,
          backIn: I,
          backInOut: U,
          backOut: O,
          anticipate: $,
        },
        eu = t => {
          if (el(t)) {
            V(4 === t.length, 'Cubic bezier arrays must contain four numerical values.');
            let [e, i, s, n] = t;
            return j(e, i, s, n);
          }
          return 'string' == typeof t
            ? (V(void 0 !== eh[t], `Invalid easing type '${t}'`), eh[t])
            : t;
        },
        ed = (t, e) => i => e(t(i)),
        ec = (...t) => t.reduce(ed),
        ep = (t, e, i) => {
          let s = e - t;
          return 0 === s ? 1 : (i - t) / s;
        },
        em = (t, e, i) => t + (e - t) * i;
      function ef(t, e, i) {
        return (i < 0 && (i += 1), i > 1 && (i -= 1), i < 1 / 6)
          ? t + (e - t) * 6 * i
          : i < 0.5
            ? e
            : i < 2 / 3
              ? t + (e - t) * (2 / 3 - i) * 6
              : t;
      }
      function ev(t, e) {
        return i => (i > 0 ? e : t);
      }
      let eg = (t, e, i) => {
          let s = t * t,
            n = i * (e * e - s) + s;
          return n < 0 ? 0 : Math.sqrt(n);
        },
        ey = [tL, tD, tj],
        ex = t => ey.find(e => e.test(t));
      function eP(t) {
        let e = ex(t);
        if (
          (V(!!e, `'${t}' is not an animatable color. Use the equivalent color code instead.`), !e)
        )
          return !1;
        let i = e.parse(t);
        return (
          e === tj &&
            (i = (function ({ hue: t, saturation: e, lightness: i, alpha: s }) {
              (t /= 360), (i /= 100);
              let n = 0,
                r = 0,
                o = 0;
              if ((e /= 100)) {
                let s = i < 0.5 ? i * (1 + e) : i + e - i * e,
                  a = 2 * i - s;
                (n = ef(a, s, t + 1 / 3)), (r = ef(a, s, t)), (o = ef(a, s, t - 1 / 3));
              } else n = r = o = i;
              return {
                red: Math.round(255 * n),
                green: Math.round(255 * r),
                blue: Math.round(255 * o),
                alpha: s,
              };
            })(i)),
          i
        );
      }
      let ew = (t, e) => {
          let i = eP(t),
            s = eP(e);
          if (!i || !s) return ev(t, e);
          let n = { ...i };
          return t => (
            (n.red = eg(i.red, s.red, t)),
            (n.green = eg(i.green, s.green, t)),
            (n.blue = eg(i.blue, s.blue, t)),
            (n.alpha = em(i.alpha, s.alpha, t)),
            tD.transform(n)
          );
        },
        eT = new Set(['none', 'hidden']);
      function eb(t, e) {
        return i => em(t, e, i);
      }
      function eS(t) {
        return 'number' == typeof t
          ? eb
          : 'string' == typeof t
            ? q(t)
              ? ev
              : tF.test(t)
                ? ew
                : eM
            : Array.isArray(t)
              ? eA
              : 'object' == typeof t
                ? tF.test(t)
                  ? ew
                  : eV
                : ev;
      }
      function eA(t, e) {
        let i = [...t],
          s = i.length,
          n = t.map((t, i) => eS(t)(t, e[i]));
        return t => {
          for (let e = 0; e < s; e++) i[e] = n[e](t);
          return i;
        };
      }
      function eV(t, e) {
        let i = { ...t, ...e },
          s = {};
        for (let n in i) void 0 !== t[n] && void 0 !== e[n] && (s[n] = eS(t[n])(t[n], e[n]));
        return t => {
          for (let e in s) i[e] = s[e](t);
          return i;
        };
      }
      let eM = (t, e) => {
        let i = tH.createTransformer(e),
          s = t$(t),
          n = t$(e);
        return s.indexes.var.length === n.indexes.var.length &&
          s.indexes.color.length === n.indexes.color.length &&
          s.indexes.number.length >= n.indexes.number.length
          ? (eT.has(t) && !n.values.length) || (eT.has(e) && !s.values.length)
            ? (function (t, e) {
                return eT.has(t) ? i => (i <= 0 ? t : e) : i => (i >= 1 ? e : t);
              })(t, e)
            : ec(
                eA(
                  (function (t, e) {
                    var i;
                    let s = [],
                      n = { color: 0, var: 0, number: 0 };
                    for (let r = 0; r < e.values.length; r++) {
                      let o = e.types[r],
                        a = t.indexes[o][n[o]],
                        l = null !== (i = t.values[a]) && void 0 !== i ? i : 0;
                      (s[r] = l), n[o]++;
                    }
                    return s;
                  })(s, n),
                  n.values
                ),
                i
              )
          : (V(
              !0,
              `Complex values '${t}' and '${e}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`
            ),
            ev(t, e));
      };
      function eE(t, e, i) {
        return 'number' == typeof t && 'number' == typeof e && 'number' == typeof i
          ? em(t, e, i)
          : eS(t)(t, e);
      }
      function eC({ duration: t = 300, keyframes: e, times: i, ease: s = 'easeInOut' }) {
        let n = ea(s) ? s.map(eu) : eu(s),
          r = { done: !1, value: e[0] },
          o = (function (t, e, { clamp: i = !0, ease: s, mixer: n } = {}) {
            let r = t.length;
            if (
              (V(r === e.length, 'Both input and output ranges must be the same length'), 1 === r)
            )
              return () => e[0];
            if (2 === r && t[0] === t[1]) return () => e[1];
            t[0] > t[r - 1] && ((t = [...t].reverse()), (e = [...e].reverse()));
            let o = (function (t, e, i) {
                let s = [],
                  n = i || eE,
                  r = t.length - 1;
                for (let i = 0; i < r; i++) {
                  let r = n(t[i], t[i + 1]);
                  e && (r = ec(Array.isArray(e) ? e[i] || V : e, r)), s.push(r);
                }
                return s;
              })(e, s, n),
              a = o.length,
              l = e => {
                let i = 0;
                if (a > 1) for (; i < t.length - 2 && !(e < t[i + 1]); i++);
                let s = ep(t[i], t[i + 1], e);
                return o[i](s);
              };
            return i ? e => l(J(t[0], t[r - 1], e)) : l;
          })(
            (i && i.length === e.length
              ? i
              : (function (t) {
                  let e = [0];
                  return (
                    (function (t, e) {
                      let i = t[t.length - 1];
                      for (let s = 1; s <= e; s++) {
                        let n = ep(0, e, s);
                        t.push(em(i, 1, n));
                      }
                    })(e, t.length - 1),
                    e
                  );
                })(e)
            ).map(e => e * t),
            e,
            { ease: Array.isArray(n) ? n : e.map(() => n || eo).splice(0, e.length - 1) }
          );
        return { calculatedDuration: t, next: e => ((r.value = o(e)), (r.done = e >= t), r) };
      }
      let ek = t => {
          let e = ({ timestamp: e }) => t(e);
          return {
            start: () => C.update(e, !0),
            stop: () => k(e),
            now: () => (R.isProcessing ? R.timestamp : t3.now()),
          };
        },
        eR = { decay: es, inertia: es, tween: eC, keyframes: eC, spring: ei },
        eD = t => t / 100;
      class eL extends t4 {
        constructor(t) {
          super(t),
            (this.holdTime = null),
            (this.cancelTime = null),
            (this.currentTime = 0),
            (this.playbackSpeed = 1),
            (this.pendingPlayState = 'running'),
            (this.startTime = null),
            (this.state = 'idle'),
            (this.stop = () => {
              if ((this.resolver.cancel(), (this.isStopped = !0), 'idle' === this.state)) return;
              this.teardown();
              let { onStop: t } = this.options;
              t && t();
            });
          let { name: e, motionValue: i, element: s, keyframes: n } = this.options,
            r = (null == s ? void 0 : s.KeyframeResolver) || tS;
          (this.resolver = new r(n, (t, e) => this.onKeyframesResolved(t, e), e, i, s)),
            this.resolver.scheduleResolve();
        }
        initPlayback(t) {
          let e, i;
          let {
              type: s = 'keyframes',
              repeat: n = 0,
              repeatDelay: r = 0,
              repeatType: o,
              velocity: a = 0,
            } = this.options,
            l = t2(s) ? s : eR[s] || eC;
          l !== eC && 'number' != typeof t[0] && ((e = ec(eD, eE(t[0], t[1]))), (t = [0, 100]));
          let h = l({ ...this.options, keyframes: t });
          'mirror' === o && (i = l({ ...this.options, keyframes: [...t].reverse(), velocity: -a })),
            null === h.calculatedDuration &&
              (h.calculatedDuration = (function (t) {
                let e = 0,
                  i = t.next(e);
                for (; !i.done && e < 2e4; ) (e += 50), (i = t.next(e));
                return e >= 2e4 ? 1 / 0 : e;
              })(h));
          let { calculatedDuration: u } = h,
            d = u + r;
          return {
            generator: h,
            mirroredGenerator: i,
            mapPercentToKeyframes: e,
            calculatedDuration: u,
            resolvedDuration: d,
            totalDuration: d * (n + 1) - r,
          };
        }
        onPostResolved() {
          let { autoplay: t = !0 } = this.options;
          this.play(),
            'paused' !== this.pendingPlayState && t
              ? (this.state = this.pendingPlayState)
              : this.pause();
        }
        tick(t, e = !1) {
          let { resolved: i } = this;
          if (!i) {
            let { keyframes: t } = this.options;
            return { done: !0, value: t[t.length - 1] };
          }
          let {
            finalKeyframe: s,
            generator: n,
            mirroredGenerator: r,
            mapPercentToKeyframes: o,
            keyframes: a,
            calculatedDuration: l,
            totalDuration: h,
            resolvedDuration: u,
          } = i;
          if (null === this.startTime) return n.next(0);
          let { delay: d, repeat: c, repeatType: p, repeatDelay: m, onUpdate: f } = this.options;
          this.speed > 0
            ? (this.startTime = Math.min(this.startTime, t))
            : this.speed < 0 && (this.startTime = Math.min(t - h / this.speed, this.startTime)),
            e
              ? (this.currentTime = t)
              : null !== this.holdTime
                ? (this.currentTime = this.holdTime)
                : (this.currentTime = Math.round(t - this.startTime) * this.speed);
          let v = this.currentTime - d * (this.speed >= 0 ? 1 : -1),
            g = this.speed >= 0 ? v < 0 : v > h;
          (this.currentTime = Math.max(v, 0)),
            'finished' === this.state && null === this.holdTime && (this.currentTime = h);
          let y = this.currentTime,
            x = n;
          if (c) {
            let t = Math.min(this.currentTime, h) / u,
              e = Math.floor(t),
              i = t % 1;
            !i && t >= 1 && (i = 1),
              1 === i && e--,
              (e = Math.min(e, c + 1)) % 2 &&
                ('reverse' === p ? ((i = 1 - i), m && (i -= m / u)) : 'mirror' === p && (x = r)),
              (y = J(0, 1, i) * u);
          }
          let P = g ? { done: !1, value: a[0] } : x.next(y);
          o && (P.value = o(P.value));
          let { done: w } = P;
          g || null === l || (w = this.speed >= 0 ? this.currentTime >= h : this.currentTime <= 0);
          let T =
            null === this.holdTime &&
            ('finished' === this.state || ('running' === this.state && w));
          return (
            T && void 0 !== s && (P.value = A(a, this.options, s)),
            f && f(P.value),
            T && this.finish(),
            P
          );
        }
        get duration() {
          let { resolved: t } = this;
          return t ? f(t.calculatedDuration) : 0;
        }
        get time() {
          return f(this.currentTime);
        }
        set time(t) {
          (t = m(t)),
            (this.currentTime = t),
            null !== this.holdTime || 0 === this.speed
              ? (this.holdTime = t)
              : this.driver && (this.startTime = this.driver.now() - t / this.speed);
        }
        get speed() {
          return this.playbackSpeed;
        }
        set speed(t) {
          let e = this.playbackSpeed !== t;
          (this.playbackSpeed = t), e && (this.time = f(this.currentTime));
        }
        play() {
          if ((this.resolver.isScheduled || this.resolver.resume(), !this._resolved)) {
            this.pendingPlayState = 'running';
            return;
          }
          if (this.isStopped) return;
          let { driver: t = ek, onPlay: e, startTime: i } = this.options;
          this.driver || (this.driver = t(t => this.tick(t))), e && e();
          let s = this.driver.now();
          null !== this.holdTime
            ? (this.startTime = s - this.holdTime)
            : this.startTime
              ? 'finished' === this.state && (this.startTime = s)
              : (this.startTime = null != i ? i : this.calcStartTime()),
            'finished' === this.state && this.updateFinishedPromise(),
            (this.cancelTime = this.startTime),
            (this.holdTime = null),
            (this.state = 'running'),
            this.driver.start();
        }
        pause() {
          var t;
          if (!this._resolved) {
            this.pendingPlayState = 'paused';
            return;
          }
          (this.state = 'paused'),
            (this.holdTime = null !== (t = this.currentTime) && void 0 !== t ? t : 0);
        }
        complete() {
          'running' !== this.state && this.play(),
            (this.pendingPlayState = this.state = 'finished'),
            (this.holdTime = null);
        }
        finish() {
          this.teardown(), (this.state = 'finished');
          let { onComplete: t } = this.options;
          t && t();
        }
        cancel() {
          null !== this.cancelTime && this.tick(this.cancelTime),
            this.teardown(),
            this.updateFinishedPromise();
        }
        teardown() {
          (this.state = 'idle'),
            this.stopDriver(),
            this.resolveFinishedPromise(),
            this.updateFinishedPromise(),
            (this.startTime = this.cancelTime = null),
            this.resolver.cancel();
        }
        stopDriver() {
          this.driver && (this.driver.stop(), (this.driver = void 0));
        }
        sample(t) {
          return (this.startTime = 0), this.tick(t, !0);
        }
      }
      let ej = new Set(['opacity', 'clipPath', 'filter', 'transform']),
        eF = (t, e) => {
          let i = '',
            s = Math.max(Math.round(e / 10), 2);
          for (let e = 0; e < s; e++) i += t(ep(0, s - 1, e)) + ', ';
          return `linear(${i.substring(0, i.length - 2)})`;
        };
      function eB(t) {
        let e;
        return () => (void 0 === e && (e = t()), e);
      }
      let eO = { linearEasing: void 0 },
        eI = (function (t, e) {
          let i = eB(t);
          return () => {
            var t;
            return null !== (t = eO[e]) && void 0 !== t ? t : i();
          };
        })(() => {
          try {
            document.createElement('div').animate({ opacity: 0 }, { easing: 'linear(0, 1)' });
          } catch (t) {
            return !1;
          }
          return !0;
        }, 'linearEasing'),
        eU = ([t, e, i, s]) => `cubic-bezier(${t}, ${e}, ${i}, ${s})`,
        e$ = {
          linear: 'linear',
          ease: 'ease',
          easeIn: 'ease-in',
          easeOut: 'ease-out',
          easeInOut: 'ease-in-out',
          circIn: eU([0, 0.65, 0.55, 1]),
          circOut: eU([0.55, 0, 1, 0.45]),
          backIn: eU([0.31, 0.01, 0.66, -0.59]),
          backOut: eU([0.33, 1.53, 0.69, 0.99]),
        };
      function eN(t, e) {
        (t.timeline = e), (t.onfinish = null);
      }
      let eW = eB(() => Object.hasOwnProperty.call(Element.prototype, 'animate')),
        ez = { anticipate: $, backInOut: U, circInOut: z };
      class eH extends t4 {
        constructor(t) {
          super(t);
          let { name: e, motionValue: i, element: s, keyframes: n } = this.options;
          (this.resolver = new t1(n, (t, e) => this.onKeyframesResolved(t, e), e, i, s)),
            this.resolver.scheduleResolve();
        }
        initPlayback(t, e) {
          var i, s;
          let {
            duration: n = 300,
            times: r,
            ease: o,
            type: a,
            motionValue: l,
            name: h,
            startTime: u,
          } = this.options;
          if (!(null === (i = l.owner) || void 0 === i ? void 0 : i.current)) return !1;
          if (
            ('string' == typeof o && eI() && o in ez && (o = ez[o]),
            t2((s = this.options).type) ||
              'spring' === s.type ||
              !(function t(e) {
                return !!(
                  ('function' == typeof e && eI()) ||
                  !e ||
                  ('string' == typeof e && (e in e$ || eI())) ||
                  el(e) ||
                  (Array.isArray(e) && e.every(t))
                );
              })(s.ease))
          ) {
            let { onComplete: e, onUpdate: i, motionValue: s, element: l, ...h } = this.options,
              u = (function (t, e) {
                let i = new eL({ ...e, keyframes: t, repeat: 0, delay: 0, isGenerator: !0 }),
                  s = { done: !1, value: t[0] },
                  n = [],
                  r = 0;
                for (; !s.done && r < 2e4; ) n.push((s = i.sample(r)).value), (r += 10);
                return { times: void 0, keyframes: n, duration: r - 10, ease: 'linear' };
              })(t, h);
            1 === (t = u.keyframes).length && (t[1] = t[0]),
              (n = u.duration),
              (r = u.times),
              (o = u.ease),
              (a = 'keyframes');
          }
          let d = (function (
            t,
            e,
            i,
            {
              delay: s = 0,
              duration: n = 300,
              repeat: r = 0,
              repeatType: o = 'loop',
              ease: a,
              times: l,
            } = {}
          ) {
            let h = { [e]: i };
            l && (h.offset = l);
            let u = (function t(e, i) {
              if (e)
                return 'function' == typeof e && eI()
                  ? eF(e, i)
                  : el(e)
                    ? eU(e)
                    : Array.isArray(e)
                      ? e.map(e => t(e, i) || e$.easeOut)
                      : e$[e];
            })(a, n);
            return (
              Array.isArray(u) && (h.easing = u),
              t.animate(h, {
                delay: s,
                duration: n,
                easing: Array.isArray(u) ? 'linear' : u,
                fill: 'both',
                iterations: r + 1,
                direction: 'reverse' === o ? 'alternate' : 'normal',
              })
            );
          })(l.owner.current, h, t, { ...this.options, duration: n, times: r, ease: o });
          return (
            (d.startTime = null != u ? u : this.calcStartTime()),
            this.pendingTimeline
              ? (eN(d, this.pendingTimeline), (this.pendingTimeline = void 0))
              : (d.onfinish = () => {
                  let { onComplete: i } = this.options;
                  l.set(A(t, this.options, e)),
                    i && i(),
                    this.cancel(),
                    this.resolveFinishedPromise();
                }),
            { animation: d, duration: n, times: r, type: a, ease: o, keyframes: t }
          );
        }
        get duration() {
          let { resolved: t } = this;
          if (!t) return 0;
          let { duration: e } = t;
          return f(e);
        }
        get time() {
          let { resolved: t } = this;
          if (!t) return 0;
          let { animation: e } = t;
          return f(e.currentTime || 0);
        }
        set time(t) {
          let { resolved: e } = this;
          if (!e) return;
          let { animation: i } = e;
          i.currentTime = m(t);
        }
        get speed() {
          let { resolved: t } = this;
          if (!t) return 1;
          let { animation: e } = t;
          return e.playbackRate;
        }
        set speed(t) {
          let { resolved: e } = this;
          if (!e) return;
          let { animation: i } = e;
          i.playbackRate = t;
        }
        get state() {
          let { resolved: t } = this;
          if (!t) return 'idle';
          let { animation: e } = t;
          return e.playState;
        }
        get startTime() {
          let { resolved: t } = this;
          if (!t) return null;
          let { animation: e } = t;
          return e.startTime;
        }
        attachTimeline(t) {
          if (this._resolved) {
            let { resolved: e } = this;
            if (!e) return V;
            let { animation: i } = e;
            eN(i, t);
          } else this.pendingTimeline = t;
          return V;
        }
        play() {
          if (this.isStopped) return;
          let { resolved: t } = this;
          if (!t) return;
          let { animation: e } = t;
          'finished' === e.playState && this.updateFinishedPromise(), e.play();
        }
        pause() {
          let { resolved: t } = this;
          if (!t) return;
          let { animation: e } = t;
          e.pause();
        }
        stop() {
          if ((this.resolver.cancel(), (this.isStopped = !0), 'idle' === this.state)) return;
          this.resolveFinishedPromise(), this.updateFinishedPromise();
          let { resolved: t } = this;
          if (!t) return;
          let { animation: e, keyframes: i, duration: s, type: n, ease: r, times: o } = t;
          if ('idle' === e.playState || 'finished' === e.playState) return;
          if (this.time) {
            let { motionValue: t, onUpdate: e, onComplete: a, element: l, ...h } = this.options,
              u = new eL({
                ...h,
                keyframes: i,
                duration: s,
                type: n,
                ease: r,
                times: o,
                isGenerator: !0,
              }),
              d = m(this.time);
            t.setWithVelocity(u.sample(d - 10).value, u.sample(d).value, 10);
          }
          let { onStop: a } = this.options;
          a && a(), this.cancel();
        }
        complete() {
          let { resolved: t } = this;
          t && t.animation.finish();
        }
        cancel() {
          let { resolved: t } = this;
          t && t.animation.cancel();
        }
        static supports(t) {
          let { motionValue: e, name: i, repeatDelay: s, repeatType: n, damping: r, type: o } = t;
          return (
            eW() &&
            i &&
            ej.has(i) &&
            e &&
            e.owner &&
            e.owner.current instanceof HTMLElement &&
            !e.owner.getProps().onUpdate &&
            !s &&
            'mirror' !== n &&
            0 !== r &&
            'inertia' !== o
          );
        }
      }
      let eY = eB(() => void 0 !== window.ScrollTimeline);
      class eK {
        constructor(t) {
          (this.stop = () => this.runAll('stop')), (this.animations = t.filter(Boolean));
        }
        then(t, e) {
          return Promise.all(this.animations).then(t).catch(e);
        }
        getAll(t) {
          return this.animations[0][t];
        }
        setAll(t, e) {
          for (let i = 0; i < this.animations.length; i++) this.animations[i][t] = e;
        }
        attachTimeline(t, e) {
          let i = this.animations.map(i => (eY() && i.attachTimeline ? i.attachTimeline(t) : e(i)));
          return () => {
            i.forEach((t, e) => {
              t && t(), this.animations[e].stop();
            });
          };
        }
        get time() {
          return this.getAll('time');
        }
        set time(t) {
          this.setAll('time', t);
        }
        get speed() {
          return this.getAll('speed');
        }
        set speed(t) {
          this.setAll('speed', t);
        }
        get startTime() {
          return this.getAll('startTime');
        }
        get duration() {
          let t = 0;
          for (let e = 0; e < this.animations.length; e++)
            t = Math.max(t, this.animations[e].duration);
          return t;
        }
        runAll(t) {
          this.animations.forEach(e => e[t]());
        }
        play() {
          this.runAll('play');
        }
        pause() {
          this.runAll('pause');
        }
        cancel() {
          this.runAll('cancel');
        }
        complete() {
          this.runAll('complete');
        }
      }
      let eX =
          (t, e, i, s = {}, n, r) =>
          o => {
            let a = w(s, t) || {},
              l = a.delay || s.delay || 0,
              { elapsed: h = 0 } = s;
            h -= m(l);
            let u = {
              keyframes: Array.isArray(i) ? i : [null, i],
              ease: 'easeOut',
              velocity: e.getVelocity(),
              ...a,
              delay: -h,
              onUpdate: t => {
                e.set(t), a.onUpdate && a.onUpdate(t);
              },
              onComplete: () => {
                o(), a.onComplete && a.onComplete();
              },
              name: t,
              motionValue: e,
              element: r ? void 0 : n,
            };
            !(function ({
              when: t,
              delay: e,
              delayChildren: i,
              staggerChildren: s,
              staggerDirection: n,
              repeat: r,
              repeatType: o,
              repeatDelay: a,
              from: l,
              elapsed: h,
              ...u
            }) {
              return !!Object.keys(u).length;
            })(a) && (u = { ...u, ...P(t, u) }),
              u.duration && (u.duration = m(u.duration)),
              u.repeatDelay && (u.repeatDelay = m(u.repeatDelay)),
              void 0 !== u.from && (u.keyframes[0] = u.from);
            let d = !1;
            if (
              ((!1 !== u.type && (0 !== u.duration || u.repeatDelay)) ||
                ((u.duration = 0), 0 !== u.delay || (d = !0)),
              (b.current || T.skipAnimations) && ((d = !0), (u.duration = 0), (u.delay = 0)),
              d && !r && void 0 !== e.get())
            ) {
              let t = A(u.keyframes, a);
              if (void 0 !== t)
                return (
                  C.update(() => {
                    u.onUpdate(t), u.onComplete();
                  }),
                  new eK([])
                );
            }
            return !r && eH.supports(u) ? new eH(u) : new eL(u);
          },
        eG = t => !!(t && 'object' == typeof t && t.mix && t.toValue),
        eq = t => (r(t) ? t[t.length - 1] || 0 : t);
      function e_(t, e) {
        -1 === t.indexOf(e) && t.push(e);
      }
      function eZ(t, e) {
        let i = t.indexOf(e);
        i > -1 && t.splice(i, 1);
      }
      class eJ {
        constructor() {
          this.subscriptions = [];
        }
        add(t) {
          return e_(this.subscriptions, t), () => eZ(this.subscriptions, t);
        }
        notify(t, e, i) {
          let s = this.subscriptions.length;
          if (s) {
            if (1 === s) this.subscriptions[0](t, e, i);
            else
              for (let n = 0; n < s; n++) {
                let s = this.subscriptions[n];
                s && s(t, e, i);
              }
          }
        }
        getSize() {
          return this.subscriptions.length;
        }
        clear() {
          this.subscriptions.length = 0;
        }
      }
      let eQ = t => !isNaN(parseFloat(t)),
        e0 = { current: void 0 };
      class e1 {
        constructor(t, e = {}) {
          (this.version = '11.11.10'),
            (this.canTrackVelocity = null),
            (this.events = {}),
            (this.updateAndNotify = (t, e = !0) => {
              let i = t3.now();
              this.updatedAt !== i && this.setPrevFrameValue(),
                (this.prev = this.current),
                this.setCurrent(t),
                this.current !== this.prev &&
                  this.events.change &&
                  this.events.change.notify(this.current),
                e && this.events.renderRequest && this.events.renderRequest.notify(this.current);
            }),
            (this.hasAnimated = !1),
            this.setCurrent(t),
            (this.owner = e.owner);
        }
        setCurrent(t) {
          (this.current = t),
            (this.updatedAt = t3.now()),
            null === this.canTrackVelocity &&
              void 0 !== t &&
              (this.canTrackVelocity = eQ(this.current));
        }
        setPrevFrameValue(t = this.current) {
          (this.prevFrameValue = t), (this.prevUpdatedAt = this.updatedAt);
        }
        onChange(t) {
          return this.on('change', t);
        }
        on(t, e) {
          this.events[t] || (this.events[t] = new eJ());
          let i = this.events[t].add(e);
          return 'change' === t
            ? () => {
                i(),
                  C.read(() => {
                    this.events.change.getSize() || this.stop();
                  });
              }
            : i;
        }
        clearListeners() {
          for (let t in this.events) this.events[t].clear();
        }
        attach(t, e) {
          (this.passiveEffect = t), (this.stopPassiveEffect = e);
        }
        set(t, e = !0) {
          e && this.passiveEffect
            ? this.passiveEffect(t, this.updateAndNotify)
            : this.updateAndNotify(t, e);
        }
        setWithVelocity(t, e, i) {
          this.set(e),
            (this.prev = void 0),
            (this.prevFrameValue = t),
            (this.prevUpdatedAt = this.updatedAt - i);
        }
        jump(t, e = !0) {
          this.updateAndNotify(t),
            (this.prev = t),
            (this.prevUpdatedAt = this.prevFrameValue = void 0),
            e && this.stop(),
            this.stopPassiveEffect && this.stopPassiveEffect();
        }
        get() {
          return e0.current && e0.current.push(this), this.current;
        }
        getPrevious() {
          return this.prev;
        }
        getVelocity() {
          var t;
          let e = t3.now();
          if (!this.canTrackVelocity || void 0 === this.prevFrameValue || e - this.updatedAt > 30)
            return 0;
          let i = Math.min(this.updatedAt - this.prevUpdatedAt, 30);
          return (
            (t = parseFloat(this.current) - parseFloat(this.prevFrameValue)), i ? (1e3 / i) * t : 0
          );
        }
        start(t) {
          return (
            this.stop(),
            new Promise(e => {
              (this.hasAnimated = !0),
                (this.animation = t(e)),
                this.events.animationStart && this.events.animationStart.notify();
            }).then(() => {
              this.events.animationComplete && this.events.animationComplete.notify(),
                this.clearAnimation();
            })
          );
        }
        stop() {
          this.animation &&
            (this.animation.stop(),
            this.events.animationCancel && this.events.animationCancel.notify()),
            this.clearAnimation();
        }
        isAnimating() {
          return !!this.animation;
        }
        clearAnimation() {
          delete this.animation;
        }
        destroy() {
          this.clearListeners(), this.stop(), this.stopPassiveEffect && this.stopPassiveEffect();
        }
      }
      function e2(t, e) {
        return new e1(t, e);
      }
      let e5 = t => t.replace(/([a-z])([A-Z])/gu, '$1-$2').toLowerCase(),
        e3 = 'data-' + e5('framerAppearId'),
        e9 = t => !!(t && t.getVelocity);
      function e4(t, e) {
        let i = t.getValue('willChange');
        if (e9(i) && i.add) return i.add(e);
      }
      function e6(t, e, { delay: i = 0, transitionOverride: s, type: n } = {}) {
        var r;
        let { transition: o = t.getDefaultTransition(), transitionEnd: a, ...l } = e;
        s && (o = s);
        let u = [],
          d = n && t.animationState && t.animationState.getState()[n];
        for (let e in l) {
          let s = t.getValue(e, null !== (r = t.latestValues[e]) && void 0 !== r ? r : null),
            n = l[e];
          if (
            void 0 === n ||
            (d &&
              (function ({ protectedKeys: t, needsAnimating: e }, i) {
                let s = t.hasOwnProperty(i) && !0 !== e[i];
                return (e[i] = !1), s;
              })(d, e))
          )
            continue;
          let a = { delay: i, ...w(o || {}, e) },
            h = !1;
          if (window.MotionHandoffAnimation) {
            let i = t.props[e3];
            if (i) {
              let t = window.MotionHandoffAnimation(i, e, C);
              null !== t && ((a.startTime = t), (h = !0));
            }
          }
          e4(t, e), s.start(eX(e, s, n, t.shouldReduceMotion && p.has(e) ? { type: !1 } : a, t, h));
          let c = s.animation;
          c && u.push(c);
        }
        return (
          a &&
            Promise.all(u).then(() => {
              C.update(() => {
                a &&
                  (function (t, e) {
                    let { transitionEnd: i = {}, transition: s = {}, ...n } = h(t, e) || {};
                    for (let e in (n = { ...n, ...i })) {
                      let i = eq(n[e]);
                      t.hasValue(e) ? t.getValue(e).set(i) : t.addValue(e, e2(i));
                    }
                  })(t, a);
              });
            }),
          u
        );
      }
      function e8(t, e, i = {}) {
        var s;
        let n = h(
            t,
            e,
            'exit' === i.type
              ? null === (s = t.presenceContext) || void 0 === s
                ? void 0
                : s.custom
              : void 0
          ),
          { transition: r = t.getDefaultTransition() || {} } = n || {};
        i.transitionOverride && (r = i.transitionOverride);
        let o = n ? () => Promise.all(e6(t, n, i)) : () => Promise.resolve(),
          a =
            t.variantChildren && t.variantChildren.size
              ? (s = 0) => {
                  let { delayChildren: n = 0, staggerChildren: o, staggerDirection: a } = r;
                  return (function (t, e, i = 0, s = 0, n = 1, r) {
                    let o = [],
                      a = (t.variantChildren.size - 1) * s,
                      l = 1 === n ? (t = 0) => t * s : (t = 0) => a - t * s;
                    return (
                      Array.from(t.variantChildren)
                        .sort(e7)
                        .forEach((t, s) => {
                          t.notify('AnimationStart', e),
                            o.push(
                              e8(t, e, { ...r, delay: i + l(s) }).then(() =>
                                t.notify('AnimationComplete', e)
                              )
                            );
                        }),
                      Promise.all(o)
                    );
                  })(t, e, n + s, o, a, i);
                }
              : () => Promise.resolve(),
          { when: l } = r;
        if (!l) return Promise.all([o(), a(i.delay)]);
        {
          let [t, e] = 'beforeChildren' === l ? [o, a] : [a, o];
          return t().then(() => e());
        }
      }
      function e7(t, e) {
        return t.sortNodePosition(e);
      }
      let it = d.length,
        ie = [...u].reverse(),
        ii = u.length;
      function is(t = !1) {
        return { isActive: t, protectedKeys: {}, needsAnimating: {}, prevResolvedValues: {} };
      }
      function ir() {
        return {
          animate: is(!0),
          whileInView: is(),
          whileHover: is(),
          whileTap: is(),
          whileDrag: is(),
          whileFocus: is(),
          exit: is(),
        };
      }
      class io {
        constructor(t) {
          (this.isMounted = !1), (this.node = t);
        }
        update() {}
      }
      class ia extends io {
        constructor(t) {
          super(t),
            t.animationState ||
              (t.animationState = (function (t) {
                let e = e =>
                    Promise.all(
                      e.map(({ animation: e, options: i }) =>
                        (function (t, e, i = {}) {
                          let s;
                          if ((t.notify('AnimationStart', e), Array.isArray(e)))
                            s = Promise.all(e.map(e => e8(t, e, i)));
                          else if ('string' == typeof e) s = e8(t, e, i);
                          else {
                            let n = 'function' == typeof e ? h(t, e, i.custom) : e;
                            s = Promise.all(e6(t, n, i));
                          }
                          return s.then(() => {
                            t.notify('AnimationComplete', e);
                          });
                        })(t, e, i)
                      )
                    ),
                  i = ir(),
                  s = !0,
                  l = e => (i, s) => {
                    var n;
                    let r = h(
                      t,
                      s,
                      'exit' === e
                        ? null === (n = t.presenceContext) || void 0 === n
                          ? void 0
                          : n.custom
                        : void 0
                    );
                    if (r) {
                      let { transition: t, transitionEnd: e, ...s } = r;
                      i = { ...i, ...s, ...e };
                    }
                    return i;
                  };
                function u(h) {
                  let { props: u } = t,
                    c =
                      (function t(e) {
                        if (!e) return;
                        if (!e.isControllingVariants) {
                          let i = (e.parent && t(e.parent)) || {};
                          return void 0 !== e.props.initial && (i.initial = e.props.initial), i;
                        }
                        let i = {};
                        for (let t = 0; t < it; t++) {
                          let s = d[t],
                            n = e.props[s];
                          (a(n) || !1 === n) && (i[s] = n);
                        }
                        return i;
                      })(t.parent) || {},
                    p = [],
                    m = new Set(),
                    f = {},
                    v = 1 / 0;
                  for (let e = 0; e < ii; e++) {
                    var g;
                    let d = ie[e],
                      y = i[d],
                      x = void 0 !== u[d] ? u[d] : c[d],
                      P = a(x),
                      w = d === h ? y.isActive : null;
                    !1 === w && (v = e);
                    let T = x === c[d] && x !== u[d] && P;
                    if (
                      (T && s && t.manuallyAnimateOnMount && (T = !1),
                      (y.protectedKeys = { ...f }),
                      (!y.isActive && null === w) ||
                        (!x && !y.prevProp) ||
                        n(x) ||
                        'boolean' == typeof x)
                    )
                      continue;
                    let b =
                        ((g = y.prevProp),
                        'string' == typeof x ? x !== g : !!Array.isArray(x) && !o(x, g)),
                      S = b || (d === h && y.isActive && !T && P) || (e > v && P),
                      A = !1,
                      V = Array.isArray(x) ? x : [x],
                      M = V.reduce(l(d), {});
                    !1 === w && (M = {});
                    let { prevResolvedValues: E = {} } = y,
                      C = { ...E, ...M },
                      k = e => {
                        (S = !0), m.has(e) && ((A = !0), m.delete(e)), (y.needsAnimating[e] = !0);
                        let i = t.getValue(e);
                        i && (i.liveStyle = !1);
                      };
                    for (let t in C) {
                      let e = M[t],
                        i = E[t];
                      if (!f.hasOwnProperty(t))
                        (r(e) && r(i) ? o(e, i) : e === i)
                          ? void 0 !== e && m.has(t)
                            ? k(t)
                            : (y.protectedKeys[t] = !0)
                          : null != e
                            ? k(t)
                            : m.add(t);
                    }
                    (y.prevProp = x),
                      (y.prevResolvedValues = M),
                      y.isActive && (f = { ...f, ...M }),
                      s && t.blockInitialAnimation && (S = !1);
                    let R = !(T && b) || A;
                    S && R && p.push(...V.map(t => ({ animation: t, options: { type: d } })));
                  }
                  if (m.size) {
                    let e = {};
                    m.forEach(i => {
                      let s = t.getBaseTarget(i),
                        n = t.getValue(i);
                      n && (n.liveStyle = !0), (e[i] = null != s ? s : null);
                    }),
                      p.push({ animation: e });
                  }
                  let y = !!p.length;
                  return (
                    s &&
                      (!1 === u.initial || u.initial === u.animate) &&
                      !t.manuallyAnimateOnMount &&
                      (y = !1),
                    (s = !1),
                    y ? e(p) : Promise.resolve()
                  );
                }
                return {
                  animateChanges: u,
                  setActive: function (e, s) {
                    var n;
                    if (i[e].isActive === s) return Promise.resolve();
                    null === (n = t.variantChildren) ||
                      void 0 === n ||
                      n.forEach(t => {
                        var i;
                        return null === (i = t.animationState) || void 0 === i
                          ? void 0
                          : i.setActive(e, s);
                      }),
                      (i[e].isActive = s);
                    let r = u(e);
                    for (let t in i) i[t].protectedKeys = {};
                    return r;
                  },
                  setAnimateFunction: function (i) {
                    e = i(t);
                  },
                  getState: () => i,
                  reset: () => {
                    (i = ir()), (s = !0);
                  },
                };
              })(t));
        }
        updateAnimationControlsSubscription() {
          let { animate: t } = this.node.getProps();
          n(t) && (this.unmountControls = t.subscribe(this.node));
        }
        mount() {
          this.updateAnimationControlsSubscription();
        }
        update() {
          let { animate: t } = this.node.getProps(),
            { animate: e } = this.node.prevProps || {};
          t !== e && this.updateAnimationControlsSubscription();
        }
        unmount() {
          var t;
          this.node.animationState.reset(),
            null === (t = this.unmountControls) || void 0 === t || t.call(this);
        }
      }
      let il = 0;
      class ih extends io {
        constructor() {
          super(...arguments), (this.id = il++);
        }
        update() {
          if (!this.node.presenceContext) return;
          let { isPresent: t, onExitComplete: e } = this.node.presenceContext,
            { isPresent: i } = this.node.prevPresenceContext || {};
          if (!this.node.animationState || t === i) return;
          let s = this.node.animationState.setActive('exit', !t);
          e && !t && s.then(() => e(this.id));
        }
        mount() {
          let { register: t } = this.node.presenceContext || {};
          t && (this.unmount = t(this.id));
        }
        unmount() {}
      }
      let iu = t =>
        'mouse' === t.pointerType
          ? 'number' != typeof t.button || t.button <= 0
          : !1 !== t.isPrimary;
      function id(t, e = 'page') {
        return { point: { x: t[`${e}X`], y: t[`${e}Y`] } };
      }
      let ic = t => e => iu(e) && t(e, id(e));
      function ip(t, e, i, s = { passive: !0 }) {
        return t.addEventListener(e, i, s), () => t.removeEventListener(e, i);
      }
      function im(t, e, i, s) {
        return ip(t, e, ic(i), s);
      }
      let iv = (t, e) => Math.abs(t - e);
      class ig {
        constructor(
          t,
          e,
          { transformPagePoint: i, contextWindow: s, dragSnapToOrigin: n = !1 } = {}
        ) {
          if (
            ((this.startEvent = null),
            (this.lastMoveEvent = null),
            (this.lastMoveEventInfo = null),
            (this.handlers = {}),
            (this.contextWindow = window),
            (this.updatePoint = () => {
              if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
              let t = iP(this.lastMoveEventInfo, this.history),
                e = null !== this.startEvent,
                i =
                  (function (t, e) {
                    return Math.sqrt(iv(t.x, e.x) ** 2 + iv(t.y, e.y) ** 2);
                  })(t.offset, { x: 0, y: 0 }) >= 3;
              if (!e && !i) return;
              let { point: s } = t,
                { timestamp: n } = R;
              this.history.push({ ...s, timestamp: n });
              let { onStart: r, onMove: o } = this.handlers;
              e || (r && r(this.lastMoveEvent, t), (this.startEvent = this.lastMoveEvent)),
                o && o(this.lastMoveEvent, t);
            }),
            (this.handlePointerMove = (t, e) => {
              (this.lastMoveEvent = t),
                (this.lastMoveEventInfo = iy(e, this.transformPagePoint)),
                C.update(this.updatePoint, !0);
            }),
            (this.handlePointerUp = (t, e) => {
              this.end();
              let { onEnd: i, onSessionEnd: s, resumeAnimation: n } = this.handlers;
              if (
                (this.dragSnapToOrigin && n && n(), !(this.lastMoveEvent && this.lastMoveEventInfo))
              )
                return;
              let r = iP(
                'pointercancel' === t.type
                  ? this.lastMoveEventInfo
                  : iy(e, this.transformPagePoint),
                this.history
              );
              this.startEvent && i && i(t, r), s && s(t, r);
            }),
            !iu(t))
          )
            return;
          (this.dragSnapToOrigin = n),
            (this.handlers = e),
            (this.transformPagePoint = i),
            (this.contextWindow = s || window);
          let r = iy(id(t), this.transformPagePoint),
            { point: o } = r,
            { timestamp: a } = R;
          this.history = [{ ...o, timestamp: a }];
          let { onSessionStart: l } = e;
          l && l(t, iP(r, this.history)),
            (this.removeListeners = ec(
              im(this.contextWindow, 'pointermove', this.handlePointerMove),
              im(this.contextWindow, 'pointerup', this.handlePointerUp),
              im(this.contextWindow, 'pointercancel', this.handlePointerUp)
            ));
        }
        updateHandlers(t) {
          this.handlers = t;
        }
        end() {
          this.removeListeners && this.removeListeners(), k(this.updatePoint);
        }
      }
      function iy(t, e) {
        return e ? { point: e(t.point) } : t;
      }
      function ix(t, e) {
        return { x: t.x - e.x, y: t.y - e.y };
      }
      function iP({ point: t }, e) {
        return {
          point: t,
          delta: ix(t, iw(e)),
          offset: ix(t, e[0]),
          velocity: (function (t, e) {
            if (t.length < 2) return { x: 0, y: 0 };
            let i = t.length - 1,
              s = null,
              n = iw(t);
            for (; i >= 0 && ((s = t[i]), !(n.timestamp - s.timestamp > m(0.1))); ) i--;
            if (!s) return { x: 0, y: 0 };
            let r = f(n.timestamp - s.timestamp);
            if (0 === r) return { x: 0, y: 0 };
            let o = { x: (n.x - s.x) / r, y: (n.y - s.y) / r };
            return o.x === 1 / 0 && (o.x = 0), o.y === 1 / 0 && (o.y = 0), o;
          })(e, 0),
        };
      }
      function iw(t) {
        return t[t.length - 1];
      }
      function iT(t) {
        let e = null;
        return () =>
          null === e &&
          ((e = t),
          () => {
            e = null;
          });
      }
      let ib = iT('dragHorizontal'),
        iS = iT('dragVertical');
      function iA(t) {
        let e = !1;
        if ('y' === t) e = iS();
        else if ('x' === t) e = ib();
        else {
          let t = ib(),
            i = iS();
          t && i
            ? (e = () => {
                t(), i();
              })
            : (t && t(), i && i());
        }
        return e;
      }
      function iV() {
        let t = iA(!0);
        return !t || (t(), !1);
      }
      function iM(t) {
        return t && 'object' == typeof t && Object.prototype.hasOwnProperty.call(t, 'current');
      }
      function iE(t) {
        return t.max - t.min;
      }
      function iC(t, e, i, s = 0.5) {
        (t.origin = s),
          (t.originPoint = em(e.min, e.max, t.origin)),
          (t.scale = iE(i) / iE(e)),
          (t.translate = em(i.min, i.max, t.origin) - t.originPoint),
          ((t.scale >= 0.9999 && t.scale <= 1.0001) || isNaN(t.scale)) && (t.scale = 1),
          ((t.translate >= -0.01 && t.translate <= 0.01) || isNaN(t.translate)) &&
            (t.translate = 0);
      }
      function ik(t, e, i, s) {
        iC(t.x, e.x, i.x, s ? s.originX : void 0), iC(t.y, e.y, i.y, s ? s.originY : void 0);
      }
      function iR(t, e, i) {
        (t.min = i.min + e.min), (t.max = t.min + iE(e));
      }
      function iD(t, e, i) {
        (t.min = e.min - i.min), (t.max = t.min + iE(e));
      }
      function iL(t, e, i) {
        iD(t.x, e.x, i.x), iD(t.y, e.y, i.y);
      }
      function ij(t, e, i) {
        return {
          min: void 0 !== e ? t.min + e : void 0,
          max: void 0 !== i ? t.max + i - (t.max - t.min) : void 0,
        };
      }
      function iF(t, e) {
        let i = e.min - t.min,
          s = e.max - t.max;
        return e.max - e.min < t.max - t.min && ([i, s] = [s, i]), { min: i, max: s };
      }
      function iB(t, e, i) {
        return { min: iO(t, e), max: iO(t, i) };
      }
      function iO(t, e) {
        return 'number' == typeof t ? t : t[e] || 0;
      }
      let iI = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
        iU = () => ({ x: iI(), y: iI() }),
        i$ = () => ({ min: 0, max: 0 }),
        iN = () => ({ x: i$(), y: i$() });
      function iW(t) {
        return [t('x'), t('y')];
      }
      function iz({ top: t, left: e, right: i, bottom: s }) {
        return { x: { min: e, max: i }, y: { min: t, max: s } };
      }
      function iH(t) {
        return void 0 === t || 1 === t;
      }
      function iY({ scale: t, scaleX: e, scaleY: i }) {
        return !iH(t) || !iH(e) || !iH(i);
      }
      function iK(t) {
        return iY(t) || iX(t) || t.z || t.rotate || t.rotateX || t.rotateY || t.skewX || t.skewY;
      }
      function iX(t) {
        var e, i;
        return ((e = t.x) && '0%' !== e) || ((i = t.y) && '0%' !== i);
      }
      function iG(t, e, i, s, n) {
        return void 0 !== n && (t = s + n * (t - s)), s + i * (t - s) + e;
      }
      function iq(t, e = 0, i = 1, s, n) {
        (t.min = iG(t.min, e, i, s, n)), (t.max = iG(t.max, e, i, s, n));
      }
      function i_(t, { x: e, y: i }) {
        iq(t.x, e.translate, e.scale, e.originPoint), iq(t.y, i.translate, i.scale, i.originPoint);
      }
      function iZ(t, e) {
        (t.min = t.min + e), (t.max = t.max + e);
      }
      function iJ(t, e, i, s, n = 0.5) {
        let r = em(t.min, t.max, n);
        iq(t, e, i, r, s);
      }
      function iQ(t, e) {
        iJ(t.x, e.x, e.scaleX, e.scale, e.originX), iJ(t.y, e.y, e.scaleY, e.scale, e.originY);
      }
      function i0(t, e) {
        return iz(
          (function (t, e) {
            if (!e) return t;
            let i = e({ x: t.left, y: t.top }),
              s = e({ x: t.right, y: t.bottom });
            return { top: i.y, left: i.x, bottom: s.y, right: s.x };
          })(t.getBoundingClientRect(), e)
        );
      }
      let i1 = ({ current: t }) => (t ? t.ownerDocument.defaultView : null),
        i2 = new WeakMap();
      class i5 {
        constructor(t) {
          (this.openGlobalLock = null),
            (this.isDragging = !1),
            (this.currentDirection = null),
            (this.originPoint = { x: 0, y: 0 }),
            (this.constraints = !1),
            (this.hasMutatedConstraints = !1),
            (this.elastic = iN()),
            (this.visualElement = t);
        }
        start(t, { snapToCursor: e = !1 } = {}) {
          let { presenceContext: i } = this.visualElement;
          if (i && !1 === i.isPresent) return;
          let { dragSnapToOrigin: s } = this.getProps();
          this.panSession = new ig(
            t,
            {
              onSessionStart: t => {
                let { dragSnapToOrigin: i } = this.getProps();
                i ? this.pauseAnimation() : this.stopAnimation(),
                  e && this.snapToCursor(id(t, 'page').point);
              },
              onStart: (t, e) => {
                let { drag: i, dragPropagation: s, onDragStart: n } = this.getProps();
                if (
                  i &&
                  !s &&
                  (this.openGlobalLock && this.openGlobalLock(),
                  (this.openGlobalLock = iA(i)),
                  !this.openGlobalLock)
                )
                  return;
                (this.isDragging = !0),
                  (this.currentDirection = null),
                  this.resolveConstraints(),
                  this.visualElement.projection &&
                    ((this.visualElement.projection.isAnimationBlocked = !0),
                    (this.visualElement.projection.target = void 0)),
                  iW(t => {
                    let e = this.getAxisMotionValue(t).get() || 0;
                    if (tn.test(e)) {
                      let { projection: i } = this.visualElement;
                      if (i && i.layout) {
                        let s = i.layout.layoutBox[t];
                        s && (e = iE(s) * (parseFloat(e) / 100));
                      }
                    }
                    this.originPoint[t] = e;
                  }),
                  n && C.postRender(() => n(t, e)),
                  e4(this.visualElement, 'transform');
                let { animationState: r } = this.visualElement;
                r && r.setActive('whileDrag', !0);
              },
              onMove: (t, e) => {
                let {
                  dragPropagation: i,
                  dragDirectionLock: s,
                  onDirectionLock: n,
                  onDrag: r,
                } = this.getProps();
                if (!i && !this.openGlobalLock) return;
                let { offset: o } = e;
                if (s && null === this.currentDirection) {
                  (this.currentDirection = (function (t, e = 10) {
                    let i = null;
                    return Math.abs(t.y) > e ? (i = 'y') : Math.abs(t.x) > e && (i = 'x'), i;
                  })(o)),
                    null !== this.currentDirection && n && n(this.currentDirection);
                  return;
                }
                this.updateAxis('x', e.point, o),
                  this.updateAxis('y', e.point, o),
                  this.visualElement.render(),
                  r && r(t, e);
              },
              onSessionEnd: (t, e) => this.stop(t, e),
              resumeAnimation: () =>
                iW(t => {
                  var e;
                  return (
                    'paused' === this.getAnimationState(t) &&
                    (null === (e = this.getAxisMotionValue(t).animation) || void 0 === e
                      ? void 0
                      : e.play())
                  );
                }),
            },
            {
              transformPagePoint: this.visualElement.getTransformPagePoint(),
              dragSnapToOrigin: s,
              contextWindow: i1(this.visualElement),
            }
          );
        }
        stop(t, e) {
          let i = this.isDragging;
          if ((this.cancel(), !i)) return;
          let { velocity: s } = e;
          this.startAnimation(s);
          let { onDragEnd: n } = this.getProps();
          n && C.postRender(() => n(t, e));
        }
        cancel() {
          this.isDragging = !1;
          let { projection: t, animationState: e } = this.visualElement;
          t && (t.isAnimationBlocked = !1),
            this.panSession && this.panSession.end(),
            (this.panSession = void 0);
          let { dragPropagation: i } = this.getProps();
          !i && this.openGlobalLock && (this.openGlobalLock(), (this.openGlobalLock = null)),
            e && e.setActive('whileDrag', !1);
        }
        updateAxis(t, e, i) {
          let { drag: s } = this.getProps();
          if (!i || !i3(t, s, this.currentDirection)) return;
          let n = this.getAxisMotionValue(t),
            r = this.originPoint[t] + i[t];
          this.constraints &&
            this.constraints[t] &&
            (r = (function (t, { min: e, max: i }, s) {
              return (
                void 0 !== e && t < e
                  ? (t = s ? em(e, t, s.min) : Math.max(t, e))
                  : void 0 !== i && t > i && (t = s ? em(i, t, s.max) : Math.min(t, i)),
                t
              );
            })(r, this.constraints[t], this.elastic[t])),
            n.set(r);
        }
        resolveConstraints() {
          var t;
          let { dragConstraints: e, dragElastic: i } = this.getProps(),
            s =
              this.visualElement.projection && !this.visualElement.projection.layout
                ? this.visualElement.projection.measure(!1)
                : null === (t = this.visualElement.projection) || void 0 === t
                  ? void 0
                  : t.layout,
            n = this.constraints;
          e && iM(e)
            ? this.constraints || (this.constraints = this.resolveRefConstraints())
            : e && s
              ? (this.constraints = (function (t, { top: e, left: i, bottom: s, right: n }) {
                  return { x: ij(t.x, i, n), y: ij(t.y, e, s) };
                })(s.layoutBox, e))
              : (this.constraints = !1),
            (this.elastic = (function (t = 0.35) {
              return (
                !1 === t ? (t = 0) : !0 === t && (t = 0.35),
                { x: iB(t, 'left', 'right'), y: iB(t, 'top', 'bottom') }
              );
            })(i)),
            n !== this.constraints &&
              s &&
              this.constraints &&
              !this.hasMutatedConstraints &&
              iW(t => {
                !1 !== this.constraints &&
                  this.getAxisMotionValue(t) &&
                  (this.constraints[t] = (function (t, e) {
                    let i = {};
                    return (
                      void 0 !== e.min && (i.min = e.min - t.min),
                      void 0 !== e.max && (i.max = e.max - t.min),
                      i
                    );
                  })(s.layoutBox[t], this.constraints[t]));
              });
        }
        resolveRefConstraints() {
          var t;
          let { dragConstraints: e, onMeasureDragConstraints: i } = this.getProps();
          if (!e || !iM(e)) return !1;
          let s = e.current;
          V(
            null !== s,
            "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop."
          );
          let { projection: n } = this.visualElement;
          if (!n || !n.layout) return !1;
          let r = (function (t, e, i) {
              let s = i0(t, i),
                { scroll: n } = e;
              return n && (iZ(s.x, n.offset.x), iZ(s.y, n.offset.y)), s;
            })(s, n.root, this.visualElement.getTransformPagePoint()),
            o = { x: iF((t = n.layout.layoutBox).x, r.x), y: iF(t.y, r.y) };
          if (i) {
            let t = i(
              (function ({ x: t, y: e }) {
                return { top: e.min, right: t.max, bottom: e.max, left: t.min };
              })(o)
            );
            (this.hasMutatedConstraints = !!t), t && (o = iz(t));
          }
          return o;
        }
        startAnimation(t) {
          let {
              drag: e,
              dragMomentum: i,
              dragElastic: s,
              dragTransition: n,
              dragSnapToOrigin: r,
              onDragTransitionEnd: o,
            } = this.getProps(),
            a = this.constraints || {};
          return Promise.all(
            iW(o => {
              if (!i3(o, e, this.currentDirection)) return;
              let l = (a && a[o]) || {};
              r && (l = { min: 0, max: 0 });
              let h = {
                type: 'inertia',
                velocity: i ? t[o] : 0,
                bounceStiffness: s ? 200 : 1e6,
                bounceDamping: s ? 40 : 1e7,
                timeConstant: 750,
                restDelta: 1,
                restSpeed: 10,
                ...n,
                ...l,
              };
              return this.startAxisValueAnimation(o, h);
            })
          ).then(o);
        }
        startAxisValueAnimation(t, e) {
          let i = this.getAxisMotionValue(t);
          return e4(this.visualElement, t), i.start(eX(t, i, 0, e, this.visualElement, !1));
        }
        stopAnimation() {
          iW(t => this.getAxisMotionValue(t).stop());
        }
        pauseAnimation() {
          iW(t => {
            var e;
            return null === (e = this.getAxisMotionValue(t).animation) || void 0 === e
              ? void 0
              : e.pause();
          });
        }
        getAnimationState(t) {
          var e;
          return null === (e = this.getAxisMotionValue(t).animation) || void 0 === e
            ? void 0
            : e.state;
        }
        getAxisMotionValue(t) {
          let e = `_drag${t.toUpperCase()}`,
            i = this.visualElement.getProps();
          return i[e] || this.visualElement.getValue(t, (i.initial ? i.initial[t] : void 0) || 0);
        }
        snapToCursor(t) {
          iW(e => {
            let { drag: i } = this.getProps();
            if (!i3(e, i, this.currentDirection)) return;
            let { projection: s } = this.visualElement,
              n = this.getAxisMotionValue(e);
            if (s && s.layout) {
              let { min: i, max: r } = s.layout.layoutBox[e];
              n.set(t[e] - em(i, r, 0.5));
            }
          });
        }
        scalePositionWithinConstraints() {
          if (!this.visualElement.current) return;
          let { drag: t, dragConstraints: e } = this.getProps(),
            { projection: i } = this.visualElement;
          if (!iM(e) || !i || !this.constraints) return;
          this.stopAnimation();
          let s = { x: 0, y: 0 };
          iW(t => {
            let e = this.getAxisMotionValue(t);
            if (e && !1 !== this.constraints) {
              let i = e.get();
              s[t] = (function (t, e) {
                let i = 0.5,
                  s = iE(t),
                  n = iE(e);
                return (
                  n > s
                    ? (i = ep(e.min, e.max - s, t.min))
                    : s > n && (i = ep(t.min, t.max - n, e.min)),
                  J(0, 1, i)
                );
              })({ min: i, max: i }, this.constraints[t]);
            }
          });
          let { transformTemplate: n } = this.visualElement.getProps();
          (this.visualElement.current.style.transform = n ? n({}, '') : 'none'),
            i.root && i.root.updateScroll(),
            i.updateLayout(),
            this.resolveConstraints(),
            iW(e => {
              if (!i3(e, t, null)) return;
              let i = this.getAxisMotionValue(e),
                { min: n, max: r } = this.constraints[e];
              i.set(em(n, r, s[e]));
            });
        }
        addListeners() {
          if (!this.visualElement.current) return;
          i2.set(this.visualElement, this);
          let t = im(this.visualElement.current, 'pointerdown', t => {
              let { drag: e, dragListener: i = !0 } = this.getProps();
              e && i && this.start(t);
            }),
            e = () => {
              let { dragConstraints: t } = this.getProps();
              iM(t) && t.current && (this.constraints = this.resolveRefConstraints());
            },
            { projection: i } = this.visualElement,
            s = i.addEventListener('measure', e);
          i && !i.layout && (i.root && i.root.updateScroll(), i.updateLayout()), C.read(e);
          let n = ip(window, 'resize', () => this.scalePositionWithinConstraints()),
            r = i.addEventListener('didUpdate', ({ delta: t, hasLayoutChanged: e }) => {
              this.isDragging &&
                e &&
                (iW(e => {
                  let i = this.getAxisMotionValue(e);
                  i && ((this.originPoint[e] += t[e].translate), i.set(i.get() + t[e].translate));
                }),
                this.visualElement.render());
            });
          return () => {
            n(), t(), s(), r && r();
          };
        }
        getProps() {
          let t = this.visualElement.getProps(),
            {
              drag: e = !1,
              dragDirectionLock: i = !1,
              dragPropagation: s = !1,
              dragConstraints: n = !1,
              dragElastic: r = 0.35,
              dragMomentum: o = !0,
            } = t;
          return {
            ...t,
            drag: e,
            dragDirectionLock: i,
            dragPropagation: s,
            dragConstraints: n,
            dragElastic: r,
            dragMomentum: o,
          };
        }
      }
      function i3(t, e, i) {
        return (!0 === e || e === t) && (null === i || i === t);
      }
      class i9 extends io {
        constructor(t) {
          super(t),
            (this.removeGroupControls = V),
            (this.removeListeners = V),
            (this.controls = new i5(t));
        }
        mount() {
          let { dragControls: t } = this.node.getProps();
          t && (this.removeGroupControls = t.subscribe(this.controls)),
            (this.removeListeners = this.controls.addListeners() || V);
        }
        unmount() {
          this.removeGroupControls(), this.removeListeners();
        }
      }
      let i4 = t => (e, i) => {
        t && C.postRender(() => t(e, i));
      };
      class i6 extends io {
        constructor() {
          super(...arguments), (this.removePointerDownListener = V);
        }
        onPointerDown(t) {
          this.session = new ig(t, this.createPanHandlers(), {
            transformPagePoint: this.node.getTransformPagePoint(),
            contextWindow: i1(this.node),
          });
        }
        createPanHandlers() {
          let { onPanSessionStart: t, onPanStart: e, onPan: i, onPanEnd: s } = this.node.getProps();
          return {
            onSessionStart: i4(t),
            onStart: i4(e),
            onMove: i,
            onEnd: (t, e) => {
              delete this.session, s && C.postRender(() => s(t, e));
            },
          };
        }
        mount() {
          this.removePointerDownListener = im(this.node.current, 'pointerdown', t =>
            this.onPointerDown(t)
          );
        }
        update() {
          this.session && this.session.updateHandlers(this.createPanHandlers());
        }
        unmount() {
          this.removePointerDownListener(), this.session && this.session.end();
        }
      }
      var i8,
        i7,
        st = i(7437),
        se = i(2265);
      let si = (0, se.createContext)(null),
        ss = (0, se.createContext)({}),
        sn = (0, se.createContext)({}),
        sr = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 };
      function so(t, e) {
        return e.max === e.min ? 0 : (t / (e.max - e.min)) * 100;
      }
      let sa = {
          correct: (t, e) => {
            if (!e.target) return t;
            if ('string' == typeof t) {
              if (!tr.test(t)) return t;
              t = parseFloat(t);
            }
            let i = so(t, e.target.x),
              s = so(t, e.target.y);
            return `${i}% ${s}%`;
          },
        },
        sl = {},
        { schedule: sh, cancel: su } = E(queueMicrotask, !1);
      class sd extends se.Component {
        componentDidMount() {
          let { visualElement: t, layoutGroup: e, switchLayoutGroup: i, layoutId: s } = this.props,
            { projection: n } = t;
          Object.assign(sl, sp),
            n &&
              (e.group && e.group.add(n),
              i && i.register && s && i.register(n),
              n.root.didUpdate(),
              n.addEventListener('animationComplete', () => {
                this.safeToRemove();
              }),
              n.setOptions({ ...n.options, onExitComplete: () => this.safeToRemove() })),
            (sr.hasEverUpdated = !0);
        }
        getSnapshotBeforeUpdate(t) {
          let { layoutDependency: e, visualElement: i, drag: s, isPresent: n } = this.props,
            r = i.projection;
          return (
            r &&
              ((r.isPresent = n),
              s || t.layoutDependency !== e || void 0 === e ? r.willUpdate() : this.safeToRemove(),
              t.isPresent === n ||
                (n
                  ? r.promote()
                  : r.relegate() ||
                    C.postRender(() => {
                      let t = r.getStack();
                      (t && t.members.length) || this.safeToRemove();
                    }))),
            null
          );
        }
        componentDidUpdate() {
          let { projection: t } = this.props.visualElement;
          t &&
            (t.root.didUpdate(),
            sh.postRender(() => {
              !t.currentAnimation && t.isLead() && this.safeToRemove();
            }));
        }
        componentWillUnmount() {
          let { visualElement: t, layoutGroup: e, switchLayoutGroup: i } = this.props,
            { projection: s } = t;
          s &&
            (s.scheduleCheckAfterUnmount(),
            e && e.group && e.group.remove(s),
            i && i.deregister && i.deregister(s));
        }
        safeToRemove() {
          let { safeToRemove: t } = this.props;
          t && t();
        }
        render() {
          return null;
        }
      }
      function sc(t) {
        let [e, i] = (function () {
            let t = (0, se.useContext)(si);
            if (null === t) return [!0, null];
            let { isPresent: e, onExitComplete: i, register: s } = t,
              n = (0, se.useId)();
            (0, se.useEffect)(() => s(n), []);
            let r = (0, se.useCallback)(() => i && i(n), [n, i]);
            return !e && i ? [!1, r] : [!0];
          })(),
          s = (0, se.useContext)(ss);
        return (0, st.jsx)(sd, {
          ...t,
          layoutGroup: s,
          switchLayoutGroup: (0, se.useContext)(sn),
          isPresent: e,
          safeToRemove: i,
        });
      }
      let sp = {
          borderRadius: {
            ...sa,
            applyTo: [
              'borderTopLeftRadius',
              'borderTopRightRadius',
              'borderBottomLeftRadius',
              'borderBottomRightRadius',
            ],
          },
          borderTopLeftRadius: sa,
          borderTopRightRadius: sa,
          borderBottomLeftRadius: sa,
          borderBottomRightRadius: sa,
          boxShadow: {
            correct: (t, { treeScale: e, projectionDelta: i }) => {
              let s = tH.parse(t);
              if (s.length > 5) return t;
              let n = tH.createTransformer(t),
                r = 'number' != typeof s[0] ? 1 : 0,
                o = i.x.scale * e.x,
                a = i.y.scale * e.y;
              (s[0 + r] /= o), (s[1 + r] /= a);
              let l = em(o, a, 0.5);
              return (
                'number' == typeof s[2 + r] && (s[2 + r] /= l),
                'number' == typeof s[3 + r] && (s[3 + r] /= l),
                n(s)
              );
            },
          },
        },
        sm = ['TopLeft', 'TopRight', 'BottomLeft', 'BottomRight'],
        sf = sm.length,
        sv = t => ('string' == typeof t ? parseFloat(t) : t),
        sg = t => 'number' == typeof t || tr.test(t);
      function sy(t, e) {
        return void 0 !== t[e] ? t[e] : t.borderRadius;
      }
      let sx = sw(0, 0.5, W),
        sP = sw(0.5, 0.95, V);
      function sw(t, e, i) {
        return s => (s < t ? 0 : s > e ? 1 : i(ep(t, e, s)));
      }
      function sT(t, e) {
        (t.min = e.min), (t.max = e.max);
      }
      function sb(t, e) {
        sT(t.x, e.x), sT(t.y, e.y);
      }
      function sS(t, e) {
        (t.translate = e.translate),
          (t.scale = e.scale),
          (t.originPoint = e.originPoint),
          (t.origin = e.origin);
      }
      function sA(t, e, i, s, n) {
        return (
          (t -= e), (t = s + (1 / i) * (t - s)), void 0 !== n && (t = s + (1 / n) * (t - s)), t
        );
      }
      function sV(t, e, [i, s, n], r, o) {
        !(function (t, e = 0, i = 1, s = 0.5, n, r = t, o = t) {
          if (
            (tn.test(e) && ((e = parseFloat(e)), (e = em(o.min, o.max, e / 100) - o.min)),
            'number' != typeof e)
          )
            return;
          let a = em(r.min, r.max, s);
          t === r && (a -= e), (t.min = sA(t.min, e, i, a, n)), (t.max = sA(t.max, e, i, a, n));
        })(t, e[i], e[s], e[n], e.scale, r, o);
      }
      let sM = ['x', 'scaleX', 'originX'],
        sE = ['y', 'scaleY', 'originY'];
      function sC(t, e, i, s) {
        sV(t.x, e, sM, i ? i.x : void 0, s ? s.x : void 0),
          sV(t.y, e, sE, i ? i.y : void 0, s ? s.y : void 0);
      }
      function sk(t) {
        return 0 === t.translate && 1 === t.scale;
      }
      function sR(t) {
        return sk(t.x) && sk(t.y);
      }
      function sD(t, e) {
        return t.min === e.min && t.max === e.max;
      }
      function sL(t, e) {
        return Math.round(t.min) === Math.round(e.min) && Math.round(t.max) === Math.round(e.max);
      }
      function sj(t, e) {
        return sL(t.x, e.x) && sL(t.y, e.y);
      }
      function sF(t) {
        return iE(t.x) / iE(t.y);
      }
      function sB(t, e) {
        return (
          t.translate === e.translate && t.scale === e.scale && t.originPoint === e.originPoint
        );
      }
      class sO {
        constructor() {
          this.members = [];
        }
        add(t) {
          e_(this.members, t), t.scheduleRender();
        }
        remove(t) {
          if (
            (eZ(this.members, t), t === this.prevLead && (this.prevLead = void 0), t === this.lead)
          ) {
            let t = this.members[this.members.length - 1];
            t && this.promote(t);
          }
        }
        relegate(t) {
          let e;
          let i = this.members.findIndex(e => t === e);
          if (0 === i) return !1;
          for (let t = i; t >= 0; t--) {
            let i = this.members[t];
            if (!1 !== i.isPresent) {
              e = i;
              break;
            }
          }
          return !!e && (this.promote(e), !0);
        }
        promote(t, e) {
          let i = this.lead;
          if (t !== i && ((this.prevLead = i), (this.lead = t), t.show(), i)) {
            i.instance && i.scheduleRender(),
              t.scheduleRender(),
              (t.resumeFrom = i),
              e && (t.resumeFrom.preserveOpacity = !0),
              i.snapshot &&
                ((t.snapshot = i.snapshot),
                (t.snapshot.latestValues = i.animationValues || i.latestValues)),
              t.root && t.root.isUpdating && (t.isLayoutDirty = !0);
            let { crossfade: s } = t.options;
            !1 === s && i.hide();
          }
        }
        exitAnimationComplete() {
          this.members.forEach(t => {
            let { options: e, resumingFrom: i } = t;
            e.onExitComplete && e.onExitComplete(),
              i && i.options.onExitComplete && i.options.onExitComplete();
          });
        }
        scheduleRender() {
          this.members.forEach(t => {
            t.instance && t.scheduleRender(!1);
          });
        }
        removeLeadSnapshot() {
          this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
        }
      }
      let sI = (t, e) => t.depth - e.depth;
      class sU {
        constructor() {
          (this.children = []), (this.isDirty = !1);
        }
        add(t) {
          e_(this.children, t), (this.isDirty = !0);
        }
        remove(t) {
          eZ(this.children, t), (this.isDirty = !0);
        }
        forEach(t) {
          this.isDirty && this.children.sort(sI), (this.isDirty = !1), this.children.forEach(t);
        }
      }
      function s$(t) {
        let e = e9(t) ? t.get() : t;
        return eG(e) ? e.toValue() : e;
      }
      let sN = {
          type: 'projectionFrame',
          totalNodes: 0,
          resolvedTargetDeltas: 0,
          recalculatedProjection: 0,
        },
        sW = 'undefined' != typeof window && void 0 !== window.MotionDebug,
        sz = ['', 'X', 'Y', 'Z'],
        sH = { visibility: 'hidden' },
        sY = 0;
      function sK(t, e, i, s) {
        let { latestValues: n } = e;
        n[t] && ((i[t] = n[t]), e.setStaticValue(t, 0), s && (s[t] = 0));
      }
      function sX({
        attachResizeListener: t,
        defaultParent: e,
        measureScroll: i,
        checkIsScrollRoot: s,
        resetTransform: n,
      }) {
        return class {
          constructor(t = {}, i = null == e ? void 0 : e()) {
            (this.id = sY++),
              (this.animationId = 0),
              (this.children = new Set()),
              (this.options = {}),
              (this.isTreeAnimating = !1),
              (this.isAnimationBlocked = !1),
              (this.isLayoutDirty = !1),
              (this.isProjectionDirty = !1),
              (this.isSharedProjectionDirty = !1),
              (this.isTransformDirty = !1),
              (this.updateManuallyBlocked = !1),
              (this.updateBlockedByResize = !1),
              (this.isUpdating = !1),
              (this.isSVG = !1),
              (this.needsReset = !1),
              (this.shouldResetTransform = !1),
              (this.hasCheckedOptimisedAppear = !1),
              (this.treeScale = { x: 1, y: 1 }),
              (this.eventHandlers = new Map()),
              (this.hasTreeAnimated = !1),
              (this.updateScheduled = !1),
              (this.scheduleUpdate = () => this.update()),
              (this.projectionUpdateScheduled = !1),
              (this.checkUpdateFailed = () => {
                this.isUpdating && ((this.isUpdating = !1), this.clearAllSnapshots());
              }),
              (this.updateProjection = () => {
                (this.projectionUpdateScheduled = !1),
                  sW && (sN.totalNodes = sN.resolvedTargetDeltas = sN.recalculatedProjection = 0),
                  this.nodes.forEach(s_),
                  this.nodes.forEach(s5),
                  this.nodes.forEach(s3),
                  this.nodes.forEach(sZ),
                  sW && window.MotionDebug.record(sN);
              }),
              (this.resolvedRelativeTargetAt = 0),
              (this.hasProjected = !1),
              (this.isVisible = !0),
              (this.animationProgress = 0),
              (this.sharedNodes = new Map()),
              (this.latestValues = t),
              (this.root = i ? i.root || i : this),
              (this.path = i ? [...i.path, i] : []),
              (this.parent = i),
              (this.depth = i ? i.depth + 1 : 0);
            for (let t = 0; t < this.path.length; t++) this.path[t].shouldResetTransform = !0;
            this.root === this && (this.nodes = new sU());
          }
          addEventListener(t, e) {
            return (
              this.eventHandlers.has(t) || this.eventHandlers.set(t, new eJ()),
              this.eventHandlers.get(t).add(e)
            );
          }
          notifyListeners(t, ...e) {
            let i = this.eventHandlers.get(t);
            i && i.notify(...e);
          }
          hasListeners(t) {
            return this.eventHandlers.has(t);
          }
          mount(e, i = this.root.hasTreeAnimated) {
            if (this.instance) return;
            (this.isSVG = e instanceof SVGElement && 'svg' !== e.tagName), (this.instance = e);
            let { layoutId: s, layout: n, visualElement: r } = this.options;
            if (
              (r && !r.current && r.mount(e),
              this.root.nodes.add(this),
              this.parent && this.parent.children.add(this),
              i && (n || s) && (this.isLayoutDirty = !0),
              t)
            ) {
              let i;
              let s = () => (this.root.updateBlockedByResize = !1);
              t(e, () => {
                (this.root.updateBlockedByResize = !0),
                  i && i(),
                  (i = (function (t, e) {
                    let i = t3.now(),
                      s = ({ timestamp: e }) => {
                        let n = e - i;
                        n >= 250 && (k(s), t(n - 250));
                      };
                    return C.read(s, !0), () => k(s);
                  })(s, 250)),
                  sr.hasAnimatedSinceResize &&
                    ((sr.hasAnimatedSinceResize = !1), this.nodes.forEach(s2));
              });
            }
            s && this.root.registerSharedNode(s, this),
              !1 !== this.options.animate &&
                r &&
                (s || n) &&
                this.addEventListener(
                  'didUpdate',
                  ({ delta: t, hasLayoutChanged: e, hasRelativeTargetChanged: i, layout: s }) => {
                    if (this.isTreeAnimationBlocked()) {
                      (this.target = void 0), (this.relativeTarget = void 0);
                      return;
                    }
                    let n = this.options.transition || r.getDefaultTransition() || nt,
                      { onLayoutAnimationStart: o, onLayoutAnimationComplete: a } = r.getProps(),
                      l = !this.targetLayout || !sj(this.targetLayout, s) || i,
                      h = !e && i;
                    if (
                      this.options.layoutRoot ||
                      (this.resumeFrom && this.resumeFrom.instance) ||
                      h ||
                      (e && (l || !this.currentAnimation))
                    ) {
                      this.resumeFrom &&
                        ((this.resumingFrom = this.resumeFrom),
                        (this.resumingFrom.resumingFrom = void 0)),
                        this.setAnimationOrigin(t, h);
                      let e = { ...w(n, 'layout'), onPlay: o, onComplete: a };
                      (r.shouldReduceMotion || this.options.layoutRoot) &&
                        ((e.delay = 0), (e.type = !1)),
                        this.startAnimation(e);
                    } else
                      e || s2(this),
                        this.isLead() &&
                          this.options.onExitComplete &&
                          this.options.onExitComplete();
                    this.targetLayout = s;
                  }
                );
          }
          unmount() {
            this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
            let t = this.getStack();
            t && t.remove(this),
              this.parent && this.parent.children.delete(this),
              (this.instance = void 0),
              k(this.updateProjection);
          }
          blockUpdate() {
            this.updateManuallyBlocked = !0;
          }
          unblockUpdate() {
            this.updateManuallyBlocked = !1;
          }
          isUpdateBlocked() {
            return this.updateManuallyBlocked || this.updateBlockedByResize;
          }
          isTreeAnimationBlocked() {
            return (
              this.isAnimationBlocked || (this.parent && this.parent.isTreeAnimationBlocked()) || !1
            );
          }
          startUpdate() {
            !this.isUpdateBlocked() &&
              ((this.isUpdating = !0), this.nodes && this.nodes.forEach(s9), this.animationId++);
          }
          getTransformTemplate() {
            let { visualElement: t } = this.options;
            return t && t.getProps().transformTemplate;
          }
          willUpdate(t = !0) {
            if (((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked())) {
              this.options.onExitComplete && this.options.onExitComplete();
              return;
            }
            if (
              (window.MotionCancelOptimisedAnimation &&
                !this.hasCheckedOptimisedAppear &&
                (function t(e) {
                  if (((e.hasCheckedOptimisedAppear = !0), e.root === e)) return;
                  let { visualElement: i } = e.options;
                  if (!i) return;
                  let s = i.props[e3];
                  if (window.MotionHasOptimisedAnimation(s, 'transform')) {
                    let { layout: t, layoutId: i } = e.options;
                    window.MotionCancelOptimisedAnimation(s, 'transform', C, !(t || i));
                  }
                  let { parent: n } = e;
                  n && !n.hasCheckedOptimisedAppear && t(n);
                })(this),
              this.root.isUpdating || this.root.startUpdate(),
              this.isLayoutDirty)
            )
              return;
            this.isLayoutDirty = !0;
            for (let t = 0; t < this.path.length; t++) {
              let e = this.path[t];
              (e.shouldResetTransform = !0),
                e.updateScroll('snapshot'),
                e.options.layoutRoot && e.willUpdate(!1);
            }
            let { layoutId: e, layout: i } = this.options;
            if (void 0 === e && !i) return;
            let s = this.getTransformTemplate();
            (this.prevTransformTemplateValue = s ? s(this.latestValues, '') : void 0),
              this.updateSnapshot(),
              t && this.notifyListeners('willUpdate');
          }
          update() {
            if (((this.updateScheduled = !1), this.isUpdateBlocked())) {
              this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(sQ);
              return;
            }
            this.isUpdating || this.nodes.forEach(s0),
              (this.isUpdating = !1),
              this.nodes.forEach(s1),
              this.nodes.forEach(sG),
              this.nodes.forEach(sq),
              this.clearAllSnapshots();
            let t = t3.now();
            (R.delta = J(0, 1e3 / 60, t - R.timestamp)),
              (R.timestamp = t),
              (R.isProcessing = !0),
              D.update.process(R),
              D.preRender.process(R),
              D.render.process(R),
              (R.isProcessing = !1);
          }
          didUpdate() {
            this.updateScheduled || ((this.updateScheduled = !0), sh.read(this.scheduleUpdate));
          }
          clearAllSnapshots() {
            this.nodes.forEach(sJ), this.sharedNodes.forEach(s4);
          }
          scheduleUpdateProjection() {
            this.projectionUpdateScheduled ||
              ((this.projectionUpdateScheduled = !0), C.preRender(this.updateProjection, !1, !0));
          }
          scheduleCheckAfterUnmount() {
            C.postRender(() => {
              this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed();
            });
          }
          updateSnapshot() {
            !this.snapshot && this.instance && (this.snapshot = this.measure());
          }
          updateLayout() {
            if (
              !this.instance ||
              (this.updateScroll(),
              !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty)
            )
              return;
            if (this.resumeFrom && !this.resumeFrom.instance)
              for (let t = 0; t < this.path.length; t++) this.path[t].updateScroll();
            let t = this.layout;
            (this.layout = this.measure(!1)),
              (this.layoutCorrected = iN()),
              (this.isLayoutDirty = !1),
              (this.projectionDelta = void 0),
              this.notifyListeners('measure', this.layout.layoutBox);
            let { visualElement: e } = this.options;
            e && e.notify('LayoutMeasure', this.layout.layoutBox, t ? t.layoutBox : void 0);
          }
          updateScroll(t = 'measure') {
            let e = !!(this.options.layoutScroll && this.instance);
            if (
              (this.scroll &&
                this.scroll.animationId === this.root.animationId &&
                this.scroll.phase === t &&
                (e = !1),
              e)
            ) {
              let e = s(this.instance);
              this.scroll = {
                animationId: this.root.animationId,
                phase: t,
                isRoot: e,
                offset: i(this.instance),
                wasRoot: this.scroll ? this.scroll.isRoot : e,
              };
            }
          }
          resetTransform() {
            if (!n) return;
            let t =
                this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout,
              e = this.projectionDelta && !sR(this.projectionDelta),
              i = this.getTransformTemplate(),
              s = i ? i(this.latestValues, '') : void 0,
              r = s !== this.prevTransformTemplateValue;
            t &&
              (e || iK(this.latestValues) || r) &&
              (n(this.instance, s), (this.shouldResetTransform = !1), this.scheduleRender());
          }
          measure(t = !0) {
            var e;
            let i = this.measurePageBox(),
              s = this.removeElementScroll(i);
            return (
              t && (s = this.removeTransform(s)),
              ns((e = s).x),
              ns(e.y),
              {
                animationId: this.root.animationId,
                measuredBox: i,
                layoutBox: s,
                latestValues: {},
                source: this.id,
              }
            );
          }
          measurePageBox() {
            var t;
            let { visualElement: e } = this.options;
            if (!e) return iN();
            let i = e.measureViewportBox();
            if (
              !(
                (null === (t = this.scroll) || void 0 === t ? void 0 : t.wasRoot) ||
                this.path.some(nr)
              )
            ) {
              let { scroll: t } = this.root;
              t && (iZ(i.x, t.offset.x), iZ(i.y, t.offset.y));
            }
            return i;
          }
          removeElementScroll(t) {
            var e;
            let i = iN();
            if ((sb(i, t), null === (e = this.scroll) || void 0 === e ? void 0 : e.wasRoot))
              return i;
            for (let e = 0; e < this.path.length; e++) {
              let s = this.path[e],
                { scroll: n, options: r } = s;
              s !== this.root &&
                n &&
                r.layoutScroll &&
                (n.wasRoot && sb(i, t), iZ(i.x, n.offset.x), iZ(i.y, n.offset.y));
            }
            return i;
          }
          applyTransform(t, e = !1) {
            let i = iN();
            sb(i, t);
            for (let t = 0; t < this.path.length; t++) {
              let s = this.path[t];
              !e &&
                s.options.layoutScroll &&
                s.scroll &&
                s !== s.root &&
                iQ(i, { x: -s.scroll.offset.x, y: -s.scroll.offset.y }),
                iK(s.latestValues) && iQ(i, s.latestValues);
            }
            return iK(this.latestValues) && iQ(i, this.latestValues), i;
          }
          removeTransform(t) {
            let e = iN();
            sb(e, t);
            for (let t = 0; t < this.path.length; t++) {
              let i = this.path[t];
              if (!i.instance || !iK(i.latestValues)) continue;
              iY(i.latestValues) && i.updateSnapshot();
              let s = iN();
              sb(s, i.measurePageBox()),
                sC(e, i.latestValues, i.snapshot ? i.snapshot.layoutBox : void 0, s);
            }
            return iK(this.latestValues) && sC(e, this.latestValues), e;
          }
          setTargetDelta(t) {
            (this.targetDelta = t),
              this.root.scheduleUpdateProjection(),
              (this.isProjectionDirty = !0);
          }
          setOptions(t) {
            this.options = {
              ...this.options,
              ...t,
              crossfade: void 0 === t.crossfade || t.crossfade,
            };
          }
          clearMeasurements() {
            (this.scroll = void 0),
              (this.layout = void 0),
              (this.snapshot = void 0),
              (this.prevTransformTemplateValue = void 0),
              (this.targetDelta = void 0),
              (this.target = void 0),
              (this.isLayoutDirty = !1);
          }
          forceRelativeParentToResolveTarget() {
            this.relativeParent &&
              this.relativeParent.resolvedRelativeTargetAt !== R.timestamp &&
              this.relativeParent.resolveTargetDelta(!0);
          }
          resolveTargetDelta(t = !1) {
            var e, i, s, n;
            let r = this.getLead();
            this.isProjectionDirty || (this.isProjectionDirty = r.isProjectionDirty),
              this.isTransformDirty || (this.isTransformDirty = r.isTransformDirty),
              this.isSharedProjectionDirty ||
                (this.isSharedProjectionDirty = r.isSharedProjectionDirty);
            let o = !!this.resumingFrom || this !== r;
            if (
              !(
                t ||
                (o && this.isSharedProjectionDirty) ||
                this.isProjectionDirty ||
                (null === (e = this.parent) || void 0 === e ? void 0 : e.isProjectionDirty) ||
                this.attemptToResolveRelativeTarget ||
                this.root.updateBlockedByResize
              )
            )
              return;
            let { layout: a, layoutId: l } = this.options;
            if (this.layout && (a || l)) {
              if (
                ((this.resolvedRelativeTargetAt = R.timestamp),
                !this.targetDelta && !this.relativeTarget)
              ) {
                let t = this.getClosestProjectingParent();
                t && t.layout && 1 !== this.animationProgress
                  ? ((this.relativeParent = t),
                    this.forceRelativeParentToResolveTarget(),
                    (this.relativeTarget = iN()),
                    (this.relativeTargetOrigin = iN()),
                    iL(this.relativeTargetOrigin, this.layout.layoutBox, t.layout.layoutBox),
                    sb(this.relativeTarget, this.relativeTargetOrigin))
                  : (this.relativeParent = this.relativeTarget = void 0);
              }
              if (this.relativeTarget || this.targetDelta) {
                if (
                  ((this.target || ((this.target = iN()), (this.targetWithTransforms = iN())),
                  this.relativeTarget &&
                    this.relativeTargetOrigin &&
                    this.relativeParent &&
                    this.relativeParent.target)
                    ? (this.forceRelativeParentToResolveTarget(),
                      (i = this.target),
                      (s = this.relativeTarget),
                      (n = this.relativeParent.target),
                      iR(i.x, s.x, n.x),
                      iR(i.y, s.y, n.y))
                    : this.targetDelta
                      ? (this.resumingFrom
                          ? (this.target = this.applyTransform(this.layout.layoutBox))
                          : sb(this.target, this.layout.layoutBox),
                        i_(this.target, this.targetDelta))
                      : sb(this.target, this.layout.layoutBox),
                  this.attemptToResolveRelativeTarget)
                ) {
                  this.attemptToResolveRelativeTarget = !1;
                  let t = this.getClosestProjectingParent();
                  t &&
                  !!t.resumingFrom == !!this.resumingFrom &&
                  !t.options.layoutScroll &&
                  t.target &&
                  1 !== this.animationProgress
                    ? ((this.relativeParent = t),
                      this.forceRelativeParentToResolveTarget(),
                      (this.relativeTarget = iN()),
                      (this.relativeTargetOrigin = iN()),
                      iL(this.relativeTargetOrigin, this.target, t.target),
                      sb(this.relativeTarget, this.relativeTargetOrigin))
                    : (this.relativeParent = this.relativeTarget = void 0);
                }
                sW && sN.resolvedTargetDeltas++;
              }
            }
          }
          getClosestProjectingParent() {
            return !this.parent || iY(this.parent.latestValues) || iX(this.parent.latestValues)
              ? void 0
              : this.parent.isProjecting()
                ? this.parent
                : this.parent.getClosestProjectingParent();
          }
          isProjecting() {
            return !!(
              (this.relativeTarget || this.targetDelta || this.options.layoutRoot) &&
              this.layout
            );
          }
          calcProjection() {
            var t;
            let e = this.getLead(),
              i = !!this.resumingFrom || this !== e,
              s = !0;
            if (
              ((this.isProjectionDirty ||
                (null === (t = this.parent) || void 0 === t ? void 0 : t.isProjectionDirty)) &&
                (s = !1),
              i && (this.isSharedProjectionDirty || this.isTransformDirty) && (s = !1),
              this.resolvedRelativeTargetAt === R.timestamp && (s = !1),
              s)
            )
              return;
            let { layout: n, layoutId: r } = this.options;
            if (
              ((this.isTreeAnimating = !!(
                (this.parent && this.parent.isTreeAnimating) ||
                this.currentAnimation ||
                this.pendingAnimation
              )),
              this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0),
              !this.layout || !(n || r))
            )
              return;
            sb(this.layoutCorrected, this.layout.layoutBox);
            let o = this.treeScale.x,
              a = this.treeScale.y;
            !(function (t, e, i, s = !1) {
              let n, r;
              let o = i.length;
              if (o) {
                e.x = e.y = 1;
                for (let a = 0; a < o; a++) {
                  r = (n = i[a]).projectionDelta;
                  let { visualElement: o } = n.options;
                  (!o || !o.props.style || 'contents' !== o.props.style.display) &&
                    (s &&
                      n.options.layoutScroll &&
                      n.scroll &&
                      n !== n.root &&
                      iQ(t, { x: -n.scroll.offset.x, y: -n.scroll.offset.y }),
                    r && ((e.x *= r.x.scale), (e.y *= r.y.scale), i_(t, r)),
                    s && iK(n.latestValues) && iQ(t, n.latestValues));
                }
                e.x < 1.0000000000001 && e.x > 0.999999999999 && (e.x = 1),
                  e.y < 1.0000000000001 && e.y > 0.999999999999 && (e.y = 1);
              }
            })(this.layoutCorrected, this.treeScale, this.path, i),
              e.layout &&
                !e.target &&
                (1 !== this.treeScale.x || 1 !== this.treeScale.y) &&
                ((e.target = e.layout.layoutBox), (e.targetWithTransforms = iN()));
            let { target: l } = e;
            if (!l) {
              this.prevProjectionDelta && (this.createProjectionDeltas(), this.scheduleRender());
              return;
            }
            this.projectionDelta && this.prevProjectionDelta
              ? (sS(this.prevProjectionDelta.x, this.projectionDelta.x),
                sS(this.prevProjectionDelta.y, this.projectionDelta.y))
              : this.createProjectionDeltas(),
              ik(this.projectionDelta, this.layoutCorrected, l, this.latestValues),
              (this.treeScale.x === o &&
                this.treeScale.y === a &&
                sB(this.projectionDelta.x, this.prevProjectionDelta.x) &&
                sB(this.projectionDelta.y, this.prevProjectionDelta.y)) ||
                ((this.hasProjected = !0),
                this.scheduleRender(),
                this.notifyListeners('projectionUpdate', l)),
              sW && sN.recalculatedProjection++;
          }
          hide() {
            this.isVisible = !1;
          }
          show() {
            this.isVisible = !0;
          }
          scheduleRender(t = !0) {
            var e;
            if (
              (null === (e = this.options.visualElement) || void 0 === e || e.scheduleRender(), t)
            ) {
              let t = this.getStack();
              t && t.scheduleRender();
            }
            this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0);
          }
          createProjectionDeltas() {
            (this.prevProjectionDelta = iU()),
              (this.projectionDelta = iU()),
              (this.projectionDeltaWithTransform = iU());
          }
          setAnimationOrigin(t, e = !1) {
            let i;
            let s = this.snapshot,
              n = s ? s.latestValues : {},
              r = { ...this.latestValues },
              o = iU();
            (this.relativeParent && this.relativeParent.options.layoutRoot) ||
              (this.relativeTarget = this.relativeTargetOrigin = void 0),
              (this.attemptToResolveRelativeTarget = !e);
            let a = iN(),
              l = (s ? s.source : void 0) !== (this.layout ? this.layout.source : void 0),
              h = this.getStack(),
              u = !h || h.members.length <= 1,
              d = !!(l && !u && !0 === this.options.crossfade && !this.path.some(s7));
            (this.animationProgress = 0),
              (this.mixTargetDelta = e => {
                let s = e / 1e3;
                if (
                  (s6(o.x, t.x, s),
                  s6(o.y, t.y, s),
                  this.setTargetDelta(o),
                  this.relativeTarget &&
                    this.relativeTargetOrigin &&
                    this.layout &&
                    this.relativeParent &&
                    this.relativeParent.layout)
                ) {
                  var h, c, p, m;
                  iL(a, this.layout.layoutBox, this.relativeParent.layout.layoutBox),
                    (p = this.relativeTarget),
                    (m = this.relativeTargetOrigin),
                    s8(p.x, m.x, a.x, s),
                    s8(p.y, m.y, a.y, s),
                    i &&
                      ((h = this.relativeTarget), (c = i), sD(h.x, c.x) && sD(h.y, c.y)) &&
                      (this.isProjectionDirty = !1),
                    i || (i = iN()),
                    sb(i, this.relativeTarget);
                }
                l &&
                  ((this.animationValues = r),
                  (function (t, e, i, s, n, r) {
                    n
                      ? ((t.opacity = em(0, void 0 !== i.opacity ? i.opacity : 1, sx(s))),
                        (t.opacityExit = em(void 0 !== e.opacity ? e.opacity : 1, 0, sP(s))))
                      : r &&
                        (t.opacity = em(
                          void 0 !== e.opacity ? e.opacity : 1,
                          void 0 !== i.opacity ? i.opacity : 1,
                          s
                        ));
                    for (let n = 0; n < sf; n++) {
                      let r = `border${sm[n]}Radius`,
                        o = sy(e, r),
                        a = sy(i, r);
                      (void 0 !== o || void 0 !== a) &&
                        (o || (o = 0),
                        a || (a = 0),
                        0 === o || 0 === a || sg(o) === sg(a)
                          ? ((t[r] = Math.max(em(sv(o), sv(a), s), 0)),
                            (tn.test(a) || tn.test(o)) && (t[r] += '%'))
                          : (t[r] = a));
                    }
                    (e.rotate || i.rotate) && (t.rotate = em(e.rotate || 0, i.rotate || 0, s));
                  })(r, n, this.latestValues, s, d, u)),
                  this.root.scheduleUpdateProjection(),
                  this.scheduleRender(),
                  (this.animationProgress = s);
              }),
              this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
          }
          startAnimation(t) {
            this.notifyListeners('animationStart'),
              this.currentAnimation && this.currentAnimation.stop(),
              this.resumingFrom &&
                this.resumingFrom.currentAnimation &&
                this.resumingFrom.currentAnimation.stop(),
              this.pendingAnimation && (k(this.pendingAnimation), (this.pendingAnimation = void 0)),
              (this.pendingAnimation = C.update(() => {
                (sr.hasAnimatedSinceResize = !0),
                  (this.currentAnimation = (function (t, e, i) {
                    let s = e9(0) ? 0 : e2(0);
                    return s.start(eX('', s, 1e3, i)), s.animation;
                  })(0, 0, {
                    ...t,
                    onUpdate: e => {
                      this.mixTargetDelta(e), t.onUpdate && t.onUpdate(e);
                    },
                    onComplete: () => {
                      t.onComplete && t.onComplete(), this.completeAnimation();
                    },
                  })),
                  this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation),
                  (this.pendingAnimation = void 0);
              }));
          }
          completeAnimation() {
            this.resumingFrom &&
              ((this.resumingFrom.currentAnimation = void 0),
              (this.resumingFrom.preserveOpacity = void 0));
            let t = this.getStack();
            t && t.exitAnimationComplete(),
              (this.resumingFrom = this.currentAnimation = this.animationValues = void 0),
              this.notifyListeners('animationComplete');
          }
          finishAnimation() {
            this.currentAnimation &&
              (this.mixTargetDelta && this.mixTargetDelta(1e3), this.currentAnimation.stop()),
              this.completeAnimation();
          }
          applyTransformsToTarget() {
            let t = this.getLead(),
              { targetWithTransforms: e, target: i, layout: s, latestValues: n } = t;
            if (e && i && s) {
              if (
                this !== t &&
                this.layout &&
                s &&
                nn(this.options.animationType, this.layout.layoutBox, s.layoutBox)
              ) {
                i = this.target || iN();
                let e = iE(this.layout.layoutBox.x);
                (i.x.min = t.target.x.min), (i.x.max = i.x.min + e);
                let s = iE(this.layout.layoutBox.y);
                (i.y.min = t.target.y.min), (i.y.max = i.y.min + s);
              }
              sb(e, i), iQ(e, n), ik(this.projectionDeltaWithTransform, this.layoutCorrected, e, n);
            }
          }
          registerSharedNode(t, e) {
            this.sharedNodes.has(t) || this.sharedNodes.set(t, new sO()),
              this.sharedNodes.get(t).add(e);
            let i = e.options.initialPromotionConfig;
            e.promote({
              transition: i ? i.transition : void 0,
              preserveFollowOpacity:
                i && i.shouldPreserveFollowOpacity ? i.shouldPreserveFollowOpacity(e) : void 0,
            });
          }
          isLead() {
            let t = this.getStack();
            return !t || t.lead === this;
          }
          getLead() {
            var t;
            let { layoutId: e } = this.options;
            return (
              (e && (null === (t = this.getStack()) || void 0 === t ? void 0 : t.lead)) || this
            );
          }
          getPrevLead() {
            var t;
            let { layoutId: e } = this.options;
            return e
              ? null === (t = this.getStack()) || void 0 === t
                ? void 0
                : t.prevLead
              : void 0;
          }
          getStack() {
            let { layoutId: t } = this.options;
            if (t) return this.root.sharedNodes.get(t);
          }
          promote({ needsReset: t, transition: e, preserveFollowOpacity: i } = {}) {
            let s = this.getStack();
            s && s.promote(this, i),
              t && ((this.projectionDelta = void 0), (this.needsReset = !0)),
              e && this.setOptions({ transition: e });
          }
          relegate() {
            let t = this.getStack();
            return !!t && t.relegate(this);
          }
          resetSkewAndRotation() {
            let { visualElement: t } = this.options;
            if (!t) return;
            let e = !1,
              { latestValues: i } = t;
            if (
              ((i.z || i.rotate || i.rotateX || i.rotateY || i.rotateZ || i.skewX || i.skewY) &&
                (e = !0),
              !e)
            )
              return;
            let s = {};
            i.z && sK('z', t, s, this.animationValues);
            for (let e = 0; e < sz.length; e++)
              sK(`rotate${sz[e]}`, t, s, this.animationValues),
                sK(`skew${sz[e]}`, t, s, this.animationValues);
            for (let e in (t.render(), s))
              t.setStaticValue(e, s[e]), this.animationValues && (this.animationValues[e] = s[e]);
            t.scheduleRender();
          }
          getProjectionStyles(t) {
            var e, i;
            if (!this.instance || this.isSVG) return;
            if (!this.isVisible) return sH;
            let s = { visibility: '' },
              n = this.getTransformTemplate();
            if (this.needsReset)
              return (
                (this.needsReset = !1),
                (s.opacity = ''),
                (s.pointerEvents = s$(null == t ? void 0 : t.pointerEvents) || ''),
                (s.transform = n ? n(this.latestValues, '') : 'none'),
                s
              );
            let r = this.getLead();
            if (!this.projectionDelta || !this.layout || !r.target) {
              let e = {};
              return (
                this.options.layoutId &&
                  ((e.opacity =
                    void 0 !== this.latestValues.opacity ? this.latestValues.opacity : 1),
                  (e.pointerEvents = s$(null == t ? void 0 : t.pointerEvents) || '')),
                this.hasProjected &&
                  !iK(this.latestValues) &&
                  ((e.transform = n ? n({}, '') : 'none'), (this.hasProjected = !1)),
                e
              );
            }
            let o = r.animationValues || r.latestValues;
            this.applyTransformsToTarget(),
              (s.transform = (function (t, e, i) {
                let s = '',
                  n = t.x.translate / e.x,
                  r = t.y.translate / e.y,
                  o = (null == i ? void 0 : i.z) || 0;
                if (
                  ((n || r || o) && (s = `translate3d(${n}px, ${r}px, ${o}px) `),
                  (1 !== e.x || 1 !== e.y) && (s += `scale(${1 / e.x}, ${1 / e.y}) `),
                  i)
                ) {
                  let {
                    transformPerspective: t,
                    rotate: e,
                    rotateX: n,
                    rotateY: r,
                    skewX: o,
                    skewY: a,
                  } = i;
                  t && (s = `perspective(${t}px) ${s}`),
                    e && (s += `rotate(${e}deg) `),
                    n && (s += `rotateX(${n}deg) `),
                    r && (s += `rotateY(${r}deg) `),
                    o && (s += `skewX(${o}deg) `),
                    a && (s += `skewY(${a}deg) `);
                }
                let a = t.x.scale * e.x,
                  l = t.y.scale * e.y;
                return (1 !== a || 1 !== l) && (s += `scale(${a}, ${l})`), s || 'none';
              })(this.projectionDeltaWithTransform, this.treeScale, o)),
              n && (s.transform = n(o, s.transform));
            let { x: a, y: l } = this.projectionDelta;
            for (let t in ((s.transformOrigin = `${100 * a.origin}% ${100 * l.origin}% 0`),
            r.animationValues
              ? (s.opacity =
                  r === this
                    ? null !==
                        (i =
                          null !== (e = o.opacity) && void 0 !== e
                            ? e
                            : this.latestValues.opacity) && void 0 !== i
                      ? i
                      : 1
                    : this.preserveOpacity
                      ? this.latestValues.opacity
                      : o.opacityExit)
              : (s.opacity =
                  r === this
                    ? void 0 !== o.opacity
                      ? o.opacity
                      : ''
                    : void 0 !== o.opacityExit
                      ? o.opacityExit
                      : 0),
            sl)) {
              if (void 0 === o[t]) continue;
              let { correct: e, applyTo: i } = sl[t],
                n = 'none' === s.transform ? o[t] : e(o[t], r);
              if (i) {
                let t = i.length;
                for (let e = 0; e < t; e++) s[i[e]] = n;
              } else s[t] = n;
            }
            return (
              this.options.layoutId &&
                (s.pointerEvents =
                  r === this ? s$(null == t ? void 0 : t.pointerEvents) || '' : 'none'),
              s
            );
          }
          clearSnapshot() {
            this.resumeFrom = this.snapshot = void 0;
          }
          resetTree() {
            this.root.nodes.forEach(t => {
              var e;
              return null === (e = t.currentAnimation) || void 0 === e ? void 0 : e.stop();
            }),
              this.root.nodes.forEach(sQ),
              this.root.sharedNodes.clear();
          }
        };
      }
      function sG(t) {
        t.updateLayout();
      }
      function sq(t) {
        var e;
        let i = (null === (e = t.resumeFrom) || void 0 === e ? void 0 : e.snapshot) || t.snapshot;
        if (t.isLead() && t.layout && i && t.hasListeners('didUpdate')) {
          let { layoutBox: e, measuredBox: s } = t.layout,
            { animationType: n } = t.options,
            r = i.source !== t.layout.source;
          'size' === n
            ? iW(t => {
                let s = r ? i.measuredBox[t] : i.layoutBox[t],
                  n = iE(s);
                (s.min = e[t].min), (s.max = s.min + n);
              })
            : nn(n, i.layoutBox, e) &&
              iW(s => {
                let n = r ? i.measuredBox[s] : i.layoutBox[s],
                  o = iE(e[s]);
                (n.max = n.min + o),
                  t.relativeTarget &&
                    !t.currentAnimation &&
                    ((t.isProjectionDirty = !0),
                    (t.relativeTarget[s].max = t.relativeTarget[s].min + o));
              });
          let o = iU();
          ik(o, e, i.layoutBox);
          let a = iU();
          r ? ik(a, t.applyTransform(s, !0), i.measuredBox) : ik(a, e, i.layoutBox);
          let l = !sR(o),
            h = !1;
          if (!t.resumeFrom) {
            let s = t.getClosestProjectingParent();
            if (s && !s.resumeFrom) {
              let { snapshot: n, layout: r } = s;
              if (n && r) {
                let o = iN();
                iL(o, i.layoutBox, n.layoutBox);
                let a = iN();
                iL(a, e, r.layoutBox),
                  sj(o, a) || (h = !0),
                  s.options.layoutRoot &&
                    ((t.relativeTarget = a), (t.relativeTargetOrigin = o), (t.relativeParent = s));
              }
            }
          }
          t.notifyListeners('didUpdate', {
            layout: e,
            snapshot: i,
            delta: a,
            layoutDelta: o,
            hasLayoutChanged: l,
            hasRelativeTargetChanged: h,
          });
        } else if (t.isLead()) {
          let { onExitComplete: e } = t.options;
          e && e();
        }
        t.options.transition = void 0;
      }
      function s_(t) {
        sW && sN.totalNodes++,
          t.parent &&
            (t.isProjecting() || (t.isProjectionDirty = t.parent.isProjectionDirty),
            t.isSharedProjectionDirty ||
              (t.isSharedProjectionDirty = !!(
                t.isProjectionDirty ||
                t.parent.isProjectionDirty ||
                t.parent.isSharedProjectionDirty
              )),
            t.isTransformDirty || (t.isTransformDirty = t.parent.isTransformDirty));
      }
      function sZ(t) {
        t.isProjectionDirty = t.isSharedProjectionDirty = t.isTransformDirty = !1;
      }
      function sJ(t) {
        t.clearSnapshot();
      }
      function sQ(t) {
        t.clearMeasurements();
      }
      function s0(t) {
        t.isLayoutDirty = !1;
      }
      function s1(t) {
        let { visualElement: e } = t.options;
        e && e.getProps().onBeforeLayoutMeasure && e.notify('BeforeLayoutMeasure'),
          t.resetTransform();
      }
      function s2(t) {
        t.finishAnimation(),
          (t.targetDelta = t.relativeTarget = t.target = void 0),
          (t.isProjectionDirty = !0);
      }
      function s5(t) {
        t.resolveTargetDelta();
      }
      function s3(t) {
        t.calcProjection();
      }
      function s9(t) {
        t.resetSkewAndRotation();
      }
      function s4(t) {
        t.removeLeadSnapshot();
      }
      function s6(t, e, i) {
        (t.translate = em(e.translate, 0, i)),
          (t.scale = em(e.scale, 1, i)),
          (t.origin = e.origin),
          (t.originPoint = e.originPoint);
      }
      function s8(t, e, i, s) {
        (t.min = em(e.min, i.min, s)), (t.max = em(e.max, i.max, s));
      }
      function s7(t) {
        return t.animationValues && void 0 !== t.animationValues.opacityExit;
      }
      let nt = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
        ne = t =>
          'undefined' != typeof navigator &&
          navigator.userAgent &&
          navigator.userAgent.toLowerCase().includes(t),
        ni = ne('applewebkit/') && !ne('chrome/') ? Math.round : V;
      function ns(t) {
        (t.min = ni(t.min)), (t.max = ni(t.max));
      }
      function nn(t, e, i) {
        return 'position' === t || ('preserve-aspect' === t && !(0.2 >= Math.abs(sF(e) - sF(i))));
      }
      function nr(t) {
        var e;
        return t !== t.root && (null === (e = t.scroll) || void 0 === e ? void 0 : e.wasRoot);
      }
      let no = sX({
          attachResizeListener: (t, e) => ip(t, 'resize', e),
          measureScroll: () => ({
            x: document.documentElement.scrollLeft || document.body.scrollLeft,
            y: document.documentElement.scrollTop || document.body.scrollTop,
          }),
          checkIsScrollRoot: () => !0,
        }),
        na = { current: void 0 },
        nl = sX({
          measureScroll: t => ({ x: t.scrollLeft, y: t.scrollTop }),
          defaultParent: () => {
            if (!na.current) {
              let t = new no({});
              t.mount(window), t.setOptions({ layoutScroll: !0 }), (na.current = t);
            }
            return na.current;
          },
          resetTransform: (t, e) => {
            t.style.transform = void 0 !== e ? e : 'none';
          },
          checkIsScrollRoot: t => 'fixed' === window.getComputedStyle(t).position,
        });
      function nh(t, e) {
        let i = e ? 'onHoverStart' : 'onHoverEnd';
        return im(
          t.current,
          e ? 'pointerenter' : 'pointerleave',
          (s, n) => {
            if ('touch' === s.pointerType || iV()) return;
            let r = t.getProps();
            t.animationState && r.whileHover && t.animationState.setActive('whileHover', e);
            let o = r[i];
            o && C.postRender(() => o(s, n));
          },
          { passive: !t.getProps()[i] }
        );
      }
      class nu extends io {
        mount() {
          this.unmount = ec(nh(this.node, !0), nh(this.node, !1));
        }
        unmount() {}
      }
      class nd extends io {
        constructor() {
          super(...arguments), (this.isActive = !1);
        }
        onFocus() {
          let t = !1;
          try {
            t = this.node.current.matches(':focus-visible');
          } catch (e) {
            t = !0;
          }
          t &&
            this.node.animationState &&
            (this.node.animationState.setActive('whileFocus', !0), (this.isActive = !0));
        }
        onBlur() {
          this.isActive &&
            this.node.animationState &&
            (this.node.animationState.setActive('whileFocus', !1), (this.isActive = !1));
        }
        mount() {
          this.unmount = ec(
            ip(this.node.current, 'focus', () => this.onFocus()),
            ip(this.node.current, 'blur', () => this.onBlur())
          );
        }
        unmount() {}
      }
      let nc = (t, e) => !!e && (t === e || nc(t, e.parentElement));
      function np(t, e) {
        if (!e) return;
        let i = new PointerEvent('pointer' + t);
        e(i, id(i));
      }
      class nm extends io {
        constructor() {
          super(...arguments),
            (this.removeStartListeners = V),
            (this.removeEndListeners = V),
            (this.removeAccessibleListeners = V),
            (this.startPointerPress = (t, e) => {
              if (this.isPressing) return;
              this.removeEndListeners();
              let i = this.node.getProps(),
                s = im(
                  window,
                  'pointerup',
                  (t, e) => {
                    if (!this.checkPressEnd()) return;
                    let { onTap: i, onTapCancel: s, globalTapTarget: n } = this.node.getProps(),
                      r = n || nc(this.node.current, t.target) ? i : s;
                    r && C.update(() => r(t, e));
                  },
                  { passive: !(i.onTap || i.onPointerUp) }
                ),
                n = im(window, 'pointercancel', (t, e) => this.cancelPress(t, e), {
                  passive: !(i.onTapCancel || i.onPointerCancel),
                });
              (this.removeEndListeners = ec(s, n)), this.startPress(t, e);
            }),
            (this.startAccessiblePress = () => {
              let t = ip(this.node.current, 'keydown', t => {
                  'Enter' !== t.key ||
                    this.isPressing ||
                    (this.removeEndListeners(),
                    (this.removeEndListeners = ip(this.node.current, 'keyup', t => {
                      'Enter' === t.key &&
                        this.checkPressEnd() &&
                        np('up', (t, e) => {
                          let { onTap: i } = this.node.getProps();
                          i && C.postRender(() => i(t, e));
                        });
                    })),
                    np('down', (t, e) => {
                      this.startPress(t, e);
                    }));
                }),
                e = ip(this.node.current, 'blur', () => {
                  this.isPressing && np('cancel', (t, e) => this.cancelPress(t, e));
                });
              this.removeAccessibleListeners = ec(t, e);
            });
        }
        startPress(t, e) {
          this.isPressing = !0;
          let { onTapStart: i, whileTap: s } = this.node.getProps();
          s && this.node.animationState && this.node.animationState.setActive('whileTap', !0),
            i && C.postRender(() => i(t, e));
        }
        checkPressEnd() {
          return (
            this.removeEndListeners(),
            (this.isPressing = !1),
            this.node.getProps().whileTap &&
              this.node.animationState &&
              this.node.animationState.setActive('whileTap', !1),
            !iV()
          );
        }
        cancelPress(t, e) {
          if (!this.checkPressEnd()) return;
          let { onTapCancel: i } = this.node.getProps();
          i && C.postRender(() => i(t, e));
        }
        mount() {
          let t = this.node.getProps(),
            e = im(
              t.globalTapTarget ? window : this.node.current,
              'pointerdown',
              this.startPointerPress,
              { passive: !(t.onTapStart || t.onPointerStart) }
            ),
            i = ip(this.node.current, 'focus', this.startAccessiblePress);
          this.removeStartListeners = ec(e, i);
        }
        unmount() {
          this.removeStartListeners(), this.removeEndListeners(), this.removeAccessibleListeners();
        }
      }
      let nf = new WeakMap(),
        nv = new WeakMap(),
        ng = t => {
          let e = nf.get(t.target);
          e && e(t);
        },
        ny = t => {
          t.forEach(ng);
        },
        nx = { some: 0, all: 1 };
      class nP extends io {
        constructor() {
          super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1);
        }
        startObserver() {
          this.unmount();
          let { viewport: t = {} } = this.node.getProps(),
            { root: e, margin: i, amount: s = 'some', once: n } = t,
            r = {
              root: e ? e.current : void 0,
              rootMargin: i,
              threshold: 'number' == typeof s ? s : nx[s],
            };
          return (function (t, e, i) {
            let s = (function ({ root: t, ...e }) {
              let i = t || document;
              nv.has(i) || nv.set(i, {});
              let s = nv.get(i),
                n = JSON.stringify(e);
              return s[n] || (s[n] = new IntersectionObserver(ny, { root: t, ...e })), s[n];
            })(e);
            return (
              nf.set(t, i),
              s.observe(t),
              () => {
                nf.delete(t), s.unobserve(t);
              }
            );
          })(this.node.current, r, t => {
            let { isIntersecting: e } = t;
            if (this.isInView === e || ((this.isInView = e), n && !e && this.hasEnteredView))
              return;
            e && (this.hasEnteredView = !0),
              this.node.animationState && this.node.animationState.setActive('whileInView', e);
            let { onViewportEnter: i, onViewportLeave: s } = this.node.getProps(),
              r = e ? i : s;
            r && r(t);
          });
        }
        mount() {
          this.startObserver();
        }
        update() {
          if ('undefined' == typeof IntersectionObserver) return;
          let { props: t, prevProps: e } = this.node;
          ['amount', 'margin', 'root'].some(
            (function ({ viewport: t = {} }, { viewport: e = {} } = {}) {
              return i => t[i] !== e[i];
            })(t, e)
          ) && this.startObserver();
        }
        unmount() {}
      }
      let nw = (0, se.createContext)({
          transformPagePoint: t => t,
          isStatic: !1,
          reducedMotion: 'never',
        }),
        nT = (0, se.createContext)({}),
        nb = 'undefined' != typeof window,
        nS = nb ? se.useLayoutEffect : se.useEffect,
        nA = (0, se.createContext)({ strict: !1 });
      function nV(t) {
        return n(t.animate) || d.some(e => a(t[e]));
      }
      function nM(t) {
        return !!(nV(t) || t.variants);
      }
      function nE(t) {
        return Array.isArray(t) ? t.join(' ') : t;
      }
      let nC = {
          animation: [
            'animate',
            'variants',
            'whileHover',
            'whileTap',
            'exit',
            'whileInView',
            'whileFocus',
            'whileDrag',
          ],
          exit: ['exit'],
          drag: ['drag', 'dragControls'],
          focus: ['whileFocus'],
          hover: ['whileHover', 'onHoverStart', 'onHoverEnd'],
          tap: ['whileTap', 'onTap', 'onTapStart', 'onTapCancel'],
          pan: ['onPan', 'onPanStart', 'onPanSessionStart', 'onPanEnd'],
          inView: ['whileInView', 'onViewportEnter', 'onViewportLeave'],
          layout: ['layout', 'layoutId'],
        },
        nk = {};
      for (let t in nC) nk[t] = { isEnabled: e => nC[t].some(t => !!e[t]) };
      let nR = Symbol.for('motionComponentSymbol'),
        nD = [
          'animate',
          'circle',
          'defs',
          'desc',
          'ellipse',
          'g',
          'image',
          'line',
          'filter',
          'marker',
          'mask',
          'metadata',
          'path',
          'pattern',
          'polygon',
          'polyline',
          'rect',
          'stop',
          'switch',
          'symbol',
          'svg',
          'text',
          'tspan',
          'use',
          'view',
        ];
      function nL(t) {
        if ('string' != typeof t || t.includes('-'));
        else if (nD.indexOf(t) > -1 || /[A-Z]/u.test(t)) return !0;
        return !1;
      }
      function nj(t, { style: e, vars: i }, s, n) {
        for (let r in (Object.assign(t.style, e, n && n.getProjectionStyles(s)), i))
          t.style.setProperty(r, i[r]);
      }
      let nF = new Set([
        'baseFrequency',
        'diffuseConstant',
        'kernelMatrix',
        'kernelUnitLength',
        'keySplines',
        'keyTimes',
        'limitingConeAngle',
        'markerHeight',
        'markerWidth',
        'numOctaves',
        'targetX',
        'targetY',
        'surfaceScale',
        'specularConstant',
        'specularExponent',
        'stdDeviation',
        'tableValues',
        'viewBox',
        'gradientTransform',
        'pathLength',
        'startOffset',
        'textLength',
        'lengthAdjust',
      ]);
      function nB(t, e, i, s) {
        for (let i in (nj(t, e, void 0, s), e.attrs))
          t.setAttribute(nF.has(i) ? i : e5(i), e.attrs[i]);
      }
      function nO(t, { layout: e, layoutId: i }) {
        return (
          p.has(t) ||
          t.startsWith('origin') ||
          ((e || void 0 !== i) && (!!sl[t] || 'opacity' === t))
        );
      }
      function nI(t, e, i) {
        var s;
        let { style: n } = t,
          r = {};
        for (let o in n)
          (e9(n[o]) ||
            (e.style && e9(e.style[o])) ||
            nO(o, t) ||
            (null === (s = null == i ? void 0 : i.getValue(o)) || void 0 === s
              ? void 0
              : s.liveStyle) !== void 0) &&
            (r[o] = n[o]);
        return r;
      }
      function nU(t, e, i) {
        let s = nI(t, e, i);
        for (let i in t)
          (e9(t[i]) || e9(e[i])) &&
            (s[-1 !== c.indexOf(i) ? 'attr' + i.charAt(0).toUpperCase() + i.substring(1) : i] =
              t[i]);
        return s;
      }
      let n$ = t => (e, i) => {
          let s = (0, se.useContext)(nT),
            r = (0, se.useContext)(si),
            o = () =>
              (function (
                { scrapeMotionValuesFromProps: t, createRenderState: e, onMount: i },
                s,
                r,
                o
              ) {
                let a = {
                  latestValues: (function (t, e, i, s) {
                    let r = {},
                      o = s(t, {});
                    for (let t in o) r[t] = s$(o[t]);
                    let { initial: a, animate: h } = t,
                      u = nV(t),
                      d = nM(t);
                    e &&
                      d &&
                      !u &&
                      !1 !== t.inherit &&
                      (void 0 === a && (a = e.initial), void 0 === h && (h = e.animate));
                    let c = !!i && !1 === i.initial,
                      p = (c = c || !1 === a) ? h : a;
                    if (p && 'boolean' != typeof p && !n(p)) {
                      let e = Array.isArray(p) ? p : [p];
                      for (let i = 0; i < e.length; i++) {
                        let s = l(t, e[i]);
                        if (s) {
                          let { transitionEnd: t, transition: e, ...i } = s;
                          for (let t in i) {
                            let e = i[t];
                            if (Array.isArray(e)) {
                              let t = c ? e.length - 1 : 0;
                              e = e[t];
                            }
                            null !== e && (r[t] = e);
                          }
                          for (let e in t) r[e] = t[e];
                        }
                      }
                    }
                    return r;
                  })(s, r, o, t),
                  renderState: e(),
                };
                return i && (a.mount = t => i(s, t, a)), a;
              })(t, e, s, r);
          return i
            ? o()
            : (function (t) {
                let e = (0, se.useRef)(null);
                return null === e.current && (e.current = t()), e.current;
              })(o);
        },
        nN = () => ({ style: {}, transform: {}, transformOrigin: {}, vars: {} }),
        nW = () => ({ ...nN(), attrs: {} }),
        nz = (t, e) => (e && 'number' == typeof t ? e.transform(t) : t),
        nH = {
          x: 'translateX',
          y: 'translateY',
          z: 'translateZ',
          transformPerspective: 'perspective',
        },
        nY = c.length;
      function nK(t, e, i) {
        let { style: s, vars: n, transformOrigin: r } = t,
          o = !1,
          a = !1;
        for (let t in e) {
          let i = e[t];
          if (p.has(t)) {
            o = !0;
            continue;
          }
          if (X(t)) {
            n[t] = i;
            continue;
          }
          {
            let e = nz(i, t_[t]);
            t.startsWith('origin') ? ((a = !0), (r[t] = e)) : (s[t] = e);
          }
        }
        if (
          (!e.transform &&
            (o || i
              ? (s.transform = (function (t, e, i) {
                  let s = '',
                    n = !0;
                  for (let r = 0; r < nY; r++) {
                    let o = c[r],
                      a = t[o];
                    if (void 0 === a) continue;
                    let l = !0;
                    if (
                      !(l =
                        'number' == typeof a
                          ? a === (o.startsWith('scale') ? 1 : 0)
                          : 0 === parseFloat(a)) ||
                      i
                    ) {
                      let t = nz(a, t_[o]);
                      if (!l) {
                        n = !1;
                        let e = nH[o] || o;
                        s += `${e}(${t}) `;
                      }
                      i && (e[o] = t);
                    }
                  }
                  return (s = s.trim()), i ? (s = i(e, n ? '' : s)) : n && (s = 'none'), s;
                })(e, t.transform, i))
              : s.transform && (s.transform = 'none')),
          a)
        ) {
          let { originX: t = '50%', originY: e = '50%', originZ: i = 0 } = r;
          s.transformOrigin = `${t} ${e} ${i}`;
        }
      }
      function nX(t, e, i) {
        return 'string' == typeof t ? t : tr.transform(e + i * t);
      }
      let nG = { offset: 'stroke-dashoffset', array: 'stroke-dasharray' },
        nq = { offset: 'strokeDashoffset', array: 'strokeDasharray' };
      function n_(
        t,
        {
          attrX: e,
          attrY: i,
          attrScale: s,
          originX: n,
          originY: r,
          pathLength: o,
          pathSpacing: a = 1,
          pathOffset: l = 0,
          ...h
        },
        u,
        d
      ) {
        if ((nK(t, h, d), u)) {
          t.style.viewBox && (t.attrs.viewBox = t.style.viewBox);
          return;
        }
        (t.attrs = t.style), (t.style = {});
        let { attrs: c, style: p, dimensions: m } = t;
        c.transform && (m && (p.transform = c.transform), delete c.transform),
          m &&
            (void 0 !== n || void 0 !== r || p.transform) &&
            (p.transformOrigin = (function (t, e, i) {
              let s = nX(e, t.x, t.width),
                n = nX(i, t.y, t.height);
              return `${s} ${n}`;
            })(m, void 0 !== n ? n : 0.5, void 0 !== r ? r : 0.5)),
          void 0 !== e && (c.x = e),
          void 0 !== i && (c.y = i),
          void 0 !== s && (c.scale = s),
          void 0 !== o &&
            (function (t, e, i = 1, s = 0, n = !0) {
              t.pathLength = 1;
              let r = n ? nG : nq;
              t[r.offset] = tr.transform(-s);
              let o = tr.transform(e),
                a = tr.transform(i);
              t[r.array] = `${o} ${a}`;
            })(c, o, a, l, !1);
      }
      let nZ = t => 'string' == typeof t && 'svg' === t.toLowerCase(),
        nJ = {
          useVisualState: n$({
            scrapeMotionValuesFromProps: nU,
            createRenderState: nW,
            onMount: (t, e, { renderState: i, latestValues: s }) => {
              C.read(() => {
                try {
                  i.dimensions =
                    'function' == typeof e.getBBox ? e.getBBox() : e.getBoundingClientRect();
                } catch (t) {
                  i.dimensions = { x: 0, y: 0, width: 0, height: 0 };
                }
              }),
                C.render(() => {
                  n_(i, s, nZ(e.tagName), t.transformTemplate), nB(e, i);
                });
            },
          }),
        },
        nQ = { useVisualState: n$({ scrapeMotionValuesFromProps: nI, createRenderState: nN }) };
      function n0(t, e, i) {
        for (let s in e) e9(e[s]) || nO(s, i) || (t[s] = e[s]);
      }
      let n1 = new Set([
        'animate',
        'exit',
        'variants',
        'initial',
        'style',
        'values',
        'variants',
        'transition',
        'transformTemplate',
        'custom',
        'inherit',
        'onBeforeLayoutMeasure',
        'onAnimationStart',
        'onAnimationComplete',
        'onUpdate',
        'onDragStart',
        'onDrag',
        'onDragEnd',
        'onMeasureDragConstraints',
        'onDirectionLock',
        'onDragTransitionEnd',
        '_dragX',
        '_dragY',
        'onHoverStart',
        'onHoverEnd',
        'onViewportEnter',
        'onViewportLeave',
        'globalTapTarget',
        'ignoreStrict',
        'viewport',
      ]);
      function n2(t) {
        return (
          t.startsWith('while') ||
          (t.startsWith('drag') && 'draggable' !== t) ||
          t.startsWith('layout') ||
          t.startsWith('onTap') ||
          t.startsWith('onPan') ||
          t.startsWith('onLayout') ||
          n1.has(t)
        );
      }
      let n5 = t => !n2(t);
      try {
        !(function (t) {
          t && (n5 = e => (e.startsWith('on') ? !n2(e) : t(e)));
        })(require('@emotion/is-prop-valid').default);
      } catch (t) {}
      let n3 = { current: null },
        n9 = { current: !1 },
        n4 = new WeakMap(),
        n6 = [...tg, tF, tH],
        n8 = t => n6.find(tv(t)),
        n7 = [
          'AnimationStart',
          'AnimationComplete',
          'Update',
          'BeforeLayoutMeasure',
          'LayoutMeasure',
          'LayoutAnimationStart',
          'LayoutAnimationComplete',
        ];
      class rt {
        scrapeMotionValuesFromProps(t, e, i) {
          return {};
        }
        constructor(
          {
            parent: t,
            props: e,
            presenceContext: i,
            reducedMotionConfig: s,
            blockInitialAnimation: n,
            visualState: r,
          },
          o = {}
        ) {
          (this.current = null),
            (this.children = new Set()),
            (this.isVariantNode = !1),
            (this.isControllingVariants = !1),
            (this.shouldReduceMotion = null),
            (this.values = new Map()),
            (this.KeyframeResolver = tS),
            (this.features = {}),
            (this.valueSubscriptions = new Map()),
            (this.prevMotionValues = {}),
            (this.events = {}),
            (this.propEventSubscriptions = {}),
            (this.notifyUpdate = () => this.notify('Update', this.latestValues)),
            (this.render = () => {
              this.current &&
                (this.triggerBuild(),
                this.renderInstance(
                  this.current,
                  this.renderState,
                  this.props.style,
                  this.projection
                ));
            }),
            (this.renderScheduledAt = 0),
            (this.scheduleRender = () => {
              let t = t3.now();
              this.renderScheduledAt < t &&
                ((this.renderScheduledAt = t), C.render(this.render, !1, !0));
            });
          let { latestValues: a, renderState: l } = r;
          (this.latestValues = a),
            (this.baseTarget = { ...a }),
            (this.initialValues = e.initial ? { ...a } : {}),
            (this.renderState = l),
            (this.parent = t),
            (this.props = e),
            (this.presenceContext = i),
            (this.depth = t ? t.depth + 1 : 0),
            (this.reducedMotionConfig = s),
            (this.options = o),
            (this.blockInitialAnimation = !!n),
            (this.isControllingVariants = nV(e)),
            (this.isVariantNode = nM(e)),
            this.isVariantNode && (this.variantChildren = new Set()),
            (this.manuallyAnimateOnMount = !!(t && t.current));
          let { willChange: h, ...u } = this.scrapeMotionValuesFromProps(e, {}, this);
          for (let t in u) {
            let e = u[t];
            void 0 !== a[t] && e9(e) && e.set(a[t], !1);
          }
        }
        mount(t) {
          (this.current = t),
            n4.set(t, this),
            this.projection && !this.projection.instance && this.projection.mount(t),
            this.parent &&
              this.isVariantNode &&
              !this.isControllingVariants &&
              (this.removeFromVariantTree = this.parent.addVariantChild(this)),
            this.values.forEach((t, e) => this.bindToMotionValue(e, t)),
            n9.current ||
              (function () {
                if (((n9.current = !0), nb)) {
                  if (window.matchMedia) {
                    let t = window.matchMedia('(prefers-reduced-motion)'),
                      e = () => (n3.current = t.matches);
                    t.addListener(e), e();
                  } else n3.current = !1;
                }
              })(),
            (this.shouldReduceMotion =
              'never' !== this.reducedMotionConfig &&
              ('always' === this.reducedMotionConfig || n3.current)),
            this.parent && this.parent.children.add(this),
            this.update(this.props, this.presenceContext);
        }
        unmount() {
          for (let t in (n4.delete(this.current),
          this.projection && this.projection.unmount(),
          k(this.notifyUpdate),
          k(this.render),
          this.valueSubscriptions.forEach(t => t()),
          this.valueSubscriptions.clear(),
          this.removeFromVariantTree && this.removeFromVariantTree(),
          this.parent && this.parent.children.delete(this),
          this.events))
            this.events[t].clear();
          for (let t in this.features) {
            let e = this.features[t];
            e && (e.unmount(), (e.isMounted = !1));
          }
          this.current = null;
        }
        bindToMotionValue(t, e) {
          let i;
          this.valueSubscriptions.has(t) && this.valueSubscriptions.get(t)();
          let s = p.has(t),
            n = e.on('change', e => {
              (this.latestValues[t] = e),
                this.props.onUpdate && C.preRender(this.notifyUpdate),
                s && this.projection && (this.projection.isTransformDirty = !0);
            }),
            r = e.on('renderRequest', this.scheduleRender);
          window.MotionCheckAppearSync && (i = window.MotionCheckAppearSync(this, t, e)),
            this.valueSubscriptions.set(t, () => {
              n(), r(), i && i(), e.owner && e.stop();
            });
        }
        sortNodePosition(t) {
          return this.current && this.sortInstanceNodePosition && this.type === t.type
            ? this.sortInstanceNodePosition(this.current, t.current)
            : 0;
        }
        updateFeatures() {
          let t = 'animation';
          for (t in nk) {
            let e = nk[t];
            if (!e) continue;
            let { isEnabled: i, Feature: s } = e;
            if (
              (!this.features[t] && s && i(this.props) && (this.features[t] = new s(this)),
              this.features[t])
            ) {
              let e = this.features[t];
              e.isMounted ? e.update() : (e.mount(), (e.isMounted = !0));
            }
          }
        }
        triggerBuild() {
          this.build(this.renderState, this.latestValues, this.props);
        }
        measureViewportBox() {
          return this.current ? this.measureInstanceViewportBox(this.current, this.props) : iN();
        }
        getStaticValue(t) {
          return this.latestValues[t];
        }
        setStaticValue(t, e) {
          this.latestValues[t] = e;
        }
        update(t, e) {
          (t.transformTemplate || this.props.transformTemplate) && this.scheduleRender(),
            (this.prevProps = this.props),
            (this.props = t),
            (this.prevPresenceContext = this.presenceContext),
            (this.presenceContext = e);
          for (let e = 0; e < n7.length; e++) {
            let i = n7[e];
            this.propEventSubscriptions[i] &&
              (this.propEventSubscriptions[i](), delete this.propEventSubscriptions[i]);
            let s = t['on' + i];
            s && (this.propEventSubscriptions[i] = this.on(i, s));
          }
          (this.prevMotionValues = (function (t, e, i) {
            for (let s in e) {
              let n = e[s],
                r = i[s];
              if (e9(n)) t.addValue(s, n);
              else if (e9(r)) t.addValue(s, e2(n, { owner: t }));
              else if (r !== n) {
                if (t.hasValue(s)) {
                  let e = t.getValue(s);
                  !0 === e.liveStyle ? e.jump(n) : e.hasAnimated || e.set(n);
                } else {
                  let e = t.getStaticValue(s);
                  t.addValue(s, e2(void 0 !== e ? e : n, { owner: t }));
                }
              }
            }
            for (let s in i) void 0 === e[s] && t.removeValue(s);
            return e;
          })(
            this,
            this.scrapeMotionValuesFromProps(t, this.prevProps, this),
            this.prevMotionValues
          )),
            this.handleChildMotionValue && this.handleChildMotionValue();
        }
        getProps() {
          return this.props;
        }
        getVariant(t) {
          return this.props.variants ? this.props.variants[t] : void 0;
        }
        getDefaultTransition() {
          return this.props.transition;
        }
        getTransformPagePoint() {
          return this.props.transformPagePoint;
        }
        getClosestVariantNode() {
          return this.isVariantNode
            ? this
            : this.parent
              ? this.parent.getClosestVariantNode()
              : void 0;
        }
        addVariantChild(t) {
          let e = this.getClosestVariantNode();
          if (e)
            return e.variantChildren && e.variantChildren.add(t), () => e.variantChildren.delete(t);
        }
        addValue(t, e) {
          let i = this.values.get(t);
          e !== i &&
            (i && this.removeValue(t),
            this.bindToMotionValue(t, e),
            this.values.set(t, e),
            (this.latestValues[t] = e.get()));
        }
        removeValue(t) {
          this.values.delete(t);
          let e = this.valueSubscriptions.get(t);
          e && (e(), this.valueSubscriptions.delete(t)),
            delete this.latestValues[t],
            this.removeValueFromRenderState(t, this.renderState);
        }
        hasValue(t) {
          return this.values.has(t);
        }
        getValue(t, e) {
          if (this.props.values && this.props.values[t]) return this.props.values[t];
          let i = this.values.get(t);
          return (
            void 0 === i &&
              void 0 !== e &&
              ((i = e2(null === e ? void 0 : e, { owner: this })), this.addValue(t, i)),
            i
          );
        }
        readValue(t, e) {
          var i;
          let s =
            void 0 === this.latestValues[t] && this.current
              ? null !== (i = this.getBaseTargetFromProps(this.props, t)) && void 0 !== i
                ? i
                : this.readValueFromInstance(this.current, t, this.options)
              : this.latestValues[t];
          return (
            null != s &&
              ('string' == typeof s && (Y(s) || H(s))
                ? (s = parseFloat(s))
                : !n8(s) && tH.test(e) && (s = tQ(t, e)),
              this.setBaseTarget(t, e9(s) ? s.get() : s)),
            e9(s) ? s.get() : s
          );
        }
        setBaseTarget(t, e) {
          this.baseTarget[t] = e;
        }
        getBaseTarget(t) {
          var e;
          let i;
          let { initial: s } = this.props;
          if ('string' == typeof s || 'object' == typeof s) {
            let n = l(
              this.props,
              s,
              null === (e = this.presenceContext) || void 0 === e ? void 0 : e.custom
            );
            n && (i = n[t]);
          }
          if (s && void 0 !== i) return i;
          let n = this.getBaseTargetFromProps(this.props, t);
          return void 0 === n || e9(n)
            ? void 0 !== this.initialValues[t] && void 0 === i
              ? void 0
              : this.baseTarget[t]
            : n;
        }
        on(t, e) {
          return this.events[t] || (this.events[t] = new eJ()), this.events[t].add(e);
        }
        notify(t, ...e) {
          this.events[t] && this.events[t].notify(...e);
        }
      }
      class re extends rt {
        constructor() {
          super(...arguments), (this.KeyframeResolver = t1);
        }
        sortInstanceNodePosition(t, e) {
          return 2 & t.compareDocumentPosition(e) ? 1 : -1;
        }
        getBaseTargetFromProps(t, e) {
          return t.style ? t.style[e] : void 0;
        }
        removeValueFromRenderState(t, { vars: e, style: i }) {
          delete e[t], delete i[t];
        }
      }
      class ri extends re {
        constructor() {
          super(...arguments), (this.type = 'html'), (this.renderInstance = nj);
        }
        readValueFromInstance(t, e) {
          if (p.has(e)) {
            let t = tJ(e);
            return (t && t.default) || 0;
          }
          {
            let i = window.getComputedStyle(t),
              s = (X(e) ? i.getPropertyValue(e) : i[e]) || 0;
            return 'string' == typeof s ? s.trim() : s;
          }
        }
        measureInstanceViewportBox(t, { transformPagePoint: e }) {
          return i0(t, e);
        }
        build(t, e, i) {
          nK(t, e, i.transformTemplate);
        }
        scrapeMotionValuesFromProps(t, e, i) {
          return nI(t, e, i);
        }
        handleChildMotionValue() {
          this.childSubscription && (this.childSubscription(), delete this.childSubscription);
          let { children: t } = this.props;
          e9(t) &&
            (this.childSubscription = t.on('change', t => {
              this.current && (this.current.textContent = `${t}`);
            }));
        }
      }
      class rs extends re {
        constructor() {
          super(...arguments),
            (this.type = 'svg'),
            (this.isSVGTag = !1),
            (this.measureInstanceViewportBox = iN);
        }
        getBaseTargetFromProps(t, e) {
          return t[e];
        }
        readValueFromInstance(t, e) {
          if (p.has(e)) {
            let t = tJ(e);
            return (t && t.default) || 0;
          }
          return (e = nF.has(e) ? e : e5(e)), t.getAttribute(e);
        }
        scrapeMotionValuesFromProps(t, e, i) {
          return nU(t, e, i);
        }
        build(t, e, i) {
          n_(t, e, this.isSVGTag, i.transformTemplate);
        }
        renderInstance(t, e, i, s) {
          nB(t, e, i, s);
        }
        mount(t) {
          (this.isSVGTag = nZ(t.tagName)), super.mount(t);
        }
      }
      let rn = (function (t) {
        if ('undefined' == typeof Proxy) return t;
        let e = new Map();
        return new Proxy((...e) => t(...e), {
          get: (i, s) => ('create' === s ? t : (e.has(s) || e.set(s, t(s)), e.get(s))),
        });
      })(
        ((i8 = {
          animation: { Feature: ia },
          exit: { Feature: ih },
          inView: { Feature: nP },
          tap: { Feature: nm },
          focus: { Feature: nd },
          hover: { Feature: nu },
          pan: { Feature: i6 },
          drag: { Feature: i9, ProjectionNode: nl, MeasureLayout: sc },
          layout: { ProjectionNode: nl, MeasureLayout: sc },
        }),
        (i7 = (t, e) => (nL(t) ? new rs(e) : new ri(e, { allowProjection: t !== se.Fragment }))),
        function (t, { forwardMotionProps: e } = { forwardMotionProps: !1 }) {
          return (function (t) {
            let {
              preloadedFeatures: e,
              createVisualElement: i,
              useRender: s,
              useVisualState: n,
              Component: r,
            } = t;
            e &&
              (function (t) {
                for (let e in t) nk[e] = { ...nk[e], ...t[e] };
              })(e);
            let o = (0, se.forwardRef)(function (t, e) {
              var o;
              let l;
              let h = {
                  ...(0, se.useContext)(nw),
                  ...t,
                  layoutId: (function (t) {
                    let { layoutId: e } = t,
                      i = (0, se.useContext)(ss).id;
                    return i && void 0 !== e ? i + '-' + e : e;
                  })(t),
                },
                { isStatic: u } = h,
                d = (function (t) {
                  let { initial: e, animate: i } = (function (t, e) {
                    if (nV(t)) {
                      let { initial: e, animate: i } = t;
                      return { initial: !1 === e || a(e) ? e : void 0, animate: a(i) ? i : void 0 };
                    }
                    return !1 !== t.inherit ? e : {};
                  })(t, (0, se.useContext)(nT));
                  return (0, se.useMemo)(() => ({ initial: e, animate: i }), [nE(e), nE(i)]);
                })(t),
                c = n(t, u);
              if (!u && nb) {
                (0, se.useContext)(nA).strict;
                let t = (function (t) {
                  let { drag: e, layout: i } = nk;
                  if (!e && !i) return {};
                  let s = { ...e, ...i };
                  return {
                    MeasureLayout:
                      (null == e ? void 0 : e.isEnabled(t)) || (null == i ? void 0 : i.isEnabled(t))
                        ? s.MeasureLayout
                        : void 0,
                    ProjectionNode: s.ProjectionNode,
                  };
                })(h);
                (l = t.MeasureLayout),
                  (d.visualElement = (function (t, e, i, s, n) {
                    var r, o;
                    let { visualElement: a } = (0, se.useContext)(nT),
                      l = (0, se.useContext)(nA),
                      h = (0, se.useContext)(si),
                      u = (0, se.useContext)(nw).reducedMotion,
                      d = (0, se.useRef)();
                    (s = s || l.renderer),
                      !d.current &&
                        s &&
                        (d.current = s(t, {
                          visualState: e,
                          parent: a,
                          props: i,
                          presenceContext: h,
                          blockInitialAnimation: !!h && !1 === h.initial,
                          reducedMotionConfig: u,
                        }));
                    let c = d.current,
                      p = (0, se.useContext)(sn);
                    c &&
                      !c.projection &&
                      n &&
                      ('html' === c.type || 'svg' === c.type) &&
                      (function (t, e, i, s) {
                        let {
                          layoutId: n,
                          layout: r,
                          drag: o,
                          dragConstraints: a,
                          layoutScroll: l,
                          layoutRoot: h,
                        } = e;
                        (t.projection = new i(
                          t.latestValues,
                          e['data-framer-portal-id']
                            ? void 0
                            : (function t(e) {
                                if (e)
                                  return !1 !== e.options.allowProjection
                                    ? e.projection
                                    : t(e.parent);
                              })(t.parent)
                        )),
                          t.projection.setOptions({
                            layoutId: n,
                            layout: r,
                            alwaysMeasureLayout: !!o || (a && iM(a)),
                            visualElement: t,
                            animationType: 'string' == typeof r ? r : 'both',
                            initialPromotionConfig: s,
                            layoutScroll: l,
                            layoutRoot: h,
                          });
                      })(d.current, i, n, p),
                      (0, se.useInsertionEffect)(() => {
                        c && c.update(i, h);
                      });
                    let m = i[e3],
                      f = (0, se.useRef)(
                        !!m &&
                          !(null === (r = window.MotionHandoffIsComplete) || void 0 === r
                            ? void 0
                            : r.call(window, m)) &&
                          (null === (o = window.MotionHasOptimisedAnimation) || void 0 === o
                            ? void 0
                            : o.call(window, m))
                      );
                    return (
                      nS(() => {
                        c &&
                          ((window.MotionIsMounted = !0),
                          c.updateFeatures(),
                          sh.render(c.render),
                          f.current && c.animationState && c.animationState.animateChanges());
                      }),
                      (0, se.useEffect)(() => {
                        c &&
                          (!f.current && c.animationState && c.animationState.animateChanges(),
                          f.current &&
                            (queueMicrotask(() => {
                              var t;
                              null === (t = window.MotionHandoffMarkAsComplete) ||
                                void 0 === t ||
                                t.call(window, m);
                            }),
                            (f.current = !1)));
                      }),
                      c
                    );
                  })(r, c, h, i, t.ProjectionNode));
              }
              return (0, st.jsxs)(nT.Provider, {
                value: d,
                children: [
                  l && d.visualElement
                    ? (0, st.jsx)(l, { visualElement: d.visualElement, ...h })
                    : null,
                  s(
                    r,
                    t,
                    ((o = d.visualElement),
                    (0, se.useCallback)(
                      t => {
                        t && c.mount && c.mount(t),
                          o && (t ? o.mount(t) : o.unmount()),
                          e && ('function' == typeof e ? e(t) : iM(e) && (e.current = t));
                      },
                      [o]
                    )),
                    c,
                    u,
                    d.visualElement
                  ),
                ],
              });
            });
            return (o[nR] = r), o;
          })({
            ...(nL(t) ? nJ : nQ),
            preloadedFeatures: i8,
            useRender: (function (t = !1) {
              return (e, i, s, { latestValues: n }, r) => {
                let o = (
                    nL(e)
                      ? function (t, e, i, s) {
                          let n = (0, se.useMemo)(() => {
                            let i = nW();
                            return (
                              n_(i, e, nZ(s), t.transformTemplate),
                              { ...i.attrs, style: { ...i.style } }
                            );
                          }, [e]);
                          if (t.style) {
                            let e = {};
                            n0(e, t.style, t), (n.style = { ...e, ...n.style });
                          }
                          return n;
                        }
                      : function (t, e) {
                          let i = {},
                            s = (function (t, e) {
                              let i = t.style || {},
                                s = {};
                              return (
                                n0(s, i, t),
                                Object.assign(
                                  s,
                                  (function ({ transformTemplate: t }, e) {
                                    return (0, se.useMemo)(() => {
                                      let i = nN();
                                      return nK(i, e, t), Object.assign({}, i.vars, i.style);
                                    }, [e]);
                                  })(t, e)
                                ),
                                s
                              );
                            })(t, e);
                          return (
                            t.drag &&
                              !1 !== t.dragListener &&
                              ((i.draggable = !1),
                              (s.userSelect = s.WebkitUserSelect = s.WebkitTouchCallout = 'none'),
                              (s.touchAction =
                                !0 === t.drag ? 'none' : `pan-${'x' === t.drag ? 'y' : 'x'}`)),
                            void 0 === t.tabIndex &&
                              (t.onTap || t.onTapStart || t.whileTap) &&
                              (i.tabIndex = 0),
                            (i.style = s),
                            i
                          );
                        }
                  )(i, n, r, e),
                  a = (function (t, e, i) {
                    let s = {};
                    for (let n in t)
                      ('values' !== n || 'object' != typeof t.values) &&
                        (n5(n) ||
                          (!0 === i && n2(n)) ||
                          (!e && !n2(n)) ||
                          (t.draggable && n.startsWith('onDrag'))) &&
                        (s[n] = t[n]);
                    return s;
                  })(i, 'string' == typeof e, t),
                  l = e !== se.Fragment ? { ...a, ...o, ref: s } : {},
                  { children: h } = i,
                  u = (0, se.useMemo)(() => (e9(h) ? h.get() : h), [h]);
                return (0, se.createElement)(e, { ...l, children: u });
              };
            })(e),
            createVisualElement: i7,
            Component: t,
          });
        })
      );
    },
    9512: (t, e, i) => {
      'use strict';
      i.d(e, { F: () => h, f: () => u });
      var s = i(2265),
        n = ['light', 'dark'],
        r = '(prefers-color-scheme: dark)',
        o = 'undefined' == typeof window,
        a = s.createContext(void 0),
        l = { setTheme: t => {}, themes: [] },
        h = () => {
          var t;
          return null != (t = s.useContext(a)) ? t : l;
        },
        u = t => (s.useContext(a) ? t.children : s.createElement(c, { ...t })),
        d = ['light', 'dark'],
        c = t => {
          let {
              forcedTheme: e,
              disableTransitionOnChange: i = !1,
              enableSystem: o = !0,
              enableColorScheme: l = !0,
              storageKey: h = 'theme',
              themes: u = d,
              defaultTheme: c = o ? 'system' : 'light',
              attribute: g = 'data-theme',
              value: y,
              children: x,
              nonce: P,
            } = t,
            [w, T] = s.useState(() => m(h, c)),
            [b, S] = s.useState(() => m(h)),
            A = y ? Object.values(y) : u,
            V = s.useCallback(t => {
              let e = t;
              if (!e) return;
              'system' === t && o && (e = v());
              let s = y ? y[e] : e,
                r = i ? f() : null,
                a = document.documentElement;
              if (
                ('class' === g
                  ? (a.classList.remove(...A), s && a.classList.add(s))
                  : s
                    ? a.setAttribute(g, s)
                    : a.removeAttribute(g),
                l)
              ) {
                let t = n.includes(c) ? c : null,
                  i = n.includes(e) ? e : t;
                a.style.colorScheme = i;
              }
              null == r || r();
            }, []),
            M = s.useCallback(
              t => {
                let e = 'function' == typeof t ? t(t) : t;
                T(e);
                try {
                  localStorage.setItem(h, e);
                } catch (t) {}
              },
              [e]
            ),
            E = s.useCallback(
              t => {
                S(v(t)), 'system' === w && o && !e && V('system');
              },
              [w, e]
            );
          s.useEffect(() => {
            let t = window.matchMedia(r);
            return t.addListener(E), E(t), () => t.removeListener(E);
          }, [E]),
            s.useEffect(() => {
              let t = t => {
                t.key === h && M(t.newValue || c);
              };
              return (
                window.addEventListener('storage', t),
                () => window.removeEventListener('storage', t)
              );
            }, [M]),
            s.useEffect(() => {
              V(null != e ? e : w);
            }, [e, w]);
          let C = s.useMemo(
            () => ({
              theme: w,
              setTheme: M,
              forcedTheme: e,
              resolvedTheme: 'system' === w ? b : w,
              themes: o ? [...u, 'system'] : u,
              systemTheme: o ? b : void 0,
            }),
            [w, M, e, b, o, u]
          );
          return s.createElement(
            a.Provider,
            { value: C },
            s.createElement(p, {
              forcedTheme: e,
              disableTransitionOnChange: i,
              enableSystem: o,
              enableColorScheme: l,
              storageKey: h,
              themes: u,
              defaultTheme: c,
              attribute: g,
              value: y,
              children: x,
              attrs: A,
              nonce: P,
            }),
            x
          );
        },
        p = s.memo(t => {
          let {
              forcedTheme: e,
              storageKey: i,
              attribute: o,
              enableSystem: a,
              enableColorScheme: l,
              defaultTheme: h,
              value: u,
              attrs: d,
              nonce: c,
            } = t,
            p = 'system' === h,
            m =
              'class' === o
                ? 'var d=document.documentElement,c=d.classList;'.concat(
                    'c.remove('.concat(d.map(t => "'".concat(t, "'")).join(','), ')'),
                    ';'
                  )
                : "var d=document.documentElement,n='".concat(o, "',s='setAttribute';"),
            f = l
              ? (n.includes(h) ? h : null)
                ? "if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'".concat(h, "'")
                : "if(e==='light'||e==='dark')d.style.colorScheme=e"
              : '',
            v = function (t) {
              let e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                i = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
                s = u ? u[t] : t,
                r = e ? t + "|| ''" : "'".concat(s, "'"),
                a = '';
              return (
                l && i && !e && n.includes(t) && (a += "d.style.colorScheme = '".concat(t, "';")),
                'class' === o
                  ? e || s
                    ? (a += 'c.add('.concat(r, ')'))
                    : (a += 'null')
                  : s && (a += 'd[s](n,'.concat(r, ')')),
                a
              );
            },
            g = e
              ? '!function(){'.concat(m).concat(v(e), '}()')
              : a
                ? '!function(){try{'
                    .concat(m, "var e=localStorage.getItem('")
                    .concat(i, "');if('system'===e||(!e&&")
                    .concat(p, ")){var t='")
                    .concat(r, "',m=window.matchMedia(t);if(m.media!==t||m.matches){")
                    .concat(v('dark'), '}else{')
                    .concat(v('light'), '}}else if(e){')
                    .concat(u ? 'var x='.concat(JSON.stringify(u), ';') : '')
                    .concat(v(u ? 'x[e]' : 'e', !0), '}')
                    .concat(p ? '' : 'else{' + v(h, !1, !1) + '}')
                    .concat(f, '}catch(e){}}()')
                : '!function(){try{'
                    .concat(m, "var e=localStorage.getItem('")
                    .concat(i, "');if(e){")
                    .concat(u ? 'var x='.concat(JSON.stringify(u), ';') : '')
                    .concat(v(u ? 'x[e]' : 'e', !0), '}else{')
                    .concat(v(h, !1, !1), ';}')
                    .concat(f, '}catch(t){}}();');
          return s.createElement('script', { nonce: c, dangerouslySetInnerHTML: { __html: g } });
        }),
        m = (t, e) => {
          let i;
          if (!o) {
            try {
              i = localStorage.getItem(t) || void 0;
            } catch (t) {}
            return i || e;
          }
        },
        f = () => {
          let t = document.createElement('style');
          return (
            t.appendChild(
              document.createTextNode(
                '*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}'
              )
            ),
            document.head.appendChild(t),
            () => {
              window.getComputedStyle(document.body),
                setTimeout(() => {
                  document.head.removeChild(t);
                }, 1);
            }
          );
        },
        v = t => (t || (t = window.matchMedia(r)), t.matches ? 'dark' : 'light');
    },
  },
]);
