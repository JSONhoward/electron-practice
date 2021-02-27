import { app } from 'electron'
import MainWindow from './Views/MainWindow/MainWindow'

const MAIN = new MainWindow(app)
MAIN.start('prod')