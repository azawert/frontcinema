import React, { FC } from 'react'

import SearchList from '@/components/layout/Sidebar/Search/SearchList/SearchList'
import { useSearch } from '@/components/layout/Sidebar/Search/useSearch'

import SearchField from '@/ui/searchField/SearchField'

import styles from './Search.module.scss'

const Search: FC = () => {
	const { handleSearch, data, isLoading, isSuccess, searchTerm } = useSearch()
	return (
		<div className={styles.wrapper}>
			<SearchField handleSearch={handleSearch} searchTerm={searchTerm} />
			{isSuccess && <SearchList movies={data || []} />}
		</div>
	)
}

export default Search
