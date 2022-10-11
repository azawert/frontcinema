import cn from 'classnames'
import React, { FC } from 'react'
import { useQuery } from 'react-query'

import SkeletonLoader from '@/ui/SkeletonLoader'

import { AdminService } from '@/services/admin.service'

import styles from '../Admin.module.scss'

const CountUsers: FC = () => {
	const { data, isLoading } = useQuery('get users count', () =>
		AdminService.getCount()
	)

	return (
		<div className={cn(styles.block, styles.countUsers)}>
			{isLoading ? (
				<SkeletonLoader count={1} />
			) : (
				<div className={styles.number}>{data?.data}</div>
			)}
			<div className={styles.description}>{data?.data=== 1 ? 'user' :'users'}</div>
		</div>
	)
}

export default CountUsers
