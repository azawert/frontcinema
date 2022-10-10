import React, { FC } from 'react'

import CountUsers from '@/screens/admin/home/stat/CountUsers'

import styles from '../Admin.module.scss'

import PopularMovie from './PopularMovie'

const Statistics: FC = () => {
	return (
		<div className={styles.statistics}>
			<CountUsers />
			<PopularMovie />
		</div>
	)
}

export default Statistics
