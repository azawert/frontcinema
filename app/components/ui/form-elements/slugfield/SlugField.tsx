import React, { FC } from 'react'
import { FieldError, UseFormRegister } from 'react-hook-form'

import Input from '@/ui/form-elements/Input'

import styles from './SlugField.module.scss'

interface ISlugField {
	error?: FieldError
	register: UseFormRegister<any>
	generate: () => void
}

const SlugField: FC<ISlugField> = ({ generate, error, register }) => {
	return (
		<div className="relative">
			<Input
				{...register('slug', { required: 'Slug is required' })}
				error={error}
				placeholder={'Slug'}
			/>
			<div className={styles.button} onClick={generate}>
				Generate
			</div>
		</div>
	)
}

export default SlugField
