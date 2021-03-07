import * as React from 'react'

import { RootState, useAppDispatch } from './Store'
import NameList from './Components/NameList/NameList'
import Taskbar from './Components/TaskBar/Taskbar'
import { StyledApp } from './App.styles'
import { getNames, Names } from './Utils/mocks'
import { add } from './Store/Slices/clientSlice'
import { useSelector } from 'react-redux'


const App = () => {
    const dispatch = useAppDispatch()
    const { tasks } = useSelector((state: RootState) => state)

    React.useEffect(() => {
        getNames.then((names: Names[]) => dispatch(add(names)))
    }, [])

    return (
        <StyledApp>
            <Taskbar />
            {tasks.clients && <NameList />}
        </StyledApp>
    )
}

export default App