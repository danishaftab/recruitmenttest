function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["friendslist-friendslist-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/friends/friends.component.html":
  /*!*************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/friends/friends.component.html ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsFriendsFriendsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"bg\">\n  <ion-list>\n    <ion-item *ngFor=\"let x of friends\">\n      <ion-avatar slot=\"start\">\n        <img src=\"assets/images/avatar.jpg\" />\n      </ion-avatar>\n      <ion-label>\n        <h2 class=\"username\">{{ x.name }}</h2>\n        <p class=\"mb0\">{{ x.email }}</p>\n        <p class=\"mb0\">{{ x.phone }}</p>\n      </ion-label>\n    </ion-item>\n  </ion-list>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/friendslist/friendslist.page.html":
  /*!*****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/friendslist/friendslist.page.html ***!
    \*****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppFriendslistFriendslistPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Friends List</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <app-friends></app-friends>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/components/friends/friends.component.scss":
  /*!***********************************************************!*\
    !*** ./src/app/components/friends/friends.component.scss ***!
    \***********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsFriendsFriendsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-avatar {\n  width: 16% !important;\n  height: auto !important;\n  border-radius: 10px !important;\n}\n\n.mb0 {\n  margin-bottom: 0px;\n}\n\nimg {\n  border-radius: 50px;\n  height: 60px;\n  width: 60px;\n}\n\nion-img {\n  border-radius: 10px;\n}\n\n.username {\n  color: #f05e00;\n  font-size: 13px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mcmllbmRzL0Y6XFxQcm9qZWN0c1xcYWRhbWplZXRlc3Qvc3JjXFxhcHBcXGNvbXBvbmVudHNcXGZyaWVuZHNcXGZyaWVuZHMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvZnJpZW5kcy9mcmllbmRzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UscUJBQUE7RUFDQSx1QkFBQTtFQUNBLDhCQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxrQkFBQTtBQ0VGOztBREFBO0VBRUUsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQ0VGOztBREFBO0VBQ0UsbUJBQUE7QUNHRjs7QURBQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0FDR0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2ZyaWVuZHMvZnJpZW5kcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1hdmF0YXIge1xyXG4gIHdpZHRoOiAxNiUgIWltcG9ydGFudDtcclxuICBoZWlnaHQ6IGF1dG8gIWltcG9ydGFudDtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuLm1iMCB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG59XHJcbmltZyB7XHJcbiAgLy8gYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gIGhlaWdodDogNjBweDtcclxuICB3aWR0aDogNjBweDtcclxufVxyXG5pb24taW1nIHtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG59XHJcblxyXG4udXNlcm5hbWUge1xyXG4gIGNvbG9yOiAjZjA1ZTAwO1xyXG4gIGZvbnQtc2l6ZTogMTNweDtcclxufVxyXG4iLCJpb24tYXZhdGFyIHtcbiAgd2lkdGg6IDE2JSAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IGF1dG8gIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogMTBweCAhaW1wb3J0YW50O1xufVxuXG4ubWIwIHtcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xufVxuXG5pbWcge1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICBoZWlnaHQ6IDYwcHg7XG4gIHdpZHRoOiA2MHB4O1xufVxuXG5pb24taW1nIHtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuLnVzZXJuYW1lIHtcbiAgY29sb3I6ICNmMDVlMDA7XG4gIGZvbnQtc2l6ZTogMTNweDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/components/friends/friends.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/components/friends/friends.component.ts ***!
    \*********************************************************/

  /*! exports provided: FriendsComponent */

  /***/
  function srcAppComponentsFriendsFriendsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FriendsComponent", function () {
      return FriendsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _providers_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../providers/http.service */
    "./src/app/providers/http.service.ts");

    var FriendsComponent = /*#__PURE__*/function () {
      function FriendsComponent(http) {
        _classCallCheck(this, FriendsComponent);

        this.http = http;
      }

      _createClass(FriendsComponent, [{
        key: "getfeeds",
        value: function getfeeds() {
          var _this = this;

          this.http.getApi(this.http.api.friends, true).then(function (res) {
            console.log(res);
            _this.friends = res;
          });
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          console.log("feed component");
          this.getfeeds();
        }
      }]);

      return FriendsComponent;
    }();

    FriendsComponent.ctorParameters = function () {
      return [{
        type: _providers_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]
      }];
    };

    FriendsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-friends",
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./friends.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/friends/friends.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./friends.component.scss */
      "./src/app/components/friends/friends.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_providers_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]])], FriendsComponent);
    /***/
  },

  /***/
  "./src/app/friendslist/friendslist-routing.module.ts":
  /*!***********************************************************!*\
    !*** ./src/app/friendslist/friendslist-routing.module.ts ***!
    \***********************************************************/

  /*! exports provided: FriendslistPageRoutingModule */

  /***/
  function srcAppFriendslistFriendslistRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FriendslistPageRoutingModule", function () {
      return FriendslistPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _friendslist_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./friendslist.page */
    "./src/app/friendslist/friendslist.page.ts");

    var routes = [{
      path: '',
      component: _friendslist_page__WEBPACK_IMPORTED_MODULE_3__["FriendslistPage"]
    }];

    var FriendslistPageRoutingModule = function FriendslistPageRoutingModule() {
      _classCallCheck(this, FriendslistPageRoutingModule);
    };

    FriendslistPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], FriendslistPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/friendslist/friendslist.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/friendslist/friendslist.module.ts ***!
    \***************************************************/

  /*! exports provided: FriendslistPageModule */

  /***/
  function srcAppFriendslistFriendslistModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FriendslistPageModule", function () {
      return FriendslistPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _friendslist_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./friendslist-routing.module */
    "./src/app/friendslist/friendslist-routing.module.ts");
    /* harmony import */


    var _friendslist_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./friendslist.page */
    "./src/app/friendslist/friendslist.page.ts");
    /* harmony import */


    var _components_friends_friends_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../components/friends/friends.component */
    "./src/app/components/friends/friends.component.ts");

    var FriendslistPageModule = function FriendslistPageModule() {
      _classCallCheck(this, FriendslistPageModule);
    };

    FriendslistPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _friendslist_routing_module__WEBPACK_IMPORTED_MODULE_5__["FriendslistPageRoutingModule"]],
      declarations: [_friendslist_page__WEBPACK_IMPORTED_MODULE_6__["FriendslistPage"], _components_friends_friends_component__WEBPACK_IMPORTED_MODULE_7__["FriendsComponent"]]
    })], FriendslistPageModule);
    /***/
  },

  /***/
  "./src/app/friendslist/friendslist.page.scss":
  /*!***************************************************!*\
    !*** ./src/app/friendslist/friendslist.page.scss ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppFriendslistFriendslistPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZyaWVuZHNsaXN0L2ZyaWVuZHNsaXN0LnBhZ2Uuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/friendslist/friendslist.page.ts":
  /*!*************************************************!*\
    !*** ./src/app/friendslist/friendslist.page.ts ***!
    \*************************************************/

  /*! exports provided: FriendslistPage */

  /***/
  function srcAppFriendslistFriendslistPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FriendslistPage", function () {
      return FriendslistPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var FriendslistPage = /*#__PURE__*/function () {
      function FriendslistPage() {
        _classCallCheck(this, FriendslistPage);
      }

      _createClass(FriendslistPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FriendslistPage;
    }();

    FriendslistPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-friendslist',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./friendslist.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/friendslist/friendslist.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./friendslist.page.scss */
      "./src/app/friendslist/friendslist.page.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], FriendslistPage);
    /***/
  }
}]);
//# sourceMappingURL=friendslist-friendslist-module-es5.js.map