/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_autoback__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/autoback */ "./src/autoback.js");
/**
 * @file
 * Entry point for normal presentation of Autoback.
 */


function ready(fn) {
  if (document.attachEvent ? document.readyState === "complete" : document.readyState !== "loading") {
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}

ready(_src_autoback__WEBPACK_IMPORTED_MODULE_0__.Autoback.install);

/***/ }),

/***/ "./src/autoback.js":
/*!*************************!*\
  !*** ./src/autoback.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Autoback": () => (/* binding */ Autoback)
/* harmony export */ });
/* harmony import */ var _autoback_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./autoback.scss */ "./src/autoback.scss");
/**
 * @file
 */

var Autoback = function Autoback() {};

Autoback.install = function () {
  //
  // Get the autoback stack from session storage
  //
  var backStack = window.sessionStorage.getItem('cl-autoback');

  if (backStack !== null) {
    try {
      backStack = JSON.parse(backStack);
    } catch (exception) {
      backStack = [];
    }
  } else {
    backStack = [];
  }

  function compareLocations(a, b) {
    a = a.replace(/\/$/, '');
    b = b.replace(/\/$/, '');
    return a === b;
  } //
  // If the top of the stack is this page, we got here
  // through an autoback link.
  //


  if (backStack.length < 2 || !compareLocations(backStack.pop(), window.location.href)) {
    // Did not get here through an autoback link, so wipe the stack
    backStack = [];
  }

  var divs = document.querySelectorAll('div.cl-autoback');

  if (backStack.length === 0) {
    for (var i = 0; i < divs.length; i++) {
      divs[i].innerHTML = '';
    }
  } else {
    (function () {
      var top = backStack[backStack.length - 1];

      for (var _i = 0; _i < divs.length; _i++) {
        var div = divs[_i];
        var p = document.createElement('P');
        div.innerHTML = '';
        div.appendChild(p);
        var a = document.createElement('A');

        if (div.classList.contains('cl-strip')) {
          var space = top.title.indexOf(' ');
          a.textContent = top.title.substr(space + 1);
        } else {
          a.textContent = top.title;
        }

        a.href = top.href;
        p.appendChild(a);

        a.onclick = function (event) {
          backStack.pop();
          backStack.push(top.href);
          window.sessionStorage.setItem('cl-autoback', JSON.stringify(backStack));
        };
      }
    })();
  }

  document.body.addEventListener('click', function (event) {
    var clickedOn = event.target;

    if (clickedOn.tagName === 'A' && clickedOn.classList.contains('cl-autoback')) {
      // Save where we are coming from and where we are going to...
      backStack.push({
        title: document.title,
        href: window.location.href
      });
      backStack.push(clickedOn.href);
      window.sessionStorage.setItem('cl-autoback', JSON.stringify(backStack));
    }
  });
};

/***/ }),

/***/ "./.yarn/$$virtual/css-loader-virtual-df838368e7/0/cache/css-loader-npm-6.5.1-a34b2a752f-9dfdffde58.zip/node_modules/css-loader/dist/cjs.js!./.yarn/$$virtual/resolve-url-loader-virtual-09a3b1ca41/0/cache/resolve-url-loader-npm-4.0.0-2a9c18d86b-04e9f91dc8.zip/node_modules/resolve-url-loader/index.js!./.yarn/$$virtual/sass-loader-virtual-8582f2a980/0/cache/sass-loader-npm-12.4.0-3d3847fd35-73707df1ca.zip/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[2].use[3]!./src/autoback.scss":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./.yarn/$$virtual/css-loader-virtual-df838368e7/0/cache/css-loader-npm-6.5.1-a34b2a752f-9dfdffde58.zip/node_modules/css-loader/dist/cjs.js!./.yarn/$$virtual/resolve-url-loader-virtual-09a3b1ca41/0/cache/resolve-url-loader-npm-4.0.0-2a9c18d86b-04e9f91dc8.zip/node_modules/resolve-url-loader/index.js!./.yarn/$$virtual/sass-loader-virtual-8582f2a980/0/cache/sass-loader-npm-12.4.0-3d3847fd35-73707df1ca.zip/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[2].use[3]!./src/autoback.scss ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _yarn_$$virtual_css_loader_virtual_df838368e7_0_cache_css_loader_npm_6_5_1_a34b2a752f_9dfdffde58_zip_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../.yarn/$$virtual/css-loader-virtual-df838368e7/0/cache/css-loader-npm-6.5.1-a34b2a752f-9dfdffde58.zip/node_modules/css-loader/dist/runtime/sourceMaps.js */ "./.yarn/$$virtual/css-loader-virtual-df838368e7/0/cache/css-loader-npm-6.5.1-a34b2a752f-9dfdffde58.zip/node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _yarn_$$virtual_css_loader_virtual_df838368e7_0_cache_css_loader_npm_6_5_1_a34b2a752f_9dfdffde58_zip_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_yarn_$$virtual_css_loader_virtual_df838368e7_0_cache_css_loader_npm_6_5_1_a34b2a752f_9dfdffde58_zip_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _yarn_$$virtual_css_loader_virtual_df838368e7_0_cache_css_loader_npm_6_5_1_a34b2a752f_9dfdffde58_zip_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../.yarn/$$virtual/css-loader-virtual-df838368e7/0/cache/css-loader-npm-6.5.1-a34b2a752f-9dfdffde58.zip/node_modules/css-loader/dist/runtime/api.js */ "./.yarn/$$virtual/css-loader-virtual-df838368e7/0/cache/css-loader-npm-6.5.1-a34b2a752f-9dfdffde58.zip/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _yarn_$$virtual_css_loader_virtual_df838368e7_0_cache_css_loader_npm_6_5_1_a34b2a752f_9dfdffde58_zip_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_yarn_$$virtual_css_loader_virtual_df838368e7_0_cache_css_loader_npm_6_5_1_a34b2a752f_9dfdffde58_zip_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _yarn_$$virtual_css_loader_virtual_df838368e7_0_cache_css_loader_npm_6_5_1_a34b2a752f_9dfdffde58_zip_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../.yarn/$$virtual/css-loader-virtual-df838368e7/0/cache/css-loader-npm-6.5.1-a34b2a752f-9dfdffde58.zip/node_modules/css-loader/dist/runtime/getUrl.js */ "./.yarn/$$virtual/css-loader-virtual-df838368e7/0/cache/css-loader-npm-6.5.1-a34b2a752f-9dfdffde58.zip/node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _yarn_$$virtual_css_loader_virtual_df838368e7_0_cache_css_loader_npm_6_5_1_a34b2a752f_9dfdffde58_zip_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_yarn_$$virtual_css_loader_virtual_df838368e7_0_cache_css_loader_npm_6_5_1_a34b2a752f_9dfdffde58_zip_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./img/backarrow.png */ "./src/img/backarrow.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _yarn_$$virtual_css_loader_virtual_df838368e7_0_cache_css_loader_npm_6_5_1_a34b2a752f_9dfdffde58_zip_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_yarn_$$virtual_css_loader_virtual_df838368e7_0_cache_css_loader_npm_6_5_1_a34b2a752f_9dfdffde58_zip_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _yarn_$$virtual_css_loader_virtual_df838368e7_0_cache_css_loader_npm_6_5_1_a34b2a752f_9dfdffde58_zip_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "div.cl-autoback p {\n  font-size: 0.95em;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-repeat: no-repeat;\n  background-size: auto 1.6em;\n  padding: 0.13em 0 0 2.6em;\n  height: 1.6em;\n}", "",{"version":3,"sources":["webpack://./src/autoback.scss"],"names":[],"mappings":"AAEE;EACE,iBAAA;EACA,yDAAA;EACA,4BAAA;EACA,2BAAA;EACA,yBAAA;EACA,aAAA;AADJ","sourcesContent":["div.cl-autoback {\n\n  p {\n    font-size: 0.95em;\n    background-image: url('./img/backarrow.png');\n    background-repeat: no-repeat;\n    background-size: auto 1.6em;\n    padding: 0.13em 0 0 2.6em;\n    height: 1.6em;\n  }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./.yarn/$$virtual/css-loader-virtual-df838368e7/0/cache/css-loader-npm-6.5.1-a34b2a752f-9dfdffde58.zip/node_modules/css-loader/dist/runtime/api.js":
/*!**********************************************************************************************************************************************************!*\
  !*** ./.yarn/$$virtual/css-loader-virtual-df838368e7/0/cache/css-loader-npm-6.5.1-a34b2a752f-9dfdffde58.zip/node_modules/css-loader/dist/runtime/api.js ***!
  \**********************************************************************************************************************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./.yarn/$$virtual/css-loader-virtual-df838368e7/0/cache/css-loader-npm-6.5.1-a34b2a752f-9dfdffde58.zip/node_modules/css-loader/dist/runtime/getUrl.js":
/*!*************************************************************************************************************************************************************!*\
  !*** ./.yarn/$$virtual/css-loader-virtual-df838368e7/0/cache/css-loader-npm-6.5.1-a34b2a752f-9dfdffde58.zip/node_modules/css-loader/dist/runtime/getUrl.js ***!
  \*************************************************************************************************************************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./.yarn/$$virtual/css-loader-virtual-df838368e7/0/cache/css-loader-npm-6.5.1-a34b2a752f-9dfdffde58.zip/node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./.yarn/$$virtual/css-loader-virtual-df838368e7/0/cache/css-loader-npm-6.5.1-a34b2a752f-9dfdffde58.zip/node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \*****************************************************************************************************************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/autoback.scss":
/*!***************************!*\
  !*** ./src/autoback.scss ***!
  \***************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _yarn_$$virtual_style_loader_virtual_e36c00d1de_0_cache_style_loader_npm_3_3_1_4bbb6ec77f_98fa3139c0_zip_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../.yarn/$$virtual/style-loader-virtual-e36c00d1de/0/cache/style-loader-npm-3.3.1-4bbb6ec77f-98fa3139c0.zip/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./.yarn/$$virtual/style-loader-virtual-e36c00d1de/0/cache/style-loader-npm-3.3.1-4bbb6ec77f-98fa3139c0.zip/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _yarn_$$virtual_style_loader_virtual_e36c00d1de_0_cache_style_loader_npm_3_3_1_4bbb6ec77f_98fa3139c0_zip_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_yarn_$$virtual_style_loader_virtual_e36c00d1de_0_cache_style_loader_npm_3_3_1_4bbb6ec77f_98fa3139c0_zip_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _yarn_$$virtual_style_loader_virtual_e36c00d1de_0_cache_style_loader_npm_3_3_1_4bbb6ec77f_98fa3139c0_zip_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../.yarn/$$virtual/style-loader-virtual-e36c00d1de/0/cache/style-loader-npm-3.3.1-4bbb6ec77f-98fa3139c0.zip/node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./.yarn/$$virtual/style-loader-virtual-e36c00d1de/0/cache/style-loader-npm-3.3.1-4bbb6ec77f-98fa3139c0.zip/node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _yarn_$$virtual_style_loader_virtual_e36c00d1de_0_cache_style_loader_npm_3_3_1_4bbb6ec77f_98fa3139c0_zip_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_yarn_$$virtual_style_loader_virtual_e36c00d1de_0_cache_style_loader_npm_3_3_1_4bbb6ec77f_98fa3139c0_zip_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _yarn_$$virtual_style_loader_virtual_e36c00d1de_0_cache_style_loader_npm_3_3_1_4bbb6ec77f_98fa3139c0_zip_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../.yarn/$$virtual/style-loader-virtual-e36c00d1de/0/cache/style-loader-npm-3.3.1-4bbb6ec77f-98fa3139c0.zip/node_modules/style-loader/dist/runtime/insertBySelector.js */ "./.yarn/$$virtual/style-loader-virtual-e36c00d1de/0/cache/style-loader-npm-3.3.1-4bbb6ec77f-98fa3139c0.zip/node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _yarn_$$virtual_style_loader_virtual_e36c00d1de_0_cache_style_loader_npm_3_3_1_4bbb6ec77f_98fa3139c0_zip_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_yarn_$$virtual_style_loader_virtual_e36c00d1de_0_cache_style_loader_npm_3_3_1_4bbb6ec77f_98fa3139c0_zip_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _yarn_$$virtual_style_loader_virtual_e36c00d1de_0_cache_style_loader_npm_3_3_1_4bbb6ec77f_98fa3139c0_zip_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../.yarn/$$virtual/style-loader-virtual-e36c00d1de/0/cache/style-loader-npm-3.3.1-4bbb6ec77f-98fa3139c0.zip/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./.yarn/$$virtual/style-loader-virtual-e36c00d1de/0/cache/style-loader-npm-3.3.1-4bbb6ec77f-98fa3139c0.zip/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _yarn_$$virtual_style_loader_virtual_e36c00d1de_0_cache_style_loader_npm_3_3_1_4bbb6ec77f_98fa3139c0_zip_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_yarn_$$virtual_style_loader_virtual_e36c00d1de_0_cache_style_loader_npm_3_3_1_4bbb6ec77f_98fa3139c0_zip_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _yarn_$$virtual_style_loader_virtual_e36c00d1de_0_cache_style_loader_npm_3_3_1_4bbb6ec77f_98fa3139c0_zip_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../.yarn/$$virtual/style-loader-virtual-e36c00d1de/0/cache/style-loader-npm-3.3.1-4bbb6ec77f-98fa3139c0.zip/node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./.yarn/$$virtual/style-loader-virtual-e36c00d1de/0/cache/style-loader-npm-3.3.1-4bbb6ec77f-98fa3139c0.zip/node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _yarn_$$virtual_style_loader_virtual_e36c00d1de_0_cache_style_loader_npm_3_3_1_4bbb6ec77f_98fa3139c0_zip_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_yarn_$$virtual_style_loader_virtual_e36c00d1de_0_cache_style_loader_npm_3_3_1_4bbb6ec77f_98fa3139c0_zip_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _yarn_$$virtual_style_loader_virtual_e36c00d1de_0_cache_style_loader_npm_3_3_1_4bbb6ec77f_98fa3139c0_zip_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../.yarn/$$virtual/style-loader-virtual-e36c00d1de/0/cache/style-loader-npm-3.3.1-4bbb6ec77f-98fa3139c0.zip/node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./.yarn/$$virtual/style-loader-virtual-e36c00d1de/0/cache/style-loader-npm-3.3.1-4bbb6ec77f-98fa3139c0.zip/node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _yarn_$$virtual_style_loader_virtual_e36c00d1de_0_cache_style_loader_npm_3_3_1_4bbb6ec77f_98fa3139c0_zip_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_yarn_$$virtual_style_loader_virtual_e36c00d1de_0_cache_style_loader_npm_3_3_1_4bbb6ec77f_98fa3139c0_zip_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _yarn_$$virtual_css_loader_virtual_df838368e7_0_cache_css_loader_npm_6_5_1_a34b2a752f_9dfdffde58_zip_node_modules_css_loader_dist_cjs_js_yarn_$$virtual_resolve_url_loader_virtual_09a3b1ca41_0_cache_resolve_url_loader_npm_4_0_0_2a9c18d86b_04e9f91dc8_zip_node_modules_resolve_url_loader_index_js_yarn_$$virtual_sass_loader_virtual_8582f2a980_0_cache_sass_loader_npm_12_4_0_3d3847fd35_73707df1ca_zip_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_2_use_3_autoback_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../.yarn/$$virtual/css-loader-virtual-df838368e7/0/cache/css-loader-npm-6.5.1-a34b2a752f-9dfdffde58.zip/node_modules/css-loader/dist/cjs.js!../.yarn/$$virtual/resolve-url-loader-virtual-09a3b1ca41/0/cache/resolve-url-loader-npm-4.0.0-2a9c18d86b-04e9f91dc8.zip/node_modules/resolve-url-loader/index.js!../.yarn/$$virtual/sass-loader-virtual-8582f2a980/0/cache/sass-loader-npm-12.4.0-3d3847fd35-73707df1ca.zip/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[2].use[3]!./autoback.scss */ "./.yarn/$$virtual/css-loader-virtual-df838368e7/0/cache/css-loader-npm-6.5.1-a34b2a752f-9dfdffde58.zip/node_modules/css-loader/dist/cjs.js!./.yarn/$$virtual/resolve-url-loader-virtual-09a3b1ca41/0/cache/resolve-url-loader-npm-4.0.0-2a9c18d86b-04e9f91dc8.zip/node_modules/resolve-url-loader/index.js!./.yarn/$$virtual/sass-loader-virtual-8582f2a980/0/cache/sass-loader-npm-12.4.0-3d3847fd35-73707df1ca.zip/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[2].use[3]!./src/autoback.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_yarn_$$virtual_style_loader_virtual_e36c00d1de_0_cache_style_loader_npm_3_3_1_4bbb6ec77f_98fa3139c0_zip_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_yarn_$$virtual_style_loader_virtual_e36c00d1de_0_cache_style_loader_npm_3_3_1_4bbb6ec77f_98fa3139c0_zip_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _yarn_$$virtual_style_loader_virtual_e36c00d1de_0_cache_style_loader_npm_3_3_1_4bbb6ec77f_98fa3139c0_zip_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_yarn_$$virtual_style_loader_virtual_e36c00d1de_0_cache_style_loader_npm_3_3_1_4bbb6ec77f_98fa3139c0_zip_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_yarn_$$virtual_style_loader_virtual_e36c00d1de_0_cache_style_loader_npm_3_3_1_4bbb6ec77f_98fa3139c0_zip_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _yarn_$$virtual_style_loader_virtual_e36c00d1de_0_cache_style_loader_npm_3_3_1_4bbb6ec77f_98fa3139c0_zip_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_yarn_$$virtual_css_loader_virtual_df838368e7_0_cache_css_loader_npm_6_5_1_a34b2a752f_9dfdffde58_zip_node_modules_css_loader_dist_cjs_js_yarn_$$virtual_resolve_url_loader_virtual_09a3b1ca41_0_cache_resolve_url_loader_npm_4_0_0_2a9c18d86b_04e9f91dc8_zip_node_modules_resolve_url_loader_index_js_yarn_$$virtual_sass_loader_virtual_8582f2a980_0_cache_sass_loader_npm_12_4_0_3d3847fd35_73707df1ca_zip_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_2_use_3_autoback_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);


if (true) {
  if (!_yarn_$$virtual_css_loader_virtual_df838368e7_0_cache_css_loader_npm_6_5_1_a34b2a752f_9dfdffde58_zip_node_modules_css_loader_dist_cjs_js_yarn_$$virtual_resolve_url_loader_virtual_09a3b1ca41_0_cache_resolve_url_loader_npm_4_0_0_2a9c18d86b_04e9f91dc8_zip_node_modules_resolve_url_loader_index_js_yarn_$$virtual_sass_loader_virtual_8582f2a980_0_cache_sass_loader_npm_12_4_0_3d3847fd35_73707df1ca_zip_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_2_use_3_autoback_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (isNamedExport && p === "default") {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (isNamedExport && p === "default") {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var isNamedExport = !_yarn_$$virtual_css_loader_virtual_df838368e7_0_cache_css_loader_npm_6_5_1_a34b2a752f_9dfdffde58_zip_node_modules_css_loader_dist_cjs_js_yarn_$$virtual_resolve_url_loader_virtual_09a3b1ca41_0_cache_resolve_url_loader_npm_4_0_0_2a9c18d86b_04e9f91dc8_zip_node_modules_resolve_url_loader_index_js_yarn_$$virtual_sass_loader_virtual_8582f2a980_0_cache_sass_loader_npm_12_4_0_3d3847fd35_73707df1ca_zip_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_2_use_3_autoback_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;
    var oldLocals = isNamedExport ? _yarn_$$virtual_css_loader_virtual_df838368e7_0_cache_css_loader_npm_6_5_1_a34b2a752f_9dfdffde58_zip_node_modules_css_loader_dist_cjs_js_yarn_$$virtual_resolve_url_loader_virtual_09a3b1ca41_0_cache_resolve_url_loader_npm_4_0_0_2a9c18d86b_04e9f91dc8_zip_node_modules_resolve_url_loader_index_js_yarn_$$virtual_sass_loader_virtual_8582f2a980_0_cache_sass_loader_npm_12_4_0_3d3847fd35_73707df1ca_zip_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_2_use_3_autoback_scss__WEBPACK_IMPORTED_MODULE_6__ : _yarn_$$virtual_css_loader_virtual_df838368e7_0_cache_css_loader_npm_6_5_1_a34b2a752f_9dfdffde58_zip_node_modules_css_loader_dist_cjs_js_yarn_$$virtual_resolve_url_loader_virtual_09a3b1ca41_0_cache_resolve_url_loader_npm_4_0_0_2a9c18d86b_04e9f91dc8_zip_node_modules_resolve_url_loader_index_js_yarn_$$virtual_sass_loader_virtual_8582f2a980_0_cache_sass_loader_npm_12_4_0_3d3847fd35_73707df1ca_zip_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_2_use_3_autoback_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

    module.hot.accept(
      /*! !!../.yarn/$$virtual/css-loader-virtual-df838368e7/0/cache/css-loader-npm-6.5.1-a34b2a752f-9dfdffde58.zip/node_modules/css-loader/dist/cjs.js!../.yarn/$$virtual/resolve-url-loader-virtual-09a3b1ca41/0/cache/resolve-url-loader-npm-4.0.0-2a9c18d86b-04e9f91dc8.zip/node_modules/resolve-url-loader/index.js!../.yarn/$$virtual/sass-loader-virtual-8582f2a980/0/cache/sass-loader-npm-12.4.0-3d3847fd35-73707df1ca.zip/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[2].use[3]!./autoback.scss */ "./.yarn/$$virtual/css-loader-virtual-df838368e7/0/cache/css-loader-npm-6.5.1-a34b2a752f-9dfdffde58.zip/node_modules/css-loader/dist/cjs.js!./.yarn/$$virtual/resolve-url-loader-virtual-09a3b1ca41/0/cache/resolve-url-loader-npm-4.0.0-2a9c18d86b-04e9f91dc8.zip/node_modules/resolve-url-loader/index.js!./.yarn/$$virtual/sass-loader-virtual-8582f2a980/0/cache/sass-loader-npm-12.4.0-3d3847fd35-73707df1ca.zip/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[2].use[3]!./src/autoback.scss",
      __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _yarn_$$virtual_css_loader_virtual_df838368e7_0_cache_css_loader_npm_6_5_1_a34b2a752f_9dfdffde58_zip_node_modules_css_loader_dist_cjs_js_yarn_$$virtual_resolve_url_loader_virtual_09a3b1ca41_0_cache_resolve_url_loader_npm_4_0_0_2a9c18d86b_04e9f91dc8_zip_node_modules_resolve_url_loader_index_js_yarn_$$virtual_sass_loader_virtual_8582f2a980_0_cache_sass_loader_npm_12_4_0_3d3847fd35_73707df1ca_zip_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_2_use_3_autoback_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../.yarn/$$virtual/css-loader-virtual-df838368e7/0/cache/css-loader-npm-6.5.1-a34b2a752f-9dfdffde58.zip/node_modules/css-loader/dist/cjs.js!../.yarn/$$virtual/resolve-url-loader-virtual-09a3b1ca41/0/cache/resolve-url-loader-npm-4.0.0-2a9c18d86b-04e9f91dc8.zip/node_modules/resolve-url-loader/index.js!../.yarn/$$virtual/sass-loader-virtual-8582f2a980/0/cache/sass-loader-npm-12.4.0-3d3847fd35-73707df1ca.zip/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[2].use[3]!./autoback.scss */ "./.yarn/$$virtual/css-loader-virtual-df838368e7/0/cache/css-loader-npm-6.5.1-a34b2a752f-9dfdffde58.zip/node_modules/css-loader/dist/cjs.js!./.yarn/$$virtual/resolve-url-loader-virtual-09a3b1ca41/0/cache/resolve-url-loader-npm-4.0.0-2a9c18d86b-04e9f91dc8.zip/node_modules/resolve-url-loader/index.js!./.yarn/$$virtual/sass-loader-virtual-8582f2a980/0/cache/sass-loader-npm-12.4.0-3d3847fd35-73707df1ca.zip/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[2].use[3]!./src/autoback.scss");
(function () {
        if (!isEqualLocals(oldLocals, isNamedExport ? _yarn_$$virtual_css_loader_virtual_df838368e7_0_cache_css_loader_npm_6_5_1_a34b2a752f_9dfdffde58_zip_node_modules_css_loader_dist_cjs_js_yarn_$$virtual_resolve_url_loader_virtual_09a3b1ca41_0_cache_resolve_url_loader_npm_4_0_0_2a9c18d86b_04e9f91dc8_zip_node_modules_resolve_url_loader_index_js_yarn_$$virtual_sass_loader_virtual_8582f2a980_0_cache_sass_loader_npm_12_4_0_3d3847fd35_73707df1ca_zip_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_2_use_3_autoback_scss__WEBPACK_IMPORTED_MODULE_6__ : _yarn_$$virtual_css_loader_virtual_df838368e7_0_cache_css_loader_npm_6_5_1_a34b2a752f_9dfdffde58_zip_node_modules_css_loader_dist_cjs_js_yarn_$$virtual_resolve_url_loader_virtual_09a3b1ca41_0_cache_resolve_url_loader_npm_4_0_0_2a9c18d86b_04e9f91dc8_zip_node_modules_resolve_url_loader_index_js_yarn_$$virtual_sass_loader_virtual_8582f2a980_0_cache_sass_loader_npm_12_4_0_3d3847fd35_73707df1ca_zip_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_2_use_3_autoback_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals, isNamedExport)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = isNamedExport ? _yarn_$$virtual_css_loader_virtual_df838368e7_0_cache_css_loader_npm_6_5_1_a34b2a752f_9dfdffde58_zip_node_modules_css_loader_dist_cjs_js_yarn_$$virtual_resolve_url_loader_virtual_09a3b1ca41_0_cache_resolve_url_loader_npm_4_0_0_2a9c18d86b_04e9f91dc8_zip_node_modules_resolve_url_loader_index_js_yarn_$$virtual_sass_loader_virtual_8582f2a980_0_cache_sass_loader_npm_12_4_0_3d3847fd35_73707df1ca_zip_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_2_use_3_autoback_scss__WEBPACK_IMPORTED_MODULE_6__ : _yarn_$$virtual_css_loader_virtual_df838368e7_0_cache_css_loader_npm_6_5_1_a34b2a752f_9dfdffde58_zip_node_modules_css_loader_dist_cjs_js_yarn_$$virtual_resolve_url_loader_virtual_09a3b1ca41_0_cache_resolve_url_loader_npm_4_0_0_2a9c18d86b_04e9f91dc8_zip_node_modules_resolve_url_loader_index_js_yarn_$$virtual_sass_loader_virtual_8582f2a980_0_cache_sass_loader_npm_12_4_0_3d3847fd35_73707df1ca_zip_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_2_use_3_autoback_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

              update(_yarn_$$virtual_css_loader_virtual_df838368e7_0_cache_css_loader_npm_6_5_1_a34b2a752f_9dfdffde58_zip_node_modules_css_loader_dist_cjs_js_yarn_$$virtual_resolve_url_loader_virtual_09a3b1ca41_0_cache_resolve_url_loader_npm_4_0_0_2a9c18d86b_04e9f91dc8_zip_node_modules_resolve_url_loader_index_js_yarn_$$virtual_sass_loader_virtual_8582f2a980_0_cache_sass_loader_npm_12_4_0_3d3847fd35_73707df1ca_zip_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_2_use_3_autoback_scss__WEBPACK_IMPORTED_MODULE_6__["default"]);
      })(__WEBPACK_OUTDATED_DEPENDENCIES__); }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}



       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_yarn_$$virtual_css_loader_virtual_df838368e7_0_cache_css_loader_npm_6_5_1_a34b2a752f_9dfdffde58_zip_node_modules_css_loader_dist_cjs_js_yarn_$$virtual_resolve_url_loader_virtual_09a3b1ca41_0_cache_resolve_url_loader_npm_4_0_0_2a9c18d86b_04e9f91dc8_zip_node_modules_resolve_url_loader_index_js_yarn_$$virtual_sass_loader_virtual_8582f2a980_0_cache_sass_loader_npm_12_4_0_3d3847fd35_73707df1ca_zip_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_2_use_3_autoback_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _yarn_$$virtual_css_loader_virtual_df838368e7_0_cache_css_loader_npm_6_5_1_a34b2a752f_9dfdffde58_zip_node_modules_css_loader_dist_cjs_js_yarn_$$virtual_resolve_url_loader_virtual_09a3b1ca41_0_cache_resolve_url_loader_npm_4_0_0_2a9c18d86b_04e9f91dc8_zip_node_modules_resolve_url_loader_index_js_yarn_$$virtual_sass_loader_virtual_8582f2a980_0_cache_sass_loader_npm_12_4_0_3d3847fd35_73707df1ca_zip_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_2_use_3_autoback_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _yarn_$$virtual_css_loader_virtual_df838368e7_0_cache_css_loader_npm_6_5_1_a34b2a752f_9dfdffde58_zip_node_modules_css_loader_dist_cjs_js_yarn_$$virtual_resolve_url_loader_virtual_09a3b1ca41_0_cache_resolve_url_loader_npm_4_0_0_2a9c18d86b_04e9f91dc8_zip_node_modules_resolve_url_loader_index_js_yarn_$$virtual_sass_loader_virtual_8582f2a980_0_cache_sass_loader_npm_12_4_0_3d3847fd35_73707df1ca_zip_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_2_use_3_autoback_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./.yarn/$$virtual/style-loader-virtual-e36c00d1de/0/cache/style-loader-npm-3.3.1-4bbb6ec77f-98fa3139c0.zip/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!*************************************************************************************************************************************************************************************!*\
  !*** ./.yarn/$$virtual/style-loader-virtual-e36c00d1de/0/cache/style-loader-npm-3.3.1-4bbb6ec77f-98fa3139c0.zip/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \*************************************************************************************************************************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./.yarn/$$virtual/style-loader-virtual-e36c00d1de/0/cache/style-loader-npm-3.3.1-4bbb6ec77f-98fa3139c0.zip/node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./.yarn/$$virtual/style-loader-virtual-e36c00d1de/0/cache/style-loader-npm-3.3.1-4bbb6ec77f-98fa3139c0.zip/node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \*****************************************************************************************************************************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./.yarn/$$virtual/style-loader-virtual-e36c00d1de/0/cache/style-loader-npm-3.3.1-4bbb6ec77f-98fa3139c0.zip/node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./.yarn/$$virtual/style-loader-virtual-e36c00d1de/0/cache/style-loader-npm-3.3.1-4bbb6ec77f-98fa3139c0.zip/node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \*******************************************************************************************************************************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./.yarn/$$virtual/style-loader-virtual-e36c00d1de/0/cache/style-loader-npm-3.3.1-4bbb6ec77f-98fa3139c0.zip/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!*******************************************************************************************************************************************************************************************!*\
  !*** ./.yarn/$$virtual/style-loader-virtual-e36c00d1de/0/cache/style-loader-npm-3.3.1-4bbb6ec77f-98fa3139c0.zip/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \*******************************************************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./.yarn/$$virtual/style-loader-virtual-e36c00d1de/0/cache/style-loader-npm-3.3.1-4bbb6ec77f-98fa3139c0.zip/node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!************************************************************************************************************************************************************************!*\
  !*** ./.yarn/$$virtual/style-loader-virtual-e36c00d1de/0/cache/style-loader-npm-3.3.1-4bbb6ec77f-98fa3139c0.zip/node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \************************************************************************************************************************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./.yarn/$$virtual/style-loader-virtual-e36c00d1de/0/cache/style-loader-npm-3.3.1-4bbb6ec77f-98fa3139c0.zip/node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./.yarn/$$virtual/style-loader-virtual-e36c00d1de/0/cache/style-loader-npm-3.3.1-4bbb6ec77f-98fa3139c0.zip/node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \******************************************************************************************************************************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/img/backarrow.png":
/*!*******************************!*\
  !*** ./src/img/backarrow.png ***!
  \*******************************/
/***/ ((module) => {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIMAAAAXCAMAAAAftAwBAAABS2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDIgNzkuMTYwOTI0LCAyMDE3LzA3LzEzLTAxOjA2OjM5ICAgICAgICAiPgogPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIi8+CiA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgo8P3hwYWNrZXQgZW5kPSJyIj8+nhxg7wAAAARnQU1BAACxjwv8YQUAAAABc1JHQgCuzhzpAAADAFBMVEUAAAAASREPeScTeysReykOciUefDQKbSASeioQdicSeyoXfC8SdioAdxwReikAUhQAeBwXey8AeBwffTUYey8AeBwBfh0UfS0QeigAdxwAeBwARxAAdxwKcCEAUxQAYRcAbxoUfS0ffDUAUBMAdRsASBAZezAZfDAYfC8afTEZfDAXfC8Bfh0ffTUdfDIAdxsAUhMASBEAdxsASREAYRcZfDAUfS0dfDMZfDAbfDIAeR0AdxsATRIAcBoARxAAdhscfDIAdxsAYRcASREBfh0Bfh0Bfh0AVBMAVBMAdxsAVhQASREAehwAdRsAUBMAbxoAbxoAdRsAehwAYRcAbxobfDIgfDYAbxoUfS0ffDUAdRscfDMAehwcfDIjfDgAdBsASxIAdRsARhEATRIAehwAYRcAbhkAYhcYfDAafTEAYxcAbxocfTIBfR4AeBwAfh0AdxsAdxsAZRcAaBgAXhYAexwAexwAUhQAUxMAYRcAbxoAbxogfTYbfDIAYhcAVBQUfS0gfDUAcxsAYxcAQA8AexwfezQXfS8ARhAAehwAdxwZfTA+d0sSfSsefTQAXBYAThMAbxoAYRcPfSgAYBYAThMgfTYAThMAQxAAUhMAYRcVfC4AURMAdRsAYhcAaxkAdxwAQhAXey8AZBcAQg8AfBwAehwUfS0AcxoAbhkafTEgfTYhfTYBfh0gfTUAdxwhfDchfDYAYRcAYRcAaBgARhEAUhQAUhQAUhQAbxoAbxoAPg4AbxoAUBMAUhQAYRcAXhYASBEAUhQUfS0Bfh0AbRkAdxwAUhQAURMARxAHdyEUfS0AbxoVfS0VfS4AexwifDcAexw5e0lEeFEtfD8RfSoARxEARxEAaxkAUhQAUhQAQg8AdxwAYRcAUhQAZBcAPxAAOg0Aeh0AYRcAYRcUfS0AQg8AQxAAWxYHeiM4ekgSfSs9eks/ek4Bfh0VfS0ifDcLfSUAeBwAcRoAdRsAYRYAeRwAex0AbhkAThIAWRUAaRkAZRgAUxQCfh8KfiWfa8IzAAAA8nRSTlMAPQsOFgh0BhQEEkABahhgbT11fR9ybXcPZv5DbwJjbmxyeg4vTRstIzUpQnVrcSoRGVlAdTttbSZk+yAeGydQMT9wR2ZweBUiNQssRCNnamdjX3h3SWB0ZneLWn133hgxODdUSmxKXThWNfWL9/TvHic6QiY7U1xsaW9xU0aAT29ooZSFm4ZflafFtt3pzSo5X2U1R2lOelpvolCEgq/ClJBLi9GRspDSypqWpL6u3b3sTVJWfnSRuX2yqpaa0tnN+eKAitq86Pvp66Tmv/LMxeXhJejfYHLzoa34d7/D58R4/uXwed7A8dGd8OXP1tP5agmK6vwAAARRSURBVEjHxZZpVFNHFIBDGxJbFgEbLUYatgACIiFCSYogCaCCBLcSoohAhEDYWkBBsBA2BWVTQNaCbAKyifte3OpetdWudN/3niQEsIK9M4k5Qfqj5/TH+87cOfPm/bjf3MmbDImkC9X+FxLBkH0TfyfWIDhWWBJRSqSBvrS9Z/Dh+6UfEKdAlbTcTk4pI9IhPadHIU9KKXtQ6ujo6enp4PASws7OztjYmEwmz5oGWY1moH7/ooaXEc8Dz2H0EVTECxgLhCEwwyBQWvCxQs7lJqcM/Wa9ieLy6iLOrl0bN8Y3trW1vf6Wk4GBqSk0d3dTADoDhJMTGjhhDEzj4qoWYpYts7e3d0QLwetAi1AbgpnaiYpVnpEwdJW0JCjlY99wuUm/PoiIiCgvP3x4YGCg71BvYuLOnXOsKRQXFxDT4kIBRGiSsgkB7/M4HE4oJzQ0FMx37Ni/H5mbusfFISUQcsA25FlqE6RhMd1BWnBVoVSpVPL587lJ7/01NAQW9+6BRl9fb28vtgBElKeIRCJ4nqODtQhKtygPWh546FrgwqCiaCWwA3W6g35uc4JSNTamksvVEmVlD/8sv3Nnz55btw51dXUlXr78/TwrQCbzkEF4eMisZPA4TwcrK4+wsDAOCtjD+PjGxjZNIaoWokLgfYFdgT35V4fc4VGFXK0ADiCRknL/j7v9/f0HS4qKOjuvXAkPDwhw9gfm6uDv74wIAJwDnJ395/r5+a31Q91aN7dt23y2bFm1ynfr1qiVVba2ixe/GRz82htLN2vrgDZD1+H89Ud/K5RyDSCRnHx/8O7u3e8eLMkvOtC5YcPb4eEjtAWACWAEmGAW0Gg0M8yImRnNyNzcfA0K7OCjdvAFh5X/xYH548XJ0XGthBwkbg52P3U4oHWAZqQBqZggKxrkHwH+rwOV3/rDBJRCo6AcH09IuH21u6flzJn8/HPnwOH06fXCrGxhdlZIiCWAehRZllnZ2cL1CKHQMmT16jUo9u51czvm4xMbG5uW5psaFaXjsHQz/jACZzqQSKyvv7o4+RiXYkypGAW++/ad4eHPm5sbGgoK2ttzcnLWLQF4DAaPx2PExDB4EAxGDI8Hs+sQSxgx27fvQ7FPIpEcO3r0yJHq6rS01NRUqdS2oiI9fcUKL3BYvtzVxkbtYPHsERV99rOJUfSrmBpLuHbt0qULF744derTT86fPNnUVFt74kR9jUBQI3gFMxvAHR4IBJmZ9fWZmWg+Y3ZGRoZYLM7N5fPpbLZeZWV0ZGRkUIU3MvBiscDAFTnoz/guMEGFHROPoBRTT7qLi4tbWwuPH6/9qEbwYV2dWMxkMvl0BBugs/X09Niow7DpdD4TwYe0dJiojI5GiSODgrwBlBuSa9PbBAbioxuOqJmHNYlVd/YGWKie/Ezkf7d3YceNycdTNwm9wtjQCzuuj3Orib1IedGLf1IQfZ8keTd9SbiDIauBgKz/ALM+6cdlBrxlAAAAAElFTkSuQmCC";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			if (cachedModule.error !== undefined) throw cachedModule.error;
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		try {
/******/ 			var execOptions = { id: moduleId, module: module, factory: __webpack_modules__[moduleId], require: __webpack_require__ };
/******/ 			__webpack_require__.i.forEach(function(handler) { handler(execOptions); });
/******/ 			module = execOptions.module;
/******/ 			execOptions.factory.call(module.exports, module, module.exports, execOptions.require);
/******/ 		} catch(e) {
/******/ 			module.error = e;
/******/ 			throw e;
/******/ 		}
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = __webpack_module_cache__;
/******/ 	
/******/ 	// expose the module execution interceptor
/******/ 	__webpack_require__.i = [];
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript update chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference all chunks
/******/ 		__webpack_require__.hu = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + "." + __webpack_require__.h() + ".hot-update.js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get update manifest filename */
/******/ 	(() => {
/******/ 		__webpack_require__.hmrF = () => ("autoback." + __webpack_require__.h() + ".hot-update.json");
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__webpack_require__.h = () => ("24f8354c8dcb235d0925")
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "autoback-cl:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => (fn(event)));
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			;
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hot module replacement */
/******/ 	(() => {
/******/ 		var currentModuleData = {};
/******/ 		var installedModules = __webpack_require__.c;
/******/ 		
/******/ 		// module and require creation
/******/ 		var currentChildModule;
/******/ 		var currentParents = [];
/******/ 		
/******/ 		// status
/******/ 		var registeredStatusHandlers = [];
/******/ 		var currentStatus = "idle";
/******/ 		
/******/ 		// while downloading
/******/ 		var blockingPromises;
/******/ 		
/******/ 		// The update info
/******/ 		var currentUpdateApplyHandlers;
/******/ 		var queuedInvalidatedModules;
/******/ 		
/******/ 		// eslint-disable-next-line no-unused-vars
/******/ 		__webpack_require__.hmrD = currentModuleData;
/******/ 		
/******/ 		__webpack_require__.i.push(function (options) {
/******/ 			var module = options.module;
/******/ 			var require = createRequire(options.require, options.id);
/******/ 			module.hot = createModuleHotObject(options.id, module);
/******/ 			module.parents = currentParents;
/******/ 			module.children = [];
/******/ 			currentParents = [];
/******/ 			options.require = require;
/******/ 		});
/******/ 		
/******/ 		__webpack_require__.hmrC = {};
/******/ 		__webpack_require__.hmrI = {};
/******/ 		
/******/ 		function createRequire(require, moduleId) {
/******/ 			var me = installedModules[moduleId];
/******/ 			if (!me) return require;
/******/ 			var fn = function (request) {
/******/ 				if (me.hot.active) {
/******/ 					if (installedModules[request]) {
/******/ 						var parents = installedModules[request].parents;
/******/ 						if (parents.indexOf(moduleId) === -1) {
/******/ 							parents.push(moduleId);
/******/ 						}
/******/ 					} else {
/******/ 						currentParents = [moduleId];
/******/ 						currentChildModule = request;
/******/ 					}
/******/ 					if (me.children.indexOf(request) === -1) {
/******/ 						me.children.push(request);
/******/ 					}
/******/ 				} else {
/******/ 					console.warn(
/******/ 						"[HMR] unexpected require(" +
/******/ 							request +
/******/ 							") from disposed module " +
/******/ 							moduleId
/******/ 					);
/******/ 					currentParents = [];
/******/ 				}
/******/ 				return require(request);
/******/ 			};
/******/ 			var createPropertyDescriptor = function (name) {
/******/ 				return {
/******/ 					configurable: true,
/******/ 					enumerable: true,
/******/ 					get: function () {
/******/ 						return require[name];
/******/ 					},
/******/ 					set: function (value) {
/******/ 						require[name] = value;
/******/ 					}
/******/ 				};
/******/ 			};
/******/ 			for (var name in require) {
/******/ 				if (Object.prototype.hasOwnProperty.call(require, name) && name !== "e") {
/******/ 					Object.defineProperty(fn, name, createPropertyDescriptor(name));
/******/ 				}
/******/ 			}
/******/ 			fn.e = function (chunkId) {
/******/ 				return trackBlockingPromise(require.e(chunkId));
/******/ 			};
/******/ 			return fn;
/******/ 		}
/******/ 		
/******/ 		function createModuleHotObject(moduleId, me) {
/******/ 			var _main = currentChildModule !== moduleId;
/******/ 			var hot = {
/******/ 				// private stuff
/******/ 				_acceptedDependencies: {},
/******/ 				_acceptedErrorHandlers: {},
/******/ 				_declinedDependencies: {},
/******/ 				_selfAccepted: false,
/******/ 				_selfDeclined: false,
/******/ 				_selfInvalidated: false,
/******/ 				_disposeHandlers: [],
/******/ 				_main: _main,
/******/ 				_requireSelf: function () {
/******/ 					currentParents = me.parents.slice();
/******/ 					currentChildModule = _main ? undefined : moduleId;
/******/ 					__webpack_require__(moduleId);
/******/ 				},
/******/ 		
/******/ 				// Module API
/******/ 				active: true,
/******/ 				accept: function (dep, callback, errorHandler) {
/******/ 					if (dep === undefined) hot._selfAccepted = true;
/******/ 					else if (typeof dep === "function") hot._selfAccepted = dep;
/******/ 					else if (typeof dep === "object" && dep !== null) {
/******/ 						for (var i = 0; i < dep.length; i++) {
/******/ 							hot._acceptedDependencies[dep[i]] = callback || function () {};
/******/ 							hot._acceptedErrorHandlers[dep[i]] = errorHandler;
/******/ 						}
/******/ 					} else {
/******/ 						hot._acceptedDependencies[dep] = callback || function () {};
/******/ 						hot._acceptedErrorHandlers[dep] = errorHandler;
/******/ 					}
/******/ 				},
/******/ 				decline: function (dep) {
/******/ 					if (dep === undefined) hot._selfDeclined = true;
/******/ 					else if (typeof dep === "object" && dep !== null)
/******/ 						for (var i = 0; i < dep.length; i++)
/******/ 							hot._declinedDependencies[dep[i]] = true;
/******/ 					else hot._declinedDependencies[dep] = true;
/******/ 				},
/******/ 				dispose: function (callback) {
/******/ 					hot._disposeHandlers.push(callback);
/******/ 				},
/******/ 				addDisposeHandler: function (callback) {
/******/ 					hot._disposeHandlers.push(callback);
/******/ 				},
/******/ 				removeDisposeHandler: function (callback) {
/******/ 					var idx = hot._disposeHandlers.indexOf(callback);
/******/ 					if (idx >= 0) hot._disposeHandlers.splice(idx, 1);
/******/ 				},
/******/ 				invalidate: function () {
/******/ 					this._selfInvalidated = true;
/******/ 					switch (currentStatus) {
/******/ 						case "idle":
/******/ 							currentUpdateApplyHandlers = [];
/******/ 							Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 								__webpack_require__.hmrI[key](
/******/ 									moduleId,
/******/ 									currentUpdateApplyHandlers
/******/ 								);
/******/ 							});
/******/ 							setStatus("ready");
/******/ 							break;
/******/ 						case "ready":
/******/ 							Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 								__webpack_require__.hmrI[key](
/******/ 									moduleId,
/******/ 									currentUpdateApplyHandlers
/******/ 								);
/******/ 							});
/******/ 							break;
/******/ 						case "prepare":
/******/ 						case "check":
/******/ 						case "dispose":
/******/ 						case "apply":
/******/ 							(queuedInvalidatedModules = queuedInvalidatedModules || []).push(
/******/ 								moduleId
/******/ 							);
/******/ 							break;
/******/ 						default:
/******/ 							// ignore requests in error states
/******/ 							break;
/******/ 					}
/******/ 				},
/******/ 		
/******/ 				// Management API
/******/ 				check: hotCheck,
/******/ 				apply: hotApply,
/******/ 				status: function (l) {
/******/ 					if (!l) return currentStatus;
/******/ 					registeredStatusHandlers.push(l);
/******/ 				},
/******/ 				addStatusHandler: function (l) {
/******/ 					registeredStatusHandlers.push(l);
/******/ 				},
/******/ 				removeStatusHandler: function (l) {
/******/ 					var idx = registeredStatusHandlers.indexOf(l);
/******/ 					if (idx >= 0) registeredStatusHandlers.splice(idx, 1);
/******/ 				},
/******/ 		
/******/ 				//inherit from previous dispose call
/******/ 				data: currentModuleData[moduleId]
/******/ 			};
/******/ 			currentChildModule = undefined;
/******/ 			return hot;
/******/ 		}
/******/ 		
/******/ 		function setStatus(newStatus) {
/******/ 			currentStatus = newStatus;
/******/ 			var results = [];
/******/ 		
/******/ 			for (var i = 0; i < registeredStatusHandlers.length; i++)
/******/ 				results[i] = registeredStatusHandlers[i].call(null, newStatus);
/******/ 		
/******/ 			return Promise.all(results);
/******/ 		}
/******/ 		
/******/ 		function trackBlockingPromise(promise) {
/******/ 			switch (currentStatus) {
/******/ 				case "ready":
/******/ 					setStatus("prepare");
/******/ 					blockingPromises.push(promise);
/******/ 					waitForBlockingPromises(function () {
/******/ 						return setStatus("ready");
/******/ 					});
/******/ 					return promise;
/******/ 				case "prepare":
/******/ 					blockingPromises.push(promise);
/******/ 					return promise;
/******/ 				default:
/******/ 					return promise;
/******/ 			}
/******/ 		}
/******/ 		
/******/ 		function waitForBlockingPromises(fn) {
/******/ 			if (blockingPromises.length === 0) return fn();
/******/ 			var blocker = blockingPromises;
/******/ 			blockingPromises = [];
/******/ 			return Promise.all(blocker).then(function () {
/******/ 				return waitForBlockingPromises(fn);
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		function hotCheck(applyOnUpdate) {
/******/ 			if (currentStatus !== "idle") {
/******/ 				throw new Error("check() is only allowed in idle status");
/******/ 			}
/******/ 			return setStatus("check")
/******/ 				.then(__webpack_require__.hmrM)
/******/ 				.then(function (update) {
/******/ 					if (!update) {
/******/ 						return setStatus(applyInvalidatedModules() ? "ready" : "idle").then(
/******/ 							function () {
/******/ 								return null;
/******/ 							}
/******/ 						);
/******/ 					}
/******/ 		
/******/ 					return setStatus("prepare").then(function () {
/******/ 						var updatedModules = [];
/******/ 						blockingPromises = [];
/******/ 						currentUpdateApplyHandlers = [];
/******/ 		
/******/ 						return Promise.all(
/******/ 							Object.keys(__webpack_require__.hmrC).reduce(function (
/******/ 								promises,
/******/ 								key
/******/ 							) {
/******/ 								__webpack_require__.hmrC[key](
/******/ 									update.c,
/******/ 									update.r,
/******/ 									update.m,
/******/ 									promises,
/******/ 									currentUpdateApplyHandlers,
/******/ 									updatedModules
/******/ 								);
/******/ 								return promises;
/******/ 							},
/******/ 							[])
/******/ 						).then(function () {
/******/ 							return waitForBlockingPromises(function () {
/******/ 								if (applyOnUpdate) {
/******/ 									return internalApply(applyOnUpdate);
/******/ 								} else {
/******/ 									return setStatus("ready").then(function () {
/******/ 										return updatedModules;
/******/ 									});
/******/ 								}
/******/ 							});
/******/ 						});
/******/ 					});
/******/ 				});
/******/ 		}
/******/ 		
/******/ 		function hotApply(options) {
/******/ 			if (currentStatus !== "ready") {
/******/ 				return Promise.resolve().then(function () {
/******/ 					throw new Error("apply() is only allowed in ready status");
/******/ 				});
/******/ 			}
/******/ 			return internalApply(options);
/******/ 		}
/******/ 		
/******/ 		function internalApply(options) {
/******/ 			options = options || {};
/******/ 		
/******/ 			applyInvalidatedModules();
/******/ 		
/******/ 			var results = currentUpdateApplyHandlers.map(function (handler) {
/******/ 				return handler(options);
/******/ 			});
/******/ 			currentUpdateApplyHandlers = undefined;
/******/ 		
/******/ 			var errors = results
/******/ 				.map(function (r) {
/******/ 					return r.error;
/******/ 				})
/******/ 				.filter(Boolean);
/******/ 		
/******/ 			if (errors.length > 0) {
/******/ 				return setStatus("abort").then(function () {
/******/ 					throw errors[0];
/******/ 				});
/******/ 			}
/******/ 		
/******/ 			// Now in "dispose" phase
/******/ 			var disposePromise = setStatus("dispose");
/******/ 		
/******/ 			results.forEach(function (result) {
/******/ 				if (result.dispose) result.dispose();
/******/ 			});
/******/ 		
/******/ 			// Now in "apply" phase
/******/ 			var applyPromise = setStatus("apply");
/******/ 		
/******/ 			var error;
/******/ 			var reportError = function (err) {
/******/ 				if (!error) error = err;
/******/ 			};
/******/ 		
/******/ 			var outdatedModules = [];
/******/ 			results.forEach(function (result) {
/******/ 				if (result.apply) {
/******/ 					var modules = result.apply(reportError);
/******/ 					if (modules) {
/******/ 						for (var i = 0; i < modules.length; i++) {
/******/ 							outdatedModules.push(modules[i]);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 			});
/******/ 		
/******/ 			return Promise.all([disposePromise, applyPromise]).then(function () {
/******/ 				// handle errors in accept handlers and self accepted module load
/******/ 				if (error) {
/******/ 					return setStatus("fail").then(function () {
/******/ 						throw error;
/******/ 					});
/******/ 				}
/******/ 		
/******/ 				if (queuedInvalidatedModules) {
/******/ 					return internalApply(options).then(function (list) {
/******/ 						outdatedModules.forEach(function (moduleId) {
/******/ 							if (list.indexOf(moduleId) < 0) list.push(moduleId);
/******/ 						});
/******/ 						return list;
/******/ 					});
/******/ 				}
/******/ 		
/******/ 				return setStatus("idle").then(function () {
/******/ 					return outdatedModules;
/******/ 				});
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		function applyInvalidatedModules() {
/******/ 			if (queuedInvalidatedModules) {
/******/ 				if (!currentUpdateApplyHandlers) currentUpdateApplyHandlers = [];
/******/ 				Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 					queuedInvalidatedModules.forEach(function (moduleId) {
/******/ 						__webpack_require__.hmrI[key](
/******/ 							moduleId,
/******/ 							currentUpdateApplyHandlers
/******/ 						);
/******/ 					});
/******/ 				});
/******/ 				queuedInvalidatedModules = undefined;
/******/ 				return true;
/******/ 			}
/******/ 		}
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = __webpack_require__.hmrS_jsonp = __webpack_require__.hmrS_jsonp || {
/******/ 			"autoback": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		var currentUpdatedModulesList;
/******/ 		var waitingUpdateResolves = {};
/******/ 		function loadUpdateChunk(chunkId) {
/******/ 			return new Promise((resolve, reject) => {
/******/ 				waitingUpdateResolves[chunkId] = resolve;
/******/ 				// start update chunk loading
/******/ 				var url = __webpack_require__.p + __webpack_require__.hu(chunkId);
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				var loadingEnded = (event) => {
/******/ 					if(waitingUpdateResolves[chunkId]) {
/******/ 						waitingUpdateResolves[chunkId] = undefined
/******/ 						var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 						var realSrc = event && event.target && event.target.src;
/******/ 						error.message = 'Loading hot update chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 						error.name = 'ChunkLoadError';
/******/ 						error.type = errorType;
/******/ 						error.request = realSrc;
/******/ 						reject(error);
/******/ 					}
/******/ 				};
/******/ 				__webpack_require__.l(url, loadingEnded);
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		self["webpackHotUpdateautoback_cl"] = (chunkId, moreModules, runtime) => {
/******/ 			for(var moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					currentUpdate[moduleId] = moreModules[moduleId];
/******/ 					if(currentUpdatedModulesList) currentUpdatedModulesList.push(moduleId);
/******/ 				}
/******/ 			}
/******/ 			if(runtime) currentUpdateRuntime.push(runtime);
/******/ 			if(waitingUpdateResolves[chunkId]) {
/******/ 				waitingUpdateResolves[chunkId]();
/******/ 				waitingUpdateResolves[chunkId] = undefined;
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		var currentUpdateChunks;
/******/ 		var currentUpdate;
/******/ 		var currentUpdateRemovedChunks;
/******/ 		var currentUpdateRuntime;
/******/ 		function applyHandler(options) {
/******/ 			if (__webpack_require__.f) delete __webpack_require__.f.jsonpHmr;
/******/ 			currentUpdateChunks = undefined;
/******/ 			function getAffectedModuleEffects(updateModuleId) {
/******/ 				var outdatedModules = [updateModuleId];
/******/ 				var outdatedDependencies = {};
/******/ 		
/******/ 				var queue = outdatedModules.map(function (id) {
/******/ 					return {
/******/ 						chain: [id],
/******/ 						id: id
/******/ 					};
/******/ 				});
/******/ 				while (queue.length > 0) {
/******/ 					var queueItem = queue.pop();
/******/ 					var moduleId = queueItem.id;
/******/ 					var chain = queueItem.chain;
/******/ 					var module = __webpack_require__.c[moduleId];
/******/ 					if (
/******/ 						!module ||
/******/ 						(module.hot._selfAccepted && !module.hot._selfInvalidated)
/******/ 					)
/******/ 						continue;
/******/ 					if (module.hot._selfDeclined) {
/******/ 						return {
/******/ 							type: "self-declined",
/******/ 							chain: chain,
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					if (module.hot._main) {
/******/ 						return {
/******/ 							type: "unaccepted",
/******/ 							chain: chain,
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					for (var i = 0; i < module.parents.length; i++) {
/******/ 						var parentId = module.parents[i];
/******/ 						var parent = __webpack_require__.c[parentId];
/******/ 						if (!parent) continue;
/******/ 						if (parent.hot._declinedDependencies[moduleId]) {
/******/ 							return {
/******/ 								type: "declined",
/******/ 								chain: chain.concat([parentId]),
/******/ 								moduleId: moduleId,
/******/ 								parentId: parentId
/******/ 							};
/******/ 						}
/******/ 						if (outdatedModules.indexOf(parentId) !== -1) continue;
/******/ 						if (parent.hot._acceptedDependencies[moduleId]) {
/******/ 							if (!outdatedDependencies[parentId])
/******/ 								outdatedDependencies[parentId] = [];
/******/ 							addAllToSet(outdatedDependencies[parentId], [moduleId]);
/******/ 							continue;
/******/ 						}
/******/ 						delete outdatedDependencies[parentId];
/******/ 						outdatedModules.push(parentId);
/******/ 						queue.push({
/******/ 							chain: chain.concat([parentId]),
/******/ 							id: parentId
/******/ 						});
/******/ 					}
/******/ 				}
/******/ 		
/******/ 				return {
/******/ 					type: "accepted",
/******/ 					moduleId: updateModuleId,
/******/ 					outdatedModules: outdatedModules,
/******/ 					outdatedDependencies: outdatedDependencies
/******/ 				};
/******/ 			}
/******/ 		
/******/ 			function addAllToSet(a, b) {
/******/ 				for (var i = 0; i < b.length; i++) {
/******/ 					var item = b[i];
/******/ 					if (a.indexOf(item) === -1) a.push(item);
/******/ 				}
/******/ 			}
/******/ 		
/******/ 			// at begin all updates modules are outdated
/******/ 			// the "outdated" status can propagate to parents if they don't accept the children
/******/ 			var outdatedDependencies = {};
/******/ 			var outdatedModules = [];
/******/ 			var appliedUpdate = {};
/******/ 		
/******/ 			var warnUnexpectedRequire = function warnUnexpectedRequire(module) {
/******/ 				console.warn(
/******/ 					"[HMR] unexpected require(" + module.id + ") to disposed module"
/******/ 				);
/******/ 			};
/******/ 		
/******/ 			for (var moduleId in currentUpdate) {
/******/ 				if (__webpack_require__.o(currentUpdate, moduleId)) {
/******/ 					var newModuleFactory = currentUpdate[moduleId];
/******/ 					/** @type {TODO} */
/******/ 					var result;
/******/ 					if (newModuleFactory) {
/******/ 						result = getAffectedModuleEffects(moduleId);
/******/ 					} else {
/******/ 						result = {
/******/ 							type: "disposed",
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					/** @type {Error|false} */
/******/ 					var abortError = false;
/******/ 					var doApply = false;
/******/ 					var doDispose = false;
/******/ 					var chainInfo = "";
/******/ 					if (result.chain) {
/******/ 						chainInfo = "\nUpdate propagation: " + result.chain.join(" -> ");
/******/ 					}
/******/ 					switch (result.type) {
/******/ 						case "self-declined":
/******/ 							if (options.onDeclined) options.onDeclined(result);
/******/ 							if (!options.ignoreDeclined)
/******/ 								abortError = new Error(
/******/ 									"Aborted because of self decline: " +
/******/ 										result.moduleId +
/******/ 										chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "declined":
/******/ 							if (options.onDeclined) options.onDeclined(result);
/******/ 							if (!options.ignoreDeclined)
/******/ 								abortError = new Error(
/******/ 									"Aborted because of declined dependency: " +
/******/ 										result.moduleId +
/******/ 										" in " +
/******/ 										result.parentId +
/******/ 										chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "unaccepted":
/******/ 							if (options.onUnaccepted) options.onUnaccepted(result);
/******/ 							if (!options.ignoreUnaccepted)
/******/ 								abortError = new Error(
/******/ 									"Aborted because " + moduleId + " is not accepted" + chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "accepted":
/******/ 							if (options.onAccepted) options.onAccepted(result);
/******/ 							doApply = true;
/******/ 							break;
/******/ 						case "disposed":
/******/ 							if (options.onDisposed) options.onDisposed(result);
/******/ 							doDispose = true;
/******/ 							break;
/******/ 						default:
/******/ 							throw new Error("Unexception type " + result.type);
/******/ 					}
/******/ 					if (abortError) {
/******/ 						return {
/******/ 							error: abortError
/******/ 						};
/******/ 					}
/******/ 					if (doApply) {
/******/ 						appliedUpdate[moduleId] = newModuleFactory;
/******/ 						addAllToSet(outdatedModules, result.outdatedModules);
/******/ 						for (moduleId in result.outdatedDependencies) {
/******/ 							if (__webpack_require__.o(result.outdatedDependencies, moduleId)) {
/******/ 								if (!outdatedDependencies[moduleId])
/******/ 									outdatedDependencies[moduleId] = [];
/******/ 								addAllToSet(
/******/ 									outdatedDependencies[moduleId],
/******/ 									result.outdatedDependencies[moduleId]
/******/ 								);
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 					if (doDispose) {
/******/ 						addAllToSet(outdatedModules, [result.moduleId]);
/******/ 						appliedUpdate[moduleId] = warnUnexpectedRequire;
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 			currentUpdate = undefined;
/******/ 		
/******/ 			// Store self accepted outdated modules to require them later by the module system
/******/ 			var outdatedSelfAcceptedModules = [];
/******/ 			for (var j = 0; j < outdatedModules.length; j++) {
/******/ 				var outdatedModuleId = outdatedModules[j];
/******/ 				var module = __webpack_require__.c[outdatedModuleId];
/******/ 				if (
/******/ 					module &&
/******/ 					(module.hot._selfAccepted || module.hot._main) &&
/******/ 					// removed self-accepted modules should not be required
/******/ 					appliedUpdate[outdatedModuleId] !== warnUnexpectedRequire &&
/******/ 					// when called invalidate self-accepting is not possible
/******/ 					!module.hot._selfInvalidated
/******/ 				) {
/******/ 					outdatedSelfAcceptedModules.push({
/******/ 						module: outdatedModuleId,
/******/ 						require: module.hot._requireSelf,
/******/ 						errorHandler: module.hot._selfAccepted
/******/ 					});
/******/ 				}
/******/ 			}
/******/ 		
/******/ 			var moduleOutdatedDependencies;
/******/ 		
/******/ 			return {
/******/ 				dispose: function () {
/******/ 					currentUpdateRemovedChunks.forEach(function (chunkId) {
/******/ 						delete installedChunks[chunkId];
/******/ 					});
/******/ 					currentUpdateRemovedChunks = undefined;
/******/ 		
/******/ 					var idx;
/******/ 					var queue = outdatedModules.slice();
/******/ 					while (queue.length > 0) {
/******/ 						var moduleId = queue.pop();
/******/ 						var module = __webpack_require__.c[moduleId];
/******/ 						if (!module) continue;
/******/ 		
/******/ 						var data = {};
/******/ 		
/******/ 						// Call dispose handlers
/******/ 						var disposeHandlers = module.hot._disposeHandlers;
/******/ 						for (j = 0; j < disposeHandlers.length; j++) {
/******/ 							disposeHandlers[j].call(null, data);
/******/ 						}
/******/ 						__webpack_require__.hmrD[moduleId] = data;
/******/ 		
/******/ 						// disable module (this disables requires from this module)
/******/ 						module.hot.active = false;
/******/ 		
/******/ 						// remove module from cache
/******/ 						delete __webpack_require__.c[moduleId];
/******/ 		
/******/ 						// when disposing there is no need to call dispose handler
/******/ 						delete outdatedDependencies[moduleId];
/******/ 		
/******/ 						// remove "parents" references from all children
/******/ 						for (j = 0; j < module.children.length; j++) {
/******/ 							var child = __webpack_require__.c[module.children[j]];
/******/ 							if (!child) continue;
/******/ 							idx = child.parents.indexOf(moduleId);
/******/ 							if (idx >= 0) {
/******/ 								child.parents.splice(idx, 1);
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// remove outdated dependency from module children
/******/ 					var dependency;
/******/ 					for (var outdatedModuleId in outdatedDependencies) {
/******/ 						if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 							module = __webpack_require__.c[outdatedModuleId];
/******/ 							if (module) {
/******/ 								moduleOutdatedDependencies =
/******/ 									outdatedDependencies[outdatedModuleId];
/******/ 								for (j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 									dependency = moduleOutdatedDependencies[j];
/******/ 									idx = module.children.indexOf(dependency);
/******/ 									if (idx >= 0) module.children.splice(idx, 1);
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 				},
/******/ 				apply: function (reportError) {
/******/ 					// insert new code
/******/ 					for (var updateModuleId in appliedUpdate) {
/******/ 						if (__webpack_require__.o(appliedUpdate, updateModuleId)) {
/******/ 							__webpack_require__.m[updateModuleId] = appliedUpdate[updateModuleId];
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// run new runtime modules
/******/ 					for (var i = 0; i < currentUpdateRuntime.length; i++) {
/******/ 						currentUpdateRuntime[i](__webpack_require__);
/******/ 					}
/******/ 		
/******/ 					// call accept handlers
/******/ 					for (var outdatedModuleId in outdatedDependencies) {
/******/ 						if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 							var module = __webpack_require__.c[outdatedModuleId];
/******/ 							if (module) {
/******/ 								moduleOutdatedDependencies =
/******/ 									outdatedDependencies[outdatedModuleId];
/******/ 								var callbacks = [];
/******/ 								var errorHandlers = [];
/******/ 								var dependenciesForCallbacks = [];
/******/ 								for (var j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 									var dependency = moduleOutdatedDependencies[j];
/******/ 									var acceptCallback =
/******/ 										module.hot._acceptedDependencies[dependency];
/******/ 									var errorHandler =
/******/ 										module.hot._acceptedErrorHandlers[dependency];
/******/ 									if (acceptCallback) {
/******/ 										if (callbacks.indexOf(acceptCallback) !== -1) continue;
/******/ 										callbacks.push(acceptCallback);
/******/ 										errorHandlers.push(errorHandler);
/******/ 										dependenciesForCallbacks.push(dependency);
/******/ 									}
/******/ 								}
/******/ 								for (var k = 0; k < callbacks.length; k++) {
/******/ 									try {
/******/ 										callbacks[k].call(null, moduleOutdatedDependencies);
/******/ 									} catch (err) {
/******/ 										if (typeof errorHandlers[k] === "function") {
/******/ 											try {
/******/ 												errorHandlers[k](err, {
/******/ 													moduleId: outdatedModuleId,
/******/ 													dependencyId: dependenciesForCallbacks[k]
/******/ 												});
/******/ 											} catch (err2) {
/******/ 												if (options.onErrored) {
/******/ 													options.onErrored({
/******/ 														type: "accept-error-handler-errored",
/******/ 														moduleId: outdatedModuleId,
/******/ 														dependencyId: dependenciesForCallbacks[k],
/******/ 														error: err2,
/******/ 														originalError: err
/******/ 													});
/******/ 												}
/******/ 												if (!options.ignoreErrored) {
/******/ 													reportError(err2);
/******/ 													reportError(err);
/******/ 												}
/******/ 											}
/******/ 										} else {
/******/ 											if (options.onErrored) {
/******/ 												options.onErrored({
/******/ 													type: "accept-errored",
/******/ 													moduleId: outdatedModuleId,
/******/ 													dependencyId: dependenciesForCallbacks[k],
/******/ 													error: err
/******/ 												});
/******/ 											}
/******/ 											if (!options.ignoreErrored) {
/******/ 												reportError(err);
/******/ 											}
/******/ 										}
/******/ 									}
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// Load self accepted modules
/******/ 					for (var o = 0; o < outdatedSelfAcceptedModules.length; o++) {
/******/ 						var item = outdatedSelfAcceptedModules[o];
/******/ 						var moduleId = item.module;
/******/ 						try {
/******/ 							item.require(moduleId);
/******/ 						} catch (err) {
/******/ 							if (typeof item.errorHandler === "function") {
/******/ 								try {
/******/ 									item.errorHandler(err, {
/******/ 										moduleId: moduleId,
/******/ 										module: __webpack_require__.c[moduleId]
/******/ 									});
/******/ 								} catch (err2) {
/******/ 									if (options.onErrored) {
/******/ 										options.onErrored({
/******/ 											type: "self-accept-error-handler-errored",
/******/ 											moduleId: moduleId,
/******/ 											error: err2,
/******/ 											originalError: err
/******/ 										});
/******/ 									}
/******/ 									if (!options.ignoreErrored) {
/******/ 										reportError(err2);
/******/ 										reportError(err);
/******/ 									}
/******/ 								}
/******/ 							} else {
/******/ 								if (options.onErrored) {
/******/ 									options.onErrored({
/******/ 										type: "self-accept-errored",
/******/ 										moduleId: moduleId,
/******/ 										error: err
/******/ 									});
/******/ 								}
/******/ 								if (!options.ignoreErrored) {
/******/ 									reportError(err);
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					return outdatedModules;
/******/ 				}
/******/ 			};
/******/ 		}
/******/ 		__webpack_require__.hmrI.jsonp = function (moduleId, applyHandlers) {
/******/ 			if (!currentUpdate) {
/******/ 				currentUpdate = {};
/******/ 				currentUpdateRuntime = [];
/******/ 				currentUpdateRemovedChunks = [];
/******/ 				applyHandlers.push(applyHandler);
/******/ 			}
/******/ 			if (!__webpack_require__.o(currentUpdate, moduleId)) {
/******/ 				currentUpdate[moduleId] = __webpack_require__.m[moduleId];
/******/ 			}
/******/ 		};
/******/ 		__webpack_require__.hmrC.jsonp = function (
/******/ 			chunkIds,
/******/ 			removedChunks,
/******/ 			removedModules,
/******/ 			promises,
/******/ 			applyHandlers,
/******/ 			updatedModulesList
/******/ 		) {
/******/ 			applyHandlers.push(applyHandler);
/******/ 			currentUpdateChunks = {};
/******/ 			currentUpdateRemovedChunks = removedChunks;
/******/ 			currentUpdate = removedModules.reduce(function (obj, key) {
/******/ 				obj[key] = false;
/******/ 				return obj;
/******/ 			}, {});
/******/ 			currentUpdateRuntime = [];
/******/ 			chunkIds.forEach(function (chunkId) {
/******/ 				if (
/******/ 					__webpack_require__.o(installedChunks, chunkId) &&
/******/ 					installedChunks[chunkId] !== undefined
/******/ 				) {
/******/ 					promises.push(loadUpdateChunk(chunkId, updatedModulesList));
/******/ 					currentUpdateChunks[chunkId] = true;
/******/ 				}
/******/ 			});
/******/ 			if (__webpack_require__.f) {
/******/ 				__webpack_require__.f.jsonpHmr = function (chunkId, promises) {
/******/ 					if (
/******/ 						currentUpdateChunks &&
/******/ 						!__webpack_require__.o(currentUpdateChunks, chunkId) &&
/******/ 						__webpack_require__.o(installedChunks, chunkId) &&
/******/ 						installedChunks[chunkId] !== undefined
/******/ 					) {
/******/ 						promises.push(loadUpdateChunk(chunkId));
/******/ 						currentUpdateChunks[chunkId] = true;
/******/ 					}
/******/ 				};
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.hmrM = () => {
/******/ 			if (typeof fetch === "undefined") throw new Error("No browser support: need fetch API");
/******/ 			return fetch(__webpack_require__.p + __webpack_require__.hmrF()).then((response) => {
/******/ 				if(response.status === 404) return; // no update available
/******/ 				if(!response.ok) throw new Error("Failed to fetch update manifest " + response.statusText);
/******/ 				return response.json();
/******/ 			});
/******/ 		};
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// module cache are used so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=autoback-cl.js.map