import { createSlice } from '@reduxjs/toolkit'

import { getStoreLocalStorage } from '@/utils/localstorage/localstorage'

import { IInitialState } from '@/store/user/user.interface'
import {checkAuth, login, logout, register} from "@/store/user/user.actions";

const initialState: IInitialState = {
	user: getStoreLocalStorage('user'),
	isLoading: false,
}

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(register.pending,state=> {
			state.isLoading = true
		}).addCase(register.fulfilled,(state,{payload:{user}})=>{
			state.isLoading = false
			state.user =  user
		}).addCase(register.rejected,(state)=>{
			state.isLoading = false
			state.user = null
		}).addCase(login.pending,state=> {
			state.isLoading = true
		}).addCase(login.fulfilled,(state,{payload:{user}})=>{
			state.isLoading = false
			state.user =  user
		}).addCase(login.rejected,(state)=>{
			state.isLoading = false
			state.user = null
		}).addCase(checkAuth.fulfilled,(state,{payload})=> {
			state.user = payload?.user
		}).addCase(logout.fulfilled,(state)=>{
			state.isLoading = false
			state.user =  null
		})
	},
})

export const  reducer  = userSlice
