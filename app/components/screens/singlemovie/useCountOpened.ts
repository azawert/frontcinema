import { useEffect } from 'react'
import { useMutation, useQuery } from 'react-query'

import { movieService } from '@/services/movie.service'

export const useCountOpened = (slug: string) => {
	const { mutateAsync: updateCount } = useMutation('update counts', () =>
		movieService.updateCount(slug)
	)
	useEffect(() => {
		updateCount()
	}, [])
}
