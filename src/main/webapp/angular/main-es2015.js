(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\r\n    <div class=\"column1\">\r\n        <app-board></app-board>\r\n    </div>\r\n    \r\n    <div class=\"column3\">\r\n        <app-move-list></app-move-list>\r\n    </div>\r\n</div>\r\n\r\n<router-outlet></router-outlet>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/board/board.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/board/board.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"board1\" style=\"width: 70%; float: right; padding-top: 10%;\"></div>\r\n\r\n<button (click)=\"serviceCheck()\">Add Move</button>\r\n\r\n\r\n\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/move-list/move-list.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/move-list/move-list.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div title = \"Move List\" style=\"padding-top: 15%;\">\r\n    <nav>\r\n        <ul>\r\n            <li>Move List:</li>\r\n            <li *ngFor=\"let item of moveList\">\r\n                id: {{ item.id }}, Piece: {{ item.piece }}, From: {{ item.source }}, To: {{ item.target }}\r\n            </li>\r\n        </ul>\r\n    </nav>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



const routes = [];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".row {\r\n    display: -webkit-box;\r\n    display: flex;\r\n  }\r\n\r\n  .column1 {\r\n    -webkit-box-flex: 60%;\r\n            flex: 60%\r\n  }\r\n\r\n  .column2 {\r\n    -webkit-box-flex: 10%;\r\n            flex: 10%;\r\n  }\r\n\r\n  .column3 {\r\n      -webkit-box-flex: 40%;\r\n              flex: 40%;\r\n      text-align: center;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxvQkFBYTtJQUFiLGFBQWE7RUFDZjs7RUFFQTtJQUNFLHFCQUFRO1lBQVI7RUFDRjs7RUFFQTtJQUNFLHFCQUFTO1lBQVQsU0FBUztFQUNYOztFQUVBO01BQ0kscUJBQVM7Y0FBVCxTQUFTO01BQ1Qsa0JBQWtCO0VBQ3RCIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucm93IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgfVxyXG5cclxuICAuY29sdW1uMSB7XHJcbiAgICBmbGV4OiA2MCVcclxuICB9XHJcbiAgXHJcbiAgLmNvbHVtbjIge1xyXG4gICAgZmxleDogMTAlO1xyXG4gIH1cclxuXHJcbiAgLmNvbHVtbjMge1xyXG4gICAgICBmbGV4OiA0MCU7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9Il19 */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'PromoChessFrontend';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _board_board_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./board/board.component */ "./src/app/board/board.component.ts");
/* harmony import */ var _move_list_move_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./move-list/move-list.component */ "./src/app/move-list/move-list.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");








let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _board_board_component__WEBPACK_IMPORTED_MODULE_5__["BoardComponent"],
            _move_list_move_list_component__WEBPACK_IMPORTED_MODULE_6__["MoveListComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/board/board.component.css":
/*!*******************************************!*\
  !*** ./src/app/board/board.component.css ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2JvYXJkL2JvYXJkLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/board/board.component.ts":
/*!******************************************!*\
  !*** ./src/app/board/board.component.ts ***!
  \******************************************/
/*! exports provided: BoardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoardComponent", function() { return BoardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _promotion_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../promotion.service */ "./src/app/promotion.service.ts");



let BoardComponent = class BoardComponent {
    constructor(promotionService) {
        this.promotionService = promotionService;
        this.title = 'PromoChessFrontend';
        this.counter = 0;
        this.difficultyDepth = 4;
        this.changeBoard = (boardObj) => {
            this.startBoard.position(boardObj, true);
        };
    }
    ngOnInit() {
        this.startBoard = ChessBoard('board1', {
            position: 'ppppkppp/pppppppp/8/8/8/8/PPPPPPPP/PPPPKPPP',
            draggable: true,
            onChange: onChange,
            onDrop: onDrop,
            onMoveEnd: onMoveEnd,
            onMouseoverSquare: onMouseoverSquare,
            onMouseoutSquare: onMouseoutSquare
        });
        let board = this.startBoard;
        let numOfMoves = this.counter;
        let service = this.promotionService;
        let depth = this.difficultyDepth;
        // Sends board changes to move-list component
        function onChange(oldPos, newPos) {
        }
        // Returns an array of all valid position objects for the given piece BEFORE checking for "Check" status
        // Return Type: ArrayList[]
        function getPreLegalMoves(square, piece, boardPos, orientation) {
            let pieceType;
            let pieceColor;
            // Represents indexes of allSquares array that corresponds with the given square
            let row;
            let col;
            let moves = [];
            let allSquares;
            // 2D Array of all square combinations
            allSquares = [["a8", "b8", "c8", "d8", "e8", "f8", "g8", "h8"],
                ["a7", "b7", "c7", "d7", "e7", "f7", "g7", "h7"],
                ["a6", "b6", "c6", "d6", "e6", "f6", "g6", "h6"],
                ["a5", "b5", "c5", "d5", "e5", "f5", "g5", "h5"],
                ["a4", "b4", "c4", "d4", "e4", "f4", "g4", "h4"],
                ["a3", "b3", "c3", "d3", "e3", "f3", "g3", "h3"],
                ["a2", "b2", "c2", "d2", "e2", "f2", "g2", "h2"],
                ["a1", "b1", "c1", "d1", "e1", "f1", "g1", "h1"]];
            // Assign row and col values
            for (let i = 0; i < allSquares.length; i++) {
                if (allSquares[i].includes(square)) {
                    row = i;
                    col = allSquares[i].indexOf(square);
                }
            }
            //pieceType will return uppercase symbol
            pieceType = piece.toString()[1];
            //pieceColor will return lowercase char ('w' or 'b')
            pieceColor = piece.toString()[0];
            // If piece is Pawn
            // Can attack in any 1 distance range
            // Can move freely sideways, forward, and forward-diagonal
            if (pieceType == "P") {
                let searchRowIndex = row;
                let searchColIndex = col;
                if (orientation == "white") {
                    if (pieceColor == "w") {
                        // Look forward
                        searchRowIndex = row - 1;
                        searchColIndex = col;
                        if (0 <= searchRowIndex && searchRowIndex <= 7) {
                            let searchSquare = allSquares[searchRowIndex][searchColIndex];
                            if (searchSquare in boardPos) {
                                let bogeyPiece = boardPos[searchSquare];
                                let bogeyColor = bogeyPiece[0];
                                if (pieceColor != bogeyColor) {
                                    moves.push(searchSquare);
                                }
                            }
                            else {
                                moves.push(searchSquare);
                                // If in home "pawn launch row"
                                if (allSquares[6].includes(square)) {
                                    searchRowIndex -= 1;
                                    if (0 <= searchRowIndex && searchRowIndex <= 7) {
                                        searchSquare = allSquares[searchRowIndex][searchColIndex];
                                        if (!(searchSquare in boardPos)) {
                                            moves.push(searchSquare);
                                        }
                                    }
                                }
                            }
                        }
                        // Look Forward-Diagonal
                        searchRowIndex = row - 1;
                        searchColIndex = col;
                        if (0 <= searchRowIndex && searchRowIndex <= 7) {
                            if (0 <= (searchColIndex - 1) && (searchColIndex - 1) <= 7) {
                                let searchSquare1 = allSquares[searchRowIndex][searchColIndex - 1];
                                if (searchSquare1 in boardPos) {
                                    let bogeyPiece = boardPos[searchSquare1];
                                    let bogeyColor = bogeyPiece[0];
                                    if (pieceColor != bogeyColor) {
                                        moves.push(searchSquare1);
                                    }
                                }
                                else {
                                    moves.push(searchSquare1);
                                }
                            }
                            if (0 <= (searchColIndex + 1) && (searchColIndex + 1) <= 7) {
                                let searchSquare2 = allSquares[searchRowIndex][searchColIndex + 1];
                                if (searchSquare2 in boardPos) {
                                    let bogeyPiece = boardPos[searchSquare2];
                                    let bogeyColor = bogeyPiece[0];
                                    if (pieceColor != bogeyColor) {
                                        moves.push(searchSquare2);
                                    }
                                }
                                else {
                                    moves.push(searchSquare2);
                                }
                            }
                        }
                        // Look Sideways
                        searchRowIndex = row;
                        searchColIndex = col;
                        if (0 <= (searchColIndex - 1) && (searchColIndex - 1) <= 7) {
                            let searchSquare1 = allSquares[searchRowIndex][searchColIndex - 1];
                            if (searchSquare1 in boardPos) {
                                let bogeyPiece = boardPos[searchSquare1];
                                let bogeyColor = bogeyPiece[0];
                                if (pieceColor != bogeyColor) {
                                    moves.push(searchSquare1);
                                }
                            }
                            else {
                                moves.push(searchSquare1);
                            }
                        }
                        if (0 <= (searchColIndex + 1) && (searchColIndex + 1) <= 7) {
                            let searchSquare2 = allSquares[searchRowIndex][searchColIndex + 1];
                            if (searchSquare2 in boardPos) {
                                let bogeyPiece = boardPos[searchSquare2];
                                let bogeyColor = bogeyPiece[0];
                                if (pieceColor != bogeyColor) {
                                    moves.push(searchSquare2);
                                }
                            }
                            else {
                                moves.push(searchSquare2);
                            }
                        }
                        // Look backward
                        searchRowIndex = row + 1;
                        searchColIndex = col;
                        if (0 <= searchRowIndex && searchRowIndex <= 7) {
                            let searchSquare = allSquares[searchRowIndex][searchColIndex];
                            if (searchSquare in boardPos) {
                                let bogeyPiece = boardPos[searchSquare];
                                let bogeyColor = bogeyPiece[0];
                                if (pieceColor != bogeyColor) {
                                    moves.push(searchSquare);
                                }
                            }
                        }
                        // Look Backward-Diagonal
                        searchRowIndex = row + 1;
                        searchColIndex = col;
                        if (0 <= searchRowIndex && searchRowIndex <= 7) {
                            if (0 <= (searchColIndex - 1) && (searchColIndex - 1) <= 7) {
                                let searchSquare1 = allSquares[searchRowIndex][searchColIndex - 1];
                                if (searchSquare1 in boardPos) {
                                    let bogeyPiece = boardPos[searchSquare1];
                                    let bogeyColor = bogeyPiece[0];
                                    if (pieceColor != bogeyColor) {
                                        moves.push(searchSquare1);
                                    }
                                }
                            }
                            if (0 <= (searchColIndex + 1) && (searchColIndex + 1) <= 7) {
                                let searchSquare2 = allSquares[searchRowIndex][searchColIndex + 1];
                                if (searchSquare2 in boardPos) {
                                    let bogeyPiece = boardPos[searchSquare2];
                                    let bogeyColor = bogeyPiece[0];
                                    if (pieceColor != bogeyColor) {
                                        moves.push(searchSquare2);
                                    }
                                }
                            }
                        }
                    }
                    if (pieceColor == "b") {
                        // Look forward
                        searchRowIndex = row + 1;
                        searchColIndex = col;
                        if (0 <= searchRowIndex && searchRowIndex <= 7) {
                            let searchSquare = allSquares[searchRowIndex][searchColIndex];
                            if (searchSquare in boardPos) {
                                let bogeyPiece = boardPos[searchSquare];
                                let bogeyColor = bogeyPiece[0];
                                if (pieceColor != bogeyColor) {
                                    moves.push(searchSquare);
                                }
                            }
                            else {
                                moves.push(searchSquare);
                                // If in home "pawn launch row"
                                if (allSquares[1].includes(square)) {
                                    searchRowIndex += 1;
                                    if (0 <= searchRowIndex && searchRowIndex <= 7) {
                                        searchSquare = allSquares[searchRowIndex][searchColIndex];
                                        if (!(searchSquare in boardPos)) {
                                            moves.push(searchSquare);
                                        }
                                    }
                                }
                            }
                        }
                        // Look Forward-Diagonal
                        searchRowIndex = row + 1;
                        searchColIndex = col;
                        if (0 <= searchRowIndex && searchRowIndex <= 7) {
                            if (0 <= (searchColIndex - 1) && (searchColIndex - 1) <= 7) {
                                let searchSquare1 = allSquares[searchRowIndex][searchColIndex - 1];
                                if (searchSquare1 in boardPos) {
                                    let bogeyPiece = boardPos[searchSquare1];
                                    let bogeyColor = bogeyPiece[0];
                                    if (pieceColor != bogeyColor) {
                                        moves.push(searchSquare1);
                                    }
                                }
                                else {
                                    moves.push(searchSquare1);
                                }
                            }
                            if (0 <= (searchColIndex + 1) && (searchColIndex + 1) <= 7) {
                                let searchSquare2 = allSquares[searchRowIndex][searchColIndex + 1];
                                if (searchSquare2 in boardPos) {
                                    let bogeyPiece = boardPos[searchSquare2];
                                    let bogeyColor = bogeyPiece[0];
                                    if (pieceColor != bogeyColor) {
                                        moves.push(searchSquare2);
                                    }
                                }
                                else {
                                    moves.push(searchSquare2);
                                }
                            }
                        }
                        // Look Sideways
                        searchRowIndex = row;
                        searchColIndex = col;
                        if (0 <= (searchColIndex - 1) && (searchColIndex - 1) <= 7) {
                            let searchSquare1 = allSquares[searchRowIndex][searchColIndex - 1];
                            if (searchSquare1 in boardPos) {
                                let bogeyPiece = boardPos[searchSquare1];
                                let bogeyColor = bogeyPiece[0];
                                if (pieceColor != bogeyColor) {
                                    moves.push(searchSquare1);
                                }
                            }
                            else {
                                moves.push(searchSquare1);
                            }
                        }
                        if (0 <= (searchColIndex + 1) && (searchColIndex + 1) <= 7) {
                            let searchSquare2 = allSquares[searchRowIndex][searchColIndex + 1];
                            if (searchSquare2 in boardPos) {
                                let bogeyPiece = boardPos[searchSquare2];
                                let bogeyColor = bogeyPiece[0];
                                if (pieceColor != bogeyColor) {
                                    moves.push(searchSquare2);
                                }
                            }
                            else {
                                moves.push(searchSquare2);
                            }
                        }
                        // Look backward
                        searchRowIndex = row - 1;
                        searchColIndex = col;
                        if (0 <= searchRowIndex && searchRowIndex <= 7) {
                            let searchSquare = allSquares[searchRowIndex][searchColIndex];
                            if (searchSquare in boardPos) {
                                let bogeyPiece = boardPos[searchSquare];
                                let bogeyColor = bogeyPiece[0];
                                if (pieceColor != bogeyColor) {
                                    moves.push(searchSquare);
                                }
                            }
                        }
                        // Look Backward-Diagonal
                        searchRowIndex = row - 1;
                        searchColIndex = col;
                        if (0 <= searchRowIndex && searchRowIndex <= 7) {
                            if (0 <= (searchColIndex - 1) && (searchColIndex - 1) <= 7) {
                                let searchSquare1 = allSquares[searchRowIndex][searchColIndex - 1];
                                if (searchSquare1 in boardPos) {
                                    let bogeyPiece = boardPos[searchSquare1];
                                    let bogeyColor = bogeyPiece[0];
                                    if (pieceColor != bogeyColor) {
                                        moves.push(searchSquare1);
                                    }
                                }
                            }
                            if (0 <= (searchColIndex + 1) && (searchColIndex + 1) <= 7) {
                                let searchSquare2 = allSquares[searchRowIndex][searchColIndex + 1];
                                if (searchSquare2 in boardPos) {
                                    let bogeyPiece = boardPos[searchSquare2];
                                    let bogeyColor = bogeyPiece[0];
                                    if (pieceColor != bogeyColor) {
                                        moves.push(searchSquare2);
                                    }
                                }
                            }
                        }
                    }
                }
            }
            else {
                let searchRowIndex = row;
                let searchColIndex = col;
                switch (pieceType) {
                    // Rook
                    case "R":
                        // Look up
                        searchRowIndex = row;
                        while (searchRowIndex > 0) {
                            --searchRowIndex;
                            let upSquare = allSquares[searchRowIndex][col];
                            // If another piece exists in square
                            if (upSquare in boardPos) {
                                let bogeyPiece = boardPos[upSquare];
                                let bogeyColor = bogeyPiece[0];
                                // Taking your own piece is not legal
                                if (pieceColor != bogeyColor) {
                                    moves.push(upSquare);
                                }
                                // Another piece has been reached, cannot proceed any further
                                break;
                            }
                            // No piece detected, add square to list of legal moves
                            else {
                                moves.push(upSquare);
                            }
                        }
                        // Look down
                        searchRowIndex = row;
                        while (searchRowIndex < 7) {
                            ++searchRowIndex;
                            let downSquare = allSquares[searchRowIndex][col];
                            // If another piece exists in square
                            if (downSquare in boardPos) {
                                let bogeyPiece = boardPos[downSquare];
                                let bogeyColor = bogeyPiece[0];
                                // Taking your own piece is not legal
                                if (pieceColor != bogeyColor) {
                                    moves.push(downSquare);
                                }
                                // Another piece has been reached, cannot proceed any further
                                break;
                            }
                            // No piece detected, add square to list of legal moves
                            else {
                                moves.push(downSquare);
                            }
                        }
                        // Look left
                        searchColIndex = col;
                        while (searchColIndex > 0) {
                            --searchColIndex;
                            let leftSquare = allSquares[row][searchColIndex];
                            // If another piece exists in square
                            if (leftSquare in boardPos) {
                                let bogeyPiece = boardPos[leftSquare];
                                let bogeyColor = bogeyPiece[0];
                                // Taking your own piece is not legal
                                if (pieceColor != bogeyColor) {
                                    moves.push(leftSquare);
                                }
                                // Another piece has been reached, cannot proceed any further
                                break;
                            }
                            // No piece detected, add square to list of legal moves
                            else {
                                moves.push(leftSquare);
                            }
                        }
                        // Look right
                        searchColIndex = col;
                        while (searchColIndex < 7) {
                            ++searchColIndex;
                            let rightSquare = allSquares[row][searchColIndex];
                            // If another piece exists in square
                            if (rightSquare in boardPos) {
                                let bogeyPiece = boardPos[rightSquare];
                                let bogeyColor = bogeyPiece[0];
                                // Taking your own piece is not legal
                                if (pieceColor != bogeyColor) {
                                    moves.push(rightSquare);
                                }
                                // Another piece has been reached, cannot proceed any further
                                break;
                            }
                            // No piece detected, add square to list of legal moves
                            else {
                                moves.push(rightSquare);
                            }
                        }
                        break;
                    // Bishop
                    case "B":
                        // Look North East
                        searchRowIndex = row;
                        searchColIndex = col;
                        while (searchRowIndex > 0 && searchColIndex < 7) {
                            --searchRowIndex;
                            ++searchColIndex;
                            let NESquare = allSquares[searchRowIndex][searchColIndex];
                            // If another piece exists in square
                            if (NESquare in boardPos) {
                                let bogeyPiece = boardPos[NESquare];
                                let bogeyColor = bogeyPiece[0];
                                // Taking your own piece is not legal
                                if (pieceColor != bogeyColor) {
                                    moves.push(NESquare);
                                }
                                // Another piece has been reached, cannot proceed any further
                                break;
                            }
                            // No piece detected, add square to list of legal moves
                            else {
                                moves.push(NESquare);
                            }
                        }
                        // Look South East
                        searchRowIndex = row;
                        searchColIndex = col;
                        while (searchRowIndex < 7 && searchColIndex < 7) {
                            ++searchRowIndex;
                            ++searchColIndex;
                            let SESquare = allSquares[searchRowIndex][searchColIndex];
                            // If another piece exists in square
                            if (SESquare in boardPos) {
                                let bogeyPiece = boardPos[SESquare];
                                let bogeyColor = bogeyPiece[0];
                                // Taking your own piece is not legal
                                if (pieceColor != bogeyColor) {
                                    moves.push(SESquare);
                                }
                                // Another piece has been reached, cannot proceed any further
                                break;
                            }
                            // No piece detected, add square to list of legal moves
                            else {
                                moves.push(SESquare);
                            }
                        }
                        // Look South West
                        searchRowIndex = row;
                        searchColIndex = col;
                        while (searchRowIndex < 7 && searchColIndex > 0) {
                            ++searchRowIndex;
                            --searchColIndex;
                            let SWSquare = allSquares[searchRowIndex][searchColIndex];
                            // If another piece exists in square
                            if (SWSquare in boardPos) {
                                let bogeyPiece = boardPos[SWSquare];
                                let bogeyColor = bogeyPiece[0];
                                // Taking your own piece is not legal
                                if (pieceColor != bogeyColor) {
                                    moves.push(SWSquare);
                                }
                                // Another piece has been reached, cannot proceed any further
                                break;
                            }
                            // No piece detected, add square to list of legal moves
                            else {
                                moves.push(SWSquare);
                            }
                        }
                        // Look North West
                        searchRowIndex = row;
                        searchColIndex = col;
                        while (searchRowIndex > 0 && searchColIndex > 0) {
                            --searchRowIndex;
                            --searchColIndex;
                            let NWSquare = allSquares[searchRowIndex][searchColIndex];
                            // If another piece exists in square
                            if (NWSquare in boardPos) {
                                let bogeyPiece = boardPos[NWSquare];
                                let bogeyColor = bogeyPiece[0];
                                // Taking your own piece is not legal
                                if (pieceColor != bogeyColor) {
                                    moves.push(NWSquare);
                                }
                                // Another piece has been reached, cannot proceed any further
                                break;
                            }
                            // No piece detected, add square to list of legal moves
                            else {
                                moves.push(NWSquare);
                            }
                        }
                        break;
                    // Knight
                    case "N":
                        searchRowIndex = row;
                        searchColIndex = col;
                        // Look vertically left and right (Long up/down, Short left/right)
                        for (let i = 2; i >= -2; i -= 4) {
                            if (0 <= searchRowIndex + i && searchRowIndex + i <= 7) {
                                for (let j = 1; j >= -1; j -= 2) {
                                    if (0 <= searchColIndex + j && searchColIndex + j <= 7) {
                                        let searchSquare = allSquares[searchRowIndex + i][searchColIndex + j];
                                        // If another piece exists in square
                                        if (searchSquare in boardPos) {
                                            let bogeyPiece = boardPos[searchSquare];
                                            let bogeyColor = bogeyPiece[0];
                                            if (pieceColor != bogeyColor) {
                                                moves.push(searchSquare);
                                            }
                                        }
                                        // No piece detected, add square to list of legal moves
                                        else {
                                            moves.push(searchSquare);
                                        }
                                    }
                                }
                            }
                        }
                        // Look horizontally up and down (Long left/right, Short up/down)
                        for (let i = 1; i >= -1; i -= 2) {
                            if (0 <= searchRowIndex + i && searchRowIndex + i <= 7) {
                                for (let j = 2; j >= -2; j -= 4) {
                                    if (0 <= searchColIndex + j && searchColIndex + j <= 7) {
                                        let searchSquare = allSquares[searchRowIndex + i][searchColIndex + j];
                                        if (searchSquare in boardPos) {
                                            let bogeyPiece = boardPos[searchSquare];
                                            let bogeyColor = bogeyPiece[0];
                                            if (pieceColor != bogeyColor) {
                                                moves.push(searchSquare);
                                            }
                                        }
                                        else {
                                            moves.push(searchSquare);
                                        }
                                    }
                                }
                            }
                        }
                        break;
                    // Queen
                    case "Q":
                        // Look up
                        searchRowIndex = row;
                        while (searchRowIndex > 0) {
                            --searchRowIndex;
                            let upSquare = allSquares[searchRowIndex][col];
                            // If another piece exists in square
                            if (upSquare in boardPos) {
                                let bogeyPiece = boardPos[upSquare];
                                let bogeyColor = bogeyPiece[0];
                                // Taking your own piece is not legal
                                if (pieceColor != bogeyColor) {
                                    moves.push(upSquare);
                                }
                                // Another piece has been reached, cannot proceed any further
                                break;
                            }
                            // No piece detected, add square to list of legal moves
                            else {
                                moves.push(upSquare);
                            }
                        }
                        // Look down
                        searchRowIndex = row;
                        while (searchRowIndex < 7) {
                            ++searchRowIndex;
                            let downSquare = allSquares[searchRowIndex][col];
                            // If another piece exists in square
                            if (downSquare in boardPos) {
                                let bogeyPiece = boardPos[downSquare];
                                let bogeyColor = bogeyPiece[0];
                                // Taking your own piece is not legal
                                if (pieceColor != bogeyColor) {
                                    moves.push(downSquare);
                                }
                                // Another piece has been reached, cannot proceed any further
                                break;
                            }
                            // No piece detected, add square to list of legal moves
                            else {
                                moves.push(downSquare);
                            }
                        }
                        // Look left
                        searchColIndex = col;
                        while (searchColIndex > 0) {
                            --searchColIndex;
                            let leftSquare = allSquares[row][searchColIndex];
                            // If another piece exists in square
                            if (leftSquare in boardPos) {
                                let bogeyPiece = boardPos[leftSquare];
                                let bogeyColor = bogeyPiece[0];
                                // Taking your own piece is not legal
                                if (pieceColor != bogeyColor) {
                                    moves.push(leftSquare);
                                }
                                // Another piece has been reached, cannot proceed any further
                                break;
                            }
                            // No piece detected, add square to list of legal moves
                            else {
                                moves.push(leftSquare);
                            }
                        }
                        // Look right
                        searchColIndex = col;
                        while (searchColIndex < 7) {
                            ++searchColIndex;
                            let rightSquare = allSquares[row][searchColIndex];
                            // If another piece exists in square
                            if (rightSquare in boardPos) {
                                let bogeyPiece = boardPos[rightSquare];
                                let bogeyColor = bogeyPiece[0];
                                // Taking your own piece is not legal
                                if (pieceColor != bogeyColor) {
                                    moves.push(rightSquare);
                                }
                                // Another piece has been reached, cannot proceed any further
                                break;
                            }
                            // No piece detected, add square to list of legal moves
                            else {
                                moves.push(rightSquare);
                            }
                        }
                        // Look North East
                        searchRowIndex = row;
                        searchColIndex = col;
                        while (searchRowIndex > 0 && searchColIndex < 7) {
                            --searchRowIndex;
                            ++searchColIndex;
                            let NESquare = allSquares[searchRowIndex][searchColIndex];
                            // If another piece exists in square
                            if (NESquare in boardPos) {
                                let bogeyPiece = boardPos[NESquare];
                                let bogeyColor = bogeyPiece[0];
                                // Taking your own piece is not legal
                                if (pieceColor != bogeyColor) {
                                    moves.push(NESquare);
                                }
                                // Another piece has been reached, cannot proceed any further
                                break;
                            }
                            // No piece detected, add square to list of legal moves
                            else {
                                moves.push(NESquare);
                            }
                        }
                        // Look South East
                        searchRowIndex = row;
                        searchColIndex = col;
                        while (searchRowIndex < 7 && searchColIndex < 7) {
                            ++searchRowIndex;
                            ++searchColIndex;
                            let SESquare = allSquares[searchRowIndex][searchColIndex];
                            // If another piece exists in square
                            if (SESquare in boardPos) {
                                let bogeyPiece = boardPos[SESquare];
                                let bogeyColor = bogeyPiece[0];
                                // Taking your own piece is not legal
                                if (pieceColor != bogeyColor) {
                                    moves.push(SESquare);
                                }
                                // Another piece has been reached, cannot proceed any further
                                break;
                            }
                            // No piece detected, add square to list of legal moves
                            else {
                                moves.push(SESquare);
                            }
                        }
                        // Look South West
                        searchRowIndex = row;
                        searchColIndex = col;
                        while (searchRowIndex < 7 && searchColIndex > 0) {
                            ++searchRowIndex;
                            --searchColIndex;
                            let SWSquare = allSquares[searchRowIndex][searchColIndex];
                            // If another piece exists in square
                            if (SWSquare in boardPos) {
                                let bogeyPiece = boardPos[SWSquare];
                                let bogeyColor = bogeyPiece[0];
                                // Taking your own piece is not legal
                                if (pieceColor != bogeyColor) {
                                    moves.push(SWSquare);
                                }
                                // Another piece has been reached, cannot proceed any further
                                break;
                            }
                            // No piece detected, add square to list of legal moves
                            else {
                                moves.push(SWSquare);
                            }
                        }
                        // Look North West
                        searchRowIndex = row;
                        searchColIndex = col;
                        while (searchRowIndex > 0 && searchColIndex > 0) {
                            --searchRowIndex;
                            --searchColIndex;
                            let NWSquare = allSquares[searchRowIndex][searchColIndex];
                            // If another piece exists in square
                            if (NWSquare in boardPos) {
                                let bogeyPiece = boardPos[NWSquare];
                                let bogeyColor = bogeyPiece[0];
                                // Taking your own piece is not legal
                                if (pieceColor != bogeyColor) {
                                    moves.push(NWSquare);
                                }
                                // Another piece has been reached, cannot proceed any further
                                break;
                            }
                            // No piece detected, add square to list of legal moves
                            else {
                                moves.push(NWSquare);
                            }
                        }
                        break;
                    // King
                    case "K":
                        // Look Up
                        searchRowIndex = row - 1;
                        searchColIndex = col;
                        if (0 <= searchRowIndex && searchRowIndex <= 7) {
                            let searchSquare1 = allSquares[searchRowIndex][searchColIndex];
                            if (searchSquare1 in boardPos) {
                                let bogeyPiece = boardPos[searchSquare1];
                                let bogeyColor = bogeyPiece[0];
                                if (pieceColor != bogeyColor) {
                                    moves.push(searchSquare1);
                                }
                            }
                            else {
                                moves.push(searchSquare1);
                            }
                        }
                        // Look Down
                        searchRowIndex = row + 1;
                        searchColIndex = col;
                        if (0 <= searchRowIndex && searchRowIndex <= 7) {
                            let searchSquare1 = allSquares[searchRowIndex][searchColIndex];
                            if (searchSquare1 in boardPos) {
                                let bogeyPiece = boardPos[searchSquare1];
                                let bogeyColor = bogeyPiece[0];
                                if (pieceColor != bogeyColor) {
                                    moves.push(searchSquare1);
                                }
                            }
                            else {
                                moves.push(searchSquare1);
                            }
                        }
                        // Look Sideways
                        searchRowIndex = row;
                        searchColIndex = col;
                        if (0 <= (searchColIndex - 1) && (searchColIndex - 1) <= 7) {
                            let searchSquare1 = allSquares[searchRowIndex][searchColIndex - 1];
                            if (searchSquare1 in boardPos) {
                                let bogeyPiece = boardPos[searchSquare1];
                                let bogeyColor = bogeyPiece[0];
                                if (pieceColor != bogeyColor) {
                                    moves.push(searchSquare1);
                                }
                            }
                            else {
                                moves.push(searchSquare1);
                            }
                        }
                        if (0 <= (searchColIndex + 1) && (searchColIndex + 1) <= 7) {
                            let searchSquare2 = allSquares[searchRowIndex][searchColIndex + 1];
                            if (searchSquare2 in boardPos) {
                                let bogeyPiece = boardPos[searchSquare2];
                                let bogeyColor = bogeyPiece[0];
                                if (pieceColor != bogeyColor) {
                                    moves.push(searchSquare2);
                                }
                            }
                            else {
                                moves.push(searchSquare2);
                            }
                        }
                        // Look Up-Diagonal
                        searchRowIndex = row - 1;
                        searchColIndex = col;
                        if (0 <= searchRowIndex && searchRowIndex <= 7) {
                            if (0 <= (searchColIndex - 1) && (searchColIndex - 1) <= 7) {
                                let searchSquare1 = allSquares[searchRowIndex][searchColIndex - 1];
                                if (searchSquare1 in boardPos) {
                                    let bogeyPiece = boardPos[searchSquare1];
                                    let bogeyColor = bogeyPiece[0];
                                    if (pieceColor != bogeyColor) {
                                        moves.push(searchSquare1);
                                    }
                                }
                                else {
                                    moves.push(searchSquare1);
                                }
                            }
                            if (0 <= (searchColIndex + 1) && (searchColIndex + 1) <= 7) {
                                let searchSquare2 = allSquares[searchRowIndex][searchColIndex + 1];
                                if (searchSquare2 in boardPos) {
                                    let bogeyPiece = boardPos[searchSquare2];
                                    let bogeyColor = bogeyPiece[0];
                                    if (pieceColor != bogeyColor) {
                                        moves.push(searchSquare2);
                                    }
                                }
                                else {
                                    moves.push(searchSquare2);
                                }
                            }
                        }
                        // Look Down-Diagonal
                        searchRowIndex = row + 1;
                        searchColIndex = col;
                        if (0 <= searchRowIndex && searchRowIndex <= 7) {
                            if (0 <= (searchColIndex - 1) && (searchColIndex - 1) <= 7) {
                                let searchSquare1 = allSquares[searchRowIndex][searchColIndex - 1];
                                if (searchSquare1 in boardPos) {
                                    let bogeyPiece = boardPos[searchSquare1];
                                    let bogeyColor = bogeyPiece[0];
                                    if (pieceColor != bogeyColor) {
                                        moves.push(searchSquare1);
                                    }
                                }
                                else {
                                    moves.push(searchSquare1);
                                }
                            }
                            if (0 <= (searchColIndex + 1) && (searchColIndex + 1) <= 7) {
                                let searchSquare2 = allSquares[searchRowIndex][searchColIndex + 1];
                                if (searchSquare2 in boardPos) {
                                    let bogeyPiece = boardPos[searchSquare2];
                                    let bogeyColor = bogeyPiece[0];
                                    if (pieceColor != bogeyColor) {
                                        moves.push(searchSquare2);
                                    }
                                }
                                else {
                                    moves.push(searchSquare2);
                                }
                            }
                        }
                        break;
                    default:
                        console.log("Error in getPreLegalMoves()! Piece type invalid!");
                        break;
                }
            }
            return moves;
        }
        // Returns an array of all valid position objects for the given piece AFTER checking for "Check" status
        // Return Type: ArrayList[]
        function getLegalMoves(square, piece, boardPos, orientation) {
            let moves = getPreLegalMoves(square, piece, boardPos, orientation);
            let pieceType;
            let pieceColor;
            // Represents indexes of allSquares array that corresponds with the given square
            let row;
            let col;
            let allSquares;
            // 2D Array of all square combinations
            allSquares = [["a8", "b8", "c8", "d8", "e8", "f8", "g8", "h8"],
                ["a7", "b7", "c7", "d7", "e7", "f7", "g7", "h7"],
                ["a6", "b6", "c6", "d6", "e6", "f6", "g6", "h6"],
                ["a5", "b5", "c5", "d5", "e5", "f5", "g5", "h5"],
                ["a4", "b4", "c4", "d4", "e4", "f4", "g4", "h4"],
                ["a3", "b3", "c3", "d3", "e3", "f3", "g3", "h3"],
                ["a2", "b2", "c2", "d2", "e2", "f2", "g2", "h2"],
                ["a1", "b1", "c1", "d1", "e1", "f1", "g1", "h1"]];
            // Assign row and col values
            for (let i = 0; i < allSquares.length; i++) {
                if (allSquares[i].includes(square)) {
                    row = i;
                    col = allSquares[i].indexOf(square);
                }
            }
            //pieceType will return uppercase symbol
            pieceType = piece.toString()[1];
            //pieceColor will return lowercase char ('w' or 'b')
            pieceColor = piece.toString()[0];
            if (isCheck(pieceColor, boardPos, orientation)) {
                let newMoves = moves.slice();
                for (let i = 0; i < moves.length; i++) {
                    let testBoardPos = {};
                    testBoardPos = Object.assign(testBoardPos, boardPos);
                    let currentMove = moves[i];
                    // Simulate the move on the testBoardPos Object
                    // Piece leaves its origin
                    delete testBoardPos[square];
                    // If piece is attacking, move and promote
                    if (Object.keys(testBoardPos).includes(currentMove)) {
                        testBoardPos[currentMove] = piece;
                        testBoardPos = promote(boardPos, testBoardPos, currentMove, piece, orientation);
                    }
                    else {
                        testBoardPos[currentMove] = piece;
                    }
                    // Determine if simulated move is still in check or not
                    if (isCheck(pieceColor, testBoardPos, orientation)) {
                        // Move is in check and therefore illegal
                        delete newMoves[i];
                    }
                }
                // Remove empty elements, caused by deletion
                newMoves = newMoves.filter(el => el != null);
                // Set moves to newMoves
                moves = newMoves;
            }
            return moves;
        }
        // Returns whether or not piece at specified square can attack opposing king
        // Return Type: boolean
        function canPieceTakeKing(square, boardObj, orientation) {
            let piece = boardObj[square];
            let pieceColor = piece[0].toString();
            // Assigns square position of enemy king
            let enemyKingSquare;
            if (pieceColor === "w") {
                enemyKingSquare = Object.keys(boardObj).find(key => boardObj[key] === "bK");
            }
            if (pieceColor === "b") {
                enemyKingSquare = Object.keys(boardObj).find(key => boardObj[key] === "wK");
            }
            let moves = getPreLegalMoves(square, piece, boardObj, orientation);
            return moves.includes(enemyKingSquare);
        }
        // Returns whether or not specified color team is in check or not
        // Return Type: boolean
        function isCheck(colorChar, boardObj, orientation) {
            for (let i = 0; i < Object.keys(boardObj).length; i++) {
                let gridKey = Object.keys(boardObj)[i]; // Square Position
                let piece = boardObj[gridKey];
                let pieceColor = piece[0];
                if (pieceColor != colorChar) {
                    if (canPieceTakeKing(gridKey, boardObj, orientation)) {
                        return true;
                    }
                }
            }
            return false;
        }
        // Returns whether or not specified color team is in checkmate or not
        // Return Type: boolean
        function isCheckmate(colorChar, boardObj, orientation) {
            for (let i = 0; i < Object.keys(boardObj).length; i++) {
                let gridKey = Object.keys(boardObj)[i]; // Square Position
                let piece = boardObj[gridKey];
                let pieceColor = piece[0];
                if (pieceColor === colorChar) {
                    let moveCount = getLegalMoves(gridKey, piece, boardObj, orientation).length;
                    if (moveCount > 0) {
                        return false;
                    }
                }
            }
            return true;
        }
        // Returns board with promoted chess piece
        // Return Type: Fen String
        function promote(oldBoardObj, newBoardObj, newPos, piece, orientation) {
            let enemyPiece;
            let promotingPiece = piece;
            // If piece was not taken and piece is a pawn that has reach enemy row, promote to queen
            if (!(wasPieceTaken(oldBoardObj, newBoardObj))) {
                if (orientation == "white") {
                    if (promotingPiece == "wP") {
                        // If white pawn has reach enemy row
                        if (newPos[1] == "8") {
                            // Promotes pawn to queen and returns fen string
                            newBoardObj[newPos] = "wQ";
                            return newBoardObj;
                        }
                        else {
                            return newBoardObj;
                        }
                    }
                    else if (promotingPiece == "bP") {
                        // If black pawn has reach enemy row
                        if (newPos[1] == "1") {
                            // Promotes pawn to queen and returns fen string
                            newBoardObj[newPos] = "bQ";
                            return newBoardObj;
                        }
                        else {
                            return newBoardObj;
                        }
                    }
                    else {
                        return newBoardObj;
                    }
                }
            }
            else {
                //Finds and stores enemy piece type
                for (let key in oldBoardObj) {
                    if (key === newPos) {
                        enemyPiece = oldBoardObj[key];
                    }
                    //Finds and stores current player piece type
                }
                //Still need to compare attacking and taken pieces in order to determine what rank to promote to
                if (promotingPiece == "wP" || promotingPiece == "bP") {
                    if (enemyPiece == "wN" || enemyPiece == "bN") {
                        for (let key in newBoardObj) {
                            if (key === newPos) {
                                if (promotingPiece == "wP") {
                                    newBoardObj[key] = "wB";
                                }
                                else {
                                    newBoardObj[key] = "bB";
                                }
                            }
                        }
                    }
                    else if (enemyPiece == "wQ" || enemyPiece == "bQ") {
                        for (let key in newBoardObj) {
                            if (key === newPos) {
                                if (promotingPiece == "wP") {
                                    newBoardObj[key] = "wN";
                                }
                                else {
                                    newBoardObj[key] = "bN";
                                }
                            }
                        }
                    }
                    else {
                        for (let key in newBoardObj) {
                            if (key === newPos) {
                                if (promotingPiece == "wP") {
                                    newBoardObj[key] = "wR";
                                }
                                else {
                                    newBoardObj[key] = "bR";
                                }
                            }
                        }
                    }
                }
                else if (promotingPiece == "wR" || promotingPiece == "bR") {
                    if (enemyPiece == "wQ" || enemyPiece == "bQ") {
                        for (let key in newBoardObj) {
                            if (key === newPos) {
                                if (promotingPiece == "wR") {
                                    newBoardObj[key] = "wN";
                                }
                                else {
                                    newBoardObj[key] = "bN";
                                }
                            }
                        }
                    }
                    else {
                        for (let key in newBoardObj) {
                            if (key === newPos) {
                                if (promotingPiece == "wR") {
                                    newBoardObj[key] = "wB";
                                }
                                else {
                                    newBoardObj[key] = "bB";
                                }
                            }
                        }
                    }
                }
                else if (promotingPiece == "wB" || promotingPiece == "bB") {
                    for (let key in newBoardObj) {
                        if (key === newPos) {
                            if (promotingPiece == "wB") {
                                newBoardObj[key] = "wN";
                            }
                            else {
                                newBoardObj[key] = "bN";
                            }
                        }
                    }
                }
                else {
                    for (let key in newBoardObj) {
                        if (key == newPos) {
                            if (promotingPiece == "wN") {
                                newBoardObj[key] = "wQ";
                            }
                            else if (promotingPiece == "bN") {
                                newBoardObj[key] = "bQ";
                            }
                        }
                    }
                }
                //returns the newly changed Board Object as a FEN String,
                //if No change was made then FEN will be returned unchanged
                return newBoardObj;
            }
        }
        // Returns true if a piece was taken between 2 board states
        // Return Type: boolean
        function wasPieceTaken(oldBoardObj, newBoardObj) {
            if (Object.entries(oldBoardObj).length > Object.entries(newBoardObj).length) {
                return true;
            }
            else {
                return false;
            }
        }
        // Outlines all legal moves for given pos
        // Return Type: void
        function showLegalMoves(square, piece, boardPos, orientation) {
            let legalMoves = getLegalMoves(square, piece, boardPos, orientation);
            for (let i = 0; i < legalMoves.length; i++) {
                let tempSqName = legalMoves[i];
                let squareElement = document.getElementsByClassName("square-" + tempSqName)[0];
                // Create Overlay Div
                let newElement = document.createElement('div');
                newElement.className = "legal-overlay";
                newElement.id = `${tempSqName}-overlay`;
                newElement.setAttribute("style", "background-color: springgreen; opacity: 0.4; width: 100%; height: 100%; position: relative; z-index: 0; float: right");
                squareElement.insertAdjacentElement('afterbegin', newElement);
                // Make sure each time to make all chess-piece images float above
                // TODO: See if this style attribute can be applied fewer times, rather than every method call
                let imgElements = document.getElementsByClassName('piece-417db');
                for (let i = 0; i < imgElements.length; i++) {
                    let tempElement = imgElements[i];
                    let tempAttr = tempElement.getAttribute("style");
                    tempAttr += "; z-index: 0; position: absolute;";
                    tempElement.setAttribute("style", tempAttr);
                }
            }
        }
        // Removes outlines of all legal moves for given pos
        // Return Type: void
        function hideLegalMoves(square, piece, boardPos, orientation) {
            let overlayElements = document.getElementsByClassName("legal-overlay");
            // While there is a first element in overlayElements
            while (overlayElements[0]) {
                let overlaySq = overlayElements[0];
                overlaySq.parentNode.removeChild(overlaySq);
            }
        }
        // Activates whenever player-drag move has been made
        function onDrop(source, target, piece, newPos, oldPos, orientation) {
            hideLegalMoves(source, piece, oldPos, orientation);
            let legalSpaces = getLegalMoves(source, piece, oldPos, orientation);
            let wasLegal;
            wasLegal = false;
            for (let key in legalSpaces) {
                if (target === legalSpaces[key]) {
                    wasLegal = true;
                }
            }
            if (!wasLegal) {
                return 'snapback';
            }
            else {
                numOfMoves += 1;
                service.addMoveToList(numOfMoves, piece, source, target, newPos);
                if (wasPieceTaken(oldPos, newPos)) {
                    board.position(promote(oldPos, newPos, target, piece, orientation), false);
                }
                else {
                    if (piece == "wP" || piece == "bP") {
                        board.position(promote(oldPos, newPos, target, piece, orientation), false);
                    }
                }
                setTimeout(function () {
                    let restPackage = {
                        "fenString": board.fen(),
                        "aiColor": piece[0],
                        "depth": depth,
                        "orientation": orientation
                    };
                    let aiBoardFen;
                    service.getAIMove(restPackage).subscribe(data => { });
                    console.log(aiBoardFen);
                    board.position(ChessBoard.fenToObj(aiBoardFen), true);
                }, 5000);
                return 'trash';
            }
        }
        // Activates whenever animation has occurred (AI has made move)
        function onMoveEnd(oldPos, newPos) {
        }
        //Activates whenever mouse enters square
        function onMouseoverSquare(square, piece, boardPos, orientation) {
            if (piece) {
                showLegalMoves(square, piece, boardPos, orientation);
                // console.log(isCheckmate(piece[0], boardPos, orientation));
            }
        }
        //Activates whenever mouse leaves square
        function onMouseoutSquare(square, piece, boardPos, orientation) {
            if (piece) {
                hideLegalMoves(square, piece, boardPos, orientation);
            }
        }
    }
    serviceCheck() {
    }
};
BoardComponent.ctorParameters = () => [
    { type: _promotion_service__WEBPACK_IMPORTED_MODULE_2__["PromotionService"] }
];
BoardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-board',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./board.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/board/board.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./board.component.css */ "./src/app/board/board.component.css")).default]
    })
], BoardComponent);



/***/ }),

/***/ "./src/app/move-list/move-list.component.css":
/*!***************************************************!*\
  !*** ./src/app/move-list/move-list.component.css ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vdmUtbGlzdC9tb3ZlLWxpc3QuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/move-list/move-list.component.ts":
/*!**************************************************!*\
  !*** ./src/app/move-list/move-list.component.ts ***!
  \**************************************************/
/*! exports provided: MoveListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoveListComponent", function() { return MoveListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _promotion_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../promotion.service */ "./src/app/promotion.service.ts");



let MoveListComponent = class MoveListComponent {
    constructor(promotionService) {
        this.promotionService = promotionService;
    }
    ngOnInit() {
        this.moveList = this.promotionService.getMoveList().reverse();
    }
};
MoveListComponent.ctorParameters = () => [
    { type: _promotion_service__WEBPACK_IMPORTED_MODULE_2__["PromotionService"] }
];
MoveListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-move-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./move-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/move-list/move-list.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./move-list.component.css */ "./src/app/move-list/move-list.component.css")).default]
    })
], MoveListComponent);



/***/ }),

/***/ "./src/app/promotion.service.ts":
/*!**************************************!*\
  !*** ./src/app/promotion.service.ts ***!
  \**************************************/
/*! exports provided: PromotionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PromotionService", function() { return PromotionService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let PromotionService = class PromotionService {
    constructor(http) {
        this.http = http;
        this.moves = [];
        this.urlREST = "http://localhost:8080/PromotionChessAPI/api/chess";
    }
    addMoveToList(index, chosenPiece, src, tar, newFen) {
        this.moves.push({ id: index, piece: chosenPiece, source: src, target: tar, fen: newFen });
        // console.log('addMoveToList was called!');
        // console.log(this.moves)
    }
    getMoveList() {
        return this.moves;
    }
    getAIMove(boardPackage) {
        return this.http.post(this.urlREST, boardPackage);
    }
};
PromotionService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
PromotionService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], PromotionService);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\FulgarPC\IdeaProjects\PromotionChess\src\main\angular\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map