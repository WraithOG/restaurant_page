"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkrestaurant_page"] = self["webpackChunkrestaurant_page"] || []).push([["main"],{

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _page_load_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page-load.js */ \"./src/page-load.js\");\n\n\n(0,_page_load_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\n//# sourceURL=webpack://restaurant_page/./src/index.js?");

/***/ }),

/***/ "./src/page-load.js":
/*!**************************!*\
  !*** ./src/page-load.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ loadPage)\n/* harmony export */ });\nfunction loadPage() {\n    //declaring content variable\n    const content = document.getElementById(\"content\");\n    //Declaring header variables\n    const header = document.createElement(\"div\");\n    header.className = \"header\";\n    const header_text = document.createElement(\"div\");\n    header_text.id = \"header-text\";\n    header_text.innerHTML = \"The Bakery\";\n    const navbar = document.createElement(\"nav\");\n    navbar.id = \"navbar\";\n    //buttons\n    const button1 = document.createElement(\"button\");\n    button1.className = \"btn btn-rect-to-round btn-rect-to-round--red\";\n    button1.innerHTML = \"Home\";\n    const button2 = document.createElement(\"button\");\n    button2.className = \"btn btn-rect-to-round btn-rect-to-round--red\";\n    button2.innerHTML = \"Menu\";\n    const button3 = document.createElement(\"button\");\n    button3.className = \"btn btn-rect-to-round btn-rect-to-round--red\";\n    button3.innerHTML = \"About\";\n    //appending children\n    navbar.appendChild(button1);\n    navbar.appendChild(button2);\n    navbar.appendChild(button3);\n    header.appendChild(header_text);\n    header.appendChild(navbar);\n    content.appendChild(header);\n    //body\n    //declaring body variables\n    const body = document.createElement(\"div\");\n    body.className = \"body\";\n    const body_text = document.createElement(\"div\");\n    body_text.className = \"body-text\";\n    body_text.innerHTML = \"<span id='home'>Home</span><br>Welcome to The Bakery! We make the most delicious treats in the entire world! Please feel free to browse our catalog, and let us know if anything peaks your interest!\"\n    const body_img_container = document.createElement(\"div\");\n    body_img_container.className = \"baker-img\";\n    const body_img = document.createElement(\"div\");\n    body_img.className = \"img\";\n    //append children\n    body_img_container.appendChild(body_img);\n    body_text.appendChild(body_img_container);\n    body.appendChild(body_text);\n    content.appendChild(body);\n    //footer\n    //declaring footer variables\n    const footer = document.createElement(\"div\");\n    footer.className = \"footer\";\n    const footer_text = document.createElement(\"div\");\n    footer_text.className = \"footer-text\";\n    footer_text.innerHTML = \"Made with love by Ethan Farber\";\n    //append children\n    footer.appendChild(footer_text);\n    content.appendChild(footer);\n}\n\n\n\n\n//# sourceURL=webpack://restaurant_page/./src/page-load.js?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);