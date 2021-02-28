/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Components/Main/index.css":
/*!***************************************!*\
  !*** ./src/Components/Main/index.css ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/Components/NameList/name-list.ts":
/*!**********************************************!*\
  !*** ./src/Components/NameList/name-list.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getNames = void 0;
var getNames = function (element, names) {
    if (!element)
        return;
    names.forEach(function (name) {
        var node = document.createElement('li');
        var label = document.createTextNode(name.last + ', ' + name.first);
        node.appendChild(label);
        element.appendChild(node);
    });
};
exports.getNames = getNames;


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;
/*!**************************************!*\
  !*** ./src/Components/Main/index.ts ***!
  \**************************************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
__webpack_require__(/*! ./index.css */ "./src/Components/Main/index.css");
var name_list_1 = __webpack_require__(/*! ../NameList/name-list */ "./src/Components/NameList/name-list.ts");
var nameList = document.getElementById('names');
var fakeNames = [{ first: 'John', last: 'Doe' }, { first: 'Howard', last: 'Haws' }, { first: 'Maggie', last: 'Lane' }];
name_list_1.getNames(nameList, fakeNames);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lbGVjdHJvbi1wcmFjdGljZS8uL3NyYy9Db21wb25lbnRzL01haW4vaW5kZXguY3NzIiwid2VicGFjazovL2VsZWN0cm9uLXByYWN0aWNlLy4vc3JjL0NvbXBvbmVudHMvTmFtZUxpc3QvbmFtZS1saXN0LnRzIiwid2VicGFjazovL2VsZWN0cm9uLXByYWN0aWNlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2VsZWN0cm9uLXByYWN0aWNlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZWxlY3Ryb24tcHJhY3RpY2UvLi9zcmMvQ29tcG9uZW50cy9NYWluL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7O0FDR08sSUFBTSxRQUFRLEdBQUcsVUFBQyxPQUEyQixFQUFFLEtBQVk7SUFDOUQsSUFBRyxDQUFDLE9BQU87UUFBRSxPQUFNO0lBQ25CLEtBQUssQ0FBQyxPQUFPLENBQUMsY0FBSTtRQUNkLElBQU0sSUFBSSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDO1FBQ3pDLElBQU0sS0FBSyxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUNwRSxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQztRQUN2QixPQUFPLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQztJQUM3QixDQUFDLENBQUM7QUFDTixDQUFDO0FBUlksZ0JBQVEsWUFRcEI7Ozs7Ozs7VUNYRDtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0NyQkE7V0FDQTtXQUNBO1dBQ0Esc0RBQXNELGtCQUFrQjtXQUN4RTtXQUNBLCtDQUErQyxjQUFjO1dBQzdELEU7Ozs7Ozs7Ozs7Ozs7QUNOQSwwRUFBb0I7QUFDcEIsNkdBQWlEO0FBRWpELElBQU0sUUFBUSxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDO0FBRWpELElBQU0sU0FBUyxHQUFHLENBQUMsRUFBQyxLQUFLLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUMsRUFBRSxFQUFDLEtBQUssRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBQyxFQUFFLEVBQUMsS0FBSyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFDLENBQUM7QUFFbEgsb0JBQVEsQ0FBQyxRQUFRLEVBQUUsU0FBUyxDQUFDIiwiZmlsZSI6ImpzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiXG5cblxuZXhwb3J0IGNvbnN0IGdldE5hbWVzID0gKGVsZW1lbnQ6IEhUTUxFbGVtZW50IHwgbnVsbCwgbmFtZXM6IGFueVtdKSA9PiB7XG4gICAgaWYoIWVsZW1lbnQpIHJldHVyblxuICAgIG5hbWVzLmZvckVhY2gobmFtZSA9PiB7XG4gICAgICAgIGNvbnN0IG5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpXG4gICAgICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUobmFtZS5sYXN0ICsgJywgJyArIG5hbWUuZmlyc3QpXG4gICAgICAgIG5vZGUuYXBwZW5kQ2hpbGQobGFiZWwpXG4gICAgICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQobm9kZSlcbiAgICB9KVxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdGlmKF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0pIHtcblx0XHRyZXR1cm4gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0ICcuL2luZGV4LmNzcydcbmltcG9ydCB7IGdldE5hbWVzIH0gZnJvbSAnLi4vTmFtZUxpc3QvbmFtZS1saXN0JztcblxuY29uc3QgbmFtZUxpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmFtZXMnKVxuXG5jb25zdCBmYWtlTmFtZXMgPSBbe2ZpcnN0OiAnSm9obicsIGxhc3Q6ICdEb2UnfSwge2ZpcnN0OiAnSG93YXJkJywgbGFzdDogJ0hhd3MnfSwge2ZpcnN0OiAnTWFnZ2llJywgbGFzdDogJ0xhbmUnfV1cblxuZ2V0TmFtZXMobmFtZUxpc3QsIGZha2VOYW1lcykiXSwic291cmNlUm9vdCI6IiJ9