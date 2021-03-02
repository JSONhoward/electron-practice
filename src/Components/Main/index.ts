import './index.css'
import { fillNames, nameSelectionActiveToggle } from '../NameList/name-list'
import { taskSelectionActiveToggle, toggleNameList } from '../TaskBar/task-bar'

//! fake api call for names
const getNames = new Promise<any[]>((resolve) => {
    setTimeout(() => {
        resolve([{ id: 1, first: 'John', last: 'Doe' }, { id: 2, first: 'Howard', last: 'Haws' }, { id: 3, first: 'Maggie', last: 'Lane' }])
    }, 2000)
})

getNames
    .then(names => fillNames(document.getElementById('names'), names))
    .then(() => {
        nameSelectionActiveToggle()
        taskSelectionActiveToggle()
        toggleNameList()
    })
