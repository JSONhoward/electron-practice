/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Views/MainWindow/MainWindow.ts":
/*!********************************************!*\
  !*** ./src/Views/MainWindow/MainWindow.ts ***!
  \********************************************/
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

/***/ "./src/Views/View/View.ts":
/*!********************************!*\
  !*** ./src/Views/View/View.ts ***!
  \********************************/
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
        var file = _a.file, settings = _a.settings, parentBounds = _a.parentBounds;
        this.view = new electron_1.BrowserView();
        this.file = file;
        this.settings = settings;
        this.parentBounds = parentBounds;
    }
    View.prototype.create = function (parent) {
        parent.setBrowserView(this.view);
        this.view.setBounds(__assign(__assign(__assign({}, defaultProps), this.settings), this.parentBounds));
        this.view.setAutoResize({ height: true, width: false, vertical: true, horizontal: false });
        this.view.webContents.loadFile(this.file);
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
var MainWindow_1 = __importDefault(__webpack_require__(/*! ./Views/MainWindow/MainWindow */ "./src/Views/MainWindow/MainWindow.ts"));
var View_1 = __importDefault(__webpack_require__(/*! ./Views/View/View */ "./src/Views/View/View.ts"));
MainWindow_1.default.start(electron_1.app);
electron_1.app.whenReady().then(function () {
    var view = new View_1.default({
        file: './Components/Child/child.html',
        parentBounds: { height: MainWindow_1.default.win.getBounds().height }
    });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lbGVjdHJvbi1wcmFjdGljZS8uL3NyYy9WaWV3cy9NYWluV2luZG93L01haW5XaW5kb3cudHMiLCJ3ZWJwYWNrOi8vZWxlY3Ryb24tcHJhY3RpY2UvLi9zcmMvVmlld3MvVmlldy9WaWV3LnRzIiwid2VicGFjazovL2VsZWN0cm9uLXByYWN0aWNlLy4vc3JjL21haW4udHMiLCJ3ZWJwYWNrOi8vZWxlY3Ryb24tcHJhY3RpY2UvZXh0ZXJuYWwgXCJlbGVjdHJvblwiIiwid2VicGFjazovL2VsZWN0cm9uLXByYWN0aWNlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2VsZWN0cm9uLXByYWN0aWNlL3dlYnBhY2svc3RhcnR1cCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGlFQUF3QztBQUV4QyxJQUFNLFlBQVksR0FBRztJQUNqQixNQUFNLEVBQUUsR0FBRztJQUNYLEtBQUssRUFBRSxHQUFHO0lBQ1YsSUFBSSxFQUFFLEtBQUs7SUFDWCxjQUFjLEVBQUU7UUFDWixlQUFlLEVBQUUsSUFBSTtRQUNyQixnQkFBZ0IsRUFBRSxLQUFLO0tBQzFCO0NBQ0o7QUFFRDtJQUFBO0lBZ0NBLENBQUM7SUE3QmtCLDRCQUFpQixHQUFoQyxVQUFpQyxHQUFpQjtRQUM5QyxJQUFJLE9BQU8sQ0FBQyxRQUFRLEtBQUssUUFBUSxFQUFFO1lBQy9CLEdBQUcsQ0FBQyxJQUFJLEVBQUU7U0FDYjtJQUNMLENBQUM7SUFFYyxrQkFBTyxHQUF0QjtRQUNJLFVBQVUsQ0FBQyxHQUFHLEdBQUcsSUFBSTtJQUN6QixDQUFDO0lBRWMsdUJBQVksR0FBM0IsVUFBNEIsSUFBYTtRQUFiLG9DQUFhO1FBQ3JDLFVBQVUsQ0FBQyxHQUFHLEdBQUcsSUFBSSx3QkFBYSxjQUFLLFlBQVksRUFBRTtRQUNyRCxVQUFVLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUM7UUFDeEMsSUFBSSxLQUFLLE1BQU0sSUFB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O1VBRUE7VUFDQTtVQUNBOzs7O1VDckJBO1VBQ0E7VUFDQTtVQUNBIiwiZmlsZSI6ImpzL21haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCcm93c2VyV2luZG93IH0gZnJvbSAnZWxlY3Ryb24nXG5cbmNvbnN0IGRlZmF1bHRQcm9wcyA9IHtcbiAgICBoZWlnaHQ6IDYwMCxcbiAgICB3aWR0aDogODAwLFxuICAgIHNob3c6IGZhbHNlLFxuICAgIHdlYlByZWZlcmVuY2VzOiB7XG4gICAgICAgIG5vZGVJbnRlZ3JhdGlvbjogdHJ1ZSxcbiAgICAgICAgY29udGV4dElzb2xhdGlvbjogZmFsc2VcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1haW5XaW5kb3cge1xuICAgIHN0YXRpYyB3aW46IEVsZWN0cm9uLkJyb3dzZXJXaW5kb3cgfCBudWxsXG5cbiAgICBwcml2YXRlIHN0YXRpYyBvbldpbmRvd0FsbENsb3NlZChhcHA6IEVsZWN0cm9uLkFwcCkge1xuICAgICAgICBpZiAocHJvY2Vzcy5wbGF0Zm9ybSAhPT0gJ2RhcndpbicpIHtcbiAgICAgICAgICAgIGFwcC5xdWl0KClcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgc3RhdGljIG9uQ2xvc2UoKSB7XG4gICAgICAgIE1haW5XaW5kb3cud2luID0gbnVsbFxuICAgIH1cblxuICAgIHByaXZhdGUgc3RhdGljIGNyZWF0ZVdpbmRvdyhtb2RlID0gJ3Byb2QnKSB7XG4gICAgICAgIE1haW5XaW5kb3cud2luID0gbmV3IEJyb3dzZXJXaW5kb3coey4uLmRlZmF1bHRQcm9wc30pXG4gICAgICAgIE1haW5XaW5kb3cud2luLmxvYWRGaWxlKCcuLi9pbmRleC5odG1sJylcbiAgICAgICAgbW9kZSAhPT0gJ3Byb2QnICYmIE1haW5XaW5kb3cud2luLndlYkNvbnRlbnRzLm9wZW5EZXZUb29scygpXG4gICAgICAgIE1haW5XaW5kb3cud2luLm9uKCdyZWFkeS10by1zaG93JywgKCkgPT4gTWFpbldpbmRvdy53aW4/LnNob3coKSlcbiAgICAgICAgTWFpbldpbmRvdy53aW4ub24oJ2Nsb3NlZCcsIE1haW5XaW5kb3cub25DbG9zZSlcbiAgICB9XG5cbiAgICBzdGF0aWMgc3RhcnQoYXBwOiBFbGVjdHJvbi5BcHAsIG1vZGUgPSAnZGV2Jykge1xuICAgICAgICBhcHAud2hlblJlYWR5KCkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICBNYWluV2luZG93LmNyZWF0ZVdpbmRvdyhtb2RlKVxuICAgICAgICB9KVxuICAgICAgICBhcHAub24oJ3dpbmRvdy1hbGwtY2xvc2VkJywgTWFpbldpbmRvdy5vbldpbmRvd0FsbENsb3NlZClcbiAgICAgICAgYXBwLm9uKCdhY3RpdmF0ZScsICgpID0+IHtcbiAgICAgICAgICAgIGlmIChCcm93c2VyV2luZG93LmdldEFsbFdpbmRvd3MubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgTWFpbldpbmRvdy5jcmVhdGVXaW5kb3cobW9kZSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9XG59IiwiaW1wb3J0IHsgQnJvd3NlclZpZXcgfSBmcm9tICdlbGVjdHJvbidcblxuY29uc3QgZGVmYXVsdFByb3BzID0ge1xuICAgIHg6IDAsXG4gICAgeTogMCxcbiAgICBoZWlnaHQ6IDMwMCxcbiAgICB3aWR0aDogMzAwLFxuICAgIHdlYlByZWZlcmVuY2VzOiB7XG4gICAgICAgIGNvbnRleHRJc29sYXRpb246IHRydWVcbiAgICB9XG59XG5cbmludGVyZmFjZSBWaWV3UHJvcHMge1xuICAgIGZpbGU6IHN0cmluZyxcbiAgICBzZXR0aW5ncz86IHtcbiAgICAgICAgeDogbnVtYmVyLFxuICAgICAgICB5OiBudW1iZXIsXG4gICAgICAgIGhlaWdodDogbnVtYmVyLFxuICAgICAgICB3aWR0aDogbnVtYmVyLFxuICAgICAgICB3ZWJQcmVmZXJlbmNlczoge1xuICAgICAgICAgICAgY29udGV4dElzb2xhdGlvbjogYm9vbGVhblxuICAgICAgICB9XG4gICAgfSxcbiAgICBwYXJlbnRCb3VuZHM/OiB7XG4gICAgICAgIHg/OiBudW1iZXIsXG4gICAgICAgIHk/OiBudW1iZXIsXG4gICAgICAgIGhlaWdodD86IG51bWJlcixcbiAgICAgICAgd2lkdGg/OiBudW1iZXJcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFZpZXcge1xuICAgIHZpZXc6IEVsZWN0cm9uLkJyb3dzZXJWaWV3XG4gICAgZmlsZTogc3RyaW5nXG4gICAgc2V0dGluZ3M6IHR5cGVvZiBkZWZhdWx0UHJvcHMgfCB1bmRlZmluZWRcbiAgICBwYXJlbnRCb3VuZHM6IFZpZXdQcm9wc1sncGFyZW50Qm91bmRzJ10gfCB1bmRlZmluZWRcblxuICAgIGNvbnN0cnVjdG9yKHsgZmlsZSwgc2V0dGluZ3MsIHBhcmVudEJvdW5kcyB9OiBWaWV3UHJvcHMpIHtcbiAgICAgICAgdGhpcy52aWV3ID0gbmV3IEJyb3dzZXJWaWV3KClcbiAgICAgICAgdGhpcy5maWxlID0gZmlsZVxuICAgICAgICB0aGlzLnNldHRpbmdzID0gc2V0dGluZ3NcbiAgICAgICAgdGhpcy5wYXJlbnRCb3VuZHMgPSBwYXJlbnRCb3VuZHNcbiAgICB9XG5cbiAgICBjcmVhdGUocGFyZW50OiBFbGVjdHJvbi5Ccm93c2VyV2luZG93KSB7XG4gICAgICAgIHBhcmVudC5zZXRCcm93c2VyVmlldyh0aGlzLnZpZXcpXG4gICAgICAgIHRoaXMudmlldy5zZXRCb3VuZHMoeyAuLi5kZWZhdWx0UHJvcHMsIC4uLnRoaXMuc2V0dGluZ3MsIC4uLnRoaXMucGFyZW50Qm91bmRzfSlcbiAgICAgICAgdGhpcy52aWV3LnNldEF1dG9SZXNpemUoe2hlaWdodDogdHJ1ZSwgd2lkdGg6IGZhbHNlLCB2ZXJ0aWNhbDogdHJ1ZSwgaG9yaXpvbnRhbDogZmFsc2V9KVxuICAgICAgICB0aGlzLnZpZXcud2ViQ29udGVudHMubG9hZEZpbGUodGhpcy5maWxlKVxuICAgIH1cbn0iLCJpbXBvcnQgeyBhcHAgfSBmcm9tICdlbGVjdHJvbidcbmltcG9ydCBNYWluV2luZG93IGZyb20gJy4vVmlld3MvTWFpbldpbmRvdy9NYWluV2luZG93J1xuaW1wb3J0IFZpZXcgZnJvbSAnLi9WaWV3cy9WaWV3L1ZpZXcnXG5cbk1haW5XaW5kb3cuc3RhcnQoYXBwKVxuXG5hcHAud2hlblJlYWR5KCkudGhlbigoKSA9PiB7XG4gICAgY29uc3QgdmlldyA9IG5ldyBWaWV3KHtcbiAgICAgICAgZmlsZTogJy4vQ29tcG9uZW50cy9DaGlsZC9jaGlsZC5odG1sJyxcbiAgICAgICAgcGFyZW50Qm91bmRzOiB7aGVpZ2h0OiBNYWluV2luZG93LndpbiEuZ2V0Qm91bmRzKCkuaGVpZ2h0fVxuICAgIH0pXG4gICAgdmlldy5jcmVhdGUoTWFpbldpbmRvdy53aW4hKVxufSkiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJlbGVjdHJvblwiKTs7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0aWYoX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSkge1xuXHRcdHJldHVybiBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9tYWluLnRzXCIpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==