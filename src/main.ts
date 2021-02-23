import { app } from 'electron'
import MainWindow from './Views/MainWindow/MainWindow'
import View from './Views/View/View'

MainWindow.start(app)

app.whenReady().then(() => {
    const view = new View({file: ''})
    view.create(MainWindow.win!)
})