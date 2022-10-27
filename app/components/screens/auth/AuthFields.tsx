import React, { FC } from 'react'
import { FormState, UseFormRegister } from 'react-hook-form'

import { IAuthInput } from '@/screens/auth/auth.interface'

import Input from '@/ui/form-elements/Input'

import { validEmail } from '@/shared/regex'

interface IAuthFields {
	register: UseFormRegister<any>
	formState: FormState<IAuthInput>
	isPasswordRequired?: boolean
}

const AuthFields: FC<IAuthFields> = ({
	isPasswordRequired = false,
	register,
	formState: { errors },
}) => {
	return (
		<>
			<Input
				{...register('email', {
					required: 'Email is required',
					pattern: { value: validEmail, message: 'Please enter valid email' },
				})}
				placeholder={'Email'}
				error={errors.email}
			/>
			<Input
				{...register('password', {
					required: 'password is required',
					minLength: {
						value: 5,
						message: 'Min length should more than 5 symbols',
					},
				})}
				type={'password'}
				placeholder={'Password'}
				error={errors.password}
			/>
		</>
	)
}

export default AuthFields
