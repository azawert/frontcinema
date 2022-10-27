import cn from 'classnames'
import parser from 'html-react-parser'
import React, { FC } from 'react'

const Description: FC<{ description: string; className?: string }> = ({
	description,
	className,
}) => {
	return (
		<div
			className={cn('text-lg font-light text-white text-opacity-60', className)}
		>
			{parser(description)}
		</div>
	)
}

export default Description
