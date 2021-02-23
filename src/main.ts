import { app } from 'electron'
import MainWindow from './Windows/MainWindow/MainWindow'
import Window from './Windows/Window/Window'

MainWindow.start(app)


app.whenReady().then(() => {
    const child = new Window({ file: '../test.html' })
    const child2 = new Window({ file: '../test.html' })
    const child3 = new Window({ file: '../test.html' })
    child.create()
    child2.create()
    child3.create()
})