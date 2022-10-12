import {ContentState, convertToRaw, EditorState} from 'draft-js'
import htmlToDraft from 'html-to-draftjs'
import React, { FC, useEffect, useState } from 'react'

import { ITextEditor } from '@/ui/form-elements/form.interface'

import styles from './Form.module.scss'
import draftToHtml from "draftjs-to-html";
import cn from "classnames";
import {Editor} from "react-draft-wysiwyg";
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'
const TextEditor: FC<ITextEditor> = ({
	onChange,
	value,
	placeholder,
	error,
}) => {
	const [editorState, setEditorState] = useState(EditorState.createEmpty())

	const [isUpdated, setIsUpdated] = useState(false)

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
	const onEditorStateChange = (editorState:EditorState) => {
		setIsUpdated(true)
		setEditorState(editorState)

		return onChange(draftToHtml(convertToRaw(editorState.getCurrentContent())))
	}

	return <div className={cn(styles.common,styles.editorWrapper,'animate-fade')}>
		<label>
			<span>{placeholder}</span>
			<div className={styles.wrapper}>
				<Editor toolbarClassName={styles.toolbar} editorClassName={styles.editor} editorState={editorState} spellCheck onEditorStateChange={onEditorStateChange}/>
			</div>
		</label>
	</div>
}

export default TextEditor
