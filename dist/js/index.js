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
/***/ (function(__unused_webpack_module, exports) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.nameSelectionActiveToggle = exports.fillNames = exports.getNames = void 0;
//! fake api call for names
exports.getNames = new Promise(function (resolve) {
    setTimeout(function () {
        resolve([{ id: 1, first: 'John', last: 'Doe' }, { id: 2, first: 'Howard', last: 'Haws' }, { id: 3, first: 'Maggie', last: 'Lane' }]);
    }, 2000);
});
var fillNames = function (element, names) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        if (!element || names.length === 0)
            return [2 /*return*/, null];
        names.forEach(function (name) {
            var node = document.createElement('li');
            node.classList.add('not-active-name');
            var label = document.createTextNode(name.last + ', ' + name.first);
            node.appendChild(label);
            element.appendChild(node);
        });
        return [2 /*return*/];
    });
}); };
exports.fillNames = fillNames;
var nameSelectionActiveToggle = function () {
    var listItems = document.querySelectorAll('#names li');
    listItems.forEach(function (item) {
        item.addEventListener('click', function () {
            if (!item.classList.contains('active-name')) {
                listItems.forEach(function (item2) {
                    item2.classList.remove('active-name');
                    item2.classList.add('not-active-name');
                });
                item.classList.add('active-name');
            }
        });
    });
};
exports.nameSelectionActiveToggle = nameSelectionActiveToggle;


/***/ }),

/***/ "./src/Components/TaskBar/task-bar.ts":
/*!********************************************!*\
  !*** ./src/Components/TaskBar/task-bar.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.taskSelectionActiveToggle = void 0;
var taskSelectionActiveToggle = function () {
    var taskItems = document.querySelectorAll('#tasks li');
    taskItems.forEach(function (task) {
        task.addEventListener('click', function () {
            if (!task.classList.contains('active-task')) {
                taskItems.forEach(function (task2) {
                    task2.classList.remove('active-task');
                    task2.classList.add('not-active-task');
                });
                task.classList.add('active-task');
            }
        });
    });
};
exports.taskSelectionActiveToggle = taskSelectionActiveToggle;


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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
var task_bar_1 = __webpack_require__(/*! ../TaskBar/task-bar */ "./src/Components/TaskBar/task-bar.ts");
name_list_1.getNames
    .then(function (names) { return name_list_1.fillNames(document.getElementById('names'), names); })
    .then(function () {
    name_list_1.nameSelectionActiveToggle();
    task_bar_1.taskSelectionActiveToggle();
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lbGVjdHJvbi1wcmFjdGljZS8uL3NyYy9Db21wb25lbnRzL01haW4vaW5kZXguY3NzIiwid2VicGFjazovL2VsZWN0cm9uLXByYWN0aWNlLy4vc3JjL0NvbXBvbmVudHMvTmFtZUxpc3QvbmFtZS1saXN0LnRzIiwid2VicGFjazovL2VsZWN0cm9uLXByYWN0aWNlLy4vc3JjL0NvbXBvbmVudHMvVGFza0Jhci90YXNrLWJhci50cyIsIndlYnBhY2s6Ly9lbGVjdHJvbi1wcmFjdGljZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9lbGVjdHJvbi1wcmFjdGljZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2VsZWN0cm9uLXByYWN0aWNlLy4vc3JjL0NvbXBvbmVudHMvTWFpbi9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBLDJCQUEyQjtBQUNkLGdCQUFRLEdBQUcsSUFBSSxPQUFPLENBQVEsVUFBQyxPQUFPO0lBQy9DLFVBQVUsQ0FBQztRQUNQLE9BQU8sQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUM7SUFDeEksQ0FBQyxFQUFFLElBQUksQ0FBQztBQUNaLENBQUMsQ0FBQztBQUVLLElBQU0sU0FBUyxHQUFHLFVBQU8sT0FBMkIsRUFBRSxLQUFZOztRQUNyRSxJQUFJLENBQUMsT0FBTyxJQUFJLEtBQUssQ0FBQyxNQUFNLEtBQUssQ0FBQztZQUFFLHNCQUFPLElBQUk7UUFDL0MsS0FBSyxDQUFDLE9BQU8sQ0FBQyxjQUFJO1lBQ2QsSUFBTSxJQUFJLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUM7WUFDekMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUM7WUFDckMsSUFBTSxLQUFLLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1lBQ3BFLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDO1lBQ3ZCLE9BQU8sQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDO1FBQzdCLENBQUMsQ0FBQztRQUNGLHNCQUFNOztLQUNUO0FBVlksaUJBQVMsYUFVckI7QUFFTSxJQUFNLHlCQUF5QixHQUFHO0lBQ3JDLElBQU0sU0FBUyxHQUFHLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXLENBQUM7SUFFeEQsU0FBUyxDQUFDLE9BQU8sQ0FBQyxjQUFJO1FBQ2xCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUU7WUFDM0IsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxFQUFFO2dCQUN6QyxTQUFTLENBQUMsT0FBTyxDQUFDLGVBQUs7b0JBQ25CLEtBQUssQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQztvQkFDckMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUM7Z0JBQzFDLENBQUMsQ0FBQztnQkFDRixJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUM7YUFDcEM7UUFDTCxDQUFDLENBQUM7SUFDTixDQUFDLENBQUM7QUFDTixDQUFDO0FBZFksaUNBQXlCLDZCQWNyQzs7Ozs7Ozs7Ozs7Ozs7QUNqQ00sSUFBTSx5QkFBeUIsR0FBRztJQUNyQyxJQUFNLFNBQVMsR0FBRyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsV0FBVyxDQUFDO0lBRXhELFNBQVMsQ0FBQyxPQUFPLENBQUMsY0FBSTtRQUNsQixJQUFJLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFO1lBQzNCLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsRUFBRTtnQkFDekMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxlQUFLO29CQUNuQixLQUFLLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUM7b0JBQ3JDLEtBQUssQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDO2dCQUMxQyxDQUFDLENBQUM7Z0JBQ0YsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDO2FBQ3BDO1FBQ0wsQ0FBQyxDQUFDO0lBQ04sQ0FBQyxDQUFDO0FBQ04sQ0FBQztBQWRZLGlDQUF5Qiw2QkFjckM7Ozs7Ozs7VUNkRDtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0NyQkE7V0FDQTtXQUNBO1dBQ0Esc0RBQXNELGtCQUFrQjtXQUN4RTtXQUNBLCtDQUErQyxjQUFjO1dBQzdELEU7Ozs7Ozs7Ozs7Ozs7QUNOQSwwRUFBb0I7QUFDcEIsNkdBQXNGO0FBQ3RGLHdHQUErRDtBQUUvRCxvQkFBUTtLQUNILElBQUksQ0FBQyxlQUFLLElBQUksNEJBQVMsQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxFQUFFLEtBQUssQ0FBQyxFQUFsRCxDQUFrRCxDQUFDO0tBQ2pFLElBQUksQ0FBQztJQUNGLHFDQUF5QixFQUFFO0lBQzNCLG9DQUF5QixFQUFFO0FBQy9CLENBQUMsQ0FBQyIsImZpbGUiOiJqcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vISBmYWtlIGFwaSBjYWxsIGZvciBuYW1lc1xuZXhwb3J0IGNvbnN0IGdldE5hbWVzID0gbmV3IFByb21pc2U8YW55W10+KChyZXNvbHZlKSA9PiB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHJlc29sdmUoW3sgaWQ6IDEsIGZpcnN0OiAnSm9obicsIGxhc3Q6ICdEb2UnIH0sIHsgaWQ6IDIsIGZpcnN0OiAnSG93YXJkJywgbGFzdDogJ0hhd3MnIH0sIHsgaWQ6IDMsIGZpcnN0OiAnTWFnZ2llJywgbGFzdDogJ0xhbmUnIH1dKVxuICAgIH0sIDIwMDApXG59KVxuXG5leHBvcnQgY29uc3QgZmlsbE5hbWVzID0gYXN5bmMgKGVsZW1lbnQ6IEhUTUxFbGVtZW50IHwgbnVsbCwgbmFtZXM6IGFueVtdKSA9PiB7XG4gICAgaWYgKCFlbGVtZW50IHx8IG5hbWVzLmxlbmd0aCA9PT0gMCkgcmV0dXJuIG51bGxcbiAgICBuYW1lcy5mb3JFYWNoKG5hbWUgPT4ge1xuICAgICAgICBjb25zdCBub2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKVxuICAgICAgICBub2RlLmNsYXNzTGlzdC5hZGQoJ25vdC1hY3RpdmUtbmFtZScpXG4gICAgICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUobmFtZS5sYXN0ICsgJywgJyArIG5hbWUuZmlyc3QpXG4gICAgICAgIG5vZGUuYXBwZW5kQ2hpbGQobGFiZWwpXG4gICAgICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQobm9kZSlcbiAgICB9KVxuICAgIHJldHVyblxufVxuXG5leHBvcnQgY29uc3QgbmFtZVNlbGVjdGlvbkFjdGl2ZVRvZ2dsZSA9ICgpID0+IHtcbiAgICBjb25zdCBsaXN0SXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjbmFtZXMgbGknKVxuXG4gICAgbGlzdEl0ZW1zLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBpZiAoIWl0ZW0uY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUtbmFtZScpKSB7XG4gICAgICAgICAgICAgICAgbGlzdEl0ZW1zLmZvckVhY2goaXRlbTIgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpdGVtMi5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUtbmFtZScpXG4gICAgICAgICAgICAgICAgICAgIGl0ZW0yLmNsYXNzTGlzdC5hZGQoJ25vdC1hY3RpdmUtbmFtZScpXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBpdGVtLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZS1uYW1lJylcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9KVxufSIsImV4cG9ydCBjb25zdCB0YXNrU2VsZWN0aW9uQWN0aXZlVG9nZ2xlID0gKCkgPT4ge1xuICAgIGNvbnN0IHRhc2tJdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyN0YXNrcyBsaScpXG5cbiAgICB0YXNrSXRlbXMuZm9yRWFjaCh0YXNrID0+IHtcbiAgICAgICAgdGFzay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGlmICghdGFzay5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZS10YXNrJykpIHtcbiAgICAgICAgICAgICAgICB0YXNrSXRlbXMuZm9yRWFjaCh0YXNrMiA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRhc2syLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZS10YXNrJylcbiAgICAgICAgICAgICAgICAgICAgdGFzazIuY2xhc3NMaXN0LmFkZCgnbm90LWFjdGl2ZS10YXNrJylcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIHRhc2suY2xhc3NMaXN0LmFkZCgnYWN0aXZlLXRhc2snKVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH0pXG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0aWYoX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSkge1xuXHRcdHJldHVybiBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgJy4vaW5kZXguY3NzJ1xuaW1wb3J0IHsgZmlsbE5hbWVzLCBuYW1lU2VsZWN0aW9uQWN0aXZlVG9nZ2xlLCBnZXROYW1lcyB9IGZyb20gJy4uL05hbWVMaXN0L25hbWUtbGlzdCdcbmltcG9ydCB7IHRhc2tTZWxlY3Rpb25BY3RpdmVUb2dnbGUgfSBmcm9tICcuLi9UYXNrQmFyL3Rhc2stYmFyJ1xuXG5nZXROYW1lc1xuICAgIC50aGVuKG5hbWVzID0+IGZpbGxOYW1lcyhkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmFtZXMnKSwgbmFtZXMpKVxuICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgbmFtZVNlbGVjdGlvbkFjdGl2ZVRvZ2dsZSgpXG4gICAgICAgIHRhc2tTZWxlY3Rpb25BY3RpdmVUb2dnbGUoKVxuICAgIH0pXG4iXSwic291cmNlUm9vdCI6IiJ9