(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [185],
  {
    3527: (e, r, t) => {
      Promise.resolve().then(t.t.bind(t, 8385, 23)),
        Promise.resolve().then(t.t.bind(t, 3275, 23)),
        Promise.resolve().then(t.bind(t, 1848)),
        Promise.resolve().then(t.bind(t, 427));
    },
    1848: (e, r, t) => {
      'use strict';
      t.d(r, { default: () => m });
      var n = t(7437),
        a = t(9512),
        s = t(8296),
        i = t(2699),
        o = t(9733),
        d = t(2265),
        l = t(9591);
      let c = e => {
        let { x: r, y: t, radius: a, color: s } = e;
        return (0, n.jsx)(l.E.circle, { cx: r, cy: t, r: a, fill: s });
      };
      function u() {
        let [e, r] = (0, d.useState)([]),
          [t, a] = (0, d.useState)(!1),
          s = (0, d.useRef)(null);
        return (
          (0, d.useEffect)(() => {
            (() => {
              let e = [];
              for (let r = 0; r < 10 + 20 * Math.random(); r++)
                e.push({
                  id: r,
                  x: 200 * Math.random(),
                  y: 50 * Math.random(),
                  radius: 2 * Math.random() + 1,
                  color: r % 2 == 0 ? '#00FFFF' : '#0080FF',
                  velocity: { x: (Math.random() - 0.5) * 2, y: (Math.random() - 0.5) * 2 },
                });
              r(e);
            })();
          }, []),
          (0, d.useEffect)(() => {
            let e;
            let n = () => {
              r(e =>
                e.map(e => {
                  let { x: r, y: n, velocity: a } = e;
                  return (
                    (r += a.x * (t ? 2 : 1)),
                    (n += a.y * (t ? 2 : 1)),
                    (r < 0 || r > 150) && (a.x *= -1),
                    (n < 0 || n > 50) && (a.y *= -1),
                    { ...e, x: r, y: n, velocity: a }
                  );
                })
              ),
                (e = requestAnimationFrame(n));
            };
            return (
              n(),
              () => {
                cancelAnimationFrame(e);
              }
            );
          }, [t]),
          (0, n.jsxs)(l.E.div, {
            ref: s,
            className: 'relative cursor-pointer',
            onHoverStart: () => a(!0),
            onHoverEnd: () => a(!1),
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
          })
        );
      }
      function m() {
        let { theme: e, setTheme: r } = (0, a.F)();
        return (0, n.jsx)('header', {
          className:
            'bg-background/20 backdrop-blur-sm border-b border-border sticky top-0 z-10 shadow-md',
          children: (0, n.jsxs)('div', {
            className: 'container mx-auto flex justify-between items-center py-3 px-4',
            children: [
              (0, n.jsx)(u, {}),
              (0, n.jsxs)(o.z, {
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
    9733: (e, r, t) => {
      'use strict';
      t.d(r, { z: () => l });
      var n = t(7437),
        a = t(2265),
        s = t(1538),
        i = t(2218),
        o = t(9354);
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
        l = a.forwardRef((e, r) => {
          let { className: t, variant: a, size: i, asChild: l = !1, ...c } = e,
            u = l ? s.g7 : 'button';
          return (0, n.jsx)(u, {
            className: (0, o.cn)(d({ variant: a, size: i, className: t })),
            ref: r,
            ...c,
          });
        });
      l.displayName = 'Button';
    },
    427: (e, r, t) => {
      'use strict';
      t.d(r, { ThemeProvider: () => s });
      var n = t(7437),
        a = t(9512);
      function s(e) {
        let { children: r, ...t } = e;
        return (0, n.jsx)(a.f, { ...t, children: r });
      }
    },
    9354: (e, r, t) => {
      'use strict';
      t.d(r, { cn: () => s });
      var n = t(4839),
        a = t(6164);
      function s() {
        for (var e = arguments.length, r = Array(e), t = 0; t < e; t++) r[t] = arguments[t];
        return (0, a.m6)((0, n.W)(r));
      }
    },
    3275: () => {},
  },
  e => {
    var r = r => e((e.s = r));
    e.O(0, [42, 950, 345, 130, 215, 744], () => r(3527)), (_N_E = e.O());
  },
]);
