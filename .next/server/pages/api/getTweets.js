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
exports.id = "pages/api/getTweets";
exports.ids = ["pages/api/getTweets"];
exports.modules = {

/***/ "next-sanity":
/*!******************************!*\
  !*** external "next-sanity" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next-sanity");

/***/ }),

/***/ "(api)/./pages/api/getTweets.ts":
/*!********************************!*\
  !*** ./pages/api/getTweets.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _sanity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../sanity */ \"(api)/./sanity.js\");\n/* harmony import */ var next_sanity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-sanity */ \"next-sanity\");\n/* harmony import */ var next_sanity__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_sanity__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst feedQuery = next_sanity__WEBPACK_IMPORTED_MODULE_1__.groq`\r\n  *[_type == \"tweet\" ] {\r\n    _id, \r\n    ...\r\n  } | order(_createdAt desc)\r\n`;\nasync function handler(req, res) {\n    const tweets = await _sanity__WEBPACK_IMPORTED_MODULE_0__.sanityClient.fetch(feedQuery);\n    res.status(200).json({\n        tweets\n    });\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZ2V0VHdlZXRzLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDeUM7QUFFVDtBQUVoQyxNQUFNRSxTQUFTLEdBQUdELDZDQUFJLENBQUM7QUFVdkIsZUFBZTtJQUlYLE1BQU1LO0lBQ05ELEdBQUcsQ0FBQ0c7UUFBbUJGLE1BQU07O0FBRWhDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvYXBpL2dldFR3ZWV0cy50cz9jNWYyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgTmV4dEFwaVJlcXVlc3QsIE5leHRBcGlSZXNwb25zZX0gZnJvbSAnbmV4dCdcclxuaW1wb3J0IHtzYW5pdHlDbGllbnR9IGZyb20gJy4uLy4uL3Nhbml0eSdcclxuaW1wb3J0IHtUd2VldH0gZnJvbSAnLi4vLi4vdHlwaW5ncydcclxuaW1wb3J0IHtncm9xfSBmcm9tICduZXh0LXNhbml0eScgXHJcblxyXG5jb25zdCBmZWVkUXVlcnkgPSBncm9xYFxyXG4gICpbX3R5cGUgPT0gXCJ0d2VldFwiIF0ge1xyXG4gICAgX2lkLCBcclxuICAgIC4uLlxyXG4gIH0gfCBvcmRlcihfY3JlYXRlZEF0IGRlc2MpXHJcbmBcclxuXHJcbnR5cGUgRGF0YSA9IHtcclxuICAgIHR3ZWV0czogVHdlZXRbXVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIoXHJcbiAgICByZXE6IE5leHRBcGlSZXF1ZXN0LFxyXG4gICAgcmVzOiBOZXh0QXBpUmVzcG9uc2U8RGF0YT5cclxuICkge1xyXG4gICAgY29uc3QgdHdlZXRzOiBUd2VldFtdID0gYXdhaXQgc2FuaXR5Q2xpZW50LmZldGNoKGZlZWRRdWVyeSlcclxuICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgdHdlZXRzIH0pXHJcbiAgICBcclxufSJdLCJuYW1lcyI6WyJzYW5pdHlDbGllbnQiLCJncm9xIiwiZmVlZFF1ZXJ5IiwiaGFuZGxlciIsInJlcSIsInJlcyIsInR3ZWV0cyIsImZldGNoIiwic3RhdHVzIiwianNvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/getTweets.ts\n");

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
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/getTweets.ts"));
module.exports = __webpack_exports__;

})();