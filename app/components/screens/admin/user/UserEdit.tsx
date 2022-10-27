import React, { FC } from 'react'
import { Controller, useForm } from 'react-hook-form'

import { useUserEdit } from '@/screens/admin/user/useUserEdit'
import { IUserEditInput } from '@/screens/admin/user/useredit.interface'
import AuthFields from '@/screens/auth/AuthFields'

import AdminNavigation from '@/ui/AdminNavigation/AdminNavigation'
import SkeletonLoader from '@/ui/SkeletonLoader'
import styles from '@/ui/form-elements/AdminForm.module.scss'
import Button from '@/ui/form-elements/Button'
import Heading from '@/ui/heading/Heading'

import Meta from '@/utils/meta/Meta'

const UserEdit: FC = () => {
	const { handleSubmit, register, formState, setValue, control } =
		useForm<IUserEditInput>({
			mode: 'onChange',
		})
	const { onSubmit, isLoading } = useUserEdit(setValue)
	return (
		<Meta title={'Edit User'}>
			<AdminNavigation />
			<Heading title={'Edit User'} />
			<form onSubmit={handleSubmit(onSubmit)} className={styles.adminform}>
				{isLoading ? (
					<SkeletonLoader count={3} />
				) : (
					<>
						<AuthFields register={register} formState={formState} />
						<Controller
							control={control}
							name={'isAdmin'}
							render={({ field }) => (
								<button
									onClick={(e) => {
										e.preventDefault()
										field.onChange(!field.value)
									}}
									className={'text-link block mb-7'}
								>
									{field.value
										? 'Сделать обычным пользователем'
										: 'Сделать админом'}
								</button>
							)}
						></Controller>
					</>
				)}
				<Button>Update</Button>
			</form>
		</Meta>
	)
}

export default UserEdit
