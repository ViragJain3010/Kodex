'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [196],
  {
    8369: (e, t, n) => {
      n.d(t, { Ry: () => c });
      var r = new WeakMap(),
        o = new WeakMap(),
        l = {},
        i = 0,
        a = function (e) {
          return e && (e.host || a(e.parentNode));
        },
        u = function (e, t, n, u) {
          var c = (Array.isArray(e) ? e : [e])
            .map(function (e) {
              if (t.contains(e)) return e;
              var n = a(e);
              return n && t.contains(n)
                ? n
                : (console.error('aria-hidden', e, 'in not contained inside', t, '. Doing nothing'),
                  null);
            })
            .filter(function (e) {
              return !!e;
            });
          l[n] || (l[n] = new WeakMap());
          var s = l[n],
            d = [],
            f = new Set(),
            p = new Set(c),
            v = function (e) {
              !e || f.has(e) || (f.add(e), v(e.parentNode));
            };
          c.forEach(v);
          var h = function (e) {
            !e ||
              p.has(e) ||
              Array.prototype.forEach.call(e.children, function (e) {
                if (f.has(e)) h(e);
                else
                  try {
                    var t = e.getAttribute(u),
                      l = null !== t && 'false' !== t,
                      i = (r.get(e) || 0) + 1,
                      a = (s.get(e) || 0) + 1;
                    r.set(e, i),
                      s.set(e, a),
                      d.push(e),
                      1 === i && l && o.set(e, !0),
                      1 === a && e.setAttribute(n, 'true'),
                      l || e.setAttribute(u, 'true');
                  } catch (t) {
                    console.error('aria-hidden: cannot operate on ', e, t);
                  }
              });
          };
          return (
            h(t),
            f.clear(),
            i++,
            function () {
              d.forEach(function (e) {
                var t = r.get(e) - 1,
                  l = s.get(e) - 1;
                r.set(e, t),
                  s.set(e, l),
                  t || (o.has(e) || e.removeAttribute(u), o.delete(e)),
                  l || e.removeAttribute(n);
              }),
                --i || ((r = new WeakMap()), (r = new WeakMap()), (o = new WeakMap()), (l = {}));
            }
          );
        },
        c = function (e, t, n) {
          void 0 === n && (n = 'data-aria-hidden');
          var r,
            o = Array.from(Array.isArray(e) ? e : [e]),
            l =
              t ||
              ((r = e),
              'undefined' == typeof document
                ? null
                : (Array.isArray(r) ? r[0] : r).ownerDocument.body);
          return l
            ? (o.push.apply(o, Array.from(l.querySelectorAll('[aria-live]'))),
              u(o, l, n, 'aria-hidden'))
            : function () {
                return null;
              };
        };
    },
    2468: (e, t, n) => {
      n.d(t, { Z: () => r });
      let r = (0, n(8030).Z)('Check', [['path', { d: 'M20 6 9 17l-5-5', key: '1gmf2c' }]]);
    },
    9072: (e, t, n) => {
      n.d(t, { Z: () => r });
      let r = (0, n(8030).Z)('ClipboardCopy', [
        ['rect', { width: '8', height: '4', x: '8', y: '2', rx: '1', ry: '1', key: 'tgr4d6' }],
        ['path', { d: 'M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2', key: '4jdomd' }],
        ['path', { d: 'M16 4h2a2 2 0 0 1 2 2v4', key: '3hqy98' }],
        ['path', { d: 'M21 14H11', key: '1bme5i' }],
        ['path', { d: 'm15 10-4 4 4 4', key: '5dvupr' }],
      ]);
    },
    3787: (e, t, n) => {
      n.d(t, { Z: () => r });
      let r = (0, n(8030).Z)('ExternalLink', [
        ['path', { d: 'M15 3h6v6', key: '1q9fwt' }],
        ['path', { d: 'M10 14 21 3', key: 'gplh6r' }],
        ['path', { d: 'M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6', key: 'a6xqqp' }],
      ]);
    },
    8094: (e, t, n) => {
      n.d(t, { Z: () => r });
      let r = (0, n(8030).Z)('Play', [
        ['polygon', { points: '6 3 20 12 6 21 6 3', key: '1oa8hb' }],
      ]);
    },
    7818: (e, t, n) => {
      n.d(t, { default: () => o.a });
      var r = n(551),
        o = n.n(r);
    },
    551: (e, t, n) => {
      Object.defineProperty(t, '__esModule', { value: !0 }),
        Object.defineProperty(t, 'default', {
          enumerable: !0,
          get: function () {
            return o;
          },
        });
      let r = n(9920)._(n(148));
      function o(e, t) {
        var n;
        let o = {};
        'function' == typeof e && (o.loader = e);
        let l = { ...o, ...t };
        return (0, r.default)({
          ...l,
          modules: null == (n = l.loadableGenerated) ? void 0 : n.modules,
        });
      }
      ('function' == typeof t.default || ('object' == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, '__esModule', { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    912: (e, t, n) => {
      Object.defineProperty(t, '__esModule', { value: !0 }),
        Object.defineProperty(t, 'BailoutToCSR', {
          enumerable: !0,
          get: function () {
            return o;
          },
        });
      let r = n(5592);
      function o(e) {
        let { reason: t, children: n } = e;
        if ('undefined' == typeof window) throw new r.BailoutToCSRError(t);
        return n;
      }
    },
    148: (e, t, n) => {
      Object.defineProperty(t, '__esModule', { value: !0 }),
        Object.defineProperty(t, 'default', {
          enumerable: !0,
          get: function () {
            return c;
          },
        });
      let r = n(7437),
        o = n(2265),
        l = n(912),
        i = n(5025);
      function a(e) {
        return { default: e && 'default' in e ? e.default : e };
      }
      let u = { loader: () => Promise.resolve(a(() => null)), loading: null, ssr: !0 },
        c = function (e) {
          let t = { ...u, ...e },
            n = (0, o.lazy)(() => t.loader().then(a)),
            c = t.loading;
          function s(e) {
            let a = c ? (0, r.jsx)(c, { isLoading: !0, pastDelay: !0, error: null }) : null,
              u = !t.ssr || !!t.loading,
              s = u ? o.Suspense : o.Fragment,
              d = t.ssr
                ? (0, r.jsxs)(r.Fragment, {
                    children: [
                      'undefined' == typeof window
                        ? (0, r.jsx)(i.PreloadChunks, { moduleIds: t.modules })
                        : null,
                      (0, r.jsx)(n, { ...e }),
                    ],
                  })
                : (0, r.jsx)(l.BailoutToCSR, {
                    reason: 'next/dynamic',
                    children: (0, r.jsx)(n, { ...e }),
                  });
            return (0, r.jsx)(s, { ...(u ? { fallback: a } : {}), children: d });
          }
          return (s.displayName = 'LoadableComponent'), s;
        };
    },
    5025: (e, t, n) => {
      Object.defineProperty(t, '__esModule', { value: !0 }),
        Object.defineProperty(t, 'PreloadChunks', {
          enumerable: !0,
          get: function () {
            return a;
          },
        });
      let r = n(7437),
        o = n(4887),
        l = n(8011),
        i = n(5759);
      function a(e) {
        let { moduleIds: t } = e;
        if ('undefined' != typeof window) return null;
        let n = l.workAsyncStorage.getStore();
        if (void 0 === n) return null;
        let a = [];
        if (n.reactLoadableManifest && t) {
          let e = n.reactLoadableManifest;
          for (let n of t) {
            if (!e[n]) continue;
            let t = e[n].files;
            a.push(...t);
          }
        }
        return 0 === a.length
          ? null
          : (0, r.jsx)(r.Fragment, {
              children: a.map(e => {
                let t = n.assetPrefix + '/_next/' + (0, i.encodeURIPath)(e);
                return e.endsWith('.css')
                  ? (0, r.jsx)(
                      'link',
                      { precedence: 'dynamic', href: t, rel: 'stylesheet', as: 'style' },
                      e
                    )
                  : ((0, o.preload)(t, { as: 'script', fetchPriority: 'low' }), null);
              }),
            });
      }
    },
    9418: (e, t, n) => {
      n.d(t, { Z: () => K });
      var r,
        o,
        l = function () {
          return (l =
            Object.assign ||
            function (e) {
              for (var t, n = 1, r = arguments.length; n < r; n++)
                for (var o in (t = arguments[n]))
                  Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
              return e;
            }).apply(this, arguments);
        };
      function i(e, t) {
        var n = {};
        for (var r in e)
          Object.prototype.hasOwnProperty.call(e, r) && 0 > t.indexOf(r) && (n[r] = e[r]);
        if (null != e && 'function' == typeof Object.getOwnPropertySymbols)
          for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
            0 > t.indexOf(r[o]) &&
              Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
              (n[r[o]] = e[r[o]]);
        return n;
      }
      Object.create, Object.create, 'function' == typeof SuppressedError && SuppressedError;
      var a = n(2265),
        u = 'right-scroll-bar-position',
        c = 'width-before-scroll-bar';
      function s(e, t) {
        return 'function' == typeof e ? e(t) : e && (e.current = t), e;
      }
      var d = 'undefined' != typeof window ? a.useLayoutEffect : a.useEffect,
        f = new WeakMap();
      function p(e) {
        return e;
      }
      var v = (function (e) {
          void 0 === e && (e = {});
          var t,
            n,
            r,
            o =
              (void 0 === t && (t = p),
              (n = []),
              (r = !1),
              {
                read: function () {
                  if (r)
                    throw Error(
                      'Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.'
                    );
                  return n.length ? n[n.length - 1] : null;
                },
                useMedium: function (e) {
                  var o = t(e, r);
                  return (
                    n.push(o),
                    function () {
                      n = n.filter(function (e) {
                        return e !== o;
                      });
                    }
                  );
                },
                assignSyncMedium: function (e) {
                  for (r = !0; n.length; ) {
                    var t = n;
                    (n = []), t.forEach(e);
                  }
                  n = {
                    push: function (t) {
                      return e(t);
                    },
                    filter: function () {
                      return n;
                    },
                  };
                },
                assignMedium: function (e) {
                  r = !0;
                  var t = [];
                  if (n.length) {
                    var o = n;
                    (n = []), o.forEach(e), (t = n);
                  }
                  var l = function () {
                      var n = t;
                      (t = []), n.forEach(e);
                    },
                    i = function () {
                      return Promise.resolve().then(l);
                    };
                  i(),
                    (n = {
                      push: function (e) {
                        t.push(e), i();
                      },
                      filter: function (e) {
                        return (t = t.filter(e)), n;
                      },
                    });
                },
              });
          return (o.options = l({ async: !0, ssr: !1 }, e)), o;
        })(),
        h = function () {},
        m = a.forwardRef(function (e, t) {
          var n,
            r,
            o,
            u,
            c = a.useRef(null),
            p = a.useState({ onScrollCapture: h, onWheelCapture: h, onTouchMoveCapture: h }),
            m = p[0],
            g = p[1],
            y = e.forwardProps,
            w = e.children,
            b = e.className,
            x = e.removeScrollBar,
            E = e.enabled,
            S = e.shards,
            C = e.sideCar,
            R = e.noIsolation,
            M = e.inert,
            N = e.allowPinchZoom,
            P = e.as,
            A = e.gapMode,
            k = i(e, [
              'forwardProps',
              'children',
              'className',
              'removeScrollBar',
              'enabled',
              'shards',
              'sideCar',
              'noIsolation',
              'inert',
              'allowPinchZoom',
              'as',
              'gapMode',
            ]),
            j =
              ((n = [c, t]),
              (r = function (e) {
                return n.forEach(function (t) {
                  return s(t, e);
                });
              }),
              ((o = (0, a.useState)(function () {
                return {
                  value: null,
                  callback: r,
                  facade: {
                    get current() {
                      return o.value;
                    },
                    set current(value) {
                      var e = o.value;
                      e !== value && ((o.value = value), o.callback(value, e));
                    },
                  },
                };
              })[0]).callback = r),
              (u = o.facade),
              d(
                function () {
                  var e = f.get(u);
                  if (e) {
                    var t = new Set(e),
                      r = new Set(n),
                      o = u.current;
                    t.forEach(function (e) {
                      r.has(e) || s(e, null);
                    }),
                      r.forEach(function (e) {
                        t.has(e) || s(e, o);
                      });
                  }
                  f.set(u, n);
                },
                [n]
              ),
              u),
            T = l(l({}, k), m);
          return a.createElement(
            a.Fragment,
            null,
            E &&
              a.createElement(C, {
                sideCar: v,
                removeScrollBar: x,
                shards: S,
                noIsolation: R,
                inert: M,
                setCallbacks: g,
                allowPinchZoom: !!N,
                lockRef: c,
                gapMode: A,
              }),
            y
              ? a.cloneElement(a.Children.only(w), l(l({}, T), { ref: j }))
              : a.createElement(void 0 === P ? 'div' : P, l({}, T, { className: b, ref: j }), w)
          );
        });
      (m.defaultProps = { enabled: !0, removeScrollBar: !0, inert: !1 }),
        (m.classNames = { fullWidth: c, zeroRight: u });
      var g = function (e) {
        var t = e.sideCar,
          n = i(e, ['sideCar']);
        if (!t) throw Error('Sidecar: please provide `sideCar` property to import the right car');
        var r = t.read();
        if (!r) throw Error('Sidecar medium not found');
        return a.createElement(r, l({}, n));
      };
      g.isSideCarExport = !0;
      var y = function () {
          var e = 0,
            t = null;
          return {
            add: function (r) {
              if (
                0 == e &&
                (t = (function () {
                  if (!document) return null;
                  var e = document.createElement('style');
                  e.type = 'text/css';
                  var t = o || n.nc;
                  return t && e.setAttribute('nonce', t), e;
                })())
              ) {
                var l, i;
                (l = t).styleSheet
                  ? (l.styleSheet.cssText = r)
                  : l.appendChild(document.createTextNode(r)),
                  (i = t),
                  (document.head || document.getElementsByTagName('head')[0]).appendChild(i);
              }
              e++;
            },
            remove: function () {
              --e || !t || (t.parentNode && t.parentNode.removeChild(t), (t = null));
            },
          };
        },
        w = function () {
          var e = y();
          return function (t, n) {
            a.useEffect(
              function () {
                return (
                  e.add(t),
                  function () {
                    e.remove();
                  }
                );
              },
              [t && n]
            );
          };
        },
        b = function () {
          var e = w();
          return function (t) {
            return e(t.styles, t.dynamic), null;
          };
        },
        x = { left: 0, top: 0, right: 0, gap: 0 },
        E = function (e) {
          return parseInt(e || '', 10) || 0;
        },
        S = function (e) {
          var t = window.getComputedStyle(document.body),
            n = t['padding' === e ? 'paddingLeft' : 'marginLeft'],
            r = t['padding' === e ? 'paddingTop' : 'marginTop'],
            o = t['padding' === e ? 'paddingRight' : 'marginRight'];
          return [E(n), E(r), E(o)];
        },
        C = function (e) {
          if ((void 0 === e && (e = 'margin'), 'undefined' == typeof window)) return x;
          var t = S(e),
            n = document.documentElement.clientWidth,
            r = window.innerWidth;
          return { left: t[0], top: t[1], right: t[2], gap: Math.max(0, r - n + t[2] - t[0]) };
        },
        R = b(),
        M = 'data-scroll-locked',
        N = function (e, t, n, r) {
          var o = e.left,
            l = e.top,
            i = e.right,
            a = e.gap;
          return (
            void 0 === n && (n = 'margin'),
            '\n  .'
              .concat('with-scroll-bars-hidden', ' {\n   overflow: hidden ')
              .concat(r, ';\n   padding-right: ')
              .concat(a, 'px ')
              .concat(r, ';\n  }\n  body[')
              .concat(M, '] {\n    overflow: hidden ')
              .concat(r, ';\n    overscroll-behavior: contain;\n    ')
              .concat(
                [
                  t && 'position: relative '.concat(r, ';'),
                  'margin' === n &&
                    '\n    padding-left: '
                      .concat(o, 'px;\n    padding-top: ')
                      .concat(l, 'px;\n    padding-right: ')
                      .concat(i, 'px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: ')
                      .concat(a, 'px ')
                      .concat(r, ';\n    '),
                  'padding' === n && 'padding-right: '.concat(a, 'px ').concat(r, ';'),
                ]
                  .filter(Boolean)
                  .join(''),
                '\n  }\n  \n  .'
              )
              .concat(u, ' {\n    right: ')
              .concat(a, 'px ')
              .concat(r, ';\n  }\n  \n  .')
              .concat(c, ' {\n    margin-right: ')
              .concat(a, 'px ')
              .concat(r, ';\n  }\n  \n  .')
              .concat(u, ' .')
              .concat(u, ' {\n    right: 0 ')
              .concat(r, ';\n  }\n  \n  .')
              .concat(c, ' .')
              .concat(c, ' {\n    margin-right: 0 ')
              .concat(r, ';\n  }\n  \n  body[')
              .concat(M, '] {\n    ')
              .concat('--removed-body-scroll-bar-size', ': ')
              .concat(a, 'px;\n  }\n')
          );
        },
        P = function () {
          var e = parseInt(document.body.getAttribute(M) || '0', 10);
          return isFinite(e) ? e : 0;
        },
        A = function () {
          a.useEffect(function () {
            return (
              document.body.setAttribute(M, (P() + 1).toString()),
              function () {
                var e = P() - 1;
                e <= 0
                  ? document.body.removeAttribute(M)
                  : document.body.setAttribute(M, e.toString());
              }
            );
          }, []);
        },
        k = function (e) {
          var t = e.noRelative,
            n = e.noImportant,
            r = e.gapMode,
            o = void 0 === r ? 'margin' : r;
          A();
          var l = a.useMemo(
            function () {
              return C(o);
            },
            [o]
          );
          return a.createElement(R, { styles: N(l, !t, o, n ? '' : '!important') });
        },
        j = !1;
      if ('undefined' != typeof window)
        try {
          var T = Object.defineProperty({}, 'passive', {
            get: function () {
              return (j = !0), !0;
            },
          });
          window.addEventListener('test', T, T), window.removeEventListener('test', T, T);
        } catch (e) {
          j = !1;
        }
      var L = !!j && { passive: !1 },
        D = function (e, t) {
          if (!(e instanceof Element)) return !1;
          var n = window.getComputedStyle(e);
          return (
            'hidden' !== n[t] &&
            !(n.overflowY === n.overflowX && 'TEXTAREA' !== e.tagName && 'visible' === n[t])
          );
        },
        O = function (e, t) {
          var n = t.ownerDocument,
            r = t;
          do {
            if (
              ('undefined' != typeof ShadowRoot && r instanceof ShadowRoot && (r = r.host), I(e, r))
            ) {
              var o = z(e, r);
              if (o[1] > o[2]) return !0;
            }
            r = r.parentNode;
          } while (r && r !== n.body);
          return !1;
        },
        I = function (e, t) {
          return 'v' === e ? D(t, 'overflowY') : D(t, 'overflowX');
        },
        z = function (e, t) {
          return 'v' === e
            ? [t.scrollTop, t.scrollHeight, t.clientHeight]
            : [t.scrollLeft, t.scrollWidth, t.clientWidth];
        },
        W = function (e, t, n, r, o) {
          var l,
            i = ((l = window.getComputedStyle(t).direction), 'h' === e && 'rtl' === l ? -1 : 1),
            a = i * r,
            u = n.target,
            c = t.contains(u),
            s = !1,
            d = a > 0,
            f = 0,
            p = 0;
          do {
            var v = z(e, u),
              h = v[0],
              m = v[1] - v[2] - i * h;
            (h || m) && I(e, u) && ((f += m), (p += h)),
              u instanceof ShadowRoot ? (u = u.host) : (u = u.parentNode);
          } while ((!c && u !== document.body) || (c && (t.contains(u) || t === u)));
          return (
            d && ((o && 1 > Math.abs(f)) || (!o && a > f))
              ? (s = !0)
              : !d && ((o && 1 > Math.abs(p)) || (!o && -a > p)) && (s = !0),
            s
          );
        },
        F = function (e) {
          return 'changedTouches' in e
            ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY]
            : [0, 0];
        },
        _ = function (e) {
          return [e.deltaX, e.deltaY];
        },
        H = function (e) {
          return e && 'current' in e ? e.current : e;
        },
        $ = 0,
        B = [];
      let V =
        ((r = function (e) {
          var t = a.useRef([]),
            n = a.useRef([0, 0]),
            r = a.useRef(),
            o = a.useState($++)[0],
            l = a.useState(b)[0],
            i = a.useRef(e);
          a.useEffect(
            function () {
              i.current = e;
            },
            [e]
          ),
            a.useEffect(
              function () {
                if (e.inert) {
                  document.body.classList.add('block-interactivity-'.concat(o));
                  var t = (function (e, t, n) {
                    if (n || 2 == arguments.length)
                      for (var r, o = 0, l = t.length; o < l; o++)
                        (!r && o in t) ||
                          (r || (r = Array.prototype.slice.call(t, 0, o)), (r[o] = t[o]));
                    return e.concat(r || Array.prototype.slice.call(t));
                  })([e.lockRef.current], (e.shards || []).map(H), !0).filter(Boolean);
                  return (
                    t.forEach(function (e) {
                      return e.classList.add('allow-interactivity-'.concat(o));
                    }),
                    function () {
                      document.body.classList.remove('block-interactivity-'.concat(o)),
                        t.forEach(function (e) {
                          return e.classList.remove('allow-interactivity-'.concat(o));
                        });
                    }
                  );
                }
              },
              [e.inert, e.lockRef.current, e.shards]
            );
          var u = a.useCallback(function (e, t) {
              if (('touches' in e && 2 === e.touches.length) || ('wheel' === e.type && e.ctrlKey))
                return !i.current.allowPinchZoom;
              var o,
                l = F(e),
                a = n.current,
                u = 'deltaX' in e ? e.deltaX : a[0] - l[0],
                c = 'deltaY' in e ? e.deltaY : a[1] - l[1],
                s = e.target,
                d = Math.abs(u) > Math.abs(c) ? 'h' : 'v';
              if ('touches' in e && 'h' === d && 'range' === s.type) return !1;
              var f = O(d, s);
              if (!f) return !0;
              if ((f ? (o = d) : ((o = 'v' === d ? 'h' : 'v'), (f = O(d, s))), !f)) return !1;
              if ((!r.current && 'changedTouches' in e && (u || c) && (r.current = o), !o))
                return !0;
              var p = r.current || o;
              return W(p, t, e, 'h' === p ? u : c, !0);
            }, []),
            c = a.useCallback(function (e) {
              if (B.length && B[B.length - 1] === l) {
                var n = 'deltaY' in e ? _(e) : F(e),
                  r = t.current.filter(function (t) {
                    var r;
                    return (
                      t.name === e.type &&
                      (t.target === e.target || e.target === t.shadowParent) &&
                      (r = t.delta)[0] === n[0] &&
                      r[1] === n[1]
                    );
                  })[0];
                if (r && r.should) {
                  e.cancelable && e.preventDefault();
                  return;
                }
                if (!r) {
                  var o = (i.current.shards || [])
                    .map(H)
                    .filter(Boolean)
                    .filter(function (t) {
                      return t.contains(e.target);
                    });
                  (o.length > 0 ? u(e, o[0]) : !i.current.noIsolation) &&
                    e.cancelable &&
                    e.preventDefault();
                }
              }
            }, []),
            s = a.useCallback(function (e, n, r, o) {
              var l = {
                name: e,
                delta: n,
                target: r,
                should: o,
                shadowParent: (function (e) {
                  for (var t = null; null !== e; )
                    e instanceof ShadowRoot && ((t = e.host), (e = e.host)), (e = e.parentNode);
                  return t;
                })(r),
              };
              t.current.push(l),
                setTimeout(function () {
                  t.current = t.current.filter(function (e) {
                    return e !== l;
                  });
                }, 1);
            }, []),
            d = a.useCallback(function (e) {
              (n.current = F(e)), (r.current = void 0);
            }, []),
            f = a.useCallback(function (t) {
              s(t.type, _(t), t.target, u(t, e.lockRef.current));
            }, []),
            p = a.useCallback(function (t) {
              s(t.type, F(t), t.target, u(t, e.lockRef.current));
            }, []);
          a.useEffect(function () {
            return (
              B.push(l),
              e.setCallbacks({ onScrollCapture: f, onWheelCapture: f, onTouchMoveCapture: p }),
              document.addEventListener('wheel', c, L),
              document.addEventListener('touchmove', c, L),
              document.addEventListener('touchstart', d, L),
              function () {
                (B = B.filter(function (e) {
                  return e !== l;
                })),
                  document.removeEventListener('wheel', c, L),
                  document.removeEventListener('touchmove', c, L),
                  document.removeEventListener('touchstart', d, L);
              }
            );
          }, []);
          var v = e.removeScrollBar,
            h = e.inert;
          return a.createElement(
            a.Fragment,
            null,
            h
              ? a.createElement(l, {
                  styles: '\n  .block-interactivity-'
                    .concat(o, ' {pointer-events: none;}\n  .allow-interactivity-')
                    .concat(o, ' {pointer-events: all;}\n'),
                })
              : null,
            v ? a.createElement(k, { gapMode: e.gapMode }) : null
          );
        }),
        v.useMedium(r),
        g);
      var U = a.forwardRef(function (e, t) {
        return a.createElement(m, l({}, e, { ref: t, sideCar: V }));
      });
      U.classNames = m.classNames;
      let K = U;
    },
    1505: (e, t, n) => {
      let r;
      n.d(t, { OT: () => eN, eh: () => eC, s_: () => C });
      var o,
        l = n(2265);
      let {
          createElement: i,
          createContext: a,
          createRef: u,
          forwardRef: c,
          useCallback: s,
          useContext: d,
          useEffect: f,
          useImperativeHandle: p,
          useLayoutEffect: v,
          useMemo: h,
          useRef: m,
          useState: g,
        } = o || (o = n.t(l, 2)),
        y = (o || (o = n.t(l, 2)))[`useId${Math.random()}`.slice(0, 5)],
        w = a(null);
      w.displayName = 'PanelGroupContext';
      let b = 'function' == typeof y ? y : () => null,
        x = 0;
      function E(e = null) {
        let t = b(),
          n = m(e || t || null);
        return null === n.current && (n.current = '' + x++), null != e ? e : n.current;
      }
      function S({
        children: e,
        className: t = '',
        collapsedSize: n,
        collapsible: r,
        defaultSize: o,
        forwardedRef: l,
        id: a,
        maxSize: u,
        minSize: c,
        onCollapse: s,
        onExpand: f,
        onResize: h,
        order: g,
        style: y,
        tagName: b = 'div',
        ...x
      }) {
        let S = d(w);
        if (null === S)
          throw Error('Panel components must be rendered within a PanelGroup container');
        let {
            collapsePanel: C,
            expandPanel: R,
            getPanelSize: M,
            getPanelStyle: N,
            groupId: P,
            isPanelCollapsed: A,
            reevaluatePanelConstraints: k,
            registerPanel: j,
            resizePanel: T,
            unregisterPanel: L,
          } = S,
          D = E(a),
          O = m({
            callbacks: { onCollapse: s, onExpand: f, onResize: h },
            constraints: {
              collapsedSize: n,
              collapsible: r,
              defaultSize: o,
              maxSize: u,
              minSize: c,
            },
            id: D,
            idIsFromProps: void 0 !== a,
            order: g,
          });
        m({ didLogMissingDefaultSizeWarning: !1 }),
          v(() => {
            let { callbacks: e, constraints: t } = O.current,
              l = { ...t };
            (O.current.id = D),
              (O.current.idIsFromProps = void 0 !== a),
              (O.current.order = g),
              (e.onCollapse = s),
              (e.onExpand = f),
              (e.onResize = h),
              (t.collapsedSize = n),
              (t.collapsible = r),
              (t.defaultSize = o),
              (t.maxSize = u),
              (t.minSize = c),
              (l.collapsedSize !== t.collapsedSize ||
                l.collapsible !== t.collapsible ||
                l.maxSize !== t.maxSize ||
                l.minSize !== t.minSize) &&
                k(O.current, l);
          }),
          v(() => {
            let e = O.current;
            return (
              j(e),
              () => {
                L(e);
              }
            );
          }, [g, D, j, L]),
          p(
            l,
            () => ({
              collapse: () => {
                C(O.current);
              },
              expand: e => {
                R(O.current, e);
              },
              getId: () => D,
              getSize: () => M(O.current),
              isCollapsed: () => A(O.current),
              isExpanded: () => !A(O.current),
              resize: e => {
                T(O.current, e);
              },
            }),
            [C, R, M, A, D, T]
          );
        let I = N(O.current, o);
        return i(b, {
          ...x,
          children: e,
          className: t,
          id: a,
          style: { ...I, ...y },
          'data-panel': '',
          'data-panel-collapsible': r || void 0,
          'data-panel-group-id': P,
          'data-panel-id': D,
          'data-panel-size': parseFloat('' + I.flexGrow).toFixed(1),
        });
      }
      let C = c((e, t) => i(S, { ...e, forwardedRef: t }));
      (S.displayName = 'Panel'), (C.displayName = 'forwardRef(Panel)');
      let R = null,
        M = null;
      function N(e, t) {
        let n = (function (e, t) {
          if (t) {
            let e = (t & z) != 0,
              n = (t & W) != 0,
              r = (t & F) != 0,
              o = (t & _) != 0;
            if (e) return r ? 'se-resize' : o ? 'ne-resize' : 'e-resize';
            if (n) return r ? 'sw-resize' : o ? 'nw-resize' : 'w-resize';
            if (r) return 's-resize';
            if (o) return 'n-resize';
          }
          switch (e) {
            case 'horizontal':
              return 'ew-resize';
            case 'intersection':
              return 'move';
            case 'vertical':
              return 'ns-resize';
          }
        })(e, t);
        R !== n &&
          ((R = n),
          null === M &&
            ((M = document.createElement('style')),
            r && M.setAttribute('nonce', r),
            document.head.appendChild(M)),
          (M.innerHTML = `*{cursor: ${n}!important;}`));
      }
      function P(e) {
        return 'keydown' === e.type;
      }
      function A(e) {
        return e.type.startsWith('pointer');
      }
      function k(e) {
        return e.type.startsWith('mouse');
      }
      function j(e) {
        if (A(e)) {
          if (e.isPrimary) return { x: e.clientX, y: e.clientY };
        } else if (k(e)) return { x: e.clientX, y: e.clientY };
        return { x: 1 / 0, y: 1 / 0 };
      }
      let T =
        /\b(?:position|zIndex|opacity|transform|webkitTransform|mixBlendMode|filter|webkitFilter|isolation)\b/;
      function L(e) {
        let t = e.length;
        for (; t--; ) {
          let n = e[t];
          if (
            (ee(n, 'Missing node'),
            (function (e) {
              let t = getComputedStyle(e);
              return (
                !!(
                  'fixed' === t.position ||
                  ('auto' !== t.zIndex &&
                    ('static' !== t.position ||
                      (function (e) {
                        var t;
                        let n = getComputedStyle(
                          null !== (t = I(e)) && void 0 !== t ? t : e
                        ).display;
                        return 'flex' === n || 'inline-flex' === n;
                      })(e))) ||
                  1 > +t.opacity ||
                  ('transform' in t && 'none' !== t.transform) ||
                  ('webkitTransform' in t && 'none' !== t.webkitTransform) ||
                  ('mixBlendMode' in t && 'normal' !== t.mixBlendMode) ||
                  ('filter' in t && 'none' !== t.filter) ||
                  ('webkitFilter' in t && 'none' !== t.webkitFilter) ||
                  ('isolation' in t && 'isolate' === t.isolation) ||
                  T.test(t.willChange)
                ) || 'touch' === t.webkitOverflowScrolling
              );
            })(n))
          )
            return n;
        }
        return null;
      }
      function D(e) {
        return (e && Number(getComputedStyle(e).zIndex)) || 0;
      }
      function O(e) {
        let t = [];
        for (; e; ) t.push(e), (e = I(e));
        return t;
      }
      function I(e) {
        let { parentNode: t } = e;
        return t && t instanceof ShadowRoot ? t.host : t;
      }
      let z = 1,
        W = 2,
        F = 4,
        _ = 8,
        H =
          'coarse' ===
          (function () {
            if ('function' == typeof matchMedia)
              return matchMedia('(pointer:coarse)').matches ? 'coarse' : 'fine';
          })(),
        $ = [],
        B = !1,
        V = new Map(),
        U = new Map(),
        K = new Set();
      function Y(e) {
        let { target: t } = e,
          { x: n, y: r } = j(e);
        (B = !0),
          Z({ target: t, x: n, y: r }),
          J(),
          $.length > 0 && (Q('down', e), e.preventDefault(), e.stopPropagation());
      }
      function q(e) {
        let { x: t, y: n } = j(e);
        if ((B && 0 === e.buttons && ((B = !1), Q('up', e)), !B)) {
          let { target: r } = e;
          Z({ target: r, x: t, y: n });
        }
        Q('move', e), G(), $.length > 0 && e.preventDefault();
      }
      function X(e) {
        let { target: t } = e,
          { x: n, y: r } = j(e);
        U.clear(),
          (B = !1),
          $.length > 0 && e.preventDefault(),
          Q('up', e),
          Z({ target: t, x: n, y: r }),
          G(),
          J();
      }
      function Z({ target: e, x: t, y: n }) {
        $.splice(0);
        let r = null;
        e instanceof HTMLElement && (r = e),
          K.forEach(e => {
            let { element: o, hitAreaMargins: l } = e,
              i = o.getBoundingClientRect(),
              { bottom: a, left: u, right: c, top: s } = i,
              d = H ? l.coarse : l.fine;
            if (t >= u - d && t <= c + d && n >= s - d && n <= a + d) {
              if (
                null !== r &&
                document.contains(r) &&
                o !== r &&
                !o.contains(r) &&
                !r.contains(o) &&
                (function (e, t) {
                  let n;
                  if (e === t) throw Error('Cannot compare node with itself');
                  let r = { a: O(e), b: O(t) };
                  for (; r.a.at(-1) === r.b.at(-1); ) (e = r.a.pop()), (t = r.b.pop()), (n = e);
                  ee(
                    n,
                    'Stacking order can only be calculated for elements with a common ancestor'
                  );
                  let o = { a: D(L(r.a)), b: D(L(r.b)) };
                  if (o.a === o.b) {
                    let e = n.childNodes,
                      t = { a: r.a.at(-1), b: r.b.at(-1) },
                      o = e.length;
                    for (; o--; ) {
                      let n = e[o];
                      if (n === t.a) return 1;
                      if (n === t.b) return -1;
                    }
                  }
                  return Math.sign(o.a - o.b);
                })(r, o) > 0
              ) {
                let e = r,
                  t = !1;
                for (; e && !e.contains(o); ) {
                  var f;
                  if (
                    (f = e.getBoundingClientRect()).x < i.x + i.width &&
                    f.x + f.width > i.x &&
                    f.y < i.y + i.height &&
                    f.y + f.height > i.y
                  ) {
                    t = !0;
                    break;
                  }
                  e = e.parentElement;
                }
                if (t) return;
              }
              $.push(e);
            }
          });
      }
      function G() {
        let e = !1,
          t = !1;
        $.forEach(n => {
          let { direction: r } = n;
          'horizontal' === r ? (e = !0) : (t = !0);
        });
        let n = 0;
        U.forEach(e => {
          n |= e;
        }),
          e && t
            ? N('intersection', n)
            : e
              ? N('horizontal', n)
              : t
                ? N('vertical', n)
                : null !== M && (document.head.removeChild(M), (R = null), (M = null));
      }
      function J() {
        V.forEach((e, t) => {
          let { body: n } = t;
          n.removeEventListener('contextmenu', X),
            n.removeEventListener('pointerdown', Y),
            n.removeEventListener('pointerleave', q),
            n.removeEventListener('pointermove', q);
        }),
          window.removeEventListener('pointerup', X),
          window.removeEventListener('pointercancel', X),
          K.size > 0 &&
            (B
              ? ($.length > 0 &&
                  V.forEach((e, t) => {
                    let { body: n } = t;
                    e > 0 &&
                      (n.addEventListener('contextmenu', X),
                      n.addEventListener('pointerleave', q),
                      n.addEventListener('pointermove', q));
                  }),
                window.addEventListener('pointerup', X),
                window.addEventListener('pointercancel', X))
              : V.forEach((e, t) => {
                  let { body: n } = t;
                  e > 0 &&
                    (n.addEventListener('pointerdown', Y, { capture: !0 }),
                    n.addEventListener('pointermove', q));
                }));
      }
      function Q(e, t) {
        K.forEach(n => {
          let { setResizeHandlerState: r } = n;
          r(e, $.includes(n), t);
        });
      }
      function ee(e, t) {
        if (!e) throw (console.error(t), Error(t));
      }
      function et(e, t, n = 10) {
        return e.toFixed(n) === t.toFixed(n) ? 0 : e > t ? 1 : -1;
      }
      function en(e, t, n = 10) {
        return 0 === et(e, t, n);
      }
      function er(e, t, n) {
        return 0 === et(e, t, n);
      }
      function eo({ panelConstraints: e, panelIndex: t, size: n }) {
        let r = e[t];
        ee(null != r, `Panel constraints not found for index ${t}`);
        let { collapsedSize: o = 0, collapsible: l, maxSize: i = 100, minSize: a = 0 } = r;
        return (
          0 > et(n, a) && (n = l && 0 > et(n, (o + a) / 2) ? o : a),
          (n = parseFloat((n = Math.min(i, n)).toFixed(10)))
        );
      }
      function el({
        delta: e,
        initialLayout: t,
        panelConstraints: n,
        pivotIndices: r,
        prevLayout: o,
        trigger: l,
      }) {
        if (er(e, 0)) return t;
        let i = [...t],
          [a, u] = r;
        ee(null != a, 'Invalid first pivot index'), ee(null != u, 'Invalid second pivot index');
        let c = 0;
        if ('keyboard' === l) {
          {
            let r = e < 0 ? u : a,
              o = n[r];
            ee(o, `Panel constraints not found for index ${r}`);
            let { collapsedSize: l = 0, collapsible: i, minSize: c = 0 } = o;
            if (i) {
              let n = t[r];
              if ((ee(null != n, `Previous layout not found for panel index ${r}`), er(n, l))) {
                let t = c - n;
                et(t, Math.abs(e)) > 0 && (e = e < 0 ? 0 - t : t);
              }
            }
          }
          {
            let r = e < 0 ? a : u,
              o = n[r];
            ee(o, `No panel constraints found for index ${r}`);
            let { collapsedSize: l = 0, collapsible: i, minSize: c = 0 } = o;
            if (i) {
              let n = t[r];
              if ((ee(null != n, `Previous layout not found for panel index ${r}`), er(n, c))) {
                let t = n - l;
                et(t, Math.abs(e)) > 0 && (e = e < 0 ? 0 - t : t);
              }
            }
          }
        }
        {
          let r = e < 0 ? 1 : -1,
            o = e < 0 ? u : a,
            l = 0;
          for (;;) {
            let e = t[o];
            if (
              (ee(null != e, `Previous layout not found for panel index ${o}`),
              (l += eo({ panelConstraints: n, panelIndex: o, size: 100 }) - e),
              (o += r) < 0 || o >= n.length)
            )
              break;
          }
          let i = Math.min(Math.abs(e), Math.abs(l));
          e = e < 0 ? 0 - i : i;
        }
        {
          let r = e < 0 ? a : u;
          for (; r >= 0 && r < n.length; ) {
            let o = Math.abs(e) - Math.abs(c),
              l = t[r];
            ee(null != l, `Previous layout not found for panel index ${r}`);
            let a = eo({ panelConstraints: n, panelIndex: r, size: l - o });
            if (
              !er(l, a) &&
              ((c += l - a),
              (i[r] = a),
              c.toPrecision(3).localeCompare(Math.abs(e).toPrecision(3), void 0, { numeric: !0 }) >=
                0)
            )
              break;
            e < 0 ? r-- : r++;
          }
        }
        if (
          (function (e, t, n) {
            if (e.length !== t.length) return !1;
            for (let n = 0; n < e.length; n++) if (!er(e[n], t[n], void 0)) return !1;
            return !0;
          })(o, i)
        )
          return o;
        {
          let r = e < 0 ? u : a,
            o = t[r];
          ee(null != o, `Previous layout not found for panel index ${r}`);
          let l = o + c,
            s = eo({ panelConstraints: n, panelIndex: r, size: l });
          if (((i[r] = s), !er(s, l))) {
            let t = l - s,
              r = e < 0 ? u : a;
            for (; r >= 0 && r < n.length; ) {
              let o = i[r];
              ee(null != o, `Previous layout not found for panel index ${r}`);
              let l = eo({ panelConstraints: n, panelIndex: r, size: o + t });
              if ((er(o, l) || ((t -= l - o), (i[r] = l)), er(t, 0))) break;
              e > 0 ? r-- : r++;
            }
          }
        }
        return er(
          i.reduce((e, t) => t + e, 0),
          100
        )
          ? i
          : o;
      }
      function ei(e, t = document) {
        return Array.from(
          t.querySelectorAll(`[data-panel-resize-handle-id][data-panel-group-id="${e}"]`)
        );
      }
      function ea(e, t, n = document) {
        let r = ei(e, n).findIndex(e => e.getAttribute('data-panel-resize-handle-id') === t);
        return null != r ? r : null;
      }
      function eu(e, t, n) {
        let r = ea(e, t, n);
        return null != r ? [r, r + 1] : [-1, -1];
      }
      function ec(e, t = document) {
        var n;
        return t instanceof HTMLElement &&
          (null == t
            ? void 0
            : null === (n = t.dataset) || void 0 === n
              ? void 0
              : n.panelGroupId) == e
          ? t
          : t.querySelector(`[data-panel-group][data-panel-group-id="${e}"]`) || null;
      }
      function es(e, t = document) {
        return t.querySelector(`[data-panel-resize-handle-id="${e}"]`) || null;
      }
      function ed(e, t) {
        if (e.length !== t.length) return !1;
        for (let n = 0; n < e.length; n++) if (e[n] !== t[n]) return !1;
        return !0;
      }
      function ef(e, t) {
        let { x: n, y: r } = j(t);
        return 'horizontal' === e ? n : r;
      }
      function ep(e, t, n) {
        t.forEach((t, r) => {
          let o = e[r];
          ee(o, `Panel data not found for index ${r}`);
          let { callbacks: l, constraints: i, id: a } = o,
            { collapsedSize: u = 0, collapsible: c } = i,
            s = n[a];
          if (null == s || t !== s) {
            n[a] = t;
            let { onCollapse: e, onExpand: r, onResize: o } = l;
            o && o(t, s),
              c &&
                (e || r) &&
                (r && (null == s || en(s, u)) && !en(t, u) && r(),
                e && (null == s || !en(s, u)) && en(t, u) && e());
          }
        });
      }
      function ev(e, t) {
        if (e.length !== t.length) return !1;
        for (let n = 0; n < e.length; n++) if (e[n] != t[n]) return !1;
        return !0;
      }
      function eh(e) {
        try {
          if ('undefined' != typeof localStorage)
            (e.getItem = e => localStorage.getItem(e)),
              (e.setItem = (e, t) => {
                localStorage.setItem(e, t);
              });
          else throw Error('localStorage not supported in this environment');
        } catch (t) {
          console.error(t), (e.getItem = () => null), (e.setItem = () => {});
        }
      }
      function em(e) {
        return `react-resizable-panels:${e}`;
      }
      function eg(e) {
        return e
          .map(e => {
            let { constraints: t, id: n, idIsFromProps: r, order: o } = e;
            return r ? n : o ? `${o}:${JSON.stringify(t)}` : JSON.stringify(t);
          })
          .sort((e, t) => e.localeCompare(t))
          .join(',');
      }
      function ey(e, t) {
        try {
          let n = em(e),
            r = t.getItem(n);
          if (r) {
            let e = JSON.parse(r);
            if ('object' == typeof e && null != e) return e;
          }
        } catch (e) {}
        return null;
      }
      function ew(e, t, n, r, o) {
        var l;
        let i = em(e),
          a = eg(t),
          u = null !== (l = ey(e, o)) && void 0 !== l ? l : {};
        u[a] = { expandToSizes: Object.fromEntries(n.entries()), layout: r };
        try {
          o.setItem(i, JSON.stringify(u));
        } catch (e) {
          console.error(e);
        }
      }
      function eb({ layout: e, panelConstraints: t }) {
        let n = [...e],
          r = n.reduce((e, t) => e + t, 0);
        if (n.length !== t.length)
          throw Error(`Invalid ${t.length} panel layout: ${n.map(e => `${e}%`).join(', ')}`);
        if (!er(r, 100) && n.length > 0)
          for (let e = 0; e < t.length; e++) {
            let t = n[e];
            ee(null != t, `No layout data found for index ${e}`);
            let o = (100 / r) * t;
            n[e] = o;
          }
        let o = 0;
        for (let e = 0; e < t.length; e++) {
          let r = n[e];
          ee(null != r, `No layout data found for index ${e}`);
          let l = eo({ panelConstraints: t, panelIndex: e, size: r });
          r != l && ((o += r - l), (n[e] = l));
        }
        if (!er(o, 0))
          for (let e = 0; e < t.length; e++) {
            let r = n[e];
            ee(null != r, `No layout data found for index ${e}`);
            let l = eo({ panelConstraints: t, panelIndex: e, size: r + o });
            if (r !== l && ((o -= l - r), (n[e] = l), er(o, 0))) break;
          }
        return n;
      }
      let ex = {
          getItem: e => (eh(ex), ex.getItem(e)),
          setItem: (e, t) => {
            eh(ex), ex.setItem(e, t);
          },
        },
        eE = {};
      function eS({
        autoSaveId: e = null,
        children: t,
        className: n = '',
        direction: r,
        forwardedRef: o,
        id: l = null,
        onLayout: a = null,
        keyboardResizeBy: u = null,
        storage: c = ex,
        style: d,
        tagName: y = 'div',
        ...b
      }) {
        let x = E(l),
          S = m(null),
          [C, R] = g(null),
          [M, N] = g([]),
          j = (function () {
            let [e, t] = g(0);
            return s(() => t(e => e + 1), []);
          })(),
          T = m({}),
          L = m(new Map()),
          D = m(0),
          O = m({
            autoSaveId: e,
            direction: r,
            dragState: C,
            id: x,
            keyboardResizeBy: u,
            onLayout: a,
            storage: c,
          }),
          I = m({ layout: M, panelDataArray: [], panelDataArrayChanged: !1 });
        m({ didLogIdAndOrderWarning: !1, didLogPanelConstraintsWarning: !1, prevPanelIds: [] }),
          p(
            o,
            () => ({
              getId: () => O.current.id,
              getLayout: () => {
                let { layout: e } = I.current;
                return e;
              },
              setLayout: e => {
                let { onLayout: t } = O.current,
                  { layout: n, panelDataArray: r } = I.current,
                  o = eb({ layout: e, panelConstraints: r.map(e => e.constraints) });
                ed(n, o) || (N(o), (I.current.layout = o), t && t(o), ep(r, o, T.current));
              },
            }),
            []
          ),
          v(() => {
            (O.current.autoSaveId = e),
              (O.current.direction = r),
              (O.current.dragState = C),
              (O.current.id = x),
              (O.current.onLayout = a),
              (O.current.storage = c);
          }),
          (function ({
            committedValuesRef: e,
            eagerValuesRef: t,
            groupId: n,
            layout: r,
            panelDataArray: o,
            panelGroupElement: l,
            setLayout: i,
          }) {
            m({ didWarnAboutMissingResizeHandle: !1 }),
              v(() => {
                if (!l) return;
                let e = ei(n, l);
                for (let t = 0; t < o.length - 1; t++) {
                  let {
                      valueMax: n,
                      valueMin: l,
                      valueNow: i,
                    } = (function ({ layout: e, panelsArray: t, pivotIndices: n }) {
                      let r = 0,
                        o = 100,
                        l = 0,
                        i = 0,
                        a = n[0];
                      return (
                        ee(null != a, 'No pivot index found'),
                        t.forEach((e, t) => {
                          let { constraints: n } = e,
                            { maxSize: u = 100, minSize: c = 0 } = n;
                          t === a ? ((r = c), (o = u)) : ((l += c), (i += u));
                        }),
                        {
                          valueMax: Math.min(o, 100 - l),
                          valueMin: Math.max(r, 100 - i),
                          valueNow: e[a],
                        }
                      );
                    })({ layout: r, panelsArray: o, pivotIndices: [t, t + 1] }),
                    a = e[t];
                  if (null == a);
                  else {
                    let e = o[t];
                    ee(e, `No panel data found for index "${t}"`),
                      a.setAttribute('aria-controls', e.id),
                      a.setAttribute('aria-valuemax', '' + Math.round(n)),
                      a.setAttribute('aria-valuemin', '' + Math.round(l)),
                      a.setAttribute('aria-valuenow', null != i ? '' + Math.round(i) : '');
                  }
                }
                return () => {
                  e.forEach((e, t) => {
                    e.removeAttribute('aria-controls'),
                      e.removeAttribute('aria-valuemax'),
                      e.removeAttribute('aria-valuemin'),
                      e.removeAttribute('aria-valuenow');
                  });
                };
              }, [n, r, o, l]),
              f(() => {
                if (!l) return;
                let e = t.current;
                ee(e, 'Eager values not found');
                let { panelDataArray: o } = e;
                ee(null != ec(n, l), `No group found for id "${n}"`);
                let a = ei(n, l);
                ee(a, `No resize handles found for group id "${n}"`);
                let u = a.map(e => {
                  let t = e.getAttribute('data-panel-resize-handle-id');
                  ee(t, 'Resize handle element has no handle id attribute');
                  let [a, u] = (function (e, t, n, r = document) {
                    var o, l, i, a;
                    let u = es(t, r),
                      c = ei(e, r),
                      s = u ? c.indexOf(u) : -1;
                    return [
                      null !== (o = null === (l = n[s]) || void 0 === l ? void 0 : l.id) &&
                      void 0 !== o
                        ? o
                        : null,
                      null !== (i = null === (a = n[s + 1]) || void 0 === a ? void 0 : a.id) &&
                      void 0 !== i
                        ? i
                        : null,
                    ];
                  })(n, t, o, l);
                  if (null == a || null == u) return () => {};
                  let c = e => {
                    if (!e.defaultPrevented && 'Enter' === e.key) {
                      e.preventDefault();
                      let u = o.findIndex(e => e.id === a);
                      if (u >= 0) {
                        let e = o[u];
                        ee(e, `No panel data found for index ${u}`);
                        let a = r[u],
                          { collapsedSize: c = 0, collapsible: s, minSize: d = 0 } = e.constraints;
                        if (null != a && s) {
                          let e = el({
                            delta: er(a, c) ? d - c : c - a,
                            initialLayout: r,
                            panelConstraints: o.map(e => e.constraints),
                            pivotIndices: eu(n, t, l),
                            prevLayout: r,
                            trigger: 'keyboard',
                          });
                          r !== e && i(e);
                        }
                      }
                    }
                  };
                  return (
                    e.addEventListener('keydown', c),
                    () => {
                      e.removeEventListener('keydown', c);
                    }
                  );
                });
                return () => {
                  u.forEach(e => e());
                };
              }, [l, e, t, n, r, o, i]);
          })({
            committedValuesRef: O,
            eagerValuesRef: I,
            groupId: x,
            layout: M,
            panelDataArray: I.current.panelDataArray,
            setLayout: N,
            panelGroupElement: S.current,
          }),
          f(() => {
            let { panelDataArray: t } = I.current;
            if (e) {
              if (0 === M.length || M.length !== t.length) return;
              let n = eE[e];
              null == n &&
                ((n = (function (e, t = 10) {
                  let n = null;
                  return (...r) => {
                    null !== n && clearTimeout(n),
                      (n = setTimeout(() => {
                        e(...r);
                      }, t));
                  };
                })(ew, 100)),
                (eE[e] = n)),
                n(e, [...t], new Map(L.current), M, c);
            }
          }, [e, M, c]),
          f(() => {});
        let H = s(e => {
            let { onLayout: t } = O.current,
              { layout: n, panelDataArray: r } = I.current;
            if (e.constraints.collapsible) {
              let o = r.map(e => e.constraints),
                { collapsedSize: l = 0, panelSize: i, pivotIndices: a } = eM(r, e, n);
              if ((ee(null != i, `Panel size not found for panel "${e.id}"`), !en(i, l))) {
                L.current.set(e.id, i);
                let u = el({
                  delta: eR(r, e) === r.length - 1 ? i - l : l - i,
                  initialLayout: n,
                  panelConstraints: o,
                  pivotIndices: a,
                  prevLayout: n,
                  trigger: 'imperative-api',
                });
                ev(n, u) || (N(u), (I.current.layout = u), t && t(u), ep(r, u, T.current));
              }
            }
          }, []),
          $ = s((e, t) => {
            let { onLayout: n } = O.current,
              { layout: r, panelDataArray: o } = I.current;
            if (e.constraints.collapsible) {
              let l = o.map(e => e.constraints),
                {
                  collapsedSize: i = 0,
                  panelSize: a = 0,
                  minSize: u = 0,
                  pivotIndices: c,
                } = eM(o, e, r),
                s = null != t ? t : u;
              if (en(a, i)) {
                let t = L.current.get(e.id),
                  i = null != t && t >= s ? t : s,
                  u = el({
                    delta: eR(o, e) === o.length - 1 ? a - i : i - a,
                    initialLayout: r,
                    panelConstraints: l,
                    pivotIndices: c,
                    prevLayout: r,
                    trigger: 'imperative-api',
                  });
                ev(r, u) || (N(u), (I.current.layout = u), n && n(u), ep(o, u, T.current));
              }
            }
          }, []),
          B = s(e => {
            let { layout: t, panelDataArray: n } = I.current,
              { panelSize: r } = eM(n, e, t);
            return ee(null != r, `Panel size not found for panel "${e.id}"`), r;
          }, []),
          V = s(
            (e, t) => {
              let { panelDataArray: n } = I.current,
                r = eR(n, e);
              return (function ({
                defaultSize: e,
                dragState: t,
                layout: n,
                panelData: r,
                panelIndex: o,
                precision: l = 3,
              }) {
                let i = n[o];
                return {
                  flexBasis: 0,
                  flexGrow:
                    null == i
                      ? void 0 != e
                        ? e.toPrecision(l)
                        : '1'
                      : 1 === r.length
                        ? '1'
                        : i.toPrecision(l),
                  flexShrink: 1,
                  overflow: 'hidden',
                  pointerEvents: null !== t ? 'none' : void 0,
                };
              })({ defaultSize: t, dragState: C, layout: M, panelData: n, panelIndex: r });
            },
            [C, M]
          ),
          K = s(e => {
            let { layout: t, panelDataArray: n } = I.current,
              { collapsedSize: r = 0, collapsible: o, panelSize: l } = eM(n, e, t);
            return ee(null != l, `Panel size not found for panel "${e.id}"`), !0 === o && en(l, r);
          }, []),
          Y = s(e => {
            let { layout: t, panelDataArray: n } = I.current,
              { collapsedSize: r = 0, collapsible: o, panelSize: l } = eM(n, e, t);
            return ee(null != l, `Panel size not found for panel "${e.id}"`), !o || et(l, r) > 0;
          }, []),
          q = s(
            e => {
              let { panelDataArray: t } = I.current;
              t.push(e),
                t.sort((e, t) => {
                  let n = e.order,
                    r = t.order;
                  return null == n && null == r ? 0 : null == n ? -1 : null == r ? 1 : n - r;
                }),
                (I.current.panelDataArrayChanged = !0),
                j();
            },
            [j]
          );
        v(() => {
          if (I.current.panelDataArrayChanged) {
            I.current.panelDataArrayChanged = !1;
            let { autoSaveId: n, onLayout: r, storage: o } = O.current,
              { layout: l, panelDataArray: i } = I.current,
              a = null;
            if (n) {
              var e, t;
              let r =
                null !== (t = (null !== (e = ey(n, o)) && void 0 !== e ? e : {})[eg(i)]) &&
                void 0 !== t
                  ? t
                  : null;
              r && ((L.current = new Map(Object.entries(r.expandToSizes))), (a = r.layout));
            }
            null == a &&
              (a = (function ({ panelDataArray: e }) {
                let t = Array(e.length),
                  n = e.map(e => e.constraints),
                  r = 0,
                  o = 100;
                for (let l = 0; l < e.length; l++) {
                  let e = n[l];
                  ee(e, `Panel constraints not found for index ${l}`);
                  let { defaultSize: i } = e;
                  null != i && (r++, (t[l] = i), (o -= i));
                }
                for (let l = 0; l < e.length; l++) {
                  let i = n[l];
                  ee(i, `Panel constraints not found for index ${l}`);
                  let { defaultSize: a } = i;
                  if (null != a) continue;
                  let u = o / (e.length - r);
                  r++, (t[l] = u), (o -= u);
                }
                return t;
              })({ panelDataArray: i }));
            let u = eb({ layout: a, panelConstraints: i.map(e => e.constraints) });
            ed(l, u) || (N(u), (I.current.layout = u), r && r(u), ep(i, u, T.current));
          }
        }),
          v(() => {
            let e = I.current;
            return () => {
              e.layout = [];
            };
          }, []);
        let X = s(e => {
            let t = !1,
              n = S.current;
            return (
              n &&
                'rtl' === window.getComputedStyle(n, null).getPropertyValue('direction') &&
                (t = !0),
              function (n) {
                n.preventDefault();
                let r = S.current;
                if (!r) return () => null;
                let {
                    direction: o,
                    dragState: l,
                    id: i,
                    keyboardResizeBy: a,
                    onLayout: u,
                  } = O.current,
                  { layout: c, panelDataArray: s } = I.current,
                  { initialLayout: d } = null != l ? l : {},
                  f = eu(i, e, r),
                  p = (function (e, t, n, r, o, l) {
                    if (P(e)) {
                      let t = 'horizontal' === n,
                        r = 0;
                      r = e.shiftKey ? 100 : null != o ? o : 10;
                      let l = 0;
                      switch (e.key) {
                        case 'ArrowDown':
                          l = t ? 0 : r;
                          break;
                        case 'ArrowLeft':
                          l = t ? -r : 0;
                          break;
                        case 'ArrowRight':
                          l = t ? r : 0;
                          break;
                        case 'ArrowUp':
                          l = t ? 0 : -r;
                          break;
                        case 'End':
                          l = 100;
                          break;
                        case 'Home':
                          l = -100;
                      }
                      return l;
                    }
                    return null == r
                      ? 0
                      : (function (e, t, n, r, o) {
                          let l = 'horizontal' === n,
                            i = es(t, o);
                          ee(i, `No resize handle element found for id "${t}"`);
                          let a = i.getAttribute('data-panel-group-id');
                          ee(a, 'Resize handle element has no group id attribute');
                          let { initialCursorPosition: u } = r,
                            c = ef(n, e),
                            s = ec(a, o);
                          ee(s, `No group element found for id "${a}"`);
                          let d = s.getBoundingClientRect();
                          return ((c - u) / (l ? d.width : d.height)) * 100;
                        })(e, t, n, r, l);
                  })(n, e, o, l, a, r),
                  v = 'horizontal' === o;
                v && t && (p = -p);
                let h = el({
                    delta: p,
                    initialLayout: null != d ? d : c,
                    panelConstraints: s.map(e => e.constraints),
                    pivotIndices: f,
                    prevLayout: c,
                    trigger: P(n) ? 'keyboard' : 'mouse-or-touch',
                  }),
                  m = !ev(c, h);
                if ((A(n) || k(n)) && D.current != p) {
                  var g, y;
                  ((D.current = p), m || 0 === p)
                    ? U.set(e, 0)
                    : v
                      ? ((g = p < 0 ? z : W), U.set(e, g))
                      : ((y = p < 0 ? F : _), U.set(e, y));
                }
                m && (N(h), (I.current.layout = h), u && u(h), ep(s, h, T.current));
              }
            );
          }, []),
          Z = s((e, t) => {
            let { onLayout: n } = O.current,
              { layout: r, panelDataArray: o } = I.current,
              l = o.map(e => e.constraints),
              { panelSize: i, pivotIndices: a } = eM(o, e, r);
            ee(null != i, `Panel size not found for panel "${e.id}"`);
            let u = el({
              delta: eR(o, e) === o.length - 1 ? i - t : t - i,
              initialLayout: r,
              panelConstraints: l,
              pivotIndices: a,
              prevLayout: r,
              trigger: 'imperative-api',
            });
            ev(r, u) || (N(u), (I.current.layout = u), n && n(u), ep(o, u, T.current));
          }, []),
          G = s(
            (e, t) => {
              let { layout: n, panelDataArray: r } = I.current,
                { collapsedSize: o = 0, collapsible: l } = t,
                {
                  collapsedSize: i = 0,
                  collapsible: a,
                  maxSize: u = 100,
                  minSize: c = 0,
                } = e.constraints,
                { panelSize: s } = eM(r, e, n);
              null != s &&
                (l && a && en(s, o) ? en(o, i) || Z(e, i) : s < c ? Z(e, c) : s > u && Z(e, u));
            },
            [Z]
          ),
          J = s((e, t) => {
            let { direction: n } = O.current,
              { layout: r } = I.current;
            if (!S.current) return;
            let o = es(e, S.current);
            ee(o, `Drag handle element not found for id "${e}"`);
            let l = ef(n, t);
            R({
              dragHandleId: e,
              dragHandleRect: o.getBoundingClientRect(),
              initialCursorPosition: l,
              initialLayout: r,
            });
          }, []),
          Q = s(() => {
            R(null);
          }, []),
          eo = s(
            e => {
              let { panelDataArray: t } = I.current,
                n = eR(t, e);
              n >= 0 &&
                (t.splice(n, 1),
                delete T.current[e.id],
                (I.current.panelDataArrayChanged = !0),
                j());
            },
            [j]
          ),
          ea = h(
            () => ({
              collapsePanel: H,
              direction: r,
              dragState: C,
              expandPanel: $,
              getPanelSize: B,
              getPanelStyle: V,
              groupId: x,
              isPanelCollapsed: K,
              isPanelExpanded: Y,
              reevaluatePanelConstraints: G,
              registerPanel: q,
              registerResizeHandle: X,
              resizePanel: Z,
              startDragging: J,
              stopDragging: Q,
              unregisterPanel: eo,
              panelGroupElement: S.current,
            }),
            [H, C, r, $, B, V, x, K, Y, G, q, X, Z, J, Q, eo]
          );
        return i(
          w.Provider,
          { value: ea },
          i(y, {
            ...b,
            children: t,
            className: n,
            id: l,
            ref: S,
            style: {
              display: 'flex',
              flexDirection: 'horizontal' === r ? 'row' : 'column',
              height: '100%',
              overflow: 'hidden',
              width: '100%',
              ...d,
            },
            'data-panel-group': '',
            'data-panel-group-direction': r,
            'data-panel-group-id': x,
          })
        );
      }
      let eC = c((e, t) => i(eS, { ...e, forwardedRef: t }));
      function eR(e, t) {
        return e.findIndex(e => e === t || e.id === t.id);
      }
      function eM(e, t, n) {
        let r = eR(e, t),
          o = r === e.length - 1,
          l = n[r];
        return { ...t.constraints, panelSize: l, pivotIndices: o ? [r - 1, r] : [r, r + 1] };
      }
      function eN({
        children: e = null,
        className: t = '',
        disabled: n = !1,
        hitAreaMargins: r,
        id: o,
        onBlur: l,
        onDragging: a,
        onFocus: u,
        style: c = {},
        tabIndex: s = 0,
        tagName: p = 'div',
        ...h
      }) {
        var y, b;
        let x = m(null),
          S = m({ onDragging: a });
        f(() => {
          S.current.onDragging = a;
        });
        let C = d(w);
        if (null === C)
          throw Error(
            'PanelResizeHandle components must be rendered within a PanelGroup container'
          );
        let {
            direction: R,
            groupId: M,
            registerResizeHandle: N,
            startDragging: P,
            stopDragging: A,
            panelGroupElement: k,
          } = C,
          j = E(o),
          [T, L] = g('inactive'),
          [D, O] = g(!1),
          [I, z] = g(null),
          W = m({ state: T });
        v(() => {
          W.current.state = T;
        }),
          f(() => {
            if (n) z(null);
            else {
              let e = N(j);
              z(() => e);
            }
          }, [n, j, N]);
        let F = null !== (y = null == r ? void 0 : r.coarse) && void 0 !== y ? y : 15,
          _ = null !== (b = null == r ? void 0 : r.fine) && void 0 !== b ? b : 5;
        return (
          f(() => {
            if (n || null == I) return;
            let e = x.current;
            return (
              ee(e, 'Element ref not attached'),
              (function (e, t, n, r, o) {
                var l;
                let { ownerDocument: i } = t,
                  a = { direction: n, element: t, hitAreaMargins: r, setResizeHandlerState: o },
                  u = null !== (l = V.get(i)) && void 0 !== l ? l : 0;
                return (
                  V.set(i, u + 1),
                  K.add(a),
                  J(),
                  function () {
                    var t;
                    U.delete(e), K.delete(a);
                    let n = null !== (t = V.get(i)) && void 0 !== t ? t : 1;
                    if ((V.set(i, n - 1), J(), 1 === n && V.delete(i), $.includes(a))) {
                      let e = $.indexOf(a);
                      e >= 0 && $.splice(e, 1), G(), o('up', !0, null);
                    }
                  }
                );
              })(j, e, R, { coarse: F, fine: _ }, (e, t, n) => {
                if (t)
                  switch (e) {
                    case 'down': {
                      L('drag'), ee(n, 'Expected event to be defined for "down" action'), P(j, n);
                      let { onDragging: e } = S.current;
                      e && e(!0);
                      break;
                    }
                    case 'move': {
                      let { state: e } = W.current;
                      'drag' !== e && L('hover'),
                        ee(n, 'Expected event to be defined for "move" action'),
                        I(n);
                      break;
                    }
                    case 'up': {
                      L('hover'), A();
                      let { onDragging: e } = S.current;
                      e && e(!1);
                    }
                  }
                else L('inactive');
              })
            );
          }, [F, R, n, _, N, j, I, P, A]),
          !(function ({ disabled: e, handleId: t, resizeHandler: n, panelGroupElement: r }) {
            f(() => {
              if (e || null == n || null == r) return;
              let o = es(t, r);
              if (null == o) return;
              let l = e => {
                if (!e.defaultPrevented)
                  switch (e.key) {
                    case 'ArrowDown':
                    case 'ArrowLeft':
                    case 'ArrowRight':
                    case 'ArrowUp':
                    case 'End':
                    case 'Home':
                      e.preventDefault(), n(e);
                      break;
                    case 'F6': {
                      e.preventDefault();
                      let n = o.getAttribute('data-panel-group-id');
                      ee(n, `No group element found for id "${n}"`);
                      let l = ei(n, r),
                        i = ea(n, t, r);
                      ee(null !== i, `No resize element found for id "${t}"`);
                      let a = e.shiftKey
                        ? i > 0
                          ? i - 1
                          : l.length - 1
                        : i + 1 < l.length
                          ? i + 1
                          : 0;
                      l[a].focus();
                    }
                  }
              };
              return (
                o.addEventListener('keydown', l),
                () => {
                  o.removeEventListener('keydown', l);
                }
              );
            }, [r, e, t, n]);
          })({ disabled: n, handleId: j, resizeHandler: I, panelGroupElement: k }),
          i(p, {
            ...h,
            children: e,
            className: t,
            id: o,
            onBlur: () => {
              O(!1), null == l || l();
            },
            onFocus: () => {
              O(!0), null == u || u();
            },
            ref: x,
            role: 'separator',
            style: { touchAction: 'none', userSelect: 'none', ...c },
            tabIndex: s,
            'data-panel-group-direction': R,
            'data-panel-group-id': M,
            'data-resize-handle': '',
            'data-resize-handle-active': 'drag' === T ? 'pointer' : D ? 'keyboard' : void 0,
            'data-resize-handle-state': T,
            'data-panel-resize-handle-enabled': !n,
            'data-panel-resize-handle-id': j,
          })
        );
      }
      (eS.displayName = 'PanelGroup'),
        (eC.displayName = 'forwardRef(PanelGroup)'),
        (eN.displayName = 'PanelResizeHandle');
    },
    8149: (e, t, n) => {
      n.d(t, { M: () => r });
      function r(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
        return function (r) {
          if ((e?.(r), !1 === n || !r.defaultPrevented)) return t?.(r);
        };
      }
    },
    7871: (e, t, n) => {
      n.d(t, {
        aU: () => eC,
        $j: () => eR,
        VY: () => eS,
        dk: () => eN,
        aV: () => eE,
        h_: () => ex,
        fC: () => ew,
        Dx: () => eM,
        xz: () => eb,
      });
      var r = n(2265),
        o = n(8324),
        l = n(1584),
        i = n(8149),
        a = n(3201),
        u = n(1715),
        c = n(3938),
        s = n(467),
        d = n(6935),
        f = n(1336),
        p = e => {
          let { present: t, children: n } = e,
            o = (function (e) {
              var t, n;
              let [o, l] = r.useState(),
                i = r.useRef({}),
                a = r.useRef(e),
                u = r.useRef('none'),
                [c, s] =
                  ((t = e ? 'mounted' : 'unmounted'),
                  (n = {
                    mounted: { UNMOUNT: 'unmounted', ANIMATION_OUT: 'unmountSuspended' },
                    unmountSuspended: { MOUNT: 'mounted', ANIMATION_END: 'unmounted' },
                    unmounted: { MOUNT: 'mounted' },
                  }),
                  r.useReducer((e, t) => {
                    let r = n[e][t];
                    return null != r ? r : e;
                  }, t));
              return (
                r.useEffect(() => {
                  let e = v(i.current);
                  u.current = 'mounted' === c ? e : 'none';
                }, [c]),
                (0, f.b)(() => {
                  let t = i.current,
                    n = a.current;
                  if (n !== e) {
                    let r = u.current,
                      o = v(t);
                    e
                      ? s('MOUNT')
                      : 'none' === o || (null == t ? void 0 : t.display) === 'none'
                        ? s('UNMOUNT')
                        : n && r !== o
                          ? s('ANIMATION_OUT')
                          : s('UNMOUNT'),
                      (a.current = e);
                  }
                }, [e, s]),
                (0, f.b)(() => {
                  if (o) {
                    var e;
                    let t;
                    let n = null !== (e = o.ownerDocument.defaultView) && void 0 !== e ? e : window,
                      r = e => {
                        let r = v(i.current).includes(e.animationName);
                        if (e.target === o && r && (s('ANIMATION_END'), !a.current)) {
                          let e = o.style.animationFillMode;
                          (o.style.animationFillMode = 'forwards'),
                            (t = n.setTimeout(() => {
                              'forwards' === o.style.animationFillMode &&
                                (o.style.animationFillMode = e);
                            }));
                        }
                      },
                      l = e => {
                        e.target === o && (u.current = v(i.current));
                      };
                    return (
                      o.addEventListener('animationstart', l),
                      o.addEventListener('animationcancel', r),
                      o.addEventListener('animationend', r),
                      () => {
                        n.clearTimeout(t),
                          o.removeEventListener('animationstart', l),
                          o.removeEventListener('animationcancel', r),
                          o.removeEventListener('animationend', r);
                      }
                    );
                  }
                  s('ANIMATION_END');
                }, [o, s]),
                {
                  isPresent: ['mounted', 'unmountSuspended'].includes(c),
                  ref: r.useCallback(e => {
                    e && (i.current = getComputedStyle(e)), l(e);
                  }, []),
                }
              );
            })(t),
            i = 'function' == typeof n ? n({ present: o.isPresent }) : r.Children.only(n),
            a = (0, l.e)(
              o.ref,
              (function (e) {
                var t, n;
                let r =
                    null === (t = Object.getOwnPropertyDescriptor(e.props, 'ref')) || void 0 === t
                      ? void 0
                      : t.get,
                  o = r && 'isReactWarning' in r && r.isReactWarning;
                return o
                  ? e.ref
                  : (o =
                        (r =
                          null === (n = Object.getOwnPropertyDescriptor(e, 'ref')) || void 0 === n
                            ? void 0
                            : n.get) &&
                        'isReactWarning' in r &&
                        r.isReactWarning)
                    ? e.props.ref
                    : e.props.ref || e.ref;
              })(i)
            );
          return 'function' == typeof n || o.isPresent ? r.cloneElement(i, { ref: a }) : null;
        };
      function v(e) {
        return (null == e ? void 0 : e.animationName) || 'none';
      }
      p.displayName = 'Presence';
      var h = n(5171),
        m = n(589),
        g = n(9418),
        y = n(8369),
        w = n(1538),
        b = n(7437),
        x = 'Dialog',
        [E, S] = (0, o.b)(x),
        [C, R] = E(x),
        M = e => {
          let {
              __scopeDialog: t,
              children: n,
              open: o,
              defaultOpen: l,
              onOpenChange: i,
              modal: c = !0,
            } = e,
            s = r.useRef(null),
            d = r.useRef(null),
            [f = !1, p] = (0, u.T)({ prop: o, defaultProp: l, onChange: i });
          return (0, b.jsx)(C, {
            scope: t,
            triggerRef: s,
            contentRef: d,
            contentId: (0, a.M)(),
            titleId: (0, a.M)(),
            descriptionId: (0, a.M)(),
            open: f,
            onOpenChange: p,
            onOpenToggle: r.useCallback(() => p(e => !e), [p]),
            modal: c,
            children: n,
          });
        };
      M.displayName = x;
      var N = 'DialogTrigger',
        P = r.forwardRef((e, t) => {
          let { __scopeDialog: n, ...r } = e,
            o = R(N, n),
            a = (0, l.e)(t, o.triggerRef);
          return (0, b.jsx)(h.WV.button, {
            type: 'button',
            'aria-haspopup': 'dialog',
            'aria-expanded': o.open,
            'aria-controls': o.contentId,
            'data-state': Y(o.open),
            ...r,
            ref: a,
            onClick: (0, i.M)(e.onClick, o.onOpenToggle),
          });
        });
      P.displayName = N;
      var A = 'DialogPortal',
        [k, j] = E(A, { forceMount: void 0 }),
        T = e => {
          let { __scopeDialog: t, forceMount: n, children: o, container: l } = e,
            i = R(A, t);
          return (0, b.jsx)(k, {
            scope: t,
            forceMount: n,
            children: r.Children.map(o, e =>
              (0, b.jsx)(p, {
                present: n || i.open,
                children: (0, b.jsx)(d.h, { asChild: !0, container: l, children: e }),
              })
            ),
          });
        };
      T.displayName = A;
      var L = 'DialogOverlay',
        D = r.forwardRef((e, t) => {
          let n = j(L, e.__scopeDialog),
            { forceMount: r = n.forceMount, ...o } = e,
            l = R(L, e.__scopeDialog);
          return l.modal
            ? (0, b.jsx)(p, { present: r || l.open, children: (0, b.jsx)(O, { ...o, ref: t }) })
            : null;
        });
      D.displayName = L;
      var O = r.forwardRef((e, t) => {
          let { __scopeDialog: n, ...r } = e,
            o = R(L, n);
          return (0, b.jsx)(g.Z, {
            as: w.g7,
            allowPinchZoom: !0,
            shards: [o.contentRef],
            children: (0, b.jsx)(h.WV.div, {
              'data-state': Y(o.open),
              ...r,
              ref: t,
              style: { pointerEvents: 'auto', ...r.style },
            }),
          });
        }),
        I = 'DialogContent',
        z = r.forwardRef((e, t) => {
          let n = j(I, e.__scopeDialog),
            { forceMount: r = n.forceMount, ...o } = e,
            l = R(I, e.__scopeDialog);
          return (0, b.jsx)(p, {
            present: r || l.open,
            children: l.modal ? (0, b.jsx)(W, { ...o, ref: t }) : (0, b.jsx)(F, { ...o, ref: t }),
          });
        });
      z.displayName = I;
      var W = r.forwardRef((e, t) => {
          let n = R(I, e.__scopeDialog),
            o = r.useRef(null),
            a = (0, l.e)(t, n.contentRef, o);
          return (
            r.useEffect(() => {
              let e = o.current;
              if (e) return (0, y.Ry)(e);
            }, []),
            (0, b.jsx)(_, {
              ...e,
              ref: a,
              trapFocus: n.open,
              disableOutsidePointerEvents: !0,
              onCloseAutoFocus: (0, i.M)(e.onCloseAutoFocus, e => {
                var t;
                e.preventDefault(),
                  null === (t = n.triggerRef.current) || void 0 === t || t.focus();
              }),
              onPointerDownOutside: (0, i.M)(e.onPointerDownOutside, e => {
                let t = e.detail.originalEvent,
                  n = 0 === t.button && !0 === t.ctrlKey;
                (2 === t.button || n) && e.preventDefault();
              }),
              onFocusOutside: (0, i.M)(e.onFocusOutside, e => e.preventDefault()),
            })
          );
        }),
        F = r.forwardRef((e, t) => {
          let n = R(I, e.__scopeDialog),
            o = r.useRef(!1),
            l = r.useRef(!1);
          return (0, b.jsx)(_, {
            ...e,
            ref: t,
            trapFocus: !1,
            disableOutsidePointerEvents: !1,
            onCloseAutoFocus: t => {
              var r, i;
              null === (r = e.onCloseAutoFocus) || void 0 === r || r.call(e, t),
                t.defaultPrevented ||
                  (o.current || null === (i = n.triggerRef.current) || void 0 === i || i.focus(),
                  t.preventDefault()),
                (o.current = !1),
                (l.current = !1);
            },
            onInteractOutside: t => {
              var r, i;
              null === (r = e.onInteractOutside) || void 0 === r || r.call(e, t),
                t.defaultPrevented ||
                  ((o.current = !0),
                  'pointerdown' !== t.detail.originalEvent.type || (l.current = !0));
              let a = t.target;
              (null === (i = n.triggerRef.current) || void 0 === i ? void 0 : i.contains(a)) &&
                t.preventDefault(),
                'focusin' === t.detail.originalEvent.type && l.current && t.preventDefault();
            },
          });
        }),
        _ = r.forwardRef((e, t) => {
          let { __scopeDialog: n, trapFocus: o, onOpenAutoFocus: i, onCloseAutoFocus: a, ...u } = e,
            d = R(I, n),
            f = r.useRef(null),
            p = (0, l.e)(t, f);
          return (
            (0, m.EW)(),
            (0, b.jsxs)(b.Fragment, {
              children: [
                (0, b.jsx)(s.M, {
                  asChild: !0,
                  loop: !0,
                  trapped: o,
                  onMountAutoFocus: i,
                  onUnmountAutoFocus: a,
                  children: (0, b.jsx)(c.XB, {
                    role: 'dialog',
                    id: d.contentId,
                    'aria-describedby': d.descriptionId,
                    'aria-labelledby': d.titleId,
                    'data-state': Y(d.open),
                    ...u,
                    ref: p,
                    onDismiss: () => d.onOpenChange(!1),
                  }),
                }),
                (0, b.jsxs)(b.Fragment, {
                  children: [
                    (0, b.jsx)(G, { titleId: d.titleId }),
                    (0, b.jsx)(J, { contentRef: f, descriptionId: d.descriptionId }),
                  ],
                }),
              ],
            })
          );
        }),
        H = 'DialogTitle',
        $ = r.forwardRef((e, t) => {
          let { __scopeDialog: n, ...r } = e,
            o = R(H, n);
          return (0, b.jsx)(h.WV.h2, { id: o.titleId, ...r, ref: t });
        });
      $.displayName = H;
      var B = 'DialogDescription',
        V = r.forwardRef((e, t) => {
          let { __scopeDialog: n, ...r } = e,
            o = R(B, n);
          return (0, b.jsx)(h.WV.p, { id: o.descriptionId, ...r, ref: t });
        });
      V.displayName = B;
      var U = 'DialogClose',
        K = r.forwardRef((e, t) => {
          let { __scopeDialog: n, ...r } = e,
            o = R(U, n);
          return (0, b.jsx)(h.WV.button, {
            type: 'button',
            ...r,
            ref: t,
            onClick: (0, i.M)(e.onClick, () => o.onOpenChange(!1)),
          });
        });
      function Y(e) {
        return e ? 'open' : 'closed';
      }
      K.displayName = U;
      var q = 'DialogTitleWarning',
        [X, Z] = (0, o.k)(q, { contentName: I, titleName: H, docsSlug: 'dialog' }),
        G = e => {
          let { titleId: t } = e,
            n = Z(q),
            o = '`'
              .concat(n.contentName, '` requires a `')
              .concat(
                n.titleName,
                '` for the component to be accessible for screen reader users.\n\nIf you want to hide the `'
              )
              .concat(
                n.titleName,
                '`, you can wrap it with our VisuallyHidden component.\n\nFor more information, see https://radix-ui.com/primitives/docs/components/'
              )
              .concat(n.docsSlug);
          return (
            r.useEffect(() => {
              t && !document.getElementById(t) && console.error(o);
            }, [o, t]),
            null
          );
        },
        J = e => {
          let { contentRef: t, descriptionId: n } = e,
            o = Z('DialogDescriptionWarning'),
            l = 'Warning: Missing `Description` or `aria-describedby={undefined}` for {'.concat(
              o.contentName,
              '}.'
            );
          return (
            r.useEffect(() => {
              var e;
              let r =
                null === (e = t.current) || void 0 === e
                  ? void 0
                  : e.getAttribute('aria-describedby');
              n && r && !document.getElementById(n) && console.warn(l);
            }, [l, t, n]),
            null
          );
        },
        Q = 'AlertDialog',
        [ee, et] = (0, o.b)(Q, [S]),
        en = S(),
        er = e => {
          let { __scopeAlertDialog: t, ...n } = e,
            r = en(t);
          return (0, b.jsx)(M, { ...r, ...n, modal: !0 });
        };
      er.displayName = Q;
      var eo = r.forwardRef((e, t) => {
        let { __scopeAlertDialog: n, ...r } = e,
          o = en(n);
        return (0, b.jsx)(P, { ...o, ...r, ref: t });
      });
      eo.displayName = 'AlertDialogTrigger';
      var el = e => {
        let { __scopeAlertDialog: t, ...n } = e,
          r = en(t);
        return (0, b.jsx)(T, { ...r, ...n });
      };
      el.displayName = 'AlertDialogPortal';
      var ei = r.forwardRef((e, t) => {
        let { __scopeAlertDialog: n, ...r } = e,
          o = en(n);
        return (0, b.jsx)(D, { ...o, ...r, ref: t });
      });
      ei.displayName = 'AlertDialogOverlay';
      var ea = 'AlertDialogContent',
        [eu, ec] = ee(ea),
        es = r.forwardRef((e, t) => {
          let { __scopeAlertDialog: n, children: o, ...a } = e,
            u = en(n),
            c = r.useRef(null),
            s = (0, l.e)(t, c),
            d = r.useRef(null);
          return (0, b.jsx)(X, {
            contentName: ea,
            titleName: ed,
            docsSlug: 'alert-dialog',
            children: (0, b.jsx)(eu, {
              scope: n,
              cancelRef: d,
              children: (0, b.jsxs)(z, {
                role: 'alertdialog',
                ...u,
                ...a,
                ref: s,
                onOpenAutoFocus: (0, i.M)(a.onOpenAutoFocus, e => {
                  var t;
                  e.preventDefault(),
                    null === (t = d.current) || void 0 === t || t.focus({ preventScroll: !0 });
                }),
                onPointerDownOutside: e => e.preventDefault(),
                onInteractOutside: e => e.preventDefault(),
                children: [(0, b.jsx)(w.A4, { children: o }), (0, b.jsx)(ey, { contentRef: c })],
              }),
            }),
          });
        });
      es.displayName = ea;
      var ed = 'AlertDialogTitle',
        ef = r.forwardRef((e, t) => {
          let { __scopeAlertDialog: n, ...r } = e,
            o = en(n);
          return (0, b.jsx)($, { ...o, ...r, ref: t });
        });
      ef.displayName = ed;
      var ep = 'AlertDialogDescription',
        ev = r.forwardRef((e, t) => {
          let { __scopeAlertDialog: n, ...r } = e,
            o = en(n);
          return (0, b.jsx)(V, { ...o, ...r, ref: t });
        });
      ev.displayName = ep;
      var eh = r.forwardRef((e, t) => {
        let { __scopeAlertDialog: n, ...r } = e,
          o = en(n);
        return (0, b.jsx)(K, { ...o, ...r, ref: t });
      });
      eh.displayName = 'AlertDialogAction';
      var em = 'AlertDialogCancel',
        eg = r.forwardRef((e, t) => {
          let { __scopeAlertDialog: n, ...r } = e,
            { cancelRef: o } = ec(em, n),
            i = en(n),
            a = (0, l.e)(t, o);
          return (0, b.jsx)(K, { ...i, ...r, ref: a });
        });
      eg.displayName = em;
      var ey = e => {
          let { contentRef: t } = e,
            n = '`'
              .concat(
                ea,
                '` requires a description for the component to be accessible for screen reader users.\n\nYou can add a description to the `'
              )
              .concat(ea, '` by passing a `')
              .concat(
                ep,
                '` component as a child, which also benefits sighted users by adding visible context to the dialog.\n\nAlternatively, you can use your own component as a description by assigning it an `id` and passing the same value to the `aria-describedby` prop in `'
              )
              .concat(
                ea,
                '`. If the description is confusing or duplicative for sighted users, you can use the `@radix-ui/react-visually-hidden` primitive as a wrapper around your description component.\n\nFor more information, see https://radix-ui.com/primitives/docs/components/alert-dialog'
              );
          return (
            r.useEffect(() => {
              var e;
              document.getElementById(
                null === (e = t.current) || void 0 === e
                  ? void 0
                  : e.getAttribute('aria-describedby')
              ) || console.warn(n);
            }, [n, t]),
            null
          );
        },
        ew = er,
        eb = eo,
        ex = el,
        eE = ei,
        eS = es,
        eC = eh,
        eR = eg,
        eM = ef,
        eN = ev;
    },
    8324: (e, t, n) => {
      n.d(t, { b: () => i, k: () => l });
      var r = n(2265),
        o = n(7437);
      function l(e, t) {
        let n = r.createContext(t),
          l = e => {
            let { children: t, ...l } = e,
              i = r.useMemo(() => l, Object.values(l));
            return (0, o.jsx)(n.Provider, { value: i, children: t });
          };
        return (
          (l.displayName = e + 'Provider'),
          [
            l,
            function (o) {
              let l = r.useContext(n);
              if (l) return l;
              if (void 0 !== t) return t;
              throw Error(`\`${o}\` must be used within \`${e}\``);
            },
          ]
        );
      }
      function i(e, t = []) {
        let n = [],
          l = () => {
            let t = n.map(e => r.createContext(e));
            return function (n) {
              let o = n?.[e] || t;
              return r.useMemo(() => ({ [`__scope${e}`]: { ...n, [e]: o } }), [n, o]);
            };
          };
        return (
          (l.scopeName = e),
          [
            function (t, l) {
              let i = r.createContext(l),
                a = n.length;
              n = [...n, l];
              let u = t => {
                let { scope: n, children: l, ...u } = t,
                  c = n?.[e]?.[a] || i,
                  s = r.useMemo(() => u, Object.values(u));
                return (0, o.jsx)(c.Provider, { value: s, children: l });
              };
              return (
                (u.displayName = t + 'Provider'),
                [
                  u,
                  function (n, o) {
                    let u = o?.[e]?.[a] || i,
                      c = r.useContext(u);
                    if (c) return c;
                    if (void 0 !== l) return l;
                    throw Error(`\`${n}\` must be used within \`${t}\``);
                  },
                ]
              );
            },
            (function (...e) {
              let t = e[0];
              if (1 === e.length) return t;
              let n = () => {
                let n = e.map(e => ({ useScope: e(), scopeName: e.scopeName }));
                return function (e) {
                  let o = n.reduce((t, { useScope: n, scopeName: r }) => {
                    let o = n(e)[`__scope${r}`];
                    return { ...t, ...o };
                  }, {});
                  return r.useMemo(() => ({ [`__scope${t.scopeName}`]: o }), [o]);
                };
              };
              return (n.scopeName = t.scopeName), n;
            })(l, ...t),
          ]
        );
      }
    },
    3938: (e, t, n) => {
      n.d(t, { XB: () => f });
      var r,
        o = n(2265),
        l = n(8149),
        i = n(5171),
        a = n(1584),
        u = n(5137),
        c = n(7437),
        s = 'dismissableLayer.update',
        d = o.createContext({
          layers: new Set(),
          layersWithOutsidePointerEventsDisabled: new Set(),
          branches: new Set(),
        }),
        f = o.forwardRef((e, t) => {
          var n, f;
          let {
              disableOutsidePointerEvents: h = !1,
              onEscapeKeyDown: m,
              onPointerDownOutside: g,
              onFocusOutside: y,
              onInteractOutside: w,
              onDismiss: b,
              ...x
            } = e,
            E = o.useContext(d),
            [S, C] = o.useState(null),
            R =
              null !== (f = null == S ? void 0 : S.ownerDocument) && void 0 !== f
                ? f
                : null === (n = globalThis) || void 0 === n
                  ? void 0
                  : n.document,
            [, M] = o.useState({}),
            N = (0, a.e)(t, e => C(e)),
            P = Array.from(E.layers),
            [A] = [...E.layersWithOutsidePointerEventsDisabled].slice(-1),
            k = P.indexOf(A),
            j = S ? P.indexOf(S) : -1,
            T = E.layersWithOutsidePointerEventsDisabled.size > 0,
            L = j >= k,
            D = (function (e) {
              var t;
              let n =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : null === (t = globalThis) || void 0 === t
                      ? void 0
                      : t.document,
                r = (0, u.W)(e),
                l = o.useRef(!1),
                i = o.useRef(() => {});
              return (
                o.useEffect(() => {
                  let e = e => {
                      if (e.target && !l.current) {
                        let t = function () {
                            v('dismissableLayer.pointerDownOutside', r, o, { discrete: !0 });
                          },
                          o = { originalEvent: e };
                        'touch' === e.pointerType
                          ? (n.removeEventListener('click', i.current),
                            (i.current = t),
                            n.addEventListener('click', i.current, { once: !0 }))
                          : t();
                      } else n.removeEventListener('click', i.current);
                      l.current = !1;
                    },
                    t = window.setTimeout(() => {
                      n.addEventListener('pointerdown', e);
                    }, 0);
                  return () => {
                    window.clearTimeout(t),
                      n.removeEventListener('pointerdown', e),
                      n.removeEventListener('click', i.current);
                  };
                }, [n, r]),
                { onPointerDownCapture: () => (l.current = !0) }
              );
            })(e => {
              let t = e.target,
                n = [...E.branches].some(e => e.contains(t));
              !L ||
                n ||
                (null == g || g(e), null == w || w(e), e.defaultPrevented || null == b || b());
            }, R),
            O = (function (e) {
              var t;
              let n =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : null === (t = globalThis) || void 0 === t
                      ? void 0
                      : t.document,
                r = (0, u.W)(e),
                l = o.useRef(!1);
              return (
                o.useEffect(() => {
                  let e = e => {
                    e.target &&
                      !l.current &&
                      v('dismissableLayer.focusOutside', r, { originalEvent: e }, { discrete: !1 });
                  };
                  return (
                    n.addEventListener('focusin', e), () => n.removeEventListener('focusin', e)
                  );
                }, [n, r]),
                { onFocusCapture: () => (l.current = !0), onBlurCapture: () => (l.current = !1) }
              );
            })(e => {
              let t = e.target;
              [...E.branches].some(e => e.contains(t)) ||
                (null == y || y(e), null == w || w(e), e.defaultPrevented || null == b || b());
            }, R);
          return (
            !(function (e, t = globalThis?.document) {
              let n = (0, u.W)(e);
              o.useEffect(() => {
                let e = e => {
                  'Escape' === e.key && n(e);
                };
                return (
                  t.addEventListener('keydown', e, { capture: !0 }),
                  () => t.removeEventListener('keydown', e, { capture: !0 })
                );
              }, [n, t]);
            })(e => {
              j !== E.layers.size - 1 ||
                (null == m || m(e), !e.defaultPrevented && b && (e.preventDefault(), b()));
            }, R),
            o.useEffect(() => {
              if (S)
                return (
                  h &&
                    (0 === E.layersWithOutsidePointerEventsDisabled.size &&
                      ((r = R.body.style.pointerEvents), (R.body.style.pointerEvents = 'none')),
                    E.layersWithOutsidePointerEventsDisabled.add(S)),
                  E.layers.add(S),
                  p(),
                  () => {
                    h &&
                      1 === E.layersWithOutsidePointerEventsDisabled.size &&
                      (R.body.style.pointerEvents = r);
                  }
                );
            }, [S, R, h, E]),
            o.useEffect(
              () => () => {
                S && (E.layers.delete(S), E.layersWithOutsidePointerEventsDisabled.delete(S), p());
              },
              [S, E]
            ),
            o.useEffect(() => {
              let e = () => M({});
              return document.addEventListener(s, e), () => document.removeEventListener(s, e);
            }, []),
            (0, c.jsx)(i.WV.div, {
              ...x,
              ref: N,
              style: { pointerEvents: T ? (L ? 'auto' : 'none') : void 0, ...e.style },
              onFocusCapture: (0, l.M)(e.onFocusCapture, O.onFocusCapture),
              onBlurCapture: (0, l.M)(e.onBlurCapture, O.onBlurCapture),
              onPointerDownCapture: (0, l.M)(e.onPointerDownCapture, D.onPointerDownCapture),
            })
          );
        });
      function p() {
        let e = new CustomEvent(s);
        document.dispatchEvent(e);
      }
      function v(e, t, n, r) {
        let { discrete: o } = r,
          l = n.originalEvent.target,
          a = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
        t && l.addEventListener(e, t, { once: !0 }), o ? (0, i.jH)(l, a) : l.dispatchEvent(a);
      }
      (f.displayName = 'DismissableLayer'),
        (o.forwardRef((e, t) => {
          let n = o.useContext(d),
            r = o.useRef(null),
            l = (0, a.e)(t, r);
          return (
            o.useEffect(() => {
              let e = r.current;
              if (e)
                return (
                  n.branches.add(e),
                  () => {
                    n.branches.delete(e);
                  }
                );
            }, [n.branches]),
            (0, c.jsx)(i.WV.div, { ...e, ref: l })
          );
        }).displayName = 'DismissableLayerBranch');
    },
    589: (e, t, n) => {
      n.d(t, { EW: () => l });
      var r = n(2265),
        o = 0;
      function l() {
        r.useEffect(() => {
          var e, t;
          let n = document.querySelectorAll('[data-radix-focus-guard]');
          return (
            document.body.insertAdjacentElement(
              'afterbegin',
              null !== (e = n[0]) && void 0 !== e ? e : i()
            ),
            document.body.insertAdjacentElement(
              'beforeend',
              null !== (t = n[1]) && void 0 !== t ? t : i()
            ),
            o++,
            () => {
              1 === o &&
                document.querySelectorAll('[data-radix-focus-guard]').forEach(e => e.remove()),
                o--;
            }
          );
        }, []);
      }
      function i() {
        let e = document.createElement('span');
        return (
          e.setAttribute('data-radix-focus-guard', ''),
          (e.tabIndex = 0),
          (e.style.outline = 'none'),
          (e.style.opacity = '0'),
          (e.style.position = 'fixed'),
          (e.style.pointerEvents = 'none'),
          e
        );
      }
    },
    467: (e, t, n) => {
      n.d(t, { M: () => d });
      var r = n(2265),
        o = n(1584),
        l = n(5171),
        i = n(5137),
        a = n(7437),
        u = 'focusScope.autoFocusOnMount',
        c = 'focusScope.autoFocusOnUnmount',
        s = { bubbles: !1, cancelable: !0 },
        d = r.forwardRef((e, t) => {
          let {
              loop: n = !1,
              trapped: d = !1,
              onMountAutoFocus: m,
              onUnmountAutoFocus: g,
              ...y
            } = e,
            [w, b] = r.useState(null),
            x = (0, i.W)(m),
            E = (0, i.W)(g),
            S = r.useRef(null),
            C = (0, o.e)(t, e => b(e)),
            R = r.useRef({
              paused: !1,
              pause() {
                this.paused = !0;
              },
              resume() {
                this.paused = !1;
              },
            }).current;
          r.useEffect(() => {
            if (d) {
              let e = function (e) {
                  if (R.paused || !w) return;
                  let t = e.target;
                  w.contains(t) ? (S.current = t) : v(S.current, { select: !0 });
                },
                t = function (e) {
                  if (R.paused || !w) return;
                  let t = e.relatedTarget;
                  null === t || w.contains(t) || v(S.current, { select: !0 });
                };
              document.addEventListener('focusin', e), document.addEventListener('focusout', t);
              let n = new MutationObserver(function (e) {
                if (document.activeElement === document.body)
                  for (let t of e) t.removedNodes.length > 0 && v(w);
              });
              return (
                w && n.observe(w, { childList: !0, subtree: !0 }),
                () => {
                  document.removeEventListener('focusin', e),
                    document.removeEventListener('focusout', t),
                    n.disconnect();
                }
              );
            }
          }, [d, w, R.paused]),
            r.useEffect(() => {
              if (w) {
                h.add(R);
                let e = document.activeElement;
                if (!w.contains(e)) {
                  let t = new CustomEvent(u, s);
                  w.addEventListener(u, x),
                    w.dispatchEvent(t),
                    t.defaultPrevented ||
                      ((function (e) {
                        let { select: t = !1 } =
                            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                          n = document.activeElement;
                        for (let r of e)
                          if ((v(r, { select: t }), document.activeElement !== n)) return;
                      })(
                        f(w).filter(e => 'A' !== e.tagName),
                        { select: !0 }
                      ),
                      document.activeElement === e && v(w));
                }
                return () => {
                  w.removeEventListener(u, x),
                    setTimeout(() => {
                      let t = new CustomEvent(c, s);
                      w.addEventListener(c, E),
                        w.dispatchEvent(t),
                        t.defaultPrevented || v(null != e ? e : document.body, { select: !0 }),
                        w.removeEventListener(c, E),
                        h.remove(R);
                    }, 0);
                };
              }
            }, [w, x, E, R]);
          let M = r.useCallback(
            e => {
              if ((!n && !d) || R.paused) return;
              let t = 'Tab' === e.key && !e.altKey && !e.ctrlKey && !e.metaKey,
                r = document.activeElement;
              if (t && r) {
                let t = e.currentTarget,
                  [o, l] = (function (e) {
                    let t = f(e);
                    return [p(t, e), p(t.reverse(), e)];
                  })(t);
                o && l
                  ? e.shiftKey || r !== l
                    ? e.shiftKey && r === o && (e.preventDefault(), n && v(l, { select: !0 }))
                    : (e.preventDefault(), n && v(o, { select: !0 }))
                  : r === t && e.preventDefault();
              }
            },
            [n, d, R.paused]
          );
          return (0, a.jsx)(l.WV.div, { tabIndex: -1, ...y, ref: C, onKeyDown: M });
        });
      function f(e) {
        let t = [],
          n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
            acceptNode: e => {
              let t = 'INPUT' === e.tagName && 'hidden' === e.type;
              return e.disabled || e.hidden || t
                ? NodeFilter.FILTER_SKIP
                : e.tabIndex >= 0
                  ? NodeFilter.FILTER_ACCEPT
                  : NodeFilter.FILTER_SKIP;
            },
          });
        for (; n.nextNode(); ) t.push(n.currentNode);
        return t;
      }
      function p(e, t) {
        for (let n of e)
          if (
            !(function (e, t) {
              let { upTo: n } = t;
              if ('hidden' === getComputedStyle(e).visibility) return !0;
              for (; e && (void 0 === n || e !== n); ) {
                if ('none' === getComputedStyle(e).display) return !0;
                e = e.parentElement;
              }
              return !1;
            })(n, { upTo: t })
          )
            return n;
      }
      function v(e) {
        let { select: t = !1 } =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (e && e.focus) {
          var n;
          let r = document.activeElement;
          e.focus({ preventScroll: !0 }),
            e !== r && (n = e) instanceof HTMLInputElement && 'select' in n && t && e.select();
        }
      }
      d.displayName = 'FocusScope';
      var h = (function () {
        let e = [];
        return {
          add(t) {
            let n = e[0];
            t !== n && (null == n || n.pause()), (e = m(e, t)).unshift(t);
          },
          remove(t) {
            var n;
            null === (n = (e = m(e, t))[0]) || void 0 === n || n.resume();
          },
        };
      })();
      function m(e, t) {
        let n = [...e],
          r = n.indexOf(t);
        return -1 !== r && n.splice(r, 1), n;
      }
    },
    3201: (e, t, n) => {
      n.d(t, { M: () => u });
      var r,
        o = n(2265),
        l = n(1336),
        i = (r || (r = n.t(o, 2)))['useId'.toString()] || (() => void 0),
        a = 0;
      function u(e) {
        let [t, n] = o.useState(i());
        return (
          (0, l.b)(() => {
            e || n(e => e ?? String(a++));
          }, [e]),
          e || (t ? `radix-${t}` : '')
        );
      }
    },
    6935: (e, t, n) => {
      n.d(t, { h: () => u });
      var r = n(2265),
        o = n(4887),
        l = n(5171),
        i = n(1336),
        a = n(7437),
        u = r.forwardRef((e, t) => {
          var n, u;
          let { container: c, ...s } = e,
            [d, f] = r.useState(!1);
          (0, i.b)(() => f(!0), []);
          let p =
            c ||
            (d &&
              (null === (u = globalThis) || void 0 === u
                ? void 0
                : null === (n = u.document) || void 0 === n
                  ? void 0
                  : n.body));
          return p ? o.createPortal((0, a.jsx)(l.WV.div, { ...s, ref: t }), p) : null;
        });
      u.displayName = 'Portal';
    },
    5171: (e, t, n) => {
      n.d(t, { WV: () => a, jH: () => u });
      var r = n(2265),
        o = n(4887),
        l = n(1538),
        i = n(7437),
        a = [
          'a',
          'button',
          'div',
          'form',
          'h2',
          'h3',
          'img',
          'input',
          'label',
          'li',
          'nav',
          'ol',
          'p',
          'span',
          'svg',
          'ul',
        ].reduce((e, t) => {
          let n = r.forwardRef((e, n) => {
            let { asChild: r, ...o } = e,
              a = r ? l.g7 : t;
            return (
              'undefined' != typeof window && (window[Symbol.for('radix-ui')] = !0),
              (0, i.jsx)(a, { ...o, ref: n })
            );
          });
          return (n.displayName = `Primitive.${t}`), { ...e, [t]: n };
        }, {});
      function u(e, t) {
        e && o.flushSync(() => e.dispatchEvent(t));
      }
    },
    7356: (e, t, n) => {
      n.d(t, {
        VY: () => tG,
        JO: () => tX,
        ck: () => tQ,
        eT: () => t0,
        h_: () => tZ,
        fC: () => tK,
        xz: () => tY,
        B4: () => tq,
        l_: () => tJ,
      });
      var r = n(2265),
        o = n(4887);
      function l(e, [t, n]) {
        return Math.min(n, Math.max(t, e));
      }
      var i = n(8149),
        a = n(7437),
        u = n(1584),
        c = n(1538),
        s = n(8324),
        d = r.createContext(void 0),
        f = n(3938),
        p = n(589),
        v = n(467),
        h = n(3201);
      let m = ['top', 'right', 'bottom', 'left'],
        g = Math.min,
        y = Math.max,
        w = Math.round,
        b = Math.floor,
        x = e => ({ x: e, y: e }),
        E = { left: 'right', right: 'left', bottom: 'top', top: 'bottom' },
        S = { start: 'end', end: 'start' };
      function C(e, t) {
        return 'function' == typeof e ? e(t) : e;
      }
      function R(e) {
        return e.split('-')[0];
      }
      function M(e) {
        return e.split('-')[1];
      }
      function N(e) {
        return 'x' === e ? 'y' : 'x';
      }
      function P(e) {
        return 'y' === e ? 'height' : 'width';
      }
      function A(e) {
        return ['top', 'bottom'].includes(R(e)) ? 'y' : 'x';
      }
      function k(e) {
        return e.replace(/start|end/g, e => S[e]);
      }
      function j(e) {
        return e.replace(/left|right|bottom|top/g, e => E[e]);
      }
      function T(e) {
        return 'number' != typeof e
          ? { top: 0, right: 0, bottom: 0, left: 0, ...e }
          : { top: e, right: e, bottom: e, left: e };
      }
      function L(e) {
        let { x: t, y: n, width: r, height: o } = e;
        return { width: r, height: o, top: n, left: t, right: t + r, bottom: n + o, x: t, y: n };
      }
      function D(e, t, n) {
        let r,
          { reference: o, floating: l } = e,
          i = A(t),
          a = N(A(t)),
          u = P(a),
          c = R(t),
          s = 'y' === i,
          d = o.x + o.width / 2 - l.width / 2,
          f = o.y + o.height / 2 - l.height / 2,
          p = o[u] / 2 - l[u] / 2;
        switch (c) {
          case 'top':
            r = { x: d, y: o.y - l.height };
            break;
          case 'bottom':
            r = { x: d, y: o.y + o.height };
            break;
          case 'right':
            r = { x: o.x + o.width, y: f };
            break;
          case 'left':
            r = { x: o.x - l.width, y: f };
            break;
          default:
            r = { x: o.x, y: o.y };
        }
        switch (M(t)) {
          case 'start':
            r[a] -= p * (n && s ? -1 : 1);
            break;
          case 'end':
            r[a] += p * (n && s ? -1 : 1);
        }
        return r;
      }
      let O = async (e, t, n) => {
        let {
            placement: r = 'bottom',
            strategy: o = 'absolute',
            middleware: l = [],
            platform: i,
          } = n,
          a = l.filter(Boolean),
          u = await (null == i.isRTL ? void 0 : i.isRTL(t)),
          c = await i.getElementRects({ reference: e, floating: t, strategy: o }),
          { x: s, y: d } = D(c, r, u),
          f = r,
          p = {},
          v = 0;
        for (let n = 0; n < a.length; n++) {
          let { name: l, fn: h } = a[n],
            {
              x: m,
              y: g,
              data: y,
              reset: w,
            } = await h({
              x: s,
              y: d,
              initialPlacement: r,
              placement: f,
              strategy: o,
              middlewareData: p,
              rects: c,
              platform: i,
              elements: { reference: e, floating: t },
            });
          (s = null != m ? m : s),
            (d = null != g ? g : d),
            (p = { ...p, [l]: { ...p[l], ...y } }),
            w &&
              v <= 50 &&
              (v++,
              'object' == typeof w &&
                (w.placement && (f = w.placement),
                w.rects &&
                  (c =
                    !0 === w.rects
                      ? await i.getElementRects({ reference: e, floating: t, strategy: o })
                      : w.rects),
                ({ x: s, y: d } = D(c, f, u))),
              (n = -1));
        }
        return { x: s, y: d, placement: f, strategy: o, middlewareData: p };
      };
      async function I(e, t) {
        var n;
        void 0 === t && (t = {});
        let { x: r, y: o, platform: l, rects: i, elements: a, strategy: u } = e,
          {
            boundary: c = 'clippingAncestors',
            rootBoundary: s = 'viewport',
            elementContext: d = 'floating',
            altBoundary: f = !1,
            padding: p = 0,
          } = C(t, e),
          v = T(p),
          h = a[f ? ('floating' === d ? 'reference' : 'floating') : d],
          m = L(
            await l.getClippingRect({
              element:
                null == (n = await (null == l.isElement ? void 0 : l.isElement(h))) || n
                  ? h
                  : h.contextElement ||
                    (await (null == l.getDocumentElement
                      ? void 0
                      : l.getDocumentElement(a.floating))),
              boundary: c,
              rootBoundary: s,
              strategy: u,
            })
          ),
          g =
            'floating' === d
              ? { x: r, y: o, width: i.floating.width, height: i.floating.height }
              : i.reference,
          y = await (null == l.getOffsetParent ? void 0 : l.getOffsetParent(a.floating)),
          w = ((await (null == l.isElement ? void 0 : l.isElement(y))) &&
            (await (null == l.getScale ? void 0 : l.getScale(y)))) || { x: 1, y: 1 },
          b = L(
            l.convertOffsetParentRelativeRectToViewportRelativeRect
              ? await l.convertOffsetParentRelativeRectToViewportRelativeRect({
                  elements: a,
                  rect: g,
                  offsetParent: y,
                  strategy: u,
                })
              : g
          );
        return {
          top: (m.top - b.top + v.top) / w.y,
          bottom: (b.bottom - m.bottom + v.bottom) / w.y,
          left: (m.left - b.left + v.left) / w.x,
          right: (b.right - m.right + v.right) / w.x,
        };
      }
      function z(e, t) {
        return {
          top: e.top - t.height,
          right: e.right - t.width,
          bottom: e.bottom - t.height,
          left: e.left - t.width,
        };
      }
      function W(e) {
        return m.some(t => e[t] >= 0);
      }
      async function F(e, t) {
        let { placement: n, platform: r, elements: o } = e,
          l = await (null == r.isRTL ? void 0 : r.isRTL(o.floating)),
          i = R(n),
          a = M(n),
          u = 'y' === A(n),
          c = ['left', 'top'].includes(i) ? -1 : 1,
          s = l && u ? -1 : 1,
          d = C(t, e),
          {
            mainAxis: f,
            crossAxis: p,
            alignmentAxis: v,
          } = 'number' == typeof d
            ? { mainAxis: d, crossAxis: 0, alignmentAxis: null }
            : {
                mainAxis: d.mainAxis || 0,
                crossAxis: d.crossAxis || 0,
                alignmentAxis: d.alignmentAxis,
              };
        return (
          a && 'number' == typeof v && (p = 'end' === a ? -1 * v : v),
          u ? { x: p * s, y: f * c } : { x: f * c, y: p * s }
        );
      }
      function _() {
        return 'undefined' != typeof window;
      }
      function H(e) {
        return V(e) ? (e.nodeName || '').toLowerCase() : '#document';
      }
      function $(e) {
        var t;
        return (null == e || null == (t = e.ownerDocument) ? void 0 : t.defaultView) || window;
      }
      function B(e) {
        var t;
        return null == (t = (V(e) ? e.ownerDocument : e.document) || window.document)
          ? void 0
          : t.documentElement;
      }
      function V(e) {
        return !!_() && (e instanceof Node || e instanceof $(e).Node);
      }
      function U(e) {
        return !!_() && (e instanceof Element || e instanceof $(e).Element);
      }
      function K(e) {
        return !!_() && (e instanceof HTMLElement || e instanceof $(e).HTMLElement);
      }
      function Y(e) {
        return (
          !!_() &&
          'undefined' != typeof ShadowRoot &&
          (e instanceof ShadowRoot || e instanceof $(e).ShadowRoot)
        );
      }
      function q(e) {
        let { overflow: t, overflowX: n, overflowY: r, display: o } = Q(e);
        return (
          /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !['inline', 'contents'].includes(o)
        );
      }
      function X(e) {
        return [':popover-open', ':modal'].some(t => {
          try {
            return e.matches(t);
          } catch (e) {
            return !1;
          }
        });
      }
      function Z(e) {
        let t = G(),
          n = U(e) ? Q(e) : e;
        return (
          'none' !== n.transform ||
          'none' !== n.perspective ||
          (!!n.containerType && 'normal' !== n.containerType) ||
          (!t && !!n.backdropFilter && 'none' !== n.backdropFilter) ||
          (!t && !!n.filter && 'none' !== n.filter) ||
          ['transform', 'perspective', 'filter'].some(e => (n.willChange || '').includes(e)) ||
          ['paint', 'layout', 'strict', 'content'].some(e => (n.contain || '').includes(e))
        );
      }
      function G() {
        return (
          'undefined' != typeof CSS &&
          !!CSS.supports &&
          CSS.supports('-webkit-backdrop-filter', 'none')
        );
      }
      function J(e) {
        return ['html', 'body', '#document'].includes(H(e));
      }
      function Q(e) {
        return $(e).getComputedStyle(e);
      }
      function ee(e) {
        return U(e)
          ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop }
          : { scrollLeft: e.scrollX, scrollTop: e.scrollY };
      }
      function et(e) {
        if ('html' === H(e)) return e;
        let t = e.assignedSlot || e.parentNode || (Y(e) && e.host) || B(e);
        return Y(t) ? t.host : t;
      }
      function en(e, t, n) {
        var r;
        void 0 === t && (t = []), void 0 === n && (n = !0);
        let o = (function e(t) {
            let n = et(t);
            return J(n)
              ? t.ownerDocument
                ? t.ownerDocument.body
                : t.body
              : K(n) && q(n)
                ? n
                : e(n);
          })(e),
          l = o === (null == (r = e.ownerDocument) ? void 0 : r.body),
          i = $(o);
        if (l) {
          let e = er(i);
          return t.concat(i, i.visualViewport || [], q(o) ? o : [], e && n ? en(e) : []);
        }
        return t.concat(o, en(o, [], n));
      }
      function er(e) {
        return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
      }
      function eo(e) {
        let t = Q(e),
          n = parseFloat(t.width) || 0,
          r = parseFloat(t.height) || 0,
          o = K(e),
          l = o ? e.offsetWidth : n,
          i = o ? e.offsetHeight : r,
          a = w(n) !== l || w(r) !== i;
        return a && ((n = l), (r = i)), { width: n, height: r, $: a };
      }
      function el(e) {
        return U(e) ? e : e.contextElement;
      }
      function ei(e) {
        let t = el(e);
        if (!K(t)) return x(1);
        let n = t.getBoundingClientRect(),
          { width: r, height: o, $: l } = eo(t),
          i = (l ? w(n.width) : n.width) / r,
          a = (l ? w(n.height) : n.height) / o;
        return (
          (i && Number.isFinite(i)) || (i = 1), (a && Number.isFinite(a)) || (a = 1), { x: i, y: a }
        );
      }
      let ea = x(0);
      function eu(e) {
        let t = $(e);
        return G() && t.visualViewport
          ? { x: t.visualViewport.offsetLeft, y: t.visualViewport.offsetTop }
          : ea;
      }
      function ec(e, t, n, r) {
        var o;
        void 0 === t && (t = !1), void 0 === n && (n = !1);
        let l = e.getBoundingClientRect(),
          i = el(e),
          a = x(1);
        t && (r ? U(r) && (a = ei(r)) : (a = ei(e)));
        let u = (void 0 === (o = n) && (o = !1), r && (!o || r === $(i)) && o) ? eu(i) : x(0),
          c = (l.left + u.x) / a.x,
          s = (l.top + u.y) / a.y,
          d = l.width / a.x,
          f = l.height / a.y;
        if (i) {
          let e = $(i),
            t = r && U(r) ? $(r) : r,
            n = e,
            o = er(n);
          for (; o && r && t !== n; ) {
            let e = ei(o),
              t = o.getBoundingClientRect(),
              r = Q(o),
              l = t.left + (o.clientLeft + parseFloat(r.paddingLeft)) * e.x,
              i = t.top + (o.clientTop + parseFloat(r.paddingTop)) * e.y;
            (c *= e.x),
              (s *= e.y),
              (d *= e.x),
              (f *= e.y),
              (c += l),
              (s += i),
              (o = er((n = $(o))));
          }
        }
        return L({ width: d, height: f, x: c, y: s });
      }
      function es(e, t) {
        let n = ee(e).scrollLeft;
        return t ? t.left + n : ec(B(e)).left + n;
      }
      function ed(e, t, n) {
        void 0 === n && (n = !1);
        let r = e.getBoundingClientRect();
        return { x: r.left + t.scrollLeft - (n ? 0 : es(e, r)), y: r.top + t.scrollTop };
      }
      function ef(e, t, n) {
        let r;
        if ('viewport' === t)
          r = (function (e, t) {
            let n = $(e),
              r = B(e),
              o = n.visualViewport,
              l = r.clientWidth,
              i = r.clientHeight,
              a = 0,
              u = 0;
            if (o) {
              (l = o.width), (i = o.height);
              let e = G();
              (!e || (e && 'fixed' === t)) && ((a = o.offsetLeft), (u = o.offsetTop));
            }
            return { width: l, height: i, x: a, y: u };
          })(e, n);
        else if ('document' === t)
          r = (function (e) {
            let t = B(e),
              n = ee(e),
              r = e.ownerDocument.body,
              o = y(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth),
              l = y(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight),
              i = -n.scrollLeft + es(e),
              a = -n.scrollTop;
            return (
              'rtl' === Q(r).direction && (i += y(t.clientWidth, r.clientWidth) - o),
              { width: o, height: l, x: i, y: a }
            );
          })(B(e));
        else if (U(t))
          r = (function (e, t) {
            let n = ec(e, !0, 'fixed' === t),
              r = n.top + e.clientTop,
              o = n.left + e.clientLeft,
              l = K(e) ? ei(e) : x(1),
              i = e.clientWidth * l.x;
            return { width: i, height: e.clientHeight * l.y, x: o * l.x, y: r * l.y };
          })(t, n);
        else {
          let n = eu(e);
          r = { x: t.x - n.x, y: t.y - n.y, width: t.width, height: t.height };
        }
        return L(r);
      }
      function ep(e) {
        return 'static' === Q(e).position;
      }
      function ev(e, t) {
        if (!K(e) || 'fixed' === Q(e).position) return null;
        if (t) return t(e);
        let n = e.offsetParent;
        return B(e) === n && (n = n.ownerDocument.body), n;
      }
      function eh(e, t) {
        let n = $(e);
        if (X(e)) return n;
        if (!K(e)) {
          let t = et(e);
          for (; t && !J(t); ) {
            if (U(t) && !ep(t)) return t;
            t = et(t);
          }
          return n;
        }
        let r = ev(e, t);
        for (; r && ['table', 'td', 'th'].includes(H(r)) && ep(r); ) r = ev(r, t);
        return r && J(r) && ep(r) && !Z(r)
          ? n
          : r ||
              (function (e) {
                let t = et(e);
                for (; K(t) && !J(t); ) {
                  if (Z(t)) return t;
                  if (X(t)) break;
                  t = et(t);
                }
                return null;
              })(e) ||
              n;
      }
      let em = async function (e) {
          let t = this.getOffsetParent || eh,
            n = this.getDimensions,
            r = await n(e.floating);
          return {
            reference: (function (e, t, n) {
              let r = K(t),
                o = B(t),
                l = 'fixed' === n,
                i = ec(e, !0, l, t),
                a = { scrollLeft: 0, scrollTop: 0 },
                u = x(0);
              if (r || (!r && !l)) {
                if ((('body' !== H(t) || q(o)) && (a = ee(t)), r)) {
                  let e = ec(t, !0, l, t);
                  (u.x = e.x + t.clientLeft), (u.y = e.y + t.clientTop);
                } else o && (u.x = es(o));
              }
              let c = !o || r || l ? x(0) : ed(o, a);
              return {
                x: i.left + a.scrollLeft - u.x - c.x,
                y: i.top + a.scrollTop - u.y - c.y,
                width: i.width,
                height: i.height,
              };
            })(e.reference, await t(e.floating), e.strategy),
            floating: { x: 0, y: 0, width: r.width, height: r.height },
          };
        },
        eg = {
          convertOffsetParentRelativeRectToViewportRelativeRect: function (e) {
            let { elements: t, rect: n, offsetParent: r, strategy: o } = e,
              l = 'fixed' === o,
              i = B(r),
              a = !!t && X(t.floating);
            if (r === i || (a && l)) return n;
            let u = { scrollLeft: 0, scrollTop: 0 },
              c = x(1),
              s = x(0),
              d = K(r);
            if ((d || (!d && !l)) && (('body' !== H(r) || q(i)) && (u = ee(r)), K(r))) {
              let e = ec(r);
              (c = ei(r)), (s.x = e.x + r.clientLeft), (s.y = e.y + r.clientTop);
            }
            let f = !i || d || l ? x(0) : ed(i, u, !0);
            return {
              width: n.width * c.x,
              height: n.height * c.y,
              x: n.x * c.x - u.scrollLeft * c.x + s.x + f.x,
              y: n.y * c.y - u.scrollTop * c.y + s.y + f.y,
            };
          },
          getDocumentElement: B,
          getClippingRect: function (e) {
            let { element: t, boundary: n, rootBoundary: r, strategy: o } = e,
              l = [
                ...('clippingAncestors' === n
                  ? X(t)
                    ? []
                    : (function (e, t) {
                        let n = t.get(e);
                        if (n) return n;
                        let r = en(e, [], !1).filter(e => U(e) && 'body' !== H(e)),
                          o = null,
                          l = 'fixed' === Q(e).position,
                          i = l ? et(e) : e;
                        for (; U(i) && !J(i); ) {
                          let t = Q(i),
                            n = Z(i);
                          n || 'fixed' !== t.position || (o = null),
                            (
                              l
                                ? !n && !o
                                : (!n &&
                                    'static' === t.position &&
                                    !!o &&
                                    ['absolute', 'fixed'].includes(o.position)) ||
                                  (q(i) &&
                                    !n &&
                                    (function e(t, n) {
                                      let r = et(t);
                                      return (
                                        !(r === n || !U(r) || J(r)) &&
                                        ('fixed' === Q(r).position || e(r, n))
                                      );
                                    })(e, i))
                            )
                              ? (r = r.filter(e => e !== i))
                              : (o = t),
                            (i = et(i));
                        }
                        return t.set(e, r), r;
                      })(t, this._c)
                  : [].concat(n)),
                r,
              ],
              i = l[0],
              a = l.reduce(
                (e, n) => {
                  let r = ef(t, n, o);
                  return (
                    (e.top = y(r.top, e.top)),
                    (e.right = g(r.right, e.right)),
                    (e.bottom = g(r.bottom, e.bottom)),
                    (e.left = y(r.left, e.left)),
                    e
                  );
                },
                ef(t, i, o)
              );
            return { width: a.right - a.left, height: a.bottom - a.top, x: a.left, y: a.top };
          },
          getOffsetParent: eh,
          getElementRects: em,
          getClientRects: function (e) {
            return Array.from(e.getClientRects());
          },
          getDimensions: function (e) {
            let { width: t, height: n } = eo(e);
            return { width: t, height: n };
          },
          getScale: ei,
          isElement: U,
          isRTL: function (e) {
            return 'rtl' === Q(e).direction;
          },
        },
        ey = e => ({
          name: 'arrow',
          options: e,
          async fn(t) {
            let {
                x: n,
                y: r,
                placement: o,
                rects: l,
                platform: i,
                elements: a,
                middlewareData: u,
              } = t,
              { element: c, padding: s = 0 } = C(e, t) || {};
            if (null == c) return {};
            let d = T(s),
              f = { x: n, y: r },
              p = N(A(o)),
              v = P(p),
              h = await i.getDimensions(c),
              m = 'y' === p,
              w = m ? 'clientHeight' : 'clientWidth',
              b = l.reference[v] + l.reference[p] - f[p] - l.floating[v],
              x = f[p] - l.reference[p],
              E = await (null == i.getOffsetParent ? void 0 : i.getOffsetParent(c)),
              S = E ? E[w] : 0;
            (S && (await (null == i.isElement ? void 0 : i.isElement(E)))) ||
              (S = a.floating[w] || l.floating[v]);
            let R = S / 2 - h[v] / 2 - 1,
              k = g(d[m ? 'top' : 'left'], R),
              j = g(d[m ? 'bottom' : 'right'], R),
              L = S - h[v] - j,
              D = S / 2 - h[v] / 2 + (b / 2 - x / 2),
              O = y(k, g(D, L)),
              I =
                !u.arrow &&
                null != M(o) &&
                D !== O &&
                l.reference[v] / 2 - (D < k ? k : j) - h[v] / 2 < 0,
              z = I ? (D < k ? D - k : D - L) : 0;
            return {
              [p]: f[p] + z,
              data: { [p]: O, centerOffset: D - O - z, ...(I && { alignmentOffset: z }) },
              reset: I,
            };
          },
        }),
        ew = (e, t, n) => {
          let r = new Map(),
            o = { platform: eg, ...n },
            l = { ...o.platform, _c: r };
          return O(e, t, { ...o, platform: l });
        };
      var eb = 'undefined' != typeof document ? r.useLayoutEffect : r.useEffect;
      function ex(e, t) {
        let n, r, o;
        if (e === t) return !0;
        if (typeof e != typeof t) return !1;
        if ('function' == typeof e && e.toString() === t.toString()) return !0;
        if (e && t && 'object' == typeof e) {
          if (Array.isArray(e)) {
            if ((n = e.length) !== t.length) return !1;
            for (r = n; 0 != r--; ) if (!ex(e[r], t[r])) return !1;
            return !0;
          }
          if ((n = (o = Object.keys(e)).length) !== Object.keys(t).length) return !1;
          for (r = n; 0 != r--; ) if (!{}.hasOwnProperty.call(t, o[r])) return !1;
          for (r = n; 0 != r--; ) {
            let n = o[r];
            if (('_owner' !== n || !e.$$typeof) && !ex(e[n], t[n])) return !1;
          }
          return !0;
        }
        return e != e && t != t;
      }
      function eE(e) {
        return 'undefined' == typeof window
          ? 1
          : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
      }
      function eS(e, t) {
        let n = eE(e);
        return Math.round(t * n) / n;
      }
      function eC(e) {
        let t = r.useRef(e);
        return (
          eb(() => {
            t.current = e;
          }),
          t
        );
      }
      let eR = e => ({
          name: 'arrow',
          options: e,
          fn(t) {
            let { element: n, padding: r } = 'function' == typeof e ? e(t) : e;
            return n && {}.hasOwnProperty.call(n, 'current')
              ? null != n.current
                ? ey({ element: n.current, padding: r }).fn(t)
                : {}
              : n
                ? ey({ element: n, padding: r }).fn(t)
                : {};
          },
        }),
        eM = (e, t) => ({
          ...(function (e) {
            return (
              void 0 === e && (e = 0),
              {
                name: 'offset',
                options: e,
                async fn(t) {
                  var n, r;
                  let { x: o, y: l, placement: i, middlewareData: a } = t,
                    u = await F(t, e);
                  return i === (null == (n = a.offset) ? void 0 : n.placement) &&
                    null != (r = a.arrow) &&
                    r.alignmentOffset
                    ? {}
                    : { x: o + u.x, y: l + u.y, data: { ...u, placement: i } };
                },
              }
            );
          })(e),
          options: [e, t],
        }),
        eN = (e, t) => ({
          ...(function (e) {
            return (
              void 0 === e && (e = {}),
              {
                name: 'shift',
                options: e,
                async fn(t) {
                  let { x: n, y: r, placement: o } = t,
                    {
                      mainAxis: l = !0,
                      crossAxis: i = !1,
                      limiter: a = {
                        fn: e => {
                          let { x: t, y: n } = e;
                          return { x: t, y: n };
                        },
                      },
                      ...u
                    } = C(e, t),
                    c = { x: n, y: r },
                    s = await I(t, u),
                    d = A(R(o)),
                    f = N(d),
                    p = c[f],
                    v = c[d];
                  if (l) {
                    let e = 'y' === f ? 'top' : 'left',
                      t = 'y' === f ? 'bottom' : 'right',
                      n = p + s[e],
                      r = p - s[t];
                    p = y(n, g(p, r));
                  }
                  if (i) {
                    let e = 'y' === d ? 'top' : 'left',
                      t = 'y' === d ? 'bottom' : 'right',
                      n = v + s[e],
                      r = v - s[t];
                    v = y(n, g(v, r));
                  }
                  let h = a.fn({ ...t, [f]: p, [d]: v });
                  return { ...h, data: { x: h.x - n, y: h.y - r, enabled: { [f]: l, [d]: i } } };
                },
              }
            );
          })(e),
          options: [e, t],
        }),
        eP = (e, t) => ({
          ...(function (e) {
            return (
              void 0 === e && (e = {}),
              {
                options: e,
                fn(t) {
                  let { x: n, y: r, placement: o, rects: l, middlewareData: i } = t,
                    { offset: a = 0, mainAxis: u = !0, crossAxis: c = !0 } = C(e, t),
                    s = { x: n, y: r },
                    d = A(o),
                    f = N(d),
                    p = s[f],
                    v = s[d],
                    h = C(a, t),
                    m =
                      'number' == typeof h
                        ? { mainAxis: h, crossAxis: 0 }
                        : { mainAxis: 0, crossAxis: 0, ...h };
                  if (u) {
                    let e = 'y' === f ? 'height' : 'width',
                      t = l.reference[f] - l.floating[e] + m.mainAxis,
                      n = l.reference[f] + l.reference[e] - m.mainAxis;
                    p < t ? (p = t) : p > n && (p = n);
                  }
                  if (c) {
                    var g, y;
                    let e = 'y' === f ? 'width' : 'height',
                      t = ['top', 'left'].includes(R(o)),
                      n =
                        l.reference[d] -
                        l.floating[e] +
                        ((t && (null == (g = i.offset) ? void 0 : g[d])) || 0) +
                        (t ? 0 : m.crossAxis),
                      r =
                        l.reference[d] +
                        l.reference[e] +
                        (t ? 0 : (null == (y = i.offset) ? void 0 : y[d]) || 0) -
                        (t ? m.crossAxis : 0);
                    v < n ? (v = n) : v > r && (v = r);
                  }
                  return { [f]: p, [d]: v };
                },
              }
            );
          })(e),
          options: [e, t],
        }),
        eA = (e, t) => ({
          ...(function (e) {
            return (
              void 0 === e && (e = {}),
              {
                name: 'flip',
                options: e,
                async fn(t) {
                  var n, r, o, l, i;
                  let {
                      placement: a,
                      middlewareData: u,
                      rects: c,
                      initialPlacement: s,
                      platform: d,
                      elements: f,
                    } = t,
                    {
                      mainAxis: p = !0,
                      crossAxis: v = !0,
                      fallbackPlacements: h,
                      fallbackStrategy: m = 'bestFit',
                      fallbackAxisSideDirection: g = 'none',
                      flipAlignment: y = !0,
                      ...w
                    } = C(e, t);
                  if (null != (n = u.arrow) && n.alignmentOffset) return {};
                  let b = R(a),
                    x = A(s),
                    E = R(s) === s,
                    S = await (null == d.isRTL ? void 0 : d.isRTL(f.floating)),
                    T =
                      h ||
                      (E || !y
                        ? [j(s)]
                        : (function (e) {
                            let t = j(e);
                            return [k(e), t, k(t)];
                          })(s)),
                    L = 'none' !== g;
                  !h &&
                    L &&
                    T.push(
                      ...(function (e, t, n, r) {
                        let o = M(e),
                          l = (function (e, t, n) {
                            let r = ['left', 'right'],
                              o = ['right', 'left'];
                            switch (e) {
                              case 'top':
                              case 'bottom':
                                if (n) return t ? o : r;
                                return t ? r : o;
                              case 'left':
                              case 'right':
                                return t ? ['top', 'bottom'] : ['bottom', 'top'];
                              default:
                                return [];
                            }
                          })(R(e), 'start' === n, r);
                        return (
                          o && ((l = l.map(e => e + '-' + o)), t && (l = l.concat(l.map(k)))), l
                        );
                      })(s, y, g, S)
                    );
                  let D = [s, ...T],
                    O = await I(t, w),
                    z = [],
                    W = (null == (r = u.flip) ? void 0 : r.overflows) || [];
                  if ((p && z.push(O[b]), v)) {
                    let e = (function (e, t, n) {
                      void 0 === n && (n = !1);
                      let r = M(e),
                        o = N(A(e)),
                        l = P(o),
                        i =
                          'x' === o
                            ? r === (n ? 'end' : 'start')
                              ? 'right'
                              : 'left'
                            : 'start' === r
                              ? 'bottom'
                              : 'top';
                      return t.reference[l] > t.floating[l] && (i = j(i)), [i, j(i)];
                    })(a, c, S);
                    z.push(O[e[0]], O[e[1]]);
                  }
                  if (((W = [...W, { placement: a, overflows: z }]), !z.every(e => e <= 0))) {
                    let e = ((null == (o = u.flip) ? void 0 : o.index) || 0) + 1,
                      t = D[e];
                    if (t) return { data: { index: e, overflows: W }, reset: { placement: t } };
                    let n =
                      null ==
                      (l = W.filter(e => e.overflows[0] <= 0).sort(
                        (e, t) => e.overflows[1] - t.overflows[1]
                      )[0])
                        ? void 0
                        : l.placement;
                    if (!n)
                      switch (m) {
                        case 'bestFit': {
                          let e =
                            null ==
                            (i = W.filter(e => {
                              if (L) {
                                let t = A(e.placement);
                                return t === x || 'y' === t;
                              }
                              return !0;
                            })
                              .map(e => [
                                e.placement,
                                e.overflows.filter(e => e > 0).reduce((e, t) => e + t, 0),
                              ])
                              .sort((e, t) => e[1] - t[1])[0])
                              ? void 0
                              : i[0];
                          e && (n = e);
                          break;
                        }
                        case 'initialPlacement':
                          n = s;
                      }
                    if (a !== n) return { reset: { placement: n } };
                  }
                  return {};
                },
              }
            );
          })(e),
          options: [e, t],
        }),
        ek = (e, t) => ({
          ...(function (e) {
            return (
              void 0 === e && (e = {}),
              {
                name: 'size',
                options: e,
                async fn(t) {
                  var n, r;
                  let o, l;
                  let { placement: i, rects: a, platform: u, elements: c } = t,
                    { apply: s = () => {}, ...d } = C(e, t),
                    f = await I(t, d),
                    p = R(i),
                    v = M(i),
                    h = 'y' === A(i),
                    { width: m, height: w } = a.floating;
                  'top' === p || 'bottom' === p
                    ? ((o = p),
                      (l =
                        v ===
                        ((await (null == u.isRTL ? void 0 : u.isRTL(c.floating))) ? 'start' : 'end')
                          ? 'left'
                          : 'right'))
                    : ((l = p), (o = 'end' === v ? 'top' : 'bottom'));
                  let b = w - f.top - f.bottom,
                    x = m - f.left - f.right,
                    E = g(w - f[o], b),
                    S = g(m - f[l], x),
                    N = !t.middlewareData.shift,
                    P = E,
                    k = S;
                  if (
                    (null != (n = t.middlewareData.shift) && n.enabled.x && (k = x),
                    null != (r = t.middlewareData.shift) && r.enabled.y && (P = b),
                    N && !v)
                  ) {
                    let e = y(f.left, 0),
                      t = y(f.right, 0),
                      n = y(f.top, 0),
                      r = y(f.bottom, 0);
                    h
                      ? (k = m - 2 * (0 !== e || 0 !== t ? e + t : y(f.left, f.right)))
                      : (P = w - 2 * (0 !== n || 0 !== r ? n + r : y(f.top, f.bottom)));
                  }
                  await s({ ...t, availableWidth: k, availableHeight: P });
                  let j = await u.getDimensions(c.floating);
                  return m !== j.width || w !== j.height ? { reset: { rects: !0 } } : {};
                },
              }
            );
          })(e),
          options: [e, t],
        }),
        ej = (e, t) => ({
          ...(function (e) {
            return (
              void 0 === e && (e = {}),
              {
                name: 'hide',
                options: e,
                async fn(t) {
                  let { rects: n } = t,
                    { strategy: r = 'referenceHidden', ...o } = C(e, t);
                  switch (r) {
                    case 'referenceHidden': {
                      let e = z(await I(t, { ...o, elementContext: 'reference' }), n.reference);
                      return { data: { referenceHiddenOffsets: e, referenceHidden: W(e) } };
                    }
                    case 'escaped': {
                      let e = z(await I(t, { ...o, altBoundary: !0 }), n.floating);
                      return { data: { escapedOffsets: e, escaped: W(e) } };
                    }
                    default:
                      return {};
                  }
                },
              }
            );
          })(e),
          options: [e, t],
        }),
        eT = (e, t) => ({ ...eR(e), options: [e, t] });
      var eL = n(5171),
        eD = r.forwardRef((e, t) => {
          let { children: n, width: r = 10, height: o = 5, ...l } = e;
          return (0, a.jsx)(eL.WV.svg, {
            ...l,
            ref: t,
            width: r,
            height: o,
            viewBox: '0 0 30 10',
            preserveAspectRatio: 'none',
            children: e.asChild ? n : (0, a.jsx)('polygon', { points: '0,0 30,0 15,10' }),
          });
        });
      eD.displayName = 'Arrow';
      var eO = n(5137),
        eI = n(1336),
        ez = 'Popper',
        [eW, eF] = (function (e, t = []) {
          let n = [],
            o = () => {
              let t = n.map(e => r.createContext(e));
              return function (n) {
                let o = n?.[e] || t;
                return r.useMemo(() => ({ [`__scope${e}`]: { ...n, [e]: o } }), [n, o]);
              };
            };
          return (
            (o.scopeName = e),
            [
              function (t, o) {
                let l = r.createContext(o),
                  i = n.length;
                function u(t) {
                  let { scope: n, children: o, ...u } = t,
                    c = n?.[e][i] || l,
                    s = r.useMemo(() => u, Object.values(u));
                  return (0, a.jsx)(c.Provider, { value: s, children: o });
                }
                return (
                  (n = [...n, o]),
                  (u.displayName = t + 'Provider'),
                  [
                    u,
                    function (n, a) {
                      let u = a?.[e][i] || l,
                        c = r.useContext(u);
                      if (c) return c;
                      if (void 0 !== o) return o;
                      throw Error(`\`${n}\` must be used within \`${t}\``);
                    },
                  ]
                );
              },
              (function (...e) {
                let t = e[0];
                if (1 === e.length) return t;
                let n = () => {
                  let n = e.map(e => ({ useScope: e(), scopeName: e.scopeName }));
                  return function (e) {
                    let o = n.reduce((t, { useScope: n, scopeName: r }) => {
                      let o = n(e)[`__scope${r}`];
                      return { ...t, ...o };
                    }, {});
                    return r.useMemo(() => ({ [`__scope${t.scopeName}`]: o }), [o]);
                  };
                };
                return (n.scopeName = t.scopeName), n;
              })(o, ...t),
            ]
          );
        })(ez),
        [e_, eH] = eW(ez),
        e$ = e => {
          let { __scopePopper: t, children: n } = e,
            [o, l] = r.useState(null);
          return (0, a.jsx)(e_, { scope: t, anchor: o, onAnchorChange: l, children: n });
        };
      e$.displayName = ez;
      var eB = 'PopperAnchor',
        eV = r.forwardRef((e, t) => {
          let { __scopePopper: n, virtualRef: o, ...l } = e,
            i = eH(eB, n),
            c = r.useRef(null),
            s = (0, u.e)(t, c);
          return (
            r.useEffect(() => {
              i.onAnchorChange((null == o ? void 0 : o.current) || c.current);
            }),
            o ? null : (0, a.jsx)(eL.WV.div, { ...l, ref: s })
          );
        });
      eV.displayName = eB;
      var eU = 'PopperContent',
        [eK, eY] = eW(eU),
        eq = r.forwardRef((e, t) => {
          var n, l, i, c, s, d, f, p;
          let {
              __scopePopper: v,
              side: h = 'bottom',
              sideOffset: m = 0,
              align: w = 'center',
              alignOffset: x = 0,
              arrowPadding: E = 0,
              avoidCollisions: S = !0,
              collisionBoundary: C = [],
              collisionPadding: R = 0,
              sticky: M = 'partial',
              hideWhenDetached: N = !1,
              updatePositionStrategy: P = 'optimized',
              onPlaced: A,
              ...k
            } = e,
            j = eH(eU, v),
            [T, L] = r.useState(null),
            D = (0, u.e)(t, e => L(e)),
            [O, I] = r.useState(null),
            z = (function (e) {
              let [t, n] = r.useState(void 0);
              return (
                (0, eI.b)(() => {
                  if (e) {
                    n({ width: e.offsetWidth, height: e.offsetHeight });
                    let t = new ResizeObserver(t => {
                      let r, o;
                      if (!Array.isArray(t) || !t.length) return;
                      let l = t[0];
                      if ('borderBoxSize' in l) {
                        let e = l.borderBoxSize,
                          t = Array.isArray(e) ? e[0] : e;
                        (r = t.inlineSize), (o = t.blockSize);
                      } else (r = e.offsetWidth), (o = e.offsetHeight);
                      n({ width: r, height: o });
                    });
                    return t.observe(e, { box: 'border-box' }), () => t.unobserve(e);
                  }
                  n(void 0);
                }, [e]),
                t
              );
            })(O),
            W = null !== (f = null == z ? void 0 : z.width) && void 0 !== f ? f : 0,
            F = null !== (p = null == z ? void 0 : z.height) && void 0 !== p ? p : 0,
            _ = 'number' == typeof R ? R : { top: 0, right: 0, bottom: 0, left: 0, ...R },
            H = Array.isArray(C) ? C : [C],
            $ = H.length > 0,
            V = { padding: _, boundary: H.filter(eJ), altBoundary: $ },
            {
              refs: U,
              floatingStyles: K,
              placement: Y,
              isPositioned: q,
              middlewareData: X,
            } = (function (e) {
              void 0 === e && (e = {});
              let {
                  placement: t = 'bottom',
                  strategy: n = 'absolute',
                  middleware: l = [],
                  platform: i,
                  elements: { reference: a, floating: u } = {},
                  transform: c = !0,
                  whileElementsMounted: s,
                  open: d,
                } = e,
                [f, p] = r.useState({
                  x: 0,
                  y: 0,
                  strategy: n,
                  placement: t,
                  middlewareData: {},
                  isPositioned: !1,
                }),
                [v, h] = r.useState(l);
              ex(v, l) || h(l);
              let [m, g] = r.useState(null),
                [y, w] = r.useState(null),
                b = r.useCallback(e => {
                  e !== C.current && ((C.current = e), g(e));
                }, []),
                x = r.useCallback(e => {
                  e !== R.current && ((R.current = e), w(e));
                }, []),
                E = a || m,
                S = u || y,
                C = r.useRef(null),
                R = r.useRef(null),
                M = r.useRef(f),
                N = null != s,
                P = eC(s),
                A = eC(i),
                k = eC(d),
                j = r.useCallback(() => {
                  if (!C.current || !R.current) return;
                  let e = { placement: t, strategy: n, middleware: v };
                  A.current && (e.platform = A.current),
                    ew(C.current, R.current, e).then(e => {
                      let t = { ...e, isPositioned: !1 !== k.current };
                      T.current &&
                        !ex(M.current, t) &&
                        ((M.current = t),
                        o.flushSync(() => {
                          p(t);
                        }));
                    });
                }, [v, t, n, A, k]);
              eb(() => {
                !1 === d &&
                  M.current.isPositioned &&
                  ((M.current.isPositioned = !1), p(e => ({ ...e, isPositioned: !1 })));
              }, [d]);
              let T = r.useRef(!1);
              eb(
                () => (
                  (T.current = !0),
                  () => {
                    T.current = !1;
                  }
                ),
                []
              ),
                eb(() => {
                  if ((E && (C.current = E), S && (R.current = S), E && S)) {
                    if (P.current) return P.current(E, S, j);
                    j();
                  }
                }, [E, S, j, P, N]);
              let L = r.useMemo(
                  () => ({ reference: C, floating: R, setReference: b, setFloating: x }),
                  [b, x]
                ),
                D = r.useMemo(() => ({ reference: E, floating: S }), [E, S]),
                O = r.useMemo(() => {
                  let e = { position: n, left: 0, top: 0 };
                  if (!D.floating) return e;
                  let t = eS(D.floating, f.x),
                    r = eS(D.floating, f.y);
                  return c
                    ? {
                        ...e,
                        transform: 'translate(' + t + 'px, ' + r + 'px)',
                        ...(eE(D.floating) >= 1.5 && { willChange: 'transform' }),
                      }
                    : { position: n, left: t, top: r };
                }, [n, c, D.floating, f.x, f.y]);
              return r.useMemo(
                () => ({ ...f, update: j, refs: L, elements: D, floatingStyles: O }),
                [f, j, L, D, O]
              );
            })({
              strategy: 'fixed',
              placement: h + ('center' !== w ? '-' + w : ''),
              whileElementsMounted: function () {
                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                return (function (e, t, n, r) {
                  let o;
                  void 0 === r && (r = {});
                  let {
                      ancestorScroll: l = !0,
                      ancestorResize: i = !0,
                      elementResize: a = 'function' == typeof ResizeObserver,
                      layoutShift: u = 'function' == typeof IntersectionObserver,
                      animationFrame: c = !1,
                    } = r,
                    s = el(e),
                    d = l || i ? [...(s ? en(s) : []), ...en(t)] : [];
                  d.forEach(e => {
                    l && e.addEventListener('scroll', n, { passive: !0 }),
                      i && e.addEventListener('resize', n);
                  });
                  let f =
                      s && u
                        ? (function (e, t) {
                            let n,
                              r = null,
                              o = B(e);
                            function l() {
                              var e;
                              clearTimeout(n), null == (e = r) || e.disconnect(), (r = null);
                            }
                            return (
                              !(function i(a, u) {
                                void 0 === a && (a = !1), void 0 === u && (u = 1), l();
                                let {
                                  left: c,
                                  top: s,
                                  width: d,
                                  height: f,
                                } = e.getBoundingClientRect();
                                if ((a || t(), !d || !f)) return;
                                let p = b(s),
                                  v = b(o.clientWidth - (c + d)),
                                  h = {
                                    rootMargin:
                                      -p +
                                      'px ' +
                                      -v +
                                      'px ' +
                                      -b(o.clientHeight - (s + f)) +
                                      'px ' +
                                      -b(c) +
                                      'px',
                                    threshold: y(0, g(1, u)) || 1,
                                  },
                                  m = !0;
                                function w(e) {
                                  let t = e[0].intersectionRatio;
                                  if (t !== u) {
                                    if (!m) return i();
                                    t
                                      ? i(!1, t)
                                      : (n = setTimeout(() => {
                                          i(!1, 1e-7);
                                        }, 1e3));
                                  }
                                  m = !1;
                                }
                                try {
                                  r = new IntersectionObserver(w, { ...h, root: o.ownerDocument });
                                } catch (e) {
                                  r = new IntersectionObserver(w, h);
                                }
                                r.observe(e);
                              })(!0),
                              l
                            );
                          })(s, n)
                        : null,
                    p = -1,
                    v = null;
                  a &&
                    ((v = new ResizeObserver(e => {
                      let [r] = e;
                      r &&
                        r.target === s &&
                        v &&
                        (v.unobserve(t),
                        cancelAnimationFrame(p),
                        (p = requestAnimationFrame(() => {
                          var e;
                          null == (e = v) || e.observe(t);
                        }))),
                        n();
                    })),
                    s && !c && v.observe(s),
                    v.observe(t));
                  let h = c ? ec(e) : null;
                  return (
                    c &&
                      (function t() {
                        let r = ec(e);
                        h &&
                          (r.x !== h.x ||
                            r.y !== h.y ||
                            r.width !== h.width ||
                            r.height !== h.height) &&
                          n(),
                          (h = r),
                          (o = requestAnimationFrame(t));
                      })(),
                    n(),
                    () => {
                      var e;
                      d.forEach(e => {
                        l && e.removeEventListener('scroll', n),
                          i && e.removeEventListener('resize', n);
                      }),
                        null == f || f(),
                        null == (e = v) || e.disconnect(),
                        (v = null),
                        c && cancelAnimationFrame(o);
                    }
                  );
                })(...t, { animationFrame: 'always' === P });
              },
              elements: { reference: j.anchor },
              middleware: [
                eM({ mainAxis: m + F, alignmentAxis: x }),
                S &&
                  eN({
                    mainAxis: !0,
                    crossAxis: !1,
                    limiter: 'partial' === M ? eP() : void 0,
                    ...V,
                  }),
                S && eA({ ...V }),
                ek({
                  ...V,
                  apply: e => {
                    let { elements: t, rects: n, availableWidth: r, availableHeight: o } = e,
                      { width: l, height: i } = n.reference,
                      a = t.floating.style;
                    a.setProperty('--radix-popper-available-width', ''.concat(r, 'px')),
                      a.setProperty('--radix-popper-available-height', ''.concat(o, 'px')),
                      a.setProperty('--radix-popper-anchor-width', ''.concat(l, 'px')),
                      a.setProperty('--radix-popper-anchor-height', ''.concat(i, 'px'));
                  },
                }),
                O && eT({ element: O, padding: E }),
                eQ({ arrowWidth: W, arrowHeight: F }),
                N && ej({ strategy: 'referenceHidden', ...V }),
              ],
            }),
            [Z, G] = e0(Y),
            J = (0, eO.W)(A);
          (0, eI.b)(() => {
            q && (null == J || J());
          }, [q, J]);
          let Q = null === (n = X.arrow) || void 0 === n ? void 0 : n.x,
            ee = null === (l = X.arrow) || void 0 === l ? void 0 : l.y,
            et = (null === (i = X.arrow) || void 0 === i ? void 0 : i.centerOffset) !== 0,
            [er, eo] = r.useState();
          return (
            (0, eI.b)(() => {
              T && eo(window.getComputedStyle(T).zIndex);
            }, [T]),
            (0, a.jsx)('div', {
              ref: U.setFloating,
              'data-radix-popper-content-wrapper': '',
              style: {
                ...K,
                transform: q ? K.transform : 'translate(0, -200%)',
                minWidth: 'max-content',
                zIndex: er,
                '--radix-popper-transform-origin': [
                  null === (c = X.transformOrigin) || void 0 === c ? void 0 : c.x,
                  null === (s = X.transformOrigin) || void 0 === s ? void 0 : s.y,
                ].join(' '),
                ...((null === (d = X.hide) || void 0 === d ? void 0 : d.referenceHidden) && {
                  visibility: 'hidden',
                  pointerEvents: 'none',
                }),
              },
              dir: e.dir,
              children: (0, a.jsx)(eK, {
                scope: v,
                placedSide: Z,
                onArrowChange: I,
                arrowX: Q,
                arrowY: ee,
                shouldHideArrow: et,
                children: (0, a.jsx)(eL.WV.div, {
                  'data-side': Z,
                  'data-align': G,
                  ...k,
                  ref: D,
                  style: { ...k.style, animation: q ? void 0 : 'none' },
                }),
              }),
            })
          );
        });
      eq.displayName = eU;
      var eX = 'PopperArrow',
        eZ = { top: 'bottom', right: 'left', bottom: 'top', left: 'right' },
        eG = r.forwardRef(function (e, t) {
          let { __scopePopper: n, ...r } = e,
            o = eY(eX, n),
            l = eZ[o.placedSide];
          return (0, a.jsx)('span', {
            ref: o.onArrowChange,
            style: {
              position: 'absolute',
              left: o.arrowX,
              top: o.arrowY,
              [l]: 0,
              transformOrigin: { top: '', right: '0 0', bottom: 'center 0', left: '100% 0' }[
                o.placedSide
              ],
              transform: {
                top: 'translateY(100%)',
                right: 'translateY(50%) rotate(90deg) translateX(-50%)',
                bottom: 'rotate(180deg)',
                left: 'translateY(50%) rotate(-90deg) translateX(50%)',
              }[o.placedSide],
              visibility: o.shouldHideArrow ? 'hidden' : void 0,
            },
            children: (0, a.jsx)(eD, { ...r, ref: t, style: { ...r.style, display: 'block' } }),
          });
        });
      function eJ(e) {
        return null !== e;
      }
      eG.displayName = eX;
      var eQ = e => ({
        name: 'transformOrigin',
        options: e,
        fn(t) {
          var n, r, o, l, i;
          let { placement: a, rects: u, middlewareData: c } = t,
            s = (null === (n = c.arrow) || void 0 === n ? void 0 : n.centerOffset) !== 0,
            d = s ? 0 : e.arrowWidth,
            f = s ? 0 : e.arrowHeight,
            [p, v] = e0(a),
            h = { start: '0%', center: '50%', end: '100%' }[v],
            m =
              (null !== (l = null === (r = c.arrow) || void 0 === r ? void 0 : r.x) && void 0 !== l
                ? l
                : 0) +
              d / 2,
            g =
              (null !== (i = null === (o = c.arrow) || void 0 === o ? void 0 : o.y) && void 0 !== i
                ? i
                : 0) +
              f / 2,
            y = '',
            w = '';
          return (
            'bottom' === p
              ? ((y = s ? h : ''.concat(m, 'px')), (w = ''.concat(-f, 'px')))
              : 'top' === p
                ? ((y = s ? h : ''.concat(m, 'px')), (w = ''.concat(u.floating.height + f, 'px')))
                : 'right' === p
                  ? ((y = ''.concat(-f, 'px')), (w = s ? h : ''.concat(g, 'px')))
                  : 'left' === p &&
                    ((y = ''.concat(u.floating.width + f, 'px')), (w = s ? h : ''.concat(g, 'px'))),
            { data: { x: y, y: w } }
          );
        },
      });
      function e0(e) {
        let [t, n = 'center'] = e.split('-');
        return [t, n];
      }
      var e1 = n(6935),
        e2 = n(1715),
        e5 = r.forwardRef((e, t) =>
          (0, a.jsx)(eL.WV.span, {
            ...e,
            ref: t,
            style: {
              position: 'absolute',
              border: 0,
              width: 1,
              height: 1,
              padding: 0,
              margin: -1,
              overflow: 'hidden',
              clip: 'rect(0, 0, 0, 0)',
              whiteSpace: 'nowrap',
              wordWrap: 'normal',
              ...e.style,
            },
          })
        );
      e5.displayName = 'VisuallyHidden';
      var e3 = n(8369),
        e8 = n(9418),
        e7 = [' ', 'Enter', 'ArrowUp', 'ArrowDown'],
        e4 = [' ', 'Enter'],
        e6 = 'Select',
        [e9, te, tt] = (function (e) {
          let t = e + 'CollectionProvider',
            [n, o] = (function (e, t = []) {
              let n = [],
                o = () => {
                  let t = n.map(e => r.createContext(e));
                  return function (n) {
                    let o = n?.[e] || t;
                    return r.useMemo(() => ({ [`__scope${e}`]: { ...n, [e]: o } }), [n, o]);
                  };
                };
              return (
                (o.scopeName = e),
                [
                  function (t, o) {
                    let l = r.createContext(o),
                      i = n.length;
                    function u(t) {
                      let { scope: n, children: o, ...u } = t,
                        c = n?.[e][i] || l,
                        s = r.useMemo(() => u, Object.values(u));
                      return (0, a.jsx)(c.Provider, { value: s, children: o });
                    }
                    return (
                      (n = [...n, o]),
                      (u.displayName = t + 'Provider'),
                      [
                        u,
                        function (n, a) {
                          let u = a?.[e][i] || l,
                            c = r.useContext(u);
                          if (c) return c;
                          if (void 0 !== o) return o;
                          throw Error(`\`${n}\` must be used within \`${t}\``);
                        },
                      ]
                    );
                  },
                  (function (...e) {
                    let t = e[0];
                    if (1 === e.length) return t;
                    let n = () => {
                      let n = e.map(e => ({ useScope: e(), scopeName: e.scopeName }));
                      return function (e) {
                        let o = n.reduce((t, { useScope: n, scopeName: r }) => {
                          let o = n(e)[`__scope${r}`];
                          return { ...t, ...o };
                        }, {});
                        return r.useMemo(() => ({ [`__scope${t.scopeName}`]: o }), [o]);
                      };
                    };
                    return (n.scopeName = t.scopeName), n;
                  })(o, ...t),
                ]
              );
            })(t),
            [l, i] = n(t, { collectionRef: { current: null }, itemMap: new Map() }),
            s = e => {
              let { scope: t, children: n } = e,
                o = r.useRef(null),
                i = r.useRef(new Map()).current;
              return (0, a.jsx)(l, { scope: t, itemMap: i, collectionRef: o, children: n });
            };
          s.displayName = t;
          let d = e + 'CollectionSlot',
            f = r.forwardRef((e, t) => {
              let { scope: n, children: r } = e,
                o = i(d, n),
                l = (0, u.e)(t, o.collectionRef);
              return (0, a.jsx)(c.g7, { ref: l, children: r });
            });
          f.displayName = d;
          let p = e + 'CollectionItemSlot',
            v = 'data-radix-collection-item',
            h = r.forwardRef((e, t) => {
              let { scope: n, children: o, ...l } = e,
                s = r.useRef(null),
                d = (0, u.e)(t, s),
                f = i(p, n);
              return (
                r.useEffect(
                  () => (f.itemMap.set(s, { ref: s, ...l }), () => void f.itemMap.delete(s))
                ),
                (0, a.jsx)(c.g7, { [v]: '', ref: d, children: o })
              );
            });
          return (
            (h.displayName = p),
            [
              { Provider: s, Slot: f, ItemSlot: h },
              function (t) {
                let n = i(e + 'CollectionConsumer', t);
                return r.useCallback(() => {
                  let e = n.collectionRef.current;
                  if (!e) return [];
                  let t = Array.from(e.querySelectorAll('['.concat(v, ']')));
                  return Array.from(n.itemMap.values()).sort(
                    (e, n) => t.indexOf(e.ref.current) - t.indexOf(n.ref.current)
                  );
                }, [n.collectionRef, n.itemMap]);
              },
              o,
            ]
          );
        })(e6),
        [tn, tr] = (0, s.b)(e6, [tt, eF]),
        to = eF(),
        [tl, ti] = tn(e6),
        [ta, tu] = tn(e6),
        tc = e => {
          let {
              __scopeSelect: t,
              children: n,
              open: o,
              defaultOpen: l,
              onOpenChange: i,
              value: u,
              defaultValue: c,
              onValueChange: s,
              dir: f,
              name: p,
              autoComplete: v,
              disabled: m,
              required: g,
              form: y,
            } = e,
            w = to(t),
            [b, x] = r.useState(null),
            [E, S] = r.useState(null),
            [C, R] = r.useState(!1),
            M = (function (e) {
              let t = r.useContext(d);
              return e || t || 'ltr';
            })(f),
            [N = !1, P] = (0, e2.T)({ prop: o, defaultProp: l, onChange: i }),
            [A, k] = (0, e2.T)({ prop: u, defaultProp: c, onChange: s }),
            j = r.useRef(null),
            T = !b || y || !!b.closest('form'),
            [L, D] = r.useState(new Set()),
            O = Array.from(L)
              .map(e => e.props.value)
              .join(';');
          return (0, a.jsx)(e$, {
            ...w,
            children: (0, a.jsxs)(tl, {
              required: g,
              scope: t,
              trigger: b,
              onTriggerChange: x,
              valueNode: E,
              onValueNodeChange: S,
              valueNodeHasChildren: C,
              onValueNodeHasChildrenChange: R,
              contentId: (0, h.M)(),
              value: A,
              onValueChange: k,
              open: N,
              onOpenChange: P,
              dir: M,
              triggerPointerDownPosRef: j,
              disabled: m,
              children: [
                (0, a.jsx)(e9.Provider, {
                  scope: t,
                  children: (0, a.jsx)(ta, {
                    scope: e.__scopeSelect,
                    onNativeOptionAdd: r.useCallback(e => {
                      D(t => new Set(t).add(e));
                    }, []),
                    onNativeOptionRemove: r.useCallback(e => {
                      D(t => {
                        let n = new Set(t);
                        return n.delete(e), n;
                      });
                    }, []),
                    children: n,
                  }),
                }),
                T
                  ? (0, a.jsxs)(
                      tB,
                      {
                        'aria-hidden': !0,
                        required: g,
                        tabIndex: -1,
                        name: p,
                        autoComplete: v,
                        value: A,
                        onChange: e => k(e.target.value),
                        disabled: m,
                        form: y,
                        children: [
                          void 0 === A ? (0, a.jsx)('option', { value: '' }) : null,
                          Array.from(L),
                        ],
                      },
                      O
                    )
                  : null,
              ],
            }),
          });
        };
      tc.displayName = e6;
      var ts = 'SelectTrigger',
        td = r.forwardRef((e, t) => {
          let { __scopeSelect: n, disabled: o = !1, ...l } = e,
            c = to(n),
            s = ti(ts, n),
            d = s.disabled || o,
            f = (0, u.e)(t, s.onTriggerChange),
            p = te(n),
            v = r.useRef('touch'),
            [h, m, g] = tV(e => {
              let t = p().filter(e => !e.disabled),
                n = t.find(e => e.value === s.value),
                r = tU(t, e, n);
              void 0 !== r && s.onValueChange(r.value);
            }),
            y = e => {
              d || (s.onOpenChange(!0), g()),
                e &&
                  (s.triggerPointerDownPosRef.current = {
                    x: Math.round(e.pageX),
                    y: Math.round(e.pageY),
                  });
            };
          return (0, a.jsx)(eV, {
            asChild: !0,
            ...c,
            children: (0, a.jsx)(eL.WV.button, {
              type: 'button',
              role: 'combobox',
              'aria-controls': s.contentId,
              'aria-expanded': s.open,
              'aria-required': s.required,
              'aria-autocomplete': 'none',
              dir: s.dir,
              'data-state': s.open ? 'open' : 'closed',
              disabled: d,
              'data-disabled': d ? '' : void 0,
              'data-placeholder': t$(s.value) ? '' : void 0,
              ...l,
              ref: f,
              onClick: (0, i.M)(l.onClick, e => {
                e.currentTarget.focus(), 'mouse' !== v.current && y(e);
              }),
              onPointerDown: (0, i.M)(l.onPointerDown, e => {
                v.current = e.pointerType;
                let t = e.target;
                t.hasPointerCapture(e.pointerId) && t.releasePointerCapture(e.pointerId),
                  0 === e.button &&
                    !1 === e.ctrlKey &&
                    'mouse' === e.pointerType &&
                    (y(e), e.preventDefault());
              }),
              onKeyDown: (0, i.M)(l.onKeyDown, e => {
                let t = '' !== h.current;
                e.ctrlKey || e.altKey || e.metaKey || 1 !== e.key.length || m(e.key),
                  (!t || ' ' !== e.key) && e7.includes(e.key) && (y(), e.preventDefault());
              }),
            }),
          });
        });
      td.displayName = ts;
      var tf = 'SelectValue',
        tp = r.forwardRef((e, t) => {
          let {
              __scopeSelect: n,
              className: r,
              style: o,
              children: l,
              placeholder: i = '',
              ...c
            } = e,
            s = ti(tf, n),
            { onValueNodeHasChildrenChange: d } = s,
            f = void 0 !== l,
            p = (0, u.e)(t, s.onValueNodeChange);
          return (
            (0, eI.b)(() => {
              d(f);
            }, [d, f]),
            (0, a.jsx)(eL.WV.span, {
              ...c,
              ref: p,
              style: { pointerEvents: 'none' },
              children: t$(s.value) ? (0, a.jsx)(a.Fragment, { children: i }) : l,
            })
          );
        });
      tp.displayName = tf;
      var tv = r.forwardRef((e, t) => {
        let { __scopeSelect: n, children: r, ...o } = e;
        return (0, a.jsx)(eL.WV.span, { 'aria-hidden': !0, ...o, ref: t, children: r || '▼' });
      });
      tv.displayName = 'SelectIcon';
      var th = e => (0, a.jsx)(e1.h, { asChild: !0, ...e });
      th.displayName = 'SelectPortal';
      var tm = 'SelectContent',
        tg = r.forwardRef((e, t) => {
          let n = ti(tm, e.__scopeSelect),
            [l, i] = r.useState();
          return ((0, eI.b)(() => {
            i(new DocumentFragment());
          }, []),
          n.open)
            ? (0, a.jsx)(tb, { ...e, ref: t })
            : l
              ? o.createPortal(
                  (0, a.jsx)(ty, {
                    scope: e.__scopeSelect,
                    children: (0, a.jsx)(e9.Slot, {
                      scope: e.__scopeSelect,
                      children: (0, a.jsx)('div', { children: e.children }),
                    }),
                  }),
                  l
                )
              : null;
        });
      tg.displayName = tm;
      var [ty, tw] = tn(tm),
        tb = r.forwardRef((e, t) => {
          let {
              __scopeSelect: n,
              position: o = 'item-aligned',
              onCloseAutoFocus: l,
              onEscapeKeyDown: s,
              onPointerDownOutside: d,
              side: h,
              sideOffset: m,
              align: g,
              alignOffset: y,
              arrowPadding: w,
              collisionBoundary: b,
              collisionPadding: x,
              sticky: E,
              hideWhenDetached: S,
              avoidCollisions: C,
              ...R
            } = e,
            M = ti(tm, n),
            [N, P] = r.useState(null),
            [A, k] = r.useState(null),
            j = (0, u.e)(t, e => P(e)),
            [T, L] = r.useState(null),
            [D, O] = r.useState(null),
            I = te(n),
            [z, W] = r.useState(!1),
            F = r.useRef(!1);
          r.useEffect(() => {
            if (N) return (0, e3.Ry)(N);
          }, [N]),
            (0, p.EW)();
          let _ = r.useCallback(
              e => {
                let [t, ...n] = I().map(e => e.ref.current),
                  [r] = n.slice(-1),
                  o = document.activeElement;
                for (let n of e)
                  if (
                    n === o ||
                    (null == n || n.scrollIntoView({ block: 'nearest' }),
                    n === t && A && (A.scrollTop = 0),
                    n === r && A && (A.scrollTop = A.scrollHeight),
                    null == n || n.focus(),
                    document.activeElement !== o)
                  )
                    return;
              },
              [I, A]
            ),
            H = r.useCallback(() => _([T, N]), [_, T, N]);
          r.useEffect(() => {
            z && H();
          }, [z, H]);
          let { onOpenChange: $, triggerPointerDownPosRef: B } = M;
          r.useEffect(() => {
            if (N) {
              let e = { x: 0, y: 0 },
                t = t => {
                  var n, r, o, l;
                  e = {
                    x: Math.abs(
                      Math.round(t.pageX) -
                        (null !== (o = null === (n = B.current) || void 0 === n ? void 0 : n.x) &&
                        void 0 !== o
                          ? o
                          : 0)
                    ),
                    y: Math.abs(
                      Math.round(t.pageY) -
                        (null !== (l = null === (r = B.current) || void 0 === r ? void 0 : r.y) &&
                        void 0 !== l
                          ? l
                          : 0)
                    ),
                  };
                },
                n = n => {
                  e.x <= 10 && e.y <= 10 ? n.preventDefault() : N.contains(n.target) || $(!1),
                    document.removeEventListener('pointermove', t),
                    (B.current = null);
                };
              return (
                null !== B.current &&
                  (document.addEventListener('pointermove', t),
                  document.addEventListener('pointerup', n, { capture: !0, once: !0 })),
                () => {
                  document.removeEventListener('pointermove', t),
                    document.removeEventListener('pointerup', n, { capture: !0 });
                }
              );
            }
          }, [N, $, B]),
            r.useEffect(() => {
              let e = () => $(!1);
              return (
                window.addEventListener('blur', e),
                window.addEventListener('resize', e),
                () => {
                  window.removeEventListener('blur', e), window.removeEventListener('resize', e);
                }
              );
            }, [$]);
          let [V, U] = tV(e => {
              let t = I().filter(e => !e.disabled),
                n = t.find(e => e.ref.current === document.activeElement),
                r = tU(t, e, n);
              r && setTimeout(() => r.ref.current.focus());
            }),
            K = r.useCallback(
              (e, t, n) => {
                let r = !F.current && !n;
                ((void 0 !== M.value && M.value === t) || r) && (L(e), r && (F.current = !0));
              },
              [M.value]
            ),
            Y = r.useCallback(() => (null == N ? void 0 : N.focus()), [N]),
            q = r.useCallback(
              (e, t, n) => {
                let r = !F.current && !n;
                ((void 0 !== M.value && M.value === t) || r) && O(e);
              },
              [M.value]
            ),
            X = 'popper' === o ? tE : tx,
            Z =
              X === tE
                ? {
                    side: h,
                    sideOffset: m,
                    align: g,
                    alignOffset: y,
                    arrowPadding: w,
                    collisionBoundary: b,
                    collisionPadding: x,
                    sticky: E,
                    hideWhenDetached: S,
                    avoidCollisions: C,
                  }
                : {};
          return (0, a.jsx)(ty, {
            scope: n,
            content: N,
            viewport: A,
            onViewportChange: k,
            itemRefCallback: K,
            selectedItem: T,
            onItemLeave: Y,
            itemTextRefCallback: q,
            focusSelectedItem: H,
            selectedItemText: D,
            position: o,
            isPositioned: z,
            searchRef: V,
            children: (0, a.jsx)(e8.Z, {
              as: c.g7,
              allowPinchZoom: !0,
              children: (0, a.jsx)(v.M, {
                asChild: !0,
                trapped: M.open,
                onMountAutoFocus: e => {
                  e.preventDefault();
                },
                onUnmountAutoFocus: (0, i.M)(l, e => {
                  var t;
                  null === (t = M.trigger) || void 0 === t || t.focus({ preventScroll: !0 }),
                    e.preventDefault();
                }),
                children: (0, a.jsx)(f.XB, {
                  asChild: !0,
                  disableOutsidePointerEvents: !0,
                  onEscapeKeyDown: s,
                  onPointerDownOutside: d,
                  onFocusOutside: e => e.preventDefault(),
                  onDismiss: () => M.onOpenChange(!1),
                  children: (0, a.jsx)(X, {
                    role: 'listbox',
                    id: M.contentId,
                    'data-state': M.open ? 'open' : 'closed',
                    dir: M.dir,
                    onContextMenu: e => e.preventDefault(),
                    ...R,
                    ...Z,
                    onPlaced: () => W(!0),
                    ref: j,
                    style: {
                      display: 'flex',
                      flexDirection: 'column',
                      outline: 'none',
                      ...R.style,
                    },
                    onKeyDown: (0, i.M)(R.onKeyDown, e => {
                      let t = e.ctrlKey || e.altKey || e.metaKey;
                      if (
                        ('Tab' === e.key && e.preventDefault(),
                        t || 1 !== e.key.length || U(e.key),
                        ['ArrowUp', 'ArrowDown', 'Home', 'End'].includes(e.key))
                      ) {
                        let t = I()
                          .filter(e => !e.disabled)
                          .map(e => e.ref.current);
                        if (
                          (['ArrowUp', 'End'].includes(e.key) && (t = t.slice().reverse()),
                          ['ArrowUp', 'ArrowDown'].includes(e.key))
                        ) {
                          let n = e.target,
                            r = t.indexOf(n);
                          t = t.slice(r + 1);
                        }
                        setTimeout(() => _(t)), e.preventDefault();
                      }
                    }),
                  }),
                }),
              }),
            }),
          });
        });
      tb.displayName = 'SelectContentImpl';
      var tx = r.forwardRef((e, t) => {
        let { __scopeSelect: n, onPlaced: o, ...i } = e,
          c = ti(tm, n),
          s = tw(tm, n),
          [d, f] = r.useState(null),
          [p, v] = r.useState(null),
          h = (0, u.e)(t, e => v(e)),
          m = te(n),
          g = r.useRef(!1),
          y = r.useRef(!0),
          { viewport: w, selectedItem: b, selectedItemText: x, focusSelectedItem: E } = s,
          S = r.useCallback(() => {
            if (c.trigger && c.valueNode && d && p && w && b && x) {
              let e = c.trigger.getBoundingClientRect(),
                t = p.getBoundingClientRect(),
                n = c.valueNode.getBoundingClientRect(),
                r = x.getBoundingClientRect();
              if ('rtl' !== c.dir) {
                let o = r.left - t.left,
                  i = n.left - o,
                  a = e.left - i,
                  u = e.width + a,
                  c = Math.max(u, t.width),
                  s = l(i, [10, Math.max(10, window.innerWidth - 10 - c)]);
                (d.style.minWidth = u + 'px'), (d.style.left = s + 'px');
              } else {
                let o = t.right - r.right,
                  i = window.innerWidth - n.right - o,
                  a = window.innerWidth - e.right - i,
                  u = e.width + a,
                  c = Math.max(u, t.width),
                  s = l(i, [10, Math.max(10, window.innerWidth - 10 - c)]);
                (d.style.minWidth = u + 'px'), (d.style.right = s + 'px');
              }
              let i = m(),
                a = window.innerHeight - 20,
                u = w.scrollHeight,
                s = window.getComputedStyle(p),
                f = parseInt(s.borderTopWidth, 10),
                v = parseInt(s.paddingTop, 10),
                h = parseInt(s.borderBottomWidth, 10),
                y = f + v + u + parseInt(s.paddingBottom, 10) + h,
                E = Math.min(5 * b.offsetHeight, y),
                S = window.getComputedStyle(w),
                C = parseInt(S.paddingTop, 10),
                R = parseInt(S.paddingBottom, 10),
                M = e.top + e.height / 2 - 10,
                N = b.offsetHeight / 2,
                P = f + v + (b.offsetTop + N);
              if (P <= M) {
                let e = i.length > 0 && b === i[i.length - 1].ref.current;
                d.style.bottom = '0px';
                let t = Math.max(
                  a - M,
                  N + (e ? R : 0) + (p.clientHeight - w.offsetTop - w.offsetHeight) + h
                );
                d.style.height = P + t + 'px';
              } else {
                let e = i.length > 0 && b === i[0].ref.current;
                d.style.top = '0px';
                let t = Math.max(M, f + w.offsetTop + (e ? C : 0) + N);
                (d.style.height = t + (y - P) + 'px'), (w.scrollTop = P - M + w.offsetTop);
              }
              (d.style.margin = ''.concat(10, 'px 0')),
                (d.style.minHeight = E + 'px'),
                (d.style.maxHeight = a + 'px'),
                null == o || o(),
                requestAnimationFrame(() => (g.current = !0));
            }
          }, [m, c.trigger, c.valueNode, d, p, w, b, x, c.dir, o]);
        (0, eI.b)(() => S(), [S]);
        let [C, R] = r.useState();
        (0, eI.b)(() => {
          p && R(window.getComputedStyle(p).zIndex);
        }, [p]);
        let M = r.useCallback(
          e => {
            e && !0 === y.current && (S(), null == E || E(), (y.current = !1));
          },
          [S, E]
        );
        return (0, a.jsx)(tS, {
          scope: n,
          contentWrapper: d,
          shouldExpandOnScrollRef: g,
          onScrollButtonChange: M,
          children: (0, a.jsx)('div', {
            ref: f,
            style: { display: 'flex', flexDirection: 'column', position: 'fixed', zIndex: C },
            children: (0, a.jsx)(eL.WV.div, {
              ...i,
              ref: h,
              style: { boxSizing: 'border-box', maxHeight: '100%', ...i.style },
            }),
          }),
        });
      });
      tx.displayName = 'SelectItemAlignedPosition';
      var tE = r.forwardRef((e, t) => {
        let { __scopeSelect: n, align: r = 'start', collisionPadding: o = 10, ...l } = e,
          i = to(n);
        return (0, a.jsx)(eq, {
          ...i,
          ...l,
          ref: t,
          align: r,
          collisionPadding: o,
          style: {
            boxSizing: 'border-box',
            ...l.style,
            '--radix-select-content-transform-origin': 'var(--radix-popper-transform-origin)',
            '--radix-select-content-available-width': 'var(--radix-popper-available-width)',
            '--radix-select-content-available-height': 'var(--radix-popper-available-height)',
            '--radix-select-trigger-width': 'var(--radix-popper-anchor-width)',
            '--radix-select-trigger-height': 'var(--radix-popper-anchor-height)',
          },
        });
      });
      tE.displayName = 'SelectPopperPosition';
      var [tS, tC] = tn(tm, {}),
        tR = 'SelectViewport',
        tM = r.forwardRef((e, t) => {
          let { __scopeSelect: n, nonce: o, ...l } = e,
            c = tw(tR, n),
            s = tC(tR, n),
            d = (0, u.e)(t, c.onViewportChange),
            f = r.useRef(0);
          return (0, a.jsxs)(a.Fragment, {
            children: [
              (0, a.jsx)('style', {
                dangerouslySetInnerHTML: {
                  __html:
                    '[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}',
                },
                nonce: o,
              }),
              (0, a.jsx)(e9.Slot, {
                scope: n,
                children: (0, a.jsx)(eL.WV.div, {
                  'data-radix-select-viewport': '',
                  role: 'presentation',
                  ...l,
                  ref: d,
                  style: { position: 'relative', flex: 1, overflow: 'hidden auto', ...l.style },
                  onScroll: (0, i.M)(l.onScroll, e => {
                    let t = e.currentTarget,
                      { contentWrapper: n, shouldExpandOnScrollRef: r } = s;
                    if ((null == r ? void 0 : r.current) && n) {
                      let e = Math.abs(f.current - t.scrollTop);
                      if (e > 0) {
                        let r = window.innerHeight - 20,
                          o = Math.max(parseFloat(n.style.minHeight), parseFloat(n.style.height));
                        if (o < r) {
                          let l = o + e,
                            i = Math.min(r, l),
                            a = l - i;
                          (n.style.height = i + 'px'),
                            '0px' === n.style.bottom &&
                              ((t.scrollTop = a > 0 ? a : 0),
                              (n.style.justifyContent = 'flex-end'));
                        }
                      }
                    }
                    f.current = t.scrollTop;
                  }),
                }),
              }),
            ],
          });
        });
      tM.displayName = tR;
      var tN = 'SelectGroup',
        [tP, tA] = tn(tN);
      r.forwardRef((e, t) => {
        let { __scopeSelect: n, ...r } = e,
          o = (0, h.M)();
        return (0, a.jsx)(tP, {
          scope: n,
          id: o,
          children: (0, a.jsx)(eL.WV.div, { role: 'group', 'aria-labelledby': o, ...r, ref: t }),
        });
      }).displayName = tN;
      var tk = 'SelectLabel';
      r.forwardRef((e, t) => {
        let { __scopeSelect: n, ...r } = e,
          o = tA(tk, n);
        return (0, a.jsx)(eL.WV.div, { id: o.id, ...r, ref: t });
      }).displayName = tk;
      var tj = 'SelectItem',
        [tT, tL] = tn(tj),
        tD = r.forwardRef((e, t) => {
          let { __scopeSelect: n, value: o, disabled: l = !1, textValue: c, ...s } = e,
            d = ti(tj, n),
            f = tw(tj, n),
            p = d.value === o,
            [v, m] = r.useState(null != c ? c : ''),
            [g, y] = r.useState(!1),
            w = (0, u.e)(t, e => {
              var t;
              return null === (t = f.itemRefCallback) || void 0 === t ? void 0 : t.call(f, e, o, l);
            }),
            b = (0, h.M)(),
            x = r.useRef('touch'),
            E = () => {
              l || (d.onValueChange(o), d.onOpenChange(!1));
            };
          if ('' === o)
            throw Error(
              'A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder.'
            );
          return (0, a.jsx)(tT, {
            scope: n,
            value: o,
            disabled: l,
            textId: b,
            isSelected: p,
            onItemTextChange: r.useCallback(e => {
              m(t => {
                var n;
                return (
                  t ||
                  (null !== (n = null == e ? void 0 : e.textContent) && void 0 !== n
                    ? n
                    : ''
                  ).trim()
                );
              });
            }, []),
            children: (0, a.jsx)(e9.ItemSlot, {
              scope: n,
              value: o,
              disabled: l,
              textValue: v,
              children: (0, a.jsx)(eL.WV.div, {
                role: 'option',
                'aria-labelledby': b,
                'data-highlighted': g ? '' : void 0,
                'aria-selected': p && g,
                'data-state': p ? 'checked' : 'unchecked',
                'aria-disabled': l || void 0,
                'data-disabled': l ? '' : void 0,
                tabIndex: l ? void 0 : -1,
                ...s,
                ref: w,
                onFocus: (0, i.M)(s.onFocus, () => y(!0)),
                onBlur: (0, i.M)(s.onBlur, () => y(!1)),
                onClick: (0, i.M)(s.onClick, () => {
                  'mouse' !== x.current && E();
                }),
                onPointerUp: (0, i.M)(s.onPointerUp, () => {
                  'mouse' === x.current && E();
                }),
                onPointerDown: (0, i.M)(s.onPointerDown, e => {
                  x.current = e.pointerType;
                }),
                onPointerMove: (0, i.M)(s.onPointerMove, e => {
                  if (((x.current = e.pointerType), l)) {
                    var t;
                    null === (t = f.onItemLeave) || void 0 === t || t.call(f);
                  } else 'mouse' === x.current && e.currentTarget.focus({ preventScroll: !0 });
                }),
                onPointerLeave: (0, i.M)(s.onPointerLeave, e => {
                  if (e.currentTarget === document.activeElement) {
                    var t;
                    null === (t = f.onItemLeave) || void 0 === t || t.call(f);
                  }
                }),
                onKeyDown: (0, i.M)(s.onKeyDown, e => {
                  var t;
                  ((null === (t = f.searchRef) || void 0 === t ? void 0 : t.current) !== '' &&
                    ' ' === e.key) ||
                    (e4.includes(e.key) && E(), ' ' === e.key && e.preventDefault());
                }),
              }),
            }),
          });
        });
      tD.displayName = tj;
      var tO = 'SelectItemText',
        tI = r.forwardRef((e, t) => {
          let { __scopeSelect: n, className: l, style: i, ...c } = e,
            s = ti(tO, n),
            d = tw(tO, n),
            f = tL(tO, n),
            p = tu(tO, n),
            [v, h] = r.useState(null),
            m = (0, u.e)(
              t,
              e => h(e),
              f.onItemTextChange,
              e => {
                var t;
                return null === (t = d.itemTextRefCallback) || void 0 === t
                  ? void 0
                  : t.call(d, e, f.value, f.disabled);
              }
            ),
            g = null == v ? void 0 : v.textContent,
            y = r.useMemo(
              () =>
                (0, a.jsx)(
                  'option',
                  { value: f.value, disabled: f.disabled, children: g },
                  f.value
                ),
              [f.disabled, f.value, g]
            ),
            { onNativeOptionAdd: w, onNativeOptionRemove: b } = p;
          return (
            (0, eI.b)(() => (w(y), () => b(y)), [w, b, y]),
            (0, a.jsxs)(a.Fragment, {
              children: [
                (0, a.jsx)(eL.WV.span, { id: f.textId, ...c, ref: m }),
                f.isSelected && s.valueNode && !s.valueNodeHasChildren
                  ? o.createPortal(c.children, s.valueNode)
                  : null,
              ],
            })
          );
        });
      tI.displayName = tO;
      var tz = 'SelectItemIndicator';
      r.forwardRef((e, t) => {
        let { __scopeSelect: n, ...r } = e;
        return tL(tz, n).isSelected
          ? (0, a.jsx)(eL.WV.span, { 'aria-hidden': !0, ...r, ref: t })
          : null;
      }).displayName = tz;
      var tW = 'SelectScrollUpButton';
      r.forwardRef((e, t) => {
        let n = tw(tW, e.__scopeSelect),
          o = tC(tW, e.__scopeSelect),
          [l, i] = r.useState(!1),
          c = (0, u.e)(t, o.onScrollButtonChange);
        return (
          (0, eI.b)(() => {
            if (n.viewport && n.isPositioned) {
              let e = function () {
                  i(t.scrollTop > 0);
                },
                t = n.viewport;
              return e(), t.addEventListener('scroll', e), () => t.removeEventListener('scroll', e);
            }
          }, [n.viewport, n.isPositioned]),
          l
            ? (0, a.jsx)(t_, {
                ...e,
                ref: c,
                onAutoScroll: () => {
                  let { viewport: e, selectedItem: t } = n;
                  e && t && (e.scrollTop = e.scrollTop - t.offsetHeight);
                },
              })
            : null
        );
      }).displayName = tW;
      var tF = 'SelectScrollDownButton';
      r.forwardRef((e, t) => {
        let n = tw(tF, e.__scopeSelect),
          o = tC(tF, e.__scopeSelect),
          [l, i] = r.useState(!1),
          c = (0, u.e)(t, o.onScrollButtonChange);
        return (
          (0, eI.b)(() => {
            if (n.viewport && n.isPositioned) {
              let e = function () {
                  let e = t.scrollHeight - t.clientHeight;
                  i(Math.ceil(t.scrollTop) < e);
                },
                t = n.viewport;
              return e(), t.addEventListener('scroll', e), () => t.removeEventListener('scroll', e);
            }
          }, [n.viewport, n.isPositioned]),
          l
            ? (0, a.jsx)(t_, {
                ...e,
                ref: c,
                onAutoScroll: () => {
                  let { viewport: e, selectedItem: t } = n;
                  e && t && (e.scrollTop = e.scrollTop + t.offsetHeight);
                },
              })
            : null
        );
      }).displayName = tF;
      var t_ = r.forwardRef((e, t) => {
        let { __scopeSelect: n, onAutoScroll: o, ...l } = e,
          u = tw('SelectScrollButton', n),
          c = r.useRef(null),
          s = te(n),
          d = r.useCallback(() => {
            null !== c.current && (window.clearInterval(c.current), (c.current = null));
          }, []);
        return (
          r.useEffect(() => () => d(), [d]),
          (0, eI.b)(() => {
            var e;
            let t = s().find(e => e.ref.current === document.activeElement);
            null == t ||
              null === (e = t.ref.current) ||
              void 0 === e ||
              e.scrollIntoView({ block: 'nearest' });
          }, [s]),
          (0, a.jsx)(eL.WV.div, {
            'aria-hidden': !0,
            ...l,
            ref: t,
            style: { flexShrink: 0, ...l.style },
            onPointerDown: (0, i.M)(l.onPointerDown, () => {
              null === c.current && (c.current = window.setInterval(o, 50));
            }),
            onPointerMove: (0, i.M)(l.onPointerMove, () => {
              var e;
              null === (e = u.onItemLeave) || void 0 === e || e.call(u),
                null === c.current && (c.current = window.setInterval(o, 50));
            }),
            onPointerLeave: (0, i.M)(l.onPointerLeave, () => {
              d();
            }),
          })
        );
      });
      r.forwardRef((e, t) => {
        let { __scopeSelect: n, ...r } = e;
        return (0, a.jsx)(eL.WV.div, { 'aria-hidden': !0, ...r, ref: t });
      }).displayName = 'SelectSeparator';
      var tH = 'SelectArrow';
      function t$(e) {
        return '' === e || void 0 === e;
      }
      r.forwardRef((e, t) => {
        let { __scopeSelect: n, ...r } = e,
          o = to(n),
          l = ti(tH, n),
          i = tw(tH, n);
        return l.open && 'popper' === i.position ? (0, a.jsx)(eG, { ...o, ...r, ref: t }) : null;
      }).displayName = tH;
      var tB = r.forwardRef((e, t) => {
        let { value: n, ...o } = e,
          l = r.useRef(null),
          i = (0, u.e)(t, l),
          c = (function (e) {
            let t = r.useRef({ value: e, previous: e });
            return r.useMemo(
              () => (
                t.current.value !== e &&
                  ((t.current.previous = t.current.value), (t.current.value = e)),
                t.current.previous
              ),
              [e]
            );
          })(n);
        return (
          r.useEffect(() => {
            let e = l.current,
              t = Object.getOwnPropertyDescriptor(window.HTMLSelectElement.prototype, 'value').set;
            if (c !== n && t) {
              let r = new Event('change', { bubbles: !0 });
              t.call(e, n), e.dispatchEvent(r);
            }
          }, [c, n]),
          (0, a.jsx)(e5, {
            asChild: !0,
            children: (0, a.jsx)('select', { ...o, ref: i, defaultValue: n }),
          })
        );
      });
      function tV(e) {
        let t = (0, eO.W)(e),
          n = r.useRef(''),
          o = r.useRef(0),
          l = r.useCallback(
            e => {
              let r = n.current + e;
              t(r),
                (function e(t) {
                  (n.current = t),
                    window.clearTimeout(o.current),
                    '' !== t && (o.current = window.setTimeout(() => e(''), 1e3));
                })(r);
            },
            [t]
          ),
          i = r.useCallback(() => {
            (n.current = ''), window.clearTimeout(o.current);
          }, []);
        return r.useEffect(() => () => window.clearTimeout(o.current), []), [n, l, i];
      }
      function tU(e, t, n) {
        var r;
        let o = t.length > 1 && Array.from(t).every(e => e === t[0]) ? t[0] : t,
          l = ((r = Math.max(n ? e.indexOf(n) : -1, 0)), e.map((t, n) => e[(r + n) % e.length]));
        1 === o.length && (l = l.filter(e => e !== n));
        let i = l.find(e => e.textValue.toLowerCase().startsWith(o.toLowerCase()));
        return i !== n ? i : void 0;
      }
      tB.displayName = 'BubbleSelect';
      var tK = tc,
        tY = td,
        tq = tp,
        tX = tv,
        tZ = th,
        tG = tg,
        tJ = tM,
        tQ = tD,
        t0 = tI;
    },
    5137: (e, t, n) => {
      n.d(t, { W: () => o });
      var r = n(2265);
      function o(e) {
        let t = r.useRef(e);
        return (
          r.useEffect(() => {
            t.current = e;
          }),
          r.useMemo(
            () =>
              (...e) =>
                t.current?.(...e),
            []
          )
        );
      }
    },
    1715: (e, t, n) => {
      n.d(t, { T: () => l });
      var r = n(2265),
        o = n(5137);
      function l({ prop: e, defaultProp: t, onChange: n = () => {} }) {
        let [l, i] = (function ({ defaultProp: e, onChange: t }) {
            let n = r.useState(e),
              [l] = n,
              i = r.useRef(l),
              a = (0, o.W)(t);
            return (
              r.useEffect(() => {
                i.current !== l && (a(l), (i.current = l));
              }, [l, i, a]),
              n
            );
          })({ defaultProp: t, onChange: n }),
          a = void 0 !== e,
          u = a ? e : l,
          c = (0, o.W)(n);
        return [
          u,
          r.useCallback(
            t => {
              if (a) {
                let n = 'function' == typeof t ? t(e) : t;
                n !== e && c(n);
              } else i(t);
            },
            [a, e, i, c]
          ),
        ];
      }
    },
    1336: (e, t, n) => {
      n.d(t, { b: () => o });
      var r = n(2265),
        o = globalThis?.document ? r.useLayoutEffect : () => {};
    },
  },
]);
