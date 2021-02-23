/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Windows/MainWindow/MainWindow.ts":
/*!**********************************************!*\
  !*** ./src/Windows/MainWindow/MainWindow.ts ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var electron_1 = __webpack_require__(/*! electron */ "electron");
var defaultProps = {
    height: 600,
    width: 800,
    show: false,
    webPreferences: {
        nodeIntegration: true,
        contextIsolation: false
    }
};
var MainWindow = /** @class */ (function () {
    function MainWindow() {
    }
    MainWindow.onWindowAllClosed = function (app) {
        if (process.platform !== 'darwin') {
            app.quit();
        }
    };
    MainWindow.onClose = function () {
        MainWindow.win = null;
    };
    MainWindow.createWindow = function (mode) {
        if (mode === void 0) { mode = 'prod'; }
        MainWindow.win = new electron_1.BrowserWindow(__assign({}, defaultProps));
        MainWindow.win.loadFile('../index.html');
        mode !== 'prod' && MainWindow.win.webContents.openDevTools();
        MainWindow.win.on('ready-to-show', function () { var _a; return (_a = MainWindow.win) === null || _a === void 0 ? void 0 : _a.show(); });
        MainWindow.win.on('closed', MainWindow.onClose);
    };
    MainWindow.start = function (app, mode) {
        if (mode === void 0) { mode = 'dev'; }
        app.whenReady().then(function () {
            MainWindow.createWindow(mode);
        });
        app.on('window-all-closed', MainWindow.onWindowAllClosed);
        app.on('activate', function () {
            if (electron_1.BrowserWindow.getAllWindows.length === 0) {
                MainWindow.createWindow(mode);
            }
        });
    };
    return MainWindow;
}());
exports.default = MainWindow;


/***/ }),

/***/ "./src/Windows/View/View.ts":
/*!**********************************!*\
  !*** ./src/Windows/View/View.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var electron_1 = __webpack_require__(/*! electron */ "electron");
var defaultProps = {
    x: 0,
    y: 0,
    height: 300,
    width: 300,
    webPreferences: {
        contextIsolation: true
    }
};
var View = /** @class */ (function () {
    function View(_a) {
        var file = _a.file, settings = _a.settings;
        this.view = new electron_1.BrowserView();
        this.file = file;
        this.settings = settings;
    }
    View.prototype.create = function (parent) {
        parent.setBrowserView(this.view);
        this.view.setBounds(__assign(__assign({}, defaultProps), this.settings));
        this.view.webContents.loadURL('https://www.google.com');
    };
    return View;
}());
exports.default = View;


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var electron_1 = __webpack_require__(/*! electron */ "electron");
var MainWindow_1 = __importDefault(__webpack_require__(/*! ./Windows/MainWindow/MainWindow */ "./src/Windows/MainWindow/MainWindow.ts"));
var View_1 = __importDefault(__webpack_require__(/*! ./Windows/View/View */ "./src/Windows/View/View.ts"));
MainWindow_1.default.start(electron_1.app);
electron_1.app.whenReady().then(function () {
    var view = new View_1.default({ file: '' });
    view.create(MainWindow_1.default.win);
});


/***/ }),

/***/ "electron":
/*!***************************!*\
  !*** external "electron" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("electron");;

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/main.ts");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lbGVjdHJvbi1wcmFjdGljZS8uL3NyYy9XaW5kb3dzL01haW5XaW5kb3cvTWFpbldpbmRvdy50cyIsIndlYnBhY2s6Ly9lbGVjdHJvbi1wcmFjdGljZS8uL3NyYy9XaW5kb3dzL1ZpZXcvVmlldy50cyIsIndlYnBhY2s6Ly9lbGVjdHJvbi1wcmFjdGljZS8uL3NyYy9tYWluLnRzIiwid2VicGFjazovL2VsZWN0cm9uLXByYWN0aWNlL2V4dGVybmFsIFwiZWxlY3Ryb25cIiIsIndlYnBhY2s6Ly9lbGVjdHJvbi1wcmFjdGljZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9lbGVjdHJvbi1wcmFjdGljZS93ZWJwYWNrL3N0YXJ0dXAiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxpRUFBd0M7QUFFeEMsSUFBTSxZQUFZLEdBQUc7SUFDakIsTUFBTSxFQUFFLEdBQUc7SUFDWCxLQUFLLEVBQUUsR0FBRztJQUNWLElBQUksRUFBRSxLQUFLO0lBQ1gsY0FBYyxFQUFFO1FBQ1osZUFBZSxFQUFFLElBQUk7UUFDckIsZ0JBQWdCLEVBQUUsS0FBSztLQUMxQjtDQUNKO0FBRUQ7SUFBQTtJQWdDQSxDQUFDO0lBN0JrQiw0QkFBaUIsR0FBaEMsVUFBaUMsR0FBaUI7UUFDOUMsSUFBSSxPQUFPLENBQUMsUUFBUSxLQUFLLFFBQVEsRUFBRTtZQUMvQixHQUFHLENBQUMsSUFBSSxFQUFFO1NBQ2I7SUFDTCxDQUFDO0lBRWMsa0JBQU8sR0FBdEI7UUFDSSxVQUFVLENBQUMsR0FBRyxHQUFHLElBQUk7SUFDekIsQ0FBQztJQUVjLHVCQUFZLEdBQTNCLFVBQTRCLElBQWE7UUFBYixvQ0FBYTtRQUNyQyxVQUFVLENBQUMsR0FBRyxHQUFHLElBQUksd0JBQWEsY0FBSyxZQUFZLEVBQUU7UUFDckQsVUFBVSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsZUFBZSxDQUFDO1FBQ3hDLElBQUksS0FBSyxNQUFNLElBQUksVUFBVSxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsWUFBWSxFQUFFO1FBQzVELFVBQVUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLGVBQWUsRUFBRSxtQ0FBTSxVQUFVLENBQUMsR0FBRywwQ0FBRSxJQUFJLEtBQUUsQ0FBQztRQUNoRSxVQUFVLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxRQUFRLEVBQUUsVUFBVSxDQUFDLE9BQU8sQ0FBQztJQUNuRCxDQUFDO0lBRU0sZ0JBQUssR0FBWixVQUFhLEdBQWlCLEVBQUUsSUFBWTtRQUFaLG1DQUFZO1FBQ3hDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxJQUFJLENBQUM7WUFDakIsVUFBVSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUM7UUFDakMsQ0FBQyxDQUFDO1FBQ0YsR0FBRyxDQUFDLEVBQUUsQ0FBQyxtQkFBbUIsRUFBRSxVQUFVLENBQUMsaUJBQWlCLENBQUM7UUFDekQsR0FBRyxDQUFDLEVBQUUsQ0FBQyxVQUFVLEVBQUU7WUFDZixJQUFJLHdCQUFhLENBQUMsYUFBYSxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7Z0JBQzFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDO2FBQ2hDO1FBQ0wsQ0FBQyxDQUFDO0lBQ04sQ0FBQztJQUNMLGlCQUFDO0FBQUQsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzVDRCxpRUFBc0M7QUFFdEMsSUFBTSxZQUFZLEdBQUc7SUFDakIsQ0FBQyxFQUFFLENBQUM7SUFDSixDQUFDLEVBQUUsQ0FBQztJQUNKLE1BQU0sRUFBRSxHQUFHO0lBQ1gsS0FBSyxFQUFFLEdBQUc7SUFDVixjQUFjLEVBQUU7UUFDWixnQkFBZ0IsRUFBRSxJQUFJO0tBQ3pCO0NBQ0o7QUFlRDtJQUtJLGNBQVksRUFBNkI7WUFBM0IsSUFBSSxZQUFFLFFBQVE7UUFDeEIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLHNCQUFXLEVBQUU7UUFDN0IsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJO1FBQ2hCLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUTtJQUM1QixDQUFDO0lBRUQscUJBQU0sR0FBTixVQUFPLE1BQThCO1FBQ2pDLE1BQU0sQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztRQUNoQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsdUJBQU0sWUFBWSxHQUFLLElBQUksQ0FBQyxRQUFRLEVBQUc7UUFDMUQsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLHdCQUF3QixDQUFDO0lBQzNELENBQUM7SUFDTCxXQUFDO0FBQUQsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6Q0QsaUVBQThCO0FBQzlCLHlJQUF3RDtBQUN4RCwyR0FBc0M7QUFFdEMsb0JBQVUsQ0FBQyxLQUFLLENBQUMsY0FBRyxDQUFDO0FBRXJCLGNBQUcsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxJQUFJLENBQUM7SUFDakIsSUFBTSxJQUFJLEdBQUcsSUFBSSxjQUFJLENBQUMsRUFBQyxJQUFJLEVBQUUsRUFBRSxFQUFDLENBQUM7SUFDakMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxvQkFBVSxDQUFDLEdBQUksQ0FBQztBQUNoQyxDQUFDLENBQUM7Ozs7Ozs7Ozs7O0FDVEYsc0M7Ozs7OztVQ0FBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7O1VDckJBO1VBQ0E7VUFDQTtVQUNBIiwiZmlsZSI6ImpzL21haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCcm93c2VyV2luZG93IH0gZnJvbSAnZWxlY3Ryb24nXG5cbmNvbnN0IGRlZmF1bHRQcm9wcyA9IHtcbiAgICBoZWlnaHQ6IDYwMCxcbiAgICB3aWR0aDogODAwLFxuICAgIHNob3c6IGZhbHNlLFxuICAgIHdlYlByZWZlcmVuY2VzOiB7XG4gICAgICAgIG5vZGVJbnRlZ3JhdGlvbjogdHJ1ZSxcbiAgICAgICAgY29udGV4dElzb2xhdGlvbjogZmFsc2VcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1haW5XaW5kb3cge1xuICAgIHN0YXRpYyB3aW46IEVsZWN0cm9uLkJyb3dzZXJXaW5kb3cgfCBudWxsXG5cbiAgICBwcml2YXRlIHN0YXRpYyBvbldpbmRvd0FsbENsb3NlZChhcHA6IEVsZWN0cm9uLkFwcCkge1xuICAgICAgICBpZiAocHJvY2Vzcy5wbGF0Zm9ybSAhPT0gJ2RhcndpbicpIHtcbiAgICAgICAgICAgIGFwcC5xdWl0KClcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgc3RhdGljIG9uQ2xvc2UoKSB7XG4gICAgICAgIE1haW5XaW5kb3cud2luID0gbnVsbFxuICAgIH1cblxuICAgIHByaXZhdGUgc3RhdGljIGNyZWF0ZVdpbmRvdyhtb2RlID0gJ3Byb2QnKSB7XG4gICAgICAgIE1haW5XaW5kb3cud2luID0gbmV3IEJyb3dzZXJXaW5kb3coey4uLmRlZmF1bHRQcm9wc30pXG4gICAgICAgIE1haW5XaW5kb3cud2luLmxvYWRGaWxlKCcuLi9pbmRleC5odG1sJylcbiAgICAgICAgbW9kZSAhPT0gJ3Byb2QnICYmIE1haW5XaW5kb3cud2luLndlYkNvbnRlbnRzLm9wZW5EZXZUb29scygpXG4gICAgICAgIE1haW5XaW5kb3cud2luLm9uKCdyZWFkeS10by1zaG93JywgKCkgPT4gTWFpbldpbmRvdy53aW4/LnNob3coKSlcbiAgICAgICAgTWFpbldpbmRvdy53aW4ub24oJ2Nsb3NlZCcsIE1haW5XaW5kb3cub25DbG9zZSlcbiAgICB9XG5cbiAgICBzdGF0aWMgc3RhcnQoYXBwOiBFbGVjdHJvbi5BcHAsIG1vZGUgPSAnZGV2Jykge1xuICAgICAgICBhcHAud2hlblJlYWR5KCkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICBNYWluV2luZG93LmNyZWF0ZVdpbmRvdyhtb2RlKVxuICAgICAgICB9KVxuICAgICAgICBhcHAub24oJ3dpbmRvdy1hbGwtY2xvc2VkJywgTWFpbldpbmRvdy5vbldpbmRvd0FsbENsb3NlZClcbiAgICAgICAgYXBwLm9uKCdhY3RpdmF0ZScsICgpID0+IHtcbiAgICAgICAgICAgIGlmIChCcm93c2VyV2luZG93LmdldEFsbFdpbmRvd3MubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgTWFpbldpbmRvdy5jcmVhdGVXaW5kb3cobW9kZSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9XG59IiwiaW1wb3J0IHsgQnJvd3NlclZpZXcgfSBmcm9tICdlbGVjdHJvbidcblxuY29uc3QgZGVmYXVsdFByb3BzID0ge1xuICAgIHg6IDAsXG4gICAgeTogMCxcbiAgICBoZWlnaHQ6IDMwMCxcbiAgICB3aWR0aDogMzAwLFxuICAgIHdlYlByZWZlcmVuY2VzOiB7XG4gICAgICAgIGNvbnRleHRJc29sYXRpb246IHRydWVcbiAgICB9XG59XG5cbmludGVyZmFjZSBWaWV3UHJvcHMge1xuICAgIGZpbGU6IHN0cmluZyxcbiAgICBzZXR0aW5ncz86IHtcbiAgICAgICAgeDogbnVtYmVyLFxuICAgICAgICB5OiBudW1iZXIsXG4gICAgICAgIGhlaWdodDogbnVtYmVyLFxuICAgICAgICB3aWR0aDogbnVtYmVyLFxuICAgICAgICB3ZWJQcmVmZXJlbmNlczoge1xuICAgICAgICAgICAgY29udGV4dElzb2xhdGlvbjogYm9vbGVhblxuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBWaWV3IHtcbiAgICB2aWV3OiBFbGVjdHJvbi5Ccm93c2VyVmlld1xuICAgIGZpbGU6IHN0cmluZ1xuICAgIHNldHRpbmdzOiB0eXBlb2YgZGVmYXVsdFByb3BzIHwgdW5kZWZpbmVkXG5cbiAgICBjb25zdHJ1Y3Rvcih7IGZpbGUsIHNldHRpbmdzIH06IFZpZXdQcm9wcykge1xuICAgICAgICB0aGlzLnZpZXcgPSBuZXcgQnJvd3NlclZpZXcoKVxuICAgICAgICB0aGlzLmZpbGUgPSBmaWxlXG4gICAgICAgIHRoaXMuc2V0dGluZ3MgPSBzZXR0aW5nc1xuICAgIH1cblxuICAgIGNyZWF0ZShwYXJlbnQ6IEVsZWN0cm9uLkJyb3dzZXJXaW5kb3cpIHtcbiAgICAgICAgcGFyZW50LnNldEJyb3dzZXJWaWV3KHRoaXMudmlldylcbiAgICAgICAgdGhpcy52aWV3LnNldEJvdW5kcyh7IC4uLmRlZmF1bHRQcm9wcywgLi4udGhpcy5zZXR0aW5ncyB9KVxuICAgICAgICB0aGlzLnZpZXcud2ViQ29udGVudHMubG9hZFVSTCgnaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbScpXG4gICAgfVxufSIsImltcG9ydCB7IGFwcCB9IGZyb20gJ2VsZWN0cm9uJ1xuaW1wb3J0IE1haW5XaW5kb3cgZnJvbSAnLi9XaW5kb3dzL01haW5XaW5kb3cvTWFpbldpbmRvdydcbmltcG9ydCBWaWV3IGZyb20gJy4vV2luZG93cy9WaWV3L1ZpZXcnXG5cbk1haW5XaW5kb3cuc3RhcnQoYXBwKVxuXG5hcHAud2hlblJlYWR5KCkudGhlbigoKSA9PiB7XG4gICAgY29uc3QgdmlldyA9IG5ldyBWaWV3KHtmaWxlOiAnJ30pXG4gICAgdmlldy5jcmVhdGUoTWFpbldpbmRvdy53aW4hKVxufSkiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJlbGVjdHJvblwiKTs7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0aWYoX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSkge1xuXHRcdHJldHVybiBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9tYWluLnRzXCIpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==