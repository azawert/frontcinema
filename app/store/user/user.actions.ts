import { createAsyncThunk } from '@reduxjs/toolkit'
import { toastr } from 'react-redux-toastr'

import { AuthService } from '@/services/auth/auth.service'

import { IAuthResponse, IEmailPassword } from '@/store/user/user.interface'

export const register = createAsyncThunk<IAuthResponse, IEmailPassword>(
	'register/auth',
	async ({ password, email }, thunkApi) => {
		try {
			const response = await AuthService.register(email, password)
			toastr.success('Registration', 'Выполнена успешно')
			return response.data
		} catch (e) {}
	}
)
