"use strict";
exports.id = 648;
exports.ids = [648];
exports.modules = {

/***/ 7648:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "zt": () => (/* reexport */ FeedBack),
  "$_": () => (/* reexport */ Footer),
  "h4": () => (/* reexport */ Header),
  "PJ": () => (/* reexport */ Svg_Icons),
  "or": () => (/* reexport */ Main),
  "u_": () => (/* reexport */ Modal),
  "PV": () => (/* reexport */ Modal_ModalItems),
  "wp": () => (/* reexport */ Navbar_Navbar),
  "N4": () => (/* reexport */ PopUp),
  "RN": () => (/* reexport */ ProductCardLG),
  "vX": () => (/* reexport */ ProductCardSM),
  "cm": () => (/* reexport */ ProductList),
  "Y8": () => (/* reexport */ Radio)
});

// UNUSED EXPORTS: Disclosure

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: external "@szhsin/react-menu"
var react_menu_ = __webpack_require__(4377);
// EXTERNAL MODULE: ./node_modules/@szhsin/react-menu/dist/index.css
var dist = __webpack_require__(4995);
// EXTERNAL MODULE: ./components/lib/index.js + 1 modules
var lib = __webpack_require__(2969);
;// CONCATENATED MODULE: ./configs/menu.js
const menu = [
    {
        id: "0",
        name: "main",
        component: "Main",
        path: "main",
        title: "Главная",
        icon: "",
        bc: true,
        show: true,
        activeLink: true,
        items: [],
        params: []
    },
    {
        id: "1",
        name: "catalog",
        component: "Catalog",
        path: "catalog",
        title: "Каталог",
        icon: "",
        bc: true,
        show: true,
        activeLink: true,
        items: [],
        params: []
    },
    {
        id: "2",
        name: "cooperation",
        component: "Cooperation",
        path: "cooperation",
        title: "Сотрудничество",
        icon: "",
        bc: true,
        show: true,
        activeLink: true,
        items: [],
        params: []
    },
    {
        id: "3",
        name: "info",
        component: "Info",
        path: "info",
        title: "Инфо",
        icon: "",
        bc: true,
        show: true,
        activeLink: false,
        items: [
            {
                id: "3_0",
                name: "sertificates",
                component: "Sertificates",
                path: "sertificates",
                title: "Сертификаты",
                icon: "",
                bc: true,
                show: true,
                activeLink: true,
                items: [],
                params: [
                    "id"
                ]
            },
            {
                id: "3_1",
                name: "objects",
                component: "Objects",
                path: "objects",
                title: "Объекты",
                icon: "",
                bc: true,
                show: true,
                activeLink: true,
                items: [],
                params: []
            }, 
        ],
        params: []
    },
    {
        id: "4",
        name: "contacts",
        component: "Contacts",
        path: "contacts",
        title: "Контакты",
        icon: "",
        bc: false,
        show: true,
        activeLink: true,
        items: [],
        params: []
    },
    {
        id: "5",
        name: "notfound",
        component: "NotFound",
        path: "404",
        title: "Страница не найдена",
        icon: "",
        bc: false,
        show: false,
        activeLink: true,
        items: [],
        params: []
    }, 
];

// EXTERNAL MODULE: ./configs/app.js
var app = __webpack_require__(41);
;// CONCATENATED MODULE: ./components/complicated/Navbar/NavSM.js

// react


// react-menu


// etc




function NavSM() {
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_menu_.Menu, {
        menuButton: /*#__PURE__*/ jsx_runtime_.jsx(react_menu_.MenuButton, {
            children: /*#__PURE__*/ jsx_runtime_.jsx(Svg_Icons.Menu, {
                extraClasses: `w-10 h-10 cursor-pointer active:border rounded-md transition-all text-belplit`
            })
        }),
        children: [
            menu.map(({ show , activeLink , title , items , name  }, index1)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)((external_react_default()).Fragment, {
                    children: [
                        show && activeLink && /*#__PURE__*/ jsx_runtime_.jsx(react_menu_.MenuItem, {
                            className: `menuItem`,
                            children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                href: `/${name}`,
                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    className: "menuItemTitle w-full",
                                    children: title
                                })
                            })
                        }, `MenuItem${index1}`),
                        items.filter((item)=>item.show
                        ).length !== 0 && /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                            children: show && !activeLink && /*#__PURE__*/ jsx_runtime_.jsx(react_menu_.SubMenu, {
                                label: title,
                                children: items.map((innerItem, index)=>/*#__PURE__*/ jsx_runtime_.jsx(react_menu_.MenuItem, {
                                        className: `menuItem`,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                            href: `/${name}/${innerItem.name}`,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                className: "menuItemTitle w-full",
                                                children: innerItem.title
                                            })
                                        })
                                    }, `NAVSMINNER${index}`)
                                )
                            })
                        })
                    ]
                }, `NAVSM${index1}`)
            ),
            /*#__PURE__*/ jsx_runtime_.jsx("hr", {
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(react_menu_.MenuItem, {
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        href: "tel:88005337881",
                        children: app/* app.contacts.phone1 */.l.contacts.phone1
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(react_menu_.MenuItem, {
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        href: "tel:88005337881",
                        children: app/* app.contacts.phone2 */.l.contacts.phone2
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("hr", {
            })
        ]
    }));
};

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: external "@headlessui/react"
var react_ = __webpack_require__(7505);
;// CONCATENATED MODULE: ./components/complicated/Navbar/NavLGItem.js

// react




// react-menu



function NavLGItem(props) {
    const { item: { show , activeLink , name , title , items  } ,  } = props;
    const [stroke, setStroke] = external_react_default().useState('#5d5e75');
    const [openMenu, setOpenMenu] = external_react_default().useState(false);
    const [hover, setHover] = external_react_default().useState(false);
    const router = (0,router_.useRouter)();
    const { state , toggleMenu  } = (0,react_menu_.useMenuState)();
    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: `relative`,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: `flex hover:text-belplit`,
            children: [
                show && activeLink && /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                    href: `/${name}`,
                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        children: title
                    })
                }),
                items.filter((item)=>item.show
                ).length !== 0 && /*#__PURE__*/ jsx_runtime_.jsx(react_menu_.Menu, {
                    menuButton: ({ open  })=>{
                        open ? setOpenMenu(true) : setOpenMenu(false);
                        return(/*#__PURE__*/ jsx_runtime_.jsx(react_menu_.MenuButton, {
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: `flex`,
                                onMouseEnter: ()=>setStroke('#38a000')
                                ,
                                onMouseLeave: ()=>setStroke('#5d5e75')
                                ,
                                children: [
                                    title,
                                    "\xa0",
                                    /*#__PURE__*/ jsx_runtime_.jsx(Svg_Icons.ChevronDown, {
                                        stroke: stroke,
                                        extraClasses: `
                  ${!open ? `rotate-180` : ''}
                  w-6 h-6 cursor-pointer rounded-full transition-all`
                                    })
                                ]
                            })
                        }));
                    },
                    children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Transition, {
                        show: openMenu,
                        enter: "transition-opacity ease-linear duration-300",
                        enterFrom: "opacity-0",
                        enterTo: "opacity-100",
                        leave: "transition-opacity ease-linear duration-300",
                        leaveFrom: "opacity-100",
                        leaveTo: "opacity-0",
                        children: items.map((innerItem, index)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_menu_.MenuItem, {
                                onClick: ()=>router.push(`/${name}/${innerItem.name}`)
                                ,
                                className: `hover:text-belplit w-60`,
                                onMouseEnter: ()=>setHover({
                                        [index]: true
                                    })
                                ,
                                onMouseLeave: ()=>setHover({
                                        [index]: false
                                    })
                                ,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: `trans-menu-item transition-duration-500 ${!hover[index] ? 'w-1 opacity-0' : 'w-2 opacity-100'}`,
                                        children: '>'
                                    }),
                                    "\xa0",
                                    innerItem.title
                                ]
                            }, `NAVLGINNER${index}`)
                        )
                    })
                })
            ]
        })
    }));
};

;// CONCATENATED MODULE: ./components/complicated/Navbar/NavLG.js

// react

// etc


function NavLG() {
    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: `flex flex-row flex-nowrap justify-center gap-14 border-b border-t py-2`,
        children: menu.map((item, index)=>/*#__PURE__*/ jsx_runtime_.jsx(NavLGItem, {
                item: item,
                i: index
            }, `NAVLG${index}`)
        )
    }));
};

;// CONCATENATED MODULE: ./components/complicated/Navbar/Navbar.js

// react

// components



function Navbar(props) {
    const { lgView , children  } = props;
    const [scrolled, setScrolled] = external_react_default().useState(false);
    const [opacity, setOpacity] = external_react_default().useState(false);
    const handleScroll = ()=>{
        const offset = window.scrollY;
        if (offset > 80) {
            setScrolled(true);
            setOpacity(true);
        } else {
            setScrolled(false);
        }
        if (offset > 120) {
            setOpacity(true);
        } else {
            setOpacity(false);
        }
    };
    external_react_default().useEffect(()=>{
        window.addEventListener('scroll', handleScroll);
        return ()=>window.removeEventListener('scroll', handleScroll)
        ;
    });
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: ` ${!lgView ? `flex justify-between items-center` : ``}`,
        children: [
            lgView ? /*#__PURE__*/ jsx_runtime_.jsx(NavLG, {
            }) : /*#__PURE__*/ jsx_runtime_.jsx(NavSM, {
            }),
            scrolled && lgView && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: `fixed top-0 w-full bg-slate-100 ${opacity ? 'bg-opacity-95' : ''} border-0 -ml-1`,
                children: /*#__PURE__*/ jsx_runtime_.jsx(NavLG, {
                })
            }),
            scrolled && !lgView && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: `fixed top-1 left-1 w-10 h-10 rounded-md bg-slate-100 bg-opacity-60 shadow-xl`,
                children: /*#__PURE__*/ jsx_runtime_.jsx(NavSM, {
                })
            }),
            children
        ]
    }));
}
/* harmony default export */ const Navbar_Navbar = (Navbar);

// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
;// CONCATENATED MODULE: ./components/complicated/Footer/Footer.js



// etc


function Footer(lgView) {
    return(/*#__PURE__*/ jsx_runtime_.jsx("footer", {
        className: `pt-2 ${lgView ? `bg-zinc-800` : ``}`,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: `flex flex-col w-full sm:flex-row`,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: `p-2 w-full flex sm:w-1/3 rounded-md overflow-hidden shadow-md sm:pl-2 sm:pb-2`,
                    children: /*#__PURE__*/ jsx_runtime_.jsx("iframe", {
                        src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2249.6768022748242!2d37.26887351592759!3d55.67722018053323!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b550444d104d95%3A0x2e41f78026092c4!2z0JzQvtC70L7QtNGR0LbQvdCw0Y8g0YPQuy4sIDQ2LCDQntC00LjQvdGG0L7QstC-LCDQnNC-0YHQutC-0LLRgdC60LDRjyDQvtCx0LsuLCAxNDMwMDc!5e0!3m2!1sru!2sru!4v1605787923881!5m2!1sru!2sru",
                        width: "100%",
                        height: "100%",
                        "aria-hidden": "false",
                        tabIndex: "0",
                        style: {
                            borderRadius: '5px'
                        }
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: `flex flex-col sm:w-2/3`,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: `flex w-full flex-col sm:justify-between md:justify-end md:flex-row p-2`,
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: `p-4`,
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                            className: `text-slate-100 font-bold`,
                                            children: [
                                                app/* app.contacts.title */.l.contacts.title,
                                                ":"
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: `bg-slate-100`,
                                            style: {
                                                height: '1px'
                                            }
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: `flex`,
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx(Svg_Icons.Location, {
                                                    extraClasses: `w-6 text-belplit`
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                            className: `text-slate-100 text-sm`,
                                                            children: app/* app.contacts.address1.title */.l.contacts.address1.title
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                            className: `text-slate-100 text-xs`,
                                                            children: app/* app.contacts.address1.value */.l.contacts.address1.value
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("br", {
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: `flex`,
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx(Svg_Icons.Location, {
                                                    extraClasses: `w-6 text-belplit`
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                            className: `text-slate-100 text-sm`,
                                                            children: app/* app.contacts.address2.title */.l.contacts.address2.title
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                            className: `text-slate-100 text-xs`,
                                                            children: app/* app.contacts.address2.value */.l.contacts.address2.value
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("br", {
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: `flex`,
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx(Svg_Icons.Location, {
                                                    extraClasses: `w-6 text-belplit`
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                            className: `text-slate-100 text-sm`,
                                                            children: app/* app.contacts.address3.title */.l.contacts.address3.title
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                            className: `text-slate-100 text-xs`,
                                                            children: app/* app.contacts.address3.value */.l.contacts.address3.value
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: `bg-slate-100 my-1`,
                                            style: {
                                                height: '1px'
                                            }
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: `flex my-1`,
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx(Svg_Icons.Phone, {
                                                    extraClasses: `w-6 text-belplit`
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    href: "tel:88005337881",
                                                    className: `text-slate-100`,
                                                    children: app/* app.contacts.phone1 */.l.contacts.phone1
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: `flex my-1`,
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx(Svg_Icons.Phone, {
                                                    extraClasses: `w-6 text-belplit`
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    href: "tel:88005337881",
                                                    className: `text-slate-100`,
                                                    children: app/* app.contacts.phone2 */.l.contacts.phone2
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: `flex my-1`,
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx(Svg_Icons.Mail, {
                                                    extraClasses: `w-6 text-belplit`
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    href: "mailto:belplit-russia@mail.ru",
                                                    className: `text-slate-100`,
                                                    children: app/* app.contacts.email */.l.contacts.email
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: `p-4 flex flex-col`,
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                            className: `text-slate-100 font-bold`,
                                            children: [
                                                app/* app.workingHoars.title */.l.workingHoars.title,
                                                ":"
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: `bg-slate-100`,
                                            style: {
                                                height: '1px'
                                            }
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: `flex`,
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx(Svg_Icons.Clock, {
                                                    extraClasses: `w-6 text-belplit`
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                    className: `my-1 pt-0.5 pl-1 text-slate-100 text-sm`,
                                                    children: app/* app.workingHoars.value */.l.workingHoars.value
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: `flex justify-end`,
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: 'relative y-metrika mr-6',
                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    href: 'https://metrika.yandex.ru/stat/?id=69799987&amp;from=informer',
                                    target: "_blank",
                                    rel: "noreferrer",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                                        src: `https://metrika-informer.com/informer/69799987/3_1_FFFFFFFF_EFEFEFFF_0_pageviews`,
                                        alt: "Яндекс.Метрика",
                                        title: "Яндекс.Метрика: данные за сегодня (просмотры, визиты и уникальные посетители)",
                                        "data-cid": "69799987",
                                        "data-lang": "ru",
                                        layout: "fill",
                                        objectFit: "contain",
                                        objectPosition: ''
                                    })
                                })
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                            className: `text-slate-100 right-0 bottom-0 text-right text-xs mt-4 pr-6 pb-4`,
                            children: [
                                "\xa9 2021 Сайт создан с помощью",
                                ' ',
                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    href: "https://roboweb.site/",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("strong", {
                                        children: "RoboWeb"
                                    })
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    }));
};

;// CONCATENATED MODULE: ./public/images/logo/logo.png
/* harmony default export */ const logo = ({"src":"/_next/static/media/logo.b800d39a.png","height":40,"width":300,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAABCAYAAADjAO9DAAAAK0lEQVR4nGOM2Kid+uHrd9a/f1n+MTMyv/nP8J/37/+fjGxM3OIM/xnvAQAWpg90IxoebQAAAABJRU5ErkJggg=="});
;// CONCATENATED MODULE: ./components/complicated/Header/Header.js

// react



// etc



// logo

function Header(props) {
    const { lgView  } = props;
    const router = (0,router_.useRouter)();
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("header", {
        className: `bg-slate-50 shadow-md z-50`,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: `flex ${lgView ? `justify-between` : `justify-center`}`,
                children: [
                    lgView && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: `${lgView && `w-1/3 p-1 ml-2 mt-2`}`,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(lib/* Text */.x, {
                                ts: 'sm',
                                py: 1,
                                children: app/* app.contacts.address1.value */.l.contacts.address1.value
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(lib/* Text */.x, {
                                tw: 'bold',
                                py: 1,
                                children: app/* app.workingHoars.value */.l.workingHoars.value
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: `cursor-pointer pt-3 mt-2 h-full relative min-w-logo`,
                        children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                            src: logo,
                            alt: 'belplit-logo',
                            layout: "responsive",
                            objectFit: "contain",
                            onClick: ()=>router.push('/main')
                        })
                    }),
                    lgView && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: `mr-2 mt-3 w-1/3 flex justify-end`,
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: `flex items-center my-1`,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(Svg_Icons.Phone, {
                                    extraClasses: `w-6 text-belplit`
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    href: "tel:88005337881",
                                    className: ``,
                                    children: app/* app.contacts.phone1 */.l.contacts.phone1
                                })
                            ]
                        })
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                children: /*#__PURE__*/ jsx_runtime_.jsx(Navbar_Navbar, {
                    lgView: lgView,
                    children: !lgView && /*#__PURE__*/ jsx_runtime_.jsx(lib/* Text */.x, {
                        ta: 'right',
                        extraClasses: `${lgView && `w-1/3`}`,
                        children: app/* app.contacts.phone1 */.l.contacts.phone1
                    })
                })
            })
        ]
    }));
};

// EXTERNAL MODULE: external "@mui/material/FormControl"
var FormControl_ = __webpack_require__(8891);
// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(5692);
;// CONCATENATED MODULE: ./components/complicated/Forms/FeedBack.js






function FeedBack(props) {
    const [formStatus, setFormStatus] = external_react_default().useState('show');
    const [formState, setFormState] = external_react_default().useState({
        clientName: '',
        clientPhone: '',
        body: '',
        clientEmail: ''
    });
    const [checkFormStatus, setCheckFormStatus] = external_react_default().useState({
        0: false,
        1: false,
        2: false,
        3: false
    });
    function checkForm() {
        let res = false;
        let a = Promise.resolve(/^[а-я, А-Я, a-z, A-Z]{3,20}$/.test(formState.clientName));
        let b = Promise.resolve(/\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/.test(formState.clientPhone));
        let c = Promise.resolve(/.{3,500}/.test(formState.body));
        let d = Promise.resolve(/(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/.test(formState.clientEmail));
        return Promise.all([
            a,
            b,
            c,
            d
        ]).then((values)=>{
            console.log(values);
            res = true;
            values.map((item, index)=>{
                if (!item) {
                    res = false;
                    setCheckFormStatus((state)=>{
                        return {
                            ...state,
                            [index]: true
                        };
                    });
                    setTimeout(()=>{
                        setCheckFormStatus((state)=>{
                            return {
                                ...state,
                                [index]: false
                            };
                        });
                    }, 3000);
                }
            });
            return res;
        });
    }
    function resetForm() {
        setFormState({
            clientName: '',
            clientPhone: '',
            body: '',
            clientEmail: ''
        });
    }
    async function sendForm() {
        let check = await checkForm();
        if (!check) {
            return;
        }
        setFormStatus('pending');
        try {
            props.onFulfilled('loading');
        } catch (err) {
        }
        fetch('/api/sendform', {
            method: 'POST',
            headers: {
                Accept: 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formState)
        }).then((res)=>{
            if (res.ok) {
                console.log('Succeeded!');
                resetForm();
            }
            if (!res.ok) {
                console.log('Error!');
                resetForm();
            }
            setTimeout(()=>{
                return res;
            }, 1000);
        }).then(()=>{
            setFormStatus('complete');
            try {
                props.onFulfilled('success');
            } catch (err) {
            }
            setTimeout(()=>{
                setFormStatus('show');
            }, 4000);
        });
    }
    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
            className: `max-w-xl w-full mx-auto`,
            children: [
                formStatus === 'show' && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: `flex flex-col w-full relative items-center justify-center max-w-xl`,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: `flex flex-col sm:flex-row sm:gap-2 w-full relative items-center justify-center`,
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: `w-full flex sm:max-w-md relative`,
                                    children: [
                                        checkFormStatus[0] && /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            className: `form-text-alert text-red-600 absolute right-4 top-2`,
                                            children: "3 - 50 символов"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                            className: `w-full px-2 my-2 pt-2 border-b ${checkFormStatus[0] ? `rounded-md border border-red-600` : ``}`,
                                            required: true,
                                            id: "FeedBackFormClientName",
                                            placeholder: "Имя",
                                            value: formState.clientName,
                                            onChange: (e)=>setFormState((state)=>{
                                                    return {
                                                        ...state,
                                                        clientName: e.target.value
                                                    };
                                                })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: `w-full flex sm:max-w-md relative`,
                                    children: [
                                        checkFormStatus[1] && /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            className: `form-text-alert text-red-600 absolute right-4 top-2`,
                                            children: "Не верный номер"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                            className: `w-full px-2 my-2 border-b pt-2 ${checkFormStatus[1] ? `rounded-md border border-red-600` : ``}`,
                                            required: true,
                                            id: "FeedBackFormClientPhone",
                                            placeholder: "Телефон",
                                            value: formState.clientPhone,
                                            onChange: (e)=>setFormState((state)=>{
                                                    return {
                                                        ...state,
                                                        clientPhone: e.target.value
                                                    };
                                                })
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: `w-full relative`,
                            children: [
                                checkFormStatus[2] && /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    className: `form-text-alert text-red-600 right-4 top-0`,
                                    children: "3 - 500 символов"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("textarea", {
                                    className: `border rounded-md w-full px-2 ${checkFormStatus[2] ? `border border-red-600` : ``}`,
                                    required: true,
                                    id: "FeedBackFormBody",
                                    placeholder: "Сообщение",
                                    rows: 4,
                                    value: formState.body,
                                    onChange: (e)=>setFormState((state)=>{
                                            return {
                                                ...state,
                                                body: e.target.value
                                            };
                                        })
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: `gap-2 flex flex-col sm:flex-row w-full relative items-center justify-between`,
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: `w-full flex relative`,
                                    children: [
                                        checkFormStatus[3] && /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            className: `form-text-alert text-red-600 absolute right-4 top-2`,
                                            children: "Введите корректный email"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                            className: `border-b w-full pt-2 px-2 my-2 sm:max-w-md ${checkFormStatus[3] ? `rounded-md border border-red-600` : ``}`,
                                            required: true,
                                            id: "FeedBackFormClientEmail",
                                            placeholder: "E-mail",
                                            value: formState.clientEmail,
                                            onChange: (e)=>setFormState((state)=>{
                                                    return {
                                                        ...state,
                                                        clientEmail: e.target.value
                                                    };
                                                })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    onClick: sendForm,
                                    className: `bg-belplit text-center text-slate-100 rounded-md cursor-pointer px-4 py-2 w-full`,
                                    children: "Отправить"
                                })
                            ]
                        })
                    ]
                }),
                formStatus === 'pending' && /*#__PURE__*/ jsx_runtime_.jsx("p", {
                    className: `text-center py-10`,
                    children: "Отправка запроса"
                }),
                formStatus === 'complete' && /*#__PURE__*/ jsx_runtime_.jsx("p", {
                    className: `text-center py-10`,
                    children: "Запрос успешно отправлен. Спасибо за обращение!"
                })
            ]
        })
    }));
};

;// CONCATENATED MODULE: ./components/complicated/Product/ProductCardSM.js





function ProductCardSM(props) {
    const { title , files , id  } = props.product;
    return(/*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
        href: `/catalog/${id}`,
        passHref: true,
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: `justify-self-auto min-w-xs my-2 mx-2 p-2 relative rounded-md shadow-md bg-slate-50 cursor-pointer`,
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: `flex flex-col justify-between w-full  items-center px-4 h-full`,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(lib/* Text */.x, {
                        tw: 'bold',
                        ta: 'center',
                        ts: 'lg',
                        extraClasses: `h-14`,
                        my: 2,
                        children: title
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: `relative w-full h-52 cursor-pointer`,
                        children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                            src: `/images/products/sm/${files.avatarSM}`,
                            alt: `${title}`,
                            width: 200,
                            height: 150,
                            layout: "fill",
                            objectFit: "cover"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: `bg-belplit w-full cursor-pointer mx-auto py-2 px-4 text-center text-slate-100 mt-2 rounded-md`,
                            children: "Подробнее"
                        })
                    })
                ]
            })
        })
    }));
};

// EXTERNAL MODULE: ./configs/products.js + 1 modules
var products = __webpack_require__(4785);
;// CONCATENATED MODULE: ./components/complicated/Product/ProductCardLG.js

// react


// etc



function ProductCardLG(props) {
    const { title , files , sizes , prices , desc: { consists , options , advantages , functions , installation , description  } ,  } = props.product;
    const [index, setIndex] = external_react_default().useState(0);
    const [modalOpen, setModalOpen] = external_react_default().useState(false);
    const [modalData, setModalData] = external_react_default().useState({
        status: 'orderonopen',
        header: [
            'Отправить запрос'
        ]
    });
    const radioItems = sizes.map((item, i)=>{
        return {
            bar: item[0].split(' / ')[0],
            square: item[0].split(' / ')[1],
            key: i
        };
    });
    const [radioValue, setRadioValue] = external_react_default().useState(0);
    external_react_default().useEffect(()=>{
        setIndex(radioValue);
        return;
    }, [
        radioValue
    ]);
    external_react_default().useEffect(()=>{
        if (modalData.status === 'success') {
            setTimeout(()=>{
                setModalOpen(false);
            }, 3000);
        }
        return;
    }, [
        modalData
    ]);
    function openModal() {
        setModalData({
            status: 'orderonopen',
            header: [
                'Отправить запрос'
            ]
        });
        setModalOpen(true);
    }
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(lib/* Text */.x, {
                ta: 'center',
                ts: '3xl',
                tc: 'belplit',
                py: 10,
                children: title
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: `w-full max-w-6xl mx-auto relative flex-col items-center justify-center`,
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: `flex flex-col lg:grid lg:grid-cols-3`,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: `relative rounded-md overflow-hidden m-4 h-96`,
                            children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                                src: `/images/products/lg/${files.product}`,
                                alt: title,
                                // height={200}
                                // width={300}
                                layout: "fill",
                                objectFit: "contain"
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: ``,
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: `rounded-md shadow-md m-4 py-2 bg-slate-100`,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            className: `ml-2 pt-2 px-2 font-bold text-lg`,
                                            children: "Размеры:"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(Radio, {
                                            radioItems: radioItems,
                                            onChange: setRadioValue
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: `rounded-md shadow-md m-4 py-2 px-4 bg-slate-100`,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            className: `py-2 font-bold text-lg`,
                                            children: "Цена:"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: `flex px-4 gap-1 whitespace-nowrap py-2 bg-white rounded-md shadow-md`,
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                    className: `text-gray-500 align-bottom `,
                                                    children: "плита:"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                    className: `font-bold text-xl`,
                                                    children: prices.bar[index]
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                    className: `text-gray-500`,
                                                    children: "руб. /"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                    className: `text-gray-500`,
                                                    children: "кв.м:"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                    className: 'font-bold',
                                                    children: prices.square[index]
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                    className: `text-gray-500`,
                                                    children: "руб."
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: `bg-belplit my-2 rounded-md text-center text-slate-200 py-2 cursor-pointer hover:bg-opacity-75 hover:text-slate-200`,
                                            onClick: openModal,
                                            children: "Купить"
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: `m-4 py-2`,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    className: `ml-2 pt-2 px-2 font-bold text-lg`,
                                    children: "Продукция:"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(ProductList, {
                                    listItems: products/* products.map */.R.map((item)=>({
                                            id: item.id,
                                            title: item.title
                                        })
                                    )
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: `col-span-2 py-2 m-4`,
                            children: /*#__PURE__*/ jsx_runtime_.jsx(PopUp, {
                                data: [
                                    [
                                        description,
                                        'Описание:'
                                    ],
                                    [
                                        consists,
                                        'Состав:'
                                    ],
                                    [
                                        options,
                                        'Область применения:'
                                    ],
                                    [
                                        advantages,
                                        'Преимущества:'
                                    ],
                                    [
                                        functions,
                                        'Функции:'
                                    ],
                                    [
                                        installation,
                                        'Монтаж:'
                                    ], 
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: `col-span-2 rounded-md shadow-md w-full bg-white`,
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: `relative`,
                                children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                                    src: `/images/products/techDesc/${files.techDesc[0]}`,
                                    alt: title,
                                    width: files.techDesc[1][0],
                                    height: files.techDesc[1][1],
                                    layout: "responsive",
                                    objectFit: "contain"
                                })
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Modal, {
                setOpen: modalOpen,
                setClose: ()=>setModalOpen(false)
                ,
                header: /*#__PURE__*/ jsx_runtime_.jsx(Modal_ModalItems.Header, {
                    data: {
                        status: modalData.status,
                        header: modalData.header,
                        setClose: ()=>setModalOpen(false)
                    }
                }),
                body: /*#__PURE__*/ jsx_runtime_.jsx(FeedBack, {
                    onFulfilled: (a)=>setModalData({
                            status: a,
                            header: modalData.header
                        })
                })
            })
        ]
    }));
};

;// CONCATENATED MODULE: ./components/complicated/PopUp/PopUp.js



function PopUp(props) {
    const { data  } = props;
    const [show, setShow] = external_react_default().useState(false);
    const [hover, setHover] = external_react_default().useState(false);
    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        children: data && data.map((item1, index)=>{
            var ref;
            return item1[0] && /*#__PURE__*/ (0,jsx_runtime_.jsxs)((external_react_default()).Fragment, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: `flex justify-between relative rounded-md overflow-hidden h-10 my-1 shadow-md bg-slate-100 cursor-pointer`,
                        onClick: ()=>setShow({
                                [index]: !show[index]
                            })
                        ,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: `hover:bg-belplit active:bg-belplit active:bg-opacity-40 hover:bg-opacity-40 w-full text-lg py-2 pl-4 font-bold`,
                                children: item1[1]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(Svg_Icons.Plus, {
                                extraClasses: `${show[index] ? `opacity-0` : `opacity-100`} absolute bg-belplit right-0 w-10 h-10 text-white`
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(Svg_Icons.Minus, {
                                extraClasses: `${show[index] ? `opacity-100` : `opacity-0`} absolute bg-belplit right-0 w-10 h-10 text-white`
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: `${!show[index] ? 'max-h-0' : 'max-h-user'} ml-2 overflow-hidden transition-all`,
                        children: (ref = item1[0]) === null || ref === void 0 ? void 0 : ref.map((item, inner_index)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                className: `indent-0 cursor-default flex hover:text-belplit border-b py-1 font-light`,
                                onMouseEnter: ()=>setHover({
                                        [inner_index]: true
                                    })
                                ,
                                onMouseLeave: ()=>setHover({
                                        [inner_index]: false
                                    })
                                ,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: `transition-all font-bold overflow-hidden text-belplit ${!hover[inner_index] ? 'w-1 opacity-0' : 'w-3 opacity-100'}`,
                                        children: '>'
                                    }),
                                    "\xa0",
                                    `${item}`
                                ]
                            }, Math.random().toString(36))
                        )
                    })
                ]
            }, `POPUP${index}`);
        })
    }));
};

;// CONCATENATED MODULE: ./components/complicated/Svg/Svg.js

const SVGImage = ({ children , extraClasses , ...props })=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx("svg", {
        className: `${extraClasses}`,
        ...props,
        children: children
    }));
};

;// CONCATENATED MODULE: ./components/complicated/Svg/Icons.js


const ChevronDown = ({ w =6 , h =6 , ...props })=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(SVGImage, {
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: props.stroke || 'currentColor',
        xmlns: "http://www.w3.org/2000/svg",
        ...props,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: 2,
                d: "M19 9l-7 7-7-7"
            }),
            ";"
        ]
    }));
};
const Menu = ({ w =6 , h =6 , ...props })=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx(SVGImage, {
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: props.stroke || 'currentColor',
        xmlns: "http://www.w3.org/2000/svg",
        ...props,
        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: 2,
            d: "M4 6h16M4 12h16M4 18h16"
        })
    }));
};
const Close = ({ w =6 , h =6 , ...props })=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx(SVGImage, {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        stroke: props.stroke || 'currentColor',
        ...props,
        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: "2",
            d: "M6 18L18 6M6 6l12 12"
        })
    }));
};
const ChevronUp = ({ w =6 , h =6 , ...props })=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx(SVGImage, {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        stroke: props.stroke || 'currentColor',
        ...props,
        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: 2,
            d: "M5 15l7-7 7 7"
        })
    }));
};
const Location = ({ w =6 , h =6 , ...props })=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx(SVGImage, {
        xmlns: "http://www.w3.org/2000/svg",
        fill: props.fill || 'currentColor',
        viewBox: "0 0 24 24",
        stroke: props.stroke || 'currentColor',
        ...props,
        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            fillRule: "evenodd",
            d: "M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z",
            clipRule: "evenodd"
        })
    }));
};
const Phone = ({ w =6 , h =6 , ...props })=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx(SVGImage, {
        xmlns: "http://www.w3.org/2000/svg",
        fill: props.fill || 'currentColor',
        viewBox: "0 0 24 24",
        stroke: props.stroke || 'currentColor',
        ...props,
        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            d: "M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"
        })
    }));
};
/*#__PURE__*/ jsx_runtime_.jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    className: "h-5 w-5",
    viewBox: "0 0 20 20",
    fill: "currentColor"
});
const Mail = ({ w =6 , h =6 , ...props })=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(SVGImage, {
        xmlns: "http://www.w3.org/2000/svg",
        fill: props.fill || 'currentColor',
        viewBox: "0 0 24 24",
        stroke: props.stroke || 'currentColor',
        ...props,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"
            })
        ]
    }));
};
const Plus = ({ w =6 , h =6 , ...props })=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx(SVGImage, {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        stroke: props.stroke || 'currentColor',
        ...props,
        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: 2,
            d: "M12 4v16m8-8H4"
        })
    }));
};
const Minus = ({ w =6 , h =6 , ...props })=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx(SVGImage, {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        stroke: props.stroke || 'currentColor',
        ...props,
        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: 2,
            d: "M20 12H4"
        })
    }));
};
const Clock = ({ w =6 , h =6 , ...props })=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx(SVGImage, {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        stroke: props.stroke || 'currentColor',
        ...props,
        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: 2,
            d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
        })
    }));
};
const Icons_Icons = {
    Clock,
    Minus,
    Plus,
    Mail,
    Phone,
    ChevronUp,
    ChevronDown,
    Menu,
    Close,
    Location
};
/* harmony default export */ const Svg_Icons = (Icons_Icons);

;// CONCATENATED MODULE: ./components/complicated/Main/GridImages.js




function GridImages() {
    const [hover, setHover] = external_react_default().useState(false);
    const imagesSM = [
        {
            src: '/images/examples/1.jpg',
            classNames: `main-image-container-sm md:row-span-2 rounded-md overflow-hidden shadow-md h-full relative`,
            desc: `Внутренняя изоляция перекрытий под стяжку бесшовных полов (ламинат, паркетная доска)`
        },
        {
            src: '/images/examples/2.jpg',
            classNames: `main-image-container-sm rounded-md overflow-hidden shadow-md  h-full relative`,
            desc: `Внутренняя изоляция стен`
        },
        {
            src: '/images/examples/3.jpg',
            classNames: `main-image-container-sm md:row-span-2 rounded-md overflow-hidden shadow-md h-full relative`,
            desc: `Тепло и шумоизоляция скатных кровель`
        },
        {
            src: '/images/examples/4.jpg',
            classNames: `main-image-container-sm rounded-md overflow-hidden shadow-md h-full relative`,
            desc: `Утепление зданий`
        },
        {
            src: '/images/examples/5.jpg',
            classNames: `main-image-container-sm rounded-md overflow-hidden shadow-md h-full relative`,
            desc: `Ветрозащита, утепление внешних стен`
        },
        {
            src: '/images/examples/6.jpg',
            classNames: `main-image-container-sm rounded-md overflow-hidden shadow-md h-full relative`,
            desc: `Звукоизоляция потолка`
        }, 
    ];
    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: `grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 mx-4 gap-4 mt-5 main-image-container-lg`,
        children: imagesSM.map((item, index)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: item.classNames,
                onMouseEnter: ()=>setHover({
                        [index]: true
                    })
                ,
                onMouseLeave: ()=>setHover({
                        [index]: false
                    })
                ,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                        src: `${item.src}`,
                        alt: '',
                        layout: "fill",
                        objectFit: "cover"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: `absolute rounded-md flex flex-col justify-center inset-0 hover:bg-slate-900 hover:bg-opacity-60 transition-all`,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: `zero:hidden sm:block absolute inset-0 m-4 box-content rounded-md ${hover[index] ? 'border border-slate-100' : ''}`
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                className: `zero:hidden sm:block cursor-default ${hover[index] ? 'scale-100' : 'scale-0'} text-center text-slate-100 md:text-xl font-light p-8 transition-all`,
                                children: item.desc
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                className: `zero:flex justify-center items-center align-middle sm:hidden absolute inset-0 cursor-default text-sm text-center text-slate-100 font-light bg-slate-900 bg-opacity-60`,
                                children: item.desc
                            })
                        ]
                    })
                ]
            }, `GRIDIMG${index}`)
        )
    }));
};

;// CONCATENATED MODULE: ./components/complicated/Main/Main.js

// react



// etc



function Main() {
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: `flex flex-col overflow-hidden`,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: `relative w-full h-full overflow-hidden`,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: `absolute`,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                className: `font-bold 
            text-3xl sm:text-6xl md:text-8xl
            ml-10 mt-10 sm:ml-16 sm:mt-16 md:ml-20 md:mt-20`,
                                style: {
                                    color: '#38a000'
                                },
                                children: "БЕЛТЕРМО"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                className: `
            leading-none sm:leading-none md:leading-none lg:leading-none  
            text-sm sm:text-xl md:text-3xl
            text-slate-100 
            font-bold 
            ml-16 sm:ml-20 md:ml-28 
            max-w-md
            `,
                                children: [
                                    "Экологичный утеплитель и ",
                                    /*#__PURE__*/ jsx_runtime_.jsx("br", {
                                    }),
                                    "звукоизоляция"
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                className: `
            leading-none sm:leading-none md:leading-none 
            text-xs sm:text-md md:text-base lg:text-lg 
            text-slate-100 
            font-light md:font-normal
            ml-16 sm:ml-20 md:ml-28 
            max-w-md
            `,
                                children: "для всех типов домов"
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("img", {
                        style: {
                            overflow: 'hidden',
                            width: '100%'
                        },
                        src: '/images/main.jpg',
                        alt: ''
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: `flex flex-col lg:flex-row rounded-md shadow-md overflow-hidden my-20 mx-4 bg-slate-200`,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: `relative w-full lg:w-1/2 zero:h-44 lg:h-auto lg:max-h-user rounded-md order-last lg:order-first`,
                        children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                            layout: "fill",
                            objectFit: "cover",
                            src: '/images/mainpage/bg1.png',
                            alt: ''
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: `w-full lg:w-1/2 rounded-md sm:p-4`,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                className: 'text-justify font-light sm:bg-white sm:border sm:border-belplit sm:rounded-lg p-8 text-sm',
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                        className: `font-bold text-center text-xl sm:text-3xl py-2`,
                                        children: [
                                            "МДВП ",
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                className: `text-belplit`,
                                                children: "БЕЛТЕРМО"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: 'font-bold',
                                        children: "БЕЛТЕРМО"
                                    }),
                                    " - это мягкие древесно-волокнистые плиты на",
                                    ' ',
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: 'font-bold',
                                        children: "94%"
                                    }),
                                    " состоящие из древесины хвойных пород. Предназначен для создания эффективной ветрозащиты и экологически чистой звуко/теплоизоляции дома.",
                                    /*#__PURE__*/ jsx_runtime_.jsx("br", {
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: 'font-bold',
                                        children: "ЗАЩИЩАЕТ ОТ ВЕТРА, ЗАЩИЩАЕТ ОТ ЖАРЫ, ЗАЩИШАЕТ ОТ ХОЛОДА, СОЗДАЕТ КОМФОРТНЫЙ МИКРОКЛИМАТ, ЗНАЧИТЕЛЬНО СНИЖАЕТ ПРОНИКНОВЕНИЕ ШУМА, ЭКОЛОГИЧНОСТЬ, ОБЕСПЕЧИВАЕТ ПОЖАРНУЮ БЕЗОПАСНОСТЬ, ЛЕГКО МОНТИРУЕТСЯ В ДОМЕ"
                                    }),
                                    ", с применением материала БЕЛТЕРМО – стены \xabдышат\xbb, мансарда не перегревается, нет сквозняков, а комнаты изолированы от шума. БЕЛТЕРМО – это материал для всех, кто заботится о здоровье и хочет жить с комфортом!"
                                ]
                            }),
                            ' '
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: `flex justify-between items-center mx-4`,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                        className: `text-left text-xl sm:text-3xl font-bold`,
                        children: [
                            "Применение ",
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: `text-belplit`,
                                children: "БЕЛТЕРМО"
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                        href: `/info/objects`,
                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            className: `text-right whitespace-nowrap bg-belplit bg-opacity-75 rounded-md p-2 shadow-md text-white`,
                            children: `другие объекты`
                        })
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(GridImages, {
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                className: `text-left text-xl sm:text-3xl font-bold mt-20 mx-4`,
                children: [
                    "Преимущества ",
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        style: {
                            color: '#38a000'
                        },
                        children: "БЕЛТЕРМО"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: `flex flex-col mx-4`,
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: `rounded-md sm:shadow-md sm:p-10 my-5 bg-slate-200`,
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: `rounded-md bg-white p-10 cursor-default`,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                className: `font-bold text-lg`,
                                children: "Простота монтажа"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                className: `font-light text-md leading-tight ml-2`,
                                children: "Удобный формат плит (прямая кромка/шип-паз/ступень) и экологичность материала позволяют производить монтаж вручную без использования защитных средств. Плиты плотно стыкуются и при необходимости легко нарезаются до нужного размера."
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: `bg-slate-300`,
                                style: {
                                    height: '1px'
                                }
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                className: `font-bold text-lg`,
                                children: "Защита от ветра"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                className: `font-light text-md leading-tight ml-2`,
                                children: "Высокое сопротивление продуванию потокам воздуха (50 - 100 (кПа*с)/м\xb3) обеспечивает надёжную защиту от ветра."
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: `bg-slate-300`,
                                style: {
                                    height: '1px'
                                }
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                className: `font-bold text-lg`,
                                children: "Отличная звукоизоляция"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                className: `font-light text-md leading-tight ml-2`,
                                children: "Высокая плотность (110-200 кг/м\xb3) и однородность защищают от ударного шума внутри дома (Rw=23-27 Дб), а высокая пористость позволяет поглощать шум снаружи (άw=0,60-0,95)."
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: `bg-slate-300`,
                                style: {
                                    height: '1px'
                                }
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                className: `font-bold text-lg`,
                                children: "Пожарная безопасность"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                className: `font-light text-md leading-tight ml-2`,
                                children: "Инертность горения посредством обугливания не распространяет огонь (огнестойкость \"E\" (еврокласс по EN 13501-1)."
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: `bg-slate-300`,
                                style: {
                                    height: '1px'
                                }
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                className: `font-bold text-lg`,
                                children: "Комфортный микроклимат"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                className: `font-light text-md leading-tight ml-2`,
                                children: "Способность поглощать и отдавать атмосферную влагу (Sd=0,06-0,72 м) позволяет плитам \xabдышать\xbb, не теряя при этом своих технических характеристик, обеспечивая оптимальную влажность и предотвращая образование плесени или грибка на стенах и потолке."
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: `bg-slate-300`,
                                style: {
                                    height: '1px'
                                }
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                className: `font-bold text-lg`,
                                children: "Защита от холода"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                className: `font-light text-md leading-tight ml-2`,
                                children: "Низкая теплопроводность (λD= 0,038-0,041 Вт/м*К) не позволяет теплу выходить наружу, а холоду - проникать внутрь."
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: `bg-slate-300`,
                                style: {
                                    height: '1px'
                                }
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                className: `font-bold text-lg`,
                                children: "Защита от жары"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                className: `font-light text-md leading-tight ml-2`,
                                children: "Благодаря высокому значению теплоемкости (с=2100 Дж/(кг*К) в доме будет прохладно даже в жаркие дни, что позволяет сэкономить на использовании кондиционера."
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: `bg-slate-300`,
                                style: {
                                    height: '1px'
                                }
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                className: `font-bold text-lg`,
                                children: "Экологичность"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                className: `font-light text-md leading-tight ml-2`,
                                children: "Наличие в составе только натуральной древесины (сосны) и экологически чистых связующих компонентов (смолы на полиуретановой основе MDI 4%) обеспечивает абсолютную безопасность для человека и окружающей среды."
                            })
                        ]
                    })
                })
            })
        ]
    }));
};

;// CONCATENATED MODULE: ./components/complicated/Modal/Modal.js

// react



function Modal({ body =/*#__PURE__*/ external_react_default().createElement('div', {
}, '<BODY>') , header =/*#__PURE__*/ external_react_default().createElement('div', {
}, '<HEADER>') , ...props }) {
    const isOpen = props.setOpen;
    // let [isOpen, setIsOpen] = useState(props.setOpen);
    function closeModal() {
        props.setClose();
    }
    function openModal() {
        setIsOpen(true);
    }
    return(/*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Transition, {
            appear: true,
            show: isOpen,
            as: external_react_.Fragment,
            children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Dialog, {
                as: "div",
                className: `fixed inset-0 h-screen z-10 overflow-y-auto bg-slate-500 bg-opacity-50`,
                onClose: closeModal,
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "min-h-screen px-4 text-center ",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(react_.Transition.Child, {
                            as: external_react_.Fragment,
                            enter: "ease-out duration-300",
                            enterFrom: "opacity-0",
                            enterTo: "opacity-100",
                            leave: "ease-in duration-200",
                            leaveFrom: "opacity-100",
                            leaveTo: "opacity-0",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Dialog.Overlay, {
                                className: "fixed inset-0"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: "inline-block h-screen align-middle",
                            "aria-hidden": "true",
                            children: "​"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(react_.Transition.Child, {
                            as: external_react_.Fragment,
                            enter: "ease-out duration-300",
                            enterFrom: "opacity-0 scale-95",
                            enterTo: "opacity-100 scale-100",
                            leave: "ease-in duration-200",
                            leaveFrom: "opacity-100 scale-100",
                            leaveTo: "opacity-0 scale-95",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(react_.Dialog.Title, {
                                        as: "h3",
                                        className: "text-lg font-medium leading-6 text-gray-900",
                                        children: header
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "mt-2",
                                        children: body
                                    }),
                                    props.submit && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "mt-4",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                            type: "button",
                                            className: "inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500",
                                            onClick: closeModal,
                                            children: props.submit
                                        })
                                    })
                                ]
                            })
                        })
                    ]
                })
            })
        })
    }));
};

;// CONCATENATED MODULE: ./components/complicated/Modal/ModalItems.js



const ModalItems_Header = ({ data  })=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "w-96 ",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h2", {
            className: "flex items-center",
            children: [
                data.status === 'orderonopen' && /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                    children: [
                        "\xa0",
                        data.header,
                        ' ',
                        /*#__PURE__*/ jsx_runtime_.jsx(Svg_Icons.Close, {
                            extraClasses: `absolute m-2 top-0 right-0 w-6 h-6 hover:scale-110 hover:text-red-700 transition-all transition-duration-1000 self-end cursor-pointer`,
                            onClick: ()=>data.setClose()
                        })
                    ]
                }),
                data.status === 'loading' && /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
                            className: "animate-spin -ml-1 mr-3 h-5 w-5 text-black",
                            xmlns: "http://www.w3.org/2000/svg",
                            fill: "none",
                            viewBox: "0 0 24 24",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("circle", {
                                    className: "opacity-25",
                                    cx: "12",
                                    cy: "12",
                                    r: "10",
                                    stroke: "currentColor",
                                    strokeWidth: "4"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                    className: "opacity-75",
                                    fill: "currentColor",
                                    d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                })
                            ]
                        }),
                        "\xa0Идет обработка запроса"
                    ]
                }),
                data.status === 'success' && /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                            className: "text-green-400 -ml-1 mr-3 h-5 w-5",
                            "data-todo-x-description": "Heroicon name: outline/check-circle",
                            xmlns: "http://www.w3.org/2000/svg",
                            fill: "none",
                            viewBox: "0 0 24 24",
                            stroke: "currentColor",
                            "aria-hidden": "true",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeWidth: "2",
                                d: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                            })
                        }),
                        "\xa0Успешно"
                    ]
                }),
                data.status === 'error' && /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                            className: "h-5 w-5 text-red-400",
                            "data-todo-x-description": "Heroicon name: solid/x-circle",
                            xmlns: "http://www.w3.org/2000/svg",
                            viewBox: "0 0 20 20",
                            fill: "currentColor",
                            "aria-hidden": "true",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                fillRule: "evenodd",
                                d: "M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z",
                                clipRule: "evenodd"
                            })
                        }),
                        "\xa0Ошибка"
                    ]
                })
            ]
        })
    }));
};
const Body = ({ data  })=>{
    let colors = {
    };
    switch(data.status){
        case 'success':
            colors = {
                header: 'text-green-700',
                body: 'text-green-700'
            };
            break;
        case 'error':
            colors = {
                header: 'text-red-700',
                body: 'text-red-700'
            };
            break;
        default:
            colors = {
                header: 'text-black',
                body: 'text-black'
            };
            break;
    }
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "ml-3",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h3", {
                className: "text-base font-medium flex items-center",
                children: [
                    data.status === 'loading' && /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
                                className: `animate-spin -ml-6 mr-1 h-5 w-5 text-black`,
                                xmlns: "http://www.w3.org/2000/svg",
                                fill: "none",
                                viewBox: "0 0 24 24",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("circle", {
                                        className: "opacity-25",
                                        cx: "12",
                                        cy: "12",
                                        r: "10",
                                        stroke: "currentColor",
                                        strokeWidth: "4"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                        className: "opacity-75",
                                        fill: "currentColor",
                                        d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: `${colors.header}`,
                                children: "Обработка запроса"
                            })
                        ]
                    }),
                    data.status === 'success' && /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                className: `${colors.header} mr-1 -ml-6  h-5 w-5`,
                                "data-todo-x-description": "Heroicon name: outline/check-circle",
                                xmlns: "http://www.w3.org/2000/svg",
                                fill: "none",
                                viewBox: "0 0 24 24",
                                stroke: "currentColor",
                                "aria-hidden": "true",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: "2",
                                    d: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: `${colors.header}`,
                                children: "Успешно"
                            })
                        ]
                    }),
                    data.status === 'error' && /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                className: `${colors.header} h-5 w-5 -ml-6 mr-1`,
                                "data-todo-x-description": "Heroicon name: solid/x-circle",
                                xmlns: "http://www.w3.org/2000/svg",
                                viewBox: "0 0 20 20",
                                fill: "currentColor",
                                "aria-hidden": "true",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                    fillRule: "evenodd",
                                    d: "M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z",
                                    clipRule: "evenodd"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: `${colors.header}`,
                                children: "Ошибка"
                            })
                        ]
                    })
                ]
            }),
            data.description.length > 0 && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: `${colors.body} mt-2 text-sm text-red-700`,
                children: /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                    className: "space-y-1",
                    children: data.description.map((item, index)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                            children: item
                        }, index + '_' + item)
                    )
                })
            })
        ]
    }));
};
const ModalItems = {
    Header: ModalItems_Header,
    Body
};
/* harmony default export */ const Modal_ModalItems = (ModalItems);

;// CONCATENATED MODULE: ./components/complicated/Radio/Radio.js



function Radio({ label ='<TITLE>' , ...props }) {
    const radioItems = props.radioItems || new Array(1);
    const { 0: selected , 1: setSelected  } = (0,external_react_.useState)(radioItems[0].key);
    const onChange = props.onChange(selected) || undefined;
    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "px-4 py-2 w-full",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "w-full",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.RadioGroup, {
                value: selected,
                onChange: setSelected,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(react_.RadioGroup.Label, {
                        className: "sr-only",
                        children: label
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "space-y-2",
                        children: radioItems.map((radioItem)=>/*#__PURE__*/ jsx_runtime_.jsx(react_.RadioGroup.Option, {
                                value: radioItem.key,
                                className: ({ active , checked  })=>`${active ? '' : ''}
                  ${checked ? 'bg-belplit bg-opacity-75 text-white' : 'bg-white'}
                    relative rounded-lg shadow-md px-5 py-1 cursor-pointer flex focus:outline-none`
                                ,
                                children: ({ active , checked  })=>/*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "flex items-center justify-between w-full",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "flex items-center",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "text-sm",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx(react_.RadioGroup.Description, {
                                                            as: "span",
                                                            className: `inline ${checked ? 'text-sky-100' : 'text-gray-500'}`,
                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                                children: [
                                                                    radioItem.bar,
                                                                    "/",
                                                                    radioItem.square
                                                                ]
                                                            })
                                                        })
                                                    })
                                                }),
                                                checked && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "flex-shrink-0 text-white",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx(CheckIcon, {
                                                        className: "w-6 h-6"
                                                    })
                                                })
                                            ]
                                        })
                                    })
                            }, radioItem.key)
                        )
                    })
                ]
            })
        })
    }));
};
function CheckIcon(props) {
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
        viewBox: "0 0 24 24",
        fill: "none",
        ...props,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("circle", {
                cx: 12,
                cy: 12,
                r: 12,
                fill: "#fff",
                opacity: "0.2"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M7 13l3 3 7-7",
                stroke: "#fff",
                strokeWidth: 1.5,
                strokeLinecap: "round",
                strokeLinejoin: "round"
            })
        ]
    }));
}

;// CONCATENATED MODULE: ./components/complicated/Disclosure/Disclosure.js



function MyDisclosure(props) {
    const { data  } = props;
    return(/*#__PURE__*/ _jsx("div", {
        className: "px-4",
        children: /*#__PURE__*/ _jsx("div", {
            className: "w-full p-2 rounded-2xl",
            children: data && data.map((item1, index)=>{
                var ref;
                if ((ref = item1[0]) === null || ref === void 0 ? void 0 : ref[0]) return(/*#__PURE__*/ _jsx(Disclosure, {
                    children: ({ open  })=>/*#__PURE__*/ _jsxs(_Fragment, {
                            children: [
                                /*#__PURE__*/ _jsxs(Disclosure.Button, {
                                    className: "my-1 flex shadow-md justify-between rounded-md w-full text-sm font-medium text-left overflow-hidden",
                                    children: [
                                        /*#__PURE__*/ _jsx("span", {
                                            className: "bg-white text-lg hover:bg-belplit hover:bg-opacity-10 w-full px-4 py-2",
                                            children: item1[1]
                                        }),
                                        /*#__PURE__*/ _jsx("div", {
                                            className: "bg-belplit bg-opacity-75 h-full",
                                            children: /*#__PURE__*/ _jsx(Icons.ChevronUp, {
                                                className: `${open ? 'transform rotate-180' : ''} w-11 text-white`
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ _jsx(Disclosure.Panel, {
                                    className: `${open ? 'max-h-0' : 'max-h-96'} transition-all px-4 pt-4 pb-2 text-sm text-gray-500`,
                                    children: item1[0].map((item)=>/*#__PURE__*/ _jsx("p", {
                                            children: `> ${item}`
                                        }, Math.random().toString(36))
                                    )
                                })
                            ]
                        })
                }, `Disclosure${index}`));
            })
        })
    }));
};

;// CONCATENATED MODULE: ./components/complicated/ProductList/ProductList.js



function ProductList({ listItems  }) {
    const [hover, setHover] = external_react_default().useState(false);
    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: `px-4 w-full py-2`,
        children: listItems && listItems.map((item, index)=>/*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                href: `/catalog/${item.id}`,
                passHref: true,
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: `cursor-pointer flex hover:text-belplit border-b py-1`,
                    onMouseEnter: ()=>setHover({
                            [index]: true
                        })
                    ,
                    onMouseLeave: ()=>setHover({
                            [index]: false
                        })
                    ,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: `trans-menu-item transition-duration-500 ${!hover[index] ? 'w-1 opacity-0' : 'w-3 opacity-100'}`,
                            children: '>'
                        }),
                        "\xa0",
                        item.title
                    ]
                })
            }, `PR${index}`)
        )
    }));
};

;// CONCATENATED MODULE: ./components/complicated/index.js
















/***/ }),

/***/ 4785:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "R": () => (/* reexport */ products_namespaceObject)
});

// UNUSED EXPORTS: product

;// CONCATENATED MODULE: ./data/products.json
const products_namespaceObject = JSON.parse('[{"id":0,"name":"top","title":"Белтермо Top","sizes":[["2490х590х20мм (шип-паз) / 1,47 кв.м"],["2490х590х25мм (шип-паз) / 1,47 кв.м"],["2490х590х28мм (шип-паз) / 1,47 кв.м"],["2480х580х35мм (шип-паз) / 1,47 кв.м"]],"prices":{"bar":[690,823,963,1122],"square":[470,560,655,780]},"desc":{"consists":["Натуральные волокна из древесины хвойных пород, смола на полиуретановой основе MDI (4%), парафиновая эмульсия (1,5%)."],"options":["Паропроницаемая ветрозащита","Перекрестное утепление и звукоизоляция стен под сайдинг, блок-хаус, кедрал и.т.д.","Звукоизоляция СИП домов","Утепление и звукоизоляция скатной кровли под стропила","Утепление каркасных и кирпичных/пеноблок стен под штукатурный фасад (толщина от 35 мм)","Звукоизоляция каркасных перегородок","Деревянных перекрытий (потолок)","Тепло и шумоизоляция бетонных перекрытий под стяжку","Звукоизоляция многоквартирных домов (квартиры)."],"advantages":["Влагозащитная плита","Исключает перегрев мансарды","Снижает шум от металлочерепицы (эффект барабана)","Низкая теплопроводность и высокая теплоемкость","Исключает сквозняки","Регулирует влажность в помещении","Простота монтажа","Теплопроводность не снижается при увлажнении","Отличная паропроницаемость","Экологически чистый материал","Не нужны ветрозащитные пленки на фасаде"],"functions":["Тепло и звукоизоляция","Перекрытие «мостиков» холода","Ветронепроницаемый контур здания","Выведение пара изнутри помещения наружу","Влагорегуляция."]},"files":{"techDesc":["top-description.jpg",[702,567]],"avatarSM":"top.jpg","product":"top.jpg"}},{"id":1,"name":"kombi","title":"Белтермо Kombi","sizes":[["1200х600х40мм (прямая) / 0,72 кв.м"],["1200х600х60мм (прямая) / 0,72 кв.м"],["1200х600х80мм (прямая) / 0,72 кв.м"],["1200х600х100мм (прямая) / 0,72 кв.м"]],"prices":{"bar":[360,534,696,850],"square":[500,742,967,1181]},"desc":{"consists":["Натуральные волокна из древесины хвойных пород, смола на полиуретановой основе MDI (4%), парафиновая эмульсия (1,5%)."],"options":["Тепло и звукоизоляция внутренних перегородок","Перекрестное утепление фасадов, мансард и чердачных перекрытий."],"advantages":["Отличная звукоизоляция + комфортный микроклимат (регулирует влажность) внутри помещения","Влагостойкая плита","Оптимальное утепление","Обладают плотной однородной структурой","Экологически чистые и безопасны для здоровья."],"functions":["Тепло и звукоизоляция","Влагорегуляция."]},"files":{"techDesc":["kombi-description.jpg",[770,575]],"avatarSM":"kombi.jpg","product":"kombi.jpg"}},{"id":2,"name":"floor","title":"Белтермо Floor","sizes":[["2480х580x40мм (шип-паз) / 1,44 кв.м"],["1230х580x40мм (шип-паз) / 0,71 кв.м"]],"prices":{"bar":[1066,529],"square":[741,741]},"desc":{"consists":["Натуральные волокна из древесины хвойных пород, смола на полиуретановой основе MDI (4%), парафиновая эмульсия (1,5%)."],"options":["Тепло и шумоизоляция бетонных полов под стяжку","Внутреннее утепление и звукоизоляция наружных стен","звукоизоляция каркасных перегородок."],"advantages":["Высокие теплоизолирующие свойства","Прекрасно защищают от воздушного и ударного шума","Тепло-звукоизоляционные плиты Floor диффузионно открыты и регулируют уровень влажности в помещении","Простой и быстрый монтаж за счет точных размеров."],"functions":["Тепло и звукоизоляция","Перекрытие «мостиков» холода","Ветронепроницаемый контур здания","Влагорегуляция."]},"files":{"techDesc":["floor-description.jpg",[759,510]],"avatarSM":"floor.jpg","product":"floor.jpg"}},{"id":3,"name":"ultra","title":"Белтермо Ultra","sizes":[["2480х580x40мм (шип-паз) / 1,44 кв.м"],["2480х580x50мм (шип-паз) / 1,44 кв.м"],["1880х580x50мм (шип-паз) / 1,09 кв.м"],["1872х572x100мм (шип-паз) / 1,07 кв.м"]],"prices":{"bar":[1181,1480,1106,2144],"square":[821,1029,1015,2002]},"desc":{"consists":["Натуральные волокна из древесины хвойных пород, смола на полиуретановой основе MDI (4%), парафиновая эмульсия (1,5%)."],"options":["Ветрозащита","Перекрестное утепление и звукоизоляция стен под сайдинг, блок-хаус, кедрал и.т.д.","Звукоизоляция СИП домов","Утепление каркасных и кирпичных/пеноблок стен под штукатурный фасад (толщина от 40 мм).","Звукоизоляция каркасных перегородок, деревянных перекрытий (потолок)","Тепло и шумоизоляция бетонных перекрытий под стяжку","Звукоизоляция многоквартирных домов (квартиры)","Утепление и звукоизоляция скатной кровли под стропила."],"advantages":["Влагозащитная плита","Исключает перегрев мансарды","Снижает шум от металлочерепицы (эффект барабана)","Звукоизолирует межкомнатные перегородки","Низкая теплопроводность и высокая теплоемкость","Исключает сквозняки","Регулирует влажность в помещении","Простота монтажа","Теплопроводность не снижается при увлажнении","Отличная паропроницаемость","Экологически чистый материал","Не нужны ветрозащитные пленки на фасаде"],"functions":["Тепло и звукоизоляция","Перекрытие «мостиков» холода","Ветронепроницаемый контур здания","Выведение пара изнутри помещения наружу","Влагорегуляция."]},"files":{"techDesc":["ultra-description.jpg",[699,541]],"avatarSM":"ultra.jpg","product":"ultra.jpg"}},{"id":4,"name":"instal","title":"Белтермо Instal","sizes":[["1250х580x50мм (прямая) / 0,71"]],"prices":{"bar":[635],"square":[876]},"desc":{"consists":["Натуральные волокна из древесины хвойных пород, смола на полиуретановой основе MDI (4%), парафиновая эмульсия (1,5%)."],"options":["Внутреннее утепление и звукоизоляция наружных стен","Звукоизоляция каркасных перегородок."],"advantages":["Теплозвукоизоляционные плиты instal обладают высокой прочностью на сжатие","Обеспечивает оптимальную звуко и теплоизоляцию","Теплозвукоизоляционные плиты Instal диффузионно открытый материал, регулирует уровень влажности в помещении","Класс огнестойкости: Е по DINEN 1350-1","Древесноволокнистые плиты экологически чистые и безопасны для здоровья","Пригодны для вторичной переработки","Просты и удобны в монтаже."],"functions":["Тепло и звукоизоляция","Перекрытие «мостиков» холода","Ветронепроницаемый контур здания","Влагорегуляция."]},"files":{"techDesc":["instal-description.jpg",[699,504]],"avatarSM":"instal.jpg","product":"instal.jpg"}},{"id":5,"name":"multi","title":"Белтермо Multi","sizes":[["1230х580x40 мм (шип-паз) / 0,71"],["1250х600x40 мм (шип-паз) / 0,75"]],"prices":{"bar":[491,490],"square":[688,654]},"desc":{"consists":["Натуральные волокна из древесины хвойных пород, смола на полиуретановой основе MDI (4%), парафиновая эмульсия (1,5%)."],"options":["Ветрозащита, тепло-звукоизоляция","Перекрестное утепление и звукоизоляция стен под сайдинг, блок-хаус, кедрал и.т.д.","Звукоизоляция СИП домов","Утепление каркасных и кирпичных/пеноблок стен под штукатурный фасад (толщина от 40 мм)."],"advantages":["Влагостойкая плита","Низкая теплопроводность и высокая теплоемкость","Высокая паропроницаемость","Экологически чистые и безопасны для здоровья","Просты и удобны в монтаже."],"functions":["Тепло и звукоизоляция","Выведение пара изнутри помещения наружу","Влагорегуляция."]},"files":{"techDesc":["multi-description.jpg",[741,468]],"avatarSM":"multi.jpg","product":"multi.jpg"}},{"id":6,"name":"room","title":"Белтермо Room","sizes":[["1900х600х20мм"]],"prices":{"bar":[319],"square":[280]},"desc":{"consists":["Натуральные волокна из древесины хвойных пород, смола на полиуретановой основе MDI (4%), парафиновая эмульсия (1,5%)."],"options":["> Тепло и звукоизоляция внутренних перегородок","> Звукоизоляция дверей."],"advantages":["Теплозвукоизоляционные плиты Room имеют оптимальную теплоизоляцию","Плиты Беплит Room диффузионно открыты и регулируют уровень влажности в помещении","Защита от перегрева летом (высокая теплоаккумулирующая способность плит)","Защита дома от потери тепла зимой и сокращение затрат на обогрев здания (низкая теплопроводность плит)","Класс огнестойкости: Е по DINEN 1350-1","Отличная звукоизоляция от внешних и ударных шумов","Экологически чистые и безопасны для здоровья","Простота и удобство монтажа","Теплозвукоизоляционные плиты Room пригодны для вторичной переработки."],"functions":["Тепло и звукоизоляция","Перекрытие «мостиков» холода","Ветронепроницаемый контур здания","Влагорегуляция."]},"files":{"techDesc":["top-description.jpg",[702,567]],"avatarSM":"room.jpg","product":"room.jpg"}},{"id":7,"name":"len","title":"Белплит лён","sizes":[["1000х600x50 мм 8 плит / 4,8 кв.м"],["1000х600x100 мм 4 плит / 2,4 кв.м"]],"prices":{"bar":[1434,1434],"square":[299,598]},"desc":{"description":["Теплоизоляционные плиты Белплит лён акустик изготавливаются из натурального льноволокна (85%) и связующего полиэфирного волокна (15%), равномерно распределенного по всему объему плиты.","Благодаря уникальному расположению волокон и однородности продукции, форма и размер плит сохраняются в процессе всего срока эксплуатации, как в горизонтальном, так и в вертикальном положении","Лён — уникальное растение. Ни один другой материал не может «дышать» так же, как лён. Кроме того, он хорошо поглощает влагу и в то же время влажный лен быстро сохнет.","Лён является прекрасным теплоизоляционным материалом. Заряды статического электричества не образовываются в продуктах из льняных волокон. Также лён обладает антисептическими свойствами и является гипоаллергенным материалом"],"consists":["льноволокно - 85%","полиэфирные волокна - 15%"],"options":["Плиты Белплит лён акустик предназначены для применения в качестве ненагружаемого теплоизоляционного слоя в конструкциях легких покрытий, мансардных помещений, перегородок, междуэтажных перекрытий, стен малоэтажных строений, включая вертикальные и наклонные стены в мансардах."],"advantages":["сохраняет теплоизоляционные свойства при увлажнении","сохраняет деревянные элементы дома в сухом состоянии","без усадки в течении 70 лет","грызуны и насекомые не заводятся благодаря упругости материала и расположению волокон","звукоизоляция на 30% выше чем у минеральной ваты","отличается повышенной теплоёмкостью - ваш дом дольше сохранит тепло и останется прохладным летом","0% фенольных смол - 100% экологически чистый продукт","гипоаллергенный","сдерживает развитие бактерий, не гниёт","формирует полезный микроклимат в помещении","может применяться без пароизоляции в сухих помещениях","идеально подходит для теплоизоляции бани."],"functions":[],"installation":["Для надежной стыковки плит между собой рекомендуется, чтобы ширина плит превышала расстояние между прогонами на 1 см. Утеплитель из льна не должен закрывать вентиляционные отверстия и не должен контактировать с источниками тепла. Для резки утеплителя удобно использовать ленточную или циркулярную пилу."]},"files":{"techDesc":["len-description.png",[819,321]],"avatarSM":"len.jpg","product":"len.jpg"}}]');
;// CONCATENATED MODULE: ./configs/products.js
const product = {
    title: '',
    sizes: [],
    prices: {
        bar: 0,
        square: 0
    },
    desc: {
        consists: [],
        options: [],
        advantages: [],
        functions: []
    },
    files: []
};



/***/ })

};
;