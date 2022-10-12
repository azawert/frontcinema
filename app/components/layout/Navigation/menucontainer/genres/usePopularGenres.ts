import { useQuery } from 'react-query'

import { IMenuItem } from '@/components/layout/Navigation/menucontainer/menu.interface'

import { genreService } from '@/services/genre.service'

import { getGenreUrl } from '../../../../../config/url.config'

export const usePopularGenre = () => {
	const { data, isLoading, isSuccess } = useQuery(
		'getGenres',
		() => genreService.getAllGenres(),
		{
			select: ({ data }) =>
				data
					.filter((genre) => genre.icon)
					.map(
						(genre) =>
							({
								icon: genre.icon,
								link: getGenreUrl(genre.slug),
								title: genre.name,
							} as IMenuItem)
					)
					.splice(0, 4),
			onError(error) {
				alert(error)
			},
		}
	)

	return { data, isLoading, isSuccess }
}
