import React, { FC } from 'react'
import { OnChangeValue } from 'react-select'
import ReactSelect from 'react-select'
import makeAnimated from 'react-select/animated'

import { IOptions, ISelect } from '@/ui/select/select.interface'

import styles from './Select.module.scss'

const animatedComponents = makeAnimated()

const Select: FC<ISelect> = ({
	isLoading,
	field,
	isMulti,
	options,
	placeholder,
	error,
}) => {
	const onChange = (newValue: unknown | OnChangeValue<IOptions, boolean>) => {
		field.onChange(
			isMulti
				? (newValue as IOptions[]).map((item: IOptions) => item.value)
				: (newValue as IOptions).value
		)
	}
	const getValue = () => {
		if (field.value) {
			return isMulti
				? options.filter((option) => field.value.indexOf(option.value) >= 0)
				: options.find((option) => option.value === field.value)
		} else {
			return isMulti ? [] : ''
		}
	}

	return (
		<div className={styles.selectContainer}>
			<label>
				<span>{placeholder}</span>
				<ReactSelect
					classNamePrefix="custom-select"
					options={options}
					value={getValue()}
					isMulti={isMulti}
					isLoading={isLoading}
					components={animatedComponents}
					onChange={onChange}
				/>
			</label>
			{error && <div className={styles.error}>{error.message}</div>}
		</div>
	)
}

export default Select
