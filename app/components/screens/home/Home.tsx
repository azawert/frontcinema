import React, { FC } from 'react'

import { IHome } from '@/screens/home/home.interface'

import Layout from '@/components/layout/Layout'

import styles from './Home.module.scss'

const Home: FC<IHome> = () => {
	return (
		<Layout className={styles.container}>
			<h1>Home Page</h1>
		</Layout>
	)
}

export default Home
