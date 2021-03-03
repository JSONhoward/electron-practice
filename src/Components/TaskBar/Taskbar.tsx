import React from 'react'
import { StyledTaskbar, TasksLi } from './Taskbar.styles'

const Taskbar = () => {

    return (
        <StyledTaskbar>
            <TasksLi>Clients</TasksLi>
            <TasksLi>Apartments</TasksLi>
            <TasksLi>AFH's</TasksLi>
        </StyledTaskbar>
    )
}

export default Taskbar
