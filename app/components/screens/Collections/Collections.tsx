import React, { FC } from 'react'

import CollectionItem from '@/screens/Collections/CollectionItem'
import { ICollection } from '@/screens/Collections/collections.interface'

import Description from '@/ui/heading/Description'
import Heading from '@/ui/heading/Heading'

import Meta from '@/utils/meta/Meta'

import styles from './Collections.module.scss'

const Collections: FC<{ collections: ICollection[] }> = ({ collections }) => {
	return (
		<Meta title={'Discovery'} description={'Discovery'}>
			<Heading title={'Discovery'} className={styles.heading} />
			<Description
				description={'In this section you will find all genres on our site'}
				className={styles.description}
			/>
			<section className={styles.collections}>
				{collections.map((collection) => (
					<CollectionItem key={collection._id} collection={collection} />
				))}
			</section>
		</Meta>
	)
}

export default Collections
