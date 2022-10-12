import React from 'react'

import Forbidden from '@/screens/403page/Forbidden'

import { NextPageAuth } from '@/shared/types/auth.types'

const ForbiddenPage: NextPageAuth = () => {
	return <Forbidden title={'У вас нет прав для просмотра этой страницы'} />
}

export default ForbiddenPage
