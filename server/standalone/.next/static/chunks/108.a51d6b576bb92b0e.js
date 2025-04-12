'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [108],
  {
    9108: (e, l, n) => {
      n.r(l), n.d(l, { default: () => t });
      var a = n(7437),
        d = n(7818),
        s = n(5898),
        i = n(2265);
      let r = (0, d.default)(() => n.e(270).then(n.bind(n, 7270)), {
        loadableGenerated: { webpack: () => [7270] },
        ssr: !1,
      });
      function t(e) {
        let { onLoad: l } = e,
          { language: n, code: d, setCode: t, isLoadingConfig: o } = (0, s.j)();
        return ((0, i.useEffect)(() => {
          l();
        }, [l]),
        o)
          ? (0, a.jsx)('div', {
              className: 'flex flex-col h-full',
              children: (0, a.jsx)('div', {
                className: 'flex-1 border rounded-md overflow-hidden bg-gray-900 animate-pulse',
                children: (0, a.jsxs)('div', {
                  className: 'h-full w-full flex items-center justify-center text-gray-400',
                  children: ['Loading ', n, ' configuration...'],
                }),
              }),
            })
          : (0, a.jsx)('div', {
              className: 'flex flex-col h-full',
              children: (0, a.jsx)('div', {
                className: 'flex-1 border rounded-md overflow-hidden',
                children: (0, a.jsx)(r, {
                  height: '100%',
                  language: n,
                  value: d,
                  theme: 'vs-dark',
                  onChange: t,
                  onMount: l,
                  options: {
                    minimap: { enabled: !1 },
                    fontSize: 14,
                    lineNumbers: 'on',
                    roundedSelection: !1,
                    scrollBeyondLastLine: !1,
                    readOnly: !1,
                    automaticLayout: !0,
                  },
                }),
              }),
            });
      }
    },
  },
]);
