import { app } from 'electron'
import MainWindow from './Utils/Views/Main/Main'

const MAIN = new MainWindow(app)
MAIN.start('dev')