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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var electron_1 = __webpack_require__(/*! electron */ "electron");
var fs_1 = __importDefault(__webpack_require__(/*! fs */ "fs"));
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
    MainWindow.prototype.hotReload = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                fs_1.default.watch('../index.html').on('change', function () {
                    _this.App.relaunch();
                });
                return [2 /*return*/];
            });
        });
    };
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
var MAIN = new MainWindow_1.default(electron_1.app);
MAIN.start('prod');


/***/ }),

/***/ "electron":
/*!***************************!*\
  !*** external "electron" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("electron");;

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lbGVjdHJvbi1wcmFjdGljZS8uL3NyYy9WaWV3cy9NYWluV2luZG93L01haW5XaW5kb3cudHMiLCJ3ZWJwYWNrOi8vZWxlY3Ryb24tcHJhY3RpY2UvLi9zcmMvbWFpbi50cyIsIndlYnBhY2s6Ly9lbGVjdHJvbi1wcmFjdGljZS9leHRlcm5hbCBcImVsZWN0cm9uXCIiLCJ3ZWJwYWNrOi8vZWxlY3Ryb24tcHJhY3RpY2UvZXh0ZXJuYWwgXCJmc1wiIiwid2VicGFjazovL2VsZWN0cm9uLXByYWN0aWNlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2VsZWN0cm9uLXByYWN0aWNlL3dlYnBhY2svc3RhcnR1cCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGlFQUFpRDtBQUNqRCxnRUFBbUI7QUFFbkIsSUFBTSxZQUFZLEdBQUc7SUFDakIsTUFBTSxFQUFFLEdBQUc7SUFDWCxLQUFLLEVBQUUsR0FBRztJQUNWLElBQUksRUFBRSxLQUFLO0lBQ1gsZUFBZSxFQUFFLFNBQVM7SUFDMUIsY0FBYyxFQUFFO1FBQ1osZUFBZSxFQUFFLElBQUk7UUFDckIsZ0JBQWdCLEVBQUUsS0FBSztLQUMxQjtDQUNKO0FBRUQ7SUFJSSxvQkFBWSxHQUFpQjtRQUg3QixXQUFNLEdBQWtDLElBQUk7UUFJeEMsSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHO0lBQ2xCLENBQUM7SUFFYSw4QkFBUyxHQUF2Qjs7OztnQkFDSSxZQUFFLENBQUMsS0FBSyxDQUFDLGVBQWUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxRQUFRLEVBQUU7b0JBQ25DLEtBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFO2dCQUN2QixDQUFDLENBQUM7Ozs7S0FDTDtJQUVPLHNDQUFpQixHQUF6QjtRQUNJLElBQUksT0FBTyxDQUFDLFFBQVEsS0FBSyxRQUFRLEVBQUU7WUFDL0IsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUU7U0FDbEI7SUFDTCxDQUFDO0lBRU8sNEJBQU8sR0FBZjtRQUNJLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSTtJQUN0QixDQUFDO0lBRU8saUNBQVksR0FBcEIsVUFBcUIsSUFBWTtRQUFqQyxpQkFNQztRQUxHLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSx3QkFBYSxjQUFNLFlBQVksRUFBRztRQUNwRCxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUM7UUFDckMsSUFBSSxLQUFLLE1BQU0sSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxZQUFZLEVBQUU7UUFDekQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsZUFBZSxFQUFFLG1DQUFNLEtBQUksQ0FBQyxNQUFNLDBDQUFFLElBQUksS0FBRSxDQUFDO1FBQzFELElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQzFDLENBQUM7SUFFTyw4QkFBUyxHQUFqQjtRQUNJLGtCQUFPLENBQUMsRUFBRSxDQUFDLGNBQWMsRUFBRSxVQUFDLEtBQUssRUFBRSxHQUFHO1lBQ2xDLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDO1lBQ2hCLEtBQUssQ0FBQyxLQUFLLENBQUMsb0JBQW9CLEVBQUUsTUFBTSxDQUFDO1FBQzdDLENBQUMsQ0FBQztJQUNOLENBQUM7SUFFSywwQkFBSyxHQUFYLFVBQVksSUFBWTtRQUFaLG1DQUFZOzs7Ozs0QkFDcEIscUJBQU0sSUFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUU7O3dCQUExQixTQUEwQjt3QkFFMUIsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUM7d0JBQ3ZCLElBQUksQ0FBQyxTQUFTLEVBQUU7d0JBQ2hCLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLG1CQUFtQixFQUFFLElBQUksQ0FBQyxpQkFBaUIsQ0FBQzt3QkFDeEQsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsVUFBVSxFQUFFOzRCQUNwQixJQUFJLHdCQUFhLENBQUMsYUFBYSxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7Z0NBQzFDLEtBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDOzZCQUMxQjt3QkFDTCxDQUFDLENBQUM7Ozs7O0tBQ0w7SUFDTCxpQkFBQztBQUFELENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakVELGlFQUE4QjtBQUM5QixxSUFBc0Q7QUFFdEQsSUFBTSxJQUFJLEdBQUcsSUFBSSxvQkFBVSxDQUFDLGNBQUcsQ0FBQztBQUNoQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQzs7Ozs7Ozs7Ozs7QUNKbEIsc0M7Ozs7Ozs7Ozs7QUNBQSxnQzs7Ozs7O1VDQUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7VUNyQkE7VUFDQTtVQUNBO1VBQ0EiLCJmaWxlIjoianMvbWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJyb3dzZXJXaW5kb3csIGlwY01haW4gfSBmcm9tICdlbGVjdHJvbidcbmltcG9ydCBmcyBmcm9tICdmcydcblxuY29uc3QgZGVmYXVsdFByb3BzID0ge1xuICAgIGhlaWdodDogNjAwLFxuICAgIHdpZHRoOiA4MDAsXG4gICAgc2hvdzogZmFsc2UsXG4gICAgYmFja2dyb3VuZENvbG9yOiAnIzJkMmQyZCcsXG4gICAgd2ViUHJlZmVyZW5jZXM6IHtcbiAgICAgICAgbm9kZUludGVncmF0aW9uOiB0cnVlLFxuICAgICAgICBjb250ZXh0SXNvbGF0aW9uOiBmYWxzZVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWFpbldpbmRvdyB7XG4gICAgd2luZG93OiBFbGVjdHJvbi5Ccm93c2VyV2luZG93IHwgbnVsbCA9IG51bGxcbiAgICBBcHA6IEVsZWN0cm9uLkFwcFxuXG4gICAgY29uc3RydWN0b3IoYXBwOiBFbGVjdHJvbi5BcHApIHtcbiAgICAgICAgdGhpcy5BcHAgPSBhcHBcbiAgICB9XG5cbiAgICBwcml2YXRlIGFzeW5jIGhvdFJlbG9hZCgpIHtcbiAgICAgICAgZnMud2F0Y2goJy4uL2luZGV4Lmh0bWwnKS5vbignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5BcHAucmVsYXVuY2goKVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIHByaXZhdGUgb25XaW5kb3dBbGxDbG9zZWQoKSB7XG4gICAgICAgIGlmIChwcm9jZXNzLnBsYXRmb3JtICE9PSAnZGFyd2luJykge1xuICAgICAgICAgICAgdGhpcy5BcHAucXVpdCgpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIG9uQ2xvc2UoKSB7XG4gICAgICAgIHRoaXMud2luZG93ID0gbnVsbFxuICAgIH1cblxuICAgIHByaXZhdGUgY3JlYXRlV2luZG93KG1vZGU6IHN0cmluZykge1xuICAgICAgICB0aGlzLndpbmRvdyA9IG5ldyBCcm93c2VyV2luZG93KHsgLi4uZGVmYXVsdFByb3BzIH0pXG4gICAgICAgIHRoaXMud2luZG93LmxvYWRGaWxlKCcuLi9pbmRleC5odG1sJylcbiAgICAgICAgbW9kZSAhPT0gJ3Byb2QnICYmIHRoaXMud2luZG93LndlYkNvbnRlbnRzLm9wZW5EZXZUb29scygpXG4gICAgICAgIHRoaXMud2luZG93Lm9uKCdyZWFkeS10by1zaG93JywgKCkgPT4gdGhpcy53aW5kb3c/LnNob3coKSlcbiAgICAgICAgdGhpcy53aW5kb3cub24oJ2Nsb3NlZCcsIHRoaXMub25DbG9zZSlcbiAgICB9XG5cbiAgICBwcml2YXRlIG1lc3NhZ2luZygpIHtcbiAgICAgICAgaXBjTWFpbi5vbigndGVzdC1tZXNzYWdlJywgKGV2ZW50LCBhcmcpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGFyZylcbiAgICAgICAgICAgIGV2ZW50LnJlcGx5KCd0ZXN0LW1lc3NhZ2UtcmVwbHknLCAncG9uZycpXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgYXN5bmMgc3RhcnQobW9kZSA9ICdkZXYnKSB7XG4gICAgICAgIGF3YWl0IHRoaXMuQXBwLndoZW5SZWFkeSgpXG5cbiAgICAgICAgdGhpcy5jcmVhdGVXaW5kb3cobW9kZSlcbiAgICAgICAgdGhpcy5tZXNzYWdpbmcoKVxuICAgICAgICB0aGlzLkFwcC5vbignd2luZG93LWFsbC1jbG9zZWQnLCB0aGlzLm9uV2luZG93QWxsQ2xvc2VkKVxuICAgICAgICB0aGlzLkFwcC5vbignYWN0aXZhdGUnLCAoKSA9PiB7XG4gICAgICAgICAgICBpZiAoQnJvd3NlcldpbmRvdy5nZXRBbGxXaW5kb3dzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHRoaXMuY3JlYXRlV2luZG93KG1vZGUpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfVxufSIsImltcG9ydCB7IGFwcCB9IGZyb20gJ2VsZWN0cm9uJ1xuaW1wb3J0IE1haW5XaW5kb3cgZnJvbSAnLi9WaWV3cy9NYWluV2luZG93L01haW5XaW5kb3cnXG5cbmNvbnN0IE1BSU4gPSBuZXcgTWFpbldpbmRvdyhhcHApXG5NQUlOLnN0YXJ0KCdwcm9kJykiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJlbGVjdHJvblwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZnNcIik7OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdGlmKF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0pIHtcblx0XHRyZXR1cm4gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvbWFpbi50c1wiKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=