(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [931],
  {
    9537: (e, r, t) => {
      Promise.resolve().then(t.bind(t, 3849));
    },
    3849: (e, r, t) => {
      'use strict';
      t.r(r), t.d(r, { default: () => F });
      var a = t(7437);
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
      var l = t(2265),
        n = t(1505),
        o = t(7818),
        i = t(9354);
      let d = l.forwardRef((e, r) => {
        let { className: t, ...s } = e;
        return (0, a.jsx)('textarea', {
          className: (0, i.cn)(
            'flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
            t
          ),
          ref: r,
          ...s,
        });
      });
      d.displayName = 'Textarea';
      var c = t(5898);
      function u() {
        let { input: e, setInput: r } = (0, c.j)();
        return (0, a.jsxs)('div', {
          className: 'flex flex-col h-full',
          children: [
            (0, a.jsx)('h2', { className: 'text-lg font-semibold mb-4', children: 'Input' }),
            (0, a.jsx)(d, {
              placeholder: 'Enter input here...',
              className: 'flex-1 resize-none',
              value: e,
              onChange: e => r(e.target.value),
            }),
          ],
        });
      }
      var x = t(9733),
        g = t(2468),
        h = t(9072);
      function m() {
        let { output: e } = (0, c.j)(),
          [r, t] = (0, l.useState)(!1),
          s = async () => {
            try {
              await navigator.clipboard.writeText(e), t(!0), setTimeout(() => t(!1), 2e3);
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
                (0, a.jsx)(x.z, {
                  variant: 'outline',
                  size: 'sm',
                  onClick: s,
                  disabled: !e,
                  className: 'transition-all duration-300 ease-in-out '.concat(
                    r ? 'bg-green-500 text-white' : '',
                    ' hover:bg-opacity-90 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-700 disabled:opacity-50 disabled:cursor-not-allowed'
                  ),
                  children: r
                    ? (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)(g.Z, { className: 'h-4 w-4 mr-2' }), 'Copied'],
                      })
                    : (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)(h.Z, { className: 'h-4 w-4 mr-2' }), 'Copy'],
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
      let f = () =>
          (0, a.jsx)('div', {
            className: 'fixed inset-0 z-50 flex items-center justify-center bg-background',
            children: (0, a.jsx)('div', {
              className: 'animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-primary',
              children: ' ',
            }),
          }),
        b = (0, o.default)(() => t.e(108).then(t.bind(t, 9108)), {
          loadableGenerated: { webpack: () => [9108] },
          ssr: !1,
        });
      function p() {
        let [e, r] = (0, l.useState)(50),
          [t, s] = (0, l.useState)(50),
          [o, i] = (0, l.useState)(!0),
          d = (0, l.useCallback)(e => {
            r(e[0]);
          }, []),
          c = (0, l.useCallback)(e => {
            s(e[0]);
          }, []);
        return (
          (0, l.useEffect)(() => {
            let e = setTimeout(() => {
              i(!1);
            }, 100);
            return () => clearTimeout(e);
          }, []),
          (0, a.jsxs)(a.Fragment, {
            children: [
              (0, a.jsx)('div', {
                className: 'hidden md:block h-full rounded-2xl p-1',
                children: (0, a.jsxs)(n.eh, {
                  direction: 'horizontal',
                  onLayout: d,
                  children: [
                    (0, a.jsx)(n.s_, {
                      defaultSize: e,
                      minSize: 20,
                      className: 'rounded-2xl',
                      children: (0, a.jsx)('div', {
                        className: 'h-full p-4 bg-background text-foreground overflow-auto',
                        children: o ? (0, a.jsx)(f, {}) : (0, a.jsx)(b, { onLoad: () => i(!1) }),
                      }),
                    }),
                    (0, a.jsx)(n.OT, {
                      className:
                        'w-2 dark:bg-muted dark:hover:bg-gray-600 bg-gray-200 hover:bg-gray-300 transition-colors flex items-center justify-center rounded-xl group',
                      children: (0, a.jsx)('div', {
                        className:
                          'w-1 h-16 bg-gray-600 rounded-2xl group-hover:bg-blue-600 dark:group-hover:bg-green-500 transition-colors',
                      }),
                    }),
                    (0, a.jsx)(n.s_, {
                      defaultSize: 100 - e,
                      minSize: 20,
                      children: (0, a.jsxs)(n.eh, {
                        direction: 'vertical',
                        onLayout: c,
                        children: [
                          (0, a.jsx)(n.s_, {
                            defaultSize: t,
                            minSize: 20,
                            className: 'rounded-2xl',
                            children: (0, a.jsx)('div', {
                              className: 'h-full p-4 bg-background text-foreground overflow-auto',
                              children: (0, a.jsx)(u, {}),
                            }),
                          }),
                          (0, a.jsx)(n.OT, {
                            className:
                              'h-2 dark:bg-muted dark:hover:bg-gray-600 bg-gray-200 hover:bg-gray-300 transition-colors flex align-middle rounded-xl items-center justify-center group',
                            children: (0, a.jsx)('div', {
                              className:
                                'w-16 h-1 bg-gray-600 rounded-2xl group-hover:bg-blue-600 dark:group-hover:bg-green-500 transition-colors',
                            }),
                          }),
                          (0, a.jsx)(n.s_, {
                            defaultSize: 100 - t,
                            minSize: 20,
                            className: 'rounded-2xl',
                            children: (0, a.jsx)('div', {
                              className: 'h-full p-4 bg-background text-foreground overflow-auto',
                              children: (0, a.jsx)(m, {}),
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
                      children: o ? (0, a.jsx)(f, {}) : (0, a.jsx)(b, { onLoad: () => i(!1) }),
                    }),
                    (0, a.jsx)('div', {
                      className:
                        'h-[200px] bg-background text-foreground overflow-auto rounded-lg border p-2',
                      children: (0, a.jsx)(u, {}),
                    }),
                    (0, a.jsx)('div', {
                      className:
                        'h-[200px] bg-background text-foreground overflow-auto rounded-lg border p-2',
                      children: (0, a.jsx)(m, {}),
                    }),
                  ],
                }),
              }),
            ],
          })
        );
      }
      var j = t(8094),
        y = t(7871);
      function v(e) {
        let { onReset: r } = e;
        return (0, a.jsxs)(y.fC, {
          children: [
            (0, a.jsx)(y.xz, {
              asChild: !0,
              children: (0, a.jsx)('button', {
                className:
                  'px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-md hover:bg-gray-100  focus:z-10 focus:ring-2 focus:ring-blue-700  dark:bg-gray-600 dark:text-gray-100 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700',
                children: 'Reset',
              }),
            }),
            (0, a.jsxs)(y.h_, {
              children: [
                (0, a.jsx)(y.aV, {
                  className: 'bg-black/50 data-[state=open]:animate-overlayShow fixed inset-0',
                }),
                (0, a.jsxs)(y.VY, {
                  className:
                    'data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[500px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white dark:bg-gray-800 p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none',
                  children: [
                    (0, a.jsx)(y.Dx, {
                      className: 'text-lg font-medium text-gray-900 dark:text-white',
                      children: 'Are you sure?',
                    }),
                    (0, a.jsx)(y.dk, {
                      className: 'mt-2 text-sm text-gray-500 dark:text-gray-400',
                      children:
                        'This action will reset your code to the default snippet. Any unsaved changes will be lost.',
                    }),
                    (0, a.jsxs)('div', {
                      className: 'mt-4 flex justify-end space-x-2',
                      children: [
                        (0, a.jsx)(y.$j, {
                          asChild: !0,
                          children: (0, a.jsx)('button', {
                            className:
                              'px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-md hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700',
                            children: 'Cancel',
                          }),
                        }),
                        (0, a.jsx)(y.aU, {
                          asChild: !0,
                          children: (0, a.jsx)('button', {
                            onClick: r,
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
      var w = t(7356),
        k = t(4867);
      function N() {
        let {
            language: e,
            setLanguage: r,
            handleRun: t,
            handleReset: s,
            isRunning: n,
            isLoadingConfig: o,
          } = (0, c.j)(),
          [i, d] = (0, l.useState)([]),
          [u, x] = (0, l.useState)(!0),
          [g, h] = (0, l.useState)(null);
        return ((0, l.useEffect)(() => {
          (async () => {
            try {
              let e = await fetch('/api/languages');
              if (!e.ok) throw Error('Failed to fetch languages');
              let r = await e.json();
              if (!r.success) throw Error('API returned unsuccessful response');
              let t = r.languages.map(e => ({ value: e.key, label: e.name }));
              d(t), x(!1);
            } catch (e) {
              h(e.message), x(!1);
            }
          })();
        }, []),
        u || g)
          ? (0, a.jsxs)('div', {
              className: 'flex justify-between items-center mb-4',
              children: [
                u
                  ? (0, a.jsx)('div', {
                      className: 'animate-pulse bg-gray-200 dark:bg-gray-700 h-10 w-40 rounded-md',
                    })
                  : (0, a.jsxs)('div', { className: 'text-red-500', children: ['Error: ', g] }),
                (0, a.jsxs)('div', {
                  className: 'space-x-2',
                  children: [
                    (0, a.jsxs)('button', {
                      disabled: !0,
                      className:
                        'px-4 py-2 text-sm font-medium text-white bg-green-400 rounded-md opacity-50 cursor-not-allowed',
                      children: [
                        (0, a.jsx)(j.Z, { className: 'inline-block mr-2 h-4 w-4' }),
                        ' Run',
                      ],
                    }),
                    (0, a.jsx)(v, { onReset: s }),
                  ],
                }),
              ],
            })
          : (0, a.jsxs)('div', {
              className:
                'flex justify-center items-center bg-gray-200 dark:bg-gray-800 space-x-4 p-2',
              children: [
                (0, a.jsxs)(w.fC, {
                  value: e,
                  onValueChange: r,
                  children: [
                    (0, a.jsxs)(w.xz, {
                      className:
                        'inline-flex items-center justify-center rounded-md px-3 h-10 gap-2 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 shadow-sm hover:bg-gray-100 dark:hover:bg-gray-600 focus:ring-2 focus:ring-blue-500 transition-all',
                      disabled: o || n,
                      children: [
                        (0, a.jsx)(w.B4, { placeholder: 'Select a language' }),
                        (0, a.jsx)(w.JO, {
                          className: 'text-gray-600 dark:text-gray-300',
                          children: (0, a.jsx)(k.v4q, {}),
                        }),
                      ],
                    }),
                    (0, a.jsx)(w.h_, {
                      children: (0, a.jsx)(w.VY, {
                        className: 'bg-white dark:bg-gray-800 rounded-md shadow-lg overflow-hidden',
                        position: 'popper',
                        sideOffset: 5,
                        children: (0, a.jsx)(w.l_, {
                          className: 'p-2 max-h-56 overflow-y-auto',
                          children: i.map(e =>
                            (0, a.jsx)(
                              w.ck,
                              {
                                value: e.value,
                                className:
                                  'text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-md px-3 py-2  transition-colors',
                                children: (0, a.jsx)(w.eT, { children: e.label }),
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
                      onClick: t,
                      disabled: n || o,
                      className: 'px-4 py-2 text-sm font-medium text-white '.concat(
                        n || o
                          ? 'bg-green-600 cursor-not-allowed'
                          : 'bg-green-500 hover:bg-green-600',
                        ' rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500'
                      ),
                      children: [
                        (0, a.jsx)(j.Z, { className: 'inline-block mr-2 h-4 w-4' }),
                        n ? 'Running...' : 'Run',
                      ],
                    }),
                    (0, a.jsx)(v, { onReset: s }),
                  ],
                }),
              ],
            });
      }
      var C = t(3787);
      let _ = l.forwardRef((e, r) => {
        let { className: t, ...s } = e;
        return (0, a.jsx)('div', {
          ref: r,
          className: (0, i.cn)('rounded-lg border bg-card text-card-foreground shadow-sm', t),
          ...s,
        });
      });
      _.displayName = 'Card';
      let S = l.forwardRef((e, r) => {
        let { className: t, ...s } = e;
        return (0, a.jsx)('div', {
          ref: r,
          className: (0, i.cn)('flex flex-col space-y-1.5 p-6', t),
          ...s,
        });
      });
      S.displayName = 'CardHeader';
      let z = l.forwardRef((e, r) => {
        let { className: t, ...s } = e;
        return (0, a.jsx)('div', {
          ref: r,
          className: (0, i.cn)('text-2xl font-semibold leading-none tracking-tight', t),
          ...s,
        });
      });
      (z.displayName = 'CardTitle'),
        (l.forwardRef((e, r) => {
          let { className: t, ...s } = e;
          return (0, a.jsx)('div', {
            ref: r,
            className: (0, i.cn)('text-sm text-muted-foreground', t),
            ...s,
          });
        }).displayName = 'CardDescription');
      let E = l.forwardRef((e, r) => {
        let { className: t, ...s } = e;
        return (0, a.jsx)('div', { ref: r, className: (0, i.cn)('p-6 pt-0', t), ...s });
      });
      E.displayName = 'CardContent';
      let R = l.forwardRef((e, r) => {
        let { className: t, ...s } = e;
        return (0, a.jsx)('div', {
          ref: r,
          className: (0, i.cn)('flex items-center p-6 pt-0', t),
          ...s,
        });
      });
      function T(e) {
        let { isPageLoaded: r } = e,
          [t, s] = (0, l.useState)(null);
        return ((0, l.useEffect)(() => {
          if (r) {
            let e = localStorage.getItem('devNotesExpiration'),
              r = new Date().getTime();
            (!e || r > parseInt(e, 10)) && s('welcome');
          }
        }, [r]),
        t && r)
          ? (0, a.jsx)('div', {
              className:
                'fixed inset-0 bg-black/50 dark:bg-black/70 flex items-center justify-center z-50 p-4',
              children: (0, a.jsxs)(_, {
                className:
                  'w-full max-w-[95%] sm:max-w-md md:max-w-lg lg:max-w-xl mx-auto bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100',
                children: [
                  (0, a.jsx)(S, {
                    children: (0, a.jsx)(z, {
                      className: 'flex justify-between items-center text-lg sm:text-xl md:text-2xl',
                      children: 'welcome' === t ? 'Developer Notes' : 'Deployment Issues',
                    }),
                  }),
                  (0, a.jsx)(E, {
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
                                children: 'Here are some known issues with the current deployment:',
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
                  (0, a.jsx)(R, {
                    className:
                      'flex flex-col sm:flex-row justify-between space-y-2 sm:space-y-0 sm:space-x-2 pt-4',
                    children:
                      'welcome' === t
                        ? (0, a.jsx)(x.z, {
                            onClick: () => {
                              s('directions');
                              let e = new Date().getTime();
                              localStorage.setItem('devNotesExpiration', (e + 864e5).toString());
                            },
                            className:
                              'w-full bg-blue-600 hover:bg-blue-700 text-white dark:bg-blue-500 dark:hover:bg-blue-600 text-sm sm:text-base',
                            children: 'Got it!',
                          })
                        : (0, a.jsxs)(a.Fragment, {
                            children: [
                              (0, a.jsx)(x.z, {
                                onClick: () => {
                                  s(null);
                                },
                                className:
                                  'w-full bg-green-600 text-white hover:bg-green-700 dark:bg-green-500 dark:hover:bg-green-600 text-sm sm:text-base',
                                children: 'Ready! Action!',
                              }),
                              (0, a.jsxs)(x.z, {
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
                                  (0, a.jsx)(C.Z, { className: 'ml-2 h-4 w-4' }),
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
      function F() {
        let [e, r] = (0, l.useState)(!1);
        return (
          (0, l.useEffect)(() => {
            r(!0);
          }, []),
          (0, a.jsxs)(c.K, {
            children: [
              (0, a.jsxs)('main', {
                className: 'flex flex-col min-h-full bg-gray-200 dark:bg-gray-800',
                children: [(0, a.jsx)(N, {}), (0, a.jsx)(p, {}), (0, a.jsx)(s, {})],
              }),
              (0, a.jsx)(T, { isPageLoaded: e }),
            ],
          })
        );
      }
      R.displayName = 'CardFooter';
    },
    9733: (e, r, t) => {
      'use strict';
      t.d(r, { z: () => d });
      var a = t(7437),
        s = t(2265),
        l = t(1538),
        n = t(2218),
        o = t(9354);
      let i = (0, n.j)(
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
        d = s.forwardRef((e, r) => {
          let { className: t, variant: s, size: n, asChild: d = !1, ...c } = e,
            u = d ? l.g7 : 'button';
          return (0, a.jsx)(u, {
            className: (0, o.cn)(i({ variant: s, size: n, className: t })),
            ref: r,
            ...c,
          });
        });
      d.displayName = 'Button';
    },
    5898: (e, r, t) => {
      'use strict';
      t.d(r, { K: () => n, j: () => o });
      var a = t(7437),
        s = t(2265);
      let l = (0, s.createContext)();
      function n(e) {
        let { children: r } = e,
          [t, n] = (0, s.useState)(''),
          [o, i] = (0, s.useState)(''),
          [d, c] = (0, s.useState)(''),
          [u, x] = (0, s.useState)(!1),
          [g, h] = (0, s.useState)('javascript'),
          [m, f] = (0, s.useState)({}),
          [b, p] = (0, s.useState)(!1),
          j = (0, s.useCallback)(
            async e => {
              if (m[e]) {
                n(m[e].safeConfig.defaultBoilerplate);
                return;
              }
              p(!0);
              try {
                let r = await fetch('/api/languages/'.concat(e));
                if (!r.ok) throw Error('Failed to fetch '.concat(e, ' configuration'));
                let t = await r.json();
                if (!t.success) throw Error('API error for '.concat(e, ' configuration'));
                f(r => ({ ...r, [e]: t })), n(t.safeConfig.defaultBoilerplate);
              } catch (r) {
                console.error('Error fetching language config:', r),
                  c('Error loading '.concat(e, ' configuration: ').concat(r.message));
              } finally {
                p(!1);
              }
            },
            [g]
          );
        (0, s.useEffect)(() => {
          j(g);
        }, [g, j]);
        let y = (0, s.useCallback)(async () => {
            x(!0);
            try {
              let e = await fetch('/api/execute', {
                  method: 'POST',
                  headers: { 'Content-Type': 'application/json' },
                  body: JSON.stringify({ language: g, code: t, input: o }),
                }),
                r = await e.json();
              if (!r.success) throw Error(r.error || 'Execution failed');
              c(r.output);
            } catch (e) {
              c('Error: '.concat(e.message));
            } finally {
              x(!1);
            }
          }, [g, t, o]),
          v = (0, s.useCallback)(() => {
            m[g] && n(m[g].safeConfig.defaultBoilerplate), i(''), c('');
          }, [g, m]);
        return (0, a.jsx)(l.Provider, {
          value: {
            code: t,
            setCode: n,
            input: o,
            setInput: i,
            output: d,
            setOutput: c,
            language: g,
            setLanguage: h,
            isRunning: u,
            isLoadingConfig: b,
            handleRun: y,
            handleReset: v,
          },
          children: r,
        });
      }
      let o = () => {
        let e = (0, s.useContext)(l);
        if (!e) throw Error('useEditor must be used within an EditorProvider');
        return e;
      };
    },
    9354: (e, r, t) => {
      'use strict';
      t.d(r, { cn: () => l });
      var a = t(4839),
        s = t(6164);
      function l() {
        for (var e = arguments.length, r = Array(e), t = 0; t < e; t++) r[t] = arguments[t];
        return (0, s.m6)((0, a.W)(r));
      }
    },
  },
  e => {
    var r = r => e((e.s = r));
    e.O(0, [310, 950, 196, 130, 215, 744], () => r(9537)), (_N_E = e.O());
  },
]);
