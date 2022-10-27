import React, { FC } from 'react'

import Statistics from '@/screens/admin/home/stat/Statistics'

import AdminNavigation from '@/ui/AdminNavigation/AdminNavigation'
import Heading from '@/ui/heading/Heading'

import Meta from '@/utils/meta/Meta'

const Admin: FC = () => {
	return (
		<Meta title={'Admin panel'} description={'Admin panel'}>
			<AdminNavigation />
			<Heading title={'Some statistics'} />
			<Statistics />
		</Meta>
	)
}

export default Admin
