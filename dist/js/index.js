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
exports.nameSelectionActiveToggle = exports.fillNames = void 0;
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
    var names = document.querySelectorAll('#names li');
    names.forEach(function (name) {
        name.addEventListener('click', function () {
            if (!name.classList.contains('active-name')) {
                names.forEach(function (name2) {
                    name2.classList.remove('active-name');
                    name2.classList.add('not-active-name');
                });
                name.classList.add('active-name');
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
exports.toggleNameList = exports.taskSelectionActiveToggle = void 0;
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
var toggleNameList = function () {
    var _a;
    (_a = document.getElementById('tasks')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', function (e) {
        var names = document.getElementById('name-list');
        var target = e.target;
        if (target.id === 'task-names' && names.style.display !== 'flex') {
            names.style.display = 'flex';
        }
        else if (target.id === 'tasks' && names.style.display === 'flex') {
            names.style.display = 'flex';
        }
        else {
            names.style.display = 'none';
        }
    });
};
exports.toggleNameList = toggleNameList;


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
//! fake api call for names
var getNames = new Promise(function (resolve) {
    setTimeout(function () {
        resolve([{ id: 1, first: 'John', last: 'Doe' }, { id: 2, first: 'Howard', last: 'Haws' }, { id: 3, first: 'Maggie', last: 'Lane' }]);
    }, 2000);
});
getNames
    .then(function (names) { return name_list_1.fillNames(document.getElementById('names'), names); })
    .then(function () {
    name_list_1.nameSelectionActiveToggle();
    task_bar_1.taskSelectionActiveToggle();
    task_bar_1.toggleNameList();
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lbGVjdHJvbi1wcmFjdGljZS8uL3NyYy9Db21wb25lbnRzL01haW4vaW5kZXguY3NzIiwid2VicGFjazovL2VsZWN0cm9uLXByYWN0aWNlLy4vc3JjL0NvbXBvbmVudHMvTmFtZUxpc3QvbmFtZS1saXN0LnRzIiwid2VicGFjazovL2VsZWN0cm9uLXByYWN0aWNlLy4vc3JjL0NvbXBvbmVudHMvVGFza0Jhci90YXNrLWJhci50cyIsIndlYnBhY2s6Ly9lbGVjdHJvbi1wcmFjdGljZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9lbGVjdHJvbi1wcmFjdGljZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2VsZWN0cm9uLXByYWN0aWNlLy4vc3JjL0NvbXBvbmVudHMvTWFpbi9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FPLElBQU0sU0FBUyxHQUFHLFVBQU8sT0FBMkIsRUFBRSxLQUFZOztRQUNyRSxJQUFJLENBQUMsT0FBTyxJQUFJLEtBQUssQ0FBQyxNQUFNLEtBQUssQ0FBQztZQUFFLHNCQUFPLElBQUk7UUFDL0MsS0FBSyxDQUFDLE9BQU8sQ0FBQyxjQUFJO1lBQ2QsSUFBTSxJQUFJLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUM7WUFDekMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUM7WUFDckMsSUFBTSxLQUFLLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1lBQ3BFLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDO1lBQ3ZCLE9BQU8sQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDO1FBQzdCLENBQUMsQ0FBQztRQUNGLHNCQUFNOztLQUNUO0FBVlksaUJBQVMsYUFVckI7QUFFTSxJQUFNLHlCQUF5QixHQUFHO0lBQ3JDLElBQU0sS0FBSyxHQUFHLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXLENBQUM7SUFFcEQsS0FBSyxDQUFDLE9BQU8sQ0FBQyxjQUFJO1FBQ2QsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRTtZQUMzQixJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLEVBQUU7Z0JBQ3pDLEtBQUssQ0FBQyxPQUFPLENBQUMsZUFBSztvQkFDZixLQUFLLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUM7b0JBQ3JDLEtBQUssQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDO2dCQUMxQyxDQUFDLENBQUM7Z0JBQ0YsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDO2FBQ3BDO1FBQ0wsQ0FBQyxDQUFDO0lBQ04sQ0FBQyxDQUFDO0FBQ04sQ0FBQztBQWRZLGlDQUF5Qiw2QkFjckM7Ozs7Ozs7Ozs7Ozs7O0FDMUJNLElBQU0seUJBQXlCLEdBQUc7SUFDckMsSUFBTSxTQUFTLEdBQUcsUUFBUSxDQUFDLGdCQUFnQixDQUFDLFdBQVcsQ0FBQztJQUV4RCxTQUFTLENBQUMsT0FBTyxDQUFDLGNBQUk7UUFDbEIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRTtZQUMzQixJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLEVBQUU7Z0JBQ3pDLFNBQVMsQ0FBQyxPQUFPLENBQUMsZUFBSztvQkFDbkIsS0FBSyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDO29CQUNyQyxLQUFLLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQztnQkFDMUMsQ0FBQyxDQUFDO2dCQUNGLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQzthQUNwQztRQUNMLENBQUMsQ0FBQztJQUNOLENBQUMsQ0FBQztBQUNOLENBQUM7QUFkWSxpQ0FBeUIsNkJBY3JDO0FBRU0sSUFBTSxjQUFjLEdBQUc7O0lBQzFCLGNBQVEsQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLDBDQUFFLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxVQUFDLENBQTZCO1FBQ3RGLElBQU0sS0FBSyxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDO1FBQ2xELElBQU0sTUFBTSxHQUFHLENBQUMsQ0FBQyxNQUFxQjtRQUV0QyxJQUFJLE1BQU0sQ0FBQyxFQUFFLEtBQUssWUFBWSxJQUFJLEtBQU0sQ0FBQyxLQUFLLENBQUMsT0FBTyxLQUFLLE1BQU0sRUFBRTtZQUMvRCxLQUFNLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxNQUFNO1NBQ2hDO2FBQU0sSUFBRyxNQUFNLENBQUMsRUFBRSxLQUFLLE9BQU8sSUFBSSxLQUFNLENBQUMsS0FBSyxDQUFDLE9BQU8sS0FBSyxNQUFNLEVBQUU7WUFDaEUsS0FBTSxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsTUFBTTtTQUNoQzthQUFLO1lBQ0YsS0FBTSxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsTUFBTTtTQUNoQztJQUNMLENBQUMsRUFBQztBQUNOLENBQUM7QUFiWSxzQkFBYyxrQkFhMUI7Ozs7Ozs7VUM3QkQ7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDckJBO1dBQ0E7V0FDQTtXQUNBLHNEQUFzRCxrQkFBa0I7V0FDeEU7V0FDQSwrQ0FBK0MsY0FBYztXQUM3RCxFOzs7Ozs7Ozs7Ozs7O0FDTkEsMEVBQW9CO0FBQ3BCLDZHQUE0RTtBQUM1RSx3R0FBK0U7QUFFL0UsMkJBQTJCO0FBQzNCLElBQU0sUUFBUSxHQUFHLElBQUksT0FBTyxDQUFRLFVBQUMsT0FBTztJQUN4QyxVQUFVLENBQUM7UUFDUCxPQUFPLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsQ0FBQyxDQUFDO0lBQ3hJLENBQUMsRUFBRSxJQUFJLENBQUM7QUFDWixDQUFDLENBQUM7QUFFRixRQUFRO0tBQ0gsSUFBSSxDQUFDLGVBQUssSUFBSSw0QkFBUyxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLEVBQUUsS0FBSyxDQUFDLEVBQWxELENBQWtELENBQUM7S0FDakUsSUFBSSxDQUFDO0lBQ0YscUNBQXlCLEVBQUU7SUFDM0Isb0NBQXlCLEVBQUU7SUFDM0IseUJBQWMsRUFBRTtBQUNwQixDQUFDLENBQUMiLCJmaWxlIjoianMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCJleHBvcnQgY29uc3QgZmlsbE5hbWVzID0gYXN5bmMgKGVsZW1lbnQ6IEhUTUxFbGVtZW50IHwgbnVsbCwgbmFtZXM6IGFueVtdKSA9PiB7XG4gICAgaWYgKCFlbGVtZW50IHx8IG5hbWVzLmxlbmd0aCA9PT0gMCkgcmV0dXJuIG51bGxcbiAgICBuYW1lcy5mb3JFYWNoKG5hbWUgPT4ge1xuICAgICAgICBjb25zdCBub2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKVxuICAgICAgICBub2RlLmNsYXNzTGlzdC5hZGQoJ25vdC1hY3RpdmUtbmFtZScpXG4gICAgICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUobmFtZS5sYXN0ICsgJywgJyArIG5hbWUuZmlyc3QpXG4gICAgICAgIG5vZGUuYXBwZW5kQ2hpbGQobGFiZWwpXG4gICAgICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQobm9kZSlcbiAgICB9KVxuICAgIHJldHVyblxufVxuXG5leHBvcnQgY29uc3QgbmFtZVNlbGVjdGlvbkFjdGl2ZVRvZ2dsZSA9ICgpID0+IHtcbiAgICBjb25zdCBuYW1lcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyNuYW1lcyBsaScpXG5cbiAgICBuYW1lcy5mb3JFYWNoKG5hbWUgPT4ge1xuICAgICAgICBuYW1lLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgaWYgKCFuYW1lLmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlLW5hbWUnKSkge1xuICAgICAgICAgICAgICAgIG5hbWVzLmZvckVhY2gobmFtZTIgPT4ge1xuICAgICAgICAgICAgICAgICAgICBuYW1lMi5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUtbmFtZScpXG4gICAgICAgICAgICAgICAgICAgIG5hbWUyLmNsYXNzTGlzdC5hZGQoJ25vdC1hY3RpdmUtbmFtZScpXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBuYW1lLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZS1uYW1lJylcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9KVxufSIsImV4cG9ydCBjb25zdCB0YXNrU2VsZWN0aW9uQWN0aXZlVG9nZ2xlID0gKCkgPT4ge1xuICAgIGNvbnN0IHRhc2tJdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyN0YXNrcyBsaScpXG5cbiAgICB0YXNrSXRlbXMuZm9yRWFjaCh0YXNrID0+IHtcbiAgICAgICAgdGFzay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGlmICghdGFzay5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZS10YXNrJykpIHtcbiAgICAgICAgICAgICAgICB0YXNrSXRlbXMuZm9yRWFjaCh0YXNrMiA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRhc2syLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZS10YXNrJylcbiAgICAgICAgICAgICAgICAgICAgdGFzazIuY2xhc3NMaXN0LmFkZCgnbm90LWFjdGl2ZS10YXNrJylcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIHRhc2suY2xhc3NMaXN0LmFkZCgnYWN0aXZlLXRhc2snKVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH0pXG59XG5cbmV4cG9ydCBjb25zdCB0b2dnbGVOYW1lTGlzdCA9ICgpID0+IHtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFza3MnKT8uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZTogTW91c2VFdmVudCB8IEtleWJvYXJkRXZlbnQpID0+IHtcbiAgICAgICAgY29uc3QgbmFtZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmFtZS1saXN0JylcbiAgICAgICAgY29uc3QgdGFyZ2V0ID0gZS50YXJnZXQgYXMgSFRNTEVsZW1lbnRcblxuICAgICAgICBpZiAodGFyZ2V0LmlkID09PSAndGFzay1uYW1lcycgJiYgbmFtZXMhLnN0eWxlLmRpc3BsYXkgIT09ICdmbGV4Jykge1xuICAgICAgICAgICAgbmFtZXMhLnN0eWxlLmRpc3BsYXkgPSAnZmxleCdcbiAgICAgICAgfSBlbHNlIGlmKHRhcmdldC5pZCA9PT0gJ3Rhc2tzJyAmJiBuYW1lcyEuc3R5bGUuZGlzcGxheSA9PT0gJ2ZsZXgnKSB7XG4gICAgICAgICAgICBuYW1lcyEuc3R5bGUuZGlzcGxheSA9ICdmbGV4J1xuICAgICAgICB9ZWxzZSB7XG4gICAgICAgICAgICBuYW1lcyEuc3R5bGUuZGlzcGxheSA9ICdub25lJ1xuICAgICAgICB9XG4gICAgfSlcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHRpZihfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdKSB7XG5cdFx0cmV0dXJuIF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0uZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCAnLi9pbmRleC5jc3MnXG5pbXBvcnQgeyBmaWxsTmFtZXMsIG5hbWVTZWxlY3Rpb25BY3RpdmVUb2dnbGUgfSBmcm9tICcuLi9OYW1lTGlzdC9uYW1lLWxpc3QnXG5pbXBvcnQgeyB0YXNrU2VsZWN0aW9uQWN0aXZlVG9nZ2xlLCB0b2dnbGVOYW1lTGlzdCB9IGZyb20gJy4uL1Rhc2tCYXIvdGFzay1iYXInXG5cbi8vISBmYWtlIGFwaSBjYWxsIGZvciBuYW1lc1xuY29uc3QgZ2V0TmFtZXMgPSBuZXcgUHJvbWlzZTxhbnlbXT4oKHJlc29sdmUpID0+IHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgcmVzb2x2ZShbeyBpZDogMSwgZmlyc3Q6ICdKb2huJywgbGFzdDogJ0RvZScgfSwgeyBpZDogMiwgZmlyc3Q6ICdIb3dhcmQnLCBsYXN0OiAnSGF3cycgfSwgeyBpZDogMywgZmlyc3Q6ICdNYWdnaWUnLCBsYXN0OiAnTGFuZScgfV0pXG4gICAgfSwgMjAwMClcbn0pXG5cbmdldE5hbWVzXG4gICAgLnRoZW4obmFtZXMgPT4gZmlsbE5hbWVzKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduYW1lcycpLCBuYW1lcykpXG4gICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICBuYW1lU2VsZWN0aW9uQWN0aXZlVG9nZ2xlKClcbiAgICAgICAgdGFza1NlbGVjdGlvbkFjdGl2ZVRvZ2dsZSgpXG4gICAgICAgIHRvZ2dsZU5hbWVMaXN0KClcbiAgICB9KVxuIl0sInNvdXJjZVJvb3QiOiIifQ==