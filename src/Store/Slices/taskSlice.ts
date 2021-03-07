import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type TasksSliceState = {
    'clients': boolean,
    'housing': boolean,
    'afh': boolean
}

const initialState: TasksSliceState = {
    'clients': false,
    'housing': false,
    'afh': false
}

export const taskSlice = createSlice({
    name: 'tasks',
    initialState: { ...initialState, 'clients': true },
    reducers: {
        toggle: (state, action: PayloadAction<keyof TasksSliceState>) => {
            state = { ...initialState, [action.payload]: true }
            return state
        }
    },
})

const { reducer, actions } = taskSlice
export const { toggle } = actions
export default reducer