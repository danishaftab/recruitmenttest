(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["signin-signin-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/signin/signin.page.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/signin/signin.page.html ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n  <div class=\"bg\">\n    <div class=\"signup-center-div pd20\">\n      <div class=\"logobox\">\n        <div class=\"logo\">\n          <ion-img class=\"logo-image\" src=\"assets/images/logo.png\"></ion-img>\n        </div>\n        <p class=\"signup-text\">Login</p>\n      </div>\n      <form [formGroup]=\"formgroup\" (ngSubmit)=\"submitForm()\" novalidate>\n        <div>\n          <label class=\"item item-input item-stacked-label\">\n            <input\n              formControlName=\"email\"\n              class=\"bg-img email mylabel\"\n              type=\"email\"\n              placeholder=\"Email\"\n            />\n          </label>\n          <ion-label\n            class=\"inputLabel validation validation-req-text-end\"\n            *ngIf=\"email.hasError('required') && isSubmitted\"\n            end\n            >Required*</ion-label\n          >\n          <ion-label\n            class=\"inputLabel validation validation-invalid-text-end\"\n            *ngIf=\"email.hasError('pattern') && isSubmitted\"\n            end\n            >Invalid email*</ion-label\n          >\n          <label class=\"item item-input item-stacked-label\">\n            <input\n              formControlName=\"password\"\n              class=\"bg-img pwd mylabel\"\n              type=\"password\"\n              placeholder=\"Password\"\n            />\n          </label>\n          <ion-label\n            class=\"inputLabel validation validation-req-text-end mb3\"\n            *ngIf=\"password.hasError('required') && isSubmitted\"\n            end\n            >Required*</ion-label\n          >\n          <ion-label\n            class=\"inputLabel validation validation-req-text-end mb3\"\n            *ngIf=\"password.hasError('minlength') && isSubmitted\"\n            end\n            >Password must be atleast of 4 digits*</ion-label\n          >\n          <ion-label\n            class=\"inputLabel validation validation-req-text-end mb3\"\n            *ngIf=\"password.hasError('maxlength') && isSubmitted\"\n            end\n            >Password must be atmost of 8 digits*</ion-label\n          >\n        </div>\n\n        <div class=\"tc\">\n          <span class=\"fr\">Forgot Password?</span>\n        </div>\n\n        <button type=\"submit\" class=\"subscribe-button\" tappable>Sign In</button>\n      </form>\n    </div>\n  </div>\n</ion-content>\n<div class=\"bottom\">\n  <div class=\"tc\">\n    <span>Don't have an account ? <span class=\"register\">Register</span></span>\n  </div>\n</div>\n");

/***/ }),

/***/ "./src/app/signin/signin-routing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/signin/signin-routing.module.ts ***!
  \*************************************************/
/*! exports provided: SigninPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SigninPageRoutingModule", function() { return SigninPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _signin_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./signin.page */ "./src/app/signin/signin.page.ts");




const routes = [
    {
        path: '',
        component: _signin_page__WEBPACK_IMPORTED_MODULE_3__["SigninPage"]
    }
];
let SigninPageRoutingModule = class SigninPageRoutingModule {
};
SigninPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SigninPageRoutingModule);



/***/ }),

/***/ "./src/app/signin/signin.module.ts":
/*!*****************************************!*\
  !*** ./src/app/signin/signin.module.ts ***!
  \*****************************************/
/*! exports provided: SigninPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SigninPageModule", function() { return SigninPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _signin_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./signin-routing.module */ "./src/app/signin/signin-routing.module.ts");
/* harmony import */ var _signin_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./signin.page */ "./src/app/signin/signin.page.ts");







let SigninPageModule = class SigninPageModule {
};
SigninPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _signin_routing_module__WEBPACK_IMPORTED_MODULE_5__["SigninPageRoutingModule"],
        ],
        declarations: [_signin_page__WEBPACK_IMPORTED_MODULE_6__["SigninPage"]],
    })
], SigninPageModule);



/***/ }),

/***/ "./src/app/signin/signin.page.scss":
/*!*****************************************!*\
  !*** ./src/app/signin/signin.page.scss ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".logo {\n  text-align: center;\n}\n\n.logo-image {\n  width: 60%;\n  margin-top: 15%;\n  text-align: center;\n  display: inline-block;\n}\n\n.logobox {\n  background: #f05d00;\n  background: linear-gradient(229deg, #f05d00 0%, #ee8300 100%);\n  width: 100%;\n  border-bottom-left-radius: 75px;\n}\n\n.bg {\n  background-color: #f8f8f8;\n  width: 100%;\n  background-repeat: no-repeat;\n  background-size: cover;\n  height: 100%;\n}\n\n.signup-center-div {\n  margin: auto;\n  width: 100%;\n  text-align: center;\n}\n\n.signup-text {\n  font-size: 20px;\n  font-weight: bold;\n  margin-top: 15px;\n  text-align: right;\n  color: white;\n  padding: 20px;\n}\n\n.subscribe-button {\n  margin-left: auto;\n  margin-right: auto;\n  color: white;\n  border-radius: 3px;\n  font-size: 16px;\n  background: #ee8300;\n  background: linear-gradient(90deg, #ee8300 0%, #f05d00 100%);\n  text-align: center;\n  padding-top: 4vw;\n  padding-bottom: 4vw;\n  width: 90%;\n  margin-top: 5%;\n  border-radius: 20px;\n}\n\n.tc {\n  width: 80%;\n  margin: auto;\n  margin-top: 5%;\n  font-size: 15px;\n  text-align: center;\n  color: #9e9e9e;\n}\n\n.fr {\n  font-weight: bold;\n  float: right;\n  font-size: 14px;\n  margin-bottom: 10px;\n}\n\n.bg-img {\n  width: 90%;\n  border: none;\n  margin-top: 8%;\n  padding: 10px;\n  border-radius: 20px;\n  padding-left: 50px;\n  font-size: 18px;\n  box-shadow: 1px 3px 9px 0px #d9ced9;\n}\n\n.email {\n  background: url('Email.png') no-repeat 5% 3px white;\n  background-size: 29px;\n}\n\n.pwd {\n  background: url('Password.png') no-repeat 5% 3px white;\n  background-size: 29px;\n}\n\n.validation {\n  width: 80%;\n  float: left;\n  text-align: left;\n  margin-left: auto;\n  color: red;\n  margin-left: 10%;\n  font-weight: bold;\n  margin-top: 2%;\n  margin-right: auto;\n}\n\n.bottom {\n  margin: auto;\n  position: fixed;\n  bottom: 20px;\n  width: 80%;\n  left: 10%;\n}\n\n.register {\n  color: #f05d00;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lnbmluL0Y6XFxQcm9qZWN0c1xcYWRhbWplZXRlc3Qvc3JjXFxhcHBcXHNpZ25pblxcc2lnbmluLnBhZ2Uuc2NzcyIsInNyYy9hcHAvc2lnbmluL3NpZ25pbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtBQ0NGOztBRENBO0VBQ0UsVUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0FDRUY7O0FEQUE7RUFDRSxtQkFBQTtFQUNBLDZEQUFBO0VBS0EsV0FBQTtFQUNBLCtCQUFBO0FDREY7O0FER0E7RUFDRSx5QkFBQTtFQUNBLFdBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtBQ0FGOztBREVBO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQ0NGOztBRENBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FDRUY7O0FEQUE7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsNERBQUE7RUFLQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0FDREY7O0FESUE7RUFDRSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FDREY7O0FER0E7RUFDRSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUNBRjs7QURHQTtFQUNFLFVBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUdBLG1DQUFBO0FDQUY7O0FERUE7RUFDRSxtREFBQTtFQUNBLHFCQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxzREFBQTtFQUNBLHFCQUFBO0FDRUY7O0FEQ0E7RUFDRSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQ0VGOztBRENBO0VBQ0UsWUFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7QUNFRjs7QURBQTtFQUNFLGNBQUE7QUNHRiIsImZpbGUiOiJzcmMvYXBwL3NpZ25pbi9zaWduaW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvZ28ge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4ubG9nby1pbWFnZSB7XHJcbiAgd2lkdGg6IDYwJTtcclxuICBtYXJnaW4tdG9wOiAxNSU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG4ubG9nb2JveCB7XHJcbiAgYmFja2dyb3VuZDogcmdiKDI0MCwgOTMsIDApO1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcclxuICAgIDIyOWRlZyxcclxuICAgIHJnYmEoMjQwLCA5MywgMCwgMSkgMCUsXHJcbiAgICByZ2JhKDIzOCwgMTMxLCAwLCAxKSAxMDAlXHJcbiAgKTtcclxuICB3aWR0aDogMTAwJTtcclxuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA3NXB4O1xyXG59XHJcbi5iZyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjhmODtcclxuICB3aWR0aDogMTAwJTtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcbi5zaWdudXAtY2VudGVyLWRpdiB7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4uc2lnbnVwLXRleHQge1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG59XHJcbi5zdWJzY3JpYmUtYnV0dG9uIHtcclxuICBtYXJnaW4tbGVmdDogYXV0bztcclxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgYmFja2dyb3VuZDogcmdiKDIzOCwgMTMxLCAwKTtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXHJcbiAgICA5MGRlZyxcclxuICAgIHJnYmEoMjM4LCAxMzEsIDAsIDEpIDAlLFxyXG4gICAgcmdiYSgyNDAsIDkzLCAwLCAxKSAxMDAlXHJcbiAgKTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcGFkZGluZy10b3A6IDR2dztcclxuICBwYWRkaW5nLWJvdHRvbTogNHZ3O1xyXG4gIHdpZHRoOiA5MCU7XHJcbiAgbWFyZ2luLXRvcDogNSU7XHJcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcclxufVxyXG5cclxuLnRjIHtcclxuICB3aWR0aDogODAlO1xyXG4gIG1hcmdpbjogYXV0bztcclxuICBtYXJnaW4tdG9wOiA1JTtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGNvbG9yOiAjOWU5ZTllO1xyXG59XHJcbi5mciB7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcblxyXG4uYmctaW1nIHtcclxuICB3aWR0aDogOTAlO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBtYXJnaW4tdG9wOiA4JTtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgcGFkZGluZy1sZWZ0OiA1MHB4O1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICAtd2Via2l0LWJveC1zaGFkb3c6IDFweCAzcHggOXB4IDBweCByZ2JhKDIxNywgMjA2LCAyMTcsIDEpO1xyXG4gIC1tb3otYm94LXNoYWRvdzogMXB4IDNweCA5cHggMHB4IHJnYmEoMjE3LCAyMDYsIDIxNywgMSk7XHJcbiAgYm94LXNoYWRvdzogMXB4IDNweCA5cHggMHB4IHJnYmEoMjE3LCAyMDYsIDIxNywgMSk7XHJcbn1cclxuLmVtYWlsIHtcclxuICBiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vYXNzZXRzL2ltYWdlcy9FbWFpbC5wbmcpIG5vLXJlcGVhdCA1JSAzcHggd2hpdGU7XHJcbiAgYmFja2dyb3VuZC1zaXplOiAyOXB4O1xyXG59XHJcbi5wd2Qge1xyXG4gIGJhY2tncm91bmQ6IHVybCguLi8uLi9hc3NldHMvaW1hZ2VzL1Bhc3N3b3JkLnBuZykgbm8tcmVwZWF0IDUlIDNweCB3aGl0ZTtcclxuICBiYWNrZ3JvdW5kLXNpemU6IDI5cHg7XHJcbn1cclxuXHJcbi52YWxpZGF0aW9uIHtcclxuICB3aWR0aDogODAlO1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgY29sb3I6IHJlZDtcclxuICBtYXJnaW4tbGVmdDogMTAlO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIG1hcmdpbi10b3A6IDIlO1xyXG4gIG1hcmdpbi1yaWdodDogYXV0bztcclxufVxyXG5cclxuLmJvdHRvbSB7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICBib3R0b206IDIwcHg7XHJcbiAgd2lkdGg6IDgwJTtcclxuICBsZWZ0OiAxMCU7XHJcbn1cclxuLnJlZ2lzdGVyIHtcclxuICBjb2xvcjogcmdiKDI0MCwgOTMsIDApO1xyXG59XHJcbiIsIi5sb2dvIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ubG9nby1pbWFnZSB7XG4gIHdpZHRoOiA2MCU7XG4gIG1hcmdpbi10b3A6IDE1JTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi5sb2dvYm94IHtcbiAgYmFja2dyb3VuZDogI2YwNWQwMDtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDIyOWRlZywgI2YwNWQwMCAwJSwgI2VlODMwMCAxMDAlKTtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDc1cHg7XG59XG5cbi5iZyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmOGY4Zjg7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5zaWdudXAtY2VudGVyLWRpdiB7XG4gIG1hcmdpbjogYXV0bztcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnNpZ251cC10ZXh0IHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbWFyZ2luLXRvcDogMTVweDtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogMjBweDtcbn1cblxuLnN1YnNjcmliZS1idXR0b24ge1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBjb2xvcjogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBiYWNrZ3JvdW5kOiAjZWU4MzAwO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICNlZTgzMDAgMCUsICNmMDVkMDAgMTAwJSk7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZy10b3A6IDR2dztcbiAgcGFkZGluZy1ib3R0b206IDR2dztcbiAgd2lkdGg6IDkwJTtcbiAgbWFyZ2luLXRvcDogNSU7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG59XG5cbi50YyB7XG4gIHdpZHRoOiA4MCU7XG4gIG1hcmdpbjogYXV0bztcbiAgbWFyZ2luLXRvcDogNSU7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogIzllOWU5ZTtcbn1cblxuLmZyIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZsb2F0OiByaWdodDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4uYmctaW1nIHtcbiAgd2lkdGg6IDkwJTtcbiAgYm9yZGVyOiBub25lO1xuICBtYXJnaW4tdG9wOiA4JTtcbiAgcGFkZGluZzogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgcGFkZGluZy1sZWZ0OiA1MHB4O1xuICBmb250LXNpemU6IDE4cHg7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMXB4IDNweCA5cHggMHB4ICNkOWNlZDk7XG4gIC1tb3otYm94LXNoYWRvdzogMXB4IDNweCA5cHggMHB4ICNkOWNlZDk7XG4gIGJveC1zaGFkb3c6IDFweCAzcHggOXB4IDBweCAjZDljZWQ5O1xufVxuXG4uZW1haWwge1xuICBiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vYXNzZXRzL2ltYWdlcy9FbWFpbC5wbmcpIG5vLXJlcGVhdCA1JSAzcHggd2hpdGU7XG4gIGJhY2tncm91bmQtc2l6ZTogMjlweDtcbn1cblxuLnB3ZCB7XG4gIGJhY2tncm91bmQ6IHVybCguLi8uLi9hc3NldHMvaW1hZ2VzL1Bhc3N3b3JkLnBuZykgbm8tcmVwZWF0IDUlIDNweCB3aGl0ZTtcbiAgYmFja2dyb3VuZC1zaXplOiAyOXB4O1xufVxuXG4udmFsaWRhdGlvbiB7XG4gIHdpZHRoOiA4MCU7XG4gIGZsb2F0OiBsZWZ0O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgY29sb3I6IHJlZDtcbiAgbWFyZ2luLWxlZnQ6IDEwJTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG1hcmdpbi10b3A6IDIlO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG59XG5cbi5ib3R0b20ge1xuICBtYXJnaW46IGF1dG87XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOiAyMHB4O1xuICB3aWR0aDogODAlO1xuICBsZWZ0OiAxMCU7XG59XG5cbi5yZWdpc3RlciB7XG4gIGNvbG9yOiAjZjA1ZDAwO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/signin/signin.page.ts":
/*!***************************************!*\
  !*** ./src/app/signin/signin.page.ts ***!
  \***************************************/
/*! exports provided: SigninPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SigninPage", function() { return SigninPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _providers_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../providers/http.service */ "./src/app/providers/http.service.ts");
/* harmony import */ var _providers_general_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../providers/general.service */ "./src/app/providers/general.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../events */ "./src/app/events.ts");







let SigninPage = class SigninPage {
    constructor(http, general, formbuilder, events, router) {
        this.http = http;
        this.general = general;
        this.formbuilder = formbuilder;
        this.events = events;
        this.router = router;
        this.check = false;
        this.isSubmitted = false;
        let EMAILPATTERN = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,63}$/i;
        this.formgroup = formbuilder.group({
            email: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].pattern(EMAILPATTERN)]],
            password: [
                "",
                [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].minLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(8)],
            ],
        });
        this.email = this.formgroup.controls["email"];
        this.password = this.formgroup.controls["password"];
        console.log("signin page");
    }
    submitForm() {
        this.isSubmitted = true;
        console.log(this.formgroup.value);
        if (!this.formgroup.valid) {
            console.log("Please provide all the required values!");
            return false;
        }
        else {
            if (this.email.value == "danish-aftab@hotmail.com" &&
                this.password.value == "123456") {
                this.general.presentToast("Logged in succesfully");
                this.router.navigate(["/tabs/home"]);
            }
            else {
                this.general.presentToast("Invalid email or password");
            }
        }
    }
    ngOnInit() { }
};
SigninPage.ctorParameters = () => [
    { type: _providers_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"] },
    { type: _providers_general_service__WEBPACK_IMPORTED_MODULE_3__["GeneralService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] },
    { type: _events__WEBPACK_IMPORTED_MODULE_6__["Events"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
SigninPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-signin",
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./signin.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/signin/signin.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./signin.page.scss */ "./src/app/signin/signin.page.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_providers_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"],
        _providers_general_service__WEBPACK_IMPORTED_MODULE_3__["GeneralService"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"],
        _events__WEBPACK_IMPORTED_MODULE_6__["Events"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
], SigninPage);



/***/ })

}]);
//# sourceMappingURL=signin-signin-module-es2015.js.map