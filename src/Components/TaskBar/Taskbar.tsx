import React from 'react'
import { useSelector } from 'react-redux'
import { FaAddressBook, FaBuilding, FaHospitalAlt } from 'react-icons/fa'
import { RootState, useAppDispatch } from '@/Store'

import { StyledTaskbar, TasksLi } from './Taskbar.styles'
import { TasksSliceState, toggle } from '@/Store/Slices/taskSlice'

const Taskbar = () => {
    const dispatch = useAppDispatch()
    const { tasks } = useSelector((state: RootState) => state)


    const makeActive = (e: React.MouseEvent) => {
        const key = e.currentTarget.id

        dispatch(toggle(key as keyof TasksSliceState))
    }

    return (
        <StyledTaskbar >
            <TasksLi onClick={makeActive} active={tasks.clients} id={'clients'}><FaAddressBook /></TasksLi>
            <TasksLi onClick={makeActive} active={tasks.housing} id={'housing'}><FaBuilding /></TasksLi>
            <TasksLi onClick={makeActive} active={tasks.afh} id={'afh'}><FaHospitalAlt /></TasksLi>
        </StyledTaskbar>
    )
}

export default Taskbar
