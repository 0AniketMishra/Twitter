"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/getComments";
exports.ids = ["pages/api/getComments"];
exports.modules = {

/***/ "next-sanity":
/*!******************************!*\
  !*** external "next-sanity" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next-sanity");

/***/ }),

/***/ "(api)/./pages/api/getComments.ts":
/*!**********************************!*\
  !*** ./pages/api/getComments.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var next_sanity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-sanity */ \"next-sanity\");\n/* harmony import */ var next_sanity__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_sanity__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _sanity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../sanity */ \"(api)/./sanity.js\");\n\n\nconst commentQuery = next_sanity__WEBPACK_IMPORTED_MODULE_0__.groq`\r\n*[_type == \"comment\" && references(*[_type == 'tweet' && _id == $tweetId]._id)]\r\n{\r\n  _id,\r\n  ...\r\n } | order(_createdAt desc)\r\n`;\nasync function handler(req, res) {\n    const { tweetId  } = req.query;\n    const comments = await _sanity__WEBPACK_IMPORTED_MODULE_1__.sanityClient.fetch(commentQuery, {\n        tweetId\n    });\n    res.status(200).json(comments);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZ2V0Q29tbWVudHMudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNrQztBQUNVO0FBSTVDLE1BQU1FLFlBQVksR0FBR0YsNkNBQUksQ0FBQztBQVUxQixlQUFlLGVBQWVHLE9BQU8sQ0FDbkNDLEdBQW1CLEVBQ25CQyxHQUEwQixFQUN2Qjs7SUFHQTs7S0FFQyxDQUFDOztBQUVOIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvYXBpL2dldENvbW1lbnRzLnRzPzE3OGUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBOZXh0QXBpUmVxdWVzdCAsIE5leHRBcGlSZXNwb25zZX0gZnJvbSAnbmV4dCdcclxuaW1wb3J0IHsgZ3JvcSB9IGZyb20gJ25leHQtc2FuaXR5J1xyXG5pbXBvcnQgeyBzYW5pdHlDbGllbnQgfSBmcm9tICcuLi8uLi9zYW5pdHknO1xyXG5pbXBvcnQgeyBDb21tZW50IH0gZnJvbSAnLi4vLi4vdHlwaW5ncydcclxuXHJcblxyXG5jb25zdCBjb21tZW50UXVlcnkgPSBncm9xYFxyXG4qW190eXBlID09IFwiY29tbWVudFwiICYmIHJlZmVyZW5jZXMoKltfdHlwZSA9PSAndHdlZXQnICYmIF9pZCA9PSAkdHdlZXRJZF0uX2lkKV1cclxue1xyXG4gIF9pZCxcclxuICAuLi5cclxuIH0gfCBvcmRlcihfY3JlYXRlZEF0IGRlc2MpXHJcbmBcclxuXHJcbnR5cGUgRGF0YSA9IENvbW1lbnRbXTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIoXHJcbiAgcmVxOiBOZXh0QXBpUmVxdWVzdCxcclxuICByZXM6IE5leHRBcGlSZXNwb25zZTxEYXRhPlxyXG4gICkgIHtcclxuXHJcbiAgICAgY29uc3Qge3R3ZWV0SWR9ID0gcmVxLnF1ZXJ5O1xyXG4gICAgIGNvbnN0IGNvbW1lbnRzOiBDb21tZW50W10gPSBhd2FpdCBzYW5pdHlDbGllbnQuZmV0Y2goY29tbWVudFF1ZXJ5LCB7XHJcbiAgICAgIHR3ZWV0SWRcclxuICAgICB9KVxyXG4gICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKGNvbW1lbnRzKVxyXG59Il0sIm5hbWVzIjpbImdyb3EiLCJzYW5pdHlDbGllbnQiLCJjb21tZW50UXVlcnkiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwidHdlZXRJZCIsInF1ZXJ5IiwiY29tbWVudHMiLCJmZXRjaCIsInN0YXR1cyIsImpzb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/getComments.ts\n");

/***/ }),

/***/ "(api)/./sanity.js":
/*!*******************!*\
  !*** ./sanity.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"config\": () => (/* binding */ config),\n/* harmony export */   \"sanityClient\": () => (/* binding */ sanityClient)\n/* harmony export */ });\n/* harmony import */ var next_sanity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-sanity */ \"next-sanity\");\n/* harmony import */ var next_sanity__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_sanity__WEBPACK_IMPORTED_MODULE_0__);\n\nconst config = {\n    dataset: \"production\" || 0,\n    projectId: \"zl5ony1w\",\n    apiVersion: \"2021-03-25\",\n    useCdn: \"development\" === \"production\"\n};\nconst sanityClient = (0,next_sanity__WEBPACK_IMPORTED_MODULE_0__.createClient)(config);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zYW5pdHkuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUF3QztBQUNqQyxNQUFNQyxNQUFNLEdBQUc7SUFDbEJDLE9BQU8sRUFBRUMsWUFBc0MsSUFBSSxDQUFZO0lBQy9ERyxTQUFTLEVBQUVILFVBQXlDO0lBQ3BESyxVQUFVLEVBQUUsWUFBWTtJQUN4QkMsTUFBTSxFQUFFTixhQUxDLEtBS3dCLFlBQVk7Q0FFaEQ7QUFDTSxNQUFNTyxZQUFZLEdBQUdWLHlEQUFZLENBQUNDLE1BQU0sQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3Nhbml0eS5qcz84NWQ0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Y3JlYXRlQ2xpZW50fSBmcm9tICduZXh0LXNhbml0eSdcclxuZXhwb3J0IGNvbnN0IGNvbmZpZyA9IHtcclxuICAgIGRhdGFzZXQ6IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1NBTklUWV9EQVRBU0VUIHx8ICdwcm9kdWN0aW9uJyxcclxuICAgIHByb2plY3RJZDogcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfU0FOSVRZX1BST0pFQ1RfSUQsXHJcbiAgICBhcGlWZXJzaW9uOiAnMjAyMS0wMy0yNScsXHJcbiAgICB1c2VDZG46IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicsXHJcblxyXG59XHJcbmV4cG9ydCBjb25zdCBzYW5pdHlDbGllbnQgPSBjcmVhdGVDbGllbnQoY29uZmlnKSJdLCJuYW1lcyI6WyJjcmVhdGVDbGllbnQiLCJjb25maWciLCJkYXRhc2V0IiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX1NBTklUWV9EQVRBU0VUIiwicHJvamVjdElkIiwiTkVYVF9QVUJMSUNfU0FOSVRZX1BST0pFQ1RfSUQiLCJhcGlWZXJzaW9uIiwidXNlQ2RuIiwic2FuaXR5Q2xpZW50Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./sanity.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/getComments.ts"));
module.exports = __webpack_exports__;

})();