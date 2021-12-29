"use strict";
(() => {
var exports = {};
exports.id = 287;
exports.ids = [287];
exports.modules = {

/***/ 5142:
/***/ ((module) => {

module.exports = require("dotenv");

/***/ }),

/***/ 5184:
/***/ ((module) => {

module.exports = require("nodemailer");

/***/ }),

/***/ 65:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(req, res) {
    (__webpack_require__(5142).config)();
    let nodemailer = __webpack_require__(5184);
    const transporter = nodemailer.createTransport({
        port: parseInt(process.env.EMAIL_PORT),
        host: `${process.env.EMAIL_HOST}`,
        auth: {
            user: `${process.env.EMAIL_SENDER}`,
            pass: `${process.env.EMAIL_SENDER_PASS}`
        },
        secure: true
    });
    const mailData = {
        from: `${process.env.EMAIL_SENDER}`,
        to: `${process.env.EMAIL_SENDER}`,
        subject: 'Новое обращение',
        text: `${req.body.body}`,
        html: `<p>${req.body.body}</p>`
    };
    transporter.sendMail(mailData, function(err, info) {
        if (err) res.status(500);
        else res.status(200);
    });
    res.json({
        ok: true
    });
};


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(65));
module.exports = __webpack_exports__;

})();