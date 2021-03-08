import { app } from 'electron'
import MainWindow from './Electron/Main/Main'

const MAIN = new MainWindow(app)
MAIN.start()