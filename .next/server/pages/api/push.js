"use strict";
(() => {
var exports = {};
exports.id = "pages/api/push";
exports.ids = ["pages/api/push"];
exports.modules = {

/***/ "./lib/prisma.js":
/*!***********************!*\
  !*** ./lib/prisma.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ "@prisma/client");
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);

const prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (prisma);

/***/ }),

/***/ "./pages/api/push.ts":
/*!***************************!*\
  !*** ./pages/api/push.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handle)
/* harmony export */ });
/* harmony import */ var _lib_prisma__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/prisma */ "./lib/prisma.js");
 // POST /api/post
// Required fields in body: title, authorEmail
// Optional fields in body: content

async function handle(req, res) {
  const {
    name,
    email
  } = req.body;
  const result = await _lib_prisma__WEBPACK_IMPORTED_MODULE_0__.default.user.create({
    data: {
      name: name,
      email: email
    }
  });
  res.json(result);
}

/***/ }),

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/api/push.ts"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXMvYXBpL3B1c2guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUEsTUFBTUMsTUFBTSxHQUFHLElBQUlELHdEQUFKLEVBQWY7QUFDQSxpRUFBZUMsTUFBZjs7Ozs7Ozs7Ozs7Ozs7O0NDQUE7QUFDQTtBQUNBOztBQUNlLGVBQWVDLE1BQWYsQ0FDYkMsR0FEYSxFQUViQyxHQUZhLEVBR2I7QUFDQSxRQUFNO0FBQUVDLElBQUFBLElBQUY7QUFBUUMsSUFBQUE7QUFBUixNQUFrQkgsR0FBRyxDQUFDSSxJQUE1QjtBQUNBLFFBQU1DLE1BQU0sR0FBRyxNQUFNUCw0REFBQSxDQUFtQjtBQUN0Q1UsSUFBQUEsSUFBSSxFQUFFO0FBQ0pOLE1BQUFBLElBQUksRUFBRUEsSUFERjtBQUVKQyxNQUFBQSxLQUFLLEVBQUVBO0FBRkg7QUFEZ0MsR0FBbkIsQ0FBckI7QUFNQUYsRUFBQUEsR0FBRyxDQUFDUSxJQUFKLENBQVNKLE1BQVQ7QUFDRDs7Ozs7Ozs7OztBQ2xCRCIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2xpYi9wcmlzbWEuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvYXBpL3B1c2gudHMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQHByaXNtYS9jbGllbnRcIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQcmlzbWFDbGllbnQgfSBmcm9tICdAcHJpc21hL2NsaWVudCdcclxuXHJcbmNvbnN0IHByaXNtYSA9IG5ldyBQcmlzbWFDbGllbnQoKVxyXG5leHBvcnQgZGVmYXVsdCBwcmlzbWFcclxuIiwiaW1wb3J0IHR5cGUgeyBOZXh0QXBpUmVxdWVzdCwgTmV4dEFwaVJlc3BvbnNlIH0gZnJvbSAnbmV4dCdcclxuaW1wb3J0IHByaXNtYSBmcm9tICcuLi8uLi9saWIvcHJpc21hJ1xyXG5cclxuLy8gUE9TVCAvYXBpL3Bvc3RcclxuLy8gUmVxdWlyZWQgZmllbGRzIGluIGJvZHk6IHRpdGxlLCBhdXRob3JFbWFpbFxyXG4vLyBPcHRpb25hbCBmaWVsZHMgaW4gYm9keTogY29udGVudFxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGUoXHJcbiAgcmVxOiBOZXh0QXBpUmVxdWVzdCxcclxuICByZXM6IE5leHRBcGlSZXNwb25zZVxyXG4pIHtcclxuICBjb25zdCB7IG5hbWUsIGVtYWlsIH0gPSByZXEuYm9keVxyXG4gIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHByaXNtYS51c2VyLmNyZWF0ZSh7XHJcbiAgICBkYXRhOiB7XHJcbiAgICAgIG5hbWU6IG5hbWUsXHJcbiAgICAgIGVtYWlsOiBlbWFpbCxcclxuICAgIH0sXHJcbiAgfSlcclxuICByZXMuanNvbihyZXN1bHQpXHJcbn1cclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHByaXNtYS9jbGllbnRcIik7Il0sIm5hbWVzIjpbIlByaXNtYUNsaWVudCIsInByaXNtYSIsImhhbmRsZSIsInJlcSIsInJlcyIsIm5hbWUiLCJlbWFpbCIsImJvZHkiLCJyZXN1bHQiLCJ1c2VyIiwiY3JlYXRlIiwiZGF0YSIsImpzb24iXSwic291cmNlUm9vdCI6IiJ9