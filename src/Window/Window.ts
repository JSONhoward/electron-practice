import { BrowserWindow } from 'electron'

const defaultProps = {
    height: 600,
    width: 800,
    webPreferences: {
        nodeIntegration: true
    }
}

interface WindowProps {
    file: string,
    settings?: {
        height?: number,
        width?: number,
        parent?: Electron.BrowserWindow,
        frame?: boolean,
        webPreferences?: {
            nodeIntegration: boolean
        }
    }
}

export default class Window {
    win: Electron.BrowserWindow
    file: string
    devTools: boolean

    constructor({file, ...settings}: WindowProps, devTools = true) {
        this.win = new BrowserWindow({...defaultProps, ...settings})
        this.file = file
        this.devTools = devTools
    }

    create() {
        this.win.loadFile(this.file)
        this.devTools && this.win.webContents.openDevTools()
        this.win.once('ready-to-show', () => this.win.show())
    }

}