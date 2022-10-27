import Link from 'next/link'
import React, { FC, Fragment } from 'react'

import { IContentList } from '@/screens/singlemovie/Content/ContentList/contentlist.interface'

import styles from './ContentList.module.scss'

const ContentList: FC<IContentList> = ({ name, links }) => {
	return (
		<div className={styles.list}>
			<div className={styles.name}>{name}</div>
			<div className={styles.links}>
				{links.map((link, i) => (
					<Fragment key={i}>
						<Link href={link.link}>
							<a>{link.title}</a>
						</Link>
						{i + 1 !== links.length ? ', ' : ''}
					</Fragment>
				))}
			</div>
		</div>
	)
}

export default ContentList
