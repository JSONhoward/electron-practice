import { Apartments } from '@/Utils/mocks'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'


type ApartmentSliceState = Apartments[]

const initialState: ApartmentSliceState = []

export const apartmentSlice = createSlice({
    name: 'apartments',
    initialState,
    reducers: {
        add: (state, action: PayloadAction<Apartments | Apartments[]>) => {
            if(Array.isArray(action.payload)) {
                action.payload.forEach(apt => {
                    state.push(apt)
                })
            }else {
                state.push(action.payload)
            }
        },
        remove: (state, action: PayloadAction<Apartments>) => {
            state = state.filter(apt => apt !== action.payload)
            return state
        }
    }
})

const {actions, reducer} = apartmentSlice
export const {add, remove} = actions
export default reducer