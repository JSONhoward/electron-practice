import { BrowserView } from 'electron'

const defaultProps = {
    x: 0,
    y: 0,
    height: 300,
    width: 300,
    webPreferences: {
        contextIsolation: true
    }
}

interface ViewProps {
    file: string,
    settings?: {
        x: number,
        y: number,
        height: number,
        width: number,
        webPreferences: {
            contextIsolation: boolean
        }
    }
}

export default class View {
    view: Electron.BrowserView
    file: string
    settings: typeof defaultProps | undefined

    constructor({ file, settings }: ViewProps) {
        this.view = new BrowserView()
        this.file = file
        this.settings = settings
    }

    create(parent: Electron.BrowserWindow) {
        parent.setBrowserView(this.view)
        this.view.setBounds({ ...defaultProps, ...this.settings })
        this.view.webContents.loadURL('https://www.google.com')
    }
}