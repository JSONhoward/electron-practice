import * as React from 'react'

import { useAppDispatch } from './Store'
import NameList from './Components/NameList/NameList'
import Taskbar from './Components/TaskBar/Taskbar'
import { StyledApp } from './App.styles'
import { getNames, Names } from './Utils/mocks'
import { add } from './Store/Slices/clientSlice'


const App = () => {
    const dispatch = useAppDispatch()

    React.useEffect(() => {
        getNames.then((names: Names[]) => dispatch(add(names)))
    }, [])

    return (
        <StyledApp>
            <Taskbar />
            <NameList />
        </StyledApp>
    )
}

export default App