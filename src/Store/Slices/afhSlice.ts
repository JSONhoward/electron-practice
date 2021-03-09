import { AFHs } from '@/Utils/mocks'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'


type AFHSliceState = AFHs[]

const initialState: AFHSliceState = []

const AFHSlice = createSlice({
    name: 'afh',
    initialState,
    reducers: {
        add: (state, action: PayloadAction<AFHs | AFHs[]>) => {
            if(Array.isArray(action.payload)) {
                action.payload.forEach(afh => {
                    state.push(afh)
                })
            }else {
                state.push(action.payload)
            }
        },
        remove: (state, action: PayloadAction<AFHs>) => {
            state = state.filter(afh => afh !== action.payload)
            return state
        }
    }
})

const { actions, reducer} = AFHSlice
export const { add, remove} = actions
export default reducer