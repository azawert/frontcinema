import { useRouter } from 'next/router'
import { SubmitHandler, UseFormSetValue } from 'react-hook-form'
import { useMutation, useQuery } from 'react-query'
import { toastr } from 'react-redux-toastr'

import { IUserEditInput } from '@/screens/admin/user/useredit.interface'

import { UserService } from '@/services/user.service'

import { toastError } from '@/utils/toast-error'

export const useUserEdit = (setValue: UseFormSetValue<IUserEditInput>) => {
	const { query } = useRouter()

	const userId = String(`${query.id}`)

	const { isLoading } = useQuery(
		['user ', userId],
		() => UserService.getUserById(userId),
		{
			onError() {
				toastError('Ошибка с получением пользователя')
			},
			onSuccess: ({ data }) => {
				setValue('email', data.email)
				setValue('password', data.password)
			},
			enabled: !!query.id,
		}
	)
	const { mutateAsync: updateUser } = useMutation(
		'update user',
		(data: IUserEditInput) => UserService.update(userId, data),
		{
			onError: () => {
				toastError('Проблема с обновлением юзера')
			},
			onSuccess: () => {
				toastr.success('Юзер был обновлен', '')
			},
		}
	)

	const onSubmit: SubmitHandler<IUserEditInput> = async (data) => {
		await updateUser(data)
	}

	return { onSubmit, isLoading }
}
