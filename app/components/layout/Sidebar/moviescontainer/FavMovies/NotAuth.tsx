import React, { FC } from 'react'

const NotAuthFavMovies: FC = () => {
	return (
		<div className="text-white mt-11 bg-gray-700 bg-opacity-20 py-3 px-5 rounded-lg text-white text-opacity-80">
			Для того, чтобы увидеть фильмы добавленные в избранное, необходимо
			авторизоваться.
		</div>
	)
}

export default NotAuthFavMovies
