function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/feed/feed.component.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/feed/feed.component.html ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsFeedFeedComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"signup-center-div\"></div>\n<ion-list class=\"wd100\">\n  <div *ngFor=\"let x of feeds\" class=\"tc\">\n    <div class=\"card\">\n      <ion-card class=\"m0\">\n        <img class=\"cardimage\" src=\"https://i.stack.imgur.com/y9DpT.jpg\" />\n        <ion-card-content>\n          <span class=\"fl wd100\">\n            <span class=\"card-head fs21\">{{ x.title }}</span\n            ><br />\n            <span class=\"card-text\">{{ x.body }}</span>\n          </span>\n        </ion-card-content>\n      </ion-card>\n    </div>\n  </div>\n</ion-list>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html":
  /*!***************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html ***!
    \***************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomeHomePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Feeds</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <app-feed></app-feed>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/components/feed/feed.component.scss":
  /*!*****************************************************!*\
    !*** ./src/app/components/feed/feed.component.scss ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsFeedFeedComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".fs21 {\n  font-size: 18px;\n  font-weight: 500;\n  margin-top: -3px;\n  margin-bottom: 5px;\n}\n\n.fl {\n  float: left;\n}\n\n.card-head {\n  color: black;\n  font-size: 17px;\n}\n\n.card-text {\n  color: black;\n  font-size: 11px;\n}\n\n.card {\n  width: 100%;\n  float: left;\n  padding: 0 10px;\n}\n\n.card-content-md {\n  padding-top: 5px;\n  padding-bottom: 5px;\n  font-size: 14px;\n  line-height: 1.3;\n  -webkit-padding-start: 10px;\n          padding-inline-start: 10px;\n  -webkit-padding-end: 10px;\n          padding-inline-end: 10px;\n}\n\n.cardimage {\n  height: 170px;\n  width: 100%;\n}\n\n.wd100 {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mZWVkL0Y6XFxQcm9qZWN0c1xcYWRhbWplZXRlc3Qvc3JjXFxhcHBcXGNvbXBvbmVudHNcXGZlZWRcXGZlZWQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvZmVlZC9mZWVkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQ0NGOztBRENBO0VBQ0UsV0FBQTtBQ0VGOztBRENBO0VBQ0UsWUFBQTtFQUNBLGVBQUE7QUNFRjs7QURBQTtFQUNFLFlBQUE7RUFDQSxlQUFBO0FDR0Y7O0FEQUE7RUFDRSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUNHRjs7QURBQTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSwyQkFBQTtVQUFBLDBCQUFBO0VBQ0EseUJBQUE7VUFBQSx3QkFBQTtBQ0dGOztBREFBO0VBQ0UsYUFBQTtFQUNBLFdBQUE7QUNHRjs7QURBQTtFQUNFLFdBQUE7QUNHRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZmVlZC9mZWVkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZzMjEge1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIG1hcmdpbi10b3A6IC0zcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG59XHJcbi5mbCB7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbn1cclxuXHJcbi5jYXJkLWhlYWQge1xyXG4gIGNvbG9yOiBibGFjaztcclxuICBmb250LXNpemU6IDE3cHg7XHJcbn1cclxuLmNhcmQtdGV4dCB7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIGZvbnQtc2l6ZTogMTFweDtcclxufVxyXG5cclxuLmNhcmQge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIHBhZGRpbmc6IDAgMTBweDtcclxufVxyXG5cclxuLmNhcmQtY29udGVudC1tZCB7XHJcbiAgcGFkZGluZy10b3A6IDVweDtcclxuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBsaW5lLWhlaWdodDogMS4zO1xyXG4gIHBhZGRpbmctaW5saW5lLXN0YXJ0OiAxMHB4O1xyXG4gIHBhZGRpbmctaW5saW5lLWVuZDogMTBweDtcclxufVxyXG5cclxuLmNhcmRpbWFnZSB7XHJcbiAgaGVpZ2h0OiAxNzBweDtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLndkMTAwIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG4iLCIuZnMyMSB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbWFyZ2luLXRvcDogLTNweDtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuXG4uZmwge1xuICBmbG9hdDogbGVmdDtcbn1cblxuLmNhcmQtaGVhZCB7XG4gIGNvbG9yOiBibGFjaztcbiAgZm9udC1zaXplOiAxN3B4O1xufVxuXG4uY2FyZC10ZXh0IHtcbiAgY29sb3I6IGJsYWNrO1xuICBmb250LXNpemU6IDExcHg7XG59XG5cbi5jYXJkIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGZsb2F0OiBsZWZ0O1xuICBwYWRkaW5nOiAwIDEwcHg7XG59XG5cbi5jYXJkLWNvbnRlbnQtbWQge1xuICBwYWRkaW5nLXRvcDogNXB4O1xuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjM7XG4gIHBhZGRpbmctaW5saW5lLXN0YXJ0OiAxMHB4O1xuICBwYWRkaW5nLWlubGluZS1lbmQ6IDEwcHg7XG59XG5cbi5jYXJkaW1hZ2Uge1xuICBoZWlnaHQ6IDE3MHB4O1xuICB3aWR0aDogMTAwJTtcbn1cblxuLndkMTAwIHtcbiAgd2lkdGg6IDEwMCU7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/components/feed/feed.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/components/feed/feed.component.ts ***!
    \***************************************************/

  /*! exports provided: FeedComponent */

  /***/
  function srcAppComponentsFeedFeedComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FeedComponent", function () {
      return FeedComponent;
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

    var FeedComponent = /*#__PURE__*/function () {
      function FeedComponent(http) {
        _classCallCheck(this, FeedComponent);

        this.http = http;
      }

      _createClass(FeedComponent, [{
        key: "getfeeds",
        value: function getfeeds() {
          var _this = this;

          this.http.getApi(this.http.api.feeds, true).then(function (res) {
            console.log(res);
            _this.feeds = res;
          });
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          console.log("feed component");
          this.getfeeds();
        }
      }]);

      return FeedComponent;
    }();

    FeedComponent.ctorParameters = function () {
      return [{
        type: _providers_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]
      }];
    };

    FeedComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-feed",
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./feed.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/feed/feed.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./feed.component.scss */
      "./src/app/components/feed/feed.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_providers_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]])], FeedComponent);
    /***/
  },

  /***/
  "./src/app/home/home-routing.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/home/home-routing.module.ts ***!
    \*********************************************/

  /*! exports provided: HomePageRoutingModule */

  /***/
  function srcAppHomeHomeRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomePageRoutingModule", function () {
      return HomePageRoutingModule;
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


    var _home_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./home.page */
    "./src/app/home/home.page.ts");

    var routes = [{
      path: '',
      component: _home_page__WEBPACK_IMPORTED_MODULE_3__["HomePage"]
    }];

    var HomePageRoutingModule = function HomePageRoutingModule() {
      _classCallCheck(this, HomePageRoutingModule);
    };

    HomePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], HomePageRoutingModule);
    /***/
  },

  /***/
  "./src/app/home/home.module.ts":
  /*!*************************************!*\
    !*** ./src/app/home/home.module.ts ***!
    \*************************************/

  /*! exports provided: HomePageModule */

  /***/
  function srcAppHomeHomeModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomePageModule", function () {
      return HomePageModule;
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


    var _home_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./home-routing.module */
    "./src/app/home/home-routing.module.ts");
    /* harmony import */


    var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./home.page */
    "./src/app/home/home.page.ts");
    /* harmony import */


    var _components_feed_feed_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../components/feed/feed.component */
    "./src/app/components/feed/feed.component.ts");

    var HomePageModule = function HomePageModule() {
      _classCallCheck(this, HomePageModule);
    };

    HomePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _home_routing_module__WEBPACK_IMPORTED_MODULE_5__["HomePageRoutingModule"]],
      declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"], _components_feed_feed_component__WEBPACK_IMPORTED_MODULE_7__["FeedComponent"]]
    })], HomePageModule);
    /***/
  },

  /***/
  "./src/app/home/home.page.scss":
  /*!*************************************!*\
    !*** ./src/app/home/home.page.scss ***!
    \*************************************/

  /*! exports provided: default */

  /***/
  function srcAppHomeHomePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/home/home.page.ts":
  /*!***********************************!*\
    !*** ./src/app/home/home.page.ts ***!
    \***********************************/

  /*! exports provided: HomePage */

  /***/
  function srcAppHomeHomePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomePage", function () {
      return HomePage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var HomePage = /*#__PURE__*/function () {
      function HomePage() {
        _classCallCheck(this, HomePage);
      }

      _createClass(HomePage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HomePage;
    }();

    HomePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-home',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./home.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./home.page.scss */
      "./src/app/home/home.page.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], HomePage);
    /***/
  }
}]);
//# sourceMappingURL=home-home-module-es5.js.map