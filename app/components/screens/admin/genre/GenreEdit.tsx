import React, { FC } from 'react'
import { useForm } from 'react-hook-form'

import { IGenreEditInput } from '@/screens/admin/genre/genreedit.interface'
import { useGenreEdit } from '@/screens/admin/genre/useGenreEdit'

import AdminNavigation from '@/ui/AdminNavigation/AdminNavigation'
import SkeletonLoader from '@/ui/SkeletonLoader'
import styles from '@/ui/form-elements/AdminForm.module.scss'
import Button from '@/ui/form-elements/Button'
import Input from '@/ui/form-elements/Input'
import SlugField from '@/ui/form-elements/slugfield/SlugField'
import Heading from '@/ui/heading/Heading'

import Meta from '@/utils/meta/Meta'
import { slugify } from '@/utils/string/generateSlug'

const GenreEdit: FC = () => {
	const {
		handleSubmit,
		register,
		formState: { errors },
		setValue,
		getValues,
	} = useForm<IGenreEditInput>({
		mode: 'onChange',
	})
	const { onSubmit, isLoading } = useGenreEdit(setValue)
	return (
		<Meta title={'Edit Genre'}>
			<AdminNavigation />
			<Heading title={'Edit genre'} />
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
								style={{ width: '31%' }}
							/>
							<div style={{ width: '31%' }}>
								<SlugField
									register={register}
									generate={() => setValue('slug', slugify(getValues('name')))}
									error={errors.slug}
								/>
							</div>
							<Input
								{...register('icon', { required: 'Icon is required' })}
								error={errors.icon}
								placeholder={'иконка...'}
								style={{ width: '31%' }}
							/>
							<Button key={'UpdateSlugButton'}>Update</Button>
						</div>
					</>
				)}
			</form>
		</Meta>
	)
}

export default GenreEdit
