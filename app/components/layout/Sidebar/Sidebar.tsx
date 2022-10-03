import React from 'react'

import Search from '@/components/layout/Sidebar/Search/Search'
import MoviesContainer from '@/components/layout/Sidebar/moviescontainer/MoviesContainer'

import styles from './Sidebar.module.scss'

const Sidebar = () => {
	return (
		<div className={styles.sidebar}>
			<Search />
			<MoviesContainer />
		</div>
	)
}

export default Sidebar
