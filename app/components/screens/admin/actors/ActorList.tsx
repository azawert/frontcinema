import React from 'react'

import { useActors } from '@/screens/admin/actors/useActors'

import AdminNavigation from '@/ui/AdminNavigation/AdminNavigation'
import AdminTable from '@/ui/admintable/adminTable/AdminTable'
import AdminHeader from '@/ui/admintable/adminheader/AdminHeader'
import Heading from '@/ui/heading/Heading'

import Meta from '@/utils/meta/Meta'

const ActorList = () => {
	const {
		handleSearch,
		searchTerm,
		deleteAsync,
		data,
		isLoading,
		createAsync,
	} = useActors()
	return (
		<Meta title={'Actors'}>
			<AdminNavigation />
			<Heading title={'Actors'} />

			<AdminHeader
				handleSearch={handleSearch}
				searchTerm={searchTerm}
				onClick={createAsync}
			/>
			{data && data.length > 0 ? (
				<AdminTable
					headerItems={['Name', 'Movies']}
					tableItems={data || []}
					removeHandler={deleteAsync}
					isLoading={isLoading}
				/>
			) : (
				<div className={'text-center mt-10 text-3xl'}>No actors here</div>
			)}
		</Meta>
	)
}

export default ActorList
