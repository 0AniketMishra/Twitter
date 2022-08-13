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
exports.id = "pages/api/addTweet";
exports.ids = ["pages/api/addTweet"];
exports.modules = {

/***/ "(api)/./pages/api/addTweet.ts":
/*!*******************************!*\
  !*** ./pages/api/addTweet.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\nasync function handler(req, res) {\n    const data = JSON.parse(req.body);\n    const mutations = {\n        mutations: [\n            {\n                create: {\n                    _type: \"tweet\",\n                    text: data.text,\n                    username: data.username,\n                    blockTweet: false,\n                    profileImg: data.profileImg,\n                    image: data.image\n                }\n            }\n        ]\n    };\n    const apiEndpoint = `https://${\"zl5ony1w\"}.api.sanity.io/v2021-06-07/data/mutate/${\"production\"}`;\n    const result = await fetch(apiEndpoint, {\n        headers: {\n            \"content-type\": \"application/json\",\n            Authorization: `Bearer ${process.env.SANITY_API_TOKEN}`\n        },\n        body: JSON.stringify(mutations),\n        method: \"POST\"\n    });\n    const json = await result.json();\n    res.status(200).json({\n        message: \"Added!\"\n    });\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYWRkVHdlZXQudHMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQU1lLGVBQWVBLE9BQU8sQ0FDakNDLEdBQW1CLEVBQ25CQyxHQUEwQixFQUM1QjtJQUNFLE1BQU1DLElBQUksR0FBY0MsSUFBSSxDQUFDQyxLQUFLLENBQUNKLEdBQUcsQ0FBQ0ssSUFBSSxDQUFDO0lBRTVDLE1BQU1DLFNBQVMsR0FDbkI7UUFDUUEsU0FBUyxFQUFFO1lBQ1A7Z0JBQ0FDLE1BQU0sRUFBRTtvQkFDSkMsS0FBSyxFQUFFLE9BQU87b0JBQ2RDLElBQUksRUFBRVAsSUFBSSxDQUFDTyxJQUFJO29CQUNmQyxRQUFRLEVBQUVSLElBQUksQ0FBQ1EsUUFBUTtvQkFDdkJDLFVBQVUsRUFBRSxLQUFLO29CQUNqQkMsVUFBVSxFQUFFVixJQUFJLENBQUNVLFVBQVU7b0JBQzNCQyxLQUFLLEVBQUVYLElBQUksQ0FBQ1csS0FBSztpQkFDcEI7YUFDSjtTQUNKO0tBQ0o7SUFFRyxNQUFNQyxXQUFXLEdBQUcsQ0FBQyxRQUFRLEVBQUVDLFVBQXlDLENBQUMsdUNBQXVDLEVBQUVBLFlBQXNDLENBQUMsQ0FBQztJQUUxSixNQUFNSSxNQUFNLEdBQUcsTUFBTUMsS0FBSyxDQUFDTixXQUFXLEVBQUU7UUFDcENPLE9BQU8sRUFBRTtZQUNMLGNBQWMsRUFBRSxrQkFBa0I7WUFDdENDLGFBQWEsRUFBRSxDQUFDLE9BQU8sRUFBRVAsT0FBTyxDQUFDQyxHQUFHLENBQUNPLGdCQUFnQixDQUFDLENBQUM7U0FDdEQ7UUFDRGxCLElBQUksRUFBRUYsSUFBSSxDQUFDcUIsU0FBUyxDQUFDbEIsU0FBUyxDQUFDO1FBQy9CbUIsTUFBTSxFQUFFLE1BQU07S0FFakIsQ0FBQztJQUVGLE1BQU1DLElBQUksR0FBRyxNQUFNUCxNQUFNLENBQUNPLElBQUksRUFBRTtJQUVoQ3pCLEdBQUcsQ0FBQzBCLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0QsSUFBSSxDQUFDO1FBQUNFLE9BQU8sRUFBRSxRQUFRO0tBQUMsQ0FBQztDQUM1QyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3BhZ2VzL2FwaS9hZGRUd2VldC50cz8zNWJhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgTmV4dEFwaVJlcXVlc3QgLCBOZXh0QXBpUmVzcG9uc2UgfSBmcm9tIFwibmV4dFwiO1xyXG5pbXBvcnQgeyBUd2VldEJvZHkgfSBmcm9tIFwiLi4vLi4vdHlwaW5nc1wiO1xyXG5cclxudHlwZSBEYXRhID0ge1xyXG4gICAgbWVzc2FnZTogc3RyaW5nXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihcclxuICAgIHJlcTogTmV4dEFwaVJlcXVlc3QsIFxyXG4gICAgcmVzOiBOZXh0QXBpUmVzcG9uc2U8RGF0YT5cclxuKSB7XHJcbiAgICBjb25zdCBkYXRhOiBUd2VldEJvZHkgPSBKU09OLnBhcnNlKHJlcS5ib2R5KVxyXG5cclxuICAgIGNvbnN0IG11dGF0aW9ucyA9IFxyXG57XHJcbiAgICAgICAgbXV0YXRpb25zOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgY3JlYXRlOiB7XHJcbiAgICAgICAgICAgICAgICBfdHlwZTogJ3R3ZWV0JyxcclxuICAgICAgICAgICAgICAgIHRleHQ6IGRhdGEudGV4dCxcclxuICAgICAgICAgICAgICAgIHVzZXJuYW1lOiBkYXRhLnVzZXJuYW1lLFxyXG4gICAgICAgICAgICAgICAgYmxvY2tUd2VldDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBwcm9maWxlSW1nOiBkYXRhLnByb2ZpbGVJbWcsXHJcbiAgICAgICAgICAgICAgICBpbWFnZTogZGF0YS5pbWFnZSxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIF1cclxufVxyXG5cclxuICAgIGNvbnN0IGFwaUVuZHBvaW50ID0gYGh0dHBzOi8vJHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19TQU5JVFlfUFJPSkVDVF9JRH0uYXBpLnNhbml0eS5pby92MjAyMS0wNi0wNy9kYXRhL211dGF0ZS8ke3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1NBTklUWV9EQVRBU0VUfWBcclxuXHJcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBmZXRjaChhcGlFbmRwb2ludCwge1xyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgJ2NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJywgXHJcbiAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke3Byb2Nlc3MuZW52LlNBTklUWV9BUElfVE9LRU59YFxyXG4gICAgICAgIH0sIFxyXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KG11dGF0aW9ucyksIFxyXG4gICAgICAgIG1ldGhvZDogJ1BPU1QnXHJcblxyXG4gICAgfSlcclxuXHJcbiAgICBjb25zdCBqc29uID0gYXdhaXQgcmVzdWx0Lmpzb24oKTtcclxuXHJcbiAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7bWVzc2FnZTogJ0FkZGVkISd9KVxyXG59Il0sIm5hbWVzIjpbImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJkYXRhIiwiSlNPTiIsInBhcnNlIiwiYm9keSIsIm11dGF0aW9ucyIsImNyZWF0ZSIsIl90eXBlIiwidGV4dCIsInVzZXJuYW1lIiwiYmxvY2tUd2VldCIsInByb2ZpbGVJbWciLCJpbWFnZSIsImFwaUVuZHBvaW50IiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX1NBTklUWV9QUk9KRUNUX0lEIiwiTkVYVF9QVUJMSUNfU0FOSVRZX0RBVEFTRVQiLCJyZXN1bHQiLCJmZXRjaCIsImhlYWRlcnMiLCJBdXRob3JpemF0aW9uIiwiU0FOSVRZX0FQSV9UT0tFTiIsInN0cmluZ2lmeSIsIm1ldGhvZCIsImpzb24iLCJzdGF0dXMiLCJtZXNzYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/addTweet.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/addTweet.ts"));
module.exports = __webpack_exports__;

})();