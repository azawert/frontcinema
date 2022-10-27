import React, { ChangeEvent, FC } from 'react'

import AdminCreateButton from '@/ui/admintable/adminheader/AdminCreateButton'
import SearchField from '@/ui/searchField/SearchField'

import { ITableItem } from '../adminTable/admintable.interface'

import styles from './AdminHeader.module.scss'

interface IAdminHeader {
	onClick?: () => void
	searchTerm: string
	handleSearch: (event: ChangeEvent<HTMLInputElement>) => void
	data?: ITableItem[]
}

const AdminHeader: FC<IAdminHeader> = ({
	onClick,
	searchTerm,
	handleSearch,
	data,
}) => {
	return (
		<div className={styles.header}>
			<SearchField searchTerm={searchTerm} handleSearch={handleSearch} />

			{onClick && <AdminCreateButton onClick={onClick} />}
		</div>
	)
}

export default AdminHeader
