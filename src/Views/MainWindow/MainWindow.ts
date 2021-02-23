import { BrowserWindow } from 'electron'

const defaultProps = {
    height: 600,
    width: 800,
    show: false,
    webPreferences: {
        nodeIntegration: true,
        contextIsolation: false
    }
}

export default class MainWindow {
    static win: Electron.BrowserWindow | null

    private static onWindowAllClosed(app: Electron.App) {
        if (process.platform !== 'darwin') {
            app.quit()
        }
    }

    private static onClose() {
        MainWindow.win = null
    }

    private static createWindow(mode = 'prod') {
        MainWindow.win = new BrowserWindow({...defaultProps})
        MainWindow.win.loadFile('../index.html')
        mode !== 'prod' && MainWindow.win.webContents.openDevTools()
        MainWindow.win.on('ready-to-show', () => MainWindow.win?.show())
        MainWindow.win.on('closed', MainWindow.onClose)
    }

    static start(app: Electron.App, mode = 'dev') {
        app.whenReady().then(() => {
            MainWindow.createWindow(mode)
        })
        app.on('window-all-closed', MainWindow.onWindowAllClosed)
        app.on('activate', () => {
            if (BrowserWindow.getAllWindows.length === 0) {
                MainWindow.createWindow(mode)
            }
        })
    }
}