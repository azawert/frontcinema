import { ContentState, EditorState } from 'draft-js'
import htmlToDraft from 'html-to-draftjs'
import React, { FC, useEffect, useState } from 'react'

import { ITextEditor } from '@/ui/form-elements/form.interface'

import styles from './Form.module.scss'

const TextEditor: FC<ITextEditor> = ({
	onChange,
	value,
	placeholder,
	error,
}) => {
	const [editorState, setEditorState] = useState(EditorState.createEmpty())

	const [isUpdated, setIsUpldated] = useState(false)

	useEffect(() => {
		if (isUpdated) return
		const defValue = value || ''
		const blocksFromHtml = htmlToDraft(defValue)
		const contentState = ContentState.createFromBlockArray(
			blocksFromHtml.contentBlocks,
			blocksFromHtml.entityMap
		)
		const newEditorState = EditorState.createWithContent(contentState)
		setEditorState(newEditorState)
	}, [isUpdated, value])

	return <div></div>
}

export default TextEditor
