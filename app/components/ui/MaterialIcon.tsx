import React, { FC } from 'react'
import * as Icons from 'react-icons/md'

import { TypeIconName } from '@/shared/types/icons.types'

const MaterialIcon: FC<{ name: TypeIconName }> = ({ name }) => {
	const IconComponent = Icons[name]

	return (IconComponent && <IconComponent />) || 'Иконка не найдена'
}

export default MaterialIcon
