import cn from 'classnames'
import Image from 'next/image'
import React, { FC } from 'react'

import SkeletonLoader from '@/ui/SkeletonLoader'
import { IUploadField } from '@/ui/form-elements/form.interface'
import { useUpload } from '@/ui/form-elements/uploadfield/useUpload'

import styles from '../Form.module.scss'

const UploadField: FC<IUploadField> = ({
	error,
	onChange,
	placeholder,
	image,
	isNoImage = false,
	style,
	folder,
}) => {
	const { uploadFile, isLoading } = useUpload(onChange, folder)
	return (
		<div className={cn(styles.field, styles.uploadField)} style={style}>
			<div className={styles.uploadFlex}>
				<label>
					<span>{placeholder}</span>
					<input type={'file'} onChange={uploadFile} />
					{error && <div className={styles.error}>{error.message}</div>}
				</label>
				{!isNoImage && (
					<div className={styles.uploadImageContainer}>
						{isLoading ? (
							<SkeletonLoader count={1} className={'w-full h-full'} />
						) : (
							image && <Image alt="" src={image} layout={'fill'} unoptimized />
						)}
					</div>
				)}
			</div>
		</div>
	)
}

export default UploadField
