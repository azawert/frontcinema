import { useRouter } from 'next/router'
import React, { FC } from 'react'

import MaterialIcon from '@/ui/MaterialIcon'

import styles from './AdminAction.module.scss'

interface IAdminActions {
	editUrl: string
	removeHandler: () => void
}

const AdminAction: FC<IAdminActions> = ({ removeHandler, editUrl }) => {
	const { push } = useRouter()

	return (
		<div className={styles.actions}>
			<button onClick={() => push(editUrl)}>
				<MaterialIcon name={'MdEdit'} />
			</button>
			<button onClick={removeHandler}>
				<MaterialIcon name={'MdDelete'} />
			</button>
		</div>
	)
}

export default AdminAction
