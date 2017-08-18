exports.id = 0;
exports.modules = {

/***/ "./server/server.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__("express");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);

var app = __WEBPACK_IMPORTED_MODULE_0_express___default()();
app.get('/api', function (req, res) {
  res.send({
    message: 'I am a server route and can also be hot head!'
  });
});
/* harmony default export */ __webpack_exports__["default"] = (app);

/***/ })

};