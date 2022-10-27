import { ChangeEvent, useCallback, useMemo, useState } from 'react'
import { useMutation } from 'react-query'

import { fileService } from '@/services/file.service'

import { toastError } from '@/utils/toast-error'

type TypeUpload = (
	onChange: (...event: any[]) => void,
	folder?: string
) => {
	uploadFile: (e: ChangeEvent<HTMLInputElement>) => Promise<void>
	isLoading: boolean
}

export const useUpload: TypeUpload = (onChange, folder) => {
	const [isLoading, setIsLoading] = useState(false)

	const { mutateAsync } = useMutation(
		'uploadFile',
		(data: FormData) => fileService.upload(data, folder),
		{
			onSuccess: ({ data }) => {
				onChange(data[0].url)
			},
			onError: () => {
				toastError('Ошибка при добавлении файла')
			},
		}
	)
	const uploadFile = useCallback(
		async (e: ChangeEvent<HTMLInputElement>) => {
			setIsLoading(true)
			const files = e.target.files
			if (!files?.length) return

			const formData = new FormData()
			formData.append('file', files[0])
			await mutateAsync(formData)
			setTimeout(() => setIsLoading(false), 1500)
		},
		[mutateAsync]
	)
	return useMemo(() => ({ uploadFile, isLoading }), [uploadFile, isLoading])
}
