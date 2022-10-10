import React, { FC } from 'react'

import AdminNavigationItem from '@/ui/AdminNavigation/AdminNavigationItem'
import { navigationItems } from '@/ui/AdminNavigation/adminnavigation.data'

import styles from './AdminNavigation.module.scss'

const AdminNavigation: FC = () => {
	return (
		<nav className={styles.nav}>
			<ul>
				{navigationItems.map((navItem) => (
					<AdminNavigationItem item={navItem} key={navItem.title} />
				))}
			</ul>
		</nav>
	)
}

export default AdminNavigation
