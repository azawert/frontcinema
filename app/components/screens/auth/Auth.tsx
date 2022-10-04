import React, { FC, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import { IAuthInput } from '@/screens/auth/auth.interface'
import { useAuthRedirect } from '@/screens/auth/useAuthRedirect'

import Button from '@/ui/form-elements/Button'
import Heading from '@/ui/heading/Heading'

import { useAuth } from '@/hooks/useAuth'

import Meta from '@/utils/meta/Meta'

import styles from './Auth.module.scss'

import AuthFields from "@/screens/auth/AuthFields";


const Auth: FC = () => {
	useAuthRedirect()

	const { isLoading } = useAuth()

	const [type, setType] = useState<'registration' | 'login'>('registration')
	const {
		register: registerInput,
		handleSubmit,
		formState,
		reset,

	} = useForm<IAuthInput>({
		mode: 'onChange',
	})
	const log = (data: any) => {alert(data)}
	const reg = (data: any) => {alert(data)}

	const onSubmit: SubmitHandler<IAuthInput> = (data) => {
		if (type === 'registration') {
			reg(data)
		}
		if (type === 'login') {
			log(data)
		}
	}
	return (
		<Meta title={'Auth'}>
			<section className={styles.wrapper}>
				<form onSubmit={handleSubmit(onSubmit)}>
					<Heading title={'Auth'} className="mb-6" />
					<AuthFields register={registerInput} formState={formState} isPasswordRequired/>
					<div className={styles.buttons}>

						<Button
							type="submit"
							onClick={() => setType('login')}
							disabled={isLoading}

						>
							Login
						</Button>

						<Button
							type="submit"
							onClick={() => setType('registration')}
							disabled={isLoading}
						>
							Register
						</Button>
					</div>
				</form>
			</section>
		</Meta>
	)
}

export default Auth
