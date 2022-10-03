import { ReactNode } from 'react'

export interface ISeo {
	title: string
	description?: string | null
	image?: string | null
	children?: ReactNode
}
