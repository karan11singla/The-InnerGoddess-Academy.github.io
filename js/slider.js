var _Mathsqrt = Math.sqrt,
    _Mathpow = Math.pow,
    _Mathfloor = Math.floor,
    _Mathceil = Math.ceil,
    _MathPI = Math.PI,
    _Mathround = Math.round,
    _Mathmax = Math.max,
    _Mathmin = Math.min,
    _Mathabs = Math.abs;
(function(t) {
    function o(d) {
        if (l[d]) return l[d].exports;
        var u = l[d] = {
            i: d,
            l: !1,
            exports: {}
        };
        return t[d].call(u.exports, u, u.exports, o), u.l = !0, u.exports
    }
    var l = {};
    return o.m = t, o.c = l, o.i = function(d) {
        return d
    }, o.d = function(d, u, h) {
        o.o(d, u) || Object.defineProperty(d, u, {
            configurable: !1,
            enumerable: !0,
            get: h
        })
    }, o.n = function(d) {
        var u = d && d.__esModule ? function() {
            return d['default']
        } : function() {
            return d
        };
        return o.d(u, 'a', u), u
    }, o.o = function(d, u) {
        return Object.prototype.hasOwnProperty.call(d, u)
    }, o.p = '', o(o.s = 60)
})([function(t) {
    t.exports = {
        BOOKMARKS_BROADCAST: 'bookmarksBroadcast',
        CONFIRM_SHOW: 'confirmShow',
        MAP_DETAILS: 'mapDetails',
        MODAL_HIDE: 'modalHide',
        MODAL_SHOW: 'modalShow',
        OPTIMIZED_RESIZE: 'optimizedResize',
        OPTIMIZED_SCROLL: 'optimizedScroll',
        RESERVATIONS_BROADCAST: 'reservationsBroadcast',
        SCHEDULE_UPDATED: 'scheduleUpdated',
        SESSIONS_LOADED: 'sessionsLoaded',
        TOAST_MESSAGE: 'toastMessage'
    }
}, function(t) {
    var l = function() {
        return this
    }();
    try {
        l = l || Function('return this')() || (1, eval)('this')
    } catch (d) {
        'object' == typeof window && (l = window)
    }
    t.exports = l
}, , function(t, o, l) {
    (function(d) {
        var h = d.CustomEvent;
        t.exports = function() {
            try {
                var f = new h('cat', {
                    detail: {
                        foo: 'bar'
                    }
                });
                return 'cat' === f.type && 'bar' === f.detail.foo
            } catch (m) {}
            return !1
        }() ? h : 'undefined' != typeof document && 'function' == typeof document.createEvent ? function(m, S) {
            var _ = document.createEvent('CustomEvent');
            return S ? _.initCustomEvent(m, S.bubbles, S.cancelable, S.detail) : _.initCustomEvent(m, !1, !1, void 0), _
        } : function(m, S) {
            var _ = document.createEventObject();
            return _.type = m, S ? (_.bubbles = !!S.bubbles, _.cancelable = !!S.cancelable, _.detail = S.detail) : (_.bubbles = !1, _.cancelable = !1, _.detail = void 0), _
        }
    }).call(o, l(1))
}, function(t) {
    var l = function() {};
    l.getClosestClassUntil = function(d, u, h) {
        for (; d && !d.classList.contains(h);) {
            if (d.classList.contains(u)) return d;
            d = d.parentNode
        }
    }, l.getClosestClass = function(d, u) {
        for (; d;) {
            if (d && d.classList && d.classList.contains(u)) return d;
            d = d.parentNode
        }
    }, l.Deferred = function() {
        this.resolve = null, this.reject = null, this.promise = new Promise(function(d, u) {
            this.resolve = d, this.reject = u
        }.bind(this)), Object.freeze(this)
    }, l.QueryString = function() {
        for (var m, d = {}, u = window.location.search.substring(1), h = u.split('&'), f = 0; f < h.length; f++)
            if (m = h[f].split('='), 'undefined' == typeof d[m[0]]) d[m[0]] = decodeURIComponent(m[1]);
            else if ('string' == typeof d[m[0]]) {
            var S = [d[m[0]], decodeURIComponent(m[1])];
            d[m[0]] = S
        } else d[m[0]].push(decodeURIComponent(m[1]));
        return d
    }, t.exports = l
}, , , function(t, o, l) {
    function d(O) {
        this.config = O, this.initDom_();
        var D = function(P) {
            var R = 'data-' + this.config.className + '-video-id',
                A = P.getAttribute(R);
            A && this.play(A)
        }.bind(this);
        S.addDelegatedListener(document, 'click', D);
        var L = document.createElement('script');
        L.setAttribute('src', 'https://www.youtube.com/iframe_api'), document.body.appendChild(L)
    }
    var f = l(8),
        m = l(13),
        S = l(14),
        _ = l(10),
        T = l(15),
        E = null,
        C = null,
        w = {
            useHandlerOnMobile: !0,
            history: !1,
            historyNamePrefix: 'video:',
            transitionDuration: 300,
            className: 'ak-youtubemodal',
            playerVars: {
                autohide: 1,
                autoplay: 1,
                fs: 1,
                modestbranding: 1,
                rel: 0,
                showinfo: 0,
                iv_load_policy: 3
            }
        };
    d.prototype.initDom_ = function() {
        var O = m.createDom,
            D = O('div', this.config.className),
            L = O('div', this.config.className + '-x');
        D.appendChild(L), D.appendChild(O('div', this.config.className + '-player')), D.appendChild(O('div', this.config.className + '-mask')), document.body.appendChild(D), L.addEventListener('click', function() {
            this.setActive_(!1)
        }.bind(this)), this.config.history && window.addEventListener('popstate', this.onHistoryChange_.bind(this))
    }, d.prototype.setVisible = function(O) {
        E && window.setTimeout(function() {
            O ? E.playVideo() : E.pauseVideo()
        }, 100);
        var D = function(P) {
            27 == P.keyCode && (this.setActive_(!1), document.body.removeEventListener('keydown', D))
        }.bind(this);
        O ? document.body.addEventListener('keydown', D) : document.body.removeEventListener('keydown', D);
        var L = document.querySelector('.' + this.config.className);
        window.setTimeout(function() {
            f.enable(L, this.config.className + '--enabled', O)
        }.bind(this), O ? 0 : this.config.transitionDuration), window.setTimeout(function() {
            f.enable(L, this.config.className + '--visible', O)
        }.bind(this), O ? this.config.transitionDuration : 0)
    }, d.prototype.setActive_ = function(O, D, L) {
        if (!this.config.history) return void this.setVisible(O);
        if (this.setVisible(O), !1 !== L) {
            var P = D || this.activeVideoId_;
            if (O) {
                var R = window.history.state && window.history.state.videoId;
                if (R == P) return;
                window.history.pushState({
                    videoId: P
                }, '', '#' + this.config.historyNamePrefix + P)
            } else window.history.pushState({
                videoId: null
            }, '', window.location.pathname)
        }
    }, d.prototype.onHistoryChange_ = function(O) {
        O.state && O.state.videoId ? this.play(O.state.videoId, !1) : this.setVisible(!1)
    }, d.prototype.play = function(O, D) {
        var L = this.config.useHandlerOnMobile && (T.isIOS() || T.isAndroid());
        if (L) return void(window.location.href = 'https://m.youtube.com/watch?v=' + O);
        if (this.setActive_(!0, O, D), !(E && O == this.activeVideoId_)) {
            if (E && O != this.activeVideoId_) return E.loadVideoById(O, 0, 'large'), void(this.activeVideoId_ = O);
            var P = document.querySelector('.' + this.config.className + '-player'),
                R = {
                    videoId: O,
                    playerVars: _.clone(this.config.playerVars)
                };
            E = new YT.Player(P, R), this.activeVideoId_ = O
        }
    }, t.exports = {
        init: function(O) {
            if (!C) {
                var D = _.clone(w);
                O && _.merge(D, O), C = new d(D)
            }
        },
        play: function(O) {
            if (!C) throw 'youtubemodal.init must be run first.';
            return C.play(O)
        }
    }
}, function(t) {
    t.exports = {
        enable: function(u, h, f) {
            f ? u.classList.add(h) : u.classList.remove(h)
        },
        removeAdd: function(u, h, f) {
            u.classList.remove.apply(u.classList, h), u.classList.add.apply(u.classList, f)
        }
    }
}, , function(t) {
    t.exports = {
        clone: function(u) {
            var h = {};
            for (var f in u) h[f] = u[f];
            return h
        },
        merge: function(u, h) {
            for (var f in h) u[f] = h[f]
        }
    }
}, function(t) {
    t.exports = function(d) {
        return null !== d && 'object' == typeof d
    }
}, function(t) {
    var l = function(d, u) {
        this.clientPromise = new Promise(function(h) {
            d.initClientPromise.then(function() {
                gapi.client.init({
                    apiKey: 'AIzaSyD-_B5QWEie62J0hNe2sth-Gm1ezMwWlpw',
                    discoveryDocs: [u]
                }).then(function() {
                    h()
                })
            }.bind(this))
        }.bind(this))
    };
    l.init = function(d) {
        return new l(window.authIO, d)
    }, t.exports = l
}, function(t) {
    t.exports = {
        createDom: function(d, u) {
            var h = document.createElement(d);
            return u && (h.className = u), h
        }
    }
}, function(t) {
    t.exports = {
        addDelegatedListener: function(d, u, h) {
            return d.addEventListener(u, function(f) {
                f = f || window.event;
                var m = f.target || f.srcElement;
                m = 3 === m.nodeType ? m.parentNode : m;
                do h(m, f), m.parentNode && (m = m.parentNode); while (m.parentNode)
            })
        }
    }
}, function(t) {
    function d() {
        return /iPhone|iPad|iPod/i.test(navigator.userAgent)
    }

    function u() {
        return /Android/i.test(navigator.userAgent)
    }

    function h() {
        return -1 != navigator.userAgent.indexOf('Chrome')
    }
    t.exports = {
        isAndroid: u,
        isChrome: h,
        isFirefox: function() {
            return -1 != navigator.userAgent.indexOf('Firefox')
        },
        isIOS: d,
        isIE: function() {
            return /MSIE\/\d+/.test(navigator.userAgent)
        },
        isIEorEdge: function() {
            return /Edge\/\d+/.test(navigator.userAgent) || /MSIE\/\d+/.test(navigator.userAgent) || /Trident\/\d+/.test(navigator.userAgent)
        },
        isMobile: function() {
            return d() || u()
        },
        isSafari: function() {
            return !h() && -1 != navigator.userAgent.indexOf('Safari')
        }
    }
}, function(t, o, l) {
    var d = l(3),
        u = l(0),
        h = l(4),
        f = 'bookmark',
        m = function(S, _) {
            this.userData_ = S, this.pingApi_ = _, this.activeRequests_ = {}, this.bookmarks_ = {}, this.isSignedIn_ = !1, this.deferredLoading_ = new h.Deferred, this.userData_.clientPromise.then(function() {
                window.gapi.auth2.getAuthInstance().isSignedIn.listen(this.loadBookmarks_.bind(this))
            }.bind(this)), window.addEventListener(u.SCHEDULE_UPDATED, this.updateBookmarks_.bind(this), !1), document.body.addEventListener('click', this.handleBookmark_.bind(this)), this.loadBookmarks_()
        };
    m.prototype.broadcastBookmarks_ = function() {
        window.dispatchEvent(new d(u.BOOKMARKS_BROADCAST, {
            detail: {
                bookmarks: this.bookmarks_
            }
        }))
    }, m.prototype.getSessionId_ = function(S) {
        for (var _ = null, T = S; T.parentNode && null == _;) _ = T.dataset.session || null, T = T.parentNode;
        return _
    }, m.prototype.handleBookmark_ = function(S) {
        var _ = h.getClosestClass(S.target, f);
        if (_) {
            var T = this.getSessionId_(_);
            this.isSignedIn_ ? this.toggleBookmark_(T) : window.gapi.auth2.getAuthInstance().signIn().then(function() {
                this.toggleBookmark_(T, !0)
            }.bind(this))
        }
    }, m.prototype.loadBookmarks_ = function() {
        this.userData_.clientPromise.then(function() {
            this.isSignedIn_ = window.gapi.auth2.getAuthInstance().isSignedIn.get(), this.isSignedIn_ ? gapi.client.userdata.getBookmarkedSessions().then(function(S) {
                this.bookmarks_ = S.result, this.broadcastBookmarks_(), this.deferredLoading_.resolve(), this.updateBookmarks_()
            }.bind(this), function(S) {
                console.error('Error: ' + S.result.error.message)
            }) : (this.deferredLoading_ = new h.Deferred, this.bookmarks_ = {}, this.broadcastBookmarks_(), this.updateBookmarks_())
        }.bind(this))
    }, m.prototype.toggleBookmark_ = function(S, _) {
        this.deferredLoading_.promise.then(function() {
            var T = S in this.bookmarks_ && this.bookmarks_[S].inSchedule;
            if (!(T && _) && !(S in this.activeRequests_)) {
                var E = {
                    sessionId: S,
                    timestampUTC: new Date().getTime()
                };
                T ? (this.activeRequests_[S] = gapi.client.userdata.removeBookmarkedSession(E), this.activeRequests_[S].then(function() {
                    gapi.client.ping.sendSelfSync().execute(), delete this.activeRequests_[S], E.inSchedule = !1, this.bookmarks_[S] = E, this.updateBookmarks_(), this.broadcastBookmarks_()
                }.bind(this), function(C) {
                    console.error('Error: ' + C.result.error.message)
                })) : (this.activeRequests_[S] = gapi.client.userdata.addBookmarkedSession(E), this.activeRequests_[S].then(function() {
                    gapi.client.ping.sendSelfSync().execute(), delete this.activeRequests_[S], E.inSchedule = !0, this.bookmarks_[S] = E, this.updateBookmarks_(), this.broadcastBookmarks_()
                }.bind(this), function(C) {
                    console.error('Error: ' + C.result.error.message)
                }))
            }
        }.bind(this))
    }, m.prototype.updateBookmarks_ = function(S) {
        var _ = document.body;
        S && S.detail && S.detail.container && (_ = S.detail.container);
        var T = _.querySelectorAll('.' + f);
        [].forEach.call(T, function(E) {
            var C = this.getSessionId_(E);
            return C ? void(this.bookmarks_[C] && this.bookmarks_[C].inSchedule ? (E.classList.add(f + '--exists'), E.classList.remove(f + '--add'), E.setAttribute('aria-pressed', 'true')) : (E.classList.add(f + '--add'), E.classList.remove(f + '--exists'), E.setAttribute('aria-pressed', 'false'))) : void console.warn('Unable to find session id for bookmark', E)
        }.bind(this))
    }, m.init = function(S) {
        return new m(S)
    }, t.exports = m
}, function(t, o, l) {
    var d = l(3),
        u = l(0),
        h = l(26),
        f = l(23),
        m = l(4),
        S = function(N, H) {
            H.forEach(function(U) {
                U.kind && N.push({
                    color: U.color,
                    kind: U.kind,
                    title: U.title,
                    type: U.type,
                    when: L(U.start, U.end)
                })
            })
        },
        _ = function(N, H) {
            H.forEach(function(U) {
                N[U.id] = {
                    id: U.id,
                    name: U.name,
                    capacity: U.capacity,
                    filter: U.filter
                }
            })
        },
        T = function(N, H) {
            H.forEach(function(U) {
                N[U.id] = {
                    color: U.color,
                    contentLevels: E(U.tags),
                    description: U.description,
                    hashtag: U.hashtag,
                    id: U.id,
                    isLivestream: U.isLivestream,
                    mainTag: O(U.mainTag),
                    photoUrl: U.photoUrl,
                    room: U.room,
                    speakers: U.speakers,
                    tags: C(U.tags),
                    title: U.title,
                    youtubeUrl: U.youtubeUrl,
                    videoId: R(U.youtubeUrl),
                    youtubeThumbnailUrl: A(U.youtubeUrl),
                    when: L(U.startTimestamp, U.endTimestamp)
                }
            })
        },
        E = function(N) {
            var N = C(N),
                H = [];
            return N ? (N.forEach(function(U) {
                'level' == U.type && H.push(I(U.tag))
            }), H) : []
        },
        C = function(N) {
            if (!N) return [];
            var H = [];
            return N.forEach(function(U) {
                H.push(O(U))
            }), H
        },
        w = function(N, H) {
            H.forEach(function(U) {
                N[U.id] = {
                    bio: U.bio,
                    company: U.company,
                    id: U.id,
                    name: U.name,
                    plusoneUrl: U.plusoneUrl,
                    twitterUrl: U.twitterUrl,
                    thumbnailUrl: U.thumbnailUrl
                }
            })
        },
        O = function(N) {
            return N ? (N = N.toLowerCase(), parts = N.split('_'), {
                type: parts[0],
                tag: parts[1]
            }) : {}
        },
        D = function(N, H) {
            H.forEach(function(U) {
                U.category = U.category.toLowerCase(), U.tag = U.tag.toLowerCase(), U.tag = U.tag.substr(U.category.length + 1), N[U.category] || (N[U.category] = {}), N[U.category][U.tag] = {
                    abstract: U.abstract,
                    color: U.color,
                    name: U.name,
                    order_in_category: U.order_in_category,
                    tag: U.tag
                }
            })
        },
        L = function(N, H) {
            var U = {
                end: {},
                start: {},
                diff: {}
            };
            if (N) {
                var W = P(N);
                U.start.raw = W, U.start.day = W.getDate(), U.start.hours = W.getHours(), U.start.minutes = W.getMinutes()
            }
            if (H) {
                var W = P(H);
                U.end.raw = W, U.end.day = W.getDate(), U.end.hours = W.getHours(), U.end.minutes = W.getMinutes()
            }
            return N && H && (U.diff.raw = U.end.raw - U.start.raw, U.diff.hours = U.diff.raw / 1e3 / 60 / 60), U
        },
        P = function(N) {
            var H = new Date(N),
                W = 1e3 * (60 * H.getTimezoneOffset());
            return new Date(H.getTime() + -25200000 + W)
        },
        R = function(N) {
            return f.getParameterValue('v', N)
        },
        A = function(N) {
            var H = f.getParameterValue('v', N);
            return 'https://i1.ytimg.com/vi/' + H + '/maxresdefault.jpg'
        },
        I = function(H) {
            return H.charAt(0).toUpperCase() + H.slice(1)
        },
        M = function(N) {
            this.baseUrl_ = N, this.sessions_ = {}, this.deferredLoading_ = new m.Deferred, this.data_ = {
                blocks: [],
                rooms: {},
                sessions: {},
                speakers: {},
                tags: {}
            }, this.loadSessions_()
        };
    M.prototype.loadSessions_ = function() {
        h.get(this.baseUrl_ + 'manifest_v1.json?rand=' + Math.random()).end(function(N, H) {
            if (N || !H.ok) console.error('Unable to load schedule manifest.'), this.deferredLoading_.reject(N);
            else
                for (var q, U = 0, W = H.body.data_files.length, B = 0; B < H.body.data_files.length; B++) q = H.body.data_files[B], h.get(this.baseUrl_ + q).end(function(G, z) {
                    G || !z.ok ? (console.error('Unable to load schedule file.', q), reject(G)) : (z.body ? this.readScheduleFile_(z.body) : this.readScheduleFile_(JSON.parse(z.text)), ++U >= W && (this.deferredLoading_.resolve(), window.dispatchEvent(new d(u.SESSIONS_LOADED, {
                        detail: {
                            data: this.data_
                        }
                    })), this.verifyScheduleData_()))
                }.bind(this))
        }.bind(this))
    }, M.prototype.readScheduleFile_ = function(N) {
        N.blocks && S(this.data_.blocks, N.blocks), N.rooms && _(this.data_.rooms, N.rooms), N.sessions && T(this.data_.sessions, N.sessions), N.speakers && w(this.data_.speakers, N.speakers), N.tags && D(this.data_.tags, N.tags)
    }, M.prototype.verifyScheduleData_ = function() {
        for (var N in this.data_.sessions)
            if (this.data_.sessions.hasOwnProperty(N)) {
                var H = this.data_.sessions[N];
                H.speakers.forEach(function(U) {
                    this.data_.speakers[U] || console.warn('Missing data for speaker', U)
                }.bind(this)), this.data_.rooms[H.room] || console.warn('Missing data for room', room)
            }
    }, M.init = function(N) {
        return new M(N)
    }, t.exports = M
}, , function(t, o, l) {
    var d = l(25),
        u = function(h) {
            this.containerEl = h.parentNode, this.dd = new d(h, {
                dragStartCallback: function() {
                    this.containerEl.classList.add('belt--dragging')
                }.bind(this),
                dragStopCallback: function() {
                    this.containerEl.classList.remove('belt--dragging')
                }.bind(this),
                handleClass: 'belt__draggable__content',
                speed: 0.3,
                loose: !0,
                requestAnimationFrame: !0
            }), window.addEventListener('optimizedResize', function() {
                this.dd.reflow()
            }.bind(this))
        };
    u.init = function() {
        var h = document.querySelector('.belt__draggable');
        return h ? new u(h) : void 0
    }, t.exports = u
}, , , function(t, o, l) {
    function u(X) {
        var $, Y = {},
            K = X.split(O);
        if (D.test(K[0]) ? (Y.date = null, $ = K[0]) : (Y.date = K[0], $ = K[1]), $) {
            var Z = G.exec($);
            Z ? (Y.time = $.replace(Z[1], ''), Y.timezone = Z[1]) : Y.time = $
        }
        return Y
    }

    function h(X, Y) {
        var Z, K = P[Y],
            $ = A[Y];
        if (Z = R.exec(X) || $.exec(X), Z) {
            var Q = Z[1];
            return {
                year: parseInt(Q, 10),
                restDateString: X.slice(Q.length)
            }
        }
        if (Z = L.exec(X) || K.exec(X), Z) {
            var J = Z[1];
            return {
                year: 100 * parseInt(J, 10),
                restDateString: X.slice(J.length)
            }
        }
        return {
            year: null
        }
    }

    function f(X, Y) {
        if (null === Y) return null;
        var K, $, Z, Q;
        if (0 === X.length) return $ = new Date(0), $.setUTCFullYear(Y), $;
        if (K = I.exec(X), K) return $ = new Date(0), Z = parseInt(K[1], 10) - 1, $.setUTCFullYear(Y, Z), $;
        if (K = M.exec(X), K) {
            $ = new Date(0);
            var J = parseInt(K[1], 10);
            return $.setUTCFullYear(Y, 0, J), $
        }
        if (K = N.exec(X), K) {
            $ = new Date(0), Z = parseInt(K[1], 10) - 1;
            var ee = parseInt(K[2], 10);
            return $.setUTCFullYear(Y, Z, ee), $
        }
        if (K = H.exec(X), K) return Q = parseInt(K[1], 10) - 1, _(Y, Q);
        if (K = U.exec(X), K) {
            Q = parseInt(K[1], 10) - 1;
            var te = parseInt(K[2], 10) - 1;
            return _(Y, Q, te)
        }
        return null
    }

    function m(X) {
        var Y, K, $;
        if (Y = W.exec(X), Y) return K = parseFloat(Y[1].replace(',', '.')), K % 24 * E;
        if (Y = B.exec(X), Y) return K = parseInt(Y[1], 10), $ = parseFloat(Y[2].replace(',', '.')), K % 24 * E + $ * C;
        if (Y = q.exec(X), Y) {
            K = parseInt(Y[1], 10), $ = parseInt(Y[2], 10);
            var Z = parseFloat(Y[3].replace(',', '.'));
            return K % 24 * E + $ * C + 1e3 * Z
        }
        return null
    }

    function S(X) {
        var Y, K;
        return (Y = z.exec(X), Y) ? 0 : (Y = V.exec(X), Y) ? (K = 60 * parseInt(Y[2], 10), '+' === Y[1] ? -K : K) : (Y = F.exec(X), Y ? (K = 60 * parseInt(Y[2], 10) + parseInt(Y[3], 10), '+' === Y[1] ? -K : K) : 0)
    }

    function _(X, Y, K) {
        Y = Y || 0, K = K || 0;
        var $ = new Date(0);
        $.setUTCFullYear(X, 0, 4);
        var Z = $.getUTCDay() || 7,
            Q = 7 * Y + K + 1 - Z;
        return $.setUTCDate($.getUTCDate() + Q), $
    }
    var T = l(72),
        E = 3.6e6,
        C = 6e4,
        O = /[T ]/,
        D = /:/,
        L = /^(\d{2})$/,
        P = [/^([+-]\d{2})$/, /^([+-]\d{3})$/, /^([+-]\d{4})$/],
        R = /^(\d{4})/,
        A = [/^([+-]\d{4})/, /^([+-]\d{5})/, /^([+-]\d{6})/],
        I = /^-(\d{2})$/,
        M = /^-?(\d{3})$/,
        N = /^-?(\d{2})-?(\d{2})$/,
        H = /^-?W(\d{2})$/,
        U = /^-?W(\d{2})-?(\d{1})$/,
        W = /^(\d{2}([.,]\d*)?)$/,
        B = /^(\d{2}):?(\d{2}([.,]\d*)?)$/,
        q = /^(\d{2}):?(\d{2}):?(\d{2}([.,]\d*)?)$/,
        G = /([Z+-].*)$/,
        z = /^(Z)$/,
        V = /^([+-])(\d{2})$/,
        F = /^([+-])(\d{2}):?(\d{2})$/;
    t.exports = function(X, Y) {
        if (T(X)) return new Date(X.getTime());
        if ('string' != typeof X) return new Date(X);
        var $ = (Y || {}).additionalDigits;
        $ = null == $ ? 2 : +$;
        var Z = u(X),
            Q = h(Z.date, $),
            J = Q.year,
            ee = Q.restDateString,
            te = f(ee, J);
        if (te) {
            var re, se = te.getTime(),
                ne = 0;
            return Z.time && (ne = m(Z.time)), Z.timezone ? re = S(Z.timezone) : (re = new Date(se + ne).getTimezoneOffset(), re = new Date(se + ne + re * C).getTimezoneOffset()), new Date(se + ne + re * C)
        }
        return new Date(X)
    }
}, function(t, o, l) {
    var h = l(10),
        f = {
            selector: 'a.ak-update-params[href]',
            attr: 'href',
            params: null
        };
    t.exports = {
        getParameterValue: function(m, S) {
            var _ = S || window.location.href;
            m = m.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
            var T = new RegExp('[\\?&]' + m + '=([^&#]*)'),
                E = T.exec(_);
            return null === E ? null : E[1]
        },
        updateParamsFromUrl: function(m) {
            var S = h.clone(f);
            h.merge(S, m);
            var _ = S.selector,
                T = S.attr,
                E = S.params;
            if (!E) throw '`params` is required';
            for (var D, C = {}, w = new URL(location.href), O = w.searchParams.keys(); D = O.next(), !D.done;)
                for (var R, L = D.value, P = 0; P < E.length; P++) R = E[P], R instanceof RegExp ? L.match(R) && (C[L] = w.searchParams.get(L)) : R === L && (C[L] = w.searchParams.get(L));
            for (var I, M, A = document.querySelectorAll(_), P = 0; I = A[P]; P++)
                if (M = I.getAttribute(T), M && !M.startsWith('#')) {
                    var N = new URL(I.getAttribute(T), w);
                    for (L in C) N.searchParams.set(L, C[L]);
                    I.setAttribute(T, N.toString())
                }
        }
    }
}, function(t) {
    function d(h) {
        if (h) return u(h)
    }

    function u(h) {
        for (var f in d.prototype) h[f] = d.prototype[f];
        return h
    }
    t.exports = d;
    d.prototype.on = d.prototype.addEventListener = function(h, f) {
        return this._callbacks = this._callbacks || {}, (this._callbacks['$' + h] = this._callbacks['$' + h] || []).push(f), this
    }, d.prototype.once = function(h, f) {
        function m() {
            this.off(h, m), f.apply(this, arguments)
        }
        return m.fn = f, this.on(h, m), this
    }, d.prototype.off = d.prototype.removeListener = d.prototype.removeAllListeners = d.prototype.removeEventListener = function(h, f) {
        if (this._callbacks = this._callbacks || {}, 0 == arguments.length) return this._callbacks = {}, this;
        var m = this._callbacks['$' + h];
        if (!m) return this;
        if (1 == arguments.length) return delete this._callbacks['$' + h], this;
        for (var S, _ = 0; _ < m.length; _++)
            if (S = m[_], S === f || S.fn === f) {
                m.splice(_, 1);
                break
            }
        return this
    }, d.prototype.emit = function(h) {
        this._callbacks = this._callbacks || {};
        var f = [].slice.call(arguments, 1),
            m = this._callbacks['$' + h];
        if (m) {
            m = m.slice(0);
            for (var S = 0, _ = m.length; S < _; ++S) m[S].apply(this, f)
        }
        return this
    }, d.prototype.listeners = function(h) {
        return this._callbacks = this._callbacks || {}, this._callbacks['$' + h] || []
    }, d.prototype.hasListeners = function(h) {
        return !!this.listeners(h).length
    }
}, function(t, o, l) {
    var d, u;
    (function(h, f) {
        d = f, u = 'function' == typeof d ? d.call(o, l, o, t) : d, !(u !== void 0 && (t.exports = u))
    })(this, function() {
        function h(I) {
            var M = 'Webkit Moz ms O'.split(' '),
                N = document.documentElement.style;
            if (void 0 !== N[I]) return I;
            I = I.charAt(0).toUpperCase() + I.substr(1);
            for (var H = 0; H < M.length; H++)
                if (void 0 !== N[M[H] + I]) return M[H] + I
        }

        function f(I) {
            D.backfaceVisibility && D.perspective && (I.style[D.perspective] = '1000px', I.style[D.backfaceVisibility] = 'hidden')
        }
        var m = function(I, M) {
            (this.options = this.applyDefaults(M || {}), this.bindMethods(), this.wrapper = this.getWrapperElement(I), !!this.wrapper) && (this.handle = this.getHandleElement(this.wrapper, this.options.handleClass), this.handle && (this.init(), this.bindEventListeners()))
        };
        m.prototype = {
            defaults: {
                disabled: !1,
                horizontal: !0,
                vertical: !1,
                slide: !0,
                steps: 0,
                snap: !1,
                loose: !1,
                speed: 0.1,
                xPrecision: 0,
                yPrecision: 0,
                handleClass: 'handle',
                css3: !0,
                activeClass: 'active',
                tapping: !0
            },
            init: function() {
                this.options.css3 && f(this.handle), this.value = {
                    prev: [-1, -1],
                    current: [this.options.x || 0, this.options.y || 0],
                    target: [this.options.x || 0, this.options.y || 0]
                }, this.offset = {
                    wrapper: [0, 0],
                    mouse: [0, 0],
                    prev: [-999999, -999999],
                    current: [0, 0],
                    target: [0, 0]
                }, this.dragStartPosition = {
                    x: 0,
                    y: 0
                }, this.change = [0, 0], this.stepRatios = this.calculateStepRatios(), this.activity = !1, this.dragging = !1, this.tapping = !1, this.reflow(), this.options.disabled && this.disable()
            },
            applyDefaults: function(I) {
                for (var M in this.defaults) I.hasOwnProperty(M) || (I[M] = this.defaults[M]);
                return I
            },
            getWrapperElement: function(I) {
                return 'string' == typeof I ? document.getElementById(I) : I
            },
            getHandleElement: function(I, M) {
                var N, H, U;
                if (!I.getElementsByClassName) {
                    for (H = new RegExp('(^|\\s)' + M + '(\\s|$)'), N = I.getElementsByTagName('*'), U = 0; U < N.length; U++)
                        if (H.test(N[U].className)) return N[U];
                } else if (N = I.getElementsByClassName(M), 0 < N.length) return N[0]
            },
            calculateStepRatios: function() {
                var I = [];
                if (1 <= this.options.steps)
                    for (var M = 0; M <= this.options.steps - 1; M++) I[M] = 1 < this.options.steps ? M / (this.options.steps - 1) : 0;
                return I
            },
            setWrapperOffset: function() {
                this.offset.wrapper = O.get(this.wrapper)
            },
            calculateBounds: function() {
                var I = {
                    top: this.options.top || 0,
                    bottom: -(this.options.bottom || 0) + this.wrapper.offsetHeight,
                    left: this.options.left || 0,
                    right: -(this.options.right || 0) + this.wrapper.offsetWidth
                };
                return I.availWidth = I.right - I.left - this.handle.offsetWidth, I.availHeight = I.bottom - I.top - this.handle.offsetHeight, I
            },
            calculateValuePrecision: function() {
                var I = this.options.xPrecision || _Mathabs(this.bounds.availWidth),
                    M = this.options.yPrecision || _Mathabs(this.bounds.availHeight);
                return [I ? 1 / I : 0, M ? 1 / M : 0]
            },
            bindMethods: function() {
                this.requestAnimationFrame = 'function' == typeof this.options.customRequestAnimationFrame ? S(this.options.customRequestAnimationFrame, window) : S(P, window), this.cancelAnimationFrame = 'function' == typeof this.options.customCancelAnimationFrame ? S(this.options.customCancelAnimationFrame, window) : S(R, window), this.animateWithRequestAnimationFrame = S(this.animateWithRequestAnimationFrame, this), this.animate = S(this.animate, this), this.onHandleMouseDown = S(this.onHandleMouseDown, this), this.onHandleTouchStart = S(this.onHandleTouchStart, this), this.onDocumentMouseMove = S(this.onDocumentMouseMove, this), this.onWrapperTouchMove = S(this.onWrapperTouchMove, this), this.onWrapperMouseDown = S(this.onWrapperMouseDown, this), this.onWrapperTouchStart = S(this.onWrapperTouchStart, this), this.onDocumentMouseUp = S(this.onDocumentMouseUp, this), this.onDocumentTouchEnd = S(this.onDocumentTouchEnd, this), this.onHandleClick = S(this.onHandleClick, this), this.onWindowResize = S(this.onWindowResize, this)
            },
            bindEventListeners: function() {
                _(this.handle, 'mousedown', this.onHandleMouseDown), _(this.handle, 'touchstart', this.onHandleTouchStart), _(document, 'mousemove', this.onDocumentMouseMove), _(this.wrapper, 'touchmove', this.onWrapperTouchMove), _(this.wrapper, 'mousedown', this.onWrapperMouseDown), _(this.wrapper, 'touchstart', this.onWrapperTouchStart), _(document, 'mouseup', this.onDocumentMouseUp), _(document, 'touchend', this.onDocumentTouchEnd), _(this.handle, 'click', this.onHandleClick), _(window, 'resize', this.onWindowResize), this.animate(!1, !0), this.interval = this.requestAnimationFrame(this.animateWithRequestAnimationFrame)
            },
            unbindEventListeners: function() {
                T(this.handle, 'mousedown', this.onHandleMouseDown), T(this.handle, 'touchstart', this.onHandleTouchStart), T(document, 'mousemove', this.onDocumentMouseMove), T(this.wrapper, 'touchmove', this.onWrapperTouchMove), T(this.wrapper, 'mousedown', this.onWrapperMouseDown), T(this.wrapper, 'touchstart', this.onWrapperTouchStart), T(document, 'mouseup', this.onDocumentMouseUp), T(document, 'touchend', this.onDocumentTouchEnd), T(this.handle, 'click', this.onHandleClick), T(window, 'resize', this.onWindowResize), this.cancelAnimationFrame(this.interval)
            },
            onHandleMouseDown: function(I) {
                w.refresh(I), E(I), C(I), this.activity = !1, this.startDrag()
            },
            onHandleTouchStart: function(I) {
                w.refresh(I), C(I), this.activity = !1, this.startDrag()
            },
            onDocumentMouseMove: function(I) {
                0 == I.clientX - this.dragStartPosition.x && 0 == I.clientY - this.dragStartPosition.y || (w.refresh(I), this.dragging && (this.activity = !0, E(I)))
            },
            onWrapperTouchMove: function(I) {
                return w.refresh(I), !this.activity && this.draggingOnDisabledAxis() ? void(this.dragging && this.stopDrag()) : void(E(I), this.activity = !0)
            },
            onWrapperMouseDown: function(I) {
                w.refresh(I), E(I), this.startTap()
            },
            onWrapperTouchStart: function(I) {
                w.refresh(I), E(I), this.startTap()
            },
            onDocumentMouseUp: function() {
                this.stopDrag(), this.stopTap()
            },
            onDocumentTouchEnd: function() {
                this.stopDrag(), this.stopTap()
            },
            onHandleClick: function(I) {
                this.activity && (E(I), C(I))
            },
            onWindowResize: function() {
                this.reflow()
            },
            enable: function() {
                this.disabled = !1, this.handle.className = this.handle.className.replace(/\s?disabled/g, '')
            },
            disable: function() {
                this.disabled = !0, this.handle.className += ' disabled'
            },
            reflow: function() {
                this.setWrapperOffset(), this.bounds = this.calculateBounds(), this.valuePrecision = this.calculateValuePrecision(), this.updateOffsetFromValue()
            },
            getStep: function() {
                return [this.getStepNumber(this.value.target[0]), this.getStepNumber(this.value.target[1])]
            },
            getStepWidth: function() {
                return _Mathabs(this.bounds.availWidth / this.options.steps)
            },
            getValue: function() {
                return this.value.target
            },
            setStep: function(I, M, N) {
                this.setValue(this.options.steps && 1 < I ? (I - 1) / (this.options.steps - 1) : 0, this.options.steps && 1 < M ? (M - 1) / (this.options.steps - 1) : 0, N)
            },
            setValue: function(I, M, N) {
                this.setTargetValue([I, M || 0]), N && (this.groupCopy(this.value.current, this.value.target), this.updateOffsetFromValue(), this.callAnimationCallback())
            },
            startTap: function() {
                this.disabled || !this.options.tapping || (this.tapping = !0, this.setWrapperOffset(), this.setTargetValueByOffset([w.x - this.offset.wrapper[0] - this.handle.offsetWidth / 2, w.y - this.offset.wrapper[1] - this.handle.offsetHeight / 2]))
            },
            stopTap: function() {
                this.disabled || !this.tapping || (this.tapping = !1, this.setTargetValue(this.value.current))
            },
            startDrag: function() {
                this.disabled || (this.dragging = !0, this.setWrapperOffset(), this.dragStartPosition = {
                    x: w.x,
                    y: w.y
                }, this.offset.mouse = [w.x - O.get(this.handle)[0], w.y - O.get(this.handle)[1]], !this.wrapper.className.match(this.options.activeClass) && (this.wrapper.className += ' ' + this.options.activeClass), this.callDragStartCallback())
            },
            stopDrag: function() {
                if (!this.disabled && this.dragging) {
                    this.dragging = !1;
                    var I = 0 === this.bounds.availWidth ? 0 : (w.x - this.dragStartPosition.x) / this.bounds.availWidth,
                        M = 0 === this.bounds.availHeight ? 0 : (w.y - this.dragStartPosition.y) / this.bounds.availHeight,
                        H = this.groupClone(this.value.current);
                    if (this.options.slide) {
                        var U = this.change;
                        H[0] += 4 * U[0], H[1] += 4 * U[1]
                    }
                    this.setTargetValue(H), this.wrapper.className = this.wrapper.className.replace(' ' + this.options.activeClass, ''), this.callDragStopCallback([I, M])
                }
            },
            callAnimationCallback: function() {
                var I = this.value.current;
                this.options.snap && 1 < this.options.steps && (I = this.getClosestSteps(I)), this.groupCompare(I, this.value.prev) || ('function' == typeof this.options.animationCallback && this.options.animationCallback.call(this, I[0], I[1]), this.groupCopy(this.value.prev, I))
            },
            callTargetCallback: function() {
                'function' == typeof this.options.callback && this.options.callback.call(this, this.value.target[0], this.value.target[1])
            },
            callDragStartCallback: function() {
                'function' == typeof this.options.dragStartCallback && this.options.dragStartCallback.call(this, this.value.target[0], this.value.target[1])
            },
            callDragStopCallback: function(I) {
                'function' == typeof this.options.dragStopCallback && this.options.dragStopCallback.call(this, this.value.target[0], this.value.target[1], I)
            },
            animateWithRequestAnimationFrame: function(I) {
                I ? (this.timeOffset = this.timeStamp ? I - this.timeStamp : 0, this.timeStamp = I) : this.timeOffset = 25, this.animate(), this.interval = this.requestAnimationFrame(this.animateWithRequestAnimationFrame)
            },
            animate: function(I, M) {
                if (!I || this.dragging) {
                    if (this.dragging) {
                        var N = this.groupClone(this.value.target),
                            H = [w.x - this.offset.wrapper[0] - this.offset.mouse[0], w.y - this.offset.wrapper[1] - this.offset.mouse[1]];
                        this.setTargetValueByOffset(H, this.options.loose), this.change = [this.value.target[0] - N[0], this.value.target[1] - N[1]]
                    }(this.dragging || M) && this.groupCopy(this.value.current, this.value.target), (this.dragging || this.glide() || M) && (this.updateOffsetFromValue(), this.callAnimationCallback())
                }
            },
            glide: function() {
                var I = [this.value.target[0] - this.value.current[0], this.value.target[1] - this.value.current[1]];
                return (I[0] || I[1]) && (_Mathabs(I[0]) > this.valuePrecision[0] || _Mathabs(I[1]) > this.valuePrecision[1] ? (this.value.current[0] += I[0] * _Mathmin(this.options.speed * this.timeOffset / 25, 1), this.value.current[1] += I[1] * _Mathmin(this.options.speed * this.timeOffset / 25, 1)) : this.groupCopy(this.value.current, this.value.target), !0)
            },
            updateOffsetFromValue: function() {
                this.offset.current = this.options.snap ? this.getOffsetsByRatios(this.getClosestSteps(this.value.current)) : this.getOffsetsByRatios(this.value.current), this.groupCompare(this.offset.current, this.offset.prev) || (this.renderHandlePosition(), this.groupCopy(this.offset.prev, this.offset.current))
            },
            renderHandlePosition: function() {
                var I = '';
                return this.options.css3 && D.transform ? (this.options.horizontal && (I += 'translateX(' + this.offset.current[0] + 'px)'), this.options.vertical && (I += ' translateY(' + this.offset.current[1] + 'px)'), void(this.handle.style[D.transform] = I)) : void(this.options.horizontal && (this.handle.style.left = this.offset.current[0] + 'px'), this.options.vertical && (this.handle.style.top = this.offset.current[1] + 'px'))
            },
            setTargetValue: function(I, M) {
                var N = M ? this.getLooseValue(I) : this.getProperValue(I);
                this.groupCopy(this.value.target, N), this.offset.target = this.getOffsetsByRatios(N), this.callTargetCallback()
            },
            setTargetValueByOffset: function(I, M) {
                var N = this.getRatiosByOffsets(I),
                    H = M ? this.getLooseValue(N) : this.getProperValue(N);
                this.groupCopy(this.value.target, H), this.offset.target = this.getOffsetsByRatios(H)
            },
            getLooseValue: function(I) {
                var M = this.getProperValue(I);
                return [M[0] + (I[0] - M[0]) / 4, M[1] + (I[1] - M[1]) / 4]
            },
            getProperValue: function(I) {
                var M = this.groupClone(I);
                return M[0] = _Mathmax(M[0], 0), M[1] = _Mathmax(M[1], 0), M[0] = _Mathmin(M[0], 1), M[1] = _Mathmin(M[1], 1), (!this.dragging && !this.tapping || this.options.snap) && 1 < this.options.steps && (M = this.getClosestSteps(M)), M
            },
            getRatiosByOffsets: function(I) {
                return [this.getRatioByOffset(I[0], this.bounds.availWidth, this.bounds.left), this.getRatioByOffset(I[1], this.bounds.availHeight, this.bounds.top)]
            },
            getRatioByOffset: function(I, M, N) {
                return M ? (I - N) / M : 0
            },
            getOffsetsByRatios: function(I) {
                return [this.getOffsetByRatio(I[0], this.bounds.availWidth, this.bounds.left), this.getOffsetByRatio(I[1], this.bounds.availHeight, this.bounds.top)]
            },
            getOffsetByRatio: function(I, M, N) {
                return _Mathround(I * M) + N
            },
            getStepNumber: function(I) {
                return this.getClosestStep(I) * (this.options.steps - 1) + 1
            },
            getClosestSteps: function(I) {
                return [this.getClosestStep(I[0]), this.getClosestStep(I[1])]
            },
            getClosestStep: function(I) {
                for (var M = 0, N = 1, H = 0; H <= this.options.steps - 1; H++) _Mathabs(this.stepRatios[H] - I) < N && (N = _Mathabs(this.stepRatios[H] - I), M = H);
                return this.stepRatios[M]
            },
            groupCompare: function(I, M) {
                return I[0] == M[0] && I[1] == M[1]
            },
            groupCopy: function(I, M) {
                I[0] = M[0], I[1] = M[1]
            },
            groupClone: function(I) {
                return [I[0], I[1]]
            },
            draggingOnDisabledAxis: function() {
                return !this.options.horizontal && w.xDiff > w.yDiff || !this.options.vertical && w.yDiff > w.xDiff
            }
        };
        for (var S = function(I, M) {
                return function() {
                    return I.apply(M, arguments)
                }
            }, _ = function(I, M, N) {
                I.addEventListener ? I.addEventListener(M, N, !1) : I.attachEvent && I.attachEvent('on' + M, N)
            }, T = function(I, M, N) {
                I.removeEventListener ? I.removeEventListener(M, N, !1) : I.detachEvent && I.detachEvent('on' + M, N)
            }, E = function(I) {
                I || (I = window.event), I.preventDefault && I.preventDefault(), I.returnValue = !1
            }, C = function(I) {
                I || (I = window.event), I.stopPropagation && I.stopPropagation(), I.cancelBubble = !0
            }, w = {
                x: 0,
                y: 0,
                xDiff: 0,
                yDiff: 0,
                refresh: function(I) {
                    I || (I = window.event), 'mousemove' == I.type ? this.set(I) : I.touches && this.set(I.touches[0])
                },
                set: function(I) {
                    var M = this.x,
                        N = this.y;
                    I.clientX || I.clientY ? (this.x = I.clientX, this.y = I.clientY) : (I.pageX || I.pageY) && (this.x = I.pageX - document.body.scrollLeft - document.documentElement.scrollLeft, this.y = I.pageY - document.body.scrollTop - document.documentElement.scrollTop), this.xDiff = _Mathabs(this.x - M), this.yDiff = _Mathabs(this.y - N)
                }
            }, O = {
                get: function(I) {
                    var M = {
                        left: 0,
                        top: 0
                    };
                    return void 0 !== I.getBoundingClientRect && (M = I.getBoundingClientRect()), [M.left, M.top]
                }
            }, D = {
                transform: h('transform'),
                perspective: h('perspective'),
                backfaceVisibility: h('backfaceVisibility')
            }, L = ['webkit', 'moz'], P = window.requestAnimationFrame, R = window.cancelAnimationFrame, A = 0; A < L.length && !P; ++A) P = window[L[A] + 'RequestAnimationFrame'], R = window[L[A] + 'CancelAnimationFrame'] || window[L[A] + 'CancelRequestAnimationFrame'];
        return P || (P = function(I) {
            return setTimeout(I, 25)
        }, R = clearTimeout), m
    })
}, function(t, o, l) {
    function d() {}

    function u(M) {
        if (!D(M)) return M;
        var N = [];
        for (var H in M) h(N, H, M[H]);
        return N.join('&')
    }

    function h(M, N, H) {
        if (!(null != H)) null === H && M.push(encodeURIComponent(N));
        else if (Array.isArray(H)) H.forEach(function(W) {
            h(M, N, W)
        });
        else if (D(H))
            for (var U in H) h(M, N + '[' + U + ']', H[U]);
        else M.push(encodeURIComponent(N) + '=' + encodeURIComponent(H))
    }

    function f(M) {
        for (var U, W, N = {}, H = M.split('&'), B = 0, q = H.length; B < q; ++B) U = H[B], W = U.indexOf('='), -1 == W ? N[decodeURIComponent(U)] = '' : N[decodeURIComponent(U.slice(0, W))] = decodeURIComponent(U.slice(W + 1));
        return N
    }

    function m(M) {
        var N = M.split(/\r?\n/),
            H = {},
            U, W, B, q;
        N.pop();
        for (var G = 0, z = N.length; G < z; ++G) W = N[G], U = W.indexOf(':'), B = W.slice(0, U).toLowerCase(), q = I(W.slice(U + 1)), H[B] = q;
        return H
    }

    function S(M) {
        return /[\/+]json\b/.test(M)
    }

    function _(M) {
        this.req = M, this.xhr = this.req.xhr, this.text = 'HEAD' != this.req.method && ('' === this.xhr.responseType || 'text' === this.xhr.responseType) || 'undefined' == typeof this.xhr.responseType ? this.xhr.responseText : null, this.statusText = this.req.xhr.statusText;
        var N = this.xhr.status;
        1223 === N && (N = 204), this._setStatusProperties(N), this.header = this.headers = m(this.xhr.getAllResponseHeaders()), this.header['content-type'] = this.xhr.getResponseHeader('content-type'), this._setHeaderProperties(this.header), this.body = null === this.text && M._responseType ? this.xhr.response : 'HEAD' == this.req.method ? null : this._parseBody(this.text ? this.text : this.xhr.response)
    }

    function T(M, N) {
        var H = this;
        this._query = this._query || [], this.method = M, this.url = N, this.header = {}, this._header = {}, this.on('end', function() {
            var U = null,
                W = null;
            try {
                W = new _(H)
            } catch (q) {
                return U = new Error('Parser is unable to parse the response'), U.parse = !0, U.original = q, H.xhr ? (U.rawResponse = 'undefined' == typeof H.xhr.responseType ? H.xhr.responseText : H.xhr.response, U.status = H.xhr.status ? H.xhr.status : null, U.statusCode = U.status) : (U.rawResponse = null, U.status = null), H.callback(U)
            }
            H.emit('response', W);
            var B;
            try {
                H._isResponseOK(W) || (B = new Error(W.statusText || 'Unsuccessful HTTP response'), B.original = U, B.response = W, B.status = W.status)
            } catch (q) {
                B = q
            }
            B ? H.callback(B, W) : H.callback(null, W)
        })
    }

    function E(M, N, H) {
        var U = A('DELETE', M);
        return 'function' == typeof N && (H = N, N = null), N && U.send(N), H && U.end(H), U
    }
    var C;
    'undefined' == typeof window ? 'undefined' == typeof self ? (console.warn('Using browser-only version of superagent in non-browser environment'), C = this) : C = self : C = window;
    var w = l(24),
        O = l(28),
        D = l(11),
        L = l(27),
        P = l(29),
        R = l(30);
    var A = o = t.exports = function(M, N) {
        return 'function' == typeof N ? new o.Request('GET', M).end(N) : 1 == arguments.length ? new o.Request('GET', M) : new o.Request(M, N)
    };
    o.Request = T, A.getXHR = function() {
        if (C.XMLHttpRequest && (!C.location || 'file:' != C.location.protocol || !C.ActiveXObject)) return new XMLHttpRequest;
        try {
            return new ActiveXObject('Microsoft.XMLHTTP')
        } catch (M) {}
        try {
            return new ActiveXObject('Msxml2.XMLHTTP.6.0')
        } catch (M) {}
        try {
            return new ActiveXObject('Msxml2.XMLHTTP.3.0')
        } catch (M) {}
        try {
            return new ActiveXObject('Msxml2.XMLHTTP')
        } catch (M) {}
        throw Error('Browser-only verison of superagent could not find XHR')
    };
    var I = function(M) {
        return M.trim()
    };
    A.serializeObject = u, A.parseString = f, A.types = {
        html: 'text/html',
        json: 'application/json',
        xml: 'application/xml',
        urlencoded: 'application/x-www-form-urlencoded',
        form: 'application/x-www-form-urlencoded',
        'form-data': 'application/x-www-form-urlencoded'
    }, A.serialize = {
        'application/x-www-form-urlencoded': u,
        'application/json': JSON.stringify
    }, A.parse = {
        'application/x-www-form-urlencoded': f,
        'application/json': JSON.parse
    }, P(_.prototype), _.prototype._parseBody = function(M) {
        var N = A.parse[this.type];
        return this.req._parser ? this.req._parser(this, M) : (!N && S(this.type) && (N = A.parse['application/json']), N && M && (M.length || M instanceof Object) ? N(M) : null)
    }, _.prototype.toError = function() {
        var M = this.req,
            N = M.method,
            H = M.url,
            U = 'cannot ' + N + ' ' + H + ' (' + this.status + ')',
            W = new Error(U);
        return W.status = this.status, W.method = N, W.url = H, W
    }, A.Response = _, w(T.prototype), O(T.prototype), T.prototype.type = function(M) {
        return this.set('Content-Type', A.types[M] || M), this
    }, T.prototype.accept = function(M) {
        return this.set('Accept', A.types[M] || M), this
    }, T.prototype.auth = function(M, N, H) {
        switch ('object' == typeof N && null !== N && (H = N), H || (H = {
            type: 'function' == typeof btoa ? 'basic' : 'auto'
        }), H.type) {
            case 'basic':
                this.set('Authorization', 'Basic ' + btoa(M + ':' + N));
                break;
            case 'auto':
                this.username = M, this.password = N;
                break;
            case 'bearer':
                this.set('Authorization', 'Bearer ' + M);
        }
        return this
    }, T.prototype.query = function(M) {
        return 'string' != typeof M && (M = u(M)), M && this._query.push(M), this
    }, T.prototype.attach = function(M, N, H) {
        if (N) {
            if (this._data) throw Error('superagent can\'t mix .send() and .attach()');
            this._getFormData().append(M, N, H || N.name)
        }
        return this
    }, T.prototype._getFormData = function() {
        return this._formData || (this._formData = new C.FormData), this._formData
    }, T.prototype.callback = function(M, N) {
        if (this._maxRetries && this._retries++ < this._maxRetries && R(M, N)) return this._retry();
        var H = this._callback;
        this.clearTimeout(), M && (this._maxRetries && (M.retries = this._retries - 1), this.emit('error', M)), H(M, N)
    }, T.prototype.crossDomainError = function() {
        var M = new Error('Request has been terminated\nPossible causes: the network is offline, Origin is not allowed by Access-Control-Allow-Origin, the page is being unloaded, etc.');
        M.crossDomain = !0, M.status = this.status, M.method = this.method, M.url = this.url, this.callback(M)
    }, T.prototype.buffer = T.prototype.ca = T.prototype.agent = function() {
        return console.warn('This is not supported in browser version of superagent'), this
    }, T.prototype.pipe = T.prototype.write = function() {
        throw Error('Streaming is not supported in browser version of superagent')
    }, T.prototype._appendQueryString = function() {
        var M = this._query.join('&');
        if (M && (this.url += (0 <= this.url.indexOf('?') ? '&' : '?') + M), this._sort) {
            var N = this.url.indexOf('?');
            if (0 <= N) {
                var H = this.url.substring(N + 1).split('&');
                L(this._sort) ? H.sort(this._sort) : H.sort(), this.url = this.url.substring(0, N) + '?' + H.join('&')
            }
        }
    }, T.prototype._isHost = function(N) {
        return N && 'object' == typeof N && !Array.isArray(N) && '[object Object]' !== Object.prototype.toString.call(N)
    }, T.prototype.end = function(M) {
        return this._endCalled && console.warn('Warning: .end() was called twice. This is not supported in superagent'), this._endCalled = !0, this._callback = M || d, this._appendQueryString(), this._end()
    }, T.prototype._end = function() {
        var M = this,
            N = this.xhr = A.getXHR(),
            H = this._formData || this._data;
        this._setTimeouts(), N.onreadystatechange = function() {
            var G = N.readyState;
            if (2 <= G && M._responseTimeoutTimer && clearTimeout(M._responseTimeoutTimer), 4 == G) {
                var z;
                try {
                    z = N.status
                } catch (V) {
                    z = 0
                }
                return z ? void M.emit('end') : M.timedout || M._aborted ? void 0 : M.crossDomainError()
            }
        };
        var U = function(G, z) {
            0 < z.total && (z.percent = 100 * (z.loaded / z.total)), z.direction = G, M.emit('progress', z)
        };
        if (this.hasListeners('progress')) try {
            N.onprogress = U.bind(null, 'download'), N.upload && (N.upload.onprogress = U.bind(null, 'upload'))
        } catch (G) {}
        try {
            this.username && this.password ? N.open(this.method, this.url, !0, this.username, this.password) : N.open(this.method, this.url, !0)
        } catch (G) {
            return this.callback(G)
        }
        if (this._withCredentials && (N.withCredentials = !0), !this._formData && 'GET' != this.method && 'HEAD' != this.method && 'string' != typeof H && !this._isHost(H)) {
            var W = this._header['content-type'],
                B = this._serializer || A.serialize[W ? W.split(';')[0] : ''];
            !B && S(W) && (B = A.serialize['application/json']), B && (H = B(H))
        }
        for (var q in this.header) null != this.header[q] && this.header.hasOwnProperty(q) && N.setRequestHeader(q, this.header[q]);
        return this._responseType && (N.responseType = this._responseType), this.emit('request', this), N.send('undefined' == typeof H ? null : H), this
    }, A.get = function(M, N, H) {
        var U = A('GET', M);
        return 'function' == typeof N && (H = N, N = null), N && U.query(N), H && U.end(H), U
    }, A.head = function(M, N, H) {
        var U = A('HEAD', M);
        return 'function' == typeof N && (H = N, N = null), N && U.send(N), H && U.end(H), U
    }, A.options = function(M, N, H) {
        var U = A('OPTIONS', M);
        return 'function' == typeof N && (H = N, N = null), N && U.send(N), H && U.end(H), U
    };
    A.del = E, A['delete'] = E, A.patch = function(M, N, H) {
        var U = A('PATCH', M);
        return 'function' == typeof N && (H = N, N = null), N && U.send(N), H && U.end(H), U
    }, A.post = function(M, N, H) {
        var U = A('POST', M);
        return 'function' == typeof N && (H = N, N = null), N && U.send(N), H && U.end(H), U
    }, A.put = function(M, N, H) {
        var U = A('PUT', M);
        return 'function' == typeof N && (H = N, N = null), N && U.send(N), H && U.end(H), U
    }
}, function(t, o, l) {
    var u = l(11);
    t.exports = function(h) {
        var f = u(h) ? Object.prototype.toString.call(h) : '';
        return '[object Function]' === f
    }
}, function(t, o, l) {
    function d(f) {
        if (f) return u(f)
    }

    function u(f) {
        for (var m in d.prototype) f[m] = d.prototype[m];
        return f
    }
    var h = l(11);
    t.exports = d, d.prototype.clearTimeout = function() {
        return clearTimeout(this._timer), clearTimeout(this._responseTimeoutTimer), delete this._timer, delete this._responseTimeoutTimer, this
    }, d.prototype.parse = function(m) {
        return this._parser = m, this
    }, d.prototype.responseType = function(f) {
        return this._responseType = f, this
    }, d.prototype.serialize = function(m) {
        return this._serializer = m, this
    }, d.prototype.timeout = function(m) {
        if (!m || 'object' != typeof m) return this._timeout = m, this._responseTimeout = 0, this;
        for (var S in m) 'deadline' === S ? this._timeout = m.deadline : 'response' === S ? this._responseTimeout = m.response : console.warn('Unknown timeout option', S);
        return this
    }, d.prototype.retry = function(m) {
        return (0 === arguments.length || !0 === m) && (m = 1), 0 >= m && (m = 0), this._maxRetries = m, this._retries = 0, this
    }, d.prototype._retry = function() {
        return this.clearTimeout(), this.req && (this.req = null, this.req = this.request()), this._aborted = !1, this.timedout = !1, this._end()
    }, d.prototype.then = function(m, S) {
        if (!this._fullfilledPromise) {
            var _ = this;
            this._endCalled && console.warn('Warning: superagent request was sent twice, because both .end() and .then() were called. Never call .end() if you use promises'), this._fullfilledPromise = new Promise(function(T, E) {
                _.end(function(C, w) {
                    C ? E(C) : T(w)
                })
            })
        }
        return this._fullfilledPromise.then(m, S)
    }, d.prototype.catch = function(f) {
        return this.then(void 0, f)
    }, d.prototype.use = function(m) {
        return m(this), this
    }, d.prototype.ok = function(f) {
        if ('function' != typeof f) throw Error('Callback required');
        return this._okCallback = f, this
    }, d.prototype._isResponseOK = function(f) {
        return !!f && (this._okCallback ? this._okCallback(f) : 200 <= f.status && 300 > f.status)
    }, d.prototype.get = function(f) {
        return this._header[f.toLowerCase()]
    }, d.prototype.getHeader = d.prototype.get, d.prototype.set = function(f, m) {
        if (h(f)) {
            for (var S in f) this.set(S, f[S]);
            return this
        }
        return this._header[f.toLowerCase()] = m, this.header[f] = m, this
    }, d.prototype.unset = function(f) {
        return delete this._header[f.toLowerCase()], delete this.header[f], this
    }, d.prototype.field = function(f, m) {
        if (null === f || void 0 === f) throw new Error('.field(name, val) name can not be empty');
        if (this._data && console.error('.field() can\'t be used if .send() is used. Please use only .send() or only .field() & .attach()'), h(f)) {
            for (var S in f) this.field(S, f[S]);
            return this
        }
        if (Array.isArray(m)) {
            for (var _ in m) this.field(f, m[_]);
            return this
        }
        if (null === m || void 0 === m) throw new Error('.field(name, val) val can not be empty');
        return 'boolean' == typeof m && (m = '' + m), this._getFormData().append(f, m), this
    }, d.prototype.abort = function() {
        return this._aborted ? this : (this._aborted = !0, this.xhr && this.xhr.abort(), this.req && this.req.abort(), this.clearTimeout(), this.emit('abort'), this)
    }, d.prototype.withCredentials = function(f) {
        return void 0 == f && (f = !0), this._withCredentials = f, this
    }, d.prototype.redirects = function(f) {
        return this._maxRedirects = f, this
    }, d.prototype.toJSON = function() {
        return {
            method: this.method,
            url: this.url,
            data: this._data,
            headers: this._header
        }
    }, d.prototype.send = function(f) {
        var m = h(f),
            S = this._header['content-type'];
        if (this._formData && console.error('.send() can\'t be used if .attach() or .field() is used. Please use only .send() or only .field() & .attach()'), m && !this._data) Array.isArray(f) ? this._data = [] : !this._isHost(f) && (this._data = {});
        else if (f && this._data && this._isHost(this._data)) throw Error('Can\'t merge these send calls');
        if (m && h(this._data))
            for (var _ in f) this._data[_] = f[_];
        else 'string' == typeof f ? (S || this.type('form'), S = this._header['content-type'], this._data = 'application/x-www-form-urlencoded' == S ? this._data ? this._data + '&' + f : f : (this._data || '') + f) : this._data = f;
        return !m || this._isHost(f) ? this : (S || this.type('json'), this)
    }, d.prototype.sortQuery = function(f) {
        return this._sort = 'undefined' == typeof f || f, this
    }, d.prototype._timeoutError = function(f, m, S) {
        if (!this._aborted) {
            var _ = new Error(f + m + 'ms exceeded');
            _.timeout = m, _.code = 'ECONNABORTED', _.errno = S, this.timedout = !0, this.abort(), this.callback(_)
        }
    }, d.prototype._setTimeouts = function() {
        var f = this;
        this._timeout && !this._timer && (this._timer = setTimeout(function() {
            f._timeoutError('Timeout of ', f._timeout, 'ETIME')
        }, this._timeout)), this._responseTimeout && !this._responseTimeoutTimer && (this._responseTimeoutTimer = setTimeout(function() {
            f._timeoutError('Response timeout of ', f._responseTimeout, 'ETIMEDOUT')
        }, this._responseTimeout))
    }
}, function(t, o, l) {
    function d(f) {
        if (f) return u(f)
    }

    function u(f) {
        for (var m in d.prototype) f[m] = d.prototype[m];
        return f
    }
    var h = l(31);
    t.exports = d, d.prototype.get = function(f) {
        return this.header[f.toLowerCase()]
    }, d.prototype._setHeaderProperties = function(f) {
        var m = f['content-type'] || '';
        this.type = h.type(m);
        var S = h.params(m);
        for (var _ in S) this[_] = S[_];
        this.links = {};
        try {
            f.link && (this.links = h.parseLinks(f.link))
        } catch (T) {}
    }, d.prototype._setStatusProperties = function(f) {
        var m = 0 | f / 100;
        this.status = this.statusCode = f, this.statusType = m, this.info = 1 == m, this.ok = 2 == m, this.redirect = 3 == m, this.clientError = 4 == m, this.serverError = 5 == m, this.error = (4 == m || 5 == m) && this.toError(), this.accepted = 202 == f, this.noContent = 204 == f, this.badRequest = 400 == f, this.unauthorized = 401 == f, this.notAcceptable = 406 == f, this.forbidden = 403 == f, this.notFound = 404 == f
    }
}, function(t) {
    var l = ['ECONNRESET', 'ETIMEDOUT', 'EADDRINFO', 'ESOCKETTIMEDOUT'];
    t.exports = function(u, h) {
        return u && u.code && ~l.indexOf(u.code) || h && h.status && 500 <= h.status || u && 'timeout' in u && 'ECONNABORTED' == u.code || u && 'crossDomain' in u
    }
}, function(t, o) {
    o.type = function(l) {
        return l.split(/ *; */).shift()
    }, o.params = function(l) {
        return l.split(/ *; */).reduce(function(d, u) {
            var h = u.split(/ *= */),
                f = h.shift(),
                m = h.shift();
            return f && m && (d[f] = m), d
        }, {})
    }, o.parseLinks = function(l) {
        return l.split(/ *, */).reduce(function(d, u) {
            var h = u.split(/ *; */),
                f = h[0].slice(1, -1),
                m = h[1].split(/ *= */)[1].slice(1, -1);
            return d[m] = f, d
        }, {})
    }, o.cleanHeader = function(l, d) {
        return delete l['content-type'], delete l['content-length'], delete l['transfer-encoding'], delete l.host, d && delete l.cookie, l
    }
}, , , , , , , , , , , function(t, o, l) {
    'use strict';
    var d = l(56);
    const u = l(68),
        h = l(70),
        f = l(71),
        m = l(69),
        S = {
            COUNTDOWN_PARENT: '.js-countdown',
            SLASHES_PARENT: '.js-countdown-slashes',
            HOURS_PARENT: '.js-countdown-hours',
            MINUTES_PARENT: '.js-countdown-minutes',
            SECONDS_PARENT: '.js-countdown-seconds',
            NAV_HOURS: '.js-countdown-nav-hours',
            NAV_MINUTES: '.js-countdown-nav-minutes',
            NAV_SECONDS: '.js-countdown-nav-seconds',
            HOURS_LABEL: '.js-countdown-hours-label',
            MINUTES_LABEL: '.js-countdown-minutes-label',
            SECONDS_LABEL: '.js-countdown-seconds-label',
            FALLBACK_TIME: '.js-countdown-fallback-time',
            PAUSE_BUTTON: '.js-countdown-pause',
            INJECT_E: '.js-countdown-inject-e',
            PI_LABEL: '.js-countdown-pi-label'
        },
        _ = {
            ACTIVE: '-active',
            HIDDEN: '-hidden'
        },
        T = 1 < window.devicePixelRatio ? window.devicePixelRatio : 1,
        E = 811,
        C = 60,
        w = {
            DESKTOP: {
                HOURS: {
                    COLUMNS: 12,
                    ROWS: 4
                },
                MINUTES: {
                    COLUMNS: 30,
                    ROWS: 10
                },
                SECONDS: {
                    COLUMNS: 30,
                    ROWS: 10
                }
            },
            MOBILE: {
                HOURS: {
                    COLUMNS: 8,
                    ROWS: 6
                },
                MINUTES: {
                    COLUMNS: 12,
                    ROWS: 10
                },
                SECONDS: {
                    COLUMNS: 12,
                    ROWS: 10
                }
            }
        },
        O = {
            DEFAULTS: {
                HOURS: 4253624,
                MINUTES: 16568899,
                SECONDS: 4253624
            },
            TICKS: {
                HOURS: 16568899,
                MINUTES: 2614525,
                SECONDS: 5467646
            },
            WAVES: {
                HOURS: 9215743,
                MINUTES: 9215743,
                SECONDS: 1638399
            },
            HOVERS: {
                HOURS: 9215743,
                MINUTES: 5467646,
                SECONDS: 5467646
            }
        };
    let D = [];
    for (let R = 15; 105 >= R; R += 15) D.push(R);
    const L = D;
    o.a = class {
        constructor() {
            this.countdownParent = document.querySelector(S.COUNTDOWN_PARENT), this.slashesParent = document.querySelector(S.SLASHES_PARENT);
            this.countdownParent && this.slashesParent && (this.navHours = document.querySelector(S.NAV_HOURS), this.navMinutes = document.querySelector(S.NAV_MINUTES), this.navSeconds = document.querySelector(S.NAV_SECONDS), this.pauseButton = document.querySelector(S.PAUSE_BUTTON), this.hoursLabel = document.querySelector(S.HOURS_LABEL), this.minutesLabel = document.querySelector(S.MINUTES_LABEL), this.secondsLabel = document.querySelector(S.SECONDS_LABEL), this.isMobile = window.innerWidth <= E, this.pixelDensity = T, !window.WebGL2RenderingContext && (640 < this.gridWidth && 1025 > this.gridWidth ? this.pixelDensity *= 0.75 : 1024 < this.gridWidth && (this.pixelDensity = 1)), this.hoursSlashes = null, this.minutesSlashes = null, this.secondsSlashes = null, this.activeGrid = null, this.interactiveGrid = null, this.createGrids(), this.hoursCounter = null, this.minutesCounter = null, this.secondsCounter = null, this.millisecondsCounter = null, this.resize = this.resize.bind(this), this.render = this.render.bind(this), this.handleWindowResize = this.handleWindowResize.bind(this), this.handleDeviceMotion = this.handleDeviceMotion.bind(this), this.handlePointerMove = this.handlePointerMove.bind(this), this.handlePointerDown = this.handlePointerDown.bind(this), this.handlePointerUp = this.handlePointerUp.bind(this), this.handlePointerLeave = this.handlePointerLeave.bind(this), this.refreshFutureSlashes = this.refreshFutureSlashes.bind(this), this.createWaveOnGrid = this.createWaveOnGrid.bind(this), this.activateHours = this.activateHours.bind(this), this.activateMinutes = this.activateMinutes.bind(this), this.activateSeconds = this.activateSeconds.bind(this), this.pauseCountdown = this.pauseCountdown.bind(this), this.restart = this.restart.bind(this), this.pointerIsMoving = !1, this.pointerTimeout = null, this.saberPointerTimeout = null, this.touchTimeout = null, this.changingState = !1, this.timeIsRefreshing = !1, this.pointerIsDown = !1, this.pointerIsTouch = !1, this.pointerX = null, this.pointerY = null, this.shouldRender = !1, this.isPaused = !1)
        }
        createGrids() {
            const R = document.querySelector(S.HOURS_PARENT),
                A = document.querySelector(S.MINUTES_PARENT),
                I = document.querySelector(S.SECONDS_PARENT);
            R.classList.add(_.HIDDEN), A.classList.add(_.HIDDEN), I.classList.remove(_.HIDDEN);
            const M = window.innerWidth > E ? w.DESKTOP.HOURS.COLUMNS : w.MOBILE.HOURS.COLUMNS,
                N = window.innerWidth > E ? w.DESKTOP.HOURS.ROWS : w.MOBILE.HOURS.ROWS;
            this.hoursSlashes = new d.a(R, M, N, this.countdownParent, {
                startAngle: 15,
                iterateAngle: !0,
                iterationDirection: 1,
                defaultColor: O.DEFAULTS.HOURS,
                alpha: 0
            });
            const H = window.innerWidth > E ? w.DESKTOP.MINUTES.COLUMNS : w.MOBILE.MINUTES.COLUMNS,
                U = window.innerWidth > E ? w.DESKTOP.MINUTES.ROWS : w.MOBILE.MINUTES.ROWS;
            this.minutesSlashes = new d.a(A, H, U, this.countdownParent, {
                iterateAngle: !0,
                iterationDirection: 1,
                alternateAngle: !0,
                iterateByRow: !0,
                defaultColor: O.DEFAULTS.MINUTES,
                alpha: 0
            });
            const W = window.innerWidth > E ? w.DESKTOP.SECONDS.COLUMNS : w.MOBILE.SECONDS.COLUMNS,
                B = window.innerWidth > E ? w.DESKTOP.SECONDS.ROWS : w.MOBILE.SECONDS.ROWS;
            this.secondsSlashes = new d.a(I, W, B, this.countdownParent, {
                defaultColor: O.DEFAULTS.SECONDS
            }), this.activeGrid = this.secondsSlashes, this.interactiveGrid = this.secondsSlashes, this.activeNav = this.navSeconds, this.secondsSlashes.turnOn(), this.hoursSlashes.init(), this.minutesSlashes.init(), this.secondsSlashes.init()
        }
        init() {
            const R = document.querySelector(S.FALLBACK_TIME);
            R.innerHTML = `${this.getTime().currentHours},
        ${this.getTime().currentMinutes},
        ${this.getTime().currentSeconds}`, this.checkAndSetTime(), this.bindEvents(), this.shouldRender = !0, this.render(), this.countdownParent.classList.add(_.ACTIVE), this.activeNav.classList.add(_.ACTIVE)
        }
        tearDown() {
            this.unbindEvents(), this.tearDownGrids(), this.countdownParent = null, this.slashesParent = null, this.navHours = null, this.navMinutes = null, this.navSeconds = null, this.activeGrid = null, this.interactiveGrid = null, this.activeNav = null
        }
        bindEvents() {
            window.addEventListener('focus', this.refreshFutureSlashes), window.addEventListener('optimizedResize', this.handleWindowResize), window.addEventListener('devicemotion', this.handleDeviceMotion), this.slashesParent.addEventListener('mousemove', this.handlePointerMove), this.slashesParent.addEventListener('mouseleave', this.handlePointerLeave), this.slashesParent.addEventListener('touchmove', this.handlePointerMove), this.slashesParent.addEventListener('mousedown', this.handlePointerDown), this.slashesParent.addEventListener('mouseup', this.handlePointerUp), this.slashesParent.addEventListener('touchstart', this.handlePointerDown), this.slashesParent.addEventListener('touchend', this.handlePointerUp), this.navHours.addEventListener('click', this.activateHours), this.navMinutes.addEventListener('click', this.activateMinutes), this.navSeconds.addEventListener('click', this.activateSeconds), this.pauseButton.addEventListener('click', this.pauseCountdown)
        }
        unbindEvents() {
            window.removeEventListener('focus', this.refreshFutureSlashes), window.removeEventListener('optimizedResize', this.handleWindowResize), window.removeEventListener('devicemotion', this.handleDeviceMotion), this.slashesParent.removeEventListener('mousemove', this.handlePointerMove), this.slashesParent.removeEventListener('mouseleave', this.handlePointerLeave), this.slashesParent.removeEventListener('touchmove', this.handlePointerMove), this.slashesParent.removeEventListener('mousedown', this.handlePointerDown), this.slashesParent.removeEventListener('mouseup', this.handlePointerUp), this.slashesParent.removeEventListener('mousemove', this.handlePointerMove), this.slashesParent.removeEventListener('touchstart', this.handlePointerDown), this.slashesParent.removeEventListener('touchend', this.handlePointerUp), this.navHours.removeEventListener('click', this.activateHours), this.navMinutes.removeEventListener('click', this.activateMinutes), this.navSeconds.removeEventListener('click', this.activateSeconds), this.pauseButton.removeEventListener('click', this.pauseCountdown), this.eButton && this.eButton.removeEventListener('click', this.handleE)
        }
        tearDownGrids() {
            this.hoursSlashes && (this.hoursSlashes.tearDown(), this.hoursSlashes = null), this.minutesSlashes && (this.minutesSlashes.tearDown(), this.minutesSlashes = null), this.secondsSlashes && (this.secondsSlashes.tearDown(), this.secondsSlashes = null)
        }
        changeActiveGrid(R, A) {
            if (!(this.changingState || this.isPaused)) {
                this.changingState = !0, A.classList.add(_.ACTIVE), this.activeNav.classList.remove(_.ACTIVE), this.activeNav = A, R.parent.classList.add(_.ACTIVE), this.activeGrid.parent.classList.remove(_.ACTIVE), R.parent.classList.remove(_.HIDDEN);
                let I = {
                    x: A.offsetLeft,
                    y: 0
                };
                const M = 1.5 * this.slashesParent.offsetWidth;
                this.activeGrid.createMotionWave(I.x, I.y, M, 5, 0.75), this.activeGrid.createWipeWave(I.x, I.y, M, 1, 0.5, !1, () => {
                    this.activeGrid.parent.classList.add(_.HIDDEN)
                }), R.createMotionWave(I.x, I.y, M, 5, 1), R.createWipeWave(I.x, I.y, M, 1, 0.75, !0, () => {
                    this.activeGrid.render(), this.activeGrid.turnOff(), this.activeGrid = R, this.changingState = !1
                }), this.interactiveGrid.stopInteraction(), this.interactiveGrid = R, R.turnOn()
            }
        }
        activateHours(R) {
            R.preventDefault(), this.activeGrid !== this.hoursSlashes && this.changeActiveGrid(this.hoursSlashes, this.navHours)
        }
        activateMinutes(R) {
            R.preventDefault(), this.activeGrid !== this.minutesSlashes && this.changeActiveGrid(this.minutesSlashes, this.navMinutes)
        }
        activateSeconds(R) {
            R.preventDefault(), this.activeGrid !== this.secondsSlashes && this.changeActiveGrid(this.secondsSlashes, this.navSeconds)
        }
        createWaveOnGrid(R) {
            const A = this.getWaveColor();
            let I = this.pointerIsTouch ? R.layerX + this.interactiveGrid.gridOffsetLeft : R.pageX;
            this.pointerIsTouch && !R.layerX && R.changedTouches[0].screenX && (I = R.changedTouches[0].screenX + this.interactiveGrid.gridOffsetLeft - this.interactiveGrid.parent.getBoundingClientRect().left);
            let M = this.pointerIsTouch ? R.layerY + this.interactiveGrid.gridOffsetTop : (R.y + this.interactiveGrid.gridOffsetTop) / this.pixelDensity;
            1 === this.pixelDensity && (M /= 2), this.pointerIsTouch && !R.layerY && R.changedTouches[0].screenY && (M = R.changedTouches[0].screenY + this.interactiveGrid.gridOffsetTop - this.interactiveGrid.parent.getBoundingClientRect().top);
            const N = this.isMobile ? 2 : 4,
                H = 2 * this.slashesParent.offsetWidth;
            this.interactiveGrid.createMotionWave(I, M, H, 5, N), this.interactiveGrid.createColorWave(I, M, H, A, 2, N)
        }
        changeSlashAngles(R) {
            for (let A = 0; A < R.slashes.length; A++) {
                const I = R.slashes[A];
                R.setRotation(I, _MathPI * (A + 1), !0)
            }
        }
        handlePointerDown(R) {
            this.isPaused || (R.touches ? this.touchTimeout = setTimeout(() => {
                this.pointerIsDown = !0, this.interactiveGrid.startInteraction()
            }, C) : (this.interactiveGrid.startInteraction(), this.pointerIsDown = !0, this.createWaveOnGrid(R), this.interactiveGrid === this.minutesSlashes && this.changeSlashAngles(this.minutesSlashes)), this.pointerX = this.pointerIsTouch ? R.layerX + this.interactiveGrid.gridOffsetLeft : R.pageX, !R.layerX && R.changedTouches[0].screenX && (this.pointerX = R.changedTouches[0].screenX + this.interactiveGrid.gridOffsetLeft - this.interactiveGrid.parent.getBoundingClientRect().left), this.pointerY = this.pointerIsTouch ? R.layerY + this.interactiveGrid.gridOffsetTop : (R.y + this.interactiveGrid.gridOffsetTop) / this.pixelDensity, 1 === this.pixelDensity && (this.pointerY /= 2), !R.layerY && R.changedTouches[0].screenY && (this.pointerY = R.changedTouches[0].screenY + this.interactiveGrid.gridOffsetTop - this.interactiveGrid.parent.getBoundingClientRect().top))
        }
        handlePointerUp(R) {
            R.preventDefault();
            this.isPaused || (this.pointerIsDown = !1, R.touches && !this.pointerIsMoving && (this.createWaveOnGrid(R), this.interactiveGrid === this.minutesSlashes && this.changeSlashAngles(this.minutesSlashes)), this.touchTimeout && clearTimeout(this.touchTimeout), this.interactiveGrid.stopInteraction())
        }
        handlePointerMove(R) {
            this.isPaused || (this.pointerIsMoving = !0, this.pointerTimeout && clearTimeout(this.pointerTimeout), this.pointerX = this.pointerIsTouch ? R.layerX + this.interactiveGrid.gridOffsetLeft : R.pageX, !R.layerX && R.changedTouches[0].screenX && (this.pointerX = R.changedTouches[0].screenX + this.interactiveGrid.gridOffsetLeft - this.interactiveGrid.parent.getBoundingClientRect().left), this.pointerY = this.pointerIsTouch ? R.layerY + this.interactiveGrid.gridOffsetTop : (R.y + this.interactiveGrid.gridOffsetTop) / this.pixelDensity, 1 === this.pixelDensity && (this.pointerY /= 2), this.pointerIsTouch && !R.layerY && R.changedTouches[0].screenY && (this.pointerY = R.changedTouches[0].screenY + this.interactiveGrid.gridOffsetTop - this.interactiveGrid.parent.getBoundingClientRect().top), this.pointerTimeout = setTimeout(() => {
                this.pointerIsMoving = !1
            }, C), R.changedTouches ? (this.pointerIsTouch = !0, this.touchTimeout && clearTimeout(this.touchTimeout)) : this.pointerIsTouch = !1)
        }
        handlePointerLeave() {
            this.pointerIsMoving = !1, this.pointerIsDown = !1
        }
        handleDeviceMotion(R) {
            if (!(5 > R.acceleration.x || 5 > R.acceleration.y)) {
                const A = this.getWaveColor(),
                    I = this.slashesParent.offsetWidth / 2,
                    M = this.slashesParent.offsetHeight / 2,
                    N = 100 * (R.acceleration.x + R.acceleration.y + R.acceleration.z);
                this.interactiveGrid.createMotionWave(I, M, N, 5, 3), this.interactiveGrid.createColorWave(I, M, N, A, 2, 3)
            }
        }
        handleWindowResize() {
            this.resizeTimeout && clearTimeout(this.resizeTimeout), this.resizeTimeout = setTimeout(this.resize, C)
        }
        resize() {
            window.innerWidth <= E === this.isMobile ? (this.hoursSlashes.resize(), this.minutesSlashes.resize(), this.secondsSlashes.resize()) : this.resetCountdown(), this.isMobile = window.innerWidth <= E
        }
        resetCountdown() {
            this.shouldRender = !1, this.tearDownGrids(), this.createGrids(), this.activeNav.classList.remove(_.ACTIVE), this.activeNav.classList.add(_.ACTIVE), this.hoursCounter = null, this.minutesCounter = null, this.secondsCounter = null, this.millisecondsCounter = null, requestAnimationFrame(this.restart)
        }
        restart() {
            this.shouldRender = !0, this.secondsSlashes.turnOn(), this.render()
        }
        pauseCountdown() {
            this.isPaused = !this.isPaused, this.pauseButton.classList.toggle(_.ACTIVE, this.isPaused), this.isPaused || (this.refreshPastSlashes(), this.refreshFutureSlashes(), requestAnimationFrame(this.render))
        }
        getWaveColor() {
            if (this.interactiveGrid === this.hoursSlashes) return O.WAVES.HOURS;
            return this.interactiveGrid === this.minutesSlashes ? O.WAVES.MINUTES : this.interactiveGrid === this.secondsSlashes ? O.WAVES.SECONDS : void 0
        }
        refreshPastSlashes() {
            const R = this.getTime(),
                A = _Mathceil(this.hoursSlashes.slashes.length / 24),
                I = R.currentHours * A;
            for (let W = 0; W <= I + A; W++) {
                const B = this.hoursSlashes.slashes[W];
                B && this.hoursSlashes.changeSlashColor(B, O.TICKS.HOURS, 0.5, !1, !0)
            }
            const M = _Mathceil(this.minutesSlashes.slashes.length / 60),
                N = R.currentMinutes * M;
            for (let W = 0; W <= N + M; W++) {
                const B = this.minutesSlashes.slashes[W];
                B && this.minutesSlashes.changeSlashColor(B, O.TICKS.MINUTES, 0.5, !1, !0)
            }
            const H = _Mathceil(this.secondsSlashes.slashes.length / 60),
                U = R.currentSeconds * H;
            for (let W = 0; W <= U + H; W++) {
                const B = this.secondsSlashes.slashes[W];
                B && this.secondsSlashes.changeSlashColor(B, O.TICKS.SECONDS, 0.5, !1, !0)
            }
        }
        refreshFutureSlashes() {
            const R = this.getTime(),
                A = _Mathceil(this.hoursSlashes.slashes.length / 24),
                I = R.currentHours * A;
            for (let G = I + A; G < this.hoursSlashes.slashes.length; G++) {
                const z = this.hoursSlashes.slashes[G];
                this.hoursSlashes.rotate(z, z.originAngleInDegrees, 0.5), this.hoursSlashes.changeSlashColor(z, O.DEFAULTS.HOURS, 0.5, !1, !0)
            }
            const N = _Mathceil(this.minutesSlashes.slashes.length / 60),
                H = R.currentMinutes * N;
            for (let G = H + N; G < this.minutesSlashes.slashes.length; G++) {
                const z = this.minutesSlashes.slashes[G];
                this.minutesSlashes.changeSlashColor(z, O.DEFAULTS.MINUTES, 0.5, !1, !0)
            }
            const W = _Mathceil(this.secondsSlashes.slashes.length / 60),
                B = R.currentSeconds * W;
            for (let G = B + W; G < this.secondsSlashes.slashes.length; G++) {
                const z = this.secondsSlashes.slashes[G];
                this.secondsSlashes.rotate(z, z.originAngleInDegrees, 0.5), this.secondsSlashes.changeSlashColor(z, O.DEFAULTS.SECONDS, 0.5, !1, !0)
            }
        }
        handleDefaultPointerInteraction(R, A) {
            const I = this.interactiveGrid.getPointDistance(R.x, R.y, this.pointerX, this.pointerY),
                M = I < R.size * A,
                N = I > R.size * (1.1 * A),
                H = I > R.size * (1.2 * A);
            M ? this.pointerIsMoving ? this.pointerIsDown ? (this.interactiveGrid.pushSlashAway(R, this.pointerX, this.pointerY, A), this.interactiveGrid.rotateSlashAway(R, this.pointerX, this.pointerY, A)) : (this.interactiveGrid.moveSlashTowardOrigin(R), !this.pointerIsTouch && this.interactiveGrid.rotateSlashAway(R, this.pointerX, this.pointerY, A)) : (this.interactiveGrid.moveSlashTowardOrigin(R), this.interactiveGrid.rotateSlashTowardOrigin(R)) : (H || !this.pointerIsDown || !this.pointerIsMoving) && (this.interactiveGrid.moveSlashTowardOrigin(R), this.interactiveGrid.rotateSlashTowardOrigin(R))
        }
        handleHoursPointerInteraction(R) {
            const A = this.hoursSlashes.getPointDistance(R.x, R.y, this.pointerX, this.pointerY),
                I = A < R.size;
            I && !this.changingState && this.pointerIsMoving && this.hoursSlashes.changeSlashColor(R, O.HOVERS.HOURS, 0.25, !0), this.hoursSlashes.moveSlashTowardOrigin(R), this.hoursSlashes.rotateSlashTowardOrigin(R)
        }
        handleMinutesPointerInteraction(R, A) {
            const I = this.interactiveGrid.getPointDistance(R.x, R.y, this.pointerX, this.pointerY),
                M = I < R.size * A,
                N = I > R.size * (1.1 * A),
                H = I > R.size * (1.2 * A);
            M ? this.pointerIsMoving && !this.pointerIsTouch || this.pointerIsMoving && this.pointerIsTouch && this.pointerIsDown ? this.minutesSlashes.pushSlashAway(R, this.pointerX, this.pointerY, A) : (this.minutesSlashes.moveSlashTowardOrigin(R), this.minutesSlashes.rotateSlashTowardOrigin(R)) : (H || !this.pointerIsDown || !this.pointerIsMoving) && (this.interactiveGrid.moveSlashTowardOrigin(R), this.interactiveGrid.rotateSlashTowardOrigin(R))
        }
        positionSlashes() {
            let R = this.slashesParent.offsetWidth / 10 / this.interactiveGrid.slashSize;
            this.isMobile && (R *= 2);
            for (let A = 0; A < this.interactiveGrid.slashes.length; A++) {
                const I = this.interactiveGrid.slashes[A];
                this.pointerX && this.pointerY ? this.interactiveGrid === this.hoursSlashes ? this.handleHoursPointerInteraction(I) : this.interactiveGrid === this.minutesSlashes ? this.handleMinutesPointerInteraction(I, R) : this.handleDefaultPointerInteraction(I, R) : (this.interactiveGrid.rotateSlashTowardOrigin(I), this.interactiveGrid.moveSlashTowardOrigin(I))
            }
        }
        setLabel(R, A) {
            R.innerHTML = A
        }
        getTime() {
            const R = Date.now();
            return {
                now: R,
                currentHours: u(R),
                currentMinutes: h(R),
                currentSeconds: f(R),
                currentMilliseconds: m(R)
            }
        }
        checkAndSetTime() {
            const R = this.getTime();
            this.hoursCounter !== R.currentHours && this.setHours(R), this.minutesCounter !== R.currentMinutes && this.setMinutes(R), this.secondsCounter !== R.currentSeconds && this.setSeconds(R), this.millisecondsCounter !== R.currentMilliseconds && this.setMilliseconds(R)
        }
        resetSlashes(R) {
            this.timeIsRefreshing = !0;
            for (let A = 0; A < R.slashes.length; A++) {
                const I = R.slashes[A];
                R.rotate(I, I.originAngleInDegrees, 0.5), R.changeSlashColor(I, R.getDefaultColor(), 0.5, !1, !0), I.isTicked = !1
            }
            setTimeout(() => {
                this.timeIsRefreshing = !1
            }, 500)
        }
        setHours(R) {
            this.hoursCounter = R.currentHours, this.setLabel(this.hoursLabel, `${R.currentHours}`);
            const A = _Mathceil(this.hoursSlashes.slashes.length / 24),
                I = R.currentHours * A;
            for (let M = 0; M < I + A; M++) {
                const N = this.hoursSlashes.slashes[M];
                N && !N.isTicked && (N.isTicked = !0, this.hoursSlashes.changeSlashColor(N, O.TICKS.HOURS, 0.5, !1, !0))
            }
            this.resetSlashes(this.minutesSlashes)
        }
        setMinutes(R) {
            if (this.minutesCounter)
                for (let M = 0; M < this.hoursSlashes.slashes.length; M++) {
                    const N = this.hoursSlashes.slashes[M];
                    this.hoursSlashes.rotate(N, -360, 1, !0)
                }
            this.minutesCounter = R.currentMinutes, this.setLabel(this.minutesLabel, `${R.currentMinutes}`);
            const A = _Mathceil(this.minutesSlashes.slashes.length / 60),
                I = R.currentMinutes * A;
            for (let M = 0; M < I + A; M++) {
                const N = this.minutesSlashes.slashes[M];
                N && !N.isTicked && (N.isTicked = !0, this.minutesSlashes.changeSlashColor(N, O.TICKS.MINUTES, 0.5, !1, !0))
            }
            this.resetSlashes(this.secondsSlashes)
        }
        setSeconds(R) {
            this.secondsCounter = R.currentSeconds, this.setLabel(this.secondsLabel, `${R.currentSeconds}`);
            for (let A = 0; A < this.hoursSlashes.slashes.length; A++) {
                const I = this.hoursSlashes.slashes[A],
                    M = L[_Mathfloor(Math.random() * L.length)];
                this.hoursSlashes.setRotation(I, M, !0), A += _Mathround(Math.random()) + 1
            }
            for (let A = 0; A < this.minutesSlashes.slashes.length; A++) {
                const I = this.minutesSlashes.slashes[A];
                this.minutesSlashes.setRotation(I, 6, !0)
            }
            if (0 == R.currentSeconds % 10 && this.minutesSlashes.shouldRender) {
                const A = 2 * this.slashesParent.offsetWidth,
                    I = this.slashesParent.offsetWidth / 2,
                    M = this.slashesParent.offsetHeight / 2,
                    N = this.isMobile ? 2 : 4;
                this.changeSlashAngles(this.minutesSlashes), this.minutesSlashes.createMotionWave(I, M, A, 5, N), this.minutesSlashes.createColorWave(I, M, A, O.WAVES.MINUTES, 2, N)
            }
        }
        setMilliseconds(R) {
            if (!this.timeIsRefreshing) {
                const A = this.secondsSlashes.slashes.length / 60,
                    I = R.currentSeconds * A,
                    M = _Mathceil(1e-3 * R.currentMilliseconds * A) + I;
                for (let N = 0; N < M; N++) {
                    const H = this.secondsSlashes.slashes[N];
                    if (H && !H.isTicked && (H.isTicked = !0, this.secondsSlashes.changeSlashColor(H, O.TICKS.SECONDS, 0.5, !1, !0)), H && H.isTicked) {
                        const U = this.millisecondsCounter && 0 !== R.currentMilliseconds ? 1 : N;
                        this.secondsSlashes.setRotation(H, U, !0)
                    }
                }
                this.millisecondsCounter = R.currentMilliseconds
            }
        }
        getFormattedTimestamp() {
            const R = this.getTime();
            let A = R.currentHours;
            const I = 10 > R.currentMinutes ? `0${R.currentMinutes}` : R.currentMinutes,
                M = 12 >= A ? 'AM' : 'PM';
            return 12 < A && (A -= 12), `${A}:${I} ${M}`
        }
        render() {
            !this.shouldRender || this.isPaused || (this.checkAndSetTime(), this.positionSlashes(), this.hoursSlashes.render(), this.minutesSlashes.render(), this.secondsSlashes.render(), requestAnimationFrame(this.render))
        }
    }
}, , , , , , function(t, o, l) {
    function d(L, P) {
        return L = _Mathceil(L), P = _Mathfloor(P), _Mathfloor(Math.random() * (P - L)) + L
    }
    var u = l(0),
        S = 'featuredVideos__videos__video',
        O = 2,
        D = function(L) {
            this.bookmarks = null, this.data = null, window.addEventListener(u.BOOKMARKS_BROADCAST, this.handleBookmarks.bind(this), !1), window.addEventListener(u.SESSIONS_LOADED, this.handleSessions.bind(this), !1), window.addEventListener('DOMContentLoaded', function() {
                document.querySelector('.js-countdown') && (window.ioCountdown = new L, window.ioCountdown.init());
                var P = document.querySelector('.hero__logo--scrollable');
                if (P) {
                    var R = document.querySelector('.header'),
                        A = document.querySelector('.header__content'),
                        I = document.querySelector('.header__logo'),
                        M = document.querySelector('.header__hamburger'),
                        N = P.parentNode,
                        H = P.clientHeight,
                        U = P.clientWidth,
                        W = parseInt(P.offsetTop),
                        B = parseInt(P.offsetLeft),
                        G, z = !1,
                        V = [{
                            minScroll: 0,
                            minScrollPerc: 0,
                            maxScroll: 0,
                            maxScrollPerc: .2,
                            initial: {
                                height: H,
                                left: B,
                                width: U
                            },
                            property: {
                                height: 50,
                                top: 0,
                                width: 50
                            },
                            custom: function(Y) {
                                var K = R.clientHeight;
                                Y.property.height = K, Y.property.left = 812 <= window.screen.width ? 60 + parseInt(A.offsetLeft) : M.clientWidth + 1, Y.initial.left = parseInt(N.offsetLeft), Y.initial.top = parseInt(N.offsetTop)
                            }
                        }],
                        F = function() {
                            G = window.screen.height;
                            var Y = window.getComputedStyle(P);
                            z = 'none' !== Y.display;
                            for (var K = 0; K < V.length; K++) V[K].custom && V[K].custom(V[K]), V[K].minScrollPerc && (V[K].minScroll = G * V[K].minScrollPerc), V[K].maxScrollPerc && (V[K].maxScroll = G * V[K].maxScrollPerc)
                        },
                        X = function() {
                            var Y, K = function(Z, Q, J, ee, te) {
                                if (void 0 != Q.property[ee]) {
                                    var ne = Q.initial[ee] || te,
                                        re = ne - Q.property[ee],
                                        ae = 1 - (1 - Q.property[ee] / ne) * J;
                                    switch (ee) {
                                        case 'left':
                                            var oe = U - Q.property.width;
                                            return 'translatex(' + (-re - oe / 2) * J + 'px)';
                                            break;
                                        case 'top':
                                            var ie = H - Q.property.height;
                                            return 'translatey(' + (-re - ie / 2) * J + 'px)';
                                            break;
                                        case 'width':
                                            return 'scale(' + ae + ')';
                                    }
                                }
                            };
                            return function() {
                                if (z) {
                                    Y != 0 < window.scrollY && (Y = 0 < window.scrollY, Y ? P.classList.add('logo--scrolled') : P.classList.remove('logo--scrolled'));
                                    for (var Z = 0; Z < V.length; Z++)
                                        if (!(window.scrollY < V[Z].minScroll)) {
                                            var Q = window.scrollY - V[Z].minScroll,
                                                J = _Mathmin(Q / V[Z].maxScroll, 1),
                                                ee = '';
                                            ee += ' ' + K(P, V[Z], J, 'top'), ee += ' ' + K(P, V[Z], J, 'left'), ee += ' ' + K(P, V[Z], J, 'width'), P.style.transform = ee
                                        }
                                }
                            };
                            var $ = document.querySelectorAll('[data-signin]')
                        }();
                    F(), X(), window.addEventListener(u.OPTIMIZED_RESIZE, function() {
                        F(), X()
                    }, !1), window.addEventListener(u.OPTIMIZED_SCROLL, X, !1), P.classList.add('hero__logo--loaded')
                }
            })
        };
    D.prototype.showPersonalizeSessions = function() {
        if (this.bookmarks && this.data) {
            var L = [],
                P = [];
            for (var R in this.bookmarks)
                if (this.bookmarks.hasOwnProperty(R)) {
                    var A = this.bookmarks[R];
                    if (!A.inSchedule) continue;
                    var I = this.data.sessions[A.sessionID];
                    if (!I.videoId) continue;
                    L.push(I)
                }
            if (L.length) {
                if (L.length > O)
                    for (; P.length < O;) {
                        var M = d(0, L.length),
                            I = L[M];
                        P.includes(I) || P.push(I)
                    } else P = L;
                var N = document.querySelector('.' + 'featuredVideos--user');
                if (N) {
                    if (!P.length) return void N.parentNode.removeChild(N);
                    for (var W, H = N.querySelectorAll('.' + S), U = H.length - 1; U >= P.length; U--) W = H[U], W.parentNode.removeChild(W);
                    for (var U = 0; U < P.length; U++) {
                        var W = H[U],
                            I = P[U],
                            B = W.querySelector('.' + 'featuredVideos__videos__video__thumbnail'),
                            q = W.querySelector('.' + 'featuredVideos__videos__video__meta'),
                            G = B.querySelector('img'),
                            z = q.querySelector('.' + 'featuredVideos__videos__video__meta__left__title'),
                            V = q.querySelector('.' + 'featuredVideos__videos__video__meta__left__subtitle'),
                            F = q.querySelector('.' + 'featuredVideos__videos__video__meta__right__tag');
                        B.dataset.akYoutubemodalVideoId = I.videoId, G.src = 'https://i1.ytimg.com/vi/' + I.videoId + '/maxresdefault.jpg', z.textContent = I.title;
                        var X = [];
                        for (j = 0; j < I.speakers.length; j++) {
                            var Y = this.data.speakers[I.speakers[j]];
                            X.push(Y.name)
                        }
                        V.textContent = X.join(', '), F.style.backgroundColor = I.color, F.textContent = I.mainTag.tag
                    }
                    if (N.classList.remove('featuredVideos--loading'), N = document.querySelector('.' + 'featuredVideos--featured'), H = N.querySelectorAll('.' + S), 3 < H.length) {
                        for (var W, U = H.length - 1; 3 <= U; U--) W = H[U], W.parentNode.removeChild(W);
                        H = N.querySelectorAll('.' + S)
                    }
                    N.classList.remove('featuredVideos__videos--4-cols'), N.classList.add('featuredVideos__videos--3-cols');
                    for (var U = 0; U < H.length; U++) H[U].classList.remove('featuredVideos__videos__video--4-cols'), H[U].classList.add('featuredVideos__videos__video--3-cols')
                }
            }
        }
    }, D.prototype.handleBookmarks = function(L) {
        this.bookmarks = L.detail.bookmarks, this.showPersonalizeSessions()
    }, D.prototype.handleSessions = function(L) {
        this.data = L.detail.data, this.showPersonalizeSessions()
    }, D.init = function(L) {
        return new D(L)
    }, t.exports = D
}, , , function(t) {
    var l = function(d) {
        this.el = d, this.dateEl = d.querySelector('.tweets__tweet__date'), this.bodyEl = d.querySelector('.tweets__tweet__body'), this.load()
    };
    l.URL = 'https://storage.googleapis.com/gweb-io2017.appspot.com/tweets/tweets.json?2', l.URL_SHORTENER_REGEX = /(https?:\/\/t\.co\/\w+)/, l.prototype.render = function(d) {
        var u = d[0];
        this.dateEl.textContent = u.created_humanized, this.dateEl.href = 'https://twitter.com/googledevs/status/' + u.id, this.bodyEl.innerHTML = '', this.bodyEl.appendChild(this.clean(u.text)), this.el.classList.add('tweets--visible')
    }, l.prototype.setVisible = function(d) {
        this.el.style.display = d ? 'block' : 'none'
    }, l.prototype.load = function() {
        var d = new XMLHttpRequest;
        d.open('GET', l.URL), d.addEventListener('load', function() {
            if (4 == d.readyState) {
                if (200 != d.status) return void this.setVisible(!1);
                var u = JSON.parse(d.responseText);
                this.render(u.tweets)
            }
        }.bind(this)), d.send()
    }, l.prototype.clean = function(d) {
        var u = document.createElement('span'),
            h = d.split(l.URL_SHORTENER_REGEX);
        return h.forEach(function(f) {
            var m;
            l.URL_SHORTENER_REGEX.test(f) ? (m = document.createElement('a'), m.target = '_blank', m.href = f, m.textContent = f) : (m = document.createElement('span'), m.textContent = f), u.appendChild(m)
        }), u
    }, l.init = function() {
        var d = document.querySelector('.tweets');
        d && new l(d)
    }, t.exports = l
}, function(t) {
    var l = function(d) {
        this.el = d, this.load()
    };
    l.URL = 'https://storage.googleapis.com/gweb-io2017-weather.google.com.a.appspot.com/weather/weather.json?', l.prototype.render = function(d) {
        var u = 0,
            h = d.forecast;
        if ([].forEach.call(h, function(_) {
                var T = '[data-weather-date-id="' + _.date + '"]',
                    E = this.el.querySelector(T);
                if (E) {
                    var C = E.querySelector('.weather__col__temperature__high'),
                        w = E.querySelector('.weather__col__temperature__low'),
                        O = E.querySelector('img');
                    C.textContent = _.high_temp_f + '\xB0', w.textContent = _.low_temp_f + '\xB0', O.src = _.condition_icon, E.classList.add('weather__col--visible'), u += 1
                }
            }.bind(this)), !!u) {
            var f = d.attributions;
            if (f) {
                var m = f[0].url,
                    S = this.el.querySelector('a');
                S.href = m
            }
            this.el.classList.add('weather--visible')
        }
    }, l.prototype.setVisible = function(d) {
        this.el.style.display = d ? 'block' : 'none'
    }, l.prototype.load = function() {
        var d = new XMLHttpRequest;
        d.open('GET', l.URL), d.addEventListener('load', function() {
            if (4 == d.readyState) {
                if (200 != d.status) return void this.setVisible(!1);
                var u = JSON.parse(d.responseText);
                this.render(u.weather)
            }
        }.bind(this)), d.send()
    }, l.prototype.clean = function(d) {
        var u = document.createElement('span'),
            h = d.split(l.URL_SHORTENER_REGEX);
        return h.forEach(function(f) {
            var m;
            l.URL_SHORTENER_REGEX.test(f) ? (m = document.createElement('a'), m.target = '_blank', m.href = f, m.textContent = f) : (m = document.createElement('span'), m.textContent = f), u.appendChild(m)
        }), u
    }, l.init = function() {
        var d = document.querySelector('.weather');
        d && new l(d)
    }, t.exports = l
}, , , , function(t, o) {
    'use strict';
    const u = 1 < window.devicePixelRatio ? window.devicePixelRatio : 1,
        h = 1.25,
        f = 0.1,
        m = 0.05,
        S = 1;
    o.a = class {
        constructor(E, C, w, O, D = {}) {
            E && (this.parent = E, this.gridParent = O ? O : this.parent, this.columns = C, this.rows = w, this.gridWidth = this.parent.offsetWidth, this.slashSize = this.gridWidth / this.columns, this.gridHeight = this.rows * this.slashSize, this.gridOffsetLeft = 0, this.gridOffsetTop = 0, this.options = {
                startAngle: D.startAngle,
                defaultColor: D.defaultColor === void 0 ? 5534201 : D.defaultColor,
                alpha: D.alpha === void 0 ? 1 : D.alpha,
                iterateAngle: D.iterateAngle,
                iterateByRow: D.iterateByRow,
                iterationDirection: D.iterationDirection,
                alternateAngle: D.alternateAngle
            }, this.pixelDensity = u, !window.WebGL2RenderingContext && (640 < this.gridWidth && 1025 > this.gridWidth ? this.pixelDensity *= 0.75 : 1024 < this.gridWidth && (this.pixelDensity = 1)), this.renderer = new PIXI.autoDetectRenderer(window.innerWidth, this.gridParent.offsetHeight * h, {
                resolution: this.pixelDensity,
                transparent: !0,
                antialias: !0
            }), this.renderer.plugins.interaction.autoPreventDefault = !1, this.shouldInteract = !1, this.renderer.view.style.position = 'absolute', this.setRendererPosition(), this.parent.appendChild(this.renderer.view), this.stage = new PIXI.Container, this.stage.interactive = !0, this.slashes = this.generateSlashes(this.gridWidth, this.gridHeight, this.slashSize, this.rows, this.columns, this.options.startAngle, this.options.iterateAngle, this.options.iterationDirection, this.options.iterateByRow, this.options.alternateAngle), this.drawSlashes(), this.shouldRender = !1, this.handleTouchMove = this.handleTouchMove.bind(this))
        }
        init() {
            this.bindEvents(), this.render()
        }
        turnOn() {
            this.shouldRender = !0
        }
        turnOff() {
            this.renderer.textureGC.run(), this.shouldRender = !1
        }
        startInteraction() {
            this.shouldInteract = !0
        }
        stopInteraction() {
            this.shouldInteract = !1
        }
        tearDown() {
            this.slashes.forEach((E) => {
                TweenLite.killTweensOf(E)
            }), this.turnOff(), this.stage.touchmove = null, this.stage.destroy(), this.parent.removeChild(this.renderer.view), this.renderer.destroy(), this.stage = null, this.renderer = null, this.parent = null, this.gridParent = null, this.columns = null, this.rows = null, this.gridWidth = null, this.slashSize = null, this.gridHeight = null, this.options = null, this.slashes = null
        }
        bindEvents() {
            this.stage.touchmove = this.handleTouchMove
        }
        handleTouchMove(E) {
            this.shouldInteract && E.data.originalEvent.preventDefault()
        }
        resize() {
            this.gridWidth = this.parent.offsetWidth, this.slashSize = this.gridWidth / this.columns, this.gridHeight = this.rows * this.slashSize, this.setRendererPosition(), this.setSlashPositions(), this.clearSlashes(), this.drawSlashes()
        }
        setRendererPosition() {
            this.renderer.resize(window.innerWidth, this.gridParent.offsetHeight * h), this.gridOffsetTop = this.parent.getBoundingClientRect().top - this.gridParent.getBoundingClientRect().top, this.gridOffsetLeft = this.parent.getBoundingClientRect().left, TweenLite.set(this.renderer.view, {
                transformOrigin: '0 0',
                x: -this.gridOffsetLeft,
                y: -this.gridOffsetTop,
                scale: 1 / this.pixelDensity
            })
        }
        generateSlashes(E, C, w, O, D, L, P, R, A, I) {
            const M = w * f,
                N = w * (1 - f),
                U = _Mathmax(_Mathround(w * m), S);
            let W = [];
            const B = N / 2;
            for (let q = 0; q < O; q++)
                for (let G = 0; G < D; G++) {
                    const z = G * N + G * M + B + this.gridOffsetLeft,
                        V = q * (C / O - M) + q * M + B + this.gridOffsetTop;
                    let F = 0 < L ? L * (_MathPI / 180) : 0;
                    I && 0 == G % 2 && (F += _MathPI / 2);
                    const X = A ? q : G;
                    if (P && 0 < X) {
                        const Y = 0 > R ? -1 * X : X,
                            K = F * (180 / _MathPI);
                        F = (K + Y * (w / 4)) * (_MathPI / 180), F > 2 * _MathPI && (F %= 2 * _MathPI)
                    }
                    W.push({
                        sprite: null,
                        size: N,
                        stroke: U,
                        color: this.options.defaultColor,
                        alpha: this.options.alpha,
                        originX: z,
                        originY: V,
                        x: z,
                        y: V,
                        originAngleInDegrees: F * (180 / _MathPI),
                        originAngle: F,
                        rotation: F,
                        isTinting: !1,
                        isRotating: !1,
                        isHidden: 0 === this.options.alpha,
                        isTicked: !1,
                        isForcingChange: !1
                    })
                }
            return W
        }
        setSlashPositions() {
            const E = this.slashSize * f,
                C = this.slashSize * (1 - f),
                w = this.gridHeight / this.rows - E,
                O = _Mathmax(_Mathround(this.slashSize * m), S);
            let D = [];
            const L = C / 2;
            for (let P = 0; P < this.rows; P++)
                for (let R = 0; R < this.columns; R++) {
                    const A = R * C + R * E + L + this.gridOffsetLeft,
                        I = P * w + P * E + L + this.gridOffsetTop;
                    D.push({
                        x: A,
                        y: I,
                        size: C,
                        stroke: O
                    })
                }
            for (let P = 0; P < this.slashes.length; P++) {
                const R = D[P],
                    A = this.slashes[P];
                A.x = R.x, A.y = R.y, A.originX = R.x, A.originY = R.y, A.size = R.size, A.stroke = R.stroke
            }
        }
        drawSlashes() {
            for (let E = 0; E < this.slashes.length; E++) {
                const C = this.slashes[E];
                C.sprite = new PIXI.Graphics, this.stage.addChild(C.sprite), this.areGraphicsEnabled || (C.sprite.lineStyle(0), C.sprite.beginFill(16777215), C.sprite.drawRect(0, 0, C.size, C.stroke), C.sprite.endFill(), C.sprite.pivot = new PIXI.Point(C.sprite.width / 2, C.sprite.height / 2)), C.sprite.tint = C.color, C.sprite.x = C.x, C.sprite.y = C.y, C.sprite.rotation = C.angle, C.sprite.alpha = C.alpha
            }
        }
        clearSlashes() {
            for (let E = 0; E < this.slashes.length; E++) {
                const C = this.slashes[E];
                TweenLite.killTweensOf(C), C.sprite.clear()
            }
        }
        destroySlashes() {
            for (let E = 0; E < this.slashes.length; E++) {
                const C = this.slashes[E];
                TweenLite.killTweensOf(C), C.sprite.destroy()
            }
        }
        getDefaultColor() {
            return this.options.defaultColor
        }
        rotate(E, C, w = 1, O = !1, D = 0) {
            E.isRotating = !0;
            let L = O ? C * (_MathPI / 180) + E.originAngle : C * (_MathPI / 180);
            TweenLite.to(E, w, {
                rotation: L,
                ease: Expo.easeOut,
                delay: D,
                onComplete: () => {
                    E.originAngle = L % 360, E.isRotating = !1
                }
            })
        }
        setRotation(E, C, w = !1, O = !1) {
            let D = w ? C % 360 * (_MathPI / 180) + E.originAngle : C % 360 * (_MathPI / 180);
            E.originAngle = D, O && (E.rotation = D)
        }
        getPointDistance(E, C, w, O) {
            return _Mathsqrt(_Mathpow(E - w, 2) + _Mathpow(C - O, 2))
        }
        getPointDistanceFromCircleEdge(E, C, w, O, D) {
            return _Mathsqrt(_Mathpow(E - w, 2) + _Mathpow(C - O, 2)) - D
        }
        getAngleBetweenPoints(E, C, w, O) {
            return Math.atan2(w - E, O - C)
        }
        getHexAsString(E) {
            return E.toString(16)
        }
        getHexAsNumber(E) {
            return parseInt(E, 16)
        }
        rgbString2hex(E) {
            const C = E.match(/^rgba\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3}),\s*(\d*(?:\.\d+)?)\)$/);
            if (C) {
                const w = C[1] ? parseInt(C[1]) : 0,
                    O = C[2] ? parseInt(C[2]) : 0,
                    D = C[3] ? parseInt(C[3]) : 0;
                return '0x' + (D | O << 8 | w << 16).toString(16)
            }
        }
        changeSlashColor(E, C, w = 1, O = !1, D = !1) {
            if (E.isTinting && !D || E.isForcingChange && !D) return;
            E.isTinting = !0, D && (E.isForcingChange = !0);
            const L = PIXI.utils.hex2rgb(E.sprite.tint),
                P = PIXI.utils.hex2rgb(C),
                R = E.color;
            let A = {
                value: `rgb(${255*L[0]}, ${255*L[1]}, ${255*L[2]})`
            };
            TweenLite.to(A, w, {
                colorProps: {
                    value: `rgb(${255*P[0]}, ${255*P[1]}, ${255*P[2]})`
                },
                onUpdate: () => {
                    E.sprite.tint = 16777215, E.sprite.tint = this.getHexAsNumber(this.rgbString2hex(A.value))
                },
                onComplete: () => {
                    if (D && (E.isForcingChange = !1), O) {
                        const I = PIXI.utils.hex2rgb(R);
                        TweenLite.to(A, w, {
                            colorProps: {
                                value: `rgb(${255*I[0]}, ${255*I[1]}, ${255*I[2]})`
                            },
                            onUpdate: () => {
                                E.sprite.tint = 16777215, E.sprite.tint = this.getHexAsNumber(this.rgbString2hex(A.value))
                            },
                            onComplete: () => {
                                E.sprite.tint = 16777215, E.sprite.tint = R, E.isTinting = !1
                            }
                        })
                    } else E.sprite.tint = 16777215, E.sprite.tint = C, E.isTinting = !1
                }
            });
            O || (E.color = C)
        }
        changeSlashAlpha(E, C, w = 0.1) {
            E.isHidden = 0 === C, TweenLite.to(E, w, {
                alpha: C
            })
        }
        createColorCircle(E, C, w, O, D, L) {
            for (let P = 0; P < this.slashes.length; P++) {
                const R = this.slashes[P],
                    A = this.getPointDistanceFromCircleEdge(R.x, R.y, E, C, w);
                if (A < R.size / 2 * f) {
                    const I = L && R.y > C ? L : O;
                    this.changeSlashColor(R, I, D, !1, !0)
                }
            }
        }
        createColorWave(E, C, w, O, D = 1, L = 1, P = !0, R) {
            let A = {
                radius: 1
            };
            TweenLite.to(A, L, {
                radius: w,
                ease: Quad.easeOut,
                onUpdate: () => {
                    if (!this.slashes) return void TweenLite.killTweensOf(A);
                    for (let I = 0; I < this.slashes.length; I++) {
                        const M = this.slashes[I],
                            N = this.getPointDistanceFromCircleEdge(M.x, M.y, E, C, A.radius);
                        N < M.size * D && N > -M.size * L && !M.isTinting && this.changeSlashColor(M, O, D / 10, P)
                    }
                },
                onComplete: R
            })
        }
        createWipeWave(E, C, w, O = 1, D = 1, L = !1, P) {
            let R = {
                radius: 1
            };
            const A = L ? 1 : 0;
            TweenLite.to(R, D, {
                radius: w,
                ease: Quad.easeOut,
                onUpdate: () => {
                    if (!this.slashes) return void TweenLite.killTweensOf(R);
                    for (let I = 0; I < this.slashes.length; I++) {
                        const M = this.slashes[I],
                            N = this.getPointDistanceFromCircleEdge(M.x, M.y, E, C, R.radius);
                        N < M.size * O && L === M.isHidden && this.changeSlashAlpha(M, A)
                    }
                },
                onComplete: P
            })
        }
        createMotionWave(E, C, w, O = 1, D = 1, L) {
            let P = {
                radius: 1
            };
            TweenLite.to(P, D, {
                radius: w,
                ease: Quad.easeOut,
                onUpdate: () => {
                    if (!this.slashes) return void TweenLite.killTweensOf(P);
                    for (let R = 0; R < this.slashes.length; R++) {
                        const A = this.slashes[R],
                            I = this.getPointDistanceFromCircleEdge(A.x, A.y, E, C, P.radius);
                        I < A.size * O && I > -A.size / 2 && (this.pushSlashAway(A, E, C, O), this.rotateSlashAway(A, E, C, 2 * O))
                    }
                },
                onComplete: L
            })
        }
        pushSlashAway(E, C, w, O = 1) {
            const D = this.getPointDistance(E.x, E.y, C, w),
                L = 1 / D * O;
            E.x -= (C - E.originX) * L, E.y -= (w - E.originY) * L
        }
        rotateSlashAway(E, C, w, O = 1) {
            if (E.isRotating) return;
            const D = this.getPointDistance(E.x, E.y, C, w);
            let P = this.getAngleBetweenPoints(E.x, E.y, C, w) * (1 / D * O);
            E.y > w && (P *= -1), E.rotation += P
        }
        moveSlashTowardOrigin(E, C = 1) {
            const w = this.getPointDistance(E.x, E.y, E.originX, E.originY);
            if (0 !== w) {
                if (1 >= w) return E.x = E.originX, void(E.y = E.originY);
                const O = C / 10 + 1 / w;
                E.x += (E.originX - E.x) * O, E.y += (E.originY - E.y) * O, 1 > _Mathabs(E.x - E.originX) && (E.x = E.originX), 1 > _Mathabs(E.y - E.originY) && (E.y = E.originY)
            }
        }
        rotateSlashTowardOrigin(E, C = 1) {
            if (!(E.isRotating || E.rotation === E.originAngle)) {
                E.rotation += (E.originAngle - E.rotation) * (180 / _MathPI) * (C / 10) * (_MathPI / 180)
            }
        }
        updateSlashes() {
            for (let E = 0; E < this.slashes.length; E++) {
                const C = this.slashes[E];
                C.color = C.sprite.tint, C.sprite.x = C.x, C.sprite.y = C.y, C.sprite.rotation = C.rotation, C.sprite.alpha = C.alpha
            }
        }
        render() {
            this.shouldRender && (this.updateSlashes(), this.renderer.render(this.stage, this.renderer.renderer, !1))
        }
    }
}, , , , function(t, o, l) {
    'use strict';
    Object.defineProperty(o, '__esModule', {
        value: !0
    });
    var d = l(42),
        u = l(12),
        h = l(16),
        f = l(19),
        m = l(48),
        S = l(17),
        _ = l(51),
        T = l(52),
        E = l(7);
    m.init(d.a);
    var C = u.init('https://' + document.body.dataset.userdataApi),
        w = u.init('https://' + document.body.dataset.pingApi);
    h.init(C, w), S.init(document.body.dataset.sessions), f.init(), _.init(), T.init(), E.init()
}, , , , , , , , function(t, o, l) {
    var u = l(22);
    t.exports = function(h) {
        var f = u(h),
            m = f.getHours();
        return m
    }
}, function(t, o, l) {
    var u = l(22);
    t.exports = function(h) {
        var f = u(h),
            m = f.getMilliseconds();
        return m
    }
}, function(t, o, l) {
    var u = l(22);
    t.exports = function(h) {
        var f = u(h),
            m = f.getMinutes();
        return m
    }
}, function(t, o, l) {
    var u = l(22);
    t.exports = function(h) {
        var f = u(h),
            m = f.getSeconds();
        return m
    }
}, function(t) {
    t.exports = function(d) {
        return d instanceof Date
    }
}]);
