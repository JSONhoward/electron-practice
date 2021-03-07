import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'

import clientsReducer from './Slices/clientSlice'
import tasksReducer from './Slices/taskSlice'

const store = configureStore({
    reducer: {
        clients: clientsReducer,
        tasks: tasksReducer
    }
})

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()