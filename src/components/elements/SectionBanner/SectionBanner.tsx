import React, { DetailedHTMLProps, HTMLAttributes } from 'react'
import TextBlock from '../TextBlock/TextBlock'
import './SectionBanner.scss'

interface Props {
	title: string
	body?: string
	buttonText?: string
	buttonClick?: () => void
	backgroundColor?: string
	backgroundImage?: string
	justifyContent?: 'space-between' | 'space-around' | 'space-evenly' | 'center'
	SideComponent?: React.ReactNode
	textColor?: string
}

const SectionBanner: React.FC<Props> = (props) => {
	const {
		title,
		body,
		buttonText,
		buttonClick,
		backgroundColor,
		backgroundImage,
		justifyContent = 'space-around',
		SideComponent,
		textColor,
	} = props

	const wrapperStyles = () => {
		let styles: DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> = {}
		if (backgroundColor) styles['backgroundColor'] = backgroundColor
		if (backgroundImage) styles['backgroundImage'] = `url(${backgroundImage})`
		if (justifyContent) styles['justifyContent'] = justifyContent
		if (textColor) styles['textColor'] = textColor
		return styles
	}

	return (
		<div className='section-banner-wrapper' style={wrapperStyles()}>
			<TextBlock title={title} body={body} buttonText={buttonText} buttonClick={buttonClick} />
			{SideComponent && SideComponent}
		</div>
	)
}

export default SectionBanner
