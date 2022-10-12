import { FC, MouseEvent } from 'react'

import MaterialIcon from '@/ui/MaterialIcon'

import { useActions } from '@/hooks/useActions'
import { useAuth } from '@/hooks/useAuth'
import {useRouter} from "next/router";

const LogoutButton: FC = () => {
	const { logout } = useActions()
	const { user } = useAuth()
	const {...rest} = useRouter()
	const logoutHandler = (e: MouseEvent<HTMLAnchorElement>) => {
		e.preventDefault()
		logout()
		rest.push('/')
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
