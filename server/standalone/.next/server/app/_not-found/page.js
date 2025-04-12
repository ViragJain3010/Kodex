(() => {
  var e = {};
  (e.id = 409),
    (e.ids = [409]),
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
      2532: (e, r, t) => {
        'use strict';
        t.r(r),
          t.d(r, {
            GlobalError: () => i.a,
            __next_app__: () => u,
            pages: () => c,
            routeModule: () => m,
            tree: () => l,
          });
        var n = t(9442),
          o = t(42),
          s = t(8190),
          i = t.n(s),
          a = t(3289),
          d = {};
        for (let e in a)
          0 >
            ['default', 'tree', 'pages', 'GlobalError', '__next_app__', 'routeModule'].indexOf(e) &&
            (d[e] = () => a[e]);
        t.d(r, d);
        let l = [
            '',
            {
              children: [
                '/_not-found',
                {
                  children: [
                    '__PAGE__',
                    {},
                    {
                      page: [
                        () => Promise.resolve().then(t.t.bind(t, 6042, 23)),
                        'next/dist/client/components/not-found-error',
                      ],
                    },
                  ],
                },
                {},
              ],
            },
            {
              layout: [
                () => Promise.resolve().then(t.bind(t, 934)),
                '/home/kindguy/Desktop/WebDev/Kodex-main/kodex/src/app/layout.js',
              ],
              'not-found': [
                () => Promise.resolve().then(t.t.bind(t, 6042, 23)),
                'next/dist/client/components/not-found-error',
              ],
            },
          ],
          c = [],
          u = { require: t, loadChunk: () => Promise.resolve() },
          m = new n.AppPageRouteModule({
            definition: {
              kind: o.RouteKind.APP_PAGE,
              page: '/_not-found/page',
              pathname: '/_not-found',
              bundlePath: '',
              filename: '',
              appPaths: [],
            },
            userland: { loaderTree: l },
          });
      },
      9784: (e, r, t) => {
        Promise.resolve().then(t.t.bind(t, 6472, 23)),
          Promise.resolve().then(t.t.bind(t, 2461, 23)),
          Promise.resolve().then(t.t.bind(t, 8190, 23)),
          Promise.resolve().then(t.t.bind(t, 5282, 23)),
          Promise.resolve().then(t.t.bind(t, 6613, 23)),
          Promise.resolve().then(t.t.bind(t, 5486, 23)),
          Promise.resolve().then(t.t.bind(t, 8825, 23));
      },
      2184: (e, r, t) => {
        Promise.resolve().then(t.t.bind(t, 2144, 23)),
          Promise.resolve().then(t.t.bind(t, 2302, 23)),
          Promise.resolve().then(t.t.bind(t, 3582, 23)),
          Promise.resolve().then(t.t.bind(t, 9587, 23)),
          Promise.resolve().then(t.t.bind(t, 5329, 23)),
          Promise.resolve().then(t.t.bind(t, 599, 23)),
          Promise.resolve().then(t.t.bind(t, 2118, 23));
      },
      7139: (e, r, t) => {
        Promise.resolve().then(t.bind(t, 2802)), Promise.resolve().then(t.bind(t, 8173));
      },
      5944: (e, r, t) => {
        Promise.resolve().then(t.bind(t, 8466)), Promise.resolve().then(t.bind(t, 9896));
      },
      8466: (e, r, t) => {
        'use strict';
        t.d(r, { default: () => m });
        var n = t(6493),
          o = t(5805),
          s = t(2479),
          i = t(4766),
          a = t(8113),
          d = t(3606),
          l = t(3716);
        let c = ({ x: e, y: r, radius: t, color: o }) =>
          (0, n.jsx)(l.E.circle, { cx: e, cy: r, r: t, fill: o });
        function u() {
          let [e, r] = (0, d.useState)([]),
            [t, o] = (0, d.useState)(!1),
            s = (0, d.useRef)(null);
          return (0, n.jsxs)(l.E.div, {
            ref: s,
            className: 'relative cursor-pointer',
            onHoverStart: () => o(!0),
            onHoverEnd: () => o(!1),
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            transition: { duration: 0.5 },
            children: [
              (0, n.jsx)('svg', {
                width: '200',
                height: '50',
                className: 'absolute top-0 left-0',
                children: e.map(e => (0, n.jsx)(c, { ...e }, e.id)),
              }),
              (0, n.jsx)(l.E.div, {
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
        function m() {
          let { theme: e, setTheme: r } = (0, o.F)();
          return (0, n.jsx)('header', {
            className:
              'bg-background/20 backdrop-blur-sm border-b border-border sticky top-0 z-10 shadow-md',
            children: (0, n.jsxs)('div', {
              className: 'container mx-auto flex justify-between items-center py-3 px-4',
              children: [
                (0, n.jsx)(u, {}),
                (0, n.jsxs)(a.z, {
                  variant: 'outline',
                  size: 'icon',
                  onClick: () => r('dark' === e ? 'light' : 'dark'),
                  className:
                    'bg-transparent border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-gray-900',
                  children: [
                    'dark' === e
                      ? (0, n.jsx)(s.Z, { className: 'h-[1.2rem] w-[1.2rem]' })
                      : (0, n.jsx)(i.Z, { className: 'h-[1.2rem] w-[1.2rem]' }),
                    (0, n.jsx)('span', { className: 'sr-only', children: 'Toggle theme' }),
                  ],
                }),
              ],
            }),
          });
        }
      },
      8113: (e, r, t) => {
        'use strict';
        t.d(r, { z: () => l });
        var n = t(6493),
          o = t(3606),
          s = t(6245),
          i = t(8917),
          a = t(4773);
        let d = (0, i.j)(
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
          l = o.forwardRef(({ className: e, variant: r, size: t, asChild: o = !1, ...i }, l) => {
            let c = o ? s.g7 : 'button';
            return (0, n.jsx)(c, {
              className: (0, a.cn)(d({ variant: r, size: t, className: e })),
              ref: l,
              ...i,
            });
          });
        l.displayName = 'Button';
      },
      9896: (e, r, t) => {
        'use strict';
        t.d(r, { ThemeProvider: () => s });
        var n = t(6493),
          o = t(5805);
        function s({ children: e, ...r }) {
          return (0, n.jsx)(o.f, { ...r, children: e });
        }
      },
      4773: (e, r, t) => {
        'use strict';
        t.d(r, { cn: () => s });
        var n = t(6307),
          o = t(8132);
        function s(...e) {
          return (0, o.m6)((0, n.W)(e));
        }
      },
      934: (e, r, t) => {
        'use strict';
        t.r(r), t.d(r, { default: () => l, metadata: () => d });
        var n = t(7705),
          o = t(7686),
          s = t.n(o);
        t(5023);
        var i = t(2802),
          a = t(8173);
        let d = {
          title: 'Kodex - Online Code Editor',
          description:
            'A powerful online code editor with support for multiple languages and themes.',
        };
        async function l({ children: e }) {
          return (0, n.jsx)('html', {
            lang: 'en',
            suppressHydrationWarning: !0,
            children: (0, n.jsx)('body', {
              className: `${s().className} flex flex-col h-screen scrollbar-custom`,
              children: (0, n.jsxs)(a.ThemeProvider, {
                attribute: 'class',
                defaultTheme: 'system',
                enableSystem: !0,
                children: [(0, n.jsx)(i.default, {}), e],
              }),
            }),
          });
        }
      },
      2802: (e, r, t) => {
        'use strict';
        t.d(r, { default: () => n });
        let n = (0, t(8105).registerClientReference)(
          function () {
            throw Error(
              'Attempted to call the default export of "/home/kindguy/Desktop/WebDev/Kodex-main/kodex/src/components/Header/Header.js" from the server, but it\'s on the client. It\'s not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.'
            );
          },
          '/home/kindguy/Desktop/WebDev/Kodex-main/kodex/src/components/Header/Header.js',
          'default'
        );
      },
      8173: (e, r, t) => {
        'use strict';
        t.d(r, { ThemeProvider: () => n });
        let n = (0, t(8105).registerClientReference)(
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
  var r = require('../../webpack-runtime.js');
  r.C(e);
  var t = e => r((r.s = e)),
    n = r.X(0, [571], () => t(2532));
  module.exports = n;
})();
