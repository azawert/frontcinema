import React from 'react'

import { useActors } from '@/screens/admin/actors/useActors'

import AdminNavigation from '@/ui/AdminNavigation/AdminNavigation'
import AdminTable from '@/ui/admintable/adminTable/AdminTable'
import AdminHeader from '@/ui/admintable/adminheader/AdminHeader'
import Heading from '@/ui/heading/Heading'

import Meta from '@/utils/meta/Meta'

const ActorList = () => {
	const { handleSearch, searchTerm, deleteAsync, data, isLoading } = useActors()
	return (
		<Meta title={'Actors'}>
			<AdminNavigation />
			<Heading title={'Actors'} />

			<AdminHeader handleSearch={handleSearch} searchTerm={searchTerm} />
			{
				<AdminTable
					headerItems={['Name', 'Movies']}
					tableItems={data || []}
					removeHandler={deleteAsync}
					isLoading={isLoading}
				/>
			}
		</Meta>
	)
}

export default ActorList
