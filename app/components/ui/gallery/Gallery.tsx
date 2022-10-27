import React, { FC } from 'react'

import GalleryItem from '@/ui/gallery/GalleryItem'
import { IGalleryItem } from '@/ui/gallery/gallery.interface'

import styles from './Gallery.module.scss'

const Gallery: FC<{ items: IGalleryItem[] }> = ({ items }) => {
	return (
		<div className={styles.gallery}>
			{items.map((item) => (
				<GalleryItem item={item} variant={'horizontal'} key={item.name} />
			))}
		</div>
	)
}

export default Gallery
