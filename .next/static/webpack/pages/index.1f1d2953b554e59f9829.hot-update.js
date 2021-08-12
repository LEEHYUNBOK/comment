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
              console.log('submitdate2', e);
              _context.next = 6;
              return fetch("http://localhost:3000/api/push.ts", {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(body)
              });

            case 6:
              _context.next = 11;
              break;

            case 8:
              _context.prev = 8;
              _context.t0 = _context["catch"](0);
              console.error(_context.t0);

            case 11:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 8]]);
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
        lineNumber: 26,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("form", {
        onSubmit: submitData,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
          children: "Signup user"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 29,
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
          lineNumber: 30,
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
          lineNumber: 37,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
          disabled: !name || !email,
          type: "submit",
          value: "Signup"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 9
      }, _this), console.log('feed', props), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("main", {
        children: props.users.map(function (user) {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "post",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              children: ["id = ", user.id]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 51,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              children: ["name = ", user.name]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 52,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "content",
              children: ["email = ", user.email]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 53,
              columnNumber: 15
            }, _this)]
          }, user.id, true, {
            fileName: _jsxFileName,
            lineNumber: 50,
            columnNumber: 13
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 24,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMWYxZDI5NTNiNTU0ZTU5Zjk4MjkuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsSUFBTUUsSUFBSSxHQUFHLFNBQVBBLElBQU8sQ0FBQ0MsS0FBRCxFQUFXO0FBQUE7O0FBQUEsa0JBQ0VILCtDQUFRLENBQUMsRUFBRCxDQURWO0FBQUEsTUFDZkksSUFEZTtBQUFBLE1BQ1RDLE9BRFM7O0FBQUEsbUJBRUlMLCtDQUFRLENBQUMsRUFBRCxDQUZaO0FBQUEsTUFFZk0sS0FGZTtBQUFBLE1BRVJDLFFBRlE7O0FBSXRCLE1BQU1DLFVBQVU7QUFBQSwrT0FBRyxpQkFBT0MsQ0FBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVmQyxjQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxZQUFaLEVBQTBCRixDQUExQjtBQUNNRyxjQUFBQSxJQUhTLEdBR0Y7QUFBRVIsZ0JBQUFBLElBQUksRUFBSkEsSUFBRjtBQUFRRSxnQkFBQUEsS0FBSyxFQUFMQTtBQUFSLGVBSEU7QUFJZkksY0FBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksYUFBWixFQUEyQkYsQ0FBM0I7QUFKZTtBQUFBLHFCQUtUSSxLQUFLLHNDQUFzQztBQUMvQ0MsZ0JBQUFBLE1BQU0sRUFBRSxNQUR1QztBQUUvQ0MsZ0JBQUFBLE9BQU8sRUFBRTtBQUFFLGtDQUFnQjtBQUFsQixpQkFGc0M7QUFHL0NILGdCQUFBQSxJQUFJLEVBQUVJLElBQUksQ0FBQ0MsU0FBTCxDQUFlTCxJQUFmO0FBSHlDLGVBQXRDLENBTEk7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQVdmRixjQUFBQSxPQUFPLENBQUNRLEtBQVI7O0FBWGU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSDs7QUFBQSxvQkFBVlYsVUFBVTtBQUFBO0FBQUE7QUFBQSxLQUFoQjs7QUFlQSxzQkFDRTtBQUFBLDJCQUNFO0FBQUssZUFBUyxFQUFDLE1BQWY7QUFBQSw4QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBR0U7QUFBTSxnQkFBUSxFQUFFQSxVQUFoQjtBQUFBLGdDQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBRUU7QUFDRSxtQkFBUyxNQURYO0FBRUUsa0JBQVEsRUFBRSxrQkFBQ0MsQ0FBRDtBQUFBLG1CQUFPSixPQUFPLENBQUNJLENBQUMsQ0FBQ1UsTUFBRixDQUFTQyxLQUFWLENBQWQ7QUFBQSxXQUZaO0FBR0UscUJBQVcsRUFBQyxNQUhkO0FBSUUsY0FBSSxFQUFDLE1BSlA7QUFLRSxlQUFLLEVBQUVoQjtBQUxUO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRkYsZUFTRTtBQUNFLGtCQUFRLEVBQUUsa0JBQUNLLENBQUQ7QUFBQSxtQkFBT0YsUUFBUSxDQUFDRSxDQUFDLENBQUNVLE1BQUYsQ0FBU0MsS0FBVixDQUFmO0FBQUEsV0FEWjtBQUVFLHFCQUFXLEVBQUMsZUFGZDtBQUdFLGNBQUksRUFBQyxNQUhQO0FBSUUsZUFBSyxFQUFFZDtBQUpUO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBVEYsZUFlRTtBQUFPLGtCQUFRLEVBQUUsQ0FBQ0YsSUFBRCxJQUFTLENBQUNFLEtBQTNCO0FBQWtDLGNBQUksRUFBQyxRQUF2QztBQUFnRCxlQUFLLEVBQUM7QUFBdEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFmRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFIRixFQXFCR0ksT0FBTyxDQUFDQyxHQUFSLENBQVksTUFBWixFQUFvQlIsS0FBcEIsQ0FyQkgsZUF1QkU7QUFBQSxrQkFDR0EsS0FBSyxDQUFDa0IsS0FBTixDQUFZQyxHQUFaLENBQWdCLFVBQUNDLElBQUQ7QUFBQSw4QkFDZjtBQUFtQixxQkFBUyxFQUFDLE1BQTdCO0FBQUEsb0NBQ0U7QUFBQSxrQ0FBV0EsSUFBSSxDQUFDQyxFQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREYsZUFFRTtBQUFBLG9DQUFhRCxJQUFJLENBQUNuQixJQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRkYsZUFHRTtBQUFLLHVCQUFTLEVBQUMsU0FBZjtBQUFBLHFDQUFrQ21CLElBQUksQ0FBQ2pCLEtBQXZDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFIRjtBQUFBLGFBQVVpQixJQUFJLENBQUNDLEVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFEZTtBQUFBLFNBQWhCO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQXZCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFxQ0QsQ0F4REQ7O0dBQU10Qjs7S0FBQUE7O0FBbUVOLCtEQUFlQSxJQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL1Bvc3QubW9kdWxlLnNjc3MnXHJcblxyXG5jb25zdCBCbG9nID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgW25hbWUsIHNldE5hbWVdID0gdXNlU3RhdGUoJycpXHJcbiAgY29uc3QgW2VtYWlsLCBzZXRFbWFpbF0gPSB1c2VTdGF0ZSgnJylcclxuXHJcbiAgY29uc3Qgc3VibWl0RGF0YSA9IGFzeW5jIChlKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zb2xlLmxvZygnc3VibWl0ZGF0ZScsIGUpXHJcbiAgICAgIGNvbnN0IGJvZHkgPSB7IG5hbWUsIGVtYWlsIH1cclxuICAgICAgY29uc29sZS5sb2coJ3N1Ym1pdGRhdGUyJywgZSlcclxuICAgICAgYXdhaXQgZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvcHVzaC50c2AsIHtcclxuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICBoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSxcclxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShib2R5KSxcclxuICAgICAgfSlcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYWdlXCI+XHJcbiAgICAgICAgPGgxPk15IEJsb2c8L2gxPlxyXG5cclxuICAgICAgICA8Zm9ybSBvblN1Ym1pdD17c3VibWl0RGF0YX0+XHJcbiAgICAgICAgICA8aDE+U2lnbnVwIHVzZXI8L2gxPlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIGF1dG9Gb2N1c1xyXG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldE5hbWUoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIk5hbWVcIlxyXG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgIHZhbHVlPXtuYW1lfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEVtYWlsKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbWFpbCBhZGRyZXNzXCJcclxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICB2YWx1ZT17ZW1haWx9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPGlucHV0IGRpc2FibGVkPXshbmFtZSB8fCAhZW1haWx9IHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cIlNpZ251cFwiIC8+XHJcbiAgICAgICAgPC9mb3JtPlxyXG5cclxuICAgICAgICB7Y29uc29sZS5sb2coJ2ZlZWQnLCBwcm9wcyl9XHJcblxyXG4gICAgICAgIDxtYWluPlxyXG4gICAgICAgICAge3Byb3BzLnVzZXJzLm1hcCgodXNlcikgPT4gKFxyXG4gICAgICAgICAgICA8ZGl2IGtleT17dXNlci5pZH0gY2xhc3NOYW1lPVwicG9zdFwiPlxyXG4gICAgICAgICAgICAgIDxkaXY+aWQgPSB7dXNlci5pZH08L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2Pm5hbWUgPSB7dXNlci5uYW1lfTwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudFwiPmVtYWlsID0ge3VzZXIuZW1haWx9PC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9tYWluPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGdldFNlcnZlclNpZGVQcm9wcyA9IGFzeW5jICgpID0+IHtcclxuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS91c2VycycpXHJcbiAgY29uc3QgdXNlcnMgPSBhd2FpdCByZXMuanNvbigpXHJcbiAgY29uc29sZS5sb2coJ3Bvc3QnLCB1c2VycylcclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6IHsgdXNlcnMgfSxcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJsb2dcclxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwic3R5bGVzIiwiQmxvZyIsInByb3BzIiwibmFtZSIsInNldE5hbWUiLCJlbWFpbCIsInNldEVtYWlsIiwic3VibWl0RGF0YSIsImUiLCJjb25zb2xlIiwibG9nIiwiYm9keSIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsIkpTT04iLCJzdHJpbmdpZnkiLCJlcnJvciIsInRhcmdldCIsInZhbHVlIiwidXNlcnMiLCJtYXAiLCJ1c2VyIiwiaWQiXSwic291cmNlUm9vdCI6IiJ9