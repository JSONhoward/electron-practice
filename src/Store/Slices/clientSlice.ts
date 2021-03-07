import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Names } from '../../Utils/mocks'

type ClientsSliceState = Names[]

const initialState: ClientsSliceState = []

export const clientSlice = createSlice({
    name: 'client',
    initialState,
    reducers: {
        add: (state, action: PayloadAction<Names | Names[]>) => {
            if (Array.isArray(action.payload)) {
                state = state.concat(action.payload)
            } else {
                state = [...state, action.payload]
            }
            return state
        },
        remove: (state, action: PayloadAction<Names>) => {
            state = state.filter(name => name !== action.payload)
            return state
        }
    }
})
const { actions, reducer } = clientSlice
export const { add, remove } = actions
export default reducer