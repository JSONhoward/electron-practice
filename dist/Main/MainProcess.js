"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var electron_1 = require("electron");
var Main = /** @class */ (function () {
    function Main() {
    }
    Main.onWindowAllClosed = function (app) {
        if (process.platform !== 'darwin') {
            app.quit();
        }
    };
    Main.onClose = function () {
        Main.win = null;
    };
    Main.createWindow = function () {
        Main.win = new electron_1.BrowserWindow({
            height: 600,
            width: 800,
            webPreferences: {
                nodeIntegration: true
            }
        });
        Main.win.loadFile('index.html');
        Main.win.on('closed', Main.onClose);
    };
    Main.start = function (app) {
        app.whenReady().then(Main.createWindow);
        app.on('window-all-closed', Main.onWindowAllClosed);
        app.on('activate', function () {
            if (electron_1.BrowserWindow.getAllWindows.length === 0) {
                Main.createWindow();
            }
        });
    };
    return Main;
}());
exports.default = Main;
//# sourceMappingURL=MainProcess.js.map