import './index.css'
import { fillNames, nameSelectionActiveToggle, getNames } from '../NameList/name-list'
import { taskSelectionActiveToggle } from '../TaskBar/task-bar'

getNames
    .then(names => fillNames(document.getElementById('names'), names))
    .then(() => {
        nameSelectionActiveToggle()
        taskSelectionActiveToggle()
    })
