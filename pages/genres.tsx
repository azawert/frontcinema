import { GetStaticProps, NextPage } from 'next'
import React from 'react'

import Collections from '@/screens/Collections/Collections'
import { ICollection } from '@/screens/Collections/collections.interface'

import { genreService } from '@/services/genre.service'

const GenresPage: NextPage<{ collectionData: ICollection[] }> = ({
	collectionData,
}) => {
	return <Collections collections={collectionData || []} />
}

export const getStaticProps: GetStaticProps = async () => {
	try {
		const { data: collectionData } = await genreService.getCollections()
		return {
			props: {
				collectionData,
			},
			revalidate: 60,
		}
	} catch (e) {
		return {
			props: {
				collectionData: [],
			},
		}
	}
}

export default GenresPage
