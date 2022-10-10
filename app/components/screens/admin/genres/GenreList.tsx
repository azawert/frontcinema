import React from 'react'

import { useGenres } from '@/screens/admin/genres/useGenres'

import AdminNavigation from '@/ui/AdminNavigation/AdminNavigation'
import AdminTable from '@/ui/admintable/adminTable/AdminTable'
import AdminHeader from '@/ui/admintable/adminheader/AdminHeader'
import Heading from '@/ui/heading/Heading'

import Meta from '@/utils/meta/Meta'

const GenreList = () => {
	const { handleSearch, searchTerm, deleteAsync, data, isLoading } = useGenres()
	return (
		<Meta title={'Genres'}>
			<AdminNavigation />
			<Heading title={'Genres'} />

			<AdminHeader handleSearch={handleSearch} searchTerm={searchTerm} />
			{
				<AdminTable
					headerItems={['Name', 'Slug']}
					tableItems={data || []}
					removeHandler={deleteAsync}
					isLoading={isLoading}
				/>
			}
		</Meta>
	)
}

export default GenreList
