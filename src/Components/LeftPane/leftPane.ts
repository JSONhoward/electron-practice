import {ipcRenderer} from 'electron'
import './leftPane.css'

const button = document.getElementById('button')
const div = document.getElementById('child')

ipcRenderer.on('test-message-reply', (event, arg) => {
    console.log(arg)
})

button?.addEventListener('click', () => {
    div!.style.backgroundColor = 'yellow'
    ipcRenderer.send('test-message', 'ping')
})
