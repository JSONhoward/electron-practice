import * as React from 'react'

import { RootState, useAppDispatch } from './Store'
import NameList from './Components/NameList/NameList'
import Taskbar from './Components/TaskBar/Taskbar'
import { StyledApp } from './App.styles'
import { AFHs, Apartments, getAFHs, getApartments, getNames, Names } from './Utils/mocks'
import { add as clientAdd } from './Store/Slices/clientSlice'
import { add as apartmentAdd } from './Store/Slices/apartmentSlice'
import { add as afhAdd } from './Store/Slices/afhSlice'
import { useSelector } from 'react-redux'
import  Apts from './Components/Apartments/Apartments'
import AFH from './Components/AFH/AFH'


const App = () => {
    const dispatch = useAppDispatch()
    const { tasks } = useSelector((state: RootState) => state)

    React.useEffect(() => {
        getNames.then((names: Names[]) => dispatch(clientAdd(names)))
    }, [])

    React.useEffect(() => {
        getApartments.then((apartments: Apartments[]) => dispatch(apartmentAdd(apartments)))
    }, [])

    React.useEffect(() => {
        getAFHs.then((AFHs: AFHs[]) => dispatch(afhAdd(AFHs)))
    }, [])

    return (
        <StyledApp>
            <Taskbar />
            {tasks.clients ? <NameList /> : tasks.housing ? <Apts /> : <AFH />}
        </StyledApp>
    )
}

export default App