import type { AppProps } from 'next/app'

import '@/assets/styles/globals.scss'

import MainProviders from '../app/providers/MainProviders'

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<MainProviders>
			<Component {...pageProps} />
		</MainProviders>
	)
}

export default MyApp
