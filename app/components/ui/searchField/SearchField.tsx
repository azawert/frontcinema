import React, { ChangeEvent, FC } from 'react'

import { useUsers } from '@/screens/admin/users/useUsers'

import MaterialIcon from '@/ui/MaterialIcon'

import styles from './SearchField.module.scss'

interface ISearchField {
	searchTerm: string
	handleSearch: (event: ChangeEvent<HTMLInputElement>) => void
}

const SearchField: FC<ISearchField> = ({ handleSearch, searchTerm }) => {
	// const { handleSearch, searchTerm } = useMovies()
	// console.log(searchTerm)
	return (
		<div className={styles.search}>
			<MaterialIcon name={'MdSearch'} />
			<input
				placeholder={'Введите название...'}
				value={searchTerm}
				onChange={handleSearch}
			/>
		</div>
	)
}

export default SearchField
