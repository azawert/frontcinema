import React, { FC } from 'react'
import { CSSTransition } from 'react-transition-group'

import SlideArrow from '@/ui/slider/SlideArrow/SlideArrow'
import SlideItem from '@/ui/slider/SlideItem'
import { ISlide } from '@/ui/slider/slider.interface'
import { useSlider } from '@/ui/slider/useSlider'

import styles from './Slider.module.scss'

interface ISlider {
	slides: ISlide[]
	buttonTitle?: string
}

const Slider: FC<ISlider> = ({ slides, buttonTitle = 'watch' }) => {
	const { handle, index, isNext, isPrev, slideIn } = useSlider(slides.length)
	return (
		<div className={styles.slider}>
			<CSSTransition
				in={slideIn}
				classNames={'slide-animation'}
				timeout={300}
				unmountOnExit
			>
				<SlideItem slide={slides[index]} buttonTitle={buttonTitle} />
			</CSSTransition>
			{isPrev && (
				<SlideArrow variant={'left'} clickHandler={() => handle('prev')} />
			)}
			{isNext && (
				<SlideArrow variant={'right'} clickHandler={() => handle('next')} />
			)}
		</div>
	)
}

export default Slider
