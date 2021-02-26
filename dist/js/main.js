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
var electron_1 = __webpack_require__(/*! electron */ "electron");
var defaultProps = {
    height: 600,
    width: 800,
    show: false,
    backgroundColor: '#2d2d2d',
    webPreferences: {
        nodeIntegration: true,
        contextIsolation: false
    }
};
var MainWindow = /** @class */ (function () {
    function MainWindow(app) {
        this.window = null;
        this.App = app;
    }
    MainWindow.prototype.onWindowAllClosed = function () {
        if (process.platform !== 'darwin') {
            this.App.quit();
        }
    };
    MainWindow.prototype.onClose = function () {
        this.window = null;
    };
    MainWindow.prototype.createWindow = function (mode) {
        var _this = this;
        this.window = new electron_1.BrowserWindow(__assign({}, defaultProps));
        this.window.loadFile('../index.html');
        mode !== 'prod' && this.window.webContents.openDevTools();
        this.window.on('ready-to-show', function () { var _a; return (_a = _this.window) === null || _a === void 0 ? void 0 : _a.show(); });
        this.window.on('closed', this.onClose);
    };
    MainWindow.prototype.messaging = function () {
        electron_1.ipcMain.on('test-message', function (event, arg) {
            console.log(arg);
            event.reply('test-message-reply', 'pong');
        });
    };
    MainWindow.prototype.start = function (mode) {
        if (mode === void 0) { mode = 'dev'; }
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.App.whenReady()];
                    case 1:
                        _a.sent();
                        this.createWindow(mode);
                        this.messaging();
                        this.App.on('window-all-closed', this.onWindowAllClosed);
                        this.App.on('activate', function () {
                            if (electron_1.BrowserWindow.getAllWindows.length === 0) {
                                _this.createWindow(mode);
                            }
                        });
                        return [2 /*return*/];
                }
            });
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
    backgroundColor: '#2d2d2d',
    webPreferences: {
        nodeIntegration: true,
        contextIsolation: false
    }
};
var defaultBounds = {
    x: 0,
    y: 0,
    height: 600,
    width: 300
};
var View = /** @class */ (function () {
    function View(_a) {
        var file = _a.file, settings = _a.settings, parentBounds = _a.parentBounds;
        this.view = new electron_1.BrowserView(__assign({}, defaultProps));
        this.file = file;
        this.settings = settings;
        this.parentBounds = parentBounds;
    }
    View.prototype.create = function (parent) {
        parent.setBrowserView(this.view);
        this.view.setBounds(__assign(__assign(__assign({}, defaultBounds), this.bounds), this.parentBounds));
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
var MAIN = new MainWindow_1.default(electron_1.app);
MAIN.start('prod').then(function () {
    var view = new View_1.default({
        file: '../leftPane.html',
        parentBounds: { height: 600 }
    });
    MAIN.window && view.create(MAIN.window);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lbGVjdHJvbi1wcmFjdGljZS8uL3NyYy9WaWV3cy9NYWluV2luZG93L01haW5XaW5kb3cudHMiLCJ3ZWJwYWNrOi8vZWxlY3Ryb24tcHJhY3RpY2UvLi9zcmMvVmlld3MvVmlldy9WaWV3LnRzIiwid2VicGFjazovL2VsZWN0cm9uLXByYWN0aWNlLy4vc3JjL21haW4udHMiLCJ3ZWJwYWNrOi8vZWxlY3Ryb24tcHJhY3RpY2UvZXh0ZXJuYWwgXCJlbGVjdHJvblwiIiwid2VicGFjazovL2VsZWN0cm9uLXByYWN0aWNlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2VsZWN0cm9uLXByYWN0aWNlL3dlYnBhY2svc3RhcnR1cCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGlFQUFpRDtBQUVqRCxJQUFNLFlBQVksR0FBRztJQUNqQixNQUFNLEVBQUUsR0FBRztJQUNYLEtBQUssRUFBRSxHQUFHO0lBQ1YsSUFBSSxFQUFFLEtBQUs7SUFDWCxlQUFlLEVBQUUsU0FBUztJQUMxQixjQUFjLEVBQUU7UUFDWixlQUFlLEVBQUUsSUFBSTtRQUNyQixnQkFBZ0IsRUFBRSxLQUFLO0tBQzFCO0NBQ0o7QUFFRDtJQUlJLG9CQUFZLEdBQWlCO1FBSDdCLFdBQU0sR0FBa0MsSUFBSTtRQUl4QyxJQUFJLENBQUMsR0FBRyxHQUFHLEdBQUc7SUFDbEIsQ0FBQztJQUVPLHNDQUFpQixHQUF6QjtRQUNJLElBQUksT0FBTyxDQUFDLFFBQVEsS0FBSyxRQUFRLEVBQUU7WUFDL0IsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUU7U0FDbEI7SUFDTCxDQUFDO0lBRU8sNEJBQU8sR0FBZjtRQUNJLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSTtJQUN0QixDQUFDO0lBRU8saUNBQVksR0FBcEIsVUFBcUIsSUFBWTtRQUFqQyxpQkFNQztRQUxH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aUVBQThCO0FBQzlCLHFJQUFzRDtBQUN0RCx1R0FBb0M7QUFFcEMsSUFBTSxJQUFJLEdBQUcsSUFBSSxvQkFBVSxDQUFDLGNBQUcsQ0FBQztBQUNoQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQztJQUNwQixJQUFNLElBQUksR0FBRyxJQUFJLGNBQUksQ0FBQztRQUNsQixJQUFJLEVBQUUsa0JBQWtCO1FBQ3hCLFlBQVksRUFBRSxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUU7S0FDaEMsQ0FBQztJQUNGLElBQUksQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO0FBQzNDLENBQUMsQ0FBQzs7Ozs7Ozs7Ozs7QUNYRixzQzs7Ozs7O1VDQUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7VUNyQkE7VUFDQTtVQUNBO1VBQ0EiLCJmaWxlIjoianMvbWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJyb3dzZXJXaW5kb3csIGlwY01haW4gfSBmcm9tICdlbGVjdHJvbidcblxuY29uc3QgZGVmYXVsdFByb3BzID0ge1xuICAgIGhlaWdodDogNjAwLFxuICAgIHdpZHRoOiA4MDAsXG4gICAgc2hvdzogZmFsc2UsXG4gICAgYmFja2dyb3VuZENvbG9yOiAnIzJkMmQyZCcsXG4gICAgd2ViUHJlZmVyZW5jZXM6IHtcbiAgICAgICAgbm9kZUludGVncmF0aW9uOiB0cnVlLFxuICAgICAgICBjb250ZXh0SXNvbGF0aW9uOiBmYWxzZVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWFpbldpbmRvdyB7XG4gICAgd2luZG93OiBFbGVjdHJvbi5Ccm93c2VyV2luZG93IHwgbnVsbCA9IG51bGxcbiAgICBBcHA6IEVsZWN0cm9uLkFwcFxuXG4gICAgY29uc3RydWN0b3IoYXBwOiBFbGVjdHJvbi5BcHApIHtcbiAgICAgICAgdGhpcy5BcHAgPSBhcHBcbiAgICB9XG5cbiAgICBwcml2YXRlIG9uV2luZG93QWxsQ2xvc2VkKCkge1xuICAgICAgICBpZiAocHJvY2Vzcy5wbGF0Zm9ybSAhPT0gJ2RhcndpbicpIHtcbiAgICAgICAgICAgIHRoaXMuQXBwLnF1aXQoKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBvbkNsb3NlKCkge1xuICAgICAgICB0aGlzLndpbmRvdyA9IG51bGxcbiAgICB9XG5cbiAgICBwcml2YXRlIGNyZWF0ZVdpbmRvdyhtb2RlOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy53aW5kb3cgPSBuZXcgQnJvd3NlcldpbmRvdyh7IC4uLmRlZmF1bHRQcm9wcyB9KVxuICAgICAgICB0aGlzLndpbmRvdy5sb2FkRmlsZSgnLi4vaW5kZXguaHRtbCcpXG4gICAgICAgIG1vZGUgIT09ICdwcm9kJyAmJiB0aGlzLndpbmRvdy53ZWJDb250ZW50cy5vcGVuRGV2VG9vbHMoKVxuICAgICAgICB0aGlzLndpbmRvdy5vbigncmVhZHktdG8tc2hvdycsICgpID0+IHRoaXMud2luZG93Py5zaG93KCkpXG4gICAgICAgIHRoaXMud2luZG93Lm9uKCdjbG9zZWQnLCB0aGlzLm9uQ2xvc2UpXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBtZXNzYWdpbmcoKSB7XG4gICAgICAgIGlwY01haW4ub24oJ3Rlc3QtbWVzc2FnZScsIChldmVudCwgYXJnKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhhcmcpXG4gICAgICAgICAgICBldmVudC5yZXBseSgndGVzdC1tZXNzYWdlLXJlcGx5JywgJ3BvbmcnKVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIGFzeW5jIHN0YXJ0KG1vZGUgPSAnZGV2Jykge1xuICAgICAgICBhd2FpdCB0aGlzLkFwcC53aGVuUmVhZHkoKVxuXG4gICAgICAgIHRoaXMuY3JlYXRlV2luZG93KG1vZGUpXG4gICAgICAgIHRoaXMubWVzc2FnaW5nKClcbiAgICAgICAgdGhpcy5BcHAub24oJ3dpbmRvdy1hbGwtY2xvc2VkJywgdGhpcy5vbldpbmRvd0FsbENsb3NlZClcbiAgICAgICAgdGhpcy5BcHAub24oJ2FjdGl2YXRlJywgKCkgPT4ge1xuICAgICAgICAgICAgaWYgKEJyb3dzZXJXaW5kb3cuZ2V0QWxsV2luZG93cy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNyZWF0ZVdpbmRvdyhtb2RlKVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH1cbn0iLCJpbXBvcnQgeyBCcm93c2VyVmlldyB9IGZyb20gJ2VsZWN0cm9uJ1xuXG5jb25zdCBkZWZhdWx0UHJvcHMgPSB7XG4gICAgYmFja2dyb3VuZENvbG9yOiAnIzJkMmQyZCcsXG4gICAgd2ViUHJlZmVyZW5jZXM6IHtcbiAgICAgICAgbm9kZUludGVncmF0aW9uOiB0cnVlLFxuICAgICAgICBjb250ZXh0SXNvbGF0aW9uOiBmYWxzZVxuICAgIH1cbn1cblxuY29uc3QgZGVmYXVsdEJvdW5kcyA9IHtcbiAgICB4OiAwLFxuICAgIHk6IDAsXG4gICAgaGVpZ2h0OiA2MDAsXG4gICAgd2lkdGg6IDMwMFxufVxuXG5pbnRlcmZhY2UgVmlld1Byb3BzIHtcbiAgICBmaWxlOiBzdHJpbmcsXG4gICAgc2V0dGluZ3M/OiB7XG4gICAgICAgIHdlYlByZWZlcmVuY2VzPzoge1xuICAgICAgICAgICAgbm9kZUludGVncmF0aW9uPzogYm9vbGVhbixcbiAgICAgICAgICAgIGNvbnRleHRJc29sYXRpb24/OiBib29sZWFuXG4gICAgICAgIH1cbiAgICB9LFxuICAgIGJvdW5kcz86IHtcbiAgICAgICAgeD86IG51bWJlcixcbiAgICAgICAgeT86IG51bWJlcixcbiAgICAgICAgaGVpZ2h0PzogbnVtYmVyLFxuICAgICAgICB3aWR0aD86IG51bWJlclxuICAgIH0sXG4gICAgcGFyZW50Qm91bmRzPzoge1xuICAgICAgICB4PzogbnVtYmVyLFxuICAgICAgICB5PzogbnVtYmVyLFxuICAgICAgICBoZWlnaHQ/OiBudW1iZXIsXG4gICAgICAgIHdpZHRoPzogbnVtYmVyXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBWaWV3IHtcbiAgICB2aWV3OiBFbGVjdHJvbi5Ccm93c2VyVmlld1xuICAgIGZpbGU6IHN0cmluZ1xuICAgIHNldHRpbmdzOiBWaWV3UHJvcHNbJ3NldHRpbmdzJ10gfCB1bmRlZmluZWRcbiAgICBib3VuZHM6IFZpZXdQcm9wc1sncGFyZW50Qm91bmRzJ10gfCB1bmRlZmluZWRcbiAgICBwYXJlbnRCb3VuZHM6IFZpZXdQcm9wc1sncGFyZW50Qm91bmRzJ10gfCB1bmRlZmluZWRcblxuICAgIGNvbnN0cnVjdG9yKHsgZmlsZSwgc2V0dGluZ3MsIHBhcmVudEJvdW5kcyB9OiBWaWV3UHJvcHMpIHtcbiAgICAgICAgdGhpcy52aWV3ID0gbmV3IEJyb3dzZXJWaWV3KHsuLi5kZWZhdWx0UHJvcHN9KVxuICAgICAgICB0aGlzLmZpbGUgPSBmaWxlXG4gICAgICAgIHRoaXMuc2V0dGluZ3MgPSBzZXR0aW5nc1xuICAgICAgICB0aGlzLnBhcmVudEJvdW5kcyA9IHBhcmVudEJvdW5kc1xuICAgIH1cblxuICAgIGNyZWF0ZShwYXJlbnQ6IEVsZWN0cm9uLkJyb3dzZXJXaW5kb3cpIHtcbiAgICAgICAgcGFyZW50LnNldEJyb3dzZXJWaWV3KHRoaXMudmlldylcbiAgICAgICAgdGhpcy52aWV3LnNldEJvdW5kcyh7IC4uLmRlZmF1bHRCb3VuZHMsIC4uLnRoaXMuYm91bmRzLCAuLi50aGlzLnBhcmVudEJvdW5kcyB9KVxuICAgICAgICB0aGlzLnZpZXcuc2V0QXV0b1Jlc2l6ZSh7IGhlaWdodDogdHJ1ZSwgd2lkdGg6IGZhbHNlLCB2ZXJ0aWNhbDogdHJ1ZSwgaG9yaXpvbnRhbDogZmFsc2UgfSlcbiAgICAgICAgdGhpcy52aWV3LndlYkNvbnRlbnRzLmxvYWRGaWxlKHRoaXMuZmlsZSlcbiAgICB9XG59IiwiaW1wb3J0IHsgYXBwIH0gZnJvbSAnZWxlY3Ryb24nXG5pbXBvcnQgTWFpbldpbmRvdyBmcm9tICcuL1ZpZXdzL01haW5XaW5kb3cvTWFpbldpbmRvdydcbmltcG9ydCBWaWV3IGZyb20gJy4vVmlld3MvVmlldy9WaWV3J1xuXG5jb25zdCBNQUlOID0gbmV3IE1haW5XaW5kb3coYXBwKVxuTUFJTi5zdGFydCgncHJvZCcpLnRoZW4oKCkgPT4ge1xuICAgIGNvbnN0IHZpZXcgPSBuZXcgVmlldyh7XG4gICAgICAgIGZpbGU6ICcuLi9sZWZ0UGFuZS5odG1sJyxcbiAgICAgICAgcGFyZW50Qm91bmRzOiB7IGhlaWdodDogNjAwIH1cbiAgICB9KVxuICAgIE1BSU4ud2luZG93ICYmIHZpZXcuY3JlYXRlKE1BSU4ud2luZG93KVxufSlcblxuXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJlbGVjdHJvblwiKTs7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0aWYoX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSkge1xuXHRcdHJldHVybiBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9tYWluLnRzXCIpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==