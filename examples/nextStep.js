webpackJsonp([1],{

/***/ 142:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__assets_index_less__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__assets_index_less___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__assets_index_less__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__assets_iconfont_less__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__assets_iconfont_less___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__assets_iconfont_less__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__nextStep_css__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__nextStep_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__nextStep_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_react_dom__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__src_index__ = __webpack_require__(10);










var container = document.getElementById('__react-content');
function generateRandomSteps() {
    var n = Math.floor(Math.random() * 3) + 3;
    var arr = [];
    for (var i = 0; i < n; i++) {
        arr.push({
            title: '\u6B65\u9AA4' + (i + 1)
        });
    }
    return arr;
}
var steps = generateRandomSteps();

var MyForm = function (_React$Component) {
    __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits___default()(MyForm, _React$Component);

    function MyForm() {
        __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, MyForm);

        var _this = __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn___default()(this, (MyForm.__proto__ || Object.getPrototypeOf(MyForm)).apply(this, arguments));

        _this.state = {
            currentStep: Math.floor(Math.random() * steps.length)
        };
        /*
        componentDidMount() {
          // You can dynamically set tail's left position based on main's width for each step.
          this.stepsRefs.forEach(s => {
            if (s.refs.tail) {
              s.refs.tail.style.left = `${s.refs.main.offsetWidth / 2}px`;
            }
          });
        }
        */
        _this.nextStep = function () {
            var s = _this.state.currentStep + 1;
            if (s === steps.length) {
                s = 0;
            }
            _this.setState({
                currentStep: s
            });
        };
        return _this;
    }

    __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default()(MyForm, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            var cs = this.state.currentStep;
            this.stepsRefs = [];
            return __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
                'form',
                { className: 'my-step-form' },
                __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
                    'div',
                    null,
                    '\u8FD9\u4E2Ademo\u968F\u673A\u751F\u62103~6\u4E2A\u6B65\u9AA4\uFF0C\u521D\u59CB\u968F\u673A\u8FDB\u884C\u5230\u5176\u4E2D\u4E00\u4E2A\u6B65\u9AA4'
                ),
                __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
                    'div',
                    null,
                    '\u5F53\u524D\u6B63\u5728\u6267\u884C\u7B2C',
                    cs + 1,
                    '\u6B65'
                ),
                __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
                    'div',
                    { className: 'my-step-container' },
                    __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_9__src_index__["a" /* default */],
                        { current: cs },
                        steps.map(function (s, i) {
                            return __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__src_index__["b" /* Step */], { ref: function ref(c) {
                                    return _this2.stepsRefs[i] = c;
                                }, key: i, title: s.title });
                        })
                    )
                ),
                __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
                    'div',
                    null,
                    __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
                        'button',
                        { type: 'button', onClick: this.nextStep },
                        '\u4E0B\u4E00\u6B65'
                    )
                )
            );
        }
    }]);

    return MyForm;
}(__WEBPACK_IMPORTED_MODULE_7_react___default.a.Component);

__WEBPACK_IMPORTED_MODULE_8_react_dom___default.a.render(__WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(MyForm, null), container);

/***/ }),

/***/ 198:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 306:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(142);


/***/ })

},[306]);
//# sourceMappingURL=nextStep.js.map