import { useRouter } from 'next/router'
import { SubmitHandler, UseFormSetValue } from 'react-hook-form'
import { useMutation, useQuery } from 'react-query'
import { toastr } from 'react-redux-toastr'

import { IActorEditInput } from '@/screens/admin/actor/actoredit.interface'

import { actorService } from '@/services/actor.service'

import { getKeys } from '@/utils/object/getKeys'
import { toastError } from '@/utils/toast-error'

import { getAdminUrl } from '../../../../config/url.config'

export const useActorEdit = (setValue: UseFormSetValue<IActorEditInput>) => {
	const { push, query } = useRouter()

	const actorId = String(`/${query.id}`)

	const { isLoading } = useQuery(
		['actor', actorId],
		() => actorService.getById(actorId),
		{
			onError() {
				toastError('Ошибка с получением жанра')
			},
			onSuccess: ({ data }) => {
				getKeys(data).forEach((key) => setValue(key, data[key]))
			},
			enabled: !!query.id,
		}
	)
	const { mutateAsync: updateActor } = useMutation(
		'update',
		(data: IActorEditInput) => actorService.update(actorId, data),
		{
			onError: () => {
				toastError('Проблема с обновлением актера')
			},
			onSuccess: () => {
				push(getAdminUrl('actors'))
					.then()
					.catch((e) => e)
				toastr.success('Актер был обновлен', '')
			},
		}
	)

	const onSubmit: SubmitHandler<IActorEditInput> = async (data) => {
		await updateActor(data)
	}

	return { onSubmit, isLoading }
}
