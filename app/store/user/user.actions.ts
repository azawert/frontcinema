import { createAsyncThunk } from '@reduxjs/toolkit'
import { toastr } from 'react-redux-toastr'

import { AuthService } from '@/services/auth/auth.service'

import { IAuthResponse, IEmailPassword } from '@/store/user/user.interface'
import {toastError} from "@/utils/toast-error";
import {errorCatch} from "../../api/api.helpers";

export const register = createAsyncThunk<IAuthResponse, IEmailPassword>(
	'register/auth',
	async ({ password, email }, thunkApi) => {
		try {
			const response = await AuthService.register(email, password)
			toastr.success('Registration', 'Выполнена успешно')
			return response.data
		} catch (e) {
			toastError(e)
			return thunkApi.rejectWithValue(e)
		}
	}
)

export const login = createAsyncThunk<IAuthResponse, IEmailPassword>(
	'login/auth',
	async ({ password, email }, thunkApi) => {
		try {
			const response = await AuthService.login(email, password)
			toastr.success('Авторизация прошла успешно', '')
			return response.data
		} catch (e) {
			toastError(e)
			return thunkApi.rejectWithValue(e)
		}
	}
)

export const logout = createAsyncThunk('auth/logout', async (_,thunkApi)=>{
	await AuthService.logout()
})

export const checkAuth = createAsyncThunk('auth/check',async (_,thunkApi)=>{
	try{
		const response = await AuthService.getNewTokens()
		return response.data
	} catch(e){
		if(errorCatch(e) === 'jwt expired'){
			toastr.error(
				'Ошибка с авторизацией', 'Нужно авторизоваться заново'
			)
			thunkApi.dispatch(logout())
		}
	}
})
