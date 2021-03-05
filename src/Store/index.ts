import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'

import clientsReducer from './Slices/clientSlice'


const store = configureStore({
    reducer: {
        clients: clientsReducer
    }
})

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()