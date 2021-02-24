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
        x?: number,
        y?: number,
        height?: number,
        width?: number,
        webPreferences?: {
            contextIsolation: boolean
        }
    },
    parentBounds?: {
        x?: number,
        y?: number,
        height?: number,
        width?: number
    }
}

export default class View {
    view: Electron.BrowserView
    file: string
    settings: ViewProps['settings'] | undefined
    parentBounds: ViewProps['parentBounds'] | undefined

    constructor({ file, settings, parentBounds }: ViewProps) {
        this.view = new BrowserView()
        this.file = file
        this.settings = settings
        this.parentBounds = parentBounds
    }

    create(parent: Electron.BrowserWindow) {
        parent.setBrowserView(this.view)
        this.view.setBounds({ ...defaultProps, ...this.settings, ...this.parentBounds})
        this.view.setAutoResize({height: true, width: false, vertical: true, horizontal: false})
        this.view.webContents.loadFile(this.file)
    }
}