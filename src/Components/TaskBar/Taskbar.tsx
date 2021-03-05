import React, { useState } from 'react'
import { StyledTaskbar, TasksLi } from './Taskbar.styles'
import { FaAddressBook, FaBuilding, FaHospitalAlt } from 'react-icons/fa'
import { tasks } from './Taskbar.utils'

const Taskbar = () => {
    const [activeTask, setActiveTask] = useState({...tasks, 'clients': true})

    const makeActive = (e: React.MouseEvent) => {
        const key = e.currentTarget.id

        Object.hasOwnProperty.call(tasks,key) && setActiveTask({...tasks, [key]: true})
    }

    return (
        <StyledTaskbar >
            <TasksLi onClick={makeActive} active={activeTask.clients} id={'clients'}><FaAddressBook /></TasksLi>
            <TasksLi onClick={makeActive} active={activeTask.housing} id={'housing'}><FaBuilding /></TasksLi>
            <TasksLi onClick={makeActive} active={activeTask.afh} id={'afh'}><FaHospitalAlt /></TasksLi>
        </StyledTaskbar>
    )
}

export default Taskbar
