"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 8510:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6197);
/* harmony import */ var _styles_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6319);
/* harmony import */ var react_sizeme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1292);
/* harmony import */ var react_sizeme__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_sizeme__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_complicated__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7648);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_6__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_2__]);
framer_motion__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];









function MyApp({ Component , pageProps , router  }) {
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_sizeme__WEBPACK_IMPORTED_MODULE_4__.SizeMe, {
        children: ({ size  })=>{
            const { width  } = size;
            const newProps = {
                lgView: width >= 900,
                ...pageProps
            };
            return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_head__WEBPACK_IMPORTED_MODULE_6___default()), {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("script", {
                            async: "",
                            src: "https://cdn.jsdelivr.net/npm/yandex-metrica-watch/tag.js"
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: `flex flex-col w-full min-h-screen overflow-hidden justify-between`,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_complicated__WEBPACK_IMPORTED_MODULE_5__/* .Header */ .h4, {
                                lgView: newProps.lgView
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__.LazyMotion, {
                                features: framer_motion__WEBPACK_IMPORTED_MODULE_2__.domAnimation,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__.AnimatePresence, {
                                    exitBeforeEnter: true,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__.m.div, {
                                        className: "page-wrap",
                                        initial: "initial",
                                        animate: "animate",
                                        exit: "exit",
                                        variants: _styles_animations__WEBPACK_IMPORTED_MODULE_3__/* .animations[6].variants */ .s[6].variants,
                                        transition: _styles_animations__WEBPACK_IMPORTED_MODULE_3__/* .animations[6].transition */ .s[6].transition,
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
                                            ...newProps
                                        })
                                    }, router.route.concat(_styles_animations__WEBPACK_IMPORTED_MODULE_3__/* .animations[6].name */ .s[6].name))
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_complicated__WEBPACK_IMPORTED_MODULE_5__/* .Footer */ .$_, {
                                lgView: newProps.lgView
                            })
                        ]
                    })
                ]
            }));
        }
    }));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);

});

/***/ }),

/***/ 6319:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "s": () => (/* binding */ animations)
/* harmony export */ });
const slideUp = {
    name: "Slide Up",
    variants: {
        initial: {
            opacity: 0,
            top: "100vh",
            scale: 0.4
        },
        animate: {
            opacity: 1,
            top: "0vh",
            scale: 1
        },
        exit: {
            opacity: 0,
            top: "100vh",
            scale: 0.4
        }
    },
    transition: {
        duration: 0.7
    }
};
const slideRight = {
    name: "Slide Right",
    variants: {
        initial: {
            opacity: 0,
            left: "-100%",
            scale: 0.6
        },
        animate: {
            opacity: 1,
            left: 0,
            scale: 1
        },
        exit: {
            opacity: 0,
            left: "100%",
            scale: 0.6
        }
    },
    transition: {
        duration: 0.7
    }
};
const fadeBack = {
    name: "Fade Back",
    variants: {
        initial: {
            opacity: 0,
            scale: 0.4
        },
        animate: {
            opacity: 1,
            scale: 1
        },
        exit: {
            opacity: 0,
            scale: 0.4
        }
    },
    transition: {
        duration: 0.1
    }
};
const rotateY = {
    name: "Rotate Y",
    variants: {
        initial: {
            rotateY: 90
        },
        animate: {
            rotateY: 0
        },
        exit: {
            rotateY: 90
        }
    },
    transition: {
        duration: 0.7
    }
};
const rotateX = {
    name: "Rotate X",
    variants: {
        initial: {
            rotateZ: 90,
            opacity: 0,
            scale: 0.6
        },
        animate: {
            opacity: 1,
            rotateZ: 0,
            scale: 1
        },
        exit: {
            opacity: 0,
            rotateZ: 90,
            scale: 0.6
        }
    },
    transition: {
        duration: 0.7
    }
};
const rotateZ = {
    name: "Rotate Z",
    variants: {
        initial: {
            opacity: 0,
            rotateZ: 360
        },
        animate: {
            opacity: 1,
            rotateZ: 0
        },
        exit: {
            opacity: 0,
            rotateZ: 360
        }
    },
    transition: {
        duration: 0.7
    }
};
const opacity = {
    name: "Opacity",
    variants: {
        initial: {
            opacity: 0
        },
        animate: {
            opacity: 1
        },
        exit: {
            opacity: 0
        }
    },
    transition: {
        duration: 0.1
    }
};
const animations = [
    slideUp,
    slideRight,
    fadeBack,
    rotateX,
    rotateY,
    rotateZ,
    opacity
];


/***/ }),

/***/ 7505:
/***/ ((module) => {

module.exports = require("@headlessui/react");

/***/ }),

/***/ 5692:
/***/ ((module) => {

module.exports = require("@mui/material");

/***/ }),

/***/ 8891:
/***/ ((module) => {

module.exports = require("@mui/material/FormControl");

/***/ }),

/***/ 4377:
/***/ ((module) => {

module.exports = require("@szhsin/react-menu");

/***/ }),

/***/ 562:
/***/ ((module) => {

module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 8028:
/***/ ((module) => {

module.exports = require("next/dist/server/image-config.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 5874:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 3018:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/to-base-64.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("react-sizeme");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 6197:
/***/ ((module) => {

module.exports = import("framer-motion");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [730,598,334,648], () => (__webpack_exec__(8510)));
module.exports = __webpack_exports__;

})();