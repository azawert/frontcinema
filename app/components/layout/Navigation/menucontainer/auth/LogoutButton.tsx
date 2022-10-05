import { FC, MouseEvent } from 'react'

import MaterialIcon from '@/ui/MaterialIcon'

import { useActions } from '@/hooks/useActions'
import { useAuth } from '@/hooks/useAuth'

const LogoutButton: FC = () => {
	const { logout } = useActions()
	const { user } = useAuth()

	const logoutHandler = (e: MouseEvent<HTMLAnchorElement>) => {
		e.preventDefault()
		logout()
	}

	return (
		<>
			{user && (
				<li>
					<a onClick={logoutHandler}>
						<MaterialIcon name="MdLogout" />
						<span>Logout</span>
					</a>
				</li>
			)}
		</>
	)
}

export default LogoutButton
