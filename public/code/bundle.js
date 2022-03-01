/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].use[1]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./src/scss/main.scss":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].use[1]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./src/scss/main.scss ***!
  \*****************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ \"./node_modules/css-loader/dist/runtime/sourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".info_content {\\n  display: inline-block;\\n  text-align: center;\\n  position: relative;\\n  top: 5px;\\n  left: 50%;\\n  transform: translate(-50%, -15%);\\n}\\n\\n.info {\\n  background: #101010;\\n  position: absolute;\\n  width: 450px;\\n  padding-left: 0px;\\n  border-radius: 10px;\\n  padding-top: 20px;\\n  padding-bottom: 20px;\\n  bottom: 10px;\\n  right: 10px;\\n  z-index: 50;\\n}\\n\\n.choose-image-12, .choose-image-11, .choose-image-10, .choose-image-9, .choose-image-8, .choose-image-7, .choose-image-6, .choose-image-5, .choose-image-4, .choose-image-3, .choose-image-2, .choose-image-1 {\\n  transform: scale(1.8);\\n  cursor: pointer;\\n  transition: opacity 0.5s ease;\\n  opacity: 0.5;\\n  overflow: hidden;\\n  width: 100px;\\n  height: 100px;\\n  z-index: 500;\\n  background-size: cover !important;\\n  display: inline-block;\\n}\\n\\n.avatar-choose {\\n  background: #121212;\\n  height: 100px;\\n  border-radius: 10px;\\n  margin-top: 1%;\\n  overflow: hidden;\\n}\\n\\n.avatar-select {\\n  display: grid;\\n  grid-template-columns: auto auto auto auto auto;\\n  grid-row: 1;\\n  height: 100px;\\n  width: fit-content;\\n  position: absolute;\\n  justify-content: center;\\n  align-items: center;\\n  justify-items: stretch;\\n  align-content: space-between;\\n  align-self: center;\\n  margin-left: auto;\\n  margin-right: auto;\\n  position: absolute;\\n  left: 50%;\\n  transform: translate(-50%);\\n}\\n\\n.selected {\\n  opacity: 1;\\n}\\n\\n.choose-image-1 {\\n  background: url(\\\"./avatars/Avatar1.png\\\");\\n}\\n\\n.choose-image-2 {\\n  background: url(\\\"./avatars/Avatar2.png\\\");\\n}\\n\\n.choose-image-3 {\\n  background: url(\\\"./avatars/Avatar3.png\\\");\\n}\\n\\n.choose-image-4 {\\n  background: url(\\\"./avatars/Avatar4.png\\\");\\n}\\n\\n.choose-image-5 {\\n  background: url(\\\"./avatars/Avatar5.png\\\");\\n}\\n\\n.choose-image-6 {\\n  background: url(\\\"./avatars/Avatar6.png\\\");\\n}\\n\\n.choose-image-7 {\\n  background: url(\\\"./avatars/Avatar7.png\\\");\\n}\\n\\n.choose-image-8 {\\n  background: url(\\\"./avatars/Avatar8.png\\\");\\n}\\n\\n.choose-image-9 {\\n  background: url(\\\"./avatars/Avatar9.png\\\");\\n}\\n\\n.choose-image-10 {\\n  background: url(\\\"./avatars/Avatar10.png\\\");\\n}\\n\\n.choose-image-11 {\\n  background: url(\\\"./avatars/Avatar11.png\\\");\\n}\\n\\n.choose-image-12 {\\n  background: url(\\\"./avatars/Avatar12.png\\\");\\n}\\n\\n.title {\\n  color: white;\\n  font-family: \\\"Roboto\\\", sans-serif;\\n  text-align: center;\\n  font-size: 1.5em;\\n  margin-top: 5%;\\n}\\n\\n.error {\\n  position: absolute;\\n  top: 50%;\\n  left: 50%;\\n  width: 30%;\\n  height: 25%;\\n  background: #090909;\\n  border-radius: 15px;\\n  cursor: default;\\n  z-index: 50;\\n  transform: translate(-50%, -50%);\\n  display: none;\\n}\\n\\n.button {\\n  font-family: \\\"Roboto\\\", sans-serif;\\n  font-size: 1.25em;\\n  color: white;\\n  background: #121212;\\n  width: 80%;\\n  cursor: pointer;\\n  margin-left: auto;\\n  margin-right: auto;\\n  padding-top: 1%;\\n  border-radius: 10px;\\n  padding-bottom: 1%;\\n  margin-top: 3%;\\n  text-align: center;\\n}\\n\\n.description {\\n  color: white;\\n  font-family: \\\"Roboto\\\", sans-serif;\\n  padding-left: 10%;\\n  padding-right: 10%;\\n  text-align: center;\\n  margin-top: 5%;\\n}\\n\\n.player {\\n  user-select: none;\\n  transition: top 0.5s ease-out, left 0.5s ease-out;\\n  animation-fill-mode: forwards;\\n  background: none;\\n  position: absolute;\\n  top: 0;\\n  left: 0;\\n}\\n\\n.playerimage {\\n  width: 200px;\\n  height: 200px;\\n}\\n\\n.me {\\n  z-index: 1;\\n}\\n\\n#game {\\n  height: 100%;\\n  position: absolute;\\n  top: 0;\\n  left: 0;\\n  background: #161616;\\n  width: 100%;\\n  overflow: hidden;\\n  color: white;\\n  transition: filter 0.5s linear;\\n  z-index: -1;\\n}\\n\\nbody {\\n  user-select: none;\\n  cursor: default;\\n  background: #101010;\\n  font-family: \\\"Roboto\\\", sans-serif;\\n}\\n\\n.logo {\\n  width: 50px;\\n  position: relative;\\n  left: 10%;\\n}\\n\\n.notices {\\n  position: absolute;\\n  bottom: 10px;\\n  margin-left: 10px;\\n  z-index: 5;\\n  color: rgba(255, 255, 255, 0.25);\\n  font-family: \\\"Roboto\\\", sans-serif;\\n  transition: color 0.5s ease;\\n}\\n.notices:hover {\\n  color: white;\\n}\", \"\",{\"version\":3,\"sources\":[\"webpack://./src/scss/info.scss\",\"webpack://./src/scss/main.scss\",\"webpack://./src/scss/_variables.scss\",\"webpack://./src/scss/chooser.scss\",\"webpack://./src/scss/error.scss\",\"webpack://./src/scss/game.scss\"],\"names\":[],\"mappings\":\"AAEA;EACE,qBAAA;EACA,kBAAA;EACA,kBAAA;EACA,QAAA;EACA,SAAA;EACA,gCAAA;ACDF;;ADIA;EACE,mBEZK;EFaL,kBAAA;EACA,YAAA;EACA,iBAAA;EACA,mBAAA;EACA,iBAAA;EACA,oBAAA;EACA,YAAA;EACA,WAAA;EACA,WAAA;ACDF;;AElBA;EACE,qBDIc;ECHd,eAAA;EACA,6BAAA;EACA,YAAA;EACA,gBAAA;EACA,YAAA;EACA,aAAA;EACA,YAAA;EACA,iCAAA;EACA,qBAAA;AFqBF;;AElBA;EACE,mBDfe;ECgBf,aAAA;EACA,mBAAA;EACA,cAAA;EACA,gBAAA;AFqBF;;AElBA;EACE,aAAA;EACA,+CAAA;EACA,WAAA;EACA,aAAA;EACA,kBAAA;EACA,kBAAA;EACA,uBAAA;EACA,mBAAA;EACA,sBAAA;EACA,4BAAA;EACA,kBAAA;EACA,iBAAA;EACA,kBAAA;EACA,kBAAA;EACA,SAAA;EACA,0BAAA;AFqBF;;AElBA;EACE,UAAA;AFqBF;;AEjBE;EAEE,wCAAA;AFmBJ;;AErBE;EAEE,wCAAA;AFuBJ;;AEzBE;EAEE,wCAAA;AF2BJ;;AE7BE;EAEE,wCAAA;AF+BJ;;AEjCE;EAEE,wCAAA;AFmCJ;;AErCE;EAEE,wCAAA;AFuCJ;;AEzCE;EAEE,wCAAA;AF2CJ;;AE7CE;EAEE,wCAAA;AF+CJ;;AEjDE;EAEE,wCAAA;AFmDJ;;AErDE;EAEE,yCAAA;AFuDJ;;AEzDE;EAEE,yCAAA;AF2DJ;;AE7DE;EAEE,yCAAA;AF+DJ;;AG9GA;EACE,YAAA;EACA,iCFCK;EEAL,kBAAA;EACA,gBAAA;EACA,cAAA;AHiHF;;AG9GA;EACE,kBAAA;EACA,QAAA;EACA,SAAA;EACA,UAAA;EACA,WAAA;EACA,mBFdM;EEeN,mBAAA;EACA,eAAA;EACA,WAAA;EACA,gCAAA;EACA,aAAA;AHiHF;;AG9GA;EACE,iCAAA;EACA,iBAAA;EACA,YAAA;EACA,mBF3Be;EE4Bf,UAAA;EACA,eAAA;EACA,iBAAA;EACA,kBAAA;EACA,eAAA;EACA,mBAAA;EACA,kBAAA;EACA,cAAA;EACA,kBAAA;AHiHF;;AG9GA;EACE,YAAA;EACA,iCFrCK;EEsCL,iBAAA;EACA,kBAAA;EACA,kBAAA;EACA,cAAA;AHiHF;;AI7JA;EACE,iBAAA;EACA,iDAAA;EACA,6BAAA;EACA,gBAAA;EACA,kBAAA;EACA,MAAA;EACA,OAAA;AJgKF;;AI7JA;EACE,YAAA;EACA,aAAA;AJgKF;;AI7JA;EACE,UAAA;AJgKF;;AI7JA;EACE,YAAA;EACA,kBAAA;EACA,MAAA;EACA,OAAA;EACA,mBHvBK;EGwBL,WAAA;EACA,gBAAA;EACA,YAAA;EACA,8BAAA;EACA,WAAA;AJgKF;;AAzLA;EACE,iBAAA;EACA,eAAA;EACA,mBCTK;EDUL,iCCLK;ADiMP;;AAzLA;EACE,WAAA;EACA,kBAAA;EACA,SAAA;AA4LF;;AAzLA;EACE,kBAAA;EACA,YAAA;EACA,iBAAA;EACA,UAAA;EACA,gCAAA;EACA,iCCpBK;EDqBL,2BAAA;AA4LF;AA3LE;EACE,YAAA;AA6LJ\",\"sourcesContent\":[\"@use \\\"_variables.scss\\\" as *;\\r\\n\\r\\n.info_content {\\r\\n  display: inline-block;\\r\\n  text-align: center;\\r\\n  position: relative;\\r\\n  top: 5px;\\r\\n  left: 50%;\\r\\n  transform: translate(-50%, -15%);\\r\\n}\\r\\n\\r\\n.info {\\r\\n  background: $body;\\r\\n  position: absolute;\\r\\n  width: 450px;\\r\\n  padding-left: 0px;\\r\\n  border-radius: 10px;\\r\\n  padding-top: 20px;\\r\\n  padding-bottom: 20px;\\r\\n  bottom: 10px;\\r\\n  right: 10px;\\r\\n  z-index: 50;\\r\\n}\\r\\n\",\"@use \\\"_variables.scss\\\" as *;\\r\\n@use \\\"info.scss\\\";\\r\\n@use \\\"chooser.scss\\\";\\r\\n@use \\\"error.scss\\\";\\r\\n@use \\\"game.scss\\\";\\r\\n\\r\\nbody {\\r\\n  user-select: none;\\r\\n  cursor: default;\\r\\n  background: $body;\\r\\n  font-family: $font;\\r\\n}\\r\\n\\r\\n.logo {\\r\\n  width: 50px;\\r\\n  position: relative;\\r\\n  left: 10%;\\r\\n}\\r\\n\\r\\n.notices {\\r\\n  position: absolute;\\r\\n  bottom: 10px;\\r\\n  margin-left: 10px;\\r\\n  z-index: 5;\\r\\n  color: rgba(255,255,255,0.25);\\r\\n  font-family: $font;\\r\\n  transition: color 0.5s ease;\\r\\n  &:hover {\\r\\n    color: rgba(255,255,255,1);\\r\\n  }\\r\\n}\\r\\n\",\"$body: #101010;\\r\\n$button-chooser: #121212;\\r\\n$error: #090909;\\r\\n$game: #161616;\\r\\n\\r\\n$font: \\\"Roboto\\\", sans-serif;\\r\\n\\r\\n$chooser-scale: scale(1.8);\",\"@use \\\"_variables.scss\\\" as *;\\r\\n\\r\\n%choose-image {\\r\\n  transform: $chooser-scale;\\r\\n  cursor: pointer;\\r\\n  transition: opacity 0.5s ease;\\r\\n  opacity: 0.5;\\r\\n  overflow: hidden;\\r\\n  width: 100px;\\r\\n  height: 100px;\\r\\n  z-index: 500;\\r\\n  background-size: cover !important;\\r\\n  display: inline-block;\\r\\n}\\r\\n\\r\\n.avatar-choose {\\r\\n  background: $button-chooser;\\r\\n  height: 100px;\\r\\n  border-radius: 10px;\\r\\n  margin-top: 1%;\\r\\n  overflow: hidden;\\r\\n}\\r\\n\\r\\n.avatar-select {\\r\\n  display: grid;\\r\\n  grid-template-columns: auto auto auto auto auto;\\r\\n  grid-row: 1;\\r\\n  height: 100px;\\r\\n  width: fit-content;\\r\\n  position: absolute;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n  justify-items: stretch;\\r\\n  align-content: space-between;\\r\\n  align-self: center;\\r\\n  margin-left: auto;\\r\\n  margin-right: auto;\\r\\n  position: absolute;\\r\\n  left: 50%;\\r\\n  transform: translate(-50%);\\r\\n}\\r\\n\\r\\n.selected {\\r\\n  opacity: 1;\\r\\n}\\r\\n\\r\\n@for $i from 1 through 12 {\\r\\n  .choose-image-#{$i} {\\r\\n    @extend %choose-image;\\r\\n    background: url(\\\"./avatars/Avatar#{$i}.png\\\");\\r\\n  }\\r\\n}\\r\\n\",\"@use \\\"_variables.scss\\\" as *;\\r\\n\\r\\n.title {\\r\\n  color: white;\\r\\n  font-family: $font;\\r\\n  text-align: center;\\r\\n  font-size: 1.5em;\\r\\n  margin-top: 5%;\\r\\n}\\r\\n\\r\\n.error {\\r\\n  position: absolute;\\r\\n  top: 50%;\\r\\n  left: 50%;\\r\\n  width: 30%;\\r\\n  height: 25%;\\r\\n  background: $error;\\r\\n  border-radius: 15px;\\r\\n  cursor: default;\\r\\n  z-index: 50;\\r\\n  transform: translate(-50%, -50%);\\r\\n  display: none;\\r\\n}\\r\\n\\r\\n.button {\\r\\n  font-family: \\\"Roboto\\\", sans-serif;\\r\\n  font-size: 1.25em;\\r\\n  color: white;\\r\\n  background: $button-chooser;\\r\\n  width: 80%;\\r\\n  cursor: pointer;\\r\\n  margin-left: auto;\\r\\n  margin-right: auto;\\r\\n  padding-top: 1%;\\r\\n  border-radius: 10px;\\r\\n  padding-bottom: 1%;\\r\\n  margin-top: 3%;\\r\\n  text-align: center;\\r\\n}\\r\\n\\r\\n.description {\\r\\n  color: white;\\r\\n  font-family: $font;\\r\\n  padding-left: 10%;\\r\\n  padding-right: 10%;\\r\\n  text-align: center;\\r\\n  margin-top: 5%;\\r\\n}\\r\\n\",\"@use \\\"_variables.scss\\\" as *;\\r\\n\\r\\n.player {\\r\\n  user-select: none;\\r\\n  transition: top 0.5s ease-out, left 0.5s ease-out;\\r\\n  animation-fill-mode: forwards;\\r\\n  background: none;\\r\\n  position: absolute;\\r\\n  top: 0;\\r\\n  left: 0;\\r\\n}\\r\\n\\r\\n.playerimage {\\r\\n  width: 200px;\\r\\n  height: 200px;\\r\\n}\\r\\n\\r\\n.me {\\r\\n  z-index: 1;\\r\\n}\\r\\n\\r\\n#game {\\r\\n  height: 100%;\\r\\n  position: absolute;\\r\\n  top: 0;\\r\\n  left: 0;\\r\\n  background: $game;\\r\\n  width: 100%;\\r\\n  overflow: hidden;\\r\\n  color: white;\\r\\n  transition: filter 0.5s linear;\\r\\n  z-index: -1;\\r\\n}\\r\\n\"],\"sourceRoot\":\"\"}]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://anolet/./src/scss/main.scss?./node_modules/css-loader/dist/cjs.js??ruleSet%5B1%5D.rules%5B0%5D.use%5B1%5D!./node_modules/sass-loader/dist/cjs.js??ruleSet%5B1%5D.rules%5B0%5D.use%5B2%5D");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://anolet/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (item) {\n  var content = item[1];\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (typeof btoa === \"function\") {\n    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));\n    var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n    var sourceMapping = \"/*# \".concat(data, \" */\");\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot || \"\").concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join(\"\\n\");\n  }\n\n  return [content].join(\"\\n\");\n};\n\n//# sourceURL=webpack://anolet/./node_modules/css-loader/dist/runtime/sourceMaps.js?");

/***/ }),

/***/ "./src/scss/main.scss":
/*!****************************!*\
  !*** ./src/scss/main.scss ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_main_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].use[1]!../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./main.scss */ \"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].use[1]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./src/scss/main.scss\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_main_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_main_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_main_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_main_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://anolet/./src/scss/main.scss?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://anolet/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://anolet/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://anolet/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://anolet/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://anolet/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://anolet/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/js/animation/changeAvatar.js":
/*!******************************************!*\
  !*** ./src/js/animation/changeAvatar.js ***!
  \******************************************/
/***/ ((module) => {

eval("module.exports = function (avatar) {\r\n    document.getElementsByClassName(\"choose-image-\" + avatar)[0].animate(\r\n        [{ transform: 'scale(1.8)' }, { transform: \"scale(2.2   )\" }, { transform: \"scale(1.8)\" }], {\r\n        duration: 300,\r\n        ease: \"ease\"\r\n    });\r\n\r\n    Array.prototype.forEach.call(document.getElementById(\"chooser\").children, function (avatar) {\r\n        // Remove selected class from previous avatar\r\n        // This is not efficient in any way whatsoever. I know how to do it better, but hey, it works.\r\n        avatar.classList.remove(\"selected\");\r\n    });\r\n    document.getElementsByClassName(\"choose-image-\" + avatar)[0].classList.add(\"selected\");\r\n}\n\n//# sourceURL=webpack://anolet/./src/js/animation/changeAvatar.js?");

/***/ }),

/***/ "./src/js/animation/logo.js":
/*!**********************************!*\
  !*** ./src/js/animation/logo.js ***!
  \**********************************/
/***/ (() => {

eval("const logo = document.getElementById(\"logo\");\r\n\r\nlogo.addEventListener(\"click\", function () {\r\n    logo.animate([{ transform: 'rotate(360deg)' }], {\r\n        duration: 800,\r\n        ease: \"ease-in-out\"\r\n    });\r\n});\n\n//# sourceURL=webpack://anolet/./src/js/animation/logo.js?");

/***/ }),

/***/ "./src/js/events/avatar.js":
/*!*********************************!*\
  !*** ./src/js/events/avatar.js ***!
  \*********************************/
/***/ ((module) => {

eval("module.exports = function(msg) {\r\n    document.getElementById(\"player-\" + msg.plrid).firstElementChild.src = msg.avatar;\r\n}\n\n//# sourceURL=webpack://anolet/./src/js/events/avatar.js?");

/***/ }),

/***/ "./src/js/events/exit.js":
/*!*******************************!*\
  !*** ./src/js/events/exit.js ***!
  \*******************************/
/***/ ((module) => {

eval("module.exports = function(msg) {\r\n    document.getElementById(\"player-\" + msg.plrid).remove();\r\n}\n\n//# sourceURL=webpack://anolet/./src/js/events/exit.js?");

/***/ }),

/***/ "./src/js/events/init.js":
/*!*******************************!*\
  !*** ./src/js/events/init.js ***!
  \*******************************/
/***/ ((module) => {

eval("function percentage(partialValue, totalValue) {\r\n    return (100 * partialValue) / totalValue;\r\n};\r\n\r\nmodule.exports = function (msg) {\r\n    msg.players.forEach(player => {\r\n        var plr = document.createElement(\"div\");\r\n        plr.className = \"player\";\r\n        plr.id = \"player-\" + player.id;\r\n        plr.innerHTML = `<img src=\"${player.avatar}\" class=\"playerimage\">`;\r\n        plr.style.top = \"calc(\" + player.y.toString() + \"%\" + \" - 100px)\";\r\n        plr.style.left = \"calc(\" + player.x.toString() + \"%\" + \" - 100px)\";\r\n        document.getElementById(\"game\").appendChild(plr);\r\n    });\r\n}\n\n//# sourceURL=webpack://anolet/./src/js/events/init.js?");

/***/ }),

/***/ "./src/js/events/newplr.js":
/*!*********************************!*\
  !*** ./src/js/events/newplr.js ***!
  \*********************************/
/***/ ((module) => {

eval("module.exports = function (msg, plrid) {\r\n    var nplr = document.createElement(\"div\");\r\n    nplr.className = \"player\";\r\n    nplr.id = \"player-\" + msg.plrid;\r\n    nplr.innerHTML = `<img src=\"${msg.avatar}\" class=\"playerimage\">`;\r\n    if (msg.plrid == plrid) {\r\n        nplr.classList.add(\"me\");\r\n        document.getElementsByClassName(\"choose-image-\" + msg.avatar_id)[0].classList.add(\"selected\");\r\n    }\r\n    document.getElementById(\"game\").appendChild(nplr);\r\n    console.log(msg.avatar_id);\r\n}\r\n\n\n//# sourceURL=webpack://anolet/./src/js/events/newplr.js?");

/***/ }),

/***/ "./src/js/events/posupdate.js":
/*!************************************!*\
  !*** ./src/js/events/posupdate.js ***!
  \************************************/
/***/ ((module) => {

eval("function percentage(partialValue, totalValue) {\r\n    return (100 * partialValue) / totalValue;\r\n};\r\n\r\nmodule.exports = function (msg) {\r\n    document.getElementById(\"player-\" + msg.id).style.top = \"calc(\" + msg.y.toString() + \"%\" + \" - 100px)\";\r\n    document.getElementById(\"player-\" + msg.id).style.left = \"calc(\" + msg.x.toString() + \"%\" + \" - 100px)\";\r\n};\n\n//# sourceURL=webpack://anolet/./src/js/events/posupdate.js?");

/***/ }),

/***/ "./src/js/events sync recursive ^\\.\\/.*$":
/*!**************************************!*\
  !*** ./src/js/events/ sync ^\.\/.*$ ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var map = {\n\t\"./avatar\": \"./src/js/events/avatar.js\",\n\t\"./avatar.js\": \"./src/js/events/avatar.js\",\n\t\"./exit\": \"./src/js/events/exit.js\",\n\t\"./exit.js\": \"./src/js/events/exit.js\",\n\t\"./init\": \"./src/js/events/init.js\",\n\t\"./init.js\": \"./src/js/events/init.js\",\n\t\"./newplr\": \"./src/js/events/newplr.js\",\n\t\"./newplr.js\": \"./src/js/events/newplr.js\",\n\t\"./posupdate\": \"./src/js/events/posupdate.js\",\n\t\"./posupdate.js\": \"./src/js/events/posupdate.js\"\n};\n\n\nfunction webpackContext(req) {\n\tvar id = webpackContextResolve(req);\n\treturn __webpack_require__(id);\n}\nfunction webpackContextResolve(req) {\n\tif(!__webpack_require__.o(map, req)) {\n\t\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\t\te.code = 'MODULE_NOT_FOUND';\n\t\tthrow e;\n\t}\n\treturn map[req];\n}\nwebpackContext.keys = function webpackContextKeys() {\n\treturn Object.keys(map);\n};\nwebpackContext.resolve = webpackContextResolve;\nmodule.exports = webpackContext;\nwebpackContext.id = \"./src/js/events sync recursive ^\\\\.\\\\/.*$\";\n\n//# sourceURL=webpack://anolet/./src/js/events/_sync_^\\.\\/.*$?");

/***/ }),

/***/ "./src/js/game.js":
/*!************************!*\
  !*** ./src/js/game.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _websocket__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./websocket */ \"./src/js/websocket.js\");\n/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../scss/main.scss */ \"./src/scss/main.scss\");\n/* harmony import */ var _animation_logo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./animation/logo */ \"./src/js/animation/logo.js\");\n/* harmony import */ var _animation_logo__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_animation_logo__WEBPACK_IMPORTED_MODULE_2__);\n // Import our websocket handler\r\n // Import SCSS\r\n // Import animation for the logo\r\n\r\nfunction percentage(partialValue, totalValue) {\r\n    return (100 * partialValue) / totalValue;\r\n };\r\n\r\n\r\n(0,_websocket__WEBPACK_IMPORTED_MODULE_0__.start)().then(wsresp => {\r\n    var ws = wsresp;\r\n\r\n    // Ran by MouseClick Event\r\n    function moved(event) {\r\n        ws.ws.send(JSON.stringify({\r\n            type: \"pos\",\r\n            x:  percentage(event.clientX, window.innerWidth),\r\n            y: percentage(event.clientY, window.innerHeight)\r\n        }));\r\n    }\r\n\r\n    // Ran when character is selected\r\n    function avatar(id) {\r\n        __webpack_require__(/*! ./animation/changeAvatar */ \"./src/js/animation/changeAvatar.js\")(id);\r\n        ws.ws.send(JSON.stringify({\r\n            type: \"setavatar\",\r\n            avatar: id\r\n        }));\r\n    };\r\n    window.avatar = avatar; // Make it available to the frontend or else webpack will change the name\r\n\r\n    // Assign the move event to when the mouse is clicked\r\n    document.getElementById(\"game\").addEventListener(\"click\", moved);\r\n\r\n    console.log(ws)\r\n\r\n});\n\n//# sourceURL=webpack://anolet/./src/js/game.js?");

/***/ }),

/***/ "./src/js/websocket.js":
/*!*****************************!*\
  !*** ./src/js/websocket.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"start\": () => (/* binding */ start)\n/* harmony export */ });\nvar wsurl = \"\";\r\nvar plrid;\r\nvar players = 0;\r\n\r\n\r\nfunction updateCount(amount) {\r\n    players = players + amount;\r\n   // document.getElementById(\"players\").innerHTML = players + \" players\";\r\n}\r\n\r\nfunction start () {\r\n   return new Promise((resolve, reject) => {\r\n\r\n        // Determine WS URL based off of environment and connect\r\n        if (window.location.host == \"anolet.herokuapp.com\") { wsurl = \"wss://anolet.herokuapp.com/ws\" } else { wsurl = \"ws://192.168.0.36/ws\" }\r\n        var ws = new WebSocket(wsurl);\r\n        \r\n        // Notify the user if the connection is closed\r\n        ws.onclose = function (e) {\r\n            document.getElementById(\"interactive-wrapper\").style.filter = \"blur(5px)\";\r\n            document.getElementById(\"error\").style.display = \"block\";\r\n        };\r\n        \r\n        // Process the messages received by server and act accordingly\r\n        ws.onmessage = function (event) {\r\n            var msg = JSON.parse(event.data);\r\n\r\n            __webpack_require__(\"./src/js/events sync recursive ^\\\\.\\\\/.*$\")(\"./\" + msg.type)(msg, plrid);\r\n            if (msg.type == \"init\") {\r\n                var plrid = msg.myid;\r\n                updateCount(msg.players.length);\r\n                resolve({ ws, plrid });\r\n            } else if (msg.type == \"newplr\") {\r\n                updateCount(1);\r\n            } else if (msg.type == \"exit\") {\r\n                updateCount(-1);\r\n            };\r\n        }\r\n        \r\n        ws.onerror = function (e) {\r\n            document.getElementById(\"tit\").innerHTML = \"Unable to connect to server\";\r\n            document.getElementById(\"desc\").innerHTML = \"The client was unable to initiate a connection to the Websocket server.\";\r\n            document.getElementById(\"interactive-wrapper\").style.filter = \"blur(5px)\";\r\n            document.getElementById(\"error\").style.display = \"block\";\r\n        }\r\n        \r\n        // Close the socket connection when the browser is closed so the user is instantly removed from the game.\r\n        window.onbeforeunload = function (evt) {\r\n            evt.preventDefault();\r\n            ws.close();\r\n            return null;\r\n        };\r\n        \r\n    });\r\n    \r\n}\r\n\n\n//# sourceURL=webpack://anolet/./src/js/websocket.js?");

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
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
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
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/game.js");
/******/ 	
/******/ })()
;