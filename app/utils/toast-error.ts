import { toastr } from 'react-redux-toastr'

import { errorCatch } from '../api/api.helpers'

export const toastError = (e: any, title?: string) => {
	const message = errorCatch(e)
	toastr.error(String(title), '')
	throw message
}
