import React, { FC } from 'react'
import { Controller, useForm } from 'react-hook-form'

import { IActorEditInput } from '@/screens/admin/actor/actoredit.interface'
import { useActorEdit } from '@/screens/admin/actor/useActorEdit'

import AdminNavigation from '@/ui/AdminNavigation/AdminNavigation'
import SkeletonLoader from '@/ui/SkeletonLoader'
import styles from '@/ui/form-elements/AdminForm.module.scss'
import Button from '@/ui/form-elements/Button'
import Input from '@/ui/form-elements/Input'
import SlugField from '@/ui/form-elements/slugfield/SlugField'
import Heading from '@/ui/heading/Heading'

import Meta from '@/utils/meta/Meta'
import { slugify } from '@/utils/string/generateSlug'

import UploadField from '../../../ui/form-elements/uploadfield/UploadField'

const ActorEdit: FC = () => {
	const {
		handleSubmit,
		register,
		formState: { errors },
		setValue,
		getValues,
		control,
	} = useForm<IActorEditInput>({
		mode: 'onChange',
	})
	const { onSubmit, isLoading } = useActorEdit(setValue)
	return (
		<Meta title={'Edit Actor'}>
			<AdminNavigation />
			<Heading title={'Edit Actor'} />
			<form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
				{isLoading ? (
					<SkeletonLoader count={3} />
				) : (
					<>
						<div className={styles.fields}>
							<Input
								{...register('name', { required: 'Name is required' })}
								error={errors.name}
								placeholder={'Введите новое название'}
							/>
							<div style={{ width: '31%' }}>
								<SlugField
									register={register}
									generate={() => setValue('slug', slugify(getValues('name')))}
									error={errors.slug}
								/>
							</div>

							<Controller
								control={control}
								name={'photo'}
								render={({
									field: { value, onChange },
									fieldState: { error },
								}) => (
									<UploadField
										onChange={onChange}
										placeholder={'Photo'}
										error={error}
										folder={'actors'}
										image={value}
									/>
								)}
								rules={{
									required: 'Photo is required',
								}}
							/>
						</div>
						<Button key={'UpdateSlugButton'}>Update</Button>
					</>
				)}
			</form>
		</Meta>
	)
}

export default ActorEdit
