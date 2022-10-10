import React from 'react'

import ActorList from '@/screens/admin/actors/ActorList'

import { NextPageAuth } from '@/shared/types/auth.types'

const Actors: NextPageAuth = () => {
	return <ActorList />
}
Actors.isOnlyAdmin = true
export default Actors
