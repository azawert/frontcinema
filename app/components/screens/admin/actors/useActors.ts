import { useRouter } from 'next/router'
import { ChangeEvent, useMemo, useState } from 'react'
import { useMutation, useQuery } from 'react-query'
import { toastr } from 'react-redux-toastr'

import { ITableItem } from '@/ui/admintable/adminTable/admintable.interface'

import useDebounce from '@/hooks/useDebounce'

import { actorService } from '@/services/actor.service'

import { getAdminUrl } from '../../../../config/url.config'

export const useActors = () => {
	const [searchTerm, setSearchTerm] = useState<string>('')
	const debouncedSearch = useDebounce(searchTerm, 500)
	const queryData = useQuery(
		['actor list', debouncedSearch],
		() => actorService.getAllActors(debouncedSearch),
		{
			select: ({ data }) =>
				data &&
				data.map(
					(actor): ITableItem => ({
						_id: actor._id,
						editUrl: getAdminUrl(`actor/edit/${actor._id}`),
						items: [actor.name, String(actor.countMovies)],
					})
				),
			onError: (err) => {
				toastr.error('error happened', 'UserList')
			},
			onSuccess: (data) => {
				console.log(data)
			},
		}
	)

	const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(e.target.value)
	}

	const { mutateAsync: deleteAsync } = useMutation(
		'delete actor',
		(actorId: string) => actorService.deleteActor(actorId),
		{
			onError: () => {
				toastr.error('error while deleting actor', 'error')
			},
			onSuccess: () => {
				toastr.success('actor deleted', 'delete was successful')
				queryData.refetch()
			},
		}
	)
	const { push, query } = useRouter()
	const { mutateAsync: createAsync } = useMutation(
		'create movie',
		() => actorService.createActor(),
		{
			onError: () => {
				toastr.error('Actor creation failed', '')
			},
			onSuccess: (data) => {
				toastr.success('Actor page created', '')
				push(getAdminUrl(`actor/edit/${data.data}`))
			},
		}
	)

	return useMemo(
		() => ({
			handleSearch,
			...queryData,
			searchTerm,
			deleteAsync,
			createAsync,
			setSearchTerm,
		}),
		[queryData, searchTerm, deleteAsync, createAsync]
	)
}
