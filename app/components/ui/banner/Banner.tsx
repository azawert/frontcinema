import Image from 'next/image'
import React, { FC } from 'react'

import styles from './Banner.module.scss'

interface IBanner {
	image: string
	Detail?: FC | null
}

const Banner: FC<IBanner> = ({ image, Detail }) => {
	return (
		<div className={styles.banner}>
			<Image
				src={image}
				className={'image-like-bg object-top'}
				layout={'fill'}
				unoptimized
				priority
				draggable={false}
				alt=""
			></Image>
			{Detail && <Detail />}
		</div>
	)
}

export default Banner
