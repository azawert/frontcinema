import React, { FC } from 'react'
import ReduxToastr from 'react-redux-toastr'

const ReduxToast: FC = () => {
	return (
		<ReduxToastr
			newestOnTop={false}
			preventDuplicates
			progressBar={true}
			closeOnToastrClick={true}
			timeOut={4000}
			transitionIn={'fadeIn'}
			transitionOut={'fadeOut'}
		/>
	)
}

export default ReduxToast
