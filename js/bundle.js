/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss ***!
  \***********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".keyboard-wrapper {\\n  max-width: 600px;\\n  margin: 0 auto;\\n  display: flex;\\n  flex-wrap: wrap;\\n  flex-direction: column;\\n  gap: 5px;\\n}\\n\\n.area-input {\\n  width: 600px;\\n  min-height: 200px;\\n  padding: 0;\\n  resize: none;\\n  margin: 20px auto 10px;\\n  display: block;\\n}\\n\\n.keyboard-line {\\n  display: flex;\\n  flex-direction: row;\\n  gap: 8px;\\n  max-height: 40px;\\n}\\n\\n.key {\\n  min-width: 20px;\\n  cursor: pointer;\\n  text-align: center;\\n  border: 1px solid #000;\\n  height: 20px;\\n  padding: 5px;\\n  box-shadow: 4.1px 3.1px 3.1px #7bcdfa;\\n  font-family: Arial;\\n  font-size: 14px;\\n  user-select: none;\\n}\\n.key.highlight {\\n  transition: all 1s;\\n  background: #7bcdfa;\\n  box-shadow: 0 0 0;\\n}\\n\\n.keyboard-line1 .key:nth-child(1) {\\n  width: 48px;\\n}\\n\\n.keyboard-line2 .key:nth-child(13) {\\n  width: 66px;\\n}\\n\\n.keyboard-line3 .key:nth-child(1) {\\n  width: 64px;\\n}\\n.keyboard-line3 .key:nth-child(13) {\\n  width: 64px;\\n}\\n\\n.keyboard-line4 .key:nth-child(4) {\\n  width: 260px;\\n}\\n\\n.hint {\\n  text-align: center;\\n  font-weight: bold;\\n  margin: 20px 0 0 0;\\n  font-family: sans-serif;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://virtual-keyboard/./src/styles/main.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://virtual-keyboard/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://virtual-keyboard/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles/main.scss":
/*!******************************!*\
  !*** ./src/styles/main.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./main.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://virtual-keyboard/./src/styles/main.scss?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://virtual-keyboard/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://virtual-keyboard/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://virtual-keyboard/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://virtual-keyboard/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://virtual-keyboard/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://virtual-keyboard/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/main.scss */ \"./src/styles/main.scss\");\n/* harmony import */ var _keyboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./keyboard */ \"./src/js/keyboard.js\");\n/* harmony import */ var _keydoard_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./keydoard-data */ \"./src/js/keydoard-data.js\");\n\r\n\r\n\r\n\r\nconst body = document.querySelector('body');\r\n\r\nconst keyboard = new _keyboard__WEBPACK_IMPORTED_MODULE_1__[\"default\"](_keydoard_data__WEBPACK_IMPORTED_MODULE_2__[\"default\"], body);\r\n\r\nlet lang = keyboard.getItemStorage('lang');\r\nlet keyCase = keyboard.getItemStorage('keyCase');\r\n\r\nif (!lang) {\r\n  lang = 'ENG';\r\n  keyboard.setItemStorage('lang', lang);\r\n}\r\n\r\nif (!keyCase) {\r\n  keyCase = 'lower';\r\n  keyboard.setItemStorage('keyCase', keyCase);\r\n}\r\n\r\nkeyboard.createKeyboard(lang, keyCase);\r\n\r\nconst textArea = document.querySelector('.area-input');\r\n\r\nlet pointerElement = document.querySelector('.keyboard-wrapper');\r\n\r\nconst printKey = (e, method = 'keyboard') => {\r\n  const allKeys = document.querySelectorAll('.key');\r\n\r\n  if (method === 'keyboard') {\r\n    e.preventDefault();\r\n  }\r\n\r\n  if (e.code === 'CapsLock') {\r\n    \r\n    if (keyCase === 'lower') {\r\n      keyCase = 'upper';\r\n      keyboard.createKeyboard(lang, keyCase);\r\n      keyboard.setItemStorage('keyCase', keyCase);\r\n    } else if (keyCase === 'upper') {\r\n      keyCase = 'lower';\r\n      keyboard.createKeyboard(lang, keyCase);\r\n      keyboard.setItemStorage('keyCase', keyCase);\r\n    }\r\n    document.querySelector('.capslock').classList.add('highlight');\r\n  } else \r\n  if (e.code === 'Delete') {\r\n    document.querySelector('.delete').classList.add('highlight');\r\n    textArea.value = textArea.value.slice(textArea.value[0], textArea.selectionStart) + textArea.value.slice(textArea.selectionEnd + 1, textArea.length);\r\n  } else \r\n  if (e.code === 'Backspace') {\r\n    document.querySelector('.backspace').classList.add('highlight');\r\n    textArea.value = textArea.value.slice(textArea.value[0], textArea.selectionEnd - 1) + textArea.value.slice(textArea.selectionEnd, textArea.length);\r\n  } else \r\n  if (e.code === 'Tab') {\r\n    document.querySelector('.tab').classList.add('highlight');\r\n    textArea.value += '    ';\r\n  } else \r\n  if (e.code === 'ShiftLeft') {\r\n    if (!e.repeat) {\r\n      if (keyCase === 'lower') {\r\n        keyCase = 'upper';\r\n        keyboard.createKeyboard(lang, keyCase);\r\n        keyboard.setItemStorage('keyCase', keyCase);\r\n      } else if (keyCase === 'upper') {\r\n        keyCase = 'lower';\r\n        keyboard.createKeyboard(lang, keyCase);\r\n        keyboard.setItemStorage('keyCase', keyCase);\r\n      }\r\n      document.querySelector('.shift-left').classList.add('highlight');\r\n    }\r\n  } else \r\n  if (e.code === 'ShiftRight') {\r\n    if (!e.repeat) {\r\n      if (keyCase === 'lower') {\r\n        keyCase = 'upper';\r\n        keyboard.createKeyboard(lang, keyCase);\r\n        keyboard.setItemStorage('keyCase', keyCase);\r\n      } else if (keyCase === 'upper') {\r\n        keyCase = 'lower';\r\n        keyboard.createKeyboard(lang, keyCase);\r\n        keyboard.setItemStorage('keyCase', keyCase);\r\n      }\r\n      document.querySelector('.shift-right').classList.add('highlight');\r\n    }\r\n  } else \r\n  if (e.code === 'AltLeft') {\r\n    document.querySelector('.alt-left').classList.add('highlight');\r\n  } else \r\n  if (e.code === 'AltRight') {\r\n    document.querySelector('.alt-right').classList.add('highlight');\r\n  } else \r\n  if (e.code === 'ControlLeft') {\r\n    document.querySelector('.ctrl-left').classList.add('highlight');\r\n  } else \r\n  if (e.code === 'ControlRight') {\r\n    document.querySelector('.ctrl-right').classList.add('highlight');\r\n  } else \r\n  if (e.code === 'Space') {\r\n    document.querySelector('.space').classList.add('highlight');\r\n    textArea.value += ' ';\r\n  } else \r\n  if (e.code === 'MetaLeft') {\r\n    document.querySelector('.win').classList.add('highlight');\r\n  } else\r\n  if (e.code === 'Enter') {\r\n    document.querySelector('.enter').classList.add('highlight');\r\n    textArea.value += '\\n';\r\n  } else\r\n  if (e.code === 'ArrowUp') {\r\n    document.querySelector('.arrow-top').classList.add('highlight');\r\n    textArea.value += '↑';\r\n  } else\r\n  if (e.code === 'ArrowLeft') {\r\n    document.querySelector('.arrow-left').classList.add('highlight');\r\n    textArea.value += '←';\r\n  } else\r\n  if (e.code === 'ArrowDown') {\r\n    document.querySelector('.arrow-bottom').classList.add('highlight');\r\n    textArea.value += '↓';\r\n  } else\r\n  if (e.code === 'ArrowRight') {\r\n    document.querySelector('.arrow-right').classList.add('highlight');\r\n    textArea.value += '→';\r\n  } else {\r\n    allKeys.forEach(el => {\r\n      if (el.getAttribute('data-code') === e.code) {\r\n        textArea.value += el.textContent;\r\n        el.classList.add('highlight');\r\n      }\r\n    });\r\n  }\r\n\r\n  if (e.altKey && e.shiftKey) {\r\n    if (lang === 'ENG') {\r\n      lang = 'RU';\r\n      keyboard.createKeyboard(lang, keyCase);\r\n      keyboard.setItemStorage('lang', lang);\r\n    } else if (lang === 'RU') {\r\n      lang = 'ENG';\r\n      keyboard.createKeyboard(lang, keyCase);\r\n      keyboard.setItemStorage('lang', lang);\r\n    }\r\n  }\r\n}\r\n\r\nbody.addEventListener('pointerdown', (e) => {\r\n  if (e.target.closest('.key')) {\r\n    pointerElement = e.target;\r\n    pointerElement.classList.add('highlight');\r\n    \r\n    if (pointerElement.classList.contains('backspace')) {\r\n      pointerElement.code = 'Backspace';\r\n      printKey(pointerElement , 'pointer');\r\n    } else\r\n    if (pointerElement.classList.contains('tab')) {\r\n      pointerElement.code = 'Tab';\r\n      printKey(pointerElement , 'pointer');\r\n    } else\r\n    if (pointerElement.classList.contains('delete')) {\r\n      pointerElement.code = 'Delete';\r\n      printKey(pointerElement , 'pointer');\r\n    } else\r\n    if (pointerElement.classList.contains('capslock')) {\r\n      pointerElement.code = 'CapsLock';\r\n      printKey(pointerElement , 'pointer');\r\n    } else\r\n    if (pointerElement.classList.contains('enter')) {\r\n      pointerElement.code = 'Enter';\r\n      printKey(pointerElement , 'pointer');\r\n    } else\r\n    if (pointerElement.classList.contains('shift-left')) {\r\n      pointerElement.code = 'ShiftLeft';\r\n      printKey(pointerElement , 'pointer');\r\n    } else\r\n    if (pointerElement.classList.contains('shift-right')) {\r\n      pointerElement.code = 'ShiftRight';\r\n      printKey(pointerElement , 'pointer');\r\n    } else\r\n    if (pointerElement.classList.contains('ctrl-left')) {\r\n      pointerElement.code = 'ControlLeft';\r\n      printKey(pointerElement , 'pointer');\r\n    } else\r\n    if (pointerElement.classList.contains('ctrl-right')) {\r\n      pointerElement.code = 'ControlRight';\r\n      printKey(pointerElement , 'pointer');\r\n    } else\r\n    if (pointerElement.classList.contains('win')) {\r\n      pointerElement.code = 'MetaLeft';\r\n      printKey(pointerElement , 'pointer');\r\n    } else\r\n    if (pointerElement.classList.contains('alt-left')) {\r\n      pointerElement.code = 'AltLeft';\r\n      printKey(pointerElement , 'pointer');\r\n    } else\r\n    if (pointerElement.classList.contains('alt-right')) {\r\n      pointerElement.code = 'AltRight';\r\n      printKey(pointerElement , 'pointer');\r\n    } else\r\n    if (pointerElement.textContent === 'Space') {\r\n      pointerElement.code = 'Space';\r\n      printKey(pointerElement , 'pointer');\r\n    } else {\r\n      textArea.value += pointerElement.textContent;\r\n    }\r\n  }\r\n});\r\n\r\nbody.addEventListener('keydown', printKey);\r\n\r\nbody.addEventListener('pointerup', (e) => {\r\n  if (e.target.closest('.shift-left') || e.target.closest('.shift-right')) {\r\n    if (keyCase === 'lower') {\r\n      keyCase = 'upper';\r\n      keyboard.createKeyboard(lang, keyCase);\r\n      keyboard.setItemStorage('keyCase', keyCase);\r\n    } else if (keyCase === 'upper') {\r\n      keyCase = 'lower';\r\n      keyboard.createKeyboard(lang, keyCase);\r\n      keyboard.setItemStorage('keyCase', keyCase);\r\n    }\r\n  }\r\n\r\n  if (pointerElement.classList.contains('highlight')) {\r\n    pointerElement.classList.remove('highlight');\r\n  }\r\n});\r\n\r\nbody.addEventListener('keyup', (e) => {\r\n  if (e.code === 'ShiftLeft' || e.code === 'ShiftRight') {\r\n    if (keyCase === 'lower') {\r\n      keyCase = 'upper';\r\n      keyboard.createKeyboard(lang, keyCase);\r\n      keyboard.setItemStorage('keyCase', keyCase);\r\n    } else if (keyCase === 'upper') {\r\n      keyCase = 'lower';\r\n      keyboard.createKeyboard(lang, keyCase);\r\n      keyboard.setItemStorage('keyCase', keyCase);\r\n    }\r\n  }\r\n  const allKeys = document.querySelectorAll('.key');\r\n  allKeys.forEach(el => {\r\n    if (el.classList.contains('highlight') && el.classList.contains('shift-left') === false) {\r\n      el.classList.remove('highlight');\r\n    }\r\n  });\r\n})\n\n//# sourceURL=webpack://virtual-keyboard/./src/js/index.js?");

/***/ }),

/***/ "./src/js/keyboard.js":
/*!****************************!*\
  !*** ./src/js/keyboard.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Keyboard {\r\n  constructor(keyboardKeys, body) {\r\n    this.body = body;\r\n    this.keyboardKeys = keyboardKeys;\r\n  }\r\n\r\n  createKeyboard(lang, keyCase) {\r\n    const wrapper = document.querySelector('.keyboard-wrapper');\r\n    const keyboardWrapper = document.createElement('div');\r\n    keyboardWrapper.className = 'keyboard-wrapper';\r\n\r\n    if (wrapper === null) {\r\n      const textarea = document.createElement('textarea');\r\n      textarea.className = 'area-input';\r\n      this.body.append(textarea);\r\n      const hint = '<div class=\"hint\">To switch language - use <em>Left Alt + Left Shift</em><br/> Keyboard was created for Windows</div>';\r\n      this.body.insertAdjacentHTML('afterbegin', hint);\r\n    } else {\r\n      this.body.removeChild(wrapper);\r\n    }\r\n\r\n      for(let i = 0; i < this.keyboardKeys.length; i+= 1) {\r\n        const keyboardLine = document.createElement('div');\r\n        keyboardLine.classList.add(`keyboard-line`);\r\n        keyboardLine.classList.add(`keyboard-line${i}`);\r\n\r\n        for (let j = 0; j < this.keyboardKeys[i].length; j+= 1) {\r\n          const button = document.createElement('div');\r\n          button.classList.add('key');\r\n\r\n          if (lang === 'ENG' && keyCase === 'lower') {\r\n            const key = this.keyboardKeys[i][j][0];\r\n            button.innerHTML = key;\r\n          } else if (lang === 'ENG' && keyCase === 'upper') {\r\n            const key = this.keyboardKeys[i][j][1];\r\n            button.innerHTML = key;\r\n          } else if (lang === 'RU' && keyCase === 'lower') {\r\n            const key = this.keyboardKeys[i][j][2];\r\n            button.innerHTML = key;\r\n          } else if (lang === 'RU' && keyCase === 'upper') {\r\n            const key = this.keyboardKeys[i][j][3];\r\n            button.innerHTML = key;\r\n          }\r\n\r\n          const key = this.keyboardKeys[i][j][4];\r\n\r\n          if (this.keyboardKeys[i][j][0] === 'Alt' || this.keyboardKeys[i][j][0] === 'Shift' || this.keyboardKeys[i][j][0] === 'Ctrl' || this.keyboardKeys[i][j][0] === '↑' || this.keyboardKeys[i][j][0] === '←' || this.keyboardKeys[i][j][0] === '↓' || this.keyboardKeys[i][j][0] === '→' || this.keyboardKeys[i][j][0] === ' ' || this.keyboardKeys[i][j][0] === 'Win' || this.keyboardKeys[i][j][0] === 'Backspace' || this.keyboardKeys[i][j][0] === 'Delete' || this.keyboardKeys[i][j][0] === 'CapsLock' || this.keyboardKeys[i][j][0] === 'Enter' || this.keyboardKeys[i][j][0] === 'Tab') {\r\n            button.classList.add(key);\r\n          } else {\r\n            button.dataset.code = key;\r\n          }\r\n\r\n          keyboardLine.append(button);\r\n        }\r\n        keyboardWrapper.append(keyboardLine);\r\n      }\r\n\r\n    this.body.append(keyboardWrapper);\r\n\r\n  }\r\n\r\n  setItemStorage(name, value) {\r\n    localStorage.setItem(name, value);\r\n  }\r\n\r\n  getItemStorage(name) {\r\n    return localStorage.getItem(name);\r\n  }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Keyboard);\n\n//# sourceURL=webpack://virtual-keyboard/./src/js/keyboard.js?");

/***/ }),

/***/ "./src/js/keydoard-data.js":
/*!*********************************!*\
  !*** ./src/js/keydoard-data.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst keyboardKeys = [\r\n  [\r\n    ['`', '~', 'ё', 'Ё', 'Backquote'], ['1', '!', '1', '!', 'Digit1'], ['2', '@', '2', '\"', 'Digit2'], ['3', '#', '3', '№', 'Digit3'], ['4', '$', '4', ';', 'Digit4'], ['5', '%', '5', '%', 'Digit5'], ['6', '^', '6', ':', 'Digit6'], ['7', '&', '7', '?', 'Digit7'], ['8', '*', '8', '*', 'Digit8'], ['9', '(', '9', '(', 'Digit9'], ['0', ')', '0', ')', 'Digit0'], ['-', '_', '-', '_', 'Minus'], ['=', '+', '=', '+', 'Equal'], ['Backspace', 'Backspace', 'Backspace', 'Backspace', 'backspace']\r\n  ], \r\n  [\r\n    ['Tab', 'Tab', 'Tab', 'Tab', 'tab'], ['q', 'Q', 'й', 'Й', 'KeyQ'], ['w', 'W', 'ц', 'Ц', 'KeyW'], ['e', 'E', 'у', 'У', 'KeyE'], ['r', 'R', 'к', 'К', 'KeyR'], ['t', 'T', 'е', 'Е', 'KeyT'], ['y', 'Y', 'н', 'Н', 'KeyY'], ['u', 'U', 'г', 'Г', 'KeyU'], ['i', 'I', 'ш', 'Ш', 'KeyI'], ['o', 'O', 'щ', 'Щ', 'KeyO'], ['p', 'P', 'з', 'З', 'KeyP'], ['[', '{', 'х', 'Х', 'BracketLeft'], [']', '}', 'ъ', 'Ъ', 'BracketRight'], ['Delete', 'Delete', 'Delete', 'Delete', 'delete']\r\n  ], \r\n  [\r\n    ['CapsLock', 'CapsLock', 'CapsLock', 'CapsLock', 'capslock'], ['a', 'A', 'ф', 'Ф', 'KeyA'], ['s', 'S', 'ы', 'Ы', 'KeyS'], ['d', 'D', 'в', 'В', 'KeyD'], ['f', 'F', 'а', 'А', 'KeyF'], ['g', 'G', 'п', 'П', 'KeyG'], ['h', 'H', 'р', 'Р', 'KeyH'], ['j', 'J', 'о', 'О', 'KeyJ'], ['k', 'K', 'л', 'Л', 'KeyK'], ['l', 'L', 'д', 'Д', 'KeyL'], [';', ':', 'ж', 'Ж', 'Semicolon'], [\"'\", '\"', 'э', 'Э', 'Quote'], ['Enter', 'Enter', 'Enter', 'Enter', 'enter']\r\n  ],\r\n  [\r\n    ['Shift', 'Shift', 'Shift', 'Shift', 'shift-left'], ['z', 'Z', 'я', 'Я', 'KeyZ'], ['x', 'X', 'ч', 'Ч', 'KeyX'], ['c', 'C', 'с', 'С', 'KeyC'], ['v', 'V', 'м', 'М', 'KeyV'], ['b', 'B', 'и', 'И', 'KeyB'], ['n', 'N', 'т', 'Т', 'KeyN'], ['m', 'M', 'ь', 'Ь', 'KeyM'], [',', '<', 'б', 'Б', 'Comma'], ['.', '>', 'ю', 'Ю', 'Period'], ['/', '?', '.', ',', 'Slash'], ['↑', '↑', '↑', '↑', 'arrow-top'], ['Shift', 'Shift', 'Shift', 'Shift', 'shift-right']\r\n  ],\r\n  [\r\n    ['Ctrl', 'Ctrl', 'Ctrl', 'Ctrl', 'ctrl-left'], ['Win', 'Win', 'Win', 'Win', 'win'], ['Alt', 'Alt', 'Alt', 'Alt', 'alt-left'], [' ', ' ', ' ', ' ', 'space'], ['Alt', 'Alt', 'Alt', 'Alt', 'alt-right'], ['←', '←', '←', '←', 'arrow-left'], ['↓', '↓', '↓', '↓', 'arrow-bottom'], ['→', '→', '→', '→', 'arrow-right'], ['Ctrl', 'Ctrl', 'Ctrl', 'Ctrl', 'ctrl-right']\r\n  ]\r\n  ];\r\n\r\n  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (keyboardKeys);\n\n//# sourceURL=webpack://virtual-keyboard/./src/js/keydoard-data.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/index.js");
/******/ 	
/******/ })()
;