import React, { FC, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import { IAuthInput } from '@/screens/auth/auth.interface'
import { useAuthRedirect } from '@/screens/auth/useAuthRedirect'

import Button from '@/ui/form-elements/Button'
import Heading from '@/ui/heading/Heading'

import { useAuth } from '@/hooks/useAuth'

import Meta from '@/utils/meta/Meta'

import styles from './Auth.module.scss'

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
	const log = (data: any) => {}
	const reg = (data: any) => {}

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

					<div className={styles.buttons}>
						<Button
							type="submit"
							onClick={() => setType('login')}
							disabled={isLoading}
						>
							Login
						</Button>
					</div>
				</form>
			</section>
		</Meta>
	)
}

export default Auth
