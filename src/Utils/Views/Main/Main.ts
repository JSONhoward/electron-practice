import { BrowserWindow, ipcMain } from 'electron'

const defaultProps = {
    height: 600,
    width: 800,
    show: false,
    backgroundColor: '#2d2d2d',
    webPreferences: {
        nodeIntegration: true,
        contextIsolation: false
    }
}

export default class MainWindow {
    window: Electron.BrowserWindow | null = null
    App: Electron.App

    constructor(app: Electron.App) {
        this.App = app
    }

    private onWindowAllClosed() {
        if (process.platform !== 'darwin') {
            this.App.quit()
        }
    }

    private onClose() {
        this.window = null
    }

    private createWindow(mode: string) {
        this.window = new BrowserWindow({ ...defaultProps })
        this.window.loadFile('../index.html')
        mode !== 'prod' && this.window.webContents.openDevTools()
        this.window.on('ready-to-show', () => this.window?.show())
        this.window.on('closed', this.onClose)
    }

    private messaging() {
        ipcMain.on('test-message', (event, arg) => {
            console.log(arg)
            event.reply('test-message-reply', 'pong')
        })
    }

    async start(mode = 'dev') {
        await this.App.whenReady()

        this.createWindow(mode)
        this.messaging()
        this.App.on('window-all-closed', this.onWindowAllClosed)
        this.App.on('activate', () => {
            if (BrowserWindow.getAllWindows.length === 0) {
                this.createWindow(mode)
            }
        })
    }
}