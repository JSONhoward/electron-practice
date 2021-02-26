import { app } from 'electron'
import MainWindow from './Views/MainWindow/MainWindow'
import View from './Views/View/View'

const MAIN = new MainWindow(app)
MAIN.start('prod').then(() => {
    const view = new View({
        file: '../leftPane.html',
        parentBounds: { height: 600 }
    })
    MAIN.window && view.create(MAIN.window)
})


