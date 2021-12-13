(function () {
  var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17, _templateObject18, _templateObject19, _templateObject20, _templateObject21, _templateObject22, _templateObject23, _templateObject24, _templateObject25, _templateObject26, _templateObject27, _templateObject28, _templateObject29, _templateObject30, _templateObject31, _templateObject32, _templateObject33, _templateObject34, _templateObject35, _templateObject36, _templateObject37, _templateObject38, _templateObject39, _templateObject40, _templateObject41, _templateObject42, _templateObject43, _templateObject44, _templateObject45, _templateObject46, _templateObject47, _templateObject48, _templateObject49, _templateObject50, _templateObject51, _templateObject52, _templateObject53, _templateObject54, _templateObject55, _templateObject56, _templateObject57, _templateObject58, _templateObject59, _templateObject60, _templateObject61, _templateObject62, _templateObject63, _templateObject64, _templateObject65, _templateObject66, _templateObject67, _templateObject68, _templateObject69, _templateObject70, _templateObject71, _templateObject72, _templateObject73, _templateObject74, _templateObject75, _templateObject76, _templateObject77, _templateObject78, _templateObject79, _templateObject80, _templateObject81, _templateObject82, _templateObject83, _templateObject84, _templateObject85, _templateObject86, _templateObject87, _templateObject88, _templateObject89, _templateObject90, _templateObject91, _templateObject92;

  function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

  function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

  function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkfrontend"] = self["webpackChunkfrontend"] || []).push([["main"], {
    /***/
    98255:
    /*!*******************************************************!*\
      !*** ./$_lazy_route_resources/ lazy namespace object ***!
      \*******************************************************/

    /***/
    function _(module) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = 98255;
      module.exports = webpackEmptyAsyncContext;
      /***/
    },

    /***/
    90158:
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AppRoutingModule": function AppRoutingModule() {
          return (
            /* binding */
            _AppRoutingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _pages_index_index_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./pages/index/index.component */
      67479);
      /* harmony import */


      var _pages_form_form_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./pages/form/form.component */
      45804);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var routes = [{
        path: '',
        component: _pages_index_index_component__WEBPACK_IMPORTED_MODULE_0__.IndexComponent
      }, {
        path: 'new',
        component: _pages_form_form_component__WEBPACK_IMPORTED_MODULE_1__.FormComponent
      }];

      var _AppRoutingModule = function _AppRoutingModule() {
        _classCallCheck(this, _AppRoutingModule);
      };

      _AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) {
        return new (t || _AppRoutingModule)();
      };

      _AppRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
        type: _AppRoutingModule
      });
      _AppRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forRoot(routes, {
          relativeLinkResolution: 'legacy'
        })], _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](_AppRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
        });
      })();
      /***/

    },

    /***/
    55041:
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AppComponent": function AppComponent() {
          return (
            /* binding */
            _AppComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      39895);

      var _AppComponent = function _AppComponent() {
        _classCallCheck(this, _AppComponent);

        this.title = 'frontend';
      };

      _AppComponent.ɵfac = function AppComponent_Factory(t) {
        return new (t || _AppComponent)();
      };

      _AppComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _AppComponent,
        selectors: [["app-root"]],
        decls: 1,
        vars: 0,
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /***/
    },

    /***/
    36747:
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AppModule": function AppModule() {
          return (
            /* binding */
            _AppModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/platform-browser */
      39075);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./app-routing.module */
      90158);
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./app.component */
      55041);
      /* harmony import */


      var _pages_index_index_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./pages/index/index.module */
      61023);
      /* harmony import */


      var _pages_form_form_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./pages/form/form.module */
      29552);
      /* harmony import */


      var kubeflow__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! kubeflow */
      90872);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common/http */
      91841);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _AppModule = function _AppModule() {
        _classCallCheck(this, _AppModule);
      };

      _AppModule.ɵfac = function AppModule_Factory(t) {
        return new (t || _AppModule)();
      };

      _AppModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
        type: _AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
      });
      _AppModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
        providers: [],
        imports: [[_angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClientModule, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, kubeflow__WEBPACK_IMPORTED_MODULE_8__.KubeflowModule, _pages_index_index_module__WEBPACK_IMPORTED_MODULE_2__.IndexModule, _pages_form_form_module__WEBPACK_IMPORTED_MODULE_3__.FormModule]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](_AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent],
          imports: [_angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClientModule, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, kubeflow__WEBPACK_IMPORTED_MODULE_8__.KubeflowModule, _pages_index_index_module__WEBPACK_IMPORTED_MODULE_2__.IndexModule, _pages_form_form_module__WEBPACK_IMPORTED_MODULE_3__.FormModule]
        });
      })();
      /***/

    },

    /***/
    65905:
    /*!**************************************************************************************************!*\
      !*** ./src/app/pages/form/form-default/form-advanced-options/form-advanced-options.component.ts ***!
      \**************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "FormAdvancedOptionsComponent": function FormAdvancedOptionsComponent() {
          return (
            /* binding */
            _FormAdvancedOptionsComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var kubeflow__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! kubeflow */
      90872);
      /* harmony import */


      var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/slide-toggle */
      45396);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      3679);

      var _FormAdvancedOptionsComponent = /*#__PURE__*/function () {
        function _FormAdvancedOptionsComponent() {
          _classCallCheck(this, _FormAdvancedOptionsComponent);
        }

        _createClass(_FormAdvancedOptionsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return _FormAdvancedOptionsComponent;
      }();

      _FormAdvancedOptionsComponent.ɵfac = function FormAdvancedOptionsComponent_Factory(t) {
        return new (t || _FormAdvancedOptionsComponent)();
      };

      _FormAdvancedOptionsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _FormAdvancedOptionsComponent,
        selectors: [["app-form-advanced-options"]],
        inputs: {
          parentForm: "parentForm"
        },
        decls: 3,
        vars: 1,
        consts: function consts() {
          var i18n_0;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_3590993217621889922$$_______________USERS_JACOBNEYER_CHARIOT_NOTEBOOKS_FRONTEND_JUPYTER_SRC_APP_PAGES_FORM_FORM_DEFAULT_FORM_ADVANCED_OPTIONS_FORM_ADVANCED_OPTIONS_COMPONENT_TS_1 = goog.getMsg("Miscellaneous Settings");
            i18n_0 = MSG_EXTERNAL_3590993217621889922$$_______________USERS_JACOBNEYER_CHARIOT_NOTEBOOKS_FRONTEND_JUPYTER_SRC_APP_PAGES_FORM_FORM_DEFAULT_FORM_ADVANCED_OPTIONS_FORM_ADVANCED_OPTIONS_COMPONENT_TS_1;
          } else {
            i18n_0 = $localize(_templateObject || (_templateObject = _taggedTemplateLiteral([":\u241Fac184ad5119488375c501e04e46b79dbb6079cc7\u241F3590993217621889922:Miscellaneous Settings"])));
          }

          var i18n_2;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_2083240096863134960$$_______________USERS_JACOBNEYER_CHARIOT_NOTEBOOKS_FRONTEND_JUPYTER_SRC_APP_PAGES_FORM_FORM_DEFAULT_FORM_ADVANCED_OPTIONS_FORM_ADVANCED_OPTIONS_COMPONENT_TS_3 = goog.getMsg("Other possible settings to be applied to the Notebook Server.");
            i18n_2 = MSG_EXTERNAL_2083240096863134960$$_______________USERS_JACOBNEYER_CHARIOT_NOTEBOOKS_FRONTEND_JUPYTER_SRC_APP_PAGES_FORM_FORM_DEFAULT_FORM_ADVANCED_OPTIONS_FORM_ADVANCED_OPTIONS_COMPONENT_TS_3;
          } else {
            i18n_2 = $localize(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral([":\u241Faa98eb3757f779bf6bce68192b5c93831570c9ea\u241F2083240096863134960:Other possible settings to be applied to the Notebook Server."])));
          }

          var i18n_4;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_4678403269921893493$$_______________USERS_JACOBNEYER_CHARIOT_NOTEBOOKS_FRONTEND_JUPYTER_SRC_APP_PAGES_FORM_FORM_DEFAULT_FORM_ADVANCED_OPTIONS_FORM_ADVANCED_OPTIONS_COMPONENT_TS_5 = goog.getMsg(" Enable Shared Memory ");
            i18n_4 = MSG_EXTERNAL_4678403269921893493$$_______________USERS_JACOBNEYER_CHARIOT_NOTEBOOKS_FRONTEND_JUPYTER_SRC_APP_PAGES_FORM_FORM_DEFAULT_FORM_ADVANCED_OPTIONS_FORM_ADVANCED_OPTIONS_COMPONENT_TS_5;
          } else {
            i18n_4 = $localize(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral([":\u241F4f9350429574d4118ef3709016039f34a0785466\u241F4678403269921893493: Enable Shared Memory "])));
          }

          return [["title", i18n_0, "text", i18n_2, "icon", "fa:fas:cogs"], [3, "formControl"], i18n_4];
        },
        template: function FormAdvancedOptionsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "lib-form-section", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-slide-toggle", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](2, 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.parentForm.get("shm"));
          }
        },
        directives: [kubeflow__WEBPACK_IMPORTED_MODULE_1__.FormSectionComponent, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_2__.MatSlideToggle, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlDirective],
        styles: ["mat-slide-toggle[_ngcontent-%COMP%] {\n  margin-bottom: 0.6rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcm0tYWR2YW5jZWQtb3B0aW9ucy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFCQUFBO0FBQ0YiLCJmaWxlIjoiZm9ybS1hZHZhbmNlZC1vcHRpb25zLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LXNsaWRlLXRvZ2dsZSB7XG4gIG1hcmdpbi1ib3R0b206IDAuNnJlbTtcbn1cbiJdfQ== */"]
      });
      /***/
    },

    /***/
    86440:
    /*!**********************************************************************************************************!*\
      !*** ./src/app/pages/form/form-default/form-affinity-tolerations/form-affinity-tolerations.component.ts ***!
      \**********************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "FormAffinityTolerationsComponent": function FormAffinityTolerationsComponent() {
          return (
            /* binding */
            _FormAffinityTolerationsComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var kubeflow__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! kubeflow */
      90872);
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/form-field */
      98295);
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/select */
      67441);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/core */
      5015);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      38583);

      function FormAffinityTolerationsComponent_mat_option_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var affinityConfig_r2 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", affinityConfig_r2.configKey);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", affinityConfig_r2.displayName, " ");
        }
      }

      function FormAffinityTolerationsComponent_mat_option_15_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var tolerationGroup_r3 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", tolerationGroup_r3.groupKey);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", tolerationGroup_r3.displayName, " ");
        }
      }

      var _FormAffinityTolerationsComponent = /*#__PURE__*/function () {
        function _FormAffinityTolerationsComponent() {
          _classCallCheck(this, _FormAffinityTolerationsComponent);
        }

        _createClass(_FormAffinityTolerationsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return _FormAffinityTolerationsComponent;
      }();

      _FormAffinityTolerationsComponent.ɵfac = function FormAffinityTolerationsComponent_Factory(t) {
        return new (t || _FormAffinityTolerationsComponent)();
      };

      _FormAffinityTolerationsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _FormAffinityTolerationsComponent,
        selectors: [["app-form-affinity-tolerations"]],
        inputs: {
          parentForm: "parentForm",
          tolerationGroups: "tolerationGroups",
          affinityConfigs: "affinityConfigs"
        },
        decls: 16,
        vars: 4,
        consts: function consts() {
          var i18n_0;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_8653055932362710932$$_______________USERS_JACOBNEYER_CHARIOT_NOTEBOOKS_FRONTEND_JUPYTER_SRC_APP_PAGES_FORM_FORM_DEFAULT_FORM_AFFINITY_TOLERATIONS_FORM_AFFINITY_TOLERATIONS_COMPONENT_TS_1 = goog.getMsg("Affinity / Tolerations");
            i18n_0 = MSG_EXTERNAL_8653055932362710932$$_______________USERS_JACOBNEYER_CHARIOT_NOTEBOOKS_FRONTEND_JUPYTER_SRC_APP_PAGES_FORM_FORM_DEFAULT_FORM_AFFINITY_TOLERATIONS_FORM_AFFINITY_TOLERATIONS_COMPONENT_TS_1;
          } else {
            i18n_0 = $localize(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral([":\u241Fe0a31a4739749d022f9c0265ef0db1779daf3bad\u241F8653055932362710932:Affinity / Tolerations"])));
          }

          var i18n_2;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_7337798300900345155$$_______________USERS_JACOBNEYER_CHARIOT_NOTEBOOKS_FRONTEND_JUPYTER_SRC_APP_PAGES_FORM_FORM_DEFAULT_FORM_AFFINITY_TOLERATIONS_FORM_AFFINITY_TOLERATIONS_COMPONENT_TS_3 = goog.getMsg("Configure the Notebook's Affinity and Tolerations.");
            i18n_2 = MSG_EXTERNAL_7337798300900345155$$_______________USERS_JACOBNEYER_CHARIOT_NOTEBOOKS_FRONTEND_JUPYTER_SRC_APP_PAGES_FORM_FORM_DEFAULT_FORM_AFFINITY_TOLERATIONS_FORM_AFFINITY_TOLERATIONS_COMPONENT_TS_3;
          } else {
            i18n_2 = $localize(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral([":\u241Fd3f8def051f09bcd2b129a7cd61bb993fe206bce\u241F7337798300900345155:Configure the Notebook's Affinity and Tolerations."])));
          }

          var i18n_4;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_6515390795205468481$$_______________USERS_JACOBNEYER_CHARIOT_NOTEBOOKS_FRONTEND_JUPYTER_SRC_APP_PAGES_FORM_FORM_DEFAULT_FORM_AFFINITY_TOLERATIONS_FORM_AFFINITY_TOLERATIONS_COMPONENT_TS_5 = goog.getMsg(" Affinity Config ");
            i18n_4 = MSG_EXTERNAL_6515390795205468481$$_______________USERS_JACOBNEYER_CHARIOT_NOTEBOOKS_FRONTEND_JUPYTER_SRC_APP_PAGES_FORM_FORM_DEFAULT_FORM_AFFINITY_TOLERATIONS_FORM_AFFINITY_TOLERATIONS_COMPONENT_TS_5;
          } else {
            i18n_4 = $localize(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral([":\u241F633ab3500af3e54a7519377f4b6e5bc100737123\u241F6515390795205468481: Affinity Config "])));
          }

          var i18n_6;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            /**
             * @desc option None
             */
            var MSG_EXTERNAL_6252070156626006029$$_______________USERS_JACOBNEYER_CHARIOT_NOTEBOOKS_FRONTEND_JUPYTER_SRC_APP_PAGES_FORM_FORM_DEFAULT_FORM_AFFINITY_TOLERATIONS_FORM_AFFINITY_TOLERATIONS_COMPONENT_TS_7 = goog.getMsg("None");
            i18n_6 = MSG_EXTERNAL_6252070156626006029$$_______________USERS_JACOBNEYER_CHARIOT_NOTEBOOKS_FRONTEND_JUPYTER_SRC_APP_PAGES_FORM_FORM_DEFAULT_FORM_AFFINITY_TOLERATIONS_FORM_AFFINITY_TOLERATIONS_COMPONENT_TS_7;
          } else {
            i18n_6 = $localize(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral([":option None\u241Fa2f14a73f7a6e94479f67423cc51102da8d6f524\u241F6252070156626006029:None"])));
          }

          var i18n_8;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_1171476011848522716$$_______________USERS_JACOBNEYER_CHARIOT_NOTEBOOKS_FRONTEND_JUPYTER_SRC_APP_PAGES_FORM_FORM_DEFAULT_FORM_AFFINITY_TOLERATIONS_FORM_AFFINITY_TOLERATIONS_COMPONENT_TS_9 = goog.getMsg(" Tolerations Group ");
            i18n_8 = MSG_EXTERNAL_1171476011848522716$$_______________USERS_JACOBNEYER_CHARIOT_NOTEBOOKS_FRONTEND_JUPYTER_SRC_APP_PAGES_FORM_FORM_DEFAULT_FORM_AFFINITY_TOLERATIONS_FORM_AFFINITY_TOLERATIONS_COMPONENT_TS_9;
          } else {
            i18n_8 = $localize(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral([":\u241F26316693d7df543784a554fb79d00771f79a2865\u241F1171476011848522716: Tolerations Group "])));
          }

          var i18n_10;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            /**
             * @desc option None
             */
            var MSG_EXTERNAL_6252070156626006029$$_______________USERS_JACOBNEYER_CHARIOT_NOTEBOOKS_FRONTEND_JUPYTER_SRC_APP_PAGES_FORM_FORM_DEFAULT_FORM_AFFINITY_TOLERATIONS_FORM_AFFINITY_TOLERATIONS_COMPONENT_TS_11 = goog.getMsg("None");
            i18n_10 = MSG_EXTERNAL_6252070156626006029$$_______________USERS_JACOBNEYER_CHARIOT_NOTEBOOKS_FRONTEND_JUPYTER_SRC_APP_PAGES_FORM_FORM_DEFAULT_FORM_AFFINITY_TOLERATIONS_FORM_AFFINITY_TOLERATIONS_COMPONENT_TS_11;
          } else {
            i18n_10 = $localize(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral([":option None\u241Fa2f14a73f7a6e94479f67423cc51102da8d6f524\u241F6252070156626006029:None"])));
          }

          return [["title", i18n_0, "text", i18n_2, "icon", "fa:fas:bullseye"], [1, "row"], ["appearance", "outline", 1, "wide", "column"], i18n_4, [3, "formControl"], ["value", ""], i18n_6, [3, "value", 4, "ngFor", "ngForOf"], i18n_8, i18n_10, [3, "value"]];
        },
        template: function FormAffinityTolerationsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "lib-form-section", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-form-field", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](4, 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-select", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-option", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](7, 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, FormAffinityTolerationsComponent_mat_option_8_Template, 2, 2, "mat-option", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-form-field", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](11, 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-select", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-option", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](14, 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, FormAffinityTolerationsComponent_mat_option_15_Template, 2, 2, "mat-option", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.parentForm.get("affinityConfig"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.affinityConfigs);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.parentForm.get("tolerationGroup"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.tolerationGroups);
          }
        },
        directives: [kubeflow__WEBPACK_IMPORTED_MODULE_1__.FormSectionComponent, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__.MatLabel, _angular_material_select__WEBPACK_IMPORTED_MODULE_3__.MatSelect, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlDirective, _angular_material_core__WEBPACK_IMPORTED_MODULE_5__.MatOption, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb3JtLWFmZmluaXR5LXRvbGVyYXRpb25zLmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /***/
    },

    /***/
    64999:
    /*!**********************************************************************************************!*\
      !*** ./src/app/pages/form/form-default/form-configurations/form-configurations.component.ts ***!
      \**********************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "FormConfigurationsComponent": function FormConfigurationsComponent() {
          return (
            /* binding */
            _FormConfigurationsComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      10826);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var kubeflow__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! kubeflow */
      90872);
      /* harmony import */


      var src_app_services_backend_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/services/backend.service */
      90600);
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/form-field */
      98295);
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/select */
      67441);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/core */
      5015);

      function FormConfigurationsComponent_mat_option_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var config_r1 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", config_r1.label);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", config_r1.desc, " ");
        }
      }

      var _FormConfigurationsComponent = /*#__PURE__*/function () {
        function _FormConfigurationsComponent(ns, backend) {
          _classCallCheck(this, _FormConfigurationsComponent);

          this.ns = ns;
          this.backend = backend;
          this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subscription();
        }

        _createClass(_FormConfigurationsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            // Keep track of the selected namespace
            var nsSub = this.ns.getSelectedNamespace().subscribe(function (namespace) {
              // Get the PodDefaults of the new Namespace
              _this.backend.getPodDefaults(namespace).subscribe(function (pds) {
                _this.podDefaults = pds;
              });
            });
            this.subscriptions.add(nsSub);
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.subscriptions.unsubscribe();
          }
        }]);

        return _FormConfigurationsComponent;
      }();

      _FormConfigurationsComponent.ɵfac = function FormConfigurationsComponent_Factory(t) {
        return new (t || _FormConfigurationsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](kubeflow__WEBPACK_IMPORTED_MODULE_3__.NamespaceService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_backend_service__WEBPACK_IMPORTED_MODULE_0__.JWABackendService));
      };

      _FormConfigurationsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: _FormConfigurationsComponent,
        selectors: [["app-form-configurations"]],
        inputs: {
          parentForm: "parentForm"
        },
        decls: 6,
        vars: 2,
        consts: function consts() {
          var i18n_0;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_9147549536677777412$$_______________USERS_JACOBNEYER_CHARIOT_NOTEBOOKS_FRONTEND_JUPYTER_SRC_APP_PAGES_FORM_FORM_DEFAULT_FORM_CONFIGURATIONS_FORM_CONFIGURATIONS_COMPONENT_TS_1 = goog.getMsg("Configurations");
            i18n_0 = MSG_EXTERNAL_9147549536677777412$$_______________USERS_JACOBNEYER_CHARIOT_NOTEBOOKS_FRONTEND_JUPYTER_SRC_APP_PAGES_FORM_FORM_DEFAULT_FORM_CONFIGURATIONS_FORM_CONFIGURATIONS_COMPONENT_TS_1;
          } else {
            i18n_0 = $localize(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral([":\u241Fedd04e579025543c017d80558217d1e2788708df\u241F9147549536677777412:Configurations"])));
          }

          var i18n_2;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_7834035184707254021$$_______________USERS_JACOBNEYER_CHARIOT_NOTEBOOKS_FRONTEND_JUPYTER_SRC_APP_PAGES_FORM_FORM_DEFAULT_FORM_CONFIGURATIONS_FORM_CONFIGURATIONS_COMPONENT_TS_3 = goog.getMsg("Extra layers of configurations that will be applied to the new Notebook. \n        (e.g. Insert credentials as Secrets, set Environment Variables.)");
            i18n_2 = MSG_EXTERNAL_7834035184707254021$$_______________USERS_JACOBNEYER_CHARIOT_NOTEBOOKS_FRONTEND_JUPYTER_SRC_APP_PAGES_FORM_FORM_DEFAULT_FORM_CONFIGURATIONS_FORM_CONFIGURATIONS_COMPONENT_TS_3;
          } else {
            i18n_2 = $localize(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral([":\u241F63220bf4b545f3ca1f7b5215f1953b95dc3645e0\u241F7834035184707254021:Extra layers of configurations that will be applied to the new Notebook. \n        (e.g. Insert credentials as Secrets, set Environment Variables.)"])));
          }

          var i18n_4;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_5115994784318532749$$_______________USERS_JACOBNEYER_CHARIOT_NOTEBOOKS_FRONTEND_JUPYTER_SRC_APP_PAGES_FORM_FORM_DEFAULT_FORM_CONFIGURATIONS_FORM_CONFIGURATIONS_COMPONENT_TS_5 = goog.getMsg(" Configurations ");
            i18n_4 = MSG_EXTERNAL_5115994784318532749$$_______________USERS_JACOBNEYER_CHARIOT_NOTEBOOKS_FRONTEND_JUPYTER_SRC_APP_PAGES_FORM_FORM_DEFAULT_FORM_CONFIGURATIONS_FORM_CONFIGURATIONS_COMPONENT_TS_5;
          } else {
            i18n_4 = $localize(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral([":\u241Fa76f7ebd6eb4f4afd7109e574dc617f858cd2d80\u241F5115994784318532749: Configurations "])));
          }

          return [["title", i18n_0, "text", i18n_2, "icon", "fa:fas:sliders-h"], ["appearance", "outline", 1, "wide"], i18n_4, ["multiple", "", 3, "formControl"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"]];
        },
        template: function FormConfigurationsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "lib-form-section", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-form-field", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](3, 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-select", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, FormConfigurationsComponent_mat_option_5_Template, 2, 2, "mat-option", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ctx.parentForm.get("configurations"));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.podDefaults);
          }
        },
        directives: [kubeflow__WEBPACK_IMPORTED_MODULE_3__.FormSectionComponent, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__.MatLabel, _angular_material_select__WEBPACK_IMPORTED_MODULE_5__.MatSelect, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControlDirective, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_material_core__WEBPACK_IMPORTED_MODULE_8__.MatOption],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb3JtLWNvbmZpZ3VyYXRpb25zLmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /***/
    },

    /***/
    69492:
    /*!********************************************************************************!*\
      !*** ./src/app/pages/form/form-default/form-cpu-ram/form-cpu-ram.component.ts ***!
      \********************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "FormCpuRamComponent": function FormCpuRamComponent() {
          return (
            /* binding */
            _FormCpuRamComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../utils */
      3261);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var kubeflow__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! kubeflow */
      90872);
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/form-field */
      98295);
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/input */
      83166);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      3679);

      var _FormCpuRamComponent = /*#__PURE__*/function () {
        function _FormCpuRamComponent() {
          _classCallCheck(this, _FormCpuRamComponent);
        }

        _createClass(_FormCpuRamComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this2 = this;

            this.parentForm.get('cpu').valueChanges.subscribe(function (val) {
              // set cpu limit when value of the cpu request changes
              if (_this2.parentForm.get('cpuLimit').dirty) {
                return;
              }

              var cpu = _this2.parentForm.get('cpu').value;

              _this2.parentForm.get('cpuLimit').setValue((0, _utils__WEBPACK_IMPORTED_MODULE_0__.calculateLimits)(cpu, _this2.cpuLimitFactor));
            });
            this.parentForm.get('memory').valueChanges.subscribe(function (val) {
              // set memory limit when value of the memory request changes
              if (_this2.parentForm.get('memoryLimit').dirty) {
                return;
              }

              var memory = _this2.parentForm.get('memory').value;

              _this2.parentForm.get('memoryLimit').setValue((0, _utils__WEBPACK_IMPORTED_MODULE_0__.calculateLimits)(memory, _this2.memoryLimitFactor));
            });
          }
        }, {
          key: "getCPUError",
          value: function getCPUError() {}
        }, {
          key: "getRAMError",
          value: function getRAMError() {}
        }]);

        return _FormCpuRamComponent;
      }();

      _FormCpuRamComponent.ɵfac = function FormCpuRamComponent_Factory(t) {
        return new (t || _FormCpuRamComponent)();
      };

      _FormCpuRamComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: _FormCpuRamComponent,
        selectors: [["app-form-cpu-ram"]],
        inputs: {
          parentForm: "parentForm",
          readonlyCPU: "readonlyCPU",
          readonlyMemory: "readonlyMemory",
          cpuLimitFactor: "cpuLimitFactor",
          memoryLimitFactor: "memoryLimitFactor"
        },
        decls: 16,
        vars: 4,
        consts: function consts() {
          var i18n_0;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            /**
             * @desc Title for the CPU/RAM form section
             */
            var MSG_EXTERNAL_456502051508651798$$_______________USERS_JACOBNEYER_CHARIOT_NOTEBOOKS_FRONTEND_JUPYTER_SRC_APP_PAGES_FORM_FORM_DEFAULT_FORM_CPU_RAM_FORM_CPU_RAM_COMPONENT_TS_1 = goog.getMsg("CPU / RAM");
            i18n_0 = MSG_EXTERNAL_456502051508651798$$_______________USERS_JACOBNEYER_CHARIOT_NOTEBOOKS_FRONTEND_JUPYTER_SRC_APP_PAGES_FORM_FORM_DEFAULT_FORM_CPU_RAM_FORM_CPU_RAM_COMPONENT_TS_1;
          } else {
            i18n_0 = $localize(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral([":Title for the CPU/RAM form section\u241Ff22f0cf2e9846ef910c72864e8d5b62b36b81c86\u241F456502051508651798:CPU / RAM"])));
          }

          var i18n_2;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            /**
             * @desc Text for the CPU/RAM form section
             */
            var MSG_EXTERNAL_3253449456938659379$$_______________USERS_JACOBNEYER_CHARIOT_NOTEBOOKS_FRONTEND_JUPYTER_SRC_APP_PAGES_FORM_FORM_DEFAULT_FORM_CPU_RAM_FORM_CPU_RAM_COMPONENT_TS_3 = goog.getMsg("Specify the total amount of CPU and RAM reserved by your Notebook Server.\n         For CPU-intensive workloads, you can choose more than 1 CPU (e.g. 1.5).");
            i18n_2 = MSG_EXTERNAL_3253449456938659379$$_______________USERS_JACOBNEYER_CHARIOT_NOTEBOOKS_FRONTEND_JUPYTER_SRC_APP_PAGES_FORM_FORM_DEFAULT_FORM_CPU_RAM_FORM_CPU_RAM_COMPONENT_TS_3;
          } else {
            i18n_2 = $localize(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral([":Text for the CPU/RAM form section\u241F6af244dea6f7d8f929b45cd8226522d0e35d7110\u241F3253449456938659379:Specify the total amount of CPU and RAM reserved by your Notebook Server.\n         For CPU-intensive workloads, you can choose more than 1 CPU (e.g. 1.5)."])));
          }

          var i18n_4;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_4944039245822888012$$_______________USERS_JACOBNEYER_CHARIOT_NOTEBOOKS_FRONTEND_JUPYTER_SRC_APP_PAGES_FORM_FORM_DEFAULT_FORM_CPU_RAM_FORM_CPU_RAM_COMPONENT_TS_5 = goog.getMsg("Requested CPUs");
            i18n_4 = MSG_EXTERNAL_4944039245822888012$$_______________USERS_JACOBNEYER_CHARIOT_NOTEBOOKS_FRONTEND_JUPYTER_SRC_APP_PAGES_FORM_FORM_DEFAULT_FORM_CPU_RAM_FORM_CPU_RAM_COMPONENT_TS_5;
          } else {
            i18n_4 = $localize(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral([":\u241F01817bd08ce56cd2966da83498f862a5c3984cc8\u241F4944039245822888012:Requested CPUs"])));
          }

          var i18n_6;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_6062130950224244266$$_______________USERS_JACOBNEYER_CHARIOT_NOTEBOOKS_FRONTEND_JUPYTER_SRC_APP_PAGES_FORM_FORM_DEFAULT_FORM_CPU_RAM_FORM_CPU_RAM_COMPONENT_TS_7 = goog.getMsg("Requested memory in Gi");
            i18n_6 = MSG_EXTERNAL_6062130950224244266$$_______________USERS_JACOBNEYER_CHARIOT_NOTEBOOKS_FRONTEND_JUPYTER_SRC_APP_PAGES_FORM_FORM_DEFAULT_FORM_CPU_RAM_FORM_CPU_RAM_COMPONENT_TS_7;
          } else {
            i18n_6 = $localize(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral([":\u241Fc35a751936ff43637e90b7a97c69939364e32a2f\u241F6062130950224244266:Requested memory in Gi"])));
          }

          var i18n_8;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_1642621628416517504$$_______________USERS_JACOBNEYER_CHARIOT_NOTEBOOKS_FRONTEND_JUPYTER_SRC_APP_PAGES_FORM_FORM_DEFAULT_FORM_CPU_RAM_FORM_CPU_RAM_COMPONENT_TS_9 = goog.getMsg("CPU limit");
            i18n_8 = MSG_EXTERNAL_1642621628416517504$$_______________USERS_JACOBNEYER_CHARIOT_NOTEBOOKS_FRONTEND_JUPYTER_SRC_APP_PAGES_FORM_FORM_DEFAULT_FORM_CPU_RAM_FORM_CPU_RAM_COMPONENT_TS_9;
          } else {
            i18n_8 = $localize(_templateObject17 || (_templateObject17 = _taggedTemplateLiteral([":\u241Fb236d0d38ab7c46409b041002e008f28ade48e54\u241F1642621628416517504:CPU limit"])));
          }

          var i18n_10;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_5340799198017063091$$_______________USERS_JACOBNEYER_CHARIOT_NOTEBOOKS_FRONTEND_JUPYTER_SRC_APP_PAGES_FORM_FORM_DEFAULT_FORM_CPU_RAM_FORM_CPU_RAM_COMPONENT_TS_11 = goog.getMsg(" Memory limit in Gi ");
            i18n_10 = MSG_EXTERNAL_5340799198017063091$$_______________USERS_JACOBNEYER_CHARIOT_NOTEBOOKS_FRONTEND_JUPYTER_SRC_APP_PAGES_FORM_FORM_DEFAULT_FORM_CPU_RAM_FORM_CPU_RAM_COMPONENT_TS_11;
          } else {
            i18n_10 = $localize(_templateObject18 || (_templateObject18 = _taggedTemplateLiteral([":\u241F393e204f9358a7b2bb54c23a1dd6fda2d3a20fe0\u241F5340799198017063091: Memory limit in Gi "])));
          }

          return [["title", i18n_0, "text", i18n_2, "icon", "fa:fas:microchip"], [1, "row"], ["min", "0.1", "step", "0.1", "label", i18n_4, 1, "column", 3, "sizeControl"], ["min", "0.1", "step", "0.1", "label", i18n_6, 1, "column", 3, "sizeControl"], [1, "column"], ["appearance", "outline", 1, "wide"], i18n_8, ["matInput", "", "type", "number", "min", "0.1", "step", "0.1", 3, "formControl"], i18n_10];
        },
        template: function FormCpuRamComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "lib-form-section", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "lib-positive-number-input", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "lib-positive-number-input", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "lib-advanced-options");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "mat-form-field", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](9, 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "input", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "mat-form-field", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](14, 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "input", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("sizeControl", ctx.parentForm.get("cpu"));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("sizeControl", ctx.parentForm.get("memory"));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ctx.parentForm.get("cpuLimit"));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ctx.parentForm.get("memoryLimit"));
          }
        },
        directives: [kubeflow__WEBPACK_IMPORTED_MODULE_2__.FormSectionComponent, kubeflow__WEBPACK_IMPORTED_MODULE_2__.PositiveNumberInputComponent, kubeflow__WEBPACK_IMPORTED_MODULE_2__.AdvancedOptionsComponent, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_4__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.MinValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControlDirective],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb3JtLWNwdS1yYW0uY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /***/
    },

    /***/
    45524:
    /*!******************************************************************************************!*\
      !*** ./src/app/pages/form/form-default/form-data-volumes/form-data-volumes.component.ts ***!
      \******************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "FormDataVolumesComponent": function FormDataVolumesComponent() {
          return (
            /* binding */
            _FormDataVolumesComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../utils */
      3261);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var kubeflow__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! kubeflow */
      90872);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/button */
      51095);
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/icon */
      76627);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _volume_volume_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../volume/volume.component */
      24060);

      function FormDataVolumesComponent_div_5_Template(rf, ctx) {
        if (rf & 1) {
          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "app-volume", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "button", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function FormDataVolumesComponent_div_5_Template_button_click_3_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4);

            var i_r2 = restoredCtx.index;

            var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r3.deleteVol(i_r2);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "delete");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var vol_r1 = ctx.$implicit;

          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("volume", vol_r1)("notebookName", ctx_r0.parentForm.get("name").value)("namespace", ctx_r0.parentForm.get("namespace").value)("pvcs", ctx_r0.pvcs)("ephemeral", false)("defaultStorageClass", ctx_r0.defaultStorageClass);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx_r0.readonly);
        }
      }

      var _FormDataVolumesComponent = /*#__PURE__*/function () {
        function _FormDataVolumesComponent() {
          _classCallCheck(this, _FormDataVolumesComponent);
        }

        _createClass(_FormDataVolumesComponent, [{
          key: "datavols",
          get: function get() {
            var vols = this.parentForm.get('datavols');
            return vols.controls;
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "addVol",
          value: function addVol() {
            (0, _utils__WEBPACK_IMPORTED_MODULE_0__.addDataVolume)(this.parentForm);
          }
        }, {
          key: "deleteVol",
          value: function deleteVol(idx) {
            var vols = this.parentForm.get('datavols');
            vols.removeAt(idx);
            this.parentForm.updateValueAndValidity();
          }
        }]);

        return _FormDataVolumesComponent;
      }();

      _FormDataVolumesComponent.ɵfac = function FormDataVolumesComponent_Factory(t) {
        return new (t || _FormDataVolumesComponent)();
      };

      _FormDataVolumesComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: _FormDataVolumesComponent,
        selectors: [["app-form-data-volumes"]],
        inputs: {
          parentForm: "parentForm",
          readonly: "readonly",
          pvcs: "pvcs",
          defaultStorageClass: "defaultStorageClass"
        },
        decls: 6,
        vars: 3,
        consts: function consts() {
          var i18n_0;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_8559099691597110875$$_______________USERS_JACOBNEYER_CHARIOT_NOTEBOOKS_FRONTEND_JUPYTER_SRC_APP_PAGES_FORM_FORM_DEFAULT_FORM_DATA_VOLUMES_FORM_DATA_VOLUMES_COMPONENT_TS_1 = goog.getMsg("Data Volumes");
            i18n_0 = MSG_EXTERNAL_8559099691597110875$$_______________USERS_JACOBNEYER_CHARIOT_NOTEBOOKS_FRONTEND_JUPYTER_SRC_APP_PAGES_FORM_FORM_DEFAULT_FORM_DATA_VOLUMES_FORM_DATA_VOLUMES_COMPONENT_TS_1;
          } else {
            i18n_0 = $localize(_templateObject19 || (_templateObject19 = _taggedTemplateLiteral([":\u241Fcbe5b11222992396a96e6d3d8ba3e9af4cbbdd92\u241F8559099691597110875:Data Volumes"])));
          }

          var i18n_2;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_7584965577420018002$$_______________USERS_JACOBNEYER_CHARIOT_NOTEBOOKS_FRONTEND_JUPYTER_SRC_APP_PAGES_FORM_FORM_DEFAULT_FORM_DATA_VOLUMES_FORM_DATA_VOLUMES_COMPONENT_TS_3 = goog.getMsg("Configure the Volumes to be mounted as your Datasets.");
            i18n_2 = MSG_EXTERNAL_7584965577420018002$$_______________USERS_JACOBNEYER_CHARIOT_NOTEBOOKS_FRONTEND_JUPYTER_SRC_APP_PAGES_FORM_FORM_DEFAULT_FORM_DATA_VOLUMES_FORM_DATA_VOLUMES_COMPONENT_TS_3;
          } else {
            i18n_2 = $localize(_templateObject20 || (_templateObject20 = _taggedTemplateLiteral([":\u241Ff586fa68fde13b574cf55682962b36884e507d21\u241F7584965577420018002:Configure the Volumes to be mounted as your Datasets."])));
          }

          var i18n_4;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            /**
             * @desc Add data volume button text
             */
            var MSG_EXTERNAL_931963400310375020$$_______________USERS_JACOBNEYER_CHARIOT_NOTEBOOKS_FRONTEND_JUPYTER_SRC_APP_PAGES_FORM_FORM_DEFAULT_FORM_DATA_VOLUMES_FORM_DATA_VOLUMES_COMPONENT_TS_5 = goog.getMsg("{$startTagMatIcon}add{$closeTagMatIcon} ADD VOLUME ", {
              "startTagMatIcon": "\uFFFD#4\uFFFD",
              "closeTagMatIcon": "\uFFFD/#4\uFFFD"
            });
            i18n_4 = MSG_EXTERNAL_931963400310375020$$_______________USERS_JACOBNEYER_CHARIOT_NOTEBOOKS_FRONTEND_JUPYTER_SRC_APP_PAGES_FORM_FORM_DEFAULT_FORM_DATA_VOLUMES_FORM_DATA_VOLUMES_COMPONENT_TS_5;
          } else {
            i18n_4 = $localize(_templateObject21 || (_templateObject21 = _taggedTemplateLiteral([":Add data volume button text\u241F1d41bb5873bf9a2c9cfa0176d4637258953cad24\u241F931963400310375020:", ":START_TAG_MAT_ICON:add", ":CLOSE_TAG_MAT_ICON: ADD VOLUME "])), "\uFFFD#4\uFFFD", "\uFFFD/#4\uFFFD");
          }

          return [["title", i18n_0, "text", i18n_2, "icon", "fa:fas:hdd"], [3, "formGroup"], ["mat-stroked-button", "", "color", "accent", "type", "button", 1, "add-data-vol-button", 3, "disabled", "click"], i18n_4, ["class", "volume-wrapper", 4, "ngFor", "ngForOf"], [1, "volume-wrapper"], [3, "volume", "notebookName", "namespace", "pvcs", "ephemeral", "defaultStorageClass"], [1, "del-btn"], ["mat-icon-button", "", "color", "warn", "type", "button", 3, "disabled", "click"]];
        },
        template: function FormDataVolumesComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "lib-form-section", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "button", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function FormDataVolumesComponent_Template_button_click_2_listener() {
              return ctx.addVol();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵi18nStart"](3, 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵi18nEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, FormDataVolumesComponent_div_5_Template, 6, 7, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.parentForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.readonly);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.datavols);
          }
        },
        directives: [kubeflow__WEBPACK_IMPORTED_MODULE_3__.FormSectionComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_material_button__WEBPACK_IMPORTED_MODULE_5__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__.MatIcon, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _volume_volume_component__WEBPACK_IMPORTED_MODULE_1__.VolumeComponent],
        styles: [".add-data-vol-button[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n}\n\n.volume-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n}\n\n.volume-wrapper[_ngcontent-%COMP%]    > app-volume[_ngcontent-%COMP%] {\n  flex: 1 1 0px;\n  min-width: 0;\n  min-width: initial;\n  max-width: 93%;\n}\n\n.volume-wrapper[_ngcontent-%COMP%]    > .del-btn[_ngcontent-%COMP%] {\n  flex: 1 1 0px;\n  margin-top: 0.8rem;\n  margin-left: 1.5rem;\n  width: 7%;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcm0tZGF0YS12b2x1bWVzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0UsbUJBQUE7QUFBRjs7QUFHQTtFQUNFLGFBQUE7RUFDQSxXQUFBO0FBQUY7O0FBR0E7RUFDRSxhQUFBO0VBQ0EsWUFBQTtFQUFBLGtCQUFBO0VBQ0EsY0FBQTtBQUFGOztBQUdBO0VBQ0UsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7QUFBRiIsImZpbGUiOiJmb3JtLWRhdGEtdm9sdW1lcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIERhdGEgVm9sdW1lcyB3aXRoIHRoZSBEZWxldGUgYnV0dG9uXG4uYWRkLWRhdGEtdm9sLWJ1dHRvbiB7XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG59XG5cbi52b2x1bWUtd3JhcHBlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4udm9sdW1lLXdyYXBwZXIgPiBhcHAtdm9sdW1lIHtcbiAgZmxleDogMSAxIDBweDtcbiAgbWluLXdpZHRoOiBpbml0aWFsO1xuICBtYXgtd2lkdGg6IDkzJTtcbn1cblxuLnZvbHVtZS13cmFwcGVyID4gLmRlbC1idG4ge1xuICBmbGV4OiAxIDEgMHB4O1xuICBtYXJnaW4tdG9wOiAwLjhyZW07XG4gIG1hcmdpbi1sZWZ0OiAxLjVyZW07XG4gIHdpZHRoOiA3JTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuIl19 */"]
      });
      /***/
    },

    /***/
    70849:
    /*!*******************************************************************!*\
      !*** ./src/app/pages/form/form-default/form-default.component.ts ***!
      \*******************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "FormDefaultComponent": function FormDefaultComponent() {
          return (
            /* binding */
            _FormDefaultComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! rxjs */
      10826);
      /* harmony import */


      var kubeflow__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! kubeflow */
      90872);
      /* harmony import */


      var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./utils */
      3261);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var src_app_services_backend_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/services/backend.service */
      90600);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _form_name_form_name_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./form-name/form-name.component */
      74249);
      /* harmony import */


      var _form_image_form_image_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./form-image/form-image.component */
      51330);
      /* harmony import */


      var _form_cpu_ram_form_cpu_ram_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./form-cpu-ram/form-cpu-ram.component */
      69492);
      /* harmony import */


      var _form_gpus_form_gpus_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./form-gpus/form-gpus.component */
      20184);
      /* harmony import */


      var _form_workspace_volume_form_workspace_volume_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./form-workspace-volume/form-workspace-volume.component */
      34537);
      /* harmony import */


      var _form_data_volumes_form_data_volumes_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./form-data-volumes/form-data-volumes.component */
      45524);
      /* harmony import */


      var _form_configurations_form_configurations_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./form-configurations/form-configurations.component */
      64999);
      /* harmony import */


      var _form_affinity_tolerations_form_affinity_tolerations_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./form-affinity-tolerations/form-affinity-tolerations.component */
      86440);
      /* harmony import */


      var _form_advanced_options_form_advanced_options_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./form-advanced-options/form-advanced-options.component */
      65905);
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/material/button */
      51095);

      var _FormDefaultComponent = /*#__PURE__*/function () {
        function _FormDefaultComponent(namespaceService, backend, router, popup) {
          _classCallCheck(this, _FormDefaultComponent);

          this.namespaceService = namespaceService;
          this.backend = backend;
          this.router = router;
          this.popup = popup;
          this.currNamespace = '';
          this.ephemeral = false;
          this.defaultStorageclass = false;
          this.blockSubmit = false;
          this.formReady = false;
          this.pvcs = [];
          this.existingNotebooks = new Set();
          this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_11__.Subscription();
        }

        _createClass(_FormDefaultComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this3 = this;

            // Initialize the form control
            this.formCtrl = this.getFormDefaults(); // Update the form Values from the default ones

            this.backend.getConfig().subscribe(function (config) {
              if (Object.keys(config).length === 0) {
                // Don't fire on empty config
                return;
              }

              _this3.config = config;

              _this3.initFormControls(_this3.formCtrl, config);
            }); // Keep track of the selected namespace

            this.subscriptions.add(this.namespaceService.getSelectedNamespace().subscribe(function (namespace) {
              _this3.currNamespace = namespace;

              _this3.formCtrl.controls.namespace.setValue(_this3.currNamespace); // Get the PVCs of the new Namespace


              _this3.backend.getVolumes(namespace).subscribe(function (pvcs) {
                _this3.pvcs = pvcs;
              });
            })); // Check if a default StorageClass is set

            this.backend.getDefaultStorageClass().subscribe(function (defaultClass) {
              if (defaultClass.length === 0) {
                _this3.defaultStorageclass = false;

                _this3.popup.open($localize(_templateObject22 || (_templateObject22 = _taggedTemplateLiteral(["No default Storage Class is set. Can't create new Disks for the new Notebook. Please use an Existing Disk."]))), kubeflow__WEBPACK_IMPORTED_MODULE_12__.SnackType.Warning, 0);
              } else {
                _this3.defaultStorageclass = true;
              }
            });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            // Unsubscriptions
            this.subscriptions.unsubscribe();
          } // Functions for handling the Form Group of the entire Form

        }, {
          key: "getFormDefaults",
          value: function getFormDefaults() {
            return (0, _utils__WEBPACK_IMPORTED_MODULE_0__.getFormDefaults)();
          }
        }, {
          key: "initFormControls",
          value: function initFormControls(formCtrl, config) {
            (0, _utils__WEBPACK_IMPORTED_MODULE_0__.initFormControls)(formCtrl, config);
          } // Form Actions

        }, {
          key: "getSubmitNotebook",
          value: function getSubmitNotebook() {
            var notebookCopy = this.formCtrl.value;
            var notebook = JSON.parse(JSON.stringify(notebookCopy)); // Use the custom image instead

            if (notebook.customImageCheck) {
              notebook.image = notebook.customImage;
            } else if (notebook.serverType === 'group-one') {
              // Set notebook image from imageGroupOne
              notebook.image = notebook.imageGroupOne;
            } else if (notebook.serverType === 'group-two') {
              // Set notebook image from imageGroupTwo
              notebook.image = notebook.imageGroupTwo;
            } // Remove unnecessary images from the request sent to the backend


            delete notebook.imageGroupOne;
            delete notebook.imageGroupTwo; // Ensure CPU input is a string

            if (typeof notebook.cpu === 'number') {
              notebook.cpu = notebook.cpu.toString();
            } // Ensure GPU input is a string


            if (typeof notebook.gpus.num === 'number') {
              notebook.gpus.num = notebook.gpus.num.toString();
            } // Remove cpuLimit from request if null


            if (notebook.cpuLimit == null) {
              delete notebook.cpuLimit; // Ensure CPU Limit input is a string
            } else if (typeof notebook.cpuLimit === 'number') {
              notebook.cpuLimit = notebook.cpuLimit.toString();
            } // Remove memoryLimit from request if null


            if (notebook.memoryLimit == null) {
              delete notebook.memoryLimit; // Add Gi to memoryLimit
            } else if (notebook.memoryLimit) {
              notebook.memoryLimit = notebook.memoryLimit.toString() + 'Gi';
            } // Add Gi to all sizes


            if (notebook.memory) {
              notebook.memory = notebook.memory.toString() + 'Gi';
            }

            if (notebook.workspace.size) {
              notebook.workspace.size = notebook.workspace.size.toString() + 'Gi';
            }

            var _iterator = _createForOfIteratorHelper(notebook.datavols),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var vol = _step.value;

                if (vol.size) {
                  vol.size = vol.size + 'Gi';
                }
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }

            return notebook;
          }
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            var _this4 = this;

            var notebook = this.getSubmitNotebook();
            this.backend.createNotebook(notebook).subscribe(function () {
              _this4.popup.close();

              _this4.router.navigate(['/']);
            });
          }
        }, {
          key: "onCancel",
          value: function onCancel() {
            this.router.navigate(['/']);
          }
        }]);

        return _FormDefaultComponent;
      }();

      _FormDefaultComponent.ɵfac = function FormDefaultComponent_Factory(t) {
        return new (t || _FormDefaultComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](kubeflow__WEBPACK_IMPORTED_MODULE_12__.NamespaceService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](src_app_services_backend_service__WEBPACK_IMPORTED_MODULE_1__.JWABackendService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_14__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](kubeflow__WEBPACK_IMPORTED_MODULE_12__.SnackBarService));
      };

      _FormDefaultComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineComponent"]({
        type: _FormDefaultComponent,
        selectors: [["app-form-default"]],
        decls: 17,
        vars: 30,
        consts: function consts() {
          var i18n_0;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_8312379286548685207$$_______________USERS_JACOBNEYER_CHARIOT_NOTEBOOKS_FRONTEND_JUPYTER_SRC_APP_PAGES_FORM_FORM_DEFAULT_FORM_DEFAULT_COMPONENT_TS_1 = goog.getMsg(" LAUNCH ");
            i18n_0 = MSG_EXTERNAL_8312379286548685207$$_______________USERS_JACOBNEYER_CHARIOT_NOTEBOOKS_FRONTEND_JUPYTER_SRC_APP_PAGES_FORM_FORM_DEFAULT_FORM_DEFAULT_COMPONENT_TS_1;
          } else {
            i18n_0 = $localize(_templateObject23 || (_templateObject23 = _taggedTemplateLiteral([":\u241Ff90b91d2308a85dd1f7b6139f8822d7659e0e6f6\u241F8312379286548685207: LAUNCH "])));
          }

          var i18n_2;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_4224268807144446140$$_______________USERS_JACOBNEYER_CHARIOT_NOTEBOOKS_FRONTEND_JUPYTER_SRC_APP_PAGES_FORM_FORM_DEFAULT_FORM_DEFAULT_COMPONENT_TS_3 = goog.getMsg(" CANCEL ");
            i18n_2 = MSG_EXTERNAL_4224268807144446140$$_______________USERS_JACOBNEYER_CHARIOT_NOTEBOOKS_FRONTEND_JUPYTER_SRC_APP_PAGES_FORM_FORM_DEFAULT_FORM_DEFAULT_COMPONENT_TS_3;
          } else {
            i18n_2 = $localize(_templateObject24 || (_templateObject24 = _taggedTemplateLiteral([":\u241Fae582a9312e4bcbb32a62d84e47e6b1b73ffd06a\u241F4224268807144446140: CANCEL "])));
          }

          return [[1, "center-flex"], [1, "form-with-buttons"], [1, "form--card-container", "mat-elevation-z2"], ["novalidate", "", 3, "formGroup", "ngSubmit"], [3, "parentForm"], [3, "parentForm", "images", "imagesGroupOne", "imagesGroupTwo", "allowCustomImage", "hideRegistry", "hideTag"], [3, "parentForm", "readonlyCPU", "readonlyMemory", "cpuLimitFactor", "memoryLimitFactor"], [3, "parentForm", "vendors"], [3, "parentForm", "pvcs", "readonly", "defaultStorageClass"], [3, "parentForm", "affinityConfigs", "tolerationGroups"], ["mat-raised-button", "", "color", "primary", 1, "form--button-margin", 3, "disabled", "click"], i18n_0, ["mat-raised-button", "", "type", "button", 3, "click"], i18n_2];
        },
        template: function FormDefaultComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](3, "form", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("ngSubmit", function FormDefaultComponent_Template_form_ngSubmit_3_listener() {
              return ctx.onSubmit();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](4, "app-form-name-namespace", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](5, "app-form-image", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](6, "app-form-cpu-ram", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](7, "app-form-gpus", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](8, "app-form-workspace-volume", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](9, "app-form-data-volumes", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](10, "app-form-configurations", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](11, "app-form-affinity-tolerations", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](12, "app-form-advanced-options", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](13, "button", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function FormDefaultComponent_Template_button_click_13_listener() {
              return ctx.onSubmit();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵi18n"](14, 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](15, "button", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function FormDefaultComponent_Template_button_click_15_listener() {
              return ctx.onCancel();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵi18n"](16, 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("formGroup", ctx.formCtrl);

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("parentForm", ctx.formCtrl);

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("parentForm", ctx.formCtrl)("images", ctx.config == null ? null : ctx.config.image == null ? null : ctx.config.image.options)("imagesGroupOne", ctx.config == null ? null : ctx.config.imageGroupOne == null ? null : ctx.config.imageGroupOne.options)("imagesGroupTwo", ctx.config == null ? null : ctx.config.imageGroupTwo == null ? null : ctx.config.imageGroupTwo.options)("allowCustomImage", ctx.config == null ? null : ctx.config.allowCustomImage)("hideRegistry", ctx.config == null ? null : ctx.config.hideRegistry)("hideTag", ctx.config == null ? null : ctx.config.hideTag);

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("parentForm", ctx.formCtrl)("readonlyCPU", ctx.config == null ? null : ctx.config.cpu == null ? null : ctx.config.cpu.readOnly)("readonlyMemory", ctx.config == null ? null : ctx.config.memory == null ? null : ctx.config.memory.readOnly)("cpuLimitFactor", ctx.config == null ? null : ctx.config.cpu == null ? null : ctx.config.cpu.limitFactor)("memoryLimitFactor", ctx.config == null ? null : ctx.config.memory == null ? null : ctx.config.memory.limitFactor);

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("parentForm", ctx.formCtrl)("vendors", ctx.config == null ? null : ctx.config.gpus == null ? null : ctx.config.gpus.value.vendors);

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("parentForm", ctx.formCtrl)("pvcs", ctx.pvcs)("readonly", ctx.config == null ? null : ctx.config.workspaceVolume == null ? null : ctx.config.workspaceVolume.readOnly)("defaultStorageClass", ctx.defaultStorageclass);

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("parentForm", ctx.formCtrl)("pvcs", ctx.pvcs)("readonly", ctx.config == null ? null : ctx.config.dataVolumes == null ? null : ctx.config.dataVolumes.readOnly)("defaultStorageClass", ctx.defaultStorageclass);

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("parentForm", ctx.formCtrl);

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("parentForm", ctx.formCtrl)("affinityConfigs", ctx.config == null ? null : ctx.config.affinityConfig == null ? null : ctx.config.affinityConfig.options)("tolerationGroups", ctx.config == null ? null : ctx.config.tolerationGroup == null ? null : ctx.config.tolerationGroup.options);

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("parentForm", ctx.formCtrl);

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("disabled", !ctx.formCtrl.valid || ctx.blockSubmit);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_15__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormGroupDirective, _form_name_form_name_component__WEBPACK_IMPORTED_MODULE_2__.FormNameComponent, _form_image_form_image_component__WEBPACK_IMPORTED_MODULE_3__.FormImageComponent, _form_cpu_ram_form_cpu_ram_component__WEBPACK_IMPORTED_MODULE_4__.FormCpuRamComponent, _form_gpus_form_gpus_component__WEBPACK_IMPORTED_MODULE_5__.FormGpusComponent, _form_workspace_volume_form_workspace_volume_component__WEBPACK_IMPORTED_MODULE_6__.FormWorkspaceVolumeComponent, _form_data_volumes_form_data_volumes_component__WEBPACK_IMPORTED_MODULE_7__.FormDataVolumesComponent, _form_configurations_form_configurations_component__WEBPACK_IMPORTED_MODULE_8__.FormConfigurationsComponent, _form_affinity_tolerations_form_affinity_tolerations_component__WEBPACK_IMPORTED_MODULE_9__.FormAffinityTolerationsComponent, _form_advanced_options_form_advanced_options_component__WEBPACK_IMPORTED_MODULE_10__.FormAdvancedOptionsComponent, _angular_material_button__WEBPACK_IMPORTED_MODULE_16__.MatButton],
        styles: [".form--card-container[_ngcontent-%COMP%] {\n  width: 900px;\n  padding: 16px;\n  border-radius: 5px;\n  background: white;\n  margin-bottom: 12px;\n}\n\n.form-with-buttons[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n  margin-bottom: 2rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcm0tZGVmYXVsdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0FBQ0YiLCJmaWxlIjoiZm9ybS1kZWZhdWx0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvcm0tLWNhcmQtY29udGFpbmVyIHtcbiAgd2lkdGg6IDkwMHB4O1xuICBwYWRkaW5nOiAxNnB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBtYXJnaW4tYm90dG9tOiAxMnB4O1xufVxuXG4uZm9ybS13aXRoLWJ1dHRvbnMge1xuICBtYXJnaW4tdG9wOiAxcmVtO1xuICBtYXJnaW4tYm90dG9tOiAycmVtO1xufVxuIl19 */"]
      });
      /***/
    },

    /***/
    45903:
    /*!****************************************************************!*\
      !*** ./src/app/pages/form/form-default/form-default.module.ts ***!
      \****************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "FormDefaultModule": function FormDefaultModule() {
          return (
            /* binding */
            _FormDefaultModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/material/checkbox */
      7539);
      /* harmony import */


      var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/material/slide-toggle */
      45396);
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/material/icon */
      76627);
      /* harmony import */


      var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/material/button-toggle */
      42542);
      /* harmony import */


      var _form_default_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./form-default.component */
      70849);
      /* harmony import */


      var _form_name_form_name_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./form-name/form-name.component */
      74249);
      /* harmony import */


      var _form_image_form_image_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./form-image/form-image.component */
      51330);
      /* harmony import */


      var _form_cpu_ram_form_cpu_ram_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./form-cpu-ram/form-cpu-ram.component */
      69492);
      /* harmony import */


      var _form_gpus_form_gpus_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./form-gpus/form-gpus.component */
      20184);
      /* harmony import */


      var _form_advanced_options_form_advanced_options_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./form-advanced-options/form-advanced-options.component */
      65905);
      /* harmony import */


      var kubeflow__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! kubeflow */
      90872);
      /* harmony import */


      var _form_workspace_volume_form_workspace_volume_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./form-workspace-volume/form-workspace-volume.component */
      34537);
      /* harmony import */


      var _volume_volume_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./volume/volume.component */
      24060);
      /* harmony import */


      var _form_data_volumes_form_data_volumes_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./form-data-volumes/form-data-volumes.component */
      45524);
      /* harmony import */


      var _form_configurations_form_configurations_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./form-configurations/form-configurations.component */
      64999);
      /* harmony import */


      var _form_affinity_tolerations_form_affinity_tolerations_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./form-affinity-tolerations/form-affinity-tolerations.component */
      86440);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _FormDefaultModule = function _FormDefaultModule() {
        _classCallCheck(this, _FormDefaultModule);
      };

      _FormDefaultModule.ɵfac = function FormDefaultModule_Factory(t) {
        return new (t || _FormDefaultModule)();
      };

      _FormDefaultModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineNgModule"]({
        type: _FormDefaultModule
      });
      _FormDefaultModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_12__.CommonModule, kubeflow__WEBPACK_IMPORTED_MODULE_13__.FormModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_14__.MatCheckboxModule, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_15__.MatSlideToggleModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__.MatIconModule, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_17__.MatButtonToggleModule]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsetNgModuleScope"](_FormDefaultModule, {
          declarations: [_form_default_component__WEBPACK_IMPORTED_MODULE_0__.FormDefaultComponent, _form_name_form_name_component__WEBPACK_IMPORTED_MODULE_1__.FormNameComponent, _form_image_form_image_component__WEBPACK_IMPORTED_MODULE_2__.FormImageComponent, _form_cpu_ram_form_cpu_ram_component__WEBPACK_IMPORTED_MODULE_3__.FormCpuRamComponent, _form_workspace_volume_form_workspace_volume_component__WEBPACK_IMPORTED_MODULE_6__.FormWorkspaceVolumeComponent, _form_data_volumes_form_data_volumes_component__WEBPACK_IMPORTED_MODULE_8__.FormDataVolumesComponent, _volume_volume_component__WEBPACK_IMPORTED_MODULE_7__.VolumeComponent, _form_gpus_form_gpus_component__WEBPACK_IMPORTED_MODULE_4__.FormGpusComponent, _form_advanced_options_form_advanced_options_component__WEBPACK_IMPORTED_MODULE_5__.FormAdvancedOptionsComponent, _form_configurations_form_configurations_component__WEBPACK_IMPORTED_MODULE_9__.FormConfigurationsComponent, _form_affinity_tolerations_form_affinity_tolerations_component__WEBPACK_IMPORTED_MODULE_10__.FormAffinityTolerationsComponent],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.CommonModule, kubeflow__WEBPACK_IMPORTED_MODULE_13__.FormModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_14__.MatCheckboxModule, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_15__.MatSlideToggleModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__.MatIconModule, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_17__.MatButtonToggleModule],
          exports: [_form_default_component__WEBPACK_IMPORTED_MODULE_0__.FormDefaultComponent, _form_name_form_name_component__WEBPACK_IMPORTED_MODULE_1__.FormNameComponent, _form_image_form_image_component__WEBPACK_IMPORTED_MODULE_2__.FormImageComponent, _form_cpu_ram_form_cpu_ram_component__WEBPACK_IMPORTED_MODULE_3__.FormCpuRamComponent, _form_workspace_volume_form_workspace_volume_component__WEBPACK_IMPORTED_MODULE_6__.FormWorkspaceVolumeComponent, _form_data_volumes_form_data_volumes_component__WEBPACK_IMPORTED_MODULE_8__.FormDataVolumesComponent, _volume_volume_component__WEBPACK_IMPORTED_MODULE_7__.VolumeComponent, _form_gpus_form_gpus_component__WEBPACK_IMPORTED_MODULE_4__.FormGpusComponent, _form_advanced_options_form_advanced_options_component__WEBPACK_IMPORTED_MODULE_5__.FormAdvancedOptionsComponent, _form_configurations_form_configurations_component__WEBPACK_IMPORTED_MODULE_9__.FormConfigurationsComponent, _form_affinity_tolerations_form_affinity_tolerations_component__WEBPACK_IMPORTED_MODULE_10__.FormAffinityTolerationsComponent]
        });
      })();
      /***/

    },

    /***/
    20184:
    /*!**************************************************************************!*\
      !*** ./src/app/pages/form/form-default/form-gpus/form-gpus.component.ts ***!
      \**************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "FormGpusComponent": function FormGpusComponent() {
          return (
            /* binding */
            _FormGpusComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      10826);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var src_app_services_backend_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/services/backend.service */
      90600);
      /* harmony import */


      var kubeflow__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! kubeflow */
      90872);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/form-field */
      98295);
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/select */
      67441);
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/core */
      5015);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/tooltip */
      11436);

      function FormGpusComponent_mat_option_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var v_r2 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", v_r2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", v_r2, " ");
        }
      }

      function FormGpusComponent_mat_option_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var v_r3 = ctx.$implicit;

          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", v_r3.limitsKey)("matTooltip", ctx_r1.vendorTooltip(v_r3));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", v_r3.uiName, " ");
        }
      }

      var _FormGpusComponent = /*#__PURE__*/function () {
        function _FormGpusComponent(backend) {
          _classCallCheck(this, _FormGpusComponent);

          this.backend = backend;
          this.vendors = [];
          this.installedVendors = new Set();
          this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subscription();
          this.maxGPUs = 16;
          this.gpusCount = ['1', '2', '4', '8'];
        }

        _createClass(_FormGpusComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this5 = this;

            this.gpuCtrl = this.parentForm.get('gpus'); // Vendor should not be empty if the user selects GPUs num

            this.parentForm.get('gpus').get('vendor').setValidators([this.vendorWithNum()]);
            this.subscriptions.add(this.gpuCtrl.get('num').valueChanges.subscribe(function (n) {
              if (n === 'none') {
                _this5.gpuCtrl.get('vendor').disable();
              } else {
                _this5.gpuCtrl.get('vendor').enable();
              }
            }));
            this.backend.getGPUVendors().subscribe(function (vendors) {
              _this5.installedVendors = new Set(vendors);
            });
          } // Vendor handling

        }, {
          key: "vendorTooltip",
          value: function vendorTooltip(vendor) {
            return !this.installedVendors.has(vendor.limitsKey) ? $localize(_templateObject25 || (_templateObject25 = _taggedTemplateLiteral(["There are currently no ", " GPUs in you cluster."])), vendor.uiName) : '';
          } // Custom Validation

        }, {
          key: "getVendorError",
          value: function getVendorError() {
            var vendorCtrl = this.parentForm.get('gpus').get('vendor');

            if (vendorCtrl.hasError('vendorNullName')) {
              return $localize(_templateObject26 || (_templateObject26 = _taggedTemplateLiteral(["You must also specify the GPU Vendor for the assigned GPUs"])));
            }
          }
        }, {
          key: "vendorWithNum",
          value: function vendorWithNum() {
            var _this6 = this;

            // Make sure that if the user has specified a number of GPUs
            // that they also specify the GPU vendor
            return function (control) {
              var num = _this6.parentForm.get('gpus').get('num').value;

              var vendor = _this6.parentForm.get('gpus').get('vendor').value;

              if (num !== 'none' && vendor === '') {
                return {
                  vendorNullName: true
                };
              } else {
                return null;
              }
            };
          }
        }]);

        return _FormGpusComponent;
      }();

      _FormGpusComponent.ɵfac = function FormGpusComponent_Factory(t) {
        return new (t || _FormGpusComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_backend_service__WEBPACK_IMPORTED_MODULE_0__.JWABackendService));
      };

      _FormGpusComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: _FormGpusComponent,
        selectors: [["app-form-gpus"]],
        inputs: {
          parentForm: "parentForm",
          vendors: "vendors"
        },
        decls: 16,
        vars: 4,
        consts: function consts() {
          var i18n_0;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_3840111939816305457$$_______________USERS_JACOBNEYER_CHARIOT_NOTEBOOKS_FRONTEND_JUPYTER_SRC_APP_PAGES_FORM_FORM_DEFAULT_FORM_GPUS_FORM_GPUS_COMPONENT_TS_1 = goog.getMsg("GPUs");
            i18n_0 = MSG_EXTERNAL_3840111939816305457$$_______________USERS_JACOBNEYER_CHARIOT_NOTEBOOKS_FRONTEND_JUPYTER_SRC_APP_PAGES_FORM_FORM_DEFAULT_FORM_GPUS_FORM_GPUS_COMPONENT_TS_1;
          } else {
            i18n_0 = $localize(_templateObject27 || (_templateObject27 = _taggedTemplateLiteral([":\u241F126c1d5ce9129e10a0328764227f045806ab0e50\u241F3840111939816305457:GPUs"])));
          }

          var i18n_2;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_5317450464826945402$$_______________USERS_JACOBNEYER_CHARIOT_NOTEBOOKS_FRONTEND_JUPYTER_SRC_APP_PAGES_FORM_FORM_DEFAULT_FORM_GPUS_FORM_GPUS_COMPONENT_TS_3 = goog.getMsg("Specify the number and Vendor of GPUs that will be assigned to the \n        Notebook Server's Container.");
            i18n_2 = MSG_EXTERNAL_5317450464826945402$$_______________USERS_JACOBNEYER_CHARIOT_NOTEBOOKS_FRONTEND_JUPYTER_SRC_APP_PAGES_FORM_FORM_DEFAULT_FORM_GPUS_FORM_GPUS_COMPONENT_TS_3;
          } else {
            i18n_2 = $localize(_templateObject28 || (_templateObject28 = _taggedTemplateLiteral([":\u241F9e62d063b88fdd89761c29f791e7655ce93e0aef\u241F5317450464826945402:Specify the number and Vendor of GPUs that will be assigned to the \n        Notebook Server's Container."])));
          }

          var i18n_4;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_2175421158486456021$$_______________USERS_JACOBNEYER_CHARIOT_NOTEBOOKS_FRONTEND_JUPYTER_SRC_APP_PAGES_FORM_FORM_DEFAULT_FORM_GPUS_FORM_GPUS_COMPONENT_TS_5 = goog.getMsg("Number of GPUs");
            i18n_4 = MSG_EXTERNAL_2175421158486456021$$_______________USERS_JACOBNEYER_CHARIOT_NOTEBOOKS_FRONTEND_JUPYTER_SRC_APP_PAGES_FORM_FORM_DEFAULT_FORM_GPUS_FORM_GPUS_COMPONENT_TS_5;
          } else {
            i18n_4 = $localize(_templateObject29 || (_templateObject29 = _taggedTemplateLiteral([":\u241F6bc1c2ef4d2045c6f6a152e10bb00365a381c804\u241F2175421158486456021:Number of GPUs"])));
          }

          var i18n_6;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            /**
             * @desc option None
             */
            var MSG_EXTERNAL_6252070156626006029$$_______________USERS_JACOBNEYER_CHARIOT_NOTEBOOKS_FRONTEND_JUPYTER_SRC_APP_PAGES_FORM_FORM_DEFAULT_FORM_GPUS_FORM_GPUS_COMPONENT_TS_7 = goog.getMsg("None");
            i18n_6 = MSG_EXTERNAL_6252070156626006029$$_______________USERS_JACOBNEYER_CHARIOT_NOTEBOOKS_FRONTEND_JUPYTER_SRC_APP_PAGES_FORM_FORM_DEFAULT_FORM_GPUS_FORM_GPUS_COMPONENT_TS_7;
          } else {
            i18n_6 = $localize(_templateObject30 || (_templateObject30 = _taggedTemplateLiteral([":option None\u241Fa2f14a73f7a6e94479f67423cc51102da8d6f524\u241F6252070156626006029:None"])));
          }

          var i18n_8;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_4636121350345035366$$_______________USERS_JACOBNEYER_CHARIOT_NOTEBOOKS_FRONTEND_JUPYTER_SRC_APP_PAGES_FORM_FORM_DEFAULT_FORM_GPUS_FORM_GPUS_COMPONENT_TS_9 = goog.getMsg("GPU Vendor");
            i18n_8 = MSG_EXTERNAL_4636121350345035366$$_______________USERS_JACOBNEYER_CHARIOT_NOTEBOOKS_FRONTEND_JUPYTER_SRC_APP_PAGES_FORM_FORM_DEFAULT_FORM_GPUS_FORM_GPUS_COMPONENT_TS_9;
          } else {
            i18n_8 = $localize(_templateObject31 || (_templateObject31 = _taggedTemplateLiteral([":\u241Ff49d3e9fe3286f0f5d07d5323db3cd6333331489\u241F4636121350345035366:GPU Vendor"])));
          }

          return [["title", i18n_0, "text", i18n_2, "icon", "custom:gpuSectionIcon"], [1, "row", 3, "formGroup"], ["appearance", "outline", 1, "column"], i18n_4, ["matNativeControl", "", "formControlName", "num"], ["value", "none"], i18n_6, [3, "value", 4, "ngFor", "ngForOf"], i18n_8, ["matNativeControl", "", "formControlName", "vendor", "id", "gpu-vendor"], [3, "value", "matTooltip", 4, "ngFor", "ngForOf"], [3, "value"], [3, "value", "matTooltip"]];
        },
        template: function FormGpusComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "lib-form-section", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-form-field", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](4, 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "mat-select", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "mat-option", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](7, 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, FormGpusComponent_mat_option_8_Template, 2, 2, "mat-option", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "mat-form-field", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](11, 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "mat-select", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, FormGpusComponent_mat_option_13_Template, 2, 3, "mat-option", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "mat-error");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.parentForm.get("gpus"));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.gpusCount);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.vendors);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.getVendorError());
          }
        },
        directives: [kubeflow__WEBPACK_IMPORTED_MODULE_3__.FormSectionComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__.MatLabel, _angular_material_select__WEBPACK_IMPORTED_MODULE_6__.MatSelect, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName, _angular_material_core__WEBPACK_IMPORTED_MODULE_7__.MatOption, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__.MatError, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_9__.MatTooltip],
        styles: [".mat-slide-toggle[_ngcontent-%COMP%] {\n  margin-bottom: 0.6rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcm0tZ3B1cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFCQUFBO0FBQ0YiLCJmaWxlIjoiZm9ybS1ncHVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hdC1zbGlkZS10b2dnbGUge1xuICBtYXJnaW4tYm90dG9tOiAwLjZyZW07XG59XG4iXX0= */"]
      });
      /***/
    },

    /***/
    51330:
    /*!****************************************************************************!*\
      !*** ./src/app/pages/form/form-default/form-image/form-image.component.ts ***!
      \****************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "FormImageComponent": function FormImageComponent() {
          return (
            /* binding */
            _FormImageComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      10826);
      /* harmony import */


      var _app_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @app/environment */
      92340);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/icon */
      76627);
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/platform-browser */
      39075);
      /* harmony import */


      var kubeflow__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! kubeflow */
      90872);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/button-toggle */
      42542);
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/form-field */
      98295);
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/select */
      67441);
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/core */
      5015);
      /* harmony import */


      var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/checkbox */
      7539);
      /* harmony import */


      var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/tooltip */
      11436);
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/material/input */
      83166);

      function FormImageComponent_mat_checkbox_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-checkbox", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](1, 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ctx_r0.parentForm.get("customImageCheck"));
        }
      }

      function FormImageComponent_mat_form_field_10_mat_option_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var img_r6 = ctx.$implicit;

          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", img_r6)("matTooltip", img_r6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r5.imageDisplayName(img_r6), " ");
        }
      }

      function FormImageComponent_mat_form_field_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-form-field", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](2, 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-select", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, FormImageComponent_mat_form_field_10_mat_option_4_Template, 2, 3, "mat-option", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](6, 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ctx_r1.parentForm.get("image"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1.images);
        }
      }

      function FormImageComponent_mat_form_field_11_mat_option_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var img_r8 = ctx.$implicit;

          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", img_r8)("matTooltip", img_r8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r7.imageDisplayName(img_r8), " ");
        }
      }

      function FormImageComponent_mat_form_field_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-form-field", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](2, 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-select", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, FormImageComponent_mat_form_field_11_mat_option_4_Template, 2, 3, "mat-option", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](6, 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ctx_r2.parentForm.get("imageGroupOne"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r2.imagesGroupOne);
        }
      }

      function FormImageComponent_mat_form_field_12_mat_option_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var img_r10 = ctx.$implicit;

          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", img_r10)("matTooltip", img_r10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r9.imageDisplayName(img_r10), " ");
        }
      }

      function FormImageComponent_mat_form_field_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-form-field", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](2, 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-select", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, FormImageComponent_mat_form_field_12_mat_option_4_Template, 2, 3, "mat-option", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](6, 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ctx_r3.parentForm.get("imageGroupTwo"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r3.imagesGroupTwo);
        }
      }

      function FormImageComponent_mat_form_field_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-form-field", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](2, 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "input", 35, 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](6, 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ctx_r4.parentForm.get("customImage"));
        }
      }

      var _FormImageComponent = /*#__PURE__*/function () {
        function _FormImageComponent(iconRegistry, sanitizer) {
          _classCallCheck(this, _FormImageComponent);

          this.subs = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subscription();
          iconRegistry.addSvgIcon('jupyterlab', sanitizer.bypassSecurityTrustResourceUrl(_app_environment__WEBPACK_IMPORTED_MODULE_0__.environment.jupyterlabLogo));
          iconRegistry.addSvgIcon('group-one', sanitizer.bypassSecurityTrustResourceUrl(_app_environment__WEBPACK_IMPORTED_MODULE_0__.environment.groupOneLogo));
          iconRegistry.addSvgIcon('group-two', sanitizer.bypassSecurityTrustResourceUrl(_app_environment__WEBPACK_IMPORTED_MODULE_0__.environment.groupTwoLogo));
        }

        _createClass(_FormImageComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this7 = this;

            this.subs.add(this.parentForm.get('customImageCheck').valueChanges.subscribe(function (check) {
              // Make sure that the use will insert and Image value
              if (check) {
                _this7.parentForm.get('customImage').setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required);

                _this7.parentForm.get('image').setValidators([]);

                _this7.parentForm.get('imageGroupOne').setValidators([]);

                _this7.parentForm.get('imageGroupTwo').setValidators([]);
              }

              _this7.parentForm.get('serverType').valueChanges.subscribe(function (selection) {
                if (selection === 'jupyter') {
                  _this7.parentForm.get('customImage').setValidators([]);

                  _this7.parentForm.get('image').setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required);

                  _this7.parentForm.get('imageGroupOne').setValidators([]);

                  _this7.parentForm.get('imageGroupTwo').setValidators([]);
                } else if (selection === 'group-one') {
                  _this7.parentForm.get('customImage').setValidators([]);

                  _this7.parentForm.get('image').setValidators([]);

                  _this7.parentForm.get('imageGroupOne').setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required);

                  _this7.parentForm.get('imageGroupTwo').setValidators([]);
                } else if (selection === 'group-two') {
                  _this7.parentForm.get('customImage').setValidators([]);

                  _this7.parentForm.get('image').setValidators([]);

                  _this7.parentForm.get('imageGroupOne').setValidators([]);

                  _this7.parentForm.get('imageGroupTwo').setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required);
                }

                _this7.parentForm.get('image').updateValueAndValidity();

                _this7.parentForm.get('imageGroupOne').updateValueAndValidity();

                _this7.parentForm.get('imageGroupTwo').updateValueAndValidity();
              });

              _this7.parentForm.get('customImage').updateValueAndValidity();

              _this7.parentForm.get('serverType').updateValueAndValidity();
            }));
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.subs.unsubscribe();
          }
        }, {
          key: "imageDisplayName",
          value: function imageDisplayName(image) {
            var _image$split = image.split(':'),
                _image$split2 = _slicedToArray(_image$split, 2),
                name = _image$split2[0],
                _image$split2$ = _image$split2[1],
                tag = _image$split2$ === void 0 ? null : _image$split2$;

            var tokens = name.split('/');

            if (this.hideRegistry && tokens.length > 1 && tokens[0].includes('.')) {
              tokens.shift();
            }

            var displayName = tokens.join('/');

            if (!this.hideTag && tag !== null) {
              displayName = "".concat(displayName, ":").concat(tag);
            }

            return displayName;
          }
        }]);

        return _FormImageComponent;
      }();

      _FormImageComponent.ɵfac = function FormImageComponent_Factory(t) {
        return new (t || _FormImageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_icon__WEBPACK_IMPORTED_MODULE_4__.MatIconRegistry), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__.DomSanitizer));
      };

      _FormImageComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: _FormImageComponent,
        selectors: [["app-form-image"]],
        inputs: {
          parentForm: "parentForm",
          images: "images",
          imagesGroupOne: "imagesGroupOne",
          imagesGroupTwo: "imagesGroupTwo",
          allowCustomImage: "allowCustomImage",
          hideRegistry: "hideRegistry",
          hideTag: "hideTag"
        },
        decls: 26,
        vars: 7,
        consts: function consts() {
          var i18n_0;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            /**
             * @desc Title for the Image section of the form
             */
            var MSG_EXTERNAL_3012906865384504293$$_______________USERS_JACOBNEYER_CHARIOT_NOTEBOOKS_FRONTEND_JUPYTER_SRC_APP_PAGES_FORM_FORM_DEFAULT_FORM_IMAGE_FORM_IMAGE_COMPONENT_TS_1 = goog.getMsg("Image");
            i18n_0 = MSG_EXTERNAL_3012906865384504293$$_______________USERS_JACOBNEYER_CHARIOT_NOTEBOOKS_FRONTEND_JUPYTER_SRC_APP_PAGES_FORM_FORM_DEFAULT_FORM_IMAGE_FORM_IMAGE_COMPONENT_TS_1;
          } else {
            i18n_0 = $localize(_templateObject32 || (_templateObject32 = _taggedTemplateLiteral([":Title for the Image section of the form\u241Fa5f9ba9bb9faa8284bcadb1cdbc6aaf969e9c4bb\u241F3012906865384504293:Image"])));
          }

          var i18n_2;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            /**
             * @desc Text for the Image section of the form
             */
            var MSG_EXTERNAL_850361239280923184$$_______________USERS_JACOBNEYER_CHARIOT_NOTEBOOKS_FRONTEND_JUPYTER_SRC_APP_PAGES_FORM_FORM_DEFAULT_FORM_IMAGE_FORM_IMAGE_COMPONENT_TS_3 = goog.getMsg("A starter Jupyter Docker Image with a baseline deployment and typical\n        ML packages");
            i18n_2 = MSG_EXTERNAL_850361239280923184$$_______________USERS_JACOBNEYER_CHARIOT_NOTEBOOKS_FRONTEND_JUPYTER_SRC_APP_PAGES_FORM_FORM_DEFAULT_FORM_IMAGE_FORM_IMAGE_COMPONENT_TS_3;
          } else {
            i18n_2 = $localize(_templateObject33 || (_templateObject33 = _taggedTemplateLiteral([":Text for the Image section of the form\u241F1e8059172dc79be0273478003dd2e2ae465fd41b\u241F850361239280923184:A starter Jupyter Docker Image with a baseline deployment and typical\n        ML packages"])));
          }

          var i18n_4;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_939934962370125405$$_______________USERS_JACOBNEYER_CHARIOT_NOTEBOOKS_FRONTEND_JUPYTER_SRC_APP_PAGES_FORM_FORM_DEFAULT_FORM_IMAGE_FORM_IMAGE_COMPONENT_TS_5 = goog.getMsg("Image pull policy");
            i18n_4 = MSG_EXTERNAL_939934962370125405$$_______________USERS_JACOBNEYER_CHARIOT_NOTEBOOKS_FRONTEND_JUPYTER_SRC_APP_PAGES_FORM_FORM_DEFAULT_FORM_IMAGE_FORM_IMAGE_COMPONENT_TS_5;
          } else {
            i18n_4 = $localize(_templateObject34 || (_templateObject34 = _taggedTemplateLiteral([":\u241Fd8aa5559daf4007f0eff2ea4e5ea28d1ac49e105\u241F939934962370125405:Image pull policy"])));
          }

          var i18n_6;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            /**
             * @desc ImagePullPolicy: Always
             */
            var MSG_EXTERNAL_4040404765739455767$$_______________USERS_JACOBNEYER_CHARIOT_NOTEBOOKS_FRONTEND_JUPYTER_SRC_APP_PAGES_FORM_FORM_DEFAULT_FORM_IMAGE_FORM_IMAGE_COMPONENT_TS_7 = goog.getMsg(" Always ");
            i18n_6 = MSG_EXTERNAL_4040404765739455767$$_______________USERS_JACOBNEYER_CHARIOT_NOTEBOOKS_FRONTEND_JUPYTER_SRC_APP_PAGES_FORM_FORM_DEFAULT_FORM_IMAGE_FORM_IMAGE_COMPONENT_TS_7;
          } else {
            i18n_6 = $localize(_templateObject35 || (_templateObject35 = _taggedTemplateLiteral([":ImagePullPolicy: Always\u241F6408a210e22cb458fc925aad796666f5a1198662\u241F4040404765739455767: Always "], [":ImagePullPolicy\\: Always\u241F6408a210e22cb458fc925aad796666f5a1198662\u241F4040404765739455767: Always "])));
          }

          var i18n_8;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            /**
             * @desc ImagePullPolicy: IfNotPresent
             */
            var MSG_EXTERNAL_419294875390109671$$_______________USERS_JACOBNEYER_CHARIOT_NOTEBOOKS_FRONTEND_JUPYTER_SRC_APP_PAGES_FORM_FORM_DEFAULT_FORM_IMAGE_FORM_IMAGE_COMPONENT_TS_9 = goog.getMsg(" IfNotPresent ");
            i18n_8 = MSG_EXTERNAL_419294875390109671$$_______________USERS_JACOBNEYER_CHARIOT_NOTEBOOKS_FRONTEND_JUPYTER_SRC_APP_PAGES_FORM_FORM_DEFAULT_FORM_IMAGE_FORM_IMAGE_COMPONENT_TS_9;
          } else {
            i18n_8 = $localize(_templateObject36 || (_templateObject36 = _taggedTemplateLiteral([":ImagePullPolicy: IfNotPresent\u241F7a084ea40b1b4313d812cfc6c7f41333f5021c45\u241F419294875390109671: IfNotPresent "], [":ImagePullPolicy\\: IfNotPresent\u241F7a084ea40b1b4313d812cfc6c7f41333f5021c45\u241F419294875390109671: IfNotPresent "])));
          }

          var i18n_10;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            /**
             * @desc ImagePullPolicy: Never
             */
            var MSG_EXTERNAL_1115993704646362951$$_______________USERS_JACOBNEYER_CHARIOT_NOTEBOOKS_FRONTEND_JUPYTER_SRC_APP_PAGES_FORM_FORM_DEFAULT_FORM_IMAGE_FORM_IMAGE_COMPONENT_TS_11 = goog.getMsg(" Never ");
            i18n_10 = MSG_EXTERNAL_1115993704646362951$$_______________USERS_JACOBNEYER_CHARIOT_NOTEBOOKS_FRONTEND_JUPYTER_SRC_APP_PAGES_FORM_FORM_DEFAULT_FORM_IMAGE_FORM_IMAGE_COMPONENT_TS_11;
          } else {
            i18n_10 = $localize(_templateObject37 || (_templateObject37 = _taggedTemplateLiteral([":ImagePullPolicy: Never\u241F414e175f751673aebbcac9ac0ee64fb16c508e8d\u241F1115993704646362951: Never "], [":ImagePullPolicy\\: Never\u241F414e175f751673aebbcac9ac0ee64fb16c508e8d\u241F1115993704646362951: Never "])));
          }

          var i18n_12;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_6395134205563672303$$_______________USERS_JACOBNEYER_CHARIOT_NOTEBOOKS_FRONTEND_JUPYTER_SRC_APP_PAGES_FORM_FORM_DEFAULT_FORM_IMAGE_FORM_IMAGE_COMPONENT_TS__13 = goog.getMsg(" Custom Image ");
            i18n_12 = MSG_EXTERNAL_6395134205563672303$$_______________USERS_JACOBNEYER_CHARIOT_NOTEBOOKS_FRONTEND_JUPYTER_SRC_APP_PAGES_FORM_FORM_DEFAULT_FORM_IMAGE_FORM_IMAGE_COMPONENT_TS__13;
          } else {
            i18n_12 = $localize(_templateObject38 || (_templateObject38 = _taggedTemplateLiteral([":\u241F059242c0f52aaeff3ed373739d818de15acc9751\u241F6395134205563672303: Custom Image "])));
          }

          var i18n_14;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_3012906865384504293$$_______________USERS_JACOBNEYER_CHARIOT_NOTEBOOKS_FRONTEND_JUPYTER_SRC_APP_PAGES_FORM_FORM_DEFAULT_FORM_IMAGE_FORM_IMAGE_COMPONENT_TS__15 = goog.getMsg("Image");
            i18n_14 = MSG_EXTERNAL_3012906865384504293$$_______________USERS_JACOBNEYER_CHARIOT_NOTEBOOKS_FRONTEND_JUPYTER_SRC_APP_PAGES_FORM_FORM_DEFAULT_FORM_IMAGE_FORM_IMAGE_COMPONENT_TS__15;
          } else {
            i18n_14 = $localize(_templateObject39 || (_templateObject39 = _taggedTemplateLiteral([":\u241Fa5f9ba9bb9faa8284bcadb1cdbc6aaf969e9c4bb\u241F3012906865384504293:Image"])));
          }

          var i18n_16;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_5875415455432432790$$_______________USERS_JACOBNEYER_CHARIOT_NOTEBOOKS_FRONTEND_JUPYTER_SRC_APP_PAGES_FORM_FORM_DEFAULT_FORM_IMAGE_FORM_IMAGE_COMPONENT_TS__17 = goog.getMsg("Docker Image");
            i18n_16 = MSG_EXTERNAL_5875415455432432790$$_______________USERS_JACOBNEYER_CHARIOT_NOTEBOOKS_FRONTEND_JUPYTER_SRC_APP_PAGES_FORM_FORM_DEFAULT_FORM_IMAGE_FORM_IMAGE_COMPONENT_TS__17;
          } else {
            i18n_16 = $localize(_templateObject40 || (_templateObject40 = _taggedTemplateLiteral([":\u241F1f35754236a77f283c76f144f8ca55a2590b2897\u241F5875415455432432790:Docker Image"])));
          }

          var i18n_18;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_3095176897800627036$$_______________USERS_JACOBNEYER_CHARIOT_NOTEBOOKS_FRONTEND_JUPYTER_SRC_APP_PAGES_FORM_FORM_DEFAULT_FORM_IMAGE_FORM_IMAGE_COMPONENT_TS__19 = goog.getMsg("Please provide an Image to use");
            i18n_18 = MSG_EXTERNAL_3095176897800627036$$_______________USERS_JACOBNEYER_CHARIOT_NOTEBOOKS_FRONTEND_JUPYTER_SRC_APP_PAGES_FORM_FORM_DEFAULT_FORM_IMAGE_FORM_IMAGE_COMPONENT_TS__19;
          } else {
            i18n_18 = $localize(_templateObject41 || (_templateObject41 = _taggedTemplateLiteral([":\u241F817830b30c16a82f008858d8f7a6d64e7826a2b2\u241F3095176897800627036:Please provide an Image to use"])));
          }

          var i18n_20;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_3012906865384504293$$_______________USERS_JACOBNEYER_CHARIOT_NOTEBOOKS_FRONTEND_JUPYTER_SRC_APP_PAGES_FORM_FORM_DEFAULT_FORM_IMAGE_FORM_IMAGE_COMPONENT_TS__21 = goog.getMsg("Image");
            i18n_20 = MSG_EXTERNAL_3012906865384504293$$_______________USERS_JACOBNEYER_CHARIOT_NOTEBOOKS_FRONTEND_JUPYTER_SRC_APP_PAGES_FORM_FORM_DEFAULT_FORM_IMAGE_FORM_IMAGE_COMPONENT_TS__21;
          } else {
            i18n_20 = $localize(_templateObject42 || (_templateObject42 = _taggedTemplateLiteral([":\u241Fa5f9ba9bb9faa8284bcadb1cdbc6aaf969e9c4bb\u241F3012906865384504293:Image"])));
          }

          var i18n_22;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_5875415455432432790$$_______________USERS_JACOBNEYER_CHARIOT_NOTEBOOKS_FRONTEND_JUPYTER_SRC_APP_PAGES_FORM_FORM_DEFAULT_FORM_IMAGE_FORM_IMAGE_COMPONENT_TS__23 = goog.getMsg("Docker Image");
            i18n_22 = MSG_EXTERNAL_5875415455432432790$$_______________USERS_JACOBNEYER_CHARIOT_NOTEBOOKS_FRONTEND_JUPYTER_SRC_APP_PAGES_FORM_FORM_DEFAULT_FORM_IMAGE_FORM_IMAGE_COMPONENT_TS__23;
          } else {
            i18n_22 = $localize(_templateObject43 || (_templateObject43 = _taggedTemplateLiteral([":\u241F1f35754236a77f283c76f144f8ca55a2590b2897\u241F5875415455432432790:Docker Image"])));
          }

          var i18n_24;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_3095176897800627036$$_______________USERS_JACOBNEYER_CHARIOT_NOTEBOOKS_FRONTEND_JUPYTER_SRC_APP_PAGES_FORM_FORM_DEFAULT_FORM_IMAGE_FORM_IMAGE_COMPONENT_TS__25 = goog.getMsg("Please provide an Image to use");
            i18n_24 = MSG_EXTERNAL_3095176897800627036$$_______________USERS_JACOBNEYER_CHARIOT_NOTEBOOKS_FRONTEND_JUPYTER_SRC_APP_PAGES_FORM_FORM_DEFAULT_FORM_IMAGE_FORM_IMAGE_COMPONENT_TS__25;
          } else {
            i18n_24 = $localize(_templateObject44 || (_templateObject44 = _taggedTemplateLiteral([":\u241F817830b30c16a82f008858d8f7a6d64e7826a2b2\u241F3095176897800627036:Please provide an Image to use"])));
          }

          var i18n_26;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_3012906865384504293$$_______________USERS_JACOBNEYER_CHARIOT_NOTEBOOKS_FRONTEND_JUPYTER_SRC_APP_PAGES_FORM_FORM_DEFAULT_FORM_IMAGE_FORM_IMAGE_COMPONENT_TS__27 = goog.getMsg("Image");
            i18n_26 = MSG_EXTERNAL_3012906865384504293$$_______________USERS_JACOBNEYER_CHARIOT_NOTEBOOKS_FRONTEND_JUPYTER_SRC_APP_PAGES_FORM_FORM_DEFAULT_FORM_IMAGE_FORM_IMAGE_COMPONENT_TS__27;
          } else {
            i18n_26 = $localize(_templateObject45 || (_templateObject45 = _taggedTemplateLiteral([":\u241Fa5f9ba9bb9faa8284bcadb1cdbc6aaf969e9c4bb\u241F3012906865384504293:Image"])));
          }

          var i18n_28;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_5875415455432432790$$_______________USERS_JACOBNEYER_CHARIOT_NOTEBOOKS_FRONTEND_JUPYTER_SRC_APP_PAGES_FORM_FORM_DEFAULT_FORM_IMAGE_FORM_IMAGE_COMPONENT_TS__29 = goog.getMsg("Docker Image");
            i18n_28 = MSG_EXTERNAL_5875415455432432790$$_______________USERS_JACOBNEYER_CHARIOT_NOTEBOOKS_FRONTEND_JUPYTER_SRC_APP_PAGES_FORM_FORM_DEFAULT_FORM_IMAGE_FORM_IMAGE_COMPONENT_TS__29;
          } else {
            i18n_28 = $localize(_templateObject46 || (_templateObject46 = _taggedTemplateLiteral([":\u241F1f35754236a77f283c76f144f8ca55a2590b2897\u241F5875415455432432790:Docker Image"])));
          }

          var i18n_30;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_3095176897800627036$$_______________USERS_JACOBNEYER_CHARIOT_NOTEBOOKS_FRONTEND_JUPYTER_SRC_APP_PAGES_FORM_FORM_DEFAULT_FORM_IMAGE_FORM_IMAGE_COMPONENT_TS__31 = goog.getMsg("Please provide an Image to use");
            i18n_30 = MSG_EXTERNAL_3095176897800627036$$_______________USERS_JACOBNEYER_CHARIOT_NOTEBOOKS_FRONTEND_JUPYTER_SRC_APP_PAGES_FORM_FORM_DEFAULT_FORM_IMAGE_FORM_IMAGE_COMPONENT_TS__31;
          } else {
            i18n_30 = $localize(_templateObject47 || (_templateObject47 = _taggedTemplateLiteral([":\u241F817830b30c16a82f008858d8f7a6d64e7826a2b2\u241F3095176897800627036:Please provide an Image to use"])));
          }

          var i18n_32;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_6572562220695316082$$_______________USERS_JACOBNEYER_CHARIOT_NOTEBOOKS_FRONTEND_JUPYTER_SRC_APP_PAGES_FORM_FORM_DEFAULT_FORM_IMAGE_FORM_IMAGE_COMPONENT_TS__33 = goog.getMsg("Custom Image");
            i18n_32 = MSG_EXTERNAL_6572562220695316082$$_______________USERS_JACOBNEYER_CHARIOT_NOTEBOOKS_FRONTEND_JUPYTER_SRC_APP_PAGES_FORM_FORM_DEFAULT_FORM_IMAGE_FORM_IMAGE_COMPONENT_TS__33;
          } else {
            i18n_32 = $localize(_templateObject48 || (_templateObject48 = _taggedTemplateLiteral([":\u241F2f0e016d5caf4e42f1b6f60dc9fe80e2b98f5287\u241F6572562220695316082:Custom Image"])));
          }

          var i18n_34;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_3095176897800627036$$_______________USERS_JACOBNEYER_CHARIOT_NOTEBOOKS_FRONTEND_JUPYTER_SRC_APP_PAGES_FORM_FORM_DEFAULT_FORM_IMAGE_FORM_IMAGE_COMPONENT_TS__35 = goog.getMsg("Please provide an Image to use");
            i18n_34 = MSG_EXTERNAL_3095176897800627036$$_______________USERS_JACOBNEYER_CHARIOT_NOTEBOOKS_FRONTEND_JUPYTER_SRC_APP_PAGES_FORM_FORM_DEFAULT_FORM_IMAGE_FORM_IMAGE_COMPONENT_TS__35;
          } else {
            i18n_34 = $localize(_templateObject49 || (_templateObject49 = _taggedTemplateLiteral([":\u241F817830b30c16a82f008858d8f7a6d64e7826a2b2\u241F3095176897800627036:Please provide an Image to use"])));
          }

          return [["title", i18n_0, "text", i18n_2, "icon", "fa:fab:docker"], [1, "flex-column"], [3, "formControl", 4, "ngIf"], ["attr.aria-label", "Server Type", 1, "server-type-wrapper", 3, "formControl"], ["value", "jupyter", "attr.aria-label", "Use JupyterLab based server"], ["svgIcon", "jupyterlab", 1, "server-type"], ["value", "group-one", "attr.aria-label", "Use Group One based server"], ["svgIcon", "group-one", 1, "server-type"], ["value", "group-two", "attr.aria-label", "Use Group Two based server"], ["svgIcon", "group-two", 1, "server-type"], ["class", "wide", "appearance", "outline", 4, "ngIf"], [1, "row"], ["appearance", "outline", 1, "column"], i18n_4, [3, "formControl"], ["value", "Always"], i18n_6, ["value", "IfNotPresent"], i18n_8, ["value", "Never"], i18n_10, i18n_12, ["appearance", "outline", 1, "wide"], i18n_14, ["placeholder", i18n_16, 3, "formControl"], [3, "value", "matTooltip", 4, "ngFor", "ngForOf"], i18n_18, [3, "value", "matTooltip"], i18n_20, ["placeholder", i18n_22, 3, "formControl"], i18n_24, i18n_26, ["placeholder", i18n_28, 3, "formControl"], i18n_30, i18n_32, ["matInput", "", "placeholder", "Provide a custom Image", 3, "formControl"], ["cstmimg", ""], i18n_34];
        },
        template: function FormImageComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "lib-form-section", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, FormImageComponent_mat_checkbox_2_Template, 2, 1, "mat-checkbox", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-button-toggle-group", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-button-toggle", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "mat-icon", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "mat-button-toggle", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "mat-icon", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "mat-button-toggle", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "mat-icon", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, FormImageComponent_mat_form_field_10_Template, 7, 2, "mat-form-field", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, FormImageComponent_mat_form_field_11_Template, 7, 2, "mat-form-field", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, FormImageComponent_mat_form_field_12_Template, 7, 2, "mat-form-field", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, FormImageComponent_mat_form_field_13_Template, 7, 1, "mat-form-field", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "lib-advanced-options");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "mat-form-field", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](18, 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "mat-select", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "mat-option", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](21, 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "mat-option", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](23, 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "mat-option", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](25, 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.allowCustomImage);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ctx.parentForm.get("serverType"));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !(ctx.parentForm == null ? null : ctx.parentForm.value.customImageCheck) && (ctx.parentForm == null ? null : ctx.parentForm.value.serverType) === "jupyter");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !(ctx.parentForm == null ? null : ctx.parentForm.value.customImageCheck) && (ctx.parentForm == null ? null : ctx.parentForm.value.serverType) === "group-one");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !(ctx.parentForm == null ? null : ctx.parentForm.value.customImageCheck) && (ctx.parentForm == null ? null : ctx.parentForm.value.serverType) === "group-two");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.parentForm == null ? null : ctx.parentForm.value.customImageCheck);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ctx.parentForm.get("imagePullPolicy"));
          }
        },
        directives: [kubeflow__WEBPACK_IMPORTED_MODULE_6__.FormSectionComponent, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_8__.MatButtonToggleGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlDirective, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_8__.MatButtonToggle, _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__.MatIcon, kubeflow__WEBPACK_IMPORTED_MODULE_6__.AdvancedOptionsComponent, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatLabel, _angular_material_select__WEBPACK_IMPORTED_MODULE_10__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_11__.MatOption, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_12__.MatCheckbox, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatError, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_13__.MatTooltip, _angular_material_input__WEBPACK_IMPORTED_MODULE_14__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor],
        styles: [".server-type[_ngcontent-%COMP%] {\n  height: 32px;\n  width: 150px;\n}\n\n.server-type-wrapper[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcm0taW1hZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0VBQ0EsWUFBQTtBQUNGOztBQUVBO0VBQ0UsbUJBQUE7RUFDQSwwQkFBQTtFQUFBLHVCQUFBO0VBQUEsa0JBQUE7QUFDRiIsImZpbGUiOiJmb3JtLWltYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNlcnZlci10eXBlIHtcbiAgaGVpZ2h0OiAzMnB4O1xuICB3aWR0aDogMTUwcHg7XG59XG5cbi5zZXJ2ZXItdHlwZS13cmFwcGVyIHtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xufVxuIl19 */"]
      });
      /***/
    },

    /***/
    74249:
    /*!**************************************************************************!*\
      !*** ./src/app/pages/form/form-default/form-name/form-name.component.ts ***!
      \**************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "FormNameComponent": function FormNameComponent() {
          return (
            /* binding */
            _FormNameComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      10826);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var src_app_services_backend_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/services/backend.service */
      90600);
      /* harmony import */


      var kubeflow__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! kubeflow */
      90872);

      var _FormNameComponent = /*#__PURE__*/function () {
        function _FormNameComponent(backend, ns) {
          _classCallCheck(this, _FormNameComponent);

          this.backend = backend;
          this.ns = ns;
          this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subscription();
          this.existingNotebooks = new Set();
        }

        _createClass(_FormNameComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this8 = this;

            // Keep track of the existing Notebooks in the selected Namespace
            // Use these names to check if the input name exists
            var nsSub = this.ns.getSelectedNamespace().subscribe(function (ns) {
              _this8.backend.getNotebooks(ns).subscribe(function (notebooks) {
                _this8.existingNotebooks.clear();

                notebooks.map(function (nb) {
                  return _this8.existingNotebooks.add(nb.name);
                });
              });
            });
            this.subscriptions.add(nsSub);
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.subscriptions.unsubscribe();
          }
        }]);

        return _FormNameComponent;
      }();

      _FormNameComponent.ɵfac = function FormNameComponent_Factory(t) {
        return new (t || _FormNameComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_backend_service__WEBPACK_IMPORTED_MODULE_0__.JWABackendService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](kubeflow__WEBPACK_IMPORTED_MODULE_3__.NamespaceService));
      };

      _FormNameComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: _FormNameComponent,
        selectors: [["app-form-name-namespace"]],
        inputs: {
          parentForm: "parentForm"
        },
        decls: 2,
        vars: 3,
        consts: function consts() {
          var i18n_0;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_8953033926734869941$$_______________USERS_JACOBNEYER_CHARIOT_NOTEBOOKS_FRONTEND_JUPYTER_SRC_APP_PAGES_FORM_FORM_DEFAULT_FORM_NAME_FORM_NAME_COMPONENT_TS_1 = goog.getMsg("Name");
            i18n_0 = MSG_EXTERNAL_8953033926734869941$$_______________USERS_JACOBNEYER_CHARIOT_NOTEBOOKS_FRONTEND_JUPYTER_SRC_APP_PAGES_FORM_FORM_DEFAULT_FORM_NAME_FORM_NAME_COMPONENT_TS_1;
          } else {
            i18n_0 = $localize(_templateObject50 || (_templateObject50 = _taggedTemplateLiteral([":\u241Fcff1428d10d59d14e45edec3c735a27b5482db59\u241F8953033926734869941:Name"])));
          }

          var i18n_2;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_8815546500991382832$$_______________USERS_JACOBNEYER_CHARIOT_NOTEBOOKS_FRONTEND_JUPYTER_SRC_APP_PAGES_FORM_FORM_DEFAULT_FORM_NAME_FORM_NAME_COMPONENT_TS_3 = goog.getMsg("Specify the name of the Notebook Server and the Namespace it will belong to.");
            i18n_2 = MSG_EXTERNAL_8815546500991382832$$_______________USERS_JACOBNEYER_CHARIOT_NOTEBOOKS_FRONTEND_JUPYTER_SRC_APP_PAGES_FORM_FORM_DEFAULT_FORM_NAME_FORM_NAME_COMPONENT_TS_3;
          } else {
            i18n_2 = $localize(_templateObject51 || (_templateObject51 = _taggedTemplateLiteral([":\u241Fcee8a23f48b6c7ae06f53a349a12744d3f3d0096\u241F8815546500991382832:Specify the name of the Notebook Server and the Namespace it will belong to."])));
          }

          return [["title", i18n_0, "text", i18n_2, "icon", "fa:fas:book"], ["maxLength", "40", "resourceName", "Notebook Server", 3, "nameControl", "namespaceControl", "existingNames"]];
        },
        template: function FormNameComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "lib-form-section", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "lib-form-name-namespace-inputs", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nameControl", ctx.parentForm.get("name"))("namespaceControl", ctx.parentForm.get("namespace"))("existingNames", ctx.existingNotebooks);
          }
        },
        directives: [kubeflow__WEBPACK_IMPORTED_MODULE_3__.FormSectionComponent, kubeflow__WEBPACK_IMPORTED_MODULE_3__.NameNamespaceInputsComponent],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb3JtLW5hbWUuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /***/
    },

    /***/
    34537:
    /*!**************************************************************************************************!*\
      !*** ./src/app/pages/form/form-default/form-workspace-volume/form-workspace-volume.component.ts ***!
      \**************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "FormWorkspaceVolumeComponent": function FormWorkspaceVolumeComponent() {
          return (
            /* binding */
            _FormWorkspaceVolumeComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      10826);
      /* harmony import */


      var kubeflow__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! kubeflow */
      90872);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/checkbox */
      7539);
      /* harmony import */


      var _volume_volume_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../volume/volume.component */
      24060);

      var _FormWorkspaceVolumeComponent = /*#__PURE__*/function () {
        function _FormWorkspaceVolumeComponent(snackBar) {
          _classCallCheck(this, _FormWorkspaceVolumeComponent);

          this.snackBar = snackBar;
          this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subscription();
          this.readOnlyPrv = false;
        }

        _createClass(_FormWorkspaceVolumeComponent, [{
          key: "readonly",
          get: function get() {
            return this.readOnlyPrv;
          },
          set: function set(b) {
            this.readOnlyPrv = b;
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this9 = this;

            // Show a warning if no persistent storage is provided
            this.subscriptions.add(this.parentForm.get('noWorkspace').valueChanges.subscribe(function (b) {
              // close the snackbar if deselected
              if (!b) {
                _this9.snackBar.close();
              } else {
                var msg = $localize(_templateObject52 || (_templateObject52 = _taggedTemplateLiteral(["Your workspace will not be persistent. You will lose all data in it, if your notebook is terminated for any reason."])));

                _this9.snackBar.open(msg, kubeflow__WEBPACK_IMPORTED_MODULE_2__.SnackType.Warning, 0);
              }
            }));
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.subscriptions.unsubscribe();
            this.snackBar.close();
          }
        }]);

        return _FormWorkspaceVolumeComponent;
      }();

      _FormWorkspaceVolumeComponent.ɵfac = function FormWorkspaceVolumeComponent_Factory(t) {
        return new (t || _FormWorkspaceVolumeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](kubeflow__WEBPACK_IMPORTED_MODULE_2__.SnackBarService));
      };

      _FormWorkspaceVolumeComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
        type: _FormWorkspaceVolumeComponent,
        selectors: [["app-form-workspace-volume"]],
        inputs: {
          parentForm: "parentForm",
          pvcs: "pvcs",
          storageClasses: "storageClasses",
          defaultStorageClass: "defaultStorageClass",
          readonly: "readonly"
        },
        decls: 5,
        vars: 7,
        consts: function consts() {
          var i18n_0;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_3398373965382400215$$_______________USERS_JACOBNEYER_CHARIOT_NOTEBOOKS_FRONTEND_JUPYTER_SRC_APP_PAGES_FORM_FORM_DEFAULT_FORM_WORKSPACE_VOLUME_FORM_WORKSPACE_VOLUME_COMPONENT_TS_1 = goog.getMsg("Workspace Volume");
            i18n_0 = MSG_EXTERNAL_3398373965382400215$$_______________USERS_JACOBNEYER_CHARIOT_NOTEBOOKS_FRONTEND_JUPYTER_SRC_APP_PAGES_FORM_FORM_DEFAULT_FORM_WORKSPACE_VOLUME_FORM_WORKSPACE_VOLUME_COMPONENT_TS_1;
          } else {
            i18n_0 = $localize(_templateObject53 || (_templateObject53 = _taggedTemplateLiteral([":\u241F5f02a6412cf09bf5dd273aeb77215ce0ef343716\u241F3398373965382400215:Workspace Volume"])));
          }

          var i18n_2;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_2834783561652615956$$_______________USERS_JACOBNEYER_CHARIOT_NOTEBOOKS_FRONTEND_JUPYTER_SRC_APP_PAGES_FORM_FORM_DEFAULT_FORM_WORKSPACE_VOLUME_FORM_WORKSPACE_VOLUME_COMPONENT_TS_3 = goog.getMsg("Configure the Volume to be mounted as your personal Workspace.");
            i18n_2 = MSG_EXTERNAL_2834783561652615956$$_______________USERS_JACOBNEYER_CHARIOT_NOTEBOOKS_FRONTEND_JUPYTER_SRC_APP_PAGES_FORM_FORM_DEFAULT_FORM_WORKSPACE_VOLUME_FORM_WORKSPACE_VOLUME_COMPONENT_TS_3;
          } else {
            i18n_2 = $localize(_templateObject54 || (_templateObject54 = _taggedTemplateLiteral([":\u241F752dfb855b4c8a9210e3d24477995a2371eab64f\u241F2834783561652615956:Configure the Volume to be mounted as your personal Workspace."])));
          }

          var i18n_4;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_2077826561998922203$$_______________USERS_JACOBNEYER_CHARIOT_NOTEBOOKS_FRONTEND_JUPYTER_SRC_APP_PAGES_FORM_FORM_DEFAULT_FORM_WORKSPACE_VOLUME_FORM_WORKSPACE_VOLUME_COMPONENT_TS_5 = goog.getMsg(" Don't use Persistent Storage for User's home ");
            i18n_4 = MSG_EXTERNAL_2077826561998922203$$_______________USERS_JACOBNEYER_CHARIOT_NOTEBOOKS_FRONTEND_JUPYTER_SRC_APP_PAGES_FORM_FORM_DEFAULT_FORM_WORKSPACE_VOLUME_FORM_WORKSPACE_VOLUME_COMPONENT_TS_5;
          } else {
            i18n_4 = $localize(_templateObject55 || (_templateObject55 = _taggedTemplateLiteral([":\u241F3fcd8eaf3f795a406ca8d2418b7c0251b5ba4f31\u241F2077826561998922203: Don't use Persistent Storage for User's home "])));
          }

          return [["title", i18n_0, "text", i18n_2, "icon", "fa:fas:laptop-code"], [3, "formGroup"], ["formControlName", "noWorkspace"], i18n_4, [3, "volume", "notebookName", "pvcs", "ephemeral", "namespace", "defaultStorageClass"]];
        },
        template: function FormWorkspaceVolumeComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "lib-form-section", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "mat-checkbox", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵi18n"](3, 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "app-volume", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.parentForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("volume", ctx.parentForm.get("workspace"))("notebookName", ctx.parentForm.value.name)("pvcs", ctx.pvcs)("ephemeral", ctx.parentForm.value.noWorkspace)("namespace", ctx.parentForm.value.namespace)("defaultStorageClass", ctx.defaultStorageClass);
          }
        },
        directives: [kubeflow__WEBPACK_IMPORTED_MODULE_2__.FormSectionComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_5__.MatCheckbox, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName, _volume_volume_component__WEBPACK_IMPORTED_MODULE_0__.VolumeComponent],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb3JtLXdvcmtzcGFjZS12b2x1bWUuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /***/
    },

    /***/
    3261:
    /*!**************************************************!*\
      !*** ./src/app/pages/form/form-default/utils.ts ***!
      \**************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "getFormDefaults": function getFormDefaults() {
          return (
            /* binding */
            _getFormDefaults
          );
        },

        /* harmony export */
        "createVolumeControl": function createVolumeControl() {
          return (
            /* binding */
            _createVolumeControl
          );
        },

        /* harmony export */
        "updateVolumeControl": function updateVolumeControl() {
          return (
            /* binding */
            _updateVolumeControl
          );
        },

        /* harmony export */
        "addDataVolume": function addDataVolume() {
          return (
            /* binding */
            _addDataVolume
          );
        },

        /* harmony export */
        "updateGPUControl": function updateGPUControl() {
          return (
            /* binding */
            _updateGPUControl
          );
        },

        /* harmony export */
        "calculateLimits": function calculateLimits() {
          return (
            /* binding */
            _calculateLimits
          );
        },

        /* harmony export */
        "initCpuFormControls": function initCpuFormControls() {
          return (
            /* binding */
            _initCpuFormControls
          );
        },

        /* harmony export */
        "initMemoryFormControls": function initMemoryFormControls() {
          return (
            /* binding */
            _initMemoryFormControls
          );
        },

        /* harmony export */
        "initFormControls": function initFormControls() {
          return (
            /* binding */
            _initFormControls
          );
        },

        /* harmony export */
        "configSizeToNumber": function configSizeToNumber() {
          return (
            /* binding */
            _configSizeToNumber
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var kubeflow__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! kubeflow */
      90872);

      function _getFormDefaults() {
        var fb = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormBuilder();
        return fb.group({
          name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.required]],
          namespace: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.required]],
          image: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.required]],
          imageGroupOne: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.required]],
          imageGroupTwo: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.required]],
          allowCustomImage: [true, []],
          imagePullPolicy: ['IfNotPresent', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.required]],
          customImage: ['', []],
          customImageCheck: [false, []],
          serverType: ['jupyter', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.required]],
          cpu: [1, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.required]],
          cpuLimit: ['', []],
          memory: [1, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.required]],
          memoryLimit: ['', []],
          gpus: fb.group({
            vendor: ['', []],
            num: ['', []]
          }),
          noWorkspace: [false, []],
          workspace: fb.group({
            type: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.required]],
            name: ['', (0, kubeflow__WEBPACK_IMPORTED_MODULE_1__.getNameSyncValidators)(), (0, kubeflow__WEBPACK_IMPORTED_MODULE_1__.getNameAsyncValidators)()],
            templatedName: ['', []],
            size: [1, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.required]],
            path: [{
              value: '',
              disabled: true
            }, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.required]],
            templatedPath: ['', []],
            mode: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.required]],
            "class": ['{none}', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.required]],
            extraFields: fb.group({})
          }),
          affinityConfig: ['', []],
          tolerationGroup: ['', []],
          datavols: fb.array([]),
          shm: [true, []],
          configurations: [[], []]
        });
      }

      function _createVolumeControl(vol) {
        var readonly = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        var fb = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormBuilder();
        var ctrl = fb.group({
          type: [vol.type.value, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.required]],
          name: ['volume', (0, kubeflow__WEBPACK_IMPORTED_MODULE_1__.getNameSyncValidators)(), (0, kubeflow__WEBPACK_IMPORTED_MODULE_1__.getNameAsyncValidators)()],
          templatedName: [vol.name.value, []],
          templatedPath: [vol.mountPath.value, []],
          size: [_configSizeToNumber(vol.size.value), [_angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.required]],
          path: [vol.mountPath.value, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.required]],
          mode: [vol.accessModes.value, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.required]],
          "class": ['{none}', []],
          extraFields: fb.group({})
        });

        if (readonly) {
          ctrl.disable();
        }

        return ctrl;
      }

      function _updateVolumeControl(volCtrl, vol) {
        var readonly = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
        volCtrl.get('name').setValue(vol.name.value);
        volCtrl.get('type').setValue(vol.type.value);
        volCtrl.get('size').setValue(_configSizeToNumber(vol.size.value));
        volCtrl.get('mode').setValue(vol.accessModes.value);
        volCtrl.get('path').setValue(vol.mountPath.value);
        volCtrl.get('templatedName').setValue(vol.name.value);
        volCtrl.get('templatedPath').setValue(vol.mountPath.value);

        if (readonly) {
          volCtrl.disable();
        }
      }

      function _addDataVolume(formCtrl) {
        var vol = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
        var readonly = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

        // If no vol is provided create one with default values
        if (vol === null) {
          var l = formCtrl.value.datavols.length;
          var name = '{notebook-name}-vol-' + (l + 1);
          vol = {
            type: {
              value: 'New'
            },
            name: {
              value: '{notebook-name}-vol-' + (l + 1)
            },
            size: {
              value: '5'
            },
            mountPath: {
              value: '/home/jovyan/{volume-name}'
            },
            accessModes: {
              value: 'ReadWriteOnce'
            }
          };
        } // Push it to the control


        var ctrl = _createVolumeControl(vol, readonly);

        var vols = formCtrl.get('datavols');
        vols.push(ctrl);
      }

      function _updateGPUControl(formCtrl, gpuConf) {
        // If the backend didn't send the value, default to none
        if (gpuConf == null) {
          formCtrl.get('num').setValue('none');
          return;
        } // Set the values


        var gpu = gpuConf.value;
        formCtrl.get('num').setValue(gpu.num);
        formCtrl.get('vendor').setValue(gpu.vendor); // Don't allow the user to edit them if the admin does not allow it

        if (gpuConf.readOnly) {
          formCtrl.get('num').disable();
          formCtrl.get('vendor').disable();
        }
      }

      function _calculateLimits(requests, factor) {
        var limit = _configSizeToNumber(requests) * _configSizeToNumber(factor);

        if (isNaN(limit)) {
          return null;
        }

        return limit.toFixed(1);
      }

      function _initCpuFormControls(formCtrl, config) {
        var cpu = Number(config.cpu.value);

        if (!isNaN(cpu)) {
          formCtrl.controls.cpu.setValue(cpu);
        }

        if (config.cpu.readOnly) {
          formCtrl.controls.cpu.disable();
          formCtrl.controls.cpuLimit.disable();
        }

        formCtrl.controls.cpuLimit.setValue(_calculateLimits(cpu, config.cpu.limitFactor));
      }

      function _initMemoryFormControls(formCtrl, config) {
        var memory = _configSizeToNumber(config.memory.value);

        if (!isNaN(memory)) {
          formCtrl.controls.memory.setValue(memory);
        }

        if (config.memory.readOnly) {
          formCtrl.controls.memory.disable();
          formCtrl.controls.memoryLimit.disable();
        }

        formCtrl.controls.memoryLimit.setValue(_calculateLimits(memory, config.memory.limitFactor));
      }

      function _initFormControls(formCtrl, config) {
        _initCpuFormControls(formCtrl, config);

        _initMemoryFormControls(formCtrl, config);

        formCtrl.controls.image.setValue(config.image.value);
        formCtrl.controls.imageGroupOne.setValue(config.imageGroupOne.value);
        formCtrl.controls.imageGroupTwo.setValue(config.imageGroupTwo.value);
        formCtrl.controls.imagePullPolicy.setValue(config.imagePullPolicy.value);

        if (config.imagePullPolicy.readOnly) {
          formCtrl.controls.imagePullPolicy.disable();
        }

        var wsCtrl = formCtrl.get('workspace');

        _updateVolumeControl(wsCtrl, config.workspaceVolume.value, config.workspaceVolume.readOnly); // Disable the mount path by default


        var ws = formCtrl.controls.workspace;
        ws.controls.path.disable(); // Add the data volumes

        config.dataVolumes.value.forEach(function (vol) {
          // Create a new FormControl to append to the array
          _addDataVolume(formCtrl, vol.value, config.dataVolumes.readOnly);
        }); // Affinity

        formCtrl.controls.affinityConfig.setValue(config.affinityConfig.value);

        if (config.affinityConfig.readOnly) {
          formCtrl.controls.affinityConfig.disable();
        } // Tolerations


        formCtrl.controls.tolerationGroup.setValue(config.tolerationGroup.value);

        if (config.tolerationGroup.readOnly) {
          formCtrl.controls.tolerationGroup.disable();
        } // GPUs


        _updateGPUControl(formCtrl.get('gpus'), config.gpus);

        formCtrl.controls.shm.setValue(config.shm.value);

        if (config.shm.readOnly) {
          formCtrl.controls.shm.disable();
        } // PodDefaults / Configurations. Set the pre selected labels


        formCtrl.controls.configurations.setValue(config.configurations.value);

        if (config.configurations.readOnly) {
          formCtrl.controls.configurations.disable();
        }
      }

      function _configSizeToNumber(size) {
        if (size == null) {
          return NaN;
        }

        if (typeof size === 'number') {
          return size;
        }

        return Number(size.replace('Gi', ''));
      }
      /***/

    },

    /***/
    24060:
    /*!********************************************************************!*\
      !*** ./src/app/pages/form/form-default/volume/volume.component.ts ***!
      \********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "VolumeComponent": function VolumeComponent() {
          return (
            /* binding */
            _VolumeComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      10826);
      /* harmony import */


      var kubeflow__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! kubeflow */
      90872);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/form-field */
      98295);
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/select */
      67441);
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/core */
      5015);
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/input */
      83166);

      function VolumeComponent_div_0_mat_option_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](1, 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function VolumeComponent_div_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-form-field", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](3, 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-select", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, VolumeComponent_div_0_mat_option_5_Template, 2, 0, "mat-option", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-option", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](7, 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "lib-name-input", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "lib-positive-number-input", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-form-field", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](12, 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-select", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-option", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](15, 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-option", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](17, 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-option", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](19, 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-form-field", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](22, 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "input", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r0.volume);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.defaultStorageClass);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nameControl", ctx_r0.volume.get("name"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("sizeControl", ctx_r0.volume.get("size"));
        }
      }

      var _VolumeComponent = /*#__PURE__*/function () {
        // ----- Component Functions -----
        function _VolumeComponent() {
          _classCallCheck(this, _VolumeComponent);

          this.notebookNamePrv = '';
          this.existingPVCs = new Set();
          this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subscription();
        }

        _createClass(_VolumeComponent, [{
          key: "notebookName",
          get: function get() {
            return this.notebookNamePrv;
          },
          set: function set(nm) {
            if (!this.volume.disabled) {
              this.notebookNameChanged(nm);
            }
          }
        }, {
          key: "ephemeral",
          set: function set(b) {
            if (!this.volume.disabled) {
              this.storageOptionChanged(b);
            }
          }
        }, {
          key: "pvcs",
          set: function set(data) {
            if (!this.volume.disabled) {
              this.pvcsChanged(data);
            }
          }
        }, {
          key: "defaultStorageClass",
          get: function get() {
            return this.defaultStorageClassPrv;
          },
          set: function set(s) {
            // Update the current pvc type
            this.defaultStorageClassPrv = s;

            if (!this.volume.disabled) {
              this.updateVolInputFields();
            }
          } // ----- Get macros -----

        }, {
          key: "selectedVolIsExistingType",
          get: function get() {
            return this.existingPVCs.has(this.volume.value.name) || !this.defaultStorageClass;
          }
        }, {
          key: "currentVolName",
          get: function get() {
            // Change volume name on notebook-name change, if user hasn't changed it already
            if (!this.volume.controls.name.dirty) {
              return this.volume.get('templatedName').value.replace('{notebook-name}', this.notebookName);
            } else {
              return this.volume.get('name').value;
            }
          } // ----- utility functions -----

        }, {
          key: "setVolumeType",
          value: function setVolumeType(type) {
            if (type === 'Existing') {
              this.volume.controls.size.disable();
              this.volume.controls.mode.disable();
            } else {
              this.volume.controls.size.enable();
              this.volume.controls.mode.enable();
            }
          }
        }, {
          key: "updateVolInputFields",
          value: function updateVolInputFields() {
            // Disable input fields according to volume type
            if (this.selectedVolIsExistingType) {
              // Disable all fields
              this.volume.controls.size.disable();
              this.volume.controls.mode.disable();
              this.volume.controls.type.setValue('Existing');
            } else {
              this.volume.controls.size.enable();
              this.volume.controls.mode.enable();
              this.volume.controls.type.setValue('New');
            } // Fix mount point if user hasn't changed it and it's not workspace volume


            (0, kubeflow__WEBPACK_IMPORTED_MODULE_2__.updateNonDirtyControl)(this.volume.get('path'), this.volume.get('templatedPath').value.replace('{volume-name}', this.currentVolName));
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this10 = this;

            // type
            this.subscriptions.add(this.volume.get('type').valueChanges.subscribe(function (type) {
              _this10.setVolumeType(type);
            })); // name

            this.subscriptions.add(this.volume.get('name').valueChanges.subscribe(function (name) {
              // Update the fields if the volume is an existing one
              _this10.volume.get('name').setValue(name, {
                emitEvent: false
              });

              _this10.updateVolInputFields();
            }));
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.subscriptions.unsubscribe();
          } // ----- @Input change handling functions -----

        }, {
          key: "notebookNameChanged",
          value: function notebookNameChanged(nm) {
            var _this11 = this;

            if (this.volume.disabled) {
              return;
            }

            this.notebookNamePrv = nm;
            setTimeout(function () {
              (0, kubeflow__WEBPACK_IMPORTED_MODULE_2__.updateNonDirtyControl)(_this11.volume.controls.name, _this11.currentVolName);
            });
          }
        }, {
          key: "storageOptionChanged",
          value: function storageOptionChanged(ephemeral) {
            if (ephemeral) {
              // Disable all fields
              this.volume.controls.type.disable();
              this.volume.controls.name.disable();
              this.volume.controls.size.disable();
              this.volume.controls.mode.disable();
            } else {
              this.volume.controls.type.enable();
              this.volume.controls.name.enable();
              this.updateVolInputFields();
            }
          }
        }, {
          key: "pvcsChanged",
          value: function pvcsChanged(pvcs) {
            var _this12 = this;

            this.existingPVCs.clear();
            pvcs.map(function (pvc) {
              return _this12.existingPVCs.add(pvc.name);
            });

            if (!this.existingPVCs.has(this.currentVolName)) {
              this.updateVolInputFields();
            } else {
              // Also set the selected volume
              this.volume.controls.name.setValue(this.currentVolName);
            }
          }
        }]);

        return _VolumeComponent;
      }();

      _VolumeComponent.ɵfac = function VolumeComponent_Factory(t) {
        return new (t || _VolumeComponent)();
      };

      _VolumeComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _VolumeComponent,
        selectors: [["app-volume"]],
        inputs: {
          volume: "volume",
          namespace: "namespace",
          notebookName: "notebookName",
          ephemeral: "ephemeral",
          pvcs: "pvcs",
          defaultStorageClass: "defaultStorageClass"
        },
        decls: 1,
        vars: 1,
        consts: function consts() {
          var i18n_0;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_8650499415827640724$$_______________USERS_JACOBNEYER_CHARIOT_NOTEBOOKS_FRONTEND_JUPYTER_SRC_APP_PAGES_FORM_FORM_DEFAULT_VOLUME_VOLUME_COMPONENT_TS__1 = goog.getMsg("Type");
            i18n_0 = MSG_EXTERNAL_8650499415827640724$$_______________USERS_JACOBNEYER_CHARIOT_NOTEBOOKS_FRONTEND_JUPYTER_SRC_APP_PAGES_FORM_FORM_DEFAULT_VOLUME_VOLUME_COMPONENT_TS__1;
          } else {
            i18n_0 = $localize(_templateObject56 || (_templateObject56 = _taggedTemplateLiteral([":\u241Ff61c6867295f3b53d23557021f2f4e0aa1d0b8fc\u241F8650499415827640724:Type"])));
          }

          var i18n_2;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_2723452166862787347$$_______________USERS_JACOBNEYER_CHARIOT_NOTEBOOKS_FRONTEND_JUPYTER_SRC_APP_PAGES_FORM_FORM_DEFAULT_VOLUME_VOLUME_COMPONENT_TS__3 = goog.getMsg(" Existing ");
            i18n_2 = MSG_EXTERNAL_2723452166862787347$$_______________USERS_JACOBNEYER_CHARIOT_NOTEBOOKS_FRONTEND_JUPYTER_SRC_APP_PAGES_FORM_FORM_DEFAULT_VOLUME_VOLUME_COMPONENT_TS__3;
          } else {
            i18n_2 = $localize(_templateObject57 || (_templateObject57 = _taggedTemplateLiteral([":\u241F694e11ff8cc8b070c82c65b5eaa118b4e4f3f169\u241F2723452166862787347: Existing "])));
          }

          var i18n_4;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_2772330728479814494$$_______________USERS_JACOBNEYER_CHARIOT_NOTEBOOKS_FRONTEND_JUPYTER_SRC_APP_PAGES_FORM_FORM_DEFAULT_VOLUME_VOLUME_COMPONENT_TS__5 = goog.getMsg("Size in Gi");
            i18n_4 = MSG_EXTERNAL_2772330728479814494$$_______________USERS_JACOBNEYER_CHARIOT_NOTEBOOKS_FRONTEND_JUPYTER_SRC_APP_PAGES_FORM_FORM_DEFAULT_VOLUME_VOLUME_COMPONENT_TS__5;
          } else {
            i18n_4 = $localize(_templateObject58 || (_templateObject58 = _taggedTemplateLiteral([":\u241Fe1b3e1dca04b54d87b5a7ff9593676dacaf6dce0\u241F2772330728479814494:Size in Gi"])));
          }

          var i18n_6;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_1713271461473302108$$_______________USERS_JACOBNEYER_CHARIOT_NOTEBOOKS_FRONTEND_JUPYTER_SRC_APP_PAGES_FORM_FORM_DEFAULT_VOLUME_VOLUME_COMPONENT_TS__7 = goog.getMsg("Mode");
            i18n_6 = MSG_EXTERNAL_1713271461473302108$$_______________USERS_JACOBNEYER_CHARIOT_NOTEBOOKS_FRONTEND_JUPYTER_SRC_APP_PAGES_FORM_FORM_DEFAULT_VOLUME_VOLUME_COMPONENT_TS__7;
          } else {
            i18n_6 = $localize(_templateObject59 || (_templateObject59 = _taggedTemplateLiteral([":\u241F37e10df2d9c0c25ef04ac112c9c9a7723e8efae0\u241F1713271461473302108:Mode"])));
          }

          var i18n_8;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_438106569717487631$$_______________USERS_JACOBNEYER_CHARIOT_NOTEBOOKS_FRONTEND_JUPYTER_SRC_APP_PAGES_FORM_FORM_DEFAULT_VOLUME_VOLUME_COMPONENT_TS__9 = goog.getMsg("ReadWriteOnce");
            i18n_8 = MSG_EXTERNAL_438106569717487631$$_______________USERS_JACOBNEYER_CHARIOT_NOTEBOOKS_FRONTEND_JUPYTER_SRC_APP_PAGES_FORM_FORM_DEFAULT_VOLUME_VOLUME_COMPONENT_TS__9;
          } else {
            i18n_8 = $localize(_templateObject60 || (_templateObject60 = _taggedTemplateLiteral([":\u241F3ecda4b04c618776ed92e6436ff5f0fc8a58b17a\u241F438106569717487631:ReadWriteOnce"])));
          }

          var i18n_10;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_8343619288781213033$$_______________USERS_JACOBNEYER_CHARIOT_NOTEBOOKS_FRONTEND_JUPYTER_SRC_APP_PAGES_FORM_FORM_DEFAULT_VOLUME_VOLUME_COMPONENT_TS__11 = goog.getMsg("ReadOnlyMany ");
            i18n_10 = MSG_EXTERNAL_8343619288781213033$$_______________USERS_JACOBNEYER_CHARIOT_NOTEBOOKS_FRONTEND_JUPYTER_SRC_APP_PAGES_FORM_FORM_DEFAULT_VOLUME_VOLUME_COMPONENT_TS__11;
          } else {
            i18n_10 = $localize(_templateObject61 || (_templateObject61 = _taggedTemplateLiteral([":\u241F134b8b6d344324352f2e3c4c6cd37c0a69f13294\u241F8343619288781213033:ReadOnlyMany "])));
          }

          var i18n_12;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_8128010211627552417$$_______________USERS_JACOBNEYER_CHARIOT_NOTEBOOKS_FRONTEND_JUPYTER_SRC_APP_PAGES_FORM_FORM_DEFAULT_VOLUME_VOLUME_COMPONENT_TS__13 = goog.getMsg("ReadWriteMany ");
            i18n_12 = MSG_EXTERNAL_8128010211627552417$$_______________USERS_JACOBNEYER_CHARIOT_NOTEBOOKS_FRONTEND_JUPYTER_SRC_APP_PAGES_FORM_FORM_DEFAULT_VOLUME_VOLUME_COMPONENT_TS__13;
          } else {
            i18n_12 = $localize(_templateObject62 || (_templateObject62 = _taggedTemplateLiteral([":\u241F5b20b7812eb6056ee343b25ecc21dd87da6cc261\u241F8128010211627552417:ReadWriteMany "])));
          }

          var i18n_14;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_3540855333738137929$$_______________USERS_JACOBNEYER_CHARIOT_NOTEBOOKS_FRONTEND_JUPYTER_SRC_APP_PAGES_FORM_FORM_DEFAULT_VOLUME_VOLUME_COMPONENT_TS__15 = goog.getMsg("Mount Point");
            i18n_14 = MSG_EXTERNAL_3540855333738137929$$_______________USERS_JACOBNEYER_CHARIOT_NOTEBOOKS_FRONTEND_JUPYTER_SRC_APP_PAGES_FORM_FORM_DEFAULT_VOLUME_VOLUME_COMPONENT_TS__15;
          } else {
            i18n_14 = $localize(_templateObject63 || (_templateObject63 = _taggedTemplateLiteral([":\u241F145eca4aa8d12853efaf9a1e27004e3238232eff\u241F3540855333738137929:Mount Point"])));
          }

          var i18n_16;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_7122010347255310427$$_______________USERS_JACOBNEYER_CHARIOT_NOTEBOOKS_FRONTEND_JUPYTER_SRC_APP_PAGES_FORM_FORM_DEFAULT_VOLUME_VOLUME_COMPONENT_TS___17 = goog.getMsg(" New ");
            i18n_16 = MSG_EXTERNAL_7122010347255310427$$_______________USERS_JACOBNEYER_CHARIOT_NOTEBOOKS_FRONTEND_JUPYTER_SRC_APP_PAGES_FORM_FORM_DEFAULT_VOLUME_VOLUME_COMPONENT_TS___17;
          } else {
            i18n_16 = $localize(_templateObject64 || (_templateObject64 = _taggedTemplateLiteral([":\u241F6aa0944e1e88f326f92278269c69175ca0b8683e\u241F7122010347255310427: New "])));
          }

          return [["class", "row", 3, "formGroup", 4, "ngIf"], [1, "row", 3, "formGroup"], ["appearance", "outline", "id", "type", 1, "column"], i18n_0, ["formControlName", "type"], ["value", "New", 4, "ngIf"], ["value", "Existing"], i18n_2, ["id", "name", 1, "column", 3, "nameControl"], ["id", "size", "min", "1", "step", "1", "label", i18n_4, 1, "column", 3, "sizeControl"], ["appearance", "outline", "id", "mode", 1, "column"], i18n_6, ["formControlName", "mode"], ["value", "ReadWriteOnce"], i18n_8, ["value", "ReadOnlyMany"], i18n_10, ["value", "ReadWriteMany"], i18n_12, ["appearance", "outline", "id", "path", 1, "column"], i18n_14, ["matInput", "", "formControlName", "path"], ["value", "New"], i18n_16];
        },
        template: function VolumeComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, VolumeComponent_div_0_Template, 24, 4, "div", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.volume);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__.MatLabel, _angular_material_select__WEBPACK_IMPORTED_MODULE_6__.MatSelect, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName, _angular_material_core__WEBPACK_IMPORTED_MODULE_7__.MatOption, kubeflow__WEBPACK_IMPORTED_MODULE_2__.NameInputComponent, kubeflow__WEBPACK_IMPORTED_MODULE_2__.PositiveNumberInputComponent, _angular_material_input__WEBPACK_IMPORTED_MODULE_8__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor],
        styles: ["#type[_ngcontent-%COMP%] {\n  max-width: 15%;\n}\n\n#size[_ngcontent-%COMP%] {\n  max-width: 10%;\n}\n\n#mode[_ngcontent-%COMP%] {\n  max-width: 20%;\n}\n\n#name[_ngcontent-%COMP%] {\n  max-width: 30%;\n}\n\n#path[_ngcontent-%COMP%] {\n  max-width: 25%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZvbHVtZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7QUFDRjs7QUFFQTtFQUNFLGNBQUE7QUFDRjs7QUFFQTtFQUNFLGNBQUE7QUFDRjs7QUFFQTtFQUNFLGNBQUE7QUFDRjs7QUFFQTtFQUNFLGNBQUE7QUFDRiIsImZpbGUiOiJ2b2x1bWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjdHlwZSB7XG4gIG1heC13aWR0aDogMTUlO1xufVxuXG4jc2l6ZSB7XG4gIG1heC13aWR0aDogMTAlO1xufVxuXG4jbW9kZSB7XG4gIG1heC13aWR0aDogMjAlO1xufVxuXG4jbmFtZSB7XG4gIG1heC13aWR0aDogMzAlO1xufVxuXG4jcGF0aCB7XG4gIG1heC13aWR0aDogMjUlO1xufVxuIl19 */"]
      });
      /***/
    },

    /***/
    65215:
    /*!***********************************************************!*\
      !*** ./src/app/pages/form/form-rok/form-rok.component.ts ***!
      \***********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "FormRokComponent": function FormRokComponent() {
          return (
            /* binding */
            _FormRokComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _app_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @app/environment */
      92340);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _form_default_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../form-default/utils */
      3261);
      /* harmony import */


      var _form_default_form_default_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../form-default/form-default.component */
      70849);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var kubeflow__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! kubeflow */
      90872);
      /* harmony import */


      var src_app_services_backend_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/backend.service */
      90600);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _rok_jupyter_lab_selector_rok_jupyter_lab_selector_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./rok-jupyter-lab-selector/rok-jupyter-lab-selector.component */
      4373);
      /* harmony import */


      var _form_default_form_name_form_name_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../form-default/form-name/form-name.component */
      74249);
      /* harmony import */


      var _form_default_form_image_form_image_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../form-default/form-image/form-image.component */
      51330);
      /* harmony import */


      var _form_default_form_cpu_ram_form_cpu_ram_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../form-default/form-cpu-ram/form-cpu-ram.component */
      69492);
      /* harmony import */


      var _form_default_form_gpus_form_gpus_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../form-default/form-gpus/form-gpus.component */
      20184);
      /* harmony import */


      var _rok_form_workspace_volume_rok_form_workspace_volume_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./rok-form-workspace-volume/rok-form-workspace-volume.component */
      11694);
      /* harmony import */


      var _rok_form_data_volumes_rok_form_data_volumes_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./rok-form-data-volumes/rok-form-data-volumes.component */
      95483);
      /* harmony import */


      var _rok_form_configurations_rok_form_configurations_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./rok-form-configurations/rok-form-configurations.component */
      70936);
      /* harmony import */


      var _form_default_form_affinity_tolerations_form_affinity_tolerations_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../form-default/form-affinity-tolerations/form-affinity-tolerations.component */
      86440);
      /* harmony import */


      var _form_default_form_advanced_options_form_advanced_options_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ../form-default/form-advanced-options/form-advanced-options.component */
      65905);
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @angular/material/button */
      51095);

      var _FormRokComponent = /*#__PURE__*/function (_form_default_form_de) {
        _inherits(_FormRokComponent, _form_default_form_de);

        var _super = _createSuper(_FormRokComponent);

        function _FormRokComponent(ns, backend, router, popup, rok) {
          var _this13;

          _classCallCheck(this, _FormRokComponent);

          _this13 = _super.call(this, ns, backend, router, popup);
          _this13.ns = ns;
          _this13.backend = backend;
          _this13.router = router;
          _this13.popup = popup;
          _this13.rok = rok;
          _this13.env = _app_environment__WEBPACK_IMPORTED_MODULE_0__.environment;
          return _this13;
        }

        _createClass(_FormRokComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            _get(_getPrototypeOf(_FormRokComponent.prototype), "ngOnInit", this).call(this);

            this.rok.initCSRF();
          } // Form handling functions

        }, {
          key: "getFormDefaults",
          value: function getFormDefaults() {
            // Init the form
            var formCtrl = (0, _form_default_utils__WEBPACK_IMPORTED_MODULE_1__.getFormDefaults)(); // Add labUrl control

            formCtrl.addControl('environment', new _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.required])); // Add the rokUrl control

            var wsExtras = formCtrl.get('workspace.extraFields');
            wsExtras.addControl('rokUrl', new _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormControl('', []));
            return formCtrl;
          }
        }, {
          key: "initFormControls",
          value: function initFormControls(formCtrl, config) {
            // Sets the values from our internal dict. This is an initialization step
            // that should be only run once
            (0, _form_default_utils__WEBPACK_IMPORTED_MODULE_1__.initFormControls)(formCtrl, config); // Handle the Pod environment

            if (config.environment && config.environment.value) {
              var envVal = JSON.stringify(config.environment.value);
              formCtrl.controls.environment.setValue(envVal);
            } else {
              formCtrl.controls.environment.setValue('{}');
            }

            if (config.environment && config.environment.readOnly) {
              formCtrl.controls.environment.disable();
            } // Configure workspace control with rokUrl


            var extraFields = formCtrl.get('workspace').get('extraFields');
            extraFields.addControl('rokUrl', new _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormControl('', [])); // Add rok url control to the data volumes

            var array = formCtrl.get('datavols');

            for (var i = 0; i < this.config.dataVolumes.value.length; i++) {
              var extra = array.at(i).get('extraFields');
              extra.addControl('rokUrl', new _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormControl('', []));
            }
          }
        }]);

        return _FormRokComponent;
      }(_form_default_form_default_component__WEBPACK_IMPORTED_MODULE_2__.FormDefaultComponent);

      _FormRokComponent.ɵfac = function FormRokComponent_Factory(t) {
        return new (t || _FormRokComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](kubeflow__WEBPACK_IMPORTED_MODULE_16__.NamespaceService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](src_app_services_backend_service__WEBPACK_IMPORTED_MODULE_3__.JWABackendService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_17__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](kubeflow__WEBPACK_IMPORTED_MODULE_16__.SnackBarService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](kubeflow__WEBPACK_IMPORTED_MODULE_16__.RokService));
      };

      _FormRokComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineComponent"]({
        type: _FormRokComponent,
        selectors: [["app-form-rok"]],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵInheritDefinitionFeature"]],
        decls: 18,
        vars: 23,
        consts: [[1, "center-flex"], [1, "form-with-buttons"], [1, "form--card-container", "mat-elevation-z2"], ["novalidate", "", 3, "formGroup", "ngSubmit"], [3, "parentForm"], [3, "parentForm", "images", "imagesGroupOne", "imagesGroupTwo", "allowCustomImage"], [3, "parentForm", "vendors"], [3, "parentForm", "pvcs", "readonly"], [3, "parentForm", "affinityConfigs", "tolerationGroups"], ["mat-raised-button", "", "color", "primary", 1, "form--button-margin", 3, "disabled", "click"], ["mat-raised-button", "", "type", "button", 3, "click"]],
        template: function FormRokComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](3, "form", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("ngSubmit", function FormRokComponent_Template_form_ngSubmit_3_listener() {
              return ctx.onSubmit();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](4, "app-rok-jupyter-lab-selector", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](5, "app-form-name-namespace", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](6, "app-form-image", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](7, "app-form-cpu-ram", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](8, "app-form-gpus", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](9, "app-rok-form-workspace-volume", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](10, "app-rok-form-data-volumes", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](11, "app-rok-form-configurations", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](12, "app-form-affinity-tolerations", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](13, "app-form-advanced-options", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](14, "button", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function FormRokComponent_Template_button_click_14_listener() {
              return ctx.onSubmit();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](15, " LAUNCH ");

            _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](16, "button", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function FormRokComponent_Template_button_click_16_listener() {
              return ctx.onCancel();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](17, "CANCEL");

            _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("formGroup", ctx.formCtrl);

            _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("parentForm", ctx.formCtrl);

            _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("parentForm", ctx.formCtrl);

            _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("parentForm", ctx.formCtrl)("images", ctx.config == null ? null : ctx.config.image == null ? null : ctx.config.image.options)("imagesGroupOne", ctx.config == null ? null : ctx.config.imageGroupOne == null ? null : ctx.config.imageGroupOne.options)("imagesGroupTwo", ctx.config == null ? null : ctx.config.imageGroupTwo == null ? null : ctx.config.imageGroupTwo.options)("allowCustomImage", ctx.config == null ? null : ctx.config.allowCustomImage);

            _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("parentForm", ctx.formCtrl);

            _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("parentForm", ctx.formCtrl)("vendors", ctx.config == null ? null : ctx.config.gpus == null ? null : ctx.config.gpus.value.vendors);

            _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("parentForm", ctx.formCtrl)("pvcs", ctx.pvcs)("readonly", ctx.config == null ? null : ctx.config.workspaceVolume == null ? null : ctx.config.workspaceVolume.readOnly);

            _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("parentForm", ctx.formCtrl)("pvcs", ctx.pvcs)("readonly", ctx.config == null ? null : ctx.config.dataVolumes == null ? null : ctx.config.dataVolumes.readOnly);

            _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("parentForm", ctx.formCtrl);

            _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("parentForm", ctx.formCtrl)("affinityConfigs", ctx.config == null ? null : ctx.config.affinityConfig == null ? null : ctx.config.affinityConfig.options)("tolerationGroups", ctx.config == null ? null : ctx.config.tolerationGroup == null ? null : ctx.config.tolerationGroup.options);

            _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("parentForm", ctx.formCtrl);

            _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("disabled", !ctx.formCtrl.valid || ctx.blockSubmit);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_14__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormGroupDirective, _rok_jupyter_lab_selector_rok_jupyter_lab_selector_component__WEBPACK_IMPORTED_MODULE_4__.RokJupyterLabSelectorComponent, _form_default_form_name_form_name_component__WEBPACK_IMPORTED_MODULE_5__.FormNameComponent, _form_default_form_image_form_image_component__WEBPACK_IMPORTED_MODULE_6__.FormImageComponent, _form_default_form_cpu_ram_form_cpu_ram_component__WEBPACK_IMPORTED_MODULE_7__.FormCpuRamComponent, _form_default_form_gpus_form_gpus_component__WEBPACK_IMPORTED_MODULE_8__.FormGpusComponent, _rok_form_workspace_volume_rok_form_workspace_volume_component__WEBPACK_IMPORTED_MODULE_9__.RokFormWorkspaceVolumeComponent, _rok_form_data_volumes_rok_form_data_volumes_component__WEBPACK_IMPORTED_MODULE_10__.RokFormDataVolumesComponent, _rok_form_configurations_rok_form_configurations_component__WEBPACK_IMPORTED_MODULE_11__.RokFormConfigurationsComponent, _form_default_form_affinity_tolerations_form_affinity_tolerations_component__WEBPACK_IMPORTED_MODULE_12__.FormAffinityTolerationsComponent, _form_default_form_advanced_options_form_advanced_options_component__WEBPACK_IMPORTED_MODULE_13__.FormAdvancedOptionsComponent, _angular_material_button__WEBPACK_IMPORTED_MODULE_18__.MatButton],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb3JtLXJvay5jb21wb25lbnQuc2NzcyJ9 */", ".form--card-container[_ngcontent-%COMP%] {\n  width: 900px;\n  padding: 16px;\n  border-radius: 5px;\n  background: white;\n  margin-bottom: 12px;\n}\n\n.form-with-buttons[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n  margin-bottom: 2rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcm0tZGVmYXVsdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0FBQ0YiLCJmaWxlIjoiZm9ybS1kZWZhdWx0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvcm0tLWNhcmQtY29udGFpbmVyIHtcbiAgd2lkdGg6IDkwMHB4O1xuICBwYWRkaW5nOiAxNnB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBtYXJnaW4tYm90dG9tOiAxMnB4O1xufVxuXG4uZm9ybS13aXRoLWJ1dHRvbnMge1xuICBtYXJnaW4tdG9wOiAxcmVtO1xuICBtYXJnaW4tYm90dG9tOiAycmVtO1xufVxuIl19 */"]
      });
      /***/
    },

    /***/
    25052:
    /*!********************************************************!*\
      !*** ./src/app/pages/form/form-rok/form-rok.module.ts ***!
      \********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "FormRokModule": function FormRokModule() {
          return (
            /* binding */
            _FormRokModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/checkbox */
      7539);
      /* harmony import */


      var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/slide-toggle */
      45396);
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/icon */
      76627);
      /* harmony import */


      var kubeflow__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! kubeflow */
      90872);
      /* harmony import */


      var _form_rok_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./form-rok.component */
      65215);
      /* harmony import */


      var _form_default_form_default_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../form-default/form-default.module */
      45903);
      /* harmony import */


      var _rok_jupyter_lab_selector_rok_jupyter_lab_selector_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./rok-jupyter-lab-selector/rok-jupyter-lab-selector.component */
      4373);
      /* harmony import */


      var _rok_volume_rok_volume_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./rok-volume/rok-volume.component */
      77995);
      /* harmony import */


      var _rok_form_workspace_volume_rok_form_workspace_volume_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./rok-form-workspace-volume/rok-form-workspace-volume.component */
      11694);
      /* harmony import */


      var _rok_form_data_volumes_rok_form_data_volumes_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./rok-form-data-volumes/rok-form-data-volumes.component */
      95483);
      /* harmony import */


      var _rok_form_configurations_rok_form_configurations_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./rok-form-configurations/rok-form-configurations.component */
      70936);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _FormRokModule = function _FormRokModule() {
        _classCallCheck(this, _FormRokModule);
      };

      _FormRokModule.ɵfac = function FormRokModule_Factory(t) {
        return new (t || _FormRokModule)();
      };

      _FormRokModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({
        type: _FormRokModule
      });
      _FormRokModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, kubeflow__WEBPACK_IMPORTED_MODULE_9__.FormModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_10__.MatCheckboxModule, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_11__.MatSlideToggleModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__.MatIconModule, _form_default_form_default_module__WEBPACK_IMPORTED_MODULE_1__.FormDefaultModule]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](_FormRokModule, {
          declarations: [_form_rok_component__WEBPACK_IMPORTED_MODULE_0__.FormRokComponent, _rok_jupyter_lab_selector_rok_jupyter_lab_selector_component__WEBPACK_IMPORTED_MODULE_2__.RokJupyterLabSelectorComponent, _rok_volume_rok_volume_component__WEBPACK_IMPORTED_MODULE_3__.RokVolumeComponent, _rok_form_workspace_volume_rok_form_workspace_volume_component__WEBPACK_IMPORTED_MODULE_4__.RokFormWorkspaceVolumeComponent, _rok_form_data_volumes_rok_form_data_volumes_component__WEBPACK_IMPORTED_MODULE_5__.RokFormDataVolumesComponent, _rok_form_configurations_rok_form_configurations_component__WEBPACK_IMPORTED_MODULE_6__.RokFormConfigurationsComponent],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, kubeflow__WEBPACK_IMPORTED_MODULE_9__.FormModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_10__.MatCheckboxModule, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_11__.MatSlideToggleModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__.MatIconModule, _form_default_form_default_module__WEBPACK_IMPORTED_MODULE_1__.FormDefaultModule],
          exports: [_form_rok_component__WEBPACK_IMPORTED_MODULE_0__.FormRokComponent]
        });
      })();
      /***/

    },

    /***/
    70936:
    /*!**************************************************************************************************!*\
      !*** ./src/app/pages/form/form-rok/rok-form-configurations/rok-form-configurations.component.ts ***!
      \**************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "RokFormConfigurationsComponent": function RokFormConfigurationsComponent() {
          return (
            /* binding */
            _RokFormConfigurationsComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _form_default_form_configurations_form_configurations_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../form-default/form-configurations/form-configurations.component */
      64999);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var kubeflow__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! kubeflow */
      90872);
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/form-field */
      98295);
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/select */
      67441);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/input */
      83166);
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/core */
      5015);

      function RokFormConfigurationsComponent_mat_option_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var config_r1 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", config_r1.label);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", config_r1.desc, " ");
        }
      }

      var _RokFormConfigurationsComponent = /*#__PURE__*/function (_form_default_form_co) {
        _inherits(_RokFormConfigurationsComponent, _form_default_form_co);

        var _super2 = _createSuper(_RokFormConfigurationsComponent);

        function _RokFormConfigurationsComponent() {
          _classCallCheck(this, _RokFormConfigurationsComponent);

          return _super2.apply(this, arguments);
        }

        return _RokFormConfigurationsComponent;
      }(_form_default_form_configurations_form_configurations_component__WEBPACK_IMPORTED_MODULE_0__.FormConfigurationsComponent);

      _RokFormConfigurationsComponent.ɵfac = /*@__PURE__*/function () {
        var ɵRokFormConfigurationsComponent_BaseFactory;
        return function RokFormConfigurationsComponent_Factory(t) {
          return (ɵRokFormConfigurationsComponent_BaseFactory || (ɵRokFormConfigurationsComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](_RokFormConfigurationsComponent)))(t || _RokFormConfigurationsComponent);
        };
      }();

      _RokFormConfigurationsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: _RokFormConfigurationsComponent,
        selectors: [["app-rok-form-configurations"]],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
        decls: 12,
        vars: 3,
        consts: [["title", "Configurations", "text", "\n    Extra layers of configurations that will be applied to the new Notebook.\n    (e.g. Insert credentials as Secrets, set Environment Variables.)\n  ", "icon", "fa:fas:sliders-h"], ["appearance", "outline", 1, "wide"], ["multiple", "", 3, "formControl"], [3, "value", 4, "ngFor", "ngForOf"], ["matInput", "", "placeholder", "Environment variables in JSON", 3, "formControl"], [3, "value"]],
        template: function RokFormConfigurationsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "lib-form-section", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-form-field", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Configurations");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-select", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, RokFormConfigurationsComponent_mat_option_5_Template, 2, 2, "mat-option", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "mat-form-field", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Environment");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "input", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "mat-error");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Environment is invalid");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ctx.parentForm.get("configurations"));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.podDefaults);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ctx.parentForm.get("environment"));
          }
        },
        directives: [kubeflow__WEBPACK_IMPORTED_MODULE_2__.FormSectionComponent, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__.MatLabel, _angular_material_select__WEBPACK_IMPORTED_MODULE_4__.MatSelect, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControlDirective, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_material_input__WEBPACK_IMPORTED_MODULE_7__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__.MatError, _angular_material_core__WEBPACK_IMPORTED_MODULE_8__.MatOption],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyb2stZm9ybS1jb25maWd1cmF0aW9ucy5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /***/
    },

    /***/
    95483:
    /*!**********************************************************************************************!*\
      !*** ./src/app/pages/form/form-rok/rok-form-data-volumes/rok-form-data-volumes.component.ts ***!
      \**********************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "RokFormDataVolumesComponent": function RokFormDataVolumesComponent() {
          return (
            /* binding */
            _RokFormDataVolumesComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../utils */
      84933);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var kubeflow__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! kubeflow */
      90872);
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/button */
      51095);
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/icon */
      76627);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _rok_volume_rok_volume_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../rok-volume/rok-volume.component */
      77995);

      function RokFormDataVolumesComponent_div_5_Template(rf, ctx) {
        if (rf & 1) {
          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "app-rok-volume", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function RokFormDataVolumesComponent_div_5_Template_button_click_3_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4);

            var i_r2 = restoredCtx.index;

            var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r3.deleteVol(i_r2);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "delete");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var vol_r1 = ctx.$implicit;

          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("volume", vol_r1)("notebookName", ctx_r0.parentForm.get("name").value)("namespace", ctx_r0.parentForm.get("namespace").value)("pvcs", ctx_r0.pvcs)("ephemeral", false)("storageClasses", ctx_r0.storageClasses);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx_r0.readonly);
        }
      }

      var _RokFormDataVolumesComponent = /*#__PURE__*/function () {
        function _RokFormDataVolumesComponent(fb) {
          _classCallCheck(this, _RokFormDataVolumesComponent);

          this.fb = fb;
        }

        _createClass(_RokFormDataVolumesComponent, [{
          key: "datavols",
          get: function get() {
            var vols = this.parentForm.get('datavols');
            return vols.controls;
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "addVol",
          value: function addVol() {
            (0, _utils__WEBPACK_IMPORTED_MODULE_0__.addRokDataVolume)(this.parentForm);
          }
        }, {
          key: "deleteVol",
          value: function deleteVol(idx) {
            var vols = this.parentForm.get('datavols');
            vols.removeAt(idx);
            this.parentForm.updateValueAndValidity();
          }
        }]);

        return _RokFormDataVolumesComponent;
      }();

      _RokFormDataVolumesComponent.ɵfac = function RokFormDataVolumesComponent_Factory(t) {
        return new (t || _RokFormDataVolumesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder));
      };

      _RokFormDataVolumesComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: _RokFormDataVolumesComponent,
        selectors: [["app-rok-form-data-volumes"]],
        inputs: {
          parentForm: "parentForm",
          readonly: "readonly",
          pvcs: "pvcs",
          storageClasses: "storageClasses",
          token: "token"
        },
        decls: 6,
        vars: 2,
        consts: [["title", "Data Volumes", "text", "\n    Configure the Volumes to be mounted as your Datasets.\n  ", "icon", "fa:fas:hdd"], ["mat-stroked-button", "", "color", "accent", "type", "button", 1, "add-data-vol-button", 3, "disabled", "click"], ["class", "volume-wrapper", 4, "ngFor", "ngForOf"], [1, "volume-wrapper"], [3, "volume", "notebookName", "namespace", "pvcs", "ephemeral", "storageClasses"], [1, "del-btn"], ["mat-icon-button", "", "color", "warn", "type", "button", 3, "disabled", "click"]],
        template: function RokFormDataVolumesComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "lib-form-section", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "button", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function RokFormDataVolumesComponent_Template_button_click_1_listener() {
              return ctx.addVol();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "add");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "ADD VOLUME ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, RokFormDataVolumesComponent_div_5_Template, 6, 7, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.readonly);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.datavols);
          }
        },
        directives: [kubeflow__WEBPACK_IMPORTED_MODULE_4__.FormSectionComponent, _angular_material_button__WEBPACK_IMPORTED_MODULE_5__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__.MatIcon, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _rok_volume_rok_volume_component__WEBPACK_IMPORTED_MODULE_1__.RokVolumeComponent],
        styles: [".add-data-vol-button[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n}\n\n.volume-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n}\n\n.volume-wrapper[_ngcontent-%COMP%]    > app-rok-volume[_ngcontent-%COMP%] {\n  flex: 1 1 0px;\n  min-width: 0;\n  min-width: initial;\n  max-width: 93%;\n}\n\n.volume-wrapper[_ngcontent-%COMP%]    > .del-btn[_ngcontent-%COMP%] {\n  flex: 1 1 0px;\n  margin-top: 0.8rem;\n  margin-left: 1.5rem;\n  width: 7%;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJvay1mb3JtLWRhdGEtdm9sdW1lcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLG1CQUFBO0FBQUY7O0FBR0E7RUFDRSxhQUFBO0VBQ0EsV0FBQTtBQUFGOztBQUdBO0VBQ0UsYUFBQTtFQUNBLFlBQUE7RUFBQSxrQkFBQTtFQUNBLGNBQUE7QUFBRjs7QUFHQTtFQUNFLGFBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0FBQUYiLCJmaWxlIjoicm9rLWZvcm0tZGF0YS12b2x1bWVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gRGF0YSBWb2x1bWVzIHdpdGggdGhlIERlbGV0ZSBidXR0b25cbi5hZGQtZGF0YS12b2wtYnV0dG9uIHtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbn1cblxuLnZvbHVtZS13cmFwcGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi52b2x1bWUtd3JhcHBlciA+IGFwcC1yb2stdm9sdW1lIHtcbiAgZmxleDogMSAxIDBweDtcbiAgbWluLXdpZHRoOiBpbml0aWFsO1xuICBtYXgtd2lkdGg6IDkzJTtcbn1cblxuLnZvbHVtZS13cmFwcGVyID4gLmRlbC1idG4ge1xuICBmbGV4OiAxIDEgMHB4O1xuICBtYXJnaW4tdG9wOiAwLjhyZW07XG4gIG1hcmdpbi1sZWZ0OiAxLjVyZW07XG4gIHdpZHRoOiA3JTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuIl19 */"]
      });
      /***/
    },

    /***/
    11694:
    /*!******************************************************************************************************!*\
      !*** ./src/app/pages/form/form-rok/rok-form-workspace-volume/rok-form-workspace-volume.component.ts ***!
      \******************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "RokFormWorkspaceVolumeComponent": function RokFormWorkspaceVolumeComponent() {
          return (
            /* binding */
            _RokFormWorkspaceVolumeComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      10826);
      /* harmony import */


      var kubeflow__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! kubeflow */
      90872);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/checkbox */
      7539);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _rok_volume_rok_volume_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../rok-volume/rok-volume.component */
      77995);

      var _RokFormWorkspaceVolumeComponent = /*#__PURE__*/function () {
        function _RokFormWorkspaceVolumeComponent(snackBar) {
          _classCallCheck(this, _RokFormWorkspaceVolumeComponent);

          this.snackBar = snackBar;
          this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subscription();
        }

        _createClass(_RokFormWorkspaceVolumeComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this14 = this;

            // Show a warning if no persistent storage is provided
            this.subscriptions.add(this.parentForm.get('noWorkspace').valueChanges.subscribe(function (b) {
              // close the snackbar if deselected
              if (!b) {
                _this14.snackBar.close();
              } else {
                var msg = 'Your workspace will not be persistent. You will lose all ' + 'data in it, if your notebook is terminated for any reason.';

                _this14.snackBar.open(msg, kubeflow__WEBPACK_IMPORTED_MODULE_2__.SnackType.Warning, 0);
              }
            }));
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.subscriptions.unsubscribe();
          }
        }]);

        return _RokFormWorkspaceVolumeComponent;
      }();

      _RokFormWorkspaceVolumeComponent.ɵfac = function RokFormWorkspaceVolumeComponent_Factory(t) {
        return new (t || _RokFormWorkspaceVolumeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](kubeflow__WEBPACK_IMPORTED_MODULE_2__.SnackBarService));
      };

      _RokFormWorkspaceVolumeComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
        type: _RokFormWorkspaceVolumeComponent,
        selectors: [["app-rok-form-workspace-volume"]],
        inputs: {
          parentForm: "parentForm",
          readonly: "readonly",
          pvcs: "pvcs",
          storageClasses: "storageClasses",
          token: "token"
        },
        decls: 4,
        vars: 7,
        consts: [["title", "Workspace Volume", "text", "\n    Configure the Volume to be mounted as your personal Workspace.\n  ", "icon", "fa:fas:laptop-code"], [3, "formControl"], [3, "volume", "notebookName", "pvcs", "ephemeral", "namespace", "storageClasses"]],
        template: function RokFormWorkspaceVolumeComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "lib-form-section", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "mat-checkbox", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, " Don't use Persistent Storage for User's home ");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "app-rok-volume", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formControl", ctx.parentForm.get("noWorkspace"));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("volume", ctx.parentForm.get("workspace"))("notebookName", ctx.parentForm.value.name)("pvcs", ctx.pvcs)("ephemeral", ctx.parentForm.value.noWorkspace)("namespace", ctx.parentForm.value.namespace)("storageClasses", ctx.storageClasses);
          }
        },
        directives: [kubeflow__WEBPACK_IMPORTED_MODULE_2__.FormSectionComponent, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_4__.MatCheckbox, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControlDirective, _rok_volume_rok_volume_component__WEBPACK_IMPORTED_MODULE_0__.RokVolumeComponent],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyb2stZm9ybS13b3Jrc3BhY2Utdm9sdW1lLmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /***/
    },

    /***/
    4373:
    /*!****************************************************************************************************!*\
      !*** ./src/app/pages/form/form-rok/rok-jupyter-lab-selector/rok-jupyter-lab-selector.component.ts ***!
      \****************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "RokJupyterLabSelectorComponent": function RokJupyterLabSelectorComponent() {
          return (
            /* binding */
            _RokJupyterLabSelectorComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _app_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @app/environment */
      92340);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var kubeflow__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! kubeflow */
      90872);
      /* harmony import */


      var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../utils */
      84933);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _RokJupyterLabSelectorComponent = /*#__PURE__*/function () {
        function _RokJupyterLabSelectorComponent(rok, popup) {
          _classCallCheck(this, _RokJupyterLabSelectorComponent);

          this.rok = rok;
          this.popup = popup;
          this.env = _app_environment__WEBPACK_IMPORTED_MODULE_0__.environment;
          this.ctrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl('', [], [(0, kubeflow__WEBPACK_IMPORTED_MODULE_3__.rokUrlValidator)(this.rok)]);
        }

        _createClass(_RokJupyterLabSelectorComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "labAutofillClicked",
          value: function labAutofillClicked(url) {
            var _this15 = this;

            (0, _utils__WEBPACK_IMPORTED_MODULE_1__.getJupyterLabFromRokURL)(url, this.rok).subscribe(function (lab) {
              (0, _utils__WEBPACK_IMPORTED_MODULE_1__.setLabValues)(lab, _this15.parentForm); // Autofill the workspace volume

              var wsUrl = _this15.parentForm.get('workspace.extraFields.rokUrl').value;

              (0, _utils__WEBPACK_IMPORTED_MODULE_1__.getVolumeFromRokURL)(wsUrl, _this15.rok).subscribe(function (vol) {
                (0, _utils__WEBPACK_IMPORTED_MODULE_1__.setVolumeValues)(vol, _this15.parentForm.get('workspace'));
              }); // Autofill the data volumes

              var dataVols = _this15.parentForm.get('datavols');

              var _iterator2 = _createForOfIteratorHelper(dataVols.controls),
                  _step2;

              try {
                var _loop = function _loop() {
                  var volCtrl = _step2.value;
                  var volUrl = volCtrl.get('extraFields.rokUrl').value;
                  (0, _utils__WEBPACK_IMPORTED_MODULE_1__.getVolumeFromRokURL)(volUrl, _this15.rok).subscribe(function (vol) {
                    (0, _utils__WEBPACK_IMPORTED_MODULE_1__.setVolumeValues)(vol, volCtrl);
                  });
                };

                for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                  _loop();
                }
              } catch (err) {
                _iterator2.e(err);
              } finally {
                _iterator2.f();
              }

              _this15.popup.open('Successfully retrieved details from Rok Jupyter Lab URL', kubeflow__WEBPACK_IMPORTED_MODULE_3__.SnackType.Success, 4000);
            });
          }
        }]);

        return _RokJupyterLabSelectorComponent;
      }();

      _RokJupyterLabSelectorComponent.ɵfac = function RokJupyterLabSelectorComponent_Factory(t) {
        return new (t || _RokJupyterLabSelectorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](kubeflow__WEBPACK_IMPORTED_MODULE_3__.RokService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](kubeflow__WEBPACK_IMPORTED_MODULE_3__.SnackBarService));
      };

      _RokJupyterLabSelectorComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
        type: _RokJupyterLabSelectorComponent,
        selectors: [["app-rok-jupyter-lab-selector"]],
        inputs: {
          parentForm: "parentForm"
        },
        decls: 2,
        vars: 1,
        consts: [["title", "Rok JupyterLab URL", "text", "\n    Load an existing Jupyter Lab by providing a valid Rok URL.\n  ", "icon", "fa:fas:link"], [3, "control", "urlEntered"]],
        template: function RokJupyterLabSelectorComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "lib-form-section", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "lib-rok-url-input", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("urlEntered", function RokJupyterLabSelectorComponent_Template_lib_rok_url_input_urlEntered_1_listener($event) {
              return ctx.labAutofillClicked($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("control", ctx.ctrl);
          }
        },
        directives: [kubeflow__WEBPACK_IMPORTED_MODULE_3__.FormSectionComponent, kubeflow__WEBPACK_IMPORTED_MODULE_3__.RokUrlInputComponent],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyb2stanVweXRlci1sYWItc2VsZWN0b3IuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /***/
    },

    /***/
    77995:
    /*!************************************************************************!*\
      !*** ./src/app/pages/form/form-rok/rok-volume/rok-volume.component.ts ***!
      \************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "RokVolumeComponent": function RokVolumeComponent() {
          return (
            /* binding */
            _RokVolumeComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs */
      10826);
      /* harmony import */


      var kubeflow__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! kubeflow */
      90872);
      /* harmony import */


      var _app_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @app/environment */
      92340);
      /* harmony import */


      var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../utils */
      84933);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/form-field */
      98295);
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/select */
      67441);
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/core */
      5015);
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/input */
      83166);

      function RokVolumeComponent_div_0_Template(rf, ctx) {
        if (rf & 1) {
          var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mat-form-field", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Type");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "mat-select", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "mat-option", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "New");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "mat-option", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Existing");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "lib-rok-url-input", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("urlPasted", function RokVolumeComponent_div_0_Template_lib_rok_url_input_urlPasted_9_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r2);

            var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r1.autofillVolume($event);
          })("urlEntered", function RokVolumeComponent_div_0_Template_lib_rok_url_input_urlEntered_9_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r2);

            var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r3.autofillVolume($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "lib-name-input", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "lib-positive-number-input", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "mat-form-field", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "Mount Point");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](15, "input", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx_r0.volume);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("control", ctx_r0.volume.get("extraFields.rokUrl"));

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nameControl", ctx_r0.volume.get("name"));

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("sizeControl", ctx_r0.volume.get("size"));
        }
      }

      var _RokVolumeComponent = /*#__PURE__*/function () {
        // ----- Component Functions -----
        function _RokVolumeComponent(rok) {
          _classCallCheck(this, _RokVolumeComponent);

          this.rok = rok;
          this.nbName = '';
          this.origin = window.location.origin;
          this.env = _app_environment__WEBPACK_IMPORTED_MODULE_0__.environment;
          this.existingPVCs = [];
          this.readOnly = false;
          this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subscription();
          this.storageClasses = [];
        }

        _createClass(_RokVolumeComponent, [{
          key: "notebookName",
          get: function get() {
            return this.nbName;
          },
          set: function set(nm) {
            if (!this.volume.disabled) {
              this.notebookNameChanged(nm);
            }
          }
        }, {
          key: "ephemeral",
          set: function set(b) {
            if (!this.volume.disabled) {
              this.storageOptionChanged(b);
            }
          } // ----- Get macros -----

        }, {
          key: "selectedVolIsExistingType",
          get: function get() {
            return this.volume.value.type === 'Existing';
          }
        }, {
          key: "currentVolName",
          get: function get() {
            // Change volume name on notebook-name change, if user hasn't changed it already
            if (!this.volume.get('name').dirty) {
              return this.volume.get('templatedName').value.replace('{notebook-name}', this.notebookName || '');
            } else {
              return this.volume.get('name').value;
            }
          } // ----- utility functions -----

        }, {
          key: "updateVolPath",
          value: function updateVolPath() {
            // Change volume path on volume-name change, if user hasn't changed it already
            (0, kubeflow__WEBPACK_IMPORTED_MODULE_4__.updateNonDirtyControl)(this.volume.get('path'), this.volume.get('templatedPath').value.replace('{volume-name}', this.currentVolName));
          }
        }, {
          key: "updateVolType",
          value: function updateVolType(type) {
            var rokUrl = this.volume.get('extraFields.rokUrl');

            if (type === 'Existing') {
              // Enable rokUrl
              rokUrl.setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required);
              rokUrl.setAsyncValidators((0, kubeflow__WEBPACK_IMPORTED_MODULE_4__.rokUrlValidator)(this.rok));
              rokUrl.enable();
            } else {
              rokUrl.setValidators([]);
              rokUrl.setAsyncValidators([]);
              rokUrl.disable();
            }
          }
        }, {
          key: "autofillVolume",
          value: function autofillVolume(url) {
            var _this16 = this;

            (0, _utils__WEBPACK_IMPORTED_MODULE_1__.getVolumeFromRokURL)(url, this.rok).subscribe(function (vol) {
              (0, _utils__WEBPACK_IMPORTED_MODULE_1__.setVolumeValues)(vol, _this16.volume);
            });
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this17 = this;

            // type
            this.subscriptions.add(this.volume.get('type').valueChanges.subscribe(function (type) {
              _this17.updateVolType(type);
            })); // name

            this.subscriptions.add(this.volume.get('name').valueChanges.subscribe(function (name) {
              _this17.volume.get('name').setValue(name, {
                emitEvent: false
              }); // Fix mount point if user hasn't changed it and it's not workspace volume


              _this17.updateVolPath();
            }));
            this.updateVolPath();
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.subscriptions.unsubscribe();
          } // ----- @Input change handling functions -----

        }, {
          key: "notebookNameChanged",
          value: function notebookNameChanged(nm) {
            var _this18 = this;

            if (this.volume.disabled) {
              return;
            }

            this.nbName = nm;
            setTimeout(function () {
              (0, kubeflow__WEBPACK_IMPORTED_MODULE_4__.updateNonDirtyControl)(_this18.volume.get('name'), _this18.currentVolName);
            });
          }
        }, {
          key: "storageOptionChanged",
          value: function storageOptionChanged(ephemeral) {
            if (ephemeral) {
              // Disable all fields
              this.volume.controls.type.disable();
              this.volume.controls.extraFields.get('rokUrl').disable();
              this.volume.controls.name.disable();
              this.volume.controls.size.disable();
              this.volume.controls.mode.disable();
            } else if (!ephemeral && !this.selectedVolIsExistingType) {
              // New
              this.volume.controls.type.enable();
              this.volume.controls.name.enable();
              this.volume.controls.size.enable();
              this.volume.controls.mode.enable();
              this.volume.controls.extraFields.get('rokUrl').disable();
            } else {
              // Existing
              this.volume.controls.extraFields.get('rokUrl').enable();
            }
          }
        }]);

        return _RokVolumeComponent;
      }();

      _RokVolumeComponent.ɵfac = function RokVolumeComponent_Factory(t) {
        return new (t || _RokVolumeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](kubeflow__WEBPACK_IMPORTED_MODULE_4__.RokService));
      };

      _RokVolumeComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: _RokVolumeComponent,
        selectors: [["app-rok-volume"]],
        inputs: {
          volume: "volume",
          notebookName: "notebookName",
          ephemeral: "ephemeral",
          pvcs: "pvcs",
          namespace: "namespace",
          storageClasses: "storageClasses",
          token: "token"
        },
        decls: 1,
        vars: 1,
        consts: [["class", "row", 3, "formGroup", 4, "ngIf"], [1, "row", 3, "formGroup"], ["appearance", "outline", "id", "type", 1, "column"], ["formControlName", "type"], ["value", "New"], ["value", "Existing"], ["id", "rokUrl", "mode", "file", 1, "column", 3, "control", "urlPasted", "urlEntered"], ["id", "name", 1, "column", 3, "nameControl"], ["id", "size", "min", "1", "step", "1", "label", "Size in Gi", 1, "column", 3, "sizeControl"], ["appearance", "outline", "id", "path", 1, "column"], ["matInput", "", "formControlName", "path"]],
        template: function RokVolumeComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, RokVolumeComponent_div_0_Template, 16, 4, "div", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.volume);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatLabel, _angular_material_select__WEBPACK_IMPORTED_MODULE_8__.MatSelect, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControlName, _angular_material_core__WEBPACK_IMPORTED_MODULE_9__.MatOption, kubeflow__WEBPACK_IMPORTED_MODULE_4__.RokUrlInputComponent, kubeflow__WEBPACK_IMPORTED_MODULE_4__.NameInputComponent, kubeflow__WEBPACK_IMPORTED_MODULE_4__.PositiveNumberInputComponent, _angular_material_input__WEBPACK_IMPORTED_MODULE_10__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor],
        styles: ["#type[_ngcontent-%COMP%] {\n  max-width: 15%;\n}\n\n#size[_ngcontent-%COMP%] {\n  max-width: 10%;\n}\n\n#rokUrl[_ngcontent-%COMP%] {\n  max-width: 20%;\n}\n\n#name[_ngcontent-%COMP%] {\n  max-width: 30%;\n}\n\n#path[_ngcontent-%COMP%] {\n  max-width: 25%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJvay12b2x1bWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFBO0FBQ0Y7O0FBRUE7RUFDRSxjQUFBO0FBQ0Y7O0FBRUE7RUFDRSxjQUFBO0FBQ0Y7O0FBRUE7RUFDRSxjQUFBO0FBQ0Y7O0FBRUE7RUFDRSxjQUFBO0FBQ0YiLCJmaWxlIjoicm9rLXZvbHVtZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiN0eXBlIHtcbiAgbWF4LXdpZHRoOiAxNSU7XG59XG5cbiNzaXplIHtcbiAgbWF4LXdpZHRoOiAxMCU7XG59XG5cbiNyb2tVcmwge1xuICBtYXgtd2lkdGg6IDIwJTtcbn1cblxuI25hbWUge1xuICBtYXgtd2lkdGg6IDMwJTtcbn1cblxuI3BhdGgge1xuICBtYXgtd2lkdGg6IDI1JTtcbn1cbiJdfQ== */"]
      });
      /***/
    },

    /***/
    85438:
    /*!**********************************************!*\
      !*** ./src/app/pages/form/form-rok/types.ts ***!
      \**********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "emptyJupyterLab": function emptyJupyterLab() {
          return (
            /* binding */
            _emptyJupyterLab
          );
        }
        /* harmony export */

      });

      function _emptyJupyterLab() {
        return {
          namespace: '',
          images: [],
          image: '',
          cpu: '',
          memory: '',
          workspace: {
            type: '',
            name: '',
            size: 1,
            path: '',
            mode: '',
            extraFields: {}
          },
          datavols: [],
          extra: '{}'
        };
      }
      /***/

    },

    /***/
    84933:
    /*!**********************************************!*\
      !*** ./src/app/pages/form/form-rok/utils.ts ***!
      \**********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "createRokVolumeControl": function createRokVolumeControl() {
          return (
            /* binding */
            _createRokVolumeControl
          );
        },

        /* harmony export */
        "addRokDataVolume": function addRokDataVolume() {
          return (
            /* binding */
            _addRokDataVolume
          );
        },

        /* harmony export */
        "getJupyterLabFromRokURL": function getJupyterLabFromRokURL() {
          return (
            /* binding */
            _getJupyterLabFromRokURL
          );
        },

        /* harmony export */
        "getVolumeFromRokURL": function getVolumeFromRokURL() {
          return (
            /* binding */
            _getVolumeFromRokURL
          );
        },

        /* harmony export */
        "setLabValues": function setLabValues() {
          return (
            /* binding */
            _setLabValues
          );
        },

        /* harmony export */
        "setVolumeValues": function setVolumeValues() {
          return (
            /* binding */
            _setVolumeValues
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var src_app_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/types */
      20705);
      /* harmony import */


      var _form_default_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../form-default/utils */
      3261);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs/operators */
      88002);
      /* harmony import */


      var kubeflow__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! kubeflow */
      90872);
      /* harmony import */


      var _types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./types */
      85438);

      function _createRokVolumeControl(vol) {
        var volCtrl = (0, _form_default_utils__WEBPACK_IMPORTED_MODULE_1__.createVolumeControl)(vol); // Set the rokUrl in extraFields

        var extraFields = volCtrl.get('extraFields');
        extraFields.addControl('rokUrl', new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('', []));
        extraFields.disable();
        return volCtrl;
      }

      function _addRokDataVolume(formCtrl) {
        var vol = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

        // If no vol is provided create one with default values
        if (vol === null) {
          var l = formCtrl.value.datavols.length;
          var name = '{notebook-name}-vol-' + (l + 1);
          vol = {
            type: {
              value: 'New'
            },
            name: {
              value: name
            },
            size: {
              value: '5'
            },
            mountPath: {
              value: '/home/jovyan/{volume-name}'
            },
            accessModes: {
              value: 'ReadWriteOnce'
            }
          };
        } // Push it to the control


        var vols = formCtrl.get('datavols');
        vols.push(_createRokVolumeControl(vol));
      } // Functions to create Autofilled Rok Objects


      function _getJupyterLabFromRokURL(url, rok) {
        return rok.getObjectMetadata(url).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(function (headers) {
          var notebook = (0, _types__WEBPACK_IMPORTED_MODULE_2__.emptyJupyterLab)(); // Fill the notebook with the info from the response

          notebook.namespace = headers.get('X-Object-Meta-namespace');
          notebook.image = headers.get('X-Object-Meta-image'); // Convert CPU to number

          notebook.cpu = headers.get('X-Object-Meta-cpu');

          if (typeof notebook.cpu === 'number') {} else if (notebook.cpu.includes('m')) {
            var cpu = parseInt(notebook.cpu.replace('m', ''), 10);
            notebook.cpu = cpu / 1000;
          } // Convert memory to Gi


          var memory = headers.get('X-Object-Meta-memory');

          if (memory.includes('G')) {
            notebook.memory = parseInt(memory.replace('G', ''), 10);
          } else if (memory.includes('M')) {
            notebook.memory = parseInt(memory.replace('M', ''), 10) / 1000;
          } else {
            notebook.memory = parseInt(memory, 10);
          }

          notebook.environment = headers.get('X-Object-Meta-environment'); // Workspace Volume

          var workspaceRokUrl = headers.get('X-Object-Group-Member-0-URL');
          notebook.workspace.extraFields = {
            // rokUrl: baseUrl + obj + '?version=' + version,
            rokUrl: workspaceRokUrl
          }; // Data Volumes

          var volsNum = headers.get('X-Object-Group-Member-Count');

          for (var i = 1; i < parseInt(volsNum, 10); i++) {
            var volRokUrl = headers.get('X-Object-Group-Member-' + i + '-URL');
            var vol = (0, src_app_types__WEBPACK_IMPORTED_MODULE_0__.emptyVolume)();
            vol.extraFields = {
              // rokUrl: baseUrl + obj + '?version=' + version,
              rokUrl: volRokUrl
            };
            notebook.datavols.push(vol);
          }

          return notebook;
        }));
      }

      function _getVolumeFromRokURL(url, rok) {
        return rok.getObjectMetadata(url).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(function (headers) {
          console.log("Creating volume object from return metadata");
          var volume = (0, src_app_types__WEBPACK_IMPORTED_MODULE_0__.emptyVolume)(); // Fill the notebook with the info from the response

          volume.name = headers.get('X-Object-Meta-dataset');

          if (volume.name === null) {
            volume.name = headers.get('X-Object-Meta-workspace');
          }

          var size = parseInt(headers.get('Content-Length'), 10);
          volume.size = size / Math.pow(1024, 3);
          volume.path = headers.get('X-Object-Meta-mountpoint');
          console.log("Created volume object: ".concat(JSON.stringify(volume)));
          return volume;
        }));
      } // Functions for autofilling control values


      function _setLabValues(lab, formCtrl) {
        console.log("Setting Jupyter Lab form values based on object: ".concat(JSON.stringify(lab)));
        formCtrl.get('customImage').setValue(lab.image);
        formCtrl.get('customImageCheck').setValue(true);
        formCtrl.get('cpu').setValue(lab.cpu);
        formCtrl.get('memory').setValue(lab.memory); // Change env only if it exists

        if (lab.environment !== null) {
          formCtrl.get('environment').setValue(lab.environment);
        } // Set the workspace volume


        formCtrl.get('workspace').get('extraFields').get('rokUrl').setValue(lab.workspace.extraFields.rokUrl);
        formCtrl.get('workspace').get('type').setValue('Existing'); // Clear the existing Data Volumes array

        var dataVols = formCtrl.get('datavols');

        while (dataVols.length !== 0) {
          dataVols.removeAt(0);
        }

        var _iterator3 = _createForOfIteratorHelper(lab.datavols),
            _step3;

        try {
          for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
            var vol = _step3.value;

            _addRokDataVolume(formCtrl);
          } // Set each volume to existing type

        } catch (err) {
          _iterator3.e(err);
        } finally {
          _iterator3.f();
        }

        var volsArr = formCtrl.get('datavols');

        for (var i = 0; i < lab.datavols.length; i++) {
          volsArr.at(i).get('extraFields').get('rokUrl').setValue(lab.datavols[i].extraFields.rokUrl);
          volsArr.at(i).get('type').setValue('Existing');
        }
      }

      function _setVolumeValues(vol, volCtrl) {
        console.log("Setting Volume form values based on object: ".concat(JSON.stringify(vol)));
        var volProps = {
          size: vol.size,
          name: vol.name,
          path: vol.path
        };

        for (var prop in volProps) {
          if (volProps.hasOwnProperty(prop)) {
            (0, kubeflow__WEBPACK_IMPORTED_MODULE_5__.updateControlNonNullValue)(volCtrl.get(prop), volProps[prop], "Provided volume has null value for property '".concat(prop, "'. ") + "Will NOT override the current value.");
          }
        }
      }
      /***/

    },

    /***/
    45804:
    /*!**********************************************!*\
      !*** ./src/app/pages/form/form.component.ts ***!
      \**********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "FormComponent": function FormComponent() {
          return (
            /* binding */
            _FormComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _app_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @app/environment */
      92340);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _form_default_form_default_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./form-default/form-default.component */
      70849);
      /* harmony import */


      var _form_rok_form_rok_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./form-rok/form-rok.component */
      65215);

      function FormComponent_app_form_default_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-form-default");
        }
      }

      function FormComponent_app_form_rok_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-form-rok");
        }
      }

      var _FormComponent = /*#__PURE__*/function () {
        function _FormComponent() {
          _classCallCheck(this, _FormComponent);

          this.env = _app_environment__WEBPACK_IMPORTED_MODULE_0__.environment;
        }

        _createClass(_FormComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return _FormComponent;
      }();

      _FormComponent.ɵfac = function FormComponent_Factory(t) {
        return new (t || _FormComponent)();
      };

      _FormComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
        type: _FormComponent,
        selectors: [["app-form"]],
        decls: 2,
        vars: 2,
        consts: [[4, "ngIf"]],
        template: function FormComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, FormComponent_app_form_default_0_Template, 1, 0, "app-form-default", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, FormComponent_app_form_rok_1_Template, 1, 0, "app-form-rok", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.env.ui === "default");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.env.ui === "rok");
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _form_default_form_default_component__WEBPACK_IMPORTED_MODULE_1__.FormDefaultComponent, _form_rok_form_rok_component__WEBPACK_IMPORTED_MODULE_2__.FormRokComponent],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb3JtLmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /***/
    },

    /***/
    29552:
    /*!*******************************************!*\
      !*** ./src/app/pages/form/form.module.ts ***!
      \*******************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "FormModule": function FormModule() {
          return (
            /* binding */
            _FormModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/core */
      5015);
      /* harmony import */


      var _form_default_form_default_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./form-default/form-default.module */
      45903);
      /* harmony import */


      var _form_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./form.component */
      45804);
      /* harmony import */


      var kubeflow__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! kubeflow */
      90872);
      /* harmony import */


      var _form_rok_form_rok_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./form-rok/form-rok.module */
      25052);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _FormModule = function _FormModule() {
        _classCallCheck(this, _FormModule);
      };

      _FormModule.ɵfac = function FormModule_Factory(t) {
        return new (t || _FormModule)();
      };

      _FormModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
        type: _FormModule
      });
      _FormModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
        providers: [{
          provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_4__.ErrorStateMatcher,
          useClass: kubeflow__WEBPACK_IMPORTED_MODULE_5__.ImmediateErrorStateMatcher
        }],
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _form_default_form_default_module__WEBPACK_IMPORTED_MODULE_0__.FormDefaultModule, _form_rok_form_rok_module__WEBPACK_IMPORTED_MODULE_2__.FormRokModule]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](_FormModule, {
          declarations: [_form_component__WEBPACK_IMPORTED_MODULE_1__.FormComponent],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _form_default_form_default_module__WEBPACK_IMPORTED_MODULE_0__.FormDefaultModule, _form_rok_form_rok_module__WEBPACK_IMPORTED_MODULE_2__.FormRokModule]
        });
      })();
      /***/

    },

    /***/
    94295:
    /*!*****************************************************!*\
      !*** ./src/app/pages/index/index-default/config.ts ***!
      \*****************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "getDeleteDialogConfig": function getDeleteDialogConfig() {
          return (
            /* binding */
            _getDeleteDialogConfig
          );
        },

        /* harmony export */
        "getStopDialogConfig": function getStopDialogConfig() {
          return (
            /* binding */
            _getStopDialogConfig
          );
        },

        /* harmony export */
        "defaultConfig": function defaultConfig() {
          return (
            /* binding */
            _defaultConfig
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var kubeflow__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! kubeflow */
      90872);
      /* harmony import */


      var _server_type_server_type_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./server-type/server-type.component */
      31610); // --- Configs for the Confirm Dialogs ---


      function _getDeleteDialogConfig(name) {
        return {
          title: $localize(_templateObject65 || (_templateObject65 = _taggedTemplateLiteral(["Are you sure you want to delete this notebook server? ", ""])), name),
          message: $localize(_templateObject66 || (_templateObject66 = _taggedTemplateLiteral(["Warning: Your data might be lost if the notebook server\n                       is not backed by persistent storage"]))),
          accept: $localize(_templateObject67 || (_templateObject67 = _taggedTemplateLiteral(["DELETE"]))),
          confirmColor: 'warn',
          cancel: $localize(_templateObject68 || (_templateObject68 = _taggedTemplateLiteral(["CANCEL"]))),
          error: '',
          applying: $localize(_templateObject69 || (_templateObject69 = _taggedTemplateLiteral(["DELETING"]))),
          width: '600px'
        };
      }

      function _getStopDialogConfig(name) {
        return {
          title: $localize(_templateObject70 || (_templateObject70 = _taggedTemplateLiteral(["Are you sure you want to stop this notebook server? ", ""])), name),
          message: $localize(_templateObject71 || (_templateObject71 = _taggedTemplateLiteral(["Warning: Your data might be lost if the notebook server\n                       is not backed by persistent storage."]))),
          accept: $localize(_templateObject72 || (_templateObject72 = _taggedTemplateLiteral(["STOP"]))),
          confirmColor: 'primary',
          cancel: $localize(_templateObject73 || (_templateObject73 = _taggedTemplateLiteral(["CANCEL"]))),
          error: '',
          applying: $localize(_templateObject74 || (_templateObject74 = _taggedTemplateLiteral(["STOPPING"]))),
          width: '600px'
        };
      } // --- Config for the Resource Table ---


      var _defaultConfig = {
        title: $localize(_templateObject75 || (_templateObject75 = _taggedTemplateLiteral(["Notebooks"]))),
        newButtonText: $localize(_templateObject76 || (_templateObject76 = _taggedTemplateLiteral(["NEW NOTEBOOK"]))),
        columns: [{
          matHeaderCellDef: $localize(_templateObject77 || (_templateObject77 = _taggedTemplateLiteral(["Status"]))),
          matColumnDef: 'status',
          value: new kubeflow__WEBPACK_IMPORTED_MODULE_1__.StatusValue()
        }, {
          matHeaderCellDef: $localize(_templateObject78 || (_templateObject78 = _taggedTemplateLiteral(["Name"]))),
          matColumnDef: 'name',
          value: new kubeflow__WEBPACK_IMPORTED_MODULE_1__.PropertyValue({
            field: 'name',
            truncate: kubeflow__WEBPACK_IMPORTED_MODULE_1__.TRUNCATE_TEXT_SIZE.SMALL,
            tooltipField: 'name'
          })
        }, {
          matHeaderCellDef: $localize(_templateObject79 || (_templateObject79 = _taggedTemplateLiteral(["Type"]))),
          matColumnDef: 'type',
          value: new kubeflow__WEBPACK_IMPORTED_MODULE_1__.ComponentValue({
            component: _server_type_server_type_component__WEBPACK_IMPORTED_MODULE_0__.ServerTypeComponent
          })
        }, {
          matHeaderCellDef: $localize(_templateObject80 || (_templateObject80 = _taggedTemplateLiteral(["Age"]))),
          matColumnDef: 'age',
          value: new kubeflow__WEBPACK_IMPORTED_MODULE_1__.PropertyValue({
            field: 'age'
          })
        }, {
          matHeaderCellDef: $localize(_templateObject81 || (_templateObject81 = _taggedTemplateLiteral(["Image"]))),
          matColumnDef: 'image',
          value: new kubeflow__WEBPACK_IMPORTED_MODULE_1__.PropertyValue({
            field: 'shortImage',
            tooltipField: 'image',
            truncate: kubeflow__WEBPACK_IMPORTED_MODULE_1__.TRUNCATE_TEXT_SIZE.MEDIUM
          })
        }, {
          matHeaderCellDef: $localize(_templateObject82 || (_templateObject82 = _taggedTemplateLiteral(["GPUs"]))),
          matColumnDef: 'gpus',
          value: new kubeflow__WEBPACK_IMPORTED_MODULE_1__.PropertyValue({
            field: 'gpus.count',
            tooltipField: 'gpus.message'
          })
        }, {
          matHeaderCellDef: $localize(_templateObject83 || (_templateObject83 = _taggedTemplateLiteral(["CPUs"]))),
          matColumnDef: 'cpu',
          value: new kubeflow__WEBPACK_IMPORTED_MODULE_1__.PropertyValue({
            field: 'cpu'
          })
        }, {
          matHeaderCellDef: $localize(_templateObject84 || (_templateObject84 = _taggedTemplateLiteral(["Memory"]))),
          matColumnDef: 'memory',
          value: new kubeflow__WEBPACK_IMPORTED_MODULE_1__.PropertyValue({
            field: 'memory'
          })
        }, {
          matHeaderCellDef: $localize(_templateObject85 || (_templateObject85 = _taggedTemplateLiteral(["Volumes"]))),
          matColumnDef: 'volumes',
          value: new kubeflow__WEBPACK_IMPORTED_MODULE_1__.MenuValue({
            field: 'volumes',
            itemsIcon: 'storage'
          })
        }, {
          matHeaderCellDef: '',
          matColumnDef: 'actions',
          value: new kubeflow__WEBPACK_IMPORTED_MODULE_1__.ActionListValue([new kubeflow__WEBPACK_IMPORTED_MODULE_1__.ActionButtonValue({
            name: 'connect',
            tooltip: $localize(_templateObject86 || (_templateObject86 = _taggedTemplateLiteral(["Connect to this notebook server"]))),
            color: 'primary',
            field: 'connectAction',
            text: $localize(_templateObject87 || (_templateObject87 = _taggedTemplateLiteral(["CONNECT"])))
          }), new kubeflow__WEBPACK_IMPORTED_MODULE_1__.ActionIconValue({
            name: 'start-stop',
            tooltipInit: $localize(_templateObject88 || (_templateObject88 = _taggedTemplateLiteral(["Stop this notebook server"]))),
            tooltipReady: $localize(_templateObject89 || (_templateObject89 = _taggedTemplateLiteral(["Start this notebook server"]))),
            color: '',
            field: 'startStopAction',
            iconInit: 'material:stop',
            iconReady: 'material:play_arrow'
          }), new kubeflow__WEBPACK_IMPORTED_MODULE_1__.ActionIconValue({
            name: 'delete',
            tooltip: $localize(_templateObject90 || (_templateObject90 = _taggedTemplateLiteral(["Delete this notebook server"]))),
            color: '',
            field: 'deleteAction',
            iconReady: 'material:delete'
          })])
        }]
      };
      /***/
    },

    /***/
    10946:
    /*!**********************************************************************!*\
      !*** ./src/app/pages/index/index-default/index-default.component.ts ***!
      \**********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "IndexDefaultComponent": function IndexDefaultComponent() {
          return (
            /* binding */
            _IndexDefaultComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _app_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @app/environment */
      92340);
      /* harmony import */


      var kubeflow__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! kubeflow */
      90872);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs */
      10826);
      /* harmony import */


      var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./config */
      94295);
      /* harmony import */


      var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! lodash */
      23815);
      /* harmony import */


      var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var src_app_services_backend_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/backend.service */
      90600);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common */
      38583);

      function IndexDefaultComponent_lib_namespace_select_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "lib-namespace-select");
        }
      }

      var _IndexDefaultComponent = /*#__PURE__*/function () {
        function _IndexDefaultComponent(ns, backend, confirmDialog, snackBar, router) {
          _classCallCheck(this, _IndexDefaultComponent);

          this.ns = ns;
          this.backend = backend;
          this.confirmDialog = confirmDialog;
          this.snackBar = snackBar;
          this.router = router;
          this.env = _app_environment__WEBPACK_IMPORTED_MODULE_0__.environment;
          this.currNamespace = '';
          this.subs = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subscription();
          this.config = _config__WEBPACK_IMPORTED_MODULE_1__.defaultConfig;
          this.rawData = [];
          this.processedData = [];
        }

        _createClass(_IndexDefaultComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this19 = this;

            this.poller = new kubeflow__WEBPACK_IMPORTED_MODULE_6__.ExponentialBackoff({
              interval: 1000,
              retries: 3
            }); // Poll for new data and reset the poller if different data is found

            this.subs.add(this.poller.start().subscribe(function () {
              if (!_this19.currNamespace) {
                return;
              }

              _this19.backend.getNotebooks(_this19.currNamespace).subscribe(function (notebooks) {
                if (!(0, lodash__WEBPACK_IMPORTED_MODULE_2__.isEqual)(_this19.rawData, notebooks)) {
                  _this19.rawData = notebooks; // Update the frontend's state

                  _this19.processedData = _this19.processIncomingData(notebooks);

                  _this19.poller.reset();
                }
              });
            })); // Reset the poller whenever the selected namespace changes

            this.subs.add(this.ns.getSelectedNamespace().subscribe(function (ns) {
              _this19.currNamespace = ns;

              _this19.poller.reset();
            }));
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.subs.unsubscribe();
            this.poller.stop();
          } // Event handling functions

        }, {
          key: "reactToAction",
          value: function reactToAction(a) {
            switch (a.action) {
              case 'newResourceButton':
                // TODO: could also use enums here
                this.newResourceClicked();
                break;

              case 'delete':
                this.deleteVolumeClicked(a.data);
                break;

              case 'connect':
                this.connectClicked(a.data);
                break;

              case 'start-stop':
                this.startStopClicked(a.data);
                break;
            }
          }
        }, {
          key: "newResourceClicked",
          value: function newResourceClicked() {
            // Redirect to form page
            this.router.navigate(['/new']);
          }
        }, {
          key: "deleteVolumeClicked",
          value: function deleteVolumeClicked(notebook) {
            var _this20 = this;

            var deleteDialogConfig = (0, _config__WEBPACK_IMPORTED_MODULE_1__.getDeleteDialogConfig)(notebook.name);
            var ref = this.confirmDialog.open(notebook.name, deleteDialogConfig);
            var delSub = ref.componentInstance.applying$.subscribe(function (applying) {
              if (!applying) {
                return;
              } // Close the open dialog only if the DELETE request succeeded


              _this20.backend.deleteNotebook(_this20.currNamespace, notebook.name).subscribe({
                next: function next(_) {
                  _this20.poller.reset();

                  ref.close(kubeflow__WEBPACK_IMPORTED_MODULE_6__.DIALOG_RESP.ACCEPT);
                },
                error: function error(err) {
                  var errorMsg = err;
                  deleteDialogConfig.error = errorMsg;
                  ref.componentInstance.applying$.next(false);
                }
              }); // DELETE request has succeeded


              ref.afterClosed().subscribe(function (res) {
                delSub.unsubscribe();

                if (res !== kubeflow__WEBPACK_IMPORTED_MODULE_6__.DIALOG_RESP.ACCEPT) {
                  return;
                }

                notebook.status.phase = kubeflow__WEBPACK_IMPORTED_MODULE_6__.STATUS_TYPE.TERMINATING;
                notebook.status.message = 'Preparing to delete the Notebook...';

                _this20.updateNotebookFields(notebook);
              });
            });
          }
        }, {
          key: "connectClicked",
          value: function connectClicked(notebook) {
            // Open new tab to work on the Notebook
            console.log("Server Type");
            console.log(notebook.serverType);
            window.open("/notebook/".concat(notebook.namespace, "/").concat(notebook.name, "/?server=").concat(notebook.serverType));
          }
        }, {
          key: "startStopClicked",
          value: function startStopClicked(notebook) {
            if (notebook.status.phase === kubeflow__WEBPACK_IMPORTED_MODULE_6__.STATUS_TYPE.STOPPED) {
              this.startNotebook(notebook);
            } else {
              this.stopNotebook(notebook);
            }
          }
        }, {
          key: "startNotebook",
          value: function startNotebook(notebook) {
            var _this21 = this;

            this.snackBar.open($localize(_templateObject91 || (_templateObject91 = _taggedTemplateLiteral(["Starting Notebook server '", "'..."])), notebook.name), kubeflow__WEBPACK_IMPORTED_MODULE_6__.SnackType.Info, 3000);
            notebook.status.phase = kubeflow__WEBPACK_IMPORTED_MODULE_6__.STATUS_TYPE.WAITING;
            notebook.status.message = 'Starting the Notebook Server...';
            this.updateNotebookFields(notebook);
            this.backend.startNotebook(notebook).subscribe(function () {
              _this21.poller.reset();
            });
          }
        }, {
          key: "stopNotebook",
          value: function stopNotebook(notebook) {
            var _this22 = this;

            var stopDialogConfig = (0, _config__WEBPACK_IMPORTED_MODULE_1__.getStopDialogConfig)(notebook.name);
            var ref = this.confirmDialog.open(notebook.name, stopDialogConfig);
            var stopSub = ref.componentInstance.applying$.subscribe(function (applying) {
              if (!applying) {
                return;
              } // Close the open dialog only if the request succeeded


              _this22.backend.stopNotebook(notebook).subscribe({
                next: function next(_) {
                  _this22.poller.reset();

                  ref.close(kubeflow__WEBPACK_IMPORTED_MODULE_6__.DIALOG_RESP.ACCEPT);
                },
                error: function error(err) {
                  var errorMsg = err;
                  stopDialogConfig.error = errorMsg;
                  ref.componentInstance.applying$.next(false);
                }
              }); // request has succeeded


              ref.afterClosed().subscribe(function (res) {
                stopSub.unsubscribe();

                if (res !== kubeflow__WEBPACK_IMPORTED_MODULE_6__.DIALOG_RESP.ACCEPT) {
                  return;
                }

                _this22.snackBar.open($localize(_templateObject92 || (_templateObject92 = _taggedTemplateLiteral(["Stopping Notebook server '", "'..."])), notebook.name), kubeflow__WEBPACK_IMPORTED_MODULE_6__.SnackType.Info, 3000);

                notebook.status.phase = kubeflow__WEBPACK_IMPORTED_MODULE_6__.STATUS_TYPE.TERMINATING;
                notebook.status.message = 'Preparing to stop the Notebook Server...';

                _this22.updateNotebookFields(notebook);
              });
            });
          } // Data processing functions

        }, {
          key: "updateNotebookFields",
          value: function updateNotebookFields(notebook) {
            notebook.deleteAction = this.processDeletionActionStatus(notebook);
            notebook.connectAction = this.processConnectActionStatus(notebook);
            notebook.startStopAction = this.processStartStopActionStatus(notebook);
          }
        }, {
          key: "processIncomingData",
          value: function processIncomingData(notebooks) {
            var notebooksCopy = JSON.parse(JSON.stringify(notebooks));

            var _iterator4 = _createForOfIteratorHelper(notebooksCopy),
                _step4;

            try {
              for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
                var nb = _step4.value;
                this.updateNotebookFields(nb);
              }
            } catch (err) {
              _iterator4.e(err);
            } finally {
              _iterator4.f();
            }

            return notebooksCopy;
          } // Action handling functions

        }, {
          key: "processDeletionActionStatus",
          value: function processDeletionActionStatus(notebook) {
            if (notebook.status.phase !== kubeflow__WEBPACK_IMPORTED_MODULE_6__.STATUS_TYPE.TERMINATING) {
              return kubeflow__WEBPACK_IMPORTED_MODULE_6__.STATUS_TYPE.READY;
            }

            return kubeflow__WEBPACK_IMPORTED_MODULE_6__.STATUS_TYPE.TERMINATING;
          }
        }, {
          key: "processStartStopActionStatus",
          value: function processStartStopActionStatus(notebook) {
            // Stop button
            if (notebook.status.phase === kubeflow__WEBPACK_IMPORTED_MODULE_6__.STATUS_TYPE.READY) {
              return kubeflow__WEBPACK_IMPORTED_MODULE_6__.STATUS_TYPE.UNINITIALIZED;
            } // Start button


            if (notebook.status.phase === kubeflow__WEBPACK_IMPORTED_MODULE_6__.STATUS_TYPE.STOPPED) {
              return kubeflow__WEBPACK_IMPORTED_MODULE_6__.STATUS_TYPE.READY;
            } // If it is terminating, then the action should be disabled


            if (notebook.status.phase === kubeflow__WEBPACK_IMPORTED_MODULE_6__.STATUS_TYPE.TERMINATING) {
              return kubeflow__WEBPACK_IMPORTED_MODULE_6__.STATUS_TYPE.UNAVAILABLE;
            } // If the Notebook is not Terminating, then always allow the stop action


            return kubeflow__WEBPACK_IMPORTED_MODULE_6__.STATUS_TYPE.UNINITIALIZED;
          }
        }, {
          key: "processConnectActionStatus",
          value: function processConnectActionStatus(notebook) {
            if (notebook.status.phase !== kubeflow__WEBPACK_IMPORTED_MODULE_6__.STATUS_TYPE.READY) {
              return kubeflow__WEBPACK_IMPORTED_MODULE_6__.STATUS_TYPE.UNAVAILABLE;
            }

            return kubeflow__WEBPACK_IMPORTED_MODULE_6__.STATUS_TYPE.READY;
          }
        }, {
          key: "notebookTrackByFn",
          value: function notebookTrackByFn(index, notebook) {
            return "".concat(notebook.name, "/").concat(notebook.image);
          }
        }]);

        return _IndexDefaultComponent;
      }();

      _IndexDefaultComponent.ɵfac = function IndexDefaultComponent_Factory(t) {
        return new (t || _IndexDefaultComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](kubeflow__WEBPACK_IMPORTED_MODULE_6__.NamespaceService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_backend_service__WEBPACK_IMPORTED_MODULE_3__.JWABackendService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](kubeflow__WEBPACK_IMPORTED_MODULE_6__.ConfirmDialogService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](kubeflow__WEBPACK_IMPORTED_MODULE_6__.SnackBarService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router));
      };

      _IndexDefaultComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
        type: _IndexDefaultComponent,
        selectors: [["app-index-default"]],
        decls: 2,
        vars: 4,
        consts: [[4, "ngIf"], [3, "config", "data", "trackByFn", "actionsEmitter"]],
        template: function IndexDefaultComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, IndexDefaultComponent_lib_namespace_select_0_Template, 1, 0, "lib-namespace-select", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "lib-resource-table", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("actionsEmitter", function IndexDefaultComponent_Template_lib_resource_table_actionsEmitter_1_listener($event) {
              return ctx.reactToAction($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.env.production);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("config", ctx.config)("data", ctx.processedData)("trackByFn", ctx.notebookTrackByFn);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, kubeflow__WEBPACK_IMPORTED_MODULE_6__.ResourceTableComponent, kubeflow__WEBPACK_IMPORTED_MODULE_6__.NamespaceSelectComponent],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbmRleC1kZWZhdWx0LmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /***/
    },

    /***/
    67390:
    /*!*******************************************************************!*\
      !*** ./src/app/pages/index/index-default/index-default.module.ts ***!
      \*******************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "IndexDefaultModule": function IndexDefaultModule() {
          return (
            /* binding */
            _IndexDefaultModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _index_default_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./index-default.component */
      10946);
      /* harmony import */


      var kubeflow__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! kubeflow */
      90872);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _IndexDefaultModule = function _IndexDefaultModule() {
        _classCallCheck(this, _IndexDefaultModule);
      };

      _IndexDefaultModule.ɵfac = function IndexDefaultModule_Factory(t) {
        return new (t || _IndexDefaultModule)();
      };

      _IndexDefaultModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: _IndexDefaultModule
      });
      _IndexDefaultModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, kubeflow__WEBPACK_IMPORTED_MODULE_3__.ResourceTableModule, kubeflow__WEBPACK_IMPORTED_MODULE_3__.NamespaceSelectModule, kubeflow__WEBPACK_IMPORTED_MODULE_3__.ConfirmDialogModule]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](_IndexDefaultModule, {
          declarations: [_index_default_component__WEBPACK_IMPORTED_MODULE_0__.IndexDefaultComponent],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, kubeflow__WEBPACK_IMPORTED_MODULE_3__.ResourceTableModule, kubeflow__WEBPACK_IMPORTED_MODULE_3__.NamespaceSelectModule, kubeflow__WEBPACK_IMPORTED_MODULE_3__.ConfirmDialogModule],
          exports: [_index_default_component__WEBPACK_IMPORTED_MODULE_0__.IndexDefaultComponent]
        });
      })();
      /***/

    },

    /***/
    31610:
    /*!********************************************************************************!*\
      !*** ./src/app/pages/index/index-default/server-type/server-type.component.ts ***!
      \********************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ServerTypeComponent": function ServerTypeComponent() {
          return (
            /* binding */
            _ServerTypeComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _app_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @app/environment */
      92340);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/icon */
      76627);
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser */
      39075);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      38583);

      function ServerTypeComponent_mat_icon_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "mat-icon", 3);
        }
      }

      function ServerTypeComponent_mat_icon_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "mat-icon", 4);
        }
      }

      function ServerTypeComponent_mat_icon_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "mat-icon", 5);
        }
      }

      var _ServerTypeComponent = /*#__PURE__*/function () {
        function _ServerTypeComponent(iconRegistry, sanitizer) {
          _classCallCheck(this, _ServerTypeComponent);

          iconRegistry.addSvgIcon('jupyterlab-icon', sanitizer.bypassSecurityTrustResourceUrl(_app_environment__WEBPACK_IMPORTED_MODULE_0__.environment.jupyterIcon));
          iconRegistry.addSvgIcon('group-one-icon', sanitizer.bypassSecurityTrustResourceUrl(_app_environment__WEBPACK_IMPORTED_MODULE_0__.environment.groupOneIcon));
          iconRegistry.addSvgIcon('group-two-icon', sanitizer.bypassSecurityTrustResourceUrl(_app_environment__WEBPACK_IMPORTED_MODULE_0__.environment.groupTwoIcon));
        }

        _createClass(_ServerTypeComponent, [{
          key: "element",
          set: function set(notebook) {
            this.notebookServerType = notebook.serverType;
          }
        }]);

        return _ServerTypeComponent;
      }();

      _ServerTypeComponent.ɵfac = function ServerTypeComponent_Factory(t) {
        return new (t || _ServerTypeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_icon__WEBPACK_IMPORTED_MODULE_2__.MatIconRegistry), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.DomSanitizer));
      };

      _ServerTypeComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: _ServerTypeComponent,
        selectors: [["app-server-type"]],
        decls: 3,
        vars: 3,
        consts: [["svgIcon", "jupyterlab-icon", "aria-hidden", "false", "aria-label", "JupyterLab based server", 4, "ngIf"], ["svgIcon", "group-one-icon", "aria-hidden", "false", "aria-label", "Group One based server", 4, "ngIf"], ["svgIcon", "group-two-icon", "aria-hidden", "false", "aria-label", "Group Two based server", 4, "ngIf"], ["svgIcon", "jupyterlab-icon", "aria-hidden", "false", "aria-label", "JupyterLab based server"], ["svgIcon", "group-one-icon", "aria-hidden", "false", "aria-label", "Group One based server"], ["svgIcon", "group-two-icon", "aria-hidden", "false", "aria-label", "Group Two based server"]],
        template: function ServerTypeComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, ServerTypeComponent_mat_icon_0_Template, 1, 0, "mat-icon", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ServerTypeComponent_mat_icon_1_Template, 1, 0, "mat-icon", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ServerTypeComponent_mat_icon_2_Template, 1, 0, "mat-icon", 2);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.notebookServerType === "jupyter");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.notebookServerType === "group-one");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.notebookServerType === "group-two");
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__.MatIcon],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZXJ2ZXItdHlwZS5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /***/
    },

    /***/
    53258:
    /*!**************************************************************!*\
      !*** ./src/app/pages/index/index-rok/index-rok.component.ts ***!
      \**************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "IndexRokComponent": function IndexRokComponent() {
          return (
            /* binding */
            _IndexRokComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _index_default_index_default_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../index-default/index-default.component */
      10946);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var kubeflow__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! kubeflow */
      90872);
      /* harmony import */


      var src_app_services_backend_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/services/backend.service */
      90600);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      38583);

      function IndexRokComponent_lib_namespace_select_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "lib-namespace-select");
        }
      }

      var _IndexRokComponent = /*#__PURE__*/function (_index_default_index_) {
        _inherits(_IndexRokComponent, _index_default_index_);

        var _super3 = _createSuper(_IndexRokComponent);

        function _IndexRokComponent(rok, ns, backend, confirmDialog, popup, router) {
          var _this23;

          _classCallCheck(this, _IndexRokComponent);

          _this23 = _super3.call(this, ns, backend, confirmDialog, popup, router);
          _this23.rok = rok;
          _this23.ns = ns;
          _this23.backend = backend;
          _this23.confirmDialog = confirmDialog;
          _this23.popup = popup;
          _this23.router = router;

          _this23.rok.initCSRF();

          return _this23;
        }

        return _IndexRokComponent;
      }(_index_default_index_default_component__WEBPACK_IMPORTED_MODULE_0__.IndexDefaultComponent);

      _IndexRokComponent.ɵfac = function IndexRokComponent_Factory(t) {
        return new (t || _IndexRokComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](kubeflow__WEBPACK_IMPORTED_MODULE_3__.RokService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](kubeflow__WEBPACK_IMPORTED_MODULE_3__.NamespaceService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_backend_service__WEBPACK_IMPORTED_MODULE_1__.JWABackendService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](kubeflow__WEBPACK_IMPORTED_MODULE_3__.ConfirmDialogService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](kubeflow__WEBPACK_IMPORTED_MODULE_3__.SnackBarService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router));
      };

      _IndexRokComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: _IndexRokComponent,
        selectors: [["app-index-rok"]],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]],
        decls: 2,
        vars: 4,
        consts: [[4, "ngIf"], [3, "config", "data", "trackByFn", "actionsEmitter"]],
        template: function IndexRokComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, IndexRokComponent_lib_namespace_select_0_Template, 1, 0, "lib-namespace-select", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "lib-resource-table", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("actionsEmitter", function IndexRokComponent_Template_lib_resource_table_actionsEmitter_1_listener($event) {
              return ctx.reactToAction($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.env.production);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("config", ctx.config)("data", ctx.processedData)("trackByFn", ctx.notebookTrackByFn);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, kubeflow__WEBPACK_IMPORTED_MODULE_3__.ResourceTableComponent, kubeflow__WEBPACK_IMPORTED_MODULE_3__.NamespaceSelectComponent],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbmRleC1kZWZhdWx0LmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /***/
    },

    /***/
    13901:
    /*!***********************************************************!*\
      !*** ./src/app/pages/index/index-rok/index-rok.module.ts ***!
      \***********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "IndexRokModule": function IndexRokModule() {
          return (
            /* binding */
            _IndexRokModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _index_rok_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./index-rok.component */
      53258);
      /* harmony import */


      var kubeflow__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! kubeflow */
      90872);
      /* harmony import */


      var _index_default_index_default_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../index-default/index-default.module */
      67390);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _IndexRokModule = function _IndexRokModule() {
        _classCallCheck(this, _IndexRokModule);
      };

      _IndexRokModule.ɵfac = function IndexRokModule_Factory(t) {
        return new (t || _IndexRokModule)();
      };

      _IndexRokModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
        type: _IndexRokModule
      });
      _IndexRokModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, kubeflow__WEBPACK_IMPORTED_MODULE_4__.ResourceTableModule, kubeflow__WEBPACK_IMPORTED_MODULE_4__.NamespaceSelectModule, kubeflow__WEBPACK_IMPORTED_MODULE_4__.ConfirmDialogModule, _index_default_index_default_module__WEBPACK_IMPORTED_MODULE_1__.IndexDefaultModule]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](_IndexRokModule, {
          declarations: [_index_rok_component__WEBPACK_IMPORTED_MODULE_0__.IndexRokComponent],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, kubeflow__WEBPACK_IMPORTED_MODULE_4__.ResourceTableModule, kubeflow__WEBPACK_IMPORTED_MODULE_4__.NamespaceSelectModule, kubeflow__WEBPACK_IMPORTED_MODULE_4__.ConfirmDialogModule, _index_default_index_default_module__WEBPACK_IMPORTED_MODULE_1__.IndexDefaultModule],
          exports: [_index_rok_component__WEBPACK_IMPORTED_MODULE_0__.IndexRokComponent]
        });
      })();
      /***/

    },

    /***/
    67479:
    /*!************************************************!*\
      !*** ./src/app/pages/index/index.component.ts ***!
      \************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "IndexComponent": function IndexComponent() {
          return (
            /* binding */
            _IndexComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _app_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @app/environment */
      92340);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _index_default_index_default_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./index-default/index-default.component */
      10946);
      /* harmony import */


      var _index_rok_index_rok_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./index-rok/index-rok.component */
      53258);

      function IndexComponent_app_index_default_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-index-default");
        }
      }

      function IndexComponent_app_index_rok_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-index-rok");
        }
      }

      var _IndexComponent = /*#__PURE__*/function () {
        function _IndexComponent() {
          _classCallCheck(this, _IndexComponent);

          this.env = _app_environment__WEBPACK_IMPORTED_MODULE_0__.environment;
        }

        _createClass(_IndexComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return _IndexComponent;
      }();

      _IndexComponent.ɵfac = function IndexComponent_Factory(t) {
        return new (t || _IndexComponent)();
      };

      _IndexComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
        type: _IndexComponent,
        selectors: [["app-index"]],
        decls: 2,
        vars: 2,
        consts: [[4, "ngIf"]],
        template: function IndexComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, IndexComponent_app_index_default_0_Template, 1, 0, "app-index-default", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, IndexComponent_app_index_rok_1_Template, 1, 0, "app-index-rok", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.env.ui === "default");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.env.ui === "rok");
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _index_default_index_default_component__WEBPACK_IMPORTED_MODULE_1__.IndexDefaultComponent, _index_rok_index_rok_component__WEBPACK_IMPORTED_MODULE_2__.IndexRokComponent],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbmRleC5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /***/
    },

    /***/
    61023:
    /*!*********************************************!*\
      !*** ./src/app/pages/index/index.module.ts ***!
      \*********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "IndexModule": function IndexModule() {
          return (
            /* binding */
            _IndexModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/icon */
      76627);
      /* harmony import */


      var _index_rok_index_rok_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./index-rok/index-rok.module */
      13901);
      /* harmony import */


      var _index_default_index_default_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./index-default/index-default.module */
      67390);
      /* harmony import */


      var _index_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./index.component */
      67479);
      /* harmony import */


      var _index_default_server_type_server_type_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./index-default/server-type/server-type.component */
      31610);
      /* harmony import */


      var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/tooltip */
      11436);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _IndexModule = function _IndexModule() {
        _classCallCheck(this, _IndexModule);
      };

      _IndexModule.ɵfac = function IndexModule_Factory(t) {
        return new (t || _IndexModule)();
      };

      _IndexModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
        type: _IndexModule
      });
      _IndexModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _index_rok_index_rok_module__WEBPACK_IMPORTED_MODULE_0__.IndexRokModule, _index_default_index_default_module__WEBPACK_IMPORTED_MODULE_1__.IndexDefaultModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__.MatIconModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_7__.MatTooltipModule]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](_IndexModule, {
          declarations: [_index_component__WEBPACK_IMPORTED_MODULE_2__.IndexComponent, _index_default_server_type_server_type_component__WEBPACK_IMPORTED_MODULE_3__.ServerTypeComponent],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _index_rok_index_rok_module__WEBPACK_IMPORTED_MODULE_0__.IndexRokModule, _index_default_index_default_module__WEBPACK_IMPORTED_MODULE_1__.IndexDefaultModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__.MatIconModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_7__.MatTooltipModule]
        });
      })();
      /***/

    },

    /***/
    90600:
    /*!*********************************************!*\
      !*** ./src/app/services/backend.service.ts ***!
      \*********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "JWABackendService": function JWABackendService() {
          return (
            /* binding */
            _JWABackendService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var kubeflow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! kubeflow */
      90872);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs/operators */
      5304);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      88002);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common/http */
      91841);

      var _JWABackendService = /*#__PURE__*/function (_kubeflow__WEBPACK_IM) {
        _inherits(_JWABackendService, _kubeflow__WEBPACK_IM);

        var _super4 = _createSuper(_JWABackendService);

        function _JWABackendService(http, snackBar) {
          var _this24;

          _classCallCheck(this, _JWABackendService);

          _this24 = _super4.call(this, http, snackBar);
          _this24.http = http;
          _this24.snackBar = snackBar;
          return _this24;
        } // GET


        _createClass(_JWABackendService, [{
          key: "getNotebooks",
          value: function getNotebooks(namespace) {
            var _this25 = this;

            var url = "api/namespaces/".concat(namespace, "/notebooks");
            return this.http.get(url).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.catchError)(function (error) {
              return _this25.handleError(error);
            }), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(function (resp) {
              return resp.notebooks;
            }));
          }
        }, {
          key: "getConfig",
          value: function getConfig() {
            var _this26 = this;

            var url = "api/config";
            return this.http.get(url).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.catchError)(function (error) {
              return _this26.handleError(error);
            }), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(function (data) {
              return data.config;
            }));
          }
        }, {
          key: "getVolumes",
          value: function getVolumes(ns) {
            var _this27 = this;

            // Get existing PVCs in a namespace
            var url = "api/namespaces/".concat(ns, "/pvcs");
            return this.http.get(url).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.catchError)(function (error) {
              return _this27.handleError(error);
            }), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(function (data) {
              return data.pvcs;
            }));
          }
        }, {
          key: "getPodDefaults",
          value: function getPodDefaults(ns) {
            var _this28 = this;

            // Get existing PodDefaults in a namespace
            var url = "api/namespaces/".concat(ns, "/poddefaults");
            return this.http.get(url).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.catchError)(function (error) {
              return _this28.handleError(error);
            }), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(function (data) {
              return data.poddefaults;
            }));
          }
        }, {
          key: "getGPUVendors",
          value: function getGPUVendors() {
            var _this29 = this;

            // Get installed GPU vendors
            var url = "api/gpus";
            return this.http.get(url).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.catchError)(function (error) {
              return _this29.handleError(error);
            }), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(function (data) {
              return data.vendors;
            }));
          } // POST

        }, {
          key: "createNotebook",
          value: function createNotebook(notebook) {
            var _this30 = this;

            var url = "api/namespaces/".concat(notebook.namespace, "/notebooks");
            return this.http.post(url, notebook).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.catchError)(function (error) {
              return _this30.handleError(error);
            }), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(function (_) {
              return 'posted';
            }));
          } // PATCH

        }, {
          key: "startNotebook",
          value: function startNotebook(notebook) {
            var _this31 = this;

            var name = notebook.name;
            var namespace = notebook.namespace;
            var url = "api/namespaces/".concat(namespace, "/notebooks/").concat(name);
            return this.http.patch(url, {
              stopped: false
            }).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.catchError)(function (error) {
              return _this31.handleError(error);
            }), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(function (_) {
              return 'started';
            }));
          }
        }, {
          key: "stopNotebook",
          value: function stopNotebook(notebook) {
            var _this32 = this;

            var name = notebook.name;
            var namespace = notebook.namespace;
            var url = "api/namespaces/".concat(namespace, "/notebooks/").concat(name);
            return this.http.patch(url, {
              stopped: true
            }).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.catchError)(function (error) {
              return _this32.handleError(error, false);
            }), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(function (_) {
              return 'stopped';
            }));
          } // DELETE

        }, {
          key: "deleteNotebook",
          value: function deleteNotebook(namespace, name) {
            var _this33 = this;

            var url = "api/namespaces/".concat(namespace, "/notebooks/").concat(name);
            return this.http["delete"](url).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.catchError)(function (error) {
              return _this33.handleError(error, false);
            }));
          }
        }]);

        return _JWABackendService;
      }(kubeflow__WEBPACK_IMPORTED_MODULE_0__.BackendService);

      _JWABackendService.ɵfac = function JWABackendService_Factory(t) {
        return new (t || _JWABackendService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](kubeflow__WEBPACK_IMPORTED_MODULE_0__.SnackBarService));
      };

      _JWABackendService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
        token: _JWABackendService,
        factory: _JWABackendService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    20705:
    /*!**************************!*\
      !*** ./src/app/types.ts ***!
      \**************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "emptyVolume": function emptyVolume() {
          return (
            /* binding */
            _emptyVolume
          );
        }
        /* harmony export */

      });

      function _emptyVolume() {
        return {
          type: '',
          name: '',
          size: 1,
          path: '',
          mode: '',
          extraFields: {},
          templatedName: ''
        };
      }
      /***/

    },

    /***/
    92340:
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "environment": function environment() {
          return (
            /* binding */
            _environment
          );
        }
        /* harmony export */

      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var _environment = {
        production: false,
        apiUrl: 'http://localhost:5000',
        resource: 'notebooks',
        ui: 'default',
        jupyterlabLogo: 'static/assets/logos/jupyterlab-logo.svg',
        jupyterIcon: 'static/assets/logos/jupyter-icon.svg',
        groupOneLogo: 'static/assets/logos/group-one-logo.svg',
        groupOneIcon: 'static/assets/logos/group-one-icon.svg',
        groupTwoLogo: 'static/assets/logos/group-two-logo.svg',
        groupTwoIcon: 'static/assets/logos/group-two-icon.svg',
        // Rok specifics
        rokUrl: ''
      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    14431:
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser */
      39075);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./app/app.module */
      36747);
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./environments/environment */
      92340);

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
        (0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
      }

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)["catch"](function (err) {
        return console.error(err);
      });
      /***/

    }
  },
  /******/
  function (__webpack_require__) {
    // webpackRuntimeModules

    /******/
    "use strict";
    /******/

    /******/

    var __webpack_exec__ = function __webpack_exec__(moduleId) {
      return __webpack_require__(__webpack_require__.s = moduleId);
    };
    /******/


    __webpack_require__.O(0, ["vendor"], function () {
      return __webpack_exec__(14431);
    });
    /******/


    var __webpack_exports__ = __webpack_require__.O();
    /******/

  }]);
})();
//# sourceMappingURL=main-es5.js.map