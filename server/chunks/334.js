"use strict";
exports.id = 334;
exports.ids = [334];
exports.modules = {

/***/ 2969:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "x": () => (/* reexport */ Text)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./components/lib/Text.js

const _m = 0;
const _p = 0;
const _ta = 'left';
const _tc = 'current';
const _ts = 'md';
const _tw = 'light';
const _va = 'middle';
const TEXT = ({ va =_va , ta =_ta , ts =_ts , tc =_tc , tw =_tw , mx =_m , my =_m , px =_p , py =_p  })=>`text-${ta} text-${ts} text-${tc} font-${tw} mx-${mx} my-${my} px-${px} py-${py} align-${va}`
;
function createMarkup(data) {
    return {
        __html: data
    };
}
function Text({ children , va , ta , ts , tc , tw , mx , my , px , py , extraClasses , onClick  }) {
    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: `${TEXT({
            ta,
            ts,
            tc,
            tw,
            va,
            mx,
            my,
            px,
            py
        })} ${extraClasses}`,
        onClick: onClick || null,
        children: children && typeof children !== 'string' ? /*#__PURE__*/ jsx_runtime_.jsx("p", {
            dangerouslySetInnerHTML: createMarkup(children)
        }) : children
    }));
};

;// CONCATENATED MODULE: ./components/lib/index.js



/***/ }),

/***/ 41:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "l": () => (/* binding */ app)
/* harmony export */ });
const app = {
    title: 'БЕЛТЕРМО',
    copyright: [
        '\xa9 2021 Сайт создан с помощью <a href="https://roboweb.site/"><strong>RoboWeb</strong></a>'
    ],
    pages: {
        main: {
            title: [
                '<p style="color: ##38a000;" class="font-bold">БЕЛТЕРМО</p> <p class="ml-2 border-l text-white">Экологичный утеплитель и звукоизоляция для всех типов домов</p>'
            ]
        },
        cooperation: {
            title: 'Сотрудничество',
            content: {
                1: [
                    'По вопросам сотрудничества или приобретения материала оптом, оставьте заявку на почте <a href="mailto:belplit-russia@mail.ru"><strong>belplit-russia@mail.ru</strong></a> или свяжитесь с нами', 
                ]
            }
        },
        catalog: {
            title: 'Каталог'
        },
        info: {
            sertificates: {
                title: 'Сертификаты'
            },
            objects: {
                title: 'Объекты'
            }
        }
    },
    contacts: {
        title: 'Контакты',
        meta: {
            field1: 'Свяжитесь с нами'
        },
        phone1: '8 (800) 533-78-81',
        phone2: '8 (925) 013-56-02',
        email: 'belplit-russia@mail.ru',
        address1: {
            title: 'Офис',
            value: 'Россия, Московская область, Одинцово, улица Молодежная, 46'
        },
        address2: {
            title: 'Склад №1',
            value: 'Москва, пос. Мосрентген, проектируемый проезд 134, вл. 4'
        },
        address3: {
            title: 'Склад №2',
            value: 'Московская область, Рузский городской округ, д. Берёзкино 69'
        }
    },
    workingHoars: {
        title: 'Время работы',
        value: [
            'Ежедневно: 8:00–20:00'
        ]
    },
    address: 'Россия, Московская область, Одинцово, улица Молодежная, 46'
};


/***/ })

};
;