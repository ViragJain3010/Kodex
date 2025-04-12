'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [270],
  {
    7270: (e, t, r) => {
      function n(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function o(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? n(Object(r), !0).forEach(function (t) {
                var n;
                (n = r[t]),
                  t in e
                    ? Object.defineProperty(e, t, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                    : (e[t] = n);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : n(Object(r)).forEach(function (t) {
                  Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
                });
        }
        return e;
      }
      function i(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
        return n;
      }
      function c(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function u(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? c(Object(r), !0).forEach(function (t) {
                var n;
                (n = r[t]),
                  t in e
                    ? Object.defineProperty(e, t, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                    : (e[t] = n);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : c(Object(r)).forEach(function (t) {
                  Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
                });
        }
        return e;
      }
      function a(e) {
        return function t() {
          for (var r = this, n = arguments.length, o = Array(n), i = 0; i < n; i++)
            o[i] = arguments[i];
          return o.length >= e.length
            ? e.apply(this, o)
            : function () {
                for (var e = arguments.length, n = Array(e), i = 0; i < e; i++) n[i] = arguments[i];
                return t.apply(r, [].concat(o, n));
              };
        };
      }
      function l(e) {
        return {}.toString.call(e).includes('Object');
      }
      function s(e) {
        return 'function' == typeof e;
      }
      r.r(t),
        r.d(t, {
          DiffEditor: () => F,
          Editor: () => Y,
          default: () => $,
          loader: () => I,
          useMonaco: () => U,
        });
      var f = a(function (e, t) {
          throw Error(e[t] || e.default);
        })({
          initialIsRequired: 'initial state is required',
          initialType: 'initial state should be an object',
          initialContent: "initial state shouldn't be an empty object",
          handlerType: 'handler should be an object or a function',
          handlersType: 'all handlers should be a functions',
          selectorType: 'selector should be a function',
          changeType: 'provided value of changes should be an object',
          changeField:
            'it seams you want to change a field in the state which is not specified in the "initial" state',
          default: 'an unknown error accured in `state-local` package',
        }),
        d = {
          changes: function (e, t) {
            return (
              l(t) || f('changeType'),
              Object.keys(t).some(function (t) {
                return !Object.prototype.hasOwnProperty.call(e, t);
              }) && f('changeField'),
              t
            );
          },
          selector: function (e) {
            s(e) || f('selectorType');
          },
          handler: function (e) {
            s(e) || l(e) || f('handlerType'),
              l(e) &&
                Object.values(e).some(function (e) {
                  return !s(e);
                }) &&
                f('handlersType');
          },
          initial: function (e) {
            e || f('initialIsRequired'),
              l(e) || f('initialType'),
              Object.keys(e).length || f('initialContent');
          },
        };
      function g(e, t) {
        return s(t) ? t(e.current) : t;
      }
      function p(e, t) {
        return (e.current = u(u({}, e.current), t)), t;
      }
      function h(e, t, r) {
        return (
          s(t)
            ? t(e.current)
            : Object.keys(r).forEach(function (r) {
                var n;
                return null === (n = t[r]) || void 0 === n ? void 0 : n.call(t, e.current[r]);
              }),
          r
        );
      }
      var y = {
          configIsRequired: 'the configuration object is required',
          configType: 'the configuration object should be an object',
          default: 'an unknown error accured in `@monaco-editor/loader` package',
          deprecation:
            "Deprecation warning!\n    You are using deprecated way of configuration.\n\n    Instead of using\n      monaco.config({ urls: { monacoBase: '...' } })\n    use\n      monaco.config({ paths: { vs: '...' } })\n\n    For more please check the link https://github.com/suren-atoyan/monaco-loader#config\n  ",
        },
        m = (function (e) {
          return function t() {
            for (var r = this, n = arguments.length, o = Array(n), i = 0; i < n; i++)
              o[i] = arguments[i];
            return o.length >= e.length
              ? e.apply(this, o)
              : function () {
                  for (var e = arguments.length, n = Array(e), i = 0; i < e; i++)
                    n[i] = arguments[i];
                  return t.apply(r, [].concat(o, n));
                };
          };
        })(function (e, t) {
          throw Error(e[t] || e.default);
        })(y);
      let b = {
          config: function (e) {
            return (
              e || m('configIsRequired'),
              {}.toString.call(e).includes('Object') || m('configType'),
              e.urls ? (console.warn(y.deprecation), { paths: { vs: e.urls.monacoBase } }) : e
            );
          },
        },
        v = function () {
          for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
          return function (e) {
            return t.reduceRight(function (e, t) {
              return t(e);
            }, e);
          };
        };
      var O = { type: 'cancelation', msg: 'operation is manually canceled' };
      let w = function (e) {
        var t = !1,
          r = new Promise(function (r, n) {
            e.then(function (e) {
              return t ? n(O) : r(e);
            }),
              e.catch(n);
          });
        return (
          (r.cancel = function () {
            return (t = !0);
          }),
          r
        );
      };
      var j = (function (e, t) {
          return (
            (function (e) {
              if (Array.isArray(e)) return e;
            })(e) ||
            (function (e, t) {
              if ('undefined' != typeof Symbol && Symbol.iterator in Object(e)) {
                var r = [],
                  n = !0,
                  o = !1,
                  i = void 0;
                try {
                  for (
                    var c, u = e[Symbol.iterator]();
                    !(n = (c = u.next()).done) && (r.push(c.value), 2 !== r.length);
                    n = !0
                  );
                } catch (e) {
                  (o = !0), (i = e);
                } finally {
                  try {
                    n || null == u.return || u.return();
                  } finally {
                    if (o) throw i;
                  }
                }
                return r;
              }
            })(e, 2) ||
            (function (e, t) {
              if (e) {
                if ('string' == typeof e) return i(e, 2);
                var r = Object.prototype.toString.call(e).slice(8, -1);
                if (
                  ('Object' === r && e.constructor && (r = e.constructor.name),
                  'Map' === r || 'Set' === r)
                )
                  return Array.from(e);
                if ('Arguments' === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
                  return i(e, t);
              }
            })(e, 2) ||
            (function () {
              throw TypeError(
                'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
              );
            })()
          );
        })(
          {
            create: function (e) {
              var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
              d.initial(e), d.handler(t);
              var r = { current: e },
                n = a(h)(r, t),
                o = a(p)(r),
                i = a(d.changes)(e),
                c = a(g)(r);
              return [
                function () {
                  var e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : function (e) {
                          return e;
                        };
                  return d.selector(e), e(r.current);
                },
                function (e) {
                  (function () {
                    for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
                      t[r] = arguments[r];
                    return function (e) {
                      return t.reduceRight(function (e, t) {
                        return t(e);
                      }, e);
                    };
                  })(
                    n,
                    o,
                    i,
                    c
                  )(e);
                },
              ];
            },
          }.create({
            config: { paths: { vs: 'https://cdn.jsdelivr.net/npm/monaco-editor@0.43.0/min/vs' } },
            isInitialized: !1,
            resolve: null,
            reject: null,
            monaco: null,
          }),
          0
        ),
        M = j[0],
        E = j[1];
      function P(e) {
        return document.body.appendChild(e);
      }
      function R(e) {
        var t,
          r,
          n = M(function (e) {
            return { config: e.config, reject: e.reject };
          }),
          o =
            ((t = ''.concat(n.config.paths.vs, '/loader.js')),
            (r = document.createElement('script')),
            t && (r.src = t),
            r);
        return (
          (o.onload = function () {
            return e();
          }),
          (o.onerror = n.reject),
          o
        );
      }
      function k() {
        var e = M(function (e) {
            return { config: e.config, resolve: e.resolve, reject: e.reject };
          }),
          t = window.require;
        t.config(e.config),
          t(
            ['vs/editor/editor.main'],
            function (t) {
              S(t), e.resolve(t);
            },
            function (t) {
              e.reject(t);
            }
          );
      }
      function S(e) {
        M().monaco || E({ monaco: e });
      }
      var C = new Promise(function (e, t) {
        return E({ resolve: e, reject: t });
      });
      let I = {
        config: function (e) {
          var t = b.config(e),
            r = t.monaco,
            n = (function (e, t) {
              if (null == e) return {};
              var r,
                n,
                o = (function (e, t) {
                  if (null == e) return {};
                  var r,
                    n,
                    o = {},
                    i = Object.keys(e);
                  for (n = 0; n < i.length; n++) (r = i[n]), t.indexOf(r) >= 0 || (o[r] = e[r]);
                  return o;
                })(e, t);
              if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (n = 0; n < i.length; n++)
                  (r = i[n]),
                    !(t.indexOf(r) >= 0) &&
                      Object.prototype.propertyIsEnumerable.call(e, r) &&
                      (o[r] = e[r]);
              }
              return o;
            })(t, ['monaco']);
          E(function (e) {
            return {
              config: (function e(t, r) {
                return (
                  Object.keys(r).forEach(function (n) {
                    r[n] instanceof Object && t[n] && Object.assign(r[n], e(t[n], r[n]));
                  }),
                  o(o({}, t), r)
                );
              })(e.config, n),
              monaco: r,
            };
          });
        },
        init: function () {
          var e = M(function (e) {
            return { monaco: e.monaco, isInitialized: e.isInitialized, resolve: e.resolve };
          });
          if (!e.isInitialized) {
            if ((E({ isInitialized: !0 }), e.monaco)) return e.resolve(e.monaco), w(C);
            if (window.monaco && window.monaco.editor)
              return S(window.monaco), e.resolve(window.monaco), w(C);
            v(P, R)(k);
          }
          return w(C);
        },
        __getMonacoInstance: function () {
          return M(function (e) {
            return e.monaco;
          });
        },
      };
      var T = r(2265),
        x = {
          wrapper: { display: 'flex', position: 'relative', textAlign: 'initial' },
          fullWidth: { width: '100%' },
          hide: { display: 'none' },
        },
        A = {
          container: {
            display: 'flex',
            height: '100%',
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
          },
        },
        D = function ({ children: e }) {
          return T.createElement('div', { style: A.container }, e);
        },
        V = (0, T.memo)(function ({
          width: e,
          height: t,
          isEditorReady: r,
          loading: n,
          _ref: o,
          className: i,
          wrapperProps: c,
        }) {
          return T.createElement(
            'section',
            { style: { ...x.wrapper, width: e, height: t }, ...c },
            !r && T.createElement(D, null, n),
            T.createElement('div', {
              ref: o,
              style: { ...x.fullWidth, ...(!r && x.hide) },
              className: i,
            })
          );
        }),
        L = function (e) {
          (0, T.useEffect)(e, []);
        },
        _ = function (e, t, r = !0) {
          let n = (0, T.useRef)(!0);
          (0, T.useEffect)(
            n.current || !r
              ? () => {
                  n.current = !1;
                }
              : e,
            t
          );
        };
      function N() {}
      function q(e, t, r, n) {
        return e.editor.getModel(z(e, n)) || e.editor.createModel(t, r, n ? z(e, n) : void 0);
      }
      function z(e, t) {
        return e.Uri.parse(t);
      }
      var F = (0, T.memo)(function ({
          original: e,
          modified: t,
          language: r,
          originalLanguage: n,
          modifiedLanguage: o,
          originalModelPath: i,
          modifiedModelPath: c,
          keepCurrentOriginalModel: u = !1,
          keepCurrentModifiedModel: a = !1,
          theme: l = 'light',
          loading: s = 'Loading...',
          options: f = {},
          height: d = '100%',
          width: g = '100%',
          className: p,
          wrapperProps: h = {},
          beforeMount: y = N,
          onMount: m = N,
        }) {
          let [b, v] = (0, T.useState)(!1),
            [O, w] = (0, T.useState)(!0),
            j = (0, T.useRef)(null),
            M = (0, T.useRef)(null),
            E = (0, T.useRef)(null),
            P = (0, T.useRef)(m),
            R = (0, T.useRef)(y),
            k = (0, T.useRef)(!1);
          L(() => {
            let e = I.init();
            return (
              e
                .then(e => (M.current = e) && w(!1))
                .catch(
                  e =>
                    e?.type !== 'cancelation' && console.error('Monaco initialization: error:', e)
                ),
              () => {
                let t;
                return j.current
                  ? ((t = j.current?.getModel()),
                    void (u || t?.original?.dispose(),
                    a || t?.modified?.dispose(),
                    j.current?.dispose()))
                  : e.cancel();
              }
            );
          }),
            _(
              () => {
                if (j.current && M.current) {
                  let t = j.current.getOriginalEditor(),
                    o = q(M.current, e || '', n || r || 'text', i || '');
                  o !== t.getModel() && t.setModel(o);
                }
              },
              [i],
              b
            ),
            _(
              () => {
                if (j.current && M.current) {
                  let e = j.current.getModifiedEditor(),
                    n = q(M.current, t || '', o || r || 'text', c || '');
                  n !== e.getModel() && e.setModel(n);
                }
              },
              [c],
              b
            ),
            _(
              () => {
                let e = j.current.getModifiedEditor();
                e.getOption(M.current.editor.EditorOption.readOnly)
                  ? e.setValue(t || '')
                  : t !== e.getValue() &&
                    (e.executeEdits('', [
                      {
                        range: e.getModel().getFullModelRange(),
                        text: t || '',
                        forceMoveMarkers: !0,
                      },
                    ]),
                    e.pushUndoStop());
              },
              [t],
              b
            ),
            _(
              () => {
                j.current?.getModel()?.original.setValue(e || '');
              },
              [e],
              b
            ),
            _(
              () => {
                let { original: e, modified: t } = j.current.getModel();
                M.current.editor.setModelLanguage(e, n || r || 'text'),
                  M.current.editor.setModelLanguage(t, o || r || 'text');
              },
              [r, n, o],
              b
            ),
            _(
              () => {
                M.current?.editor.setTheme(l);
              },
              [l],
              b
            ),
            _(
              () => {
                j.current?.updateOptions(f);
              },
              [f],
              b
            );
          let S = (0, T.useCallback)(() => {
              if (!M.current) return;
              R.current(M.current);
              let u = q(M.current, e || '', n || r || 'text', i || ''),
                a = q(M.current, t || '', o || r || 'text', c || '');
              j.current?.setModel({ original: u, modified: a });
            }, [r, t, o, e, n, i, c]),
            C = (0, T.useCallback)(() => {
              !k.current &&
                E.current &&
                ((j.current = M.current.editor.createDiffEditor(E.current, {
                  automaticLayout: !0,
                  ...f,
                })),
                S(),
                M.current?.editor.setTheme(l),
                v(!0),
                (k.current = !0));
            }, [f, l, S]);
          return (
            (0, T.useEffect)(() => {
              b && P.current(j.current, M.current);
            }, [b]),
            (0, T.useEffect)(() => {
              O || b || C();
            }, [O, b, C]),
            T.createElement(V, {
              width: g,
              height: d,
              isEditorReady: b,
              loading: s,
              _ref: E,
              className: p,
              wrapperProps: h,
            })
          );
        }),
        U = function () {
          let [e, t] = (0, T.useState)(I.__getMonacoInstance());
          return (
            L(() => {
              let r;
              return (
                e ||
                  (r = I.init()).then(e => {
                    t(e);
                  }),
                () => r?.cancel()
              );
            }),
            e
          );
        },
        B = function (e) {
          let t = (0, T.useRef)();
          return (
            (0, T.useEffect)(() => {
              t.current = e;
            }, [e]),
            t.current
          );
        },
        W = new Map(),
        Y = (0, T.memo)(function ({
          defaultValue: e,
          defaultLanguage: t,
          defaultPath: r,
          value: n,
          language: o,
          path: i,
          theme: c = 'light',
          line: u,
          loading: a = 'Loading...',
          options: l = {},
          overrideServices: s = {},
          saveViewState: f = !0,
          keepCurrentModel: d = !1,
          width: g = '100%',
          height: p = '100%',
          className: h,
          wrapperProps: y = {},
          beforeMount: m = N,
          onMount: b = N,
          onChange: v,
          onValidate: O = N,
        }) {
          let [w, j] = (0, T.useState)(!1),
            [M, E] = (0, T.useState)(!0),
            P = (0, T.useRef)(null),
            R = (0, T.useRef)(null),
            k = (0, T.useRef)(null),
            S = (0, T.useRef)(b),
            C = (0, T.useRef)(m),
            x = (0, T.useRef)(),
            A = (0, T.useRef)(n),
            D = B(i),
            z = (0, T.useRef)(!1),
            F = (0, T.useRef)(!1);
          L(() => {
            let e = I.init();
            return (
              e
                .then(e => (P.current = e) && E(!1))
                .catch(
                  e =>
                    e?.type !== 'cancelation' && console.error('Monaco initialization: error:', e)
                ),
              () =>
                R.current
                  ? void (x.current?.dispose(),
                    d ? f && W.set(i, R.current.saveViewState()) : R.current.getModel()?.dispose(),
                    R.current.dispose())
                  : e.cancel()
            );
          }),
            _(
              () => {
                let c = q(P.current, e || n || '', t || o || '', i || r || '');
                c !== R.current?.getModel() &&
                  (f && W.set(D, R.current?.saveViewState()),
                  R.current?.setModel(c),
                  f && R.current?.restoreViewState(W.get(i)));
              },
              [i],
              w
            ),
            _(
              () => {
                R.current?.updateOptions(l);
              },
              [l],
              w
            ),
            _(
              () => {
                R.current &&
                  void 0 !== n &&
                  (R.current.getOption(P.current.editor.EditorOption.readOnly)
                    ? R.current.setValue(n)
                    : n === R.current.getValue() ||
                      ((F.current = !0),
                      R.current.executeEdits('', [
                        {
                          range: R.current.getModel().getFullModelRange(),
                          text: n,
                          forceMoveMarkers: !0,
                        },
                      ]),
                      R.current.pushUndoStop(),
                      (F.current = !1)));
              },
              [n],
              w
            ),
            _(
              () => {
                let e = R.current?.getModel();
                e && o && P.current?.editor.setModelLanguage(e, o);
              },
              [o],
              w
            ),
            _(
              () => {
                void 0 !== u && R.current?.revealLine(u);
              },
              [u],
              w
            ),
            _(
              () => {
                P.current?.editor.setTheme(c);
              },
              [c],
              w
            );
          let U = (0, T.useCallback)(() => {
            if (!(!k.current || !P.current) && !z.current) {
              C.current(P.current);
              let a = i || r,
                d = q(P.current, n || e || '', t || o || '', a || '');
              (R.current = P.current?.editor.create(
                k.current,
                { model: d, automaticLayout: !0, ...l },
                s
              )),
                f && R.current.restoreViewState(W.get(a)),
                P.current.editor.setTheme(c),
                void 0 !== u && R.current.revealLine(u),
                j(!0),
                (z.current = !0);
            }
          }, [e, t, r, n, o, i, l, s, f, c, u]);
          return (
            (0, T.useEffect)(() => {
              w && S.current(R.current, P.current);
            }, [w]),
            (0, T.useEffect)(() => {
              M || w || U();
            }, [M, w, U]),
            (A.current = n),
            (0, T.useEffect)(() => {
              w &&
                v &&
                (x.current?.dispose(),
                (x.current = R.current?.onDidChangeModelContent(e => {
                  F.current || v(R.current.getValue(), e);
                })));
            }, [w, v]),
            (0, T.useEffect)(() => {
              if (w) {
                let e = P.current.editor.onDidChangeMarkers(e => {
                  let t = R.current.getModel()?.uri;
                  if (t && e.find(e => e.path === t.path)) {
                    let e = P.current.editor.getModelMarkers({ resource: t });
                    O?.(e);
                  }
                });
                return () => {
                  e?.dispose();
                };
              }
              return () => {};
            }, [w, O]),
            T.createElement(V, {
              width: g,
              height: p,
              isEditorReady: w,
              loading: a,
              _ref: k,
              className: h,
              wrapperProps: y,
            })
          );
        }),
        $ = Y;
    },
  },
]);
