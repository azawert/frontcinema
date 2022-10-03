import { TypeIconName } from '@/shared/types/icons.types'

export interface IGenre {
	_id: string
	name: string
	slug: string
	description: string
	icon: TypeIconName
}

export interface IParameters {
	year: number
	duration: number
	country: string
}

export interface IActor {
	_id: string
	photo: string
	name: string
	countMovies: number
	slug: string
}

export interface IMovie {
	_id: string
	poster: string
	title: string
	bigPoster: string
	parameters: IParameters
	genres: IGenre[]
	actors: IActor[]
	countOpened: number
	videoUrl: string
	rating: number
	slug: string
}
