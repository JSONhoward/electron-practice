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
        file: '../child.html',
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lbGVjdHJvbi1wcmFjdGljZS8uL3NyYy9WaWV3cy9NYWluV2luZG93L01haW5XaW5kb3cudHMiLCJ3ZWJwYWNrOi8vZWxlY3Ryb24tcHJhY3RpY2UvLi9zcmMvVmlld3MvVmlldy9WaWV3LnRzIiwid2VicGFjazovL2VsZWN0cm9uLXByYWN0aWNlLy4vc3JjL21haW4udHMiLCJ3ZWJwYWNrOi8vZWxlY3Ryb24tcHJhY3RpY2UvZXh0ZXJuYWwgXCJlbGVjdHJvblwiIiwid2VicGFjazovL2VsZWN0cm9uLXByYWN0aWNlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2VsZWN0cm9uLXByYWN0aWNlL3dlYnBhY2svc3RhcnR1cCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGlFQUFpRDtBQUVqRCxJQUFNLFlBQVksR0FBRztJQUNqQixNQUFNLEVBQUUsR0FBRztJQUNYLEtBQUssRUFBRSxHQUFHO0lBQ1YsSUFBSSxFQUFFLEtBQUs7SUFDWCxjQUFjLEVBQUU7UUFDWixlQUFlLEVBQUUsSUFBSTtRQUNyQixnQkFBZ0IsRUFBRSxLQUFLO0tBQzFCO0NBQ0o7QUFFRDtJQUlJLG9CQUFZLEdBQWlCO1FBSDdCLFdBQU0sR0FBa0MsSUFBSTtRQUl4QyxJQUFJLENBQUMsR0FBRyxHQUFHLEdBQUc7SUFDbEIsQ0FBQztJQUVPLHNDQUFpQixHQUF6QjtRQUNJLElBQUksT0FBTyxDQUFDLFFBQVEsS0FBSyxRQUFRLEVBQUU7WUFDL0IsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUU7U0FDbEI7SUFDTCxDQUFDO0lBRU8sNEJBQU8sR0FBZjtRQUNJLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSTtJQUN0QixDQUFDO0lBRU8saUNBQVksR0FBcEIsVUFBcUIsSUFBWTtRQUFqQyxpQkFNQztRQUxHLElBQUksQ0FBQyxNQUFNLEdBQUcs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TSxJQUFJLEdBQUcsSUFBSSxvQkFBVSxDQUFDLGNBQUcsQ0FBQztBQUNoQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQztJQUNwQixJQUFNLElBQUksR0FBRyxJQUFJLGNBQUksQ0FBQztRQUNsQixJQUFJLEVBQUUsZUFBZTtRQUNyQixZQUFZLEVBQUUsRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFO0tBQ2hDLENBQUM7SUFDRixJQUFJLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztBQUMzQyxDQUFDLENBQUM7Ozs7Ozs7Ozs7O0FDWEYsc0M7Ozs7OztVQ0FBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7O1VDckJBO1VBQ0E7VUFDQTtVQUNBIiwiZmlsZSI6ImpzL21haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCcm93c2VyV2luZG93LCBpcGNNYWluIH0gZnJvbSAnZWxlY3Ryb24nXG5cbmNvbnN0IGRlZmF1bHRQcm9wcyA9IHtcbiAgICBoZWlnaHQ6IDYwMCxcbiAgICB3aWR0aDogODAwLFxuICAgIHNob3c6IGZhbHNlLFxuICAgIHdlYlByZWZlcmVuY2VzOiB7XG4gICAgICAgIG5vZGVJbnRlZ3JhdGlvbjogdHJ1ZSxcbiAgICAgICAgY29udGV4dElzb2xhdGlvbjogZmFsc2VcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1haW5XaW5kb3cge1xuICAgIHdpbmRvdzogRWxlY3Ryb24uQnJvd3NlcldpbmRvdyB8IG51bGwgPSBudWxsXG4gICAgQXBwOiBFbGVjdHJvbi5BcHBcblxuICAgIGNvbnN0cnVjdG9yKGFwcDogRWxlY3Ryb24uQXBwKSB7XG4gICAgICAgIHRoaXMuQXBwID0gYXBwXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBvbldpbmRvd0FsbENsb3NlZCgpIHtcbiAgICAgICAgaWYgKHByb2Nlc3MucGxhdGZvcm0gIT09ICdkYXJ3aW4nKSB7XG4gICAgICAgICAgICB0aGlzLkFwcC5xdWl0KClcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgb25DbG9zZSgpIHtcbiAgICAgICAgdGhpcy53aW5kb3cgPSBudWxsXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBjcmVhdGVXaW5kb3cobW9kZTogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMud2luZG93ID0gbmV3IEJyb3dzZXJXaW5kb3coeyAuLi5kZWZhdWx0UHJvcHMgfSlcbiAgICAgICAgdGhpcy53aW5kb3cubG9hZEZpbGUoJy4uL2luZGV4Lmh0bWwnKVxuICAgICAgICBtb2RlICE9PSAncHJvZCcgJiYgdGhpcy53aW5kb3cud2ViQ29udGVudHMub3BlbkRldlRvb2xzKClcbiAgICAgICAgdGhpcy53aW5kb3cub24oJ3JlYWR5LXRvLXNob3cnLCAoKSA9PiB0aGlzLndpbmRvdz8uc2hvdygpKVxuICAgICAgICB0aGlzLndpbmRvdy5vbignY2xvc2VkJywgdGhpcy5vbkNsb3NlKVxuICAgIH1cblxuICAgIHByaXZhdGUgbWVzc2FnaW5nKCkge1xuICAgICAgICBpcGNNYWluLm9uKCd0ZXN0LW1lc3NhZ2UnLCAoZXZlbnQsIGFyZykgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coYXJnKVxuICAgICAgICAgICAgZXZlbnQucmVwbHkoJ3Rlc3QtbWVzc2FnZS1yZXBseScsICdwb25nJylcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBhc3luYyBzdGFydChtb2RlID0gJ2RldicpIHtcbiAgICAgICAgYXdhaXQgdGhpcy5BcHAud2hlblJlYWR5KClcblxuICAgICAgICB0aGlzLmNyZWF0ZVdpbmRvdyhtb2RlKVxuICAgICAgICB0aGlzLm1lc3NhZ2luZygpXG4gICAgICAgIHRoaXMuQXBwLm9uKCd3aW5kb3ctYWxsLWNsb3NlZCcsIHRoaXMub25XaW5kb3dBbGxDbG9zZWQpXG4gICAgICAgIHRoaXMuQXBwLm9uKCdhY3RpdmF0ZScsICgpID0+IHtcbiAgICAgICAgICAgIGlmIChCcm93c2VyV2luZG93LmdldEFsbFdpbmRvd3MubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jcmVhdGVXaW5kb3cobW9kZSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9XG59IiwiaW1wb3J0IHsgQnJvd3NlclZpZXcgfSBmcm9tICdlbGVjdHJvbidcblxuY29uc3QgZGVmYXVsdFByb3BzID0ge1xuICAgIHdlYlByZWZlcmVuY2VzOiB7XG4gICAgICAgIG5vZGVJbnRlZ3JhdGlvbjogdHJ1ZSxcbiAgICAgICAgY29udGV4dElzb2xhdGlvbjogZmFsc2VcbiAgICB9XG59XG5cbmNvbnN0IGRlZmF1bHRCb3VuZHMgPSB7XG4gICAgeDogMCxcbiAgICB5OiAwLFxuICAgIGhlaWdodDogNjAwLFxuICAgIHdpZHRoOiAzMDBcbn1cblxuaW50ZXJmYWNlIFZpZXdQcm9wcyB7XG4gICAgZmlsZTogc3RyaW5nLFxuICAgIHNldHRpbmdzPzoge1xuICAgICAgICB3ZWJQcmVmZXJlbmNlcz86IHtcbiAgICAgICAgICAgIG5vZGVJbnRlZ3JhdGlvbj86IGJvb2xlYW4sXG4gICAgICAgICAgICBjb250ZXh0SXNvbGF0aW9uPzogYm9vbGVhblxuICAgICAgICB9XG4gICAgfSxcbiAgICBib3VuZHM/OiB7XG4gICAgICAgIHg/OiBudW1iZXIsXG4gICAgICAgIHk/OiBudW1iZXIsXG4gICAgICAgIGhlaWdodD86IG51bWJlcixcbiAgICAgICAgd2lkdGg/OiBudW1iZXJcbiAgICB9LFxuICAgIHBhcmVudEJvdW5kcz86IHtcbiAgICAgICAgeD86IG51bWJlcixcbiAgICAgICAgeT86IG51bWJlcixcbiAgICAgICAgaGVpZ2h0PzogbnVtYmVyLFxuICAgICAgICB3aWR0aD86IG51bWJlclxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVmlldyB7XG4gICAgdmlldzogRWxlY3Ryb24uQnJvd3NlclZpZXdcbiAgICBmaWxlOiBzdHJpbmdcbiAgICBzZXR0aW5nczogVmlld1Byb3BzWydzZXR0aW5ncyddIHwgdW5kZWZpbmVkXG4gICAgYm91bmRzOiBWaWV3UHJvcHNbJ3BhcmVudEJvdW5kcyddIHwgdW5kZWZpbmVkXG4gICAgcGFyZW50Qm91bmRzOiBWaWV3UHJvcHNbJ3BhcmVudEJvdW5kcyddIHwgdW5kZWZpbmVkXG5cbiAgICBjb25zdHJ1Y3Rvcih7IGZpbGUsIHNldHRpbmdzLCBwYXJlbnRCb3VuZHMgfTogVmlld1Byb3BzKSB7XG4gICAgICAgIHRoaXMudmlldyA9IG5ldyBCcm93c2VyVmlldyh7Li4uZGVmYXVsdFByb3BzfSlcbiAgICAgICAgdGhpcy5maWxlID0gZmlsZVxuICAgICAgICB0aGlzLnNldHRpbmdzID0gc2V0dGluZ3NcbiAgICAgICAgdGhpcy5wYXJlbnRCb3VuZHMgPSBwYXJlbnRCb3VuZHNcbiAgICB9XG5cbiAgICBjcmVhdGUocGFyZW50OiBFbGVjdHJvbi5Ccm93c2VyV2luZG93KSB7XG4gICAgICAgIHBhcmVudC5zZXRCcm93c2VyVmlldyh0aGlzLnZpZXcpXG4gICAgICAgIHRoaXMudmlldy5zZXRCb3VuZHMoeyAuLi5kZWZhdWx0Qm91bmRzLCAuLi50aGlzLmJvdW5kcywgLi4udGhpcy5wYXJlbnRCb3VuZHMgfSlcbiAgICAgICAgdGhpcy52aWV3LnNldEF1dG9SZXNpemUoeyBoZWlnaHQ6IHRydWUsIHdpZHRoOiBmYWxzZSwgdmVydGljYWw6IHRydWUsIGhvcml6b250YWw6IGZhbHNlIH0pXG4gICAgICAgIHRoaXMudmlldy53ZWJDb250ZW50cy5sb2FkRmlsZSh0aGlzLmZpbGUpXG4gICAgfVxufSIsImltcG9ydCB7IGFwcCB9IGZyb20gJ2VsZWN0cm9uJ1xuaW1wb3J0IE1haW5XaW5kb3cgZnJvbSAnLi9WaWV3cy9NYWluV2luZG93L01haW5XaW5kb3cnXG5pbXBvcnQgVmlldyBmcm9tICcuL1ZpZXdzL1ZpZXcvVmlldydcblxuY29uc3QgTUFJTiA9IG5ldyBNYWluV2luZG93KGFwcClcbk1BSU4uc3RhcnQoJ3Byb2QnKS50aGVuKCgpID0+IHtcbiAgICBjb25zdCB2aWV3ID0gbmV3IFZpZXcoe1xuICAgICAgICBmaWxlOiAnLi4vY2hpbGQuaHRtbCcsXG4gICAgICAgIHBhcmVudEJvdW5kczogeyBoZWlnaHQ6IDYwMCB9XG4gICAgfSlcbiAgICBNQUlOLndpbmRvdyAmJiB2aWV3LmNyZWF0ZShNQUlOLndpbmRvdylcbn0pXG5cblxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZWxlY3Ryb25cIik7OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdGlmKF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0pIHtcblx0XHRyZXR1cm4gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvbWFpbi50c1wiKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=