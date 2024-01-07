import { configureStore, createSlice } from "@reduxjs/toolkit"
import { TypedUseSelectorHook, useSelector } from "react-redux"


const todoList = createSlice({
    name: 'todo', initialState: ['café', 'leite', 'açucar', 'farinha'], reducers: {
        add: (state, action) => {
            state.push(action.payload.newTodo)
            console.log(action.payload.newTodo)
        },
    }
})

export const store = configureStore({
    reducer: {
        todo: todoList.reducer
    }
})

export const { add } = todoList.actions

export type RootState = ReturnType<typeof store.getState>;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
