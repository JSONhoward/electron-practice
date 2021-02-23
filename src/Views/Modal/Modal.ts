import { BrowserWindow } from 'electron'

const defaultProps = {
    modal: true,
    show: false,
    webPreferences: {
        nodeIntegration: true,
        contextIsolation: true
    }
}


interface ModalProps {
    file: string,
    settings: {
        parent: Electron.BrowserWindow,
        show?: boolean,
        webPreferences?: {
            nodeIntegration?: boolean,
            contextIsolation?: boolean
        }
    }
}

export default class Modal {
    modal: Electron.BrowserWindow
    file: string
    devTools: boolean

    constructor({file, settings}: ModalProps, devTools = true) {
        this.modal = new BrowserWindow({...defaultProps, ...settings})
        this.file = file
        this.devTools = devTools
    }

    create() {
        this.modal.loadFile(this.file)
        this.devTools && this.modal.webContents.openDevTools()
        this.modal.once('ready-to-show', this.modal.show)
    }
}