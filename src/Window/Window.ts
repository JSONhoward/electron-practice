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
    settings: {
        height: number,
        width: number,
        webPreferences?: {
            nodeIntegration: boolean
        }
    }
}

export default class Window extends BrowserWindow {
    constructor({file, ...settings}: WindowProps, devTools = true) {
        super({...defaultProps, ...settings})

        this.loadFile(file)
        devTools && this.webContents.openDevTools()
        this.once('ready-to-show', () => this.show())
    }

}