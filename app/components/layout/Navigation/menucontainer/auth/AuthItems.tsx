import React, { FC } from 'react'

import MenuItem from '@/components/layout/Navigation/menucontainer/MenuItem'
import LogoutButton from '@/components/layout/Navigation/menucontainer/auth/LogoutButton'


import { useAuth } from '@/hooks/useAuth'

import { getAdminHomeUrl } from '../../../../../config/url.config'
import {IS_CLIENT, IS_SERVER} from "../../../../../config/constatns";

const AuthItems: FC = () => {
	const { user } = useAuth()

	return (
		<>
			{IS_CLIENT &&
				user ? (
					<>
						<MenuItem
							item={{
								icon: 'MdHome',
								link: '/profile',
								title: 'Profile',
							}}
						/>
						<LogoutButton/>
						{user.isAdmin ? (
							<MenuItem
								item={{
									icon: 'MdOutlineLock',
									link: getAdminHomeUrl(),
									title: 'Admin panel',
								}}
							/>
						) : ''}
					</>
				) : (
					<MenuItem item={{icon: 'MdLogin', link: '/auth', title: 'Login'}}/>
				)
			}


		</>
	)
}

export default AuthItems
