import type { AppProps } from 'next/app'
import { useEffect, useState } from 'react'

import { TypeComponentAuthFields } from '@/shared/types/auth.types'

import '@/assets/styles/globals.scss'

import MainProviders from '../app/providers/MainProviders'

type TypeAppProps = AppProps & TypeComponentAuthFields

function MyApp({ Component, pageProps }: TypeAppProps) {
	const [hydrated, setHydrated] = useState(false)
	useEffect(() => {
		setHydrated(true)
	}, [])
	if (!hydrated) return null
	return (
		<MainProviders Component={Component}>
			<Component {...pageProps} />
		</MainProviders>
	)
}

export default MyApp
