import { createSlice } from '@reduxjs/toolkit'


export const taskSlice = createSlice({
    name: 'tasks',
    initialState: {},
    reducers: {
        toggle: (state, action) => {

        }
    },
})

const {reducer, actions} = taskSlice
export const {toggle} = actions
export default reducer