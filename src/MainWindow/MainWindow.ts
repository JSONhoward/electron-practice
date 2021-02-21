import { BrowserWindow } from 'electron'

const defaultProps = {
    height: 600,
    width: 800,
    webPreferences: {
        nodeIntegration: true
    }
}

export default class MainWindow {
    static win: Electron.BrowserWindow | null

    private static onWindowAllClosed(app: Electron.App) {
        if (process.platform !== 'darwin') {
            app.quit();
        }
    }

    private static onClose() {
        MainWindow.win = null
    }

    private static createWindow() {
        MainWindow.win = new BrowserWindow({...defaultProps})
        MainWindow.win.loadFile('index.html')
        MainWindow.win.on('closed', MainWindow.onClose)
    }

    static start(app: Electron.App) {
        app.whenReady().then(MainWindow.createWindow)
        app.on('window-all-closed', MainWindow.onWindowAllClosed)
        app.on('activate', () => {
            if (BrowserWindow.getAllWindows.length === 0) {
                MainWindow.createWindow()
            }
        })
    }
}