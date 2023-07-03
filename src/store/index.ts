import { configureStore, createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
	name: 'todo',
	initialState: ['Making coffe', 'Studying Redux', 'Practice exercises'],

	reducers: {

	},
})

export const store = configureStore({
	reducer: {
		todo: todoSlice.reducer,
	}
})