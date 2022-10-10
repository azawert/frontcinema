import React, { ChangeEvent, FC } from 'react'

import AdminCreateButton from '@/ui/admintable/adminheader/AdminCreateButton'
import SearchField from '@/ui/searchField/SearchField'

import styles from './AdminHeader.module.scss'

interface IAdminHeader {
	onClick?: () => void
	searchTerm: string
	handleSearch: (event: ChangeEvent<HTMLInputElement>) => void
}

const AdminHeader: FC<IAdminHeader> = ({
	onClick,
	searchTerm,
	handleSearch,
}) => {
	return (
		<div className={styles.header}>
			<SearchField searchTerm={searchTerm} handleSearch={handleSearch} />
			{onClick && <AdminCreateButton onClick={onClick} />}
		</div>
	)
}

// const [searchTerm, setSearchTerm] = useState('')
// const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
// 	e.preventDefault()
// 	setSearchTerm(e.target.value)
// 	// const queryFunction = useQuery('search')

export default AdminHeader
