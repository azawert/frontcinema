import React, { FC } from 'react'

import AdminAction from '@/ui/admintable/adminTable/action/AdminAction'
import { IAdminTableItem } from '@/ui/admintable/adminTable/admintable.interface'

import styles from './AdminTable.module.scss'

const AdminTableItem: FC<IAdminTableItem> = ({ tableItem, removeHandler }) => {
	return (
		<div className={styles.item}>
			{tableItem.items.map((value) => (
				<div key={value}>{value}</div>
			))}
			<AdminAction editUrl={tableItem.editUrl} removeHandler={removeHandler} />
		</div>
	)
}

export default AdminTableItem
