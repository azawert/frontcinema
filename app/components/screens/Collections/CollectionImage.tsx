import Image from 'next/image'
import React, { FC } from 'react'

import { ICollection } from '@/screens/Collections/collections.interface'

import styles from './Collections.module.scss'

const MyComponent: FC<{ collection: ICollection }> = ({
	collection: { title, image },
}) => {
	return (
		<Image
			src={image}
			alt={image ? title : ''}
			draggable={false}
			layout={'fill'}
		/>
	)
}

export default MyComponent
