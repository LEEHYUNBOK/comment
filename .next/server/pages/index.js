"use strict";
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\react\\gitube\\pages\\index.js";


const Blog = props => {
  const {
    0: name,
    1: setName
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
  const {
    0: email,
    1: setEmail
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');

  const submitData = async e => {
    try {
      console.log('submitdate', e);
      const body = {
        name,
        email
      };
      console.log('submitdate2', e);
      await fetch(`http://localhost:3000/api/push.ts`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
      });
    } catch (error) {
      console.error(error);
    }
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "page",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
        children: "My Blog"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("form", {
        onSubmit: submitData,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
          children: "Signup user"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
          autoFocus: true,
          onChange: e => setName(e.target.value),
          placeholder: "Name",
          type: "text",
          value: name
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
          onChange: e => setEmail(e.target.value),
          placeholder: "Email address",
          type: "text",
          value: email
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
          disabled: !name || !email,
          type: "submit",
          value: "Signup"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 9
      }, undefined), console.log('feed', props), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("main", {
        children: props.users.map(user => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "post",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            children: ["id = ", user.id]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 50,
            columnNumber: 15
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            children: ["name = ", user.name]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 51,
            columnNumber: 15
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            children: ["email = ", user.email]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 52,
            columnNumber: 15
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 53,
            columnNumber: 15
          }, undefined)]
        }, user.id, true, {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 13
        }, undefined))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 23,
    columnNumber: 5
  }, undefined);
};

const getServerSideProps = async () => {
  const res = await fetch('http://localhost:3000/api/users');
  const users = await res.json();
  console.log('post', users);
  return {
    props: {
      users
    }
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Blog);

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQUE7QUFBQSxxQkFERDtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBdkJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQXNDRCxDQXpERDs7QUEyRE8sTUFBTUMsa0JBQWtCLEdBQUcsWUFBWTtBQUM1QyxRQUFNQyxHQUFHLEdBQUcsTUFBTWIsS0FBSyxDQUFDLGlDQUFELENBQXZCO0FBQ0EsUUFBTVEsS0FBSyxHQUFHLE1BQU1LLEdBQUcsQ0FBQ0MsSUFBSixFQUFwQjtBQUNBakIsRUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksTUFBWixFQUFvQlUsS0FBcEI7QUFDQSxTQUFPO0FBQ0xsQixJQUFBQSxLQUFLLEVBQUU7QUFBRWtCLE1BQUFBO0FBQUY7QUFERixHQUFQO0FBR0QsQ0FQTTtBQVNQLGlFQUFlbkIsSUFBZjs7Ozs7Ozs7OztBQ3RFQTs7Ozs7Ozs7OztBQ0FBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5cclxuY29uc3QgQmxvZyA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IFtuYW1lLCBzZXROYW1lXSA9IHVzZVN0YXRlKCcnKVxyXG4gIGNvbnN0IFtlbWFpbCwgc2V0RW1haWxdID0gdXNlU3RhdGUoJycpXHJcblxyXG4gIGNvbnN0IHN1Ym1pdERhdGEgPSBhc3luYyAoZSkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc29sZS5sb2coJ3N1Ym1pdGRhdGUnLCBlKVxyXG4gICAgICBjb25zdCBib2R5ID0geyBuYW1lLCBlbWFpbCB9XHJcbiAgICAgIGNvbnNvbGUubG9nKCdzdWJtaXRkYXRlMicsIGUpXHJcbiAgICAgIGF3YWl0IGZldGNoKGBodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL3B1c2gudHNgLCB7XHJcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgaGVhZGVyczogeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0sXHJcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoYm9keSksXHJcbiAgICAgIH0pXHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKGVycm9yKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFnZVwiPlxyXG4gICAgICAgIDxoMT5NeSBCbG9nPC9oMT5cclxuXHJcbiAgICAgICAgPGZvcm0gb25TdWJtaXQ9e3N1Ym1pdERhdGF9PlxyXG4gICAgICAgICAgPGgxPlNpZ251cCB1c2VyPC9oMT5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICBhdXRvRm9jdXNcclxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXROYW1lKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJOYW1lXCJcclxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICB2YWx1ZT17bmFtZX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRFbWFpbChlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW1haWwgYWRkcmVzc1wiXHJcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgdmFsdWU9e2VtYWlsfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxpbnB1dCBkaXNhYmxlZD17IW5hbWUgfHwgIWVtYWlsfSB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJTaWdudXBcIiAvPlxyXG4gICAgICAgIDwvZm9ybT5cclxuXHJcbiAgICAgICAge2NvbnNvbGUubG9nKCdmZWVkJywgcHJvcHMpfVxyXG5cclxuICAgICAgICA8bWFpbj5cclxuICAgICAgICAgIHtwcm9wcy51c2Vycy5tYXAoKHVzZXIpID0+IChcclxuICAgICAgICAgICAgPGRpdiBrZXk9e3VzZXIuaWR9IGNsYXNzTmFtZT1cInBvc3RcIj5cclxuICAgICAgICAgICAgICA8ZGl2PmlkID0ge3VzZXIuaWR9PC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdj5uYW1lID0ge3VzZXIubmFtZX08L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2PmVtYWlsID0ge3VzZXIuZW1haWx9PC9kaXY+XHJcbiAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9tYWluPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGdldFNlcnZlclNpZGVQcm9wcyA9IGFzeW5jICgpID0+IHtcclxuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS91c2VycycpXHJcbiAgY29uc3QgdXNlcnMgPSBhd2FpdCByZXMuanNvbigpXHJcbiAgY29uc29sZS5sb2coJ3Bvc3QnLCB1c2VycylcclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6IHsgdXNlcnMgfSxcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJsb2dcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIkJsb2ciLCJwcm9wcyIsIm5hbWUiLCJzZXROYW1lIiwiZW1haWwiLCJzZXRFbWFpbCIsInN1Ym1pdERhdGEiLCJlIiwiY29uc29sZSIsImxvZyIsImJvZHkiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJKU09OIiwic3RyaW5naWZ5IiwiZXJyb3IiLCJ0YXJnZXQiLCJ2YWx1ZSIsInVzZXJzIiwibWFwIiwidXNlciIsImlkIiwiZ2V0U2VydmVyU2lkZVByb3BzIiwicmVzIiwianNvbiJdLCJzb3VyY2VSb290IjoiIn0=