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

/***/ "./assets/js/tickets.js":
/*!******************************!*\
  !*** ./assets/js/tickets.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("__webpack_require__(Object(function webpackMissingModule() { var e = new Error(\"Cannot find module 'bootstrap'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));\r\n\r\nif (window.location.href.indexOf(\"tickets\") > -1) {\r\n\r\n  const purchaseBtn = document.getElementById(\"purchaseBtn\");\r\n  const purchaseEmail = document.getElementById(\"purchaseEmail\");\r\n  const modalEl = document.querySelector(\".modal-content\");\r\n  const modalBodyEl = document.querySelector(\".modal-body\");\r\n  const modalFooterEl = document.querySelector(\".modal-footer\");\r\n\r\n\r\n  function purchaseTicket () {\r\n\r\n    modalEl.removeChild(modalBodyEl)\r\n    modalEl.removeChild(modalFooterEl)\r\n\r\n    modalEl.append(createEl(\"div\", {class: \"modal-body\"},\r\n      createEl(\"h5\", {class: \"modal-title\"}, \r\n      `Thanks for requesting a ticket purchase! We will send an email to ${purchaseEmail.value} to complete the order form!`\r\n      ),\r\n    ))\r\n    \r\n  }\r\n  purchaseBtn.addEventListener(\"click\", purchaseTicket);\r\n}\n\n//# sourceURL=webpack://food-festival/./assets/js/tickets.js?");

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
/******/ 			// no module.id needed
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./assets/js/tickets.js");
/******/ 	
/******/ })()
;