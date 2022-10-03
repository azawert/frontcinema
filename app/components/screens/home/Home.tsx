import React, { FC } from 'react'
import { toastr } from 'react-redux-toastr'

import { IHome } from '@/screens/home/home.interface'

import Heading from '@/ui/heading/Heading'

import Meta from '@/utils/meta/Meta'

const Home: FC<IHome> = () => {
	return (
		<Meta title={'Watch movies'} description={'Watch online movies for free'}>
			<Heading
				title={'Watch movies online!'}
				className={'text-gray-400 mb-8 text-xl'}
			/>
			<button onClick={() => toastr.success('Okay', '')}>Click</button>
		</Meta>
	)
}

export default Home
