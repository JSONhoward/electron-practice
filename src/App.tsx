import * as React from 'react'
import NameList from './Components/NameList/NameList'
import Taskbar from './Components/TaskBar/Taskbar'
import { StyledApp } from './App.styles'

const App = () => {
    return (
        <StyledApp>
            <Taskbar />
            <NameList />
        </StyledApp>
    )
}

export default App