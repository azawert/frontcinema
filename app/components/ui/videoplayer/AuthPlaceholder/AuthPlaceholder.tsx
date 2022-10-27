import cn from 'classnames'
import React, { FC } from 'react'

import AuthButton from '@/ui/videoplayer/AuthPlaceholder/AuthButton'

import styles from './AuthPlaceholder.module.scss'

const AuthPlaceholder: FC<{ slug: string }> = ({ slug }) => {
	return (
		<div className={cn(styles.placeholder)}>
			<div className={'flex flex-col '}>
				<span className={'mb-2'}>You must be logged in to start watch</span>
				<AuthButton slug={slug} />
			</div>
		</div>
	)
}

export default AuthPlaceholder
