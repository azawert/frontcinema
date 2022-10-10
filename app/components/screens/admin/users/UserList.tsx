import React from 'react'

import { useUsers } from '@/screens/admin/users/useUsers'

import AdminNavigation from '@/ui/AdminNavigation/AdminNavigation'
import AdminTable from '@/ui/admintable/adminTable/AdminTable'
import AdminHeader from '@/ui/admintable/adminheader/AdminHeader'
import Heading from '@/ui/heading/Heading'

import Meta from '@/utils/meta/Meta'

const UserList = () => {
	const { handleSearch, searchTerm, deleteAsync, data, isLoading } = useUsers()
	return (
		<Meta title={'Users'}>
			<AdminNavigation />
			<Heading title={'Users'} />

			<AdminHeader handleSearch={handleSearch} searchTerm={searchTerm} />
			{
				<AdminTable
					headerItems={['email', 'registration date']}
					tableItems={data || []}
					removeHandler={deleteAsync}
					isLoading={isLoading}
				/>
			}
		</Meta>
	)
}

export default UserList
