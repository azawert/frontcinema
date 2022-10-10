import React, { FC } from 'react'

import SkeletonLoader from '@/ui/SkeletonLoader'
import AdminTableHeader from '@/ui/admintable/adminTable/AdminTableHeader'
import AdminTableItem from '@/ui/admintable/adminTable/AdminTableItem'
import { ITableItem } from '@/ui/admintable/adminTable/admintable.interface'

interface IAdminTable {
	tableItems: ITableItem[]
	headerItems: string[]
	removeHandler: (id: string) => void
	isLoading: boolean
}

const AdminTable: FC<IAdminTable> = ({
	tableItems,
	headerItems,
	removeHandler,
	isLoading,
}) => {
	return (
		<div>
			<AdminTableHeader headerItems={headerItems} />

			{isLoading ? (
				<SkeletonLoader count={1} height={48} className={'mt-4'} />
			) : (
				tableItems.map((tableItem) => (
					<AdminTableItem
						tableItem={tableItem}
						removeHandler={() => removeHandler(tableItem._id)}
						key={tableItem._id}
					/>
				))
			)}
		</div>
	)
}

export default AdminTable
