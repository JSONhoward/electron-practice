/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Utils/Views/Main/Main.ts":
/*!**************************************!*\
  !*** ./src/Utils/Views/Main/Main.ts ***!
  \**************************************/
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
var Main_1 = __importDefault(__webpack_require__(/*! ./Utils/Views/Main/Main */ "./src/Utils/Views/Main/Main.ts"));
var MAIN = new Main_1.default(electron_1.app);
MAIN.start('dev');


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lbGVjdHJvbi1wcmFjdGljZS8uL3NyYy9VdGlscy9WaWV3cy9NYWluL01haW4udHMiLCJ3ZWJwYWNrOi8vZWxlY3Ryb24tcHJhY3RpY2UvLi9zcmMvbWFpbi50cyIsIndlYnBhY2s6Ly9lbGVjdHJvbi1wcmFjdGljZS9leHRlcm5hbCBcImVsZWN0cm9uXCIiLCJ3ZWJwYWNrOi8vZWxlY3Ryb24tcHJhY3RpY2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZWxlY3Ryb24tcHJhY3RpY2Uvd2VicGFjay9zdGFydHVwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsaUVBQWlEO0FBRWpELElBQU0sWUFBWSxHQUFHO0lBQ2pCLE1BQU0sRUFBRSxHQUFHO0lBQ1gsS0FBSyxFQUFFLEdBQUc7SUFDVixJQUFJLEVBQUUsS0FBSztJQUNYLGVBQWUsRUFBRSxTQUFTO0lBQzFCLGNBQWMsRUFBRTtRQUNaLGVBQWUsRUFBRSxJQUFJO1FBQ3JCLGdCQUFnQixFQUFFLEtBQUs7S0FDMUI7Q0FDSjtBQUVEO0lBSUksb0JBQVksR0FBaUI7UUFIN0IsV0FBTSxHQUFrQyxJQUFJO1FBSXhDLElBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRztJQUNsQixDQUFDO0lBRU8sc0NBQWlCLEdBQXpCO1FBQ0ksSUFBSSxPQUFPLENBQUMsUUFBUSxLQUFLLFFBQVEsRUFBRTtZQUMvQixJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRTtTQUNsQjtJQUNMLENBQUM7SUFFTyw0QkFBTyxHQUFmO1FBQ0ksSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJO0lBQ3RCLENBQUM7SUFFTyxpQ0FBWSxHQUFwQixVQUFxQixJQUFZO1FBQWpDLGlCQU1DO1FBTEcsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLHdCQUFhLGNBQU0sWUFBWSxFQUFHO1FBQ3BELElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLGVBQWUsQ0FBQztRQUNyQyxJQUFJLEtBQUssTUFBTSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLFlBQVksRUFBRTtRQUN6RCxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxlQUFlLEVBQUUsbUNBQU0sS0FBSSxDQUFDLE1BQU0sMENBQUUsSUFBSSxLQUFFLENBQUM7UUFDMUQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDMUMsQ0FBQztJQUVPLDhCQUFTLEdBQWpCO1FBQ0ksa0JBQU8sQ0FBQyxFQUFFLENBQUMsY0FBYyxFQUFFLFVBQUMsS0FBSyxFQUFFLEdBQUc7WUFDbEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUM7WUFDaEIsS0FBSyxDQUFDLEtBQUssQ0FBQyxvQkFBb0IsRUFBRSxNQUFNLENBQUM7UUFDN0MsQ0FBQyxDQUFDO0lBQ04sQ0FBQztJQUVLLDBCQUFLLEdBQVgsVUFBWSxJQUFZO1FBQVosbUNBQVk7Ozs7OzRCQUNwQixxQkFBTSxJQUFJLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBRTs7d0JBQTFCLFNBQTBCO3dCQUUxQixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQzt3QkFDdkIsSUFBSSxDQUFDLFNBQVMsRUFBRTt3QkFDaEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsbUJBQW1CLEVBQUUsSUFBSSxDQUFDLGlCQUFpQixDQUFDO3dCQUN4RCxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxVQUFVLEVBQUU7NEJBQ3BCLElBQUksd0JBQWEsQ0FBQyxhQUFhLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtnQ0FDMUMsS0FBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUM7NkJBQzFCO3dCQUNMLENBQUMsQ0FBQzs7Ozs7S0FDTDtJQUNMLGlCQUFDO0FBQUQsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxREQsaUVBQThCO0FBQzlCLG1IQUFnRDtBQUVoRCxJQUFNLElBQUksR0FBRyxJQUFJLGNBQVUsQ0FBQyxjQUFHLENBQUM7QUFDaEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUM7Ozs7Ozs7Ozs7O0FDSmpCLHNDOzs7Ozs7VUNBQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7OztVQ3JCQTtVQUNBO1VBQ0E7VUFDQSIsImZpbGUiOiJqcy9tYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQnJvd3NlcldpbmRvdywgaXBjTWFpbiB9IGZyb20gJ2VsZWN0cm9uJ1xuXG5jb25zdCBkZWZhdWx0UHJvcHMgPSB7XG4gICAgaGVpZ2h0OiA2MDAsXG4gICAgd2lkdGg6IDgwMCxcbiAgICBzaG93OiBmYWxzZSxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjMmQyZDJkJyxcbiAgICB3ZWJQcmVmZXJlbmNlczoge1xuICAgICAgICBub2RlSW50ZWdyYXRpb246IHRydWUsXG4gICAgICAgIGNvbnRleHRJc29sYXRpb246IGZhbHNlXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYWluV2luZG93IHtcbiAgICB3aW5kb3c6IEVsZWN0cm9uLkJyb3dzZXJXaW5kb3cgfCBudWxsID0gbnVsbFxuICAgIEFwcDogRWxlY3Ryb24uQXBwXG5cbiAgICBjb25zdHJ1Y3RvcihhcHA6IEVsZWN0cm9uLkFwcCkge1xuICAgICAgICB0aGlzLkFwcCA9IGFwcFxuICAgIH1cblxuICAgIHByaXZhdGUgb25XaW5kb3dBbGxDbG9zZWQoKSB7XG4gICAgICAgIGlmIChwcm9jZXNzLnBsYXRmb3JtICE9PSAnZGFyd2luJykge1xuICAgICAgICAgICAgdGhpcy5BcHAucXVpdCgpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIG9uQ2xvc2UoKSB7XG4gICAgICAgIHRoaXMud2luZG93ID0gbnVsbFxuICAgIH1cblxuICAgIHByaXZhdGUgY3JlYXRlV2luZG93KG1vZGU6IHN0cmluZykge1xuICAgICAgICB0aGlzLndpbmRvdyA9IG5ldyBCcm93c2VyV2luZG93KHsgLi4uZGVmYXVsdFByb3BzIH0pXG4gICAgICAgIHRoaXMud2luZG93LmxvYWRGaWxlKCcuLi9pbmRleC5odG1sJylcbiAgICAgICAgbW9kZSAhPT0gJ3Byb2QnICYmIHRoaXMud2luZG93LndlYkNvbnRlbnRzLm9wZW5EZXZUb29scygpXG4gICAgICAgIHRoaXMud2luZG93Lm9uKCdyZWFkeS10by1zaG93JywgKCkgPT4gdGhpcy53aW5kb3c/LnNob3coKSlcbiAgICAgICAgdGhpcy53aW5kb3cub24oJ2Nsb3NlZCcsIHRoaXMub25DbG9zZSlcbiAgICB9XG5cbiAgICBwcml2YXRlIG1lc3NhZ2luZygpIHtcbiAgICAgICAgaXBjTWFpbi5vbigndGVzdC1tZXNzYWdlJywgKGV2ZW50LCBhcmcpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGFyZylcbiAgICAgICAgICAgIGV2ZW50LnJlcGx5KCd0ZXN0LW1lc3NhZ2UtcmVwbHknLCAncG9uZycpXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgYXN5bmMgc3RhcnQobW9kZSA9ICdkZXYnKSB7XG4gICAgICAgIGF3YWl0IHRoaXMuQXBwLndoZW5SZWFkeSgpXG5cbiAgICAgICAgdGhpcy5jcmVhdGVXaW5kb3cobW9kZSlcbiAgICAgICAgdGhpcy5tZXNzYWdpbmcoKVxuICAgICAgICB0aGlzLkFwcC5vbignd2luZG93LWFsbC1jbG9zZWQnLCB0aGlzLm9uV2luZG93QWxsQ2xvc2VkKVxuICAgICAgICB0aGlzLkFwcC5vbignYWN0aXZhdGUnLCAoKSA9PiB7XG4gICAgICAgICAgICBpZiAoQnJvd3NlcldpbmRvdy5nZXRBbGxXaW5kb3dzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHRoaXMuY3JlYXRlV2luZG93KG1vZGUpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfVxufSIsImltcG9ydCB7IGFwcCB9IGZyb20gJ2VsZWN0cm9uJ1xuaW1wb3J0IE1haW5XaW5kb3cgZnJvbSAnLi9VdGlscy9WaWV3cy9NYWluL01haW4nXG5cbmNvbnN0IE1BSU4gPSBuZXcgTWFpbldpbmRvdyhhcHApXG5NQUlOLnN0YXJ0KCdkZXYnKSIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImVsZWN0cm9uXCIpOzsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHRpZihfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdKSB7XG5cdFx0cmV0dXJuIF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0uZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL21haW4udHNcIik7XG4iXSwic291cmNlUm9vdCI6IiJ9