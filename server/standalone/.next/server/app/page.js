(() => {
  var e = {};
  (e.id = 931),
    (e.ids = [931]),
    (e.modules = {
      399: e => {
        'use strict';
        e.exports = require('next/dist/compiled/next-server/app-page.runtime.prod.js');
      },
      209: e => {
        'use strict';
        e.exports = require('next/dist/server/app-render/action-async-storage.external.js');
      },
      9348: e => {
        'use strict';
        e.exports = require('next/dist/server/app-render/work-async-storage.external.js');
      },
      412: e => {
        'use strict';
        e.exports = require('next/dist/server/app-render/work-unit-async-storage.external.js');
      },
      5315: e => {
        'use strict';
        e.exports = require('path');
      },
      5834: (e, t, n) => {
        'use strict';
        n.r(t),
          n.d(t, {
            GlobalError: () => l.a,
            __next_app__: () => d,
            pages: () => c,
            routeModule: () => f,
            tree: () => u,
          });
        var r = n(9442),
          o = n(42),
          i = n(8190),
          l = n.n(i),
          a = n(3289),
          s = {};
        for (let e in a)
          0 >
            ['default', 'tree', 'pages', 'GlobalError', '__next_app__', 'routeModule'].indexOf(e) &&
            (s[e] = () => a[e]);
        n.d(t, s);
        let u = [
            '',
            {
              children: [
                '__PAGE__',
                {},
                {
                  page: [
                    () => Promise.resolve().then(n.bind(n, 6044)),
                    '/home/kindguy/Desktop/WebDev/Kodex-main/kodex/src/app/page.js',
                  ],
                },
              ],
            },
            {
              layout: [
                () => Promise.resolve().then(n.bind(n, 934)),
                '/home/kindguy/Desktop/WebDev/Kodex-main/kodex/src/app/layout.js',
              ],
              'not-found': [
                () => Promise.resolve().then(n.t.bind(n, 6042, 23)),
                'next/dist/client/components/not-found-error',
              ],
            },
          ],
          c = ['/home/kindguy/Desktop/WebDev/Kodex-main/kodex/src/app/page.js'],
          d = { require: n, loadChunk: () => Promise.resolve() },
          f = new r.AppPageRouteModule({
            definition: {
              kind: o.RouteKind.APP_PAGE,
              page: '/page',
              pathname: '/',
              bundlePath: '',
              filename: '',
              appPaths: [],
            },
            userland: { loaderTree: u },
          });
      },
      9784: (e, t, n) => {
        Promise.resolve().then(n.t.bind(n, 6472, 23)),
          Promise.resolve().then(n.t.bind(n, 2461, 23)),
          Promise.resolve().then(n.t.bind(n, 8190, 23)),
          Promise.resolve().then(n.t.bind(n, 5282, 23)),
          Promise.resolve().then(n.t.bind(n, 6613, 23)),
          Promise.resolve().then(n.t.bind(n, 5486, 23)),
          Promise.resolve().then(n.t.bind(n, 8825, 23));
      },
      2184: (e, t, n) => {
        Promise.resolve().then(n.t.bind(n, 2144, 23)),
          Promise.resolve().then(n.t.bind(n, 2302, 23)),
          Promise.resolve().then(n.t.bind(n, 3582, 23)),
          Promise.resolve().then(n.t.bind(n, 9587, 23)),
          Promise.resolve().then(n.t.bind(n, 5329, 23)),
          Promise.resolve().then(n.t.bind(n, 599, 23)),
          Promise.resolve().then(n.t.bind(n, 2118, 23));
      },
      7139: (e, t, n) => {
        Promise.resolve().then(n.bind(n, 2802)), Promise.resolve().then(n.bind(n, 8173));
      },
      5944: (e, t, n) => {
        Promise.resolve().then(n.bind(n, 8466)), Promise.resolve().then(n.bind(n, 9896));
      },
      5285: (e, t, n) => {
        Promise.resolve().then(n.bind(n, 6044));
      },
      9592: (e, t, n) => {
        Promise.resolve().then(n.bind(n, 6791));
      },
      4733: (e, t, n) => {
        'use strict';
        Object.defineProperty(t, '__esModule', { value: !0 }),
          Object.defineProperty(t, 'default', {
            enumerable: !0,
            get: function () {
              return o;
            },
          });
        let r = n(4564)._(n(9762));
        function o(e, t) {
          var n;
          let o = {};
          'function' == typeof e && (o.loader = e);
          let i = { ...o, ...t };
          return (0, r.default)({
            ...i,
            modules: null == (n = i.loadableGenerated) ? void 0 : n.modules,
          });
        }
        ('function' == typeof t.default || ('object' == typeof t.default && null !== t.default)) &&
          void 0 === t.default.__esModule &&
          (Object.defineProperty(t.default, '__esModule', { value: !0 }),
          Object.assign(t.default, t),
          (e.exports = t.default));
      },
      326: (e, t) => {
        'use strict';
        function n(e) {
          return e
            .split('/')
            .map(e => encodeURIComponent(e))
            .join('/');
        }
        Object.defineProperty(t, '__esModule', { value: !0 }),
          Object.defineProperty(t, 'encodeURIPath', {
            enumerable: !0,
            get: function () {
              return n;
            },
          });
      },
      5344: (e, t, n) => {
        'use strict';
        Object.defineProperty(t, '__esModule', { value: !0 }),
          Object.defineProperty(t, 'BailoutToCSR', {
            enumerable: !0,
            get: function () {
              return o;
            },
          });
        let r = n(2368);
        function o(e) {
          let { reason: t, children: n } = e;
          throw new r.BailoutToCSRError(t);
        }
      },
      9762: (e, t, n) => {
        'use strict';
        Object.defineProperty(t, '__esModule', { value: !0 }),
          Object.defineProperty(t, 'default', {
            enumerable: !0,
            get: function () {
              return u;
            },
          });
        let r = n(6493),
          o = n(3606),
          i = n(5344),
          l = n(5823);
        function a(e) {
          return { default: e && 'default' in e ? e.default : e };
        }
        let s = { loader: () => Promise.resolve(a(() => null)), loading: null, ssr: !0 },
          u = function (e) {
            let t = { ...s, ...e },
              n = (0, o.lazy)(() => t.loader().then(a)),
              u = t.loading;
            function c(e) {
              let a = u ? (0, r.jsx)(u, { isLoading: !0, pastDelay: !0, error: null }) : null,
                s = !t.ssr || !!t.loading,
                c = s ? o.Suspense : o.Fragment,
                d = t.ssr
                  ? (0, r.jsxs)(r.Fragment, {
                      children: [
                        (0, r.jsx)(l.PreloadChunks, { moduleIds: t.modules }),
                        (0, r.jsx)(n, { ...e }),
                      ],
                    })
                  : (0, r.jsx)(i.BailoutToCSR, {
                      reason: 'next/dynamic',
                      children: (0, r.jsx)(n, { ...e }),
                    });
              return (0, r.jsx)(c, { ...(s ? { fallback: a } : {}), children: d });
            }
            return (c.displayName = 'LoadableComponent'), c;
          };
      },
      5823: (e, t, n) => {
        'use strict';
        Object.defineProperty(t, '__esModule', { value: !0 }),
          Object.defineProperty(t, 'PreloadChunks', {
            enumerable: !0,
            get: function () {
              return a;
            },
          });
        let r = n(6493),
          o = n(28),
          i = n(9348),
          l = n(326);
        function a(e) {
          let { moduleIds: t } = e,
            n = i.workAsyncStorage.getStore();
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
                  let t = n.assetPrefix + '/_next/' + (0, l.encodeURIPath)(e);
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
      6791: (e, t, n) => {
        'use strict';
        let r;
        n.r(t), n.d(t, { default: () => ip });
        var o,
          i,
          l,
          a = n(6493);
        function s() {
          return (0, a.jsx)('footer', {
            className:
              'w-full py-6 border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900',
            children: (0, a.jsx)('div', {
              className: 'container mx-auto px-4 text-center text-gray-600 dark:text-gray-400',
              children: (0, a.jsxs)('p', {
                className: 'text-sm',
                children: [
                  'Built by',
                  ' ',
                  (0, a.jsx)('a', {
                    href: '#',
                    target: '_blank',
                    rel: 'noreferrer',
                    className: 'font-medium text-blue-500 dark:text-blue-400 hover:underline',
                    children: 'Virag Jain',
                  }),
                  '. The source code is available on',
                  ' ',
                  (0, a.jsx)('a', {
                    href: '#',
                    target: '_blank',
                    rel: 'noreferrer',
                    className: 'font-medium text-blue-500 dark:text-blue-400 hover:underline',
                    children: 'GitHub',
                  }),
                  '.',
                ],
              }),
            }),
          });
        }
        var u = n(3606),
          c = n.t(u, 2);
        let {
            createElement: d,
            createContext: f,
            createRef: p,
            forwardRef: m,
            useCallback: h,
            useContext: g,
            useEffect: v,
            useImperativeHandle: x,
            useLayoutEffect: y,
            useMemo: b,
            useRef: w,
            useState: j,
          } = u,
          E = u[`useId${Math.random()}`.slice(0, 5)],
          C = f(null);
        C.displayName = 'PanelGroupContext';
        let k = 'function' == typeof E ? E : () => null,
          N = 0;
        function S(e = null) {
          let t = k(),
            n = w(e || t || null);
          return null === n.current && (n.current = '' + N++), null != e ? e : n.current;
        }
        function P({
          children: e,
          className: t = '',
          collapsedSize: n,
          collapsible: r,
          defaultSize: o,
          forwardedRef: i,
          id: l,
          maxSize: a,
          minSize: s,
          onCollapse: u,
          onExpand: c,
          onResize: f,
          order: p,
          style: m,
          tagName: h = 'div',
          ...v
        }) {
          let y = g(C);
          if (null === y)
            throw Error('Panel components must be rendered within a PanelGroup container');
          let {
              collapsePanel: b,
              expandPanel: j,
              getPanelSize: E,
              getPanelStyle: k,
              groupId: N,
              isPanelCollapsed: P,
              reevaluatePanelConstraints: R,
              registerPanel: A,
              resizePanel: T,
              unregisterPanel: D,
            } = y,
            L = S(l),
            M = w({
              callbacks: { onCollapse: u, onExpand: c, onResize: f },
              constraints: {
                collapsedSize: n,
                collapsible: r,
                defaultSize: o,
                maxSize: a,
                minSize: s,
              },
              id: L,
              idIsFromProps: void 0 !== l,
              order: p,
            });
          w({ didLogMissingDefaultSizeWarning: !1 }),
            x(
              i,
              () => ({
                collapse: () => {
                  b(M.current);
                },
                expand: e => {
                  j(M.current, e);
                },
                getId: () => L,
                getSize: () => E(M.current),
                isCollapsed: () => P(M.current),
                isExpanded: () => !P(M.current),
                resize: e => {
                  T(M.current, e);
                },
              }),
              [b, j, E, P, L, T]
            );
          let O = k(M.current, o);
          return d(h, {
            ...v,
            children: e,
            className: t,
            id: l,
            style: { ...O, ...m },
            'data-panel': '',
            'data-panel-collapsible': r || void 0,
            'data-panel-group-id': N,
            'data-panel-id': L,
            'data-panel-size': parseFloat('' + O.flexGrow).toFixed(1),
          });
        }
        let R = m((e, t) => d(P, { ...e, forwardedRef: t }));
        (P.displayName = 'Panel'), (R.displayName = 'forwardRef(Panel)');
        let A = null,
          T = null;
        function D(e, t) {
          let n = (function (e, t) {
            if (t) {
              let e = (t & H) != 0,
                n = (t & B) != 0,
                r = (t & K) != 0,
                o = (t & V) != 0;
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
          A !== n &&
            ((A = n),
            null === T &&
              ((T = document.createElement('style')),
              r && T.setAttribute('nonce', r),
              document.head.appendChild(T)),
            (T.innerHTML = `*{cursor: ${n}!important;}`));
        }
        function L(e) {
          return 'keydown' === e.type;
        }
        function M(e) {
          return e.type.startsWith('pointer');
        }
        function O(e) {
          return e.type.startsWith('mouse');
        }
        function I(e) {
          if (M(e)) {
            if (e.isPrimary) return { x: e.clientX, y: e.clientY };
          } else if (O(e)) return { x: e.clientX, y: e.clientY };
          return { x: 1 / 0, y: 1 / 0 };
        }
        let z =
          /\b(?:position|zIndex|opacity|transform|webkitTransform|mixBlendMode|filter|webkitFilter|isolation)\b/;
        function _(e) {
          let t = e.length;
          for (; t--; ) {
            let n = e[t];
            if (
              (ei(n, 'Missing node'),
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
                            null !== (t = W(e)) && void 0 !== t ? t : e
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
                    z.test(t.willChange)
                  ) || 'touch' === t.webkitOverflowScrolling
                );
              })(n))
            )
              return n;
          }
          return null;
        }
        function F(e) {
          return (e && Number(getComputedStyle(e).zIndex)) || 0;
        }
        function $(e) {
          let t = [];
          for (; e; ) t.push(e), (e = W(e));
          return t;
        }
        function W(e) {
          let { parentNode: t } = e;
          return t && t instanceof ShadowRoot ? t.host : t;
        }
        let H = 1,
          B = 2,
          K = 4,
          V = 8,
          U =
            'coarse' ===
            (function () {
              if ('function' == typeof matchMedia)
                return matchMedia('(pointer:coarse)').matches ? 'coarse' : 'fine';
            })(),
          q = [],
          G = !1,
          X = new Map(),
          Y = new Map(),
          Z = new Set();
        function J(e) {
          let { target: t } = e,
            { x: n, y: r } = I(e);
          (G = !0),
            et({ target: t, x: n, y: r }),
            er(),
            q.length > 0 && (eo('down', e), e.preventDefault(), e.stopPropagation());
        }
        function Q(e) {
          let { x: t, y: n } = I(e);
          if ((G && 0 === e.buttons && ((G = !1), eo('up', e)), !G)) {
            let { target: r } = e;
            et({ target: r, x: t, y: n });
          }
          eo('move', e), en(), q.length > 0 && e.preventDefault();
        }
        function ee(e) {
          let { target: t } = e,
            { x: n, y: r } = I(e);
          Y.clear(),
            (G = !1),
            q.length > 0 && e.preventDefault(),
            eo('up', e),
            et({ target: t, x: n, y: r }),
            en(),
            er();
        }
        function et({ target: e, x: t, y: n }) {
          q.splice(0);
          let r = null;
          e instanceof HTMLElement && (r = e),
            Z.forEach(e => {
              let { element: o, hitAreaMargins: i } = e,
                l = o.getBoundingClientRect(),
                { bottom: a, left: s, right: u, top: c } = l,
                d = U ? i.coarse : i.fine;
              if (t >= s - d && t <= u + d && n >= c - d && n <= a + d) {
                if (
                  null !== r &&
                  document.contains(r) &&
                  o !== r &&
                  !o.contains(r) &&
                  !r.contains(o) &&
                  (function (e, t) {
                    let n;
                    if (e === t) throw Error('Cannot compare node with itself');
                    let r = { a: $(e), b: $(t) };
                    for (; r.a.at(-1) === r.b.at(-1); ) (e = r.a.pop()), (t = r.b.pop()), (n = e);
                    ei(
                      n,
                      'Stacking order can only be calculated for elements with a common ancestor'
                    );
                    let o = { a: F(_(r.a)), b: F(_(r.b)) };
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
                      (f = e.getBoundingClientRect()).x < l.x + l.width &&
                      f.x + f.width > l.x &&
                      f.y < l.y + l.height &&
                      f.y + f.height > l.y
                    ) {
                      t = !0;
                      break;
                    }
                    e = e.parentElement;
                  }
                  if (t) return;
                }
                q.push(e);
              }
            });
        }
        function en() {
          let e = !1,
            t = !1;
          q.forEach(n => {
            let { direction: r } = n;
            'horizontal' === r ? (e = !0) : (t = !0);
          });
          let n = 0;
          Y.forEach(e => {
            n |= e;
          }),
            e && t
              ? D('intersection', n)
              : e
                ? D('horizontal', n)
                : t
                  ? D('vertical', n)
                  : null !== T && (document.head.removeChild(T), (A = null), (T = null));
        }
        function er() {
          X.forEach((e, t) => {
            let { body: n } = t;
            n.removeEventListener('contextmenu', ee),
              n.removeEventListener('pointerdown', J),
              n.removeEventListener('pointerleave', Q),
              n.removeEventListener('pointermove', Q);
          }),
            window.removeEventListener('pointerup', ee),
            window.removeEventListener('pointercancel', ee),
            Z.size > 0 &&
              (G
                ? (q.length > 0 &&
                    X.forEach((e, t) => {
                      let { body: n } = t;
                      e > 0 &&
                        (n.addEventListener('contextmenu', ee),
                        n.addEventListener('pointerleave', Q),
                        n.addEventListener('pointermove', Q));
                    }),
                  window.addEventListener('pointerup', ee),
                  window.addEventListener('pointercancel', ee))
                : X.forEach((e, t) => {
                    let { body: n } = t;
                    e > 0 &&
                      (n.addEventListener('pointerdown', J, { capture: !0 }),
                      n.addEventListener('pointermove', Q));
                  }));
        }
        function eo(e, t) {
          Z.forEach(n => {
            let { setResizeHandlerState: r } = n;
            r(e, q.includes(n), t);
          });
        }
        function ei(e, t) {
          if (!e) throw (console.error(t), Error(t));
        }
        function el(e, t, n = 10) {
          return e.toFixed(n) === t.toFixed(n) ? 0 : e > t ? 1 : -1;
        }
        function ea(e, t, n = 10) {
          return 0 === el(e, t, n);
        }
        function es(e, t, n) {
          return 0 === el(e, t, n);
        }
        function eu({ panelConstraints: e, panelIndex: t, size: n }) {
          let r = e[t];
          ei(null != r, `Panel constraints not found for index ${t}`);
          let { collapsedSize: o = 0, collapsible: i, maxSize: l = 100, minSize: a = 0 } = r;
          return (
            0 > el(n, a) && (n = i && 0 > el(n, (o + a) / 2) ? o : a),
            (n = parseFloat((n = Math.min(l, n)).toFixed(10)))
          );
        }
        function ec({
          delta: e,
          initialLayout: t,
          panelConstraints: n,
          pivotIndices: r,
          prevLayout: o,
          trigger: i,
        }) {
          if (es(e, 0)) return t;
          let l = [...t],
            [a, s] = r;
          ei(null != a, 'Invalid first pivot index'), ei(null != s, 'Invalid second pivot index');
          let u = 0;
          if ('keyboard' === i) {
            {
              let r = e < 0 ? s : a,
                o = n[r];
              ei(o, `Panel constraints not found for index ${r}`);
              let { collapsedSize: i = 0, collapsible: l, minSize: u = 0 } = o;
              if (l) {
                let n = t[r];
                if ((ei(null != n, `Previous layout not found for panel index ${r}`), es(n, i))) {
                  let t = u - n;
                  el(t, Math.abs(e)) > 0 && (e = e < 0 ? 0 - t : t);
                }
              }
            }
            {
              let r = e < 0 ? a : s,
                o = n[r];
              ei(o, `No panel constraints found for index ${r}`);
              let { collapsedSize: i = 0, collapsible: l, minSize: u = 0 } = o;
              if (l) {
                let n = t[r];
                if ((ei(null != n, `Previous layout not found for panel index ${r}`), es(n, u))) {
                  let t = n - i;
                  el(t, Math.abs(e)) > 0 && (e = e < 0 ? 0 - t : t);
                }
              }
            }
          }
          {
            let r = e < 0 ? 1 : -1,
              o = e < 0 ? s : a,
              i = 0;
            for (;;) {
              let e = t[o];
              if (
                (ei(null != e, `Previous layout not found for panel index ${o}`),
                (i += eu({ panelConstraints: n, panelIndex: o, size: 100 }) - e),
                (o += r) < 0 || o >= n.length)
              )
                break;
            }
            let l = Math.min(Math.abs(e), Math.abs(i));
            e = e < 0 ? 0 - l : l;
          }
          {
            let r = e < 0 ? a : s;
            for (; r >= 0 && r < n.length; ) {
              let o = Math.abs(e) - Math.abs(u),
                i = t[r];
              ei(null != i, `Previous layout not found for panel index ${r}`);
              let a = eu({ panelConstraints: n, panelIndex: r, size: i - o });
              if (
                !es(i, a) &&
                ((u += i - a),
                (l[r] = a),
                u
                  .toPrecision(3)
                  .localeCompare(Math.abs(e).toPrecision(3), void 0, { numeric: !0 }) >= 0)
              )
                break;
              e < 0 ? r-- : r++;
            }
          }
          if (
            (function (e, t, n) {
              if (e.length !== t.length) return !1;
              for (let n = 0; n < e.length; n++) if (!es(e[n], t[n], void 0)) return !1;
              return !0;
            })(o, l)
          )
            return o;
          {
            let r = e < 0 ? s : a,
              o = t[r];
            ei(null != o, `Previous layout not found for panel index ${r}`);
            let i = o + u,
              c = eu({ panelConstraints: n, panelIndex: r, size: i });
            if (((l[r] = c), !es(c, i))) {
              let t = i - c,
                r = e < 0 ? s : a;
              for (; r >= 0 && r < n.length; ) {
                let o = l[r];
                ei(null != o, `Previous layout not found for panel index ${r}`);
                let i = eu({ panelConstraints: n, panelIndex: r, size: o + t });
                if ((es(o, i) || ((t -= i - o), (l[r] = i)), es(t, 0))) break;
                e > 0 ? r-- : r++;
              }
            }
          }
          return es(
            l.reduce((e, t) => t + e, 0),
            100
          )
            ? l
            : o;
        }
        function ed(e, t = document) {
          return Array.from(
            t.querySelectorAll(`[data-panel-resize-handle-id][data-panel-group-id="${e}"]`)
          );
        }
        function ef(e, t, n = document) {
          let r = ed(e, n).findIndex(e => e.getAttribute('data-panel-resize-handle-id') === t);
          return null != r ? r : null;
        }
        function ep(e, t, n) {
          let r = ef(e, t, n);
          return null != r ? [r, r + 1] : [-1, -1];
        }
        function em(e, t = document) {
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
        function eh(e, t = document) {
          return t.querySelector(`[data-panel-resize-handle-id="${e}"]`) || null;
        }
        function eg(e, t) {
          let { x: n, y: r } = I(t);
          return 'horizontal' === e ? n : r;
        }
        function ev(e, t, n) {
          t.forEach((t, r) => {
            let o = e[r];
            ei(o, `Panel data not found for index ${r}`);
            let { callbacks: i, constraints: l, id: a } = o,
              { collapsedSize: s = 0, collapsible: u } = l,
              c = n[a];
            if (null == c || t !== c) {
              n[a] = t;
              let { onCollapse: e, onExpand: r, onResize: o } = i;
              o && o(t, c),
                u &&
                  (e || r) &&
                  (r && (null == c || ea(c, s)) && !ea(t, s) && r(),
                  e && (null == c || !ea(c, s)) && ea(t, s) && e());
            }
          });
        }
        function ex(e, t) {
          if (e.length !== t.length) return !1;
          for (let n = 0; n < e.length; n++) if (e[n] != t[n]) return !1;
          return !0;
        }
        function ey(e) {
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
        function eb(e) {
          return `react-resizable-panels:${e}`;
        }
        function ew(e, t, n, r, o) {
          var i;
          let l = eb(e),
            a = t
              .map(e => {
                let { constraints: t, id: n, idIsFromProps: r, order: o } = e;
                return r ? n : o ? `${o}:${JSON.stringify(t)}` : JSON.stringify(t);
              })
              .sort((e, t) => e.localeCompare(t))
              .join(','),
            s =
              null !==
                (i = (function (e, t) {
                  try {
                    let n = eb(e),
                      r = t.getItem(n);
                    if (r) {
                      let e = JSON.parse(r);
                      if ('object' == typeof e && null != e) return e;
                    }
                  } catch (e) {}
                  return null;
                })(e, o)) && void 0 !== i
                ? i
                : {};
          s[a] = { expandToSizes: Object.fromEntries(n.entries()), layout: r };
          try {
            o.setItem(l, JSON.stringify(s));
          } catch (e) {
            console.error(e);
          }
        }
        let ej = {
            getItem: e => (ey(ej), ej.getItem(e)),
            setItem: (e, t) => {
              ey(ej), ej.setItem(e, t);
            },
          },
          eE = {};
        function eC({
          autoSaveId: e = null,
          children: t,
          className: n = '',
          direction: r,
          forwardedRef: o,
          id: i = null,
          onLayout: l = null,
          keyboardResizeBy: a = null,
          storage: s = ej,
          style: u,
          tagName: c = 'div',
          ...f
        }) {
          let p = S(i),
            m = w(null),
            [g, y] = j(null),
            [E, k] = j([]),
            N = (function () {
              let [e, t] = j(0);
              return h(() => t(e => e + 1), []);
            })(),
            P = w({}),
            R = w(new Map()),
            A = w(0),
            T = w({
              autoSaveId: e,
              direction: r,
              dragState: g,
              id: p,
              keyboardResizeBy: a,
              onLayout: l,
              storage: s,
            }),
            D = w({ layout: E, panelDataArray: [], panelDataArrayChanged: !1 });
          w({ didLogIdAndOrderWarning: !1, didLogPanelConstraintsWarning: !1, prevPanelIds: [] }),
            x(
              o,
              () => ({
                getId: () => T.current.id,
                getLayout: () => {
                  let { layout: e } = D.current;
                  return e;
                },
                setLayout: e => {
                  let { onLayout: t } = T.current,
                    { layout: n, panelDataArray: r } = D.current,
                    o = (function ({ layout: e, panelConstraints: t }) {
                      let n = [...e],
                        r = n.reduce((e, t) => e + t, 0);
                      if (n.length !== t.length)
                        throw Error(
                          `Invalid ${t.length} panel layout: ${n.map(e => `${e}%`).join(', ')}`
                        );
                      if (!es(r, 100) && n.length > 0)
                        for (let e = 0; e < t.length; e++) {
                          let t = n[e];
                          ei(null != t, `No layout data found for index ${e}`);
                          let o = (100 / r) * t;
                          n[e] = o;
                        }
                      let o = 0;
                      for (let e = 0; e < t.length; e++) {
                        let r = n[e];
                        ei(null != r, `No layout data found for index ${e}`);
                        let i = eu({ panelConstraints: t, panelIndex: e, size: r });
                        r != i && ((o += r - i), (n[e] = i));
                      }
                      if (!es(o, 0))
                        for (let e = 0; e < t.length; e++) {
                          let r = n[e];
                          ei(null != r, `No layout data found for index ${e}`);
                          let i = eu({ panelConstraints: t, panelIndex: e, size: r + o });
                          if (r !== i && ((o -= i - r), (n[e] = i), es(o, 0))) break;
                        }
                      return n;
                    })({ layout: e, panelConstraints: r.map(e => e.constraints) });
                  !(function (e, t) {
                    if (e.length !== t.length) return !1;
                    for (let n = 0; n < e.length; n++) if (e[n] !== t[n]) return !1;
                    return !0;
                  })(n, o) && (k(o), (D.current.layout = o), t && t(o), ev(r, o, P.current));
                },
              }),
              []
            ),
            (function ({
              committedValuesRef: e,
              eagerValuesRef: t,
              groupId: n,
              layout: r,
              panelDataArray: o,
              panelGroupElement: i,
              setLayout: l,
            }) {
              w({ didWarnAboutMissingResizeHandle: !1 }),
                v(() => {
                  if (!i) return;
                  let e = t.current;
                  ei(e, 'Eager values not found');
                  let { panelDataArray: o } = e;
                  ei(null != em(n, i), `No group found for id "${n}"`);
                  let a = ed(n, i);
                  ei(a, `No resize handles found for group id "${n}"`);
                  let s = a.map(e => {
                    let t = e.getAttribute('data-panel-resize-handle-id');
                    ei(t, 'Resize handle element has no handle id attribute');
                    let [a, s] = (function (e, t, n, r = document) {
                      var o, i, l, a;
                      let s = eh(t, r),
                        u = ed(e, r),
                        c = s ? u.indexOf(s) : -1;
                      return [
                        null !== (o = null === (i = n[c]) || void 0 === i ? void 0 : i.id) &&
                        void 0 !== o
                          ? o
                          : null,
                        null !== (l = null === (a = n[c + 1]) || void 0 === a ? void 0 : a.id) &&
                        void 0 !== l
                          ? l
                          : null,
                      ];
                    })(n, t, o, i);
                    if (null == a || null == s) return () => {};
                    let u = e => {
                      if (!e.defaultPrevented && 'Enter' === e.key) {
                        e.preventDefault();
                        let s = o.findIndex(e => e.id === a);
                        if (s >= 0) {
                          let e = o[s];
                          ei(e, `No panel data found for index ${s}`);
                          let a = r[s],
                            {
                              collapsedSize: u = 0,
                              collapsible: c,
                              minSize: d = 0,
                            } = e.constraints;
                          if (null != a && c) {
                            let e = ec({
                              delta: es(a, u) ? d - u : u - a,
                              initialLayout: r,
                              panelConstraints: o.map(e => e.constraints),
                              pivotIndices: ep(n, t, i),
                              prevLayout: r,
                              trigger: 'keyboard',
                            });
                            r !== e && l(e);
                          }
                        }
                      }
                    };
                    return (
                      e.addEventListener('keydown', u),
                      () => {
                        e.removeEventListener('keydown', u);
                      }
                    );
                  });
                  return () => {
                    s.forEach(e => e());
                  };
                }, [i, e, t, n, r, o, l]);
            })({
              committedValuesRef: T,
              eagerValuesRef: D,
              groupId: p,
              layout: E,
              panelDataArray: D.current.panelDataArray,
              setLayout: k,
              panelGroupElement: m.current,
            }),
            v(() => {
              let { panelDataArray: t } = D.current;
              if (e) {
                if (0 === E.length || E.length !== t.length) return;
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
                  n(e, [...t], new Map(R.current), E, s);
              }
            }, [e, E, s]),
            v(() => {});
          let I = h(e => {
              let { onLayout: t } = T.current,
                { layout: n, panelDataArray: r } = D.current;
              if (e.constraints.collapsible) {
                let o = r.map(e => e.constraints),
                  { collapsedSize: i = 0, panelSize: l, pivotIndices: a } = eS(r, e, n);
                if ((ei(null != l, `Panel size not found for panel "${e.id}"`), !ea(l, i))) {
                  R.current.set(e.id, l);
                  let s = ec({
                    delta: eN(r, e) === r.length - 1 ? l - i : i - l,
                    initialLayout: n,
                    panelConstraints: o,
                    pivotIndices: a,
                    prevLayout: n,
                    trigger: 'imperative-api',
                  });
                  ex(n, s) || (k(s), (D.current.layout = s), t && t(s), ev(r, s, P.current));
                }
              }
            }, []),
            z = h((e, t) => {
              let { onLayout: n } = T.current,
                { layout: r, panelDataArray: o } = D.current;
              if (e.constraints.collapsible) {
                let i = o.map(e => e.constraints),
                  {
                    collapsedSize: l = 0,
                    panelSize: a = 0,
                    minSize: s = 0,
                    pivotIndices: u,
                  } = eS(o, e, r),
                  c = null != t ? t : s;
                if (ea(a, l)) {
                  let t = R.current.get(e.id),
                    l = null != t && t >= c ? t : c,
                    s = ec({
                      delta: eN(o, e) === o.length - 1 ? a - l : l - a,
                      initialLayout: r,
                      panelConstraints: i,
                      pivotIndices: u,
                      prevLayout: r,
                      trigger: 'imperative-api',
                    });
                  ex(r, s) || (k(s), (D.current.layout = s), n && n(s), ev(o, s, P.current));
                }
              }
            }, []),
            _ = h(e => {
              let { layout: t, panelDataArray: n } = D.current,
                { panelSize: r } = eS(n, e, t);
              return ei(null != r, `Panel size not found for panel "${e.id}"`), r;
            }, []),
            F = h(
              (e, t) => {
                let { panelDataArray: n } = D.current,
                  r = eN(n, e);
                return (function ({
                  defaultSize: e,
                  dragState: t,
                  layout: n,
                  panelData: r,
                  panelIndex: o,
                  precision: i = 3,
                }) {
                  let l = n[o];
                  return {
                    flexBasis: 0,
                    flexGrow:
                      null == l
                        ? void 0 != e
                          ? e.toPrecision(i)
                          : '1'
                        : 1 === r.length
                          ? '1'
                          : l.toPrecision(i),
                    flexShrink: 1,
                    overflow: 'hidden',
                    pointerEvents: null !== t ? 'none' : void 0,
                  };
                })({ defaultSize: t, dragState: g, layout: E, panelData: n, panelIndex: r });
              },
              [g, E]
            ),
            $ = h(e => {
              let { layout: t, panelDataArray: n } = D.current,
                { collapsedSize: r = 0, collapsible: o, panelSize: i } = eS(n, e, t);
              return (
                ei(null != i, `Panel size not found for panel "${e.id}"`), !0 === o && ea(i, r)
              );
            }, []),
            W = h(e => {
              let { layout: t, panelDataArray: n } = D.current,
                { collapsedSize: r = 0, collapsible: o, panelSize: i } = eS(n, e, t);
              return ei(null != i, `Panel size not found for panel "${e.id}"`), !o || el(i, r) > 0;
            }, []),
            U = h(
              e => {
                let { panelDataArray: t } = D.current;
                t.push(e),
                  t.sort((e, t) => {
                    let n = e.order,
                      r = t.order;
                    return null == n && null == r ? 0 : null == n ? -1 : null == r ? 1 : n - r;
                  }),
                  (D.current.panelDataArrayChanged = !0),
                  N();
              },
              [N]
            ),
            q = h(e => {
              let t = !1,
                n = m.current;
              return (
                n &&
                  'rtl' === window.getComputedStyle(n, null).getPropertyValue('direction') &&
                  (t = !0),
                function (n) {
                  n.preventDefault();
                  let r = m.current;
                  if (!r) return () => null;
                  let {
                      direction: o,
                      dragState: i,
                      id: l,
                      keyboardResizeBy: a,
                      onLayout: s,
                    } = T.current,
                    { layout: u, panelDataArray: c } = D.current,
                    { initialLayout: d } = null != i ? i : {},
                    f = ep(l, e, r),
                    p = (function (e, t, n, r, o, i) {
                      if (L(e)) {
                        let t = 'horizontal' === n,
                          r = 0;
                        r = e.shiftKey ? 100 : null != o ? o : 10;
                        let i = 0;
                        switch (e.key) {
                          case 'ArrowDown':
                            i = t ? 0 : r;
                            break;
                          case 'ArrowLeft':
                            i = t ? -r : 0;
                            break;
                          case 'ArrowRight':
                            i = t ? r : 0;
                            break;
                          case 'ArrowUp':
                            i = t ? 0 : -r;
                            break;
                          case 'End':
                            i = 100;
                            break;
                          case 'Home':
                            i = -100;
                        }
                        return i;
                      }
                      return null == r
                        ? 0
                        : (function (e, t, n, r, o) {
                            let i = 'horizontal' === n,
                              l = eh(t, o);
                            ei(l, `No resize handle element found for id "${t}"`);
                            let a = l.getAttribute('data-panel-group-id');
                            ei(a, 'Resize handle element has no group id attribute');
                            let { initialCursorPosition: s } = r,
                              u = eg(n, e),
                              c = em(a, o);
                            ei(c, `No group element found for id "${a}"`);
                            let d = c.getBoundingClientRect();
                            return ((u - s) / (i ? d.width : d.height)) * 100;
                          })(e, t, n, r, i);
                    })(n, e, o, i, a, r),
                    h = 'horizontal' === o;
                  h && t && (p = -p);
                  let g = ec({
                      delta: p,
                      initialLayout: null != d ? d : u,
                      panelConstraints: c.map(e => e.constraints),
                      pivotIndices: f,
                      prevLayout: u,
                      trigger: L(n) ? 'keyboard' : 'mouse-or-touch',
                    }),
                    v = !ex(u, g);
                  if ((M(n) || O(n)) && A.current != p) {
                    var x, y;
                    ((A.current = p), v || 0 === p)
                      ? Y.set(e, 0)
                      : h
                        ? ((x = p < 0 ? H : B), Y.set(e, x))
                        : ((y = p < 0 ? K : V), Y.set(e, y));
                  }
                  v && (k(g), (D.current.layout = g), s && s(g), ev(c, g, P.current));
                }
              );
            }, []),
            G = h((e, t) => {
              let { onLayout: n } = T.current,
                { layout: r, panelDataArray: o } = D.current,
                i = o.map(e => e.constraints),
                { panelSize: l, pivotIndices: a } = eS(o, e, r);
              ei(null != l, `Panel size not found for panel "${e.id}"`);
              let s = ec({
                delta: eN(o, e) === o.length - 1 ? l - t : t - l,
                initialLayout: r,
                panelConstraints: i,
                pivotIndices: a,
                prevLayout: r,
                trigger: 'imperative-api',
              });
              ex(r, s) || (k(s), (D.current.layout = s), n && n(s), ev(o, s, P.current));
            }, []),
            X = h(
              (e, t) => {
                let { layout: n, panelDataArray: r } = D.current,
                  { collapsedSize: o = 0, collapsible: i } = t,
                  {
                    collapsedSize: l = 0,
                    collapsible: a,
                    maxSize: s = 100,
                    minSize: u = 0,
                  } = e.constraints,
                  { panelSize: c } = eS(r, e, n);
                null != c &&
                  (i && a && ea(c, o) ? ea(o, l) || G(e, l) : c < u ? G(e, u) : c > s && G(e, s));
              },
              [G]
            ),
            Z = h((e, t) => {
              let { direction: n } = T.current,
                { layout: r } = D.current;
              if (!m.current) return;
              let o = eh(e, m.current);
              ei(o, `Drag handle element not found for id "${e}"`);
              let i = eg(n, t);
              y({
                dragHandleId: e,
                dragHandleRect: o.getBoundingClientRect(),
                initialCursorPosition: i,
                initialLayout: r,
              });
            }, []),
            J = h(() => {
              y(null);
            }, []),
            Q = h(
              e => {
                let { panelDataArray: t } = D.current,
                  n = eN(t, e);
                n >= 0 &&
                  (t.splice(n, 1),
                  delete P.current[e.id],
                  (D.current.panelDataArrayChanged = !0),
                  N());
              },
              [N]
            ),
            ee = b(
              () => ({
                collapsePanel: I,
                direction: r,
                dragState: g,
                expandPanel: z,
                getPanelSize: _,
                getPanelStyle: F,
                groupId: p,
                isPanelCollapsed: $,
                isPanelExpanded: W,
                reevaluatePanelConstraints: X,
                registerPanel: U,
                registerResizeHandle: q,
                resizePanel: G,
                startDragging: Z,
                stopDragging: J,
                unregisterPanel: Q,
                panelGroupElement: m.current,
              }),
              [I, g, r, z, _, F, p, $, W, X, U, q, G, Z, J, Q]
            );
          return d(
            C.Provider,
            { value: ee },
            d(c, {
              ...f,
              children: t,
              className: n,
              id: i,
              ref: m,
              style: {
                display: 'flex',
                flexDirection: 'horizontal' === r ? 'row' : 'column',
                height: '100%',
                overflow: 'hidden',
                width: '100%',
                ...u,
              },
              'data-panel-group': '',
              'data-panel-group-direction': r,
              'data-panel-group-id': p,
            })
          );
        }
        let ek = m((e, t) => d(eC, { ...e, forwardedRef: t }));
        function eN(e, t) {
          return e.findIndex(e => e === t || e.id === t.id);
        }
        function eS(e, t, n) {
          let r = eN(e, t),
            o = r === e.length - 1,
            i = n[r];
          return { ...t.constraints, panelSize: i, pivotIndices: o ? [r - 1, r] : [r, r + 1] };
        }
        function eP({
          children: e = null,
          className: t = '',
          disabled: n = !1,
          hitAreaMargins: r,
          id: o,
          onBlur: i,
          onDragging: l,
          onFocus: a,
          style: s = {},
          tabIndex: u = 0,
          tagName: c = 'div',
          ...f
        }) {
          var p, m;
          let h = w(null),
            x = w({ onDragging: l });
          v(() => {
            x.current.onDragging = l;
          });
          let y = g(C);
          if (null === y)
            throw Error(
              'PanelResizeHandle components must be rendered within a PanelGroup container'
            );
          let {
              direction: b,
              groupId: E,
              registerResizeHandle: k,
              startDragging: N,
              stopDragging: P,
              panelGroupElement: R,
            } = y,
            A = S(o),
            [T, D] = j('inactive'),
            [L, M] = j(!1),
            [O, I] = j(null),
            z = w({ state: T });
          v(() => {
            if (n) I(null);
            else {
              let e = k(A);
              I(() => e);
            }
          }, [n, A, k]);
          let _ = null !== (p = null == r ? void 0 : r.coarse) && void 0 !== p ? p : 15,
            F = null !== (m = null == r ? void 0 : r.fine) && void 0 !== m ? m : 5;
          return (
            v(() => {
              if (n || null == O) return;
              let e = h.current;
              return (
                ei(e, 'Element ref not attached'),
                (function (e, t, n, r, o) {
                  var i;
                  let { ownerDocument: l } = t,
                    a = { direction: n, element: t, hitAreaMargins: r, setResizeHandlerState: o },
                    s = null !== (i = X.get(l)) && void 0 !== i ? i : 0;
                  return (
                    X.set(l, s + 1),
                    Z.add(a),
                    er(),
                    function () {
                      var t;
                      Y.delete(e), Z.delete(a);
                      let n = null !== (t = X.get(l)) && void 0 !== t ? t : 1;
                      if ((X.set(l, n - 1), er(), 1 === n && X.delete(l), q.includes(a))) {
                        let e = q.indexOf(a);
                        e >= 0 && q.splice(e, 1), en(), o('up', !0, null);
                      }
                    }
                  );
                })(A, e, b, { coarse: _, fine: F }, (e, t, n) => {
                  if (t)
                    switch (e) {
                      case 'down': {
                        D('drag'), ei(n, 'Expected event to be defined for "down" action'), N(A, n);
                        let { onDragging: e } = x.current;
                        e && e(!0);
                        break;
                      }
                      case 'move': {
                        let { state: e } = z.current;
                        'drag' !== e && D('hover'),
                          ei(n, 'Expected event to be defined for "move" action'),
                          O(n);
                        break;
                      }
                      case 'up': {
                        D('hover'), P();
                        let { onDragging: e } = x.current;
                        e && e(!1);
                      }
                    }
                  else D('inactive');
                })
              );
            }, [_, b, n, F, k, A, O, N, P]),
            (function ({ disabled: e, handleId: t, resizeHandler: n, panelGroupElement: r }) {
              v(() => {
                if (e || null == n || null == r) return;
                let o = eh(t, r);
                if (null == o) return;
                let i = e => {
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
                        ei(n, `No group element found for id "${n}"`);
                        let i = ed(n, r),
                          l = ef(n, t, r);
                        ei(null !== l, `No resize element found for id "${t}"`);
                        let a = e.shiftKey
                          ? l > 0
                            ? l - 1
                            : i.length - 1
                          : l + 1 < i.length
                            ? l + 1
                            : 0;
                        i[a].focus();
                      }
                    }
                };
                return (
                  o.addEventListener('keydown', i),
                  () => {
                    o.removeEventListener('keydown', i);
                  }
                );
              }, [r, e, t, n]);
            })({ disabled: n, handleId: A, resizeHandler: O, panelGroupElement: R }),
            d(c, {
              ...f,
              children: e,
              className: t,
              id: o,
              onBlur: () => {
                M(!1), null == i || i();
              },
              onFocus: () => {
                M(!0), null == a || a();
              },
              ref: h,
              role: 'separator',
              style: { touchAction: 'none', userSelect: 'none', ...s },
              tabIndex: u,
              'data-panel-group-direction': b,
              'data-panel-group-id': E,
              'data-resize-handle': '',
              'data-resize-handle-active': 'drag' === T ? 'pointer' : L ? 'keyboard' : void 0,
              'data-resize-handle-state': T,
              'data-panel-resize-handle-enabled': !n,
              'data-panel-resize-handle-id': A,
            })
          );
        }
        (eC.displayName = 'PanelGroup'),
          (ek.displayName = 'forwardRef(PanelGroup)'),
          (eP.displayName = 'PanelResizeHandle');
        var eR = n(4733),
          eA = n.n(eR),
          eT = n(4773);
        let eD = u.forwardRef(({ className: e, ...t }, n) =>
          (0, a.jsx)('textarea', {
            className: (0, eT.cn)(
              'flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
              e
            ),
            ref: n,
            ...t,
          })
        );
        eD.displayName = 'Textarea';
        let eL = (0, u.createContext)();
        function eM({ children: e }) {
          let [t, n] = (0, u.useState)(''),
            [r, o] = (0, u.useState)(''),
            [i, l] = (0, u.useState)(''),
            [s, c] = (0, u.useState)(!1),
            [d, f] = (0, u.useState)('javascript'),
            [p, m] = (0, u.useState)({}),
            [h, g] = (0, u.useState)(!1);
          (0, u.useCallback)(
            async e => {
              if (p[e]) {
                n(p[e].safeConfig.defaultBoilerplate);
                return;
              }
              g(!0);
              try {
                let t = await fetch(`/api/languages/${e}`);
                if (!t.ok) throw Error(`Failed to fetch ${e} configuration`);
                let r = await t.json();
                if (!r.success) throw Error(`API error for ${e} configuration`);
                m(t => ({ ...t, [e]: r })), n(r.safeConfig.defaultBoilerplate);
              } catch (t) {
                console.error('Error fetching language config:', t),
                  l(`Error loading ${e} configuration: ${t.message}`);
              } finally {
                g(!1);
              }
            },
            [d]
          );
          let v = (0, u.useCallback)(async () => {
              c(!0);
              try {
                let e = await fetch('/api/execute', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ language: d, code: t, input: r }),
                  }),
                  n = await e.json();
                if (!n.success) throw Error(n.error || 'Execution failed');
                l(n.output);
              } catch (e) {
                l(`Error: ${e.message}`);
              } finally {
                c(!1);
              }
            }, [d, t, r]),
            x = (0, u.useCallback)(() => {
              p[d] && n(p[d].safeConfig.defaultBoilerplate), o(''), l('');
            }, [d, p]);
          return (0, a.jsx)(eL.Provider, {
            value: {
              code: t,
              setCode: n,
              input: r,
              setInput: o,
              output: i,
              setOutput: l,
              language: d,
              setLanguage: f,
              isRunning: s,
              isLoadingConfig: h,
              handleRun: v,
              handleReset: x,
            },
            children: e,
          });
        }
        let eO = () => {
          let e = (0, u.useContext)(eL);
          if (!e) throw Error('useEditor must be used within an EditorProvider');
          return e;
        };
        function eI() {
          let { input: e, setInput: t } = eO();
          return (0, a.jsxs)('div', {
            className: 'flex flex-col h-full',
            children: [
              (0, a.jsx)('h2', { className: 'text-lg font-semibold mb-4', children: 'Input' }),
              (0, a.jsx)(eD, {
                placeholder: 'Enter input here...',
                className: 'flex-1 resize-none',
                value: e,
                onChange: e => t(e.target.value),
              }),
            ],
          });
        }
        var ez = n(8113),
          e_ = n(8147);
        let eF = (0, e_.Z)('Check', [['path', { d: 'M20 6 9 17l-5-5', key: '1gmf2c' }]]),
          e$ = (0, e_.Z)('ClipboardCopy', [
            ['rect', { width: '8', height: '4', x: '8', y: '2', rx: '1', ry: '1', key: 'tgr4d6' }],
            [
              'path',
              { d: 'M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2', key: '4jdomd' },
            ],
            ['path', { d: 'M16 4h2a2 2 0 0 1 2 2v4', key: '3hqy98' }],
            ['path', { d: 'M21 14H11', key: '1bme5i' }],
            ['path', { d: 'm15 10-4 4 4 4', key: '5dvupr' }],
          ]);
        function eW() {
          let { output: e } = eO(),
            [t, n] = (0, u.useState)(!1),
            r = async () => {
              try {
                await navigator.clipboard.writeText(e), n(!0), setTimeout(() => n(!1), 2e3);
              } catch (e) {
                console.error('Failed to copy text: ', e);
              }
            };
          return (0, a.jsxs)('div', {
            className: 'flex flex-col h-full',
            children: [
              (0, a.jsxs)('div', {
                className: 'flex justify-between items-center mb-4',
                children: [
                  (0, a.jsx)('h2', { className: 'text-lg font-semibold', children: 'Output' }),
                  (0, a.jsx)(ez.z, {
                    variant: 'outline',
                    size: 'sm',
                    onClick: r,
                    disabled: !e,
                    className: `transition-all duration-300 ease-in-out ${t ? 'bg-green-500 text-white' : ''} hover:bg-opacity-90 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-700 disabled:opacity-50 disabled:cursor-not-allowed`,
                    children: t
                      ? (0, a.jsxs)(a.Fragment, {
                          children: [(0, a.jsx)(eF, { className: 'h-4 w-4 mr-2' }), 'Copied'],
                        })
                      : (0, a.jsxs)(a.Fragment, {
                          children: [(0, a.jsx)(e$, { className: 'h-4 w-4 mr-2' }), 'Copy'],
                        }),
                  }),
                ],
              }),
              (0, a.jsx)('div', {
                className:
                  'flex-1 p-4 rounded-md bg-gray-200 dark:bg-gray-700 whitespace-pre-wrap overflow-auto transition-all duration-300 ease-in-out',
                children: (0, a.jsx)('pre', {
                  className:
                    'selection:bg-blue-200 dark:selection:bg-blue-700 selection:text-gray-800 dark:selection:text-gray-200',
                  children: e,
                }),
              }),
            ],
          });
        }
        let eH = () =>
            (0, a.jsx)('div', {
              className: 'fixed inset-0 z-50 flex items-center justify-center bg-background',
              children: (0, a.jsx)('div', {
                className:
                  'animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-primary',
                children: ' ',
              }),
            }),
          eB = eA()(async () => {}, {
            loadableGenerated: {
              modules: [
                'components/ResizableLayout/ResizableLayout.js -> @/components/Editor/Editor',
              ],
            },
            ssr: !1,
          });
        function eK() {
          let [e, t] = (0, u.useState)(50),
            [n, r] = (0, u.useState)(50),
            [o, i] = (0, u.useState)(!0),
            l = (0, u.useCallback)(e => {
              t(e[0]);
            }, []),
            s = (0, u.useCallback)(e => {
              r(e[0]);
            }, []);
          return (0, a.jsxs)(a.Fragment, {
            children: [
              (0, a.jsx)('div', {
                className: 'hidden md:block h-full rounded-2xl p-1',
                children: (0, a.jsxs)(ek, {
                  direction: 'horizontal',
                  onLayout: l,
                  children: [
                    (0, a.jsx)(R, {
                      defaultSize: e,
                      minSize: 20,
                      className: 'rounded-2xl',
                      children: (0, a.jsx)('div', {
                        className: 'h-full p-4 bg-background text-foreground overflow-auto',
                        children: o ? (0, a.jsx)(eH, {}) : (0, a.jsx)(eB, { onLoad: () => i(!1) }),
                      }),
                    }),
                    (0, a.jsx)(eP, {
                      className:
                        'w-2 dark:bg-muted dark:hover:bg-gray-600 bg-gray-200 hover:bg-gray-300 transition-colors flex items-center justify-center rounded-xl group',
                      children: (0, a.jsx)('div', {
                        className:
                          'w-1 h-16 bg-gray-600 rounded-2xl group-hover:bg-blue-600 dark:group-hover:bg-green-500 transition-colors',
                      }),
                    }),
                    (0, a.jsx)(R, {
                      defaultSize: 100 - e,
                      minSize: 20,
                      children: (0, a.jsxs)(ek, {
                        direction: 'vertical',
                        onLayout: s,
                        children: [
                          (0, a.jsx)(R, {
                            defaultSize: n,
                            minSize: 20,
                            className: 'rounded-2xl',
                            children: (0, a.jsx)('div', {
                              className: 'h-full p-4 bg-background text-foreground overflow-auto',
                              children: (0, a.jsx)(eI, {}),
                            }),
                          }),
                          (0, a.jsx)(eP, {
                            className:
                              'h-2 dark:bg-muted dark:hover:bg-gray-600 bg-gray-200 hover:bg-gray-300 transition-colors flex align-middle rounded-xl items-center justify-center group',
                            children: (0, a.jsx)('div', {
                              className:
                                'w-16 h-1 bg-gray-600 rounded-2xl group-hover:bg-blue-600 dark:group-hover:bg-green-500 transition-colors',
                            }),
                          }),
                          (0, a.jsx)(R, {
                            defaultSize: 100 - n,
                            minSize: 20,
                            className: 'rounded-2xl',
                            children: (0, a.jsx)('div', {
                              className: 'h-full p-4 bg-background text-foreground overflow-auto',
                              children: (0, a.jsx)(eW, {}),
                            }),
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
              }),
              (0, a.jsx)('div', {
                className: 'md:hidden h-full',
                children: (0, a.jsxs)('div', {
                  className: 'flex flex-col gap-4 p-1',
                  children: [
                    (0, a.jsx)('div', {
                      className:
                        'h-[300px] bg-background text-foreground overflow-auto rounded-lg border p-2',
                      children: o ? (0, a.jsx)(eH, {}) : (0, a.jsx)(eB, { onLoad: () => i(!1) }),
                    }),
                    (0, a.jsx)('div', {
                      className:
                        'h-[200px] bg-background text-foreground overflow-auto rounded-lg border p-2',
                      children: (0, a.jsx)(eI, {}),
                    }),
                    (0, a.jsx)('div', {
                      className:
                        'h-[200px] bg-background text-foreground overflow-auto rounded-lg border p-2',
                      children: (0, a.jsx)(eW, {}),
                    }),
                  ],
                }),
              }),
            ],
          });
        }
        let eV = (0, e_.Z)('Play', [['polygon', { points: '6 3 20 12 6 21 6 3', key: '1oa8hb' }]]);
        function eU(e, t = []) {
          let n = [],
            r = () => {
              let t = n.map(e => u.createContext(e));
              return function (n) {
                let r = n?.[e] || t;
                return u.useMemo(() => ({ [`__scope${e}`]: { ...n, [e]: r } }), [n, r]);
              };
            };
          return (
            (r.scopeName = e),
            [
              function (t, r) {
                let o = u.createContext(r),
                  i = n.length;
                n = [...n, r];
                let l = t => {
                  let { scope: n, children: r, ...l } = t,
                    s = n?.[e]?.[i] || o,
                    c = u.useMemo(() => l, Object.values(l));
                  return (0, a.jsx)(s.Provider, { value: c, children: r });
                };
                return (
                  (l.displayName = t + 'Provider'),
                  [
                    l,
                    function (n, l) {
                      let a = l?.[e]?.[i] || o,
                        s = u.useContext(a);
                      if (s) return s;
                      if (void 0 !== r) return r;
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
                    let r = n.reduce((t, { useScope: n, scopeName: r }) => {
                      let o = n(e)[`__scope${r}`];
                      return { ...t, ...o };
                    }, {});
                    return u.useMemo(() => ({ [`__scope${t.scopeName}`]: r }), [r]);
                  };
                };
                return (n.scopeName = t.scopeName), n;
              })(r, ...t),
            ]
          );
        }
        var eq = n(9654);
        function eG(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
          return function (r) {
            if ((e?.(r), !1 === n || !r.defaultPrevented)) return t?.(r);
          };
        }
        var eX = globalThis?.document ? u.useLayoutEffect : () => {},
          eY = c['useId'.toString()] || (() => void 0),
          eZ = 0;
        function eJ(e) {
          let [t, n] = u.useState(eY());
          return (
            eX(() => {
              e || n(e => e ?? String(eZ++));
            }, [e]),
            e || (t ? `radix-${t}` : '')
          );
        }
        function eQ(e) {
          let t = u.useRef(e);
          return (
            u.useEffect(() => {
              t.current = e;
            }),
            u.useMemo(
              () =>
                (...e) =>
                  t.current?.(...e),
              []
            )
          );
        }
        function e0({ prop: e, defaultProp: t, onChange: n = () => {} }) {
          let [r, o] = (function ({ defaultProp: e, onChange: t }) {
              let n = u.useState(e),
                [r] = n,
                o = u.useRef(r),
                i = eQ(t);
              return (
                u.useEffect(() => {
                  o.current !== r && (i(r), (o.current = r));
                }, [r, o, i]),
                n
              );
            })({ defaultProp: t, onChange: n }),
            i = void 0 !== e,
            l = i ? e : r,
            a = eQ(n);
          return [
            l,
            u.useCallback(
              t => {
                if (i) {
                  let n = 'function' == typeof t ? t(e) : t;
                  n !== e && a(n);
                } else o(t);
              },
              [i, e, o, a]
            ),
          ];
        }
        var e1 = n(28),
          e2 = n(6245),
          e5 = [
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
            let n = u.forwardRef((e, n) => {
              let { asChild: r, ...o } = e,
                i = r ? e2.g7 : t;
              return (
                'undefined' != typeof window && (window[Symbol.for('radix-ui')] = !0),
                (0, a.jsx)(i, { ...o, ref: n })
              );
            });
            return (n.displayName = `Primitive.${t}`), { ...e, [t]: n };
          }, {}),
          e4 = 'dismissableLayer.update',
          e3 = u.createContext({
            layers: new Set(),
            layersWithOutsidePointerEventsDisabled: new Set(),
            branches: new Set(),
          }),
          e6 = u.forwardRef((e, t) => {
            let {
                disableOutsidePointerEvents: n = !1,
                onEscapeKeyDown: r,
                onPointerDownOutside: o,
                onFocusOutside: l,
                onInteractOutside: s,
                onDismiss: c,
                ...d
              } = e,
              f = u.useContext(e3),
              [p, m] = u.useState(null),
              h = p?.ownerDocument ?? globalThis?.document,
              [, g] = u.useState({}),
              v = (0, eq.e)(t, e => m(e)),
              x = Array.from(f.layers),
              [y] = [...f.layersWithOutsidePointerEventsDisabled].slice(-1),
              b = x.indexOf(y),
              w = p ? x.indexOf(p) : -1,
              j = f.layersWithOutsidePointerEventsDisabled.size > 0,
              E = w >= b,
              C = (function (e, t = globalThis?.document) {
                let n = eQ(e),
                  r = u.useRef(!1),
                  o = u.useRef(() => {});
                return (
                  u.useEffect(() => {
                    let e = e => {
                        if (e.target && !r.current) {
                          let r = function () {
                              e7('dismissableLayer.pointerDownOutside', n, i, { discrete: !0 });
                            },
                            i = { originalEvent: e };
                          'touch' === e.pointerType
                            ? (t.removeEventListener('click', o.current),
                              (o.current = r),
                              t.addEventListener('click', o.current, { once: !0 }))
                            : r();
                        } else t.removeEventListener('click', o.current);
                        r.current = !1;
                      },
                      i = window.setTimeout(() => {
                        t.addEventListener('pointerdown', e);
                      }, 0);
                    return () => {
                      window.clearTimeout(i),
                        t.removeEventListener('pointerdown', e),
                        t.removeEventListener('click', o.current);
                    };
                  }, [t, n]),
                  { onPointerDownCapture: () => (r.current = !0) }
                );
              })(e => {
                let t = e.target,
                  n = [...f.branches].some(e => e.contains(t));
                !E || n || (o?.(e), s?.(e), e.defaultPrevented || c?.());
              }, h),
              k = (function (e, t = globalThis?.document) {
                let n = eQ(e),
                  r = u.useRef(!1);
                return (
                  u.useEffect(() => {
                    let e = e => {
                      e.target &&
                        !r.current &&
                        e7(
                          'dismissableLayer.focusOutside',
                          n,
                          { originalEvent: e },
                          { discrete: !1 }
                        );
                    };
                    return (
                      t.addEventListener('focusin', e), () => t.removeEventListener('focusin', e)
                    );
                  }, [t, n]),
                  { onFocusCapture: () => (r.current = !0), onBlurCapture: () => (r.current = !1) }
                );
              })(e => {
                let t = e.target;
                [...f.branches].some(e => e.contains(t)) ||
                  (l?.(e), s?.(e), e.defaultPrevented || c?.());
              }, h);
            return (
              (function (e, t = globalThis?.document) {
                let n = eQ(e);
                u.useEffect(() => {
                  let e = e => {
                    'Escape' === e.key && n(e);
                  };
                  return (
                    t.addEventListener('keydown', e, { capture: !0 }),
                    () => t.removeEventListener('keydown', e, { capture: !0 })
                  );
                }, [n, t]);
              })(e => {
                w !== f.layers.size - 1 ||
                  (r?.(e), !e.defaultPrevented && c && (e.preventDefault(), c()));
              }, h),
              u.useEffect(() => {
                if (p)
                  return (
                    n &&
                      (0 === f.layersWithOutsidePointerEventsDisabled.size &&
                        ((i = h.body.style.pointerEvents), (h.body.style.pointerEvents = 'none')),
                      f.layersWithOutsidePointerEventsDisabled.add(p)),
                    f.layers.add(p),
                    e8(),
                    () => {
                      n &&
                        1 === f.layersWithOutsidePointerEventsDisabled.size &&
                        (h.body.style.pointerEvents = i);
                    }
                  );
              }, [p, h, n, f]),
              u.useEffect(
                () => () => {
                  p &&
                    (f.layers.delete(p), f.layersWithOutsidePointerEventsDisabled.delete(p), e8());
                },
                [p, f]
              ),
              u.useEffect(() => {
                let e = () => g({});
                return document.addEventListener(e4, e), () => document.removeEventListener(e4, e);
              }, []),
              (0, a.jsx)(e5.div, {
                ...d,
                ref: v,
                style: { pointerEvents: j ? (E ? 'auto' : 'none') : void 0, ...e.style },
                onFocusCapture: eG(e.onFocusCapture, k.onFocusCapture),
                onBlurCapture: eG(e.onBlurCapture, k.onBlurCapture),
                onPointerDownCapture: eG(e.onPointerDownCapture, C.onPointerDownCapture),
              })
            );
          });
        function e8() {
          let e = new CustomEvent(e4);
          document.dispatchEvent(e);
        }
        function e7(e, t, n, { discrete: r }) {
          let o = n.originalEvent.target,
            i = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
          (t && o.addEventListener(e, t, { once: !0 }), r)
            ? o && e1.flushSync(() => o.dispatchEvent(i))
            : o.dispatchEvent(i);
        }
        (e6.displayName = 'DismissableLayer'),
          (u.forwardRef((e, t) => {
            let n = u.useContext(e3),
              r = u.useRef(null),
              o = (0, eq.e)(t, r);
            return (
              u.useEffect(() => {
                let e = r.current;
                if (e)
                  return (
                    n.branches.add(e),
                    () => {
                      n.branches.delete(e);
                    }
                  );
              }, [n.branches]),
              (0, a.jsx)(e5.div, { ...e, ref: o })
            );
          }).displayName = 'DismissableLayerBranch');
        var e9 = 'focusScope.autoFocusOnMount',
          te = 'focusScope.autoFocusOnUnmount',
          tt = { bubbles: !1, cancelable: !0 },
          tn = u.forwardRef((e, t) => {
            let {
                loop: n = !1,
                trapped: r = !1,
                onMountAutoFocus: o,
                onUnmountAutoFocus: i,
                ...l
              } = e,
              [s, c] = u.useState(null),
              d = eQ(o),
              f = eQ(i),
              p = u.useRef(null),
              m = (0, eq.e)(t, e => c(e)),
              h = u.useRef({
                paused: !1,
                pause() {
                  this.paused = !0;
                },
                resume() {
                  this.paused = !1;
                },
              }).current;
            u.useEffect(() => {
              if (r) {
                let e = function (e) {
                    if (h.paused || !s) return;
                    let t = e.target;
                    s.contains(t) ? (p.current = t) : ti(p.current, { select: !0 });
                  },
                  t = function (e) {
                    if (h.paused || !s) return;
                    let t = e.relatedTarget;
                    null === t || s.contains(t) || ti(p.current, { select: !0 });
                  };
                document.addEventListener('focusin', e), document.addEventListener('focusout', t);
                let n = new MutationObserver(function (e) {
                  if (document.activeElement === document.body)
                    for (let t of e) t.removedNodes.length > 0 && ti(s);
                });
                return (
                  s && n.observe(s, { childList: !0, subtree: !0 }),
                  () => {
                    document.removeEventListener('focusin', e),
                      document.removeEventListener('focusout', t),
                      n.disconnect();
                  }
                );
              }
            }, [r, s, h.paused]),
              u.useEffect(() => {
                if (s) {
                  tl.add(h);
                  let e = document.activeElement;
                  if (!s.contains(e)) {
                    let t = new CustomEvent(e9, tt);
                    s.addEventListener(e9, d),
                      s.dispatchEvent(t),
                      t.defaultPrevented ||
                        ((function (e, { select: t = !1 } = {}) {
                          let n = document.activeElement;
                          for (let r of e)
                            if ((ti(r, { select: t }), document.activeElement !== n)) return;
                        })(
                          tr(s).filter(e => 'A' !== e.tagName),
                          { select: !0 }
                        ),
                        document.activeElement === e && ti(s));
                  }
                  return () => {
                    s.removeEventListener(e9, d),
                      setTimeout(() => {
                        let t = new CustomEvent(te, tt);
                        s.addEventListener(te, f),
                          s.dispatchEvent(t),
                          t.defaultPrevented || ti(e ?? document.body, { select: !0 }),
                          s.removeEventListener(te, f),
                          tl.remove(h);
                      }, 0);
                  };
                }
              }, [s, d, f, h]);
            let g = u.useCallback(
              e => {
                if ((!n && !r) || h.paused) return;
                let t = 'Tab' === e.key && !e.altKey && !e.ctrlKey && !e.metaKey,
                  o = document.activeElement;
                if (t && o) {
                  let t = e.currentTarget,
                    [r, i] = (function (e) {
                      let t = tr(e);
                      return [to(t, e), to(t.reverse(), e)];
                    })(t);
                  r && i
                    ? e.shiftKey || o !== i
                      ? e.shiftKey && o === r && (e.preventDefault(), n && ti(i, { select: !0 }))
                      : (e.preventDefault(), n && ti(r, { select: !0 }))
                    : o === t && e.preventDefault();
                }
              },
              [n, r, h.paused]
            );
            return (0, a.jsx)(e5.div, { tabIndex: -1, ...l, ref: m, onKeyDown: g });
          });
        function tr(e) {
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
        function to(e, t) {
          for (let n of e)
            if (
              !(function (e, { upTo: t }) {
                if ('hidden' === getComputedStyle(e).visibility) return !0;
                for (; e && (void 0 === t || e !== t); ) {
                  if ('none' === getComputedStyle(e).display) return !0;
                  e = e.parentElement;
                }
                return !1;
              })(n, { upTo: t })
            )
              return n;
        }
        function ti(e, { select: t = !1 } = {}) {
          if (e && e.focus) {
            var n;
            let r = document.activeElement;
            e.focus({ preventScroll: !0 }),
              e !== r && (n = e) instanceof HTMLInputElement && 'select' in n && t && e.select();
          }
        }
        tn.displayName = 'FocusScope';
        var tl = (function () {
          let e = [];
          return {
            add(t) {
              let n = e[0];
              t !== n && n?.pause(), (e = ta(e, t)).unshift(t);
            },
            remove(t) {
              (e = ta(e, t)), e[0]?.resume();
            },
          };
        })();
        function ta(e, t) {
          let n = [...e],
            r = n.indexOf(t);
          return -1 !== r && n.splice(r, 1), n;
        }
        var ts = u.forwardRef((e, t) => {
          let { container: n, ...r } = e,
            [o, i] = u.useState(!1);
          eX(() => i(!0), []);
          let l = n || (o && globalThis?.document?.body);
          return l ? e1.createPortal((0, a.jsx)(e5.div, { ...r, ref: t }), l) : null;
        });
        ts.displayName = 'Portal';
        var tu = e => {
          let { present: t, children: n } = e,
            r = (function (e) {
              var t, n;
              let [r, o] = u.useState(),
                i = u.useRef({}),
                l = u.useRef(e),
                a = u.useRef('none'),
                [s, c] =
                  ((t = e ? 'mounted' : 'unmounted'),
                  (n = {
                    mounted: { UNMOUNT: 'unmounted', ANIMATION_OUT: 'unmountSuspended' },
                    unmountSuspended: { MOUNT: 'mounted', ANIMATION_END: 'unmounted' },
                    unmounted: { MOUNT: 'mounted' },
                  }),
                  u.useReducer((e, t) => n[e][t] ?? e, t));
              return (
                u.useEffect(() => {
                  let e = tc(i.current);
                  a.current = 'mounted' === s ? e : 'none';
                }, [s]),
                eX(() => {
                  let t = i.current,
                    n = l.current;
                  if (n !== e) {
                    let r = a.current,
                      o = tc(t);
                    e
                      ? c('MOUNT')
                      : 'none' === o || t?.display === 'none'
                        ? c('UNMOUNT')
                        : n && r !== o
                          ? c('ANIMATION_OUT')
                          : c('UNMOUNT'),
                      (l.current = e);
                  }
                }, [e, c]),
                eX(() => {
                  if (r) {
                    let e;
                    let t = r.ownerDocument.defaultView ?? window,
                      n = n => {
                        let o = tc(i.current).includes(n.animationName);
                        if (n.target === r && o && (c('ANIMATION_END'), !l.current)) {
                          let n = r.style.animationFillMode;
                          (r.style.animationFillMode = 'forwards'),
                            (e = t.setTimeout(() => {
                              'forwards' === r.style.animationFillMode &&
                                (r.style.animationFillMode = n);
                            }));
                        }
                      },
                      o = e => {
                        e.target === r && (a.current = tc(i.current));
                      };
                    return (
                      r.addEventListener('animationstart', o),
                      r.addEventListener('animationcancel', n),
                      r.addEventListener('animationend', n),
                      () => {
                        t.clearTimeout(e),
                          r.removeEventListener('animationstart', o),
                          r.removeEventListener('animationcancel', n),
                          r.removeEventListener('animationend', n);
                      }
                    );
                  }
                  c('ANIMATION_END');
                }, [r, c]),
                {
                  isPresent: ['mounted', 'unmountSuspended'].includes(s),
                  ref: u.useCallback(e => {
                    e && (i.current = getComputedStyle(e)), o(e);
                  }, []),
                }
              );
            })(t),
            o = 'function' == typeof n ? n({ present: r.isPresent }) : u.Children.only(n),
            i = (0, eq.e)(
              r.ref,
              (function (e) {
                let t = Object.getOwnPropertyDescriptor(e.props, 'ref')?.get,
                  n = t && 'isReactWarning' in t && t.isReactWarning;
                return n
                  ? e.ref
                  : (n =
                        (t = Object.getOwnPropertyDescriptor(e, 'ref')?.get) &&
                        'isReactWarning' in t &&
                        t.isReactWarning)
                    ? e.props.ref
                    : e.props.ref || e.ref;
              })(o)
            );
          return 'function' == typeof n || r.isPresent ? u.cloneElement(o, { ref: i }) : null;
        };
        function tc(e) {
          return e?.animationName || 'none';
        }
        tu.displayName = 'Presence';
        var td = 0;
        function tf() {
          u.useEffect(() => {
            let e = document.querySelectorAll('[data-radix-focus-guard]');
            return (
              document.body.insertAdjacentElement('afterbegin', e[0] ?? tp()),
              document.body.insertAdjacentElement('beforeend', e[1] ?? tp()),
              td++,
              () => {
                1 === td &&
                  document.querySelectorAll('[data-radix-focus-guard]').forEach(e => e.remove()),
                  td--;
              }
            );
          }, []);
        }
        function tp() {
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
        var tm = function () {
          return (tm =
            Object.assign ||
            function (e) {
              for (var t, n = 1, r = arguments.length; n < r; n++)
                for (var o in (t = arguments[n]))
                  Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
              return e;
            }).apply(this, arguments);
        };
        function th(e, t) {
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
        var tg = 'right-scroll-bar-position',
          tv = 'width-before-scroll-bar';
        function tx(e, t) {
          return 'function' == typeof e ? e(t) : e && (e.current = t), e;
        }
        var ty = 'undefined' != typeof window ? u.useLayoutEffect : u.useEffect,
          tb = new WeakMap();
        function tw(e) {
          return e;
        }
        var tj = (function (e) {
            void 0 === e && (e = {});
            var t,
              n,
              r,
              o =
                (void 0 === t && (t = tw),
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
                    var i = function () {
                        var n = t;
                        (t = []), n.forEach(e);
                      },
                      l = function () {
                        return Promise.resolve().then(i);
                      };
                    l(),
                      (n = {
                        push: function (e) {
                          t.push(e), l();
                        },
                        filter: function (e) {
                          return (t = t.filter(e)), n;
                        },
                      });
                  },
                });
            return (o.options = tm({ async: !0, ssr: !1 }, e)), o;
          })(),
          tE = function () {},
          tC = u.forwardRef(function (e, t) {
            var n,
              r,
              o,
              i,
              l = u.useRef(null),
              a = u.useState({ onScrollCapture: tE, onWheelCapture: tE, onTouchMoveCapture: tE }),
              s = a[0],
              c = a[1],
              d = e.forwardProps,
              f = e.children,
              p = e.className,
              m = e.removeScrollBar,
              h = e.enabled,
              g = e.shards,
              v = e.sideCar,
              x = e.noIsolation,
              y = e.inert,
              b = e.allowPinchZoom,
              w = e.as,
              j = e.gapMode,
              E = th(e, [
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
              C =
                ((n = [l, t]),
                (r = function (e) {
                  return n.forEach(function (t) {
                    return tx(t, e);
                  });
                }),
                ((o = (0, u.useState)(function () {
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
                (i = o.facade),
                ty(
                  function () {
                    var e = tb.get(i);
                    if (e) {
                      var t = new Set(e),
                        r = new Set(n),
                        o = i.current;
                      t.forEach(function (e) {
                        r.has(e) || tx(e, null);
                      }),
                        r.forEach(function (e) {
                          t.has(e) || tx(e, o);
                        });
                    }
                    tb.set(i, n);
                  },
                  [n]
                ),
                i),
              k = tm(tm({}, E), s);
            return u.createElement(
              u.Fragment,
              null,
              h &&
                u.createElement(v, {
                  sideCar: tj,
                  removeScrollBar: m,
                  shards: g,
                  noIsolation: x,
                  inert: y,
                  setCallbacks: c,
                  allowPinchZoom: !!b,
                  lockRef: l,
                  gapMode: j,
                }),
              d
                ? u.cloneElement(u.Children.only(f), tm(tm({}, k), { ref: C }))
                : u.createElement(void 0 === w ? 'div' : w, tm({}, k, { className: p, ref: C }), f)
            );
          });
        (tC.defaultProps = { enabled: !0, removeScrollBar: !0, inert: !1 }),
          (tC.classNames = { fullWidth: tv, zeroRight: tg });
        var tk = function (e) {
          var t = e.sideCar,
            n = th(e, ['sideCar']);
          if (!t) throw Error('Sidecar: please provide `sideCar` property to import the right car');
          var r = t.read();
          if (!r) throw Error('Sidecar medium not found');
          return u.createElement(r, tm({}, n));
        };
        tk.isSideCarExport = !0;
        var tN = function () {
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
                    var t = l || n.nc;
                    return t && e.setAttribute('nonce', t), e;
                  })())
                ) {
                  var o, i;
                  (o = t).styleSheet
                    ? (o.styleSheet.cssText = r)
                    : o.appendChild(document.createTextNode(r)),
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
          tS = function () {
            var e = tN();
            return function (t, n) {
              u.useEffect(
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
          tP = function () {
            var e = tS();
            return function (t) {
              return e(t.styles, t.dynamic), null;
            };
          },
          tR = { left: 0, top: 0, right: 0, gap: 0 },
          tA = function (e) {
            return parseInt(e || '', 10) || 0;
          },
          tT = function (e) {
            var t = window.getComputedStyle(document.body),
              n = t['padding' === e ? 'paddingLeft' : 'marginLeft'],
              r = t['padding' === e ? 'paddingTop' : 'marginTop'],
              o = t['padding' === e ? 'paddingRight' : 'marginRight'];
            return [tA(n), tA(r), tA(o)];
          },
          tD = function (e) {
            if ((void 0 === e && (e = 'margin'), 'undefined' == typeof window)) return tR;
            var t = tT(e),
              n = document.documentElement.clientWidth,
              r = window.innerWidth;
            return { left: t[0], top: t[1], right: t[2], gap: Math.max(0, r - n + t[2] - t[0]) };
          },
          tL = tP(),
          tM = 'data-scroll-locked',
          tO = function (e, t, n, r) {
            var o = e.left,
              i = e.top,
              l = e.right,
              a = e.gap;
            return (
              void 0 === n && (n = 'margin'),
              '\n  .'
                .concat('with-scroll-bars-hidden', ' {\n   overflow: hidden ')
                .concat(r, ';\n   padding-right: ')
                .concat(a, 'px ')
                .concat(r, ';\n  }\n  body[')
                .concat(tM, '] {\n    overflow: hidden ')
                .concat(r, ';\n    overscroll-behavior: contain;\n    ')
                .concat(
                  [
                    t && 'position: relative '.concat(r, ';'),
                    'margin' === n &&
                      '\n    padding-left: '
                        .concat(o, 'px;\n    padding-top: ')
                        .concat(i, 'px;\n    padding-right: ')
                        .concat(l, 'px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: ')
                        .concat(a, 'px ')
                        .concat(r, ';\n    '),
                    'padding' === n && 'padding-right: '.concat(a, 'px ').concat(r, ';'),
                  ]
                    .filter(Boolean)
                    .join(''),
                  '\n  }\n  \n  .'
                )
                .concat(tg, ' {\n    right: ')
                .concat(a, 'px ')
                .concat(r, ';\n  }\n  \n  .')
                .concat(tv, ' {\n    margin-right: ')
                .concat(a, 'px ')
                .concat(r, ';\n  }\n  \n  .')
                .concat(tg, ' .')
                .concat(tg, ' {\n    right: 0 ')
                .concat(r, ';\n  }\n  \n  .')
                .concat(tv, ' .')
                .concat(tv, ' {\n    margin-right: 0 ')
                .concat(r, ';\n  }\n  \n  body[')
                .concat(tM, '] {\n    ')
                .concat('--removed-body-scroll-bar-size', ': ')
                .concat(a, 'px;\n  }\n')
            );
          },
          tI = function () {
            var e = parseInt(document.body.getAttribute(tM) || '0', 10);
            return isFinite(e) ? e : 0;
          },
          tz = function () {
            u.useEffect(function () {
              return (
                document.body.setAttribute(tM, (tI() + 1).toString()),
                function () {
                  var e = tI() - 1;
                  e <= 0
                    ? document.body.removeAttribute(tM)
                    : document.body.setAttribute(tM, e.toString());
                }
              );
            }, []);
          },
          t_ = function (e) {
            var t = e.noRelative,
              n = e.noImportant,
              r = e.gapMode,
              o = void 0 === r ? 'margin' : r;
            tz();
            var i = u.useMemo(
              function () {
                return tD(o);
              },
              [o]
            );
            return u.createElement(tL, { styles: tO(i, !t, o, n ? '' : '!important') });
          },
          tF = !1;
        if ('undefined' != typeof window)
          try {
            var t$ = Object.defineProperty({}, 'passive', {
              get: function () {
                return (tF = !0), !0;
              },
            });
            window.addEventListener('test', t$, t$), window.removeEventListener('test', t$, t$);
          } catch (e) {
            tF = !1;
          }
        var tW = !!tF && { passive: !1 },
          tH = function (e, t) {
            if (!(e instanceof Element)) return !1;
            var n = window.getComputedStyle(e);
            return (
              'hidden' !== n[t] &&
              !(n.overflowY === n.overflowX && 'TEXTAREA' !== e.tagName && 'visible' === n[t])
            );
          },
          tB = function (e, t) {
            var n = t.ownerDocument,
              r = t;
            do {
              if (
                ('undefined' != typeof ShadowRoot && r instanceof ShadowRoot && (r = r.host),
                tK(e, r))
              ) {
                var o = tV(e, r);
                if (o[1] > o[2]) return !0;
              }
              r = r.parentNode;
            } while (r && r !== n.body);
            return !1;
          },
          tK = function (e, t) {
            return 'v' === e ? tH(t, 'overflowY') : tH(t, 'overflowX');
          },
          tV = function (e, t) {
            return 'v' === e
              ? [t.scrollTop, t.scrollHeight, t.clientHeight]
              : [t.scrollLeft, t.scrollWidth, t.clientWidth];
          },
          tU = function (e, t, n, r, o) {
            var i,
              l = ((i = window.getComputedStyle(t).direction), 'h' === e && 'rtl' === i ? -1 : 1),
              a = l * r,
              s = n.target,
              u = t.contains(s),
              c = !1,
              d = a > 0,
              f = 0,
              p = 0;
            do {
              var m = tV(e, s),
                h = m[0],
                g = m[1] - m[2] - l * h;
              (h || g) && tK(e, s) && ((f += g), (p += h)),
                s instanceof ShadowRoot ? (s = s.host) : (s = s.parentNode);
            } while ((!u && s !== document.body) || (u && (t.contains(s) || t === s)));
            return (
              d && ((o && 1 > Math.abs(f)) || (!o && a > f))
                ? (c = !0)
                : !d && ((o && 1 > Math.abs(p)) || (!o && -a > p)) && (c = !0),
              c
            );
          },
          tq = function (e) {
            return 'changedTouches' in e
              ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY]
              : [0, 0];
          },
          tG = function (e) {
            return [e.deltaX, e.deltaY];
          },
          tX = function (e) {
            return e && 'current' in e ? e.current : e;
          },
          tY = 0,
          tZ = [];
        let tJ =
          ((o = function (e) {
            var t = u.useRef([]),
              n = u.useRef([0, 0]),
              r = u.useRef(),
              o = u.useState(tY++)[0],
              i = u.useState(tP)[0],
              l = u.useRef(e);
            u.useEffect(
              function () {
                l.current = e;
              },
              [e]
            ),
              u.useEffect(
                function () {
                  if (e.inert) {
                    document.body.classList.add('block-interactivity-'.concat(o));
                    var t = (function (e, t, n) {
                      if (n || 2 == arguments.length)
                        for (var r, o = 0, i = t.length; o < i; o++)
                          (!r && o in t) ||
                            (r || (r = Array.prototype.slice.call(t, 0, o)), (r[o] = t[o]));
                      return e.concat(r || Array.prototype.slice.call(t));
                    })([e.lockRef.current], (e.shards || []).map(tX), !0).filter(Boolean);
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
            var a = u.useCallback(function (e, t) {
                if (('touches' in e && 2 === e.touches.length) || ('wheel' === e.type && e.ctrlKey))
                  return !l.current.allowPinchZoom;
                var o,
                  i = tq(e),
                  a = n.current,
                  s = 'deltaX' in e ? e.deltaX : a[0] - i[0],
                  u = 'deltaY' in e ? e.deltaY : a[1] - i[1],
                  c = e.target,
                  d = Math.abs(s) > Math.abs(u) ? 'h' : 'v';
                if ('touches' in e && 'h' === d && 'range' === c.type) return !1;
                var f = tB(d, c);
                if (!f) return !0;
                if ((f ? (o = d) : ((o = 'v' === d ? 'h' : 'v'), (f = tB(d, c))), !f)) return !1;
                if ((!r.current && 'changedTouches' in e && (s || u) && (r.current = o), !o))
                  return !0;
                var p = r.current || o;
                return tU(p, t, e, 'h' === p ? s : u, !0);
              }, []),
              s = u.useCallback(function (e) {
                if (tZ.length && tZ[tZ.length - 1] === i) {
                  var n = 'deltaY' in e ? tG(e) : tq(e),
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
                    var o = (l.current.shards || [])
                      .map(tX)
                      .filter(Boolean)
                      .filter(function (t) {
                        return t.contains(e.target);
                      });
                    (o.length > 0 ? a(e, o[0]) : !l.current.noIsolation) &&
                      e.cancelable &&
                      e.preventDefault();
                  }
                }
              }, []),
              c = u.useCallback(function (e, n, r, o) {
                var i = {
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
                t.current.push(i),
                  setTimeout(function () {
                    t.current = t.current.filter(function (e) {
                      return e !== i;
                    });
                  }, 1);
              }, []),
              d = u.useCallback(function (e) {
                (n.current = tq(e)), (r.current = void 0);
              }, []),
              f = u.useCallback(function (t) {
                c(t.type, tG(t), t.target, a(t, e.lockRef.current));
              }, []),
              p = u.useCallback(function (t) {
                c(t.type, tq(t), t.target, a(t, e.lockRef.current));
              }, []);
            u.useEffect(function () {
              return (
                tZ.push(i),
                e.setCallbacks({ onScrollCapture: f, onWheelCapture: f, onTouchMoveCapture: p }),
                document.addEventListener('wheel', s, tW),
                document.addEventListener('touchmove', s, tW),
                document.addEventListener('touchstart', d, tW),
                function () {
                  (tZ = tZ.filter(function (e) {
                    return e !== i;
                  })),
                    document.removeEventListener('wheel', s, tW),
                    document.removeEventListener('touchmove', s, tW),
                    document.removeEventListener('touchstart', d, tW);
                }
              );
            }, []);
            var m = e.removeScrollBar,
              h = e.inert;
            return u.createElement(
              u.Fragment,
              null,
              h
                ? u.createElement(i, {
                    styles: '\n  .block-interactivity-'
                      .concat(o, ' {pointer-events: none;}\n  .allow-interactivity-')
                      .concat(o, ' {pointer-events: all;}\n'),
                  })
                : null,
              m ? u.createElement(t_, { gapMode: e.gapMode }) : null
            );
          }),
          tj.useMedium(o),
          tk);
        var tQ = u.forwardRef(function (e, t) {
          return u.createElement(tC, tm({}, e, { ref: t, sideCar: tJ }));
        });
        tQ.classNames = tC.classNames;
        var t0 = new WeakMap(),
          t1 = new WeakMap(),
          t2 = {},
          t5 = 0,
          t4 = function (e) {
            return e && (e.host || t4(e.parentNode));
          },
          t3 = function (e, t, n, r) {
            var o = (Array.isArray(e) ? e : [e])
              .map(function (e) {
                if (t.contains(e)) return e;
                var n = t4(e);
                return n && t.contains(n)
                  ? n
                  : (console.error(
                      'aria-hidden',
                      e,
                      'in not contained inside',
                      t,
                      '. Doing nothing'
                    ),
                    null);
              })
              .filter(function (e) {
                return !!e;
              });
            t2[n] || (t2[n] = new WeakMap());
            var i = t2[n],
              l = [],
              a = new Set(),
              s = new Set(o),
              u = function (e) {
                !e || a.has(e) || (a.add(e), u(e.parentNode));
              };
            o.forEach(u);
            var c = function (e) {
              !e ||
                s.has(e) ||
                Array.prototype.forEach.call(e.children, function (e) {
                  if (a.has(e)) c(e);
                  else
                    try {
                      var t = e.getAttribute(r),
                        o = null !== t && 'false' !== t,
                        s = (t0.get(e) || 0) + 1,
                        u = (i.get(e) || 0) + 1;
                      t0.set(e, s),
                        i.set(e, u),
                        l.push(e),
                        1 === s && o && t1.set(e, !0),
                        1 === u && e.setAttribute(n, 'true'),
                        o || e.setAttribute(r, 'true');
                    } catch (t) {
                      console.error('aria-hidden: cannot operate on ', e, t);
                    }
                });
            };
            return (
              c(t),
              a.clear(),
              t5++,
              function () {
                l.forEach(function (e) {
                  var t = t0.get(e) - 1,
                    o = i.get(e) - 1;
                  t0.set(e, t),
                    i.set(e, o),
                    t || (t1.has(e) || e.removeAttribute(r), t1.delete(e)),
                    o || e.removeAttribute(n);
                }),
                  --t5 ||
                    ((t0 = new WeakMap()), (t0 = new WeakMap()), (t1 = new WeakMap()), (t2 = {}));
              }
            );
          },
          t6 = function (e, t, n) {
            void 0 === n && (n = 'data-aria-hidden');
            var r,
              o = Array.from(Array.isArray(e) ? e : [e]),
              i =
                t ||
                ((r = e),
                'undefined' == typeof document
                  ? null
                  : (Array.isArray(r) ? r[0] : r).ownerDocument.body);
            return i
              ? (o.push.apply(o, Array.from(i.querySelectorAll('[aria-live]'))),
                t3(o, i, n, 'aria-hidden'))
              : function () {
                  return null;
                };
          },
          t8 = 'Dialog',
          [t7, t9] = eU(t8),
          [ne, nt] = t7(t8),
          nn = e => {
            let {
                __scopeDialog: t,
                children: n,
                open: r,
                defaultOpen: o,
                onOpenChange: i,
                modal: l = !0,
              } = e,
              s = u.useRef(null),
              c = u.useRef(null),
              [d = !1, f] = e0({ prop: r, defaultProp: o, onChange: i });
            return (0, a.jsx)(ne, {
              scope: t,
              triggerRef: s,
              contentRef: c,
              contentId: eJ(),
              titleId: eJ(),
              descriptionId: eJ(),
              open: d,
              onOpenChange: f,
              onOpenToggle: u.useCallback(() => f(e => !e), [f]),
              modal: l,
              children: n,
            });
          };
        nn.displayName = t8;
        var nr = 'DialogTrigger',
          no = u.forwardRef((e, t) => {
            let { __scopeDialog: n, ...r } = e,
              o = nt(nr, n),
              i = (0, eq.e)(t, o.triggerRef);
            return (0, a.jsx)(e5.button, {
              type: 'button',
              'aria-haspopup': 'dialog',
              'aria-expanded': o.open,
              'aria-controls': o.contentId,
              'data-state': nE(o.open),
              ...r,
              ref: i,
              onClick: eG(e.onClick, o.onOpenToggle),
            });
          });
        no.displayName = nr;
        var ni = 'DialogPortal',
          [nl, na] = t7(ni, { forceMount: void 0 }),
          ns = e => {
            let { __scopeDialog: t, forceMount: n, children: r, container: o } = e,
              i = nt(ni, t);
            return (0, a.jsx)(nl, {
              scope: t,
              forceMount: n,
              children: u.Children.map(r, e =>
                (0, a.jsx)(tu, {
                  present: n || i.open,
                  children: (0, a.jsx)(ts, { asChild: !0, container: o, children: e }),
                })
              ),
            });
          };
        ns.displayName = ni;
        var nu = 'DialogOverlay',
          nc = u.forwardRef((e, t) => {
            let n = na(nu, e.__scopeDialog),
              { forceMount: r = n.forceMount, ...o } = e,
              i = nt(nu, e.__scopeDialog);
            return i.modal
              ? (0, a.jsx)(tu, { present: r || i.open, children: (0, a.jsx)(nd, { ...o, ref: t }) })
              : null;
          });
        nc.displayName = nu;
        var nd = u.forwardRef((e, t) => {
            let { __scopeDialog: n, ...r } = e,
              o = nt(nu, n);
            return (0, a.jsx)(tQ, {
              as: e2.g7,
              allowPinchZoom: !0,
              shards: [o.contentRef],
              children: (0, a.jsx)(e5.div, {
                'data-state': nE(o.open),
                ...r,
                ref: t,
                style: { pointerEvents: 'auto', ...r.style },
              }),
            });
          }),
          nf = 'DialogContent',
          np = u.forwardRef((e, t) => {
            let n = na(nf, e.__scopeDialog),
              { forceMount: r = n.forceMount, ...o } = e,
              i = nt(nf, e.__scopeDialog);
            return (0, a.jsx)(tu, {
              present: r || i.open,
              children: i.modal
                ? (0, a.jsx)(nm, { ...o, ref: t })
                : (0, a.jsx)(nh, { ...o, ref: t }),
            });
          });
        np.displayName = nf;
        var nm = u.forwardRef((e, t) => {
            let n = nt(nf, e.__scopeDialog),
              r = u.useRef(null),
              o = (0, eq.e)(t, n.contentRef, r);
            return (
              u.useEffect(() => {
                let e = r.current;
                if (e) return t6(e);
              }, []),
              (0, a.jsx)(ng, {
                ...e,
                ref: o,
                trapFocus: n.open,
                disableOutsidePointerEvents: !0,
                onCloseAutoFocus: eG(e.onCloseAutoFocus, e => {
                  e.preventDefault(), n.triggerRef.current?.focus();
                }),
                onPointerDownOutside: eG(e.onPointerDownOutside, e => {
                  let t = e.detail.originalEvent,
                    n = 0 === t.button && !0 === t.ctrlKey;
                  (2 === t.button || n) && e.preventDefault();
                }),
                onFocusOutside: eG(e.onFocusOutside, e => e.preventDefault()),
              })
            );
          }),
          nh = u.forwardRef((e, t) => {
            let n = nt(nf, e.__scopeDialog),
              r = u.useRef(!1),
              o = u.useRef(!1);
            return (0, a.jsx)(ng, {
              ...e,
              ref: t,
              trapFocus: !1,
              disableOutsidePointerEvents: !1,
              onCloseAutoFocus: t => {
                e.onCloseAutoFocus?.(t),
                  t.defaultPrevented ||
                    (r.current || n.triggerRef.current?.focus(), t.preventDefault()),
                  (r.current = !1),
                  (o.current = !1);
              },
              onInteractOutside: t => {
                e.onInteractOutside?.(t),
                  t.defaultPrevented ||
                    ((r.current = !0),
                    'pointerdown' !== t.detail.originalEvent.type || (o.current = !0));
                let i = t.target;
                n.triggerRef.current?.contains(i) && t.preventDefault(),
                  'focusin' === t.detail.originalEvent.type && o.current && t.preventDefault();
              },
            });
          }),
          ng = u.forwardRef((e, t) => {
            let {
                __scopeDialog: n,
                trapFocus: r,
                onOpenAutoFocus: o,
                onCloseAutoFocus: i,
                ...l
              } = e,
              s = nt(nf, n),
              c = u.useRef(null),
              d = (0, eq.e)(t, c);
            return (
              tf(),
              (0, a.jsxs)(a.Fragment, {
                children: [
                  (0, a.jsx)(tn, {
                    asChild: !0,
                    loop: !0,
                    trapped: r,
                    onMountAutoFocus: o,
                    onUnmountAutoFocus: i,
                    children: (0, a.jsx)(e6, {
                      role: 'dialog',
                      id: s.contentId,
                      'aria-describedby': s.descriptionId,
                      'aria-labelledby': s.titleId,
                      'data-state': nE(s.open),
                      ...l,
                      ref: d,
                      onDismiss: () => s.onOpenChange(!1),
                    }),
                  }),
                  (0, a.jsxs)(a.Fragment, {
                    children: [
                      (0, a.jsx)(nS, { titleId: s.titleId }),
                      (0, a.jsx)(nP, { contentRef: c, descriptionId: s.descriptionId }),
                    ],
                  }),
                ],
              })
            );
          }),
          nv = 'DialogTitle',
          nx = u.forwardRef((e, t) => {
            let { __scopeDialog: n, ...r } = e,
              o = nt(nv, n);
            return (0, a.jsx)(e5.h2, { id: o.titleId, ...r, ref: t });
          });
        nx.displayName = nv;
        var ny = 'DialogDescription',
          nb = u.forwardRef((e, t) => {
            let { __scopeDialog: n, ...r } = e,
              o = nt(ny, n);
            return (0, a.jsx)(e5.p, { id: o.descriptionId, ...r, ref: t });
          });
        nb.displayName = ny;
        var nw = 'DialogClose',
          nj = u.forwardRef((e, t) => {
            let { __scopeDialog: n, ...r } = e,
              o = nt(nw, n);
            return (0, a.jsx)(e5.button, {
              type: 'button',
              ...r,
              ref: t,
              onClick: eG(e.onClick, () => o.onOpenChange(!1)),
            });
          });
        function nE(e) {
          return e ? 'open' : 'closed';
        }
        nj.displayName = nw;
        var nC = 'DialogTitleWarning',
          [nk, nN] = (function (e, t) {
            let n = u.createContext(t),
              r = e => {
                let { children: t, ...r } = e,
                  o = u.useMemo(() => r, Object.values(r));
                return (0, a.jsx)(n.Provider, { value: o, children: t });
              };
            return (
              (r.displayName = e + 'Provider'),
              [
                r,
                function (r) {
                  let o = u.useContext(n);
                  if (o) return o;
                  if (void 0 !== t) return t;
                  throw Error(`\`${r}\` must be used within \`${e}\``);
                },
              ]
            );
          })(nC, { contentName: nf, titleName: nv, docsSlug: 'dialog' }),
          nS = ({ titleId: e }) => {
            let t = nN(nC),
              n = `\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;
            return (
              u.useEffect(() => {
                e && !document.getElementById(e) && console.error(n);
              }, [n, e]),
              null
            );
          },
          nP = ({ contentRef: e, descriptionId: t }) => {
            let n = nN('DialogDescriptionWarning'),
              r = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${n.contentName}}.`;
            return (
              u.useEffect(() => {
                let n = e.current?.getAttribute('aria-describedby');
                t && n && !document.getElementById(t) && console.warn(r);
              }, [r, e, t]),
              null
            );
          },
          nR = 'AlertDialog',
          [nA, nT] = eU(nR, [t9]),
          nD = t9(),
          nL = e => {
            let { __scopeAlertDialog: t, ...n } = e,
              r = nD(t);
            return (0, a.jsx)(nn, { ...r, ...n, modal: !0 });
          };
        nL.displayName = nR;
        var nM = u.forwardRef((e, t) => {
          let { __scopeAlertDialog: n, ...r } = e,
            o = nD(n);
          return (0, a.jsx)(no, { ...o, ...r, ref: t });
        });
        nM.displayName = 'AlertDialogTrigger';
        var nO = e => {
          let { __scopeAlertDialog: t, ...n } = e,
            r = nD(t);
          return (0, a.jsx)(ns, { ...r, ...n });
        };
        nO.displayName = 'AlertDialogPortal';
        var nI = u.forwardRef((e, t) => {
          let { __scopeAlertDialog: n, ...r } = e,
            o = nD(n);
          return (0, a.jsx)(nc, { ...o, ...r, ref: t });
        });
        nI.displayName = 'AlertDialogOverlay';
        var nz = 'AlertDialogContent',
          [n_, nF] = nA(nz),
          n$ = u.forwardRef((e, t) => {
            let { __scopeAlertDialog: n, children: r, ...o } = e,
              i = nD(n),
              l = u.useRef(null),
              s = (0, eq.e)(t, l),
              c = u.useRef(null);
            return (0, a.jsx)(nk, {
              contentName: nz,
              titleName: nW,
              docsSlug: 'alert-dialog',
              children: (0, a.jsx)(n_, {
                scope: n,
                cancelRef: c,
                children: (0, a.jsxs)(np, {
                  role: 'alertdialog',
                  ...i,
                  ...o,
                  ref: s,
                  onOpenAutoFocus: eG(o.onOpenAutoFocus, e => {
                    e.preventDefault(), c.current?.focus({ preventScroll: !0 });
                  }),
                  onPointerDownOutside: e => e.preventDefault(),
                  onInteractOutside: e => e.preventDefault(),
                  children: [(0, a.jsx)(e2.A4, { children: r }), (0, a.jsx)(nG, { contentRef: l })],
                }),
              }),
            });
          });
        n$.displayName = nz;
        var nW = 'AlertDialogTitle',
          nH = u.forwardRef((e, t) => {
            let { __scopeAlertDialog: n, ...r } = e,
              o = nD(n);
            return (0, a.jsx)(nx, { ...o, ...r, ref: t });
          });
        nH.displayName = nW;
        var nB = 'AlertDialogDescription',
          nK = u.forwardRef((e, t) => {
            let { __scopeAlertDialog: n, ...r } = e,
              o = nD(n);
            return (0, a.jsx)(nb, { ...o, ...r, ref: t });
          });
        nK.displayName = nB;
        var nV = u.forwardRef((e, t) => {
          let { __scopeAlertDialog: n, ...r } = e,
            o = nD(n);
          return (0, a.jsx)(nj, { ...o, ...r, ref: t });
        });
        nV.displayName = 'AlertDialogAction';
        var nU = 'AlertDialogCancel',
          nq = u.forwardRef((e, t) => {
            let { __scopeAlertDialog: n, ...r } = e,
              { cancelRef: o } = nF(nU, n),
              i = nD(n),
              l = (0, eq.e)(t, o);
            return (0, a.jsx)(nj, { ...i, ...r, ref: l });
          });
        nq.displayName = nU;
        var nG = ({ contentRef: e }) => {
          let t = `\`${nz}\` requires a description for the component to be accessible for screen reader users.

You can add a description to the \`${nz}\` by passing a \`${nB}\` component as a child, which also benefits sighted users by adding visible context to the dialog.

Alternatively, you can use your own component as a description by assigning it an \`id\` and passing the same value to the \`aria-describedby\` prop in \`${nz}\`. If the description is confusing or duplicative for sighted users, you can use the \`@radix-ui/react-visually-hidden\` primitive as a wrapper around your description component.

For more information, see https://radix-ui.com/primitives/docs/components/alert-dialog`;
          return (
            u.useEffect(() => {
              document.getElementById(e.current?.getAttribute('aria-describedby')) ||
                console.warn(t);
            }, [t, e]),
            null
          );
        };
        function nX({ onReset: e }) {
          return (0, a.jsxs)(nL, {
            children: [
              (0, a.jsx)(nM, {
                asChild: !0,
                children: (0, a.jsx)('button', {
                  className:
                    'px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-md hover:bg-gray-100  focus:z-10 focus:ring-2 focus:ring-blue-700  dark:bg-gray-600 dark:text-gray-100 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700',
                  children: 'Reset',
                }),
              }),
              (0, a.jsxs)(nO, {
                children: [
                  (0, a.jsx)(nI, {
                    className: 'bg-black/50 data-[state=open]:animate-overlayShow fixed inset-0',
                  }),
                  (0, a.jsxs)(n$, {
                    className:
                      'data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[500px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white dark:bg-gray-800 p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none',
                    children: [
                      (0, a.jsx)(nH, {
                        className: 'text-lg font-medium text-gray-900 dark:text-white',
                        children: 'Are you sure?',
                      }),
                      (0, a.jsx)(nK, {
                        className: 'mt-2 text-sm text-gray-500 dark:text-gray-400',
                        children:
                          'This action will reset your code to the default snippet. Any unsaved changes will be lost.',
                      }),
                      (0, a.jsxs)('div', {
                        className: 'mt-4 flex justify-end space-x-2',
                        children: [
                          (0, a.jsx)(nq, {
                            asChild: !0,
                            children: (0, a.jsx)('button', {
                              className:
                                'px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-md hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700',
                              children: 'Cancel',
                            }),
                          }),
                          (0, a.jsx)(nV, {
                            asChild: !0,
                            children: (0, a.jsx)('button', {
                              onClick: e,
                              className:
                                'px-4 py-2 text-sm font-medium text-white bg-red-600 border border-transparent rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500',
                              children: 'Continue',
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          });
        }
        function nY(e, [t, n]) {
          return Math.min(n, Math.max(t, e));
        }
        var nZ = u.createContext(void 0);
        let nJ = ['top', 'right', 'bottom', 'left'],
          nQ = Math.min,
          n0 = Math.max,
          n1 = Math.round,
          n2 = Math.floor,
          n5 = e => ({ x: e, y: e }),
          n4 = { left: 'right', right: 'left', bottom: 'top', top: 'bottom' },
          n3 = { start: 'end', end: 'start' };
        function n6(e, t) {
          return 'function' == typeof e ? e(t) : e;
        }
        function n8(e) {
          return e.split('-')[0];
        }
        function n7(e) {
          return e.split('-')[1];
        }
        function n9(e) {
          return 'x' === e ? 'y' : 'x';
        }
        function re(e) {
          return 'y' === e ? 'height' : 'width';
        }
        function rt(e) {
          return ['top', 'bottom'].includes(n8(e)) ? 'y' : 'x';
        }
        function rn(e) {
          return e.replace(/start|end/g, e => n3[e]);
        }
        function rr(e) {
          return e.replace(/left|right|bottom|top/g, e => n4[e]);
        }
        function ro(e) {
          return 'number' != typeof e
            ? { top: 0, right: 0, bottom: 0, left: 0, ...e }
            : { top: e, right: e, bottom: e, left: e };
        }
        function ri(e) {
          let { x: t, y: n, width: r, height: o } = e;
          return { width: r, height: o, top: n, left: t, right: t + r, bottom: n + o, x: t, y: n };
        }
        function rl(e, t, n) {
          let r,
            { reference: o, floating: i } = e,
            l = rt(t),
            a = n9(rt(t)),
            s = re(a),
            u = n8(t),
            c = 'y' === l,
            d = o.x + o.width / 2 - i.width / 2,
            f = o.y + o.height / 2 - i.height / 2,
            p = o[s] / 2 - i[s] / 2;
          switch (u) {
            case 'top':
              r = { x: d, y: o.y - i.height };
              break;
            case 'bottom':
              r = { x: d, y: o.y + o.height };
              break;
            case 'right':
              r = { x: o.x + o.width, y: f };
              break;
            case 'left':
              r = { x: o.x - i.width, y: f };
              break;
            default:
              r = { x: o.x, y: o.y };
          }
          switch (n7(t)) {
            case 'start':
              r[a] -= p * (n && c ? -1 : 1);
              break;
            case 'end':
              r[a] += p * (n && c ? -1 : 1);
          }
          return r;
        }
        let ra = async (e, t, n) => {
          let {
              placement: r = 'bottom',
              strategy: o = 'absolute',
              middleware: i = [],
              platform: l,
            } = n,
            a = i.filter(Boolean),
            s = await (null == l.isRTL ? void 0 : l.isRTL(t)),
            u = await l.getElementRects({ reference: e, floating: t, strategy: o }),
            { x: c, y: d } = rl(u, r, s),
            f = r,
            p = {},
            m = 0;
          for (let n = 0; n < a.length; n++) {
            let { name: i, fn: h } = a[n],
              {
                x: g,
                y: v,
                data: x,
                reset: y,
              } = await h({
                x: c,
                y: d,
                initialPlacement: r,
                placement: f,
                strategy: o,
                middlewareData: p,
                rects: u,
                platform: l,
                elements: { reference: e, floating: t },
              });
            (c = null != g ? g : c),
              (d = null != v ? v : d),
              (p = { ...p, [i]: { ...p[i], ...x } }),
              y &&
                m <= 50 &&
                (m++,
                'object' == typeof y &&
                  (y.placement && (f = y.placement),
                  y.rects &&
                    (u =
                      !0 === y.rects
                        ? await l.getElementRects({ reference: e, floating: t, strategy: o })
                        : y.rects),
                  ({ x: c, y: d } = rl(u, f, s))),
                (n = -1));
          }
          return { x: c, y: d, placement: f, strategy: o, middlewareData: p };
        };
        async function rs(e, t) {
          var n;
          void 0 === t && (t = {});
          let { x: r, y: o, platform: i, rects: l, elements: a, strategy: s } = e,
            {
              boundary: u = 'clippingAncestors',
              rootBoundary: c = 'viewport',
              elementContext: d = 'floating',
              altBoundary: f = !1,
              padding: p = 0,
            } = n6(t, e),
            m = ro(p),
            h = a[f ? ('floating' === d ? 'reference' : 'floating') : d],
            g = ri(
              await i.getClippingRect({
                element:
                  null == (n = await (null == i.isElement ? void 0 : i.isElement(h))) || n
                    ? h
                    : h.contextElement ||
                      (await (null == i.getDocumentElement
                        ? void 0
                        : i.getDocumentElement(a.floating))),
                boundary: u,
                rootBoundary: c,
                strategy: s,
              })
            ),
            v =
              'floating' === d
                ? { x: r, y: o, width: l.floating.width, height: l.floating.height }
                : l.reference,
            x = await (null == i.getOffsetParent ? void 0 : i.getOffsetParent(a.floating)),
            y = ((await (null == i.isElement ? void 0 : i.isElement(x))) &&
              (await (null == i.getScale ? void 0 : i.getScale(x)))) || { x: 1, y: 1 },
            b = ri(
              i.convertOffsetParentRelativeRectToViewportRelativeRect
                ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
                    elements: a,
                    rect: v,
                    offsetParent: x,
                    strategy: s,
                  })
                : v
            );
          return {
            top: (g.top - b.top + m.top) / y.y,
            bottom: (b.bottom - g.bottom + m.bottom) / y.y,
            left: (g.left - b.left + m.left) / y.x,
            right: (b.right - g.right + m.right) / y.x,
          };
        }
        function ru(e, t) {
          return {
            top: e.top - t.height,
            right: e.right - t.width,
            bottom: e.bottom - t.height,
            left: e.left - t.width,
          };
        }
        function rc(e) {
          return nJ.some(t => e[t] >= 0);
        }
        async function rd(e, t) {
          let { placement: n, platform: r, elements: o } = e,
            i = await (null == r.isRTL ? void 0 : r.isRTL(o.floating)),
            l = n8(n),
            a = n7(n),
            s = 'y' === rt(n),
            u = ['left', 'top'].includes(l) ? -1 : 1,
            c = i && s ? -1 : 1,
            d = n6(t, e),
            {
              mainAxis: f,
              crossAxis: p,
              alignmentAxis: m,
            } = 'number' == typeof d
              ? { mainAxis: d, crossAxis: 0, alignmentAxis: null }
              : {
                  mainAxis: d.mainAxis || 0,
                  crossAxis: d.crossAxis || 0,
                  alignmentAxis: d.alignmentAxis,
                };
          return (
            a && 'number' == typeof m && (p = 'end' === a ? -1 * m : m),
            s ? { x: p * c, y: f * u } : { x: f * u, y: p * c }
          );
        }
        function rf() {
          return 'undefined' != typeof window;
        }
        function rp(e) {
          return rg(e) ? (e.nodeName || '').toLowerCase() : '#document';
        }
        function rm(e) {
          var t;
          return (null == e || null == (t = e.ownerDocument) ? void 0 : t.defaultView) || window;
        }
        function rh(e) {
          var t;
          return null == (t = (rg(e) ? e.ownerDocument : e.document) || window.document)
            ? void 0
            : t.documentElement;
        }
        function rg(e) {
          return !!rf() && (e instanceof Node || e instanceof rm(e).Node);
        }
        function rv(e) {
          return !!rf() && (e instanceof Element || e instanceof rm(e).Element);
        }
        function rx(e) {
          return !!rf() && (e instanceof HTMLElement || e instanceof rm(e).HTMLElement);
        }
        function ry(e) {
          return (
            !!rf() &&
            'undefined' != typeof ShadowRoot &&
            (e instanceof ShadowRoot || e instanceof rm(e).ShadowRoot)
          );
        }
        function rb(e) {
          let { overflow: t, overflowX: n, overflowY: r, display: o } = rk(e);
          return (
            /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !['inline', 'contents'].includes(o)
          );
        }
        function rw(e) {
          return [':popover-open', ':modal'].some(t => {
            try {
              return e.matches(t);
            } catch (e) {
              return !1;
            }
          });
        }
        function rj(e) {
          let t = rE(),
            n = rv(e) ? rk(e) : e;
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
        function rE() {
          return (
            'undefined' != typeof CSS &&
            !!CSS.supports &&
            CSS.supports('-webkit-backdrop-filter', 'none')
          );
        }
        function rC(e) {
          return ['html', 'body', '#document'].includes(rp(e));
        }
        function rk(e) {
          return rm(e).getComputedStyle(e);
        }
        function rN(e) {
          return rv(e)
            ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop }
            : { scrollLeft: e.scrollX, scrollTop: e.scrollY };
        }
        function rS(e) {
          if ('html' === rp(e)) return e;
          let t = e.assignedSlot || e.parentNode || (ry(e) && e.host) || rh(e);
          return ry(t) ? t.host : t;
        }
        function rP(e, t, n) {
          var r;
          void 0 === t && (t = []), void 0 === n && (n = !0);
          let o = (function e(t) {
              let n = rS(t);
              return rC(n)
                ? t.ownerDocument
                  ? t.ownerDocument.body
                  : t.body
                : rx(n) && rb(n)
                  ? n
                  : e(n);
            })(e),
            i = o === (null == (r = e.ownerDocument) ? void 0 : r.body),
            l = rm(o);
          if (i) {
            let e = rR(l);
            return t.concat(l, l.visualViewport || [], rb(o) ? o : [], e && n ? rP(e) : []);
          }
          return t.concat(o, rP(o, [], n));
        }
        function rR(e) {
          return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
        }
        function rA(e) {
          let t = rk(e),
            n = parseFloat(t.width) || 0,
            r = parseFloat(t.height) || 0,
            o = rx(e),
            i = o ? e.offsetWidth : n,
            l = o ? e.offsetHeight : r,
            a = n1(n) !== i || n1(r) !== l;
          return a && ((n = i), (r = l)), { width: n, height: r, $: a };
        }
        function rT(e) {
          return rv(e) ? e : e.contextElement;
        }
        function rD(e) {
          let t = rT(e);
          if (!rx(t)) return n5(1);
          let n = t.getBoundingClientRect(),
            { width: r, height: o, $: i } = rA(t),
            l = (i ? n1(n.width) : n.width) / r,
            a = (i ? n1(n.height) : n.height) / o;
          return (
            (l && Number.isFinite(l)) || (l = 1),
            (a && Number.isFinite(a)) || (a = 1),
            { x: l, y: a }
          );
        }
        let rL = n5(0);
        function rM(e) {
          let t = rm(e);
          return rE() && t.visualViewport
            ? { x: t.visualViewport.offsetLeft, y: t.visualViewport.offsetTop }
            : rL;
        }
        function rO(e, t, n, r) {
          var o;
          void 0 === t && (t = !1), void 0 === n && (n = !1);
          let i = e.getBoundingClientRect(),
            l = rT(e),
            a = n5(1);
          t && (r ? rv(r) && (a = rD(r)) : (a = rD(e)));
          let s = (void 0 === (o = n) && (o = !1), r && (!o || r === rm(l)) && o) ? rM(l) : n5(0),
            u = (i.left + s.x) / a.x,
            c = (i.top + s.y) / a.y,
            d = i.width / a.x,
            f = i.height / a.y;
          if (l) {
            let e = rm(l),
              t = r && rv(r) ? rm(r) : r,
              n = e,
              o = rR(n);
            for (; o && r && t !== n; ) {
              let e = rD(o),
                t = o.getBoundingClientRect(),
                r = rk(o),
                i = t.left + (o.clientLeft + parseFloat(r.paddingLeft)) * e.x,
                l = t.top + (o.clientTop + parseFloat(r.paddingTop)) * e.y;
              (u *= e.x),
                (c *= e.y),
                (d *= e.x),
                (f *= e.y),
                (u += i),
                (c += l),
                (o = rR((n = rm(o))));
            }
          }
          return ri({ width: d, height: f, x: u, y: c });
        }
        function rI(e, t) {
          let n = rN(e).scrollLeft;
          return t ? t.left + n : rO(rh(e)).left + n;
        }
        function rz(e, t, n) {
          void 0 === n && (n = !1);
          let r = e.getBoundingClientRect();
          return { x: r.left + t.scrollLeft - (n ? 0 : rI(e, r)), y: r.top + t.scrollTop };
        }
        function r_(e, t, n) {
          let r;
          if ('viewport' === t)
            r = (function (e, t) {
              let n = rm(e),
                r = rh(e),
                o = n.visualViewport,
                i = r.clientWidth,
                l = r.clientHeight,
                a = 0,
                s = 0;
              if (o) {
                (i = o.width), (l = o.height);
                let e = rE();
                (!e || (e && 'fixed' === t)) && ((a = o.offsetLeft), (s = o.offsetTop));
              }
              return { width: i, height: l, x: a, y: s };
            })(e, n);
          else if ('document' === t)
            r = (function (e) {
              let t = rh(e),
                n = rN(e),
                r = e.ownerDocument.body,
                o = n0(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth),
                i = n0(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight),
                l = -n.scrollLeft + rI(e),
                a = -n.scrollTop;
              return (
                'rtl' === rk(r).direction && (l += n0(t.clientWidth, r.clientWidth) - o),
                { width: o, height: i, x: l, y: a }
              );
            })(rh(e));
          else if (rv(t))
            r = (function (e, t) {
              let n = rO(e, !0, 'fixed' === t),
                r = n.top + e.clientTop,
                o = n.left + e.clientLeft,
                i = rx(e) ? rD(e) : n5(1),
                l = e.clientWidth * i.x;
              return { width: l, height: e.clientHeight * i.y, x: o * i.x, y: r * i.y };
            })(t, n);
          else {
            let n = rM(e);
            r = { x: t.x - n.x, y: t.y - n.y, width: t.width, height: t.height };
          }
          return ri(r);
        }
        function rF(e) {
          return 'static' === rk(e).position;
        }
        function r$(e, t) {
          if (!rx(e) || 'fixed' === rk(e).position) return null;
          if (t) return t(e);
          let n = e.offsetParent;
          return rh(e) === n && (n = n.ownerDocument.body), n;
        }
        function rW(e, t) {
          let n = rm(e);
          if (rw(e)) return n;
          if (!rx(e)) {
            let t = rS(e);
            for (; t && !rC(t); ) {
              if (rv(t) && !rF(t)) return t;
              t = rS(t);
            }
            return n;
          }
          let r = r$(e, t);
          for (; r && ['table', 'td', 'th'].includes(rp(r)) && rF(r); ) r = r$(r, t);
          return r && rC(r) && rF(r) && !rj(r)
            ? n
            : r ||
                (function (e) {
                  let t = rS(e);
                  for (; rx(t) && !rC(t); ) {
                    if (rj(t)) return t;
                    if (rw(t)) break;
                    t = rS(t);
                  }
                  return null;
                })(e) ||
                n;
        }
        let rH = async function (e) {
            let t = this.getOffsetParent || rW,
              n = this.getDimensions,
              r = await n(e.floating);
            return {
              reference: (function (e, t, n) {
                let r = rx(t),
                  o = rh(t),
                  i = 'fixed' === n,
                  l = rO(e, !0, i, t),
                  a = { scrollLeft: 0, scrollTop: 0 },
                  s = n5(0);
                if (r || (!r && !i)) {
                  if ((('body' !== rp(t) || rb(o)) && (a = rN(t)), r)) {
                    let e = rO(t, !0, i, t);
                    (s.x = e.x + t.clientLeft), (s.y = e.y + t.clientTop);
                  } else o && (s.x = rI(o));
                }
                let u = !o || r || i ? n5(0) : rz(o, a);
                return {
                  x: l.left + a.scrollLeft - s.x - u.x,
                  y: l.top + a.scrollTop - s.y - u.y,
                  width: l.width,
                  height: l.height,
                };
              })(e.reference, await t(e.floating), e.strategy),
              floating: { x: 0, y: 0, width: r.width, height: r.height },
            };
          },
          rB = {
            convertOffsetParentRelativeRectToViewportRelativeRect: function (e) {
              let { elements: t, rect: n, offsetParent: r, strategy: o } = e,
                i = 'fixed' === o,
                l = rh(r),
                a = !!t && rw(t.floating);
              if (r === l || (a && i)) return n;
              let s = { scrollLeft: 0, scrollTop: 0 },
                u = n5(1),
                c = n5(0),
                d = rx(r);
              if ((d || (!d && !i)) && (('body' !== rp(r) || rb(l)) && (s = rN(r)), rx(r))) {
                let e = rO(r);
                (u = rD(r)), (c.x = e.x + r.clientLeft), (c.y = e.y + r.clientTop);
              }
              let f = !l || d || i ? n5(0) : rz(l, s, !0);
              return {
                width: n.width * u.x,
                height: n.height * u.y,
                x: n.x * u.x - s.scrollLeft * u.x + c.x + f.x,
                y: n.y * u.y - s.scrollTop * u.y + c.y + f.y,
              };
            },
            getDocumentElement: rh,
            getClippingRect: function (e) {
              let { element: t, boundary: n, rootBoundary: r, strategy: o } = e,
                i = [
                  ...('clippingAncestors' === n
                    ? rw(t)
                      ? []
                      : (function (e, t) {
                          let n = t.get(e);
                          if (n) return n;
                          let r = rP(e, [], !1).filter(e => rv(e) && 'body' !== rp(e)),
                            o = null,
                            i = 'fixed' === rk(e).position,
                            l = i ? rS(e) : e;
                          for (; rv(l) && !rC(l); ) {
                            let t = rk(l),
                              n = rj(l);
                            n || 'fixed' !== t.position || (o = null),
                              (
                                i
                                  ? !n && !o
                                  : (!n &&
                                      'static' === t.position &&
                                      !!o &&
                                      ['absolute', 'fixed'].includes(o.position)) ||
                                    (rb(l) &&
                                      !n &&
                                      (function e(t, n) {
                                        let r = rS(t);
                                        return (
                                          !(r === n || !rv(r) || rC(r)) &&
                                          ('fixed' === rk(r).position || e(r, n))
                                        );
                                      })(e, l))
                              )
                                ? (r = r.filter(e => e !== l))
                                : (o = t),
                              (l = rS(l));
                          }
                          return t.set(e, r), r;
                        })(t, this._c)
                    : [].concat(n)),
                  r,
                ],
                l = i[0],
                a = i.reduce(
                  (e, n) => {
                    let r = r_(t, n, o);
                    return (
                      (e.top = n0(r.top, e.top)),
                      (e.right = nQ(r.right, e.right)),
                      (e.bottom = nQ(r.bottom, e.bottom)),
                      (e.left = n0(r.left, e.left)),
                      e
                    );
                  },
                  r_(t, l, o)
                );
              return { width: a.right - a.left, height: a.bottom - a.top, x: a.left, y: a.top };
            },
            getOffsetParent: rW,
            getElementRects: rH,
            getClientRects: function (e) {
              return Array.from(e.getClientRects());
            },
            getDimensions: function (e) {
              let { width: t, height: n } = rA(e);
              return { width: t, height: n };
            },
            getScale: rD,
            isElement: rv,
            isRTL: function (e) {
              return 'rtl' === rk(e).direction;
            },
          },
          rK = e => ({
            name: 'arrow',
            options: e,
            async fn(t) {
              let {
                  x: n,
                  y: r,
                  placement: o,
                  rects: i,
                  platform: l,
                  elements: a,
                  middlewareData: s,
                } = t,
                { element: u, padding: c = 0 } = n6(e, t) || {};
              if (null == u) return {};
              let d = ro(c),
                f = { x: n, y: r },
                p = n9(rt(o)),
                m = re(p),
                h = await l.getDimensions(u),
                g = 'y' === p,
                v = g ? 'clientHeight' : 'clientWidth',
                x = i.reference[m] + i.reference[p] - f[p] - i.floating[m],
                y = f[p] - i.reference[p],
                b = await (null == l.getOffsetParent ? void 0 : l.getOffsetParent(u)),
                w = b ? b[v] : 0;
              (w && (await (null == l.isElement ? void 0 : l.isElement(b)))) ||
                (w = a.floating[v] || i.floating[m]);
              let j = w / 2 - h[m] / 2 - 1,
                E = nQ(d[g ? 'top' : 'left'], j),
                C = nQ(d[g ? 'bottom' : 'right'], j),
                k = w - h[m] - C,
                N = w / 2 - h[m] / 2 + (x / 2 - y / 2),
                S = n0(E, nQ(N, k)),
                P =
                  !s.arrow &&
                  null != n7(o) &&
                  N !== S &&
                  i.reference[m] / 2 - (N < E ? E : C) - h[m] / 2 < 0,
                R = P ? (N < E ? N - E : N - k) : 0;
              return {
                [p]: f[p] + R,
                data: { [p]: S, centerOffset: N - S - R, ...(P && { alignmentOffset: R }) },
                reset: P,
              };
            },
          }),
          rV = (e, t, n) => {
            let r = new Map(),
              o = { platform: rB, ...n },
              i = { ...o.platform, _c: r };
            return ra(e, t, { ...o, platform: i });
          };
        var rU = 'undefined' != typeof document ? u.useLayoutEffect : u.useEffect;
        function rq(e, t) {
          let n, r, o;
          if (e === t) return !0;
          if (typeof e != typeof t) return !1;
          if ('function' == typeof e && e.toString() === t.toString()) return !0;
          if (e && t && 'object' == typeof e) {
            if (Array.isArray(e)) {
              if ((n = e.length) !== t.length) return !1;
              for (r = n; 0 != r--; ) if (!rq(e[r], t[r])) return !1;
              return !0;
            }
            if ((n = (o = Object.keys(e)).length) !== Object.keys(t).length) return !1;
            for (r = n; 0 != r--; ) if (!{}.hasOwnProperty.call(t, o[r])) return !1;
            for (r = n; 0 != r--; ) {
              let n = o[r];
              if (('_owner' !== n || !e.$$typeof) && !rq(e[n], t[n])) return !1;
            }
            return !0;
          }
          return e != e && t != t;
        }
        function rG(e) {
          return 'undefined' == typeof window
            ? 1
            : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
        }
        function rX(e, t) {
          let n = rG(e);
          return Math.round(t * n) / n;
        }
        function rY(e) {
          let t = u.useRef(e);
          return (
            rU(() => {
              t.current = e;
            }),
            t
          );
        }
        let rZ = e => ({
            name: 'arrow',
            options: e,
            fn(t) {
              let { element: n, padding: r } = 'function' == typeof e ? e(t) : e;
              return n && {}.hasOwnProperty.call(n, 'current')
                ? null != n.current
                  ? rK({ element: n.current, padding: r }).fn(t)
                  : {}
                : n
                  ? rK({ element: n, padding: r }).fn(t)
                  : {};
            },
          }),
          rJ = (e, t) => ({
            ...(function (e) {
              return (
                void 0 === e && (e = 0),
                {
                  name: 'offset',
                  options: e,
                  async fn(t) {
                    var n, r;
                    let { x: o, y: i, placement: l, middlewareData: a } = t,
                      s = await rd(t, e);
                    return l === (null == (n = a.offset) ? void 0 : n.placement) &&
                      null != (r = a.arrow) &&
                      r.alignmentOffset
                      ? {}
                      : { x: o + s.x, y: i + s.y, data: { ...s, placement: l } };
                  },
                }
              );
            })(e),
            options: [e, t],
          }),
          rQ = (e, t) => ({
            ...(function (e) {
              return (
                void 0 === e && (e = {}),
                {
                  name: 'shift',
                  options: e,
                  async fn(t) {
                    let { x: n, y: r, placement: o } = t,
                      {
                        mainAxis: i = !0,
                        crossAxis: l = !1,
                        limiter: a = {
                          fn: e => {
                            let { x: t, y: n } = e;
                            return { x: t, y: n };
                          },
                        },
                        ...s
                      } = n6(e, t),
                      u = { x: n, y: r },
                      c = await rs(t, s),
                      d = rt(n8(o)),
                      f = n9(d),
                      p = u[f],
                      m = u[d];
                    if (i) {
                      let e = 'y' === f ? 'top' : 'left',
                        t = 'y' === f ? 'bottom' : 'right',
                        n = p + c[e],
                        r = p - c[t];
                      p = n0(n, nQ(p, r));
                    }
                    if (l) {
                      let e = 'y' === d ? 'top' : 'left',
                        t = 'y' === d ? 'bottom' : 'right',
                        n = m + c[e],
                        r = m - c[t];
                      m = n0(n, nQ(m, r));
                    }
                    let h = a.fn({ ...t, [f]: p, [d]: m });
                    return { ...h, data: { x: h.x - n, y: h.y - r, enabled: { [f]: i, [d]: l } } };
                  },
                }
              );
            })(e),
            options: [e, t],
          }),
          r0 = (e, t) => ({
            ...(function (e) {
              return (
                void 0 === e && (e = {}),
                {
                  options: e,
                  fn(t) {
                    let { x: n, y: r, placement: o, rects: i, middlewareData: l } = t,
                      { offset: a = 0, mainAxis: s = !0, crossAxis: u = !0 } = n6(e, t),
                      c = { x: n, y: r },
                      d = rt(o),
                      f = n9(d),
                      p = c[f],
                      m = c[d],
                      h = n6(a, t),
                      g =
                        'number' == typeof h
                          ? { mainAxis: h, crossAxis: 0 }
                          : { mainAxis: 0, crossAxis: 0, ...h };
                    if (s) {
                      let e = 'y' === f ? 'height' : 'width',
                        t = i.reference[f] - i.floating[e] + g.mainAxis,
                        n = i.reference[f] + i.reference[e] - g.mainAxis;
                      p < t ? (p = t) : p > n && (p = n);
                    }
                    if (u) {
                      var v, x;
                      let e = 'y' === f ? 'width' : 'height',
                        t = ['top', 'left'].includes(n8(o)),
                        n =
                          i.reference[d] -
                          i.floating[e] +
                          ((t && (null == (v = l.offset) ? void 0 : v[d])) || 0) +
                          (t ? 0 : g.crossAxis),
                        r =
                          i.reference[d] +
                          i.reference[e] +
                          (t ? 0 : (null == (x = l.offset) ? void 0 : x[d]) || 0) -
                          (t ? g.crossAxis : 0);
                      m < n ? (m = n) : m > r && (m = r);
                    }
                    return { [f]: p, [d]: m };
                  },
                }
              );
            })(e),
            options: [e, t],
          }),
          r1 = (e, t) => ({
            ...(function (e) {
              return (
                void 0 === e && (e = {}),
                {
                  name: 'flip',
                  options: e,
                  async fn(t) {
                    var n, r, o, i, l;
                    let {
                        placement: a,
                        middlewareData: s,
                        rects: u,
                        initialPlacement: c,
                        platform: d,
                        elements: f,
                      } = t,
                      {
                        mainAxis: p = !0,
                        crossAxis: m = !0,
                        fallbackPlacements: h,
                        fallbackStrategy: g = 'bestFit',
                        fallbackAxisSideDirection: v = 'none',
                        flipAlignment: x = !0,
                        ...y
                      } = n6(e, t);
                    if (null != (n = s.arrow) && n.alignmentOffset) return {};
                    let b = n8(a),
                      w = rt(c),
                      j = n8(c) === c,
                      E = await (null == d.isRTL ? void 0 : d.isRTL(f.floating)),
                      C =
                        h ||
                        (j || !x
                          ? [rr(c)]
                          : (function (e) {
                              let t = rr(e);
                              return [rn(e), t, rn(t)];
                            })(c)),
                      k = 'none' !== v;
                    !h &&
                      k &&
                      C.push(
                        ...(function (e, t, n, r) {
                          let o = n7(e),
                            i = (function (e, t, n) {
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
                            })(n8(e), 'start' === n, r);
                          return (
                            o && ((i = i.map(e => e + '-' + o)), t && (i = i.concat(i.map(rn)))), i
                          );
                        })(c, x, v, E)
                      );
                    let N = [c, ...C],
                      S = await rs(t, y),
                      P = [],
                      R = (null == (r = s.flip) ? void 0 : r.overflows) || [];
                    if ((p && P.push(S[b]), m)) {
                      let e = (function (e, t, n) {
                        void 0 === n && (n = !1);
                        let r = n7(e),
                          o = n9(rt(e)),
                          i = re(o),
                          l =
                            'x' === o
                              ? r === (n ? 'end' : 'start')
                                ? 'right'
                                : 'left'
                              : 'start' === r
                                ? 'bottom'
                                : 'top';
                        return t.reference[i] > t.floating[i] && (l = rr(l)), [l, rr(l)];
                      })(a, u, E);
                      P.push(S[e[0]], S[e[1]]);
                    }
                    if (((R = [...R, { placement: a, overflows: P }]), !P.every(e => e <= 0))) {
                      let e = ((null == (o = s.flip) ? void 0 : o.index) || 0) + 1,
                        t = N[e];
                      if (t) return { data: { index: e, overflows: R }, reset: { placement: t } };
                      let n =
                        null ==
                        (i = R.filter(e => e.overflows[0] <= 0).sort(
                          (e, t) => e.overflows[1] - t.overflows[1]
                        )[0])
                          ? void 0
                          : i.placement;
                      if (!n)
                        switch (g) {
                          case 'bestFit': {
                            let e =
                              null ==
                              (l = R.filter(e => {
                                if (k) {
                                  let t = rt(e.placement);
                                  return t === w || 'y' === t;
                                }
                                return !0;
                              })
                                .map(e => [
                                  e.placement,
                                  e.overflows.filter(e => e > 0).reduce((e, t) => e + t, 0),
                                ])
                                .sort((e, t) => e[1] - t[1])[0])
                                ? void 0
                                : l[0];
                            e && (n = e);
                            break;
                          }
                          case 'initialPlacement':
                            n = c;
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
          r2 = (e, t) => ({
            ...(function (e) {
              return (
                void 0 === e && (e = {}),
                {
                  name: 'size',
                  options: e,
                  async fn(t) {
                    var n, r;
                    let o, i;
                    let { placement: l, rects: a, platform: s, elements: u } = t,
                      { apply: c = () => {}, ...d } = n6(e, t),
                      f = await rs(t, d),
                      p = n8(l),
                      m = n7(l),
                      h = 'y' === rt(l),
                      { width: g, height: v } = a.floating;
                    'top' === p || 'bottom' === p
                      ? ((o = p),
                        (i =
                          m ===
                          ((await (null == s.isRTL ? void 0 : s.isRTL(u.floating)))
                            ? 'start'
                            : 'end')
                            ? 'left'
                            : 'right'))
                      : ((i = p), (o = 'end' === m ? 'top' : 'bottom'));
                    let x = v - f.top - f.bottom,
                      y = g - f.left - f.right,
                      b = nQ(v - f[o], x),
                      w = nQ(g - f[i], y),
                      j = !t.middlewareData.shift,
                      E = b,
                      C = w;
                    if (
                      (null != (n = t.middlewareData.shift) && n.enabled.x && (C = y),
                      null != (r = t.middlewareData.shift) && r.enabled.y && (E = x),
                      j && !m)
                    ) {
                      let e = n0(f.left, 0),
                        t = n0(f.right, 0),
                        n = n0(f.top, 0),
                        r = n0(f.bottom, 0);
                      h
                        ? (C = g - 2 * (0 !== e || 0 !== t ? e + t : n0(f.left, f.right)))
                        : (E = v - 2 * (0 !== n || 0 !== r ? n + r : n0(f.top, f.bottom)));
                    }
                    await c({ ...t, availableWidth: C, availableHeight: E });
                    let k = await s.getDimensions(u.floating);
                    return g !== k.width || v !== k.height ? { reset: { rects: !0 } } : {};
                  },
                }
              );
            })(e),
            options: [e, t],
          }),
          r5 = (e, t) => ({
            ...(function (e) {
              return (
                void 0 === e && (e = {}),
                {
                  name: 'hide',
                  options: e,
                  async fn(t) {
                    let { rects: n } = t,
                      { strategy: r = 'referenceHidden', ...o } = n6(e, t);
                    switch (r) {
                      case 'referenceHidden': {
                        let e = ru(await rs(t, { ...o, elementContext: 'reference' }), n.reference);
                        return { data: { referenceHiddenOffsets: e, referenceHidden: rc(e) } };
                      }
                      case 'escaped': {
                        let e = ru(await rs(t, { ...o, altBoundary: !0 }), n.floating);
                        return { data: { escapedOffsets: e, escaped: rc(e) } };
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
          r4 = (e, t) => ({ ...rZ(e), options: [e, t] });
        var r3 = u.forwardRef((e, t) => {
          let { children: n, width: r = 10, height: o = 5, ...i } = e;
          return (0, a.jsx)(e5.svg, {
            ...i,
            ref: t,
            width: r,
            height: o,
            viewBox: '0 0 30 10',
            preserveAspectRatio: 'none',
            children: e.asChild ? n : (0, a.jsx)('polygon', { points: '0,0 30,0 15,10' }),
          });
        });
        r3.displayName = 'Arrow';
        var r6 = 'Popper',
          [r8, r7] = (function (e, t = []) {
            let n = [],
              r = () => {
                let t = n.map(e => u.createContext(e));
                return function (n) {
                  let r = n?.[e] || t;
                  return u.useMemo(() => ({ [`__scope${e}`]: { ...n, [e]: r } }), [n, r]);
                };
              };
            return (
              (r.scopeName = e),
              [
                function (t, r) {
                  let o = u.createContext(r),
                    i = n.length;
                  function l(t) {
                    let { scope: n, children: r, ...l } = t,
                      s = n?.[e][i] || o,
                      c = u.useMemo(() => l, Object.values(l));
                    return (0, a.jsx)(s.Provider, { value: c, children: r });
                  }
                  return (
                    (n = [...n, r]),
                    (l.displayName = t + 'Provider'),
                    [
                      l,
                      function (n, l) {
                        let a = l?.[e][i] || o,
                          s = u.useContext(a);
                        if (s) return s;
                        if (void 0 !== r) return r;
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
                      let r = n.reduce((t, { useScope: n, scopeName: r }) => {
                        let o = n(e)[`__scope${r}`];
                        return { ...t, ...o };
                      }, {});
                      return u.useMemo(() => ({ [`__scope${t.scopeName}`]: r }), [r]);
                    };
                  };
                  return (n.scopeName = t.scopeName), n;
                })(r, ...t),
              ]
            );
          })(r6),
          [r9, oe] = r8(r6),
          ot = e => {
            let { __scopePopper: t, children: n } = e,
              [r, o] = u.useState(null);
            return (0, a.jsx)(r9, { scope: t, anchor: r, onAnchorChange: o, children: n });
          };
        ot.displayName = r6;
        var on = 'PopperAnchor',
          or = u.forwardRef((e, t) => {
            let { __scopePopper: n, virtualRef: r, ...o } = e,
              i = oe(on, n),
              l = u.useRef(null),
              s = (0, eq.e)(t, l);
            return (
              u.useEffect(() => {
                i.onAnchorChange(r?.current || l.current);
              }),
              r ? null : (0, a.jsx)(e5.div, { ...o, ref: s })
            );
          });
        or.displayName = on;
        var oo = 'PopperContent',
          [oi, ol] = r8(oo),
          oa = u.forwardRef((e, t) => {
            let {
                __scopePopper: n,
                side: r = 'bottom',
                sideOffset: o = 0,
                align: i = 'center',
                alignOffset: l = 0,
                arrowPadding: s = 0,
                avoidCollisions: c = !0,
                collisionBoundary: d = [],
                collisionPadding: f = 0,
                sticky: p = 'partial',
                hideWhenDetached: m = !1,
                updatePositionStrategy: h = 'optimized',
                onPlaced: g,
                ...v
              } = e,
              x = oe(oo, n),
              [y, b] = u.useState(null),
              w = (0, eq.e)(t, e => b(e)),
              [j, E] = u.useState(null),
              C = (function (e) {
                let [t, n] = u.useState(void 0);
                return (
                  eX(() => {
                    if (e) {
                      n({ width: e.offsetWidth, height: e.offsetHeight });
                      let t = new ResizeObserver(t => {
                        let r, o;
                        if (!Array.isArray(t) || !t.length) return;
                        let i = t[0];
                        if ('borderBoxSize' in i) {
                          let e = i.borderBoxSize,
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
              })(j),
              k = C?.width ?? 0,
              N = C?.height ?? 0,
              S = 'number' == typeof f ? f : { top: 0, right: 0, bottom: 0, left: 0, ...f },
              P = Array.isArray(d) ? d : [d],
              R = P.length > 0,
              A = { padding: S, boundary: P.filter(od), altBoundary: R },
              {
                refs: T,
                floatingStyles: D,
                placement: L,
                isPositioned: M,
                middlewareData: O,
              } = (function (e) {
                void 0 === e && (e = {});
                let {
                    placement: t = 'bottom',
                    strategy: n = 'absolute',
                    middleware: r = [],
                    platform: o,
                    elements: { reference: i, floating: l } = {},
                    transform: a = !0,
                    whileElementsMounted: s,
                    open: c,
                  } = e,
                  [d, f] = u.useState({
                    x: 0,
                    y: 0,
                    strategy: n,
                    placement: t,
                    middlewareData: {},
                    isPositioned: !1,
                  }),
                  [p, m] = u.useState(r);
                rq(p, r) || m(r);
                let [h, g] = u.useState(null),
                  [v, x] = u.useState(null),
                  y = u.useCallback(e => {
                    e !== E.current && ((E.current = e), g(e));
                  }, []),
                  b = u.useCallback(e => {
                    e !== C.current && ((C.current = e), x(e));
                  }, []),
                  w = i || h,
                  j = l || v,
                  E = u.useRef(null),
                  C = u.useRef(null),
                  k = u.useRef(d),
                  N = null != s,
                  S = rY(s),
                  P = rY(o),
                  R = rY(c),
                  A = u.useCallback(() => {
                    if (!E.current || !C.current) return;
                    let e = { placement: t, strategy: n, middleware: p };
                    P.current && (e.platform = P.current),
                      rV(E.current, C.current, e).then(e => {
                        let t = { ...e, isPositioned: !1 !== R.current };
                        T.current &&
                          !rq(k.current, t) &&
                          ((k.current = t),
                          e1.flushSync(() => {
                            f(t);
                          }));
                      });
                  }, [p, t, n, P, R]);
                rU(() => {
                  !1 === c &&
                    k.current.isPositioned &&
                    ((k.current.isPositioned = !1), f(e => ({ ...e, isPositioned: !1 })));
                }, [c]);
                let T = u.useRef(!1);
                rU(
                  () => (
                    (T.current = !0),
                    () => {
                      T.current = !1;
                    }
                  ),
                  []
                ),
                  rU(() => {
                    if ((w && (E.current = w), j && (C.current = j), w && j)) {
                      if (S.current) return S.current(w, j, A);
                      A();
                    }
                  }, [w, j, A, S, N]);
                let D = u.useMemo(
                    () => ({ reference: E, floating: C, setReference: y, setFloating: b }),
                    [y, b]
                  ),
                  L = u.useMemo(() => ({ reference: w, floating: j }), [w, j]),
                  M = u.useMemo(() => {
                    let e = { position: n, left: 0, top: 0 };
                    if (!L.floating) return e;
                    let t = rX(L.floating, d.x),
                      r = rX(L.floating, d.y);
                    return a
                      ? {
                          ...e,
                          transform: 'translate(' + t + 'px, ' + r + 'px)',
                          ...(rG(L.floating) >= 1.5 && { willChange: 'transform' }),
                        }
                      : { position: n, left: t, top: r };
                  }, [n, a, L.floating, d.x, d.y]);
                return u.useMemo(
                  () => ({ ...d, update: A, refs: D, elements: L, floatingStyles: M }),
                  [d, A, D, L, M]
                );
              })({
                strategy: 'fixed',
                placement: r + ('center' !== i ? '-' + i : ''),
                whileElementsMounted: (...e) =>
                  (function (e, t, n, r) {
                    let o;
                    void 0 === r && (r = {});
                    let {
                        ancestorScroll: i = !0,
                        ancestorResize: l = !0,
                        elementResize: a = 'function' == typeof ResizeObserver,
                        layoutShift: s = 'function' == typeof IntersectionObserver,
                        animationFrame: u = !1,
                      } = r,
                      c = rT(e),
                      d = i || l ? [...(c ? rP(c) : []), ...rP(t)] : [];
                    d.forEach(e => {
                      i && e.addEventListener('scroll', n, { passive: !0 }),
                        l && e.addEventListener('resize', n);
                    });
                    let f =
                        c && s
                          ? (function (e, t) {
                              let n,
                                r = null,
                                o = rh(e);
                              function i() {
                                var e;
                                clearTimeout(n), null == (e = r) || e.disconnect(), (r = null);
                              }
                              return (
                                (function l(a, s) {
                                  void 0 === a && (a = !1), void 0 === s && (s = 1), i();
                                  let {
                                    left: u,
                                    top: c,
                                    width: d,
                                    height: f,
                                  } = e.getBoundingClientRect();
                                  if ((a || t(), !d || !f)) return;
                                  let p = n2(c),
                                    m = n2(o.clientWidth - (u + d)),
                                    h = {
                                      rootMargin:
                                        -p +
                                        'px ' +
                                        -m +
                                        'px ' +
                                        -n2(o.clientHeight - (c + f)) +
                                        'px ' +
                                        -n2(u) +
                                        'px',
                                      threshold: n0(0, nQ(1, s)) || 1,
                                    },
                                    g = !0;
                                  function v(e) {
                                    let t = e[0].intersectionRatio;
                                    if (t !== s) {
                                      if (!g) return l();
                                      t
                                        ? l(!1, t)
                                        : (n = setTimeout(() => {
                                            l(!1, 1e-7);
                                          }, 1e3));
                                    }
                                    g = !1;
                                  }
                                  try {
                                    r = new IntersectionObserver(v, {
                                      ...h,
                                      root: o.ownerDocument,
                                    });
                                  } catch (e) {
                                    r = new IntersectionObserver(v, h);
                                  }
                                  r.observe(e);
                                })(!0),
                                i
                              );
                            })(c, n)
                          : null,
                      p = -1,
                      m = null;
                    a &&
                      ((m = new ResizeObserver(e => {
                        let [r] = e;
                        r &&
                          r.target === c &&
                          m &&
                          (m.unobserve(t),
                          cancelAnimationFrame(p),
                          (p = requestAnimationFrame(() => {
                            var e;
                            null == (e = m) || e.observe(t);
                          }))),
                          n();
                      })),
                      c && !u && m.observe(c),
                      m.observe(t));
                    let h = u ? rO(e) : null;
                    return (
                      u &&
                        (function t() {
                          let r = rO(e);
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
                          i && e.removeEventListener('scroll', n),
                            l && e.removeEventListener('resize', n);
                        }),
                          null == f || f(),
                          null == (e = m) || e.disconnect(),
                          (m = null),
                          u && cancelAnimationFrame(o);
                      }
                    );
                  })(...e, { animationFrame: 'always' === h }),
                elements: { reference: x.anchor },
                middleware: [
                  rJ({ mainAxis: o + N, alignmentAxis: l }),
                  c &&
                    rQ({
                      mainAxis: !0,
                      crossAxis: !1,
                      limiter: 'partial' === p ? r0() : void 0,
                      ...A,
                    }),
                  c && r1({ ...A }),
                  r2({
                    ...A,
                    apply: ({ elements: e, rects: t, availableWidth: n, availableHeight: r }) => {
                      let { width: o, height: i } = t.reference,
                        l = e.floating.style;
                      l.setProperty('--radix-popper-available-width', `${n}px`),
                        l.setProperty('--radix-popper-available-height', `${r}px`),
                        l.setProperty('--radix-popper-anchor-width', `${o}px`),
                        l.setProperty('--radix-popper-anchor-height', `${i}px`);
                    },
                  }),
                  j && r4({ element: j, padding: s }),
                  of({ arrowWidth: k, arrowHeight: N }),
                  m && r5({ strategy: 'referenceHidden', ...A }),
                ],
              }),
              [I, z] = op(L),
              _ = eQ(g);
            eX(() => {
              M && _?.();
            }, [M, _]);
            let F = O.arrow?.x,
              $ = O.arrow?.y,
              W = O.arrow?.centerOffset !== 0,
              [H, B] = u.useState();
            return (
              eX(() => {
                y && B(window.getComputedStyle(y).zIndex);
              }, [y]),
              (0, a.jsx)('div', {
                ref: T.setFloating,
                'data-radix-popper-content-wrapper': '',
                style: {
                  ...D,
                  transform: M ? D.transform : 'translate(0, -200%)',
                  minWidth: 'max-content',
                  zIndex: H,
                  '--radix-popper-transform-origin': [
                    O.transformOrigin?.x,
                    O.transformOrigin?.y,
                  ].join(' '),
                  ...(O.hide?.referenceHidden && { visibility: 'hidden', pointerEvents: 'none' }),
                },
                dir: e.dir,
                children: (0, a.jsx)(oi, {
                  scope: n,
                  placedSide: I,
                  onArrowChange: E,
                  arrowX: F,
                  arrowY: $,
                  shouldHideArrow: W,
                  children: (0, a.jsx)(e5.div, {
                    'data-side': I,
                    'data-align': z,
                    ...v,
                    ref: w,
                    style: { ...v.style, animation: M ? void 0 : 'none' },
                  }),
                }),
              })
            );
          });
        oa.displayName = oo;
        var os = 'PopperArrow',
          ou = { top: 'bottom', right: 'left', bottom: 'top', left: 'right' },
          oc = u.forwardRef(function (e, t) {
            let { __scopePopper: n, ...r } = e,
              o = ol(os, n),
              i = ou[o.placedSide];
            return (0, a.jsx)('span', {
              ref: o.onArrowChange,
              style: {
                position: 'absolute',
                left: o.arrowX,
                top: o.arrowY,
                [i]: 0,
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
              children: (0, a.jsx)(r3, { ...r, ref: t, style: { ...r.style, display: 'block' } }),
            });
          });
        function od(e) {
          return null !== e;
        }
        oc.displayName = os;
        var of = e => ({
          name: 'transformOrigin',
          options: e,
          fn(t) {
            let { placement: n, rects: r, middlewareData: o } = t,
              i = o.arrow?.centerOffset !== 0,
              l = i ? 0 : e.arrowWidth,
              a = i ? 0 : e.arrowHeight,
              [s, u] = op(n),
              c = { start: '0%', center: '50%', end: '100%' }[u],
              d = (o.arrow?.x ?? 0) + l / 2,
              f = (o.arrow?.y ?? 0) + a / 2,
              p = '',
              m = '';
            return (
              'bottom' === s
                ? ((p = i ? c : `${d}px`), (m = `${-a}px`))
                : 'top' === s
                  ? ((p = i ? c : `${d}px`), (m = `${r.floating.height + a}px`))
                  : 'right' === s
                    ? ((p = `${-a}px`), (m = i ? c : `${f}px`))
                    : 'left' === s && ((p = `${r.floating.width + a}px`), (m = i ? c : `${f}px`)),
              { data: { x: p, y: m } }
            );
          },
        });
        function op(e) {
          let [t, n = 'center'] = e.split('-');
          return [t, n];
        }
        var om = u.forwardRef((e, t) =>
          (0, a.jsx)(e5.span, {
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
        om.displayName = 'VisuallyHidden';
        var oh = [' ', 'Enter', 'ArrowUp', 'ArrowDown'],
          og = [' ', 'Enter'],
          ov = 'Select',
          [ox, oy, ob] = (function (e) {
            let t = e + 'CollectionProvider',
              [n, r] = (function (e, t = []) {
                let n = [],
                  r = () => {
                    let t = n.map(e => u.createContext(e));
                    return function (n) {
                      let r = n?.[e] || t;
                      return u.useMemo(() => ({ [`__scope${e}`]: { ...n, [e]: r } }), [n, r]);
                    };
                  };
                return (
                  (r.scopeName = e),
                  [
                    function (t, r) {
                      let o = u.createContext(r),
                        i = n.length;
                      function l(t) {
                        let { scope: n, children: r, ...l } = t,
                          s = n?.[e][i] || o,
                          c = u.useMemo(() => l, Object.values(l));
                        return (0, a.jsx)(s.Provider, { value: c, children: r });
                      }
                      return (
                        (n = [...n, r]),
                        (l.displayName = t + 'Provider'),
                        [
                          l,
                          function (n, l) {
                            let a = l?.[e][i] || o,
                              s = u.useContext(a);
                            if (s) return s;
                            if (void 0 !== r) return r;
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
                          let r = n.reduce((t, { useScope: n, scopeName: r }) => {
                            let o = n(e)[`__scope${r}`];
                            return { ...t, ...o };
                          }, {});
                          return u.useMemo(() => ({ [`__scope${t.scopeName}`]: r }), [r]);
                        };
                      };
                      return (n.scopeName = t.scopeName), n;
                    })(r, ...t),
                  ]
                );
              })(t),
              [o, i] = n(t, { collectionRef: { current: null }, itemMap: new Map() }),
              l = e => {
                let { scope: t, children: n } = e,
                  r = u.useRef(null),
                  i = u.useRef(new Map()).current;
                return (0, a.jsx)(o, { scope: t, itemMap: i, collectionRef: r, children: n });
              };
            l.displayName = t;
            let s = e + 'CollectionSlot',
              c = u.forwardRef((e, t) => {
                let { scope: n, children: r } = e,
                  o = i(s, n),
                  l = (0, eq.e)(t, o.collectionRef);
                return (0, a.jsx)(e2.g7, { ref: l, children: r });
              });
            c.displayName = s;
            let d = e + 'CollectionItemSlot',
              f = 'data-radix-collection-item',
              p = u.forwardRef((e, t) => {
                let { scope: n, children: r, ...o } = e,
                  l = u.useRef(null),
                  s = (0, eq.e)(t, l),
                  c = i(d, n);
                return (
                  u.useEffect(
                    () => (c.itemMap.set(l, { ref: l, ...o }), () => void c.itemMap.delete(l))
                  ),
                  (0, a.jsx)(e2.g7, { [f]: '', ref: s, children: r })
                );
              });
            return (
              (p.displayName = d),
              [
                { Provider: l, Slot: c, ItemSlot: p },
                function (t) {
                  let n = i(e + 'CollectionConsumer', t);
                  return u.useCallback(() => {
                    let e = n.collectionRef.current;
                    if (!e) return [];
                    let t = Array.from(e.querySelectorAll(`[${f}]`));
                    return Array.from(n.itemMap.values()).sort(
                      (e, n) => t.indexOf(e.ref.current) - t.indexOf(n.ref.current)
                    );
                  }, [n.collectionRef, n.itemMap]);
                },
                r,
              ]
            );
          })(ov),
          [ow, oj] = eU(ov, [ob, r7]),
          oE = r7(),
          [oC, ok] = ow(ov),
          [oN, oS] = ow(ov),
          oP = e => {
            let {
                __scopeSelect: t,
                children: n,
                open: r,
                defaultOpen: o,
                onOpenChange: i,
                value: l,
                defaultValue: s,
                onValueChange: c,
                dir: d,
                name: f,
                autoComplete: p,
                disabled: m,
                required: h,
                form: g,
              } = e,
              v = oE(t),
              [x, y] = u.useState(null),
              [b, w] = u.useState(null),
              [j, E] = u.useState(!1),
              C = (function (e) {
                let t = u.useContext(nZ);
                return e || t || 'ltr';
              })(d),
              [k = !1, N] = e0({ prop: r, defaultProp: o, onChange: i }),
              [S, P] = e0({ prop: l, defaultProp: s, onChange: c }),
              R = u.useRef(null),
              A = !x || g || !!x.closest('form'),
              [T, D] = u.useState(new Set()),
              L = Array.from(T)
                .map(e => e.props.value)
                .join(';');
            return (0, a.jsx)(ot, {
              ...v,
              children: (0, a.jsxs)(oC, {
                required: h,
                scope: t,
                trigger: x,
                onTriggerChange: y,
                valueNode: b,
                onValueNodeChange: w,
                valueNodeHasChildren: j,
                onValueNodeHasChildrenChange: E,
                contentId: eJ(),
                value: S,
                onValueChange: P,
                open: k,
                onOpenChange: N,
                dir: C,
                triggerPointerDownPosRef: R,
                disabled: m,
                children: [
                  (0, a.jsx)(ox.Provider, {
                    scope: t,
                    children: (0, a.jsx)(oN, {
                      scope: e.__scopeSelect,
                      onNativeOptionAdd: u.useCallback(e => {
                        D(t => new Set(t).add(e));
                      }, []),
                      onNativeOptionRemove: u.useCallback(e => {
                        D(t => {
                          let n = new Set(t);
                          return n.delete(e), n;
                        });
                      }, []),
                      children: n,
                    }),
                  }),
                  A
                    ? (0, a.jsxs)(
                        o7,
                        {
                          'aria-hidden': !0,
                          required: h,
                          tabIndex: -1,
                          name: f,
                          autoComplete: p,
                          value: S,
                          onChange: e => P(e.target.value),
                          disabled: m,
                          form: g,
                          children: [
                            void 0 === S ? (0, a.jsx)('option', { value: '' }) : null,
                            Array.from(T),
                          ],
                        },
                        L
                      )
                    : null,
                ],
              }),
            });
          };
        oP.displayName = ov;
        var oR = 'SelectTrigger',
          oA = u.forwardRef((e, t) => {
            let { __scopeSelect: n, disabled: r = !1, ...o } = e,
              i = oE(n),
              l = ok(oR, n),
              s = l.disabled || r,
              c = (0, eq.e)(t, l.onTriggerChange),
              d = oy(n),
              f = u.useRef('touch'),
              [p, m, h] = o9(e => {
                let t = d().filter(e => !e.disabled),
                  n = t.find(e => e.value === l.value),
                  r = ie(t, e, n);
                void 0 !== r && l.onValueChange(r.value);
              }),
              g = e => {
                s || (l.onOpenChange(!0), h()),
                  e &&
                    (l.triggerPointerDownPosRef.current = {
                      x: Math.round(e.pageX),
                      y: Math.round(e.pageY),
                    });
              };
            return (0, a.jsx)(or, {
              asChild: !0,
              ...i,
              children: (0, a.jsx)(e5.button, {
                type: 'button',
                role: 'combobox',
                'aria-controls': l.contentId,
                'aria-expanded': l.open,
                'aria-required': l.required,
                'aria-autocomplete': 'none',
                dir: l.dir,
                'data-state': l.open ? 'open' : 'closed',
                disabled: s,
                'data-disabled': s ? '' : void 0,
                'data-placeholder': o8(l.value) ? '' : void 0,
                ...o,
                ref: c,
                onClick: eG(o.onClick, e => {
                  e.currentTarget.focus(), 'mouse' !== f.current && g(e);
                }),
                onPointerDown: eG(o.onPointerDown, e => {
                  f.current = e.pointerType;
                  let t = e.target;
                  t.hasPointerCapture(e.pointerId) && t.releasePointerCapture(e.pointerId),
                    0 === e.button &&
                      !1 === e.ctrlKey &&
                      'mouse' === e.pointerType &&
                      (g(e), e.preventDefault());
                }),
                onKeyDown: eG(o.onKeyDown, e => {
                  let t = '' !== p.current;
                  e.ctrlKey || e.altKey || e.metaKey || 1 !== e.key.length || m(e.key),
                    (!t || ' ' !== e.key) && oh.includes(e.key) && (g(), e.preventDefault());
                }),
              }),
            });
          });
        oA.displayName = oR;
        var oT = 'SelectValue',
          oD = u.forwardRef((e, t) => {
            let {
                __scopeSelect: n,
                className: r,
                style: o,
                children: i,
                placeholder: l = '',
                ...s
              } = e,
              u = ok(oT, n),
              { onValueNodeHasChildrenChange: c } = u,
              d = void 0 !== i,
              f = (0, eq.e)(t, u.onValueNodeChange);
            return (
              eX(() => {
                c(d);
              }, [c, d]),
              (0, a.jsx)(e5.span, {
                ...s,
                ref: f,
                style: { pointerEvents: 'none' },
                children: o8(u.value) ? (0, a.jsx)(a.Fragment, { children: l }) : i,
              })
            );
          });
        oD.displayName = oT;
        var oL = u.forwardRef((e, t) => {
          let { __scopeSelect: n, children: r, ...o } = e;
          return (0, a.jsx)(e5.span, { 'aria-hidden': !0, ...o, ref: t, children: r || '▼' });
        });
        oL.displayName = 'SelectIcon';
        var oM = e => (0, a.jsx)(ts, { asChild: !0, ...e });
        oM.displayName = 'SelectPortal';
        var oO = 'SelectContent',
          oI = u.forwardRef((e, t) => {
            let n = ok(oO, e.__scopeSelect),
              [r, o] = u.useState();
            return (eX(() => {
              o(new DocumentFragment());
            }, []),
            n.open)
              ? (0, a.jsx)(oF, { ...e, ref: t })
              : r
                ? e1.createPortal(
                    (0, a.jsx)(oz, {
                      scope: e.__scopeSelect,
                      children: (0, a.jsx)(ox.Slot, {
                        scope: e.__scopeSelect,
                        children: (0, a.jsx)('div', { children: e.children }),
                      }),
                    }),
                    r
                  )
                : null;
          });
        oI.displayName = oO;
        var [oz, o_] = ow(oO),
          oF = u.forwardRef((e, t) => {
            let {
                __scopeSelect: n,
                position: r = 'item-aligned',
                onCloseAutoFocus: o,
                onEscapeKeyDown: i,
                onPointerDownOutside: l,
                side: s,
                sideOffset: c,
                align: d,
                alignOffset: f,
                arrowPadding: p,
                collisionBoundary: m,
                collisionPadding: h,
                sticky: g,
                hideWhenDetached: v,
                avoidCollisions: x,
                ...y
              } = e,
              b = ok(oO, n),
              [w, j] = u.useState(null),
              [E, C] = u.useState(null),
              k = (0, eq.e)(t, e => j(e)),
              [N, S] = u.useState(null),
              [P, R] = u.useState(null),
              A = oy(n),
              [T, D] = u.useState(!1),
              L = u.useRef(!1);
            u.useEffect(() => {
              if (w) return t6(w);
            }, [w]),
              tf();
            let M = u.useCallback(
                e => {
                  let [t, ...n] = A().map(e => e.ref.current),
                    [r] = n.slice(-1),
                    o = document.activeElement;
                  for (let n of e)
                    if (
                      n === o ||
                      (n?.scrollIntoView({ block: 'nearest' }),
                      n === t && E && (E.scrollTop = 0),
                      n === r && E && (E.scrollTop = E.scrollHeight),
                      n?.focus(),
                      document.activeElement !== o)
                    )
                      return;
                },
                [A, E]
              ),
              O = u.useCallback(() => M([N, w]), [M, N, w]);
            u.useEffect(() => {
              T && O();
            }, [T, O]);
            let { onOpenChange: I, triggerPointerDownPosRef: z } = b;
            u.useEffect(() => {
              if (w) {
                let e = { x: 0, y: 0 },
                  t = t => {
                    e = {
                      x: Math.abs(Math.round(t.pageX) - (z.current?.x ?? 0)),
                      y: Math.abs(Math.round(t.pageY) - (z.current?.y ?? 0)),
                    };
                  },
                  n = n => {
                    e.x <= 10 && e.y <= 10 ? n.preventDefault() : w.contains(n.target) || I(!1),
                      document.removeEventListener('pointermove', t),
                      (z.current = null);
                  };
                return (
                  null !== z.current &&
                    (document.addEventListener('pointermove', t),
                    document.addEventListener('pointerup', n, { capture: !0, once: !0 })),
                  () => {
                    document.removeEventListener('pointermove', t),
                      document.removeEventListener('pointerup', n, { capture: !0 });
                  }
                );
              }
            }, [w, I, z]),
              u.useEffect(() => {
                let e = () => I(!1);
                return (
                  window.addEventListener('blur', e),
                  window.addEventListener('resize', e),
                  () => {
                    window.removeEventListener('blur', e), window.removeEventListener('resize', e);
                  }
                );
              }, [I]);
            let [_, F] = o9(e => {
                let t = A().filter(e => !e.disabled),
                  n = t.find(e => e.ref.current === document.activeElement),
                  r = ie(t, e, n);
                r && setTimeout(() => r.ref.current.focus());
              }),
              $ = u.useCallback(
                (e, t, n) => {
                  let r = !L.current && !n;
                  ((void 0 !== b.value && b.value === t) || r) && (S(e), r && (L.current = !0));
                },
                [b.value]
              ),
              W = u.useCallback(() => w?.focus(), [w]),
              H = u.useCallback(
                (e, t, n) => {
                  let r = !L.current && !n;
                  ((void 0 !== b.value && b.value === t) || r) && R(e);
                },
                [b.value]
              ),
              B = 'popper' === r ? oW : o$,
              K =
                B === oW
                  ? {
                      side: s,
                      sideOffset: c,
                      align: d,
                      alignOffset: f,
                      arrowPadding: p,
                      collisionBoundary: m,
                      collisionPadding: h,
                      sticky: g,
                      hideWhenDetached: v,
                      avoidCollisions: x,
                    }
                  : {};
            return (0, a.jsx)(oz, {
              scope: n,
              content: w,
              viewport: E,
              onViewportChange: C,
              itemRefCallback: $,
              selectedItem: N,
              onItemLeave: W,
              itemTextRefCallback: H,
              focusSelectedItem: O,
              selectedItemText: P,
              position: r,
              isPositioned: T,
              searchRef: _,
              children: (0, a.jsx)(tQ, {
                as: e2.g7,
                allowPinchZoom: !0,
                children: (0, a.jsx)(tn, {
                  asChild: !0,
                  trapped: b.open,
                  onMountAutoFocus: e => {
                    e.preventDefault();
                  },
                  onUnmountAutoFocus: eG(o, e => {
                    b.trigger?.focus({ preventScroll: !0 }), e.preventDefault();
                  }),
                  children: (0, a.jsx)(e6, {
                    asChild: !0,
                    disableOutsidePointerEvents: !0,
                    onEscapeKeyDown: i,
                    onPointerDownOutside: l,
                    onFocusOutside: e => e.preventDefault(),
                    onDismiss: () => b.onOpenChange(!1),
                    children: (0, a.jsx)(B, {
                      role: 'listbox',
                      id: b.contentId,
                      'data-state': b.open ? 'open' : 'closed',
                      dir: b.dir,
                      onContextMenu: e => e.preventDefault(),
                      ...y,
                      ...K,
                      onPlaced: () => D(!0),
                      ref: k,
                      style: {
                        display: 'flex',
                        flexDirection: 'column',
                        outline: 'none',
                        ...y.style,
                      },
                      onKeyDown: eG(y.onKeyDown, e => {
                        let t = e.ctrlKey || e.altKey || e.metaKey;
                        if (
                          ('Tab' === e.key && e.preventDefault(),
                          t || 1 !== e.key.length || F(e.key),
                          ['ArrowUp', 'ArrowDown', 'Home', 'End'].includes(e.key))
                        ) {
                          let t = A()
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
                          setTimeout(() => M(t)), e.preventDefault();
                        }
                      }),
                    }),
                  }),
                }),
              }),
            });
          });
        oF.displayName = 'SelectContentImpl';
        var o$ = u.forwardRef((e, t) => {
          let { __scopeSelect: n, onPlaced: r, ...o } = e,
            i = ok(oO, n),
            l = o_(oO, n),
            [s, c] = u.useState(null),
            [d, f] = u.useState(null),
            p = (0, eq.e)(t, e => f(e)),
            m = oy(n),
            h = u.useRef(!1),
            g = u.useRef(!0),
            { viewport: v, selectedItem: x, selectedItemText: y, focusSelectedItem: b } = l,
            w = u.useCallback(() => {
              if (i.trigger && i.valueNode && s && d && v && x && y) {
                let e = i.trigger.getBoundingClientRect(),
                  t = d.getBoundingClientRect(),
                  n = i.valueNode.getBoundingClientRect(),
                  o = y.getBoundingClientRect();
                if ('rtl' !== i.dir) {
                  let r = o.left - t.left,
                    i = n.left - r,
                    l = e.left - i,
                    a = e.width + l,
                    u = Math.max(a, t.width),
                    c = nY(i, [10, Math.max(10, window.innerWidth - 10 - u)]);
                  (s.style.minWidth = a + 'px'), (s.style.left = c + 'px');
                } else {
                  let r = t.right - o.right,
                    i = window.innerWidth - n.right - r,
                    l = window.innerWidth - e.right - i,
                    a = e.width + l,
                    u = Math.max(a, t.width),
                    c = nY(i, [10, Math.max(10, window.innerWidth - 10 - u)]);
                  (s.style.minWidth = a + 'px'), (s.style.right = c + 'px');
                }
                let l = m(),
                  a = window.innerHeight - 20,
                  u = v.scrollHeight,
                  c = window.getComputedStyle(d),
                  f = parseInt(c.borderTopWidth, 10),
                  p = parseInt(c.paddingTop, 10),
                  g = parseInt(c.borderBottomWidth, 10),
                  b = f + p + u + parseInt(c.paddingBottom, 10) + g,
                  w = Math.min(5 * x.offsetHeight, b),
                  j = window.getComputedStyle(v),
                  E = parseInt(j.paddingTop, 10),
                  C = parseInt(j.paddingBottom, 10),
                  k = e.top + e.height / 2 - 10,
                  N = x.offsetHeight / 2,
                  S = f + p + (x.offsetTop + N);
                if (S <= k) {
                  let e = l.length > 0 && x === l[l.length - 1].ref.current;
                  s.style.bottom = '0px';
                  let t = Math.max(
                    a - k,
                    N + (e ? C : 0) + (d.clientHeight - v.offsetTop - v.offsetHeight) + g
                  );
                  s.style.height = S + t + 'px';
                } else {
                  let e = l.length > 0 && x === l[0].ref.current;
                  s.style.top = '0px';
                  let t = Math.max(k, f + v.offsetTop + (e ? E : 0) + N);
                  (s.style.height = t + (b - S) + 'px'), (v.scrollTop = S - k + v.offsetTop);
                }
                (s.style.margin = '10px 0'),
                  (s.style.minHeight = w + 'px'),
                  (s.style.maxHeight = a + 'px'),
                  r?.(),
                  requestAnimationFrame(() => (h.current = !0));
              }
            }, [m, i.trigger, i.valueNode, s, d, v, x, y, i.dir, r]);
          eX(() => w(), [w]);
          let [j, E] = u.useState();
          eX(() => {
            d && E(window.getComputedStyle(d).zIndex);
          }, [d]);
          let C = u.useCallback(
            e => {
              e && !0 === g.current && (w(), b?.(), (g.current = !1));
            },
            [w, b]
          );
          return (0, a.jsx)(oH, {
            scope: n,
            contentWrapper: s,
            shouldExpandOnScrollRef: h,
            onScrollButtonChange: C,
            children: (0, a.jsx)('div', {
              ref: c,
              style: { display: 'flex', flexDirection: 'column', position: 'fixed', zIndex: j },
              children: (0, a.jsx)(e5.div, {
                ...o,
                ref: p,
                style: { boxSizing: 'border-box', maxHeight: '100%', ...o.style },
              }),
            }),
          });
        });
        o$.displayName = 'SelectItemAlignedPosition';
        var oW = u.forwardRef((e, t) => {
          let { __scopeSelect: n, align: r = 'start', collisionPadding: o = 10, ...i } = e,
            l = oE(n);
          return (0, a.jsx)(oa, {
            ...l,
            ...i,
            ref: t,
            align: r,
            collisionPadding: o,
            style: {
              boxSizing: 'border-box',
              ...i.style,
              '--radix-select-content-transform-origin': 'var(--radix-popper-transform-origin)',
              '--radix-select-content-available-width': 'var(--radix-popper-available-width)',
              '--radix-select-content-available-height': 'var(--radix-popper-available-height)',
              '--radix-select-trigger-width': 'var(--radix-popper-anchor-width)',
              '--radix-select-trigger-height': 'var(--radix-popper-anchor-height)',
            },
          });
        });
        oW.displayName = 'SelectPopperPosition';
        var [oH, oB] = ow(oO, {}),
          oK = 'SelectViewport',
          oV = u.forwardRef((e, t) => {
            let { __scopeSelect: n, nonce: r, ...o } = e,
              i = o_(oK, n),
              l = oB(oK, n),
              s = (0, eq.e)(t, i.onViewportChange),
              c = u.useRef(0);
            return (0, a.jsxs)(a.Fragment, {
              children: [
                (0, a.jsx)('style', {
                  dangerouslySetInnerHTML: {
                    __html:
                      '[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}',
                  },
                  nonce: r,
                }),
                (0, a.jsx)(ox.Slot, {
                  scope: n,
                  children: (0, a.jsx)(e5.div, {
                    'data-radix-select-viewport': '',
                    role: 'presentation',
                    ...o,
                    ref: s,
                    style: { position: 'relative', flex: 1, overflow: 'hidden auto', ...o.style },
                    onScroll: eG(o.onScroll, e => {
                      let t = e.currentTarget,
                        { contentWrapper: n, shouldExpandOnScrollRef: r } = l;
                      if (r?.current && n) {
                        let e = Math.abs(c.current - t.scrollTop);
                        if (e > 0) {
                          let r = window.innerHeight - 20,
                            o = Math.max(parseFloat(n.style.minHeight), parseFloat(n.style.height));
                          if (o < r) {
                            let i = o + e,
                              l = Math.min(r, i),
                              a = i - l;
                            (n.style.height = l + 'px'),
                              '0px' === n.style.bottom &&
                                ((t.scrollTop = a > 0 ? a : 0),
                                (n.style.justifyContent = 'flex-end'));
                          }
                        }
                      }
                      c.current = t.scrollTop;
                    }),
                  }),
                }),
              ],
            });
          });
        oV.displayName = oK;
        var oU = 'SelectGroup',
          [oq, oG] = ow(oU);
        u.forwardRef((e, t) => {
          let { __scopeSelect: n, ...r } = e,
            o = eJ();
          return (0, a.jsx)(oq, {
            scope: n,
            id: o,
            children: (0, a.jsx)(e5.div, { role: 'group', 'aria-labelledby': o, ...r, ref: t }),
          });
        }).displayName = oU;
        var oX = 'SelectLabel';
        u.forwardRef((e, t) => {
          let { __scopeSelect: n, ...r } = e,
            o = oG(oX, n);
          return (0, a.jsx)(e5.div, { id: o.id, ...r, ref: t });
        }).displayName = oX;
        var oY = 'SelectItem',
          [oZ, oJ] = ow(oY),
          oQ = u.forwardRef((e, t) => {
            let { __scopeSelect: n, value: r, disabled: o = !1, textValue: i, ...l } = e,
              s = ok(oY, n),
              c = o_(oY, n),
              d = s.value === r,
              [f, p] = u.useState(i ?? ''),
              [m, h] = u.useState(!1),
              g = (0, eq.e)(t, e => c.itemRefCallback?.(e, r, o)),
              v = eJ(),
              x = u.useRef('touch'),
              y = () => {
                o || (s.onValueChange(r), s.onOpenChange(!1));
              };
            if ('' === r)
              throw Error(
                'A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder.'
              );
            return (0, a.jsx)(oZ, {
              scope: n,
              value: r,
              disabled: o,
              textId: v,
              isSelected: d,
              onItemTextChange: u.useCallback(e => {
                p(t => t || (e?.textContent ?? '').trim());
              }, []),
              children: (0, a.jsx)(ox.ItemSlot, {
                scope: n,
                value: r,
                disabled: o,
                textValue: f,
                children: (0, a.jsx)(e5.div, {
                  role: 'option',
                  'aria-labelledby': v,
                  'data-highlighted': m ? '' : void 0,
                  'aria-selected': d && m,
                  'data-state': d ? 'checked' : 'unchecked',
                  'aria-disabled': o || void 0,
                  'data-disabled': o ? '' : void 0,
                  tabIndex: o ? void 0 : -1,
                  ...l,
                  ref: g,
                  onFocus: eG(l.onFocus, () => h(!0)),
                  onBlur: eG(l.onBlur, () => h(!1)),
                  onClick: eG(l.onClick, () => {
                    'mouse' !== x.current && y();
                  }),
                  onPointerUp: eG(l.onPointerUp, () => {
                    'mouse' === x.current && y();
                  }),
                  onPointerDown: eG(l.onPointerDown, e => {
                    x.current = e.pointerType;
                  }),
                  onPointerMove: eG(l.onPointerMove, e => {
                    (x.current = e.pointerType),
                      o
                        ? c.onItemLeave?.()
                        : 'mouse' === x.current && e.currentTarget.focus({ preventScroll: !0 });
                  }),
                  onPointerLeave: eG(l.onPointerLeave, e => {
                    e.currentTarget === document.activeElement && c.onItemLeave?.();
                  }),
                  onKeyDown: eG(l.onKeyDown, e => {
                    (c.searchRef?.current !== '' && ' ' === e.key) ||
                      (og.includes(e.key) && y(), ' ' === e.key && e.preventDefault());
                  }),
                }),
              }),
            });
          });
        oQ.displayName = oY;
        var o0 = 'SelectItemText',
          o1 = u.forwardRef((e, t) => {
            let { __scopeSelect: n, className: r, style: o, ...i } = e,
              l = ok(o0, n),
              s = o_(o0, n),
              c = oJ(o0, n),
              d = oS(o0, n),
              [f, p] = u.useState(null),
              m = (0, eq.e)(
                t,
                e => p(e),
                c.onItemTextChange,
                e => s.itemTextRefCallback?.(e, c.value, c.disabled)
              ),
              h = f?.textContent,
              g = u.useMemo(
                () =>
                  (0, a.jsx)(
                    'option',
                    { value: c.value, disabled: c.disabled, children: h },
                    c.value
                  ),
                [c.disabled, c.value, h]
              ),
              { onNativeOptionAdd: v, onNativeOptionRemove: x } = d;
            return (
              eX(() => (v(g), () => x(g)), [v, x, g]),
              (0, a.jsxs)(a.Fragment, {
                children: [
                  (0, a.jsx)(e5.span, { id: c.textId, ...i, ref: m }),
                  c.isSelected && l.valueNode && !l.valueNodeHasChildren
                    ? e1.createPortal(i.children, l.valueNode)
                    : null,
                ],
              })
            );
          });
        o1.displayName = o0;
        var o2 = 'SelectItemIndicator';
        u.forwardRef((e, t) => {
          let { __scopeSelect: n, ...r } = e;
          return oJ(o2, n).isSelected
            ? (0, a.jsx)(e5.span, { 'aria-hidden': !0, ...r, ref: t })
            : null;
        }).displayName = o2;
        var o5 = 'SelectScrollUpButton';
        u.forwardRef((e, t) => {
          let n = o_(o5, e.__scopeSelect),
            r = oB(o5, e.__scopeSelect),
            [o, i] = u.useState(!1),
            l = (0, eq.e)(t, r.onScrollButtonChange);
          return (
            eX(() => {
              if (n.viewport && n.isPositioned) {
                let e = function () {
                    i(t.scrollTop > 0);
                  },
                  t = n.viewport;
                return (
                  e(), t.addEventListener('scroll', e), () => t.removeEventListener('scroll', e)
                );
              }
            }, [n.viewport, n.isPositioned]),
            o
              ? (0, a.jsx)(o3, {
                  ...e,
                  ref: l,
                  onAutoScroll: () => {
                    let { viewport: e, selectedItem: t } = n;
                    e && t && (e.scrollTop = e.scrollTop - t.offsetHeight);
                  },
                })
              : null
          );
        }).displayName = o5;
        var o4 = 'SelectScrollDownButton';
        u.forwardRef((e, t) => {
          let n = o_(o4, e.__scopeSelect),
            r = oB(o4, e.__scopeSelect),
            [o, i] = u.useState(!1),
            l = (0, eq.e)(t, r.onScrollButtonChange);
          return (
            eX(() => {
              if (n.viewport && n.isPositioned) {
                let e = function () {
                    let e = t.scrollHeight - t.clientHeight;
                    i(Math.ceil(t.scrollTop) < e);
                  },
                  t = n.viewport;
                return (
                  e(), t.addEventListener('scroll', e), () => t.removeEventListener('scroll', e)
                );
              }
            }, [n.viewport, n.isPositioned]),
            o
              ? (0, a.jsx)(o3, {
                  ...e,
                  ref: l,
                  onAutoScroll: () => {
                    let { viewport: e, selectedItem: t } = n;
                    e && t && (e.scrollTop = e.scrollTop + t.offsetHeight);
                  },
                })
              : null
          );
        }).displayName = o4;
        var o3 = u.forwardRef((e, t) => {
          let { __scopeSelect: n, onAutoScroll: r, ...o } = e,
            i = o_('SelectScrollButton', n),
            l = u.useRef(null),
            s = oy(n),
            c = u.useCallback(() => {
              null !== l.current && (window.clearInterval(l.current), (l.current = null));
            }, []);
          return (
            u.useEffect(() => () => c(), [c]),
            eX(() => {
              let e = s().find(e => e.ref.current === document.activeElement);
              e?.ref.current?.scrollIntoView({ block: 'nearest' });
            }, [s]),
            (0, a.jsx)(e5.div, {
              'aria-hidden': !0,
              ...o,
              ref: t,
              style: { flexShrink: 0, ...o.style },
              onPointerDown: eG(o.onPointerDown, () => {
                null === l.current && (l.current = window.setInterval(r, 50));
              }),
              onPointerMove: eG(o.onPointerMove, () => {
                i.onItemLeave?.(), null === l.current && (l.current = window.setInterval(r, 50));
              }),
              onPointerLeave: eG(o.onPointerLeave, () => {
                c();
              }),
            })
          );
        });
        u.forwardRef((e, t) => {
          let { __scopeSelect: n, ...r } = e;
          return (0, a.jsx)(e5.div, { 'aria-hidden': !0, ...r, ref: t });
        }).displayName = 'SelectSeparator';
        var o6 = 'SelectArrow';
        function o8(e) {
          return '' === e || void 0 === e;
        }
        u.forwardRef((e, t) => {
          let { __scopeSelect: n, ...r } = e,
            o = oE(n),
            i = ok(o6, n),
            l = o_(o6, n);
          return i.open && 'popper' === l.position ? (0, a.jsx)(oc, { ...o, ...r, ref: t }) : null;
        }).displayName = o6;
        var o7 = u.forwardRef((e, t) => {
          let { value: n, ...r } = e,
            o = u.useRef(null),
            i = (0, eq.e)(t, o),
            l = (function (e) {
              let t = u.useRef({ value: e, previous: e });
              return u.useMemo(
                () => (
                  t.current.value !== e &&
                    ((t.current.previous = t.current.value), (t.current.value = e)),
                  t.current.previous
                ),
                [e]
              );
            })(n);
          return (
            u.useEffect(() => {
              let e = o.current,
                t = Object.getOwnPropertyDescriptor(
                  window.HTMLSelectElement.prototype,
                  'value'
                ).set;
              if (l !== n && t) {
                let r = new Event('change', { bubbles: !0 });
                t.call(e, n), e.dispatchEvent(r);
              }
            }, [l, n]),
            (0, a.jsx)(om, {
              asChild: !0,
              children: (0, a.jsx)('select', { ...r, ref: i, defaultValue: n }),
            })
          );
        });
        function o9(e) {
          let t = eQ(e),
            n = u.useRef(''),
            r = u.useRef(0),
            o = u.useCallback(
              e => {
                let o = n.current + e;
                t(o),
                  (function e(t) {
                    (n.current = t),
                      window.clearTimeout(r.current),
                      '' !== t && (r.current = window.setTimeout(() => e(''), 1e3));
                  })(o);
              },
              [t]
            ),
            i = u.useCallback(() => {
              (n.current = ''), window.clearTimeout(r.current);
            }, []);
          return u.useEffect(() => () => window.clearTimeout(r.current), []), [n, o, i];
        }
        function ie(e, t, n) {
          var r;
          let o = t.length > 1 && Array.from(t).every(e => e === t[0]) ? t[0] : t,
            i = ((r = Math.max(n ? e.indexOf(n) : -1, 0)), e.map((t, n) => e[(r + n) % e.length]));
          1 === o.length && (i = i.filter(e => e !== n));
          let l = i.find(e => e.textValue.toLowerCase().startsWith(o.toLowerCase()));
          return l !== n ? l : void 0;
        }
        o7.displayName = 'BubbleSelect';
        var it = ['color'],
          ir = (0, u.forwardRef)(function (e, t) {
            var n = e.color,
              r = (function (e, t) {
                if (null == e) return {};
                var n,
                  r,
                  o = {},
                  i = Object.keys(e);
                for (r = 0; r < i.length; r++) (n = i[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
                return o;
              })(e, it);
            return (0, u.createElement)(
              'svg',
              Object.assign(
                {
                  width: '15',
                  height: '15',
                  viewBox: '0 0 15 15',
                  fill: 'none',
                  xmlns: 'http://www.w3.org/2000/svg',
                },
                r,
                { ref: t }
              ),
              (0, u.createElement)('path', {
                d: 'M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z',
                fill: void 0 === n ? 'currentColor' : n,
                fillRule: 'evenodd',
                clipRule: 'evenodd',
              })
            );
          });
        function io() {
          let {
              language: e,
              setLanguage: t,
              handleRun: n,
              handleReset: r,
              isRunning: o,
              isLoadingConfig: i,
            } = eO(),
            [l, s] = (0, u.useState)([]),
            [c, d] = (0, u.useState)(!0),
            [f, p] = (0, u.useState)(null);
          return c || f
            ? (0, a.jsxs)('div', {
                className: 'flex justify-between items-center mb-4',
                children: [
                  c
                    ? (0, a.jsx)('div', {
                        className:
                          'animate-pulse bg-gray-200 dark:bg-gray-700 h-10 w-40 rounded-md',
                      })
                    : (0, a.jsxs)('div', { className: 'text-red-500', children: ['Error: ', f] }),
                  (0, a.jsxs)('div', {
                    className: 'space-x-2',
                    children: [
                      (0, a.jsxs)('button', {
                        disabled: !0,
                        className:
                          'px-4 py-2 text-sm font-medium text-white bg-green-400 rounded-md opacity-50 cursor-not-allowed',
                        children: [
                          (0, a.jsx)(eV, { className: 'inline-block mr-2 h-4 w-4' }),
                          ' Run',
                        ],
                      }),
                      (0, a.jsx)(nX, { onReset: r }),
                    ],
                  }),
                ],
              })
            : (0, a.jsxs)('div', {
                className:
                  'flex justify-center items-center bg-gray-200 dark:bg-gray-800 space-x-4 p-2',
                children: [
                  (0, a.jsxs)(oP, {
                    value: e,
                    onValueChange: t,
                    children: [
                      (0, a.jsxs)(oA, {
                        className:
                          'inline-flex items-center justify-center rounded-md px-3 h-10 gap-2 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 shadow-sm hover:bg-gray-100 dark:hover:bg-gray-600 focus:ring-2 focus:ring-blue-500 transition-all',
                        disabled: i || o,
                        children: [
                          (0, a.jsx)(oD, { placeholder: 'Select a language' }),
                          (0, a.jsx)(oL, {
                            className: 'text-gray-600 dark:text-gray-300',
                            children: (0, a.jsx)(ir, {}),
                          }),
                        ],
                      }),
                      (0, a.jsx)(oM, {
                        children: (0, a.jsx)(oI, {
                          className:
                            'bg-white dark:bg-gray-800 rounded-md shadow-lg overflow-hidden',
                          position: 'popper',
                          sideOffset: 5,
                          children: (0, a.jsx)(oV, {
                            className: 'p-2 max-h-56 overflow-y-auto',
                            children: l.map(e =>
                              (0, a.jsx)(
                                oQ,
                                {
                                  value: e.value,
                                  className:
                                    'text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-md px-3 py-2  transition-colors',
                                  children: (0, a.jsx)(o1, { children: e.label }),
                                },
                                e.value
                              )
                            ),
                          }),
                        }),
                      }),
                    ],
                  }),
                  (0, a.jsxs)('div', {
                    className: 'space-x-2',
                    children: [
                      (0, a.jsxs)('button', {
                        onClick: n,
                        disabled: o || i,
                        className: `px-4 py-2 text-sm font-medium text-white ${o || i ? 'bg-green-600 cursor-not-allowed' : 'bg-green-500 hover:bg-green-600'} rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500`,
                        children: [
                          (0, a.jsx)(eV, { className: 'inline-block mr-2 h-4 w-4' }),
                          o ? 'Running...' : 'Run',
                        ],
                      }),
                      (0, a.jsx)(nX, { onReset: r }),
                    ],
                  }),
                ],
              });
        }
        let ii = (0, e_.Z)('ExternalLink', [
            ['path', { d: 'M15 3h6v6', key: '1q9fwt' }],
            ['path', { d: 'M10 14 21 3', key: 'gplh6r' }],
            [
              'path',
              { d: 'M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6', key: 'a6xqqp' },
            ],
          ]),
          il = u.forwardRef(({ className: e, ...t }, n) =>
            (0, a.jsx)('div', {
              ref: n,
              className: (0, eT.cn)('rounded-lg border bg-card text-card-foreground shadow-sm', e),
              ...t,
            })
          );
        il.displayName = 'Card';
        let ia = u.forwardRef(({ className: e, ...t }, n) =>
          (0, a.jsx)('div', {
            ref: n,
            className: (0, eT.cn)('flex flex-col space-y-1.5 p-6', e),
            ...t,
          })
        );
        ia.displayName = 'CardHeader';
        let is = u.forwardRef(({ className: e, ...t }, n) =>
          (0, a.jsx)('div', {
            ref: n,
            className: (0, eT.cn)('text-2xl font-semibold leading-none tracking-tight', e),
            ...t,
          })
        );
        (is.displayName = 'CardTitle'),
          (u.forwardRef(({ className: e, ...t }, n) =>
            (0, a.jsx)('div', {
              ref: n,
              className: (0, eT.cn)('text-sm text-muted-foreground', e),
              ...t,
            })
          ).displayName = 'CardDescription');
        let iu = u.forwardRef(({ className: e, ...t }, n) =>
          (0, a.jsx)('div', { ref: n, className: (0, eT.cn)('p-6 pt-0', e), ...t })
        );
        iu.displayName = 'CardContent';
        let ic = u.forwardRef(({ className: e, ...t }, n) =>
          (0, a.jsx)('div', {
            ref: n,
            className: (0, eT.cn)('flex items-center p-6 pt-0', e),
            ...t,
          })
        );
        function id({ isPageLoaded: e }) {
          let [t, n] = (0, u.useState)(null);
          return t && e
            ? (0, a.jsx)('div', {
                className:
                  'fixed inset-0 bg-black/50 dark:bg-black/70 flex items-center justify-center z-50 p-4',
                children: (0, a.jsxs)(il, {
                  className:
                    'w-full max-w-[95%] sm:max-w-md md:max-w-lg lg:max-w-xl mx-auto bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100',
                  children: [
                    (0, a.jsx)(ia, {
                      children: (0, a.jsx)(is, {
                        className:
                          'flex justify-between items-center text-lg sm:text-xl md:text-2xl',
                        children: 'welcome' === t ? 'Developer Notes' : 'Deployment Issues',
                      }),
                    }),
                    (0, a.jsx)(iu, {
                      className: 'space-y-4 text-sm sm:text-base',
                      children:
                        'welcome' === t
                          ? (0, a.jsxs)(a.Fragment, {
                              children: [
                                (0, a.jsx)('p', {
                                  children:
                                    'Welcome to our online code editor! Here are some key features:',
                                }),
                                (0, a.jsxs)('ul', {
                                  className: 'list-disc list-inside space-y-2',
                                  children: [
                                    (0, a.jsx)('li', {
                                      children: 'Support for multiple programming languages',
                                    }),
                                    (0, a.jsx)('li', { children: 'Customizable themes' }),
                                    (0, a.jsx)('li', { children: 'Resizable layout' }),
                                    (0, a.jsx)('li', { children: 'URL based Code Sharing' }),
                                    (0, a.jsx)('li', {
                                      children: 'Real-time collaboration (coming soon)',
                                    }),
                                  ],
                                }),
                              ],
                            })
                          : (0, a.jsxs)(a.Fragment, {
                              children: [
                                (0, a.jsx)('p', {
                                  children:
                                    'Here are some known issues with the current deployment:',
                                }),
                                (0, a.jsxs)('ul', {
                                  className: 'list-disc list-outside ml-4 space-y-2',
                                  children: [
                                    (0, a.jsxs)('li', {
                                      children: [
                                        'The free tier of the hosting platform does not support ',
                                        (0, a.jsx)('strong', { children: 'Docker Compose' }),
                                        ', which prevents code execution. While there is a workaround available, it is suboptimal and non-optimized.',
                                      ],
                                    }),
                                    (0, a.jsxs)('li', {
                                      children: [
                                        'On some initial visits, the loader may not disappear even after the content has fully loaded. This issue arises from a bug in the ',
                                        (0, a.jsx)('strong', { children: 'monaco-editor/react' }),
                                        ' library.',
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            }),
                    }),
                    (0, a.jsx)(ic, {
                      className:
                        'flex flex-col sm:flex-row justify-between space-y-2 sm:space-y-0 sm:space-x-2 pt-4',
                      children:
                        'welcome' === t
                          ? (0, a.jsx)(ez.z, {
                              onClick: () => {
                                n('directions');
                                let e = new Date().getTime();
                                localStorage.setItem('devNotesExpiration', (e + 864e5).toString());
                              },
                              className:
                                'w-full bg-blue-600 hover:bg-blue-700 text-white dark:bg-blue-500 dark:hover:bg-blue-600 text-sm sm:text-base',
                              children: 'Got it!',
                            })
                          : (0, a.jsxs)(a.Fragment, {
                              children: [
                                (0, a.jsx)(ez.z, {
                                  onClick: () => {
                                    n(null);
                                  },
                                  className:
                                    'w-full bg-green-600 text-white hover:bg-green-700 dark:bg-green-500 dark:hover:bg-green-600 text-sm sm:text-base',
                                  children: 'Ready! Action!',
                                }),
                                (0, a.jsxs)(ez.z, {
                                  variant: 'outline',
                                  onClick: () =>
                                    window.open(
                                      'https://github.com/yourusername/your-repo',
                                      '_blank'
                                    ),
                                  className:
                                    'w-full flex items-center justify-center bg-gray-200 hover:bg-gray-300 text-gray-800 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-gray-200 text-sm sm:text-base',
                                  children: [
                                    'Show me the solution ',
                                    (0, a.jsx)(ii, { className: 'ml-2 h-4 w-4' }),
                                  ],
                                }),
                              ],
                            }),
                    }),
                  ],
                }),
              })
            : null;
        }
        function ip() {
          let [e, t] = (0, u.useState)(!1);
          return (0, a.jsxs)(eM, {
            children: [
              (0, a.jsxs)('main', {
                className: 'flex flex-col min-h-full bg-gray-200 dark:bg-gray-800',
                children: [(0, a.jsx)(io, {}), (0, a.jsx)(eK, {}), (0, a.jsx)(s, {})],
              }),
              (0, a.jsx)(id, { isPageLoaded: e }),
            ],
          });
        }
        ic.displayName = 'CardFooter';
      },
      8466: (e, t, n) => {
        'use strict';
        n.d(t, { default: () => f });
        var r = n(6493),
          o = n(5805),
          i = n(2479),
          l = n(4766),
          a = n(8113),
          s = n(3606),
          u = n(3716);
        let c = ({ x: e, y: t, radius: n, color: o }) =>
          (0, r.jsx)(u.E.circle, { cx: e, cy: t, r: n, fill: o });
        function d() {
          let [e, t] = (0, s.useState)([]),
            [n, o] = (0, s.useState)(!1),
            i = (0, s.useRef)(null);
          return (0, r.jsxs)(u.E.div, {
            ref: i,
            className: 'relative cursor-pointer',
            onHoverStart: () => o(!0),
            onHoverEnd: () => o(!1),
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            transition: { duration: 0.5 },
            children: [
              (0, r.jsx)('svg', {
                width: '200',
                height: '50',
                className: 'absolute top-0 left-0',
                children: e.map(e => (0, r.jsx)(c, { ...e }, e.id)),
              }),
              (0, r.jsx)(u.E.div, {
                className: 'relative z-10 text-4xl font-bold',
                style: {
                  background: 'linear-gradient(135deg, #00FFFF, #0080FF)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                },
                children: 'KODEX',
              }),
            ],
          });
        }
        function f() {
          let { theme: e, setTheme: t } = (0, o.F)();
          return (0, r.jsx)('header', {
            className:
              'bg-background/20 backdrop-blur-sm border-b border-border sticky top-0 z-10 shadow-md',
            children: (0, r.jsxs)('div', {
              className: 'container mx-auto flex justify-between items-center py-3 px-4',
              children: [
                (0, r.jsx)(d, {}),
                (0, r.jsxs)(a.z, {
                  variant: 'outline',
                  size: 'icon',
                  onClick: () => t('dark' === e ? 'light' : 'dark'),
                  className:
                    'bg-transparent border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-gray-900',
                  children: [
                    'dark' === e
                      ? (0, r.jsx)(i.Z, { className: 'h-[1.2rem] w-[1.2rem]' })
                      : (0, r.jsx)(l.Z, { className: 'h-[1.2rem] w-[1.2rem]' }),
                    (0, r.jsx)('span', { className: 'sr-only', children: 'Toggle theme' }),
                  ],
                }),
              ],
            }),
          });
        }
      },
      8113: (e, t, n) => {
        'use strict';
        n.d(t, { z: () => u });
        var r = n(6493),
          o = n(3606),
          i = n(6245),
          l = n(8917),
          a = n(4773);
        let s = (0, l.j)(
            'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0',
            {
              variants: {
                variant: {
                  default: 'bg-primary text-primary-foreground hover:bg-primary/90',
                  destructive: 'bg-destructive text-destructive-foreground hover:bg-destructive/90',
                  outline:
                    'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
                  secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
                  ghost: 'hover:bg-accent hover:text-accent-foreground',
                  link: 'text-primary underline-offset-4 hover:underline',
                },
                size: {
                  default: 'h-10 px-4 py-2',
                  sm: 'h-9 rounded-md px-3',
                  lg: 'h-11 rounded-md px-8',
                  icon: 'h-10 w-10',
                },
              },
              defaultVariants: { variant: 'default', size: 'default' },
            }
          ),
          u = o.forwardRef(({ className: e, variant: t, size: n, asChild: o = !1, ...l }, u) => {
            let c = o ? i.g7 : 'button';
            return (0, r.jsx)(c, {
              className: (0, a.cn)(s({ variant: t, size: n, className: e })),
              ref: u,
              ...l,
            });
          });
        u.displayName = 'Button';
      },
      9896: (e, t, n) => {
        'use strict';
        n.d(t, { ThemeProvider: () => i });
        var r = n(6493),
          o = n(5805);
        function i({ children: e, ...t }) {
          return (0, r.jsx)(o.f, { ...t, children: e });
        }
      },
      4773: (e, t, n) => {
        'use strict';
        n.d(t, { cn: () => i });
        var r = n(6307),
          o = n(8132);
        function i(...e) {
          return (0, o.m6)((0, r.W)(e));
        }
      },
      934: (e, t, n) => {
        'use strict';
        n.r(t), n.d(t, { default: () => u, metadata: () => s });
        var r = n(7705),
          o = n(7686),
          i = n.n(o);
        n(5023);
        var l = n(2802),
          a = n(8173);
        let s = {
          title: 'Kodex - Online Code Editor',
          description:
            'A powerful online code editor with support for multiple languages and themes.',
        };
        async function u({ children: e }) {
          return (0, r.jsx)('html', {
            lang: 'en',
            suppressHydrationWarning: !0,
            children: (0, r.jsx)('body', {
              className: `${i().className} flex flex-col h-screen scrollbar-custom`,
              children: (0, r.jsxs)(a.ThemeProvider, {
                attribute: 'class',
                defaultTheme: 'system',
                enableSystem: !0,
                children: [(0, r.jsx)(l.default, {}), e],
              }),
            }),
          });
        }
      },
      6044: (e, t, n) => {
        'use strict';
        n.r(t), n.d(t, { default: () => r });
        let r = (0, n(8105).registerClientReference)(
          function () {
            throw Error(
              'Attempted to call the default export of "/home/kindguy/Desktop/WebDev/Kodex-main/kodex/src/app/page.js" from the server, but it\'s on the client. It\'s not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.'
            );
          },
          '/home/kindguy/Desktop/WebDev/Kodex-main/kodex/src/app/page.js',
          'default'
        );
      },
      2802: (e, t, n) => {
        'use strict';
        n.d(t, { default: () => r });
        let r = (0, n(8105).registerClientReference)(
          function () {
            throw Error(
              'Attempted to call the default export of "/home/kindguy/Desktop/WebDev/Kodex-main/kodex/src/components/Header/Header.js" from the server, but it\'s on the client. It\'s not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.'
            );
          },
          '/home/kindguy/Desktop/WebDev/Kodex-main/kodex/src/components/Header/Header.js',
          'default'
        );
      },
      8173: (e, t, n) => {
        'use strict';
        n.d(t, { ThemeProvider: () => r });
        let r = (0, n(8105).registerClientReference)(
          function () {
            throw Error(
              "Attempted to call ThemeProvider() from the server but ThemeProvider is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component."
            );
          },
          '/home/kindguy/Desktop/WebDev/Kodex-main/kodex/src/context/ThemeProvider.js',
          'ThemeProvider'
        );
      },
      5023: () => {},
    });
  var t = require('../webpack-runtime.js');
  t.C(e);
  var n = e => t((t.s = e)),
    r = t.X(0, [571], () => n(5834));
  module.exports = r;
})();
