import React, { FC } from 'react'

import MenuItem from '@/components/layout/Navigation/menucontainer/MenuItem'
import AuthItems from '@/components/layout/Navigation/menucontainer/auth/AuthItems'
import { IMenu } from '@/components/layout/Navigation/menucontainer/menu.interface'

import styles from './Menu.module.scss'

const Menu: FC<{ menu: IMenu }> = ({ menu: { items, title } }) => {
	return (
		<div className={styles.menu}>
			<div className={styles.heading}>{title}</div>

			{items.map((item) => (
				<MenuItem key={item.title} item={item} />
			))}

			{title === 'General' ? <AuthItems /> : null}
		</div>
	)
}

export default Menu
