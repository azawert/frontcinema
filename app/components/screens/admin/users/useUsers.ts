import { ChangeEvent, useMemo, useState } from 'react'
import { useMutation, useQuery } from 'react-query'
import { toastr } from 'react-redux-toastr'

import { ITableItem } from '@/ui/admintable/adminTable/admintable.interface'

import useDebounce from '@/hooks/useDebounce'

import { UserService } from '@/services/user.service'

import { convertMongoDate } from '@/utils/date/convertMongoDate'

import { getAdminUrl } from '../../../../config/url.config'

export const useUsers = () => {
	const [searchTerm, setSearchTerm] = useState<string>('')
	const debouncedSearch = useDebounce(searchTerm, 500)
	const queryData = useQuery(
		['user list', debouncedSearch],
		() => UserService.getAllUsers(debouncedSearch),
		{
			select: ({ data }) =>
				data &&
				data.map(
					(user): ITableItem => ({
						_id: user._id,
						editUrl: getAdminUrl(`user/edit/${user._id}`),
						items: [user.email, convertMongoDate(user.createdAt)],
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
		'delete user',
		(userId: string) => UserService.deleteUser(userId),
		{
			onError: () => {
				toastr.error('error while deleting user', 'error')
			},
			onSuccess: () => {
				toastr.success('User deleted', 'delete was successful')
				queryData.refetch()
			},
		}
	)
	return useMemo(
		() => ({
			handleSearch,
			...queryData,
			searchTerm,
			deleteAsync,

			setSearchTerm,
		}),
		[queryData, searchTerm, deleteAsync]
	)
}
