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
exports.id = "pages/api/addComment";
exports.ids = ["pages/api/addComment"];
exports.modules = {

/***/ "(api)/./pages/api/addComment.ts":
/*!*********************************!*\
  !*** ./pages/api/addComment.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\nasync function handler(req, res) {\n    const comment = JSON.parse(req.body);\n    const mutations = {\n        mutations: [\n            {\n                create: {\n                    _type: \"comment\",\n                    comment: comment.comment,\n                    username: comment.username,\n                    profileImg: comment.profileImg,\n                    tweet: {\n                        _type: \"reference\",\n                        _ref: comment.tweetId\n                    }\n                }\n            }\n        ]\n    };\n    const apiEndpoint = `https://${\"zl5ony1w\"}.api.sanity.io/v2021-06-07/data/mutate/${\"production\"}`;\n    const result = await fetch(apiEndpoint, {\n        headers: {\n            \"content-type\": \"application/json\",\n            Authorization: `Bearer ${process.env.SANITY_API_TOKEN}`\n        },\n        body: JSON.stringify(mutations),\n        method: \"POST\"\n    });\n    const json = await result.json();\n    res.status(200).json({\n        message: \"Added!\"\n    });\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYWRkQ29tbWVudC50cy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBTWUsZUFBZUEsT0FBTyxDQUNqQ0MsR0FBbUIsRUFDbkJDLEdBQTBCLEVBQzVCO0lBQ0UsTUFBTUMsT0FBTyxHQUFnQkMsSUFBSSxDQUFDQyxLQUFLLENBQUNKLEdBQUcsQ0FBQ0ssSUFBSSxDQUFDO0lBRWpELE1BQU1DLFNBQVMsR0FDZjtRQUNJQSxTQUFTLEVBQUU7WUFDUDtnQkFDSUMsTUFBTSxFQUFFO29CQUNKQyxLQUFLLEVBQUUsU0FBUztvQkFDaEJOLE9BQU8sRUFBRUEsT0FBTyxDQUFDQSxPQUFPO29CQUN4Qk8sUUFBUSxFQUFFUCxPQUFPLENBQUNPLFFBQVE7b0JBQzFCQyxVQUFVLEVBQUVSLE9BQU8sQ0FBQ1EsVUFBVTtvQkFDOUJDLEtBQUssRUFBRTt3QkFDSEgsS0FBSyxFQUFFLFdBQVc7d0JBQ2xCSSxJQUFJLEVBQUVWLE9BQU8sQ0FBQ1csT0FBTztxQkFDeEI7aUJBQ0o7YUFDSjtTQUNKO0tBQ0o7SUFFRCxNQUFNQyxXQUFXLEdBQUcsQ0FBQyxRQUFRLEVBQUVDLFVBQXlDLENBQUMsdUNBQXVDLEVBQUVBLFlBQXNDLENBQUMsQ0FBQztJQUUxSixNQUFNSSxNQUFNLEdBQUcsTUFBTUMsS0FBSyxDQUFDTixXQUFXLEVBQUU7UUFDcENPLE9BQU8sRUFBRTtZQUNMLGNBQWMsRUFBRSxrQkFBa0I7WUFDbENDLGFBQWEsRUFBRSxDQUFDLE9BQU8sRUFBRVAsT0FBTyxDQUFDQyxHQUFHLENBQUNPLGdCQUFnQixDQUFDLENBQUM7U0FDMUQ7UUFDRGxCLElBQUksRUFBRUYsSUFBSSxDQUFDcUIsU0FBUyxDQUFDbEIsU0FBUyxDQUFDO1FBQy9CbUIsTUFBTSxFQUFFLE1BQU07S0FFakIsQ0FBQztJQUVGLE1BQU1DLElBQUksR0FBRyxNQUFNUCxNQUFNLENBQUNPLElBQUksRUFBRTtJQUVoQ3pCLEdBQUcsQ0FBQzBCLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0QsSUFBSSxDQUFDO1FBQUVFLE9BQU8sRUFBRSxRQUFRO0tBQUUsQ0FBQztDQUM5QyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3BhZ2VzL2FwaS9hZGRDb21tZW50LnRzP2VkNTYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBOZXh0QXBpUmVxdWVzdCwgTmV4dEFwaVJlc3BvbnNlIH0gZnJvbSBcIm5leHRcIjtcclxuaW1wb3J0IHsgQ29tbWVudEJvZHkgfSBmcm9tIFwiLi4vLi4vdHlwaW5nc1wiO1xyXG5cclxudHlwZSBEYXRhID0ge1xyXG4gICAgbWVzc2FnZTogc3RyaW5nXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihcclxuICAgIHJlcTogTmV4dEFwaVJlcXVlc3QsXHJcbiAgICByZXM6IE5leHRBcGlSZXNwb25zZTxEYXRhPlxyXG4pIHtcclxuICAgIGNvbnN0IGNvbW1lbnQ6IENvbW1lbnRCb2R5ID0gSlNPTi5wYXJzZShyZXEuYm9keSlcclxuXHJcbiAgICBjb25zdCBtdXRhdGlvbnMgPVxyXG4gICAge1xyXG4gICAgICAgIG11dGF0aW9uczogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBjcmVhdGU6IHtcclxuICAgICAgICAgICAgICAgICAgICBfdHlwZTogJ2NvbW1lbnQnLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbW1lbnQ6IGNvbW1lbnQuY29tbWVudCxcclxuICAgICAgICAgICAgICAgICAgICB1c2VybmFtZTogY29tbWVudC51c2VybmFtZSxcclxuICAgICAgICAgICAgICAgICAgICBwcm9maWxlSW1nOiBjb21tZW50LnByb2ZpbGVJbWcsXHJcbiAgICAgICAgICAgICAgICAgICAgdHdlZXQ6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgX3R5cGU6ICdyZWZlcmVuY2UnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBfcmVmOiBjb21tZW50LnR3ZWV0SWQsXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBdXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgYXBpRW5kcG9pbnQgPSBgaHR0cHM6Ly8ke3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1NBTklUWV9QUk9KRUNUX0lEfS5hcGkuc2FuaXR5LmlvL3YyMDIxLTA2LTA3L2RhdGEvbXV0YXRlLyR7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfU0FOSVRZX0RBVEFTRVR9YFxyXG5cclxuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGZldGNoKGFwaUVuZHBvaW50LCB7XHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAnY29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7cHJvY2Vzcy5lbnYuU0FOSVRZX0FQSV9UT0tFTn1gXHJcbiAgICAgICAgfSxcclxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShtdXRhdGlvbnMpLFxyXG4gICAgICAgIG1ldGhvZDogJ1BPU1QnXHJcblxyXG4gICAgfSlcclxuXHJcbiAgICBjb25zdCBqc29uID0gYXdhaXQgcmVzdWx0Lmpzb24oKTtcclxuXHJcbiAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7IG1lc3NhZ2U6ICdBZGRlZCEnIH0pXHJcbn0iXSwibmFtZXMiOlsiaGFuZGxlciIsInJlcSIsInJlcyIsImNvbW1lbnQiLCJKU09OIiwicGFyc2UiLCJib2R5IiwibXV0YXRpb25zIiwiY3JlYXRlIiwiX3R5cGUiLCJ1c2VybmFtZSIsInByb2ZpbGVJbWciLCJ0d2VldCIsIl9yZWYiLCJ0d2VldElkIiwiYXBpRW5kcG9pbnQiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfU0FOSVRZX1BST0pFQ1RfSUQiLCJORVhUX1BVQkxJQ19TQU5JVFlfREFUQVNFVCIsInJlc3VsdCIsImZldGNoIiwiaGVhZGVycyIsIkF1dGhvcml6YXRpb24iLCJTQU5JVFlfQVBJX1RPS0VOIiwic3RyaW5naWZ5IiwibWV0aG9kIiwianNvbiIsInN0YXR1cyIsIm1lc3NhZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/addComment.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/addComment.ts"));
module.exports = __webpack_exports__;

})();