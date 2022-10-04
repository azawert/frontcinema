import { createSlice } from '@reduxjs/toolkit'

import { getStoreLocalStorage } from '@/utils/localstorage/localstorage'

import { IInitialState } from '@/store/user/user.interface'

const initialState: IInitialState = {
	user: getStoreLocalStorage('user'),
	isLoading: false,
}

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {},
	extraReducers: (builder) => {},
})

export const { reducer } = userSlice
