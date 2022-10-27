import React from 'react'

import { useMovies } from '@/screens/admin/movies/useMovies'

import AdminNavigation from '@/ui/AdminNavigation/AdminNavigation'
import AdminTable from '@/ui/admintable/adminTable/AdminTable'
import AdminHeader from '@/ui/admintable/adminheader/AdminHeader'
import Heading from '@/ui/heading/Heading'

import Meta from '@/utils/meta/Meta'

const MovieList = () => {
	const {
		handleSearch,
		searchTerm,
		deleteAsync,
		data,
		isLoading,
		createAsync,
	} = useMovies()
	return (
		<Meta title={'Movies'}>
			<AdminNavigation />
			<Heading title={'Movies'} />

			<AdminHeader
				handleSearch={handleSearch}
				searchTerm={searchTerm}
				onClick={createAsync}
			/>
			{
				<AdminTable
					headerItems={['Title', 'Genres', 'Rating']}
					tableItems={data || []}
					removeHandler={deleteAsync}
					isLoading={isLoading}
				/>
			}
		</Meta>
	)
}

export default MovieList
