import { BrowserView } from 'electron'

const defaultProps = {
    backgroundColor: '#2d2d2d',
    webPreferences: {
        nodeIntegration: true,
        contextIsolation: false
    }
}

const defaultBounds = {
    x: 0,
    y: 0,
    height: 600,
    width: 300
}

interface ViewProps {
    file: string,
    settings?: {
        webPreferences?: {
            nodeIntegration?: boolean,
            contextIsolation?: boolean
        }
    },
    bounds?: {
        x?: number,
        y?: number,
        height?: number,
        width?: number
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
    bounds: ViewProps['parentBounds'] | undefined
    parentBounds: ViewProps['parentBounds'] | undefined

    constructor({ file, settings, parentBounds }: ViewProps) {
        this.view = new BrowserView({...defaultProps})
        this.file = file
        this.settings = settings
        this.parentBounds = parentBounds
    }

    create(parent: Electron.BrowserWindow) {
        parent.setBrowserView(this.view)
        this.view.setBounds({ ...defaultBounds, ...this.bounds, ...this.parentBounds })
        this.view.setAutoResize({ height: true, width: false, vertical: true, horizontal: false })
        this.view.webContents.loadFile(this.file)
    }
}