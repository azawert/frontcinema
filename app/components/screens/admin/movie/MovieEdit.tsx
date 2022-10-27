import dynamic from 'next/dynamic'
import React, { FC } from 'react'
import { Controller, useForm } from 'react-hook-form'

import { IMovieEditInput } from '@/screens/admin/movie/movieedit.interface'
import { useAdminActors } from '@/screens/admin/movie/useAdminActors'
import { useAdminGenre } from '@/screens/admin/movie/useAdminGenres'
import { useMovieEdit } from '@/screens/admin/movie/useMovieEdit'

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

const DynamicSelect = dynamic(() => import('@/ui/select/Select'), {
	ssr: false,
})
const MovieEdit: FC = () => {
	const {
		handleSubmit,
		register,
		formState: { errors },
		setValue,
		getValues,
		control,
	} = useForm<IMovieEditInput>({
		mode: 'onChange',
	})
	const { onSubmit, isLoading } = useMovieEdit(setValue)
	const { isLoading: genresIsLoading, data: genres } = useAdminGenre()
	const { data: actors, isLoading: actorsIsLoading } = useAdminActors()

	return (
		<Meta title={'Edit Movie'}>
			<AdminNavigation />
			<Heading title={'Edit genre'} />
			<form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
				{isLoading ? (
					<SkeletonLoader count={3} />
				) : (
					<>
						<div className={styles.fields}>
							<Input
								{...register('title', { required: 'Title is required' })}
								error={errors.title}
								placeholder={'Введите новое название'}
							/>
							<div style={{ width: '31%' }}>
								<SlugField
									register={register}
									generate={() => setValue('slug', slugify(getValues('title')))}
									error={errors.slug}
								/>
							</div>
							<Input
								{...register('parametrs.country', {
									required: 'Country is required',
								})}
								error={errors.parametrs?.country}
								placeholder={'Страна'}
								style={{ width: '31%' }}
							/>
							<Input
								{...register('parametrs.duration', {
									required: 'Duration is required',
								})}
								error={errors.parametrs?.duration}
								placeholder={'Длительность(в минутах)'}
								style={{ width: '31%' }}
							/>
							<Input
								{...register('parametrs.year', {
									required: 'Year is required',
								})}
								error={errors.parametrs?.year}
								placeholder={'Год выпуска'}
								style={{ width: '31%' }}
							/>
							{/*react SELECT*/}

							<Controller
								control={control}
								name={'genres'}
								render={({ field, fieldState: { error } }) => (
									<DynamicSelect
										field={field}
										options={genres || []}
										isLoading={genresIsLoading}
										placeholder={'Genres'}
										isMulti
										error={error}
									/>
								)}
								rules={{
									required: 'Please select at least one genre!',
								}}
							/>
							<Controller
								control={control}
								name={'actors'}
								render={({ field, fieldState: { error } }) => (
									<DynamicSelect
										field={field}
										options={actors || []}
										isLoading={actorsIsLoading}
										placeholder={'Actors'}
										isMulti
										error={error}
									/>
								)}
								rules={{
									required: 'Please select at least one actor!',
								}}
							/>

							<Controller
								control={control}
								name={'poster'}
								render={({
									field: { value, onChange },
									fieldState: { error },
								}) => (
									<UploadField
										onChange={onChange}
										placeholder={'Poster'}
										error={error}
										folder={'movies'}
										image={value}
									/>
								)}
								rules={{
									required: 'Poster is required',
								}}
							/>
							<Controller
								control={control}
								name={'bigPoster'}
								render={({
									field: { value, onChange },
									fieldState: { error },
								}) => (
									<UploadField
										onChange={onChange}
										placeholder={'Big poster'}
										error={error}
										folder={'movies'}
										image={value}
									/>
								)}
								rules={{
									required: 'Big poster is required',
								}}
							/>
							<Controller
								control={control}
								name={'videoUrl'}
								render={({
									field: { value, onChange },
									fieldState: { error },
								}) => (
									<UploadField
										onChange={onChange}
										placeholder={'Video'}
										error={error}
										folder={'movies'}
										isNoImage={true}
										image={value}
										style={{ marginTop: -25 }}
									/>
								)}
								rules={{
									required: 'Video is required',
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

export default MovieEdit
