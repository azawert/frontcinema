import { useRouter } from 'next/router'
import React, { FC } from 'react'

import { useAuth } from '@/hooks/useAuth'

import { TypeComponentAuthFields, TypeRoles } from '@/shared/types/auth.types'

const CheckRole: FC<TypeComponentAuthFields> = ({ Component, children }) => {
	const { user } = useAuth()
	const router = useRouter()
	const Children = () => <>{children}</>

	if (user?.isAdmin) return <Children />
	if (Component?.isOnlyAdmin) {
		router.pathname !== '/404' && router.replace('/403')
		return null
	}
	const isUser = user && !user.isAdmin
	if (isUser && Component?.isOnlyUser) {
		return <Children />
	} else {
		router.pathname !== '/auth' && router.replace('/auth')
		return null
	}
}

export default CheckRole
