"use strict";
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__N_SSP": function() { return /* binding */ __N_SSP; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_react_gitube_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_react_gitube_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(C_react_gitube_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var C_react_gitube_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* module decorator */ module = __webpack_require__.hmd(module);




var _jsxFileName = "C:\\react\\gitube\\pages\\index.js",
    _this = undefined,
    _s = $RefreshSig$();



var Blog = function Blog(props) {
  _s();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(''),
      name = _useState[0],
      setName = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(''),
      email = _useState2[0],
      setEmail = _useState2[1];

  var submitData = /*#__PURE__*/function () {
    var _ref = (0,C_react_gitube_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/C_react_gitube_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(e) {
      var body;
      return C_react_gitube_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              console.log('submitdate', e);
              body = {
                name: name,
                email: email
              };
              _context.next = 5;
              return fetch("http://localhost:3000/api/user", {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(body)
              });

            case 5:
              _context.next = 10;
              break;

            case 7:
              _context.prev = 7;
              _context.t0 = _context["catch"](0);
              console.error(_context.t0);

            case 10:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 7]]);
    }));

    return function submitData(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "page",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
        children: "My Blog"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("form", {
        onSubmit: submitData,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
          children: "Signup user"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
          autoFocus: true,
          onChange: function onChange(e) {
            return setName(e.target.value);
          },
          placeholder: "Name",
          type: "text",
          value: name
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
          onChange: function onChange(e) {
            return setEmail(e.target.value);
          },
          placeholder: "Email address",
          type: "text",
          value: email
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
          disabled: !name || !email,
          type: "submit",
          value: "Signup"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
        children: email
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 9
      }, _this), console.log('feed', props), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("main", {
        children: props.users.map(function (user) {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "post",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              children: ["id = ", user.id]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 49,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              children: ["name = ", user.name]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 50,
              columnNumber: 15
            }, _this)]
          }, user.id, true, {
            fileName: _jsxFileName,
            lineNumber: 48,
            columnNumber: 13
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 22,
    columnNumber: 5
  }, _this);
};

_s(Blog, "+yYzMrF0jCuADaceubK5n/EGEjo=");

_c = Blog;
var __N_SSP = true;
/* harmony default export */ __webpack_exports__["default"] = (Blog);

var _c;

$RefreshReg$(_c, "Blog");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMDg2NTI2N2U2YWVhNjc2MWU3MDMuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUVBLElBQU1DLElBQUksR0FBRyxTQUFQQSxJQUFPLENBQUNDLEtBQUQsRUFBVztBQUFBOztBQUFBLGtCQUNFRiwrQ0FBUSxDQUFDLEVBQUQsQ0FEVjtBQUFBLE1BQ2ZHLElBRGU7QUFBQSxNQUNUQyxPQURTOztBQUFBLG1CQUVJSiwrQ0FBUSxDQUFDLEVBQUQsQ0FGWjtBQUFBLE1BRWZLLEtBRmU7QUFBQSxNQUVSQyxRQUZROztBQUl0QixNQUFNQyxVQUFVO0FBQUEsK09BQUcsaUJBQU9DLENBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFZkMsY0FBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksWUFBWixFQUEwQkYsQ0FBMUI7QUFDTUcsY0FBQUEsSUFIUyxHQUdGO0FBQUVSLGdCQUFBQSxJQUFJLEVBQUpBLElBQUY7QUFBUUUsZ0JBQUFBLEtBQUssRUFBTEE7QUFBUixlQUhFO0FBQUE7QUFBQSxxQkFJVE8sS0FBSyxtQ0FBbUM7QUFDNUNDLGdCQUFBQSxNQUFNLEVBQUUsTUFEb0M7QUFFNUNDLGdCQUFBQSxPQUFPLEVBQUU7QUFBRSxrQ0FBZ0I7QUFBbEIsaUJBRm1DO0FBRzVDSCxnQkFBQUEsSUFBSSxFQUFFSSxJQUFJLENBQUNDLFNBQUwsQ0FBZUwsSUFBZjtBQUhzQyxlQUFuQyxDQUpJOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFVZkYsY0FBQUEsT0FBTyxDQUFDUSxLQUFSOztBQVZlO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUg7O0FBQUEsb0JBQVZWLFVBQVU7QUFBQTtBQUFBO0FBQUEsS0FBaEI7O0FBY0Esc0JBQ0U7QUFBQSwyQkFDRTtBQUFLLGVBQVMsRUFBQyxNQUFmO0FBQUEsOEJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQUdFO0FBQU0sZ0JBQVEsRUFBRUEsVUFBaEI7QUFBQSxnQ0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQUVFO0FBQ0UsbUJBQVMsTUFEWDtBQUVFLGtCQUFRLEVBQUUsa0JBQUNDLENBQUQ7QUFBQSxtQkFBT0osT0FBTyxDQUFDSSxDQUFDLENBQUNVLE1BQUYsQ0FBU0MsS0FBVixDQUFkO0FBQUEsV0FGWjtBQUdFLHFCQUFXLEVBQUMsTUFIZDtBQUlFLGNBQUksRUFBQyxNQUpQO0FBS0UsZUFBSyxFQUFFaEI7QUFMVDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZGLGVBU0U7QUFDRSxrQkFBUSxFQUFFLGtCQUFDSyxDQUFEO0FBQUEsbUJBQU9GLFFBQVEsQ0FBQ0UsQ0FBQyxDQUFDVSxNQUFGLENBQVNDLEtBQVYsQ0FBZjtBQUFBLFdBRFo7QUFFRSxxQkFBVyxFQUFDLGVBRmQ7QUFHRSxjQUFJLEVBQUMsTUFIUDtBQUlFLGVBQUssRUFBRWQ7QUFKVDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVRGLGVBZUU7QUFBTyxrQkFBUSxFQUFFLENBQUNGLElBQUQsSUFBUyxDQUFDRSxLQUEzQjtBQUFrQyxjQUFJLEVBQUMsUUFBdkM7QUFBZ0QsZUFBSyxFQUFDO0FBQXREO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBZkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSEYsZUFvQkU7QUFBQSxrQkFBS0E7QUFBTDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBcEJGLEVBcUJHSSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxNQUFaLEVBQW9CUixLQUFwQixDQXJCSCxlQXVCRTtBQUFBLGtCQUNHQSxLQUFLLENBQUNrQixLQUFOLENBQVlDLEdBQVosQ0FBZ0IsVUFBQ0MsSUFBRDtBQUFBLDhCQUNmO0FBQW1CLHFCQUFTLEVBQUMsTUFBN0I7QUFBQSxvQ0FDRTtBQUFBLGtDQUFXQSxJQUFJLENBQUNDLEVBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERixlQUVFO0FBQUEsb0NBQWFELElBQUksQ0FBQ25CLElBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFGRjtBQUFBLGFBQVVtQixJQUFJLENBQUNDLEVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFEZTtBQUFBLFNBQWhCO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQXZCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFvQ0QsQ0F0REQ7O0dBQU10Qjs7S0FBQUE7O0FBaUVOLCtEQUFlQSxJQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcblxyXG5jb25zdCBCbG9nID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgW25hbWUsIHNldE5hbWVdID0gdXNlU3RhdGUoJycpXHJcbiAgY29uc3QgW2VtYWlsLCBzZXRFbWFpbF0gPSB1c2VTdGF0ZSgnJylcclxuXHJcbiAgY29uc3Qgc3VibWl0RGF0YSA9IGFzeW5jIChlKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zb2xlLmxvZygnc3VibWl0ZGF0ZScsIGUpXHJcbiAgICAgIGNvbnN0IGJvZHkgPSB7IG5hbWUsIGVtYWlsIH1cclxuICAgICAgYXdhaXQgZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvdXNlcmAsIHtcclxuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICBoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSxcclxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShib2R5KSxcclxuICAgICAgfSlcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYWdlXCI+XHJcbiAgICAgICAgPGgxPk15IEJsb2c8L2gxPlxyXG5cclxuICAgICAgICA8Zm9ybSBvblN1Ym1pdD17c3VibWl0RGF0YX0+XHJcbiAgICAgICAgICA8aDE+U2lnbnVwIHVzZXI8L2gxPlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIGF1dG9Gb2N1c1xyXG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldE5hbWUoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIk5hbWVcIlxyXG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgIHZhbHVlPXtuYW1lfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEVtYWlsKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbWFpbCBhZGRyZXNzXCJcclxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICB2YWx1ZT17ZW1haWx9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPGlucHV0IGRpc2FibGVkPXshbmFtZSB8fCAhZW1haWx9IHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cIlNpZ251cFwiIC8+XHJcbiAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgIDxoMT57ZW1haWx9PC9oMT5cclxuICAgICAgICB7Y29uc29sZS5sb2coJ2ZlZWQnLCBwcm9wcyl9XHJcblxyXG4gICAgICAgIDxtYWluPlxyXG4gICAgICAgICAge3Byb3BzLnVzZXJzLm1hcCgodXNlcikgPT4gKFxyXG4gICAgICAgICAgICA8ZGl2IGtleT17dXNlci5pZH0gY2xhc3NOYW1lPVwicG9zdFwiPlxyXG4gICAgICAgICAgICAgIDxkaXY+aWQgPSB7dXNlci5pZH08L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2Pm5hbWUgPSB7dXNlci5uYW1lfTwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvbWFpbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTZXJ2ZXJTaWRlUHJvcHMgPSBhc3luYyAoKSA9PiB7XHJcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvdXNlcnMnKVxyXG4gIGNvbnN0IHVzZXJzID0gYXdhaXQgcmVzLmpzb24oKVxyXG4gIGNvbnNvbGUubG9nKCdwb3N0JywgdXNlcnMpXHJcbiAgcmV0dXJuIHtcclxuICAgIHByb3BzOiB7IHVzZXJzIH0sXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCbG9nXHJcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIkJsb2ciLCJwcm9wcyIsIm5hbWUiLCJzZXROYW1lIiwiZW1haWwiLCJzZXRFbWFpbCIsInN1Ym1pdERhdGEiLCJlIiwiY29uc29sZSIsImxvZyIsImJvZHkiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJKU09OIiwic3RyaW5naWZ5IiwiZXJyb3IiLCJ0YXJnZXQiLCJ2YWx1ZSIsInVzZXJzIiwibWFwIiwidXNlciIsImlkIl0sInNvdXJjZVJvb3QiOiIifQ==